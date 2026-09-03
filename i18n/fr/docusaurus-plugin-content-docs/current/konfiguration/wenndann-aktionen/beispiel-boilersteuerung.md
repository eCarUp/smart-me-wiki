---
title: 'Exemples de commande de chauffe-eau avec des actions si/alors'
slug: '/konfiguration/wenndann-aktionen/beispiel-boilersteuerung'
description: 'Des exemples de configuration sont décrits en détail sur cette page.'
sidebar_label: 'Exemple commande de chauffe-eau'
---
Des exemples de configuration sont décrits en détail sur cette page.

## Conditions préalables

Pour pouvoir utiliser les actions si/alors, tu dois disposer d'une licence smart-me Limited ou Professional.

## Principes de base

Les données techniques figurent auprès des [produits](/produkte) correspondants (p. ex. la puissance de commutation maximale).

La configuration des sorties est décrite sur la page [Entrées et sorties](/schnittstellen/ein_und_ausgaenge) (p. ex. l'activation de la sortie 1).

Les principes de base sont décrits sous [Actions si/alors](/konfiguration/wenndann-aktionen) (p. ex. où trouver les actions si/alors).

Note que les [actions si/alors](/konfiguration/wenndann-aktionen) ne fonctionnent correctement que si la connexion au cloud smart-me est assurée. Les [actions déclenchées par un événement](/konfiguration/wenndann-aktionen/ereignisaktionen)  sont plus limitées, mais elles sont enregistrées et exécutées localement.

Lors de la configuration des actions si/alors, toujours vérifier si l'unité affichée est le watt ou le kilowatt.

Les compteurs smart-me sont équipés de relais bistables : si une mise en marche est configurée, l'arrêt doit toujours être configuré aussi.

## Introduction

Déterminer la consommation et prévoir une réserve pour les variations de consommation

Pour configurer une bonne commande, il est important de connaître la puissance consommée par les consommateurs. Il est également nécessaire de prévoir une réserve pour chaque cas. Si, par exemple, le chauffe-eau des combles a besoin de 3 kW, le chauffe-eau est mis en marche lorsque moins de -3,5 kW sont mesurés sur le compteur de bilan et il n'est éteint que lorsque plus de 0 kW sont mesurés. La différence de 0,5 kW sert alors de tampon lorsque quelqu'un allume p. ex. un ordinateur (60 watts), afin qu'il n'y ait pas immédiatement trop peu d'énergie disponible dans ce cas.

Mise en marche ou arrêt différé

En outre, un laps de temps doit être pris en compte avant la mise en marche ou l'arrêt. Ainsi, le chauffe-eau n'est p. ex. éteint que lorsque la valeur de 0 kW est dépassée pendant plus de 5 minutes. On s'assure ainsi qu'un consommateur de courte durée comme un four ou une bouilloire n'entraîne pas immédiatement l'arrêt et la mise en marche permanents du consommateur. Cela est d'autant plus important que le bâtiment est grand.

Déterminer combien de consommateurs peuvent être mis en marche simultanément

Tu devrais toujours vérifier comment les fusibles ont été dimensionnés. Cela doit être pris en compte lorsque tous les consommateurs fonctionnent en même temps, p. ex. la nuit. Si le fusible est trop petit, tu dois configurer les actions si/alors de manière que les consommateurs ne soient pas mis en marche simultanément.

Déterminer les temps de mise en marche et d'arrêt des consommateurs pour une mise en marche par étapes

Lors de la mise en marche progressive de consommateurs, p. ex. de plusieurs chauffe-eau, il faut s'assurer que le délai entre le premier et le deuxième consommateur est suffisamment long pour que le premier consommateur absorbe la pleine puissance. Si, p. ex., il ne faut que 20 secondes pour que le consommateur absorbe la pleine puissance, les consommateurs peuvent être mis en marche avec un délai d'une minute. À condition qu'il y ait suffisamment de courant.

S'il existe des heures de mise en marche et d'arrêt fixes, il faut veiller à les décaler d'au moins 1 minute. Par exemple, mise en marche entre 5:00 et 8:00 et arrêt entre 8:01 et 4:59

Arrêt des consommateurs

Lors de l'arrêt de consommateurs, p. ex. de plusieurs chauffe-eau, il est possible de tout éteindre en une seule fois. Donc p. ex. avec un délai de 5 minutes (arrêt différé). Mais il est aussi possible d'éteindre les chauffe-eau progressivement.

Exemple d'un arrêt progressif avec délai : 

- Le premier chauffe-eau s'éteint avec un délai de 5 minutes, afin que quelqu'un puisse p. ex. allumer la bouilloire sans que cela éteigne le chauffe-eau. 

- Le deuxième chauffe-eau est éteint après 7 minutes de soutirage réseau élevé (donc 5 minutes après le premier + 2 minutes d'attente)

- Le troisième chauffe-eau est alors éteint après 9 minutes de soutirage réseau élevé


Optimisé pour le réseau vs. optimisé pour l'autoconsommation

Lors de la configuration des seuils de mise en marche et d'arrêt, il faut décider s'il s'agit d'une installation optimisée pour le réseau, c'est-à-dire que les consommateurs se mettent en marche et s'arrêtent autant que possible lorsque du courant est soutiré du réseau. Ou si l'installation doit être optimisée pour l'autoconsommation. Cela signifie qu'il faut utiliser le plus de courant possible provenant du toit.

- Exemple pour un consommateur de 2,5 kW avec une réserve de 0,5 kW pour les variations de consommation.

    - Optimisé pour le réseau : mettre le chauffe-eau en marche à -3 kW et l'éteindre à 0 kW. 

    - Optimisé pour l'autoconsommation : mettre le chauffe-eau en marche à -1,5 kW et l'éteindre à +1,5 kW.

    - Mi-mi : mettre le chauffe-eau en marche à -2.5 kW et l'éteindre à + 0.5 kW.


Lors de la configuration, il faut tenir compte du fait que la variante avec autoconsommation optimisée est plus rentable en hiver, mais qu'en été, par beau temps, les consommateurs sont mis en marche très tôt et sont déjà pleins l'après-midi lorsqu'il y a du soleil.

Nous avons fait de bonnes expériences lorsque les consommateurs se mettent en marche au moment où ils peuvent être alimentés à 100 % en courant solaire et que la réserve pour de petites variations dans la part de réseau est prise en compte. Donc l'exemple « Mi-mi » ci-dessus.

Bouton booster

L'installation d'un bouton booster pour un consommateur est certes possible, mais elle rend l'installation plus laborieuse et plus compliquée. Il faut en outre noter que seul le propriétaire du compte smart-me a la possibilité d'activer un bouton booster. 

Pour cette fonction, nous devons utiliser une sortie numérique qui n'est pas physiquement reliée à un consommateur. Nous utilisons alors le bouton uniquement comme état pour les actions si/alors.

Réchauffement avec heures pleines et heures creuses vs. réchauffement avec tarif unique. 

Pour les chauffe-eau qui sont réchauffés avec les actions si/alors, la structure tarifaire locale peut être prise en compte. 

Si le courant est moins cher la nuit, il est courant de réchauffer la nuit. Cela a toutefois pour conséquence que le chauffe-eau atteint en règle générale la température maximale au lever du soleil. 

Si un tarif unique est appliqué, il est préférable d'échelonner le réchauffement à partir de 12 heures. Ainsi, en été, le chauffe-eau peut être chargé de manière optimale le matin et, le cas échéant, réchauffé l'après-midi. De cette manière, le rendement solaire pour le chauffe-eau est meilleur. Dans les exemples suivants, le réchauffement a lieu la nuit. Si cela doit se faire pendant la journée, modifiez simplement les heures de mise en marche des exemples. Veillez à ce que l'arrêt soit également pris en compte.

Commande de chauffe-eau à 3 niveaux

L'exemple ci-dessous pour la commande de 3 chauffe-eau peut également être utilisé pour la commande d'un chauffe-eau à 3 phases. La configuration est exactement la même.

![Exemples de commande de chauffe-eau avec des actions si/alors – Illustration 1](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/01.png)

Image : RCP avec 3 chauffe-eau y compris réchauffement pendant la nuit (rectangles verts)

## Exemple optimisé pour le solaire avec réchauffement avec 1 chauffe-eau (explication détaillée avec images et explication sous forme de tableau)

Lors de la configuration des actions si/alors, toujours vérifier si l'unité affichée est le watt ou le kilowatt.

Les relais sont reliés au chauffe-eau et ont reçu le nom « Boiler ».

Durée jusqu'à ce que la pleine puissance soit absorbée : 20 secondes

Le chauffe-eau se met en marche de lui-même lorsqu'une température minimale est atteinte : non

Puissance chauffe-eau rez-de-chaussée : 6 kW

![Exemples de commande de chauffe-eau avec des actions si/alors – Illustration 2](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/02.png)

Configuration : chauffe-eau 1 marche (rez-de-chaussée)

Action si/alors : Boiler EG Ein (chauffe-eau rez-de-chaussée marche)

Cette action si/alors remplit la fonction :

- mettre le chauffe-eau en marche lorsque le compteur de bilan fournit suffisamment de courant pendant plus d'une minute.


Ou

- Il est une heure déterminée et le chauffe-eau est de toute façon chauffé pendant trois heures.


![Exemples de commande de chauffe-eau avec des actions si/alors – Illustration 3](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/03.png)

Si valeur de mesure supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz (bilan) 

- Seuil (Schwellwert) : unter (inférieur) 

- Puissance (Leistung) : -6000 watts

- Durée minimale (Mindestzeit) : 1 minute


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Zeitspanne (plage horaire) / Jeden Tag (chaque jour)

- De (Von) : 22:00

- Jours de la semaine (Wochentage) : Alle Wählen (tout sélectionner)

- À (Bis) : 01:00


![Exemples de commande de chauffe-eau avec des actions si/alors – Illustration 4](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/04.png)

Si événement (Wenn Ereignis)

- Type (Typ) : Oder Verknüpfung (liaison OU)


![Exemples de commande de chauffe-eau avec des actions si/alors – Illustration 5](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/05.png)

Alors mise en marche / arrêt (Dann Ein / ausschalten)

- Compteur (Zähler) : EG (rez-de-chaussée)

- Boiler (chauffe-eau) : Ein (marche)


![Exemples de commande de chauffe-eau avec des actions si/alors – Illustration 6](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/06.png)

![Exemples de commande de chauffe-eau avec des actions si/alors – Illustration 7](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/07.png)

### Configuration : chauffe-eau arrêt, vue sous forme de tableau (version courte)



Action si/alors : Boiler EG Aus (chauffe-eau rez-de-chaussée arrêt)

Cette action si/alors remplit la fonction :

- Éteindre le chauffe-eau lorsque le compteur de bilan ne fournit pas suffisamment de courant pendant plus de trois minutes.

- Et

- Lorsque le chauffe-eau ne se trouve pas dans la période définie durant laquelle il est de toute façon réchauffé pendant trois heures.


La configuration est expliquée ci-dessous dans la vue sous forme de tableau. Il est important de noter qu'il s'agit d'une action ET, que le seuil est désormais supérieur et non plus inférieur et que les heures sont l'inverse de celles de la mise en marche (réchauffement), décalées d'une minute.

Configuration : chauffe-eau 1 arrêt (rez-de-chaussée)

Action si/alors : Boiler EG Aus (chauffe-eau rez-de-chaussée arrêt)

Si valeur de mesure supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz (bilan) 

- Seuil (Schwellwert) : über (supérieur)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 4 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Zeitspanne (plage horaire) / Jeden Tag (chaque jour)

- De (Von) : 01:01

- Jours de la semaine (Wochentage) : Alle Wählen (tout sélectionner)

- À (Bis) : 21:59


Si événement (Wenn Ereignis)

- Type (Typ) : Und Verknüpfung (liaison ET)


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : EG (rez-de-chaussée)

- Boiler (chauffe-eau) : Aus (arrêt)


![Exemples de commande de chauffe-eau avec des actions si/alors – Illustration 8](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/08.png)

## Exemple optimisé pour le solaire avec réchauffement avec 3 chauffe-eau (explication sous forme de tableau)

Lors de la configuration des actions si/alors, toujours vérifier si l'unité affichée est le watt ou le kilowatt

Les relais sont reliés aux chauffe-eau et ont reçu le nom « Boiler ».

Durée jusqu'à ce que la pleine puissance soit absorbée : 20 secondes

Le chauffe-eau se met en marche de lui-même lorsqu'une température minimale est atteinte : non

Puissance : 

- Chauffe-eau rez-de-chaussée : 6 kW

- Chauffe-eau combles : 3 kW

- Chauffe-eau sous-sol : 2 kW


Pour garantir que les chauffe-eau ne sont pas mis en marche simultanément, nous allons intégrer un délai avant la mise en marche de chaque chauffe-eau. Le chauffe-eau dont le délai est le plus court présente le plus grand avantage dans l'utilisation de l'énergie solaire, puisqu'il est mis en marche en premier. Dans cet exemple, nous allons mettre en marche en premier le chauffe-eau ayant la consommation la plus élevée, afin qu'il ait la possibilité d'être mis en marche en premier après une longue période de consommation élevée, p. ex. à midi.

### Configuration : chauffe-eau marche, vue sous forme de tableau (version courte)

Nous abordons maintenant la configuration. Un exemple plus simple est expliqué en détail plus haut.

La présentation sous forme de tableau permet de reconnaître plus rapidement les différences sur les écrans de bureau et, par conséquent, la logique qui les sous-tend.

Configuration : chauffe-eau 1 marche (rez-de-chaussée)

Action si/alors : Boiler EG Ein (chauffe-eau rez-de-chaussée marche)

Si valeur de mesure supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz (bilan) 

- Seuil (Schwellwert) : unter (inférieur) 

- Puissance (Leistung) : \-6000 watts

- Durée minimale (Mindestzeit) : 1 minute


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Zeitspanne (plage horaire) / Jeden Tag (chaque jour)

- De (Von) : 22:00

- Jours de la semaine (Wochentage) : Alle wählen (tout sélectionner)

- À (Bis) : 01:00


Si événement (Wenn Ereignis)

- Type (Typ) : Oder Verknüpfung (liaison OU)


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : EG (rez-de-chaussée)

- Boiler (chauffe-eau) : Ein (marche)


Configuration : chauffe-eau 2 marche (combles)

Action si/alors : Boiler DG Ein (chauffe-eau combles marche)

Si valeur de mesure supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz (bilan) 

- Seuil (Schwellwert) : unter (inférieur)

- Puissance (Leistung) : \-3000 watts

- Durée minimale (Mindestzeit) : 2 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Zeitspanne (plage horaire) / Jeden Tag (chaque jour)

- De (Von) : 01:00

- Jours de la semaine (Wochentage) : Alle wählen (tout sélectionner)

- À (Bis) : 05:00


Si événement (Wenn Ereignis)

- Type (Typ) : Oder Verknüpfung (liaison OU)


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : DG (combles)

- Boiler (chauffe-eau) : Ein (marche)


Configuration : chauffe-eau 3 marche (sous-sol)

Action si/alors : Boiler UG Ein (chauffe-eau sous-sol marche)

Si valeur de mesure supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz (bilan) 

- Seuil (Schwellwert) : unter (inférieur) 

- Puissance (Leistung) : \-2000 watts

- Durée minimale (Mindestzeit) : 3 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Zeitspanne (plage horaire) / Jeden Tag (chaque jour)

- De (Von) : 02:00

- Jours de la semaine (Wochentage) : Alle wählen (tout sélectionner)

- À (Bis) : 06:00


Si événement (Wenn Ereignis)

- Type (Typ) : Oder Verknüpfung (liaison OU)


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : UG (sous-sol)

- Boiler (chauffe-eau) : Ein (marche)


### Configuration : chauffe-eau arrêt, vue sous forme de tableau (version courte)

Configuration : chauffe-eau 1 arrêt (rez-de-chaussée)

Action si/alors : Boiler EG Aus (chauffe-eau rez-de-chaussée arrêt)

Si valeur de mesure supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz (bilan) 

- Seuil (Schwellwert) : über (supérieur)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 4 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Zeitspanne (plage horaire) / Jeden Tag (chaque jour)

- De (Von) : 01:01

- Jours de la semaine (Wochentage) : Alle Wählen (tout sélectionner)

- À (Bis) : 21:59


Si événement (Wenn Ereignis)

- Type (Typ) : Und Verknüpfung (liaison ET)


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : EG (rez-de-chaussée)

- Boiler (chauffe-eau) : Aus (arrêt)


Configuration : chauffe-eau 2 arrêt (combles)

Action si/alors : Boiler DG Aus (chauffe-eau combles arrêt)

Si valeur de mesure supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz (bilan) 

- Seuil (Schwellwert) : über (supérieur)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 5 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Zeitspanne (plage horaire) / Jeden Tag (chaque jour)

- De (Von) : 05:01

- Jours de la semaine (Wochentage) : Alle Wählen (tout sélectionner)

- À (Bis) : 00:59


Si événement (Wenn Ereignis)

- Type (Typ) : Und Verknüpfung (liaison ET)


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : DG (combles)

- Boiler (chauffe-eau) : Aus (arrêt)


Configuration : chauffe-eau 3 arrêt (sous-sol)

Action si/alors : Boiler UG Aus (chauffe-eau sous-sol arrêt)

Si valeur de mesure supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz (bilan) 

- Seuil (Schwellwert) : über (supérieur)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 6 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Zeitspanne (plage horaire) / Jeden Tag (chaque jour)

- De (Von) : 06:01

- Jours de la semaine (Wochentage) : Alle Wählen (tout sélectionner)

- À (Bis) : 01:59


Si événement (Wenn Ereignis)

- Type (Typ) : Und Verknüpfung (liaison ET)


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : UG (sous-sol)

- Boiler (chauffe-eau) : Aus (arrêt)


## Exemple optimisé pour le solaire sans réchauffement avec 1 chauffe-eau

Identique à l'« Exemple optimisé pour le solaire sans réchauffement avec 3 chauffe-eau (explication sous forme de tableau) » ci-dessous. Tu dois seulement faire la configuration pour un chauffe-eau.

## Exemple optimisé pour le solaire sans réchauffement avec 3 chauffe-eau (explication sous forme de tableau)

Lors de la configuration des actions si/alors, toujours vérifier si l'unité affichée est le watt ou le kilowatt.

Les relais sont reliés aux chauffe-eau et ont reçu le nom « Boiler ».

Durée jusqu'à ce que la pleine puissance soit absorbée : 20 secondes

Le chauffe-eau se met en marche de lui-même lorsqu'une température minimale est atteinte : oui

Puissance : 

- Chauffe-eau rez-de-chaussée : 6 kW

- Chauffe-eau combles : 3 kW

- Chauffe-eau sous-sol : 2 kW


Pour garantir que les chauffe-eau ne sont pas mis en marche simultanément, nous allons intégrer un délai avant la mise en marche de chaque chauffe-eau. Le chauffe-eau dont le délai est le plus court présente le plus grand avantage dans l'utilisation de l'énergie solaire, puisqu'il est mis en marche en premier. Dans cet exemple, nous allons mettre en marche en premier le chauffe-eau ayant la consommation la plus élevée, afin qu'il ait la possibilité d'être mis en marche en premier après une longue période de consommation élevée, p. ex. à midi.

### Configuration : chauffe-eau marche, vue sous forme de tableau (version courte)

Nous abordons maintenant la configuration. Un exemple plus simple est expliqué en détail plus haut.

La présentation sous forme de tableau permet de reconnaître plus rapidement les différences sur les écrans de bureau et, par conséquent, la logique qui les sous-tend.

![Exemples de commande de chauffe-eau avec des actions si/alors – Illustration 9](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/09.png)

Configuration : chauffe-eau 1 marche (rez-de-chaussée)

Action si/alors : Boiler EG Ein (chauffe-eau rez-de-chaussée marche)

Si valeur de mesure supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz (bilan) 

- Seuil (Schwellwert) : unter (inférieur) 

- Puissance (Leistung) : \-6000 watts

- Durée minimale (Mindestzeit) : 1 minute


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : EG (rez-de-chaussée)

- Boiler (chauffe-eau) : Ein (marche)


Configuration : chauffe-eau 2 marche (combles)

Action si/alors : Boiler DG Ein (chauffe-eau combles marche)

Si valeur de mesure supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz (bilan) 

- Seuil (Schwellwert) : unter (inférieur)

- Puissance (Leistung) : \-3000 watts

- Durée minimale (Mindestzeit) : 2 minutes


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : DG (combles)

- Boiler (chauffe-eau) : Ein (marche)


Configuration : chauffe-eau 3 marche (sous-sol)

Action si/alors : Boiler UG Ein (chauffe-eau sous-sol marche)

Si valeur de mesure supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz (bilan) 

- Seuil (Schwellwert) : unter (inférieur) 

- Puissance (Leistung) : \-2000 watts

- Durée minimale (Mindestzeit) : 3 minutes


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : UG (sous-sol)

- Boiler (chauffe-eau) : Ein (marche)


### Configuration : chauffe-eau arrêt, vue sous forme de tableau (version courte)

![Exemples de commande de chauffe-eau avec des actions si/alors – Illustration 10](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/10.png)

Configuration : chauffe-eau 1 arrêt (rez-de-chaussée)

Action si/alors : Boiler EG Aus (chauffe-eau rez-de-chaussée arrêt)

Si valeur de mesure supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz (bilan) 

- Seuil (Schwellwert) : über (supérieur)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 4 minutes


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : EG (rez-de-chaussée)

- Boiler (chauffe-eau) : Aus (arrêt)


Configuration : chauffe-eau 2 arrêt (combles)

Action si/alors : Boiler DG Aus (chauffe-eau combles arrêt)

Si valeur de mesure supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz (bilan) 

- Seuil (Schwellwert) : über (supérieur)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 5 minutes


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : DG (combles)

- Boiler (chauffe-eau) : Aus (arrêt)


Configuration : chauffe-eau 3 arrêt (sous-sol)

Action si/alors : Boiler UG Aus (chauffe-eau sous-sol arrêt)

Si valeur de mesure supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz (bilan) 

- Seuil (Schwellwert) : über (supérieur)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 6 minutes


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : UG (sous-sol)

- Boiler (chauffe-eau) : Aus (arrêt)


## Exemple optimisé pour le solaire sans réchauffement avec 1 chauffe-eau et booster / légionelles

Lors de la configuration des actions si/alors, toujours vérifier si l'unité affichée est le watt ou le kilowatt.

Les relais sont reliés aux chauffe-eau et ont reçu le nom « Boiler ».

Le mosfet est configuré conformément aux [Entrées et sorties](/schnittstellen/ein_und_ausgaenge) et porte le nom « Booster und Legionelle ».

Durée jusqu'à ce que la pleine puissance soit absorbée : 20 secondes

Le chauffe-eau se met en marche de lui-même lorsqu'une température minimale est atteinte : oui

Puissance : 

- Chauffe-eau : 7 kW


### Configuration : légionelles marche

Cela ne doit être configuré que si la protection contre les légionelles doit être activée, p. ex. 1× par semaine le vendredi à partir de 3:15. Une durée est indiquée ici, qui est de 30 minutes (valeur par défaut), afin de pouvoir garantir que l'état est mis sur « Ein » (marche) même si un paquet de données est perdu.

Action si/alors : Legionelle Ein (légionelles marche)

Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Zeitspanne (plage horaire) / Jeden Tag (chaque jour)

- De (Von) : 03:15

- Jours de la semaine (Wochentage) : Alle Wählen (tout sélectionner)

- À (Bis) : 03:45


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : EG (rez-de-chaussée)

- Sortie Booster und Legionelle (booster et légionelles) : Ein (marche)

- Durée minimale (Mindestzeit) : non


![Exemples de commande de chauffe-eau avec des actions si/alors – Illustration 11](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/11.png)

### Configuration : booster et légionelles arrêt

Cela correspond au moment auquel le booster (activé manuellement par l'utilisateur dans l'interface smart-me) ou la commutation légionelles (configurée comme ci-dessus) doit être désactivé automatiquement, parce que le chauffe-eau est alors réchauffé, p. ex. 90 minutes. 

Action si/alors : Booster Legionelle Aus (booster légionelles arrêt)

Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG (rez-de-chaussée)

- Sortie Booster und Legionelle (booster et légionelles) : Ein (marche)

- Durée minimale (Mindestzeit) : oui, 90 minutes


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : EG (rez-de-chaussée)

- Sortie Booster und Legionelle (booster et légionelles) : Aus (arrêt)


![Exemples de commande de chauffe-eau avec des actions si/alors – Illustration 12](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/12.png)

### Configuration : chauffe-eau marche, vue sous forme de tableau (version courte)

Configuration : chauffe-eau marche

Action si/alors : Boiler Ein (chauffe-eau marche)

Si valeur de mesure supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz (bilan) 

- Seuil (Schwellwert) : unter (inférieur) 

- Puissance (Leistung) : \-7000 watts

- Durée minimale (Mindestzeit) : 1 minute


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG (rez-de-chaussée)

- Sortie Booster und Legionelle (booster et légionelles) : Ein (marche)

- Durée minimale (Mindestzeit) : non


Si événement (Wenn Ereignis)

- Type (Typ) : ODER Verknüpfung (liaison OU)


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : EG (rez-de-chaussée)

- Boiler (chauffe-eau) : Ein (marche)


![Exemples de commande de chauffe-eau avec des actions si/alors – Illustration 13](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/13.png)

### Configuration : chauffe-eau arrêt, vue sous forme de tableau (version courte)

Configuration : chauffe-eau 1 arrêt (rez-de-chaussée)

Action si/alors : Boiler EG Aus (chauffe-eau rez-de-chaussée arrêt)

Si valeur de mesure supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz (bilan) 

- Seuil (Schwellwert) : über (supérieur)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 1 minute


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG (rez-de-chaussée)

- Sortie Booster und Legionelle (booster et légionelles) : Aus (arrêt)

- Durée minimale (Mindestzeit) : non


Si événement (Wenn Ereignis)

- Type (Typ) : UND Verknüpfung (liaison ET)


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : EG (rez-de-chaussée)

- Boiler (chauffe-eau) : Aus (arrêt)


![Exemples de commande de chauffe-eau avec des actions si/alors – Illustration 14](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/14.png)

## Exemple optimisé pour le solaire avec réchauffement et bouton booster avec 1 chauffe-eau

Identique à l'« Exemple optimisé pour le solaire avec réchauffement et bouton booster avec 3 chauffe-eau (explication sous forme de tableau) » ci-dessous. Tu dois seulement faire la configuration pour un chauffe-eau.

## Exemple optimisé pour le solaire avec réchauffement et bouton booster avec 3 chauffe-eau (explication sous forme de tableau)

Lors de la configuration des actions si/alors, toujours vérifier si l'unité affichée est le watt ou le kilowatt.

Les relais sont reliés aux chauffe-eau et ont reçu le nom « Boiler ».

Le mosfet est configuré conformément aux [Entrées et sorties](/schnittstellen/ein_und_ausgaenge) et porte le nom « Boiler Booster ».

![Exemples de commande de chauffe-eau avec des actions si/alors – Illustration 15](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/15.png)

Durée jusqu'à ce que la pleine puissance soit absorbée : 20 secondes

Le chauffe-eau se met en marche de lui-même lorsqu'une température minimale est atteinte : oui

Puissance : 

- Chauffe-eau rez-de-chaussée : 6 kW

- Chauffe-eau combles : 3 kW

- Chauffe-eau sous-sol : 2 kW


Pour garantir que les chauffe-eau ne sont pas mis en marche simultanément, nous allons intégrer un délai avant la mise en marche de chaque chauffe-eau. Le chauffe-eau dont le délai est le plus court présente le plus grand avantage dans l'utilisation de l'énergie solaire, puisqu'il est mis en marche en premier. Dans cet exemple, nous allons mettre en marche en premier le chauffe-eau ayant la consommation la plus élevée, afin qu'il ait la possibilité d'être mis en marche en premier après une longue période de consommation élevée, p. ex. à midi.

### Configuration : chauffe-eau marche, vue sous forme de tableau (version courte)

Nous abordons maintenant la configuration. Un exemple plus simple est expliqué en détail plus haut.

La présentation sous forme de tableau permet de reconnaître plus rapidement les différences sur les écrans de bureau et, par conséquent, la logique qui les sous-tend.

![Exemples de commande de chauffe-eau avec des actions si/alors – Illustration 16](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/16.png)

Configuration : chauffe-eau 1 marche (rez-de-chaussée)

Action si/alors : Boiler EG Ein (chauffe-eau rez-de-chaussée marche)

Si valeur de mesure supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz (bilan) 

- Seuil (Schwellwert) : unter (inférieur) 

- Puissance (Leistung) : \-6000 watts

- Durée minimale (Mindestzeit) : 1 minute


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Zeitspanne (plage horaire) / Jeden Tag (chaque jour)

- De (Von) : 22:00

- Jours de la semaine (Wochentage) : Alle Wählen (tout sélectionner)

- À (Bis) : 01:00


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG (rez-de-chaussée)

- Sortie Boiler Booster : Ein (marche)

- Durée minimale (Mindestzeit) : non


Si événement (Wenn Ereignis)

- Type (Typ) : Oder Verknüpfung (liaison OU)


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : EG (rez-de-chaussée)

- Boiler Booster : Nichts wählen (ne rien sélectionner)

- Boiler (chauffe-eau) : Ein (marche)


Configuration : chauffe-eau 2 marche (combles)

Action si/alors : Boiler DG Ein (chauffe-eau combles marche)

Si valeur de mesure supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz (bilan) 

- Seuil (Schwellwert) : unter (inférieur)

- Puissance (Leistung) : \-3000 watts

- Durée minimale (Mindestzeit) : 2 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Zeitspanne (plage horaire) / Jeden Tag (chaque jour)

- De (Von) : 01:00

- Jours de la semaine (Wochentage) : Alle Wählen (tout sélectionner)

- À (Bis) : 05:00


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : DG (combles)

- Sortie Boiler Booster : Ein (marche)

- Durée minimale (Mindestzeit) : non


Si événement (Wenn Ereignis)

- Type (Typ) : Oder Verknüpfung (liaison OU)


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : DG (combles)

- Boiler Booster : Nichts wählen (ne rien sélectionner)

- Boiler (chauffe-eau) : Ein (marche)


Configuration : chauffe-eau 3 marche (sous-sol)

Action si/alors : Boiler UG Ein (chauffe-eau sous-sol marche)

Si valeur de mesure supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz (bilan) 

- Seuil (Schwellwert) : unter (inférieur) 

- Puissance (Leistung) : \-2000 watts

- Durée minimale (Mindestzeit) : 3 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Zeitspanne (plage horaire) / Jeden Tag (chaque jour)

- De (Von) : 02:00

- Jours de la semaine (Wochentage) : Alle Wählen (tout sélectionner)

- À (Bis) : 06:00


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : UG (sous-sol)

- Sortie Boiler Booster : Ein (marche)

- Durée minimale (Mindestzeit) : non


Si événement (Wenn Ereignis)

- Type (Typ) : Oder Verknüpfung (liaison OU)


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : UG (sous-sol)

- Boiler Booster : Nichts wählen (ne rien sélectionner)

- Boiler (chauffe-eau) : Ein (marche)


### Configuration : chauffe-eau arrêt, vue sous forme de tableau (version courte)

![Exemples de commande de chauffe-eau avec des actions si/alors – Illustration 17](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/17.png)

Configuration : chauffe-eau 1 arrêt (rez-de-chaussée)

Action si/alors : Boiler EG Aus (chauffe-eau rez-de-chaussée arrêt)

Si valeur de mesure supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz (bilan) 

- Seuil (Schwellwert) : über (supérieur)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 4 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Zeitspanne (plage horaire) / Jeden Tag (chaque jour)

- De (Von) : 01:01

- Jours de la semaine (Wochentage) : Alle Wählen (tout sélectionner)

- À (Bis) : 21:59


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG (rez-de-chaussée)

- Sortie Boiler Booster : Aus (arrêt)

- Durée minimale (Mindestzeit) : non


Si événement (Wenn Ereignis)

- Type (Typ) : Und Verknüpfung (liaison ET)


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : EG (rez-de-chaussée)

- Boiler (chauffe-eau) : Aus (arrêt)


nConfiguration : chauffe-eau 2 arrêt (combles)

Action si/alors : Boiler DG Aus (chauffe-eau combles arrêt)

Si valeur de mesure supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz (bilan) 

- Seuil (Schwellwert) : über (supérieur)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 5 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Zeitspanne (plage horaire) / Jeden Tag (chaque jour)

- De (Von) : 05:01

- Jours de la semaine (Wochentage) : Alle Wählen (tout sélectionner)

- À (Bis) : 00:59


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG (rez-de-chaussée)

- Sortie Boiler Booster : Aus (arrêt)

- Durée minimale (Mindestzeit) : non


Si événement (Wenn Ereignis)

- Type (Typ) : Und Verknüpfung (liaison ET)


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : DG (combles)

- Boiler (chauffe-eau) : Aus (arrêt)


Configuration : chauffe-eau 3 arrêt (sous-sol)

Action si/alors : Boiler UG Aus (chauffe-eau sous-sol arrêt)

Si valeur de mesure supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz (bilan) 

- Seuil (Schwellwert) : über (supérieur)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 6 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Zeitspanne (plage horaire) / Jeden Tag (chaque jour)

- De (Von) : 06:01

- Jours de la semaine (Wochentage) : Alle Wählen (tout sélectionner)

- À (Bis) : 01:59


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG (rez-de-chaussée)

- Sortie Boiler Booster : Aus (arrêt)

- Durée minimale (Mindestzeit) : non


Si événement (Wenn Ereignis)

- Type (Typ) : Und Verknüpfung (liaison ET)


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : UG (sous-sol)

- Boiler (chauffe-eau) : Aus (arrêt)


### Configuration : Boiler Booster Reset, vue sous forme de tableau (version courte)

Cette section est facultative. Si elle n'est pas configurée, cela signifie que le bouton booster n'est jamais réinitialisé et qu'il est toujours valable.

Dans cet exemple, le bouton « Boiler Booster » est remis sur « aus » (arrêt) après 300 minutes, soit 5 heures.

![Exemples de commande de chauffe-eau avec des actions si/alors – Illustration 18](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/18.png)

Configuration : chauffe-eau 1 Booster Reset (rez-de-chaussée)

Action si/alors : Boiler EG Booster Reset

Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG (rez-de-chaussée)

- Sortie Boiler Booster : Ein (marche)

- Durée minimale (Mindestzeit) : 300 minutes


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : EG (rez-de-chaussée)

- Boiler (chauffe-eau) : Aus (arrêt)


Configuration : chauffe-eau 2 Booster Reset (combles)

Action si/alors : Boiler DG Booster Reset

Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : DG (combles)

- Sortie Boiler Booster : Ein (marche)

- Durée minimale (Mindestzeit) : 300 minutes


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : DG (combles)

- Boiler (chauffe-eau) : Aus (arrêt)


Configuration : chauffe-eau 3 Booster Reset (sous-sol)

Action si/alors : Boiler UG Booster Reset

Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : UG (sous-sol)

- Sortie Boiler Booster : Ein (marche)

- Durée minimale (Mindestzeit) : 300 minutes


Alors mise en marche / arrêt (Dann ein- / ausschalten)

- Compteur (Zähler) : UG (sous-sol)

- Boiler (chauffe-eau) : Aus (arrêt)
