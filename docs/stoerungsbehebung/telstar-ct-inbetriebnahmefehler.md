---
title: 'Telstar CT Inbetriebnahmefehler'
slug: '/stoerungsbehebung/telstar-ct-inbetriebnahmefehler'
description: 'Auf dieser Seite werden häufige Fehler beschrieben, welche bei der Inbetriebnahme der Telstar CT auftreten können.'
sidebar_label: 'Telstar CT Inbetriebnahmefehler'
---
Auf dieser Seite werden häufige Fehler beschrieben, welche bei der Inbetriebnahme der Telstar CT auftreten können. Es wird beschrieben wie diese Fehler zu prüfen und zu beheben sind.

## Leistung stimmt nicht mit EW Zähler überein.

Folge zur Fehlerbehebung den nachfolgenden Punkten.

### 1\. Prüfe das Wandlerverhältnis

Dieser Ansatz ist vor allem dann in Betracht zu ziehen, wenn das gemessene um ganzzahlige Faktoren kleiner ist (z.B. Ist: 4W, Soll: 240W (Faktor 60))

- Lösung: im smart-me Portal -> Zähler wählen -> auf das Zahnrad -> Allgemeine Einstellungen -> Verhältnis eintragen und speichern.

- smart-me empfielt das Wandlerverhältnis gemäss Angabe auf dem Wandler einzustellen, wie es auf z.B. 300A/5A --> 300:5

- Wichtig: Die historischen Daten werden nicht angepasst. 


### 2\. Prüfe ob die Abweichung des EW-Zählers und des smart-me Zählers kleiner gleich 2% ist.

Dieser Ansatz ist vor allem dann in Betracht zu ziehen, wenn die Verbräuche der beiden Meter relativ eng beieinander liegen.

Unsere Geräte haben 1% Messgenauigkeit nach MID Standard. Dazu kommt die Abweichung des Wandlers von 0,5-1%. Diese Abweichungen sind in der Genauigkeitsklasse B zulässig. Um eine maximal zulässige Differenz, aufgrund der zulässigen Toleranzen zu eruieren, kann folgende Faustformel angewendet werden.

Faustformel: maximal zulässige Differenz \[kWh\] = EW-Zählerenergie \* (Messfehler Telstar CT in % + Messfehler Wandler in %)

Beispiel:
EW-Zähler: Verbrauch 1000kWh
Telstar CT: Verbrauch 992kWh

maximal zulässige Differenz \[kWh\] = EW-Meterenergie \* (Messfehler Telstar CT in % + Messfehler Wandler in %) = 1000kWh \* (0.01 + 0.01) = 20kWh

Der Messwert des Telstar CT darf im Bereich von 1000kWh +/- 20kWh liegen, mit 992kWh entspricht das dem zu erwartenden Fehler

Achtung: Der Verbrauch ist abhängig von der Messdauer. Für obige Abschätzung muss bei beiden Zählern der gleiche Zeitraum, in welchem die Energie verbraucht wurde, gewählt werden.  Der Zählerstand auf dem EW-Zähler muss nicht zwingend gleich sein, wie der des Telstar CT. 

### 3\. Prüfe ob die Klemmen beim Messklemmenblock geschlossen sind.

Dieser Ansatz ist vor allem dann in Betracht zu ziehen, wenn die Leistungen verdächtig klein ausfallen (halbe erwartete Leistung oder kleiner).

- Bei einigen Projekten wird nach der Installation aus Versehen vergessen den Messklemmenblockseitigen Kurzschluss wieder zu entfernen.
    Ungeschlossene Klemmen beim Messklemmenblock lassen trotzdem einen geringen Stromfluss zu, dieser wird vom Zähler gemessen, entspricht aber nicht dem richtigen Teilungsverhältnis. (Parallelverbindung im Messklemmenblock zur Messstelle im Zähler)


### 4\. Prüfen ob der Wandler über Kurzschlussbrücke verfügt.

Dieser Ansatz ist vor allem dann in Betracht zu ziehen, wenn die Leistungen verdächtig klein ausfallen (halbe erwartete Leistung oder kleiner).

- Einige Wandler, wie z.B. der SRT01605A von Hager, sind mit Kurzschlussbrücken ausgestattet, die nach dem Zusammenbau und der Verdrahtung der Wandler, wie in der Bedienungsanleitung beschrieben, entfernt werden müssen.


![Telstar CT Inbetriebnahmefehler – Abbildung 1](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/01.png)

### 5\. Prüfe die Flussrichtung der Stromwandler.

Dieser Ansatz wird vor allem dann verfolgt wenn Phasenleistungen negativ ausfallen, obwohl das nicht zu erwarten ist.

