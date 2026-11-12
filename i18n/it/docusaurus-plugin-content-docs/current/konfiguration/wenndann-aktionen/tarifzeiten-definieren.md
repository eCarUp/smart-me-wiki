---
title: 'Definire le fasce tariffarie'
slug: '/konfiguration/wenndann-aktionen/tarifzeiten-definieren'
description: 'Struttura dell''azione "se" per le tariffe virtuali'
sidebar_label: 'Definire le fasce tariffarie'
naechste_schritte: [konfiguration/billing/stromtarife-definieren/index]
---
<Menueweg>Azioni "se-quando</Menueweg>

## Struttura dell'azione "se" per le tariffe virtuali

<div className="row">
<div className="col col--6">

Con una condizione aggiuntiva puoi definire da quando questa tariffa deve essere valida. Può trattarsi di un intervallo di tempo (ad es. per ore di punta / ore fuori punta) o di qualsiasi altra condizione. La condizione deve essere stata definita in precedenza come [azione se/allora](/konfiguration/wenndann-aktionen). Gli esempi più comuni sono descritti qui sotto.

Note:

- Dopo aver definito tutte le tariffe, devi assolutamente fare clic su Ricalcola (Neu rechnen). In questo modo tutte le tariffe virtuali vengono calcolate correttamente. Questa operazione può richiedere alcune ore.

</div>
<div className="col col--6">

<Video src="0LTDpKKA3-k" title="Video YouTube, conteggiare l'energia solare in ore di punta e ore fuori punta" />

</div>
</div>

### Interfaccia se/allora

![Definire le fasce tariffarie – Figura 2](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/02.png)

## Creare una doppia tariffa passo dopo passo

Consulta sul foglio tariffario gli orari delle ore di punta. Nel nostro esempio la situazione è la seguente:

<div className="row">
<div className="col col--6">

**Fascia HT (ore di punta):**

Lu-Ve: dalle 7:00 alle 22:00

Sa: dalle 7:00 alle 13:00

</div>
<div className="col col--6">

**Fascia NT (ore fuori punta):**

Lu-Ve: dalle 22:00 alle 7:00

Sa: dalle 13:00 alle 00:00

Do: tutto il giorno

</div>
</div>

### Creare la fascia HT

<div className="row">
<div className="col col--6">

Fai clic su "+" per creare un nuovo timing.

Seleziona il collegamento O (Oder-Verknüpfung)

Funzione O (ODER):

Se una delle condizioni SE (WENN) è soddisfatta, è fascia HT.

In Eventi SE (WENN Ereignisse) fai clic su "+" per creare la fascia HT Lu-Ve.

</div>
<div className="col col--6 bild--mitte">

![Definire le fasce tariffarie – Figura 3](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/03.png)

</div>
</div>

#### Fascia HT Lu-Ve

