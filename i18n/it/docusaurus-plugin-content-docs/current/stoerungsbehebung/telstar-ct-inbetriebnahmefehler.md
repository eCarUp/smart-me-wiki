---
title: 'Errori di messa in servizio Telstar CT'
slug: '/stoerungsbehebung/telstar-ct-inbetriebnahmefehler'
description: 'Questa pagina descrive gli errori frequenti che possono verificarsi durante la messa in servizio del Telstar CT.'
sidebar_label: 'Errori di messa in servizio Telstar CT'
---
Questa pagina descrive gli errori frequenti che possono verificarsi durante la messa in servizio del Telstar CT. Viene spiegato come verificare e risolvere questi errori.

## La potenza non corrisponde a quella del contatore dell'azienda elettrica.

Per risolvere il problema, segui i punti seguenti.

<details id="wandlerverhaeltnis">
<summary>1\. Verifica il rapporto di trasformazione</summary>

Questo approccio va preso in considerazione soprattutto quando il valore misurato è inferiore di un fattore intero (ad es. effettivo: 4W, atteso: 240W (fattore 60))

- Soluzione: nel portale smart-me -> seleziona il contatore -> clicca sulla rotella dentata -> Impostazioni generali (Allgemeine Einstellungen) -> inserisci il rapporto e salva.

- smart-me consiglia di impostare il rapporto di trasformazione secondo l'indicazione riportata sul trasformatore, ad es. 300A/5A --> 300:5

- Importante: i dati storici non vengono adeguati. 

</details>

<details id="abweichung-zwei-prozent">
<summary>2\. Verifica se lo scostamento tra il contatore dell'azienda elettrica e il contatore smart-me è inferiore o uguale al 2%.</summary>

Questo approccio va preso in considerazione soprattutto quando i consumi dei due contatori sono relativamente vicini tra loro.

I nostri apparecchi hanno una precisione di misura dell'1% secondo lo standard MID. A ciò si aggiunge lo scostamento del trasformatore dello 0,5-1%. Questi scostamenti sono ammessi nella classe di precisione B. Per determinare la differenza massima ammessa in base alle tolleranze consentite, si può applicare la seguente formula empirica.

Formula empirica: differenza massima ammessa \[kWh\] = energia del contatore dell'azienda elettrica \* (errore di misura Telstar CT in % + errore di misura trasformatore in %)

Esempio:
Contatore dell'azienda elettrica: consumo 1000kWh
Telstar CT: consumo 992kWh

differenza massima ammessa \[kWh\] = energia del contatore dell'azienda elettrica \* (errore di misura Telstar CT in % + errore di misura trasformatore in %) = 1000kWh \* (0.01 + 0.01) = 20kWh

Il valore misurato dal Telstar CT può trovarsi nell'intervallo 1000kWh +/- 20kWh; con 992kWh corrisponde all'errore atteso.

Attenzione: il consumo dipende dalla durata della misurazione. Per la stima di cui sopra, per entrambi i contatori deve essere scelto lo stesso periodo in cui è stata consumata l'energia.  La lettura del contatore dell'azienda elettrica non deve necessariamente essere uguale a quella del Telstar CT. 

</details>

<details id="messklemmenblock">
<summary>3\. Verifica se i morsetti della morsettiera di misura sono chiusi.</summary>

Questo approccio va preso in considerazione soprattutto quando le potenze risultano sospettosamente basse (metà della potenza attesa o meno).

- In alcuni progetti, dopo l'installazione ci si dimentica per errore di rimuovere il cortocircuito lato morsettiera di misura.
    Morsetti non chiusi nella morsettiera di misura lasciano comunque passare un piccolo flusso di corrente, che viene misurato dal contatore ma non corrisponde al corretto rapporto di ripartizione. (Collegamento in parallelo nella morsettiera di misura rispetto al punto di misura nel contatore)

</details>

<details id="kurzschlussbruecke">
<summary>4\. Verificare se il trasformatore dispone di un ponticello di cortocircuito.</summary>

<div className="row">
<div className="col col--6">

Questo approccio va preso in considerazione soprattutto quando le potenze risultano sospettosamente basse (metà della potenza attesa o meno).

- Alcuni trasformatori, come ad es. l'SRT01605A di Hager, sono dotati di ponticelli di cortocircuito che devono essere rimossi dopo il montaggio e il cablaggio dei trasformatori, come descritto nelle istruzioni per l'uso.

</div>
<div className="col col--6 bild--mitte">

