---
title: 'Microsoft Excel'
slug: '/drittsysteme/microsoft-excel'
description: 'In Microsoft Excel, you can import data from our cloud directly.'
sidebar_label: 'Microsoft Excel'
---
In Microsoft Excel, you can import data from our cloud directly. This makes it possible, for example, to combine data from different accounts in one database, read it out and process it.
Excel uses the Power Query Editor for this. With it, you can make HTTP requests using our API. You can find the available API commands and a test environment [here](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put). 

## Download sample file

The file  on the right contains a variable query of the meter readings of a meter. You can extend this file with more meters.

All required functions are available in Excel 0365 or Excel 2016 and later.

To use the sample file, download it and .. 

1.  Download the file

2.  Update the query login data according to the information in the "Dashboard" sheet.


<Embed src="https://drive.google.com/file/d/1xb5lgnMii5c1Bp7th9swMJrNhM4Go7ib/preview" height="520px" title="Drive, API_Test_ValuesInPast_Example.xlsx" />

API\_Test\_ValuesInPast\_Example.xlsx

## Creating the connection

### Creating a data query from the web

Start Excel and, on the Data tab, click Get Data, From Other Sources, From Web. 

![Microsoft Excel – Figure 1](/img/drittsysteme-microsoft-excel/01.png)

### Entering the API command

Paste the link of the API command you want to query.  In the example, this is the command https://www.smart-me.com/api/Devices/&#123;id&#125; . So we want to read out all current data of the device with the given ID.

You can find more information about the command itself in the test tool under the [link](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put) above. There you can also find the ID of the device you want.

![Microsoft Excel – Figure 2](/img/drittsysteme-microsoft-excel/02.png)

### Authentication for the link (password and user name)

You are now asked to enter the authentication for the link. You need the user name and password of the corresponding account.

1.  Select the corresponding link

2.  Click Edit Permissions

3.  Under Credentials, click Edit

4.  Enter the user name and password of the account in the "Basic" tab


![Microsoft Excel – Figure 3](/img/drittsysteme-microsoft-excel/03.png)

![Microsoft Excel – Figure 4](/img/drittsysteme-microsoft-excel/04.png)

![Microsoft Excel – Figure 5](/img/drittsysteme-microsoft-excel/05.png)

### Converting the data into a table in the Power Query Editor

After the import, the Power Query Editor shows a list of the imported data. You now need to convert this data into a table.



![Microsoft Excel – Figure 6](/img/drittsysteme-microsoft-excel/06.png)

### Close & Load

After Close & Load, a new worksheet is created with the information from the data source.

![Microsoft Excel – Figure 7](/img/drittsysteme-microsoft-excel/07.png)

### Connection query settings (interval and refresh)

A pane opens on the right. Right-click the existing connection there to access more settings. Here you can mainly set the refresh intervals of the connection.
On the Data tab, you can also refresh on demand.

![Microsoft Excel – Figure 8](/img/drittsysteme-microsoft-excel/08.png)

![Microsoft Excel – Figure 9](/img/drittsysteme-microsoft-excel/09.png)

![Microsoft Excel – Figure 10](/img/drittsysteme-microsoft-excel/10.png)

## Data query with variables (querying meter readings with a variable date)

Querying historical data follows the same principle as building the link for current data. The main difference is that the data has to be queried with a changeable value (variable).
To make this possible, you need two queries:

1.  A query within the Excel table for the variable "Date".

