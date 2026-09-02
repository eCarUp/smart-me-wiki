---
title: 'Multilevel Lastmanagement'
slug: '/konfiguration/multilevel-lastmanagement'
description: 'Webinar Multilevel Lastmanagement (50 Min)'
sidebar_label: 'Multilevel Lastmanagement'
---
<Video src="YiiACL00jko" title="Video" />

Webinar Multilevel Lastmanagement (50 Min)

### Technische Voraussetzung zur Nutzung des Multilevel Lastmanagements

- Pico Firmware Version 0.0.25 oder höher --> [Firmware upgrade durchführen](/konfiguration/firmware-update)

- Alle Wenn/Dann-Regelungen mit Pico sind gelöscht worden um keine gegenteiligen Befehle zum MLM zu senden.

- Stand: 12.03.2024
    Kein Anspruch für Lastabwurf über Telstar Eingangskontakte --> Release der Lösung in MLM folgt.

- Lastmanagement geht nur mit Telstar CT / Telstar 80A oder Nimbus


## Dynamisches Multilevel Lastmanagement

Das dynamische Multilevel Lastmanagement koordiniert die begrenzenden und dynamischen Fähigkeiten der einzelnen Lastgruppen auf Hausanschluss- und Arealebene.

Die Aufgabe besteht darin die noch freien Stromkapazitäten an jedem Referenzpunkt den untergeordneten Lastgruppen zur Verfügung zustellen und so die Verzweigstellen vor Überlast zu schützen.

Beispiele für wichtige Verzweigpunkte:

- Arealanschluss

- Hausanschluss

- Unterverteilungszuleitung

- Garagenabgang


Im gleichen Zug wird beim Multilevel Lastmanagement die Solaroptimierung ermöglicht und Funktionen zur Lastspitzenglättung offeriert.

Grenzen des dynamischen Multilevel Lastmanagements:

- Max. 1000 Geräte (Ladestationen + Referenzzähler)

- Max. 50 Ast-Verzweigungen (Referenzpunkte)


![Multilevel Lastmanagement – Abbildung 1](/img/konfiguration-multilevel-lastmanagement/01.png)

### Überlastschutz der Verzweigstellen (Arealanschluss, Unterverteilungen, Hausanschluss)

Bei allen erstellten Ästen im Multilevel Lastmanagement können maximale Stromwerte definiert werden. Diese agieren als absolute Obergrenze des Strombezugs und entsprechen dem Absicherungswert der Zuleitungen.

Ein Ast kann nur gemäss folgendem Schema existieren:

- Ast mit "ungemessenen Lasten" :
    Es befinden sich weitere Verbraucher oder Produzenten, welche nicht ausschliesslich Pico-Gruppen sind, hinter diesem Ast. Ein Referenzzähler wird zur Ermittlung benötigt.

- Ast ohne "ungemessene Lasten", virtuell:
    Die nachfolgenden Verbraucher bestehen ausschliesslich aus Pico-Lastgruppen oder aus "Ästen mit ungemessenen Lasten" und entsprechendem Referenzzähler.
    Der Gesamtstrom kann daher aus der Summe dieser verfügbaren Messungen gebildet werden und entspricht 100% des zu kontrollierenden Stromes.

    Einsatzfelder:
    \- Begrenzung des Gesamtarealstromes mittels gemessenen Unterverteilungen (Einsparen eines Arealzählers)
    \- Mehrere abzweigende Flachbandkabel von einem abgesicherten Abgang aus beschützen


![Multilevel Lastmanagement – Abbildung 2](/img/konfiguration-multilevel-lastmanagement/02.png)

![Multilevel Lastmanagement – Abbildung 3](/img/konfiguration-multilevel-lastmanagement/03.png)

Virtueller Ast (violett) begrenzt auf Basis Ast mit ungemessenen Lasten und Picogruppen.

### Beispielaufbau einer Überbauung mit MLM

![Multilevel Lastmanagement – Abbildung 4](/img/konfiguration-multilevel-lastmanagement/04.png)

### Solaroptimierung

Die Solaroptimierung ermöglicht eine effiziente Zuteilung überschüssigen Stromes an die untergeordneten Pico-Ladegruppen. Voraussetzung dafür ist mindestens ein "Ast mit ungemessenen Lasten" und entsprechendem Referenzzähler.

Die Optimierung kann nur 1x Seriell (Baum oben nach unten) erfolgen oder mehrfach in parallelen Verästelungen.

Damit kann eine Solaroptimierung auf das ganze Areal oder bloss gebäudespezifisch umgesetzt werden.

Beispiel:

- Arealoptimierung: Solaroptimierung aktiv auf dem Ast, Referenz auf den Arealzähler oder virtuell erstellter Ast auf Basis der gemessenen Unteräste.

- Gebäudeoptimierung: Solaroptimierung aktiv auf mehreren Ästen mit Referenz auf die jeweiligen Hauszähler.


Bei der Solaroptimierung auf den Arealanschluss, steht der Ladeinfrastruktur in Haus A auch produzierter Überschuss aus Haus B zur Verfügung.

![Multilevel Lastmanagement – Abbildung 5](/img/konfiguration-multilevel-lastmanagement/05.png)

### Minimaler Ladestrom: Indirekte Priorisierung und Lastspitzenglättung

Jede einzelne Pico-Lastgruppe kann mit einem zeitabhängigen minimalen Ladestrom versehen werden.

