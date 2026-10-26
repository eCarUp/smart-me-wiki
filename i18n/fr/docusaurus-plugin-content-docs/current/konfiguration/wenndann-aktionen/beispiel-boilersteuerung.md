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

## Notions de base

Les caractéristiques techniques se trouvent sur la page des [produits](/produkte) concernés (p. ex. puissance de commutation maximale).

La configuration des sorties est décrite sur la page [Entrées et sorties](/schnittstellen/ein-und-ausgaenge) (p. ex. activation de la sortie 1).

Les notions de base sont décrites sous [Actions si/alors](/konfiguration/wenndann-aktionen) (p. ex. où trouver les actions si/alors).

Notez que les [actions si/alors](/konfiguration/wenndann-aktionen) ne fonctionnent correctement que si la connexion au cloud smart-me est assurée. Les [actions déclenchées par un événement](/konfiguration/wenndann-aktionen/ereignisaktionen)  sont plus limitées, mais elles sont enregistrées et exécutées localement.

Lors de la configuration des actions si/alors, vérifiez toujours si l'unité affichée est le watt ou le kilowatt.

Les compteurs smart-me sont équipés de relais bistables : si une mise en marche est configurée, l'arrêt doit toujours être configuré lui aussi.

## Introduction

Déterminez la consommation et prévoyez une réserve pour les fluctuations de consommation

Pour configurer une bonne commande, il est important de connaître la puissance consommée par les consommateurs. Il est également nécessaire de prévoir une réserve dans chaque cas. Si, par exemple, le chauffe-eau des combles nécessite 3 kW, il est mis en marche lorsque moins de -3,5 kW sont mesurés sur le compteur de bilan, et il n'est arrêté que lorsque plus de 0 kW sont mesurés. La différence de 0,5 kW sert alors de tampon lorsque quelqu'un allume p. ex. un ordinateur (60 watts), afin qu'il n'y ait pas immédiatement trop peu d'énergie disponible dans ce cas.

Mise en marche ou arrêt temporisés

En outre, il faut prévoir un délai avant la mise en marche ou l'arrêt. Ainsi, le chauffe-eau n'est p. ex. arrêté que si la valeur de 0 kW est dépassée pendant plus de 5 minutes. On s'assure ainsi qu'un consommateur de courte durée comme un four ou une bouilloire n'entraîne pas immédiatement l'arrêt et la remise en marche répétés du consommateur. C'est d'autant plus important que le bâtiment est grand.

Déterminer combien de consommateurs peuvent être mis en marche simultanément 

Vous devriez toujours vérifier comment les fusibles ont été dimensionnés. Il faut en tenir compte lorsque tous les consommateurs fonctionnent en même temps, p. ex. la nuit. Si le fusible est trop petit, vous devez configurer les actions si/alors de manière à ce que les consommateurs ne soient pas mis en marche simultanément.

Déterminer les temps de mise en marche et d'arrêt des consommateurs pour une mise en marche échelonnée

Lors de la mise en marche échelonnée de consommateurs, p. ex. de plusieurs chauffe-eau, il faut s'assurer que le délai entre le premier et le deuxième consommateur est suffisamment long pour que le premier consommateur soutire sa pleine puissance. Si, par exemple, il ne faut que 20 secondes pour que les consommateurs atteignent leur pleine puissance, les consommateurs peuvent être mis en marche avec un délai d'une minute. Pour autant que suffisamment d'électricité soit disponible.

S'il existe des heures fixes de mise en marche et d'arrêt, il faut veiller à ce qu'elles soient décalées d'au moins 1 minute. Par exemple, mise en marche entre 5:00 et 8:00 et arrêt entre 8:01 et 4:59

Arrêt des consommateurs

Lors de l'arrêt des consommateurs, p. ex. de plusieurs chauffe-eau, il est possible de tout arrêter en une seule fois. Donc p. ex. avec un délai de 5 minutes (arrêt temporisé). Mais il est aussi possible d'arrêter les chauffe-eau de manière échelonnée.

