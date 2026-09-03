---
title: 'Internet Connection'
slug: '/planung/internetverbindung'
description: 'The smart-me system and its hardware always requires a direct internet connection to the cloud.'
sidebar_label: 'Internet Connection'
---
The smart-me system and its hardware always requires a direct internet connection to the cloud. Locally, you must therefore set up a WLAN 2.4GHz with an internet connection. 5Ghz is not supported because of the low range.



Internet access can be solved as follows:

- Provider offer via cable from Swisscom, Sunrise or other local Internet provider and 2.4GHz WLAN router. (usually supplied by the provider)

- Create Internet via mobile phone SIM card and 2.4GHz WLAN router.


Failure levels

- Provide multiple access points with the same SSID and password. All smart-me products automatically select an access point with Internet connection.

- Store multiple WiFi networks on the smart-me device: [Can I use my device with multiple WiFi networks?](/konfiguration/inbetriebnahme#can-i-use-my-device-with-multiple-wifi-networks)


![Internet Connection – figure 1](/img/_en/planning-internet-connection/01.png)

## Mobile data providers (LTE)

The data subscriptions: [Digital Republic - Mobile Internet for your devices](https://digitalrepublic.ch/de/lp/ecarup-smartme-dr-ladestationen/?utm_source=ecarup&utm_medium=ecarupwiki&utm_campaign=ecarupwiki) 

[

![Internet Connection – figure 2](/img/_en/planning-internet-connection/02.png)

](https://digitalrepublic.ch/de/lp/ecarup-smartme-dr-ladestationen/?utm_source=smartme&utm_medium=smartmewiki&utm_campaign=smartmewiki)

## Hardware requirements

Main points\*:

- Standard: 802.11 b / g / n 

- WiFi frequency: 2.4 GHz


\*details can be found in the technical data of the [products](/produkte).

Specifications as required:

- Number of supported clients in parallel.


Clients:
The supported clients define how many devices can talk to the access point or router at the same time. The number must match your installation. There are cost-effective access points that meet the client count of 200+. The number can be found in the device data sheet, usually under "Max. Clients" or "Concurred Clients".

## Possible hardware components

### Router

The router is the source that connects to the internet/provider and converts it to LAN (RJ-45) or WiFi 2.4 Ghz / 5 GHz.

### Accesspoint

Accesspoints convert a router signal transmitted via LAN (RJ-45) into a WiFi 2.4 GHz / 5 GHz.

### Repeater

Repeaters amplify an existing WiFi signal to extend the range. 

### Mobile LTE router with 2.4GHz WLAN

Teltonika RUT241 (max. 50 Clients)

An external SIM card slot and signal strength LEDs allow for easy commissioning. The router's 4G module offers LTE Cat 4 speeds of up to 300 Mbps. The device can also be used as a DSL router or WLAN client and has a fallback function for automatic switching to LTE or WLAN if the DSL connection fails.  

Possible source of supply: [Teltonika RUT241 - digitec](https://www.digitec.ch/de/search?q=Rut+241)



Teltonika RUT951 (max. 100 Clients)

Possible source of supply: [Teltonika RUT951 - digitec](https://www.digitec.ch/de/search?q=RUT951&take=6)

### W-LAN Accesspoint 2.4GHz

Ubiquiti U6-Lite

The UniFi 6 Lite is a 2x2 Wi-Fi 6 access point that uses 5GHz (MU-MIMO and OFDMA) and 2.4GHz (MIMO) radios to provide an aggregated radio rate of up to 1.5Gbps.

Possible source of supply: [Ubiquiti | UniFi | U6-Lite - Digitec](https://www.digitec.ch/de/s1/product/ubiquiti-u6-lite-1200-mbits-300-mbits-access-point-14489581?supplier=406802)


### DIN rail WLAN access point 2.4Ghz

WLAN access point 3xUAE/USB ACR WLAN - Rutenbeck 

WLAN access point 3xUAE/USB ACR WLAN 22610408 Max. transmission rate 150Mbit/s, frequency band 2.4 GHz. Transmission rate 150Mbit/s, Frequency band 2.4 GHz, Managed, Radio protocol IEEE 802.11 b/g/n, Encryption WPA2, Ethernet, Number of 10/100 Mbps LAN ports 2, VPN security, Connection for external antenna, Bridge function, Repeater function, Power over Ethernet, Width 72mm, Height 90mm, Depth 65mm, Protection class (IP) IP21, Suitable for DIN rail mounting, WLAN access point for REG mounting. 

## WiFi requirements

[Commissioning](/konfiguration/inbetriebnahme)
