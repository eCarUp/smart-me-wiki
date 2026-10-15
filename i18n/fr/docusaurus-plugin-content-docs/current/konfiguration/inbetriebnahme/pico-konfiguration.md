---
title: 'Configuration Pico'
slug: '/konfiguration/inbetriebnahme/pico-konfiguration'
description: 'Cette page présente les principales configurations relatives au matériel Pico.'
sidebar_label: 'Configuration Pico'
---
Cette page présente les principales configurations relatives au matériel Pico. La configuration de la borne de recharge Pico s'effectue toujours, dans un premier temps, via la plateforme smart-me. Ensuite, la méthode d'authentification peut être activée via un système backend (eCarUp).

![Configuration Pico – Figure 1](/img/konfiguration-inbetriebnahme-pico-konfiguration/01.png)

![Configuration Pico – Figure 2](/img/konfiguration-inbetriebnahme-pico-konfiguration/02.png)

## Authentification (privée, semi-publique, publique)



La borne de recharge Pico peut être utilisée au choix avec ou sans méthode d'authentification.



### Configuration None :

Aucune authentification n'est nécessaire pour recharger. (la recharge démarre dès que le véhicule est branché)



### Configuration avec backend eCarUp :

Pour exploiter une Pico de manière publique / semi-publique ou pour utiliser toute forme de fonction de déverrouillage, la borne doit être exploitée en mode backend via eCarUp.

Fonctions de déverrouillage :

- RFID

- Activation / désactivation manuelle (On / Off) via l'app

- Codes QR

- CarID (nécessite une activation dans les paramètres avancés du portail smart-me)




