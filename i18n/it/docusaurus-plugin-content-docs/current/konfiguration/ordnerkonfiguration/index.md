---
title: 'Configurazione dei contatori e delle cartelle'
slug: '/konfiguration/ordnerkonfiguration'
description: 'Video guida: creare cartelle e assegnare i contatori'
sidebar_label: 'Configurazione delle cartelle'
---
<Embed src="https://player.vimeo.com/video/661999827" aspect="1.291" title="Configurazione delle cartelle" />

Video guida: creare cartelle e assegnare i contatori

## Guida passo passo

### Navigazione all'area Configurazione dei contatori e delle cartelle

1.  Accedi al [sito web smart-me](https://web.smart-me.com/).

2.  Nel menu a sinistra vai a "Configurazione dei contatori e delle cartelle" (Zähler- und Ordnerkonfiguration)


![Configurazione dei contatori e delle cartelle – Figura 1](/img/konfiguration-ordnerkonfiguration/01.png)

### Descrizione delle funzioni delle azioni

![Configurazione dei contatori e delle cartelle – Figura 2](/img/konfiguration-ordnerkonfiguration/02.png)

Aggiungere nodo (Knoten Hinzufügen):

Aggiunge un nodo con un nome e un simbolo a scelta.

Il nome influisce sull'ordine in cui il nodo viene visualizzato nell'albero.

1.  Ordinamento per numeri

2.  Ordinamento per alfabeto


Modificare nodo cartella (Ordner Knoten Editieren)

Consente di modificare il nome del nodo, il simbolo e la subordinazione.



Modificare nodo contatore (Zähler Knoten editieren)

Nome (Name): definisci il nome del contatore.
Descrizione (Beschreibung):
aggiungi facoltativamente una descrizione per il contatore.
Correzione del valore (Wert Korrektur):
corregge il valore di misura del contatore lato cloud (calcoli di posizione).
Correzione del valore nella cartella superiore (Überordner Wert Korrektur):
definisce in percentuale quanta parte del valore di misura deve essere sommata nella cartella sovraordinata.
Contatore attivo (Zähler aktiv):
attiva o disattiva un contatore per risparmiare licenze. I contatori disattivati non mostrano più dati. Ulteriori informazioni sui contatori disattivati sono disponibili nelle nostre FAQ alla voce [Come disattivo il mio contatore?](/#come-disattivo-il-mio-contatore)

Per attivare o disattivare più contatori contemporaneamente, puoi spostarli nella configurazione dei contatori / delle cartelle in una cartella, fare clic con il tasto destro su di essa e scegliere un'azione di massa.

![Disattivare i contatori](/img/konfiguration-ordnerkonfiguration/03.jpg)

Eliminare nodo (Knoten Löschen)

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

Alcuni produttori di contatori M-Bus indicano nella trasmissione dei dati che si tratta di un contatore dell'acqua fredda, anche se dovrebbe trattarsi di un contatore dell'acqua calda sanitaria. In questo caso il tipo di contatore deve essere sovrascritto in smart-me.

- Vai al Dashboard

- Scegli il contatore nel menu Dashboard

- Seleziona la rotella dentata in alto a destra

- Impostazioni avanzate (Erweiterte Einstellungen)

- Modifica il tipo di apparecchio (Geräte Type).

- Salva


Nota: questa modifica comporta un supporto nello smart-me Billing. L'Auto Export per i fornitori di energia non viene modificato.

Nota: per motivi tecnici questa manipolazione non è possibile con i contatori di calore e di freddo.

![Configurazione dei contatori e delle cartelle – Figura 6](/img/konfiguration-ordnerkonfiguration/06.png)

### Strutture delle cartelle e loro influsso sui processi successivi

Il sistema attuale consente la creazione automatizzata del conteggio dell'elettricità. Affinché ciò riesca, il calore e l'acqua devono restare separati dall'elettricità. Sono comunque possibili sistemi misti per risparmiare lavoro nei rendiconti degli inquilini, ma in tal caso purtroppo si perde l'automazione della creazione delle fatture.

Nei sistemi con più impianti di riscaldamento, una suddivisione in più immobili è però inevitabile.

Ogni singolo immobile creato è in linea di principio in grado di rappresentare 1x elettricità e 1x calore/acqua.

<Embed src="/embeds/konfiguration-ordnerkonfiguration-02.html" aspect="2.308" title="Configurazione delle cartelle" />

### Nozioni di base sulla struttura ad albero e creazione dei nodi

Per preparare un edificio al conteggio, devono essere creati gli immobili e le unità di conteggio adeguati.

Struttura di base delle cartelle di ogni singolo immobile

La struttura di base per ogni forma di energia e ogni edificio è composta da due nodi fondamentali e da più sottonodi:

- Immobile (successiva configurazione di un conteggio)

    - -   Unità di conteggio 1 dell'immobile (appartamento o locali)

            - -   Contatore dell'appartamento (quote 100%)

        - Unità di conteggio 2 dell'immobile (appartamento o locali)

        - ...

- Contatori tecnici (raccolta di punti di misura non conteggiati direttamente)
    Qui possono essere create a piacere sottocartelle per la strutturazione.

    - -   -   Contatore di bilancio

            - Contatore dell'impianto solare

            - Contatori generali da ripartire in percentuale sulle unità di conteggio

            - Contatori di calore da ripartire in percentuale sulle unità di conteggio

            - Contatori dell'acqua da ripartire in percentuale sulle unità di conteggio


![Configurazione dei contatori e delle cartelle – Figura 7](/img/konfiguration-ordnerkonfiguration/07.png)

### Passo successivo: crea la struttura per il tuo progetto

Scegli ora, in base al tuo progetto, quale guida vuoi seguire.

[Solo elettricità](/konfiguration/ordnerkonfiguration/nur-strom)

[Elettricità e un impianto di riscaldamento](/konfiguration/ordnerkonfiguration/strom-und-eine-heizung)

[Elettricità e più impianti di riscaldamento](/konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen)

## Informazioni aggiuntive

### Creazione automatica di cartelle con file CSV

smart-me offre la possibilità di automatizzare la creazione di cartelle, le assegnazioni e la ridenominazione dei contatori mediante un file CSV. Per questa funzione è necessario un abbonamento smart-me Professional.

I file CSV contengono dati in forma tabellare salvati come testo. Possono essere modificati con un editor di testo (ad es. notepad++).

Attenzione: le cartelle già esistenti vengono eliminate utilizzando questa funzione. Ciò significa che tutte le funzioni utilizzate con queste cartelle non funzionano più (ad es. azioni se/allora, configurazioni smart-me billing ecc.).



<Video src="YQVcTxPgdzM" title="Video YouTube, creazione di cartelle mediante file csv" />

![Configurazione dei contatori e delle cartelle – Figura 8](/img/konfiguration-ordnerkonfiguration/08.png)

Un file CSV di configurazione contiene le seguenti colonne (non modificare l'ordine):

[](https://drive.google.com/open?id=1Ft_fg6mxKZCpPND-i5ZoWN6kAKacnDXD8rJGeOB40KM "Apri il foglio di calcolo, tabelle wiki 2.0 in una nuova finestra")

<Embed src="https://docs.google.com/spreadsheets/d/1Ft_fg6mxKZCpPND-i5ZoWN6kAKacnDXD8rJGeOB40KM/htmlembed?gid=0" title="Foglio di calcolo, tabelle wiki 2.0" />

tabelle wiki 2.0

I separatori ";" e "//" non devono essere utilizzati nei nomi. Sono riservati alla separazione di colonne e cartelle nei percorsi.

Se sono presenti le 4 colonne "MeterPointId", "ExportFormat", "UploadType" e "ExportInterval", il contatore viene inoltre registrato per l'Auto Export.

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

Anche Excel supporta la modifica dei file CSV. Al riguardo occorre prestare attenzione a due punti:

1.  Bisogna impedire che Excel arrotondi il numero di serie del contatore o lo rappresenti in forma esponenziale (ad es. impostando in Excel i numeri come testo).

2.  Il file CSV deve essere codificato nel set di caratteri UTF-8. Excel non rappresenta correttamente le dieresi. In un editor di testo (ad es. notepad++) questi caratteri vengono invece visualizzati correttamente.


![Configurazione dei contatori e delle cartelle – Figura 9](/img/konfiguration-ordnerkonfiguration/09.png)

Il flusso di lavoro consigliato è il seguente:

1.  Accedi al [sito web smart-me](https://web.smart-me.com/login/).

2.  Fai clic in alto a destra su Configurazione (Konfiguration)

3.  Fai clic su Configurazione dei contatori / delle cartelle (Zähler / Ordner Konfiguration)

4.  Fai clic su Configurazione dei nodi tramite CSV (Knoten Konfiguration über CSV)

5.  Fai clic su Scarica configurazione dei nodi (Download Knoten Konfiguration) per scaricare la configurazione attuale come file CSV

6.  Modifica la configurazione

7.  Verifica la configurazione in un editor di testo con supporto per il set di caratteri UTF-8, per controllare se i numeri di serie dei contatori e i nomi vengono rappresentati correttamente

8.  Fai clic su Sfoglia (Durchsuchen) e seleziona il file CSV modificato

9.  Fai clic su Carica configurazione dei nodi (Upload Knoten Konfiguration) per applicare la configurazione
    Attenzione: le modifiche risultanti non possono essere annullate
