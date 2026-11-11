---
title: 'Guasti del gateway M-Bus'
slug: '/stoerungsbehebung/m-bus-gateway-stoerungen'
description: 'In questa pagina vengono trattati gli errori più frequenti relativi al gateway M-Bus'
sidebar_label: 'Guasti del gateway M-Bus'
---
In questa pagina vengono trattati gli errori più frequenti relativi al gateway M-Bus

<details id="nicht-alle-zaehler-gefunden">
<summary>Il gateway non trova tutti i contatori</summary>

Molti contatori M-Bus vengono alimentati dal gateway. Il nostro gateway supporta 50 carichi standard. 

- Avvia ancora 1-2 volte una ricerca. È possibile che il contatore non risponda sempre alla prima ricerca.

- Verifica che la somma dei carichi non superi 50.

- Linee troppo lunghe o contatori troppo sottili causano perdite sulle linee.

- Non tutti i contatori M-Bus sono compatibili con il nostro gateway. L'elenco dei contatori compatibili si trova nella [pagina prodotto del gateway M-Bus](/produkte/m-bus-gateway)

</details>

<details id="zu-viele-zaehler-inbetriebnahme">
<summary>Il gateway trova più contatori di quelli installati (durante la messa in servizio)</summary>

Motivo: numerazione dei contatori combinati

Il gateway M-Bus riconosce ogni volta un solo contatore in base all'indirizzo secondario, che di norma è riportato anche nel verbale di collaudo.

I contatori combinati vengono poi visualizzati separatamente sul portale. Per questa applicazione smart-me utilizza una propria logica di numerazione.

Tutti i contatori non rilevanti per il conteggio possono essere [disattivati](/konfiguration/inbetriebnahme/zaehler-loeschen) per risparmiare sui costi di licenza. L'eliminazione non è efficace, poiché il contatore ricompare sempre.

Se un contatore contiene più di 1 contatore, questi vengono numerati come segue:

- Contatore principale = indirizzo secondario dall'elenco del gateway M-Bus (ad es. 71440145)

- Altri contatori = indirizzo secondario del contatore principale, la prima cifra viene eliminata (ad es. 7) e alla fine viene aggiunto un numero progressivo (ad es. 14401451,14401452).

- Sottocontatori = contengono le ultime quattro cifre del contatore principale (ad es. 0145) e un numero progressivo a quattro cifre alla fine (ad es. 01450001)

![Guasti del gateway M-Bus – Figura 1](/img/stoerungsbehebung-m-bus-gateway-stoerungen/01.png)

![Guasti del gateway M-Bus – Figura 2](/img/stoerungsbehebung-m-bus-gateway-stoerungen/02.png)

</details>

<details id="zu-viele-zaehler-betrieb">
<summary>Il gateway trova più contatori di quelli installati (durante il funzionamento)</summary>

Una connessione instabile può causare una trasmissione errata del numero di serie. 

- -   Soluzione 1: questi contatori possono essere disattivati, in modo da evitare che occupino una licenza.

    - Soluzione 2: impedire il riconoscimento di nuovi dispositivi


Come si impedisce il riconoscimento di nuovi dispositivi

- Seleziona il gateway M-Bus.


- Seleziona l'ingranaggio del gateway M-Bus (in alto a destra). Nota: non selezionare l'ingranaggio superiore, che serve per la configurazione dei contatori, ma quello inferiore.

- Modifica (Bearbeiten)

- Spunta la casella "Don't allow to add additional meters".

- Salva (Speichern)


Che effetto ha questa opzione?

- Attivando l'opzione "Don't allow to add additional meters" si impedisce che vengano salvati dispositivi non ancora presenti nel cloud. 


A cosa bisogna prestare attenzione?

- Se si aggiungono nuovi dispositivi, questa opzione deve essere nuovamente disattivata prima della ricerca.


Quando è consigliata questa opzione?

- Quando nel portale compaiono ripetutamente dispositivi M-Bus che in realtà non esistono.

- Per motivi preventivi :-)


In quali casi può succedere?

- In caso di errori nella trasmissione dei dati. Ciò accade più spesso quando il cavo M-Bus è troppo lungo e la qualità della trasmissione dei dati diminuisce, oppure quando il cavo è schermato in modo insufficiente o esposto a disturbi esterni.


Spiegazione tecnica

- Il protocollo standardizzato M-Bus dispone di solo 1 byte per la somma di controllo. La somma di controllo serve a rilevare determinati errori nella trasmissione dei dati. Purtroppo 1 byte è poco e può portare ripetutamente a considerare corretto e valido un pacchetto di dati errato. In alcune installazioni in cui vengono impiegati gateway M-Bus, ciò fa sì che pacchetti corrotti vengano classificati come corretti e validi e vengano poi riconosciuti e aggiunti nel nostro cloud come nuovo dispositivo M-Bus. L'account passa quindi da Professional a Basic, poiché la copertura delle licenze non è più garantita.


![Guasti del gateway M-Bus – Figura 3](/img/stoerungsbehebung-m-bus-gateway-stoerungen/03.png)

</details>

<details id="zaehler-offline">
<summary>Il contatore M-Bus è offline</summary>

- I contatori si disconnettono in modo irregolare, non sono sempre gli stessi contatori.

    - I contatori impiegano circa 10 secondi per rispondere. Se l'intervallo di lettura è impostato troppo breve, non hanno la possibilità di farlo. 

        - Soluzione: sul gateway M-Bus è possibile aumentare l'intervallo di lettura. Si consigliano 10 secondi per dispositivo.




- I contatori perdono la connessione sempre alla stessa ora del giorno (ora e minuto). 

    - In questo caso è possibile che i contatori siano alimentati a batteria e che, per preservare la batteria, consentano solo un determinato numero di letture al giorno. 

        - Soluzione: in questo caso l'intervallo di lettura può essere aumentato a 6 o 12 ore.




- I contatori si disconnettono in modo irregolare, sono prevalentemente gli stessi contatori.

    - Disturbi esterni sulle linee, soprattutto in caso di linee più lunghe, possono causare trasmissioni errate.

        - Soluzione: mantenere corto il cablaggio dei contatori.

</details>

<details id="werte-stimmen-nicht">
<summary>I valori del contatore non corrispondono a quelli del contatore fisico</summary>

- Verifica la configurazione del contatore.

- Controlla il cablaggio tra contatore e gateway.

- Non tutti i contatori M-Bus sono compatibili con il nostro gateway. L'elenco dei contatori compatibili si trova nella [pagina prodotto del gateway M-Bus](/produkte/m-bus-gateway)

</details>

<details id="gateway-austauschen">
<summary>Sostituire il gateway M-Bus</summary>

- Installare il nuovo gateway M-Bus e spostare il cablaggio sul nuovo gateway.

- Mettere in servizio l'M-Bus.

- Impostare l'intervallo di lettura sul portale.

- Cercare i dispositivi.

- Verificare che tutti i contatori M-Bus abbiano fornito valori aggiornati.


Nota: non è necessario modificare nulla nella configurazione smart-me e nel Billing per i contatori M-Bus esistenti.

</details>
