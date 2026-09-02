---
title: 'Konfiguration Multilevel Lastmanagement'
slug: '/konfiguration/multilevel-lastmanagement/mlm-konfigurieren'
description: 'Konfigurieren eines dynamischen Multilevel-Lastmanagements (MLM)'
sidebar_label: 'Konfiguration Multilevel Lastmanagement'
---
## Konfigurieren eines dynamischen Multilevel-Lastmanagements (MLM)

Die Konfiguration eines Multilevel Lastmanagements erfolgt im Bereich "Multilevel Lastmanagement" in der Hauptnavigation

Die Funktion ermöglicht:

- Dynamische Steuerung mehrerer statischer Pico Ladegruppen

- Begrenzung der Ladeleistungen auf Referenzpunkte innerhalb der Installation oder Areals

- Solaroptimierungen

- Lastspitzenreduktionen

- Ladegruppenpriorisierungen


![Konfiguration Multilevel Lastmanagement – Abbildung 1](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/01.png)

### Begriffsdefinition

Das Multilevel Lastmanagement kann als ein Baum angesehen werden, wobei es folgende Begrifflichkeiten und Verwendungen gibt:

- Stamm (Hauptanschlusspunkt der Installation)

- Äste (Begrenzende Stellen wie Verzweigungen, Hausanschlüsse, Unterverteilungen, Summenabgänge)

- Blätter (statische Pico Ladegruppen)




Der Stamm sowie die Äste können mehrere Funktionen übernehmen:

- Strombegrenzung (maximale Absicherung)

- Solaroptimierung AN oder AUS

- Nicht gemessene Lasten vorhanden (aktiv oder inaktiv)




Nicht gemessene Lasten:

Eine nicht gemessene Last entspricht einem Produzenten oder Verbraucher welcher nicht einer Pico Ladestationsgruppe entspricht. Um diese Produktion oder Last dynamisch berücksichtigen zu können, muss eine Meterhardware als Referenz zur Verfügung gestellt werden. (Gemessener Ast)

Der Ast kann auch statisch begrenzt werden ohne einen Referenzmeter, muss aber auf ein funktionelles Maximum, unter Berücksichtigung der Grundlast, bei der Absicherung beschränkt werden.

Typische Äste mit nicht gemessenen Lasten: 

- Hausanschlüsse (Wohnungen, Solaranlagen, Batteriespeicher, Aussenbeleuchtung)

- Unterverteilungen (Vernetzung von mehreren Gebäudekomplexen, UV Ost, UV West,...)

- E-Mobilitätsabgänge (Pico Standbyverbrauch und Garagenbeleuchtung)


![Konfiguration Multilevel Lastmanagement – Abbildung 2](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/02.png)

![Konfiguration Multilevel Lastmanagement – Abbildung 3](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/03.png)

### Ast hinzufügen oder Löschen

Hinzufügen:

Wähle den Stamm oder Ast aus und erstelle mittels "Ast hinzufügen" einen zusätzlichen Ast oder Verzweigung.

Löschen:

Mit der Auswahl des entsprechenden Astes und der Funktion "Löschen" werden der gewählte Ast, sowie alle daran hängenden Äste gelöscht.

Damit das Nachfolgende erhalten bleibt, können die Äste und Gruppen via Drag & Drop Funktion vorgängig an einen anderen Ast oder Stamm angegliedert werden.





![Konfiguration Multilevel Lastmanagement – Abbildung 4](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/04.png)

### Ladestationsgruppen dem Baum hinzufügen

Die noch nicht zugewiesenen und korrekt konfigurierten Ladestationsgruppen für das MLM befinden sich auf der Rechten Seite.

Diese können via Drag & Drop Funktion den Ästen angegliedert werden und auch innerhalb der Konfiguration per Drag & Drop verschoben werden.



Hinweis:
Voraussetzung für die Verwendung im MLM ist, dass die Verbindungsausfalleinstellung auf "Max. Strom (pro Gruppe)" konfiguriert ist.

Diese kann auf einer Pico-Ladestation in der "Konfiguration" angepasst werden.



![Konfiguration Multilevel Lastmanagement – Abbildung 5](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/05.png)

![Konfiguration Multilevel Lastmanagement – Abbildung 6](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/06.png)

