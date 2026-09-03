---
title: 'Configure multilevel load management'
slug: '/konfiguration/multilevel-lastmanagement/mlm-konfigurieren'
description: 'Configuring the multilevel load management (MLM)'
sidebar_label: 'Configure multilevel load management'
---
## Configuring the multilevel load management (MLM)

Multilevel load management is configured in the "Multilevel load management" area in the main navigation bar

The function enables:

- Dynamic control of several Pico charging groups

- Limitation of charging power to reference points within the installation or area

- Solar optimisation

- Load peak reductions

- Charging group prioritisation


![Configure multilevel load management – figure 1](/img/_en/configuration-multilevel-load-management-configure-the-mlm/01.png)

### Definition of terms

Multilevel load management can be regarded as a tree, whereby the following terms and usages exist:

- trunk (main connection point of the installation)

- Branches (limiting points such as branches, house connections, sub-distribution boards, summation feeders)

- Leaves (static pico load groups)




The trunk and branches can fulfil several functions:

- Current limitation (maximum fuse protection)

- Solar optimisation ON or OFF

- Unmeasured loads present (active or inactive)




Unmeasured load:

An unmeasured load corresponds to a producer or consumer that does not correspond to a Pico charging station group. In order to be able to dynamically take this production or load into account, a meter hardware must be provided as a reference. (Measured branch)

The branch can also be statically limited without a reference meter, but must be limited to a functional maximum, taking into account the base load, for protection.

Typical branches with unmeasured loads: 

- House connections (flats, solar systems, battery storage, outdoor lighting)

- Sub-distribution boards (networking of several building complexes, UV East, UV West,...)

- E-mobility outlets (Pico standby consumption and garage lighting)


![Configure multilevel load management – figure 2](/img/_en/configuration-multilevel-load-management-configure-the-mlm/02.png)

![Configure multilevel load management – figure 3](/img/_en/configuration-multilevel-load-management-configure-the-mlm/03.png)

### Add or delete branch

Add:

Select the trunk or branch and create an additional branch using "Add branch".

Delete:

By selecting the corresponding branch and the "Delete" function, the selected branch and all branches attached to it are deleted.

To ensure that the following is retained, the branches and groups can be attached to another branch or trunk beforehand using the drag & drop function.





![Configure multilevel load management – figure 4](/img/_en/configuration-multilevel-load-management-configure-the-mlm/04.png)

### Add charging station groups to the tree

The charging station groups for the MLM that have not yet been assigned and correctly configured can be found on the right-hand side.

These can be added to the branches using the drag & drop function and can also be moved within the configuration using drag & drop.



Note: 

A prerequisite for use in the MLM is that the connection failure setting is configured to "Max. current (per group)".

This can be adjusted on a Pico charging station in the "Configuration".



![Configure multilevel load management – figure 5](/img/_en/configuration-multilevel-load-management-configure-the-mlm/05.png)

![Configure multilevel load management – figure 6](/img/_en/configuration-multilevel-load-management-configure-the-mlm/06.png)

### Solar optimisation and minimum current per charging group

Branch configuration:

Solar optimisation is possible once on the trunk (area-optimised) or several times in parallel on branches with active unmeasured loads, e.g. house connections.

Depending on the selection, the solar surplus is optimised on all charging station groups or only on some of the charging station groups.





Group configuration:

In order for solar optimisation to have the appropriate effect, the station groups to be optimised must be temporarily assigned a reduced minimum charging current; this minimum charging current is defined on the corresponding charging group (group configuration) and corresponds to the maximum possible grid consumption for the charging group in the defined hours.

At the same time, the setting of the minimum charging current can also be used for peak load interruption.

Each group can be configured in different ways.

Groups with a higher minimum charging current are prioritised in the distribution of available grid power.

![Configure multilevel load management – figure 7](/img/_en/configuration-multilevel-load-management-configure-the-mlm/07.png)

![Configure multilevel load management – figure 8](/img/_en/configuration-multilevel-load-management-configure-the-mlm/08.png)

### Saving and activating the configuration

The changes in the configuration are only saved if the configuration is also activated.

If activation cannot be carried out due to incorrect configuration, this may be due to the following points:

- The charging group is not configured correctly for the MLM (Internet failure setting is not set to Max. current per group)

- Individual devices that are relevant for the MLM are not online at the time of saving. (bring online)


