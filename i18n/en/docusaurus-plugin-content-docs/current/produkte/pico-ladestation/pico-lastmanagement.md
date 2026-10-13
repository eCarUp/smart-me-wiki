---
title: 'Pico load management'
slug: '/produkte/pico-ladestation/pico-lastmanagement'
description: 'The Pico load management system'
sidebar_label: 'Pico load management'
---
## The Pico load management system

The Pico load management system is based on two fundamental functionalities:

- Pico load management load groups

- Multilevel load management functionality


## Pico load management (load groups)

The Pico load group defines a grouping of Pico hardware that shares a power cable or a power distribution.
These settings are stored and saved on the Pico hardware. 

- Maximum current value for the supply line (fuse rating per phase)


The information on the limit values, active charging sessions and distributed current is communicated via a local MESH system (2.4Ghz) within the Pico load group.

The load group functionality performs the following tasks:

### MESH communication

The Pico hardware has a MESH functionality. It enables local communication between the Picos even if Wifi or the mobile connection to the internet is not available. The MESH can also connect charging stations without direct access point access to the cloud via neighbouring Picos. However, this requires that they are together in one charging group and that a Wifi is available.

The MESH network can support a maximum of 200 charging stations in one load group.

In any case, the MESH transmits the load management values and decisions relating to the group from the master to the other group members.

The members of the MESH network do not need direct contact with the master Pico, but can also connect to the MESH master (A) via up to 5 neighbouring charging stations.

Each Pico can act as a distribution point for up to 6 devices at the same time.

The Pico master is selected appropriately by the group itself and optimises itself continuously.

The maximum range of a connection between individual Picos is 30 metres without obstacles and approx. 10m with obstacles.

Note:
Care should be taken that all Picos on one and the same e-mobility outgoing circuit can be in the same charging group. (Structural measure)

If this is not possible due to the locations of the Picos, several charging groups on one cable can also be managed using multilevel load management.

In this case, it is recommended to form groups of e.g. 3, 6 or 9 in order to use the single-phase switching as efficiently as possible.

The load group function has no requirements regarding an identically named hotspot or identical access credentials for the internet connection. The MESH is a separate system and is based solely on the devices of the load group being able to reach each other.

![Pico load management – Figure 1](/img/produkte-pico-ladestation-pico-lastmanagement/01.png)

![Pico load management – Figure 2](/img/produkte-pico-ladestation-pico-lastmanagement/02.png)

### Behaviour in the event of a connection failure

The static Pico charging groups can continue to ensure the charging function in the event of an internet connection failure. 

The following three values can be selected for this:

- No action
    (No control, vehicles that are charging continue to charge with the previously released current, but starting new charging sessions is not possible)

- Minimum current:
    This Pico reduces to its configured minimum power (individually).

- Max. current (per group)
    (Only setting compatible with multilevel load management)
    The individual Pico receives a fraction of the defined charging power of the charging group.
    The individual power is automatically distributed to active charging sessions by the charging manager.


![Pico load management – Figure 3](/img/produkte-pico-ladestation-pico-lastmanagement/03.png)

### Overload protection of the outgoing circuit or supply line

The load groups receive at most the "fused current" for free use and distribution to active charging sessions. This ensures that the Pico load group never draws more current than is permitted.

### Charging current distribution to active charging sessions

The available charging current is automatically distributed to active charging sessions. The available currents are distributed as fairly as possible.

In this example, 63A is distributed to four active charging stations.
63 A / 4 active charging sessions = 15.75A per station.

The charging currents are assigned to the active charging sessions in whole numbers.

![Pico load management – Figure 4](/img/produkte-pico-ladestation-pico-lastmanagement/04.png)

### Phase switching and phase balancing

Pico has active phase switching, which fulfils two functions:

- Phase balancing for load symmetry among active charging sessions

- Distribution of energy in the event of undersupply


Load symmetry:

The Pico identifies single-phase vehicles and assigns them to a phase accordingly for charging. If more single-phase vehicles are added during charging, the Pico group automatically selects a phase that is not yet loaded for this vehicle.

The symmetry follows several rules, which can also force three-phase vehicles into single-phase mode if the asymmetry becomes too great. 

Undersupply:

The Pico uses the available current in three phases as long as the configured three-phase minimum can be maintained, e.g. three-phase 6A.
(The threshold can be influenced via the minimum current of the individual Picos.)

If an additional vehicle is added and three-phase charging at the configured minimum current can no longer be supplied to all vehicles, charging stations gradually switch to single-phase charging mode to ensure the highest possible efficiency.

It is therefore possible for three-phase and single-phase charging sessions to take place in parallel within one charging group.

The active charging sessions are distributed evenly across the three phases and the available current is shared among them. 

The algorithm also takes paused or completed charging sessions into account accordingly.

Paused charging sessions reserve the minimum current required, e.g. to ensure vehicle auxiliary heating functions.

Note:
The availability of at least 6A is a requirement of the vehicle and must be guaranteed by the charging station at all times. This applies regardless of whether the station is in three-phase or single-phase operation. If the value falls below this, the vehicle stops charging on its own or does not start charging at all.

Some older vehicles do not even start charging if less than 8A is available.

Tip: Configure public stations for visitors or filling stations with a minimum of 8A.



![Pico load management – Figure 5](/img/produkte-pico-ladestation-pico-lastmanagement/05.png)

Situation: The available current is not sufficient to supply all vehicles with the three-phase minimum.
\--> The charging stations are all switched to single-phase charging.

![Pico load management – Figure 6](/img/produkte-pico-ladestation-pico-lastmanagement/06.png)

Situation: The available current would be sufficient for all devices at the same time, but a paused charging session would tie up too much energy. The charging station with the fully charged vehicle is set to single-phase in order to release capacity to the other three-phase charging sessions.

## Multilevel load management (MLM)

Multilevel load management enables dynamic control of Pico charging groups across site connections, distribution, building connections and sub-distribution boards.

In addition, it enables prioritisation of charging groups as well as solar optimisation functions.

[Learn more](/konfiguration/multilevel-lastmanagement)
