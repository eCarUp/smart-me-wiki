---
title: 'AbaImmo'
slug: '/schnittstellen/dta-vhka-files/AbaImmo'
description: 'DTA-VHKA Austauschfiles mit AbaImmo'
sidebar_label: 'AbaImmo'
---
## DTA-VHKA Austauschfiles mit AbaImmo

## Wichtigste Hinweise zur Abrechnung mit AbaImmo und smart-me

- Die Abrechnung und Verschlüsselung der Kosten nach VEWA erfolgt im smart\-me System.

- Jede Abrechnungseinheit im AbaImmo die Abgefragt werden will, muss in Smart-me kongruent bestehen

- Damit die Abrechnung stimmt, müssen für jede Abrechnungperiode in allen Einheiten die Mietverhältnisse sowie Leerstände erfasst sein!

- Der Mieterspiegel aus AbaImmo wird mit smart-me automatisch abgeglichen.

- Voraussetzung für die Nutzung ist, dass Strom sowie Heiz- und Nebenkosten die gleiche Abrechnungsperiode besitzen.


## Aktuelle Implementation

Aktuell unterstützt:

- Übertragung von kWh, m3, Promille oder Preis Wert eines einzelnen Tarifs für Wärme, Kälte, Warmwasser und Kaltwasser uns Stromeinheitstarif

- Übertragung von Promille oder Preis Werten als Summe von Tarifen wie z.B. Elektrizität


Nicht unterstützt:

- Getrennte Übertragung von Stromtarifen (z.B. Spitzenstrom, Netzstrom und Solarstrom getrennt)


![AbaImmo – Abbildung 1](/img/schnittstellen-dta-vhka-files-abaimmo/01.png)

### Best Practice Konfiguration

Am einfachsten lässt sich die Datenübertragung im ZEV so arrangieren:

- Strom wird als CHF Ausdruck übertragen, die Preise für die einzelnen Tarife müssen dafür in smart-me erfasst werden.

- Wärme, Kälte, Warmwasser und Kaltwasser werden am einfachsten als Promille Wert übertragen.

- Die Elektrizitätskosten des Objektes für Wärmepumpen und Boiler werden nicht übertragen. Die Kosten können als Buchung im Vorfeld im AbaImmo eingetragen werden.


### Konfiguration seitens AbaImmo und Ablauf des Austausches

1.  Navigiere zu Y471, wähle die Immobiliennummer und aktiviere die VHKA-Schnittstelle.

2.  Erstelle eine Abrechnungsperiode für Strom und oder Heiz-Nebenkosten.

3.  Navigiere unter Y471 zu "Zähler" und erstelle passend zur Immobilie Zählerabfragen.

    z.B.: 
    \- Wärmezähler, Objektspezifisch, Heizkosten, Nur Verbrauch
    \- Warmwasser, Objektspezifisch, Warmwasserkosten, Nur Verbrauch
    \- Kaltwasser, Objektspezifisch, Wasserkosten, Nur Verbrauch


4.  Navigiere zu den Y621 Applikationseinstellungen 

5.  Erfasse unter dem Tab "HK/NK" eine Ablesefirma mit dem Namen "smart-me"

6.  Navigiere zu Y11 Immobilienstamm

7.  Im Tab Standard/Ablesefirma VHKA hinterlege nun die Ablesefirma "smart-me" bei den gewünschten Immobilien

8.  Hinterlege nun bei jedem abzufragenden Objekt der Immobilie die Ablesefirma "smart-me" mittels der VHKA Nummer von AbaImmo.
    Die Hinterlegung steuert ob die Anfrage im Abfragefile getätigt oder ignoriert wird.

9.  Navigiere nun zu Y2312 VHKA-Schnittstelle verarbeiten

10.  Wähle nun die gewünschte Immobilie aus und den Speicherort für das VHKA-File.

11.  Exportiere nun das File um es anschliessend in smart-me hochzuladen.


![AbaImmo – Abbildung 2](/img/schnittstellen-dta-vhka-files-abaimmo/02.png)

![AbaImmo – Abbildung 3](/img/schnittstellen-dta-vhka-files-abaimmo/03.png)

![AbaImmo – Abbildung 4](/img/schnittstellen-dta-vhka-files-abaimmo/04.png)

