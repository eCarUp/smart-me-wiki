---
title: 'Tarifzeiten definieren'
slug: '/konfiguration/wenndann-aktionen/tarifzeiten-definieren'
description: 'Aufbau der Wenn Aktion für virtuelle Tarife'
sidebar_label: 'Tarifzeiten definieren'
naechste_schritte: [konfiguration/billing/stromtarife-definieren/index]
---
<Menueweg>Wenn-Dann Aktionen</Menueweg>

## Aufbau der Wenn Aktion für virtuelle Tarife

<div className="row">
<div className="col col--6">

Du kannst mit einer zusätzlichen Bedingung definieren, ab wann dieser Tarif gültig sein soll. Dies kann eine Zeitspanne sein (z. B. für Hoch- / Niedertarif) oder auch eine beliebige Andere. Die Bedingung muss vorher als [Wenn/Dann-Aktion](/konfiguration/wenndann-aktionen) definiert worden sein. Die gängigsten Beispiele sind unten beschrieben.

Hinweise:

- Wenn du alle Tarife definiert hast, musst du zwingend auf Neu rechnen klicken. Somit werden alle virtuellen Tarife korrekt berechnet. Dieser Vorgang kann einige Stunden dauern.

</div>
<div className="col col--6">

<Video src="0LTDpKKA3-k" title="YouTube Video, Solar im Hoch- und Niedertarif abrechnen" />

</div>
</div>

### Wenn / Dann Oberfläche

![Tarifzeiten definieren – Abbildung 2](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/02.png)

## Schritt für Schritt Doppeltarif erstellen

Schau auf dem Tarifblatt die jeweiligen Zeiten für den Hochtarif an. In unserem Beispiel ist die Situation folgende:

<div className="row">
<div className="col col--6">

**HT Zeit:**

Mo- Fr: 7:00 bis 22:00 Uhr

Sa: 7:00 bis 13:00 Uhr

</div>
<div className="col col--6">

**NT Zeit:**

Mo-Fr: 22:00 bis 7:00 Uhr

Sa: 13:00 bis 00:00

So : Ganzer Tag

</div>
</div>

### HT Zeit erstellen

<div className="row">
<div className="col col--6">

Klicke auf das "+" um ein neues Timing zu erstellen.

Wähle die Oder-Verknüpfung

Funktion ODER:

Wenn eine der WENN Bedingungen zutrifft ist es HT Zeit.

Klicke bei WENN Ereignisse auf das "+" um die HT Zeit Mo-Fr zu erstellen.

</div>
<div className="col col--6 bild--mitte">

![Tarifzeiten definieren – Abbildung 3](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/03.png)

</div>
</div>

#### HT Zeit Mo-Fr

