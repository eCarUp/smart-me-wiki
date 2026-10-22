---
title: 'Configurazione VHKA Immotop2'
slug: '/schnittstellen/dta-vhka-files/immotop2'
description: 'Formati di file VHKA supportati da Immotop2'
sidebar_label: 'Configurazione VHKA Immotop2'
---
## Formati di file VHKA supportati da Immotop2

- Formato di file XML (standard DTA-VHKA)
    Interrogazioni per centro di costo:
    \- Letture del contatore in m3 o kWh per unità d'uso
    \- Valori in per mille per unità d'uso
    \- Prezzo per unità d'uso


## Indicazioni principali per il conteggio con Immotop2 e smart-me

- Il conteggio e la ripartizione dei costi secondo VEWA avvengono nel sistema smart.me.

- Ogni unità di conteggio in Immotop2 che si vuole interrogare deve esistere in modo congruente in smart-me

- Affinché il conteggio sia corretto, per ogni periodo di conteggio in Immotop2 devono essere registrati in tutte le unità i contratti di locazione e gli sfitti!

- Immotop2 supporta un solo periodo di conteggio per gruppo di spese accessorie, quindi l'elettricità deve essere conteggiata nello stesso periodo di tutte le altre spese accessorie.

- Lo specchietto degli inquilini di Immotop2 viene sincronizzato automaticamente con smart-me.


## Indicazioni di configurazione per Immotop2

Affinché Immotop2 e smart-me possano comunicare tra loro, le spese accessorie, i centri di costo e i gruppi di spese accessorie registrati devono corrispondere.

### Creazione delle chiavi di ripartizione necessarie in Immotop2

Affinché i centri di costo possano essere trasmessi correttamente, occorre innanzitutto assicurarsi che le chiavi necessarie siano disponibili sul mandante.

Nella scheda "Dati di base" ("Basisdaten") è possibile creare le relative chiavi di ripartizione in Definizioni delle chiavi di ripartizione (Verteilschlüssel-Definitionen).

Se i costi devono essere gestiti nel software Immotop2, è indicata la chiave di ripartizione Per mille.

Per l'elettricità prodotta localmente è indicata in primo luogo la chiave di ripartizione CHF. per tutti i casi.

Chiavi di ripartizione generalmente indicate:

- Centro di costo elettricità di rete: elettricità di rete secondo i costi in CHF

- Centro di costo elettricità solare: elettricità solare secondo i costi in CHF

- Centro di costo calore e acqua calda sanitaria combinati: quota di riscaldamento secondo il consumo in per mille

- Centro di costo calore: riscaldamento secondo il consumo in per mille

- Centro di costo acqua calda sanitaria: centro di costo acqua calda sanitaria secondo il consumo in per mille

![Configurazione VHKA Immotop2 – Figura 1](/img/schnittstellen-dta-vhka-files-immotop2/01.png)

![Configurazione VHKA Immotop2 – Figura 2](/img/schnittstellen-dta-vhka-files-immotop2/02.png)

### 1\. Creare il gruppo LG spese accessorie

Il presupposto per un conteggio è un mandante esistente con immobili creati.

Nella sezione "Gruppo LG SA" ("LG-Gruppe-NK") di ogni immobile o gruppo di immobili è possibile registrare un nuovo gruppo LG SA.
In esso vengono definiti i periodi di conteggio delle spese accessorie e gli immobili a cui si applica questo gruppo. 

- Più immobili possono condividere lo stesso gruppo LG SA, ma in tal caso tutti i costi degli immobili devono confluire su un unico conto dei costi.
    Gli immobili vengono gestiti insieme principalmente quando condividono il riscaldamento.


### 2\. Gruppi di costi (centri di costo)

<div className="row">
<div className="col col--5">

Nella sezione "Gruppi di costi" ("Kostengruppen") è possibile creare i gruppi di costi

Il gruppo di costi corrisponde a un raggruppamento di più conti dei costi che devono essere ripartiti insieme tramite una chiave di ripartizione comune.

Esempi di gruppi di costi:

- Gruppo di costi elettricità di rete

- Gruppo di costi elettricità locale

- Gruppo di costi spese di riscaldamento (calore e acqua calda sanitaria combinati)

- Gruppo di costi acqua fredda

</div>
<div className="col col--7 text--center">

![Configurazione VHKA Immotop2 – Figura 3](/img/schnittstellen-dta-vhka-files-immotop2/03.png)

![Configurazione VHKA Immotop2 – Figura 4](/img/schnittstellen-dta-vhka-files-immotop2/04.png)

</div>
</div>

Esempio del gruppo di costi per la produzione di calore e acqua calda sanitaria che si supportano a vicenda

Pompa di calore con produzione di acqua calda sanitaria e resistenza elettrica (accoppiate)


Energia utilizzata: energia elettrica per entrambi
Funzione: l'acqua di riscaldamento attraversa il boiler per l'accumulo di calore

Gruppo di costi da creare:  

Spese di riscaldamento e acqua calda sanitaria
con chiave di ripartizione quota di calore tipo 09 in per mille o prezzo




