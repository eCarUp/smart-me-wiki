---
title: 'Esempi di comando del boiler con azioni se/allora'
slug: '/konfiguration/wenndann-aktionen/beispiel-boilersteuerung'
description: 'In questa pagina sono descritte in dettaglio alcune configurazioni di esempio.'
sidebar_label: 'Esempio di comando del boiler'
---
<Menueweg>Azioni "se-quando</Menueweg>

In questa pagina sono descritte in dettaglio alcune configurazioni di esempio.

## Requisiti

Per poter utilizzare le azioni se/allora è necessaria una licenza smart-me Limited o Professional.

## Nozioni di base

I dati tecnici si trovano nella pagina dei rispettivi [prodotti](/produkte) (ad es. la potenza di commutazione massima).

La configurazione delle uscite è descritta nella pagina [Ingressi e uscite](/schnittstellen/ein-und-ausgaenge) (ad es. l'attivazione dell'uscita 1).

Le nozioni di base sono descritte in [Azioni se/allora](/konfiguration/wenndann-aktionen) (ad es. dove trovare le azioni se/allora).

Tenga presente che le [azioni se/allora](/konfiguration/wenndann-aktionen) funzionano correttamente solo se il collegamento con il cloud smart-me è garantito. Le [azioni basate su eventi](/konfiguration/wenndann-aktionen/ereignisaktionen)  sono più limitate, ma vengono salvate ed eseguite localmente.

Durante la configurazione delle azioni se/allora verifichi sempre se l'unità visualizzata è watt o kilowatt.

I contatori smart-me sono dotati di relè bistabili: se è configurata un'accensione, deve sempre essere configurato anche lo spegnimento.

## Introduzione

Determinare il consumo e prevedere una riserva per le fluttuazioni del consumo

Per configurare un buon comando è importante conoscere la potenza assorbita dalle utenze. È inoltre necessario prevedere una riserva per ogni caso. Se ad esempio il boiler del sottotetto richiede 3 kW, il boiler viene acceso quando sul contatore di bilancio vengono misurati meno di -3,5 kW e spento di nuovo solo quando vengono misurati più di 0 kW. La differenza di 0,5 kW serve allora da margine quando qualcuno accende ad esempio un computer (60 watt), in modo che in questo caso non manchi subito energia.

Accensione o spegnimento ritardati

Prima dell'accensione o dello spegnimento occorre inoltre calcolare un intervallo di tempo. Ad esempio, il boiler viene spento solo se il valore di 0 kW viene superato per più di 5 minuti. In questo modo si garantisce che un'utenza di breve durata, come un forno o un bollitore, non costringa subito a spegnere e riaccendere continuamente l'utenza. Ciò è tanto più importante quanto più grande è l'edificio.

Determinare quante utenze possono essere accese contemporaneamente 

Verifichi sempre come sono stati dimensionati i fusibili. Questo aspetto deve essere considerato quando tutte le utenze funzionano contemporaneamente, ad es. di notte. Se il fusibile è troppo piccolo, deve configurare le azioni se/allora in modo che le utenze non vengano accese contemporaneamente.

Determinare i tempi di accensione e spegnimento delle utenze per un'accensione graduale

In caso di accensione graduale delle utenze, ad es. di più boiler, occorre assicurarsi che il ritardo tra la prima e la seconda utenza sia sufficientemente lungo da permettere alla prima utenza di assorbire la piena potenza. Se ad esempio le utenze impiegano solo 20 secondi per assorbire la piena potenza, possono essere accese con un ritardo di un minuto. Sempre che sia disponibile abbastanza elettricità.

Se esistono orari fissi di accensione e spegnimento, occorre fare attenzione che siano sfasati di almeno 1 minuto. Ad esempio accensione tra le 5:00 e le 8:00 e spegnimento tra le 8:01 e le 4:59

Spegnimento delle utenze

Allo spegnimento delle utenze, ad es. di più boiler, è possibile spegnere tutto in una volta. Quindi ad es. con un ritardo di 5 minuti (spegnimento ritardato). È però anche possibile spegnere i boiler gradualmente.

Esempio di spegnimento graduale con ritardo: 

- Il primo boiler si spegne con un ritardo di 5 minuti, in modo che ad es. qualcuno possa accendere il bollitore senza che il boiler si spenga. 

