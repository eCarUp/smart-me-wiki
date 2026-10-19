---
title: 'Define tariff times'
slug: '/konfiguration/wenndann-aktionen/tarifzeiten-definieren'
description: 'Structure of the if action for virtual tariffs'
sidebar_label: 'Define tariff times'
naechste_schritte: [konfiguration/billing/stromtarife-definieren/index]
---
![Define tariff times – figure 1](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/01.png)

## Structure of the if action for virtual tariffs

You can use an additional condition to define when this tariff should apply. This can be a time span (e.g. for peak / off-peak tariff) or any other condition. The condition must first have been defined as an [if/then action](/konfiguration/wenndann-aktionen). The most common examples are described below.

Notes:

- Once you have defined all tariffs, you must click Recalculate (Neu rechnen). This ensures that all virtual tariffs are calculated correctly. This process can take a few hours.


<Video src="0LTDpKKA3-k" title="YouTube video, billing solar power at peak and off-peak tariff" />

### If / Then interface

![Define tariff times – figure 2](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/02.png)

## Creating a dual tariff step by step

Check the tariff sheet for the times that apply to the peak tariff. In our example, the situation is as follows:

Peak tariff (HT) time:

Mon–Fri: 7:00 to 22:00
Sat: 7:00 to 13:00£


Off-peak tariff (NT) time:

Mon–Fri: 22:00 to 7:00

Sat: 13:00 to 00:00

Sun: all day

### Creating the HT time

Click "+" to create a new timing.

Select the OR operator

OR function:

If any one of the IF conditions is met, it is HT time.

Under IF events (WENN Ereignisse), click "+" to create the HT time for Mon–Fri.

![Define tariff times – figure 3](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/03.png)

Select Date & time (Datum & Uhrzeit)



