const State = {
    mode: 'quiz',
    isReverse: false,
    wrongQueue: [],
    testPool: [],
    currentDict: {},
    currentKeys: [],
    score: 0,
    sessionAttempts: 0,
    streak: 0,
    maxStreak: 0,
    qCount: 0,
    maxQ: 20,
    currentQ: null,
    isProcessing: false,
    flashcards: {
        index: 0,
        pool: []
    },
    typingInput: '',
    timer: {
        count: 60,
        interval: null
    },
    persistence: {
        mastery: {},
        customList: {}
    }
};

const DATA = {
    vocabulary: { 'Pomme': { rom: 'Pomme', def: 'Apple' }, 'Pain': { rom: 'Pain', def: 'Bread' }, 'Eau': { rom: 'Eau', def: 'Water' }, 'Lait': { rom: 'Lait', def: 'Milk' }, 'Chat': { rom: 'Chat', def: 'Cat' }, 'Chien': { rom: 'Chien', def: 'Dog' }, 'Maison': { rom: 'Maison', def: 'House' }, 'Voiture': { rom: 'Voiture', def: 'Car' }, 'Livre': { rom: 'Livre', def: 'Book' }, 'École': { rom: 'École', def: 'School' }, 'Ami': { rom: 'Ami', def: 'Friend' }, 'Famille': { rom: 'Famille', def: 'Family' }, 'Amour': { rom: 'Amour', def: 'Love' } },
    travel: { 'Bonjour': { rom: 'Bonjour', def: 'Hello' }, 'Merci': { rom: 'Merci', def: 'Thank you' }, 'Pardon': { rom: 'Pardon', def: 'Excuse me' }, 'Oui': { rom: 'Oui', def: 'Yes' }, 'Non': { rom: 'Non', def: 'No' }, 'Toilettes': { rom: 'Toilettes', def: 'Restroom' }, 'Gare': { rom: 'Gare', def: 'Station' }, 'Hôtel': { rom: 'Hôtel', def: 'Hotel' }, 'Aéroport': { rom: 'Aéroport', def: 'Airport' }, 'Taxi': { rom: 'Taxi', def: 'Taxi' }, 'Passeport': { rom: 'Passeport', def: 'Passport' } },
    school: { 'Professeur': { rom: 'Professeur', def: 'Teacher' }, 'Étudiant': { rom: 'Étudiant', def: 'Student' }, 'Classe': { rom: 'Classe', def: 'Classroom' }, 'Bureau': { rom: 'Bureau', def: 'Desk' }, 'Chaise': { rom: 'Chaise', def: 'Chair' }, 'Crayon': { rom: 'Crayon', def: 'Pencil' }, 'Stylo': { rom: 'Stylo', def: 'Pen' }, 'Cahier': { rom: 'Cahier', def: 'Notebook' } }
};

const ui = {};

function init() {
    ui.screens = { intro: document.getElementById('intro-screen'), flow: document.getElementById('flow-screen'), study: document.getElementById('study-screen'), results: document.getElementById('results-screen') };
    ui.progressBar = document.getElementById('progress-bar');
    ui.question = document.getElementById('question-display');
    ui.options = document.getElementById('options-grid');
    ui.score = document.getElementById('score-counter');
    ui.streak = document.getElementById('streak-counter');
    ui.timer = document.getElementById('timer-display');
    
    document.getElementById('year').textContent = new Date().getFullYear();

    document.getElementById('menu-toggle').onclick = () => toggleMenu(true);
    document.getElementById('menu-close').onclick = () => toggleMenu(false);
    document.getElementById('menu-overlay').onclick = () => toggleMenu(false);
    
    loadStats();
}

function loadStats() {
    try {
        const s = localStorage.getItem('quickfrench_stats');
        if (s) State.persistence = JSON.parse(s);
    } catch(e) {}
}

function saveStats() {
    localStorage.setItem('quickfrench_stats', JSON.stringify(State.persistence));
}

function showScreen(n) {
    Object.values(ui.screens).forEach(s => s.classList.add('hidden'));
    ui.screens[n].classList.remove('hidden');
}

function toggleMenu(show) {
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('menu-overlay');
    if (show) {
        drawer.classList.add('active');
        overlay.classList.add('active');
    } else {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
    }
}

function nextStep(n) {
    document.querySelectorAll('.step-container').forEach(s => s.classList.add('hidden'));
    document.getElementById(`flow-step-${n}`).classList.remove('hidden');
    if (n === 0) showScreen('flow');
}

function selectFlow(flow) {
    State.topCategory = flow;
    nextStep(2);
}

function toggleCategory(c, b) {
    if (!State.activeCats) State.activeCats = [];
    if (State.activeCats.includes(c)) {
        State.activeCats = State.activeCats.filter(x => x !== c);
        b.classList.remove('selected');
    } else {
        State.activeCats.push(c);
        b.classList.add('selected');
    }
}

function setMode(m, el) {
    State.mode = m;
    document.querySelectorAll('.mode-card[data-mode]').forEach(c => c.classList.remove('selected'));
    if (el) el.classList.add('selected');
}

function toggleOption(id, key) {
    const el = document.getElementById(id);
    State[key] = !State[key];
    el.classList.toggle('selected', State[key]);
}

