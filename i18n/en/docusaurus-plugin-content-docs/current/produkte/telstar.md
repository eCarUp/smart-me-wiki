---
title: '3-Phase Meter Telstar 80A'
slug: '/produkte/telstar'
description: 'The smart-me Telstar 80A is a MID-certified energy meter with an integrated WiFi interface for transmitting real-time data.'
sidebar_label: '3-Phase Meter Telstar 80A'
---
The smart-me Telstar 80A is a MID-certified energy meter with an integrated WiFi interface for transmitting real-time data. The meter synchronises the measured values automatically and in encrypted form to the smart-me Cloud. The data can be exported to third-party systems and processed further in the smart-me portal or via our open interface. The meter has two digital outputs for controlling potential-free devices.

![3-Phase Meter Telstar 80A – Figure 1](/img/produkte-telstar/01.jpg)

## Functions

- [Installation](/konfiguration/inbetriebnahme) with the free smart-me app.

- Billing with the [smart-me Billing Tool](/konfiguration/billing)

- Control with [if/then actions](/konfiguration/wenndann-aktionen) or [event actions](/konfiguration/wenndann-aktionen/ereignisaktionen)

- [Visualizations](/konfiguration/visualisierung)

- [Potential-free contact outputs](/schnittstellen/ein_und_ausgaenge) for controlling external devices, one of them with an 8A relay

- Potential-free contact input for tariff signal or [digital input](/schnittstellen/ein_und_ausgaenge)

- [Interfaces](/) via API, CSV, MSCONS and IS-E

- Encrypted real-time data connection to the smart-me Cloud 

## Technical data

<Embed src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSQ2T_oNXpPR0sUnjcsWY-ymK0lgmZxopMCiyV0gQq9rV7fH5oJEYEVx0a4AUHNfunOHC5igswOLVyi/pubhtml?gid=0&range=A1:B27&single=true&widget=false&headers=false&chrome=false" height="689px" title="3-Phase Meter Telstar 80A" />

## Display

<div className="row">
<div className="col col--7">

Value / Symbol Description

1.8.1 OBIS\-code for the displayed meter reading

T1 Active tariff (tariff 1 or tariff 2)

Arrow Direction of current (right consumption / left feed-in)

Reception (bars) WiFi signal strength

0000053.2 Meter reading

5520W Currently measured power with unit

kWh Unit of the displayed meter reading

M Function no longer used (can be ignored)

</div>
<div className="col col--5 text--center">

![3-Phase Meter Telstar 80A – Figure 2](/img/produkte-telstar/02.png)

</div>
</div>

The meter has a rolling display. The items described below are shown one after the other. After the last item, the first item is shown again.

Meter reading (OBIS code followed by meter reading) 

1.8.1 (A+) Active energy consumption tariff 1
1.8.2 (A+) Active energy consumption tariff 2
2.8.1 (A+) Active energy feed-in tariff 1
2.8.2 (A+) Active energy feed-in tariff 2
5.8.0 (Q1) Inductive reactive energy consumption total
6.8.0 (Q2) Capacitive reactive energy consumption total
7.8.0 (Q3) Inductive reactive energy feed-in total
8.8.0 (Q4) Capacitive reactive energy feed-in total

Firmware (OBIS code followed by information)

C.1.6 Ch: 762A Firmware checksum
0.2.0 V 1.1 Firmware version

Error display (OBIS code followed by error messages)

C.60.9 Fraud flag (possible fraud attempt detected)
PhL: 1 only phase L1 connected
PhL: 2 only phase L2 connected
PhL: 3 only phase L3 connected
PhL: 23 phase L1 not connected
PhL: 13 phase L2 not connected
PhL: 12 phase L3 not connected
Correct phase sequence: numbers are lit steadily
Incorrect phase sequence: numbers flash

## Dimensions and connections

\*.DXF and \*.DWG data can be found in the ZIP archive in the downloads.

### Dimensions \[mm\]

<div className="row">
<div className="col col--6 text--center">

![3-Phase Meter Telstar 80A – Figure 3](/img/produkte-telstar/03.png)

</div>
<div className="col col--6 text--center">

![3-Phase Meter Telstar 80A – Figure 4](/img/produkte-telstar/04.png)

</div>
</div>

### Wiring diagram

![3-Phase Meter Telstar 80A – Figure 5](/img/produkte-telstar/05.png)

