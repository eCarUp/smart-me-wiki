---
title: '3-Phase Meter Telstar 80A'
slug: '/produkte/telstar-80a'
description: 'The smart-me Telstar 80A is a MID-certified energy meter with an integrated WiFi interface for transmitting real-time data.'
sidebar_label: '3-Phase Meter Telstar 80A'
---
The smart-me Telstar 80A is a MID-certified energy meter with an integrated WiFi interface for transmitting real-time data. The meter synchronises the measured values automatically and encrypted to the smart-me Cloud. The data can be exported and further processed in the smart-me Portal or via our open interface in third-party systems. The meter has two digital outputs for controlling potential-free devices.

![3-Phase Meter Telstar 80A – Figure 1](/img/produkte-telstar-80a/01.jpg)

## Functions

- [Installation](/konfiguration/inbetriebnahme) with the free smart-me App.

- Billing with the [smart-me Billing Tool](/konfiguration/billing)

- Control with [if/then actions](/konfiguration/wenndann-aktionen) or [event actions](/konfiguration/wenndann-aktionen/ereignisaktionen)

- [Visualizations](/konfiguration/visualisierung)

- [Potential-free contact outputs](/schnittstellen/ein-und-ausgaenge) for controlling external devices, one of them with an 8A relay

- Potential-free contact input for tariff signal or [digital input](/schnittstellen/ein-und-ausgaenge)

- [Interfaces](/) via API, CSV, MSCONS and IS-E

- Encrypted real-time data connection to the smart-me Cloud 

## Technical data

| Feature | Value |
| --- | --- |
| Product certification | CE, MID 2014/32/EU, CH load profile / reactive energy, RED |
| Accuracy class for active energy/reactive energy | B (MID) / 2 (IEC) |
| Direction | +A (consumption), -A (delivery), +R, -R |
| Quadrants | Q1, Q2, Q3, Q4 |
| Mains voltage | 3x230/400VAC 50Hz |
| Current measuring range Imin-Iref(Imax) | 0.25-5(80)A |
| Conductor cross-section | 2.5 - 35 mm² |
| Measuring instrument category | CAT III |
| Temperature range | -25°C to +70°C |
| Rel. humidity | Annual average 75%, non-condensing<br />short-term 95%, non-condensing |
| Measured values | Active energy (kWh), active power (kW)<br />Reactive energy (kvarh), reactive power (kvar)<br />Current (A), voltage (V), power factor (cosφ) |
| Self-consumption | < 0.8W per phase |
| Tariffs | Two via digital tariff input E1, unlimited virtual tariffs in the smart-me Cloud |
| S0 output | 1'000 Imp/kWh |
| Digital input E1 | Potential-free tariff input (12 VDC / 230 VAC) |
| Digital outputs S0-0, S-1 | Potential-free outputs (SG Ready), 12 VDC / 230 VAC<br />S0-0: max. 0.4W<br />S-1: max. 8A@230VAC or 5A@12VDC |
| Communication | WLAN IEEE 802.11 b/g/n (2.4 GHz) |
| Data volume | < 75MB/month |
| Data rate | < 0.1 Mbit/s |
| WLAN security standard | WEP, WPA-PSK/WPA2-PSK |
| Data storage | 2 months |
| Protection class housing/terminals, use | IP20 / IP51 (installed in control cabinet), indoor |
| Mounting | DIN rail |
| Dimensions | 5 modules, L:90mm W:90mm H:65.7mm |
| Server location | Switzerland |
| Protection class | II |

## Display

<div className="row">
<div className="col col--7">

**Value / symbol description**

- 1.8.1 OBIS code for the displayed meter reading

- T1 Active tariff (tariff 1 or tariff 2)

- Arrow Direction of current (right consumption / left delivery)

- Reception (bars) WiFi signal strength

- 0000053.2 Meter reading

- 5520W Currently measured power with unit

- kWh Unit of the displayed meter reading

- M Function no longer used (can be ignored)

</div>
<div className="col col--5 bild--mitte">

![3-Phase Meter Telstar 80A – Figure 2](/img/produkte-telstar-80a/02.png)

</div>
</div>

The meter has a rolling display. The items described below are displayed one after the other. After the last item, the first item is displayed again.

**Meter reading (OBIS code followed by meter reading)**

- 1.8.1 (A+) Active energy consumption tariff 1
- 1.8.2 (A+) Active energy consumption tariff 2
- 2.8.1 (A+) Active energy delivery tariff 1
- 2.8.2 (A+) Active energy delivery tariff 2
- 5.8.0 (Q1) Inductive reactive energy consumption total
- 6.8.0 (Q2) Capacitive reactive energy consumption total
- 7.8.0 (Q3) Inductive reactive energy delivery total
- 8.8.0 (Q4) Capacitive reactive energy delivery total

**Firmware (OBIS code followed by information)**

- C.1.6 Ch: 762A Firmware checksum
- 0.2.0 V 1.1 Firmware version

**Error display (OBIS code followed by error messages)**

- C.60.9 Fraud flag (possible fraud attempt detected)
- PhL: 1 only phase L1 connected
- PhL: 2 only phase L2 connected
- PhL: 3 only phase L3 connected
- PhL: 23 phase L1 not connected
- PhL: 13 phase L2 not connected
- PhL: 12 phase L3 not connected
- Correct phase sequence: numbers light up steadily
- Incorrect phase sequence: numbers flash

## Dimensions and connections

\*.DXF and \*.DWG data can be found in the ZIP archive in the downloads.

