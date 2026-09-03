---
title: 'Schemi di misura per soluzioni di alimentazione di emergenza'
slug: '/planung/Messkonzept-Notstromloesung'
description: 'Spieghiamo qui quali misure devono essere adottate per misurare correttamente una soluzione di alimentazione di emergenza, affinché possa essere utilizzata per il conteggio in smart-me Billing.'
sidebar_label: 'Schema di misura soluzione di alimentazione di emergenza'
---
Spieghiamo qui quali misure devono essere adottate per misurare correttamente una soluzione di alimentazione di emergenza, affinché possa essere utilizzata per il conteggio in smart-me Billing.

### Requisito

Ti serve un abbonamento smart-me Professional

### Requisiti

Questo schema di misura può essere utilizzato quando in un immobile viene impiegato un impianto di alimentazione di emergenza.

Partiamo dal presupposto che l'impianto di alimentazione di emergenza sia una scatola nera e che né il fotovoltaico né la batteria possano essere misurati sul lato AC all'interno del "dispositivo di alimentazione di emergenza".

Nota: se il produttore consente il montaggio di dispositivi all'interno del dispositivo di alimentazione di emergenza, puoi prevedere un normale schema di misura di smart-me e installare i contatori necessari direttamente nell'impianto di alimentazione di emergenza.

### Schema

Introduzione d'edificio (HAK), appartamento, servizi generali e riscaldamento vengono misurati secondo lo schema di misura generale (cerchio con un + nel cerchio).

Prima e dopo il dispositivo di alimentazione di emergenza viene installato un contatore al contrario (cerchio con un -1). Alimentazione di emergenza escl. solare e alimentazione di emergenza incl. solare.

Facoltativamente è possibile misurare un ulteriore impianto fotovoltaico tra i due contatori Alimentazione di emergenza escl. solare e Alimentazione di emergenza incl. solare.

![Schemi di misura per soluzioni di alimentazione di emergenza – Figura 1](/img/planung-messkonzept-notstromloesung/01.png)

### Schema di misura

Per misurare l'impianto di alimentazione di emergenza è necessario installare un contatore "al contrario" prima e dopo l'impianto stesso. Il contatore può essere collegato al contrario invertendo il passaggio dei cavi tra IN e OUT su L1, L2 e L3.

In questo caso un contatore prima della produzione e un contatore dopo la produzione vengono collegati "al contrario". (Secondo lo schema con contatore -1)

I due contatori Produzione "al contrario" comprendono di regola solo l'impianto di alimentazione di emergenza. È tuttavia possibile inserire un impianto fotovoltaico tra i contatori, se questo deve essere conteggiato allo stesso prezzo in smart-me Billing. (Produzione energia alternativa).

Inoltre è necessario un contatore virtuale, composto come segue:

Produzione (virtuale) = "Alimentazione di emergenza incl. solare" meno "Alimentazione di emergenza escl. solare" più "Contatore di bilancio"

![Schemi di misura per soluzioni di alimentazione di emergenza – Figura 2](/img/planung-messkonzept-notstromloesung/02.png)

### Billing

In Billing deve essere definita una tariffa batteria. Il contatore solare corrisponde al contatore virtuale definito "Produzione"

Tutte le ulteriori configurazioni possono essere inserite come di consueto.

![Schemi di misura per soluzioni di alimentazione di emergenza – Figura 3](/img/planung-messkonzept-notstromloesung/03.png)

### Verifica / spiegazione dei punti di misura

L'impianto può essere verificato assegnando in una cartella comune (ad es. Contatori tecnici) i contatori Bilancio, Consumo totale (virtuale), Alimentazione di emergenza escl. solare, Alimentazione di emergenza incl. solare e Produzione (virtuale).

Nota: l'impianto dovrebbe registrare dati per almeno 24 ore.

![Schemi di misura per soluzioni di alimentazione di emergenza – Figura 4](/img/planung-messkonzept-notstromloesung/04.png)

- Verificare se il contatore "Alimentazione di emergenza incl. solare" mostra un valore negativo.

- Verificare se il contatore "Alimentazione di emergenza escl. solare" mostra un valore negativo.

- Verificare se il contatore "Produzione (virtuale) presenta un valore negativo.

- Verificare se il contatore "Alimentazione di emergenza incl. solare" mostra un valore inferiore a "Alimentazione di emergenza escl. solare". Ad es. Alimentazione di emergenza escl. solare = -3.5 Watt e Alimentazione di emergenza incl. solare = -326.5 Watt


![Schemi di misura per soluzioni di alimentazione di emergenza – Figura 5](/img/planung-messkonzept-notstromloesung/05.png)

Vista quando la batteria non è ancora piena.

- Selezionare Contatori tecnici, riquadro Potenza, profilo di carico Consumi parziali

    - Bilancio (blu) e Consumo totale virtuale (rosso): di notte la curva è identica quando la batteria è scarica.

    - Bilancio (blu) e Alimentazione di emergenza escl. solare (giallo) hanno un andamento speculare.

    - Alimentazione di emergenza incl. solare (verde) e Produzione virtuale (viola): durante il giorno la curva è identica quando la batteria non è ancora piena.


![Schemi di misura per soluzioni di alimentazione di emergenza – Figura 6](/img/planung-messkonzept-notstromloesung/06.png)

Vista quando la batteria non è ancora piena.

### Limitazioni

- Montaggio di due contatori al contrario

- è necessario un contatore virtuale aggiuntivo per il conteggio

- è necessario un contatore virtuale aggiuntivo per il grafico (facoltativo)

- Non sono possibili contatori virtuali semplici (appartamento).

- Il grafico Monitoring può contenere un autoconsumo che si trova sotto la linea dello 0.

- Il grafico viene visualizzato correttamente solo se è presente un ulteriore contatore virtuale privo di contatore di bilancio. Secondo l'esempio sopra riportato, si tratterebbe di Produzione grafico (virtuale) = "Alimentazione di emergenza incl. solare" meno "Alimentazione di emergenza escl. solare"

- Il grafico viene visualizzato correttamente solo se è presente un ulteriore contatore virtuale privo di contatore di bilancio. Secondo l'esempio sopra riportato, si tratterebbe di Produzione grafico (virtuale) = "Alimentazione di emergenza incl. solare" meno "Alimentazione di emergenza escl. solare"


Non sono note ulteriori limitazioni.

Grafico Monitoring

Nel grafico Monitoring l'autoconsumo viene visualizzato sotto la linea dello 0 quando:

- La soluzione di alimentazione di emergenza richiede corrente di standby

- La soluzione di alimentazione di emergenza richiede corrente (ad es. riscaldamento o carica di calibrazione della batteria al sale con corrente di rete, perché sul lato DC è stata prodotta troppo poca corrente).


![Schemi di misura per soluzioni di alimentazione di emergenza – Figura 7](/img/planung-messkonzept-notstromloesung/07.png)
