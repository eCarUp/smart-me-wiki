---
title: 'Inserire l''IBAN'
slug: '/konfiguration/billing/iban-hinterlegen'
description: 'Inserire i dati del conto per la QR-fattura: struttura dell''indirizzo di fatturazione, comunicazione al beneficiario e limiti dei numeri di riferimento.'
sidebar_label: 'Inserire l''IBAN'
naechste_schritte: [konfiguration/billing/mieterspiegel-erfassen]
---
<div className="row">
<div className="col col--7">

Nello smart-me Billing è possibile attivare la QR-fattura. Questa funzione è facoltativa.

Dopo aver inserito i dati del conto, a ogni unità di conteggio (inquilino) viene allegata una QR-fattura per il pagamento.

smart-me riconosce automaticamente i mittenti compilati correttamente se nel Billing l'indirizzo di fatturazione è inserito su 3 righe. Se si indica una ditta o un'intestazione, questa va aggiunta prima del nome.

ad es.

```
Firma AG, Peter Lustig
Löwenzahnstrasse 42
6666 Risch
```

Se non viene riconosciuto un indirizzo corretto, nella QR-fattura il campo Mittente (Pagabile da) resta vuoto.

smart-me non supporta i numeri di riferimento. Per utilizzarli occorre un [sistema di terzi](/drittsysteme) che li supporti (ad es. [bexio](/drittsysteme/bexio)).

Per identificare la fattura senza riferimento, sulla QR-fattura viene aggiunta un'informazione supplementare (comunicazione al beneficiario), composta come segue: nome dell'unità di conteggio (nome della cartella).

La presentazione è ottimizzata per l'invio via e-mail. Se le fatture vengono stampate, consigliamo di disattivare la QR-fattura e di ordinarla presso la banca.

</div>
<div className="col col--5 bild--mitte">

![Billing: conteggio dell'energia – Figura 7](/img/konfiguration-billing/07.jpg)

![Billing: conteggio dell'energia – Figura 8](/img/konfiguration-billing/08.png)

</div>
</div>
