---
title: 'Beispiele Boilersteuerung mit Wenn/Dann-Aktionen'
slug: '/konfiguration/wenndann-aktionen/beispiel-boilersteuerung'
description: 'Beispielkonfigurationen werden auf dieser Seite ausführlich beschrieben.'
sidebar_label: 'Beispiel Boilersteuerung'
---
Beispielkonfigurationen werden auf dieser Seite ausführlich beschrieben.

## Voraussetzungen

Um Wenn/Dann-Aktionen nutzen zu können, musst du eine smart-me Limited- oder Professional-Lizenz haben.

## Grundlagen

Die technischen Daten sind bei den jeweiligen [Produkten](/produkte) zu finden. (z.B. maximale Schaltleistung).

Die Konfiguration der Ausgänge ist auf der Seite [Ein- und Ausgänge](/schnittstellen/ein_und_ausgaenge) beschrieben (z.B. Aktivierung von Ausgang 1).

Die Grundlagen sind unter [Wenn/Dann-Aktionen](/konfiguration/wenndann-aktionen) beschrieben (z.B. wo ich Wenn-Dann-Aktionen finden kann).

Beachte, dass [Wenn/Dann-Aktionen](/konfiguration/wenndann-aktionen) nur dann korrekt funktionieren, wenn die Verbindung zur smart-me Cloud gewährleistet ist. [Ereignisaktionen](/konfiguration/wenndann-aktionen/ereignisaktionen)  sind eingeschränkter, werden aber lokal gespeichert und ausgeführt.

Bei der Konfiguration der Wenn/Dann Aktionen immer darauf achten, ob die angezeigte Einheit Watt oder Kilowatt ist.

Die smart-me Zähler sind mit bistabilen Relais ausgestattet, wenn ein Einschalten konfiguriert ist, muss immer auch das Ausschalten konfiguriert werden.

## Einleitung

Bestimme den Verbrauch und plane eine Reserve für Verbrauchsschwankungen ein

Um ein gutes Steuerung zu konfigurieren, ist es wichtig, die von den Verbrauchern verbrauchte Leistung zu kennen. Es ist auch notwendig, für jeden Fall eine Reserve vorzusehen. Wenn zum Beispiel der DG-Boiler 3 kW benötigt, wird der Boiler eingeschaltet wenn weniger als -3,5 kW auf dem Bilanzzähler gemessen wird und erst wieder ausgeschaltet wenn mehr als 0 kW gemessen wird. Die 0,5 kW Differenz dienen dann als Puffer, wenn jemand z.B. einen Computer (60 Watt) einschaltet, damit in diesem Fall nicht unmittelbar zu wenig Energie zur Verfügung steht.

Zeitversetztes Ein- oder Ausschalten

Ausserdem muss vor dem Ein- oder Ausschalten eine Zeitspanne einberechnet werden. So wird z.B. der Boiler erst abgeschaltet, wenn der Wert von 0 kW länger als 5 Minuten überschritten wird. So wird sichergestellt, dass ein kurzzeitiger Verbraucher wie ein Backofen oder ein Wasserkocher nicht unmittelbar zur Folge hat, dass der Verbraucher immer aus- und eingeschaltet werden muss. Dies ist umso wichtiger, je grösser das Gebäude ist.

Bestimmen, wie viele Verbraucher gleichzeitig eingeschalten werden können 

Du solltest immer überprüfen, wie die Sicherungen dimensioniert wurden. Dies muss berücksichtigt werden, wenn alle Verbraucher gleichzeitig laufen, z. B. nachts. Wenn die Sicherung zu klein ist, musst du die Wenn/Dann-Aktionen so konfigurieren, dass die Verbraucher nicht gleichzeitig eingeschaltet werden.

Ermitteln der Ein- und Ausschaltzeiten von Verbrauchern für ein stufenweises Einschalten

Beim schrittweisen Einschalten von Verbrauchern, z. B. mehreren Boilern, muss sichergestellt werden, dass die Verzögerung zwischen dem ersten und dem zweiten Verbraucher lang genug ist, damit der erste Verbraucher die volle Leistung bezieht. Wenn es z. B. nur 20 Sekunden dauert, bis die Verbraucher die volle Leistung bezieht, können die Verbraucher mit einer Verzögerung von einer Minute eingeschaltet werden. Sofern genügend Strom vorhanden ist.

