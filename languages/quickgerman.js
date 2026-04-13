const DATA = {
    vocabulary: { 'Apfel': { rom: 'Apfel', def: 'Apple' }, 'Katze': { rom: 'Katze', def: 'Cat' }, 'Hund': { rom: 'Hund', def: 'Dog' }, 'Wasser': { rom: 'Wasser', def: 'Water' }, 'Tee': { rom: 'Tee', def: 'Tea' }, 'Fisch': { rom: 'Fisch', def: 'Fish' }, 'Vogel': { rom: 'Vogel', def: 'Bird' }, 'Haus': { rom: 'Haus', def: 'House' }, 'Auto': { rom: 'Auto', def: 'Car' }, 'Buch': { rom: 'Buch', def: 'Book' }, 'Sonne': { rom: 'Sonne', def: 'Sun' }, 'Mond': { rom: 'Mond', def: 'Moon' }, 'Himmel': { rom: 'Himmel', def: 'Sky' }, 'Blume': { rom: 'Blume', def: 'Flower' }, 'Baum': { rom: 'Baum', def: 'Tree' }, 'Brot': { rom: 'Brot', def: 'Bread' }, 'Milch': { rom: 'Milch', def: 'Milk' }, 'Käse': { rom: 'Käse', def: 'Cheese' }, 'Ei': { rom: 'Ei', def: 'Egg' }, 'Saft': { rom: 'Saft', def: 'Juice' } },
    travel: { 'Hallo': { rom: 'Hallo', def: 'Hello' }, 'Danke': { rom: 'Danke', def: 'Thank you' }, 'Bitte': { rom: 'Bitte', def: 'Please' }, 'Entschuldigung': { rom: 'Entschuldigung', def: 'Excuse me' }, 'Ja': { rom: 'Ja', def: 'Yes' }, 'Nein': { rom: 'Nein', def: 'No' }, 'Guten Morgen': { rom: 'Guten Morgen', def: 'Good morning' }, 'Guten Tag': { rom: 'Guten Tag', def: 'Good day' }, 'Guten Abend': { rom: 'Guten Abend', def: 'Good evening' }, 'Auf Wiedersehen': { rom: 'Auf Wiedersehen', def: 'Goodbye' }, 'Bahnhof': { rom: 'Bahnhof', def: 'Station' }, 'Flughafen': { rom: 'Flughafen', def: 'Airport' }, 'Hotel': { rom: 'Hotel', def: 'Hotel' }, 'Taxi': { rom: 'Taxi', def: 'Taxi' }, 'Hilfe': { rom: 'Hilfe', def: 'Help' }, 'Toilette': { rom: 'Toilette', def: 'Toilet' }, 'Essen': { rom: 'Essen', def: 'Food' }, 'Trinken': { rom: 'Trinken', def: 'Drink' }, 'Geld': { rom: 'Geld', def: 'Money' }, 'Ticket': { rom: 'Ticket', def: 'Ticket' } },
    school: { 'Lehrer': { rom: 'Lehrer', def: 'Teacher' }, 'Student': { rom: 'Student', def: 'Student' }, 'Schule': { rom: 'Schule', def: 'School' }, 'Klassenzimmer': { rom: 'Klassenzimmer', def: 'Classroom' }, 'Buch': { rom: 'Buch', def: 'Book' }, 'Schreibtisch': { rom: 'Schreibtisch', def: 'Desk' }, 'Stuhl': { rom: 'Stuhl', def: 'Chair' }, 'Stift': { rom: 'Stift', def: 'Pen' }, 'Heft': { rom: 'Heft', def: 'Notebook' }, 'Hausaufgaben': { rom: 'Hausaufgaben', def: 'Homework' }, 'Prüfung': { rom: 'Prüfung', def: 'Exam' }, 'Lernen': { rom: 'Lernen', def: 'Learn' }, 'Wissen': { rom: 'Wissen', def: 'Knowledge' }, 'Freund': { rom: 'Freund', def: 'Friend' }, 'Sprache': { rom: 'Sprache', def: 'Language' } }
};

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
    flashcards: { index: 0, pool: [] },
    typingInput: '',
    timer: { count: 60, interval: null },
    activeCats: ['vocabulary'],
    persistence: { totalXP: 0, level: 1, mastery: {} }
};

const ui = {};

function init() {
    ui.progressBar = document.getElementById('progress-bar');
    ui.question = document.getElementById('question-display');
    ui.options = document.getElementById('options-grid');
    ui.score = document.getElementById('score-counter');
    ui.streak = document.getElementById('streak-counter');
    ui.timer = document.getElementById('timer-display');

    document.getElementById('year').textContent = new Date().getFullYear();
    loadStats();
}

function loadStats() {
    const s = localStorage.getItem('quickgerman_stats');
    if (s) Object.assign(State.persistence, JSON.parse(s));
}

function saveStats() {
    localStorage.setItem('quickgerman_stats', JSON.stringify(State.persistence));
}

function showScreen(id) {
    ['intro', 'flow', 'study', 'results'].forEach(s => document.getElementById(`${s}-screen`).classList.add('hidden'));
    document.getElementById(`${id}-screen`).classList.remove('hidden');
}

function nextStep(n) {
    showScreen('flow');
    document.querySelectorAll('.step-container').forEach(s => s.classList.add('hidden'));
    document.getElementById(`flow-step-${n}`).classList.remove('hidden');
}

function selectFlow(f) {
    State.topCategory = f;
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
    m.lang = 'de-DE';
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
    const layout = [['q','w','e','r','t','z','u','i','o','p','ü'], ['a','s','d','f','g','h','j','k','l','ö','ä'], ['y','x','c','v','b','n','m','ß']];
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

window.ui = ui;
window.State = State;
window.DATA = DATA;
window.init = init;
window.showScreen = showScreen;
window.nextStep = nextStep;
window.selectFlow = selectFlow;
window.toggleCategory = toggleCategory;
window.setMode = setMode;
window.startSession = startSession;
window.nextQuestion = nextQuestion;
window.submitAnswer = submitAnswer;
window.endSession = endSession;
window.startSpeedMatch = startSpeedMatch;
window.moveFlashcard = moveFlashcard;
window.updateTypingDisplay = updateTypingDisplay;
window.renderKeyboard = renderKeyboard;
window.toggleMenu = toggleMenu;

init();
