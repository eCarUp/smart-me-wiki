---
title: 'Azioni basate su eventi'
slug: '/konfiguration/wenndann-aktionen/ereignisaktionen'
description: 'I comandi automatici possono essere creati per ogni dispositivo nella piattaforma smart-me.'
sidebar_label: 'Azioni basate su eventi'
---
I comandi automatici possono essere creati per ogni dispositivo nella piattaforma smart-me. Esistono due possibilità per definire tali azioni. Si creano azioni basate su eventi oppure [azioni se/allora](/konfiguration/wenndann-aktionen). In questo articolo vengono spiegate le azioni basate su eventi.

## Azioni basate su eventi, solo per contatori monofase e contatori trifase Telstar

Le azioni basate su eventi vengono salvate sul dispositivo stesso, per questo funzionano anche senza connessione a Internet, ad esempio quando il router WLAN è spento. A tale scopo devono però essere definite azioni che non necessitano di una connessione a Internet. L'invio di un'e-mail naturalmente non funziona senza Internet. Sui dispositivi possono essere salvate fino a 16 azioni basate su eventi, che possono essere create e modificate nell'app o nel portale web.

Possibili attivatori:

- -   Potenza maggiore / minore di xx

    - Ora

    - Corrente minore/maggiore (su una fase) (solo con il [contatore trifase Telstar](/))

    - Input digitale (On/ Off) (solo con il [contatore trifase Telstar](/))




Possibili azioni:

- -   [E-mail di allarme](/konfiguration/wenndann-aktionen/alarme)

    - Attivare/disattivare la corrente (solo con il [contatore trifase Telstar](/))

    - Commutare la corrente on/off (non più supportato)

    - Attivare/disattivare la corrente su un altro dispositivo (non più supportato)

    - Commutare la corrente on/off su un altro dispositivo (non più supportato)


## Creare un'azione basata su eventi

Le azioni basate su eventi possono essere create nell'app o nel portale web.

### App

- Accedi al tuo account utente smart-me

- Seleziona un contatore

- Clicca ora sulla rotellina in alto a destra

- Clicca su "Azioni basate su eventi" (Ereignisaktionen) - "Aggiungi azione basata su eventi" (Ereignisaktion hinzufügen)


### Sito web

- Accedi al [login web](https://web.smart-me.com/login/)

- Clicca sul contatore desiderato

- Clicca a destra sulle rotelline

- Clicca su Aggiungi azione basata su eventi (Ereignisaktion hinzufügen)


### Definire l'azione basata su eventi

Ora è possibile definire le azioni basate su eventi (fino a 16). A tale scopo devono essere effettuate tre impostazioni:

- Evento -> Non appena si verifica, l'azione viene attivata

- Azione -> Definisce cosa deve essere fatto quando si verifica l'evento

- Nome -> Il nome dell'azione basata su eventi


## Eventi

L'evento qui definito attiva un'azione. Sono disponibili i seguenti eventi:

### Potenza minore / maggiore di

Esempio: Evento -> Se la potenza è inferiore a 10 Watt, disattivare

Osservazioni:

- L'azione (in questo esempio "disattivare la corrente") viene eseguita solo se si è verificato il relativo evento, ossia un cambiamento di potenza da maggiore di 10 Watt a minore di 10 Watt

- Se la corrente viene riattivata manualmente, rimane attivata finché l'evento non si verifica nuovamente.

- In caso di potenze oscillanti sarebbe possibile che questa condizione si verifichi più volte di seguito. Ciò può portare a effetti indesiderati, per questo si lavora con una cosiddetta isteresi. Questo significa che alla seconda attivazione il valore di soglia (in questo esempio 10 Watt) viene aumentato di 3 Watt.


### Ora

È possibile definire un momento a partire dal quale l'azione deve essere eseguita. Se determinati giorni della settimana devono essere esclusi da questa regola, devono essere contrassegnati (rosso)

Esempio: Evento -> Ogni mattina alle 9 la corrente viene disattivata, ma non nel fine settimana.

Osservazioni:

- L'azione (in questo esempio "disattivare la corrente") viene eseguita solo se si è verificato il relativo evento, ossia un cambiamento dell'ora dalle 08:59 alle 09:00.

- Se la corrente viene riattivata manualmente, rimane attivata finché l'evento non si verifica nuovamente.


## Azioni

Sono disponibili diverse azioni. Queste possono naturalmente essere combinate con ognuno degli eventi menzionati.

### Attivare la corrente / Disattivare la corrente

Il dispositivo smart-me si attiva o si disattiva da solo.

Esempio: Ogni mattina alle 9 la corrente viene disattivata, ma non nel fine settimana.

### Commutare la corrente (on/off)

Il dispositivo smart-me può attivarsi o disattivarsi da solo. A seconda dello stato in cui si trova il dispositivo, il dispositivo smart-me commuta da on a off o da off a on. (Vale solo per il 32A Meter)

### E-mail di allarme

Il dispositivo smart-me può informarti tramite un'e-mail non appena si è verificato l'evento. Questo funziona solo se il dispositivo smart-me dispone di una connessione a Internet.

Esempio: Non appena la potenza prelevata è inferiore a 10 Watt, viene inviata un'e-mail.

### Attivare la corrente su un altro dispositivo / Disattivare la corrente su un altro dispositivo

Il dispositivo smart-me non può solo attivarsi o disattivarsi da solo, ma può anche comandare altri dispositivi smart-me (funziona solo se entrambi i dispositivi smart-me dispongono di una connessione WLAN/Internet). Tieni presente inoltre che solo il 32A Meter può commutare)

### Commutare la corrente (on/off) su un altro dispositivo

Il dispositivo smart-me non può solo attivarsi o disattivarsi da solo, ma può anche comandare altri dispositivi smart-me (funziona solo se entrambi i dispositivi smart-me dispongono di una connessione WLAN/Internet). Tieni presente inoltre che solo il 32A Meter può commutare)
