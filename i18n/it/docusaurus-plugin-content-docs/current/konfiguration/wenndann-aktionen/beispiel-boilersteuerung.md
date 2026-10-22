---
title: 'Esempi di controllo del boiler con azioni se/allora'
slug: '/konfiguration/wenndann-aktionen/beispiel-boilersteuerung'
description: 'In questa pagina sono descritte in dettaglio alcune configurazioni di esempio.'
sidebar_label: 'Esempio di controllo del boiler'
---
In questa pagina sono descritte in dettaglio alcune configurazioni di esempio.

## Requisiti

Per poter utilizzare le azioni se/allora è necessaria una licenza smart-me Limited o Professional.

## Nozioni di base

I dati tecnici sono riportati nelle pagine dei rispettivi [prodotti](/produkte) (ad es. la potenza massima di commutazione).

La configurazione delle uscite è descritta nella pagina [Ingressi e uscite](/schnittstellen/ein-und-ausgaenge) (ad es. l'attivazione dell'uscita 1).

Le nozioni di base sono descritte in [Azioni se/allora](/konfiguration/wenndann-aktionen) (ad es. dove si trovano le azioni se/allora).

Tenga presente che le [azioni se/allora](/konfiguration/wenndann-aktionen) funzionano correttamente solo se è garantita la connessione allo smart-me Cloud. Le [azioni basate su eventi](/konfiguration/wenndann-aktionen/ereignisaktionen)  sono più limitate, ma vengono salvate ed eseguite localmente.

Durante la configurazione delle azioni se/allora verifichi sempre se l'unità visualizzata è Watt o Kilowatt.

I contatori smart-me sono dotati di relè bistabili: se si configura un'accensione, occorre configurare sempre anche lo spegnimento.

## Introduzione

Determinare il consumo e prevedere una riserva per le fluttuazioni del consumo

Per configurare un buon controllo è importante conoscere la potenza assorbita dalle utenze. È inoltre necessario prevedere una riserva per ogni caso. Se ad esempio il boiler del DG richiede 3 kW, il boiler viene acceso quando sul contatore di bilancio vengono misurati meno di -3,5 kW e viene spento di nuovo solo quando vengono misurati più di 0 kW. La differenza di 0,5 kW funge da margine, ad esempio quando qualcuno accende un computer (60 Watt), in modo che in questo caso non venga subito a mancare energia.

Accensione o spegnimento ritardati

Inoltre, prima dell'accensione o dello spegnimento occorre considerare un intervallo di tempo. Ad esempio, il boiler viene spento solo quando il valore di 0 kW viene superato per più di 5 minuti. In questo modo si garantisce che un'utenza di breve durata, come un forno o un bollitore, non comporti immediatamente il continuo spegnimento e riaccensione dell'utenza. Questo è tanto più importante quanto più grande è l'edificio.

Determinare quante utenze possono essere accese contemporaneamente 

Verifichi sempre come sono stati dimensionati i fusibili. Questo va considerato quando tutte le utenze funzionano contemporaneamente, ad esempio di notte. Se il fusibile è troppo piccolo, deve configurare le azioni se/allora in modo che le utenze non vengano accese contemporaneamente.

Determinare i tempi di accensione e spegnimento delle utenze per un'accensione graduale

Nell'accensione graduale di utenze, ad esempio di più boiler, occorre assicurarsi che il ritardo tra la prima e la seconda utenza sia sufficientemente lungo da permettere alla prima utenza di assorbire la piena potenza. Se ad esempio le utenze impiegano solo 20 secondi per raggiungere la piena potenza, possono essere accese con un ritardo di un minuto. Sempre che sia disponibile corrente sufficiente.

Se esistono orari fissi di accensione e spegnimento, occorre fare in modo che siano sfasati di almeno 1 minuto. Ad esempio accensione tra le 5:00 e le 8:00 e spegnimento tra le 8:01 e le 4:59

Spegnimento delle utenze

Nello spegnimento delle utenze, ad esempio di più boiler, è possibile spegnere tutto in una volta. Quindi ad esempio con un ritardo di 5 minuti (spegnimento ritardato). È però anche possibile spegnere i boiler in modo graduale.

Esempio di spegnimento graduale con ritardo: 

- Il primo boiler si spegne con un ritardo di 5 minuti, in modo che ad esempio qualcuno possa accendere il bollitore senza che questo spenga il boiler. 

