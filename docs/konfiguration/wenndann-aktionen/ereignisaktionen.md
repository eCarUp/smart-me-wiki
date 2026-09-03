---
title: 'Ereignisaktionen'
slug: '/konfiguration/wenndann-aktionen/ereignisaktionen'
description: 'Automatische Steuerungen können für jedes Gerät in der smart-me Plattform erstellt werden.'
sidebar_label: 'Ereignisaktionen'
---
Automatische Steuerungen können für jedes Gerät in der smart-me Plattform erstellt werden. Es gibt zwei Möglichkeiten, solche Aktionen zu definieren. Entweder werden Ereignisaktionen oder [Wenn/Dann Aktionen](/konfiguration/wenndann-aktionen) erstellt. In diesem Artikel werden Ereignisaktionen erklärt.

## Ereignisaktionen, nur für 1-Phasenzähler und 3-Phasenzähler Telstar

Ereignisaktionen werden auf dem  Gerät selbst gespeichert, daher funktionieren sie auch ohne Internetverbindung, z. B. wenn der WLAN Router ausgeschaltet ist. Es müssen hierfür aber Aktionen definiert werden, die keine Internetverbindung benötigen. Das Versenden einer E-Mail funktioniert ohne Internet natürlich nicht.  Es können bis zu 16 Ereignisaktionen auf den Geräten gespeichert werden und können in der App oder im Webportal erstellt und bearbeitet werden.

Mögliche Auslöser:

- -   Leistung grösser / kleiner als xx

    - Uhrzeit

    - Strom kleiner/grösser (an einer Phase) (nur beim [3-Phasen Zähler Telstar](/))

    - Digitaler Input (On/ Off) (nur beim [3-Phasen Zähler Telstar](/))




Mögliche Aktionen:

- -   [Alarm E-Mail](/konfiguration/wenndann-aktionen/alarme)

    - Strom ein- /ausschalten (nur beim [3-Phasen Zähler Telstar](/))

    - Strom umschalten ein/aus (wird nicht mehr unterstützt)

    - Strom auf anderem Gerät ein-/ausschalten (wird nicht mehr unterstützt)

    - Strom umschalten ein/aus auf anderem Gerät (wird nicht mehr unterstützt)


## Ereignisaktion erstellen

Ereignis-Aktionen können in der App oder im Webportal  erstellt werden.

### App

- Melde dich auf deinem smart-me Benutzeraccount an

- Wähle einen Zähler

- Klicke nun auf das Zahnrad am oberen rechten Rand

- Klicke auf "Ereignisaktionen" - "Ereignisaktion hinzufügen"


### Webseite

- Melde dich im [Weblogin](https://web.smart-me.com/login/) an

- Klicke auf den gewünschten Zähler

- Klicke rechts auf die Zahnräder

- Klicke auf Ereignisaktion hinzufügen


### Ereignisaktion definieren

Nun können Ereignisaktionen definiert werden (bis zu 16). Dafür müssen drei Einstellungen gemacht werden:

- Ereignis -> Sobald dies eintritt, wird die Aktion ausgelöst

- Aktion -> Definiert was gemacht werden soll, wenn das Ereignis eintritt

- Name -> Der Name der Ereignis-Aktion


## Ereignisse

Das hier definierte Ereignis löst eine Aktion aus. Folgende Ereignisse sind verfügbar:

### Leistung kleiner / grösser als

Beispiel: Ereignis -> Wenn Leistung kleiner als 10 Watt ist, ausschalten

Bemerkungen:

- Die Aktion (in diesem Beispiel "Strom ausschalten") wird nur ausgeführt, wenn das entsprechende Ereignis stattgefunden hat, d.h. ein Leistungswechsel von grösser 10 Watt auf kleiner 10 Watt

- Wird der Strom manuell wieder eingeschaltet, bleibt er eingeschaltet, bis das Ereignis erneut eintritt.

- Bei schwankenden Leistungen wäre es möglich, dass diese Bedingung mehrmals nacheinander auftritt. Das kann zu unerwünschten Effekten führen, deshalb wird mit einer sogenannten Hysterese gearbeitet. Dies bedeutet, dass sich der Schwellenwert (in diesem Beispiel 10 Watt) bei der zweiten Aktivierung um 3 Watt erhöht wird.


### Uhrzeit

Es kann ein Zeitpunkt definiert werden, ab wann die Aktion ausgeführt werden soll. Falls gewisse Wochentage von dieser Regel ausgeschlossen werden sollen, müssen diese markiert werden (rot)

Beispiel: Ereignis -> Immer um 9 Uhr morgens wird der Strom ausgeschalten, jedoch nicht am Wochenende.

Bemerkungen:

- Die Aktion (in diesem Beispiel "Strom ausschalten") wird nur ausgeführt, wenn das entsprechende Ereignis stattgefunden hat, d.h. ein Wechsel der Uhrzeit von 08:59 Uhr auf 09:00 Uhr.

- Wird der Strom manuell wieder eingeschaltet, bleibt er eingeschaltet bis das Ereignis erneut eintritt.


## Aktionen

Es stehen verschiedenste Aktionen zur Auswahl. Diese können selbstverständlich mit jedem der erwähnten Ereignisse kombiniert werden.

### Strom einschalten / Strom ausschalten

Das smart-me Gerät schaltet sich selbst ein beziehungsweise aus. 

Beispiel: Immer um 9 Uhr morgens wird der Strom ausgeschalten, jedoch nicht am Wochenende.

### Strom umschalten (ein/aus)

Das smart-me Gerät kann sich selbst ein- bzw. ausschalten. Je nachdem in welchem Zustand sich das Gerät gerade befindet, schaltet das smart-me Gerät von ein auf aus oder von aus auf ein. (Gilt nur für den 32A Meter)

### Alarm E-Mail

Das smart-me Gerät kann dich mittels einer E-Mail informieren, sobald das Ereignis eingetreten ist. Dies funktioniert nur, wenn das smart-me Gerät eine Internetverbindung hat.

Beispiel: Sobald die bezogene Leistung kleiner ist als 10 Watt, wird eine E-Mail versendet.

### Strom einschalten auf anderem Gerät / Strom ausschalten auf anderem Gerät

Das smart-me Gerät kann sich nicht nur selbst ein- bzw. ausschalten, sondern es kann auch andere smart-me Geräte steuern (funktioniert nur, wenn beide smart-me Geräte eine WLAN-/Internetverbindung haben). Beachte ebenfalls, dass nur der 32A Meter schalten kann)

### Strom umschalten (ein/aus) auf anderem Gerät

Das smart-me Gerät kann sich nicht nur selber ein- bzw. ausschalten, sondern es kann auch andere smart-me Geräte steuern (funktioniert nur wenn beide smart-me Geräte eine WLAN-/Internetverbindung haben). Beachte ebenfalls, dass nur der der 32A Meter schalten kann)
