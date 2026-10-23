/* =========================================================
   PHIAT LUX – DATI DEL SITO
   Modifica qui contatti, immagini e contenuti dei servizi.
   Le immagini sono segnaposto (Unsplash): sostituiscile con
   foto reali dei cantieri, ad es. "assets/img/fotovoltaico-1.jpg".
   ========================================================= */

const U = (id, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

window.PL_CONFIG = {
  azienda: "Phiat Lux Srl",
  referenti: [
    { nome: "Giovanni Biazzo", telefono: "334 879 5500", email: "giovannibiazzo@phiatlux.com" },
    { nome: "Daniele Caforio", telefono: "333 439 9699", email: "danielecaforio@phiatlux.com" }
  ],
  telefono: "334 879 5500",          // numero principale (pulsanti "Chiama ora")
  whatsapp: "393348795500",          // WhatsApp: formato internazionale senza +
  email: "giovannibiazzo@phiatlux.com",
  indirizzo: "Via Luigi Ronco 20, 10040 Leinì (TO)",
  citta: "Leinì (TO)",
  orari: "Lun–Ven 7:30–18:00 · Sab 7:30–12:00",
  orariDettaglio: ["Lun–Ven 7:30–18:00", "Sabato 7:30–12:00", "Domenica chiuso"]
};

window.PL_IMG = {
  elettricista: U("1621905251189-08b45d6a269e"),
  tecnico: U("1621905252507-b35492cc74b4"),
  fotovoltaico: U("1509391366360-2e959784a276"),
  fotovoltaicoCampo: U("1508514177221-188b1cf16e9d"),
  fotovoltaicoAereo: U("1497435334941-8c899ee9e8e9"),
  domotica: U("1558002038-1055907df827"),
  termostato: U("1545259741-2ea3ebf61fa3"),
  telecamere: U("1557597774-9d273605dfa9"),
  rete: U("1544197150-b99a580bb7a8"),
  elettronica: U("1558346490-a72e53ae2d4f"),
  villa: U("1613490493576-7fde63acd811"),
  casa: U("1600585154340-be6161a56a0c"),
  soggiorno: U("1600607687939-ce8a6c25118c"),
  interni: U("1600566753190-17f0baa2a6c3"),
  ufficio: U("1497366216548-37526070297c"),
  coworking: U("1527192491265-7e15c55b1ed2"),
  negozio: U("1556761175-5973dc0f32e7"),
  riunione: U("1600880292203-757bb62b4baf"),
  progetto: U("1581092160562-40aa08e78837"),
  ricarica: U("1593941707882-a5bba14938c7"),
  cantiere: U("1504307651254-35680f356dfd"),
  cantiereTeam: U("1541888946425-d81bb19240f5"),
  citta: U("1460472178825-e5240623afd5")
};

/* ---------- 9 servizi, raggruppati in 3 aree ---------- */
window.PL_AREE = [
  { id: "energia", nome: "Energia", servizi: ["impianti-elettrici", "impianti-fotovoltaici", "climatizzazione"] },
  { id: "sicurezza", nome: "Sicurezza", servizi: ["impianti-antintrusione", "videosorveglianza", "rilevazione-incendi"] },
  { id: "reti", nome: "Reti e automazioni", servizi: ["impianti-dati", "diffusione-sonora", "automazioni"] }
];

const I = PL_IMG;
window.PL_SERVIZI = {
  "impianti-elettrici": {
    nome: "Impianti elettrici", icona: "bolt", img: I.elettricista, foto: [I.tecnico, I.soggiorno, I.ricarica],
    h1: "Impianti elettrici civili e industriali a Torino",
    sintesi: "Nuovi impianti, rifacimenti e adeguamenti a norma, progettati per durare e per accogliere domotica, fotovoltaico e ricarica dell'auto.",
    cosa: ["Nuovi impianti civili e industriali", "Rifacimento completo e adeguamento a norma", "Quadri elettrici e protezioni", "Illuminazione interna, esterna e LED", "Colonnine di ricarica per veicoli elettrici", "Dichiarazione di conformità DM 37/08"],
    perchi: ["Rifacimenti di appartamenti e ville, anche con la casa abitata.", "Uffici, negozi e capannoni con quadri dimensionati sui carichi reali.", "Cantieri nuovi in collaborazione con imprese e progettisti."],
    vantaggi: [["Sicurezza certificata", "Impianto a norma con dichiarazione di conformità."], ["Pronto per il futuro", "Predisposto per domotica, fotovoltaico e wallbox."], ["Costi chiari", "Preventivo dettagliato voce per voce, senza sorprese."], ["Un solo referente", "Dal sopralluogo all'assistenza post-installazione."]],
    norme: ["DM 37/08", "CEI 64-8", "CEI 0-21"],
    faq: [["Quanto costa rifare l'impianto elettrico di un appartamento?", "Dipende da metratura, numero di punti luce e livello di dotazione. Dopo il sopralluogo ricevi un preventivo dettagliato con eventuali alternative."], ["Serve la dichiarazione di conformità?", "Sì, per ogni nuovo impianto o rifacimento rilasciamo la dichiarazione di conformità prevista dal DM 37/08."], ["Potete lavorare con la casa abitata?", "Sì, organizziamo il lavoro per zone, riducendo al minimo i disagi."]],
    correlati: ["impianti-fotovoltaici", "automazioni", "climatizzazione"]
  },
  "impianti-fotovoltaici": {
    nome: "Impianti fotovoltaici", icona: "sun", img: I.fotovoltaico, foto: [I.fotovoltaicoCampo, I.fotovoltaicoAereo, I.casa],
    h1: "Impianti fotovoltaici a Torino e in Piemonte",
    sintesi: "Fotovoltaico residenziale e aziendale, con accumulo e monitoraggio, dimensionato sui consumi reali per rientrare dell'investimento nel minor tempo possibile.",
    cosa: ["Impianti residenziali su tetto", "Impianti aziendali e su capannone", "Batterie di accumulo", "Pratiche e allaccio alla rete", "Accesso a detrazioni e incentivi", "Manutenzione e monitoraggio da app"],
    perchi: ["Famiglie che vogliono abbattere la bolletta e diventare più indipendenti.", "Aziende con consumi diurni che vogliono ridurre i costi energetici.", "Grandi coperture e comunità energetiche in tutto il Piemonte."],
    vantaggi: [["Bollette più leggere", "Autoconsumo dell'energia prodotta, giorno e sera con l'accumulo."], ["Dimensionamento reale", "Calcolato sui tuoi consumi, non sul catalogo."], ["Pratiche incluse", "Gestiamo noi allaccio, GSE e documentazione."], ["Integrazione", "Dialoga con pompa di calore, wallbox e domotica."]],
    norme: ["CEI 0-21", "DM 37/08", "Abilitazione FER"],
    faq: [["Il fotovoltaico con accumulo conviene?", "Se consumi molto la sera, l'accumulo aumenta l'autoconsumo. Valutiamo insieme i tuoi consumi prima di proporlo."], ["Quanto tempo serve per l'installazione?", "In genere pochi giorni di cantiere; i tempi di allaccio dipendono dal distributore."], ["Ci sono incentivi?", "Esistono detrazioni e incentivi che cambiano nel tempo: ti indichiamo quelli in vigore al momento del preventivo."]],
    correlati: ["climatizzazione", "impianti-elettrici", "automazioni"]
  },
  "climatizzazione": {
    nome: "Climatizzazione", icona: "wind", img: I.termostato, foto: [I.interni, I.soggiorno, I.ufficio],
    h1: "Climatizzazione e pompe di calore a Torino",
    sintesi: "Split, multisplit e pompe di calore dimensionati sul fabbisogno reale e abbinati al fotovoltaico per stare bene spendendo meno.",
    cosa: ["Climatizzatori split e multisplit", "Pompe di calore per riscaldamento", "Ventilazione e ricircolo dell'aria", "Abbinamento al fotovoltaico", "Manutenzione e libretto d'impianto", "Controllo da smartphone"],
    perchi: ["Case e appartamenti che vogliono comfort tutto l'anno.", "Uffici e negozi con esigenze di climatizzazione per zone.", "Nuove costruzioni con impianti progettati fin dall'inizio."],
    vantaggi: [["Comfort costante", "Temperatura giusta in ogni stanza."], ["Consumi ridotti", "Macchine efficienti e ben dimensionate."], ["Integrazione solare", "Usa l'energia del tuo fotovoltaico."], ["Assistenza", "Manutenzione programmata e libretto aggiornato."]],
    norme: ["Certificazione F-gas", "DPR 74/2013", "DM 37/08"],
    faq: [["Meglio pompa di calore o caldaia?", "Dipende da isolamento, superficie e presenza di fotovoltaico. Lo valutiamo nel sopralluogo."], ["Serve la manutenzione annuale?", "Sì, garantisce efficienza e durata ed è richiesta per il libretto d'impianto."], ["Si può gestire da app?", "Sì, e lo integriamo con gli scenari domotici della casa."]],
    correlati: ["impianti-fotovoltaici", "impianti-elettrici", "automazioni"]
  },
  "impianti-dati": {
    nome: "Impianti dati", icona: "network", img: I.rete, foto: [I.elettronica, I.ufficio, I.coworking],
    h1: "Reti dati e cablaggio strutturato a Torino",
    sintesi: "Reti cablate e Wi-Fi professionale per uffici, negozi e capannoni: stabili, ordinate e certificate.",
    cosa: ["Cablaggio strutturato", "Armadi rack e permutazioni", "Fibra ottica", "Wi-Fi professionale", "Certificazione delle tratte", "Riordino di reti esistenti"],
    perchi: ["Case connesse con copertura Wi-Fi completa.", "Uffici e negozi con rete affidabile per lavoro e cassa.", "Capannoni e grandi cantieri con dorsali in fibra."],
    vantaggi: [["Connessione stabile", "Niente zone morte, niente cadute."], ["Ordine e documentazione", "Ogni punto rete etichettato e certificato."], ["Scalabile", "Pronta a crescere con la tua azienda."], ["Integrata", "Base per videosorveglianza IP e domotica."]],
    norme: ["ISO/IEC 11801", "CEI EN 50173", "DM 37/08"],
    faq: [["Che differenza c'è tra cat. 6 e cat. 6A?", "La 6A supporta velocità più alte su distanze maggiori: la consigliamo per nuovi uffici."], ["Certificate le tratte?", "Sì, con strumento dedicato e report consegnato al cliente."], ["Potete migliorare il Wi-Fi di casa?", "Sì, con access point cablati e una rete progettata stanza per stanza."]],
    correlati: ["videosorveglianza", "diffusione-sonora", "impianti-elettrici"]
  },
  "impianti-antintrusione": {
    nome: "Antintrusione", icona: "shield", img: I.domotica, foto: [I.casa, I.villa, I.negozio],
    h1: "Impianti antifurto e antintrusione a Torino",
    sintesi: "Allarmi perimetrali e volumetrici controllabili da app, che proteggono senza complicare la vita quotidiana.",
    cosa: ["Allarmi perimetrali", "Sensori volumetrici", "Controllo da app", "Collegamento a vigilanza", "Nebbiogeni e sirene", "Manutenzione periodica"],
    perchi: ["Case e ville, anche con animali domestici.", "Negozi, uffici e magazzini.", "Siti produttivi e aree esterne estese."],
    vantaggi: [["Tranquillità", "Notifiche in tempo reale sullo smartphone."], ["Zero falsi allarmi", "Sensori scelti per ogni ambiente."], ["Integrato", "Dialoga con videosorveglianza e domotica."], ["Assistenza", "Interventi rapidi e manutenzione programmata."]],
    norme: ["CEI 79-3", "EN 50131", "DM 37/08"],
    faq: [["Posso attivare l'allarme dal telefono?", "Sì, con l'app inserisci, disinserisci e ricevi notifiche ovunque tu sia."], ["Funziona anche con animali in casa?", "Sì, usiamo sensori pet-immune calibrati sull'ambiente."], ["Si può collegare a un istituto di vigilanza?", "Sì, predisponiamo il collegamento con l'istituto che preferisci."]],
    correlati: ["videosorveglianza", "automazioni", "rilevazione-incendi"]
  },
  "videosorveglianza": {
    nome: "Videosorveglianza", icona: "camera", img: I.telecamere, foto: [I.negozio, I.villa, I.cantiere],
    h1: "Impianti di videosorveglianza a Torino",
    sintesi: "Telecamere IP ad alta definizione, visione da smartphone e registrazione sicura, nel rispetto della privacy.",
    cosa: ["Telecamere IP e 4K", "Visione da smartphone", "Registrazione locale e cloud", "Analisi video intelligente", "Cartelli e adempimenti privacy", "Manutenzione"],
    perchi: ["Abitazioni e condomini.", "Negozi, uffici e attività commerciali.", "Cantieri, capannoni e aree esterne."],
    vantaggi: [["Controllo ovunque", "Guardi le telecamere dal telefono."], ["Immagini nitide", "Anche di notte e in condizioni difficili."], ["Privacy in regola", "Cartelli e documentazione inclusi."], ["Integrata", "Con allarme e controllo accessi."]],
    norme: ["GDPR", "Provvedimento Garante 2010", "CEI 79-10"],
    faq: [["Posso mettere telecamere che riprendono la strada?", "Ci sono limiti precisi: ti aiutiamo a posizionarle nel rispetto della normativa privacy."], ["Per quanto tempo si conservano le registrazioni?", "Di norma pochi giorni, salvo esigenze specifiche documentate."], ["Serve internet?", "Per la visione remota sì; la registrazione funziona anche offline."]],
    correlati: ["impianti-antintrusione", "impianti-dati", "automazioni"]
  },
  "rilevazione-incendi": {
    nome: "Rilevazione incendi", icona: "flame", img: I.ufficio, foto: [I.cantiereTeam, I.coworking, I.negozio],
    h1: "Impianti di rilevazione incendi a Torino",
    sintesi: "Rilevatori, centrali ed evacuazione progettati secondo UNI 9795, con manutenzione periodica e registro.",
    cosa: ["Rilevatori di fumo e calore", "Centrali di rivelazione", "Pulsanti e segnalatori di allarme", "Sistemi di evacuazione", "Progettazione UNI 9795", "Manutenzione periodica e registro"],
    perchi: ["Abitazioni e ville che vogliono una protezione in più.", "Uffici, negozi, scuole e strutture ricettive.", "Capannoni e grandi edifici con obblighi antincendio."],
    vantaggi: [["Persone al sicuro", "Allarme tempestivo e chiaro."], ["Conformità", "Impianti a norma e documentati."], ["Manutenzione", "Controlli periodici e registro sempre aggiornato."], ["Integrazione", "Collegato a EVAC e automazioni."]],
    norme: ["UNI 9795", "UNI 11224", "DM 37/08"],
    faq: [["Ogni quanto va fatta la manutenzione?", "Di norma ogni sei mesi, con annotazione sul registro antincendio."], ["Serve per la mia attività?", "Dipende dall'attività e dalle dimensioni: lo verifichiamo con te e con il tuo tecnico."], ["Potete subentrare a un impianto esistente?", "Sì, dopo una verifica di funzionalità e documentazione."]],
    correlati: ["diffusione-sonora", "impianti-antintrusione", "impianti-elettrici"]
  },
  "diffusione-sonora": {
    nome: "Diffusione sonora", icona: "speaker", img: I.negozio, foto: [I.coworking, I.ufficio, I.interni],
    h1: "Diffusione sonora e sistemi di evacuazione (EVAC) a Torino",
    sintesi: "Musica e annunci per negozi, uffici, capannoni e scuole; sistemi EVAC per l'evacuazione in sicurezza.",
    cosa: ["Musica d'ambiente per negozi", "Annunci e chiamate per zone", "Sistemi EVAC", "Impianti per capannoni e scuole", "Audio multiroom per la casa", "Manutenzione"],
    perchi: ["Case con audio multiroom integrato.", "Negozi, ristoranti e uffici.", "Scuole, capannoni e strutture pubbliche."],
    vantaggi: [["Suono uniforme", "Copertura calibrata in ogni zona."], ["Sicurezza", "EVAC conforme per l'evacuazione."], ["Gestione semplice", "Volumi e sorgenti da app."], ["Discreto", "Diffusori integrati nell'architettura."]],
    norme: ["UNI ISO 7240-19", "EN 54-16", "DM 37/08"],
    faq: [["Cos'è un sistema EVAC?", "Un impianto audio certificato che diffonde messaggi di evacuazione in caso di emergenza."], ["Posso gestire zone diverse?", "Sì, ogni zona può avere musica e volume indipendenti."], ["I diffusori sono visibili?", "Esistono modelli a incasso quasi invisibili, ideali con l'architetto."]],
    correlati: ["rilevazione-incendi", "impianti-dati", "automazioni"]
  },
  "automazioni": {
    nome: "Automazioni", icona: "gate", img: I.domotica, foto: [I.villa, I.casa, I.termostato],
    h1: "Automazione cancelli, porte e tapparelle a Torino",
    sintesi: "Cancelli, basculanti, sbarre e tapparelle motorizzate, integrate nella domotica e gestite dallo smartphone.",
    cosa: ["Cancelli scorrevoli e a battente", "Porte basculanti e sezionali", "Sbarre per parcheggi", "Tapparelle e tende motorizzate", "Domotica e scenari", "Assistenza e riparazioni"],
    perchi: ["Case e ville con accessi comodi e sicuri.", "Condomini con cancelli carrai e pedonali.", "Aziende e parcheggi con controllo accessi."],
    vantaggi: [["Comodità", "Apri e chiudi dal telefono."], ["Sicurezza", "Dispositivi a norma e fotocellule."], ["Scenari", "Un tocco per chiudere tutta la casa."], ["Riparazioni rapide", "Interveniamo anche su impianti esistenti."]],
    norme: ["UNI EN 12453", "Direttiva Macchine", "DM 37/08"],
    faq: [["Potete motorizzare un cancello esistente?", "Sì, dopo una verifica della struttura e del movimento."], ["Si può aprire con lo smartphone?", "Sì, anche condividendo l'accesso con familiari o fornitori."], ["Fate riparazioni su altri marchi?", "Sì, interveniamo sulle principali marche di automazioni."]],
    correlati: ["impianti-antintrusione", "impianti-elettrici", "videosorveglianza"]
  }
};

/* ---------- Lavori realizzati (SEGNAPOSTO: sostituire con lavori reali) ---------- */
window.PL_LAVORI = [
  { cat: "privati", titolo: "Villa unifamiliare", luogo: "Provincia di Torino", servizi: "Fotovoltaico · Pompa di calore · Domotica", img: I.villa },
  { cat: "aziende", titolo: "Uffici direzionali", luogo: "Torino", servizi: "Impianti dati · Rilevazione incendi", img: I.ufficio },
  { cat: "grandi", titolo: "Complesso residenziale", luogo: "Piemonte", servizi: "Impianti elettrici · Videocitofonia", img: I.cantiereTeam },
  { cat: "privati", titolo: "Appartamento ristrutturato", luogo: "Leinì", servizi: "Rifacimento impianto · Domotica", img: I.soggiorno },
  { cat: "aziende", titolo: "Negozio in centro", luogo: "Torino", servizi: "Diffusione sonora · Videosorveglianza", img: I.negozio },
  { cat: "grandi", titolo: "Copertura fotovoltaica", luogo: "Provincia di Torino", servizi: "Fotovoltaico aziendale", img: I.fotovoltaicoAereo }
];

/* ---------- Recensioni Google (testi originali) ---------- */
window.PL_RECENSIONI = [
  { nome: "Chiara Guidarelli", luogo: "Recensione Google", testo: "Ho scelto Phiat Lux Srl per l'installazione del sistema di riscaldamento e raffrescamento nella mia casa e non potevo fare scelta migliore! Il team si è dimostrato professionale, preciso e puntuale in ogni fase del lavoro.\nOltre alla qualità dell'installazione, ho particolarmente apprezzato la disponibilità e l'attenzione al cliente: ogni volta che ho avuto bisogno, anche in situazioni di emergenza, sono sempre intervenuti con rapidità e competenza.\nUn servizio eccellente, che consiglio senza esitazione a chi cerca affidabilità e serietà nel settore!" },
  { nome: "Riccardo Dino", luogo: "Recensione Google", testo: "Professionisti seri, competenti e affidabili. Li chiamati per risolvere un problema causato da un precedente elettricista, e hanno dimostrato grande esperienza e precisione. Intervento rapido, lavoro impeccabile e massima serietà. Consigliati per chi cerca una ditta esperta e di fiducia!" },
  { nome: "Andrea De Nittis", luogo: "Recensione Google", testo: "Realizzazione impianto elettrico e di condizionamento per studio di riabilitazione.\nI ragazzi hanno lavorato in maniera rapida, precisa e con onestà. Consigliatissimi!" },
  { nome: "Maria Luisa Di Mauro", luogo: "Recensione Google", testo: "Ottima esperienza. Dei veri professionisti, sono seri, veloci e scrupolosi. Consiglio!!" },
  { nome: "Raffaele Calabrese", luogo: "Recensione Google", testo: "Lavoro di qualità eseguito nei tempi e con i costi concordati." },
  { nome: "Federico Sinico", luogo: "Recensione Google", testo: "Mi sono rivolto a loro qualche settimana fa per in un intervento presso il mio studio.\nHanno eseguito i lavori in modo eccellente prestando attenzione ad ogni minimo particolare.\nLa professionalità con la quale lavorano lì contraddistingue.\nUn esperienza più che positiva." },
  { nome: "Nunzio Miccoli", luogo: "Recensione Google", testo: "Veloci e professionali. Problemi risolti!" }
];

window.PL_ZONE = ["Leinì", "Torino", "Settimo Torinese", "Volpiano", "Caselle Torinese", "Borgaro Torinese", "San Mauro Torinese", "Venaria Reale", "Mappano", "Ciriè", "Chivasso", "San Benigno Canavese", "Druento", "Gassino Torinese"];
