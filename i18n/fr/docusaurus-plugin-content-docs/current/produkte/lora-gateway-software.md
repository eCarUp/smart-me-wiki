---
title: 'LoRa Gateway Software'
slug: '/produkte/lora-gateway-software'
description: 'LoRa signifie Long Range et désigne une technologie radio à longue portée et à faible débit de données.'
sidebar_label: 'LoRa Gateway Software'
---
## Avant-propos

LoRa signifie Long Range et désigne une technologie radio à longue portée et à faible débit de données. Ce support de communication convient particulièrement à la transmission sans fil des valeurs de mesure des compteurs dans les domaines du sanitaire et du chauffage.

Par rapport au Wireless M-Bus, qui a été développé en principe pour la transmission des données de compteurs, LoRa séduit par sa portée nettement supérieure.

Il nécessite moins de gateways par bâtiment pour accéder à toutes les valeurs de compteur des différents appartements.

## Structure

![LoRa Gateway Software – illustration 1](/img/produkte-lora-gateway-software/01.png)

## Généralités sur la compatibilité des compteurs d'énergie et des capteurs

Avec la solution LoRa Gateway de smart-me, il est important que les capteurs et les compteurs d'énergie figurent dans la liste de compatibilité. S'ils n'y sont pas mentionnés, il n'existe actuellement aucune compatibilité.

Contacte-nous, une intégration de ton compteur ou de ton capteur est possible à brève échéance. Envoie un e-mail à [support@smart-me.com](mailto:support@smart-me.com) avec la mention « Neues LoRa Gerät »

De manière générale, la solution Gateway de smart-me prend en charge les types de compteurs d'énergie et de capteurs suivants :

Compteurs d'énergie :

- Compteurs de chaleur

- Compteurs de froid

- Compteurs de chaleur/froid

- Compteurs d'eau chaude sanitaire et d'eau froide

- Compteurs de gaz


Capteurs :

- Température (affichage, temporairement non enregistré)


### Limites de la compatibilité

Pour des raisons techniques, aucun compteur d'électricité n'est pris en charge avec LoRa. Le taux de transmission et la fiabilité des données pour les décomptes basés sur les profils de charge selon smart-me Billing ne sont pas suffisamment élevés en raison du fonctionnement de LoRa.

C'est pourquoi seules les données de compteur pour lesquelles une sécurité et une fonctionnalité suffisantes peuvent être garanties sont relevées via LoRa.

## Gateways LoRaWAN testés

- Dragino LPS8N

- Sensecap M2

- Kerlink Wirnet iFemtoCell-Evolution 868

- WisGate Edge Lite 2

- Milesight UG56


Remarque : les appareils non testés peuvent être intégrés de manière autonome. Les appareils compatibles nécessitent uniquement les options « Semtech » et « Data Packet Forwarder ».

## Effectuer la mise en service

[Mise en service des gateways LoRaWAN](/konfiguration/inbetriebnahme/inbetriebnahme-lora)

## Liste de compatibilité des compteurs et capteurs

Ton compteur ou ton capteur n'y figure pas ?

Contacte-nous, une intégration de ton compteur ou de ton capteur est possible à brève échéance. Envoie un e-mail à [support@smart-me.com](mailto:support@smart-me.com) avec la mention « Neues LoRa Gerät ».

Condition pour une intégration :

- EUI de l'appareil

- Clé d'application pour l'appareil
    (La clé comporte 32 caractères. La clé est fournie avec le produit ; si ce n'est pas le cas, elle peut être obtenue auprès du prestataire de facturation actuel/précédent.)


[](https://drive.google.com/open?id=12I3do1d8wZTKA1V9mhF1-rQm-Iw9ZP8P_16gi1OJw2w "Ouvrir la feuille de calcul, liste de compatibilité LoRa Gateway dans une nouvelle fenêtre")

<Embed src="https://docs.google.com/spreadsheets/d/12I3do1d8wZTKA1V9mhF1-rQm-Iw9ZP8P_16gi1OJw2w/htmlembed" title="Feuille de calcul, liste de compatibilité LoRa Gateway" />

Liste de compatibilité LoRa Gateway

## Travailler avec des testeurs de terrain LoRa

Les testeurs de terrain peuvent être mis en service comme n'importe quel type d'appareil au moyen de l'EUID et de sa clé APP.

Les testeurs de terrain peuvent par exemple être connectés avec le fabricant « GWF » et le type « All ». Cela permet au testeur de communiquer avec le gateway. Le gateway ne crée aucun point de mesure pour le testeur dans le portail smart-me.

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

Alex Nanzer, Direction
+41 41 669 10 10
[alex.nanzer@brunata.ch](mailto:alex.nanzer@brunata.ch) 

### Elsys.se

[www.elsys.se](http://www.elsys.se) 

## Qualité des données et couverture en cas de panne

La technologie LoRa repose sur la saisie et l'envoi des données. Les gateways LoRaWAN ne disposent d'aucune mémoire de données et ne peuvent donc pas reconstituer les jeux de données incomplets, comme c'est le cas par ailleurs avec les produits smart-me.

Pour cette raison, LoRa ne convient pas de la même manière à toutes les énergies.

Pour la chaleur, l'eau et le gaz, une panne de courte durée ou un trou dans les données ne constitue en règle générale pas un obstacle majeur et peut être décompté sans problème si le problème est résolu à moyen terme.
Pour l'électricité et sa tarification par intervalles de 15 minutes, une résolution à moyen terme n'est pas envisageable sans difficulté ; c'est pourquoi LoRa ne convient pas, de notre point de vue, à la transmission des données d'électricité et à leur décompte.

C'est pourquoi smart-me a développé son propre matériel afin de garantir pour l'électricité la sécurité des données et l'absence de lacunes nécessaires.

- Telstar 80A

- Telstar CT

- Nimbus 100A
