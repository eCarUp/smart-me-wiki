---
title: 'Kamstrup Module'
slug: '/produkte/kamstrup-modul'
description: 'smart-me module for the customer interface of the Kamstrup Omnipower meter.'
sidebar_label: 'Kamstrup Module'
---
smart-me module for the customer interface of the Kamstrup Omnipower meter.

The smart-me Kamstrup Module brings electricity meters into the cloud. Your customers receive accurate analyses, visualizations and precise monitoring of their own energy consumption. No additional hardware is required. The smart-me Kamstrup Module uses the existing WiFi network and connects directly to the smart-me Cloud.

Discontinuation notice sent in Switzerland on 08.08.2023 (partner network).

Sales in Switzerland will be discontinued as of 31.12.2023; support and cloud support will continue to be provided.

Sales outside Switzerland were discontinued on 1.1.2023; support and cloud support continue to be provided.

![Kamstrup Module – figure 1](/img/produkte-kamstrup-modul/01.jpg)

## Kamstrup Module LED sequences with error description

Most sources of error when installing a Kamstrup Module can be identified from the LED sequence:

Chapters

[00:06](https://www.youtube.com/watch?v=CwS65mPsTws&t=6s) LEDs do not light up

[00:18](https://www.youtube.com/watch?v=CwS65mPsTws&t=18s) WLAN is not created

[00:59](https://www.youtube.com/watch?v=CwS65mPsTws&t=59s) LED flashing rapidly

[01:14](https://www.youtube.com/watch?v=CwS65mPsTws&t=74s) LED running light

<Embed src="https://player.vimeo.com/video/688374505" aspect="1.601" title="Kamstrup Module" />

## Functions

- Various diagrams and evaluations

- Online firmware update

- Integrated data logger for one month

- Can be used as a sensor to control devices

- Encrypted WLAN connection directly to the smart-me Cloud

- Real-time visualization of power, meter reading, voltage and current in the app and on the web. Without a Pro license, the read-out interval is limited to 60 seconds.

- Comprehensive energy management: automatic billing, control, optimization and alarms

- Simple [installation](/konfiguration/inbetriebnahme) with the smart-me app for [Android](https://play.google.com/store/apps/details?id=com.smart_me) and [iOS](https://apps.apple.com/ch/app/smart-me/id929146952?ign-mpt=uo%3D4)

- Modbus TCP from firmware version 8.0 (note: without a continuous internet connection, the module cannot offer stable Modbus communication either) 


### How can I set the correction factor in the cloud?

To set the correction factor of a module or meter, please proceed as follows:

1.  Log in to the smart-me portal 

2.  Click on Configure (konfigurieren)

3.  Click on Folder and Meter Configuration (Zähler/Ordner-Konfiguration)

4.  Select the corresponding meter

5.  Click on Edit node (Knoten editieren) (green button at the top)

6.  Enter the correction value under Value correction (Wert Korrektur). (Caution: only under Value correction (Wert Korrektur), not under Parent folder value correction (Überordner Wert Korrektur))

7.  Press Save (Speichern).


### Kamstrup Module decryption

[Video instructions](https://www.youtube.com/watch?v=bYoq9a142t8)

1.  Click the gear icon (Settings) at the top right 

2.  Edit (Editieren) 

3.  Enter the meter key


Caution: the Kamstrup Module needs the encryption PIN of the meter in order to read out the data. Only the energy supplier has this PIN.

### How is the correction factor calculated?

1.  Caution: this text does not refer to the transformer ratio of the Telstar CT, but to the correction factor in the folder and meter configuration. The correction factor is mainly needed when using Kamstrup meters in combination with current transformers. 

2.  Example with a 600:5 transformer:
    If a transformer with a ratio of 600:5 is used, the value must be adjusted by a factor of 600 : 5 = 120. The correction factor must be entered in the smart-me Cloud as a percentage. This results in a correction factor of 120 \* 100 % = 12'000 %

3.  Example with a 600:5 transformer and the Kamstrup meter preset to 100:5:
    Some Kamstrup meters have a preset transformer ratio of 100:5. If a transformer with a ratio of 600:5 is connected to such a meter, the correction factor can be calculated as follows:
    Correction factor of the Kamstrup meter: 100 : 5 = 20
    Correction factor for the transformer: 600 : 5 = 120
    Total correction factor: 120 / 20 = 6
    Total correction factor as a percentage: 6 \* 100 % = 600 %
    In this case, a correction factor of 600 % would therefore have to be set in the smart-me portal. 


### How often is data transmitted

This can be set manually for each device. 

- The interval can be reduced to as little as 1 second.


This is set as follows

- Log in

- Select the meter

- Gear icon at the top right

- General settings (Allgemeine Einstellungen)

- Set the upload interval (&lt;60 seconds only possible with smart-me Professional)

- Save the settings


## Meter offline

- Serial number starts with 92\*: Kamstrup


General information can be found under [Meter offline](/stoerungsbehebung/zaehler-offline).

Meter-specific details can be found here

### Restarting the meter

- This is for information only, showing how it is done.

- Procedure: remove the module from the meter. Wait until no LED is lit any more. Insert the module back into the meter.


### How do I recognize the reception status of a meter

- Connected to the WLAN: orange LED on the left and green LED on the right are permanently lit.

- Cannot connect to the WLAN: to be defined

- Meter creates a local WLAN: orange LED on the left permanently lit. Red LED in the middle and green LED on the right light up alternately at intervals of 0.5 seconds.


### Check on arrival

The following points can be checked on arrival. If something has already been done to the meter, it is important that nothing is done to the meter for at least 5 minutes. It is also possible to ask the customer on site for a video of the meter (30 seconds) in order to assess the situation better.

- Check the status using the video: [https://www.youtube.com/watch?v=CwS65mPsTws](https://www.youtube.com/watch?v=CwS65mPsTws) or [https://vimeo.com/688374505](https://vimeo.com/688374505)

    - Chapter: [00:06](https://www.youtube.com/watch?v=CwS65mPsTws&t=6s) LEDs do not light up

    - Chapter: [00:18](https://www.youtube.com/watch?v=CwS65mPsTws&t=18s) WLAN is not created

    - Chapter: [00:59](https://www.youtube.com/watch?v=CwS65mPsTws&t=59s) LED flashing rapidly

    - Chapter: [01:14](https://www.youtube.com/watch?v=CwS65mPsTws&t=74s) LED running light


## Changing the upload interval

- Log in to the smart-me portal

- Select the meter

- Select the gear icon at the top right

- General settings (Allgemeine Einstellungen)


![Kamstrup Module – figure 2](/img/produkte-kamstrup-modul/02.png)

## Successor product

smart-me does not offer a successor product for Kamstrup meters. 

If you operate a smart-me ZEV (association for own consumption) (Switzerland only) and need a new solution for your metering (e.g. main service box), you are welcome to contact us; we offer our [project partners](https://web.smart-me.com/projektpartner/) favourable terms for the replacement. (Special offer valid until 30.06.2025)

If measurements are carried out in the private sector for monitoring, home automation and so on, the [Telstar 80A](/produkte/telstar) or [Telstar CT](/produkte/Telstar-CT) can be installed at any time. If you are looking for a solution with your existing Kamstrup meter, we recommend taking a look at this page. [https://gplug.ch/](https://gplug.ch/) (gPlug caveat: with the Kamstrup smart-me Module, note that an undocumented function of the customer interface (CII) is used. The gPlugK, by contrast, uses the publicly published CII. It can therefore happen that the gPlugK does not work on an Omnipower even though the smart-me product does. This problem can sometimes be solved by having the distribution grid operator change the remote configuration.

## Invalid meter key (CKW)



Problem

- Kamstrup Module is offline with the error message Invalid meter key (Ungültiger Zähler Schlüssel)


Solution

The cause of the problem has been known since 14.5.2025 13:43: in the course of system maintenance at CKW, all keys of the Kamstrup meters were renewed by mistake and the previous ones invalidated.

As a solution, you have to send CKW an email to [messtechnik@ckw.ch](mailto:messtechnik@ckw.ch) with the meter number (see picture at the bottom right). CKW will then send you a new key.

![Kamstrup Module – figure 3](/img/produkte-kamstrup-modul/03.png)

![Kamstrup Module – figure 4](/img/produkte-kamstrup-modul/04.png)

## Downloads

Data sheet

[English](https://docs.google.com/presentation/d/1MZwOPzxvFGYc0ABwUGkdSa5Ay1NUlRRAXrMTlrBY5lw/export/pdf)

Technical documents

[Quick Starter Guide](https://docs.google.com/document/d/1cS5WRL6pkD0gkrZ0FGVVKKvnGc2-kHdcpS_A88SyPlA/export?format=pdf)

## FAQ

### At what interval do the meters send data?

- Every 15 minutes, i.e. at xx:00:00, xx:15:00, xx:30:00 and xx:45:00. This sends the data required for the load profile. In the event of a connection interruption, this data is stored locally and sent later.

- In addition, an individual configuration can be made:

    - With Basic or Limited licenses: max. 1x per minute.

    - With Pro licensing: max. 1x per second
