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

Les données techniques se trouvent auprès des [produits](/produkte) concernés (p. ex. le pouvoir de coupure maximal).

La configuration des sorties est décrite sur la page [Entrées et sorties](/schnittstellen/ein-und-ausgaenge) (p. ex. l'activation de la sortie 1).

Les notions de base sont décrites sous [Actions si/alors](/konfiguration/wenndann-aktionen) (p. ex. où trouver les actions si/alors).

Notez que les [actions si/alors](/konfiguration/wenndann-aktionen) ne fonctionnent correctement que si la connexion au cloud smart-me est assurée. Les [actions déclenchées par un événement](/konfiguration/wenndann-aktionen/ereignisaktionen)  sont plus limitées, mais elles sont enregistrées et exécutées localement.

Lors de la configuration des actions si/alors, vérifiez toujours si l'unité affichée est le watt ou le kilowatt.

Les compteurs smart-me sont équipés de relais bistables : si une activation est configurée, la désactivation doit toujours être configurée elle aussi.

## Introduction

Déterminer la consommation et prévoir une réserve pour les fluctuations de consommation

Pour configurer une bonne commande, il est important de connaître la puissance consommée par les consommateurs. Il est également nécessaire de prévoir une réserve pour chaque cas. Si, par exemple, le chauffe-eau DG nécessite 3 kW, il est activé lorsque moins de -3,5 kW sont mesurés sur le compteur de bilan et n'est désactivé que lorsque plus de 0 kW sont mesurés. La différence de 0,5 kW sert alors de tampon lorsque quelqu'un allume p. ex. un ordinateur (60 watts), afin que l'énergie disponible ne devienne pas immédiatement insuffisante dans ce cas.

Activation ou désactivation temporisée

En outre, il faut prévoir un délai avant l'activation ou la désactivation. Ainsi, le chauffe-eau n'est p. ex. désactivé que lorsque la valeur de 0 kW est dépassée pendant plus de 5 minutes. On s'assure ainsi qu'un consommateur de courte durée, comme un four ou une bouilloire, n'oblige pas immédiatement à désactiver puis réactiver le consommateur. C'est d'autant plus important que le bâtiment est grand.

Déterminer combien de consommateurs peuvent être activés simultanément 

Vous devriez toujours vérifier comment les fusibles ont été dimensionnés. Il faut en tenir compte lorsque tous les consommateurs fonctionnent en même temps, p. ex. la nuit. Si le fusible est trop petit, vous devez configurer les actions si/alors de sorte que les consommateurs ne soient pas activés simultanément.

Déterminer les temps d'activation et de désactivation des consommateurs pour une activation par paliers

Lors de l'activation par paliers de consommateurs, p. ex. de plusieurs chauffe-eau, il faut s'assurer que le délai entre le premier et le deuxième consommateur est suffisamment long pour que le premier consommateur soutire sa pleine puissance. Si, par exemple, il ne faut que 20 secondes pour que les consommateurs soutirent leur pleine puissance, les consommateurs peuvent être activés avec un délai d'une minute. Pour autant que suffisamment d'électricité soit disponible.

S'il existe des heures fixes d'activation et de désactivation, il faut veiller à ce qu'elles soient décalées d'au moins 1 minute. Par exemple, activation entre 5:00 et 8:00 et désactivation entre 8:01 et 4:59

Désactivation des consommateurs

Lors de la désactivation de consommateurs, p. ex. de plusieurs chauffe-eau, il est possible de tout désactiver en une fois. Donc p. ex. avec un délai de 5 minutes (désactivation temporisée). Mais il est aussi possible de désactiver les chauffe-eau par paliers.

Exemple de désactivation par paliers avec délai : 

- Le premier chauffe-eau se désactive avec un délai de 5 minutes, afin que quelqu'un puisse p. ex. allumer la bouilloire sans que cela ne désactive le chauffe-eau. 

- Le deuxième chauffe-eau est désactivé après 7 minutes de soutirage accru du réseau (donc 5 minutes après le premier + 2 minutes d'attente)

- Le troisième chauffe-eau est ensuite désactivé après 9 minutes de soutirage accru du réseau


Optimisé pour le réseau ou optimisé pour l'autoconsommation

Lors de la configuration des seuils d'activation et de désactivation, il faut décider s'il s'agit d'une installation optimisée pour le réseau, c.-à-d. que les consommateurs s'activent et se désactivent autant que possible au moment où de l'électricité est soutirée du réseau. Ou si l'installation doit être optimisée pour l'autoconsommation. Cela signifie qu'il faut utiliser le plus possible l'électricité produite sur le toit.

- Exemple pour un consommateur de 2,5 kW avec une réserve de 0,5 kW pour les fluctuations de consommation.

    - Optimisé pour le réseau : activer le chauffe-eau à -3 kW et le désactiver à 0 kW. 

    - Optimisé pour l'autoconsommation : activer le chauffe-eau à -1,5 kW et le désactiver à +1,5 kW.

    - Mixte : activer le chauffe-eau à -2.5 kW et le désactiver à + 0.5 kW.


Lors de la configuration, il faut tenir compte du fait que la variante optimisée pour l'autoconsommation est plus rentable en hiver, mais qu'en été, par beau temps, les consommateurs sont activés très tôt et sont déjà pleins l'après-midi, quand le soleil brille.

Nous avons fait de bonnes expériences lorsque les consommateurs s'activent au moment où ils peuvent être alimentés à 100 % par l'électricité solaire et que la réserve pour les petites fluctuations de la part du réseau est prise en compte. C'est-à-dire l'exemple « Mixte » ci-dessus.

Bouton Booster

La mise en place d'un bouton Booster pour un consommateur est certes possible, mais elle rend la configuration plus laborieuse et plus compliquée. Il faut en outre noter que seul le titulaire du compte smart-me a la possibilité d'activer un bouton Booster. 

Pour cette fonction, nous devons utiliser une sortie numérique qui n'est pas physiquement reliée à un consommateur. Nous utilisons alors le bouton uniquement comme état pour les actions si/alors.

Réchauffage avec heures pleines et heures creuses ou réchauffage avec tarif unique. 

Pour les chauffe-eau réchauffés au moyen des actions si/alors, la structure tarifaire locale peut être prise en compte. 

Lorsque l'électricité est moins chère la nuit, il est courant de réchauffer pendant la nuit. Cela a toutefois pour conséquence que le chauffe-eau a en général sa température maximale au lever du soleil. 

Lorsqu'un tarif unique est appliqué, le mieux est d'échelonner le réchauffage à partir de 12 heures. Ainsi, en été, le chauffe-eau peut être chargé de manière optimale le matin et, le cas échéant, chauffé l'après-midi. De cette manière, le rendement solaire pour le chauffe-eau est meilleur. Dans les exemples suivants, le réchauffage a lieu la nuit. S'il doit avoir lieu pendant la journée, modifiez simplement les heures d'activation des exemples. Veillez à ce que la désactivation soit elle aussi prise en compte.

Commande de chauffe-eau à 3 paliers

L'exemple ci-dessous pour la commande de 3 chauffe-eau peut aussi être utilisé pour la commande d'1 chauffe-eau à 3 phases. La configuration est exactement la même.

![Exemples de commande de chauffe-eau avec des actions si/alors – Figure 1](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/01.png)

Image : RCP (regroupement dans le cadre de la consommation propre) avec 3 chauffe-eau, réchauffage nocturne inclus (rectangles verts)

## Exemple optimisé pour le solaire avec réchauffage et 1 chauffe-eau (explication détaillée avec images et explication sous forme de tableau)

Lors de la configuration des actions si/alors, vérifiez toujours si l'unité affichée est le watt ou le kilowatt.

Les relais sont reliés au chauffe-eau et ont été nommés "Boiler".

Durée jusqu'à ce que la pleine puissance soit soutirée : 20 secondes

Le chauffe-eau s'active de lui-même lorsqu'une température minimale est atteinte : non

Puissance du chauffe-eau EG : 6 kW

![Exemples de commande de chauffe-eau avec des actions si/alors – Figure 2](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/02.png)

Configuration : chauffe-eau 1 activé (EG)

Action si/alors (Wenn/Dann Aktion) : Boiler EG Ein

Cette action si/alors remplit la fonction suivante :

- activer le chauffe-eau lorsque le compteur de bilan fournit suffisamment d'électricité pendant plus d'une minute.

Ou

- une heure définie est atteinte et le chauffe-eau est chauffé dans tous les cas pendant trois heures.

![Exemples de commande de chauffe-eau avec des actions si/alors – Figure 3](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/03.png)

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : inférieur à (unter) 

- Puissance (Leistung) : -6000 Watt

- Durée minimale (Mindestzeit) : 1 minute


![Exemples de commande de chauffe-eau avec des actions si/alors – Figure 4](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/04.png)

<div className="row">
<div className="col col--5">

Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 22:00

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle Wählen)

- À (Bis) : 01:00

</div>
<div className="col col--7 bild--mitte">

![Exemples de commande de chauffe-eau avec des actions si/alors – Figure 5](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/05.png)

</div>
</div>

Si événement (Wenn Ereignis)

- Type (Typ) : Liaison OU (Oder Verknüpfung)


![Exemples de commande de chauffe-eau avec des actions si/alors – Figure 6](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/06.png)

Alors activer / désactiver (Dann Ein / ausschalten)

- Compteur (Zähler) : EG

- Boiler : Activé (Ein)


![Exemples de commande de chauffe-eau avec des actions si/alors – Figure 7](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/07.png)

### Configuration : chauffe-eau désactivé, vue sous forme de tableau (courte)



Action si/alors (Wenn/Dann Aktion) : Boiler EG Aus

Cette action si/alors remplit la fonction suivante :

- Désactiver le chauffe-eau lorsque le compteur de bilan ne fournit pas suffisamment d'électricité pendant plus de trois minutes.

- Et

- Lorsque le chauffe-eau ne se trouve pas dans la période définie pendant laquelle il est réchauffé dans tous les cas pendant trois heures.


La configuration est expliquée ci-dessous dans la vue sous forme de tableau. Il est important de noter qu'il s'agit d'une action ET, que le seuil est désormais supérieur à et non plus inférieur à, et que les heures sont l'inverse de celles de l'activation (réchauffage), avec un décalage d'1 minute.

Configuration : chauffe-eau 1 désactivé (EG)

Action si/alors (Wenn/Dann Aktion) : Boiler EG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : supérieur à (über)

- Puissance (Leistung) : 500 Watt

- Durée minimale (Mindestzeit) : 4 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 01:01

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle Wählen)

