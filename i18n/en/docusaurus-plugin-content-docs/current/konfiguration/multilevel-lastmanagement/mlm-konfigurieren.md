---
title: 'Configure multilevel load management'
slug: '/konfiguration/multilevel-lastmanagement/mlm-konfigurieren'
description: 'Configuring a dynamic multilevel load management system (MLM)'
sidebar_label: 'Configure multilevel load management'
---
## Configuring a dynamic multilevel load management system (MLM)

Multilevel load management is configured in the "Multilevel load management" ("Multilevel Lastmanagement") section of the main navigation

The function allows:

- Dynamic control of several static Pico charging groups

- Limiting the charging power to reference points within the installation or site

- Solar optimizations

- Peak load reduction

- Charging group prioritization


![Configure multilevel load management – figure 1](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/01.png)

### Definition of terms

Multilevel load management can be regarded as a tree, with the following terms and uses:

- Trunk (main connection point of the installation)

- Branches (limiting points such as junctions, house service connections, sub-distribution boards, aggregate outgoing feeders)

- Leaves (static Pico charging groups)




The trunk and the branches can take on several functions:

- Current limiting (maximum fuse protection)

- Solar optimization ON or OFF

- Unmetered loads present (active or inactive)




Unmetered loads:

An unmetered load is a producer or consumer that does not correspond to a Pico charging station group. In order to take this production or load into account dynamically, meter hardware must be provided as a reference. (Metered branch)

The branch can also be limited statically without a reference meter, but must then be restricted to a functional maximum of the fuse protection, taking the base load into account.

Typical branches with unmetered loads:

- House service connections (apartments, solar systems, battery storage, exterior lighting)

- Sub-distribution boards (networking of several building complexes, sub-distribution east, sub-distribution west, ...)

- E-mobility outgoing feeders (Pico standby consumption and garage lighting)


![Configure multilevel load management – figure 2](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/02.png)

![Configure multilevel load management – figure 3](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/03.png)

### Adding or deleting a branch

Adding:

Select the trunk or branch and use "Add branch" ("Ast hinzufügen") to create an additional branch or junction.

Deleting:

Selecting the corresponding branch and using the "Delete" ("Löschen") function deletes the selected branch as well as all branches attached to it.

To keep what follows, the branches and groups can first be attached to another branch or to the trunk using drag & drop.





![Configure multilevel load management – figure 4](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/04.png)

### Adding charging station groups to the tree

The charging station groups that are not yet assigned and are correctly configured for the MLM are located on the right-hand side.

They can be attached to the branches using drag & drop and can also be moved within the configuration using drag & drop.



Note:
A prerequisite for use in the MLM is that the connection failure setting is configured to "Max. current (per group)" ("Max. Strom (pro Gruppe)").

This can be adjusted on a Pico charging station under "Configuration" ("Konfiguration").



![Configure multilevel load management – figure 5](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/05.png)

![Configure multilevel load management – figure 6](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/06.png)

### Solar optimization and minimum current per charging group

Branch configuration:

Solar optimization is possible once on the trunk (site-optimized) or several times in parallel on branches with active unmetered loads, e.g. house service connections.

Depending on the choice, the solar surplus is optimized across all charging station groups or only across some of the charging station groups.





Group configuration:

For solar optimization to have the corresponding effect, the station groups to be optimized must temporarily be assigned a reduced minimum charging current.
This minimum charging current is defined on the corresponding charging group (group configuration) and corresponds to the maximum possible grid consumption for the charging group during the defined hours.

At the same time, the minimum charging current setting can also be used to practise peak load shaving.

Each group can be configured in a different way.

Groups with a higher minimum charging current are given priority when available grid current is distributed.

![Configure multilevel load management – figure 7](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/07.png)

![Configure multilevel load management – figure 8](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/08.png)

### Saving and activating the configuration

Changes to the configuration are only saved if the configuration is also activated.

If activation cannot be carried out because of misconfigurations, this may be due to the following points:

- The charging group is not correctly configured for the MLM (internet failure setting is not set to Max. current per group)

- Individual devices that are relevant for the MLM are not online at the time of saving. (bring online)


![Configure multilevel load management – figure 9](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/09.png)

### Deleting the MLM configuration

The configuration of an MLLM can be deleted in its entirety at the push of a button in order to enter a new configuration.

![Configure multilevel load management – figure 10](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/10.png)

### Configuring load shedding

The MLM has integrated load shedding control.

This control can be used instead of the hardware inputs on the back of the Pico charging stations.

Notes:

- Signals that are connected directly to Pico hardware cannot be overridden with this function.

- The function requires an active internet connection in order to work. If the internet connection is lost, the configured internet failure value of the Pico groups is used.


The function makes it possible to interpret one or more digital signals from utilities and to assign reduced charging power to all charging station groups of the MLM.

The control signals are wired to one or two nearby meter inputs (E1).

smart-me Telstar CT and Telstar 80A hardware are compatible for this.

Note:
For the inputs to be used, they must be configured on the hardware side as "Digital input" ("Digitaler Eingang"). (Meter settings, E1 --> Digital input)

Control configurations:

With only one signal:

- 1-stage: 0% reduction, variable reduction (10-100%)


With two signals:

- 4-stage: 0% reduction, variable reduction, variable reduction, 100% reduction

- 3-stage: 0% reduction, variable reduction (both the same level), 100% reduction


Applying percentages to EnWG14a in Germany:

- For 22kW systems, a reduction of 82% corresponds to the promise of 4200W minimum power per device in the installation.

- For 11kW systems, a reduction of 73% corresponds to the promise of 4200W minimum power per device in the installation.


Signal interpretation:

The signal can be interpreted in different ways.

