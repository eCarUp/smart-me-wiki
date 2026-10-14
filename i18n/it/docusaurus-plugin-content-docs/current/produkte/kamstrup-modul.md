---
title: 'Modulo Kamstrup'
slug: '/produkte/kamstrup-modul'
description: 'Modulo smart-me per l''interfaccia cliente del contatore Kamstrup Omnipower.'
sidebar_label: 'Modulo Kamstrup'
displayed_sidebar: wikiSidebar
---
Modulo smart-me per l'interfaccia cliente del contatore Kamstrup Omnipower.

Il modulo Kamstrup di smart-me porta i contatori elettrici nel cloud. I Suoi clienti ottengono analisi accurate, visualizzazioni e un monitoraggio preciso del proprio consumo di energia. Non è necessario hardware aggiuntivo. Il modulo Kamstrup di smart-me utilizza la rete WiFi esistente e si collega direttamente allo smart-me Cloud.

Informazione sulla dismissione in Svizzera inviata l'08.08.2023 (rete dei partner).

La vendita in Svizzera viene sospesa al 31.12.2023; il supporto e l'assistenza cloud restano garantiti.

La vendita al di fuori della Svizzera è stata sospesa l'1.1.2023; il supporto e l'assistenza cloud restano garantiti.

![Modulo Kamstrup – Figura 1](/img/produkte-kamstrup-modul/01.jpg)

## Sequenze LED del modulo Kamstrup con descrizione degli errori

La maggior parte delle cause di errore durante l'installazione di un modulo Kamstrup può essere individuata tramite la sequenza dei LED:

Capitoli

