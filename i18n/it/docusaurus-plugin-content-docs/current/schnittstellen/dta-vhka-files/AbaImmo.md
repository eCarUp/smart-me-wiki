---
title: 'AbaImmo'
slug: '/schnittstellen/dta-vhka-files/AbaImmo'
description: 'File di scambio DTA-VHKA con AbaImmo'
sidebar_label: 'AbaImmo'
---
## File di scambio DTA-VHKA con AbaImmo

## Indicazioni principali sul conteggio con AbaImmo e smart-me

- Il conteggio e la ripartizione dei costi secondo VEWA avvengono nel sistema smart\-me.

- Ogni unità di conteggio in AbaImmo che si vuole interrogare deve esistere in modo congruente in smart-me

- Affinché il conteggio sia corretto, per ogni periodo di conteggio devono essere registrati in tutte le unità i rapporti di locazione e gli sfitti!

- L'elenco degli inquilini di AbaImmo viene confrontato automaticamente con smart-me.

- Il presupposto per l'utilizzo è che l'elettricità e le spese di riscaldamento e accessorie abbiano lo stesso periodo di conteggio.


## Implementazione attuale

Attualmente supportato:

- Trasmissione del valore in kWh, m3, per mille o prezzo di una singola tariffa per calore, freddo, acqua calda sanitaria e acqua fredda e della tariffa unica dell'elettricità

- Trasmissione di valori per mille o di prezzo come somma di tariffe, come ad es. l'elettricità


Non supportato:

- Trasmissione separata delle tariffe elettriche (ad es. elettricità di punta, elettricità di rete ed elettricità solare separate)


![AbaImmo – Figura 1](/img/schnittstellen-dta-vhka-files-abaimmo/01.png)

### Configurazione best practice

Il modo più semplice per organizzare la trasmissione dei dati nel RCP (raggruppamento ai fini del consumo proprio) è il seguente:

- L'elettricità viene trasmessa come importo in CHF; a tale scopo i prezzi delle singole tariffe devono essere registrati in smart-me.

- Calore, freddo, acqua calda sanitaria e acqua fredda si trasmettono più facilmente come valore per mille.

- I costi dell'elettricità dell'oggetto per pompe di calore e boiler non vengono trasmessi. I costi possono essere registrati preventivamente in AbaImmo come registrazione contabile.


### Configurazione lato AbaImmo e svolgimento dello scambio

1.  Vai a Y471, scegli il numero dell'immobile e attiva l'interfaccia VHKA.

2.  Crea un periodo di conteggio per l'elettricità e/o le spese di riscaldamento e accessorie.

3.  In Y471 vai a "Contatori" ("Zähler") e crea le interrogazioni dei contatori adatte all'immobile.

    ad es.: 

    \- Contatore di calore, specifico per oggetto, costi di riscaldamento, solo consumo

    \- Acqua calda sanitaria, specifico per oggetto, costi dell'acqua calda sanitaria, solo consumo

    \- Acqua fredda, specifico per oggetto, costi dell'acqua, solo consumo

4.  Vai alle impostazioni dell'applicazione Y621 

5.  Nella scheda "HK/NK" registra una ditta di lettura con il nome "smart-me"

6.  Vai a Y11 Anagrafica immobili

7.  Nella scheda Standard/Ditta di lettura VHKA (Standard/Ablesefirma VHKA) inserisci ora la ditta di lettura "smart-me" per gli immobili desiderati

8.  Inserisci ora per ogni oggetto dell'immobile da interrogare la ditta di lettura "smart-me" tramite il numero VHKA di AbaImmo.

    Questa impostazione determina se la richiesta viene eseguita o ignorata nel file di interrogazione.

9.  Vai ora a Y2312 Elaborare interfaccia VHKA (VHKA-Schnittstelle verarbeiten)

10.  Seleziona ora l'immobile desiderato e la posizione di salvataggio per il file VHKA.

11.  Esporta ora il file per caricarlo successivamente in smart-me.

![AbaImmo – Figura 2](/img/schnittstellen-dta-vhka-files-abaimmo/02.png)

![AbaImmo – Figura 3](/img/schnittstellen-dta-vhka-files-abaimmo/03.png)