- À (Bis) : 21:59


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison ET (Und Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : Désactivé (Aus)


![Exemples de commande de chauffe-eau avec des actions si/alors – Figure 8](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/08.png)

## Exemple optimisé pour le solaire avec réchauffage et 3 chauffe-eau (explication sous forme de tableau)

Lors de la configuration des actions si/alors, vérifiez toujours si l'unité affichée est le watt ou le kilowatt

Les relais sont reliés aux chauffe-eau et ont été nommés "Boiler".

Durée jusqu'à ce que la pleine puissance soit soutirée : 20 secondes

Le chauffe-eau s'active de lui-même lorsqu'une température minimale est atteinte : non

Puissance : 

- Chauffe-eau EG : 6 kW

- Chauffe-eau DG : 3 kW

- Chauffe-eau UG : 2 kW


Pour garantir que les chauffe-eau ne soient pas activés simultanément, nous allons intégrer un délai avant l'activation de chaque chauffe-eau. Le chauffe-eau dont le délai est le plus court profite le plus de l'énergie solaire, puisqu'il est activé en premier. Dans cet exemple, nous allons activer en premier le chauffe-eau dont la consommation est la plus élevée, afin qu'il ait la possibilité d'être activé en premier après une longue période de consommation élevée, p. ex. à midi.

### Configuration : chauffe-eau activé, vue sous forme de tableau (courte)

Nous abordons ici encore la configuration. Un exemple plus simple est expliqué en détail plus haut.

La présentation sous forme de tableau permet de repérer plus rapidement les différences sur les écrans d'ordinateur, et donc aussi la logique qui les sous-tend.

Configuration : chauffe-eau 1 activé (EG)

Action si/alors (Wenn/Dann Aktion) : Boiler EG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : inférieur à (unter) 

- Puissance (Leistung) : \-6000 Watt

- Durée minimale (Mindestzeit) : 1 minute


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 22:00

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle wählen)

