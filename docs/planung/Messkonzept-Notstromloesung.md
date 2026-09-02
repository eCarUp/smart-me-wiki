---
title: 'Messkonzepte Notstromlösungen'
slug: '/planung/Messkonzept-Notstromloesung'
description: 'Wir erläutern hier, welche Massnahmen getroffen werden müssen, um eine Notstromlösung korrekt zu messen, damit diese für die Abrechnung im smart-me Billing verwendet werden kann.'
sidebar_label: 'Messkonzept Notstromlösung'
---
Wir erläutern hier, welche Massnahmen getroffen werden müssen, um eine Notstromlösung korrekt zu messen, damit diese für die Abrechnung im smart-me Billing verwendet werden kann. 

### Voraussetzung

Du brauchst ein smart-me Professional Abo 

### Voraussetzungen

Dieses Messkonzept kann genutzt werden, wenn in einem Objekt eine Notstromanlage eingesetzt wird. 

Wir gehen davon aus, dass die Notstromanlage eine Blackbox ist und weder PV noch die Batterie AC\-seitig im "Notstrom-Gerät" gemessen werden können. 

Hinweis: Sollte der Hersteller den Einbau von Geräten im Notstromgerät ermöglichen, kannst du ein ganz normales Messkonzept von smart-me vorsehen und die nötigen Zähler direkt in der Notstromanlage verbauen.

### Skizze

HAK, Wohnung, Allgemein und Heizung werden gemessen, gemäss allgemeinem Messkonzept (Kreis mit einem + im Kreis)

Vor und nach dem Notstromgerät wird je ein Zähler verkehrt verbaut (Kreis mit einem -1). Notstrom exkl. Solar und Notstrom inkl. Solar.

Optional kann eine weitere PV-Anlage zwischen den beiden Zähler Notstrom exkl. Solar und Notstrom inkl. Solar gemessen werden.

![Messkonzepte Notstromlösungen – Abbildung 1](/img/planung-messkonzept-notstromloesung/01.png)

### Messkonzept

Um die Notstromanlage zu messen, ist es nötig, vor und nach der Notstromanlage einen Zähler "verkehrt" zu installieren. Der Zähler kann verkehrt angeschlossen werden, in dem bei L1, L2 und L3 die Kabelführung zwischen IN und OUT vertauscht wird.

In diesem Fall wird ein Zähler vor der Produktion und ein Zähler nach der Produktion "verkehrt" angeschlossen. (Gemäss Skizze mit Zähler -1)

Die zwei Zähler Produktion "verkehrt" beinhalten in der Regel nur die Notstromanlage. Es ist jedoch möglich, eine PV\-Anlage zwischen den Zähler einzufügen, wenn diese zum gleichen Preis im smart-me Billing verrechnet werden soll. (Produktion alternative Energie).

Zudem ist ein Virtueller Zähler nötig, der wie folgt zusammengesetzt wird:

Produktion (virtuell) = "Notstrom inkl. Solar" minus "Notstrom exkl. Solar" plus "Bilanz-Zähler"

![Messkonzepte Notstromlösungen – Abbildung 2](/img/planung-messkonzept-notstromloesung/02.png)

### Billing

Im Billing muss ein Batterietarif definiert werden. Der Solarzähler entspricht dem virtuellen definierten Zähler "Produktion"

Alle weiteren Konfiguration können wie gehabt eingetragen werden.

![Messkonzepte Notstromlösungen – Abbildung 3](/img/planung-messkonzept-notstromloesung/03.png)

### Prüfung / Erklärung der Messpunkte

Die Anlage kann geprüft werden, wenn in einem gemeinsamen Ordner (z.B. Technische Zähler) die Zähler Bilanz, Gesamtverbrauch (virtuell), Notstrom exkl. Solar, Notstrom inkl. Solar und Produktion (Virtuell) zugewiesen werden.

Hinweis: Die Anlage sollte mindesten 24 Stunden Daten aufzeichnen.

![Messkonzepte Notstromlösungen – Abbildung 4](/img/planung-messkonzept-notstromloesung/04.png)

- Prüfen ob der Zähler "Notstrom inkl. Solar" ein negativen Wert anzeigt.

- Prüfen ob der Zähler "Notstrom exkl. Solar" ein negativen Wert anzeigt.

- Prüfen ob der Zähler "Produktion (Virtuell) einen Minus Wert hat.

- Prüfen ob der Zähler "Notstrom inkl. Solar" ein kleinerer Wert als "Notstrom exkl. Solar" anzeigt. z.B. Notstrom exkl. Solar = -3.5 Watt und Notstrom inkl. Solar = -326.5 Watt


![Messkonzepte Notstromlösungen – Abbildung 5](/img/planung-messkonzept-notstromloesung/05.png)

Ansicht, wenn die Batterie noch nicht voll ist.

- Technische Zähler wählen, Kachel Leistung, Lastprofil Unterverbräuche

    - Bilanz (blau) und Gesamtverbrauch Virtuell (rot) verläuft die Kurve in der Nacht gleich, wenn die Batterie leer ist.

    - Bilanz (blau) und Notstrom exkl. Solar (gelb) verlaufen spiegelverkehrt.

    - Notstrom inkl. Solar (grün) und Produktion Virtuell (violett) verlauft die Kurve Tagsüber gleich, wenn die Batterie noch nicht voll ist.


![Messkonzepte Notstromlösungen – Abbildung 6](/img/planung-messkonzept-notstromloesung/06.png)

Ansicht wenn die Batterie noch nicht voll ist.

### Einschränkungen

- Verbau von zwei verkehrten Zählern

- ein zusätzlicher virtueller Zähler erforderlich für die Abrechnung

- ein zusätzlicher virtueller Zähler erforderlich für die Grafik (optional)

- Einfache virtuelle Zähler (Wohnung) sind nicht möglich.

- Grafik Monitoring kann einen Eigenverbrauch beinhalten, welcher unter der 0 Linie ist.

- Grafik wird nur korrekt angezeigt, wenn ein weiteren Virtuellen Zähler vorhanden ist, welcher ohne Bilanzzäher ist. Gemäss oberem beispiel wäre das Produktion Grafik (virtuell) = "Notstrom inkl. Solar" minus "Notstrom exkl. Solar" 

- Die Grafik wird nur dann korrekt angezeigt, wenn ein weiterer virtueller Zähler ohne Bilanzzähler vorhanden ist. Nach obigem Beispiel wäre dies Produktion Grafik (virtuell) = "Notstrom inkl. Solar" minus "Notstrom exkl. Solar" 


Es sind keine weiteren Einschränkungen bekannt.

Grafik Monitoring

Bei der Grafik Monitoring wird der Eigenverbrauch unterhalb der 0 Linie angezeigt, wenn:

- Die Notstromlösung benötigt Standbystrom

- Die Notstromlösung benötigt Strom (z.B. Aufheizung oder Kalibrierungsladung von Salzbatterie mit Netzstrom, weil zu wenig Strom DC seitig produziert wurde.


![Messkonzepte Notstromlösungen – Abbildung 7](/img/planung-messkonzept-notstromloesung/07.png)
