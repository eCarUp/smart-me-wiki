---
title: 'Alarms'
slug: '/konfiguration/wenndann-aktionen/alarme'
description: 'Alerts can be set up to receive an email when counter is no longer connected to our cloud.'
sidebar_label: 'Alarms'
---
Alerts can be set up to receive an email when counter is no longer connected to our cloud.

### Requirement

You need a smart-me Limited or Professional subscription to use this feature.

## If event / No connection

Under [If / Then Action](/konfiguration/wenndann-aktionen) we go into more detail.

An if event can be set that triggers when a meter no longer has a connection to the cloud. The following settings must be made:

- If one folder is selected, all associated meters will be monitored. If multiple folders are selected, please select an OR.

- If one meter is selected, only this meter will be monitored.


Definition of downtime: 

- General: The 1440 minutes (1 day) prevents a false alarm in case of a short internet interruption for smart-me meters.

- Pico: When alerting to check pico connected to a backend, it may be useful to shorten this time, e.g. to 15 or 60 minutes. This prevents a station from being out of service for too long.


![Alarms – figure 1](/img/_en/configuration-if-then-action-alarms/01.png)

## Then action / alarm

If the if events have occurred, an email will be sent. The following settings must be made:

- Name of the alarm

- Subject: Subject of alarm e-mail

- Message: Text, which is contained in the alarm e-mail


Note: We recommend to complete the Then action only with the e-mail and leave the rest as it is. If you have several properties, we recommend to add the name of the account in the subject, so that you always know from which account the alarm comes.

If the alarm should go to several mail addresses, a Then action must be made for each individual mail.

![Alarms – figure 2](/img/_en/configuration-if-then-action-alarms/02.png)

Now the infrastructure is ready to configure a billing.

### Next step

[Go to billing configuration](/konfiguration/billing)
