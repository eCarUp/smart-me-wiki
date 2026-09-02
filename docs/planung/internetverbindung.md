---
title: 'Internetverbindung'
slug: '/planung/internetverbindung'
description: 'Das smart-me System und deren Hardware benötigt eine direkte Internetverbindung zur Cloud.'
sidebar_label: 'Internetverbindung'
---
Das smart-me System und deren Hardware benötigt eine direkte Internetverbindung zur Cloud. Lokal musst du also ein WLAN 2.4GHz mit Internetverbindung stellen. 5GHz wird wegen der geringen Reichweite nicht unterstützt.

[Englisch](https://doc.smart-me.com/planning/internet-connection)

Der Internetzugang kann wie folgt gelöst werden:

- Providerangebot über Kabel von Swisscom, Sunrise oder anderem lokalen Internetanbieter und 2.4GHz WLAN Router, üblicherweise vom Provider mitgeliefert.

- Internet über Mobilfunk-SIM Karte und 2.4GHz WLAN Router erstellen. 


Ausfallebenen

- Mehrere Access-Points mit derselben SSID und Passwort bereitzustellen. Alle smart-me Produkte wählen automatisch einen Access-Point mit Internetverbindung aus.

- Mehrere WiFi-Netzwerke auf dem smart-me Gerät hinterlegen: [Kann ich mein Gerät mit mehreren WiFi-Netzwerken nutzen?](/konfiguration/inbetriebnahme#kann-ich-mein-gerät-mit-mehreren-wifi-netzwerken-nutzen)


![Internetverbindung – Abbildung 1](/img/planung-internetverbindung/01.png)

## Mobilfunk Datenanbieter (LTE)

Die Datenabos: [Digital Republic - Mobiles Internet für deine Geräte](https://digitalrepublic.ch/de/lp/ecarup-smartme-dr-ladestationen/?utm_source=ecarup&utm_medium=ecarupwiki&utm_campaign=ecarupwiki)

[

![Internetverbindung – Abbildung 2](/img/planung-internetverbindung/02.png)

](https://digitalrepublic.ch/de/lp/ecarup-smartme-dr-ladestationen/?utm_source=smartme&utm_medium=smartmewiki&utm_campaign=smartmewiki)

## Hardwareanforderungen

Hauptpunkte\*:

- Standard: 802.11 b / g / n 

- WiFi-Frequenz: 2.4 GHz


\* weitere Details sind jeweils in den technischen Daten der [Produkte](/produkte) zu finden.

Spezifikationen nach Bedarf:

- Anzahl der parallel unterstützten Clients.


Clients:
Die Unterstützten Clients definieren wie viele Geräte parallel mit dem Accesspoint oder Router sprechen können. Die Anzahl muss auf deine Installation passen. Es gibt kosteneffiziente Accesspoints welche die Clientzahl von 200+ erfüllen.
Die Anzahl ist im Datenblatt der Geräte zu finden, meistens unter "Max. Clients" oder "Concurred Clients".

## Mögliche Hardwarekomponenten

### Router

Der Router ist die Quelle, welche mit dem Internet/Provider verbunden ist und dieses in
LAN (RJ-45) oder Wifi 2.4 Ghz / 5 GHz umwandelt.

### Accesspoints

Accesspoints wandeln ein mit LAN (RJ-45) weitergegebenes Signal des Routers in ein WLAN 2.4 GHz / 5GHz um.

### Repeater

Repeater verstärken ein vorhandenes WLAN-Signal um den Bereich zu erweitern.


### Mobilfunk LTE-Router mit 2.4GHz WLAN

Teltonika RUT241 (max. 50 Clients)

Ein externer SIM-Karten Slot und Signalstärken-LEDs ermöglichen eine einfache Inbetriebnahme. Das 4G-Modul des Routers bietet LTE Cat 4 Geschwindigkeiten bis zu 300 Mbps. Das Gerät lässt sich alternativ auch als DSL Router oder WLAN Client verwenden und besitzt eine Fallback-Funktion zum automatischen Umschalten auf LTE oder WLAN beim Ausfall der DSL Verbindung.  

Teltonika RUT241 (max. 50 Clients)

Mögliche Bezugsquelle: [Teltonika RUT241 - digitec](https://www.digitec.ch/de/search?q=Rut+241)



Teltonika RUT951 (max. 100 Clients)

Mögliche Bezugsquelle: [Teltonika RUT951 - digitec](https://www.digitec.ch/de/search?q=RUT951&take=6)

### W-LAN Accesspoint 2.4GHz

Ubiquiti U6-Lite

Der UniFi 6 Lite ist ein 2x2-Wi-Fi 6 Access Point, der mit 5-GHz- (MU-MIMO und OFDMA) und 2,4-GHz-Funkgeräten (MIMO) eine aggregierte Funkrate von bis zu 1,5 Gbit/s bietet.

Mögliche Bezugsquelle: [Ubiquiti | UniFi | U6-Lite - Digitec](https://www.digitec.ch/de/s1/product/ubiquiti-u6-lite-1200-mbits-300-mbits-access-point-14489581?supplier=406802)

### DIN-Schienen WLAN Accesspoint 2.4Ghz

WLAN-Accesspoint 3xUAE/USB ACR WLAN – Rutenbeck 

WLAN-Accesspoint 3xUAE/USB ACR WLAN 22610408 Max. Übertragungsrate 150Mbit/s, Frequenzband 2,4 GHz, Managed, Funkprotokoll IEEE 802.11 b/g/n, Verschlüsselung WPA2, Ethernet, Anzahl der 10/100 Mbps LAN-Ports 2, VPN-Security, Anschluss für externe Antenne, Bridgefunktion, Repeaterfunktion, Power over Ethernet, Breite 72mm, Höhe 90mm, Tiefe 65mm, Schutzart (IP) IP21, Geeignet für Hutschienenmontage, WLAN Accesspoint für REG-Montage 

### WLAN Voraussetzungen

[Inbetriebnahme](/konfiguration/inbetriebnahme)