![AbaImmo – Abbildung 5](/img/schnittstellen-dta-vhka-files-abaimmo/05.png)

12\. Navigiere im smart-me Rechnungserstellung zu "Konfiguration" und prüfe ob VEWA aktiviert oder inaktiv ist.

\--> ist es aktiviert, so muss geprüft werden ob eine Abrechnungsperiode gleich dem Abfragefile aus AbaImmo besteht, falls nicht eine entsprechende erfassen.

13\. Navigiere nun zu "Rechnungen" selektiere die Liegenschaft und drücke rechts auf "exportieren"

14\. Wähle den Export Typ "AbaImmo" und konfiguriere die Informationen gemäss Auswahl. Beachte, dass Strom nur ab V2025 zur Verfügung steht.

15\. Wähle nun die Datei zum Hochladen aus und klicke auf "exportieren". Nach beendigung der Berechnung steht das File zu m Herunterladen bereit.

16. Lade das ergänzte File mittels "Herunterladen" auf deinen Rechner.

17\. Lade nun das heruntergeladene File im AbaImmo unter Y2312 Schnittstelle verarbeiten hoch (Import).

18\. Betrachte die hochgeladenen Daten unter Y2311. (Wähle die Imobiliennummer)

![AbaImmo – Abbildung 6](/img/schnittstellen-dta-vhka-files-abaimmo/06.png)

### Datenabgleich zwischen AbaImmo und smart-me

Damit das File passend gelesen werden kann, muss im smart-me unter den externen Schlüsseln im smart-me Billing die jeweilige Abacus ObjektID hinterlegt werden.

1.  Öffne das exportierte File in einem Editor.

2.  Suche die ObjektID (4) im File zu jedem der Wohnungen.

3.  Trage die ObjektID (4) bei der passenden Wohneinheit im smart-me Billing bei den Externen Schlüsseln ein.


![AbaImmo – Abbildung 7](/img/schnittstellen-dta-vhka-files-abaimmo/07.png)

![AbaImmo – Abbildung 8](/img/schnittstellen-dta-vhka-files-abaimmo/08.png)

### ObjektID mit Abrechnungseinheiten verbinden

Für jede Abrechnungseinheit in smart-me muss eine ObjektID aus dem File zur Verfügung stehen. Die AbaImmo ObjektID muss nun mit der Wohnung über die externen Schlüssel verbunden werden.

Gemäss oberem Beispiel wird nun für die Wohnung 303-2.2 im smart-me die 4,5-Zimmerwohnung mit der ID "1101" an der 4. Stelle verknüpft.

![AbaImmo – Abbildung 9](/img/schnittstellen-dta-vhka-files-abaimmo/09.png)

### Kostenstellenbuchung im Abaimmo durchführen

Werden vorausgehende Buchungen in AbImmo auf die Kostenstellen benötigt, können diese aus der Zusammenfassung CSV bei jeder erstellter Rechnung entnommen werden.

Üblicherweise ist das der Fall für den Strom, welcher nur als einzel position übertragen wird. Bei Buchungen in diesem Fall muss der Solarstrom und der Netzstrom gebucht werden. Einzelanteile können aus dem CSV entnommen werden die Einnahmen zu verteilen.

Bei der Umlage des Solarstromes wird dies öfters nötig sein, da der Ursprung dieser Information im smart-me System liegt.

Bei den anderen Kostenstellen liegen üblicherweise externe Rechnungen vor welche gebucht werden können.

1.  Betrete das smart-me Billing über den Tab Rechnungsstellung

2.  Wähle die Liegenschaft aus

3.  Wähle den Rechnungszeitraum und erstelle eine Rechnung

4.  Wenn die Rechnung des passenden Zeitraums erstellt ist, öffne die Zusammenfassung CSV


![AbaImmo – Abbildung 10](/img/schnittstellen-dta-vhka-files-abaimmo/10.png)

![AbaImmo – Abbildung 11](/img/schnittstellen-dta-vhka-files-abaimmo/11.png)

Darin enthalten sin die jeweils verkauften kWh, m3 und der Preis pro Tarif, Abrechnungseinheit und im Total zu finden.

Mit diesem Totalwert des jeweiligen Tarifs, kann eine Buchung in AbaImmo erledigt werden und dann mit dem DTA-VHKA File mit Promille passend verteilt werden.
