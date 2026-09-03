---
title: 'Formattare correttamente i numeri nei file CSV'
slug: '/stoerungsbehebung/csv-zahlen-richtig-formatieren'
description: 'Apri un file CSV in Excel e i numeri...'
sidebar_label: 'Formattare correttamente i numeri nei CSV'
---
### In generale

Apri un file CSV in Excel e i numeri... sembrano rovinati.

Il problema è quasi sempre la confusione globale dei separatori (ossia il conflitto tra 1.000,50, 1,000.50, 1'000.50 e 1000.50). Excel purtroppo è piuttosto rigido e all'importazione si aspetta un formato che corrisponda esattamente alle impostazioni regionali del tuo sistema.

Poiché il nostro sistema smart-me attualmente non è ancora in grado di esportare il formato CSV perfetto per ogni singola regione, a volte è necessario un adattamento manuale in Excel.

Di seguito trovi due semplici soluzioni per assicurarti che Excel visualizzi correttamente i tuoi dati.

### Modificare il CSV con Trova/Sostituisci

- Selezionare tutti i valori formattati in modo errato.

- Premere Ctrl+H


![Formattare correttamente i numeri nei file CSV – Figura 1](/img/stoerungsbehebung-csv-zahlen-richtig-formatieren/01.png)

### Modificare il CSV con Trova/Sostituisci

- Premere Ctrl+H

- Cercare "." (punto)

- Sostituire con "" (niente)

- Sostituisci tutto

- Cercare "," (virgola)

- Sostituire con "." (punto)

- Sostituisci tutto


![Formattare correttamente i numeri nei file CSV – Figura 2](/img/stoerungsbehebung-csv-zahlen-richtig-formatieren/02.png)

### Modificare i separatori dei numeri in Excel.

- File (Datei)

- Opzioni di Excel (Excel Optionen)

- Avanzate (Erweitert)

- Deselezionare Utilizza separatori di sistema (Trennzeichen vom Betriebssystem übernehmen)

    - Separatore decimale ,  (virgola)

    - Separatore delle migliaia .  (punto)


![Formattare correttamente i numeri nei file CSV – Figura 3](/img/stoerungsbehebung-csv-zahlen-richtig-formatieren/03.png)