![Errori di messa in servizio Telstar CT – Figura 1](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/01.png)

</div>
</div>

</details>

<details id="flussrichtung-wandler">
<summary>5\. Verifica la direzione del flusso dei trasformatori di corrente.</summary>

<div className="row">
<div className="col col--7">

Questo approccio viene seguito soprattutto quando le potenze di fase risultano negative, sebbene ciò non sia previsto.

Tutti i trasformatori hanno una direzione del flusso, contrassegnata da una freccia.

1.  La punta della freccia è sempre rivolta verso: 

- Utenze e accumuli: appartamenti, elettromobilità, riscaldamenti e batterie

- Produttori: inverter solari e generatori

La coda della freccia (piatta) è sempre rivolta verso:

- Rete: allacciamento alla rete, distribuzione o quadro di distribuzione dell'edificio

2.  All'ingresso "I IN" si collega il polo positivo del trasformatore e a "I OUT" il polo negativo del trasformatore della rispettiva fase.

Cosa corrisponde alle aspettative:

- Sul contatore FV, durante la produzione devi riscontrare correnti e potenze negative. 

    Se al momento non c'è produzione attiva, di norma si riscontrano correnti e potenze positive. (Questa situazione non è però univoca)

- I contatori di solo consumo presentano esclusivamente segni positivi per correnti e potenze.

- Il contatore di bilancio può presentare, a seconda della situazione, segni diversi per ogni fase. 

    - In caso di acquisto, questi sono normalmente positivi (impianto solare SPENTO per il test)

    - In caso di fornitura, questi sono normalmente negativi (impianto solare ACCESO per il test, sono possibili scostamenti sulle singole fasi)

    - La potenza totale del bilancio deve però corrispondere alla produzione + il consumo.

        (Verifica tramite il profilo di carico o tramite la visualizzazione "Flusso energetico semplice" ("Energiefluss Einfach"). Inserisci solo il contatore FV e il consumo totale per calcolare artificialmente il bilancio, poi confronta i valori nella visualizzazione con la potenza attiva del contatore di bilancio)

</div>
<div className="col col--5 bild--mitte">

![Errori di messa in servizio Telstar CT – Figura 2](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/02.png)

![Errori di messa in servizio Telstar CT – Figura 3](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/03.png)

</div>
</div>

</details>

<details id="cos-phi">
<summary>6\. Verifica gli sfasamenti con il valore Cos Phi per ogni fase</summary>

Se il valore Cos Phi di più fasi è costantemente inferiore a 0,5, è possibile che vi sia una tensione di fase invertita.

Il contatore misura allora sull'ingresso U fase 1 la tensione di L1, ma I IN e I OUT della fase 1 misurano la corrente di L2.

Nota bene: se una fase è invertita, sono sempre invertite due fasi contemporaneamente!

Ciò porta a valori Cos Phi compresi tra 0 e 0,6 circa (tendenzialmente sotto 0,5)

- Verifica che tutti i collegamenti di tensioni e correnti siano cablati correttamente.

- Verifica la direzione del flusso dei trasformatori

Se questi valori sono buoni, sono tutti ben al di sopra di 0,5 e tutti i passaggi precedenti sono stati eseguiti, come ultima opzione resta la verifica delle linee reattive. Questa tratta le inversioni multiple di direzioni del flusso e collegamenti.

![Errori di messa in servizio Telstar CT – Figura 4](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/04.png)

</details>

<details id="blindleistungsregister">
<summary>7\. Verifica i registri della potenza reattiva del contatore</summary>

Se i valori misurati continuano a sembrare poco plausibili, è possibile che le prese di tensione e la misura di corrente siano state invertite. I registri della potenza reattiva possono fornirci un indizio in tal senso.

Supponiamo che due tensioni di fase siano state portate sugli ingressi sbagliati e che inoltre singoli trasformatori siano stati collegati con la direzione del flusso errata: l'analisi sui dati di potenza attiva diventa molto difficile, se non quasi impossibile.

Per visualizzare questi registri dell'energia reattiva, la misura deve essere attivata. Attivazione della misura dell'energia reattiva: seleziona il contatore --> Configurazione hardware (Hardwarekonfiguration) (rotelle dentate) --> Impostazioni generali (Allgemeine Einstellungen) --> Attiva energia reattiva (Blindenergie aktivieren) (Sì (Ja))

Considerando una casa unifamiliare/plurifamiliare con impianto solare, l'ordine delle letture del contatore dei quadranti dovrebbe nella maggior parte dei casi presentarsi così:

- Q1: prelievo di energia reattiva induttiva:
    motori, impianti di ventilazione
    \--> valori elevati (molto più alti di Q2) 

- Q2. Fornitura di energia reattiva induttiva:
    generatori trifase come generatori diesel o turbine eoliche
    \--> valore più basso di tutti 

- Q3: fornitura di energia reattiva capacitiva:
    produttori come impianti FV, batterie o stazioni di ricarica bidirezionali
    (la produzione deve però essere già avvenuta)
    \--> valore elevato (molto più alto di Q2, spesso anche di Q1) 

- Q4: prelievo di energia reattiva capacitiva:
    sistemi di accumulo, inverter, impianti di compensazione, veicoli elettrici, carichi negli appartamenti
    \--> valori da medi a elevati (molto più alti di Q2, spesso anche di Q1) 


Q1 e Q4 sono difficili da valutare senza una conoscenza più approfondita. In una casa plurifamiliare con impianto solare si possono però valutare facilmente Q2 e Q3. Se l'andamento di Q2 e Q3 non segue la tendenza dell'esempio sopra, probabilmente si è in presenza di:

- almeno una tensione e una corrente invertite

- almeno un trasformatore con direzione del flusso errata o cavi incrociati verso il contatore


Possibili fonti di errore:

- direzione del flusso di montaggio dei trasformatori

- inversione delle prese dei trasformatori

- cablaggio errato sulla morsettiera di misura

- prelievo errato dalla morsettiera di misura

- cablaggio errato all'arrivo sul contatore (I IN / I OUT)


![Errori di messa in servizio Telstar CT – Figura 5](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/05.png)

Esempio di contatore di bilancio di una grande casa plurifamiliare con impianto solare
\+ elettromobilità

![Errori di messa in servizio Telstar CT – Figura 6](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/06.png)

Esempio di contatore di bilancio in una casa unifamiliare con impianto solare

</details>

<details id="leitungswiderstand">
<summary>8\. Verifica i connettori e le resistenze di linea dell'uscita del trasformatore</summary>

Questo approccio va preso in considerazione quando i segni delle potenze e delle correnti sono corretti, ma il valore delle correnti risulta innaturalmente basso.

- Ogni trasformatore ha una potenza di uscita in volt-ampere S \[VA\]

- Le resistenze di linea non devono essere più elevate di quanto consenta il passaggio della corrente secondaria massima con la potenza disponibile.

Formula:  resistenza di linea max. R = S / corrente secondaria I^2

Esempio: trasformatore 200A / 5A con potenza di uscita di 1VA

R max. = 1VA/(5A\*5A) = 0.04 Ohm

Di conseguenza, la resistenza misurata tra il morsetto positivo e quello negativo del trasformatore non deve superare 0.04 Ohm.
Non dovrebbe nemmeno essere troppo al limite: la resistenza in corrente alternata a 50Hz è leggermente superiore alla resistenza in corrente continua.

Nota: 

- La misurazione deve essere effettuata con il trasformatore scollegato!

    Altrimenti viene misurata la resistenza della bobina del trasformatore e non quella della linea di andata e ritorno.

Cosa posso fare se la resistenza di linea risulta troppo elevata?

1.  Controllare tutti i connettori, serrarli e misurare di nuovo.

2.  Aumentare la sezione dei conduttori (di norma 2.5mm2)

3.  Accorciare le linee

4.  Sostituire il trasformatore con uno più potente, ad es. 5VA

![Errori di messa in servizio Telstar CT – Figura 7](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/07.png)

</details>

## Comprendere il sistema trifase e il contatore con trasformatori

### Introduzione

La seguente analisi intende illustrare il comportamento di misura di un contatore con trasformatori in caso di errore. L'analisi si basa su semplici tensioni e correnti sinusoidali, per non complicare inutilmente l'argomento. È però importante sapere che le correnti non hanno quasi mai una forma sinusoidale e che lo sfasamento descritto di seguito in caso di cablaggio errato presenterà leggeri scostamenti rispetto a questa analisi.

### Generalità

1.  Le tensioni e le correnti delle tre fasi sono sfasate nel tempo l'una rispetto all'altra, per poter generare un movimento rotatorio in un motore.

2.  La corrente è una conseguenza della tensione applicata ed è determinata dal comportamento del carico.


Lo sfasamento temporale sopra menzionato corrisponde esattamente a 120° su una rotazione completa di 360°.

- La fase 1 inizia a 0°

- La fase 2 inizia a 120°

