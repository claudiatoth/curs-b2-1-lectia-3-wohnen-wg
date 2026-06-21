// ============================================
// EXERCIȚII - Wohnen & WG-Regeln (B2.1 · Lecția 3)
// Claudia Toth · 5 ex: Passiv Präsens/Präteritum · Perfekt/Plqpf · mit Modalverben · Ersatzformen · Diktat
// Sursă DF: INT575-579. Diktat (Ex5) = audio cu VOCEA CLAUDIEI (audio/diktat-0N.wav).
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

// ============================================
// EX 1: Passiv Präsens / Präteritum
// ============================================
const ex1Data = [
    { id: 'a', sentence: 'Die Küche ____ jeden Tag geputzt. (Präsens)', translation: 'Bucătăria se curăță în fiecare zi. — wird + Partizip II.', correct: 'wird', accept: ['wird'] },
    { id: 'b', sentence: 'Der Müll ____ dienstags rausgebracht. (Präsens)', translation: 'Gunoiul se scoate marțea.', correct: 'wird', accept: ['wird'] },
    { id: 'c', sentence: 'Das Zimmer wurde letztes Jahr ____. (streichen → Partizip II)', translation: 'Camera a fost zugrăvită anul trecut. — gestrichen.', correct: 'gestrichen', accept: ['gestrichen'] },
    { id: 'd', sentence: 'Der Rauchmelder ____ vor meinem Einzug installiert. (Präteritum)', translation: 'Detectorul de fum a fost instalat înainte să mă mut. — wurde.', correct: 'wurde', accept: ['wurde'] },
    { id: 'e', sentence: 'Die Miete ____ am Ersten überwiesen. (Präsens)', translation: 'Chiria se virează pe data de întâi.', correct: 'wird', accept: ['wird'] },
    { id: 'f', sentence: 'Die Fenster wurden vom Vermieter ____. (reparieren → Partizip II)', translation: 'Ferestrele au fost reparate de proprietar. — repariert (fără ge-).', correct: 'repariert', accept: ['repariert'] },
    { id: 'g', sentence: 'In der WG ____ der Müll getrennt. (Präsens)', translation: 'În WG gunoiul se separă.', correct: 'wird', accept: ['wird'] },
    { id: 'h', sentence: 'Das Bad ____ gestern ____. (putzen → Präteritum complet: aux + Partizip)', translation: 'Baia a fost curățată ieri. — wurde geputzt.', correct: 'wurde geputzt', accept: ['wurde geputzt'] }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Passiv prezent &amp; imperfect — completează golul.</strong><br>
        <em>Regula:</em> Präsens = <strong>wird</strong> + Partizip II · Präteritum = <strong>wurde</strong> + Partizip II (la final).
    </div>`;
    ex1Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                <small style="color:#5A5147">💬 ${it.translation}</small>
                <input type="text" id="ex1-${it.id}" placeholder="completează...">
            </div>
            <div class="feedback" id="ex1-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const input = document.getElementById(`ex1-${it.id}`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex1Data.length };
}
function resetEx1() { buildEx1(); }

// ============================================
// EX 2: Passiv Perfekt / Plusquamperfekt (ist … worden)
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'Die Wohnung ist letzte Woche renoviert ____. (Perfekt — participiul lui werden)', translation: 'Locuința a fost renovată săptămâna trecută. — worden (NU geworden).', correct: 'worden', accept: ['worden'] },
    { id: 'b', sentence: 'Der Vertrag ____ schon unterschrieben worden. (Perfekt: er → ?)', translation: 'Contractul a fost deja semnat. — ist.', correct: 'ist', accept: ['ist'] },
    { id: 'c', sentence: 'Der Boden war vor meinem Einzug erneuert ____. (Plusquamperfekt)', translation: 'Podeaua fusese reînnoită înainte să mă mut. — worden.', correct: 'worden', accept: ['worden'] },
    { id: 'd', sentence: 'Die Kaution ____ bereits überwiesen worden. (Perfekt: sie → ?)', translation: 'Garanția a fost deja virată. — ist.', correct: 'ist', accept: ['ist'] },
    { id: 'e', sentence: 'Die Batterien sind seitdem nicht mehr gewechselt ____. (Perfekt)', translation: 'Bateriile nu au mai fost schimbate de atunci. — worden.', correct: 'worden', accept: ['worden'] },
    { id: 'f', sentence: 'Das Zimmer ____ frisch gestrichen worden. (Perfekt: es → ?)', translation: 'Camera a fost proaspăt zugrăvită. — ist.', correct: 'ist', accept: ['ist'] },
    { id: 'g', sentence: 'Nachdem alles gepackt worden ____, riefen wir ein Taxi. (Plusquamperfekt: es → ?)', translation: 'După ce totul fusese împachetat, am chemat un taxi. — war.', correct: 'war', accept: ['war'] },
    { id: 'h', sentence: 'Der Müll ist heute schon ____ worden. (rausbringen → Partizip II)', translation: 'Gunoiul a fost deja scos azi. — rausgebracht.', correct: 'rausgebracht', accept: ['rausgebracht', 'raus gebracht'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Passiv perfect &amp; mai mult ca perfect — completează golul.</strong><br>
        <em>Regula:</em> ist/war + Partizip II + <strong>worden</strong>. ⚠️ La Passiv participiul lui werden e <strong>worden</strong>, NU „geworden".
    </div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                <small style="color:#5A5147">💬 ${it.translation}</small>
                <input type="text" id="ex2-${it.id}" placeholder="completează...">
            </div>
            <div class="feedback" id="ex2-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const input = document.getElementById(`ex2-${it.id}`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex2Data.length };
}
function resetEx2() { buildEx2(); }

// ============================================
// EX 3: Passiv mit Modalverben (… Partizip II + werden)
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Die Eingangstür muss nachts abgeschlossen ____. (werden)', translation: 'Ușa de la intrare trebuie încuiată noaptea.', correct: 'werden', accept: ['werden'] },
    { id: 'b', sentence: 'Der Müll muss ____ werden. (trennen → Partizip II)', translation: 'Gunoiul trebuie separat. — getrennt.', correct: 'getrennt', accept: ['getrennt'] },
    { id: 'c', sentence: 'Die Miete soll pünktlich überwiesen ____. (werden)', translation: 'Chiria trebuie virată la timp.', correct: 'werden', accept: ['werden'] },
    { id: 'd', sentence: 'Die Tiere können ____ werden. (streicheln → Partizip II)', translation: 'Animalele pot fi mângâiate. — gestreichelt.', correct: 'gestreichelt', accept: ['gestreichelt'] },
    { id: 'e', sentence: 'Beim Verlassen muss das Licht ____ werden. (ausschalten → Partizip II)', translation: 'La plecare lumina trebuie stinsă. — ausgeschaltet.', correct: 'ausgeschaltet', accept: ['ausgeschaltet'] },
    { id: 'f', sentence: 'Verspätungen müssen ____ werden. (mitteilen → Partizip II)', translation: 'Întârzierile trebuie comunicate. — mitgeteilt.', correct: 'mitgeteilt', accept: ['mitgeteilt'] },
    { id: 'g', sentence: 'Die Küche soll sauber gehalten ____. (werden)', translation: 'Bucătăria trebuie ținută curată.', correct: 'werden', accept: ['werden'] },
    { id: 'h', sentence: 'Die Formulare können online ____ werden. (einreichen → Partizip II)', translation: 'Formularele pot fi depuse online. — eingereicht.', correct: 'eingereicht', accept: ['eingereicht'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Passiv cu verbe modale — completează (Partizip II sau werden).</strong><br>
        <em>Structura:</em> Modalverb (loc 2) + … + <strong>Partizip II + werden</strong> (la final).
    </div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                <small style="color:#5A5147">💬 ${it.translation}</small>
                <input type="text" id="ex3-${it.id}" placeholder="completează...">
            </div>
            <div class="feedback" id="ex3-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const input = document.getElementById(`ex3-${it.id}`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex3Data.length };
}
function resetEx3() { buildEx3(); }

// ============================================
// EX 4: Passiversatzformen (sein+zu / sich lassen / man / -bar)
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'Die Tür muss abgeschlossen werden. → Die Tür ist ____. (sein + zu, abschließen separabil)', translation: 'Ușa trebuie încuiată. — ist abzuschließen.', correct: 'abzuschließen', accept: ['abzuschließen', 'abzuschliessen'] },
    { id: 'b', sentence: 'Das Problem kann gelöst werden. → Das Problem lässt sich ____. (sich lassen)', translation: 'Problema se poate rezolva. — lässt sich lösen.', correct: 'lösen', accept: ['lösen', 'loesen'] },
    { id: 'c', sentence: 'Das Wasser kann getrunken werden. → Das Wasser ist ____. (-bar)', translation: 'Apa se poate bea. — trinkbar.', correct: 'trinkbar', accept: ['trinkbar'] },
    { id: 'd', sentence: 'Der Müll wird getrennt. → ____ trennt den Müll. (Ersatzform impersonală)', translation: 'Gunoiul se separă. — Man trennt den Müll.', correct: 'Man', accept: ['man'] },
    { id: 'e', sentence: 'Die Rechnung muss bezahlt werden. → Die Rechnung ist ____. (sein + zu, bezahlen neseparabil)', translation: 'Factura trebuie plătită. — ist zu bezahlen.', correct: 'zu bezahlen', accept: ['zu bezahlen'] },
    { id: 'f', sentence: 'Das Fenster kann geöffnet werden. → Das Fenster lässt sich ____. (sich lassen)', translation: 'Fereastra se poate deschide. — lässt sich öffnen.', correct: 'öffnen', accept: ['öffnen', 'oeffnen'] },
    { id: 'g', sentence: 'Die Schrift kann gelesen werden. → Die Schrift ist ____. (-bar)', translation: 'Scrisul se poate citi. — lesbar.', correct: 'lesbar', accept: ['lesbar'] },
    { id: 'h', sentence: 'Die Formulare müssen abgegeben werden. → Die Formulare sind ____. (sein + zu, abgeben separabil)', translation: 'Formularele trebuie predate. — sind abzugeben.', correct: 'abzugeben', accept: ['abzugeben'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Passiversatzformen — completează forma alternativă. ⭐</strong><br>
        <em>sein + zu + Infinitiv</em> (ist abzuschließen) · <em>sich lassen</em> (lässt sich lösen) · <em>man</em> · <em>-bar</em> (trinkbar).
    </div>`;
    ex4Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                <small style="color:#5A5147">💬 ${it.translation}</small>
                <input type="text" id="ex4-${it.id}" placeholder="forma alternativă">
            </div>
            <div class="feedback" id="ex4-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const input = document.getElementById(`ex4-${it.id}`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex4Data.length };
}
function resetEx4() { buildEx4(); }

