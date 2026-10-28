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

Con una condizione aggiuntiva puoi definire da quando questa tariffa deve essere valida. Può trattarsi di un intervallo di tempo (ad es. per ore di punta / ore fuori punta) o di qualsiasi altra condizione. La condizione deve essere stata definita prima come [azione se/allora](/konfiguration/wenndann-aktionen). Gli esempi più comuni sono descritti di seguito.

Note:

- Dopo aver definito tutte le tariffe, devi assolutamente cliccare su Ricalcola (Neu rechnen). In questo modo tutte le tariffe virtuali vengono calcolate correttamente. Questa operazione può richiedere alcune ore.

</div>
<div className="col col--6">

<Video src="0LTDpKKA3-k" title="Video YouTube, conteggiare l'energia solare in ore di punta e fuori punta" />

</div>
</div>

### Interfaccia se / allora

![Definire le fasce tariffarie – Figura 2](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/02.png)

## Creare passo dopo passo una doppia tariffa

Consulta sul foglio tariffario gli orari delle ore di punta. Nel nostro esempio la situazione è la seguente:

<div className="row">
<div className="col col--6">

**Fascia HT (ore di punta):**

Lu- Ve: dalle 7:00 alle 22:00

Sa: dalle 7:00 alle 13:00

</div>
<div className="col col--6">

**Fascia NT (ore fuori punta):**

Lu-Ve: dalle 22:00 alle 7:00

Sa: dalle 13:00 alle 00:00

Do : tutto il giorno

</div>
</div>

### Creare la fascia HT

<div className="row">
<div className="col col--6">

Clicca sul "+" per creare un nuovo timing.

Seleziona il collegamento OR (Oder-Verknüpfung)

Funzione OR (ODER):

Se una delle condizioni SE (WENN) è soddisfatta, è fascia HT.

Negli eventi SE (WENN Ereignisse) clicca sul "+" per creare la fascia HT Lu-Ve.

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

Sotto gli eventi SE (WENN Ereignisse) clicca di nuovo su "+" per definire il sabato.

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

Clicca sul "+" per creare un nuovo timing.

Clicca su "+" per registrare un'ulteriore azione per la fascia NT

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

Clicca su "+" per definire il sabato

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

Clicca su "+" per definire la domenica ancora mancante

Seleziona Data e ora (Datum & Uhrzeit)

Per una tariffa ore fuori punta valida tutto il giorno la domenica, per la domenica si inserisce dalle 00:00 alle 00:00.

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

A seconda del modello tariffario della tua azienda elettrica, l'azione "se" ha un aspetto diverso. Espandi la struttura che corrisponde al tuo caso.

<details id="hoch-und-niedertarif-netzstrom-einheitstarif-solar">
<summary>Ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'elettricità solare</summary>

- Tariffa unica elettricità solare: definire la tariffa solare senza azione "se"

- Elettricità di rete ore di punta: definire la tariffa normale con azione "se"

    - Esempio. Lu-Ve dalle 7h00 alle 22h00 o Sa dalle 7h00 alle 13h00 

- Elettricità di rete ore fuori punta: definire la tariffa normale senza azione "se"


Logica: per prima cosa viene ripartita l'elettricità solare disponibile. Se ce n'è troppo poca o nessuna, viene utilizzata la tariffa normale che soddisfa una condizione. Infine, per l'elettricità rimanente viene applicata la tariffa senza condizione.

</details>

<details id="hoch-und-niedertarif-netz-und-solarstrom">
<summary>Ore di punta e ore fuori punta per l'elettricità di rete e l'elettricità solare</summary>

- Elettricità solare ore di punta: definire la tariffa solare con azione "se"

    - Esempio: Lu-Ve dalle 7h00 alle 22h00 o Sa dalle 7h00 alle 13h00 

- Elettricità solare ore fuori punta: definire la tariffa solare con azione "se"

    - Esempio: Lu-Ve dalle 22h00 alle 7h00 o Sa dalle 13h00 alle 7h00 o Do dalle 0h00 alle 0h00

- Elettricità di rete ore di punta: definire la tariffa normale con azione "se"

    - Utilizzare la stessa azione "se" della tariffa ore di punta per l'elettricità solare 

- Elettricità di rete ore fuori punta: definire la tariffa normale con azione "se"

    - Utilizzare la stessa azione "se" della tariffa ore fuori punta per l'elettricità solare 


Logica: per prima cosa viene utilizzata l'elettricità solare disponibile con la condizione valida. Se ce n'è troppo poca o nessuna, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24 ore al giorno siano coperte da una condizione "se".