function startSession() {
    State.currentDict = {};
    ['vocabulary', 'travel', 'school'].forEach(c => {
        if (State.activeCats && State.activeCats.includes(c)) Object.assign(State.currentDict, DATA[c]);
    });
    
    if (Object.keys(State.currentDict).length === 0) {
        alert('Please select at least one category');
        return;
    }

    State.currentKeys = Object.keys(State.currentDict);
    State.score = 0; State.streak = 0; State.qCount = 0; State.sessionAttempts = 0;
    State.maxQ = Math.min(20, State.currentKeys.length || 1);

    State.flashcards.pool = [...State.currentKeys].sort(() => Math.random() - 0.5);
    State.flashcards.index = 0;

    ui.options.classList.toggle('hidden', ['flashcards', 'typing'].includes(State.mode));
    document.getElementById('fc-controls').classList.toggle('hidden', State.mode !== 'flashcards');
    document.getElementById('typing-controls').classList.toggle('hidden', State.mode !== 'typing');

    if (State.mode === 'typing') renderKeyboard();
    if (State.mode === 'speedMatch') startSpeedMatch();
    else nextQuestion();
    
    showScreen('study');
}

function nextQuestion() {
    if (State.qCount >= State.maxQ && State.mode !== 'flashcards' && State.mode !== 'speedMatch') {
        endSession(); return;
    }
    
    State.isProcessing = false;
    if (State.mode === 'typing') { State.typingInput = ''; updateTypingDisplay(); }

    let c;
    if (State.mode === 'flashcards') c = State.flashcards.pool[State.flashcards.index];
    else c = State.currentKeys[Math.floor(Math.random()*State.currentKeys.length)];

    let a = State.currentDict[c];
    const def = typeof a === 'object' ? a.def : a;
    const rom = typeof a === 'object' ? a.rom : a;

    State.currentQ = { 
        char: c,
        answer: State.isReverse ? c : def, 
        display: State.isReverse ? def : c,
        rom: rom,
        def: def
    };
    ui.question.textContent = State.currentQ.display;

    if (!['typing', 'flashcards'].includes(State.mode)) {
        const ops = [State.currentQ.answer];
        while (ops.length < Math.min(4, State.currentKeys.length)) {
            const k = State.currentKeys[Math.floor(Math.random()*State.currentKeys.length)];
            const v = State.isReverse ? k : (typeof State.currentDict[k] === 'object' ? State.currentDict[k].def : State.currentDict[k]);
            if (!ops.includes(v)) ops.push(v);
        }
        ops.sort(() => Math.random() - 0.5);
        ui.options.innerHTML = '';
        ops.forEach(o => {
            const b = document.createElement('button');
            b.className = 'btn-option';
            b.textContent = o;
            b.onclick = () => submitAnswer(o, b);
            ui.options.appendChild(b);
        });
    }
    ui.progressBar.style.width = `${(State.qCount/State.maxQ)*100}%`;
}

function submitAnswer(s, b) {
    if (State.isProcessing) return;
    const correct = s.toLowerCase().trim() === State.currentQ.answer.toLowerCase().trim();
    
    if (State.mode !== 'flashcards') {
        State.isProcessing = true; State.qCount++; State.sessionAttempts++;
        if (correct) {
            State.score++; State.streak++;
            if (State.streak > State.maxStreak) State.maxStreak = State.streak;
            if (b) b.classList.add('correct');
        } else {
            State.streak = 0;
            if (b) b.classList.add('wrong');
        }
        ui.score.textContent = State.score; ui.streak.textContent = State.streak;
        setTimeout(nextQuestion, 1000);
    }
}

function endSession() {
    showScreen('results');
    document.getElementById('final-score').textContent = State.score;
    document.getElementById('final-acc').textContent = Math.round((State.score/(State.sessionAttempts||1))*100) + '%';
    document.getElementById('final-streak').textContent = State.maxStreak;
}

function startSpeedMatch() {
    State.timer.count = 60;
    ui.timer.classList.remove('hidden');
    State.timer.interval = setInterval(() => {
        State.timer.count--;
        document.getElementById('timer-val').textContent = State.timer.count + 's';
        if (State.timer.count <= 0) { clearInterval(State.timer.interval); endSession(); }
    }, 1000);
    nextQuestion();
}

function speak(t) {
    window.speechSynthesis.cancel();
    const m = new SpeechSynthesisUtterance(t);
    m.lang = 'fr-FR';
    window.speechSynthesis.speak(m);
}

function moveFlashcard(d) {
    State.flashcards.index = (State.flashcards.index + d + State.flashcards.pool.length) % State.flashcards.pool.length;
    nextQuestion();
    speak(State.currentQ.char);
}

function updateTypingDisplay() {
    document.getElementById('typing-display').textContent = State.typingInput || ' ';
}

function renderKeyboard() {
    const layout = [['q','w','e','r','t','y','u','i','o','p'], ['a','s','d','f','g','h','j','k','l'], ['z','x','c','v','b','n','m']];
    const c = document.getElementById('virtual-keyboard');
    c.innerHTML = '';
    layout.forEach(r => {
        const row = document.createElement('div');
        row.className = 'keyboard-row';
        r.forEach(k => {
            const key = document.createElement('div');
            key.className = 'key';
            key.textContent = k;
            key.onclick = () => { State.typingInput += k; updateTypingDisplay(); };
            row.appendChild(key);
        });
        c.appendChild(row);
    });
}

init();
