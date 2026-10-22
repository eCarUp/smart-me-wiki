---
title: 'Energie abrechnen (Deutschland)'
slug: '/konfiguration/billing-deutschland'
description: 'Stromabrechnung nach § 42 Energiewirtschaftsgesetz (EnWG): Abrechnungseinheiten, virtuelle Tarife, Messkonzept und Rechnungserstellung für deutschen Mieterstrom.'
sidebar_label: 'Rechnungsstellung Deutschland'
naechste_schritte: [konfiguration/benutzerkonfiguration]
optionale_schritte: [konfiguration/billing-deutschland/stromtarife-definieren]
vorheriger_schritt: konfiguration/wenndann-aktionen/alarme
---
### Voraussetzung

Du brauchst ein smart-me Professional Abo, um Stromabrechnungen nach dem Energiewirtschaftsgesetz (EnWG) erstellen zu können.

Diese Seite führt durch die Abrechnung für **deutschen Mieterstrom**. Die Schweizer Variante mit ZEV und VEWA findest du unter [Rechnungsstellung Schweiz](/konfiguration/billing).

## Video Tutorial

Unser Video Tutorial erklärt dir Schritt für Schritt die zusätzlich notwendigen Einstellungen.

<div className="row">
<div className="col col--4">

<Video src="KSCBESne84M" title="YouTube Video, smartRED Webinar: So geht Mieterstrom – Einfache Umsetzung und Funktionen erklärt" />

Vorstellung Mieterstrom

</div>
<div className="col col--4">

<Video src="wXGSibdoBR8" title="YouTube Video, Ismanings erste Mieterstromanlage der Körmer GmbH - Mieterstrom mit smartRED" />

Referenzobjekt

</div>
<div className="col col--4">

<Video src="rsI2zut_HKM" title="YouTube Video, Tutorial: smartRED Zählerkonfiguration in der smart-me Cloud" />

Zählerkonfiguration Mieterstrom

</div>
</div>

<div className="row">
<div className="col col--8">

## Beispiel Mieterstromabrechnung

Eine fertig konfigurierte Mieterstromabrechnung kann folgendermassen aussehen: 

</div>
<div className="col col--4 bild--mitte">

<Embed src="https://drive.google.com/file/d/1MGD7-EFY5qNWxINhmGS3asAVvA4_C4Uw/preview" aspect="1.330" title="Drive, Musterrechnung Mieterstrom.pdf" />

Musterrechnung Mieterstrom.pdf

</div>
</div>

# Schritt für Schritt

## Einstellungen Allgemein

<div className="row">
<div className="col col--7">

- Logge dich in den gewünschten smart-me Account ein 

- Klicke oben rechts auf "Konfiguration" und dann auf "Rechnung erstellen"

- Wähle nun zuerst den Button "Einstellungen"

Hier nimmst du die allgemeinen Einstellungen für die Darstellung des Rechnungsdokument vor.
- Währung (bei Mieterstrom immer EUR)
- Steuer 
- Logo ihrer Firma (für die Darstellung im  Rechnungsdokument)
- Kopfzeile / Absender
- Fusszeile

</div> 
<div className="col col--5 bild--mitte">

![smart-me Billing für deutschen Mieterstrom – Abbildung 3](/img/konfiguration-billing-mieterstrom/03.png)

</div>
</div>

### Mieterstrom aktivieren

Zusätzlich kannst du nun unten im Bereich "Mieterstrom Deutschland" den Knopf aktivieren.  Damit werden die zusätzlichen Einstellungen für die Mieterstrom - Erweiterungen freigeschaltet.

![smart-me Billing für deutschen Mieterstrom – Abbildung 4](/img/konfiguration-billing-mieterstrom/04.png)

#### Netzbetreiber

Hier legst du fest, wer der Versorgungsnetzbetreiber bei dir ist. Die Information solltest du von deinem Elektroinstallateur/PV Anlagenbauer oder im Internet erhalten.

#### Kundenservice / Schlichtungsstelle

**Vorschlag Titel:** Was uns antreibt? Ihre Zufriedenheit

**Vorschlag Freitext (für ganz Deutschland / ohne Gewähr auf Rechtssicherheit):**

"Kundenservice steht bei uns an erster Stelle. Sie erreichen uns unter der Nummer 01234 / 87589.

Falls es dennoch zu Beschwerden kommen sollte und Sie – wider Erwarten – nach vier Wochen keine Antwort oder Abhilfe von uns erhalten haben, können Sie eine Schlichtung beantragen:

Schlichtungsstelle Energie e. V.

Friedrichstraße 133

10117 Berlin

Telefon: +49 (0) 30 / 27 57 240 – 0

Fax: +49 (0) 30 / 27 57 240 – 69

