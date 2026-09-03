---
title: 'Differenze tra smart-me Billing e il fornitore di energia'
slug: '/stoerungsbehebung/differenzen-mit-dem-ew'
description: 'In questa sezione viene descritta una metodologia uniforme per verificare se esiste una differenza tra la fattura del fornitore di energia e il conteggio di smart-me Billing.'
sidebar_label: 'Differenze con l''azienda elettrica'
---
In questa sezione viene descritta una metodologia uniforme per verificare se esiste una differenza tra la fattura del fornitore di energia e il conteggio di smart-me Billing.

## Metodologia

Esistono due approcci per individuare l'errore. A seconda dei casi, l'uno o l'altro procedimento risulta più semplice.

- Il conteggio di smart-me Billing viene verificato un'altra volta. In presenza di un errore di configurazione, questo può portare a valori errati in smart-me Billing.

- La tabella Excel viene compilata. L'Excel può essere scaricato qui: [Differenza tra azienda elettrica e smart-me.xlsx](https://drive.google.com/uc?export=download&id=1b4uvue-a0Irjw-Qouv6sfw7xJB33-d3A)


## Presupposti

1.  Il RCP (raggruppamento ai fini del consumo proprio) dispone di un contatore smart-me all'allacciamento domestico (HAK)

2.  È disponibile una fattura del consumo (prelievo) e della rimunerazione (immissione) da parte dell'azienda elettrica per un periodo di conteggio completo.


## Procedura per la compilazione dell'Excel

1.  L'elenco viene compilato dall'alto verso il basso.

2.  I campi da compilare a mano sono contrassegnati in blu.

3.  Le righe verdi devono poi essere verificate.


Nell'Excel sono presenti diversi punti di controllo.
L'errore deve essere cercato in corrispondenza del primo punto di controllo non soddisfatto. I punti di controllo si basano infatti l'uno sull'altro.

I punti di controllo hanno ciascuno uno scopo specifico:

- Differenza bilancio prelievo: qui si determina se il contatore di bilancio smart-me per il consumo (prelievo) rientra nella tolleranza di misura dell'1% rispetto all'azienda elettrica.

- Differenza bilancio rimunerazione: qui si determina se il contatore di bilancio smart-me per la rimunerazione (immissione) rientra nella tolleranza di misura dell'1% rispetto all'azienda elettrica.

- Bilancio vs. sottoutenze: qui si verifica se le sottomisure e il contatore di bilancio smart-me rientrano nella tolleranza di misura dell'1%. In questo contesto si tiene conto del consumo in standby dell'impianto fotovoltaico e di tutti i dispositivi smart-me.

- Lettura del contatore vs. contatori virtuali: qui si verifica se in smart-me Billing viene conteggiato ogni chilowattora misurato.

- Prelievo dalla rete azienda elettrica vs. smart-me Billing: qui si verifica se in smart-me Billing le tariffe ore di punta, ore fuori punta e solari corrispondono alla fattura dell'azienda elettrica.

- Autoconsumo vs. smart-me Billing: qui si verifica se viene conteggiato ogni chilowattora di energia fotovoltaica autoconsumata.


## Riserva

- L'Excel è un modello guidato per la verifica delle differenze. smart-me non risponde in via definitiva del contenuto dell'Excel.

- L'Excel è ancora in versione beta, è stato creato a fine estate 2023.

- Attualmente l'Excel non è in grado di verificare tutti i casi e in determinate circostanze può presentare ancora piccoli errori. Questi vengono corretti continuamente.


## Analisi smart-me

Se viene rilevato un problema nel conteggio e si desidera che lo analizziamo, ci occorrono le seguenti indicazioni:

- Dati di accesso all'account

- Fatture del prelievo dall'azienda elettrica

- Rimunerazione da parte dell'azienda elettrica

- Tabella Excel compilata
