---
title: 'Actions basées sur des événements'
slug: '/konfiguration/wenndann-aktionen/ereignisaktionen'
description: 'Des commandes automatiques peuvent être créées pour chaque appareil dans la plateforme smart-me.'
sidebar_label: 'Actions basées sur des événements'
---
Des commandes automatiques peuvent être créées pour chaque appareil dans la plateforme smart-me. Il existe deux possibilités de définir de telles actions. Soit des actions basées sur des événements, soit des [actions si/alors](/konfiguration/wenndann-aktionen). Cet article explique les actions basées sur des événements.

## Actions basées sur des événements, uniquement pour les compteurs monophasés et les compteurs triphasés Telstar

Les actions basées sur des événements sont enregistrées sur l'appareil lui-même, elles fonctionnent donc aussi sans connexion Internet, par exemple lorsque le routeur WLAN est éteint. Il faut toutefois définir pour cela des actions qui ne nécessitent pas de connexion Internet. L'envoi d'un e-mail ne fonctionne évidemment pas sans Internet. Jusqu'à 16 actions basées sur des événements peuvent être enregistrées sur les appareils ; elles peuvent être créées et modifiées dans l'application ou dans le portail web.

Déclencheurs possibles :

- -   Puissance supérieure / inférieure à xx

    - Heure

    - Courant inférieur/supérieur (sur une phase) (uniquement avec le [compteur triphasé Telstar](/))

    - Entrée numérique (On/ Off) (uniquement avec le [compteur triphasé Telstar](/))




Actions possibles :

- -   [E-mail d'alarme](/konfiguration/wenndann-aktionen/alarme)

    - Activer / désactiver le courant (uniquement avec le [compteur triphasé Telstar](/))

    - Basculer le courant marche/arrêt (n'est plus pris en charge)

    - Activer/désactiver le courant sur un autre appareil (n'est plus pris en charge)

    - Basculer le courant marche/arrêt sur un autre appareil (n'est plus pris en charge)


## Créer une action basée sur un événement

Les actions basées sur des événements peuvent être créées dans l'application ou dans le portail web.

### Application

- Connecte-toi à ton compte utilisateur smart-me

- Sélectionne un compteur

- Clique maintenant sur la roue dentée en haut à droite

- Clique sur « Actions basées sur des événements » (Ereignisaktionen) - « Ajouter une action basée sur un événement » (Ereignisaktion hinzufügen)


### Site web

- Connecte-toi au [login web](https://web.smart-me.com/login/)

- Clique sur le compteur souhaité

- Clique à droite sur les roues dentées

- Clique sur Ajouter une action basée sur un événement (Ereignisaktion hinzufügen)


### Définir une action basée sur un événement

Des actions basées sur des événements peuvent maintenant être définies (jusqu'à 16). Trois réglages doivent être effectués pour cela :

- Événement -> Dès que celui-ci survient, l'action est déclenchée

- Action -> Définit ce qui doit être fait lorsque l'événement survient

- Nom -> Le nom de l'action basée sur l'événement


## Événements

L'événement défini ici déclenche une action. Les événements suivants sont disponibles :

### Puissance inférieure / supérieure à

Exemple : Événement -> Lorsque la puissance est inférieure à 10 watts, désactiver

Remarques :

- L'action (dans cet exemple « désactiver le courant ») n'est exécutée que si l'événement correspondant a eu lieu, c'est-à-dire un changement de puissance de plus de 10 watts à moins de 10 watts

- Si le courant est réactivé manuellement, il reste activé jusqu'à ce que l'événement survienne à nouveau.

- En cas de puissances fluctuantes, il serait possible que cette condition se produise plusieurs fois de suite. Cela peut entraîner des effets indésirables, c'est pourquoi on travaille avec ce que l'on appelle une hystérésis. Cela signifie que la valeur seuil (dans cet exemple 10 watts) est augmentée de 3 watts lors de la deuxième activation.


### Heure

Il est possible de définir un moment à partir duquel l'action doit être exécutée. Si certains jours de la semaine doivent être exclus de cette règle, ils doivent être marqués (rouge)

Exemple : Événement -> Le courant est coupé chaque matin à 9 heures, mais pas le week-end.

Remarques :

- L'action (dans cet exemple « désactiver le courant ») n'est exécutée que si l'événement correspondant a eu lieu, c'est-à-dire un passage de l'heure de 08:59 à 09:00.

- Si le courant est réactivé manuellement, il reste activé jusqu'à ce que l'événement survienne à nouveau.


## Actions

Différentes actions sont proposées. Celles-ci peuvent bien entendu être combinées avec chacun des événements mentionnés.

### Activer le courant / désactiver le courant

L'appareil smart-me s'active ou se désactive lui-même. 

Exemple : Le courant est coupé chaque matin à 9 heures, mais pas le week-end.

### Basculer le courant (marche/arrêt)

L'appareil smart-me peut s'activer ou se désactiver lui-même. Selon l'état dans lequel se trouve l'appareil, l'appareil smart-me passe de marche à arrêt ou d'arrêt à marche. (Valable uniquement pour le 32A Meter)

### E-mail d'alarme

L'appareil smart-me peut t'informer par e-mail dès que l'événement est survenu. Cela ne fonctionne que si l'appareil smart-me dispose d'une connexion Internet.

Exemple : Dès que la puissance soutirée est inférieure à 10 watts, un e-mail est envoyé.

### Activer le courant sur un autre appareil / désactiver le courant sur un autre appareil

L'appareil smart-me peut non seulement s'activer ou se désactiver lui-même, mais il peut aussi commander d'autres appareils smart-me (fonctionne uniquement si les deux appareils smart-me disposent d'une connexion WLAN/Internet). Note également que seul le 32A Meter peut commuter)

### Basculer le courant (marche/arrêt) sur un autre appareil

L'appareil smart-me peut non seulement s'activer ou se désactiver lui-même, mais il peut aussi commander d'autres appareils smart-me (fonctionne uniquement si les deux appareils smart-me disposent d'une connexion WLAN/Internet). Note également que seul le 32A Meter peut commuter)
