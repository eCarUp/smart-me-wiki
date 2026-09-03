---
title: 'Auto Export'
slug: '/schnittstellen/auto-export'
description: 'To use Auto Export, you must purchase a smart-me Professional License.'
sidebar_label: 'Auto Export'
---
### Requirements

To use Auto Export, you must purchase a smart-me Professional License.

smart-me offers the possibility to automatically export measurement data to another system. 

## Video Tutorial

All export options are summarised in this video. This video is currently only available in German.



<Video src="YXnEf3CQatc" title="Video" />

## Assignment

Define the following key elements:

Meter point ID: Defines the ID. This is used in some export formats such as MSCONS.

Meter or Folder: Chose the meter or file of which the data should be exported.

Export format: Define the export format.

Upload type; Define the upload type.

Export interval: Chose how often your date should be uploaded.

Export trigger: Defines the trigger of the export.

- "When all meters have values", triggers as soon as all data is available. If they are never complete (e.g. because the start value was before installation), this will never trigger.

-  "12h after the enddate", triggers 12 hours later, regardless of whether all data is available or not.

- Note: Auto export starts between 0:00 to 1:00 and can go up to 3h.


Last export: Date of the next export of data. If the date is in the past, all data up to now will be exported.

Start date next export: The start date for the next export of the data. If the date is in the past, all data up to the current date will be exported.

Measured values to be exported : If you select a folder with virtual tariffs, you can choose whether you want to export the normal measured values or the virtual tariffs.

![Auto Export – figure 1](/img/_en/interfaces-auto-export/01.png)

## Export Format

The Export Format defines the file format for the export. The following formats are currently supported (more are in planning):

mscons 2.2e: mscons (Metered Services Consumption report message) version 2.2e.

- Note: Please use this format for encontrol.


mscons 2.4a: mscons (Metered Services Consumption report message) version 2.4a.

IS-E:  export to the "innosolv Energie" System by Innosolv Inc

IS-E Load profile:  Export in "time series" format to the "innosolv Energie" system by Innosolv Inc

CSV: Export to CSV format, which can be processed (for instance) with Excel. The export of meter values with the following Obis codes is supported:

![Auto Export – figure 2](/img/_en/interfaces-auto-export/02.jpg)

Obis Code IS-E

1-1:1.8.0: Active Energy Total Import

1-1:1.8.1: Active Energy Tariff 1 Import

1-1:1.8.2: Active Energy Tariff 2 Import

1-1:2.8.0: Active Energy Total Export

1-1:2.8.1: Active Energy Tariff 1 Export

1-1:2.8.2: Active Energy Tariff 2 Export

1-1:5.8.0: Reactive Energy Q1

1-1:6.8.0: Reactive Energy Q2

1-1:7.8.0: Reactive Energy Q3

1-1:8.8.0: Reactive Energy Q4

5-1:1.0.0: Cold (Energie)

6-1:1.0.0: Heat (Energie)

8-1:1.0.0: Cold water (m3)

9-1:1.0.0: Hot water (m3)



Obis Code mscons

1-1:1.29.0\*255: Active Energy Total Import (load profile)

1-1:2.29.0\*255: Active Energy Total Export (load profile)

1-1:5.29.0\*255: Reactive Energy Q1 (load profile)

1-1:6.29.0\*255: Reactive Energy Q2 (load profile)

1-1:7.29.0\*255: Reactive Energy Q3 (load profile)

1-1:8.29.0\*255: Reactive Energy Q4 (load profile)

5-1:1.29.0\*255: Cold (load profile)

6-1:1.29.0\*255: Heat (load profile)

8-1:1.29.0\*255: Cold water (load profile)

9-1:1.29.0\*255: Hot water (load profile)



Obis Code CSV

1-0:1.8.0\*255: Active Energy Total Import

1-0:1.8.1\*255: Active Energy Tariff 1 Import

1-0:1.8.2\*255: Active Energy Tariff 2 Import

1-0:2.8.0\*255: Active Energy Total Export

1-0:2.8.1\*255: Active Energy Tariff 1 Export

1-0:2.8.2\*255: Active Energy Tariff 2 Export

