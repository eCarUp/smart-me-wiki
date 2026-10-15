---
title: 'Visualization error'
slug: '/stoerungsbehebung/visualisierungsfehler'
description: 'This section describes known error messages related to the visualizations and possible solutions.'
sidebar_label: 'Visualization error'
---
This section describes known error messages related to the visualizations and possible solutions.

### The read-only user cannot see the energy flow.

Energy data is not displayed.

- Solution: Menu User configuration (Benutzerkonfiguration) --> Make sure that the read-only user has access to the meters that generate the graphic. As a rule, these are the technical meters (balance and solar meters)


![Visualization error – Figure 1](/img/stoerungsbehebung-visualisierungsfehler/01.png)

![Visualization error – Figure 2](/img/stoerungsbehebung-visualisierungsfehler/02.png)

![Visualization error – Figure 3](/img/stoerungsbehebung-visualisierungsfehler/03.png)

### Simple virtual tariffs (apartment) is displayed empty

The display does not work or is displayed empty

- Solution 1: Check in smart-me Billing that the calculation of the virtual tariffs (blue box) has no error. [Billing error messages](/stoerungsbehebung/billing-fehlermeldungen) 

- Solution 2: Make sure that the folder of the apartment has been selected. It does not work if the meter is selected.


![Visualization error – Figure 4](/img/stoerungsbehebung-visualisierungsfehler/04.png)

### Simple energy flow

Values are not displayed correctly:

- Solution 1: Make sure that only two of the three meters are entered in the configuration. If all three meters are specified, incorrect values may be displayed. Wherever possible, we always recommend specifying direct measurements rather than virtual meters

- Solution 2: Check whether the meters are delivering the correct values.


![Visualization error – Figure 5](/img/stoerungsbehebung-visualisierungsfehler/05.png)

The PV meter was connected incorrectly. Since it has been connected correctly, the graphic is no longer correct.

- Solution 1: The arrow in the graphic is determined by the meter reading. You simply have to wait until the meter reading is negative.


![Visualization error – Figure 6](/img/stoerungsbehebung-visualisierungsfehler/06.png)

### Consumption and production monitoring

NaN% is displayed

- Solution 1: The solar meter has not produced anything yet on this day. Wait 24h or select the period "Custom" ("Individuell") so that the current day is displayed.


![Visualization error – Figure 7](/img/stoerungsbehebung-visualisierungsfehler/07.png)

### The pie chart does not show all meters

This happens when only some meters have been online for e.g. 7 days: only these are then displayed, and the others are not yet.

![Visualization error – Figure 8](/img/stoerungsbehebung-visualisierungsfehler/08.png)
