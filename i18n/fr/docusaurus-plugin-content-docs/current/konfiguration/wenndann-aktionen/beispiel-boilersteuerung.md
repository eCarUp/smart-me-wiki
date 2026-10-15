---
title: 'Exemples de commande de chauffe-eau avec des actions si/alors'
slug: '/konfiguration/wenndann-aktionen/beispiel-boilersteuerung'
description: 'Cette page décrit en détail des exemples de configuration.'
sidebar_label: 'Exemple de commande de chauffe-eau'
---
Cette page décrit en détail des exemples de configuration.

## Prérequis

Pour pouvoir utiliser les actions si/alors, vous devez disposer d'une licence smart-me Limited ou Professional.

## Notions de base

Les données techniques figurent auprès des différents [produits](/produkte). (p. ex. pouvoir de coupure maximal).

La configuration des sorties est décrite sur la page [Entrées et sorties](/schnittstellen/ein_und_ausgaenge) (p. ex. activation de la sortie 1).

Les notions de base sont décrites sous [Actions si/alors](/konfiguration/wenndann-aktionen) (p. ex. où trouver les actions si/alors).

Notez que les [actions si/alors](/konfiguration/wenndann-aktionen) ne fonctionnent correctement que si la connexion au smart-me Cloud est assurée. Les [actions déclenchées par un événement](/konfiguration/wenndann-aktionen/ereignisaktionen)  sont plus limitées, mais elles sont enregistrées et exécutées localement.

Lors de la configuration des actions si/alors, vérifiez toujours si l'unité affichée est le watt ou le kilowatt.

Les compteurs smart-me sont équipés de relais bistables : si une mise en marche est configurée, il faut toujours configurer aussi la mise à l'arrêt.

## Introduction

Déterminez la consommation et prévoyez une réserve pour les fluctuations de consommation

Pour configurer une bonne commande, il est important de connaître la puissance consommée par les consommateurs. Il est également nécessaire de prévoir une réserve pour chaque cas. Si, par exemple, le chauffe-eau des combles nécessite 3 kW, le chauffe-eau est enclenché lorsque moins de -3,5 kW sont mesurés sur le compteur de bilan et n'est déclenché à nouveau que lorsque plus de 0 kW sont mesurés. La différence de 0,5 kW sert alors de tampon lorsque quelqu'un allume par exemple un ordinateur (60 watts), afin que l'énergie disponible ne soit pas immédiatement insuffisante dans ce cas.

Enclenchement ou déclenchement temporisé

En outre, il faut tenir compte d'un délai avant l'enclenchement ou le déclenchement. Ainsi, le chauffe-eau n'est par exemple déclenché que si la valeur de 0 kW est dépassée pendant plus de 5 minutes. On s'assure ainsi qu'un consommateur de courte durée, comme un four ou une bouilloire, n'entraîne pas immédiatement l'arrêt et le redémarrage répétés du consommateur. Cela est d'autant plus important que le bâtiment est grand.

Déterminer combien de consommateurs peuvent être enclenchés simultanément 

Vous devriez toujours vérifier le dimensionnement des fusibles. Il faut en tenir compte lorsque tous les consommateurs fonctionnent en même temps, p. ex. la nuit. Si le fusible est trop petit, vous devez configurer les actions si/alors de manière à ce que les consommateurs ne soient pas enclenchés simultanément.

Déterminer les temps d'enclenchement et de déclenchement des consommateurs pour un enclenchement échelonné

Lors de l'enclenchement progressif de consommateurs, p. ex. de plusieurs chauffe-eau, il faut s'assurer que le délai entre le premier et le deuxième consommateur est suffisamment long pour que le premier consommateur soutire sa pleine puissance. Si, par exemple, il ne faut que 20 secondes pour que les consommateurs atteignent leur pleine puissance, les consommateurs peuvent être enclenchés avec un délai d'une minute. Pour autant que suffisamment de courant soit disponible.

S'il existe des heures fixes d'enclenchement et de déclenchement, il faut veiller à ce qu'elles soient décalées d'au moins 1 minute. Par exemple, enclenchement entre 5:00 et 8:00 et déclenchement entre 8:01 et 4:59

