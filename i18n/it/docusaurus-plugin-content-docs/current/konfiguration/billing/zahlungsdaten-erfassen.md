---
title: 'Registrare i dati di pagamento (QR)'
slug: '/konfiguration/billing/zahlungsdaten-erfassen'
description: 'Registrare l''IBAN e i dati del conto per la QR-fattura: struttura dell''indirizzo di fatturazione, comunicazione al beneficiario e limiti relativi ai numeri di riferimento.'
sidebar_label: 'Dati di pagamento (QR)'
naechste_schritte: [konfiguration/billing/mieterspiegel-erfassen]
---

<Menueweg>Fatturazione → Immobili & tariffe</Menueweg>

<div className="row">
<div className="col col--7">

Nello smart-me Billing è possibile attivare facoltativamente la QR-fattura.

Dopo aver registrato i dati del conto, per ogni unità di conteggio (inquilino) viene allegata una QR-fattura per il versamento.

smart-me riconosce automaticamente i mittenti compilati correttamente se l'indirizzo di fatturazione nel Billing è registrato su 3 righe. Se si indica una ditta o una formula di indirizzo, questa deve essere aggiunta prima del nome.

ad es.

```
Firma AG, Peter Lustig
Löwenzahnstrasse 42
6666 Risch
```

Se non viene riconosciuto un indirizzo corretto, il campo Mittente (Pagabile da) nella QR-fattura rimane vuoto.

smart-me non supporta i numeri di riferimento. Per poterli utilizzare è necessario un [sistema di terzi](/drittsysteme) che li supporti (ad es.[Bexio](/drittsysteme/bexio)).

Per identificare la fattura senza riferimento, sulla QR-fattura viene aggiunta un'informazione supplementare (comunicazione al beneficiario), composta come segue: nome dell'unità di conteggio (nome della cartella).

La rappresentazione è ottimizzata per l'invio via e-mail. Se le fatture vengono stampate, consigliamo di disattivare la QR-fattura e di ordinarla presso la banca.

</div>
<div className="col col--5 bild--mitte">

![Billing: conteggio dell'energia – Figura 7](/img/konfiguration-billing/07.jpg)

![Billing: conteggio dell'energia – Figura 8](/img/konfiguration-billing/08.png)

</div>
</div>
