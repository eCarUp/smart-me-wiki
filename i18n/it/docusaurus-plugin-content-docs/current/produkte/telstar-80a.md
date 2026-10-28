---
title: 'Contatore trifase Telstar 80A'
slug: '/produkte/telstar-80a'
description: 'Lo smart-me Telstar 80A è un contatore di energia con certificazione MID e interfaccia WiFi integrata per la trasmissione di dati in tempo reale.'
sidebar_label: 'Contatore trifase Telstar 80A'
---
Lo smart-me Telstar 80A è un contatore di energia con certificazione MID e interfaccia WiFi integrata per la trasmissione di dati in tempo reale. Il contatore sincronizza i valori misurati in modo automatico e crittografato nella smart-me Cloud. I dati possono essere esportati ed elaborati nel portale smart-me oppure, tramite la nostra interfaccia aperta, in sistemi di terzi. Il contatore dispone di due uscite digitali per il comando di apparecchi a potenziale libero.

![Contatore trifase Telstar 80A – Figura 1](/img/produkte-telstar-80a/01.jpg)

## Funzioni

- [Installazione](/konfiguration/inbetriebnahme) con l'app smart-me gratuita.

- Fatturazione con lo [smart-me Billing Tool](/konfiguration/billing)

- Comando con [azioni se/allora](/konfiguration/wenndann-aktionen) o [azioni basate su eventi](/konfiguration/wenndann-aktionen/ereignisaktionen)

- [Visualizzazioni](/konfiguration/visualisierung)

- [Uscite a contatto a potenziale libero](/schnittstellen/ein-und-ausgaenge) per il comando di apparecchi esterni, una delle quali con relè da 8A

- Ingresso a contatto a potenziale libero per segnale tariffario o [ingresso digitale](/schnittstellen/ein-und-ausgaenge)

- [Interfacce](/) tramite API, CSV, MSCONS e IS-E

- Connessione dati crittografata in tempo reale con la smart-me Cloud 

## Dati tecnici

| Caratteristica | Valore |
| --- | --- |
| Certificazione del prodotto | CE, MID 2014/32/EU, CH-curva di carico / energia reattiva, RED |
| Classe di precisione per energia attiva/energia reattiva | B (MID) / 2 (IEC) |
| Direzione | +A (prelievo), -A (immissione), +R, -R |
| Quadranti | Q1, Q2, Q3, Q4 |
| Tensione di rete | 3x230/400VAC 50Hz |
| Campo di misura della corrente Imin-Iref(Imax) | 0.25-5(80)A |
| Sezione del conduttore | 2.5 - 35 mm² |
| Categoria dello strumento di misura | CAT III |
| Intervallo di temperatura | da -25°C a +70°C |
| Umidità relativa | Media annua 75%, senza condensa<br />temporaneamente 95%, senza condensa |
| Valori misurati | Energia attiva (kWh), potenza attiva (kW)<br />Energia reattiva (kvarh), potenza reattiva (kvar)<br />Corrente (A), tensione (V), fattore di potenza (cosφ) |
| Autoconsumo | < 0.8W per fase |
| Tariffe | Due tramite ingresso tariffario digitale E1, tariffe virtuali illimitate nella smart-me Cloud |
| Uscita S0 | 1'000 Imp/kWh |
| Ingresso digitale E1 | Ingresso tariffario a potenziale libero (12 VDC / 230 VAC) |
| Uscite digitali S0-0, S-1 | Uscite a potenziale libero (SG Ready), 12 VDC / 230 VAC<br />S0-0: max. 0.4W<br />S-1: max. 8A@230VAC o 5A@12VDC |
| Comunicazione | WLAN IEEE 802.11 b/g/n (2.4 GHz) |
| Volume di dati | < 75MB/mese |
| Velocità di trasmissione dati | < 0.1 Mbit/s |
| Standard di sicurezza WLAN | WEP, WPA-PSK/WPA2-PSK |
| Memoria dati | 2 mesi |
| Grado di protezione involucro/collegamenti, utilizzo | IP20 / IP51 (installato nel quadro elettrico), interni |
| Montaggio | Guida DIN |
| Dimensioni | 5 moduli, L:90mm P:90mm A:65.7mm |
| Ubicazione dei server | Svizzera |
| Classe di protezione | II |

