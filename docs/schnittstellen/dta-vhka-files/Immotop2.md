---
title: 'Immotop2 VHKA Konfiguration'
slug: '/schnittstellen/dta-vhka-files/Immotop2'
description: 'Unterstützte VHKA-Fileformate Immotop2'
sidebar_label: 'Immotop2 VHKA Konfiguration'
---
## Unterstützte VHKA-Fileformate Immotop2

- XML-Dateiformat (DTA-VHKA Standard)
    Abfragen pro Kostenstelle:
    \- Zählerstände in m3 oder kWh pro Nutzeinheit
    \- Promille Werte pro Nutzeinheit
    \- Preis pro Nutzeinheit


## Wichtigste Hinweise zur Abrechnung mit Immotop2 und smart-me

- Die Abrechnung und Verschlüsselung der Kosten nach VEWA erfolgt im smart.me System.

- Jede Abrechnungseinheit im Immotop2 die Abgefragt werden will muss in Smart-me kongurent bestehen

- Damit die Abrechnung stimmt, müssen für jede Abrechnungperiode im Immotop2 in allen Einheiten die Mietverhältnisse sowie Leerstände erfasst sein!

- Immotop2 unterstützt nur eine Abrechnungsperiode pro Nebenkostengruppe, daher muss der Strom in der gleichen Periode abgerechnet werden wie alle anderen Nebenkosten.

- Der Mieterspiegel aus Immotop2 wird mit smart-me automatisch abgeglichen.


## Konfigurationshinweise seitens Immotop2

Damit Immotop2 und smart-me miteinander kommunizieren können, müssen die verzeichneten Nebenkosten, Kostenstellen und Nebenkostengruppen miteinander übereinstimmen.

### Erstellen der benötigten Verteilschlüssel in Immotop2

Damit die Kostenstellen passendübermittelt werden können muss als erstes scihergestellt werden dass die nötigen Schlüssel auf dem Mandanten verfügbar sind.

Unter dem Tab "Basisdaten" können die entsprechenden Verteilschlüssel unter Verteilschlüssel-Definitionen erstellt werden.

Wenn die Kosten in der Immotop2 Software verwaltet werden möchten, so bietet sich der Verteilschlüssel Promille an.

Für den lokal produzierten Strom eignet sich primär der Verteilschlüssel CHF. für alle Fälle.

Verteilschlüssel welche sich grundsätzlich anbieten:

- Kostenstelle Netzstrom: Netzstrom nach Kosten in CHF

- Kostenstelle Solarstrom: Solarstrom nach Kosten in CHF

- Kostenstelle Wärme und Warmwasser kombiniert: Heizquote nach Verbrauch in Promille

- Kostenstelle Wärme: Heizung nach Verbrauch in Promille

- Kostenstelle Warmwasser: Kostenstelle Warmwasser nach Verbrauch in Promille


![Immotop2 VHKA Konfiguration – Abbildung 1](/img/schnittstellen-dta-vhka-files-immotop2/01.png)

![Immotop2 VHKA Konfiguration – Abbildung 2](/img/schnittstellen-dta-vhka-files-immotop2/02.png)

### 1\. LG-Gruppe Nebenkosten erstellen

Voraussetzung für eine Abrechnung dafür ist ein existierender Mandant mit erstellten Liegenschaften.

Unter dem Bereich "LG-Gruppe-NK" jeder Liegenschaft oder Liegenschaftsgruppe kann eine neue LG-Gruppe-NK erfasst werden.
In dieser werden die Abrechnungsperioden der Nebenkosten und die Liegenschaften definiert auf welche diese Gruppe zutrifft. 

- Es können mehrere Liegenschaften sein, welche sich die gleiche LG-Gruppe-NK teilen, dafür müssen aber auch alle Kosten der Liegenschaften auf einem Kostenkonto zusammenlaufen.
    Primär werden Liegenschaften zusammen verwaltet, wenn Sie sich die Heizung teilen.


