---
title: 'Dysfonctionnements de la passerelle M-Bus'
slug: '/stoerungsbehebung/m-bus-gateway-stoerungen'
description: 'Cette page traite des erreurs les plus fréquentes liées à la passerelle M-Bus'
sidebar_label: 'Dysfonctionnements de la passerelle M-Bus'
---
Cette page traite des erreurs les plus fréquentes liées à la passerelle M-Bus

## La passerelle ne trouve pas tous les compteurs

De nombreux compteurs M-Bus sont alimentés en courant par la passerelle. Notre passerelle prend en charge 50 charges standard. 

- Lancez encore 1 à 2 recherches. Il se peut que le compteur ne se signale pas toujours lors de la première recherche.

- Vérifiez que la somme des charges ne dépasse pas 50.

- Des lignes trop longues ou des compteurs trop fins entraînent des pertes sur les lignes.

- Tous les compteurs M-Bus ne sont pas compatibles avec notre passerelle. Vous trouverez la liste des compteurs compatibles sur la [page produit de la passerelle M-Bus](/produkte/m-bus-gateway)


## La passerelle trouve plus de compteurs que ceux installés (lors de la mise en service)

Raison : numérotation des compteurs combinés

La passerelle M-Bus ne détecte à chaque fois qu'un seul compteur à l'aide de l'adresse secondaire, qui figure généralement aussi sur le procès-verbal de réception.

Les compteurs combinés sont ensuite affichés séparément sur le portail. Pour cette application, smart-me utilise sa propre logique de numérotation.

Tous les compteurs non pertinents pour le décompte peuvent être [désactivés](/konfiguration/inbetriebnahme/zaehler-loeschen) afin d'économiser des frais de licence. La suppression n'est pas utile, car le compteur réapparaît sans cesse.

Si un compteur contient plus d'un compteur, ceux-ci sont numérotés comme suit :

- Compteur principal = adresse secondaire figurant dans la liste de la passerelle M-Bus (p. ex. 71440145)

- Autres compteurs = adresse secondaire du compteur principal, le premier chiffre est supprimé (p. ex. 7) et un chiffre est incrémenté à la fin (p. ex. 14401451,14401452).

- Sous-compteurs = ils contiennent les quatre derniers chiffres du compteur principal (p. ex. 0145) et un numéro d'ordre à quatre chiffres à la fin (p. ex. 01450001)

![Dysfonctionnements de la passerelle M-Bus – Illustration 1](/img/stoerungsbehebung-m-bus-gateway-stoerungen/01.png)

![Dysfonctionnements de la passerelle M-Bus – Illustration 2](/img/stoerungsbehebung-m-bus-gateway-stoerungen/02.png)

## La passerelle trouve plus de compteurs que ceux installés (pendant l'exploitation)

Une connexion instable peut entraîner une transmission erronée du numéro de série. 

- -   Solution 1 : ces compteurs peuvent être désactivés, ce qui évite qu'ils consomment une licence.

    - Solution 2 : empêcher la détection de nouveaux appareils


Comment empêcher la détection de nouveaux appareils

- Sélectionnez la passerelle M-Bus.


- Sélectionnez la roue dentée de la passerelle M-Bus (en haut à droite). Remarque : ne sélectionnez pas la roue dentée supérieure, qui sert à la configuration des compteurs, mais celle du bas.

- Modifier (Bearbeiten)

- Cochez la case « Don't allow to add additional meters ».

- Enregistrer (Speichern)


Quel est l'effet de cette option ?

- L'activation de l'option « Don't allow to add additional meters » empêche l'enregistrement d'appareils qui ne sont pas encore présents dans le cloud. 


À quoi faut-il faire attention ?

- Si de nouveaux appareils sont ajoutés, cette option doit être désactivée avant la recherche.


Quand cette option est-elle recommandée ?

- Lorsque des appareils M-Bus qui n'existent pas apparaissent régulièrement dans le portail.

- À titre préventif :-)


Dans quels cas cela peut-il se produire ?

- En cas d'erreurs dans la transmission des données. Cela se produit plus fréquemment lorsque le câble M-Bus est trop long et que la qualité de la transmission des données diminue de ce fait, ou lorsque le câble est mal blindé ou exposé à des perturbations externes.


Explication technique

- Le protocole M-Bus standardisé ne dispose que d'1 byte pour la somme de contrôle. La somme de contrôle sert à détecter certaines erreurs dans la transmission des données. Malheureusement, 1 byte, c'est peu, et il peut arriver régulièrement qu'un paquet de données erroné soit considéré comme correct et valide. Dans certaines installations utilisant des passerelles M-Bus, il arrive ainsi régulièrement que des paquets corrompus soient classés comme corrects et valides, puis détectés et ajoutés dans notre cloud comme nouvel appareil M-Bus. Le compte passe alors de Professional à Basic, car la couverture de licence n'est plus assurée.


![Dysfonctionnements de la passerelle M-Bus – Illustration 3](/img/stoerungsbehebung-m-bus-gateway-stoerungen/03.png)

## Le compteur M-Bus est hors ligne

- Des compteurs tombent en panne de manière irrégulière, et ce ne sont pas toujours les mêmes compteurs.

    - Les compteurs ont besoin d'environ 10 secondes pour répondre. Si l'intervalle de lecture est réglé trop court, ils n'en ont pas la possibilité. 

        - Solution : l'intervalle de lecture peut être augmenté sur la passerelle M-Bus. 10 secondes par appareil sont recommandées.




- Des compteurs perdent toujours la connexion à la même heure de la journée (heure et minute). 

    - Dans ce cas, il se peut que les compteurs fonctionnent sur batterie et, pour ménager celle-ci, n'autorisent qu'un nombre limité de lectures par jour. 

        - Solution : l'intervalle de lecture peut ici être augmenté à 6 ou 12 heures.




- Des compteurs tombent en panne de manière irrégulière, et ce sont majoritairement les mêmes compteurs.

    - Des perturbations externes sur les lignes, surtout sur les lignes plus longues, peuvent entraîner des transmissions erronées.

        - Solution : garder le câblage des compteurs court.


## Les valeurs du compteur ne correspondent pas au compteur physique

- Vérifiez la configuration du compteur.

- Contrôlez le câblage entre le compteur et la passerelle.

- Tous les compteurs M-Bus ne sont pas compatibles avec notre passerelle. Vous trouverez la liste des compteurs compatibles sur la [page produit de la passerelle M-Bus](/produkte/m-bus-gateway)


## Remplacer la passerelle M-Bus

- Installez la nouvelle passerelle M-Bus et raccordez le câblage à la nouvelle passerelle.

- Mettez le M-Bus en service.

- Définissez l'intervalle de lecture sur le portail.

- Recherchez les appareils.

- Vérifiez que tous les compteurs M-Bus ont fourni des valeurs actuelles.


Remarque : il n'est pas nécessaire de modifier quoi que ce soit aux compteurs M-Bus existants dans la configuration smart-me ni dans le Billing.
