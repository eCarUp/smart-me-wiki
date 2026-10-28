---
title: 'Exemples de commande de chauffe-eau avec des actions si/alors'
slug: '/konfiguration/wenndann-aktionen/beispiel-boilersteuerung'
description: 'Des exemples de configuration sont décrits en détail sur cette page.'
sidebar_label: 'Exemple de commande de chauffe-eau'
---
<Menueweg>Actions si-alors</Menueweg>

Des exemples de configuration sont décrits en détail sur cette page.

## Conditions préalables

Pour pouvoir utiliser les actions si/alors, vous devez disposer d'une licence smart-me Limited ou Professional.

## Principes de base

Les caractéristiques techniques se trouvent dans la documentation des [produits](/produkte) correspondants (p. ex. le pouvoir de coupure maximal).

La configuration des sorties est décrite sur la page [Entrées et sorties](/schnittstellen/ein-und-ausgaenge) (p. ex. l'activation de la sortie 1).

Les principes de base sont décrits sous [Actions si/alors](/konfiguration/wenndann-aktionen) (p. ex. où trouver les actions si/alors).

Notez que les [actions si/alors](/konfiguration/wenndann-aktionen) ne fonctionnent correctement que si la connexion au cloud smart-me est assurée. Les [actions déclenchées par un événement](/konfiguration/wenndann-aktionen/ereignisaktionen)  sont plus limitées, mais elles sont enregistrées et exécutées localement.

Lors de la configuration des actions si/alors, vérifiez toujours si l'unité affichée est le watt ou le kilowatt.

Les compteurs smart-me sont équipés de relais bistables : si une mise en marche est configurée, l'arrêt doit toujours être configuré lui aussi.

## Introduction

Déterminer la consommation et prévoir une réserve pour les variations de consommation

Pour configurer une bonne commande, il est important de connaître la puissance consommée par les consommateurs. Il faut également prévoir une réserve pour chaque cas. Par exemple, si le chauffe-eau des combles (DG) nécessite 3 kW, il est mis en marche lorsque moins de -3,5 kW sont mesurés sur le compteur de bilan, et n'est arrêté à nouveau que lorsque plus de 0 kW sont mesurés. La différence de 0,5 kW sert alors de tampon lorsque quelqu'un allume par exemple un ordinateur (60 watts), afin que l'énergie disponible ne devienne pas immédiatement insuffisante.

Mise en marche ou arrêt temporisé

Il faut en outre prévoir un délai avant la mise en marche ou l'arrêt. Ainsi, le chauffe-eau n'est par exemple arrêté que si la valeur de 0 kW est dépassée pendant plus de 5 minutes. Cela garantit qu'un consommateur de courte durée, comme un four ou une bouilloire, n'entraîne pas immédiatement l'arrêt et la remise en marche répétés du consommateur. C'est d'autant plus important que le bâtiment est grand.

Déterminer combien de consommateurs peuvent être en marche simultanément 

Vous devriez toujours vérifier comment les fusibles ont été dimensionnés. Il faut en tenir compte lorsque tous les consommateurs fonctionnent en même temps, p. ex. la nuit. Si le fusible est trop petit, vous devez configurer les actions si/alors de manière à ce que les consommateurs ne soient pas mis en marche simultanément.

Déterminer les temps de mise en marche et d'arrêt des consommateurs pour une mise en marche échelonnée

Lors de la mise en marche échelonnée de consommateurs, p. ex. de plusieurs chauffe-eau, il faut s'assurer que le délai entre le premier et le deuxième consommateur soit suffisamment long pour que le premier consommateur atteigne sa pleine puissance. Si, par exemple, il ne faut que 20 secondes aux consommateurs pour atteindre leur pleine puissance, ceux-ci peuvent être mis en marche avec un délai d'une minute. Pour autant que suffisamment d'électricité soit disponible.

S'il existe des heures fixes de mise en marche et d'arrêt, il faut veiller à ce qu'elles soient décalées d'au moins 1 minute. Par exemple, mise en marche entre 5:00 et 8:00 et arrêt entre 8:01 et 4:59

Arrêt des consommateurs

Lors de l'arrêt de consommateurs, p. ex. de plusieurs chauffe-eau, il est possible de tout arrêter en une seule fois. Par exemple avec un délai de 5 minutes (arrêt temporisé). Mais il est aussi possible d'arrêter les chauffe-eau de manière échelonnée.

Exemple d'arrêt échelonné avec délai : 

- Le premier chauffe-eau s'arrête avec un délai de 5 minutes, afin que quelqu'un puisse par exemple allumer la bouilloire sans que cela n'arrête le chauffe-eau. 

- Le deuxième chauffe-eau est arrêté après 7 minutes de soutirage accru sur le réseau (soit 5 minutes après le premier + 2 minutes d'attente)

- Le troisième chauffe-eau est ensuite arrêté après 9 minutes de soutirage accru sur le réseau


Optimisation réseau vs optimisation de l'autoconsommation

Lors de la configuration des seuils de mise en marche et d'arrêt, il faut décider s'il s'agit d'une installation optimisée pour le réseau, c'est-à-dire que les consommateurs se mettent en marche et s'arrêtent si possible toujours au moment où de l'électricité est soutirée du réseau. Ou si l'installation doit être optimisée pour l'autoconsommation. Cela signifie qu'il faut utiliser le plus possible l'électricité produite sur le toit.

- Exemple pour un consommateur de 2,5 kW avec une réserve de 0,5 kW pour les variations de consommation.

    - Optimisation réseau : mettre le chauffe-eau en marche à -3 kW et l'arrêter à 0 kW. 

    - Optimisation de l'autoconsommation : mettre le chauffe-eau en marche à -1,5 kW et l'arrêter à +1,5 kW.

    - Solution intermédiaire : mettre le chauffe-eau en marche à -2.5 kW et l'arrêter à + 0.5 kW.


Lors de la configuration, il faut tenir compte du fait que la variante avec autoconsommation optimisée est plus rentable en hiver, mais qu'en été, par beau temps, les consommateurs sont mis en marche très tôt et sont déjà pleins l'après-midi lorsque le soleil brille.

Nous avons fait de bonnes expériences lorsque les consommateurs se mettent en marche au moment où ils peuvent être alimentés à 100 % par l'électricité solaire, en tenant compte de la réserve pour les petites variations de la part du réseau. C'est-à-dire l'exemple « Solution intermédiaire » ci-dessus.

Bouton Booster

La mise en place d'un bouton Booster pour un consommateur est certes possible, mais elle rend la configuration plus laborieuse et plus compliquée. Il faut en outre noter que seul le propriétaire du compte smart-me a la possibilité d'activer un bouton Booster. 

Pour cette fonction, nous devons utiliser une sortie numérique qui n'est pas physiquement reliée à un consommateur. Nous utilisons alors le bouton uniquement comme état pour les actions si/alors.

Réchauffage avec heures pleines et heures creuses vs réchauffage avec tarif unique. 

Pour les chauffe-eau réchauffés au moyen des actions si/alors, la structure tarifaire locale peut être prise en compte. 

Si l'électricité est meilleur marché la nuit, il est courant de réchauffer pendant la nuit. Cela a toutefois pour conséquence que le chauffe-eau a en général atteint sa température maximale au lever du soleil. 

Si un tarif unique est appliqué, le mieux est d'échelonner le réchauffage à partir de 12 heures. Ainsi, en été, le chauffe-eau peut être chargé de manière optimale le matin et, le cas échéant, chauffé l'après-midi. De cette manière, le rendement solaire pour le chauffe-eau est meilleur. Dans les exemples suivants, le réchauffage a lieu la nuit. S'il doit avoir lieu pendant la journée, modifiez simplement les heures de mise en marche des exemples. Veillez à ce que l'arrêt soit lui aussi pris en compte.

Commande de chauffe-eau à 3 niveaux

L'exemple ci-dessous de commande de 3 chauffe-eau peut également être utilisé pour la commande d'1 chauffe-eau à 3 phases. La configuration est exactement la même.

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 1](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/01.png)

Image : RCP (regroupement dans le cadre de la consommation propre) avec 3 chauffe-eau, réchauffage nocturne compris (rectangles verts)

## Exemple optimisé solaire avec réchauffage et 1 chauffe-eau (explication détaillée avec images et explication sous forme de tableau)

Lors de la configuration des actions si/alors, vérifiez toujours si l'unité affichée est le watt ou le kilowatt.

Les relais sont reliés aux chauffe-eau et ont été nommés « Boiler ».

Durée jusqu'à l'atteinte de la pleine puissance : 20 secondes

Le chauffe-eau se met en marche de lui-même lorsqu'une température minimale est atteinte : non

Puissance du chauffe-eau EG : 6 kW

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 2](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/02.png)

