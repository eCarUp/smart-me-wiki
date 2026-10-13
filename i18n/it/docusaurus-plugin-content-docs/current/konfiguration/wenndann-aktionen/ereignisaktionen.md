---
title: 'Azioni basate su eventi'
slug: '/konfiguration/wenndann-aktionen/ereignisaktionen'
description: 'È possibile creare comandi automatici per ogni dispositivo della piattaforma smart-me.'
sidebar_label: 'Azioni basate su eventi'
---
È possibile creare comandi automatici per ogni dispositivo della piattaforma smart-me. Esistono due modi per definire tali azioni: si creano azioni basate su eventi oppure [azioni se/allora](/konfiguration/wenndann-aktionen). In questo articolo vengono spiegate le azioni basate su eventi.

## Azioni basate su eventi, solo per contatori monofase e contatori trifase Telstar

Le azioni basate su eventi vengono salvate sul dispositivo stesso e funzionano quindi anche senza connessione a Internet, ad esempio quando il router WLAN è spento. A tale scopo devono però essere definite azioni che non richiedono una connessione a Internet. L'invio di un'e-mail, naturalmente, non funziona senza Internet. Sui dispositivi possono essere salvate fino a 16 azioni basate su eventi, che possono essere create e modificate nell'app o nel portale web.

Possibili trigger:

- -   Potenza maggiore / minore di xx

    - Ora

    - Corrente minore/maggiore (su una fase) (solo con il [contatore trifase Telstar](/))

    - Ingresso digitale (On/ Off) (solo con il [contatore trifase Telstar](/))




Possibili azioni:

- -   [E-mail di allarme](/konfiguration/wenndann-aktionen/alarme)

    - Accendere/spegnere la corrente (solo con il [contatore trifase Telstar](/))

    - Commutare la corrente on/off (non più supportato)

    - Accendere/spegnere la corrente su un altro dispositivo (non più supportato)

    - Commutare la corrente on/off su un altro dispositivo (non più supportato)


## Creare un'azione basata su eventi

Le azioni basate su eventi possono essere create nell'app o nel portale web.

### App

- Accedi al tuo account utente smart-me

- Seleziona un contatore

- Clicca sulla rotella dentata in alto a destra

- Clicca su "Azioni basate su eventi" (Ereignisaktionen) - "Aggiungi azione basata su eventi" (Ereignisaktion hinzufügen)


### Sito web

- Accedi al [Weblogin](https://web.smart-me.com/login/)

- Clicca sul contatore desiderato

- Clicca sulle rotelle dentate a destra

- Clicca su Aggiungi azione basata su eventi (Ereignisaktion hinzufügen)


### Definire un'azione basata su eventi

Ora è possibile definire le azioni basate su eventi (fino a 16). A tale scopo occorre effettuare tre impostazioni:

- Evento -> Non appena si verifica, l'azione viene attivata

- Azione -> Definisce cosa deve essere fatto quando si verifica l'evento

- Nome -> Il nome dell'azione basata su eventi


## Eventi

L'evento qui definito attiva un'azione. Sono disponibili i seguenti eventi:

### Potenza minore / maggiore di

Esempio: Evento -> Se la potenza è inferiore a 10 Watt, spegnere

Osservazioni:

- L'azione (in questo esempio "Spegnere la corrente") viene eseguita solo se si è verificato l'evento corrispondente, cioè un cambiamento della potenza da più di 10 Watt a meno di 10 Watt

- Se la corrente viene riaccesa manualmente, rimane accesa finché l'evento non si verifica di nuovo.

- In caso di potenze fluttuanti, è possibile che questa condizione si verifichi più volte di seguito. Ciò può causare effetti indesiderati, per questo motivo si lavora con una cosiddetta isteresi. Ciò significa che la soglia (in questo esempio 10 Watt) viene aumentata di 3 Watt alla seconda attivazione.


### Ora

È possibile definire un momento a partire dal quale l'azione deve essere eseguita. Se determinati giorni della settimana devono essere esclusi da questa regola, occorre contrassegnarli (in rosso)

Esempio: Evento -> Ogni giorno alle 9 del mattino la corrente viene spenta, ma non nel fine settimana.

Osservazioni:

- L'azione (in questo esempio "Spegnere la corrente") viene eseguita solo se si è verificato l'evento corrispondente, cioè un cambiamento dell'ora dalle 08:59 alle 09:00.

- Se la corrente viene riaccesa manualmente, rimane accesa finché l'evento non si verifica di nuovo.


## Azioni

Sono disponibili numerose azioni. Naturalmente possono essere combinate con ciascuno degli eventi menzionati.

### Accendere la corrente / Spegnere la corrente

Il dispositivo smart-me si accende o si spegne da solo. 

Esempio: Ogni giorno alle 9 del mattino la corrente viene spenta, ma non nel fine settimana.

### Commutare la corrente (on/off)

Il dispositivo smart-me può accendersi o spegnersi da solo. A seconda dello stato in cui si trova il dispositivo, il dispositivo smart-me commuta da acceso a spento o da spento ad acceso. (Vale solo per il 32A Meter)

### E-mail di allarme

Il dispositivo smart-me può informarti tramite e-mail non appena si è verificato l'evento. Ciò funziona solo se il dispositivo smart-me dispone di una connessione a Internet.

Esempio: Non appena la potenza prelevata è inferiore a 10 Watt, viene inviata un'e-mail.

### Accendere la corrente su un altro dispositivo / Spegnere la corrente su un altro dispositivo

Il dispositivo smart-me non può solo accendersi o spegnersi da solo, ma può anche comandare altri dispositivi smart-me (funziona solo se entrambi i dispositivi smart-me dispongono di una connessione WLAN/Internet). Tieni inoltre presente che solo il 32A Meter può commutare)

### Commutare la corrente (on/off) su un altro dispositivo

Il dispositivo smart-me non può solo accendersi o spegnersi da solo, ma può anche comandare altri dispositivi smart-me (funziona solo se entrambi i dispositivi smart-me dispongono di una connessione WLAN/Internet). Tieni inoltre presente che solo il 32A Meter può commutare)
