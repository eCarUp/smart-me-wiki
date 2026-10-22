---
title: 'Actions si/alors'
slug: '/konfiguration/wenndann-aktionen'
description: 'Pour pouvoir utiliser les actions si/alors, vous devez disposer d''une licence smart-me Limited ou Professional.'
sidebar_label: 'Actions si/alors'
---
## Conditions préalables

Pour pouvoir utiliser les actions si/alors, vous devez disposer d'une licence smart-me Limited ou Professional.

Pour pouvoir utiliser l'action si/alors Régulation Pico (Pico Regelung), vous devez disposer d'une licence smart-me Professional.

![Actions si/alors – Illustration 1](/img/konfiguration-wenndann-aktionen/01.png)

## À quoi servent les actions SI / ALORS

- Base des plages tarifaires pour les tarifs doubles et multiples dans le Billing

- Commandes avec les entrées et sorties des compteurs 

- Alarmes telles que les interruptions de connexion et les arrêts de compteur


[Définir les plages tarifaires](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)

[Commande de chauffe-eau SI / ALORS](/konfiguration/wenndann-aktionen/beispiel-boilersteuerung)

[Définir des alarmes](/konfiguration/wenndann-aktionen/alarme)

Des commandes automatiques peuvent être créées pour chaque appareil de la plateforme smart-me. Il existe deux manières de définir de telles actions : soit on crée des [actions déclenchées par un événement](/konfiguration/wenndann-aktionen/ereignisaktionen), soit des actions si/alors. Cet article explique les actions si/alors.  Par rapport aux actions déclenchées par un événement, elles permettent de définir des déclencheurs et des actions plus complexes :

- -   plusieurs déclencheurs (combinaisons ET et OU) sont possibles

    - plusieurs actions sont possibles

    - un groupe de compteurs peut être surveillé / commuté

    - surveillance de la connexion

    - arrêt du compteur


## Actions si/alors

Les actions si/alors sont enregistrées dans le cloud et ne fonctionnent donc que si l'appareil concerné dispose d'une connexion WLAN. Vous pouvez créer un nombre illimité d'actions si/alors pour tous les appareils smart-me. Les actions si/alors ne peuvent être créées et modifiées que dans le portail web. 

### Procédure

1.  Connectez-vous sur notre [site web](https://web.smart-me.com/login/) avec votre nom d'utilisateur et votre mot de passe

2.  Cliquez sur Configuration (Konfiguration)

3.  Cliquez sur la tuile Actions si/alors (Wenn /Dann-Aktionen)

4.  Cliquez sur le symbole + pour créer une nouvelle action ou cliquez sur une action existante pour la modifier.


## Conditions pour que les actions si/alors fonctionnent :

1.  Au moins un événement Si doit être défini, car c'est lui qui déclenche l'action. Si plusieurs événements Si ont été définis, ils peuvent être combinés avec des commandes ET et OU.

2.  Au moins une action Alors doit être définie (exception pour la condition relative aux tarifs). Si plusieurs actions Alors ont été définies, elles sont toutes exécutées simultanément dès que la ou les conditions Si sont remplies.

3.  Un nom pour cette action


## Événements Si

Les événements Si (déclencheurs) suivants sont disponibles :

![Valeur mesurée supérieure / inférieure](/img/konfiguration-wenndann-aktionen/02_EN.png)

Valeur mesurée supérieure/inférieure (Messwert grösser/kleiner)

- Définissez quel appareil de mesure d'énergie doit être surveillé.

    Il est également possible de sélectionner des dossiers entiers ; c'est alors la valeur moyenne de tous les compteurs de ce dossier qui est surveillée. Vous pouvez utiliser tous les compteurs d'énergie connectés au cloud, donc outre les compteurs d'électricité, également les compteurs de gaz, de chaleur ou d'eau (gateway). 


La valeur de contrôle se rapporte toujours à l'attribut principal. 

- Pour le compteur d'électricité, la puissance triphasée en W ou kW.

- Pour le compteur de chaleur ou de froid, en W ou kW.

- Pour le compteur d'eau et le compteur de gaz, en m3/h.


Définissez en outre pendant combien de temps la valeur mesurée doit être inférieure ou supérieure au seuil pour déclencher l'action Alors.

![Actions si/alors – Illustration 3](/img/konfiguration-wenndann-aktionen/03.png)

![Date & heure](/img/konfiguration-wenndann-aktionen/04.png)

Date et heure (Datum und Uhrzeit)

Vous pouvez définir des événements ponctuels ou des périodes comme événement Si. 

On distingue les variantes suivantes :

- Événements ponctuels

- Événements de période


Événements ponctuels :

Les événements ponctuels sont toujours exécutés à un moment précis. Si cela n'a pas été possible à ce moment-là pour des raisons techniques (p. ex. pas d'Internet), la commande n'est répétée qu'à la prochaine occurrence de la condition. Cette variante convient lorsque d'autres sources doivent pouvoir modifier entre-temps l'état de commutation concerné.