Wenn es feste Ein- und Ausschaltzeiten gibt, muss darauf geachtet werden, dass diese um mindestens 1 Minute verschoben werden. Zum Beispiel Einschalten zwischen 5:00 und 8:00 und Ausschalten zwischen 8:01 und 4:59

Ausschalten von Verbrauchern

Beim Ausschalten von Verbrauchern, z. B. von mehreren Boilern, ist es möglich, alles auf einmal auszuschalten. Also z.B. mit einer Verzögerung von 5 Minuten (Zeitversetztes Ausschalten). Es ist aber auch möglich, die Boiler schrittweise abzuschalten.

Beispiel für eine Schrittweise Abschaltung mit Verzögerung: 

- Der erste Boiler schaltet sich mit einer Verzögerung von 5 Minuten aus, damit z. B. jemand den Wasserkocher einschalten kann, ohne dass dies den Boiler Ausschaltet. 

- Der zweite Boiler wird nach 7 Minuten erhöhtem Netzbezug Ausgeschaltet (Also 5 Minuten nach dem Ersten + 2 Minuten Wartezeit)

- Der dritte Boiler wird dann 9 Minuten erhöhtem Netzbezug Ausgeschaltet


Netzoptimiert vs. Eigenverbrauchsoptimiert

Bei der Konfiguration der Ein- und Ausschalt-Schwellwerten muss entscheiden werden, ob es sich um eine netzoptimierte Anlage handelt, d. h. die Verbraucher schalten sich möglichst immer dann ein und aus, wenn Strom aus dem Netz bezogen wird. Oder ob die Anlage für den Eigenverbrauch optimiert werden soll. Das heisst, dass möglichst viel Strom vom Dach genutzt werden soll.

- Beispiel für einen Verbraucher von 2,5 kW mit einer Reserve für Verbrauchsschwankungen von 0,5 kW.

    - Netzoptimiert: Boiler bei -3 kW einschalten und bei 0 kW ausschalten. 

    - Eigenverbrauchsoptimiert: Boiler bei -1,5 kW einschalten und bei +1,5 kW ausschalten.

    - Teils-Teils: Boiler bei -2.5 kW einschalten und bei + 0.5 kW ausschalten.


Bei der Konfiguration ist darauf zu achten, dass die Variante mit optimiertem Eigenverbrauch im Winter rentabler ist, im Sommer bei schönem Wetter die Verbraucher aber sehr früh eingeschaltet werden und am Nachmittag bei Sonnenschein bereits voll sind.

Wir haben gute Erfahrungen gemacht, wenn die Verbraucher sich dann einschalten, wenn sie zu 100 % mit Solarstrom versorgt werden können und die Reserve für kleine Schwankungen im Netzanteil berücksichtigt wird. Also das obere Beispiel "Teils-Teils".

Booster Knopf

Die Einrichtung eines Booster-Knopf für einen Verbraucher ist zwar möglich, macht die Einrichtung aber aufwendiger und komplizierter. Ausserdem ist zu beachten, dass nur der Besitzer des smart-me-Kontos die Möglichkeit hat, einen Booster-Button zu aktivieren. 

Für diese Funktion müssen wir einen digitalen Ausgang verwenden, der nicht physisch mit einem Verbraucher verbunden ist. Wir verwenden dann den Knopf nur als Zustand für die Wenn/Dann Aktionen.

Nachheizen mit Hoch- und Niedertarif vs. Nachheizen mit Eintarif. 

Bei Boilern, die mit den Wenn Dann Aktionen nachgeheizt werden, kann die lokale Tarifstruktur beachtet werden. 

Wenn der Strom nachts billiger ist, ist es üblich, in der Nacht nachzuheizen. Dies hat jedoch zur Folge, dass der Boiler in der Regel bei Sonnenaufgang die Maximale Temperatur hat. 

Wenn ein Einheitstarif angewendet wird, ist es am besten, das Nachheizen ab 12 Uhr zu staffeln. So kann der Boiler im Sommer morgens optimal geladen und ggf. nachmittags aufgeheizt werden. Auf diese Weise ist der Solarertrag für den Boiler besser. In den folgenden Beispielen wird nachts nachgeheizt. Wenn dies tagsüber erfolgen soll, ändern Sie einfach die Einschaltzeiten der Beispiele. Achten Sie darauf, dass auch das Ausschalten auch berücksichtigt werden muss.

3 Stufige Boilersteuerung

Das untenstehende Beispiel für die Steuerung von 3 Boiler kann auch für die Steuerung von 1 Boiler mit 3 Phasen verwendet werden. Die Konfiguration ist genau die gleiche.

