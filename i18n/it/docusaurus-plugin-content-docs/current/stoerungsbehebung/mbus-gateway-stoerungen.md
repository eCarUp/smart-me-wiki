---
title: 'Malfunzionamenti M-Bus Gateway'
slug: '/stoerungsbehebung/mbus-gateway-stoerungen'
description: 'Questa pagina tratta gli errori più frequenti relativi al M-Bus Gateway'
sidebar_label: 'Malfunzionamenti M-Bus Gateway'
---
Questa pagina tratta gli errori più frequenti relativi al M-Bus Gateway

## Il gateway non trova tutti i contatori

Molti contatori M-Bus ricevono la corrente dal gateway. Il nostro gateway supporta 50 carichi standard. 

- Avvia ancora 1-2 volte una ricerca. Può succedere che il contatore non si annunci sempre alla prima ricerca.

- Verifica che la somma dei carichi non superi 50.

- Linee troppo lunghe o contatori troppo sottili causano perdite sulle linee.

- Non tutti i contatori M-Bus sono compatibili con il nostro gateway. L'elenco dei contatori compatibili si trova sulla [pagina prodotto del M-Bus Gateway](/produkte/m-bus-gateway)


## Il gateway trova più contatori di quelli installati (durante la messa in servizio)

Motivo: numerazione dei contatori combinati

Il M-Bus Gateway riconosce ogni volta un solo contatore in base all'indirizzo secondario, che di norma è riportato anche sul verbale di collaudo.

I contatori combinati vengono poi visualizzati separatamente sul portale. Per questa applicazione smart-me utilizza una propria logica di numerazione.

Tutti i contatori non rilevanti per il conteggio possono essere [disattivati](/konfiguration/inbetriebnahme/zaehler-loeschen) per risparmiare sui costi di licenza. L'eliminazione non è utile, poiché il contatore ricompare sempre.

Se un contatore contiene più di 1 contatore, questi vengono numerati come segue:

- Contatore principale = indirizzo secondario dall'elenco del M-Bus Gateway (ad es. 71440145)

- Altri contatori = indirizzo secondario del contatore principale, la prima cifra viene eliminata (ad es. 7) e alla fine viene incrementato un numero (ad es. 14401451,14401452).


- Sottocontatori = contengono le ultime quattro cifre del contatore principale (ad es. 0145) e un numero progressivo a quattro cifre alla fine (ad es. 01450001)


![Malfunzionamenti M-Bus Gateway – Figura 1](/img/stoerungsbehebung-mbus-gateway-stoerungen/01.png)

![Malfunzionamenti M-Bus Gateway – Figura 2](/img/stoerungsbehebung-mbus-gateway-stoerungen/02.png)

## Il gateway trova più contatori di quelli installati (durante il funzionamento)

Una connessione instabile può causare una trasmissione errata del numero di serie. 

- -   Soluzione 1: questi contatori possono essere disattivati, in modo da evitare che occupino una licenza.

    - Soluzione 2: impedire il riconoscimento di nuovi dispositivi


Come si impedisce il riconoscimento di nuovi dispositivi

- Seleziona il M-Bus Gateway.


- Seleziona la rotella dentata del M-Bus Gateway (in alto a destra). Nota: non selezionare la rotella dentata superiore, che serve per la configurazione dei contatori, ma quella inferiore.

- Modifica (Bearbeiten)

- Spunta la casella "Don't allow to add additional meters".

- Salva (Speichern)


Cosa fa questa opzione?

- Attivando l'opzione "Don't allow to add additional meters" si impedisce che vengano salvati dispositivi non ancora presenti nel cloud. 


A cosa bisogna prestare attenzione?

- Se vengono aggiunti nuovi dispositivi, questa opzione deve essere nuovamente disattivata prima della ricerca.


Quando è consigliata questa opzione?

- Quando nel portale compaiono ripetutamente dispositivi M-Bus che in realtà non esistono.

- Per motivi preventivi :-)


In quali casi può succedere?

- In caso di errori nella trasmissione dei dati. Ciò accade più spesso quando il cavo M-Bus è troppo lungo e la qualità della trasmissione dei dati quindi diminuisce, oppure quando il cavo è schermato male o esposto a disturbi esterni.


Spiegazione tecnica

- Il protocollo M-Bus standardizzato dispone di solo 1 byte per la somma di controllo. La somma di controllo serve a riconoscere determinati errori nella trasmissione dei dati. Purtroppo 1 byte è poco e può portare ripetutamente a considerare corretto e valido un pacchetto di dati errato. In alcune installazioni in cui vengono impiegati M-Bus Gateway, ciò fa sì che pacchetti corrotti vengano classificati come corretti e validi e quindi riconosciuti e aggiunti come nuovo dispositivo M-Bus nel nostro cloud. L'account passa quindi da Professional a Basic, poiché la copertura delle licenze non è più garantita.


![Malfunzionamenti M-Bus Gateway – Figura 3](/img/stoerungsbehebung-mbus-gateway-stoerungen/03.png)

## Il contatore M-Bus è offline

- I contatori si disconnettono in modo irregolare, e non sono sempre gli stessi contatori.

    - I contatori impiegano circa 10 secondi per rispondere. Se l'intervallo di lettura è impostato troppo breve, non hanno la possibilità di farlo. 

        - Soluzione: sul M-Bus Gateway è possibile aumentare l'intervallo di lettura. Si consigliano 10 secondi per dispositivo.




- I contatori perdono la connessione sempre alla stessa ora del giorno (ora e minuto). 

    - In questo caso può darsi che i contatori siano alimentati a batteria e, per preservare la batteria, consentano solo un determinato numero di letture al giorno. 

        - Soluzione: in questo caso l'intervallo di lettura può essere aumentato a 6 o 12 ore.




- I contatori si disconnettono in modo irregolare, e sono per lo più gli stessi contatori.

    - Disturbi esterni sulle linee, soprattutto in caso di linee lunghe, possono causare trasmissioni errate.

        - Soluzione: mantenere corto il cablaggio dei contatori.


## I valori del contatore non corrispondono al contatore fisico

- Verifica la configurazione del contatore.

- Controlla il cablaggio tra contatore e gateway.

- Non tutti i contatori M-Bus sono compatibili con il nostro gateway. L'elenco dei contatori compatibili si trova sulla [pagina prodotto del M-Bus Gateway](/produkte/m-bus-gateway)


## Sostituire il M-Bus Gateway

- Installare il nuovo M-Bus Gateway e collegare il cablaggio al nuovo gateway.

- Mettere in servizio il M-Bus.

- Impostare l'intervallo di lettura sul portale.

- Cercare i dispositivi.

- Verificare che tutti i contatori M-Bus abbiano fornito valori aggiornati.


Nota: non è necessario modificare nulla dei contatori M-Bus esistenti nella configurazione smart-me e nel Billing.
