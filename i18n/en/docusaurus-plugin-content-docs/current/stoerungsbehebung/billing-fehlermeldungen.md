---
title: 'Billing error messages'
slug: '/stoerungsbehebung/billing-fehlermeldungen'
description: 'This section describes known error messages in connection with smart-me Billing and possible solutions.'
sidebar_label: 'Billing error messages'
---
This section describes known error messages in connection with smart-me Billing and possible solutions.

## General

The configuration of smart-me Billing is described here: [Billing](/konfiguration/billing) 

In smart-me Billing, error messages are displayed in two places:

- When calculating virtual rates (if configured).

- When creating invoices


Calculation of virtual tariffs

Where can I find the error messages of the virtual tariff calculation. Login to the portal : Configuration --> Create bill --> Configuration --> Edit property --> Virtual tariffs --> Blue box

![Billing error messages – figure 1](/img/_en/troubleshooting-billing-error-messages/01.png)

Created invoices

Where can I find the error messages and warnings of the created invoices. Login in the portal : Configuration --> Create invoice --> Configuration --> Edit property --> Invoices --> Invoices --> Orange error with warnings (Appears only when there is an error)

![Billing error messages – figure 2](/img/_en/troubleshooting-billing-error-messages/02.png)

## Error when Calculation of virtual tariffs

![Billing error messages – figure 3](/img/_en/troubleshooting-billing-error-messages/03.png)

### Calculation starts soon ...

Possible causes:

- If another error message is displayed below the text “Calculation will start soon ...” which does not read “Waiting for meter values of ...”, the error message below must be taken into account.

- It may take up to one minute for the calculation to start.

- No valid tariff is defined for the current year.

- Not the entire period is defined with a tariff. For example, there is no tariff for the year the meter was commissioned in 2019.

- The solar or total consumption meter is not added to the solar or battery tariff.

- A folder has been incorrectly selected for the solar or total consumption meter in the solar or battery tariff.

- The folder structure of the property is single-level (billing units only), but should be two-level (property and billing units).


### EVT001: There must be at least one normal virtual tariff active, but for ValuePeriod &#123; ... &#125; there is none

The tariffs must cover the entire period in which smart-me meters have supplied data. 

- Solution 1: Define tariffs for the first transmitted value. E.g. from 5.8.2022 or earlier 1.1.2000, then press “recalculate”.

- Solution 2: Define tariffs for the current year (e.g. until 31.12.2024), then press “Recalculate”.

- Solution 3: Press “Recalculate” and first enter the date from which a valid tariff is configured.


### EVT002: Not more than one unconditional normal virtual tariff must be active at a time, but for ValuePeriod ... there are the following ones: - ...

The error message states that the virtual tariffs are not configured correctly.

The incorrectly configured tariffs are listed at the end of the error message.

Possible causes: 

- The tariffs have an overlapping start and end date, for validity.

- No condition is set for both tariffs. At least one of the two tariffs must have a condition. (e.g. high tariff).

- The if/then actions have been configured incorrectly. This mainly occurs when high and low tariffs are configured for grid and solar power.


### EVT003: For ValuePeriod ... the following virtual tariffs are active but erroneous: - Solar tariff ... is invalid because of: Solar Meter: Meter with id ....' does not exist

For the solar tariff, either the solar or battery meter or the total consumption is not stored.

Solution 1: Billing --> Configuration --> Select solar tariff --> Edit --> Add meter --> Save

Solution 2: Billing --> Configuration --> Select solar tariff -> Delete meter assignments (even if empty) -> Add new -> Save

### EVT004: The following residential commercial units are defective: - '....': the following assignments are defective: - Meter with id '....' does not exist

A meter can no longer be found.

- Select the billing unit that is specified in the error message

    - In this example it would be WHG1 --> The following residential commercial units are defective: - 'WHG1'...

- Delete or edit the name of the meter that is set to “not found”


### EVT005: There is no residential commercial unit.

Problem 1: The two-level folder structure is missing. On the left under the property there is only a folder for the property and no subordinate accounting unit

Problem 2: There is no “Assign external key” on the property. When selecting the property, the “Assign external key” is listed at the bottom. All billing units (folders with the apartments) should be listed there. If this is not the case, please try the following solutions.

Note: The most common cause of this problem is that a folder (“billing unit”) has been moved from one property to another property using drag and drop. This manipulation is not supported by our system.

Problem 2 - Solution 1: 

- As a first solution, you can try to add the property again without deleting it first (Configuration --> Create invoice --> Configuration (top menu) --> Add property --> Select property --> Scroll down to check if the external key is now available)

- Check whether it then appears in the external keys. 


Problem 2 - Solution 2

- If the first solution did not work, the following must be done

- Delete folder (Configuration --> Meters / Folder configuration --> Select meters --> Check in the GUI under Add node whether the folder is selected correctly --> Select Delete node)