- Il secondo boiler viene spento dopo 7 minuti di prelievo dalla rete elevato (quindi 5 minuti dopo il primo + 2 minuti di attesa)

- Il terzo boiler viene poi spento dopo 9 minuti di prelievo dalla rete elevato


Ottimizzato per la rete vs. ottimizzato per l'autoconsumo

Nella configurazione delle soglie di accensione e spegnimento occorre decidere se si tratta di un impianto ottimizzato per la rete, ossia le utenze si accendono e si spengono possibilmente sempre quando viene prelevata corrente dalla rete. Oppure se l'impianto deve essere ottimizzato per l'autoconsumo. Ciò significa che deve essere utilizzata quanta più corrente possibile prodotta sul tetto.

- Esempio per un'utenza di 2,5 kW con una riserva per le fluttuazioni del consumo di 0,5 kW.

    - Ottimizzato per la rete: accendere il boiler a -3 kW e spegnerlo a 0 kW. 

    - Ottimizzato per l'autoconsumo: accendere il boiler a -1,5 kW e spegnerlo a +1,5 kW.

    - Via di mezzo: accendere il boiler a -2.5 kW e spegnerlo a + 0.5 kW.


Nella configurazione occorre considerare che la variante con autoconsumo ottimizzato è più redditizia in inverno, mentre in estate con il bel tempo le utenze vengono accese molto presto e nel pomeriggio, con il sole, sono già cariche.

Abbiamo avuto buone esperienze quando le utenze si accendono nel momento in cui possono essere alimentate al 100 % con energia solare e si tiene conto della riserva per piccole fluttuazioni della quota di rete. Quindi l'esempio sopra "Via di mezzo".

Pulsante Booster

La configurazione di un pulsante Booster per un'utenza è possibile, ma rende la configurazione più onerosa e complessa. Occorre inoltre considerare che solo il titolare dell'account smart-me ha la possibilità di attivare un pulsante Booster. 

Per questa funzione dobbiamo utilizzare un'uscita digitale che non è collegata fisicamente a un'utenza. Utilizziamo quindi il pulsante solo come stato per le azioni se/allora.

Riscaldamento supplementare con ore di punta e ore fuori punta vs. riscaldamento supplementare con tariffa unica. 

Per i boiler che vengono riscaldati in modo supplementare con le azioni se/allora, si può tenere conto della struttura tariffaria locale. 

Se la corrente costa meno di notte, è usuale effettuare il riscaldamento supplementare di notte. Ciò comporta però che il boiler di regola raggiunge la temperatura massima all'alba. 

Se si applica una tariffa unica, è meglio scaglionare il riscaldamento supplementare a partire dalle 12. In questo modo in estate il boiler può essere caricato in modo ottimale al mattino ed eventualmente riscaldato nel pomeriggio. Così la resa solare per il boiler è migliore. Negli esempi seguenti il riscaldamento supplementare avviene di notte. Se deve avvenire di giorno, modifichi semplicemente gli orari di accensione degli esempi. Faccia attenzione che occorre considerare anche lo spegnimento.

Controllo del boiler a 3 stadi

L'esempio seguente per il controllo di 3 boiler può essere utilizzato anche per il controllo di 1 boiler con 3 fasi. La configurazione è esattamente la stessa.

![Esempi di controllo del boiler con azioni se/allora – Figura 1](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/01.png)

Immagine: RCP con 3 boiler incl. riscaldamento supplementare notturno (rettangoli verdi)

## Esempio ottimizzato per il solare con riscaldamento supplementare con 1 boiler (spiegazione dettagliata con immagini e spiegazione in forma tabellare)

Durante la configurazione delle azioni se/allora verifichi sempre se l'unità visualizzata è Watt o Kilowatt.

I relè sono collegati ai boiler e sono stati denominati "Boiler".

Tempo necessario per raggiungere la piena potenza: 20 secondi

Il boiler si accende autonomamente quando viene raggiunta una temperatura minima: No

Potenza boiler EG: 6 kW

![Esempi di controllo del boiler con azioni se/allora – Figura 2](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/02.png)

Configurazione: Boiler 1 acceso (EG)

Azione se/allora: Boiler EG Ein

Questa azione se/allora svolge la funzione di:

- accendere il boiler quando il contatore di bilancio fornisce corrente sufficiente per più di un minuto.

Oppure

- è un orario stabilito e il boiler viene in ogni caso riscaldato per tre ore.

![Esempi di controllo del boiler con azioni se/allora – Figura 3](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/03.png)

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sotto (unter) 

- Potenza (Leistung): -6000 Watt

- Tempo minimo (Mindestzeit): 1 minuto


![Esempi di controllo del boiler con azioni se/allora – Figura 4](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/04.png)

<div className="row">
<div className="col col--5">

Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): Intervallo di tempo / Ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 22:00

- Giorni della settimana (Wochentage): Seleziona tutti (Alle wählen)

- A (Bis): 01:00

</div>
<div className="col col--7 text--center">

![Esempi di controllo del boiler con azioni se/allora – Figura 5](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/05.png)

</div>
</div>

Se evento (Wenn Ereignis)

- Tipo (Typ): Collegamento O (Oder Verknüpfung)


![Esempi di controllo del boiler con azioni se/allora – Figura 6](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/06.png)

Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: Acceso (Ein)


![Esempi di controllo del boiler con azioni se/allora – Figura 7](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/07.png)

### Configurazione: Boiler spento, vista tabellare (breve)



Azione se/allora: Boiler EG Aus

Questa azione se/allora svolge la funzione di:

- Spegnere il boiler quando il contatore di bilancio non fornisce corrente sufficiente per più di tre minuti.

- E

- Quando il boiler non si trova nell'intervallo di tempo stabilito in cui viene in ogni caso riscaldato per tre ore.


La configurazione è illustrata qui sotto nella vista tabellare. È importante notare che si tratta di un'azione E, che la soglia ora è sopra e non più sotto, e che gli orari sono l'opposto dell'accensione (riscaldamento supplementare), sfasati di 1 minuto.

Configurazione: Boiler 1 spento (EG)

Azione se/allora: Boiler EG Aus

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 Watt

- Tempo minimo (Mindestzeit): 4 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): Intervallo di tempo / Ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 01:01

- Giorni della settimana (Wochentage): Seleziona tutti (Alle wählen)

- A (Bis): 21:59


Se evento (Wenn Ereignis)

- Tipo (Typ): Collegamento E (Und Verknüpfung)


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: Spento (Aus)


![Esempi di controllo del boiler con azioni se/allora – Figura 8](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/08.png)

## Esempio ottimizzato per il solare con riscaldamento supplementare con 3 boiler (spiegazione in forma tabellare)

Durante la configurazione delle azioni se/allora verifichi sempre se l'unità visualizzata è Watt o Kilowatt

I relè sono collegati ai boiler e sono stati denominati "Boiler".

Tempo necessario per raggiungere la piena potenza: 20 secondi

Il boiler si accende autonomamente quando viene raggiunta una temperatura minima: No

Potenza: 

- Boiler EG: 6 kW

- Boiler DG: 3 kW

- Boiler UG: 2 kW


Per garantire che i boiler non vengano accesi contemporaneamente, inseriamo un ritardo prima dell'accensione di ciascun boiler. Il boiler con il tempo di ritardo più breve trae il massimo vantaggio dall'utilizzo dell'energia solare, perché viene acceso per primo. In questo esempio accendiamo per primo il boiler con il consumo più elevato, in modo che abbia la possibilità di essere acceso per primo dopo un lungo periodo di consumo elevato, ad esempio a mezzogiorno.

### Configurazione: Boiler acceso, vista tabellare (breve)

Qui entriamo ora nel dettaglio della configurazione. Un esempio più semplice è spiegato in dettaglio più sopra.

Grazie alla rappresentazione in forma tabellare, sugli schermi desktop le differenze e quindi anche la logica sottostante si riconoscono più rapidamente.

Configurazione: Boiler 1 acceso (EG)

Azione se/allora: Boiler EG Ein

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sotto (unter) 

- Potenza (Leistung): \-6000 Watt

- Tempo minimo (Mindestzeit): 1 minuto


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): Intervallo di tempo / Ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 22:00

- Giorni della settimana (Wochentage): Seleziona tutti (Alle wählen)

- A (Bis): 01:00


Se evento (Wenn Ereignis)

- Tipo (Typ): Collegamento O (Oder Verknüpfung)


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: Acceso (Ein)


