---
title: 'Multilevel load management'
slug: '/konfiguration/multilevel-lastmanagement'
description: 'Webinar on multilevel load management (50 min)'
sidebar_label: 'Multilevel load management'
---
<Video src="YiiACL00jko" title="YouTube video, webinar recording of the multilevel load management release" />

Webinar on multilevel load management (50 min)

### Technical requirements for using multilevel load management

- Pico firmware version 0.0.25 or higher --> [Perform firmware update](/konfiguration/firmware-update)

- All if/then actions involving the Pico have been deleted so that no conflicting commands are sent to the MLM.

- As of: 12.03.2024
    No support for load shedding via Telstar input contacts --> release of the solution in MLM to follow.

- Load management only works with Telstar CT / Telstar 80A or Nimbus


## Dynamic multilevel load management

Dynamic multilevel load management coordinates the limiting and dynamic capabilities of the individual load groups at house connection and site level.

The task is to make the still available current capacities at each reference point available to the subordinate load groups, thereby protecting the branch points against overload.

Examples of important branch points:

- Site connection

- House connection

- Sub-distribution supply line

- Garage outgoing feeder


At the same time, multilevel load management enables solar optimization and offers functions for peak load smoothing.

Limits of dynamic multilevel load management:

- Max. 1000 devices (charging stations + reference meters)

- Max. 50 branch points (reference points)


![Multilevel load management – figure 1](/img/konfiguration-multilevel-lastmanagement/01.png)

### Overload protection of the branch points (site connection, sub-distributions, house connection)

Maximum current values can be defined for all branches created in multilevel load management. These act as an absolute upper limit for the current consumption and correspond to the fuse rating of the supply lines.

A branch can only exist according to the following scheme:

- Branch with "unmetered loads":
    There are further consumers or producers behind this branch which are not exclusively Pico groups. A reference meter is required to determine the values.

- Branch without "unmetered loads", virtual:
    The downstream consumers consist exclusively of Pico load groups or of "branches with unmetered loads" and a corresponding reference meter.
    The total current can therefore be formed from the sum of these available measurements and corresponds to 100% of the current to be controlled.

    Fields of application:
    \- Limiting the total site current by means of metered sub-distributions (saving a site meter)
    \- Protecting several branching flat cables from one fused outgoing feeder


![Multilevel load management – figure 2](/img/konfiguration-multilevel-lastmanagement/02.png)

![Multilevel load management – figure 3](/img/konfiguration-multilevel-lastmanagement/03.png)

Virtual branch (purple) limits on the basis of a branch with unmetered loads and Pico groups.

### Example setup of a housing development with MLM

![Multilevel load management – figure 4](/img/konfiguration-multilevel-lastmanagement/04.png)

### Solar optimization

Solar optimization enables efficient allocation of surplus current to the subordinate Pico charging groups. This requires at least one "branch with unmetered loads" and a corresponding reference meter.

The optimization can only take place 1x in series (tree from top to bottom) or multiple times in parallel branches.

This means that solar optimization can be implemented for the entire site or only for a specific building.

Example:

- Site optimization: solar optimization active on the branch, reference to the site meter or a virtually created branch on the basis of the metered sub-branches.

- Building optimization: solar optimization active on several branches with reference to the respective house meters.


With solar optimization on the site connection, the charging infrastructure in house A also has access to surplus produced in house B.

![Multilevel load management – figure 5](/img/konfiguration-multilevel-lastmanagement/05.png)

### Minimum charging current: indirect prioritization and peak load smoothing

Each individual Pico load group can be assigned a time-dependent minimum charging current.

The setting is made flexibly for each hour of the day.

This function makes it possible to provide a minimum charging current independently of other parallel optimizations.





Only an exceeded current limit of a branch would have a contrary effect on this.

Provided the minimum charging current can be guaranteed, it limits the direct grid consumption to the set level. 

If solar optimization is in place, the available charging current can rise above the set minimum and is increased accordingly.

Application example:

Reduce charging current during production times in order to reduce load peaks.

Reduce charging current during lunchtime in order to reduce load peaks.

Reduce charging current during the day in order to achieve a higher prioritization of solar power.

Give preference to the outdoor parking space groups over underground garage parking spaces (group prioritization)



Prioritization

Setting the available minimum current of a group implies a certain priority over the other charging station groups. The charging station group with the higher available minimum current at the given time is always given preference by the algorithm.

Example:

26 A per phase are currently available for distribution in the MLM:
Charging group A: minimum current = 10A
Charging group B: minimum current = 20A

Charging group B is supplied with 20A first and charging group A receives the remainder.

![Multilevel load management – figure 6](/img/konfiguration-multilevel-lastmanagement/06.png)

![Multilevel load management – figure 7](/img/konfiguration-multilevel-lastmanagement/07.png)

### Behaviour of multilevel load management in the event of an internet outage

All Pico charging stations must be set with the connection loss setting "Max. current (per group)" (Max. Strom (pro Gruppe)). The other two modes are only permitted for standalone operation.

Function:
Charging groups affected by the loss of internet are regulated back to the level defined by the group. The current is distributed automatically by the charging manager, taking the active charging sessions into account.
Multilevel load management assumes that the lost branches draw the defined group current and subtracts this from the available residual current.

The functioning part of the installation with an active internet connection continues to operate in normal mode with this defined restriction.

![Multilevel load management – figure 8](/img/konfiguration-multilevel-lastmanagement/08.png)

### Load shedding with MLM

Load shedding can be implemented in various ways using the
utility's RSE signal.

- Pico hardware inputs on the rear for transmission to a Pico group.

- Signal to meter inputs and transmission via MLM to all load groups.


More on this under 

[Configure load shedding with MLM](/konfiguration/multilevel-lastmanagement/mlm-konfigurieren)

[Configure load shedding via external inputs](/produkte/pico-ladestation#load-shedding-external-inputs)

![Multilevel load management – figure 9](/img/konfiguration-multilevel-lastmanagement/09.png)

Pico hardware inputs

![Multilevel load management – figure 10](/img/konfiguration-multilevel-lastmanagement/10.png)

Cloud-based load shedding (MLM)

### Limit values of multilevel load management

Maximum number of Picos and reference metering points: 1000

Maximum number of virtual and hardware reference points: 50, 6 in series

Maximum size of an individual charging station group: 200 charging stations

Minimum number of Picos per charging station group: 1

Minimum number of reference points in the MLM: 1 (hardware or virtual)

Maximum number of charging groups: 60 groups


Examples of minimum configurations:

- 1 outgoing feeder with 1-200 charging stations incl. 1 reference point


Examples of a typical maximum configuration:

- 60 outgoing feeders with 16 charging stations each incl. 8 reference points can be created. (Large housing developments with ZEV (association for own consumption))


- 6 outgoing feeders with 150 stations each incl. 50 reference points (public parking complexes)

- 4 outgoing feeders with 200 stations each incl. 50 reference points (public parking complexes)


## Configuring the MLM

[Learn more](/konfiguration/multilevel-lastmanagement/mlm-konfigurieren)
