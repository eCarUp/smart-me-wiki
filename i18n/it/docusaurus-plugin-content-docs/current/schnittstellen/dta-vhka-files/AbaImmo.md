---
title: 'AbaImmo'
slug: '/schnittstellen/dta-vhka-files/AbaImmo'
description: 'File di scambio DTA-VHKA con AbaImmo'
sidebar_label: 'AbaImmo'
---
## File di scambio DTA-VHKA con AbaImmo

## Indicazioni principali per il conteggio con AbaImmo e smart-me

- Il conteggio e la ripartizione dei costi secondo VEWA avvengono nel sistema smart\-me.

- Ogni unità di conteggio in AbaImmo che si desidera interrogare deve esistere in modo corrispondente in smart-me

- Affinché il conteggio sia corretto, per ogni periodo di conteggio devono essere registrati in tutte le unità i rapporti di locazione e gli sfitti!

- L'elenco degli inquilini di AbaImmo viene confrontato automaticamente con smart-me.

- Il presupposto per l'utilizzo è che l'elettricità e le spese di riscaldamento e accessorie abbiano lo stesso periodo di conteggio.


## Implementazione attuale

Attualmente supportato:

- Trasmissione del valore in kWh, m3, per mille o prezzo di una singola tariffa per calore, freddo, acqua calda sanitaria e acqua fredda e della tariffa unica per l'elettricità

- Trasmissione di valori in per mille o di prezzo come somma di tariffe, ad esempio per l'elettricità


Non supportato:

- Trasmissione separata delle tariffe elettriche (ad esempio elettricità di punta, elettricità di rete ed elettricità solare separatamente)


![AbaImmo – Figura 1](/img/schnittstellen-dta-vhka-files-abaimmo/01.png)

### Configurazione best practice

Nel RCP (raggruppamento ai fini del consumo proprio) la trasmissione dei dati si organizza nel modo più semplice così:

- L'elettricità viene trasmessa come importo in CHF; a tale scopo i prezzi delle singole tariffe devono essere registrati in smart-me.

- Calore, freddo, acqua calda sanitaria e acqua fredda si trasmettono nel modo più semplice come valore in per mille.

- I costi dell'elettricità dell'immobile per pompe di calore e boiler non vengono trasmessi. I costi possono essere registrati in anticipo in AbaImmo come registrazione contabile.


### Configurazione in AbaImmo e svolgimento dello scambio

1.  Navighi a Y471, selezioni il numero dell'immobile e attivi l'interfaccia VHKA.

2.  Crei un periodo di conteggio per l'elettricità e/o per le spese di riscaldamento e accessorie.

3.  In Y471 navighi a "Contatori" ("Zähler") e crei le interrogazioni dei contatori corrispondenti all'immobile.

    ad es.: 

    \- Contatore di calore, specifico per oggetto, costi di riscaldamento, solo consumo

    \- Acqua calda sanitaria, specifico per oggetto, costi dell'acqua calda sanitaria, solo consumo

    \- Acqua fredda, specifico per oggetto, costi dell'acqua, solo consumo

4.  Navighi alle impostazioni dell'applicazione Y621 

5.  Nella scheda "HK/NK" registri una ditta di lettura con il nome "smart-me"

6.  Navighi a Y11 Anagrafica immobili

7.  Nella scheda "Standard/Ditta di lettura VHKA" ("Standard/Ablesefirma VHKA") inserisca ora la ditta di lettura "smart-me" per gli immobili desiderati

8.  Inserisca ora per ogni oggetto dell'immobile da interrogare la ditta di lettura "smart-me" tramite il numero VHKA di AbaImmo.

    Questa impostazione determina se la richiesta nel file di interrogazione viene eseguita o ignorata.

9.  Navighi ora a Y2312 Elaborare interfaccia VHKA

10.  Selezioni ora l'immobile desiderato e la posizione di salvataggio del file VHKA.

11.  Esporti ora il file per caricarlo successivamente in smart-me.

![AbaImmo – Figura 2](/img/schnittstellen-dta-vhka-files-abaimmo/02.png)

![AbaImmo – Figura 3](/img/schnittstellen-dta-vhka-files-abaimmo/03.png)

