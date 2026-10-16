---
title: 'Solar Manager'
slug: '/drittsysteme/solarmanager'
description: 'I dispositivi smart-me possono essere integrati nel Solar Manager direttamente tramite il cloud.'
sidebar_label: 'Solar Manager'
---
I dispositivi smart-me possono essere integrati nel Solar Manager direttamente tramite il cloud. Possono essere ripresi anche i [contatori virtuali](/konfiguration/billing/virtuelle-zaehler). 

## Piccolo aggiornamento del Solar Manager da agosto 2026

Con il nuovo aggiornamento del Solar Manager, le Pico non vengono più comandate tramite il numero di serie, ma tramite l'ID del gruppo di gestione del carico di livello 1.

Nel breve video Le mostro passo dopo passo come funziona, affinché possa effettuare correttamente le impostazioni sul lato smart-me.

Ottimo a sapersi: con l'aggiornamento è ora possibile la ricarica monofase a 6 A (ca. 1,4 kW), ideale in caso di eccedenze fotovoltaiche ridotte. Come configurarla è descritto nella documentazione del Solar Manager

<Embed src="https://drive.google.com/file/d/1Oc3uuTCMusCJMHL7hjlJzFbkoFONHpm4/preview" aspect="1.350" title="Drive, solarmanager_update_2026.mp4" />

solarmanager\_update\_2026.mp4

Nel Solar Manager esistono diverse opzioni per utilizzare il contatore smart-me e le stazioni di ricarica Pico:

- Come smart meter o contatore di bilancio direttamente a valle del contatore dell'azienda elettrica

- Come misurazione del consumo di apparecchi come stazioni di ricarica, pompe di calore ecc.

- Come misurazione della produzione fotovoltaica

- Come interruttore, per utilizzare il contatto relè sul contatore.

- Come fornitore di dati per la gestione del carico per la mobilità elettrica

Gruppo target: case unifamiliari e plurifamiliari

<Video src="D3Mh-cAyHvw" title="Video YouTube, demo dell'integrazione dei contatori smart-me nel Solar Manager" />

## Integrazione in generale

Per l'integrazione sono necessari i dati di accesso al cloud (nome utente e password)  e il numero di serie del contatore. Il numero di serie è visibile direttamente nel portale smart-me e sui dispositivi stessi. Del numero di serie utilizzare solo le cifre prima del trattino!

![Solar Manager – Figura 1](/img/drittsysteme-solarmanager/01.png)

### Esempio:

Numero di serie portale web: 07907952

Numero di serie contatore: 07907952-123 (omettere -123)

## Contatore smart-me come smart meter

Nel Solar Manager è possibile aggiungere uno smart meter, che può essere montato in due modi:

- Direttamente a valle del contatore dell'azienda elettrica (contatore di bilancio), misurando direttamente produzione (-) e consumo (+) 

- Pura misurazione del consumo, la produzione viene rilevata separatamente

Per la configurazione si aggiunge uno smart meter e si seleziona smart-me Cloud. Con i dati di accesso e il numero di serie a 8 cifre lo smart meter viene collegato. 

- Luogo di installazione:  secondo la descrizione sopra

- Invertire la misurazione: se il contatore fosse montato invertito, qui si potrebbe cambiare il segno. 

![Solar Manager – Figura 2](/img/drittsysteme-solarmanager/02.png)

## Utilizzare il relè smart-me

Il [contatore trifase Telstar](/produkte/telstar) dispone di due uscite a contatto a potenziale zero per il comando di apparecchi esterni, una delle quali con relè integrato da 8A. Nel Solar Manager questo può essere commutato. Per ogni relè viene registrato e parametrizzato un «interruttore». Gli interruttori devono essere definiti preventivamente nel portale smart-me come uscite digitali (vedi [Ingressi e uscite](/)) 

Per la configurazione si aggiunge alla voce Dispositivi un nuovo «interruttore» e si seleziona «Relè sul contatore trifase smart-me». Con i dati di accesso e il numero di serie a 8 cifre il contatore viene collegato. 

### Parametri

Potenza di inserimento (W):

Quale potenza deve essere disponibile come eccedenza affinché avvenga la commutazione.

Ritardo di inserimento (min):

Per quanto tempo deve essere disponibile la potenza definita prima che avvenga la commutazione.

Ritardo di disinserimento (min):

Quanto tempo attendere dopo che la potenza è scesa sotto la soglia prima di disinserire (p. es. per superare il passaggio di una nuvola)

Tempo minimo di funzionamento (min): 

Per quanto tempo l'apparecchio deve funzionare come minimo. Utile per pompe di calore con compressori ecc.

![Solar Manager – Figura 3](/img/drittsysteme-solarmanager/03.png)

![Solar Manager – Figura 4](/img/drittsysteme-solarmanager/04.png)

## Contatto:

<Kacheln min="20rem">
<Kachel titel="Solar Manager AG">

Schlyffistäg 36, CH-5630 Muri

[https://www.solarmanager.ch/](https://www.solarmanager.ch/) · [info@solarmanager.ch](mailto:info@solarmanager.ch) · +41 56 512 92 08

</Kachel>
</Kacheln>

## FAQ

<details id="stromfreigabe-pico-ladestation-funktioniert-nicht-ab-4200w">
<summary>L'abilitazione della corrente della stazione di ricarica Pico non funziona a partire da 4200W</summary>

La stazione di ricarica Pico viene fornita di serie con una corrente minima di 8A, per supportare direttamente dopo l'installazione tutti i possibili tipi di veicolo.

In combinazione con il Solar Manager, quest'ultimo presuppone però di serie una corrente minima di 6A per comandare la Pico.

Selezioni il caso applicabile al Suo veicolo per supportare senza errori la configurazione desiderata:

Caso A: ha un veicolo in grado di gestire una corrente di avvio di 6A

- Imposti la corrente minima sull'hardware della Pico a 6A.

![Solar Manager – Figura 5](/img/drittsysteme-solarmanager/05.png)

Caso B: ha un veicolo che notoriamente non gestisce una corrente di avvio di 6A  (p. es. Renault Zoe)

- Nel Solar Manager, nella selezione del veicolo, imposti il setting "Renault Zoe 9A"

</details>
