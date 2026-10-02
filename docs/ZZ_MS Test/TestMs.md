---
title: 'MS Test page'
slug: '/ZZ_MS Test/TestMS'
description: 'Bezeichnung'
sidebar_label: 'MSTest-Sidebarlabel'
---
<div className="row">
<div className="col col--10">

Auf dieser Seite wird das Verhalten des Picos Bildschirms beschrieben.

[Pico Ladestation](/produkte/pico-ladestation)

[Pico Zubehör](/produkte/pico-ladestation/pico-zubehör)

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 1](/img/produkte-pico-ladestation-pico-display/01.png)

</div>
</div>

## Display

Die Beschreibung der Anzeige ist für alle [Firmware Versionen](/konfiguration/firmware-update) ab 0.0.28 gültig.

### Ablauf keine aktive Ladung

<div className="row">
<div className="col col--10">

Wird angezeigt wenn kein Fahrzeug verbunden ist und keine Ladung stattfindet. Dieses Bild kann selbst personalisiert werden.

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 2](/img/produkte-pico-ladestation-pico-display/01.png)

</div>
</div>

### Ablauf Eingestecktes Auto wartet auf Freigabe

<div className="row">
<div className="col col--10">

Wird immer wieder angezeigt, wenn das Auto eingesteckt wird, aber die Station im Backend noch nicht freigegeben ist.

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 3](/img/produkte-pico-ladestation-pico-display/03.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Wird immer wieder angezeigt, wenn das Auto eingesteckt wird, aber die Station im Backend noch nicht freigegeben ist.

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 4](/img/produkte-pico-ladestation-pico-display/04.png)

</div>
</div>

### Ablauf Authentifizierung mit CarID (Pico Online)

<div className="row">
<div className="col col--10">

Wird angezeigt, wenn das Auto eingesteckt wird und die Car-ID geprüft wird.

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 5](/img/produkte-pico-ladestation-pico-display/05.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Wird angezeigt, wenn das Fahrzeug nicht autorisiert ist oder die Car-ID im eCarUp Fahrer account nicht hinterlegt ist. Anschliessend wechselt die Pico in den "Ablauf Eingestecktes Auto wartet auf Freigabe".

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 6](/img/produkte-pico-ladestation-pico-display/06.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Wird angezeigt, wenn das Fahrzeug autorisiert ist. Anschliessend wechselt die Pico in den "Ablauf aktive Ladung".

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 7](/img/produkte-pico-ladestation-pico-display/07.png)

</div>
</div>

### Ablauf Authentifizierung mit RFID (Pico Online)

<div className="row">
<div className="col col--10">

RFID Karte wird kontrolliert. Bei einer sehr guten Verbindung, kann es sein, dass der Text gar nicht angezeigt wird.

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 8](/img/produkte-pico-ladestation-pico-display/08.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Wird angezeigt, wenn die RFID autorisiert ist.

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 9](/img/produkte-pico-ladestation-pico-display/09.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Wird angezeigt, wenn die RFID-Autorisierung erfolgreich war und kein Auto eingesteckt ist. Wenn ein Auto eingesteckt ist, wird diese Anzeige ignoriert und die Pico wechselt in den "Ablauf aktive Ladung".

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 10](/img/produkte-pico-ladestation-pico-display/10.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Wird angezeigt, wenn die RFID nicht autorisiert ist. Anschliessend wechselt die Pico in den "Ablauf Eingestecktes Auto wartet auf Freigabe" oder "Ablauf keine aktive Ladung".

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 11](/img/produkte-pico-ladestation-pico-display/11.png)

</div>
</div>

### Ablauf Authentifizierung mit QR-Code (Pico Online)

<div className="row">
<div className="col col--10">

Ladung wurde mit QR-Code erfolgreich freigegeben.

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 12](/img/produkte-pico-ladestation-pico-display/12.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Wird angezeigt, wenn die Autorisierung erfolgreich war und kein Auto eingesteckt ist. Wenn ein Auto eingesteckt ist, wird diese Anzeige ignoriert und die Pico wechselt in den "Ablauf aktive Ladung".

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 13](/img/produkte-pico-ladestation-pico-display/10.png)

</div>
</div>

### Ablauf Ladungstart

<div className="row">
<div className="col col--10">

| Wert / Symbol | Beschreibung |
| --- | --- |
| 6A | Freigegebener Ladestrom |

Nach der Ladefreigabe wird der Ladestation ein initialer Ladestrom zugewiesen.
</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 14](/img/produkte-pico-ladestation-pico-display/14.png)

</div>
</div>

<div className="row">
<div className="col col--10">

