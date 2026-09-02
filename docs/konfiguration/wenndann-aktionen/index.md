---
title: 'Wenn/Dann-Aktionen'
slug: '/konfiguration/wenndann-aktionen'
description: 'Um Wenn/Dann-Aktionen nutzen zu können, musst du eine smart-me Limited- oder Professional-Lizenz haben.'
sidebar_label: 'Wenn/Dann-Aktionen'
---
## Voraussetzungen

Um Wenn/Dann-Aktionen nutzen zu können, musst du eine smart-me Limited- oder Professional-Lizenz haben.

Um die Wenn/Dann-Aktionen Pico Regelung nutzen zu können, musst du eine smart-me Professional-Lizenz haben.

![Wenn/Dann-Aktionen – Abbildung 1](/img/konfiguration-wenndann-aktionen/01.png)

## Wofür WENN / DANN AKtionen genutzt werden

- Tarifzeitenbasis für Doppel und Multitarife im Billing

- Sterungen mit den Zähler Ein- und Ausgängen 

- Alarme wie Verbindungsunterbrüche und Zählerstillstände


[Tarifzeiten definieren](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)

[WENN / DANN Boiler Steuerung](/konfiguration/wenndann-aktionen/beispiel-boilersteuerung)

[Alarme definieren](/konfiguration/wenndann-aktionen/alarme)

Automatische Steuerungen können für jedes Gerät in der smart-me Plattform erstellt werden. Es gibt zwei Arten solche Aktionen zu definieren. Entweder werden [Ereignis Aktionen](/konfiguration/wenndann-aktionen/ereignisaktionen) oder Wenn / Dann Aktionen erstellt. In diesem Artikel werden Wenn/Dann-Aktionen erklärt.  Im Vergleich zu Ereignis-Aktionen können komplexere Auslöser und Aktionen definiert werden:

- -   mehrere Auslöser (UND- sowie ODER-Verknüpfungen) sind möglich

    - mehrere Aktionen sind möglich

    - eine Gruppe von Zählern kann überwacht / geschaltet werden

    - Verbindungsüberwachung

    - Zählerstillstand


## Wenn/Dann-Aktionen

Die Wenn /Dann-Aktionen werden in der Cloud gespeichert und funktionieren deshalb nur, wenn das betreffende Gerät eine WLAN-Verbindung hat. Du kannst für alle smart-me Geräte unbegrenzt viele Wenn/Dann-Aktionen erstellen. Wenn/Dann-Aktionen können nur im Webportal erstellt und geändert werden. 

### Vorgehen

