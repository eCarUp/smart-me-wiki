---
title: 'Formatting CSV Numbers Correctly'
slug: '/stoerungsbehebung/csv-zahlen-richtig-formatieren'
description: 'You open a CSV file in Excel and the numbers...'
sidebar_label: 'Format CSV numbers correctly'
---
### General

You open a CSV file in Excel and the numbers... look broken.

The problem is almost always the global mix-up of separators (the battle between 1.000,50, 1,000.50, 1'000.50 and 1000.50). Unfortunately, Excel is somewhat stubborn here and expects a format on import that matches your regional system settings exactly.

Since our smart-me system cannot yet export the perfect CSV format for every single region, a manual adjustment in Excel is sometimes necessary.

Below are two simple solutions to make sure Excel displays your data correctly.

### Edit CSV with Find/Replace

- Select all values that are formatted incorrectly.

- Press Ctrl+H


![Formatting CSV Numbers Correctly – Figure 1](/img/stoerungsbehebung-csv-zahlen-richtig-formatieren/01.png)

### Edit CSV with Find/Replace

<div className="row">
<div className="col col--4">

- Press Ctrl+H

- Find "." (period)

- Replace with "" (nothing)

- Replace All

- Find "," (comma)

- Replace with "." (period)

- Replace All

</div>
<div className="col col--8 text--center">

![Formatting CSV Numbers Correctly – Figure 2](/img/stoerungsbehebung-csv-zahlen-richtig-formatieren/02.png)

</div>
</div>

### Change the number separators in Excel.

- File

- Excel Options

- Advanced

- Uncheck "Use system separators"

    - Decimal separator ,  (comma)

    - Thousands separator .  (period)


![Formatting CSV Numbers Correctly – Figure 3](/img/stoerungsbehebung-csv-zahlen-richtig-formatieren/03.png)
