---
title: 'whatwatt'
slug: '/drittsysteme/whatwatt'
description: 'Il modulo whatwatt è un piccolo modulo hardware per la lettura dei contatori di energia utilizzati dall''azienda elettrica.'
sidebar_label: 'whatwatt'
---

<div className="row">
<div className="col col--8">

Il modulo whatwatt è un piccolo modulo hardware per la lettura dei contatori di energia utilizzati dall'azienda elettrica.
Trasmette le letture del contatore rilevanti, i profili di carico e i valori di potenza in tempo reale.

Il modulo trasmette i suoi dati tramite un'interfaccia API direttamente al nostro cloud.



Requisiti:
- Modulo hardware
- Licenza "Cloud2Cloud" per ogni modulo
- Scheda SD interna per ogni modulo

Applicazioni:

- Conteggio di RCP virtuali (vRCP)
- Trasmettitore di valori misurati per il controllo di prodotti di terzi tramite Modbus TCP, MQTT o API
- Compatibile con smart-me Nimbus 100A per la lettura locale tramite Modbus TCP

</div>
<div className="col col--4 text--center">

![whatwatt – Figura 1](/img/drittsysteme-whatwatt/01.png)

</div>
</div>


<Video src="7-VJBJNCnZY" title="Video YouTube, registrazione del webinar whatwatt x smart-me" />

## Impostazioni lato hardware:
<div className="row">
<div className="col col--8">

L'ora trasmessa deve essere impostata sull'ora NTP per ogni modulo.

1.  Apra la sua APP whatwatt
2.  Passi all'interfaccia web (browser)
3.  Clicchi su Meter
4.  Scorra verso il basso fino a Time Handling
5.  Imposti Time Handling su "Use Networktime" in Reports

</div>
<div className="col col--4 text--center">

![whatwatt – Figura 2](/img/drittsysteme-whatwatt/02.jpg)

![whatwatt – Figura 3](/img/drittsysteme-whatwatt/03.jpg)

</div>
</div>

## Istruzioni per l'integrazione:

<Embed src="https://drive.google.com/file/d/1J5iwfbUOJA5ZBVfDcz7xM2ouiSC38hOw/preview" aspect="0.721" title="Drive, whatwatt_Go_smart-me_Integration_v1.0.pdf" />

![whatwatt – Figura 4](/img/drittsysteme-whatwatt/04.png)

![whatwatt – Figura 5](/img/drittsysteme-whatwatt/05.png)

Compatibilità con prodotti di terzi:

[Verificare la compatibilità](https://whatwatt.ch/de/compatibility)

Contatto:

[www.whatwatt.ch](http://www.whatwatt.ch)