![Beispiele Boilersteuerung mit Wenn/Dann-Aktionen – Abbildung 1](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/01.png)

Bild: ZEV mit 3 Boiler inkl. Nachheizung in der Nacht (Grüne Rechtecke)

## Beispiel Solaroptimiert mit Nachheizung mit 1 Boiler (Detaillierte Erklärung mit Bilder und Tabellarische Erklärung)

Bei der Konfiguration der Wenn/Dann Aktionen immer darauf achten ob die angezeigte Einheit Watt oder Kilowatt ist.

Relais sind mit Boiler verbunden und wurden mit dem Namen "Boiler" versehen.

Dauer bis die volle Leistung bezogen wird: 20 Sekunden

Boiler schaltet selbständig ein, wenn eine minimale Temperatur erreicht ist: Nein

Leistung Boiler EG: 6 kW

![Beispiele Boilersteuerung mit Wenn/Dann-Aktionen – Abbildung 2](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/02.png)

Konfiguration: Boiler 1 Ein (EG)

Wenn/Dann Aktion: Boiler EG Ein

Diese Wenn/Dann Aktion erfüllt die Funktion:

- den Boiler einzuschalten, wenn der Bilanzzähler mehr als eine Minute lang ausreichend Strom liefert.


Oder

- Eine festgelegte Zeit ist und der Boiler in jedem Fall drei Stunden lang aufgeheizt wird.


![Beispiele Boilersteuerung mit Wenn/Dann-Aktionen – Abbildung 3](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/03.png)

Wenn Messwert grösser/kleiner:

- Zähler: Bilanz 

- Schwellwert: unter 

- Leistung: -6000 Watt

- Mindestzeit: 1 Minute


![Beispiele Boilersteuerung mit Wenn/Dann-Aktionen – Abbildung 4](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/04.png)

Wenn Datum & Uhrzeit:

- Typ: Zeitspanne / Jeden Tag

- Von: 22:00

- Wochentage: Alle Wählen

- Bis: 01:00


![Beispiele Boilersteuerung mit Wenn/Dann-Aktionen – Abbildung 5](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/05.png)

Wenn Ereignis

- Typ: Oder Verknüpfung


![Beispiele Boilersteuerung mit Wenn/Dann-Aktionen – Abbildung 6](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/06.png)

Dann Ein / ausschalten

- Zähler: EG

- Boiler: Ein


![Beispiele Boilersteuerung mit Wenn/Dann-Aktionen – Abbildung 7](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/07.png)

### Konfiguration: Boiler Aus tabellarische Ansicht (Kurz)



Wenn/Dann Aktion: Boiler EG Aus

Diese Wenn/Dann Aktion erfüllt die Funktion:

- Den Boiler auszuschalten, wenn der Bilanzzähler mehr als drei Minute lang nicht ausreichend Strom liefert.

- Und

- Wenn sich der Boiler nicht innerhalb des festgelegten Zeitraums befindet, in dem er in jedem Fall drei Stunden lang nachgeheizt wird.


Die Konfiguration ist unten in der tabellarische Ansicht erläutert. Wichtig ist zu beachten, dass es eine UND Aktion ist, der Schwellwert neu über und nicht mehr unter ist und die Zeiten das Gegenteil vom Einschalten (Nachheizen) sind mit 1 Minuten Zeitversetzt.

Konfiguration: Boiler 1 Aus (EG)

Wenn/Dann Aktion: Boiler EG Aus

Wenn Messwert grösser/kleiner:

- Zähler: Bilanz 

- Schwellwert: über

- Leistung: 500 Watt

- Mindestzeit: 4 Minuten


Wenn Datum & Uhrzeit:

- Typ: Zeitspanne / Jeden Tag

- Von: 01:01

- Wochentage: Alle Wählen

- Bis: 21:59


Wenn Ereignis

- Typ: Und Verknüpfung


Dann ein- / ausschalten

- Zähler: EG

- Boiler: Aus


![Beispiele Boilersteuerung mit Wenn/Dann-Aktionen – Abbildung 8](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/08.png)

## Beispiel Solaroptimiert mit Nachheizung mit 3 Boiler (Tabellarische Erklärung)

Bei der Konfiguration der Wenn/Dann Aktionen immer darauf achten ob die angezeigte Einheit Watt oder Kilowatt ist

Relais sind mit Boilern verbunden und wurden mit dem Namen "Boiler" versehen.

Dauer bis die volle Leistung bezogen wird: 20 Sekunden