- Il secondo boiler viene spento dopo 7 minuti di prelievo dalla rete elevato (quindi 5 minuti dopo il primo + 2 minuti di attesa)

- Il terzo boiler viene poi spento dopo 9 minuti di prelievo dalla rete elevato


Ottimizzazione per la rete vs. ottimizzazione per l'autoconsumo

Nella configurazione delle soglie di accensione e spegnimento occorre decidere se si tratta di un impianto ottimizzato per la rete, ossia le utenze si accendono e si spengono possibilmente sempre quando si preleva elettricità dalla rete. Oppure se l'impianto deve essere ottimizzato per l'autoconsumo. Ciò significa che deve essere utilizzata quanta più elettricità possibile prodotta dal tetto.

- Esempio per un'utenza da 2,5 kW con una riserva per le fluttuazioni del consumo di 0,5 kW.

    - Ottimizzato per la rete: accendere il boiler a -3 kW e spegnerlo a 0 kW. 

    - Ottimizzato per l'autoconsumo: accendere il boiler a -1,5 kW e spegnerlo a +1,5 kW.

    - Via di mezzo: accendere il boiler a -2.5 kW e spegnerlo a + 0.5 kW.


Durante la configurazione occorre considerare che la variante ottimizzata per l'autoconsumo è più redditizia in inverno, ma in estate, con il bel tempo, le utenze vengono accese molto presto e nel pomeriggio, con il sole, sono già cariche.

Abbiamo avuto buone esperienze quando le utenze si accendono nel momento in cui possono essere alimentate al 100 % con energia solare e si tiene conto della riserva per piccole fluttuazioni della quota di rete. Quindi l'esempio "Via di mezzo" qui sopra.

Pulsante booster

La configurazione di un pulsante booster per un'utenza è possibile, ma rende la configurazione più onerosa e complessa. Occorre inoltre considerare che solo il titolare dell'account smart-me ha la possibilità di attivare un pulsante booster. 

Per questa funzione dobbiamo utilizzare un'uscita digitale che non sia collegata fisicamente a un'utenza. Utilizziamo quindi il pulsante solo come stato per le azioni se/allora.

Riscaldamento supplementare con ore di punta e ore fuori punta vs. riscaldamento supplementare con tariffa unica. 

Per i boiler riscaldati in modo supplementare con le azioni se/allora è possibile tenere conto della struttura tariffaria locale. 

Se l'elettricità costa meno di notte, è consuetudine effettuare il riscaldamento supplementare durante la notte. Ciò comporta però che il boiler raggiunga di regola la temperatura massima all'alba. 

Se si applica una tariffa unica, è meglio scaglionare il riscaldamento supplementare a partire dalle 12. In questo modo in estate il boiler può essere caricato in modo ottimale al mattino ed eventualmente riscaldato nel pomeriggio. Così il rendimento solare per il boiler è migliore. Negli esempi seguenti il riscaldamento supplementare avviene di notte. Se deve avvenire di giorno, modifichi semplicemente gli orari di accensione degli esempi. Faccia attenzione che deve essere considerato anche lo spegnimento.

Comando del boiler a 3 livelli

L'esempio seguente per il comando di 3 boiler può essere utilizzato anche per il comando di 1 boiler con 3 fasi. La configurazione è esattamente la stessa.

![Esempi di comando del boiler con azioni se/allora – Figura 1](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/01.png)

Figura: RCP (raggruppamento ai fini del consumo proprio) con 3 boiler incl. riscaldamento supplementare notturno (rettangoli verdi)

## Esempio ottimizzato per il solare con riscaldamento supplementare con 1 boiler (spiegazione dettagliata con immagini e spiegazione in forma tabellare)

Durante la configurazione delle azioni se/allora verifichi sempre se l'unità visualizzata è watt o kilowatt.

I relè sono collegati al boiler e sono stati denominati "Boiler".

Tempo necessario per assorbire la piena potenza: 20 secondi

Il boiler si accende autonomamente al raggiungimento di una temperatura minima: No

Potenza boiler EG: 6 kW

![Esempi di comando del boiler con azioni se/allora – Figura 2](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/02.png)

Configurazione: boiler 1 acceso (EG)

