/**
 * Lingalo - Modern Language Learning Platform
 * Core Engine & Application Logic (Clean Minimal Light / Matte Dark)
 */

// Refined, Tasteful Language Data Sets
const LANGUAGES = {
    japanese: {
        id: 'japanese',
        name: 'Japanese',
        nativeName: '日本語',
        accent: '#e11d48',
        accentGlow: 'rgba(225, 29, 72, 0.2)',
        accentBg: 'rgba(225, 29, 72, 0.08)',
        font: "'Noto Sans JP', sans-serif",
        icon: '🇯🇵',
        title: 'QuickKana',
        subtitle: 'Master the Art of Japanese Script & Vocabulary',
        tags: 'Hiragana • Katakana • Essential Vocabulary',
        pathIcons: ['あア', 'りんご'],
        fundamentals: ['hiragana', 'katakana', 'dakuten', 'combos'],
        fundamentalLabels: ['Hiragana', 'Katakana', 'Dakuten & Handakuten', 'Combinations'],
        speechLang: 'ja-JP',
        data: {
            hiragana: {
                'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
                'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
                'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
                'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
                'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
                'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
                'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
                'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
                'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
                'わ': 'wa', 'を': 'wo', 'ん': 'n'
            },
            katakana: {
                'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o',
                'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko',
                'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so',
                'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to',
                'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no',
                'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho',
                'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo',
                'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo',
                'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro',
                'ワ': 'wa', 'ヲ': 'wo', 'ン': 'n'
            },
            dakuten: {
                'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go',
                'ざ': 'za', 'じ': 'ji', 'ず': 'zu', 'ぜ': 'ze', 'ぞ': 'zo',
                'だ': 'da', 'ぢ': 'ji', 'づ': 'zu', 'で': 'de', 'ど': 'do',
                'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo',
                'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po',
                'ガ': 'ga', 'ギ': 'gi', 'グ': 'gu', 'ゲ': 'ge', 'ゴ': 'go',
                'ザ': 'za', 'ジ': 'ji', 'ズ': 'zu', 'ゼ': 'ze', 'ゾ': 'zo',
                'ダ': 'da', 'ヂ': 'ji', 'ヅ': 'zu', 'デ': 'de', 'ド': 'do',
                'バ': 'ba', 'ビ': 'bi', 'ブ': 'bu', 'ベ': 'be', 'ボ': 'bo',
                'パ': 'pa', 'ピ': 'pi', 'プ': 'pu', 'ペ': 'pe', 'ポ': 'po'
            },
            combos: {
                'きゃ': 'kya', 'きゅ': 'kyu', 'きょ': 'kyo',
                'しゃ': 'sha', 'しゅ': 'shu', 'しょ': 'sho',
                'ちゃ': 'cha', 'ちゅ': 'chu', 'ちょ': 'cho',
                'にゃ': 'nya', 'にゅ': 'nyu', 'にょ': 'nyo',
                'ひゃ': 'hya', 'ひゅ': 'hyu', 'ひょ': 'hyo',
                'みゃ': 'mya', 'みゅ': 'myu', 'みょ': 'myo',
                'りゃ': 'rya', 'りゅ': 'ryu', 'りょ': 'ryo',
                'ぎゃ': 'gya', 'ぎゅ': 'gyu', 'ぎょ': 'gyo',
                'じゃ': 'ja', 'じゅ': 'ju', 'じょ': 'jo',
                'びゃ': 'bya', 'びゅ': 'byu', 'びょ': 'byo',
                'ぴゃ': 'pya', 'ぴゅ': 'pyu', 'ぴょ': 'pyo'
            },
            vocabulary: {
                'りんご': { rom: 'ringo', def: 'Apple' },
                'ねこ': { rom: 'neko', def: 'Cat' },
                'いぬ': { rom: 'inu', def: 'Dog' },
                'みず': { rom: 'mizu', def: 'Water' },
                'おちゃ': { rom: 'ocha', def: 'Green Tea' },
                'さかな': { rom: 'sakana', def: 'Fish' },
                'とり': { rom: 'tori', def: 'Bird' },
                'いえ': { rom: 'ie', def: 'House' },
                'くるま': { rom: 'kuruma', def: 'Car' },
                'ほん': { rom: 'hon', def: 'Book' },
                'やま': { rom: 'yama', def: 'Mountain' },
                'かわ': { rom: 'kawa', def: 'River' },
                'つき': { rom: 'tsuki', def: 'Moon' },
                'ひ': { rom: 'hi', def: 'Sun / Fire' },
                'あめ': { rom: 'ame', def: 'Rain' }
            },
            travel: {
                'こんにちは': { rom: 'konnichiwa', def: 'Hello' },
                'ありがとう': { rom: 'arigatou', def: 'Thank you' },
                'すみません': { rom: 'sumimasen', def: 'Excuse me' },
                'はい': { rom: 'hai', def: 'Yes' },
                'いいえ': { rom: 'iie', def: 'No' },
                'トイレ': { rom: 'toire', def: 'Restroom' },
                'えき': { rom: 'eki', def: 'Train Station' },
                'ホテル': { rom: 'hoteru', def: 'Hotel' },
                'みち': { rom: 'michi', def: 'Street / Way' },
                'いくら': { rom: 'ikura', def: 'How much?' }
            },
            school: {
                'せんせい': { rom: 'sensei', def: 'Teacher' },
                'がくせい': { rom: 'gakusei', def: 'Student' },
                'きょうしつ': { rom: 'kyoushitsu', def: 'Classroom' },
                'つくえ': { rom: 'tsukue', def: 'Desk' },
                'いす': { rom: 'isu', def: 'Chair' },
                'ともだち': { rom: 'tomodachi', def: 'Friend' },
                'テスト': { rom: 'tesuto', def: 'Exam' },
                'べんきょう': { rom: 'benkyou', def: 'Study' }
            }
        },
        romanMap: {},
        basicWords: {
            "hello": "こんにちは", "hi": "どうも", "water": "みず", "apple": "りんご",
            "love": "あい", "school": "がっこう", "cat": "ねこ", "dog": "いぬ",
            "book": "ほん", "tea": "おちゃ", "friend": "ともだち", "thank you": "ありがとう"
        },
        keyboardLayout: [
            ['q','w','e','r','t','y','u','i','o','p'],
            ['a','s','d','f','g','h','j','k','l'],
            ['z','x','c','v','b','n','m']
        ]
    },
    korean: {
        id: 'korean',
        name: 'Korean',
        nativeName: '한국어',
        accent: '#d97706',
        accentGlow: 'rgba(217, 119, 6, 0.2)',
        accentBg: 'rgba(217, 119, 6, 0.08)',
        font: "'Noto Sans KR', sans-serif",
        icon: '🇰🇷',
        title: 'QuickHangul',
        subtitle: 'Master Korean Alphabet & Essential Words',
        tags: 'Consonants • Vowels • Common Vocabulary',
        pathIcons: ['ㄱㄴ', '사과'],
        fundamentals: ['consonants', 'vowels', 'doubleConsonants', 'diphthongs'],
        fundamentalLabels: ['Basic Consonants', 'Basic Vowels', 'Double Consonants', 'Diphthongs'],
        speechLang: 'ko-KR',
        data: {
            consonants: {
                'ㄱ': 'g', 'ㄴ': 'n', 'ㄷ': 'd', 'ㄹ': 'r/l', 'ㅁ': 'm',
                'ㅂ': 'b', 'ㅅ': 's', 'ㅇ': 'ng', 'ㅈ': 'j', 'ㅊ': 'ch',
                'ㅋ': 'k', 'ㅌ': 't', 'ㅍ': 'p', 'ㅎ': 'h'
            },
            doubleConsonants: {
                'ㄲ': 'kk', 'ㄸ': 'tt', 'ㅃ': 'pp', 'ㅆ': 'ss', 'ㅉ': 'jj'
            },
            vowels: {
                'ㅏ': 'a', 'ㅑ': 'ya', 'ㅓ': 'eo', 'ㅕ': 'yeo',
                'ㅗ': 'o', 'ㅛ': 'yo', 'ㅜ': 'u', 'ㅠ': 'yu',
                'ㅡ': 'eu', 'ㅣ': 'i'
            },
            diphthongs: {
                'ㅐ': 'ae', 'ㅒ': 'yae', 'ㅔ': 'e', 'ㅖ': 'ye',
                'ㅘ': 'wa', 'ㅙ': 'wae', 'ㅚ': 'oe',
                'ㅝ': 'wo', 'ㅞ': 'we', 'ㅟ': 'wi', 'ㅢ': 'ui'
            },
            vocabulary: {
                '사과': { rom: 'sagwa', def: 'Apple' },
                '우유': { rom: 'uyu', def: 'Milk' },
                '고기': { rom: 'gogi', def: 'Meat' },
                '나라': { rom: 'nara', def: 'Country' },
                '도시': { rom: 'dosi', def: 'City' },
                '아이': { rom: 'ai', def: 'Child' },
                '오이': { rom: 'oi', def: 'Cucumber' },
                '모자': { rom: 'moja', def: 'Hat' },
                '학교': { rom: 'hakgyo', def: 'School' },
                '바다': { rom: 'bada', def: 'Sea' },
                '하늘': { rom: 'haneul', def: 'Sky' },
                '물': { rom: 'mul', def: 'Water' },
                '사랑': { rom: 'sarang', def: 'Love' },
                '달': { rom: 'dal', def: 'Moon' },
                '별': { rom: 'byeol', def: 'Star' }
            },
            travel: {
                '안녕하세요': { rom: 'annyeonghaseyo', def: 'Hello' },
                '감사합니다': { rom: 'gamsahamnida', def: 'Thank you' },
                '화장실': { rom: 'hwajangsil', def: 'Restroom' },
                '여권': { rom: 'yeogwon', def: 'Passport' },
                '비행기': { rom: 'bihaenggi', def: 'Airplane' },
                '택시': { rom: 'taeksi', def: 'Taxi' },
                '한국': { rom: 'hanguk', def: 'Korea' },
                '어디예요': { rom: 'eodiyeyo', def: 'Where is it?' },
                '얼마예요': { rom: 'eolmayeyo', def: 'How much?' }
            },
            school: {
                '선생님': { rom: 'seonsaengnim', def: 'Teacher' },
                '학생': { rom: 'haksaeng', def: 'Student' },
                '교실': { rom: 'gyosil', def: 'Classroom' },
                '책': { rom: 'chaek', def: 'Book' },
                '대학교': { rom: 'daehakgyo', def: 'University' },
                '친구': { rom: 'chingu', def: 'Friend' },
                '연필': { rom: 'yeonpil', def: 'Pencil' }
            }
        },
        romanMap: {},
        basicWords: {
            "hello": "안녕하세요", "hi": "안녕", "water": "물", "apple": "사과",
            "love": "사랑", "school": "학교", "friend": "친구", "cat": "고양이",
            "dog": "강아지", "thank you": "감사합니다"
        },
        keyboardLayout: [
            ['ㅂ','ㅈ','ㄷ','ㄱ','ㅅ','ㅛ','ㅕ','ㅑ','ㅐ','ㅔ'],
            ['ㅁ','ㄴ','ㅇ','ㄹ','ㅎ','ㅗ','ㅓ','ㅏ','ㅣ'],
            ['ㅋ','ㅌ','ㅊ','ㅍ','ㅠ','ㅜ','ㅡ']
        ]
    },
    french: {
        id: 'french',
        name: 'French',
        nativeName: 'Français',
        accent: '#2563eb',
        accentGlow: 'rgba(37, 99, 235, 0.2)',
        accentBg: 'rgba(37, 99, 235, 0.08)',
        font: "'Inter', sans-serif",
        icon: '🇫🇷',
        title: 'QuickFrench',
        subtitle: 'Master French Vocabulary & Essential Phrases',
        tags: 'Core Vocabulary • Travel Phrases • Academic Terms',
        pathIcons: ['ABC', 'Pomme'],
        fundamentals: [],
        fundamentalLabels: [],
        speechLang: 'fr-FR',
        data: {
            vocabulary: {
                'pomme': { rom: 'pomme', def: 'Apple' },
                'pain': { rom: 'pain', def: 'Bread' },
                'eau': { rom: 'eau', def: 'Water' },
                'chat': { rom: 'chat', def: 'Cat' },
                'chien': { rom: 'chien', def: 'Dog' },
                'thé': { rom: 'thé', def: 'Tea' },
                'poisson': { rom: 'poisson', def: 'Fish' },
                'oiseau': { rom: 'oiseau', def: 'Bird' },
                'maison': { rom: 'maison', def: 'House' },
                'voiture': { rom: 'voiture', def: 'Car' },
                'livre': { rom: 'livre', def: 'Book' },
                'soleil': { rom: 'soleil', def: 'Sun' },
                'lune': { rom: 'lune', def: 'Moon' },
                'ciel': { rom: 'ciel', def: 'Sky' },
                'fleur': { rom: 'fleur', def: 'Flower' },
                'arbre': { rom: 'arbre', def: 'Tree' }
            },
            travel: {
                'bonjour': { rom: 'bonjour', def: 'Hello' },
                'merci': { rom: 'merci', def: 'Thank you' },
                'pardon': { rom: 'pardon', def: 'Excuse me' },
                'oui': { rom: 'oui', def: 'Yes' },
                'non': { rom: 'non', def: 'No' },
                'toilettes': { rom: 'toilettes', def: 'Restroom' },
                'gare': { rom: 'gare', def: 'Train Station' },
                'hôtel': { rom: 'hôtel', def: 'Hotel' },
                'aéroport': { rom: 'aéroport', def: 'Airport' },
                'billet': { rom: 'billet', def: 'Ticket' },
                'combien': { rom: 'combien', def: 'How much?' }
            },
            school: {
                'professeur': { rom: 'professeur', def: 'Teacher' },
                'étudiant': { rom: 'étudiant', def: 'Student' },
                'classe': { rom: 'classe', def: 'Classroom' },
                'bureau': { rom: 'bureau', def: 'Desk' },
                'chaise': { rom: 'chaise', def: 'Chair' },
                'ami': { rom: 'ami', def: 'Friend' },
                'stylo': { rom: 'stylo', def: 'Pen' },
                'cahier': { rom: 'cahier', def: 'Notebook' },
                'école': { rom: 'école', def: 'School' }
            }
        },
        romanMap: {},
        basicWords: {
            "hello": "bonjour", "hi": "salut", "water": "eau", "apple": "pomme",
            "love": "amour", "school": "école", "bread": "pain", "friend": "ami",
            "thank you": "merci", "please": "s'il vous plaît", "goodbye": "au revoir"
        },
        keyboardLayout: [
            ['a','z','e','r','t','y','u','i','o','p'],
            ['q','s','d','f','g','h','j','k','l','m'],
            ['w','x','c','v','b','n','é','è','à']
        ]
    },
    spanish: {
        id: 'spanish',
        name: 'Spanish',
        nativeName: 'Español',
        accent: '#059669',
        accentGlow: 'rgba(5, 150, 105, 0.2)',
        accentBg: 'rgba(5, 150, 105, 0.08)',
        font: "'Inter', sans-serif",
        icon: '🇪🇸',
        title: 'QuickSpanish',
        subtitle: 'Master Spanish Vocabulary & Everyday Expressions',
        tags: 'Everyday Words • Travel Essentials • Conversation',
        pathIcons: ['ABC', 'Manzana'],
        fundamentals: [],
        fundamentalLabels: [],
        speechLang: 'es-ES',
        data: {
            vocabulary: {
                'manzana': { rom: 'manzana', def: 'Apple' },
                'pan': { rom: 'pan', def: 'Bread' },
                'gato': { rom: 'gato', def: 'Cat' },
                'perro': { rom: 'perro', def: 'Dog' },
                'agua': { rom: 'agua', def: 'Water' },
                'té': { rom: 'té', def: 'Tea' },
                'pescado': { rom: 'pescado', def: 'Fish' },
                'pájaro': { rom: 'pájaro', def: 'Bird' },
                'casa': { rom: 'casa', def: 'House' },
                'coche': { rom: 'coche', def: 'Car' },
                'libro': { rom: 'libro', def: 'Book' },
                'sol': { rom: 'sol', def: 'Sun' },
                'luna': { rom: 'luna', def: 'Moon' },
                'cielo': { rom: 'cielo', def: 'Sky' },
                'flor': { rom: 'flor', def: 'Flower' },
                'árbol': { rom: 'árbol', def: 'Tree' }
            },
            travel: {
                'hola': { rom: 'hola', def: 'Hello' },
                'gracias': { rom: 'gracias', def: 'Thank you' },
                'perdón': { rom: 'perdón', def: 'Excuse me' },
                'sí': { rom: 'sí', def: 'Yes' },
                'no': { rom: 'no', def: 'No' },
                'baño': { rom: 'baño', def: 'Restroom' },
                'estación': { rom: 'estación', def: 'Station' },
                'hotel': { rom: 'hotel', def: 'Hotel' },
                'aeropuerto': { rom: 'aeropuerto', def: 'Airport' },
                'billete': { rom: 'billete', def: 'Ticket' },
                'cuánto cuesta': { rom: 'cuánto cuesta', def: 'How much is it?' }
            },
            school: {
                'profesor': { rom: 'profesor', def: 'Teacher' },
                'estudiante': { rom: 'estudiante', def: 'Student' },
                'clase': { rom: 'clase', def: 'Classroom' },
                'escritorio': { rom: 'escritorio', def: 'Desk' },
                'silla': { rom: 'silla', def: 'Chair' },
                'amigo': { rom: 'amigo', def: 'Friend' },
                'bolígrafo': { rom: 'bolígrafo', def: 'Pen' },
                'cuaderno': { rom: 'cuaderno', def: 'Notebook' },
                'escuela': { rom: 'escuela', def: 'School' }
            }
        },
        romanMap: {},
        basicWords: {
            "hello": "hola", "hi": "hola", "water": "agua", "apple": "manzana",
            "love": "amor", "school": "escuela", "friend": "amigo", "cat": "gato",
            "dog": "perro", "thank you": "gracias", "please": "por favor", "goodbye": "adiós"
        },
        keyboardLayout: [
            ['q','w','e','r','t','y','u','i','o','p'],
            ['a','s','d','f','g','h','j','k','l','ñ'],
            ['z','x','c','v','b','n','m','á','é','í','ó','ú']
        ]
    },
    german: {
        id: 'german',
        name: 'German',
        nativeName: 'Deutsch',
        accent: '#7c3aed',
        accentGlow: 'rgba(124, 58, 237, 0.2)',
        accentBg: 'rgba(124, 58, 237, 0.08)',
        font: "'Inter', sans-serif",
        icon: '🇩🇪',
        title: 'QuickGerman',
        subtitle: 'Master German Core Vocabulary & Structures',
        tags: 'Essential Vocabulary • Travel Situations • Grammar Basics',
        pathIcons: ['ABC', 'Apfel'],
        fundamentals: [],
        fundamentalLabels: [],
        speechLang: 'de-DE',
        data: {
            vocabulary: {
                'Apfel': { rom: 'Apfel', def: 'Apple' },
                'Brot': { rom: 'Brot', def: 'Bread' },
                'Katze': { rom: 'Katze', def: 'Cat' },
                'Hund': { rom: 'Hund', def: 'Dog' },
                'Wasser': { rom: 'Wasser', def: 'Water' },
                'Tee': { rom: 'Tee', def: 'Tea' },
                'Fisch': { rom: 'Fisch', def: 'Fish' },
                'Vogel': { rom: 'Vogel', def: 'Bird' },
                'Haus': { rom: 'Haus', def: 'House' },
                'Auto': { rom: 'Auto', def: 'Car' },
                'Buch': { rom: 'Buch', def: 'Book' },
                'Sonne': { rom: 'Sonne', def: 'Sun' },
                'Mond': { rom: 'Mond', def: 'Moon' },
                'Himmel': { rom: 'Himmel', def: 'Sky' },
                'Blume': { rom: 'Blume', def: 'Flower' },
                'Baum': { rom: 'Baum', def: 'Tree' }
            },
            travel: {
                'Hallo': { rom: 'Hallo', def: 'Hello' },
                'Danke': { rom: 'Danke', def: 'Thank you' },
                'Entschuldigung': { rom: 'Entschuldigung', def: 'Excuse me' },
                'Ja': { rom: 'Ja', def: 'Yes' },
                'Nein': { rom: 'Nein', def: 'No' },
                'Toilette': { rom: 'Toilette', def: 'Restroom' },
                'Bahnhof': { rom: 'Bahnhof', def: 'Train Station' },
                'Hotel': { rom: 'Hotel', def: 'Hotel' },
                'Flughafen': { rom: 'Flughafen', def: 'Airport' },
                'Ticket': { rom: 'Ticket', def: 'Ticket' },
                'Wie viel kostet': { rom: 'Wie viel kostet', def: 'How much does it cost?' }
            },
            school: {
                'Lehrer': { rom: 'Lehrer', def: 'Teacher' },
                'Student': { rom: 'Student', def: 'Student' },
                'Klassenzimmer': { rom: 'Klassenzimmer', def: 'Classroom' },
                'Schreibtisch': { rom: 'Schreibtisch', def: 'Desk' },
                'Stuhl': { rom: 'Stuhl', def: 'Chair' },
                'Freund': { rom: 'Freund', def: 'Friend' },
                'Stift': { rom: 'Stift', def: 'Pen' },
                'Heft': { rom: 'Heft', def: 'Notebook' },
                'Schule': { rom: 'Schule', def: 'School' }
            }
        },
        romanMap: {},
        basicWords: {
            "hello": "hallo", "hi": "hallo", "water": "wasser", "apple": "apfel",
            "love": "liebe", "school": "schule", "friend": "freund", "cat": "katze",
            "dog": "hund", "thank you": "danke", "please": "bitte", "goodbye": "auf wiedersehen"
        },
        keyboardLayout: [
            ['q','w','e','r','t','z','u','i','o','p','ü'],
            ['a','s','d','f','g','h','j','k','l','ö','ä'],
            ['y','x','c','v','b','n','m','ß']
        ]
    }
};

