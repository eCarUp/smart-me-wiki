---
title: 'Pianificazione dell''installazione'
slug: '/produkte/pico-ladestation/installationsplanung'
description: 'Pico può essere installata in diversi modi.'
sidebar_label: 'Pianificazione dell''installazione'
---
Pico può essere installata in diversi modi. Di seguito sono descritte le varianti più comuni con i rispettivi requisiti specifici.

![Pianificazione dell'installazione – Figura 1](/img/produkte-pico-ladestation-installationsplanung/01.png)

## Indicazioni generali per l'installazione

- Ogni Pico dispone di un rilevamento delle correnti di guasto continue secondo IEC62955. 

- Le stazioni di ricarica Pico con anno di costruzione 2024 o a partire dal numero di serie 7002702 dispongono di un RCD Typ-A integrato e conforme secondo IEC60947\-2.
    \- dal 2024 ovvero dal numero di serie 7002702 non è più necessario un RCD Typ-A in serie
    \- prima del 2024 o del numero di serie 7002702, per la conformità NIN è necessario un RCD Typ-A in serie a monte di ogni stazione di ricarica.

- Le stazioni di ricarica Pico sono in grado di gestire autonomamente e senza problemi correnti di cortocircuito di 3kA.
    Se più stazioni di ricarica sono collegate alla stessa partenza, è necessario utilizzare un interruttore magnetotermico sulla partenza.
    Il dispositivo di protezione contro le sovracorrenti deve essere dimensionato in base al potere di cortocircuito della partenza.
    In ogni caso si raccomandano varianti da almeno 6kA.

- Il dispositivo interno di protezione contro le sovracorrenti della stazione di ricarica Pico soddisfa i requisiti della IEC 61851-1.

- Adatta per:
    Installazioni con cavo piatto
    Installazioni con busbar
    Installazioni in entra-esci
    Installazioni su piedistallo

- Le partenze fino a max. 80A possono essere collegate direttamente senza ulteriori accorgimenti.


## Stazione di ricarica Pico dall'anno di costruzione 2024 e numero di serie 7002702

Tutte le stazioni di ricarica Pico a partire dal numero di serie 7002702 dispongono internamente di un RCD Typ-A secondo IEC 60947\-2 in combinazione con il rilevamento delle correnti di guasto continue secondo IEC62955.

### Installazione Pico su cavo piatto o con sistemi busbar

![Pianificazione dell'installazione – Figura 2](/img/produkte-pico-ladestation-installationsplanung/02.png)

Nota: 

La corrente di cortocircuito deve essere verificata solo sulla piastra di base Pico, non sull'uscita / Tipo 2 dell'apparecchio Pico.

### Installazione Pico in entra-esci interno o con piedistallo Pico Basic (212070-PL)

![Pianificazione dell'installazione – Figura 3](/img/produkte-pico-ladestation-installationsplanung/03.png)

### Installazione Pico con piedistallo Pico con coperchio di servizio (232070-PL)

![Pianificazione dell'installazione – Figura 4](/img/produkte-pico-ladestation-installationsplanung/04.png)

### Protezione contro i fulmini per installazioni esterne di infrastrutture di ricarica

- Per le installazioni su piedistallo rispettare assolutamente anche le NIN e le normative locali relative ai dispositivi di protezione contro i fulmini per installazioni esterne di infrastrutture di ricarica.
    NIN svizzere, capitolo: 5.3.4
    Norma Germania: VDE 0100-534 

- La Pico appartiene alla categoria di sovratensione 3 (4kV)

- Per le installazioni che richiedono un dispositivo di protezione contro i fulmini SPD tipo 2 occorre prevedere piedistalli con sportelli di servizio. Il dispositivo di protezione contro i fulmini può essere installato direttamente al loro interno.

- Il raggio d'azione di un SPD tipo 2 è di circa 10m.


Regole generali per la protezione contro i fulmini, stato 04.2025 

Per edifici senza protezione esterna contro i fulmini: (ad es. un sistema di captazione sul tetto)

Per gli apparecchi della categoria di sovratensione III è necessaria la protezione tramite un SPD tipo 2, in modo da non superare la tenuta alla tensione impulsiva degli apparecchi.

Per edifici con protezione esterna contro i fulmini: (ad es. un sistema di captazione sul tetto)
In questo caso l'installazione richiede una protezione contro i fulmini SPD tipo 1 e tipo 2, altrimenti esiste il rischio che, in caso di fulminazione del sistema di captazione, l'SPD tipo 2 venga distrutto.

## Download

[File ZIP con schema di collegamento e schema elettrico](https://drive.google.com/file/d/1aVOLmWprogy2OizkcyH3kHsHntu0A8-D/view?usp=share_link)

# FAQ

<details id="Pico-Ladestation-vor-BJ-2024-und-Seriennummer-7002702">
<summary>Stazione di ricarica Pico prima dell'anno di costruzione 2024 e del numero di serie 7002702</summary>

- Le stazioni di ricarica Pico prima dell'anno di costruzione 2024 o del numero di serie 7002702 dispongono di un rilevamento integrato delle correnti di guasto continue secondo IEC62955.

- Le stazioni di ricarica Pico prima dell'anno di costruzione 2024 o del numero di serie 7002702 dispongono di un rilevamento delle correnti di guasto per correnti alternate di tipo A (30mA) funzionante, ma non conforme al 100%

</details>

<details id="Pico-Installation-Flachbandkabel">
<summary>Installazione con cavo piatto</summary>

- RCD Typ-A 40A senza interruttore magnetotermico in serie a ogni stazione di ricarica Pico

- Un interruttore di protezione sulla partenza per la mobilità elettrica con posa resistente al cortocircuito (riquadro blu) è sufficiente per la selettività. (Documentazione estesa)

![Pianificazione dell'installazione – Figura 5](/img/produkte-pico-ladestation-installationsplanung/05.png)

</details>

<details id="Lastschutz-für-Ladestationsgruppenabsicherung-und-Zuleitung-bis-80A-pro-Phase">
<summary>Protezione contro le sovracorrenti per gruppi di stazioni di ricarica e linea di alimentazione fino a 80A per fase</summary>

La protezione contro le sovracorrenti sulla partenza per l'intero gruppo di ricarica dovrebbe avere la caratteristica C.
I comuni dispositivi di protezione con caratteristica B non sono adatti alle installazioni di stazioni di ricarica e tendono a intervenire troppo presto.

Per una partenza per la mobilità elettrica da 63A si raccomanda ad es. una protezione da 63A, tipo C, con potere di cortocircuito di 6kA o 10kA.

</details>

<details id="Lastschutz-für-Pico-Ladestationen-mit-Zuleitung-mehr-als-80A-pro-Phase">
<summary>Protezione contro le sovracorrenti per stazioni di ricarica Pico con linea di alimentazione superiore a 80A per fase</summary>

In caso di installazione di una stazione di ricarica Pico su un sistema busbar ad alta energia o con sezioni dei conduttori >35mm2 e correnti di fase > 80A, si raccomanda lato installazione una protezione contro le sovracorrenti per ogni stazione di ricarica.
La protezione interna della singola Pico è limitata a 3kA. Con linee di alimentazione ad alta energia questa capacità può risultare insufficiente.
In alternativa, il potere di cortocircuito del collegamento può naturalmente essere verificato tramite misurazione; se risulta inferiore a 3kA, una protezione aggiuntiva non è necessaria.

Se invece è necessaria una protezione aggiuntiva, si raccomanda un modello con corrente di intervento di 40A, caratteristica di intervento C e potere di cortocircuito di 6kA o 10kA.

</details>

<details id="Lastschutz-für-Pico-Ladestationen-mit-Zuleitung-mehr-als-80A-pro-Phase">
<summary>Protezione contro le sovracorrenti per stazioni di ricarica Pico con linea di alimentazione superiore a 80A per fase</summary>

In caso di installazione di una stazione di ricarica Pico su un sistema busbar ad alta energia o con sezioni dei conduttori >35mm2 e correnti di fase > 80A, si raccomanda lato installazione una protezione contro le sovracorrenti per ogni stazione di ricarica.
La protezione interna della singola Pico è limitata a 3kA. Con linee di alimentazione ad alta energia questa capacità può risultare insufficiente.
In alternativa, il potere di cortocircuito del collegamento può naturalmente essere verificato tramite misurazione; se risulta inferiore a 3kA, una protezione aggiuntiva non è necessaria.

Se invece è necessaria una protezione aggiuntiva, si raccomanda un modello con corrente di intervento di 40A, caratteristica di intervento C e potere di cortocircuito di 6kA o 10kA.

</details>

## Documentazione estesa e indicazioni specifiche per paese

[Svizzera: presa di posizione di Electrosuisse - Installazione di stazioni di ricarica per EV, più stazioni di ricarica su una linea di alimentazione comune](https://drive.google.com/file/d/1aquBK7Gip6DJxagCgB-_kwqEuozjCh07/view)
