---
title: 'Planification de l''installation'
slug: '/produkte/pico-ladestation/installationsplanung'
description: 'Pico peut être installée de différentes manières.'
sidebar_label: 'Planification de l''installation'
---
Pico peut être installée de différentes manières. Vous trouverez ici les variantes les plus courantes, décrites avec leurs exigences spécifiques.

![Planification de l'installation – Illustration 1](/img/produkte-pico-ladestation-installationsplanung/01.png)

## Consignes générales d'installation

- Chaque Pico dispose d'une détection des défauts de courant continu selon IEC62955. 

- Les bornes de recharge Pico de l'année de fabrication 2024 ou à partir du numéro de série 7002702 possèdent un RCD Typ-A intégré et conforme selon IEC60947\-2.
    \- à partir de 2024 ou du numéro de série 7002702, aucun RCD Typ-A en série n'est plus nécessaire
    \- avant 2024 ou le numéro de série 7002702, un RCD Typ-A en série est nécessaire avant chaque borne de recharge pour la conformité NIBT.

- Les bornes de recharge Pico peuvent gérer elles-mêmes sans problème des courants de court-circuit de 3kA.
    Si plusieurs bornes de recharge sont raccordées à un même départ, un disjoncteur de ligne doit être utilisé sur le départ.
    Le dispositif de protection doit être dimensionné en fonction du pouvoir de coupure en court-circuit du départ.
    Des variantes d'au moins 6kA sont recommandées dans tous les cas.

- Le dispositif de protection interne de la borne de recharge Pico satisfait aux exigences de la norme IEC 61851-1.

- Convient pour :
    Installations avec câble plat
    Installations avec busbar
    Installations en repiquage
    Installations sur socle

- Les départs jusqu'à max. 80A peuvent être raccordés directement sans autre.


## Borne de recharge Pico à partir de l'année de fabrication 2024 et du numéro de série 7002702

Toutes les bornes de recharge Pico à partir du numéro de série 7002702 disposent en interne d'un RCD Typ-A selon IEC 60947\-2 combiné à la détection des défauts de courant continu selon IEC62955.

### Installation de Pico sur câble plat ou avec des systèmes busbar

![Planification de l'installation – Illustration 2](/img/produkte-pico-ladestation-installationsplanung/02.png)

Remarque : 

Le courant de court-circuit ne doit être vérifié qu'au niveau de la plaque de base Pico, et non à la sortie / Type 2 de l'appareil Pico.

### Installation de Pico en repiquage interne ou avec le socle Pico Basic (212070-PL)

![Planification de l'installation – Illustration 3](/img/produkte-pico-ladestation-installationsplanung/03.png)

### Installation de Pico avec le socle Pico avec couvercle de service (232070-PL)

![Planification de l'installation – Illustration 4](/img/produkte-pico-ladestation-installationsplanung/04.png)

### Protection contre la foudre pour les installations extérieures d'infrastructure de recharge

- Pour les installations sur socle, respectez impérativement la NIBT et les réglementations locales concernant les dispositifs de protection contre la foudre pour les installations extérieures d'infrastructure de recharge.
    NIBT suisse, chapitre : 5.3.4
    Norme allemande : VDE 0100-534 

- La Pico possède la catégorie de surtension 3 (4kV)

- Pour les installations nécessitant un dispositif de protection contre la foudre SPD de type 2, il faut prévoir des socles avec trappes de service. Le dispositif de protection contre la foudre peut y être installé directement.

- La zone d'efficacité d'un SPD de type 2 correspond à un rayon d'environ 10m.


Règles générales de protection contre la foudre, état 04.2025 

Pour les bâtiments sans protection extérieure contre la foudre : (p. ex. un dispositif de capture sur le toit)

Pour les appareils de la catégorie de surtension III, une protection par un SPD de type 2 est nécessaire afin de ne pas dépasser la tension de tenue aux chocs des appareils.

Pour les bâtiments avec protection extérieure contre la foudre : (p. ex. un dispositif de capture sur le toit)
L'installation nécessite ici une protection contre la foudre SPD de type 1 et de type 2, faute de quoi le SPD de type 2 risque d'être détruit en cas d'impact sur le dispositif de capture.

## Téléchargements

[Schémas de raccordement et schémas électriques, fichiers ZIP](https://drive.google.com/uc?export=download&id=1aVOLmWprogy2OizkcyH3kHsHntu0A8-D)

# FAQ

<details id="Pico-Ladestation-vor-BJ-2024-und-Seriennummer-7002702">
<summary>Borne de recharge Pico avant l'année de fabrication 2024 et le numéro de série 7002702</summary>

- Les bornes de recharge Pico antérieures à l'année de fabrication 2024 ou au numéro de série 7002702 disposent d'une détection intégrée des défauts de courant continu selon IEC62955.

- Les bornes de recharge Pico antérieures à l'année de fabrication 2024 ou au numéro de série 7002702 disposent d'une détection des courants de défaut alternatifs de type A (30mA) fonctionnelle, mais pas conforme à 100%.

</details>

<details id="Pico-Installation-Flachbandkabel">
<summary>Installation sur câble plat</summary>

- RCD Typ-A 40A sans disjoncteur de ligne, en série avec chaque borne de recharge Pico

- Un disjoncteur de protection sur le départ e-mobilité avec un mode de pose résistant aux courts-circuits (encadré bleu) suffit pour la sélectivité. (Documentation complémentaire)

![Planification de l'installation – Illustration 5](/img/produkte-pico-ladestation-installationsplanung/05.png)

</details>

<details id="Lastschutz-für-Ladestationsgruppenabsicherung-und-Zuleitung-bis-80A-pro-Phase">
<summary>Protection pour un groupe de bornes de recharge et une ligne d'alimentation jusqu'à 80A par phase</summary>

La protection sur le départ pour l'ensemble du groupe de recharge devrait présenter la caractéristique C.
Les dispositifs de protection usuels de caractéristique B ne conviennent pas aux installations de bornes de recharge et ont tendance à déclencher trop tôt.

Pour un départ e-mobilité de 63A, il serait p. ex. recommandé d'utiliser une protection de 63A, type C, avec un pouvoir de coupure en court-circuit de 6kA ou 10kA.

</details>

<details id="Lastschutz-für-Pico-Ladestationen-mit-Zuleitung-mehr-als-80A-pro-Phase">
<summary>Protection pour les bornes de recharge Pico avec une ligne d'alimentation de plus de 80A par phase</summary>

Lors de l'installation d'une borne de recharge Pico sur un système busbar à haute énergie ou avec des sections de conducteur >35mm2 et des courants de phase > 80A, une protection par borne de recharge est recommandée côté installation.
La protection interne de chaque Pico est limitée à 3kA. Avec des lignes d'alimentation à haute énergie, cette capacité peut être insuffisante.
En alternative, le pouvoir de coupure en court-circuit du raccordement peut bien entendu être vérifié par une mesure ; s'il se situe en dessous de 3kA, une protection supplémentaire n'est pas nécessaire.

Si une protection supplémentaire est toutefois nécessaire, il est recommandé d'utiliser un modèle avec un courant de déclenchement de 40A, une caractéristique de déclenchement C et un pouvoir de coupure en court-circuit de 6kA ou 10kA.

</details>

<details id="Lastschutz-für-Pico-Ladestationen-mit-Zuleitung-mehr-als-80A-pro-Phase">
<summary>Protection pour les bornes de recharge Pico avec une ligne d'alimentation de plus de 80A par phase</summary>

Lors de l'installation d'une borne de recharge Pico sur un système busbar à haute énergie ou avec des sections de conducteur >35mm2 et des courants de phase > 80A, une protection par borne de recharge est recommandée côté installation.
La protection interne de chaque Pico est limitée à 3kA. Avec des lignes d'alimentation à haute énergie, cette capacité peut être insuffisante.
En alternative, le pouvoir de coupure en court-circuit du raccordement peut bien entendu être vérifié par une mesure ; s'il se situe en dessous de 3kA, une protection supplémentaire n'est pas nécessaire.

Si une protection supplémentaire est toutefois nécessaire, il est recommandé d'utiliser un modèle avec un courant de déclenchement de 40A, une caractéristique de déclenchement C et un pouvoir de coupure en court-circuit de 6kA ou 10kA.

</details>

## Documentation complémentaire et remarques spécifiques au pays

[Suisse : prise de position d'Electrosuisse - Installation de bornes de recharge pour VE, plusieurs bornes de recharge sur une ligne d'alimentation commune](https://drive.google.com/uc?export=download&id=1aquBK7Gip6DJxagCgB-_kwqEuozjCh07)
