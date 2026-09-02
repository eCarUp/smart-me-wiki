---
title: 'Billing Problembehebung'
slug: '/stoerungsbehebung/billing-fehlermeldungen'
description: 'In diesem Abschnitt werden die Fehlermeldungen im Billing methodisch behandelt.'
sidebar_label: 'Billing Fehlermeldungen'
---
In diesem Abschnitt werden die Fehlermeldungen im Billing methodisch behandelt.

## Allgemein

Die Konfiguration des smart-me Billings ist hier beschrieben: [Billing](/konfiguration/billing) 

Im smart-me Billing werden an zwei Orten Fehlermeldungen angezeigt:

- Beim berechnen der virtuellen Tarife (sofern konfiguriert)

- Beim erstellen von Rechnungen


Berechnung der virtuellen Tarifen

Wo finde ich die Fehlermeldungen bei der Berechnung der virtuellen Tarife.
Login im Portal :
Rechnungsstellung --> Konfiguration --> Liegenschaft editieren --> Virtuelle Tarife --> Blauer Kasten

![Billing Problembehebung – Abbildung 1](/img/stoerungsbehebung-billing-fehlermeldungen/01.png)

Erstellte Rechnungen

Wo finde ich die Fehlermeldungen und Warnungen beim Erstellen von Rechnungen.
Login im Portal :
Rechnungsstellung  --> Konfiguration --> Liegenschaft editieren --> Rechnungen --> Rechnungen --> Oranges Feld mit Warnungen
(Erschiennt nur wenn ein Fehler vorliegt)

![Billing Problembehebung – Abbildung 2](/img/stoerungsbehebung-billing-fehlermeldungen/02.png)

## Liste mit Fehlermeldungen

## Fehler beim Berechnung der virtuellen Tarifen

![Billing Problembehebung – Abbildung 3](/img/stoerungsbehebung-billing-fehlermeldungen/03.png)

### Berechnung startet bald ...

Diese Meldung wird angezeigt, wenn keine virtuelle Tarife berechnet wurden. Dies kann folgende Ursachen haben:

Billing wurde erst frisch aufgesetzt

- -   Ursache: Wenn das Billing erst erstellt wurde, muss das erste mal manuell auf neu rechnen gedrückt werden

    - Lösung: Auf neu rechnen drücken


Unter der Meldung wird eine weitere Fehlermeldung angeschaut

- -   Ursache: Die Tarife können bei Problemen nicht berechnet werden.

    - Lösung: Die untere Fehlermeldung behandeln.


Es wurde gerade erst auf neu rechnen gedrückt

- -   Ursache: Es benötigt etwas zeit (1-2min), bis die Berechnung beginnt.

    - Lösung: 1-2min warten


Für das laufende Jahr sind keine Tarife hinterlegt

- -   Ursache: Das Billing benötigt für die komplette Abrechnungszeit, gültige Tarife

    - Lösung: Tarife von 2000 bis 2099 definieren oder mindestens von Inbetriebnahme bis ende des aktuellen Jahres


Nicht die ganze Periode ist mit einem Tarif definiert. Z.B. Für das Jahr der Inbetriebnahme des Zählers 2019 liegt kein Tarif vor.

- -   Ursache: Das Billing benötigt für die komplette Abrechnungszeit, gültige Tarife

    - Lösung: Tarife von 2000 bis 2099 definieren oder mindestens von Inbetriebnahme bis ende des aktuellen Jahres


Beim Solar- oder Batterietarif ist der Solar- oder Gesamtverbrauchszähler nicht hinzugefügt.

- -   Ursache: Um die Aufteilung von Netz und Solar zu berechnen, benötigen Solartarife gewisse Zähler.

    - Lösung: Prüfen ob alle Solar und Batterietarife, die nötigen Zähler hinterlegt haben.


Die Ordnerstruktur der Liegenschaft ist einstufig (nur Abrechnungseinheiten), sollte aber zweistufig sein (Liegenschaft und Abrechnungseinheiten).

- -   Ursache: Die Billingstruktur ist zweistufig und benötigt mindestens eine Abrechnungseinheit.

    - Lösung: Ordnerstruktur prüfen


