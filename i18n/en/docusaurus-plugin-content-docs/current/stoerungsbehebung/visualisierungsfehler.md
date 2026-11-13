---
title: 'Visualization error'
slug: '/stoerungsbehebung/visualisierungsfehler'
description: 'This section describes known error messages related to the visualizations and possible solutions.'
sidebar_label: 'Visualization error'
---
This section describes known error messages related to the visualizations and possible solutions.

<details id="energiefluss-lese-user">
<summary>The read-only user cannot see the energy flow.</summary>

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

</details>

<details id="virtuelle-tarife-leer">
<summary>Simple virtual tariffs (apartment) is displayed empty</summary>

The display does not work or is shown empty

- Solution 1: Check that the calculation of the virtual tariffs (blue box) in smart-me Billing has no error. [Billing error messages](/stoerungsbehebung/billing-fehlermeldungen) 

- Solution 2: Make sure that the folder of the apartment has been selected. If the meter is selected, it does not work.


![Visualization error – Figure 4](/img/stoerungsbehebung-visualisierungsfehler/04.png)

</details>

<details id="einfacher-energiefluss">
<summary>Simple energy flow</summary>

Values are not displayed correctly:

- Solution 1: Make sure that only two of the three meters are entered in the configuration. If all three meters are specified, incorrect displays may occur. Whenever possible, we always recommend specifying direct measurements and not virtual meters

- Solution 2: Check whether the meters are delivering the correct values.


![Visualization error – Figure 5](/img/stoerungsbehebung-visualisierungsfehler/05.png)

<div className="row">
<div className="col col--8">

The PV meter was connected incorrectly. After it was connected correctly, the graphic is no longer correct.

- Solution 1: The arrow in the graphic is determined by the meter reading. You simply have to wait until the meter reading is negative.

</div>
<div className="col col--4 bild--mitte">

![Visualization error – Figure 6](/img/stoerungsbehebung-visualisierungsfehler/06.png)

</div>
</div>

</details>

<details id="verbrauch-produktion-monitoring">
<summary>Consumption and production monitoring</summary>

NaN% is displayed

- Solution 1: The solar meter has not produced anything yet on this day. Wait 24h or select the period "Custom" ("Individuell") so that the current day is displayed.


![Visualization error – Figure 7](/img/stoerungsbehebung-visualisierungsfehler/07.png)

</details>

<details id="kuchendiagramm-unvollstaendig">
<summary>The pie chart does not show all meters</summary>

This happens when only some meters have been online for e.g. 7 days; then only these are displayed and the others not yet.

![Visualization error – Figure 8](/img/stoerungsbehebung-visualisierungsfehler/08.png)

</details>