// Initialize Roman Maps for fundamentals
Object.keys(LANGUAGES).forEach(lang => {
    const l = LANGUAGES[lang];
    if (l.fundamentals) {
        l.fundamentals.forEach(f => {
            if (l.data[f]) Object.assign(l.romanMap, l.data[f]);
        });
    }
});

// Global Application State
const State = {
    lang: null,
    currentTab: 'dashboard',
    mode: 'quiz',
    activeCats: [],
    isReverse: false,
    isKanaOnly: false,
    isTestAll: false,
    isTeachMode: false,
    wrongQueue: [],
    struggledWords: new Set(),
    testPool: [],
    currentDict: {},
    currentKeys: [],
    score: 0,
    sessionAttempts: 0,
    streak: 0,
    maxStreak: 0,
    qCount: 0,
    maxQ: 15,
    currentQ: null,
    isProcessing: false,
    flashcards: { index: 0, pool: [] },
    typingInput: '',
    timer: { count: 60, interval: null },
    matchPairs: { cards: [], selected: [], matched: 0, totalPairs: 0 },
    persistence: {
        version: 4,
        mastery: {},
        customList: {},
        totalXP: 0,
        todayXP: 0,
        dailyGoal: 50,
        level: 1,
        streak: 0,
        lastActive: null,
        lastStreakUpdate: null,
        sfxEnabled: true,
        speechRate: 1.0,
        autoAudio: false
    }
};

