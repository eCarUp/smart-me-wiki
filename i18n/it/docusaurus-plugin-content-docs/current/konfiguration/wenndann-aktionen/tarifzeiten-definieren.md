---
title: 'Definire le fasce tariffarie'
slug: '/konfiguration/wenndann-aktionen/tarifzeiten-definieren'
description: 'Struttura dell''azione se per le tariffe virtuali'
sidebar_label: 'Definire le fasce tariffarie'
---
![Definire le fasce tariffarie – figura 1](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/01.png)

## Struttura dell'azione se per le tariffe virtuali

Con una condizione aggiuntiva puoi definire da quando questa tariffa deve essere valida. Può trattarsi di un intervallo di tempo (ad es. per ore di punta / ore fuori punta) oppure di una condizione qualsiasi. La condizione deve essere stata definita prima come [azione se/allora](/konfiguration/wenndann-aktionen). Gli esempi più comuni sono descritti qui sotto.

Note:

- Dopo aver definito tutte le tariffe, devi obbligatoriamente cliccare su Ricalcola (Neu rechnen). In questo modo tutte le tariffe virtuali vengono calcolate correttamente. Questa operazione può richiedere alcune ore.


<Video src="0LTDpKKA3-k" title="Video YouTube, conteggio dell'energia solare nelle ore di punta e fuori punta" />

### Interfaccia se/allora

![Definire le fasce tariffarie – figura 2](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/02.png)

## Creare una doppia tariffa passo per passo

Consulta sul foglio tariffario gli orari delle ore di punta. Nel nostro esempio la situazione è la seguente:

Fascia HT:

lu-ve: dalle 7:00 alle 22:00
sa: dalle 7:00 alle 13:00£


Fascia NT:

lu-ve: dalle 22:00 alle 7:00

sa: dalle 13:00 alle 00:00

do: tutto il giorno

### Creare la fascia HT

Clicca su "+" per creare un nuovo timing.

Seleziona il collegamento O (Oder-Verknüpfung)

Funzione O (ODER):

Se una delle condizioni SE (WENN) è soddisfatta, è fascia HT.

Negli eventi SE (WENN Ereignisse) clicca su "+" per creare la fascia HT lu-ve.

![Definire le fasce tariffarie – figura 3](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/03.png)

Seleziona Data e ora (Datum & Uhrzeit)



