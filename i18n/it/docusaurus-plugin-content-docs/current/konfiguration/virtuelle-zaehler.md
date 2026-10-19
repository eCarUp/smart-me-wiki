---
title: 'Contatori virtuali'
slug: '/konfiguration/virtuelle-zaehler'
description: 'Con i contatori virtuali è possibile eseguire operazioni matematiche su più contatori fisici.'
sidebar_label: 'Contatori virtuali'
---
Con i contatori virtuali è possibile eseguire operazioni matematiche su più contatori fisici. Nella maggior parte dei casi vengono utilizzati in combinazione con smart-me Billing.

## Requisito

Sono necessarie licenze Professional sia per i contatori reali da cui crea il contatore virtuale, sia per il contatore virtuale stesso.

## Scopo d'uso

I contatori virtuali vengono utilizzati nel [Billing](/konfiguration/billing) per conteggiare la tariffa solare.

- In questo modo si calcola la somma di tutte le utenze (consumo totale nella tariffa solare).

- È possibile calcolare la somma di tutti gli impianti solari, se in un immobile questi vengono misurati separatamente.


Visualizzazioni

- Se in un immobile non è stato installato il contatore di bilancio, per singole [visualizzazioni](/konfiguration/visualisierung) può essere necessario calcolare il consumo totale.

- Se in un immobile sono presenti impianti solari misurati separatamente e si desidera una visualizzazione con il solare.


### Limitazione

Nel Billing i contatori virtuali non possono essere assegnati a un'unità di conteggio.

- I contatori virtuali possono essere utilizzati per le strutture tariffarie virtuali nel Billing, tuttavia non è consentito effettuare il conteggio con contatori calcolati virtualmente. Per questo motivo, nel Billing non viene proposta la selezione di un contatore virtuale.


## Creare un contatore virtuale

Per creare un contatore virtuale, proceda come segue:

- Effettui l'accesso al [sito web](https://web.smart-me.com/login/) di smart-me.

- Clicchi su Configurazione (Konfiguration)

- Selezioni Contatori virtuali (Virtuelle Zähler)

- Clicchi su Aggiungi (Hinzufügen)

- Inserisca un nome per il contatore virtuale.

- Cliccando nel campo di testo Formula (Formel) vengono visualizzati tutti i contatori disponibili.

- Successivamente occorre inserire un operatore e confermarlo con Invio (ad es. "+")

- Aggiunga tutti i contatori desiderati e li completi con l'operatore corrispondente.


Nota: se il contatore virtuale viene creato come contatore del consumo totale per il Billing, consigliamo di assegnargli il nome Consumo totale (Gesamtverbrauch).

![Contatori virtuali – Figura 1](/img/konfiguration-virtuelle-zaehler/01.png)

### Operatori supportati

- () Parentesi

- + Più

- − Meno

- \* Moltiplicazione

- / Divisione

- abs() Valore assoluto


## Creare un contatore del consumo totale per la tariffa solare e la tariffa batteria

La funzione Somma tutti i contatori elettrici (Summiere alle Stromzähler) è utile quando si ha a che fare con un ambiente con molti contatori. Consente di calcolare la somma di tutti i contatori.

- Inserisca un nome per il contatore virtuale.

- Alla voce Formula (Formel) selezioni la freccia verso il basso a destra.

- Selezioni Somma tutti i contatori elettrici (Summieren alle Stromzähler).

- Se alcuni contatori (ad es. solare o di bilancio) non sono necessari, devono essere rimossi. Occorre rimuovere i contatori e i relativi "+".


![Contatori virtuali – Figura 2](/img/konfiguration-virtuelle-zaehler/02.png)

### Aggiungere i contatori corretti al consumo totale virtuale

- Occorre fare attenzione che la somma dei contatori copra esattamente il 100% delle potenze prelevate.

- Nel caso di apparecchi in serie sono rilevanti solo gli apparecchi più vicini alla sottodistribuzione o all'allacciamento dell'edificio. (Esempio: mobilità elettrica)
    Occorre fare attenzione che, se si fa riferimento alla partenza, le stazioni di ricarica che si trovano a valle vengano rimosse dalla somma.


![Contatori virtuali – Figura 3](/img/konfiguration-virtuelle-zaehler/03.png)
