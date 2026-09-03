---
title: 'Esempi di controllo del boiler con azioni se/allora'
slug: '/konfiguration/wenndann-aktionen/beispiel-boilersteuerung'
description: 'Le configurazioni di esempio sono descritte in dettaglio in questa pagina.'
sidebar_label: 'Esempio controllo del boiler'
---
Le configurazioni di esempio sono descritte in dettaglio in questa pagina.

## Requisiti

Per poter utilizzare le azioni se/allora è necessario disporre di una licenza smart-me Limited o Professional.

## Nozioni di base

I dati tecnici si trovano presso i rispettivi [prodotti](/produkte). (ad es. la potenza di commutazione massima).

La configurazione delle uscite è descritta alla pagina [Ingressi e uscite](/schnittstellen/ein_und_ausgaenge) (ad es. l'attivazione dell'uscita 1).

Le nozioni di base sono descritte alla pagina [Azioni se/allora](/konfiguration/wenndann-aktionen) (ad es. dove trovare le azioni se/allora).

Tieni presente che le [azioni se/allora](/konfiguration/wenndann-aktionen) funzionano correttamente solo se è garantita la connessione al cloud smart-me. Le [azioni basate su eventi](/konfiguration/wenndann-aktionen/ereignisaktionen)  sono più limitate, ma vengono salvate ed eseguite localmente.

Durante la configurazione delle azioni se/allora presta sempre attenzione al fatto che l'unità visualizzata sia watt o kilowatt.

I contatori smart-me sono dotati di relè bistabili: se è configurata un'accensione, deve essere sempre configurato anche lo spegnimento.

## Introduzione

Determina il consumo e prevedi una riserva per le fluttuazioni di consumo

Per configurare un buon controllo è importante conoscere la potenza assorbita dalle utenze. È inoltre necessario prevedere una riserva per ogni caso. Se, ad esempio, il boiler dell'ultimo piano (DG) richiede 3 kW, il boiler viene accesso quando sul contatore di bilancio vengono misurati meno di -3,5 kW e viene spento solo quando vengono misurati più di 0 kW. La differenza di 0,5 kW funge quindi da margine, ad esempio quando qualcuno accende un computer (60 watt), in modo che in questo caso non manchi immediatamente l'energia disponibile.

Accensione o spegnimento ritardato

Inoltre, prima dell'accensione o dello spegnimento va calcolato un intervallo di tempo. Così, ad esempio, il boiler viene spento solo quando il valore di 0 kW viene superato per più di 5 minuti. In questo modo si garantisce che un'utenza di breve durata come un forno o un bollitore non comporti immediatamente lo spegnimento e la riaccensione continui dell'utenza. Questo è tanto più importante quanto più grande è l'edificio.

Determinare quante utenze possono essere accese contemporaneamente 

Dovresti sempre verificare come sono stati dimensionati i fusibili. Questo va tenuto in considerazione quando tutte le utenze sono in funzione contemporaneamente, ad es. di notte. Se il fusibile è troppo piccolo, devi configurare le azioni se/allora in modo che le utenze non vengano accese contemporaneamente.

Rilevare i tempi di accensione e spegnimento delle utenze per un'accensione a gradini

Nell'accensione graduale delle utenze, ad es. di più boiler, va garantito che il ritardo tra la prima e la seconda utenza sia sufficientemente lungo perché la prima utenza assorba la piena potenza. Se, ad esempio, servono solo 20 secondi perché le utenze assorbano la piena potenza, le utenze possono essere accese con un ritardo di un minuto. Purché sia disponibile abbastanza corrente.

Se esistono orari fissi di accensione e spegnimento, va fatta attenzione che questi siano sfasati di almeno 1 minuto. Ad esempio accensione tra le 5:00 e le 8:00 e spegnimento tra le 8:01 e le 4:59

Spegnimento delle utenze

Nello spegnimento delle utenze, ad es. di più boiler, è possibile spegnere tutto in una volta. Quindi, ad esempio, con un ritardo di 5 minuti (spegnimento ritardato). È però anche possibile spegnere i boiler gradualmente.

Esempio di uno spegnimento graduale con ritardo: 

- Il primo boiler si spegne con un ritardo di 5 minuti, così che ad es. qualcuno possa accendere il bollitore senza che questo spenga il boiler. 

- Il secondo boiler viene spento dopo 7 minuti di prelievo dalla rete elevato (quindi 5 minuti dopo il primo + 2 minuti di attesa)

