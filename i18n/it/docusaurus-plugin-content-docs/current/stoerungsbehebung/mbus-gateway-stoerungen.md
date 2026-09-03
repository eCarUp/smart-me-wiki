---
title: 'Guasti del gateway M-Bus'
slug: '/stoerungsbehebung/mbus-gateway-stoerungen'
description: 'Questa pagina illustra gli errori più frequenti relativi al gateway M-Bus'
sidebar_label: 'Guasti del gateway M-Bus'
---
Questa pagina illustra gli errori più frequenti relativi al gateway M-Bus

## Il gateway non trova tutti i contatori

Molti contatori M-Bus vengono alimentati dal gateway. Il nostro gateway supporta 50 carichi standard.

- Avvia ancora 1-2 volte una procedura di ricerca. Può accadere che il contatore non si annunci già alla prima ricerca.

- Verifica che la somma dei carichi non superi 50.

- Linee troppo lunghe, ovvero contatori troppo sottili, causano perdite sulle linee.

- Non tutti i contatori M-Bus sono compatibili con il nostro gateway. L'elenco dei contatori compatibili si trova sulla [pagina di prodotto del gateway M-Bus](/produkte/m-bus-gateway)


## Il gateway trova più contatori di quelli installati (durante la messa in servizio)

Motivo: numerazione dei contatori combinati

Il gateway M-Bus riconosce solo un contatore per volta sulla base dell'indirizzo secondario, che di norma è riportato anche sul protocollo di collaudo.

I contatori combinati vengono poi visualizzati separatamente sul portale. Per questa applicazione smart-me utilizza una propria logica di numerazione.

Tutti i contatori non rilevanti per il conteggio possono essere [disattivati](/konfiguration/inbetriebnahme/zaehler-loeschen) per risparmiare sui costi di licenza. L'eliminazione non porta al risultato desiderato, poiché il contatore ricompare sempre.

Se un contatore contiene più di 1 contatore, questi vengono numerati come segue:

- Contatore principale = indirizzo secondario dall'elenco del gateway M-Bus (ad es. 71440145)

- Ulteriori contatori = indirizzo secondario del contatore principale, la prima cifra viene eliminata (ad es. 7) e alla fine viene incrementata una cifra (ad es. 14401451,14401452).


- Sottocontatori = contengono le ultime quattro cifre del contatore principale (ad es. 0145) e un numero progressivo a quattro cifre alla fine (ad es. 01450001)


![Guasti del gateway M-Bus – Figura 1](/img/stoerungsbehebung-mbus-gateway-stoerungen/01.png)

![Guasti del gateway M-Bus – Figura 2](/img/stoerungsbehebung-mbus-gateway-stoerungen/02.png)

## Il gateway trova più contatori di quelli installati (durante il funzionamento)

Una connessione instabile può causare una trasmissione errata del numero di serie.

- -   Soluzione 1: questi contatori possono essere disattivati, in modo da impedire che occupino una licenza.

    - Soluzione 2: impedire il rilevamento di nuovi dispositivi


Come si impedisce il rilevamento di nuovi dispositivi

- Seleziona il gateway M-Bus.


- Seleziona l'ingranaggio del gateway M-Bus (in alto a destra). Nota: non selezionare l'ingranaggio superiore, che serve per la configurazione dei contatori, bensì quello inferiore.

- Modifica (Bearbeiten)

- Attiva il segno di spunta su "Don't allow to add additional meters".

- Salva (Speichern)


Che effetto ha questa opzione?

- Attivando l'opzione "Don't allow to add additional meters" si impedisce il salvataggio di dispositivi non ancora presenti nel cloud.


A cosa bisogna prestare attenzione?

- Se vengono aggiunti nuovi dispositivi, questa opzione deve essere disattivata di nuovo prima della ricerca.


Quando è consigliata questa opzione?

- Quando nel portale compaiono continuamente dispositivi M-Bus che non esistono affatto.

- Per motivi preventivi :-)


In quali casi può accadere?

- In caso di errori nella trasmissione dei dati. Questo si verifica più frequentemente quando il cavo M-Bus è troppo lungo e di conseguenza la qualità della trasmissione dei dati diminuisce, oppure quando il cavo è schermato in modo insufficiente o esposto a disturbi esterni.


Spiegazione tecnica

- Il protocollo M-Bus standardizzato dispone di 1 solo byte per la somma di controllo. La somma di controllo serve a riconoscere determinati errori nella trasmissione dei dati. Purtroppo 1 byte è poco e può portare ripetutamente a considerare corretto e valido un pacchetto di dati errato. In alcune installazioni in cui vengono impiegati gateway M-Bus, questo comporta ripetutamente che pacchetti corrotti vengano classificati come corretti e validi e che vengano poi riconosciuti e aggiunti come nuovo dispositivo M-Bus nel nostro cloud. L'account passa allora da Professional a Basic, poiché la copertura delle licenze non è più garantita.


![Guasti del gateway M-Bus – Figura 3](/img/stoerungsbehebung-mbus-gateway-stoerungen/03.png)

## Il contatore M-Bus è offline

- I contatori si guastano in modo irregolare, non sono sempre gli stessi contatori.

    - I contatori necessitano di circa 10 secondi per rispondere. Se l'intervallo di lettura è impostato troppo breve, non hanno la possibilità di farlo.

        - Soluzione: sul gateway M-Bus è possibile aumentare l'intervallo di lettura. Si raccomandano 10 secondi per dispositivo.




- I contatori perdono la connessione sempre alla stessa ora del giorno (ora e minuto).

    - In questo caso può essere che i contatori siano alimentati a batteria e, per preservare la batteria, consentano solo un determinato numero di letture al giorno.

        - Soluzione: qui l'intervallo di lettura può essere aumentato a 6 o 12 ore.




- I contatori si guastano in modo irregolare, si tratta prevalentemente degli stessi contatori.

    - Disturbi esterni sulle linee, soprattutto in caso di linee più lunghe, possono causare trasmissioni errate.

        - Soluzione: mantenere corto il cablaggio dei contatori.


## I valori del contatore non corrispondono al contatore fisico

- Verifica la configurazione del contatore.

- Controlla il cablaggio tra contatore e gateway.

- Non tutti i contatori M-Bus sono compatibili con il nostro gateway. L'elenco dei contatori compatibili si trova sulla [pagina di prodotto del gateway M-Bus](/produkte/m-bus-gateway)


## Sostituire il gateway M-Bus

- Installare il nuovo gateway M-Bus e collegare il cablaggio al nuovo gateway.

- Mettere in servizio l'M-Bus.

- Impostare l'intervallo di lettura sul portale.

- Cercare i dispositivi.

- Verificare che tutti i contatori M-Bus abbiano fornito valori aggiornati.


Nota: nella configurazione smart-me e nel Billing non è necessario modificare nulla sui contatori M-Bus esistenti.