Déclenchement des consommateurs

Lors du déclenchement de consommateurs, p. ex. de plusieurs chauffe-eau, il est possible de tout déclencher en une seule fois. Donc p. ex. avec un délai de 5 minutes (déclenchement temporisé). Mais il est aussi possible de déclencher les chauffe-eau progressivement.

Exemple de déclenchement progressif avec délai : 

- Le premier chauffe-eau se déclenche avec un délai de 5 minutes, afin que quelqu'un puisse p. ex. allumer la bouilloire sans que cela ne déclenche le chauffe-eau. 

- Le deuxième chauffe-eau est déclenché après 7 minutes de soutirage accru du réseau (donc 5 minutes après le premier + 2 minutes d'attente)

- Le troisième chauffe-eau est ensuite déclenché après 9 minutes de soutirage accru du réseau


Optimisé pour le réseau ou optimisé pour l'autoconsommation

Lors de la configuration des seuils d'enclenchement et de déclenchement, il faut décider s'il s'agit d'une installation optimisée pour le réseau, c'est-à-dire que les consommateurs s'enclenchent et se déclenchent dans la mesure du possible toujours lorsque du courant est soutiré du réseau. Ou si l'installation doit être optimisée pour l'autoconsommation. Cela signifie qu'il faut utiliser le plus possible le courant produit sur le toit.

- Exemple pour un consommateur de 2,5 kW avec une réserve de 0,5 kW pour les fluctuations de consommation.

    - Optimisé pour le réseau : enclencher le chauffe-eau à -3 kW et le déclencher à 0 kW. 

    - Optimisé pour l'autoconsommation : enclencher le chauffe-eau à -1,5 kW et le déclencher à +1,5 kW.

    - Mixte : enclencher le chauffe-eau à -2.5 kW et le déclencher à + 0.5 kW.


Lors de la configuration, il faut tenir compte du fait que la variante optimisée pour l'autoconsommation est plus rentable en hiver, mais qu'en été, par beau temps, les consommateurs sont enclenchés très tôt et sont déjà pleins l'après-midi lorsque le soleil brille.

Nous avons fait de bonnes expériences lorsque les consommateurs s'enclenchent au moment où ils peuvent être alimentés à 100 % en courant solaire et que la réserve pour les petites fluctuations de la part du réseau est prise en compte. Donc l'exemple « Mixte » ci-dessus.

Bouton booster

La mise en place d'un bouton booster pour un consommateur est certes possible, mais rend la configuration plus laborieuse et plus compliquée. Il faut en outre noter que seul le propriétaire du compte smart-me a la possibilité d'activer un bouton booster. 

Pour cette fonction, nous devons utiliser une sortie numérique qui n'est pas physiquement reliée à un consommateur. Nous utilisons alors le bouton uniquement comme état pour les actions si/alors.

Réchauffage avec heures pleines et heures creuses ou réchauffage avec tarif unique. 

Pour les chauffe-eau réchauffés au moyen des actions si/alors, la structure tarifaire locale peut être prise en compte. 

Si le courant est meilleur marché la nuit, il est courant de réchauffer pendant la nuit. Cela a toutefois pour conséquence que le chauffe-eau a en général atteint sa température maximale au lever du soleil. 

Si un tarif unique est appliqué, le mieux est d'échelonner le réchauffage à partir de 12 heures. Ainsi, en été, le chauffe-eau peut être chargé de manière optimale le matin et, le cas échéant, chauffé l'après-midi. De cette manière, le rendement solaire pour le chauffe-eau est meilleur. Dans les exemples suivants, le réchauffage a lieu la nuit. Si celui-ci doit avoir lieu pendant la journée, modifiez simplement les heures d'enclenchement des exemples. Veillez à ce que le déclenchement soit lui aussi pris en compte.

Commande de chauffe-eau à 3 niveaux

L'exemple ci-dessous pour la commande de 3 chauffe-eau peut aussi être utilisé pour la commande d'un chauffe-eau triphasé. La configuration est exactement la même.

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 1](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/01.png)

Image : RCP (regroupement dans le cadre de la consommation propre) avec 3 chauffe-eau, réchauffage nocturne inclus (rectangles verts)

