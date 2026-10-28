---
title: 'Allarmi'
slug: '/konfiguration/wenndann-aktionen/alarme'
description: 'È possibile configurare degli allarmi per ricevere un''e-mail quando un contatore non è più connesso al nostro cloud.'
sidebar_label: 'Allarmi'
naechste_schritte: [konfiguration/billing/index, konfiguration/billing-deutschland/index]
vorheriger_schritt: konfiguration/ordnerkonfiguration/index
---
<Menueweg>Azioni "se-quando</Menueweg>

È possibile configurare degli allarmi per ricevere un'e-mail quando un contatore non è più connesso al nostro cloud.

## Requisito

Per utilizzare questa funzione è necessario un abbonamento smart-me Limited o Professional.

### Configurazione degli allarmi

### Evento «se» / Nessuna connessione

Questo tema è approfondito nella pagina [Azioni se/allora](/konfiguration/wenndann-aktionen).

È possibile impostare un evento «se» che si attiva quando un contatore non è più connesso al cloud. Occorre effettuare le seguenti impostazioni:

- Se si seleziona una cartella, vengono monitorati tutti i contatori che ne fanno parte. Se si selezionano più cartelle, scegliere l'opzione O (ODER).

- Se si seleziona un contatore, viene monitorato solo quel contatore.

Definizione del tempo di interruzione: 

- In generale: i 1440 minuti (1 giorno) evitano un falso allarme in caso di breve interruzione di Internet per i contatori smart-me.

- Pico: per gli allarmi di controllo dei Pico connessi a un backend, può essere opportuno ridurre questo tempo, ad es. a 15 o 60 minuti. In questo modo si evita che una stazione rimanga fuori servizio troppo a lungo.

![Allarmi – Figura 1](/img/konfiguration-wenndann-aktionen-alarme/01.png)

### Azione «allora» / Allarme

<div className="row">
<div className="col col--6">

Quando si verificano gli eventi «se», viene inviata un'e-mail. Occorre effettuare le seguenti impostazioni:

- Nome dell'allarme

- Oggetto (Subjekt): oggetto delle e-mail di allarme

- Messaggio (Nachricht): testo contenuto nell'e-mail di allarme

Nota: consigliamo di completare l'azione «allora» solo con l'indirizzo e-mail e di lasciare invariato il resto. Se gestisce più immobili, consigliamo di indicare nell'oggetto il nome dell'account, in modo da sapere sempre da quale account proviene l'allarme.

Se l'allarme deve essere inviato a più indirizzi e-mail, occorre creare un'azione «allora» per ciascun indirizzo.

</div>
<div className="col col--6 bild--mitte">

![Allarmi – Figura 2](/img/konfiguration-wenndann-aktionen-alarme/02.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Con quale frequenza viene inviata un'e-mail di allarme?

L'e-mail viene inviata una sola volta, quando lo stato peggiora. Se altri contatori smettono di funzionare prima che il primo torni online, non viene inviata nessun'altra e-mail. 

Dopo aver risolto il problema, consigliamo di verificare nelle azioni se/allora che alla voce "Ultima attivazione" ("Zuletzt ausgelöst") sia indicato "mai" ("nie"). Se vi è indicato un orario, ci sono ancora contatori offline.

Se desidera ricevere più di un'e-mail, deve configurare due allarmi, ad es. il primo con 1440 minuti e il secondo con 7200 minuti. In questo modo, ad esempio, un'e-mail passata inosservata può essere inviata una seconda volta.

</div>
<div className="col col--4 bild--mitte">

![Allarmi – Figura 3](/img/konfiguration-wenndann-aktionen-alarme/03.png)

</div>
</div>

Ora l'intera infrastruttura è pronta per impostare il conteggio.