| Wert / Symbol | Beschreibung |
| --- | --- |
| 32A | Freigegebener Ladestrom |

Wenn der maximale Ladestrom vom Lastmanagement erhöht wird, zeigt es kurz dieses Bild mit dem neuen max. Ladestrom an.

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 15](/img/produkte-pico-ladestation-pico-display/15.png)

</div>
</div>

### Ablauf aktive Ladung
Während der Ladung werden die folgenden Bilder rotierend gezigt.

<div className="row">
<div className="col col--10">

| Wert / Symbol | Beschreibung |
| --- | --- |
| 0.59 | Verbrauch seit Ladebeginn |
| kWh | Einheit des angezeigten Verbrauchs |
| Batterie | Keine Bedeutung |

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 16](/img/produkte-pico-ladestation-pico-display/16.png)

</div>
</div>

<div className="row">
<div className="col col--10">

| Wert / Symbol | Beschreibung |
| --- | --- |
| 22.09.23 | Datum |
| 15:18:43 | Start der Ladung |
| 00:05:13 | Dauer der aktiven Ladung |

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 17](/img/produkte-pico-ladestation-pico-display/17.png)

</div>
</div>

<div className="row">
<div className="col col--10">

| Wert / Symbol | Beschreibung |
| --- | --- |
| 1.81 | Leistung |
| kW | Einheit der angezeigten Leistung |
| ….. blau | Max. Leistung, die von der Station freigegeben ist (1 Pixel = 1A) |
| ….. grün | Bezug Strom vom Auto pro Phase (1 Pixel = 1A) |

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 18](/img/produkte-pico-ladestation-pico-display/18.png)

</div>
</div>

### Ablauf Beendung der Ladung

<div className="row">
<div className="col col--10">

| Wert / Symbol | Beschreibung |
| --- | --- |
| 32A | Max. zugelassener Strom |

Wenn der maximale Ladestrom vom Lastmanagement verringert wird, zeigt es kurz dieses Bild mit dem neuen Ladestrom an.

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 19](/img/produkte-pico-ladestation-pico-display/19.png)

</div>
</div>

<div className="row">
<div className="col col--10">

| Wert / Symbol | Beschreibung |
| --- | --- |
| 6A | Minimum Ladestrom |

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 20](/img/produkte-pico-ladestation-pico-display/20.png)

</div>
</div>

<div className="row">
<div className="col col--10">

| Wert / Symbol | Beschreibung |
| --- | --- |
| BYE | Erfolgreich abgemeldet |

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 21](/img/produkte-pico-ladestation-pico-display/21.png)

</div>
</div>

<div className="row">
<div className="col col--10">

| Wert / Symbol | Beschreibung |
| --- | --- |
| 0.59 | Gesamtverbrauch von der letzten Ladung |
| kWh | Einheit des angezeigten Verbrauchs |

Nach der Abmeldung wird der Gesamtverbrauch der letzten Ladung ca. 14 Sek. angezeigt.

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 22](/img/produkte-pico-ladestation-pico-display/22.png)

</div>
</div>

### Ablauf Station neustarten

Dieser Ablauf beschreibt das Neustarten einer Station über das Portal.

<div className="row">
<div className="col col--10">

| Wert / Symbol | Beschreibung |
| --- | --- |
| BYE | Signal für den Neustart |

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 23](/img/produkte-pico-ladestation-pico-display/21.png)

</div>
</div>

<div className="row">
<div className="col col--10">

| Wert / Symbol | Beschreibung |
| --- | --- |
| 0.59 | Gesamtverbrauch von der letzten Ladung |
| kWh | Einheit des angezeigten Verbrauchs |

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 24](/img/produkte-pico-ladestation-pico-display/22.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Der Bildschirm bleibt schwarz für ca. 20 Sek.

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 25](/img/produkte-pico-ladestation-pico-display/25.png)

</div>
</div>

<div className="row">
<div className="col col--10">

Ist das erste Anzeichen, dass die Pico aufstartet.

Nach dem Ablauf Station neustarten wechselt die Pico in den Ablauf MID Mode.

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 26](/img/produkte-pico-ladestation-pico-display/26.png)

</div>
</div>

### Störungsmeldungen und Warnungen

<div className="row">
<div className="col col--10">

**Fatale Störung**

- Fehler 1: Problem mit dem Wlan-Modul
- Fehler 2: Wir haben keine M4-Kommunikation
- Fehler 3: Ein Fehler mit dem Meter SOM
- Fehler 4: Problem mit dem RDC sensor

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 27](/img/produkte-pico-ladestation-pico-display/27.png)

</div>
</div>

<div className="row">
<div className="col col--10">

**SIM Error**

