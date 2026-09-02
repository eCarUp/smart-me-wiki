---
title: 'Modbus TCP'
slug: '/schnittstellen/modbus-tcp'
description: 'Mit Modbus TCP können die Messwerte eines Gerätes direkt über die Netzwerkverbindung abgefragt werden.'
sidebar_label: 'Modbus TCP'
---
Mit Modbus TCP können die Messwerte eines Gerätes direkt über die Netzwerkverbindung abgefragt werden. Dabei ist kein Umweg über die Cloud notwendig.

### Voraussetzungen

Um Modbus TCP zu aktivieren ist ein smart-me Professional Abo notwendig

## Unterstützte Geräte

Folgende smart-me Geräte unterstützen Modbus TCP

- [smart-me 3-Phasen Zähler Telstar](/produkte/telstar)

- [3-Phasen Zähler Telstar CT](/produkte/Telstar-CT)

- [Pico Ladestation](/produkte/pico-ladestation)


## Limitationen

Es ist nicht möglich, eine fixe IP-Adresse zu vergeben. Wenn dies gewünscht ist, muss diese Einstellung am Router vorgenommen werden. Die MAC-Adresse der einzelnen Geräte ist smart-me nicht bekannt. Diese kann mit Hilfe der untenstehenden Anleitung ermittelt werden.

Die Abfragen sollten nicht häufiger als alle 2 Sekunden erfolgen. Eine Erhöhung der Abfragefrequenz kann in bestimmten Konstellationen zu unbeantworteten Abfragen führen. Das Gerät kann bei einem Abfrageintervall von &lt; 2 Sekunden nicht beschädigt werden.

## Modbus TCP aktivieren

1.  Logge dich auf der smart-me Webseite ein.

2.  Wähle das gewünschte Gerät aus.

3.  Wähle oben rechts das Zahnrad.

4.  Unter erweiterten Einstellungen Modus-TCP aktivieren

5.  Speichern


![modbus-tcp](/img/schnittstellen-modbus-tcp/01.png)

## Spezifisches zu Pico und Modbus TCP

Modbus TCP kann bei der Pico genutzt werden wenn:

1.  Die Pico nicht in einer Lastmanagement-Gruppe ist

2.  Die Pico in einer Lastmanagement-Gruppe und der Master ist (automatisch bestimmt)


Für alle Slaves in einer Lastmanagement-Gruppe ist Modbus TCP deaktiviert, da diese dann keine eigene IP-Adresse besitzen.
Wir empfehlen die Nutzung von Modbus TCP nur für Einzelgeräteansteuerungen ohne MESH.
Falls die Picos in einer Lastmanagement-Gruppe ausgelesen oder gesteuert werden sollen, empfehlen wir die [Rest API](/schnittstellen/api). 

## Adresse des Gerätes herausfinden

Das Modbus-Register eines smart-me Gerätes kann über DNS oder IP-Adresse ausgelesen werden. 

- DNS kann im Portal aktiviert werden.

- Die IP-Adresse wird durch den lokalen DHCP-Server zugewiesen. Die IP-Adresse kann mit Hilfe der folgenden Anleitung ermittelt werden.


### DNS aktivieren

1.  Logge dich auf der smart-me Webseite ein.

2.  Wähle das gewünschte Gerät aus.

3.  Wähle oben rechts das Zahnrad.

4.  Unter erweiterten Einstellungen DNS aktivieren.

5.  Meisten wird wird die Interne IP benötigt. Details siehe unten.

6.  Speichern

7.  Der DNS Name wird im Text unter DNS aktivieren angezeigt.


![Modbus TCP – Abbildung 2](/img/schnittstellen-modbus-tcp/02.png)

Als IP-Adresse kann eine öffentliche IP-Adresse oder die interne IP-Adresse des Geräts gewählt werden:

Interne IP

Dies ist die lokale IP-Adresse des smart-me Geräts. Diese kann verwendet werden, wenn sie sich im selben Netzwerk befinden.

Öffentliche IP

Die öffentliche IP-Adresse wird verwendet. Dies ist normalerweise die IP-Adresse Ihres Routers.

Hintergrundinformationen

