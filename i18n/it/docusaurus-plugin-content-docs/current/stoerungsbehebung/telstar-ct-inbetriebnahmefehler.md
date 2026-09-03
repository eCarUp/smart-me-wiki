---
title: 'Errori di messa in servizio del Telstar CT'
slug: '/stoerungsbehebung/telstar-ct-inbetriebnahmefehler'
description: 'Questa pagina descrive gli errori più frequenti che possono verificarsi durante la messa in servizio del Telstar CT.'
sidebar_label: 'Errori di messa in servizio Telstar CT'
---
Questa pagina descrive gli errori più frequenti che possono verificarsi durante la messa in servizio del Telstar CT. Viene spiegato come verificare ed eliminare questi errori.

## La potenza non corrisponde a quella del contatore dell'azienda elettrica.

Per la risoluzione dei problemi segui i punti riportati di seguito.

### 1\. Verifica il rapporto di trasformazione

Questo approccio va considerato soprattutto quando il valore misurato è inferiore di fattori interi (ad es. valore effettivo: 4W, valore atteso: 240W (fattore 60))

- Soluzione: nel portale smart-me -> selezionare il contatore -> cliccare sulla rotella -> Impostazioni generali (Allgemeine Einstellungen) -> inserire il rapporto e salvare.

- smart-me consiglia di impostare il rapporto di trasformazione secondo l'indicazione riportata sul trasformatore, ad es. 300A/5A --> 300:5

- Importante: i dati storici non vengono adeguati. 


### 2\. Verifica se lo scostamento tra il contatore dell'azienda elettrica e il contatore smart-me è minore o uguale al 2%.

Questo approccio va considerato soprattutto quando i consumi dei due contatori sono relativamente vicini tra loro.

I nostri apparecchi hanno una precisione di misura dell'1% secondo lo standard MID. A ciò si aggiunge lo scostamento del trasformatore di 0,5-1%. Questi scostamenti sono ammessi nella classe di precisione B. Per determinare una differenza massima ammessa in base alle tolleranze consentite, si può applicare la seguente regola empirica.

Regola empirica: differenza massima ammessa \[kWh\] = energia del contatore dell'azienda elettrica \* (errore di misura Telstar CT in % + errore di misura del trasformatore in %)

Esempio:
Contatore dell'azienda elettrica: consumo 1000kWh
Telstar CT: consumo 992kWh

differenza massima ammessa \[kWh\] = energia del contatore dell'azienda elettrica \* (errore di misura Telstar CT in % + errore di misura del trasformatore in %) = 1000kWh \* (0.01 + 0.01) = 20kWh

Il valore misurato dal Telstar CT può situarsi nell'intervallo di 1000kWh +/- 20kWh; con 992kWh corrisponde quindi all'errore atteso

Attenzione: il consumo dipende dalla durata della misurazione. Per la stima di cui sopra si deve scegliere per entrambi i contatori lo stesso periodo in cui l'energia è stata consumata.  La lettura del contatore dell'azienda elettrica non deve necessariamente essere uguale a quella del Telstar CT. 

### 3\. Verifica se i morsetti della morsettiera di misura sono chiusi.

Questo approccio va considerato soprattutto quando le potenze risultano sospettosamente basse (metà della potenza attesa o meno).

- In alcuni progetti, dopo l'installazione, si dimentica per errore di rimuovere il cortocircuito sul lato della morsettiera di misura.
    I morsetti non chiusi sulla morsettiera di misura consentono comunque un piccolo flusso di corrente, che viene misurato dal contatore ma non corrisponde al corretto rapporto di partizione. (Collegamento in parallelo nella morsettiera di misura verso il punto di misura nel contatore)


### 4\. Verifica se il trasformatore dispone di un ponticello di cortocircuito.

Questo approccio va considerato soprattutto quando le potenze risultano sospettosamente basse (metà della potenza attesa o meno).

- Alcuni trasformatori, come ad es. l'SRT01605A di Hager, sono dotati di ponticelli di cortocircuito che devono essere rimossi dopo il montaggio e il cablaggio dei trasformatori, come descritto nelle istruzioni per l'uso.


![Errori di messa in servizio del Telstar CT – Figura 1](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/01.png)

### 5\. Verifica il senso del flusso dei trasformatori di corrente.

