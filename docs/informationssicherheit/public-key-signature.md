---
title: 'Public Key Signature'
slug: '/informationssicherheit/public-key-signature'
description: 'Die smart-me Zähler (ab Version 2.0) signieren alle Messdaten und Transaktionen digital.'
sidebar_label: 'Public Key Signature'
---
Die smart-me Zähler (ab Version 2.0) signieren alle Messdaten und Transaktionen digital. Damit ist es jederzeit möglich die Echtheit von Messwerten zu überprüfen. smart-me nutzt dazu das kryptografische Prinzip einer Ende-zu-Ende-Sicherung mittels einer digitalen Signatur auf Basis asymmetrischer Verschlüsselung.

smart-me unterscheidet zwischen zwei Arten von signierten Messwerten:

- Signed meter values: Signierte Messwerte, die alle 15 Minuten gespeichert und signiert werden. Ideal für die Abrechnung des Energieverbrauchs.

- Signed transaction: Signierte Transaktionen sind für Energieverbräuche in einem bestimmten Zeitraum (z. B. Laden von E-Fahrzeugen) gedacht. Sie haben immer einen Anfangs- und Endwert.


## Technologie / Ablauf

Signatur-Algorithmus: ECDSA 256 Bit NIST curve (SECP256R1)

Hash Algorithmus: SHA256

### Ablauf: (zertifizierte) Produktion

In der Produktion des Zählers wird ein asymmetrisches Schlüsselpaar generiert und auf dem Zähler gespeichert. Der öffentliche Schlüssel (Public Key) wird zudem öffentlich verfügbar in der Cloud gespeichert.

### Ablauf: Signierung der Messwerte

- Alle 15 Minuten oder beim Beenden einer Transaktion wird ein Datenpaket mit den entsprechenden Messwerten gebildet.

- Über diese Daten wird ein Hash (SHA256) gebildet.

- Dieser Hash wird verschlüsselt (ECDSA 256) und als Signatur gespeichert.

- Das Datenpaket wird zusammen mit der Signatur an die Cloud gesendet und gespeichert.


### Ablauf: Überprüfung der Messwerte

- Der Kunde erhält über die App, das Web oder eine Drittpartei das Datenpaket mit den Messdaten.

- Bildung des Hash (SHA256) über das Datenpaket.

- Der Public Key ist für alle smart-me Zähler öffentlich in der Cloud (auch über API) verfügbar

- Der Kunde verifiziert den Hash des Datenpakets mit dem öffentlichen Schlüssel.


### Datenpakete

Um die Grösse des Datenpakets und die damit benötigte Datenmenge für die Übertragung so klein wie möglich zu halten, verwendet smart-me für die Messwerte "Google Protocol Buffers" als Datenformat. Die Datenpakete sind wie folgt aufgebaut:

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

SerialNumber: Die Seriennummer des Zählers (z. B. 6300000)
TimestampUtc: Unix Time Stamp (UTC) von diesen Messdaten
Values: Liste mit allen Messwerten (CounterValue) in diesem Datenpaket.

CounterValue

Obis: OBIS-Code des Messwertes (6 bytes). z.B.
&#123; 0x01, 0x00, 0x01, 0x08, 0x01, 0xFF &#125; für 1-0:1.8.1\*255 (Wirkenergie Bezug Tarif 1)
Value: Der Messwert
Unit: Die Einheit des Messwertes. Bei smart-me meist mWh (Milliwattstunden)

## Signierte Transaktionen

Transaktionen bestehen aus einem Startwert und einem Endwert.

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
SerialNumber: Die Seriennummer des Zählers (z. B. 6300000)
TransactionNumber: Die Nummer der Transaktion. Diese Nummer zählt bei jeder Transaktion hoch.
UserId: Die ID des Benutzer welche diese Transaktion gestartet hat.
StartValues: Die Messwerte bei Beginn der Transaktion (siehe oben)
EndValues: Die Messwerte beim Ende der Transaktion (siehe oben)

## Beispiel

Dieses Bespiel zeigt die Validierung einer signierten Transaktion.

Datenpaket (Transaktion)

```
awicMRCF/v//DyIvEOrEhuYFGhMKBgEAAQgA/xCj/MaiDhoDbVdoGhIKBgEAAggA/xCkiPkCGgNtV2gqLxDQyIbmBRoTCgYBAAEIAP8Qq7v9ow4aA21XaBoSCgYBAAIIAP8QpIj5AhoDbVdo

oder HEX:

6b 08 9c 31 10 85 fe ff ff 0f 22 2f 10 ea c4 86 e6 05 1a 13 0a 06 01 00 01 08 00 ff 10 a3 fc c6 a2 0e 1a 03 6d 57 68 1a 12 0a 06 01 00 02 08 00 ff 10 a4 88 f9 02 1a 03 6d 57 68 2a 2f 10 d0 c8 86 e6 05 1a 13 0a 06 01 00 01 08 00 ff 10 ab bb fd a3 0e 1a 03 6d 57 68 1a 12 0a 06 01 00 02 08 00 ff 10 a4 88 f9 02 1a 03 6d 57 68
```

Signatur

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

Hash (SHA256) des Datenpakets berechnen:

SHA256(Datenpaket) = 52 2F 46 C6 26 70 17 32 B6 FD 4B 78 7E 31 5D 3B EE F0 F4 E3 42 66 4A D0 5F AB 95 74 F1 C1 3C 0C

Hash mit dem Public Key mittels ECDSA 256 validieren

OK

Datenpaket deserialisieren: Das Datenpaket kann, zusammen mit der Protobuffer Definition, einfach deserialisiert werden (Beispiel visualisiert als JSON):

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



Lesehilfe

StartValues

TimeStampUtc 1556194384 = 25.04.2019 12:04 (UTC)

Messwert 1 Obis: AQABCAD/ = 01 00 01 08 00 ff = 1-0:1.8.0\*255 (Wirkenergie Bezug Total)

Messwert 1: Wert 3830562339 mWh = 3830.562 kWh

Messwert 2 Obis: AQACCAD/ = 01 00 02 08 00 ff = 1-0:2.8.0\*255 (Wirkenergie Lieferung Total)

Messwert 2: Wert 6177828 mWh = 6.177 kWh



EndValues

TimeStampUtc 1556194384 = 25.04.2019 12:13 (UTC)

Messwert 1 Obis: AQABCAD/ = 01 00 01 08 00 ff = 1-0:1.8.0\*255 (Wirkenergie Bezug Total)

Messwert 1: Wert 3833552299 mWh = 3833.552 kWh

Messwert 2 Obis: AQACCAD/ = 01 00 02 08 00 ff = 1-0:2.8.0\*255 (Wirkenergie Lieferung Total)

Messwert 2: Wert 6177828 mWh = 6.177 kWh



\-> Energieverbrauch in dieser Transaktion: 3833.552 kWh - 3830.562 kWh = 2.99 kWh