// Sound Synthesizer via Web Audio API
const SFX = {
    ctx: null,
    init() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) this.ctx = new AudioCtx();
        }
    },
    play(freq, type, dur, gainLevel = 0.1) {
        if (State.persistence.sfxEnabled === false) return;
        try {
            this.init();
            if (!this.ctx) return;
            if (this.ctx.state === 'suspended') this.ctx.resume();
            
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            gain.gain.setValueAtTime(gainLevel, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start();
            osc.stop(this.ctx.currentTime + dur);
        } catch(e) {
            console.warn("Audio not initialized:", e);
        }
    },
    correct() {
        this.play(659, 'sine', 0.12, 0.12);
        setTimeout(() => this.play(880, 'sine', 0.22, 0.12), 80);
    },
    wrong() {
        this.play(260, 'sawtooth', 0.18, 0.1);
        setTimeout(() => this.play(200, 'sawtooth', 0.25, 0.1), 100);
    },
    match() {
        this.play(523, 'sine', 0.1, 0.1);
        setTimeout(() => this.play(659, 'sine', 0.12, 0.1), 80);
        setTimeout(() => this.play(784, 'sine', 0.2, 0.12), 160);
    },
    levelUp() {
        const notes = [440, 554, 659, 880];
        notes.forEach((f, idx) => {
            setTimeout(() => this.play(f, 'triangle', 0.2, 0.15), idx * 100);
        });
    }
};

// Haptic feedback helper
function haptic(type) {
    if (!navigator.vibrate) return;
    if (type === 'success') navigator.vibrate(12);
    else if (type === 'error') navigator.vibrate([40, 30, 40]);
}

