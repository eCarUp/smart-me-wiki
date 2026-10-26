---
title: 'Mieterstrom Standard'
slug: '/konfiguration/ordnerkonfiguration/mieterstrom-standard'
description: 'Ordnerstruktur für deutschen Mieterstrom, wenn alle Bezüger am Mieterstrom teilnehmen (Standard Messkonzept).'
sidebar_label: 'Mieterstrom Standard'
naechste_schritte: [konfiguration/wenndann-aktionen/alarme]
---
<Menueweg>Zähler & Ordner Konfiguration</Menueweg>

### Alle Bezüger sind Mieterstromteilnehmer

Diese Struktur gilt für das [Standard Messkonzept](/planung/standard-messkonzept): Hinter dem Hausanschluss hängen ausschliesslich Parteien, die am Mieterstrom teilnehmen. Nimmt auch nur eine Partei nicht teil, brauchst du stattdessen [Mieterstrom mit nicht Teilnehmern](/konfiguration/ordnerkonfiguration/mieterstrom-nicht-teilnehmer).


![smart-me Billing für deutschen Mieterstrom – Abbildung 1](/img/konfiguration-billing-mieterstrom/01.png)



## Ordnerstruktur

Zweistufigkeit ist Pflicht — die Abrechnung wird auf der obersten Ebene eingerichtet und braucht darunter je einen Ordner pro Rechnungsempfänger.

- 1 Ordner für die Liegenschaft (z. B. Hauptstrasse 7 Mieterstrom)

    - 1 Unterordner pro Abrechnungseinheit, also pro Wohnung beziehungsweise Rechnungsempfänger

    - 1 Unterordner „Allgemein" für Treppenhaus, Aussenbeleuchtung und ähnliche Abgänge

    - 1 Unterordner „Technische Zähler" für alles, was später nur anteilig verteilt wird

Namensgebung der Abrechnungseinheiten:

- Ein Gebäude: Wohnungsbezeichnung (z. B. WHG 1.1, WHG 1.2, WHG 2.1)

- Mehrere Gebäude: Hausbezeichnung und Wohnungsbezeichnung (z. B. Hauptstrasse 7 WHG 1.1)

## Zuordnung der Zähler

Weise die Zähler per Drag and Drop den Knoten zu.

**Direkt der Abrechnungseinheit zuweisen** — wenn der Rechnungsempfänger den gesamten Bezug dieses Zählers bezahlt.

**In den Knoten „Technische Zähler"** — wenn ein Zähler mehrere Abrechnungseinheiten versorgt und später prozentual verteilt wird. Beispiele: Allgemeinzähler, Wärmepumpe für mehrere Wohnungen.

### Produktion und Bilanz

Für das Standard Messkonzept kommen zwei Rollen dazu, die es in der Schweizer Struktur so nicht gibt:

- **Bilanzzähler** — der Hausanschlusszähler. Er wird in der Tarifierung referenziert.

- **Produktionszähler** — alle Zähler der Solaranlage und, falls vorhanden, der Batterie.

Beide werden nicht einer Wohnung zugewiesen, sondern bleiben auf Liegenschaftsebene. 

### Ladestationen

Weise Ladestationen nicht direkt einer Wohnung zu, sondern erstelle eine eigene Abrechnungseinheit dafür. Damit lassen sich Mieterwechsel ohne Umbau der Struktur abbilden.

Ladestationen fremder Hersteller werden in smart-me nicht direkt verwaltet. Lege dafür einen Knoten für den E-Mobilitätsabgang an und weise den Abgangszähler zu — so erhältst du wenigstens den Gesamtaufwand.

### Erstelle abschliessend die Alarme für einen Verbindungsausfall

So merkst du früh, wenn ein Zähler ausfällt, und hältst die Messdatenlücke klein.
