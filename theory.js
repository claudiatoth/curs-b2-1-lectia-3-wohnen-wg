// ============================================
// TEORIE - Wohnen & WG-Regeln (B2.1 · Lecția 3)
// Claudia Toth · Passiv (toate timpurile) + Passiv mit Modalverben + Passiversatzformen
// Sursă DF: INT575-579 · recast cu castul nostru (Andreea se mută în WG, Mihai coleg) — standalone
// AUDIO: fără narațiune Hedda în teorie (texte lungi). Dialogul = vocea Claudiei (audio/dialog-01.wav).
// ============================================

const theoryHTML = `
    <!-- 0: Intro + Dialog Andreea & Mihai -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📦 1. Einzug in die WG — Mihai erklärt die Hausordnung</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„M-am mutat într-o WG (Wohngemeinschaft) — locuință în comun. Și fix când citești o <strong>Hausordnung</strong> dai peste <strong>Passiv</strong> peste tot: <em>Der Müll wird getrennt</em>, <em>Die Tür ist abzuschließen</em>. Passivul mută accentul pe <strong>acțiune</strong>, nu pe cine o face. Asta învățăm azi — și toate „trucurile" lui. 🦋"</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>🎯 Ce înveți în Lecția 3 (B2.1)</h4>
                <p>Un singur pilon mare, cu mai multe fețe — <strong>Passiv (diateza pasivă)</strong>:</p>
                <ul>
                    <li>🔧 <strong>Passiv în toate timpurile</strong>: wird/wurde/ist…worden/war…worden + Partizip II</li>
                    <li>🔧 <strong>Passiv cu verbe modale</strong>: muss/kann + Partizip II + werden</li>
                    <li>🔧 <strong>Passiversatzformen</strong>: man · sein+zu+Infinitiv · sich lassen · -bar</li>
                </ul>
            </div>

            <div class="theory-box" style="background: #ecfdf5; border-color: #10b981;">
                <h4>🔧 Ce e Passivul — pe scurt</h4>
                <p>La <strong>Aktiv</strong> contează CINE face: <em>Der Vermieter repariert das Fenster.</em></p>
                <p style="margin-top:4px;">La <strong>Passiv</strong> contează ACȚIUNEA, nu autorul: <em>Das Fenster <strong>wird repariert</strong>.</em> (Fereastra se repară / este reparată.)</p>
                <p style="margin-top:6px;">Se face cu <strong>werden + Partizip II</strong>. E foarte folosit în reguli, instrucțiuni, texte oficiale.</p>
            </div>

            <div class="theory-box" style="background:#FBF7EF;">
                <h4>🎧 Hör zu: Mihai &amp; Andreea — „Die Hausordnung"</h4>
                <div class="lesson-audio">
                    <div class="audio-player">
                        <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                        <audio id="audio-0" preload="none"><source src="audio/dialog-01.wav" type="audio/wav"></audio>
                    </div>
                    <span class="lesson-audio-label">🔊 Ascultă dialogul (vocea Claudiei)</span>
                </div>

                <div style="background:#fff7ed; border-left: 4px solid #ea580c; padding: 12px 16px; border-radius: 6px; margin: 10px 0;">
                    <p style="margin:4px 0;"><strong style="color:#9a3412;">Mihai:</strong> Willkommen in der WG, Andreea! Komm rein, ich zeig dir alles.</p>
                    <p style="margin:4px 0;"><strong style="color:#065f46;">Andreea:</strong> Danke, Mihai! Ich bin so aufgeregt. Gibt es viele Regeln?
                    </p>
                    <p style="margin:4px 0;"><strong style="color:#9a3412;">Mihai:</strong> Ein paar schon. Hier hängt die Hausordnung. Zum Beispiel: Der Müll wird jeden Dienstag rausgebracht.</p>
                    <p style="margin:4px 0;"><strong style="color:#065f46;">Andreea:</strong> Verstanden. Und wie wird geputzt?</p>
                    <p style="margin:4px 0;"><strong style="color:#9a3412;">Mihai:</strong> Es gibt einen Putzplan. Küche und Bad werden abwechselnd geputzt — diese Woche bist du dran.</p>
                    <p style="margin:4px 0;"><strong style="color:#065f46;">Andreea:</strong> Alles klar. Und die Miete?</p>
                    <p style="margin:4px 0;"><strong style="color:#9a3412;">Mihai:</strong> Die Miete und die Nebenkosten werden am Ersten überwiesen. Die Kaution hast du ja schon bezahlt.</p>
                    <p style="margin:4px 0;"><strong style="color:#065f46;">Andreea:</strong> Ja. Eine Frage noch: Gibt es Ruhezeiten?</p>
                    <p style="margin:4px 0;"><strong style="color:#9a3412;">Mihai:</strong> Klar, nach 22 Uhr muss es leise sein. Und die Eingangstür ist nachts immer abzuschließen.</p>
                    <p style="margin:4px 0;"><strong style="color:#065f46;">Andreea:</strong> Super, das lässt sich alles machen. Danke, dass du so geduldig bist!</p>
                </div>
                <details>
                    <summary style="cursor:pointer; color:#065f46; font-weight:600;">📜 Vezi traducerea (RO)</summary>
                    <div style="color:#5A5147; font-size:0.9rem; line-height:1.7; margin-top:8px;">
                        <p>— Bun venit în WG, Andreea! Intră, îți arăt tot.<br>
                        — Mulțumesc, Mihai! Sunt așa de emoționată. Sunt multe reguli?<br>
                        — Câteva, da. Aici e afișat regulamentul casei. De exemplu: gunoiul se scoate în fiecare marți.<br>
                        — Am înțeles. Și cum se face curat?<br>
                        — Avem un plan de curățenie. Bucătăria și baia se curăță pe rând — săptămâna asta ești tu de serviciu.<br>
                        — Clar. Și chiria?<br>
                        — Chiria și întreținerea se virează pe data de întâi. Garanția ai plătit-o deja.<br>
                        — Da. O ultimă întrebare: există ore de liniște?<br>
                        — Sigur, după ora 22 trebuie să fie liniște. Iar ușa de la intrare trebuie încuiată mereu noaptea.<br>
                        — Super, toate se pot face. Mulțumesc că ești atât de răbdător!</p>
                    </div>
                </details>
            </div>
        </div>
    </div>

    <!-- 1: Passiv Präsens/Präteritum -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🔧 2. Passiv — Präsens &amp; Präteritum (werden + Partizip II)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="theory-box" style="background: #ecfdf5; border-color: #10b981;">
                <h4>🔑 Regula: werden + Partizip II (la final)</h4>
                <p><strong>Präsens:</strong> wird + Partizip II · <strong>Präteritum:</strong> wurde + Partizip II</p>
                <p style="margin-top:6px; font-size:1.05rem;"><strong>Die Wohnung <span style="color:#0891b2">wird</span> jeden Tag <span style="color:#0891b2">geputzt</span>.</strong> <span style="color:#5A5147;">(Locuința se curăță în fiecare zi.)</span></p>
                <p style="margin-top:4px;"><strong>Das Zimmer <span style="color:#0891b2">wurde</span> letztes Jahr <span style="color:#0891b2">gestrichen</span>.</strong> <span style="color:#5A5147;">(Camera a fost zugrăvită anul trecut.)</span></p>
            </div>

            <div class="theory-box" style="background: #dbeafe; border-color: #D4A574;">
                <h4>🔄 Cum transformi Aktiv → Passiv</h4>
                <ul>
                    <li>Obiectul la <strong>Akkusativ</strong> din activ devine <strong>subiect</strong> în pasiv</li>
                    <li>Verbul: <strong>werden + Partizip II</strong></li>
                    <li>Subiectul activ (autorul) devine opțional: <strong>von + Dativ</strong> (persoană) sau <strong>durch + Akkusativ</strong> (mijloc/cauză)</li>
                </ul>
                <div class="example-box" style="margin-top:8px;">
                    <p class="de"><strong>Aktiv:</strong> Der Vermieter repariert das Fenster.</p>
                    <p class="de"><strong>Passiv:</strong> Das Fenster wird (<u>vom Vermieter</u>) repariert.</p>
                </div>
            </div>

            <table class="theory-table">
                <thead><tr><th>Aktiv</th><th>Passiv</th><th>RO</th></tr></thead>
                <tbody>
                    <tr><td>Man bringt den Müll raus.</td><td class="verb">Der Müll wird rausgebracht.</td><td>Gunoiul se scoate.</td></tr>
                    <tr><td>Ein Sturm zerstörte das Dach.</td><td class="verb">Das Dach wurde durch einen Sturm zerstört.</td><td>Acoperișul a fost distrus de o furtună.</td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 2: Passiv Perfekt/Plusquamperfekt -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🕰️ 3. Passiv — Perfekt &amp; Plusquamperfekt (ist … worden)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="theory-box" style="background: #ecfdf5; border-color: #10b981;">
                <h4>🔑 Regula: ist/war + Partizip II + worden</h4>
                <p><strong>Perfekt:</strong> ist + Partizip II + <strong>worden</strong> · <strong>Plusquamperfekt:</strong> war + Partizip II + worden</p>
                <p style="margin-top:6px; font-size:1.05rem;"><strong>Der Rauchmelder <span style="color:#0891b2">ist</span> letzte Woche <span style="color:#0891b2">installiert worden</span>.</strong></p>
                <p style="color:#5A5147;">(Detectorul de fum a fost instalat săptămâna trecută.)</p>
            </div>

            <div class="theory-box" style="background: #F5F0E8; border-color: #D4A574;">
                <h4>⚠️ Capcana: WORDEN, nu „geworden"!</h4>
                <p>La Passiv Perfekt, participiul lui <strong>werden</strong> e <strong>worden</strong> (fără ge-), NU „geworden":</p>
                <ul>
                    <li>✅ <em>Die Wohnung ist renoviert <strong>worden</strong>.</em></li>
                    <li>❌ <em>Die Wohnung ist renoviert geworden.</em></li>
                </ul>
                <p style="margin-top:4px;">„geworden" se folosește doar când <strong>werden</strong> e verb propriu (a deveni): <em>Er ist Arzt geworden.</em></p>
            </div>
        </div>
    </div>

    <!-- 3: Passiv mit Modalverben -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🛠️ 4. Passiv mit Modalverben (muss/kann … werden)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="theory-box" style="background: #ecfdf5; border-color: #10b981;">
                <h4>🔑 Regula: Modalverb + Partizip II + werden (Infinitiv, la final)</h4>
                <p style="margin-top:6px; font-size:1.05rem;"><strong>Die Eingangstür <span style="color:#0891b2">muss</span> nachts <span style="color:#0891b2">abgeschlossen werden</span>.</strong></p>
                <p style="color:#5A5147;">(Ușa de la intrare trebuie încuiată noaptea.)</p>
                <p style="margin-top:6px;">📐 <strong>Modalverb (loc 2) + … + Partizip II + werden (final)</strong></p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Regulă (Passiv cu modal)</th><th>RO</th></tr></thead>
                <tbody>
                    <tr><td class="verb">Der Müll muss getrennt werden.</td><td>Gunoiul trebuie separat.</td></tr>
                    <tr><td class="verb">Die Tiere können gestreichelt werden.</td><td>Animalele pot fi mângâiate.</td></tr>
                    <tr><td class="verb">Die Miete soll pünktlich überwiesen werden.</td><td>Chiria trebuie virată la timp.</td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 4: Passiversatzformen -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🔁 5. Passiversatzformen — alternative la Passiv ⭐</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="theory-box" style="background:#FBF7EF;">
                <h4>Trei moduri de a exprima Passivul fără „werden"</h4>
                <table class="theory-table">
                    <thead><tr><th>Formă</th><th>Passiv (= echivalent)</th><th>Ersatzform</th></tr></thead>
                    <tbody>
                        <tr><td><strong>man + Aktiv</strong></td><td>Der Müll wird getrennt.</td><td class="verb">Man trennt den Müll.</td></tr>
                        <tr><td><strong>sein + zu + Infinitiv</strong></td><td>Die Tür muss abgeschlossen werden.</td><td class="verb">Die Tür ist abzuschließen.</td></tr>
                        <tr><td><strong>sich lassen + Infinitiv</strong></td><td>Das Fenster kann geöffnet werden.</td><td class="verb">Das Fenster lässt sich öffnen.</td></tr>
                        <tr><td><strong>-bar / -lich / -abel</strong></td><td>Das Wasser kann getrunken werden.</td><td class="verb">Das Wasser ist trinkbar.</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="theory-box" style="background: #dbeafe; border-color: #D4A574;">
                <h4>💡 Când le folosești</h4>
                <ul>
                    <li><strong>man</strong> — cel mai simplu, în vorbire: <em>Hier darf man nicht rauchen.</em></li>
                    <li><strong>sein + zu + Infinitiv</strong> — în reguli/instrucțiuni (= trebuie/poate): <em>Die Formulare sind bis Freitag abzugeben.</em></li>
                    <li><strong>sich lassen</strong> — pentru posibilitate (= kann … werden): <em>Das Problem lässt sich lösen.</em></li>
                    <li><strong>-bar</strong> — adjectiv de posibilitate: machbar, lesbar, essbar, heilbar.</li>
                </ul>
            </div>

            <div style="background: #fff7ed; border-left: 4px solid #ea580c; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #9a3412;">Mihai:</strong> Keine Sorge, die meisten Regeln sind ganz logisch. Und alles, was kaputt ist, lässt sich reparieren. Der Vermieter ist jederzeit zu erreichen.</p>
                <p style="color: #5A5147; font-style: italic; font-size: 0.9rem;">Nicio grijă, cele mai multe reguli sunt logice. Și tot ce e stricat se poate repara. Proprietarul poate fi contactat oricând.</p>
            </div>
        </div>
    </div>

    <!-- 5: Wohn-Wortschatz + Redemittel -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🏠 6. Wohn-Wortschatz + Redemittel (pentru Schreibwerkstatt)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="theory-box" style="background:#FBF7EF;">
                <h4>🏠 Wohn-Wortschatz (Sg · Pl)</h4>
                <table class="grammar-table">
                    <tr><th>Deutsch (Sg · Pl)</th><th>Română</th></tr>
                    <tr><td class="verb">die Wohngemeinschaft (WG) · die WGs</td><td>locuința în comun · locuințele în comun</td></tr>
                    <tr><td class="verb">die Hausordnung · die Hausordnungen</td><td>regulamentul casei · regulamentele</td></tr>
                    <tr><td class="verb">der Mietvertrag · die Mietverträge</td><td>contractul de chirie · contractele</td></tr>
                    <tr><td class="verb">die Kaution · die Kautionen</td><td>garanția (depozitul) · garanțiile</td></tr>
                    <tr><td class="verb">der Vermieter · die Vermieter</td><td>proprietarul (care închiriază) · proprietarii</td></tr>
                    <tr><td class="verb">der Putzplan · die Putzpläne</td><td>planul de curățenie · planurile</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #F5F0E8; border-color: #D4A574;">
                <h4>🗣️ Redemittel — reguli & descriere (la Schreibwerkstatt)</h4>
                <ul>
                    <li><strong>Der Müll wird … getrennt / rausgebracht.</strong> (regulă în Passiv)</li>
                    <li><strong>… muss / soll … werden.</strong> (Passiv cu modal)</li>
                    <li><strong>… ist (bis …) abzugeben / abzuschließen.</strong> (sein + zu)</li>
                    <li><strong>Jeder hält sich an … · Es ist verboten / erlaubt, …</strong></li>
                </ul>
            </div>

            <div style="background: #f0fdf4; border-left: 4px solid #065f46; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #065f46;">Andreea:</strong> In unserer WG wird viel geteilt: Die Küche wird gemeinsam benutzt, der Putzplan wird eingehalten und die Miete wird pünktlich überwiesen. So funktioniert das WG-Leben!</p>
                <p style="color: #5A5147; font-style: italic; font-size: 0.9rem;">În WG-ul nostru se împart multe: bucătăria se folosește în comun, planul de curățenie se respectă și chiria se virează la timp. Așa funcționează viața în WG!</p>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('theory-container');
    if (container) {
        container.innerHTML = theoryHTML;
    }
});
