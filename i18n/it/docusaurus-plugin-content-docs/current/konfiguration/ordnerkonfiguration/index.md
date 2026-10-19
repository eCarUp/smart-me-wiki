---
title: 'Configurazione dei contatori e delle cartelle'
slug: '/konfiguration/ordnerkonfiguration'
description: 'Video tutorial: creare cartelle e assegnare i contatori'
sidebar_label: 'Configurazione delle cartelle'
naechste_schritte: [konfiguration/ordnerkonfiguration/nur-strom, konfiguration/ordnerkonfiguration/strom-und-eine-heizung, konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen]
---
<Embed src="https://player.vimeo.com/video/661999827" aspect="1.291" title="Configurazione delle cartelle" />

Video tutorial: creare cartelle e assegnare i contatori

## Istruzioni passo per passo

### Navigazione nell'area Configurazione dei contatori e delle cartelle

<div className="row">
<div className="col col--6">

1.  Effettui l'accesso al [sito web smart-me](https://web.smart-me.com/).

2.  Nel menu a sinistra, navighi fino a "Configurazione dei contatori e delle cartelle" ("Zähler- und Ordnerkonfiguration")

</div>
<div className="col col--6 text--center">

![Configurazione dei contatori e delle cartelle – Figura 1](/img/konfiguration-ordnerkonfiguration/01.png)

</div>
</div>

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