- À (Bis) : 01:00


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison OU (Oder Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : Activé (Ein)


Configuration : chauffe-eau 2 activé (DG)

Action si/alors (Wenn/Dann Aktion) : Boiler DG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : inférieur à (unter)

- Puissance (Leistung) : \-3000 Watt

- Durée minimale (Mindestzeit) : 2 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 01:00

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle wählen)

- À (Bis) : 05:00


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison OU (Oder Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : DG

- Boiler : Activé (Ein)


Configuration : chauffe-eau 3 activé (UG)

Action si/alors (Wenn/Dann Aktion) : Boiler UG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : inférieur à (unter) 

- Puissance (Leistung) : \-2000 Watt

- Durée minimale (Mindestzeit) : 3 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 02:00

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle wählen)

- À (Bis) : 06:00


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison OU (Oder Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : UG

- Boiler : Activé (Ein)


### Configuration : chauffe-eau désactivé, vue sous forme de tableau (courte)

Configuration : chauffe-eau 1 désactivé (EG)

Action si/alors (Wenn/Dann Aktion) : Boiler EG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : supérieur à (über)

- Puissance (Leistung) : 500 Watt

- Durée minimale (Mindestzeit) : 4 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 01:01

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle Wählen)

- À (Bis) : 21:59


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison ET (Und Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : Désactivé (Aus)


Configuration : chauffe-eau 2 désactivé (DG)

Action si/alors (Wenn/Dann Aktion) : Boiler DG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : supérieur à (über)

- Puissance (Leistung) : 500 Watt

- Durée minimale (Mindestzeit) : 5 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 05:01

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle Wählen)

