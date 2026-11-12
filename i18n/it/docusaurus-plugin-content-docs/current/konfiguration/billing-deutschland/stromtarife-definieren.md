---
title: 'Definire le tariffe elettriche (Germania)'
slug: '/konfiguration/billing-deutschland/stromtarife-definieren'
description: 'Tariffe virtuali per l''elettricità per gli inquilini in Germania: tariffa solare incl. RCP virtuale (vRCP) oppure tariffa solare su consumo e FV, con o senza tariffa batteria.'
sidebar_label: 'Definire le tariffe elettriche'
naechste_schritte: [konfiguration/billing-deutschland/sonstige-kosten]
optionale_schritte: [konfiguration/wenndann-aktionen/tarifzeiten-definieren]
vorheriger_schritt: konfiguration/billing-deutschland/mieterspiegel-erfassen
---
<Menueweg>Fatturazione → Immobili & tariffe</Menueweg>

Per l'elettricità per gli inquilini occorre **sempre lavorare con tariffe virtuali**. Solo così è possibile indicare per ogni unità di conteggio quale quota dell'elettricità proviene dall'impianto solare e quale dalla rete — ed è esattamente ciò che richiede il conteggio secondo il § 42 EnWG.

## Dove trovare le tariffe

<Menueweg>Fatturazione → Immobili & tariffe</Menueweg>

- A sinistra selezioni l'immobile (cartella principale, ad es. Altgasse 13)
- Aggiunga le tariffe elettriche virtuali. (ad es. ore di punta, ore fuori punta, tariffa solare)


## Si procuri il foglio tariffario del Suo fornitore di energia


## Inserimento della tariffa di rete


## Calcolo e inserimento delle tariffe solari e batteria

### Configurare le tariffe elettriche con lo schema di misura standard

#### Tariffazione con tariffa solare incl. RCP virtuale (vRCP)

Il contatore di bilancio viene referenziato per il calcolo della tariffazione.

Utilizzando la tariffa solare incl. vRCP non sono dovute licenze aggiuntive per contatori virtuali.

**Contatore di bilancio**

Il contatore dell'allacciamento dell'edificio viene referenziato come contatore di bilancio.

![Definire le tariffe elettriche (Germania) – Figura 1](/img/konfiguration-billing-deutschland-stromtarife-definieren/01.png)

**Contatore di produzione**

Tutti i contatori di produzione e i contatori della batteria vengono registrati come produzione.

![Definire le tariffe elettriche (Germania) – Figura 2](/img/konfiguration-billing-deutschland-stromtarife-definieren/02.png)

#### Tariffazione mediante tariffa solare (consumo / FV) con o senza tariffa batteria (consumo / batteria)

- Il contatore di bilancio viene ignorato per il calcolo della tariffazione; in seguito viene considerato solo a scopo di verifica.

- Utilizzando la tariffa solare (consumo / FV) sono dovute licenze aggiuntive per contatori virtuali.

- È necessario almeno il consumo totale. Questo viene creato come contatore virtuale composto da tutte le partenze partecipanti all'elettricità per gli inquilini.

Consumo totale = Appartamento 1.1 + Appartamento 1.2 + Appartamento 2.1 + Parti comuni + Parcheggio 1 + Parcheggio 2 + Pompa di calore

- Sotto produzione viene aggiunto di volta in volta il contatore dell'impianto solare o, per la tariffa batteria, il contatore della batteria.

- Per il consumo totale viene indicato il consumo totale creato virtualmente.

- Qui il contatore di bilancio viene referenziato di proposito per aumentare la precisione!

![Definire le tariffe elettriche (Germania) – Figura 3](/img/konfiguration-billing-deutschland-stromtarife-definieren/03.png)


### Configurare le tariffe elettriche MKD3 con non partecipanti

#### Tariffazione con tariffa solare incl. RCP virtuale (vRCP)

Il contatore di bilancio viene ignorato per il calcolo della tariffazione; in seguito viene considerato solo a scopo di verifica.

Utilizzando la tariffa solare incl. vRCP non sono dovute licenze aggiuntive per contatori virtuali.

Contatore di bilancio

Tutti gli appartamenti / parcheggi e le produzioni partecipanti come contatori di bilancio.

![Definire le tariffe elettriche (Germania) – Figura 4](/img/konfiguration-billing-deutschland-stromtarife-definieren/04.png)

Contatore di produzione

Registrare tutti i contatori di produzione come produzione


![Definire le tariffe elettriche (Germania) – Figura 5](/img/konfiguration-billing-deutschland-stromtarife-definieren/05.png)

#### Tariffazione mediante tariffa solare (consumo / FV) con o senza tariffa batteria (consumo / batteria)

Il contatore di bilancio viene ignorato per il calcolo della tariffazione; in seguito viene considerato solo a scopo di verifica.

Utilizzando la tariffa solare (consumo / FV) sono dovute licenze aggiuntive per contatori virtuali.

È necessario almeno il consumo totale. Questo viene creato come contatore virtuale composto da tutte le partenze partecipanti all'elettricità per gli inquilini.

Consumo totale = Appartamento 1.1 + Appartamento 1.2 + Parti comuni + Parcheggio 1 + Parcheggio 2 + Pompa di calore

Sotto produzione viene aggiunto di volta in volta il contatore dell'impianto solare o, per la tariffa batteria, il contatore della batteria.

Per il consumo totale viene indicato il consumo totale creato virtualmente.

Il contatore di bilancio di proposito non viene referenziato, per non correggere in modo errato il bilancio virtuale!

![Definire le tariffe elettriche (Germania) – Figura 6](/img/konfiguration-billing-deutschland-stromtarife-definieren/06.png)



### Definizione delle componenti tariffarie per tipo di elettricità

Più in basso, alla voce "Altro" ("Sonstiges"), può definire le componenti tariffarie per tipo di elettricità (rete e solare). Lo scopo è mostrare al cliente finale come si compone il suo prezzo dell'elettricità. Deve farlo sia per l'elettricità di rete sia per l'elettricità solare. Le componenti, sommate, devono corrispondere al prezzo da Lei definito per ciascun tipo di elettricità (stabilito nelle [tariffe virtuali](/konfiguration/billing)), altrimenti il Billing Le restituisce un messaggio di errore.

![smart-me Billing per l'elettricità per gli inquilini in Germania – Figura 8](/img/konfiguration-billing-mieterstrom/08.png)

Può inserire direttamente le componenti tariffarie standard per l'elettricità per gli inquilini oppure registrare singole componenti tariffarie tramite "Modifica" ("Editieren").

Importante: durante la modifica selezioni il tipo corretto, ovvero specifichi se si tratta di una componente tariffaria dell'elettricità di rete (elettricità residua) o dell'elettricità solare.


Importante: le indicazioni sulla composizione delle componenti per l'elettricità di rete (elettricità residua) Le vengono fornite dal fornitore di elettricità residua da Lei scelto.

L'elettricità solare è composta di norma solo da EEG-Umlage e prezzo di produzione.

![smart-me Billing per l'elettricità per gli inquilini in Germania – Figura 9](/img/konfiguration-billing-mieterstrom/09.png)

Una configurazione completa può presentarsi così:

![smart-me Billing per l'elettricità per gli inquilini in Germania – Figura 10](/img/konfiguration-billing-mieterstrom/10.png)

A questo punto ha effettuato tutte le impostazioni a livello di immobile.
