---
title: 'Telstar CT - Setup issues'
slug: '/stoerungsbehebung/telstar-ct-inbetriebnahmefehler'
description: 'This page describes common errors that can occur during the commissioning of the Telstar CT.'
sidebar_label: 'Telstar CT - Setup issues'
---
This page describes common errors that can occur during the commissioning of the Telstar CT. It explains how to check and fix these errors.

## Power does not match the utility meter.

Follow the steps below to troubleshoot.

### 1\. Check the transformer ratio

Consider this approach mainly when the measured value is lower by an integer factor (e.g. actual: 4W, expected: 240W (factor 60)).

- Solution: in the smart-me portal -> select the meter -> click the gear icon -> General Settings (Allgemeine Einstellungen) -> enter the ratio and save.

- smart-me recommends setting the transformer ratio as stated on the transformer, e.g. 300A/5A --> 300:5

- Important: Historical data is not adjusted. 


### 2\. Check whether the deviation between the utility meter and the smart-me meter is less than or equal to 2%.

Consider this approach mainly when the consumption values of the two meters are relatively close to each other.

Our devices have a measuring accuracy of 1% according to the MID standard. In addition, there is the transformer deviation of 0.5-1%. These deviations are permitted in accuracy class B. To determine the maximum permissible difference based on the permitted tolerances, you can apply the following rule of thumb.

Rule of thumb: maximum permissible difference \[kWh\] = utility meter energy \* (measurement error Telstar CT in % + measurement error transformer in %)

Example:
Utility meter: consumption 1000kWh
Telstar CT: consumption 992kWh

maximum permissible difference \[kWh\] = utility meter energy \* (measurement error Telstar CT in % + measurement error transformer in %) = 1000kWh \* (0.01 + 0.01) = 20kWh

The measured value of the Telstar CT may lie in the range of 1000kWh +/- 20kWh; at 992kWh, this corresponds to the expected error.

Caution: Consumption depends on the measurement duration. For the above estimate, you must select the same period during which the energy was consumed for both meters.  The meter reading on the utility meter does not necessarily have to be the same as that of the Telstar CT. 

### 3\. Check whether the terminals on the test terminal block are closed.

Consider this approach mainly when the power values are suspiciously low (half the expected power or less).

- In some projects, removing the short circuit on the test terminal block side is accidentally forgotten after installation.
    Unclosed terminals on the test terminal block still allow a small current to flow, which is measured by the meter but does not correspond to the correct division ratio. (Parallel connection in the test terminal block to the measuring point in the meter)


### 4\. Check whether the transformer has a short-circuit jumper.

<div className="row">
<div className="col col--6">

Consider this approach mainly when the power values are suspiciously low (half the expected power or less).

- Some transformers, such as the SRT01605A from Hager, are equipped with short-circuit jumpers that must be removed after the transformers have been assembled and wired, as described in the operating instructions.

</div>
<div className="col col--6 bild--mitte">

![Telstar CT setup issues – Figure 1](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/01.png)

</div>
</div>

### 5\. Check the flow direction of the current transformers.

<div className="row">
<div className="col col--7">

This approach is mainly followed when phase power values are negative even though this is not expected.

All transformers have a flow direction, which is marked with an arrow.

1.  The arrowhead always points towards: 

- Consumers and storage: apartments, e-mobility, heating systems and batteries

- Producers: solar inverters and generators

The back of the arrow (flat) always points towards:

- Grid: grid connection, distribution or building distribution board

2.  The transformer positive of the respective phase is connected to input "I IN" and the transformer negative to "I OUT".

What meets expectations:

- On the PV meter, you must see negative currents and power values during production. 

    If there is no active production, there are usually positive currents and power values. (However, this situation is not unambiguous)

- Pure consumption meters show exclusively positive signs for currents and power values.

- The balance meter can show different signs per phase depending on the situation. 

    - When purchasing, these are normally positive (solar system OFF for testing)

    - When supplying, these are normally negative (solar system ON for testing, deviations on individual phases are possible)

    - However, the total power of the balance must correspond to production + consumption.

        (Check via the load profile or via the visualization "Simple energy flow" ("Energiefluss Einfach"). Assign only the PV meter and total consumption to calculate the balance artificially, then compare the values in the visualization with the active power of the balance meter)