Configuration : chauffe-eau 1 en marche (EG)

Action si/alors : Boiler EG Ein

Cette action si/alors remplit la fonction suivante :

- mettre le chauffe-eau en marche lorsque le compteur de bilan fournit suffisamment d'électricité pendant plus d'une minute.

Ou

- lorsqu'une heure définie est atteinte, le chauffe-eau étant alors chauffé dans tous les cas pendant trois heures.

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 3](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/03.png)

Si la valeur mesurée est supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : inférieur (unter) 

- Puissance (Leistung) : -6000 watts

- Durée minimale (Mindestzeit) : 1 minute


![Exemples de commande de chauffe-eau avec des actions si/alors – figure 4](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/04.png)

<div className="row">
<div className="col col--5">

Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : période / chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 22:00

- Jours de la semaine (Wochentage) : tout sélectionner (Alle Wählen)

- À (Bis) : 01:00

</div>
<div className="col col--7 bild--mitte">

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 5](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/05.png)

</div>
</div>

Si événement (Wenn Ereignis)

- Type (Typ) : liaison OU (Oder Verknüpfung)


![Exemples de commande de chauffe-eau avec des actions si/alors – figure 6](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/06.png)

Alors activer / désactiver (Dann Ein / ausschalten)

- Compteur (Zähler) : EG

