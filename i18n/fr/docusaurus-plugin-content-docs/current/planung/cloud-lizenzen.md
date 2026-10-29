---
title: 'Licences cloud'
slug: '/planung/cloud-lizenzen'
description: 'Veuillez noter que le statut Professional du compte n''est atteint que si chaque point de mesure dispose d''une licence équivalente.'
sidebar_label: 'Licences cloud'
symbol: 'lizenz'
---
Veuillez noter que le statut Professional du compte n'est atteint que si chaque point de mesure dispose d'une licence équivalente.

## Les trois niveaux de licence

<Kacheln min="14rem">

<Kachel titel="Basic">

Standard pour les compteurs API, OCPP et M-Bus :

- [M-Bus Gateway](/produkte/m-bus-gateway)

**Étendue**

- Rapports : exportation CSV manuelle
- 1 valeur de mesure toutes les 15 minutes (API)
- API : uniquement pour un usage privé et le pilotage \*\*

</Kachel>

<Kachel titel="Limited">

Standard pour :

- [Compteur monophasé](/produkte/1-phasen-zaehler-80a)
- [Compteur triphasé Telstar](/produkte/telstar-80a)
- [Compteur triphasé Telstar CT](/produkte/telstar-ct)
- [Module Kamstrup](/produkte/kamstrup-modul) (abandonné)
- [Borne de recharge Pico](/produkte/pico-ladestation)

**Étendue**

- [Actions si/alors](/konfiguration/wenndann-aktionen) (sans régulation Pico)
- Rapports
- Profils de charge
- Gestion étendue des dossiers et des compteurs
- [Liens publics](/konfiguration/visualisierung)
- 1 valeur de mesure par minute (API)
- API : uniquement pour un usage privé et le pilotage \*\*

</Kachel>

<Kachel titel="Professional *">

Extension possible pour tous les points de mesure dans le cloud smart-me.

**Étendue : tout ce que comprend Limited, plus**

- [Billing](/konfiguration/billing)
- [Compteurs virtuels](/konfiguration/virtuelle-zaehler)
- [Auto Export](/schnittstellen/auto-export)
- [Configuration des utilisateurs](/konfiguration/benutzerkonfiguration)
- [Gestion de la charge dynamique Pico](/produkte/pico-ladestation/pico-lastmanagement)
- Si/alors → régulation Pico
- oAuth
- [Modbus TCP](/schnittstellen/modbus-tcp)
- [Santé du système](/stoerungsbehebung/systemgesundheit)
- 1 valeur de mesure par seconde (API)
- API : pour un usage privé **et commercial**

</Kachel>

</Kacheln>

\*Le niveau d'abonnement correspondant n'est atteint que si chaque point de comptage du compte dispose du même niveau de licence.

\*\* Une utilisation commerciale de l'API nécessite toujours le niveau d'abonnement Professional.

Professional = tous les compteurs du compte disposent d'une licence Professional.

Le compteur ayant le niveau d'abonnement le plus bas du compte détermine le niveau d'abonnement global du compte.

Les comptes mixtes ne sont pas possibles et restent au statut Basic ou Limited si le nombre de licences est insuffisant.

## Calculer le nombre correct de licences Professional

Pour que votre compte obtienne le statut Professional, vous avez besoin d'au moins une licence Professional pour chaque compteur (y compris les compteurs virtuels) du compte.

Il n'est pas possible de mélanger des compteurs sous licence et des compteurs sans licence dans un même compte.

Règle empirique pour les RCP (regroupements dans le cadre de la consommation propre) et vRCP avec un tarif solaire et / ou batterie uniforme :

RCP avec 1x installation PV : nombre de compteurs = nombre de licences
RCP avec \>1x installation PV (visualisations) : nombre de compteurs + 1 (virtuel)

Règle empirique pour les systèmes RCP avec tarifs solaire et batterie séparés (uniquement pour les systèmes couplés AC) :

RCP avec 1x installation PV : nombre de compteurs + 1 (virtuel)

RCP avec >1x installation PV : nombre de compteurs + 2 (virtuels)

### Exemple électricité avec compteurs smart-me (1x PV)

3x Telstar 80A
2x Telstar CT

Total Professional tous types d'énergie : 5 unités

### Exemple électricité avec compteurs smart-me + chaleur / eau avec M-Bus Gateway (1x PV)

3x Telstar 80A
2x Telstar CT

Licences Professional tous types d'énergie : 5 unités

1x M-Bus Gateway avec compteurs de chaleur / d'eau connectés

3x chaleur
3x froid
3x compteurs d'eau chaude sanitaire
3x compteurs d'eau froide

Licences Professional pour chaleur / eau / gaz : 12 unités

Total licences Professional : 17 unités

Remarque : le M-Bus Gateway lui-même ne nécessite pas de licence.

## Couverture des licences

L'installation décrite ci-dessus avec différents agents énergétiques peut désormais être couverte par des licences de deux manières.

### Abonnement mensuel

L'installation nécessite 18 licences Professional.

Celles-ci peuvent être achetées pour un montant mensuel et couvrent à tout moment tous les types d'énergie.

- 18x licence Professional mensuelle tous types d'énergie


L'abonnement mensuel est soumis aux effets de l'inflation et de la déflation.

### Modèle de licence pluriannuelle

L'installation nécessite au total 18 licences Professional.

- 6x licence Professional tous types d'énergie, 10 ans (électricité + compteurs virtuels)

- 12x licence Professional chaleur / eau / gaz, 10 ans


Les licences pluriannuelles sont en moyenne plus avantageuses et ne sont soumises à aucun effet d'inflation ou de déflation pendant la durée d'utilisation.

## Êtes-vous un client « Professional » ?

Les illustrations ci-dessous vous permettent de déterminer facilement si vous avez besoin de licences Professional dans votre compte. 

### Décompte RCP

Pour le décompte RCP, il est déterminant de savoir quel système tarifaire doit être représenté et si le décompte doit être automatisé.

<div className="bild--voll">

![Licences cloud – illustration 1](/img/planung-cloud-lizenzen/01.png)

</div>

### Pilotage RCP

<div className="bild--voll">

![Licences cloud – illustration 2](/img/planung-cloud-lizenzen/02.png)

</div>
