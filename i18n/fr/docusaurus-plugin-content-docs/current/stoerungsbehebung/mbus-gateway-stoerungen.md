---
title: 'Dérangements M-Bus Gateway'
slug: '/stoerungsbehebung/mbus-gateway-stoerungen'
description: 'Cette page traite des erreurs les plus fréquentes concernant le M-Bus Gateway'
sidebar_label: 'Dérangements M-Bus Gateway'
---
Cette page traite des erreurs les plus fréquentes concernant le M-Bus Gateway

## Le gateway ne trouve pas tous les compteurs

De nombreux compteurs M-Bus sont alimentés en courant par le gateway. Notre gateway prend en charge 50 charges standard. 

- Lancez encore 1 à 2 recherches. Il se peut que le compteur ne réponde pas toujours lors de la première recherche.

- Vérifiez que la somme des charges ne dépasse pas 50.

- Des câbles trop longs ou de section trop faible entraînent des pertes sur les lignes.

- Tous les compteurs M-Bus ne sont pas compatibles avec notre gateway. Vous trouverez la liste des compteurs compatibles sur la [page produit du M-Bus Gateway](/produkte/m-bus-gateway)


## Le gateway trouve plus de compteurs qu'il n'en a été installé (lors de la mise en service)

Raison : numérotation des compteurs combinés

Le M-Bus Gateway ne reconnaît à chaque fois qu'un seul compteur à l'aide de l'adresse secondaire, qui figure généralement aussi sur le procès-verbal de réception.

Les compteurs combinés sont ensuite affichés séparément sur le portail. Pour cette application, smart-me utilise sa propre logique de numérotation.

Tous les compteurs non pertinents pour le décompte peuvent être [désactivés](/konfiguration/inbetriebnahme/zaehler-loeschen) afin d'économiser des frais de licence. La suppression n'est pas utile, car le compteur réapparaît sans cesse.

Si un compteur contient plus de 1 compteur, ceux-ci sont numérotés comme suit :

- Compteur principal = adresse secondaire figurant dans la liste du M-Bus Gateway (p. ex. 71440145)

- Autres compteurs = adresse secondaire du compteur principal, dont le premier chiffre est supprimé (p. ex. 7) et à la fin de laquelle un chiffre est incrémenté (p. ex. 14401451,14401452).


- Sous-compteurs = ceux-ci contiennent les quatre derniers chiffres du compteur principal (p. ex. 0145) et un numéro d'énumération à quatre chiffres à la fin (p. ex. 01450001)


![Dérangements M-Bus Gateway – Figure 1](/img/stoerungsbehebung-mbus-gateway-stoerungen/01.png)

![Dérangements M-Bus Gateway – Figure 2](/img/stoerungsbehebung-mbus-gateway-stoerungen/02.png)

## Le gateway trouve plus de compteurs qu'il n'en a été installé (en cours d'exploitation)

Une connexion instable peut entraîner une transmission erronée du numéro de série. 

- -   Solution 1 : ces compteurs peuvent être désactivés, ce qui évite qu'ils consomment une licence.

    - Solution 2 : empêcher la détection de nouveaux appareils


Comment empêcher la détection de nouveaux appareils

- Sélectionnez le M-Bus Gateway.


- Sélectionnez la roue dentée du M-Bus Gateway (en haut à droite). Remarque : ne sélectionnez pas la roue dentée supérieure, qui sert à la configuration des compteurs, mais celle du bas.

- Modifier (Bearbeiten)

- Cochez la case « Don't allow to add additional meters ».

- Enregistrer (Speichern)


Quel est l'effet de cette option ?

- L'activation de l'option « Don't allow to add additional meters » empêche l'enregistrement d'appareils qui n'existent pas encore dans le cloud. 


À quoi faut-il faire attention ?

- Si de nouveaux appareils sont ajoutés, cette option doit être désactivée avant la recherche.


Quand cette option est-elle recommandée ?

- Lorsque des appareils M-Bus qui n'existent pas apparaissent régulièrement dans le portail.

- À titre préventif :-)


Dans quels cas cela peut-il se produire ?

- En cas d'erreurs dans la transmission des données. Cela se produit plus souvent lorsque le câble M-Bus est trop long et que la qualité de la transmission des données diminue, ou lorsque le câble est mal blindé ou exposé à des perturbations externes.


Explication technique

- Le protocole M-Bus standardisé ne dispose que de 1 byte pour la somme de contrôle. La somme de contrôle est destinée à détecter certaines erreurs dans la transmission des données. Malheureusement, 1 byte, c'est peu, et il peut arriver régulièrement qu'un paquet de données erroné soit considéré comme correct et valide. Dans certaines installations utilisant des M-Bus Gateways, cela conduit régulièrement à ce que des paquets corrompus soient classés comme corrects et valides, puis détectés et ajoutés comme nouvel appareil M-Bus dans notre cloud. Le compte passe alors de Professional à Basic, car la couverture des licences n'est plus assurée.


![Dérangements M-Bus Gateway – Figure 3](/img/stoerungsbehebung-mbus-gateway-stoerungen/03.png)

## Le compteur M-Bus est hors ligne

- Les compteurs tombent en panne de manière irrégulière, et ce ne sont pas toujours les mêmes compteurs.

    - Les compteurs ont besoin d'environ 10 secondes pour répondre. Si l'intervalle de lecture est réglé trop court, ils n'ont pas la possibilité de le faire. 

        - Solution : l'intervalle de lecture peut être augmenté sur le M-Bus Gateway. Il est recommandé de prévoir 10 secondes par appareil.




- Les compteurs perdent la connexion toujours à la même heure de la journée (heure et minute). 

    - Dans ce cas, il se peut que les compteurs fonctionnent sur batterie et, pour ménager celle-ci, n'autorisent qu'un nombre limité de lectures par jour. 

        - Solution : l'intervalle de lecture peut ici être augmenté à 6 ou 12 heures.




- Les compteurs tombent en panne de manière irrégulière, et ce sont majoritairement les mêmes compteurs.

    - Des perturbations externes sur les lignes, surtout sur les lignes plus longues, peuvent entraîner des erreurs de transmission.

        - Solution : maintenir le câblage des compteurs aussi court que possible.


## Les valeurs du compteur ne correspondent pas au compteur physique

- Vérifiez la configuration du compteur.

- Contrôlez le câblage entre le compteur et le gateway.

- Tous les compteurs M-Bus ne sont pas compatibles avec notre gateway. Vous trouverez la liste des compteurs compatibles sur la [page produit du M-Bus Gateway](/produkte/m-bus-gateway)


## Remplacer le M-Bus Gateway

- Installez le nouveau M-Bus Gateway et raccordez le câblage au nouveau gateway.

- Mettez le M-Bus en service.

- Définissez l'intervalle de lecture sur le portail.

- Recherchez les appareils.

- Vérifiez que tous les compteurs M-Bus ont fourni des valeurs actuelles.


Remarque : il n'est pas nécessaire de modifier quoi que ce soit aux compteurs M-Bus existants dans la configuration smart-me ni dans le Billing.
