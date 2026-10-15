---
title: 'Contatore trifase Telstar 80A'
slug: '/produkte/telstar'
description: 'Il Telstar 80A di smart-me è un contatore di energia certificato MID con interfaccia WiFi integrata per la trasmissione di dati in tempo reale.'
sidebar_label: 'Contatore trifase Telstar 80A'
---
Il Telstar 80A di smart-me è un contatore di energia certificato MID con interfaccia WiFi integrata per la trasmissione di dati in tempo reale. Il contatore sincronizza i valori misurati in modo automatico e crittografato con la smart-me Cloud. I dati possono essere esportati ed elaborati nel portale smart-me oppure, tramite la nostra interfaccia aperta, in sistemi di terzi. Il contatore dispone di due uscite digitali per il comando di apparecchi a potenziale zero.

![Contatore trifase Telstar 80A – Figura 1](/img/produkte-telstar/01.jpg)

## Funzioni

- [Installazione](/konfiguration/inbetriebnahme) con l'app smart-me gratuita.

- Fatturazione con lo [smart-me Billing Tool](/konfiguration/billing)

- Comando con [azioni se/allora](/konfiguration/wenndann-aktionen) o [azioni basate su eventi](/konfiguration/wenndann-aktionen/ereignisaktionen)

- [Visualizzazioni](/konfiguration/visualisierung)

- [Uscite a contatto a potenziale zero](/schnittstellen/ein_und_ausgaenge) per il comando di apparecchi esterni, una delle quali con relè da 8A

- Ingresso a contatto a potenziale zero per segnale tariffario o [ingresso digitale](/schnittstellen/ein_und_ausgaenge)

- [Interfacce](/) tramite API, CSV, MSCONS e IS-E

- Connessione dati crittografata in tempo reale con la smart-me Cloud 

## Dati tecnici

<Embed src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSQ2T_oNXpPR0sUnjcsWY-ymK0lgmZxopMCiyV0gQq9rV7fH5oJEYEVx0a4AUHNfunOHC5igswOLVyi/pubhtml?gid=0&range=A1:B27&single=true&widget=false&headers=false&chrome=false" height="689px" title="Contatore trifase Telstar 80A" />

## Display

<div className="row">
<div className="col col--7">

Valore / simbolo Descrizione

1.8.1 Codice OBIS per la lettura del contatore visualizzata

T1 Tariffa attiva (tariffa 1 o tariffa 2)

Freccia Direzione della corrente (destra prelievo / sinistra immissione)

Ricezione (barre) Intensità del segnale WiFi

0000053.2 Lettura del contatore

5520W Potenza misurata istantanea con unità

kWh Unità della lettura del contatore visualizzata

M Funzione non più utilizzata (può essere ignorata)

</div>
<div className="col col--5 text--center">

![Contatore trifase Telstar 80A – Figura 2](/img/produkte-telstar/02.png)

</div>
</div>

Il contatore ha un display a rotazione. I punti descritti di seguito vengono visualizzati uno dopo l'altro. Dopo l'ultimo punto viene visualizzato di nuovo il primo.

Lettura del contatore (codice OBIS seguito dalla lettura del contatore) 

1.8.1 (A+) Energia attiva prelievo tariffa 1
1.8.2 (A+) Energia attiva prelievo tariffa 2
2.8.1 (A+) Energia attiva immissione tariffa 1
2.8.2 (A+) Energia attiva immissione tariffa 2
5.8.0 (Q1) Energia reattiva induttiva prelievo totale
6.8.0 (Q2) Energia reattiva capacitiva prelievo totale
7.8.0 (Q3) Energia reattiva induttiva immissione totale
8.8.0 (Q4) Energia reattiva capacitiva immissione totale

Firmware (codice OBIS seguito da informazioni)

C.1.6 Ch: 762A Checksum del firmware
0.2.0 V 1.1 Versione del firmware

Visualizzazione errori (codice OBIS seguito da messaggi di errore)

C.60.9 Fraud Flag (rilevato possibile tentativo di frode)
PhL: 1 solo fase L1 collegata
PhL: 2 solo fase L2 collegata
PhL: 3 solo fase L3 collegata
PhL: 23 fase L1 non collegata
PhL: 13 fase L2 non collegata
PhL: 12 fase L3 non collegata
Sequenza delle fasi corretta: le cifre sono accese fisse
Sequenza delle fasi errata: le cifre lampeggiano

## Dimensioni e collegamenti

I dati \*.DXF e \*.DWG si trovano nell'archivio ZIP nella sezione Download.

### Dimensioni \[mm\]

<div className="row">
<div className="col col--6 text--center">

![Contatore trifase Telstar 80A – Figura 3](/img/produkte-telstar/03.png)

</div>
<div className="col col--6 text--center">

![Contatore trifase Telstar 80A – Figura 4](/img/produkte-telstar/04.png)

</div>
</div>

### Schema di collegamento

![Contatore trifase Telstar 80A – Figura 5](/img/produkte-telstar/05.png)

## Funzioni dei tasti

<div className="row">
<div className="col col--5 text--center">

![Contatore trifase Telstar 80A – Figura 6](/img/produkte-telstar/06.png)

</div>
<div className="col col--7">

T1 Tasto per l'installazione

Se si preme il tasto T1 per 10 secondi, viene creata una rete WiFi locale per l'installazione

T1 + T2 Riavvio

Premere contemporaneamente i tasti T1 e T2 per 10 secondi per forzare un riavvio.

T2 Funzioni speciali