</details>

<details id="sommer-winter-netzstrom-einheitstarif-solar">
<summary>Estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e tariffa unica per l'elettricità solare</summary>

- Elettricità solare ore di punta: definire la tariffa solare senza azione "se"

- Elettricità di rete ore di punta estate: definire la tariffa normale con azione "se"

    - Esempio: Intervallo di tempo Ogni giorno (Zeitspanne Jeden Tag): Lu-Do dalle 7h00 alle 22h00 e Intervallo di tempo Ogni anno (Zeitspanne Jedes Jahr) da 1 / 04 / 00:00 a 1 / 10 / 00:00.

- Elettricità di rete ore fuori punta estate: definire la tariffa normale con azione "se"

    - Esempio: Intervallo di tempo Ogni giorno (Zeitspanne Jeden Tag): Lu-Do dalle 22h00 alle 07h00 e Intervallo di tempo Ogni anno (Zeitspanne Jedes Jahr) da 1 / 04 / 00:00 a 1 / 10 / 00:00.

- Elettricità di rete ore di punta inverno: definire la tariffa normale con azione "se"

    - Esempio: Intervallo di tempo Ogni giorno (Zeitspanne Jeden Tag): Lu-Do dalle 7h00 alle 22h00 e Intervallo di tempo Ogni anno (Zeitspanne Jedes Jahr) da 1 / 10 / 00:00 a 1 / 4 / 00:00.

- Elettricità di rete ore fuori punta inverno: definire la tariffa normale con azione "se"

    - Esempio: Intervallo di tempo Ogni giorno (Zeitspanne Jeden Tag): Lu-Do dalle 22h00 alle 07h00 e Intervallo di tempo Ogni anno (Zeitspanne Jedes Jahr) da 1 / 10 / 00:00 a 1 / 4 / 00:00.


Logica: per prima cosa viene utilizzata l'elettricità solare disponibile. Se ce n'è troppo poca o nessuna, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24 ore al giorno siano coperte da una condizione "se".

</details>

<details id="sommer-winter-mit-mittagsniedertarif-im-winter">
<summary>Estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete, tariffa unica per l'elettricità solare e ore fuori punta a mezzogiorno solo in inverno (ad es. EWS/EBS)</summary>

Esempio

- Elettricità di rete e solare ore fuori punta inverno 

    - Esempio: inverno NT dalle 22h00 alle 07h00 tra l'1.10 e l'1.4.

    - Azione se/allora con collegamento AND (UND Verknüpfung)

        - Intervallo di tempo Ogni giorno (Zeitspanne Jeden Tag): Lu-Do dalle 22h00 alle 07h00 

        - Intervallo di tempo Ogni anno (Zeitspanne Jedes Jahr) da 1 / 10 / 00:00 a 1 / 04 / 00:00.

- Elettricità di rete e solare ore di punta inverno 

    - Esempio: inverno HT dalle 07h00 alle 22h00 tra l'1.10 e l'1.4.

    - Azione se/allora con collegamento AND (UND Verknüpfung)

        - Intervallo di tempo Ogni giorno (Zeitspanne Jeden Tag): Lu-Do dalle 7h00 alle 22h00 

        - Intervallo di tempo Ogni anno (Zeitspanne Jedes Jahr) da 1 / 10 / 00:00 a 1 / 04 / 00:00.

- Elettricità di rete e solare ore fuori punta estate

    - Esempio: estate NT dalle 00h00 alle 06h00 e dalle 12h00 alle 15h00 tra l'1.4 e l'1.10

    - Azione se/allora con collegamento AND (UND Verknüpfung)

        - Intervallo di tempo Ogni giorno (Zeitspanne Jeden Tag): Lu-Do dalle 12h00 alle 06h00 

        - Intervallo di tempo Ogni giorno (Zeitspanne Jeden Tag): Lu-Do dalle 00h00 alle 15h00 

        - Intervallo di tempo Ogni anno (Zeitspanne Jedes Jahr) da 1 / 4 / 00:00 a 1 / 10 / 00:00.

- Elettricità di rete e solare ore di punta estate 

    - Esempio: estate HT dalle 06h00 alle 12h00 e dalle 15h00 alle 00h00 tra l'1.4 e l'1.10

    - Azione se/allora con collegamento AND (UND Verknüpfung)

        - Intervallo di tempo Ogni giorno (Zeitspanne Jeden Tag): Lu-Do dalle 06h00 alle 00h00 

        - Intervallo di tempo Ogni giorno (Zeitspanne Jeden Tag): Lu-Do dalle 15h00 alle 12h00 

        - Intervallo di tempo Ogni anno (Zeitspanne Jedes Jahr) da 1 / 4 / 00:00 a 1 / 10 / 00:00.


