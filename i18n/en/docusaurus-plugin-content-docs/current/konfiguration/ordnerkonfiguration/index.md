---
title: 'Folder and Meter Configuration'
slug: '/konfiguration/ordnerkonfiguration'
description: 'Video guide to creating folders and assigning meters'
sidebar_label: 'Folder configuration'
naechste_schritte: [konfiguration/ordnerkonfiguration/nur-strom, konfiguration/ordnerkonfiguration/strom-und-eine-heizung, konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen, konfiguration/ordnerkonfiguration/mieterstrom-standard, konfiguration/ordnerkonfiguration/mieterstrom-nicht-teilnehmer]
---
<Menueweg>Meter & Folder Configuration</Menueweg>

<div className="row">
<div className="col col--6">

## Node functions

![Folder and Meter Configuration – Figure 2](/img/konfiguration-ordnerkonfiguration/02.png)

### Add node (Knoten Hinzufügen):

Adds a node with a name and a freely selectable icon.

The name determines the order in which the node is displayed in the tree. 

1.  Sorted by numbers

2.  Sorted alphabetically


### Edit folder node (Ordner Knoten Editieren) 

Allows you to change the node name, icon and parent folder.

</div>
<div className="col col--6 text--center">

<Embed src="https://player.vimeo.com/video/661999827" aspect="1.291" title="Folder configuration" />
Video guide to creating folders and assigning meters

</div>
</div>

### Edit meter node (Zähler Knoten editieren)

