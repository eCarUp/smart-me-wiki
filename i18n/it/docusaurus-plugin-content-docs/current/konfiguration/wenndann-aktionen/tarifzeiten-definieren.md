---
title: 'Definire le fasce tariffarie'
slug: '/konfiguration/wenndann-aktionen/tarifzeiten-definieren'
description: 'Struttura dell''azione se per le tariffe virtuali'
sidebar_label: 'Definire le fasce tariffarie'
naechste_schritte: [konfiguration/billing/stromtarife-definieren/index]
---
![Definire le fasce tariffarie – Figura 1](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/01.png)

## Struttura dell'azione se per le tariffe virtuali

Con una condizione aggiuntiva è possibile definire da quando questa tariffa deve essere valida. Può trattarsi di un intervallo di tempo (ad es. per ore di punta / ore fuori punta) o di qualsiasi altra condizione. La condizione deve essere stata definita in precedenza come [azione se/allora](/konfiguration/wenndann-aktionen). Gli esempi più comuni sono descritti di seguito.

Note:

- Dopo aver definito tutte le tariffe, è indispensabile fare clic su Ricalcola (Neu rechnen). In questo modo tutte le tariffe virtuali vengono calcolate correttamente. Questa operazione può richiedere alcune ore.


<Video src="0LTDpKKA3-k" title="Video YouTube, conteggiare il solare in ore di punta e ore fuori punta" />

### Interfaccia Se/Allora

![Definire le fasce tariffarie – Figura 2](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/02.png)

## Creare una doppia tariffa passo dopo passo

Consultare sul foglio tariffario gli orari delle ore di punta. Nel nostro esempio la situazione è la seguente:

Fascia HT (ore di punta):

Lu-Ve: dalle 7:00 alle 22:00
Sa: dalle 7:00 alle 13:00£


Fascia NT (ore fuori punta):

Lu-Ve: dalle 22:00 alle 7:00

Sa: dalle 13:00 alle 00:00

Do: tutto il giorno

### Creare la fascia HT

Fare clic su "+" per creare un nuovo timing.

Selezionare il collegamento O (Oder-Verknüpfung)

Funzione O (ODER):

Se una delle condizioni SE (WENN) è soddisfatta, è fascia HT.

In Eventi SE (WENN Ereignisse) fare clic su "+" per creare la fascia HT Lu-Ve.

![Definire le fasce tariffarie – Figura 3](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/03.png)

Selezionare Data e ora (Datum & Uhrzeit)