![Data e ora](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Seleziona Data e ora (Datum & Uhrzeit)

Definisci gli orari per Lu-Ve

dalle 7:00 alle 22:00

e salva l'impostazione.

</div>
<div className="col col--6 bild--mitte">

![Definire le fasce tariffarie – Figura 5](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/05.png)

</div>
</div>

#### Fascia HT sabato

![Data e ora](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Sotto gli Eventi SE (WENN Ereignisse) fai di nuovo clic su "+" per definire il sabato.

Seleziona Data e ora (Datum & Uhrzeit)

Definisci gli orari per il sabato

dalle 7:00 alle 13:00

e salva l'impostazione.

La fascia HT è ora definita.

</div>
<div className="col col--6 bild--mitte">

![Definire le fasce tariffarie – Figura 6](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/06.png)

![Definire le fasce tariffarie – Figura 8](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/08.png)

![Definire le fasce tariffarie – Figura 9](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/09.png)

</div>
</div>

### Creare la fascia NT

<div className="row">
<div className="col col--6">

Fai clic su "+" per creare un nuovo timing.

Fai clic su "+" per registrare un'ulteriore azione per la fascia NT

</div>
<div className="col col--6 bild--mitte">

![Definire le fasce tariffarie – Figura 10](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/10.png)

![Definire le fasce tariffarie – Figura 11](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/11.png)

</div>
</div>

#### Fascia NT Lu-Ve

![Data e ora](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Seleziona Data e ora (Datum & Uhrzeit)

Definisci la fascia NT per Lu-Ve

In questo caso corrisponde all'orario dalle 22:00 alle 7:00

Salva l'impostazione.

</div>
<div className="col col--6 bild--mitte">

![Definire le fasce tariffarie – Figura 13](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/13.png)

</div>
</div>

#### Fascia NT sabato

![Data e ora](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Fai clic su "+" per definire il sabato

Seleziona Data e ora (Datum & Uhrzeit)

Il sabato si definisce come segue:

dalle 13:00 alle 00:00 del giorno

Salva l'impostazione.

</div>
<div className="col col--6 bild--mitte">

![Definire le fasce tariffarie – Figura 14](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/14.png)

![Definire le fasce tariffarie – Figura 16](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/16.png)

</div>
</div>

#### Fascia NT domenica

![Data e ora](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Fai clic su "+" per definire la domenica che ancora manca

Seleziona Data e ora (Datum & Uhrzeit)

Per applicare le ore fuori punta alla domenica per l'intera giornata, per la domenica si inserisce dalle 00:00 alle 00:00.

Salva l'impostazione

</div>
<div className="col col--6 bild--mitte">

![Definire le fasce tariffarie – Figura 17](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/17.png)

![Definire le fasce tariffarie – Figura 19](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/19.png)

</div>
</div>

### Assegnare i timing alle tariffe

<div className="row">
<div className="col col--6">

Ora che hai definito le fasce tariffarie rilevanti, torna alla definizione delle tariffe per assegnare i timing alle tariffe.

</div>
<div className="col col--6 bild--mitte">

![Definire le fasce tariffarie – Figura 20](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/20.png)

</div>
</div>

## Altri esempi

A seconda del modello tariffario del tuo fornitore di energia, l'azione "se" ha un aspetto diverso. Apri la struttura che corrisponde al tuo caso.

<details id="hoch-und-niedertarif-netzstrom-einheitstarif-solar">
<summary>Ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'energia solare</summary>

- Tariffa unica energia solare: definire la tariffa solare senza azione "se"

- Ore di punta elettricità di rete: definire la tariffa normale con azione "se"

    - Esempio: da lu a ve dalle 7h00 alle 22h00 oppure sa dalle 7h00 alle 13h00 

- Ore fuori punta elettricità di rete: definire la tariffa normale senza azione "se"


Logica: per prima cosa viene ripartita l'energia solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale che soddisfa una condizione. Infine, per l'elettricità restante viene applicata la tariffa senza condizione.

</details>

<details id="hoch-und-niedertarif-netz-und-solarstrom">
<summary>Ore di punta e ore fuori punta per l'elettricità di rete e l'energia solare</summary>

- Ore di punta energia solare: definire la tariffa solare con azione "se"

    - Esempio: da lu a ve dalle 7h00 alle 22h00 oppure sa dalle 7h00 alle 13h00 

- Ore fuori punta energia solare: definire la tariffa solare con azione "se"

    - Esempio: da lu a ve dalle 22h00 alle 7h00 oppure sa dalle 13h00 alle 7h00 oppure do dalle 0h00 alle 0h00

- Ore di punta elettricità di rete: definire la tariffa normale con azione "se"

    - Utilizzare la stessa azione "se" delle ore di punta dell'energia solare 

- Ore fuori punta elettricità di rete: definire la tariffa normale con azione "se"

    - Utilizzare la stessa azione "se" delle ore fuori punta dell'energia solare 


Logica: per prima cosa viene utilizzata l'energia solare disponibile con la condizione valida. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24 ore al giorno siano coperte da una condizione "se".

</details>

<details id="sommer-winter-netzstrom-einheitstarif-solar">
<summary>Estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'energia solare</summary>

- Ore di punta energia solare: definire la tariffa solare senza azione "se"

- Ore di punta elettricità di rete estate: definire la tariffa normale con azione "se"

    - Esempio: Intervallo di tempo Ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 7h00 alle 22h00 e Intervallo di tempo Ogni anno (Zeitspanne Jedes Jahr) dal 1 / 04 / 00:00 al 1 / 10 / 00:00.

- Ore fuori punta elettricità di rete estate: definire la tariffa normale con azione "se"

    - Esempio: Intervallo di tempo Ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 22h00 alle 07h00 e Intervallo di tempo Ogni anno (Zeitspanne Jedes Jahr) dal 1 / 04 / 00:00 al 1 / 10 / 00:00.

- Ore di punta elettricità di rete inverno: definire la tariffa normale con azione "se"

    - Esempio: Intervallo di tempo Ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 7h00 alle 22h00 e Intervallo di tempo Ogni anno (Zeitspanne Jedes Jahr) dal 1 / 10 / 00:00 al 1 / 4 / 00:00.

- Ore fuori punta elettricità di rete inverno: definire la tariffa normale con azione "se"

    - Esempio: Intervallo di tempo Ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 22h00 alle 07h00 e Intervallo di tempo Ogni anno (Zeitspanne Jedes Jahr) dal 1 / 10 / 00:00 al 1 / 4 / 00:00.


Logica: per prima cosa viene utilizzata l'energia solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24 ore al giorno siano coperte da una condizione "se".

</details>

<details id="sommer-winter-mit-mittagsniedertarif-im-winter">
<summary>Estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'energia solare e ore fuori punta a mezzogiorno solo in inverno (ad es. EWS/EBS)</summary>

Esempio

- Ore fuori punta elettricità di rete ed energia solare inverno 

    - Esempio: inverno NT dalle 22h00 alle 07h00 tra il 1.10 e il 1.4.

    - Azione se/allora con collegamento E (UND)

        - Intervallo di tempo Ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 22h00 alle 07h00 

        - Intervallo di tempo Ogni anno (Zeitspanne Jedes Jahr) dal 1 / 10 / 00:00 al 1 / 04 / 00:00.

- Ore di punta elettricità di rete ed energia solare inverno 

    - Esempio: inverno HT dalle 07h00 alle 22h00 tra il 1.10 e il 1.4.

    - Azione se/allora con collegamento E (UND)

        - Intervallo di tempo Ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 7h00 alle 22h00 

        - Intervallo di tempo Ogni anno (Zeitspanne Jedes Jahr) dal 1 / 10 / 00:00 al 1 / 04 / 00:00.

- Ore fuori punta elettricità di rete ed energia solare estate

    - Esempio: estate NT dalle 00h00 alle 06h00 e dalle 12h00 alle 15h00 tra il 1.4 e il 1.10

    - Azione se/allora con collegamento E (UND)

        - Intervallo di tempo Ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 12h00 alle 06h00 

        - Intervallo di tempo Ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 00h00 alle 15h00 

        - Intervallo di tempo Ogni anno (Zeitspanne Jedes Jahr) dal 1 / 4 / 00:00 al 1 / 10 / 00:00.

- Ore di punta elettricità di rete ed energia solare estate 

    - Esempio: estate HT dalle 06h00 alle 12h00 e dalle 15h00 alle 00h00 tra il 1.4 e il 1.10

    - Azione se/allora con collegamento E (UND)

        - Intervallo di tempo Ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 06h00 alle 00h00 

        - Intervallo di tempo Ogni giorno (Zeitspanne Jeden Tag): da lu a do dalle 15h00 alle 12h00 

        - Intervallo di tempo Ogni anno (Zeitspanne Jedes Jahr) dal 1 / 4 / 00:00 al 1 / 10 / 00:00.


Logica: per prima cosa viene utilizzata l'energia solare disponibile. Se ce n'è troppo poca o non ce n'è, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24 ore al giorno siano coperte da una condizione "se".

</details>

<details id="sommer-winter-tagsueber-wechselnd-energie-uri">
<summary>Estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e l'energia solare, di giorno ore fuori punta in estate e ore di punta in inverno (ad es. Energie Uri dal 1.10.2025)</summary>

Descrizione: qui occorre procedere in due fasi. 1x con se/allora e 1x con gli orari nelle tariffe virtuali

Innanzitutto occorre definire le azioni "se".

- Elettricità di rete ed energia solare estate NT

    - Esempio: estate NT da lu a ve dalle 06h00 alle 22h00 da lu a ve e sa e do sempre

    - Nome: Uri Sommer NT

    - Azione se/allora con collegamento O (ODER)

        - Intervallo di tempo da lu a ve: dalle 6h00 alle 22h00 

        - Intervallo di tempo sa e do: dalle 00h00 alle 00h00




- Elettricità di rete ed energia solare estate HT

    - Esempio: estate HT da lu a ve dalle 22h00 alle 06h00

    - Nome: Uri Sommer HT

    - Azione se/allora

        - Intervallo di tempo da lu a ve: dalle 22h00 alle 06h00 




- Elettricità di rete ed energia solare inverno NT

    - Esempio: inverno NT da lu a ve dalle 22h00 alle 06h00 da lu a ve e sa e do sempre

    - Nome: Uri Winter NT

    - Azione se/allora con collegamento O (ODER)

        - Intervallo di tempo da lu a ve: dalle 22h00 alle 06h00 

        - Intervallo di tempo sa e do: dalle 00h00 alle 00h00




- Elettricità di rete ed energia solare inverno HT

    - Esempio: inverno HT da lu a ve dalle 06h00 alle 22h00

    - Nome: Uri Winter HT

    - Azione se/allora con collegamento O (ODER)

        - Intervallo di tempo da lu a ve: dalle 06h00 alle 22h00 


Poi occorre definire i prezzi per ciascun periodo.

In questo caso i periodi o la durata devono essere registrati. Con questo modello tariffario è necessaria una combinazione di se/allora e periodo.

- Nome: Uri Sommer HT Netz

    - Tipo: Tariffa di rete (Netztarif)

    - Durata: dal 1.4.2026 al 30.9.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer HT

- Nome: Uri Sommer HT Solar


- Tipo: Tariffa solare incl. vRCP (Solartarif inkl. vZEV) 

- Durata: dal 1.4.2026 al 30.9.2026

- Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer HT


- Nome: Uri Sommer NT Netz

    - Tipo: Tariffa di rete (Netztarif)

    - Durata: dal 1.4.2026 al 30.9.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer NT

- Nome: Uri Sommer NT Solar

    - Tipo: Tariffa solare incl. vRCP (bilancio/produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata: dal 1.4.2026 al 30.9.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer NT

- Nome: Uri Winter HT Netz

    - Tipo: Tariffa di rete (Netztarif)

    - Durata: dal 1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter HT 

- Nome: Uri Winter HT Solar

    - Tipo: Tariffa solare incl. vRCP (bilancio/produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata: dal 1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter HT

- Nome: Uri Winter NT Netz

    - Tipo: Tariffa di rete (Netztarif)

    - Durata: dal 1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter NT

- Nome: Uri Winter NT Solar

    - Tipo: Tariffa solare incl. vRCP (bilancio/produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata: dal 1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter NT 


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, Wiki Tarife Enerige Uri Tarife 2026.mp4" />

Wiki Tarife Enerige Uri Tarife 2026.mp4

</details>
