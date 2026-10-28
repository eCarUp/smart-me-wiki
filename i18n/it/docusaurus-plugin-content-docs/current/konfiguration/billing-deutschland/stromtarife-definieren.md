---
title: 'Definire le tariffe elettriche (Germania)'
slug: '/konfiguration/billing-deutschland/stromtarife-definieren'
description: 'Tariffe virtuali per l''elettricità per gli inquilini in Germania: tariffa solare incl. RCP virtuale (vRCP) oppure tariffa solare su consumo e PV, con o senza tariffa batteria.'
sidebar_label: 'Definire le tariffe elettriche'
naechste_schritte: [konfiguration/billing-deutschland/sonstige-kosten]
optionale_schritte: [konfiguration/wenndann-aktionen/tarifzeiten-definieren]
vorheriger_schritt: konfiguration/billing-deutschland/mieterspiegel-erfassen
---
<Menueweg>Fatturazione → Immobili & tariffe</Menueweg>

Con l'elettricità per gli inquilini si deve **sempre lavorare con tariffe virtuali**. Solo così è possibile indicare per ogni unità di conteggio quale quota dell'elettricità proviene dall'impianto solare e quale dalla rete — ed è esattamente ciò che richiede il conteggio secondo il § 42 EnWG.

## Dove trovi le tariffe

<Menueweg>Fatturazione → Immobili & tariffe</Menueweg>

- A sinistra seleziona l'immobile (cartella principale, ad es. Altgasse 13)
- Aggiungi le tariffe elettriche virtuali. (ad es. ore di punta, ore fuori punta, tariffa solare)


## Procurati il foglio tariffario del tuo fornitore di energia


## Inserimento della tariffa di rete


## Calcolo e inserimento delle tariffe solari e della batteria

### Configurare le tariffe elettriche – schema di misura standard

#### Tariffazione con tariffa solare incl. RCP virtuale (vRCP)

Il contatore di bilancio viene referenziato per il calcolo della tariffazione.

Utilizzando la tariffa solare incl. vRCP non sono dovute licenze aggiuntive per contatori virtuali.

**Contatore di bilancio**

Il contatore dell'allacciamento dell'edificio viene referenziato come contatore di bilancio.

![Schema di misura standard – figura 2](/img/planung-standard-messkonzept/02.png)

**Contatore di produzione**

Tutti i contatori di produzione e i contatori della batteria vengono registrati come produzione.

![Schema di misura standard – figura 3](/img/planung-standard-messkonzept/03.png)

#### Tariffazione mediante tariffa solare (consumo / PV) con o senza tariffa batteria (consumo / batteria)

- Il contatore di bilancio viene ignorato per il calcolo della tariffazione; viene considerato in seguito solo a scopo di verifica.

- Utilizzando la tariffa solare /consumo /PV) sono dovute licenze aggiuntive per contatori virtuali.

- È necessario almeno il consumo totale. Questo viene creato come contatore virtuale composto da tutte le partenze partecipanti all'elettricità per gli inquilini.

Consumo totale = Appartamento 1.1 + Appartamento 1.2 + Appartamento 2.1 + Parti comuni + Parcheggio 1 + Parcheggio 2 + Pompa di calore

- Sotto Produzione si aggiunge di volta in volta il contatore dell'impianto solare oppure, per la tariffa batteria, il contatore della batteria.

- Per il consumo totale si inserisce il consumo totale creato virtualmente.

- Qui il contatore di bilancio viene referenziato di proposito per aumentare la precisione!

![Schema di misura standard – figura 4](/img/planung-standard-messkonzept/04.png)


### Configurare le tariffe elettriche – MKD3 con non partecipanti

#### Tariffazione con tariffa solare incl. RCP virtuale (vRCP)

Il contatore di bilancio viene ignorato per il calcolo della tariffazione; viene considerato in seguito solo a scopo di verifica.

Utilizzando la tariffa solare incl. vRCP non sono dovute licenze aggiuntive per contatori virtuali.

Contatore di bilancio

Tutti gli appartamenti / i parcheggi partecipanti e le produzioni come contatori di bilancio.

![Schema di misura MKD3 (con non partecipanti) – figura 2](/img/planung-mkd3-messkonzept-nicht-teilnehmer/02.png)

Contatore di produzione

Registrare tutti i contatori di produzione come produzione


![Schema di misura MKD3 (con non partecipanti) – figura 3](/img/planung-mkd3-messkonzept-nicht-teilnehmer/03.png)

#### Tariffazione mediante tariffa solare (consumo / PV) con o senza tariffa batteria (consumo / batteria)

Il contatore di bilancio viene ignorato per il calcolo della tariffazione; viene considerato in seguito solo a scopo di verifica.

Utilizzando la tariffa solare /consumo /PV) sono dovute licenze aggiuntive per contatori virtuali.

È necessario almeno il consumo totale. Questo viene creato come contatore virtuale composto da tutte le partenze partecipanti all'elettricità per gli inquilini.

Consumo totale = Appartamento 1.1 + Appartamento 1.2 + Parti comuni + Parcheggio 1 + Parcheggio 2 + Pompa di calore

Sotto Produzione si aggiunge di volta in volta il contatore dell'impianto solare oppure, per la tariffa batteria, il contatore della batteria.

Per il consumo totale si inserisce il consumo totale creato virtualmente.

Il contatore di bilancio di proposito non viene referenziato, per non correggere in modo errato il bilanciamento virtuale!

![Schema di misura MKD3 (con non partecipanti) – figura 4](/img/planung-mkd3-messkonzept-nicht-teilnehmer/04.png)



### Definizione delle componenti tariffarie per tipo di elettricità

Più in basso, alla voce "Altro" ("Sonstiges"), puoi definire le componenti tariffarie per tipo di elettricità (rete e solare). Lo scopo è mostrare al cliente finale come si compone il suo prezzo dell'elettricità. Devi farlo sia per l'elettricità di rete sia per l'elettricità solare. Le componenti devono dare complessivamente il prezzo da te definito per ciascun tipo di elettricità (che hai stabilito nelle [tariffe virtuali](/konfiguration/billing)), altrimenti il Billing restituisce un messaggio di errore.

![smart-me Billing per l'elettricità per gli inquilini in Germania – figura 8](/img/konfiguration-billing-mieterstrom/08.png)

Puoi inserire direttamente le componenti tariffarie standard per l'elettricità per gli inquilini oppure registrare singole componenti tariffarie tramite "Modifica" ("Editieren").

Importante: durante la modifica seleziona il tipo corretto, ovvero specifica se si tratta di una componente tariffaria dell'elettricità di rete (elettricità residua) o dell'elettricità solare.


Importante: le indicazioni sulla composizione delle componenti per l'elettricità di rete (elettricità residua) le ottieni dal fornitore di elettricità residua da te scelto.

L'elettricità solare è composta di solito solo dal contributo EEG (EEG-Umlage) e dal prezzo di produzione.

![smart-me Billing per l'elettricità per gli inquilini in Germania – figura 9](/img/konfiguration-billing-mieterstrom/09.png)

Una configurazione completa può presentarsi così:

![smart-me Billing per l'elettricità per gli inquilini in Germania – figura 10](/img/konfiguration-billing-mieterstrom/10.png)

A questo punto hai effettuato tutte le impostazioni a livello di immobile.
