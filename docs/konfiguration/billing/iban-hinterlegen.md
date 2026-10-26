---
title: 'IBAN hinterlegen'
slug: '/konfiguration/billing/iban-hinterlegen'
description: 'Kontodaten für die QR-Rechnung hinterlegen: Aufbau der Rechnungsadresse, Mitteilung an den Begünstigten und Grenzen bei Referenznummern.'
sidebar_label: 'IBAN hinterlegen'
naechste_schritte: [konfiguration/billing/mieterspiegel-erfassen]
---
<div className="row">
<div className="col col--7">

Im smart-me Billing kann optional die QR-Rechnung aktiviert werden.

Nach dem Hinterlegung der Kontodaten wird für jede Abrechnungseinheit (Mieter) eine QR-Rechnung für die Einzahlung angehängt.

smart-me erkennt die korrekt ausgefüllten Absender automatisch, wenn die Rechnungsadresse im Billing auf 3 Zeilen hinterlegt ist. Wenn eine Firma oder eine Anschrift gewählt wird, muss diese vor dem Namen hinzugefügt werden.

z.B.

```
Firma AG, Peter Lustig
Löwenzahnstrasse 42
6666 Risch
```

Wird keine korrekte Adresse erkannt, bleibt das Feld Absender (Zahlbar durch) in der QR-Rechnung leer.

smart-me unterstützt keine Referenznummern. Um diese nutzen zu können, wird ein [Drittystem](/drittsysteme) benötigt welches dies auch unterstützt (z.B.[Bexio](/drittsysteme/bexio)).

Um die Rechnung ohne Referenz zu identifizieren, wird eine Zusätzliche Information (Mitteilung an den Begünstigten) auf der QR-Rechnung angefügt, welche sich wie folgt zusammensetzt: Name der Abrechnungseinheit (Ordnername).

Die Darstellung ist für den Versand per E-Mail optimiert. Falls die Rechnungen ausgedruckt werden, empfehlen wir, die QR-Rechnung zu deaktivieren und diese bei der Bank zu bestellen.

</div>
<div className="col col--5 bild--mitte">

![Billing: Energie abrechnen – Abbildung 7](/img/konfiguration-billing/07.jpg)

![Billing: Energie abrechnen – Abbildung 8](/img/konfiguration-billing/08.png)

</div>
</div>