![Definire le fasce tariffarie – figura 4](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Definisci gli orari per lu-ve

dalle 7:00 alle 22:00



e salva l'impostazione.

![Definire le fasce tariffarie – figura 5](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/05.png)

Sotto gli eventi SE (WENN Ereignisse) clicca di nuovo su "+" per definire il sabato.

![Definire le fasce tariffarie – figura 6](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/06.png)

Seleziona Data e ora (Datum & Uhrzeit)

![Definire le fasce tariffarie – figura 7](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Definisci gli orari per il sabato

dalle 7:00 alle 13:00



e salva l'impostazione.

![Definire le fasce tariffarie – figura 8](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/08.png)

La fascia HT è ora definita.



Si prosegue con la fascia NT

![Definire le fasce tariffarie – figura 9](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/09.png)

### Creare la fascia NT

Clicca su "+" per creare un nuovo timing.

Clicca su "+" per registrare un'ulteriore azione per la fascia NT

![Definire le fasce tariffarie – figura 10](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/10.png)

![Definire le fasce tariffarie – figura 11](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/11.png)

Seleziona Data e ora (Datum & Uhrzeit)

![Definire le fasce tariffarie – figura 12](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Definisci la fascia NT per lu-ve

In questo caso corrisponde all'orario dalle 22:00 alle 7:00



Salva l'impostazione.

![Definire le fasce tariffarie – figura 13](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/13.png)

Clicca su "+" per definire il sabato

![Definire le fasce tariffarie – figura 14](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/14.png)

Seleziona Data e ora (Datum & Uhrzeit)

![Definire le fasce tariffarie – figura 15](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Il sabato si definisce come segue:

dalle 13:00 alle 00:00 del giorno



Salva l'impostazione.

![Definire le fasce tariffarie – figura 16](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/16.png)

Clicca su "+" per definire la domenica, che ancora manca

![Definire le fasce tariffarie – figura 17](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/17.png)

Seleziona Data e ora (Datum & Uhrzeit)

![Definire le fasce tariffarie – figura 18](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Per una tariffa ore fuori punta valida tutto il giorno la domenica, per la domenica si inserisce dalle 00:00 alle 00:00.



Salva l'impostazione

![Definire le fasce tariffarie – figura 19](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/19.png)

Ora che hai definito le fasce tariffarie rilevanti, torna alla definizione delle tariffe per assegnare i timing alle tariffe.

![Definire le fasce tariffarie – figura 20](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/20.png)

### Prossimo passo: definire le tariffe con le fasce tariffarie

## Altri esempi

Struttura: ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'energia solare

- Tariffa unica energia solare: definire la tariffa solare senza azione se

- Elettricità di rete ore di punta: definire la tariffa normale con azione se

    - Esempio. lu-ve dalle 7h00 alle 22h00 oppure sa dalle 7h00 alle 13h00 

- Elettricità di rete ore fuori punta: definire la tariffa normale senza azione se


Logica: dapprima viene distribuita l'energia solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale che soddisfa una condizione. Infine, per l'elettricità restante viene applicata la tariffa senza condizione.

Struttura: ore di punta e ore fuori punta per l'elettricità di rete e l'energia solare

- Energia solare ore di punta: definire la tariffa solare con azione se

    - Esempio: lu-ve dalle 7h00 alle 22h00 oppure sa dalle 7h00 alle 13h00 

- Energia solare ore fuori punta: definire la tariffa solare con azione se

    - Esempio: lu-ve dalle 22h00 alle 7h00 oppure sa dalle 13h00 alle 7h00 oppure do dalle 0h00 alle 0h00

- Elettricità di rete ore di punta: definire la tariffa normale con azione se

    - Utilizzare la stessa azione se della tariffa ore di punta per l'energia solare 

- Elettricità di rete ore fuori punta: definire la tariffa normale con azione se

    - Utilizzare la stessa azione se della tariffa ore fuori punta per l'energia solare 


Logica: dapprima viene utilizzata l'energia solare disponibile con la condizione valida. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24 ore al giorno siano coperte da una condizione se.

Struttura: estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'energia solare

- Energia solare ore di punta: definire la tariffa solare senza azione se

- Elettricità di rete ore di punta estate: definire la tariffa normale con azione se

    - Esempio: Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): lu-do dalle 7h00 alle 22h00 e Intervallo di tempo ogni anno (Zeitspanne Jedes Jahr) dal 1 / 04 / 00:00 al 1 / 10 / 00:00.

- Elettricità di rete ore fuori punta estate: definire la tariffa normale con azione se

    - Esempio: Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): lu-do dalle 22h00 alle 07h00 e Intervallo di tempo ogni anno (Zeitspanne Jedes Jahr) dal 1 / 04 / 00:00 al 1 / 10 / 00:00.

- Elettricità di rete ore di punta inverno: definire la tariffa normale con azione se

    - Esempio: Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): lu-do dalle 7h00 alle 22h00 e Intervallo di tempo ogni anno (Zeitspanne Jedes Jahr) dal 1 / 10 / 00:00 al 1 / 4 / 00:00.

- Elettricità di rete ore fuori punta inverno: definire la tariffa normale con azione se

    - Esempio: Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): lu-do dalle 22h00 alle 07h00 e Intervallo di tempo ogni anno (Zeitspanne Jedes Jahr) dal 1 / 10 / 00:00 al 1 / 4 / 00:00.


Logica: dapprima viene utilizzata l'energia solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24 ore al giorno siano coperte da una condizione se.

Struttura: estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'energia solare e ore fuori punta a mezzogiorno solo in inverno (ad es. EWS/EBS)

Esempio

- Elettricità di rete ed energia solare ore fuori punta inverno 

    - Esempio: inverno NT dalle 22h00 alle 07h00 tra l'1.10 e l'1.4.

    - Azione se/allora con collegamento E (UND-Verknüpfung)

        - Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): lu-do dalle 22h00 alle 07h00 

        - Intervallo di tempo ogni anno (Zeitspanne Jedes Jahr) dal 1 / 10 / 00:00 al 1 / 04 / 00:00.

- Elettricità di rete ed energia solare ore di punta inverno 

    - Esempio: inverno HT dalle 07h00 alle 22h00 tra l'1.10 e l'1.4.

    - Azione se/allora con collegamento E (UND-Verknüpfung)

        - Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): lu-do dalle 7h00 alle 22h00 

        - Intervallo di tempo ogni anno (Zeitspanne Jedes Jahr) dal 1 / 10 / 00:00 al 1 / 04 / 00:00.

