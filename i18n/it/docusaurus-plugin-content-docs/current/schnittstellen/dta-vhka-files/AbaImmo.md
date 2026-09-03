---
title: 'AbaImmo'
slug: '/schnittstellen/dta-vhka-files/AbaImmo'
description: 'File di scambio DTA-VHKA con AbaImmo'
sidebar_label: 'AbaImmo'
---
## File di scambio DTA-VHKA con AbaImmo

## Indicazioni principali per il conteggio con AbaImmo e smart-me

- Il conteggio e la ripartizione dei costi secondo VEWA avviene nel sistema smart\-me.

- Ogni unità di conteggio in AbaImmo che si vuole interrogare deve esistere in modo congruente in smart-me

- Perché il conteggio sia corretto, per ogni periodo di conteggio devono essere registrati in tutte le unità i rapporti di locazione e le sfitte!

- Lo specchio degli inquilini di AbaImmo viene sincronizzato automaticamente con smart-me.

- Il presupposto per l'utilizzo è che l'elettricità e le spese di riscaldamento e accessorie abbiano lo stesso periodo di conteggio.


## Implementazione attuale

Attualmente supportato:

- Trasmissione di kWh, m3, valore in per mille o prezzo di una singola tariffa per calore, freddo, acqua calda sanitaria e acqua fredda e tariffa unitaria dell'elettricità

- Trasmissione di valori in per mille o di prezzo come somma di tariffe, ad esempio per l'elettricità


Non supportato:

- Trasmissione separata delle tariffe elettriche (ad esempio elettricità di punta, elettricità di rete ed elettricità solare separatamente)


![AbaImmo – Figura 1](/img/schnittstellen-dta-vhka-files-abaimmo/01.png)

### Configurazione best practice

Il modo più semplice di organizzare la trasmissione dei dati nel RCP (raggruppamento ai fini del consumo proprio) è il seguente:

- L'elettricità viene trasmessa come importo in CHF; a tale scopo i prezzi delle singole tariffe devono essere registrati in smart-me.

- Calore, freddo, acqua calda sanitaria e acqua fredda vengono trasmessi nel modo più semplice come valore in per mille.

- I costi dell'elettricità dell'oggetto per pompe di calore e boiler non vengono trasmessi. I costi possono essere inseriti in anticipo come registrazione contabile in AbaImmo.


### Configurazione lato AbaImmo e svolgimento dello scambio

1.  Vai a Y471, seleziona il numero dell'immobile e attiva l'interfaccia VHKA.

2.  Crea un periodo di conteggio per l'elettricità e/o per le spese di riscaldamento e accessorie.

3.  Vai in Y471 su "Contatori" (Zähler) e crea le interrogazioni dei contatori corrispondenti all'immobile.

    ad esempio: 
    \- Contatore di calore, specifico dell'oggetto, costi di riscaldamento, solo consumo
    \- Acqua calda sanitaria, specifica dell'oggetto, costi dell'acqua calda, solo consumo
    \- Acqua fredda, specifica dell'oggetto, costi dell'acqua, solo consumo


4.  Vai alle impostazioni dell'applicazione Y621 

5.  Nella scheda "HK/NK" registra una ditta di lettura con il nome "smart-me"

6.  Vai a Y11 Anagrafica immobili

7.  Nella scheda Standard/Ditta di lettura VHKA inserisci ora la ditta di lettura "smart-me" negli immobili desiderati

8.  Inserisci ora per ogni oggetto dell'immobile da interrogare la ditta di lettura "smart-me" tramite il numero VHKA di AbaImmo.
    Questa impostazione determina se la richiesta viene eseguita o ignorata nel file di interrogazione.

9.  Vai ora a Y2312 Elaborare interfaccia VHKA

10.  Seleziona ora l'immobile desiderato e il percorso di salvataggio per il file VHKA.

11.  Esporta ora il file per caricarlo successivamente in smart-me.


![AbaImmo – Figura 2](/img/schnittstellen-dta-vhka-files-abaimmo/02.png)

![AbaImmo – Figura 3](/img/schnittstellen-dta-vhka-files-abaimmo/03.png)

