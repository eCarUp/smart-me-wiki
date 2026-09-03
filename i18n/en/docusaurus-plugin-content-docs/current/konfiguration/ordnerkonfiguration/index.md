---
title: 'Folder and Meter Configuration'
slug: '/konfiguration/ordnerkonfiguration'
description: 'Video guide on creating folders and assigning meters'
sidebar_label: 'Folder configuration'
---
<Embed src="https://player.vimeo.com/video/661999827" aspect="1.291" title="Folder configuration" />

Video guide on creating folders and assigning meters

## Step-by-step guide

### Navigating to the Meter and Folder Configuration area

1.  Log in on the [smart-me website](https://web.smart-me.com/).

2.  In the menu on the left, navigate to "Meter and folder configuration" (Zähler- und Ordnerkonfiguration)


![Folder and Meter Configuration – Figure 1](/img/konfiguration-ordnerkonfiguration/01.png)

### Description of the available actions

![Folder and Meter Configuration – Figure 2](/img/konfiguration-ordnerkonfiguration/02.png)

Add node:

Adds a node with a name and a freely selectable icon.

The name determines the order in which the node is shown in the tree. 

1.  Sorted by numbers

2.  Sorted alphabetically


Edit folder node 

Allows changes to the node name, icon and parent assignment.



Edit meter node

Name:  Set the name of the meter.
Description:
Optionally add a description for the meter.
Value correction: 
Corrects the meter's measured value on the cloud side. (Position calculations)
Parent folder value correction:
Defines the percentage of the measured value that should be summed in the parent folder.
Meter active:
Activate or deactivate a meter to save licenses. Deactivated meters no longer show any data. You can find more information about deactivated meters in our FAQ under [How do I deactivate my meter?](/#how-do-i-deactivate-my-meter)

To activate or deactivate several meters at once, you can move them into a folder in the meter/folder configuration, right-click that folder and select a bulk action. 

![Deactivating meters](/img/konfiguration-ordnerkonfiguration/03.jpg)

Delete node

Deletes the selected node or metering point from the tree. 

Meters then fall back to the left-hand side as unassigned meters.

![Folder and Meter Configuration – Figure 4](/img/konfiguration-ordnerkonfiguration/04.png)

### Labelling meters

- All meters must be installed in the corresponding account. [Commissioning](/konfiguration/inbetriebnahme) 

- All meters must be labelled. Our suggestions for meter names 

    - Unit meter number (e.g. APT 1 6352415)

    - Medium unit meter number (e.g. Heat APT 1)


![Folder and Meter Configuration – Figure 5](/img/konfiguration-ordnerkonfiguration/05.png)

### Converting cold water meters into domestic hot water meters (if required)

Some M-Bus meter manufacturers indicate during data transmission that the device is a cold water meter, even though it should be a domestic hot water meter. In this case the meter type must be overridden in smart-me.

- Navigate to the dashboard

- Select the meter in the Dashboard menu

- Select the gear icon at the top right

- Advanced settings

- Change the device type.

- Save


Note: This adjustment results in support in smart-me Billing. The Auto Export for utilities is not changed by this.

Note: For technical reasons, this manipulation is not possible with heat and cooling meters.

![Folder and Meter Configuration – Figure 6](/img/konfiguration-ordnerkonfiguration/06.png)

### Folder structures and their impact on downstream processes

The current system allows automated billing for electricity. For this to work, heat and water must remain separate from electricity. Mixed systems are nevertheless possible in order to save effort with the tenant lists, but unfortunately the automated billing is then lost.

For systems with several heating systems, however, a separation into several properties is unavoidable.

Each individually created property is generally able to represent 1x electricity and 1x heat/water.

<Embed src="/embeds/konfiguration-ordnerkonfiguration-02.html" aspect="2.308" title="Folder configuration" />

### Basics of the tree structure and creating nodes

To prepare a building for billing, the appropriate properties and billing units must be created.

Basic folder structure of each individual property

The basic structure for each energy form and each building consists of two basic nodes and multiple sub-nodes:

- Property (later configuration of a billing)

    - -   Billing unit 1 of the property (apartment or rooms)

            - -   Apartment meter (100% shares)

        - Billing unit 2 of the property (apartment or rooms)

        - ...

- Technical meters (collection of metering points that are not billed directly)
    Any number of subfolders may be created here for structuring. 

    - -   -   Balance meter

            - Solar system meter

            - General meters that are distributed proportionally to billing units

            - Heat meters that are distributed proportionally to billing units

            - Water meters that are distributed proportionally to billing units


![Folder and Meter Configuration – Figure 7](/img/konfiguration-ordnerkonfiguration/07.png)

### Next step: Create the structure for your project

Now choose which guide you want to follow based on your project.

[Electricity only](/konfiguration/ordnerkonfiguration/nur-strom)

[Electricity and one heating system](/konfiguration/ordnerkonfiguration/strom-und-eine-heizung)

[Electricity and several heating systems](/konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen)

## Additional information

### Creating folders automatically with CSV files

smart-me offers the option of automating the creation of folders, the assignment and the renaming of meters by means of a CSV file. A smart-me Professional subscription is required for this function.

CSV files contain tabular data stored in text form. They can be edited with a text editor (e.g. notepad++).

Caution: existing folders are deleted when this function is used. This means that all functions that were used with these folders no longer work (e.g. if/then actions, smart-me billing configurations, etc.). 



<Video src="YQVcTxPgdzM" title="YouTube video, creating folders by means of a csv file" />

![Folder and Meter Configuration – Figure 8](/img/konfiguration-ordnerkonfiguration/08.png)

A configuration CSV file contains the following columns (do not change the order):

[](https://drive.google.com/open?id=1Ft_fg6mxKZCpPND-i5ZoWN6kAKacnDXD8rJGeOB40KM "Open Spreadsheet, wiki 2.0 tables in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1Ft_fg6mxKZCpPND-i5ZoWN6kAKacnDXD8rJGeOB40KM/htmlembed?gid=0" title="Spreadsheet, wiki 2.0 tables" />

wiki 2.0 tables

The separators ";" and "//" must not be used in names. They are reserved for separating columns and folders in paths.

If the 4 columns "MeterPointId", "ExportFormat", "UploadType" and "ExportInterval" are present, the meter is additionally registered for the Auto Export.

An example configuration without Auto Export:

```
MeterSerialNumber;MeterName;FolderPath
102177;Büro 100;Wohnung 1. Stock Links // Büro
636731327420929937;Wohnzimmer 101;Wohnung 1. Stock Links // Wohnzimmer
101163;Schlafzimmer 102;Wohnung 1. Stock Links // Schlafzimmer
```

An example configuration with Auto Export:

```
MeterSerialNumber;MeterName;FolderPath;MeterPointId;ExportFormat;UploadType;ExportInterval
102177;Büro 100;Wohnung 1. Stock Links // Büro;CH100;CSV_1;FTP_2;Weekly
636731327420929937;Wohnzimmer 101;Wohnung 1. Stock Links // Wohnzimmer;CH101;CSV_1;FTP_2;Daily
101163;Schlafzimmer 102;Wohnung 1. Stock Links // Schlafzimmer;CH102;CSV_1;FTP_2;Monthly
```

### Editing CSV files in Excel

Excel also supports editing CSV files. There are two points to observe:

1.  You must prevent Excel from rounding the meter serial number or displaying it in exponential form (e.g. by having Excel treat numbers as text.)

2.  The CSV file must use the UTF-8 character set. Excel does not display umlauts correctly in this case. In a text editor (e.g. notepad++), however, these characters are displayed correctly.


![Folder and Meter Configuration – Figure 9](/img/konfiguration-ordnerkonfiguration/09.png)

The recommended workflow is as follows:

1.  Log in on the [smart-me website](https://web.smart-me.com/login/).

2.  Click on Configuration (Konfiguration) at the top right

3.  Click on Meter / folder configuration (Zähler / Ordner Konfiguration)

4.  Click on Node configuration via CSV (Knoten Konfiguration über CSV)

5.  Click on Download node configuration (Download Knoten Konfiguration) to download the current configuration as a CSV file

6.  Edit the configuration

7.  Check in a text editor with support for the UTF-8 character set whether meter serial numbers and names are displayed correctly

8.  Click on Browse (Durchsuchen) and select the edited CSV file

9.  Click on Upload node configuration (Upload Knoten Konfiguration) to apply the configuration
    Caution: the resulting changes cannot be undone
