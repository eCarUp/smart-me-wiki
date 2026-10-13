---
title: 'Loxone'
slug: '/drittsysteme/loxone'
description: 'Utiliser les compteurs smart-me dans Loxone'
sidebar_label: 'Loxone'
---
## Utiliser les compteurs smart-me dans Loxone

## Intégration via Modbus

Le modèle permet de lire les données directement depuis le compteur

- Prérequis : [Modbus TCP](/schnittstellen/modbus-tcp) doit être activé sur le compteur. L'adresse IP ou le nom DNS du compteur doit être saisi dans le modèle.

- [Loxone Library](https://library.loxone.com/vendor/smart-me-1505)


![Loxone – Illustration 1](/img/drittsysteme-loxone/01.jpg)

## Intégration via l'API - Basic Auth (obsolète)

Le modèle permet de lire les données des compteurs depuis notre cloud et de commander des sorties numériques.

Remarque : Basic Auth sera désactivé afin de répondre aux exigences de sécurité croissantes.

Possible uniquement jusqu'en novembre 2026 (jusqu'à v.1.0.2)

- [Loxone Library](https://library.loxone.com/vendor/smart-me-1505)

- [Documentation de l'API](/schnittstellen/api)


Dans le modèle, le nom d'utilisateur et le mot de passe du compte doivent figurer devant l'URL de l'appel API. Le cas échéant, le nom d'utilisateur doit être défini par smart-me.

## Intégration via l'API - clés API (recommandé)

Le modèle permet de lire les données des compteurs depuis notre cloud et de commander des sorties numériques.

Remarque : Loxone n'offre pas de moyen plus simple de gérer les clés API. La procédure décrite ci-dessous a été élaborée avec Loxone. Les clés API ont été introduites afin de répondre aux exigences de sécurité croissantes.

à partir de la version 1.0.3

- [Loxone Library](https://library.loxone.com/vendor/smart-me-1505)

- [Documentation de l'API](/schnittstellen/api)


1.  ### Créer une clé API dans le portail smart-me.


Connectez-vous au portail smart-me --> menu « Interfaces » (Schnittstellen) --> « API » (API) --> en haut, dans la bannière orange, cliquez sur le « lien » (Link) --> « Créer nouveau » (Neu erstellen).

- Donnez une désignation à la clé API, p. ex. Loxone, 


- Définissez la date d'expiration

- Définissez les autorisations. Pour Loxone, « device.readswitch » suffit (si le navigateur traduit automatiquement la page en allemand, utilisez « Gerät.LesenSchalten ») 

- Créer

- Copiez la clé API.  Attention : la clé ne peut plus être consultée par la suite.

- La clé API sera nécessaire plus tard.


Général : plus d'informations sur les autorisations : [API](/schnittstellen/api) 

![Loxone – Illustration 2](/img/drittsysteme-loxone/02.png)

![Loxone – Illustration 3](/img/drittsysteme-loxone/03.png)

### 2\. Récupérer la DeviceID du compteur smart-me

Si le compte est en Professional, la DeviceID peut être récupérée très simplement 

1.  Menu « Système » (System) --> « Santé du système » (Systemgesundheit)

2.  Rechercher les appareils

3.  L'ID de l'appareil sera utilisée plus tard. p. ex. 61c71d00-3d40-4963-745b2-7c6b0c512gf3




Si le compte n'est pas sous licence, la DeviceID doit être récupérée via l'API.
1.  Appuyez sur la touche Windows et saisissez « cmd ».
2\. Ouvrez l'invite de commandes
3\. Copiez la commande suivante dans l'invite. 

Attention : adaptez l'ApiKey.  

curl -X "GET" "https://api.smart-me.com/Devices" -H "accept: \*/\*" -H "Authorization: ApiKey n9CUnYCGmTOQZCCX1iHRqrF5Erzx9pUu" 

4\. Dans la réponse, recherchez le nom du compteur et copiez l'Id.

![Loxone – Illustration 4](/img/drittsysteme-loxone/04.png)

### 3\. Configurer la sortie virtuelle dans Loxone

- Téléchargez le modèle depuis la Loxone Library (VO\_XXXX). (Voir le lien plus haut)

- Dans l'arborescence / la périphérie Loxone, cliquez sur « Sorties virtuelles » (Virtuelle Ausgänge)

- En haut, dans le menu Loxone, chargez le smart-me Request sous « Appareils prédéfinis » (Vordefinierte Geräte).

- Une nouvelle sortie virtuelle apparaît ; cliquez sur la commande « Meter ».


- Dans le champ « Commande pour ON » (Befehl bei EIN), &lt;meter.id\> doit être remplacé par l'ID de l'appareil.

- Dans le champ « En-tête HTTP pour ON » (HTTP header bei EIN), &lt;apikey> doit être remplacé par la clé API. Remarque : la clé API peut être la même pour tous les compteurs d'un même compte.


![Loxone – Illustration 5](/img/drittsysteme-loxone/05.png)

![Loxone – Illustration 6](/img/drittsysteme-loxone/06.png)

- Dans le champ « Enregistrer la réponse HTTP » (HTTP-Antwort speichern), le texte smartmeapi.html doit être adapté.


- Le nom doit être unique pour chaque sortie (donc pour chaque compteur). 

    - p. ex. bilanz.html pour le compteur de bilan user/common/bilanz.html 


![Loxone – Illustration 7](/img/drittsysteme-loxone/07.png)

### 4\. Configurer l'entrée virtuelle dans Loxone

- Sélectionnez les propriétés du Loxone Mini Server. Vous y trouverez le nom d'hôte ou l'adresse IP du Miniserver. Ces informations sont nécessaires pour la suite de la configuration.


![Loxone – Illustration 8](/img/drittsysteme-loxone/08.png)

- Téléchargez le modèle depuis la Loxone Library (VI\_XXXX).

- Sous « Appareils HTTP prédéfinis » (Vordefinierte HTTP-Geräte), chargez le smart-me meter.

- Une nouvelle entrée virtuelle apparaît

- Cliquez sur l'entrée « smart-me meter ».

- Dans le champ « URL », les éléments suivants doivent être adaptés.

    - Identifiants du Loxone Miniserver

    - Nom d'hôte ou IP du Loxone Mini Server

    - Nom du fichier HTML enregistré. Pour la même commande, le même nom que ci-dessus est nécessaire. p. ex. bilanz.html. 

- Exemple de commande :
    [https://admin:sicheres\_admin\_passwort@127.0.0.1/bilanz.html](https://admin:sicheres_admin_passwort@127.0.0.1/bilanz.html)

- [https://admin:sicheres\_admin\_passwort@MSC29Z/bilanz.html](https://admin:sicheres_admin_passwort@127.0.0.1/bilanz.html) 


![Loxone – Illustration 9](/img/drittsysteme-loxone/09.png)

### 5\. Relier le générateur d'impulsions à la sortie virtuelle

Si l'Example Meter n'est pas utilisé, la « commande de sortie virtuelle » (Virtuelle Ausgang Befehl) doit être pilotée au moyen d'un générateur d'impulsions.

![Loxone – Illustration 10](/img/drittsysteme-loxone/10.png)

![Loxone – Illustration 11](/img/drittsysteme-loxone/11.png)

![Loxone – Illustration 12](/img/drittsysteme-loxone/12.png)

## Utiliser les compteurs Loxone dans smart-me

Le module permet d'envoyer des données de compteurs vers notre cloud.

- [Loxone Library (Loxone vers smart-me)](https://library.loxone.com/detail/smart-me-cloud-1764/overview)


Important : ce module n'a pas été développé par smart-me. Nous n'offrons aucun support pour celui-ci. Vous devez acquérir vous-même les connaissances nécessaires à l'utilisation de ce module ; de notre point de vue, il s'adresse aux utilisateurs Loxone avancés.

Ce guide donne seulement un bref aperçu de la manière de créer un point de mesure, ce qui ne se fait pas via le module Loxone.

1.  Créez une clé API dans le portail smart-me avec les claims : device.readwrite et user.readwrite (une seule clé par compte est nécessaire, pas une par compteur)

2.  Exécutez l'appel suivant (modifiez auparavant les champs (ApiKey & Name))
    Avec PowerShell :
    curl -i -X 'POST' 'https://api.smart-me.com/Devices' -H 'accept: text/plain' -H 'Authorization: ApiKey &lt;apikey>' -H 'Content-Type: application/json-patch+json' -d '&#123;"activePower": 0, "counterReading": 0, "counterReadingExport": 0, "valueDate": "2025-07-08T08:15:55.026Z", "name": "Loxone Beispiel", "deviceEnergyType": 1&#125;'

    Avec l'invite de commandes Windows (DOS) :
    curl -i -X POST "https://api.smart-me.com/Devices" -H "accept: text/plain" -H "Authorization: ApiKey &lt;apikey> " -H "Content-Type: application/json" -d "&#123;\\"activePower\\": 0, \\"counterReading\\": 0, \\"counterReadingExport\\": 0, \\"valueDate\\": \\"2025-12-05T00:00:00.000Z\\", \\"name\\": \\"Loxone Beispiel\\", \\"deviceEnergyType\\": 1&#125;"

3.  Récupérez l'UUID du compteur dans la réponse.
    Alternative 1 : récupérer l'UUID dans « Santé du système » (Systemgesundheit) du tableau de bord
    Alternative 2 : utiliser [https://api.smart-me.com/Devices](https://api.smart-me.com/Devices) avec GET pour obtenir toutes les ID.

4.  Ces données doivent être saisies dans la Loxone Library.


En résumé, un compteur a ainsi été créé via l'API ; il peut ensuite être utilisé dans Loxone.
