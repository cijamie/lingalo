const LANGUAGES = {
    japanese: {
        id: 'japanese',
        name: 'Japanese',
        accent: '#ff4d4d',
        accentGlow: 'rgba(255, 77, 77, 0.4)',
        font: "'Noto Sans JP', sans-serif",
        icon: '🇯🇵',
        title: 'QuickKana',
        subtitle: 'Master the Art of Japanese',
        tags: 'Hiragana • Katakana • Vocabulary',
        pathIcons: ['あア', 'りんご'],
        fundamentals: ['hiragana', 'katakana', 'dakuten', 'combos'],
        fundamentalLabels: ['Hiragana', 'Katakana', 'Dakuten', 'Combos'],
        reverseDesc: 'Guess Japanese from English',
        speechLang: 'ja-JP',
        data: {
            hiragana: { 'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o', 'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko', 'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so', 'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to', 'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no', 'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho', 'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo', 'や': 'ya', 'ゆ': 'yu', 'よ': 'yo', 'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro', 'わ': 'wa', 'を': 'wo', 'ん': 'n' },
            katakana: { 'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o', 'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko', 'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so', 'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to', 'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no', 'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho', 'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo', 'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo', 'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro', 'ワ': 'wa', 'ヲ': 'wo', 'ン': 'n' },
            dakuten: { 'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go', 'ざ': 'za', 'じ': 'ji', 'ず': 'zu', 'ぜ': 'ze', 'ぞ': 'zo', '다': 'da', 'ぢ': 'ji', 'づ': 'zu', 'で': 'de', 'ど': 'do', 'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo', 'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po', 'ガ': 'ga', 'ギ': 'gi', 'グ': 'gu', 'ゲ': 'ge', 'ゴ': 'go', 'ザ': 'za', 'ジ': 'ji', 'ズ': 'zu', 'ゼ': 'ze', 'ゾ': 'zo', 'ダ': 'da', 'ヂ': 'ji', 'ヅ': 'zu', 'デ': 'de', 'ド': 'do', 'バ': 'ba', 'ビ': 'bi', 'ブ': 'bu', 'ベ': 'be', 'ボ': 'bo', 'パ': 'pa', 'ピ': 'pi', 'プ': 'pu', 'ペ': 'pe', 'ポ': 'po' },
            combos: { 'きゃ': 'kya', 'きゅ': 'kyu', 'きょ': 'kyo', 'しゃ': 'sha', 'しゅ': 'shu', 'しょ': 'sho', 'ちゃ': 'cha', 'ちゅ': 'chu', 'ちょ': 'cho', 'にゃ': 'nya', 'にゅ': 'nyu', 'にょ': 'nyo', 'ひゃ': 'hya', 'ひゅ': 'hyu', 'ひょ': 'hyo', 'みゃ': 'mya', 'みゅ': 'myu', 'みょ': 'myo', 'りゃ': 'rya', 'りゅ': 'ryu', 'りょ': 'ryo', 'ぎゃ': 'gya', 'ぎゅ': 'gyu', 'ぎょ': 'gyo', 'じゃ': 'ja', 'じゅ': 'ju', 'じょ': 'jo', 'びゃ': 'bya', 'びゅ': 'byu', 'びょ': 'byo', 'ぴゃ': 'pya', 'ぴゅ': 'pyu', 'ぴょ': 'pyo' },
            vocabulary: { 'りんご': { rom: 'ringo', def: 'Apple' }, 'ねこ': { rom: 'neko', def: 'Cat' }, 'いぬ': { rom: 'inu', def: 'Dog' }, 'みず': { rom: 'mizu', def: 'Water' }, 'おちゃ': { rom: 'ocha', def: 'Tea' }, 'さかな': { rom: 'sakana', def: 'Fish' }, 'とり': { rom: 'tori', def: 'Bird' }, 'いえ': { rom: 'ie', def: 'House' }, 'くるま': { rom: 'kuruma', def: 'Car' }, 'ほん': { rom: 'hon', def: 'Book' } },
            travel: { 'こんにちは': { rom: 'konnichiwa', def: 'Hello' }, 'ありがとう': { rom: 'arigatou', def: 'Thank you' }, 'すみません': { rom: 'sumimasen', def: 'Excuse me' }, 'はい': { rom: 'hai', def: 'Yes' }, 'いいえ': { rom: 'iie', def: 'No' }, 'トイレ': { rom: 'toire', def: 'Toilet' }, 'えき': { rom: 'eki', def: 'Station' }, 'ホテル': { rom: 'hoteru', def: 'Hotel' } },
            school: { 'せんせい': { rom: 'sensei', def: 'Teacher' }, 'がくせい': { rom: 'gakusei', def: 'Student' }, 'きょうしつ': { rom: 'kyoushitsu', def: 'Classroom' }, 'つくえ': { rom: 'tsukue', def: 'Desk' }, 'いす': { rom: 'isu', def: 'Chair' }, 'ともだち': { rom: 'tomodachi', def: 'Friend' } }
        },
        romanMap: {},
        basicWords: { "hello": "こんにちは", "hi": "どうも", "water": "みず", "apple": "りんご", "love": "あい", "school": "がっこう" },
        keyboardLayout: [['q','w','e','r','t','y','u','i','o','p'], ['a','s','d','f','g','h','j','k','l'], ['z','x','c','v','b','n','m']]
    },
    korean: {
        id: 'korean',
        name: 'Korean',
        accent: '#d4af37',
        accentGlow: 'rgba(212, 175, 55, 0.4)',
        font: "'Noto Sans KR', sans-serif",
        icon: '🇰🇷',
        title: 'QuickHangul',
        subtitle: 'Master the Art of Korean',
        tags: 'Consonants • Vowels • Vocabulary',
        pathIcons: ['ㄱㄴ', '사과'],
        fundamentals: ['consonants', 'vowels', 'doubleConsonants', 'diphthongs'],
        fundamentalLabels: ['Consonants', 'Vowels', 'Double', 'Diphthongs'],
        reverseDesc: 'Guess Korean from English',
        speechLang: 'ko-KR',
        data: {
            consonants: { 'ㄱ': 'g', 'ㄴ': 'n', 'ㄷ': 'd', 'ㄹ': 'r', 'ㅁ': 'm', 'ㅂ': 'b', 'ㅅ': 's', 'ㅇ': 'ng', 'ㅈ': 'j', 'ㅊ': 'ch', 'ㅋ': 'k', 'ㅌ': 't', 'ㅍ': 'p', 'ㅎ': 'h' },
            doubleConsonants: { 'ㄲ': 'kk', 'ㄸ': 'tt', 'ㅃ': 'pp', 'ㅆ': 'ss', 'ㅉ': 'jj' },
            vowels: { 'ㅏ': 'a', 'ㅑ': 'ya', 'ㅓ': 'eo', 'ㅕ': 'yeo', 'ㅗ': 'o', 'ㅛ': 'yo', 'ㅜ': 'u', 'ㅠ': 'yu', 'ㅡ': 'eu', 'ㅣ': 'i' },
            diphthongs: { 'ㅐ': 'ae', 'ㅒ': 'yae', 'ㅔ': 'e', 'ㅖ': 'ye', 'ㅘ': 'wa', 'ㅙ': 'wae', 'ㅚ': 'oe', 'ㅝ': 'wo', 'ㅞ': 'we', 'ㅟ': 'wi', 'ㅢ': 'ui' },
            vocabulary: { '사과': { rom: 'sagwa', def: 'Apple' }, '우유': { rom: 'uyu', def: 'Milk' }, '고기': { rom: 'gogi', def: 'Meat' }, '나라': { rom: 'nara', def: 'Country' }, '도시': { rom: 'dosi', def: 'City' }, '아이': { rom: 'ai', def: 'Child' }, '오이': { rom: 'oi', def: 'Cucumber' }, '모자': { rom: 'moja', def: 'Hat' }, '학교': { rom: 'hakgyo', def: 'School' }, '바다': { rom: 'bada', def: 'Sea' }, '하늘': { rom: 'haneul', def: 'Sky' }, '물': { rom: 'mul', def: 'Water' }, '사랑': { rom: 'sarang', def: 'Love' } },
            travel: { '안녕하세요': { rom: 'annyeonghaseyo', def: 'Hello' }, '감사합니다': { rom: 'gamsahamnida', def: 'Thank you' }, '화장실': { rom: 'hwajangsil', def: 'Restroom' }, '여권': { rom: 'yeogwon', def: 'Passport' }, '비행기': { rom: 'bihaenggi', def: 'Airplane' }, '택시': { rom: 'taeksi', def: 'Taxi' }, '한국': { rom: 'hanguk', def: 'Korea' } },
            school: { '선생님': { rom: 'seonsaengnim', def: 'Teacher' }, '학생': { rom: 'haksaeng', def: 'Student' }, '교실': { rom: 'gyosil', def: 'Classroom' }, '책': { rom: 'chaek', def: 'Book' }, '대학교': { rom: 'daehakgyo', def: 'University' }, '친구': { rom: 'chingu', def: 'Friend' } }
        },
        romanMap: {},
        basicWords: { "hello": "안녕하세요", "hi": "안녕", "water": "물", "apple": "사과", "love": "사랑", "school": "학교" },
        keyboardLayout: [['ㅂ','ㅈ','ㄷ','ㄱ','ㅅ','ㅛ','ㅕ','ㅑ','ㅐ','ㅔ'], ['ㅁ','ㄴ','ㅇ','ㄹ','ㅎ','ㅗ','ㅓ','ㅏ','ㅣ'], ['ㅋ','ㅌ','ㅊ','ㅍ','ㅠ','ㅜ','ㅡ']]
    },
    french: {
        id: 'french',
        name: 'French',
        accent: '#3498db',
        accentGlow: 'rgba(52, 152, 219, 0.4)',
        font: "'Inter', sans-serif",
        icon: '🇫🇷',
        title: 'QuickFrench',
        subtitle: 'Master French Vocabulary',
        tags: 'Vocabulary • Phrases • Travel',
        pathIcons: ['ABC', 'Pomme'],
        fundamentals: [],
        fundamentalLabels: [],
        reverseDesc: 'Guess French from English',
        speechLang: 'fr-FR',
        data: {
            vocabulary: { 'pomme': { rom: 'pomme', def: 'Apple' }, 'chat': { rom: 'chat', def: 'Cat' }, 'chien': { rom: 'chien', def: 'Dog' }, 'eau': { rom: 'eau', def: 'Water' }, 'thé': { rom: 'thé', def: 'Tea' }, 'poisson': { rom: 'poisson', def: 'Fish' }, 'oiseau': { rom: 'oiseau', def: 'Bird' }, 'maison': { rom: 'maison', def: 'House' }, 'voiture': { rom: 'voiture', def: 'Car' }, 'livre': { rom: 'livre', def: 'Book' }, 'soleil': { rom: 'soleil', def: 'Sun' }, 'lune': { rom: 'lune', def: 'Moon' }, 'ciel': { rom: 'ciel', def: 'Sky' }, 'fleur': { rom: 'fleur', def: 'Flower' }, 'arbre': { rom: 'arbre', def: 'Tree' } },
            travel: { 'bonjour': { rom: 'bonjour', def: 'Hello' }, 'merci': { rom: 'merci', def: 'Thank you' }, 'pardon': { rom: 'pardon', def: 'Excuse me' }, 'oui': { rom: 'oui', def: 'Yes' }, 'non': { rom: 'non', def: 'No' }, 'toilettes': { rom: 'toilettes', def: 'Toilet' }, 'gare': { rom: 'gare', def: 'Station' }, 'hôtel': { rom: 'hôtel', def: 'Hotel' }, 'aéroport': { rom: 'aéroport', def: 'Airport' }, 'billet': { rom: 'billet', def: 'Ticket' } },
            school: { 'professeur': { rom: 'professeur', def: 'Teacher' }, 'étudiant': { rom: 'étudiant', def: 'Student' }, 'classe': { rom: 'classe', def: 'Classroom' }, 'bureau': { rom: 'bureau', def: 'Desk' }, 'chaise': { rom: 'chaise', def: 'Chair' }, 'ami': { rom: 'ami', def: 'Friend' }, 'stylo': { rom: 'stylo', def: 'Pen' }, 'cahier': { rom: 'cahier', def: 'Notebook' }, 'école': { rom: 'école', def: 'School' } }
        },
        romanMap: {},
        basicWords: { 
            "hello": "bonjour", "hi": "salut", "water": "eau", "apple": "pomme", "love": "amour", "school": "école",
            "mom": "maman", "mother": "mère", "dad": "papa", "father": "père", "daughter": "fille", "son": "fils",
            "brother": "frère", "sister": "soeur", "friend": "ami", "cat": "chat", "dog": "chien",
            "house": "maison", "car": "voiture", "book": "livre", "sun": "soleil", "moon": "lune",
            "how are you": "comment ça va", "goodbye": "au revoir", "please": "s'il vous plaît", "thank you": "merci"
        },
        keyboardLayout: [['q','w','e','r','t','y','u','i','o','p'], ['a','s','d','f','g','h','j','k','l'], ['z','x','c','v','b','n','m']]
    },
    spanish: {
        id: 'spanish',
        name: 'Spanish',
        accent: '#f1c40f',
        accentGlow: 'rgba(241, 196, 15, 0.4)',
        font: "'Inter', sans-serif",
        icon: '🇪🇸',
        title: 'QuickSpanish',
        subtitle: 'Master Spanish Vocabulary',
        tags: 'Vocabulary • Phrases • Travel',
        pathIcons: ['ABC', 'Manzana'],
        fundamentals: [],
        fundamentalLabels: [],
        reverseDesc: 'Guess Spanish from English',
        speechLang: 'es-ES',
        data: {
            vocabulary: { 'manzana': { rom: 'manzana', def: 'Apple' }, 'gato': { rom: 'gato', def: 'Cat' }, 'perro': { rom: 'perro', def: 'Dog' }, 'agua': { rom: 'agua', def: 'Water' }, 'té': { rom: 'té', def: 'Tea' }, 'pescado': { rom: 'pescado', def: 'Fish' }, 'pájaro': { rom: 'pájaro', def: 'Bird' }, 'casa': { rom: 'casa', def: 'House' }, 'coche': { rom: 'coche', def: 'Car' }, 'libro': { rom: 'libro', def: 'Book' }, 'sol': { rom: 'sol', def: 'Sun' }, 'luna': { rom: 'luna', def: 'Moon' }, 'cielo': { rom: 'cielo', def: 'Sky' }, 'flor': { rom: 'flor', def: 'Flower' }, 'árbol': { rom: 'árbol', def: 'Tree' } },
            travel: { 'hola': { rom: 'hola', def: 'Hello' }, 'gracias': { rom: 'gracias', def: 'Thank you' }, 'perdón': { rom: 'perdón', def: 'Excuse me' }, 'sí': { rom: 'sí', def: 'Yes' }, 'no': { rom: 'no', def: 'No' }, 'baño': { rom: 'baño', def: 'Toilet' }, 'estación': { rom: 'estación', def: 'Station' }, 'hotel': { rom: 'hotel', def: 'Hotel' }, 'aeropuerto': { rom: 'aeropuerto', def: 'Airport' }, 'billete': { rom: 'billete', def: 'Ticket' } },
            school: { 'profesor': { rom: 'profesor', def: 'Teacher' }, 'estudiante': { rom: 'estudiante', def: 'Student' }, 'clase': { rom: 'clase', def: 'Classroom' }, 'escritorio': { rom: 'escritorio', def: 'Desk' }, 'silla': { rom: 'silla', def: 'Chair' }, 'amigo': { rom: 'amigo', def: 'Friend' }, 'bolígrafo': { rom: 'bolígrafo', def: 'Pen' }, 'cuaderno': { rom: 'cuaderno', def: 'Notebook' }, 'escuela': { rom: 'escuela', def: 'School' } }
        },
        romanMap: {},
        basicWords: { 
            "hello": "hola", "hi": "hola", "water": "agua", "apple": "manzana", "love": "amor", "school": "escuela",
            "mom": "mamá", "mother": "madre", "dad": "papá", "father": "padre", "daughter": "hija", "son": "hijo",
            "brother": "hermano", "sister": "hermana", "friend": "amigo", "cat": "gato", "dog": "perro",
            "house": "casa", "car": "coche", "book": "libro", "sun": "sol", "moon": "luna",
            "how are you": "cómo estás", "goodbye": "adiós", "please": "por favor", "thank you": "gracias"
        },
        keyboardLayout: [['q','w','e','r','t','y','u','i','o','p'], ['a','s','d','f','g','h','j','k','l','ñ'], ['z','x','c','v','b','n','m']]
    }
};

