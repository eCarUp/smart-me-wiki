---
title: 'Zähler Ein- und Ausgänge'
slug: '/schnittstellen/ein_und_ausgaenge'
description: 'Ein- und Ausgänge konfigurieren'
sidebar_label: 'Ein- und Ausgänge'
---
## Ein- und Ausgänge konfigurieren

Die smart-me Meter verfügen über einen oder mehrere Ausgänge, welche als Impulsausgang oder als potentialfreier Kontakt genutzt werden können.  Ab Werk ist der S0\_0 Ausgang als Impulsausgang definiert und der S1 als digitaler Relais-Ausgang mit dem Namen "Relais".

![Zähler Ein- und Ausgänge – Abbildung 1](/img/schnittstellen-ein_und_ausgaenge/01.png)

### Externe beschaltung der Ein- und Ausgänge

E1 mit Tarifsingal oder Lastabwurf ansteuern

![Zähler Ein- und Ausgänge – Abbildung 2](/img/schnittstellen-ein_und_ausgaenge/02.png)

Schaltung mit Telstar Ein- und Ausschalten (S1 und S0) sind identisch zu beschalten

![Zähler Ein- und Ausgänge – Abbildung 3](/img/schnittstellen-ein_und_ausgaenge/03.png)

### Impuls Ausgang

Es ist möglich, den Ausgang als Impuls Ausgang zu konfigurieren. Es kann zwischen Blind- und Wirkenergie unterschieden werden.

Hinweis: Es ist nicht möglich, zwischen Bezug und Lieferung zu unterscheiden. Es wird immer der absolute Wert ausgegeben.

### Konfiguration als potentialfreier Kontakt

Wird der Ausgang als potentialfreier Kontakt definiert, können beliebige Geräte über die smart-me Cloud gesteuert werden. Die Steuerung kann manuell (ein/aus) oder automatisiert über [Ereignis Aktionen](/konfiguration/wenndann-aktionen/ereignisaktionen) oder [Wenn/Dann Aktionen](/konfiguration/wenndann-aktionen) erfolgen.

1.  Logge dich auf der [smart-me Webseite](https://web.smart-me.com/login/) oder der smart-me App ein

2.  Wähle einen Zähler aus und klicke auf "Editieren".

3.  Unter dem Punkt "Ausgänge" wählst du den gewünschten Ausgang und konfigurierst den Ausgang als "Digitaler Ausgang"

    - Du kannst dem Ausgang einen beliebigen Namen geben.

    - Du kannst eine Aktion definieren, die ausgeführt werden soll, wenn der Zähler die Verbindung zur smart-me Cloud verliert.


HINWEIS:
Der S1 kann mittels umstellen auf Impulsausgang auch aus der Ansicht ausgeblendet werden, wenn er nicht als Digitaler Ausgang verwendet wird.
In der Mieteransicht können diese nicht aktiviert oder deaktiviert werden, auch wenn sie dort sichtbar sind.

![Zähler Ein- und Ausgänge – Abbildung 4](/img/schnittstellen-ein_und_ausgaenge/04.png)

### Onlineansicht bei Inbetriebnahme eines Telstar 80A oder CT

![Zähler Ein- und Ausgänge – Abbildung 5](/img/schnittstellen-ein_und_ausgaenge/05.png)

### Onlineansicht nach Aktivierung des S0\_0 als digitaler Ausgang

![Zähler Ein- und Ausgänge – Abbildung 6](/img/schnittstellen-ein_und_ausgaenge/06.png)

### Verdrahtung der Ausgänge

Beachte die maximalen Spannungs-, Strom- und Leistungswerte der jeweiligen Ausgänge. Vereinfacht kann jeder der potentialfreien Ausgänge als ein nicht angeschlossener Schalter betrachtet werden. Damit eine Funktion gegeben ist, muss ein Kreislauf ermöglicht werden von hohem zu niedrigem Potential.

Die Ausgänge bieten selbst keine Spannungspegel, eine Spannungsquelle muss daher vorgeschaltet werden.

Bei 230V Wechselstrom Schaltungen:

- 230 VAC auf den "+" Kontakt von S1

- "-" Kontakt von S1 auf den externen Schaltungseingang "+" verdrahten.

- Abschliessend vom "-" der externen Schaltung auf den Nullleiter anschliessen. (Es muss keine Ohmsche Last angeschlossen werden)


Bei Gleichstromschaltungen:

- von + VDC auf den "+" Kontakt von S1

- "-" Kontakt von S1 auf den externen Schaltungseingang "+" verdrahten.

- Abschliessend vom "-" der externen Schaltung auf GND anschliessen.


![Zähler Ein- und Ausgänge – Abbildung 7](/img/schnittstellen-ein_und_ausgaenge/07.png)

\*Abhängig vom Gerätetyp

![Zähler Ein- und Ausgänge – Abbildung 8](/img/schnittstellen-ein_und_ausgaenge/08.png)

## Eingang konfigurieren

Die smart-me Meter verfügen über einen digitalen Eingang der als Tarifeingang oder normaler digitaler Eingang genutzt werden kann. Ab Werk ist dieser Eingang als Tarifeingang definiert. Wird der Eingang als Digitaler Eingang konfiguriert, kann dieser als Ereignis genutzt werden, um andere Geräte zu steuern oder Alarme auszulösen.  Ist der Eingang als Tarifeingang definiert wird die Zählung beim Anlegen einer Spannung von Tarif 1 auf Tarif 2 umgeschaltet.

### Konfiguration als digitaler Eingang

Um einen Eingang als digitalen Eingang zu konfigurieren, gehe wie folgt vor:

1.  Logge dich auf der [smart-me Webseite](https://web.smart-me.com/login/) oder der smart-me App ein.

2.  Wähle einen Zähler aus und klicke auf "Editieren".

3.  Unter dem Punkt "Eingänge und Ausgänge" konfigurierst du den Eingang als "Digitaler Eingang"

    - Du kannst dem Eingang einen beliebigen Namen geben.

    - Du kannst einen Text definieren, der angezeigt werden soll wenn der Eingang "Ein" bzw. "Aus" ist.

4.  Du siehts nun den digitalen Eingang und dessen Status in der smart-me App und auf dem smart-me Webportal.


### Digitalen Eingang für Steuerungen nutzen

Du kannst den digitalen Eingang zum Schalten von anderen Geräten oder Senden von Alarmen nutzen. Dazu kann unter den [Wenn / Dann Aktionen](/konfiguration/wenndann-aktionen/ereignisaktionen) das Wenn-Ereignis "Schaltzustand" definiert werden.

### Anschluss verdrahten

Um den potentialfreien Kontakt zu schalten, muss eine externe Spannung und potential (z.B. Neutralleiter) angelegt werden. Die jeweiligen Spannungswerte können den Technischen Daten der einzelnen Produkte entnommen werden. 

Logik:
1 (High) = Spannung aus Datenblatt
0 (Low) = 0 Volt

Hinweis: Bei Gleichspannung muss auf die Polarisierung (E1+/E1-) geachtet werden, während diese bei Wechselspannung keine Rolle spielt.
