---
title: 'Ingressi e uscite del contatore'
slug: '/schnittstellen/ein_und_ausgaenge'
description: 'Configurare ingressi e uscite'
sidebar_label: 'Ingressi e uscite'
---
## Configurare ingressi e uscite

I smart-me Meter dispongono di una o più uscite, che possono essere utilizzate come uscita a impulsi o come contatto privo di potenziale.  Di fabbrica l'uscita S0\_0 è definita come uscita a impulsi e la S1 come uscita a relè digitale con il nome "Relais".

![Ingressi e uscite del contatore – Figura 1](/img/schnittstellen-ein_und_ausgaenge/01.png)

### Cablaggio esterno degli ingressi e delle uscite

Comandare E1 con segnale tariffario o distacco del carico

![Ingressi e uscite del contatore – Figura 2](/img/schnittstellen-ein_und_ausgaenge/02.png)

Il circuito per l'accensione e lo spegnimento con Telstar (S1 e S0) va cablato in modo identico

![Ingressi e uscite del contatore – Figura 3](/img/schnittstellen-ein_und_ausgaenge/03.png)

### Uscita a impulsi

È possibile configurare l'uscita come uscita a impulsi. Si può distinguere tra energia reattiva ed energia attiva.

Nota: non è possibile distinguere tra prelievo e fornitura. Viene sempre emesso il valore assoluto.

### Configurazione come contatto privo di potenziale

Se l'uscita viene definita come contatto privo di potenziale, è possibile comandare qualsiasi apparecchio tramite il cloud smart-me. Il comando può avvenire manualmente (on/off) oppure in modo automatizzato tramite [azioni basate su eventi](/konfiguration/wenndann-aktionen/ereignisaktionen) o [azioni se/allora](/konfiguration/wenndann-aktionen).

1.  Accedi al [sito web smart-me](https://web.smart-me.com/login/) o all'app smart-me

2.  Seleziona un contatore e clicca su "Modifica" (Editieren).

3.  Alla voce "Uscite" (Ausgänge) selezioni l'uscita desiderata e la configuri come "Uscita digitale" (Digitaler Ausgang)

    - Puoi assegnare all'uscita un nome a piacere.

    - Puoi definire un'azione da eseguire quando il contatore perde la connessione al cloud smart-me.


NOTA:
La S1 può anche essere nascosta dalla vista impostandola su uscita a impulsi, se non viene utilizzata come uscita digitale.
Nella vista inquilino queste non possono essere attivate o disattivate, anche se vi sono visibili.

![Ingressi e uscite del contatore – Figura 4](/img/schnittstellen-ein_und_ausgaenge/04.png)

### Vista online durante la messa in servizio di un Telstar 80A o CT

![Ingressi e uscite del contatore – Figura 5](/img/schnittstellen-ein_und_ausgaenge/05.png)

### Vista online dopo l'attivazione della S0\_0 come uscita digitale

![Ingressi e uscite del contatore – Figura 6](/img/schnittstellen-ein_und_ausgaenge/06.png)

### Cablaggio delle uscite

Rispetta i valori massimi di tensione, corrente e potenza delle rispettive uscite. In modo semplificato, ognuna delle uscite prive di potenziale può essere considerata come un interruttore non collegato. Affinché vi sia una funzione, deve essere reso possibile un circuito da potenziale alto a potenziale basso.

Le uscite non forniscono di per sé alcun livello di tensione, occorre quindi anteporre una sorgente di tensione.

Nei circuiti a corrente alternata 230V:

- 230 VAC sul contatto "+" della S1

- cablare il contatto "-" della S1 sull'ingresso "+" del circuito esterno.

- Infine collegare il "-" del circuito esterno al conduttore neutro. (Non deve essere collegato alcun carico ohmico)


Nei circuiti a corrente continua:

- da + VDC sul contatto "+" della S1

- cablare il contatto "-" della S1 sull'ingresso "+" del circuito esterno.

- Infine collegare il "-" del circuito esterno a GND.


![Ingressi e uscite del contatore – Figura 7](/img/schnittstellen-ein_und_ausgaenge/07.png)

\*A seconda del tipo di apparecchio

![Ingressi e uscite del contatore – Figura 8](/img/schnittstellen-ein_und_ausgaenge/08.png)

## Configurare l'ingresso

I smart-me Meter dispongono di un ingresso digitale che può essere utilizzato come ingresso tariffario o come normale ingresso digitale. Di fabbrica questo ingresso è definito come ingresso tariffario. Se l'ingresso viene configurato come ingresso digitale, può essere utilizzato come evento per comandare altri apparecchi o per attivare allarmi.  Se l'ingresso è definito come ingresso tariffario, applicando una tensione il conteggio passa dalla tariffa 1 alla tariffa 2.

### Configurazione come ingresso digitale

Per configurare un ingresso come ingresso digitale, procedi come segue:

1.  Accedi al [sito web smart-me](https://web.smart-me.com/login/) o all'app smart-me.

2.  Seleziona un contatore e clicca su "Modifica" (Editieren).

3.  Alla voce "Ingressi e uscite" (Eingänge und Ausgänge) configuri l'ingresso come "Ingresso digitale" (Digitaler Eingang)

    - Puoi assegnare all'ingresso un nome a piacere.

    - Puoi definire un testo da visualizzare quando l'ingresso è "On" (Ein) o "Off" (Aus).

4.  Ora vedi l'ingresso digitale e il suo stato nell'app smart-me e sul portale web smart-me.


### Utilizzare l'ingresso digitale per i comandi

Puoi utilizzare l'ingresso digitale per commutare altri apparecchi o inviare allarmi. A tale scopo, nelle [azioni se/allora](/konfiguration/wenndann-aktionen/ereignisaktionen) può essere definito l'evento se "Stato di commutazione" (Schaltzustand).

### Cablare il collegamento

Per commutare il contatto privo di potenziale occorre applicare una tensione esterna e un potenziale (ad es. conduttore neutro). I rispettivi valori di tensione sono riportati nei dati tecnici dei singoli prodotti. 

Logica:
1 (High) = tensione secondo la scheda tecnica
0 (Low) = 0 Volt

Nota: con la tensione continua occorre prestare attenzione alla polarizzazione (E1+/E1-), mentre con la tensione alternata questa non ha importanza.
