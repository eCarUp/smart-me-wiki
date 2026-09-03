---
title: '3-Phase Meter Telstar CT'
slug: '/produkte/Telstar-CT'
description: 'The smart-me Telstar CT is a MID-certified energy meter with an integrated WiFi interface for transmitting real-time data and with a connection for external transformers.'
sidebar_label: '3-Phase Meter Telstar CT'
---
The smart-me Telstar CT is a MID-certified energy meter with an integrated WiFi interface for transmitting real-time data and with a connection for external transformers. The meter synchronizes the measured values to the smart-me Cloud automatically and encrypted. The data can be exported to third-party systems and processed further in the smart-me Portal or via our open interface. The meter has two digital outputs for controlling potential-free devices.

![3-Phase Meter Telstar CT – Figure 1](/img/produkte-telstar-ct/01.png)

[Transformers and accessories](/drittprodukte/Stromwandler)

## Functions

- [Installation](/konfiguration/inbetriebnahme) with the free smart-me App.

- Transformer connection for [external transformers](/) with output currents from 0.01A to 6A

- Billing with the [smart-me Billing Tool](/konfiguration/billing)

- Control with [if/then actions](/konfiguration/wenndann-aktionen) or [event actions](/konfiguration/wenndann-aktionen/ereignisaktionen)

- [Visualizations](/konfiguration/visualisierung)

- [Potential-free contact outputs](/schnittstellen/ein_und_ausgaenge) for controlling external devices, one of them with an 8A relay

- Potential-free contact input for tariff signal or [digital input](/schnittstellen/ein_und_ausgaenge)

- [Interfaces](/) via API, CSV, MSCONS and IS-E

- Encrypted real-time data connection to the smart-me Cloud


## Technical data

<Embed src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTJmdsIN6iLOfY_AML4DXbCamh1SwcZohszYBjYiVtusFdlA1zrAnZZu4ZFDsQP5pfZxvfloSHGBjkf/pubhtml?gid=0&range=A1:B28&single=true&widget=false&headers=false&chrome=false" aspect="1.963" title="3-Phase Meter Telstar CT" />

## Technical requirements for the transformers

A wide variety of current transformers can be used with the Telstar CT. The basic requirements are as follows:

- Current transformer ratio: 1:1 to 20'000:1 to 5:5 to 20'000:5
    The secondary number can be any integer between 1 and 5.
    The primary number any integer between 1 and 20'000.

- Output current: 1A to 5A

- Output power: at least 1VA or higher (recommendation 5VA)

- Type: open or closed

- Accuracy class: 1 or better\*


\*If the meters are to be used for billing, calibrated transformers are required that meet at least class 0.5 or lower.

You can find recommendations for transformers and accessories on the page: [Current Transformers and accessories](/drittprodukte/Stromwandler) 

## Display

Value / symbol description

1.8.1 OBIS code for the displayed meter reading

T1 Active tariff (tariff 1 or tariff 2)

Arrow Current direction (right consumption / left delivery)

Reception (bars) WiFi signal strength

0000053.2 Meter reading

5520W Currently measured power with unit

kWh Unit of the displayed meter reading

M Function no longer used (can be ignored)

![3-Phase Meter Telstar CT – Figure 2](/img/produkte-telstar-ct/02.png)

The meter has a rolling display. The items described below are shown one after the other. After the last item, the first item is shown again.

Meter reading (OBIS code followed by meter reading) 

1.8.1 (A+) Active energy consumption tariff 1
1.8.2 (A+) Active energy consumption tariff 2
2.8.1 (A+) Active energy delivery tariff 1
2.8.2 (A+) Active energy delivery tariff 2
1.8.0:5A (A+) Active energy total consumption 5A basis
2.8.0:5A (A-) Active energy total delivery 5A basis
5.8.0 (Q1) Inductive reactive energy consumption total
6.8.0 (Q2) Capacitive reactive energy consumption total
7.8.0 (Q3) Inductive reactive energy delivery total
8.8.0 (Q4) Capacitive reactive energy delivery total

Transformer factor (OBIS code followed by information)

0.4.2       Transformer factor (incl. S0 pulses / kWh)

Firmware (OBIS code followed by information)

C.1.6 Ch: 2218 Firmware checksum
0.2.0 V 1.1 Firmware version

Error display (OBIS code followed by error messages)

C.60.9 Fraud flag (possible fraud attempt detected)
PhL: 1 only phase L1 connected
PhL: 2 only phase L2 connected
PhL: 3 only phase L3 connected
PhL: 23 phase L1 not connected
PhL: 13 phase L2 not connected
PhL: 12 phase L3 not connected
Correct phase sequence: numbers illuminate statically
Incorrect phase sequence: numbers flash

## Dimensions and connections

\*.DXF and \*.DWG files can be found in the ZIP archive in the downloads.

### Dimensions \[mm\]

![3-Phase Meter Telstar CT – Figure 3](/img/produkte-telstar-ct/03.png)

![3-Phase Meter Telstar CT – Figure 4](/img/produkte-telstar-ct/04.png)

### Connection diagram

![3-Phase Meter Telstar CT – Figure 5](/img/produkte-telstar-ct/05.jpg)