- La fase 3 inizia a 240°


A 50 Hz, 360° corrispondono a 20ms ovvero 1/frequenza = periodo
Lo sfasamento temporale tra le singole fasi è quindi: 20 ms/360° \* 120° = 6,666 ms

### Cosa fa il contatore con trasformatori?

Un contatore con trasformatori interpreta ogni tensione di fase, ogni corrente di fase e la relativa potenza di fase indipendentemente dalle altre due e somma le tre potenze di fase risultanti in una potenza totale trifase. 

Somma P = potenza di fase 1 + potenza di fase 2 + potenza di fase 3

Se alcune di queste fossero negative (ad es. il trasformatore di corrente di una fase ha una direzione del flusso invertita), ne risulta una potenza inferiore a quella attesa.

![Errori di messa in servizio Telstar CT – Figura 8](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/08.png)

Vista oscilloscopio di un sistema trifase

### Tensione di fase e corrente di fase sono collegate correttamente (U1 / I1)

Consideriamo qui una fase collegata correttamente. Vengono misurate la tensione L1 (U1) e la corrente L1 (I1) (il trasformatore è collegato con la direzione del flusso corretta).

Entrambe le semionde danno come risultato una potenza positiva, poiché tensione e corrente hanno lo stesso segno nella rispettiva semionda.

La potenza misurata corrisponde correttamente a 6500W (rosso).

![Errori di messa in servizio Telstar CT – Figura 9](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/09.png)

### Direzione del flusso del trasformatore invertita su una fase

Esempio: impianto solare

L'impianto solare produce una potenza di 30kW --> ogni fase 10kW. (Gli impianti solari producono sempre nel modo più equilibrato possibile sulle tre fasi)
Se tutto è corretto, questi 30kW si leggono anche sull'apparecchio di misura.

Se il trasformatore della fase 1 ha la direzione del flusso invertita, ne risulta una potenza di fase negativa per la fase 1.

Somma P = -10kW + 10kW + 10kW = 10kW

La potenza totale corrisponde solo a 1/3 della potenza attesa.

### Tensione di fase e correnti di fase sono state invertite

Nota: se una corrente di fase o una tensione di fase è stata collegata all'ingresso sbagliato del contatore, sono sempre interessate due fasi contemporaneamente!

Tensione di fase e corrente di fase sono state invertite (U1 / I2) e vengono misurate sulla fase 1

Consideriamo qui il risultato di una misurazione in cui al contatore viene fornita la tensione corretta L1 (U1), ma la corrente sbagliata L2 (I2). 

Mescoliamo quindi la tensione della fase 1 con la corrente della fase 2.

La potenza di fase diventa negativa. Lo sfasamento di 120° si traduce nell'apparecchio di misura in uno sfasamento misurato di soli 60° e viene ora visualizzato con un fattore di potenza di 0,5. 

Risultato: potenza negativa e dimezzata rispetto ai 6500 W attesi)

P = -3250W (rosso)

Nota: qui occorre considerare che in un sistema reale il fattore di potenza può essere superiore o inferiore a 0.5 (ad es. da 0,3 a 0,7). Ciò è dovuto al fatto che il fattore di potenza sulla fase 1, anche con cablaggio e misurazione corretti, è già compreso tra 0,8 e 1.

![Errori di messa in servizio Telstar CT – Figura 10](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/10.png)

Tensione di fase e corrente di fase sono state invertite (U1 / I3)

Consideriamo qui il risultato di una misurazione in cui al contatore viene fornita la tensione corretta, ma la corrente sbagliata. 

Mescoliamo la tensione della fase 1 con la corrente della fase 3.

La potenza di fase diventa negativa. Lo sfasamento di 120° si traduce nell'apparecchio di misura in uno sfasamento misurato di soli -60° e viene ora visualizzato con un fattore di potenza di 0,5. (Il fattore di potenza nell'apparecchio di misura può assumere solo valori da 0 a 1, sebbene ora cos (Phi) = -0,5 sarebbe corretto)

Risultato: potenza negativa e dimezzata rispetto ai 6500 W attesi)

P = -3250W (rosso)

Nota: qui occorre considerare che in un sistema reale il fattore di potenza può essere superiore o inferiore a 0.5 (ad es. da 0,3 a 0,7). Ciò è dovuto al fatto che il fattore di potenza sulla fase 1, anche con cablaggio e misurazione corretti, è già compreso tra 0,8 e 1.

![Errori di messa in servizio Telstar CT – Figura 11](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/11.png)