- Il terzo boiler viene poi spento dopo 9 minuti di prelievo dalla rete elevato


Ottimizzato per la rete vs. ottimizzato per l'autoconsumo

Nella configurazione dei valori soglia di accensione e spegnimento va deciso se si tratta di un impianto ottimizzato per la rete, ossia le utenze si accendono e si spengono per quanto possibile sempre quando la corrente viene prelevata dalla rete. Oppure se l'impianto deve essere ottimizzato per l'autoconsumo. Ciò significa che si deve utilizzare il più possibile la corrente prodotta dal tetto.

- Esempio per un'utenza di 2,5 kW con una riserva per le fluttuazioni di consumo di 0,5 kW.

    - Ottimizzato per la rete: accendere il boiler a -3 kW e spegnerlo a 0 kW. 

    - Ottimizzato per l'autoconsumo: accendere il boiler a -1,5 kW e spegnerlo a +1,5 kW.

    - Soluzione intermedia: accendere il boiler a -2.5 kW e spegnerlo a + 0.5 kW.


Nella configurazione va tenuto presente che la variante con autoconsumo ottimizzato è più redditizia in inverno, mentre in estate con il bel tempo le utenze vengono accese molto presto e nel pomeriggio, con il sole, sono già cariche.

Abbiamo avuto buone esperienze quando le utenze si accendono nel momento in cui possono essere alimentate al 100 % con corrente solare e si tiene conto della riserva per piccole fluttuazioni nella quota di rete. Quindi l'esempio precedente "soluzione intermedia".

Pulsante booster

La configurazione di un pulsante booster per un'utenza è certamente possibile, ma rende la configurazione più laboriosa e complicata. Inoltre va tenuto presente che solo il proprietario dell'account smart-me ha la possibilità di attivare un pulsante booster. 

Per questa funzione dobbiamo utilizzare un'uscita digitale che non è collegata fisicamente a un'utenza. Utilizziamo poi il pulsante solo come stato per le azioni se/allora.

Riscaldamento supplementare con ore di punta e ore fuori punta vs. riscaldamento supplementare con tariffa unica. 

Nei boiler riscaldati in modo supplementare con le azioni se/allora si può tenere conto della struttura tariffaria locale. 

Se di notte la corrente è più economica, è consuetudine effettuare il riscaldamento supplementare di notte. Questo comporta tuttavia che il boiler abbia di regola la temperatura massima all'alba. 

Se viene applicata una tariffa unica, è preferibile distribuire il riscaldamento supplementare a partire dalle ore 12. In estate il boiler può così essere caricato in modo ottimale la mattina ed eventualmente riscaldato nel pomeriggio. In questo modo la resa solare per il boiler è migliore. Nei seguenti esempi il riscaldamento supplementare avviene di notte. Se deve avvenire di giorno, modificate semplicemente gli orari di accensione degli esempi. Fate attenzione che va considerato anche lo spegnimento.

Controllo del boiler a 3 livelli

L'esempio riportato sotto per il controllo di 3 boiler può essere utilizzato anche per il controllo di 1 boiler con 3 fasi. La configurazione è esattamente la stessa.

![Esempi di controllo del boiler con azioni se/allora – Figura 1](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/01.png)

Immagine: RCP con 3 boiler incl. riscaldamento supplementare di notte (rettangoli verdi)

## Esempio ottimizzato per il solare con riscaldamento supplementare con 1 boiler (spiegazione dettagliata con immagini e spiegazione in forma tabellare)

Durante la configurazione delle azioni se/allora presta sempre attenzione al fatto che l'unità visualizzata sia watt o kilowatt.

I relè sono collegati al boiler e sono stati denominati "Boiler".

Durata fino all'assorbimento della piena potenza: 20 secondi

Il boiler si accende autonomamente al raggiungimento di una temperatura minima: no

Potenza boiler piano terra (EG): 6 kW

![Esempi di controllo del boiler con azioni se/allora – Figura 2](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/02.png)

Configurazione: boiler 1 acceso (EG)

Azione se/allora: boiler EG acceso

Questa azione se/allora svolge la funzione di:

- accendere il boiler quando il contatore di bilancio fornisce corrente sufficiente per più di un minuto.


Oppure

- è un orario stabilito e il boiler viene in ogni caso riscaldato per tre ore.