E-Mail: [info@schlichtungsstelle-energie.de
](mailto:info@schlichtungsstelle-energie.de)

ACHTUNG: Die aufgeführte Schlichtungsstelle ist nur als Beispiel genannt. Es gibt in Deutschland eine Vielzahl an Schlichtungsstellen und du hast die freie Wahl. Kontaktiere die gewünschte Schlichtungsstelle frühzeitig.

Diese Informationen werden in deinem Rechnungsdokument ganz unten aufgeführt.

## Konfiguration der Liegenschaft

<div className="row">
<div className="col col--6">

Wechsele oben im Reiter auf den Menüpunkt "Konfiguration", hier kannst du nun die freigeschalteten Erweiterungen für die Liegenschaft und in den einzelnen Wohneinheiten vornehmen. Klicke zuerst auf den Ordner der gewünschten Liegenschaft.

</div>
<div className="col col--6 text--center">

![smart-me Billing für deutschen Mieterstrom – Abbildung 5](/img/konfiguration-billing-mieterstrom/05.png)

</div>
</div>

### Reststromzusammensetzung

Ganz oben kannst du die Reststromzusammensetzung definieren. Der Reststrom ist die Strommenge, die nicht direkt von deiner Mieterstromanlage selbst produziert wird, sondern vom Netz dazu geliefert werden muss. Die Angaben zur Zusammensetzung des Reststroms erhältst du von deinem gewählten Reststromanbieter.

Ein Beispiel kann so aussehen:

![smart-me Billing für deutschen Mieterstrom – Abbildung 6](/img/konfiguration-billing-mieterstrom/06.png)

### Verbrauch im Vergleich zur Vorperiode und anderen

<div className="row">
<div className="col col--4">

Direkt darunter kannst du zum Vergleich die Stromwerte von Vergleichswerten definieren.

Das Rechnungsdokument wird den Stromempfängern diese Referenzwerte sowie den eigenen Verbrauch in der Vorperiode ausgeben.

ACHTUNG: Denke daran, die richtigen Werte  für die von dir gewählte Abrechnungsperiode einzusetzen.  Wenn du also monatliche Rechnungen erstellst, wähle die Referenzwerte auf Monatsbasis usw.

</div>
<div className="col col--8 text--center">

![smart-me Billing für deutschen Mieterstrom – Abbildung 7](/img/konfiguration-billing-mieterstrom/07.png)

</div>
</div>

[](https://drive.google.com/open?id=1mWbJe2QTUs5BnZdcZ7tJ1EwmQpi65nG0xFCrMNafJ4I "Open Spreadsheet, % Stromverbrauch Deutschland in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1mWbJe2QTUs5BnZdcZ7tJ1EwmQpi65nG0xFCrMNafJ4I/htmlembed?gid=0" height="314px" title="Spreadsheet, % Stromverbrauch Deutschland" />

% Stromverbrauch Deutschland

Angaben der Tabelle ohne Gewähr.

## Tarife konfigurieren

- Menu Rechnungsstellung
- Konfiguration
- Links die Liegenschaft wählen (Hauptordner z.B. Altgasse 13)
- Virtuelle Stromtarife Hinzufügen. (z.B. Hochtarif, Niedertarif, Solartarif)

Im Detail: [Stromtarife definieren](/konfiguration/billing-deutschland/stromtarife-definieren)

## Konfiguration der Wohneinheiten

Klicke nun nacheinander auf die verschiedenen Wohneinheiten Ihrer Liegenschaft und spezifizieren sie.

### Kundenummer

Hier legst du die Kundennummer für diesen Mieter fest.

Hinweis:

Die Kundennummer wird automatisch auch beim PDF-Dokument als Name mitverwendet zur leichteren externen Identifikation.

### Vertrag und Laufzeit

Hier kannst du vertragliche Bestimmungen einfügen. Ein Beispiel (ohne Gewähr auf Rechtssicherheit) wäre:

Ihr Vertrag hat eine Laufzeit bis DD.MM.YYYY und verlängert sich entsprechend der Regelung in Ziffer X Ihres Stromliefervertrages um ein Jahr, wenn keine rechtzeitige Kündigung erfolgt. Die Kündigung des Stromliefervertrages ist Ihnen mit einer Frist von drei Monaten zum DD.MM.YYYY gemäß Ziffer X des Stromliefervertrages möglich. Ein Sonderkündigungsrecht bleibt unberührt

![smart-me Billing für deutschen Mieterstrom – Abbildung 11](/img/konfiguration-billing-mieterstrom/11.png)

Gratulation, du hast es geschafft! Wenn du nun Rechnungen im smart-me Billing Tool generierst, wird dir ein Rechnungsdokument mit allen nötigen Angaben sowie den visuellen Darstellungen ausgegeben.

