---
title: 'Configure multilevel load management'
slug: '/konfiguration/multilevel-lastmanagement/mlm-konfigurieren'
description: 'Configuring dynamic multilevel load management (MLM)'
sidebar_label: 'Configure multilevel load management'
---
## Configuring dynamic multilevel load management (MLM)

Multilevel load management is configured in the "Multilevel load management" ("Multilevel Lastmanagement") section of the main navigation

The function enables:

- Dynamic control of multiple static Pico charging groups

- Limiting the charging power to reference points within the installation or site

- Solar optimization

- Peak load reduction

- Charging group prioritization


![Configure multilevel load management – Figure 1](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/01.png)

### Definition of terms

Multilevel load management can be thought of as a tree, with the following terms and uses:

- Trunk (main connection point of the installation)

- Branches (limiting points such as junctions, building connections, sub-distribution boards, aggregate feeders)

- Leaves (static Pico charging groups)




The trunk and the branches can perform several functions:

- Current limitation (maximum fuse protection)

- Solar optimization ON or OFF

- Unmeasured loads present (active or inactive)




Unmeasured loads:

An unmeasured load is a producer or consumer that is not a Pico charging station group. To be able to take this production or load into account dynamically, meter hardware must be provided as a reference. (Measured branch)

The branch can also be limited statically without a reference meter, but must then be restricted to a functional maximum of the fuse protection, taking the base load into account.

Typical branches with unmeasured loads: 

- Building connections (apartments, solar installations, battery storage, outdoor lighting)

- Sub-distribution boards (interconnection of several building complexes, SDB East, SDB West,...)

- E-mobility feeders (Pico standby consumption and garage lighting)


![Configure multilevel load management – Figure 2](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/02.png)

![Configure multilevel load management – Figure 3](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/03.png)

### Adding or deleting a branch

Adding:

Select the trunk or a branch and use "Add branch" ("Ast hinzufügen") to create an additional branch or junction.

Deleting:

Selecting the corresponding branch and using the "Delete" ("Löschen") function deletes the selected branch as well as all branches attached to it.

To keep the subordinate elements, the branches and groups can first be attached to another branch or the trunk using drag & drop.





![Configure multilevel load management – Figure 4](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/04.png)

### Adding charging station groups to the tree

The charging station groups that are not yet assigned and are correctly configured for the MLM are located on the right-hand side.

They can be attached to the branches using drag & drop and can also be moved within the configuration using drag & drop.



Note:
A prerequisite for use in the MLM is that the connection failure setting is configured to "Max. current (per group)" ("Max. Strom (pro Gruppe)").

This can be adjusted on a Pico charging station under "Configuration" ("Konfiguration").



![Configure multilevel load management – Figure 5](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/05.png)

![Configure multilevel load management – Figure 6](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/06.png)

### Solar optimization and minimum current per charging group

Branch configuration:

Solar optimization is possible once on the trunk (site-optimized) or several times in parallel on branches with active unmeasured loads, e.g. building connections.

Depending on the choice, the solar surplus is optimized across all charging station groups or only across some of the charging station groups.





Group configuration:

For solar optimization to take effect, the station groups to be optimized must temporarily be assigned a reduced minimum charging current.
This minimum charging current is defined on the corresponding charging group (group configuration) and corresponds to the maximum possible grid consumption for the charging group during the defined hours.

At the same time, setting the minimum charging current can also be used for peak shaving.

Each group can be configured differently.

Groups with a higher minimum charging current are given priority when available grid current is distributed.

![Configure multilevel load management – Figure 7](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/07.png)

![Configure multilevel load management – Figure 8](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/08.png)

### Saving and activating the configuration

Changes to the configuration are only saved if the configuration is also activated.

If activation cannot be carried out due to misconfiguration, this may be due to the following:

- The charging group is not correctly configured for the MLM (internet failure setting is not set to Max. current per group)

- Individual devices relevant to the MLM are not online at the time of saving. (bring them online)


![Configure multilevel load management – Figure 9](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/09.png)

### Deleting the MLM configuration

The configuration of an MLLM can be deleted in its entirety at the push of a button in order to create a new configuration.

![Configure multilevel load management – Figure 10](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/10.png)

### Configuring load shedding

The MLM has an integrated load shedding control.

This control can be used instead of the hardware inputs on the back of the Pico charging stations. 

Notes: 

- Signals connected directly to Pico hardware cannot be overridden with this function. 

- The function requires an active internet connection to work. If the internet connection is lost, the configured internet failure value of the Pico groups is used.


The function makes it possible to interpret one or more digital signals from energy suppliers and to allocate reduced charging power to all charging station groups of the MLM.

The control signals are wired to one or two nearby meter inputs (E1).

smart-me Telstar CT and Telstar 80A hardware are compatible for this purpose.

Note:
For the inputs to be usable, they must be configured as "Digital input" ("Digitaler Eingang") on the hardware side. (Meter settings, E1 --> Digital input ("Digitaler Eingang"))

Control configurations:

With only one signal:

- 1-stage: 0% reduction, variable reduction (10-100%)


With two signals:

- 4-stage: 0% reduction, variable reduction, variable reduction, 100% reduction

- 3-stage: 0% reduction, variable reduction (both same level), 100% reduction


Applying percentages to EnWG14a in Germany:

- For 22kW installations, a reduction of 82% corresponds to the commitment of 4200W minimum power per device in the installation.

- For 11kW installations, a reduction of 73% corresponds to the commitment of 4200W minimum power per device in the installation.


Signal interpretation:

The signal can be interpreted in different ways.

If the energy supplier removes the signal in the event of load shedding (230V --> 0V), "Low active" ("Low-Aktiv") is the correct configuration.

