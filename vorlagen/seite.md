---
title: 'Titel der Seite'
slug: '/bereich/neue-seite'
description: 'Ein Satz, der sagt, was auf der Seite steht. Er erscheint in der Suche und in der Vorschau beim Teilen.'
sidebar_label: 'Kurzer Name'
---
{/*
  Vorlage für eine neue Seite. Alles hier darf weg, was du nicht brauchst —
  aber lösche die Blöcke lieber, als sie leer stehen zu lassen.

  Drei Dinge gleich zu Beginn:

  - `slug` ist die Adresse der Seite und sollte dem Dateipfad entsprechen:
    `docs/konfiguration/neue-seite.md` → `/konfiguration/neue-seite`.
  - `sidebar_label` ist der Eintrag links. Kurz halten, die Spalte ist schmal.
  - Die Seite erscheint erst in der Navigation, wenn sie in `sidebars.ts`
    eingetragen ist. Siehe CONTRIBUTING, „Eine neue Seite in die Navigation
    eintragen".

  Diese geschweiften Klammern sind MDX-Kommentare: Sie stehen im Quelltext,
  erscheinen aber nicht auf der Seite.
*/}

{/*
  Der Weg durch das Menü der Oberfläche — gehört an den Anfang, wenn die Seite
  eine Anleitung ist. Die Beschriftungen wörtlich wie im Portal, sie stehen im
  Glossar unter „Beschriftungen in der smart-me Oberfläche".
*/}

<Menueweg>Rechnungserstellung → Einstellungen</Menueweg>

Ein, zwei Sätze, worum es hier geht. Wer die Seite über die Suche findet, soll
nach dem ersten Absatz wissen, ob er richtig ist.

## Erster Abschnitt

{/*
  Text links, Bild rechts. Der Bildordner heisst wie der Seitenpfad mit
  Bindestrichen: /konfiguration/neue-seite → /img/konfiguration-neue-seite/
  `bild--mitte` zentriert das Bild in seiner Spalte.
*/}

<div className="row">
<div className="col col--6">

Was zu tun ist, in ganzen Sätzen.

- Ein Schritt

- Noch ein Schritt

</div>
<div className="col col--6 bild--mitte">

![Was auf dem Bild zu sehen ist – nicht „Screenshot"](/img/bereich-neue-seite/01.png)

</div>
</div>

## Schritt für Schritt

Gehört die Seite zu einem Ablauf über mehrere Seiten, trägst du im Frontmatter
`naechste_schritte` ein und stellst hier die Übersicht dazu:

{/*
  Erst einschalten, wenn die Kette steht — `<Ablauf>` bricht den Bau ab, wenn
  eine Kennung nicht existiert. Siehe CONTRIBUTING, „Den nächsten Schritt am
  Seitenende setzen".

  <Ablauf bis="bereich/letzte-seite" />
*/}

## Übersicht in Kacheln

{/*
  Für eine Einstiegsseite, die auf mehrere Unterseiten führt. `href` ergänzen,
  dann ist die ganze Kachel anklickbar. `min` steuert, wie viele nebeneinander
  passen: 16rem ergibt in der Textspalte zwei bis drei.
*/}

<Kacheln min="16rem">

<Kachel titel="Erste Unterseite">

Ein Satz, was dort steht.

</Kachel>

<Kachel titel="Zweite Unterseite">

Ein Satz, was dort steht.

</Kachel>

</Kacheln>

## Technische Daten

{/*
  Die Trennzeile aus Bindestrichen ist Pflicht. Zeilenumbruch in einer Zelle:
  <br /> — eine Leerzeile würde die Tabelle beenden.
*/}

| Merkmal | Wert |
| --- | --- |
| Erstes Merkmal | Wert |
| Zweites Merkmal | Erste Zeile<br />Zweite Zeile |

## FAQ

{/*
  Nur für echte Frage-Antwort-Paare. Was zugeklappt ist, wird nicht gelesen und
  von der Suche im Browser nicht gefunden — Voraussetzungen, Warnungen und die
  eigentliche Anleitung gehören in den sichtbaren Text.

  Die `id` ist die Adresse der Frage und bleibt, auch wenn die Frage
  umformuliert wird: Kleinbuchstaben, Bindestriche, kein Fragezeichen.
*/}

<details id="erste-frage">
<summary>Die erste Frage?</summary>

Die Antwort. Leerzeilen um den Text sind nötig, sonst bleibt er roh stehen.

</details>

<details id="zweite-frage">
<summary>Die zweite Frage?</summary>

Die Antwort.

</details>
