---
title: 'Eniris'
slug: '/drittsysteme/eniris'
description: 'Le système de gestion de l''énergie SmartgridOne d''Eniris lit les compteurs et les bornes de recharge smart-me directement via Modbus TCP.'
sidebar_label: 'Eniris'
---
<div className="row">
<div className="col col--7">

Le système de gestion de l'énergie SmartgridOne d'Eniris lit les compteurs et les bornes de recharge smart-me directement via Modbus TCP.

Depuis 2018, Eniris développe des systèmes de gestion de l'énergie. Son siège principal se trouve en Belgique et l'entreprise dispose d'une succursale en Suisse. SmartgridOne pilote de manière coordonnée les batteries, les bornes de recharge, les installations photovoltaïques, les pompes à chaleur ainsi que les charges pouvant être enclenchées et déclenchées. En Suisse, SmartgridOne est distribué exclusivement par Solarmarkt, qui en assure également le suivi.

</div>
<div className="col col--5 bild--mitte">

![Logo d'Eniris : un éclair dans un cercle rouge à côté de l'inscription ENIRIS](/img/drittsysteme-eniris/logo.png)

</div>
</div>

**Public cible :**

- RCP (regroupement dans le cadre de la consommation propre)

- Maison individuelle

- Immeuble collectif


**Type de connexion :**

Intégration directe via Modbus TCP pour la communication locale.


**Prérequis :**

- Abonnement smart-me Professional. [En savoir plus](/planung/cloud-lizenzen)

## Appareils intégrés

Dans SmartgridOne, les appareils suivants sont disponibles sous **Devices** en tant qu'intégration standard via Modbus TCP :

- [Compteur triphasé smart-me Telstar](/produkte/telstar-80a)

- [Compteur triphasé Telstar CT](/produkte/telstar-ct)

- [Borne de recharge Pico](/produkte/pico-ladestation) avec commutation de phases

## Guide rapide

1.  [Activer Modbus TCP sur l'appareil smart-me](/schnittstellen/modbus-tcp#activer-modbus-tcp).

2.  Noter l'adresse IP ou le nom d'hôte de l'appareil. Les deux figurent dans le portail sous **Appareil → Configuration → Paramètres avancés** (Gerät → Konfiguration → Erweiterte Einstellungen). Les autres moyens de déterminer l'adresse sont décrits sous [Trouver l'adresse de l'appareil](/schnittstellen/modbus-tcp#déterminer-ladresse-de-lappareil).

3.  Dans SmartgridOne, ajouter l'appareil smart-me sous **Devices**.

4.  Saisir l'adresse IP ou le nom d'hôte et enregistrer.

Pour la Pico, des restrictions s'appliquent en matière de gestion de la charge : seul un appareil individuel ou le maître d'un groupe est accessible via Modbus TCP. Les détails figurent sous [Spécificités de la Pico et de Modbus TCP](/schnittstellen/modbus-tcp#particularités-de-la-pico-et-de-modbus-tcp).

## Contact

<Kacheln min="20rem">

<Kachel titel="Solarmarkt GmbH">

Distribution et suivi en Suisse.

Neumattstrasse 30, CH-5000 Aarau

+41 62 200 62 00 · [info@solarmarkt.ch](mailto:info@solarmarkt.ch) · [www.solarmarkt.ch](https://www.solarmarkt.ch)

</Kachel>

<Kachel titel="Eniris">

Fabricant de SmartgridOne.

[eniris.com](https://eniris.com/de)

</Kachel>

</Kacheln>
