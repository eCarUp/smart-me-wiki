---
title: 'Public Key Signature'
slug: '/informationssicherheit/public-key-signature'
description: 'I contatori smart-me (a partire dalla versione 2.0) firmano digitalmente tutti i dati di misura e le transazioni.'
sidebar_label: 'Public Key Signature'
---
I contatori smart-me (a partire dalla versione 2.0) firmano digitalmente tutti i dati di misura e le transazioni. In questo modo è possibile verificare in qualsiasi momento l'autenticità dei valori misurati. A tale scopo smart-me utilizza il principio crittografico di una protezione end-to-end mediante una firma digitale basata sulla crittografia asimmetrica.

smart-me distingue tra due tipi di valori di misura firmati:

- Signed meter values: valori di misura firmati, che vengono salvati e firmati ogni 15 minuti. Ideali per il conteggio del consumo di energia.

- Signed transaction: le transazioni firmate sono pensate per i consumi di energia in un determinato periodo (ad es. la ricarica di veicoli elettrici). Hanno sempre un valore iniziale e un valore finale.


## Tecnologia / Procedura

Algoritmo di firma: ECDSA 256 Bit NIST curve (SECP256R1)

Algoritmo di hash: SHA256

### Procedura: produzione (certificata)

Durante la produzione del contatore viene generata una coppia di chiavi asimmetriche, che viene salvata sul contatore. La chiave pubblica (Public Key) viene inoltre salvata nel cloud, dove è accessibile pubblicamente.

### Procedura: firma dei valori di misura

- Ogni 15 minuti o al termine di una transazione viene creato un pacchetto di dati con i relativi valori di misura.

- Su questi dati viene calcolato un hash (SHA256).

- Questo hash viene cifrato (ECDSA 256) e salvato come firma.

- Il pacchetto di dati viene inviato al cloud insieme alla firma e lì salvato.


### Procedura: verifica dei valori di misura

- Il cliente riceve il pacchetto con i dati di misura tramite l'app, il web o una terza parte.

- Calcolo dell'hash (SHA256) sul pacchetto di dati.

- La Public Key di tutti i contatori smart-me è disponibile pubblicamente nel cloud (anche tramite API)

- Il cliente verifica l'hash del pacchetto di dati con la chiave pubblica.


### Pacchetti di dati

Per mantenere il più ridotte possibile le dimensioni del pacchetto di dati e quindi la quantità di dati necessaria per la trasmissione, smart-me utilizza "Google Protocol Buffers" come formato dei dati per i valori di misura. I pacchetti di dati sono strutturati come segue:

Signed meter values

```
message CounterValue {
  optional bytes Obis = 1;
  optional int64 Value = 2;
  optional string Unit = 3;
}

message MeasurementValues
{
 optional uint32 SerialNumber = 1;
 optional uint32 TimestampUtc = 2;
 repeated CounterValue Values = 3;
}
```

Measurement values

SerialNumber: il numero di serie del contatore (ad es. 6300000)
TimestampUtc: Unix Time Stamp (UTC) di questi dati di misura
Values: elenco di tutti i valori di misura (CounterValue) contenuti in questo pacchetto di dati.

CounterValue

Obis: codice OBIS del valore di misura (6 bytes). Ad es.
&#123; 0x01, 0x00, 0x01, 0x08, 0x01, 0xFF &#125; per 1-0:1.8.1\*255 (energia attiva prelievo tariffa 1)
Value: il valore di misura
Unit: l'unità del valore di misura. Per smart-me di solito mWh (milliwattora)

## Transazioni firmate

Le transazioni sono composte da un valore iniziale e da un valore finale.

```
message CounterValue {
  optional bytes Obis = 1;
  optional int64 Value = 2;
  optional string Unit = 3;
}

message MeasurementValues
{
 optional uint32 SerialNumber = 1;
 optional uint32 TimestampUtc = 2;
 repeated CounterValue Values = 3;
}

message Transaction
{
 optional uint32 SerialNumber = 1;
 optional uint32 TransactionNumber = 2;
 optional int64 UserId = 3;
 optional MeasurementValues StartValues = 4;
 optional MeasurementValues EndValues = 5;
}
```

Transazione
SerialNumber: il numero di serie del contatore (ad es. 6300000)
TransactionNumber: il numero della transazione. Questo numero aumenta a ogni transazione.
UserId: l'ID dell'utente che ha avviato questa transazione.
StartValues: i valori di misura all'inizio della transazione (vedi sopra)
EndValues: i valori di misura alla fine della transazione (vedi sopra)

## Esempio

Questo esempio mostra la validazione di una transazione firmata.

Pacchetto di dati (transazione)

