---
title: 'Kommunikationsunterbruch Pico über 4G'
slug: '/news/status/pico-4g-ausfall'
description: 'Status Update 16.01.2026 14h45'
sidebar_label: 'Kommunikationsunterbruch Pico über 4G'
---
## Status Update 16.01.2026 14h45

Leider müssen wir Ihnen mitteilen, dass noch einige Ladestationen von dem 1nce SIM Ausfall (Karte Anbieten) betroffen sind. 

Da eine Behebung der Störung durch den externen Anbieter nicht realistisch ist, haben wir proaktiv gehandelt, um Ihnen eine zuverlässige Lösung zur Verfügung zu stellen.

Es besteht eine geringe Möglichkeit, dass die Ladestation über Nacht, also ab dem 17.01.2025 6h00, wieder online ist. Wie hoch die Wahrscheinlichkeit dafür ist, ist unklar und wird gemäss aktuellem Wissenstand als klein eingestuft.

## Lösung des Problems

Wann ist er anzuwenden

Wenn die Station aktuell immer noch offline ist und nicht in einem temporären WLAN verbunden ist.

Lösung 1: Station über WLAN oder Hotspot mit Installer App online bringen und danach ein Firmware Update durchführen. 

Lösung 2: Station über WLAN oder Hotspot ohne Installer App online bringen und danach ein Firmware Update durchführen. (Ist mit eignen Smartphone Modelle nicht möglich)

Lösung 3: Sie senden die Pico Ladestation an smart-me AG, RMA-Pico-4G, Riedstrasse 18, 6343 Rotkreuz. Wir machen ein Firmware Update und senden die Pico wieder zurück. Bitte RMA-Pico-4G bei der Adresse hinzufügen für eine raschere Behebung des Problems. Bei diesem Vorgehen gehen die Konfigurationsdaten nicht verloren. Wenn Sie uns eine pico zusenden, bitte die Trackingnummer von der Post an [support@smart-me.com](mailto:support@smart-me.com) senden.