- Elettricità di rete ed energia solare ore fuori punta estate

    - Esempio: estate NT dalle 00h00 alle 06h00 e dalle 12h00 alle 15h00 tra l'1.4 e l'1.10

    - Azione se/allora con collegamento E (UND-Verknüpfung)

        - Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): lu-do dalle 12h00 alle 06h00 

        - Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): lu-do dalle 00h00 alle 15h00 

        - Intervallo di tempo ogni anno (Zeitspanne Jedes Jahr) dal 1 / 4 / 00:00 al 1 / 10 / 00:00.

- Elettricità di rete ed energia solare ore di punta estate 

    - Esempio: estate HT dalle 06h00 alle 12h00 e dalle 15h00 alle 00h00 tra l'1.4 e l'1.10

    - Azione se/allora con collegamento E (UND-Verknüpfung)

        - Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): lu-do dalle 06h00 alle 00h00 

        - Intervallo di tempo ogni giorno (Zeitspanne Jeden Tag): lu-do dalle 15h00 alle 12h00 

        - Intervallo di tempo ogni anno (Zeitspanne Jedes Jahr) dal 1 / 4 / 00:00 al 1 / 10 / 00:00.


Logica: dapprima viene utilizzata l'energia solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24 ore al giorno siano coperte da una condizione se.

Struttura: estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e l'energia solare, durante il giorno ore fuori punta in estate e ore di punta in inverno (ad es. Energie Uri dall'1.10.2025)

Descrizione: qui occorre procedere in due fasi. 1x con l'azione se/allora e 1x con gli orari nelle tariffe virtuali

Dapprima devono essere definite le azioni se.

- Elettricità di rete ed energia solare estate NT

    - Esempio: estate NT lu-ve dalle 06h00 alle 22h00 lu-ve e sa e do sempre

    - Nome: Uri Sommer NT

    - Azione se/allora con collegamento O (ODER-Verknüpfung)

        - Intervallo di tempo lu-ve: dalle 6h00 alle 22h00 

        - Intervallo di tempo sa e do: dalle 00h00 alle 00h00




- Elettricità di rete ed energia solare estate HT

    - Esempio: estate HT lu-ve dalle 22h00 alle 06h00

    - Nome: Uri Sommer HT

    - Azione se/allora

        - Intervallo di tempo lu-ve: dalle 22h00 alle 06h00 




- Elettricità di rete ed energia solare inverno NT

    - Esempio: inverno NT lu-ve dalle 22h00 alle 06h00 lu-ve e sa e do sempre

    - Nome: Uri Winter NT

    - Azione se/allora con collegamento O (ODER-Verknüpfung)

        - Intervallo di tempo lu-ve: dalle 22h00 alle 06h00 

        - Intervallo di tempo sa e do: dalle 00h00 alle 00h00




- Elettricità di rete ed energia solare inverno HT

    - Esempio: inverno HT lu-ve dalle 06h00 alle 22h00

    - Nome: Uri Winter HT

    - Azione se/allora con collegamento O (ODER-Verknüpfung)

        - Intervallo di tempo lu-ve: dalle 06h00 alle 22h00 


Poi devono essere definiti i prezzi per ogni periodo.

In questo caso devono essere registrati i periodi o la durata. Con questo modello tariffario è necessaria una combinazione di azione se/allora e periodo.

- Nome: Uri Sommer HT Netz

    - Tipo: Tariffa di rete (Netztarif)

    - Durata: dall'1.4.2026 al 30.9.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer HT

- Nome: Uri Sommer HT Solar


- Tipo: Tariffa solare incl. RCP virtuale (vRCP) (Solartarif inkl. vZEV) 

- Durata: dall'1.4.2026 al 30.9.2026

- Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer HT


- Nome: Uri Sommer NT Netz

    - Tipo: Tariffa di rete (Netztarif)

    - Durata: dall'1.4.2026 al 30.9.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer NT

- Nome: Uri Sommer NT Solar

    - Tipo: Tariffa solare incl. vRCP (bilancio/produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata: dall'1.4.2026 al 30.9.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer NT

- Nome: Uri Winter HT Netz

    - Tipo: Tariffa di rete (Netztarif)

    - Durata: dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter HT 

- Nome: Uri Winter HT Solar

    - Tipo: Tariffa solare incl. vRCP (bilancio/produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata: dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter HT

- Nome: Uri Winter NT Netz

    - Tipo: Tariffa di rete (Netztarif)

    - Durata: dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter NT

- Nome: Uri Winter NT Solar

    - Tipo: Tariffa solare incl. vRCP (bilancio/produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata: dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter NT 


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, Wiki Tarife Enerige Uri Tarife 2026.mp4" />

Wiki Tarife Enerige Uri Tarife 2026.mp4
