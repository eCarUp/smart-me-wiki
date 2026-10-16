---
title: 'Allarmi'
slug: '/konfiguration/wenndann-aktionen/alarme'
description: 'Gli allarmi possono essere configurati per ricevere un''e-mail quando un contatore non è più connesso al nostro cloud.'
sidebar_label: 'Allarmi'
naechste_schritte: [konfiguration/billing/index]
---
Gli allarmi possono essere configurati per ricevere un'e-mail quando un contatore non è più connesso al nostro cloud.

## Requisito

Per utilizzare questa funzione hai bisogno di un abbonamento smart-me Limited o Professional.

### Configurazione degli allarmi

### Evento «se» / Nessuna connessione

Nella pagina [Azioni se/allora](/konfiguration/wenndann-aktionen) trovi una spiegazione più approfondita.

Puoi impostare un evento «se» che si attiva quando un contatore non è più connesso al cloud. Devi effettuare le seguenti impostazioni:

- Se selezioni una cartella, vengono monitorati tutti i contatori che ne fanno parte. Se selezioni più cartelle, scegli un OPPURE (ODER).

- Se selezioni un contatore, viene monitorato solo quel contatore.

Definizione del tempo di interruzione: 

- In generale: i 1440 minuti (1 giorno) evitano un falso allarme in caso di breve interruzione di Internet per i contatori smart-me.

- Pico: per gli allarmi che servono a controllare i Pico collegati a un backend, può essere utile ridurre questo tempo, ad es. a 15 o 60 minuti. In questo modo si evita che una stazione resti fuori servizio troppo a lungo.

![Allarmi – Figura 1](/img/konfiguration-wenndann-aktionen-alarme/01.png)

### Azione «allora» / Allarme

<div className="row">
<div className="col col--6">

Quando si verificano gli eventi «se», viene inviata un'e-mail. Devi effettuare le seguenti impostazioni:

- Nome dell'allarme

- Oggetto (Subjekt): oggetto delle e-mail di allarme

- Messaggio (Nachricht): testo contenuto nell'e-mail di allarme

Nota: ti consigliamo di completare l'azione «allora» solo con l'indirizzo e-mail e di lasciare invariato il resto. Se hai più immobili, ti consigliamo di inserire nell'oggetto il nome dell'account, così saprai sempre da quale account proviene l'allarme.

Se l'allarme deve essere inviato a più indirizzi e-mail, occorre creare un'azione «allora» per ogni singolo indirizzo.

</div>
<div className="col col--6 text--center">

![Allarmi – Figura 2](/img/konfiguration-wenndann-aktionen-alarme/02.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Con quale frequenza viene inviata un'e-mail di allarme?

L'e-mail viene inviata una sola volta, quando lo stato peggiora. Se altri contatori vanno fuori servizio prima che il primo torni online, non viene inviata nessun'altra e-mail. 

Dopo aver risolto il problema, ti consigliamo di verificare nelle azioni se/allora che «Ultima attivazione» ("Zuletzt ausgelöst") indichi «mai» ("nie"). Se è indicato un orario, ci sono ancora contatori offline.

Se desideri ricevere più di un'e-mail, devi configurare due allarmi. Il primo ad es. con 1440 minuti e il secondo con 7200 minuti. In questo modo, ad es., un'e-mail passata inosservata può essere inviata una seconda volta.

</div>
<div className="col col--4 text--center">

![Allarmi – Figura 3](/img/konfiguration-wenndann-aktionen-alarme/03.png)

</div>
</div>

Ora l'intera infrastruttura è pronta per costruirvi sopra il conteggio.

### Passo successivo

[Continua con la configurazione del conteggio](/konfiguration/billing)
