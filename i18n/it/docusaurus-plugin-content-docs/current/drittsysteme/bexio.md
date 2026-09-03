---
title: 'Bexio'
slug: '/drittsysteme/bexio'
description: 'Per creare conteggi dei costi energetici è necessario un abbonamento smart-me Professional.'
sidebar_label: 'Bexio'
---
### Requisito

Per creare conteggi dei costi energetici è necessario un abbonamento smart-me Professional.

smart-me Billing offre la possibilità di importare automaticamente le fatture in Bexio. Bexio è un software gestionale. Maggiori informazioni: [https://www.bexio.com/](https://www.bexio.com/)

Funzioni

- Gestione dei clienti in Bexio: smart-me Billing riprende l'anagrafica clienti da Bexio

- Esportazione delle fatture: i conteggi dei costi energetici possono essere creati, inviati e gestiti in Bexio.

- Riconciliazione automatica dei pagamenti / sollecito automatico


![Bexio – Figura 1](/img/drittsysteme-bexio/01.jpg)

### 1\. Attivare Bexio

1.  Apri smart-me Billing

2.  Seleziona "Configurazione" (Konfiguration) e l'immobile

3.  In "Esportazione a fornitori terzi" (Export zu Drittanbieter) seleziona Bexio

4.  Clicca su Login e accedi a Bexio

5.  Clicca su salva

6.  Attendi che compaia Login ok (verde) (a volte richiede 1-2 minuti)




- Titolo della fattura: il titolo della fattura in Bexio

- Lingua della fattura: la lingua che deve essere utilizzata in Bexio per la fattura.

- Conto per le registrazioni Bexio: il conto Bexio al quale devono essere assegnate le posizioni.


![Bexio – Figura 2](/img/drittsysteme-bexio/02.jpg)

### 2\. Assegnare gli inquilini

1.  Seleziona "Configurazione" (Konfiguration) e un appartamento

2.  Sotto Indirizzo di fatturazione clicca su "Aggiungi" (Hinzufügen)

3.  Seleziona il contatto da Bexio


![Bexio – Figura 3](/img/drittsysteme-bexio/03.jpg)

### 3\. Esportare la fattura in Bexio

Crea le fatture su un immobile

\-> Le fatture vengono esportate automaticamente in Bexio.

smart-me Billing riprende il numero di fattura da Bexio (esempio: RE-1570 in smart-me è la fattura con il numero 1570)

![Bexio – Figura 4](/img/drittsysteme-bexio/04.jpg)

### 4\. Fatture in Bexio

Le fatture sono ora state create in Bexio e possono essere elaborate ulteriormente.

1.  Accedi a Bexio

2.  Apri le fatture


![Bexio – Figura 5](/img/drittsysteme-bexio/05.jpg)

Esempio di una fattura dell'elettricità esportata

![Bexio – Figura 6](/img/drittsysteme-bexio/06.jpg)

Esempio di una fattura VEWA esportata

![Bexio – Figura 7](/img/drittsysteme-bexio/07.png)

### 5\. Configurazione

Sotto Impostazioni (Einstellungen)

Tutte le impostazioni (Alle Einstellungen)

Contabilità (Buchhaltung)

Verifica se il riquadro Aliquote d'imposta (Steuersätze) è visibile.

![Bexio – Figura 8](/img/drittsysteme-bexio/08.png)

Impostazioni smart-me

Aliquote d'imposta 0%

Inclusa.

![Bexio – Figura 9](/img/drittsysteme-bexio/09.png)

### 5\. Gestione degli errori

account\_id \[Diese Eingabe ist nicht korrekt.\]
Il conto per le registrazioni Bexio non è valido. Occorre utilizzare un conto Bexio sul quale possano essere registrate anche fatture.

tax\_id \[Diese Eingabe ist nicht korrekt.\]
Per una posizione della fattura non è stata trovata nessuna aliquota d'imposta valida.
\- Verifica se le aliquote d'imposta per tutte le aliquote utilizzate (0%, 8.1%, 2.6%,...) sono presenti e valide in Bexio
\- Assicurati che tutte le aliquote IVA rilevanti siano assegnate al formulario 303.
Se non è così, creane di ulteriori per ogni imposta.
\--> Panoramica Impostazioni --> Contabilità --> Aliquote d'imposta --> Modifica IVA

Nessun indirizzo Bexio trovato per l'utente
All'inquilino non è stato assegnato nessun utente Bexio oppure uno non valido. Assegna all'inquilino un utente (vedi sopra: 2. Assegnare gli inquilini)

&#123;"error\_code":422,"message":"The form could not be saved due to the following errors:","errors":\["positions: 0 \[account\_id \[Diese Eingabe ist nicht korrekt.\]\]"\]&#125;



Soluzione 1:

In smart-me nelle impostazioni un'imposta è già inclusa, ad es. 8.1%.

In Bexio sotto Impostazioni (Einstellungen) (in alto a destra) / Tutte le impostazioni (Alle Einstellungen) / Contabilità (Buchhaltung) / Impostazione di base IVA (Grundeinstellung MWST) non è configurato nulla.

Possibilità: indicare 0% in smart-me.

Soluzione 2:

Selezionare in smart-me l'esportazione su 3400 (conto per la registrazione Bexio).

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
