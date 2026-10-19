---
title: 'Allarmi'
slug: '/konfiguration/wenndann-aktionen/alarme'
description: 'È possibile configurare degli allarmi per ricevere un''e-mail quando un contatore non ha più alcuna connessione con il nostro cloud.'
sidebar_label: 'Allarmi'
naechste_schritte: [konfiguration/billing/index]
vorheriger_schritt: konfiguration/ordnerkonfiguration/index
---
È possibile configurare degli allarmi per ricevere un'e-mail quando un contatore non ha più alcuna connessione con il nostro cloud.

## Requisito

Per utilizzare questa funzione occorre un abbonamento smart-me Limited o Professional.

### Configurazione degli allarmi

### Evento se (Wenn-Ereignis) / Nessuna connessione (Keine Verbindung)

Approfondiamo questo argomento alla pagina [Azioni se/allora](/konfiguration/wenndann-aktionen).

È possibile impostare un evento se che si attiva quando un contatore non ha più alcuna connessione con il cloud. Occorre effettuare le seguenti impostazioni:

- Se si seleziona una cartella, vengono monitorati tutti i contatori ad essa associati. Se seleziona più cartelle, scelga OPPURE (ODER).

- Se si seleziona un contatore, viene monitorato solo quel contatore.

Definizione del tempo di interruzione: 

- In generale: i 1440 minuti (1 giorno) evitano un falso allarme in caso di una breve interruzione di Internet per i contatori smart-me.

- Pico: per gli allarmi di verifica dei Pico collegati a un backend può essere utile ridurre questo tempo, ad es. a 15 o 60 minuti. In questo modo si evita che una stazione resti fuori servizio troppo a lungo.

![Allarmi – Figura 1](/img/konfiguration-wenndann-aktionen-alarme/01.png)

### Azione allora (Dann-Aktion) / Allarme (Alarm)

<div className="row">
<div className="col col--6">

Quando si verificano gli eventi se, viene inviata un'e-mail. Occorre effettuare le seguenti impostazioni:

- Nome dell'allarme (Name des Alarms)

- Oggetto (Subjekt): oggetto delle e-mail di allarme

- Messaggio (Nachricht): testo contenuto nell'e-mail di allarme

Nota: consigliamo di completare l'azione allora soltanto con l'indirizzo e-mail e di lasciare invariato il resto. Se ha più immobili, consigliamo di indicare nell'oggetto il nome dell'account, in modo da sapere sempre da quale account proviene l'allarme.

Se l'allarme deve essere inviato a più indirizzi e-mail, occorre creare un'azione allora per ogni singolo indirizzo.

</div>
<div className="col col--6 text--center">

![Allarmi – Figura 2](/img/konfiguration-wenndann-aktionen-alarme/02.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Con quale frequenza viene inviata un'e-mail di avviso?

L'e-mail viene inviata una sola volta, quando lo stato peggiora. Se altri contatori smettono di funzionare prima che il primo torni online, non viene inviata alcuna ulteriore e-mail. 

Dopo aver risolto il problema, consigliamo di verificare nelle azioni se/allora che "Ultima attivazione" ("Zuletzt ausgelöst") riporti "mai" ("nie"). Se è indicata una data e un'ora, ci sono ancora contatori offline.

Se desidera ricevere più di un'e-mail, deve configurare due allarmi. Il primo ad es. con 1440 minuti e il secondo con 7200 minuti. In questo modo, ad es., un'e-mail passata inosservata può essere inviata una seconda volta.

</div>
<div className="col col--4 text--center">

![Allarmi – Figura 3](/img/konfiguration-wenndann-aktionen-alarme/03.png)

</div>
</div>

Ora l'intera infrastruttura è pronta per impostarvi il conteggio.
