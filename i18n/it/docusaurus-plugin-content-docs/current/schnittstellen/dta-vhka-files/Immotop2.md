---
title: 'Configurazione VHKA Immotop2'
slug: '/schnittstellen/dta-vhka-files/Immotop2'
description: 'Formati di file VHKA supportati Immotop2'
sidebar_label: 'Configurazione VHKA Immotop2'
---
## Formati di file VHKA supportati Immotop2

- Formato di file XML (standard DTA-VHKA)
    Interrogazioni per centro di costo:
    \- Letture del contatore in m3 o kWh per unità d'uso
    \- Valori in per mille per unità d'uso
    \- Prezzo per unità d'uso


## Indicazioni principali sul conteggio con Immotop2 e smart-me

- Il conteggio e la ripartizione dei costi secondo VEWA avvengono nel sistema smart.me.

- Ogni unità di conteggio in Immotop2 che deve essere interrogata deve esistere in modo congruente in Smart-me

- Affinché il conteggio sia corretto, per ogni periodo di conteggio in Immotop2 devono essere registrati in tutte le unità i rapporti di locazione e gli sfitti!

- Immotop2 supporta solo un periodo di conteggio per gruppo di spese accessorie, pertanto l'elettricità deve essere conteggiata nello stesso periodo di tutte le altre spese accessorie.

- La lista degli inquilini di Immotop2 viene sincronizzata automaticamente con smart-me.


## Indicazioni di configurazione lato Immotop2

Affinché Immotop2 e smart-me possano comunicare tra loro, le spese accessorie, i centri di costo e i gruppi di spese accessorie registrati devono corrispondere.

### Creazione delle chiavi di ripartizione necessarie in Immotop2

Affinché i centri di costo possano essere trasmessi correttamente, occorre innanzitutto assicurarsi che le chiavi necessarie siano disponibili sul mandante.

Nella scheda "Dati di base" (Basisdaten) è possibile creare le relative chiavi di ripartizione sotto Definizioni delle chiavi di ripartizione (Verteilschlüssel-Definitionen).

Se si desidera gestire i costi nel software Immotop2, si presta bene la chiave di ripartizione in per mille.

Per l'elettricità prodotta localmente è adatta principalmente la chiave di ripartizione CHF, per tutti i casi.

Chiavi di ripartizione generalmente indicate:

- Centro di costo elettricità di rete: elettricità di rete secondo i costi in CHF

- Centro di costo elettricità solare: elettricità solare secondo i costi in CHF

- Centro di costo calore e acqua calda sanitaria combinati: quota di riscaldamento secondo il consumo in per mille

- Centro di costo calore: riscaldamento secondo il consumo in per mille

- Centro di costo acqua calda sanitaria: centro di costo acqua calda sanitaria secondo il consumo in per mille


![Configurazione VHKA Immotop2 – Figura 1](/img/schnittstellen-dta-vhka-files-immotop2/01.png)

![Configurazione VHKA Immotop2 – Figura 2](/img/schnittstellen-dta-vhka-files-immotop2/02.png)

### 1\. Creare il gruppo LG spese accessorie

Presupposto per un conteggio è l'esistenza di un mandante con immobili creati.

Nell'area "LG-Gruppe-NK" di ogni immobile o gruppo di immobili è possibile registrare un nuovo LG-Gruppe-NK.
In esso vengono definiti i periodi di conteggio delle spese accessorie e gli immobili ai quali questo gruppo si applica. 

- Possono essere più immobili a condividere lo stesso LG-Gruppe-NK, ma in tal caso tutti i costi degli immobili devono confluire in un unico conto di costo.
    Gli immobili vengono gestiti insieme principalmente quando condividono il riscaldamento.


### 2\. Gruppi di costo (centri di costo)

Nell'area "Gruppi di costo" (Kostengruppen) è possibile creare i gruppi di costo

Il gruppo di costo corrisponde a un raggruppamento di più conti di costo che devono essere ripartiti insieme mediante una chiave di ripartizione comune.

Esempi di gruppi di costo:

- Gruppo di costo elettricità di rete

- Gruppo di costo elettricità locale

- Gruppo di costo costi di riscaldamento (calore e acqua calda sanitaria combinati)

- Gruppo di costo acqua fredda


![Configurazione VHKA Immotop2 – Figura 3](/img/schnittstellen-dta-vhka-files-immotop2/03.png)

![Configurazione VHKA Immotop2 – Figura 4](/img/schnittstellen-dta-vhka-files-immotop2/04.png)

Esempio del gruppo di costo per calore e produzione di acqua calda sanitaria che si sostengono reciprocamente

Pompa di calore con produzione di acqua calda sanitaria e resistenza elettrica (accoppiate)


Energia utilizzata: energia elettrica per entrambi
Funzione: l'acqua di riscaldamento attraversa il boiler per l'accumulo di calore

Gruppo di costo che viene creato:  

Costi di riscaldamento e acqua calda sanitaria
con chiave di ripartizione quota di calore tipo 09 secondo il per mille o il prezzo




