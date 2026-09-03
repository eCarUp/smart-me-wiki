---
title: 'Auto Export Errors'
slug: '/stoerungsbehebung/auto-export-fehler'
description: 'This section describes known error messages relating to the auto export and possible approaches to resolving them.'
sidebar_label: 'Auto Export Errors'
---
This section describes known error messages relating to the auto export and possible approaches to resolving them.

## General

The configuration of the auto export is described here: [Auto Export](/schnittstellen/auto-export) 

If the auto export was successful, the status of each metering point can be checked under Configuration (Konfiguration) --> Auto-Export --> Assignment (Zuordnung) on the right-hand side.

To refresh the display of the export status, click the Auto Export menu on the left-hand side.

Our system checks every 10 minutes whether a job is behind schedule.

![Auto Export errors – figure 1](/img/stoerungsbehebung-auto-export-fehler/01.png)

## Status

The status provides information about the state of the export

- OK: last export successful


![Auto Export errors – figure 2](/img/stoerungsbehebung-auto-export-fehler/02.png)

## waiting...

Problem 1: date lies in the future

- The date lies in the future


Solution:

- Wait until the configured date has fully elapsed.


Problem 2: waiting

- Since the assignment was created / last changed, the system has not yet carried out a successful export.


Solution:

- Wait 15 minutes. After that, either OK or an error message is displayed.


### Meter 'xxx' is missing data

Problem:

- There is no data for this day.


Solution:

- In the menu Interfaces (Schnittstellen) / Automatic Export (Automatische Export)

- Note the date of the last export.

- In the menu Dashboard

- Select the station

- Report

- Set date from to "last export" (Letzer Export) from the AutoExport

- Set date to to "last export" (Letzer Export) from the AutoExport

- Note the oldest date under Electricity (Elektrizität) time span.

- In the menu Interfaces (Schnittstellen) / Automatic Export (Automatische Export)

- Select the station 

- Edit

- Set last export (Letzer Export) to "oldest date under Electricity time span" +1. 

- It is important to set the date + 1, because we can only export whole days.

- Wait up to 45 minutes for the export to update the status.


### Waiting for meter values of ".... Last values at "...." (UTC))

Problem 1: meter offline

- The metering point is offline and no longer supplies data. 


Solution

- The metering point must be brought back online.

- After that, the auto export starts again automatically.


Problem 2: data for a whole day is missing

- The metering point does not have all data for the period between the last export and the next export. For example, if the metering point was installed on 2.3.2024 at 12h37, no export can be carried out for 2.3.2024, because it is incomplete.


Solution

- (optional) Manual reading in the downstream system, e.g. EDM, so that the day is recorded completely. (The reading can be taken, for example, with a report in the smart-me main overview).

- Edit the metering point and set last export to the next date.


### FTPs Upload Error: The remote server returned an error: 150 Opening data channel for file upload to server of ....

Problem:

- The metering point ID has one or more spaces on the left


Solution:

- Delete the spaces and save.


![Auto Export errors – figure 3](/img/stoerungsbehebung-auto-export-fehler/03.png)

### SFTP upload: issue with key file: Invalide private key file.

Problem 1: key file is not entered.

- The key file is not correct


Solution 1

- Make sure that the key file is configured correctly according to [Auto Export](/schnittstellen/auto-export) --> Upload type (Upload Art).

- Check whether the generated key file begins as follows:


\-----BEGIN RSA PRIVATE KEY-----
DEK-Info: DES-EDE3-CBC
Proc-Type: 4,ENCRYPTED,...

![Auto Export errors – figure 4](/img/stoerungsbehebung-auto-export-fehler/04.png)

### FTP upload Error: The remote server returned an error 550

Problem: Smart-me does not have permission to write to the specified path.

Solution: Grant permissions.

Problem 2: special case when using MOVEit (as of 8.7.2024: #32171)

- Use the "key file" that was created with the two openssl commands. [Auto Export](/schnittstellen/auto-export) -->  Upload type (Upload Art)

- Establish a first connection, which fails (returns an invalid certificate error).

- In my software "MOVEit" I receive a message (green in the image). I then have to reactivate the user (in blue) and accept the certificate (in red).

- Remove the "/" from the path so that the files can be stored in the "Export" folder. (Wrong: "/Export", correct: "Export)


![Auto Export errors – figure 5](/img/stoerungsbehebung-auto-export-fehler/05.png)

Image from MOVEit

![Auto Export errors – figure 6](/img/stoerungsbehebung-auto-export-fehler/06.png)

Image of the auto export assignment
