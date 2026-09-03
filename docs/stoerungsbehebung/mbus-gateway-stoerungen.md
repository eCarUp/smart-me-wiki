---
title: 'M-Bus Gateway Störungen'
slug: '/stoerungsbehebung/mbus-gateway-stoerungen'
description: 'Auf dieser Seite werden die häufigsten Fehler rund um das M-Bus Gateway behandelt'
sidebar_label: 'M-Bus Gateway Störungen'
---
Auf dieser Seite werden die häufigsten Fehler rund um das M-Bus Gateway behandelt

## Gateway findet nicht alle Zähler

Viele M-Bus Zähler beziehen Ihren Strom vom Gateway. Unser Gateway unterstützt 50 Standard Lasten. 

- Starte noch 1-2x ein Suchdurchlauf. Es kann sein, dass der Zähler sich nicht immer beim ersten suchdurchlauf meldet.

- Überprüfe ob die Summe der Lasten 50 nicht überschreitet.

- Zu lange Leitungen, bzw. zu dünne Zähler führen zu Verlusten auf den Leitungen.

- Nicht jeder M-Bus Zähler ist kompatibel mit unserem Gateway. Die Liste an kompatiblen Zählern findest du auf der [M-Bus Gateway Produktseite](/produkte/m-bus-gateway)


## Gateway findet mehr Zähler als verbaut wurden (Bei der Inbetriebnahme)

Grund: Nummerierung bei Kombizähler

Das M-Bus-Gateway erkennt jeweils nur einen Zähler anhand der Sekundäradresse, die in der Regel auch auf dem Abnahmeprotokoll aufgeführt ist.

Die Kombizähler werden dann auf dem Portal separat angezeigt. Für diese Anwendung verwendet smart-me eine eigene Nummerierungslogik.

Alle nicht abrechnungsrelevanten Zähler können [deaktiviert](/konfiguration/inbetriebnahme/zaehler-loeschen) werden, um Lizenzkosten zu sparen. Das Löschen ist nicht zielführend, da der Zähler immer wieder erscheint.

Enthält ein Zähler mehr als 1 Zähler, werden diese jeweils wie folgt nummeriert:

- Hauptzähler = Sekundäradresse von der Liste des M-Bus Gateways (z.B. 71440145)

- Weitere Zähler = Nebenadresse des Hauptzählers, die erste Zahl wird gelöscht (z.B. 7) und am Ende wird eine Zahl hochgezählt (z.B. 14401451,14401452).


- Subzähler = Diese enthalten die letzten vier Ziffern des Hauptzählers (z.B. 0145) und eine vierstellige Aufzählungsnummer am Ende (z.B. 01450001)


![M-Bus Gateway Störungen – Abbildung 1](/img/stoerungsbehebung-mbus-gateway-stoerungen/01.png)

![M-Bus Gateway Störungen – Abbildung 2](/img/stoerungsbehebung-mbus-gateway-stoerungen/02.png)

## Gateway findet mehr Zähler als verbaut wurden (während dem Betrieb)

Eine instabile Verbindung kann zu fehlerhafter Übertragung der Seriennummer führen. 

- -   Lösung 1: Diese Zähler können deaktiviert werden, so wird verhindert, dass dieser eine Lizenz bezieht.

    - Lösung 2: Erkennung von neuen Geräte unterbinden


Wir wird das erkennen von neuen Geräten unterbunden

- M-Bus Gateway auswählen.


- Wähle das M-Bus Gateway Zahnrad (oben rechts). Hinweis: Wähle nicht das obere Zahnrad, das für die Konfiguration der Zähler verwendet wird, sondern das untere.

- Bearbeiten

- Häkchen bei "Don't allow to add additional meters" setzen.

- Speichern


Was bewirkt diese Option?

- Durch das Aktivieren der Option "Don't allow to add additional meters" wird verhindert, dass Geräte, die noch nicht in der Cloud vorhanden sind, gespeichert werden. 


Was ist zu beachten?

- Wenn neue Geräte hinzugefügt werden, muss diese Option vor der Suche wieder deaktiviert werden.


Wann wird diese Option empfohlen?

- Wenn immer wieder M-Bus Geräte im Portal auftauchen, die gar nicht existieren.

- Aus präventiven Gründen :-)


In welchen Fällen kann das passieren?

- Bei Fehlern in der Datenübertragung. Dies kommt häufiger vor, wenn das M-Bus Kabel zu lang ist und dadurch die Qualität der Datenübertragung sinkt, oder wenn das Kabel zu schlecht abgeschirmt oder externen Störungen ausgesetzt ist.


Technische Erklärung

- Das standardisierte M-Bus Protokoll hat nur 1 byte für die Prüfsumme. Die Prüfsumme ist dazu gedacht, bestimmte Fehler in der Datenübermittlung zu erkennen. Leider ist 1 byte wenig und kann immer wieder dazu führen, dass ein fehlerhaftes Datenpaket als korrekt und gut angesehen wird. Dies führt bei einigen Installationen, bei denen M-Bus Gateways eingesetzt werden, immer wieder dazu, dass korrupte Pakete als korrekt und gut eingestuft werden und diese dann als neues M-Bus Gerät in unserer Cloud erkannt und hinzugefügt werden. Das Konto fällt dann von Professional auf Basic, da die Lizenzabdeckung nicht mehr gewährleistet ist.


![M-Bus Gateway Störungen – Abbildung 3](/img/stoerungsbehebung-mbus-gateway-stoerungen/03.png)

## M-Bus Zähler ist offline

- Zähler fallen unregelmässig aus, es sind nicht immer die gleichen Zähler.

    - Die Zähler benötigen etwa 10 Sekunden zum antworten. Ist der Ausleseintervall zu klein eingestellt, haben diese keine Möglichkeit dazu. 

        - Lösung: Auf dem M-Bus Gateway kann der Ausleseintervall erhöht werden. Empfohlen sind 10 Sekunden pro Gerät.




- Zähler verlieren immer um die selbe Tageszeit (Stunde und Minute) die Verbindung. 

    - In diesem Fall kann ein sein, dass Zähler batteriegestützt sind und zur Schonung der Batterie, nur eine bestimmte Anzahl Auslesungen pro Tag erlauben. 

        - Lösung: Hier kann der Ausleseintervall auf 6 oder 12 Stunden erhöht werden.




- Zähler fallen unregelmässig aus, es sind mehrheitlich die gleichen Zähler.

    - Externe Störungen auf den Leitungen, vor allem bei längeren Leitungen, können zur fehlerhaften Übertragungen führen.

        - Lösung: Zählerverdrahtung kurz halten.


## Zählerwerte stimmen nicht mit physischem Zähler überein

- Überprüfe die Zählerkonfiguration.

- Prüfe die Verdrahtung zwischen Zähler und Gateway.

- Nicht jeder M-Bus Zähler ist kompatibel mit unserem Gateway. Die Liste an kompatiblen Zählern findest du auf der [M-Bus Gateway Produktseite](/produkte/m-bus-gateway)


## M-Bus Gateway austauschen

- Neues M-Bus Gateway verbauen und die Verdrahtung auf das neue Gateway legen.

- M-Bus in Betrieb nehmen.

- Auf dem Portal das Ausleseintervall setzten.

- Geräte suchen.

- Prüfen ob alle M-Bus Zähler aktuelle Werte geliefert haben.


Hinweis: Es muss in der smart-me Konfiguration und im Billing nichts an den bestehenden M-Bus Zähler geändert werden.