If the signal is removed by the utility in the event of load shedding (230V --> 0V), then "Low-active" ("Low-Aktiv") is the correct configuration.

No signal (0) = 1 = Available energy is reduced

If the utility's signal is applied in the event of load shedding (0V --> 230V), then "High-active" ("High-Aktiv") must be selected.

Signal (1) = 1 = Available energy is reduced.

[Wiring and configuration of meter inputs](/schnittstellen/ein_und_ausgaenge)

![Configure multilevel load management – figure 11](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/11.png)

![Configure multilevel load management – figure 12](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/12.png)

![Configure multilevel load management – figure 13](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/13.png)

### Activating and deactivating the MLM processor

The MLM configuration can be deactivated and re-activated at any time.

- Stops the calculation process and the active assignment of values from reference points.

- Makes the defined internet failure value freely available to all subordinate load groups.


Set the value to active or inactive and then save the configuration to communicate it to the processor.

![Configure multilevel load management – figure 14](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/14.png)

## Example configuration: house with e-mobility outgoing feeder + garage lighting, solar system and midday peak load shaving

- Here the trunk corresponds to the house service connection

- The fuse protection of the connection is 100A per phase.

- Solar optimization is located on the house service connection here.

- The solar system production as well as the house's own consumption is measured and taken into account by means of the "Hausanschluss Telstar 80A" meter.


![Configure multilevel load management – figure 15](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/15.png)

![Configure multilevel load management – figure 16](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/16.png)

The subordinate e-mobility outgoing feeder is actively metered here in order to take the garage lighting into account. The charging groups should thus react dynamically to the garage lighting.

- The garage lighting is taken into account with the reference meter "E-Mobilitätsabgang 63A Telstar 80A".

- The fuse protection of the outgoing feeder is 63A per phase.


![Configure multilevel load management – figure 17](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/17.png)

![Configure multilevel load management – figure 18](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/18.png)

For solar optimization to take effect, the minimum current amount of the charging current is reduced over the course of the day.

- The minimum current amount corresponds to the maximum possible grid consumption at the defined hour.

- As soon as the minimum current amount is covered 100% by the solar system, the stations additionally receive the additional surplus from the solar system.

- Solar optimization for the whole week from 6:00 to 17:00, minimum charging current of 15A per phase

- Peak shaving at midday: charging from 12:00 to 13:00 is only possible with solar surplus, grid consumption remains at 0A

- Night charging from 18:00 to 22:00 is possible at 50% capacity.

- Night charging from 22:00 until 7:00 in the morning is possible at 100% capacity.
    (e.g. making full use of the off-peak tariff)


![Configure multilevel load management – figure 19](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/19.png)

![Configure multilevel load management – figure 20](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/20.png)

## Example configuration: site with several houses, solar systems and e-mobility outgoing feeders

- ZEV (association for own consumption) site with 3 houses

- Every house has an underground car park

- Several charging groups in underground car parks

- TG1 has outdoor parking spaces for visitors as well as tenant parking spaces

- Houses TG1 and TG2 have solar systems

- Solar optimization across the site, so that TG3 can also benefit from solar energy

- Site fuse protection 300A per phase

- House fuse protection 180A per phase

- E-mobility outgoing feeders 63 A or 32A per phase


![Configure multilevel load management – figure 21](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/21.png)

- The ampere value corresponds to the fuse protection of the supply line

- The measuring point is fuse-protected but itself unmetered.
    Since the subsequent branches all have measurements and these correspond to 100% of the site's consumption, the trunk can be limited virtually.

- Solar power optimization on the trunk (site) active. (Availability of solar power for all three houses)


![Configure multilevel load management – figure 22](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/22.png)

![Configure multilevel load management – figure 23](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/23.png)

HAK TG1: house service connection of building 1 on the site

- Fuse protection 180A per phase

- Unmetered loads active: apartments, heating, lighting, general, solar

- Dynamic consideration of the apartments and heat pumps


![Configure multilevel load management – figure 24](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/24.png)

![Configure multilevel load management – figure 25](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/25.png)

TG1 e-mobility outgoing feeder

- Fuse protection 63A per phase

- Unmetered loads active: garage lighting and ventilation in addition
    to the EV charging stations

- Dynamic consideration of the garage lighting and ventilation


![Configure multilevel load management – figure 26](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/26.png)

![Configure multilevel load management – figure 27](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/27.png)

Visitor parking spaces on the site (public charging stations)

- High energy availability and prioritization at a higher sales price.
    Published via the eCarUp backend. (backend authentication)

- Permanently 100% of the possible capacity from the grid + solar coverage.

- Peak load shaving at midday from 12:00 to 13:00, only 23A per phase from the grid + solar surplus.

- Cable fuse protection 63A per phase


![Configure multilevel load management – figure 28](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/28.png)

![Configure multilevel load management – figure 29](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/29.png)

Tenant parking spaces on the site

- Medium energy availability and prioritization, focus on solar energy during the day.

- Permanently 50% of the possible capacity from the grid.

- Cable fuse protection 32A per phase.

- Peak load shaving at midday 0A from 12:00 to 13:00.
    Solar charging only possible if the production is not used by the site for something else.


![Configure multilevel load management – figure 30](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/30.png)

![Configure multilevel load management – figure 31](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/31.png)

Installation parts not covered:

- The house service connections and e-mobility outgoing feeders of houses 2 and 3 are identical in the type of configuration.

- The 4 charging groups in underground car park 3 (TG3) are configured similarly to the tenant parking spaces in underground car park 1 (TG1)

- Each charging group can develop separate behaviours and can also receive different emergency supply currents in the event of an internet failure.




![Configure multilevel load management – figure 32](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/32.png)
