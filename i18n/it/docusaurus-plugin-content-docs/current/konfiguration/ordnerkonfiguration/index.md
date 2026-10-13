---
title: 'Configurazione dei contatori e delle cartelle'
slug: '/konfiguration/ordnerkonfiguration'
description: 'Video tutorial: creare cartelle e assegnare i contatori'
sidebar_label: 'Configurazione delle cartelle'
---
<Embed src="https://player.vimeo.com/video/661999827" aspect="1.291" title="Configurazione delle cartelle" />

Video tutorial: creare cartelle e assegnare i contatori

## Istruzioni passo per passo

### Navigazione all'area Configurazione dei contatori e delle cartelle

1.  Accedi al [sito web di smart-me](https://web.smart-me.com/).

2.  Nel menu a sinistra, vai a "Configurazione dei contatori e delle cartelle" ("Zähler- und Ordnerkonfiguration")


![Configurazione dei contatori e delle cartelle – Figura 1](/img/konfiguration-ordnerkonfiguration/01.png)

### Descrizione delle funzioni delle azioni

![Configurazione dei contatori e delle cartelle – Figura 2](/img/konfiguration-ordnerkonfiguration/02.png)

Aggiungi nodo (Knoten Hinzufügen):

Aggiunge un nodo con un nome e un simbolo a scelta.

Il nome influisce sull'ordine in cui il nodo viene visualizzato nell'albero. 

1.  Ordinamento per numeri

2.  Ordinamento alfabetico


Modifica nodo cartella (Ordner Knoten Editieren) 

Consente di modificare il nome, il simbolo e la subordinazione del nodo.



Modifica nodo contatore (Zähler Knoten editieren)

Nome (Name):  Definisci il nome del contatore.
Descrizione (Beschreibung):
Aggiungi facoltativamente una descrizione per il contatore.
Correzione del valore (Wert Korrektur): 
Corregge nel cloud il valore misurato dal contatore. (Calcoli di posizione)
Correzione del valore nella cartella superiore (Überordner Wert Korrektur):
Definisce in percentuale quanta parte del valore misurato deve essere sommata nella cartella superiore.
Contatore attivo (Zähler aktiv):
Attiva o disattiva un contatore per risparmiare licenze. I contatori disattivati non mostrano più dati. Ulteriori informazioni sui contatori disattivati sono disponibili nelle nostre FAQ alla voce [Come disattivo il mio contatore?](/#come-disattivo-il-mio-contatore)

Per attivare o disattivare più contatori contemporaneamente, puoi spostarli in una cartella nella configurazione dei contatori e delle cartelle (Zähler- / Ordnerkonfiguration), fare clic con il tasto destro su di essa e scegliere un'azione di massa. 

![Disattivare i contatori](/img/konfiguration-ordnerkonfiguration/03.jpg)

Elimina nodo (Knoten Löschen)

Elimina dall'albero il nodo o il punto di misura selezionato. 

I contatori tornano quindi sul lato sinistro come contatori non assegnati.

![Configurazione dei contatori e delle cartelle – Figura 4](/img/konfiguration-ordnerkonfiguration/04.png)

### Etichettare i contatori

- Tutti i contatori devono essere installati nell'account corrispondente. [Messa in servizio](/konfiguration/inbetriebnahme) 

- Tutti i contatori devono essere etichettati. I nostri suggerimenti per la denominazione dei contatori 

    - Unità d'uso Numero del contatore (ad es. APP 1 6352415)

    - Fluido Unità d'uso Numero del contatore (ad es. Calore APP 1)


![Configurazione dei contatori e delle cartelle – Figura 5](/img/konfiguration-ordnerkonfiguration/05.png)

### Convertire i contatori dell'acqua fredda in contatori dell'acqua calda sanitaria (se necessario)

Alcuni produttori di contatori M-Bus indicano nella trasmissione dei dati che si tratta di un contatore dell'acqua fredda, anche se dovrebbe essere un contatore dell'acqua calda sanitaria. In questo caso, il tipo di contatore deve essere sovrascritto in smart-me.

- Vai alla Dashboard

- Seleziona il contatore nel menu Dashboard

- Seleziona la rotella in alto a destra

- Impostazioni avanzate (Erweiterte Einstellungen)

- Modifica il tipo di dispositivo (Geräte Type).

- Salva (Speichern)


Nota: questa modifica comporta un supporto in smart-me Billing. L'Auto-Export per le aziende elettriche non viene modificato.

Nota: per motivi tecnici, questa modifica non è possibile con i contatori di calore e di freddo.

![Configurazione dei contatori e delle cartelle – Figura 6](/img/konfiguration-ordnerkonfiguration/06.png)

### Strutture delle cartelle e loro influenza sui processi successivi

Il sistema attuale consente una creazione automatizzata del conteggio dell'elettricità. Affinché ciò funzioni, il calore e l'acqua devono rimanere separati dall'elettricità. Sono comunque possibili sistemi misti per ridurre l'onere legato agli elenchi degli inquilini, ma in tal caso si perde purtroppo l'automazione della fatturazione.

Nei sistemi con più impianti di riscaldamento, la suddivisione in più immobili è tuttavia inevitabile.

Ogni immobile creato singolarmente è in linea di principio in grado di rappresentare 1x elettricità e 1x calore/acqua.

<Embed src="/embeds/konfiguration-ordnerkonfiguration-02.html" aspect="2.308" title="Configurazione delle cartelle" />

### Nozioni di base sulla struttura ad albero e creazione dei nodi

Per preparare un edificio al conteggio, devono essere creati gli immobili e le unità di conteggio appropriati.

Struttura di base delle cartelle di ogni singolo immobile

La struttura di base per ogni forma di energia e ogni edificio è composta da due nodi fondamentali e da più sottonodi:

- Immobile (successiva configurazione di un conteggio)

    - -   Unità di conteggio 1 dell'immobile (appartamento o locali)

            - -   Contatore dell'appartamento (quota del 100%)

        - Unità di conteggio 2 dell'immobile (appartamento o locali)

        - ...

- Contatori tecnici (raccolta di punti di misura non conteggiati direttamente)
    Qui è possibile creare un numero qualsiasi di sottocartelle per la strutturazione. 

    - -   -   Contatore di bilancio

            - Contatore dell'impianto solare

            - Contatori generali ripartiti in percentuale sulle unità di conteggio

            - Contatori di calore ripartiti in percentuale sulle unità di conteggio

            - Contatori dell'acqua ripartiti in percentuale sulle unità di conteggio


![Configurazione dei contatori e delle cartelle – Figura 7](/img/konfiguration-ordnerkonfiguration/07.png)

### Passo successivo: crea la struttura per il tuo progetto

Scegli ora, in base al tuo progetto, quali istruzioni vuoi seguire.

[Solo elettricità](/konfiguration/ordnerkonfiguration/nur-strom)

[Elettricità e un impianto di riscaldamento](/konfiguration/ordnerkonfiguration/strom-und-eine-heizung)

[Elettricità e più impianti di riscaldamento](/konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen)

## Informazioni aggiuntive

### Creazione automatica di cartelle con file CSV

smart-me offre la possibilità di automatizzare la creazione di cartelle, le assegnazioni e la ridenominazione dei contatori tramite un file CSV. Per questa funzione è necessario un abbonamento smart-me Professional.

I file CSV contengono dati tabellari salvati in forma di testo. Possono essere modificati con un editor di testo (ad es. notepad++).

Attenzione: utilizzando questa funzione, le cartelle già esistenti vengono eliminate. Ciò significa che tutte le funzioni utilizzate con queste cartelle non funzionano più (ad es. azioni se/allora, configurazioni di smart-me billing ecc.). 



<Video src="YQVcTxPgdzM" title="Video YouTube, creazione di cartelle tramite file csv" />

![Configurazione dei contatori e delle cartelle – Figura 8](/img/konfiguration-ordnerkonfiguration/08.png)

Un file CSV di configurazione contiene le seguenti colonne (non modificarne l'ordine):

[](https://drive.google.com/open?id=1Ft_fg6mxKZCpPND-i5ZoWN6kAKacnDXD8rJGeOB40KM "Apri foglio di calcolo, wiki 2.0 Tabellen in una nuova finestra")

<Embed src="https://docs.google.com/spreadsheets/d/1Ft_fg6mxKZCpPND-i5ZoWN6kAKacnDXD8rJGeOB40KM/htmlembed?gid=0" height="252px" title="Foglio di calcolo, wiki 2.0 Tabellen" />

wiki 2.0 Tabellen

I separatori ";" e "//" non possono essere utilizzati nei nomi. Sono riservati alla separazione di colonne e cartelle nei percorsi.

Se sono presenti le 4 colonne "MeterPointId", "ExportFormat", "UploadType" e "ExportInterval", il contatore viene registrato anche per l'Auto Export.

Un esempio di configurazione senza Auto Export:

```
MeterSerialNumber;MeterName;FolderPath
102177;Büro 100;Wohnung 1. Stock Links // Büro
636731327420929937;Wohnzimmer 101;Wohnung 1. Stock Links // Wohnzimmer
101163;Schlafzimmer 102;Wohnung 1. Stock Links // Schlafzimmer
```

Un esempio di configurazione con Auto Export:

```
MeterSerialNumber;MeterName;FolderPath;MeterPointId;ExportFormat;UploadType;ExportInterval
102177;Büro 100;Wohnung 1. Stock Links // Büro;CH100;CSV_1;FTP_2;Weekly
636731327420929937;Wohnzimmer 101;Wohnung 1. Stock Links // Wohnzimmer;CH101;CSV_1;FTP_2;Daily
101163;Schlafzimmer 102;Wohnung 1. Stock Links // Schlafzimmer;CH102;CSV_1;FTP_2;Monthly
```

### Modifica di file CSV in Excel

Anche Excel supporta la modifica di file CSV. Occorre però tenere conto di due aspetti:

1.  Bisogna impedire che Excel arrotondi il numero di serie del contatore o lo rappresenti in forma esponenziale (ad es. facendo trattare i numeri come testo in Excel.)

2.  Il file CSV deve essere codificato con il set di caratteri UTF-8. Excel non visualizza correttamente le dieresi. In un editor di testo (ad es. notepad++) questi caratteri vengono invece visualizzati correttamente.


![Configurazione dei contatori e delle cartelle – Figura 9](/img/konfiguration-ordnerkonfiguration/09.png)

La procedura consigliata è la seguente:

1.  Accedi al [sito web di smart-me](https://web.smart-me.com/login/).

2.  Fai clic in alto a destra su Configurazione (Konfiguration)

3.  Fai clic su Configurazione contatori / cartelle (Zähler / Ordner Konfiguration)

4.  Fai clic su Configurazione dei nodi tramite CSV (Knoten Konfiguration über CSV)

5.  Fai clic su Scarica configurazione nodi (Download Knoten Konfiguration) per scaricare la configurazione attuale come file CSV

6.  Modifica la configurazione

7.  In un editor di testo che supporta il set di caratteri UTF-8, verifica che i numeri di serie dei contatori e i nomi siano visualizzati correttamente

8.  Fai clic su Sfoglia (Durchsuchen) e seleziona il file CSV modificato

9.  Fai clic su Carica configurazione nodi (Upload Knoten Konfiguration) per applicare la configurazione
    Attenzione: le modifiche risultanti non possono essere annullate
