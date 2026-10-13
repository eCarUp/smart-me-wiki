---
title: 'Actions déclenchées par un événement'
slug: '/konfiguration/wenndann-aktionen/ereignisaktionen'
description: 'Des commandes automatiques peuvent être créées pour chaque appareil de la plateforme smart-me.'
sidebar_label: 'Actions déclenchées par un événement'
---
Des commandes automatiques peuvent être créées pour chaque appareil de la plateforme smart-me. Il existe deux possibilités pour définir de telles actions : soit vous créez des actions déclenchées par un événement, soit des [actions si/alors](/konfiguration/wenndann-aktionen). Cet article explique les actions déclenchées par un événement.

## Actions déclenchées par un événement, uniquement pour le compteur monophasé et le compteur triphasé Telstar

Les actions déclenchées par un événement sont enregistrées sur l'appareil lui-même. Elles fonctionnent donc aussi sans connexion Internet, par exemple lorsque le routeur WLAN est éteint. Il faut toutefois définir pour cela des actions qui ne nécessitent pas de connexion Internet. L'envoi d'un e-mail ne fonctionne évidemment pas sans Internet. Jusqu'à 16 actions déclenchées par un événement peuvent être enregistrées sur les appareils. Elles peuvent être créées et modifiées dans l'app ou sur le portail web.

Déclencheurs possibles :

- -   Puissance supérieure / inférieure à xx

    - Heure

    - Courant inférieur/supérieur (sur une phase) (uniquement avec le [compteur triphasé Telstar](/))

    - Entrée numérique (On/ Off) (uniquement avec le [compteur triphasé Telstar](/))




Actions possibles :

- -   [E-mail d'alarme](/konfiguration/wenndann-aktionen/alarme)

    - Enclencher / déclencher le courant (uniquement avec le [compteur triphasé Telstar](/))

    - Basculer le courant enclenché/déclenché (n'est plus pris en charge)

    - Enclencher / déclencher le courant sur un autre appareil (n'est plus pris en charge)

    - Basculer le courant enclenché/déclenché sur un autre appareil (n'est plus pris en charge)


## Créer une action déclenchée par un événement

Les actions déclenchées par un événement peuvent être créées dans l'app ou sur le portail web.

### App

- Connectez-vous à votre compte utilisateur smart-me

- Sélectionnez un compteur

- Cliquez sur la roue dentée en haut à droite

- Cliquez sur « Actions déclenchées par un événement » (Ereignisaktionen) - « Ajouter une action déclenchée par un événement » (Ereignisaktion hinzufügen)


### Site web

- Connectez-vous au [login web](https://web.smart-me.com/login/)

- Cliquez sur le compteur souhaité

- Cliquez sur les roues dentées à droite

- Cliquez sur Ajouter une action déclenchée par un événement (Ereignisaktion hinzufügen)


### Définir une action déclenchée par un événement

Vous pouvez maintenant définir des actions déclenchées par un événement (jusqu'à 16). Pour cela, trois réglages sont nécessaires :

- Événement (Ereignis) -> dès que celui-ci se produit, l'action est déclenchée

- Action (Aktion) -> définit ce qui doit être fait lorsque l'événement se produit

- Nom (Name) -> le nom de l'action déclenchée par un événement


## Événements

L'événement défini ici déclenche une action. Les événements suivants sont disponibles :

### Puissance inférieure / supérieure à

Exemple : Événement -> si la puissance est inférieure à 10 watts, déclencher

Remarques :

- L'action (dans cet exemple « Déclencher le courant » (Strom ausschalten)) n'est exécutée que si l'événement correspondant s'est produit, c'est-à-dire un passage de la puissance de plus de 10 watts à moins de 10 watts

- Si le courant est réenclenché manuellement, il reste enclenché jusqu'à ce que l'événement se reproduise.

- En cas de puissances fluctuantes, cette condition pourrait se produire plusieurs fois de suite. Cela peut entraîner des effets indésirables ; c'est pourquoi on travaille avec une hystérésis. Cela signifie que le seuil (dans cet exemple 10 watts) est augmenté de 3 watts lors de la deuxième activation.


### Heure

Vous pouvez définir un moment à partir duquel l'action doit être exécutée. Si certains jours de la semaine doivent être exclus de cette règle, ils doivent être marqués (en rouge)

Exemple : Événement -> le courant est déclenché tous les jours à 9 heures du matin, sauf le week-end.

Remarques :

- L'action (dans cet exemple « Déclencher le courant » (Strom ausschalten)) n'est exécutée que si l'événement correspondant s'est produit, c'est-à-dire un passage de l'heure de 08:59 à 09:00.

- Si le courant est réenclenché manuellement, il reste enclenché jusqu'à ce que l'événement se reproduise.


## Actions

De nombreuses actions sont disponibles. Elles peuvent bien entendu être combinées avec chacun des événements mentionnés.

### Enclencher le courant / Déclencher le courant

L'appareil smart-me s'enclenche ou se déclenche lui-même.

Exemple : le courant est déclenché tous les jours à 9 heures du matin, sauf le week-end.

### Basculer le courant (enclenché/déclenché)

L'appareil smart-me peut s'enclencher ou se déclencher lui-même. Selon l'état dans lequel se trouve l'appareil, l'appareil smart-me passe d'enclenché à déclenché ou de déclenché à enclenché. (Valable uniquement pour le 32A Meter)

### E-mail d'alarme

L'appareil smart-me peut vous informer par e-mail dès que l'événement s'est produit. Cela ne fonctionne que si l'appareil smart-me dispose d'une connexion Internet.

Exemple : dès que la puissance soutirée est inférieure à 10 watts, un e-mail est envoyé.

### Enclencher le courant sur un autre appareil / Déclencher le courant sur un autre appareil

L'appareil smart-me peut non seulement s'enclencher ou se déclencher lui-même, mais aussi commander d'autres appareils smart-me (fonctionne uniquement si les deux appareils smart-me disposent d'une connexion WLAN/Internet). Notez également que seul le 32A Meter peut commuter)

### Basculer le courant (enclenché/déclenché) sur un autre appareil

L'appareil smart-me peut non seulement s'enclencher ou se déclencher lui-même, mais aussi commander d'autres appareils smart-me (fonctionne uniquement si les deux appareils smart-me disposent d'une connexion WLAN/Internet). Notez également que seul le 32A Meter peut commuter)
