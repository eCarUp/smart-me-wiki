---
title: 'Conteggiare l''energia (Svizzera)'
slug: '/konfiguration/billing'
description: 'Per poter creare conteggi dei costi energetici è necessario un abbonamento smart-me Professional.'
sidebar_label: 'Fatturazione'
naechste_schritte: [konfiguration/billing/einstellungen]
vorheriger_schritt: konfiguration/wenndann-aktionen/alarme
---
<Menueweg>Fatturazione</Menueweg>

### Requisito

Per poter creare conteggi dei costi energetici è necessario un abbonamento smart-me Professional. 

## Configurare il conteggio passo dopo passo

Con queste istruzioni passo dopo passo desideriamo aiutarLa nella configurazione del Suo Billing. Tenga presente che si tratta solo di un esempio a cui può fare riferimento. A seconda della struttura del Suo immobile, vi saranno differenze rispetto al nostro esempio. 

Ogni passaggio ha una propria pagina. Può seguirle in ordine (in fondo a ogni pagina è indicato come proseguire) oppure passare direttamente da qui al punto in cui si trova.

<Ablauf land="ch" bis="konfiguration/billing/rechnung-erstellen" />

## Strumenti

[Calcolatore della tariffa elettrica smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

## Webinar smart-me Billing dalla A alla Z

Nel nostro webinar viene spiegato passo dopo passo come creare conteggi dei costi energetici con lo strumento Billing:

<div className="row">
<div className="col col--6">

<Video src="0AvKOogoW5Q" title="Video YouTube, smart-me Billing per utenti avanzati" />

</div>
<div className="col col--6">

<Video src="mK1HYLRtBUI" title="Video YouTube, smart-me Billing - tariffe virtuali, potenza di punta, modifica del noleggio del contatore" />

Contenuto del video

- Configurazione da ore di punta e ore fuori punta a tariffa unica

- Adeguamento dei prezzi delle tariffe virtuali

- Potenza di punta

- Noleggio del contatore

</div>
</div>

## Esempi di fatture smart-me Billing

- [Esempio: conteggio dell'elettricità (.pdf)](https://drive.google.com/file/d/1vVJ5y0_sV8l2NgH8Pf-gJCn36MmDXWfe/view?usp=sharing)

- [Esempio: conteggio VEWA (.pdf)](https://drive.google.com/file/d/1-YR543M1bawFrKgrj-MsQR5Es_wKFzRu/view?usp=sharing)

## Indicazioni utili sui dati tariffari

### Visualizzazione

<div className="row">
<div className="col col--7">

Nella vista standard della cartella dell'unità di conteggio (ad es. un appartamento) viene ora visualizzato un nuovo riquadro. Questo indica le letture del contatore per le tariffe virtuali. Facendo clic su questo riquadro viene visualizzato il profilo di carico per le tariffe virtuali. 

</div>
<div className="col col--5 bild--mitte">

![Billing: conteggiare l'energia – Figura 12](/img/konfiguration-billing/12.jpg)

</div>
</div>

### Come viene ripartita l'energia solare

<div className="row">
<div className="col col--7">

La piattaforma smart-me utilizza il contatore di produzione (contatore FV) per determinare la quantità di energia elettrica prodotta e il contatore virtuale del consumo totale per determinare la quantità di energia elettrica consumata. Da questi dati viene calcolata una quota percentuale di energia solare. 

Ogni contatore elettrico (inquilino) ha quindi diritto alla stessa quota di energia solare per ogni intervallo di 15 minuti, ad es. il 40% del suo consumo in kWh.

Esempio di ripartizione dell'energia solare

- Consumo totale 10kWh

- Energia solare 6kWh (60% solare / 40% rete)

- Consumo inquilino 1 6kWh (3,6kWh solare / 2,4kWh rete)

- Consumo inquilino 2 4kWh (2,4kWh solare / 1,6 kWh rete)

La precisione può essere migliorata configurando il contatore di bilancio per la tariffa solare.

</div>
<div className="col col--5 bild--mitte">

![Billing: conteggiare l'energia – Figura 13](/img/konfiguration-billing/13.png)

</div>
</div>
