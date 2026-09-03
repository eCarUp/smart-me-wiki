---
title: 'Defining tariff times'
slug: '/konfiguration/wenndann-aktionen/tarifzeiten-definieren'
description: 'Structure of the if action for virtual tariffs'
sidebar_label: 'Defining tariff times'
---
![Defining tariff times – Figure 1](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/01.png)

## Structure of the if action for virtual tariffs

You can use an additional condition to define from when this tariff is to be valid. This can be a time span (e.g. for peak / off-peak tariff) or any other condition. The condition must have been defined beforehand as an [if/then action](/konfiguration/wenndann-aktionen). The most common examples are described below.

Notes:

- Once you have defined all tariffs, you must click on Recalculate (Neu rechnen). This ensures that all virtual tariffs are calculated correctly. This process can take a few hours.


<Video src="0LTDpKKA3-k" title="YouTube video, Billing solar power at peak and off-peak tariffs" />

### If / then interface

![Defining tariff times – Figure 2](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/02.png)

## Creating a dual tariff step by step

Check the respective times for the peak tariff on the tariff sheet. In our example, the situation is as follows:

Peak tariff time:

Mon–Fri: 7:00 to 22:00
Sat: 7:00 to 13:00£


Off-peak tariff time:

Mon–Fri: 22:00 to 7:00

Sat: 13:00 to 00:00

Sun: whole day

### Creating the peak tariff time

Click on the "+" to create a new timing.

Select the OR link

OR function:

If one of the IF conditions applies, it is peak tariff time.

Under IF events, click on the "+" to create the peak tariff time Mon–Fri.

![Defining tariff times – Figure 3](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/03.png)

Select date & time