![Esempi di controllo del boiler con azioni se/allora – Figura 3](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/03.png)

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilancio (Bilanz) 

- Valore soglia (Schwellwert): sotto (unter) 

- Potenza (Leistung): -6000 watt

- Tempo minimo (Mindestzeit): 1 minuto


![Esempi di controllo del boiler con azioni se/allora – Figura 4](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/04.png)

Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 22:00

- Giorni della settimana (Wochentage): seleziona tutti (Alle Wählen)

- A (Bis): 01:00


![Esempi di controllo del boiler con azioni se/allora – Figura 5](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/05.png)

Se evento (Wenn Ereignis)

- Tipo (Typ): operatore OR (Oder Verknüpfung)


![Esempi di controllo del boiler con azioni se/allora – Figura 6](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/06.png)

Allora accendere/spegnere (Dann Ein / ausschalten)

- Contatore (Zähler): EG

- Boiler: acceso (Ein)


![Esempi di controllo del boiler con azioni se/allora – Figura 7](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/07.png)

### Configurazione: boiler spento, vista tabellare (breve)



Azione se/allora: boiler EG spento

Questa azione se/allora svolge la funzione di:

- spegnere il boiler quando il contatore di bilancio non fornisce corrente sufficiente per più di tre minuti.

- E

- quando il boiler non si trova all'interno del periodo stabilito in cui viene in ogni caso riscaldato per tre ore.


La configurazione è illustrata sotto nella vista tabellare. È importante tenere presente che si tratta di un'azione E, che il valore soglia è ora sopra e non più sotto e che gli orari sono l'opposto dell'accensione (riscaldamento supplementare) con uno sfasamento di 1 minuto.

Configurazione: boiler 1 spento (EG)

Azione se/allora: boiler EG spento

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilancio (Bilanz) 

- Valore soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 watt

- Tempo minimo (Mindestzeit): 4 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 01:01

- Giorni della settimana (Wochentage): seleziona tutti (Alle Wählen)

- A (Bis): 21:59


Se evento (Wenn Ereignis)

- Tipo (Typ): operatore AND (Und Verknüpfung)


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: spento (Aus)


![Esempi di controllo del boiler con azioni se/allora – Figura 8](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/08.png)

## Esempio ottimizzato per il solare con riscaldamento supplementare con 3 boiler (spiegazione in forma tabellare)

Durante la configurazione delle azioni se/allora presta sempre attenzione al fatto che l'unità visualizzata sia watt o kilowatt

I relè sono collegati ai boiler e sono stati denominati "Boiler".

Durata fino all'assorbimento della piena potenza: 20 secondi

Il boiler si accende autonomamente al raggiungimento di una temperatura minima: no

Potenza: 

- Boiler EG: 6 kW

- Boiler DG: 3 kW

- Boiler UG: 2 kW


Per garantire che i boiler non vengano accesi contemporaneamente, inseriremo un ritardo prima dell'accensione di ciascun boiler. Il boiler con il tempo di ritardo più breve ha il maggiore vantaggio nell'utilizzo dell'energia solare, poiché viene accesso per primo. In questo esempio accenderemo per primo il boiler con il consumo più elevato, affinché abbia la possibilità di essere accesso per primo dopo un lungo periodo con consumo elevato, ad es. a mezzogiorno.

### Configurazione: boiler acceso, vista tabellare (breve)

Qui entriamo ora nel dettaglio della configurazione. Un esempio più semplice è spiegato in dettaglio più sopra.

Grazie alla rappresentazione in forma tabellare, le differenze si riconoscono più rapidamente sugli schermi desktop e con esse anche la logica sottostante.

Configurazione: boiler 1 acceso (EG)

Azione se/allora: boiler EG acceso

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilancio (Bilanz) 

- Valore soglia (Schwellwert): sotto (unter) 

- Potenza (Leistung): \-6000 watt

- Tempo minimo (Mindestzeit): 1 minuto


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 22:00

- Giorni della settimana (Wochentage): seleziona tutti (Alle wählen)

- A (Bis): 01:00


Se evento (Wenn Ereignis)

- Tipo (Typ): operatore OR (Oder Verknüpfung)


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: acceso (Ein)


Configurazione: boiler 2 acceso (DG)

Azione se/allora: boiler DG acceso

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilancio (Bilanz) 

- Valore soglia (Schwellwert): sotto (unter)

- Potenza (Leistung): \-3000 watt

