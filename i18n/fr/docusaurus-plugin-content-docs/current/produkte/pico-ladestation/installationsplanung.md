---
title: 'Planification de l''installation'
slug: '/produkte/pico-ladestation/installationsplanung'
description: 'Pico peut être installée de différentes manières.'
sidebar_label: 'Planification de l''installation'
---
Pico peut être installée de différentes manières. Tu trouveras ici la description des variantes les plus courantes, avec leurs exigences spécifiques.

![Planification de l'installation – Figure 1](/img/produkte-pico-ladestation-installationsplanung/01.png)

## Consignes générales d'installation

- Chaque Pico dispose d'une détection des défauts à courant continu selon IEC62955. 

- Les bornes de recharge Pico de l'année de construction 2024 ou à partir du numéro de série 7002702 possèdent un RCD Typ A conforme intégré selon IEC60947\-2.
    \- à partir de 2024 ou du numéro de série 7002702, aucun RCD Typ A en série n'est plus nécessaire
    \- avant 2024 ou le numéro de série 7002702, un RCD Typ A en série en amont de chaque borne de recharge est nécessaire pour la conformité NIN.

- Les bornes de recharge Pico peuvent gérer sans problème des courants de court-circuit de 3kA par elles-mêmes.
    Si plusieurs bornes de recharge sont raccordées à un même départ, un disjoncteur de protection de ligne doit être utilisé sur le départ.
    Le dispositif de protection contre les surcharges doit être dimensionné en fonction du pouvoir de coupure du départ.
    Des variantes d'au moins 6kA sont recommandées dans tous les cas.

- Le dispositif de protection contre les surcharges interne de la borne de recharge Pico répond aux exigences de la norme IEC 61851-1.

- Convient pour :
    installations avec câble plat
    installations avec système de busbar
    installations en boucle
    installations sur socle

- Les départs jusqu'à 80A max. peuvent être raccordés directement sans autre mesure.


## Borne de recharge Pico à partir de l'année de construction 2024 et du numéro de série 7002702

Toutes les bornes de recharge Pico à partir du numéro de série 7002702 disposent en interne d'un RCD Typ A selon IEC 60947\-2, en combinaison avec la détection des défauts à courant continu selon IEC62955.

### Installation Pico sur câble plat ou avec systèmes de busbar

![Planification de l'installation – Figure 2](/img/produkte-pico-ladestation-installationsplanung/02.png)

Remarque : 

Le courant de court-circuit doit uniquement être vérifié au niveau de la plaque de base Pico, et non à la sortie / Type 2 de l'appareil Pico.

### Installation Pico en boucle interne ou avec socle Pico Basic (212070-PL)

![Planification de l'installation – Figure 3](/img/produkte-pico-ladestation-installationsplanung/03.png)

### Installation Pico avec socle Pico à couvercle de service (232070-PL)

![Planification de l'installation – Figure 4](/img/produkte-pico-ladestation-installationsplanung/04.png)

### Protection contre la foudre pour les installations extérieures d'infrastructure de recharge

- Pour les installations sur socle, respecte impérativement aussi la NIN et les réglementations locales concernant les dispositifs de protection contre la foudre pour les installations extérieures d'infrastructure de recharge.
    Chapitre NIN suisse : 5.3.4
    Norme allemande : VDE 0100-534 

- La Pico possède la catégorie de surtension 3 (4kV)

- Pour les installations nécessitant un dispositif de protection contre la foudre SPD Typ2, il faut prévoir des socles avec trappe de service. Le dispositif de protection contre la foudre peut y être installé directement.

- La zone d'action d'un SPD Typ 2 correspond à un rayon d'environ 10m.


Règles générales de protection contre la foudre, état 04.2025 

Pour les bâtiments sans protection extérieure contre la foudre : (p. ex. un dispositif de capture sur le toit)

Pour les appareils de la catégorie de surtension III, une protection par un SPD Typ 2 est nécessaire afin de ne pas dépasser la tenue aux chocs de tension des appareils.

Pour les bâtiments avec protection extérieure contre la foudre : (p. ex. un dispositif de capture sur le toit)
L'installation nécessite ici une protection contre la foudre SPD Typ 1 et une protection Typ 2, sinon il y a un risque qu'en cas de coup de foudre dans le dispositif de capture, le SPD Typ 2 soit détruit.

## Téléchargements

[Schéma de raccordement et schéma des circuits, fichiers ZIP](https://drive.google.com/file/d/1aVOLmWprogy2OizkcyH3kHsHntu0A8-D/view?usp=share_link)

## Borne de recharge Pico avant l'année de construction 2024 et le numéro de série 7002702

- Les bornes de recharge Pico antérieures à l'année de construction 2024 ou au numéro de série 7002702 disposent d'une détection intégrée des défauts à courant continu selon IEC62955.

- Les bornes de recharge Pico antérieures à l'année de construction 2024 ou au numéro de série 7002702 disposent d'une détection des courants de défaut alternatifs Typ A (30mA) fonctionnelle, mais pas conforme à 100%


### Installation sur câble plat

- RCD Typ A 40A sans disjoncteur de protection de ligne, en série avec chaque borne de recharge Pico

- Un disjoncteur de protection contre les surcharges sur le départ d'électromobilité avec un mode de pose protégé contre les courts-circuits (boîtier bleu) suffit pour assurer la sélectivité. (Documentation complémentaire)


![Planification de l'installation – Figure 5](/img/produkte-pico-ladestation-installationsplanung/05.png)

## Protection contre les surcharges pour la protection de groupe des bornes de recharge et l'alimentation jusqu'à 80A par phase

La protection contre les surcharges sur le départ pour l'ensemble du groupe de recharge devrait présenter la caractéristique C.
Les dispositifs de protection contre les surcharges usuels de caractéristique B ne conviennent pas aux installations de bornes de recharge et ont tendance à déclencher trop tôt.

Pour un départ d'électromobilité de 63A, il serait par exemple recommandé d'utiliser une protection contre les surcharges de 63A, Typ C avec un pouvoir de coupure de 6kA ou 10kA.

## Protection contre les surcharges pour bornes de recharge Pico avec alimentation supérieure à 80A par phase

Lors de l'installation d'une borne de recharge Pico sur un système de busbar à forte énergie ou avec des sections de conducteur >35mm2 et des courants de phase > 80A, une protection contre les surcharges par borne de recharge est recommandée côté installation.
La protection contre les surcharges interne de chaque Pico est limitée à 3kA. Avec des alimentations à forte énergie, cette capacité peut être dimensionnée trop faiblement.
Le pouvoir de coupure du raccordement peut naturellement aussi être vérifié par mesure ; s'il s'avère inférieur à 3kA, une protection contre les surcharges supplémentaire n'est pas nécessaire.

Si une protection contre les surcharges supplémentaire est toutefois nécessaire, il est recommandé d'utiliser un modèle avec un courant de déclenchement de 40A, une caractéristique de déclenchement C et un pouvoir de coupure de 6kA ou 10kA.

## Documentation complémentaire et informations spécifiques aux pays

[Suisse : prise de position d'Electrosuisse – installation de bornes de recharge pour véhicules électriques, plusieurs bornes de recharge sur une ligne d'alimentation commune](https://drive.google.com/file/d/1aquBK7Gip6DJxagCgB-_kwqEuozjCh07/view)