![AbaImmo – Figura 4](/img/schnittstellen-dta-vhka-files-abaimmo/04.png)

![AbaImmo – Figura 5](/img/schnittstellen-dta-vhka-files-abaimmo/05.png)

12\. Nella creazione delle fatture di smart-me vai su "Configurazione" (Konfiguration) e verifica se VEWA è attivato o inattivo.

\--> se è attivato, occorre verificare se esiste un periodo di conteggio corrispondente al file di interrogazione di AbaImmo; in caso contrario, registrarne uno adeguato.

13\. Vai ora su "Fatture" (Rechnungen), seleziona l'immobile e premi a destra su "esportare" (exportieren)

14\. Scegli il tipo di esportazione "AbaImmo" e configura le informazioni secondo la selezione. Nota che l'elettricità è disponibile solo dalla V2025.

15\. Seleziona ora il file da caricare e clicca su "esportare" (exportieren). Al termine del calcolo il file è pronto per il download.

16. Scarica il file completato sul tuo computer tramite "Scaricare" (Herunterladen).

17\. Carica ora il file scaricato in AbaImmo sotto Y2312 Elaborare interfaccia (importazione).

18\. Consulta i dati caricati sotto Y2311. (Seleziona il numero dell'immobile)

![AbaImmo – Figura 6](/img/schnittstellen-dta-vhka-files-abaimmo/06.png)

### Sincronizzazione dei dati tra AbaImmo e smart-me

Perché il file possa essere letto correttamente, in smart-me deve essere registrato il rispettivo ObjektID di Abacus nelle chiavi esterne di smart-me Billing.

1.  Apri il file esportato in un editor.

2.  Cerca l'ObjektID (4) nel file per ognuno degli appartamenti.

3.  Inserisci l'ObjektID (4) nell'unità abitativa corrispondente in smart-me Billing nelle chiavi esterne.


![AbaImmo – Figura 7](/img/schnittstellen-dta-vhka-files-abaimmo/07.png)

![AbaImmo – Figura 8](/img/schnittstellen-dta-vhka-files-abaimmo/08.png)

### Collegare l'ObjektID con le unità di conteggio

Per ogni unità di conteggio in smart-me deve essere disponibile un ObjektID dal file. L'ObjektID di AbaImmo deve ora essere collegato all'appartamento tramite le chiavi esterne.

Secondo l'esempio precedente, per l'appartamento 303-2.2 viene ora collegato in smart-me l'appartamento di 4,5 locali con l'ID "1101" alla 4. posizione.

![AbaImmo – Figura 9](/img/schnittstellen-dta-vhka-files-abaimmo/09.png)

### Eseguire la registrazione sui centri di costo in AbaImmo

Se sono necessarie registrazioni contabili preliminari sui centri di costo in AbImmo, queste possono essere ricavate dal CSV riassuntivo di ogni fattura creata.

Di norma è il caso dell'elettricità, che viene trasmessa solo come singola voce. Per le registrazioni in questo caso devono essere contabilizzate l'elettricità solare e l'elettricità di rete. Le singole quote possono essere ricavate dal CSV per ripartire i ricavi.

Nella ripartizione dell'elettricità solare questo sarà spesso necessario, poiché l'origine di questa informazione si trova nel sistema smart-me.

Per gli altri centri di costo di norma sono disponibili fatture esterne che possono essere contabilizzate.

1.  Accedi a smart-me Billing tramite la scheda Fatturazione

2.  Seleziona l'immobile

3.  Scegli il periodo di fatturazione e crea una fattura

4.  Quando la fattura del periodo corrispondente è creata, apri il CSV riassuntivo


![AbaImmo – Figura 10](/img/schnittstellen-dta-vhka-files-abaimmo/10.png)

![AbaImmo – Figura 11](/img/schnittstellen-dta-vhka-files-abaimmo/11.png)

Al suo interno si trovano i rispettivi kWh e m3 venduti e il prezzo per tariffa, unità di conteggio e nel totale.

Con questo valore totale della rispettiva tariffa è possibile eseguire una registrazione contabile in AbaImmo e poi ripartirla in modo adeguato con il file DTA-VHKA in per mille.
