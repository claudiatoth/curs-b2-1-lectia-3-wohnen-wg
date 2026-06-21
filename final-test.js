// ============================================
// TEST FINAL - Wohnen & WG-Regeln (B2.1 · Lecția 3)
// Claudia Toth · 15 întrebări (Passiv forme · Perfekt/worden · mit Modalverben · Ersatzformen · Traducere)
// ============================================

const finalTestData = [
    // Passiv forme (3)
    { type: 'luckentext', category: '🔧 Passiv forme', question: 'Completează (Passiv Präsens):', sentence: 'Die Küche <strong>______</strong> jeden Tag geputzt.', translation: 'Bucătăria se curăță în fiecare zi.', accept: ['wird'], correct: 'wird', explanation: 'Passiv Präsens: wird + Partizip II.' },
    { type: 'multiple', category: '🔧 Passiv forme', question: 'Cum se formează Passivul?', options: ['werden + Partizip II', 'sein + Partizip II', 'haben + Partizip II', 'werden + Infinitiv'], correct: 'werden + Partizip II', explanation: 'Passiv = werden (conjugat) + Partizip II la final.' },
    { type: 'luckentext', category: '🔧 Passiv forme', question: 'Completează (mijloc/cauză):', sentence: 'Das Dach wurde <strong>______</strong> einen Sturm zerstört.', translation: 'Acoperișul a fost distrus de o furtună.', accept: ['durch'], correct: 'durch', explanation: 'durch + Akkusativ pentru mijloc/cauză; von + Dativ pentru persoană.' },

    // Passiv Perfekt / worden (3)
    { type: 'luckentext', category: '🕰️ Perfekt / worden', question: 'Completează (participiul lui werden la Passiv):', sentence: 'Die Wohnung ist renoviert <strong>______</strong>.', translation: 'Locuința a fost renovată.', accept: ['worden'], correct: 'worden', explanation: 'La Passiv Perfekt: worden (NU geworden).' },
    { type: 'multiple', category: '🕰️ Perfekt / worden', question: 'Care e corect (Passiv Perfekt)?', options: ['Das Zimmer ist gestrichen worden.', 'Das Zimmer ist gestrichen geworden.', 'Das Zimmer hat gestrichen worden.', 'Das Zimmer ist streichen worden.'], correct: 'Das Zimmer ist gestrichen worden.', explanation: 'ist + Partizip II + worden.' },
    { type: 'luckentext', category: '🕰️ Perfekt / worden', question: 'Completează (Plusquamperfekt Passiv):', sentence: 'Der Boden war vor meinem Einzug erneuert <strong>______</strong>.', translation: 'Podeaua fusese reînnoită înainte să mă mut.', accept: ['worden'], correct: 'worden', explanation: 'Plusquamperfekt Passiv: war + Partizip II + worden.' },

    // Passiv mit Modalverben (3)
    { type: 'luckentext', category: '🛠️ mit Modalverben', question: 'Completează (Passiv cu modal):', sentence: 'Die Tür muss abgeschlossen <strong>______</strong>.', translation: 'Ușa trebuie încuiată.', accept: ['werden'], correct: 'werden', explanation: 'Modalverb + Partizip II + werden (Infinitiv la final).' },
    { type: 'multiple', category: '🛠️ mit Modalverben', question: 'Care e ordinea corectă?', options: ['Der Müll muss getrennt werden.', 'Der Müll muss werden getrennt.', 'Der Müll getrennt werden muss.', 'Der Müll wird getrennt müssen.'], correct: 'Der Müll muss getrennt werden.', explanation: 'muss (loc 2) + Partizip II (getrennt) + werden (final).' },
    { type: 'luckentext', category: '🛠️ mit Modalverben', question: 'Completează (überweisen → Partizip II):', sentence: 'Die Miete soll pünktlich <strong>______</strong> werden.', translation: 'Chiria trebuie virată la timp.', accept: ['überwiesen', 'ueberwiesen'], correct: 'überwiesen', explanation: 'überweisen e neseparabil → überwiesen (fără ge-).' },

    // Passiversatzformen (3)
    { type: 'multiple', category: '🔁 Ersatzformen', question: '„Die Tür muss abgeschlossen werden" = ?', options: ['Die Tür ist abzuschließen.', 'Die Tür ist abschließen.', 'Die Tür hat abzuschließen.', 'Die Tür wird abschließen.'], correct: 'Die Tür ist abzuschließen.', explanation: 'sein + zu + Infinitiv; la verb separabil, zu stă la mijloc → abzuschließen.' },
    { type: 'luckentext', category: '🔁 Ersatzformen', question: 'Completează (sich lassen):', sentence: 'Das Problem kann gelöst werden. → Das Problem lässt sich <strong>______</strong>.', translation: 'Problema se poate rezolva.', accept: ['lösen', 'loesen'], correct: 'lösen', explanation: 'sich lassen + Infinitiv = poate fi … .' },
    { type: 'luckentext', category: '🔁 Ersatzformen', question: 'Completează (-bar):', sentence: 'Das Wasser kann getrunken werden. → Das Wasser ist <strong>______</strong>.', translation: 'Apa se poate bea.', accept: ['trinkbar'], correct: 'trinkbar', explanation: 'Adjectiv cu -bar = posibilitate (trinkbar = potabil).' },

    // Traducere (3)
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți (Passiv Präsens):', ro: 'Gunoiul se separă.', accept: ['der müll wird getrennt', 'der muell wird getrennt'], correct: 'Der Müll wird getrennt.', explanation: 'Passiv Präsens: wird + Partizip II (getrennt).' },
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți (Passiv cu modal):', ro: 'Ușa trebuie încuiată noaptea.', accept: ['die tür muss nachts abgeschlossen werden', 'die tuer muss nachts abgeschlossen werden', 'die tür muss nachts zugeschlossen werden'], correct: 'Die Tür muss nachts abgeschlossen werden.', explanation: 'Modalverb + Partizip II + werden.' },
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți (Passiv Perfekt):', ro: 'Camera a fost zugrăvită anul trecut.', accept: ['das zimmer ist letztes jahr gestrichen worden', 'das zimmer wurde letztes jahr gestrichen'], correct: 'Das Zimmer ist letztes Jahr gestrichen worden.', explanation: 'Passiv Perfekt: ist + Partizip II + worden (sau Präteritum: wurde gestrichen).' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function normalizeTestAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți cunoștințele!</h3>
            <p>Test final cu <strong>${finalTestData.length} întrebări</strong> mixte din Lecția 3 B2.1.</p>
            <ul class="test-info-list">
                <li>🔧 Passiv forme (3) · 🕰️ Perfekt/worden (3) · 🛠️ mit Modalverben (3) · 🔁 Ersatzformen (3) · 🇷🇴 Traducere (3)</li>
                <li>✅ Feedback instant la fiecare întrebare</li>
                <li>🎓 Prag de promovare: 70%</li>
                <li>⏱️ Timp estimat: 10-15 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar"><div class="test-progress-fill" id="progress-fill"></div></div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true;
    testCompleted = false;
    currentQuestionIndex = 0;
    userAnswers = {};
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    showQuestion(0);
}