Boiler schaltet selbständig ein, wenn eine minimale Temperatur erreicht ist: Nein

Leistung: 

- Boiler EG: 6 kW

- Boiler DG: 3 kW

- Boiler UG: 2 kW


Um sicherzustellen, dass die Boiler nicht gleichzeitig eingeschaltet werden, werden wir eine Verzögerung einbauen, bevor jeder Boiler eingeschaltet wird. Der Boiler mit der kürzesten Verzögerungszeit hat den grössten Vorteil bei der Nutzung der Sonnenenergie, da er zuerst eingeschaltet wird. In diesem Beispiel werden wir den Boiler mit dem höchsten Verbrauch zuerst einschalten, damit er die Möglichkeit hat, nach einer langen Zeit mit hohem Verbrauch, z. B. mittags, zuerst eingeschaltet zu werden.

### Konfiguration: Boiler Ein tabellarische Ansicht (Kurz)

Hier gehen wird nun noch auf die Konfiguration ein. Ein einfacheres Beispiel ist weiter oben detailliert erklärt.

Durch die Darstellung in Tabellenform lassen sich die Unterschiede auf Desktop Bildschirmen schneller erkennen und damit auch die dahinterstehende Logik.

Konfiguration: Boiler 1 Ein (EG)

Wenn/Dann Aktion: Boiler EG Ein

Wenn Messwert grösser/kleiner:

- Zähler: Bilanz 

- Schwellwert: unter 

- Leistung: \-6000 Watt

- Mindestzeit: 1 Minute


Wenn Datum & Uhrzeit:

- Typ: Zeitspanne / Jeden Tag

- Von: 22:00

- Wochentage: Alle wählen

- Bis: 01:00


Wenn Ereignis

- Typ: Oder Verknüpfung


Dann ein- / ausschalten

- Zähler: EG

- Boiler: Ein


Konfiguration: Boiler 2 Ein (DG)

Wenn/Dann Aktion: Boiler DG Ein

Wenn Messwert grösser/kleiner:

- Zähler: Bilanz 

- Schwellwert: unter

- Leistung: \-3000 Watt

- Mindestzeit: 2 Minuten


Wenn Datum & Uhrzeit:

- Typ: Zeitspanne / Jeden Tag

- Von: 01:00

- Wochentage: Alle wählen

- Bis: 05:00


Wenn Ereignis

- Typ: Oder Verknüpfung


Dann ein- / ausschalten

- Zähler: DG

- Boiler: Ein


Konfiguration: Boiler 3 Ein (UG)

Wenn/Dann Aktion: Boiler UG Ein

Wenn Messwert grösser/kleiner:

- Zähler: Bilanz 

- Schwellwert: unter 

- Leistung: \-2000 Watt

- Mindestzeit: 3 Minuten


Wenn Datum & Uhrzeit:

- Typ: Zeitspanne / Jeden Tag

- Von: 02:00

- Wochentage: Alle wählen

- Bis: 06:00


Wenn Ereignis

- Typ: Oder Verknüpfung


Dann ein- / ausschalten

- Zähler: UG

- Boiler: Ein


### Konfiguration: Boiler Aus tabellarische Ansicht (Kurz)

Konfiguration: Boiler 1 Aus (EG)

Wenn/Dann Aktion: Boiler EG Aus

Wenn Messwert grösser/kleiner:

- Zähler: Bilanz 

- Schwellwert: über

- Leistung: 500 Watt

- Mindestzeit: 4 Minuten


Wenn Datum & Uhrzeit:

- Typ: Zeitspanne / Jeden Tag

- Von: 01:01

- Wochentage: Alle Wählen

- Bis: 21:59


Wenn Ereignis

- Typ: Und Verknüpfung


Dann ein- / ausschalten

- Zähler: EG

- Boiler: Aus


Konfiguration: Boiler 2 Aus (DG)

Wenn/Dann Aktion: Boiler DG Aus

Wenn Messwert grösser/kleiner:

- Zähler: Bilanz 

- Schwellwert: über

- Leistung: 500 Watt

- Mindestzeit: 5 Minuten


Wenn Datum & Uhrzeit:

- Typ: Zeitspanne / Jeden Tag

- Von: 05:01

- Wochentage: Alle Wählen

- Bis: 00:59


Wenn Ereignis

- Typ: Und Verknüpfung


Dann ein- / ausschalten

- Zähler: DG

- Boiler: Aus


Konfiguration: Boiler 3 Aus (UG)