Nome (Name):  Definisca il nome del contatore.
Descrizione (Beschreibung):
Aggiunga facoltativamente una descrizione per il contatore.
Correzione del valore (Wert Korrektur): 
Corregge lato cloud il valore misurato del contatore. (Calcoli di posizione)
Correzione del valore della cartella superiore (Überordner Wert Korrektur):
Definisce in percentuale quanta parte del valore misurato deve essere sommata nella cartella superiore.
Contatore attivo (Zähler aktiv):
Attivi o disattivi un contatore per risparmiare licenze. I contatori disattivati non mostrano più dati. Ulteriori informazioni sui contatori disattivati sono disponibili nelle nostre FAQ alla voce [Come disattivo il mio contatore?](/faq#wie-deaktiviere-ich-meinen-zähler)

Per attivare o disattivare più contatori contemporaneamente, può spostarli in una cartella nella Configurazione dei contatori e delle cartelle (Zähler- / Ordnerkonfiguration), fare clic con il tasto destro su di essa e scegliere un'azione di massa. 

![Disattivare i contatori](/img/konfiguration-ordnerkonfiguration/03.jpg)

Elimina nodo (Knoten Löschen)

Elimina dall'albero il nodo o il punto di misura selezionato. 

I contatori ricadono quindi sul lato sinistro come contatori non assegnati.

![Configurazione dei contatori e delle cartelle – Figura 4](/img/konfiguration-ordnerkonfiguration/04.png)

### Denominare i contatori

<div className="row">
<div className="col col--8">

- Tutti i contatori devono essere installati nell'account corrispondente. [Messa in servizio](/konfiguration/inbetriebnahme) 

- Tutti i contatori devono essere denominati. I nostri suggerimenti per la denominazione dei contatori 

    - Unità d'uso Numero del contatore (ad es. APP 1 6352415)

    - Vettore Unità d'uso Numero del contatore (ad es. Calore APP 1)

</div>
<div className="col col--4 text--center">

![Configurazione dei contatori e delle cartelle – Figura 5](/img/konfiguration-ordnerkonfiguration/05.png)

</div>
</div>

### Convertire i contatori di acqua fredda in contatori di acqua calda sanitaria (se necessario)

<div className="row">
<div className="col col--7">

Alcuni produttori di contatori M-Bus indicano nella trasmissione dei dati che si tratta di un contatore di acqua fredda, anche se dovrebbe essere un contatore di acqua calda sanitaria. In questo caso, il tipo di contatore deve essere sovrascritto in smart-me.

- Navighi fino alla Dashboard

- Selezioni il contatore nel menu Dashboard

- Selezioni la rotella dentata in alto a destra

- Impostazioni avanzate (Erweiterte Einstellungen)

- Modifichi il tipo di dispositivo (Geräte Type).

- Salva (Speichern)

Nota: questa modifica comporta un supporto in smart-me Billing. L'Auto Export per le aziende elettriche non viene modificato.

Nota: per motivi tecnici, questa modifica non è possibile con i contatori di calore e di freddo.

</div>
<div className="col col--5 text--center">

![Configurazione dei contatori e delle cartelle – Figura 6](/img/konfiguration-ordnerkonfiguration/06.png)

</div>
</div>

### Strutture delle cartelle e loro influenza sui processi successivi

Il sistema attuale consente la creazione automatizzata del conteggio dell'elettricità. Affinché ciò riesca, calore e acqua devono rimanere separati dall'elettricità. Sono comunque possibili sistemi misti per risparmiare lavoro con le tabelle degli inquilini, ma in questo modo si perde purtroppo l'automazione della fatturazione.

Nei sistemi con più riscaldamenti, tuttavia, la suddivisione in più immobili è inevitabile.

Ogni immobile creato individualmente è fondamentalmente in grado di rappresentare 1x elettricità e 1x calore/acqua.

<Embed src="/embeds/konfiguration-ordnerkonfiguration-02.html" aspect="2.308" title="Configurazione delle cartelle" />

### Fondamenti della struttura ad albero e creazione dei nodi

Per preparare un edificio al conteggio, devono essere creati gli immobili e le unità di conteggio appropriati.

Struttura di base delle cartelle di ogni singolo immobile

La struttura di base per ogni forma di energia e ogni edificio è composta da due nodi fondamentali e da più sottonodi:

- Immobile (successiva configurazione di un conteggio)

    - -   Unità di conteggio 1 dell'immobile (appartamento o locali)

            - -   Contatore dell'appartamento (quota 100%)

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

### Crei la struttura per il Suo progetto

Scelga ora, in base al Suo progetto, quali istruzioni desidera seguire.

[Solo elettricità](/konfiguration/ordnerkonfiguration/nur-strom)

[Elettricità e un riscaldamento](/konfiguration/ordnerkonfiguration/strom-und-eine-heizung)

[Elettricità e più riscaldamenti](/konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen)

## Informazioni aggiuntive

### Creazione automatica di cartelle con file CSV

smart-me offre la possibilità di automatizzare la creazione di cartelle, le assegnazioni e la ridenominazione dei contatori tramite un file CSV. Per questa funzione è necessario un abbonamento smart-me Professional.

I file CSV contengono dati tabellari salvati in formato testo. Possono essere modificati con un editor di testo (ad es. notepad++).

Attenzione: utilizzando questa funzione, le cartelle già esistenti vengono eliminate. Ciò significa che tutte le funzioni utilizzate con queste cartelle non funzionano più (ad es. azioni se/allora, configurazioni smart-me billing ecc.). 



<Video src="YQVcTxPgdzM" title="Video YouTube, creazione di cartelle tramite file csv" />

![Configurazione dei contatori e delle cartelle – Figura 8](/img/konfiguration-ordnerkonfiguration/08.png)

Un file CSV di configurazione contiene le seguenti colonne (non modificarne l'ordine):

[](https://drive.google.com/open?id=1Ft_fg6mxKZCpPND-i5ZoWN6kAKacnDXD8rJGeOB40KM "Open Spreadsheet, wiki 2.0 Tabellen in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1Ft_fg6mxKZCpPND-i5ZoWN6kAKacnDXD8rJGeOB40KM/htmlembed?gid=0" height="252px" title="Foglio di calcolo, tabelle wiki 2.0" />

Tabelle wiki 2.0

I separatori ";" e "//" non possono essere utilizzati nei nomi. Sono riservati alla separazione di colonne e di cartelle nei percorsi.

Se sono presenti le 4 colonne "MeterPointId", "ExportFormat", "UploadType" ed "ExportInterval", il contatore viene registrato anche per l'Auto Export.

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

Anche Excel supporta la modifica di file CSV. Occorre però tenere presenti due punti:

1.  Occorre impedire che Excel arrotondi il numero di serie del contatore o lo rappresenti in forma esponenziale (ad es. facendo trattare a Excel i numeri come testo).

2.  Il file CSV deve essere nel set di caratteri UTF-8. Excel non visualizza correttamente le dieresi. In un editor di testo (ad es. notepad++), invece, questi caratteri vengono visualizzati correttamente.


![Configurazione dei contatori e delle cartelle – Figura 9](/img/konfiguration-ordnerkonfiguration/09.png)

La procedura consigliata è la seguente:

1.  Effettui l'accesso al [sito web smart-me](https://web.smart-me.com/login/).

2.  Clicchi in alto a destra su Configurazione (Konfiguration)

3.  Clicchi su Configurazione contatori / cartelle (Zähler / Ordner Konfiguration)

4.  Clicchi su Configurazione nodi tramite CSV (Knoten Konfiguration über CSV)

5.  Clicchi su Scarica configurazione nodi (Download Knoten Konfiguration) per scaricare la configurazione attuale come file CSV

6.  Modifichi la configurazione

7.  Verifichi la configurazione in un editor di testo che supporti il set di caratteri UTF-8, controllando che i numeri di serie dei contatori e i nomi siano rappresentati correttamente

8.  Clicchi su Sfoglia (Durchsuchen) e selezioni il file CSV modificato

9.  Clicchi su Carica configurazione nodi (Upload Knoten Konfiguration) per applicare la configurazione
    Attenzione: le modifiche risultanti non possono essere annullate