## Setting the transformer ratio on the Telstar CT

1.  Tap the gear icon (settings) at the top right 

2.  Edit 

3.  General settings 

4.  Enter the transformer ratio 

5.  The transformer ratio can be locked. This serves as protection against unwanted changes by unauthorized persons. To unlock the transformer ratio, the device must be installed again with the smart-me App. When reinstalling, deleting is unnecessary.


Note: Entering the transformer ratio does not change the historically stored data. For this reason, this step is to be done immediately after commissioning.

![3-Phase Meter Telstar CT – Figure 6](/img/produkte-telstar-ct/06.png)

## Button functions

![3-Phase Meter Telstar CT – Figure 7](/img/produkte-telstar-ct/07.png)

T1 Button for the installation

If button T1 is pressed for 10 seconds, this creates a local WiFi for the installation

T1 + T2 Restart

Press buttons T1 and T2 simultaneously for 10 seconds to force a restart.

T2 Special functions

Short: If T2 is pressed >2s, the green LED lamp toggles (from on to off or from off to on). When it is activated, it shows the connection status 

🟢 Green illuminated: connected to smart-me Cloud

 ☀︎ Green flashing: establishing connection or no connection

Long: If T2 is pressed >8s, the power display is switched between active and reactive power. In addition, the calibration pulse LED switches between active energy and reactive energy.

Very long: If T2 is pressed >14s, the S0-0 pulse output is switched between active power and reactive power.

Note: This setting only changes the display on the screen, not in the smart-me Cloud (App and website). If the reactive energy is to be shown in the cloud, this must be done in the general settings. 

## LED

![3-Phase Meter Telstar CT – Figure 8](/img/produkte-telstar-ct/08.png)

🟢 Green LED - connection status

- Shows the status of the connection to the smart-me Cloud. a) Flashing = connection error b) Always on = connection OK


![3-Phase Meter Telstar CT – Figure 9](/img/produkte-telstar-ct/09.png)

🔴 Red LED - pulse LED

- Shows the currently consumed active or reactive power in 1000 pulses/kWh or 1000 pulses/kVArh respectively. Whether active or reactive power is shown can be set with button T2.


- For example: An LED labeled "1000 pulses/kWh" flashes 1000 times when 1 kilowatt hour (kWh) of energy has been consumed or delivered. If the 1000 pulses were counted within 1 hour, a constant power of 1 kW was measured.


## Configuring inputs and outputs

The Telstar CT has two digital outputs and one digital input, which can be used as pulse inputs and outputs or as a switchable potential-free contact. You can find details on this on the wiki page [Inputs and outputs](/schnittstellen/ein_und_ausgaenge) 

On one digital output, the Telstar CT has a relay that can switch up to 8A.

## Mesh technology

In the case of very weak or missing WiFi reception, the Telstar CT automatically connects via the mesh function to another neighboring meter within range. That meter then takes over communication with the smart-me Cloud. Mesh technology ensures that the meters have higher availability towards the smart-me Cloud. It is not possible to deactivate the mesh function on the meter. With [Modbus TCP](/schnittstellen/modbus-tcp) activated, specific restrictions apply.

## Transformers and accessories

You can find recommendations for transformers and accessories on the page: [Current Transformers and accessories](/drittprodukte/Stromwandler) 

None of these products are sold by smart-me AG or offered as accessories with a purchase. Please buy these products directly from the manufacturer. 

### Shipping information

Article number: 212062 

Article name: 3-Phasen Energiezähler Telstar CT MID Wifi

Customs tariff number: 9028.3019

Weight with packaging: 315g

## Downloads and declaration of conformity

[Data sheet German](https://docs.google.com/presentation/d/1x3jFxCGivswGkcCu-2lQZ4jwOIfHecJHIx7F-JriRCg/export/pdf)

[Data sheet English](https://docs.google.com/presentation/d/18m_q9MHgCx7ZJCGQnOY_EMU0SPnOfEqGXRiOpeSxHgA/export/pdf)

[CE declaration of conformity](https://drive.google.com/file/d/1mcZJJhHeKQ1wN0q8yE8ROKnRZXx-wo3b/view?usp=sharing)

[Connection diagram ZIP files](https://drive.google.com/file/d/1aIXTi2VFA2XxJBLnIs_gOVc5GDLnuzYR/view?usp=share_link) (\*.DXF and \*.DWG files can be found in the ZIP archive)

[Quick Starter](https://docs.google.com/document/d/1bADdFIt2XP22LaSkNoSgziUkUFZ5IIlIpH5qiHsI8YA/export?format=pdf)

## FAQ

### At what interval do the meters send data?

- Every 15 minutes, i.e. at xx:00:00 xx:15:00, xx:30:00 and xx:45:00. This sends the data required for the load profile. In the event of a connection interruption, this data is stored locally and sent later.

- In addition, at least every 330 seconds.

- Subsequently, when one of the following events occurs:

    - Meter reading change greater than 100Wh

    - Power change greater than 100W

    - Current change greater than 1A

    - Voltage change greater than 1V

    - Every second, when the meter is selected in the GUI (smart-me Portal)


### Can I reset the meter reading to zero?

No, since our meters are used for billing, it is not possible to reset them.