Mit dem dns-me Dienst ist es möglich, sich direkt mit einem smart-me Gerät zu verbinden, ohne dessen IP-Adresse zu kennen. Ist die DNS-Adresse für ein smart-me Gerät aktiviert, wird dessen lokale oder öffentliche IP-Adresse automatisch einem DNS-Namen zugeordnet (z.B. smart-me\_123456.dns-me.com).

smart-me nutzt dafür den Dienst dns-me.com.

### IP-Adresse mit DNS-Name ermitteln

Nachdem DNS aktiviert wurde, kann der DNS-Name, der in den erweiterten Einstellungen unter DNS-Aktivierung zu sehen ist, für einen Ping verwendet werden.

z.B. ping smart-me\_6301587.dns-me.com

Als Antwort erhältst du die Auswertung des Pings inklusive der IP-Adresse des Gerätes.

![Modbus TCP – Abbildung 3](/img/schnittstellen-modbus-tcp/03.png)

### IP-Adresse direkt am Router ermitteln

smart-me kennt die MAC-Adresse der einzelnen Geräte nicht. Die Ermittlung der IP-Adresse ohne vorherige Aktivierung des DNS-Dienstes ist daher komplizierter. Eine Möglichkeit ist, alle IP-Adressen mit Modbus TCP abzufragen und zu prüfen, welche Seriennummern als Antwort zurückgegeben geben.

## Datenübertragung

Modbus TCP Protokoll
TCP Port: 502

Funktionen
Das smart-me Meter unterstützt die folgenden Modbus-Funktionen:

- Read Holding Register (Code 03)


Registeradressierung
Aus historischen Gründen ist die Adresse im Modbus um 1 niedriger als die interne Registeradresse. Die Startadresse muss also "Registeradresse - 1" sein

### Beispiel Modbus

Beispiel mit: https://www.modbusdriver.com/modpoll.html

Change Pico Loadmanagement

modpoll.exe -r 0x206E -t 4:int -i -1 -m tcp -p 502 192.168.178.63 16000

## Registeradressen für smart-me Zähler und Module