## Exemple optimisé pour le solaire avec réchauffage et 1 chauffe-eau (explication détaillée avec images et explication sous forme de tableau)

Lors de la configuration des actions si/alors, vérifiez toujours si l'unité affichée est le watt ou le kilowatt.

Les relais sont reliés aux chauffe-eau et ont reçu le nom « Boiler ».

Durée jusqu'à ce que la pleine puissance soit soutirée : 20 secondes

Le chauffe-eau s'enclenche de lui-même lorsqu'une température minimale est atteinte : non

Puissance du chauffe-eau EG : 6 kW

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 2](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/02.png)

Configuration : chauffe-eau 1 marche (EG)

Action si/alors (Wenn/Dann Aktion) : Boiler EG Ein

Cette action si/alors remplit la fonction suivante :

- enclencher le chauffe-eau lorsque le compteur de bilan fournit suffisamment de courant pendant plus d'une minute.


Ou

- il est une heure définie et le chauffe-eau est dans tous les cas chauffé pendant trois heures.


![Exemples de commande de chauffe-eau avec des actions si/alors – figure 3](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/03.png)

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : en dessous (unter) 

- Puissance (Leistung) : -6000 watts

- Durée minimale (Mindestzeit) : 1 minute


![Exemples de commande de chauffe-eau avec des actions si/alors – figure 4](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/04.png)

<div className="row">
<div className="col col--5">

Si date et heure (Wenn Datum & Uhrzeit) :

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

Alors enclencher / déclencher (Dann Ein / ausschalten)

- Compteur (Zähler) : EG

- Boiler : Marche (Ein)


![Exemples de commande de chauffe-eau avec des actions si/alors – figure 7](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/07.png)

### Configuration : chauffe-eau arrêt, vue sous forme de tableau (résumé)



Action si/alors (Wenn/Dann Aktion) : Boiler EG Aus

Cette action si/alors remplit la fonction suivante :

- Déclencher le chauffe-eau lorsque le compteur de bilan ne fournit pas suffisamment de courant pendant plus de trois minutes.

- Et

- Lorsque le chauffe-eau ne se trouve pas dans la période définie pendant laquelle il est dans tous les cas réchauffé pendant trois heures.


La configuration est expliquée ci-dessous dans la vue sous forme de tableau. Il est important de noter qu'il s'agit d'une action ET, que le seuil est désormais au-dessus et non plus en dessous, et que les heures sont l'inverse de celles de l'enclenchement (réchauffage), décalées de 1 minute.

Configuration : chauffe-eau 1 arrêt (EG)

Action si/alors (Wenn/Dann Aktion) : Boiler EG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : au-dessus (über)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 4 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 01:01

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle Wählen)

- À (Bis) : 21:59


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison ET (Und Verknüpfung)


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : Arrêt (Aus)


![Exemples de commande de chauffe-eau avec des actions si/alors – figure 8](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/08.png)

## Exemple optimisé pour le solaire avec réchauffage et 3 chauffe-eau (explication sous forme de tableau)

Lors de la configuration des actions si/alors, vérifiez toujours si l'unité affichée est le watt ou le kilowatt

Les relais sont reliés aux chauffe-eau et ont reçu le nom « Boiler ».

Durée jusqu'à ce que la pleine puissance soit soutirée : 20 secondes

Le chauffe-eau s'enclenche de lui-même lorsqu'une température minimale est atteinte : non

Puissance : 

- Chauffe-eau EG : 6 kW

- Chauffe-eau DG : 3 kW

- Chauffe-eau UG : 2 kW


Pour s'assurer que les chauffe-eau ne sont pas enclenchés simultanément, nous allons intégrer un délai avant l'enclenchement de chaque chauffe-eau. Le chauffe-eau avec le délai le plus court profite le plus de l'énergie solaire, car il est enclenché en premier. Dans cet exemple, nous enclencherons en premier le chauffe-eau ayant la consommation la plus élevée, afin qu'il ait la possibilité d'être enclenché en premier après une longue période de forte consommation, p. ex. à midi.

### Configuration : chauffe-eau marche, vue sous forme de tableau (résumé)