- Tempo minimo (Mindestzeit): 2 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 01:00

- Giorni della settimana (Wochentage): seleziona tutti (Alle wählen)

- A (Bis): 05:00


Se evento (Wenn Ereignis)

- Tipo (Typ): operatore OR (Oder Verknüpfung)


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): DG

- Boiler: acceso (Ein)


Configurazione: boiler 3 acceso (UG)

Azione se/allora: boiler UG acceso

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilancio (Bilanz) 

- Valore soglia (Schwellwert): sotto (unter) 

- Potenza (Leistung): \-2000 watt

- Tempo minimo (Mindestzeit): 3 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 02:00

- Giorni della settimana (Wochentage): seleziona tutti (Alle wählen)

- A (Bis): 06:00


Se evento (Wenn Ereignis)

- Tipo (Typ): operatore OR (Oder Verknüpfung)


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): UG

- Boiler: acceso (Ein)


### Configurazione: boiler spento, vista tabellare (breve)

Configurazione: boiler 1 spento (EG)

Azione se/allora: boiler EG spento

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilancio (Bilanz) 

- Valore soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 watt

- Tempo minimo (Mindestzeit): 4 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 01:01

- Giorni della settimana (Wochentage): seleziona tutti (Alle Wählen)

- A (Bis): 21:59


Se evento (Wenn Ereignis)

- Tipo (Typ): operatore AND (Und Verknüpfung)


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: spento (Aus)


Configurazione: boiler 2 spento (DG)

Azione se/allora: boiler DG spento

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilancio (Bilanz) 

- Valore soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 watt

- Tempo minimo (Mindestzeit): 5 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 05:01

- Giorni della settimana (Wochentage): seleziona tutti (Alle Wählen)

- A (Bis): 00:59


Se evento (Wenn Ereignis)

- Tipo (Typ): operatore AND (Und Verknüpfung)


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): DG

- Boiler: spento (Aus)


Configurazione: boiler 3 spento (UG)

Azione se/allora: boiler UG spento

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilancio (Bilanz) 

- Valore soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 watt

- Tempo minimo (Mindestzeit): 6 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 06:01

- Giorni della settimana (Wochentage): seleziona tutti (Alle Wählen)

- A (Bis): 01:59


Se evento (Wenn Ereignis)

- Tipo (Typ): operatore AND (Und Verknüpfung)


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): UG

- Boiler: spento (Aus)


## Esempio ottimizzato per il solare senza riscaldamento supplementare con 1 boiler

Come l'esempio sottostante "Esempio ottimizzato per il solare senza riscaldamento supplementare con 3 boiler (spiegazione in forma tabellare)". Devi solo eseguire la configurazione per un boiler.

## Esempio ottimizzato per il solare senza riscaldamento supplementare con 3 boiler (spiegazione in forma tabellare)

Durante la configurazione delle azioni se/allora presta sempre attenzione al fatto che l'unità visualizzata sia watt o kilowatt.

I relè sono collegati ai boiler e sono stati denominati "Boiler".

Durata fino all'assorbimento della piena potenza: 20 secondi

Il boiler si accende autonomamente al raggiungimento di una temperatura minima: sì

Potenza: 

- Boiler EG: 6 kW

- Boiler DG: 3 kW

- Boiler UG: 2 kW


Per garantire che i boiler non vengano accesi contemporaneamente, inseriremo un ritardo prima dell'accensione di ciascun boiler. Il boiler con il tempo di ritardo più breve ha il maggiore vantaggio nell'utilizzo dell'energia solare, poiché viene accesso per primo. In questo esempio accenderemo per primo il boiler con il consumo più elevato, affinché abbia la possibilità di essere accesso per primo dopo un lungo periodo con consumo elevato, ad es. a mezzogiorno.

### Configurazione: boiler acceso, vista tabellare (breve)

Qui entriamo ora nel dettaglio della configurazione. Un esempio più semplice è spiegato in dettaglio più sopra.

Grazie alla rappresentazione in forma tabellare, le differenze si riconoscono più rapidamente sugli schermi desktop e con esse anche la logica sottostante.

![Esempi di controllo del boiler con azioni se/allora – Figura 9](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/09.png)

Configurazione: boiler 1 acceso (EG)

Azione se/allora: boiler EG acceso

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilancio (Bilanz) 

- Valore soglia (Schwellwert): sotto (unter) 

- Potenza (Leistung): \-6000 watt