// Initialize Roman Maps
Object.keys(LANGUAGES).forEach(lang => {
    const l = LANGUAGES[lang];
    l.fundamentals.forEach(f => {
        if (l.data[f]) Object.assign(l.romanMap, l.data[f]);
    });
});

const State = {
    lang: null, step: 0, topCategory: 'chars', mode: 'quiz', activeCats: [], isReverse: false, isTestAll: false, isTeachMode: false, wrongQueue: [], testPool: [], currentDict: {}, currentKeys: [], score: 0, sessionAttempts: 0, streak: 0, maxStreak: 0, qCount: 0, maxQ: 15, currentQ: null, isProcessing: false, flashcards: { index: 0, pool: [] }, typingInput: '', timer: { count: 60, interval: null }, 
    persistence: { mastery: {}, customList: {}, totalXP: 0, level: 1, streak: 0, lastActive: null, lastStreakUpdate: null, sfxEnabled: true }
};

const ui = {};

// SFX Generator
const SFX = {
    ctx: new (window.AudioContext || window.webkitAudioContext)(),
    play(freq, type, dur) {
        if (State.persistence.sfxEnabled === false) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + dur);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + dur);
    },
    correct() { this.play(880, 'sine', 0.2); this.play(1109, 'sine', 0.2); },
    wrong() { this.play(220, 'triangle', 0.3); },
    levelUp() { this.play(440, 'square', 0.1); this.play(554, 'square', 0.1); this.play(659, 'square', 0.3); }
};

