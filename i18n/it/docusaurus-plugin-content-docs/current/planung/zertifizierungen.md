---
title: 'Certificazioni'
slug: '/planung/zertifizierungen'
description: 'Norme di prodotto generali e regolamenti UE'
sidebar_label: 'Certificazioni'
---
[Inglese](/planung/zertifizierungen)

## Norme di prodotto generali e regolamenti UE

### RED - Radio Equipement Directive e EN 18031

La Radio Equipment Directive deve essere soddisfatta da tutti i dispositivi che dispongono di interfacce con connessione radio e che si intende offrire in Svizzera o nell'UE.
Essa si occupa ad esempio del rispetto delle intensità di segnale, delle emissioni di disturbo o dell'immunità ai disturbi di moduli W-LAN, 4G e Bluetooth. Inoltre riguarda anche le funzionalità e i requisiti di sicurezza di questi moduli e prodotti.

La RED (UE) 2022/30 è attualmente oggetto di un'estensione con gli articoli 3.3 d, 3.3 e e 3.3 f. Questi trattano l'aspetto della cibersicurezza per la rete e la protezione da furto di dati / modifica dei dati e hacking.

Dal 01.08.2025 la norma EN 18031-1, -2, -3 può essere utilizzata per soddisfare questi articoli RED aggiuntivi.

smart-me AG sviluppa tutti i suoi prodotti secondo la EN 18031.

Ciò comprende, ad esempio, i seguenti punti:

- Comunicazione cifrata e autenticata dal dispositivo fino al cloud.

- Aree del firmware protette e separate per misurazione, comunicazione e visualizzazione.

- Immodificabilità del firmware per l'hardware di misura.

- Nessun percorso di comunicazione superfluo attivato per impostazione predefinita.

- Impiego di chipset crittografici altamente sviluppati per la generazione e la memorizzazione di chiavi crittografiche.

- Resistenza contro attacchi esterni come ad esempio gli attacchi DDoS.


### Norme di prodotto in generale

Le norme di prodotto descrivono in generale il quadro da rispettare in materia di compatibilità elettromagnetica, sicurezza e funzionalità di un prodotto.
Per quasi tutti i prodotti esiste uno standard definito, che può essere utilizzato come riferimento durante lo sviluppo.
Le norme non sono però sempre applicabili in modo puntuale a un determinato prodotto. In alcuni casi devono essere soddisfatte più norme di prodotto contemporaneamente.

Le norme di prodotto utilizzate sono indicate sul certificato di conformità del prodotto.

## Certificazioni specifiche dei contatori

