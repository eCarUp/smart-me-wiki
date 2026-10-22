---
title: 'Input and Output Configuration'
slug: '/schnittstellen/ein-und-ausgaenge'
description: 'Configure inputs and outputs'
sidebar_label: 'Inputs and Outputs'
---
## Configure inputs and outputs

<div className="row">
<div className="col col--6">

The smart-me meters have one or more outputs, which can be used as a pulse output or as a potential-free contact.  By default, the S0\_0 output is defined as a pulse output and S1 as a digital relay output with the name "Relay" ("Relais").

</div>
<div className="col col--6 text--center">

![Meter inputs and outputs – Figure 1](/img/schnittstellen-ein-und-ausgaenge/01.png)

</div>
</div>

### External wiring of the inputs and outputs

Controlling E1 with a tariff signal or load shedding

![Meter inputs and outputs – Figure 2](/img/schnittstellen-ein-und-ausgaenge/02.png)

Switching on and off with Telstar (S1 and S0) is wired identically

![Meter inputs and outputs – Figure 3](/img/schnittstellen-ein-und-ausgaenge/03.png)

### Pulse output

The output can be configured as a pulse output. You can choose between reactive energy and active energy.

Note: It is not possible to distinguish between consumption and delivery. The absolute value is always output.

### Configuration as a potential-free contact

If the output is defined as a potential-free contact, any device can be controlled via the smart-me Cloud. Control can be manual (on/off) or automated via [event actions](/konfiguration/wenndann-aktionen/ereignisaktionen) or [if/then actions](/konfiguration/wenndann-aktionen).

1.  Log in to the [smart-me website](https://web.smart-me.com/login/) or the smart-me app

2.  Select a meter and click "Edit" ("Editieren").

3.  Under "Outputs" ("Ausgänge"), select the desired output and configure it as "Digital output" ("Digitaler Ausgang")

    - You can give the output any name you like.

    - You can define an action to be executed if the meter loses its connection to the smart-me Cloud.


NOTE:
If S1 is not used as a digital output, it can also be hidden from the view by switching it to pulse output.
In the tenant view, the outputs cannot be activated or deactivated, even if they are visible there.

![Meter inputs and outputs – Figure 4](/img/schnittstellen-ein-und-ausgaenge/04.png)

### Online view when commissioning a Telstar 80A or CT

![Meter inputs and outputs – Figure 5](/img/schnittstellen-ein-und-ausgaenge/05.png)

### Online view after activating S0\_0 as a digital output

![Meter inputs and outputs – Figure 6](/img/schnittstellen-ein-und-ausgaenge/06.png)

### Wiring the outputs

Observe the maximum voltage, current and power ratings of the respective outputs. Put simply, each of the potential-free outputs can be regarded as an unconnected switch. For it to work, a circuit from high to low potential must be established.

The outputs do not provide any voltage level themselves, so a voltage source must be connected upstream.

For 230V AC circuits:

- 230 VAC to the "+" contact of S1

- Wire the "-" contact of S1 to the "+" input of the external circuit.

- Finally, connect the "-" of the external circuit to the neutral conductor. (No resistive load needs to be connected)


For DC circuits:

- from + VDC to the "+" contact of S1

- Wire the "-" contact of S1 to the "+" input of the external circuit.

- Finally, connect the "-" of the external circuit to GND.


![Meter inputs and outputs – Figure 7](/img/schnittstellen-ein-und-ausgaenge/07.png)

\*Depending on the device type

![Meter inputs and outputs – Figure 8](/img/schnittstellen-ein-und-ausgaenge/08.png)

## Configure the input

The smart-me meters have a digital input that can be used as a tariff input or as a normal digital input. By default, this input is defined as a tariff input. If the input is configured as a digital input, it can be used as an event to control other devices or trigger alarms.  If the input is defined as a tariff input, metering switches from tariff 1 to tariff 2 when a voltage is applied.

### Configuration as a digital input

To configure an input as a digital input, proceed as follows:

1.  Log in to the [smart-me website](https://web.smart-me.com/login/) or the smart-me app.

2.  Select a meter and click "Edit" ("Editieren").

3.  Under "Inputs and outputs" ("Eingänge und Ausgänge"), configure the input as "Digital input" ("Digitaler Eingang")

    - You can give the input any name you like.

    - You can define a text to be displayed when the input is "On" ("Ein") or "Off" ("Aus").

4.  You can now see the digital input and its status in the smart-me app and on the smart-me web portal.


### Using the digital input for control

You can use the digital input to switch other devices or send alarms. To do this, define the if event "Switching state" ("Schaltzustand") under the [if/then actions](/konfiguration/wenndann-aktionen/ereignisaktionen).

### Wiring the connection

To switch the potential-free contact, an external voltage and potential (e.g. neutral conductor) must be applied. The respective voltage values can be found in the technical data of the individual products. 

Logic:
1 (High) = voltage according to data sheet
0 (Low) = 0 volts

Note: With DC voltage, the polarity (E1+/E1-) must be observed, whereas it does not matter with AC voltage.