Esempio per sistemi di calore e produzione di acqua calda sanitaria che non si sostengono reciprocamente

Riscaldamento a olio combustibile con boiler elettrico separato per l'acqua calda sanitaria


Energia utilizzata: energia elettrica per il boiler, olio combustibile per il riscaldamento
Funzione: nessun preriscaldamento dell'acqua calda sanitaria da parte del riscaldamento

Gruppi di costo che vengono creati:

Costi di riscaldamento
con chiave di ripartizione riscaldamento dei locali tipo 01 secondo il per mille o il prezzo

Costi dell'acqua calda sanitaria
con chiave di ripartizione acqua calda sanitaria separata tipo 02 secondo il per mille o il prezzo



### 3\. Assegnazione conti di costo – gruppi di costo

Nell'area "Assegnazione conti di costo – gruppi di costo" (Kostenkonten- Kostengruppen-Zuordnung) è ora possibile assegnare tutti i conti di costo rilevanti ai gruppi di costo.

A titolo di esempio, per i costi di riscaldamento e acqua calda sanitaria verrebbero collegati al gruppo di costo, ad esempio, i seguenti conti:

- Olio combustibile

- Gestione del riscaldamento

- Servizio del bruciatore

- Decalcificazione del boiler

- Elettricità boiler

- ...


![Configurazione VHKA Immotop2 – Figura 5](/img/schnittstellen-dta-vhka-files-immotop2/05.png)

### 4\. Spese accessorie dell'immobile

Nell'immobile, nella scheda "Spese accessorie" (Nebenkosten), è possibile aggiungere il LG-Gruppe-NK.

In questo punto vengono definite le chiavi di ripartizione fisse o variabili per il conteggio.

Chiavi di ripartizione
Le chiavi di ripartizione disponibili dipendono dalle chiavi di ripartizione attivate sotto Mandante --> Spese accessorie. Se le chiavi di ripartizione rilevanti non sono disponibili, è possibile definire chiavi di ripartizione aggiuntive sotto "Dati di base" (Basisdaten) --> "Definizioni delle chiavi di ripartizione" (Verteilschlüsseldefinitionen).

Esempi:

Nome: quota di riscaldamento secondo il consumo
Unità: per mille
Tipo: variabile
Serie ditta di lettura:
Calore totale (riscaldamento e acqua calda sanitaria insieme, 09)



Nome: elettricità di rete secondo i costi
Unità: CHF
Tipo: variabile
Serie ditta di lettura:
Elettricità (06)



Nome: elettricità solare secondo i costi
Unità: CHF
Tipo: variabile
Serie ditta di lettura:
Elettricità (06)





1.  Attivare la chiave di ripartizione sull'immobile


![Configurazione VHKA Immotop2 – Figura 6](/img/schnittstellen-dta-vhka-files-immotop2/06.png)

2\. Verificare le chiavi di ripartizione attivate

![Configurazione VHKA Immotop2 – Figura 7](/img/schnittstellen-dta-vhka-files-immotop2/07.png)

3\. Assegnare la chiave di ripartizione al gruppo di costo

![Configurazione VHKA Immotop2 – Figura 8](/img/schnittstellen-dta-vhka-files-immotop2/08.png)

### 6\. Esportare il file DTA-VHKA da Immotop2

Il file di scambio può essere creato al termine della configurazione sotto Elaborazione.

Nella configurazione è possibile definire con precisione quali oggetti dell'immobile devono essere interrogati. 

Nel caso normale è possibile interrogarli semplicemente tutti.

Importante: il formato standard QP (DTA-VKA) deve essere attivato.

![Configurazione VHKA Immotop2 – Figura 9](/img/schnittstellen-dta-vhka-files-immotop2/09.png)

![Configurazione VHKA Immotop2 – Figura 10](/img/schnittstellen-dta-vhka-files-immotop2/10.png)

![Configurazione VHKA Immotop2 – Figura 11](/img/schnittstellen-dta-vhka-files-immotop2/11.png)

### Eseguire la registrazione sui centri di costo in Immotop2

Se in Immotop2 sono necessarie registrazioni preliminari sui centri di costo, queste possono essere ricavate dal CSV riepilogativo di ogni fattura creata.

Di norma è il caso per l'elettricità solare, l'elettricità di rete e per i costi dell'elettricità della pompa di calore / del riscaldamento / del boiler.

Nella ripartizione dell'elettricità solare ciò sarà più spesso necessario, poiché l'origine di questa informazione risiede nel sistema smart-me.

Per gli altri centri di costo sono di norma disponibili fatture esterne che possono essere registrate.

1.  Accedi a smart-me Billing tramite la scheda Fatturazione (Rechnungsstellung)

2.  Seleziona l'immobile

3.  Seleziona il periodo di fatturazione e crea una fattura

4.  Quando la fattura del periodo desiderato è creata, apri il CSV riepilogativo


![Configurazione VHKA Immotop2 – Figura 12](/img/schnittstellen-dta-vhka-files-immotop2/12.png)

![Configurazione VHKA Immotop2 – Figura 13](/img/schnittstellen-dta-vhka-files-immotop2/13.png)