### 2\. Kostengruppen (Kostenstellen)

Im Bereich "Kostengruppen" können die Kostengruppen erstellt werden

Die Kostengruppe enspricht einer Gruppierung von mehreren Kostenkonten welche zusammen über einen gemeinsamen Verteilschlüssel aufgeteilt werden sollen.

Beispiele für Kostengruppen:

- Kostengruppe Netzstrom

- Kostengruppe Lokalstrom

- Kostengruppe Heizkosten (Wärme und Warmwasser kombiniert)

- Kostengruppe Kaltwasser


![Immotop2 VHKA Konfiguration – Abbildung 3](/img/schnittstellen-dta-vhka-files-immotop2/03.png)

![Immotop2 VHKA Konfiguration – Abbildung 4](/img/schnittstellen-dta-vhka-files-immotop2/04.png)

Beispiel der Kostengruppe für sich unterstützende Wärme und Warmwasseraufbereitung

Wärmepumpe mit Warmwasseraufbereitung und Elektroheizstab (gekoppelt)


Verwendete Energie: Elektrische Energie für Beides
Funktion: Heizwasser durchfliesst den Boiler zur  Wärmespeicherung

Kostengruppe die erstellt wird:  

Heiz- und Warmwasserkosten
mit Verteilschlüssel Wärmequote Typ 09 nach Promille oder Preis




Beispiel für sich nicht unterstützende Systeme Wärme- und Warmwasseraufbereitung

Ölheizung mit separiertem Elektro-Warmwasserboiler


Verwendete Energie: Elektrische Energie für Boiler, Öl für Heizung
Funktion: keine Vorwärmung des Warmwassers durch die Heizung

Kostengruppen die erstellt werden:

Heizkosten
mit Verteilschlüssel Raumheizung Typ 01 nach Promille oder Preis

Warmwasserkosten
mit Verteilschlüssel Warmwasser separiert Typ 02nach Promille oder Preis



### 3\. Kostenkonten-Kostengruppen-Zuordnung

Im Bereich "Kostenkonten- Kostengruppen-Zuordnung" können nun alle relevanten Kostenkontis den Kostengruppen zugeordnet werden.

Beispielhaft für die Heiz- und Warmwasserkosten würden nun z. B. folgende Kontos auf die Kostengruppe verlinkt werden:

- Heizöl

- Heizungsbedienung

- Brennerservice

- Boilerentkalkung

- Strom Boiler

- ...


![Immotop2 VHKA Konfiguration – Abbildung 5](/img/schnittstellen-dta-vhka-files-immotop2/05.png)

### 4\. Nebenkosten der Liegenschaft

Auf der Liegenschaft kann unter dem Reiter "Nebenkosten" die LG-Gruppe-NK hinzugefügt werden.

An dieser Stelle werden fixe oder variable Verteilschlüssel für die Abrechnung definiert.

Verteilschlüssel
Die verfügbaren Verteilschlüssel sind abhängig von den aktivierten Verteilschlüssel unter Mandant --> Nebenkosten. Sind die relevanten Verteilschlüssel nicht verfügbar, können diese unter "Basisdaten" --> "Verteilschlüsseldefinitionen" zusätzliche Verteilschlüssel definiert werden.

Beispiele:

Name: Heizquote nach Verbrauch
Einheit: Promille
Typ: Variabel
Satz Ablesefirma:
Wärme gesamt (Heizung und Warmwasser zusammen, 09)



Name: Netzstrom nach Kosten
Einheit: CHF
Typ: Variabel
Satz Ablesefirma:
Strom (06)



Name: Solarstrom nach Kosten
Einheit: CHF
Typ: Variabel
Satz Ablesefirma:
Strom (06)





1.  Verteilschlüssel aktivieren auf Liegenschaft


![Immotop2 VHKA Konfiguration – Abbildung 6](/img/schnittstellen-dta-vhka-files-immotop2/06.png)