Nous abordons maintenant encore la configuration. Un exemple plus simple est expliqué en détail plus haut.

La présentation sous forme de tableau permet de repérer plus rapidement les différences sur les écrans d'ordinateur, et donc aussi la logique sous-jacente.

Configuration : chauffe-eau 1 marche (EG)

Action si/alors (Wenn/Dann Aktion) : Boiler EG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : en dessous (unter) 

- Puissance (Leistung) : \-6000 watts

- Durée minimale (Mindestzeit) : 1 minute


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 22:00

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle wählen)

- À (Bis) : 01:00


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison OU (Oder Verknüpfung)


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : Marche (Ein)


Configuration : chauffe-eau 2 marche (DG)

Action si/alors (Wenn/Dann Aktion) : Boiler DG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : en dessous (unter)

- Puissance (Leistung) : \-3000 watts

- Durée minimale (Mindestzeit) : 2 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 01:00

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle wählen)

- À (Bis) : 05:00


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison OU (Oder Verknüpfung)


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : DG

- Boiler : Marche (Ein)


Configuration : chauffe-eau 3 marche (UG)

Action si/alors (Wenn/Dann Aktion) : Boiler UG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : en dessous (unter) 

- Puissance (Leistung) : \-2000 watts

- Durée minimale (Mindestzeit) : 3 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 02:00

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle wählen)

- À (Bis) : 06:00


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison OU (Oder Verknüpfung)


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : UG

- Boiler : Marche (Ein)


### Configuration : chauffe-eau arrêt, vue sous forme de tableau (résumé)

Configuration : chauffe-eau 1 arrêt (EG)

Action si/alors (Wenn/Dann Aktion) : Boiler EG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : au-dessus (über)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 4 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 01:01

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle Wählen)

- À (Bis) : 21:59


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison ET (Und Verknüpfung)


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : Arrêt (Aus)


Configuration : chauffe-eau 2 arrêt (DG)

Action si/alors (Wenn/Dann Aktion) : Boiler DG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : au-dessus (über)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 5 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 05:01

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle Wählen)

- À (Bis) : 00:59


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison ET (Und Verknüpfung)


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : DG

- Boiler : Arrêt (Aus)


Configuration : chauffe-eau 3 arrêt (UG)

Action si/alors (Wenn/Dann Aktion) : Boiler UG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : au-dessus (über)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 6 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 06:01

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle Wählen)

- À (Bis) : 01:59


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison ET (Und Verknüpfung)


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : UG

- Boiler : Arrêt (Aus)


## Exemple optimisé pour le solaire sans réchauffage avec 1 chauffe-eau

Identique à l'« Exemple optimisé pour le solaire sans réchauffage avec 3 chauffe-eau (explication sous forme de tableau) » ci-dessous. Vous devez seulement effectuer la configuration pour un chauffe-eau.

## Exemple optimisé pour le solaire sans réchauffage avec 3 chauffe-eau (explication sous forme de tableau)

Lors de la configuration des actions si/alors, vérifiez toujours si l'unité affichée est le watt ou le kilowatt.

Les relais sont reliés aux chauffe-eau et ont reçu le nom « Boiler ».

Durée jusqu'à ce que la pleine puissance soit soutirée : 20 secondes

Le chauffe-eau s'enclenche de lui-même lorsqu'une température minimale est atteinte : oui

Puissance : 

- Chauffe-eau EG : 6 kW

- Chauffe-eau DG : 3 kW

- Chauffe-eau UG : 2 kW


Pour s'assurer que les chauffe-eau ne sont pas enclenchés simultanément, nous allons intégrer un délai avant l'enclenchement de chaque chauffe-eau. Le chauffe-eau avec le délai le plus court profite le plus de l'énergie solaire, car il est enclenché en premier. Dans cet exemple, nous enclencherons en premier le chauffe-eau ayant la consommation la plus élevée, afin qu'il ait la possibilité d'être enclenché en premier après une longue période de forte consommation, p. ex. à midi.

### Configuration : chauffe-eau marche, vue sous forme de tableau (résumé)

Nous abordons maintenant encore la configuration. Un exemple plus simple est expliqué en détail plus haut.