// Particle Confetti Generator
function createConfetti(x, y) {
    const originX = x || window.innerWidth / 2;
    const originY = y || window.innerHeight / 2;
    const count = 28;
    
    for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        p.className = 'confetti-particle';
        p.style.left = originX + 'px';
        p.style.top = originY + 'px';
        const colors = [State.lang ? State.lang.accent : '#e11d48', '#059669', '#d97706', '#2563eb', '#7c3aed'];
        p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const size = Math.random() * 8 + 4;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        
        document.body.appendChild(p);
        
        const angle = Math.random() * Math.PI * 2;
        const dist = 60 + Math.random() * 120;
        const tx = Math.cos(angle) * dist;
        const ty = Math.sin(angle) * dist - 20;
        
        p.animate([
            { transform: 'translate(0, 0) scale(1) rotate(0deg)', opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px) scale(0) rotate(${Math.random() * 720}deg)`, opacity: 0 }
        ], {
            duration: 800 + Math.random() * 400,
            easing: 'cubic-bezier(0.12, 0.8, 0.32, 1)'
        }).onfinish = () => p.remove();
    }
}

// Native Speech Synthesis with Voice Resolution
function speak(text) {
    if (!text || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = State.lang ? State.lang.speechLang : 'ja-JP';
    utt.rate = State.persistence.speechRate || 1.0;
    
    const voices = window.speechSynthesis.getVoices();
    if (voices && voices.length > 0) {
        const langCode = utt.lang.split('-')[0].toLowerCase();
        const matched = voices.find(v => v.lang.toLowerCase().startsWith(langCode));
        if (matched) utt.voice = matched;
    }
    
    window.speechSynthesis.speak(utt);
}

// Theme Management (Light / Dark)
function initTheme() {
    const saved = localStorage.getItem('lingalo_theme') || 'light';
    setTheme(saved);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('lingalo_theme', theme);
    
    // Update theme toggle icons
    document.querySelectorAll('.theme-toggle-icon').forEach(icon => {
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    });
    
    // Update theme buttons in settings
    const lightBtn = document.getElementById('theme-btn-light');
    const darkBtn = document.getElementById('theme-btn-dark');
    if (lightBtn && darkBtn) {
        lightBtn.classList.toggle('active', theme === 'light');
        darkBtn.classList.toggle('active', theme === 'dark');
    }

    // Update orb background
    if (State.lang) {
        const orb1 = document.getElementById('ambient-orb-1');
        if (orb1) {
            const bg = theme === 'dark' ? State.lang.accent : State.lang.accentBg;
            orb1.style.background = `radial-gradient(circle, ${bg}, transparent 70%)`;
        }
    }
}

// Storage & Persistence
function saveStats() {
    try {
        localStorage.setItem('lingalo_stats_v4', JSON.stringify(State.persistence));
    } catch(e) {
        console.warn("Could not save to localStorage", e);
    }
    updateHeaderStats();
}

function loadStats() {
    try {
        const raw = localStorage.getItem('lingalo_stats_v4') ||
                    localStorage.getItem('lingalo_stats_v3') ||
                    localStorage.getItem('lingalo_stats_v2');
        
        if (raw) {
            const parsed = JSON.parse(raw);
            State.persistence = { ...State.persistence, ...parsed, version: 4 };
        }

        const legacyKeys = {
            'japanese': 'quickkana_stats',
            'korean': 'quickhangul_stats',
            'french': 'quickfrench_stats',
            'spanish': 'quickspanish_stats',
            'german': 'quickgerman_stats'
        };

        Object.entries(legacyKeys).forEach(([langId, key]) => {
            const oldData = localStorage.getItem(key);
            if (oldData) {
                try {
                    const parsedOld = JSON.parse(oldData);
                    if (parsedOld.mastery && !State.persistence.mastery[langId]) {
                        State.persistence.mastery[langId] = parsedOld.mastery;
                    }
                    if (parsedOld.customList && !State.persistence.customList[langId]) {
                        State.persistence.customList[langId] = parsedOld.customList;
                    }
                } catch(err) {}
            }
        });

        if (!State.persistence.mastery) State.persistence.mastery = {};
        if (!State.persistence.customList) State.persistence.customList = {};

        const todayStr = new Date().toDateString();
        if (State.persistence.lastActive) {
            const last = new Date(State.persistence.lastActive);
            const now = new Date();
            const d1 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            const d2 = new Date(last.getFullYear(), last.getMonth(), last.getDate());
            const diffDays = Math.round((d1 - d2) / (1000 * 60 * 60 * 24));
            
            if (diffDays > 1) {
                State.persistence.streak = 0;
            }
            if (diffDays >= 1) {
                State.persistence.todayXP = 0;
            }
        }
        
        State.persistence.lastActive = todayStr;
        saveStats();
    } catch(e) {
        console.error("Error loading stats", e);
    }
}

function addXP(amt) {
    State.persistence.totalXP += amt;
    State.persistence.todayXP = (State.persistence.todayXP || 0) + amt;
    
    let leveledUp = false;
    while (State.persistence.totalXP >= State.persistence.level * 100) {
        State.persistence.totalXP -= State.persistence.level * 100;
        State.persistence.level++;
        leveledUp = true;
    }
    if (leveledUp) {
        SFX.levelUp();
        createConfetti();
    }
    
    const todayStr = new Date().toDateString();
    if (State.persistence.lastStreakUpdate !== todayStr) {
        State.persistence.streak = (State.persistence.streak || 0) + 1;
        State.persistence.lastStreakUpdate = todayStr;
    }
    
    saveStats();
    updateHeaderStats();
    if (State.currentTab === 'dashboard') renderDashboard();
}

function updateHeaderStats() {
    const xpNeeded = State.persistence.level * 100;
    const xpRatio = Math.min(100, Math.round((State.persistence.totalXP / xpNeeded) * 100));
    
    document.querySelectorAll('.stat-streak-val').forEach(el => el.textContent = `${State.persistence.streak || 0}d`);
    document.querySelectorAll('.stat-level-val').forEach(el => el.textContent = State.persistence.level || 1);
    document.querySelectorAll('.stat-xp-val').forEach(el => el.textContent = `${State.persistence.totalXP} / ${xpNeeded} XP`);
    document.querySelectorAll('.stat-xp-bar-fill').forEach(bar => bar.style.width = `${xpRatio}%`);
    
    document.querySelectorAll('.sfx-state-icon').forEach(icon => {
        icon.textContent = State.persistence.sfxEnabled !== false ? '🔊' : '🔇';
    });
}

// Navigation View Controller
function switchTab(tabName) {
    clearInterval(State.timer.interval);
    State.currentTab = tabName;
    
    document.getElementById('screen-study').classList.add('hidden');
    document.getElementById('screen-results').classList.add('hidden');
    document.getElementById('main-views-wrapper').classList.remove('hidden');

    const views = ['dashboard', 'practice', 'mastery', 'library', 'settings'];
    views.forEach(v => {
        const el = document.getElementById(`view-${v}`);
        if (el) el.classList.toggle('hidden', v !== tabName);
    });

    document.querySelectorAll('[data-nav-tab]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.navTab === tabName);
    });

    if (tabName === 'dashboard') renderDashboard();
    else if (tabName === 'practice') renderPracticeView();
    else if (tabName === 'mastery') renderMasteryMatrix();
    else if (tabName === 'library') renderWordBank();
    else if (tabName === 'settings') renderSettings();

    const mainArea = document.querySelector('.main-content-scroll');
    if (mainArea) mainArea.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'instant' });
}

function selectLanguage(langId, targetTab = null) {
    if (!LANGUAGES[langId]) return;
    State.lang = LANGUAGES[langId];

    document.documentElement.style.setProperty('--accent', State.lang.accent);
    document.documentElement.style.setProperty('--accent-glow', State.lang.accentGlow);
    document.documentElement.style.setProperty('--accent-bg', State.lang.accentBg);
    document.documentElement.style.setProperty('--font-lang', State.lang.font);

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const orb1 = document.getElementById('ambient-orb-1');
    if (orb1) {
        const bg = isDark ? State.lang.accent : State.lang.accentBg;
        orb1.style.background = `radial-gradient(circle, ${bg}, transparent 70%)`;
    }

    const activeFlag = document.getElementById('top-lang-flag');
    if (activeFlag) activeFlag.textContent = State.lang.icon;
    const activeName = document.getElementById('top-lang-name');
    if (activeName) activeName.textContent = State.lang.name;

    if (!State.persistence.customList) State.persistence.customList = {};
    State.lang.data.custom = State.persistence.customList[State.lang.id] || {};
    if (!State.persistence.mastery[State.lang.id]) State.persistence.mastery[State.lang.id] = {};

    document.querySelectorAll('[data-lang-select]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.langSelect === langId);
    });

    if (State.lang.fundamentals && State.lang.fundamentals.length > 0) {
        State.activeCats = [State.lang.fundamentals[0]];
    } else {
        State.activeCats = ['vocabulary'];
    }

    closeLanguageModal();

    if (targetTab) {
        switchTab(targetTab);
    } else {
        switchTab(State.currentTab || 'dashboard');
    }
}

// -------------------------------------------------------------
// DASHBOARD VIEW
// -------------------------------------------------------------
function renderDashboard() {
    const lang = State.lang;
    if (!lang) return;

    const welcomeTitle = document.getElementById('dash-welcome-title');
    if (welcomeTitle) welcomeTitle.textContent = `${lang.icon} ${lang.name}`;
    
    const welcomeSub = document.getElementById('dash-welcome-sub');
    if (welcomeSub) welcomeSub.textContent = lang.subtitle;

    const goalTarget = State.persistence.dailyGoal || 50;
    const goalCurrent = State.persistence.todayXP || 0;
    const goalPercent = Math.min(100, Math.round((goalCurrent / goalTarget) * 100));

    const goalLabel = document.getElementById('dash-goal-label');
    if (goalLabel) goalLabel.textContent = `${goalCurrent} / ${goalTarget} XP`;
    
    const goalBar = document.getElementById('dash-goal-bar');
    if (goalBar) goalBar.style.width = `${goalPercent}%`;

    const masteryData = State.persistence.mastery[lang.id] || {};
    let totalItems = 0;
    let masteredCount = 0;
    let weakCount = 0;

    Object.keys(lang.data).forEach(cat => {
        const dict = lang.data[cat];
        Object.keys(dict).forEach(k => {
            totalItems++;
            const m = masteryData[k] || 0;
            if (m >= 4) masteredCount++;
            else if (m > 0 && m < 3) weakCount++;
        });
    });

    const langMasteryPercent = totalItems > 0 ? Math.round((masteredCount / totalItems) * 100) : 0;
    
    const statMasteryVal = document.getElementById('dash-stat-mastery');
    if (statMasteryVal) statMasteryVal.textContent = `${langMasteryPercent}%`;
    
    const statMasteredCount = document.getElementById('dash-stat-mastered-count');
    if (statMasteredCount) statMasteredCount.textContent = `${masteredCount} of ${totalItems} items`;

    const statWeakCount = document.getElementById('dash-stat-weak');
    if (statWeakCount) statWeakCount.textContent = weakCount;

    const hubGrid = document.getElementById('dash-languages-grid');
    if (hubGrid) {
        hubGrid.innerHTML = '';
        Object.values(LANGUAGES).forEach(l => {
            const lMastery = State.persistence.mastery[l.id] || {};
            let lTotal = 0;
            let lMastered = 0;
            Object.keys(l.data).forEach(c => {
                const dict = l.data[c];
                Object.keys(dict).forEach(k => {
                    lTotal++;
                    if ((lMastery[k] || 0) >= 4) lMastered++;
                });
            });
            const pct = lTotal > 0 ? Math.round((lMastered / lTotal) * 100) : 0;
            const isCurrent = l.id === lang.id;

            const card = document.createElement('div');
            card.className = `lang-hub-card ${isCurrent ? 'active' : ''}`;
            card.onclick = () => selectLanguage(l.id, 'dashboard');
            card.innerHTML = `
                <div class="flex items-center justify-between mb-3">
                    <span class="text-3xl">${l.icon}</span>
                    ${isCurrent ? '<span class="chip-badge chip-accent text-xs">Active</span>' : ''}
                </div>
                <div class="font-bold text-lg text-primary mb-1">${l.name}</div>
                <div class="text-xs text-muted mb-3">${l.nativeName} • ${lTotal} items</div>
                <div class="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden" style="background: rgba(0,0,0,0.06);">
                    <div class="h-full rounded-full" style="width: ${pct}%; background: ${l.accent};"></div>
                </div>
                <div class="flex justify-between items-center text-[10px] text-muted mt-2">
                    <span>Mastery</span>
                    <span class="font-bold text-primary">${pct}%</span>
                </div>
            `;
            hubGrid.appendChild(card);
        });
    }
}

// -------------------------------------------------------------
// PRACTICE ARENA VIEW
// -------------------------------------------------------------
function renderPracticeView() {
    const lang = State.lang;
    if (!lang) return;

    const topicContainer = document.getElementById('practice-topics-container');
    if (topicContainer) {
        topicContainer.innerHTML = '';

        if (lang.fundamentals && lang.fundamentals.length > 0) {
            const groupHeader = document.createElement('div');
            groupHeader.className = 'w-full text-xs font-bold uppercase tracking-wider text-muted mt-2 mb-1';
            groupHeader.textContent = 'Characters & Alphabets';
            topicContainer.appendChild(groupHeader);

            lang.fundamentals.forEach((fKey, idx) => {
                const count = Object.keys(lang.data[fKey] || {}).length;
                const chip = document.createElement('button');
                chip.type = 'button';
                chip.className = `topic-chip ${State.activeCats.includes(fKey) ? 'selected' : ''}`;
                chip.dataset.cat = fKey;
                chip.innerHTML = `
                    <span class="topic-chip-name">${lang.fundamentalLabels[idx] || fKey}</span>
                    <span class="topic-chip-count">${count}</span>
                `;
                chip.onclick = () => toggleTopicCategory(fKey, chip);
                topicContainer.appendChild(chip);
            });
        }

        const vocabHeader = document.createElement('div');
        vocabHeader.className = 'w-full text-xs font-bold uppercase tracking-wider text-muted mt-4 mb-1';
        vocabHeader.textContent = 'Vocabulary & Phrases';
        topicContainer.appendChild(vocabHeader);

        const vocabCategories = [
            { key: 'vocabulary', label: 'Core Vocabulary' },
            { key: 'travel', label: 'Travel & Phrases' },
            { key: 'school', label: 'School & Daily' }
        ];

        vocabCategories.forEach(item => {
            const count = Object.keys(lang.data[item.key] || {}).length;
            const chip = document.createElement('button');
            chip.type = 'button';
            chip.className = `topic-chip ${State.activeCats.includes(item.key) ? 'selected' : ''}`;
            chip.dataset.cat = item.key;
            chip.innerHTML = `
                <span class="topic-chip-name">${item.label}</span>
                <span class="topic-chip-count">${count}</span>
            `;
            chip.onclick = () => toggleTopicCategory(item.key, chip);
            topicContainer.appendChild(chip);
        });

        const customCount = Object.keys(lang.data.custom || {}).length;
        const customChip = document.createElement('button');
        customChip.type = 'button';
        customChip.className = `topic-chip ${State.activeCats.includes('custom') ? 'selected' : ''}`;
        customChip.dataset.cat = 'custom';
        customChip.innerHTML = `
            <span class="topic-chip-name">📚 Word Bank</span>
            <span class="topic-chip-count">${customCount}</span>
        `;
        customChip.onclick = () => toggleTopicCategory('custom', customChip);
        topicContainer.appendChild(customChip);
    }

    const kanaOnlyOpt = document.getElementById('opt-kana-only');
    if (kanaOnlyOpt) {
        kanaOnlyOpt.classList.toggle('hidden', lang.id !== 'japanese');
    }

    document.querySelectorAll('[data-practice-mode]').forEach(card => {
        card.classList.toggle('selected', card.dataset.practiceMode === State.mode);
    });

    updatePracticeItemEstimates();
}

function toggleTopicCategory(catKey, element) {
    if (State.activeCats.includes(catKey)) {
        if (State.activeCats.length > 1) {
            State.activeCats = State.activeCats.filter(c => c !== catKey);
            element.classList.remove('selected');
        }
    } else {
        State.activeCats.push(catKey);
        element.classList.add('selected');
    }
    updatePracticeItemEstimates();
}

function selectAllTopics(selectAll = true) {
    const lang = State.lang;
    if (!lang) return;

    if (selectAll) {
        State.activeCats = [];
        if (lang.fundamentals) State.activeCats.push(...lang.fundamentals);
        State.activeCats.push('vocabulary', 'travel', 'school');
        if (Object.keys(lang.data.custom || {}).length > 0) State.activeCats.push('custom');
    } else {
        State.activeCats = lang.fundamentals && lang.fundamentals.length > 0
            ? [lang.fundamentals[0]]
            : ['vocabulary'];
    }

    document.querySelectorAll('.topic-chip').forEach(chip => {
        chip.classList.toggle('selected', State.activeCats.includes(chip.dataset.cat));
    });

    updatePracticeItemEstimates();
}

function updatePracticeItemEstimates() {
    let totalItems = 0;
    const lang = State.lang;
    if (!lang) return;

    State.activeCats.forEach(c => {
        if (c === 'custom') {
            totalItems += Object.keys(lang.data.custom || {}).length;
        } else if (lang.data[c]) {
            totalItems += Object.keys(lang.data[c]).length;
        }
    });

    const estTime = Math.max(1, Math.round(totalItems * 0.15));
    const label = document.getElementById('practice-item-estimate');
    if (label) {
        label.textContent = `${totalItems} items selected • ~${estTime} mins`;
    }
}

// -------------------------------------------------------------
// MASTERY MATRIX VIEW
// -------------------------------------------------------------
let currentMasteryFilter = 'all';
let currentMasterySearch = '';

function renderMasteryMatrix() {
    const lang = State.lang;
    if (!lang) return;

    const matrixGrid = document.getElementById('mastery-items-grid');
    if (!matrixGrid) return;
    matrixGrid.innerHTML = '';

    const langMastery = State.persistence.mastery[lang.id] || {};
    const query = (currentMasterySearch || '').toLowerCase().trim();

    const items = [];
    Object.keys(lang.data).forEach(cat => {
        const isFund = lang.fundamentals && lang.fundamentals.includes(cat);
        const dict = lang.data[cat];

        Object.entries(dict).forEach(([key, val]) => {
            const def = typeof val === 'object' ? val.def : val;
            const rom = typeof val === 'object' ? val.rom : val;
            const score = langMastery[key] || 0;

            if (currentMasteryFilter === 'chars' && !isFund) return;
            if (currentMasteryFilter === 'vocab' && isFund) return;
            if (currentMasteryFilter === 'weak' && (score === 0 || score >= 3)) return;
            if (currentMasteryFilter === 'mastered' && score < 4) return;

            if (query) {
                const matchKey = key.toLowerCase().includes(query);
                const matchDef = def.toLowerCase().includes(query);
                const matchRom = (rom || '').toLowerCase().includes(query);
                if (!matchKey && !matchDef && !matchRom) return;
            }

            items.push({ key, def, rom, score, category: cat, isFund });
        });
    });

    const countLabel = document.getElementById('mastery-count-indicator');
    if (countLabel) countLabel.textContent = `Showing ${items.length} items`;

    if (items.length === 0) {
        matrixGrid.innerHTML = `
            <div class="col-span-full py-16 text-center text-muted">
                <div class="text-4xl mb-3">🔍</div>
                <p class="font-medium">No items found matching your criteria.</p>
                <p class="text-xs opacity-60 mt-1">Try clearing filters or search keywords.</p>
            </div>
        `;
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'mastery-card';
        card.onclick = () => {
            speak(item.key);
            card.classList.add('pulse-light');
            setTimeout(() => card.classList.remove('pulse-light'), 300);
        };

        let dotsHTML = '<div class="mastery-stars">';
        for (let i = 0; i < 5; i++) {
            dotsHTML += `<span class="mastery-star ${i < item.score ? 'filled' : ''}">★</span>`;
        }
        dotsHTML += '</div>';

        card.innerHTML = `
            <div class="flex items-start justify-between w-full">
                <span class="text-[10px] text-muted font-mono uppercase tracking-wider">${item.category}</span>
                <span class="audio-hint-icon">🔊</span>
            </div>
            <div class="mastery-card-char font-lang font-bold">${item.key}</div>
            <div class="mastery-card-rom">${item.rom}</div>
            <div class="mastery-card-def">${item.def}</div>
            ${dotsHTML}
        `;
        matrixGrid.appendChild(card);
    });
}

function setMasteryFilter(filterType) {
    currentMasteryFilter = filterType;
    document.querySelectorAll('[data-mastery-filter]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.masteryFilter === filterType);
    });
    renderMasteryMatrix();
}

function practiceWeakItems() {
    const lang = State.lang;
    if (!lang) return;
    const masteryData = State.persistence.mastery[lang.id] || {};
    
    State.activeCats = [];
    Object.keys(lang.data).forEach(cat => {
        const dict = lang.data[cat];
        const hasWeak = Object.keys(dict).some(k => {
            const m = masteryData[k] || 0;
            return m > 0 && m < 3;
        });
        if (hasWeak) State.activeCats.push(cat);
    });

    if (State.activeCats.length === 0) {
        State.activeCats = lang.fundamentals && lang.fundamentals.length > 0
            ? [lang.fundamentals[0]]
            : ['vocabulary'];
    }

    State.isTeachMode = true;
    switchTab('practice');
}

// -------------------------------------------------------------
// WORD BANK / LIBRARY VIEW
// -------------------------------------------------------------
let wordBankSearch = '';

function renderWordBank() {
    const lang = State.lang;
    if (!lang) return;

    const container = document.getElementById('word-bank-list');
    if (!container) return;
    container.innerHTML = '';

    const words = lang.data.custom || {};
    const keys = Object.keys(words);
    const q = (wordBankSearch || '').toLowerCase().trim();

    const filteredKeys = keys.filter(k => {
        if (!q) return true;
        const w = words[k];
        return k.toLowerCase().includes(q) || (w.def && w.def.toLowerCase().includes(q));
    });

    const countEl = document.getElementById('word-bank-count');
    if (countEl) countEl.textContent = `${keys.length} custom words`;

    if (filteredKeys.length === 0) {
        container.innerHTML = `
            <div class="empty-bank-state">
                <div class="text-5xl mb-3 opacity-40">📖</div>
                <h4 class="text-base font-bold text-primary mb-1">Your Word Bank is Empty</h4>
                <p class="text-xs text-muted max-w-sm mx-auto mb-4">
                    Import vocabulary words, travel phrases, or slang to study them in all learning modes.
                </p>
                <button type="button" class="btn-primary py-2 px-6 text-xs" onclick="toggleAddWordModal(true)">
                    + Add Your First Word
                </button>
            </div>
        `;
        return;
    }

    filteredKeys.forEach(k => {
        const item = words[k];
        const card = document.createElement('div');
        card.className = 'word-bank-card';
        card.innerHTML = `
            <div class="flex items-center gap-3">
                <button type="button" class="btn-icon text-base" onclick="speak('${k}')" title="Listen">🔊</button>
                <div>
                    <div class="font-lang font-bold text-lg text-primary">${k}</div>
                    <div class="text-xs text-muted">${item.rom || ''} • ${item.def || ''}</div>
                </div>
            </div>
            <button type="button" class="btn-icon text-red-500 hover:text-red-600" onclick="deleteWordBankItem('${k}')" title="Delete">
                🗑️
            </button>
        `;
        container.appendChild(card);
    });
}

function deleteWordBankItem(key) {
    if (!State.lang) return;
    if (State.lang.data.custom) delete State.lang.data.custom[key];
    if (!State.persistence.customList) State.persistence.customList = {};
    State.persistence.customList[State.lang.id] = State.lang.data.custom;
    saveStats();
    renderWordBank();
}

function clearAllWordBank() {
    if (!State.lang) return;
    if (confirm(`Clear all custom words in ${State.lang.name}?`)) {
        State.lang.data.custom = {};
        if (!State.persistence.customList) State.persistence.customList = {};
        State.persistence.customList[State.lang.id] = {};
        saveStats();
        renderWordBank();
    }
}

function toggleAddWordModal(open) {
    const modal = document.getElementById('modal-add-word');
    if (modal) modal.classList.toggle('hidden', !open);
    const status = document.getElementById('custom-import-status');
    if (status) status.textContent = '';
    if (open) {
        const input = document.getElementById('custom-word-input');
        if (input) input.focus();
    }
}

async function fetchTranslation(word, targetLangCode) {
    if (State.lang && State.lang.basicWords && State.lang.basicWords[word.toLowerCase()]) {
        return State.lang.basicWords[word.toLowerCase()];
    }

    try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLangCode}&dt=t&q=${encodeURIComponent(word)}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data && data[0] && data[0][0] && data[0][0][0]) {
            return data[0][0][0];
        }
    } catch(e) {}

    try {
        const pair = `en|${targetLangCode}`;
        const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=${pair}&mt=1`);
        const data = await res.json();
        if (data && data.responseData && data.responseData.translatedText) {
            return data.responseData.translatedText;
        }
    } catch(e) {}

    return word;
}

