---
title: 'Pico Lastmanagement'
slug: '/produkte/pico-ladestation/pico-lastmanagement'
description: 'Das Pico Lastmanagementsystem'
sidebar_label: 'Pico Lastmanagement'
---
## Das Pico Lastmanagementsystem

Das Lastmanagementsystem von Pico beruht auf zwei grundlegenden Funktionalitäten:

- Pico Lastmanagement Lastgruppen

- Multilevel Lastmanagement Funktionalität


## Pico Lastmanagement (Lastgruppen)

Die Pico Lastgruppe definiert eine Gruppierung von Pico-Hardware welche sich ein Stromkabel oder eine Stromverteilung teilen.
Diese Einstellungen werden auf der Pico-Hardware hinterlegt und gespeichert. 

- Maximaler Stromwert für die Zuleitung (Absicherungswert pro Phase)


Die Informationen zu den Grenzwerten, aktiven Ladungen und verteiltem Strom werden über ein lokales MESH System (2.4Ghz) innerhalb der Pico-Lastgruppe kommuniziert.

Die Lastgruppenfunktionalität erfüllt folgende Aufgaben:

### MESH-Kommunikation

Die Pico-Hardware verfügt über eine MESH-Funktionalität. Diese ermöglicht eine lokale Kommunikation der Picos untereinander auch wenn Wifi oder die Mobile Verbindung zum Internet nicht gewährleistet ist. Das MESH kann auch Ladestationen ohne direkten Accesspoint Zugang mit der Cloud über benachbarte Picos verbinden. Voraussetzung dafür ist aber, dass sie sich zusammen in einer Ladegruppe befinden und ein Wifi vorhanden ist.

Das MESH-Netzwerk kann maximal 200 Ladestationen in einer Lastgruppe unterstützen.

Das MESH übermittelt in jedem Fall die Lastmanagement Werte und Entscheidungen im Bezug auf die Gruppe vom Master zu den anderen Gruppenmitgliedern.

Die Mitglieder des MESH-Netzwerkes benötigen nicht direkten Kontakt zur Master-Pico, sondern können auch über bis zu 5 benachbarte Ladestationen Verbindung zum MESH-Master (A) aufbauen.

Jede Pico kann für bis zu 6 Geräte gleichzeitig ein Distributionspunkt sein.

Der Pico Master wird von der Gruppe selbst passend gewählt und optimiert sich laufend.

Die maximale Reichweite einer Verbindung zwischen den einzelnen Picos beträgt ohne Hindernisse 30 Meter und mit Hindernissen ca. 10m.

Hinweis:
Es sollte darauf geachtet werden, dass sich alle Picos an ein und denselben E-Mobilitätsabgang, in der gleichen Ladegruppe befinden können. (Bauliche Massnahme)

Ist dies aus Lokationsgründen aller Picos nicht möglich, können auch mehrere Ladegruppen auf einem Kabel mit Hilfe des Multi-Level-Lastmanagements verwaltet werden.

Es empfiehlt sich in diesem Fall z.B. 3er, 6er oder 9er Gruppen zu bilden um die 1-Phasenumschaltung möglichst effizient nutzen zu können.

Die Lastgruppenfunktion hat keine Ansprüche an den gleichnamigen Hotspot oder gleich lautende Zugangsdaten für die Verbindung zum Internet. Das MESH ist ein eigenes System und basiert nur darauf, dass die Geräte der Lastgruppe sich untereinander erreichen können.

![Pico Lastmanagement – Abbildung 1](/img/produkte-pico-ladestation-pico-lastmanagement/01.png)

![Pico Lastmanagement – Abbildung 2](/img/produkte-pico-ladestation-pico-lastmanagement/02.png)

### Verhalten bei Verbindungsausfall

Die statischen Pico Ladegruppen können die Ladefunktion bei Internetverbindungsausfall weiterhin gewährleisten. 

Dazu können folgende drei Werte gewählt werden:

- Keine Aktion
    (Keine Regelung, ladende Fahrzeuge laden weiter, mit vorherig freigegebenen Strom, neue Ladungen starten ist aber nicht möglich)

- Minimalstrom:
    Diese Pico fährt auf seine eingestellte Minimalleistung zurück (individuell).

- Max. Strom (pro Gruppe)
    (Einzige kompatible Einstellung mit Multilevel Lastmanagement)
    Die einzelne Pico erhält einen Bruchteil der definierten Ladeleistung der Ladegruppe.
    Die Einzelleistung wird vom Lademanager automatisch auf aktive Ladungen verteilt.


![Pico Lastmanagement – Abbildung 3](/img/produkte-pico-ladestation-pico-lastmanagement/03.png)

### Überlastschutz des Abgangs oder der Zuleitung