Exemple d'arrêt échelonné avec délai : 

- Le premier chauffe-eau s'arrête avec un délai de 5 minutes, afin que quelqu'un puisse p. ex. allumer la bouilloire sans que cela n'arrête le chauffe-eau. 

- Le deuxième chauffe-eau est arrêté après 7 minutes de soutirage accru du réseau (donc 5 minutes après le premier + 2 minutes d'attente)

- Le troisième chauffe-eau est ensuite arrêté après 9 minutes de soutirage accru du réseau


Optimisé pour le réseau ou optimisé pour l'autoconsommation

Lors de la configuration des seuils de mise en marche et d'arrêt, il faut décider s'il s'agit d'une installation optimisée pour le réseau, c.-à-d. que les consommateurs se mettent en marche et s'arrêtent si possible toujours lorsque de l'électricité est soutirée du réseau. Ou si l'installation doit être optimisée pour l'autoconsommation. Cela signifie qu'il faut utiliser autant que possible l'électricité produite sur le toit.

- Exemple pour un consommateur de 2,5 kW avec une réserve de 0,5 kW pour les fluctuations de consommation.

    - Optimisé pour le réseau : mettre en marche le chauffe-eau à -3 kW et l'arrêter à 0 kW. 

    - Optimisé pour l'autoconsommation : mettre en marche le chauffe-eau à -1,5 kW et l'arrêter à +1,5 kW.

    - Mixte : mettre en marche le chauffe-eau à -2.5 kW et l'arrêter à + 0.5 kW.


Lors de la configuration, il faut tenir compte du fait que la variante optimisée pour l'autoconsommation est plus rentable en hiver, mais qu'en été, par beau temps, les consommateurs sont mis en marche très tôt et sont déjà pleins l'après-midi quand le soleil brille.

Nous avons fait de bonnes expériences lorsque les consommateurs se mettent en marche au moment où ils peuvent être alimentés à 100 % par l'électricité solaire et que la réserve pour les petites fluctuations de la part du réseau est prise en compte. Donc l'exemple « Mixte » ci-dessus.

Bouton Booster

La mise en place d'un bouton Booster pour un consommateur est certes possible, mais elle rend la configuration plus laborieuse et plus compliquée. Il faut en outre noter que seul le titulaire du compte smart-me a la possibilité d'activer un bouton Booster. 

Pour cette fonction, nous devons utiliser une sortie numérique qui n'est pas physiquement reliée à un consommateur. Nous utilisons alors le bouton uniquement comme état pour les actions si/alors.

Réchauffage avec heures pleines et heures creuses ou réchauffage avec tarif unique. 

Pour les chauffe-eau réchauffés au moyen des actions si/alors, la structure tarifaire locale peut être prise en compte. 

Si l'électricité est moins chère la nuit, il est courant de réchauffer pendant la nuit. Cela a toutefois pour conséquence que le chauffe-eau atteint en général sa température maximale au lever du soleil. 

Si un tarif unique est appliqué, le mieux est d'échelonner le réchauffage à partir de 12 heures. Ainsi, en été, le chauffe-eau peut être chargé de manière optimale le matin et, le cas échéant, chauffé l'après-midi. De cette façon, le rendement solaire pour le chauffe-eau est meilleur. Dans les exemples suivants, le réchauffage a lieu la nuit. Si celui-ci doit avoir lieu en journée, modifiez simplement les heures de mise en marche des exemples. Veillez à ce que l'arrêt soit lui aussi pris en compte.

Commande de chauffe-eau à 3 niveaux

L'exemple ci-dessous pour la commande de 3 chauffe-eau peut aussi être utilisé pour la commande d'1 chauffe-eau à 3 phases. La configuration est exactement la même.

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 1](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/01.png)

Image : RCP avec 3 chauffe-eau, réchauffage nocturne inclus (rectangles verts)

