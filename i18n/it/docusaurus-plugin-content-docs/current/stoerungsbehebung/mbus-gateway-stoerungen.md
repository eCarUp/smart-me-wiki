---
title: 'Guasti del M-Bus Gateway'
slug: '/stoerungsbehebung/mbus-gateway-stoerungen'
description: 'Questa pagina tratta gli errori più frequenti relativi al M-Bus Gateway'
sidebar_label: 'Guasti del M-Bus Gateway'
---
Questa pagina tratta gli errori più frequenti relativi al M-Bus Gateway

## Il gateway non trova tutti i contatori

Molti contatori M-Bus ricevono l'alimentazione dal gateway. Il nostro gateway supporta 50 carichi standard. 

- Avvia ancora 1-2 volte una ricerca. Può succedere che il contatore non risponda sempre alla prima ricerca.

- Verifica che la somma dei carichi non superi 50.

- Linee troppo lunghe o contatori con cavi troppo sottili causano perdite sulle linee.

- Non tutti i contatori M-Bus sono compatibili con il nostro gateway. L'elenco dei contatori compatibili è disponibile sulla [pagina prodotto del M-Bus Gateway](/produkte/m-bus-gateway)


## Il gateway trova più contatori di quelli installati (durante la messa in servizio)

Motivo: numerazione dei contatori combinati

Il M-Bus Gateway riconosce ogni volta un solo contatore in base all'indirizzo secondario, che di norma è riportato anche nel verbale di collaudo.

I contatori combinati vengono poi visualizzati separatamente sul portale. Per questa applicazione smart-me utilizza una propria logica di numerazione.

Tutti i contatori non rilevanti per il conteggio possono essere [disattivati](/konfiguration/inbetriebnahme/zaehler-loeschen) per risparmiare sui costi di licenza. Eliminarli non serve, perché il contatore ricompare ogni volta.

Se un contatore contiene più di 1 contatore, questi vengono numerati come segue:

- Contatore principale = indirizzo secondario dall'elenco del M-Bus Gateway (ad es. 71440145)

- Altri contatori = indirizzo secondario del contatore principale, la prima cifra viene eliminata (ad es. 7) e alla fine viene aggiunto un numero progressivo (ad es. 14401451,14401452).

- Sottocontatori = contengono le ultime quattro cifre del contatore principale (ad es. 0145) e un numero progressivo di quattro cifre alla fine (ad es. 01450001)

![Guasti del M-Bus Gateway – Figura 1](/img/stoerungsbehebung-mbus-gateway-stoerungen/01.png)

![Guasti del M-Bus Gateway – Figura 2](/img/stoerungsbehebung-mbus-gateway-stoerungen/02.png)

## Il gateway trova più contatori di quelli installati (durante il funzionamento)

Una connessione instabile può causare una trasmissione errata del numero di serie. 

- -   Soluzione 1: questi contatori possono essere disattivati, in modo da evitare che utilizzino una licenza.

    - Soluzione 2: impedire il rilevamento di nuovi dispositivi


Come impedire il rilevamento di nuovi dispositivi

- Seleziona il M-Bus Gateway.


- Seleziona la rotella dentata del M-Bus Gateway (in alto a destra). Nota: non selezionare la rotella dentata superiore, che serve per la configurazione dei contatori, ma quella inferiore.

- Modifica (Bearbeiten)

- Spunta la casella "Don't allow to add additional meters".

- Salva (Speichern)


Che effetto ha questa opzione?

- Attivando l'opzione "Don't allow to add additional meters" si impedisce che vengano salvati dispositivi non ancora presenti nel cloud. 


Cosa bisogna tenere presente?

- Se vengono aggiunti nuovi dispositivi, questa opzione deve essere nuovamente disattivata prima della ricerca.


Quando è consigliata questa opzione?

- Quando nel portale compaiono ripetutamente dispositivi M-Bus che in realtà non esistono.

- Per motivi preventivi :-)


In quali casi può succedere?

- In caso di errori nella trasmissione dei dati. Ciò accade più spesso quando il cavo M-Bus è troppo lungo e la qualità della trasmissione dei dati diminuisce, oppure quando il cavo è schermato in modo insufficiente o esposto a disturbi esterni.


Spiegazione tecnica

- Il protocollo standardizzato M-Bus dispone di un solo byte per la somma di controllo. La somma di controllo serve a rilevare determinati errori nella trasmissione dei dati. Purtroppo 1 byte è poco e può ripetutamente far sì che un pacchetto di dati errato venga considerato corretto e valido. In alcune installazioni in cui vengono impiegati M-Bus Gateway, questo porta ripetutamente a classificare come corretti e validi dei pacchetti corrotti, che vengono poi riconosciuti e aggiunti nel nostro cloud come nuovo dispositivo M-Bus. Il conto passa quindi da Professional a Basic, poiché la copertura delle licenze non è più garantita.


![Guasti del M-Bus Gateway – Figura 3](/img/stoerungsbehebung-mbus-gateway-stoerungen/03.png)

## Il contatore M-Bus è offline

- I contatori si disconnettono in modo irregolare, non sono sempre gli stessi contatori.

    - I contatori hanno bisogno di circa 10 secondi per rispondere. Se l'intervallo di lettura è impostato troppo basso, non hanno la possibilità di farlo. 

        - Soluzione: sul M-Bus Gateway è possibile aumentare l'intervallo di lettura. Si consigliano 10 secondi per dispositivo.




- I contatori perdono la connessione sempre alla stessa ora del giorno (ora e minuto). 

    - In questo caso può darsi che i contatori siano alimentati a batteria e, per preservare la batteria, consentano solo un determinato numero di letture al giorno. 

        - Soluzione: in questo caso l'intervallo di lettura può essere aumentato a 6 o 12 ore.




- I contatori si disconnettono in modo irregolare, si tratta per lo più degli stessi contatori.

    - Disturbi esterni sulle linee, soprattutto con linee più lunghe, possono causare trasmissioni errate.

        - Soluzione: mantenere corto il cablaggio dei contatori.


## I valori del contatore non corrispondono al contatore fisico

- Verifica la configurazione del contatore.

- Controlla il cablaggio tra contatore e gateway.

- Non tutti i contatori M-Bus sono compatibili con il nostro gateway. L'elenco dei contatori compatibili è disponibile sulla [pagina prodotto del M-Bus Gateway](/produkte/m-bus-gateway)


## Sostituire il M-Bus Gateway

- Installare il nuovo M-Bus Gateway e collegare il cablaggio al nuovo gateway.

- Mettere in servizio il M-Bus.

- Impostare l'intervallo di lettura sul portale.

- Cercare i dispositivi.

- Verificare che tutti i contatori M-Bus abbiano fornito valori aggiornati.


Nota: nella configurazione smart-me e nel Billing non è necessario modificare nulla per i contatori M-Bus esistenti.
