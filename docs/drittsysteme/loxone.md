---
title: 'Loxone'
slug: '/drittsysteme/loxone'
description: 'Smart-me Zähler in Loxone verwenden'
sidebar_label: 'Loxone'
---
## Smart-me Zähler in Loxone verwenden

## Einbindung über Modbus

Das Template bietet eine Möglichkeit, Zählerdaten direkt vom Zähler zu lesen

- Voraussetzung: [Modbus TCP](/schnittstellen/modbus-tcp) muss auf dem Zähler aktiviert werden. Die IP oder der DNS-Name des Zählers muss im Template eingetragen werden.

- [Loxone Library](https://library.loxone.com/vendor/smart-me-1505)


![Loxone – Abbildung 1](/img/drittsysteme-loxone/01.jpg)

## Einbindung über API - Basic Auth (Veraltet)

Das Template bietet eine Möglichkeit, Zählerdaten von unserer Cloud zu lesen und digitale Ausgänge zu steuern.

Hinweis: Basic Auth wird abgeschaltet um die wachsenden Security-Anforderungen zu erfüllen.

Nur noch bis November 2026 möglich (bis v.1.0.2)

- [Loxone Library](https://library.loxone.com/vendor/smart-me-1505)

- [Dokumentation API](/schnittstellen/api)


Im Template muss vor dem URL des API Calls der Benutzername und das Passwort des Kontos stehen. Der Benutzername muss je nach dem von smart-me gesetzt werden.

## Einbindung über API - API-Keys (Empfohlen)

Das Template bietet eine Möglichkeit, Zählerdaten von unserer Cloud zu lesen und digitale Ausgänge zu steuern.

Hinweis: Loxone bietet keine einfachere Möglichkeit mit API-Keys umzugehen. Die unten beschrieben Prozedur wurde zusammen mit Loxone erarbeitet. API-Keys wurden eingeführt um die wachsenden Security-Anforderungen zu erfüllen.

ab Version 1.0.3

- [Loxone Library](https://library.loxone.com/vendor/smart-me-1505)

- [Dokumentation API](/schnittstellen/api)


1.  ### Im Smart-me Portal einen API Key erstellen.


Login im smart-me Portal --> Menu Schnittstellen --> API  --> Oben im orangen Banner auf den "Link" klicken -->  "Neu erstellen".

- Den API Key eine Bezeichnung geben, z.B. Loxone, 


- Das Ablaufdatum setzen

- Die Berechtigungen setzen. Für Loxone reicht "device.readswitch" (Wenn es im Browser automatisch auf deutsch übersetzt wird, bitte "Gerät.LesenSchalten" verwenden) 

- Erstellen

- API Key kopieren.  Achtung: Der Key kann danach nicht wieder abgerufen werden.

- Der API-Key wird später benötigt.


Allgemein:Weitere Infos zu den Berechtigungen: [API](/schnittstellen/api) 

![Loxone – Abbildung 2](/img/drittsysteme-loxone/02.png)

![Loxone – Abbildung 3](/img/drittsysteme-loxone/03.png)

### 2\. DeviceID des smart-me Zählers holen

Wenn das Konto auf Professional ist, kann die DeviceID ganz einfach 

1.  Menu System --> Systemgesundheit

2.  Geräte suchen

3.  Die Geräte-ID wird später verwendet. z.B. 61c71d00-3d40-4963-745b2-7c6b0c512gf3




Wenn das Konto nicht Lizenziert ist, muss die DeviceID über die API geholt werden.
1.  Windowstaste drücken und "cmd" eingeben.
2\. Die Eingabeaufforderung öffnen
3\. Folgenden Befehl in die Eingabe kopieren. 

Achtung: Den ApiKey anpassen.  

curl -X "GET" "https://api.smart-me.com/Devices" -H "accept: \*/\*" -H "Authorization: ApiKey n9CUnYCGmTOQZCCX1iHRqrF5Erzx9pUu" 

4\. In der Antwort nach dem Zählernamen suchen und die Id rauskopieren.

![Loxone – Abbildung 4](/img/drittsysteme-loxone/04.png)

### 3\. Im Loxone den virtuellen Ausgang konfigurieren

- Das template aus der Loxone Library herunterladen (VO\_XXXX). (Siehe Link weiter oben)

- Im Loxone Stammbaum / Peripherie auf Virtuelle Ausgänge klicken

- Oben im Menu Loxone unter "Vordefinierte Geräte" den smart-me Request laden.

- Ein neuer virtueller Ausgang erscheint, dort auf den Befehl "Meter" klicken.


- Im Feld "Befehl bei EIN" muss &lt;meter.id\> mit der Geräte-ID ersetzt werden.

- Im Feld "HTTP header bei EIN" muss &lt;apikey> mit der API-Key ersetzt werden. Hinweis: Der API-Key kann bei jedem Zähler vom selben Konto derselbe sein.


![Loxone – Abbildung 5](/img/drittsysteme-loxone/05.png)

![Loxone – Abbildung 6](/img/drittsysteme-loxone/06.png)

- Im Feld "HTTP-Antwort speichern" muss der text smartmeapi.html angepasst werden.


- Der Name muss für jeden Ausgang individuell sein. z.B. bilanz.html Beispiel user/common/bilanz.html 


![Loxone – Abbildung 7](/img/drittsysteme-loxone/07.png)

### 4\. Im Loxone den virtuellen Eingang konfigurieren

- Wähle die Eigenschaften des Loxone Mini Servers. Dort findest du den Hostnamen oder die IP-Adresse des Miniservers. Dies ist für die weitere Konfiguration notwendig.


![Loxone – Abbildung 8](/img/drittsysteme-loxone/08.png)

- Das template aus der Loxone Library herunterladen (VI\_XXXX).

- Unter "Vordefinierte HTTP-Geräte" den smart-me meter laden.

- Ein neuer virtueller Eingang erscheint

- Auf den Eingang "smart-me meter" klicken.

- Beim Feld "URL" müssen folgende Fehler angepasst werden.

    - Zugangsdaten des Loxone Miniservers

    - Hostname oder IP vom Loxone Mini Server

    - Name des HTML Files hinterlegt. Dabei ist für denselben Befehl derselben Name wie oben notwendig. z.B. bilanz.html. 

- Beispiel von einem Befehl:
    [https://admin:sicheres\_admin\_passwort@127.0.0.1/bilanz.html](https://admin:sicheres_admin_passwort@127.0.0.1/bilanz.html)

- [https://admin:sicheres\_admin\_passwort@MSC29Z/bilanz.html](https://admin:sicheres_admin_passwort@127.0.0.1/bilanz.html) 


![Loxone – Abbildung 9](/img/drittsysteme-loxone/09.png)

Wenn nicht das smart-me Template  verwendet wird, muss der "Virtuelle Ausgang Befehl" mittels Impulsgenerator angesteuert werden.

![Loxone – Abbildung 10](/img/drittsysteme-loxone/10.png)

## Loxone Zähler in Smart-me verwenden

Das Modul bietet eine Möglichkeit, Zählerdaten zu unserer Cloud zu senden.

- [Loxone Library (Loxone zu smart-me)](https://library.loxone.com/detail/smart-me-cloud-1764/overview)


Wichtig: Dieses Modul ist nicht von smart-me entwickelt. Wir bieten dafür keinen Support. Das Wissen um dieses Modul zu verwenden musst du dir selber aneignen und ist aus unsere Sicht für fortgeschritten Loxone Users.

Diese Anleitung bietet nur eine kleine Übersicht wie eine Messpunkt erstellt werden kann, was nicht über das Loxone Modul stattfindet.

1.  API Key im Smart-me Portal erstellen mit den Claims: device.readwrite und user.readwrite (Nur ein Key pro Konto ist nötig, nicht für jeden Zähler)

2.  Folgenden call ausführen (Felder davor editieren (ApiKey & Name))
    Mit Power-Shell:
    curl -i -X 'POST' 'https://api.smart-me.com/Devices' -H 'accept: text/plain' -H 'Authorization: ApiKey &lt;apikey>' -H 'Content-Type: application/json-patch+json' -d '&#123;"activePower": 0, "counterReading": 0, "counterReadingExport": 0, "valueDate": "2025-07-08T08:15:55.026Z", "name": "Loxone Beispiel", "deviceEnergyType": 1&#125;'

    Mit Windows CMD (DOS):
    curl -i -X POST "https://api.smart-me.com/Devices" -H "accept: text/plain" -H "Authorization: ApiKey &lt;apikey> " -H "Content-Type: application/json" -d "&#123;\\"activePower\\": 0, \\"counterReading\\": 0, \\"counterReadingExport\\": 0, \\"valueDate\\": \\"2025-12-05T00:00:00.000Z\\", \\"name\\": \\"Loxone Beispiel\\", \\"deviceEnergyType\\": 1&#125;"

3.  Die UUID des Zählers aus dem Response nehmen.
    Alternative 1: UUID aus Systemgesundheit im Dashboard holen
    Alternative 2: [https://api.smart-me.com/Devices](https://api.smart-me.com/Devices) GET verwenden um alle IDs zu erhalten.

4.  Diese Daten müssen in der Loxone Library eingetragen werden.


Zusammengefasst wurde so ein Zähler über die API erstellt, welcher dann in Loxone verwendet werden kann.