function createConfetti(x, y) {
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        p.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        document.body.appendChild(p);
        
        const angle = Math.random() * Math.PI * 2;
        const dist = 50 + Math.random() * 100;
        const tx = Math.cos(angle) * dist;
        const ty = Math.sin(angle) * dist;
        
        p.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
        ], { duration: 1000, easing: 'cubic-bezier(0, .5, .5, 1)' }).onfinish = () => p.remove();
    }
}

function selectLanguage(langId) {
    State.lang = LANGUAGES[langId];
    document.documentElement.style.setProperty('--accent', State.lang.accent);
    document.documentElement.style.setProperty('--accent-glow', State.lang.accentGlow);
    document.documentElement.style.setProperty('--font-current', State.lang.font);
    
    document.getElementById('orb-1').style.background = `radial-gradient(circle, ${State.lang.accent}, transparent)`;
    
    document.getElementById('intro-emoji').textContent = State.lang.icon;
    document.getElementById('intro-title').textContent = State.lang.title;
    document.getElementById('intro-subtitle').textContent = State.lang.subtitle;
    document.getElementById('intro-tags').textContent = State.lang.tags;
    document.getElementById('path-chars-icon').textContent = State.lang.pathIcons[0];
    document.getElementById('path-vocab-icon').textContent = State.lang.pathIcons[1];
    document.getElementById('reverse-desc').textContent = State.lang.reverseDesc;
    
    // Hide characters option if no fundamentals
    const charsCard = document.querySelector('[onclick*="selectFlow(\'chars\'"]');
    if (charsCard) {
        charsCard.style.display = State.lang.fundamentals.length === 0 ? 'none' : 'flex';
    }

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.lang === langId);
    });

    const filterChars = document.getElementById('filter-chars');
    filterChars.innerHTML = '';
    State.lang.fundamentals.forEach((f, i) => {
        const b = document.createElement('button');
        b.className = 'btn-outline text-sm uppercase tracking-widest font-bold';
        b.textContent = State.lang.fundamentalLabels[i];
        b.dataset.cat = f;
        b.onclick = () => toggleCategory(f, b);
        filterChars.appendChild(b);
    });

    const vocabCurated = document.getElementById('vocab-curated');
    vocabCurated.innerHTML = '';
    ['travel', 'school', 'vocabulary'].forEach(f => {
        const b = document.createElement('button');
        b.className = 'btn-outline text-sm uppercase tracking-widest font-bold';
        b.textContent = f === 'vocabulary' ? 'General' : f;
        b.dataset.cat = f;
        b.onclick = () => toggleCategory(f, b);
        vocabCurated.appendChild(b);
    });

    loadStats();
    
    State.step = 0;
    State.activeCats = [];
    showScreen('app');
    
    // Explicitly show flow step 0
    document.querySelectorAll('.step-container').forEach(s => s.classList.add('hidden'));
    document.getElementById('flow-step-0').classList.remove('hidden');
    updateStepIndicator(0);
}

