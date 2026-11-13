---
title: 'Differenze tra smart-me Billing e il fornitore di energia'
slug: '/stoerungsbehebung/differenzen-mit-dem-ew'
description: 'In questa sezione viene descritto un metodo uniforme per verificare se esiste una differenza tra la fattura del fornitore di energia e lo smart-me Billing.'
sidebar_label: 'Differenze con l''azienda elettrica'
---
In questa sezione viene descritto un metodo uniforme per verificare se esiste una differenza tra la fattura del fornitore di energia e lo smart-me Billing. 

## Metodo

Esistono due approcci per individuare l'errore. A seconda dei casi, l'uno o l'altro procedimento risulta più semplice.

- Lo smart-me Billing viene verificato nuovamente. Un eventuale errore di configurazione può portare a valori errati nello smart-me Billing.

- Si compila la tabella Excel. Il file Excel può essere scaricato qui: [Differenz zwischen EW und smart-me.xlsx](https://drive.google.com/uc?export=download&id=1b4uvue-a0Irjw-Qouv6sfw7xJB33-d3A) 


## Requisiti

1.  Il RCP (raggruppamento ai fini del consumo proprio) dispone di un contatore smart-me sul raccordo domestico (HAK)

2.  È disponibile una fattura dell'azienda elettrica relativa al consumo (prelievo) e alla rimunerazione (immissione) per un periodo di conteggio completo.


## Procedura per compilare il file Excel

1.  L'elenco viene compilato dall'alto verso il basso.

2.  I campi da compilare a mano sono contrassegnati in blu.

3.  Le righe verdi vanno poi verificate.


Nel file Excel sono presenti diversi punti di controllo.
L'errore va cercato sempre in corrispondenza del primo punto di controllo non soddisfatto. I punti di controllo sono infatti consequenziali.

Ogni punto di controllo ha uno scopo preciso:

- Differenza bilancio prelievo: qui si determina se il contatore di bilancio smart-me, per il consumo (prelievo), rientra nella tolleranza di misura dell'1% rispetto all'azienda elettrica.

- Differenza bilancio rimunerazione: qui si determina se il contatore di bilancio smart-me, per la rimunerazione (immissione), rientra nella tolleranza di misura dell'1% rispetto all'azienda elettrica.

- Bilancio vs. utenze secondarie: qui si verifica se le misurazioni secondarie e il contatore di bilancio smart-me rientrano nella tolleranza di misura dell'1%. Si tiene conto del consumo in standby dell'impianto fotovoltaico e di tutti i dispositivi smart-me.

- Lettura del contatore vs. contatori virtuali: qui si verifica se nello smart-me Billing ogni chilowattora misurato viene anche fatturato.

- Prelievo dalla rete azienda elettrica vs. smart-me Billing: qui si verifica se nello smart-me Billing le tariffe per le ore di punta, le ore fuori punta e la tariffa solare corrispondono alla fattura dell'azienda elettrica.

- Autoconsumo vs. smart-me Billing: qui si verifica se ogni chilowattora di energia fotovoltaica autoconsumata viene anche fatturato.


## Riserva

- Il file Excel è un modello guidato per la verifica delle differenze. smart-me non si assume alcuna responsabilità definitiva per il contenuto del file Excel.

- Il file Excel è ancora in versione beta ed è stato creato a fine estate 2023.

- Il file Excel attualmente non è in grado di verificare tutti i casi e potrebbe ancora contenere piccoli errori. Questi vengono corretti di continuo.


## Analisi smart-me

Se viene riscontrato un problema nel conteggio e si desidera che lo analizziamo, abbiamo bisogno delle seguenti informazioni:

- Dati di accesso all'account

- Fatture dell'azienda elettrica per il prelievo

- Rimunerazione dell'azienda elettrica


Nota: analizziamo soltanto impianti che rispettano il nostro schema di misura. Ciò significa che ogni produzione e ogni utenza, compreso il contatore di bilancio, devono essere misurate.
