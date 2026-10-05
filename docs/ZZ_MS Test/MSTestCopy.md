---
title: 'MS Test Copy'
slug: '/zz-ms-test/mstestcopy'
description: 'Testkopie der Pico-Produktseite zur Prüfung der Formatierungsregeln.'
sidebar_label: 'MS Test Copy'
---
<div className="row">
<div className="col col--7">

Pico ist eine MID-zertifizierte Ladestation mit integrierter Mobilfunk- und WiFi-Schnittstelle zur Übertragung von Echtzeitdaten. Die Ladestation synchronisiert die Messwerte automatisiert und verschlüsselt in die smart-me Cloud. Die Station kann in das eCarUp Backend integriert werden und verfügt über ein statisches und dynamisches Lastmanagement. Die Daten können im smart-me Portal oder über unsere offene Schnittstelle in Drittsysteme exportiert und weiterverarbeitet werden.

</div>
<div className="col col--5 text--center">

![Pico E-Ladestation – Abbildung 1](/img/produkte-pico-ladestation/01.png)

</div>
</div>

## Wichtigste Installationshinweise in Kürze

- Pico verfügt über eine Phasenumschaltung — bitte verbinde alle Phasen gemäss Anschrift (L1 = L1, L2 = L2, L3 = L3).
- Beachte besonders bei einer Aussenanwendung die [Installations- und Montageanleitung (Deutsch)](https://docs.google.com/presentation/d/1d_ejgHn-M8dmJdRPlC1F2z5bBZTvtU89_p2z1f22_aw/export/pdf), um keine Dichtungsmittel zu vergessen. IP55 wird nur mit den Dichtmitteln erreicht.
- Ziehe die Dichtungsmittel adäquat an und prüfe den Sitz der Dichtungen.

[Installationsplanung](/produkte/pico-ladestation/installationsplanung)

[Pico Lastmanagement](/produkte/pico-ladestation/pico-lastmanagement)

[Pico Konfiguration](/konfiguration/inbetriebnahme/pico-konfiguration)

[Zubehör](/produkte/pico-ladestation/pico-zubehör)

[Pico Anzeige](/produkte/pico-ladestation/pico-display)

[Pico Standfuss](/produkte/pico-ladestation/pico-standfuss)

## Webinare und Videos

Webinaraufzeichnung Release Multilevel Lastmanagement (50 Min)

<Video src="YiiACL00jko" title="Webinaraufzeichnung Release Multilevel Lastmanagement" />

Was steckt hinter der MID-Zertifizierung (30 Min)

<Video src="Bx9QOYZPWEk" title="MID-Zertifizierung Pico – Webinar" />

Kurzvideo: Pico Ladestation erhält MID-Zertifizierung (2 Min)

<Video src="bSEN20E-h18" title="Pico Ladestation erhält MID-Zertifizierung" />

## Funktionsübersicht

- Integriertes Lastmanagement und Lastausgleich mit Phasenausgleich
- Integrierte SIM-Karte mit einem Datenvolumen von 10 Jahren
- [MID-Zertifizierung](/planung/zertifizierungen#zertifizierungen-für-ladestationen) und Lastgangzertifizierung der internen Meterhardware wegen grossem Display
- Integrierte Fehlerschutzeinrichtungen 30mA AC nach IEC60947-2 und 6mA DC IEC62955
- Deutsche [Eichrechtzertifizierung](/planung/zertifizierungen#eichrecht-zertifizierung-deutschland) (Art.-Nr. 242070, 2402070/1)
- Einfache Montage (klein und leicht), geeignet für das Flachbandkabel
- Identifikation per RFID, App, CarID und vorbereitet für ISO 15118 (Plug & Charge)
- Vorbereitet für ISO15118 Powerline Kommunikation (Plug&Charge, V2H, V2G)
- Verschlüsselte Echtzeit-Datenverbindung in die smart-me und eCarUp Cloud
- Einfache [Installation](/konfiguration/inbetriebnahme) mit der kostenlosen smart-me App
- Schnittstellen zu Drittsystemen via API, CSV, MSCONS, IS-E und weiteren
- Solaroptimierte Steuerung
- Lastabwurf gemäss [Paragraph 14a](https://www.bundesnetzagentur.de/DE/Vportal/Energie/SteuerbareVBE/artikel.html?nn=877500) (Deutschland)

## Pico konfigurieren

Infos zur Montage, MID-Modus, wie man Ladevorgänge eichrechtlich überprüft, Status und Fehlermeldungen findest du im [Installationshandbuch (.pdf)](https://docs.google.com/presentation/d/1d_ejgHn-M8dmJdRPlC1F2z5bBZTvtU89_p2z1f22_aw/export/pdf).

Die Installation ist hier im Detail abgehandelt: [Inbetriebnahme](/konfiguration/inbetriebnahme)

Die Konfiguration ist hier im Detail abgehandelt: [Pico Konfiguration](/konfiguration/inbetriebnahme/pico-konfiguration)

## Technische Daten

<Embed src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTmxJQ_thhwYfeefD_1PLiscIfGqbt-LrSa8pwwFBKwlmze109NOEt8Eyka2lroJoGS_FRiuGgtiAhh/pubhtml?gid=0&range=A1:B26&single=true&widget=false&headers=false&chrome=false" aspect="1.733" title="Technische Daten der Pico Ladestation" />

[Download Datenblatt (.pdf)](https://docs.google.com/presentation/d/1tq5HPM2mc4Br8264vKs_yjMv4HauvtQM0A0DY87EMks/export/pdf)

## Funktionsbeschreibungen

### ISO 15118 Kommunikationsstandard (Plug&Charge, V2H, V2G)

Der Standard ISO15118 ist ein Kommunikationsstandard zwischen Fahrzeug und Ladestation. Er beschreibt die physikalischen Anforderungen und Protokolle sowie die unterstützten Funktionen dieser Schnittstelle.

Die Funktionen umfassen primär:

- Ladefreigaben für Plug & Charge
- Lademanagement für Laden und Entladen von Fahrzeugen (unidirektionale Ladung, bidirektionale Ladung für V2H und V2G)

**Was ist das Ziel des Standards?**

Ziel dieses Standards ist eine homogene Implementation des Fahrzeugs und dessen Speicher in das öffentliche Netz oder in das Haussystem als Speichereinheit. Langfristig soll der Fahrzeugspeicher zur Stabilisierung des öffentlichen Netzes (V2G = Vehicle to Grid) oder als Heimspeicherlösung (V2H = Vehicle to Home) genutzt werden können.

**Ist das aktuell schon Realität?**

Der Einsatz dieses Standards ist noch sehr eingeschränkt. Es werden aktuell seitens verschiedener Ladehardware- und Fahrzeughersteller Tests zu diesem Thema gemacht, um die Kommunikation abzustimmen und weiterzuentwickeln. Plug-&-Charge-Lösungen sind teilweise im echten Leben bereits in Betrieb, aber noch nicht sonderlich verbreitet.

V2G- und V2H-Applikationen werden seitens DC-Ladestationen teilweise heute schon unterstützt. Das Angebot für V2G und V2H seitens AC-Ladestationen ist aktuell noch stark begrenzt bzw. inexistent durch die Nichtverfügbarkeit der nötigen Einrichtungen seitens der Fahrzeuge.

Erste Fahrzeughersteller haben aber bereits Fahrzeuge angekündigt, welche über die technischen Einrichtungen verfügen werden. Aktuell kann aber noch keines dieser Fahrzeuge am Markt erworben werden. (Stand 16.05.2025)

**Was bedeutet das für Ihre Pico Ladestation?**

Ihre Pico Ladestation ist vollumfänglich vorbereitet für die Zukunft. Ein Softwareupdate wird genügen, um die Funktionen auf Ihrer Pico freizuschalten. Wir arbeiten aktuell intensiv an der Implementation der Funktionalitäten.

### RCD / Gleichstromfehlerdetektion und Lastschutz

Die integrierten Sicherheitseinrichtungen überprüfen sich vollautomatisch auf ihre Funktionstüchtigkeit:

- mindestens alle 24 Stunden seit der letzten Prüfung,
- immer wenn das Gerät neu gestartet wird.

Liegt ein Fehler bei den Selbstprüfungen vor, wird kein Strom freigegeben und die Information auf dem Display angezeigt. Liegt ein Fehler beim Ladevorgang vor, wird der Strom unterbrochen und der Fehler auf dem Display angezeigt.

Das Rücksetzen des Fehlers kann nur mechanisch durch das Ausstecken und erneute Einstecken des Ladekabels an der Ladestation erfolgen.

## Display

<div className="row">
<div className="col col--7">

Das Verhalten des Displays ist auf der Seite [Pico Anzeige](/produkte/pico-ladestation/pico-display) beschrieben.

</div>
<div className="col col--5 text--center">

![Pico E-Ladestation – Abbildung 2](/img/produkte-pico-ladestation/02.png)

</div>
</div>

## Pico Anschlüsse und Dimensionen

### Anschlussschema

<div className="row">
<div className="col col--7">

| Klemme | Bedeutung |
| --- | --- |
| L1 | Phase 1 |
| L2 | Phase 2 |
| L3 | Phase 3 |
| N | Neutralleiter / Nullleiter |
| PE | Schutzleiter |

Der Schutzleiter sollte an der oberen Anschlussschraube angehängt werden, damit der Standfuss direkt zusammen mit der Station geerdet wird.

**Achtung:** Das Produkt kann nur in 3-Phasen-Sternschaltung oder 1-phasig betrieben werden.

</div>
<div className="col col--5 text--center">

![Pico E-Ladestation – Abbildung 3](/img/produkte-pico-ladestation/03.jpg)

</div>
</div>

**Kabelführungen**

Die Kabel können bei Pico an 5 Stellen ein- und ausgeführt werden: zwei oben, zwei unten und eine durch die Rückplatte. Bei der Montage durch die Rückplatte muss ein Loch mit 25–26 mm Durchmesser gebohrt werden.

Details zur Standfussmontage findest du in der Montageanleitung bei den Downloads.

### Lastabwurf (externe Eingänge)

<Embed src="https://docs.google.com/spreadsheets/d/1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY/htmlembed?gid=0" title="Tabelle Pico Lastabwurf" />

[Tabelle Pico Lastabwurf in Google Tabellen öffnen](https://drive.google.com/open?id=1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY)

<div className="row">
<div className="col col--7">

Der Lastabwurf kann auch mit nur einem verfügbaren Signal realisiert werden.

Für die Konfiguration von keiner Ladung zu maximaler Ladeleistung wird das Signal auf IN1 und IN2 sowie COM verdrahtet. Für die Konfiguration von 6 A Minimalleistung auf maximale Ladeleistung muss das Signal nur auf IN2 sowie COM verdrahtet werden.

</div>
<div className="col col--5 text--center">

![Pico E-Ladestation – Abbildung 4](/img/produkte-pico-ladestation/04.png)

</div>
</div>

<div className="row">
<div className="col col--7">

COM ist der Neutralleiter. IN1 und IN2 müssen beim ON-Signal mit einer Spannung versehen werden; sie erzeugen selbst keine Spannung, diese muss von extern zur Verfügung gestellt werden.

**Achtung:** Der Lastabwurf kann entweder auf alle Picos verdrahtet werden oder minimal auf eine aus jeder Lastgruppe. Diese Funktion ist auch ohne Internetverbindung gewährleistet.

</div>
<div className="col col--5 text--center">

![Pico E-Ladestation – Abbildung 5](/img/produkte-pico-ladestation/05.png)

</div>
</div>

<div className="row">
<div className="col col--7">

Alternativ kann der Lastabwurf auch über das [Multilevel Lastmanagement](/konfiguration/multilevel-lastmanagement/mlm-konfigurieren#konfiguration-des-lastabwurfs) mittels Zählereingangssignalen erfolgen.

</div>
<div className="col col--5 text--center">

![Pico E-Ladestation – Abbildung 6](/img/produkte-pico-ladestation/06.png)

</div>
</div>

### Abmessungen

<div className="row">
<div className="col col--7">

\*.DXF- und \*.DWG-Daten können im ZIP-Archiv in den Downloads gefunden werden.

</div>
<div className="col col--5 text--center">

![Pico E-Ladestation – Abbildung 7](/img/produkte-pico-ladestation/07.png)

</div>
</div>

## Versandinformationen

### 232070 und 242070 smart-me Pico Ladestation inkl. Montageplatte

| Angabe | Wert |
| --- | --- |
| Zolltarifnummer | 85044055 |
| Gewicht mit Verpackung | 4.6 kg |
| Grösse Verpackung | 400 × 300 × 200 mm |
| Pakete pro Europalette | 72 Stück |

### 232070/1 und 242070/1 smart-me Pico Ladestation ohne Montageplatte

| Angabe | Wert |
| --- | --- |
| Zolltarifnummer | 85044055 |
| Gewicht mit Verpackung | 3.3 kg |
| Grösse Verpackung | 400 × 300 × 200 mm |
| Pakete pro Europalette | 72 Stück |

## Zubehör

[Zubehör](/produkte/pico-ladestation/pico-zubehör)

## Sicherheitshinweise

Die Sicherheitshinweise sind unter allen Umständen einzuhalten.

**Installation, Wartung, Reparatur, Inbetriebnahme**

- Lies das gesamte Handbuch vor Installation und Bedienung des Produkts sorgfältig durch.
- Lebensgefahr durch hohe elektrische Spannung. Niemals Veränderungen an Bauteilen, Software oder Anschlussleitungen durchführen, ohne spannungsfrei zu sein. Deshalb sind die entsprechenden Vorsicherungen zu entfernen und so aufzubewahren, dass andere Personen diese nicht unbemerkt wiedereinsetzen können.
- Das Produkt darf ausschliesslich von einer zugelassenen Elektrofachkraft installiert, repariert oder gewartet werden. Dabei müssen alle gültigen kommunalen, regionalen und nationalen Vorschriften für elektrische Anlagen eingehalten werden.
- Seriennummern vor 7002702 bedürfen eines seriellen RCD Typ-A, um die nationalen Installationsstandards zu erfüllen.
- Die Installation darf nicht in der Nähe brennbarer, explosiver Medien, in Überschwemmungsbereichen (Tiefgarage) oder Bereichen erfolgen, in denen die Gefahr fliessenden Wassers besteht.
- Das Produkt muss an einem endgültigen Standort installiert werden. Die Anschlüsse am Pico und der Rückplatte sind für eine begrenzte Anzahl von Steckzyklen ausgelegt.
- Das Produkt muss an einer Wand oder Struktur mit ausreichend Tragkraft installiert werden.
- Die Anschlussklemmen in der Rückplatte sind bei geschlossenem Stromkreis stromführend und dürfen in keinem Fall direkt oder mit anderen Gegenständen in Kontakt gebracht werden als mit der Pico Elektronik.
- Je nach Installationsart sind vor der Installation eventuell Genehmigungen erforderlich, z. B. bei einer Erhöhung der Hausanschlussleistung.
- Die Ladestation ist beim Netzbetreiber anzumelden.
- Die Schrauben der Kabelanschlüsse sollten mit einem Drehmoment von 3 Nm angezogen werden. Der maximale Durchmesser des Kabels mit Aderendhülse liegt bei 6.5 mm.
- Das Produkt muss in Kombination mit einem Leitungsschutzschalter betrieben werden. Die Kurzschlussfähigkeit des Leitungsschutzschalters muss der maximalen Kurzschlussfähigkeit des Anschlusspunktes entsprechen. Für die Selektivität kann ein Leitungsschutzschalter für mehrere Ladestationen ausreichen. Beachte die landesspezifischen Hinweise in diesem Wiki. Die Stationen können individuelle Kurzschlüsse bis 3 kA problemlos bewältigen.

**Verwendungszweck**

- Dieses Produkt ist ausschliesslich für das Aufladen von elektrisch betriebenen Fahrzeugen vorgesehen, welche mit nicht gasenden Batterien ausgestattet sind. Das Produkt darf nur mit einem Ladekabel nach IEC 62196 verwendet werden. Andere Verwendungen als die hier angegebenen sind unzulässig.
- Das Gerät ist für die Verwendung drinnen und draussen vorgesehen.

**Betrieb**

- Niemals das Produkt verwenden oder berühren, wenn es beschädigt ist oder nicht ordnungsgemäss funktioniert. Das Produkt im Notfall (Rauch, Brand, Funken oder andere nicht ordnungsgemässe Funktionen) sofort über den FI-Schalter abschalten und den Kundensupport verständigen.
- Produkt nicht mit Wasser löschen oder mit fliessendem Wasser reinigen.
- Das Produkt nicht in Wasser oder in andere Flüssigkeiten tauchen.
- Dieses Produkt ist nicht für eine Bedienung durch Personen mit eingeschränkten physischen, psychischen bzw. sensorischen Fähigkeiten (darunter Kinder) bzw. Personen ohne Kenntnis des Produkts vorgesehen.
- Es ist dafür zu sorgen, dass Kinder nicht mit dem Produkt spielen.
- Niemals die Kontakte der Typ-2-Ladebuchse berühren und keine Fremdkörper in das Produkt einführen.
- Das Ladekabel niemals verwenden, wenn es beschädigt ist oder die Anschlüsse nass oder verschmutzt sind.
- Keine Verlängerungskabel oder nicht zugelassene Adapter in Kombination mit dem Produkt verwenden.
- Das Ladekabel niemals knicken, überfahren oder grosser Hitze aussetzen.
- Das Ladekabel ausschliesslich am Stecker aus der Ladehalterung ziehen.
- Das Ladekabel nicht in die Verkehrswege anderer Verkehrsteilnehmer legen und stets so positionieren, dass keine Stolpergefahr besteht.
- Ladekabel vor Witterungseinflüssen wie direkter Sonneneinstrahlung, Wind, Regen, Feuchtigkeit und Nässe schützen und niemals mit feuchten oder nassen Händen anschliessen.
- Das Produkt nicht in der Nähe von starken elektromagnetischen Feldern oder in der direkten Umgebung von Funktelefonen benutzen.

## FAQ

### Warum reserviert der Pico immer 6A in der Lastgruppe, obwohl das Auto nicht mehr geladen wird?

Die Norm IEC 61851 schreibt vor, dass jedes Auto immer mindestens 6 A zur Verfügung haben muss. Dies ist in der Norm so vorgesehen, damit eine Standheizung über das Netz versorgt werden kann — oder damit die Batterie nicht entladen wird, wenn jemand für mehrere Wochen abwesend ist.

### Benötigt Pico einen seriellen RCD Typ-A pro Ladestation?

Die Pico Ladestationen mit Seriennummern vor 7002701 benötigen einen seriellen Typ-A RCD 40A 30mA für die Erfüllung von nationalen Standards. Die Funktion ist bei diesen Geräten vorhanden, aber nicht konform.

Ab Seriennummer 7002702 oder BY2024 benötigt die Pico keinen seriellen RCD mehr, dieser ist nun integriert und konform nach 60947-2.

### Unterstützt die Pico Ladestation ISO15118 für Plug & Charge und V2G / V2H?

Die Pico Ladestationen besitzen alle technischen Einrichtungen, um den ISO15118- und ISO15118-20-Standard langfristig zu unterstützen. Eine Befähigung der Pico zur Unterstützung der Funktionen ist ausschliesslich softwareabhängig und bedarf keiner Hardwareänderung oder Anpassung.

**Bidirektionales Laden V2H und V2G mit der Pico:** Die Befähigung der Pico Ladestation zum bidirektionalen Laden unter ISO15118-20 ist ausschliesslich abhängig von der Freigabe und Verfügbarkeit der Funktionen und Einrichtungen seitens des Fahrzeuges und Fahrzeugherstellers. Die Ladehardware der Pico Ladestation stellt dafür keine Limitierung dar.

Die ersten dafür fähigen und effektiv erwerbbaren Fahrzeuge werden in den kommenden Jahren erwartet. Wir arbeiten fortwährend an der Entwicklung dieser Funktionen in unserer Pico Ladestation, um für diesen Moment bereit zu sein.

### Kann ich den Zählerstand auf Null zurücksetzen?

Nein. Da unsere Zähler für Abrechnungen verwendet werden, ist es nicht möglich, diese zurückzusetzen.

## Installationshandbuch, Downloads und Konformitätserklärung

**Datenblatt**

[Englisch](https://docs.google.com/presentation/d/1TPUl4Yk2u3fwl8zy6TWZ7TcwLpEe6Yzkx-jUVWnAl7k/export/pdf)

**Technische Dokumente**

[Pico Quickstarter](https://docs.google.com/document/d/1jRLrb7J9hg7yreVMQyvvFeWXF4lVsgWtSucW4cy1XLk/export?format=pdf)

[Installations- und Montageanleitung (Englisch)](https://docs.google.com/presentation/d/1neEyGHF5XE-SPaIoc-QK9U5wIxvFdNY8GwCYq8-VsBU/export/pdf)

[Installations- und Montageanleitung (Deutsch)](https://docs.google.com/presentation/d/1d_ejgHn-M8dmJdRPlC1F2z5bBZTvtU89_p2z1f22_aw/export/pdf)

[Bohrlehre](https://drive.google.com/file/d/1lQSSDwsKE9JeS2QkbpUDcLRhpeezxYnP/view?usp=sharing)

[Konformitätserklärung](https://drive.google.com/file/d/1K-9mIHKMXTeqzOCc0-i9vRfSnFElSCnu/view?usp=drive_link)

[Anschlussschema und Stromlaufschema ZIP Files](https://drive.google.com/file/d/1aVOLmWprogy2OizkcyH3kHsHntu0A8-D/view?usp=share_link)
