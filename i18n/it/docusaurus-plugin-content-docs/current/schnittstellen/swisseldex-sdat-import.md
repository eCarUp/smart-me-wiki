---
title: 'Importazione VZEV-Swisseldex (SDAT)'
slug: '/schnittstellen/swisseldex-sdat-import'
description: 'Per utilizzare l''importazione ti serve un abbonamento smart-me Professional per ogni punto di misura.'
sidebar_label: 'Importazione VZEV-Swisseldex (SDAT)'
---
<Menueweg>Interfacce → Importazione da Swisseldex</Menueweg>

### Requisito

Per utilizzare l'importazione ti serve un abbonamento smart-me Professional per ogni punto di misura. 

## Esportazione dei dati da parte del fornitore di energia

Il fornitore di energia invia i dati al server swisseldex, dove smart-me può poi elaborarli.

Dati generali del destinatario smart-me sul server swisseldex.

- Indirizzo e-mail di contatto: [support@smart-me.com](mailto:support@smart-me.com)

- Numero di telefono di contatto: +41 41 511 09 70

- Lingua: tedesco

- Ruolo: Fornitore

    - Nome: ST\_SMART\_ME

    - EIC: 12X-00000020BN-B

    - È sufficiente per l'invio dei dati se il partner Datahub registrato che ci invia i dati dispone di una licenza.

- Ruolo: Consumatore finale 

    - Nome: CO\_SMART\_ME

    - EIC: 12X-00000020BN-B

    - È necessario per l'invio dei dati se il partner Datahub registrato che ci invia i dati non dispone di una licenza. Il partner di mercato registrato con il ruolo di gestore della rete di distribuzione deve compilare il relativo modulo di swissldex: [Laufblatt\_Kommunikationspartner kopie von smart-me 10.04.2025](https://drive.google.com/uc?export=download&id=1shPYq-W8ziGMPIbz4d43oensDkoSjLRb) 

- Se è possibile scegliere un formato di dati, occorre scegliere Ebix. Attualmente smart-me supporta solo il formato Ebix per l'importazione


## Configurare l'importazione nell'account di destinazione

1.  La richiesta e l'autorizzazione dei punti di misura rilevanti devono essere inoltrate al fornitore di energia. Questi vengono poi messi a disposizione di smart-me AG su Swisseldex.
    Il fornitore di energia trasmette il punto di misura con il suo ID univoco. L'ID è composto dal codice CH e da un numero di 33 cifre.

    Esempio: CH637482974368378932BKL7389576492

2.  Accedi al tuo account RCP virtuale (vRCP) o RCP (raggruppamento ai fini del consumo proprio) su [www.smart-me.com](http://www.smart-me.com).

3.  Apri l'area di importazione del tuo account vRCP o RCP tramite [https://ftp.portal.smart-me.com/](https://ftp.portal.smart-me.com/).

4.  Accetta le autorizzazioni di accesso

5.  Vai all'area Punti di misura (Messpunkte)

6.  Aggiungi come punti di misura tutti i numeri CH che ti sono stati comunicati.

7.  Dopo la prima importazione dei dati dei punti di misura, questi sono visibili nella [configurazione dei contatori](/konfiguration/ordnerkonfiguration) e puoi aggiungerli alla struttura.


![Importazione VZEV-Swisseldex (SDAT) – Figura 1](/img/schnittstellen-swisseldex-sdat-import/01.png)

![Importazione VZEV-Swisseldex (SDAT) – Figura 2](/img/schnittstellen-swisseldex-sdat-import/02.png)

## Funzionamento dell'elaborazione e della sostituzione dei dati

### Caricamento dei dati e calcolo delle tariffe

Non appena disponibili, i dati importati tramite Swisseldex vengono importati automaticamente in smart-me nel numero del punto di misura (contatore) corrispondente.

Il calcolo delle tariffe virtuali avviene in modo automatico e continuativo non appena sono disponibili i dati di tutti i punti di misura rilevanti per la tariffazione del RCP o del vRCP.

### Sostituzione dei valori

Per sostituire dati errati è sufficiente caricare nuovamente il file di importazione tramite Swisseldex. smart-me importa e sovrascrive automaticamente i dati.

Dopo una tale sostituzione dei valori è necessario ricalcolare le tariffe virtuali a partire dalla data della sostituzione.