- In the folder configuration: Create folder again and assign meters

- Add the property again without deleting it first (Configuration --> Create invoice --> Configuration (top menu) --> Add property --> Select property --> Scroll down to check whether the external key is now available)

- Check whether it then appears in the external keys.


### EVT006: Failed to load meters of folder '...': - Erroneous virtual meter '....: - Meter with id '....' does not exist

The virtual meter consists of meters that have been deleted.

![Billing error messages – figure 4](/img/_en/troubleshooting-billing-error-messages/04.png)

### EVT007: Möglicherweise verfügen nicht alle Zähler in der Konfiguration über die für virtuelle Tarife gesetzlich vorgeschriebene Lastgang- oder Zählerstandgang-Zertifizierung.

This message is purely informative. It has no influence on the calculation.

With this note, we want to ensure that the invoicing party is aware that the conformity of third-party measuring devices is their own responsibility.

Note: This message cannot be deactivated.

### EVT020: Waiting for meter values of .... Last values at.... (UTC))

Problem:

- If the date is older than today's date, this means that a meter no longer provides load profile data.

- If the total consumption meter (virtual) for solar or battery contains a meter that no longer provides load profile data. (dismantled, defective)

- Note: If the date is still from today, it can be ignored.


Possible causes:

- Check whether the meter is offline. If the meter is offline, it must be brought back online. You can find instructions here: [Meter offline](/stoerungsbehebung/zaehler-offline)


### The calculation is stuck at a specific date.

Possible causes:

- A meter relevant for billing has not sent any data (check the last connection of the meters and bring it back online)

- Incorrect meters are stored for the tariff (e.g. meters from another property)


## Error when creating the invoices

![Billing error messages – figure 5](/img/_en/troubleshooting-billing-error-messages/05.png)

### EBC001: The virtual tarifs do not match the total consumption

Possible causes:

- The most common cause is that the virtual tariffs have not yet been calculated. Please check whether the “Last calculation” is on today's date. You can find this under: Configuration --> Create invoice --> Configuration --> Edit property --> Virtual tariffs --> Blue box

- The billing period (From) must not include the installation date and must not be set before the installation date.

- The billing period (To) must not be set to today's date.

- The configuration has been changed (e.g. folder structure, tariffs, etc.) and the recalculate button has not been clicked.

- A meter has been offline for more than 2 months and the billing period starts or ends in the period in which the data is no longer available. (gap)

- A meter was billed above or below 100% (e.g.: The general meter is divided into the billing units on a percentage basis and also 100% in the general folder, so it is billed at 200%)

- The meter has not provided any data at the time of the billing start (From) or billing end (To). Detailed explanation in the section below “Why does the virtual tariff generate a difference if the meter has not supplied any data at the time of the start of billing (From) or end of billing (To)”.


### EBC002/EBC003: No values found for the start date or end date

Possible causes:

- A billing-relevant meter is offline.

- The billing period (From) corresponds to the installation day and/or the billing period (To) is set to today.

- The billing period (From) is before the installation day and/or the billing period (To) is in the future.

- A meter has been offline for more than 2 months and the billing period starts or ends in the period where the data is no longer available. (Gap)

- The selected year is incorrect


### EBC004: Rechnungen werden leer oder gar nicht generiert.

Possible causes:

- No valid billing address was stored for the corresponding billing unit (note the time period) -> our system otherwise assumes that no tenant lives in the flat and accordingly does not generate a bill. 

- No meters for billing were assigned to the billing unit. 

- The folder structure is incorrect (See: [2\. Create folder structure and assign counters](/konfiguration/billing)).

- For virtual tariffs: The tariffs are not valid in the desired billing period (adjust the tariff period if necessary).

- There is no billing address for the period. 


### EBC005: The added or subtracted value results in an un-representable DateTime. Parameter name: value Index was outside the bounds of the array.

Your Bexio login is no longer valid. You must log in again.

### QR bill data is invalid: currency should be "CHF" or "EUR" (currency\_not\_chf\_or\_eur)

The currency is not set to CHF or EUR. 

Login --> Conifguration --> Billing --> Settings (top center) --> Change currency --> Save.



### QR bill data is invalid: amount should be between 0.01 and 999 999 999.99 (amount\_outside\_valid\_range)

The amount to be offset is negative. This can happen if there are other items, e.g. refunds.

This cannot be bypassed. The invoice will still be created (without QR code).

## VEWA specific error messages

### No values for meters. Substitute values are used.

This error can occur and is not critical in every case. However, attention must be paid to how far the substitute value differs from the requested value.

The error message appears after a deviation of 48 hours at the latest.

Note: If necessary, check the readout interval of the M-Bus gateway so that it reads out more often than every 2 days to rule out the possibility of the error occurring systematically.

### Word & Excel-Files are empty (0 Byte)

