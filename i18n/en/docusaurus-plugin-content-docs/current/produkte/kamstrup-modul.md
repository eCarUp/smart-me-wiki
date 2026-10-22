---
title: 'Kamstrup Module'
slug: '/produkte/kamstrup-modul'
description: 'smart-me module for the customer interface of the Kamstrup Omnipower meter.'
sidebar_label: 'Kamstrup Module'
displayed_sidebar: wikiSidebar
---
smart-me module for the customer interface of the Kamstrup Omnipower meter.

The smart-me Kamstrup Module brings electricity meters into the cloud. Your customers receive accurate analyses, visualizations and precise monitoring of their own energy consumption. No additional hardware is required. The smart-me Kamstrup Module uses the existing WiFi network and connects directly to the smart-me Cloud.

Discontinuation notice sent in Switzerland on 08.08.2023 (partner network).

Sales in Switzerland will be discontinued as of 31.12.2023; support and cloud support will continue to be provided.

Sales outside Switzerland were discontinued on 1.1.2023; support and cloud support will continue to be provided.

![Kamstrup Module – Figure 1](/img/produkte-kamstrup-modul/01.jpg)

## Kamstrup Module LED sequences with error descriptions

Most sources of error when installing a Kamstrup Module can be identified from the LED sequence:

Chapters

