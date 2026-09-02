---
title: 'Cloud Lizenzen'
slug: '/planung/cloud-lizenzen'
description: 'Beachte, dass der Professional-Status des Accounts nur erreicht wird, wenn jeder Messpunkt über eine gleichwertige Lizenz verfügt.'
sidebar_label: 'Cloud Lizenzen'
---
Beachte, dass der Professional-Status des Accounts nur erreicht wird, wenn jeder Messpunkt über eine gleichwertige Lizenz verfügt.

## Basic

Standard für API, OCPP und M-Bus Zähler

[M-Bus Gateway](/produkte/m-bus-gateway) 

\---

Reports: manueller CSV Export

1 Messwert pro 15 Minuten. (API)

API: nur private Nutzung und Steuerung\*\*

## Limited

Standard für

[1-Phasen Zähler](/produkte/1-phasen-zaehler) 

[3-Phasen Zähler Telstar](/produkte/telstar) 

[3-Phasen Zähler Telstar CT](/produkte/Telstar-CT) 

[Kamstrup Modul (Abgekündigt)](/produkte/kamstrup-modul) 

[Pico Ladestation](/produkte/pico-ladestation) 

\---

[Wenn/Dann-Aktionen](/konfiguration/wenndann-aktionen) 

Reports

Lastprofile

Erweiterte Ordner und Zähler Verwaltung

Public Links 

1 Messwert pro Minute. (API)

API: nur private Nutzung und Steuerung\*\*

## Professional\*

Erweiterung möglich für alle Messpunkte in der smart-me Cloud

\---

[Billing](/konfiguration/billing) 

[Virtuelle Zähler](/konfiguration/billing/virtuelle-zaehler) 

[Auto Export](/schnittstellen/auto-export) 

[Benutzerkonfiguration](/konfiguration/benutzerkonfiguration) 

Pico Dynamisches Lastmanagement 

oAuth

[Wenn/Dann-Aktionen](/konfiguration/wenndann-aktionen) 

Reports

Lastprofile

Erweiterte Ordner und Zähler Verwaltung

Public Links 

[Modbus TCP](/schnittstellen/modbus-tcp) 

1 Messwert pro Sekunde. (API)

API: für private und kommerzielle Nutzung

[Systemgesundheit](/stoerungsbehebung/systemgesundheit)

\*Die jeweilige Abo-Stufe wird nur erreicht, wenn jeder Zählerpunkt im Konto die gleiche Lizenzstufe hat.

\*\* Eine kommerzielle Nutzung der API benötigt immer die Professional Abo Stufe.

Professional = Alle Zähler des Kontos haben eine Professional-Lizenz.

Der Zähler mit der niedrigsten Abo-Stufe im Konto bestimmt die Gesamt-Abo-Stufe des Kontos. 

Gemischte Konten sind nicht möglich und verbleiben im Status Basic oder Limited, wenn die Anzahl der Lizenzen nicht ausreicht.

## Berechnen der richtigen Anzahl Professional Lizenzen

Damit dein Account in den Status Professional gelangt, benötigst du mindestens für jeden Zähler (auch virtuelle) im Account eine Professional Lizenz.

Es ist nicht möglich, lizenzierte Zähler mit unlizenzierten in einem Account zu mischen.

Faustregel für ZEV und vZEV mit einheitlichem Solar und / oder Batterietarif:

ZEV mit 1x PV Anlage: Zähleranzahl = Lizenzanzahl
ZEV mit \>1x PV-Anlage (Visualisierungen): Zähleranzahl + 1 (virtuell)

Faustregel für ZEV Systeme mit separiertem Solar- und Batterietarif (nur AC- gekopelte Systeme):

ZEV mit 1x PV-Anlage: Zähleranzahl + 1 (virtuell)

ZEV mit >1x PV-Anlage: Zähleranzahl + 2 (virtuell)

### Beispiel Elektro mit smart-me Zählern (1x PV)

3x Telstar 80A
2x Telstar CT

Total Professional alle Energietypen: 5 Stück

### Beispiel Elektro mit smart-me Zähler + Wärme / Wasser mit M-Bus Gateway (1x PV)

3x Telstar 80A
2x Telstar CT

Lizenzen Professional alle Energietypen: 5 Stück

1x M-Bus Gateway mit verbundenen Wärme / Wasser Zählern

3x Wärme
3x Kälte
3x Warmwasserzähler
3x Kaltwasser Zähler

Lizenzen Professional für Wärme / Wasser / Gas: 12 Stück

Total Professional Lizenzen: 17 Stück

Hinweis: Das M-Bus Gateway selbst benötigt keine Lizenz.

## Lizenzerfüllung

Die oben beschriebene Installation mit verschiedenen Energieträgern kann nun auf zwei Arten lizenziert werden.

### Monatliches Abonement

Die Installation erfordert 18 Professional Lizenzen.

Diese können zu einem monatlichen Betrag eingekauft werden und decken zu jedem Zeitpunkt alle Energietypen.

- 18x Monatliche Professional Lizenz Alle Energietypen


Das Monatliche Abo ist Inflations- und Deflationseffekten unterworfen.

### Mehrjahreslizenzmodell

Die Installation erfordert total 18 Professional Lizenzen.

- 6x Professional Lizenz alle Energietypen, 10 Jahre (Elektro + virtuelle Zähler)

- 12x Professional Lizenz Wärme / Wasser / Gas, 10 Jahre


Die Mehrjahreslizenzen sind im Schnitt kostengünstiger und unterliegen keinen Inflations- oder Deflationseffekten während der Nutzungszeit.

## Bist du ein "Professional" Kunde?

Mit den untenstehenden Abbildungen findest du einfach heraus, ob du Professional Lizenzen in deinem Account benötigst. 

### ZEV-Abrechnung

Bei der ZEV-Abrechnung ist entscheidend, welches Tarifsystem abgebildet werden soll und ob die Abrechnung automatisiert geschehen soll.

![Cloud Lizenzen – Abbildung 1](/img/planung-cloud-lizenzen/01.png)

### ZEV-Steuerung

![Cloud Lizenzen – Abbildung 2](/img/planung-cloud-lizenzen/02.png)
