---
title: 'Allarmi'
slug: '/konfiguration/wenndann-aktionen/alarme'
description: 'Gli allarmi possono essere configurati per ricevere un''e-mail quando un contatore non è più connesso al nostro cloud.'
sidebar_label: 'Allarmi'
naechste_schritte: [konfiguration/billing/index, konfiguration/billing-deutschland/index]
vorheriger_schritt: konfiguration/ordnerkonfiguration/index
---
<Menueweg>Azioni "se-quando</Menueweg>

Gli allarmi possono essere configurati per ricevere un'e-mail quando un contatore non è più connesso al nostro cloud.

## Requisito

Per utilizzare questa funzione è necessario un abbonamento smart-me Limited o Professional.

### Configurazione degli allarmi

### Evento Se / Nessuna connessione (Wenn-Ereignis / Keine Verbindung)

Nella pagina [Azioni se/allora](/konfiguration/wenndann-aktionen) approfondiamo questo argomento.

È possibile impostare un evento Se (Wenn-Ereignis) che si attiva quando un contatore non è più connesso al cloud. Devono essere effettuate le seguenti impostazioni:

- Se si seleziona una cartella, vengono monitorati tutti i contatori ad essa associati. Se si selezionano più cartelle, scegliere OPPURE (ODER).

- Se si seleziona un contatore, viene monitorato solo questo contatore.

Definizione del tempo di interruzione: 

- In generale: i 1440 minuti (1 giorno) evitano un falso allarme in caso di breve interruzione di Internet per i contatori smart-me.

- Pico: per gli allarmi di controllo dei Pico collegati a un backend, può essere utile ridurre questo tempo, ad esempio a 15 o 60 minuti. In questo modo si evita che una stazione resti fuori servizio troppo a lungo.

![Allarmi – Figura 1](/img/konfiguration-wenndann-aktionen-alarme/01.png)

### Azione Allora / Allarme (Dann-Aktion / Alarm)

<div className="row">
<div className="col col--6">

Quando si verificano gli eventi Se, viene inviata un'e-mail. Devono essere effettuate le seguenti impostazioni:

- Nome dell'allarme (Name des Alarms)

- Oggetto (Subjekt): oggetto delle e-mail di allarme

- Messaggio (Nachricht): testo contenuto nell'e-mail di allarme

Nota: consigliamo di completare l'azione Allora solo con l'indirizzo e-mail e di lasciare invariato il resto. Se gestisce più immobili, consigliamo di inserire nell'oggetto il nome dell'account, in modo da sapere sempre da quale account proviene l'allarme.

Se l'allarme deve essere inviato a più indirizzi e-mail, è necessario creare un'azione Allora per ogni singolo indirizzo.

</div>
<div className="col col--6 text--center">

![Allarmi – Figura 2](/img/konfiguration-wenndann-aktionen-alarme/02.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Con quale frequenza viene inviata un'e-mail di avviso?

L'e-mail viene inviata una sola volta, quando lo stato peggiora. Se altri contatori si disconnettono prima che il primo torni online, non viene inviata alcuna ulteriore e-mail. 

Dopo aver risolto il problema, consigliamo di verificare nelle azioni se/allora che "Ultima attivazione" ("Zuletzt ausgelöst") riporti "mai" ("nie"). Se è indicato un orario, ci sono ancora contatori offline.

Se desidera ricevere più di un'e-mail, deve configurare due allarmi. Il primo, ad esempio, con 1440 minuti e il secondo con 7200 minuti. In questo modo, ad esempio, un'e-mail passata inosservata può essere inviata una seconda volta.

</div>
<div className="col col--4 text--center">

![Allarmi – Figura 3](/img/konfiguration-wenndann-aktionen-alarme/03.png)

</div>
</div>

Ora l'intera infrastruttura è pronta per impostare il conteggio.
