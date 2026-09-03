---
title: 'Configurazione dei contatori e delle cartelle'
slug: '/konfiguration/ordnerkonfiguration'
description: 'Video guida: creare cartelle e assegnare i contatori'
sidebar_label: 'Configurazione delle cartelle'
---
<Video src="" title="Video" />

Video guida: creare cartelle e assegnare i contatori

## Istruzioni passo a passo

### Navigazione all'area Configurazione dei contatori e delle cartelle

1.  Accedi al [sito web smart-me](https://web.smart-me.com/).

2.  Nel menu a sinistra vai su "Configurazione dei contatori e delle cartelle" (Zähler- und Ordnerkonfiguration)


![Configurazione dei contatori e delle cartelle – Figura 1](/img/konfiguration-ordnerkonfiguration/01.png)

### Descrizione delle funzioni delle azioni

![Configurazione dei contatori e delle cartelle – Figura 2](/img/konfiguration-ordnerkonfiguration/02.png)

Aggiungi nodo (Knoten Hinzufügen):

Aggiunge un nodo con un nome e un simbolo liberamente selezionabile.

Il nome influisce sull'ordine in cui il nodo viene visualizzato nell'albero.

1.  Ordinamento per numeri

2.  Ordinamento alfabetico


Modifica nodo cartella (Ordner Knoten Editieren)

Consente di modificare il nome del nodo, il simbolo e la subordinazione.



Modifica nodo contatore (Zähler Knoten editieren)

Nome (Name): definisci il nome del contatore.
Descrizione (Beschreibung):
aggiungi facoltativamente una descrizione per il contatore.
Correzione del valore (Wert Korrektur):
corregge il valore misurato del contatore lato cloud. (Calcoli di posizione)
Correzione del valore nella cartella superiore (Überordner Wert Korrektur):
definisce in percentuale quanta parte del valore misurato deve essere sommata nella cartella superiore.
Contatore attivo (Zähler aktiv):
attiva o disattiva un contatore per risparmiare licenze. I contatori disattivati non mostrano più dati. Ulteriori informazioni sui contatori disattivati sono disponibili nelle nostre FAQ alla voce [Come disattivo il mio contatore?](/#come-disattivo-il-mio-contatore)

Per attivare o disattivare più contatori contemporaneamente, puoi spostarli in una cartella nella configurazione dei contatori / delle cartelle, fare clic con il tasto destro su questa cartella e scegliere un'azione di massa.

![Disattivare i contatori](/img/konfiguration-ordnerkonfiguration/03.jpg)

Elimina nodo (Knoten Löschen)

Elimina dall'albero il nodo o il punto di misura selezionato.

I contatori tornano quindi sul lato sinistro come contatori non assegnati.

![Configurazione dei contatori e delle cartelle – Figura 4](/img/konfiguration-ordnerkonfiguration/04.png)

### Denominare i contatori

- Tutti i contatori devono essere installati nell'account corrispondente. [Messa in servizio](/konfiguration/inbetriebnahme)

- Tutti i contatori devono essere denominati. I nostri suggerimenti per la denominazione dei contatori

    - Unità d'uso numero del contatore (ad es. APP 1 6352415)

    - Mezzo unità d'uso numero del contatore (ad es. Calore APP 1)


![Configurazione dei contatori e delle cartelle – Figura 5](/img/konfiguration-ordnerkonfiguration/05.png)

### Convertire i contatori dell'acqua fredda in contatori dell'acqua calda sanitaria (se necessario)

Alcuni produttori di contatori M-Bus indicano nella trasmissione dei dati che si tratta di un contatore dell'acqua fredda, anche se dovrebbe essere un contatore dell'acqua calda sanitaria. In questo caso il tipo di contatore deve essere sovrascritto in smart-me.

- Vai al Dashboard

- Scegli il contatore nel menu Dashboard

- Scegli la rotellina in alto a destra

- Impostazioni avanzate (Erweiterte Einstellungen)

- Modifica il tipo di dispositivo (Geräte Type).

- Salva


Nota: questa modifica comporta un supporto in smart-me Billing. L'Auto Export per le aziende elettriche non viene invece modificato.

Nota: per motivi tecnici questa manipolazione non è possibile con i contatori di calore e di freddo.

![Configurazione dei contatori e delle cartelle – Figura 6](/img/konfiguration-ordnerkonfiguration/06.png)

### Strutture delle cartelle e loro influenza sui processi successivi

Il sistema attuale consente la creazione automatizzata del conteggio dell'elettricità. Perché ciò funzioni, calore e acqua devono restare separati dall'elettricità. Sono comunque possibili sistemi misti per risparmiare lavoro con gli specchietti degli inquilini, purtroppo però in questo modo si perde l'automazione della creazione delle fatture.

Nei sistemi con più impianti di riscaldamento, una suddivisione in più immobili è però inevitabile.

Ogni singolo immobile creato è in linea di principio in grado di rappresentare 1x elettricità e 1x calore/acqua.

<Video src="" title="Custom embed" />

### Basi della struttura ad albero e creazione dei nodi

Per preparare un edificio al conteggio, devono essere creati gli immobili e le unità di conteggio adeguate.

Struttura di base delle cartelle di ogni singolo immobile

La struttura di base per ogni forma di energia e ogni edificio è composta da due nodi fondamentali e da molteplici sottonodi:

- Immobile (successiva configurazione di un conteggio)

    - -   Unità di conteggio 1 dell'immobile (appartamento o locali)

            - -   Contatore dell'appartamento (quote 100%)

        - Unità di conteggio 2 dell'immobile (appartamento o locali)

        - ...

- Contatori tecnici (raccolta di punti di misura non conteggiati direttamente)
    Qui possono essere create tutte le sottocartelle desiderate per la strutturazione.

    - -   -   Contatore di bilancio

            - Contatore dell'impianto solare

            - Contatori generali che vengono distribuiti in percentuale sulle unità di conteggio

            - Contatori di calore che vengono distribuiti in percentuale sulle unità di conteggio

            - Contatori dell'acqua che vengono distribuiti in percentuale sulle unità di conteggio


![Configurazione dei contatori e delle cartelle – Figura 7](/img/konfiguration-ordnerkonfiguration/07.png)

### Passo successivo: crea la struttura per il tuo progetto

Scegli ora, in base al tuo progetto, quale guida vuoi seguire.

[Solo elettricità](/konfiguration/ordnerkonfiguration/nur-strom)

[Elettricità e un impianto di riscaldamento](/konfiguration/ordnerkonfiguration/strom-und-eine-heizung)

[Elettricità e più impianti di riscaldamento](/konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen)

## Informazioni aggiuntive

### Creazione automatica di cartelle con file CSV

smart-me offre la possibilità di automatizzare la creazione di cartelle, le assegnazioni e la ridenominazione dei contatori mediante un file CSV. Per questa funzione è necessario un abbonamento smart-me Professional.

I file CSV contengono dati tabellari salvati in forma di testo. Possono essere modificati con un editor di testo (ad es. notepad++).

Attenzione: le cartelle già esistenti vengono eliminate utilizzando questa funzione. Ciò significa che tutte le funzioni che sono state utilizzate con queste cartelle non funzionano più (ad es. azioni se/allora, configurazioni di smart-me billing ecc.).



<Video src="YQVcTxPgdzM" title="Video" />

![Configurazione dei contatori e delle cartelle – Figura 8](/img/konfiguration-ordnerkonfiguration/08.png)

Un file CSV di configurazione contiene le seguenti colonne (non modificare l'ordine):

[](https://drive.google.com/open?id=1Ft_fg6mxKZCpPND-i5ZoWN6kAKacnDXD8rJGeOB40KM "Open Spreadsheet, wiki 2.0 Tabellen in new window")

<Video src="" title="Video" />

wiki 2.0 Tabellen

I caratteri separatori ";" e "//" non possono essere utilizzati nei nomi. Sono riservati alla separazione di colonne e cartelle nei percorsi.

Se sono presenti le 4 colonne "MeterPointId", "ExportFormat", "UploadType" e "ExportInterval", il contatore viene inoltre registrato per l'Auto Export.

Una configurazione di esempio senza Auto Export:

```
MeterSerialNumber;MeterName;FolderPath
102177;Büro 100;Wohnung 1. Stock Links // Büro
636731327420929937;Wohnzimmer 101;Wohnung 1. Stock Links // Wohnzimmer
101163;Schlafzimmer 102;Wohnung 1. Stock Links // Schlafzimmer
```

Una configurazione di esempio con Auto Export:

```
MeterSerialNumber;MeterName;FolderPath;MeterPointId;ExportFormat;UploadType;ExportInterval
102177;Büro 100;Wohnung 1. Stock Links // Büro;CH100;CSV_1;FTP_2;Weekly
636731327420929937;Wohnzimmer 101;Wohnung 1. Stock Links // Wohnzimmer;CH101;CSV_1;FTP_2;Daily
101163;Schlafzimmer 102;Wohnung 1. Stock Links // Schlafzimmer;CH102;CSV_1;FTP_2;Monthly
```

### Modifica di file CSV in Excel

Excel supporta anche la modifica di file CSV. Al riguardo vanno considerati due punti:

1.  Bisogna evitare che Excel arrotondi il numero di serie del contatore o lo rappresenti in forma esponenziale (ad es. impostando in Excel i numeri come testo).

2.  Il file CSV deve essere nel set di caratteri UTF-8. Excel non rappresenta correttamente le dieresi. In un editor di testo (ad es. notepad++) questi caratteri vengono invece rappresentati correttamente.


![Configurazione dei contatori e delle cartelle – Figura 9](/img/konfiguration-ordnerkonfiguration/09.png)

Il flusso di lavoro consigliato è il seguente:

1.  Accedi al [sito web smart-me](https://web.smart-me.com/login/).

2.  Fai clic in alto a destra su Configurazione (Konfiguration)

3.  Fai clic su Configurazione contatori / cartelle (Zähler / Ordner Konfiguration)

4.  Fai clic su Configurazione dei nodi tramite CSV (Knoten Konfiguration über CSV)

5.  Fai clic su Download configurazione dei nodi (Download Knoten Konfiguration) per scaricare la configurazione attuale come file CSV

6.  Modifica la configurazione

7.  Verifica la configurazione in un editor di testo con supporto per il set di caratteri UTF-8, controllando che i numeri di serie dei contatori e i nomi siano rappresentati correttamente

8.  Fai clic su Sfoglia e seleziona il file CSV modificato

9.  Fai clic su Upload configurazione dei nodi (Upload Knoten Konfiguration) per applicare la configurazione
    Attenzione: le modifiche risultanti non possono essere annullate