function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container');
    const feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const prevBtn = document.getElementById('test-prev-btn');
    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
    feedback.className = 'feedback';
    feedback.textContent = '';
    let questionHTML = '';
    if (q.type === 'luckentext') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content">${q.sentence}</div><small class="test-translation">💬 ${q.translation}</small><input type="text" id="test-answer" class="test-input" placeholder="Scrie răspunsul..."></div>`;
    } else if (q.type === 'multiple') {
        let optionsHTML = '';
        q.options.forEach((opt, i) => { optionsHTML += `<div class="mc-option"><input type="radio" name="test-answer" value="${opt.replace(/"/g, '&quot;')}" id="test-opt-${i}"><label for="test-opt-${i}">${opt}</label></div>`; });
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="mc-options test-mc">${optionsHTML}</div></div>`;
    } else if (q.type === 'translate') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content test-ro-text">🇷🇴 ${q.ro}</div><input type="text" id="test-answer" class="test-input" placeholder="Traducere în germană..."></div>`;
    }
    container.innerHTML = questionHTML;
    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple') {
            const radio = document.querySelector(`input[name="test-answer"][value="${userAnswers[index].answer}"]`);
            if (radio) radio.checked = true;
        } else {
            const input = document.getElementById('test-answer');
            if (input) input.value = userAnswers[index].answer;
        }
        if (userAnswers[index].checked) {
            displayFeedback(index);
            checkBtn.disabled = true;
            setAnswerDisabled(q.type, true);
        } else {
            checkBtn.disabled = false;
            setAnswerDisabled(q.type, false);
        }
    } else {
        checkBtn.disabled = false;
        setAnswerDisabled(q.type, false);
    }
}

function setAnswerDisabled(type, disabled) {
    if (type === 'multiple') {
        document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled);
    } else {
        const el = document.getElementById('test-answer');
        if (el) el.disabled = disabled;
    }
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple') {
        const selected = document.querySelector('input[name="test-answer"]:checked');
        userAnswer = selected ? selected.value : '';
    } else {
        const input = document.getElementById('test-answer');
        userAnswer = input ? input.value.trim() : '';
    }
    if (!userAnswer) {
        const feedback = document.getElementById('test-feedback');
        feedback.className = 'feedback incorrect';
        feedback.textContent = 'Te rog să răspunzi înainte de verificare!';
        return;
    }
    let isCorrect = false;
    if (q.type === 'multiple') {
        isCorrect = userAnswer.toLowerCase() === q.correct.toLowerCase();
    } else {
        const userNorm = normalizeTestAnswer(userAnswer);
        isCorrect = q.accept.some(a => normalizeTestAnswer(a) === userNorm);
    }
    userAnswers[currentQuestionIndex] = { answer: userAnswer, correct: isCorrect, checked: true };
    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true;
    setAnswerDisabled(q.type, true);
}

