---
title: 'Actions si/alors'
slug: '/konfiguration/wenndann-aktionen'
description: 'Pour pouvoir utiliser les actions si/alors, vous devez disposer d''une licence smart-me Limited ou Professional.'
sidebar_label: 'Actions si/alors'
---
## Conditions préalables

Pour pouvoir utiliser les actions si/alors, vous devez disposer d'une licence smart-me Limited ou Professional.

Pour pouvoir utiliser l'action si/alors régulation Pico, vous devez disposer d'une licence smart-me Professional.

![Actions si/alors – illustration 1](/img/konfiguration-wenndann-aktionen/01.png)

## À quoi servent les actions SI / ALORS

- Base des plages tarifaires pour les tarifs doubles et multiples dans le Billing

- Commandes avec les entrées et sorties du compteur 

- Alarmes telles que les interruptions de connexion et les arrêts de compteur


[Définir les plages tarifaires](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)

[Commande de boiler SI / ALORS](/konfiguration/wenndann-aktionen/beispiel-boilersteuerung)

[Définir les alarmes](/konfiguration/wenndann-aktionen/alarme)

Des commandes automatiques peuvent être créées pour chaque appareil de la plateforme smart-me. Il existe deux manières de définir de telles actions. Soit vous créez des [actions déclenchées par un événement](/konfiguration/wenndann-aktionen/ereignisaktionen), soit des actions si / alors. Cet article explique les actions si/alors. Par rapport aux actions déclenchées par un événement, des déclencheurs et des actions plus complexes peuvent être définis :

- -   plusieurs déclencheurs (liaisons ET ainsi que OU) sont possibles

    - plusieurs actions sont possibles

    - un groupe de compteurs peut être surveillé / commuté

    - surveillance de la connexion

    - arrêt de compteur


## Actions si/alors

Les actions si/alors sont enregistrées dans le cloud et ne fonctionnent donc que si l'appareil concerné dispose d'une connexion WLAN. Vous pouvez créer un nombre illimité d'actions si/alors pour tous les appareils smart-me. Les actions si/alors ne peuvent être créées et modifiées que dans le portail web. 

### Procédure

1.  Connectez-vous sur notre [site web](https://web.smart-me.com/login/) avec votre nom d'utilisateur et votre mot de passe

2.  Cliquez sur Configuration (Konfiguration)

3.  Cliquez sur la tuile Actions si/alors (Wenn/Dann-Aktionen)

4.  Cliquez sur le symbole + pour créer une nouvelle action ou cliquez sur une action existante pour la modifier.


## Conditions préalables au bon fonctionnement des actions si/alors :

1.  Au moins un événement si doit être défini, car c'est lui qui déclenche l'action. Si plusieurs événements si ont été définis, ceux-ci peuvent être liés par des commandes ET ainsi que OU.

2.  Au moins une action alors doit être définie (exception pour la condition relative aux tarifs). Si plusieurs actions alors ont été définies, elles sont toutes exécutées simultanément dès que la ou les conditions si sont remplies.

3.  Un nom pour cette action


## Événements si

Les événements si (déclencheurs) suivants sont disponibles :

![Valeur mesurée supérieure / inférieure](/img/konfiguration-wenndann-aktionen/02.png)

Valeur mesurée supérieure/inférieure

- Définissez quel appareil de mesure d'énergie doit être surveillé.

    Des dossiers entiers peuvent également être sélectionnés ; dans ce cas, la valeur moyenne de tous les compteurs de ce dossier est surveillée. Vous pouvez utiliser à cet effet tous les compteurs d'énergie qui sont connectés au cloud. Donc, outre les compteurs d'électricité, également les compteurs de gaz, de chaleur ou d'eau (gateway). 


La valeur de contrôle se réfère ici toujours à l'attribut principal. 

- Pour le compteur d'électricité, la puissance triphasée en W ou kW.

- Pour le compteur de chaleur ou de froid, en W ou kW.

- Pour le compteur d'eau et le compteur de gaz, en m3/h.


Définissez en outre pendant combien de temps la valeur mesurée doit être dépassée vers le bas ou vers le haut pour déclencher l'action alors.

![Actions si/alors – illustration 3](/img/konfiguration-wenndann-aktionen/03.png)

![Date et heure](/img/konfiguration-wenndann-aktionen/04.png)

Date et heure

Vous pouvez définir des événements isolés ou des plages horaires comme événement si. 

On distingue à cet égard les variantes suivantes :

- Événements isolés

- Événements sur plage horaire


Événements isolés :

Les événements isolés sont toujours exécutés à un moment déterminé. Si cela n'était toutefois pas possible à ce moment-là pour des raisons techniques (p. ex. absence d'Internet), la commande n'est répétée qu'à la prochaine occurrence de la condition. Cette variante convient lorsque d'autres sources doivent modifier entre-temps l'état de commutation influencé.

