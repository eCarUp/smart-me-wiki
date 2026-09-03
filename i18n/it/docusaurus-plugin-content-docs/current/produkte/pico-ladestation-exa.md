---
title: 'Pico E-Ladestation'
slug: '/produkte/pico-ladestation-exa'
description: 'RDC-DD 6mA secondo IEC 62955 (dispositivo di rilevamento della corrente continua di guasto)'
sidebar_label: 'Pico E-Ladestation'
---
RDC-DD 6mA secondo IEC 62955 (dispositivo di rilevamento della corrente continua di guasto)

Pico is the Swiss high-tech charging station. It connects directly to the cloud via Wi-Fi or mobile communications. The integrated smart meter exports high-precision measurement data that is signed during transactions and can be validated at any time free of charge. The station can be integrated into a backend (eCarUp), energy management systems and other third-party systems. Furthermore, Pico can be used for both static and dynamic load management (including phase balancing).

Questo articolo riguarda la prima generazione di Pico (numero di articolo 202170exA). Tutte le informazioni sulla versione più recente di Pico sono disponibili qui: [Stazione di ricarica Pico](/produkte/pico-ladestation).

![Stazione di ricarica Pico – Figura 1](/img/produkte-pico-ladestation-exa/01.jpg)

[Configurazione Pico](/konfiguration/inbetriebnahme/pico-konfiguration)

[Accessori](/produkte/pico-ladestation/pico-zubehör)

[Raccomandazione di materiale RCD Typ-A](/produkte/pico-ladestation/materialempfehlung-rcd-typ-a)

## Funzioni

- Gestione del carico e bilanciamento del carico integrati con equilibratura delle fasi

- Montaggio semplice (piccolo e leggero), adatto al cavo piatto

- Identificazione tramite RFID, app, CarID e predisposta per ISO 15118 (Powerline)

- Connessione dati crittografata in tempo reale verso il cloud smart-me ed eCarUp 

- Installazione semplice con l'app gratuita smart-me.

- Interfacce verso sistemi di terzi tramite API, CSV, MSCONS, IS-E e altri


## Messa in servizio di Pico

Prima di poter utilizzare il tuo dispositivo smart-me, devi collegarlo alla tua rete WiFi.

1.  Collega il tuo smartphone o tablet alla rete WLAN.

2.  Scarica e installa l'app gratuita smart-me.

3.  Avvia l'app e crea un account gratuito

4.  Clicca su «Aggiungi dispositivo» («Gerät hinzufügen») (+) e segui le istruzioni.

    1.  1.  Scegliere WLAN o LTE (2.4Ghz o Mobile)

        2.  Indicare la password (WLAN)

        3.  Tenere la carta RFID fornita davanti al lettore per 10 secondi

        4.  Collegare il telefono cellulare alla WLAN locale del Pico (reti: smartme\_numeroserie) e mantenere la connessione.

        5.  Tornare nell'app

        6.  Indicare il nome visualizzato del Pico e concludere l'installazione


## Configurare Pico

La configurazione è trattata in dettaglio qui: [Configurazione Pico](/konfiguration/inbetriebnahme/pico-konfiguration) 

## Dati tecnici

Potenza di ricarica massima  22 kW con 32A trifase, 7.36 kW con 32A monofase

Identificazione  Riconoscimento e identificazione automatici dell'auto, lettore RFID / NFC (JEWEL, MIFARE, FELICA, ISO14443, NFC\_DEP, ISO14443\_B, ISO15693)

Smart Meter  Contatore di energia integrato non certificato MID incl. processore di sicurezza

Equilibratura delle fasi  Equilibratura automatica delle fasi

Gestione del carico  Gestione automatica del carico su più stazioni