Wenn/Dann Aktion: Boiler UG Aus

Wenn Messwert grösser/kleiner:

- Zähler: Bilanz 

- Schwellwert: über

- Leistung: 500 Watt

- Mindestzeit: 6 Minuten


Wenn Datum & Uhrzeit:

- Typ: Zeitspanne / Jeden Tag

- Von: 06:01

- Wochentage: Alle Wählen

- Bis: 01:59


Wenn Ereignis

- Typ: Und Verknüpfung


Dann ein- / ausschalten

- Zähler: UG

- Boiler: Aus


## Beispiel Solaroptimiert ohne Nachheizung mit 1 Boiler

Gleich wie das untere "Beispiel Solaroptimiert ohne Nachheizung mit 3 Boiler (Tabellarische Erklärung)". Du musst nur die Konfiguration für ein Boiler machen.

## Beispiel Solaroptimiert ohne Nachheizung mit 3 Boiler (Tabellarische Erklärung)

Bei der Konfiguration der Wenn/Dann Aktionen immer darauf achten, ob die angezeigte Einheit Watt oder Kilowatt ist.

Relais sind mit Boilern verbunden und wurden mit dem Namen "Boiler" versehen.

Dauer bis die volle Leistung bezogen wird: 20 Sekunden

Boiler schaltet selbständig ein, wenn eine minimale Temperatur erreicht ist: Ja

Leistung: 

- Boiler EG: 6 kW

- Boiler DG: 3 kW

- Boiler UG: 2 kW


Um sicherzustellen, dass die Boiler nicht gleichzeitig eingeschaltet werden, werden wir eine Verzögerung einbauen, bevor jeder Boiler eingeschaltet wird. Der Boiler mit der kürzesten Verzögerungszeit hat den grössten Vorteil bei der Nutzung der Sonnenenergie, da er zuerst eingeschaltet wird. In diesem Beispiel werden wir den Boiler mit dem höchsten Verbrauch zuerst einschalten, damit er die Möglichkeit hat, nach einer langen Zeit mit hohem Verbrauch, z. B. mittags, zuerst eingeschaltet zu werden.

### Konfiguration: Boiler Ein tabellarische Ansicht (Kurz)

Hier gehen wird nun noch auf die Konfiguration ein. Ein einfacheres Beispiel ist weiter oben detailliert erklärt.

Durch die Darstellung in Tabellenform lassen sich die Unterschiede auf Desktop Bildschirmen schneller erkennen und damit auch die dahinterstehende Logik.

![Beispiele Boilersteuerung mit Wenn/Dann-Aktionen – Abbildung 9](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/09.png)

Konfiguration: Boiler 1 Ein (EG)

Wenn/Dann Aktion: Boiler EG Ein

Wenn Messwert grösser/kleiner:

- Zähler: Bilanz 

- Schwellwert: unter 

- Leistung: \-6000 Watt

- Mindestzeit: 1 Minute


Dann ein- / ausschalten

- Zähler: EG

- Boiler: Ein


Konfiguration: Boiler 2 Ein (DG)

Wenn/Dann Aktion: Boiler DG Ein

Wenn Messwert grösser/kleiner:

- Zähler: Bilanz 

- Schwellwert: unter

- Leistung: \-3000 Watt

- Mindestzeit: 2 Minuten


Dann ein- / ausschalten

- Zähler: DG

- Boiler: Ein


Konfiguration: Boiler 3 Ein (UG)

Wenn/Dann Aktion: Boiler UG Ein

Wenn Messwert grösser/kleiner:

- Zähler: Bilanz 

- Schwellwert: unter 

- Leistung: \-2000 Watt

- Mindestzeit: 3 Minuten


Dann ein- / ausschalten

- Zähler: UG

- Boiler: Ein


### Konfiguration: Boiler Aus tabellarische Ansicht (Kurz)

![Beispiele Boilersteuerung mit Wenn/Dann-Aktionen – Abbildung 10](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/10.png)

Konfiguration: Boiler 1 Aus (EG)

Wenn/Dann Aktion: Boiler EG Aus

Wenn Messwert grösser/kleiner:

- Zähler: Bilanz 

- Schwellwert: über

- Leistung: 500 Watt

- Mindestzeit: 4 Minuten


Dann ein- / ausschalten

- Zähler: EG

- Boiler: Aus


Konfiguration: Boiler 2 Aus (DG)

Wenn/Dann Aktion: Boiler DG Aus

Wenn Messwert grösser/kleiner:

- Zähler: Bilanz 

- Schwellwert: über

- Leistung: 500 Watt

- Mindestzeit: 5 Minuten


Dann ein- / ausschalten

- Zähler: DG

- Boiler: Aus


Konfiguration: Boiler 3 Aus (UG)

Wenn/Dann Aktion: Boiler UG Aus

Wenn Messwert grösser/kleiner:

- Zähler: Bilanz 

- Schwellwert: über

- Leistung: 500 Watt

- Mindestzeit: 6 Minuten


Dann ein- / ausschalten

- Zähler: UG

- Boiler: Aus


## Beispiel Solaroptimiert ohne Nachheizung mit 1 Boiler und Booster / Legionelle

Bei der Konfiguration der Wenn/Dann Aktionen immer darauf achten, ob die angezeigte Einheit Watt oder Kilowatt ist.

Relais sind mit Boilern verbunden und wurden mit dem Namen "Boiler" versehen.

Das Mosfet wird entsprechend den [Ein- und Ausgänge](/schnittstellen/ein_und_ausgaenge) konfiguriert und trägt den Namen "Booster und Legionelle".

Dauer bis die volle Leistung bezogen wird: 20 Sekunden

Boiler schaltet selbständig ein, wenn eine minimale Temperatur erreicht ist: Ja

Leistung: 

- Boiler: 7 kW


### Konfiguration: Legionelle Ein

Dies muss nur Konfiguriert werden der Legionellenschutz aktivieren werden soll. z.B. 1x Pro Woche am Freitag ab 3:15. Hier wird eine Dauer angegeben, welche 30 Minuten (Default) ist, damit wir sicherstellen können, dass auch wenn eine Datenpaket verloren geht der Zustand auf "Ein" gesetzt wird.

Wenn/Dann Aktion: Legionelle Ein

Wenn Datum & Uhrzeit:

- Typ: Zeitspanne / Jeden Tag

- Von: 03:15

- Wochentage: Alle Wählen

- Bis: 03:45


Dann ein- / ausschalten

- Zähler: EG

- Ausgang Booster und Legionelle: Ein

- Mindestzeit: Nein


![Beispiele Boilersteuerung mit Wenn/Dann-Aktionen – Abbildung 11](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/11.png)

### Konfiguration: Booster und Legionelle Aus

Dies entspricht der Zeit nachdem der Booster (Manuell durch User im smart-me GUI Aktiviert) oder die Legionellenschaltung (Wie oben Konfiguriert) automatisch ausgeschaltet werden soll, weil der Boiler dann aufgewärmt ist. z.B. 90 Minuten. 

Wenn/Dann Aktion: Booster Legionelle Aus

Wenn Schaltzustände:

- Zähler: EG

- Ausgang Booster und Legionelle: Ein

- Mindestzeit: Ja, 90 Minuten


Dann ein- / ausschalten

- Zähler: EG

- Ausgang Booster und Legionelle: Aus


![Beispiele Boilersteuerung mit Wenn/Dann-Aktionen – Abbildung 12](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/12.png)

### Konfiguration: Boiler Ein tabellarische Ansicht (Kurz)

Konfiguration: Boiler Ein

Wenn/Dann Aktion: Boiler Ein

Wenn Messwert grösser/kleiner:

- Zähler: Bilanz 

- Schwellwert: unter 

- Leistung: \-7000 Watt

- Mindestzeit: 1 Minute


Wenn Schaltzustände:

- Zähler: EG

- Ausgang Booster und Legionelle: Ein

- Mindestzeit: Nein


Wenn Ereignis

- Typ: ODER Verknüpfung


Dann ein- / ausschalten

- Zähler: EG

- Boiler: Ein


![Beispiele Boilersteuerung mit Wenn/Dann-Aktionen – Abbildung 13](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/13.png)

### Konfiguration: Boiler Aus tabellarische Ansicht (Kurz)

Konfiguration: Boiler 1 Aus (EG)

Wenn/Dann Aktion: Boiler EG Aus

Wenn Messwert grösser/kleiner:

- Zähler: Bilanz 

- Schwellwert: über

- Leistung: 500 Watt

- Mindestzeit: 1 Minute


Wenn Schaltzustände:

- Zähler: EG

- Ausgang Booster und Legionelle: Aus

- Mindestzeit: Nein


Wenn Ereignis

- Typ: UND Verknüpfung


Dann ein- / ausschalten

- Zähler: EG

- Boiler: Aus