Questo approccio si segue soprattutto quando le potenze di fase risultano negative, pur non essendo ciò atteso.

Tutti i trasformatori hanno un senso del flusso, contrassegnato da una freccia.

1.  La punta della freccia è sempre rivolta verso: 


- Utilizzatori e accumulatori: appartamenti, e-mobility, riscaldamenti e batterie

- Produttori: inverter solari e generatori


Il retro della freccia (piatto) è sempre rivolto verso:

- Rete: allacciamento alla rete, distribuzione o quadro di distribuzione dell'edificio



2.  All'ingresso "I IN" si collega il positivo del trasformatore e all'"I OUT" il negativo del trasformatore della rispettiva fase.




Ciò che corrisponde alle attese:

- Sul contatore del fotovoltaico devi trovare correnti e potenze negative durante la produzione. 
    Se in quel momento non si sta producendo attivamente, di regola si trovano correnti e potenze positive. (Questa situazione non è però univoca)

- I contatori di puro consumo presentano esclusivamente segni positivi per correnti e potenze.

- Il contatore di bilancio può presentare, a seconda della situazione, segni differenti per ogni fase. 

    - In caso di prelievo questi sono normalmente positivi (impianto solare SPENTO per il test)

    - In caso di immissione questi sono normalmente negativi (impianto solare ACCESO per il test; sono possibili scostamenti sulle singole fasi)

    - La potenza totale del bilancio deve però corrispondere alla produzione + il consumo.
        (Verificare tramite il profilo di carico o tramite la visualizzazione "Energiefluss Einfach" (flusso di energia semplice). Inserire solo il contatore del fotovoltaico e il consumo totale per calcolare artificialmente il bilancio, poi confrontare i valori nella visualizzazione con la potenza attiva del contatore di bilancio)


![Errori di messa in servizio del Telstar CT – Figura 2](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/02.png)

![Errori di messa in servizio del Telstar CT – Figura 3](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/03.png)

### 6\. Verifica gli sfasamenti con il valore Cos Phi per ogni fase

Se il valore Cos Phi di più fasi si trova costantemente sotto il valore di 0,5, esiste la possibilità di una tensione di fase scambiata.

Il contatore misura allora sull'ingresso U fase 1 la tensione di L1, ma I IN e I OUT della fase 1 misurano la corrente di L2.

Da ricordare: se una fase è scambiata, sono sempre due le fasi scambiate!

Questo porta a valori Cos Phi intorno al valore da 0 a 0,6 (tendenza sotto 0,5)

- Verifica che i collegamenti di tutte le tensioni e correnti siano cablati correttamente.

- Verifica il senso del flusso dei trasformatori


Se questi numeri sembrano buoni e sono tutti ben oltre 0,5 e hai già eseguito tutti i passaggi precedenti, resta come ultima opzione la verifica delle potenze reattive. Questa riguarda scambi multipli di sensi del flusso e di collegamenti.

![Errori di messa in servizio del Telstar CT – Figura 4](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/04.png)

### 7\. Verifica i registri di potenza reattiva del contatore

Se i valori misurati continuano ad apparire non credibili, è possibile che siano stati scambiati le prese di tensione e la misura di corrente. Un'indicazione in tal senso ci può essere fornita dai registri di potenza reattiva.

Supponendo che due tensioni di fase siano state portate sugli ingressi sbagliati e che, inoltre, singoli trasformatori siano stati collegati con senso del flusso errato, l'analisi sui dati di potenza attiva diventa molto difficile, fin quasi impossibile.

Per visualizzare questi registri di energia reattiva, la misurazione deve essere attivata. Attivazione della misura dell'energia reattiva: selezionare il contatore --> Configurazione hardware (Hardwarekonfiguration) (rotelle) --> Impostazioni generali (Allgemeine Einstellungen) --> Attivare energia reattiva (Blindenergie aktivieren) (Sì)

Considerando una casa unifamiliare/plurifamiliare con impianto solare, nella maggior parte dei casi l'ordine delle letture dei quadranti dovrebbe essere il seguente:

- Q1: prelievo di energia reattiva induttiva:
    motori, ventilazioni
    \--> valori elevati (molto più alti di Q2) 

- Q2. immissione di energia reattiva induttiva:
    generatori a corrente trifase come generatori diesel o pale eoliche
    \--> valore più basso di tutti 