![Datum & Uhrzeit](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Wähle Datum & Uhrzeit

Definiere die Zeiten für Mo-Fr

7:00 bis 22:00

und speichere die Einstellung.

</div>
<div className="col col--6 bild--mitte">

![Tarifzeiten definieren – Abbildung 5](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/05.png)

</div>
</div>

#### HT Zeit Samstag

![Datum & Uhrzeit](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Klicke unter den WENN Ereignissen wieder auf "+" um den Samstag zu definieren.

Wähle Datum & Uhrzeit

Definiere die Zeiten für Samstag

7:00 bis 13:00

und speichere die Einstellung.

Die HT Zeit ist nun definiert.

</div>
<div className="col col--6 bild--mitte">

![Tarifzeiten definieren – Abbildung 6](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/06.png)

![Tarifzeiten definieren – Abbildung 8](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/08.png)

![Tarifzeiten definieren – Abbildung 9](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/09.png)

</div>
</div>

### NT Zeit erstellen

<div className="row">
<div className="col col--6">

Klicke auf das "+" um ein neues Timing zu erstellen.

Klicke auf "+" um eine weitere Aktion zu erfassen für die NT Zeit

</div>
<div className="col col--6 bild--mitte">

![Tarifzeiten definieren – Abbildung 10](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/10.png)

![Tarifzeiten definieren – Abbildung 11](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/11.png)

</div>
</div>

#### NT Zeit Mo-Fr

![Datum & Uhrzeit](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Wähle Datum & Uhrzeit

Definiere die NT Zeit für Mo-Fr

Sie entspricht in diesem Fall der Zweit von 22:00 bis 7:00

Speichere die Einstellung.

</div>
<div className="col col--6 bild--mitte">

![Tarifzeiten definieren – Abbildung 13](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/13.png)

</div>
</div>

#### NT Zeit Samstag

![Datum & Uhrzeit](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Klicke auf "+" um den Samstag zu definieren

Wähle Datum & Uhrzeit

Der Samstag definiert sich folgender massen:

13:00 bis 00:00 des Tages

Speichere die Einstellung.

</div>
<div className="col col--6 bild--mitte">

![Tarifzeiten definieren – Abbildung 14](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/14.png)

![Tarifzeiten definieren – Abbildung 16](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/16.png)

</div>
</div>

#### NT Zeit Sonntag

![Datum & Uhrzeit](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Klicke auf "+" um den noch fehlenden Sonnatg zu definieren

Wähle Datum & Uhrzeit

Für einen ganztägigen Niedertarif am Sonntag, wird für den Sonntag 00:00 bis 00:00 eingetragen.

Speichere die Einstellung

</div>
<div className="col col--6 bild--mitte">

![Tarifzeiten definieren – Abbildung 17](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/17.png)

![Tarifzeiten definieren – Abbildung 19](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/19.png)

</div>
</div>

### Timings den Tarifen zuweisen

<div className="row">
<div className="col col--6">

Jetzt wo du die relevanten Tarifzeiten definiert hast, kehre zurück zu der Tarifdefinition um den Tarifen die Timings zuzuweisen.

</div>
<div className="col col--6 bild--mitte">

![Tarifzeiten definieren – Abbildung 20](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/20.png)

</div>
</div>

## Andere Beispiele

Je nach Tarifmodell deines Energieversorgers sieht die Wenn-Aktion anders aus. Klapp den Aufbau auf, der zu deinem Fall passt.

<details id="hoch-und-niedertarif-netzstrom-einheitstarif-solar">
<summary>Hoch- und Niedertarif für Netzstrom und Einheitstarif bei Solarstrom</summary>

- Solarstrom Einheitstarif: Solartarif definieren ohne Wenn Aktion

- Netzstrom Hochtarif: Normaler Tarif definieren mit Wenn Aktion

    - Beispiel. Mo bis Fr 7h00 bis 22h00 oder Sa 7h00 bis 13h00 

- Netzstrom Niedertarif: Normaler Tarif definieren ohne Wenn Aktion


Logik: Zuerst wird der verfügbare Solarstrom verteilt. Wenn zu wenig oder keiner verfügbar ist, wird der normale Tarif verwendet, der eine Bedingung erfüllt. Zum Schluss wird der Tarif ohne Bedingung für den restlichen Strom versendet.

</details>

<details id="hoch-und-niedertarif-netz-und-solarstrom">
<summary>Hoch- und Niedertarif für Netz- und Solarstrom</summary>

- Solarstrom Hochtarif: Solartarif definieren mit Wenn Aktion

    - Beispiel: Mo bis Fr 7h00 bis 22h00 oder Sa 7h00 bis 13h00 

- Solarstrom Niedertarif: Solartarif definieren mit Wenn Aktion

    - Beispiel: Mo bis Fr 22h00 bis 7h00 oder Sa 13h00 bis 7h00 oder So 0h00 bis 0h00

- Netzstrom Hochtarif: Normaler Tarif definieren mit Wenn Aktion

    - Dieselbe Wenn Aktion wie für den Solarstrom Hochtarif verwenden 

- Netzstrom Niedertarif: Normaler Tarif definieren mit Wenn Aktion

    - Dieselbe Wenn Aktion wie für den Solarstrom Niedertarif verwenden 


Logik: Zuerst wird der verfügbare Solarstrom mit der gültigen Bedingung verwendet. Wenn zu wenig oder keiner verfügbar ist, wird der Normale Tarif mit der gültigen Bedingung verwendet. Es ist wichtig, dass in diesem Anwendungsfall 24h/Tag mit einer Wenn Bedingung abgedeckt ist.

</details>

<details id="sommer-winter-netzstrom-einheitstarif-solar">
<summary>Sommer und Winter mit Hoch- und Niedertarif für Netzstrom und Einheitstarif bei Solarstrom</summary>

- Solarstrom Hochtarif: Solartarif definieren ohne Wenn Aktion

- Netzstrom Hochtarif Sommer: Normaler Tarif definieren mit Wenn Aktion

    - Beispiel: Zeitspanne Jeden Tag: Mo bis So 7h00 bis 22h00 und Zeitspanne Jedes Jahr von 1 / 04 / 00:00 bis 1 / 10 / 00:00.

- Netzstrom Niedertarif Sommer: Normaler Tarif definieren mit Wenn Aktion

    - Beispiel: Zeitspanne Jeden Tag: Mo bis So 22h00 bis 07h00 und Zeitspanne Jedes Jahr von 1 / 04 / 00:00 bis 1 / 10 / 00:00.

- Netzstrom Hochtarif Winter: Normaler Tarif definieren mit Wenn Aktion

    - Beispiel: Zeitspanne Jeden Tag: Mo bis So 7h00 bis 22h00 und Zeitspanne Jedes Jahr von 1 / 10 / 00:00 bis 1 / 4 / 00:00.

- Netzstrom Niedertarif Winter: Normaler Tarif definieren mit Wenn Aktion

    - Beispiel: Zeitspanne Jeden Tag: Mo bis So 22h00 bis 07h00 und Zeitspanne Jedes Jahr von 1 / 10 / 00:00 bis 1 / 4 / 00:00.


Logik: Zuerst wird der verfügbare Solarstrom verwendet. Wenn zu wenig oder keiner verfügbar ist, wird der Normale Tarif mit der gültigen Bedingung verwendet. Es ist wichtig, dass in diesem Anwendungsfall 24h/Tag mit einer Wenn Bedingung abgedeckt ist.

</details>

<details id="sommer-winter-mit-mittagsniedertarif-im-winter">
<summary>Sommer und Winter mit Hoch- und Niedertarif für Netzstrom und Einheitstarif bei Solarstrom und Niedertarif über den Mittag nur im Winter (z.B. EWS/EBS)</summary>

Beispiel

- Netz- und Solarstrom Niedertarif Winter 

    - Beispiel: Winter NT 22h00 bis 07h00 zwischen 1.10 bis 1.4.

    - Wenn Dann Aktion mit UND Verknüpfung

        - Zeitspanne Jeden Tag: Mo bis So 22h00 bis 07h00 

        - Zeitspanne Jedes Jahr von 1 / 10 / 00:00 bis 1 / 04 / 00:00.

- Netz- und Solarstrom Hochtarif Winter 

    - Beispiel: Winter HT 07h00 bis 22h00 zwischen 1.10 bis 1.4.

    - Wenn Dann Aktion mit UND Verknüpfung

        - Zeitspanne Jeden Tag: Mo bis So 7h00 bis 22h00 

        - Zeitspanne Jedes Jahr von 1 / 10 / 00:00 bis 1 / 04 / 00:00.

- Netz- und Solarstrom Niedertarif Sommer

    - Beispiel: Sommer NT 00h00 bis 06h00 und 12h00 bis 15h00 zwischen 1.4 bis 1.10

    - Wenn Dann Aktion mit UND Verknüpfung

        - Zeitspanne Jeden Tag: Mo bis So 12h00 bis 06h00 

        - Zeitspanne Jeden Tag: Mo bis So 00h00 bis 15h00 

        - Zeitspanne Jedes Jahr von 1 / 4 / 00:00 bis 1 / 10 / 00:00.

- Netz- und Solarstrom Hochtarif Sommer 

    - Beispiel: Sommer HT 06h00 bis 12h00 und 15h00 bis 00h00 zwischen 1.4 bis 1.10

    - Wenn Dann Aktion mit UND Verknüpfung

        - Zeitspanne Jeden Tag: Mo bis So 06h00 bis 00h00 

        - Zeitspanne Jeden Tag: Mo bis So 15h00 bis 12h00 

        - Zeitspanne Jedes Jahr von 1 / 4 / 00:00 bis 1 / 10 / 00:00.


Logik: Zuerst wird der verfügbare Solarstrom verwendet. Wenn zu wenig oder keiner verfügbar ist, wird der Normale Tarif mit der gültigen Bedingung verwendet. Es ist wichtig, dass in diesem Anwendungsfall 24h/Tag mit einer Wenn Bedingung abgedeckt ist.

</details>

<details id="sommer-winter-tagsueber-wechselnd-energie-uri">
<summary>Sommer und Winter mit Hoch- und Niedertarif für Netzstrom und Solarstrom, Tagsüber Niedertarif im Sommer und Hochtarif im Winter(z.B. Energie Uri ab 1.10.2025)</summary>

Beschreibung: Hier muss in zwei Schritten gearbeitet werden. 1x Wenn Dann und 1x mit den Zeiten in den Virtuellen Tarifen

Ersten müssen die Wenn Aktionen definiert werden.

- Netz- und Solarstrom Sommer NT

    - Beispiel: Sommer NT Mo bis Fr 06h00 bis 22h00 Mo bis FR und Sa und So immer

    - Name: Uri Sommer NT

    - Wenn Dann Aktion mit ODER Verknüpfung

        - Zeitspanne Mo bis Fr: 6h00 bis 22h00 

        - Zeitspanne Sa und So: 00h00 bis 00h00




- Netz- und Solarstrom Sommer HT

    - Beispiel: Sommer HT Mo bis Fr 22h00 bis 06h00

    - Name: Uri Sommer HT

    - Wenn Dann Aktion

        - Zeitspanne Mo bis Fr: 22h00 bis 06h00 




- Netz- und Solarstrom Winter NT

    - Beispiel: Winter NT Mo bis Fr 22h00 bis 06h00 Mo bis FR und Sa und So immer

    - Name: Uri Winter NT

    - Wenn Dann Aktion mit ODER Verknüpfung

        - Zeitspanne Mo bis Fr: 22h00 bis 06h00 

        - Zeitspanne Sa und So: 00h00 bis 00h00




- Netz- und Solarstrom Winter HT

    - Beispiel: Winter HT Mo bis Fr 06h00 bis 22h00

    - Name: Uri Winter HT

    - Wenn Dann Aktion mit ODER Verknüpfung

        - Zeitspanne Mo bis Fr: 06h00 bis 22h00 


Dann müssen die Preise pro Zeitperiode definiert werden.

Die Perioden bzw. Dauer müssen in diesem Fall hinterlegt werden. Bei diesen Tarifmodell ist eine Kombination aus Wenn Dann und Periode notwendig.

- Name: Uri Sommer HT Netz

    - Type: Netztarif

    - Dauer: 1.4.2026 bis 30.9.2026

    - Zusätzliche Bedingung: Uri Sommer HT

- Name: Uri Sommer HT Solar


- Type: Solartarif inkl. vZEV 

- Dauer: 1.4.2026 bis 30.9.2026

- Zusätzliche Bedingung: Uri Sommer HT


- Name: Uri Sommer NT Netz

    - Type: Netztarif

    - Dauer: 1.4.2026 bis 30.9.2026

    - Zusätzliche Bedingung: Uri Sommer NT

- Name: Uri Sommer NT Solar

    - Type: Solartarif inkl. vZEV (Bilanz/Produktionen)

    - Dauer: 1.4.2026 bis 30.9.2026

    - Zusätzliche Bedingung: Uri Sommer NT

- Name: Uri Winter HT Netz

    - Type: Netztarif

    - Dauer: 1.10.2025 bis 31.3.2026

    - Zusätzliche Bedingung: Uri Winter HT 

- Name: Uri Winter HT Solar

    - Type: Solartarif inkl. vZEV (Bilanz/Produktionen)

    - Dauer: 1.10.2025 bis 31.3.2026

    - Zusätzliche Bedingung: Uri Winter HT

- Name: Uri Winter NT Netz

    - Type: Netztarif

    - Dauer: 1.10.2025 bis 31.3.2026

    - Zusätzliche Bedingung: Uri Winter NT

- Name: Uri Winter NT Solar

    - Type: Solartarif inkl. vZEV (Bilanz/Produktionen)

    - Dauer: 1.10.2025 bis 31.3.2026

    - Zusätzliche Bedingung: Uri Winter NT 


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, Wiki Tarife Enerige Uri Tarife 2026.mp4" />

Wiki Tarife Enerige Uri Tarife 2026.mp4

</details>