Lösung 4: Sie füllen eine RMA aus und wird senden vorab eine gleichwertige Pico. Im Formular die Fehlerbeschreibung "Pico Offline 4G" verwenden. [https://dok.smart-me.com/rma-antragsformulare](/rma-antragsformulare). Bei diesem Vorgehen muss die neue Pico wieder konfiguriert werden.



### Beschreibung von Lösung 1: Station über WLAN oder Hotspot mit Installer App online bringen und danach ein Firmware Update durchführen.

Rahmenbedingungen

- Wir empfehlen, diese Schritte von einem smart-me-Partner durchführen zu lassen.

- Vor Ort muss ein temporäres WLAN-Netzwerk erstellt werden. (z. B. WLAN, LTE-Router oder Smartphone-Hotspot).

- Für die Installation wird ein Smartphone benötigt. Falls mit dem Smartphone ein Hotspot für die Installation erstellt wird, werden zwei Smartphones benötigt.

- Zugangsdaten zum Konto müssen bekannt sein, da die Verbindung des Gerätes zwingend mit dem bestehenden smart-me-Account hergestellt werden muss.

- Die Installation muss mit der smart-me Installer-App erfolgen. [Installer App Anleitung](/konfiguration/installer-app-anleitung)  

- Ein RFID Karte muss vorliegen, um den Installationsmodus zu aktivieren.

- Die Ladestation muss Stromlos gemacht werden können. Entweder über die Sicherungen oder indem Sie kurz abgeschraubt wird.


Vorgehen

Pico mit temporäres WLAN verbinden.

- Temporäres WLAN zur Verfügung stellen. Das Temporäre WLAN darf die Zeichen wie ä,ö,ü und $ nicht beinhalten. Zeichen wie a bis z und A bis Z, 0 bis 9 ,- ,\_ oder ein Leerzeichen sind ohne weiteres erlaubt. 

    - Erlaubte Zeichen: Die SSID unterstützt nur ASCII Zeichen exklusive das $ Zeichen.  [Link zu Wikipedia](https://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange) 

    - Info zu IOS Hotspot: Bei IOS wird der Hotspot mit dem Name des Smartphone erzeugt. Wenn der Name des Smartphone geändert wird, ändert sich auch der Name des Hotspot.

- Damit eine Installation gemacht werden kann muss die Ladestation Stromlos gemacht werden. Die Verbindung mit dem temporäres WLAN muss dann innert 15 Minuten erfolgen, da sonst der Installationsmodus nicht mehr aktiv ist. 

- Sollte die Station nachdem Sie Stromlos gemacht wurden für min 5 Minuten schwarz bleiben oder auf dem HI hängen bleiben muss ein RMA ausgefüllt werden. Siehe Lösung 4.

- Wichtig für den nächsten Schritt: Die Installation muss im Konto erfolgen in dem die Pico aktuell offline ist.

- Die Installation mit der smart-me Installer App durchführen. [Installer App Anleitung](/konfiguration/installer-app-anleitung).

    - Wenn bei Schritt 5 die SSID nicht erscheint sondern z.B. &lt;&lt;unknown>>, muss der Standort aktivieren und die App muss darauf zugreifen können.

    - Wenn bei Schritt 6 die App nicht korrekt reagiert muss in den Berechtigung die Kamera explizit in den Einstellungen aktiviert werden.

    - Wenn die App neu installiert wurde, kann es teilweise beim ersten mal nicht gehen, dann bitte die App schliessen und wieder öffnen.

- Nach der Installation sollte die Station wieder online sein.


Update von der Pico durchführen. 

- Login auf der smart-me Plattform mit einem Browser einloggen: [https://portalweb.smart-me.com/Login](https://portalweb.smart-me.com/Login) 

- Link öffnen [https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx).

- Station suchen und das "update communication" durchführen. Wenn die neuste Version dann installiert ist, lautet diese 0.0.36 oder 0.0.37

- Fenster offen lassen um den Fortschritt zu verfolgen. 

- Warten bis es abgeschlossen ist, kann bis zu 30 Minuten dauern.

- Wenn die Installationen auf den picos beendet ist, kann das temporäres WLAN abgeschaltet werden und die Ladestationen verbinden sich innert 5 Minuten wieder mit dem 4G


Vorgehen bei mehrere Stationen am selben Standort

- Einschränkung mit Smartphone Hotspot: Die meisten Smartphone unterstützen nur 5 Geräte die sich gleichzeitig mit dem Smartphone verbinden können. Somit ist eine Installation mit einem Smartphone Hotspot nur möglich bei max. 5 Geräte gleichzeitig.

- Dann am besten als erstes alle Stationen mit dem temporäres WLAN verbinden


- Dann am besten als zweiter schritt für die Update von der Pico den Link ([https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx)) mehrfach öffnen um die Updates gleichzeitig zu machen.


### Beschreibung von Lösung 2: Station über WLAN oder Hotspot ohne Installer App online bringen und danach ein Firmware Update durchführen.

Für wen ist Lösung 2 besser als Lösung 1.

- Ist für technisch gut versierte Personen je nachdem etwas schneller.

- Wenn Sie unsicher sind, bitte Lösung 1 machen.


Rahmenbedingungen

- Wir empfehlen, diese Schritte von einem smart-me-Partner durchführen zu lassen.

- Vor Ort muss ein temporäres WLAN-Netzwerk erstellt werden. (z. B. WLAN, LTE-Router oder Smartphone-Hotspot).

- Für die Installation wird ein Smartphone benötigt. Falls mit dem Smartphone ein Hotspot für die Installation erstellt wird, werden zwei Smartphones benötigt.

- Zugangsdaten zum Konto müssen bekannt sein.

- Ein RFID Karte muss vorliegen, um den Installationsmodus zu aktivieren.

- Die Ladestation muss Stromlos gemacht werden können. Entweder über die Sicherungen oder indem Sie kurz abgeschraubt wird.


Vorgehen

WLAN verbindung auf die Pico Schreiben.

- Temporäres WLAN zur Verfügung stellen. (Kann auch erst beim letzten Schritt vor dem Update bereitgestellt werden, wenn nur ein Smartphone vorhanden ist) Das Temporäre WLAN darf die Zeichen wie ä,ö,ü und $ nicht beinhalten. Zeichen wie a bis z und A bis Z, 0 bis 9 ,- ,\_ oder ein Leerzeichen sind ohne weiteres erlaubt. 

    - Erlaubte Zeichen: Die SSID unterstützt nur ASCII Zeichen exklusive das $ Zeichen.  Link zu Wikipedia 

    - Info zu IOS Hotspot: Bei IOS wird der Hotspot mit dem Name des Smartphone erzeugt. Wenn der Name des Smartphone geändert wird, ändert sich auch der Name des Hotspot.

- Damit eine Installation gemacht werden kann muss die Ladestation Stromlos gemacht werden. Die Verbindung mit dem temporäres WLAN muss dann innert 15 Minuten erfolgen, da sonst der Installationsmodus nicht mehr aktiv ist. 

- Sollte die Station nachdem Sie Stromlos gemacht wurden für min 5 Minuten schwarz bleiben oder auf dem HI hängen bleiben muss ein RMA ausgefüllt werden. Siehe Lösung 4.

- RFID Karte hinhalten damit der Installationsmodus startet.

- Sich mit dem WLAN der Pico verbinden z.B. smart-me\_7002222

- 30 Sekunden warten und prüfen ob eine Pop Up auf dem Smartphone erscheint, dass die Verbindung halten, auch wenn diese Verbindung keine Internetverbindung vorliegt bestätigt werden muss.

- Mit dem Browser auf 192.198.1.1 gehen.

    - Bei gewissen Smartphone muss für diesen Schritt 4G abgeschaltet sein.

- SSID und Passwort hinschreiben

- Add Profile wählen

- Reboot wählen

- Nach Konfiguration sollte die Station wieder online kommen.


Update von der Pico durchführen. 

- Login auf der smart-me Plattform mit einem Browser einloggen: [https://portalweb.smart-me.com/Login](https://portalweb.smart-me.com/Login) 

- Link öffnen [https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx).

- Station suchen und das "update communication" durchführen. Wenn die neuste Version dann installiert ist, lautet diese 0.0.36 oder 0.0.37

- Fenster offen lassen um den Fortschritt zu verfolgen. 

- Warten bis es abgeschlossen ist, kann bis zu 30 Minuten dauern.

- Wenn die Installationen auf den picos beendet ist, kann das temporäres WLAN abgeschaltet werden und die Ladestationen verbinden sich innert 5 Minuten wieder mit dem 4G


Vorgehen bei mehrere Stationen am selben Standort

- Einschränkung mit Smartphone Hotspot: Die meisten Smartphone unterstützen nur 5 Geräte die sich gleichzeitig mit dem Smartphone verbinden können. Somit ist eine Installation mit einem Smartphone Hotspot nur möglich bei max. 5 Geräte gleichzeitig.

- Dann am besten als erstes alle Stationen mit dem temporäres WLAN verbinden


- Dann am besten als zweiter schritt für die Update von der Pico den Link ([https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx)) mehrfach öffnen um die Updates gleichzeitig zu machen.
