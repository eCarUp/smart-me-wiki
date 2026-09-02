---
title: 'VEWA - Abrechnung'
slug: '/konfiguration/billing/vewa-abrechnung'
description: 'Einleitung smart-me ab 2min 20sec'
sidebar_label: 'VEWA - Abrechnung'
---
![VEWA - Abrechnung – Abbildung 1](/img/konfiguration-billing-vewa-abrechnung/01.png)

## Webinar VEWA

<Video src="nrziX2lLI0s" title="Video" />

- [Einleitung smart-me](https://youtu.be/nrziX2lLI0s?si=ufIjxwLFavDER5VH&t=140) ab 2min 20sec 

- [VEWA](https://youtu.be/nrziX2lLI0s?si=O-Q5qFbhTNm4v4s-&t=770) ab 12min 50sec

- [Live Demo](https://youtu.be/nrziX2lLI0s?si=CYljDSjMHWwKagCu&t=1498) ab 24min 58sec 

- [Fragen](https://youtu.be/nrziX2lLI0s?si=sr3GAi-mrt6gyLyQ&t=2432) ab 40min 32sec 


## Allgemeines zu VEWA

VEWA steht für Verbrauchsabhängige Energie- und Wasserkosten Abrechnung. Sie bietet einen Leitfaden zur fairen Verrechnung aller Energiekostentypen und umfasst:

- Wärme

- Kälte

- Warmwasser

- Kaltwasser 

- Strom (Kann auch separat gelöst werden)


Die VEWA ist der Nachfolger der bekannten VHKA-Abrechnung und unterstützt erweiterte Energieträger und vereinfachte Verfahren.

VEWA übernimmt die Kostenverteilung für separate oder kombinierte Heizsysteme basierend auf Zählermesswerten und verteilt die Kosten so fair wie möglich.

Dazu werden bei Wärme, Kälte, Warmwasser spezielle verfahren angewendet um Ungleichheiten der Wohnungslokation, Verluste in Leitungen oder andere unterschiede zu den Bezügern auszugleichen.

Es gibt dabei folgende Formen der der Kostenaufteilungen:

Separierte Kostenstellen

- Jede Energie kommt aus unterschiedlicher Quelle


![VEWA - Abrechnung – Abbildung 2](/img/konfiguration-billing-vewa-abrechnung/02.png)

Kombinierte Wärme und Warmwasser

- Heizung jeglicher Art mit verbundenem Warmwasserspeicher


![VEWA - Abrechnung – Abbildung 3](/img/konfiguration-billing-vewa-abrechnung/03.png)

Kombinierte Wärme + Kälte und Warmwasser

- Wärmepumpe mit Freecooling


![VEWA - Abrechnung – Abbildung 4](/img/konfiguration-billing-vewa-abrechnung/04.png)

## Funktionsumfang

### Welche Systeme können mit smart-me VEWA abgerechnet werden?

- separierte Heiz und Wassersysteme (Wärme, Kälte, Warmwasser, Kaltwasser)

- kombinierte Heiz- und Warmwassersysteme (Wärme + Warmwasser, Kälte , Kaltwasser)

- kombinierte Heiz- Warmwasser- und Kühlsysteme (Wärme + Kälte + Warmwasser, Kaltwasser)


Voraussetzung für eine erfolgreiche Abrechnung einer Energieart ist, dass für jeden Energietyp Verbrauchszähler in den Einheiten vorhanden sind.

Hinweis: 

- Heizkostenverteiler werden nicht unterstützt

- Bei Verrechnung mit Totalerzeugungsmetern, können die Kosten prozentual auf die Wohneinheiten verteilt werden.


![VEWA - Abrechnung – Abbildung 5](/img/konfiguration-billing-vewa-abrechnung/05.png)

Allgemeine Räumlichkeiten:

Es ist möglich Zählersammlungen in Ordnern zu einem späteren Zeitpunkt (Billing) prozentual auf Abrechnungseinheiten zu verteilen.

Dies wird für beide obigen Systemvarianten unterstützt.

### Wie viele Systeme können in einem Account konfiguriert werden?

Es kann ein VEWA-System pro Liegenschaft abgerechnet werden. Bei mehreren Heizsystemen werden mehrere Liegenschaften im gleichen Account angelegt.

Diese können danach individuell abgerechnet werden mit verschiedenen Abrechnungsperioden.

### Allgemeine Arbeitsweise mit smart-me VEWA

- VEWA kann auf jeder Liegenschaft angewendet werden. Achte entsprechend darauf, dass alle Verbrauchszähler des gleichen Heizsystems sich in der gleichen Liegenschaft befinden.
    Ist ein Heizsystem für mehrere Gebäude das gleiche, müssen die Gebäude in eines zusammengelegt werden.

- Bei der Anwendung von VEWA müssen im Mieterspiegel alle Mietverträge und auch Leerstände korrekt erfasst werden. Entweder in smart-me Billing oder in der externen Immobiliensoftware bei Verwendung von DTA-VKA-Files.


## VEWA Konfigurieren

1.  ### VEWA aktivieren und Kostenaufteilungen konfigurieren.


Das Wärmesystem auswählen:

- Wärme, Kälte und Warmwasser kombiniert

- Wärme, Warmwasser kombiniert

- Separierte Systeme


Ob Kombiniert oder nicht ist abhängig von der Wärmeerzeugung. Wird beispielsweise eine Wärmepumpe für die Heizung, Kühlung und Warmwasseraufbereitung verwendet, bietet sich die kombinierte Verrechnung an, da für alle drei Energien die Aufwandsgrösse die gleiche ist, nämlich Strom.

Wird die Heizung aber über eine Ölheizung ermöglicht, das Warmwasser aber rein elektrisch aufbereitet ohne Unterstützung der Ölheizung, sind nicht kombinierte Verrechnungen die Wahl.

Kostenaufteilung

Die Kostenaufteilung teilt die Gesamtkosten in Fixkosten (Grundkosten) und in variable Kosten (Verbrauchsabhängige Kosten) auf.

Grundkosten

Die Grundkosten berücksichtigen allfällige Leitungsverluste, Zirkulationsverluste, bevorzugte Lage einer Wohnung mit mehr Sonnenschein usw. und verteilt ein Anteil der Kosten auf alle Mieter und deren Flächenanteil an der Gesamtliegenschaft.

Variable Kosten

Die Variablen Kosten werden direkt auf die erfassten verbrauchten Energiemengen angewendet. Sie entsprechen dem individuellen Verbrauch jedes Mieters.

Warmwasseraufbereitung

Damit die Energie welche in die Warmwasseraufbereitung geflossen ist anhand m3-Werten geschätzt werden kann wird die folgende Standardformel angewendet:

Warmwasserenergie in kWh =
Total Verbrauchswerte Warmwasser \[m3\] \* 1.163 \* Temperaturdifferenz \[K\] \* 1,25

Die Temperaturdifferenz kann gewählt werden und bezieht sich auf die Temperaturdifferenz des Kaltwassers beim Eintritt ins Gebäude (Üblicherweise +10°C) bis es auf die Durchschnittstemperatur des Boilers erhitzt wurde (Üblicherweise +52°C).

Die Differenz ist entsprechend diesem Beispiel bei: 

Temperaturdifferenz = Zieltemperatur - Eintrittstemperatur = 52°C - 10°C = 42 K

![VEWA - Abrechnung – Abbildung 6](/img/konfiguration-billing-vewa-abrechnung/06.png)

Orientierungswerte für Grundkosten und variable Kosten Konfiguration:

Neubauten (Alles ab 2018): 

- Grundkosten 30%, variable Kosten 70%


Sanierte Altbauten (Isolation erhöht nach Neubaustandard):

- Grundkosten 40%, variable Kosten 60%


Nicht sanierte Altbauten (Vor 2018):

- Von Grundkosten 40%\-50%, variable Kosten von 50-60%

- Zusätzlich muss für jede Wohnung ein Lageausgleich berechnet werden. Entweder wird der Messwert des Wohnungszählers reduziert oder die Verteilprozente des Totalzählers werden gewichtet. 
    (Details im Kapitel 10 VEWA Dokument unter erweiterte Literatur)


Hier können die Wohnungszählermesswerte beeinflusst werden, um die Lageanpassung vorzunehmen: [Zähler/Ordner-Konfiguration](/konfiguration/ordnerkonfiguration)  

- Wenn ein Zähler seinen Messwert um 20% reduzieren muss: 
    Wertkorrektur wird von 100% auf 80% eingestellt.


### 2\. Erfassen einer Abrechnungsperiode

Die Kosten können pro Energietyp als Vollkosten erfasst werden.
Bei kombinierten Systemen werden die Einzelkosten der einzelnen Energieträger zusammengezählt.

![VEWA - Abrechnung – Abbildung 7](/img/konfiguration-billing-vewa-abrechnung/07.png)

### 3\. Abrechnungsperioden erstellen und Inhalt der Rechnungsperiode definieren

1.  Erstellen der Abrechnungsperiode

2.  Inhalt aktivieren oder deaktivieren


Wird Strom und die Heiz- und Nebenkosten in unterschiedlichen Intervallen abgerechnet, werden mehrere Perioden erfasst.

z.B.:

- Strom Periode Q1 2024 (Nur Elektrizität und Sonstiges)

- Strom Periode Q2 2024 (Nur Elektrizität und Sonstiges)

- Strom Periode Q3 2024 (Nur Elektrizität und Sonstiges)

- Strom Periode Q4 2024 (Nur Elektrizität und Sonstiges)

- Wärme Wasser Periode 2024 (Nur Wärme, Kälte, Warm- und Kaltwasser)


![VEWA - Abrechnung – Abbildung 8](/img/konfiguration-billing-vewa-abrechnung/08.png)

### 4\. Erfassen der Kosten der Abrechnungsperiode

Hinweis für Export in Immobiliensoftwares mit DTA-VHKA Files:
Wenn Sie die VEWA verwenden wollen, aber die Daten in ein anderes System exportieren in Promille oder Verbrauchswerten, brauchen Sie keine Kosten zu erfassen. Die Rechnungsperiode muss allerdings vorgängig angelegt werden.

Die Kosten welche erfasst werden dürfen, teilen sich grob in folgende Kosten:

Energiekosten

Kosten für den eigekauften Energieträger z.B.: 

- 1000 Liter Öl für 2000 CHF

- 500kWh Strom für 200 CHF

- 10 m3 Kaltwasser für 50 CHF


Energie-Nebenkosten

Kosten für Betrieb und Instandhaltung

- Kosten der periodischen Revision der Heizanlage

- Kosten für den Ableseservice (z.B. Amortisation der Lizenzkosten von smart-me für die Geräte)

- Verwaltungsarbeiten im Zusammenhang mit der Heizanlage

- Kosten Kaminfeger

- Abfallbeseitigung falls das Heizsystem solche Kosten aufwirft.


Was nicht zu den Energienebenkosten gehört

- Messinfrastruktur (Diese wird über eine Mietzinserhöhung geregelt)


Hinweis zu den Warmwasserkosten:

Die Kosten für Warmwasser enthalten nur die Kosten für die Erwärmung des Warmwassers. Die für die Warmwasserbereitung verbrauchte Kaltwassermenge wird automatisch in den Kaltwasserteil übernommen. 

- Wenn ein Gesamtkaltwasserzähler auf mehrere Wohnungen prozentual aufgeteilt wird, wird die gesamte Kaltwassermenge von diesem gemeinsamen Zähler berechnet.

- Wenn sich Kalt- und Warmwasserzähler in den Wohnungen befinden und mit 100% des Verbrauchs appliziert werden, ist die Summe für Kaltwasser die Summe aller Warm- und Kaltwasserzähler.


Diese können pro Energietyp eingetragen werden und werden aufsummiert.

![VEWA - Abrechnung – Abbildung 9](/img/konfiguration-billing-vewa-abrechnung/09.png)

### 5\. Zählermieten verrechnen

Anders als im ZEV, dürfen im VEWA Kosten für die Amortisation von Wärme und Wasserzählern gegenüber den Verbrauchern verrechnet werden.

Dies muss aber über die Erhöhung Mietzinse geschehen, nicht über die Nebenkosten.

Es dürfen die Hardwarekosten und der Einbau eines Zählers überwälzt werden.

Es gelten die Amortisationszeit von 10 Jahren.

Überwälzungsregeln sind beschrieben in Art. 269d OR und Art. 19 und 20 VMWG

Details zur Berechnung im offiziellen VEWA Dokument unter 2.2 FORMELLE ÜBERWÄLZUNGSREGELN 

### 6\. Erfassen eines immer gültigen Tarifs für jeden Energieträger

- Dieser Tarif wird ohne Preis (0) eingetragen mit einer endlosen Gültigkeit (2099).

- Jeder Energieträger mit gültigem Tarif wird auf der Rechnung dargestellt.




![VEWA - Abrechnung – Abbildung 10](/img/konfiguration-billing-vewa-abrechnung/10.png)

### 7\. Wohnungsflächen eintragen

Für die VEWA Berechnung und Umlage der Grundkosten müssen die Wohnungsflächen bekannt sein. Diese können in der jeweiligen Abrechnungseinheit festgelegt werden. Sie werden danach zur relevanten Gesamtfläche summiert.

Hinweis: Um die relevante Gesamtfläche korrekt zu rapportieren, müssen alle Räumlichkeiten als Abrechnungseinheit erfasst werden, auch wenn diese selber keine Zähler angegliedert hätten und diese extern Pauschal abgehandelt werden.
Nur ganze Zahlen möglich.



![VEWA - Abrechnung – Abbildung 11](/img/konfiguration-billing-vewa-abrechnung/11.png)

### Nächster Schritt

## Rechnungsinhalt und Aufstellung

### Übersicht

Die Übersicht beinhaltet alle Kosten auf einen Blick, inklusive möglicher applizierter Steuern und Rundungsdifferenzen.

![VEWA - Abrechnung – Abbildung 12](/img/konfiguration-billing-vewa-abrechnung/12.png)

### Wärme

Die Wärme zeigt die Gesamtkosten für die Kostenstelle Wärme und die angewandten Verteilschlüssel und Referenzgrössen.

- Grundkostenanteil in % (hier 30%)

- Verbrauchskostenanteil in % (hier 70%)

- Total Verbrauch Liegenschaft in kWh (hier 700 kWh)

- Total Wohnfläche in m2 der Liegenschaft (hier 300 m2)


Die Berechneten Tarife werden dann auf die jeweilige Wohnung angewandt (Blauer Block) basierend auf den Gemessenen Zählerwerten der Wohnung.

- Wohnfläche der Wohnung in m2 (hier 100 m2)

- Bezugstage (hier 91 von 91, 100% Belegung)

- Zählermesswert der jeweiligen Wohnung (hier 500kWh)






![VEWA - Abrechnung – Abbildung 13](/img/konfiguration-billing-vewa-abrechnung/13.png)

### Warmwasser

Der Bereich Warmwasser zeigt die Gesamtkosten für die Kostenstelle Warmwasser und die angewandten Verteilschlüssel und Referenzgrössen.

- Grundkostenanteil in % (hier 30%)

- Verbrauchskostenanteil in % (hier 70%)

- Total Verbrauch Liegenschaft in m3 (hier 5 m2)

- Total Wohnfläche in m2 der Liegenschaft (hier 300 m2) 


Diese Kosten bestehen ausschliesslich aus den Kosten die zur Warmwassererzeugung benötigt werden, nicht aber das Kaltwasser welches dafür aufgewendet wird.
Mehr zu den Kosten im Bereich Kostenstellenübersicht.

Die Berechneten Tarife werden dann auf die jeweilige Wohnung angewandt (Blauer Block) basierend auf den Gemessenen Zählerwerten der Wohnung.

- Wohnfläche der Wohnung in m2 (hier 100 m2)

- Bezugstage (hier 91 von 91, 100% Belegung)

- Zählermesswert der jeweiligen Wohnung in m3 (hier 3 m3)


![VEWA - Abrechnung – Abbildung 14](/img/konfiguration-billing-vewa-abrechnung/14.png)

### Kaltwasser

Der Bereich Kaltwasser zeigt die Gesamtkosten für die Kostenstelle Kaltwasser und die angewandten Verteilschlüssel und Referenzgrössen.

- Grundkostenanteil in % (hier 20%)

- Verbrauchskostenanteil in % (hier 70%)

- Total Verbrauch Liegenschaft in m3 (hier 13 m2)

- Total Wohnfläche in m2 der Liegenschaft (hier 300 m2) 


Die Berechneten Tarife werden dann auf die jeweilige Wohnung angewandt (Blauer Block) basierend auf den Gemessenen Zählerwerten der Wohnung.

- Wohnfläche der Wohnung in m2 (hier 100 m2)

- Bezugstage (hier 91 von 91, 100% Belegung)

- Zählermesswert der jeweiligen Wohnung in m3 Warmwasser
    (hier 3 m3)

- Zählermesswert der jeweiligen Wohnung in m3 Kaltwasser
    (hier 5 m3)


Hinweis:

In Abhängigkeit des Systems können hier nur Kaltwasserzähler oder gemischt Kalt- und Warmwasserzähler stehen, die Detektion dieser Systeme ist automatisiert.

- Gibt es einen Hauptzähler für Kaltwasser und keine in den Wohnungen oder nur Warmwasserzähler in den Wohnungen würde hier nur ein %-Anteiliger Kaltwasserzähler stehen.

- Gibt es Wohnungszähler für Warm- und Kaltwasser stehen hier immer beide Zähler pro Wohnung, die Summe ergibt den Totalwasserverbrauch.


![VEWA - Abrechnung – Abbildung 15](/img/konfiguration-billing-vewa-abrechnung/15.png)

### Kostenstellenübersicht

Separierte Kostenstellen

Jede Rechnung verfügt über die Kostenstellenübersicht. Diese enthält alle eingetragenen Kostenpunkte zu den individuellen Kostenstellen.

- Bei Wärme stehen alle Kosten zum Heizsystem aufgelistet.

- Bei Warmwasser stehen nur die Kosten betreffend der Erwärmung des Warmwassers, nicht aber der verwendeten Kaltwassermenge.

- Bei Kaltwasser werden alle Kosten zum Kaltwasser und Abwasser eingetragen.


Kombinierte Kostenstellen

Die Kostenstellenübersicht kann sich optisch verändern wenn Systeme kombiniert werden.

Üblich ist z.B. die Kombinierung von Wärme und Warmwasser, da ein Teil der Energie zur Warmwasseraufbereitung aus dem Heizsystem kommt. (Heizungsgekoppelter Warmwasserspeicher)

In diesem Fall zeigen sich die Kosten dann kombiniert.

Speziell daran ist der Ausweis der verwendeten Umrechnungsformel um die Gesamtenergie in Wärmeenergie und Warmwasseraufbereitungsenergie aufzusplitten.

Separierte Kostenstellen Kostenübersicht

![VEWA - Abrechnung – Abbildung 16](/img/konfiguration-billing-vewa-abrechnung/16.png)

Kombinierte Kostenstellenübersicht Wärme + Warmwasser
(Umrechnungsformel unterhalb der Kostenübersicht)

![VEWA - Abrechnung – Abbildung 17](/img/konfiguration-billing-vewa-abrechnung/17.png)

## VEWA mit Immobiliensoftware Schnittstelle anwenden

[Datenaustausch mit VEWA und DTA-VHKA Files](/schnittstellen/dta-vhka-files)

## Fehlerbehandlung VEWA und Billing

[Störungen in Zusammenhang mit VEWA](/stoerungsbehebung/billing-fehlermeldungen)

## Literatur und weiterführende Dokumente zu VEWA (Aktuell rechtliche Lage)

[VEWA Abrechnungsmodell Details und Leitfaden](https://www.admin.ch/gov/de/start/dokumentation/medienmitteilungen.msg-id-67271.html)

[Weiter zu VHKA-Schnittstelle](/schnittstellen/dta-vhka-files)