Al suo interno sono contenuti i rispettivi kWh e m3 venduti e il prezzo per tariffa, unità di conteggio e nel totale.

Con questo valore totale della rispettiva tariffa è possibile eseguire una registrazione in Immotop2 e poi ripartirla in modo corretto con il file DTA-VHKA in per mille.

## Definire le chiavi esterne con l'aiuto del file di richiesta

### 1\. Collegare il file DTA-VHKA con le chiavi esterne

1.  Aprire il file nell'editor

2.  Identificare i Costcenter
    Per ogni &lt;Costcenter> deve esistere una tariffa energetica in smart-me

    Es.:
    Tariffa acqua fredda: ID= 20
    Elettricità ore di punta: ID = 23
    Elettricità ore fuori punta: ID=24
    .
    Le tariffe possono essere combinate automaticamente inserendo lo stesso ID su più tariffe.


3.  Collegare i Costunit alle unità di conteggio
    Per ogni unità di conteggio in smart-me deve essere disponibile un ID dal file. &lt;CostUnit>&lt;Id> deve ora essere collegato all'appartamento tramite le chiavi esterne.

    Es.:
    Appartamento di 3 1/2 locali PT destra P2 (103-0.2) = ID 90
    Appartamento di 3 1/2 locali PT destra P1 = ID 91


![Configurazione VHKA Immotop2 – Figura 14](/img/schnittstellen-dta-vhka-files-immotop2/14.png)

### 2\. Collegare i Costcenter (gruppo di costo) alle tariffe

Per ogni &lt;Costcenter> deve esistere una tariffa energetica in smart-me

Es.:
Tariffa acqua fredda: ID= 20
Elettricità ore di punta: ID = 23
Elettricità ore fuori punta: ID=24



Le tariffe possono essere combinate automaticamente inserendo lo stesso ID su più tariffe.

Esempio centro di costo tariffa di rete combinata

- Assegnare lo stesso ID alle ore fuori punta e alle ore di punta, ad es. 23


![Configurazione VHKA Immotop2 – Figura 15](/img/schnittstellen-dta-vhka-files-immotop2/15.png)

![Configurazione VHKA Immotop2 – Figura 16](/img/schnittstellen-dta-vhka-files-immotop2/16.png)

### 3\. Collegare i Costunit alle unità di conteggio

Per ogni unità di conteggio in smart-me deve essere disponibile un ID dal file. &lt;CostUnit>&lt;Id> deve ora essere collegato all'appartamento tramite le chiavi esterne.



Si trova in fondo alla pagina di configurazione nel Billing.

![Configurazione VHKA Immotop2 – Figura 17](/img/schnittstellen-dta-vhka-files-immotop2/17.png)

### Condizioni generali per uno scambio riuscito

### Lista degli inquilini

- Poiché le liste degli inquilini sono gestite dal software Immotop2, lato smart-me all'importazione vengono registrati il contratto e anche gli sfitti e riportati negli indirizzi di fatturazione.



![Configurazione VHKA Immotop2 – Figura 18](/img/schnittstellen-dta-vhka-files-immotop2/18.png)

### Superfici abitabili

- Poiché attualmente le superfici abitabili non vengono riprese automaticamente dal software Immotop2, la superficie abitabile deve essere aggiornata e mantenuta lato smart-me.



![Configurazione VHKA Immotop2 – Figura 19](/img/schnittstellen-dta-vhka-files-immotop2/19.png)

### Configurazioni lato smart-me per l'indicazione del prezzo

- Affinché il prezzo possa essere calcolato, per ogni unità di conteggio deve essere indicata la superficie abitabile.

- VEWA deve essere attivato e configurato con le chiavi di ripartizione per i costi di base e i costi variabili per tipo di energia.

- Deve essere registrato un periodo di conteggio per ogni tipo di energia. I costi devono essere gestiti e per l'elettricità devono essere registrate tariffe valide.


![Configurazione VHKA Immotop2 – Figura 20](/img/schnittstellen-dta-vhka-files-immotop2/20.png)

### 7\. Caricare ed esportare il file DTA-VHKA in smart-me

![Configurazione VHKA Immotop2 – Figura 21](/img/schnittstellen-dta-vhka-files-immotop2/21.png)

![Configurazione VHKA Immotop2 – Figura 22](/img/schnittstellen-dta-vhka-files-immotop2/22.png)

1.  Nel Billing naviga su "Fatture" (Rechnungen) e poi nell'area "Esportare" (Exportieren)


2\. Seleziona il tipo di esportazione e carica il file tramite "Esportare" (Exportieren).

3\. Scarica il file integrato sul tuo computer tramite "Scaricare" (Herunterladen).

### 8\. Importare il file DTA-VHKA in Immotop2

![Configurazione VHKA Immotop2 – Figura 23](/img/schnittstellen-dta-vhka-files-immotop2/23.png)

![Configurazione VHKA Immotop2 – Figura 24](/img/schnittstellen-dta-vhka-files-immotop2/10.png)
