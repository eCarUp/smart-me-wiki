---
title: 'Multilevel Load Management Error Message'
slug: '/stoerungsbehebung/multilevel-lastmanagement-fehlermeldung'
description: 'The load management group is probably not configured correctly: "Max. current (per group)" is not selected as the cloud connection failure value.'
sidebar_label: 'Multilevel Load Management Error Message'
---
![Multilevel load management error message – figure 1](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/01.png)

![Multilevel load management error message – figure 2](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/02.png)

- The load management group is probably not configured correctly:
    "Max. current (per group)" ("Max. Strom (pro Gruppe)") is not selected as the cloud connection failure value

- The internet failure configuration is not available.
    [Perform a firmware upgrade](/konfiguration/firmware-update) to at least 0.0.25


![Multilevel load management error message – figure 3](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/03.png)

- The load management group was created with Picos that support phase balancing. Every additional Pico must also support phase balancing. This can be added by a [firmware update](/konfiguration/firmware-update) to version 0.0.34 or higher.


![Multilevel load management error message – figure 4](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/04.png)

![Multilevel load management error message – figure 5](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/05.png)

- No text entered in the "Name" ("Name") field


![Multilevel load management error message – figure 6](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/06.png)

- A previously used Pico load group or meter hardware was deleted on the hardware side.
    The MLM must be configured again in order to restore the function.

- Always delete the relevant Pico load groups from the MLM tree first and only then on the hardware, so that the configuration is not destroyed.


## Too little current is always assigned to a group

There can be the following reasons for this:

- There is not enough capacity for all groups --> Reduce the group currents a little to achieve a balance between the groups.

- There is not enough capacity for all groups --> Reduce the group currents temporarily with the minimum current group setting per hour.


## The groups are only ever provided with the internet failure current

![Multilevel load management error message – figure 7](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/07.png)

- The MLM is not active and therefore only distributes the internet failure current for safety reasons --> Activate the MLM and press Save ("Speichern").
