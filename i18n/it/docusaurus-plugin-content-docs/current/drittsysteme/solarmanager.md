---
title: 'Solar Manager'
slug: '/drittsysteme/solarmanager'
description: 'I dispositivi smart-me possono essere integrati in Solar Manager direttamente tramite il cloud.'
sidebar_label: 'Solar Manager'
---
I dispositivi smart-me possono essere integrati in Solar Manager direttamente tramite il cloud. Anche i [contatori virtuali](/konfiguration/billing/virtuelle-zaehler) possono essere ripresi.

In Solar Manager esistono diverse opzioni per utilizzare il contatore smart-me e le stazioni di ricarica Pico:

- Come smart meter o contatore di bilancio direttamente a valle del contatore dell'azienda elettrica

- Come misurazione del consumo di apparecchi quali stazioni di ricarica, pompe di calore ecc.

- Come misurazione della produzione fotovoltaica

- Come interruttore, per utilizzare il contatto relè sul contatore.

- Come fornitore di dati per la gestione del carico nella mobilità elettrica




Destinatari: case unifamiliari e plurifamiliari

<Video src="D3Mh-cAyHvw" title="Video YouTube, demo dell'integrazione Solar Manager dei contatori smart-me" />

## Integrazione in generale

Per l'integrazione sono necessari i dati di accesso al cloud (nome utente e password) nonché il numero di serie del contatore. Il numero di serie è visibile direttamente nel portale smart-me e sui dispositivi stessi. Del numero di serie utilizzare solo le cifre che precedono il trattino!

![Solar Manager – Figura 1](/img/drittsysteme-solarmanager/01.png)

### Esempio:

Numero di serie portale web: 07907952

Numero di serie contatore: 07907952-123 (omettere -123)

## Contatore smart-me come smart meter

In Solar Manager è possibile aggiungere uno smart meter, che può essere montato in due modi:

- Direttamente a valle del contatore dell'azienda elettrica (contatore di bilancio), dove produzione (-) e consumo (+) vengono misurati direttamente

- Pura misurazione del consumo, la produzione viene rilevata separatamente


Per la configurazione si aggiunge uno smart meter e si seleziona smart-me Cloud. Con i dati di accesso e il numero di serie a 8 cifre lo smart meter viene collegato.

- Luogo di installazione: secondo la descrizione riportata sopra

- Invertire la misurazione: se il contatore fosse montato in modo invertito, qui si potrebbe cambiare il segno.


![Solar Manager – Figura 2](/img/drittsysteme-solarmanager/02.png)

## Utilizzare il relè smart-me

Il [contatore trifase Telstar](/produkte/telstar) dispone di due uscite a contatto a potenziale zero per il comando di apparecchi esterni, una delle quali con relè da 8A integrato. In Solar Manager questo può essere commutato. Per ogni relè viene registrato e parametrizzato un «interruttore». Gli interruttori devono essere definiti in precedenza nel portale smart-me come uscite digitali (vedi [Ingressi e uscite](/))

Per la configurazione si aggiunge sotto Dispositivi (Geräte) un nuovo «interruttore» e si seleziona «Relais am smart-me 3-Phasen Zähler». Con i dati di accesso e il numero di serie a 8 cifre il contatore viene collegato.

### Parametri

Potenza di attivazione (W):

Quale potenza deve essere presente come eccedenza affinché avvenga la commutazione.

Ritardo all'attivazione (min):

Per quanto tempo deve essere presente la potenza definita prima che avvenga la commutazione.

Ritardo alla disattivazione (min):

Quanto si deve attendere dopo che la potenza è scesa sotto la soglia prima di disattivare (ad es. per superare il passaggio di una nuvola)

Tempo minimo di funzionamento (min):

Per quanto tempo deve funzionare l'apparecchio come minimo. Pratico per pompe di calore con compressori ecc.

![Solar Manager – Figura 3](/img/drittsysteme-solarmanager/03.png)

![Solar Manager – Figura 4](/img/drittsysteme-solarmanager/04.png)

## Contatto:

Solar Manager AG

Schlyffistäg 36

CH-5630 Muri

[https://www.solarmanager.ch/](https://www.solarmanager.ch/) 

[info@solarmanager.ch](mailto:info@solarmanager.ch) 

+41 56 512 92 08

## FAQ

## L'abilitazione della corrente della stazione di ricarica Pico non funziona a partire da 4200W

La stazione di ricarica Pico viene fornita di serie con la corrente minima di 8A, per supportare direttamente dopo l'installazione tutti i possibili tipi di veicolo.

Nell'interazione con Solarmanager, questo presuppone però di serie una corrente minima di 6A per comandare la Pico.

Selezionate il caso corrispondente alla vostra situazione per supportare senza errori la configurazione da voi desiderata:

Caso A: avete un veicolo in grado di gestire una corrente di avvio di 6A

- Impostate la corrente minima sull'hardware Pico su 6A.



![Solar Manager – Figura 5](/img/drittsysteme-solarmanager/05.png)

Caso B: avete un veicolo che notoriamente non è in grado di gestire una corrente di avvio di 6A (ad es. Renault Zoe)

- Impostate in Solarmanager, nella selezione del veicolo, l'impostazione "Renault Zoe 9A"
