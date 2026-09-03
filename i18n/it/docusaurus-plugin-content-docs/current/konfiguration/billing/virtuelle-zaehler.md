---
title: 'Contatori virtuali'
slug: '/konfiguration/billing/virtuelle-zaehler'
description: 'Con i contatori virtuali è possibile eseguire operazioni matematiche su più contatori fisici.'
sidebar_label: 'Contatori virtuali'
---
Con i contatori virtuali è possibile eseguire operazioni matematiche su più contatori fisici. Nella maggior parte dei casi questa funzione viene utilizzata in combinazione con smart-me Billing.

## Requisito

Sono necessarie licenze Professional sia per i contatori reali dai quali crei il contatore virtuale, sia per il contatore virtuale stesso.

## Scopo d'impiego

I contatori virtuali vengono utilizzati nel [Billing](/konfiguration/billing) per conteggiare la tariffa solare.

- In questo modo viene calcolata la somma di tutti i consumatori (consumo totale nella tariffa solare).

- È possibile calcolare la somma di tutti gli impianti solari, purché questi vengano misurati separatamente all'interno di un immobile.


Visualizzazioni

- Se in un immobile non è stato installato il contatore di bilancio, per singole [visualizzazioni](/konfiguration/visualisierung) può essere necessario calcolare il consumo totale.

- Se in un immobile sono presenti impianti solari misurati separatamente e si desidera una visualizzazione con il solare.


### Limitazione

Nel Billing i contatori virtuali non possono essere assegnati a un'unità di conteggio.

- I contatori virtuali possono essere utilizzati per le strutture tariffarie virtuali nel Billing, non è però consentito effettuare conteggi con contatori calcolati virtualmente. Per questo motivo nel Billing non viene proposta la scelta di un contatore virtuale.


## Creare un contatore virtuale

Per creare un contatore virtuale, procedi come segue:

- Accedi al [sito web](https://web.smart-me.com/login/) di smart-me.

- Clicca su Configurazione (Konfiguration)

- Seleziona Contatori virtuali (Virtuelle Zähler)

- Clicca su Aggiungi (Hinzufügen)

- Inserisci un nome per il contatore virtuale.

- Con un clic nel campo di testo della formula vengono visualizzati tutti i contatori disponibili.

- Successivamente occorre inserire un operatore e confermarlo con Enter (ad es. "+")

- Aggiungere tutti i contatori desiderati e completarli con il rispettivo operatore.


Nota: se il contatore virtuale viene creato come contatore del consumo totale per il Billing, consigliamo di assegnare il nome Consumo totale (Gesamtverbrauch).

![Contatori virtuali – Figura 1](/img/konfiguration-billing-virtuelle-zaehler/01.png)

### Operatori supportati

- () Parentesi

- + Più

- − Meno

- \* Moltiplicazione

- / Divisione

- abs() Valore assoluto


## Creare il contatore del consumo totale per la tariffa solare e la tariffa della batteria

La funzione Somma tutti i contatori elettrici (Summiere alle Stromzähler) è utile in presenza di un ambiente con molti contatori. Consente di formare la somma di tutti i contatori.

- Inserisci un nome per il contatore virtuale.

- In Formula (Formel) selezionare a destra la freccia verso il basso.

- Selezionare Somma tutti i contatori elettrici (Summieren alle Stromzähler).

- Se alcuni contatori (ad es. solare o bilancio) non sono necessari, devono essere rimossi. Vanno rimossi i contatori e i relativi "+".


![Contatori virtuali – Figura 2](/img/konfiguration-billing-virtuelle-zaehler/02.png)

### Aggiungere i contatori corretti al consumo totale virtuale

- Occorre fare attenzione che la somma dei contatori copra esattamente il 100% delle potenze prelevate.

- Nel caso di apparecchi in serie sono rilevanti solo quelli più vicini al sottoquadro di distribuzione o all'allacciamento domestico. (Esempio e-mobility)
    Va prestata attenzione a rimuovere dalla somma le stazioni di ricarica situate a valle, quando viene referenziata la partenza.


![Contatori virtuali – Figura 3](/img/konfiguration-billing-virtuelle-zaehler/03.png)
