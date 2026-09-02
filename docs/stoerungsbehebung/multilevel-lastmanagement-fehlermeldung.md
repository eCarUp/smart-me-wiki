---
title: 'Multilevel Lastmanagement Fehlermeldung'
slug: '/stoerungsbehebung/multilevel-lastmanagement-fehlermeldung'
description: 'Die Lastmanagementgruppe ist vermutlich nicht korrekt konfiguriert: Als Cloudverbindungsausfallwert ist nicht "Max.'
sidebar_label: 'Multilevel Lastmanagement Fehlermeldung'
---
![Multilevel Lastmanagement Fehlermeldung – Abbildung 1](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/01.png)

![Multilevel Lastmanagement Fehlermeldung – Abbildung 2](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/02.png)

- Die Lastmanagementgruppe ist vermutlich nicht korrekt konfiguriert:
    Als Cloudverbindungsausfallwert ist nicht "Max. Strom (pro Gruppe)" ausgewählt

- Die Internetausfallskonfiguration steht nicht zur Verfügung.
    [Firmware upgrade durchführen](/konfiguration/firmware-update) auf mindestens 0.0.25


![Multilevel Lastmanagement Fehlermeldung – Abbildung 3](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/03.png)

- Die Lastmanagement Gruppe wurde mit Picos erstellt, welche Phasenausgleich unterstützen. Jede weitere Pico muss auch Phasenausgleich unterstützen. Dies kann durch ein [Firmware Update](/konfiguration/firmware-update) zur Version ab 0.0.34 hinzugefügt werden.


![Multilevel Lastmanagement Fehlermeldung – Abbildung 4](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/04.png)

![Multilevel Lastmanagement Fehlermeldung – Abbildung 5](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/05.png)

- Kein Text im Feld "Name" eingetragen


![Multilevel Lastmanagement Fehlermeldung – Abbildung 6](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/06.png)

- Eine zuvor verwendete Pico Lastgruppe oder Meterhardware wurde hardwareseitig gelöscht.
    Das MLM muss erneut konfiguriert werden, um die Funktion wieder herzustellen.

- Lösche die relevanten Pico Lastgruppen immer zuerst aus dem MLM-Baum und danach auf der Hardware, um die Konfiguration nicht zu zerstören.


## Es wird immer zu wenig Strom einer Gruppe zugewiesen

Dafür kann es folgende Gründe geben:

- Es hat nicht genug Kapazität für alle Gruppen --> Reduziere die Gruppenströme ein wenig, um eine Balance zwischen den Gruppen zu erhalten.

- Es hat nicht genug Kapazität für alle Gruppen --> Reduziere die Gruppenströme Zeitweise mit der Minimalstrom Gruppeneinstellung pro Stunde.


## Den Gruppen wird immer nur der Internetausfallstrom zur Verfügung gestellt

![Multilevel Lastmanagement Fehlermeldung – Abbildung 7](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/07.png)

- Das MLM ist nicht aktiv und verteilt entsprechend zur Sicherheit nur den Internetausfallstrom --> MLM Aktivieren und Speichern drücken.