// ============================================
// EX 5: Diktat audio — VOCEA CLAUDIEI (audio/diktat-0N.wav)
// ============================================
const ex5Data = [
    { id: 'a', audio: 'audio/diktat-01.wav', text: 'Der Müll wird jeden Dienstag rausgebracht.', accept: ['Der Müll wird jeden Dienstag rausgebracht.'], ro: 'Gunoiul se scoate în fiecare marți.' },
    { id: 'b', audio: 'audio/diktat-02.wav', text: 'Die Küche wird gemeinsam benutzt.', accept: ['Die Küche wird gemeinsam benutzt.'], ro: 'Bucătăria se folosește în comun.' },
    { id: 'c', audio: 'audio/diktat-03.wav', text: 'Die Miete wird am Ersten überwiesen.', accept: ['Die Miete wird am Ersten überwiesen.', 'Die Miete wird am 1. überwiesen.'], ro: 'Chiria se virează pe data de întâi.' },
    { id: 'd', audio: 'audio/diktat-04.wav', text: 'Die Eingangstür muss nachts abgeschlossen werden.', accept: ['Die Eingangstür muss nachts abgeschlossen werden.'], ro: 'Ușa de la intrare trebuie încuiată noaptea.' },
    { id: 'e', audio: 'audio/diktat-05.wav', text: 'Das Zimmer ist letztes Jahr gestrichen worden.', accept: ['Das Zimmer ist letztes Jahr gestrichen worden.'], ro: 'Camera a fost zugrăvită anul trecut.' },
    { id: 'f', audio: 'audio/diktat-06.wav', text: 'Nach 22 Uhr muss es leise sein.', accept: ['Nach 22 Uhr muss es leise sein.', 'Nach zweiundzwanzig Uhr muss es leise sein.'], ro: 'După ora 22 trebuie să fie liniște.' },
    { id: 'g', audio: 'audio/diktat-07.wav', text: 'Der Putzplan muss eingehalten werden.', accept: ['Der Putzplan muss eingehalten werden.'], ro: 'Planul de curățenie trebuie respectat.' },
    { id: 'h', audio: 'audio/diktat-08.wav', text: 'Das lässt sich leicht machen.', accept: ['Das lässt sich leicht machen.'], ro: 'Asta se poate face ușor.' }
];

