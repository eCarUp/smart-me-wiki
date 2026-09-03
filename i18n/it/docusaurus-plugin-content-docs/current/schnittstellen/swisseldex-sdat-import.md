---
title: 'Importazione VZEV-Swisseldex (SDAT)'
slug: '/schnittstellen/swisseldex-sdat-import'
description: 'Per utilizzare l''importazione è necessario un abbonamento smart-me Professional per ogni punto di misura.'
sidebar_label: 'Importazione VZEV-Swisseldex (SDAT)'
---
### Requisito

Per utilizzare l'importazione è necessario un abbonamento smart-me Professional per ogni punto di misura. 

## Esportazione dei dati da parte dell'azienda elettrica

L'azienda elettrica invia i dati al server swisseldex, dove possono essere successivamente elaborati da smart-me.

Indicazioni generali sul destinatario smart-me sul server swisseldex.

- Indirizzo e-mail di contatto: [support@smart-me.com](mailto:support@smart-me.com)

- Numero di telefono di contatto: +41 41 511 09 70

- Lingua: tedesco

- Ruolo: fornitore

    - Nome: ST\_SMART\_ME

    - EIC: 12X-00000020BN-B

    - È sufficiente per l'invio dei dati se il partner Datahub registrato che ci invia i dati dispone di una licenza.

- Ruolo: consumatore finale 

    - Nome: CO\_SMART\_ME

    - EIC: 12X-00000020BN-B

    - È necessario per l'invio dei dati se il partner Datahub registrato che ci invia i dati non dispone di una licenza. Il partner di mercato registrato con il ruolo di gestore della rete di distribuzione deve compilare il relativo foglio di accompagnamento di swissldex: [Laufblatt\_Kommunikationspartner copia di smart-me 10.04.2025](https://drive.google.com/uc?export=download&id=1shPYq-W8ziGMPIbz4d43oensDkoSjLRb) 

- Se è possibile scegliere un formato di dati, occorre selezionare Ebix. Attualmente smart-me supporta solo il formato Ebix per l'importazione


## Configurare l'importazione nell'account di destinazione

1.  La richiesta e l'abilitazione dei punti di misura rilevanti devono essere richieste all'azienda elettrica. Questi vengono poi messi a disposizione di smart-me AG su Swisseldex.
    Il punto di misura viene trasmesso dall'azienda elettrica con il suo ID punto di misura univoco. L'ID è composto dal codice CH e da un numero di 33 cifre.

    Esempio: CH637482974368378932BKL7389576492

2.  Accedi al tuo account vZEV o ZEV su [www.smart-me.com](http://www.smart-me.com).

3.  Apri l'area di importazione del tuo account vZEV o ZEV tramite [https://ftp.portal.smart-me.com/](https://ftp.portal.smart-me.com/).

4.  Accetta le autorizzazioni di accesso

5.  Passa all'area Punti di misura (Messpunkte)

6.  Aggiungi come punti di misura tutti i numeri CH che ti sono stati comunicati.

7.  Dopo la prima importazione dei dati dei punti di misura, questi sono visibili nella [configurazione dei contatori](/konfiguration/ordnerkonfiguration) e possono essere aggiunti alla struttura.


![Importazione VZEV-Swisseldex (SDAT) – Figura 1](/img/schnittstellen-swisseldex-sdat-import/01.png)

![Importazione VZEV-Swisseldex (SDAT) – Figura 2](/img/schnittstellen-swisseldex-sdat-import/02.png)

## Funzionamento dell'elaborazione e della sostituzione dei dati

### Caricamento dei dati e calcolo delle tariffe

I dati importati tramite Swisseldex vengono importati automaticamente in smart-me, appena disponibili, sul corrispondente numero di punto di misura (contatore).

Il calcolo delle tariffe virtuali avviene automaticamente e in modo continuativo, appena sono disponibili i dati di tutti i punti di misura rilevanti per la tariffazione del RCP (raggruppamento ai fini del consumo proprio) o del RCP virtuale (vRCP).

### Sostituzione dei valori

Per sostituire dati errati è sufficiente caricare nuovamente il file di importazione tramite Swisseldex. I dati vengono importati e sovrascritti automaticamente da parte di smart-me.

Dopo una tale sostituzione dei valori è necessario ricalcolare le tariffe virtuali a partire dalla data della sostituzione.
