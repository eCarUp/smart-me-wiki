---
title: 'Licences Cloud'
slug: '/planung/cloud-lizenzen'
description: 'Notez que le statut Professional du compte n''est atteint que si chaque point de mesure dispose d''une licence équivalente.'
sidebar_label: 'Licences Cloud'
---
Notez que le statut Professional du compte n'est atteint que si chaque point de mesure dispose d'une licence équivalente.

## Basic

Standard pour les compteurs API, OCPP et M-Bus

[M-Bus Gateway](/produkte/m-bus-gateway) 

\---

Rapports : export CSV manuel

1 valeur de mesure toutes les 15 minutes. (API)

API : usage privé et commande uniquement\*\*

## Limited

Standard pour

[Compteur monophasé](/produkte/1-phasen-zaehler) 

[Compteur triphasé Telstar](/produkte/telstar) 

[Compteur triphasé Telstar CT](/produkte/Telstar-CT) 

[Module Kamstrup (arrêté)](/produkte/kamstrup-modul) 

[Borne de recharge Pico](/produkte/pico-ladestation) 

\---

[Actions si/alors](/konfiguration/wenndann-aktionen) 

Rapports

Profils de charge

Gestion étendue des dossiers et des compteurs

[Public Links](/) 

1 valeur de mesure par minute. (API)

API : usage privé et commande uniquement\*\*

## Professional\*

Extension possible pour tous les points de mesure dans le smart-me Cloud

\---

[Billing](/konfiguration/billing) 

[Compteurs virtuels](/konfiguration/billing/virtuelle-zaehler) 

[Auto Export](/schnittstellen/auto-export) 

[Configuration des utilisateurs](/konfiguration/benutzerkonfiguration) 

[Gestion dynamique de la charge Pico](/) 

oAuth

[Actions si/alors](/konfiguration/wenndann-aktionen) 

Rapports

Profils de charge

Gestion étendue des dossiers et des compteurs

[Public Links](/) 

[Modbus TCP](/schnittstellen/modbus-tcp) 

1 valeur de mesure par seconde. (API)

API : pour usage privé et commercial

[Santé du système](/stoerungsbehebung/systemgesundheit)

\*Le niveau d'abonnement concerné n'est atteint que si chaque point de comptage du compte dispose du même niveau de licence.

\*\* Une utilisation commerciale de l'API nécessite toujours le niveau d'abonnement Professional.

Professional = tous les compteurs du compte disposent d'une licence Professional.

Le compteur ayant le niveau d'abonnement le plus bas dans le compte détermine le niveau d'abonnement global du compte. 

Les comptes mixtes ne sont pas possibles et restent au statut Basic ou Limited si le nombre de licences est insuffisant.

## Calcul du nombre correct de licences Professional

Pour que ton compte accède au statut Professional, il te faut au minimum une licence Professional pour chaque compteur (y compris virtuel) du compte.

Il n'est pas possible de mélanger des compteurs licenciés et non licenciés dans un même compte.

Règle empirique pour les RCP et vRCP avec un tarif solaire et / ou batterie uniforme :

RCP avec 1x installation PV : nombre de compteurs = nombre de licences
RCP avec \>1x installation PV (visualisations) : nombre de compteurs + 1 (virtuel)

Règle empirique pour les systèmes RCP avec tarif solaire et batterie séparés (uniquement systèmes couplés en AC) :

RCP avec 1x installation PV : nombre de compteurs + 1 (virtuel)

RCP avec >1x installation PV : nombre de compteurs + 2 (virtuel)

### Exemple électricité avec des compteurs smart-me (1x PV)

3x Telstar 80A
2x Telstar CT

Total Professional tous types d'énergie : 5 pièces

### Exemple électricité avec compteur smart-me + chaleur / eau avec M-Bus Gateway (1x PV)

3x Telstar 80A
2x Telstar CT

Licences Professional tous types d'énergie : 5 pièces

1x M-Bus Gateway avec compteurs de chaleur / d'eau raccordés

3x chaleur
3x froid
3x compteurs d'eau chaude sanitaire
3x compteurs d'eau froide

Licences Professional pour chaleur / eau / gaz : 12 pièces

Total des licences Professional : 17 pièces

Remarque : le M-Bus Gateway lui-même ne nécessite aucune licence.

## Couverture des licences

L'installation décrite ci-dessus avec différents agents énergétiques peut désormais être licenciée de deux manières.

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

## Es-tu un client « Professional » ?

Les illustrations ci-dessous te permettent de déterminer facilement si tu as besoin de licences Professional dans ton compte. 

### Décompte RCP

Pour le décompte RCP, l'élément déterminant est le système tarifaire à représenter et le fait que le décompte doive être automatisé ou non.

![Licences Cloud – illustration 1](/img/planung-cloud-lizenzen/01.png)

### Commande RCP

![Licences Cloud – illustration 2](/img/planung-cloud-lizenzen/02.png)