- Tempo minimo (Mindestzeit): 1 minuto


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: acceso (Ein)


Configurazione: boiler 2 acceso (DG)

Azione se/allora: boiler DG acceso

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilancio (Bilanz) 

- Valore soglia (Schwellwert): sotto (unter)

- Potenza (Leistung): \-3000 watt

- Tempo minimo (Mindestzeit): 2 minuti


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): DG

- Boiler: acceso (Ein)


Configurazione: boiler 3 acceso (UG)

Azione se/allora: boiler UG acceso

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilancio (Bilanz) 

- Valore soglia (Schwellwert): sotto (unter) 

- Potenza (Leistung): \-2000 watt

- Tempo minimo (Mindestzeit): 3 minuti


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): UG

- Boiler: acceso (Ein)


### Configurazione: boiler spento, vista tabellare (breve)

![Esempi di controllo del boiler con azioni se/allora – Figura 10](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/10.png)

Configurazione: boiler 1 spento (EG)

Azione se/allora: boiler EG spento

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilancio (Bilanz) 

- Valore soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 watt

- Tempo minimo (Mindestzeit): 4 minuti


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: spento (Aus)


Configurazione: boiler 2 spento (DG)

Azione se/allora: boiler DG spento

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilancio (Bilanz) 

- Valore soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 watt

- Tempo minimo (Mindestzeit): 5 minuti


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): DG

- Boiler: spento (Aus)


Configurazione: boiler 3 spento (UG)

Azione se/allora: boiler UG spento

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilancio (Bilanz) 

- Valore soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 watt

- Tempo minimo (Mindestzeit): 6 minuti


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): UG

- Boiler: spento (Aus)


## Esempio ottimizzato per il solare senza riscaldamento supplementare con 1 boiler e booster / legionella

Durante la configurazione delle azioni se/allora presta sempre attenzione al fatto che l'unità visualizzata sia watt o kilowatt.

I relè sono collegati ai boiler e sono stati denominati "Boiler".

Il mosfet viene configurato secondo [Ingressi e uscite](/schnittstellen/ein_und_ausgaenge) e porta il nome "Booster und Legionelle".

Durata fino all'assorbimento della piena potenza: 20 secondi

Il boiler si accende autonomamente al raggiungimento di una temperatura minima: sì

Potenza: 

- Boiler: 7 kW


### Configurazione: legionella acceso

Questo va configurato solo se si desidera attivare la protezione contro la legionella. Ad es. 1 volta a settimana il venerdì a partire dalle 3:15. Qui viene indicata una durata, che è di 30 minuti (default), affinché possiamo garantire che lo stato venga impostato su "acceso" (Ein) anche se un pacchetto di dati va perso.

Azione se/allora: legionella acceso

Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 03:15

- Giorni della settimana (Wochentage): seleziona tutti (Alle Wählen)

- A (Bis): 03:45


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Uscita Booster und Legionelle: acceso (Ein)

- Tempo minimo (Mindestzeit): no (Nein)


![Esempi di controllo del boiler con azioni se/allora – Figura 11](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/11.png)

### Configurazione: booster e legionella spento

Questo corrisponde al tempo dopo il quale il booster (attivato manualmente dall'utente nella GUI smart-me) o la commutazione per la legionella (configurata come sopra) deve spegnersi automaticamente, perché il boiler è allora riscaldato. Ad es. 90 minuti. 

Azione se/allora: booster legionella spento

Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): EG

- Uscita Booster und Legionelle: acceso (Ein)

- Tempo minimo (Mindestzeit): sì, 90 minuti


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Uscita Booster und Legionelle: spento (Aus)


![Esempi di controllo del boiler con azioni se/allora – Figura 12](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/12.png)

### Configurazione: boiler acceso, vista tabellare (breve)

Configurazione: boiler acceso

Azione se/allora: boiler acceso

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilancio (Bilanz) 

- Valore soglia (Schwellwert): sotto (unter) 

- Potenza (Leistung): \-7000 watt

- Tempo minimo (Mindestzeit): 1 minuto


Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): EG

- Uscita Booster und Legionelle: acceso (Ein)

- Tempo minimo (Mindestzeit): no (Nein)


Se evento (Wenn Ereignis)

- Tipo (Typ): operatore OR (ODER Verknüpfung)


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: acceso (Ein)


![Esempi di controllo del boiler con azioni se/allora – Figura 13](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/13.png)

