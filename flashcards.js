// ============================================
// FLASHCARDS - Wohnen & WG-Regeln (B2.1 · Lecția 3)
// 32 carduri: 8 forme Passiv + 8 Passiversatzformen/Partizip + 8 Wohn-Wortschatz + 8 Redemittel reguli
// Substantive MEREU Sg · Pl (DE + RO). Audio: WAV-uri Hedda în audio/letters/
// REGULĂ: EXACT 6 ghilimele ASCII per card — ZERO ghilimele interne!
// ============================================

const flashcardsData = [
    // ========== 8 forme Passiv ==========
    { de: "es wird gemacht (Präsens)", ro: "se face / este făcut (Passiv prezent)", audio: "audio/letters/01-wird.wav" },
    { de: "es wurde gemacht (Präteritum)", ro: "se făcea / a fost făcut (Passiv imperfect)", audio: "audio/letters/02-wurde.wav" },
    { de: "es ist gemacht worden (Perfekt)", ro: "a fost făcut (Passiv perfect — atenție: WORDEN!)", audio: "audio/letters/03-ist-worden.wav" },
    { de: "es war gemacht worden (Plusquamperfekt)", ro: "fusese făcut (Passiv mai mult ca perfect)", audio: "audio/letters/04-war-worden.wav" },
    { de: "es muss gemacht werden (Modalverb)", ro: "trebuie făcut (Passiv cu verb modal)", audio: "audio/letters/05-muss-werden.wav" },
    { de: "es kann gemacht werden (Modalverb)", ro: "poate fi făcut (Passiv cu verb modal)", audio: "audio/letters/06-kann-werden.wav" },
    { de: "von + Dativ", ro: "de către (agentul-persoană): von dem Vermieter", audio: "audio/letters/07-von.wav" },
    { de: "durch + Akkusativ", ro: "prin (mijloc/cauză): durch einen Sturm", audio: "audio/letters/08-durch.wav" },

    // ========== 8 Passiversatzformen + Partizip ==========
    { de: "man (+ Aktiv)", ro: "se (impersonal): man macht = se face", audio: "audio/letters/09-man.wav" },
    { de: "sein + zu + Infinitiv", ro: "trebuie (regulă): Die Tür ist abzuschließen", audio: "audio/letters/10-sein-zu.wav" },
    { de: "sich lassen + Infinitiv", ro: "se poate: Das lässt sich öffnen = poate fi deschis", audio: "audio/letters/11-sich-lassen.wav" },
    { de: "-bar / -lich / -abel", ro: "adjectiv de posibilitate: trinkbar (potabil), machbar (realizabil)", audio: "audio/letters/12-bar.wav" },
    { de: "worden (NU geworden!)", ro: "participiul lui werden la Passiv Perfekt (ist gemacht worden)", audio: "audio/letters/13-worden.wav" },
    { de: "das Partizip II · die Partizipien", ro: "participiul trecut (forma-cheie a Passivului) · participiile", audio: "audio/letters/14-partizip.wav" },
    { de: "abschließen → abgeschlossen", ro: "a încuia → încuiat (separabil)", audio: "audio/letters/15-abschliessen.wav" },
    { de: "streichen → gestrichen", ro: "a zugrăvi → zugrăvit (verb tare)", audio: "audio/letters/16-streichen.wav" },

    // ========== 8 Wohn-Wortschatz (Sg · Pl) ==========
    { de: "die Wohngemeinschaft (WG) · die WGs", ro: "locuința în comun · locuințele în comun", audio: "audio/letters/17-wg.wav" },
    { de: "die Hausordnung · die Hausordnungen", ro: "regulamentul casei · regulamentele", audio: "audio/letters/18-hausordnung.wav" },
    { de: "der Mietvertrag · die Mietverträge", ro: "contractul de chirie · contractele", audio: "audio/letters/19-mietvertrag.wav" },
    { de: "die Kaution · die Kautionen", ro: "garanția (depozitul) · garanțiile", audio: "audio/letters/20-kaution.wav" },
    { de: "der Vermieter · die Vermieter", ro: "proprietarul (care închiriază) · proprietarii", audio: "audio/letters/21-vermieter.wav" },
    { de: "der Nachmieter · die Nachmieter", ro: "chiriașul următor · chiriașii următori", audio: "audio/letters/22-nachmieter.wav" },
    { de: "der Umzug · die Umzüge", ro: "mutarea · mutările", audio: "audio/letters/23-umzug.wav" },
    { de: "der Putzplan · die Putzpläne", ro: "planul de curățenie · planurile de curățenie", audio: "audio/letters/24-putzplan.wav" },

    // ========== 8 Redemittel reguli WG ==========
    { de: "Der Müll wird getrennt.", ro: "Gunoiul se separă (reciclare). — regulă în Passiv", audio: "audio/letters/25-muell-getrennt.wav" },
    { de: "Die Tür ist abzuschließen.", ro: "Ușa trebuie încuiată. — sein + zu + Infinitiv", audio: "audio/letters/26-tuer-abzuschliessen.wav" },
    { de: "die Ruhezeit · die Ruhezeiten", ro: "ora de liniște · orele de liniște", audio: "audio/letters/27-ruhezeit.wav" },
    { de: "der Putzdienst · die Putzdienste", ro: "serviciul de curățenie (cine curăță) · serviciile", audio: "audio/letters/28-putzdienst.wav" },
    { de: "die Miete überweisen", ro: "a vira chiria (în cont)", audio: "audio/letters/29-miete-ueberweisen.wav" },
    { de: "sich an die Regeln halten", ro: "a respecta regulile", audio: "audio/letters/30-regeln-halten.wav" },
    { de: "Das lässt sich machen.", ro: "Se poate face. — sich lassen", audio: "audio/letters/31-laesst-sich-machen.wav" },
    { de: "Wer ist diese Woche dran?", ro: "Cine e de serviciu / la rând săptămâna asta?", audio: "audio/letters/32-wer-dran.wav" }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri pentru Lecția 3 B2.1.</strong><br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție (voce Hedda).
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const currentCard = flashcardsData[currentCardIndex];
    de.textContent = currentCard.de;
    ro.textContent = currentCard.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

let flashcardAudioEl = null;
function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (flashcardAudioEl) { flashcardAudioEl.pause(); flashcardAudioEl.currentTime = 0; }
    flashcardAudioEl = new Audio(card.audio);
    flashcardAudioEl.play().catch(err => {
        console.warn('Audio nu poate fi redat:', err);
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(card.de);
            u.lang = 'de-DE';
            u.rate = 0.85;
            window.speechSynthesis.speak(u);
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    buildFlashcards();
});
