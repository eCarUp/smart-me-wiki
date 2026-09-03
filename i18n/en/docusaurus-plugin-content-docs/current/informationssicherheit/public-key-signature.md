---
title: 'Public Key Signature'
slug: '/informationssicherheit/public-key-signature'
description: 'The smart-me meters (from version 2.0) digitally sign all measurement data and transactions.'
sidebar_label: 'Public Key Signature'
---
The smart-me meters (from version 2.0) digitally sign all measurement data and transactions. This makes it possible to verify the authenticity of measured values at any time. smart-me uses the cryptographic principle of end-to-end security by means of a digital signature based on asymmetric encryption.

smart-me makes a difference between two types of signed measured values:

- Signed meter values: Signed measured values, which are saved and signed every 15 minutes. Ideal for billing energy consumption.

- Signed transaction: Signed transactions are intended for energy consumption in a certain period of time (e.g. charging of e-vehicles). They always have a start and end value.


## Technology / Process

Signature algorithm: ECDSA 256 Bit NIST curve (SECP256R1)

Hash algorithm: SHA256

### Process (certified) production

In the production of the meter, an asymmetric key pair is generated and stored on the meter. The public key is also stored publicly available in the cloud.

### Process: Signing of the measured values

- Every 15 minutes or when a transaction is terminated, a data packet is formed with the corresponding measured values.

- A hash (SHA256) is formed over this data.

- This hash is encrypted (ECDSA 256) and stored as a signature.

- The data packet is sent to the cloud together with the signature and stored.


### Procedure: Checking the measured values

- The customer receives the data package with the measurement data via the app, the web or a third party.

- Creation of the hash (SHA256) via the data package.

- The public key is publicly available for all smart-me meters in the cloud (also via API).

- The customer verifies the hash of the data package with the public key.


### Data packages

In order to keep the size of the data package and the amount of data required for transmission as small as possible, smart-me uses "Google Protocol Buffers" as the data format for the measured values. The data packages are structured as follows:

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

SerialNumber: The serial number of the meter (e.g. 6300000)
TimestampUtc: Unix Time Stamp (UTC) of this measurement data
Values: List with all measured values (CounterValue) in this data package.

CounterValue

Obis: OBIS code of the measured value (6 bytes). e.g.
&#123; 0x01, 0x00, 0x01, 0x08, 0x01, 0xFF &#125; für 1-0:1.8.1\*255 (Wirkenergie Bezug Tarif 1)
Value: The measured value
Unit: The unit of the measured value. For smart-me mostly mWh (milliwatt hours).

## Signed transactions

Transactions consist of a start value and an end value.

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

Transaktion
SerialNumber: The serial number of the meter (e.g. 6300000)
TransactionNumber: The number of the transaction. This number counts up for each transaction.
UserId: The ID of the user who started this transaction.
StartValues: The measured values at the beginning of the transaction (see above)
EndValues: The readings at the end of the transaction (see above)

## Example

This example shows the validation of a signed transaction.

Data package (transaction)

```
awicMRCF/v//DyIvEOrEhuYFGhMKBgEAAQgA/xCj/MaiDhoDbVdoGhIKBgEAAggA/xCkiPkCGgNtV2gqLxDQyIbmBRoTCgYBAAEIAP8Qq7v9ow4aA21XaBoSCgYBAAIIAP8QpIj5AhoDbVdo

or HEX:

6b 08 9c 31 10 85 fe ff ff 0f 22 2f 10 ea c4 86 e6 05 1a 13 0a 06 01 00 01 08 00 ff 10 a3 fc c6 a2 0e 1a 03 6d 57 68 1a 12 0a 06 01 00 02 08 00 ff 10 a4 88 f9 02 1a 03 6d 57 68 2a 2f 10 d0 c8 86 e6 05 1a 13 0a 06 01 00 01 08 00 ff 10 ab bb fd a3 0e 1a 03 6d 57 68 1a 12 0a 06 01 00 02 08 00 ff 10 a4 88 f9 02 1a 03 6d 57 68
```

Signature

```
V0EGJ3gHNbnUZ8hAfdRn2ziEVbnXpZ3a5L5WtG24XOWOeCBKH687W/wikxqK5e+Zad3R/PuCnQDNqgeSfh4pow==

or HEX:

57 41 06 27 78 07 35 b9 d4 67 c8 40 7d d4 67 db 38 84 55 b9 d7 a5 9d da e4 be 56 b4 6d b8 5c e5 8e 78 20 4a 1f af 3b 5b fc 22 93 1a 8a e5 ef 99 69 dd d1 fc fb 82 9d 00 cd aa 07 92 7e 1e 29 a3
```

Public Key

```
RUNTMSAAAAAN48gSNbwl1Uj4DDvwO1wReZj95r19F5nqvy8pTmoUtyMBtf2HgwN6jf9+Akzp/nsy+BMrzAdvrjOD5wfYDGVk

or HEX:

45 43 53 31 20 00 00 00 0d e3 c8 12 35 bc 25 d5 48 f8 0c 3b f0 3b 5c 11 79 98 fd e6 bd 7d 17 99 ea bf 2f 29 4e 6a 14 b7 23 01 b5 fd 87 83 03 7a 8d ff 7e 02 4c e9 fe 7b 32 f8 13 2b cc 07 6f ae 33 83 e7 07 d8 0c 65 64
```

Calculate the hash (SHA256) of the data packet:

SHA256(Datenpaket) = 52 2F 46 C6 26 70 17 32 B6 FD 4B 78 7E 31 5D 3B EE F0 F4 E3 42 66 4A D0 5F AB 95 74 F1 C1 3C 0C

Validate hash with the public key using ECDSA 256

OK

Deserialise data package: The data package, together with the protobuffer definition, can be deserialised easily (example visualised as JSON):

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



Reading aid

StartValues

TimeStampUtc 1556194384 = 25.04.2019 12:04 (UTC)

Measurement 1 Obis: AQABCAD/ = 01 00 01 08 00 ff = 1-0:1.8.0\*255 (Active energy reference Total)

Measuremen t1: Value 3830562339 mWh = 3830.562 kWh

Measurement 2 Obis: AQACCAD/ = 01 00 02 08 00 ff = 1-0:2.8.0\*255 (Active energy delivery total)

Measurement 2: Value 6177828 mWh = 6.177 kWh



EndValues

TimeStampUtc 1556194384 = 25.04.2019 12:13 (UTC)

Measurement 1 Obis: AQABCAD/ = 01 00 01 08 00 ff = 1-0:1.8.0\*255 (Total active energy reference)

Measurement 1: Value 3833552299 mWh = 3833.552 kWh

Measurement 2 Obis: AQACCAD/ = 01 00 02 08 00 ff = 1-0:2.8.0\*255 (Active energy delivery total)

Measurement 2: Value 6177828 mWh = 6.177 kWh



\-> Energy consumption in this transaction: 3833.552 kWh - 3830.562 kWh = 2.99 kWh