Alle Wandler besitzen eine Flussrichtung, welche mit einem Pfeil gekennzeichnet ist.

1.  Die Pfeilspitze zielt immer in Richtung: 


- Verbraucher und Speicher: Wohnungen, E-Mobilität, Heizungen und Batterien

- Produzenten: Solar Inverter und Generatoren


Die Rückseite des Pfeils (flach) zielt immer in Richtung:

- Netz: Netzanschluss, Distribution oder Hausverteilung



2.  Am Input "I IN" wird das Wandler Positiv und am "I OUT" das Wandler Negativ der jeweiligen Phase angeschlossen.




Was den Erwartungen entspricht:

- Beim PV-Zähler musst du bei Produktion negative Ströme und Leistungen vorfinden. 
    Wird gerade nicht aktiv produziert, finden sich in der Regel positive Ströme und Leistungen. (Diese Situation ist aber nicht eindeutig)

- Reine Verbrauchszähler besitzen ausschliesslich positive Vorzeichen bei den Strömen und Leistungen.

- Der Bilanzzähler kann situationsbedingt unterschiedliche Vorzeichen pro Phase aufweisen. 

    - Bei Zukauf sind diese im Normalfall positiv (Solaranlage AUS zum Test)

    - Bei Lieferung sind diese im Normalfall negativ (Solaranlage AN zum Test, Abweichungen auf Einzelphasen sind möglich)

    - Die Gesamtleistung der Bilanz muss aber der Produktion + dem Verbrauch entsprechen.
        (Prüfen via Lastprofil oder über Visualisierung "Energiefluss Einfach". Nur PV Zähler und Gesamtverbrauch hinterlegen um die Bilanz künstlich zu berechnen, vergleiche dann die Werte in der Visualisierung zur Aktiven Leistung des Bilanzzählers)


![Telstar CT Inbetriebnahmefehler – Abbildung 2](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/02.png)

![Telstar CT Inbetriebnahmefehler – Abbildung 3](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/03.png)

### 6\. Prüfe die Phasenverschiebungen mit dem Cos Phi Wert pro Phase

Liegt der Cos Phi Wert mehrerer Phasen stetig unter dem Wert von 0,5 besteht die Möglichkeit einer vertauschten Phasenspannung.

Der Zähler misst dann auf dem Eingang U Phase 1 die Spannung von L1, aber I IN und I OUT der Phase 1 misst den Strom von L2.

Merke: Ist eine Phase vertauscht, so sind immer gleich zwei Phasen vertauscht!

Dies führt zu Cos Phi-Werten rund um den Wert von 0 bis 0,6 (Tendenz unter 0,5)

- Prüfe die Verbindungen aller Spannungen und Ströme auf ihre korrekte Verdrahtung.

- Prüfe die Flussrichtung der Wandler


Sehen diese Zahlen gut aus und liegen alle weit über 0,5 und haben alle vorherigen Schritte durch exerziert, bleibt noch die Prüfung der Blindleitungen als letzte Option. Diese behandelt mehrfache Vertauschungen von Flussrichtungen und Anschlüssen.

![Telstar CT Inbetriebnahmefehler – Abbildung 4](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/04.png)

### 7\. Prüfe die Blindleistungsregister des Zählers

Falls die Messwerte weiterhin unglaubwürdig erscheinen, wurden möglicherweise Spannungsabgriffe und Strommessung vertauscht. Ein Hinweis darauf können uns die Blindleistungsregister geben.

Nehmen wir an, dass zwei Phasenspannungen auf die falschen Eingänge gebracht und zusätzlich auch noch einzelne Wandler in falscher Flussrichtung angeschlossen wurden, wird die Analyse auf aktiven Leistungsdaten sehr schwierig bis nahezu unmöglich.

Um diese Blindenergieregister anzuzeigen, muss die Messung aktiviert sein. Aktivieren der Blindenergiemessung: Zähler auswählen --> Hardwarekonfiguration (Zahnräder) --> Allgemeine Einstellungen --> Blindenergie aktivieren (Ja)

In der Betrachtung eines EFH/MFH mit Solaranlage, sollte die Reihenfolge der Zählerstände der Quadranten in den meisten Fällen so aussehen:

- Q1: Bezug Induktive Blindenergie:
    Motoren, Lüftungen
    \--> hohe Werte (weit höher als Q2) 

- Q2. Lieferung induktiver Blindenergie:
    Drehstromgeneratoren wie Dieselgeneratoren oder Windräder
    \--> Niedrigster Wert von allen 

- Q3: Lieferung kapazitiver Blindenergie:
    Produzenten wie PV-Anlagen, Batterien oder Bidirektionale Ladestationen
    (Produktion muss aber bereits stattgefunden haben)
    \--> Hoher Wert (weit höher als Q2, oft auch als Q1) 

