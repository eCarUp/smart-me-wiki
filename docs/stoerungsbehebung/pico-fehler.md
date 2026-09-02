---
title: 'Pico Fehler'
slug: '/stoerungsbehebung/pico-fehler'
description: 'Auf dieser Seite werden die bekannten Pico Fehler erläutert.'
sidebar_label: 'Pico Fehler'
---
Auf dieser Seite werden die bekannten Pico Fehler erläutert.

### RFID wird nicht erkannt.



Bedeutung: 

- Beim scannen der RFID wird weder der QR-Code noch das RFID Logo angezeigt.




Mögliche Fehlerquellen:

- RFID Karte ist defekt

- Pico hat ein Fehler




Massnahme:

- Pico neu starten. Wenn der Neustart das Problem gelöst hat, wären wir um ein Mail an [support@smart-me.com](mailto:support@smart-me.com) dankbar. Bitte Datum des Vorfalls und Seriennummer von der Pico angeben.

- Mit einer neuen RFID Karte probieren


### Reduzierte Ladeleistung

Wenn die Pico weniger Leistung abgibt, als diese sollte, könnte es sein, dass eine Phase nicht korrekt angeschlossen ist, oder eine Sicherung ausgelöst hat. Durch klicken auf "Normal" können ähnlich wie bei den Stromzählern, die Spannungen und Ströme angeschaut werden.

### Schwarzer Bildschirm (Keine Anzeige)



Bedeutung: 

- Pico Bildschirm zeigt nichts an. 




Mögliche Fehlerquellen:

- Pico hat keinen Strom

- FI wurde ausgelöst

- Pico hat einen Fehler auf der lokalen Software




Massnahme:

