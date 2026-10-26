---
title: 'Define tariff times'
slug: '/konfiguration/wenndann-aktionen/tarifzeiten-definieren'
description: 'Structure of the If action for virtual tariffs'
sidebar_label: 'Define tariff times'
naechste_schritte: [konfiguration/billing/stromtarife-definieren/index]
---
<Menueweg>If-Then Actions</Menueweg>

## Structure of the If action for virtual tariffs

<div className="row">
<div className="col col--6">

You can use an additional condition to define when this tariff should apply. This can be a time span (e.g. for peak / off-peak tariff) or any other condition. The condition must first be defined as an [if/then action](/konfiguration/wenndann-aktionen). The most common examples are described below.

Notes:

- Once you have defined all tariffs, you must click Recalculate (Neu rechnen). This ensures that all virtual tariffs are calculated correctly. This process can take several hours.

</div>
<div className="col col--6">

<Video src="0LTDpKKA3-k" title="YouTube video, billing solar in peak and off-peak tariff" />

</div>
</div>

### If / Then interface

![Define tariff times – Figure 2](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/02.png)

## Step by step: creating a dual tariff

Look up the peak tariff times on the tariff sheet. In our example, the situation is as follows:

<div className="row">
<div className="col col--6">

**HT time (peak tariff):**

Mon–Fri: 7:00 to 22:00

Sat: 7:00 to 13:00

</div>
<div className="col col--6">

**NT time (off-peak tariff):**

Mon–Fri: 22:00 to 7:00

Sat: 13:00 to 00:00

Sun: All day

</div>
</div>

### Create HT time

<div className="row">
<div className="col col--6">

Click the "+" to create a new timing.

Select the OR operator (Oder-Verknüpfung)

OR function (ODER):

If any one of the IF conditions is met, it is HT time.

Under IF events (WENN Ereignisse), click the "+" to create the HT time for Mon–Fri.

</div>
<div className="col col--6 bild--mitte">

![Define tariff times – Figure 3](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/03.png)

</div>
</div>

#### HT time Mon–Fri