### EVT001: There must be at least one normal virtual tariff active, but for ValuePeriod &#123; ... &#125; there is none

Diese Meldung wird angezeigt, wenn nicht für den ganzen Abrechnungszeitraum mindestens ein Netztarif gültig ist. In der geschweiften Klammer wird ein Zeitpunkt genannt, bei dem kein Netztarif gültig ist (Angaben in UTC). 

- Lösung 1: Tarife definieren für den ersten übermittelten Wert. Z.B. ab 5.8.2022 oder früher 1.1.2000, dann auf  "neu rechnen" drücken.

- Lösung 2: Tarife für das laufende Jahr definieren (z.B. bis 31.12.2024), dann auf  "neu rechnen" drücken.

- Lösung 3: Wenn Hoch/Nieder-Tarif: Prüfen ob diese 24h abdecken. [Wenn/Dann Aktionen](/konfiguration/billing/stromtarife-definieren)

- Lösung 3: "neu rechnen" drücken und erst das Datum eingeben, ab dem ein gültiger Tarif konfiguriert ist.


### EVT002: Not more than one unconditional normal virtual tariff must be active at a time, but for ValuePeriod ... there are the following ones: - ...

Diese Meldung wird angezeigt, wenn mehr als ein Netztarif gleichzeitig Gültig ist. Dadurch kann das Billing nicht entscheiden, auf welchen Tarif der Verbrauch gerechnet werden muss.

- Lösung 1: Die Tarife haben ein überlappendes Start- und Enddatum, für die Gültigkeit.

- Lösung 2: Bei Hoch/Nieder-Tarif: Für beide Tarife ist keine Bedingung festgelegt. Mindestens einer der beiden Tarife muss eine Bedingung haben. (z. B. Hochtarif).

- Lösung 3: Die Wenn/Dann Aktionen wurden falsch konfiguriert. Dies tritt vor allem dann auf, wenn Hoch- und Niedertarife für Netz- und Solarstrom konfiguriert sind.


### EVT003: For ValuePeriod ... the following virtual tariffs are active but erroneous: - Solar tariff ... is invalid because of: Solar Meter: Meter with id ....' does not exist

Diese Meldung wird angezeigt, wenn bei einem Solartarif hinterlegtem Zähler ein Problem vorliegt.

- Lösung 1: Es wurde kein Zähler hinterlegt -> Zähler hinterlegen

- Lösung 2: Es wurde ein alter Zähler hinterlegt, welcher in der Zwischenzeit gelöscht wurde -> neuen Zähler hinterlegen


### EVT004: The following residential commercial units are defective: - '....': the following assignments are defective: - Meter with id '....' does not exist

In einer der Abrechungseinheiten befindet sich ein gelöschter Zähler.

- Die Abrechnungseinheit wählen, welche in der Fehlermeldung angegeben wird und den gelöschten Zähler "not found" löschen und eventuell neuen Zähler hinterlegen


### EVT005: There is no residential commercial unit.

Diese Fehlermeldung taucht auf, wenn keine Abrechnungseinheit gefunden wurde.

- Ursache: Die zweistufige Ordnerstruktur fehlt. Links unter der Liegenschaft ist nur ein Ordner für die Liegenschaft und keine untergeordnete Abrechnungseinheit 

- Lösung 1:  Ordnerstruktur prüfen. [Infos](/konfiguration/billing)

- Lösung 2: Die Liegenschaft nochmals erstellen. Dafür im Billing unter Konfiguration nochmals auf Liegenschaft hinzufügen klicken und den gleichen Knoten anwählen. Dabei gehen keine Daten verloren.


Bei den externen Schlüsseln (Am ende der Seite) werden keine Abrechnungseinheiten aufgeführt.

- -   Ursache: Die Abrechnungseinheiten wurden nachträglich via Drag-n-Drop zu Liegenschaft hinzugefügt.

    - Lösung: Die Abrechnungseinheiten müssen neu erstellt werden. Wichtig ist jeweils den Liegenschaftsordner anzuwählen und dann "Knoten hinzufügen" zu wählen. Bei "Übergeordneter Ordner" muss der Name des Liegenschaftsordner angezeigt werden.