function playDiktat(event, id) {
    event.preventDefault();
    event.stopPropagation();
    const audio = document.getElementById('diktat-audio-' + id);
    if (audio) { audio.currentTime = 0; audio.play().catch(() => {}); }
}

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🎧 Diktat — ascultă și scrie propoziția (vocea Claudiei).</strong><br>
        <em>Sfat:</em> reguli de Hausordnung în Passiv — atenție la wird/muss … werden și la „worden" (NU geworden).
    </div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>
                    <button type="button" class="audio-btn" onclick="playDiktat(event, '${it.id}')" title="Ascultă" style="vertical-align:middle;">▶</button>
                    <span style="margin-left:8px;">Propoziția ${i + 1} — scrie ce auzi:</span>
                </label>
                <audio id="diktat-audio-${it.id}" preload="none"><source src="${it.audio}" type="audio/wav"></audio>
                <input type="text" id="ex5-${it.id}" placeholder="Scrie propoziția...">
                <small style="color:#5A5147">💬 ${it.ro}</small>
            </div>
            <div class="feedback" id="ex5-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const input = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        const valid = [it.text, ...(it.accept || [])].map(normalizeAnswer);
        if (valid.includes(ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.text}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.text}`;
        }
    });
    return { correct, total: ex5Data.length };
}
function resetEx5() { buildEx5(); }

document.addEventListener('DOMContentLoaded', function () {
    buildEx1();
    buildEx2();
    buildEx3();
    buildEx4();
    buildEx5();
});