function toggleCategory(c, b) {
    if (State.activeCats.includes(c)) { 
        if (State.activeCats.length > 1) { 
            State.activeCats = State.activeCats.filter(x => x !== c); 
            b.classList.remove('selected'); 
        } 
    } else { 
        State.activeCats.push(c); 
        b.classList.add('selected'); 
    }
}

function clearAnimations() { document.querySelectorAll('.step-container').forEach(s => s.classList.remove('exit-left', 'exit-right', 'enter-left', 'enter-right')); }

function updateStepIndicator(n) {
    document.querySelectorAll('.step-dot').forEach((dot, i) => {
        if (dot.dataset.step) dot.classList.toggle('active', parseInt(dot.dataset.step) === n);
    });
}

function selectFlow(flow, e) {
    State.topCategory = flow;
    if (flow === 'chars') {
        State.activeCats = State.lang.fundamentals.length > 0 ? [State.lang.fundamentals[0]] : [];
        if (State.lang.fundamentals.length > 1) State.activeCats.push(State.lang.fundamentals[1]);
    } else {
        State.activeCats = ['vocabulary'];
    }
    
    document.querySelectorAll('[data-cat]').forEach(b => {
        b.classList.toggle('selected', State.activeCats.includes(b.dataset.cat));
    });

    const s1 = document.getElementById('flow-step-1');
    const s2 = document.getElementById('flow-step-2');
    document.querySelectorAll('.hero-card').forEach(c => c.classList.remove('selected'));
    if (e) e.currentTarget.classList.add('selected');
    
    document.getElementById('filter-chars').classList.toggle('hidden', flow !== 'chars');
    document.getElementById('filter-vocab').classList.toggle('hidden', flow !== 'vocab');
    document.getElementById('step-2-label').textContent = flow === 'chars' ? 'Step 2: Fundamentals' : 'Step 2: Applied';
    
    nextStep(2);
}

