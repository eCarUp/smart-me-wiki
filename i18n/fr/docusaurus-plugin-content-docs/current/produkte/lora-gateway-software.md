---
title: 'Logiciel LoRa Gateway'
slug: '/produkte/lora-gateway-software'
description: 'LoRa signifie Long Range et désigne une technologie radio à longue portée et à faible débit de données.'
sidebar_label: 'Logiciel LoRa Gateway'
---
## Avant-propos

LoRa signifie Long Range et désigne une technologie radio à longue portée et à faible débit de données. Ce moyen de communication convient particulièrement à la transmission sans fil des valeurs de mesure des compteurs dans les domaines des techniques sanitaires et de chauffage.

Par rapport au Wireless M-Bus, développé en principe pour la transmission des données de compteurs, LoRa se distingue par une portée nettement plus élevée.

Il faut moins de gateways par bâtiment pour accéder à toutes les valeurs des compteurs des différents appartements.

## Structure

![Logiciel LoRa Gateway – Illustration 1](/img/produkte-lora-gateway-software/01.png)

## Généralités sur la compatibilité des compteurs d'énergie et des capteurs

Avec la solution smart-me LoRa Gateway, il est important que les capteurs et les compteurs d'énergie figurent dans la liste de compatibilité. S'ils n'y sont pas répertoriés, il n'existe actuellement aucune compatibilité. 

Contactez-nous, une intégration de votre compteur ou de votre capteur est possible à brève échéance. Envoyez un e-mail à [support@smart-me.com](mailto:support@smart-me.com) avec l'objet « Nouvel appareil LoRa » ("Neues LoRa Gerät")

En règle générale, la solution smart-me Gateway prend en charge les types de compteurs d'énergie et de capteurs suivants :

Compteurs d'énergie :

- Compteurs de chaleur

- Compteurs de froid

- Compteurs de chaleur/froid

- Compteurs d'eau chaude sanitaire et d'eau froide

- Compteurs de gaz


Capteurs :

- Température (affichage, temporairement non enregistrée)


### Limites de la compatibilité

Pour des raisons techniques, aucun compteur d'électricité n'est pris en charge avec LoRa. En raison du mode de fonctionnement de LoRa, le débit de transmission et la fiabilité des données ne sont pas suffisamment élevés pour les décomptes basés sur les courbes de charge selon smart-me Billing. 

C'est pourquoi seules les données de compteurs pour lesquelles une sécurité et une fonctionnalité suffisantes peuvent être garanties sont relevées via LoRa.

## Gateways LoRaWAN testées

- Dragino LPS8N

- Sensecap M2

- Kerlink Wirnet iFemtoCell-Evolution 868

- WisGate Edge Lite 2

- Milesight UG56


Remarque : les appareils non testés peuvent être intégrés de manière autonome. Les appareils compatibles nécessitent uniquement les options « Semtech » et « Data Packet Forwarder ».

## Effectuer la mise en service

[Mise en service des gateways LoRaWAN](/konfiguration/inbetriebnahme/inbetriebnahme-lora)

## Liste de compatibilité des compteurs et capteurs

Votre compteur ou votre capteur n'y figure pas ?

Contactez-nous, une intégration de votre compteur ou de votre capteur est possible à brève échéance. Envoyez un e-mail à [support@smart-me.com](mailto:support@smart-me.com) avec l'objet « Nouvel appareil LoRa » ("Neues LoRa Gerät").

Conditions préalables à une intégration :

- EUI de l'appareil

- Clé d'application de l'appareil
    (La clé comporte 32 caractères. Elle est fournie avec le produit ; si ce n'est pas le cas, elle peut être obtenue auprès du prestataire de facturation actuel / précédent.)


[](https://drive.google.com/open?id=12I3do1d8wZTKA1V9mhF1-rQm-Iw9ZP8P_16gi1OJw2w "Ouvrir la feuille de calcul, liste de compatibilité LoRa Gateway dans une nouvelle fenêtre")

<Embed src="https://docs.google.com/spreadsheets/d/12I3do1d8wZTKA1V9mhF1-rQm-Iw9ZP8P_16gi1OJw2w/htmlembed" height="720px" title="Feuille de calcul, liste de compatibilité LoRa Gateway" />

Liste de compatibilité LoRa Gateway

## Travailler avec des testeurs de terrain LoRa

Les testeurs de terrain peuvent être mis en service comme n'importe quel type d'appareil au moyen de leur EUID et de leur APP-Key.

Les testeurs de terrain peuvent par exemple être connectés avec le fabricant « GWF » et le type « All ». Cela permet au testeur de communiquer avec la gateway. La gateway ne crée aucun point de mesure pour le testeur dans le portail smart-me.

Testé avec :
\- Adeunis ARF8123AA 868 MHz

## Partenaires de distribution

### GWF AG

Obergrundstrasse 119
CH-6005 Luzern
+41 41 319 50 50
[www.gwf.ch](http://www.gwf.ch)


Mauro Nuozzi

Back office manager

+41 41 319 52 47

mauro.nuozzi@gwf.ch

### Brunata AG

Althardstrasse 10
CH-8105 Regensdorf
[contact@brunata.ch

](mailto:contact@brunata.ch)

Alex Nanzer, direction
+41 41 669 10 10
[alex.nanzer@brunata.ch](mailto:alex.nanzer@brunata.ch) 

### Elsys.se

[www.elsys.se](http://www.elsys.se) 

## Qualité des données et couverture des pannes

La technologie LoRa repose sur l'acquisition et l'envoi des données. Les gateways LoRaWAN ne disposent d'aucune mémoire de données et ne peuvent donc pas reconstituer des jeux de données incomplets, comme c'est habituellement le cas avec les produits smart-me.

C'est pourquoi LoRa ne convient pas de la même manière à toutes les énergies. 

Pour la chaleur, l'eau et le gaz, une brève panne ou une lacune dans les données ne constitue en règle générale pas un obstacle majeur et le décompte peut être établi sans difficulté si le problème est résolu à moyen terme.
Pour l'électricité et sa tarification par intervalles de 15 minutes, une résolution à moyen terme ne permet pas de régler le problème sans difficulté ; c'est pourquoi, à notre avis, LoRa ne convient pas à la transmission des données d'électricité ni à leur décompte.

C'est pourquoi smart-me a développé son propre matériel afin de garantir pour l'électricité la sécurité des données et l'absence de lacunes nécessaires. 

- Telstar 80A

- Telstar CT

- Nimbus 100A
