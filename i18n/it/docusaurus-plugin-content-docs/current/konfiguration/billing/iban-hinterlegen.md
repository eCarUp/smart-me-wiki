---
title: 'Inserire l''IBAN'
slug: '/konfiguration/billing/iban-hinterlegen'
description: 'Inserire i dati bancari per la fattura QR: struttura dell''indirizzo di fatturazione, comunicazione al beneficiario e limiti relativi ai numeri di riferimento.'
sidebar_label: 'Inserire l''IBAN'
naechste_schritte: [konfiguration/billing/mieterspiegel-erfassen]
---
<div className="row">
<div className="col col--7">

Nello smart-me Billing è possibile attivare facoltativamente la fattura QR.

Dopo aver inserito i dati bancari, a ogni unità di conteggio (inquilino) viene allegata una fattura QR per il pagamento.

smart-me riconosce automaticamente i mittenti compilati correttamente se l'indirizzo di fatturazione nel Billing è inserito su 3 righe. Se si sceglie una ditta o un appellativo, questo deve essere aggiunto prima del nome.

ad es.

```
Firma AG, Peter Lustig
Löwenzahnstrasse 42
6666 Risch
```

Se non viene riconosciuto un indirizzo corretto, il campo Mittente (Pagabile da) nella fattura QR rimane vuoto.

smart-me non supporta i numeri di riferimento. Per poterli utilizzare è necessario un [sistema di terzi](/drittsysteme) che li supporti (ad es. [bexio](/drittsysteme/bexio)).

Per identificare la fattura senza riferimento, sulla fattura QR viene aggiunta un'informazione supplementare (comunicazione al beneficiario), composta come segue: nome dell'unità di conteggio (nome della cartella).

La rappresentazione è ottimizzata per l'invio via e-mail. Se le fatture vengono stampate, consigliamo di disattivare la fattura QR e di ordinarla presso la banca.

</div>
<div className="col col--5 bild--mitte">

![Billing: conteggio dell'energia – Figura 7](/img/konfiguration-billing/07.jpg)

![Billing: conteggio dell'energia – Figura 8](/img/konfiguration-billing/08.png)

</div>
</div>