- À (Bis) : 00:59


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison ET (Und Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : DG

- Boiler : Désactivé (Aus)


Configuration : chauffe-eau 3 désactivé (UG)

Action si/alors (Wenn/Dann Aktion) : Boiler UG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : supérieur à (über)

- Puissance (Leistung) : 500 Watt

- Durée minimale (Mindestzeit) : 6 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 06:01

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle Wählen)

- À (Bis) : 01:59


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison ET (Und Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : UG

- Boiler : Désactivé (Aus)


## Exemple optimisé pour le solaire sans réchauffage avec 1 chauffe-eau

Identique à l'exemple ci-dessous « Exemple optimisé pour le solaire sans réchauffage avec 3 chauffe-eau (explication sous forme de tableau) ». Il vous suffit d'effectuer la configuration pour un seul chauffe-eau.

## Exemple optimisé pour le solaire sans réchauffage avec 3 chauffe-eau (explication sous forme de tableau)

Lors de la configuration des actions si/alors, vérifiez toujours si l'unité affichée est le watt ou le kilowatt.

Les relais sont reliés aux chauffe-eau et ont été nommés "Boiler".

Durée jusqu'à ce que la pleine puissance soit soutirée : 20 secondes

Le chauffe-eau s'active de lui-même lorsqu'une température minimale est atteinte : oui

Puissance : 

- Chauffe-eau EG : 6 kW

- Chauffe-eau DG : 3 kW

- Chauffe-eau UG : 2 kW


Pour garantir que les chauffe-eau ne soient pas activés simultanément, nous allons intégrer un délai avant l'activation de chaque chauffe-eau. Le chauffe-eau dont le délai est le plus court profite le plus de l'énergie solaire, puisqu'il est activé en premier. Dans cet exemple, nous allons activer en premier le chauffe-eau dont la consommation est la plus élevée, afin qu'il ait la possibilité d'être activé en premier après une longue période de consommation élevée, p. ex. à midi.

### Configuration : chauffe-eau activé, vue sous forme de tableau (courte)

Nous abordons ici encore la configuration. Un exemple plus simple est expliqué en détail plus haut.

La présentation sous forme de tableau permet de repérer plus rapidement les différences sur les écrans d'ordinateur, et donc aussi la logique qui les sous-tend.

![Exemples de commande de chauffe-eau avec des actions si/alors – Figure 9](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/09.png)

Configuration : chauffe-eau 1 activé (EG)

Action si/alors (Wenn/Dann Aktion) : Boiler EG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : inférieur à (unter) 

- Puissance (Leistung) : \-6000 Watt

- Durée minimale (Mindestzeit) : 1 minute


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : Activé (Ein)


Configuration : chauffe-eau 2 activé (DG)

Action si/alors (Wenn/Dann Aktion) : Boiler DG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : inférieur à (unter)

- Puissance (Leistung) : \-3000 Watt

- Durée minimale (Mindestzeit) : 2 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : DG

- Boiler : Activé (Ein)


Configuration : chauffe-eau 3 activé (UG)

Action si/alors (Wenn/Dann Aktion) : Boiler UG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : inférieur à (unter) 

- Puissance (Leistung) : \-2000 Watt

- Durée minimale (Mindestzeit) : 3 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : UG

- Boiler : Activé (Ein)


### Configuration : chauffe-eau désactivé, vue sous forme de tableau (courte)

![Exemples de commande de chauffe-eau avec des actions si/alors – Figure 10](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/10.png)

Configuration : chauffe-eau 1 désactivé (EG)

Action si/alors (Wenn/Dann Aktion) : Boiler EG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : supérieur à (über)

- Puissance (Leistung) : 500 Watt

- Durée minimale (Mindestzeit) : 4 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : Désactivé (Aus)


Configuration : chauffe-eau 2 désactivé (DG)

Action si/alors (Wenn/Dann Aktion) : Boiler DG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : supérieur à (über)

- Puissance (Leistung) : 500 Watt

- Durée minimale (Mindestzeit) : 5 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : DG

- Boiler : Désactivé (Aus)


Configuration : chauffe-eau 3 désactivé (UG)

Action si/alors (Wenn/Dann Aktion) : Boiler UG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : supérieur à (über)

- Puissance (Leistung) : 500 Watt

- Durée minimale (Mindestzeit) : 6 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : UG

- Boiler : Désactivé (Aus)


## Exemple optimisé pour le solaire sans réchauffage avec 1 chauffe-eau et Booster / légionelles

Lors de la configuration des actions si/alors, vérifiez toujours si l'unité affichée est le watt ou le kilowatt.

Les relais sont reliés aux chauffe-eau et ont été nommés "Boiler".

Le MOSFET est configuré conformément à la page [Entrées et sorties](/schnittstellen/ein-und-ausgaenge) et porte le nom "Booster und Legionelle".

Durée jusqu'à ce que la pleine puissance soit soutirée : 20 secondes

Le chauffe-eau s'active de lui-même lorsqu'une température minimale est atteinte : oui

Puissance : 

- Chauffe-eau : 7 kW


### Configuration : légionelles activé

Cette configuration n'est nécessaire que si la protection contre les légionelles doit être activée. P. ex. 1x par semaine le vendredi à partir de 3:15. On indique ici une durée, qui est de 30 minutes (par défaut), afin de garantir que l'état soit bien mis sur « Activé » même si un paquet de données se perd.

Action si/alors (Wenn/Dann Aktion) : Legionelle Ein

Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 03:15

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle Wählen)