## Button functions

<div className="row">
<div className="col col--5 text--center">

![3-Phase Meter Telstar 80A – Figure 6](/img/produkte-telstar/06.png)

</div>
<div className="col col--7">

T1 Button for installation

If button T1 is pressed for 10 seconds, a local WiFi is created for the installation

T1 + T2 Restart

Press buttons T1 and T2 simultaneously for 10 seconds to force a restart.

T2 Special functions

Short: If T2 is pressed for >2s, the green LED toggles (from off to on or from on to off). When activated, it shows the connection status 

🟢 Green steady: connected to the smart-me Cloud

❇️ Green flashing: establishing connection or no connection

Long: If T2 is pressed for >8s, the power display toggles between active and reactive power. In addition, the calibration pulse LED switches between active energy and reactive energy.

Very long: If T2 is pressed for >14s, the S0-0 pulse output toggles between active power and reactive power.

Note: This setting only changes what is shown on the display, not in the smart-me Cloud (app and website). If reactive energy is to be shown in the cloud, this must be set in the general settings. 


</div>
</div>

## LED

<div className="row">
<div className="col col--5 text--center">

![3-Phase Meter Telstar 80A – Figure 7](/img/produkte-telstar/07.png)

</div>
<div className="col col--7">

🟢 Green LED - Connection status

- Shows the status of the connection to the smart-me Cloud. a) Flashing = connection error b) Always on = connection OK

</div>
</div>

<div className="row">
<div className="col col--5 text--center">

![3-Phase Meter Telstar 80A – Figure 8](/img/produkte-telstar/08.png)

</div>
<div className="col col--7">

🔴 Red LED - Pulse LED

- Shows the currently consumed active or reactive power in 1000 pulses/kWh or 1000 pulses/kVArh. Whether active or reactive power is shown can be set with button T2.

- For example: An LED marked "1000 pulses/kWh" flashes 1000 times when 1 kilowatt hour (kWh) of energy has been consumed or fed in. If the 1000 pulses were counted within 1 hour, a constant power of 1 kW was measured.

</div>
</div>

## Configuring inputs and outputs

The Telstar 80A has two digital outputs and one digital input, which can be used as pulse inputs and outputs or as a switchable potential-free contact. You can find details on the wiki page [Inputs and outputs](/schnittstellen/ein_und_ausgaenge) 

The Telstar 80A has a relay on one digital output that can switch up to 8A.

## Mesh technology

If WiFi reception is very weak or unavailable, the Telstar 80A automatically connects via the mesh function to another neighbouring meter within range. This meter then takes over communication with the smart-me Cloud. Mesh technology ensures that the meters have higher availability towards the smart-me Cloud. It is not possible to deactivate the mesh function on the meter. Specific restrictions apply when [Modbus TCP](/schnittstellen/modbus-tcp) is activated.

## Shipping information

Article number: 202063
Article name: smart-me 3-Phasen-Energiezähler 80A MID Telstar Wifi

Customs tariff number: 9028.3019

Weight including packaging: 415g

## Downloads and declaration of conformity

[Data sheet German](https://docs.google.com/presentation/d/1Kp-hwT2kkFY1yaaRTc2gtDwkJTZTEgnx3JlDgXhljGA/export/pdf)

[Data sheet English](https://docs.google.com/presentation/d/1AuzVbDnoAHAyyoMNErOYJBa-0F5bUBsjTG5ghxqtLrY/export/pdf)

[CE declaration of conformity](https://drive.google.com/file/d/1mcZJJhHeKQ1wN0q8yE8ROKnRZXx-wo3b/view?usp=sharing)

[Wiring diagram](https://drive.google.com/file/d/1400_Edqq9WfG48wg-60NUsQZ5CrBbM5B/view?usp=sharing)

[Wiring diagram ZIP files](https://drive.google.com/file/d/1aKyx7qWyNh56Mrj-iAzfRxW_baVQtTmo/view?usp=share_link) (\*.DXF and \*.DWG data can be found in the ZIP archive)

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

    - Every second when the meter is selected in the GUI (smart-me portal)

</details>

<details id="kann-ich-den-zählerstand-auf-null-zurücksetzten">
<summary>Can I reset the meter reading to zero?</summary>

No. Since our meters are used for billing, it is not possible to reset them.

</details>
