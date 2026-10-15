---
title: 'Multilevel load management error message'
slug: '/stoerungsbehebung/multilevel-lastmanagement-fehlermeldung'
description: 'The load management group is probably not configured correctly: "Max.'
sidebar_label: 'Multilevel load management error message'
---
![Multilevel load management error message – Figure 1](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/01.png)

![Multilevel load management error message – Figure 2](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/02.png)

- The load management group is probably not configured correctly:
    "Max. current (per group)" ("Max. Strom (pro Gruppe)") is not selected as the cloud connection failure value (Cloudverbindungsausfallwert)

- The internet failure configuration (Internetausfallskonfiguration) is not available.
    [Perform a firmware upgrade](/konfiguration/firmware-update) to at least 0.0.25


![Multilevel load management error message – Figure 3](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/03.png)

- The load management group was created with Picos that support phase balancing. Every additional Pico must also support phase balancing. This can be added with a [firmware update](/konfiguration/firmware-update) to version 0.0.34 or later.


![Multilevel load management error message – Figure 4](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/04.png)

![Multilevel load management error message – Figure 5](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/05.png)

- No text entered in the "Name" field


![Multilevel load management error message – Figure 6](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/06.png)

- A previously used Pico load group or meter hardware has been deleted on the hardware side.
    The MLM must be configured again to restore the function.

- Always delete the relevant Pico load groups from the MLM tree first and only then on the hardware, so that the configuration is not destroyed.


## Too little current is always allocated to a group

There may be the following reasons for this:

- There is not enough capacity for all groups --> Reduce the group currents slightly to achieve a balance between the groups.

- There is not enough capacity for all groups --> Reduce the group currents temporarily with the minimum current (Minimalstrom) group setting per hour.


## The groups are only ever provided with the internet failure current

![Multilevel load management error message – Figure 7](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/07.png)

- The MLM is not active and therefore, for safety reasons, only distributes the internet failure current --> Activate (Aktivieren) the MLM and press Save (Speichern).