![Definire le fasce tariffarie – Figura 4](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Definire gli orari per Lu-Ve

dalle 7:00 alle 22:00



e salvare l'impostazione.

![Definire le fasce tariffarie – Figura 5](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/05.png)

Sotto gli Eventi SE (WENN Ereignisse) fare nuovamente clic su "+" per definire il sabato.

![Definire le fasce tariffarie – Figura 6](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/06.png)

Selezionare Data e ora (Datum & Uhrzeit)

![Definire le fasce tariffarie – Figura 7](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Definire gli orari per il sabato

dalle 7:00 alle 13:00



e salvare l'impostazione.

![Definire le fasce tariffarie – Figura 8](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/08.png)

La fascia HT è ora definita.



Si prosegue con la fascia NT

![Definire le fasce tariffarie – Figura 9](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/09.png)

### Creare la fascia NT

<div className="row">
<div className="col col--5">

Fare clic su "+" per creare un nuovo timing.

Fare clic su "+" per registrare un'ulteriore azione per la fascia NT

</div>
<div className="col col--7 text--center">

![Definire le fasce tariffarie – Figura 10](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/10.png)

</div>
</div>

![Definire le fasce tariffarie – Figura 11](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/11.png)

Selezionare Data e ora (Datum & Uhrzeit)

![Definire le fasce tariffarie – Figura 12](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Definire la fascia NT per Lu-Ve

In questo caso corrisponde all'intervallo dalle 22:00 alle 7:00



Salvare l'impostazione.

![Definire le fasce tariffarie – Figura 13](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/13.png)

Fare clic su "+" per definire il sabato

![Definire le fasce tariffarie – Figura 14](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/14.png)

Selezionare Data e ora (Datum & Uhrzeit)

![Definire le fasce tariffarie – Figura 15](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Il sabato si definisce come segue:

dalle 13:00 alle 00:00 del giorno



Salvare l'impostazione.

![Definire le fasce tariffarie – Figura 16](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/16.png)

Fare clic su "+" per definire la domenica ancora mancante

![Definire le fasce tariffarie – Figura 17](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/17.png)

Selezionare Data e ora (Datum & Uhrzeit)

![Definire le fasce tariffarie – Figura 18](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Per una tariffa fuori punta per l'intera giornata di domenica, per la domenica si inserisce dalle 00:00 alle 00:00.



Salvare l'impostazione

![Definire le fasce tariffarie – Figura 19](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/19.png)

<div className="row">
<div className="col col--4">

Ora che sono state definite le fasce tariffarie rilevanti, tornare alla definizione delle tariffe per assegnare i timing alle tariffe.

</div>
<div className="col col--8 text--center">

![Definire le fasce tariffarie – Figura 20](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/20.png)

</div>
</div>

## Altri esempi

Struttura: ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'elettricità solare

- Elettricità solare tariffa unica: definire la tariffa solare senza azione se

- Elettricità di rete ore di punta: definire la tariffa normale con azione se

    - Esempio. Lu-Ve dalle 7h00 alle 22h00 oppure Sa dalle 7h00 alle 13h00 

- Elettricità di rete ore fuori punta: definire la tariffa normale senza azione se


Logica: per prima cosa viene distribuita l'elettricità solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale che soddisfa una condizione. Infine, per l'elettricità restante viene utilizzata la tariffa senza condizione.

Struttura: ore di punta e ore fuori punta per l'elettricità di rete e solare

- Elettricità solare ore di punta: definire la tariffa solare con azione se

    - Esempio: Lu-Ve dalle 7h00 alle 22h00 oppure Sa dalle 7h00 alle 13h00 

- Elettricità solare ore fuori punta: definire la tariffa solare con azione se

    - Esempio: Lu-Ve dalle 22h00 alle 7h00 oppure Sa dalle 13h00 alle 7h00 oppure Do dalle 0h00 alle 0h00

- Elettricità di rete ore di punta: definire la tariffa normale con azione se

    - Utilizzare la stessa azione se della tariffa solare ore di punta 

- Elettricità di rete ore fuori punta: definire la tariffa normale con azione se

    - Utilizzare la stessa azione se della tariffa solare ore fuori punta 


Logica: per prima cosa viene utilizzata l'elettricità solare disponibile con la condizione valida. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24 ore del giorno siano coperte da una condizione se.

Struttura: estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'elettricità solare

- Elettricità solare ore di punta: definire la tariffa solare senza azione se

- Elettricità di rete ore di punta estate: definire la tariffa normale con azione se

    - Esempio: intervallo ogni giorno: Lu-Do dalle 7h00 alle 22h00 e intervallo ogni anno da 1 / 04 / 00:00 a 1 / 10 / 00:00.

- Elettricità di rete ore fuori punta estate: definire la tariffa normale con azione se

    - Esempio: intervallo ogni giorno: Lu-Do dalle 22h00 alle 07h00 e intervallo ogni anno da 1 / 04 / 00:00 a 1 / 10 / 00:00.

- Elettricità di rete ore di punta inverno: definire la tariffa normale con azione se

    - Esempio: intervallo ogni giorno: Lu-Do dalle 7h00 alle 22h00 e intervallo ogni anno da 1 / 10 / 00:00 a 1 / 4 / 00:00.

- Elettricità di rete ore fuori punta inverno: definire la tariffa normale con azione se

    - Esempio: intervallo ogni giorno: Lu-Do dalle 22h00 alle 07h00 e intervallo ogni anno da 1 / 10 / 00:00 a 1 / 4 / 00:00.


Logica: per prima cosa viene utilizzata l'elettricità solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24 ore del giorno siano coperte da una condizione se.

Struttura: estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'elettricità solare e ore fuori punta a mezzogiorno solo in inverno (ad es. EWS/EBS)

Esempio

- Elettricità di rete e solare ore fuori punta inverno 

    - Esempio: inverno NT dalle 22h00 alle 07h00 tra l'1.10 e l'1.4.

    - Azione se/allora con collegamento E (UND)

        - Intervallo ogni giorno: Lu-Do dalle 22h00 alle 07h00 

        - Intervallo ogni anno da 1 / 10 / 00:00 a 1 / 04 / 00:00.

- Elettricità di rete e solare ore di punta inverno 

    - Esempio: inverno HT dalle 07h00 alle 22h00 tra l'1.10 e l'1.4.

    - Azione se/allora con collegamento E (UND)

        - Intervallo ogni giorno: Lu-Do dalle 7h00 alle 22h00 

        - Intervallo ogni anno da 1 / 10 / 00:00 a 1 / 04 / 00:00.

- Elettricità di rete e solare ore fuori punta estate

    - Esempio: estate NT dalle 00h00 alle 06h00 e dalle 12h00 alle 15h00 tra l'1.4 e l'1.10

    - Azione se/allora con collegamento E (UND)

        - Intervallo ogni giorno: Lu-Do dalle 12h00 alle 06h00 

        - Intervallo ogni giorno: Lu-Do dalle 00h00 alle 15h00 

        - Intervallo ogni anno da 1 / 4 / 00:00 a 1 / 10 / 00:00.

- Elettricità di rete e solare ore di punta estate 

    - Esempio: estate HT dalle 06h00 alle 12h00 e dalle 15h00 alle 00h00 tra l'1.4 e l'1.10

    - Azione se/allora con collegamento E (UND)

        - Intervallo ogni giorno: Lu-Do dalle 06h00 alle 00h00 

        - Intervallo ogni giorno: Lu-Do dalle 15h00 alle 12h00 

        - Intervallo ogni anno da 1 / 4 / 00:00 a 1 / 10 / 00:00.


Logica: per prima cosa viene utilizzata l'elettricità solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24 ore del giorno siano coperte da una condizione se.

Struttura: estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e solare, durante il giorno ore fuori punta in estate e ore di punta in inverno (ad es. Energie Uri dall'1.10.2025)

Descrizione: qui occorre procedere in due fasi. 1x con se/allora e 1x con gli orari nelle tariffe virtuali

Per prima cosa occorre definire le azioni se.

- Elettricità di rete e solare estate NT

    - Esempio: estate NT Lu-Ve dalle 06h00 alle 22h00 Lu-Ve e Sa e Do sempre

    - Nome: Uri Sommer NT

    - Azione se/allora con collegamento O (ODER)

        - Intervallo Lu-Ve: dalle 6h00 alle 22h00 

        - Intervallo Sa e Do: dalle 00h00 alle 00h00




- Elettricità di rete e solare estate HT

    - Esempio: estate HT Lu-Ve dalle 22h00 alle 06h00

    - Nome: Uri Sommer HT

    - Azione se/allora

        - Intervallo Lu-Ve: dalle 22h00 alle 06h00 




- Elettricità di rete e solare inverno NT

    - Esempio: inverno NT Lu-Ve dalle 22h00 alle 06h00 Lu-Ve e Sa e Do sempre

    - Nome: Uri Winter NT

    - Azione se/allora con collegamento O (ODER)

        - Intervallo Lu-Ve: dalle 22h00 alle 06h00 

        - Intervallo Sa e Do: dalle 00h00 alle 00h00




- Elettricità di rete e solare inverno HT

    - Esempio: inverno HT Lu-Ve dalle 06h00 alle 22h00

    - Nome: Uri Winter HT

    - Azione se/allora con collegamento O (ODER)

        - Intervallo Lu-Ve: dalle 06h00 alle 22h00 


Successivamente occorre definire i prezzi per ogni periodo.

In questo caso occorre registrare i periodi ovvero la durata. Con questo modello tariffario è necessaria una combinazione di se/allora e periodo.

- Nome: Uri Sommer HT Netz

    - Tipo (Type): tariffa di rete (Netztarif)

    - Durata (Dauer): dall'1.4.2026 al 30.9.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer HT

- Nome: Uri Sommer HT Solar


- Tipo (Type): tariffa solare incl. vRCP (Solartarif inkl. vZEV) 

- Durata (Dauer): dall'1.4.2026 al 30.9.2026

- Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer HT


- Nome: Uri Sommer NT Netz

    - Tipo (Type): tariffa di rete (Netztarif)

    - Durata (Dauer): dall'1.4.2026 al 30.9.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer NT

- Nome: Uri Sommer NT Solar

    - Tipo (Type): tariffa solare incl. vRCP (bilancio/produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata (Dauer): dall'1.4.2026 al 30.9.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer NT

- Nome: Uri Winter HT Netz

    - Tipo (Type): tariffa di rete (Netztarif)

    - Durata (Dauer): dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter HT 

- Nome: Uri Winter HT Solar

    - Tipo (Type): tariffa solare incl. vRCP (bilancio/produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata (Dauer): dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter HT

- Nome: Uri Winter NT Netz

    - Tipo (Type): tariffa di rete (Netztarif)

    - Durata (Dauer): dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter NT

- Nome: Uri Winter NT Solar

    - Tipo (Type): tariffa solare incl. vRCP (bilancio/produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata (Dauer): dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter NT 


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, Wiki Tarife Enerige Uri Tarife 2026.mp4" />

Wiki Tarife Enerige Uri Tarife 2026.mp4
