---
title: 'AI Connector'
slug: '/schnittstellen/ai-connector'
description: 'smart-me mit einem KI-Assistenten verbinden'
sidebar_label: 'AI Connector'
---
## smart-me mit einem KI-Assistenten verbinden

smart-me betreibt einen Connector, mit dem ein KI-Assistent direkt in Ihrem smart-me Konto arbeiten kann. Claude, ChatGPT und andere Assistenten können ihn nutzen. Sie verbinden ihn einmal und fragen danach in normaler Sprache nach dem, was Sie wissen möchten, statt sich durch das Portal zu klicken:

«Wie viel hat die Wärmepumpe letzten Monat verbraucht, und was hat das zum aktuellen Tarif gekostet?»

Technisch ist es ein MCP-Server (Model Context Protocol, ein offener Standard, um einem Assistenten Zugriff auf ein Werkzeug oder eine Datenquelle zu geben) unter [https://mcp.smart-me.com/mcp](https://mcp.smart-me.com/mcp). Es muss nichts installiert und kein API-Key erstellt werden.

Er handelt in Ihrem Namen mit Ihren eigenen Berechtigungen, er fragt nach, bevor er etwas ändert, und er speichert nichts: kein Passwort, kein Token, keine Kopie Ihrer Daten.

## Was du brauchst

- ein smart-me Konto

- einen Assistenten, der MCP-Connectoren unterstützt: Claude (Web, Desktop, Mobile), ChatGPT oder einen anderen MCP-Client

- eine Professional-Lizenz für Lastgänge und lange Wertreihen.


## Verbinden

In Claude:

Einstellungen → Konnektoren → Eigenen Connector hinzufügen.

 In ChatGPT: Einstellungen → Connectoren → Hinzufügen → Nach "smart-me" suchen


Andere:
Custom MCP Server hinzufügen: https://mcp.smart-me.com/mcp



Die smart-me Anmeldeseite öffnet sich. Melden Sie sich wie gewohnt an und bestätigen Sie den Zugriff. Ihr Passwort wird dem Assistenten nie übergeben.

![AI Connector – Abbildung 1](/img/schnittstellen-ai-connector/01.png)

## Was du fragen kannst

In jeder Sprache, nicht nur auf Englisch.

Zähler und Verbrauch

- «Welche Zähler sind in meinem Konto, und welche Werte zeigen sie gerade an?»

- «Gib mir den Viertelstunden-Lastgang des Hauptzählers für letzten Dienstag und sag mir, wann die Spitze war.»


Ladestationen

- «Lädt gerade etwas, und wie viel bezieht die ganze Gruppe?»

- «Zeig mir die Ladevorgänge der Station in der Garage in diesem Monat.»


Eigenverbrauchsabrechnung (ZEV)

- «Prüfe die Konfiguration meiner Liegenschaft, bevor ich die erste Rechnung erstelle.»

- «Hier ist eine Liste mit 14 Zähler-Seriennummern mit Wohnungsnummern und Mietern. Richte die Liegenschaft ein.»


Und vieles mehr!

## Was der Connector kann

Lesen: alle Zähler des Kontos und ihre aktuellen Werte, Viertelstunden-Lastgänge und Tagesreihen, den Ordnerbaum einer Liegenschaft, Ladestationen mit ihren Ladevorgängen und Einstellungen, Lastmanagement-Gruppen sowie Tarife, Rechnungspositionen und Verbrauch einer Abrechnungsliegenschaft.

Schreiben, nach Ihrer Bestätigung: Zähler umbenennen, Ordner anlegen und verschieben, ein Relais schalten, einer Ladestation einen Befehl senden, Stromgrenzen setzen, Abrechnungsliegenschaften, Tarife und VEWA-Kostenperioden anlegen oder ändern.

Jedes Werkzeug deklariert, ob es liest oder schreibt, damit ein Schreibvorgang bestätigt wird, bevor er geschieht. Das Löschen eines Ordners oder einer Ladestation braucht zwei Schritte: der erste zeigt, was wegfiele, der zweite verlangt den genauen Namen.

Man muss ihn nicht von Hand eintragen: der Connector ist offiziell veröffentlicht und in mehreren Verzeichnissen zu finden — im Claude Connectors Directory, in der offiziellen MCP Registry als com.smart-me/smart-me, bei Glama und in der Raycast MCP Registry. Bei ChatGPT läuft die Prüfung.

Kurz zusammengefasst: smart-me stellt die Zähler eines Kontos über einen MCP-Server unter https://mcp.smart-me.com/mcp bereit. Ein KI-Assistent wie Claude oder ChatGPT kann damit Stromzähler, Wärme- und Wasserzähler, Viertelstunden-Lastgänge, Ladestationen und die ZEV-Abrechnung direkt aus dem Konto des Nutzers lesen und nach Bestätigung auch ändern — ohne Installation, ohne API-Key, mit den Berechtigungen des angemeldeten Nutzers.
