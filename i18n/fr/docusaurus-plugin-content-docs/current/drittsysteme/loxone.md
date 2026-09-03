---
title: 'Loxone'
slug: '/drittsysteme/loxone'
description: 'Utiliser les compteurs smart-me dans Loxone'
sidebar_label: 'Loxone'
---
## Utiliser les compteurs smart-me dans Loxone

## Intégration via Modbus

Le template offre la possibilité de lire les données du compteur directement depuis le compteur

- Condition préalable : [Modbus TCP](/schnittstellen/modbus-tcp) doit être activé sur le compteur. L'adresse IP ou le nom DNS du compteur doit être saisi dans le template.

- [Loxone Library](https://library.loxone.com/vendor/smart-me-1505)


![Loxone – Illustration 1](/img/drittsysteme-loxone/01.jpg)

## Intégration via API - Basic Auth (obsolète)

Le template offre la possibilité de lire les données du compteur depuis notre cloud et de commander des sorties numériques.

Remarque : Basic Auth sera désactivé afin de répondre aux exigences croissantes en matière de sécurité.

Possible uniquement jusqu'en novembre 2026 (jusqu'à la v.1.0.2)

- [Loxone Library](https://library.loxone.com/vendor/smart-me-1505)

- [Documentation API](/schnittstellen/api)


Dans le template, le nom d'utilisateur et le mot de passe du compte doivent figurer avant l'URL de l'appel API. Le nom d'utilisateur doit selon les cas être défini par smart-me.

## Intégration via API - clés API (recommandé)

Le template offre la possibilité de lire les données du compteur depuis notre cloud et de commander des sorties numériques.

Remarque : Loxone n'offre pas de possibilité plus simple de gérer les clés API. La procédure décrite ci-dessous a été élaborée conjointement avec Loxone. Les clés API ont été introduites afin de répondre aux exigences croissantes en matière de sécurité.

à partir de la version 1.0.3

- [Loxone Library](https://library.loxone.com/vendor/smart-me-1505)

- [Documentation API](/schnittstellen/api)


1.  ### Créer une clé API dans le portail smart-me.


Connexion au portail smart-me --> menu Interfaces (Schnittstellen) --> API --> cliquer en haut sur le « lien » (Link) dans la bannière orange --> « Créer » (Neu erstellen).

- Donner une désignation à la clé API, p. ex. Loxone, 


- Définir la date d'expiration

- Définir les autorisations. Pour Loxone, « device.readswitch » suffit (si le navigateur traduit automatiquement en allemand, veuillez utiliser « Gerät.LesenSchalten ») 

- Créer

- Copier la clé API. Attention : la clé ne peut plus être consultée par la suite.

- La clé API sera nécessaire plus tard.


Généralités : plus d'informations sur les autorisations : [API](/schnittstellen/api) 

![Loxone – Illustration 2](/img/drittsysteme-loxone/02.png)

![Loxone – Illustration 3](/img/drittsysteme-loxone/03.png)

### 2\. Récupérer le DeviceID du compteur smart-me

Si le compte est en Professional, le DeviceID peut être obtenu très simplement 

1.  Menu Système (System) --> Santé du système (Systemgesundheit)

2.  Rechercher les appareils

3.  L'ID de l'appareil sera utilisé plus tard. P. ex. 61c71d00-3d40-4963-745b2-7c6b0c512gf3




Si le compte n'est pas sous licence, le DeviceID doit être récupéré via l'API.
1.  Appuyer sur la touche Windows et saisir « cmd ».
2\. Ouvrir l'invite de commandes
3\. Copier la commande suivante dans la saisie. 

Attention : adapter la clé ApiKey.  

curl -X "GET" "https://api.smart-me.com/Devices" -H "accept: \*/\*" -H "Authorization: ApiKey n9CUnYCGmTOQZCCX1iHRqrF5Erzx9pUu" 

4\. Dans la réponse, rechercher le nom du compteur et copier l'Id.

![Loxone – Illustration 4](/img/drittsysteme-loxone/04.png)

### 3\. Configurer la sortie virtuelle dans Loxone

- Télécharger le template depuis la Loxone Library (VO\_XXXX). (Voir le lien plus haut)

- Dans l'arborescence Loxone / Périphérie, cliquer sur Sorties virtuelles

- En haut dans le menu Loxone, sous « Appareils prédéfinis », charger la requête smart-me.

- Une nouvelle sortie virtuelle apparaît ; y cliquer sur la commande « Meter ».


- Dans le champ « Commande à MARCHE », &lt;meter.id\> doit être remplacé par l'ID de l'appareil.

- Dans le champ « En-tête HTTP à MARCHE », &lt;apikey> doit être remplacé par la clé API. Remarque : la clé API peut être la même pour chaque compteur d'un même compte.


![Loxone – Illustration 5](/img/drittsysteme-loxone/05.png)

![Loxone – Illustration 6](/img/drittsysteme-loxone/06.png)

- Dans le champ « Enregistrer la réponse HTTP », le texte smartmeapi.html doit être adapté.


- Le nom doit être individuel pour chaque sortie. P. ex. bilanz.html Exemple user/common/bilanz.html 


![Loxone – Illustration 7](/img/drittsysteme-loxone/07.png)

### 4\. Configurer l'entrée virtuelle dans Loxone

- Sélectionne les propriétés du Loxone Mini Server. Tu y trouves le nom d'hôte ou l'adresse IP du Miniserver. Cela est nécessaire pour la suite de la configuration.


![Loxone – Illustration 8](/img/drittsysteme-loxone/08.png)

- Télécharger le template depuis la Loxone Library (VI\_XXXX).

- Sous « Appareils HTTP prédéfinis », charger le smart-me meter.

- Une nouvelle entrée virtuelle apparaît

- Cliquer sur l'entrée « smart-me meter ».

- Dans le champ « URL », les erreurs suivantes doivent être adaptées.

    - Données d'accès du Loxone Miniserver

    - Nom d'hôte ou IP du Loxone Mini Server

    - Nom du fichier HTML indiqué. Pour une même commande, le même nom que ci-dessus est nécessaire. P. ex. bilanz.html. 

- Exemple d'une commande :
    [https://admin:sicheres\_admin\_passwort@127.0.0.1/bilanz.html](https://admin:sicheres_admin_passwort@127.0.0.1/bilanz.html)

- [https://admin:sicheres\_admin\_passwort@MSC29Z/bilanz.html](https://admin:sicheres_admin_passwort@127.0.0.1/bilanz.html) 


![Loxone – Illustration 9](/img/drittsysteme-loxone/09.png)

Si le template smart-me n'est pas utilisé, la « commande de sortie virtuelle » doit être pilotée au moyen d'un générateur d'impulsions.

![Loxone – Illustration 10](/img/drittsysteme-loxone/10.png)

## Utiliser les compteurs Loxone dans smart-me

Le module offre la possibilité d'envoyer les données du compteur vers notre cloud.

- [Loxone Library (Loxone vers smart-me)](https://library.loxone.com/detail/smart-me-cloud-1764/overview)


Important : ce module n'a pas été développé par smart-me. Nous n'offrons aucun support à ce sujet. Tu dois acquérir toi-même les connaissances nécessaires pour utiliser ce module ; de notre point de vue, il s'adresse aux utilisateurs Loxone avancés.

Ce guide ne donne qu'un bref aperçu de la manière dont un point de mesure peut être créé, ce qui ne se fait pas via le module Loxone.

1.  Créer une clé API dans le portail smart-me avec les claims : device.readwrite et user.readwrite (une seule clé par compte est nécessaire, pas une pour chaque compteur)

2.  Exécuter l'appel suivant (éditer les champs au préalable (ApiKey et nom))
    Avec Power-Shell :
    curl -i -X 'POST' 'https://api.smart-me.com/Devices' -H 'accept: text/plain' -H 'Authorization: ApiKey &lt;apikey>' -H 'Content-Type: application/json-patch+json' -d '&#123;"activePower": 0, "counterReading": 0, "counterReadingExport": 0, "valueDate": "2025-07-08T08:15:55.026Z", "name": "Loxone Beispiel", "deviceEnergyType": 1&#125;'

    Avec Windows CMD (DOS) :
    curl -i -X POST "https://api.smart-me.com/Devices" -H "accept: text/plain" -H "Authorization: ApiKey &lt;apikey> " -H "Content-Type: application/json" -d "&#123;\\"activePower\\": 0, \\"counterReading\\": 0, \\"counterReadingExport\\": 0, \\"valueDate\\": \\"2025-12-05T00:00:00.000Z\\", \\"name\\": \\"Loxone Beispiel\\", \\"deviceEnergyType\\": 1&#125;"

3.  Reprendre l'UUID du compteur depuis la réponse.
    Alternative 1 : récupérer l'UUID depuis la santé du système (Systemgesundheit) dans le dashboard
    Alternative 2 : utiliser [https://api.smart-me.com/Devices](https://api.smart-me.com/Devices) GET pour obtenir tous les IDs.

4.  Ces données doivent être saisies dans la Loxone Library.


En résumé, un compteur a ainsi été créé via l'API, qui peut ensuite être utilisé dans Loxone.
