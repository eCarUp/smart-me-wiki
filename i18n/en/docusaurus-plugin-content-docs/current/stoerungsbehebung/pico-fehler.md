---
title: 'Pico errors'
slug: '/stoerungsbehebung/pico-fehler'
description: 'This page explains the known Pico errors.'
sidebar_label: 'Pico errors'
---
This page explains the known Pico errors.

![Pico errors – figure 1](/img/_en/troubleshooting-pico-errors/01.png)

### Black screen (no screen displayed)



Meaning: 

- Pico screen shows nothing. 




Possible sources of error:

- Pico has no power

- RCD has been triggered

- Pico has an error on the local software




Action:

- If the Pico is offline

    - Step 1: Disconnect power and switch on again.

    - Step 2: Check whether application version 1.xx (check hardware version). If yes, fill out RMA with error description: Black screen with application version 1.xx

    - Step 3: If it does not help, contact support.

- If the Pico is online, it can be restarted via the smart-me portal. (Select Pico / Gear wheel top right / Advanced actions / Restart)

- If the RCD is triggered, it may be an isolated case. If it occurs more frequently, please contact us. With the exception of the "IONIQ 5", this car sometimes triggers the RCD at the end of the charging process; as a manufacturer of charging stations, there is nothing we can do about this.


![Pico errors – figure 2](/img/_en/troubleshooting-pico-errors/02.png)

### Warn RDC



Cable or car (mostly)



Meaning: 

- Problem with the RDC sensor (residual current device). RCD is a personal protection device in the electrical installation 




Possible sources of error:

- A damp charging cable that is permanently connected.

- Charging cable that has frozen overnight and thawed again.

- Defect in the cable or car. This can be tested by charging another car at the station or by charging the car causing the fault at another Pico.

- Defect in the Pico electronics, e.g. water damage.




Action:

- If the error has been triggered, the station must be restarted to reset the error.


![Pico errors – figure 3](/img/_en/troubleshooting-pico-errors/03.png)

### Cable Lock Error

Meaning: 

- This error occurs if the cable cannot be locked (e.g. if the plug is not inserted correctly).


Action: 

- Restart the Pico once. Either via the cloud or locally. This will recalibrate the cable lock sensor.

- In most cases, it is also sufficient to plug in the cable correctly (with a little force) and try again.


Display in the portal

- Cable lock failed


![Pico errors – figure 4](/img/_en/troubleshooting-pico-errors/04.png)

![Pico errors – figure 5](/img/_en/troubleshooting-pico-errors/05.png)

### Error 1



Meaning: 

- No wifi module was found




Action: 

- If a restart does not produce the desired result, an RMA must be completed. 


Error description: Error 1

![Pico errors – figure 6](/img/_en/troubleshooting-pico-errors/06.png)

### Error 2



Meaning:  

- interal communication error




Action: 

- If a restart does not produce the desired result, an RMA must be completed. 


Error description: Error 2

![Pico errors – figure 7](/img/_en/troubleshooting-pico-errors/07.png)

### Error 3



Meaning:  

- An error with the MID Current Meter




Action: 

- If a restart does not produce the desired result, an RMA must be completed. 


Error description: Error 2

![Pico errors – figure 8](/img/_en/troubleshooting-pico-errors/08.png)

### Error 4



Meaning:  

- RCD test on the Pico has failed.




Action:

- See WARN RDC


![Pico errors – figure 9](/img/_en/troubleshooting-pico-errors/09.png)

### P-Limit

Meaning:

- Voltage too low &lt;200V

- Load shedding active: Power limited


![Pico errors – figure 10](/img/_en/troubleshooting-pico-errors/10.png)

### Diode Error



Possible sources of error:

- The charging cable is defective




Action:

- Replace / check charging cable

- No action is necessary on the Pico. It can be used again as normal after 30 seconds.


![Pico errors – figure 11](/img/_en/troubleshooting-pico-errors/11.png)

### Car does not load (bar is only one pixel wide and red)

Display:

- The lower bar is only one pixel wide and red


Meaning : 

- The charging station is not releasing power.


Possible sources of error :

- The charging management cannot release power to the station because a pico is overloaded.

- The pico in the charging group cannot communicate with other picos in the same charging group via the mesh.


Action:

- Check whether the nodes have sufficient power.

- For a more detailed analysis, please call support.