Azione se/allora: Boiler EG Ein

Questa azione se/allora svolge la funzione di:

- accendere il boiler quando il contatore di bilancio fornisce elettricità sufficiente per più di un minuto.

Oppure

- Ci si trova in un orario prestabilito e il boiler viene in ogni caso riscaldato per tre ore.

![Esempi di comando del boiler con azioni se/allora – Figura 3](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/03.png)

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sotto (unter) 

- Potenza (Leistung): -6000 Watt

- Tempo minimo (Mindestzeit): 1 minuto


![Esempi di comando del boiler con azioni se/allora – Figura 4](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/04.png)

<div className="row">
<div className="col col--5">

Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 22:00

- Giorni della settimana (Wochentage): seleziona tutti (Alle Wählen)

- A (Bis): 01:00

</div>
<div className="col col--7 bild--mitte">

![Esempi di comando del boiler con azioni se/allora – Figura 5](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/05.png)

</div>
</div>

Se evento (Wenn Ereignis)

- Tipo (Typ): collegamento OR (Oder Verknüpfung)


![Esempi di comando del boiler con azioni se/allora – Figura 6](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/06.png)

Allora accendi/spegni (Dann Ein / ausschalten)

- Contatore (Zähler): EG

- Boiler: acceso (Ein)


![Esempi di comando del boiler con azioni se/allora – Figura 7](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/07.png)

### Configurazione: boiler spento, vista tabellare (breve)



Azione se/allora: Boiler EG Aus

Questa azione se/allora svolge la funzione di:

- Spegnere il boiler quando il contatore di bilancio non fornisce elettricità sufficiente per più di tre minuti.

- E

- Quando il boiler non si trova all'interno del periodo prestabilito in cui viene in ogni caso riscaldato per tre ore.


La configurazione è illustrata di seguito nella vista tabellare. È importante notare che si tratta di un'azione AND, che la soglia ora è sopra e non più sotto e che gli orari sono l'opposto dell'accensione (riscaldamento supplementare), sfasati di 1 minuto.

Configurazione: boiler 1 spento (EG)

Azione se/allora: Boiler EG Aus

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 Watt

- Tempo minimo (Mindestzeit): 4 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 01:01

- Giorni della settimana (Wochentage): seleziona tutti (Alle Wählen)

- A (Bis): 21:59


Se evento (Wenn Ereignis)

- Tipo (Typ): collegamento AND (Und Verknüpfung)


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: spento (Aus)


![Esempi di comando del boiler con azioni se/allora – Figura 8](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/08.png)

## Esempio ottimizzato per il solare con riscaldamento supplementare con 3 boiler (spiegazione in forma tabellare)

Durante la configurazione delle azioni se/allora verifichi sempre se l'unità visualizzata è watt o kilowatt

I relè sono collegati ai boiler e sono stati denominati "Boiler".

Tempo necessario per assorbire la piena potenza: 20 secondi

Il boiler si accende autonomamente al raggiungimento di una temperatura minima: No

Potenza: 

- Boiler EG: 6 kW

- Boiler DG: 3 kW

- Boiler UG: 2 kW


Per garantire che i boiler non vengano accesi contemporaneamente, inseriremo un ritardo prima dell'accensione di ciascun boiler. Il boiler con il tempo di ritardo più breve trae il massimo vantaggio dall'utilizzo dell'energia solare, poiché viene acceso per primo. In questo esempio accenderemo per primo il boiler con il consumo più elevato, in modo che abbia la possibilità di essere acceso per primo dopo un lungo periodo di consumo elevato, ad es. a mezzogiorno.

### Configurazione: boiler acceso, vista tabellare (breve)

Qui approfondiamo ancora la configurazione. Un esempio più semplice è spiegato in dettaglio più sopra.

La rappresentazione in forma tabellare permette di riconoscere più rapidamente le differenze sugli schermi desktop e quindi anche la logica sottostante.

Configurazione: boiler 1 acceso (EG)

Azione se/allora: Boiler EG Ein

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sotto (unter) 

- Potenza (Leistung): \-6000 Watt

- Tempo minimo (Mindestzeit): 1 minuto


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 22:00

- Giorni della settimana (Wochentage): seleziona tutti (Alle wählen)