2\. Aktivierte Verteilschlüssel prüfen

![Immotop2 VHKA Konfiguration – Abbildung 7](/img/schnittstellen-dta-vhka-files-immotop2/07.png)

3\. Verteilschlüssel der Kostengruppe zuweisen

![Immotop2 VHKA Konfiguration – Abbildung 8](/img/schnittstellen-dta-vhka-files-immotop2/08.png)

### 6\. DTA-VHKA File exportieren aus Immotop2

Das Austauschfile kann nach beendigung der Konfiguration under Verabreitung erstellt werden.

In der Konfiguration kann genau definiert werden welche Objekte in der Liegenschaft abgefragt werden sollen. 

Im Normalfall können einfach alle abgefragt werden.

Wichtig: QP-Standardformat (DTA-VKA) muss aktiviert sein.

![Immotop2 VHKA Konfiguration – Abbildung 9](/img/schnittstellen-dta-vhka-files-immotop2/09.png)

![Immotop2 VHKA Konfiguration – Abbildung 10](/img/schnittstellen-dta-vhka-files-immotop2/10.png)

![Immotop2 VHKA Konfiguration – Abbildung 11](/img/schnittstellen-dta-vhka-files-immotop2/11.png)

### Kostenstellenbuchung im Immotop2 durchführen

Werden vorausgehende Buchungen in Immotop2 auf die Kostenstellen benötigt, können diese aus der Zusammenfassung CSV bei jeder erstellter Rechnung entnommen werden.

Üblicherweise ist das der Fall für den Solarstrom, den Netzstrom und für die Elektrizitätskosten der Wärmepumpe / Heizung / Boiler.

Bei der Umlage des Solarstromes wird dies öfters nötig sein, da der Ursprung dieser Information im smart-me System liegt.

Bei den anderen Kostenstellen liegen üblicherweise externe Rechnungen vor welche gebucht werden können.

1.  Betrete das smart-me Billing über den Tab Rechnungsstellung

2.  Wähle die Liegenschaft aus

3.  Wähle den Rechnungszeitraum und erstelle eine Rechnung

4.  Wenn die Rechnung des passenden Zeitraums erstellt ist, öffne die Zusammenfassung CSV


![Immotop2 VHKA Konfiguration – Abbildung 12](/img/schnittstellen-dta-vhka-files-immotop2/12.png)

![Immotop2 VHKA Konfiguration – Abbildung 13](/img/schnittstellen-dta-vhka-files-immotop2/13.png)

Darin enthalten sin die jeweils verkauften kWh, m3 und der Preis pro Tarif, Abrechnungseinheit und im Total zu finden.

Mit diesem Totalwert des jeweiligen Tarifs, kann eine Buchung in Immotop2 erledigt werden und dann mit dem DTA-VHKA File mit Promille passend verteilt werden.

## Die Externen Schlüssel mit Hilfe des Anfragefiles definieren

### 1\. DTA-VHKA File mit externen Schlüsseln verlinken

1.  Datei öffnen in Editor

2.  Costcenter identifiezieren
    Für jedes &lt;Costcenter> muss in smart-me ein Energietarif bestehen

    Bsp:
    Tarif Kaltwasser: ID= 20
    Strom Hochtarif: ID = 23
    Strom Niedertarif: ID=24
    .
    Tarife können mit Eintragung der gleichen ID bei mehreren Tarifen automatisch kombiniert werden.


3.  Costunits mit Abrechnungseinheiten verbinden
    Für jede Abrechnungseinheit in smart-me muss eine ID aus dem File zur Verfügung stehen. &lt;CostUnit>&lt;Id> muss nun mit der Wohnung über die externen Schlüssel verbunden werden.

    Bsp.:
    3 1/2 Zimmerwohnung EG Rechts P2 (103-0.2) = ID 90
    3 1/2 Zimmerwohnung EG Rechts P1 = ID 91


