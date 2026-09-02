---
title: 'MKD3 Messkonzept (mit nicht Teilnehmer)'
slug: '/konfiguration/billing/mieterstrom/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tarifierung des Messkonzepts MKD3 mit Nichtteilnehmern'
sidebar_label: 'MKD3 Messkonzept (nicht Teilnehmer)'
---
![MKD3 Messkonzept (mit nicht Teilnehmer) – Abbildung 1](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/01.png)

## Tarifierung des Messkonzepts MKD3 mit Nichtteilnehmern

Die Tarifierung des Messkonzepts erfolgt ausschliesslich über Produktion und den Teilnehmern am Mieterstrom

### Tarifierung mit Solartarif inkl. vZEV

Der Bilanzzähler wird für die Tarifierungsberechnung ignoriert, er wird später nur zur Verifizierung betrachtet.

Bei der Nutzung des Solartarif inkl. vZEV werden keine zusätzlichen Lizenzen für virtuelle Zähler fällig.

Bilanzzähler

Alle Teilnehmenden Wohnungen / Parkplätze und Produktionen als Bilanzzähler.

![MKD3 Messkonzept (mit nicht Teilnehmer) – Abbildung 2](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/02.png)

Produktionszähler

Alle Produktionszähler als Produktion erfassen


![MKD3 Messkonzept (mit nicht Teilnehmer) – Abbildung 3](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/03.png)

### Tarifierung mittels Solartarif (Verbrauch / PV) mit oder ohne Batterietarif (Verbrauch / Batterie)

Der Bilanzzähler wird für die Tarifierungsberechnung ignoriert, er wird später nur zur Verifizierung betrachtet.

Bei der Nutzung des Solartarif /verbrauch /PV) werden zusätzliche Lizenzen für virtuellen Zähler fällig.

Der Gesamtvebrauch wird mindestens benötigt. Dieser wird als virtueller Zähler erstellt bestehend aus allen Teilnehmenden Abgängen des Mieterstroms.

Gesamtverbrauch = Wohnung 1.1 + Wohnung 1.2 + Allgemein + Parkplatz 1 + Parkplatz 2 + Wärmepumpe

Es wird jeweils unter Produktion der Solaranlagenzähler bzw. Batteriezähler beim Batterietarif hinzugefügt.

Beim Gesamtverbrauch wird der virtuell erstellte Gesamtverbrauch hinterlegt.

Der Bilanzzähler wird bewusst nicht referenziert um die virtuelle Bilanzierung nicht flasch zu korrigieren!

![MKD3 Messkonzept (mit nicht Teilnehmer) – Abbildung 4](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/04.png)

## Bilanzierung und Validierung des MKD3

