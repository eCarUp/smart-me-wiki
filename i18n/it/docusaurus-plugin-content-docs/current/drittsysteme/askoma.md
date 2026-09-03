---
title: 'Askoma'
slug: '/drittsysteme/askoma'
description: 'Askoheat è un''azienda svizzera che produce elementi riscaldanti per il trattamento dell''acqua e l''accumulo di energia.'
sidebar_label: 'Askoma'
---
Askoheat è un'azienda svizzera che produce elementi riscaldanti per il trattamento dell'acqua e l'accumulo di energia.

Gli elementi riscaldanti possono essere comandati in modo intelligente tramite sistemi di terzi come smart-me AG e accumulano così l'energia solare in eccesso, ad esempio nell'acqua calda.

Prodotti Askoma supportati:

- Askoheat+


![Askoma – Figura 1](/img/drittsysteme-askoma/01.png)

![Askoma – Figura 2](/img/drittsysteme-askoma/02.png)

### Requisiti

- Contatore smart-me Telstar 80A o CT

- Licenza Professional per l'attivazione dei servizi Modbus TCP e DNS

- Disponibile nel software standard da metà settembre 2024.

- Sul lato router occorre garantire che l'IP del Telstar non cambi.


### Configurazione di Askoheat+ e smart-me Telstar 80A / CT

Telstar 80A / CT:

- nelle impostazioni (selezionare il contatore, ingranaggio in alto a destra)

- attivare Modbus TCP

- attivare DNS

- selezionare l'IP interno

- salvare


![Askoma – Figura 3](/img/drittsysteme-askoma/03.png)

- Lettura dell'IP tramite CMD e comando ping sull'indirizzo DNS visualizzato. L'indirizzo DNS si trova nelle impostazioni avanzate sotto "Attiva DNS" (DNS aktivieren). Ad esempio ping smart-me\_6303192.dns-me.com


![Askoma – Figura 4](/img/drittsysteme-askoma/04.png)

Impostazioni su Askoheat+

Queste possono variare e non sono di responsabilità di smart-me.

[http://askoheat.local/setup3](http://askoheat.local/setup3) 

- Inserire l'indirizzo IP del Telstar. 

- Attivare la modalità TCP Master

-  Selezionare Smart-Me dall'elenco

- Fare clic su Start Connection


![Askoma – Figura 5](/img/drittsysteme-askoma/05.png)

- Poi puoi verificare sulla pagina Setup3 sotto STATUS se il valore misurato in watt si aggiorna ogni 1-3 secondi.


![Askoma – Figura 6](/img/drittsysteme-askoma/06.png)

### Contatto

ASKOMA AG

Industriestrasse 1

CH-4922 Bützberg

Svizzera

Tel. +41 62 958 70 80

Supporto +41 62 958 70 99

Fax  +41 62 958 70 81

[info@askoma.com](mailto:info@askoma.com)