Événements de période :

Les événements de période sont vérifiés et répétés toutes les 5 minutes pendant la période définie. L'état de commutation serait modifié dès que les problèmes techniques seraient résolus, mais cela empêche toute intervention externe sur les états de commutation commandés.

![Actions si/alors – Illustration 5](/img/konfiguration-wenndann-aktionen/05.png)

![Pas de connexion](/img/konfiguration-wenndann-aktionen/06.png)

Pas de connexion (Keine Verbindung)

Un événement Si peut être défini pour des compteurs déconnectés du cloud. Les réglages suivants doivent être effectués :

- Quel compteur / dossier doit être surveillé

- Pendant combien de minutes la connexion doit être interrompue


Conseil : si un dossier est sélectionné, tous les compteurs situés hiérarchiquement en dessous sont surveillés.

Remarque : 

Cette action Si n'est exécutée qu'une seule fois. Cette commande ne sera exécutée à nouveau qu'une fois que tous les compteurs (dossiers) concernés par cette alarme auront été de nouveau en ligne.
(en cas d'alarme, vérifiez donc rapidement la connexion actuelle de tous les compteurs)

![Arrêt du compteur](/img/konfiguration-wenndann-aktionen/07.png)

Arrêt du compteur (Zählerstillstand)

Un événement Si peut être défini pour un arrêt du compteur. Les réglages suivants doivent être effectués :

- Quel compteur doit être surveillé

- Pendant combien de temps l'arrêt du compteur doit durer pour que la condition soit remplie.


Remarque : 

Choisissez ici comme unité de temps plus d'un jour (1440 minutes) ou au moins le double de l'intervalle de relevé du compteur le plus long.

![États de commutation](/img/konfiguration-wenndann-aktionen/08.png)

États de commutation (Schaltzustände)

Au lieu de surveiller la puissance d'un compteur, il est également possible de surveiller l'état de commutation. Les réglages suivants doivent être effectués :

- Quel compteur doit être surveillé

- Où exactement l'état de commutation doit être surveillé (sortie ou entrée)

    - Phases (uniquement compteur triphasé 32A et Plug)

    - [Sortie libre de potentiel](/schnittstellen/ein-und-ausgaenge)

    - [Entrée numérique](/schnittstellen/ein-und-ausgaenge)

- Pour quel état l'action Alors doit être déclenchée : « Marche » (Ein), « Arrêt » (Aus) ou lors d'un changement d'état.

- Durée minimale : pendant combien de temps le compteur doit se trouver dans cet état pour que la condition de l'action Alors soit remplie.


![Courant supérieur / inférieur](/img/konfiguration-wenndann-aktionen/09.png)

La fonction Courants supérieurs / inférieurs (Ströme grösser / kleiner) permet de commander des charges afin d'éviter des situations de surcharge à des points de référence. 

Elle peut notamment servir de déclencheur pour une régulation Pico.

La fonction suit automatiquement le courant positif le plus élevé de l'appareil. 

Remarque : cela s'applique également lorsque le seuil « inférieur » est sélectionné.

Exemple de compteur triphasé :

Phase 1 : -5A
Phase 2 : 3A
Phase 3 : 7A

Courant de contrôle résultant pour l'évaluation : 7A

On définit ensuite le seuil de contrôle (Threshold) et si le déclenchement a lieu en cas de dépassement ou de passage en dessous.

Une durée minimale peut également être indiquée.

![Actions si/alors – Illustration 10](/img/konfiguration-wenndann-aktionen/10.png)

## Actions Alors

Dès que les événements Si se produisent, les actions Alors sont déclenchées.

Les actions Alors suivantes sont disponibles :

- Alarme

- Mise en marche/arrêt

- Régulation Pico (gestion de la charge dynamique pour les bornes de recharge et optimisation solaire)


![Alarme](/img/konfiguration-wenndann-aktionen/11.png)

[Alarme](/konfiguration/wenndann-aktionen/alarme)

Lorsque les événements Si se sont produits, un e-mail est envoyé. Les réglages suivants doivent être effectués :

- Nom de l'alarme

- Sujet : objet des e-mails d'alarme

- Message : texte contenu dans l'e-mail d'alarme


Des espaces réservés peuvent être définis dans le sujet (objet) et dans le message. AlarmnName et EventActionName sont alors remplacés dans l'e-mail envoyé par le « nom de l'alarme » saisi ou par le « nom de l'événement si/alors ».

![Mise en marche / arrêt](/img/konfiguration-wenndann-aktionen/12.png)

Mise en marche/arrêt (Ein- /Ausschalten)

Lorsque les événements Si se produisent, l'appareil sélectionné commute. Il est également possible de sélectionner des dossiers ; tous les appareils commutables de ce dossier sont alors commutés en conséquence.

Remarque : les compteurs ne disposent d'états de commutation que si ceux-ci ont également été activés au niveau du matériel.

Les réglages suivants doivent être effectués :

- Quel compteur ou dossier doit être commuté

- Comment doit-il être commuté ?

    - Marche (Ein)

    - Arrêt (Aus)

    - Basculer (Umschalten) (uniquement smart-me Plug)


![Actions si/alors – Illustration 13](/img/konfiguration-wenndann-aktionen/13.png)

## Exemples : commande de chauffe-eau avec SI/ALORS

[Exemple de commande de chauffe-eau](/konfiguration/wenndann-aktionen/beispiel-boilersteuerung) 

## Exemples : commandes RCP (regroupement dans le cadre de la consommation propre)

### RCP : pompe à chaleur avec commande SG-Ready sur la valeur de mesure du bilan

La configuration présente la structure d'une commande de pompe à chaleur en fonction de la mesure du bilan avec la fonction SG-Ready.

Objectif : la pompe à chaleur doit pouvoir être commandée sur quatre niveaux de puissance via deux contacts électriques (compteur Telstar S0\_0 et S1).

SG-Ready ou Smartgrid-Ready est une logique de commande qui représente 4 états avec deux signaux selon le schéma suivant :

État de fonctionnement 1 : S0\_0 ARRÊT et S1 ARRÊT --> pompe à chaleur ARRÊT (0W)
État de fonctionnement 2 : S0\_0 ARRÊT et S1 MARCHE --> pompe à chaleur niveau de puissance 1 (800W)
État de fonctionnement 3 : S0\_0 MARCHE et S1 ARRÊT --> pompe à chaleur niveau de puissance 2 (2800W)
État de fonctionnement 4 : S0\_0 MARCHE et S1 MARCHE --> pompe à chaleur niveau de puissance 3 (5800W)

Pour mener à bien une telle configuration, il faut ce qu'on appelle une statemachine (machine à états).
Pour 4 niveaux de puissance, il nous faut donc à chaque fois une action pour passer d'un niveau au suivant et pour revenir en arrière.

La commutation s'effectue selon les niveaux de puissance suivants :

Niveau 0--> 1 : excédent de >800W
Niveau 1--> 2 : excédent de >2000W
Niveau 2--> 3 : excédent de >3000W

Niveau 3 -->2 : soutirage de >500W
Niveau 2 -->1 : soutirage de >500W
Niveau 1-->0 : soutirage de >200W

À chaque niveau, l'instruction Si vérifie dans quel niveau nous nous trouvons et contrôle en même temps la valeur du bilan.
Dans l'action Alors, nous indiquons vers quel niveau il faut passer si toutes les actions Si sont remplies.

Important : la commutation ne doit pas avoir lieu immédiatement et doit être réglée à env. 5 minutes à chaque niveau au moyen de la durée minimale de la valeur mesurée.

![Actions si/alors – Illustration 14](/img/konfiguration-wenndann-aktionen/14.png)

![Actions si/alors – Illustration 15](/img/konfiguration-wenndann-aktionen/15.png)

![Actions si/alors – Illustration 16](/img/konfiguration-wenndann-aktionen/16.png)

Action 1 : 1\_Stufe 0 --> 1 ON

![Actions si/alors – Illustration 17](/img/konfiguration-wenndann-aktionen/17.png)

Action 2 : 1\_Stufe 1 --> 2 ON

![Actions si/alors – Illustration 18](/img/konfiguration-wenndann-aktionen/18.png)

Action 3 : 1\_Stufe 2 --> 3 ON

![Actions si/alors – Illustration 19](/img/konfiguration-wenndann-aktionen/19.png)

2\_Stufe 3 --> 2 OFF

![Actions si/alors – Illustration 20](/img/konfiguration-wenndann-aktionen/20.png)

2\_Stufe 2--> 1 OFF

![Actions si/alors – Illustration 21](/img/konfiguration-wenndann-aktionen/21.png)

2\_Stufe 1 --> 0 OFF

![Actions si/alors – Illustration 22](/img/konfiguration-wenndann-aktionen/22.png)

### RCP : pompe à chaleur avec commande SG-Ready sur la valeur de mesure du bilan

La configuration présente la structure d'une commande de pompe à chaleur en fonction de la mesure du bilan avec la fonction SG-Ready.

Objectif : la pompe à chaleur doit pouvoir être commandée sur quatre niveaux de puissance via deux contacts électriques (compteur Telstar S0\_0 et S1).

SG-Ready ou Smartgrid-Ready est une logique de commande qui représente 4 états avec deux signaux selon le schéma suivant :

État de fonctionnement 1 : S0\_0 ARRÊT et S1 ARRÊT --> pompe à chaleur ARRÊT (0W)
État de fonctionnement 2 : S0\_0 ARRÊT et S1 MARCHE --> pompe à chaleur niveau de puissance 1 (800W)
État de fonctionnement 3 : S0\_0 MARCHE et S1 ARRÊT --> pompe à chaleur niveau de puissance 2 (2800W)
État de fonctionnement 4 : S0\_0 MARCHE et S1 MARCHE --> pompe à chaleur niveau de puissance 3 (5800W)

Pour mener à bien une telle configuration, il faut ce qu'on appelle une statemachine (machine à états).
Pour 4 niveaux de puissance, il nous faut donc à chaque fois une action pour passer d'un niveau au suivant et pour revenir en arrière.

La commutation s'effectue selon les niveaux de puissance suivants :

Niveau 0--> 1 : excédent de >800W
Niveau 1--> 2 : excédent de >2000W
Niveau 2--> 3 : excédent de >3000W

Niveau 3 -->2 : soutirage de >500W
Niveau 2 -->1 : soutirage de >500W
Niveau 1-->0 : soutirage de >200W

À chaque niveau, l'instruction Si vérifie dans quel niveau nous nous trouvons et contrôle en même temps la valeur du bilan.
Dans l'action Alors, nous indiquons ensuite vers quel niveau il faut passer si toutes les actions Si sont remplies.

Important : la commutation ne doit pas avoir lieu immédiatement et doit être réglée à env. 5 minutes à chaque niveau au moyen de la durée minimale de la valeur mesurée.

![Actions si/alors – Illustration 23](/img/konfiguration-wenndann-aktionen/14.png)

![Actions si/alors – Illustration 24](/img/konfiguration-wenndann-aktionen/15.png)

![Actions si/alors – Illustration 25](/img/konfiguration-wenndann-aktionen/16.png)

Action 1 : 1\_Stufe 0 --> 1 ON

![Actions si/alors – Illustration 26](/img/konfiguration-wenndann-aktionen/17.png)

Action 2 : 1\_Stufe 1 --> 2 ON

![Actions si/alors – Illustration 27](/img/konfiguration-wenndann-aktionen/18.png)

Action 3 : 1\_Stufe 2 --> 3 ON

![Actions si/alors – Illustration 28](/img/konfiguration-wenndann-aktionen/19.png)

2\_Stufe 3 --> 2 OFF

![Actions si/alors – Illustration 29](/img/konfiguration-wenndann-aktionen/20.png)

2\_Stufe 2--> 1 OFF

![Actions si/alors – Illustration 30](/img/konfiguration-wenndann-aktionen/21.png)

2\_Stufe 1 --> 0 OFF

![Actions si/alors – Illustration 31](/img/konfiguration-wenndann-aktionen/22.png)

[Définir les plages tarifaires](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)

[Commande de chauffe-eau SI / ALORS](/konfiguration/wenndann-aktionen/beispiel-boilersteuerung)

[Définir des alarmes](/konfiguration/wenndann-aktionen/alarme)