- Q4: Bezug Kapazitiver Blindenergie:
    Speichersysteme, Inverter, Kompensationsanlagen, E-Fahrzeuge, Lasten in Wohnungen
    \--> Mittlere bis hohe Werte (weit höher als Q2, oft auch als Q1) 


Q1 und Q4 lassen sich schwer ohne genauere Kenntnis beurteilen. In einem MFH mit Solaranlage lassen sich aber einfach Q2 und Q3 beurteilen. Ist die Entwicklung nicht mit der Tendenz nach obigem Beispiel mit Q2 und Q3 liegt vermutlich folgendes vor:

- Mindestens eine vertauschte Spannung und Strom

- Mindestens einen Wandler mit falscher Flussrichtung oder gekreuzte Kabel zum Zähler


Mögliche Fehlerquellen:

- Einbauflussrichtung der Wandler

- Vertauschen der Abgriffe der Wandler

- Falschverdrahtung auf dem Messklemmenblock

- Falsche Abnahme vom Messklemmenblock

- Falschverdrahtung bei Ankunft auf dem Zähler (I IN / I OUT)


![Telstar CT Inbetriebnahmefehler – Abbildung 5](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/05.png)

Beispiel eines Bilanzzählers eines grossen MFH mit Solaranlage
\+ E-Mobilität

![Telstar CT Inbetriebnahmefehler – Abbildung 6](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/06.png)

Beispiel eines Bilanzzählers in einem Einfamilienhaus mit Solaranlage

### 8\. Prüfe die Konnektoren und die Leitungswiderstände des Wandlerausgangs

Dieser Ansatz ist in Betracht zu ziehen, wenn die Vorzeichen der Leistungen und Ströme passen, aber der Wert der Ströme unnatürlich klein ausfällt.

- Jeder Wandler besitzt eine Ausgangsleistung in Volt-Ampere S \[VA\]

- Die Leitungswiderstände dürfen nicht grösser sein als das der maximale Sekundärstrom mit der vorhandenen Leistung fliessen kann.


Formel:  max. Leitungswiderstand R = S / Sekundärstrom I^2

Beispiel: 200A / 5A Wandler mit 1VA Ausgangsleistung

max. R = 1VA/(5A\*5A) = 0.04 Ohm

Damit darf der gemessene Widerstand zwischen Wandler Anschluss positiv und negativ nicht grösser sein als 0.04 Ohm.
Es soll auch nicht zu knapp ausfallen, der Wechselstromwiderstand bei 50Hz liegt leicht höher als der Gleichstromwiderstand.

Hinweis: 

- Die Messung muss mit entferntem Wandler stattfinden!
    Sonst wird der Leitungswiderstand der Wandlerspule gemessen und nicht Hin- und Rückleitung.


Was kann ich tun, wenn der Leitungswiderstand zu gross ausfällt?

1.  Alle Konnektoren überprüfen, nachziehen und erneut messen.

2.  Leitungsquerschnitt vergrössern (üblich sind 2.5mm2)

3.  Leitungen kürzen

4.  Wandler durch einen Leistungsfähigeren Wandler tauschen z.B. 5VA


![Telstar CT Inbetriebnahmefehler – Abbildung 7](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/07.png)

## Dreiphasen Drehstromsystem und den Wandlerzähler verstehen

### Einleitung

Die folgende Betrachtung soll das Messverhalten eines Wandlerzählers im Fehlerfall beleuchten. Die Betrachtung wird mit einfachen Sinusspannungen und Strömen gebildet, um das Thema nicht unnötig zu verkomplizieren. Wichtig zu wissen ist aber, dass Ströme beinahe niemals eine Sinusform aufweisen und die nachfolgende Phasenverschiebung bei Falschverdrahtung leichte Abweichungen von dieser Betrachtung aufweisen wird.

### Allgemeines

1.  Die drei Phasen Spannungen und Ströme sind zueinander zeitlich versetzt um eine Drehbewegung in einem Motor erzeugen zu können.

2.  Der Strom ist eine Folge der angelegten Spannung und wird durch das Verhalten der Ladung bestimmt.


Der oben erwähnte Zeitversatz entspricht genau 120° von einer gesamten Drehung von 360°.

- Phase 1 startet bei 0°

- Phase 2 startet bei 120°

- Phase 3 startet bei 240°


Bei 50 Hz entspricht 360° = 20ms oder 1/Frequenz = Periodenzeit
Die zeitliche Verschiebung zwischen einzelnen Phasen ist dementsprechend: 20 ms/360° \* 120° = 6,666 ms