</div>
<div className="col col--5 bild--mitte">

![Telstar CT setup issues – Figure 2](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/02.png)

![Telstar CT setup issues – Figure 3](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/03.png)

</div>
</div>

### 6\. Check the phase shifts using the cos phi value per phase

If the cos phi value of several phases is consistently below 0.5, there may be a swapped phase voltage.

In this case, the meter measures the voltage of L1 on input U phase 1, but I IN and I OUT of phase 1 measure the current of L2.

Note: If one phase is swapped, two phases are always swapped!

This leads to cos phi values around 0 to 0.6 (tending below 0.5)

- Check all voltage and current connections for correct wiring.

- Check the flow direction of the transformers

If these figures look good, are all well above 0.5 and you have worked through all previous steps, checking the reactive power remains as the last option. This covers multiple swaps of flow directions and connections.

![Telstar CT setup issues – Figure 4](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/04.png)

### 7\. Check the reactive power registers of the meter

If the measured values still seem implausible, the voltage taps and current measurement may have been swapped. The reactive power registers can give us an indication of this.

Assuming that two phase voltages have been connected to the wrong inputs and, in addition, individual transformers have been connected in the wrong flow direction, analysis based on active power data becomes very difficult to virtually impossible.

To display these reactive energy registers, the measurement must be enabled. Enabling reactive energy measurement: select the meter --> Hardware configuration (Hardwarekonfiguration) (gear icons) --> General Settings (Allgemeine Einstellungen) --> Enable reactive energy (Blindenergie aktivieren) (Yes (Ja))

When looking at a single-family/multi-family house with a solar system, the order of the quadrant meter readings should in most cases look like this:

- Q1: Consumption of inductive reactive energy:
    Motors, ventilation systems
    \--> high values (much higher than Q2) 

- Q2. Supply of inductive reactive energy:
    Three-phase generators such as diesel generators or wind turbines
    \--> Lowest value of all 

- Q3: Supply of capacitive reactive energy:
    Producers such as PV systems, batteries or bidirectional charging stations
    (However, production must already have taken place)
    \--> High value (much higher than Q2, often also than Q1) 

- Q4: Consumption of capacitive reactive energy:
    Storage systems, inverters, compensation systems, electric vehicles, loads in apartments
    \--> Medium to high values (much higher than Q2, often also than Q1) 


Q1 and Q4 are difficult to assess without more detailed knowledge. In a multi-family house with a solar system, however, Q2 and Q3 can be assessed easily. If the development of Q2 and Q3 does not follow the trend in the example above, the following is probably the case:

- At least one swapped voltage and current

- At least one transformer with the wrong flow direction or crossed cables to the meter


Possible sources of error:

- Installation flow direction of the transformers

- Swapped transformer taps

- Incorrect wiring on the test terminal block

- Incorrect tapping from the test terminal block

- Incorrect wiring on arrival at the meter (I IN / I OUT)


![Telstar CT setup issues – Figure 5](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/05.png)

Example of a balance meter in a large multi-family house with a solar system
\+ e-mobility

![Telstar CT setup issues – Figure 6](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/06.png)

Example of a balance meter in a single-family house with a solar system

### 8\. Check the connectors and the line resistances of the transformer output

Consider this approach when the signs of the power values and currents are correct, but the current values are unnaturally low.

- Each transformer has an output power in volt-amperes S \[VA\]

- The line resistances must not be so high that the maximum secondary current can no longer flow with the available power.

Formula:  max. line resistance R = S / secondary current I^2

Example: 200A / 5A transformer with 1VA output power

max. R = 1VA/(5A\*5A) = 0.04 Ohm

This means the measured resistance between the positive and negative transformer terminals must not be greater than 0.04 Ohm.
It should also not be too tight, as the AC resistance at 50Hz is slightly higher than the DC resistance.

Note: 

- The measurement must be carried out with the transformer removed!

    Otherwise, the line resistance of the transformer coil is measured and not the outgoing and return lines.

What can I do if the line resistance is too high?

1.  Check all connectors, retighten them and measure again.

