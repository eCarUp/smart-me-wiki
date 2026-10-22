---
title: 'Allarmi'
slug: '/konfiguration/wenndann-aktionen/alarme'
description: 'È possibile configurare degli allarmi per ricevere un''e-mail quando un contatore non è più connesso al nostro cloud.'
sidebar_label: 'Allarmi'
naechste_schritte: [konfiguration/billing/index, konfiguration/billing-deutschland/index]
vorheriger_schritt: konfiguration/ordnerkonfiguration/index
---
È possibile configurare degli allarmi per ricevere un'e-mail quando un contatore non è più connesso al nostro cloud.

## Requisiti

Per utilizzare questa funzione ti serve un abbonamento smart-me Limited o Professional.

### Configurazione degli allarmi

### Evento se (Wenn-Ereignis) / Nessuna connessione (Keine Verbindung)

Questo tema è trattato in modo approfondito in [Azioni se/allora](/konfiguration/wenndann-aktionen).

Puoi impostare un evento se che si attiva quando un contatore non è più connesso al cloud. Devi configurare le seguenti impostazioni:

- Se selezioni una cartella, vengono monitorati tutti i contatori al suo interno. Se selezioni più cartelle, scegli OPPURE (ODER).

- Se selezioni un contatore, viene monitorato solo quel contatore.

Definizione del tempo di interruzione: 

- In generale: i 1440 minuti (1 giorno) evitano un falso allarme in caso di una breve interruzione di Internet per i contatori smart-me.

- Pico: per gli allarmi che controllano i Pico collegati a un backend, può essere utile ridurre questo tempo, ad esempio a 15 o 60 minuti. In questo modo si evita che una stazione resti fuori servizio troppo a lungo.

![Allarmi – Figura 1](/img/konfiguration-wenndann-aktionen-alarme/01.png)

### Azione allora (Dann-Aktion) / Allarme (Alarm)

<div className="row">
<div className="col col--6">

Quando si verificano gli eventi se, viene inviata un'e-mail. Devi configurare le seguenti impostazioni:

- Nome dell'allarme (Name des Alarms)

- Oggetto (Subjekt): oggetto delle e-mail di allarme

- Messaggio (Nachricht): testo contenuto nell'e-mail di allarme

Nota: consigliamo di completare l'azione allora solo con l'indirizzo e-mail e di lasciare invariato il resto. Se gestisci più immobili, consigliamo di inserire nell'oggetto il nome dell'account, così saprai sempre da quale account proviene l'allarme.

Se l'allarme deve essere inviato a più indirizzi e-mail, occorre creare un'azione allora per ogni singolo indirizzo.

</div>
<div className="col col--6 text--center">

![Allarmi – Figura 2](/img/konfiguration-wenndann-aktionen-alarme/02.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Con quale frequenza viene inviata un'e-mail di allerta?

L'e-mail viene inviata una sola volta, quando lo stato peggiora. Se altri contatori smettono di funzionare prima che il primo torni online, non viene inviata nessun'altra e-mail. 

Dopo aver risolto il problema, consigliamo di verificare nelle azioni se/allora che "Ultima attivazione" ("Zuletzt ausgelöst") indichi "mai" ("nie"). Se lì compare una data e un'ora, ci sono ancora contatori offline.

Se desideri ricevere più di un'e-mail, devi configurare due allarmi. Il primo, ad esempio, con 1440 minuti e il secondo con 7200 minuti. In questo modo, ad esempio, un'e-mail passata inosservata può essere inviata una seconda volta.

</div>
<div className="col col--4 text--center">

![Allarmi – Figura 3](/img/konfiguration-wenndann-aktionen-alarme/03.png)

</div>
</div>

Ora l'intera infrastruttura è pronta per impostare il conteggio.
