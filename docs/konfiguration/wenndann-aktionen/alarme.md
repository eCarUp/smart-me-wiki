---
title: 'Alarme'
slug: '/konfiguration/wenndann-aktionen/alarme'
description: 'Alarme können eingerichtet werden, um eine E-Mail zu bekommen, wenn Zähler keine Verbindung mehr mit unserer Cloud hat.'
sidebar_label: 'Alarme'
---
Alarme können eingerichtet werden, um eine E-Mail zu bekommen, wenn Zähler keine Verbindung mehr mit unserer Cloud hat.

## Voraussetzung

Du brauchst ein smart-me Limited oder Professional Abo um diese Funktion zu nutzen.

### Konfiguration der Alarme

### Wenn-Ereignis / Keine Verbindung

Unter [Wenn/Dann-Aktionen](/konfiguration/wenndann-aktionen) gehen wir vertieft darauf ein.

Es kann ein Wenn-Ereignis eingestellt werden, das dann auslöst, wenn ein Zähler keine Verbindung mehr zur Cloud hat. Folgende Einstellungen müssen gemacht werden:

- Wenn ein Ordner gewählt wird, werden alle dazugehörigen Zähler überwacht. Wenn du mehrere Ordner wählst, bitte ein ODER wählen.

- Wenn ein Zähler gewählt wird, wird nur diese Zähler überwacht.


Definition der Ausfallzeit: 

- Allgemein: Die 1440 Minuten (1 Tag) verhindern einen Fehlalarm bei einer kurzen Internetunterbrechung für smart-me Zähler.

- Pico: Bei der Alarmierung zur Überprüfung von Picos, die mit einem Backend verbunden sind, kann es sinnvoll sein, diese Zeit zu verkürzen, z.B. auf 15 oder 60 Minuten. Dadurch wird verhindert, dass eine Station zu lange ausser Betrieb ist.


![Alarme – Abbildung 1](/img/konfiguration-wenndann-aktionen-alarme/01.png)

### Dann-Aktion / Alarm

Sind die Wenn-Ereignisse eingetreten, wird ein E-Mail versendet. Folgende Einstellungen müssen gemacht werden:

- Name des Alarms

- Subjekt: Betreff Alarm E-Mails

- Nachricht: Text, welcher im Alarm E-Mail enthalten ist


Hinweis: Wir empfehlen die Dann-Aktion nur mit der E-Mail zu ergänzen und den Rest so zu belassen. Solltest du mehrere Liegenschaften haben, empfehlen wir im Betreff den Namen des Kontos zu hinterlegen, damit du immer weisst, von welchem Konto der Alarm kommt.

Wenn der Alarm an mehrere Mail-Adressen gehen soll, muss eine Dann-Aktion für jede einzelne Mail gemacht werden.

![Alarme – Abbildung 2](/img/konfiguration-wenndann-aktionen-alarme/02.png)

Wie oft wird eine Alert E-Mail verschickt?

Die E-Mail wird nur einmal versandt, wenn sich der Status verschlechtert. Wenn weitere Zähler ausfallen bevor der erste wieder online ist, wird keine weitere E-Mail mehr verschickt. 

Nach der Behebung des Problems empfehlen wir in den Wenn/Dann Aktionen zu prüfen, ob "Zuletzt ausgelöst" "nie" lautet. Wenn dort ein Zeitpunkt steht, gibt es noch Zähler, die offline sind.

Wenn du mehr als eine E-Mail erhalten möchtest, musst du zwei Alarme einrichten. Den ersten z.B. mit 1440 Minuten und den zweiten mit 7200 Minuten. So kann z.B. eine unbemerkte E-Mail ein zweites Mal versendet werden.

![Alarme – Abbildung 3](/img/konfiguration-wenndann-aktionen-alarme/03.png)

Nun ist die gesamte Infrastruktur bereit um die Abrechnung darauf aufzubauen.

### Nächster Schritt

[Weiter mit der Abrechnungskonfiguration](/konfiguration/billing)