![Define tariff times – figure 4](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Define the times for Mon–Fri

7:00 to 22:00



and save the setting.

![Define tariff times – figure 5](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/05.png)

Under the IF events (WENN Ereignisse), click "+" again to define Saturday.

![Define tariff times – figure 6](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/06.png)

Select Date & time (Datum & Uhrzeit)

![Define tariff times – figure 7](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Define the times for Saturday

7:00 to 13:00



and save the setting.

![Define tariff times – figure 8](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/08.png)

The HT time is now defined.



Next comes the NT time

![Define tariff times – figure 9](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/09.png)

### Creating the NT time

<div className="row">
<div className="col col--5">

Click "+" to create a new timing.

Click "+" to add another action for the NT time

</div>
<div className="col col--7 text--center">

![Define tariff times – figure 10](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/10.png)

</div>
</div>

![Define tariff times – figure 11](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/11.png)

Select Date & time (Datum & Uhrzeit)

![Define tariff times – figure 12](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Define the NT time for Mon–Fri

In this case, it corresponds to the time from 22:00 to 7:00



Save the setting.

![Define tariff times – figure 13](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/13.png)

Click "+" to define Saturday

![Define tariff times – figure 14](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/14.png)

Select Date & time (Datum & Uhrzeit)

![Define tariff times – figure 15](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Saturday is defined as follows:

13:00 to 00:00 of the same day



Save the setting.

![Define tariff times – figure 16](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/16.png)

Click "+" to define the remaining Sunday

![Define tariff times – figure 17](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/17.png)

Select Date & time (Datum & Uhrzeit)

![Define tariff times – figure 18](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

For an all-day off-peak tariff on Sunday, enter 00:00 to 00:00 for Sunday.



Save the setting

![Define tariff times – figure 19](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/19.png)

<div className="row">
<div className="col col--4">

Now that you have defined the relevant tariff times, return to the tariff definition to assign the timings to the tariffs.

</div>
<div className="col col--8 text--center">

![Define tariff times – figure 20](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/20.png)

</div>
</div>

## Other examples

Structure: peak and off-peak tariff for grid power and flat tariff for solar power

- Solar power flat tariff: define a solar tariff without an if action

- Grid power peak tariff: define a normal tariff with an if action

    - Example: Mon to Fri 7h00 to 22h00 or Sat 7h00 to 13h00 

- Grid power off-peak tariff: define a normal tariff without an if action


Logic: The available solar power is distributed first. If too little or none is available, the normal tariff that meets a condition is used. Finally, the tariff without a condition is applied to the remaining power.

Structure: peak and off-peak tariff for grid and solar power

- Solar power peak tariff: define a solar tariff with an if action

    - Example: Mon to Fri 7h00 to 22h00 or Sat 7h00 to 13h00 

- Solar power off-peak tariff: define a solar tariff with an if action

    - Example: Mon to Fri 22h00 to 7h00 or Sat 13h00 to 7h00 or Sun 0h00 to 0h00

- Grid power peak tariff: define a normal tariff with an if action

    - Use the same if action as for the solar power peak tariff 

- Grid power off-peak tariff: define a normal tariff with an if action

    - Use the same if action as for the solar power off-peak tariff 


Logic: The available solar power with the valid condition is used first. If too little or none is available, the normal tariff with the valid condition is used. In this use case, it is important that 24h/day is covered by an if condition.

Structure: summer and winter with peak and off-peak tariff for grid power and flat tariff for solar power

- Solar power peak tariff: define a solar tariff without an if action

- Grid power peak tariff summer: define a normal tariff with an if action

    - Example: time span every day: Mon to Sun 7h00 to 22h00 and time span every year from 1 / 04 / 00:00 to 1 / 10 / 00:00.

- Grid power off-peak tariff summer: define a normal tariff with an if action

    - Example: time span every day: Mon to Sun 22h00 to 07h00 and time span every year from 1 / 04 / 00:00 to 1 / 10 / 00:00.

- Grid power peak tariff winter: define a normal tariff with an if action

    - Example: time span every day: Mon to Sun 7h00 to 22h00 and time span every year from 1 / 10 / 00:00 to 1 / 4 / 00:00.

- Grid power off-peak tariff winter: define a normal tariff with an if action

    - Example: time span every day: Mon to Sun 22h00 to 07h00 and time span every year from 1 / 10 / 00:00 to 1 / 4 / 00:00.


Logic: The available solar power is used first. If too little or none is available, the normal tariff with the valid condition is used. In this use case, it is important that 24h/day is covered by an if condition.

Structure: summer and winter with peak and off-peak tariff for grid power, flat tariff for solar power and off-peak tariff over midday in winter only (e.g. EWS/EBS)

Example

- Grid and solar power off-peak tariff winter 

    - Example: winter NT 22h00 to 07h00 between 1.10 and 1.4.

    - If/then action with AND operator

        - Time span every day: Mon to Sun 22h00 to 07h00 

        - Time span every year from 1 / 10 / 00:00 to 1 / 04 / 00:00.

- Grid and solar power peak tariff winter 

    - Example: winter HT 07h00 to 22h00 between 1.10 and 1.4.

    - If/then action with AND operator

        - Time span every day: Mon to Sun 7h00 to 22h00 

        - Time span every year from 1 / 10 / 00:00 to 1 / 04 / 00:00.

- Grid and solar power off-peak tariff summer

    - Example: summer NT 00h00 to 06h00 and 12h00 to 15h00 between 1.4 and 1.10

    - If/then action with AND operator

        - Time span every day: Mon to Sun 12h00 to 06h00 

        - Time span every day: Mon to Sun 00h00 to 15h00 

        - Time span every year from 1 / 4 / 00:00 to 1 / 10 / 00:00.

- Grid and solar power peak tariff summer 

    - Example: summer HT 06h00 to 12h00 and 15h00 to 00h00 between 1.4 and 1.10

    - If/then action with AND operator

        - Time span every day: Mon to Sun 06h00 to 00h00 

        - Time span every day: Mon to Sun 15h00 to 12h00 

        - Time span every year from 1 / 4 / 00:00 to 1 / 10 / 00:00.


Logic: The available solar power is used first. If too little or none is available, the normal tariff with the valid condition is used. In this use case, it is important that 24h/day is covered by an if condition.

Structure: summer and winter with peak and off-peak tariff for grid power and solar power, off-peak tariff during the day in summer and peak tariff in winter (e.g. Energie Uri from 1.10.2025)

Description: Here you need to work in two steps: once with if/then and once with the times in the virtual tariffs.

First, the if actions must be defined.

- Grid and solar power summer NT

    - Example: summer NT Mon to Fri 06h00 to 22h00 Mon to Fri and Sat and Sun always

    - Name: Uri Sommer NT

    - If/then action with OR operator

        - Time span Mon to Fri: 6h00 to 22h00 

        - Time span Sat and Sun: 00h00 to 00h00




- Grid and solar power summer HT

    - Example: summer HT Mon to Fri 22h00 to 06h00

    - Name: Uri Sommer HT

    - If/then action

        - Time span Mon to Fri: 22h00 to 06h00 




- Grid and solar power winter NT

    - Example: winter NT Mon to Fri 22h00 to 06h00 Mon to Fri and Sat and Sun always

    - Name: Uri Winter NT

    - If/then action with OR operator

        - Time span Mon to Fri: 22h00 to 06h00 

        - Time span Sat and Sun: 00h00 to 00h00




- Grid and solar power winter HT

    - Example: winter HT Mon to Fri 06h00 to 22h00

    - Name: Uri Winter HT

    - If/then action with OR operator

        - Time span Mon to Fri: 06h00 to 22h00 


Then the prices per time period must be defined.

In this case, the periods or durations must be entered. This tariff model requires a combination of if/then and period.

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
