---
title: 'Mieterstrom mit nicht Teilnehmern'
slug: '/konfiguration/ordnerkonfiguration/mieterstrom-nicht-teilnehmer'
description: 'Ordnerstruktur für deutschen Mieterstrom nach Messkonzept MKD3, wenn einzelne Parteien weiterhin vom Energieversorger beziehen.'
sidebar_label: 'Mieterstrom mit nicht Teilnehmern'
naechste_schritte: [konfiguration/wenndann-aktionen/alarme]
---
### Einzelne Parteien nehmen nicht teil

Diese Struktur gilt für das [Messkonzept MKD3](/planung/mkd3-messkonzept-nicht-teilnehmer): Hinter dem Hausanschluss hängen sowohl Mieterstromteilnehmer als auch Parteien, die ihren Strom weiterhin direkt vom Energieversorger beziehen.

Der Unterschied zur Standardstruktur ist nicht die Form des Ordnerbaums, sondern **wer darin abgerechnet wird und welche Zähler die Bilanz bilden**. Teilnahme ist keine Eigenschaft des Zählers, sondern des Vertrags — die Struktur muss das abbilden können, auch wenn eine Partei im Lauf des Jahres wechselt.

![smart-me Billing für deutschen Mieterstrom – Abbildung 2](/img/konfiguration-billing-mieterstrom/02.png)


## Ordnerstruktur

- 1 Ordner für die Liegenschaft (z. B. Hauptstrasse 7 Mieterstrom)

    - 1 Unterordner pro **teilnehmender** Abrechnungseinheit

    - 1 Unterordner „Allgemein" für Treppenhaus, Aussenbeleuchtung und ähnliche Abgänge

    - 1 Unterordner „Nicht Teilnehmer" für die Parteien ausserhalb des Mieterstroms

    - 1 Unterordner „Technische Zähler" für alles, was anteilig verteilt wird

Der Knoten „Nicht Teilnehmer" wird nicht abgerechnet. Er existiert, damit die Zähler dieser Parteien sichtbar bleiben und sich bei einem Vertragswechsel ohne Umbau der Struktur verschieben lassen.

## Zuordnung der Zähler

Wie beim Standard: direkt der Abrechnungseinheit zuweisen, wenn der Rechnungsempfänger den gesamten Bezug trägt — sonst in den Knoten „Technische Zähler".

### Produktion und Bilanz — hier liegt der Unterschied

Beim MKD3 wird der Hausanschlusszähler **nicht** als Bilanzzähler referenziert. Er misst auch den Verbrauch der Nichtteilnehmer und würde die Bilanzierung verfälschen.

Stattdessen:

- **Bilanz** — alle teilnehmenden Wohnungen, Parkplätze und die Produktion

- **Produktion** — alle Produktionszähler der Solaranlage

- **Hausanschlusszähler** — nur zur späteren Verifizierung, nicht in der Tarifierung


### Was das für die Abrechnung bedeutet

Die Summe des verkauften Netzstroms entspricht beim MKD3 **nicht** der Rechnung des Energieversorgers, und die Rückspeisemenge nicht dem Wert des Hausanschlusszählers. Das ist erwartet: Die Vergütung für Nichtteilnehmer erfolgt einmalig je Abrechnungsperiode.

Rechne also nicht damit, dass die Zahlen auf den Kilowattstunden genau zusammenpassen — die Prüfung läuft anders als beim Standard Messkonzept.

### Ladestationen

Eigene Abrechnungseinheit je Ladestation, nicht der Wohnung zuweisen. Bei einem Nichtteilnehmer mit eigener Ladestation gehört diese unter den Knoten „Nicht Teilnehmer".

### Erstelle abschliessend die Alarme für einen Verbindungsausfall

So merkst du früh, wenn ein Zähler ausfällt, und hältst die Messdatenlücke klein.