1.  Logge dich auf unserer [Website](https://web.smart-me.com/login/) mit deinem Benutzernamen und Passwort ein

2.  Klicke auf Konfiguration

3.  Klicke auf die Kachel Wenn /Dann-Aktionen

4.  Klicke auf das +-Symbol, um eine neue Aktion zu erstellen oder klicke auf eine bestehende, um diese zu bearbeiten.


## Voraussetzungen für funktionierende Wenn/Dann-Aktionen:

1.  Mindestens ein Wenn-Ereignis muss definiert werden, denn dieses löst die Aktion aus. Falls mehrere Wenn-Ereignisse definiert wurden, können diese mit UND- sowie ODER-Befehlen verknüpft werden.

2.  Mindesten eine Dann-Aktion muss definiert werden (Ausnahme bei Bedingung für Tarife). Wurden mehrere Dann-Aktionen definiert, werden alle gleichzeitig ausgeführt, sobald die Wenn-Bedingung(en) erfüllt wurden.

3.  Einen Namen für diese Aktion


## Wenn-Ereignisse

Folgende Wenn-Ereignisse (Auslöser) sind verfügbar:

![Messwert grösser / kleiner](/img/konfiguration-wenndann-aktionen/02.png)

Messwert grösser/kleiner

- Definieren Sie, welches Energiemessgerät überwacht werden soll.

    Es können auch ganze Ordner gewählt werden, dann wird der Mittelwert aller Zähler in diesem Ordner überwacht. Dabei können Sie sämtliche Energiezähler verwenden, welche mit der Cloud verbunden sind. Also neben Strom- auch Gas-, Wärme- oder Wasser-Zähler (Gateway). 


Der Prüfwert bezieht sich hierbei immer auf das Hauptattribut. 

- Beim Stromzähler die 3-Phasenleistung in W oder kW.

- Beim Wärme- oder Kältezähler auf W oder kW.

- Beim Wasserzähler und Gaszähler auf m3/h.


Legen Sie ausserdem fest, wie lange der Messwert unter- beziehungsweise überschritten werden muss, um die Dann-Aktion auszulösen.

![Wenn/Dann-Aktionen – Abbildung 3](/img/konfiguration-wenndann-aktionen/03.png)

![Datum & Uhrzeit](/img/konfiguration-wenndann-aktionen/04.png)

Datum und Uhrzeit

Sie können einzelne Ereignisse oder Zeitspannen als Wenn-Ereignis festlegen. 

Dabei werden folgende varianten unterschieden:

- Einzelne Ereignisse

- Zeitspannen Ereignisse


Einzelne Ereignisse:

Die Einzelnen Ereignisse werden immer zu einem bestimmten Zeitpunkt ausgeführt. War es zum Zeitpunkt aber aus technischen Gründen (z.B. kein Internet) nicht möglich, wird der Befehl erst bei nächstem Eintreffen der Bedingung wiederholt. Diese Variante eignet sich, wenn in der Zwischenzeit andere Quellen den beeinflussten Schaltzustand verändern sollen.

Zeitspannen Ereignisse:

Die Zeitspannen Ereignisse werden innerhalb der Definierten Zeitspanne alle 5 Minuten überprüft und wiederholt. Der Schaltzustand würde geändert werden sobald die technischen Probleme beseitigt würden, verhindert aber externes Eingreifen auf die gesteuerten Schaltzustände.

![Wenn/Dann-Aktionen – Abbildung 5](/img/konfiguration-wenndann-aktionen/05.png)

![Keine Verbindung](/img/konfiguration-wenndann-aktionen/06.png)

Keine Verbindung

Ein Wenn-Ereignis kann für von der Cloud getrennte Zähler festgelegt werden. Folgende Einstellungen müssen gemacht werden:

- Welcher Zähler / Ordner soll überwacht werden

- Wie lange muss die Verbindung unterbrochen sein in Minuten


Tipp: Wenn ein Ordner gewählt wird, werden alle hierarchisch darunterliegenden Zähler überwacht.

Hinweis: 

Diese Wenn-Aktion wird nur einmalig ausgeführt. Ein weiteres Mal wird dieser Befehl erst ausgeführt, nach dem alle von diesem Alarm betroffenen Zähler (Ordner) wieder online waren.
(prüfen Sie daher im Alarmfall kurz alle Zähler auf Ihre aktuelle Verbindung)

![Zählerstillstand](/img/konfiguration-wenndann-aktionen/07.png)

Zählerstillstand

Ein Wenn-Ereignis kann für einen Zählerstillstand festgelegt werden. Folgende Einstellungen müssen gemacht werden:

- Welcher Zähler soll überwacht werden

- Wie lange muss der Zählerstillstand vorhanden sein, bis die Bedingung erfüllt ist.


Hinweis: 

Nehmen Sie als Zeiteinheit hier mehr als einen Tag (1440 Minuten) oder mindestens das doppelte des längsten Zählerausleseintervalls.

![Schaltzustände](/img/konfiguration-wenndann-aktionen/08.png)

Schaltzustände

Anstatt die Leistung eines Zählers zu überwachen, kann auch der Schaltzustand überwacht werden. Folgende Einstellungen müssen gemacht werden:

- Welcher Zähler soll überwacht werden

- Wo genau soll der Schaltzustand überwacht werden (Ausgang oder Eingang)

    - Phasen (Nur 3 Phasen Zähler 32A und Plug)

    - [Potentialfreier Ausgang](/schnittstellen/ein_und_ausgaenge)

    - [Digitaler Eingang](/schnittstellen/ein_und_ausgaenge)

- Bei welchem Zustand soll die Dann-Aktion auslösen. "Ein", "Aus" oder beim Wechsel eines Zustands.

- Mindestzeit: Wie lange muss der Zähler in diesem Zustand sein, bis die Bedingung für die Dann-Aktion erfüllt ist.


![Strom grösser / kleiner](/img/konfiguration-wenndann-aktionen/09.png)

Die Funktion Ströme grösser / kleiner ermöglicht Steuerung von Lasten um Überlastsituationen an Referenzpunkten zu vermeiden. 

Spezifisch kann er als Auslöser für eine Pico Regelung dienen.

Die Funktion verfolgt automatisch den stärksten positiven Strom des Gerätes. 

Hinweis: Dies gilt auch mit der Schwellwert "unter" gewählt wird.

Beispiel 3-Phasen Zähler:

Phase 1: -5A
Phase 2: 3A
Phase 3: 7A

Resultierender Prüfstrom für die Beurteilung: 7A

Dann wird die Prüfschwelle definiert (Threshold) und ob bei Übertretung oder Unterschreitung ausgelöst wird.

Eine Minimumzeit kann auch angegeben werden.

![Wenn/Dann-Aktionen – Abbildung 10](/img/konfiguration-wenndann-aktionen/10.png)

## Dann-Aktionen

Sobald die Wenn-Ereignisse eintreten, werden die Dann-Aktionen ausgelöst.

Folgende Dann-Aktionen sind verfügbar:

- Alarm

- Ein-/Ausschalten

- Pico Regelung (dynamisches Lastmanagement für die E-Ladestationen und Solaroptimierung)


![Alarm](/img/konfiguration-wenndann-aktionen/11.png)

[Alarm](/konfiguration/wenndann-aktionen/alarme)

Sind die Wenn-Ereignisse eingetreten, wird eine E-Mail versendet. Folgende Einstellungen müssen gemacht werden:

- Name des Alarms

- Subjekt: Betreff Alarm E-Mails

- Nachricht: Text, welcher im Alarm-E-Mail enthalten ist


Beim Subjekt (Betreff) und in der Nachricht können Platzhalter definiert werden. AlarmnName und EventActionName werden dann bei der versendeten E-Mail durch den eingegebenen "Alarmnamen" bzw. dem "Wenn-Dann Ereignissnamen" ersetzt.

![Ein / Ausschalten](/img/konfiguration-wenndann-aktionen/12.png)

Ein- /Ausschalten

Treten die Wenn-Ereignisse ein, schaltet das ausgewählte Gerät. Es können auch Ordner gewählt werden, dann werden sämtliche schaltbaren Geräte in diesem Ordner entsprechend geschalten.

Hinweis: Zähler verfügen nur über Schaltzustände wenn diese auch bei der Hardware eingeschaltet wurden.

Folgende Einstellungen müssen gemacht werden:

- Welcher Zähler oder Ordner soll geschalten werden

- Wie soll er geschalten werden?

    - Ein

    - Aus

    - Umschalten (Nur smart-me Plug)


![Wenn/Dann-Aktionen – Abbildung 13](/img/konfiguration-wenndann-aktionen/13.png)

## Beispiele: Boilersteuerung mit WENN/DANN

[Beispiel Boilersteuerung](/konfiguration/wenndann-aktionen/beispiel-boilersteuerung) 

## Beispiele: ZEV Steuerungen

### ZEV Wärmepumpe mit SG-Ready Steuerung auf Bilanzmesswert

Die Konfiguration erörtert den strukturellen Aufbau einer Wärmepumpensteuerung in Abhängigkeit zur Bilanzmessung mit SG-Ready Funktion.

Ziel: Die Wärmepumpe soll über zwei elektrische Kontakte (Zähler Telstar S0\_0 und S1) in vier Leistungsstufen ansteuerbar sein.

SG-Ready oder Smartgrid-Ready ist eine Steuerungslogik welche mit zwei Signalen 4 Zustände abbildet nach folgendem Schema:

Betriebszustand 1: S0\_0 AUS und S1 AUS --> Wärmepumpe AUS (0W)
Betriebszustand 2: S0\_0 AUS und S1 EIN --> Wärmepumpe Leistungsstufe 1 (800W)
Betriebszustand 3: S0\_0 EIN und S1 AUS --> Wärmepumpe Leistungsstufe 2 (2800W)
Betriebszustand 4: S0\_0 EIN und S1 EIN --> Wärmepumpe Leistungsstufe 3 (5800W)

Um eine solche Konfiguration erfolgreich durchzuführen, bedarf es einer sogenannten Statemachine (Zustandsmaschiene).
Für 4 Leistungsstufen müssen wir also jeweils eine Aktion haben, um von der einen in die nächste Stufe zu wechseln und wieder zurückzukehren.

Das Umschalten erfolgt in den Leistungsstufen:

Stufe 0--> 1: Überschuss von >800W
Stufe 1--> 2: Überschuss von >2000W
Stufe 2--> 3: Überschuss von >3000W

Stufe 3 -->2: Bezug von >500W
Stufe 2 -->1: Bezug von >500W
Stufe 1-->0: Bezug von >200W

Bei jeder Stufe wird in der Wenn Anweisung geprüft in welcher Stufe wir uns befinden und überprüfen dann gleichzeitig noch den Bilanz Wert.
In der Dann Aktion geben wir vor in welche Stufe gewechselt werden muss, falls die Wenn-Aktionen alle zutreffen.

Wichtig: Die Umschaltung darf nicht sofort erfolgen und sollte mittels der Messwert Mindestzeit auf ca. 5 Minuten gesetzt werden bei jeder Stufe.

![Wenn/Dann-Aktionen – Abbildung 14](/img/konfiguration-wenndann-aktionen/14.png)

![Wenn/Dann-Aktionen – Abbildung 15](/img/konfiguration-wenndann-aktionen/15.png)

![Wenn/Dann-Aktionen – Abbildung 16](/img/konfiguration-wenndann-aktionen/16.png)

Aktion 1: 1\_Stufe 0 --> 1 ON

![Wenn/Dann-Aktionen – Abbildung 17](/img/konfiguration-wenndann-aktionen/17.png)

Aktion 2: 1\_Stufe 1 --> 2 ON

![Wenn/Dann-Aktionen – Abbildung 18](/img/konfiguration-wenndann-aktionen/18.png)

Aktion 3: 1\_Stufe 2 --> 3 ON

![Wenn/Dann-Aktionen – Abbildung 19](/img/konfiguration-wenndann-aktionen/19.png)

2\_Stufe 3 --> 2 OFF

![Wenn/Dann-Aktionen – Abbildung 20](/img/konfiguration-wenndann-aktionen/20.png)

2\_Stufe 2--> 1 OFF

![Wenn/Dann-Aktionen – Abbildung 21](/img/konfiguration-wenndann-aktionen/21.png)

2\_Stufe 1 --> 0 OFF

![Wenn/Dann-Aktionen – Abbildung 22](/img/konfiguration-wenndann-aktionen/22.png)

### ZEV Wärmepumpe mit SG-Ready Steuerung auf Bilanzmesswert

Die Konfiguration erörtert den strukturellen Aufbau einer Wärmepumpensteuerung in Abhängigkeit zur Bilanzmessung mit SG-Ready Funktion.

Ziel: Die Wärmepumpe soll über zwei elektrische Kontakte (Zähler Telstar S0\_0 und S1) in vier Leistungsstufen ansteuerbar sein.

SG-Ready oder Smartgrid-Ready ist eine Steuerungslogik welche mit zwei Signalen 4 Zustände abbildet nach folgendem Schema:

Betriebszustand 1: S0\_0 AUS und S1 AUS --> Wärmepumpe AUS (0W)
Betriebszustand 2: S0\_0 AUS und S1 EIN --> Wärmepumpe Leistungsstufe 1 (800W)
Betriebszustand 3: S0\_0 EIN und S1 AUS --> Wärmepumpe Leistungsstufe 2 (2800W)
Betriebszustand 4: S0\_0 EIN und S1 EIN --> Wärmepumpe Leistungsstufe 3 (5800W)

Um eine solche Konfiguration erfolgreich durchzuführen, bedarf es einer sogenannten Statemachine (Zustandsmaschiene).
Für 4 Leistungsstufen müssen wir also jeweils eine Aktion haben, um von der einen in die nächste Stufe zu wechseln und wieder zurückzukehren.

Das Umschalten erfolgt in den Leistungsstufen:

Stufe 0--> 1: Überschuss von >800W
Stufe 1--> 2: Überschuss von >2000W
Stufe 2--> 3: Überschuss von >3000W

Stufe 3 -->2: Bezug von >500W
Stufe 2 -->1: Bezug von >500W
Stufe 1-->0: Bezug von >200W

Bei jeder Stufe wird in der Wenn Anweisung geprüft in welcher Stufe wir uns befinden und überprüfen dann gleichzeitig noch den Bilanz Wert.
In der Dann Aktion geben wir dann vor in welche Stufe gewechselt werden muss, falls die Wenn-Aktionen alle zutreffen.

Wichtig: Die Umschaltung darf nicht sofort erfolgen und sollte mittels der Messwert Mindestzeit auf ca. 5 Minuten gesetzt werden bei jeder Stufe.

![Wenn/Dann-Aktionen – Abbildung 23](/img/konfiguration-wenndann-aktionen/14.png)

![Wenn/Dann-Aktionen – Abbildung 24](/img/konfiguration-wenndann-aktionen/15.png)

![Wenn/Dann-Aktionen – Abbildung 25](/img/konfiguration-wenndann-aktionen/16.png)

Aktion 1: 1\_Stufe 0 --> 1 ON

![Wenn/Dann-Aktionen – Abbildung 26](/img/konfiguration-wenndann-aktionen/17.png)

Aktion 2: 1\_Stufe 1 --> 2 ON

![Wenn/Dann-Aktionen – Abbildung 27](/img/konfiguration-wenndann-aktionen/18.png)

Aktion 3: 1\_Stufe 2 --> 3 ON

![Wenn/Dann-Aktionen – Abbildung 28](/img/konfiguration-wenndann-aktionen/19.png)

2\_Stufe 3 --> 2 OFF

![Wenn/Dann-Aktionen – Abbildung 29](/img/konfiguration-wenndann-aktionen/20.png)

2\_Stufe 2--> 1 OFF

![Wenn/Dann-Aktionen – Abbildung 30](/img/konfiguration-wenndann-aktionen/21.png)

2\_Stufe 1 --> 0 OFF

![Wenn/Dann-Aktionen – Abbildung 31](/img/konfiguration-wenndann-aktionen/22.png)

[Tarifzeiten definieren](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)

[WENN / DANN Boilersteuerung](/konfiguration/wenndann-aktionen/beispiel-boilersteuerung)

[Alarme definieren](/konfiguration/wenndann-aktionen/alarme)
