---
title: 'smart-me Billing für deutschen Mieterstrom'
slug: '/konfiguration/billing/mieterstrom'
description: 'Du brauchst ein smart-me Professional Abo, um Stromabrechnungen nach dem Energiewirtschaftsgesetz (EnWG) erstellen zu können.'
sidebar_label: 'Mieterstrom'
---
### Voraussetzung

Du brauchst ein smart-me Professional Abo, um Stromabrechnungen nach  dem Energiewirtschaftsgesetz (EnWG) erstellen zu können.   

## Video Tutorial

Unser Video Tutorial erklärt dir Schritt für Schritt die zusätzlich notwendigen Einstellungen.

<Video src="KSCBESne84M" title="YouTube Video, smartRED Webinar: So geht Mieterstrom – Einfache Umsetzung und Funktionen erklärt" />

Vorstellung Mieterstrom

<Video src="wXGSibdoBR8" title="YouTube Video, Ismanings erste Mieterstromanlage der Körmer GmbH - Mieterstrom mit smartRED" />

Referenzobjekt

<Video src="rsI2zut_HKM" title="YouTube Video, Tutorial: smartRED Zählerkonfiguration in der smart-me Cloud" />

Zählerkonfiguration Mieterstrom

## Einleitung

Im smart-me Billing können mithilfe einiger Zusatzeinstellungen Stromrechnungen gemäss den Vorschriften von Paragraph § 42 des Deutschen Energiewirtschaftsgesetzes (EnWG) erstellt werden. 

WICHTIG:  Damit du die Zusatzeinstellungen für Mieterstrom erfolgreich vornehmen kannst, musst du vorher die [virtuellen Tarife](/konfiguration/billing) für deine Liegenschaft eingerichtet und die normalen Einstellungen des [smart-me Billings](/konfiguration/billing) vorgenommen haben.

WICHTIG:  Bei Mieterstrom muss immer mit den [virtuellen Tarifen](/konfiguration/billing) gearbeitet werden.

## Beispiel Mieterstromabrechnung

Eine fertig konfigurierte Mieterstromabrechnung kann folgendermassen aussehen: 

<Embed src="https://drive.google.com/file/d/1MGD7-EFY5qNWxINhmGS3asAVvA4_C4Uw/preview" aspect="1.330" title="Drive, Musterrechnung Mieterstrom.pdf" />

Musterrechnung Mieterstrom.pdf

## Messkonzepte Konfigurieren und Abgleichen

### Standard Messkonzept (Alle Bezüger sind Mieterstromteilnehmer)

![smart-me Billing für deutschen Mieterstrom – Abbildung 1](/img/konfiguration-billing-mieterstrom/01.png)

[Details Standardkonzept Tarifierung und Abgleich](/konfiguration/billing/mieterstrom/standard-messkonzept)

### Messkonzept MKD3 (Mieterstrom mit nicht Teilnehmern)

![smart-me Billing für deutschen Mieterstrom – Abbildung 2](/img/konfiguration-billing-mieterstrom/02.png)

[Details Messkonzept MKD3 Tarifierung und Abgleich](/konfiguration/billing/mieterstrom/mkd3-messkonzept-nicht-teilnehmer)

## Einstellungen allgemein

- Logge dich in den gewünschten smart-me Account ein 

- Klicke oben rechts auf "Konfiguration" und dann auf "Rechnung erstellen"

- Wähle nun zuerst den Button "Einstellungen"


Hier nimmst du die allgemeinen Einstellungen für die Darstellung des Rechnungsdokument vor. Dort nimmst du auch die bereits aus dem im normalen [Billing Artikel](/konfiguration/billing) beschriebenen Einstellungen vor:


- Währung (bei Mieterstrom immer EUR)

- Steuer 

- Logo ihrer Firma (für die Darstellung im  Rechnungsdokument)

- Kopfzeile / Absender

- Fusszeile


![smart-me Billing für deutschen Mieterstrom – Abbildung 3](/img/konfiguration-billing-mieterstrom/03.png)

Zusätzlich kannst du nun unten im Bereich "Mieterstrom Deutschland" den Knopf aktivieren.  Damit werden die zusätzlichen Einstellungen für die Mieterstrom - Erweiterungen freigeschaltet.

Direkt hier kannst du folgende Erweiterungen machen:

![smart-me Billing für deutschen Mieterstrom – Abbildung 4](/img/konfiguration-billing-mieterstrom/04.png)

### Netzbetreiber

Hier legst du fest, wer der Versorgungsnetzbetreiber bei dir ist. Die Information solltest du von deinem Elektroinstallateur/PV Anlagenbauer oder im Internet erhalten.

### Kundenservice / Schlichtungsstelle

Vorschlag Titel:

Was uns antreibt? Ihre Zufriedenheit

Vorschlag Freitext (für ganz Deutschland / ohne Gewähr auf Rechtssicherheit):

"Kundenservice steht bei uns an erster Stelle. Sie erreichen uns unter der Nummer 01234 / 87589.

Falls es dennoch zu Beschwerden kommen sollte und Sie – wider Erwarten – nach vier Wochen keine Antwort oder Abhilfe von uns erhalten haben, können Sie eine Schlichtung beantragen:



Schlichtungsstelle Energie e. V.

Friedrichstraße 133

10117 Berlin