La présentation sous forme de tableau permet de repérer plus rapidement les différences sur les écrans d'ordinateur, et donc aussi la logique sous-jacente.

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 9](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/09.png)

Configuration : chauffe-eau 1 marche (EG)

Action si/alors (Wenn/Dann Aktion) : Boiler EG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : en dessous (unter) 

- Puissance (Leistung) : \-6000 watts

- Durée minimale (Mindestzeit) : 1 minute


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : Marche (Ein)


Configuration : chauffe-eau 2 marche (DG)

Action si/alors (Wenn/Dann Aktion) : Boiler DG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : en dessous (unter)

- Puissance (Leistung) : \-3000 watts

- Durée minimale (Mindestzeit) : 2 minutes


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : DG

- Boiler : Marche (Ein)


Configuration : chauffe-eau 3 marche (UG)

Action si/alors (Wenn/Dann Aktion) : Boiler UG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : en dessous (unter) 

- Puissance (Leistung) : \-2000 watts

- Durée minimale (Mindestzeit) : 3 minutes


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : UG

- Boiler : Marche (Ein)


### Configuration : chauffe-eau arrêt, vue sous forme de tableau (résumé)

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 10](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/10.png)

Configuration : chauffe-eau 1 arrêt (EG)

Action si/alors (Wenn/Dann Aktion) : Boiler EG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : au-dessus (über)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 4 minutes


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : Arrêt (Aus)


Configuration : chauffe-eau 2 arrêt (DG)

Action si/alors (Wenn/Dann Aktion) : Boiler DG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : au-dessus (über)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 5 minutes


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : DG

- Boiler : Arrêt (Aus)


Configuration : chauffe-eau 3 arrêt (UG)

Action si/alors (Wenn/Dann Aktion) : Boiler UG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : au-dessus (über)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 6 minutes


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : UG

- Boiler : Arrêt (Aus)


## Exemple optimisé pour le solaire sans réchauffage avec 1 chauffe-eau et booster / légionelles

Lors de la configuration des actions si/alors, vérifiez toujours si l'unité affichée est le watt ou le kilowatt.

Les relais sont reliés aux chauffe-eau et ont reçu le nom « Boiler ».

Le Mosfet est configuré conformément à la page [Entrées et sorties](/schnittstellen/ein_und_ausgaenge) et porte le nom « Booster und Legionelle ».

Durée jusqu'à ce que la pleine puissance soit soutirée : 20 secondes

Le chauffe-eau s'enclenche de lui-même lorsqu'une température minimale est atteinte : oui

Puissance : 

- Chauffe-eau : 7 kW


### Configuration : légionelles marche

Ceci ne doit être configuré que si la protection contre les légionelles doit être activée, p. ex. 1x par semaine le vendredi à partir de 3:15. Une durée est indiquée ici, de 30 minutes (par défaut), afin de garantir que l'état soit mis sur « Marche » même si un paquet de données se perd.

Action si/alors (Wenn/Dann Aktion) : Legionelle Ein

Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 03:15

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle Wählen)

- À (Bis) : 03:45


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Sortie (Ausgang) Booster und Legionelle : Marche (Ein)

- Durée minimale (Mindestzeit) : Non (Nein)


![Exemples de commande de chauffe-eau avec des actions si/alors – figure 11](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/11.png)

### Configuration : booster et légionelles arrêt

Ceci correspond au temps après lequel le booster (activé manuellement par l'utilisateur dans l'interface smart-me) ou la commutation anti-légionelles (configurée comme ci-dessus) doit être déclenché automatiquement, parce que le chauffe-eau est alors chaud. P. ex. 90 minutes. 

Action si/alors (Wenn/Dann Aktion) : Booster Legionelle Aus

Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG

- Sortie (Ausgang) Booster und Legionelle : Marche (Ein)

- Durée minimale (Mindestzeit) : Oui (Ja), 90 minutes


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Sortie (Ausgang) Booster und Legionelle : Arrêt (Aus)


![Exemples de commande de chauffe-eau avec des actions si/alors – figure 12](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/12.png)

### Configuration : chauffe-eau marche, vue sous forme de tableau (résumé)