Configurazione: Boiler 2 acceso (DG)

Azione se/allora: Boiler DG Ein

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sotto (unter)

- Potenza (Leistung): \-3000 Watt

- Tempo minimo (Mindestzeit): 2 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): Intervallo di tempo / Ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 01:00

- Giorni della settimana (Wochentage): Seleziona tutti (Alle wählen)

- A (Bis): 05:00


Se evento (Wenn Ereignis)

- Tipo (Typ): Collegamento O (Oder Verknüpfung)


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): DG

- Boiler: Acceso (Ein)


Configurazione: Boiler 3 acceso (UG)

Azione se/allora: Boiler UG Ein

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sotto (unter) 

- Potenza (Leistung): \-2000 Watt

- Tempo minimo (Mindestzeit): 3 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): Intervallo di tempo / Ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 02:00

- Giorni della settimana (Wochentage): Seleziona tutti (Alle wählen)

- A (Bis): 06:00


Se evento (Wenn Ereignis)

- Tipo (Typ): Collegamento O (Oder Verknüpfung)


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): UG

- Boiler: Acceso (Ein)


### Configurazione: Boiler spento, vista tabellare (breve)

Configurazione: Boiler 1 spento (EG)

Azione se/allora: Boiler EG Aus

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 Watt

- Tempo minimo (Mindestzeit): 4 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): Intervallo di tempo / Ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 01:01

- Giorni della settimana (Wochentage): Seleziona tutti (Alle wählen)

- A (Bis): 21:59


Se evento (Wenn Ereignis)

- Tipo (Typ): Collegamento E (Und Verknüpfung)


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: Spento (Aus)


Configurazione: Boiler 2 spento (DG)

Azione se/allora: Boiler DG Aus

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 Watt

- Tempo minimo (Mindestzeit): 5 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): Intervallo di tempo / Ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 05:01

- Giorni della settimana (Wochentage): Seleziona tutti (Alle wählen)

- A (Bis): 00:59


Se evento (Wenn Ereignis)

- Tipo (Typ): Collegamento E (Und Verknüpfung)


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): DG

- Boiler: Spento (Aus)


Configurazione: Boiler 3 spento (UG)

Azione se/allora: Boiler UG Aus

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 Watt

- Tempo minimo (Mindestzeit): 6 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): Intervallo di tempo / Ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 06:01

- Giorni della settimana (Wochentage): Seleziona tutti (Alle wählen)

- A (Bis): 01:59


Se evento (Wenn Ereignis)

- Tipo (Typ): Collegamento E (Und Verknüpfung)


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): UG

- Boiler: Spento (Aus)


## Esempio ottimizzato per il solare senza riscaldamento supplementare con 1 boiler

Come il seguente "Esempio ottimizzato per il solare senza riscaldamento supplementare con 3 boiler (spiegazione in forma tabellare)". Deve solo eseguire la configurazione per un boiler.

## Esempio ottimizzato per il solare senza riscaldamento supplementare con 3 boiler (spiegazione in forma tabellare)

Durante la configurazione delle azioni se/allora verifichi sempre se l'unità visualizzata è Watt o Kilowatt.

I relè sono collegati ai boiler e sono stati denominati "Boiler".

Tempo necessario per raggiungere la piena potenza: 20 secondi

Il boiler si accende autonomamente quando viene raggiunta una temperatura minima: Sì

Potenza: 

- Boiler EG: 6 kW

- Boiler DG: 3 kW

- Boiler UG: 2 kW


Per garantire che i boiler non vengano accesi contemporaneamente, inseriamo un ritardo prima dell'accensione di ciascun boiler. Il boiler con il tempo di ritardo più breve trae il massimo vantaggio dall'utilizzo dell'energia solare, perché viene acceso per primo. In questo esempio accendiamo per primo il boiler con il consumo più elevato, in modo che abbia la possibilità di essere acceso per primo dopo un lungo periodo di consumo elevato, ad esempio a mezzogiorno.

### Configurazione: Boiler acceso, vista tabellare (breve)

Qui entriamo ora nel dettaglio della configurazione. Un esempio più semplice è spiegato in dettaglio più sopra.

Grazie alla rappresentazione in forma tabellare, sugli schermi desktop le differenze e quindi anche la logica sottostante si riconoscono più rapidamente.

![Esempi di controllo del boiler con azioni se/allora – Figura 9](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/09.png)

