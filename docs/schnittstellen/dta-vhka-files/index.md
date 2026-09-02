---
title: 'DTA-VHKA Files Import / Export (Beta)'
slug: '/schnittstellen/dta-vhka-files'
description: 'Allgemeine Beschreibung der Schnittstelle'
sidebar_label: 'DTA-VHKA Files'
---
## Allgemeine Beschreibung der Schnittstelle

DTA-VHKA (Daten Träger Austausch der verbrauchsabhängigen Heiz- und Warmwasserkostenabrechnung) ist die Bezeichnung der Schnittstelle zum elektronischen Datenaustausch von verbrauchsabhängigen Daten zwischen den Abrechnungsunternehmen und den Immobilienbewirtschaftern.

Eine schweizweit einheitliche Schnittstelle zum Import der Verbrauchsdaten in die Verwaltungssoftwareprogramme sorgt für Effizienz und Flexibilität.
Somit können die Immobilienverwaltungen, unabhängig ihrer verwendeten Software, mit allen Ablesefirmen zusammenarbeiten.

## Arbeitshinweise im Zusammenhang mit VHKA-Files

- Der Mieterspiegel wird in der Immobiliensoftware gepflegt. Im smart-me Portal werden unter "Rechnungsempfänger" automatisch die Kontrakte und Leerstände übernommen.

- Der Mieterspiegel in der Immobiliensoftware muss vollständig sein, Leerstände sind zwingend zu übertragen.


## DTA-VHKA Import und Export Prozessbeschreibung

1.  VHKA-Anfragefile in Immobiliensoftware für die Liegenschaft exportieren.
    Das File wird anhand einer Abrechnungsperiode (Startdatum, Enddatum) einer Liegenschaft erstellt.
    Dieses File beinhaltet dann eine Abfrage für jeden Mieter der Liegenschaft innerhalb dieses Zeitraumes für jede existierende Abrechnungseinheit für:


- Den Verbrauch der Zählereinheit in kWh oder m3

- Den Promillewert der Summe der verteilten Kosten
    (VEWA muss in smart-me konfiguriert sein)

- Den Promillewert für Grundkosten und variable Kosten
    (VEWA muss in smart-me konfiguriert sein)

- Den Preis in einer Währung der aufgelaufenen Kosten als SUmme oder  aufgeteilt in Grundkosten und variable Kosten.
    (VEWA muss in smart-me konfiguriert sein)


2.  Die Abrechnungseinheiten und entsprechenden Kostenstellen müssen in beiden Softwares abgleichbar sein. Dies wird mit Hilfe den externen Schlüsseln im smart-me bewerkstelligt.

3.  Das Exportierte VHKA-Anfragefile kann danach im smart-me Billing hochgeladen werden.

4.  Das smart-me Billing berechnet die Verbräuche der einzelnen Abrechnungseinheiten pro Energietyp und befüllt das hochgeladene File mit den Daten.

5.  Das File wird mit den Daten ergänzt wieder exportiert.

6.  Das ergänzte VHKA-File kann nun in der Immobiliensoftware wieder hochgeladen werden.


![DTA-VHKA Files Import / Export (Beta) – Abbildung 1](/img/schnittstellen-dta-vhka-files/01.png)

## Aktuell unterstützte Formate

- XML (DTA-VHKA Standard)


### Datei Hochladen und Herunterladen

![DTA-VHKA Files Import / Export (Beta) – Abbildung 2](/img/schnittstellen-dta-vhka-files/02.png)

![DTA-VHKA Files Import / Export (Beta) – Abbildung 3](/img/schnittstellen-dta-vhka-files/03.png)

1.  Navigiere im Billing zu "Rechnungen" und dann in den Bereich "Exportieren"


2\. Wähle den Export Typ aus und lade die Datei mittels "Exportieren" hoch.

3\. Lade das ergänzte File mittels "Herunterladen" auf deinen Rechner.

## Verbindung der Kostenstellen mit smart-me Energietarifen und Wohneinheiten

Damit die Verbindung von Verwaltungssoftware und smart-me Liegenschaft klappt, müssen passende Kostenstellen und Wohneinheiten in beiden Systemen erstellt werden.

