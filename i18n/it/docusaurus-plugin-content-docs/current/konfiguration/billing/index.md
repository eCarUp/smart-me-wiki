---
title: 'Billing: conteggio dell''energia'
slug: '/konfiguration/billing'
description: 'Per creare conteggi dei costi energetici è necessario un abbonamento smart-me Professional.'
sidebar_label: 'Fatturazione'
---
### Requisito

Per creare conteggi dei costi energetici è necessario un abbonamento smart-me Professional. 

## Tools

[Calcolatore delle tariffe elettriche smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

## Webinar smart-me Billing dalla A alla Z

Nel nostro webinar viene spiegato passo per passo come creare conteggi dei costi energetici con lo strumento Billing:

<Video src="0AvKOogoW5Q" title="Video" />

<Video src="mK1HYLRtBUI" title="Video" />

Contenuto del video

- Configurazione da ore di punta e ore fuori punta a tariffa unica

- Adeguamento dei prezzi delle tariffe virtuali

- Potenza di picco

- Noleggio del contatore


## Esempi di conteggio di smart-me Billing

Beispiel Energiekostenabrechnung.pdf

Esempio: conteggio dell'elettricità

Beispiel\_Rechnung\_VEWA\_Heizkosten.pdf

Esempio: conteggio VEWA

## Configurare il conteggio passo per passo

Con queste istruzioni passo per passo vogliamo aiutarti nella configurazione del tuo Billing. Tieni presente che si tratta solo di un esempio a cui puoi orientarti. A seconda della struttura del tuo immobile ci saranno differenze rispetto al nostro esempio. 

## Impostazioni della fatturazione

Per prima cosa vai alle impostazioni della fatturazione (Einstellungen der Rechnungsstellung).

Configura qui la valuta e l'applicazione dell'imposta sul valore aggiunto.



Impostazioni concrete per l'IVA:

- Caso A: sei un RCP (raggruppamento ai fini del consumo proprio) e realizzi con l'elettricità sicuramente meno di 100'000 CHF di fatturato e non ti sei assoggettato volontariamente all'IVA:
    \- IVA 0%
    \- Imposta già inclusa nei prezzi: SÌ

- Caso B: sei un RCP e realizzi 100'000 CHF o più di fatturato con la vendita di elettricità oppure ti sei assoggettato volontariamente all'IVA:
    \- IVA 8.1%
    \- Imposta già inclusa nei prezzi: NO


![Billing: conteggio dell'energia – Figura 1](/img/konfiguration-billing/01.png)

![Billing: conteggio dell'energia – Figura 2](/img/konfiguration-billing/02.png)

Approfitta dell'occasione per configurare subito anche il logo per la fattura.

Completa l'intestazione con il contatto e l'indirizzo del mittente della fattura e rivolgi qualche parola cordiale ai tuoi clienti nel piè di pagina.

![Billing: conteggio dell'energia – Figura 3](/img/konfiguration-billing/03.png)

## Configurazione della fatturazione

Vai ora alla configurazione della fatturazione (Rechnungsstellung Konfiguration) per configurare i conteggi degli immobili.

![Billing: conteggio dell'energia – Figura 4](/img/konfiguration-billing/04.png)

1.  ### Creare l'immobile


Nella fatturazione è possibile aggiungere (creare) l'immobile. 

Questa operazione viene ora eseguita per tutti i nodi che contengono unità di conteggio.

In questo passaggio tutte le sottocartelle già create e i contatori assegnati vengono attribuiti automaticamente. Per questo motivo consigliamo di farlo prima di creare l'immobile in smart-me Billing.

I punti di misura da distribuire che si trovano nel nodo "Contatore tecnico" (Technischer Zähler) devono ora essere assegnati manualmente.

![Billing: conteggio dell'energia – Figura 5](/img/konfiguration-billing/05.png)

### 2\. Assegnare manualmente un contatore a un'unità di conteggio

Al momento della creazione dell'immobile i contatori vengono assegnati automaticamente al 100% all'unità di conteggio (cartella).

Se desideri suddividere un contatore (ad es. Generale) secondo una chiave di ripartizione o modificarlo successivamente, devi farlo manualmente.

- Selezionare a sinistra l'unità di conteggio (sottocartella, ad es. APP 1)

- Fare clic ad es. su Aggiungi in corrispondenza di Elettricità 

- Seleziona il contatore desiderato e indica la percentuale da conteggiare.


La procedura descritta funziona in modo analogo per gli altri tipi di energia (calore, freddo ecc.)

![Billing: conteggio dell'energia – Figura 6](/img/konfiguration-billing/06.png)

### 3\. Inserire l'IBAN

In smart-me Billing è possibile attivare opzionalmente la fattura QR.

Dopo l'inserimento dei dati del conto, per ogni unità di conteggio (inquilino) viene allegata una fattura QR per il versamento.

smart-me riconosce automaticamente i mittenti compilati correttamente se l'indirizzo di fatturazione è registrato nel Billing su 3 righe. Se si sceglie una ditta o un recapito, questo deve essere aggiunto prima del nome.

ad es.

```
Firma AG, Peter Lustig
Löwenzahnstrasse 42
6666 Risch
```

Se non viene riconosciuto un indirizzo corretto, il campo mittente (pagabile da) nella fattura QR rimane vuoto.

smart-me non supporta i numeri di riferimento. Per poterli utilizzare è necessario un [sistema di terzi](/drittsysteme) che li supporti (ad es. [Bexio](/drittsysteme/bexio)). 

Per identificare la fattura senza riferimento, sulla fattura QR viene aggiunta un'informazione supplementare (comunicazione al beneficiario), composta come segue: nome dell'unità di conteggio (nome della cartella).

La rappresentazione è ottimizzata per l'invio via e-mail. Se le fatture vengono stampate, consigliamo di disattivare la fattura QR e di ordinarla presso la banca.

![Billing: conteggio dell'energia – Figura 7](/img/konfiguration-billing/07.jpg)

![Billing: conteggio dell'energia – Figura 8](/img/konfiguration-billing/08.png)

### 4\. Registrare l'elenco degli inquilini

Per il conteggio secondo VEWA tutti i contratti di locazione e i periodi di sfitto devono essere indicati in smart-me senza lacune.

- Menu Fatturazione (Rechnungsstellung)

- Configurazione

- Selezionare a sinistra l'unità di conteggio (sottocartella, ad es. APP 1)

- Gestire indirizzo e validità

- L'e-mail è opzionale e viene utilizzata solo per l'invio automatico delle fatture.


Nota per l'esportazione in software immobiliari con file DTA-VHKA:
se volete utilizzare la VEWA ma esportare i dati in un altro sistema, non dovete registrare alcun elenco degli inquilini: questo viene creato tramite il file di importazione.
Fate attenzione che tutti i rapporti di locazione e i periodi di sfitto siano registrati.

![Billing: conteggio dell'energia – Figura 9](/img/konfiguration-billing/09.png)

![Billing: conteggio dell'energia – Figura 10](/img/konfiguration-billing/10.png)

### 5\. Configurare le tariffe elettriche

- Menu Fatturazione (Rechnungsstellung)

- Configurazione

- Selezionare a sinistra l'immobile (cartella principale, ad es. Altgasse 13)

- Aggiungere tariffe elettriche virtuali. (ad es. ore di punta, ore fuori punta, tariffa solare)


### 6\. Configurare calore / acqua

Per la tariffazione e il conteggio della multienergia esistono fondamentalmente due possibilità di configurazione:

Conteggio senza funzione VEWA

- Conteggio mediante tariffa energetica calcolata esternamente per tipo di energia. Viene gestita con un prezzo in CHF/m3 o CHF/kWh nell'immobile, al di sotto delle tariffe virtuali.


Conteggio con funzione VEWA (consigliato)

- I costi di calore / acqua che maturano nel corso dell'anno possono essere registrati.  La tariffa viene poi calcolata sul periodo e distribuita alle unità di conteggio con chiavi di ripartizione. 


### Prossimi passaggi intermedi

[Configurare le tariffe elettriche](/konfiguration/billing/stromtarife-definieren)

[Configurare la VEWA](/konfiguration/billing/vewa-abrechnung)

### 7\. Configurare altri costi per l'elettricità (se necessario)

Nel campo Altro (Sonstiges) è possibile aggiungere ulteriori voci di costo. Ciò è possibile individualmente per ogni unità di conteggio (unità di conteggio) oppure globalmente per tutte le unità di conteggio (immobile). 

A livello dell'immobile:

Nel campo Altro (Sonstiges) è possibile aggiungere ulteriori voci di costo. Ciò è possibile individualmente per ogni unità di conteggio (unità di conteggio) oppure globalmente per tutte le unità di conteggio (immobile). 

Esempio:
l'80% della quota dei costi di base dell'azienda elettrica deve essere conteggiato in relazione alla tariffa solare a tutti i partecipanti in egual misura.

- La tassa inserita viene aggiunta su tutte le fatture per mese


Nota: i costi Altro sono disponibili solo con la fattura dell'elettricità.



A livello dell'unità di conteggio

Esempio:
una stazione di ricarica viene affittata e deve essere fatturata mensilmente all'unità di conteggio.

- I costi vengono addebitati solo a quell'unica unità di conteggio




![Billing: conteggio dell'energia – Figura 11](/img/konfiguration-billing/11.png)

### 8\. Creare la fattura

Se il riquadro blu delle tariffe virtuali è sulla data odierna, è possibile creare una fattura di prova.

- Menu Fatturazione (Rechnungsstellung)

- Fatture

- Inserire la data

- Creare l'anteprima della fattura


Se sei soddisfatto dell'anteprima, puoi tornare indietro e creare le fatture reali.

In questa pagina trovi una descrizione dei messaggi di errore più frequenti e le possibili soluzioni: [Messaggi di errore del Billing](/stoerungsbehebung/billing-fehlermeldungen) 

### Passaggio successivo

[Continua con la creazione degli accessi per gli inquilini](/konfiguration/benutzerkonfiguration)

## Indicazioni utili sui dati tariffari

### Visualizzazione

Nella vista standard della cartella dell'unità di conteggio (ad es. un appartamento) viene ora visualizzato un nuovo riquadro. Questo indica le letture del contatore per le tariffe virtuali. Facendo clic su questo riquadro viene visualizzato il profilo di carico per le tariffe virtuali. 



![Billing: conteggio dell'energia – Figura 12](/img/konfiguration-billing/12.jpg)

### Come viene suddivisa l'elettricità solare

La piattaforma smart-me utilizza il contatore di produzione (contatore FV) per determinare la quantità di elettricità prodotta e il contatore virtuale del consumo totale per determinare la quantità di elettricità consumata. Da ciò viene calcolata una quota percentuale dell'elettricità solare. 

Ogni contatore elettrico (inquilino) ha quindi diritto alla stessa quota di elettricità solare ogni 15 minuti, ad es. il 40% del suo consumo in kWh.

Esempio di attribuzione dell'elettricità solare

- Consumo totale 10kWh

- Elettricità solare 6kWh (60% solare / 40% rete)

- Inquilino 1 consumo 6kWh (3,6kWh solare / 2,4kWh rete)

- Inquilino 2 consumo 4kWh (2,4kWh solare / 1,6 kWh rete)


La precisione può essere migliorata configurando il contatore di bilancio per la tariffa solare.

![Billing: conteggio dell'energia – Figura 13](/img/konfiguration-billing/13.png)

[Continua con la creazione degli accessi per gli inquilini](/konfiguration/benutzerkonfiguration)