### Configurazione: boiler spento, vista tabellare (breve)

Configurazione: boiler 1 spento (EG)

Azione se/allora: boiler EG spento

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilancio (Bilanz) 

- Valore soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 watt

- Tempo minimo (Mindestzeit): 1 minuto


Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): EG

- Uscita Booster und Legionelle: spento (Aus)

- Tempo minimo (Mindestzeit): no (Nein)


Se evento (Wenn Ereignis)

- Tipo (Typ): operatore AND (UND Verknüpfung)


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: spento (Aus)


![Esempi di controllo del boiler con azioni se/allora – Figura 14](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/14.png)

## Esempio ottimizzato per il solare con riscaldamento supplementare e pulsante booster con 1 boiler

Come l'esempio sottostante "Esempio ottimizzato per il solare con riscaldamento supplementare e pulsante booster con 3 boiler (spiegazione in forma tabellare)". Devi solo eseguire la configurazione per un boiler.

## Esempio ottimizzato per il solare con riscaldamento supplementare e pulsante booster con 3 boiler (spiegazione in forma tabellare)

Durante la configurazione delle azioni se/allora presta sempre attenzione al fatto che l'unità visualizzata sia watt o kilowatt.

I relè sono collegati ai boiler e sono stati denominati "Boiler".

Il mosfet viene configurato secondo [Ingressi e uscite](/schnittstellen/ein_und_ausgaenge) e porta il nome "Boiler Booster".

![Esempi di controllo del boiler con azioni se/allora – Figura 15](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/15.png)

Durata fino all'assorbimento della piena potenza: 20 secondi

Il boiler si accende autonomamente al raggiungimento di una temperatura minima: sì

Potenza: 

- Boiler EG: 6 kW

- Boiler DG: 3 kW

- Boiler UG: 2 kW


Per garantire che i boiler non vengano accesi contemporaneamente, inseriremo un ritardo prima dell'accensione di ciascun boiler. Il boiler con il tempo di ritardo più breve ha il maggiore vantaggio nell'utilizzo dell'energia solare, poiché viene accesso per primo. In questo esempio accenderemo per primo il boiler con il consumo più elevato, affinché abbia la possibilità di essere accesso per primo dopo un lungo periodo con consumo elevato, ad es. a mezzogiorno.

### Configurazione: boiler acceso, vista tabellare (breve)

Qui entriamo ora nel dettaglio della configurazione. Un esempio più semplice è spiegato in dettaglio più sopra.

Grazie alla rappresentazione in forma tabellare, le differenze si riconoscono più rapidamente sugli schermi desktop e con esse anche la logica sottostante.

![Esempi di controllo del boiler con azioni se/allora – Figura 16](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/16.png)

Configurazione: boiler 1 acceso (EG)

Azione se/allora: boiler EG acceso

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilancio (Bilanz) 

- Valore soglia (Schwellwert): sotto (unter) 

- Potenza (Leistung): \-6000 watt

- Tempo minimo (Mindestzeit): 1 minuto


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 22:00

- Giorni della settimana (Wochentage): seleziona tutti (Alle Wählen)

- A (Bis): 01:00


Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): EG

- Uscita Boiler Booster: acceso (Ein)

- Tempo minimo (Mindestzeit): no (Nein)


Se evento (Wenn Ereignis)

- Tipo (Typ): operatore OR (Oder Verknüpfung)


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler Booster: non selezionare nulla (Nichts wählen)

- Boiler: acceso (Ein)


Configurazione: boiler 2 acceso (DG)

Azione se/allora: boiler DG acceso

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilancio (Bilanz) 

- Valore soglia (Schwellwert): sotto (unter)

- Potenza (Leistung): \-3000 watt

- Tempo minimo (Mindestzeit): 2 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 01:00

- Giorni della settimana (Wochentage): seleziona tutti (Alle Wählen)

- A (Bis): 05:00


Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): DG

- Uscita Boiler Booster: acceso (Ein)

- Tempo minimo (Mindestzeit): no (Nein)


Se evento (Wenn Ereignis)

- Tipo (Typ): operatore OR (Oder Verknüpfung)


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): DG

- Boiler Booster: non selezionare nulla (Nichts wählen)

- Boiler: acceso (Ein)


Configurazione: boiler 3 acceso (UG)

Azione se/allora: boiler UG acceso

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilancio (Bilanz) 