## Exemple optimisé pour le solaire avec réchauffage et 1 chauffe-eau (explication détaillée avec images et explication sous forme de tableau)

Lors de la configuration des actions si/alors, vérifiez toujours si l'unité affichée est le watt ou le kilowatt.

Les relais sont reliés au chauffe-eau et ont reçu le nom « Boiler ».

Durée jusqu'à ce que la pleine puissance soit soutirée : 20 secondes

Le chauffe-eau se met en marche de lui-même lorsqu'une température minimale est atteinte : non

Puissance du chauffe-eau EG : 6 kW

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 2](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/02.png)

Configuration : chauffe-eau 1 en marche (EG)

Action si/alors : Boiler EG Ein

Cette action si/alors remplit la fonction suivante :

- mettre en marche le chauffe-eau lorsque le compteur de bilan fournit suffisamment d'électricité pendant plus d'une minute.

Ou

- une heure définie est atteinte et le chauffe-eau est chauffé dans tous les cas pendant trois heures.

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 3](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/03.png)

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : en dessous (unter) 

- Puissance (Leistung) : -6000 Watt

- Durée minimale (Mindestzeit) : 1 minute


![Exemples de commande de chauffe-eau avec des actions si/alors – figure 4](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/04.png)

<div className="row">
<div className="col col--5">

Si date & heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 22:00

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle Wählen)

- À (Bis) : 01:00

</div>
<div className="col col--7 text--center">

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 5](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/05.png)

</div>
</div>

Si événement (Wenn Ereignis)

- Type (Typ) : Liaison OU (Oder Verknüpfung)


![Exemples de commande de chauffe-eau avec des actions si/alors – figure 6](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/06.png)

Alors activer / désactiver (Dann Ein / ausschalten)

- Compteur (Zähler) : EG

- Boiler : Marche (Ein)


![Exemples de commande de chauffe-eau avec des actions si/alors – figure 7](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/07.png)

### Configuration : chauffe-eau arrêt, vue sous forme de tableau (courte)



Action si/alors : Boiler EG Aus

Cette action si/alors remplit la fonction suivante :

- Arrêter le chauffe-eau lorsque le compteur de bilan ne fournit pas suffisamment d'électricité pendant plus de trois minutes.

- Et

- Lorsque le chauffe-eau ne se trouve pas dans la période définie pendant laquelle il est réchauffé dans tous les cas pendant trois heures.


La configuration est expliquée ci-dessous dans la vue sous forme de tableau. Il est important de noter qu'il s'agit d'une action ET, que le seuil est désormais au-dessus et non plus en dessous, et que les heures sont l'inverse de celles de la mise en marche (réchauffage), décalées de 1 minute.

Configuration : chauffe-eau 1 arrêt (EG)

Action si/alors : Boiler EG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur : Bilanz 

- Seuil : au-dessus (über)

- Puissance : 500 Watt

- Durée minimale : 4 minutes


Si date & heure (Wenn Datum & Uhrzeit) :

- Type : Période / Chaque jour

- De : 01:01

- Jours de la semaine : Tout sélectionner

- À : 21:59


Si événement (Wenn Ereignis)