2.  A web query with a suitable API command. The suitable command here is [https://smart-me.com/api/ValuesInPast/&#123;id](https://smart-me.com/api/ValuesInPast/%7Bid)&#125;  (daily meter data from the past)


### Creating the date variable

In Excel, choose a location where the date is to be entered.  To do this, create a table under Insert \--> Table. (Important)

![Microsoft Excel – Figure 11](/img/drittsysteme-microsoft-excel/11.png)

![Microsoft Excel – Figure 12](/img/drittsysteme-microsoft-excel/12.png)

Select a range of 4 cells so that there is room for a column name and the text including the value.

![Microsoft Excel – Figure 13](/img/drittsysteme-microsoft-excel/13.png)

### Defining the table name for later programming

So that Power Query later knows which table contains the variable, the table is referenced by its name. To make this unambiguous, we assign a fixed name (here Datumsauswahl).

![Microsoft Excel – Figure 14](/img/drittsysteme-microsoft-excel/14.png)

### Formatting the variable field (text field)

So that the date can be used later, its content must be formatted as text. To do this, select the table and choose the Text format at the top.

![Microsoft Excel – Figure 15](/img/drittsysteme-microsoft-excel/15.png)

### Querying the variable in Power Query

Now we can add the query for our variable in Power Query:

1.  Open Power Query


![Microsoft Excel – Figure 16](/img/drittsysteme-microsoft-excel/16.png)

2\. Create a new query in Power Query (right-click under Queries)
3\. Create a Blank Query named "Datumsauswahl"



![Microsoft Excel – Figure 17](/img/drittsysteme-microsoft-excel/17.png)

4\. Copy the following text into the formula bar of the query: \= Excel.CurrentWorkbook()&#123;\[Name="Datumsauswahl"\]&#125;\[Content\]
"Datumsauswahl" is the name of the table that contains the value of the variable.

![Microsoft Excel – Figure 18](/img/drittsysteme-microsoft-excel/18.png)

### Linking the variable and the Excel value

Drill down to select the field that contains the changeable parameter:
Select the field with the date value --> right-click --> Drill Down.

The cell content now stands on its own and from now on goes by the name "Datumsauswahl".

![Microsoft Excel – Figure 19](/img/drittsysteme-microsoft-excel/19.png)

![Microsoft Excel – Figure 20](/img/drittsysteme-microsoft-excel/20.png)

### Creating the query for historical data

Create a new query by right-clicking the Queries pane on the left. Then select a query from the web.

![Microsoft Excel – Figure 21](/img/drittsysteme-microsoft-excel/21.png)

The new query now contains the command for historical data and looks like this:

https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date=01.01.2021

It contains the path of the HTTP request and a target date at the end. We will later pass this target date as a variable. 

To create the query, you can pass a hard-coded value. Make sure that data already exists in the cloud for this date.

The date has the following format: month.day.year, i.e. mm.dd.yyyy

![Microsoft Excel – Figure 22](/img/drittsysteme-microsoft-excel/22.png)

![Microsoft Excel – Figure 23](/img/drittsysteme-microsoft-excel/23.png)

### Embedding the variable in the query

To replace the fixed date with our variable, the formula needs to be adjusted slightly.

It changes from

\= Json.Document(Web.Contents("https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date=01.01.2021))

to

\= Json.Document(Web.Contents("https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date="&Datumsauswahl))



![Microsoft Excel – Figure 24](/img/drittsysteme-microsoft-excel/24.png)

### Adapting the table content to your needs

You can now restructure the displayed content within the data set and adapt it to your needs.

In our example, we want all data to include the DeviceId, date, OBIS code and value.



1.  Convert the content into a table


![Microsoft Excel – Figure 25](/img/drittsysteme-microsoft-excel/25.png)

2.  Transpose rows and columns

![Microsoft Excel – Figure 26](/img/drittsysteme-microsoft-excel/26.png)

![Microsoft Excel – Figure 27](/img/drittsysteme-microsoft-excel/27.png)

3\. Use First Row as Headers

![Microsoft Excel – Figure 28](/img/drittsysteme-microsoft-excel/28.png)

4\. Edit the Values column and Expand to New Rows

![Microsoft Excel – Figure 29](/img/drittsysteme-microsoft-excel/29.png)

![Microsoft Excel – Figure 30](/img/drittsysteme-microsoft-excel/30.png)

5\. Select additional row contents --> OK.

![Microsoft Excel – Figure 31](/img/drittsysteme-microsoft-excel/31.png)

![Microsoft Excel – Figure 32](/img/drittsysteme-microsoft-excel/32.png)

6\. Click Close & Load

![Microsoft Excel – Figure 33](/img/drittsysteme-microsoft-excel/33.png)

### Interpreting and assigning OBIS codes

OBIS codes are standardized. To assign them, you can match them against the Excel list of OBIS codes using VLOOKUP.
This gives you the name of the OBIS code and the unit of the values.

[OBIS codes (Excel)](https://drive.google.com/open?id=1eTs4ZXD9AUagGxNEQSof0IWHkZg54nsK6SyHp4ygDSc&authuser=0)
