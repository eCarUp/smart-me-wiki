---
title: 'Planification de l''installation'
slug: '/produkte/pico-ladestation/installationsplanung'
description: 'Pico peut être installée de différentes manières.'
sidebar_label: 'Planification de l''installation'
---
Pico peut être installée de différentes manières. Vous trouverez ici les variantes les plus courantes, avec leurs exigences spécifiques.

![Planification de l'installation – Figure 1](/img/produkte-pico-ladestation-installationsplanung/01_EN.png)

## Consignes générales d'installation

- Chaque Pico dispose d'une détection des défauts de courant continu selon IEC62955. 

- Les bornes de recharge Pico de l'année de construction 2024 ou à partir du numéro de série 7002702 possèdent un RCD de type A intégré conforme à IEC60947\-2.
    \- à partir de 2024 ou du numéro de série 7002702, un RCD de type A en série n'est plus nécessaire
    \- avant 2024 ou le numéro de série 7002702, un RCD de type A en série est nécessaire en amont de chaque borne de recharge pour la conformité NIN.

- Les bornes de recharge Pico peuvent supporter elles-mêmes sans problème des courants de court-circuit de 3kA.
    Si plusieurs bornes de recharge sont raccordées à un même départ, un disjoncteur de protection de ligne doit être utilisé sur le départ.
    Le dispositif de protection de ligne doit être dimensionné selon le pouvoir de coupure en court-circuit du départ.
    Des variantes d'au moins 6kA sont recommandées dans tous les cas.

- Le dispositif de protection de ligne interne de la borne de recharge Pico satisfait aux exigences de IEC 61851-1.

- Convient pour :
    les installations avec câble plat
    les installations avec busbar
    les installations en boucle
    les installations sur socle

- Les départs jusqu'à 80A max. peuvent être raccordés directement sans autre mesure.


## Borne de recharge Pico à partir de l'année de construction 2024 et du numéro de série 7002702

Toutes les bornes de recharge Pico à partir du numéro de série 7002702 disposent en interne d'un RCD de type A selon IEC 60947\-2, combiné à la détection des défauts de courant continu selon IEC62955.

### Installation de Pico sur câble plat ou avec des systèmes busbar

![Planification de l'installation – Figure 2](/img/produkte-pico-ladestation-installationsplanung/02_EN.png)

Remarque : 

Le courant de court-circuit doit uniquement être vérifié sur la plaque de base de la Pico, et non à la sortie / type 2 de l'appareil Pico.

### Installation de Pico en boucle interne ou avec le socle Pico Basic (212070-PL)

![Planification de l'installation – Figure 3](/img/produkte-pico-ladestation-installationsplanung/03_EN.png)

### Installation de Pico avec le socle Pico avec couvercle de service (232070-PL)

![Planification de l'installation – Figure 4](/img/produkte-pico-ladestation-installationsplanung/04_EN.png)

### Protection contre la foudre pour les installations extérieures d'infrastructure de recharge

- Pour les installations sur socle, respectez impérativement aussi la NIN et les réglementations locales concernant les dispositifs de protection contre la foudre pour les installations extérieures d'infrastructure de recharge.
    Chapitre NIN suisse : 5.3.4
    Norme allemande : VDE 0100-534 

- La Pico possède la catégorie de surtension 3 (4kV)

- Pour les installations nécessitant un dispositif de protection contre la foudre SPD type 2, il faut prévoir des socles avec trappes de service. Le dispositif de protection contre la foudre peut y être installé directement.

- La zone d'action d'un SPD type 2 correspond à un rayon d'environ 10m.


Règles générales de protection contre la foudre, état 04.2025 

Pour les bâtiments sans protection extérieure contre la foudre : (p. ex. un dispositif de capture sur le toit)

Pour les appareils de la catégorie de surtension III, une protection par un SPD type 2 est nécessaire afin de ne pas dépasser la tenue aux tensions de choc des appareils.

Pour les bâtiments avec protection extérieure contre la foudre : (p. ex. un dispositif de capture sur le toit)
L'installation nécessite ici une protection contre la foudre SPD type 1 et type 2, faute de quoi le SPD type 2 risque d'être détruit en cas d'impact sur le dispositif de capture.

## Téléchargements

[Schéma de raccordement et schéma de circuit, fichiers ZIP](https://drive.google.com/file/d/1aVOLmWprogy2OizkcyH3kHsHntu0A8-D/view?usp=share_link)

# FAQ

<details id="Pico-Ladestation-vor-BJ-2024-und-Seriennummer-7002702">
<summary>Borne de recharge Pico antérieure à l'année de construction 2024 et au numéro de série 7002702</summary>

- Les bornes de recharge Pico antérieures à l'année de construction 2024 ou au numéro de série 7002702 disposent d'une détection intégrée des défauts de courant continu selon IEC62955.

- Les bornes de recharge Pico antérieures à l'année de construction 2024 ou au numéro de série 7002702 disposent d'une détection des courants de défaut pour courants alternatifs de type A (30mA) fonctionnelle, mais pas conforme à 100%

</details>

<details id="Pico-Installation-Flachbandkabel">
<summary>Installation sur câble plat</summary>

- RCD de type A 40A sans disjoncteur de protection de ligne, en série avec chaque borne de recharge Pico

- Un disjoncteur de protection de ligne sur le départ e-mobilité avec un mode de pose résistant aux courts-circuits (cadre bleu) suffit pour la sélectivité. (Documentation étendue)

![Planification de l'installation – Figure 5](/img/produkte-pico-ladestation-installationsplanung/05.png)

</details>

<details id="Lastschutz-für-Ladestationsgruppenabsicherung-und-Zuleitung-bis-80A-pro-Phase">
<summary>Disjoncteur de protection de ligne pour la protection d'un groupe de bornes de recharge et ligne d'alimentation jusqu'à 80A par phase</summary>

Le disjoncteur de protection de ligne sur le départ pour l'ensemble du groupe de recharge devrait présenter la caractéristique C.
Les dispositifs de protection de ligne usuels de caractéristique B ne conviennent pas aux installations de bornes de recharge et ont tendance à déclencher trop tôt.

Pour un départ e-mobilité de 63A, on recommanderait p. ex. un disjoncteur de protection de ligne 63A, type C, avec un pouvoir de coupure en court-circuit de 6kA ou 10kA.

</details>

<details id="Lastschutz-für-Pico-Ladestationen-mit-Zuleitung-mehr-als-80A-pro-Phase">
<summary>Disjoncteur de protection de ligne pour les bornes de recharge Pico avec ligne d'alimentation de plus de 80A par phase</summary>

Lors de l'installation d'une borne de recharge Pico sur un système busbar à haute énergie ou avec des sections de conducteur >35mm2 et des courants de phase > 80A, un disjoncteur de protection de ligne par borne de recharge est recommandé côté installation.
Le disjoncteur de protection de ligne interne de chaque Pico est limité à 3kA. Avec des lignes d'alimentation à haute énergie, cette capacité peut être insuffisante.
Le pouvoir de coupure en court-circuit du raccordement peut bien entendu aussi être vérifié par une mesure ; s'il se situe en dessous de 3kA, un disjoncteur de protection de ligne supplémentaire n'est pas nécessaire.

Si un disjoncteur de protection de ligne supplémentaire est toutefois nécessaire, un modèle avec un courant de déclenchement de 40A, une caractéristique de déclenchement C et un pouvoir de coupure en court-circuit de 6kA ou 10kA est recommandé.

</details>

<details id="Lastschutz-für-Pico-Ladestationen-mit-Zuleitung-mehr-als-80A-pro-Phase">
<summary>Disjoncteur de protection de ligne pour les bornes de recharge Pico avec ligne d'alimentation de plus de 80A par phase</summary>

Lors de l'installation d'une borne de recharge Pico sur un système busbar à haute énergie ou avec des sections de conducteur >35mm2 et des courants de phase > 80A, un disjoncteur de protection de ligne par borne de recharge est recommandé côté installation.
Le disjoncteur de protection de ligne interne de chaque Pico est limité à 3kA. Avec des lignes d'alimentation à haute énergie, cette capacité peut être insuffisante.
Le pouvoir de coupure en court-circuit du raccordement peut bien entendu aussi être vérifié par une mesure ; s'il se situe en dessous de 3kA, un disjoncteur de protection de ligne supplémentaire n'est pas nécessaire.

Si un disjoncteur de protection de ligne supplémentaire est toutefois nécessaire, un modèle avec un courant de déclenchement de 40A, une caractéristique de déclenchement C et un pouvoir de coupure en court-circuit de 6kA ou 10kA est recommandé.

</details>

## Documentation étendue et remarques spécifiques aux pays

[Suisse : prise de position d'Electrosuisse - Installation de bornes de recharge pour VE, plusieurs bornes de recharge sur une ligne d'alimentation commune](https://drive.google.com/file/d/1aquBK7Gip6DJxagCgB-_kwqEuozjCh07/view)
