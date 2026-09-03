---
title: 'Importazione dati Ebix'
slug: '/schnittstellen/ebix-datenimport'
description: 'smart-me offre la possibilità di importare automaticamente i dati con il formato Ebix'
sidebar_label: 'Importazione dati Ebix'
---
smart-me offre la possibilità di importare automaticamente i dati con il formato Ebix

### Requisiti

Solo i partner Gold di smart-me possono utilizzare l'importazione automatica dei dati. Ulteriori informazioni su questo modello di licenza possono essere richieste al reparto vendite.

## Ebix (SDAT)

I file XML (Ebix) per lo scambio standardizzato di dati per il mercato dell'elettricità possono essere importati in smart-me.

### Schemi supportati

- ValidatedMeteredData\_1p1.xsd

- ValidatedMeteredData\_1p2.xsd

- ValidatedMeteredData\_1p3.xsd

- ValidatedMeteredData\_1p4.xsd


### Caricamento dei dati

I file possono essere caricati sui server FTP di smart-me tramite FTP o FTPS (TLS):

Server: ftp.smart-me.com

Percorso: /Ebix/

Nome utente: "e-mail di un sottoaccount del partner"

Password: "la password corrispondente"

La dimensione dei file per l'importazione è limitata a 50 megabyte.

### Assegnazione a un account utente

Appena i file Ebix sono stati caricati sui server da un utente del partner, l'ID del punto di misurazione è visibile in "Configurazione->Partner->Importazione dati" ("Konfiguration->Partner->Daten Import"):

![Importazione dati Ebix – Figura 1](/img/schnittstellen-ebix-datenimport/01.jpg)

Il punto di misurazione può essere assegnato a un altro utente facendo clic su modifica (editieren):

![Importazione dati Ebix – Figura 2](/img/schnittstellen-ebix-datenimport/02.jpg)