Événements sur plage horaire :

Les événements sur plage horaire sont vérifiés et répétés toutes les 5 minutes au sein de la plage horaire définie. L'état de commutation serait modifié dès que les problèmes techniques seraient éliminés, mais cela empêche toute intervention externe sur les états de commutation commandés.

![Actions si/alors – illustration 5](/img/konfiguration-wenndann-aktionen/05.png)

![Aucune connexion](/img/konfiguration-wenndann-aktionen/06.png)

Aucune connexion

Un événement si peut être défini pour les compteurs déconnectés du cloud. Les réglages suivants doivent être effectués :

- Quel compteur / dossier doit être surveillé

- Pendant combien de temps la connexion doit être interrompue, en minutes


Conseil : si un dossier est sélectionné, tous les compteurs situés hiérarchiquement en dessous sont surveillés.

Remarque : 

Cette action si n'est exécutée qu'une seule fois. Cette commande n'est exécutée une nouvelle fois qu'après que tous les compteurs (dossiers) concernés par cette alarme sont de nouveau en ligne.
(vérifiez donc brièvement en cas d'alarme la connexion actuelle de tous les compteurs)

![Arrêt de compteur](/img/konfiguration-wenndann-aktionen/07.png)

Arrêt de compteur

Un événement si peut être défini pour un arrêt de compteur. Les réglages suivants doivent être effectués :

- Quel compteur doit être surveillé

- Pendant combien de temps l'arrêt de compteur doit être présent pour que la condition soit remplie.


Remarque : 

Prenez ici comme unité de temps plus d'un jour (1440 minutes) ou au moins le double du plus long intervalle de relevé du compteur.

![États de commutation](/img/konfiguration-wenndann-aktionen/08.png)

États de commutation

Au lieu de surveiller la puissance d'un compteur, il est également possible de surveiller l'état de commutation. Les réglages suivants doivent être effectués :

- Quel compteur doit être surveillé

- Où exactement l'état de commutation doit être surveillé (sortie ou entrée)

    - Phases (uniquement compteur triphasé 32A et Plug)

    - [Sortie libre de potentiel](/schnittstellen/ein_und_ausgaenge)

    - [Entrée numérique](/schnittstellen/ein_und_ausgaenge)

- À quel état l'action alors doit se déclencher. « Marche » (Ein), « Arrêt » (Aus) ou lors du changement d'un état.

- Temps minimum : pendant combien de temps le compteur doit être dans cet état pour que la condition de l'action alors soit remplie.


![Courant supérieur / inférieur](/img/konfiguration-wenndann-aktionen/09.png)

La fonction courants supérieurs / inférieurs permet de commander des charges afin d'éviter les situations de surcharge aux points de référence. 

Elle peut spécifiquement servir de déclencheur pour une régulation Pico.

La fonction suit automatiquement le courant positif le plus élevé de l'appareil. 

Remarque : cela s'applique également lorsque le seuil « inférieur » est sélectionné.

Exemple compteur triphasé :

Phase 1 : -5A
Phase 2 : 3A
Phase 3 : 7A

Courant de contrôle résultant pour l'évaluation : 7A

Ensuite, le seuil de contrôle est défini (Threshold) ainsi que le déclenchement en cas de dépassement vers le haut ou vers le bas.

Un temps minimum peut également être indiqué.

![Actions si/alors – illustration 10](/img/konfiguration-wenndann-aktionen/10.png)

## Actions alors

Dès que les événements si se produisent, les actions alors sont déclenchées.

Les actions alors suivantes sont disponibles :

- Alarme

- Mise en marche / à l'arrêt

- Régulation Pico (gestion de la charge dynamique pour les bornes de recharge et optimisation solaire)


![Alarme](/img/konfiguration-wenndann-aktionen/11.png)

[Alarme](/konfiguration/wenndann-aktionen/alarme)

Si les événements si se sont produits, un e-mail est envoyé. Les réglages suivants doivent être effectués :

- Nom de l'alarme

- Sujet : objet des e-mails d'alarme

- Message : texte contenu dans l'e-mail d'alarme


Des caractères de remplacement peuvent être définis dans le sujet (objet) et dans le message. AlarmnName et EventActionName sont alors remplacés dans l'e-mail envoyé par le « nom de l'alarme » saisi, respectivement par le « nom de l'événement si/alors ».

![Mise en marche / à l'arrêt](/img/konfiguration-wenndann-aktionen/12.png)

Mise en marche / à l'arrêt

Si les événements si se produisent, l'appareil sélectionné commute. Des dossiers peuvent également être sélectionnés ; dans ce cas, tous les appareils commutables de ce dossier sont commutés en conséquence.

Remarque : les compteurs ne disposent d'états de commutation que si ceux-ci ont également été activés au niveau du matériel.

Les réglages suivants doivent être effectués :

- Quel compteur ou dossier doit être commuté

- Comment doit-il être commuté ?

    - Marche

    - Arrêt

    - Commutation (uniquement smart-me Plug)


![Actions si/alors – illustration 13](/img/konfiguration-wenndann-aktionen/13.png)

## Exemples : commande de boiler avec SI/ALORS

[Exemple de commande de boiler](/konfiguration/wenndann-aktionen/beispiel-boilersteuerung) 

## Exemples : commandes RCP

### Pompe à chaleur RCP avec commande SG-Ready sur la valeur de mesure du bilan

La configuration décrit la structure d'une commande de pompe à chaleur en fonction de la mesure de bilan avec fonction SG-Ready.

Objectif : la pompe à chaleur doit pouvoir être pilotée en quatre niveaux de puissance via deux contacts électriques (compteur Telstar S0\_0 et S1).

SG-Ready ou Smartgrid-Ready est une logique de commande qui représente 4 états à l'aide de deux signaux selon le schéma suivant :

État de fonctionnement 1 : S0\_0 ARRÊT et S1 ARRÊT --> pompe à chaleur ARRÊT (0W)
État de fonctionnement 2 : S0\_0 ARRÊT et S1 MARCHE --> pompe à chaleur niveau de puissance 1 (800W)
État de fonctionnement 3 : S0\_0 MARCHE et S1 ARRÊT --> pompe à chaleur niveau de puissance 2 (2800W)
État de fonctionnement 4 : S0\_0 MARCHE et S1 MARCHE --> pompe à chaleur niveau de puissance 3 (5800W)

Pour réaliser une telle configuration avec succès, il faut ce que l'on appelle une statemachine (machine à états).
Pour 4 niveaux de puissance, nous devons donc disposer à chaque fois d'une action pour passer d'un niveau au suivant et pour revenir en arrière.

La commutation s'effectue dans les niveaux de puissance :

Niveau 0--> 1 : excédent de >800W
Niveau 1--> 2 : excédent de >2000W
Niveau 2--> 3 : excédent de >3000W

Niveau 3 -->2 : soutirage de >500W
Niveau 2 -->1 : soutirage de >500W
Niveau 1-->0 : soutirage de >200W

À chaque niveau, l'instruction si vérifie à quel niveau nous nous trouvons et contrôle ensuite simultanément la valeur du bilan.
Dans l'action alors, nous indiquons vers quel niveau il faut passer si toutes les actions si sont remplies.

Important : la commutation ne doit pas avoir lieu immédiatement et devrait être réglée à environ 5 minutes à chaque niveau au moyen du temps minimum de la valeur mesurée.

![Actions si/alors – illustration 14](/img/konfiguration-wenndann-aktionen/14.png)

![Actions si/alors – illustration 15](/img/konfiguration-wenndann-aktionen/15.png)

![Actions si/alors – illustration 16](/img/konfiguration-wenndann-aktionen/16.png)

Action 1 : 1\_niveau 0 --> 1 ON

![Actions si/alors – illustration 17](/img/konfiguration-wenndann-aktionen/17.png)

Action 2 : 1\_niveau 1 --> 2 ON

![Actions si/alors – illustration 18](/img/konfiguration-wenndann-aktionen/18.png)

Action 3 : 1\_niveau 2 --> 3 ON

![Actions si/alors – illustration 19](/img/konfiguration-wenndann-aktionen/19.png)

2\_niveau 3 --> 2 OFF

![Actions si/alors – illustration 20](/img/konfiguration-wenndann-aktionen/20.png)

2\_niveau 2--> 1 OFF

![Actions si/alors – illustration 21](/img/konfiguration-wenndann-aktionen/21.png)

2\_niveau 1 --> 0 OFF

![Actions si/alors – illustration 22](/img/konfiguration-wenndann-aktionen/22.png)

### Pompe à chaleur RCP avec commande SG-Ready sur la valeur de mesure du bilan

La configuration décrit la structure d'une commande de pompe à chaleur en fonction de la mesure de bilan avec fonction SG-Ready.

Objectif : la pompe à chaleur doit pouvoir être pilotée en quatre niveaux de puissance via deux contacts électriques (compteur Telstar S0\_0 et S1).

SG-Ready ou Smartgrid-Ready est une logique de commande qui représente 4 états à l'aide de deux signaux selon le schéma suivant :

État de fonctionnement 1 : S0\_0 ARRÊT et S1 ARRÊT --> pompe à chaleur ARRÊT (0W)
État de fonctionnement 2 : S0\_0 ARRÊT et S1 MARCHE --> pompe à chaleur niveau de puissance 1 (800W)
État de fonctionnement 3 : S0\_0 MARCHE et S1 ARRÊT --> pompe à chaleur niveau de puissance 2 (2800W)
État de fonctionnement 4 : S0\_0 MARCHE et S1 MARCHE --> pompe à chaleur niveau de puissance 3 (5800W)

Pour réaliser une telle configuration avec succès, il faut ce que l'on appelle une statemachine (machine à états).
Pour 4 niveaux de puissance, nous devons donc disposer à chaque fois d'une action pour passer d'un niveau au suivant et pour revenir en arrière.

La commutation s'effectue dans les niveaux de puissance :

Niveau 0--> 1 : excédent de >800W
Niveau 1--> 2 : excédent de >2000W
Niveau 2--> 3 : excédent de >3000W

Niveau 3 -->2 : soutirage de >500W
Niveau 2 -->1 : soutirage de >500W
Niveau 1-->0 : soutirage de >200W

À chaque niveau, l'instruction si vérifie à quel niveau nous nous trouvons et contrôle ensuite simultanément la valeur du bilan.
Dans l'action alors, nous indiquons alors vers quel niveau il faut passer si toutes les actions si sont remplies.

Important : la commutation ne doit pas avoir lieu immédiatement et devrait être réglée à environ 5 minutes à chaque niveau au moyen du temps minimum de la valeur mesurée.

![Actions si/alors – illustration 23](/img/konfiguration-wenndann-aktionen/14.png)

![Actions si/alors – illustration 24](/img/konfiguration-wenndann-aktionen/15.png)

![Actions si/alors – illustration 25](/img/konfiguration-wenndann-aktionen/16.png)

Action 1 : 1\_niveau 0 --> 1 ON

![Actions si/alors – illustration 26](/img/konfiguration-wenndann-aktionen/17.png)

Action 2 : 1\_niveau 1 --> 2 ON

![Actions si/alors – illustration 27](/img/konfiguration-wenndann-aktionen/18.png)

Action 3 : 1\_niveau 2 --> 3 ON

![Actions si/alors – illustration 28](/img/konfiguration-wenndann-aktionen/19.png)

2\_niveau 3 --> 2 OFF

![Actions si/alors – illustration 29](/img/konfiguration-wenndann-aktionen/20.png)

2\_niveau 2--> 1 OFF

![Actions si/alors – illustration 30](/img/konfiguration-wenndann-aktionen/21.png)

2\_niveau 1 --> 0 OFF

![Actions si/alors – illustration 31](/img/konfiguration-wenndann-aktionen/22.png)

[Définir les plages tarifaires](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)

[Commande de boiler SI / ALORS](/konfiguration/wenndann-aktionen/beispiel-boilersteuerung)

[Définir les alarmes](/konfiguration/wenndann-aktionen/alarme)
