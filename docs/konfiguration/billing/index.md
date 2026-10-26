---
title: 'Energie abrechnen (Schweiz)'
slug: '/konfiguration/billing'
description: 'Du brauchst ein smart-me Professional Abo, um Energiekostenabrechnungen erstellen zu können.'
sidebar_label: 'Rechnungsstellung'
naechste_schritte: [konfiguration/billing/einstellungen]
vorheriger_schritt: konfiguration/wenndann-aktionen/alarme
---
<Menueweg>Rechnungserstellung</Menueweg>

### Voraussetzung

Du brauchst ein smart-me Professional Abo, um Energiekostenabrechnungen erstellen zu können. 

## Schritt für Schritt die Abrechnung konfigurieren

Mit dieser Schritt-für-Schritt-Anleitung möchten wir dich bei der Konfiguration deines Billings unterstützen. Bitte beachte, dass dies nur ein Beispiel ist, an dem du dich orientieren kannst. Je nach Aufbau deiner Liegenschaft wird es Unterschiede zu unserem Beispiel geben. 

Jeder Schritt hat seine eigene Seite. Du kannst sie der Reihe nach durchgehen — am Fuss jeder Seite steht, wie es weitergeht — oder hier direkt dorthin springen, wo du gerade stehst.

<Ablauf land="ch" bis="konfiguration/billing/rechnung-erstellen" />

## Tools

[smart-me Stromtarifrechner](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

## Webinar smart-me Billing von A-Z

In unserem Webinar wird Schritt für Schritt erklärt, wie mit dem Billing Tool Energiekostenabrechnungen erstellt werden können:

<div className="row">
<div className="col col--6">

<Video src="0AvKOogoW5Q" title="YouTube Video, smart-me Billing für Fortgeschrittene" />

</div>
<div className="col col--6">

<Video src="mK1HYLRtBUI" title="YouTube Video, smart-me Billing - virtuelle Tarife, Spitzenleistung, Zählermiete ändern" />

Inhalt vom Video

- Konfiguration von Hoch- und Niedertarif auf Einheitstarif

- Preisanpassung von den virtuellen Tarifen

- Spitzenleistung

- Zählermiete

</div>
</div>

## smart-me Billing Rechnungsbeispiele

- [Beispiel: Strom Abrechnung (.pdf)](https://drive.google.com/file/d/1vVJ5y0_sV8l2NgH8Pf-gJCn36MmDXWfe/view?usp=sharing)

- [Beispiel: VEWA Abrechnung (.pdf)](https://drive.google.com/file/d/1-YR543M1bawFrKgrj-MsQR5Es_wKFzRu/view?usp=sharing)

## Hilfreiche Hinweise zu den Tarifdaten

### Visualisierung

<div className="row">
<div className="col col--7">

In der Standardansicht des Ordners der Abrechnungseinheit (z. B. eine Wohnung) wird nun eine neue Kachel angezeigt. Diese gibt die Zählerstände für die virtuellen Tarife an. Wenn man auf diese Kachel klickt wird das Lastprofil für die virtuellen Tarife angezeigt. 

</div>
<div className="col col--5 bild--mitte">

![Billing: Energie abrechnen – Abbildung 12](/img/konfiguration-billing/12.jpg)

</div>
</div>

### Wie wird der Solarstrom aufgeteilt

<div className="row">
<div className="col col--7">

Die smart-me-Plattform verwendet den Produktionszähler (PV-Zähler) zur Ermittlung der erzeugten Strommenge und den virtuellen Gesamtverbrauchszähler zur Ermittlung der verbrauchten Strommenge. Daraus wird ein prozentualer Anteil des Solarstroms berechnet. 

Jeder Stromzähler (Mieter) hat somit Anspruch auf den gleichen Anteil an Solarstrom pro 15 Minuten, z.B. 40% seines Verbrauchs in kWh.

Beispiel für die Zuteilung von Solarstrom

- Gesamtverbrauch 10kWh

- Solarstrom 6kWh (60% Solar / 40% Netz)

- Mieter 1 Verbrauch 6kWh (3,6kWh Solar / 2,4kWh Netz)

- Mieter 2 Verbrauch 4kWh (2,4kWh Solar / 1,6 kWh Netz)

Die Genauigkeit kann verbessert werden, indem der Bilanzzähler für den Solartarif konfiguriert wird.

</div>
<div className="col col--5 bild--mitte">

![Billing: Energie abrechnen – Abbildung 13](/img/konfiguration-billing/13.png)

</div>
</div>