- À (Bis) : 03:45


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Sortie (Ausgang) Booster und Legionelle : Activé (Ein)

- Durée minimale (Mindestzeit) : Non (Nein)


![Exemples de commande de chauffe-eau avec des actions si/alors – Figure 11](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/11.png)

### Configuration : Booster et légionelles désactivé

Cela correspond au délai après lequel le Booster (activé manuellement par l'utilisateur dans l'interface smart-me) ou la commutation anti-légionelles (configurée comme ci-dessus) doit être désactivé automatiquement, parce que le chauffe-eau est alors chaud. P. ex. 90 minutes. 

Action si/alors (Wenn/Dann Aktion) : Booster Legionelle Aus

Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG

- Sortie (Ausgang) Booster und Legionelle : Activé (Ein)

- Durée minimale (Mindestzeit) : Oui (Ja), 90 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Sortie (Ausgang) Booster und Legionelle : Désactivé (Aus)


![Exemples de commande de chauffe-eau avec des actions si/alors – Figure 12](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/12.png)

### Configuration : chauffe-eau activé, vue sous forme de tableau (courte)

Configuration : chauffe-eau activé

Action si/alors (Wenn/Dann Aktion) : Boiler Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : inférieur à (unter) 

- Puissance (Leistung) : \-7000 Watt

- Durée minimale (Mindestzeit) : 1 minute


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG

- Sortie (Ausgang) Booster und Legionelle : Activé (Ein)

