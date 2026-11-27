---
title: 'Modulo Kamstrup'
slug: '/produkte/kamstrup-modul'
description: 'Modulo smart-me per l''interfaccia cliente del contatore Kamstrup Omnipower.'
sidebar_label: 'Modulo Kamstrup'
displayed_sidebar: wikiSidebar
---
Modulo smart-me per l'interfaccia cliente del contatore Kamstrup Omnipower.

Il modulo Kamstrup di smart-me porta i contatori elettrici nel cloud. I tuoi clienti ottengono analisi accurate, visualizzazioni e un monitoraggio preciso del proprio consumo di energia. Non è necessario alcun hardware aggiuntivo. Il modulo Kamstrup di smart-me utilizza la rete WiFi esistente e si collega direttamente al cloud smart-me.

Informazione sulla dismissione in Svizzera inviata l'08.08.2023 (rete di partner).

La vendita in Svizzera viene interrotta al 31.12.2023; il supporto e il supporto cloud restano garantiti.

La vendita al di fuori della Svizzera è stata interrotta l'1.1.2023; il supporto e il supporto cloud restano garantiti.

![Modulo Kamstrup – Figura 1](/img/produkte-kamstrup-modul/01.jpg)

## Sequenze LED del modulo Kamstrup con descrizione degli errori

La maggior parte delle cause di errore durante l'installazione di un modulo Kamstrup può essere individuata tramite la sequenza dei LED:

Capitoli