// -------------------------------------------------------------
// SETTINGS VIEW
// -------------------------------------------------------------
function renderSettings() {
    const sfxBtn = document.getElementById('setting-sfx-toggle');
    if (sfxBtn) {
        sfxBtn.textContent = State.persistence.sfxEnabled !== false ? 'ON' : 'OFF';
        sfxBtn.className = State.persistence.sfxEnabled !== false ? 'btn-toggle active' : 'btn-toggle';
    }

    const rateSlider = document.getElementById('setting-speech-rate');
    const rateVal = document.getElementById('setting-speech-val');
    if (rateSlider && rateVal) {
        rateSlider.value = State.persistence.speechRate || 1.0;
        rateVal.textContent = `${rateSlider.value}x`;
    }

    document.querySelectorAll('[data-daily-goal]').forEach(btn => {
        const val = parseInt(btn.dataset.dailyGoal, 10);
        btn.classList.toggle('active', val === (State.persistence.dailyGoal || 50));
    });

    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const lightBtn = document.getElementById('theme-btn-light');
    const darkBtn = document.getElementById('theme-btn-dark');
    if (lightBtn && darkBtn) {
        lightBtn.classList.toggle('active', currentTheme === 'light');
        darkBtn.classList.toggle('active', currentTheme === 'dark');
    }
}