![AbaImmo – Figura 4](/img/schnittstellen-dta-vhka-files-abaimmo/04.png)

![AbaImmo – Figura 5](/img/schnittstellen-dta-vhka-files-abaimmo/05.png)

12\. Nella fatturazione smart-me vai a "Configurazione" ("Konfiguration") e verifica se VEWA è attivato o inattivo.

\--> se è attivato, occorre verificare se esiste un periodo di conteggio uguale a quello del file di interrogazione di AbaImmo; in caso contrario, registrarne uno corrispondente.

13\. Vai ora a "Fatture" ("Rechnungen"), seleziona l'immobile e premi a destra su "esportare" ("exportieren")

14\. Scegli il tipo di esportazione "AbaImmo" e configura le informazioni in base alla selezione. Tieni presente che l'elettricità è disponibile solo a partire da V2025.

15\. Seleziona ora il file da caricare e clicca su "esportare" ("exportieren"). Al termine del calcolo il file è pronto per il download.

16. Scarica il file completato sul tuo computer tramite "Scaricare" ("Herunterladen").

17\. Carica ora il file scaricato in AbaImmo sotto Y2312 Elaborare interfaccia (Schnittstelle verarbeiten) (importazione).

18\. Visualizza i dati caricati sotto Y2311. (Scegli il numero dell'immobile)

![AbaImmo – Figura 6](/img/schnittstellen-dta-vhka-files-abaimmo/06.png)

### Allineamento dei dati tra AbaImmo e smart-me

Affinché il file possa essere letto correttamente, in smart-me Billing occorre inserire nelle chiavi esterne il rispettivo ObjektID di Abacus.

1.  Apri il file esportato in un editor.

2.  Cerca nel file l'ObjektID (4) di ciascun appartamento.

3.  Inserisci l'ObjektID (4) nell'unità abitativa corrispondente in smart-me Billing nelle chiavi esterne (Externe Schlüssel).


![AbaImmo – Figura 7](/img/schnittstellen-dta-vhka-files-abaimmo/07.png)

![AbaImmo – Figura 8](/img/schnittstellen-dta-vhka-files-abaimmo/08.png)

### Collegare l'ObjektID alle unità di conteggio

Per ogni unità di conteggio in smart-me deve essere disponibile un ObjektID dal file. L'ObjektID di AbaImmo deve ora essere collegato all'appartamento tramite le chiavi esterne.

Secondo l'esempio sopra, per l'appartamento 303-2.2 in smart-me viene ora collegato l'appartamento di 4,5 locali con l'ID "1101" in 4a posizione.

![AbaImmo – Figura 9](/img/schnittstellen-dta-vhka-files-abaimmo/09.png)

### Eseguire la registrazione sui centri di costo in AbaImmo

Se in AbaImmo sono necessarie registrazioni preliminari sui centri di costo, queste possono essere ricavate dal CSV riepilogativo di ogni fattura creata.

Di solito ciò è il caso per l'elettricità, che viene trasmessa solo come posizione singola. Per le registrazioni in questo caso occorre registrare l'elettricità solare e l'elettricità di rete. Le singole quote possono essere ricavate dal CSV per ripartire le entrate.

Per la ripartizione dell'elettricità solare ciò sarà spesso necessario, poiché l'origine di questa informazione si trova nel sistema smart-me.

Per gli altri centri di costo sono di solito disponibili fatture esterne che possono essere registrate.

1.  Accedi a smart-me Billing tramite la scheda Fatturazione (Rechnungsstellung)

2.  Seleziona l'immobile

3.  Scegli il periodo di fatturazione e crea una fattura

4.  Quando la fattura del periodo corrispondente è stata creata, apri il CSV riepilogativo (Zusammenfassung CSV)


![AbaImmo – Figura 10](/img/schnittstellen-dta-vhka-files-abaimmo/10.png)

![AbaImmo – Figura 11](/img/schnittstellen-dta-vhka-files-abaimmo/11.png)

Al suo interno si trovano i kWh e i m3 venduti e il prezzo per tariffa, per unità di conteggio e in totale.

Con questo valore totale della rispettiva tariffa si può effettuare una registrazione in AbaImmo, che viene poi ripartita in modo appropriato con il file DTA-VHKA tramite i valori per mille.
