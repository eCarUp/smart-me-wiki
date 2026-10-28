---
title: 'Visualization error'
slug: '/stoerungsbehebung/visualisierungsfehler'
description: 'This section describes known error messages related to the visualizations and possible solutions.'
sidebar_label: 'Visualization error'
---
This section describes known error messages related to the visualizations and possible solutions.

### The read-only user does not see the energy flow.

<div className="row">
<div className="col col--6">

Energy data is not displayed.

- Solution: Menu User Configuration (Benutzerkonfiguration) --> Make sure that the read-only user has access to the meters that generate the graphic. As a rule, these are the technical meters (balance and solar meters)

</div>
<div className="col col--6 bild--mitte">

![Visualization error – Figure 1](/img/stoerungsbehebung-visualisierungsfehler/01.png)

![Visualization error – Figure 2](/img/stoerungsbehebung-visualisierungsfehler/02.png)

![Visualization error – Figure 3](/img/stoerungsbehebung-visualisierungsfehler/03.png)

</div>
</div>

### Simple virtual tariffs (apartment) is displayed empty

The display does not work or is displayed empty

- Solution 1: Check that the calculation of the virtual tariffs (blue box) in smart-me Billing has no error. [Billing error messages](/stoerungsbehebung/billing-fehlermeldungen) 

- Solution 2: Make sure that the folder of the apartment has been selected. If the meter is selected, it does not work.


![Visualization error – Figure 4](/img/stoerungsbehebung-visualisierungsfehler/04.png)

### Simple energy flow

Values are not displayed correctly:

- Solution 1: Make sure that only two of three meters are specified in the configuration. If all three meters are specified, incorrect displays may occur. We always recommend specifying direct measurements wherever possible and not virtual meters

- Solution 2: Check whether the meters are delivering the correct values.


![Visualization error – Figure 5](/img/stoerungsbehebung-visualisierungsfehler/05.png)

<div className="row">
<div className="col col--8">

The PV meter was connected incorrectly. After it was connected correctly, the graphic is now no longer correct.

- Solution 1: The arrow of the graphic is determined by the meter reading. You simply have to wait until the meter reading is negative.

</div>
<div className="col col--4 bild--mitte">

![Visualization error – Figure 6](/img/stoerungsbehebung-visualisierungsfehler/06.png)

</div>
</div>

### Consumption and production monitoring

NaN% is displayed

- Solution 1: The solar meter has not yet produced anything on this day. Wait 24h or select the period "Custom" ("Individuell") so that the current day is displayed.


![Visualization error – Figure 7](/img/stoerungsbehebung-visualisierungsfehler/07.png)

### The pie chart does not show all meters

This happens when only some meters have been online for e.g. 7 days; then only these are displayed and the others not yet.

![Visualization error – Figure 8](/img/stoerungsbehebung-visualisierungsfehler/08.png)