Diese wiederum werden über ID-Nummern aus dem Auftragsfile einmalig mit den Tarifen und den Wohneinheiten in smart-me verknüpft.

Grundlegend gilt die untere Übersicht bei allen Immobilienverwaltungssystemen.

### Kostenstellen und Tarifverbindungen wenn eine Kostenstelle = einem Tarifsystem entspricht

Kostenstellen bei Wärme, Kälte, Warmwasser und Kaltwasser

![DTA-VHKA Files Import / Export (Beta) – Abbildung 4](/img/schnittstellen-dta-vhka-files/04.png)

Kostenstellen bei Strom

![DTA-VHKA Files Import / Export (Beta) – Abbildung 5](/img/schnittstellen-dta-vhka-files/05.png)

### Kostenstellen und Tarifverbindungen wenn eine Kostenstelle = mehrere Tarife kombiniert

Kostenstellen bei Wärme, Kälte, Warmwasser und Kaltwasser wenn kombiniert wird

Kombinationen:

- Wärme und Warmwasser

- Wärme + Warmwasser + Kälte


![DTA-VHKA Files Import / Export (Beta) – Abbildung 6](/img/schnittstellen-dta-vhka-files/06.png)

Kostenstellen bei kombiniertem Strom

Häufigste Kombinationen:

- Kostenstelle Netzstrom: Tarife HT und NT + Spitzenstrom

- Kostenstelle Lokalstrom: Tarife Solarstrom HT + Solarstrom NT 


![DTA-VHKA Files Import / Export (Beta) – Abbildung 7](/img/schnittstellen-dta-vhka-files/07.png)

### Kostenstellen mit Energietarifen verbinden (VKA-Schlüssel definieren)

Externe Schlüssel werden für den Abgleich der Abrechnungseinheiten und Kostenstellen im Anfragefile mit den Tarifen und Abrechnungseinheiten der smart-me Plattform benötigt. 

Hinweis:
Solange sich keine Änderungen auf Seiten der Immobiliensoftware ergeben (Zusätzliche Räume oder Kostenstellen), sind die externen Schlüssel statisch und müssen nicht jedes mal erneuert werden.

![DTA-VHKA Files Import / Export (Beta) – Abbildung 8](/img/schnittstellen-dta-vhka-files/08.png)

Damit die Kostenstellen im VHKA-Auftragsfile eindeutig zugeordnet werden können, muss für jeden abgefragten Energieträger im Smart-me Portal ein passender Tarif definiert und verlinkt werden.

Die Verlinkung passiert über den jeweiligen externen Schlüssel beim erzeugten Tarif.

Wenn mehrere Tarife auf die gleiche Kostenstelle gelinkt werden, erhalten einfach mehrere tarife die gleiche Kostenstellen ID.

Einzeln:
Kostenstelle Netzstrom (ID= 6) --> Einheitstarif Netz ( Externer Schlüssel = 6)

Kombiniert:
Kostenstelle Netzstrom (ID= 6) \-->  Hochtarif ( Externer Schlüssel = 6) und Niedertarif (Externer Schlüssel = 6)

Hinweis: 

- Werden Stromtarife kombiniert übermittelt , müssen im smart-me die Preise für die elektrischen Tarife hinterlegt werden!

- Bei Wärme- und Wassertarifen in Kombination werden die Kosten im smart-me nicht benötigt.


![DTA-VHKA Files Import / Export (Beta) – Abbildung 9](/img/schnittstellen-dta-vhka-files/09.png)

## Kompatible Softwares und spezifische Konfigurationshinweise

Immobiliensoftwares welche den DTA-VHKA Standard unterstützen.
Liste gemäss Qualipool: [https://qualipool.ch/projekt/](https://qualipool.ch/projekt/) 

- [Immotop2](/schnittstellen/dta-vhka-files/Immotop2)

- Rimo R5 (Anleitung Immotop2 )

- [Garaio REM](/schnittstellen/dta-vhka-files/Garaio-REM)

- [Abaimmo](/schnittstellen/dta-vhka-files/AbaImmo)


## Fehlermeldungen behandeln
