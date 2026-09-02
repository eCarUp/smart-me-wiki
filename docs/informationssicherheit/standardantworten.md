---
title: 'Standardantworten'
slug: '/informationssicherheit/standardantworten'
description: 'Diese Seite beantwortet allgemeine Fragen zur Informations- und Datensicherheit bei smart-me AG und zielt darauf ab das Partner die Standard Sicherheits Questionaries selbststän…'
sidebar_label: 'Standardantworten'
---
Diese Seite beantwortet allgemeine Fragen zur Informations- und Datensicherheit bei smart-me AG und zielt darauf ab das Partner die Standard Sicherheits Questionaries selbstständig beantworten können.

Kontakt: security@smart-me.com

Letzter Stand: 16.01.2025

## Allgemeine Informationen

### Unternehmens Informationen

- International tätiges Unternehmen mit ca. 50 Angestellten.

- Entwicklung und Produktion einer Abrechnungslösung für ZEVs / Mieterstrom, E-Mobilität und Multienergie.


### Zusätzliche Dokumente

- Allgemeine Geschäftsbedingungen (AGB)

- Auftragsdatenverarbeitungsvereinbarung (ADV): Anhang der AGB

- Datenschutzerklärung


[Link zu den Dokumenten](https://web.smart-me.com/agb-smart-me-ag/)

## Datenschutz und -verarbeitung

### Werden personenbezogene Daten gemäss DSG/DSGVO verarbeitet?

- Für den Kauf von Lizenzen über eine Kreditkarte werden die Kreditkarteninformationen über Stripe bearbeitet.

- Für Aufträge bzw. Offerten werden Kundeninformationen über Bexio bearbeitet.

- Supportfälle und deren Informationen werden über Freshdesk bearbeitet.


### Wie werden Daten gelöscht?

- Kunden sind für Ihre smart-me Accounts selbst verantwortlich und können diesen jederzeit im Webportal löschen.
    Wenn ein Kunde sein Konto löscht, werden diese Daten irreversibel entfernt.

- Nach 30 Tagen ist kein Backup mehr vorhanden.

- Daten, welche über Freshdesk oder Bexio verarbeitet werden, können auf Anfrage gelöscht werden.


### Wer hat Zugang zu den Daten?

Der Zugang auf unsere Server sind auf interne IPs des Clusters beschränkt. Smart-me hat nur auf explizite Erlaubnis des Kunden, Zugang auf deren Kontodaten

## Hosting und Infrastruktur

### Wo wird die Anwendung gehostet?

Alle smart-me Dienste werden auf Servern von Microsoft Azure Schweiz gehostet. Wir selbst betreiben keine Server.

### Wie werden die Daten geschützt?

Die Server werden durch Massnahmen von Microsoft Azure geschützt. Zusätzlich dazu setzen wir Cloudflare als Web Application Firewall (WAF) und Lastmanagement ein.

### Wie wird die Verfügbarkeit der Systeme sichergestellt?

Die Systemverfügbarkeit wird durch die Infrastruktur von Microsoft Azure gewährleistet. 

[Weitere Informationen](https://learn.microsoft.com/de-de/azure/security/fundamentals/infrastructure)

## Datensicherheit und Verschlüsselung

### Wie werden Daten verschlüsselt?

Die Anwendungsdaten sind nicht selbst verschlüsselt, jedoch die Datenbank als gesamtes, in welcher die Anwendungsdaten beinhaltet sind. 

Die Kommunikation zwischen Zählern und Cloud ist mittels AES-256 verschlüsselt.

### Wie werden Passwörter von smart-me Konten gehashed?

Passwörter werden mit RIPEMD-160 mit dynamischem Salt gehashed.

### Unterstützen wir föderierte Identitäten?

Nein. Die Ausnahme bildet Zugriff über unsere API, welche neben Basic Auth auch oAuth 2.0 unterstützt.

### Backups

Die Zählerdaten unterlaufen tägliche Backups durch Instaclustr. [Infos dazu](https://www.instaclustr.com/support/documentation/cassandra/cassandra-cluster-operations/cluster-data-backups/)

Kundendaten, welche über Freshdesk, Bexio oder Stripe bearbeitet werden, unterliegen der Datensicherheit der jeweiligen Hersteller und dadurch auch deren Backup-Prozessen.

## Sicherheitsrichtlinien und -prozesse

### Verfügen wir über spezifische dokumentiere Informationssicherheitsrichtlinien?

Nein

### Haben wir dokumentiere sichere Entwicklungsrichtlinien?

Nein

### Verfolgen wir einen sicheren Entwicklungsprozess?

Ja, jedoch sind die spezifischen Details vertraulich.

### Verfügen wir über ein Informationssicherheitszertifikat?

Nein, jedoch ist unsere Cloud-Infrastruktur Provider Microsoft Azure, ISO27001 zertifiziert.

### Führen wir IT-Sicherheitsaudits bei unseren Anbietern durch?

Nein

### Haben wir einen dokumentierten Business Continuity Plan?

Nein

### Erlauben wir IT-Audits?

Ja, jedoch nur mit öffentlich verfügbaren Informationen

## Endpoint- und Netzwerksicherheit

### Haben wir ein Konzept zur Netzwerksegmentierung implementiert?

Da unsere Applikation nicht lokal gehostet wird, ist unsere Netzwerkarchitektur unabhängig der Serverarchitektur. Die lokale Segmentierung sieht wie folgt aus:

- Produktionsnetzwerk 

- Gast-WLAN

- Büro-Netzwerk


### Sensibilisieren wir Mitarbeitende für Cybersicherheit?

Ja, Cybersicherheitsschulungen werden durchgeführt:

- Häufigkeit: Alle sechs Monate sowie während des Onboardings.

- Zusätzliche Schulungen: Je nach aktuellen Ereignissen oder aufkommenden Bedrohungen.


### Waren wir in den letzten 12 Monaten Opfer eines Sicherheitsvorfalls oder einer Datenpanne?

Nein

### Verfügen wir über dedizierte Cybersicherheitsressourcen?

Ja, wir haben interne Cybersicherheitsressourcen.

### Halten wir Ihre Software und Systeme auf dem neuesten Stand?

Ja, alle Systeme und Geräte werden regelmäßig auf die neuesten stabilen Versionen aktualisiert.

### Haben wir eine AV-Schutzlösung installiert?

Ja, alle Geräte sind ausgestattet mit:

- Endpoint Detection and Response (EDR)

- Network Detection and Response (NDR)

- Windows Defender als Antivirus-Schutz (AV)


### Verfügen wir über eine SIEM-Lösung?

Nein
