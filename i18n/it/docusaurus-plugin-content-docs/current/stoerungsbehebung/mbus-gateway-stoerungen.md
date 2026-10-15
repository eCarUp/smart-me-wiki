---
title: 'Guasti del gateway M-Bus'
slug: '/stoerungsbehebung/mbus-gateway-stoerungen'
description: 'Questa pagina tratta gli errori più frequenti relativi al gateway M-Bus'
sidebar_label: 'Guasti del gateway M-Bus'
---
Questa pagina tratta gli errori più frequenti relativi al gateway M-Bus

## Il gateway non trova tutti i contatori

Molti contatori M-Bus ricevono l'alimentazione dal gateway. Il nostro gateway supporta 50 carichi standard. 

- Avvii ancora 1-2 volte una ricerca. È possibile che il contatore non risponda sempre alla prima ricerca.

- Verifichi che la somma dei carichi non superi 50.

- Linee troppo lunghe o troppo sottili causano perdite sulle linee.

- Non tutti i contatori M-Bus sono compatibili con il nostro gateway. L'elenco dei contatori compatibili si trova nella [pagina del prodotto gateway M-Bus](/produkte/m-bus-gateway)


## Il gateway trova più contatori di quelli installati (durante la messa in servizio)

Motivo: numerazione dei contatori combinati

Il gateway M-Bus riconosce un solo contatore per ogni indirizzo secondario, che di norma è riportato anche nel verbale di collaudo.

I contatori combinati vengono poi visualizzati separatamente nel portale. Per questa applicazione smart-me utilizza una propria logica di numerazione.

Tutti i contatori non rilevanti per il conteggio possono essere [disattivati](/konfiguration/inbetriebnahme/zaehler-loeschen) per risparmiare sui costi di licenza. L'eliminazione non è utile, poiché il contatore ricompare ogni volta.

Se un contatore contiene più di 1 contatore, questi vengono numerati come segue:

- Contatore principale = indirizzo secondario dall'elenco del gateway M-Bus (ad es. 71440145)

- Altri contatori = indirizzo secondario del contatore principale, la prima cifra viene eliminata (ad es. 7) e alla fine viene aggiunta una cifra progressiva (ad es. 14401451,14401452).

- Sottocontatori = contengono le ultime quattro cifre del contatore principale (ad es. 0145) e un numero progressivo a quattro cifre alla fine (ad es. 01450001)

![Guasti del gateway M-Bus – Figura 1](/img/stoerungsbehebung-mbus-gateway-stoerungen/01.png)

![Guasti del gateway M-Bus – Figura 2](/img/stoerungsbehebung-mbus-gateway-stoerungen/02.png)

## Il gateway trova più contatori di quelli installati (durante il funzionamento)

Una connessione instabile può causare una trasmissione errata del numero di serie. 

- -   Soluzione 1: questi contatori possono essere disattivati, in modo da evitare che occupino una licenza.

    - Soluzione 2: impedire il rilevamento di nuovi dispositivi


Come si impedisce il rilevamento di nuovi dispositivi

- Selezionare il gateway M-Bus.


- Selezioni la rotella dentata del gateway M-Bus (in alto a destra). Nota: non selezioni la rotella dentata superiore, utilizzata per la configurazione dei contatori, ma quella inferiore.

- Modifica (Bearbeiten)

- Spuntare "Don't allow to add additional meters".

- Salva (Speichern)


Che effetto ha questa opzione?

- Attivando l'opzione "Don't allow to add additional meters" si impedisce che vengano salvati dispositivi non ancora presenti nel cloud. 


A cosa bisogna prestare attenzione?

- Se si aggiungono nuovi dispositivi, questa opzione deve essere nuovamente disattivata prima della ricerca.


Quando è consigliata questa opzione?

- Quando nel portale compaiono ripetutamente dispositivi M-Bus che in realtà non esistono.

- Per motivi preventivi :-)


In quali casi può succedere?

- In caso di errori nella trasmissione dei dati. Ciò accade più spesso quando il cavo M-Bus è troppo lungo e la qualità della trasmissione dei dati si riduce, oppure quando il cavo è schermato in modo insufficiente o esposto a disturbi esterni.


Spiegazione tecnica

- Il protocollo M-Bus standardizzato dispone di un solo byte per la somma di controllo. La somma di controllo serve a riconoscere determinati errori nella trasmissione dei dati. Purtroppo 1 byte è poco e può portare ripetutamente a considerare corretto e valido un pacchetto di dati errato. In alcune installazioni con gateway M-Bus ciò fa sì che pacchetti corrotti vengano classificati come corretti e validi e vengano quindi riconosciuti e aggiunti al nostro cloud come nuovo dispositivo M-Bus. L'account passa quindi da Professional a Basic, poiché la copertura delle licenze non è più garantita.


![Guasti del gateway M-Bus – Figura 3](/img/stoerungsbehebung-mbus-gateway-stoerungen/03.png)

## Il contatore M-Bus è offline

- I contatori si disconnettono in modo irregolare e non sono sempre gli stessi contatori.

    - I contatori impiegano circa 10 secondi per rispondere. Se l'intervallo di lettura è impostato troppo breve, non hanno la possibilità di farlo. 

        - Soluzione: sul gateway M-Bus è possibile aumentare l'intervallo di lettura. Si consigliano 10 secondi per dispositivo.




- I contatori perdono la connessione sempre alla stessa ora del giorno (ora e minuto). 

    - In questo caso è possibile che i contatori siano alimentati a batteria e che, per preservare la batteria, consentano solo un determinato numero di letture al giorno. 

        - Soluzione: in questo caso l'intervallo di lettura può essere aumentato a 6 o 12 ore.




- I contatori si disconnettono in modo irregolare e si tratta per lo più degli stessi contatori.

    - Disturbi esterni sulle linee, soprattutto su linee più lunghe, possono causare trasmissioni errate.

        - Soluzione: mantenere corto il cablaggio dei contatori.


## I valori del contatore non corrispondono al contatore fisico

- Verifichi la configurazione del contatore.

- Controlli il cablaggio tra contatore e gateway.

- Non tutti i contatori M-Bus sono compatibili con il nostro gateway. L'elenco dei contatori compatibili si trova nella [pagina del prodotto gateway M-Bus](/produkte/m-bus-gateway)


## Sostituire il gateway M-Bus

- Installare il nuovo gateway M-Bus e collegare il cablaggio al nuovo gateway.

- Mettere in servizio l'M-Bus.

- Impostare l'intervallo di lettura nel portale.

- Cercare i dispositivi.

- Verificare che tutti i contatori M-Bus abbiano fornito valori aggiornati.


Nota: nella configurazione smart-me e nel Billing non è necessario modificare nulla nei contatori M-Bus esistenti.
