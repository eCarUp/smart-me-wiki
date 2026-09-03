---
title: 'Pannes du M-Bus Gateway'
slug: '/stoerungsbehebung/mbus-gateway-stoerungen'
description: 'Cette page traite des erreurs les plus fréquentes liées au M-Bus Gateway'
sidebar_label: 'Pannes du M-Bus Gateway'
---
Cette page traite des erreurs les plus fréquentes liées au M-Bus Gateway

## Le gateway ne trouve pas tous les compteurs

De nombreux compteurs M-Bus tirent leur alimentation du gateway. Notre gateway prend en charge 50 charges standard.

- Lancez encore 1 à 2 recherches. Il se peut que le compteur ne réponde pas dès la première recherche.

- Vérifiez que la somme des charges ne dépasse pas 50.

- Des lignes trop longues, respectivement des compteurs trop fins, entraînent des pertes sur les lignes.

- Tous les compteurs M-Bus ne sont pas compatibles avec notre gateway. Vous trouverez la liste des compteurs compatibles sur la [page produit du M-Bus Gateway](/produkte/m-bus-gateway)


## Le gateway trouve plus de compteurs qu'il n'en a été installé (lors de la mise en service)

Raison : numérotation des compteurs combinés

Le M-Bus Gateway ne reconnaît qu'un seul compteur à la fois sur la base de l'adresse secondaire, qui figure en règle générale aussi sur le protocole de réception.

Les compteurs combinés sont ensuite affichés séparément sur le portail. Pour cette application, smart-me utilise sa propre logique de numérotation.

Tous les compteurs non pertinents pour le décompte peuvent être [désactivés](/konfiguration/inbetriebnahme/zaehler-loeschen) afin d'économiser des coûts de licence. La suppression n'est pas efficace, car le compteur réapparaît systématiquement.

Si un compteur contient plus d'un compteur, ceux-ci sont numérotés comme suit :

- Compteur principal = adresse secondaire figurant dans la liste du M-Bus Gateway (p. ex. 71440145)

- Autres compteurs = adresse auxiliaire du compteur principal, le premier chiffre est supprimé (p. ex. 7) et un chiffre est incrémenté à la fin (p. ex. 14401451,14401452).


- Sous-compteurs = ils contiennent les quatre derniers chiffres du compteur principal (p. ex. 0145) et un numéro d'ordre à quatre chiffres à la fin (p. ex. 01450001)


![Pannes du M-Bus Gateway – Illustration 1](/img/stoerungsbehebung-mbus-gateway-stoerungen/01.png)

![Pannes du M-Bus Gateway – Illustration 2](/img/stoerungsbehebung-mbus-gateway-stoerungen/02.png)

## Le gateway trouve plus de compteurs qu'il n'en a été installé (pendant l'exploitation)

Une connexion instable peut entraîner une transmission erronée du numéro de série.

- -   Solution 1 : ces compteurs peuvent être désactivés, ce qui évite qu'ils n'occupent une licence.

    - Solution 2 : empêcher la détection de nouveaux appareils


Comment empêcher la détection de nouveaux appareils

- Sélectionner le M-Bus Gateway.


- Sélectionnez la roue dentée du M-Bus Gateway (en haut à droite). Remarque : ne sélectionnez pas la roue dentée du haut, qui sert à la configuration des compteurs, mais celle du bas.

- Modifier

- Cocher la case « Don't allow to add additional meters ».

- Enregistrer


Quel est l'effet de cette option ?

- L'activation de l'option « Don't allow to add additional meters » empêche l'enregistrement d'appareils qui ne sont pas encore présents dans le cloud.


À quoi faut-il faire attention ?

- Lorsque de nouveaux appareils sont ajoutés, cette option doit être désactivée avant la recherche.


Quand cette option est-elle recommandée ?

- Lorsque des appareils M-Bus qui n'existent pas du tout apparaissent régulièrement dans le portail.

- Pour des raisons préventives :-)


Dans quels cas cela peut-il se produire ?

- En cas d'erreurs dans la transmission des données. Cela arrive plus souvent lorsque le câble M-Bus est trop long et que la qualité de la transmission des données diminue de ce fait, ou lorsque le câble est mal blindé ou exposé à des perturbations externes.


Explication technique

- Le protocole M-Bus standardisé ne dispose que d'1 byte pour la somme de contrôle. La somme de contrôle est destinée à détecter certaines erreurs dans la transmission des données. Malheureusement, 1 byte est peu et peut régulièrement conduire à ce qu'un paquet de données erroné soit considéré comme correct et valable. Dans certaines installations utilisant des M-Bus Gateways, cela conduit régulièrement à ce que des paquets corrompus soient classés comme corrects et valables, puis reconnus et ajoutés comme nouvel appareil M-Bus dans notre cloud. Le compte passe alors de Professional à Basic, car la couverture de licence n'est plus garantie.


![Pannes du M-Bus Gateway – Illustration 3](/img/stoerungsbehebung-mbus-gateway-stoerungen/03.png)

## Le compteur M-Bus est hors ligne

- Les compteurs tombent en panne de manière irrégulière, il ne s'agit pas toujours des mêmes compteurs.

    - Les compteurs ont besoin d'environ 10 secondes pour répondre. Si l'intervalle de lecture est réglé sur une valeur trop faible, ils n'en ont pas la possibilité.

        - Solution : l'intervalle de lecture peut être augmenté sur le M-Bus Gateway. 10 secondes par appareil sont recommandées.




- Les compteurs perdent la connexion toujours au même moment de la journée (heure et minute).

    - Dans ce cas, il se peut que les compteurs soient alimentés par batterie et n'autorisent qu'un certain nombre de lectures par jour afin de ménager la batterie.

        - Solution : ici, l'intervalle de lecture peut être augmenté à 6 ou 12 heures.




- Les compteurs tombent en panne de manière irrégulière, il s'agit majoritairement des mêmes compteurs.

    - Des perturbations externes sur les lignes, surtout dans le cas de lignes plus longues, peuvent entraîner des transmissions erronées.

        - Solution : garder le câblage des compteurs court.


## Les valeurs du compteur ne correspondent pas au compteur physique

- Vérifiez la configuration du compteur.

- Vérifiez le câblage entre le compteur et le gateway.

- Tous les compteurs M-Bus ne sont pas compatibles avec notre gateway. Vous trouverez la liste des compteurs compatibles sur la [page produit du M-Bus Gateway](/produkte/m-bus-gateway)


## Remplacer le M-Bus Gateway

- Installer le nouveau M-Bus Gateway et raccorder le câblage sur le nouveau gateway.

- Mettre le M-Bus en service.

- Régler l'intervalle de lecture sur le portail.

- Rechercher les appareils.

- Vérifier que tous les compteurs M-Bus ont fourni des valeurs actuelles.


Remarque : il n'y a rien à modifier sur les compteurs M-Bus existants dans la configuration smart-me ni dans le Billing.