Esempio di sistemi di produzione di calore e acqua calda sanitaria che non si supportano a vicenda

Riscaldamento a olio con boiler elettrico separato per l'acqua calda sanitaria


Energia utilizzata: energia elettrica per il boiler, olio per il riscaldamento
Funzione: nessun preriscaldamento dell'acqua calda sanitaria da parte del riscaldamento

Gruppi di costi da creare:

Spese di riscaldamento
con chiave di ripartizione riscaldamento ambienti tipo 01 in per mille o prezzo

Spese per l'acqua calda sanitaria
con chiave di ripartizione acqua calda sanitaria separata tipo 02 in per mille o prezzo



### 3\. Assegnazione conti dei costi - gruppi di costi

Nella sezione "Assegnazione conti dei costi - gruppi di costi" ("Kostenkonten- Kostengruppen-Zuordnung") è ora possibile assegnare tutti i conti dei costi rilevanti ai gruppi di costi.

A titolo di esempio, per le spese di riscaldamento e acqua calda sanitaria verrebbero collegati al gruppo di costi p. es. i seguenti conti:

- Olio combustibile

- Gestione del riscaldamento

- Servizio bruciatore

- Decalcificazione boiler

- Elettricità boiler

- ...


![Configurazione VHKA Immotop2 – Figura 5](/img/schnittstellen-dta-vhka-files-immotop2/05.png)

### 4\. Spese accessorie dell'immobile

Sull'immobile, nella scheda "Spese accessorie" ("Nebenkosten"), è possibile aggiungere il gruppo LG SA.

In questo punto vengono definite le chiavi di ripartizione fisse o variabili per il conteggio.

Chiavi di ripartizione
Le chiavi di ripartizione disponibili dipendono dalle chiavi di ripartizione attivate in Mandante --> Spese accessorie (Mandant --> Nebenkosten). Se le chiavi di ripartizione rilevanti non sono disponibili, è possibile definire chiavi di ripartizione aggiuntive in "Dati di base" ("Basisdaten") --> "Definizioni delle chiavi di ripartizione" ("Verteilschlüsseldefinitionen").

Esempi:

Nome: Quota di riscaldamento secondo il consumo
Unità: per mille
Tipo: variabile
Record ditta di lettura:
Calore totale (riscaldamento e acqua calda sanitaria insieme, 09)



Nome: Elettricità di rete secondo i costi
Unità: CHF
Tipo: variabile
Record ditta di lettura:
Elettricità (06)



Nome: Elettricità solare secondo i costi
Unità: CHF
Tipo: variabile
Record ditta di lettura:
Elettricità (06)





1.  Attivare le chiavi di ripartizione sull'immobile


![Configurazione VHKA Immotop2 – Figura 6](/img/schnittstellen-dta-vhka-files-immotop2/06.png)

2\. Verificare le chiavi di ripartizione attivate

![Configurazione VHKA Immotop2 – Figura 7](/img/schnittstellen-dta-vhka-files-immotop2/07.png)

3\. Assegnare le chiavi di ripartizione al gruppo di costi

![Configurazione VHKA Immotop2 – Figura 8](/img/schnittstellen-dta-vhka-files-immotop2/08.png)

### 6\. Esportare il file DTA-VHKA da Immotop2

Al termine della configurazione, il file di scambio può essere creato in Elaborazione (Verarbeitung).

Nella configurazione è possibile definire con precisione quali oggetti dell'immobile devono essere interrogati. 

Normalmente si possono semplicemente interrogare tutti.

Importante: il formato standard QP (DTA-VKA) deve essere attivato.

![Configurazione VHKA Immotop2 – Figura 9](/img/schnittstellen-dta-vhka-files-immotop2/09.png)

![Configurazione VHKA Immotop2 – Figura 10](/img/schnittstellen-dta-vhka-files-immotop2/10.png)

![Configurazione VHKA Immotop2 – Figura 11](/img/schnittstellen-dta-vhka-files-immotop2/11.png)

### Eseguire la registrazione sui centri di costo in Immotop2

Se in Immotop2 sono necessarie registrazioni preliminari sui centri di costo, queste possono essere ricavate dal CSV di riepilogo di ogni fattura creata.

Di solito è il caso per l'elettricità solare, l'elettricità di rete e i costi dell'elettricità di pompa di calore / riscaldamento / boiler.

Per la ripartizione dell'elettricità solare ciò sarà necessario più spesso, poiché l'origine di questa informazione si trova nel sistema smart-me.

Per gli altri centri di costo sono di solito disponibili fatture esterne che possono essere registrate.

1.  Accedi a smart-me Billing tramite la scheda Fatturazione (Rechnungsstellung)

2.  Seleziona l'immobile

3.  Seleziona il periodo di fatturazione e crea una fattura

4.  Quando la fattura del periodo corrispondente è creata, apri il CSV di riepilogo (Zusammenfassung CSV)


![Configurazione VHKA Immotop2 – Figura 12](/img/schnittstellen-dta-vhka-files-immotop2/12.png)

![Configurazione VHKA Immotop2 – Figura 13](/img/schnittstellen-dta-vhka-files-immotop2/13.png)