Die Einstellung erfolgt flexibel pro Stunde des Tages.

Diese Funktion ermöglicht einen minimalen Ladestrom unabhängig von anderen parallelen Optimierungen zur Verfügung zu stellen.





Einzig eine Übertretene Stromlimitierung eines Astes würde darauf gegenteiligen Einfluss haben.

Sofern der minimale Ladestrom gewährleistet werden kann, limitiert diese den direkten Netzbezug auf das eingestellte Mass. 

Ist eine Solaroptimierung vorhanden kann der verfügbare Ladestrom aber über das eingestellte Minimum steigen und wird entsprechend erhöht.

Einsatzbeispiel:

Ladestrom während Produktionszeiten verringern um Lastspitzen zu reduzieren.

Ladestrom während Mittagszeit reduzieren um Lastspitzen zu reduzieren.

Ladestrom über Tag reduzieren um eine höhere Solarstrompriorisierung zu erreichen.

Bevorzugen der Aussenparkplatzgruppen vor Tiefgaragenparkplätzen (Gruppenpriorisierungen)



Priorisierung

Die Einstellung des verfügbaren Minimalstromes einer Gruppe setzt eine gewisse Priorität gegenüber den andern Ladestationsgruppen voraus. Die Ladestationsgruppe mit dem höheren verfügbaren Minimalstrom zur gegebenen Zeit wird vom Algorithmus immer bevorzugt behandelt.

Beispiel:

26 A pro Phase stehen aktuell im MLM zur Verteilung zur Verfügung:
Ladegruppe A : Minimalstrom = 10A
Ladegruppe B: Minimalstrom = 20A

Ladegruppe B wird zuerst mit 20A versorgt und Ladegruppe A erhält den Rest.

![Multilevel Lastmanagement – Abbildung 6](/img/konfiguration-multilevel-lastmanagement/06.png)

![Multilevel Lastmanagement – Abbildung 7](/img/konfiguration-multilevel-lastmanagement/07.png)

### Verhalten des Multilevel Lastmanagements bei Internetausfall

Alle Pico Ladestationen müssen mit dem Verbindungsausfallsetting "Max. Strom (pro Gruppe)" eingestellt sein. Die anderen beiden Modi werden nur für den Einzelbetrieb zugelassen.

Funktion:
Ladegruppen, welche von Internetverlust betroffen sind, werden auf das von der Gruppe definierte Mass zurück geregelt. Die Verteilung des Stromes erfolgt automatisch durch den Lademanager und berücksichtigt dabei die aktiven Ladevorgänge.
Das Multilevel Lastmanagement geht dabei davon aus, das die verlorenen Äste den definierten Gruppenstrom beziehen und ziehen diese vom verfügbaren Reststrom ab.

Der funktionstüchtige Teil der Installation mit aktiver Internetverbindung operiert weiter im Normalmodus mit dieser definierten Einschränkung.

![Multilevel Lastmanagement – Abbildung 8](/img/konfiguration-multilevel-lastmanagement/08.png)

### Lastabwurf mit MLM

Der Lastabwurf kann über verschiedene Varianten gelöst werden mit Hilfe des
RSE Signals des Energieversorgers.

- Rückseitige Pico Hardware Eingänge für Übertragung an eine Pico Gruppe.

- Signal auf Zählereingänge und Übertragung via MLM an alle Lastgruppen.


Mehr dazu unter 

[Konfiguration Lastabwurf mit MLM](/konfiguration/multilevel-lastmanagement/mlm-konfigurieren#konfiguration-des-lastabwurfs)

[Konfiguration Lastabwurf mittels externen Eingängen](/produkte/pico-ladestation#lastabwurf-externe-eingänge)

![Multilevel Lastmanagement – Abbildung 9](/img/konfiguration-multilevel-lastmanagement/09.png)

Hardwareinputs Pico

![Multilevel Lastmanagement – Abbildung 10](/img/konfiguration-multilevel-lastmanagement/10.png)

Cloud basierter Lastabwurf (MLM)

### Grenzwerte des Multilevel Lastmanagements

Maximale Anzahl Picos und Referenzzählerpunkte : 1000 Stück

Maximale Anzahl virtueller und Hardware Referenzpunkte: 50 Stück, 6 Stück in Serie

Maximale Grösse der einzelnen Ladestationsgruppe: 200 Ladestationen

Minimale Anzahl Picos pro Ladestationsgruppe: 1 Stück

Minimale Anzahl Referenzpunkte im MLM: 1 Stück (Hardware oder Virtuell)

Maximale Ladegruppenanzahl: 60 Gruppen


Beispiele Minimalauslegungen:

- 1 Abgang mit 1-200 Ladestationen inkl. 1 Referenzpunkt


Beispiele einer typischen Maximalauslegung:

- 60 Abgänge mit je 16 Ladestationen inkl. 8 Referenzpunkten erstellt werden. (Grosse Überbauungen mit ZEV)


- 6 Abgänge mit je 150 Stationen inkl. 50 Referenzpunkten (öffentliche Parkplatzkomplexe)

- 4 Abgänge mit je 200 Stationen inkl. 50 Referenzpunkten (öffentliche Parkplatzkomplexe)


## Konfigurieren des MLM

[Mehr erfahren](/konfiguration/multilevel-lastmanagement/mlm-konfigurieren)
