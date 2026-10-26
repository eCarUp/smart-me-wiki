---
title: 'Configuration Pico'
slug: '/konfiguration/inbetriebnahme/pico-konfiguration'
description: 'Cette page présente les principales configurations liées au matériel Pico.'
sidebar_label: 'Configuration Pico'
displayed_sidebar: wikiSidebar
---
Cette page présente les principales configurations liées au matériel Pico. La configuration de la borne de recharge Pico s'effectue toujours, dans un premier temps, via la plateforme smart-me. La méthode d'authentification peut ensuite être activée via un système backend (eCarUp).

![Configuration Pico – Illustration 1](/img/konfiguration-inbetriebnahme-pico-konfiguration/01.png)

![Configuration Pico – Illustration 2](/img/konfiguration-inbetriebnahme-pico-konfiguration/02.png)

## Authentification (privée, semi-publique, publique)



La borne de recharge Pico peut être utilisée au choix avec ou sans méthode d'authentification.



### Configuration None :

Aucune authentification n'est nécessaire pour recharger. (La recharge démarre dès que le véhicule est branché.)



### Configuration avec le backend eCarUp :

Pour exploiter une Pico de manière publique / semi-publique ou pour utiliser n'importe quel type de fonction de déverrouillage, la borne doit fonctionner en mode backend via eCarUp.

Fonctions de déverrouillage :

- RFID

- marche / arrêt manuel via l'application

- codes QR

- CarID (nécessite une activation dans les paramètres avancés du portail smart-me)




