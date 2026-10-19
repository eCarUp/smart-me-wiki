---
title: 'Billing: conteggio dell''energia'
slug: '/konfiguration/billing'
description: 'Per poter creare conteggi dei costi energetici ti serve un abbonamento smart-me Professional.'
sidebar_label: 'Fatturazione'
naechste_schritte: [konfiguration/benutzerkonfiguration]
optionale_schritte: [konfiguration/billing/stromtarife-definieren/index, konfiguration/billing/vewa-abrechnung]
vorheriger_schritt: konfiguration/wenndann-aktionen/alarme
---
### Requisito

Per poter creare conteggi dei costi energetici ti serve un abbonamento smart-me Professional. 

## Strumenti

[Calcolatore delle tariffe elettriche smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

## Webinar smart-me Billing dalla A alla Z

Nel nostro webinar viene spiegato passo dopo passo come creare conteggi dei costi energetici con lo strumento Billing:

<Video src="0AvKOogoW5Q" title="Video YouTube, smart-me Billing per utenti avanzati" />

<Video src="mK1HYLRtBUI" title="Video YouTube, smart-me Billing - tariffe virtuali, potenza di punta, modifica del noleggio del contatore" />

Contenuto del video

- Configurazione da ore di punta e ore fuori punta a tariffa unica

- Adeguamento dei prezzi delle tariffe virtuali

- Potenza di punta

- Noleggio del contatore


## Esempi di fatture smart-me Billing

Beispiel Energiekostenabrechnung.pdf

Esempio: conteggio dell'elettricità

Beispiel\_Rechnung\_VEWA\_Heizkosten.pdf

Esempio: conteggio VEWA

## Configurare il conteggio passo dopo passo

Con queste istruzioni passo dopo passo desideriamo aiutarti nella configurazione del tuo Billing. Tieni presente che si tratta solo di un esempio a cui puoi orientarti. A seconda della struttura del tuo immobile, ci saranno differenze rispetto al nostro esempio. 

## Impostazioni della fatturazione

<div className="row">
<div className="col col--7">

Come prima cosa, vai nelle impostazioni della fatturazione (Einstellungen der Rechnungsstellung).

Qui configura la valuta e l'applicazione dell'IVA.

Impostazioni concrete per l'IVA:

- Caso A: sei un RCP (raggruppamento ai fini del consumo proprio), realizzi sicuramente meno di 100'000 CHF di fatturato con l'elettricità e non ti sei assoggettato volontariamente all'IVA:

    \- IVA 0%

    \- Imposta già inclusa nei prezzi (Steuer in Preise bereits inbegriffen): SÌ

- Caso B: sei un RCP e realizzi 100'000 CHF o più di fatturato con la vendita di elettricità oppure ti sei assoggettato volontariamente all'IVA:

    \- IVA 8.1%

    \- Imposta già inclusa nei prezzi (Steuer in Preise bereits inbegriffen): NO

</div>
<div className="col col--5 text--center">

![Billing: conteggio dell'energia – Figura 1](/img/konfiguration-billing/01.png)

![Billing: conteggio dell'energia – Figura 2](/img/konfiguration-billing/02.png)

</div>
</div>

Già che ci sei, configura anche il tuo logo per la fattura.

Completa l'intestazione con il contatto e l'indirizzo del mittente della fattura e rivolgi qualche parola cordiale ai tuoi clienti nel piè di pagina.

![Billing: conteggio dell'energia – Figura 3](/img/konfiguration-billing/03.png)

## Configurazione della fatturazione

<div className="row">
<div className="col col--5">

Vai ora alla configurazione della fatturazione (Rechnungsstellung Konfiguration) per configurare i conteggi degli immobili.

</div>
<div className="col col--7 text--center">

![Billing: conteggio dell'energia – Figura 4](/img/konfiguration-billing/04.png)

</div>
</div>

<div className="row">
<div className="col col--6">

1.  ### Creare l'immobile

Nella fatturazione è possibile aggiungere (creare) l'immobile. 

Questa operazione va eseguita per tutti i nodi che contengono unità di conteggio.

In questa fase, tutte le sottocartelle già create e i contatori assegnati vengono attribuiti automaticamente. Per questo motivo raccomandiamo di farlo sempre prima di creare l'immobile in smart-me Billing.

I punti di misura che devono essere ripartiti e che si trovano nel nodo "Contatori tecnici" (Technischen Zähler) devono ancora essere assegnati manualmente.

</div>
<div className="col col--6 text--center">

![Billing: conteggio dell'energia – Figura 5](/img/konfiguration-billing/05.png)

</div>
</div>

### 2\. Assegnare manualmente i contatori a un'unità di conteggio

<div className="row">
<div className="col col--7">

Durante la creazione dell'immobile, i contatori vengono assegnati automaticamente al 100% all'unità di conteggio (cartella).

Se desideri ripartire un contatore (p. es. parti comuni) secondo una chiave di ripartizione o modificarlo in un secondo momento, devi farlo manualmente.

- A sinistra, seleziona l'unità di conteggio (sottocartella, p. es. APP 1)

- Clicca p. es. su Aggiungi (Hinzufügen) alla voce Elettricità (Elektrizität) 

- Seleziona il contatore desiderato e indica in quale percentuale deve essere addebitato.

La procedura descritta funziona in modo analogo per gli altri tipi di energia (calore, freddo ecc.)

</div>
<div className="col col--5 text--center">

![Billing: conteggio dell'energia – Figura 6](/img/konfiguration-billing/06.png)

</div>
</div>

### 3\. Inserire l'IBAN

<div className="row">
<div className="col col--7">

In smart-me Billing è possibile attivare facoltativamente la QR-fattura.

Dopo aver inserito i dati del conto, a ogni unità di conteggio (inquilino) viene allegata una QR-fattura per il pagamento.

smart-me riconosce automaticamente i mittenti compilati correttamente se l'indirizzo di fatturazione nel Billing è inserito su 3 righe. Se si sceglie una ditta o un appellativo, questo deve essere aggiunto prima del nome.

p. es.

```
Firma AG, Peter Lustig
Löwenzahnstrasse 42
6666 Risch
```

Se non viene riconosciuto un indirizzo corretto, il campo mittente (Pagabile da) (Absender (Zahlbar durch)) nella QR-fattura rimane vuoto.

smart-me non supporta i numeri di riferimento. Per poterli utilizzare è necessario un [sistema di terzi](/drittsysteme) che li supporti (p. es.[Bexio](/drittsysteme/bexio)). 

Per identificare la fattura senza riferimento, sulla QR-fattura viene aggiunta un'informazione supplementare (comunicazione al beneficiario), composta come segue: nome dell'unità di conteggio (nome della cartella).

La rappresentazione è ottimizzata per l'invio tramite e-mail. Se le fatture vengono stampate, raccomandiamo di disattivare la QR-fattura e di ordinarla presso la banca.

</div>
<div className="col col--5 text--center">

![Billing: conteggio dell'energia – Figura 7](/img/konfiguration-billing/07.jpg)

![Billing: conteggio dell'energia – Figura 8](/img/konfiguration-billing/08.png)

</div>
</div>

### 4\. Registrare l'elenco degli inquilini

Per il conteggio secondo VEWA, tutti i contratti di locazione e gli sfitti devono essere indicati a smart-me senza lacune.

- Menu Fatturazione (Rechnungsstellung)

- Configurazione (Konfiguration)

- A sinistra, seleziona l'unità di conteggio (sottocartella, p. es. APP 1)

- Aggiorna l'indirizzo e la validità

- L'e-mail è facoltativa e viene utilizzata solo per l'invio automatico delle fatture.


Nota per l'esportazione in software immobiliari con file DTA-VHKA:
Se desideri utilizzare la VEWA, ma esporti i dati in un altro sistema, non è necessario registrare l'elenco degli inquilini: questo viene creato tramite il file di importazione.
Assicurati che tutti i rapporti di locazione e gli sfitti siano registrati.

![Billing: conteggio dell'energia – Figura 9](/img/konfiguration-billing/09.png)

![Billing: conteggio dell'energia – Figura 10](/img/konfiguration-billing/10.png)

### 5\. Configurare le tariffe elettriche

- Menu Fatturazione (Rechnungsstellung)

- Configurazione (Konfiguration)

- A sinistra, seleziona l'immobile (cartella principale, p. es. Altgasse 13)

- Aggiungi le tariffe elettriche virtuali (Virtuelle Stromtarife Hinzufügen). (p. es. ore di punta, ore fuori punta, tariffa solare)

In dettaglio: [Definire le tariffe elettriche](/konfiguration/billing/stromtarife-definieren)


### 6\. Configurare calore / acqua

Per la tariffazione e il conteggio multienergia esistono in linea di principio due possibilità di configurazione:

Conteggio senza funzione VEWA

- Conteggio mediante una tariffa energetica calcolata esternamente per ogni tipo di energia. Viene gestita con un prezzo in CHF/m3 o CHF/kWh nell'immobile, sotto le tariffe virtuali.


Conteggio con funzione VEWA (raccomandato)

- È possibile registrare i costi di calore / acqua maturati nel corso dell'anno.  La tariffa viene poi calcolata sul periodo e ripartita sulle unità di conteggio mediante chiavi di ripartizione. 

In dettaglio: [Configurare il conteggio VEWA](/konfiguration/billing/vewa-abrechnung)



### 7\. Configurare altri costi per l'elettricità (se necessario)

Nel campo Altro (Sonstiges) è possibile aggiungere ulteriori voci di costo. Ciò è possibile individualmente per ogni unità di conteggio (unità di conteggio) oppure globalmente per tutte le unità di conteggio (immobile). 

A livello dell'immobile:

Nel campo Altro (Sonstiges) è possibile aggiungere ulteriori voci di costo. Ciò è possibile individualmente per ogni unità di conteggio (unità di conteggio) oppure globalmente per tutte le unità di conteggio (immobile). 

Esempio:
L'80% della quota dei costi di base del fornitore di energia deve essere addebitato in egual misura a tutti i partecipanti in relazione alla tariffa solare.

- La tassa inserita viene aggiunta mensilmente su tutte le fatture

Nota: gli altri costi (Sonstiges) sono disponibili solo con la fattura dell'elettricità.

A livello dell'unità di conteggio

Esempio:
Una stazione di ricarica viene noleggiata e deve essere fatturata mensilmente all'unità di conteggio.

- I costi vengono addebitati solo a quell'unità di conteggio

![Billing: conteggio dell'energia – Figura 11](/img/konfiguration-billing/11.png)

### 8\. Creare la fattura

Quando il riquadro blu delle tariffe virtuali si trova sulla data odierna, è possibile creare una fattura di prova.

- Menu Fatturazione (Rechnungsstellung)

- Fatture (Rechnungen)

- Inserisci la data

- Crea l'anteprima della fattura (Rechnungsvorschau erstellen)


Se sei soddisfatto dell'anteprima, puoi tornare indietro e creare le fatture effettive.

In questa pagina trovi una descrizione dei messaggi di errore più frequenti e delle possibili soluzioni: [Messaggi di errore Billing](/stoerungsbehebung/billing-fehlermeldungen) 


## Indicazioni utili sui dati tariffari

### Visualizzazione

<div className="row">
<div className="col col--7">

Nella vista standard della cartella dell'unità di conteggio (p. es. un appartamento) viene ora visualizzato un nuovo riquadro. Questo indica le letture del contatore per le tariffe virtuali. Cliccando su questo riquadro viene visualizzato il profilo di carico per le tariffe virtuali. 

</div>
<div className="col col--5 text--center">

![Billing: conteggio dell'energia – Figura 12](/img/konfiguration-billing/12.jpg)

</div>
</div>

### Come viene ripartita l'elettricità solare

La piattaforma smart-me utilizza il contatore di produzione (contatore FV) per determinare la quantità di elettricità prodotta e il contatore virtuale del consumo totale per determinare la quantità di elettricità consumata. Da ciò viene calcolata una quota percentuale di elettricità solare. 

Ogni contatore elettrico (inquilino) ha quindi diritto alla stessa quota di elettricità solare ogni 15 minuti, p. es. il 40% del suo consumo in kWh.

Esempio di ripartizione dell'elettricità solare

- Consumo totale 10kWh

- Elettricità solare 6kWh (60% solare / 40% rete)

- Consumo inquilino 1 6kWh (3,6kWh solare / 2,4kWh rete)

- Consumo inquilino 2 4kWh (2,4kWh solare / 1,6 kWh rete)


La precisione può essere migliorata configurando il contatore di bilancio per la tariffa solare.

![Billing: conteggio dell'energia – Figura 13](/img/konfiguration-billing/13.png)