### Solaroptimierung und Minimalstrom pro Ladegruppe

Astkonfiguration:

Die Solaroptimierung ist möglich 1x auf dem Stamm (Arealoptimiert) oder mehrfach parallel auf Äste mit aktiven ungemessenen Lasten z.B. Hausanschlüsse.

Entsprechend der Wahl, wird der Solarüberschuss auf alle Ladestationsgruppen oder nur auf einen Teil der Ladestationsgruppen optimiert.





Gruppenkonfiguration:

Damit die Solaroptimierung auch die entsprechende Wirkung erhält, muss den zu optimierenden Stationsgruppen zeitweise ein verminderter Minimalladestrom zugewiesen werden.
Dieser Minimale Ladestrom, wird auf der entsprechenden Ladegruppe (Gruppenkonfiguration) definiert und entspricht dem maximal möglichen Netzbezug für die Ladegruppe in den definierten Stunden.

Gleichzeitig kann mit der Einstellung des Minimalladestroms auch Lastspitzenbrechung praktiziert werden.

Jede Gruppe kann auf unterschiedliche Weise konfiguriert werden.

Gruppen mit höherem Minimal Ladestrom werden priorisiert bei der Verteilung von verfügbarem Netzstrom behandelt.

![Konfiguration Multilevel Lastmanagement – Abbildung 7](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/07.png)

![Konfiguration Multilevel Lastmanagement – Abbildung 8](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/08.png)

### Konfiguration speichern und aktivieren

Die Änderungen in der Konfiguration werden nur gespeichert, wenn die Konfiguration auch aktiviert wird.

Kann die Aktivierung aus Gründen von Fehlkonfigurationen nicht durchgeführt werden, kann dies an folgenden Punkten liegen:

- Die Ladegruppe ist nicht korrekt für das MLM konfiguriert (Internetausfalleinstellung ist nicht auf Max. Strom pro Gruppe gesetzt)

- Einzelne Geräte welche relevant für das MLM sind sind nicht online zum Zeitpunkt der Speicherung. (online bringen)


![Konfiguration Multilevel Lastmanagement – Abbildung 9](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/09.png)

### Konfiguration des MLM löschen

Die Konfiguration eines MLLM kann ganzheitlich per Knopfdruck gelöscht werden um eine neue Konfiguration zu erfassen.

![Konfiguration Multilevel Lastmanagement – Abbildung 10](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/10.png)

### Konfiguration des Lastabwurfs

Das MLM besitzt eine integrierte Lastabwurfsteuerung.

Diese Steuerung kann anstelle der rückseitigen Hardwareeingänge der Pico Ladestationen verwendet werden. 

Hinweise: 

- Signale welche an Pico-Hardware direkt angebracht sind können mit dieser Funktion nicht übersteuert werden. 

- Die Funktion benötigt eine aktive Internet Verbindung um zu funktionieren. Bei Internetverlust wird der eingestellte Internetausfallwert der Picogruppen verwendet.


Die Funktion ermöglicht eines oder mehrere digitale Signale von Energieversorgern zu interpretieren und allen Ladestationsgruppen des MLM eine reduzierte Ladeleistung zuzuteilen.

Die Steuersignale werden auf einen oder zwei in der Nähe befindlichen Zählereingänge (E1) verdrahtet.

Kompatibel dafür sind smart-me Telstar CT und Telstar 80A Hardware.

Hinweis:
Damit die Eingänge verwendet werden können, müssen diese Hardwareseitig auf "Digitaler Eingang" konfiguriert werden. (Zählereinstellungen, E1 --> Digitaler Eingang)

Steuerungskonfigurationen:

Mit nur einem Signal:

- 1-stufig: 0% Reduktion, variable Reduktion (10-100%)


Mit zwei Signalen:

- 4-stufig: 0% Reduktion, variable Reduktion, variable Reduktion, 100% Reduktion

- 3-stufig: 0% Reduktion, variable Reduktion (beide gleiches Level), 100% Reduktion


Prozentzahlen anwenden auf EnWG14a in Deutschland:

- Bei 22kW - Anlagen entspricht eine Reduktion um 82% dem Versprechen von 4200W Minimalleistung pro Gerät in der Installation.