2.  Increase the cable cross-section (2.5mm2 is common)

3.  Shorten the cables

4.  Replace the transformer with a more powerful transformer, e.g. 5VA

![Telstar CT setup issues – Figure 7](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/07.png)

## Understanding the three-phase system and the transformer meter

### Introduction

The following discussion is intended to shed light on the measuring behavior of a transformer meter in the event of a fault. It uses simple sinusoidal voltages and currents so as not to complicate the topic unnecessarily. However, it is important to know that currents almost never have a sinusoidal shape and that the phase shift resulting from incorrect wiring described below will deviate slightly from this discussion.

### General

1.  The three phase voltages and currents are offset in time from each other in order to generate a rotary motion in a motor.

2.  The current is a consequence of the applied voltage and is determined by the behavior of the load.


The time offset mentioned above corresponds to exactly 120° of a full rotation of 360°.

- Phase 1 starts at 0°

- Phase 2 starts at 120°

- Phase 3 starts at 240°


At 50 Hz, 360° = 20ms, or 1/frequency = period
The time shift between the individual phases is therefore: 20 ms/360° \* 120° = 6.666 ms

### What does the transformer meter do?

A transformer meter interprets each phase voltage, each phase current and its phase power individually from the other two and sums the three resulting phase powers to a 3-phase total power. 

Sum P = phase power 1 + phase power 2 + phase power 3

If any of these were negative (e.g. the current transformer of one phase has a reversed flow direction), the result is a lower power than expected.

![Telstar CT setup issues – Figure 8](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/08.png)

Oscilloscope view of a 3-phase system

### Phase voltage and phase current are connected correctly (U1 / I1)

Let us consider a correctly connected phase. The voltage L1 (U1) and the current L1 (I1) are measured (the transformer is connected in the correct flow direction).

Both half-waves result in positive power, since voltage and current have the same sign in each half-wave.

The measured power correctly corresponds to 6500W (red).

![Telstar CT setup issues – Figure 9](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/09.png)

### Transformer flow direction reversed on one phase

Example: solar system

The solar system produces a power of 30kW --> 10kW per phase. (Solar systems always produce as evenly as possible across the three phases)
If everything is correct, these 30kW can also be read on the measuring device.

If the transformer of phase 1 has a reversed flow direction, the result is a negative phase power for phase 1.

Sum P = -10kW + 10kW + 10kW = 10kW

The total power corresponds to only 1/3 of the expected power.

### Phase voltage and phase currents have been swapped

Note: If a phase current or phase voltage has been connected to the wrong input of the meter, two phases are always affected!

Phase voltage and phase current have been swapped (U1 / I2) are measured on phase 1

Let us consider the result of a measurement when the meter is supplied with the correct voltage L1 (U1) but the wrong current L2 (I2). 

We are therefore mixing the voltage of phase 1 with the current of phase 2.

The phase power becomes negative. The phase shift of 120° results in a measured phase shift of only 60° in the measuring device and is now displayed with a power factor of 0.5. 

Result: negative and half of the expected 6500 W)

P = -3250W (red)

Note: It must be taken into account here that in a real system, the power factor can be higher or lower than 0.5 (e.g. 0.3 to 0.7). This is caused by the fact that the power factor on phase 1 is already between 0.8 and 1 even with correct wiring and measurement.

![Telstar CT setup issues – Figure 10](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/10.png)

Phase voltage and phase current have been swapped (U1 / I3)

Let us consider the result of a measurement when the meter is supplied with the correct voltage but the wrong current. 

We are mixing the voltage of phase 1 with the current of phase 3.

The phase power becomes negative. The phase shift of 120° results in a measured phase shift of only -60° in the measuring device and is now displayed with a power factor of 0.5. (The power factor in the measuring device can only take values from 0 to 1, although cos (phi) = -0.5 would now be correct)

Result: negative and half of the expected 6500 W)

P = -3250W (red)

Note: It must be taken into account here that in a real system, the power factor can be higher or lower than 0.5 (e.g. 0.3 to 0.7). This is caused by the fact that the power factor on phase 1 is already between 0.8 and 1 even with correct wiring and measurement.

![Telstar CT setup issues – Figure 11](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/11.png)