### EVT006: Failed to load meters of folder '...': - Erroneous virtual meter '....: - Meter with id '....' does not exist

Der virtuelle Zähler besteht aus Zählern, die gelöscht wurden.



![Billing Problembehebung – Abbildung 4](/img/stoerungsbehebung-billing-fehlermeldungen/04.png)

### EVT007: Möglicherweise verfügen nicht alle Zähler in der Konfiguration über die für virtuelle Tarife gesetzlich vorgeschriebene Lastgang- oder Zählerstandgang-Zertifizierung.

Dieser Hinweis ist rein informativ und wird angezeigt wenn Fremdgeräte oder von smart-me nicht zertifizierte Zähler verwendet werden. Er hat keinen Einfluss auf die Berechnung.

Mit diesem Hinweis wollen wir sicherstellen, dass sich der Rechnungssteller bewusst ist, dass die [Konformität von Messgeräten](/planung/zertifizierungen) in eigner Verantwortung liegt. Dies betrifft alle Fremdgeräte und den smart-me 1-Phasenzähler

Hinweis: Diese Meldung kann nicht deaktiviert werden.

### EVT020: Waiting for meter values of .... Last values at.... (UTC))

Diese Meldung taucht auf, wenn nicht alle nötigen Lastgangdaten vorhanden sind um die Tarife weiter berechnen zu können.

- Alle Zähler müssen online sein. [Zähler offline](/stoerungsbehebung/zaehler-offline)

- Ausgebaute Zähler müssen [deaktiviert oder gelöscht](/konfiguration/inbetriebnahme/zaehler-loeschen) sein.

- Bei vZEVs werden die Daten nur Täglich gesendet. Dadurch wird diese Meldung immer bis zum nächsten Versand angezeigt. Ist das Datum von heute, kann dies ignoriert werden.

- Zähler müssen Lastgangdaten senden. Bei defekt werden eventuell nur Livedaten versendet, diese sind für die Abrechnung nicht geeignet. (Es benötigt 15min Lastgangdaten.)


### EBC010: Die Kosten der Batteriepreiskomponente stimmen nicht mit den virtuellen Tarifkosten überein

Diese Meldung kommt nur wenn Mieterstrom aktiviert ist. Dies kommt vor wenn die Tarifstruktur geändert wurde, die Preiskomponenten bei den Sonstigen Positionen jedoch noch nicht geupdated wurde.

### EBC011: Die Kosten der Netz- oder Solar-Preiskomponenten stimmen nicht mit den virtuellen Tarifkosten überein

Diese Meldung kommt nur wenn Mieterstrom aktiviert ist. Dies kommt vor wenn die Tarifstruktur geändert wurde, die Preiskomponenten bei den Sonstigen Positionen jedoch noch nicht geupdated wurde.

### EBC012: Die Kosten der Solar-Preiskomponenten stimmen nicht mit den virtuellen Tarifkosten überein.

Diese Meldung kommt nur wenn Mieterstrom aktiviert ist. Dies kommt vor wenn die Tarifstruktur geändert wurde, die Preiskomponenten bei den Sonstigen Positionen jedoch noch nicht geupdated wurde.

## Fehler bei erstellten Rechnungen

![Billing Problembehebung – Abbildung 5](/img/stoerungsbehebung-billing-fehlermeldungen/05.png)

### EBC001: Verbräuche der virtuellen Tarife stimmen nicht mit dem Verbrauch überein.

Diese Meldung wird angezeigt, wenn die Summe der virtuelle Tarife nicht dem Verbrauch der Zähler entspricht. Dieses Problem entsteht, wenn die Zuweisung der virtuelle Tarife nicht korrekt passiert. 

Mögliche Ursachen:

Die Tarife wurden nicht für die ganze Abrechnungsperiode berechnet

- Ursache: Die berechnung der virtuellen Tarifen ist aufgrund einer Fehlermeldung stehen geblieben.