Configuration : chauffe-eau marche

Action si/alors (Wenn/Dann Aktion) : Boiler Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : en dessous (unter) 

- Puissance (Leistung) : \-7000 watts

- Durée minimale (Mindestzeit) : 1 minute


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG

- Sortie (Ausgang) Booster und Legionelle : Marche (Ein)

- Durée minimale (Mindestzeit) : Non (Nein)


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison OU (ODER Verknüpfung)


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : Marche (Ein)


![Exemples de commande de chauffe-eau avec des actions si/alors – figure 13](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/13.png)

### Configuration : chauffe-eau arrêt, vue sous forme de tableau (résumé)

Configuration : chauffe-eau 1 arrêt (EG)

Action si/alors (Wenn/Dann Aktion) : Boiler EG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : au-dessus (über)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 1 minute


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG

- Sortie (Ausgang) Booster und Legionelle : Arrêt (Aus)

- Durée minimale (Mindestzeit) : Non (Nein)


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison ET (UND Verknüpfung)


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : Arrêt (Aus)


![Exemples de commande de chauffe-eau avec des actions si/alors – figure 14](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/14.png)

## Exemple optimisé pour le solaire avec réchauffage et bouton booster avec 1 chauffe-eau

Identique à l'« Exemple optimisé pour le solaire avec réchauffage et bouton booster avec 3 chauffe-eau (explication sous forme de tableau) » ci-dessous. Vous devez seulement effectuer la configuration pour un chauffe-eau.

## Exemple optimisé pour le solaire avec réchauffage et bouton booster avec 3 chauffe-eau (explication sous forme de tableau)

Lors de la configuration des actions si/alors, vérifiez toujours si l'unité affichée est le watt ou le kilowatt.

Les relais sont reliés aux chauffe-eau et ont reçu le nom « Boiler ».

Le Mosfet est configuré conformément à la page [Entrées et sorties](/schnittstellen/ein_und_ausgaenge) et porte le nom « Boiler Booster ».

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 15](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/15.png)

Durée jusqu'à ce que la pleine puissance soit soutirée : 20 secondes

Le chauffe-eau s'enclenche de lui-même lorsqu'une température minimale est atteinte : oui

Puissance : 

- Chauffe-eau EG : 6 kW

- Chauffe-eau DG : 3 kW

- Chauffe-eau UG : 2 kW


Pour s'assurer que les chauffe-eau ne sont pas enclenchés simultanément, nous allons intégrer un délai avant l'enclenchement de chaque chauffe-eau. Le chauffe-eau avec le délai le plus court profite le plus de l'énergie solaire, car il est enclenché en premier. Dans cet exemple, nous enclencherons en premier le chauffe-eau ayant la consommation la plus élevée, afin qu'il ait la possibilité d'être enclenché en premier après une longue période de forte consommation, p. ex. à midi.

### Configuration : chauffe-eau marche, vue sous forme de tableau (résumé)

Nous abordons maintenant encore la configuration. Un exemple plus simple est expliqué en détail plus haut.

La présentation sous forme de tableau permet de repérer plus rapidement les différences sur les écrans d'ordinateur, et donc aussi la logique sous-jacente.

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 16](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/16.png)

Configuration : chauffe-eau 1 marche (EG)

Action si/alors (Wenn/Dann Aktion) : Boiler EG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : en dessous (unter) 

- Puissance (Leistung) : \-6000 watts

- Durée minimale (Mindestzeit) : 1 minute


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 22:00

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle Wählen)

- À (Bis) : 01:00


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG

- Sortie (Ausgang) Boiler Booster : Marche (Ein)

- Durée minimale (Mindestzeit) : Non (Nein)


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison OU (Oder Verknüpfung)


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler Booster : Ne rien sélectionner (Nichts wählen)

- Boiler : Marche (Ein)


Configuration : chauffe-eau 2 marche (DG)

Action si/alors (Wenn/Dann Aktion) : Boiler DG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : en dessous (unter)

- Puissance (Leistung) : \-3000 watts

- Durée minimale (Mindestzeit) : 2 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 01:00

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle Wählen)

- À (Bis) : 05:00


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : DG

