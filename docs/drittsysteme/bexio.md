---
title: 'Bexio'
slug: '/drittsysteme/bexio'
description: 'Du brauchst ein smart-me Professional Abo, um Energiekostenabrechnungen erstellen zu können.'
sidebar_label: 'Bexio'
---
### Voraussetzung

Du brauchst ein smart-me Professional Abo, um Energiekostenabrechnungen erstellen zu können. 

smart-me Billing bietet die Möglichkeit die Rechnungen automatisch in Bexio zu importieren. Bexio ist eine Business Software. Mehr Informationen: [https://www.bexio.com/](https://www.bexio.com/)

Funktionen

- Kundenverwaltung in Bexio: smart-me Billing übernimmt den Kundenstamm aus Bexio

- Export der Rechnungen: Die Energiekostenabrechnungen können in Bexio erstellt, versendet und verwaltet werden. 

- Automatischer Zahlungsabgleich / Automatische Mahnung


![Bexio – Abbildung 1](/img/drittsysteme-bexio/01.jpg)

### 1\. Bexio aktivieren

1.  Öffne das smart-me Billing - Test

2.  Wähle "Konfiguration" und die Liegenschaft aus

3.  Bei "Export zu Drittanbieter" wähle Bexio

4.  Klicke auf Login und logge dich in Bexio ein

5.  Klicke auf speichern

6.  Warte, bis Login ok (grün) erscheinnt (geht teileweise 1-2 minuten)




- Rechnungstitel: Der Titel der Rechnung in Bexio

- Sprache der Rechnung: Die Sprache welche in Bexio für die Rechnung verwendet werden soll.

- Konto für Bexio-Buchungen: Das Bexio Konto welchem die Positionen zugeordnet werden sollen.


![Bexio – Abbildung 2](/img/drittsysteme-bexio/02.jpg)

### 2\. Mieter zuordnen

1.  Wähle "Konfiguration" und eine Wohnung aus

2.  Klicke unter Rechnungsadresse auf "Hinzufügen"

3.  Wähle den Kontakt aus Bexio aus


![Bexio – Abbildung 3](/img/drittsysteme-bexio/03.jpg)

### 3\. Rechnung ins Bexio exportieren

Erstelle auf einer Liegenschaft die Rechnungen

\-> Die Rechnungen werden automatisch nach Bexio exportiert.

smart-me Billing übernimmt die Rechnungsnummer aus Bexio (Bespiel: RE-1570 ist in smart-me die Rechnung mit der Nummer 1570)

![Bexio – Abbildung 4](/img/drittsysteme-bexio/04.jpg)

### 4\. Rechnungen in Bexio

Die Rechnungen wurden nun im Bexio erstellt und können weiterverarbeitet werden.

1.  In Bexio einloggen

2.  Rechnungen aufrufen


![Bexio – Abbildung 5](/img/drittsysteme-bexio/05.jpg)

Beispiel einer exportierten Stromrechnung

![Bexio – Abbildung 6](/img/drittsysteme-bexio/06.jpg)

Beispiel einer exportierten VEWA Rechnung

![Bexio – Abbildung 7](/img/drittsysteme-bexio/07.png)

### 5\. Konfig

Unter Einstellungen 

Alle Einstellungen

Buchhaltung

Prüfen ob die Kachel Steuersätze sichtbar sind.

![Bexio – Abbildung 8](/img/drittsysteme-bexio/08.png)

Einstellungen smart-me

Steuersätze 0%

Inbegriffen.

![Bexio – Abbildung 9](/img/drittsysteme-bexio/09.png)

### 5\. Fehlebehandlung

account\_id \[Diese Eingabe ist nicht korrekt.\]
Das Konto für Bexio Buchungen ist ungültig. Es muss ein Bexio Konto verwendet werden, auf dem auch Rechnungen verbucht werden können. 

tax\_id \[Diese Eingabe ist nicht korrekt.\]
Für eine Rechnungsposition wurde kein gültiger Steuersatz gefunden.
\- Prüfe ob die Steuersätze  für alle verwendeten Steuersätze (0%, 8.1%, 2.6%,...) im Bexio vorhanden und gültig sind
\- Stelle sicher, dass alle relevanten Mehrwertsteuersätze dem Formular 303 zugeordnet sind.
Falls nicht, erstelle zusätzliche für jede Steuer.
\--> Übersicht Einstellungen --> Buchhaltung --> Steuersätze --> Mehrwertsteuer bearbeiten

Keine Bexio adresse für Benutzer gefunden
Dem Mieter wurde kein oder ein ungültiger Bexio Benutzer zugeordnet. Bitte ordne dem Mieter einen Benutzer zu (siehe oben: 2. Mieter zuordnen)

&#123;"error\_code":422,"message":"The form could not be saved due to the following errors:","errors":\["positions: 0 \[account\_id \[Diese Eingabe ist nicht korrekt.\]\]"\]&#125;



Lösung 1:

Im smart-me ist in den Einstellungen eine Steuer bereits inbegriffen. z.B. 8.1%. 

Im Bexio untern Einstellungen (Oben rechts) / Alle Einstellungen / Buchhaltung / Grundeinstellung MWST ist nichts eingerichtet.

Möglichkeit im smart-me 0% angeben.

Lösung 2:

Export im smart-me auf  3400 (Konto für Bexio Buchung) wählen.

Privatpersonen können ein Konto 3680 Sontige Erlöse erstellen

![Bexio – Abbildung 10](/img/drittsysteme-bexio/10.png)

No tax in bexio found for 0%

MwSt hinzufügen.



![Bexio – Abbildung 11](/img/drittsysteme-bexio/11.png)

Bexio AG

Alte Jonastrasse 24

CH-8640 Rapperswil

+41 71 552 00 60

[support@bexio.com](mailto:support@bexio.com) 

www.bexio.com
