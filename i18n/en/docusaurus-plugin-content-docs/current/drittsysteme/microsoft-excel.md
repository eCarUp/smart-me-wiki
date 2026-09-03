---
title: 'Microsoft Excel'
slug: '/drittsysteme/microsoft-excel'
description: 'In Microsoft Excel, it is possible to read data directly from our cloud.'
sidebar_label: 'Microsoft Excel'
---
In Microsoft Excel, it is possible to read data directly from our cloud. This opens up the possibility, for example, of combining data from various accounts in a database, reading it out and processing it.
Excel uses the Power Query Editor for this. It allows HTTP requests to be made via our API. You will find the available API commands and a test environment [here](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put). 

## Download example file

The file on the right-hand side contains a variable query of meter readings from one meter. This file can be extended with further meters.

All required functions are available in Excel 0365 or from Excel 2016 onwards.

To use the example file, download it and .. 

1.  Download the file

2.  Update the login data of the query according to the information in the "Dashboard" sheet.


<Embed src="https://drive.google.com/file/d/1xb5lgnMii5c1Bp7th9swMJrNhM4Go7ib/preview" aspect="1.330" title="Drive, API_Test_ValuesInPast_Example.xlsx" />

API\_Test\_ValuesInPast\_Example.xlsx

## Creating the connection

### Creating a data query from the web

Start Excel and, on the Data tab, click Get Data (Daten abrufen), From Other Sources (Aus anderen Quellen), From Web (Aus dem Web). 

![Microsoft Excel – figure 1](/img/drittsysteme-microsoft-excel/01.png)

### Entering the API command

Insert the API command link you want to query. In the example it is the command https://www.smart-me.com/api/Devices/&#123;id&#125; . So we want to read out all current data of the device with the respective ID.

You will find more information about the command itself in the test tool under the [link](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put) above. There you can also find out the ID of the device you want.

![Microsoft Excel – figure 2](/img/drittsysteme-microsoft-excel/02.png)

### Authentication for the link (password and user name)

Now you are asked to provide the authentication for the respective link. The user name and the password of the corresponding account are required.

1.  Select the corresponding link

2.  Click on Edit permissions (Berechtigungen bearbeiten)

3.  Under Credentials (Anmeldeinformationen), click on Edit (Bearbeiten)

4.  Enter the user name and the password of the account on the "Basic" ("Standard") tab


![Microsoft Excel – figure 3](/img/drittsysteme-microsoft-excel/03.png)

![Microsoft Excel – figure 4](/img/drittsysteme-microsoft-excel/04.png)

![Microsoft Excel – figure 5](/img/drittsysteme-microsoft-excel/05.png)

### Converting the data into a table in the Power Query Editor

After the import, a list of the imported data appears in the Power Query Editor. This data must now be converted into a table.



![Microsoft Excel – figure 6](/img/drittsysteme-microsoft-excel/06.png)

### Close and load

After closing and loading, a new worksheet with the information from the data source is created.

![Microsoft Excel – figure 7](/img/drittsysteme-microsoft-excel/07.png)

### Connection query settings (interval and refresh)

A window opens on the right-hand side which, by right-clicking on the existing connection, allows further settings. Here you can above all define refresh intervals for the respective connection.
On the Data tab, refreshes can also be triggered by user command.

![Microsoft Excel – figure 8](/img/drittsysteme-microsoft-excel/08.png)

![Microsoft Excel – figure 9](/img/drittsysteme-microsoft-excel/09.png)

![Microsoft Excel – figure 10](/img/drittsysteme-microsoft-excel/10.png)

## Data query with variables (querying meter readings with a variable date)

Querying historical data follows the same principle as building the link for the current data. The main difference is that data has to be queried with a modifiable piece of information (variable).
For this to be possible, two queries have to be made:

1.  A query within the Excel table on the "Date" variable.