- Sortie (Ausgang) Boiler Booster : Marche (Ein)

- Durée minimale (Mindestzeit) : Non (Nein)


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison OU (Oder Verknüpfung)


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : DG

- Boiler Booster : Ne rien sélectionner (Nichts wählen)

- Boiler : Marche (Ein)


Configuration : chauffe-eau 3 marche (UG)

Action si/alors (Wenn/Dann Aktion) : Boiler UG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : en dessous (unter) 

- Puissance (Leistung) : \-2000 watts

- Durée minimale (Mindestzeit) : 3 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 02:00

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle Wählen)

- À (Bis) : 06:00


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : UG

- Sortie (Ausgang) Boiler Booster : Marche (Ein)

- Durée minimale (Mindestzeit) : Non (Nein)


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison OU (Oder Verknüpfung)


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : UG

- Boiler Booster : Ne rien sélectionner (Nichts wählen)

- Boiler : Marche (Ein)


### Configuration : chauffe-eau arrêt, vue sous forme de tableau (résumé)

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 17](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/17.png)

Configuration : chauffe-eau 1 arrêt (EG)

Action si/alors (Wenn/Dann Aktion) : Boiler EG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : au-dessus (über)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 4 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 01:01

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle Wählen)

- À (Bis) : 21:59


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG

- Sortie (Ausgang) Boiler Booster : Arrêt (Aus)

- Durée minimale (Mindestzeit) : Non (Nein)


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison ET (Und Verknüpfung)


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : Arrêt (Aus)


nConfiguration : chauffe-eau 2 arrêt (DG)

Action si/alors (Wenn/Dann Aktion) : Boiler DG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : au-dessus (über)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 5 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 05:01

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle Wählen)

- À (Bis) : 00:59


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG

- Sortie (Ausgang) Boiler Booster : Arrêt (Aus)

- Durée minimale (Mindestzeit) : Non (Nein)


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison ET (Und Verknüpfung)


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : DG

- Boiler : Arrêt (Aus)


Configuration : chauffe-eau 3 arrêt (UG)

Action si/alors (Wenn/Dann Aktion) : Boiler UG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : au-dessus (über)

- Puissance (Leistung) : 500 watts

- Durée minimale (Mindestzeit) : 6 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 06:01

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle Wählen)

- À (Bis) : 01:59


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG

- Sortie (Ausgang) Boiler Booster : Arrêt (Aus)

- Durée minimale (Mindestzeit) : Non (Nein)


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison ET (Und Verknüpfung)


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : UG

- Boiler : Arrêt (Aus)


### Configuration : réinitialisation du Boiler Booster, vue sous forme de tableau (résumé)

Cette section est facultative. Si elle n'est pas configurée, cela signifie que le bouton booster n'est jamais réinitialisé et reste toujours valable.

Dans cet exemple, le bouton « Boiler Booster » est remis sur « arrêt » (aus) après 300 minutes, soit 5 heures.

![Exemples de commande de chauffe-eau avec des actions si/alors – figure 18](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/18.png)

Configuration : réinitialisation du booster du chauffe-eau 1 (EG)

Action si/alors (Wenn/Dann Aktion) : Boiler EG Booster Reset

Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG

- Sortie (Ausgang) Boiler Booster : Marche (Ein)

- Durée minimale (Mindestzeit) : 300 minutes


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : Arrêt (Aus)


Configuration : réinitialisation du booster du chauffe-eau 2 (DG)

Action si/alors (Wenn Dann/Aktion) : Boiler DG Booster Reset

Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : DG

- Sortie (Ausgang) Boiler Booster : Marche (Ein)

- Durée minimale (Mindestzeit) : 300 minutes


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : DG

- Boiler : Arrêt (Aus)


Configuration : réinitialisation du booster du chauffe-eau 3 (UG)

Action si/alors (Wenn/Dann Aktion) : Boiler UG Booster Reset

Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : UG

- Sortie (Ausgang) Boiler Booster : Marche (Ein)

- Durée minimale (Mindestzeit) : 300 minutes


Alors enclencher / déclencher (Dann ein- / ausschalten)

- Compteur (Zähler) : UG

- Boiler : Arrêt (Aus)