### Was macht der Wandlerzähler?

Ein Wandlerzähler interpretiert jede Phasenspannung, jeden Phasenstrom und dessen Phasenleistung individuell zu den anderen beiden und summiert die drei resultierenden Phasenleistungen zu einer 3-Phasen Gesamtleistung. 

Summe P = Phasenleistung 1 + Phasenleistung 2 + Phasenleistung 3

Wären einzelne davon negativ (z.B. Stromwandler bei einer Phase besitzt eine verkehrte Flussrichtung), resultiert eine kleinere Leistung als erwartet.

![Telstar CT Inbetriebnahmefehler – Abbildung 8](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/08.png)

Oszilloskop Ansicht eines 3-Phasensystems

### Phasenspannung und Phasenstrom sind korrekt angeschlossen (U1 / I1)

Betrachten wir hier eine korrekt angeschlossene Phase. Die Spannung L1 (U1) und der Strom L1 (I1) werden gemessen (Wandler ist in korrekter Flussrichtung angeschlossen).

Beide Halbwellen resultieren in einer positiven Leistung, da Spannung und Strom in der jeweiligen Halbwelle das gleiche Vorzeichen haben.

Die gemessene Leistung entspricht korrekterweise 6500W (rot).

![Telstar CT Inbetriebnahmefehler – Abbildung 9](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/09.png)

### Wandlerflussrichtung bei einer Phase vertauscht

Beispiel: Solaranlage

Die Solaranlage produziert eine Leistung von 30kW --> Jede Phase 10kW. (Solaranlagen Produzieren immer möglichst ausgeglichen auf den drei Phasen)
Ist alles korrekt sind diese 30kW auch auf dem Messgerät zu lesen.

Ist der Wandler der Phase 1 in verkehrter Flussrichtung, resultiert eine negative Phasenleistung für Phase 1.

Summe P = -10kW + 10kW + 10kW = 10kW

Die Gesamtleistung entspricht nur noch 1/3 der erwarteten Leistung.

### Phasenspannung und Phasenströme sind vertauscht worden

Hinweis: Wurde ein Phasenstrom oder Phasenspannung am falschen Eingang des Zählers angeschlossen sind immer gleich zwei Phasen betroffen!

Phasenspannung und Phasenstrom sind vertauscht worden (U1 / I2) werden auf Phase 1 gemessen

Betrachten wir hier den Ausgang einer Messung, wenn dem Zähler zwar die richtige Spannung L1 (U1) aber der falsche Strom L2 (I2) zugeführt wird. 

Wir vermischen also die Spannung der Phase 1 mit dem Strom der Phase 2.

Die Phasenleistung wird negativ. Die Phasenverschiebung von 120° resultieren im Messgerät in einer gemessenen Phasenverschiebung von nur 60° und wird nun mit einem Powerfaktor von 0,5 angezeigt. 

Resultat: Negative und halbe Leistung der erwarteten 6500 W)

P = -3250W (rot)

Hinweis: Hier muss in Betracht gezogen werden, dass bei einem realen System der Powerfaktor höher oder tiefer als 0.5 liegen kann (z.B. 0,3 bis 0,7). Verursacht dadurch, dass der Powerfaktor auf der Phase 1 auch bei korrekter Verdrahtung und Messung bereits zwischen 0,8 und 1 liegt.

![Telstar CT Inbetriebnahmefehler – Abbildung 10](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/10.png)

Phasenspannung und Phasenstrom sind vertauscht worden (U1 / I3)

Betrachten wir hier den Ausgang einer Messung, wenn dem Zähler zwar die richtige Spannung aber der falsche Strom zugeführt wird. 

Wir vermischen die Spannung der Phase 1 mit dem Strom der Phase 3.

Die Phasenleistung wird negativ. Die Phasenverschiebung von 120° resultieren im Messgerät in einer gemessenen Phasenverschiebung von nur -60° und wird nun mit einem Powerfaktor von 0,5 angezeigt. (Der Powerfaktor kann im Messgerät nur Werte von 0 bis 1 annehmen, obwohl nun cos (Phi) = -0,5 korrekt wäre)

Resultat: Negative und halbe Leistung der erwarteten 6500 W)

P = -3250W (rot)

Hinweis: Hier muss in Betracht gezogen werden, dass bei einem realen System der Powerfaktor höher oder tiefer als 0.5 liegen kann (z.B. 0,3 bis 0,7). Verursacht dadurch, dass der Powerfaktor auf der Phase 1 auch bei korrekter Verdrahtung und Messung bereits zwischen 0,8 und 1 liegt.

![Telstar CT Inbetriebnahmefehler – Abbildung 11](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/11.png)
