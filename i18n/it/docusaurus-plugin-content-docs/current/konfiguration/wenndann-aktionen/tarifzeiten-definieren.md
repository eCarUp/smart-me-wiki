---
title: 'Definire le fasce tariffarie'
slug: '/konfiguration/wenndann-aktionen/tarifzeiten-definieren'
description: 'Struttura dell''azione Se per le tariffe virtuali'
sidebar_label: 'Definire le fasce tariffarie'
---
![Definire le fasce tariffarie – Figura 1](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/01.png)

## Struttura dell'azione Se per le tariffe virtuali

Con una condizione aggiuntiva puoi definire da quando debba valere questa tariffa. Può trattarsi di un intervallo di tempo (ad es. per le ore di punta / fuori punta) oppure di una condizione qualsiasi. La condizione deve essere stata definita in precedenza come [azione se/allora](/konfiguration/wenndann-aktionen). Gli esempi più comuni sono descritti qui sotto.

Note:

- Dopo aver definito tutte le tariffe devi assolutamente fare clic su Ricalcola (Neu rechnen). In questo modo tutte le tariffe virtuali vengono calcolate correttamente. Questa operazione può durare alcune ore.


<Video src="0LTDpKKA3-k" title="Video YouTube, conteggiare il solare in ore di punta e fuori punta" />

### Interfaccia Se / Allora

![Definire le fasce tariffarie – Figura 2](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/02.png)

## Creare passo per passo una doppia tariffa

Guarda sul foglio tariffario gli orari previsti per le ore di punta (HT). Nel nostro esempio la situazione è la seguente:

Fascia HT:

Lu-Ve: dalle 7:00 alle 22:00
Sa: dalle 7:00 alle 13:00£


Fascia NT:

Lu-Ve: dalle 22:00 alle 7:00

Sa: dalle 13:00 alle 00:00

Do: tutto il giorno

### Creare la fascia HT

Fai clic sul "+" per creare un nuovo timing.

Scegli l'operatore Oppure (Oder-Verknüpfung)

Funzione OPPURE:

Se una delle condizioni SE è soddisfatta, si è nella fascia HT.

In corrispondenza degli eventi SE (WENN Ereignisse) fai clic sul "+" per creare la fascia HT Lu-Ve.

![Definire le fasce tariffarie – Figura 3](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/03.png)

Scegli Data e ora (Datum & Uhrzeit)



