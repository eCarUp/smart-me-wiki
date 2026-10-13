---
title: 'Bien immobilier avec électricité uniquement'
slug: '/konfiguration/ordnerkonfiguration/nur-strom'
description: 'Électricité uniquement, avec ou sans électromobilité, dans des bâtiments individuels ou des lotissements'
sidebar_label: 'Bien immobilier avec électricité uniquement'
---
### Électricité uniquement, avec ou sans électromobilité, dans des bâtiments individuels ou des lotissements

Concerne les RCP (regroupement dans le cadre de la consommation propre) avec compteurs d'électricité et, en option, bornes de recharge.

Structure des dossiers pour smart-me Billing Électricité

Structure des dossiers : deux niveaux sont obligatoires.

C'est à ce niveau que le décompte est configuré. Il comprend tous les appartements, locaux et places de parc sous forme de sous-dossiers, avec leurs compteurs d'électricité respectifs.

- 1 dossier pour le bien immobilier (p. ex. Altgasse RCP)

    - 1 sous-dossier par unité de décompte, c'est-à-dire par appartement ou par destinataire de la facture. Notre proposition pour le nom des dossiers


Nommer les unités de décompte (conseils) :

- -   RCP avec un seul bâtiment : désignation de l'appartement (p. ex. APP étage gauche, APP étage, droite, etc....)

    - RCP avec plusieurs bâtiments :  désignation du bâtiment, puis de l'appartement (p. ex. Altgasse 13 APP étage gauche, Altgasse13 APP étage, droite, etc....)


3a. Structure de base

![Bien immobilier avec électricité uniquement – Illustration 1](/img/konfiguration-ordnerkonfiguration-nur-strom/01.png)

### Attribution des compteurs

Attribuez les compteurs concernés aux nœuds par glisser-déposer.

Information importante sur l'attribution :

Électricité / chaleur / eau

N'attribuez des points de comptage directement aux unités de décompte que si le destinataire de la facture doit ensuite payer 100% du soutirage.

Si vous ne voulez attribuer un compteur qu'en partie à une unité de décompte individuelle, déplacez le compteur dans un nœud situé à l'intérieur du nœud « Compteurs techniques » (Technischen Zähler).

Un tel compteur peut ensuite être réparti en pourcentage dans Billing.

Exemples :

- Compteur des parties communes

- Compteur de chaleur d'un étage qui dessert 4 unités de décompte


Bornes de recharge smart-me Pico / Zaptec / Easee

N'attribuez pas les bornes de recharge directement aux appartements, créez plutôt une unité de décompte séparée pour la borne de recharge. Les changements de locataire sont ainsi plus simples à gérer.

Bornes de recharge d'autres fabricants

Les bornes de recharge d'autres fabricants ne sont pas gérées ni décomptées directement dans smart-me. Dans ce cas, créez un nœud pour le départ électromobilité comme unité de décompte et attribuez-lui le compteur de départ. Vous obtenez ainsi la consommation totale de toutes les bornes de recharge.



3a. Structure détaillée avec compteurs

![Bien immobilier avec électricité uniquement – Illustration 2](/img/konfiguration-ordnerkonfiguration-nur-strom/02.png)

### Pour terminer, créez les alarmes en cas de perte de connexion.

Vous remarquez ainsi rapidement la défaillance d'un compteur et réduisez la lacune dans les données de mesure qui en résulte. 

### Étape suivante

[Passer à la création des alarmes](/konfiguration/wenndann-aktionen/alarme)