[00:06](https://www.youtube.com/watch?v=CwS65mPsTws&t=6s) I LED non si accendono

[00:18](https://www.youtube.com/watch?v=CwS65mPsTws&t=18s) La rete WLAN non viene creata

[00:59](https://www.youtube.com/watch?v=CwS65mPsTws&t=59s) LED lampeggiante veloce

[01:14](https://www.youtube.com/watch?v=CwS65mPsTws&t=74s) LED a luce scorrevole

<Embed src="https://player.vimeo.com/video/688374505" aspect="1.601" title="smart-me Wiki DE - Modulo Kamstrup" />

## Funzioni

- Diversi diagrammi e analisi

- Aggiornamento del firmware online

- Datalogger integrato per un mese

- Utilizzabile come sensore per il comando di apparecchi

- Connessione WLAN crittografata direttamente allo smart-me Cloud

- Visualizzazione in tempo reale della potenza, della lettura del contatore, della tensione e della corrente nell'app e sul web. Senza licenza Pro l'intervallo di lettura è limitato a 60 secondi.

- Gestione completa dell'energia: fatturazione automatica, comando, ottimizzazione e allarmi

- Semplice [installazione](/konfiguration/inbetriebnahme) con l'app smart-me per [Android](https://play.google.com/store/apps/details?id=com.smart_me) e [iOS](https://apps.apple.com/ch/app/smart-me/id929146952?ign-mpt=uo%3D4)

- Modbus-TCP a partire dalla versione firmware 8.0 (Info: senza una connessione Internet continua il modulo non può nemmeno offrire una comunicazione Modbus stabile)

### Come posso impostare il fattore di correzione nel cloud?

Per impostare il fattore di correzione di un modulo o di un contatore, proceda come segue:

1.  Acceda al portale smart-me

2.  Clicchi su Configura (konfigurieren)

3.  Clicchi su Configurazione contatore/cartella (Zähler/Ordner-Konfiguration)

4.  Selezioni il contatore corrispondente

5.  Clicchi su Modifica nodo (Knoten editieren) (pulsante verde in alto)

6.  Inserisca il valore di correzione in Correzione valore (Wert Korrektur). (Attenzione: solo in Correzione valore (Wert Korrektur), non in Correzione valore cartella superiore (Überordner Wert Korrektur))

7.  Prema Salva (Speichern).

### Decrittazione del modulo Kamstrup

[Video guida](https://www.youtube.com/watch?v=bYoq9a142t8)

1.  In alto a destra sul simbolo dell'ingranaggio (Impostazioni (Einstellungen))

2.  Modifica (Editieren)

3.  Inserire la chiave del contatore (Zählerschlüssel)

Attenzione: il modulo Kamstrup necessita del PIN di crittografia del contatore per poter leggere i dati. Ne dispone esclusivamente l'azienda elettrica.

### Come viene calcolato il fattore di correzione?

1.  Attenzione: questo testo non si riferisce al rapporto di trasformazione del Telstar CT, bensì al fattore di correzione nella configurazione contatore/cartella. Il fattore di correzione è necessario principalmente quando si utilizzano contatori Kamstrup in combinazione con trasformatori di corrente.

2.  Esempio con trasformatore di corrente 600:5:
    Se si utilizza un trasformatore di corrente con un rapporto di 600:5, il valore deve essere adattato di un fattore 600 : 5 = 120. Il fattore di correzione deve essere indicato in percentuale nello smart-me Cloud. Ne risulta quindi un fattore di correzione di 120 \* 100 % = 12'000 %

3.  Esempio con trasformatore di corrente 600:5 e preimpostazione del contatore Kamstrup a 100:5:
    I contatori Kamstrup hanno in parte un rapporto di trasformazione preimpostato di 100:5. Se a questo contatore viene collegato un trasformatore di corrente con un rapporto di 600:5, il fattore di correzione si calcola come segue:
    Fattore di correzione del contatore Kamstrup: 100 : 5 = 20
    Fattore di correzione per il trasformatore di corrente: 600 : 5 = 120
    Fattore di correzione complessivo: 120 / 20 = 6
    Fattore di correzione complessivo in percentuale: 6 \* 100 % = 600 %
    In questo caso occorre quindi impostare un fattore di correzione del 600 % nel portale smart-me.

### Con quale frequenza vengono trasmessi i dati

Questo può essere impostato manualmente per ogni dispositivo.

- L'intervallo può essere ridotto fino a 1 secondo.

L'impostazione avviene come segue

- Accesso

- Selezionare il contatore

- Ingranaggio in alto a destra

- Impostazioni generali (Allgemeine Einstellungen)

- Impostare l'intervallo di upload (Upload-Intervall) (&lt;60 secondi possibile solo con smart-me Professional)

- Salvare le impostazioni (Einstellungen speichern)

## Contatore offline

- Il numero di serie inizia con 92\*: Kamstrup

Le informazioni generali si trovano alla pagina [Contatore offline](/stoerungsbehebung/zaehler-offline).

Le indicazioni specifiche del contatore si trovano qui

### Riavviare il contatore

- Questa è solo un'informazione su come procedere.

- Procedura: rimuovere il modulo dal contatore. Attendere finché nessun LED è più acceso. Reinserire il modulo nel contatore.

### Come riconosco lo stato di ricezione di un contatore

- Connesso alla WLAN: il LED arancione a sinistra e il LED verde a destra sono accesi in modo permanente.

- Non riesce a connettersi alla WLAN: to be defined

- Il contatore crea una WLAN locale: il LED arancione a sinistra è acceso in modo permanente e. Il LED rosso al centro e il LED verde a destra si accendono alternativamente a intervalli di 0.5 secondi.

### Verifica all'arrivo

All'arrivo possono essere verificati i seguenti punti. Se sul contatore è già stato fatto qualcosa, è importante che per almeno 5 minuti non si intervenga sul contatore. È anche possibile chiedere al cliente sul posto un video del contatore (30 secondi) per valutare meglio la situazione.

- Verificare lo stato con il video: [https://www.youtube.com/watch?v=CwS65mPsTws](https://www.youtube.com/watch?v=CwS65mPsTws) oppure [https://vimeo.com/688374505](https://vimeo.com/688374505)

    - Capitolo: [00:06](https://www.youtube.com/watch?v=CwS65mPsTws&t=6s) I LED non si accendono

    - Capitolo: [00:18](https://www.youtube.com/watch?v=CwS65mPsTws&t=18s) La rete WLAN non viene creata

    - Capitolo: [00:59](https://www.youtube.com/watch?v=CwS65mPsTws&t=59s) LED lampeggiante veloce

    - Capitolo: [01:14](https://www.youtube.com/watch?v=CwS65mPsTws&t=74s) LED a luce scorrevole

## Modificare l'intervallo di upload

- Accedere al portale smart-me

- Selezionare il contatore

- Selezionare l'ingranaggio in alto a destra

- Impostazioni generali (Allgemeine Einstellungen)

![Modulo Kamstrup – Figura 2](/img/produkte-kamstrup-modul/02.png)

## Prodotto successore

smart-me non offre alcun prodotto successore per i contatori Kamstrup.

Se gestisce un RCP (raggruppamento ai fini del consumo proprio) smart-me (solo Svizzera) e necessita di una nuova soluzione per la Sua misurazione (ad es. HAK), può contattarci: offriamo ai nostri [partner di progetto](https://web.smart-me.com/projektpartner/) condizioni vantaggiose per la sostituzione. (Offerta speciale valida fino al 30.06.2025)

Se in ambito privato vengono effettuate misurazioni per monitoraggio, domotica ecc., è possibile installare in qualsiasi momento il [Telstar 80A](/produkte/telstar) o il [Telstar CT](/produkte/Telstar-CT). Se cerca una soluzione con il Suo contatore Kamstrup esistente, Le consigliamo di dare un'occhiata a questa pagina. [https://whatwatt.ch/de](https://whatwatt.ch/de) oppure [https://gplug.ch/](https://gplug.ch/) (Riserva gPlug: con il modulo Kamstrup smart-me occorre tenere presente che viene utilizzata una funzione non documentata dell'interfaccia cliente (CII). Il gPlugK utilizza invece la CII pubblicamente documentata. Può quindi accadere che il gPlugK non funzioni su un Omnipower, anche se il prodotto smart-me vi funziona. Questo problema può essere in parte risolto tramite una modifica della configurazione remota da parte del gestore della rete di distribuzione.

## Chiave del contatore non valida (CKW)

Problema

- Il modulo Kamstrup è offline con il messaggio di errore Chiave del contatore non valida (Ungültiger Zähler Schlüssel)

Soluzione

La causa del problema è nota dal 14.5.2025 13:43: nel corso di una manutenzione di sistema di CKW sono state rinnovate per errore tutte le chiavi dei contatori Kamstrup, rendendo non valide quelle precedenti.

Come soluzione deve inviare a CKW una e-mail all'indirizzo [messtechnik@ckw.ch](mailto:messtechnik@ckw.ch) indicando il numero del contatore (vedi immagine in basso a destra). CKW Le invierà quindi una nuova chiave.

![Modulo Kamstrup – Figura 3](/img/produkte-kamstrup-modul/03.png)

![Modulo Kamstrup – Figura 4](/img/produkte-kamstrup-modul/04.png)

## Download

Scheda tecnica

[Inglese](https://docs.google.com/presentation/d/1MZwOPzxvFGYc0ABwUGkdSa5Ay1NUlRRAXrMTlrBY5lw/export/pdf)

Documenti tecnici

[Quick Starter Guide](https://docs.google.com/document/d/1cS5WRL6pkD0gkrZ0FGVVKKvnGc2-kHdcpS_A88SyPlA/export?format=pdf)

## FAQ

<details id="in-welchem-intervall-senden-die-zähler-daten">
<summary>Con quale intervallo i contatori inviano i dati?</summary>

- Ogni 15 minuti, ossia alle xx:00:00 xx:15:00, xx:30:00 e xx:45:00. In questo modo vengono inviati i dati necessari per la curva di carico. In caso di interruzione della connessione, questi dati vengono salvati localmente e inviati successivamente.

- In aggiunta è possibile effettuare una configurazione individuale:

    - Con licenze Basic o Limited: max. 1x al minuto.

    - Con licenza Pro: max. 1x al secondo

</details>
