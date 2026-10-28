---
title: 'Standardantworten'
slug: '/informationssicherheit/standardantworten'
description: 'Diese Seite beantwortet allgemeine Fragen zur Informations- und Datensicherheit bei smart-me AG und zielt darauf ab das Partner die Standard Sicherheits Questionaries selbststän…'
sidebar_label: 'Standardantworten'
---
Diese Seite beantwortet allgemeine Fragen zur Informations- und Datensicherheit bei smart-me AG und zielt darauf ab, dass Partner die Standard Sicherheits Questionaries selbstständig beantworten können.

Kontakt: security@smart-me.com

Letzter Stand: 16.01.2025

## Allgemeine Informationen

<details id="unternehmens-informationen">
<summary>Unternehmens Informationen</summary>

- International tätiges Unternehmen mit ca. 50 Angestellten.

- Entwicklung und Produktion einer Abrechnungslösung für ZEVs / Mieterstrom, E-Mobilität und Multienergie.

</details>

<details id="zusaetzliche-dokumente">
<summary>Zusätzliche Dokumente</summary>

- Allgemeine Geschäftsbedingungen (AGB)

- Auftragsdatenverarbeitungsvereinbarung (ADV): Anhang der AGB

- Datenschutzerklärung


[Link zu den Dokumenten](https://web.smart-me.com/agb-smart-me-ag/)

</details>

## Datenschutz und -verarbeitung

<details id="werden-personenbezogene-daten-gemaess-dsg-dsgvo-verarbeitet">
<summary>Werden personenbezogene Daten gemäss DSG/DSGVO verarbeitet?</summary>

- Für den Kauf von Lizenzen über eine Kreditkarte werden die Kreditkarteninformationen über Stripe bearbeitet.

- Für Aufträge bzw. Offerten werden Kundeninformationen über Bexio bearbeitet.

- Supportfälle und deren Informationen werden über Freshdesk bearbeitet.

</details>

<details id="wie-werden-daten-geloescht">
<summary>Wie werden Daten gelöscht?</summary>

- Kunden sind für ihre smart-me Accounts selbst verantwortlich und können diesen jederzeit im Webportal löschen.
    Wenn ein Kunde sein Konto löscht, werden diese Daten irreversibel entfernt.

- Nach 30 Tagen ist kein Backup mehr vorhanden.

- Daten, welche über Freshdesk oder Bexio verarbeitet werden, können auf Anfrage gelöscht werden.

</details>

<details id="wer-hat-zugang-zu-den-daten">
<summary>Wer hat Zugang zu den Daten?</summary>

Der Zugang auf unsere Server ist auf interne IPs des Clusters beschränkt. Smart-me hat nur auf explizite Erlaubnis des Kunden, Zugang auf deren Kontodaten.

</details>

## Hosting und Infrastruktur

<details id="wo-wird-die-anwendung-gehostet">
<summary>Wo wird die Anwendung gehostet?</summary>

Alle smart-me Dienste werden auf Servern von Microsoft Azure Schweiz gehostet. Wir selbst betreiben keine Server.

</details>

<details id="wie-werden-die-daten-geschuetzt">
<summary>Wie werden die Daten geschützt?</summary>

Die Server werden durch Massnahmen von Microsoft Azure geschützt. Zusätzlich dazu setzen wir Cloudflare als Web Application Firewall (WAF) und Lastmanagement ein.

</details>

<details id="wie-wird-die-verfuegbarkeit-der-systeme-sichergestellt">
<summary>Wie wird die Verfügbarkeit der Systeme sichergestellt?</summary>

Die Systemverfügbarkeit wird durch die Infrastruktur von Microsoft Azure gewährleistet. 

[Weitere Informationen](https://learn.microsoft.com/de-de/azure/security/fundamentals/infrastructure)

</details>

## Datensicherheit und Verschlüsselung

<details id="wie-werden-daten-verschluesselt">
<summary>Wie werden Daten verschlüsselt?</summary>

Die Anwendungsdaten sind nicht selbst verschlüsselt, jedoch die Datenbank als gesamtes, in welcher die Anwendungsdaten beinhaltet sind. 

Die Kommunikation zwischen Zählern und Cloud ist mittels AES-256 verschlüsselt.

</details>

<details id="wie-werden-passwoerter-von-smart-me-konten-gehashed">
<summary>Wie werden Passwörter von smart-me Konten gehashed?</summary>

Passwörter werden mit RIPEMD-160 mit dynamischem Salt gehashed.

</details>

<details id="unterstuetzen-wir-foederierte-identitaeten">
<summary>Unterstützen wir föderierte Identitäten?</summary>

Nein. Die Ausnahme bildet Zugriff über unsere API, welche neben Basic Auth auch oAuth 2.0 unterstützt.

</details>

<details id="backups">
<summary>Backups</summary>

Die Zählerdaten unterlaufen tägliche Backups durch Instaclustr. [Infos dazu](https://www.instaclustr.com/support/documentation/cassandra/cassandra-cluster-operations/cluster-data-backups/)

Kundendaten, welche über Freshdesk, Bexio oder Stripe bearbeitet werden, unterliegen der Datensicherheit der jeweiligen Hersteller und dadurch auch deren Backup-Prozessen.

</details>

## Sicherheitsrichtlinien und -prozesse

<details id="verfuegen-wir-ueber-spezifische-dokumentiere-informationssicherheitsrichtlinien">
<summary>Verfügen wir über spezifische dokumentierte Informationssicherheitsrichtlinien?</summary>

Nein

</details>

<details id="haben-wir-dokumentiere-sichere-entwicklungsrichtlinien">
<summary>Haben wir dokumentierte sichere Entwicklungsrichtlinien?</summary>

Nein

</details>

<details id="verfolgen-wir-einen-sicheren-entwicklungsprozess">
<summary>Verfolgen wir einen sicheren Entwicklungsprozess?</summary>

Ja, jedoch sind die spezifischen Details vertraulich.

</details>

<details id="verfuegen-wir-ueber-ein-informationssicherheitszertifikat">
<summary>Verfügen wir über ein Informationssicherheitszertifikat?</summary>

Nein, jedoch ist unsere Cloud-Infrastruktur Provider Microsoft Azure, ISO27001 zertifiziert.

</details>

<details id="fuehren-wir-it-sicherheitsaudits-bei-unseren-anbietern-durch">
<summary>Führen wir IT-Sicherheitsaudits bei unseren Anbietern durch?</summary>

Nein

</details>

<details id="haben-wir-einen-dokumentierten-business-continuity-plan">
<summary>Haben wir einen dokumentierten Business Continuity Plan?</summary>

Nein

</details>

<details id="erlauben-wir-it-audits">
<summary>Erlauben wir IT-Audits?</summary>

Ja, jedoch nur mit öffentlich verfügbaren Informationen

</details>

## Endpoint- und Netzwerksicherheit

<details id="haben-wir-ein-konzept-zur-netzwerksegmentierung-implementiert">
<summary>Haben wir ein Konzept zur Netzwerksegmentierung implementiert?</summary>

Da unsere Applikation nicht lokal gehostet wird, ist unsere Netzwerkarchitektur unabhängig der Serverarchitektur. Die lokale Segmentierung sieht wie folgt aus:

- Produktionsnetzwerk 

- Gast-WLAN

- Büro-Netzwerk

</details>

<details id="sensibilisieren-wir-mitarbeitende-fuer-cybersicherheit">
<summary>Sensibilisieren wir Mitarbeitende für Cybersicherheit?</summary>

Ja, Cybersicherheitsschulungen werden durchgeführt:

- Häufigkeit: Alle sechs Monate sowie während des Onboardings.

- Zusätzliche Schulungen: Je nach aktuellen Ereignissen oder aufkommenden Bedrohungen.

</details>

<details id="waren-wir-in-den-letzten-12-monaten-opfer-eines-sicherheitsvorfalls-oder-einer-datenpanne">
<summary>Waren wir in den letzten 12 Monaten Opfer eines Sicherheitsvorfalls oder einer Datenpanne?</summary>

Nein

</details>

<details id="verfuegen-wir-ueber-dedizierte-cybersicherheitsressourcen">
<summary>Verfügen wir über dedizierte Cybersicherheitsressourcen?</summary>

Ja, wir haben interne Cybersicherheitsressourcen.

</details>

<details id="halten-wir-ihre-software-und-systeme-auf-dem-neuesten-stand">
<summary>Halten wir Ihre Software und Systeme auf dem neuesten Stand?</summary>

Ja, alle Systeme und Geräte werden regelmässig auf die neuesten stabilen Versionen aktualisiert.

</details>

<details id="haben-wir-eine-av-schutzloesung-installiert">
<summary>Haben wir eine AV-Schutzlösung installiert?</summary>

Ja, alle Geräte sind ausgestattet mit:

- Endpoint Detection and Response (EDR)

- Network Detection and Response (NDR)

- Windows Defender als Antivirus-Schutz (AV)

</details>

<details id="verfuegen-wir-ueber-eine-siem-loesung">
<summary>Verfügen wir über eine SIEM-Lösung?</summary>

Nein

</details>