## Display

<div className="row">
<div className="col col--7">

**Valore / simbolo Descrizione**

- 1.8.1 Codice OBIS\-della lettura del contatore visualizzata

- T1 Tariffa attiva (tariffa 1 o tariffa 2)

- Freccia Direzione della corrente (destra prelievo / sinistra immissione)

- Ricezione (barre) Intensità del segnale WiFi

- 0000053.2 Lettura del contatore

- 5520W Potenza misurata istantanea con unità

- kWh Unità della lettura del contatore visualizzata

- M Funzione non più utilizzata (può essere ignorata)

</div>
<div className="col col--5 bild--mitte">

![Contatore trifase Telstar 80A – Figura 2](/img/produkte-telstar-80a/02.png)

</div>
</div>

Il contatore ha un display a scorrimento. I punti descritti di seguito vengono visualizzati uno dopo l'altro. Dopo l'ultimo punto viene nuovamente visualizzato il primo.

**Lettura del contatore (codice OBIS seguito dalla lettura del contatore)**

- 1.8.1 (A+) Energia attiva prelievo tariffa 1
- 1.8.2 (A+) Energia attiva prelievo tariffa 2
- 2.8.1 (A+) Energia attiva immissione tariffa 1
- 2.8.2 (A+) Energia attiva immissione tariffa 2
- 5.8.0 (Q1) Energia reattiva induttiva prelievo totale
- 6.8.0 (Q2) Energia reattiva capacitiva prelievo totale
- 7.8.0 (Q3) Energia reattiva induttiva immissione totale
- 8.8.0 (Q4) Energia reattiva capacitiva immissione totale

**Firmware (codice OBIS seguito da informazioni)**

- C.1.6 Ch: 762A Checksum del firmware
- 0.2.0 V 1.1 Versione del firmware

**Visualizzazione errori (codice OBIS seguito da messaggi di errore)**

- C.60.9 Fraud Flag (rilevato possibile tentativo di frode)
- PhL: 1 collegata solo la fase L1
- PhL: 2 collegata solo la fase L2
- PhL: 3 collegata solo la fase L3
- PhL: 23 fase L1 non collegata
- PhL: 13 fase L2 non collegata
- PhL: 12 fase L3 non collegata
- Sequenza delle fasi corretta: le cifre sono accese in modo fisso
- Sequenza delle fasi errata: le cifre lampeggiano

## Dimensioni e collegamenti

I dati \*.DXF e \*.DWG si trovano nell'archivio ZIP nei download.

### Dimensioni \[mm\]

<div className="row">
<div className="col col--6 bild--mitte">

![Contatore trifase Telstar 80A – Figura 3](/img/produkte-telstar-80a/03.png)

</div>
<div className="col col--6 bild--mitte">

![Contatore trifase Telstar 80A – Figura 4](/img/produkte-telstar-80a/04.png)

</div>
</div>

### Schema di collegamento

![Contatore trifase Telstar 80A – Figura 5](/img/produkte-telstar-80a/05.png)

## Funzioni dei tasti

![Contatore trifase Telstar 80A – Figura 6](/img/produkte-telstar-80a/06.png)

T1 Tasto per l'installazione

Se il tasto T1 viene premuto per 10 secondi, viene generata una rete WiFi locale per l'installazione

T1 + T2 Riavvio

Premere contemporaneamente i tasti T1 e T2 per 10 secondi per forzare un riavvio.

T2 Funzioni speciali

Breve: se T2 viene premuto >2s, il LED verde cambia stato (da spento ad acceso o da acceso a spento). Se attivato, indica lo stato della connessione 

🟢 Verde fisso: connesso alla smart-me Cloud

