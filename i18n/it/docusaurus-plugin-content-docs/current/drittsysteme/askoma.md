---
title: 'Askoma'
slug: '/drittsysteme/askoma'
description: 'Askoheat è un''azienda svizzera che produce elementi riscaldanti per la preparazione dell''acqua e l''accumulo di energia.'
sidebar_label: 'Askoma'
---
<div className="row">
<div className="col col--6">

Askoheat è un'azienda svizzera che produce elementi riscaldanti per la preparazione dell'acqua e l'accumulo di energia.

Gli elementi riscaldanti possono essere comandati in modo intelligente tramite sistemi di terzi come smart-me AG e accumulano così l'energia solare in eccesso, ad esempio nell'acqua calda sanitaria.

Prodotti Askoma supportati:

- Askoheat+

</div>
<div className="col col--6 text--center">

![Askoma – Figura 1](/img/drittsysteme-askoma/01.png)

![Askoma – Figura 2](/img/drittsysteme-askoma/02.png)

</div>
</div>

### Requisiti

- Contatore smart-me Telstar 80A o CT

- Licenza Professional per l'attivazione dei servizi Modbus TCP e DNS

- Disponibile nel software standard a partire da metà settembre 2024.

- Sul router occorre assicurarsi che l'IP del Telstar non cambi.


### Configurazione di Askoheat+ e smart-me Telstar 80A / CT

<div className="row">
<div className="col col--4">

Telstar 80A / CT:

- nelle impostazioni (selezionare il contatore, in alto a destra la rotella dentata)

- Attivare Modbus TCP (Modbus TCP aktivieren)

- Attivare DNS (DNS aktivieren)

- Selezionare l'IP interno (Interne IP)

- Salvare (Speichern)

</div>
<div className="col col--8 text--center">

![Askoma – Figura 3](/img/drittsysteme-askoma/03.png)

</div>
</div>

<div className="row">
<div className="col col--5">

- Leggere l'IP tramite CMD e il comando ping sull'indirizzo DNS visualizzato. L'indirizzo DNS si trova nelle impostazioni avanzate (Erweiterte Einstellungen) sotto "Attivare DNS" ("DNS aktivieren"). Ad es. ping smart-me\_6303192.dns-me.com

</div>
<div className="col col--7 text--center">

![Askoma – Figura 4](/img/drittsysteme-askoma/04.png)

</div>
</div>

Impostazioni su Askoheat+

Queste possono variare e non rientrano nella responsabilità di smart-me.

[http://askoheat.local/setup3](http://askoheat.local/setup3)

- Inserire l'indirizzo IP del Telstar.

- Attivare la modalità TCP Master

-  Selezionare Smart-Me dall'elenco

- Cliccare su Start Connection


![Askoma – Figura 5](/img/drittsysteme-askoma/05.png)

- Quindi è possibile verificare se il valore misurato, ossia il valore in watt riportato sulla pagina Setup3 sotto STATUS, si aggiorna ogni 1-3 secondi.


![Askoma – Figura 6](/img/drittsysteme-askoma/06.png)

### Contatto

<Kacheln min="20rem">
<Kachel titel="ASKOMA AG">

Industriestrasse 1, CH-4922 Bützberg, Svizzera

Tel. +41 62 958 70 80 · Supporto +41 62 958 70 99 · Fax +41 62 958 70 81

[info@askoma.com](mailto:info@askoma.com)

</Kachel>
</Kacheln>