Name (Name):  Set the name of the meter.
Description (Beschreibung):
Optionally add a description for the meter.
Value correction (Wert Korrektur): 
Corrects the measured value of the meter in the cloud. (Position calculations)
Parent folder value correction (Überordner Wert Korrektur):
Defines as a percentage how much of the measured value is summed up in the parent folder.
Meter active (Zähler aktiv):
Activate or deactivate a meter to save licenses. Deactivated meters no longer show any data. You can find more information on deactivated meters in our FAQ under [How do I deactivate my meter?](/faq#wie-deaktiviere-ich-meinen-zähler)

To activate or deactivate several meters at once, move them into a folder in the folder and meter configuration, right-click the folder and select a bulk action. 

![Deactivating meters](/img/konfiguration-ordnerkonfiguration/03.jpg)

### Delete node (Knoten Löschen)

Deletes the selected node or metering point from the tree. 

Meters then move back to the left-hand side as unassigned meters.

![Folder and Meter Configuration – Figure 4](/img/konfiguration-ordnerkonfiguration/04.png)

## Labelling meters

<div className="row">
<div className="col col--8">

- All meters must be installed in the corresponding account. [Commissioning](/konfiguration/inbetriebnahme) 

- All meters must be labelled. Our suggestions for meter names 

    - Usage unit meter number (e.g. APT 1 6352415)

    - Medium usage unit meter number (e.g. Heat APT 1)

</div>
<div className="col col--4 text--center">

![Folder and Meter Configuration – Figure 5](/img/konfiguration-ordnerkonfiguration/05.png)

</div>
</div>

## Converting cold water meters to domestic hot water meters

<div className="row">
<div className="col col--7">

Some M-Bus meter manufacturers state in the data transmission that the meter is a cold water meter, even though it should be a domestic hot water meter. In this case, the meter type must be overridden in smart-me.

- Navigate to the Dashboard (Dashboard)

- Select the meter in the Dashboard (Dashboard) menu

- Select the gear icon at the top right

- Advanced settings (Erweiterte Einstellungen)

- Change the device type (Geräte Type).

- Save (Speichern)

Note: This adjustment enables support in smart-me Billing. The Auto Export for energy suppliers is not affected by it.

Note: For technical reasons, this change is not possible with heat meters and cooling meters.

</div>
<div className="col col--5 text--center">

![Folder and Meter Configuration – Figure 6](/img/konfiguration-ordnerkonfiguration/06.png)

</div>
</div>

## Folder structures and their impact on subsequent processes

The current system allows automated billing of electricity. For this to work, heat and water must be kept separate from electricity. Mixed systems are nevertheless possible to save effort on the tenant lists, but unfortunately the automation of billing is lost as a result.

For systems with several heating systems, however, splitting into several properties is unavoidable.

Each individually created property can always map 1x electricity and 1x heat/water.

<Embed src="/embeds/konfiguration-ordnerkonfiguration-02.html" aspect="2.308" title="Folder configuration" />

## Basics of the tree structure and creating nodes

To prepare a building for billing, the appropriate properties and billing units must be created.

Basic folder structure of each individual property

The basic structure for each form of energy and each building consists of two basic nodes and multiple sub-nodes:

- Property (later configuration of a billing)

    - -   Billing unit 1 of the property (apartment or rooms)

            - -   Apartment meter (100% share)

        - Billing unit 2 of the property (apartment or rooms)

        - ...

- Technical meters (collection of metering points not billed directly)

    Any number of subfolders may be created here for structuring. 

    - -   -   Balance meter

            - Solar system meter

            - General meters distributed as a percentage across billing units

            - Heat meters distributed as a percentage across billing units

            - Water meters distributed as a percentage across billing units

![Folder and Meter Configuration – Figure 7](/img/konfiguration-ordnerkonfiguration/07.png)

## Create the structure for your project

Now choose, based on your project, which guide you want to follow at the end of the page.


## CSV upload of folder structures

<details id="ordner-mit-csv-erstellen">
<summary>Creating folders automatically with CSV files</summary>

### Creating folders automatically with CSV files

smart-me offers the option of automating the creation of folders, assignments and renaming of meters using a CSV file. This function requires a smart-me Professional subscription.

CSV files contain tabular data stored as text. They can be edited with a text editor (e.g. notepad++).

Caution: existing folders are deleted when this function is used. This means that all functions that were used with these folders no longer work (e.g. if/then actions, smart-me billing configurations, etc.). 



<Video src="YQVcTxPgdzM" title="YouTube video, creating folders using a csv file" />

![Folder and Meter Configuration – Figure 8](/img/konfiguration-ordnerkonfiguration/08.png)

A configuration CSV file contains the following columns (do not change the order):

[](https://drive.google.com/open?id=1Ft_fg6mxKZCpPND-i5ZoWN6kAKacnDXD8rJGeOB40KM "Open Spreadsheet, wiki 2.0 tables in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1Ft_fg6mxKZCpPND-i5ZoWN6kAKacnDXD8rJGeOB40KM/htmlembed?gid=0" height="252px" title="Spreadsheet, wiki 2.0 tables" />

wiki 2.0 tables

The separators ";" and "//" must not be used in names. They are reserved for separating columns and folders in paths.

If the 4 columns "MeterPointId", "ExportFormat", "UploadType" and "ExportInterval" are present, the meter is additionally registered for Auto Export.

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

Excel also supports editing CSV files. There are two points to bear in mind:

1.  You must prevent Excel from rounding the meter serial number or displaying it in exponential notation (e.g. by having Excel treat numbers as text.)

2.  The CSV file must use the UTF-8 character set. Excel does not display umlauts correctly. In a text editor (e.g. notepad++), however, these characters are displayed correctly.


![Folder and Meter Configuration – Figure 9](/img/konfiguration-ordnerkonfiguration/09.png)

The recommended workflow is as follows:

1.  Log in to the [smart-me website](https://web.smart-me.com/login/).

2.  Click Configuration (Konfiguration) at the top right

3.  Click Meter / Folder Configuration (Zähler / Ordner Konfiguration)

4.  Click Node configuration via CSV (Knoten Konfiguration über CSV)

5.  Click Download node configuration (Download Knoten Konfiguration) to download the current configuration as a CSV file

6.  Edit the configuration

7.  Check the configuration in a text editor that supports the UTF-8 character set to make sure that meter serial numbers and names are displayed correctly

8.  Click Browse (Durchsuchen) and select the edited CSV file

9.  Click Upload node configuration (Upload Knoten Konfiguration) to apply the configuration
    Caution: the resulting changes cannot be undone

</details>