Logica: per prima cosa viene utilizzata l'elettricità solare disponibile. Se ce n'è troppo poca o nessuna, viene utilizzata la tariffa normale con la condizione valida. In questo caso d'uso è importante che le 24 ore al giorno siano coperte da una condizione "se".

</details>

<details id="sommer-winter-tagsueber-wechselnd-energie-uri">
<summary>Estate e inverno con ore di punta e ore fuori punta per l'elettricità di rete e solare, di giorno ore fuori punta in estate e ore di punta in inverno (ad es. Energie Uri dall'1.10.2025)</summary>

Descrizione: qui occorre procedere in due fasi. 1x con se/allora e 1x con gli orari nelle tariffe virtuali

Per prima cosa occorre definire le azioni "se".

- Elettricità di rete e solare estate NT

    - Esempio: estate NT Lu-Ve dalle 06h00 alle 22h00 Lu-Ve e Sa e Do sempre

    - Nome: Uri Sommer NT

    - Azione se/allora con collegamento OR (ODER Verknüpfung)

        - Intervallo di tempo Lu-Ve: dalle 6h00 alle 22h00 

        - Intervallo di tempo Sa e Do: dalle 00h00 alle 00h00




- Elettricità di rete e solare estate HT

    - Esempio: estate HT Lu-Ve dalle 22h00 alle 06h00

    - Nome: Uri Sommer HT

    - Azione se/allora

        - Intervallo di tempo Lu-Ve: dalle 22h00 alle 06h00 




- Elettricità di rete e solare inverno NT

    - Esempio: inverno NT Lu-Ve dalle 22h00 alle 06h00 Lu-Ve e Sa e Do sempre

    - Nome: Uri Winter NT

    - Azione se/allora con collegamento OR (ODER Verknüpfung)

        - Intervallo di tempo Lu-Ve: dalle 22h00 alle 06h00 

        - Intervallo di tempo Sa e Do: dalle 00h00 alle 00h00




- Elettricità di rete e solare inverno HT

    - Esempio: inverno HT Lu-Ve dalle 06h00 alle 22h00

    - Nome: Uri Winter HT

    - Azione se/allora con collegamento OR (ODER Verknüpfung)

        - Intervallo di tempo Lu-Ve: dalle 06h00 alle 22h00 


Poi occorre definire i prezzi per ciascun periodo.

In questo caso i periodi ovvero la durata devono essere registrati. Con questo modello tariffario è necessaria una combinazione di se/allora e periodo.

- Nome: Uri Sommer HT Netz

    - Tipo (Type): Tariffa di rete (Netztarif)

    - Durata (Dauer): dall'1.4.2026 al 30.9.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer HT

- Nome: Uri Sommer HT Solar


- Tipo (Type): Tariffa solare incl. vZEV (Solartarif inkl. vZEV) 

- Durata (Dauer): dall'1.4.2026 al 30.9.2026

- Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer HT


- Nome: Uri Sommer NT Netz

    - Tipo (Type): Tariffa di rete (Netztarif)

    - Durata (Dauer): dall'1.4.2026 al 30.9.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer NT

- Nome: Uri Sommer NT Solar

    - Tipo (Type): Tariffa solare incl. vZEV (Bilancio/Produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata (Dauer): dall'1.4.2026 al 30.9.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Sommer NT

- Nome: Uri Winter HT Netz

    - Tipo (Type): Tariffa di rete (Netztarif)

    - Durata (Dauer): dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter HT 

- Nome: Uri Winter HT Solar

    - Tipo (Type): Tariffa solare incl. vZEV (Bilancio/Produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata (Dauer): dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter HT

- Nome: Uri Winter NT Netz

    - Tipo (Type): Tariffa di rete (Netztarif)

    - Durata (Dauer): dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter NT

- Nome: Uri Winter NT Solar

    - Tipo (Type): Tariffa solare incl. vZEV (Bilancio/Produzioni) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durata (Dauer): dall'1.10.2025 al 31.3.2026

    - Condizione aggiuntiva (Zusätzliche Bedingung): Uri Winter NT 


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, Wiki Tarife Enerige Uri Tarife 2026.mp4" />

Wiki Tarife Enerige Uri Tarife 2026.mp4

</details>