![MKD3 Messkonzept (mit nicht Teilnehmer) – Abbildung 5](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Bilanzierung

Die Menge des verkauften Netzstromes entspricht nicht dem Wert der Rechnung des Energieversorgers und die Rückspeisemenge entspricht nicht dem vom Bilanzzähler erfassten Wert.

Beim MKD3 erfolgt die Vergütung für Nichtteilnehmer periodisch einmalig in der Abrechnungsperiode.

Begründung zur Abweichung

Die Berechnung und Verteilung im smart-me berechnet den Bezug und Verbrauch der Teilnehmer im 15-Minuten Intervall. Dadurch wird eindeutig identifiziert wer, wann aus welcher Quelle Strom bezieht und wie viel.

Beispiel:

Wenn zu einem Zeitpunkt X in 15-Minuten 100 kWh Solarstrom produziert werden und die Mieterstrommitglieder zusammen 0 kWh beziehen, während der Nichtteilnehmer 100 kWh beziehen, wird zu diesem Zeitpunkt im von Mieterstrommitgliedern kein Solarstrom bezogen.

Die virtuelle Bilanz des Mieterstroms berechnet nun folgerichtig 0 kWh Bezug, 100 kWh Überschuss.
Der physische Bilanzzähler misst hingegen 0 kWh Bezug, 0 kWh Überschuss weil die Nichtteilnehmer die ganze Produktion direkt verbraucht hat.

Die Kompensationsrechnung der Energieversorger folgt folgender Regel:

Mieterstrombilanz Import kompensiert = Bilanzzähler Importwert - Bezug Import der Nichtteilnehmer
\--> Wenn  der Import durch die Kompensation &lt; 0 wird, wird der Rest des Abzuges auf den Export der Bilanz addiert.

Das würde hier also so aussehen für diese 15-Minuten:
Bilanz Import kompensiert = Bilanzwert 0 kWh - Bezug Nichtteilnehmer 100 kWh --> Bezug 0 kWh (Delta 100 kWh Rest)

Bilanz Export kompensiert = 0 kWh + 100 kWh = 100 kWh

Da die Kompensation je nach dem nicht 15-Minütig sondern Periodisch einmalig geschieht, ergibt dies unterschiedliche Werte für die Validierung!

### Validierung

Wenn 15-Minuten Kompensation seitens Energieversorger geschieht:

Geschieht diese Kompensation seitens Energieversorger auf 15-Minuten Basis, so ist das Ergebnis der virtuellen Bilanzierung von smart-me gleich der Bilanzierung des Energieversorgers.

Validierung

- Verrechneter Gesamtnetzstrom Wert = Summe Verkauftem Netzstromwert im Mieterstrom

- Summe Intern verkaufter Solarstrom = Produktion - Einspeisemenge (Rechnung Energieversorger)




Wenn die Kompensation 1x pro Periode seitens Energieversorger geschieht:

Wird die Kompensation vom Energieversorger einmalig z.B.  Pro Monat gemacht, so entstehen gröbere Diskrepanzen zwischen den Energieversorgerwerten zu den von uns verkauften Energiemengen. Die Validierung ist nun etwas gewöhnungsbedürftiger.

Begründung:

Wird die Kompensation einmalig pro Monat gemacht mit dem Gesamtbezug der Nichtteilnehmer, findet keine Berücksichtigung statt ob und wie viel die Nichtteilnehmer eigentlich vom lokalen Produzenten beliefert wurden und sich dadurch die virtuelle Bilanz veränderte.

Parallel dazu berechnet das System für die Mieterstromteilnehmer folgerichtig der rechtzeitigen Nutzung und Verfügbarkeit der Produktion den effektiv bezogenen Wert aus den Quellen. (Berücksichtigt ob von der aktuellen Produktion tatsächlich Strom von Mieterstromteilnehmern abgenommen wurde oder ob eigentlich Netzstrom bezogen wurde für die Deckung)

Da hier zwei Welten aufeinander prallen (zeitlich) ergibt sich niemals das gleiche Resultat um den einfachen Abgleich zu ermöglichen.

Erkenntnis

Wenn die Kompensation 1x pro Monat stattfindet, so wird der komplette Verbrauch der Nichtteilnehmer als Netzstrom vergütet.
\--> Das ist grundsätzlich förderlich für den Mieterstromanbieter. (Es erfolgt zwangsweise eine Überkompensation seitens Energieversorger)

Beispiel für eine 1-Monatige Kompensation:

Bilanz Import Messung = 100 KWh

Bilanz Export Messung = 50 kWh

Nichteilnehmer Bezug Total = 100 kWh

Mieterstrom Teilnehmer Bezug Total = 100 kWh

Produktion = 250 kWh

In diesem Beispiel wird nun der Gesamtbezug der Nichtteilnehmer von der Bilanzmessung abgezogen:

Netzbezug verrechnet vom Energieversorger = Bilanz Import 100 kWh - Nichtteilnehmer Bezug Total 100 kWh = Bezug 0kWh

In diesem Fall wird uns kein Netzstrom für den Mieterstrom in Rechnung gestellt, obwohl die Teilnehmer des Mieterstroms definitiv über den Monat Netzstrombezug aufweisen würden (z.B Strombezug bei Nacht).

Der Netzstrom wird also in diesem Fall immer überkompensiert.
Der Bilanzexport hingegen wird dafür nicht korrekt angepasst und ist dem zu Folge immer zu Tief.

Wir erhalten anstelle Einspeisevergütung für die Menge, den Netzstromtarif als Rabatt.

Validierung

- Der Verrechnete Netzbezug des Energieversorgers ist immer kleiner als die von uns Verrechnete Netzstrom Menge. (Zusätzliche Einnahmen)

- Die Einspeisemenge des Energieversorgers entspricht der Menge des physischen Bilanzzähler Exportwertes und ist kleiner als die Berechnete Menge der virtuellen Bilanz. (Verlust durch nicht Vergütung)

- Die Menge des vergüteten Einspeisemenge und der vom Energieversorger dokumentierten Menge für den Mieterstromzuschlag entspricht der Gesamten Produktionsmenge.


\--> Die Überkompensierung ist in jedem Fall Gewinnbringend für den Mieterstrombetreiber.