- Lösung: Bei der Konfiguration der Liegenschaft im Billing die virtuelle Tarife prüfen. Wird im blauen Kästchen eine Fehlermeldung angezeigt, muss diese behoben werden. Wird keine Meldung angezeigt, aber das Datum "Letzter berechneter Wert" ist in der Abrechnungsperiode, läuft die Berechnung noch und es muss sich geduldet werden.
    Wichtig: die Berechnung kann mehrere Stunden gehen, abhängig von den Anzahl Tarifen und Zählern.


In der Abrechnungsperiode ist der Installationstag beinhalten

- Ursache: Unser Billing arbeitet auf vollständigen Tagen.

- Lösung: Der Installationstag darf nicht in der Abrechnungsperiode sein. Man kann dies gegenprüfen, in dem man einen Report der Zähler erstellt und prüft, ob in diesem, Messwerte für den ganzen Zeitraum angegeben werden.


In der Abrechnungsperiode ist der heutige oder ein zukünftiger Tag.

- Ursache: Unser Billing arbeitet auf vollständigen Tagen und berechnet die virtuelle Tarife konstant.

- Lösung: Für den heutigen Tag sind nicht alle Werte vorhanden (Tag läuft noch) bzw sind keine Daten für die Zukunft vorhanden. Dadurch können keine virtuelle Tarife berechnet werden.


Die Rechnung wird leer erstellt

- Ursache: Die Ordnerstruktur ist nicht korrekt oder für die gesamte Abrechnungsperiode wurden keine virtuelle Tarife berechnet.

- Lösung: Bei der Konfiguration der Liegenschaft im Billing die virtuelle Tarife prüfen. Wird im blauen Kästchen eine Fehlermeldung angezeigt, muss diese behoben werden. Wenn neu gerechnet wurde ab einem späteren Datum (z.B. Abrechnung wird für 2025 erstellt; Neu gerechnet wurde ab 2026) wurden keine Tarife für die Periode berechnet. Es muss nochmals neu gerechnet werden inklusive der Abrechnungsperiode.


Ein Zähler war mehr als 2 Monate offline

- Ursache: Bei einer Lücke können keine virtuelle Tarife berechnet werden.

- Lösung: Prüfen ob alle Daten vorhanden sind, wenn diese Vorhanden sind muss neu gerechnet werden. Wenn Daten nicht vorhanden sind kann für diese Periode keine Rechnung erstellt werden.


Die Konfiguration hat sich geändert (Ordnerstruktur, Zählerzuweisung, Tarif-Struktur/Zeiten)

- Ursache: Es wurde nicht neu gerechnet

- Lösung: Es muss neu gerechnen werden.


Ein Zähler wird mehr oder weniger als 100% verrechnet.

- Ursache: Ein Zähler (z.B. der Allgemeinzähler) wurde prozentual verteilt, gibt jedoch zusammen nicht 100%

- Lösung: Der Zähler muss zu 100% Verrechnet werden. Hinweis: Wenn ein Zähler auf drei Einheiten verteilt wird, muss eine der Einheiten 33.34% haben. (3x 33.33% ist nur 99.99%)


vZEV Daten wurden aktualisiert

- Ursachen: Beim vZEV sendet der Energieversorger monatlich korrigierte Daten.

- Lösung: Es muss neu gerechnet werden.


### EBC002/EBC003: Keine Werte zum Startdatum oder Enddatum gefunden.

Diese Meldung betrifft Multienergiezähler.

Mögliche Ursachen:

- Ein abrechnungsrelevanter Zähler ist offline.

- Der Abrechnungszeitraum (Von) entspricht dem Installationstag und/oder der Abrechnungszeitraum (Bis) ist auf heute gesetzt.

- Der Abrechnungszeitraum (Von) liegt vor dem Installationstag und/oder der Abrechnungszeitraum (Bis) liegt in der Zukunft.

- Ein Zähler war länger als 2 Monate offline und die Abrechnungsperiode startet oder endet im Zeitraum, in dem die Daten nicht mehr vorhanden sind. (Lücke)

- Das gewählte Jahr ist falsch.


### EBC004: Rechnungen werden leer oder gar nicht generiert.

### Mögliche Ursachen:

