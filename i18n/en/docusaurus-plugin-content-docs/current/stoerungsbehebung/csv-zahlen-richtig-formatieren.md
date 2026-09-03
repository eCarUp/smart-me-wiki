---
title: 'Formatting CSV Numbers Correctly'
slug: '/stoerungsbehebung/csv-zahlen-richtig-formatieren'
description: 'You open a CSV file in Excel and the numbers...'
sidebar_label: 'Formatting CSV numbers correctly'
---
### General

You open a CSV file in Excel and the numbers... look broken.

The problem is almost always the global confusion around separators (that is, the battle between 1,000.50, 1,000.50, 1'000.50 and 1000.50). Unfortunately, Excel is somewhat stubborn here and expects an import format that matches your regional system settings exactly.

Since our smart-me system is not yet able to export the perfect CSV format for every single region, a manual adjustment in Excel is sometimes necessary.

Below you will find two simple solutions to make sure Excel displays your data correctly.

### Editing the CSV with Find/Replace

- Select all values that are formatted incorrectly.

- Press Ctrl+H


![Formatting CSV Numbers Correctly – Figure 1](/img/stoerungsbehebung-csv-zahlen-richtig-formatieren/01.png)

### Editing the CSV with Find/Replace

- Press Ctrl+H

- Search for "." (period)

- Replace with "" (nothing)

- Replace all

- Search for "," (comma)

- Replace with "." (period)

- Replace all


![Formatting CSV Numbers Correctly – Figure 2](/img/stoerungsbehebung-csv-zahlen-richtig-formatieren/02.png)

### Changing the number separators in Excel.

- File (Datei)

- Excel Options (Excel Optionen)

- Advanced (Erweitert)

- Deselect Use system separators (Trennzeichen vom Betriebssystem übernehmen)

    - Decimal separator ,  (comma)

    - Thousands separator .  (period)


![Formatting CSV Numbers Correctly – Figure 3](/img/stoerungsbehebung-csv-zahlen-richtig-formatieren/03.png)