[00:06](https://www.youtube.com/watch?v=CwS65mPsTws&t=6s) LEDs do not light up

[00:18](https://www.youtube.com/watch?v=CwS65mPsTws&t=18s) WLAN is not created

[00:59](https://www.youtube.com/watch?v=CwS65mPsTws&t=59s) LED flashing quickly

[01:14](https://www.youtube.com/watch?v=CwS65mPsTws&t=74s) LED running light

<Embed src="https://player.vimeo.com/video/688374505" aspect="1.601" title="smart-me Wiki DE - Kamstrup Module" />

## Functions

- Various charts and evaluations

- Online firmware update

- Integrated data logger for one month

- Usable as a sensor for controlling devices

- Encrypted WLAN connection directly to the smart-me Cloud

- Real-time visualization of power, meter reading, voltage and current in the app and on the web. Without a Pro license, the reading interval is limited to 60 seconds.

- Comprehensive energy management: automatic billing, control, optimization, and alarms

- Simple [installation](/konfiguration/inbetriebnahme) with the smart-me app for [Android](https://play.google.com/store/apps/details?id=com.smart_me) and [iOS](https://apps.apple.com/ch/app/smart-me/id929146952?ign-mpt=uo%3D4)

- Modbus-TCP from firmware version 8.0 (Note: without a continuous internet connection, the module cannot provide stable Modbus communication either) 

### How do I set the correction factor in the cloud?

To set the correction factor of a module or meter, proceed as follows:

1.  Log in to the smart-me portal 

2.  Click on Configure (konfigurieren)

3.  Click on Meter/Folder Configuration (Zähler/Ordner-Konfiguration)

4.  Select the corresponding meter

5.  Click on Edit Node (Knoten editieren) (green button at the top)

6.  Enter the correction value under Value Correction (Wert Korrektur). (Caution: only under Value Correction (Wert Korrektur), not under Parent Folder Value Correction (Überordner Wert Korrektur))

7.  Press Save (Speichern).

### Kamstrup Module decryption

[Video tutorial](https://www.youtube.com/watch?v=bYoq9a142t8)

1.  Click the gear icon (Settings (Einstellungen)) at the top right 

2.  Edit (Editieren) 

3.  Enter the meter key (Zählerschlüssel)

Caution: The Kamstrup Module needs the meter's encryption PIN in order to read the data. Only the energy supplier has this PIN.

### How is the correction factor calculated?

1.  Caution: This text does not refer to the transformer ratio of the Telstar CT, but to the correction factor in the meter/folder configuration. The correction factor is mainly needed when Kamstrup meters are used in combination with transformers. 

2.  Example with a 600:5 transformer:
    If a transformer with a ratio of 600:5 is used, the value must be adjusted by a factor of 600 : 5 = 120. The correction factor must be entered in the smart-me Cloud as a percentage. This results in a correction factor of 120 \* 100 % = 12'000 %

3.  Example with a 600:5 transformer and a Kamstrup meter preset to 100:5:
    Some Kamstrup meters have a preset transformer ratio of 100:5. If a transformer with a ratio of 600:5 is connected to such a meter, the correction factor is calculated as follows:
    Correction factor of the Kamstrup meter: 100 : 5 = 20
    Correction factor for the transformer: 600 : 5 = 120
    Total correction factor: 120 / 20 = 6
    Total correction factor as a percentage: 6 \* 100 % = 600 %
    In this case, a correction factor of 600 % would therefore have to be set in the smart-me portal. 

### How often is data transmitted

This can be set manually for each device. 

- The interval can be reduced to as little as 1 second.

This can be set as follows

- Log in

- Select the meter

- Gear icon at the top right

- General Settings (Allgemeine Einstellungen)

- Set the upload interval (Upload-Intervall) (&lt;60 seconds only possible with smart-me Professional)

- Save the settings (Einstellungen speichern)

## Meter offline

- Serial number starts with 92\*: Kamstrup

General information can be found under [Meter offline](/stoerungsbehebung/zaehler-offline).

Meter-specific information can be found here

### Restarting the meter

- This is for information only, showing how it is done.

- Procedure: Remove the module from the meter. Wait until no LED is lit any more. Insert the module back into the meter.

### How do I recognize the reception status of a meter

- Connected to the WLAN: orange LED on the left and green LED on the right are permanently lit.

- Cannot connect to the WLAN: to be defined

- Meter creates a local WLAN: orange LED on the left is permanently lit and. Red LED in the middle and green LED on the right light up alternately at 0.5-second intervals.

### Check on arrival

The following points can be checked on arrival. If something has already been done to the meter, it is important that nothing is done to the meter for at least 5 minutes. It is also possible to ask the customer on site for a video of the meter (30 seconds) in order to better assess the situation.

- Check the status using the video: [https://www.youtube.com/watch?v=CwS65mPsTws](https://www.youtube.com/watch?v=CwS65mPsTws) or [https://vimeo.com/688374505](https://vimeo.com/688374505)

    - Chapter: [00:06](https://www.youtube.com/watch?v=CwS65mPsTws&t=6s) LEDs do not light up

    - Chapter: [00:18](https://www.youtube.com/watch?v=CwS65mPsTws&t=18s) WLAN is not created

    - Chapter: [00:59](https://www.youtube.com/watch?v=CwS65mPsTws&t=59s) LED flashing quickly

    - Chapter: [01:14](https://www.youtube.com/watch?v=CwS65mPsTws&t=74s) LED running light

## Changing the upload interval

- Log in to the smart-me portal

- Select the meter

- Select the gear icon at the top right

- General Settings (Allgemeine Einstellungen)

![Kamstrup Module – Figure 2](/img/produkte-kamstrup-modul/02.png)

## Successor product

smart-me does not offer a successor product for Kamstrup meters. 

If you operate a smart-me ZEV (association for own consumption) (Switzerland only) and need a new solution for your metering (e.g. HAK), feel free to contact us; we offer our [project partners](https://web.smart-me.com/projektpartner/) favourable conditions for the replacement. (Special offer valid until 30.06.2025)

If measurements for monitoring, home automation etc. are carried out in a private setting, the [Telstar 80A](/produkte/telstar-80a) or [Telstar CT](/produkte/telstar-ct) can be installed at any time. If you are looking for a solution with your existing Kamstrup meter, we recommend taking a look at this page. [https://whatwatt.ch/de](https://whatwatt.ch/de) or [https://gplug.ch/](https://gplug.ch/) (gPlug caveat: Note that the Kamstrup smart-me module uses an undocumented function of the customer interface (CII). The gPlugK, by contrast, uses the publicly documented CII. It can therefore happen that the gPlugK does not work on an Omnipower even though the smart-me product works with it. This problem can in some cases be solved by the grid operator changing the remote configuration.

## Invalid meter key (CKW)

Problem

- Kamstrup Module is offline with the error message Invalid meter key (Ungültiger Zähler Schlüssel)

Solution

The cause of the problem has been known since 14.5.2025 13:43: During system maintenance at CKW, all keys of the Kamstrup meters were accidentally renewed, invalidating the previous ones.

As a solution, you need to send CKW an email at [messtechnik@ckw.ch](mailto:messtechnik@ckw.ch) with the meter number (see image at the bottom right). CKW will then send you a new key.

![Kamstrup Module – Figure 3](/img/produkte-kamstrup-modul/03.png)

![Kamstrup Module – Figure 4](/img/produkte-kamstrup-modul/04.png)

## Downloads

Data sheet

[English](https://docs.google.com/presentation/d/1MZwOPzxvFGYc0ABwUGkdSa5Ay1NUlRRAXrMTlrBY5lw/export/pdf)

Technical documents

[Quick Starter Guide](https://docs.google.com/document/d/1cS5WRL6pkD0gkrZ0FGVVKKvnGc2-kHdcpS_A88SyPlA/export?format=pdf)

## FAQ

<details id="in-welchem-intervall-senden-die-zähler-daten">
<summary>At what interval do the meters send data?</summary>

- Every 15 minutes, i.e. at xx:00:00, xx:15:00, xx:30:00 and xx:45:00. This sends the data required for the load profile. In the event of a connection interruption, this data is stored locally and sent later.

- In addition, an individual configuration can be set up:

    - With Basic or Limited licenses: max. 1x per minute.

    - With Pro licensing: max. 1x per second

</details>
