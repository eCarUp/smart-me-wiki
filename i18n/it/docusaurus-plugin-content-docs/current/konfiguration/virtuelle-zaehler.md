---
title: 'Contatori virtuali'
slug: '/konfiguration/virtuelle-zaehler'
description: 'Con i contatori virtuali è possibile eseguire operazioni matematiche su più contatori fisici.'
sidebar_label: 'Contatori virtuali'
---
<Menueweg>Contatori virtuali</Menueweg>

Con i contatori virtuali è possibile eseguire operazioni matematiche su più contatori fisici. Nella maggior parte dei casi questa funzione viene utilizzata in combinazione con lo smart-me Billing.

## Requisito

Per i contatori reali da cui si crea il contatore virtuale, così come per il contatore virtuale stesso, sono necessarie licenze Professional.

## Utilizzo

I contatori virtuali vengono utilizzati nel [Billing](/konfiguration/billing) per conteggiare la tariffa solare.

- In questo modo si calcola la somma di tutte le utenze (consumo totale nella tariffa solare).

- È possibile calcolare la somma di tutti gli impianti solari, se questi vengono misurati separatamente in un immobile.


Visualizzazioni

- Se in un immobile non è stato installato il contatore di bilancio, per singole [visualizzazioni](/konfiguration/visualisierung) può essere necessario calcolare il consumo totale.

- Se in un immobile sono presenti impianti solari misurati separatamente e si desidera una visualizzazione con il solare.


### Limitazione

Nel Billing i contatori virtuali non possono essere assegnati a un'unità di conteggio.

- I contatori virtuali possono essere utilizzati per le strutture tariffarie virtuali nel Billing, tuttavia non è consentito effettuare il conteggio con contatori calcolati virtualmente. Per questo motivo, nel Billing non viene proposta la selezione di un contatore virtuale.


## Creare un contatore virtuale

Per creare un contatore virtuale, procedi come segue:

- Accedi al [sito web](https://web.smart-me.com/login/) di smart-me.

- Clicca su Configurazione (Konfiguration)

- Seleziona Contatori virtuali (Virtuelle Zähler)

- Clicca su Aggiungi (Hinzufügen)

- Inserisci un nome per il contatore virtuale.

- Cliccando nel campo di testo Formula (Formel) vengono visualizzati tutti i contatori disponibili.

- Successivamente occorre inserire un operatore e confermarlo con Invio (ad es. "+")

- Aggiungi tutti i contatori desiderati e completali con un operatore adeguato.


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

La funzione Somma tutti i contatori di elettricità (Summiere alle Stromzähler) è utile quando si ha un ambiente con molti contatori. Consente di calcolare la somma di tutti i contatori.

- Inserisci un nome per il contatore virtuale.

- Alla voce Formula (Formel), seleziona la freccia verso il basso a destra.

- Seleziona Somma tutti i contatori di elettricità (Summieren alle Stromzähler).

- Se alcuni contatori (ad es. solare o bilancio) non sono necessari, devono essere rimossi. Occorre rimuovere i contatori e i relativi "+".


![Contatori virtuali – Figura 2](/img/konfiguration-virtuelle-zaehler/02.png)

### Aggiungere i contatori corretti al consumo totale virtuale

- Occorre assicurarsi che la somma dei contatori copra esattamente il 100% delle potenze prelevate.

- Per gli apparecchi in serie sono rilevanti solo quelli più vicini al sottoquadro di distribuzione o all'allacciamento dell'edificio. (Esempio: mobilità elettrica)
    Occorre fare attenzione che, se si fa riferimento alla partenza, le stazioni di ricarica a valle vengano rimosse dalla somma.


![Contatori virtuali – Figura 3](/img/konfiguration-virtuelle-zaehler/03.png)