[00:06](https://www.youtube.com/watch?v=CwS65mPsTws&t=6s) I LED non si accendono

[00:18](https://www.youtube.com/watch?v=CwS65mPsTws&t=18s) La rete WLAN non viene creata

[00:59](https://www.youtube.com/watch?v=CwS65mPsTws&t=59s) LED lampeggiante rapido

[01:14](https://www.youtube.com/watch?v=CwS65mPsTws&t=74s) LED a luce scorrevole

<Embed src="https://player.vimeo.com/video/688374505" aspect="1.601" title="Wiki smart-me IT - Modulo Kamstrup" />

## Funzioni

- Diversi diagrammi e analisi

- Aggiornamento del firmware online

- Datalogger integrato per un mese

- Utilizzabile come sensore per il comando di apparecchi

- Connessione WLAN crittografata direttamente al cloud smart-me

- Visualizzazione in tempo reale della potenza, della lettura del contatore, della tensione e della corrente nell'app e sul web. Senza licenza Pro l'intervallo di lettura è limitato a 60 secondi.

- Gestione completa dell'energia: fatturazione automatica, comando, ottimizzazione e allarmi

- [Installazione](/konfiguration/inbetriebnahme) semplice con l'app smart-me per [Android](https://play.google.com/store/apps/details?id=com.smart_me) e [iOS](https://apps.apple.com/ch/app/smart-me/id929146952?ign-mpt=uo%3D4)

- Modbus-TCP a partire dalla versione firmware 8.0 (Info: senza una connessione Internet continua il modulo non può nemmeno offrire una comunicazione Modbus stabile) 

### Come posso impostare il fattore di correzione nel cloud?

Per impostare il fattore di correzione di un modulo o di un contatore, procedi come segue:

1.  Accedi al portale smart-me 

2.  Clicca su configura (konfigurieren)

3.  Clicca su Configurazione di contatori e cartelle (Zähler/Ordner-Konfiguration)

4.  Seleziona il contatore corrispondente

5.  Clicca su Modifica nodo (Knoten editieren) (in alto sul pulsante verde)

6.  Inserisci il valore di correzione in Correzione valore (Wert Korrektur). (Attenzione: solo in Correzione valore (Wert Korrektur), non in Correzione valore cartella superiore (Überordner Wert Korrektur))

7.  Premi Salva (Speichern).

### Decrittazione del modulo Kamstrup

[Video tutorial](https://www.youtube.com/watch?v=bYoq9a142t8)

1.  In alto a destra sul simbolo dell'ingranaggio (Impostazioni (Einstellungen)) 

2.  Modifica (Editieren) 

3.  Inserire la chiave del contatore

Attenzione: il modulo Kamstrup necessita del PIN di crittografia del contatore per poter leggere i dati. Ne dispone esclusivamente il fornitore di energia.

### Come viene calcolato il fattore di correzione?

1.  Attenzione: questo testo non si riferisce al rapporto di trasformazione del Telstar CT, bensì al fattore di correzione nella configurazione di contatori e cartelle. Il fattore di correzione è necessario principalmente quando si utilizzano contatori Kamstrup in combinazione con trasformatori. 

2.  Esempio con trasformatore 600:5:
    Se si utilizza un trasformatore con un rapporto di 600:5, il valore deve essere adattato di un fattore 600 : 5 = 120. Il fattore di correzione deve essere indicato in percentuale nel cloud smart-me. Ne risulta quindi un fattore di correzione di 120 \* 100 % = 12'000 %

3.  Esempio con trasformatore 600:5 e preimpostazione del contatore Kamstrup con 100:5:
    I contatori Kamstrup hanno in parte un rapporto di trasformazione preimpostato di 100:5. Se a questo contatore viene collegato un trasformatore con un rapporto di 600:5, il fattore di correzione si calcola come segue:
    Fattore di correzione del contatore Kamstrup: 100 : 5 = 20
    Fattore di correzione per il trasformatore: 600 : 5 = 120
    Fattore di correzione complessivo: 120 / 20 = 6
    Fattore di correzione complessivo in percentuale: 6 \* 100 % = 600 %
    In questo caso, nel portale smart-me andrebbe quindi impostato un fattore di correzione di 600 %. 

### Con quale frequenza vengono trasmessi i dati

Questo può essere impostato manualmente per ogni apparecchio. 

- L'intervallo può essere ridotto fino a 1 secondo.

L'impostazione avviene come segue

- Accesso

- Selezionare il contatore

- Ingranaggio in alto a destra

- Impostazioni generali (Allgemeine Einstellungen)

- Impostare l'intervallo di upload (&lt;60 secondi possibile solo con smart-me Professional)

- Salvare le impostazioni

## Contatore offline

- Il numero di serie inizia con 92\*: Kamstrup

Le informazioni generali si trovano alla pagina [Contatore offline](/stoerungsbehebung/zaehler-offline).

Le indicazioni specifiche del contatore si trovano qui.

### Riavviare il contatore

- Questa è solo un'informazione su come procedere.

- Procedura: rimuovere il modulo dal contatore. Attendere finché nessun LED è più acceso. Reinserire il modulo nel contatore.

### Come riconosco lo stato di ricezione di un contatore

- Connesso alla WLAN: il LED arancione a sinistra e il LED verde a destra sono accesi in modo fisso.

- Non riesce a connettersi alla WLAN: to be defined

- Il contatore crea una WLAN locale: il LED arancione a sinistra è acceso in modo fisso e. Il LED rosso al centro e il LED verde a destra si accendono alternativamente a intervalli di 0.5 secondi.

### Verifica all'arrivo

All'arrivo si possono verificare i seguenti punti. Se è già stato fatto qualcosa sul contatore, è importante non intervenire sul contatore per almeno 5 minuti. È anche possibile chiedere al cliente in loco un video del contatore (30 secondi) per valutare meglio la situazione.

- Verificare lo stato con il video: [https://www.youtube.com/watch?v=CwS65mPsTws](https://www.youtube.com/watch?v=CwS65mPsTws) oppure [https://vimeo.com/688374505](https://vimeo.com/688374505)

    - Capitolo: [00:06](https://www.youtube.com/watch?v=CwS65mPsTws&t=6s) I LED non si accendono

    - Capitolo: [00:18](https://www.youtube.com/watch?v=CwS65mPsTws&t=18s) La rete WLAN non viene creata

    - Capitolo: [00:59](https://www.youtube.com/watch?v=CwS65mPsTws&t=59s) LED lampeggiante rapido

    - Capitolo: [01:14](https://www.youtube.com/watch?v=CwS65mPsTws&t=74s) LED a luce scorrevole

## Modificare l'intervallo di upload

- Accedere al portale smart-me

- Selezionare il contatore

- In alto a destra selezionare l'ingranaggio

- Impostazioni generali (Allgemeine Einstellungen)

![Modulo Kamstrup – Figura 2](/img/produkte-kamstrup-modul/02.png)

## Prodotto successore

smart-me non offre alcun prodotto successore per i contatori Kamstrup. 

Se gestisci un RCP (raggruppamento ai fini del consumo proprio) smart-me (solo Svizzera) e hai bisogno di una nuova soluzione per la tua misurazione (ad es. HAK), puoi contattarci: ai nostri [partner di progetto](https://web.smart-me.com/projektpartner/) offriamo condizioni vantaggiose per la sostituzione. (Offerta speciale valida fino al 30.06.2025)

Se in ambito privato vengono effettuate misurazioni per monitoraggio, domotica ecc., è possibile installare in qualsiasi momento il [Telstar 80A](/produkte/telstar-80a) o il [Telstar CT](/produkte/telstar-ct). Se cerchi una soluzione con il tuo contatore Kamstrup esistente, ti consigliamo di dare un'occhiata a questa pagina. [https://whatwatt.ch/de](https://whatwatt.ch/de) oppure [https://gplug.ch/](https://gplug.ch/) (Riserva gPlug: per il modulo Kamstrup smart-me occorre considerare che viene utilizzata una funzione non documentata dell'interfaccia cliente (CII). Il gPlugK, invece, utilizza la CII pubblicamente documentata. Può quindi accadere che il gPlugK non funzioni su un Omnipower, sebbene il prodotto smart-me funzioni. Questo problema può essere risolto in parte con una modifica della configurazione remota da parte del gestore della rete di distribuzione.

## Chiave del contatore non valida (CKW)

Problema

- Il modulo Kamstrup è offline con il messaggio di errore Chiave del contatore non valida (Ungültiger Zähler Schlüssel)

Soluzione

La causa del problema è nota dal 14.5.2025 13:43: nel corso di una manutenzione di sistema di CKW sono state per errore rinnovate tutte le chiavi dei contatori Kamstrup e quelle precedenti sono diventate non valide.

Come soluzione devi inviare a CKW un'e-mail all'indirizzo [messtechnik@ckw.ch](mailto:messtechnik@ckw.ch) con il numero del contatore (vedi immagine in basso a destra). CKW ti invierà quindi una nuova chiave.

![Modulo Kamstrup – Figura 3](/img/produkte-kamstrup-modul/03.png)

![Modulo Kamstrup – Figura 4](/img/produkte-kamstrup-modul/04.png)

## Download

Scheda tecnica

[Inglese](https://docs.google.com/presentation/d/1MZwOPzxvFGYc0ABwUGkdSa5Ay1NUlRRAXrMTlrBY5lw/export/pdf)

Documenti tecnici

[Quick Starter Guide](https://drive.google.com/uc?export=download&id=1Iq9COF5y0LsKc1fSISNs2xG5KVEqlIMw)

## FAQ

<details id="in-welchem-intervall-senden-die-zähler-daten">
<summary>A quale intervallo i contatori inviano i dati?</summary>

- Ogni 15 minuti, quindi alle xx:00:00, xx:15:00, xx:30:00 e xx:45:00. In questo modo vengono inviati i dati necessari per la curva di carico. In caso di interruzione della connessione, questi dati vengono memorizzati localmente e inviati successivamente.

- In aggiunta è possibile effettuare una configurazione individuale:

    - Con licenze Basic o Limited: max. 1 volta al minuto.

    - Con licenza Pro: max. 1 volta al secondo

</details>