![Configure multilevel load management – figure 9](/img/_en/configuration-multilevel-load-management-configure-the-mlm/09.png)

### Deleting the MLM configuration

The configuration of an MLM can be deleted in its entirety at the touch of a button to create a new configuration.

![Configure multilevel load management – figure 10](/img/_en/configuration-multilevel-load-management-configure-the-mlm/10.png)

### Configuration of the load shedding

The MLM has an integrated load shedding controller.

This control can be used instead of the hardware inputs on the rear of the Pico charging stations. 

Notes: 

- Signals that are directly attached to Pico hardware cannot be overridden with this function. 

- The function requires an active internet connection to work. In the event of internet loss, the set internet failure value of the pico groups is used.


The function enables one or more digital signals from energy suppliers to be interpreted and a reduced charging power to be allocated to all charging station groups of the MLM.

The control signals are wired to one or two nearby meter inputs (E1).

The smart-me Telstar CT and Telstar 80A hardware are compatible for this.

Note: 

In order for the inputs to be used, they must be configured to "digital input" on the hardware side.
(Meter settings, E1 --> Digital input)

Control configurations:

With only one signal:

- 1-stage: 0% reduction, variable reduction (10-100%)


With two signals:

- 4-stage: 0% reduction, variable reduction, variable reduction, 100% reduction

- 3-stage: 0% reduction, variable reduction (both at the same level), 100% reduction




Percentages apply to EnWG14a in Germany:

For 22kW systems, a reduction of 82% corresponds to the promise of 4200W minimum power per appliance in the installation.

For 11kW systems, a reduction of 73% corresponds to the promise of 4200W minimum power per device in the installation.

Signal interpretation:

The signal can be interpreted in different ways.

If the signal is removed by the energy supplier in the load shedding case (230V --> 0V), "Low active" is the correct configuration.

- No signal (0) = 1 = Available energy is reduced


If the signal from the energy supplier is applied in the load shedding case (0V --> 230V), "High active" must be selected.

- Signal (1) = 1 = Available energy is reduced.


[Deatils on external circuitry and configuration of counters](/schnittstellen/ein_und_ausgaenge)

![Configure multilevel load management – figure 11](/img/_en/configuration-multilevel-load-management-configure-the-mlm/11.png)

![Configure multilevel load management – figure 12](/img/_en/configuration-multilevel-load-management-configure-the-mlm/12.png)

![Configure multilevel load management – figure 13](/img/_en/configuration-multilevel-load-management-configure-the-mlm/13.png)

### Activate and deactivate the MLM processor

The configuration of an MLM can be deactivated and re-activated.

- Stops calculation process

- Gives all load groups their defined fallback current for free use during the deactivation phase.


Choose if the MLM shall be active or inactive and then store the configuration to submit the decision to the processor.

![Configure multilevel load management – figure 14](/img/_en/configuration-multilevel-load-management-configure-the-mlm/14.png)

## Example configuration: House with e-mobility outlet + garage lighting, solar system and midday peak shaving

- The trunk here corresponds to the house connection

- The fuse protection of the connection corresponds to 100A per phase.

- The solar optimisation here is on the house connection.

- Solar system production and in-house consumption are measured and taken into account using the "Telstar 80A house connection" meter.


![Configure multilevel load management – figure 15](/img/_en/configuration-multilevel-load-management-configure-the-mlm/15.png)

![Configure multilevel load management – figure 16](/img/_en/configuration-multilevel-load-management-configure-the-mlm/16.png)

The subordinate emobility output is actively measured here to take the garage lighting into account. The charging groups should thus react dynamically to the garage lighting.

- The garage lighting is taken into account with the reference meter "E-mobility outgoing feeder 63A Telstar 80A".

- The fuse protection of the outgoing circuit corresponds to 63A per phase.


![Configure multilevel load management – figure 17](/img/_en/configuration-multilevel-load-management-configure-the-mlm/17.png)

![Configure multilevel load management – figure 18](/img/_en/configuration-multilevel-load-management-configure-the-mlm/18.png)

In order for the solar optimization to be effective, the minimum amount of charging current is reduced throughout the day.

- The minimum amount of electricity corresponds to the maximum possible grid consumption at the defined hour.

- As soon as the minimum amount of electricity is covered by 100% from the solar system, the stations also receive the additional surplus from the solar system.

