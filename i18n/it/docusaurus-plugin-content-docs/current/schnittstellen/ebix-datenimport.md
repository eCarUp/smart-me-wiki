---
title: 'Importazione dati Ebix'
slug: '/schnittstellen/ebix-datenimport'
description: 'smart-me offre la possibilità di un''importazione automatica dei dati con il formato Ebix'
sidebar_label: 'Importazione dati Ebix'
---
smart-me offre la possibilità di un'importazione automatica dei dati con il formato Ebix

### Requisiti

Solo i Gold Partner smart-me possono utilizzare l'importazione automatica dei dati. Ulteriori informazioni su questo modello di licenza possono essere richieste all'ufficio vendite.

## Ebix (SDAT)

I file XML (Ebix) per lo scambio di dati standardizzato nel mercato dell'elettricità possono essere importati in smart-me.

### Schemi supportati

- ValidatedMeteredData\_1p1.xsd

- ValidatedMeteredData\_1p2.xsd

- ValidatedMeteredData\_1p3.xsd

- ValidatedMeteredData\_1p4.xsd


### Caricamento dei dati

I file possono essere caricati sui server FTP di smart-me tramite FTP o FTPS (TLS):

Server: ftp.smart-me.com

Percorso: /Ebix/

Nome utente: "E-mail di un sottoaccount del partner"

Password: "La password corrispondente"

La dimensione dei file per l'importazione è limitata a 50 megabyte.

### Assegnazione a un account utente

Non appena i file Ebix sono stati caricati sui server da un utente del partner, l'ID del punto di misura è visibile in "Configurazione->Partner->Importazione dati" (Konfiguration->Partner->Daten Import):

![Importazione dati Ebix – Figura 1](/img/schnittstellen-ebix-datenimport/01.jpg)

Il punto di misura può essere assegnato a un altro utente con un clic su modifica (editieren):

![Importazione dati Ebix – Figura 2](/img/schnittstellen-ebix-datenimport/02.jpg)
