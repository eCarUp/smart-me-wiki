---
title: 'Alarms'
slug: '/konfiguration/wenndann-aktionen/alarme'
description: 'Alarms can be set up so that you receive an email when a meter is no longer connected to our cloud.'
sidebar_label: 'Alarms'
naechste_schritte: [konfiguration/billing/index, konfiguration/billing-deutschland/index]
vorheriger_schritt: konfiguration/ordnerkonfiguration/index
---
Alarms can be set up so that you receive an email when a meter is no longer connected to our cloud.

## Prerequisite

You need a smart-me Limited or Professional subscription to use this function.

### Configuring the alarms

### If event / No connection (Keine Verbindung)

We cover this in more detail under [If / Then Actions](/konfiguration/wenndann-aktionen).

You can set up an if event that triggers when a meter is no longer connected to the cloud. The following settings must be made:

- If a folder is selected, all meters belonging to it are monitored. If you select several folders, please select OR (ODER).

- If a meter is selected, only this meter is monitored.

Definition of the downtime: 

- General: The 1440 minutes (1 day) prevent a false alarm in the event of a short internet interruption for smart-me meters.

- Pico: When using alarms to monitor Picos that are connected to a backend, it can make sense to shorten this time, e.g. to 15 or 60 minutes. This prevents a station from being out of service for too long.

![Alarms – Figure 1](/img/konfiguration-wenndann-aktionen-alarme/01.png)

### Then action / Alarm

<div className="row">
<div className="col col--6">

Once the if events have occurred, an email is sent. The following settings must be made:

- Name of the alarm

- Subject (Subjekt): subject line of the alarm emails

- Message (Nachricht): text contained in the alarm email

Note: We recommend only adding the email to the then action and leaving the rest as it is. If you have several properties, we recommend entering the name of the account in the subject line so that you always know which account the alarm comes from.

If the alarm is to be sent to several email addresses, a separate then action must be created for each email address.

</div>
<div className="col col--6 text--center">

![Alarms – Figure 2](/img/konfiguration-wenndann-aktionen-alarme/02.png)

</div>
</div>

<div className="row">
<div className="col col--8">

How often is an alert email sent?

The email is only sent once, when the status deteriorates. If further meters fail before the first one is back online, no further email is sent. 

After the problem has been resolved, we recommend checking in the if/then actions whether "Last triggered" ("Zuletzt ausgelöst") shows "never" ("nie"). If a point in time is shown there, there are still meters that are offline.

If you want to receive more than one email, you must set up two alarms. The first, for example, with 1440 minutes and the second with 7200 minutes. This way, an email that went unnoticed can be sent a second time, for example.

</div>
<div className="col col--4 text--center">

![Alarms – Figure 3](/img/konfiguration-wenndann-aktionen-alarme/03.png)

</div>
</div>

The entire infrastructure is now ready for setting up billing on top of it.