- Q3: immissione di energia reattiva capacitiva:
    produttori come impianti fotovoltaici, batterie o stazioni di ricarica bidirezionali
    (la produzione deve però già essere avvenuta)
    \--> valore elevato (molto più alto di Q2, spesso anche di Q1) 

- Q4: prelievo di energia reattiva capacitiva:
    sistemi di accumulo, inverter, impianti di compensazione, veicoli elettrici, carichi negli appartamenti
    \--> valori da medi a elevati (molto più alti di Q2, spesso anche di Q1) 


Q1 e Q4 sono difficili da valutare senza conoscenze più precise. In una casa plurifamiliare con impianto solare è però facile valutare Q2 e Q3. Se l'andamento non presenta la tendenza dell'esempio di cui sopra con Q2 e Q3, probabilmente si è in presenza di quanto segue:

- Almeno una tensione e corrente scambiate

- Almeno un trasformatore con senso del flusso errato o cavi incrociati verso il contatore


Possibili fonti di errore:

- Senso del flusso di montaggio dei trasformatori

- Scambio delle prese dei trasformatori

- Cablaggio errato sulla morsettiera di misura

- Prelievo errato dalla morsettiera di misura

- Cablaggio errato all'arrivo sul contatore (I IN / I OUT)


![Errori di messa in servizio del Telstar CT – Figura 5](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/05.png)

Esempio di un contatore di bilancio di una grande casa plurifamiliare con impianto solare
\+ e-mobility

![Errori di messa in servizio del Telstar CT – Figura 6](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/06.png)

Esempio di un contatore di bilancio in una casa unifamiliare con impianto solare

### 8\. Verifica i connettori e le resistenze di linea dell'uscita del trasformatore

Questo approccio va considerato quando i segni delle potenze e delle correnti sono corretti, ma il valore delle correnti risulta innaturalmente basso.

- Ogni trasformatore ha una potenza di uscita in voltampere S \[VA\]

- Le resistenze di linea non devono essere maggiori di quanto consenta il flusso della corrente secondaria massima con la potenza disponibile.


Formula:  resistenza di linea max. R = S / corrente secondaria I^2

Esempio: trasformatore 200A / 5A con 1VA di potenza di uscita

R max. = 1VA/(5A\*5A) = 0.04 Ohm

Di conseguenza la resistenza misurata tra il collegamento positivo e negativo del trasformatore non deve essere maggiore di 0.04 Ohm.
Non deve nemmeno risultare troppo al limite: la resistenza in corrente alternata a 50Hz è leggermente più alta della resistenza in corrente continua.

Nota: 

- La misurazione deve avvenire con il trasformatore rimosso!
    Altrimenti si misura la resistenza di linea della bobina del trasformatore e non quella di andata e ritorno.


Cosa posso fare se la resistenza di linea risulta troppo elevata?

1.  Controllare tutti i connettori, serrarli di nuovo e misurare un'altra volta.

2.  Aumentare la sezione dei conduttori (di norma 2.5mm2)

3.  Accorciare i conduttori

4.  Sostituire il trasformatore con uno più performante, ad es. 5VA


![Errori di messa in servizio del Telstar CT – Figura 7](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/07.png)

## Comprendere il sistema trifase e il contatore con trasformatori

### Introduzione

La seguente analisi vuole illustrare il comportamento di misura di un contatore con trasformatori in caso di errore. L'analisi è costruita con semplici tensioni e correnti sinusoidali, per non complicare inutilmente il tema. È però importante sapere che le correnti non hanno quasi mai una forma sinusoidale e che lo sfasamento descritto di seguito, in caso di cablaggio errato, presenterà leggeri scostamenti rispetto a questa analisi.

### Aspetti generali

1.  Le tensioni e le correnti delle tre fasi sono sfasate nel tempo tra loro per poter generare un movimento rotatorio in un motore.

2.  La corrente è una conseguenza della tensione applicata ed è determinata dal comportamento del carico.


Lo sfasamento temporale sopra menzionato corrisponde esattamente a 120° su una rotazione complessiva di 360°.

- La fase 1 inizia a 0°

- La fase 2 inizia a 120°

- La fase 3 inizia a 240°


A 50 Hz, 360° corrisponde a 20ms, ovvero 1/frequenza = tempo di periodo
Lo sfasamento temporale tra le singole fasi è di conseguenza: 20 ms/360° \* 120° = 6,666 ms