function nextStep(n) {
    document.querySelectorAll('.step-container').forEach(s => s.classList.add('hidden'));
    const target = document.getElementById(`flow-step-${n}`);
    if (target) target.classList.remove('hidden');
    updateStepIndicator(n);
}

function prevStep(n) {
    nextStep(n);
}

function switchVocabTab(tab, e) {
    document.querySelectorAll('.segment-btn').forEach(b => {
        b.classList.remove('active');
        if (tab === 'curated' && (b.textContent === 'Curated')) b.classList.add('active');
        if (tab === 'library' && (b.textContent === 'My Library')) b.classList.add('active');
    });
    if (e) e.target.classList.add('active');
    
    document.getElementById('vocab-curated').classList.toggle('hidden', tab !== 'curated');
    document.getElementById('vocab-library').classList.toggle('hidden', tab !== 'library');
    
    if (tab === 'library') {
        State.activeCats = ['custom'];
        renderCustomLibrary();
    } else {
        const selected = Array.from(document.querySelectorAll('#vocab-curated .btn-outline.selected')).map(b => b.dataset.cat);
        State.activeCats = selected.length > 0 ? selected : ['vocabulary'];
    }
}

function renderCustomLibrary() {
    const container = document.getElementById('custom-word-bank');
    container.innerHTML = '';
    const words = State.lang.data.custom || {};
    const keys = Object.keys(words);
    if (keys.length === 0) { 
        container.innerHTML = '<p class="text-[10px] opacity-40 italic py-6 text-center border border-dashed border-white/10 rounded-xl">Your word bank is currently empty.</p>'; 
        return; 
    }
    keys.forEach(k => {
        const item = document.createElement('div');
        item.className = 'word-item mb-2 flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5';
        item.innerHTML = `
            <div class="flex flex-col">
                <span class="lang-font text-white text-sm font-bold text-left">${k}</span>
                <span class="text-[9px] text-gray-500 uppercase tracking-tighter text-left">${words[k].def}</span>
            </div>
            <button type="button" onclick="deleteCustomWord('${k}')" class="text-gray-500 hover:text-red-500 transition-colors px-2 text-xl">&times;</button>
        `;
        container.appendChild(item);
    });
}

function deleteCustomWord(k) {
    if (State.lang.data.custom) delete State.lang.data.custom[k];
    State.persistence.customList[State.lang.id] = State.lang.data.custom;
    saveStats();
    renderCustomLibrary();
}

function clearLibrary() {
    if (State.lang) {
        State.lang.data.custom = {};
        if (!State.persistence.customList) State.persistence.customList = {};
        State.persistence.customList[State.lang.id] = {};
        saveStats();
        renderCustomLibrary();
    }
}

function saveStats() { 
    localStorage.setItem('lingalo_stats_v2', JSON.stringify(State.persistence)); 
    updateXPUI();
}

function loadStats() {
    try {
        const s = localStorage.getItem('lingalo_stats_v2');
        if (s) {
            const p = JSON.parse(s);
            State.persistence = { ...State.persistence, ...p };
        }
        
        if (State.lang) {
            if (!State.persistence.customList) State.persistence.customList = {};
            State.lang.data.custom = State.persistence.customList[State.lang.id] || {};
            if (!State.persistence.mastery[State.lang.id]) State.persistence.mastery[State.lang.id] = {};
        }
        
        // Handle global streak reset
        const now = new Date();
        const todayStr = now.toDateString();
        
        if (State.persistence.lastActive) {
            const last = new Date(State.persistence.lastActive);
            const d1 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            const d2 = new Date(last.getFullYear(), last.getMonth(), last.getDate());
            const diff = Math.round((d1 - d2) / (1000 * 60 * 60 * 24));
            
            if (diff > 1) {
                State.persistence.streak = 0;
            }
        }
        
        State.persistence.lastActive = todayStr;
        updateXPUI();
    } catch (e) { console.error(e); }
}

