const State = {
    mode: 'quiz',
    isReverse: false,
    isTestAll: false,
    isTeachMode: false,
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
    consonants: { 'ㄱ': 'g', 'ㄴ': 'n', 'ㄷ': 'd', 'ㄹ': 'r', 'ㅁ': 'm', 'ㅂ': 'b', 'ㅅ': 's', 'ㅇ': 'ng', 'ㅈ': 'j', 'ㅊ': 'ch', 'ㅋ': 'k', 'ㅌ': 't', 'ㅍ': 'p', 'ㅎ': 'h' },
    doubleConsonants: { 'ㄲ': 'kk', 'ㄸ': 'tt', 'ㅃ': 'pp', 'ㅆ': 'ss', 'ㅉ': 'jj' },
    vowels: { 'ㅏ': 'a', 'ㅑ': 'ya', 'ㅓ': 'eo', 'ㅕ': 'yeo', 'ㅗ': 'o', 'ㅛ': 'yo', 'ㅜ': 'u', 'ㅠ': 'yu', 'ㅡ': 'eu', 'ㅣ': 'i' },
    diphthongs: { 'ㅐ': 'ae', 'ㅒ': 'yae', 'ㅔ': 'e', 'ㅖ': 'ye', 'ㅘ': 'wa', 'ㅙ': 'wae', 'ㅚ': 'oe', 'ㅝ': 'wo', 'ㅞ': 'we', 'ㅟ': 'wi', 'ㅢ': 'ui' },
    vocabulary: { '사과': { rom: 'sagwa', def: 'Apple' }, '우유': { rom: 'uyu', def: 'Milk' }, '고기': { rom: 'gogi', def: 'Meat' }, '나라': { rom: 'nara', def: 'Country' }, '도시': { rom: 'dosi', def: 'City' }, '아이': { rom: 'ai', def: 'Child' }, '오이': { rom: 'oi', def: 'Cucumber' }, '모자': { rom: 'moja', def: 'Hat' }, '학교': { rom: 'hakgyo', def: 'School' }, '바다': { rom: 'bada', def: 'Sea' }, '하늘': { rom: 'haneul', def: 'Sky' }, '물': { rom: 'mul', def: 'Water' }, '사랑': { rom: 'sarang', def: 'Love' } },
    travel: { '안녕하세요': { rom: 'annyeonghaseyo', def: 'Hello' }, '감사합니다': { rom: 'gamsahamnida', def: 'Thank you' }, '화장실': { rom: 'hwajangsil', def: 'Restroom' }, '여권': { rom: 'yeogwon', def: 'Passport' }, '비행기': { rom: 'bihaenggi', def: 'Airplane' }, '택시': { rom: 'taeksi', def: 'Taxi' }, '한국': { rom: 'hanguk', def: 'Korea' } },
    school: { '선생님': { rom: 'seonsaengnim', def: 'Teacher' }, '학생': { rom: 'haksaeng', def: 'Student' }, '교실': { rom: 'gyosil', def: 'Classroom' }, '책': { rom: 'chaek', def: 'Book' }, '대학교': { rom: 'daehakgyo', def: 'University' }, '친구': { rom: 'chingu', def: 'Friend' } }
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
    
    loadStats();
}

function loadStats() {
    try {
        const s = localStorage.getItem('quickhangul_stats');
        if (s) State.persistence = JSON.parse(s);
    } catch(e) {}
}

function saveStats() {
    localStorage.setItem('quickhangul_stats', JSON.stringify(State.persistence));
}

function showScreen(n) {
    Object.values(ui.screens).forEach(s => s.classList.add('hidden'));
    ui.screens[n].classList.remove('hidden');
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

function startSession() {
    State.currentDict = {};
    if (State.topCategory === 'chars') {
        ['consonants', 'vowels', 'doubleConsonants', 'diphthongs'].forEach(c => {
            if (State.activeCats && State.activeCats.includes(c)) Object.assign(State.currentDict, DATA[c]);
        });
    } else {
        ['vocabulary', 'travel', 'school'].forEach(c => {
            if (State.activeCats && State.activeCats.includes(c)) Object.assign(State.currentDict, DATA[c]);
        });
    }
    
    if (Object.keys(State.currentDict).length === 0) {
        alert('Please select at least one category');
        return;
    }

    State.currentKeys = Object.keys(State.currentDict);
    State.score = 0; State.streak = 0; State.qCount = 0; State.sessionAttempts = 0;
    
    if (State.isTestAll || State.isTeachMode) {
        State.testPool = [...State.currentKeys].sort(() => Math.random() - 0.5);
        if (State.isTeachMode && !State.isTestAll) State.testPool = State.testPool.slice(0, 20);
        State.maxQ = State.testPool.length;
    } else {
        State.maxQ = Math.min(20, State.currentKeys.length || 1);
    }

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
        if (State.isTeachMode && State.wrongQueue.length > 0) {
            State.testPool = [...State.wrongQueue]; State.wrongQueue = []; State.qCount = 0; State.maxQ = State.testPool.length;
        } else { endSession(); return; }
    }
    
    State.isProcessing = false;
    if (State.mode === 'typing') { State.typingInput = ''; updateTypingDisplay(); }

    let c;
    if (State.mode === 'flashcards') c = State.flashcards.pool[State.flashcards.index];
    else c = (State.isTestAll || State.isTeachMode) ? State.testPool[State.qCount % State.testPool.length] : State.currentKeys[Math.floor(Math.random()*State.currentKeys.length)];

    let a = State.currentDict[c];
    const def = typeof a === 'object' ? a.def : a;
    const rom = typeof a === 'object' ? a.rom : a;

    State.currentQ = { char: c, answer: State.isReverse ? c : def, display: State.isReverse ? def : c, rom: rom, def: def };
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
            if (State.isTeachMode && !State.wrongQueue.includes(State.currentQ.char)) State.wrongQueue.push(State.currentQ.char);
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
    m.lang = 'ko-KR';
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
    const layout = [['ㅂ','ㅈ','ㄷ','ㄱ','ㅅ','ㅛ','ㅕ','ㅑ','ㅐ','ㅔ'], ['ㅁ','ㄴ','ㅇ','ㄹ','ㅎ','ㅗ','ㅓ','ㅏ','ㅣ'], ['ㅋ','ㅌ','ㅊ','ㅍ','ㅠ','ㅜ','ㅡ']];
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