- A (Bis): 01:00


Se evento (Wenn Ereignis)

- Tipo (Typ): collegamento OR (Oder Verknüpfung)


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: acceso (Ein)


Configurazione: boiler 2 acceso (DG)

Azione se/allora: Boiler DG Ein

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sotto (unter)

- Potenza (Leistung): \-3000 Watt

- Tempo minimo (Mindestzeit): 2 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 01:00

- Giorni della settimana (Wochentage): seleziona tutti (Alle wählen)

- A (Bis): 05:00


Se evento (Wenn Ereignis)

- Tipo (Typ): collegamento OR (Oder Verknüpfung)


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): DG

- Boiler: acceso (Ein)


Configurazione: boiler 3 acceso (UG)

Azione se/allora: Boiler UG Ein

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sotto (unter) 

- Potenza (Leistung): \-2000 Watt

- Tempo minimo (Mindestzeit): 3 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 02:00

- Giorni della settimana (Wochentage): seleziona tutti (Alle wählen)

- A (Bis): 06:00


Se evento (Wenn Ereignis)

- Tipo (Typ): collegamento OR (Oder Verknüpfung)


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): UG

- Boiler: acceso (Ein)


### Configurazione: boiler spento, vista tabellare (breve)

Configurazione: boiler 1 spento (EG)

Azione se/allora: Boiler EG Aus

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 Watt

- Tempo minimo (Mindestzeit): 4 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 01:01

- Giorni della settimana (Wochentage): seleziona tutti (Alle Wählen)

- A (Bis): 21:59


Se evento (Wenn Ereignis)

- Tipo (Typ): collegamento AND (Und Verknüpfung)


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: spento (Aus)


Configurazione: boiler 2 spento (DG)

Azione se/allora: Boiler DG Aus

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 Watt

- Tempo minimo (Mindestzeit): 5 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 05:01

- Giorni della settimana (Wochentage): seleziona tutti (Alle Wählen)

- A (Bis): 00:59


Se evento (Wenn Ereignis)

- Tipo (Typ): collegamento AND (Und Verknüpfung)


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): DG

- Boiler: spento (Aus)


Configurazione: boiler 3 spento (UG)

Azione se/allora: Boiler UG Aus

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 Watt

- Tempo minimo (Mindestzeit): 6 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 06:01

- Giorni della settimana (Wochentage): seleziona tutti (Alle Wählen)

- A (Bis): 01:59


Se evento (Wenn Ereignis)

- Tipo (Typ): collegamento AND (Und Verknüpfung)


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): UG

- Boiler: spento (Aus)


## Esempio ottimizzato per il solare senza riscaldamento supplementare con 1 boiler

Come l'"Esempio ottimizzato per il solare senza riscaldamento supplementare con 3 boiler (spiegazione in forma tabellare)" qui sotto. Deve solo effettuare la configurazione per un boiler.

## Esempio ottimizzato per il solare senza riscaldamento supplementare con 3 boiler (spiegazione in forma tabellare)

Durante la configurazione delle azioni se/allora verifichi sempre se l'unità visualizzata è watt o kilowatt.

I relè sono collegati ai boiler e sono stati denominati "Boiler".

Tempo necessario per assorbire la piena potenza: 20 secondi

Il boiler si accende autonomamente al raggiungimento di una temperatura minima: Sì

Potenza: 

- Boiler EG: 6 kW

- Boiler DG: 3 kW

- Boiler UG: 2 kW


Per garantire che i boiler non vengano accesi contemporaneamente, inseriremo un ritardo prima dell'accensione di ciascun boiler. Il boiler con il tempo di ritardo più breve trae il massimo vantaggio dall'utilizzo dell'energia solare, poiché viene acceso per primo. In questo esempio accenderemo per primo il boiler con il consumo più elevato, in modo che abbia la possibilità di essere acceso per primo dopo un lungo periodo di consumo elevato, ad es. a mezzogiorno.

### Configurazione: boiler acceso, vista tabellare (breve)

Qui approfondiamo ancora la configurazione. Un esempio più semplice è spiegato in dettaglio più sopra.

La rappresentazione in forma tabellare permette di riconoscere più rapidamente le differenze sugli schermi desktop e quindi anche la logica sottostante.

