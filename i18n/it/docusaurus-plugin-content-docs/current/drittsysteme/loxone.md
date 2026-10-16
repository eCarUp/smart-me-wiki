---
title: 'Loxone'
slug: '/drittsysteme/loxone'
description: 'Utilizzare i contatori smart-me in Loxone'
sidebar_label: 'Loxone'
---
## Utilizzare i contatori smart-me in Loxone

## Integrazione tramite Modbus

Il template offre la possibilità di leggere i dati del contatore direttamente dal contatore

- Requisito: [Modbus TCP](/schnittstellen/modbus-tcp) deve essere attivato sul contatore. L'IP o il nome DNS del contatore deve essere inserito nel template.

- [Loxone Library](https://library.loxone.com/vendor/smart-me-1505)


![Loxone – Figura 1](/img/drittsysteme-loxone/01.jpg)

## Integrazione tramite API - Basic Auth (obsoleta)

Il template offre la possibilità di leggere i dati del contatore dal nostro cloud e di comandare le uscite digitali.

Nota: Basic Auth verrà disattivata per soddisfare i crescenti requisiti di sicurezza.

Possibile solo fino a novembre 2026 (fino alla v.1.0.2)

- [Loxone Library](https://library.loxone.com/vendor/smart-me-1505)

- [Documentazione API](/schnittstellen/api)


Nel template, prima dell'URL della chiamata API devono figurare il nome utente e la password dell'account. Il nome utente deve essere impostato a seconda dei casi da smart-me.

## Integrazione tramite API - API-Keys (consigliata)

Il template offre la possibilità di leggere i dati del contatore dal nostro cloud e di comandare le uscite digitali.

Nota: Loxone non offre un modo più semplice per gestire le API-Keys. La procedura descritta di seguito è stata elaborata insieme a Loxone. Le API-Keys sono state introdotte per soddisfare i crescenti requisiti di sicurezza.

a partire dalla versione 1.0.3

- [Loxone Library](https://library.loxone.com/vendor/smart-me-1505)

- [Documentazione API](/schnittstellen/api)


### 1. Creare una API Key nel portale smart-me.


Login nel portale smart-me --> menu Interfacce (Schnittstellen) --> API  --> In alto nel banner arancione cliccare sul "Link" -->  "Crea nuovo" ("Neu erstellen").

- Assegnare una denominazione alla API Key, ad es. Loxone, 
- Impostare la data di scadenza
- Impostare le autorizzazioni. Per Loxone è sufficiente "device.readswitch" (se il browser lo traduce automaticamente in tedesco, utilizzare "Gerät.LesenSchalten") 
- Creare
- Copiare la API Key.  Attenzione: in seguito la Key non potrà più essere richiamata.
- La API-Key sarà necessaria in seguito.


In generale: Ulteriori informazioni sulle autorizzazioni: [API](/schnittstellen/api) 

![Loxone – Figura 2](/img/drittsysteme-loxone/02.png)

![Loxone – Figura 3](/img/drittsysteme-loxone/03.png)

### 2\. Ottenere la DeviceID del contatore smart-me

Se l'account è Professional, la DeviceID può essere ottenuta molto facilmente 

1.  Menu Sistema (System) --> Stato del sistema (Systemgesundheit)
2.  Cercare i dispositivi (Geräte suchen)
3.  L'ID del dispositivo verrà utilizzato in seguito. ad es. 61c71d00-3d40-4963-745b2-7c6b0c512gf3

Se l'account non è dotato di licenza, la DeviceID deve essere ottenuta tramite l'API.
1.  Premere il tasto Windows e digitare "cmd".
2\. Aprire il prompt dei comandi
3\. Copiare il seguente comando nel campo di immissione. 

**Attenzione:** Adattare l'ApiKey.  

curl -X "GET" "https://api.smart-me.com/Devices" -H "accept: \*/\*" -H "Authorization: ApiKey n9CUnYCGmTOQZCCX1iHRqrF5Erzx9pUu" 

4\. Nella risposta cercare il nome del contatore e copiare l'Id.

![Loxone – Figura 4](/img/drittsysteme-loxone/04.png)

### 3\. Configurare l'uscita virtuale in Loxone

- Scaricare il template dalla Loxone Library (VO\_XXXX). (Vedi link più sopra)
- Nell'albero di Loxone / Periferia (Peripherie) cliccare su Uscite virtuali (Virtuelle Ausgänge)
- In alto nel menu di Loxone, sotto "Dispositivi predefiniti" ("Vordefinierte Geräte"), caricare lo smart-me Request.
- Appare una nuova uscita virtuale; cliccare lì sul comando "Meter".
- Nel campo "Comando per ON" ("Befehl bei EIN") occorre sostituire &lt;meter.id\> con l'ID del dispositivo.
- Nel campo "HTTP header per ON" ("HTTP header bei EIN") occorre sostituire &lt;apikey> con la API-Key. Nota: la API-Key può essere la stessa per ogni contatore dello stesso account.

![Loxone – Figura 5](/img/drittsysteme-loxone/05.png)

![Loxone – Figura 6](/img/drittsysteme-loxone/06.png)

- Nel campo "Salva risposta HTTP" ("HTTP-Antwort speichern") occorre adattare il testo smartmeapi.html.
- Il nome deve essere individuale per ogni uscita (quindi per ogni contatore). 
    - ad es. bilanz.html per il contatore di bilancio user/common/bilanz.html 

![Loxone – Figura 7](/img/drittsysteme-loxone/07.png)

### 4\. Configurare l'ingresso virtuale in Loxone

- Selezionare le proprietà del Loxone Mini Server. Lì si trovano il nome host o l'indirizzo IP del Miniserver. Questo è necessario per l'ulteriore configurazione.

![Loxone – Figura 8](/img/drittsysteme-loxone/08.png)

- Scaricare il template dalla Loxone Library (VI\_XXXX).
- Sotto "Dispositivi HTTP predefiniti" ("Vordefinierte HTTP-Geräte") caricare lo smart-me meter.
- Appare un nuovo ingresso virtuale
- Cliccare sull'ingresso "smart-me meter".
- Nel campo "URL" occorre adattare i seguenti elementi.
    - Dati di accesso del Loxone Miniserver
    - Nome host o IP del Loxone Mini Server
    - Nome del file HTML memorizzato. Per lo stesso comando è necessario lo stesso nome indicato sopra. ad es. bilanz.html. 

- Esempio di un comando:

    [https://admin:sicheres\_admin\_passwort@127.0.0.1/bilanz.html](https://admin:sicheres_admin_passwort@127.0.0.1/bilanz.html)

- [https://admin:sicheres\_admin\_passwort@MSC29Z/bilanz.html](https://admin:sicheres_admin_passwort@127.0.0.1/bilanz.html) 

![Loxone – Figura 9](/img/drittsysteme-loxone/09.png)

### 5\. Collegare il generatore di impulsi all'uscita virtuale

Se non si utilizza l'Example Meter, il "Comando uscita virtuale" ("Virtuelle Ausgang Befehl") deve essere comandato tramite un generatore di impulsi.

![Loxone – Figura 10](/img/drittsysteme-loxone/10.png)

![Loxone – Figura 11](/img/drittsysteme-loxone/11.png)

![Loxone – Figura 12](/img/drittsysteme-loxone/12.png)

## Utilizzare i contatori Loxone in smart-me

Il modulo offre la possibilità di inviare i dati del contatore al nostro cloud.

- [Loxone Library (da Loxone a smart-me)](https://library.loxone.com/detail/smart-me-cloud-1764/overview)

Importante: questo modulo non è sviluppato da smart-me. Non offriamo alcun supporto per esso. Le conoscenze necessarie per utilizzare questo modulo devono essere acquisite autonomamente e, dal nostro punto di vista, sono destinate a utenti Loxone avanzati.

Queste istruzioni offrono solo una breve panoramica su come creare un punto di misura, operazione che non avviene tramite il modulo Loxone.

1.  Creare una API Key nel portale smart-me con i claims: device.readwrite e user.readwrite (è necessaria una sola Key per account, non una per ogni contatore)

2.  Eseguire la seguente chiamata (modificare prima i campi (ApiKey & Name))
    Con Power-Shell:
    curl -i -X 'POST' 'https://api.smart-me.com/Devices' -H 'accept: text/plain' -H 'Authorization: ApiKey &lt;apikey>' -H 'Content-Type: application/json-patch+json' -d '&#123;"activePower": 0, "counterReading": 0, "counterReadingExport": 0, "valueDate": "2025-07-08T08:15:55.026Z", "name": "Loxone Beispiel", "deviceEnergyType": 1&#125;'

    Con Windows CMD (DOS):
    curl -i -X POST "https://api.smart-me.com/Devices" -H "accept: text/plain" -H "Authorization: ApiKey &lt;apikey> " -H "Content-Type: application/json" -d "&#123;\\"activePower\\": 0, \\"counterReading\\": 0, \\"counterReadingExport\\": 0, \\"valueDate\\": \\"2025-12-05T00:00:00.000Z\\", \\"name\\": \\"Loxone Beispiel\\", \\"deviceEnergyType\\": 1&#125;"

3.  Prendere l'UUID del contatore dalla risposta (Response).
    Alternativa 1: ottenere l'UUID da Stato del sistema (Systemgesundheit) nella dashboard
    Alternativa 2: utilizzare [https://api.smart-me.com/Devices](https://api.smart-me.com/Devices) GET per ottenere tutti gli ID.

4.  Questi dati devono essere inseriti nella Loxone Library.

In sintesi, è stato così creato tramite l'API un contatore che può poi essere utilizzato in Loxone.
