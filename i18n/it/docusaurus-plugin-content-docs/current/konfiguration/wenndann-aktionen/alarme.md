---
title: 'Allarmi'
slug: '/konfiguration/wenndann-aktionen/alarme'
description: 'Gli allarmi possono essere configurati per ricevere un''e-mail quando un contatore non è più collegato al nostro cloud.'
sidebar_label: 'Allarmi'
---
Gli allarmi possono essere configurati per ricevere un'e-mail quando un contatore non è più collegato al nostro cloud.

## Requisito

Per utilizzare questa funzione è necessario un abbonamento smart-me Limited o Professional.

### Configurazione degli allarmi

### Evento «se» / Nessuna connessione

Nella sezione [Azioni se/allora](/konfiguration/wenndann-aktionen) trattiamo l'argomento in modo approfondito.

È possibile impostare un evento «se» che si attiva quando un contatore non ha più connessione al cloud. Occorre effettuare le seguenti impostazioni:

- Se si seleziona una cartella, vengono monitorati tutti i contatori a essa associati. Se si selezionano più cartelle, scegliere un OR.

- Se si seleziona un contatore, viene monitorato solo quel contatore.


Definizione del tempo di interruzione: 

- In generale: i 1440 minuti (1 giorno) impediscono un falso allarme in caso di una breve interruzione di internet per i contatori smart-me.

- Pico: per l'allarme di controllo dei Pico collegati a un backend, può essere utile ridurre questo tempo, ad es. a 15 o 60 minuti. In questo modo si evita che una stazione resti fuori servizio troppo a lungo.


![Allarmi – Figura 1](/img/konfiguration-wenndann-aktionen-alarme/01.png)

### Azione «allora» / Allarme

Quando si verificano gli eventi «se», viene inviata un'e-mail. Occorre effettuare le seguenti impostazioni:

- Nome dell'allarme

- Oggetto (Subjekt): oggetto delle e-mail di allarme

- Messaggio (Nachricht): testo contenuto nell'e-mail di allarme


Nota: consigliamo di completare l'azione «allora» solo con l'e-mail e di lasciare invariato il resto. Se si dispone di più immobili, consigliamo di indicare nell'oggetto il nome dell'account, in modo da sapere sempre da quale account proviene l'allarme.

Se l'allarme deve essere inviato a più indirizzi e-mail, occorre creare un'azione «allora» per ogni singola e-mail.

![Allarmi – Figura 2](/img/konfiguration-wenndann-aktionen-alarme/02.png)

Con quale frequenza viene inviata un'e-mail di allerta?

L'e-mail viene inviata una sola volta, quando lo stato peggiora. Se altri contatori si disconnettono prima che il primo torni online, non viene inviata alcuna ulteriore e-mail. 

Dopo aver risolto il problema, consigliamo di verificare nelle azioni se/allora che «Attivato l'ultima volta» (Zuletzt ausgelöst) indichi «mai» (nie). Se è indicato un momento, ci sono ancora contatori offline.

Se si desidera ricevere più di un'e-mail, occorre configurare due allarmi. Il primo ad es. con 1440 minuti e il secondo con 7200 minuti. In questo modo, ad esempio, un'e-mail passata inosservata può essere inviata una seconda volta.

![Allarmi – Figura 3](/img/konfiguration-wenndann-aktionen-alarme/03.png)

Ora l'intera infrastruttura è pronta per costruirvi sopra il conteggio.

### Passo successivo

[Continua con la configurazione del conteggio](/konfiguration/billing)
