---
title: 'Pico load management'
slug: '/produkte/pico-ladestation/pico-lastmanagement'
description: 'The Pico load management system'
sidebar_label: 'Pico load management'
---
## The Pico load management system

The Pico load management system is based on two basic functionalities.

- Pico load management groups

- Multilevel load management functionality (MLM)


## Pico load management groups

The Pico load group defines a grouping of Pico hardware that share a power cable or power distribution. these settings are stored and saved on the Pico hardware. 

- Maximum current value for the supply line (fuse value per phase)


The information on the limit values, active loads and distributed current is communicated via a local MESH system (2.4Ghz) within the Pico load group.

The load group functionality fulfils the following tasks:

### MESH communication

The Pico hardware has MESH functionality. This enables local communication between the Picos even if Wi-Fi or the mobile connection to the internet is not guaranteed. The MESH can also connect charging stations without direct access point access to the cloud via neighbouring Picos. However, the prerequisite for this is that they are located together in a charging group and Wi-Fi is available.

The MESH network can support a maximum of 200 charging stations in a load group.

In each case, the MESH transmits the load management values and decisions relating to the group from the master to the other group members.

The members of the MESH network do not require direct contact with the master pico, but can also establish a connection to the MESH master (A) via up to 5 neighbouring charging stations.

Each pico can be a distribution point for up to 6 devices simultaneously.

The pico master is selected by the group itself and optimises itself continuously.

The maximum range of a connection between the individual picos is 30 metres without obstacles and approx. 10m with obstacles.

Note: 

Care should be taken to ensure that all Picos, located at the same e-mobility outlet, can stay in the same charging group. (Structural measure)

If this is not possible due to the location of all Picos, multiple charging groups can also be managed on one cable with the help of multi-level load management.

In this case, it is advisable to form groups of 3, 6 or 9,... picos, in order to utilise the single-phase switching as efficiently as possible.

The load group function has no requirements for the hotspot of the same name or identical access data for connecting to the Internet. The MESH is a separate system and is only based on the fact that the devices in the load group can reach each other.

![Pico load management – figure 1](/img/_en/products-pico-ev-charger-pico-load-management/01.png)

![Pico load management – figure 2](/img/_en/products-pico-ev-charger-pico-load-management/02.png)

### Behaviour in the event of a connection failure

The static Pico charging groups can continue to guarantee the charging function in the event of an Internet connection failure. 

The following three values can be selected for this:

- No action (no control, charging vehicles continue to charge with the previously enabled current, but it is not possible to start new charges)

- Minimum current: This Pico returns to its set minimum power (individual).

- Max. Current (per group) (only compatible setting with multilevel load management)
    The individual pico receives a fraction of the defined charging power of the charging group. The individual power is automatically distributed to active charges by the charging manager.


![Pico load management – figure 3](/img/_en/products-pico-ev-charger-pico-load-management/03.png)

### Overload protection of the outgoing circuit or supply line

The load groups receive a maximum of the "fused current" for free disposal and distribution to active loads. This ensures that the Pico load group never draws more current than is permitted.

### Charging current distribution to active charges

The available charging current is automatically distributed to active loads. The available currents are distributed as fairly as possible.

In this example, 63A is distributed to four active charging stations.

63 A / 4 active charges = 15.75A per station.

The charging currents are allocated to the active charges in whole numbers.

![Pico load management – figure 4](/img/_en/products-pico-ev-charger-pico-load-management/04.png)

### Phase switching and phase balancing

Pico has active phase switching which fulfills two functions:

- Phase balancing for load balancing under active loads

- Distribution of energy in the event of undersupply


Load balancing:

Pico identifies 1-phase vehicles and assigns them to a phase for charging accordingly. If more single-phase vehicles are added during the charging process, the Pico group automatically selects a phase that is not yet loaded for this vehicle.

The symmetry obeys several rules which can also force 3-phase vehicles into 1-phase mode if the asymmetry becomes too great. 

Undersupply:

Pico has active phase switching and enables switching to 1-phase operation if the current availability is too low.

The Pico charges the available current in 3-phase mode as long as the set 3-phase minimum can be maintained, e.g. 3-phase 6A. (The threshold can be influenced via the minimum current of the individual Picos). 

If an additional vehicle is added and the 3-phase charging at the set minimum current can no longer be supplied to all vehicles, charging stations gradually switch to 1-phase charging mode to ensure the highest possible efficiency.

It is therefore possible for 3-phase charging and 1-phase charging to take place in parallel in a charging group.

The active charges are distributed evenly across the three phases and the available current is distributed. 

The algorithm also takes paused or terminated charges into account accordingly.

Paused charges reserve the minimum current required to ensure vehicle preheating functions, for example.

Note: 

The availability of at least 6A is a requirement of the vehicle and must be guaranteed by the charging station at all times, whether in 3-phase or 1-phase operation. If the value falls below this, the vehicle will stop charging without authorisation or the vehicle will not even start charging.

Some older vehicles even fail to start charging if less than 8A is available.

Tip: Configure public stations for visitors or petrol stations with a minimum of 8A.



![Pico load management – figure 5](/img/_en/products-pico-ev-charger-pico-load-management/05.png)

Situation: The available current is not sufficient to supply all vehicles with the minimum 3-phase current. --> The charging stations are all switched to single-phase charging.

![Pico load management – figure 6](/img/_en/products-pico-ev-charger-pico-load-management/06.png)

Situation: The available current would be sufficient for all devices at the same time, but a paused charge would tie up too much energy. The charging station with the fully charged vehicle is set to 1-phase in order to transfer capacity to the other 3-phase charges.

## Pico multilevel load management (MLM)

Multilevel load management enables the dynamic control of pico charging groups across house connections, distribution and house internal sub distributions.

It also enables prioritisation of charging groups and solar optimisation functions.

[Learn more](/konfiguration/multilevel-lastmanagement)