function setDailyGoal(xp) {
    State.persistence.dailyGoal = xp;
    saveStats();
    renderSettings();
    if (State.currentTab === 'dashboard') renderDashboard();
}

function resetAllProgress() {
    if (confirm('Are you sure you want to reset all progress? This will delete all XP, streaks, levels, and mastery ratings.')) {
        State.persistence = {
            version: 4,
            mastery: {},
            customList: {},
            totalXP: 0,
            todayXP: 0,
            dailyGoal: 50,
            level: 1,
            streak: 0,
            lastActive: new Date().toDateString(),
            lastStreakUpdate: null,
            sfxEnabled: true,
            speechRate: 1.0,
            autoAudio: false
        };
        saveStats();
        location.reload();
    }
}

// -------------------------------------------------------------
// STUDY SESSION ENGINE
// -------------------------------------------------------------
function startSession() {
    if (!State.lang) return;

    State.wrongQueue = [];
    State.struggledWords.clear();
    State.currentDict = {};

    State.activeCats.forEach(cat => {
        if (cat === 'custom') {
            if (State.lang.data.custom) Object.assign(State.currentDict, State.lang.data.custom);
        } else if (State.lang.data[cat]) {
            Object.assign(State.currentDict, State.lang.data[cat]);
        }
    });

    const keys = Object.keys(State.currentDict);
    if (keys.length === 0) {
        alert('Please select at least one topic category with available items.');
        return;
    }

    const langMastery = State.persistence.mastery[State.lang.id] || {};
    keys.sort((a, b) => {
        const scoreA = langMastery[a] || 0;
        const scoreB = langMastery[b] || 0;
        return scoreA - scoreB + (Math.random() * 0.4 - 0.2);
    });

    State.currentKeys = keys;
    State.score = 0;
    State.streak = 0;
    State.qCount = 0;
    State.sessionAttempts = 0;

    if (State.isTestAll) {
        State.testPool = [...State.currentKeys];
    } else {
        const limit = State.mode === 'speedMatch' ? Math.min(30, State.currentKeys.length) : Math.min(15, State.currentKeys.length);
        State.testPool = State.currentKeys.slice(0, limit);
    }
    State.maxQ = State.testPool.length;

    State.flashcards.pool = [...State.testPool].sort(() => Math.random() - 0.5);
    State.flashcards.index = 0;

    document.getElementById('main-views-wrapper').classList.add('hidden');
    document.getElementById('screen-results').classList.add('hidden');
    document.getElementById('screen-study').classList.remove('hidden');

    setupStudyModeLayout();

    if (State.mode === 'speedMatch') {
        startSpeedMatch();
    } else if (State.mode === 'matchPairs') {
        startMatchPairs();
    } else {
        nextQuestion();
    }
}

function setupStudyModeLayout() {
    const isQuiz = State.mode === 'quiz';
    const isFlashcard = State.mode === 'flashcards';
    const isTyping = State.mode === 'typing';
    const isSpeed = State.mode === 'speedMatch';
    const isMatch = State.mode === 'matchPairs';

    document.getElementById('study-quiz-options').classList.toggle('hidden', !isQuiz && !isSpeed);
    document.getElementById('study-flashcard-area').classList.toggle('hidden', !isFlashcard);
    document.getElementById('study-typing-area').classList.toggle('hidden', !isTyping);
    document.getElementById('study-match-area').classList.toggle('hidden', !isMatch);
    document.getElementById('study-question-box').classList.toggle('hidden', isMatch);
    document.getElementById('study-timer-pill').classList.toggle('hidden', !isSpeed);

    if (isTyping) renderVirtualKeyboard();
}