Al suo interno si trovano i kWh e m3 venduti e il prezzo per tariffa, per unità di conteggio e in totale.

Con questo valore totale della rispettiva tariffa è possibile effettuare una registrazione in Immotop2, che viene poi ripartita correttamente in per mille con il file DTA-VHKA.

## Definire le chiavi esterne con l'aiuto del file di richiesta

### 1\. Collegare il file DTA-VHKA con le chiavi esterne

1.  Aprire il file in un editor

2.  Identificare i costcenter
    Per ogni &lt;Costcenter> deve esistere in smart-me una tariffa energetica

    Es.:
    Tariffa acqua fredda: ID= 20
    Elettricità ore di punta: ID = 23
    Elettricità ore fuori punta: ID=24
    .
    Le tariffe possono essere combinate automaticamente inserendo lo stesso ID per più tariffe.


3.  Collegare le costunit con le unità di conteggio
    Per ogni unità di conteggio in smart-me deve essere disponibile un ID dal file. &lt;CostUnit>&lt;Id> deve ora essere collegato all'appartamento tramite le chiavi esterne.

    Es.:
    Appartamento di 3 1/2 locali PT destra P2 (103-0.2) = ID 90
    Appartamento di 3 1/2 locali PT destra P1 = ID 91


![Configurazione VHKA Immotop2 – Figura 14](/img/schnittstellen-dta-vhka-files-immotop2/14.png)

### 2\. Collegare i costcenter (gruppo di costi) con le tariffe

Per ogni &lt;Costcenter> deve esistere in smart-me una tariffa energetica

Es.:
Tariffa acqua fredda: ID= 20
Elettricità ore di punta: ID = 23
Elettricità ore fuori punta: ID=24



Le tariffe possono essere combinate automaticamente inserendo lo stesso ID per più tariffe.

Esempio centro di costo tariffa di rete combinata

- Assegnare lo stesso ID alle ore fuori punta e alle ore di punta, p. es. 23


![Configurazione VHKA Immotop2 – Figura 15](/img/schnittstellen-dta-vhka-files-immotop2/15.png)

![Configurazione VHKA Immotop2 – Figura 16](/img/schnittstellen-dta-vhka-files-immotop2/16.png)

### 3\. Collegare le costunit con le unità di conteggio

Per ogni unità di conteggio in smart-me deve essere disponibile un ID dal file. &lt;CostUnit>&lt;Id> deve ora essere collegato all'appartamento tramite le chiavi esterne.



Si trova in fondo alla pagina di configurazione in Billing.

![Configurazione VHKA Immotop2 – Figura 17](/img/schnittstellen-dta-vhka-files-immotop2/17.png)

### Condizioni generali per uno scambio riuscito

### Specchietto degli inquilini

- Poiché gli specchietti degli inquilini sono gestiti dal software Immotop2, durante l'importazione smart-me registra il contratto e anche gli sfitti e li riporta negli indirizzi di fatturazione.



![Configurazione VHKA Immotop2 – Figura 18](/img/schnittstellen-dta-vhka-files-immotop2/18.png)

### Superfici abitative

<div className="row">
<div className="col col--6">

- Poiché attualmente le superfici abitative non vengono riprese automaticamente dal software Immotop2, la superficie abitativa deve essere mantenuta aggiornata in smart-me.

</div>
<div className="col col--6 text--center">

![Configurazione VHKA Immotop2 – Figura 19](/img/schnittstellen-dta-vhka-files-immotop2/19.png)

</div>
</div>

### Configurazioni in smart-me per l'output dei prezzi

- Affinché il prezzo possa essere calcolato, per ogni unità di conteggio deve essere indicata la superficie abitativa.

- VEWA deve essere attivato e configurato con le chiavi di ripartizione per i costi fissi e variabili per tipo di energia.

- Per ogni tipo di energia deve essere registrato un periodo di conteggio. I costi devono essere gestiti e per l'elettricità devono essere registrate tariffe valide.


![Configurazione VHKA Immotop2 – Figura 20](/img/schnittstellen-dta-vhka-files-immotop2/20.png)

### 7\. Caricare ed esportare il file DTA-VHKA in smart-me

![Configurazione VHKA Immotop2 – Figura 21](/img/schnittstellen-dta-vhka-files-immotop2/21.png)

![Configurazione VHKA Immotop2 – Figura 22](/img/schnittstellen-dta-vhka-files-immotop2/22.png)

1.  In Billing, vai su "Fatture" ("Rechnungen") e poi nella sezione "Esporta" ("Exportieren")


2\. Seleziona il tipo di esportazione e carica il file tramite "Esporta" ("Exportieren").

3\. Scarica il file completato sul tuo computer tramite "Scarica" ("Herunterladen").

### 8\. Importare il file DTA-VHKA in Immotop2

![Configurazione VHKA Immotop2 – Figura 23](/img/schnittstellen-dta-vhka-files-immotop2/23.png)

![Configurazione VHKA Immotop2 – Figura 24](/img/schnittstellen-dta-vhka-files-immotop2/10.png)