Comunicazione  WiFi (2.4 GHz) e telefonia mobile (LTE) incl. SIM e traffico dati per 10 anni di [1nce](https://1nce.com/de/laenderabdeckung/), [Modbus TCP](/)

Collegamento al cloud  Collegamento al cloud smart-me ed eCarUp

Sicurezza  Numero di articolo 202170exA RDC-DD 6mA secondo IEC 62955 (dispositivo di rilevamento della corrente continua di guasto)

Intervallo di temperatura  \-30°C a 50°C

Tensioni di rete 3x230/400VAC oppure 1x 230VAC (+/-10%)

Presa di ricarica  IEC 62196-2 Typ 2 

Grado di protezione  IP55 (interno ed esterno)

Grado di resistenza agli urti  IK10

Classe di infiammabilità  UL94

Distacco del carico  2 ingressi a potenziale zero (4 stati),  min. 12V AC/DC, max. 48 VDC / 230 VAC

Uscita S0  Interfaccia S0 (1000 imp/kwh) per la taratura

Allacciamento elettrico  in alto, in basso, sul retro

Tipo di installazione  barra collettrice, cavo piatto, a stella

Dimensioni  A:300 mm L:220 mm P:112 mm

Peso  3.8 kg

Sezione del cavo  min. 2.5 mm2, max. 10 mm2

Diametro del cavo  10-20 mm

Ubicazione del server Svizzera 

## Collegamenti e dimensioni di Pico

![Stazione di ricarica Pico – Figura 2](/img/produkte-pico-ladestation-exa/02.jpg)

### Schema di collegamento

L1: fase 1

L2: fase 2

L3: fase 3

N: conduttore di neutro

PE: conduttore di protezione



Il conduttore di protezione va collegato alla vite di allacciamento superiore, in modo che il piedistallo venga messo a terra direttamente insieme alla stazione.

Il prodotto può essere utilizzato solo in collegamento a stella trifase oppure monofase!



Passaggi dei cavi

Nel Pico i cavi possono entrare e uscire in 5 punti. 

Due in alto, due in basso e uno attraverso la piastra posteriore.

Per il montaggio attraverso la piastra posteriore va praticato un foro con un diametro di 25-26mm.

I dettagli sul montaggio del piedistallo si trovano nelle istruzioni di montaggio nella sezione Download.

### Distacco del carico (ingressi esterni)

[](https://drive.google.com/open?id=1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY "Aprire il foglio di calcolo, distacco del carico Pico, in una nuova finestra")

<Embed src="https://docs.google.com/spreadsheets/d/1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY/htmlembed?gid=0" title="Foglio di calcolo, distacco del carico Pico" />

Distacco del carico Pico

Il distacco del carico può essere realizzato anche con un solo segnale disponibile. 

Per la configurazione da nessuna ricarica a potenza di ricarica massima, il segnale viene cablato su IN1 e IN2  nonché COM.

Per la configurazione da 6A di potenza minima a potenza di ricarica massima, il segnale deve essere cablato solo su IN2 e COM.



Attenzione:
Il distacco del carico può essere cablato su tutti i Pico oppure, al minimo, su uno per ogni gruppo di carico.
Questa funzione è garantita anche senza connessione a Internet.

In alternativa, il distacco del carico può avvenire anche tramite le azioni SE/ALLORA e la regolazione Pico.

![Stazione di ricarica Pico – Figura 3](/img/produkte-pico-ladestation-exa/03.png)

### Dimensioni

![Stazione di ricarica Pico – Figura 4](/img/produkte-pico-ladestation-exa/04.png)

## Informazioni sulla spedizione

### 212070 stazione di ricarica smart-me PICO incl. piastra di montaggio

Numero di tariffa doganale: 85044055

Peso con imballaggio: 4.6 kg

Dimensioni imballaggio: 400x300x200mm

Pacchi per europallet: 72 pezzi

### 212070/1 stazione di ricarica smart-me PICO senza piastra di montaggio

Numero di tariffa doganale: 85044055

Peso con imballaggio: 3.3 kg

Dimensioni imballaggio: 400x300x200mm

Pacchi per europallet: 72 pezzi

## Accessori

[Accessori](/produkte/pico-ladestation/pico-zubehör) 

## Avvertenze di sicurezza

Le avvertenze di sicurezza devono essere rispettate in ogni circostanza:

Installazione, manutenzione, riparazione, messa in servizio:

- Leggi attentamente l'intero manuale prima dell'installazione e dell'uso del prodotto.

- Pericolo di morte a causa dell'alta tensione elettrica. Non eseguire mai modifiche a componenti, software o linee di allacciamento senza aver messo l'impianto fuori tensione. Occorre pertanto rimuovere i relativi prefusibili e conservarli in modo tale che altre persone non possano reinserirli inavvertitamente.

- Il prodotto può essere installato, riparato o sottoposto a manutenzione esclusivamente da un elettricista qualificato autorizzato. Nel farlo devono essere rispettate tutte le prescrizioni comunali, regionali e nazionali vigenti per gli impianti elettrici. 

- L'installazione non deve avvenire nelle vicinanze di sostanze infiammabili o esplosive, in zone soggette ad allagamenti (autosilo) o in zone in cui esiste il pericolo di acqua corrente. 

- Il prodotto deve essere installato in una posizione definitiva. I collegamenti sul Pico e sulla piastra posteriore sono progettati per un numero limitato di cicli di innesto. 

- Il prodotto deve essere installato su una parete o su una struttura con portata sufficiente. 

- I morsetti di allacciamento nella piastra posteriore sono sotto tensione quando il circuito è chiuso e in nessun caso devono essere messi in contatto direttamente o con oggetti diversi dall'elettronica del Pico.

- A seconda del tipo di installazione, prima dell'installazione possono essere necessarie autorizzazioni, ad es. in caso di aumento della potenza dell'allacciamento domestico. 

- La stazione di ricarica deve essere notificata al gestore della rete di distribuzione. 


Scopo d'impiego:

- Questo prodotto è previsto esclusivamente per la ricarica di veicoli a propulsione elettrica dotati di batterie non gassanti. Il prodotto può essere utilizzato solo con un cavo di ricarica conforme a IEC 62196. Utilizzi diversi da quelli qui indicati non sono ammessi.

- Il dispositivo è previsto per l'uso in interni ed esterni.


Funzionamento:

- Non utilizzare né toccare mai il prodotto se è danneggiato o non funziona correttamente. In caso di emergenza (fumo, incendio, scintille o altri funzionamenti non corretti) disattivare immediatamente il prodotto tramite l'interruttore differenziale e informare il supporto clienti. 

- Non spegnere il prodotto con acqua e non pulirlo con acqua corrente.

- Non immergere il prodotto in acqua o in altri liquidi. 

- Questo prodotto non è previsto per l'uso da parte di persone con capacità fisiche, psichiche o sensoriali limitate (compresi i bambini) o di persone che non conoscono il prodotto. 

- Occorre assicurarsi che i bambini non giochino con il prodotto.

- Non toccare mai i contatti della presa di ricarica di tipo 2 e non introdurre corpi estranei nel prodotto. 

- Non utilizzare mai il cavo di ricarica se è danneggiato o se i collegamenti sono bagnati o sporchi. 

- Non utilizzare cavi di prolunga o adattatori non omologati in combinazione con il prodotto. 

- Non piegare mai il cavo di ricarica, non passarvi sopra con il veicolo e non esporlo a calore elevato. 

- Estrarre il cavo di ricarica dal supporto di ricarica esclusivamente afferrandolo dalla spina. 

- Non posare il cavo di ricarica nelle vie di transito di altri utenti della strada e posizionarlo sempre in modo che non vi sia pericolo di inciampare. 

- Proteggere il cavo di ricarica dagli agenti atmosferici come irraggiamento solare diretto, vento, pioggia, umidità e bagnato e non collegarlo mai con le mani umide o bagnate. 

- Non utilizzare il prodotto nelle vicinanze di forti campi elettromagnetici o nelle immediate vicinanze di radiotelefoni.


## Downloads

Scheda tecnica

[Inglese](https://docs.google.com/presentation/d/1GUdCrSlVUCWPzOxq2jCkzX2zmPm2k0qoOBliHyQPr2Q/export/pdf)

Documenti tecnici

[Pico Quickstarter](https://docs.google.com/document/d/1jRLrb7J9hg7yreVMQyvvFeWXF4lVsgWtSucW4cy1XLk/export?format=pdf) 

[Istruzioni di installazione e montaggio (inglese)](https://docs.google.com/presentation/d/1neEyGHF5XE-SPaIoc-QK9U5wIxvFdNY8GwCYq8-VsBU/export/pdf)

[Istruzioni di installazione e montaggio  (tedesco)](https://docs.google.com/presentation/d/1d_ejgHn-M8dmJdRPlC1F2z5bBZTvtU89_p2z1f22_aw/export/pdf) 

[Maschera di foratura](https://drive.google.com/file/d/1lQSSDwsKE9JeS2QkbpUDcLRhpeezxYnP/view?usp=sharing)

[Dichiarazione di conformità (non MID)](https://drive.google.com/file/d/1Jx0MrqCpLrfEZa3ts7U19iJQQLQpyRww/view?usp=drive_link)

[Schema di collegamento file ZIP](https://drive.google.com/file/d/1aVOLmWprogy2OizkcyH3kHsHntu0A8-D/view?usp=share_link)