- Type : Liaison ET (Und Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : EG

- Boiler : Arrêt (Aus)


![Exemples de commande de chauffe-eau avec des actions si/alors – figure 8](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/08.png)

## Exemple optimisé pour le solaire avec réchauffage et 3 chauffe-eau (explication sous forme de tableau)

Lors de la configuration des actions si/alors, vérifiez toujours si l'unité affichée est le watt ou le kilowatt

Les relais sont reliés aux chauffe-eau et ont reçu le nom « Boiler ».

Durée jusqu'à ce que la pleine puissance soit soutirée : 20 secondes

Le chauffe-eau se met en marche de lui-même lorsqu'une température minimale est atteinte : non

Puissance : 

- Chauffe-eau EG : 6 kW

- Chauffe-eau DG : 3 kW

- Chauffe-eau UG : 2 kW


Pour garantir que les chauffe-eau ne soient pas mis en marche simultanément, nous allons intégrer un délai avant la mise en marche de chaque chauffe-eau. Le chauffe-eau dont le délai est le plus court profite le plus de l'énergie solaire, car il est mis en marche en premier. Dans cet exemple, nous allons mettre en marche en premier le chauffe-eau qui consomme le plus, afin qu'il ait la possibilité d'être mis en marche en premier après une longue période de forte consommation, p. ex. à midi.

### Configuration : chauffe-eau marche, vue sous forme de tableau (courte)

Nous abordons maintenant encore la configuration. Un exemple plus simple est expliqué en détail plus haut.

La présentation sous forme de tableau permet de repérer plus rapidement les différences sur les écrans d'ordinateur, et donc aussi la logique qui les sous-tend.

Configuration : chauffe-eau 1 marche (EG)

Action si/alors : Boiler EG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur : Bilanz 

- Seuil : en dessous (unter) 

- Puissance : \-6000 Watt

- Durée minimale : 1 minute


Si date & heure (Wenn Datum & Uhrzeit) :

- Type : Période / Chaque jour

- De : 22:00

- Jours de la semaine : Tout sélectionner

- À : 01:00


Si événement (Wenn Ereignis)

- Type : Liaison OU (Oder Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : EG

- Boiler : Marche (Ein)


Configuration : chauffe-eau 2 marche (DG)

Action si/alors : Boiler DG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur : Bilanz 

- Seuil : en dessous (unter)

- Puissance : \-3000 Watt

- Durée minimale : 2 minutes


Si date & heure (Wenn Datum & Uhrzeit) :

- Type : Période / Chaque jour

- De : 01:00

- Jours de la semaine : Tout sélectionner

- À : 05:00


Si événement (Wenn Ereignis)

- Type : Liaison OU (Oder Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : DG

- Boiler : Marche (Ein)


Configuration : chauffe-eau 3 marche (UG)

Action si/alors : Boiler UG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur : Bilanz 

- Seuil : en dessous (unter) 

- Puissance : \-2000 Watt

- Durée minimale : 3 minutes


Si date & heure (Wenn Datum & Uhrzeit) :

- Type : Période / Chaque jour

- De : 02:00

- Jours de la semaine : Tout sélectionner

- À : 06:00


Si événement (Wenn Ereignis)

- Type : Liaison OU (Oder Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : UG

- Boiler : Marche (Ein)


### Configuration : chauffe-eau arrêt, vue sous forme de tableau (courte)

Configuration : chauffe-eau 1 arrêt (EG)

Action si/alors : Boiler EG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur : Bilanz 

- Seuil : au-dessus (über)

- Puissance : 500 Watt

- Durée minimale : 4 minutes


Si date & heure (Wenn Datum & Uhrzeit) :

- Type : Période / Chaque jour

- De : 01:01

- Jours de la semaine : Tout sélectionner

- À : 21:59


Si événement (Wenn Ereignis)

- Type : Liaison ET (Und Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : EG

- Boiler : Arrêt (Aus)


Configuration : chauffe-eau 2 arrêt (DG)

Action si/alors : Boiler DG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur : Bilanz 

- Seuil : au-dessus (über)

- Puissance : 500 Watt

- Durée minimale : 5 minutes


Si date & heure (Wenn Datum & Uhrzeit) :

- Type : Période / Chaque jour

- De : 05:01

- Jours de la semaine : Tout sélectionner

- À : 00:59


Si événement (Wenn Ereignis)

- Type : Liaison ET (Und Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : DG

- Boiler : Arrêt (Aus)


Configuration : chauffe-eau 3 arrêt (UG)

Action si/alors : Boiler UG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur : Bilanz 

- Seuil : au-dessus (über)

- Puissance : 500 Watt

- Durée minimale : 6 minutes


Si date & heure (Wenn Datum & Uhrzeit) :

- Type : Période / Chaque jour

- De : 06:01

- Jours de la semaine : Tout sélectionner

- À : 01:59


Si événement (Wenn Ereignis)

- Type : Liaison ET (Und Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : UG

- Boiler : Arrêt (Aus)


## Exemple optimisé pour le solaire sans réchauffage avec 1 chauffe-eau

Identique à l'« Exemple optimisé pour le solaire sans réchauffage avec 3 chauffe-eau (explication sous forme de tableau) » ci-dessous. Vous devez simplement effectuer la configuration pour un seul chauffe-eau.

## Exemple optimisé pour le solaire sans réchauffage avec 3 chauffe-eau (explication sous forme de tableau)

Lors de la configuration des actions si/alors, vérifiez toujours si l'unité affichée est le watt ou le kilowatt.

Les relais sont reliés aux chauffe-eau et ont reçu le nom « Boiler ».

Durée jusqu'à ce que la pleine puissance soit soutirée : 20 secondes

Le chauffe-eau se met en marche de lui-même lorsqu'une température minimale est atteinte : oui

Puissance : 

- Chauffe-eau EG : 6 kW

- Chauffe-eau DG : 3 kW

- Chauffe-eau UG : 2 kW


Pour garantir que les chauffe-eau ne soient pas mis en marche simultanément, nous allons intégrer un délai avant la mise en marche de chaque chauffe-eau. Le chauffe-eau dont le délai est le plus court profite le plus de l'énergie solaire, car il est mis en marche en premier. Dans cet exemple, nous allons mettre en marche en premier le chauffe-eau qui consomme le plus, afin qu'il ait la possibilité d'être mis en marche en premier après une longue période de forte consommation, p. ex. à midi.

### Configuration : chauffe-eau marche, vue sous forme de tableau (courte)

Nous abordons maintenant encore la configuration. Un exemple plus simple est expliqué en détail plus haut.

La présentation sous forme de tableau permet de repérer plus rapidement les différences sur les écrans d'ordinateur, et donc aussi la logique qui les sous-tend.

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 9](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/09.png)

Configuration : chauffe-eau 1 marche (EG)

Action si/alors : Boiler EG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur : Bilanz 

- Seuil : en dessous (unter) 

- Puissance : \-6000 Watt

- Durée minimale : 1 minute


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : EG

- Boiler : Marche (Ein)


Configuration : chauffe-eau 2 marche (DG)

Action si/alors : Boiler DG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur : Bilanz 

- Seuil : en dessous (unter)

- Puissance : \-3000 Watt

- Durée minimale : 2 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : DG

- Boiler : Marche (Ein)


Configuration : chauffe-eau 3 marche (UG)

Action si/alors : Boiler UG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur : Bilanz 

- Seuil : en dessous (unter) 

- Puissance : \-2000 Watt

- Durée minimale : 3 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : UG

- Boiler : Marche (Ein)


### Configuration : chauffe-eau arrêt, vue sous forme de tableau (courte)

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 10](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/10.png)

Configuration : chauffe-eau 1 arrêt (EG)

Action si/alors : Boiler EG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur : Bilanz 

- Seuil : au-dessus (über)

- Puissance : 500 Watt

- Durée minimale : 4 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : EG

- Boiler : Arrêt (Aus)


Configuration : chauffe-eau 2 arrêt (DG)

Action si/alors : Boiler DG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur : Bilanz 

- Seuil : au-dessus (über)

- Puissance : 500 Watt

- Durée minimale : 5 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : DG

- Boiler : Arrêt (Aus)


Configuration : chauffe-eau 3 arrêt (UG)

Action si/alors : Boiler UG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur : Bilanz 

- Seuil : au-dessus (über)

- Puissance : 500 Watt

- Durée minimale : 6 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : UG

- Boiler : Arrêt (Aus)


## Exemple optimisé pour le solaire sans réchauffage avec 1 chauffe-eau et Booster / légionelles

Lors de la configuration des actions si/alors, vérifiez toujours si l'unité affichée est le watt ou le kilowatt.

Les relais sont reliés aux chauffe-eau et ont reçu le nom « Boiler ».

Le Mosfet est configuré conformément à la page [Entrées et sorties](/schnittstellen/ein-und-ausgaenge) et porte le nom « Booster und Legionelle ».

Durée jusqu'à ce que la pleine puissance soit soutirée : 20 secondes

Le chauffe-eau se met en marche de lui-même lorsqu'une température minimale est atteinte : oui

Puissance : 

- Chauffe-eau : 7 kW


### Configuration : légionelles marche

Cette configuration n'est nécessaire que si la protection contre les légionelles doit être activée, p. ex. 1x par semaine le vendredi à partir de 3:15. Une durée est indiquée ici, de 30 minutes (par défaut), afin de garantir que l'état soit réglé sur « Marche » même si un paquet de données se perd.

Action si/alors : Legionelle Ein

Si date & heure (Wenn Datum & Uhrzeit) :

- Type : Période / Chaque jour

- De : 03:15

- Jours de la semaine : Tout sélectionner

- À : 03:45


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : EG

- Sortie (Ausgang) Booster und Legionelle : Marche (Ein)

- Durée minimale : non


![Exemples de commande de chauffe-eau avec des actions si/alors – figure 11](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/11.png)

### Configuration : Booster et légionelles arrêt

Cela correspond au temps au bout duquel le Booster (activé manuellement par l'utilisateur dans l'interface smart-me) ou la commutation anti-légionelles (configurée comme ci-dessus) doit être automatiquement désactivé, parce que le chauffe-eau est alors chaud. P. ex. 90 minutes. 

Action si/alors : Booster Legionelle Aus

Si états de commutation (Wenn Schaltzustände) :

- Compteur : EG

- Sortie (Ausgang) Booster und Legionelle : Marche (Ein)

- Durée minimale : oui, 90 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : EG

- Sortie (Ausgang) Booster und Legionelle : Arrêt (Aus)


![Exemples de commande de chauffe-eau avec des actions si/alors – figure 12](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/12.png)

### Configuration : chauffe-eau marche, vue sous forme de tableau (courte)

Configuration : chauffe-eau marche

Action si/alors : Boiler Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur : Bilanz 

- Seuil : en dessous (unter) 

- Puissance : \-7000 Watt

- Durée minimale : 1 minute


Si états de commutation (Wenn Schaltzustände) :

- Compteur : EG

- Sortie (Ausgang) Booster und Legionelle : Marche (Ein)

- Durée minimale : non


Si événement (Wenn Ereignis)

- Type : Liaison OU (ODER Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : EG

- Boiler : Marche (Ein)


![Exemples de commande de chauffe-eau avec des actions si/alors – figure 13](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/13.png)

### Configuration : chauffe-eau arrêt, vue sous forme de tableau (courte)

Configuration : chauffe-eau 1 arrêt (EG)

Action si/alors : Boiler EG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur : Bilanz 

- Seuil : au-dessus (über)

- Puissance : 500 Watt

- Durée minimale : 1 minute


Si états de commutation (Wenn Schaltzustände) :

- Compteur : EG

- Sortie (Ausgang) Booster und Legionelle : Arrêt (Aus)

- Durée minimale : non


Si événement (Wenn Ereignis)

- Type : Liaison ET (UND Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : EG

- Boiler : Arrêt (Aus)


![Exemples de commande de chauffe-eau avec des actions si/alors – figure 14](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/14.png)

## Exemple optimisé pour le solaire avec réchauffage et bouton Booster avec 1 chauffe-eau

Identique à l'« Exemple optimisé pour le solaire avec réchauffage et bouton Booster avec 3 chauffe-eau (explication sous forme de tableau) » ci-dessous. Vous devez simplement effectuer la configuration pour un seul chauffe-eau.

## Exemple optimisé pour le solaire avec réchauffage et bouton Booster avec 3 chauffe-eau (explication sous forme de tableau)

<div className="row">
<div className="col col--6">

Lors de la configuration des actions si/alors, vérifiez toujours si l'unité affichée est le watt ou le kilowatt.

Les relais sont reliés aux chauffe-eau et ont reçu le nom « Boiler ».

Le Mosfet est configuré conformément à la page [Entrées et sorties](/schnittstellen/ein-und-ausgaenge) et porte le nom « Boiler Booster ».

</div>
<div className="col col--6 text--center">

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 15](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/15.png)

</div>
</div>

Durée jusqu'à ce que la pleine puissance soit soutirée : 20 secondes

Le chauffe-eau se met en marche de lui-même lorsqu'une température minimale est atteinte : oui

Puissance : 

- Chauffe-eau EG : 6 kW

- Chauffe-eau DG : 3 kW

- Chauffe-eau UG : 2 kW


Pour garantir que les chauffe-eau ne soient pas mis en marche simultanément, nous allons intégrer un délai avant la mise en marche de chaque chauffe-eau. Le chauffe-eau dont le délai est le plus court profite le plus de l'énergie solaire, car il est mis en marche en premier. Dans cet exemple, nous allons mettre en marche en premier le chauffe-eau qui consomme le plus, afin qu'il ait la possibilité d'être mis en marche en premier après une longue période de forte consommation, p. ex. à midi.

### Configuration : chauffe-eau marche, vue sous forme de tableau (courte)

Nous abordons maintenant encore la configuration. Un exemple plus simple est expliqué en détail plus haut.

La présentation sous forme de tableau permet de repérer plus rapidement les différences sur les écrans d'ordinateur, et donc aussi la logique qui les sous-tend.

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 16](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/16.png)

Configuration : chauffe-eau 1 marche (EG)

Action si/alors : Boiler EG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur : Bilanz 

- Seuil : en dessous (unter) 

- Puissance : \-6000 Watt

- Durée minimale : 1 minute


Si date & heure (Wenn Datum & Uhrzeit) :

- Type : Période / Chaque jour

- De : 22:00

- Jours de la semaine : Tout sélectionner

- À : 01:00


Si états de commutation (Wenn Schaltzustände) :

- Compteur : EG

- Sortie (Ausgang) Boiler Booster : Marche (Ein)

- Durée minimale : non


Si événement (Wenn Ereignis)

- Type : Liaison OU (Oder Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : EG

- Boiler Booster : Ne rien sélectionner (Nichts wählen)

- Boiler : Marche (Ein)


Configuration : chauffe-eau 2 marche (DG)

Action si/alors : Boiler DG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur : Bilanz 

- Seuil : en dessous (unter)

- Puissance : \-3000 Watt

- Durée minimale : 2 minutes


Si date & heure (Wenn Datum & Uhrzeit) :

- Type : Période / Chaque jour

- De : 01:00

- Jours de la semaine : Tout sélectionner

- À : 05:00


Si états de commutation (Wenn Schaltzustände) :

- Compteur : DG

- Sortie (Ausgang) Boiler Booster : Marche (Ein)

- Durée minimale : non


Si événement (Wenn Ereignis)

- Type : Liaison OU (Oder Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : DG

- Boiler Booster : Ne rien sélectionner (Nichts wählen)

- Boiler : Marche (Ein)


Configuration : chauffe-eau 3 marche (UG)

Action si/alors : Boiler UG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur : Bilanz 

- Seuil : en dessous (unter) 

- Puissance : \-2000 Watt

- Durée minimale : 3 minutes


Si date & heure (Wenn Datum & Uhrzeit) :

- Type : Période / Chaque jour

- De : 02:00

- Jours de la semaine : Tout sélectionner

- À : 06:00


Si états de commutation (Wenn Schaltzustände) :

- Compteur : UG

- Sortie (Ausgang) Boiler Booster : Marche (Ein)

- Durée minimale : non


Si événement (Wenn Ereignis)

- Type : Liaison OU (Oder Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : UG

- Boiler Booster : Ne rien sélectionner (Nichts wählen)

- Boiler : Marche (Ein)


### Configuration : chauffe-eau arrêt, vue sous forme de tableau (courte)

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 17](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/17.png)

Configuration : chauffe-eau 1 arrêt (EG)

Action si/alors : Boiler EG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur : Bilanz 

- Seuil : au-dessus (über)

- Puissance : 500 Watt

- Durée minimale : 4 minutes


Si date & heure (Wenn Datum & Uhrzeit) :

- Type : Période / Chaque jour

- De : 01:01

- Jours de la semaine : Tout sélectionner

- À : 21:59


Si états de commutation (Wenn Schaltzustände) :

- Compteur : EG

- Sortie (Ausgang) Boiler Booster : Arrêt (Aus)

- Durée minimale : non


Si événement (Wenn Ereignis)

- Type : Liaison ET (Und Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : EG

- Boiler : Arrêt (Aus)


Configuration : chauffe-eau 2 arrêt (DG)

Action si/alors : Boiler DG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur : Bilanz 

- Seuil : au-dessus (über)

- Puissance : 500 Watt

- Durée minimale : 5 minutes


Si date & heure (Wenn Datum & Uhrzeit) :

- Type : Période / Chaque jour

- De : 05:01

- Jours de la semaine : Tout sélectionner

- À : 00:59


Si états de commutation (Wenn Schaltzustände) :

- Compteur : EG

- Sortie (Ausgang) Boiler Booster : Arrêt (Aus)

- Durée minimale : non


Si événement (Wenn Ereignis)

- Type : Liaison ET (Und Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : DG

- Boiler : Arrêt (Aus)


Configuration : chauffe-eau 3 arrêt (UG)

Action si/alors : Boiler UG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur : Bilanz 

- Seuil : au-dessus (über)

- Puissance : 500 Watt

- Durée minimale : 6 minutes


Si date & heure (Wenn Datum & Uhrzeit) :

- Type : Période / Chaque jour

- De : 06:01

- Jours de la semaine : Tout sélectionner

- À : 01:59


Si états de commutation (Wenn Schaltzustände) :

- Compteur : EG

- Sortie (Ausgang) Boiler Booster : Arrêt (Aus)

- Durée minimale : non


Si événement (Wenn Ereignis)

- Type : Liaison ET (Und Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : UG

- Boiler : Arrêt (Aus)


### Configuration : réinitialisation du Booster du chauffe-eau, vue sous forme de tableau (courte)

Cette section est facultative. Si elle n'est pas configurée, cela signifie que le bouton Booster n'est jamais réinitialisé et reste toujours valable.

Dans cet exemple, le bouton « Boiler Booster » est remis sur « arrêt » après 300 minutes, soit 5 heures.

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 18](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/18.png)

Configuration : réinitialisation du Booster du chauffe-eau 1 (EG)

Action si/alors : Boiler EG Booster Reset

Si états de commutation (Wenn Schaltzustände) :

- Compteur : EG

- Sortie (Ausgang) Boiler Booster : Marche (Ein)

- Durée minimale : 300 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : EG

- Boiler : Arrêt (Aus)


Configuration : réinitialisation du Booster du chauffe-eau 2 (DG)

Action si/alors : Boiler DG Booster Reset

Si états de commutation (Wenn Schaltzustände) :

- Compteur : DG

- Sortie (Ausgang) Boiler Booster : Marche (Ein)

- Durée minimale : 300 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : DG

- Boiler : Arrêt (Aus)


Configuration : réinitialisation du Booster du chauffe-eau 3 (UG)

Action si/alors : Boiler UG Booster Reset

Si états de commutation (Wenn Schaltzustände) :

- Compteur : UG

- Sortie (Ausgang) Boiler Booster : Marche (Ein)

- Durée minimale : 300 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur : UG

- Boiler : Arrêt (Aus)