Configurazione: Boiler 1 acceso (EG)

Azione se/allora: Boiler EG Ein

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sotto (unter) 

- Potenza (Leistung): \-6000 Watt

- Tempo minimo (Mindestzeit): 1 minuto


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: Acceso (Ein)


Configurazione: Boiler 2 acceso (DG)

Azione se/allora: Boiler DG Ein

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sotto (unter)

- Potenza (Leistung): \-3000 Watt

- Tempo minimo (Mindestzeit): 2 minuti


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): DG

- Boiler: Acceso (Ein)


Configurazione: Boiler 3 acceso (UG)

Azione se/allora: Boiler UG Ein

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sotto (unter) 

- Potenza (Leistung): \-2000 Watt

- Tempo minimo (Mindestzeit): 3 minuti


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): UG

- Boiler: Acceso (Ein)


### Configurazione: Boiler spento, vista tabellare (breve)

![Esempi di controllo del boiler con azioni se/allora – Figura 10](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/10.png)

Configurazione: Boiler 1 spento (EG)

Azione se/allora: Boiler EG Aus

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 Watt

- Tempo minimo (Mindestzeit): 4 minuti


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: Spento (Aus)


Configurazione: Boiler 2 spento (DG)

Azione se/allora: Boiler DG Aus

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 Watt

- Tempo minimo (Mindestzeit): 5 minuti


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): DG

- Boiler: Spento (Aus)


Configurazione: Boiler 3 spento (UG)

Azione se/allora: Boiler UG Aus

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 Watt

- Tempo minimo (Mindestzeit): 6 minuti


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): UG

- Boiler: Spento (Aus)


## Esempio ottimizzato per il solare senza riscaldamento supplementare con 1 boiler e Booster / legionella

Durante la configurazione delle azioni se/allora verifichi sempre se l'unità visualizzata è Watt o Kilowatt.

I relè sono collegati ai boiler e sono stati denominati "Boiler".

Il Mosfet viene configurato secondo [Ingressi e uscite](/schnittstellen/ein-und-ausgaenge) e porta il nome "Booster und Legionelle".

Tempo necessario per raggiungere la piena potenza: 20 secondi

Il boiler si accende autonomamente quando viene raggiunta una temperatura minima: Sì

Potenza: 

- Boiler: 7 kW


### Configurazione: Legionella accesa

Questa configurazione è necessaria solo se si desidera attivare la protezione antilegionella, ad es. 1 volta alla settimana il venerdì dalle 3:15. Qui viene indicata una durata, che è di 30 minuti (predefinita), in modo da garantire che lo stato venga impostato su "Acceso (Ein)" anche se un pacchetto di dati va perso.

Azione se/allora: Legionelle Ein

Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): Intervallo di tempo / Ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 03:15

- Giorni della settimana (Wochentage): Seleziona tutti (Alle wählen)

- A (Bis): 03:45


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Uscita (Ausgang) Booster und Legionelle: Acceso (Ein)

- Tempo minimo (Mindestzeit): No (Nein)


![Esempi di controllo del boiler con azioni se/allora – Figura 11](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/11.png)

### Configurazione: Booster e legionella spenti

Corrisponde al tempo dopo il quale il Booster (attivato manualmente dall'utente nella GUI smart-me) o la commutazione antilegionella (configurata come sopra) deve essere spento automaticamente, perché il boiler è ormai riscaldato. Ad es. 90 minuti. 

Azione se/allora: Booster Legionelle Aus

Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): EG

- Uscita (Ausgang) Booster und Legionelle: Acceso (Ein)

- Tempo minimo (Mindestzeit): Sì (Ja), 90 minuti


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Uscita (Ausgang) Booster und Legionelle: Spento (Aus)


![Esempi di controllo del boiler con azioni se/allora – Figura 12](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/12.png)

### Configurazione: Boiler acceso, vista tabellare (breve)

Configurazione: Boiler acceso

Azione se/allora: Boiler Ein

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sotto (unter) 

- Potenza (Leistung): \-7000 Watt

- Tempo minimo (Mindestzeit): 1 minuto


Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): EG

- Uscita (Ausgang) Booster und Legionelle: Acceso (Ein)

- Tempo minimo (Mindestzeit): No (Nein)


Se evento (Wenn Ereignis)