![Date & Time](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Select Date & Time (Datum & Uhrzeit)

Define the times for Mon–Fri

7:00 to 22:00

and save the setting.

</div>
<div className="col col--6 bild--mitte">

![Define tariff times – Figure 5](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/05.png)

</div>
</div>

#### HT time Saturday

![Date & Time](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Under the IF events (WENN Ereignisse), click "+" again to define Saturday.

Select Date & Time (Datum & Uhrzeit)

Define the times for Saturday

7:00 to 13:00

and save the setting.

The HT time is now defined.

</div>
<div className="col col--6 bild--mitte">

![Define tariff times – Figure 6](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/06.png)

![Define tariff times – Figure 8](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/08.png)

![Define tariff times – Figure 9](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/09.png)

</div>
</div>

### Create NT time

<div className="row">
<div className="col col--6">

Click the "+" to create a new timing.

Click "+" to add another action for the NT time

</div>
<div className="col col--6 bild--mitte">

![Define tariff times – Figure 10](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/10.png)

![Define tariff times – Figure 11](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/11.png)

</div>
</div>

#### NT time Mon–Fri

![Date & Time](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Select Date & Time (Datum & Uhrzeit)

Define the NT time for Mon–Fri

In this case, it corresponds to the time from 22:00 to 7:00

Save the setting.

</div>
<div className="col col--6 bild--mitte">

![Define tariff times – Figure 13](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/13.png)

</div>
</div>

#### NT time Saturday

![Date & Time](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Click "+" to define Saturday

Select Date & Time (Datum & Uhrzeit)

Saturday is defined as follows:

13:00 to 00:00 of the same day

Save the setting.

</div>
<div className="col col--6 bild--mitte">

![Define tariff times – Figure 14](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/14.png)

![Define tariff times – Figure 16](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/16.png)

</div>
</div>

#### NT time Sunday

![Date & Time](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Click "+" to define the remaining Sunday

Select Date & Time (Datum & Uhrzeit)

For an all-day off-peak tariff on Sunday, enter 00:00 to 00:00 for Sunday.

Save the setting

</div>
<div className="col col--6 bild--mitte">

![Define tariff times – Figure 17](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/17.png)

![Define tariff times – Figure 19](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/19.png)

</div>
</div>

### Assign timings to the tariffs

<div className="row">
<div className="col col--6">

Now that you have defined the relevant tariff times, return to the tariff definition to assign the timings to the tariffs.

</div>
<div className="col col--6 bild--mitte">

![Define tariff times – Figure 20](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/20.png)

</div>
</div>

## Other examples

Depending on your energy supplier's tariff model, the If action looks different. Expand the setup that matches your case.

<details id="hoch-und-niedertarif-netzstrom-einheitstarif-solar">
<summary>Peak and off-peak tariff for grid electricity and flat tariff for solar electricity</summary>

- Solar electricity flat tariff: define solar tariff without If action

- Grid electricity peak tariff: define normal tariff with If action

    - Example: Mon to Fri 7h00 to 22h00 or Sat 7h00 to 13h00 

- Grid electricity off-peak tariff: define normal tariff without If action


Logic: First, the available solar electricity is distributed. If too little or none is available, the normal tariff that meets a condition is used. Finally, the tariff without a condition is applied to the remaining electricity.

</details>

<details id="hoch-und-niedertarif-netz-und-solarstrom">
<summary>Peak and off-peak tariff for grid and solar electricity</summary>

- Solar electricity peak tariff: define solar tariff with If action

    - Example: Mon to Fri 7h00 to 22h00 or Sat 7h00 to 13h00 

- Solar electricity off-peak tariff: define solar tariff with If action

    - Example: Mon to Fri 22h00 to 7h00 or Sat 13h00 to 7h00 or Sun 0h00 to 0h00

- Grid electricity peak tariff: define normal tariff with If action

    - Use the same If action as for the solar electricity peak tariff 

- Grid electricity off-peak tariff: define normal tariff with If action

    - Use the same If action as for the solar electricity off-peak tariff 


Logic: First, the available solar electricity with the valid condition is used. If too little or none is available, the normal tariff with the valid condition is used. In this use case, it is important that 24h/day is covered by an If condition.

</details>

<details id="sommer-winter-netzstrom-einheitstarif-solar">
<summary>Summer and winter with peak and off-peak tariff for grid electricity and flat tariff for solar electricity</summary>

- Solar electricity peak tariff: define solar tariff without If action

- Grid electricity peak tariff summer: define normal tariff with If action

    - Example: Time span Every day (Zeitspanne Jeden Tag): Mon to Sun 7h00 to 22h00 and time span Every year (Zeitspanne Jedes Jahr) from 1 / 04 / 00:00 to 1 / 10 / 00:00.

- Grid electricity off-peak tariff summer: define normal tariff with If action

    - Example: Time span Every day (Zeitspanne Jeden Tag): Mon to Sun 22h00 to 07h00 and time span Every year (Zeitspanne Jedes Jahr) from 1 / 04 / 00:00 to 1 / 10 / 00:00.

- Grid electricity peak tariff winter: define normal tariff with If action

    - Example: Time span Every day (Zeitspanne Jeden Tag): Mon to Sun 7h00 to 22h00 and time span Every year (Zeitspanne Jedes Jahr) from 1 / 10 / 00:00 to 1 / 4 / 00:00.

- Grid electricity off-peak tariff winter: define normal tariff with If action

    - Example: Time span Every day (Zeitspanne Jeden Tag): Mon to Sun 22h00 to 07h00 and time span Every year (Zeitspanne Jedes Jahr) from 1 / 10 / 00:00 to 1 / 4 / 00:00.


Logic: First, the available solar electricity is used. If too little or none is available, the normal tariff with the valid condition is used. In this use case, it is important that 24h/day is covered by an If condition.

</details>

<details id="sommer-winter-mit-mittagsniedertarif-im-winter">
<summary>Summer and winter with peak and off-peak tariff for grid electricity, flat tariff for solar electricity and off-peak tariff over midday in winter only (e.g. EWS/EBS)</summary>

Example

- Grid and solar electricity off-peak tariff winter 

    - Example: Winter NT 22h00 to 07h00 between 1.10 and 1.4.

    - If-Then action with AND operator (UND-Verknüpfung)

        - Time span Every day (Zeitspanne Jeden Tag): Mon to Sun 22h00 to 07h00 

        - Time span Every year (Zeitspanne Jedes Jahr) from 1 / 10 / 00:00 to 1 / 04 / 00:00.

- Grid and solar electricity peak tariff winter 

    - Example: Winter HT 07h00 to 22h00 between 1.10 and 1.4.

    - If-Then action with AND operator (UND-Verknüpfung)

        - Time span Every day (Zeitspanne Jeden Tag): Mon to Sun 7h00 to 22h00 

        - Time span Every year (Zeitspanne Jedes Jahr) from 1 / 10 / 00:00 to 1 / 04 / 00:00.

- Grid and solar electricity off-peak tariff summer

    - Example: Summer NT 00h00 to 06h00 and 12h00 to 15h00 between 1.4 and 1.10

    - If-Then action with AND operator (UND-Verknüpfung)

        - Time span Every day (Zeitspanne Jeden Tag): Mon to Sun 12h00 to 06h00 

        - Time span Every day (Zeitspanne Jeden Tag): Mon to Sun 00h00 to 15h00 

        - Time span Every year (Zeitspanne Jedes Jahr) from 1 / 4 / 00:00 to 1 / 10 / 00:00.

- Grid and solar electricity peak tariff summer 

    - Example: Summer HT 06h00 to 12h00 and 15h00 to 00h00 between 1.4 and 1.10

    - If-Then action with AND operator (UND-Verknüpfung)

        - Time span Every day (Zeitspanne Jeden Tag): Mon to Sun 06h00 to 00h00 

        - Time span Every day (Zeitspanne Jeden Tag): Mon to Sun 15h00 to 12h00 

        - Time span Every year (Zeitspanne Jedes Jahr) from 1 / 4 / 00:00 to 1 / 10 / 00:00.


Logic: First, the available solar electricity is used. If too little or none is available, the normal tariff with the valid condition is used. In this use case, it is important that 24h/day is covered by an If condition.

</details>

<details id="sommer-winter-tagsueber-wechselnd-energie-uri">
<summary>Summer and winter with peak and off-peak tariff for grid and solar electricity, off-peak tariff during the day in summer and peak tariff in winter (e.g. Energie Uri from 1.10.2025)</summary>

Description: This requires working in two steps. Once with If-Then and once with the times in the virtual tariffs

First, the If actions must be defined.

- Grid and solar electricity summer NT

    - Example: Summer NT Mon to Fri 06h00 to 22h00 Mon to Fri and Sat and Sun always

    - Name: Uri Sommer NT

    - If-Then action with OR operator (ODER-Verknüpfung)

        - Time span Mon to Fri: 6h00 to 22h00 

        - Time span Sat and Sun: 00h00 to 00h00




- Grid and solar electricity summer HT

    - Example: Summer HT Mon to Fri 22h00 to 06h00

    - Name: Uri Sommer HT

    - If-Then action

        - Time span Mon to Fri: 22h00 to 06h00 




- Grid and solar electricity winter NT

    - Example: Winter NT Mon to Fri 22h00 to 06h00 Mon to Fri and Sat and Sun always

    - Name: Uri Winter NT

    - If-Then action with OR operator (ODER-Verknüpfung)

        - Time span Mon to Fri: 22h00 to 06h00 

        - Time span Sat and Sun: 00h00 to 00h00




- Grid and solar electricity winter HT

    - Example: Winter HT Mon to Fri 06h00 to 22h00

    - Name: Uri Winter HT

    - If-Then action with OR operator (ODER-Verknüpfung)

        - Time span Mon to Fri: 06h00 to 22h00 


Then the prices per time period must be defined.

In this case, the periods or durations must be entered. This tariff model requires a combination of If-Then and period.

- Name: Uri Sommer HT Netz

    - Type: Grid tariff (Netztarif)

    - Duration: 1.4.2026 to 30.9.2026

    - Additional condition (Zusätzliche Bedingung): Uri Sommer HT

- Name: Uri Sommer HT Solar


- Type: Solar tariff incl. vZEV (Solartarif inkl. vZEV) 

- Duration: 1.4.2026 to 30.9.2026

- Additional condition (Zusätzliche Bedingung): Uri Sommer HT


- Name: Uri Sommer NT Netz

    - Type: Grid tariff (Netztarif)

    - Duration: 1.4.2026 to 30.9.2026

    - Additional condition (Zusätzliche Bedingung): Uri Sommer NT

- Name: Uri Sommer NT Solar

    - Type: Solar tariff incl. vZEV (balance/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Duration: 1.4.2026 to 30.9.2026

    - Additional condition (Zusätzliche Bedingung): Uri Sommer NT

- Name: Uri Winter HT Netz

    - Type: Grid tariff (Netztarif)

    - Duration: 1.10.2025 to 31.3.2026

    - Additional condition (Zusätzliche Bedingung): Uri Winter HT 

- Name: Uri Winter HT Solar

    - Type: Solar tariff incl. vZEV (balance/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Duration: 1.10.2025 to 31.3.2026

    - Additional condition (Zusätzliche Bedingung): Uri Winter HT

- Name: Uri Winter NT Netz

    - Type: Grid tariff (Netztarif)

    - Duration: 1.10.2025 to 31.3.2026

    - Additional condition (Zusätzliche Bedingung): Uri Winter NT

- Name: Uri Winter NT Solar

    - Type: Solar tariff incl. vZEV (balance/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Duration: 1.10.2025 to 31.3.2026

    - Additional condition (Zusätzliche Bedingung): Uri Winter NT 


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, Wiki tariffs Energie Uri tariffs 2026.mp4" />

Wiki Tarife Enerige Uri Tarife 2026.mp4

</details>