![Esempi di comando del boiler con azioni se/allora – Figura 9](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/09.png)

Configurazione: boiler 1 acceso (EG)

Azione se/allora: Boiler EG Ein

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sotto (unter) 

- Potenza (Leistung): \-6000 Watt

- Tempo minimo (Mindestzeit): 1 minuto


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: acceso (Ein)


Configurazione: boiler 2 acceso (DG)

Azione se/allora: Boiler DG Ein

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sotto (unter)

- Potenza (Leistung): \-3000 Watt

- Tempo minimo (Mindestzeit): 2 minuti


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): DG

- Boiler: acceso (Ein)


Configurazione: boiler 3 acceso (UG)

Azione se/allora: Boiler UG Ein

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sotto (unter) 

- Potenza (Leistung): \-2000 Watt

- Tempo minimo (Mindestzeit): 3 minuti


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): UG

- Boiler: acceso (Ein)


### Configurazione: boiler spento, vista tabellare (breve)

![Esempi di comando del boiler con azioni se/allora – Figura 10](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/10.png)

Configurazione: boiler 1 spento (EG)

Azione se/allora: Boiler EG Aus

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 Watt

- Tempo minimo (Mindestzeit): 4 minuti


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: spento (Aus)


Configurazione: boiler 2 spento (DG)

Azione se/allora: Boiler DG Aus

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 Watt

- Tempo minimo (Mindestzeit): 5 minuti


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): DG

- Boiler: spento (Aus)


Configurazione: boiler 3 spento (UG)

Azione se/allora: Boiler UG Aus

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 Watt

- Tempo minimo (Mindestzeit): 6 minuti


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): UG

- Boiler: spento (Aus)


## Esempio ottimizzato per il solare senza riscaldamento supplementare con 1 boiler e booster / legionella

Durante la configurazione delle azioni se/allora verifichi sempre se l'unità visualizzata è watt o kilowatt.

I relè sono collegati ai boiler e sono stati denominati "Boiler".

Il MOSFET viene configurato secondo [Ingressi e uscite](/schnittstellen/ein-und-ausgaenge) e porta il nome "Booster und Legionelle".

Tempo necessario per assorbire la piena potenza: 20 secondi

Il boiler si accende autonomamente al raggiungimento di una temperatura minima: Sì

Potenza: 

- Boiler: 7 kW


### Configurazione: legionella accesa

Questa configurazione è necessaria solo se si desidera attivare la protezione antilegionella, ad es. 1 volta alla settimana il venerdì a partire dalle 3:15. Qui si indica una durata, che è di 30 minuti (predefinita), per garantire che lo stato venga impostato su "acceso" (Ein) anche se un pacchetto di dati va perso.

Azione se/allora: Legionelle Ein

Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 03:15

- Giorni della settimana (Wochentage): seleziona tutti (Alle Wählen)

- A (Bis): 03:45


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Uscita (Ausgang) Booster und Legionelle: acceso (Ein)

- Tempo minimo (Mindestzeit): no (Nein)


![Esempi di comando del boiler con azioni se/allora – Figura 11](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/11.png)

### Configurazione: booster e legionella spenti

Corrisponde al tempo dopo il quale il booster (attivato manualmente dall'utente nell'interfaccia smart-me) o la commutazione antilegionella (configurata come sopra) deve essere spento automaticamente, perché a quel punto il boiler è riscaldato. Ad es. 90 minuti. 

Azione se/allora: Booster Legionelle Aus

Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): EG

- Uscita (Ausgang) Booster und Legionelle: acceso (Ein)

- Tempo minimo (Mindestzeit): sì (Ja), 90 minuti


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Uscita (Ausgang) Booster und Legionelle: spento (Aus)


![Esempi di comando del boiler con azioni se/allora – Figura 12](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/12.png)

### Configurazione: boiler acceso, vista tabellare (breve)

Configurazione: boiler acceso

Azione se/allora: Boiler Ein

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sotto (unter) 

- Potenza (Leistung): \-7000 Watt

- Tempo minimo (Mindestzeit): 1 minuto


Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): EG

- Uscita (Ausgang) Booster und Legionelle: acceso (Ein)

- Tempo minimo (Mindestzeit): no (Nein)