### Cosa fa il contatore con trasformatori?

Un contatore con trasformatori interpreta ogni tensione di fase, ogni corrente di fase e la relativa potenza di fase individualmente rispetto alle altre due e somma le tre potenze di fase risultanti in una potenza totale trifase. 

Somma P = potenza di fase 1 + potenza di fase 2 + potenza di fase 3

Se singole di queste fossero negative (ad es. il trasformatore di corrente di una fase ha un senso del flusso invertito), ne risulta una potenza minore di quella attesa.

![Errori di messa in servizio del Telstar CT – Figura 8](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/08.png)

Vista all'oscilloscopio di un sistema trifase

### Tensione di fase e corrente di fase sono collegate correttamente (U1 / I1)

Consideriamo qui una fase collegata correttamente. Vengono misurate la tensione L1 (U1) e la corrente L1 (I1) (il trasformatore è collegato con il senso del flusso corretto).

Entrambe le semionde risultano in una potenza positiva, poiché tensione e corrente hanno lo stesso segno nella rispettiva semionda.

La potenza misurata corrisponde correttamente a 6500W (rosso).

![Errori di messa in servizio del Telstar CT – Figura 9](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/09.png)

### Senso del flusso del trasformatore invertito su una fase

Esempio: impianto solare

L'impianto solare produce una potenza di 30kW --> 10kW per ogni fase. (Gli impianti solari producono sempre in modo il più possibile bilanciato sulle tre fasi)
Se tutto è corretto, questi 30kW si leggono anche sull'apparecchio di misura.

Se il trasformatore della fase 1 ha il senso del flusso invertito, ne risulta una potenza di fase negativa per la fase 1.

Somma P = -10kW + 10kW + 10kW = 10kW

La potenza totale corrisponde ormai solo a 1/3 della potenza attesa.

### Tensione di fase e correnti di fase sono state scambiate

Nota: se una corrente di fase o una tensione di fase è stata collegata all'ingresso sbagliato del contatore, sono sempre due le fasi interessate!

Tensione di fase e corrente di fase sono state scambiate (U1 / I2) e vengono misurate sulla fase 1

Consideriamo qui il risultato di una misurazione quando al contatore viene sì fornita la tensione corretta L1 (U1), ma la corrente errata L2 (I2). 

Mescoliamo quindi la tensione della fase 1 con la corrente della fase 2.

La potenza di fase diventa negativa. Lo sfasamento di 120° si traduce nell'apparecchio di misura in uno sfasamento misurato di soli 60° e viene ora visualizzato con un fattore di potenza di 0,5. 

Risultato: potenza negativa e pari alla metà dei 6500 W attesi)

P = -3250W (rosso)

Nota: qui si deve considerare che in un sistema reale il fattore di potenza può essere più alto o più basso di 0.5 (ad es. da 0,3 a 0,7). Ciò è dovuto al fatto che il fattore di potenza sulla fase 1, anche con cablaggio e misurazione corretti, si trova già tra 0,8 e 1.

![Errori di messa in servizio del Telstar CT – Figura 10](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/10.png)

Tensione di fase e corrente di fase sono state scambiate (U1 / I3)

Consideriamo qui il risultato di una misurazione quando al contatore viene sì fornita la tensione corretta, ma la corrente errata. 

Mescoliamo la tensione della fase 1 con la corrente della fase 3.

La potenza di fase diventa negativa. Lo sfasamento di 120° si traduce nell'apparecchio di misura in uno sfasamento misurato di soli -60° e viene ora visualizzato con un fattore di potenza di 0,5. (Nell'apparecchio di misura il fattore di potenza può assumere solo valori da 0 a 1, anche se ora cos (Phi) = -0,5 sarebbe corretto)

Risultato: potenza negativa e pari alla metà dei 6500 W attesi)

P = -3250W (rosso)

Nota: qui si deve considerare che in un sistema reale il fattore di potenza può essere più alto o più basso di 0.5 (ad es. da 0,3 a 0,7). Ciò è dovuto al fatto che il fattore di potenza sulla fase 1, anche con cablaggio e misurazione corretti, si trova già tra 0,8 e 1.

![Errori di messa in servizio del Telstar CT – Figura 11](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/11.png)
