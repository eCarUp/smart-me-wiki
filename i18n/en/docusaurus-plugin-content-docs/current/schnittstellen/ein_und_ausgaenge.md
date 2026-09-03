---
title: 'Input and Output Configuration'
slug: '/schnittstellen/ein_und_ausgaenge'
description: 'The smart-me meters have one or more outputs that can be used as pulse outputs or as potential-free contacts.'
sidebar_label: 'Input and Output Configuration'
---
## Output configuration

The smart-me meters have one or more outputs that can be used as pulse outputs or as potential-free contacts. The S0\_0 output is defined as a pulse output and the S1 as a digital relay output with the name "Relay".

![Input and Output Configuration – figure 1](/img/_en/interfaces-input-and-output-configuration/01.png)

### External wiring of the inputs and outputs

E1 control with tariff signal or load shedding signal

![Input and Output Configuration – figure 2](/img/_en/interfaces-input-and-output-configuration/02.png)

control a swichable load with a Telstar (S1 and S0 are similar)

![Input and Output Configuration – figure 3](/img/_en/interfaces-input-and-output-configuration/03.png)

## Impulse output

It is possible to configure the output as a pulse output. It is possible to distinguish between reactive and active energy.

Note: It is not possible to distinguish between import and export. The absolute value is always output.

### Configuration as a potential-free contact

If the output is defined as a potential-free contact, any devices can be controlled on the smart-me cloud. The control can happen manual (on/off) or automatically (via the [events and actions](/konfiguration/wenndann-aktionen)).

1.  Login to the [smart-me website](https://web.smart-me.com/login/) or to the smart-me app

2.  Select a meter and click on "edit".

3.  Click on "outputs" and select the desired output and configure it as "digital output"

    - Now, you can give the output a name.

    - You can define an action to be executed when the meter loses the connection to the smart-me cloud.


NOTE:
The S1 can also be hidden from the view by switching to impulse output if it is not used as a digital output.
In the tenant view, these cannot be activated or deactivated even if they are visible there.



![Input and Output Configuration – figure 4](/img/_en/interfaces-input-and-output-configuration/04.png)

### Online view when just installed

![Input and Output Configuration – figure 5](/img/_en/interfaces-input-and-output-configuration/05.png)

### Online view when S0\_0 configured to digital output

![Input and Output Configuration – figure 6](/img/_en/interfaces-input-and-output-configuration/06.png)

The smart-me meters have a digital input that can be used as a tariff input or as a normal digital input. This input is defined as a tariff input at the factory. If the input is configured as a digital input, it can be used as an event to control other devices or trigger alarms. 

### Wiring of the outputs

Observe the maximum voltage, current and power values of the respective outputs. Simplified, each of the potential-free outputs can be considered as an unconnected switch. For a function to be given, a circuit from high to low potential must be made possible.

For 230V AC circuits:

- 230 VAC to the "+" contact of S1

- Wire the "-" contact of S1 to the external circuit input "+".

- Finally, connect from the "-" of the external circuit to the neutral.  (No ohmic load needs to be connected)


For DC circuits:

- from + VDC to the "+" contact of S1

- Wire "-" contact of S1 to the external circuit "+" input.

- Finally, connect from the "-" of the external circuit to GND.


![Input and Output Configuration – figure 7](/img/_en/interfaces-input-and-output-configuration/07.png)

\*Depending on the device type

![Input and Output Configuration – figure 8](/img/_en/interfaces-input-and-output-configuration/08.png)

## Input configuration

### Configuration as a digital input

If the input is defined as a digital input, it can be used as an event to control other devices or alarms. To configure an input as a digital input, proceed as follows:

1.  Login to the [smart-me website](https://web.smart-me.com/login/) or to the smart-me app

2.  Select a meter and click on "edit".

3.  Click on "inputs and outputs" and select the input as a "digital input"

    - Now, you can give the input a name.

    - You can define a text, which should be showed when the input is "on" or "off".

4.  You see the digital input and its status in the smart-me app and on smart-me website.




### Use digital input for controls

You can use the digital input to switch other devices or send alarms. For this purpose, the "Switching state" if event can be defined under the if / then actions.

### Connection

To switch the potential-free contact, an external voltage must be applied. The respective voltage values can be found in the technical data of the individual products.  

Logic:
1 (High) = Voltage from data sheet
0 (Low) = 0 volts

Note: With DC voltage, attention must be paid to the polarisation (E1+/E1-), whereas this does not matter with AC voltage.