❇️ Verde lampeggiante: connessione in corso o nessuna connessione

Lungo: se T2 viene premuto >8s, la visualizzazione della potenza viene commutata tra potenza attiva e reattiva. Inoltre il LED degli impulsi di taratura passa da energia attiva a energia reattiva.

Molto lungo: se T2 viene premuto >14s, l'uscita a impulsi S0-0 viene commutata tra potenza attiva e potenza reattiva.

Nota: questa impostazione modifica solo la visualizzazione sul display, non nella smart-me Cloud (app e sito web). Se l'energia reattiva deve essere visualizzata nella Cloud, occorre impostarlo nelle impostazioni generali (Allgemeine Einstellungen). 


## LED

<div className="row">
<div className="col col--5 bild--mitte">

![Contatore trifase Telstar 80A – Figura 7](/img/produkte-telstar-80a/07.png)

</div>
<div className="col col--7">

🟢 LED verde - Stato della connessione

- Indica lo stato della connessione alla smart-me Cloud. a) Lampeggiante = errore di connessione b) Sempre acceso = connessione OK

</div>
</div>

<div className="row">
<div className="col col--5 bild--mitte">

![Contatore trifase Telstar 80A – Figura 8](/img/produkte-telstar-80a/08.png)

</div>
<div className="col col--7">

🔴 LED rosso - LED a impulsi

- Indica la potenza attiva o reattiva attualmente prelevata in 1000 impulsi/kWh risp. 1000 impulsi/kVArh. Con il tasto T2 è possibile impostare se viene visualizzata la potenza attiva o quella reattiva.

- Ad esempio: un LED con la marcatura «1000 impulsi/kWh» lampeggia 1000 volte quando è stato prelevato o immesso 1 chilowattora (kWh) di energia. Se i 1000 impulsi sono stati contati nell'arco di 1 ora, è stata misurata una potenza costante di 1 kW.

</div>
</div>

## Configurare ingressi e uscite

Il Telstar 80A dispone di due uscite digitali e di un ingresso digitale, che possono essere utilizzati come ingressi e uscite a impulsi o come contatto commutabile a potenziale libero. I dettagli sono disponibili nella pagina wiki [Ingressi e uscite](/schnittstellen/ein-und-ausgaenge) 

Il Telstar 80A dispone su un'uscita digitale di un relè in grado di commutare fino a 8A.

## Tecnologia mesh

In caso di ricezione WiFi molto debole o assente, il Telstar 80A si connette automaticamente tramite la funzione mesh a un altro contatore vicino nel raggio di portata. Quest'ultimo assume quindi la comunicazione con la smart-me Cloud. La tecnologia mesh garantisce che i contatori abbiano una maggiore disponibilità verso la smart-me Cloud. Non è possibile disattivare la funzione mesh sul contatore. Con [Modbus TCP](/schnittstellen/modbus-tcp) attivato valgono limitazioni specifiche.

## Informazioni di spedizione

Numero d'articolo: 202063
Nome dell'articolo: smart-me 3-Phasen-Energiezähler 80A MID Telstar Wifi

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

- Ogni 15 minuti, ossia alle xx:00:00, xx:15:00, xx:30:00 e xx:45:00. In questo modo vengono inviati i dati necessari per la curva di carico. In caso di interruzione della connessione, questi dati vengono memorizzati localmente e inviati successivamente.

- Inoltre almeno ogni 330 secondi.

- Infine, quando si verifica uno dei seguenti eventi:

    - Variazione della lettura del contatore superiore a 100Wh

    - Variazione della potenza superiore a 100W

    - Variazione della corrente superiore a 1A

    - Variazione della tensione superiore a 1V

    - Ogni secondo, se il contatore è selezionato nella GUI (portale smart-me)

</details>

<details id="kann-ich-den-zählerstand-auf-null-zurücksetzten">
<summary>È possibile azzerare la lettura del contatore?</summary>

No, poiché i nostri contatori vengono utilizzati per i conteggi, non è possibile azzerarli.

</details>