- Tipo (Typ): Collegamento O (ODER Verknüpfung)


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: Acceso (Ein)


![Esempi di controllo del boiler con azioni se/allora – Figura 13](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/13.png)

### Configurazione: Boiler spento, vista tabellare (breve)

Configurazione: Boiler 1 spento (EG)

Azione se/allora: Boiler EG Aus

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 Watt

- Tempo minimo (Mindestzeit): 1 minuto


Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): EG

- Uscita (Ausgang) Booster und Legionelle: Spento (Aus)

- Tempo minimo (Mindestzeit): No (Nein)


Se evento (Wenn Ereignis)

- Tipo (Typ): Collegamento E (UND Verknüpfung)


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: Spento (Aus)


![Esempi di controllo del boiler con azioni se/allora – Figura 14](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/14.png)

## Esempio ottimizzato per il solare con riscaldamento supplementare e pulsante Booster con 1 boiler

Come il seguente "Esempio ottimizzato per il solare con riscaldamento supplementare e pulsante Booster con 3 boiler (spiegazione in forma tabellare)". Deve solo eseguire la configurazione per un boiler.

## Esempio ottimizzato per il solare con riscaldamento supplementare e pulsante Booster con 3 boiler (spiegazione in forma tabellare)

<div className="row">
<div className="col col--6">

Durante la configurazione delle azioni se/allora verifichi sempre se l'unità visualizzata è Watt o Kilowatt.

I relè sono collegati ai boiler e sono stati denominati "Boiler".

Il Mosfet viene configurato secondo [Ingressi e uscite](/schnittstellen/ein-und-ausgaenge) e porta il nome "Boiler Booster".

</div>
<div className="col col--6 text--center">

![Esempi di controllo del boiler con azioni se/allora – Figura 15](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/15.png)

</div>
</div>

Tempo necessario per raggiungere la piena potenza: 20 secondi

Il boiler si accende autonomamente quando viene raggiunta una temperatura minima: Sì

Potenza: 

- Boiler EG: 6 kW

- Boiler DG: 3 kW

- Boiler UG: 2 kW


Per garantire che i boiler non vengano accesi contemporaneamente, inseriamo un ritardo prima dell'accensione di ciascun boiler. Il boiler con il tempo di ritardo più breve trae il massimo vantaggio dall'utilizzo dell'energia solare, perché viene acceso per primo. In questo esempio accendiamo per primo il boiler con il consumo più elevato, in modo che abbia la possibilità di essere acceso per primo dopo un lungo periodo di consumo elevato, ad esempio a mezzogiorno.

### Configurazione: Boiler acceso, vista tabellare (breve)

Qui entriamo ora nel dettaglio della configurazione. Un esempio più semplice è spiegato in dettaglio più sopra.

Grazie alla rappresentazione in forma tabellare, sugli schermi desktop le differenze e quindi anche la logica sottostante si riconoscono più rapidamente.

![Esempi di controllo del boiler con azioni se/allora – Figura 16](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/16.png)

Configurazione: Boiler 1 acceso (EG)

Azione se/allora: Boiler EG Ein

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sotto (unter) 

- Potenza (Leistung): \-6000 Watt

- Tempo minimo (Mindestzeit): 1 minuto


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): Intervallo di tempo / Ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 22:00

- Giorni della settimana (Wochentage): Seleziona tutti (Alle wählen)

- A (Bis): 01:00


Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): EG

- Uscita (Ausgang) Boiler Booster: Acceso (Ein)

- Tempo minimo (Mindestzeit): No (Nein)


Se evento (Wenn Ereignis)

- Tipo (Typ): Collegamento O (Oder Verknüpfung)


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler Booster: Non selezionare nulla (Nichts wählen)

- Boiler: Acceso (Ein)


Configurazione: Boiler 2 acceso (DG)

Azione se/allora: Boiler DG Ein

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sotto (unter)

- Potenza (Leistung): \-3000 Watt

- Tempo minimo (Mindestzeit): 2 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): Intervallo di tempo / Ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 01:00

- Giorni della settimana (Wochentage): Seleziona tutti (Alle wählen)

- A (Bis): 05:00


Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): DG

- Uscita (Ausgang) Boiler Booster: Acceso (Ein)

- Tempo minimo (Mindestzeit): No (Nein)


Se evento (Wenn Ereignis)