function displayFeedback(index) {
    const q = finalTestData[index];
    const ans = userAnswers[index];
    const feedback = document.getElementById('test-feedback');
    if (ans.correct) {
        feedback.className = 'feedback correct';
        feedback.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    } else {
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    }
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) {
        finishTest();
    } else {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function scrollToTest() {
    const wizard = document.getElementById('test-wizard');
    if (wizard) wizard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishTest() {
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => { if (userAnswers[i] && userAnswers[i].correct) correct++; });
    const total = finalTestData.length;
    const percentage = Math.round((correct / total) * 100);
    const passed = percentage >= 70;
    let emoji, message, messageRo, badge;
    if (percentage === 100) { emoji = '🏆'; badge = 'PERFEKT!'; message = 'Ausgezeichnet!'; messageRo = 'Performanță excelentă!'; }
    else if (percentage >= 90) { emoji = '⭐'; badge = 'AUSGEZEICHNET'; message = 'Sehr gut!'; messageRo = 'Foarte bine!'; }
    else if (percentage >= 80) { emoji = '🎓'; badge = 'SEHR GUT'; message = 'Sehr gute Leistung!'; messageRo = 'Performanță foarte bună!'; }
    else if (percentage >= 70) { emoji = '✅'; badge = 'BESTANDEN'; message = 'Bestanden!'; messageRo = 'Promovat! Mai exersează puțin.'; }
    else if (percentage >= 50) { emoji = '📚'; badge = 'NICHT BESTANDEN'; message = 'Wiederhole die Theorie!'; messageRo = 'Repetă teoria!'; }
    else { emoji = '💪'; badge = 'WEITER ÜBEN'; message = 'Mehr Übung nötig!'; messageRo = 'Mai exersează!'; }
    const categoryStats = {};
    finalTestData.forEach((q, i) => {
        const cat = q.category;
        if (!categoryStats[cat]) categoryStats[cat] = { correct: 0, total: 0 };
        categoryStats[cat].total++;
        if (userAnswers[i] && userAnswers[i].correct) categoryStats[cat].correct++;
    });
    let statsHTML = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const cat in categoryStats) {
        const s = categoryStats[cat];
        const catPct = Math.round((s.correct / s.total) * 100);
        statsHTML += `<li>${cat}: <strong>${s.correct}/${s.total}</strong> (${catPct}%)</li>`;
    }
    statsHTML += '</ul></div>';
    let mistakesHTML = '';
    const mistakes = [];
    finalTestData.forEach((q, i) => { if (userAnswers[i] && !userAnswers[i].correct) mistakes.push({ q, i, userAns: userAnswers[i].answer }); });
    if (mistakes.length > 0) {
        mistakesHTML = '<div class="test-mistakes"><h4>📝 Întrebările greșite:</h4>';
        mistakes.forEach(m => {
            mistakesHTML += `<div class="mistake-item"><strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br><span style="color: #991b1b;">Răspunsul tău: <em>${m.userAns}</em></span><br><span style="color: #065f46;">Corect: <strong>${m.q.correct}</strong></span><br><small style="color: #5A5147;">${m.q.explanation}</small></div>`;
        });
        mistakesHTML += '</div>';
    }
    const wizard = document.getElementById('test-wizard');
    const results = document.getElementById('test-results');
    wizard.style.display = 'none';
    results.style.display = 'block';
    results.innerHTML = `
        <div class="test-back-top"><button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button></div>
        <div class="test-result-card ${passed ? 'passed' : 'failed'}">
            <div class="test-result-emoji">${emoji}</div>
            <div class="test-result-badge">${badge}</div>
            <div class="test-result-score">${correct} / ${total}</div>
            <div class="test-result-percentage">${percentage}%</div>
            <div class="test-result-message"><p><strong>${message}</strong></p><p style="margin-top: 8px;">${messageRo}</p></div>
            ${passed ? '<div class="pass-mark">✓ Prag promovare: 70% atins!</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}
        </div>
        ${statsHTML}
        ${mistakesHTML}
        <div class="test-final-actions">
            <button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button>
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button>
        </div>
    `;
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartTest() {
    if (confirm('Sigur vrei să reiei testul?')) {
        currentQuestionIndex = 0;
        userAnswers = {};
        testCompleted = false;
        document.getElementById('test-results').style.display = 'none';
        document.getElementById('test-wizard').style.display = 'block';
        showQuestion(0);
        scrollToTest();
    }
}

function goBackToTheory() {
    const teorieContent = document.getElementById('main-section-0');
    const arrow = document.querySelectorAll('.arrow')[0];
    if (teorieContent && !teorieContent.classList.contains('active')) {
        teorieContent.classList.add('active');
        if (arrow) arrow.classList.add('rotated');
    }
    const teorieSection = document.getElementById('teorie');
    if (teorieSection) teorieSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', function () { buildFinalTest(); });
