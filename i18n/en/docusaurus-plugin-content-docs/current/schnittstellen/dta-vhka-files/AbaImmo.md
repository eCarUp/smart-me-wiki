---
title: 'AbaImmo'
slug: '/schnittstellen/dta-vhka-files/AbaImmo'
description: 'DTA-VHKA exchange files with AbaImmo'
sidebar_label: 'AbaImmo'
---
## DTA-VHKA exchange files with AbaImmo

## Key information on billing with AbaImmo and smart-me

- The billing and allocation of costs according to VEWA takes place in the smart\-me system.

- Every billing unit in AbaImmo that is to be queried must have a matching counterpart in smart-me

- For the billing to be correct, the tenancies and vacancies must be recorded for every billing period in all units!

- The tenant list from AbaImmo is synchronized automatically with smart-me.

- A prerequisite for use is that electricity as well as heating and ancillary costs have the same billing period.


## Current implementation

Currently supported:

- Transfer of kWh, m3, per mille or price value of a single tariff for heat, cooling, domestic hot water and cold water and single electricity tariff

- Transfer of per mille or price values as the sum of tariffs such as electricity


Not supported:

- Separate transfer of electricity tariffs (e.g. peak electricity, grid electricity and solar electricity separately)


![AbaImmo – Figure 1](/img/schnittstellen-dta-vhka-files-abaimmo/01.png)

### Best practice configuration

The easiest way to arrange the data transfer in a ZEV (association for own consumption) is as follows:

- Electricity is transferred as a CHF amount; the prices for the individual tariffs must be recorded in smart-me for this purpose.

- Heat, cooling, domestic hot water and cold water are most easily transferred as a per mille value.

- The electricity costs of the property for heat pumps and boilers are not transferred. The costs can be entered in advance as a booking in AbaImmo.


### Configuration on the AbaImmo side and course of the exchange

1.  Navigate to Y471, select the property number and activate the VHKA interface.

2.  Create a billing period for electricity and/or heating and ancillary costs.

3.  Under Y471, navigate to "Zähler" (meters) and create meter queries matching the property.

    e.g.: 
    \- Heat meter, object-specific, heating costs, consumption only
    \- Domestic hot water, object-specific, hot water costs, consumption only
    \- Cold water, object-specific, water costs, consumption only


4.  Navigate to the Y621 application settings 

5.  Under the "HK/NK" tab, create a reading company with the name "smart-me"

6.  Navigate to Y11 property master data

7.  In the Standard/Ablesefirma VHKA (reading company VHKA) tab, now enter the reading company "smart-me" for the desired properties

8.  Now enter the reading company "smart-me" for every object of the property to be queried, using the VHKA number from AbaImmo.
    This entry controls whether the query is made or ignored in the query file.

9.  Now navigate to Y2312 VHKA-Schnittstelle verarbeiten (process VHKA interface)

10.  Now select the desired property and the storage location for the VHKA file.

11.  Now export the file in order to subsequently upload it to smart-me.


![AbaImmo – Figure 2](/img/schnittstellen-dta-vhka-files-abaimmo/02.png)

![AbaImmo – Figure 3](/img/schnittstellen-dta-vhka-files-abaimmo/03.png)

![AbaImmo – Figure 4](/img/schnittstellen-dta-vhka-files-abaimmo/04.png)

![AbaImmo – Figure 5](/img/schnittstellen-dta-vhka-files-abaimmo/05.png)

12\. In the smart-me billing creation, navigate to "Configuration" (Konfiguration) and check whether VEWA is activated or inactive.

\--> if it is activated, you must check whether a billing period matching the query file from AbaImmo exists; if not, create a corresponding one.

13\. Now navigate to "Invoices" (Rechnungen), select the property and click "Export" (exportieren) on the right

14\. Select the export type "AbaImmo" and configure the information according to the selection. Note that electricity is only available from V2025.

15\. Now select the file to upload and click "Export" (exportieren). Once the calculation is complete, the file is ready for download.

16. Download the completed file to your computer using "Download" (Herunterladen).

17\. Now upload the downloaded file in AbaImmo under Y2312 Schnittstelle verarbeiten (process interface) (import).

18\. View the uploaded data under Y2311. (Select the property number)

![AbaImmo – Figure 6](/img/schnittstellen-dta-vhka-files-abaimmo/06.png)

### Data matching between AbaImmo and smart-me

So that the file can be read correctly, the respective Abacus ObjektID must be entered in smart-me under the external keys in smart-me Billing.

1.  Open the exported file in an editor.

2.  Find the ObjektID (4) in the file for each of the apartments.

3.  Enter the ObjektID (4) for the matching residential unit in smart-me Billing under the external keys.


![AbaImmo – Figure 7](/img/schnittstellen-dta-vhka-files-abaimmo/07.png)

![AbaImmo – Figure 8](/img/schnittstellen-dta-vhka-files-abaimmo/08.png)

### Linking the ObjektID with billing units

An ObjektID from the file must be available for every billing unit in smart-me. The AbaImmo ObjektID must now be linked to the apartment via the external keys.

According to the example above, the 4.5-room apartment with the ID "1101" in the 4th position is now linked in smart-me for apartment 303-2.2.

![AbaImmo – Figure 9](/img/schnittstellen-dta-vhka-files-abaimmo/09.png)

### Making cost centre bookings in AbaImmo

If preliminary bookings to the cost centres are required in AbaImmo, these can be taken from the summary CSV of every invoice created.

This is usually the case for electricity, which is only transferred as a single item. For bookings in this case, the solar electricity and the grid electricity must be booked. Individual shares can be taken from the CSV in order to distribute the income.

This will more often be necessary for the allocation of solar electricity, since the origin of this information lies in the smart-me system.

For the other cost centres, external invoices are usually available which can be booked.

1.  Enter smart-me Billing via the Rechnungsstellung (billing) tab

2.  Select the property

3.  Select the invoice period and create an invoice

4.  Once the invoice for the matching period has been created, open the summary CSV


![AbaImmo – Figure 10](/img/schnittstellen-dta-vhka-files-abaimmo/10.png)

![AbaImmo – Figure 11](/img/schnittstellen-dta-vhka-files-abaimmo/11.png)

It contains the kWh and m3 sold in each case and the price per tariff, billing unit and in total.

With this total value of the respective tariff, a booking can be made in AbaImmo and then distributed appropriately with per mille using the DTA-VHKA file.
