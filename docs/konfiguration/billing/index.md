---
title: 'Billing: Energie abrechnen'
slug: '/konfiguration/billing'
description: 'Du brauchst ein smart-me Professional Abo, um Energiekostenabrechnungen erstellen zu können.'
sidebar_label: 'Rechnungsstellung'
---
### Voraussetzung

Du brauchst ein smart-me Professional Abo, um Energiekostenabrechnungen erstellen zu können. 

## Tools

[smart-me Stromtarifrechner](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

## Webinar smart-me Billing von A-Z

In unserem Webinar wird Schritt für Schritt erklärt, wie mit dem Billing Tool Energiekostenabrechnungen erstellt werden können:

<Video src="0AvKOogoW5Q" title="Video" />

<Video src="mK1HYLRtBUI" title="Video" />

Inhalt vom Video

- Konfiguration von Hoch- und Niedertarif auf Einheitstarif

- Preisanpassung von den virtuellen Tarifen

- Spitzenleistung

- Zählermiete


## smart-me Billing Rechnungsbeispiele

Beispiel Energiekostenabrechnung.pdf

Beispiel: Strom Abrechnung

Beispiel\_Rechnung\_VEWA\_Heizkosten.pdf

Beispiel: VEWA Abrechnung

## Schritt für Schritt die Abrechnung konfigurieren

Mit dieser Schritt-für-Schritt-Anleitung möchten wir dich bei der Konfiguration deines Billings unterstützen. Bitte beachte, dass dies nur ein Beispiel ist, an dem du dich orientieren kannst. Je nach Aufbau deiner Liegenschaft wird es Unterschiede zu unserem Beispiel geben. 

## Einstellungen der Rechnungsstellung

Navigiere als erstes in die  Einstellungen der Rechnungsstellung.

Konfiguriere hier die Währung und die Anwendung von Mehrwertsteuern.



Konkrete Einstellungen bei der MWST:

- Fall A: Du bist ein ZEV und machst sicher weniger als 100'000CHF Umsatz mit Strom und hast dich nicht freiwillig der MWST unterstellt:
    \- MWST 0%
    \- Steuer in Preise bereits inbegriffen: JA

- Fall B: Du bist ein ZEV und machst 100'000 CHF oder mehr Umsatz mit den Stromverkäufen oder hast dich freiwillig der MWST unterstellt:
    \- MWST 8.1%
    \- Steuer in Preise bereits inbegriffen: NEIN


![Billing: Energie abrechnen – Abbildung 1](/img/konfiguration-billing/01.png)

![Billing: Energie abrechnen – Abbildung 2](/img/konfiguration-billing/02.png)

Konfiguriere bei der Gelegenheit auch gleich noch dein Logo für die Rechnung.

Statte die Kopfzeile mit dem Kontakt und Adresse des Rechnungsversenders aus und richte ein paar freundliche Worte an deine Kunden in der Fusszeile.

![Billing: Energie abrechnen – Abbildung 3](/img/konfiguration-billing/03.png)

## Konfiguration der Rechnungsstellung

Navigiere nun zur Rechnungsstellung Konfiguration um die Abrechnungen aus den Liegenschaften zu konfigurieren.

![Billing: Energie abrechnen – Abbildung 4](/img/konfiguration-billing/04.png)

1.  ### Liegenschaft Erstellen


In der Rechnungsstellung kann die Liegenschaft hinzugefügt (angelegt) werden. 

Dies wird nun für alle Knoten durchgeführt, welche Abrechnungseinheiten enthalten.

Bei diesem Schritt werden alle bereits erstellen Unterordner und zugewiesen Zähler automatisch zugeordnet. Aus diesem Grund empfehlen wird, dies jeweils vor dem Anlegen der Liegenschaft in smart-me Billing zu tun.

Die Zählerpunkte welche verteilt werden sollen und sich im "Technischen Zähler" Knoten befinden, müssen nun noch manuell zugeordnet werden.

![Billing: Energie abrechnen – Abbildung 5](/img/konfiguration-billing/05.png)

### 2\. Zähler manuell einer Abrechnungseinheiten zuweisen

Beim Erstellen der Liegenschaft werden die Zähler automatisch zur Abrechnungseinheit (Ordner) zu 100% zugewiesen.

Möchtest du ein Zähler (z.B. Allgemein) gemäss einem Verteilschlüssel aufteilen oder nachträglich ändern, muss dies manuell getätigt werden.

- Links die Abrechnungseinheit wählen (Unterordner z.B, WHG 1)

- Klicken z.B. bei Elektrizität auf Hinzufügen 

- Wähle den gewünschten Zähler aus und gib an, zu wie viel Prozent verrechnet werden soll.


Das erklärte Vorgehen funktioniert analog für die anderen Energietypen (Wärme, Kälte etc.)

![Billing: Energie abrechnen – Abbildung 6](/img/konfiguration-billing/06.png)

### 3\. IBAN hinterlegen

Im smart-me Billing kann optional die QR-Rechnung aktiviert werden.

Nach dem Hinterlegung der Kontodaten wird für jede Abrechnungseinheit (Mieter) eine QR-Rechnung für die Einzahlung angehängt.

smart-me erkennt die korrekt ausgefüllten Absender automatisch, wenn die Rechnungsadresse im Billing auf 3 Zeilen hinterlegt ist. Wenn eine Firma oder eine Anschrift gewählt wird, muss diese vor dem Namen hinzugefügt werden.

z.B.

```
Firma AG, Peter Lustig
Löwenzahnstrasse 42
6666 Risch
```

Wird keine korrekte Adresse erkannt, bleibt das Feld Absender (Zahlbar durch) in der QR-Rechnung leer.

smart-me unterstützt keine Referenznummern. Um diese nutzen zu können, wird ein [Drittystem](/drittsysteme) benötigt welches dies auch unterstützt (z.B.[Bexio](/drittsysteme/bexio)). 

Um die Rechnung ohne Referenz zu identifizieren, wird eine Zusätzliche Information (Mitteilung an den Begünstigten) auf der QR-Rechnung angefügt, welche sich wie folgt zusammensetzt: Name der Abrechnungseinheit (Ordnername).

Die Darstellung ist für den Versand per E-Mail optimiert. Falls die Rechnungen ausgedruckt werden, empfehlen wir, die QR-Rechnung zu deaktivieren und diese bei der Bank zu bestellen.

![Billing: Energie abrechnen – Abbildung 7](/img/konfiguration-billing/07.jpg)

![Billing: Energie abrechnen – Abbildung 8](/img/konfiguration-billing/08.png)

### 4\. Mieterspiegel erfassen

Für die Abrechnung nach VEWA müssen alle Mieterkontrakte und Leerstände lückenlos bei smart-me angegeben werden.

- Menu Rechnungsstellung

- Konfiguration

- Links Abrechnungseinheit auswählen (Unterordner z.B. WHG 1)

- Adresse und Gültigkeit pflegen

- E-Mail ist optional und wird nur für den automatischen Rechnungsversand verwendet.


Hinweis für Export in Immobiliensoftwares mit DTA-VHKA Files:
Wenn Sie die VEWA verwenden wollen, aber die Daten in ein anderes System exportieren, brauchen Sie keinen Mieterspiegel zu erfassen, dieser wird über das Importfile erstellt.
Achten Sie darauf dass alle Mieterverhältnisse und Leerständer verzeichnet sind.

![Billing: Energie abrechnen – Abbildung 9](/img/konfiguration-billing/09.png)

![Billing: Energie abrechnen – Abbildung 10](/img/konfiguration-billing/10.png)

### 5\. Stromtarife konfigurieren

- Menu Rechnungsstellung

- Konfiguration

- Links die Liegenschaft wählen (Hauptordner z.B. Altgasse 13)

- Virtuelle Stromtarife Hinzufügen. (z.B. Hochtarif, Niedertarif, Solartarif)


### 6\. Wärme / Wasser konfigurieren

Bei der Tarifierung und Abrechnung von Multienergie bestehen grundsätzlich zwei Möglichkeiten der Konfiguration:

Abrechnung ohne VEWA Funktion

- Abrechnung mittels extern kalkuliertem Energietarif pro Energieart. Wird mit einem Preis pro CHF/m3 oder CHF/kWh in der Liegenschaft unterhalb der virtuellen Tarife geführt.


Abrechnung mit VEWA Funktion (Empfohlen)

- Auflaufende Kosten übers Jahr von Wärme / Wasser können erfasst werden.  Der Tarif wird danach über die Periode berechnet und mit Verteilschlüsseln auf die Abrechnungseinheiten verteilt. 


### Nächste Zwischenschritte

[Stromtarife konfigurieren](/konfiguration/billing/stromtarife-definieren)

[VEWA konfigurieren](/konfiguration/billing/vewa-abrechnung)

### 7\. Sonstige Kosten für Strom konfigurieren (Falls nötig)

In dem Feld Sonstiges können weitere Kosten-Positionen hinzugefügt werden. Dies geht für jede Abrechnungseinheit (Abrechnungseinheit) individuell oder global für alle Abrechnungseinheiten (Liegenschaft). 

Auf der Ebene der Liegenschaft:

In dem Feld Sonstiges können weitere Kosten-Positionen hinzugefügt werden. Dies geht für jede Abrechnungseinheit (Abrechnungseinheit) individuell oder global für alle Abrechnungseinheiten (Liegenschaft). 

Beispiel:
80% Grundkostenanteils des Energieversorger soll im zusammenhand mit dem Solartarif an alle Teilnehmer gleichermassen verrechnet wwerden.

- Die eingetragene Gebühr wird auf allen Rechnungen pro Monat ergänzt


Hinweis: Die Sonstiges Kosten sind nur mit der Elektrizitätsrechnung verfügbar.



Auf der Ebene der Abrechnungseinheit

Beispiel:
Eine Ladestation wird vermietet und soll Monatlich der Abrechnungseinheit in Rechnung gestellt werden.

- Die Kosten wird nur der einen Abrechnungseinheit angelastet




![Billing: Energie abrechnen – Abbildung 11](/img/konfiguration-billing/11.png)

### 8\. Rechnung erstellen

Wenn der Blaue Kasten bei den Virtuellen Tarifen auf dem heutigen Datum ist, kann eine Proberechnung erstellt werden.

- Menu Rechnungsstellung

- Rechnungen

- Datum eingeben

- Rechnungsvorschau erstellen


Bist du zufrieden mit der Vorschau, so kannst du zurückkehren und die echten Rechnungen erstellen.

Auf dieser Seite findest du eine Beschreibung der häufigsten Fehlermeldungen und mögliche Lösungen: [Billing Fehlermeldungen](/stoerungsbehebung/billing-fehlermeldungen) 

### Nächster Schritt

[Weiter zur Erstellung von Mieterzugängen](/konfiguration/benutzerkonfiguration)

## Hilfreiche Hinweise zu den Tarifdaten

### Visualisierung

In der Standardansicht des Ordners der Abrechnungseinheit (z. B. eine Wohnung) wird nun eine neue Kachel angezeigt. Diese gibt die Zählerstände für die virtuellen Tarife an. Wenn man auf diese Kachel klickt wird das Lastprofil für die virtuellen Tarife angezeigt. 



![Billing: Energie abrechnen – Abbildung 12](/img/konfiguration-billing/12.jpg)

### Wie wird der Solarstrom aufgeteilt

Die smart-me-Plattform verwendet den Produktionszähler (PV-Zähler) zur Ermittlung der erzeugten Strommenge und den virtuellen Gesamtverbrauchszähler zur Ermittlung der verbrauchten Strommenge. Daraus wird ein prozentualer Anteil des Solarstroms berechnet. 

Jeder Stromzähler (Mieter) hat somit Anspruch auf den gleichen Anteil an Solarstrom pro 15 Minuten, z.B. 40% seines Verbrauchs in kWh.

Beispiel für die Zuteilung von Solarstrom

- Gesamtverbrauch 10kWh

- Solarstrom 6kWh (60% Solar / 40% Netz)

- Mieter 1 Verbrauch 6kWh (3,6kWh Solar / 2,4kWh Netz)

- Mieter 2 Verbrauch 4kWh (2,4kWh Solar / 1,6 kWh Netz)


Die Genauigkeit kann verbessert werden, indem der Bilanzzähler für den Solartarif konfiguriert wird.

![Billing: Energie abrechnen – Abbildung 13](/img/konfiguration-billing/13.png)

[Weiter zur erstellung von Mieterzugängen](/konfiguration/benutzerkonfiguration)