Dès que « Backend eCarUp » (“eCarUp Backend”) est sélectionné, la borne est automatiquement ajoutée au compte eCarUp du même nom. (mêmes nom d'utilisateur et mot de passe que pour smart-me)

La configuration d'eCarUp s'effectue dans le portail web [www.ecarup.com](http://www.ecarup.com).

Sous Conducteurs (Fahrer), ajoutez un badge RFID ou enregistrez un « badge » (« Karten-Tag ») à l'aide de l'app eCarUp pour Android et iOS.

Vous trouverez des informations détaillées sur la configuration d'eCarUp et des bornes de recharge publiques dans le
wiki eCarUp : [https://ecarupwiki.smart-me.com](https://ecarupwiki.smart-me.com) 



### Configuration avec backend OCPP externe :

Pour intégrer la Pico dans le backend d'un fournisseur tiers, il vous suffit d'enregistrer l'URL du backend de ce fournisseur sur la borne de recharge concernée.

Cette option ne doit pas être utilisée si la borne est connectée via eCarUp.

Remarque :
L'URL commence par ws:// ou wss://

Paramètre Pico dans le portail smart-me :

![Configuration Pico – Figure 3](/img/konfiguration-inbetriebnahme-pico-konfiguration/03.png)

Menu du portail eCarUp :

![Configuration Pico – Figure 4](/img/konfiguration-inbetriebnahme-pico-konfiguration/04.png)

Enregistrer l'URL du backend du fournisseur tiers :

![Configuration Pico – Figure 5](/img/konfiguration-inbetriebnahme-pico-konfiguration/05.png)

### Configuration pour un usage privé avec authentification RFID

1.  Accédez à Bornes → Gestion (Stationen → Verwaltung) dans le portail eCarUp

2.  Modifier → Modifier le raccordement (Bearbeiten → Anschluss bearbeiten)


![Configuration Pico – Figure 6](/img/konfiguration-inbetriebnahme-pico-konfiguration/06.png)



Prix = 0 CHF, Accès : Privé (Privat)

![Configuration Pico – Figure 7](/img/konfiguration-inbetriebnahme-pico-konfiguration/07.png)

### Configuration pour un usage limité avec authentification RFID (locataires avec prix spéciaux)

1.  Accédez à Bornes → Gestion (Stationen → Verwaltung) dans le portail eCarUp

2.  Modifier → Modifier le raccordement (Bearbeiten → Anschluss bearbeiten)


![Configuration Pico – Figure 8](/img/konfiguration-inbetriebnahme-pico-konfiguration/06.png)

3\. Choisir les prix

![Configuration Pico – Figure 9](/img/konfiguration-inbetriebnahme-pico-konfiguration/09.png)

4\. Définir les utilisateurs spéciaux et leurs prix

Les conducteurs créent leur propre compte eCarUp et communiquent le nom de leur compte au propriétaire de la borne.

![Configuration Pico – Figure 10](/img/konfiguration-inbetriebnahme-pico-konfiguration/10.png)

## Personnalisation de l'affichage de la Pico

Nous déconseillons d'utiliser une image de fond noire, car il devient alors impossible de savoir si la Pico fonctionne ou non. En particulier lorsqu'elle est hors ligne, il est difficile de juger à distance si la borne est défectueuse ou simplement pas connectée. C'est pourquoi nous recommandons aux personnes soucieuses de leur consommation d'énergie d'ajouter cette image de 4 pixels, afin de toujours pouvoir reconnaître si la borne fonctionne encore localement. [Pixel Status.gif](https://drive.google.com/uc?export=download&id=1iaQ6ZVWwL5f6gTqEcRyhkmrbaiKq3CNC)

Le nom de la borne et l'affichage en cas de non-utilisation peuvent être librement choisis et personnalisés.

En plus des émoticônes déjà disponibles, vous pouvez également téléverser vos propres GIF ou images. 

- Formats pris en charge : JPG, PNG, GIF

- Résolution : 32x32 pixels

- Taille : max. 200 kB

- L'arrière-plan doit être entièrement noir (#000000)

- Les animations (GIF) ont 10 images/s (100ms par image)


Remarque : Vous obtiendrez le meilleur résultat si vous veillez, lors de la création et de l'édition, à téléverser l'image en 32x32 pixels au format GIF.



\-> Créez vos propres GIF avec [piskelapp](/drittsysteme/piskelapp) 

![Configuration Pico – Figure 11](/img/konfiguration-inbetriebnahme-pico-konfiguration/11.png)

## Gestion de la charge et limitation

### Limiter la puissance de la borne

La borne de recharge Pico peut être standardisée lors de l'installation.

Ce réglage est pris en compte par la gestion de la charge automatique et n'est jamais écrasé.

Le réglage du courant de charge maximal permet de limiter de manière fixe la puissance maximale de la borne. La limitation s'effectue par paliers de 1 ampère.

32A = 22kW de puissance maximale

16A = 11kW de puissance maximale

Le réglage du courant minimal permet d'empêcher des recharges ou de définir des courants minimaux adaptés au démarrage de la recharge d'un véhicule.

Remarque :
Certains véhicules ne peuvent pas être rechargés avec un courant de démarrage de 6A en raison de la technique intégrée au véhicule. Dans ce cas, le courant minimal peut être augmenté.

![Configuration Pico – Figure 12](/img/konfiguration-inbetriebnahme-pico-konfiguration/12.png)

### Gestion de la charge statique (groupe de bornes)

La gestion de la charge statique régule les bornes au sein d'un même groupe de gestion de la charge. Cette fonction empêche le dépassement du courant maximal sur la ligne d'alimentation, p. ex. un câble plat, et régule la répartition du courant disponible entre les bornes. 

La taille des groupes de recharge est limitée à 200 bornes de recharge.

Fonctionnement en détail :
Les bornes de recharge se régulent elles-mêmes sur la base du courant maximal défini. La puissance de charge triphasée est répartie entre toutes les bornes actives jusqu'à ce que la puissance minimale réglée en triphasé ne puisse plus être fournie à tous les véhicules en charge. La puissance est ensuite basculée en monophasé. Tous les véhicules continuent à se recharger en monophasé avec le courant maximal possible par phase (commutation de phases). Une recharge supplémentaire n'est impossible que lorsque tous les véhicules déjà en charge ont atteint le minimum en monophasé. Dès qu'un des véhicules en charge quitte la borne, la charge réservée est libérée pour un autre.

Configuration :

1.  Créer un groupe de gestion de la charge (Nouveau groupe / Neue Gruppe)

2.  Définir le courant maximal de la ligne d'alimentation (Courant disponible / Verfügbarer Strom)

3.  Définir l'action en cas de perte de connexion
    (En combinaison avec la gestion de la charge multiniveau, seule la variante Courant max. par groupe (Max. Strom pro Gruppe) est utilisable)

4.  Ajouter les bornes au groupe de gestion de la charge correspondant (Modifier / Editieren)




Plus de détails : [Gestion de la charge Pico](/produkte/pico-ladestation/pico-lastmanagement)

![Configuration Pico – Figure 13](/img/konfiguration-inbetriebnahme-pico-konfiguration/13.png)

![Configuration Pico – Figure 14](/img/konfiguration-inbetriebnahme-pico-konfiguration/14.png)

### Gestion de la charge dynamique et recharge solaire optimisée avec la gestion de la charge multiniveau (MLM)

La gestion de la charge dynamique permet de prendre en compte un point de référence et de piloter les courants maximaux à ce point de référence. Dans l'électromobilité, on choisit pour cela soit le raccordement du bâtiment, soit le point de distribution.

[Planification de la gestion de la charge](/planung/elektromobilitaet) 

Les produits suivants conviennent comme matériel pour la mesure de référence :

- [Telstar 80A](/produkte/telstar)

- [Telstar CT](/produkte/Telstar-CT)


La configuration de la gestion de la charge dynamique s'effectue via la gestion de la charge multiniveau de smart-me.

Vous trouverez des détails et des exemples ici : [Gestion de la charge multiniveau](/konfiguration/multilevel-lastmanagement)

Vous pouvez ainsi agir sur les courants maximaux des groupes de bornes en tenant compte du courant circulant actuellement à ce point de référence.

![Configuration Pico – Figure 15](/img/konfiguration-inbetriebnahme-pico-konfiguration/15.png)

### Délestage

Délestage matériel (entrées externes de la Pico)

[](https://drive.google.com/open?id=1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY "Ouvrir la feuille de calcul Délestage Pico dans une nouvelle fenêtre")

<Embed src="https://docs.google.com/spreadsheets/d/1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY/htmlembed" height="245px" title="Feuille de calcul, délestage Pico" />

Délestage Pico

Le délestage peut également être réalisé avec un seul signal disponible. 

Pour la configuration de « aucune recharge » à « puissance de charge maximale », le signal est câblé sur IN1 et IN2 ainsi que sur COM. Pour la configuration de « puissance minimale de 6A » à « puissance de charge maximale », le signal doit être câblé uniquement sur IN2 ainsi que sur COM.

COM est le conducteur neutre ; IN1 et IN2 doivent être sous tension lors du signal ON. IN1 et IN2 ne génèrent pas de tension, celle-ci doit être fournie de l'extérieur.

Attention :
Le délestage peut être câblé soit sur toutes les Pico, soit au minimum sur une Pico de chaque groupe de charge statique.
Cette fonction est garantie même sans Internet !

Délestage basé sur le cloud via MLM

Le délestage peut également être réalisé via la gestion de la charge multiniveau. L'avantage est qu'aucun signal ne doit être raccordé au matériel Pico : un signal est appliqué à n'importe quel autre matériel (compteur) et utilisé comme déclencheur.

L'inconvénient est toutefois que la fonction n'est pas exécutée en l'absence de connexion Internet.

Plus de détails sur la configuration : [Gestion de la charge multiniveau](/konfiguration/multilevel-lastmanagement)

![Configuration Pico – Figure 16](/img/konfiguration-inbetriebnahme-pico-konfiguration/16.png)

## Actions avancées

<div className="row">
<div className="col col--6">

En tant que propriétaire de la borne, vous pouvez ici déverrouiller le câble, redémarrer la borne ou afficher le relevé du compteur sur l'écran pour vérification.

</div>
<div className="col col--6 text--center">

![Configuration Pico – Figure 17](/img/konfiguration-inbetriebnahme-pico-konfiguration/17.png)

</div>
</div>

## Paramètres avancés

<div className="row">
<div className="col col--6">

Détection automatique du véhicule (Automatische Auto Erkennung) :
Pour que l'authentification CarID fonctionne, vous devez autoriser la communication de la borne avec le véhicule.

Modbus TCP :
Activation de l'interface Modbus TCP de la Pico

Supprimer la borne (Station löschen) :
Supprime la borne et toutes les données dans le cloud

</div>
<div className="col col--6 text--center">

![Configuration Pico – Figure 18](/img/konfiguration-inbetriebnahme-pico-konfiguration/18.png)

</div>
</div>

### Toujours verrouiller le câble

Le câble de recharge peut être verrouillé sur la borne de recharge Pico.

Procédure :
Brancher le câble --> Se connecter au portail smart-me --> Choisir la Pico --> Cliquer sur la roue dentée en haut à droite --> Paramètres avancés (erweiterte Einstellungen) --> Toujours verrouiller le câble (Kabel immer fest verriegeln). 

Remarque : 

- Le véhicule ne doit pas être branché lors de la fixation du câble.

- Si l'alimentation électrique est interrompue ou si la Pico est redémarrée, le câble est brièvement déverrouillé, puis reverrouillé au démarrage.


Condition préalable : la Pico doit disposer au minimum de la version de communication 0.0.7. Les Pico fabriquées avant le 31.12.2022 peuvent être concernées.

![Toujours verrouiller le câble](/img/konfiguration-inbetriebnahme-pico-konfiguration/19.png)