- Wenn die Pico offline ist

    - Schritt 1: stromlos machen und wieder einschalten.

    - Schritt 2: Prüfen ob Application Version 1.xx ([Hardware Version prüfen](https://webforms.smart-me.com/connect/deviceoverview.aspx)),  wenn ja, [RMA Ausfüllen](/rma-antragsformulare) mit Fehlerbeschreibung: Schwarzer Bildschirm mit Application Version 1.xx

    - Schritt 3: Wenn es nicht hilft, beim Support melden.

- Wenn die Pico online ist, kann diese über das smart-me Portal neu gestartet werden. (Pico wählen / Zahnrad oben rechts / Erweiterte Aktionen / Neustart)

- Wenn der FI ausgelöst wird, kann es sich um einen Einzelfall handeln. Sollte es häufiger auftreten, kontaktiere uns bitte. Ausser beim "IONIQ 5" und "Zoé" diese Autos löst in Einzelfällen der FI am Ende des Ladevorgangs aus, daran können wir als Hersteller von Ladestationen nichts ändern.


![Pico Fehler – Abbildung 1](/img/stoerungsbehebung-pico-fehler/01.png)

### Auto ist eingesteckt und die Ladestation reagiert nicht

Wenn ein Auto eingesteckt wird, sollte im Normalfall bei 

- Authentication None 

    - Das Standby Bild verschwinden und eine Abfolge mit einem Ladestart erscheinen

- Authentication eCarUp Backen 

    - das Bild mit "Auth RFID App" kommen.


Wenn dies nicht der Fall ist bitte wie folgt vorgehen

- Am Auto prüfen ob das Kabel korrekt eingesteckt ist.

- An der Pico sicherstellen, dass das Kabel am Anschlag ist.


Wenn es immer noch nicht reagiert muss der Stationsbetreiber prüfen ob Fix eine Kabel an der Station ist.

- Wenn dies der Fall ist, bitte sicherstellen, dass im smart-me Portal die Option "Kabel immer fest verriegelt" aktiviert ist. 

- Wenn dies nicht der Fall ist, bitte dies durchführen.


![Pico Fehler – Abbildung 2](/img/stoerungsbehebung-pico-fehler/02.png)

### Warn RDC



Kabel oder Auto (meistens)



Bedeutung: 

- Problem mit dem RDC-Sensor (residual current device). RCD ist eine Personen-Schutzeinrichtung in der Elektroinstallation .




Mögliche Fehlerquellen:

- Ein feuchtes Ladekabel, welches fix angeschlossen ist.

- Ladekabel, welches über Nacht angefroren und wieder aufgetaut ist.

- Defekt am Kabel oder Auto. Dies kann getestet werden, indem ein anderes Auto an der Station lädt oder das Auto, welches den Fehler verursacht, an einer anderen Pico lädt.

- Defekt an der Pico-Elektronik z.B. Wasserschaden.




Massnahme:

- Wenn der Fehler ausgelöst wurde, muss die Station neu gestartet werden, um den Fehler zurückzusetzen.


![Pico Fehler – Abbildung 3](/img/stoerungsbehebung-pico-fehler/03.png)

### Cable Lock Error

Bedeutung: 

- Dieser Fehler kommt, wenn das Kabel nicht verriegelt werden kann (z.B. wenn der Stecker nicht richtig eingesteckt ist).


Massnahme: 

- Starte die  Pico einmal neu. Entweder über die Cloud oder lokal. Dadurch wird der Sensor für die Kabelverriegelung neu kalibriert.

- In den meisten Fälle reicht es auch das Kabel richtig (mit etwas Kraft) einzustecken und es nochmals zu versuchen.


Anzeige im Portal

- Kabelverriegelung fehlgeschlagen


![Pico Fehler – Abbildung 4](/img/stoerungsbehebung-pico-fehler/04.png)

![Pico Fehler – Abbildung 5](/img/stoerungsbehebung-pico-fehler/05.png)

### Error 1



Bedeutung: 

- Kein WiFi-Modul wurde gefunden




Massnahme: 

- Wenn ein Neustart nicht den gewünschten Erfolg bringt, muss ein RMA ausgefüllt werden. Fehlerbeschreibung: Error 1


![Pico Fehler – Abbildung 6](/img/stoerungsbehebung-pico-fehler/06.png)

### Error 2



Bedeutung:  

- Interner Kommunikationsfehler




Massnahme: 

- Wenn ein Neustart nicht den gewünschten Erfolg bringt, muss ein RMA ausgefüllt werden. Fehlerbeschreibung: Error 2


![Pico Fehler – Abbildung 7](/img/stoerungsbehebung-pico-fehler/07.png)

### Error 3



Bedeutung:  

- Ein Fehler mit dem MID-Strommessgerät




Massnahme: 

- Wenn ein Neustart nicht den gewünschten Erfolg bringt, muss ein RMA ausgefüllt werden. Fehlerbeschreibung: Error 3


![Pico Fehler – Abbildung 8](/img/stoerungsbehebung-pico-fehler/08.png)

### Error 4



Bedeutung:  

- RCD Test an der Pico ist fehlgeschlagen.




Massnahme:

- Siehe WARN RDC


![Pico Fehler – Abbildung 9](/img/stoerungsbehebung-pico-fehler/09.png)

### P-Limit

Bedeutung:

- Spannung zu klein &lt;200V

- Lastabwurf aktiv: Leistung begrenzt


![Pico Fehler – Abbildung 10](/img/stoerungsbehebung-pico-fehler/10.png)

### Diode Error



Mögliche Fehlerquellen:

- Das Ladekabel ist defekt


Massnahme:

- Ladekabel ersetzen / prüfen

- An der Pico ist keine Massnahme nötig. Sie kann nach 30 Sekunden wieder ganz normal benutzt werden.

- Prüfen ob mindestens die Version 0.0.42 auf der Pico installiert ist. [Firmware Update](/konfiguration/firmware-update) 


![Pico Fehler – Abbildung 11](/img/stoerungsbehebung-pico-fehler/11.png)

### Auto ladet nicht (Balken ist nur ein Pixel breit und rot)

Anzeige:

- Der untere Balken ist nur ein Pixel breit und rot


Bedeutung : 

- Die Ladestation gibt keinen Strom frei.


Mögliche Fehlerquellen :

- Das Lademanagement kann keinen Strom an die Station freigeben, weil eine Pico überlastet ist.

- Die Pico in der Ladegruppe kann nicht übers Mesh mit anderen Picos in der gleichen Ladegruppe kommunizieren.


Massnahmen:

- Überprüfe, ob die Knoten ausreichend Strom haben.

- Für eine genauere Analyse rufe bitte den Support an.


### Temperatur hoch



Temperatur hoch



Bedeutung: 

- Die hohe Innentemperatur der Pico führt dazu, dass die maximale Ladeleistung gedrosselt wird.




Mögliche Fehlerquellen:

- Direkte Sonneneinstrahlung: Das Gerät ist möglicherweise direkter Sonneneinstrahlung ausgesetzt, was zu einer übermässigen Hitzeentwicklung führt.




Massnahme:

- Firmware-Update durchführen wenn die Version kleiner als 0.0.29 ist.

- Die Display-Helligkeit der Pico sollte auf das Minimum gesetzt werden. Das hat den grössten Effekt, da somit weniger Energie direkt im Gehäuse erzeugt wird.


Autospezifische Probleme

- Hyundai Ioniq 5: Dieses Auto löst in Einzelfällen der FI am Ende des Ladevorgangs aus, daran können wir als Hersteller von Ladestationen nichts ändern. Da der FI, unabhängig von der Ladestation augelöst wird.

- Zoé: Die älteren Modellen müssen mit einem Start-Strom von 10A konfiguriert werden. Da diese mit 6A die Ladung nicht starten. Ein Test hat gezeigt, dass mit einem einphasigen Ladekabel die Ladung auch dann startet, wenn nur 6A Startstrom zur Verfügung stehen. Dieses Auto löst in Einzelfällen der FI am Ende des Ladevorgangs aus, daran können wir als Hersteller von Ladestationen nichts ändern. Da der FI, unabhängig von der Ladestation augelöst wird.

- Renault Kangoo Electric: Startet die Ladung nur ab 8A

- Skoda Enyaq: Es kann teilweise bis zu 1min 30sec dauern, bis der Ladevorgang startet. Alternative Car-ID deatkvieren.

- Audi Q4: Ladung startet nicht. 

    - Lösung 1: Gemäss ersten Erfahrungen am 23.01.2026 könnte das Problem auch mit der neusten Audi Software gelöst werden. 

    - Lösung 2: Mindestens Version 0.0.33 auf der Pico installieren und car-id deaktivieren.

- Dacia Spring: Ladung startet nicht. Lösung: Version 0.0.33 installieren und car-id auf der Pico deaktivieren.

- Hyundai Ioniq: Auto startet nur, wenn zuerst die RFID-Karte hingehalten wird und dann die Ladung gestartet wird. Alternativ muss die Car-ID deaktiviert werden.

- Leapmotor / T03: Kommt mit der Phasenumschaltung nicht klar. Es muss seitens Auto, wenn die Ladung nach einer  Minute autoseitig unterbrochen wird, mehrmals die Türe geöffnet und wieder geschlossen werden.

- Subaru Solterra: Startet die Ladung nur ab 8A und deaktivierter Car-ID

- Mazda MX-30: Startet die Ladung nur wenn die Car-ID deaktiviert ist.

- Honda E:ny1: Startet die Ladung nur ab 8A.
