---
title: 'Input and Output Configuration'
slug: '/schnittstellen/ein_und_ausgaenge'
description: 'Configure inputs and outputs'
sidebar_label: 'Inputs and Outputs'
---
## Configure inputs and outputs

smart-me meters have one or more outputs that can be used as a pulse output or as a potential-free contact.  By default, the S0\_0 output is set up as a pulse output and S1 as a digital relay output with the name "Relay" ("Relais").

![Meter inputs and outputs – Figure 1](/img/schnittstellen-ein_und_ausgaenge/01.png)

### External wiring of the inputs and outputs

Control E1 with a tariff signal or load shedding

![Meter inputs and outputs – Figure 2](/img/schnittstellen-ein_und_ausgaenge/02.png)

Circuit for switching on and off with Telstar: wire S1 and S0 the same way

![Meter inputs and outputs – Figure 3](/img/schnittstellen-ein_und_ausgaenge/03.png)

### Pulse output

You can configure the output as a pulse output. You can choose between reactive energy and active energy.

Note: You cannot distinguish between consumption and delivery. The output always shows the absolute value.

### Configuration as a potential-free contact

If you set up the output as a potential-free contact, you can control any device through the smart-me Cloud. You can control it manually (on/off) or automatically with [event actions](/konfiguration/wenndann-aktionen/ereignisaktionen) or [if/then actions](/konfiguration/wenndann-aktionen).

1.  Log in to the [smart-me website](https://web.smart-me.com/login/) or the smart-me app

2.  Select a meter and click "Edit" ("Editieren").

3.  Under "Outputs" ("Ausgänge"), select the output you want and configure it as "Digital output" ("Digitaler Ausgang")

    - You can give the output any name.

    - You can define an action that runs if the meter loses its connection to the smart-me Cloud.


NOTE:
If S1 is not used as a digital output, you can hide it from the view by switching it to pulse output.
In the tenant view, outputs cannot be switched on or off, even if they are visible there.

![Meter inputs and outputs – Figure 4](/img/schnittstellen-ein_und_ausgaenge/04.png)

### Online view during commissioning of a Telstar 80A or CT

![Meter inputs and outputs – Figure 5](/img/schnittstellen-ein_und_ausgaenge/05.png)

### Online view after activating S0\_0 as a digital output

![Meter inputs and outputs – Figure 6](/img/schnittstellen-ein_und_ausgaenge/06.png)

### Wiring the outputs

Check the maximum voltage, current and power ratings of each output. Put simply, think of each potential-free output as a switch that is not connected to anything. For it to work, you must create a circuit from high to low potential.

The outputs do not supply any voltage themselves, so you must connect a voltage source before them.

For 230V AC circuits:

- 230 VAC to the "+" contact of S1

- Wire the "-" contact of S1 to the "+" input of the external circuit.

- Finally, connect the "-" of the external circuit to the neutral conductor. (You do not need to connect a resistive load)


For DC circuits:

- from + VDC to the "+" contact of S1

- Wire the "-" contact of S1 to the "+" input of the external circuit.

- Finally, connect the "-" of the external circuit to GND.


![Meter inputs and outputs – Figure 7](/img/schnittstellen-ein_und_ausgaenge/07.png)

\*Depending on the device type

![Meter inputs and outputs – Figure 8](/img/schnittstellen-ein_und_ausgaenge/08.png)

## Configure input

smart-me meters have a digital input that you can use as a tariff input or as a standard digital input. By default, this input is set up as a tariff input. If you configure the input as a digital input, you can use it as an event to control other devices or trigger alarms.  If the input is set up as a tariff input, metering switches from tariff 1 to tariff 2 when voltage is applied.

### Configuration as a digital input

To configure an input as a digital input, follow these steps:

1.  Log in to the [smart-me website](https://web.smart-me.com/login/) or the smart-me app.

2.  Select a meter and click "Edit" ("Editieren").

3.  Under "Inputs and outputs" ("Eingänge und Ausgänge"), configure the input as "Digital input" ("Digitaler Eingang")

    - You can give the input any name.

    - You can set the text that is displayed when the input is "On" ("Ein") or "Off" ("Aus").

4.  The digital input and its status now appear in the smart-me app and on the smart-me web portal.


### Using the digital input for control

You can use the digital input to switch other devices or send alarms. To do this, define the "Switching state" ("Schaltzustand") trigger event under [if/then actions](/konfiguration/wenndann-aktionen/ereignisaktionen).

### Wiring the connection

To switch the potential-free contact, you must apply an external voltage and potential (e.g. neutral conductor). You can find the voltage values in the technical data of each product. 

Logic:
1 (High) = voltage from data sheet
0 (Low) = 0 volts

Note: With DC voltage, you must observe the polarity (E1+/E1-). With AC voltage, polarity does not matter.