[](https://drive.google.com/open?id=1OwCQ-w5eBYssrGwMTfjZ-HBxL3uJ-QJyK6aXNMgfrwQ "Open Spreadsheet, Register Addressing in new window")

<Video src="" title="Video" />

Register Addressing

## Registeradressen für Pico Ladestationen

[](https://drive.google.com/open?id=1uobN5-T43qRCa5Mvr4OHQfTNKyPBpHVYh19ONpXemYU "Open Spreadsheet, Pico-Modbus TCP in new window")

<Video src="" title="Video" />

Pico-Modbus TCP

## Steuerung Pico Lastmanagement mit Modbus TCP

Eine Pico Ladestation kann mittels Modbus TCP angesteuert werden und der Ladestrom vorgegeben werden.

### Bei Firmwarestand &lt; 0.0.53:

Der Ladestrom kann einmalig mittels Register 0x206E als Ladestrom in mA für alle drei Phasen gleichzeitig vorgegeben werden.

Ansprechen einer Einzelnen Station in einer Ladegruppe (Einzelansteuerung):

- -   Lädt erst ab der Mindesteinstellung des Geräts, z. B. 6000 mA.
        Das Gerät versucht, den verfügbaren Strom so weit wie möglich auszunutzen.
        In diesem Fall wird das Gerät mit 3x6A 3-phasig laden
        Eine einphasige Ladung kann nicht dediziert vorgegeben werden. Die Ladung eines 1-phasigen Fahrzeugs erfolgt im 3-phasigen Modus.


Ansprechen einer Stationsgruppe mit mehreren Stationen:

- Nur das Mastergerät der Pico Gruppe besitzt eine ansprechbare IP-Adresse.

- Lädt erst ab der Mindesteinstellung des Geräts, z. B. 6000 mA.
    Bei 12000 mA Setting der Gruppe
    Bei drei aktiven Ladungen: Führt zu je einer 1-phasigen Ladung mit 12 A auf L1, L2 und L3
    Bei zwei aktiven Ladungen: führt zu zwei 3-phasigen Ladungen mit 6A
    Bei einer aktiven Ladung: Führt zu einer Ladung 3-phasig mit 12 A


### Ab Firmwarestand 0.0.53:

Der Ladestrom kann:

- Für alle Drei Phasen gemeinsam vorgegeben werden mittels Register 0x206E in mA (alle gleicher Wert)

- Gemeinsam aber individuell pro Phase in mA oder A (bis 499A, danach wird mA angenommen) angegeben werden mittels dem Register 0x2071 

- Individuell nacheinander pro Phase in mA oder A (bis 499A, danach wird mA angenommen) angegeben werden mittels den Registern 0x2071, 0x 2073, 0x2075


Allgemeines zur Funktion:

- Der Wechsel zwischen 1-phasig und 3-phasig sollte Steuerungsseitig auf  1xalle 10 Minuten begrenzt werden.

- Es kann auf eine vordefinierte Phase L1, L2, L3 umgeschaltet werden mittels Vorgabe der Strom Verfügbarkeit. (Grösste wird genommen)

- Es ist möglich, zwischen den Phasen L1, L2, L3 während einer 1-phasigen Ladung zu wechseln. (Wechsel des grössten Stromes)


Wichtiger Hinweis zur externen Steuerung:

Es gibt keine Begrenzung für den Wechsel zwischen einzelnen Phasen achten Sie darauf, dies durch den Steuerungsalgorithmus zu begrenzen.
Gleiches gilt auch für den Wechsel von 1-Phasen zu 3-Phaen laden und umgekehrt.
Die intensive Nutzung von Relaiskontakten kann zu einem vorzeitigen Ausfall der Relaisschalter führen. Es wird empfohlen, nicht zwischen einzelnen Phasen zu wechseln, wenn die Mehrleistung nicht Verhältnismässig ist. Unbeständiges Wetter, andere Grossverbraucher und andere Gründe können zu unbeabsichtigten Umschaltungen führen. Am Besten soll eine Zuweisung zu einer Phase nicht ändern wenn nur kurzzeitig der Überschuss fehlt.
Für den Vorzeitigen Ausfall von Relais bei der Verwendung von Steuerungen von Drittanbietern übernimmt smart-me keinerlei Verantwortung.

Ansprechen einer einzelnen Station in einer Ladegruppe (Einzelansteuerung):

- -   Lädt erst ab der Mindesteinstellung des Geräts, z. B. 6000,6000,8000 mA.
        Alle drei Ströme können unterschiedliche Werte haben. Das Gerät versucht, den verfügbaren Strom so weit wie möglich auszunutzen.
        In diesem Fall wird das Gerät mit 3x6A 3-phasig laden)

    - 0,8000,0 mA führt zu einer 1-Phasen-Ladung mit 8 A auf L2

    - 0, 8000 mA, 10000 mA führt zu einer 1-Phasen-Ladung mit 10 A auf L3


Ansprechen einer Stationsgruppe mit mehreren Stationen:

- Nur das Mastergerät der Pico Gruppe besitzt eine ansprechbare IP-Adresse.

- Lädt erst ab der Mindesteinstellung des Geräts, z. B. 6000,6000,8000 mA.
    Alle drei Ströme können einen unterschiedlichen Wert haben.
    Die Gruppe versucht, den verfügbaren Strom so gut wie möglich zu nutzen.

    Wenn eine aktive Ladung: Ein wird Gerät mit 3x6A 3-phasig laden.
    Wenn zwei aktive Ladungen: Ein Gerät lädt mit 8A auf Phase L3 und das zweite mit 6A auf L2 oder L1

- 0, 8000 mA, 10000 mA und zwei aktive Einheiten: Ergibt eine 1-phasige Ladungen mit 10 A auf L3 und eine weitere mit 8 A auf L2 

- 0,16000,10000 mA und drei aktive Einheiten: Ergibt eine einphasige Ladung mit 10 A auf L3 und zwei einphasige Ladungen mit jeweils 8 A auf L2

- 20000,20000,20000 mA und drei aktive Einheiten: Ergibt drei Ladungen mit jeweils 3-phasig zwischen 6 und 7 A.