- Tipo (Typ): Collegamento O (Oder Verknüpfung)


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): DG

- Boiler Booster: Non selezionare nulla (Nichts wählen)

- Boiler: Acceso (Ein)


Configurazione: Boiler 3 acceso (UG)

Azione se/allora: Boiler UG Ein

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sotto (unter) 

- Potenza (Leistung): \-2000 Watt

- Tempo minimo (Mindestzeit): 3 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): Intervallo di tempo / Ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 02:00

- Giorni della settimana (Wochentage): Seleziona tutti (Alle wählen)

- A (Bis): 06:00


Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): UG

- Uscita (Ausgang) Boiler Booster: Acceso (Ein)

- Tempo minimo (Mindestzeit): No (Nein)


Se evento (Wenn Ereignis)

- Tipo (Typ): Collegamento O (Oder Verknüpfung)


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): UG

- Boiler Booster: Non selezionare nulla (Nichts wählen)

- Boiler: Acceso (Ein)


### Configurazione: Boiler spento, vista tabellare (breve)

![Esempi di controllo del boiler con azioni se/allora – Figura 17](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/17.png)

Configurazione: Boiler 1 spento (EG)

Azione se/allora: Boiler EG Aus

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 Watt

- Tempo minimo (Mindestzeit): 4 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): Intervallo di tempo / Ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 01:01

- Giorni della settimana (Wochentage): Seleziona tutti (Alle wählen)

- A (Bis): 21:59


Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): EG

- Uscita (Ausgang) Boiler Booster: Spento (Aus)

- Tempo minimo (Mindestzeit): No (Nein)


Se evento (Wenn Ereignis)

- Tipo (Typ): Collegamento E (Und Verknüpfung)


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: Spento (Aus)


Configurazione: Boiler 2 spento (DG)

Azione se/allora: Boiler DG Aus

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 Watt

- Tempo minimo (Mindestzeit): 5 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): Intervallo di tempo / Ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 05:01

- Giorni della settimana (Wochentage): Seleziona tutti (Alle wählen)

- A (Bis): 00:59


Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): EG

- Uscita (Ausgang) Boiler Booster: Spento (Aus)

- Tempo minimo (Mindestzeit): No (Nein)


Se evento (Wenn Ereignis)

- Tipo (Typ): Collegamento E (Und Verknüpfung)


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): DG

- Boiler: Spento (Aus)


Configurazione: Boiler 3 spento (UG)

Azione se/allora: Boiler UG Aus

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 Watt

- Tempo minimo (Mindestzeit): 6 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): Intervallo di tempo / Ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 06:01

- Giorni della settimana (Wochentage): Seleziona tutti (Alle wählen)

- A (Bis): 01:59


Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): EG

- Uscita (Ausgang) Boiler Booster: Spento (Aus)

- Tempo minimo (Mindestzeit): No (Nein)


Se evento (Wenn Ereignis)

- Tipo (Typ): Collegamento E (Und Verknüpfung)


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): UG

- Boiler: Spento (Aus)


### Configurazione: reset Boiler Booster, vista tabellare (breve)

Questa sezione è facoltativa. Se non viene configurata, il pulsante Booster non viene mai resettato e rimane sempre valido.

In questo esempio il pulsante "Boiler Booster" viene reimpostato su "spento (aus)" dopo 300 minuti, cioè 5 ore.

![Esempi di controllo del boiler con azioni se/allora – Figura 18](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/18.png)

Configurazione: reset Booster boiler 1 (EG)

Azione se/allora: Boiler EG Booster Reset

Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): EG

- Uscita (Ausgang) Boiler Booster: Acceso (Ein)

- Tempo minimo (Mindestzeit): 300 minuti


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: Spento (Aus)


Configurazione: reset Booster boiler 2 (DG)

Azione se/allora: Boiler DG Booster Reset

Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): DG

- Uscita (Ausgang) Boiler Booster: Acceso (Ein)

- Tempo minimo (Mindestzeit): 300 minuti


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): DG

- Boiler: Spento (Aus)


Configurazione: reset Booster boiler 3 (UG)

Azione se/allora: Boiler UG Booster Reset

Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): UG

- Uscita (Ausgang) Boiler Booster: Acceso (Ein)

- Tempo minimo (Mindestzeit): 300 minuti


Allora accendere / spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): UG

- Boiler: Spento (Aus)
