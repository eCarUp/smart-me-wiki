---
title: 'VZEV-Swisseldex (SDAT) Import'
slug: '/schnittstellen/swisseldex-sdat-import'
description: 'Du brauchst ein smart-me Professional Abo pro Messpunkt, um den Import zu nutzen.'
sidebar_label: 'VZEV-Swisseldex (SDAT) Import'
---
### Voraussetzung

Du brauchst ein smart-me Professional Abo pro Messpunkt, um den Import zu nutzen. 

## Datenexport Energieversorger

Der Energieversorger sendet die Daten an den swisseldex-Server, diese können anschliessend von smart-me verarbeitet werden.

Allgemeine Angaben zum Empfänger von smart-me auf dem swisseldex-Server.

- Kontakt E-Mail-Adresse: [support@smart-me.com](mailto:support@smart-me.com)

- Kontakt Telefonnummer: +41 41 511 09 70

- Sprache: Deutsch

- Rolle: Lieferant

    - Name: ST\_SMART\_ME

    - EIC: 12X-00000020BN-B

    - Ist ausreichend für den Datenversand wenn der registrierte Datahub Partner welcher uns Daten sendet eine Lizenz hat.

- Rolle: Endverbraucher 

    - Name: CO\_SMART\_ME

    - EIC: 12X-00000020BN-B

    - Ist notwendig für den Datenversand wenn der registrierte Datahub Partner welcher uns Daten sendet kein Lizenz hat. Der Registrierter Marktpartner mit der Rolle Verteilnetzbetreiber muss ein zugehöriges Laufblatt von swissldex ausfüllen: [Laufblatt\_Kommunikationspartner kopie von smart-me 10.04.2025](https://drive.google.com/uc?export=download&id=1shPYq-W8ziGMPIbz4d43oensDkoSjLRb) 

- Falls ein Datenformat gewählt werden kann muss Ebix gewählt werden. Smart-me unterstützt zu aktuellem Zeitpunkt nur das Ebix-Format für den import


## Import in den Zielaccount aufsetzen

1.  Die Anfrage und Freigabe der relevanten Messpunkte muss beim Energieversorger beantragt werden. Diese werden dann auf Swisseldex der smart-me AG zur verfügung gestellt.
    Der Messpunkt wird seitens Energieversorger mit seiner eindeutigen Messpunkt ID übermittelt. Die ID besteht aus CH-Code und 33 Stelliger Nummer.

    Beispiel: CH637482974368378932BKL7389576492

2.  Logge dich auf [www.smart-me.com](http://www.smart-me.com) in deinen vZEV oder ZEV Account ein.

3.  Rufe den Importbereich deines vZEV oder ZEV Accounts mittels [https://ftp.portal.smart-me.com/](https://ftp.portal.smart-me.com/) auf.

4.  Akzeptiere die Zugriffsberechtigungen

5.  Navigiere zum Bereich Messpunkte

6.  Füge alle dir mitgeteilten CH-Nummern als Messpunkte hinzu.

7.  Wenn erstmals Daten der Messpunkte importiert wurden sind die Messpunkte in der [Zählerkonfiguration](/konfiguration/ordnerkonfiguration) sichtbar um sie der Struktur hinzuzufügen.


![VZEV-Swisseldex (SDAT) Import – Abbildung 1](/img/schnittstellen-swisseldex-sdat-import/01.png)

![VZEV-Swisseldex (SDAT) Import – Abbildung 2](/img/schnittstellen-swisseldex-sdat-import/02.png)

## Funktionsweise der Datenverarbeitung und Datenersatz

### Datenupload und Tarifberechnung

Die Importierten Daten über Swisseldex werden sobald verfügbar automatisch in smart-me an die entsprechende Messstellennummer (Zähler) importiert.

Die Berechnung der virtuellen Tarife erfolgt automatisch und weiterführend sobald für alle relevanten Messpunkte zur Tarifierung des ZEV oder vZEV die Daten zur zur Verfügung stehen.

### Werteersatz

Zum ersetzen von fehlerhaften Daten kann das Importfile über Swisseldex einfach erneut hochgeladen werden. Die Daten werden smart-me seitig automatisch importiert und überschrieben.

Nach einem solchen Werteersatz ist es nötig die virtuellen Tarife seit Ersatzdatum erneut zu berechnen.
