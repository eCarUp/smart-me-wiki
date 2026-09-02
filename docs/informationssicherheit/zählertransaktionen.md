---
title: 'Zählertransaktionen'
slug: '/informationssicherheit/zählertransaktionen'
description: 'Beta: Meter transactions (Zähler Transaktionen) sind zeitlich begrenzte und digital signierte Bezüge von Messwerten, welche für sich selbst abgerechnet werden können.'
sidebar_label: 'Zählertransaktionen'
---
Beta: Meter transactions (Zähler Transaktionen) sind zeitlich begrenzte und digital signierte Bezüge von Messwerten, welche für sich selbst abgerechnet werden können. Ein idealer Anwendungsfall sind Ladevorgänge für die E-Mobilität.

Mehr Informationen zur Public Key Signierung findest du [hier](/informationssicherheit/public-key-signature). 

## Anwendung E-Ladestationen

Der smart-me Zähler (Version 2) wird in der Ladestation installiert. Der Digitalausgang des Zählers wird direkt mit dem Ladekontroller verbunden und kann so die Ladung starten und stoppen. Das Display des Zählers, sowie die Eichmarke, ist auf der Vorderseite der Ladestation ersichtlich.

### Ablauf Ladevorgang

![Zählertransaktionen – Abbildung 1](/img/informationssicherheit-zaehlertransaktionen/01.jpg)

1\. Der Ladevorgang wird gestartet (z. B. über eine App). Dem Zähler wird der Befehl "Start Transaction" gesendet. Er startet eine neue Transaktion und aktiviert die Ladestation. Das Display wechselt von der rollenden Anzeige der Zählerstände zur Anzeige der Transaktion. Der Verbrauch der Transaktion startet bei 0 kWh und zählt entsprechend des Verbrauchs hoch. 

![Zählertransaktionen – Abbildung 2](/img/informationssicherheit-zaehlertransaktionen/02.jpg)

2\. Der Benutzer sieht auf dem Display die aktuelle Ladeleistung sowie die bereits bezogene Energie.

![Zählertransaktionen – Abbildung 3](/img/informationssicherheit-zaehlertransaktionen/03.jpg)

3\. Der Ladevorgang wird beendet (z. B. über die App). Dem Zähler wird der Befehl "End Transaction" gesendet. Er beendet die Transaktion, signiert diese und sendet die Transaktionsdaten sowie die digitale Signierung in die Cloud. Dem Benutzer wird für 5min auf dem Display angezeigt, dass der Ladevorgang beendet wurde.

### Ladevorgang nachträglich überprüfen

Der Kunde kann jederzeit nach dem Ladevorgang die verrechnete Energiemenge überprüfen. Dazu gibt er in der App oder im Web die entsprechende Transaktion ein und überprüft diese mit dem Public Key des Zählers. Die Public Keys von allen smart-me Zählern sind öffentlich in der smart-me Cloud (oder über API) verfügbar.

Die Transaktionsdaten können mit der Signatur und dem öffentlichen Schlüssel online überprüft werden.

![Zählertransaktionen – Abbildung 4](/img/informationssicherheit-zaehlertransaktionen/04.jpg)

## Pico Zählerdaten validieren mit Transparenzsoftware



Mit Hilfe einer Transparenzsoftware hast du die Möglichkeit, digitale Signaturen zu überprüfen. 

Eine Ladestation erstellt, je nach technischer Ausführung, digital signierte Messwerte im Zusammenhang mit einem Ladevorgang, welchen du an dieser Ladestation durchführst. Diese digitalen Signaturen ermöglichen dir eine zeitversetzte Überprüfung der Messwerte, sodass du sicherstellen kannst, dass niemand die Werte während der Übertragung bis auf Ihre Rechnung manipuliert hat.



Der Einsatz der Transparenzsoftware ist für Verbraucher, Mobilitätsanbieter und Ladestationsbetreiber kostenfrei. 



Download Transparenzsoftware: [https://www.safe-ev.de/de/transparenzsoftware.php](https://www.safe-ev.de/de/transparenzsoftware.php) 




### Zählerstände validieren

Die signierten Zählerstandsgänge können in der smart-me Cloud wie folgt abgefragt werden:

1\. Einloggen auf [www.smart-me.com](http://www.smart-me.com) 

2\. Den gewünschten Zähler, bzw. Ladestation auswählen

3\. Im Menü oben rechts auf den Pfeil klicken und “Signierte Zählerstände” auswählen

4\. Die Signaturen (OCMF Format) werden unter “Zählerdaten” angezeigt.



Die OCMF Nachricht kann mit der Transparenz Software validiert werden:

- Zählerstand 1: Wirkenergie Bezug (1-b:1.8.0)

- Zählerstand 2: Wirkenergie Lieferung (1-b:1.8.0)






### Transaktionen validieren

Die signierten Transaktionen können in der smart-me Cloud wie folgt abgefragt werden:
5\. Einloggen auf [www.smart-me.com
](http://www.smart-me.com)6\. Den gewünschten Zähler, bzw. Ladestation auswählen
7\. Im Menü oben rechts auf den Pfeil klicken und “Signierte Transaktionen” auswählen
8\. Die Signaturen (OCMF Format) werden unter “Zählerdaten” angezeigt:



Die OCMF Nachricht kann mit der Transparenz Software validiert werden.



![Zählertransaktionen – Abbildung 5](/img/informationssicherheit-zaehlertransaktionen/05.png)

![Zählertransaktionen – Abbildung 6](/img/informationssicherheit-zaehlertransaktionen/06.png)

![Zählertransaktionen – Abbildung 7](/img/informationssicherheit-zaehlertransaktionen/07.png)

### MID Mode der Pico aktivieren (Anzeige relevanter Daten)

Möchte der Benutzer die Anzeige der MID relevanten Daten (Zählerstände, Versionen, Checksummen) auslösen, stehen zwei Möglichkeiten zur Verfügung:

- Start, bzw. Neustart der Station 

- Über den Helligkeitssensor


Relevante Daten über Helligkeitssensor anzeigen

Mit einer Taschenlampe kann der Benutzer folgenden Code "einblinken":

Dunkel - Hell - Dunkel - Hell - Dunkel

Jeder Zustand muss zwischen 1 und 5 Sekunden dauern.
