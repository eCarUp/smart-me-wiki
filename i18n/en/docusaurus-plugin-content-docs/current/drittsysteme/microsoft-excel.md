---
title: 'Microsoft Excel'
slug: '/drittsysteme/microsoft-excel'
description: 'In Microsoft Excel it is possible to read data directly from our cloud.'
sidebar_label: 'Microsoft Excel'
---
In Microsoft Excel it is possible to read data directly from our cloud. This opens up the possibility, of merging, reading and processing data from different accounts in one database.
The Power Query Editor is used for this in Excel. This can be used to make HTTP requests using our API.

The possible API commands and test environment can be found here: [https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken\_Put](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put) 

## Download example file

The file contains a variable query of meter readings for one meter. This file can easily be supplemented with additional meters.

The necessary functions require Excel from O365 or from Excel 2016.



1.  Download the file

2.  Update the login data query according to the information in the "Dashboard" table.


<Video src="" title="Video" />

API\_Test\_ValuesInPast\_Example.xlsx

## Create a connection

### Set a simple request

First, you'll create a data query from the web.

![Microsoft Excel – figure 1](/img/_en/third-party-systems-microsoft-excel/01.png)

### Enter API command

Paste the command link of the API you want to query. Here in the example it is the https://www.smart-me.com/api/Devices/ &#123;id&#125; command. We want to read out all current data of the device with the respective ID directly.

You can find more information about the command itself in the test tool at the link above. There you can also find out the ID of the device you want.

![Microsoft Excel – figure 2](/img/_en/third-party-systems-microsoft-excel/02.png)

### Authentication for the link (login and password)

Now you will be asked to enter the authentication of the respective link. Username and password of your account or the corresponding account are required.

1.  select the appropriate link

2.  Edit permissions

3.  Edit credentials

4.  Enter the username and password of the account


![Microsoft Excel – figure 3](/img/_en/third-party-systems-microsoft-excel/03.png)

![Microsoft Excel – figure 4](/img/_en/third-party-systems-microsoft-excel/04.png)

![Microsoft Excel – figure 5](/img/_en/third-party-systems-microsoft-excel/05.png)

### Convert the data to a table in the Power Query Editor

Following the import, a list of the imported data is now created in the Power Query Editor. Now convert this data into a table.



![Microsoft Excel – figure 6](/img/_en/third-party-systems-microsoft-excel/06.png)

### Close and load

After closing and loading, a new worksheet is created with the information from the data source.

![Microsoft Excel – figure 7](/img/_en/third-party-systems-microsoft-excel/07.png)

### Connection query settings (interval and update)

A window opens on the right-hand side which allows further settings to be made by right-clicking on the existing connection. Above all, update intervals can be set here for the respective connection.

In the data tab, updates can also be made on user command.

![Microsoft Excel – figure 8](/img/_en/third-party-systems-microsoft-excel/08.png)

![Microsoft Excel – figure 9](/img/_en/third-party-systems-microsoft-excel/09.png)

![Microsoft Excel – figure 10](/img/_en/third-party-systems-microsoft-excel/10.png)

## Data query with variables (query meter readings with variable date)

The data query of historical data follows the same principle as the link structure of the actual data. The main difference is that data must be queried with a variable.

In order for this to be possible, two queries must be made.

1.  Query within the Excel where the variable "Date" sits.

2.  Query from the web with a suitable API command. The appropriate command here is https://smart-me.com/api/ValuesInPast/&#123;id&#125; (daily counter data from the past)


### Create the date variable

Select a place within Excel where you want to enter the date. To do this, create a table under Insert --> Table. (Important)

![Microsoft Excel – figure 11](/img/_en/third-party-systems-microsoft-excel/11.png)

![Microsoft Excel – figure 12](/img/_en/third-party-systems-microsoft-excel/12.png)

Select an area for 4 fields so that there is space for a column name, the text including the value.

![Microsoft Excel – figure 13](/img/_en/third-party-systems-microsoft-excel/13.png)

### Define table name for later programming

So that Power Query later knows in which table the variable can be found, it is called by the name. That this is clear, we assign a fixed name. (Here "DateSelection")

