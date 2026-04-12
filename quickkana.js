const State = {
    kana: 'hiragana',
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
    hiragana: { 'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o', 'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko', 'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so', 'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to', 'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no', 'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho', '마': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo', 'や': 'ya', 'ゆ': 'yu', 'よ': 'yo', 'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro', 'わ': 'wa', '를': 'wo', 'ん': 'n' },
    katakana: { 'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o', 'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko', 'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so', 'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to', 'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no', 'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho', 'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo', 'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo', 'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro', 'ワ': 'wa', 'ヲ': 'wo', 'ン': 'n' },
    dakuten: { 'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go', 'ざ': 'za', 'じ': 'ji', 'ず': 'zu', 'ぜ': 'ze', 'ぞ': 'zo', 'だ': 'da', 'ぢ': 'ji', 'づ': 'zu', 'で': 'de', 'ど': 'do', 'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo', 'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po', 'ガ': 'ga', 'ギ': 'gi', 'グ': 'gu', 'ゲ': 'ge', 'ゴ': 'go', 'ザ': 'za', 'ジ': 'ji', 'ズ': 'zu', 'ゼ': 'ze', 'ゾ': 'zo', 'ダ': 'da', 'ヂ': 'ji', 'ヅ': 'zu', 'デ': 'de', 'ド': 'do', 'バ': 'ba', 'ビ': 'bi', 'ブ': 'bu', 'ベ': 'be', 'ボ': 'bo', 'パ': 'pa', 'ピ': 'pi', 'プ': 'pu', 'ペ': 'pe', 'ポ': 'po' },
    combos: { 'きゃ': 'kya', 'きゅ': 'kyu', 'きょ': 'kyo', 'しゃ': 'sha', 'しゅ': 'shu', 'しょ': 'sho', 'ちゃ': 'cha', 'ちゅ': 'chu', 'ちょ': 'cho', 'にゃ': 'nya', 'にゅ': 'nyu', 'にょ': 'nyo', 'ひゃ': 'hya', 'ひゅ': 'hyu', 'ひょ': 'hyo', 'みゃ': 'mya', 'みゅ': 'myu', 'みょ': 'myo', 'りゃ': 'rya', 'りゅ': 'ryu', 'りょ': 'ryo', 'ぎゃ': 'gya', 'ぎゅ': 'gyu', 'ぎょ': 'gyo', 'じゃ': 'ja', 'じゅ': 'ju', 'じょ': 'jo', 'びゃ': 'bya', 'びゅ': 'byu', 'びょ': 'byo', 'ぴゃ': 'pya', 'ぴゅ': 'pyu', 'ぴょ': 'pyo' },
    vocabulary: { 'りんご': { rom: 'ringo', def: 'Apple' }, 'ねこ': { rom: 'neko', def: 'Cat' }, 'いぬ': { rom: 'inu', def: 'Dog' }, 'みず': { rom: 'mizu', def: 'Water' }, 'おちゃ': { rom: 'ocha', def: 'Tea' }, '사카나': { rom: 'sakana', def: 'Fish' }, '토리': { rom: 'tori', def: 'Bird' }, '이에': { rom: 'ie', def: 'House' }, '쿠루마': { rom: 'kuruma', def: 'Car' }, '혼': { rom: 'hon', def: 'Book' } },
    travel: { 'こんにちは': { rom: 'konnichiwa', def: 'Hello' }, 'ありがとう': { rom: 'arigatou', def: 'Thank you' }, 'すみません': { rom: 'sumimasen', def: 'Excuse me' }, 'はい': { rom: 'hai', def: 'Yes' }, 'いいえ': { rom: 'iie', def: 'No' }, 'トイレ': { rom: 'toire', def: 'Toilet' }, 'えき': { rom: 'eki', def: 'Station' }, 'ホテル': { rom: 'hoteru', def: 'Hotel' } },
    school: { 'せんせい': { rom: 'sensei', def: 'Teacher' }, '가': 'Student', '교': 'Classroom', '책': 'Desk', '의': 'Chair', '친': 'Friend' }
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
        const s = localStorage.getItem('quickkana_stats');
        if (s) State.persistence = JSON.parse(s);
    } catch(e) {}
}

function saveStats() {
    localStorage.setItem('quickkana_stats', JSON.stringify(State.persistence));
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

function toggleOption(id, key) {
    State[key] = !State[key];
    document.getElementById(id).classList.toggle('selected', State[key]);
}

function setMode(m, el) {
    State.mode = m;
    document.querySelectorAll('.mode-card[data-mode]').forEach(c => c.classList.remove('selected'));
    if (el) el.classList.add('selected');
}

function startSession() {
    State.currentDict = {};
    if (State.topCategory === 'chars') {
        ['hiragana', 'katakana', 'dakuten', 'combos'].forEach(c => {
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
    m.lang = 'ja-JP';
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
