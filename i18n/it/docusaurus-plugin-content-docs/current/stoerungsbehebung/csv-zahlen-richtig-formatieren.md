---
title: 'Formattare correttamente i numeri CSV'
slug: '/stoerungsbehebung/csv-zahlen-richtig-formatieren'
description: 'Apri un file CSV in Excel e i numeri...'
sidebar_label: 'Formattare correttamente i numeri CSV'
---
### In generale

Apri un file CSV in Excel e i numeri... sembrano danneggiati.

Il problema è quasi sempre la confusione globale nei separatori (cioè la lotta tra 1.000,50, 1,000.50, 1'000.50 e 1000.50). Excel purtroppo è piuttosto rigido e, durante l'importazione, si aspetta un formato che corrisponda esattamente alle tue impostazioni regionali di sistema.

Poiché il nostro sistema smart-me attualmente non è ancora in grado di esportare il formato CSV perfetto per ogni singola regione, a volte è necessario un adattamento manuale in Excel.

Qui di seguito trovi due semplici soluzioni per assicurarti che Excel visualizzi correttamente i tuoi dati.

### Modificare il CSV con Trova/Sostituisci

- Seleziona tutti i valori formattati in modo errato.

- Premi Ctrl+H


![Formattare correttamente i numeri CSV – Figura 1](/img/stoerungsbehebung-csv-zahlen-richtig-formatieren/01.png)

### Modificare il CSV con Trova/Sostituisci

- Premi Ctrl+H

- Cerca "." (punto)

- Sostituisci con "" (niente)

- Sostituisci tutto

- Cerca "," (virgola)

- Sostituisci con "." (punto)

- Sostituisci tutto


![Formattare correttamente i numeri CSV – Figura 2](/img/stoerungsbehebung-csv-zahlen-richtig-formatieren/02.png)

### Modificare i separatori dei numeri in Excel.

- File

- Opzioni di Excel

- Impostazioni avanzate

- Deseleziona Usa separatori di sistema

    - Separatore decimale ,  (virgola)

    - Separatore delle migliaia .  (punto)


![Formattare correttamente i numeri CSV – Figura 3](/img/stoerungsbehebung-csv-zahlen-richtig-formatieren/03.png)
