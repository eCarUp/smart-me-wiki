---
title: 'Ingressi e uscite del contatore'
slug: '/schnittstellen/ein-und-ausgaenge'
description: 'Configurare ingressi e uscite'
sidebar_label: 'Ingressi e uscite'
---
<Menueweg>Pannello di controllo → Dispositivo → Impostazioni (rotella)</Menueweg>

## Configurare ingressi e uscite

<div className="row">
<div className="col col--6">

I contatori smart-me dispongono di una o più uscite, che possono essere utilizzate come uscita a impulsi o come contatto a potenziale zero.  Di fabbrica, l'uscita S0\_0 è definita come uscita a impulsi e la S1 come uscita digitale a relè con il nome "Relè" ("Relais").

</div>
<div className="col col--6 text--center">

![Ingressi e uscite del contatore – Figura 1](/img/schnittstellen-ein-und-ausgaenge/01.png)

</div>
</div>

### Cablaggio esterno degli ingressi e delle uscite

Comandare E1 con segnale tariffario o distacco del carico

![Ingressi e uscite del contatore – Figura 2](/img/schnittstellen-ein-und-ausgaenge/02_EN.png)

Circuito con Telstar: accensione e spegnimento (S1 e S0) vanno cablati in modo identico

![Ingressi e uscite del contatore – Figura 3](/img/schnittstellen-ein-und-ausgaenge/03_EN.png)

### Uscita a impulsi

È possibile configurare l'uscita come uscita a impulsi. Si può distinguere tra energia reattiva ed energia attiva.

Nota: non è possibile distinguere tra prelievo e fornitura. Viene sempre emesso il valore assoluto.

### Configurazione come contatto a potenziale zero

Se l'uscita è definita come contatto a potenziale zero, è possibile comandare qualsiasi apparecchio tramite il cloud smart-me. Il comando può avvenire manualmente (on/off) oppure in modo automatico tramite [azioni basate su eventi](/konfiguration/wenndann-aktionen/ereignisaktionen) o [azioni se/allora](/konfiguration/wenndann-aktionen).

1.  Accedi al [sito web smart-me](https://web.smart-me.com/login/) o all'app smart-me

2.  Seleziona un contatore e clicca su "Modifica" ("Editieren").

3.  Alla voce "Uscite" ("Ausgänge") seleziona l'uscita desiderata e configurala come "Uscita digitale" ("Digitaler Ausgang")

    - Puoi assegnare all'uscita un nome a piacere.

    - Puoi definire un'azione da eseguire quando il contatore perde la connessione con il cloud smart-me.


NOTA:
Se non viene utilizzata come uscita digitale, la S1 può anche essere nascosta dalla visualizzazione impostandola come uscita a impulsi.
Nella vista inquilino queste uscite non possono essere attivate o disattivate, anche se vi sono visibili.

![Ingressi e uscite del contatore – Figura 4](/img/schnittstellen-ein-und-ausgaenge/04_EN.png)

### Vista online alla messa in servizio di un Telstar 80A o CT

![Ingressi e uscite del contatore – Figura 5](/img/schnittstellen-ein-und-ausgaenge/05_EN.png)

### Vista online dopo l'attivazione della S0\_0 come uscita digitale

![Ingressi e uscite del contatore – Figura 6](/img/schnittstellen-ein-und-ausgaenge/06_EN.png)

### Cablaggio delle uscite

Rispetta i valori massimi di tensione, corrente e potenza delle rispettive uscite. In modo semplificato, ciascuna delle uscite a potenziale zero può essere considerata come un interruttore non collegato. Affinché vi sia una funzione, deve essere reso possibile un circuito da un potenziale alto a uno basso.

Le uscite non forniscono di per sé alcun livello di tensione; è quindi necessario collegare a monte una sorgente di tensione.

Per circuiti a corrente alternata 230V:

- 230 VAC sul contatto "+" di S1

- Cablare il contatto "-" di S1 sull'ingresso "+" del circuito esterno.

- Infine collegare il "-" del circuito esterno al conduttore di neutro. (Non è necessario collegare un carico ohmico)


Per circuiti a corrente continua:

- da + VDC sul contatto "+" di S1

- Cablare il contatto "-" di S1 sull'ingresso "+" del circuito esterno.

- Infine collegare il "-" del circuito esterno a GND.


![Ingressi e uscite del contatore – Figura 7](/img/schnittstellen-ein-und-ausgaenge/07.png)

\*A seconda del tipo di dispositivo

![Ingressi e uscite del contatore – Figura 8](/img/schnittstellen-ein-und-ausgaenge/08.png)

## Configurare l'ingresso

I contatori smart-me dispongono di un ingresso digitale che può essere utilizzato come ingresso tariffario o come normale ingresso digitale. Di fabbrica, questo ingresso è definito come ingresso tariffario. Se l'ingresso è configurato come ingresso digitale, può essere utilizzato come evento per comandare altri apparecchi o attivare allarmi.  Se l'ingresso è definito come ingresso tariffario, applicando una tensione il conteggio viene commutato dalla tariffa 1 alla tariffa 2.

### Configurazione come ingresso digitale

Per configurare un ingresso come ingresso digitale, procedi come segue:

1.  Accedi al [sito web smart-me](https://web.smart-me.com/login/) o all'app smart-me.

2.  Seleziona un contatore e clicca su "Modifica" ("Editieren").

3.  Alla voce "Ingressi e uscite" ("Eingänge und Ausgänge") configura l'ingresso come "Ingresso digitale" ("Digitaler Eingang")

    - Puoi assegnare all'ingresso un nome a piacere.

    - Puoi definire un testo da visualizzare quando l'ingresso è "On" ("Ein") o "Off" ("Aus").

4.  Ora vedi l'ingresso digitale e il suo stato nell'app smart-me e sul portale web smart-me.


### Utilizzare l'ingresso digitale per i comandi

Puoi utilizzare l'ingresso digitale per commutare altri apparecchi o inviare allarmi. A tale scopo, nelle [azioni se/allora](/konfiguration/wenndann-aktionen/ereignisaktionen) è possibile definire l'evento "se" "Stato di commutazione" ("Schaltzustand").

### Cablare il collegamento

Per commutare il contatto a potenziale zero, è necessario applicare una tensione esterna e un potenziale (ad es. conduttore di neutro). I rispettivi valori di tensione sono riportati nei dati tecnici dei singoli prodotti. 

Logica:
1 (High) = tensione secondo la scheda tecnica
0 (Low) = 0 Volt

Nota: con la tensione continua occorre rispettare la polarità (E1+/E1-), mentre con la tensione alternata questa non ha importanza.
