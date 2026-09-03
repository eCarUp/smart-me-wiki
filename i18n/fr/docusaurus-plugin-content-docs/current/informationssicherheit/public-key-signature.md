---
title: 'Public Key Signature'
slug: '/informationssicherheit/public-key-signature'
description: 'Les compteurs smart-me (à partir de la version 2.0) signent numériquement toutes les données de mesure et toutes les transactions.'
sidebar_label: 'Public Key Signature'
---
Les compteurs smart-me (à partir de la version 2.0) signent numériquement toutes les données de mesure et toutes les transactions. Il est ainsi possible de vérifier à tout moment l'authenticité des valeurs mesurées. Pour cela, smart-me utilise le principe cryptographique d'une protection de bout en bout au moyen d'une signature numérique basée sur un chiffrement asymétrique.

smart-me distingue deux types de valeurs mesurées signées :

- Signed meter values : valeurs mesurées signées, enregistrées et signées toutes les 15 minutes. Idéal pour le décompte de la consommation d'énergie.

- Signed transaction : les transactions signées sont destinées aux consommations d'énergie sur une période donnée (p. ex. la recharge de véhicules électriques). Elles comportent toujours une valeur initiale et une valeur finale.


## Technologie / déroulement

Algorithme de signature : ECDSA 256 Bit NIST curve (SECP256R1)

Algorithme de hachage : SHA256

### Déroulement : production (certifiée)

Lors de la production du compteur, une paire de clés asymétriques est générée et enregistrée sur le compteur. La clé publique (Public Key) est en outre enregistrée dans le cloud, où elle est accessible publiquement.

### Déroulement : signature des valeurs mesurées

- Toutes les 15 minutes ou à la fin d'une transaction, un paquet de données est constitué avec les valeurs mesurées correspondantes.

- Un hachage (SHA256) est calculé sur ces données.

- Ce hachage est chiffré (ECDSA 256) et enregistré comme signature.

- Le paquet de données est envoyé au cloud avec la signature et y est enregistré.


### Déroulement : vérification des valeurs mesurées

- Le client reçoit le paquet de données contenant les données de mesure via l'app, le web ou un tiers.

- Calcul du hachage (SHA256) sur le paquet de données.

- La Public Key est accessible publiquement dans le cloud (également via l'API) pour tous les compteurs smart-me.

- Le client vérifie le hachage du paquet de données avec la clé publique.


### Paquets de données

Afin de maintenir la taille du paquet de données, et donc le volume de données nécessaire à la transmission, aussi réduits que possible, smart-me utilise « Google Protocol Buffers » comme format de données pour les valeurs mesurées. Les paquets de données sont structurés comme suit :

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

SerialNumber : le numéro de série du compteur (p. ex. 6300000)
TimestampUtc : Unix Time Stamp (UTC) de ces données de mesure
Values : liste de toutes les valeurs mesurées (CounterValue) contenues dans ce paquet de données.

CounterValue

Obis : code OBIS de la valeur mesurée (6 bytes). p. ex.
&#123; 0x01, 0x00, 0x01, 0x08, 0x01, 0xFF &#125; pour 1-0:1.8.1\*255 (énergie active, soutirage tarif 1)
Value : la valeur mesurée
Unit : l'unité de la valeur mesurée. Chez smart-me, il s'agit le plus souvent de mWh (milliwattheures)

## Transactions signées

Les transactions se composent d'une valeur initiale et d'une valeur finale.

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

Transaction
SerialNumber : le numéro de série du compteur (p. ex. 6300000)
TransactionNumber : le numéro de la transaction. Ce numéro est incrémenté à chaque transaction.
UserId : l'ID de l'utilisateur qui a démarré cette transaction.
StartValues : les valeurs mesurées au début de la transaction (voir ci-dessus)
EndValues : les valeurs mesurées à la fin de la transaction (voir ci-dessus)

## Exemple

Cet exemple montre la validation d'une transaction signée.

Paquet de données (transaction)

```
awicMRCF/v//DyIvEOrEhuYFGhMKBgEAAQgA/xCj/MaiDhoDbVdoGhIKBgEAAggA/xCkiPkCGgNtV2gqLxDQyIbmBRoTCgYBAAEIAP8Qq7v9ow4aA21XaBoSCgYBAAIIAP8QpIj5AhoDbVdo

oder HEX:

6b 08 9c 31 10 85 fe ff ff 0f 22 2f 10 ea c4 86 e6 05 1a 13 0a 06 01 00 01 08 00 ff 10 a3 fc c6 a2 0e 1a 03 6d 57 68 1a 12 0a 06 01 00 02 08 00 ff 10 a4 88 f9 02 1a 03 6d 57 68 2a 2f 10 d0 c8 86 e6 05 1a 13 0a 06 01 00 01 08 00 ff 10 ab bb fd a3 0e 1a 03 6d 57 68 1a 12 0a 06 01 00 02 08 00 ff 10 a4 88 f9 02 1a 03 6d 57 68
```

Signature

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

Calculer le hachage (SHA256) du paquet de données :

SHA256(paquet de données) = 52 2F 46 C6 26 70 17 32 B6 FD 4B 78 7E 31 5D 3B EE F0 F4 E3 42 66 4A D0 5F AB 95 74 F1 C1 3C 0C

Valider le hachage avec la Public Key au moyen d'ECDSA 256

OK

Désérialiser le paquet de données : le paquet de données peut être facilement désérialisé à l'aide de la définition Protobuffer (exemple visualisé en JSON) :

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



Aide à la lecture

StartValues

TimeStampUtc 1556194384 = 25.04.2019 12:04 (UTC)

Valeur mesurée 1 Obis : AQABCAD/ = 01 00 01 08 00 ff = 1-0:1.8.0\*255 (énergie active, soutirage total)

Valeur mesurée 1 : valeur 3830562339 mWh = 3830.562 kWh

Valeur mesurée 2 Obis : AQACCAD/ = 01 00 02 08 00 ff = 1-0:2.8.0\*255 (énergie active, injection total)

Valeur mesurée 2 : valeur 6177828 mWh = 6.177 kWh



EndValues

TimeStampUtc 1556194384 = 25.04.2019 12:13 (UTC)

Valeur mesurée 1 Obis : AQABCAD/ = 01 00 01 08 00 ff = 1-0:1.8.0\*255 (énergie active, soutirage total)

Valeur mesurée 1 : valeur 3833552299 mWh = 3833.552 kWh

Valeur mesurée 2 Obis : AQACCAD/ = 01 00 02 08 00 ff = 1-0:2.8.0\*255 (énergie active, injection total)

Valeur mesurée 2 : valeur 6177828 mWh = 6.177 kWh



\-> Consommation d'énergie dans cette transaction : 3833.552 kWh - 3830.562 kWh = 2.99 kWh
