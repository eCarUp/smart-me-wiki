---
title: 'Installationsplanung'
slug: '/produkte/pico-ladestation/installationsplanung'
description: 'Pico kann auf verschiedene Arten installiert werden.'
sidebar_label: 'Installationsplanung'
---
Pico kann auf verschiedene Arten installiert werden. Hier findest du die üblichsten Varianten beschrieben mit deren spezifischen Anforderungen.

![Installationsplanung – Abbildung 1](/img/produkte-pico-ladestation-installationsplanung/01.png)

## Generelle Installationshinweise

- Jede Pico verfügt über eine Gleichstromfehlerdetektion nach IEC62955. 

- Pico Ladestationen mit BJ 2024 oder ab Seriennummer 7002702 besitzen einen integrierten konformen RCD Typ-A nach IEC60947\-2.
    \- ab 2024 bzw. Seriennummer 7002702 wird kein serieller RCD Typ-A mehr benötigt
    \- vor 2024 oder Seriennummer 7002702 wird für NIN Konformität ein serieller RCD Typ-A vor jeder Ladestation benötigt.

- Die Pico Ladestationen können Kurzschlussströme von 3kA problemlos selber bewältigen.
    Wenn mehrere Ladestationen an einem Abgang hängen muss ein Leitungsschutzschalter am Abgang verwendet werden.
    Die Lastschutzeinrichtung ist auf die Kurzschlussfähigkeit des Abgangs auszulegen.
    Empfohlen sind mind. 6kA Varianten in jedem Fall.

- Die interne Lastschutzeinrichtung der Pico Ladestation entspricht den Forderungen aus IEC 61851-1.

- Geeignet für:
    Flachbandkabelinstallationen
    Busbarinstallationen
    Abgeschlaufte Installationen
    Standfussinstallationen

- Abgänge bis max. 80A können ohne weiteres direkt erschlossen werden.


## Pico Ladestation ab BJ 2024 und Seriennummer 7002702

Alle Pico Ladestationen ab Seriennummer 7002702 verfügen intern über einen RCD Typ-A nach IEC 60947\-2 in Kombination mit der Gleichstromfehlerschutzerkennung nach IEC62955.

### Pico Installation am Flachbandkabel oder mit Busbarsystemen

![Installationsplanung – Abbildung 2](/img/produkte-pico-ladestation-installationsplanung/02.png)

Hinweis: 

Der Kurzschlusstrom muss nur an der Pico Basisplatte überprüft werden, nicht am Ausgang / Typ 2 des Pico Gerätes.

### Pico intern abgeschlaufte Installation oder mit Pico Standfuss Basic (212070-PL)

![Installationsplanung – Abbildung 3](/img/produkte-pico-ladestation-installationsplanung/03.png)

### Pico Installation mit Pico Standfuss mit Servicedeckel (232070-PL)

![Installationsplanung – Abbildung 4](/img/produkte-pico-ladestation-installationsplanung/04.png)

### Blitzschutz für Ausseninstallationen von Ladeinfrastruktur

- Beachte die bei Standfussinstallationen unbedingt auch die NIN und lokalen Regelungen betreffend Blitzschutzeinrichtungen für Ausseninstallationen von Ladeinfrastruktur.
    Schweizer NIN Kapitel: 5.3.4
    Deutschland Norm: VDE 0100-534 

- Die Pico besitzt die Überspannungskategorie 3 (4kV)

- Bei Installationen mit Blitzschutzeinrichtungsbedarf SPD Typ2 sind Standfüsse mit Serviceklappen vorzusehen. Die Blitzschutzeinrichtung kann direkt darin installiert werden.

- Der Wirkbereich eines SPD Typ-2 liegt bei einem Radius von ca. 10m.


Generelle Blitzschutzregeln Stand 04.2025 

Bei Gebäuden ohne äusseren Blitzschutz: (z.B. eine Fangeinrichtung auf dem Dach)

Für Geräte der Überspannungskategorie III ist der Schutz durch einen SPD Typ 2 erforderlich, um die Stossspannungsfestigkeit der Geräte nicht zu überschreiten.

Bei Gebäuden mit äusseren Blitzschutz: (z.B. eine Fangeinrichtung auf dem Dach)
Die Installation benötigt hier einen SPD Typ-1 Blitzschutz und Typ-2 Blitzschutz, ansonsten besteht die Gefahr, das bei Einschlag in die Fangeinrichtung der SPD Typ-2 zerstört wird.

## Downloads

[Anschlussschema und Stromlaufschema ZIP Files](https://drive.google.com/file/d/1aVOLmWprogy2OizkcyH3kHsHntu0A8-D/view?usp=share_link)

## Pico Ladestation vor BJ 2024 und Seriennummer 7002702

- Pico Ladestationen vor BJ2024 oder Seriennummer 7002702 verfügen über eine integrierte Gleichstromfehlererkennung nach IEC62955.

- Pico Ladestationen vor BJ2024 oder Seriennummer 7002702 verfügen über eine funktionelle aber nicht 100% konforme Fehlerstromerkennung für Wechselströme Typ-A (30mA)


### Installation Flachbandkabel

- RCD Typ-A 40A ohne LS seriell zu jeder Pico Ladestation

- Lastschutzschalter am E-Mobilitätsabgang mit kurzschlusssicherer Verlegeart (blauer Kasten) reicht für die Selektivität aus. (Erweiterte Dokumentation)


![Installationsplanung – Abbildung 5](/img/produkte-pico-ladestation-installationsplanung/05.png)

## Lastschutz für Ladestationsgruppenabsicherung und Zuleitung bis 80A pro Phase

Der Lastschutz am Abgang für die gesamte Ladegruppe sollte die Charakteristik C aufweisen.
Die üblichen Lastschutzeinrichtungen nach Charakteristik B eignen sich nicht für Ladestationsinstallationen und neigen dazu zu früh auszulösen.

Bei einem 63A E-Mobilitätsabgang wäre z.B. ein 63A Lastschutz, Typ C mit 6kA oder 10kA Kurzschlussfähigkeit zu empfehlen.

## Lastschutz für Pico Ladestationen mit Zuleitung mehr als 80A pro Phase

Bei einer Installation einer Pico Ladestation an ein hochenergetisches Busbarsystem oder Leiterquerschnitten >35mm2 und Phasenströmen > 80A wird Installationsseitig ein Lastschutz pro Ladestation empfohlen.
Der Interne Lastschutz der individuellen Pico ist auf 3kA begrenzt. Bei hochenergetischen Zuleitungen kann die Fähigkeit zu gering ausgelegt sein.
Alternativ kann die Kurzschlussfähigkeit des Anschlusses natürlich durch Messung geprüft werden, falls dieser unter 3kA zu liegen kommt ist ein zusätzlicher Lastschutz nicht nötig.

Ist aber eine zusätzlicher Lastschutz von Nöten wird ein Lastschutz Modell mit 40A Auslösestrom mit Auslösecharakteristik C und Kurzschlussfähikeit mit 6kA oder 10kA empfohlen.

## Erweiterte Dokumentation und landesspezifische Hinweise

[Schweiz: Stellungnahme der Electrosuisse - Installation von Ladestationen für EV, mehrere Ladestationen an gemeinsamer Speiseleitung](https://drive.google.com/file/d/1aquBK7Gip6DJxagCgB-_kwqEuozjCh07/view)
