---
title: 'Kamstrup Module'
slug: '/produkte/kamstrup-modul'
description: 'smart-me module for the customer interface of the Kamstrup Omnipower meter.'
sidebar_label: 'Kamstrup Module'
---
smart-me module for the customer interface of the Kamstrup Omnipower meter.

The smart-me Kamstrup module brings electricity meters to the cloud. Your customers get accurate analysis, visualisation and precise monitoring of their own energy consumption. No additional hardware is needed. The smart-me Kamstrup module uses the existing WiFi network and connects directly to the smart-me Cloud. 

Discontinuation information sent in switzerland 08.08.2023.

Sales in switzerland will be discontinued as of 31.12.2023, support and cloud support will continue to be provided.

Sales outside of switzerland stopped on 1.1.2023 , support and cloud support still guaranteed.

![Kamstrup Module – figure 1](/img/_en/products-kamstrup-module/01.jpg)

## Kamstrup module LED sequences with fault description

Most sources of error when installing a Kamstrup module can be identified with the LED sequence:

Chapters

[00:06](https://www.youtube.com/watch?v=IWHoF5dn-8A&t=6s) LEDs do not light up

[00:18](https://www.youtube.com/watch?v=IWHoF5dn-8A&t=18s) WLAN is not generated

[00:59](https://www.youtube.com/watch?v=IWHoF5dn-8A&t=59s) LEDs flashing fast

[01:14](https://www.youtube.com/watch?v=IWHoF5dn-8A&t=74s) LED running light

<Video src="" title="Video" />

## Functions

- Real time visualisation of electricity consumption, accumulated meter reading (purchase and supply), various electricity rates, voltage and current through the web login and in the [app](https://web.smart-me.com/en/project/smart-me-app-2/). Without Pro license the readout interval is limited to 60 seconds.

- Automatic storage of meter readings in the cloud

- Storage and automatic synchronisation of measurement data in case of connection failures to the cloud

- Encrypted Wi-Fi connection directly to the smart-me cloud

- The smart-me cloud enables extensive energy data management, automatic invoicing, remote controlling and alarms

- Easy [installation](/konfiguration/inbetriebnahme) using the free [smart-me app](https://web.smart-me.com/en/project/smart-me-app-2/) available for [Android](https://play.google.com/store/apps/details?id=com.smart_me) and [iOS](https://apps.apple.com/ch/app/smart-me/id929146952?ign-mpt=uo%3D4) 

- Modbus-TCP from firmware version 8.0 (Info: This module cannot offer stable Modbus communication without a constant Internet connection.) 


### How can I set the correction factor on the Cloud?

To set the correction factor of a module or meter, please proceed as follows:

1.  Log in to the smart-me portal. 

2.  Click on configure

3.  Click on Meter/Folder Configuration

4.  Select the relevant meter

5.  Click on Edit Node (green button at the top)

6.  Enter the correction value at Value correction. (Attention: only for Value Correction, not for Parent Folder Value Correction)

7.  Click on Save.


### How to calculate the correction factor?

1.  Attention: This text does not refer to the transformer ratio of the Telstar CT, but to the correction factor in the meter/folder configuration. The correction factor is mainly needed when using Kamstrup meters in combination with current transformers. 

2.  Example with 600:5 transformer:
    If a transformer with a ratio of 600:5 is used, the value must be adjusted by a factor of 600 : 5 = 120. The correction factor must be specified in the smart-me Cloud as a percentage. This therefore calculates a correction factor of 120 \* 100 % = 12'000 %.

3.  Example with transformer 600:5 and presetting of the Kamstrup meter with 100:5:
    Kamstrup meters sometimes have a preset transformer ratio of 100:5. If a transformer with a ratio of 600:5 is connected to this meter, the correction factor can be calculated as follows:
    Correction factor of the Kamstrup meter: 100 : 5 = 20
    Correction factor of the transformer: 600 : 5 = 120
    Total correction factor: 120 / 20 = 6
    Total correction factor in percent: 6 \* 100 % = 600 %
    In this case, a correction factor of 600 % would have to be set in the smart-me portal. 


### How often data is transmitted

This can be set manually for each device. 

- The interval can be set down to 1 second.


This can be set as follows

- Log in

- Select counter

- Gear wheel top right

- General settings

- Set upload interval (&lt;60 seconds only possible with smart-me Professional)

- Save settings


## Successor product

smart-me does not offer a successor product for Kamstrup meters. 

If you operate a smart-me ZEV (Switzerland only) and need a new solution for your metering (e.g. HAK), please contact us, we offer our [project partners](https://web.smart-me.com/projektpartner/) favorable conditions for the replacement. (Special offer valid until 30.06.2025)

If measurements are carried out in the private sector for monitoring, home automation, etc., the [Telstar 80A](/produkte/telstar) or [Telstar CT](/produkte/Telstar-CT) can be installed at any time. If you are looking for a solution with your existing Kamstrup meter, we recommend you take a look at this page. [https://gplug.ch/](https://gplug.ch/) (gPlug reservation: With the Kamstrup smart-me module, please note that an undocumented customer interface (CII) function is used. In contrast, the gPlugK uses the publicly published CII. Therefore, it can happen that the gPlugK does not work on an Omnipower, although the smart-me product works with it. This problem can be partially solved by changing the remote configuration by the distribution network operator.

## Meter encryption key

Kamstrup say it´s the GKP11-key that shall be used with this module and HAN-port has not to be opened

![Kamstrup Module – figure 2](/img/_en/products-kamstrup-module/02.png)

## Downloads

Data Sheet

Technical Documents

[Quick Starter Guide](https://docs.google.com/document/d/1cS5WRL6pkD0gkrZ0FGVVKKvnGc2-kHdcpS_A88SyPlA/export?format=pdf)
