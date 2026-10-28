---
title: 'Configurazione di contatori e cartelle'
slug: '/konfiguration/ordnerkonfiguration'
description: 'Video guida: creare cartelle e assegnare i contatori'
sidebar_label: 'Configurazione delle cartelle'
naechste_schritte: [konfiguration/ordnerkonfiguration/nur-strom, konfiguration/ordnerkonfiguration/strom-und-eine-heizung, konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen, konfiguration/ordnerkonfiguration/mieterstrom-standard, konfiguration/ordnerkonfiguration/mieterstrom-nicht-teilnehmer]
---
<Menueweg>Configurazione di contatori e cartelle</Menueweg>

<div className="row">
<div className="col col--6">

## Funzioni dei nodi

![Configurazione di contatori e cartelle – Figura 2](/img/konfiguration-ordnerkonfiguration/02.png)

### Aggiungere un nodo (Knoten Hinzufügen):

Aggiunge un nodo con un nome e un simbolo a libera scelta.

Il nome influisce sull'ordine in cui il nodo viene visualizzato nell'albero. 

1.  Ordinamento per numeri

2.  Ordinamento alfabetico


### Modificare un nodo cartella (Ordner Knoten Editieren) 

Consente di modificare il nome, il simbolo e la subordinazione del nodo.

</div>
<div className="col col--6 text--center">

<Embed src="https://player.vimeo.com/video/661999827" aspect="1.291" title="Configurazione delle cartelle" />
Video guida: creare cartelle e assegnare i contatori

</div>
</div>

### Modificare un nodo contatore (Zähler Knoten editieren)

