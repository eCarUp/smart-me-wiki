---
title: 'Ingressi e uscite del contatore'
slug: '/schnittstellen/ein_und_ausgaenge'
description: 'Configurare ingressi e uscite'
sidebar_label: 'Ingressi e uscite'
---
## Configurare ingressi e uscite

I contatori smart-me dispongono di una o più uscite, che possono essere utilizzate come uscita a impulsi o come contatto a potenziale zero.  Di fabbrica, l'uscita S0\_0 è definita come uscita a impulsi e la S1 come uscita digitale a relè con il nome "Relè" ("Relais").

![Ingressi e uscite del contatore – Figura 1](/img/schnittstellen-ein_und_ausgaenge/01.png)

### Cablaggio esterno degli ingressi e delle uscite

Comandare E1 con segnale tariffario o distacco del carico

![Ingressi e uscite del contatore – Figura 2](/img/schnittstellen-ein_und_ausgaenge/02_EN.png)

Circuito con Telstar: accensione e spegnimento (S1 e S0) vanno cablati in modo identico

![Ingressi e uscite del contatore – Figura 3](/img/schnittstellen-ein_und_ausgaenge/03_EN.png)

### Uscita a impulsi

È possibile configurare l'uscita come uscita a impulsi. È possibile distinguere tra energia reattiva ed energia attiva.

Nota: non è possibile distinguere tra prelievo e fornitura. Viene sempre emesso il valore assoluto.

### Configurazione come contatto a potenziale zero

Se l'uscita è definita come contatto a potenziale zero, è possibile comandare qualsiasi apparecchio tramite il smart-me Cloud. Il comando può avvenire manualmente (on/off) o in modo automatizzato tramite [azioni basate su eventi](/konfiguration/wenndann-aktionen/ereignisaktionen) o [azioni se/allora](/konfiguration/wenndann-aktionen).

1.  Acceda al [sito web smart-me](https://web.smart-me.com/login/) o all'app smart-me

2.  Selezioni un contatore e clicchi su "Modifica" ("Editieren").

3.  Alla voce "Uscite" ("Ausgänge") selezioni l'uscita desiderata e la configuri come "Uscita digitale" ("Digitaler Ausgang")

    - Può assegnare all'uscita un nome a piacere.

    - Può definire un'azione da eseguire quando il contatore perde la connessione al smart-me Cloud.


NOTA:
La S1 può anche essere nascosta dalla visualizzazione impostandola come uscita a impulsi, se non viene utilizzata come uscita digitale.
Nella vista inquilino queste non possono essere attivate o disattivate, anche se vi sono visibili.

![Ingressi e uscite del contatore – Figura 4](/img/schnittstellen-ein_und_ausgaenge/04_EN.png)

### Vista online alla messa in servizio di un Telstar 80A o CT

![Ingressi e uscite del contatore – Figura 5](/img/schnittstellen-ein_und_ausgaenge/05_EN.png)

### Vista online dopo l'attivazione della S0\_0 come uscita digitale

![Ingressi e uscite del contatore – Figura 6](/img/schnittstellen-ein_und_ausgaenge/06_EN.png)

### Cablaggio delle uscite

Rispetti i valori massimi di tensione, corrente e potenza delle rispettive uscite. In modo semplificato, ciascuna delle uscite a potenziale zero può essere considerata come un interruttore non collegato. Affinché vi sia una funzione, deve essere possibile un circuito dal potenziale alto a quello basso.

Le uscite non forniscono di per sé alcun livello di tensione; è quindi necessario collegare a monte una sorgente di tensione.

Per circuiti a corrente alternata 230V:

- 230 VAC sul contatto "+" di S1

- Cablare il contatto "-" di S1 sull'ingresso "+" del circuito esterno.

- Infine collegare il "-" del circuito esterno al conduttore neutro. (Non è necessario collegare un carico ohmico)


Per circuiti a corrente continua:

- da + VDC sul contatto "+" di S1

- Cablare il contatto "-" di S1 sull'ingresso "+" del circuito esterno.

- Infine collegare il "-" del circuito esterno a GND.


![Ingressi e uscite del contatore – Figura 7](/img/schnittstellen-ein_und_ausgaenge/07.png)

\*A seconda del tipo di apparecchio

![Ingressi e uscite del contatore – Figura 8](/img/schnittstellen-ein_und_ausgaenge/08.png)

## Configurare l'ingresso

I contatori smart-me dispongono di un ingresso digitale che può essere utilizzato come ingresso tariffario o come normale ingresso digitale. Di fabbrica, questo ingresso è definito come ingresso tariffario. Se l'ingresso è configurato come ingresso digitale, può essere utilizzato come evento per comandare altri apparecchi o attivare allarmi.  Se l'ingresso è definito come ingresso tariffario, applicando una tensione il conteggio viene commutato dalla tariffa 1 alla tariffa 2.

### Configurazione come ingresso digitale

Per configurare un ingresso come ingresso digitale, proceda come segue:

1.  Acceda al [sito web smart-me](https://web.smart-me.com/login/) o all'app smart-me.

2.  Selezioni un contatore e clicchi su "Modifica" ("Editieren").

3.  Alla voce "Ingressi e uscite" ("Eingänge und Ausgänge") configuri l'ingresso come "Ingresso digitale" ("Digitaler Eingang")

    - Può assegnare all'ingresso un nome a piacere.

    - Può definire un testo da visualizzare quando l'ingresso è "On" ("Ein") o "Off" ("Aus").

4.  Ora vede l'ingresso digitale e il suo stato nell'app smart-me e sul portale web smart-me.


### Utilizzare l'ingresso digitale per i comandi

Può utilizzare l'ingresso digitale per commutare altri apparecchi o inviare allarmi. A tale scopo, nelle [azioni se/allora](/konfiguration/wenndann-aktionen/ereignisaktionen) è possibile definire l'evento "se" "Stato di commutazione" ("Schaltzustand").

### Cablare il collegamento

Per commutare il contatto a potenziale zero, è necessario applicare una tensione esterna e un potenziale (ad es. conduttore neutro). I rispettivi valori di tensione sono riportati nei dati tecnici dei singoli prodotti. 

Logica:
1 (High) = tensione secondo la scheda tecnica
0 (Low) = 0 Volt

Nota: con tensione continua occorre prestare attenzione alla polarità (E1+/E1-), mentre con tensione alternata questa non ha importanza.
