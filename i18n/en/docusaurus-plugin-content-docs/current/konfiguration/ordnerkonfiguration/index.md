---
title: 'Folder and Meter Configuration'
slug: '/konfiguration/ordnerkonfiguration'
description: 'Step-by-Step Instructions'
sidebar_label: 'Folder and Meter Configuration'
---
<Video src="" title="Video" />

## Step-by-Step Instructions

1.  Navigation to the Meter and Folder Configuration Area

2.  Log in to the [smart-me website](http://www.smart-me.com).

3.  Navigate to "Meter and Folder Configuration" in the left-hand menu.


![Folder and Meter Configuration – figure 1](/img/_en/configuration-folder-configuration/01.png)

### Function description of actions

![Folder and Meter Configuration – figure 2](/img/_en/configuration-folder-configuration/02.png)

Add Node

Adds a node with a name and a freely selectable icon.

The name affects the order in which the node is displayed in the tree.

1.  Numerical order

2.  Alphabetical order


Edit Folder Node

Allows changes to the node name, icon, and hierarchy (subordination).



Edit Meter Node

Name: Set the name of the meter.

Description: Optionally add a description for the meter.

Value Correction: Corrects the meter's measured value on the cloud side (Situation calculations).

Parent Folder Value Correction: Defines the percentage of the measured value that should be summed up in the parent folder.

Meter active: Activate or deactivate a meter to save licenses. Deactivated meters no longer display data. You can find more information about deactivated meters in our FAQ under How do I deactivate my meter?.

To activate or deactivate multiple meters at the same time, you can move them into a folder in the meter / folder configuration, right-click on it, and select a bulk action.

![Zähler deaktvieren](/img/_en/configuration-folder-configuration/03.jpg)

Delete Node

Deletes the selected node or meter point from the tree.

Meters will then revert to the left side as unassigned meters.

![Folder and Meter Configuration – figure 4](/img/_en/configuration-folder-configuration/04.png)

### Labeling Meters

All meters must be installed in the corresponding account. [Commissioning](/konfiguration/inbetriebnahme)

All meters must be labeled. Our suggestions for meter designations:

- -   Unit Meter number (e.g., APT 1 6352415)

    - Medium Unit Meter number (e.g., Heat APT 1)




(Note: "WHG" stands for "Wohnung", which I translated to "APT" for Apartment. You can also use "Unit" or "Flat" depending on your preference).

![Folder and Meter Configuration – figure 5](/img/_en/configuration-folder-configuration/05.png)

### Change cold water meters to warm water meters (if needed)

Certain M-Bus meter manufacturers indicate during data transmission that it is a cold water meter, even when it should be a hot water meter. In this case, the meter type must be overridden in smart-me.

1.Navigate to the Dashboard:

Go to the main Dashboard.

2.Select the meter:

Choose the meter in the Dashboard menu.

3.Click the gear icon:

Select the gear icon in the top right corner.

4.Advanced Settings:

Click on Advanced Settings.

5.Change Device Type:

Modify the device type.

6.Save:

Save your changes.

Note: This adjustment provides support in smart-me Billing. The auto-export for energy providers is not affected by this.

Note: For technical reasons, this manipulation is not possible with heat and cooling meters.



![Folder and Meter Configuration – figure 6](/img/_en/configuration-folder-configuration/06.png)

### Folder structures and their influence on later processes

The current system allows for automated electricity billing. For this to work, heat and water must be kept separate from electricity. Nevertheless, mixed systems are possible to reduce the administrative effort for the tenant registers; unfortunately, this results in the loss of automated billing.

For systems with multiple heating setups, however, a separation into multiple properties is unavoidable.

Fundamentally, each individually created property is capable of mapping 1x electricity and 1x heat/water.

<Video src="" title="Custom embed" />

## Correctly Mapping Buildings and Measurement Points

To prepare a building for billing, the appropriate properties and billing units must be created.

### Basic Folder Structure for Each Building

The basic structure for each energy type and building consists of three main folders:

- Property (billing configuration)

    - -   Billing Unit 1 of the Property (Apartment or Rooms)

            - -   Apartement meter (100% shares)

        - Billing Unit 2 of the Property (Apartment or Rooms)

        - ...

- Technical Meters (Collection of meter points not billed directly)
    Any number of subfolders may be created here. 

    - -   -   Balance meter

            - Solar meter

            - General meters that are distributed on a percentage basis across billing units

            - Heat meters that are distributed on a percentage basis across billing units

            - Water meters distributed as percentages across billing units


Important note:

Each property can cover 1x electricity and 1x heat/water. If there are multiple heating systems involved, multiple properties are required. In this case, as many properties are created as there are heating systems.

### Next step: create the structure for your project

Choose now the next step according to your current project:

[Only Electricity](https://doc.smart-me.com/configuration/folder-configuration/only-electricity)

[Electricity and 1 heat system](https://doc.smart-me.com/configuration/folder-configuration/electricity-and-1-heat-system)

[Electricity and multiple heat systems](https://doc.smart-me.com/configuration/folder-configuration/electricity-and-multiple-heat-systems)

## Create folder and assign meter

In smart-me you can create a folder structure and assign corresponding meters to this folder. This allows you to map a building with different billing units (e.g. flats), for example.

To create new folders, proceed as follows:

1.  Log in to the smart-me [website](https://web.smart-me.com/login/).

2.  Click on Configuration in the top right-hand corner

3.  Click on Counter / Folder Configuration

4.  To create a new folder select Add Node.

5.  To assign a counter to a folder, drag and drop the counter into the folder. Folders can also be moved using drag & drop.


If you want to undo the allocation of a meter, select the corresponding meter and click on Delete Node. The counter is now displayed again under Unassigned counters. 

## Automatically creating folders with a CSV file

smart-me allows users to automate the process of creating folders as well as assigning and renaming meters using a CSV file. You will need a smart-me Professional subscription to use this function.

CSV files contain tabular data that is stored in text form. They can be edited with a text editor (e.g. notepad++).

Please note: Using this function will cause existing folders to be deleted. This means that any functions used with these folders will no longer work, e.g. if-then actions, smart-me billing configurations, etc. 

![Folder and Meter Configuration – figure 7](/img/_en/configuration-folder-configuration/07.png)

The following columns (do not change the order) are contained in a configuration CSV file:

[](https://drive.google.com/open?id=1Ft_fg6mxKZCpPND-i5ZoWN6kAKacnDXD8rJGeOB40KM "Open Spreadsheet, Spalten der Konfigurations-CSV-Datei  in new window")

<Video src="" title="Video" />

Spalten der Konfigurations-CSV-Datei

The separators ‘;’ and ‘//’ must not be used in names. They are reserved for separating columns and folders in paths.

If the four columns – ‘MeterPointId’, ‘ExportFormat’, ‘UploadType’ and ‘ExportInterval’ are present – the meter is also registered for auto export.

A sample configuration without auto export:

```
MeterSerialNumber;MeterName;FolderPath
102177;Büro 100;Wohnung 1. Stock Links // Büro
636731327420929937;Wohnzimmer 101;Wohnung 1. Stock Links // Wohnzimmer
101163;Schlafzimmer 102;Wohnung 1. Stock Links // Schlafzimmer
```

A sample configuration with auto export:

```
MeterSerialNumber;MeterName;FolderPath;MeterPointId;ExportFormat;UploadType;ExportInterval
102177;Büro 100;Wohnung 1. Stock Links // Büro;CH100;CSV_1;FTP_2;Weekly
636731327420929937;Wohnzimmer 101;Wohnung 1. Stock Links // Wohnzimmer;CH101;CSV_1;FTP_2;Daily
101163;Schlafzimmer 102;Wohnung 1. Stock Links // Schlafzimmer;CH102;CSV_1;FTP_2;Monthly
```




### Editing CSV files in Excel

Excel also supports the editing of CSV files. There are two points to consider here:

1.  Excel must be prevented from rounding the meter serial number or displaying it in an exponential form, e.g. by treating numbers as text in Excel.

2.  The CSV file must be in the UTF-8 character set. Excel does not display umlauts correctly. However, these characters are displayed correctly in a text editor (e.g. notepad++).


![Folder and Meter Configuration – figure 8](/img/_en/configuration-folder-configuration/08.png)

The recommended workflow is as follows:

1.  Log into the smart-me website: [https://web.smart-me.com/login/](https://web.smart-me.com/login/)

2.  Click on ‘Configuration’ in the top right-hand corner

3.  Click on ‘Meter/folder configuration’

4.  Click on ‘Node configuration via CSV’

5.  Click on ‘Download node configuration’ to download the current configuration as a CSV file

6.  Edit the configuration

7.  Check the configuration in a text editor that supports the UTF-8 character set to check whether meter serial numbers and names are displayed correctly

8.  Click on ‘Browse’ and select the edited CSV file

9.  Click on ‘Upload node configuration’ to apply the configuration (caution: the resulting changes cannot be undone)