```
awicMRCF/v//DyIvEOrEhuYFGhMKBgEAAQgA/xCj/MaiDhoDbVdoGhIKBgEAAggA/xCkiPkCGgNtV2gqLxDQyIbmBRoTCgYBAAEIAP8Qq7v9ow4aA21XaBoSCgYBAAIIAP8QpIj5AhoDbVdo

oder HEX:

6b 08 9c 31 10 85 fe ff ff 0f 22 2f 10 ea c4 86 e6 05 1a 13 0a 06 01 00 01 08 00 ff 10 a3 fc c6 a2 0e 1a 03 6d 57 68 1a 12 0a 06 01 00 02 08 00 ff 10 a4 88 f9 02 1a 03 6d 57 68 2a 2f 10 d0 c8 86 e6 05 1a 13 0a 06 01 00 01 08 00 ff 10 ab bb fd a3 0e 1a 03 6d 57 68 1a 12 0a 06 01 00 02 08 00 ff 10 a4 88 f9 02 1a 03 6d 57 68
```

Firma

```
V0EGJ3gHNbnUZ8hAfdRn2ziEVbnXpZ3a5L5WtG24XOWOeCBKH687W/wikxqK5e+Zad3R/PuCnQDNqgeSfh4pow==

oder HEX:

57 41 06 27 78 07 35 b9 d4 67 c8 40 7d d4 67 db 38 84 55 b9 d7 a5 9d da e4 be 56 b4 6d b8 5c e5 8e 78 20 4a 1f af 3b 5b fc 22 93 1a 8a e5 ef 99 69 dd d1 fc fb 82 9d 00 cd aa 07 92 7e 1e 29 a3
```

Public Key

```
RUNTMSAAAAAN48gSNbwl1Uj4DDvwO1wReZj95r19F5nqvy8pTmoUtyMBtf2HgwN6jf9+Akzp/nsy+BMrzAdvrjOD5wfYDGVk

oder HEX:

45 43 53 31 20 00 00 00 0d e3 c8 12 35 bc 25 d5 48 f8 0c 3b f0 3b 5c 11 79 98 fd e6 bd 7d 17 99 ea bf 2f 29 4e 6a 14 b7 23 01 b5 fd 87 83 03 7a 8d ff 7e 02 4c e9 fe 7b 32 f8 13 2b cc 07 6f ae 33 83 e7 07 d8 0c 65 64
```

Calcolare l'hash (SHA256) del pacchetto di dati:

SHA256(pacchetto di dati) = 52 2F 46 C6 26 70 17 32 B6 FD 4B 78 7E 31 5D 3B EE F0 F4 E3 42 66 4A D0 5F AB 95 74 F1 C1 3C 0C

Validare l'hash con la Public Key mediante ECDSA 256

OK

Deserializzare il pacchetto di dati: insieme alla definizione Protobuffer, il pacchetto di dati può essere deserializzato facilmente (esempio visualizzato come JSON):

```
{
   "SerialNumber":6300,
   "TransactionNumber":4294967045,
   "UserId":0,
   "StartValues":{
      "SerialNumber":null,
      "TimeStampUtc":1556193898,
      "CounterValues":[
         {
            "Obis":"AQABCAD/",
            "Value":3830562339,
            "Unit":"mWh"
         },
         {
            "Obis":"AQACCAD/",
            "Value":6177828,
            "Unit":"mWh"
         }
      ]
   },
   "EndValues":{
      "SerialNumber":null,
      "TimeStampUtc":1556194384,
      "CounterValues":[
         {
            "Obis":"AQABCAD/",
            "Value":3833552299,
            "Unit":"mWh"
         },
         {
            "Obis":"AQACCAD/",
            "Value":6177828,
            "Unit":"mWh"
         }
      ]
   }
}
```



Guida alla lettura

StartValues

TimeStampUtc 1556194384 = 25.04.2019 12:04 (UTC)

Valore di misura 1 Obis: AQABCAD/ = 01 00 01 08 00 ff = 1-0:1.8.0\*255 (energia attiva prelievo totale)

Valore di misura 1: valore 3830562339 mWh = 3830.562 kWh

Valore di misura 2 Obis: AQACCAD/ = 01 00 02 08 00 ff = 1-0:2.8.0\*255 (energia attiva immissione totale)

Valore di misura 2: valore 6177828 mWh = 6.177 kWh



EndValues

TimeStampUtc 1556194384 = 25.04.2019 12:13 (UTC)

Valore di misura 1 Obis: AQABCAD/ = 01 00 01 08 00 ff = 1-0:1.8.0\*255 (energia attiva prelievo totale)

Valore di misura 1: valore 3833552299 mWh = 3833.552 kWh

Valore di misura 2 Obis: AQACCAD/ = 01 00 02 08 00 ff = 1-0:2.8.0\*255 (energia attiva immissione totale)

Valore di misura 2: valore 6177828 mWh = 6.177 kWh



\-> Consumo di energia in questa transazione: 3833.552 kWh - 3830.562 kWh = 2.99 kWh