Dès que « Backend eCarUp » (eCarUp Backend) est sélectionné, la borne est automatiquement ajoutée au compte eCarUp du même nom. (Même nom d'utilisateur et même mot de passe que pour smart-me)

La configuration d'eCarUp s'effectue dans le portail web [www.ecarup.com](http://www.ecarup.com).

Sous Conducteurs (Fahrer), ajoutez un badge RFID ou lisez un « badge » à l'aide de l'application eCarUp pour Android et iOS.

Vous trouverez des détails sur la configuration d'eCarUp et des bornes de recharge publiques dans le
wiki eCarUp : [https://ecarupwiki.smart-me.com](https://ecarupwiki.smart-me.com) 



### Configuration avec un backend OCPP externe :

Pour intégrer la Pico dans le backend d'un fournisseur tiers, il vous suffit d'enregistrer l'URL du backend de ce fournisseur sur la borne de recharge concernée.

Cette option ne doit pas être utilisée si la borne est connectée via eCarUp.

Remarque :
L'URL commence par ws:// ou wss://

Paramètres de la Pico dans le portail smart-me :

![Configuration Pico – Illustration 3](/img/konfiguration-inbetriebnahme-pico-konfiguration/03.png)

Menu du portail eCarUp :

![Configuration Pico – Illustration 4](/img/konfiguration-inbetriebnahme-pico-konfiguration/04.png)

Enregistrer l'URL du backend du fournisseur tiers :

![Configuration Pico – Illustration 5](/img/konfiguration-inbetriebnahme-pico-konfiguration/05.png)

### Configuration pour un usage privé avec authentification RFID

1.  Accédez à Bornes → Gestion (Stationen → Verwaltung) dans le portail eCarUp

2.  Modifier → Modifier le raccordement (Bearbeiten → Anschluss bearbeiten)


![Configuration Pico – Illustration 6](/img/konfiguration-inbetriebnahme-pico-konfiguration/06.png)



Prix = 0 CHF, accès : privé (Privat)

![Configuration Pico – Illustration 7](/img/konfiguration-inbetriebnahme-pico-konfiguration/07.png)

### Configuration pour un usage limité avec authentification RFID (locataires avec prix spéciaux)

1.  Accédez à Bornes → Gestion (Stationen → Verwaltung) dans le portail eCarUp

2.  Modifier → Modifier le raccordement (Bearbeiten → Anschluss bearbeiten)


![Configuration Pico – Illustration 8](/img/konfiguration-inbetriebnahme-pico-konfiguration/06.png)

3\. Choisir les prix

![Configuration Pico – Illustration 9](/img/konfiguration-inbetriebnahme-pico-konfiguration/09.png)

4\. Définir les utilisateurs spéciaux et leurs prix

Les conducteurs créent leur propre compte eCarUp et communiquent le nom de leur compte au propriétaire de la borne.

![Configuration Pico – Illustration 10](/img/konfiguration-inbetriebnahme-pico-konfiguration/10.png)

## Personnaliser l'affichage de la Pico

Nous déconseillons d'utiliser une image de fond noire, car il n'est alors plus possible de savoir si la Pico fonctionne ou non. Surtout lorsqu'elle est hors ligne, il est difficile de juger à distance si la borne est défectueuse ou simplement non connectée. C'est pourquoi nous recommandons aux personnes soucieuses de leur consommation d'énergie d'ajouter cette image de 4 pixels, afin de toujours pouvoir vérifier si la borne fonctionne encore localement. [Pixel Status.gif](https://drive.google.com/uc?export=download&id=1iaQ6ZVWwL5f6gTqEcRyhkmrbaiKq3CNC)

Le nom de la borne et l'affichage en cas de non-utilisation peuvent être librement choisis et personnalisés.

Outre les émoticônes déjà disponibles, vous pouvez également télécharger vos propres GIF ou images. 

- Formats pris en charge : JPG, PNG, GIF

- Résolution : 32x32 pixels

- Taille : max. 200 kB

- L'arrière-plan doit être entièrement noir (#000000)

- Les animations (GIF) ont 10 images/s (100ms par image)

Remarque : vous obtiendrez le meilleur rendu si vous veillez, lors de la création et de l'édition, à ce que l'image soit téléchargée en 32x32 pixels au format GIF.

\-> Créez vos propres GIF avec [piskelapp](/drittsysteme/piskelapp) 

![Configuration Pico – Illustration 11](/img/konfiguration-inbetriebnahme-pico-konfiguration/11.png)

## Gestion de la charge et limitation

### Limiter la puissance de la borne

La borne de recharge Pico peut être standardisée lors de l'installation.

Ce paramètre est pris en compte par la gestion de la charge automatique et n'est jamais écrasé.

Le paramètre du courant de charge maximal permet de limiter de manière fixe la puissance maximale de la borne. La limitation s'effectue par paliers de 1 ampère.

32A = 22kW de puissance maximale

16A = 11kW de puissance maximale

Le paramètre du courant minimal permet d'empêcher des recharges ou de définir des courants minimaux adaptés au démarrage de la recharge d'un véhicule.

Remarque :
Certains véhicules ne peuvent pas être rechargés avec un courant de démarrage de 6A en raison de la technique intégrée au véhicule. Dans ce cas, le courant minimal peut être augmenté.

![Configuration Pico – Illustration 12](/img/konfiguration-inbetriebnahme-pico-konfiguration/12.png)

### Gestion de la charge statique (groupe de bornes)

La gestion de la charge statique régule les bornes au sein d'un même groupe de gestion de la charge. Cette fonction empêche le dépassement du courant maximal sur la ligne d'alimentation, p. ex. un câble plat, et régule la répartition du courant disponible entre les bornes. 

La taille des groupes de recharge est limitée à 200 bornes de recharge.

Fonctionnement en détail :
Les bornes de recharge se régulent elles-mêmes en fonction du courant maximal défini. La puissance de recharge triphasée est répartie entre toutes les bornes actives jusqu'à ce que la puissance minimale réglée ne puisse plus être fournie en triphasé à tous les véhicules en recharge. La puissance passe alors en monophasé. Tous les véhicules continuent de se recharger en monophasé avec le courant maximal possible par phase (commutation de phases). Une recharge supplémentaire ne devient impossible que lorsque tous les véhicules déjà en recharge ont atteint le minimum en monophasé. Dès qu'un des véhicules en recharge quitte la borne, la charge réservée est libérée pour un autre.

Configuration :

1.  Créer un groupe de gestion de la charge (Nouveau groupe / Neue Gruppe)

2.  Définir le courant maximal de la ligne d'alimentation (Courant disponible / Verfügbarer Strom)

3.  Définir l'action en cas de perte de connexion

    (En combinaison avec la gestion de la charge multiniveau, seule la version Courant max. par groupe (Max. Strom pro Gruppe) est utilisable)

4.  Ajouter les bornes au groupe de gestion de la charge correspondant (Modifier / Editieren)

Plus de détails à ce sujet : [Gestion de la charge Pico](/produkte/pico-ladestation/pico-lastmanagement)

![Configuration Pico – Illustration 13](/img/konfiguration-inbetriebnahme-pico-konfiguration/13.png)

![Configuration Pico – Illustration 14](/img/konfiguration-inbetriebnahme-pico-konfiguration/14.png)

### Gestion de la charge dynamique et recharge solaire optimisée avec la gestion de la charge multiniveau (MLM)

La gestion de la charge dynamique permet de prendre en compte un point de référence et de piloter les courants maximaux à ce point de référence. Dans l'électromobilité, on choisit pour cela soit le raccordement de l'immeuble, soit le point de distribution.

[Planification de la gestion de la charge](/planung/elektromobilitaet) 

Les produits suivants conviennent comme matériel pour la mesure de référence :

- [Telstar 80A](/produkte/telstar-80a)

- [Telstar CT](/produkte/telstar-ct)


La configuration de la gestion de la charge dynamique s'effectue via la gestion de la charge multiniveau de smart-me.

Vous trouverez des détails et des exemples ici : [Gestion de la charge multiniveau](/konfiguration/multilevel-lastmanagement)

Vous pouvez ainsi agir sur les courants maximaux des groupes de bornes en tenant compte du courant circulant actuellement à ce point de référence.

![Configuration Pico – Illustration 15](/img/konfiguration-inbetriebnahme-pico-konfiguration/15.png)

### Délestage

Délestage matériel (entrées externes de la Pico)

[](https://drive.google.com/open?id=1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY "Open Spreadsheet, Pico Lastabwurf in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY/htmlembed" height="245px" title="Feuille de calcul, délestage Pico" />

Délestage Pico

Le délestage peut également être réalisé avec un seul signal disponible. 

Pour la configuration « aucune recharge à puissance de recharge maximale », le signal est câblé sur IN1 et IN2 ainsi que sur COM. Pour la configuration « puissance minimale de 6A à puissance de recharge maximale », le signal doit uniquement être câblé sur IN2 ainsi que sur COM.

COM est le conducteur neutre ; IN1 et IN2 doivent être sous tension lors du signal ON. IN1 et IN2 ne génèrent pas de tension : celle-ci doit être fournie de l'extérieur.

Attention :
Le délestage peut être câblé soit sur toutes les Pico, soit au minimum sur une Pico de chaque groupe de charge statique.
Cette fonction est garantie même sans connexion Internet !

Délestage basé sur le cloud via MLM

Le délestage peut également être réalisé via la gestion de la charge multiniveau. L'avantage est qu'aucun signal ne doit être raccordé au matériel Pico : un signal appliqué à n'importe quel autre matériel (compteur) est utilisé comme déclencheur.

L'inconvénient est toutefois que la fonction n'est pas exécutée en l'absence de connexion Internet.

Plus de détails sur la configuration : [Gestion de la charge multiniveau](/konfiguration/multilevel-lastmanagement)

![Configuration Pico – Illustration 16](/img/konfiguration-inbetriebnahme-pico-konfiguration/16.png)

## Actions avancées

<div className="row">
<div className="col col--6">

En tant que propriétaire de la borne, vous pouvez ici déverrouiller le câble, redémarrer la borne ou afficher le relevé du compteur à l'écran pour vérification.

</div>
<div className="col col--6 text--center">

![Configuration Pico – Illustration 17](/img/konfiguration-inbetriebnahme-pico-konfiguration/17.png)

</div>
</div>

## Paramètres avancés

<div className="row">
<div className="col col--6">

Détection automatique du véhicule (Automatische Auto Erkennung) :
Pour que l'authentification CarID fonctionne, vous devez autoriser la communication entre la borne et le véhicule.

Modbus TCP :
Activation de l'interface Modbus TCP de la Pico

Supprimer la borne (Station löschen) :
Supprime la borne et toutes les données dans le cloud

</div>
<div className="col col--6 text--center">

![Configuration Pico – Illustration 18](/img/konfiguration-inbetriebnahme-pico-konfiguration/18.png)

</div>
</div>

### Toujours verrouiller le câble

Le câble de recharge peut être verrouillé sur la borne de recharge Pico.

Procédure :
Brancher le câble --> Se connecter au portail smart-me --> Sélectionner la Pico --> Sélectionner la roue dentée en haut à droite --> Paramètres avancés (erweiterte Einstellungen) --> Toujours verrouiller le câble (Kabel immer fest verriegeln). 

Remarque : 

- Le véhicule ne doit pas être branché lors du verrouillage du câble.

- En cas de coupure de l'alimentation électrique ou de redémarrage de la Pico, le câble est brièvement déverrouillé, puis verrouillé à nouveau au démarrage.

Condition préalable : la Pico doit disposer au minimum de la version de communication 0.0.7. Les Pico fabriquées avant le 31.12.2022 peuvent être concernées.

![Toujours verrouiller le câble](/img/konfiguration-inbetriebnahme-pico-konfiguration/19.png)