- Valore soglia (Schwellwert): sotto (unter) 

- Potenza (Leistung): \-2000 watt

- Tempo minimo (Mindestzeit): 3 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 02:00

- Giorni della settimana (Wochentage): seleziona tutti (Alle Wählen)

- A (Bis): 06:00


Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): UG

- Uscita Boiler Booster: acceso (Ein)

- Tempo minimo (Mindestzeit): no (Nein)


Se evento (Wenn Ereignis)

- Tipo (Typ): operatore OR (Oder Verknüpfung)


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): UG

- Boiler Booster: non selezionare nulla (Nichts wählen)

- Boiler: acceso (Ein)


### Configurazione: boiler spento, vista tabellare (breve)

![Esempi di controllo del boiler con azioni se/allora – Figura 17](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/17.png)

Configurazione: boiler 1 spento (EG)

Azione se/allora: boiler EG spento

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilancio (Bilanz) 

- Valore soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 watt

- Tempo minimo (Mindestzeit): 4 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 01:01

- Giorni della settimana (Wochentage): seleziona tutti (Alle Wählen)

- A (Bis): 21:59


Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): EG

- Uscita Boiler Booster: spento (Aus)

- Tempo minimo (Mindestzeit): no (Nein)


Se evento (Wenn Ereignis)

- Tipo (Typ): operatore AND (Und Verknüpfung)


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: spento (Aus)


nConfigurazione: boiler 2 spento (DG)

Azione se/allora: boiler DG spento

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilancio (Bilanz) 

- Valore soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 watt

- Tempo minimo (Mindestzeit): 5 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 05:01

- Giorni della settimana (Wochentage): seleziona tutti (Alle Wählen)

- A (Bis): 00:59


Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): EG

- Uscita Boiler Booster: spento (Aus)

- Tempo minimo (Mindestzeit): no (Nein)


Se evento (Wenn Ereignis)

- Tipo (Typ): operatore AND (Und Verknüpfung)


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): DG

- Boiler: spento (Aus)


Configurazione: boiler 3 spento (UG)

Azione se/allora: boiler UG spento

Se valore misurato maggiore/minore (Wenn Messwert grösser/kleiner):

- Contatore (Zähler): Bilancio (Bilanz) 

- Valore soglia (Schwellwert): sopra (über)

- Potenza (Leistung): 500 watt

- Tempo minimo (Mindestzeit): 6 minuti


Se data e ora (Wenn Datum & Uhrzeit):

- Tipo (Typ): intervallo di tempo / ogni giorno (Zeitspanne / Jeden Tag)

- Da (Von): 06:01

- Giorni della settimana (Wochentage): seleziona tutti (Alle Wählen)

- A (Bis): 01:59


Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): EG

- Uscita Boiler Booster: spento (Aus)

- Tempo minimo (Mindestzeit): no (Nein)


Se evento (Wenn Ereignis)

- Tipo (Typ): operatore AND (Und Verknüpfung)


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): UG

- Boiler: spento (Aus)


### Configurazione: reset del Boiler Booster, vista tabellare (breve)

Questa sezione è opzionale. Se non viene configurata, significa che il pulsante booster non viene mai resettato ed è sempre valido.

In questo esempio il pulsante "Boiler Booster" viene riportato su "spento" (aus) dopo 300 minuti, ossia 5 ore.

![Esempi di controllo del boiler con azioni se/allora – Figura 18](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/18.png)

Configurazione: reset del booster boiler 1 (EG)

Azione se/allora: boiler EG Booster Reset

Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): EG

- Uscita Boiler Booster: acceso (Ein)

- Tempo minimo (Mindestzeit): 300 minuti


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): EG

- Boiler: spento (Aus)


Configurazione: reset del booster boiler 2 (DG)

Azione se/allora: boiler DG Booster Reset

Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): DG

- Uscita Boiler Booster: acceso (Ein)

- Tempo minimo (Mindestzeit): 300 minuti


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): DG

- Boiler: spento (Aus)


Configurazione: reset del booster boiler 3 (UG)

Azione se/allora: boiler UG Booster Reset

Se stati di commutazione (Wenn Schaltzustände):

- Contatore (Zähler): UG

- Uscita Boiler Booster: acceso (Ein)

- Tempo minimo (Mindestzeit): 300 minuti


Allora accendere/spegnere (Dann ein- / ausschalten)

- Contatore (Zähler): UG

- Boiler: spento (Aus)