function nextQuestion() {
    if (State.qCount >= State.maxQ && !['speedMatch', 'flashcards', 'matchPairs'].includes(State.mode)) {
        endSession();
        return;
    }

    State.isProcessing = false;

    const questionBox = document.getElementById('study-question-box');
    if (questionBox) {
        questionBox.classList.remove('correct-pulse', 'wrong-shake');
    }

    let itemKey;
    if (State.mode === 'flashcards') {
        itemKey = State.flashcards.pool[State.flashcards.index];
    } else {
        itemKey = State.testPool[State.qCount];
    }

    if (!itemKey) {
        endSession();
        return;
    }

    const itemData = State.currentDict[itemKey];
    const def = typeof itemData === 'object' ? itemData.def : itemData;
    const rom = typeof itemData === 'object' ? itemData.rom : itemData;
    const kana = (typeof itemData === 'object' && itemData.kana) ? itemData.kana : itemKey;

    let display = itemKey;
    let answer = def;

    if (State.isReverse) {
        display = def;
        answer = itemKey;
    } else if (State.isKanaOnly && State.lang.id === 'japanese') {
        display = kana;
    }

    State.currentQ = {
        char: itemKey,
        answer: answer,
        display: display,
        rom: rom,
        def: def,
        kana: kana
    };

    const progressBar = document.getElementById('study-progress-fill');
    if (progressBar) {
        const pct = State.mode === 'flashcards'
            ? ((State.flashcards.index + 1) / State.flashcards.pool.length) * 100
            : (State.qCount / State.maxQ) * 100;
        progressBar.style.width = `${pct}%`;
    }

    updateStudyHeader();

    const qText = document.getElementById('study-question-text');
    if (qText) qText.textContent = State.currentQ.display;

    const qSub = document.getElementById('study-question-sub');
    if (qSub) {
        if (!State.isReverse && State.currentQ.char.length > 1 && State.mode !== 'typing') {
            qSub.textContent = rom || '';
        } else {
            qSub.textContent = '';
        }
    }

    const mScore = (State.persistence.mastery[State.lang.id] || {})[itemKey] || 0;
    const mStarsContainer = document.getElementById('study-mastery-indicator');
    if (mStarsContainer) {
        let stars = '';
        for (let i = 0; i < 5; i++) {
            stars += `<span class="mastery-star ${i < mScore ? 'filled' : ''}">★</span>`;
        }
        mStarsContainer.innerHTML = stars;
    }

    if (State.persistence.autoAudio && !State.isReverse) {
        speak(State.currentQ.char);
    }

    if (State.mode === 'quiz' || State.mode === 'speedMatch') {
        renderQuizOptions();
    } else if (State.mode === 'flashcards') {
        renderFlashcard();
    } else if (State.mode === 'typing') {
        State.typingInput = '';
        updateTypingDisplay();
    }
}

function updateStudyHeader() {
    const scoreVal = document.getElementById('study-score-val');
    if (scoreVal) scoreVal.textContent = State.score;

    const streakVal = document.getElementById('study-streak-val');
    if (streakVal) streakVal.textContent = State.streak;
}

// -------------------------------------------------------------
// QUIZ MODE LOGIC
// -------------------------------------------------------------
function renderQuizOptions() {
    const optionsGrid = document.getElementById('study-quiz-options');
    if (!optionsGrid) return;
    optionsGrid.innerHTML = '';

    const correctAnswer = State.currentQ.answer;
    const poolOptions = [correctAnswer];
    const allKeys = State.currentKeys;

    let attempts = 0;
    while (poolOptions.length < 4 && attempts < 40 && allKeys.length > 0) {
        attempts++;
        const randKey = allKeys[Math.floor(Math.random() * allKeys.length)];
        const randData = State.currentDict[randKey];
        const randVal = State.isReverse
            ? randKey
            : (typeof randData === 'object' ? randData.def : randData);

        if (randVal && !poolOptions.includes(randVal)) {
            poolOptions.push(randVal);
        }
    }

    if (poolOptions.length < 4 && State.lang && State.lang.data) {
        const cats = Object.keys(State.lang.data);
        let fbAttempts = 0;
        while (poolOptions.length < 4 && fbAttempts < 40) {
            fbAttempts++;
            const randCat = cats[Math.floor(Math.random() * cats.length)];
            const catObj = State.lang.data[randCat] || {};
            const catKeys = Object.keys(catObj);
            if (catKeys.length > 0) {
                const randKey = catKeys[Math.floor(Math.random() * catKeys.length)];
                const itemData = catObj[randKey];
                const randVal = State.isReverse
                    ? randKey
                    : (typeof itemData === 'object' ? itemData.def : itemData);
                if (randVal && !poolOptions.includes(randVal)) {
                    poolOptions.push(randVal);
                }
            }
        }
    }

    poolOptions.sort(() => Math.random() - 0.5);

    poolOptions.forEach((optText, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'quiz-option-btn';
        btn.innerHTML = `
            <span class="quiz-option-key">[${idx + 1}]</span>
            <span class="quiz-option-text">${optText}</span>
        `;
        btn.onclick = (e) => submitAnswer(optText, btn, e);
        optionsGrid.appendChild(btn);
    });
}

function submitAnswer(selected, buttonElement, event) {
    if (State.isProcessing) return;
    State.isProcessing = true;
    State.qCount++;
    State.sessionAttempts++;

    const chosen = (selected || '').toLowerCase().trim();
    const correct = (State.currentQ.answer || '').toLowerCase().trim();
    const isCorrect = chosen === correct || (State.lang.romanMap && State.lang.romanMap[selected] === State.currentQ.char);

    const mKey = State.currentQ.char;
    if (!State.persistence.mastery[State.lang.id]) State.persistence.mastery[State.lang.id] = {};
    if (!State.persistence.mastery[State.lang.id][mKey]) State.persistence.mastery[State.lang.id][mKey] = 0;

    const questionBox = document.getElementById('study-question-box');

    if (isCorrect) {
        SFX.correct();
        haptic('success');
        State.score++;
        State.streak++;
        if (State.streak > State.maxStreak) State.maxStreak = State.streak;

        if (buttonElement) buttonElement.classList.add('correct');
        if (questionBox) questionBox.classList.add('correct-pulse');
        if (event) createConfetti(event.clientX, event.clientY);

        State.persistence.mastery[State.lang.id][mKey] = Math.min(5, State.persistence.mastery[State.lang.id][mKey] + 1);
        addXP(10);
    } else {
        SFX.wrong();
        haptic('error');
        State.streak = 0;

        if (buttonElement) buttonElement.classList.add('wrong');
        if (questionBox) questionBox.classList.add('wrong-shake');

        document.querySelectorAll('.quiz-option-btn').forEach(btn => {
            const txt = btn.querySelector('.quiz-option-text');
            if (txt && txt.textContent.toLowerCase().trim() === correct) {
                btn.classList.add('correct');
            }
        });

        State.struggledWords.add(mKey);

        if (State.isTeachMode) {
            State.testPool.splice(State.qCount + 1, 0, mKey);
            State.maxQ++;
        }

        State.persistence.mastery[State.lang.id][mKey] = Math.max(0, State.persistence.mastery[State.lang.id][mKey] - 1);
        addXP(2);
    }

    updateStudyHeader();
    setTimeout(nextQuestion, 1100);
}

// -------------------------------------------------------------
// FLASHCARD MODE LOGIC
// -------------------------------------------------------------
let isCardFlipped = false;

function renderFlashcard() {
    isCardFlipped = false;
    const card = document.getElementById('flashcard-3d');
    if (card) card.classList.remove('flipped');

    const frontChar = document.getElementById('fc-front-char');
    if (frontChar) frontChar.textContent = State.currentQ.display;

    const backRom = document.getElementById('fc-back-rom');
    if (backRom) backRom.textContent = State.currentQ.rom || '';

    const backDef = document.getElementById('fc-back-def');
    if (backDef) backDef.textContent = State.currentQ.def;
}

function flipFlashcard() {
    const card = document.getElementById('flashcard-3d');
    if (card) {
        isCardFlipped = !isCardFlipped;
        card.classList.toggle('flipped', isCardFlipped);
        if (isCardFlipped) speak(State.currentQ.char);
    }
}

function rateFlashcard(rating) {
    const mKey = State.currentQ.char;
    if (!State.persistence.mastery[State.lang.id]) State.persistence.mastery[State.lang.id] = {};
    const cur = State.persistence.mastery[State.lang.id][mKey] || 0;

    if (rating === 'again') {
        SFX.wrong();
        State.struggledWords.add(mKey);
        State.persistence.mastery[State.lang.id][mKey] = Math.max(0, cur - 1);
        State.flashcards.pool.push(mKey);
    } else if (rating === 'good') {
        SFX.correct();
        State.score++;
        State.persistence.mastery[State.lang.id][mKey] = Math.min(5, cur + 1);
        addXP(5);
    } else if (rating === 'mastered') {
        SFX.correct();
        State.score += 2;
        State.persistence.mastery[State.lang.id][mKey] = Math.min(5, cur + 2);
        addXP(10);
        createConfetti();
    }

    State.flashcards.index++;
    if (State.flashcards.index >= State.flashcards.pool.length) {
        endSession();
    } else {
        nextQuestion();
    }
}

// -------------------------------------------------------------
// TYPING PRACTICE LOGIC
// -------------------------------------------------------------
function updateTypingDisplay() {
    const displayEl = document.getElementById('typing-input-display');
    if (displayEl) {
        displayEl.textContent = State.typingInput || ' ';
    }
}

function renderVirtualKeyboard() {
    const container = document.getElementById('virtual-keyboard-grid');
    if (!container || !State.lang) return;
    container.innerHTML = '';

    const layout = State.lang.keyboardLayout || [
        ['q','w','e','r','t','y','u','i','o','p'],
        ['a','s','d','f','g','h','j','k','l'],
        ['z','x','c','v','b','n','m']
    ];

    layout.forEach(row => {
        const rowEl = document.createElement('div');
        rowEl.className = 'vk-row';
        row.forEach(key => {
            const keyEl = document.createElement('button');
            keyEl.type = 'button';
            keyEl.className = 'vk-key';
            keyEl.textContent = key;
            keyEl.onclick = () => {
                State.typingInput += key;
                updateTypingDisplay();
            };
            rowEl.appendChild(keyEl);
        });
        container.appendChild(rowEl);
    });

    const ctrlRow = document.createElement('div');
    ctrlRow.className = 'vk-row mt-2';

    const bksp = document.createElement('button');
    bksp.type = 'button';
    bksp.className = 'vk-key vk-key-wide';
    bksp.textContent = '⌫ Delete';
    bksp.onclick = () => {
        State.typingInput = State.typingInput.slice(0, -1);
        updateTypingDisplay();
    };

    const enter = document.createElement('button');
    enter.type = 'button';
    enter.className = 'vk-key vk-key-wide vk-key-action';
    enter.textContent = '⏎ Enter';
    enter.onclick = () => submitAnswer(State.typingInput, null, null);

    ctrlRow.appendChild(bksp);
    ctrlRow.appendChild(enter);
    container.appendChild(ctrlRow);
}

