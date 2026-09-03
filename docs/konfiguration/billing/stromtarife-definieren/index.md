---
title: 'Stromtarife definieren'
slug: '/konfiguration/billing/stromtarife-definieren'
description: 'Im Video Rechts werden dir von Guy die Grundlagen erklärt wie die Strompreise Generell zusammengesetzt sind.'
sidebar_label: 'Stromtarife definieren'
---
![Stromtarife definieren – Abbildung 1](/img/konfiguration-billing-stromtarife-definieren/01.png)

## Strompreis festlegen

Im Video Rechts werden dir von Guy die Grundlagen erklärt wie die Strompreise Generell zusammengesetzt sind. 



Du kannst neu aber auch unseren Online-Stromtarifrechner verwenden welcher dir unter die Arme greift und auf der Erklärung basiert.

[smart-me Stromtarifrechner](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

<Video src="ju7m6Bs8U_M" title="YouTube Video, smart-me Billing - Preise ZEV festlegen" />

smart-me Billing Preise ZEV festlegen von Guy erklärt.

Achtung: Video wurde mit einem alter Version vom Excel aufgenommen. Dort ist noch ein Fehler in den Formeln drin. Excel wurde korrigiert.

[Beispiel Preise im ZEV festlegen.xlsx](https://drive.google.com/uc?export=download&id=1cGOAL1UIo4ZmvW55drHcfdPw0v4vnJ9Z) 

## Stromtarife konfigurieren

Im smart-me Billing kann entweder mit den Elektrizitätstarifen oder mit virtuellen Tarifen gearbeitet werden. Die Lösung mit Elektrizitätstarifen eignet sich ausschliesslich für die realisierung von reinen Netzstromsystemen. In allen anderen Fällen sind die virtuellen Tarife zu verwenden.

### 1.Beschaffe dir das Tarifblatt deines Energieversorgers

Das Tarifblatt deines Energieversorgers ist schon Monate vor beginn der neuen Tarifperiode online auf seiner Webseite verfügbar.

Informiere dich auch welchen Tarif du beim Energieversorger genau einkaufst: 

- Grün , Blau, Grau oder andere Versionen

- Einheitstarif oder Doppeltarif oder dynamisch.


Das Tarifblatt lesen:

Die relevanten Informationen sind teilweise etwas verstreut. Das Tarifblatt selbst besteht üblicherweise aus 4 Abteilungen:

- Energiepreise

- Netznutzungspreise

- Messentgelte

- Öffentliche Abgaben


Die Öffentlichen Abgaben im speziellen sind nicht vollständig auf dem Tarifblatt vorhanden. Die Gemeindeabgaben sind unterschiedlich pro Gemeinde und sind in eimem externen Tarifblatt festgehalten. Der Link befindet sich in 99% der Fälle in der Fussnote des Tarifblattes.

Beschaffe diesen Wert für deine Tarifierung über den auf dem Tarifblatt aufgedruckten Link.

Er ist üblicherweise auch ein Rp. / kWh Wert, kann aber auch in % der Netznutzung (Komponenten unterschiedlich) angegeben sein.

![Stromtarife definieren – Abbildung 2](/img/konfiguration-billing-stromtarife-definieren/02.png)

### 2\. Wähle für deinen (v)ZEV die zu verwendende Solartarifberechnung

Du Kannst zwischen zwei grundsätzlichen Ansätzen wählen:

- Pauschalmethode nach 80% des Standardnetzprodukts
    Wichtig hier ist, dass die Pauschalmethode automatisch alle anderen Kosten abdeckt. Es dürfen keine Kosten erhoben werden für die Messung, Abrechnung und Management des ZEV-Stromverkaufs.

    Hier dürfen keine Kosten erhoben werden für die Messung des ZEV, die Administration und Abrechnung des ZEV.
    Die Zählergebühr des Energieversorgers für den Hauptzähler des ZEV darf hier nicht separat zusätzlich erhoben werden.

    - -   Ausprägung 1: Netzstrom verrechnet 1:1, Solarstrom 80% der Grundkosten und 80% des Netzstromeinkaufspreises
            Diese Variante eignet sich für die Gewinnoptimierung innerhalb des ZEV, solange eine hohe Auslastung bei den Mieten besteht.
            Diese Methode eignet sich nicht, wenn Industrielle Grossverbraucher im gleichen Gebäude sind und ein Multitarifsystem besteht.
            Beste Lösung für Multitarifsysteme.

        - Ausprägung 2: Netzstrom 1:1, Solarstrom 80% des Elcom-Referenzpreises (Verwenden wenn dynamische Tarife vom Energieversorger)
            Diese Variante eignet sich für alle ZEV ohne Industrielle Grossverbraucher und ist die einfachste in der Umsetzung.
            Bessere Option bei häufigen Leerständen.
            Wird diese Variante in Zusammenhang mit Industrie und Multitarif (Doppeltarif) verwendet, kann es sein, dass der Industrielle über den höheren Solartarif am Ende mehr bezahlt wie ausserhalb des ZEV!

- Effektive Kosten (Gestehungskostenrechnung)
    Bei dieser Methode können Kosten für Messung, Abrechnung und Management erhoben werden, zusätzlich zum Kalkulierten Wert des Solarstromes. Details dazu findest du im VEWA Handbuch. 

    - -   Diese Methode eignet sich, wenn 80% des Netzstromes allenfalls nicht kostendeckend für deine Solarnlage wären. Dies ist sehr selten der Fall.

        - Diese Methode muss Jahr für Jahr mit der Kalkulation bewiesen werden und erhöht den Administrativen Aufwand.


### 3\. Berechne deine Tarife für die Tarifperiode

Nutze für die Berechnung am einfachsten unseren Tarifrechner. Er lässt dich je nach Wahl der Methode wissen, welche Eintragungen du im smart-me machen musst.

Beim dynamischen Tarif: Wähle 80% Elcom methode und suche im Rechner den H4 Tarif deiner Region und Energieversorgers als Referenz.

[smart-me Stromtarifrechner](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

### 4\. Konfiguriere deine Tarife

Navigiere nun wieder in die Liegenschaftskonfiguration.

1.  Rechnungsstellung

2.  Konfiguration

3.  Liegenschaft

4.  Virtuelle Tarife


![Stromtarife definieren – Abbildung 3](/img/konfiguration-billing-stromtarife-definieren/03.png)

Erstelle nun die Netztarife deiner Tarifperiode

### Beispiel: Einheitstarif

### Beispiel: Doppeltarif

Nächster Schritt Timing des Tarifs in den Wenn Aktionen abbilden

[Tarifzeiten definieren](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)

![Stromtarife definieren – Abbildung 4](/img/konfiguration-billing-stromtarife-definieren/04.png)



Beispiel Einheitstarif mit 80% Pauschalmethode:

Erstelle nun einen Netztarif mit dem angegebenen Preis: 

- Netztarif 2026 : 0.19707 CHF / kWh


![Stromtarife definieren – Abbildung 5](/img/konfiguration-billing-stromtarife-definieren/05.png)

![Stromtarife definieren – Abbildung 6](/img/konfiguration-billing-stromtarife-definieren/06.png)

Beispiel Einheitstarif mit 80% Pauschalmethode:

Erstelle nun zwei Netztarife mit den angegebenen Preisen:

- Netztarif HT 2026: 0.22409 CHF / kWh

- Netztarif NT 2026: 0.17007 CHF / kWh


Bei Doppeltarifen, muss das Timing vorrangig erstellt werden mittels [WENN/DANN](/konfiguration/wenndann-aktionen) Aktionen, diese Aktionen, können dann mit der "Zusätzlichen Bedingung" verlinkt werden um die Gültigkeit durch die Woche zu steuern.



![Stromtarife definieren – Abbildung 7](/img/konfiguration-billing-stromtarife-definieren/07.png)

![Stromtarife definieren – Abbildung 8](/img/konfiguration-billing-stromtarife-definieren/08.png)

Erstelle nun den Solartarif dazu

Hinweis:
Es gibt verschiedene Soalrtarife und Batterietarife mit unterschiedlichen Fähigkeiten und voraussetzungen.

Allgemein ist der Solartarif vZEV die beste und universellste Wahl.

Was dieser nicht kann ist unterschiedliche Tarife für Batterie und Solarenergie defineiren. Dazu muss der alternative Tarif verwendet werden.

Details findest du unterhalb in der Sektion "Alle Details".

In diesem Beispiel wird der Solartarif vZEV verwendet.

Messungen:

Alle Solartarife benötigen relevante Messpunkte welche verlinkt werden müssen.

Einfachste Option: 

- Feld „Solarzähler“: Wähle alle Erzeugungszähler (Solar und Batterie) aus.

- Feld „Bilanzzähler“: Wähle die Bilanzierungszähler aus (1 Haus: Hausanschlusszähler, Areal: Arealzähler oder mehrere Hausanschlusszähler)


Alternative Option: 

- Feld „Solarzähler“: Wähle alle Erzeugungszähler (Solar und Batterie) aus.

- Feld „Bilanzzähler“: Wähle alle Verbrauchszähler und Produktionszähler aus.


Solareinheitstarif

![Stromtarife definieren – Abbildung 9](/img/konfiguration-billing-stromtarife-definieren/09.png)

Solardoppeltarif

![Stromtarife definieren – Abbildung 10](/img/konfiguration-billing-stromtarife-definieren/10.png)

![Stromtarife definieren – Abbildung 11](/img/konfiguration-billing-stromtarife-definieren/11.png)

### Neu Rechnen der Stromtarife starten

Wenn die virtuellen Tarife verwendet werden, muss am Ende der Konfiguration (sowie bei späteren Konfigurationsänderungen) auf Neu berechnen geklickt werden (am besten ab 1.1.2018). Dadurch werden alle bisherigen Werte neu berechnet.

Bevor eine Rechnung erstellt werden kann, muss abgewartet werden, bis der letzte berechnete Wert auf "Heute" steht und keine Fehlermeldung erscheint.

Fehlermeldungen, die auf ein Konfigurationsproblem zurückzuführen sind, werden in der Regel innerhalb einer Minute angezeigt. Es lohnt sich also, auf "Neu berechnen" zu klicken und kurz zu warten, ob eine Fehlermeldung erscheint oder nicht.

Tipp: Bei Preis- oder Mieteränderungen (Adressen, Ein- oder Auszugsdatum) ist eine Neuberechnung nicht erforderlich, in allen anderen Fällen ist eine Neuberechnung immer erforderlich.

![Stromtarife definieren – Abbildung 12](/img/konfiguration-billing-stromtarife-definieren/12.png)

### Eintragen des Leistungstarifs

![Stromtarife definieren – Abbildung 13](/img/konfiguration-billing-stromtarife-definieren/13.png)

Mit den Spitzenstromtarifen können erweiterte oder neuartige Strommodelle von Energieversorgern abgedeckt werden. 

Im Tarifblatt ist dieser erkennbar an seiner Einheit. Angegeben üblicherweise als z.B 1.50.- / kW / Monat

In unserem Beispiel erfassen wir den berechneten Preis.

Die Spitzenleistungskosten können mit einer von zwei Methoden erfasst werden:

- Verbrauchsmessung: Automatisch durch eigene Bilanzmessung

- Kostenerfassung: Spätere Kostenerfassung pro Monat nach erhalt der Rechnung


Gültigkeitsdauer:
Die Gültigkeitsdauer eines Spitzenstromtarifs ist auf 1 Jahr begrenzt, dieser kann mehrfach für mehrere Jahre erstellt werden.

Spitzentarife basieren entweder auf den Monatlich angefallenen Kosten (Rechnung Energieversorger) oder sind abhängig vom hinterlegten Tarif und der aktiven Messung des Hauptmesspunktes.

![Stromtarife definieren – Abbildung 14](/img/konfiguration-billing-stromtarife-definieren/14.png)

### Eintragen der 80% Grundgebühr (falls die 80% Methode mit Grundgebühr gewählt wurde)

In diesem Beispiel nutzen wir die 80% Methode mit Grundgebühr. Entsprechend müssen diese Kosten noch erfasst werden unter "Sonstiges"

![Stromtarife definieren – Abbildung 15](/img/konfiguration-billing-stromtarife-definieren/15.png)

Die Kosten der Grundgebühr fällt auf allen Abrechnungseinheiten an, daher kann Sie global bei den Tarifen hinterlegt werden für das Jahr 2026.

![Stromtarife definieren – Abbildung 16](/img/konfiguration-billing-stromtarife-definieren/16.png)

### Nächster Schritt

## Alle Details zu den Tarifen und Funktionen

## Virtuelle Tarifkonfiguration (Netz-, Solar-, Batterietarife)

Virtuelle Tarife erlauben es, selbst ein dynamisches Tarifmodell für die Verrechnung der Energie zu definieren. Dies kann z. B. verwendet werden, um bei einem Zusammenschluss zum Eigenverbrauch (ZEV oder Mieterstrom) zu unterscheiden, ob ein Mieter Strom von einer Solaranlage oder vom Netz bezieht. 

Bitte beachte, dass alle normalen Tarife für Elektrizität gelöscht sein müssen.

Unter Virtuelle Tarife siehst du alle bereits erfassten virtuellen Tarife. Klicke auf Hinzufügen und erfasse nun alle virtuellen Tarife.

Name: Der Name des Tarifs wird auch dem Nutzer (Mieter) angezeigt.

Tarif Type 

- Solartarif vZEV (neu):
    Damit kann ein globaler Solartarif in einer ZEV oder einer vZEV erstellt werden.
    Die Solarenergie wird dabei gleichmässig auf alle Verbraucher verteilt und Basiert auf der Summe der Hausbilanzen (ZEV) und der Summe der Produktionen (Solarzähler und oder Batteriezähler). Mit diesem Tarif ist es nicht nötig 100% der Lasten zu messen wenn ein Hausanschlusszähler physisch vorhanden ist. Die Notwendigkeit von virtuellen Summenzählern entfällt bei diesem Tarif.

- Solartarif (legacy):
    Damit kann die Energie einer Solaranlage innerhalb eines ZEV verrechnet werden.
    Damit können ZEV mit oder ohne Bilanzzähler (VNB) umgesetzt werden. Der Tarif bedarf eines virtuellen Summenzählers aller relevanten Lasten (100% Messung).

- Batterietarif (legacy):
    Damit kann die Energie einer AC gekoppelten Batterie innerhalb eines ZEVs verteilt werden. Dieser Tarif ist nur mit dem Solartarif (legacy) kompatibel. Der Tarif bedarf eines virtuellen Summenzählers aller relevanten Lasten (100% Messung).

- Netztarif (normaler Tarif oder dynamischer Tarif):
    Damit wird der Netzstrom verrechnet. Dieser kann bei Bedarf zusätzlich  auch in Hoch- und Niedertarifzeiten oder dynamisch aufgeteilt werden.

- Zusätzliche Bedingung
    Sie können mit einer zusätzlichen Bedingung festlegen, wann dieser Tarif gültig ist. Dies kann ein Zeitraum (z.B. für Hoch-/Niedertarif) oder eine beliebige andere Bedingung sein. Die Bedingung muss zuvor als [Wenn/Dann-Aktion](/konfiguration/wenndann-aktionen) definiert worden sein.


Allgemeines zu den Tarifen

Bei jedem Tarif können Preis / Verbrauchseinheit und eine Gültigkeit hinterlegt werden.

Preis / kWh: Der Preis für diesen Tarif

Gültig von: Das Datum, ab wann dieser Tarif gültig sein soll. Siehe Hinweis.

Gültig bis: Das Datum, bis wann dieser Tarif gültig sein soll. Siehe Hinweis.

Hinweise: 

- Wir empfehlen, die Gültigkeit von 1.1.2000 bis 31.12.2099 zu setzten. Bedingung für diese Handhabung ist, dass die Rechnungen in der gleichen Periodizität versendet werden wie der lokale Energieversorger. In diesem Fall kann vor der Rechnungserstellung der Preis festgelegt werden. Wird im smart-me Billing nur der Preis geändert, ist es nicht notwendig den Knopf "neu rechnen" zu betätigen. Bei allen anderen Anpassungen ist das neu rechnen jedoch notwendig.

- Wenn Sie alle Tarife definiert haben, müssen Sie auf „Neu berechnen“ klicken. Dadurch werden alle virtuellen Tarife berechnet und aktiviert. Dieser Vorgang kann einige Stunden in Anspruch nehmen.

- Wenn eine oder mehrere Bedingungen gespeichert sind, müssen alle Tarife die 24 Stunden des Tages abdecken. Ist ein normaler Tarif ohne Bedingungen hinterlegt, fängt er automatisch alle nicht zuordenbaren Energiemengen ab und deckt somit die 24 Stunden ab. Alternativ muss darauf geachtet werden, dass die Zeiten der Bedingungen richtig konfiguriert sind (siehe Beispiel oben).


![Stromtarife definieren – Abbildung 17](/img/konfiguration-billing-stromtarife-definieren/17.png)

<Video src="7iLDy1YZDyY" title="YouTube Video, Virtuelle Tarife" />

### Netztarif

Der Netztarif kann als folgende Tarife erfasst werden:

- Einheitstarif (statisch oder dynamisch)

- Doppeltarif

- Multitarif




Einheitstarif (statisch und dynamisch)

Der Einheitstarif kann entweder statisch (fixer Tarif) oder dynamisch angelegt werden.

Festtarif

Der fixe Tarif wendet den definierten Pries / kWh Netzstrom an.



Dynamischer Tarif

Der dynamische Tarif hingegen bedinet sich einer externen API und fragt den verfügbaren Provider für jede Stunde nach dem aktuell gültigen Preis.

Der Preis wird dann pro Stunde appliziert.

Bitte beachte, das die dynamischen Preise nicht alle relevanten Kosten übertragen und zusätzliche Eintragungen gemacht werden müssen.

- Zusatzgebühren wie Konzessionsgebühren der Gemeinde
    (Als zusätzlicher Fixpreis eintragen)

- Montaliche Anschlussgebühren (Bereich Sonstiges)


Die Berechnung von Rechnungen mit dynamischen Tarif dauern merklich länger als die anderen Methoden (Datentransfer und Applikation)



Doppeltarif unf Multitarife

Es wird für jeden unterschiedlichen Tarif ein Tarif (Netztarif) angelegt. DIese werden danach mit Hilfe der Bedingungen an ein Timing gekoppelt.

Das Timing wird über die [WENN/DANN](/konfiguration/wenndann-aktionen) Aktionen definiert.



![Stromtarife definieren – Abbildung 18](/img/konfiguration-billing-stromtarife-definieren/18.png)

### Solartarif vZEV konfigurieren

Der Solartarif vZEV ermöglicht die Umsetzung von ZEV und vZEV Lösungen. 

Die Konfiguration vZEV Solartarif kalkuliert den effektiven Überschuss einer virtuellen ZEV und den effektiven Netzbezug basierend auf mehreren Solarproduktionszählern und Hausanschlusszählern. 

Die Berechnung berücksichtigt die individuellen Überschüsse eines Hauses und gleichzeitig die Nachfrage anderer Häuser nach diesem Überschuss.

Ist ein Bedarf vorhanden wird er dem Nachbarhaus zur Verfügung gestellt. Ist keiner vorhanden wird der Überschuss als Netzeinspeisung identifiziert.



Die Lösung unterstützt folgende Umsetzungen:

- Realisierung einer normalen ZEV mit oder ohne Bilanzzähler

- vZEV: Mehrere smart-me ZEV's mit Hausanschlusszählern

- vZEV: Kombination von smart-me ZEV's mit Gebäuden nur mit Verbrauchern

- vZEV: Kombination von smart-me ZEV's mit EFH's mit Solaranlagen 

- vZEV: Mehrere smart-me ZEV's in kombination mit ehemaligen VNB Praxismodellen


Hinweis:
Die Batterie kann mit diesem Tarifsystem nicht gesondert tarifiert werden.

![Stromtarife definieren – Abbildung 19](/img/konfiguration-billing-stromtarife-definieren/19.png)

ZEV tarifieren

- Hausanschlusszähler 

- Produktionsmessung (PV + Batterie)


![Stromtarife definieren – Abbildung 20](/img/konfiguration-billing-stromtarife-definieren/20.png)

ZEV ohne Bilanzzähler tarifieren

- Produktionsmessung (als Produktion und Bilanz)

- Alle Verbraucher (100%) 


![Stromtarife definieren – Abbildung 21](/img/konfiguration-billing-stromtarife-definieren/21.png)

Legende 

Der farbige Punkt kennzeichnet auf welche Art der jeweilige Zähler im Tarif hinterlegt werden muss

![Stromtarife definieren – Abbildung 22](/img/konfiguration-billing-stromtarife-definieren/22.png)

Eine erweiterte vZEV tarifieren mit verschiedenen Kombinationen von Messkonzepten

![Stromtarife definieren – Abbildung 23](/img/konfiguration-billing-stromtarife-definieren/23.png)

Tarifieren von Reiheneinfamilienhäusern als vZEV

![Stromtarife definieren – Abbildung 24](/img/konfiguration-billing-stromtarife-definieren/24.png)

### Solar und Batterietarif konfigurieren

Die Solartarife und Batterietarife der Legacy Reihe ermöglichen die Umsetzung einer ZEV mit oder ohne Bilanzzähler.

Die Nutzung dieser Tarifierungsgruppe ermöglicht folgendes:

- ZEV mit oder ohne Bilanzzähler

- Unterschiedliche Tarifierung für Batterie und Solarstrom


Voraussetzung für die Nutzung:

- Anwendung eines 100% Messkonzepts, alle gemessenen Verbraucher müssen 100% der Last entsprechen.

- Benötigt einen virtuellen Summenzähler aller Lasten.


Solar- oder Batteriezähler
Beim Solar- und Batterietarif musst du den Zähler angeben, der die Batterie bzw. die Solaranlage misst. 

Gesamtverbrauch
Beim Solar- und Batterietarif musst du einen Zähler angeben, der alle Verbraucher, auf welche diese Energie verteilt werden soll, misst. Dies ist meistens ein virtueller Zähler, welcher alle Verbraucher summiert (Achtung, virtuelle Zähler benötigen dann eine zusätzliche Lizenz).

Bilanzzähler
Bei Solartarif und Batterietarif kann optional ein Bilanzzähler angegeben werden. Ist der Bilanzzähler aufgeführt, wird bei der Berechnung des Solartarifs die Energie, die ins Netz eingespeist wird, berücksichtigt. Das heisst, pro 15 Minuten wird nur die Solarenergie verteilt, die auch effektiv im Gebäude verbraucht wurde (Energie verfügbar = PV Produktion - Einspeisung Netz).

Achtung:
Bei Verzicht auf den physischen Bilanzzähler sind Abweichungen bei Zuteilung der Tarife im Rahmen von 10-15% nicht unüblich.

Virtuelle Summenzähler

- Der Virtuelle Summenzähler (Gesamtverbrauch) ist notwendig für die Bildung der Referenz für die Tarifzuteilung. Dieser wird aus allen Lastzählern gebildet und ist Kostenplfichtig (1x Professionallizenz)

    Die Summe der Zähler muss genau 100% der Last betragen. Wenn Sie Zähler in Reihe geschaltet haben, ist nur der Zähler in der näher zur Unterverteilung / Hausanschlusses relevant.
    Solarzähler, Batteriezähler und Hausanschlusszähler sind zu exkludieren.

- Sind mehrere Solaranlagen im System und können nicht miteinander gemessen werden ist eine weitere Lizenz für die Gesamtproduktion notwendig.

    Mehr Informationen: [Virtuelle Zähler](/konfiguration/billing/virtuelle-zaehler)


![Stromtarife definieren – Abbildung 25](/img/konfiguration-billing-stromtarife-definieren/17.png)

ZEV tarifieren mit legacy Tarifen (1 Haus)

![Stromtarife definieren – Abbildung 26](/img/konfiguration-billing-stromtarife-definieren/26.png)

![Stromtarife definieren – Abbildung 27](/img/konfiguration-billing-stromtarife-definieren/27.png)

ZEV tarifieren mit legacy Tarifen (mehrere Häuser )

![Stromtarife definieren – Abbildung 28](/img/konfiguration-billing-stromtarife-definieren/28.png)

![Stromtarife definieren – Abbildung 29](/img/konfiguration-billing-stromtarife-definieren/29.png)

## Spitzenstromtarife

Mit den Spitzenstromtarifen können erweiterte oder neuartige Strommodelle von Energieversorgern abgedeckt werden. 

- Doppeltarif für den Basis Verbrauch + Spitzenleistung
    (Virtuelle Tarife in Kombination mit dem Peak Tarif)

- Einheitstarif für den Basis Verbrauch + Spitzenleistung
    (Virtuelle Tarife in Kombination mit dem Peak Tarif)

- Nur Spitzentarif ohne Basistarife


Gültigkeitsdauer:
Die Gültigkeitsdauer eines Spitzenstromtarifs ist auf 1 Jahr begrenzt, dieser kann mehrfach für mehrere Jahre erstellt werden.

Spitzentarife basieren entweder auf den Monatlich angefallenen Kosten (Rechnung Energieversorger) oder sind abhängig vom hinterlegten Tarif und der aktiven Messung des Hauptmesspunktes.

![Stromtarife definieren – Abbildung 30](/img/konfiguration-billing-stromtarife-definieren/30.png)

Beispiel eines erfassten Stromtarifes mit Kostenbasis (Kosteneintragung)

Generelle Funktionsweise:

Die erfassten Spitzentarifskosten oder die automatisch berechneten Kosten aufgrund der Messung und des hinterlegten Tarifs, werden bei der Rechnungserstellung im gewählten Berechnungsintervall auf die Verbraucher aufgeteilt. 

Als Basis dient die jeweilige verursachte Stromspitze (nur Netzbezug) jedes individuellen Verbrauchers in der Abrechnungsperiode und dem jeweils gewählten Berechnungsintervalls.

![Stromtarife definieren – Abbildung 31](/img/konfiguration-billing-stromtarife-definieren/31.png)

### Spitzentarife ohne aktive Hauptmessung (Manuelle Kosteneintragung)

Eignet sich für alle Systeme die keine Referenzmessung besitzen. 

![Stromtarife definieren – Abbildung 32](/img/konfiguration-billing-stromtarife-definieren/32.png)

![Stromtarife definieren – Abbildung 33](/img/konfiguration-billing-stromtarife-definieren/33.png)

### Spitzentarife mit aktiver Hauptmessung (Automatische Kostenberechnung)

Eignet sich für alle Systeme die eine direkte Bilanzmessung besitzen.

![Stromtarife definieren – Abbildung 34](/img/konfiguration-billing-stromtarife-definieren/34.png)

## FAQ

Aufbau: Einheitstarif ohne Solar

- In diesem Fall empfehlen wir, keine virtuellen Tarife zu verwenden. Elektrizitätstarife (Alle) sind in diesem Fall effizienter. Es ist jederzeit möglich, von Elektrizitätstarife auf virtuelle Tarife zu wechseln.


Logik: Die Zählerstände werden abgefragt und für das Billing verwendet. Es ist keine Berechnung nötig.

Aufbau: Einheitstarif mit Solar

- Solarstrom Einheitstarif: Solartarif definieren ohne Wenn Aktion

- Netzstrom Einheitstarif: Normaler Tarif definieren ohne Wenn Aktion


Logik: Zuerst wird der verfügbare Solarstrom verteilt. Wenn zu wenig oder keiner verfügbar ist, wird der normale Tarif verwendet.

Aufbau: Hoch- und Niedertarif für Netzstrom und Einheitstarif bei Solarstrom

- Solarstrom Einheitstarif: Solartarif definieren ohne Wenn Aktion

- Netzstrom Hochtarif: Normaler Tarif definieren mit Wenn Aktion

    - Beispiel. Mo bis Fr 7h00 bis 22h00 oder Sa 7h00 bis 13h00 

- Netzstrom Niedertarif: Normaler Tarif definieren ohne Wenn Aktion


Logik: Zuerst wird der verfügbare Solarstrom verteilt. Wenn zu wenig oder keiner verfügbar ist, wird der normale Tarif verwendet, der eine Bedingung erfüllt. Zum Schluss wird der Tarif ohne Bedingung für den restlichen Strom versendet.

Aufbau: Hoch- und Niedertarif für Netz- und Solarstrom

- Solarstrom Hochtarif: Solartarif definieren mit Wenn Aktion

    - Beispiel: Mo bis Fr 7h00 bis 22h00 oder Sa 7h00 bis 13h00 

- Solarstrom Niedertarif: Solartarif definieren mit Wenn Aktion

    - Beispiel: Mo bis Fr 22h00 bis 7h00 oder Sa 13h00 bis 7h00 oder So 0h00 bis 0h00

- Netzstrom Hochtarif: Normaler Tarif definieren mit Wenn Aktion

    - Dieselbe Wenn Aktion wie für den Solarstrom Hochtarif verwenden 

- Netzstrom Niedertarif: Normaler Tarif definieren mit Wenn Aktion

    - Dieselbe Wenn Aktion wie für den Solarstrom Niedertarif verwenden 


Logik: Zuerst wird der verfügbare Solarstrom mit der gültigen Bedingung verwendet. Wenn zu wenig oder keiner verfügbar ist, wird der Normale Tarif mit der gültigen Bedingung verwendet. Es ist wichtig, dass in diesem Anwendungsfall 24h/Tag mit einer Wenn Bedingung abgedeckt ist.

Aufbau: Sommer und Winter mit Hoch- und Niedertarif für Netzstrom und Einheitstarif bei Solarstrom

- Solarstrom Hochtarif: Solartarif definieren ohne Wenn Aktion

- Netzstrom Hochtarif Sommer: Normaler Tarif definieren mit Wenn Aktion

    - Beispiel: Zeitspanne Jeden Tag: Mo bis So 7h00 bis 22h00 und Zeitspanne Jedes Jahr von 1 / 04 / 00:00 bis 1 / 10 / 00:00.

- Netzstrom Niedertarif Sommer: Normaler Tarif definieren mit Wenn Aktion

    - Beispiel: Zeitspanne Jeden Tag: Mo bis So 22h00 bis 07h00 und Zeitspanne Jedes Jahr von 1 / 04 / 00:00 bis 1 / 10 / 00:00.

- Netzstrom Hochtarif Winter: Normaler Tarif definieren mit Wenn Aktion

    - Beispiel: Zeitspanne Jeden Tag: Mo bis So 7h00 bis 22h00 und Zeitspanne Jedes Jahr von 1 / 10 / 00:00 bis 1 / 4 / 00:00.

- Netzstrom Niedertarif Winter: Normaler Tarif definieren mit Wenn Aktion

    - Beispiel: Zeitspanne Jeden Tag: Mo bis So 22h00 bis 07h00 und Zeitspanne Jedes Jahr von 1 / 10 / 00:00 bis 1 / 4 / 00:00.


Logik: Zuerst wird der verfügbare Solarstrom verwendet. Wenn zu wenig oder keiner verfügbar ist, wird der Normale Tarif mit der gültigen Bedingung verwendet. Es ist wichtig, dass in diesem Anwendungsfall 24h/Tag mit einer Wenn Bedingung abgedeckt ist.

Aufbau: Sommer und Winter mit Hoch- und Niedertarif für Netzstrom und Einheitstarif bei Solarstrom und Niedertarif über den Mittag nur im Winter (z.B. EWS/EBS)

Beispiel

- Netz- und Solarstrom Niedertarif Winter 

    - Beispiel: Winter NT 22h00 bis 07h00 zwischen 1.10 bis 1.4.

    - Wenn Dann Aktion mit UND Verknüpfung

        - Zeitspanne Jeden Tag: Mo bis So 22h00 bis 07h00 

        - Zeitspanne Jedes Jahr von 1 / 10 / 00:00 bis 1 / 04 / 00:00.

- Netz- und Solarstrom Hochtarif Winter 

    - Beispiel: Winter HT 07h00 bis 22h00 zwischen 1.10 bis 1.4.

    - Wenn Dann Aktion mit UND Verknüpfung

        - Zeitspanne Jeden Tag: Mo bis So 7h00 bis 22h00 

        - Zeitspanne Jedes Jahr von 1 / 10 / 00:00 bis 1 / 04 / 00:00.

- Netz- und Solarstrom Niedertarif Sommer

    - Beispiel: Sommer NT 00h00 bis 06h00 und 12h00 bis 15h00 zwischen 1.4 bis 1.10

    - Wenn Dann Aktion mit UND Verknüpfung

        - Zeitspanne Jeden Tag: Mo bis So 12h00 bis 06h00 

        - Zeitspanne Jeden Tag: Mo bis So 00h00 bis 15h00 

        - Zeitspanne Jedes Jahr von 1 / 4 / 00:00 bis 1 / 10 / 00:00.

- Netz- und Solarstrom Hochtarif Sommer 

    - Beispiel: Sommer HT 06h00 bis 12h00 und 15h00 bis 00h00 zwischen 1.4 bis 1.10

    - Wenn Dann Aktion mit UND Verknüpfung

        - Zeitspanne Jeden Tag: Mo bis So 06h00 bis 00h00 

        - Zeitspanne Jeden Tag: Mo bis So 15h00 bis 12h00 

        - Zeitspanne Jedes Jahr von 1 / 4 / 00:00 bis 1 / 10 / 00:00.


Logik: Zuerst wird der verfügbare Solarstrom verwendet. Wenn zu wenig oder keiner verfügbar ist, wird der Normale Tarif mit der gültigen Bedingung verwendet. Es ist wichtig, dass in diesem Anwendungsfall 24h/Tag mit einer Wenn Bedingung abgedeckt ist.

Aufbau: Sommer und Winter mit Hoch- und Niedertarif für Netzstrom und Solarstrom, Tagsüber Niedertarif im Sommer und Hochtarif im Winter(z.B. Energie Uri ab 1.10.2025)

Beschreibung: Hier muss in zwei Schritten gearbeitet werden. 1x Wenn Dann und 1x mit den Zeiten in den Virtuellen Tarifen

Ersten müssen die Wenn Aktionen definiert werden.

- Netz- und Solarstrom Sommer NT

    - Beispiel: Sommer NT Mo bis Fr 06h00 bis 22h00 Mo bis FR und Sa und So immer

    - Name: Uri Sommer NT

    - Wenn Dann Aktion mit ODER Verknüpfung

        - Zeitspanne Mo bis Fr: 6h00 bis 22h00 

        - Zeitspanne Sa und So: 00h00 bis 00h00




- Netz- und Solarstrom Sommer HT

    - Beispiel: Sommer HT Mo bis Fr 22h00 bis 06h00

    - Name: Uri Sommer HT

    - Wenn Dann Aktion

        - Zeitspanne Mo bis Fr: 22h00 bis 06h00 




- Netz- und Solarstrom Winter NT

    - Beispiel: Winter NT Mo bis Fr 22h00 bis 06h00 Mo bis FR und Sa und So immer

    - Name: Uri Winter NT

    - Wenn Dann Aktion mit ODER Verknüpfung

        - Zeitspanne Mo bis Fr: 22h00 bis 06h00 

        - Zeitspanne Sa und So: 00h00 bis 00h00




- Netz- und Solarstrom Winter HT

    - Beispiel: Winter HT Mo bis Fr 06h00 bis 22h00

    - Name: Uri Winter HT

    - Wenn Dann Aktion mit ODER Verknüpfung

        - Zeitspanne Mo bis Fr: 06h00 bis 22h00 


Dann müssen die Preise pro Zeitperiode definiert werden.

Die Perioden bzw. Dauer müssen in diesem Fall hinterlegt werden. Bei diesen Tarifmodell ist eine Kombination aus Wenn Dann und Periode notwendig.

- Name: Uri Sommer HT Netz

    - Type: Netztarif

    - Dauer: 1.4.2026 bis 30.9.2026

    - Zusätzliche Bedingung: Uri Sommer HT

- Name: Uri Sommer HT Solar


- Type: Solartarif inkl. vZEV 

- Dauer: 1.4.2026 bis 30.9.2026

- Zusätzliche Bedingung: Uri Sommer HT


- Name: Uri Sommer NT Netz

    - Type: Netztarif

    - Dauer: 1.4.2026 bis 30.9.2026

    - Zusätzliche Bedingung: Uri Sommer NT

- Name: Uri Sommer NT Solar

    - Type: Solartarif inkl. vZEV (Bilanz/Produktionen)

    - Dauer: 1.4.2026 bis 30.9.2026

    - Zusätzliche Bedingung: Uri Sommer NT

- Name: Uri Winter HT Netz

    - Type: Netztarif

    - Dauer: 1.10.2025 bis 31.3.2026

    - Zusätzliche Bedingung: Uri Winter HT 

- Name: Uri Winter HT Solar

    - Type: Solartarif inkl. vZEV (Bilanz/Produktionen)

    - Dauer: 1.10.2025 bis 31.3.2026

    - Zusätzliche Bedingung: Uri Winter HT

- Name: Uri Winter NT Netz

    - Type: Netztarif

    - Dauer: 1.10.2025 bis 31.3.2026

    - Zusätzliche Bedingung: Uri Winter NT

- Name: Uri Winter NT Solar

    - Type: Solartarif inkl. vZEV (Bilanz/Produktionen)

    - Dauer: 1.10.2025 bis 31.3.2026

    - Zusätzliche Bedingung: Uri Winter NT 


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, Wiki Tarife Enerige Uri Tarife 2026.mp4" />

Wiki Tarife Enerige Uri Tarife 2026.mp4

## Reine Netztarifsysteme (Externe Signallösung)

Elektrizitätstarife (Nur unterstützt, wenn VEWA Funktion nicht verwendet wird)

Um zu den Einstellungen der Elektrizitätstarife zu kommen, klicke links auf die Liegenschaft und scrolle zu dem grünen Fenster Tarife Elektrizität. Hier werden die zwei Tarife T1 und T2 angezeigt. Wähle einen der Tarife aus und klicke auf Editieren, um Änderungen an dessen Eigenschaften vorzunehmen (z. B. Name, Preis etc.)

Um mit den Elektrizitätstarifen arbeiten zu können, muss das Tarifsignal des Elektrizitätswerks an den Tarifeingang der entsprechenden Zähler angeschlossen werden.

![Stromtarife definieren – Abbildung 35](/img/konfiguration-billing-stromtarife-definieren/35.png)