Breve: se si preme T2 per >2s, il LED verde viene commutato (da spento ad acceso o da acceso a spento). Se è attivato, indica lo stato della connessione 

🟢 Verde fisso: connesso alla smart-me Cloud

❇️ Verde lampeggiante: connessione in corso o nessuna connessione

Lungo: se si preme T2 per >8s, la visualizzazione della potenza viene commutata tra potenza attiva e reattiva. Inoltre il LED degli impulsi di taratura passa tra energia attiva ed energia reattiva.

Molto lungo: se si preme T2 per >14s, l'uscita a impulsi S0-0 viene commutata tra potenza attiva e potenza reattiva.

Nota: questa impostazione modifica solo la visualizzazione sul display, non nella smart-me Cloud (app e sito web). Se si desidera visualizzare l'energia reattiva nella Cloud, occorre impostarlo nelle impostazioni generali (Allgemeine Einstellungen). 


</div>
</div>

## LED

<div className="row">
<div className="col col--5 text--center">

![Contatore trifase Telstar 80A – Figura 7](/img/produkte-telstar/07.png)

</div>
<div className="col col--7">

🟢 LED verde - Stato della connessione

- Indica lo stato della connessione alla smart-me Cloud. a) Lampeggiante = errore di connessione b) Sempre acceso = connessione OK

</div>
</div>

<div className="row">
<div className="col col--5 text--center">

![Contatore trifase Telstar 80A – Figura 8](/img/produkte-telstar/08.png)

</div>
<div className="col col--7">

🔴 LED rosso - LED a impulsi

- Indica la potenza attiva o reattiva attualmente prelevata con 1000 impulsi/kWh o 1000 impulsi/kVArh. Con il tasto T2 si può impostare se visualizzare la potenza attiva o reattiva.

- Ad esempio: un LED con l'indicazione «1000 impulsi/kWh» lampeggia 1000 volte quando è stato prelevato o immesso 1 chilowattora (kWh) di energia. Se i 1000 impulsi sono stati contati nell'arco di 1 ora, è stata misurata una potenza costante di 1 kW.

</div>
</div>

## Configurare ingressi e uscite

Il Telstar 80A dispone di due uscite digitali e di un ingresso digitale, utilizzabili come ingressi e uscite a impulsi o come contatto commutabile a potenziale zero. I dettagli sono disponibili nella pagina wiki [Ingressi e uscite](/schnittstellen/ein_und_ausgaenge) 

Il Telstar 80A dispone, su un'uscita digitale, di un relè in grado di commutare fino a 8A.

## Tecnologia mesh

In caso di ricezione WiFi molto debole o assente, il Telstar 80A si collega automaticamente tramite la funzione mesh a un altro contatore vicino entro la portata. Quest'ultimo si occupa quindi della comunicazione con la smart-me Cloud. La tecnologia mesh garantisce ai contatori una maggiore disponibilità nei confronti della smart-me Cloud. Non è possibile disattivare la funzione mesh sul contatore. Con [Modbus TCP](/schnittstellen/modbus-tcp) attivato valgono limitazioni specifiche.

## Informazioni di spedizione

Numero articolo: 202063
Nome articolo: smart-me 3-Phasen-Energiezähler 80A MID Telstar Wifi

Numero di tariffa doganale: 9028.3019

Peso con imballaggio: 415g

## Download e dichiarazione di conformità

[Scheda tecnica tedesco](https://docs.google.com/presentation/d/1Kp-hwT2kkFY1yaaRTc2gtDwkJTZTEgnx3JlDgXhljGA/export/pdf)

[Scheda tecnica inglese](https://docs.google.com/presentation/d/1AuzVbDnoAHAyyoMNErOYJBa-0F5bUBsjTG5ghxqtLrY/export/pdf)

[Dichiarazione di conformità CE](https://drive.google.com/file/d/1mcZJJhHeKQ1wN0q8yE8ROKnRZXx-wo3b/view?usp=sharing)

[Schema di collegamento](https://drive.google.com/file/d/1400_Edqq9WfG48wg-60NUsQZ5CrBbM5B/view?usp=sharing)

[Schema di collegamento file ZIP](https://drive.google.com/file/d/1aKyx7qWyNh56Mrj-iAzfRxW_baVQtTmo/view?usp=share_link) (i dati \*.DXF e \*.DWG si trovano nell'archivio ZIP)

[Quick Starter](https://docs.google.com/document/d/1qW-3HcgJ3si6LE-HPIYaLg9N9HZhR4PZgu0LJcP5_DY/export?format=pdf)

## FAQ

<details id="in-welchem-intervall-senden-die-zähler-daten">
<summary>A quale intervallo i contatori inviano i dati?</summary>

- Ogni 15 minuti, ossia alle xx:00:00 xx:15:00, xx:30:00 e xx:45:00. In questo modo vengono inviati i dati necessari per la curva di carico. In caso di interruzione della connessione, questi dati vengono memorizzati localmente e inviati in seguito.

- Inoltre almeno ogni 330 secondi.

- Infine, quando si verifica uno dei seguenti eventi:

    - Variazione della lettura del contatore superiore a 100Wh

    - Variazione della potenza superiore a 100W

    - Variazione della corrente superiore a 1A

    - Variazione della tensione superiore a 1V

    - Ogni secondo, se il contatore è selezionato nella GUI (portale smart-me)

</details>

<details id="kann-ich-den-zählerstand-auf-null-zurücksetzten">
<summary>Posso azzerare la lettura del contatore?</summary>

No, poiché i nostri contatori vengono utilizzati per i conteggi, non è possibile azzerarli.

</details>