- Bei 11kW - Anlagen entspricht eine Reduktion um 73% dem Versprechen von 4200W Minimalleistung pro Gerät in der Installation.


Signal Interpretation:

Das Signal kann unterschiedlich interpretiert werden.

Wird das Signal vom Energieversorger im Lastabwurffall entfernt (230V --> 0V) so ist "Low-Aktiv" die korrekte Konfiguration.

Kein Signal (0) = 1 = Verfügbare Energie wird reduziert

Wird das Signal des Energieversorgers im Lastabwurffall angelegt (0V --> 230V), so ist "High-Aktiv" zu wählen.

Signal (1) = 1 = Verfügbare Energie wird reduziert.

[Beschaltung und Konfiguration Zählereingänge](https://sites.google.com/smart-me.com/wiki/schnittstellen/ein_und_ausgaenge)

![Konfiguration Multilevel Lastmanagement – Abbildung 11](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/11.png)

![Konfiguration Multilevel Lastmanagement – Abbildung 12](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/12.png)

![Konfiguration Multilevel Lastmanagement – Abbildung 13](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/13.png)

### Aktivieren und deaktivieren des MLM Prozessors

Die MLM-Konfiguration kann jederzeit deaktiviert und re-aktiviert werden.

- Stoppt den Berechnungsprozess und die aktive Zuteilung von Werten aus Referenzpunkten.

- Gibt allen untergeordneten Lastgruppen den definierten Internetausfallswert zur freien Verfügung.


Setze den Wert auf aktiv oder inaktiv und speichere danach die Konfiguration um sie dem Prozessor mitzuteilen.

![Konfiguration Multilevel Lastmanagement – Abbildung 14](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/14.png)

## Beispiel Konfiguration: Haus mit E-Mobilitätsabgang + Garagenbeleuchtung, Solaranlage und Mittagszeitlastspitzenglättung

- Der Stamm entspricht hier dem Hausanschluss

- Die Absicherung des Anschlusses entspricht 100A pro Phase.

- Die Solaroptimierung liegt hier auf dem Hausanschluss.

- Die Solaranlagenproduktion sowie der hauseigene Verbrauch wird mittels dem Zähler "Hausanschluss Telstar 80A" gemessen und berücksichtigt.


![Konfiguration Multilevel Lastmanagement – Abbildung 15](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/15.png)

![Konfiguration Multilevel Lastmanagement – Abbildung 16](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/16.png)

Der Untergeordnete Emobilitätsabgang wird hier aktiv gemessen um der Gragenbeleuchtung Rechnung zu tragen. Die Ladegruppen sollen so dynamisch auf die Garagenbeleuchtung reagieren.

- Die Garagenbeleuchtung wird mit dem Referenzzähler "E-Mobilitätsabgang 63A Telstar 80A" berücksichtigt.

- Die Absicherung des Abganges entspricht 63A pro Phase.


![Konfiguration Multilevel Lastmanagement – Abbildung 17](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/17.png)

![Konfiguration Multilevel Lastmanagement – Abbildung 18](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/18.png)

Damit die Solaroptimierung Wirkung zeigt, wird über den Tag die Minimalstrommenge des Ladestroms reduziert.

- Die Minimalestrommenge entspricht dem maximal möglichen Netzbezug zur definierten Stunde.

- Sobald von der Solaranlage die Minimalstrommenge zu 100% gedeckt wird, erhalten die Stationen zusätzlich den zusätzlichen Überschuss der Solaranlage.

- Solaroptimierung für die Ganze Woche von 6:00 bis 17:00 Uhr minimal Ladestrom von 15A pro Phase

- Spitzenglättung zur Mittagszeit: Ladungen von 12:00 bis 13:00 Uhr sind nur bei Solarüberschuss möglich, der Netzbezug bleibt bei 0A

- Nächtliches Laden ab 18:00 bis 22:00 Uhr ist mit 50% Kapazität möglich.

- Nächtliches Laden ab 22:00 bis morgens um 7:00 Uhr ist mit 100% Kapazität möglich.
    (z.B. Niedertarifausschöpfung)


![Konfiguration Multilevel Lastmanagement – Abbildung 19](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/19.png)

![Konfiguration Multilevel Lastmanagement – Abbildung 20](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/20.png)

## Beispiel Konfiguration: Areal mit mehreren Häusern, Solaranlagen und E-Mobilitätsabgängen

- ZEV Areal mit 3 Häusern

- Jedes Haus besitzt eine Tiefgarage

- Mehrere Ladegruppen in Tiefgaragen

- TG1 besitzt Aussenparkplätze für Besucher sowie Mieterparkplätze

- Häuser TG1 und TG2 besitzen Solaranlagen

- Solaroptimierung auf das Areal, damit TG3 auch von Solarenergie profitieren kann.

- Arealabsicherung 300A pro Phase

- Hausabsicherungen 180A pro Phase

- E-Mobilitätsabgänge 63 A oder 32A pro Phase


![Konfiguration Multilevel Lastmanagement – Abbildung 21](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/21.png)

- Der Amperewert entspricht der Absicherung der Zuleitung

- Messpunkt ist abgesichert aber selbst ungemessen.
    Da die nachfolgenden Äste allesamt Messungen aufweisen und diese 100% des Verbrauches des Areals entsprechen, kann der Stamm virtuell begrenzt werden.

- Solarstromoptimierung auf den Stamm (Areal) aktiv. (Verfügbarkeit von Solarstrom für alle drei Häuser)


![Konfiguration Multilevel Lastmanagement – Abbildung 22](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/22.png)

![Konfiguration Multilevel Lastmanagement – Abbildung 23](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/23.png)

HAK TG1: Hausanschluss des Gebäude 1 im Areal

- Absicherung 180A pro Phase

- Nicht gemessene Lasten aktiv: Wohnungen, Heizung, Beleuchtung, Allgemein, Solar

- Dynamische Berücksichtuigung der Wohnungen und Wärmepumpen


![Konfiguration Multilevel Lastmanagement – Abbildung 24](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/24.png)

![Konfiguration Multilevel Lastmanagement – Abbildung 25](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/25.png)

TG1 E-Mobilitätsabgang

- Absicherung 63A pro Phase

- Nicht gemessene Lasten aktiv: Garagenbeleuchtung und Lüftung zusätzlich
    zu den E-Ladestationen

- Dynamische Berücksichtigung der Garagenbeleuchtung und Lüftung


![Konfiguration Multilevel Lastmanagement – Abbildung 26](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/26.png)

![Konfiguration Multilevel Lastmanagement – Abbildung 27](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/27.png)

Besucherparkplätze des Areals (Öffentliche Ladestationen)

- Hohe Energieverfügbarkeit und Priorisierung zu höherem Verkaufspreis.
    Veröffentlicht via eCarUp Backend. (Backend Authentifizierung)

- Dauerhaft 100% der möglichen Kapazität vom Netz + Solardeckung.

- Lastspitzenbruch Mittagszeit von 12:00 bis 13:00 nur 23A pro Phase Netz + Solarüberschuss.

- Kabelabsicherung 63A pro Phase


![Konfiguration Multilevel Lastmanagement – Abbildung 28](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/28.png)

![Konfiguration Multilevel Lastmanagement – Abbildung 29](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/29.png)

Mieterparkplätze des Areals

- Mittlere Energieverfügbarkeit und Priorisierung, Fokus auf Solarenergie durch den Tag.

- Dauerhaft 50% der möglichen Kapazität vom Netz.

- Kabelabsicherung 32A pro Phase.

- Lastspitzenbruch zur Mittagszeit 0A von 12:00 bis 13:00.
    Nur Solarladen möglich wenn Produktion nicht vom Areal für anderes verwendet wird.


![Konfiguration Multilevel Lastmanagement – Abbildung 30](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/30.png)

![Konfiguration Multilevel Lastmanagement – Abbildung 31](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/31.png)

Unbehandelte Installationsteile:

- Die Hausanschlüsse und E-Mobilitätsabgänge der Häuser 2 und 3 sind identisch in der Art der Konfiguration.

- Die 4 Ladegruppen in der Tiefgarage 3 (TG3) sind ähnlich konfiguriert wie die Mieterparkplätze in der Tiefgarage 1 (TG1)

- Jede Ladegruppe kann separate Verhaltensweisen ausbilden und auch unterschiedliche Notversorgungsströme bei Internetausfall erhalten.




![Konfiguration Multilevel Lastmanagement – Abbildung 32](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/32.png)