![AbaImmo – Figura 4](/img/schnittstellen-dta-vhka-files-abaimmo/04.png)

![AbaImmo – Figura 5](/img/schnittstellen-dta-vhka-files-abaimmo/05.png)

12\. Nella fatturazione smart-me navighi a "Configurazione" ("Konfiguration") e verifichi se VEWA è attivato o inattivo.

\--> se è attivato, occorre verificare se esiste un periodo di conteggio identico a quello del file di interrogazione di AbaImmo; in caso contrario ne registri uno corrispondente.

13\. Navighi ora a "Fatture" ("Rechnungen"), selezioni l'immobile e prema a destra su "esporta" ("exportieren")

14\. Selezioni il tipo di esportazione "AbaImmo" e configuri le informazioni secondo la selezione. Tenga presente che l'elettricità è disponibile solo a partire dalla V2025.

15\. Selezioni ora il file da caricare e clicchi su "esporta" ("exportieren"). Al termine del calcolo il file è pronto per il download.

16. Scarichi il file completato sul Suo computer tramite "Scarica" ("Herunterladen").

17\. Carichi ora il file scaricato in AbaImmo sotto Y2312 Elaborare interfaccia (importazione).

18\. Visualizzi i dati caricati sotto Y2311. (Selezioni il numero dell'immobile)

![AbaImmo – Figura 6](/img/schnittstellen-dta-vhka-files-abaimmo/06.png)

### Allineamento dei dati tra AbaImmo e smart-me

Affinché il file possa essere letto correttamente, in smart-me occorre inserire il rispettivo ObjektID di Abacus nelle chiavi esterne dello smart-me Billing.

1.  Apra il file esportato in un editor.

2.  Cerchi nel file l'ObjektID (4) di ciascuno degli appartamenti.

3.  Inserisca l'ObjektID (4) nell'unità abitativa corrispondente nello smart-me Billing alla voce Chiavi esterne (Externe Schlüssel).


![AbaImmo – Figura 7](/img/schnittstellen-dta-vhka-files-abaimmo/07.png)

![AbaImmo – Figura 8](/img/schnittstellen-dta-vhka-files-abaimmo/08.png)

### Collegare l'ObjektID alle unità di conteggio

Per ogni unità di conteggio in smart-me deve essere disponibile un ObjektID dal file. L'ObjektID di AbaImmo deve ora essere collegato all'appartamento tramite le chiavi esterne.

Secondo l'esempio sopra, per l'appartamento 303-2.2 in smart-me viene ora collegato l'appartamento di 4,5 locali con l'ID "1101" alla 4a posizione.

![AbaImmo – Figura 9](/img/schnittstellen-dta-vhka-files-abaimmo/09.png)

### Eseguire la registrazione sui centri di costo in AbaImmo

Se in AbaImmo sono necessarie registrazioni preliminari sui centri di costo, queste possono essere ricavate dal riepilogo CSV di ogni fattura creata.

Di solito ciò avviene per l'elettricità, che viene trasmessa solo come posizione singola. Per le registrazioni in questo caso occorre registrare l'elettricità solare e l'elettricità di rete. Le singole quote possono essere ricavate dal CSV per ripartire i ricavi.

Per la ripartizione dell'elettricità solare ciò sarà necessario più spesso, poiché l'origine di questa informazione si trova nel sistema smart-me.

Per gli altri centri di costo di solito sono disponibili fatture esterne che possono essere registrate.

1.  Acceda allo smart-me Billing tramite la scheda Fatturazione (Rechnungsstellung)

2.  Selezioni l'immobile

3.  Selezioni il periodo di fatturazione e crei una fattura

4.  Quando la fattura per il periodo corrispondente è stata creata, apra il Riepilogo CSV (Zusammenfassung CSV)


![AbaImmo – Figura 10](/img/schnittstellen-dta-vhka-files-abaimmo/10.png)

![AbaImmo – Figura 11](/img/schnittstellen-dta-vhka-files-abaimmo/11.png)

Al suo interno si trovano i kWh e m3 venduti e il prezzo per tariffa, per unità di conteggio e in totale.

Con questo valore totale della rispettiva tariffa è possibile effettuare una registrazione in AbaImmo e ripartirla poi correttamente in per mille con il file DTA-VHKA.
