// ============================================
// VERB-KONJUGATION - Wohnen & WG-Regeln (B2.1 · Lecția 3)
// 10 verbe-cheie ale Passivului: werden (auxiliarul) + machen, putzen, streichen, abschließen, reparieren, überweisen, bringen, wechseln, trennen
// Fiecare card are o LINIE NOUĂ „🔧 Passiv" — steaua lecției (wird/wurde/ist…worden + Partizip II).
// Badge: tare (rosu) · auxiliar (mov) · modal (cyan) · regulat (verde). Präteritum = IMPERFECT.
// REGULĂ: NU ghilimele/apostrofuri ASCII interne care rup string-urile single-quote!
// ============================================

const verbsData = [
    {
        inf: 'werden', ro: 'a deveni / (auxiliarul Passivului)', typ: 'auxiliar / neregulat', aux: 'sein', part: 'geworden',
        passiv: 'AUXILIARUL Passivului: wird · wurde · ist … worden', passivnote: 'Etwas wird gemacht · wurde gemacht · ist gemacht worden. La Passiv, participiul lui werden e WORDEN (NU geworden!).',
        praes: [['ich','werde','devin'],['du','wirst','devii'],['er/sie/es','wird','devine'],['wir','werden','devenim'],['ihr','werdet','deveniți'],['sie/Sie','werden','devin']],
        praet: [['ich','wurde','deveneam'],['du','wurdest','deveneai'],['er/sie/es','wurde','devenea'],['wir','wurden','deveneam (noi)'],['ihr','wurdet','deveneați'],['sie/Sie','wurden','deveneau']],
        perf: [['ich','bin geworden','am devenit'],['du','bist geworden','ai devenit'],['er/sie/es','ist geworden','a devenit'],['wir','sind geworden','am devenit'],['ihr','seid geworden','ați devenit'],['sie/Sie','sind geworden','au devenit']],
        note: 'Cheia întregii lecții: werden + Partizip II = Passiv. Präsens wird, Präteritum wurde, Perfekt ist … worden. Ca verb propriu (a deveni) participiul e geworden.'
    },
    {
        inf: 'machen', ro: 'a face', typ: 'regulat', aux: 'haben', part: 'gemacht',
        passiv: 'wird gemacht · wurde gemacht · ist gemacht worden', passivnote: 'Der Putzplan wird jede Woche gemacht.',
        praes: [['ich','mache','fac'],['du','machst','faci'],['er/sie/es','macht','face'],['wir','machen','facem'],['ihr','macht','faceți'],['sie/Sie','machen','fac']],
        praet: [['ich','machte','făceam'],['du','machtest','făceai'],['er/sie/es','machte','făcea'],['wir','machten','făceam (noi)'],['ihr','machtet','făceați'],['sie/Sie','machten','făceau']],
        perf: [['ich','habe gemacht','am făcut'],['du','hast gemacht','ai făcut'],['er/sie/es','hat gemacht','a făcut'],['wir','haben gemacht','am făcut'],['ihr','habt gemacht','ați făcut'],['sie/Sie','haben gemacht','au făcut']],
        note: 'REGULAT (model): ge- + radical + -t → gemacht. Partizipul e identic cu cel folosit la Passiv.'
    },
    {
        inf: 'putzen', ro: 'a curăța / a face curat', typ: 'regulat', aux: 'haben', part: 'geputzt',
        passiv: 'wird geputzt · ist geputzt worden', passivnote: 'Die Küche wird jeden Tag geputzt.',
        praes: [['ich','putze','curăț'],['du','putzt','cureți'],['er/sie/es','putzt','curăță'],['wir','putzen','curățăm'],['ihr','putzt','curățați'],['sie/Sie','putzen','curăță']],
        praet: [['ich','putzte','curățam'],['du','putztest','curățai'],['er/sie/es','putzte','curăța'],['wir','putzten','curățam (noi)'],['ihr','putztet','curățați'],['sie/Sie','putzten','curățau']],
        perf: [['ich','habe geputzt','am curățat'],['du','hast geputzt','ai curățat'],['er/sie/es','hat geputzt','a curățat'],['wir','haben geputzt','am curățat'],['ihr','habt geputzt','ați curățat'],['sie/Sie','haben geputzt','au curățat']],
        note: 'REGULAT. Radicalul se termină în -z → du putzt (nu putzst).'
    },
    {
        inf: 'streichen', ro: 'a zugrăvi / a vopsi', typ: 'tare / neregulat', aux: 'haben', part: 'gestrichen',
        passiv: 'wird gestrichen · wurde gestrichen · ist gestrichen worden', passivnote: 'Das Zimmer wurde vor zwei Jahren gestrichen.',
        praes: [['ich','streiche','zugrăvesc'],['du','streichst','zugrăvești'],['er/sie/es','streicht','zugrăvește'],['wir','streichen','zugrăvim'],['ihr','streicht','zugrăviți'],['sie/Sie','streichen','zugrăvesc']],
        praet: [['ich','strich','zugrăveam'],['du','strichst','zugrăveai'],['er/sie/es','strich','zugrăvea'],['wir','strichen','zugrăveam (noi)'],['ihr','stricht','zugrăveați'],['sie/Sie','strichen','zugrăveau']],
        perf: [['ich','habe gestrichen','am zugrăvit'],['du','hast gestrichen','ai zugrăvit'],['er/sie/es','hat gestrichen','a zugrăvit'],['wir','haben gestrichen','am zugrăvit'],['ihr','habt gestrichen','ați zugrăvit'],['sie/Sie','haben gestrichen','au zugrăvit']],
        note: 'TARE: strich · gestrichen. Tipic în context de Wohnen (Wände streichen).'
    },
    {
        inf: 'abschließen', ro: 'a încuia', typ: 'tare / neregulat (separabil)', aux: 'haben', part: 'abgeschlossen',
        passiv: 'wird abgeschlossen · muss abgeschlossen werden', passivnote: 'Die Eingangstür muss immer abgeschlossen werden. (Ersatzform: ist abzuschließen)',
        praes: [['ich','schließe ab','încui'],['du','schließt ab','încui'],['er/sie/es','schließt ab','încuie'],['wir','schließen ab','încuiem'],['ihr','schließt ab','încuiați'],['sie/Sie','schließen ab','încuie']],
        praet: [['ich','schloss ab','încuiam'],['du','schlossest ab','încuiai'],['er/sie/es','schloss ab','încuia'],['wir','schlossen ab','încuiam (noi)'],['ihr','schlosst ab','încuiați'],['sie/Sie','schlossen ab','încuiau']],
        perf: [['ich','habe abgeschlossen','am încuiat'],['du','hast abgeschlossen','ai încuiat'],['er/sie/es','hat abgeschlossen','a încuiat'],['wir','haben abgeschlossen','am încuiat'],['ihr','habt abgeschlossen','ați încuiat'],['sie/Sie','haben abgeschlossen','au încuiat']],
        note: 'TARE + SEPARABIL: ge- la mijloc → ab-ge-schlossen. La Passiv: wird abgeschlossen.'
    },
    {
        inf: 'reparieren', ro: 'a repara', typ: 'regulat', aux: 'haben', part: 'repariert',
        passiv: 'wird repariert · ist repariert worden', passivnote: 'Der Fensterrahmen wird vom Vermieter repariert.',
        praes: [['ich','repariere','repar'],['du','reparierst','repari'],['er/sie/es','repariert','repară'],['wir','reparieren','reparăm'],['ihr','repariert','reparați'],['sie/Sie','reparieren','repară']],
        praet: [['ich','reparierte','reparam'],['du','repariertest','reparai'],['er/sie/es','reparierte','repara'],['wir','reparierten','reparam (noi)'],['ihr','repariertet','reparați'],['sie/Sie','reparierten','reparau']],
        perf: [['ich','habe repariert','am reparat'],['du','hast repariert','ai reparat'],['er/sie/es','hat repariert','a reparat'],['wir','haben repariert','am reparat'],['ihr','habt repariert','ați reparat'],['sie/Sie','haben repariert','au reparat']],
        note: 'Verb pe -ieren → participiul FĂRĂ ge-: repariert. La fel installieren, renovieren, montieren.'
    },
    {
        inf: 'überweisen', ro: 'a vira (bani)', typ: 'tare / neregulat (neseparabil)', aux: 'haben', part: 'überwiesen',
        passiv: 'wird überwiesen · ist überwiesen worden', passivnote: 'Die Miete wird am Monatsanfang überwiesen.',
        praes: [['ich','überweise','virez'],['du','überweist','virezi'],['er/sie/es','überweist','virează'],['wir','überweisen','virăm'],['ihr','überweist','virați'],['sie/Sie','überweisen','virează']],
        praet: [['ich','überwies','viram'],['du','überwiesest','virai'],['er/sie/es','überwies','vira'],['wir','überwiesen','viram (noi)'],['ihr','überwiest','virați'],['sie/Sie','überwiesen','virau']],
        perf: [['ich','habe überwiesen','am virat'],['du','hast überwiesen','ai virat'],['er/sie/es','hat überwiesen','a virat'],['wir','haben überwiesen','am virat'],['ihr','habt überwiesen','ați virat'],['sie/Sie','haben überwiesen','au virat']],
        note: 'TARE + prefix NESEPARABIL über- → participiul FĂRĂ ge-: überwiesen. Die Kaution wird überwiesen.'
    },
    {
        inf: 'bringen', ro: 'a aduce / a duce', typ: 'tare / neregulat (Mischverb)', aux: 'haben', part: 'gebracht',
        passiv: 'wird gebracht · ist gebracht worden', passivnote: 'Der Müll wird dienstags rausgebracht.',
        praes: [['ich','bringe','aduc'],['du','bringst','aduci'],['er/sie/es','bringt','aduce'],['wir','bringen','aducem'],['ihr','bringt','aduceți'],['sie/Sie','bringen','aduc']],
        praet: [['ich','brachte','aduceam'],['du','brachtest','aduceai'],['er/sie/es','brachte','aducea'],['wir','brachten','aduceam (noi)'],['ihr','brachtet','aduceați'],['sie/Sie','brachten','aduceau']],
        perf: [['ich','habe gebracht','am adus'],['du','hast gebracht','ai adus'],['er/sie/es','hat gebracht','a adus'],['wir','haben gebracht','am adus'],['ihr','habt gebracht','ați adus'],['sie/Sie','haben gebracht','au adus']],
        note: 'MISCHVERB (radical schimbat bring → brach + -te): brachte · gebracht. La fel rausbringen (separabil): rausgebracht.'
    },
    {
        inf: 'wechseln', ro: 'a schimba / a înlocui', typ: 'regulat', aux: 'haben', part: 'gewechselt',
        passiv: 'wird gewechselt · ist gewechselt worden', passivnote: 'Die Batterien des Rauchmelders werden regelmäßig gewechselt.',
        praes: [['ich','wechsle','schimb'],['du','wechselst','schimbi'],['er/sie/es','wechselt','schimbă'],['wir','wechseln','schimbăm'],['ihr','wechselt','schimbați'],['sie/Sie','wechseln','schimbă']],
        praet: [['ich','wechselte','schimbam'],['du','wechseltest','schimbai'],['er/sie/es','wechselte','schimba'],['wir','wechselten','schimbam (noi)'],['ihr','wechseltet','schimbați'],['sie/Sie','wechselten','schimbau']],
        perf: [['ich','habe gewechselt','am schimbat'],['du','hast gewechselt','ai schimbat'],['er/sie/es','hat gewechselt','a schimbat'],['wir','haben gewechselt','am schimbat'],['ihr','habt gewechselt','ați schimbat'],['sie/Sie','haben gewechselt','au schimbat']],
        note: 'REGULAT pe -eln → la „ich" cade un e: ich wechsle. Participiu gewechselt.'
    },
    {
        inf: 'trennen', ro: 'a separa / a despărți', typ: 'regulat', aux: 'haben', part: 'getrennt',
        passiv: 'wird getrennt · ist getrennt worden', passivnote: 'In Deutschland wird der Müll streng getrennt.',
        praes: [['ich','trenne','separ'],['du','trennst','separi'],['er/sie/es','trennt','separă'],['wir','trennen','separăm'],['ihr','trennt','separați'],['sie/Sie','trennen','separă']],
        praet: [['ich','trennte','separam'],['du','trenntest','separai'],['er/sie/es','trennte','separa'],['wir','trennten','separam (noi)'],['ihr','trenntet','separați'],['sie/Sie','trennten','separau']],
        perf: [['ich','habe getrennt','am separat'],['du','hast getrennt','ai separat'],['er/sie/es','hat getrennt','a separat'],['wir','haben getrennt','am separat'],['ihr','habt getrennt','ați separat'],['sie/Sie','haben getrennt','au separat']],
        note: 'REGULAT: getrennt. Müll trennen = a separa gunoiul (reciclare) — temă tipică de WG.'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#5A5147;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> er <strong>' + v.perf[2][1] + '</strong> · <em style="color:#5A5147;">' + v.perf[2][2] + '</em></p></div>';
}

function passivBox(v) {
    if (!v.passiv) return '';
    return '<div class="theory-box" style="margin:8px 0; background:#cffafe; border-color:#0891b2;">' +
        '<h4>🔧 Passiv (werden + Partizip II)</h4>' +
        '<p style="margin:0;"><strong>' + v.passiv + '</strong>' + (v.passivnote ? '<br><small style="color:#5A5147;">' + v.passivnote + '</small>' : '') + '</p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe-cheie ale Passivului</strong> — Präsens + Präteritum + Perfekt + <strong>🔧 Passiv</strong> (wird/wurde/ist…worden + Partizip II).<br>' +
        'Click pe un verb ca să-i vezi conjugarea. Caseta cyan 🔧 = inima lecției.' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Caseta cyan 🔧 e ce contează azi. Passivul = werden + Partizip II. Tot secretul e participiul: regulat (gemacht), tare (gestrichen), pe -ieren fără ge- (repariert), neseparabil fără ge- (überwiesen). Și nu uita: la Passiv Perfekt e WORDEN, nu geworden! 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : (v.typ.indexOf('aux') === 0 ? '#7c3aed' : (v.typ.indexOf('modal') === 0 ? '#0891b2' : '#047857'));
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            passivBox(v) +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#F5F0E8;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });
    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