![Definire le fasce tariffarie – Figura 4](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Definisci gli orari per Lu-Ve

dalle 7:00 alle 22:00



e salva l'impostazione.

![Definire le fasce tariffarie – Figura 5](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/05.png)

Sotto gli eventi SE fai di nuovo clic su "+" per definire il sabato.

![Definire le fasce tariffarie – Figura 6](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/06.png)

Scegli Data e ora (Datum & Uhrzeit)

![Definire le fasce tariffarie – Figura 7](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Definisci gli orari per il sabato

dalle 7:00 alle 13:00



e salva l'impostazione.

![Definire le fasce tariffarie – Figura 8](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/08.png)

La fascia HT è ora definita.



Si prosegue con la fascia NT

![Definire le fasce tariffarie – Figura 9](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/09.png)

### Creare la fascia NT

Fai clic sul "+" per creare un nuovo timing.

Fai clic su "+" per registrare un'ulteriore azione per la fascia NT

![Definire le fasce tariffarie – Figura 10](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/10.png)

![Definire le fasce tariffarie – Figura 11](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/11.png)

Scegli Data e ora (Datum & Uhrzeit)

![Definire le fasce tariffarie – Figura 12](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Definisci la fascia NT per Lu-Ve

In questo caso corrisponde all'intervallo dalle 22:00 alle 7:00



Salva l'impostazione.

![Definire le fasce tariffarie – Figura 13](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/13.png)

Fai clic su "+" per definire il sabato

![Definire le fasce tariffarie – Figura 14](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/14.png)

Scegli Data e ora (Datum & Uhrzeit)

![Definire le fasce tariffarie – Figura 15](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Il sabato si definisce nel modo seguente:

dalle 13:00 alle 00:00 dello stesso giorno



Salva l'impostazione.

![Definire le fasce tariffarie – Figura 16](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/16.png)

Fai clic su "+" per definire la domenica ancora mancante

![Definire le fasce tariffarie – Figura 17](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/17.png)

Scegli Data e ora (Datum & Uhrzeit)

![Definire le fasce tariffarie – Figura 18](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Per una tariffa fuori punta valida tutta la domenica si inserisce per la domenica dalle 00:00 alle 00:00.



Salva l'impostazione

![Definire le fasce tariffarie – Figura 19](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/19.png)

Ora che hai definito le fasce tariffarie rilevanti, torna alla definizione delle tariffe per assegnare i timing alle tariffe.

![Definire le fasce tariffarie – Figura 20](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/20.png)

### Passo successivo: definire le tariffe con le fasce tariffarie

## Altri esempi

Struttura: ore di punta e fuori punta per la corrente di rete e tariffa unica per la corrente solare

- Corrente solare tariffa unica: definire la tariffa solare senza azione Se

- Corrente di rete ore di punta: definire la tariffa normale con azione Se

    - Esempio: Lu a Ve dalle 7h00 alle 22h00 oppure Sa dalle 7h00 alle 13h00 

- Corrente di rete ore fuori punta: definire la tariffa normale senza azione Se


Logica: dapprima viene distribuita la corrente solare disponibile. Se ce n'è troppo poca o non ce n'è affatto, viene utilizzata la tariffa normale che soddisfa una condizione. Alla fine, per la corrente restante viene applicata la tariffa senza condizione.

Struttura: ore di punta e fuori punta per la corrente di rete e per quella solare

- Corrente solare ore di punta: definire la tariffa solare con azione Se

    - Esempio: Lu a Ve dalle 7h00 alle 22h00 oppure Sa dalle 7h00 alle 13h00 

- Corrente solare ore fuori punta: definire la tariffa solare con azione Se

    - Esempio: Lu a Ve dalle 22h00 alle 7h00 oppure Sa dalle 13h00 alle 7h00 oppure Do dalle 0h00 alle 0h00

- Corrente di rete ore di punta: definire la tariffa normale con azione Se

    - Utilizzare la stessa azione Se impiegata per la corrente solare in ore di punta 

- Corrente di rete ore fuori punta: definire la tariffa normale con azione Se

    - Utilizzare la stessa azione Se impiegata per la corrente solare in ore fuori punta 


Logica: dapprima viene utilizzata la corrente solare disponibile con la condizione valida. Se ce n'è troppo poca o non ce n'è affatto, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24h/giorno siano coperte da una condizione Se.

Struttura: estate e inverno con ore di punta e fuori punta per la corrente di rete e tariffa unica per la corrente solare

- Corrente solare ore di punta: definire la tariffa solare senza azione Se

- Corrente di rete ore di punta estate: definire la tariffa normale con azione Se

    - Esempio: intervallo di tempo Ogni giorno: Lu a Do dalle 7h00 alle 22h00 e intervallo di tempo Ogni anno dal 1 / 04 / 00:00 al 1 / 10 / 00:00.

- Corrente di rete ore fuori punta estate: definire la tariffa normale con azione Se

    - Esempio: intervallo di tempo Ogni giorno: Lu a Do dalle 22h00 alle 07h00 e intervallo di tempo Ogni anno dal 1 / 04 / 00:00 al 1 / 10 / 00:00.

- Corrente di rete ore di punta inverno: definire la tariffa normale con azione Se

    - Esempio: intervallo di tempo Ogni giorno: Lu a Do dalle 7h00 alle 22h00 e intervallo di tempo Ogni anno dal 1 / 10 / 00:00 al 1 / 4 / 00:00.

- Corrente di rete ore fuori punta inverno: definire la tariffa normale con azione Se

    - Esempio: intervallo di tempo Ogni giorno: Lu a Do dalle 22h00 alle 07h00 e intervallo di tempo Ogni anno dal 1 / 10 / 00:00 al 1 / 4 / 00:00.


Logica: dapprima viene utilizzata la corrente solare disponibile. Se ce n'è troppo poca o non ce n'è affatto, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24h/giorno siano coperte da una condizione Se.

Struttura: estate e inverno con ore di punta e fuori punta per la corrente di rete e tariffa unica per la corrente solare e ore fuori punta a mezzogiorno solo in inverno (ad es. EWS/EBS)

Esempio

- Corrente di rete e solare ore fuori punta inverno 

    - Esempio: NT inverno dalle 22h00 alle 07h00 tra l'1.10 e l'1.4.

    - Azione se/allora con operatore E

        - Intervallo di tempo Ogni giorno: Lu a Do dalle 22h00 alle 07h00 

        - Intervallo di tempo Ogni anno dal 1 / 10 / 00:00 al 1 / 04 / 00:00.

- Corrente di rete e solare ore di punta inverno 

    - Esempio: HT inverno dalle 07h00 alle 22h00 tra l'1.10 e l'1.4.

    - Azione se/allora con operatore E

        - Intervallo di tempo Ogni giorno: Lu a Do dalle 7h00 alle 22h00 

        - Intervallo di tempo Ogni anno dal 1 / 10 / 00:00 al 1 / 04 / 00:00.

- Corrente di rete e solare ore fuori punta estate

    - Esempio: NT estate dalle 00h00 alle 06h00 e dalle 12h00 alle 15h00 tra l'1.4 e l'1.10

    - Azione se/allora con operatore E

        - Intervallo di tempo Ogni giorno: Lu a Do dalle 12h00 alle 06h00 

        - Intervallo di tempo Ogni giorno: Lu a Do dalle 00h00 alle 15h00 

        - Intervallo di tempo Ogni anno dal 1 / 4 / 00:00 al 1 / 10 / 00:00.

- Corrente di rete e solare ore di punta estate 

    - Esempio: HT estate dalle 06h00 alle 12h00 e dalle 15h00 alle 00h00 tra l'1.4 e l'1.10

    - Azione se/allora con operatore E

        - Intervallo di tempo Ogni giorno: Lu a Do dalle 06h00 alle 00h00 

        - Intervallo di tempo Ogni giorno: Lu a Do dalle 15h00 alle 12h00 

        - Intervallo di tempo Ogni anno dal 1 / 4 / 00:00 al 1 / 10 / 00:00.


Logica: dapprima viene utilizzata la corrente solare disponibile. Se ce n'è troppo poca o non ce n'è affatto, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24h/giorno siano coperte da una condizione Se.

Struttura: estate e inverno con ore di punta e fuori punta per la corrente di rete e solare, di giorno ore fuori punta in estate e ore di punta in inverno (ad es. Energie Uri dall'1.10.2025)

Descrizione: qui si deve procedere in due passi. 1x con Se/Allora e 1x con gli orari nelle tariffe virtuali

Per prima cosa devono essere definite le azioni Se.

- Corrente di rete e solare NT estate

    - Esempio: NT estate Lu a Ve dalle 06h00 alle 22h00 Lu a VE e Sa e Do sempre

    - Nome: Uri Sommer NT

    - Azione se/allora con operatore OPPURE

        - Intervallo di tempo Lu a Ve: dalle 6h00 alle 22h00 

        - Intervallo di tempo Sa e Do: dalle 00h00 alle 00h00




- Corrente di rete e solare HT estate

    - Esempio: HT estate Lu a Ve dalle 22h00 alle 06h00

    - Nome: Uri Sommer HT

    - Azione se/allora

        - Intervallo di tempo Lu a Ve: dalle 22h00 alle 06h00 




- Corrente di rete e solare NT inverno

    - Esempio: NT inverno Lu a Ve dalle 22h00 alle 06h00 Lu a VE e Sa e Do sempre

    - Nome: Uri Winter NT

    - Azione se/allora con operatore OPPURE

        - Intervallo di tempo Lu a Ve: dalle 22h00 alle 06h00 

        - Intervallo di tempo Sa e Do: dalle 00h00 alle 00h00




- Corrente di rete e solare HT inverno

    - Esempio: HT inverno Lu a Ve dalle 06h00 alle 22h00

    - Nome: Uri Winter HT

    - Azione se/allora con operatore OPPURE

        - Intervallo di tempo Lu a Ve: dalle 06h00 alle 22h00 


Successivamente devono essere definiti i prezzi per ogni periodo.

In questo caso i periodi ovvero la durata devono essere registrati. Con questo modello tariffario è necessaria una combinazione di Se/Allora e periodo.

- Nome: Uri Sommer HT Netz

    - Tipo: tariffa di rete (Netztarif)

    - Durata: dall'1.4.2026 al 30.9.2026

    - Condizione aggiuntiva: Uri Sommer HT

- Nome: Uri Sommer HT Solar


- Tipo: tariffa solare incl. vRCP (Solartarif inkl. vZEV) 

- Durata: dall'1.4.2026 al 30.9.2026

- Condizione aggiuntiva: Uri Sommer HT


- Nome: Uri Sommer NT Netz

    - Tipo: tariffa di rete (Netztarif)

    - Durata: dall'1.4.2026 al 30.9.2026

    - Condizione aggiuntiva: Uri Sommer NT

- Nome: Uri Sommer NT Solar

    - Tipo: tariffa solare incl. vRCP (bilancio/produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata: dall'1.4.2026 al 30.9.2026

    - Condizione aggiuntiva: Uri Sommer NT

- Nome: Uri Winter HT Netz

    - Tipo: tariffa di rete (Netztarif)

    - Durata: dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva: Uri Winter HT 

- Nome: Uri Winter HT Solar

    - Tipo: tariffa solare incl. vRCP (bilancio/produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata: dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva: Uri Winter HT

- Nome: Uri Winter NT Netz

    - Tipo: tariffa di rete (Netztarif)

    - Durata: dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva: Uri Winter NT

- Nome: Uri Winter NT Solar

    - Tipo: tariffa solare incl. vRCP (bilancio/produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata: dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva: Uri Winter NT 


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, Wiki Tarife Enerige Uri Tarife 2026.mp4" />

Wiki Tarife Enerige Uri Tarife 2026.mp4