Se evento (Wenn Ereignis)

- Tipo (Typ): collegamento OR (ODER Verknüpfung)


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: acceso (Ein)


![Esempi di comando del boiler con azioni se/allora – Figura 13](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/13.png)

### Configurazione: boiler spento, vista tabellare (breve)

Configurazione: boiler 1 spento (EG)

Azione se/allora: Boiler EG Aus

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 Watt

- Tempo minimo (Mindestzeit): 1 minuto


Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): EG

- Uscita (Ausgang) Booster und Legionelle: spento (Aus)

- Tempo minimo (Mindestzeit): no (Nein)


Se evento (Wenn Ereignis)

- Tipo (Typ): collegamento AND (UND Verknüpfung)


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: spento (Aus)


![Esempi di comando del boiler con azioni se/allora – Figura 14](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/14.png)

## Esempio ottimizzato per il solare con riscaldamento supplementare e pulsante booster con 1 boiler

Come l'"Esempio ottimizzato per il solare con riscaldamento supplementare e pulsante booster con 3 boiler (spiegazione in forma tabellare)" qui sotto. Deve solo effettuare la configurazione per un boiler.

## Esempio ottimizzato per il solare con riscaldamento supplementare e pulsante booster con 3 boiler (spiegazione in forma tabellare)

<div className="row">
<div className="col col--6">

Durante la configurazione delle azioni se/allora verifichi sempre se l'unità visualizzata è watt o kilowatt.

I relè sono collegati ai boiler e sono stati denominati "Boiler".

Il MOSFET viene configurato secondo [Ingressi e uscite](/schnittstellen/ein-und-ausgaenge) e porta il nome "Boiler Booster".

</div>
<div className="col col--6 bild--mitte">

![Esempi di comando del boiler con azioni se/allora – Figura 15](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/15.png)

</div>
</div>

Tempo necessario per assorbire la piena potenza: 20 secondi

Il boiler si accende autonomamente al raggiungimento di una temperatura minima: Sì

Potenza: 

- Boiler EG: 6 kW

- Boiler DG: 3 kW

- Boiler UG: 2 kW


Per garantire che i boiler non vengano accesi contemporaneamente, inseriremo un ritardo prima dell'accensione di ciascun boiler. Il boiler con il tempo di ritardo più breve trae il massimo vantaggio dall'utilizzo dell'energia solare, poiché viene acceso per primo. In questo esempio accenderemo per primo il boiler con il consumo più elevato, in modo che abbia la possibilità di essere acceso per primo dopo un lungo periodo di consumo elevato, ad es. a mezzogiorno.

### Configurazione: boiler acceso, vista tabellare (breve)

Qui approfondiamo ancora la configurazione. Un esempio più semplice è spiegato in dettaglio più sopra.

La rappresentazione in forma tabellare permette di riconoscere più rapidamente le differenze sugli schermi desktop e quindi anche la logica sottostante.

![Esempi di comando del boiler con azioni se/allora – Figura 16](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/16.png)

Configurazione: boiler 1 acceso (EG)

Azione se/allora: Boiler EG Ein

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sotto (unter) 

- Potenza (Leistung): \-6000 Watt

- Tempo minimo (Mindestzeit): 1 minuto


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 22:00

- Giorni della settimana (Wochentage): seleziona tutti (Alle Wählen)

- A (Bis): 01:00


Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): EG

- Uscita (Ausgang) Boiler Booster: acceso (Ein)

- Tempo minimo (Mindestzeit): no (Nein)


Se evento (Wenn Ereignis)

- Tipo (Typ): collegamento OR (Oder Verknüpfung)


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler Booster: non selezionare nulla (Nichts wählen)

- Boiler: acceso (Ein)


Configurazione: boiler 2 acceso (DG)

Azione se/allora: Boiler DG Ein

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sotto (unter)

- Potenza (Leistung): \-3000 Watt

- Tempo minimo (Mindestzeit): 2 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 01:00

- Giorni della settimana (Wochentage): seleziona tutti (Alle Wählen)

- A (Bis): 05:00


Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): DG

- Uscita (Ausgang) Boiler Booster: acceso (Ein)

- Tempo minimo (Mindestzeit): no (Nein)


Se evento (Wenn Ereignis)