![Defining tariff times – Figure 4](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Define the times for Mon–Fri

7:00 to 22:00



and save the setting.

![Defining tariff times – Figure 5](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/05.png)

Under the IF events, click on "+" again to define Saturday.

![Defining tariff times – Figure 6](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/06.png)

Select date & time

![Defining tariff times – Figure 7](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Define the times for Saturday

7:00 to 13:00



and save the setting.

![Defining tariff times – Figure 8](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/08.png)

The peak tariff time is now defined.



Now on to the off-peak tariff time

![Defining tariff times – Figure 9](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/09.png)

### Creating the off-peak tariff time

Click on the "+" to create a new timing.

Click on "+" to add another action for the off-peak tariff time

![Defining tariff times – Figure 10](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/10.png)

![Defining tariff times – Figure 11](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/11.png)

Select date & time

![Defining tariff times – Figure 12](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Define the off-peak tariff time for Mon–Fri

In this case it corresponds to the time from 22:00 to 7:00



Save the setting.

![Defining tariff times – Figure 13](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/13.png)

Click on "+" to define Saturday

![Defining tariff times – Figure 14](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/14.png)

Select date & time

![Defining tariff times – Figure 15](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Saturday is defined as follows:

13:00 to 00:00 of the day



Save the setting.

![Defining tariff times – Figure 16](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/16.png)

Click on "+" to define the still missing Sunday

![Defining tariff times – Figure 17](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/17.png)

Select date & time

![Defining tariff times – Figure 18](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

For an all-day off-peak tariff on Sunday, enter 00:00 to 00:00 for Sunday.



Save the setting

![Defining tariff times – Figure 19](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/19.png)

Now that you have defined the relevant tariff times, return to the tariff definition to assign the timings to the tariffs.

![Defining tariff times – Figure 20](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/20.png)

### Next step: define tariffs with tariff times

## Other examples

Setup: peak and off-peak tariff for grid electricity and a single tariff for solar power

- Solar power single tariff: define solar tariff without if action

- Grid electricity peak tariff: define normal tariff with if action

    - Example. Mon to Fri 7h00 to 22h00 or Sat 7h00 to 13h00 

- Grid electricity off-peak tariff: define normal tariff without if action


Logic: first the available solar power is distributed. If too little or none is available, the normal tariff that meets a condition is used. Finally, the tariff without a condition is sent for the remaining electricity.

Setup: peak and off-peak tariff for grid and solar power

- Solar power peak tariff: define solar tariff with if action

    - Example: Mon to Fri 7h00 to 22h00 or Sat 7h00 to 13h00 

- Solar power off-peak tariff: define solar tariff with if action

    - Example: Mon to Fri 22h00 to 7h00 or Sat 13h00 to 7h00 or Sun 0h00 to 0h00

- Grid electricity peak tariff: define normal tariff with if action

    - Use the same if action as for the solar power peak tariff 

- Grid electricity off-peak tariff: define normal tariff with if action

    - Use the same if action as for the solar power off-peak tariff 


Logic: first the available solar power with the valid condition is used. If too little or none is available, the normal tariff with the valid condition is used. In this use case it is important that 24h/day is covered by an if condition.

Setup: summer and winter with peak and off-peak tariff for grid electricity and a single tariff for solar power

- Solar power peak tariff: define solar tariff without if action

- Grid electricity peak tariff summer: define normal tariff with if action

    - Example: time span every day: Mon to Sun 7h00 to 22h00 and time span every year from 1 / 04 / 00:00 to 1 / 10 / 00:00.

- Grid electricity off-peak tariff summer: define normal tariff with if action

    - Example: time span every day: Mon to Sun 22h00 to 07h00 and time span every year from 1 / 04 / 00:00 to 1 / 10 / 00:00.

- Grid electricity peak tariff winter: define normal tariff with if action

    - Example: time span every day: Mon to Sun 7h00 to 22h00 and time span every year from 1 / 10 / 00:00 to 1 / 4 / 00:00.

- Grid electricity off-peak tariff winter: define normal tariff with if action

    - Example: time span every day: Mon to Sun 22h00 to 07h00 and time span every year from 1 / 10 / 00:00 to 1 / 4 / 00:00.


Logic: first the available solar power is used. If too little or none is available, the normal tariff with the valid condition is used. In this use case it is important that 24h/day is covered by an if condition.

Setup: summer and winter with peak and off-peak tariff for grid electricity and a single tariff for solar power and an off-peak tariff over midday in winter only (e.g. EWS/EBS)

Example

- Grid and solar power off-peak tariff winter 

    - Example: winter off-peak tariff 22h00 to 07h00 between 1.10 and 1.4.

    - If/then action with AND link

        - Time span every day: Mon to Sun 22h00 to 07h00 

        - Time span every year from 1 / 10 / 00:00 to 1 / 04 / 00:00.

- Grid and solar power peak tariff winter 

    - Example: winter peak tariff 07h00 to 22h00 between 1.10 and 1.4.

    - If/then action with AND link

        - Time span every day: Mon to Sun 7h00 to 22h00 

        - Time span every year from 1 / 10 / 00:00 to 1 / 04 / 00:00.

- Grid and solar power off-peak tariff summer

    - Example: summer off-peak tariff 00h00 to 06h00 and 12h00 to 15h00 between 1.4 and 1.10

    - If/then action with AND link

        - Time span every day: Mon to Sun 12h00 to 06h00 

        - Time span every day: Mon to Sun 00h00 to 15h00 

        - Time span every year from 1 / 4 / 00:00 to 1 / 10 / 00:00.

- Grid and solar power peak tariff summer 

    - Example: summer peak tariff 06h00 to 12h00 and 15h00 to 00h00 between 1.4 and 1.10

    - If/then action with AND link

        - Time span every day: Mon to Sun 06h00 to 00h00 

        - Time span every day: Mon to Sun 15h00 to 12h00 

        - Time span every year from 1 / 4 / 00:00 to 1 / 10 / 00:00.


Logic: first the available solar power is used. If too little or none is available, the normal tariff with the valid condition is used. In this use case it is important that 24h/day is covered by an if condition.

Setup: summer and winter with peak and off-peak tariff for grid and solar power, off-peak tariff during the day in summer and peak tariff in winter (e.g. Energie Uri from 1.10.2025)

Description: here you have to work in two steps. 1x if/then and 1x with the times in the virtual tariffs

First the if actions have to be defined.

- Grid and solar power summer off-peak tariff

    - Example: summer off-peak tariff Mon to Fri 06h00 to 22h00 Mon to Fri and Sat and Sun always

    - Name: Uri Sommer NT

    - If/then action with OR link

        - Time span Mon to Fri: 6h00 to 22h00 

        - Time span Sat and Sun: 00h00 to 00h00




- Grid and solar power summer peak tariff

    - Example: summer peak tariff Mon to Fri 22h00 to 06h00

    - Name: Uri Sommer HT

    - If/then action

        - Time span Mon to Fri: 22h00 to 06h00 




- Grid and solar power winter off-peak tariff

    - Example: winter off-peak tariff Mon to Fri 22h00 to 06h00 Mon to Fri and Sat and Sun always

    - Name: Uri Winter NT

    - If/then action with OR link

        - Time span Mon to Fri: 22h00 to 06h00 

        - Time span Sat and Sun: 00h00 to 00h00




- Grid and solar power winter peak tariff

    - Example: winter peak tariff Mon to Fri 06h00 to 22h00

    - Name: Uri Winter HT

    - If/then action with OR link

        - Time span Mon to Fri: 06h00 to 22h00 


Then the prices per time period have to be defined.

The periods or durations have to be entered in this case. With this tariff model, a combination of if/then and period is necessary.

- Name: Uri Sommer HT Netz

    - Type: grid tariff (Netztarif)

    - Duration: 1.4.2026 to 30.9.2026

    - Additional condition: Uri Sommer HT

- Name: Uri Sommer HT Solar


- Type: solar tariff incl. vZEV (Solartarif inkl. vZEV) 

- Duration: 1.4.2026 to 30.9.2026

- Additional condition: Uri Sommer HT


- Name: Uri Sommer NT Netz

    - Type: grid tariff (Netztarif)

    - Duration: 1.4.2026 to 30.9.2026

    - Additional condition: Uri Sommer NT

- Name: Uri Sommer NT Solar

    - Type: solar tariff incl. vZEV (Solartarif inkl. vZEV) (balance/production)

    - Duration: 1.4.2026 to 30.9.2026

    - Additional condition: Uri Sommer NT

- Name: Uri Winter HT Netz

    - Type: grid tariff (Netztarif)

    - Duration: 1.10.2025 to 31.3.2026

    - Additional condition: Uri Winter HT 

- Name: Uri Winter HT Solar

    - Type: solar tariff incl. vZEV (Solartarif inkl. vZEV) (balance/production)

    - Duration: 1.10.2025 to 31.3.2026

    - Additional condition: Uri Winter HT

- Name: Uri Winter NT Netz

    - Type: grid tariff (Netztarif)

    - Duration: 1.10.2025 to 31.3.2026

    - Additional condition: Uri Winter NT

- Name: Uri Winter NT Solar

    - Type: solar tariff incl. vZEV (Solartarif inkl. vZEV) (balance/production)

    - Duration: 1.10.2025 to 31.3.2026

    - Additional condition: Uri Winter NT 


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, Wiki Tarife Enerige Uri Tarife 2026.mp4" />

Wiki Tarife Enerige Uri Tarife 2026.mp4