- Durée minimale (Mindestzeit) : Non (Nein)


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison OU (ODER Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : Activé (Ein)


![Exemples de commande de chauffe-eau avec des actions si/alors – Figure 13](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/13.png)

### Configuration : chauffe-eau désactivé, vue sous forme de tableau (courte)

Configuration : chauffe-eau 1 désactivé (EG)

Action si/alors (Wenn/Dann Aktion) : Boiler EG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : supérieur à (über)

- Puissance (Leistung) : 500 Watt

- Durée minimale (Mindestzeit) : 1 minute


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG

- Sortie (Ausgang) Booster und Legionelle : Désactivé (Aus)

- Durée minimale (Mindestzeit) : Non (Nein)


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison ET (UND Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : Désactivé (Aus)


![Exemples de commande de chauffe-eau avec des actions si/alors – Figure 14](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/14.png)

## Exemple optimisé pour le solaire avec réchauffage et bouton Booster avec 1 chauffe-eau

Identique à l'exemple ci-dessous « Exemple optimisé pour le solaire avec réchauffage et bouton Booster avec 3 chauffe-eau (explication sous forme de tableau) ». Il vous suffit d'effectuer la configuration pour un seul chauffe-eau.

## Exemple optimisé pour le solaire avec réchauffage et bouton Booster avec 3 chauffe-eau (explication sous forme de tableau)

<div className="row">
<div className="col col--6">

Lors de la configuration des actions si/alors, vérifiez toujours si l'unité affichée est le watt ou le kilowatt.

Les relais sont reliés aux chauffe-eau et ont été nommés "Boiler".

Le MOSFET est configuré conformément à la page [Entrées et sorties](/schnittstellen/ein-und-ausgaenge) et porte le nom "Boiler Booster".

</div>
<div className="col col--6 bild--mitte">

![Exemples de commande de chauffe-eau avec des actions si/alors – Figure 15](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/15.png)

</div>
</div>

Durée jusqu'à ce que la pleine puissance soit soutirée : 20 secondes

Le chauffe-eau s'active de lui-même lorsqu'une température minimale est atteinte : oui

Puissance : 

- Chauffe-eau EG : 6 kW

- Chauffe-eau DG : 3 kW

- Chauffe-eau UG : 2 kW


Pour garantir que les chauffe-eau ne soient pas activés simultanément, nous allons intégrer un délai avant l'activation de chaque chauffe-eau. Le chauffe-eau dont le délai est le plus court profite le plus de l'énergie solaire, puisqu'il est activé en premier. Dans cet exemple, nous allons activer en premier le chauffe-eau dont la consommation est la plus élevée, afin qu'il ait la possibilité d'être activé en premier après une longue période de consommation élevée, p. ex. à midi.

### Configuration : chauffe-eau activé, vue sous forme de tableau (courte)

Nous abordons ici encore la configuration. Un exemple plus simple est expliqué en détail plus haut.

La présentation sous forme de tableau permet de repérer plus rapidement les différences sur les écrans d'ordinateur, et donc aussi la logique qui les sous-tend.

![Exemples de commande de chauffe-eau avec des actions si/alors – Figure 16](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/16.png)

Configuration : chauffe-eau 1 activé (EG)

Action si/alors (Wenn/Dann Aktion) : Boiler EG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : inférieur à (unter) 

- Puissance (Leistung) : \-6000 Watt

- Durée minimale (Mindestzeit) : 1 minute


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 22:00

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle Wählen)

- À (Bis) : 01:00


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG

- Sortie (Ausgang) Boiler Booster : Activé (Ein)

- Durée minimale (Mindestzeit) : Non (Nein)


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison OU (Oder Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler Booster : Ne rien sélectionner (Nichts wählen)

- Boiler : Activé (Ein)


Configuration : chauffe-eau 2 activé (DG)

Action si/alors (Wenn/Dann Aktion) : Boiler DG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : inférieur à (unter)

- Puissance (Leistung) : \-3000 Watt

- Durée minimale (Mindestzeit) : 2 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 01:00

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle Wählen)

- À (Bis) : 05:00


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : DG

- Sortie (Ausgang) Boiler Booster : Activé (Ein)

- Durée minimale (Mindestzeit) : Non (Nein)


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison OU (Oder Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : DG

- Boiler Booster : Ne rien sélectionner (Nichts wählen)

- Boiler : Activé (Ein)


Configuration : chauffe-eau 3 activé (UG)

Action si/alors (Wenn/Dann Aktion) : Boiler UG Ein

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : inférieur à (unter) 

- Puissance (Leistung) : \-2000 Watt

- Durée minimale (Mindestzeit) : 3 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 02:00

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle Wählen)

- À (Bis) : 06:00


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : UG

- Sortie (Ausgang) Boiler Booster : Activé (Ein)

- Durée minimale (Mindestzeit) : Non (Nein)


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison OU (Oder Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : UG

- Boiler Booster : Ne rien sélectionner (Nichts wählen)

- Boiler : Activé (Ein)


### Configuration : chauffe-eau désactivé, vue sous forme de tableau (courte)

![Exemples de commande de chauffe-eau avec des actions si/alors – Figure 17](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/17.png)

Configuration : chauffe-eau 1 désactivé (EG)

Action si/alors (Wenn/Dann Aktion) : Boiler EG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : supérieur à (über)

- Puissance (Leistung) : 500 Watt

- Durée minimale (Mindestzeit) : 4 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 01:01

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle Wählen)

- À (Bis) : 21:59


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG

- Sortie (Ausgang) Boiler Booster : Désactivé (Aus)

- Durée minimale (Mindestzeit) : Non (Nein)


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison ET (Und Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : Désactivé (Aus)


Configuration : chauffe-eau 2 désactivé (DG)

Action si/alors (Wenn/Dann Aktion) : Boiler DG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : supérieur à (über)

- Puissance (Leistung) : 500 Watt

- Durée minimale (Mindestzeit) : 5 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 05:01

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle Wählen)

- À (Bis) : 00:59


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG

- Sortie (Ausgang) Boiler Booster : Désactivé (Aus)

- Durée minimale (Mindestzeit) : Non (Nein)


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison ET (Und Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : DG

- Boiler : Désactivé (Aus)


Configuration : chauffe-eau 3 désactivé (UG)

Action si/alors (Wenn/Dann Aktion) : Boiler UG Aus

Si valeur mesurée supérieure/inférieure (Wenn Messwert grösser/kleiner) :

- Compteur (Zähler) : Bilanz 

- Seuil (Schwellwert) : supérieur à (über)

- Puissance (Leistung) : 500 Watt

- Durée minimale (Mindestzeit) : 6 minutes


Si date et heure (Wenn Datum & Uhrzeit) :

- Type (Typ) : Période / Chaque jour (Zeitspanne / Jeden Tag)

- De (Von) : 06:01

- Jours de la semaine (Wochentage) : Tout sélectionner (Alle Wählen)

- À (Bis) : 01:59


Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG

- Sortie (Ausgang) Boiler Booster : Désactivé (Aus)

- Durée minimale (Mindestzeit) : Non (Nein)


Si événement (Wenn Ereignis)

- Type (Typ) : Liaison ET (Und Verknüpfung)


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : UG

- Boiler : Désactivé (Aus)


### Configuration : réinitialisation du Boiler Booster, vue sous forme de tableau (courte)

Cette section est facultative. Si elle n'est pas configurée, le bouton Booster n'est jamais réinitialisé et reste toujours valable.

Dans cet exemple, le bouton "Boiler Booster" est remis sur « désactivé » (aus) après 300 minutes, soit 5 heures.

![Exemples de commande de chauffe-eau avec des actions si/alors – Figure 18](/img/konfiguration-wenndann-aktionen-beispiel-boilersteuerung/18.png)

Configuration : réinitialisation Booster chauffe-eau 1 (EG)

Action si/alors (Wenn/Dann Aktion) : Boiler EG Booster Reset

Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : EG

- Sortie (Ausgang) Boiler Booster : Activé (Ein)

- Durée minimale (Mindestzeit) : 300 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : EG

- Boiler : Désactivé (Aus)


Configuration : réinitialisation Booster chauffe-eau 2 (DG)

Action si/alors (Wenn/Dann Aktion) : Boiler DG Booster Reset

Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : DG

- Sortie (Ausgang) Boiler Booster : Activé (Ein)

- Durée minimale (Mindestzeit) : 300 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : DG

- Boiler : Désactivé (Aus)


Configuration : réinitialisation Booster chauffe-eau 3 (UG)

Action si/alors (Wenn/Dann Aktion) : Boiler UG Booster Reset

Si états de commutation (Wenn Schaltzustände) :

- Compteur (Zähler) : UG

- Sortie (Ausgang) Boiler Booster : Activé (Ein)

- Durée minimale (Mindestzeit) : 300 minutes


Alors activer / désactiver (Dann ein- / ausschalten)

- Compteur (Zähler) : UG

- Boiler : Désactivé (Aus)
