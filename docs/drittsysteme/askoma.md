---
title: 'Askoma'
slug: '/drittsysteme/askoma'
description: 'Askoheat ist ein schweizer Unternehmen und stellt Heizelemente für die Wasseraufbereitung und Energiespeicherung her.'
sidebar_label: 'Askoma'
---
Askoheat ist ein schweizer Unternehmen und stellt Heizelemente für die Wasseraufbereitung und Energiespeicherung her.

Die Heizelemente können intelligent über Drittsysteme wie smart-me AG angesteuert werden und speichern so überschüssige Solarenergie in z.B. Warmwasser.

Unterstützte Produkte von Askoma:

- Askoheat+


![Askoma – Abbildung 1](/img/drittsysteme-askoma/01.png)

![Askoma – Abbildung 2](/img/drittsysteme-askoma/02.png)

### Voraussetzung

- smart-me Zähler Telstar 80A oder CT

- Professional Lizenz zur Aktivierung des Modbus TCP und DNS Services

- Ab mitte September 2024 verfügbar in der Standardsoftware.

- Seitens Router muss sichergestellt werden, dass die IP vom Telstar nicht ändert.


### Konfiguration Askoheat+ und smart-me Telstar 80A / CT

Telstar 80A / CT:

- in den Einstellungen (Zähler wählen, oben rechts Zahnrad)

- Modbus TCP aktivieren

- DNS aktivieren

- Interne IP wählen

- Speichern


![Askoma – Abbildung 3](/img/drittsysteme-askoma/03.png)

- Auslesen der IP über CMD und ping Befehl auf die angezeigte DNS-Adresse. Der DNS-Adresse findest du in den Erweiterten Einstellungen unter "DNS aktivieren". z.B. ping smart-me\_6303192.dns-me.com


![Askoma – Abbildung 4](/img/drittsysteme-askoma/04.png)

Einstellungen am Askoheat+

Diese kann variieren und liegt nicht in der Verantwortung von smart-me.

[http://askoheat.local/setup3](http://askoheat.local/setup3) 

- IP-Adresse von Telstar eintragen. 

- TCP-Master-Modus aktivieren

-  Smart-Me aus der Liste auswählen

- auf Start Connection klicken


![Askoma – Abbildung 5](/img/drittsysteme-askoma/05.png)

- Dann kannst du prüfen ob der Messwert, die man auf der Setup3 Seite unter STATUS prüfen der Watt Wert alle 1-3 Sekunden aktualisiert.


![Askoma – Abbildung 6](/img/drittsysteme-askoma/06.png)

### Kontakt

ASKOMA AG

Industriestrasse 1

CH-4922 Bützberg

Schweiz

Tel. +41 62 958 70 80

Support +41 62 958 70 99

Fax  +41 62 958 70 81

[info@askoma.com](mailto:info@askoma.com)