These files are only available outside of VEWA. If VEWA is enabled, the buttons are still visible but return empty files.

### EVW001: Missing tenancy or vacancy!

This error message is critical. 

Please add the missing tenancy or vacancy. 

If you do not enter this information, the costs will be charged in full to the contracts entered and the reference total energy will only be calculated from these contracts. (Less energy than actually consumed)

### EVW002: Double occupancy of the billing unit!

This error message is critical. 

Check the vacancies and tenancies for double occupancy.

Without the correction, the costs are charged in full to the entered contracts and the reference total energy is formed from too many contracts. (More energy than actually consumed)

## Address cannot be maintained

### ID Address Email Description Valid from Valid to Valid to (ISO) Valid from (ISO)Third party key

Possible causes:

- The smart-me billing was created in 3 levels.

- A folder was subsequently moved and still has old configurations saved.


Solution

- Delete the folder (be careful to select the correct folder, if you select the wrong one, everything is broken).

    - Select folder --> Check whether the name appears correctly at the top --> Delete node

- Create a new folder and assign nodes


## Themen detaillierter erklärt:

### Why does the Virtual Tariff generate a difference if the meter has not delivered any data at the time of the billing start (From) or billing end (To)?

Possible reasons:

- Commissioning was not completed

- Meter was offline and did not supply load profile data

- Meter was defective


Data basis for determining the error:

The smart-me Billing carries out a check when creating a bill. The sum of the virtual tariffs (e.g. high, low, solar tariff) is compared with the electricity consumption. If there is a difference there, an error message is displayed.

![Billing error messages – figure 6](/img/_en/troubleshooting-billing-error-messages/06.png)

Display of meter readings

The determination of meter readings is not displayed with a time specification in smart-me Billing when creating a bill. In order to check whether the meter has delivered data at the desired time, a report must be created.

For the report, the property can be selected and a detailed PDF consumption report can be generated. The data of all billing units (flats) are exported at once. 

Select property --> Select report at the top right --> Report type --> Detailed consumption report (PDF)

Now you can check whether the period of the report differs from the period of the reference quantity total of one or more meters. If this is the case, no load profile data are available for the desired period.

![Billing error messages – figure 7](/img/_en/troubleshooting-billing-error-messages/07.png)

Display of virtual tariffs

The determination of virtual tariffs is displayed in smart-me Billing when a bill is created in the tariffs.

![Billing error messages – figure 8](/img/_en/troubleshooting-billing-error-messages/08.png)

Different handling between meter readings and virtual tariffs:

Meter readings: smart-me Billing uses the physical meter readings generated on the meter for electricity consumption. If no meter reading is available at the time of the start or end of billing, smart-me Billing uses the meter reading closest to the requested date.

Virtual tariffs: smart-me Billing calculates the virtual tariffs based on the load profile data (physical meter readings). If no load profile data is available, e.g. for 1 week, it is interpolated. This means that our system takes the meter readings and assumes that consumption is constant every 15 minutes (load profile data). The virtual consumption is then calculated from this.

Simplified calculation example with correct data:

Flat 1 has sent a meter reading (load profile data) on 01.10.2023 00:00 and on 31.10.2023 00:00

- Meter reading on 1.10.2023 00:00: 5200 kWh

- Meter reading on 31.10.2023 00:00: 5250 kWh

- The meter reading is determined 5250-5200 = 50 kWh


The virtual consumption is calculated. The split between high, low and solar tariff is 50 kWh. 

Simplified calculation example with missing data:

Flat 1 sent a meter reading (load profile data) on 01.10.2023 00:00, this was done up to and including 25.10.2023 00:00. From 25.10.2023 00:00 until 15.11.2023 00:00 there is no load profile data.

- Meter reading on 1.10.2023 00:00: 851 kWh

- Meter reading on 25.10.2023 00:00: 902 kWh

- Meter reading on 15.11.2023 00:00: 950 kWh


The meter reading for 31.10.2023 00:00 is not available. The closest meter reading to the date is 25.10.2023 00:00, so this is used for display and calculation in smart-me billing.

The meter reading is determined. 902-851 = 51 kWh (The consumption of 51 kWh is shown in the bill at "Your share").

The virtual consumption is calculated. Between 1.10.2023 00:00 and 25.10.2023 00:00 a consumption of 51 kWh is divided between high, low and solar tariff. Since data is missing from this point onwards, the missing load profile data is interpolated. The outage is 21 days. During this time 950-902 = 48 kWh were consumed. With interpolation, this results in 2.29 kWh per day. In smart-me billing, therefore, 6 days of 2.29 kWh each are billed in addition to the 51 kWh, which results in 51 + 13.71 = 64.71 kWh.

Now there is a difference between the meter reading 51 kWh and the virtual tariff 64.71 kWh in smart-me billing. This leads to the error message.
