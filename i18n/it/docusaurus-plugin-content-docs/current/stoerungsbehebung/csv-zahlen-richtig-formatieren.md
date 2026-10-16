---
title: 'Formattare correttamente i numeri nei CSV'
slug: '/stoerungsbehebung/csv-zahlen-richtig-formatieren'
description: 'Apri un file CSV in Excel e i numeri...'
sidebar_label: 'Formattare correttamente i numeri nei CSV'
---
### In generale

Apri un file CSV in Excel e i numeri... sembrano rotti.

Il problema è quasi sempre la confusione globale dei separatori (ovvero la lotta tra 1.000,50, 1,000.50, 1'000.50 e 1000.50). Purtroppo Excel è un po' testardo e durante l'importazione si aspetta un formato che corrisponda esattamente alle impostazioni regionali del tuo sistema.

Poiché il nostro sistema smart-me attualmente non è ancora in grado di esportare il formato CSV perfetto per ogni singola regione, a volte è necessario un adattamento manuale in Excel.

Qui di seguito trovi due semplici soluzioni con cui puoi assicurarti che Excel visualizzi correttamente i tuoi dati.

### Modificare il CSV con Trova/Sostituisci

- Seleziona tutti i valori formattati in modo errato.

- Premi Ctrl+H


![Formattare correttamente i numeri nei CSV – Figura 1](/img/stoerungsbehebung-csv-zahlen-richtig-formatieren/01.png)

### Modificare il CSV con Trova/Sostituisci

<div className="row">
<div className="col col--4">

- Premi Ctrl+H

- Trova "." (punto)

- Sostituisci con "" (niente)

- Sostituisci tutto

- Trova "," (virgola)

- Sostituisci con "." (punto)

- Sostituisci tutto

</div>
<div className="col col--8 text--center">

![Formattare correttamente i numeri nei CSV – Figura 2](/img/stoerungsbehebung-csv-zahlen-richtig-formatieren/02.png)

</div>
</div>

### Modificare i separatori dei numeri in Excel.

- File

- Opzioni di Excel

- Impostazioni avanzate

- Deseleziona Usa separatori di sistema

    - Separatore decimale ,  (virgola)

    - Separatore delle migliaia .  (punto)


![Formattare correttamente i numeri nei CSV – Figura 3](/img/stoerungsbehebung-csv-zahlen-richtig-formatieren/03.png)
