---
title: 'Telstar CT - Setup issues'
slug: '/stoerungsbehebung/telstar-ct-inbetriebnahmefehler'
description: 'Power does not match utility meter'
sidebar_label: 'Telstar CT - Setup issues'
---
## Power does not match utility meter

### Please verify that the current transformer terminals are closed.

- In some projects, after installation, the current transformer terminals are sometimes forgotten to be closed.


### Ensure that the transformer ratio has been set correctly.

- Solution: In the Smart-me portal, select "Meter," then click on the gear icon, go to "General Settings," enter the correct ratio, and save it.

- Smart-me recommends entering the transformer ratio in the cloud as it is noted on the transformer itself, for example, 300:5.

- Important: Historical data will not be adjusted.


### Check if the transformers have been connected correctly.

- For PV meters, the current usually has a negative sign. 

- Generally, pure consumption meters have positive signs for currents. 

- The balance meter may have different signs depending on the situation.

    - For purchased power, these are usually positive. 

    - For delivered power, these are usually negative.


### Check if the power factor (Cos Phi) is as expected (depending on the load)

- If the cos Phi &lt;0.5, it is likely that the voltage taps do not match the phases or the direction of rotation has been reversed.


### Check if the deviation is less than or equal to 1%.

- Our devices have a 1% measurement accuracy according to the MID standard.