Die Lastgruppen erhalten maximal den "Abgesicherten Strom" zur freien Verfügung und Verteilung auf aktive Ladungen. Damit wird sichergestellt, dass die Pico Lastgruppe niemals mehr Strom bezieht als erlaubt ist.

### Ladestromverteilung auf aktive Ladungen

Der zur Verfügung stehende Ladestrom wird automatisch auf aktive Ladungen aufgeteilt. Die verfügbaren Ströme werden so gerecht wie möglich verteilt.

In diesem Beispiel werden 63A auf vier aktive Ladestationen verteilt.
63 A / 4 aktive Ladungen = 15.75A pro Station.

Die Ladeströme werden ganzzahlig den aktiven Ladungen zugewiesen.

![Pico Lastmanagement – Abbildung 4](/img/produkte-pico-ladestation-pico-lastmanagement/04.png)

### Phasenumschaltung und Phasenausgleich

Pico verfügt über eine aktive Phasenumschaltung welche zwei Funktionen erfüllt:

- Phasenausgleich für Lastsymetrie unter aktiven Ladungen

- Verteilung der Energie bei Unterversorgung


Lastsymetrie:

Die Pico identifiziert 1-Phasige Fahrzeuge und legt diese entsprechend auf eine Phase um zu laden. Kommen im Ladeverlauf mehr 1-Phasige Fahrzeuge dazu selektiert die Pico Gruppe automatisch eine noch nicht belastete Phase für dieses Fahrzeug.

Die Symmetrie gehorcht mehreren Regeln welche auch 3-Phasige Fahrzeuge in den 1-Phasenmodus zwingen kann falls die Asymmetrie zu gross wird. 

Unterversorgung:

Die Pico nützt den verfügbaren Strom 3-phasig, solange das eingestellte 3-phasige Minimum gehalten werden kann, z.B. 3-phasig 6A.
(Die Schwelle kann über den Minimalstrom der einzelnen Picos beeinflusst werden.)

Kommt ein zusätzliches Fahrzeug hinzu und die 3-phasige Ladung beim eingestellten Minimalstrom kann nicht mehr allen Fahrzeugen zugeführt werden, schalten nach und nach Ladestationen in den 1-phasigen Lademodus, um höchst mögliche Effizienz zu gewährleisten.

Es ist demnach möglich, dass in einer Ladegruppe 3-phasige Ladungen und 1-phasige Ladungen parallel stattfinden.

Die aktiven Ladungen werden gleichmässig über die drei Phasen verteilt und der verfügbare Strom aufgeteilt zur Verfügung gestellt. 

Berücksichtigt werden vom Algorithmus entsprechend auch pausierte oder beendete Ladungen.

Pausierte Ladungen reservieren den minimal nötigen Strom um z.B. Fahrzeugstandheizungsfunktionen zu gewährleisten.

Hinweis:
Die Verfügbarkeit von minimal 6A ist ein Anspruch des Fahrzeuges und muss ladestationsseitig jederzeit gewährleistet werden. Dies unabhängig davon ob ich die Station im 3-phasigen oder 1-phasigen Betrieb befindet. Fällt der Wert darunter, stoppt das Fahrzeug die Ladung eigenmächtig oder das Fahrzeug beginnt gar nicht erst zu laden.

Einige ältere Fahrzeuge unterlassen den Ladestart sogar wenn weniger als 8A zur Verfügung stehen.

Tipp: Öffentliche Stationen für Besucher oder Tankstellen mit dem Minimum von 8A konfigurieren.



![Pico Lastmanagement – Abbildung 5](/img/produkte-pico-ladestation-pico-lastmanagement/05.png)

Situation: Der Verfügbare Strom reicht nicht um alle Fahrzeuge 3-phasig mit dem Minimum zu versorgen.
\--> Die Ladestationen werden alle auf 1-phasiges Laden umgeschaltet.

![Pico Lastmanagement – Abbildung 6](/img/produkte-pico-ladestation-pico-lastmanagement/06.png)

Situation: Der Verfügbare Strom würde für alle Geräte gleichzeitig reichen, eine Pausierte Ladung würde aber zu viele Energie binden. Die Ladestation mit dem fertig geladenen Fahrzeug wird auf 1-phasig gestellt um Kapazitäten an die anderen 3-phasigen Ladungen abzugeben.

## Multilevel Lastmanagement (MLM)

Das Multilevel Lastmanagement ermöglicht die dynamische Steuerung von Pico Ladegruppen über Arealanschlüsse, Distribution, Hausanschlüsse und Unterverteilungen hinweg.

Es ermöglicht zusätzlich Priorisierungen von Ladegruppen, sowie Solaroptimierungsfunktionen.

[Mehr erfahren](/konfiguration/multilevel-lastmanagement)