No signal (0) = 1 = available energy is reduced

If the energy supplier applies the signal in the event of load shedding (0V --> 230V), select "High active" ("High-Aktiv").

Signal (1) = 1 = available energy is reduced.

[Wiring and configuration of meter inputs](/schnittstellen/ein_und_ausgaenge)

![Configure multilevel load management – Figure 11](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/11.png)

![Configure multilevel load management – Figure 12](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/12.png)

![Configure multilevel load management – Figure 13](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/13.png)

### Activating and deactivating the MLM processor

The MLM configuration can be deactivated and reactivated at any time.

- Stops the calculation process and the active allocation of values from reference points.

- Gives all subordinate load groups free use of the defined internet failure value.


Set the value to active or inactive and then save the configuration to pass it on to the processor.

![Configure multilevel load management – Figure 14](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/14.png)

## Example configuration: house with e-mobility feeder + garage lighting, solar installation and midday peak smoothing

- Here, the trunk corresponds to the building connection

- The fuse protection of the connection is 100A per phase.

- Solar optimization is applied to the building connection here.

- Solar production and the building's own consumption are measured and taken into account by the meter "House connection Telstar 80A" ("Hausanschluss Telstar 80A").


![Configure multilevel load management – Figure 15](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/15.png)

![Configure multilevel load management – Figure 16](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/16.png)

The subordinate e-mobility feeder is actively measured here to account for the garage lighting. This allows the charging groups to react dynamically to the garage lighting.

- The garage lighting is taken into account with the reference meter "E-mobility feeder 63A Telstar 80A" ("E-Mobilitätsabgang 63A Telstar 80A").

- The fuse protection of the feeder is 63A per phase.


![Configure multilevel load management – Figure 17](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/17.png)

![Configure multilevel load management – Figure 18](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/18.png)

For solar optimization to take effect, the minimum charging current is reduced during the day.

- The minimum current corresponds to the maximum possible grid consumption at the defined hour.

- As soon as the minimum current is 100% covered by the solar installation, the stations additionally receive the additional surplus from the solar installation.

- Solar optimization for the whole week from 6:00 to 17:00 with a minimum charging current of 15A per phase

- Midday peak smoothing: charging from 12:00 to 13:00 is only possible with solar surplus, grid consumption remains at 0A

- Night-time charging from 18:00 to 22:00 is possible at 50% capacity.

- Night-time charging from 22:00 until 7:00 in the morning is possible at 100% capacity.
    (e.g. making use of the off-peak tariff)


![Configure multilevel load management – Figure 19](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/19.png)

![Configure multilevel load management – Figure 20](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/20.png)

## Example configuration: site with several houses, solar installations and e-mobility feeders

- ZEV (association for own consumption) site with 3 houses

- Each house has an underground car park

- Several charging groups in underground car parks

- TG1 has outdoor parking spaces for visitors as well as tenant parking spaces

- Houses TG1 and TG2 have solar installations

- Solar optimization on the site so that TG3 can also benefit from solar energy.

- Site fuse protection 300A per phase

- House fuse protection 180A per phase

- E-mobility feeders 63 A or 32A per phase


![Configure multilevel load management – Figure 21](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/21.png)

- The ampere value corresponds to the fuse protection of the supply line

- The measuring point is fuse-protected but not itself measured.
    Since the subordinate branches all have measurements and these correspond to 100% of the site's consumption, the trunk can be limited virtually.

- Solar power optimization on the trunk (site) active. (Availability of solar power for all three houses)


![Configure multilevel load management – Figure 22](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/22.png)

![Configure multilevel load management – Figure 23](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/23.png)

HAK TG1: building connection of building 1 on the site

- Fuse protection 180A per phase

- Unmeasured loads active: apartments, heating, lighting, common areas, solar

- Dynamic consideration of the apartments and heat pumps


![Configure multilevel load management – Figure 24](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/24.png)

![Configure multilevel load management – Figure 25](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/25.png)

TG1 e-mobility feeder

- Fuse protection 63A per phase

- Unmeasured loads active: garage lighting and ventilation in addition
    to the EV charging stations

- Dynamic consideration of the garage lighting and ventilation


![Configure multilevel load management – Figure 26](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/26.png)

![Configure multilevel load management – Figure 27](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/27.png)

Visitor parking spaces on the site (public charging stations)

- High energy availability and prioritization at a higher selling price.
    Published via the eCarUp backend. (Backend authentication)

- Permanently 100% of the possible capacity from the grid + solar coverage.

- Midday peak shaving from 12:00 to 13:00 only 23A per phase grid + solar surplus.

- Cable fuse protection 63A per phase


![Configure multilevel load management – Figure 28](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/28.png)

![Configure multilevel load management – Figure 29](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/29.png)

Tenant parking spaces on the site

- Medium energy availability and prioritization, focus on solar energy during the day.

- Permanently 50% of the possible capacity from the grid.

- Cable fuse protection 32A per phase.

- Midday peak shaving 0A from 12:00 to 13:00.
    Solar charging only possible if the production is not used elsewhere on the site.


![Configure multilevel load management – Figure 30](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/30.png)

![Configure multilevel load management – Figure 31](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/31.png)

Parts of the installation not covered:

- The building connections and e-mobility feeders of houses 2 and 3 are configured in the same way.

- The 4 charging groups in underground car park 3 (TG3) are configured similarly to the tenant parking spaces in underground car park 1 (TG1)

- Each charging group can have its own behaviour and can also receive different emergency supply currents in the event of an internet failure.




![Configure multilevel load management – Figure 32](/img/konfiguration-multilevel-lastmanagement-mlm-konfigurieren/32.png)