2.  A query from the web with a suitable API command. The suitable command here is [https://smart-me.com/api/ValuesInPast/&#123;id](https://smart-me.com/api/ValuesInPast/%7Bid)&#125;  (daily meter data from the past)


### Creating the date variable

Choose a place in Excel where the date is to be entered. To do this, create a table under Insert (Einfügen) \--> Table (Tabelle). (Important)

![Microsoft Excel – figure 11](/img/drittsysteme-microsoft-excel/11.png)

![Microsoft Excel – figure 12](/img/drittsysteme-microsoft-excel/12.png)

Select a range of 4 cells so that there is room for a column name and the text including the value.

![Microsoft Excel – figure 13](/img/drittsysteme-microsoft-excel/13.png)

### Defining the table name for later programming

So that Power Query later knows in which table the variable can be found, the table is called by its name. To make this unambiguous, we assign a fixed name (here Datumsauswahl).

![Microsoft Excel – figure 14](/img/drittsysteme-microsoft-excel/14.png)

### Formatting the variable cell (text field)

So that the date can also be used later, the content has to be formatted as text. To do this, select the table and choose the format Text (Text) at the top.

![Microsoft Excel – figure 15](/img/drittsysteme-microsoft-excel/15.png)

### Querying the variable in Power Query

Now we can add the query for our variable in Power Query:

1.  Open Power Query


![Microsoft Excel – figure 16](/img/drittsysteme-microsoft-excel/16.png)

2\. Create a new query in Power Query (right-click under Queries)
3\. Create a blank query with the name "Datumsauswahl"



![Microsoft Excel – figure 17](/img/drittsysteme-microsoft-excel/17.png)

4\. Copy the following text into the function block of the query: \= Excel.CurrentWorkbook()&#123;\[Name="Datumsauswahl"\]&#125;\[Content\]
"Datumsauswahl" is the name of the table in which the value of the variable can be found.

![Microsoft Excel – figure 18](/img/drittsysteme-microsoft-excel/18.png)

### Linking the variable and the Excel value

Perform a drilldown to select the cell that contains the modifiable parameter:
select the cell with the date value --> right-click --> Drilldown.

After that the content of the cell stands on its own and from now on answers to the name "Datumsauswahl".

![Microsoft Excel – figure 19](/img/drittsysteme-microsoft-excel/19.png)

![Microsoft Excel – figure 20](/img/drittsysteme-microsoft-excel/20.png)

### Creating the query for the historical data

Create a new query by right-clicking on the query area on the left. Then select a query from the web.

![Microsoft Excel – figure 21](/img/drittsysteme-microsoft-excel/21.png)

The new query now contains the command for past data and looks as follows:

https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date=01.01.2021

It contains the path of the HTTP request and, at the end, a target date. We will later pass this target date in as a variable. 

For the creation, a hard-coded element can be passed in. Make sure that data already exists in the cloud for this date.

The date has the following format: month.day.year or mm.dd.yyyy

![Microsoft Excel – figure 22](/img/drittsysteme-microsoft-excel/22.png)

![Microsoft Excel – figure 23](/img/drittsysteme-microsoft-excel/23.png)

### Embedding the variable in the query

So that the fixed date is now replaced by our variable, the function command has to be adjusted slightly.

It changes from

\= Json.Document(Web.Contents("https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date=01.01.2021))

to

\= Json.Document(Web.Contents("https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date="&Datumsauswahl))



![Microsoft Excel – figure 24](/img/drittsysteme-microsoft-excel/24.png)

### Adapting the table content to your needs

Within the data set, the displayed content can now be restructured and adapted to the respective need.

In our example we would like to have all data provided with DeviceId, date, Obis code and value.



1.  Convert the content into a table


![Microsoft Excel – figure 25](/img/drittsysteme-microsoft-excel/25.png)

2.  Transpose rows and columns

![Microsoft Excel – figure 26](/img/drittsysteme-microsoft-excel/26.png)

![Microsoft Excel – figure 27](/img/drittsysteme-microsoft-excel/27.png)

3\. Use the first row as headers

![Microsoft Excel – figure 28](/img/drittsysteme-microsoft-excel/28.png)

4\. Edit the Values column and expand to new rows

![Microsoft Excel – figure 29](/img/drittsysteme-microsoft-excel/29.png)

![Microsoft Excel – figure 30](/img/drittsysteme-microsoft-excel/30.png)

5\. Select the additional row contents --> OK.

![Microsoft Excel – figure 31](/img/drittsysteme-microsoft-excel/31.png)

![Microsoft Excel – figure 32](/img/drittsysteme-microsoft-excel/32.png)

6\. Press Close and load (Schliessen und Laden)

![Microsoft Excel – figure 33](/img/drittsysteme-microsoft-excel/33.png)

### Interpreting and assigning Obis codes

The Obis codes are standardized. To be able to assign them, the Excel list with the Obis codes can be matched using VLOOKUP.
This gives you the name of the Obis code and the unit of the values.

[Obis Codes (Excel)](https://drive.google.com/open?id=1eTs4ZXD9AUagGxNEQSof0IWHkZg54nsK6SyHp4ygDSc&authuser=0)