![Beispiele Boilersteuerung mit Wenn/Dann-Aktionen – Abbildung 14](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/14.png)

## Beispiel Solaroptimiert mit Nachheizung und Booster Knopf mit 1 Boiler

Gleich wie das untere "Beispiel Solaroptimiert mit Nachheizung und Booster Knopf mit 3 Boiler (Tabellarische Erklärung)". Du musst nur die Konfiguration für ein Boiler machen.

## Beispiel Solaroptimiert mit Nachheizung und Booster Knopf mit 3 Boiler (Tabellarische Erklärung)

Bei der Konfiguration der Wenn/Dann Aktionen immer darauf achten, ob die angezeigte Einheit Watt oder Kilowatt ist.

Relais sind mit Boilern verbunden und wurden mit dem Namen "Boiler" versehen.

Das Mosfet wird entsprechend den [Ein- und Ausgänge](/schnittstellen/ein_und_ausgaenge) konfiguriert und trägt den Namen "Boiler Booster".

![Beispiele Boilersteuerung mit Wenn/Dann-Aktionen – Abbildung 15](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/15.png)

Dauer bis die volle Leistung bezogen wird: 20 Sekunden

Boiler schaltet selbständig ein, wenn eine minimale Temperatur erreicht ist: Ja

Leistung: 

- Boiler EG: 6 kW

- Boiler DG: 3 kW

- Boiler UG: 2 kW


Um sicherzustellen, dass die Boiler nicht gleichzeitig eingeschaltet werden, werden wir eine Verzögerung einbauen, bevor jeder Boiler eingeschaltet wird. Der Boiler mit der kürzesten Verzögerungszeit hat den grössten Vorteil bei der Nutzung der Sonnenenergie, da er zuerst eingeschaltet wird. In diesem Beispiel werden wir den Boiler mit dem höchsten Verbrauch zuerst einschalten, damit er die Möglichkeit hat, nach einer langen Zeit mit hohem Verbrauch, z. B. mittags, zuerst eingeschaltet zu werden.

### Konfiguration: Boiler Ein tabellarische Ansicht (Kurz)

Hier gehen wird nun noch auf die Konfiguration ein. Ein einfacheres Beispiel ist weiter oben detailliert erklärt.

Durch die Darstellung in Tabellenform lassen sich die Unterschiede auf Desktop Bildschirmen schneller erkennen und damit auch die dahinterstehende Logik.

![Beispiele Boilersteuerung mit Wenn/Dann-Aktionen – Abbildung 16](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/16.png)

Konfiguration: Boiler 1 Ein (EG)

Wenn/Dann Aktion: Boiler EG Ein

Wenn Messwert grösser/kleiner:

- Zähler: Bilanz 

- Schwellwert: unter 

- Leistung: \-6000 Watt

- Mindestzeit: 1 Minute


Wenn Datum & Uhrzeit:

- Typ: Zeitspanne / Jeden Tag

- Von: 22:00

- Wochentage: Alle Wählen

- Bis: 01:00


Wenn Schaltzustände:

- Zähler: EG

- Ausgang Boiler Booster: Ein

- Mindestzeit: Nein


Wenn Ereignis

- Typ: Oder Verknüpfung


Dann ein- / ausschalten

- Zähler: EG

- Boiler Booster: Nichts wählen

- Boiler: Ein


Konfiguration: Boiler 2 Ein (DG)

Wenn/Dann Aktion: Boiler DG Ein

Wenn Messwert grösser/kleiner:

- Zähler: Bilanz 

- Schwellwert: unter

- Leistung: \-3000 Watt

- Mindestzeit: 2 Minuten


Wenn Datum & Uhrzeit:

- Typ: Zeitspanne / Jeden Tag

- Von: 01:00

- Wochentage: Alle Wählen

- Bis: 05:00


Wenn Schaltzustände:

- Zähler: DG

- Ausgang Boiler Booster: Ein

- Mindestzeit: Nein


Wenn Ereignis

- Typ: Oder Verknüpfung


Dann ein- / ausschalten

- Zähler: DG

- Boiler Booster: Nichts wählen

- Boiler: Ein


Konfiguration: Boiler 3 Ein (UG)

Wenn/Dann Aktion: Boiler UG Ein

Wenn Messwert grösser/kleiner:

- Zähler: Bilanz 

- Schwellwert: unter 

- Leistung: \-2000 Watt

- Mindestzeit: 3 Minuten


Wenn Datum & Uhrzeit:

- Typ: Zeitspanne / Jeden Tag

