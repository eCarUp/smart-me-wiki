---
title: 'Kamstrup Module'
slug: '/produkte/kamstrup-modul'
description: 'smart-me module for the customer interface of the Kamstrup Omnipower meter.'
sidebar_label: 'Kamstrup Module'
---
smart-me module for the customer interface of the Kamstrup Omnipower meter.

The smart-me Kamstrup Module brings electricity meters into the cloud. Your customers get accurate analyses, visualizations and precise monitoring of their own energy consumption. No additional hardware is required. The smart-me Kamstrup Module uses the existing WiFi network and connects directly to the smart-me Cloud.

Discontinuation notice for Switzerland sent on 08.08.2023 (partner network).

Sales in Switzerland will be discontinued as of 31.12.2023; support and cloud support remain guaranteed.

Sales outside Switzerland were discontinued on 1.1.2023; support and cloud support remain guaranteed.

![Kamstrup Module – Figure 1](/img/produkte-kamstrup-modul/01.jpg)

## Kamstrup Module LED sequences with error descriptions

Most sources of error when installing a Kamstrup Module can be identified using the LED sequence:

Chapters

[00:06](https://www.youtube.com/watch?v=CwS65mPsTws&t=6s) LEDs do not light up

[00:18](https://www.youtube.com/watch?v=CwS65mPsTws&t=18s) WiFi is not created

[00:59](https://www.youtube.com/watch?v=CwS65mPsTws&t=59s) LED flashing rapidly

[01:14](https://www.youtube.com/watch?v=CwS65mPsTws&t=74s) LED running light

<Embed src="https://player.vimeo.com/video/688374505" aspect="1.601" title="smart-me Wiki EN - Kamstrup Module" />

## Functions

- Various charts and evaluations

- Online firmware update

- Integrated data logger for one month

- Can be used as a sensor to control devices

- Encrypted WiFi connection directly to the smart-me Cloud

- Real-time visualization of power, meter reading, voltage and current in the app and on the web. Without a Pro license, the readout interval is limited to 60 seconds.

- Comprehensive energy management: automatic billing, control, optimization and alarms

- Easy [installation](/konfiguration/inbetriebnahme) with the smart-me app for [Android](https://play.google.com/store/apps/details?id=com.smart_me) and [iOS](https://apps.apple.com/ch/app/smart-me/id929146952?ign-mpt=uo%3D4)

- Modbus-TCP from firmware version 8.0 (Note: without a continuous internet connection, the module cannot provide stable Modbus communication either) 


### How can I set the correction factor in the cloud?

To set the correction factor of a module or meter, proceed as follows:

1.  Log in to the smart-me portal 

2.  Click on Configure (konfigurieren)

3.  Click on Meter/Folder Configuration (Zähler/Ordner-Konfiguration)

4.  Select the relevant meter

5.  Click on Edit node (Knoten editieren) (green button at the top)

6.  Enter the correction value under Value correction (Wert Korrektur). (Caution: only under Value correction (Wert Korrektur), not under Parent folder value correction (Überordner Wert Korrektur))

7.  Click Save (Speichern).


### Kamstrup Module decryption

[Video tutorial](https://www.youtube.com/watch?v=bYoq9a142t8)

1.  Top right, click the gear icon (Settings (Einstellungen)) 

2.  Edit (Editieren) 

3.  Enter the meter key (Zählerschlüssel)


Caution: The Kamstrup Module needs the meter's encryption PIN to be able to read the data. Only the utility has access to it.

### How is the correction factor calculated?

1.  Caution: This text does not refer to the transformer ratio of the Telstar CT, but to the correction factor in the meter/folder configuration. The correction factor is mainly needed when using Kamstrup meters in combination with current transformers. 

2.  Example with a 600:5 current transformer:
    If a current transformer with a ratio of 600:5 is used, the value must be adjusted by a factor of 600 : 5 = 120. The correction factor must be entered in percent in the smart-me Cloud. This results in a correction factor of 120 \* 100 % = 12'000 %

3.  Example with a 600:5 current transformer and a Kamstrup meter preset to 100:5:
    Some Kamstrup meters have a preset transformer ratio of 100:5. If a current transformer with a ratio of 600:5 is connected to such a meter, the correction factor is calculated as follows:
    Correction factor of the Kamstrup meter: 100 : 5 = 20
    Correction factor for the current transformer: 600 : 5 = 120
    Total correction factor: 120 / 20 = 6
    Total correction factor in percent: 6 \* 100 % = 600 %
    In this case, a correction factor of 600 % would therefore have to be set in the smart-me portal. 


### How often is data transmitted

This can be set manually for each device. 

- The interval can be reduced to as little as 1 second.


This can be set as follows

- Log in

- Select the meter

- Gear icon at the top right

- General settings (Allgemeine Einstellungen)

- Set the upload interval (Upload-Intervall) (&lt;60 seconds only possible with smart-me Professional)

- Save settings (Einstellungen speichern)


## Meter offline

- Serial number starts with 92\*: Kamstrup


General information can be found under [Meter offline](/stoerungsbehebung/zaehler-offline).

Meter-specific information can be found here

### Restart the meter

- This is for information only on how it is done.

- Procedure: Remove the module from the meter. Wait until no LED is lit any more. Slide the module back into the meter.


### How do I recognize the reception status of a meter

- Connected to WiFi: orange LED on the left and green LED on the right are lit continuously.

- Cannot connect to WiFi: to be defined

- Meter creates a local WiFi: orange LED on the left is lit continuously. Red LED in the middle and green LED on the right light up alternately at 0.5-second intervals.


### Check on arrival

The following points can be checked on arrival. If something has already been done to the meter, it is important that nothing is done to the meter for at least 5 minutes. It is also possible to ask the customer on site for a video of the meter (30 seconds) to better assess the situation.

- Check the status using the video: [https://www.youtube.com/watch?v=CwS65mPsTws](https://www.youtube.com/watch?v=CwS65mPsTws) or [https://vimeo.com/688374505](https://vimeo.com/688374505)

    - Chapter: [00:06](https://www.youtube.com/watch?v=CwS65mPsTws&t=6s) LEDs do not light up

    - Chapter: [00:18](https://www.youtube.com/watch?v=CwS65mPsTws&t=18s) WiFi is not created

    - Chapter: [00:59](https://www.youtube.com/watch?v=CwS65mPsTws&t=59s) LED flashing rapidly

    - Chapter: [01:14](https://www.youtube.com/watch?v=CwS65mPsTws&t=74s) LED running light


## Change upload interval

- Log in to the smart-me portal

- Select the meter

- Select the gear icon at the top right

- General settings (Allgemeine Einstellungen)


![Kamstrup Module – Figure 2](/img/produkte-kamstrup-modul/02.png)

## Successor product

smart-me does not offer a successor product for Kamstrup meters. 

If you operate a smart-me ZEV (association for own consumption) (Switzerland only) and need a new solution for your metering (e.g. service connection box), feel free to contact us; we offer our [project partners](https://web.smart-me.com/projektpartner/) favourable conditions for the replacement. (Special offer valid until 30.06.2025)

If measurements are carried out in the private sector for monitoring, home automation, etc., the [Telstar 80A](/produkte/telstar) or [Telstar CT](/produkte/Telstar-CT) can be installed at any time. If you are looking for a solution with your existing Kamstrup meter, we recommend taking a look at this page. [https://whatwatt.ch/de](https://whatwatt.ch/de) or [https://gplug.ch/](https://gplug.ch/) (gPlug caveat: Note that the Kamstrup smart-me module uses an undocumented function of the customer interface (CII). The gPlugK, on the other hand, uses the publicly documented CII. It may therefore happen that the gPlugK does not work on an Omnipower even though the smart-me product works with it. This problem can sometimes be solved by the distribution grid operator changing the remote configuration.

## Invalid meter key (CKW)



Problem

- Kamstrup Module is offline with the error message Invalid meter key (Ungültiger Zähler Schlüssel)


Solution

The cause of the problem has been known since 14.5.2025 13:43: During system maintenance by CKW, all keys of the Kamstrup meters were accidentally renewed, making the previous ones invalid.

To solve this, you must send an email to CKW at [messtechnik@ckw.ch](mailto:messtechnik@ckw.ch) with the meter number (see image at the bottom right). CKW will then send you a new key.

![Kamstrup Module – Figure 3](/img/produkte-kamstrup-modul/03.png)

![Kamstrup Module – Figure 4](/img/produkte-kamstrup-modul/04.png)

## Downloads

Data sheet

[English](https://docs.google.com/presentation/d/1MZwOPzxvFGYc0ABwUGkdSa5Ay1NUlRRAXrMTlrBY5lw/export/pdf)

Technical documents

[Quick Starter Guide](https://docs.google.com/document/d/1cS5WRL6pkD0gkrZ0FGVVKKvnGc2-kHdcpS_A88SyPlA/export?format=pdf)

## FAQ

### At what interval do the meters send data?

- Every 15 minutes, i.e. at xx:00:00 xx:15:00, xx:30:00 and xx:45:00. This sends the data required for the load profile. In the event of a connection interruption, this data is stored locally and sent later.

- In addition, an individual configuration can be made:

    - With Basic or Limited licenses: max. once per minute.

    - With Pro licensing: max. once per second
