---
title: 'Stromtarife definieren (Deutschland)'
slug: '/konfiguration/billing-deutschland/stromtarife-definieren'
description: 'Virtuelle Tarife für deutschen Mieterstrom: Solartarif inklusive vZEV oder Solartarif über Verbrauch und PV, mit oder ohne Batterietarif.'
sidebar_label: 'Stromtarife definieren'
naechste_schritte: [konfiguration/billing-deutschland/sonstige-kosten]
optionale_schritte: [konfiguration/wenndann-aktionen/tarifzeiten-definieren]
vorheriger_schritt: konfiguration/billing-deutschland/mieterspiegel-erfassen
---
<Menueweg>Rechnungserstellung → Liegenschaften & Tarife</Menueweg>

Bei Mieterstrom muss **immer mit virtuellen Tarifen** gearbeitet werden. Nur so lässt sich pro Abrechnungseinheit ausweisen, welcher Anteil des Stroms aus der Solaranlage und welcher aus dem Netz kam — und genau das verlangt die Abrechnung nach § 42 EnWG.

## Wo du die Tarife findest

<Menueweg>Rechnungserstellung → Liegenschaften & Tarife</Menueweg>

- Links die Liegenschaft wählen (Hauptordner z.B. Altgasse 13)
- Virtuelle Stromtarife Hinzufügen. (z.B. Hochtarif, Niedertarif, Solartarif)


## Beschaffe dir das Tarifblatt deines Energieversorgers


## Eintragen des Netztarifs


## Berechnen und Eintragen des Solar- und Batterietarife

### Stromtarife konfigurieren Standard Messkonzept

#### Tarifierung mit Solartarif inkl. vZEV

Der Bilanzzähler wird für die Tarifierungsberechnung referenziert.

Bei der Nutzung des Solartarif inkl. vZEV werden keine zusätzlichen Lizenzen für virtuelle Zähler fällig.

Bilanzzähler

Der Hausanschlusszähler wird referenziert als Bilanzzähler.

![Standard Messkonzept – Abbildung 2](/img/planung-standard-messkonzept/02.png)

Produktionszähler

Alle Produktionszähler und Batteriezähler werden als Produktion erfasst.

![Standard Messkonzept – Abbildung 3](/img/planung-standard-messkonzept/03.png)

#### Tarifierung mittels Solartarif (Verbrauch / PV) mit oder ohne Batterietarif (Verbrauch / Batterie)

Der Bilanzzähler wird für die Tarifierungsberechnung ignoriert, er wird später nur zur Verifizierung betrachtet.

Bei der Nutzung des Solartarif /verbrauch /PV) werden zusätzliche Lizenzen für virtuellen Zähler fällig.

Der Gesamtvebrauch wird mindestens benötigt. Dieser wird als virtueller Zähler erstellt bestehend aus allen Teilnehmenden Abgängen des Mieterstroms.

Gesamtverbrauch = Wohnung 1.1 + Wohnung 1.2 + Wohnung 2.1 + Allgemein + Parkplatz 1 + Parkplatz 2 + Wärmepumpe

Es wird jeweils unter Produktion der Solaranlagenzähler bzw. Batteriezähler beim Batterietarif hinzugefügt.

Beim Gesamtverbrauch wird der virtuell erstellte Gesamtverbrauch hinterlegt.

Der Bilanzzähler wird hier bewusst referenziert um die Genauigkeit zu erhöhen!

![Standard Messkonzept – Abbildung 4](/img/planung-standard-messkonzept/04.png)


### Stromtarife konfigurieren MKD3 mit Nicht Teilnehmern

#### Tarifierung mit Solartarif inkl. vZEV

Der Bilanzzähler wird für die Tarifierungsberechnung ignoriert, er wird später nur zur Verifizierung betrachtet.

Bei der Nutzung des Solartarif inkl. vZEV werden keine zusätzlichen Lizenzen für virtuelle Zähler fällig.

Bilanzzähler

Alle Teilnehmenden Wohnungen / Parkplätze und Produktionen als Bilanzzähler.

![MKD3 Messkonzept (mit nicht Teilnehmer) – Abbildung 2](/img/planung-mkd3-messkonzept-nicht-teilnehmer/02.png)

Produktionszähler

Alle Produktionszähler als Produktion erfassen


![MKD3 Messkonzept (mit nicht Teilnehmer) – Abbildung 3](/img/planung-mkd3-messkonzept-nicht-teilnehmer/03.png)

#### Tarifierung mittels Solartarif (Verbrauch / PV) mit oder ohne Batterietarif (Verbrauch / Batterie)

Der Bilanzzähler wird für die Tarifierungsberechnung ignoriert, er wird später nur zur Verifizierung betrachtet.

Bei der Nutzung des Solartarif /verbrauch /PV) werden zusätzliche Lizenzen für virtuellen Zähler fällig.

Der Gesamtvebrauch wird mindestens benötigt. Dieser wird als virtueller Zähler erstellt bestehend aus allen Teilnehmenden Abgängen des Mieterstroms.

Gesamtverbrauch = Wohnung 1.1 + Wohnung 1.2 + Allgemein + Parkplatz 1 + Parkplatz 2 + Wärmepumpe

Es wird jeweils unter Produktion der Solaranlagenzähler bzw. Batteriezähler beim Batterietarif hinzugefügt.

Beim Gesamtverbrauch wird der virtuell erstellte Gesamtverbrauch hinterlegt.

Der Bilanzzähler wird bewusst nicht referenziert um die virtuelle Bilanzierung nicht flasch zu korrigieren!

![MKD3 Messkonzept (mit nicht Teilnehmer) – Abbildung 4](/img/planung-mkd3-messkonzept-nicht-teilnehmer/04.png)



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

Danach hast du alle Einstellungen auf der Ebene Liegenschaft vorgenommen.
