---
title: 'Input and Output Configuration'
slug: '/schnittstellen/ein_und_ausgaenge'
description: 'Configure inputs and outputs'
sidebar_label: 'Inputs and outputs'
---
## Configure inputs and outputs

smart-me meters have one or more outputs that can be used as a pulse output or as a potential-free contact.  By default, the S0\_0 output is defined as a pulse output and S1 as a digital relay output named "Relay" ("Relais").

![Input and Output Configuration – Figure 1](/img/schnittstellen-ein_und_ausgaenge/01.png)

### External wiring of the inputs and outputs

Controlling E1 with a tariff signal or load shedding

![Input and Output Configuration – Figure 2](/img/schnittstellen-ein_und_ausgaenge/02.png)

Switching on and off with Telstar: S1 and S0 are wired identically

![Input and Output Configuration – Figure 3](/img/schnittstellen-ein_und_ausgaenge/03.png)

### Pulse output

You can configure the output as a pulse output. You can choose between reactive energy and active energy.

Note: It is not possible to distinguish between consumption and feed-in. The absolute value is always output.

### Configuration as a potential-free contact

If the output is defined as a potential-free contact, you can control any device via the smart-me Cloud. Control can be manual (on/off) or automated via [event actions](/konfiguration/wenndann-aktionen/ereignisaktionen) or [if/then actions](/konfiguration/wenndann-aktionen).

1.  Log in to the [smart-me website](https://web.smart-me.com/login/) or the smart-me app

2.  Select a meter and click "Edit" ("Editieren").

3.  Under "Outputs" ("Ausgänge"), select the output you want and configure it as "Digital output" ("Digitaler Ausgang")

    - You can give the output any name you like.

    - You can define an action to be carried out if the meter loses its connection to the smart-me Cloud.


NOTE:
If S1 is not used as a digital output, you can also hide it from the view by switching it to pulse output.
In the tenant view, the outputs cannot be switched on or off, even if they are visible there.

![Input and Output Configuration – Figure 4](/img/schnittstellen-ein_und_ausgaenge/04.png)

### Online view when commissioning a Telstar 80A or CT

![Input and Output Configuration – Figure 5](/img/schnittstellen-ein_und_ausgaenge/05.png)

### Online view after activating S0\_0 as a digital output

![Input and Output Configuration – Figure 6](/img/schnittstellen-ein_und_ausgaenge/06.png)

### Wiring the outputs

Observe the maximum voltage, current and power ratings of each output. Put simply, each potential-free output can be thought of as a switch that is not connected. For it to work, there must be a circuit from high to low potential.

The outputs do not supply any voltage themselves, so a voltage source must be connected upstream.

For 230V AC circuits:

- 230 VAC to the "+" contact of S1

- Wire the "-" contact of S1 to the "+" input of the external circuit.

- Finally, connect the "-" of the external circuit to the neutral conductor. (No resistive load needs to be connected)


For DC circuits:

- from + VDC to the "+" contact of S1

- Wire the "-" contact of S1 to the "+" input of the external circuit.

- Finally, connect the "-" of the external circuit to GND.


![Input and Output Configuration – Figure 7](/img/schnittstellen-ein_und_ausgaenge/07.png)

\*Depending on the device type

![Input and Output Configuration – Figure 8](/img/schnittstellen-ein_und_ausgaenge/08.png)

## Configure the input

smart-me meters have a digital input that can be used as a tariff input or as a normal digital input. By default, this input is defined as a tariff input. If the input is configured as a digital input, it can be used as an event to control other devices or trigger alarms.  If the input is defined as a tariff input, metering switches from tariff 1 to tariff 2 when a voltage is applied.

### Configuration as a digital input

To configure an input as a digital input, proceed as follows:

1.  Log in to the [smart-me website](https://web.smart-me.com/login/) or the smart-me app.

2.  Select a meter and click "Edit" ("Editieren").

3.  Under "Inputs and outputs" ("Eingänge und Ausgänge"), configure the input as "Digital input" ("Digitaler Eingang")

    - You can give the input any name you like.

    - You can define a text to be displayed when the input is "On" ("Ein") or "Off" ("Aus").

4.  You will now see the digital input and its status in the smart-me app and on the smart-me web portal.


### Using the digital input for control

You can use the digital input to switch other devices or send alarms. To do this, define the if event "Switching state" ("Schaltzustand") under [if/then actions](/konfiguration/wenndann-aktionen/ereignisaktionen).

### Wiring the connection

To switch the potential-free contact, an external voltage and potential (e.g. neutral conductor) must be applied. The voltage values for each product can be found in its technical data. 

Logic:
1 (High) = voltage from the data sheet
0 (Low) = 0 volts

Note: With DC voltage, observe the polarity (E1+/E1-); with AC voltage, polarity does not matter.
