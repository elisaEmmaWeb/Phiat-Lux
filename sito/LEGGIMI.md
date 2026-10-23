# Sito Phiat Lux – anteprima

Apri `index.html` con doppio clic (funziona anche senza server).

## Struttura
- `index.html` – homepage completa
- `servizio.html?s=<servizio>` – pagina servizio (stesso template per i 9 servizi, es. `servizio.html?s=impianti-fotovoltaici`)
- `assets/js/data.js` – **tutti i dati modificabili**: telefono, WhatsApp, email, indirizzo, immagini, testi dei 9 servizi, lavori, recensioni, comuni
- `assets/css/style.css` – grafica (colori in cima al file, nelle variabili `:root`)
- `assets/js/main.js` – animazioni e interazioni
- `assets/img/` – metti qui le foto reali

## Sostituire le immagini
Le foto attuali sono segnaposto Unsplash. Copia le foto reali in `assets/img/` e in `data.js`
sostituisci l'indirizzo, es. `fotovoltaico: "assets/img/fotovoltaico-tetto.jpg"`.
Tutte le immagini sono ritagliate automaticamente (object-fit: cover): vanno bene foto
orizzontali o verticali, consigliate almeno 1600 px di lato lungo.

## Segnaposto da sostituire con dati reali
- Telefono, WhatsApp, email, indirizzo, P.IVA
- Numeri della barra contatori (anni, impianti realizzati) in `index.html`
- Risultato del caso studio
- Lavori realizzati e recensioni (in `data.js`): le recensioni attuali sono testi di esempio
- Riferimenti normativi e incentivi: da verificare prima della pubblicazione

## Effetti dinamici
Gli effetti sono separati in `assets/css/fx.css` e `assets/js/fx.js`: per toglierli basta
eliminare le due righe che li includono in `index.html` e `servizio.html`.
Si disattivano da soli se il visitatore ha impostato "riduci movimento" nel sistema;
cursore, schede 3D e bottoni magnetici sono attivi solo con il mouse (non su telefono).