// -------------------------------------------------------------
// SPEED SPRINT LOGIC
// -------------------------------------------------------------
function startSpeedMatch() {
    State.timer.count = 60;
    const timerVal = document.getElementById('study-timer-val');
    if (timerVal) timerVal.textContent = '60s';

    clearInterval(State.timer.interval);
    State.timer.interval = setInterval(() => {
        State.timer.count--;
        if (timerVal) timerVal.textContent = `${State.timer.count}s`;
        if (State.timer.count <= 0) {
            clearInterval(State.timer.interval);
            endSession();
        }
    }, 1000);

    nextQuestion();
}

// -------------------------------------------------------------
// MATCH PAIRS GAME ENGINE
// -------------------------------------------------------------
function startMatchPairs() {
    const grid = document.getElementById('study-match-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const selectedKeys = State.testPool.slice(0, 5);
    State.matchPairs.totalPairs = selectedKeys.length;
    State.matchPairs.matched = 0;
    State.matchPairs.selected = [];

    const cards = [];
    selectedKeys.forEach(k => {
        const val = State.currentDict[k];
        const def = typeof val === 'object' ? val.def : val;

        cards.push({ id: k, text: k, type: 'char', pairId: k });
        cards.push({ id: `${k}_def`, text: def, type: 'def', pairId: k });
    });

    cards.sort(() => Math.random() - 0.5);
    State.matchPairs.cards = cards;

    cards.forEach((cardData, idx) => {
        const cardBtn = document.createElement('button');
        cardBtn.type = 'button';
        cardBtn.className = 'match-card';
        cardBtn.dataset.cardIndex = idx;
        cardBtn.dataset.pairId = cardData.pairId;
        cardBtn.innerHTML = `<span class="match-card-text font-lang">${cardData.text}</span>`;
        cardBtn.onclick = () => handleMatchCardClick(cardData, cardBtn);
        grid.appendChild(cardBtn);
    });
}

function handleMatchCardClick(cardData, cardElement) {
    if (cardElement.classList.contains('matched') || cardElement.classList.contains('selected')) return;
    if (State.matchPairs.selected.length >= 2) return;

    cardElement.classList.add('selected');
    State.matchPairs.selected.push({ data: cardData, element: cardElement });

    if (State.matchPairs.selected.length === 2) {
        const [c1, c2] = State.matchPairs.selected;

        if (c1.data.pairId === c2.data.pairId && c1.data.type !== c2.data.type) {
            SFX.match();
            haptic('success');
            c1.element.classList.remove('selected');
            c2.element.classList.remove('selected');
            c1.element.classList.add('matched');
            c2.element.classList.add('matched');

            State.matchPairs.matched++;
            State.score += 2;
            addXP(6);
            updateStudyHeader();

            State.matchPairs.selected = [];

            if (State.matchPairs.matched >= State.matchPairs.totalPairs) {
                createConfetti();
                setTimeout(() => endSession(), 800);
            }
        } else {
            SFX.wrong();
            haptic('error');
            c1.element.classList.add('mismatch');
            c2.element.classList.add('mismatch');

            setTimeout(() => {
                c1.element.classList.remove('selected', 'mismatch');
                c2.element.classList.remove('selected', 'mismatch');
                State.matchPairs.selected = [];
            }, 600);
        }
    }
}

// -------------------------------------------------------------
// SESSION RESULTS & COMPLETION
// -------------------------------------------------------------
function endSession() {
    clearInterval(State.timer.interval);

    document.getElementById('screen-study').classList.add('hidden');
    document.getElementById('screen-results').classList.remove('hidden');

    const accuracy = State.sessionAttempts > 0
        ? Math.round((State.score / State.sessionAttempts) * 100)
        : 100;

    const resScore = document.getElementById('res-final-score');
    if (resScore) resScore.textContent = State.score;

    const resAcc = document.getElementById('res-final-acc');
    if (resAcc) resAcc.textContent = `${accuracy}%`;

    const resStreak = document.getElementById('res-final-streak');
    if (resStreak) resStreak.textContent = State.maxStreak;

    const struggledSection = document.getElementById('res-struggled-section');
    const struggledList = document.getElementById('res-struggled-list');

    if (struggledList) {
        struggledList.innerHTML = '';
        if (State.struggledWords.size > 0) {
            if (struggledSection) struggledSection.classList.remove('hidden');
            State.struggledWords.forEach(wKey => {
                const data = State.currentDict[wKey] || {};
                const def = typeof data === 'object' ? data.def : data;
                const rom = typeof data === 'object' ? data.rom : data;

                const item = document.createElement('div');
                item.className = 'struggled-review-card';
                item.onclick = () => speak(wKey);
                item.innerHTML = `
                    <div class="text-left">
                        <div class="font-lang font-bold text-primary">${wKey}</div>
                        <div class="text-xs text-muted">${rom ? rom + ' • ' : ''}${def}</div>
                    </div>
                    <span class="text-lg">🔊</span>
                `;
                struggledList.appendChild(item);
            });
        } else {
            if (struggledSection) struggledSection.classList.add('hidden');
        }
    }
}

function quitStudySession() {
    clearInterval(State.timer.interval);
    document.getElementById('screen-study').classList.add('hidden');
    document.getElementById('main-views-wrapper').classList.remove('hidden');
    switchTab(State.currentTab || 'dashboard');
}

// -------------------------------------------------------------
// LANGUAGE PICKER MODAL
// -------------------------------------------------------------
function openLanguageModal() {
    const modal = document.getElementById('modal-language-picker');
    if (modal) modal.classList.remove('hidden');
}

function closeLanguageModal() {
    const modal = document.getElementById('modal-language-picker');
    if (modal) modal.classList.add('hidden');
}

// -------------------------------------------------------------
// INITIALIZATION & EVENT LISTENERS
// -------------------------------------------------------------
function initApp() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(err => {
            console.warn("SW registration skipped", err);
        });
    }

    initTheme();
    loadStats();

    const urlParams = new URLSearchParams(window.location.search);
    const initialLang = urlParams.get('lang') || 'japanese';
    const initialTab = urlParams.get('tab') || 'dashboard';

    selectLanguage(initialLang, initialTab);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const langModal = document.getElementById('modal-language-picker');
            if (langModal && !langModal.classList.contains('hidden')) {
                closeLanguageModal();
                return;
            }
            const addWordModal = document.getElementById('modal-add-word');
            if (addWordModal && !addWordModal.classList.contains('hidden')) {
                toggleAddWordModal(false);
                return;
            }
            const isStudy = !document.getElementById('screen-study').classList.contains('hidden');
            if (isStudy) {
                quitStudySession();
                return;
            }
        }

        const isStudyActive = !document.getElementById('screen-study').classList.contains('hidden');
        if (!isStudyActive) return;

        if ((State.mode === 'quiz' || State.mode === 'speedMatch') && ['1','2','3','4'].includes(e.key)) {
            const idx = parseInt(e.key, 10) - 1;
            const buttons = document.querySelectorAll('.quiz-option-btn');
            if (buttons[idx]) buttons[idx].click();
        }
        else if (State.mode === 'flashcards') {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                flipFlashcard();
            } else if (e.key === 'ArrowLeft') {
                rateFlashcard('again');
            } else if (e.key === 'ArrowDown') {
                rateFlashcard('good');
            } else if (e.key === 'ArrowRight') {
                rateFlashcard('mastered');
            } else if (e.key.toLowerCase() === 'r') {
                speak(State.currentQ ? State.currentQ.char : null);
            }
        }
        else if (State.mode === 'typing') {
            if (e.key === 'Backspace') {
                State.typingInput = State.typingInput.slice(0, -1);
                updateTypingDisplay();
            } else if (e.key === 'Enter') {
                submitAnswer(State.typingInput);
            } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
                State.typingInput += e.key;
                updateTypingDisplay();
            }
        }
    });

    const importBtn = document.getElementById('custom-import-btn');
    if (importBtn) {
        importBtn.onclick = async () => {
            const input = document.getElementById('custom-word-input');
            const statusEl = document.getElementById('custom-import-status');
            if (!input || !input.value.trim()) return;

            const words = input.value.split(/[,|\n]/).map(w => w.trim()).filter(w => w.length > 0);
            if (words.length === 0) return;

            if (statusEl) statusEl.textContent = 'Translating and adding...';

            const langCodes = { japanese: 'ja', korean: 'ko', french: 'fr', spanish: 'es', german: 'de' };
            const targetCode = langCodes[State.lang.id] || 'en';

            for (const word of words) {
                const trans = await fetchTranslation(word, targetCode);
                if (trans) {
                    State.lang.data.custom[trans] = { rom: word, def: word };
                }
            }

            State.persistence.customList[State.lang.id] = State.lang.data.custom;
            saveStats();
            renderWordBank();

            input.value = '';
            if (statusEl) statusEl.textContent = `Successfully added ${words.length} items!`;
            setTimeout(() => toggleAddWordModal(false), 800);
        };
    }
}

window.addEventListener('DOMContentLoaded', initApp);
