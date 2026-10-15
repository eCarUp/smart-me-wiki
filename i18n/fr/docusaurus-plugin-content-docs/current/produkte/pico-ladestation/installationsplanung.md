---
title: 'Planification de l''installation'
slug: '/produkte/pico-ladestation/installationsplanung'
description: 'Pico peut être installée de différentes manières.'
sidebar_label: 'Planification de l''installation'
---
Pico peut être installée de différentes manières. Vous trouverez ici les variantes les plus courantes, avec leurs exigences spécifiques.

![Planification de l'installation – Figure 1](/img/produkte-pico-ladestation-installationsplanung/01.png)

## Consignes générales d'installation

- Chaque Pico dispose d'une détection des courants de défaut continus selon IEC62955. 

- Les bornes de recharge Pico de l'année de construction 2024 ou à partir du numéro de série 7002702 disposent d'un RCD Typ-A intégré et conforme selon IEC60947\-2.
    \- à partir de 2024 ou du numéro de série 7002702, un RCD Typ-A en série n'est plus nécessaire
    \- avant 2024 ou avant le numéro de série 7002702, un RCD Typ-A en série est nécessaire en amont de chaque borne de recharge pour la conformité NIBT.

- Les bornes de recharge Pico supportent elles-mêmes sans problème des courants de court-circuit de 3kA.
    Si plusieurs bornes de recharge sont raccordées à un même départ, un disjoncteur de ligne doit être utilisé sur ce départ.
    Le dispositif de protection doit être dimensionné en fonction du pouvoir de coupure en court-circuit du départ.
    Dans tous les cas, des variantes d'au moins 6kA sont recommandées.

- Le dispositif de protection interne de la borne de recharge Pico répond aux exigences de la norme IEC 61851-1.

- Convient pour :
    les installations avec câble plat
    les installations avec busbar
    les installations en boucle
    les installations sur socle

- Les départs jusqu'à 80A max. peuvent être raccordés directement sans autre mesure.


## Borne de recharge Pico à partir de l'année de construction 2024 et du numéro de série 7002702

Toutes les bornes de recharge Pico à partir du numéro de série 7002702 disposent en interne d'un RCD Typ-A selon IEC 60947\-2, combiné à la détection des courants de défaut continus selon IEC62955.

### Installation de Pico sur câble plat ou avec des systèmes busbar

![Planification de l'installation – Figure 2](/img/produkte-pico-ladestation-installationsplanung/02.png)

Remarque : 

Le courant de court-circuit doit uniquement être vérifié au niveau de la plaque de base de Pico, et non à la sortie / Type 2 de l'appareil Pico.

### Installation de Pico en boucle interne ou avec le socle Pico Basic (212070-PL)

![Planification de l'installation – Figure 3](/img/produkte-pico-ladestation-installationsplanung/03.png)

### Installation de Pico avec le socle Pico avec couvercle de service (232070-PL)

![Planification de l'installation – Figure 4](/img/produkte-pico-ladestation-installationsplanung/04.png)

### Protection contre la foudre pour les installations extérieures d'infrastructure de recharge

- Pour les installations sur socle, respectez impérativement la NIBT ainsi que les réglementations locales relatives aux dispositifs de protection contre la foudre pour les installations extérieures d'infrastructure de recharge.
    Chapitre de la NIBT suisse : 5.3.4
    Norme allemande : VDE 0100-534 

- Pico appartient à la catégorie de surtension 3 (4kV)

- Pour les installations nécessitant un dispositif de protection contre la foudre SPD Type 2, il faut prévoir des socles avec trappe de service. Le dispositif de protection contre la foudre peut y être installé directement.

- La zone d'efficacité d'un SPD Type-2 correspond à un rayon d'environ 10m.


Règles générales de protection contre la foudre, état 04.2025 

Pour les bâtiments sans protection extérieure contre la foudre : (p. ex. un dispositif de capture sur le toit)

Pour les appareils de la catégorie de surtension III, une protection par un SPD Type 2 est nécessaire afin de ne pas dépasser la tension de tenue aux chocs des appareils.

Pour les bâtiments avec protection extérieure contre la foudre : (p. ex. un dispositif de capture sur le toit)
L'installation nécessite ici une protection contre la foudre SPD Type-1 et Type-2, faute de quoi le SPD Type-2 risque d'être détruit en cas d'impact sur le dispositif de capture.

## Téléchargements

[Schéma de raccordement et schéma électrique, fichiers ZIP](https://drive.google.com/file/d/1aVOLmWprogy2OizkcyH3kHsHntu0A8-D/view?usp=share_link)

# FAQ

<details id="Pico-Ladestation-vor-BJ-2024-und-Seriennummer-7002702">
<summary>Borne de recharge Pico avant l'année de construction 2024 et le numéro de série 7002702</summary>

- Les bornes de recharge Pico antérieures à l'année de construction 2024 ou au numéro de série 7002702 disposent d'une détection intégrée des courants de défaut continus selon IEC62955.

- Les bornes de recharge Pico antérieures à l'année de construction 2024 ou au numéro de série 7002702 disposent d'une détection des courants de défaut alternatifs Type-A (30mA) fonctionnelle, mais pas conforme à 100%

</details>

<details id="Pico-Installation-Flachbandkabel">
<summary>Installation avec câble plat</summary>

- RCD Typ-A 40A sans disjoncteur de ligne, en série avec chaque borne de recharge Pico

- Un disjoncteur sur le départ e-mobilité avec un mode de pose résistant aux courts-circuits (encadré bleu) suffit pour la sélectivité. (Documentation complémentaire)

![Planification de l'installation – Figure 5](/img/produkte-pico-ladestation-installationsplanung/05.png)

</details>

<details id="Lastschutz-für-Ladestationsgruppenabsicherung-und-Zuleitung-bis-80A-pro-Phase">
<summary>Protection pour la protection d'un groupe de bornes de recharge et ligne d'alimentation jusqu'à 80A par phase</summary>

La protection sur le départ pour l'ensemble du groupe de recharge devrait présenter la caractéristique C.
Les dispositifs de protection usuels de caractéristique B ne conviennent pas aux installations de bornes de recharge et ont tendance à déclencher trop tôt.

Pour un départ e-mobilité de 63A, il serait par exemple recommandé d'utiliser une protection de 63A, type C, avec un pouvoir de coupure en court-circuit de 6kA ou 10kA.

</details>

<details id="Lastschutz-für-Pico-Ladestationen-mit-Zuleitung-mehr-als-80A-pro-Phase">
<summary>Protection pour les bornes de recharge Pico avec ligne d'alimentation de plus de 80A par phase</summary>

Lors de l'installation d'une borne de recharge Pico sur un système busbar à haute énergie ou avec des sections de conducteur >35mm2 et des courants de phase > 80A, une protection par borne de recharge est recommandée côté installation.
La protection interne de chaque Pico est limitée à 3kA. Pour des lignes d'alimentation à haute énergie, cette capacité peut être insuffisante.
Bien entendu, le pouvoir de coupure en court-circuit du raccordement peut aussi être vérifié par une mesure ; s'il est inférieur à 3kA, une protection supplémentaire n'est pas nécessaire.

Si une protection supplémentaire est toutefois nécessaire, il est recommandé d'utiliser un modèle de protection avec un courant de déclenchement de 40A, une caractéristique de déclenchement C et un pouvoir de coupure en court-circuit de 6kA ou 10kA.

</details>

<details id="Lastschutz-für-Pico-Ladestationen-mit-Zuleitung-mehr-als-80A-pro-Phase">
<summary>Protection pour les bornes de recharge Pico avec ligne d'alimentation de plus de 80A par phase</summary>

Lors de l'installation d'une borne de recharge Pico sur un système busbar à haute énergie ou avec des sections de conducteur >35mm2 et des courants de phase > 80A, une protection par borne de recharge est recommandée côté installation.
La protection interne de chaque Pico est limitée à 3kA. Pour des lignes d'alimentation à haute énergie, cette capacité peut être insuffisante.
Bien entendu, le pouvoir de coupure en court-circuit du raccordement peut aussi être vérifié par une mesure ; s'il est inférieur à 3kA, une protection supplémentaire n'est pas nécessaire.

Si une protection supplémentaire est toutefois nécessaire, il est recommandé d'utiliser un modèle de protection avec un courant de déclenchement de 40A, une caractéristique de déclenchement C et un pouvoir de coupure en court-circuit de 6kA ou 10kA.

</details>

## Documentation complémentaire et remarques spécifiques au pays

[Suisse : prise de position d'Electrosuisse - Installation de bornes de recharge pour VE, plusieurs bornes de recharge sur une ligne d'alimentation commune](https://drive.google.com/file/d/1aquBK7Gip6DJxagCgB-_kwqEuozjCh07/view)
