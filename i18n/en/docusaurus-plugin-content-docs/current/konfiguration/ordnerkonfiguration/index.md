---
title: 'Folder and Meter Configuration'
slug: '/konfiguration/ordnerkonfiguration'
description: 'Video tutorial: creating folders and assigning meters'
sidebar_label: 'Folder configuration'
naechste_schritte: [konfiguration/ordnerkonfiguration/nur-strom, konfiguration/ordnerkonfiguration/strom-und-eine-heizung, konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen]
---
<Embed src="https://player.vimeo.com/video/661999827" aspect="1.291" title="Folder configuration" />

Video tutorial: creating folders and assigning meters

## Step-by-step guide

### Navigating to the Folder and Meter Configuration area

<div className="row">
<div className="col col--6">

1.  Log in to the [smart-me website](https://web.smart-me.com/).

2.  In the menu on the left, navigate to "Folder and Meter Configuration" ("Zähler- und Ordnerkonfiguration")

</div>
<div className="col col--6 text--center">

![Folder and Meter Configuration – Figure 1](/img/konfiguration-ordnerkonfiguration/01.png)

</div>
</div>

### Description of the actions

![Folder and Meter Configuration – Figure 2](/img/konfiguration-ordnerkonfiguration/02.png)

Add node (Knoten Hinzufügen):

Adds a node with a name and a freely selectable icon.

The name determines the order in which the node is displayed in the tree. 

1.  Sorted by numbers

2.  Sorted alphabetically


Edit folder node (Ordner Knoten Editieren) 

Allows changes to the node name, icon and parent folder.



Edit meter node (Zähler Knoten editieren)

Name (Name):  Set the name of the meter.
Description (Beschreibung):
Optionally add a description for the meter.
Value correction (Wert Korrektur): 
Corrects the meter's measured value in the cloud. (Position calculations)
Parent folder value correction (Überordner Wert Korrektur):
Defines as a percentage how much of the measured value is to be summed in the parent folder.
Meter active (Zähler aktiv):
Activate or deactivate a meter to save licenses. Deactivated meters no longer show any data. You can find more information on deactivated meters in our FAQ under [How do I deactivate my meter?](/faq#wie-deaktiviere-ich-meinen-zähler)

To activate or deactivate several meters at once, you can move them into a folder in the Folder and Meter Configuration (Zähler- / Ordnerkonfiguration), right-click that folder and choose a bulk action. 

![Deactivate meters](/img/konfiguration-ordnerkonfiguration/03.jpg)

Delete node (Knoten Löschen)

Deletes the selected node or meter point from the tree. 

Meters then return to the left-hand side as unassigned meters.

![Folder and Meter Configuration – Figure 4](/img/konfiguration-ordnerkonfiguration/04.png)

### Labelling meters

<div className="row">
<div className="col col--8">

- All meters must be installed in the corresponding account. [Commissioning](/konfiguration/inbetriebnahme) 

- All meters must be labelled. Our suggestions for meter names 

    - Usage unit meter number (e.g. WHG 1 6352415)

    - Medium usage unit meter number (e.g. Wärme WHG 1)

</div>
<div className="col col--4 text--center">

![Folder and Meter Configuration – Figure 5](/img/konfiguration-ordnerkonfiguration/05.png)

</div>
</div>

### Converting cold water meters to domestic hot water meters (if necessary)

<div className="row">
<div className="col col--7">

Some M-Bus meter manufacturers report during data transmission that the meter is a cold water meter, even though it should be a domestic hot water meter. In this case, the meter type must be overridden in smart-me.

- Navigate to the dashboard

- Select the meter in the Dashboard menu

- Select the gear icon at the top right

- Advanced settings (Erweiterte Einstellungen)

- Change the device type (Geräte Type).

- Save (Speichern)

Note: This adjustment provides support in smart-me Billing. The Auto Export for energy suppliers is not changed by it.

Note: For technical reasons, this change is not possible with heat and cooling meters.

</div>
<div className="col col--5 text--center">

![Folder and Meter Configuration – Figure 6](/img/konfiguration-ordnerkonfiguration/06.png)

</div>
</div>

### Folder structures and their effect on downstream processes

The current system allows billing for electricity to be created automatically. For this to work, heat and water must be kept separate from electricity. Mixed systems are nevertheless possible to reduce the effort for tenant lists, but unfortunately the automated creation of invoices is then lost.

In systems with several heating systems, however, splitting into several properties is unavoidable.

Each individually created property can in principle represent 1x electricity and 1x heat/water.

<Embed src="/embeds/konfiguration-ordnerkonfiguration-02.html" aspect="2.308" title="Folder configuration" />

### Basics of the tree structure and creating nodes

To prepare a building for billing, the appropriate properties and billing units must be created.

Basic folder structure of each individual property

The basic structure for each form of energy and each building consists of two basic nodes and multiple sub-nodes:

- Property (later configuration of a billing)

    - -   Billing unit 1 of the property (apartment or rooms)

            - -   Apartment meter (100% share)

        - Billing unit 2 of the property (apartment or rooms)

        - ...

- Technical meters (collection of meter points that are not billed directly)

    Any number of subfolders may be created here for structuring. 

    - -   -   Balance meter

            - Solar system meter

            - General meters distributed as a percentage across billing units

            - Heat meters distributed as a percentage across billing units

            - Water meters distributed as a percentage across billing units

![Folder and Meter Configuration – Figure 7](/img/konfiguration-ordnerkonfiguration/07.png)

### Create the structure for your project

Now choose, based on your project, which guide you want to follow.

[Electricity only](/konfiguration/ordnerkonfiguration/nur-strom)

[Electricity and one heating system](/konfiguration/ordnerkonfiguration/strom-und-eine-heizung)

[Electricity and several heating systems](/konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen)

## Additional information

### Creating folders automatically with CSV files

smart-me offers the option of automating the creation of folders, assignments and renaming of meters using a CSV file. This function requires a smart-me Professional subscription.

CSV files contain tabular data stored in text form. They can be edited with a text editor (e.g. notepad++).

Caution: existing folders are deleted when this function is used. This means that all functions used with these folders will no longer work (e.g. if/then actions, smart-me billing configurations, etc.). 



<Video src="YQVcTxPgdzM" title="YouTube video, creating folders using a CSV file" />

![Folder and Meter Configuration – Figure 8](/img/konfiguration-ordnerkonfiguration/08.png)

A configuration CSV file contains the following columns (do not change the order):

[](https://drive.google.com/open?id=1Ft_fg6mxKZCpPND-i5ZoWN6kAKacnDXD8rJGeOB40KM "Open Spreadsheet, wiki 2.0 Tabellen in new window")

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

7.  Check the configuration in a text editor that supports the UTF-8 character set to make sure meter serial numbers and names are displayed correctly

8.  Click Browse (Durchsuchen) and select the edited CSV file

9.  Click Upload node configuration (Upload Knoten Konfiguration) to apply the configuration
    Caution: the resulting changes cannot be undone