function updateXPUI() {
    const xpNext = State.persistence.level * 100;
    document.getElementById('user-level').textContent = State.persistence.level;
    document.getElementById('user-xp').textContent = State.persistence.totalXP;
    document.getElementById('xp-next').textContent = xpNext;
    document.getElementById('xp-bar-fill').style.width = (State.persistence.totalXP / xpNext * 100) + '%';
    document.getElementById('global-streak').textContent = `${State.persistence.streak} Day Streak`;
    
    // Update mobile drawer stats too
    const mLevel = document.querySelector('.m-user-level');
    if (mLevel) {
        mLevel.textContent = State.persistence.level;
        document.querySelector('.m-user-xp').textContent = State.persistence.totalXP;
        document.querySelector('.m-xp-bar-fill').style.width = (State.persistence.totalXP / xpNext * 100) + '%';
    }
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

function addXP(amt) {
    State.persistence.totalXP += amt;
    const xpNext = State.persistence.level * 100;
    if (State.persistence.totalXP >= xpNext) {
        State.persistence.level++;
        State.persistence.totalXP -= xpNext;
        SFX.levelUp();
    }
    saveStats();
}

function toggleOption(id, key) {
    const el = document.getElementById(id);
    State[key] = !State[key];
    el.classList.toggle('selected', State[key]);
}

function showSettings() {
    const btn = document.getElementById('toggle-sfx');
    btn.textContent = State.persistence.sfxEnabled !== false ? 'ON' : 'OFF';
    btn.onclick = () => {
        State.persistence.sfxEnabled = State.persistence.sfxEnabled === false;
        btn.textContent = State.persistence.sfxEnabled !== false ? 'ON' : 'OFF';
        saveStats();
    };
    showScreen('settings');
}

function showAbout() { showScreen('about'); }

function resetAllProgress() {
    if (confirm('Are you sure? This will permanently delete all your XP, Levels, and Mastery progress.')) {
        State.persistence = { mastery: {}, customList: {}, totalXP: 0, level: 1, streak: 0, lastActive: null, sfxEnabled: true };
        saveStats();
        location.reload();
    }
}

function showScreen(n) {
    const screens = ['language', 'app', 'study', 'results', 'settings', 'about'];
    screens.forEach(s => {
        const el = document.getElementById(`${s}-screen`);
        if (el) el.classList.add('hidden');
    });
    const target = document.getElementById(`${n}-screen`);
    if (target) target.classList.remove('hidden');
}

async function fetchTranslation(word, targetLang) {
    const isSingleWord = !word.trim().includes(' ');
    let gTrans = null;
    let mTrans = null;

    // API 1: Google (via gtx endpoint)
    try {
        const gRes = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(word)}`);
        const gData = await gRes.json();
        if (gData && gData[0] && gData[0][0]) gTrans = gData[0][0][0];
    } catch(e) { console.error("Google API failed", e); }

    // API 2: MyMemory
    try {
        const pair = `en|${targetLang}`;
        const mRes = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=${pair}&mt=1`);
        const mData = await mRes.json();
        if (mData.matches && mData.matches.length > 0) {
            // Sort by quality and find something not identical to source
            const candidates = mData.matches.sort((a,b) => b.quality - a.quality);
            const match = candidates.find(m => m.translation.toLowerCase() !== word.toLowerCase()) || candidates[0];
            mTrans = match.translation;
        } else {
            mTrans = mData.responseData.translatedText;
        }
    } catch(e) { console.error("MyMemory API failed", e); }

    // COMPARISON & SELECTION LOGIC
    if (!gTrans && !mTrans) return word;
    if (gTrans && !mTrans) return gTrans;
    if (!gTrans && mTrans) return mTrans;

    // If they match exactly (ignoring case), perfect
    if (gTrans.toLowerCase() === mTrans.toLowerCase()) return gTrans;

    // For single word inputs, if one API gives a sentence and other gives a word, pick the word
    if (isSingleWord) {
        const gWords = gTrans.split(' ').length;
        const mWords = mTrans.split(' ').length;
        
        // If Google gave a single word, trust it.
        if (gWords === 1) return gTrans;
        
        // If Google failed to give a single word but MyMemory did, use MyMemory
        if (mWords === 1) return mTrans;
        
        // If both are sentences, still trust Google's first word or the whole thing
        return gTrans;
    }

    // For phrases, Google usually has better grammar
    return gTrans;
}