- Boiler : en marche (Ein)


![Exemples de commande de chauffe-eau avec des actions si/alors – figure 7](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/07.png)

### Configuration : chauffe-eau arrêté, vue sous forme de tableau (courte)



Action si/alors : Boiler EG Aus

Cette action si/alors remplit la fonction suivante :

- Arrêter le chauffe-eau lorsque le compteur de bilan ne fournit pas suffisamment d'électricité pendant plus de trois minutes.

- Et

- Lorsque le chauffe-eau ne se trouve pas dans la période définie pendant laquelle il est réchauffé dans tous les cas pendant trois heures.


La configuration est expliquée ci-dessous sous forme de tableau. Il est important de noter qu'il s'agit d'une action ET, que le seuil est désormais « supérieur » et non plus « inférieur », et que les heures sont l'inverse de celles de la mise en marche (réchauffage), décalées de 1 minute.

Configuration : chauffe-eau 1 arrêté (EG)

Action si/alors : Boiler EG Aus

Si la valeur mesurée est supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : supérieur (über)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 4 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : période / chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 01:01

- Jours de la semaine (Wochentage) : tout sélectionner (Alle Wählen)

- À (Bis) : 21:59


Si événement (Wenn Ereignis)

- Type (Typ) : liaison ET (Und Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : arrêté (Aus)


![Exemples de commande de chauffe-eau avec des actions si/alors – figure 8](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/08.png)

## Exemple optimisé solaire avec réchauffage et 3 chauffe-eau (explication sous forme de tableau)

Lors de la configuration des actions si/alors, vérifiez toujours si l'unité affichée est le watt ou le kilowatt

Les relais sont reliés aux chauffe-eau et ont été nommés « Boiler ».

Durée jusqu'à l'atteinte de la pleine puissance : 20 secondes

Le chauffe-eau se met en marche de lui-même lorsqu'une température minimale est atteinte : non

Puissance : 

- Chauffe-eau EG : 6 kW

- Chauffe-eau DG : 3 kW

- Chauffe-eau UG : 2 kW


Pour garantir que les chauffe-eau ne soient pas mis en marche simultanément, nous allons intégrer un délai avant la mise en marche de chaque chauffe-eau. Le chauffe-eau avec le délai le plus court profite le plus de l'énergie solaire, car il est mis en marche en premier. Dans cet exemple, nous allons mettre en marche en premier le chauffe-eau ayant la consommation la plus élevée, afin qu'il ait la possibilité d'être mis en marche en premier après une longue période de consommation élevée, p. ex. à midi.

### Configuration : chauffe-eau en marche, vue sous forme de tableau (courte)

Nous abordons maintenant encore la configuration. Un exemple plus simple est expliqué en détail plus haut.

La présentation sous forme de tableau permet de repérer plus rapidement les différences sur les écrans d'ordinateur, et donc aussi la logique sous-jacente.

Configuration : chauffe-eau 1 en marche (EG)

Action si/alors : Boiler EG Ein

Si la valeur mesurée est supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : inférieur (unter) 

- Puissance (Leistung) : \-6000 watts

- Durée minimale (Mindestzeit) : 1 minute


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : période / chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 22:00

- Jours de la semaine (Wochentage) : tout sélectionner (Alle wählen)

- À (Bis) : 01:00


Si événement (Wenn Ereignis)

- Type (Typ) : liaison OU (Oder Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : en marche (Ein)


Configuration : chauffe-eau 2 en marche (DG)

Action si/alors : Boiler DG Ein

Si la valeur mesurée est supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : inférieur (unter)

- Puissance (Leistung) : \-3000 watts

- Durée minimale (Mindestzeit) : 2 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : période / chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 01:00

- Jours de la semaine (Wochentage) : tout sélectionner (Alle wählen)

- À (Bis) : 05:00


Si événement (Wenn Ereignis)

- Type (Typ) : liaison OU (Oder Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : DG

- Boiler : en marche (Ein)


Configuration : chauffe-eau 3 en marche (UG)

Action si/alors : Boiler UG Ein

Si la valeur mesurée est supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : inférieur (unter) 

- Puissance (Leistung) : \-2000 watts

- Durée minimale (Mindestzeit) : 3 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : période / chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 02:00

- Jours de la semaine (Wochentage) : tout sélectionner (Alle wählen)

- À (Bis) : 06:00


Si événement (Wenn Ereignis)

- Type (Typ) : liaison OU (Oder Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : UG

- Boiler : en marche (Ein)


### Configuration : chauffe-eau arrêté, vue sous forme de tableau (courte)

Configuration : chauffe-eau 1 arrêté (EG)

Action si/alors : Boiler EG Aus

Si la valeur mesurée est supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : supérieur (über)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 4 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : période / chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 01:01

- Jours de la semaine (Wochentage) : tout sélectionner (Alle Wählen)

- À (Bis) : 21:59


Si événement (Wenn Ereignis)

- Type (Typ) : liaison ET (Und Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : arrêté (Aus)


Configuration : chauffe-eau 2 arrêté (DG)

Action si/alors : Boiler DG Aus

Si la valeur mesurée est supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : supérieur (über)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 5 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : période / chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 05:01

- Jours de la semaine (Wochentage) : tout sélectionner (Alle Wählen)

- À (Bis) : 00:59


Si événement (Wenn Ereignis)

- Type (Typ) : liaison ET (Und Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : DG

- Boiler : arrêté (Aus)


Configuration : chauffe-eau 3 arrêté (UG)

Action si/alors : Boiler UG Aus

Si la valeur mesurée est supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : supérieur (über)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 6 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : période / chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 06:01

- Jours de la semaine (Wochentage) : tout sélectionner (Alle Wählen)

- À (Bis) : 01:59


Si événement (Wenn Ereignis)

- Type (Typ) : liaison ET (Und Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : UG

- Boiler : arrêté (Aus)


## Exemple optimisé solaire sans réchauffage avec 1 chauffe-eau

Identique à l'« Exemple optimisé solaire sans réchauffage avec 3 chauffe-eau (explication sous forme de tableau) » ci-dessous. Il vous suffit d'effectuer la configuration pour un seul chauffe-eau.

## Exemple optimisé solaire sans réchauffage avec 3 chauffe-eau (explication sous forme de tableau)

Lors de la configuration des actions si/alors, vérifiez toujours si l'unité affichée est le watt ou le kilowatt.

Les relais sont reliés aux chauffe-eau et ont été nommés « Boiler ».

Durée jusqu'à l'atteinte de la pleine puissance : 20 secondes

Le chauffe-eau se met en marche de lui-même lorsqu'une température minimale est atteinte : oui

Puissance : 

- Chauffe-eau EG : 6 kW

- Chauffe-eau DG : 3 kW

- Chauffe-eau UG : 2 kW


Pour garantir que les chauffe-eau ne soient pas mis en marche simultanément, nous allons intégrer un délai avant la mise en marche de chaque chauffe-eau. Le chauffe-eau avec le délai le plus court profite le plus de l'énergie solaire, car il est mis en marche en premier. Dans cet exemple, nous allons mettre en marche en premier le chauffe-eau ayant la consommation la plus élevée, afin qu'il ait la possibilité d'être mis en marche en premier après une longue période de consommation élevée, p. ex. à midi.

### Configuration : chauffe-eau en marche, vue sous forme de tableau (courte)

Nous abordons maintenant encore la configuration. Un exemple plus simple est expliqué en détail plus haut.

La présentation sous forme de tableau permet de repérer plus rapidement les différences sur les écrans d'ordinateur, et donc aussi la logique sous-jacente.

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 9](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/09.png)

Configuration : chauffe-eau 1 en marche (EG)

Action si/alors : Boiler EG Ein

Si la valeur mesurée est supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : inférieur (unter) 

- Puissance (Leistung) : \-6000 watts

- Durée minimale (Mindestzeit) : 1 minute


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : en marche (Ein)


Configuration : chauffe-eau 2 en marche (DG)

Action si/alors : Boiler DG Ein

Si la valeur mesurée est supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : inférieur (unter)

- Puissance (Leistung) : \-3000 watts

- Durée minimale (Mindestzeit) : 2 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : DG

- Boiler : en marche (Ein)


Configuration : chauffe-eau 3 en marche (UG)

Action si/alors : Boiler UG Ein

Si la valeur mesurée est supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : inférieur (unter) 

- Puissance (Leistung) : \-2000 watts

- Durée minimale (Mindestzeit) : 3 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : UG

- Boiler : en marche (Ein)


### Configuration : chauffe-eau arrêté, vue sous forme de tableau (courte)

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 10](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/10.png)

Configuration : chauffe-eau 1 arrêté (EG)

Action si/alors : Boiler EG Aus

Si la valeur mesurée est supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : supérieur (über)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 4 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : arrêté (Aus)


Configuration : chauffe-eau 2 arrêté (DG)

Action si/alors : Boiler DG Aus

Si la valeur mesurée est supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : supérieur (über)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 5 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : DG

- Boiler : arrêté (Aus)


Configuration : chauffe-eau 3 arrêté (UG)

Action si/alors : Boiler UG Aus

Si la valeur mesurée est supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : supérieur (über)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 6 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : UG

- Boiler : arrêté (Aus)


## Exemple optimisé solaire sans réchauffage avec 1 chauffe-eau et Booster / légionelles

Lors de la configuration des actions si/alors, vérifiez toujours si l'unité affichée est le watt ou le kilowatt.

Les relais sont reliés aux chauffe-eau et ont été nommés « Boiler ».

Le Mosfet est configuré conformément à la page [Entrées et sorties](/schnittstellen/ein-und-ausgaenge) et porte le nom « Booster und Legionelle ».

Durée jusqu'à l'atteinte de la pleine puissance : 20 secondes

Le chauffe-eau se met en marche de lui-même lorsqu'une température minimale est atteinte : oui

Puissance : 

- Chauffe-eau : 7 kW


### Configuration : légionelles en marche

Ceci ne doit être configuré que si la protection contre les légionelles doit être activée, p. ex. 1x par semaine le vendredi à partir de 3:15. Une durée est indiquée ici, de 30 minutes (par défaut), afin de garantir que l'état soit mis sur « en marche » même si un paquet de données est perdu.

Action si/alors : Legionelle Ein

Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : période / chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 03:15

- Jours de la semaine (Wochentage) : tout sélectionner (Alle Wählen)

- À (Bis) : 03:45


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Sortie (Ausgang) Booster und Legionelle : en marche (Ein)

- Durée minimale (Mindestzeit) : non (Nein)


![Exemples de commande de chauffe-eau avec des actions si/alors – figure 11](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/11.png)

### Configuration : Booster et légionelles arrêtés

Ceci correspond au temps après lequel le Booster (activé manuellement par l'utilisateur dans l'interface smart-me) ou la commutation anti-légionelles (configurée comme ci-dessus) doit être arrêté automatiquement, parce que le chauffe-eau est alors chaud. P. ex. 90 minutes. 

Action si/alors : Booster Legionelle Aus

Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG

- Sortie (Ausgang) Booster und Legionelle : en marche (Ein)

- Durée minimale (Mindestzeit) : oui (Ja), 90 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Sortie (Ausgang) Booster und Legionelle : arrêté (Aus)


![Exemples de commande de chauffe-eau avec des actions si/alors – figure 12](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/12.png)

### Configuration : chauffe-eau en marche, vue sous forme de tableau (courte)

Configuration : chauffe-eau en marche

Action si/alors : Boiler Ein

Si la valeur mesurée est supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : inférieur (unter) 

- Puissance (Leistung) : \-7000 watts

- Durée minimale (Mindestzeit) : 1 minute


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG

- Sortie (Ausgang) Booster und Legionelle : en marche (Ein)

- Durée minimale (Mindestzeit) : non (Nein)


Si événement (Wenn Ereignis)

- Type (Typ) : liaison OU (ODER Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : en marche (Ein)


![Exemples de commande de chauffe-eau avec des actions si/alors – figure 13](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/13.png)

### Configuration : chauffe-eau arrêté, vue sous forme de tableau (courte)

Configuration : chauffe-eau 1 arrêté (EG)

Action si/alors : Boiler EG Aus

Si la valeur mesurée est supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : supérieur (über)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 1 minute


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG

- Sortie (Ausgang) Booster und Legionelle : arrêté (Aus)

- Durée minimale (Mindestzeit) : non (Nein)


Si événement (Wenn Ereignis)

- Type (Typ) : liaison ET (UND Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : arrêté (Aus)


![Exemples de commande de chauffe-eau avec des actions si/alors – figure 14](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/14.png)

## Exemple optimisé solaire avec réchauffage et bouton Booster avec 1 chauffe-eau

Identique à l'« Exemple optimisé solaire avec réchauffage et bouton Booster avec 3 chauffe-eau (explication sous forme de tableau) » ci-dessous. Il vous suffit d'effectuer la configuration pour un seul chauffe-eau.

## Exemple optimisé solaire avec réchauffage et bouton Booster avec 3 chauffe-eau (explication sous forme de tableau)

<div className="row">
<div className="col col--6">

Lors de la configuration des actions si/alors, vérifiez toujours si l'unité affichée est le watt ou le kilowatt.

Les relais sont reliés aux chauffe-eau et ont été nommés « Boiler ».

Le Mosfet est configuré conformément à la page [Entrées et sorties](/schnittstellen/ein-und-ausgaenge) et porte le nom « Boiler Booster ».

</div>
<div className="col col--6 bild--mitte">

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 15](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/15.png)

</div>
</div>

Durée jusqu'à l'atteinte de la pleine puissance : 20 secondes

Le chauffe-eau se met en marche de lui-même lorsqu'une température minimale est atteinte : oui

Puissance : 

- Chauffe-eau EG : 6 kW

- Chauffe-eau DG : 3 kW

- Chauffe-eau UG : 2 kW


Pour garantir que les chauffe-eau ne soient pas mis en marche simultanément, nous allons intégrer un délai avant la mise en marche de chaque chauffe-eau. Le chauffe-eau avec le délai le plus court profite le plus de l'énergie solaire, car il est mis en marche en premier. Dans cet exemple, nous allons mettre en marche en premier le chauffe-eau ayant la consommation la plus élevée, afin qu'il ait la possibilité d'être mis en marche en premier après une longue période de consommation élevée, p. ex. à midi.

### Configuration : chauffe-eau en marche, vue sous forme de tableau (courte)

Nous abordons maintenant encore la configuration. Un exemple plus simple est expliqué en détail plus haut.

La présentation sous forme de tableau permet de repérer plus rapidement les différences sur les écrans d'ordinateur, et donc aussi la logique sous-jacente.

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 16](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/16.png)

Configuration : chauffe-eau 1 en marche (EG)

Action si/alors : Boiler EG Ein

Si la valeur mesurée est supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : inférieur (unter) 

- Puissance (Leistung) : \-6000 watts

- Durée minimale (Mindestzeit) : 1 minute


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : période / chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 22:00

- Jours de la semaine (Wochentage) : tout sélectionner (Alle Wählen)

- À (Bis) : 01:00


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG

- Sortie (Ausgang) Boiler Booster : en marche (Ein)

- Durée minimale (Mindestzeit) : non (Nein)


Si événement (Wenn Ereignis)

- Type (Typ) : liaison OU (Oder Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler Booster : ne rien sélectionner (Nichts wählen)

- Boiler : en marche (Ein)


Configuration : chauffe-eau 2 en marche (DG)

Action si/alors : Boiler DG Ein

Si la valeur mesurée est supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : inférieur (unter)

- Puissance (Leistung) : \-3000 watts

- Durée minimale (Mindestzeit) : 2 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : période / chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 01:00

- Jours de la semaine (Wochentage) : tout sélectionner (Alle Wählen)

- À (Bis) : 05:00


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : DG

- Sortie (Ausgang) Boiler Booster : en marche (Ein)

- Durée minimale (Mindestzeit) : non (Nein)


Si événement (Wenn Ereignis)

- Type (Typ) : liaison OU (Oder Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : DG

- Boiler Booster : ne rien sélectionner (Nichts wählen)

- Boiler : en marche (Ein)


Configuration : chauffe-eau 3 en marche (UG)

Action si/alors : Boiler UG Ein

Si la valeur mesurée est supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : inférieur (unter) 

- Puissance (Leistung) : \-2000 watts

- Durée minimale (Mindestzeit) : 3 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : période / chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 02:00

- Jours de la semaine (Wochentage) : tout sélectionner (Alle Wählen)

- À (Bis) : 06:00


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : UG

- Sortie (Ausgang) Boiler Booster : en marche (Ein)

- Durée minimale (Mindestzeit) : non (Nein)


Si événement (Wenn Ereignis)

- Type (Typ) : liaison OU (Oder Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : UG

- Boiler Booster : ne rien sélectionner (Nichts wählen)

- Boiler : en marche (Ein)


### Configuration : chauffe-eau arrêté, vue sous forme de tableau (courte)

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 17](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/17.png)

Configuration : chauffe-eau 1 arrêté (EG)

Action si/alors : Boiler EG Aus

Si la valeur mesurée est supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : supérieur (über)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 4 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : période / chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 01:01

- Jours de la semaine (Wochentage) : tout sélectionner (Alle Wählen)

- À (Bis) : 21:59


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG

- Sortie (Ausgang) Boiler Booster : arrêté (Aus)

- Durée minimale (Mindestzeit) : non (Nein)


Si événement (Wenn Ereignis)

- Type (Typ) : liaison ET (Und Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : arrêté (Aus)


Configuration : chauffe-eau 2 arrêté (DG)

Action si/alors : Boiler DG Aus

Si la valeur mesurée est supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : supérieur (über)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 5 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : période / chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 05:01

- Jours de la semaine (Wochentage) : tout sélectionner (Alle Wählen)

- À (Bis) : 00:59


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG

- Sortie (Ausgang) Boiler Booster : arrêté (Aus)

- Durée minimale (Mindestzeit) : non (Nein)


Si événement (Wenn Ereignis)

- Type (Typ) : liaison ET (Und Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : DG

- Boiler : arrêté (Aus)


Configuration : chauffe-eau 3 arrêté (UG)

Action si/alors : Boiler UG Aus

Si la valeur mesurée est supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : supérieur (über)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 6 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : période / chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 06:01

- Jours de la semaine (Wochentage) : tout sélectionner (Alle Wählen)

- À (Bis) : 01:59


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG

- Sortie (Ausgang) Boiler Booster : arrêté (Aus)

- Durée minimale (Mindestzeit) : non (Nein)


Si événement (Wenn Ereignis)

- Type (Typ) : liaison ET (Und Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : UG

- Boiler : arrêté (Aus)


### Configuration : réinitialisation du Booster, vue sous forme de tableau (courte)

Cette section est facultative. Si elle n'est pas configurée, le bouton Booster n'est jamais réinitialisé et reste toujours valable.

Dans cet exemple, le bouton « Boiler Booster » est remis sur « arrêté » après 300 minutes, soit 5 heures.

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 18](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/18.png)

Configuration : réinitialisation du Booster du chauffe-eau 1 (EG)

Action si/alors : Boiler EG Booster Reset

Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG

- Sortie (Ausgang) Boiler Booster : en marche (Ein)

- Durée minimale (Mindestzeit) : 300 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : arrêté (Aus)


Configuration : réinitialisation du Booster du chauffe-eau 2 (DG)

Action si/alors : Boiler DG Booster Reset

Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : DG

- Sortie (Ausgang) Boiler Booster : en marche (Ein)

- Durée minimale (Mindestzeit) : 300 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : DG

- Boiler : arrêté (Aus)


Configuration : réinitialisation du Booster du chauffe-eau 3 (UG)

Action si/alors : Boiler UG Booster Reset

Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : UG

- Sortie (Ausgang) Boiler Booster : en marche (Ein)

- Durée minimale (Mindestzeit) : 300 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : UG

- Boiler : arrêté (Aus)