- Solar optimization for the whole week from 6:00 a.m. to 5:00 p.m. minimum charging current of 15A per phase

- Peak smoothing at midday: Charging from 12:00 p.m. to 1:00 p.m. is only possible when there is a solar surplus, the grid consumption remains at 0A

- Nightly charging from 6:00 p.m. to 10:00 p.m. is possible with 50% capacity.

- Nightly charging from 10 p.m. to 7 a.m. is possible with 100% capacity.
    (e.g. exhaustion of off-peak tariffs)


![Configure multilevel load management – figure 19](/img/_en/configuration-multilevel-load-management-configure-the-mlm/19.png)

![Configure multilevel load management – figure 20](/img/_en/configuration-multilevel-load-management-configure-the-mlm/20.png)

## Example configuration: Area with several houses, solar systems and e-mobility outlets

- ZEV area with 3 houses

- Every house has an underground car park

- Several charging groups in underground car parks

- TG1 has outdoor parking spaces for visitors as well as tenant parking spaces

- Houses TG1 and TG2 have solar systems

- Solar optimization on the area so that TG3 can also benefit from solar energy.

- Area protection 300A per phase

- House fuses 180A per phase

- E-mobility outputs 63 A or 32A per phase


![Configure multilevel load management – figure 21](/img/_en/configuration-multilevel-load-management-configure-the-mlm/21.png)

- The ampere value corresponds to the protection of the supply line

- Measuring point is secured but itself unmeasured. Since the following branches all have measurements and these correspond to 100% of the area's consumption, the trunk can be limited virtually.

- Solar power optimization on the trunk (area) active. (Availability of solar power for all three houses)


![Configure multilevel load management – figure 22](/img/_en/configuration-multilevel-load-management-configure-the-mlm/22.png)

![Configure multilevel load management – figure 23](/img/_en/configuration-multilevel-load-management-configure-the-mlm/23.png)

HAK TG1: House connection for building 1 in the area

- Fuse 180A per phase

- Unmeasured loads active: Apartments, Heating, Lighting, General, Solar

- Dynamic consideration of apartments and heat pumps


![Configure multilevel load management – figure 24](/img/_en/configuration-multilevel-load-management-configure-the-mlm/24.png)

![Configure multilevel load management – figure 25](/img/_en/configuration-multilevel-load-management-configure-the-mlm/25.png)

TG1 e-mobility feed

- Fuse 63A per phase

- Unmeasured loads active: garage lighting and ventilation in addition to the e-charging stations

- Dynamic consideration of garage lighting and ventilation


![Configure multilevel load management – figure 26](/img/_en/configuration-multilevel-load-management-configure-the-mlm/26.png)

![Configure multilevel load management – figure 27](/img/_en/configuration-multilevel-load-management-configure-the-mlm/27.png)

Visitor parking spaces in the area (public charging stations)

- High energy availability and prioritization at a higher selling price. Published via ecarup backend. (backend authentication)

- Permanently 100% of the possible capacity from the grid + solar coverage.

- Load peak break at midday from 12:00 to 1:00 p.m. only 23A per phase of the network + solar surplus.

- Cable protection 63A per phase


![Configure multilevel load management – figure 28](/img/_en/configuration-multilevel-load-management-configure-the-mlm/28.png)

![Configure multilevel load management – figure 29](/img/_en/configuration-multilevel-load-management-configure-the-mlm/29.png)

Tenant parking spaces in the area

- Medium energy availability and prioritization, focus on solar energy throughout the day.

- Permanently 50% of the possible capacity from the network.

- Cable protection 32A per phase.

- Load peak break at midday 0A from 12:00 to 13:00. Only solar charging possible if production from the area is not used for something else.


![Configure multilevel load management – figure 30](/img/_en/configuration-multilevel-load-management-configure-the-mlm/30.png)

![Configure multilevel load management – figure 31](/img/_en/configuration-multilevel-load-management-configure-the-mlm/31.png)

Untreated installation parts:

- The house connections and e-mobility outlets in houses 2 and 3 are identical in terms of configuration.

- The 4 charging groups in underground car park 3 (TG3) are configured similarly to the tenant parking spaces in underground car park 1 (TG1).

- Each charging group can form separate behaviors and also receive different emergency supply streams in the event of an Internet failure.




![Configure multilevel load management – figure 32](/img/_en/configuration-multilevel-load-management-configure-the-mlm/32.png)