- Bei der entsprechenden Abrechnungseinheit wurde keine gültige Rechnungsadresse hinterlegt (Zeitraum beachten) →  unser System geht sonst davon aus, dass kein Mieter in der Wohnung wohnt und erzeugt dementsprechend auch keine Rechnung. 

- Der Abrechnungseinheit wurden keine Zähler zum Abrechnen zugewiesen. 

- Die Ordnerstruktur ist falsch (Siehe [2\. Ordnerstruktur erstellen und Zähler zuweisen](https://wiki.smart-me.com/konfiguration/billing#h.l9e8fd5e9hxl))

- Bei virtuellen Tarifen: Die Tarife sind im gewünschten Rechnungszeitraum nicht gültig (Zeitraum der Tarife ggf. anpassen).

- Es ist keine Rechnungsadresse für den Zeitraum hinterlegt. 


### EBC005: The added or subtracted value results in an un-representable DateTime. Parameter name: value Index was outside the bounds of the array.

Ihr Bexio-Login ist nicht mehr gültig. Du musst dich neu einloggen.

### QR bill data is invalid: currency should be "CHF" or "EUR" (currency\_not\_chf\_or\_eur)

Die Währung ist nicht auf CHF oder EUR gesetzt. 

Login--> Rechnungserstellung --> Einstellungen --> Währung ändern und auf "CHF" setzen --> Speichern.



### QR bill data is invalid: amount should be between 0.01 and 999 999 999.99 (amount\_outside\_valid\_range)

Der zu verrechnende Betrag ist negativ. Das kann passieren, bei einer Sonstige Positionen z.B. Rückvergütungen.

Dies kann nicht umgangen werden. Die Rechnung wird trotzdem erstellt (Ohne QR Code).



## Spitzenverbrauch Tarife spezifische Fehlermeldungen

### EPK001: Zähler für Netzstrom wurde nicht konfiguriert

### Mögliche Ursachen:

- Im smart-me Billing wurde der Bilanzzähler nicht im Spitzentarif hinterlegt.




Problem Lösen: 

- smart-me Billing --> Konfiguration --> Spitzenverbrauch Tarife --> Editieren --> Bilanzzähler hinzufügen --> Speichern.


### EPK002: Spitzenlastkosteneinträge fehlen für den Abrechnungszeitraum

Im smart-me Billing wurde die Kosten des Spitzentarifs nicht hinterlegt.

Lösung: smart-me Billing --> Konfiguration --> Spitzenverbrauch Tarife --> Kosten hinzufügen --> Preis / kW hinzufügen --> Speichern.

### EPK003: Der Netzverbrauch im Abrechnungszeitraum konnte nicht ermittelt werden.

Der Bilanzzähler hat keine Daten geliefert.

- Ursache: Ohne Bilanzzähler, können die Spitzen nicht berechnet werden, wenn der Typ auf "Verbrauchsmessung" ist

- Lösung: Prüfen ob die Werte vorhanden sind.


Der Bilanzzähler hat nicht für einen ganzen Monat Daten geliefert.

- Ursache: Es benötigt Werte für den ganzen Monat um Spitzen verrechnen zu könne.

- Lösung: Spitzentarif erst ab einem Monat später konfigurieren. Für den Monat mit Lücke kann ein Spitzenverbrauch mit "Zugewiesenen Kosten" erstellt werden. 


### EPK004: Mindestens eine Abrechnungseinheit muss einen Verbrauch im Abrechnungszeitraum haben.

Es wird nur Solartarif verrechnet

- Ursache: Spitzenverbrauch wird nur auf den Netztarif angewendet. 

- Lösung: Prüfen ob der Solartarif korrekt konfiguriert wurde.


Es wurde kein Verbrauch gemessen

- Ursache: Die Zähler haben für den Zeitraum keinen Verbrauch gemessen

- Lösung 1: Prüfen wann die Zähler in Betrieb genommen wurden und ob über die gesamte Periode, Daten vorhanden sind.


## VEWA spezifische Fehlermeldungen

### Auf der Rechnung werden die Werte gar nicht oder mit 0kWh angezeigt, obwohl ein Verbrauch stattgefunden hat.

Es muss jeweils ein Tarif hinterlegt sein (Platzhalter) für die jeweilen Energietypen. Wärme, Warmwasser, etc.

Login --> Rechnung erstellen --> Einstellungen (oben Mitte) --> Liegenschaft editieren --> Tarife für Wärme / Warmwasser / etc. mit 0 CHF hinterlegen. --> Speichern.

### Word & Excel-Dateien werden leer erstellt (0 Byte)

Diese Dateien sind nur ausserhalb von VEWA nutzbar. Wenn VEWA aktiviert ist, bleiben die Tasten dafür zwar sichtbar, geben jedoch nur leere Dateien aus.

### Keine Werte für Zähler. Es werden Ersatzwerte verwendet.

Dieser Fehler kann vorkommen und ist nicht in jedem Fall kritisch zu bewerten. Es ist aber darauf zu achten wie weit der Ersatzwert sich vom Angefragten Wert absetzt.

Die Fehlermeldung tritt nach spätestens 48h Abweichung auf.

Hinweis: Überprüfe evtl. das Ausleseintervall des M-Bus Gateways dass es sich öfters als alle 2 Tage ausliest um auszuschliessen das der Fehler systematisch auftritt.



### EVW001: Fehlendes Mietverhältnis oder Leerstand!

Bitte trage das fehlende Mietverhältnis oder den Leerstand nach.

Ohne die Nachtragung werden die Kosten vollumfänglich auf die eingetragenen Kontrakte verrechnet und die Referenzsummenenergie auch nur aus diesen Kontrakten gebildet. (Weniger Energie als eigentlich Verbraucht)



### EVW002: Doppelbelegung der Abrechnungseinheit!

Prüfe die Leerstände und Mietverhältnisse auf Doppelbelegungen.

Ohne die Korrektur werden die Kosten vollumfänglich auf die Eingetragenen Kontrakte verrechnet und die Referenzsummenenergie aus zu vielen Kontrakten gebildet. (Mehr Energie als eigentlich verbraucht)

## Adresse kann nicht gepflegt werden

### ID Address Email Description Valid from Valid to Valid to (ISO) Valid from (ISO)Third party key

Mögliche Ursachen:

- Das smart-me Billing wurde 3-stufig angelegt.

- Ein Ordner wurde nachträglich verschoben und hat noch alte Konfigurationen gespeichert.


Lösung: Siehe EVT005

## Themen detaillierter erklärt:

### Warum erzeugt der virtuelle Tarif eine Differenz, wenn der Zähler zum Zeitpunkt des Abrechnungsbeginn (Von) oder Abrechnungsende (Bis) keine Daten geliefert hat?

Mögliche Gründe:

- Inbetriebnahme war nicht abgeschlossen

- Zähler war offline und hat die Lastgangdaten nicht nachgeliefert

- Zähler war defekt


Datenbasis für die Feststellung des Fehlers:

Das smart-me Billing führt bei der Erstellung einer Rechnung eine Kontrolle durch. Dabei wird die Summe der virtuellen Tarifen (z.B. Hoch-, Nieder-, Solartarif) mit dem Elektrizitätsverbrauch verglichen. Wenn dort eine Differenz besteht, wird eine Fehlermeldung angezeigt. 

![Billing Problembehebung – Abbildung 6](/img/stoerungsbehebung-billing-fehlermeldungen/06.png)

Anzeige von Zählerständen

Die Ermittlung der Zählerstände wird im smart-me Billing bei der Erstellung einer Rechnung nicht mit einer Zeitangabe angezeigt. Um zu überprüfen, ob der Zähler zum gewünschten Zeitpunkt Daten geliefert hat, muss ein Report erstellt werden.

Für den Report kann die Liegenschaft ausgewählt und ein Verbrauchsreport detailliert PDF erzeugt werden. Dabei werden die Daten aller Abrechnungseinheiten (Wohnungen) auf einmal exportiert. 

Liegenschaft auswählen --> Rechts oben Report auswählen --> Reporttyp --> Verbrauchsreport detailliert (PDF)

Nun kann geprüft werden, ob der Zeitraum des Reports mit dem Zeitraum der Bezugsgrösse, die Summe von einem oder mehreren Zählern abweicht. Ist dies der Fall, so sind für den gewählten Zeitraum keine Lastgangdaten verfügbar.

![Billing Problembehebung – Abbildung 7](/img/stoerungsbehebung-billing-fehlermeldungen/07.png)

Anzeige von Virtuellen Tarifen

Die Ermittlung der virtuellen Tarife wird im smart-me Billing bei der Erstellung einer Rechnung in den Tarifen angezeigt.

![Billing Problembehebung – Abbildung 8](/img/stoerungsbehebung-billing-fehlermeldungen/08.png)

Unterschiedliche Handhabung zwischen Zählerstände und Virtuellen Tarifen:

Zählerstände: Das smart-me Billing verwendet für den Elektrizitätsverbrauch die physischen Zählerstände, die auf dem Zähler generiert werden. Wenn zum Zeitpunkt des Beginns oder Endes der Abrechnung kein Zählerstand verfügbar ist, verwendet smart-me Billing den Zählerstand, der dem gewünschten Datum am nächsten liegt.

Virtuelle Tarife: Das smart-me Billing berechnet die virtuellen Tarife auf Basis der Lastgangdaten (physische Zählerstände). Sind keine Lastgangdaten, z.B. für 1 Woche vorhanden, werden diese interpoliert. D.h. unser System nimmt die Zählerstände und geht davon aus, dass der Verbrauch alle 15 Minuten konstant ist (Lastgangdaten). Daraus werden dann die virtuellen Verbräuche berechnet.

Vereinfachtes Berechnungsbeispiel mit korrekten Daten:

Wohnung 1 hat einen Zählerstand (Lastgangdaten) am 01.10.2023 00:00 und am 31.10.2023 00:00 gesendet

- Zählerstand am 1.10.2023 00:00: 5200 kWh

- Zählerstand am 31.10.2023 00:00: 5250 kWh

- Der Zählerstand wird ermittelt. 5250-5200 = 50 kWh


Der virtuelle Verbrauch wird berechnet. Die Aufteilung zwischen Hoch-, Nieder- und Solar-Tarif ist 50 kWh 

Vereinfachtes Berechnungsbeispiel mit fehlenden Daten:

Wohnung 1 hat ein Zählerstand (Lastgangdaten) am 01.10.2023 00:00 gesendet, dies wurde bis und mit 25.10.2023 00:00 durchgeführt. Ab dem 25.10.2023 00:00 bis am 15.11.2023 00:00 liegen keine Lastgangdaten vor.

- Zählerstand am 1.10.2023 00:00: 851 kWh

- Zählerstand am 25.10.2023 00:00: 902 kWh

- Zählerstand am 15.11.2023 00:00: 950 kWh


Der Zählerstand für den 31.10.2023 00:00 ist nicht verfügbar. Der nächstgelegene Zählerstand zum Datum ist der 25.10.2023 00:00, daher wird dieser für die Anzeige und Berechnung im smart-me Billing verwendet.

Der Zählerstand wird ermittelt. 902-851 = 51 kWh (Der Verbrauch von 51 kWh wird in der Rechnung bei "Ihr Anteil" ausgewiesen)

Der virtuelle Verbrauch wird berechnet. Zwischen dem 1.10.2023 00:00 und dem 25.10.2023 00:00 wird ein Verbrauch von 51 kWh zwischen Hoch-, Nieder- und Solar-Tarif aufgeteilt. Da ab diesem Zeitpunkt Daten fehlen, werden die fehlenden Lastgangdaten interpoliert. Der Ausfall beträgt 21 Tage. In dieser Zeit wurden 950-902 = 48 kWh verbraucht. Mit Interpolation ergibt dies 2,29 kWh pro Tag. Im smart-me Billing werden also zusätzlich zu den 51 kWh noch 6 Tage à 2.29 kWh verrechnet, was 51 + 13.71 = 64.71 kWh ergibt.

Nun besteht eine Differenz zwischen dem Zählerstand 51 kWh und dem virtuellen Tarif 64.71 kWh im smart-me Billing. Dies führt zu der Fehlermeldung.