### Dimensions \[mm\]

<div className="row">
<div className="col col--6 bild--mitte">

![3-Phase Meter Telstar 80A – Figure 3](/img/produkte-telstar-80a/03.png)

</div>
<div className="col col--6 bild--mitte">

![3-Phase Meter Telstar 80A – Figure 4](/img/produkte-telstar-80a/04.png)

</div>
</div>

### Connection diagram

![3-Phase Meter Telstar 80A – Figure 5](/img/produkte-telstar-80a/05.png)

## Button functions

![3-Phase Meter Telstar 80A – Figure 6](/img/produkte-telstar-80a/06.png)

T1 Button for installation

If button T1 is pressed for 10 seconds, a local WiFi is created for the installation

T1 + T2 Restart

Press buttons T1 and T2 simultaneously for 10 seconds to force a restart.

T2 Special functions

Short: If T2 is pressed >2s, the green LED toggles (from off to on or from on to off). When activated, it indicates the connection status 

🟢 Green steady: connected to the smart-me Cloud

❇️ Green flashing: establishing connection or no connection

Long: If T2 is pressed >8s, the power display toggles between active and reactive power. In addition, the calibration pulse LED switches between active energy and reactive energy.

Very long: If T2 is pressed >14s, the S0-0 pulse output toggles between active power and reactive power.

Note: This setting only changes what is shown on the display, not in the smart-me Cloud (app and website). If reactive energy is to be displayed in the Cloud, this must be done in the general settings (allgemeine Einstellungen). 


## LED

<div className="row">
<div className="col col--5 bild--mitte">

![3-Phase Meter Telstar 80A – Figure 7](/img/produkte-telstar-80a/07.png)

</div>
<div className="col col--7">

🟢 Green LED - connection status

- Shows the status of the connection to the smart-me Cloud. a) Flashing = connection error b) Always on = connection OK

</div>
</div>

<div className="row">
<div className="col col--5 bild--mitte">

![3-Phase Meter Telstar 80A – Figure 8](/img/produkte-telstar-80a/08.png)

</div>
<div className="col col--7">

🔴 Red LED - pulse LED

- Shows the currently consumed active or reactive power in 1000 pulses/kWh or 1000 pulses/kVArh. Whether active or reactive power is displayed can be set with button T2.

- For example: An LED labelled "1000 pulses/kWh" flashes 1000 times when 1 kilowatt hour (kWh) of energy has been consumed or delivered. If the 1000 pulses were counted within 1 hour, a constant power of 1 kW was measured.

</div>
</div>

## Configuring inputs and outputs

The Telstar 80A has two digital outputs and one digital input, which can be used as pulse inputs and outputs or as a switchable potential-free contact. You can find details on the wiki page [Input and Output Configuration](/schnittstellen/ein-und-ausgaenge) 

The Telstar 80A has a relay on one digital output that can switch up to 8A.

## Mesh technology

If WiFi reception is very weak or absent, the Telstar 80A automatically connects via the mesh function to another neighbouring meter within range. This meter then takes over communication with the smart-me Cloud. Mesh technology ensures that the meters have higher availability towards the smart-me Cloud. It is not possible to deactivate the mesh function on the meter. Specific restrictions apply when [Modbus TCP](/schnittstellen/modbus-tcp) is activated.

## Shipping information

Article number: 202063
Article name: smart-me 3-Phasen-Energiezähler 80A MID Telstar Wifi

Customs tariff number: 9028.3019

Weight with packaging: 415g

## Downloads and declaration of conformity

[Data sheet German](https://docs.google.com/presentation/d/1Kp-hwT2kkFY1yaaRTc2gtDwkJTZTEgnx3JlDgXhljGA/export/pdf)

[Data sheet English](https://docs.google.com/presentation/d/1AuzVbDnoAHAyyoMNErOYJBa-0F5bUBsjTG5ghxqtLrY/export/pdf)

[CE declaration of conformity](https://drive.google.com/file/d/1mcZJJhHeKQ1wN0q8yE8ROKnRZXx-wo3b/view?usp=sharing)

[Connection diagram](https://drive.google.com/file/d/1400_Edqq9WfG48wg-60NUsQZ5CrBbM5B/view?usp=sharing)

[Connection diagram ZIP files](https://drive.google.com/file/d/1aKyx7qWyNh56Mrj-iAzfRxW_baVQtTmo/view?usp=share_link) (\*.DXF and \*.DWG data can be found in the ZIP archive)

[Quick Starter](https://docs.google.com/document/d/1qW-3HcgJ3si6LE-HPIYaLg9N9HZhR4PZgu0LJcP5_DY/export?format=pdf)

## FAQ

<details id="in-welchem-intervall-senden-die-zähler-daten">
<summary>At what interval do the meters send data?</summary>

- Every 15 minutes, i.e. at xx:00:00, xx:15:00, xx:30:00 and xx:45:00. This sends the data required for the load profile. In the event of a connection interruption, this data is stored locally and sent later.

- In addition, at least every 330 seconds.

- Furthermore, when one of the following events occurs:

    - Meter reading change greater than 100Wh

    - Power change greater than 100W

    - Current change greater than 1A

    - Voltage change greater than 1V

    - Every second when the meter is selected in the GUI (smart-me Portal)

</details>

<details id="kann-ich-den-zählerstand-auf-null-zurücksetzten">
<summary>Can I reset the meter reading to zero?</summary>

No, since our meters are used for billing, it is not possible to reset them.

</details>