- Problem bei der SIM

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 28](/img/produkte-pico-ladestation-pico-display/28.png)

</div>
</div>

<div className="row">
<div className="col col--10">

**Diode Error**

- Die Diode im Auto ist nicht korrekt. Prüfe das Ladekabel, sowie die Steckverbindung zum Auto.

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 29](/img/produkte-pico-ladestation-pico-display/29.png)

</div>
</div>

<div className="row">
<div className="col col--10">

**Cable Error**

- Das Ladekabel meldet einen Fehler. Prüfe, ob es korrekt eingesteckt ist.

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 30](/img/produkte-pico-ladestation-pico-display/30.png)

</div>
</div>

<div className="row">
<div className="col col--10">

**P Limit**

- Der Lastabwurf ist aktiv. Die Ladeleistung wurde reduziert.

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 31](/img/produkte-pico-ladestation-pico-display/31.png)

</div>
</div>

<div className="row">
<div className="col col--10">

**Warn RDC**

- Der RDC-DD 6mA nach IEC 62955 (Fehlergleichstrom-Nachweiseinrichtung) hat ausgelöst. Die Ladung wurde aus Sicherheitsgründen beendet.

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 32](/img/produkte-pico-ladestation-pico-display/32.png)

</div>
</div>

<div className="row">
<div className="col col--10">

**Offline**

- Die Ladestation hat keine Verbindung zur smart-me Cloud.

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 33](/img/produkte-pico-ladestation-pico-display/33.png)

</div>
</div>

<div className="row">
<div className="col col--10">

**LED leuchtet orange/rot in der rechten oberen Ecke des Displays**

- Hinweis auf eine Fehlermeldung. Nach spätestens 30 Sekunden wird das Fehlerbild (z.B. Cable Error) auf dem Bildschirm angezeigt.

</div>
<div className="col col--2 text--center">

![Pico Display – Abbildung 34](/img/produkte-pico-ladestation-pico-display/34.png)

</div>
</div>

### MID Mode

Um in den MID Modus zu kommen, kann man über die erweiterte Aktion im smart-me Portal auf "Zählerstand auf Display anzeigen" klicken, Start bzw. Neustart der Station oder über den Helligkeitssensor.


<div className="row">
<div className="col col--8">
Mit einer Taschenlampe am Helligkeitssensor kann der Benutzer folgenden Code einblinken: Dunkel - Hell - Dunkel - Hell - Dunkel (jeder Zustand muss zwischen 1 und 5 Sekunden dauern).
| Wert / Symbol | Beschreibung |
| --- | --- |
| Punkt | Lichtsensor |

</div>
<div className="col col--4 text--center">

![Pico Display – Abbildung 35](/img/produkte-pico-ladestation-pico-display/35.png)

</div>
</div>

<div className="row">
<div className="col col--8">

| Wert / Symbol | Beschreibung |
| --- | --- |
| M | MID-Mode aktiv |
| 0.2.1 | Version und Prüfsumme gemäss Obis-Code |
| v 2.2 | Version Nummer der Firmware |
| CRC 4F55 | Prüfsumme der Firmware |

</div>
<div className="col col--4 text--center">

![Pico Display – Abbildung 36](/img/produkte-pico-ladestation-pico-display/36.png)

</div>
</div>

<div className="row">
<div className="col col--8">

| Wert / Symbol | Beschreibung |
| --- | --- |
| M | MID-Mode aktiv |
| F.F.0 | Obis-Code |
| 03 | Fehlercode |

Fehlercodes werden ausschliesslich bei vorhandenem Fehler angezeigt. Ansonsten ist der Bereich leer.

</div>
<div className="col col--4 text--center">

![Pico Display – Abbildung 37](/img/produkte-pico-ladestation-pico-display/37.png)
| Fehlercode | Beschreibung |
| --- | --- |
| x1–x3 | Ladestation ist nicht geeicht |
| x4 | Fehler Display Prozess (Prüfsumme) |
| 1x | Fehler im Meter-SOM (Hardware) |
| 2x–3x | Fehler Meter-SOM (Prüfsumme) |
| 4x | Fehler Meter-SOM (Flash) |
| Sonstige | Genereller Fehler Meter-SOM |

</div>
</div>

<div className="row">
<div className="col col--8">

| Wert / Symbol | Beschreibung |
| --- | --- |
| M | MID-Mode aktiv |
| 1.8.0 | Obis-Code |
| 00013.04 kWh | Der Zählerstand in kWh mit 2 Nachkommastellen |

</div>
<div className="col col--4 text--center">

![Pico Display – Abbildung 38](/img/produkte-pico-ladestation-pico-display/38.png)

</div>
</div>