Nome (Name):  Definisci il nome del contatore.
Descrizione (Beschreibung):
Aggiungi facoltativamente una descrizione per il contatore.
Correzione del valore (Wert Korrektur): 
Corregge lato cloud il valore misurato del contatore. (Calcoli di posizione)
Correzione del valore nella cartella superiore (Überordner Wert Korrektur):
Definisce in percentuale quanta parte del valore misurato deve essere sommata nella cartella superiore.
Contatore attivo (Zähler aktiv):
Attiva o disattiva un contatore per risparmiare licenze. I contatori disattivati non mostrano più dati. Ulteriori informazioni sui contatori disattivati sono disponibili nelle nostre FAQ alla voce [Come disattivo il mio contatore?](/faq#wie-deaktiviere-ich-meinen-zähler)

Per attivare o disattivare più contatori contemporaneamente, puoi spostarli in una cartella nella configurazione di contatori e cartelle, fare clic con il tasto destro su di essa e scegliere un'azione di massa. 

![Disattivare i contatori](/img/konfiguration-ordnerkonfiguration/03.jpg)

### Eliminare un nodo (Knoten Löschen)

Elimina dall'albero il nodo o il punto di misura selezionato. 

I contatori tornano quindi sul lato sinistro come contatori non assegnati.

![Configurazione di contatori e cartelle – Figura 4](/img/konfiguration-ordnerkonfiguration/04.png)

## Etichettare i contatori

<div className="row">
<div className="col col--8">

- Tutti i contatori devono essere installati nell'account corrispondente. [Messa in servizio](/konfiguration/inbetriebnahme) 

- Tutti i contatori devono essere etichettati. I nostri suggerimenti per le denominazioni dei contatori 

    - Unità d'uso numero del contatore (ad es. APP 1 6352415)

    - Mezzo unità d'uso numero del contatore (ad es. Calore APP 1)

</div>
<div className="col col--4 bild--mitte">

![Configurazione di contatori e cartelle – Figura 5](/img/konfiguration-ordnerkonfiguration/05.png)

</div>
</div>

## Convertire contatori dell'acqua fredda in contatori dell'acqua calda sanitaria

<div className="row">
<div className="col col--7">

Alcuni produttori di contatori M-Bus indicano nella trasmissione dei dati che si tratta di un contatore dell'acqua fredda, anche se dovrebbe essere un contatore dell'acqua calda sanitaria. In questo caso il tipo di contatore deve essere sovrascritto in smart-me.

- Vai al Pannello di controllo (Dashboard)

- Seleziona il contatore nel menu Pannello di controllo (Dashboard)

- Seleziona la rotella dentata in alto a destra

- Impostazioni avanzate (Erweiterte Einstellungen)

- Modifica il tipo di dispositivo (Geräte Type).

- Salva (Speichern)

Nota: questa modifica comporta un supporto in smart-me Billing. L'Auto Export per le aziende elettriche non viene modificato.

Nota: per motivi tecnici questa modifica non è possibile con i contatori di calore e di freddo.

</div>
<div className="col col--5 bild--mitte">

![Configurazione di contatori e cartelle – Figura 6](/img/konfiguration-ordnerkonfiguration/06.png)

</div>
</div>

## Strutture delle cartelle e loro influenza sui processi successivi

Il sistema attuale consente una creazione automatizzata del conteggio dell'elettricità. Affinché ciò riesca, calore e acqua devono rimanere separati dall'elettricità. Sono comunque possibili sistemi misti per risparmiare lavoro negli elenchi degli inquilini, ma in questo caso si perde purtroppo l'automazione della fatturazione.

Nei sistemi con più riscaldamenti è tuttavia inevitabile una suddivisione in più immobili.

Ogni immobile creato individualmente è in linea di principio in grado di rappresentare 1x elettricità e 1x calore/acqua.

<Embed src="/embeds/konfiguration-ordnerkonfiguration-02.html" aspect="2.308" title="Configurazione delle cartelle" />

## Basi della struttura ad albero e creazione dei nodi

Per preparare un edificio per il conteggio, devono essere creati gli immobili e le unità di conteggio adeguati.

Struttura di base delle cartelle di ogni singolo immobile

La struttura di base per ogni forma di energia e ogni edificio è composta da due nodi fondamentali e da molteplici sottonodi:

- Immobile (successiva configurazione di un conteggio)

    - -   Unità di conteggio 1 dell'immobile (appartamento o locali)

            - -   Contatore dell'appartamento (quota 100%)

        - Unità di conteggio 2 dell'immobile (appartamento o locali)

        - ...

- Contatori tecnici (raccolta di punti di misura non conteggiati direttamente)

    Qui possono essere create a piacere sottocartelle per la strutturazione. 

    - -   -   Contatore di bilancio

            - Contatore dell'impianto solare

            - Contatori generali ripartiti in percentuale sulle unità di conteggio

            - Contatori di calore ripartiti in percentuale sulle unità di conteggio

            - Contatori dell'acqua ripartiti in percentuale sulle unità di conteggio

![Configurazione di contatori e cartelle – Figura 7](/img/konfiguration-ordnerkonfiguration/07.png)

## Crea la struttura per il tuo progetto

Scegli ora, in base al tuo progetto, quale guida desideri seguire alla fine della pagina.


## Caricamento CSV di strutture di cartelle

<details id="ordner-mit-csv-erstellen">
<summary>Creazione automatica di cartelle con file CSV</summary>

### Creazione automatica di cartelle con file CSV

smart-me offre la possibilità di automatizzare la creazione di cartelle, le assegnazioni e la rinomina dei contatori tramite un file CSV. Per questa funzione è necessario un abbonamento smart-me Professional.

I file CSV contengono dati tabellari salvati in forma di testo. Possono essere modificati con un editor di testo (ad es. notepad++).

Attenzione: utilizzando questa funzione, le cartelle già esistenti vengono eliminate. Ciò significa che tutte le funzioni utilizzate con queste cartelle non funzionano più (ad es. azioni se/allora, configurazioni di smart-me billing ecc.). 



<Video src="YQVcTxPgdzM" title="Video YouTube, creazione di cartelle tramite file csv" />

![Configurazione di contatori e cartelle – Figura 8](/img/konfiguration-ordnerkonfiguration/08.png)

Un file CSV di configurazione contiene le seguenti colonne (non modificarne l'ordine):

[](https://drive.google.com/open?id=1Ft_fg6mxKZCpPND-i5ZoWN6kAKacnDXD8rJGeOB40KM "Open Spreadsheet, wiki 2.0 Tabellen in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1Ft_fg6mxKZCpPND-i5ZoWN6kAKacnDXD8rJGeOB40KM/htmlembed?gid=0" height="252px" title="Foglio di calcolo, wiki 2.0 Tabellen" />

wiki 2.0 Tabellen

I caratteri di separazione ";" e "//" non possono essere utilizzati nei nomi. Sono riservati alla separazione di colonne e cartelle nei percorsi.

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

Anche Excel supporta la modifica di file CSV. Occorre tuttavia prestare attenzione a due punti:

1.  Bisogna impedire che Excel arrotondi il numero di serie del contatore o lo rappresenti in forma esponenziale (ad es. trattando i numeri come testo in Excel.)

2.  Il file CSV deve essere nel set di caratteri UTF-8. Excel non visualizza correttamente le dieresi. In un editor di testo (ad es. notepad++) questi caratteri vengono invece visualizzati correttamente.


![Configurazione di contatori e cartelle – Figura 9](/img/konfiguration-ordnerkonfiguration/09.png)

La procedura di lavoro consigliata è la seguente:

1.  Accedi al [sito web di smart-me](https://web.smart-me.com/login/).

2.  Clicca in alto a destra su Configurazione (Konfiguration)

3.  Clicca su Configurazione di contatori e cartelle (Zähler / Ordner Konfiguration)

4.  Clicca su Configurazione dei nodi tramite CSV (Knoten Konfiguration über CSV)

5.  Clicca su Scarica configurazione dei nodi (Download Knoten Konfiguration) per scaricare la configurazione attuale come file CSV

6.  Modifica la configurazione

7.  Verifica la configurazione in un editor di testo che supporti il set di caratteri UTF-8, controllando che i numeri di serie dei contatori e i nomi siano visualizzati correttamente

8.  Clicca su Sfoglia (Durchsuchen) e seleziona il file CSV modificato

9.  Clicca su Carica configurazione dei nodi (Upload Knoten Konfiguration) per applicare la configurazione
    Attenzione: le modifiche risultanti non possono essere annullate

</details>