- Tipo (Typ): collegamento OR (Oder Verknüpfung)


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): DG

- Boiler Booster: non selezionare nulla (Nichts wählen)

- Boiler: acceso (Ein)


Configurazione: boiler 3 acceso (UG)

Azione se/allora: Boiler UG Ein

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sotto (unter) 

- Potenza (Leistung): \-2000 Watt

- Tempo minimo (Mindestzeit): 3 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 02:00

- Giorni della settimana (Wochentage): seleziona tutti (Alle Wählen)

- A (Bis): 06:00


Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): UG

- Uscita (Ausgang) Boiler Booster: acceso (Ein)

- Tempo minimo (Mindestzeit): no (Nein)


Se evento (Wenn Ereignis)

- Tipo (Typ): collegamento OR (Oder Verknüpfung)


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): UG

- Boiler Booster: non selezionare nulla (Nichts wählen)

- Boiler: acceso (Ein)


### Configurazione: boiler spento, vista tabellare (breve)

![Esempi di comando del boiler con azioni se/allora – Figura 17](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/17.png)

Configurazione: boiler 1 spento (EG)

Azione se/allora: Boiler EG Aus

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 Watt

- Tempo minimo (Mindestzeit): 4 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 01:01

- Giorni della settimana (Wochentage): seleziona tutti (Alle Wählen)

- A (Bis): 21:59


Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): EG

- Uscita (Ausgang) Boiler Booster: spento (Aus)

- Tempo minimo (Mindestzeit): no (Nein)


Se evento (Wenn Ereignis)

- Tipo (Typ): collegamento AND (Und Verknüpfung)


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: spento (Aus)


Configurazione: boiler 2 spento (DG)

Azione se/allora: Boiler DG Aus

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 Watt

- Tempo minimo (Mindestzeit): 5 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 05:01

- Giorni della settimana (Wochentage): seleziona tutti (Alle Wählen)

- A (Bis): 00:59


Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): EG

- Uscita (Ausgang) Boiler Booster: spento (Aus)

- Tempo minimo (Mindestzeit): no (Nein)


Se evento (Wenn Ereignis)

- Tipo (Typ): collegamento AND (Und Verknüpfung)


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): DG

- Boiler: spento (Aus)


Configurazione: boiler 3 spento (UG)

Azione se/allora: Boiler UG Aus

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilanz 

- Soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 Watt

- Tempo minimo (Mindestzeit): 6 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 06:01

- Giorni della settimana (Wochentage): seleziona tutti (Alle Wählen)

- A (Bis): 01:59


Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): EG

- Uscita (Ausgang) Boiler Booster: spento (Aus)

- Tempo minimo (Mindestzeit): no (Nein)


Se evento (Wenn Ereignis)

- Tipo (Typ): collegamento AND (Und Verknüpfung)


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): UG

- Boiler: spento (Aus)


### Configurazione: reset del booster del boiler, vista tabellare (breve)

Questa sezione è facoltativa. Se non viene configurata, il pulsante booster non viene mai ripristinato e resta sempre valido.

In questo esempio il pulsante "Boiler Booster" viene reimpostato su "spento" (aus) dopo 300 minuti, ossia 5 ore.

![Esempi di comando del boiler con azioni se/allora – Figura 18](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/18.png)

Configurazione: reset del booster del boiler 1 (EG)

Azione se/allora: Boiler EG Booster Reset

Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): EG

- Uscita (Ausgang) Boiler Booster: acceso (Ein)

- Tempo minimo (Mindestzeit): 300 minuti


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: spento (Aus)


Configurazione: reset del booster del boiler 2 (DG)

Azione se/allora: Boiler DG Booster Reset

Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): DG

- Uscita (Ausgang) Boiler Booster: acceso (Ein)

- Tempo minimo (Mindestzeit): 300 minuti


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): DG

- Boiler: spento (Aus)


Configurazione: reset del booster del boiler 3 (UG)

Azione se/allora: Boiler UG Booster Reset

Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): UG

- Uscita (Ausgang) Boiler Booster: acceso (Ein)

- Tempo minimo (Mindestzeit): 300 minuti


Allora accendi/spegni (Dann ein- / ausschalten)

- Contatore (Zähler): UG

- Boiler: spento (Aus)