Questa sezione riassume le disposizioni vigenti in Svizzera in materia di diritto metrologico e MID. L'ordinanza è disponibile qui: [Ordinanza del DFGP sugli strumenti di misurazione dell'energia e della potenza elettriche (OStMEl)](https://www.fedlex.admin.ch/eli/cc/2015/578/de)

### Certificazione Measuring Instruments Directive (MID)

Nella procedura di valutazione della conformità un organismo designato verifica se lo strumento di misurazione o la sua fabbricazione soddisfa i requisiti legali. La valutazione della conformità viene eseguita dall'organismo designato per il fabbricante dello strumento di misurazione. Il fabbricante rilascia quindi per lo strumento di misurazione la dichiarazione di conformità relativa al rispetto di una norma giuridica.

Se lo strumento di misurazione è soggetto alla direttiva sugli strumenti di misura 2004/22/CE (contatori di energia elettrica, di calore, dell'acqua, del freddo o del gas), l'organismo di valutazione della conformità deve inoltre essere designato dalla Commissione europea.

Tali strumenti di misurazione sono riconoscibili dalla marcatura «CE» o «CH» in combinazione con il simbolo metrologico «M».

![Certificazioni – Figura 1](/img/planung-zertifizierungen/01.png)

Esempio:  CE M 20 (anno di verifica) 1259 (ufficio di verifica)

### Certificazione della curva di carico

La certificazione della curva di carico CH-Lastgang consente all'utilizzatore di effettuare il conteggio in base a letture del contatore con intervalli di almeno 15 minuti. Questa certificazione richiede ulteriori possibilità tecniche e riguarda la firma, l'archiviazione dei dati e i canali di trasmissione (sicurezza, cifratura) dei dati.

[Contatore di energia trifase Telstar](/produkte/telstar), [Contatore trifase Telstar CT](/produkte/Telstar-CT) e [Stazione di ricarica Pico](/produkte/pico-ladestation) possiedono sia la certificazione MID sia la certificazione CH-Lastgang.

## Certificazioni nel raggruppamento ai fini del consumo proprio (RCP)

La tecnologia smart-me copre entrambe le seguenti varianti:

### Variante 1: conteggio RCP mediante letture del contatore e tariffa unica o doppia (è necessaria la MID)

Un RCP può essere conteggiato mediante lettura iniziale e finale del contatore (date di riferimento). A tal fine il legislatore richiede unicamente uno strumento di misurazione con certificazione MID. Differenze tariffarie sono possibili solo con un segnale esterno con ore di punta e ore fuori punta, altrimenti è possibile utilizzare una tariffa unica.

Vantaggio:

- Lo strumento di misurazione deve possedere solo la certificazione MID. ([smart-me Contatore di energia trifase Telstar)](/produkte/telstar)

- Conteggio semplice delle letture del contatore alle date di riferimento.

- Possibile una soluzione software semplice o anche manuale.


Svantaggio della tariffa unica:

- I costi possono essere ripartiti solo in base alle quantità prelevate.

- Nessuna ottimizzazione dei costi da parte dell'inquilino mediante un uso accurato dell'elettricità al momento opportuno.

- Nessun utilizzo mirato dell'energia solare da parte degli inquilini. (Minore efficienza nella vendita interna di elettricità)


Svantaggio della tariffa doppia con segnale tariffario esterno:

- I costi possono essere attribuiti solo in base alle quantità prelevate nella tariffa ore di punta e ore fuori punta mediante un segnale di comando esterno. (Nessuna tariffa solare)

- Ottimizzazione dei costi da parte dell'inquilino possibile solo in misura limitata mediante un uso accurato dell'elettricità al momento opportuno.

- Nessun utilizzo mirato dell'energia solare da parte degli inquilini. (Minore efficienza nella vendita interna di elettricità)




### Variante 2: conteggio RCP mediante curva di carico e sistema multitariffa (sono necessarie le certificazioni MID e CH-Lastgang)

Un RCP può essere conteggiato mediante dati della curva di carico (intervalli di 15 minuti). Questa variante apre l'intera portata di un RCP con tutti i vantaggi per gli inquilini e per il proprietario del RCP.

Vantaggio:

- Consente il conteggio con tariffe diverse. (tariffa ore fuori punta, ore di punta, solare)

- Ripartisce i costi sostenuti su chi li ha generati. (Tiene conto anche della disponibilità di energia solare con una tariffa speciale)

- Gli inquilini possono ottimizzare autonomamente i propri costi e concentrarsi sull'energia solare.

- L'energia solare autoprodotta può essere venduta internamente in modo più efficace, migliorando così il ROI.

- Tariffe elettriche differenziate rendono l'immobile complessivamente più attrattivo per gli inquilini.


Svantaggio:

- Richiede strumenti di misurazione certificati MID e per la curva di carico. ([smart-me Contatore di energia trifase Telstar)](/produkte/telstar)

- Richiede un software in grado di memorizzare, valutare e utilizzare i dati della curva di carico.


## Certificazioni per le stazioni di ricarica

### Disposizioni per il conteggio delle stazioni di ricarica in Svizzera

Punti di ricarica in rapporto di locazione:

La Svizzera richiede per l'hardware delle stazioni di ricarica utilizzato in un rapporto di locazione fondamentalmente lo stesso che per l'hardware dei contatori usuali:

- Certificazione MID, per conteggiare l'energia rilevata con tariffa unica.

- Certificazione CH-Lastgang + certificazione MID, per conteggiare l'energia rilevata con multitariffa (tariffa ore di punta, ore fuori punta, solare).




Punti di ricarica in ambito pubblico con utenti diversi:

- In Germania la situazione giuridica è stata definita e richiede la conformità al diritto metrologico. (vedi Germania).
    In Svizzera attualmente non sono definite prescrizioni legali relative alla conformità MID.


Nota:
Le diciture a destra sono simboli obbligatori che devono essere sempre visibili sull'hardware per possedere MID, curva di carico o diritto metrologico.

Diciture obbligatorie sull'hardware di ricarica:

Certificazione MID:

![Certificazioni – Figura 2](/img/planung-zertifizierungen/01.png)

![Certificazioni – Figura 3](/img/planung-zertifizierungen/03.png)



Certificazione CH-Lastgang:

![Certificazioni – Figura 4](/img/planung-zertifizierungen/04.png)

![Certificazioni – Figura 5](/img/planung-zertifizierungen/05.png)

### Disposizioni per il conteggio delle stazioni di ricarica in Germania

Punti di ricarica in rapporto di locazione:

La Germania richiede per l'hardware delle stazioni di ricarica utilizzato in un rapporto di locazione fondamentalmente lo stesso che per l'hardware dei contatori usuali:

- Certificazione MID, per poter conteggiare l'energia rilevata.




Punti di ricarica in ambito pubblico con utenti diversi:

- In Germania esiste la necessità di una conformità al diritto metrologico per i punti di ricarica pubblici. La base per il diritto metrologico è che l'hardware del contatore\-nella stazione di ricarica possieda la certificazione MID.


Nota:
Le diciture a destra sono simboli obbligatori che devono essere sempre visibili sull'hardware per possedere MID, curva di carico o diritto metrologico.

Diciture obbligatorie sull'hardware di ricarica:

Certificazione MID:

![Certificazioni – Figura 6](/img/planung-zertifizierungen/01.png)

![Certificazioni – Figura 7](/img/planung-zertifizierungen/07.png)

Diritto metrologico:

![Certificazioni – Figura 8](/img/planung-zertifizierungen/08.png)

![Certificazioni – Figura 9](/img/planung-zertifizierungen/09.png)

### Certificazione secondo il diritto metrologico (Eichrecht, Germania)

L'Eichrecht è una legge tedesca che disciplina la precisione e la trasparenza delle misurazioni in Germania. Nella ricarica di veicoli elettrici questa normativa garantisce che le misurazioni alle stazioni di ricarica siano precise e trasparenti, al fine di tutelare i consumatori.

Secondo l'Eichrecht le stazioni di ricarica elettrica devono essere dotate di un contatore di energia elettrica certificato e verificato (MID).
Il contatore di energia elettrica misura l'energia consumata e determina l'importo fatturato al conducente del veicolo elettrico.

Le prescrizioni dell'Eichrecht disciplinano anche altri aspetti del conteggio. Le stazioni di ricarica devono indicare chiaramente i prezzi e consegnare al cliente una ricevuta con l'indicazione della quantità di energia consumata, del prezzo calcolato e di altri dettagli rilevanti.

Le sessioni di ricarica devono poter essere verificate nella loro correttezza mediante un [software di trasparenza indipendente](/informationssicherheit/zählertransaktionen).

La legge metrologica disciplina anche le questioni della sicurezza dei dati e delle perdite di energia durante le sessioni di ricarica dovute al cablaggio o ad altri mezzi.

## Verifica successiva dei contatori MID

Tutte le informazioni sono fornite con riserva e conformemente a [EMmV 941.251](https://www.fedlex.admin.ch/eli/cc/2015/578/de)  (stato 1° gennaio 2018).

### Contatori

I contatori devono essere sottoposti a verifica successiva dall'Istituto federale di metrologia (METAS) o da un ufficio di verifica autorizzato secondo la procedura di cui all'allegato 7 numero 1 OStrM come segue:

a. Contatori con equipaggio di misura elettronico: ogni 10 anni ([smart-me Contatore di energia trifase Telstar)](/produkte/telstar)

b. Contatori con equipaggio di misura elettromeccanico: ogni 15 anni

### Trasformatori (sensori di corrente)

I trasformatori devono essere sottoposti a verifica successiva dal METAS o da un ufficio di verifica autorizzato secondo la procedura di cui all'allegato 7 numero 1 OStrM come segue:

a. trasformatori induttivi con nucleo indivisibile: ogni 60 anni

b. trasformatori diversi da quelli di cui alla lettera a: ogni 2 anni.



### Proroga della validità di una verifica esistente

La certificazione è valida 10 anni, indipendentemente dal fabbricante.

Verifica per lotti (procedura di controllo statistica)

La SAK e la CKW eseguono a pagamento la verifica successiva dei contatori smart-me con la procedura per lotti. In caso di interesse rivolgiti direttamente ai rispettivi responsabili degli uffici di verifica. Nella pratica la maggior parte dei contatori nei RCP non viene sottoposta a verifica successiva, bensì ammortizzata nel corso degli anni e sostituita al termine della loro vita utile con nuovi contatori.

Il controllo con la procedura per lotti richiede un primo controllo a campione dopo 5 anni e successivamente, periodicamente, ogni 5 anni.

Se il METAS libera il lotto secondo la lettera E numero 6, i contatori del lotto liberato sono considerati verificati per ulteriori 5 anni, sempre che rimangano sottoposti alla procedura di controllo statistica.

### Conseguenza

Se la verifica dei dispositivi scade e una procedura di verifica per lotti non è possibile, i contatori devono essere sostituiti con nuovi dispositivi dopo 10 anni.

## Certificazione MINERGIE con smart-me

Per la certificazione MINERGIE è necessario un sistema di misurazione adeguato al monitoraggio richiesto.

smart-me è un modulo certificato secondo Minergie e può essere impiegato direttamente per l'adempimento del monitoraggio.

Il sistema smart-me possiede anche l'interfaccia automatizzata per la trasmissione dei dati nella banca dati Minergie per l'estensione Minergie Monitoring +.

[Maggiori dettagli per i partner](/planung/minergie)

![Certificazioni – Figura 10](/img/planung-zertifizierungen/10.png)
