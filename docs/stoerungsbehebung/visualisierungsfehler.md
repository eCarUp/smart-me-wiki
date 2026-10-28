---
title: 'Visualisierungsfehler'
slug: '/stoerungsbehebung/visualisierungsfehler'
description: 'In diesem Abschnitt werden bekannte Fehlermeldungen im Zusammenhang mit den Visualisierungen und mögliche Lösungsansätze beschrieben.'
sidebar_label: 'Visualisierungsfehler'
---
In diesem Abschnitt werden bekannte Fehlermeldungen im Zusammenhang mit den Visualisierungen und mögliche Lösungsansätze beschrieben.

### Der Lese-User sieht den Energiefluss nicht.

<div className="row">
<div className="col col--6">

Energiedaten werden nicht angezeigt.

- Lösung: Menu Benutzerkonfiguration --> Sicherstellen, dass der Lese-User Zugriff auf die Zähler hat, welche die Graphik erzeugt. In der Regel sind das die technischen Zähler (Bilanz- und Solar-Zähler)

</div>
<div className="col col--6 bild--mitte">

![Visualisierungsfehler – Abbildung 1](/img/stoerungsbehebung-visualisierungsfehler/01.png)

![Visualisierungsfehler – Abbildung 2](/img/stoerungsbehebung-visualisierungsfehler/02.png)

![Visualisierungsfehler – Abbildung 3](/img/stoerungsbehebung-visualisierungsfehler/03.png)

</div>
</div>

### Einfache virtuelle Tarife (Wohnung) wird leer angezeigt

Anzeige geht nicht bzw. wird leer angezeigt

- Lösung 1: Prüfen, dass im smart-me Billing die Berechnung der virtuellen Tarife (Blauer Kasten) kein Fehler hat. [Billing Fehlermeldungen](/stoerungsbehebung/billing-fehlermeldungen) 

- Lösung 2: Sicherstellen, dass der Ordner von der Wohnung gewählt wurde. Wenn der Zähler gewählt wird, geht es nicht.


![Visualisierungsfehler – Abbildung 4](/img/stoerungsbehebung-visualisierungsfehler/04.png)

### Einfacher Energiefluss

Werte werden nicht korrekt angezeigt:

- Lösung 1: Sicherstellen, dass nur zwei von drei Zählern in der Konfiguration hinterlegt sind. Wenn alle drei Zähler angegeben werden, kann es zu falschen Anzeigen kommen. Wir empfehlen immer, wenn möglich, direkte Messungen anzugeben und keine virtuellen Zähler

- Lösung 2: Prüfen, ob die Zähler die korrekten Werte liefern.


![Visualisierungsfehler – Abbildung 5](/img/stoerungsbehebung-visualisierungsfehler/05.png)

<div className="row">
<div className="col col--8">

PV Zähler war falsch angeschlossen. Nachdem er korrekt angeschlossen wurde, stimmt nun die Graphik nicht mehr.

- Lösung 1: Der Pfeil der Graphik wird bestimmt durch den Zählerstand. Nun muss ganz einfach so lange gewartet werden, bis der Zählerstand negativ ist.

</div>
<div className="col col--4 bild--mitte">

![Visualisierungsfehler – Abbildung 6](/img/stoerungsbehebung-visualisierungsfehler/06.png)

</div>
</div>

### Verbrauchs und Produktions Monitoring

NaN% wird angezeigt

- Lösung 1: Der Solarzähler hat an diesem Tag noch nichts produziert. 24h abwarten oder den Zeitraum "Individuell" wählen, damit der aktuelle Tag angezeigt wird.


![Visualisierungsfehler – Abbildung 7](/img/stoerungsbehebung-visualisierungsfehler/07.png)

### Das Kuchendiagramm zeigt nicht alle Zähler an

Dies kommt vor, wenn nur einzelne Zähler z.B. 7 Tage online sind, dann werden nur diese angezeigt und die anderen noch nicht.

![Visualisierungsfehler – Abbildung 8](/img/stoerungsbehebung-visualisierungsfehler/08.png)
