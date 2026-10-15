---
title: 'Bexio'
slug: '/drittsysteme/bexio'
description: 'Per poter creare i conteggi dei costi energetici ti serve un abbonamento smart-me Professional.'
sidebar_label: 'Bexio'
---
### Requisito

Per poter creare i conteggi dei costi energetici ti serve un abbonamento smart-me Professional. 

smart-me Billing offre la possibilità di importare automaticamente le fatture in Bexio. Bexio è un software gestionale per le aziende. Maggiori informazioni: [https://www.bexio.com/](https://www.bexio.com/)

Funzioni

- Gestione clienti in Bexio: smart-me Billing riprende l'anagrafica clienti da Bexio

- Esportazione delle fatture: i conteggi dei costi energetici possono essere creati, inviati e gestiti in Bexio. 

- Riconciliazione automatica dei pagamenti / sollecito automatico


![Bexio – Figura 1](/img/drittsysteme-bexio/01.jpg)

### 1\. Attivare Bexio

1.  Apri smart-me Billing

2.  Seleziona "Configurazione (Konfiguration)" e l'immobile

3.  In "Esportazione a fornitori terzi (Export zu Drittanbieter)" seleziona Bexio

4.  Clicca su Login ed effettua l'accesso a Bexio

5.  Clicca su salva (speichern)

6.  Attendi finché compare Login ok (verde) (a volte ci vogliono 1-2 minuti)




- Titolo della fattura (Rechnungstitel): il titolo della fattura in Bexio

- Lingua della fattura (Sprache der Rechnung): la lingua da utilizzare in Bexio per la fattura.

- Conto per le registrazioni Bexio (Konto für Bexio-Buchungen): il conto Bexio a cui devono essere assegnate le posizioni.


![Bexio – Figura 2](/img/drittsysteme-bexio/02.jpg)

### 2\. Assegnare gli inquilini

<div className="row">
<div className="col col--4">

1.  Seleziona "Configurazione (Konfiguration)" e un appartamento

2.  Sotto Indirizzo di fatturazione (Rechnungsadresse) clicca su "Aggiungi (Hinzufügen)"

3.  Seleziona il contatto da Bexio

</div>
<div className="col col--8 text--center">

![Bexio – Figura 3](/img/drittsysteme-bexio/03.jpg)

</div>
</div>

### 3\. Esportare le fatture in Bexio

<div className="row">
<div className="col col--4">

Crea le fatture su un immobile

\-> Le fatture vengono esportate automaticamente in Bexio.

smart-me Billing riprende il numero di fattura da Bexio (esempio: RE-1570 corrisponde in smart-me alla fattura con il numero 1570)

</div>
<div className="col col--8 text--center">

![Bexio – Figura 4](/img/drittsysteme-bexio/04.jpg)

</div>
</div>

### 4\. Fatture in Bexio

Le fatture sono ora state create in Bexio e possono essere ulteriormente elaborate.

1.  Accedi a Bexio

2.  Apri le fatture


![Bexio – Figura 5](/img/drittsysteme-bexio/05.jpg)

Esempio di una fattura dell'elettricità esportata

![Bexio – Figura 6](/img/drittsysteme-bexio/06.jpg)

Esempio di una fattura VEWA esportata

![Bexio – Figura 7](/img/drittsysteme-bexio/07.png)

### 5\. Configurazione

<div className="row">
<div className="col col--5">

In Impostazioni 

Tutte le impostazioni

Contabilità

Verifica che il riquadro Aliquote fiscali sia visibile.

</div>
<div className="col col--7 text--center">

![Bexio – Figura 8](/img/drittsysteme-bexio/08.png)

</div>
</div>

<div className="row">
<div className="col col--5">

Impostazioni smart-me

Aliquote fiscali 0%

Inclusa.

</div>
<div className="col col--7 text--center">

![Bexio – Figura 9](/img/drittsysteme-bexio/09.png)

</div>
</div>

### 5\. Gestione degli errori

account\_id \[Diese Eingabe ist nicht korrekt.\]
Il conto per le registrazioni Bexio non è valido. Occorre utilizzare un conto Bexio sul quale possono essere registrate anche fatture. 

tax\_id \[Diese Eingabe ist nicht korrekt.\]
Per una posizione della fattura non è stata trovata un'aliquota fiscale valida.
\- Verifica che le aliquote fiscali per tutte le aliquote utilizzate (0%, 8.1%, 2.6%,...) siano presenti e valide in Bexio
\- Assicurati che tutte le aliquote IVA rilevanti siano assegnate al modulo 303.
In caso contrario, creane di aggiuntive per ogni imposta.
\--> Panoramica impostazioni --> Contabilità --> Aliquote fiscali --> Modifica IVA

Nessun indirizzo Bexio trovato per l'utente (Keine Bexio adresse für Benutzer gefunden)
All'inquilino non è stato assegnato alcun utente Bexio oppure ne è stato assegnato uno non valido. Assegna un utente all'inquilino (vedi sopra: 2. Assegnare gli inquilini)

&#123;"error\_code":422,"message":"The form could not be saved due to the following errors:","errors":\["positions: 0 \[account\_id \[Diese Eingabe ist nicht korrekt.\]\]"\]&#125;



Soluzione 1:

In smart-me, nelle impostazioni, un'imposta è già inclusa, ad es. 8.1%. 

In Bexio, in Impostazioni (in alto a destra) / Tutte le impostazioni / Contabilità / Impostazioni di base IVA non è configurato nulla.

Possibilità: indicare 0% in smart-me.

Soluzione 2:

Nell'esportazione in smart-me selezionare 3400 (Conto per le registrazioni Bexio).

I privati possono creare un conto 3680 Altri ricavi

![Bexio – Figura 10](/img/drittsysteme-bexio/10.png)

No tax in bexio found for 0%

Aggiungere l'IVA.



![Bexio – Figura 11](/img/drittsysteme-bexio/11.png)

Bexio AG

Alte Jonastrasse 24

CH-8640 Rapperswil

+41 71 552 00 60

[support@bexio.com](mailto:support@bexio.com) 

www.bexio.com