![Immotop2 VHKA Konfiguration – Abbildung 14](/img/schnittstellen-dta-vhka-files-immotop2/14.png)

### 2\. Costcenter (Kostengruppe) mit Tarifen verbinden

Für jedes &lt;Costcenter> muss in smart-me ein Energietarif bestehen

Bsp:
Tarif Kaltwasser: ID= 20
Strom Hochtarif: ID = 23
Strom Niedertarif: ID=24



Tarife können mit Eintragung der gleichen ID bei mehreren Tarifen automatisch kombiniert werden.

Beispiel Kostenstelle Netztarif kombiniert

- Niedertarif und Hochtarif die gleiche ID zuweisen, z.B 23


![Immotop2 VHKA Konfiguration – Abbildung 15](/img/schnittstellen-dta-vhka-files-immotop2/15.png)

![Immotop2 VHKA Konfiguration – Abbildung 16](/img/schnittstellen-dta-vhka-files-immotop2/16.png)

### 3\. Costunits mit Abrechnungseinheiten verbinden

Für jede Abrechnungseinheit in smart-me muss eine ID aus dem File zur Verfügung stehen. &lt;CostUnit>&lt;Id> muss nun mit der Wohnung über die externen Schlüssel verbunden werden.



Ganz unten auf der Konfigurationsseite im Billing zu finden.

![Immotop2 VHKA Konfiguration – Abbildung 17](/img/schnittstellen-dta-vhka-files-immotop2/17.png)

### Allgemeine Gegebenheiten für den erfolgreichen Austausch

### Mieterspiegel

- Da die Mieterspiegel von der Immotop2 Software verwaltet werden, wird seitens smart-me beim Import der Kontrakt und auch Leerstände erfasst und in den Rechnungsadressen abgebildet werden.



![Immotop2 VHKA Konfiguration – Abbildung 18](/img/schnittstellen-dta-vhka-files-immotop2/18.png)

### Wohnflächen

- Da die Wohnflächen aktuell nicht automatisch vom der Immotop2 Software übernommen werden, muss seitens smart-me die Wohnfläche gepflegt aktualisiert.



![Immotop2 VHKA Konfiguration – Abbildung 19](/img/schnittstellen-dta-vhka-files-immotop2/19.png)

### Konfigurationen seitens smart-me für Preisausgabe

- Damit der Preis berechnet werden kann, müssen bei jeder Abrechnungseinheit die Wohnfläche angegeben werden.

- VEWA muss aktiviert und Konfiguriert sein mit den Verteilschlüsseln für Grund und variable Kosten pro Energietyp.

- Eine Abrechnungsperiode muss erfasst sein für jeden Energietyp. Die Kosten müssen verwaltet sein und für Strom müssen gültige Tarife erfasst sein.


![Immotop2 VHKA Konfiguration – Abbildung 20](/img/schnittstellen-dta-vhka-files-immotop2/20.png)

### 7\. DTA-VHKA File in smart-me hochladen und exportieren

![Immotop2 VHKA Konfiguration – Abbildung 21](/img/schnittstellen-dta-vhka-files-immotop2/21.png)

![Immotop2 VHKA Konfiguration – Abbildung 22](/img/schnittstellen-dta-vhka-files-immotop2/22.png)

1.  Navigiere im Billing zu "Rechnungen" und dann in den Bereich "Exportieren"


2\. Wähle den Export Typ aus und lade die Datei mittels "Exportieren" hoch.

3\. Lade das ergänzte File mittels "Herunterladen" auf deinen Rechner.

### 8\. DTA-VHKA File in Immotop2 importieren

![Immotop2 VHKA Konfiguration – Abbildung 23](/img/schnittstellen-dta-vhka-files-immotop2/23.png)

![Immotop2 VHKA Konfiguration – Abbildung 24](/img/schnittstellen-dta-vhka-files-immotop2/10.png)