function init() {
    document.getElementById('year').textContent = new Date().getFullYear();
    ui.progressBar = document.getElementById('progress-bar'); ui.question = document.getElementById('question-display'); ui.options = document.getElementById('options-grid');
    ui.score = document.getElementById('score-counter'); ui.streak = document.getElementById('streak-counter');
    ui.timer = document.getElementById('timer-display');
    
    document.querySelectorAll('[data-mode]').forEach(b => {
        b.onclick = () => { document.querySelectorAll('[data-mode]').forEach(x => x.classList.remove('selected')); b.classList.add('selected'); State.mode = b.dataset.mode; };
    });

    document.getElementById('opt-reverse').onclick = () => toggleOption('opt-reverse', 'isReverse');
    document.getElementById('opt-test-all').onclick = () => toggleOption('opt-test-all', 'isTestAll');
    document.getElementById('opt-teach').onclick = () => toggleOption('opt-teach', 'isTeachMode');

    document.getElementById('start-button').onclick = startSession;
    document.getElementById('quit-button').onclick = () => { clearInterval(State.timer.interval); showScreen('app'); };
    document.getElementById('audio-button').onclick = () => speak(State.currentQ.char);
    document.getElementById('home-btn').onclick = () => showScreen('language');
    document.getElementById('retry-btn').onclick = startSession;
    document.getElementById('flip-fc').onclick = () => { ui.question.textContent = (ui.question.textContent === State.currentQ.char) ? State.currentQ.def : State.currentQ.char; };
    document.getElementById('next-fc').onclick = () => moveFlashcard(1);
    document.getElementById('prev-fc').onclick = () => moveFlashcard(-1);
    
    document.getElementById('custom-cat-btn').onclick = () => {
        const importer = document.getElementById('custom-importer');
        importer.classList.toggle('hidden');
    };

    // Mobile Menu Listeners
    document.getElementById('menu-toggle').onclick = () => toggleMenu(true);
    document.getElementById('menu-close').onclick = () => toggleMenu(false);
    document.getElementById('menu-overlay').onclick = () => toggleMenu(false);

    document.getElementById('translate-btn').onclick = async () => {
        const input = document.getElementById('custom-input');
        const words = input.value.split(/[,|\n]/).map(w => w.trim()).filter(w => w.length > 0);
        const list = document.getElementById('preview-list');
        const status = document.getElementById('import-status');
        if (words.length === 0) return;
        status.textContent = 'Translating...';
        list.innerHTML = '';
        
        let targetLang = 'ja';
        if (State.lang.id === 'korean') targetLang = 'ko';
        if (State.lang.id === 'french') targetLang = 'fr';
        if (State.lang.id === 'spanish') targetLang = 'es';

        for (const word of words) {
            let trans = State.lang.basicWords[word.toLowerCase()] || '';
            if (!trans) {
                trans = await fetchTranslation(word, targetLang);
            }
            const row = document.createElement('div');
            row.className = 'flex items-center gap-2 p-3 bg-black/40 rounded-xl border border-white/10 mb-2';
            row.innerHTML = `<span class="text-[9px] w-12 truncate text-gray-500 font-bold uppercase text-left">${word}</span><input type="text" value="${trans}" class="flex-grow bg-transparent text-xs lang-font outline-none text-white font-bold border-b border-white/5 focus:border-[var(--accent)]" data-orig="${word}">`;
            list.appendChild(row);
        }
        document.getElementById('importer-input-step').classList.add('hidden');
        document.getElementById('importer-preview-step').classList.remove('hidden');
        status.textContent = 'Verify and click add.';
    };

    document.getElementById('add-to-list-btn').onclick = () => {
        const dict = {};
        document.querySelectorAll('#preview-list input').forEach(i => { if (i.value) dict[i.value] = { rom: i.dataset.orig, def: i.dataset.orig }; });
        State.lang.data.custom = { ...(State.lang.data.custom || {}), ...dict };
        State.persistence.customList[State.lang.id] = State.lang.data.custom;
        saveStats(); renderCustomLibrary();
        document.getElementById('custom-importer').classList.add('hidden');
        document.getElementById('importer-input-step').classList.remove('hidden');
        document.getElementById('importer-preview-step').classList.add('hidden');
        document.getElementById('custom-input').value = '';
    };

    window.addEventListener('keydown', (e) => {
        if (State.mode === 'typing' && document.getElementById('study-screen').classList.contains('hidden') === false) {
            if (e.key === 'Backspace') { State.typingInput = State.typingInput.slice(0, -1); updateTypingDisplay(); }
            else if (e.key === 'Enter') { submitAnswer(State.typingInput); }
            else if (e.key.length === 1) { State.typingInput += e.key; updateTypingDisplay(); }
        }
    });
    
    loadStats();
}

function startSession() {
    State.wrongQueue = [];
    State.currentDict = {};
    State.activeCats.forEach(c => { 
        if (c === 'custom') {
            if (State.lang.data.custom) Object.assign(State.currentDict, State.lang.data.custom);
        } else if (State.lang.data[c]) {
            Object.assign(State.currentDict, State.lang.data[c]);
        }
    });
    
    const keys = Object.keys(State.currentDict);
    const langMastery = State.persistence.mastery[State.lang.id] || {};
    
    keys.sort((a, b) => {
        const scoreA = langMastery[a] || 0;
        const scoreB = langMastery[b] || 0;
        return scoreA - scoreB + (Math.random() * 0.5 - 0.25);
    });

    State.currentKeys = keys;
    State.score = 0; State.streak = 0; State.qCount = 0; State.sessionAttempts = 0;
    
    if (State.isTestAll || State.isTeachMode) { 
        State.maxQ = State.isTeachMode && !State.isTestAll ? Math.min(15, State.currentKeys.length) : State.currentKeys.length;
        State.testPool = [...State.currentKeys];
        if (State.isTeachMode && !State.isTestAll) State.testPool = State.testPool.slice(0, 15);
        State.maxQ = State.testPool.length;
    } else { 
        State.testPool = State.currentKeys.slice(0, 15);
        State.maxQ = State.testPool.length || 1; 
    }
    
    State.flashcards.pool = [...State.testPool].sort(() => Math.random() - 0.5);
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
    if (State.qCount >= State.maxQ && !['speedMatch', 'flashcards'].includes(State.mode)) { 
        if (State.isTeachMode && State.wrongQueue.length > 0) {
            State.testPool = [...State.wrongQueue]; State.wrongQueue = []; State.qCount = 0; State.maxQ = State.testPool.length;
        } else { endSession(); return; }
    }
    State.isProcessing = false; ui.question.style.color = "white"; 
    if (State.mode === 'typing') { State.typingInput = ''; updateTypingDisplay(); }
    
    let c;
    if (State.mode === 'flashcards') c = State.flashcards.pool[State.flashcards.index];
    else c = State.testPool[State.qCount % State.testPool.length];
    
    let a = State.currentDict[c];
    const def = typeof a === 'object' ? a.def : a; 
    const rom = typeof a === 'object' ? a.rom : a;
    
    State.currentQ = { char: c, answer: State.isReverse ? c : def, display: State.isReverse ? def : c, rom: rom, def: def };
    
    const score = (State.persistence.mastery[State.lang.id] || {})[c] || 0;
    let masteryHTML = '<div class="mastery-dots">';
    for(let i=0; i<5; i++) masteryHTML += `<div class="mastery-dot ${i < score ? 'filled' : ''}"></div>`;
    masteryHTML += '</div>';

    ui.question.innerHTML = `<div class="fade-in-up">${State.currentQ.display}</div>` + masteryHTML;
    
    if (!['quiz', 'speedMatch', 'typing'].includes(State.mode) && !State.isReverse && c.length > 1) {
        ui.question.innerHTML += `<div class="text-xs opacity-50 mt-2">${rom}</div>`;
    }
    
    if (!['typing', 'flashcards'].includes(State.mode)) {
        const ops = [State.currentQ.answer];
        while (ops.length < Math.min(4, State.currentKeys.length)) {
            const k = State.currentKeys[Math.floor(Math.random()*State.currentKeys.length)];
            const v = State.isReverse ? k : (typeof State.currentDict[k] === 'object' ? State.currentDict[k].def : State.currentDict[k]);
            if (!ops.includes(v)) ops.push(v);
        }
        ops.sort(() => Math.random() - 0.5);
        ui.options.innerHTML = '';
        ops.forEach(o => { const b = document.createElement('button'); b.className = "btn-option p-6 rounded-2xl font-bold"; b.textContent = o; b.onclick = (e) => submitAnswer(o, b, e); ui.options.appendChild(b); });
    }
    ui.progressBar.style.width = `${(State.qCount/State.maxQ)*100}%`;
}