![Microsoft Excel – figure 14](/img/_en/third-party-systems-microsoft-excel/14.png)

### Format variable field (text field)

So that the date can also be used later, the content must be formatted as text.



To do this, select the table and select the Text format at the top.

![Microsoft Excel – figure 15](/img/_en/third-party-systems-microsoft-excel/15.png)

### Query the variable in Power Query

Now we can add the query in Power Query for this variable.

1.  Open Power Query


![Microsoft Excel – figure 16](/img/_en/third-party-systems-microsoft-excel/16.png)

2\. Create a new query in Power Query (right click under Query) 

3\. Create a "Blank Query" named "DateSelection"



![Microsoft Excel – figure 17](/img/_en/third-party-systems-microsoft-excel/17.png)

Copy the following text into the function block of the query: \=Excel.CurrentWorkbook()&#123;\[Name ="DateSelection"\]&#125;\[Content\] 

"DateSelection" is the name of the table in which the value of the variable can be found.

![Microsoft Excel – figure 18](/img/_en/third-party-systems-microsoft-excel/18.png)

### Link variable and Excel value

Now drill down to select the field in which the changeable parameter is located. Select the field with the date value -> right click -> drill down.

After that, the content of the cell stands alone and from now on listens to the name "Date selection".

![Microsoft Excel – figure 19](/img/_en/third-party-systems-microsoft-excel/19.png)

![Microsoft Excel – figure 20](/img/_en/third-party-systems-microsoft-excel/20.png)

### Create a query for the historical data

Create a new query by right-clicking on the query area on the left.



Choose a query from the web.

![Microsoft Excel – figure 21](/img/_en/third-party-systems-microsoft-excel/21.png)

The new query now contains the command for past data and looks like this:

https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date=01.01.2021

It contains the path of the HTTP request and a target date at the end. We will give this target date as a variable later.

A fixed-coded element can be provided for creation. Make sure that data already exists on the cloud on this date.

The date has the following format: month.day.year or mm.dd.yyyy

![Microsoft Excel – figure 22](/img/_en/third-party-systems-microsoft-excel/22.png)

![Microsoft Excel – figure 23](/img/_en/third-party-systems-microsoft-excel/23.png)

### Embed the variable in the query

So that the fixed date is now replaced by our variable, the function command must be adjusted a little.

It changes from:

\= Json.Document (Web.Contents ("https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date=01.01.2021))

To:

\= Json.Document (Web.Contents ("https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date="&DateSelection))



![Microsoft Excel – figure 24](/img/_en/third-party-systems-microsoft-excel/24.png)

### Adapt table content to requirements

Now the content displayed within the data record can be restructured and adapted to the respective needs.

We would like to have all data provided with DeviceId, Date, Obis code and Value.



1.  Convert into Table


![Microsoft Excel – figure 25](/img/_en/third-party-systems-microsoft-excel/25.png)

2.  Swap rows and columns

![Microsoft Excel – figure 26](/img/_en/third-party-systems-microsoft-excel/26.png)

3\. Use the first line as headings

![Microsoft Excel – figure 27](/img/_en/third-party-systems-microsoft-excel/27.png)

4\. Edit Values column and expand to new rows.

![Microsoft Excel – figure 28](/img/_en/third-party-systems-microsoft-excel/28.png)

![Microsoft Excel – figure 29](/img/_en/third-party-systems-microsoft-excel/29.png)

![Microsoft Excel – figure 30](/img/_en/third-party-systems-microsoft-excel/30.png)

![Microsoft Excel – figure 31](/img/_en/third-party-systems-microsoft-excel/31.png)

6\. Press Close and Load in Home Tab.

![Microsoft Excel – figure 32](/img/_en/third-party-systems-microsoft-excel/32.png)

### Interpret and assign obis codes

The obis codes are standardized. In order to be able to assign these, the Excel list can be compared with the Obis codes with VLOOKUP. This gives you the name of the Obis code and the unit of the values.

[Obis Codes (Excel)](https://drive.google.com/open?id=1eTs4ZXD9AUagGxNEQSof0IWHkZg54nsK6SyHp4ygDSc&authuser=0)