Telefon: +49 (0) 30 / 27 57 240 – 0

Fax: +49 (0) 30 / 27 57 240 – 69

E-Mail: [info@schlichtungsstelle-energie.de

](mailto:info@schlichtungsstelle-energie.de)ACHTUNG: Die aufgeführte Schlichtungsstelle ist nur als Beispiel genannt. Es gibt in Deutschland eine Vielzahl an Schlichtungsstellen und du hast die freie Wahl. Kontaktiere die gewünschte Schlichtungsstelle frühzeitig.

Diese Informationen werden in deinem Rechnungsdokument ganz unten aufgeführt.

## Konfiguration der Liegenschaft

Wechsele oben im Reiter auf den Menüpunkt "Konfiguration", hier kannst du nun die freigeschalteten Erweiterungen für die Liegenschaft und in den einzelnen Wohneinheiten vornehmen. Klicke zuerst auf den Ordner der gewünschten Liegenschaft.

![smart-me Billing für deutschen Mieterstrom – Abbildung 5](/img/konfiguration-billing-mieterstrom/05.png)

### Reststromzusammensetzung

Ganz oben kannst du die Reststromzusammensetzung definieren. Der Reststrom ist die Strommenge, die nicht direkt von deiner Mieterstromanlage selbst produziert wird, sondern vom Netz dazu geliefert werden muss. Die Angaben zur Zusammensetzung des Reststroms erhältst du von deinem gewählten Reststromanbieter.

Ein Beispiel kann so aussehen:

![smart-me Billing für deutschen Mieterstrom – Abbildung 6](/img/konfiguration-billing-mieterstrom/06.png)

### Verbrauch im Vergleich zur Vorperiode und anderen

Direkt darunter kannst du zum Vergleich die Stromwerte von Vergleichswerten definieren.

Das Rechnungsdokument wird den Stromempfängern diese Referenzwerte sowie den eigenen Verbrauch in der Vorperiode ausgeben.

ACHTUNG: Denke daran, die richtigen Werte  für die von dir gewählte Abrechnungsperiode einzusetzen.  Wenn du also monatliche Rechnungen erstellst, wähle die Referenzwerte auf Monatsbasis usw.

![smart-me Billing für deutschen Mieterstrom – Abbildung 7](/img/konfiguration-billing-mieterstrom/07.png)

[](https://drive.google.com/open?id=1mWbJe2QTUs5BnZdcZ7tJ1EwmQpi65nG0xFCrMNafJ4I "Open Spreadsheet, % Stromverbrauch Deutschland in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1mWbJe2QTUs5BnZdcZ7tJ1EwmQpi65nG0xFCrMNafJ4I/htmlembed?gid=0" title="Spreadsheet, % Stromverbrauch Deutschland" />

% Stromverbrauch Deutschland

Angaben der Tabelle ohne Gewähr.

Praxistipp:  Direkt unter dem Eingabefeld für den Verbrauch zur Vorperiode und anderen findest du die von dir bereits konfigurierten [Virtuellen Tarife](/konfiguration/billing). Wenn du einen Einheitstarif verrechnen möchtest (Netz- und Solarstrom sind gleich teuer), dann musst du in einem Mieterstrommodell trotzdem zwei Tarife (mit dem selben Preis) definieren. Dies stellt sicher, dass die Abgaben zu den verschiedenen Stromkomponenten, von unserem Billing Tool korrekt ermittelt werden können.

### Definition der Tarifkomponenten pro Stromsorte

Weiter unten kannst du unter "Sonstiges" die Tarifkomponenten pro Stromsorte (Netz und Solar) definieren. Dies hat den Zweck, dem Endkunden aufzuzeigen, wie sein Strompreis zustande kommt. Du musst dies sowohl für den Netzstrom, wie auch den Solarstrom tun. Die Komponenten müssen zusammen den von dir definierten Preis pro Stromsorte (hast du bei den [Virtuellen Tarifen](/konfiguration/billing) festgelegt) ergeben, ansonsten gibt dir das Billing eine Fehlermeldung aus.

![smart-me Billing für deutschen Mieterstrom – Abbildung 8](/img/konfiguration-billing-mieterstrom/08.png)

Du kannst entweder die Standard- Mieterstrom-Tarifkomponenten direkt einfügen oder über "Editieren" einzelne Tarifkomponenten erfassen.

Wichtig: Wähle den korrekten Typ beim Editieren bzw. spezifiziere ob es sich um eine Tarifkomponente des Netzstroms (Reststroms) oder des Solarstroms handelt.


Wichtig: Die Angaben zu der Zusammensetzung der Komponenten für den Netzstrom (Reststrom) erhältst du bei deinem gewählten Reststromanbieter.

Der Solarstrom besteht üblicherweise nur aus EEG-Umlage und Erzeugungspreis.

![smart-me Billing für deutschen Mieterstrom – Abbildung 9](/img/konfiguration-billing-mieterstrom/09.png)

Ein fertige Konfiguration kann so aussehen:

![smart-me Billing für deutschen Mieterstrom – Abbildung 10](/img/konfiguration-billing-mieterstrom/10.png)

Danach hast alle Einstellungen auf der Ebene Liegenschaft vorgenommen.  Zum Abschluss musst du noch in den einzelnen Wohneinheiten die Kundennummer und die Angaben zum Vertrag und Laufzeit eintragen.

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