1-1:5.8.0\*255: Reactive Energy Q1

1-1:6.8.0\*255: Reactive Energy Q2

1-1:7.8.0\*255: Reactive Energy Q3

1-1:8.8.0\*255: Reactive Energy Q4

6-0:1.0.0\*255: Heat Energy

5-0:1.0.0\*255: Cold Energy

8-0:1.0.0\*255: Cold Water Volume

9-0:1.0.0\*255: Hot Water Volume

## Test Files

- [mscons 2.2e](https://drive.google.com/file/d/1CJXQ4KrJJd38OFJux7knypvHLiCxJnM0/view?usp=sharing) 

- [IS-E](https://drive.google.com/file/d/1CL8Hamaco2NqkivEQ-jsaTcfyzeGfofX/view?usp=sharing)

- [ISE-Load profile](https://drive.google.com/file/d/1CeIbKSYTFt6OgOmuujFGEvP1s68OjA5h/view?usp=sharing)

- [csv](https://drive.google.com/file/d/1sPDUHu82A8agZ1vW9XXP7htphXfELqXb/view?usp=sharing) The CSV file can be configured individually. The test file was configured as «1-0: 1.8.0 \* 255; 1-0: 1.8.1 \* 255; 1-0: 1.8.2 \* 255; 1-0: 2.8.0 \* 255; 1-0 : 2.8.1 \* 255; 1-0: 2.8.2 \* 255; ».


Obis Codes

OBIS Codes are used to describe a (meter) value. 

[Obis Codes (Excel)](https://drive.google.com/open?id=1eTs4ZXD9AUagGxNEQSof0IWHkZg54nsK6SyHp4ygDSc&authuser=0)

![Auto Export – figure 3](/img/_en/interfaces-auto-export/03.png)

## Upload Type

Currently these upload types are available:

FTP FTP Upload (unencrypted ).

FTPs Encrypted FTP Upload.

- The port can be explicitly indicated by a :. e.g. ftp.smart-com:990


sFTP (with username and password): Encrypted FTP upload.

- Username and password


sFTP (with Key File) Encrypted FTP Upload. Key files are used instead of a password.

- Example for the creation of an sFTP key file with openssl

- openssl genrsa -out key.pem 2048

- openssl rsa -in key.pem -DES-EDE3-CBC -traditional -out enc\_key.pem

- Example: [enc\_key.pem](https://drive.google.com/file/d/19ChMy3gsfkBAD14A8Oe0i0lPFXmIGc77/view?usp=sharing)


![Auto Export – figure 4](/img/_en/interfaces-auto-export/04.jpg)

## Shared Settings

If a user is assigned to a partner (e.g. utility company), the user is shown the already defined "Upload Types" and "Export Formats" of the partner in addition to his own "Upload Types" and "Export Formats". For example, the FTP settings only need to be made in the partner account and are not visible and changeable for the normal user. 

For better identification, the passed settings are marked in blue.

![Auto Export – figure 5](/img/_en/interfaces-auto-export/05.jpg)

## Export virtual tariffs

If you have set up virtual tariffs in smart-me Billing, you can export them to IS-E. 

Set up

Create the virtual tariffs in [smart-me Billing](/konfiguration/billing).  Make sure that you set the tariff number of the virtual tariff correctly. This will be encoded as "tariff" in the Obis Code when exported. Example: Tariff number 3 results in Obis: 1-5:1.8.3 (1-5:1.8.&lt;tariff number>)

In the "Auto Export" under Assignment, select the folder with the virtual tariffs and choose "Virtual tariffs" under "Measured values to be exported". 

\-> Attention: This function only works with the export type "IS-E". 

Obis Codes

OBIS Codes are used to describe a (meter) value. 

[Obis Codes (Excel)](https://drive.google.com/open?id=1eTs4ZXD9AUagGxNEQSof0IWHkZg54nsK6SyHp4ygDSc&authuser=0)

![Auto Export – figure 6](/img/_en/interfaces-auto-export/06.jpg)

\------------------------------------------------------------------

![Auto Export – figure 7](/img/_en/interfaces-auto-export/07.jpg)