function updateTypingDisplay() { document.getElementById('typing-display').textContent = State.typingInput || ' '; }

function submitAnswer(s, b, e) {
    if (State.isProcessing) return; 
    const ans = s.toLowerCase().trim();
    const target = State.currentQ.answer.toLowerCase().trim();
    const correct = ans === target || (State.lang.romanMap[s] === State.currentQ.char);

    if (State.mode !== 'flashcards') {
        State.isProcessing = true; State.qCount++; State.sessionAttempts++;
        
        const mKey = State.currentQ.char;
        if (!State.persistence.mastery[State.lang.id]) State.persistence.mastery[State.lang.id] = {};
        if (!State.persistence.mastery[State.lang.id][mKey]) State.persistence.mastery[State.lang.id][mKey] = 0;

        if (correct) { 
            SFX.correct();
            State.score++; State.streak++; 
            if (State.streak > State.maxStreak) State.maxStreak = State.streak; 
            if (b) b.classList.add('correct', 'pulse-success'); 
            ui.question.style.color = "#10b981";
            if (e) createConfetti(e.clientX, e.clientY);
            State.persistence.mastery[State.lang.id][mKey] = Math.min(5, State.persistence.mastery[State.lang.id][mKey] + 1);
            addXP(10);
        } else { 
            SFX.wrong();
            document.body.classList.add('shake');
            setTimeout(() => document.body.classList.remove('shake'), 400);
            State.streak = 0; 
            if (b) b.classList.add('wrong'); 
            ui.question.style.color = "#ef4444"; 
            Array.from(ui.options.children).forEach(btn => { if (btn.textContent.toLowerCase().trim() === target) btn.classList.add('correct'); });
            if (State.isTeachMode && !State.wrongQueue.includes(State.currentQ.char)) State.wrongQueue.push(State.currentQ.char);
             State.persistence.mastery[State.lang.id][mKey] = Math.max(0, State.persistence.mastery[State.lang.id][mKey] - 1);
            addXP(2);
        }
        ui.score.textContent = State.score; ui.streak.textContent = State.streak;
        setTimeout(nextQuestion, 1200);
    }
}

function endSession() { 
    showScreen('results'); 
    document.getElementById('final-score').textContent = State.score; 
    document.getElementById('final-acc').textContent = Math.round((State.score/(State.sessionAttempts||1))*100) + '%'; 
    document.getElementById('final-streak').textContent = State.maxStreak; 
    
    const now = new Date().toDateString();
    if (State.score > 0 && State.persistence.lastStreakUpdate !== now) {
        State.persistence.streak++;
        State.persistence.lastStreakUpdate = now;
        saveStats();
    }
}

function startSpeedMatch() { State.timer.count = 60; ui.timer.classList.remove('hidden'); State.timer.interval = setInterval(() => { State.timer.count--; document.getElementById('timer-val').textContent = State.timer.count + 's'; if (State.timer.count <= 0) { clearInterval(State.timer.interval); endSession(); } }, 1000); nextQuestion(); }
function speak(t) { if (!t) return; window.speechSynthesis.cancel(); const m = new SpeechSynthesisUtterance(t); m.lang = State.lang.speechLang; m.rate = 0.8; window.speechSynthesis.speak(m); }
function moveFlashcard(d) { if (State.flashcards.pool.length === 0) return; State.flashcards.index = (State.flashcards.index + d + State.flashcards.pool.length) % State.flashcards.pool.length; nextQuestion(); speak(State.currentQ.char); }

function renderKeyboard() { 
    const c = document.getElementById('virtual-keyboard'); c.innerHTML = ''; 
    State.lang.keyboardLayout.forEach(r => { 
        const row = document.createElement('div'); row.className = 'keyboard-row'; 
        r.forEach(k => { const key = document.createElement('div'); key.className = 'key'; key.innerHTML = `<span class="text-xs uppercase text-white font-bold">${k}</span>`; key.onclick = () => { State.typingInput += k; updateTypingDisplay(); }; row.appendChild(key); }); 
        c.appendChild(row); 
    }); 
    const controls = document.createElement('div'); controls.className = 'keyboard-row mt-2';
    const backspace = document.createElement('div'); backspace.className = 'key w-20'; backspace.innerHTML = '<span class="text-[10px] font-bold">BKSP</span>'; backspace.onclick = () => { State.typingInput = State.typingInput.slice(0, -1); updateTypingDisplay(); };
    const enter = document.createElement('div'); enter.className = 'key w-20 !bg-[var(--accent)] !text-black'; enter.innerHTML = '<span class="text-[10px] font-bold">ENTER</span>'; enter.onclick = () => { submitAnswer(State.typingInput); };
    controls.appendChild(backspace); controls.appendChild(enter); c.appendChild(controls);
}

init();