- Von: 02:00

- Wochentage: Alle Wählen

- Bis: 06:00


Wenn Schaltzustände:

- Zähler: UG

- Ausgang Boiler Booster: Ein

- Mindestzeit: Nein


Wenn Ereignis

- Typ: Oder Verknüpfung


Dann ein- / ausschalten

- Zähler: UG

- Boiler Booster: Nichts wählen

- Boiler: Ein


### Konfiguration: Boiler Aus tabellarische Ansicht (Kurz)

![Beispiele Boilersteuerung mit Wenn/Dann-Aktionen – Abbildung 17](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/17.png)

Konfiguration: Boiler 1 Aus (EG)

Wenn/Dann Aktion: Boiler EG Aus

Wenn Messwert grösser/kleiner:

- Zähler: Bilanz 

- Schwellwert: über

- Leistung: 500 Watt

- Mindestzeit: 4 Minuten


Wenn Datum & Uhrzeit:

- Typ: Zeitspanne / Jeden Tag

- Von: 01:01

- Wochentage: Alle Wählen

- Bis: 21:59


Wenn Schaltzustände:

- Zähler: EG

- Ausgang Boiler Booster: Aus

- Mindestzeit: Nein


Wenn Ereignis

- Typ: Und Verknüpfung


Dann ein- / ausschalten

- Zähler: EG

- Boiler: Aus


nKonfiguration: Boiler 2 Aus (DG)

Wenn/Dann Aktion: Boiler DG Aus

Wenn Messwert grösser/kleiner:

- Zähler: Bilanz 

- Schwellwert: über

- Leistung: 500 Watt

- Mindestzeit: 5 Minuten


Wenn Datum & Uhrzeit:

- Typ: Zeitspanne / Jeden Tag

- Von: 05:01

- Wochentage: Alle Wählen

- Bis: 00:59


Wenn Schaltzustände:

- Zähler: EG

- Ausgang Boiler Booster: Aus

- Mindestzeit: Nein


Wenn Ereignis

- Typ: Und Verknüpfung


Dann ein- / ausschalten

- Zähler: DG

- Boiler: Aus


Konfiguration: Boiler 3 Aus (UG)

Wenn/Dann Aktion: Boiler UG Aus

Wenn Messwert grösser/kleiner:

- Zähler: Bilanz 

- Schwellwert: über

- Leistung: 500 Watt

- Mindestzeit: 6 Minuten


Wenn Datum & Uhrzeit:

- Typ: Zeitspanne / Jeden Tag

- Von: 06:01

- Wochentage: Alle Wählen

- Bis: 01:59


Wenn Schaltzustände:

- Zähler: EG

- Ausgang Boiler Booster: Aus

- Mindestzeit: Nein


Wenn Ereignis

- Typ: Und Verknüpfung


Dann ein- / ausschalten

- Zähler: UG

- Boiler: Aus


### Konfiguration: Boiler Booster Reset tabellarische Ansicht (Kurz)

Dieser Abschnitt ist optional. Wenn er nicht konfiguriert wird, bedeutet dies, dass der Booster-Knopf nie zurückgesetzt wird und immer gültig ist.

In diesem Beispiel wird der Knopf "Boiler Booster" nach 300 Minuten, also 5 Stunden, wieder auf "aus" gesetzt.

![Beispiele Boilersteuerung mit Wenn/Dann-Aktionen – Abbildung 18](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/18.png)

Konfiguration: Boiler 1 Booster Reset (EG)

Wenn/Dann Aktion: Boiler EG Booster Reset

Wenn Schaltzustände:

- Zähler: EG

- Ausgang Boiler Booster: Ein

- Mindestzeit: 300 Minuten


Dann ein- / ausschalten

- Zähler: EG

- Boiler: Aus


Konfiguration: Boiler 2 Booster Reset (DG)

Wenn Dann/Aktion: Boiler DG Booster Reset

Wenn Schaltzustände:

- Zähler: DG

- Ausgang Boiler Booster: Ein

- Mindestzeit: 300 Minuten


Dann ein- / ausschalten

- Zähler: DG

- Boiler: Aus


Konfiguration: Boiler 3 Booster Reset (UG)

Wenn/Dann Aktion: Boiler UG Booster Reset

Wenn Schaltzustände:

- Zähler: UG

- Ausgang Boiler Booster: Ein

- Mindestzeit: 300 Minuten


Dann ein- / ausschalten

- Zähler: UG

- Boiler: Aus
