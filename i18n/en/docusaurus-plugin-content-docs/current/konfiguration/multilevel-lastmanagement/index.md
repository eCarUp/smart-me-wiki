---
title: 'Multilevel load management'
slug: '/konfiguration/multilevel-lastmanagement'
description: 'Technical requirements for using the multilevel load management'
sidebar_label: 'Multilevel load management'
---
### Technical requirements for using the multilevel load management

- Pico Firmware Version 0.0.25 or greater --> [How to upgrade firmware](/)

- All If/Then-Actions with "Pico Control" are deleted to not interfere with the MLM decisions

- Situation: 12.03.2024
    No need for load shedding functionality over Telstar meter inputs --> Release of support in MLM is following soon


## Multilevel load management

The multilevel load management coordinates the limiting and dynamic capabilities of the individual load groups at house connection and area level.

The task is to make the remaining free electricity capacities at each reference point available to the subordinate load groups and thus protect the branch points from overload.

Examples of important branch points:

- Area connection

- House connection

- Sub-distribution feeder

- Garage outgoing circuit


At the same time, multilevel load management enables solar optimisation and offers functions for peak load smoothing.

Limits of dynamic multilevel load management:

- Max. 1000 devices (charging stations + reference meter)

- Max. 50 branch junctions (reference points)


![Multilevel load management – figure 1](/img/_en/configuration-multilevel-load-management/01.png)

### Overload protection of the branches (area connection, sub-distribution boards, house connection)

Maximum current values can be defined for all branches created in multilevel load management. These act as an absolute upper limit for the current consumption and correspond to the fuse value of the supply lines.

A branch can only exist according to the following scheme:

- Branch with "unmeasured loads":
    There are other consumers or producers, which are not exclusively pico groups, behind this branch. Reference meter is required for determination.

- Branch without "unmeasured loads", virtual:
    The downstream consumers consist exclusively of pico load groups or "branches with unmeasured loads" and corresponding reference meters. the total current can therefore be calculated from the sum of these available measurements and corresponds to 100% of the current to be controlled. 


Fields of application: 

- Limiting the total area current by means of measured sub-distributions (saving an area meter)

- Protecting several branching ribbon cables from a fused outgoing circuit


![Multilevel load management – figure 2](/img/_en/configuration-multilevel-load-management/02.png)

![Multilevel load management – figure 3](/img/_en/configuration-multilevel-load-management/03.png)

Virtual branch (violet) limited to base branch with unmeasured loads and pico groups.

### Example of a superstructure

![Multilevel load management – figure 4](/img/_en/configuration-multilevel-load-management/04.png)

### Solar optimisation

Solar optimisation enables efficient allocation of surplus electricity to the subordinate Pico charging groups. This requires at least one "branch with unmeasured loads" and a corresponding reference meter.

Optimisation can only be carried out once in series (tree top to bottom) or several times in parallel branches.

This means that solar optimisation can be implemented for the entire area or only for specific buildings.

Example:

- Site optimisation: Solar optimisation active on the branch, reference to the site meter or virtually created branch based on the measured sub-branches.

- Building optimisation: Solar optimisation active on several branches with reference to the respective building meters.


In the case of solar optimisation on the area connection, the charging infrastructure in house A also has surplus energy produced in house B at its disposal.

![Multilevel load management – figure 5](/img/_en/configuration-multilevel-load-management/05.png)

### Minimum charging current: Indirect prioritisation and peak load shaving

Each individual Pico load group can be assigned a time-dependent minimum charging current.

The setting is flexible per hour of the day.

This function makes it possible to provide a minimum charging current independently of other parallel optimisations. 



Only if the current limit of a branch is exceeded would this have the opposite effect.

If the minimum charging current can be guaranteed, this limits the direct grid supply to the set level. 

If solar optimisation is available, however, the available charging current can rise above the set minimum and is increased accordingly.

Example of use:

- Reduce charging current during production times to reduce peak loads.

- Reduce charging current during midday to reduce peak loads.

- Reduce charging current during the day to achieve higher solar power prioritisation.

- Give preference to outdoor parking groups over underground parking spaces (group prioritisation)




### Prioritisation

The setting of the available minimum current of a group sets a certain priority over the other charging station groups. The charging station group with the higher available minimum current at a given time is always prioritised by the algorithm:

Example:

26 A per phase are currently available for distribution in the MLLM: 

Charging group A: Minimum current = 10A
Charging group B: Minimum current = 20A

Charging group B is supplied with 20A first and charging group A receives the rest.

![Multilevel load management – figure 6](/img/_en/configuration-multilevel-load-management/06.png)

![Multilevel load management – figure 7](/img/_en/configuration-multilevel-load-management/07.png)

### Behaviour of the multilevel load management in the event of an internet failure

All Pico charging stations must be set with the connection failure setting "Max. current (per group)". The other two modes are only permitted for individual operation.

Function: 

Charging groups affected by Internet loss are regulated back to the level defined by the group. The current is distributed automatically by the charging manager, taking into account the active charging processes. The multi-level load management assumes that the lost branches are drawing the defined group current and deducts this from the available residual current.

The functional part of the installation with an active internet connection continues to operate in normal mode with this defined restriction.

![Multilevel load management – figure 8](/img/_en/configuration-multilevel-load-management/08.png)

### Load shedding with MLM

The load shedding can be solved via different variants.

- Rear pico hardware inputs for transmission to a pico group.

- Signal to meter inputs and transmission via MLM to all load groups.


For more information, 

see [Configuration of load shedding with MLM](/konfiguration/multilevel-lastmanagement/mlm-konfigurieren#configuration-of-the-load-shedding)

see [Configuration of load shedding via external inputs](/produkte/pico-ladestation#load-shedding-external-inputs)

![Multilevel load management – figure 9](/img/_en/configuration-multilevel-load-management/09.png)

Hardware inputs

![Multilevel load management – figure 10](/img/_en/configuration-multilevel-load-management/10.png)

Cloud based load shedding (MLM)

### Multilevel load management limits

Maximum number of picos and reference counter points: 1000 units

Maximum number of virtual and hardware reference points: 50, 6 in series

Maximum size of the individual charging station group: 200 charging stations

Minimum number of picos per charging station group: 1 piece

Minimum number of reference points in the MLM: 1 piece (hardware or virtual) 

Maximum load group count: 60 pieces



Examples of minimum layouts:

1 feeder with 1-200 charging stations incl. 1 reference point



Examples of a typical maximum design:

- 60 outlets with 16 charging stations each incl. 8 reference points can be created. (Large developments with ZEV)

- 6 outlets with 150 stations each incl. 50 reference points (public car park complexes)

- 4 outlets with 200 stations each incl. 50 reference points (public car park complexes)


## Configure the MLM

[Learn more](/konfiguration/multilevel-lastmanagement/mlm-konfigurieren)
