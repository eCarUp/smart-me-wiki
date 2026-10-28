---
title: 'Immeuble avec électricité uniquement'
slug: '/konfiguration/ordnerkonfiguration/nur-strom'
description: 'Électricité uniquement, avec ou sans électromobilité, dans des bâtiments individuels ou des lotissements'
sidebar_label: 'Immeuble avec électricité uniquement'
naechste_schritte: [konfiguration/wenndann-aktionen/alarme]
---
<Menueweg>Configuration du compteur et du dossier</Menueweg>

### Électricité uniquement, avec ou sans électromobilité, dans des bâtiments individuels ou des lotissements

Pertinent pour les RCP (regroupement dans le cadre de la consommation propre) avec compteurs d'électricité et, en option, bornes de recharge.

Structure des dossiers pour le smart-me Billing électricité

Structure des dossiers : deux niveaux sont obligatoires.

C'est à cet endroit que le décompte est configuré ; il comprend tous les appartements, locaux et places de stationnement en tant que sous-dossiers, ainsi que les compteurs d'électricité correspondants.

- 1 dossier pour l'immeuble (p. ex. Altgasse RCP)

    - 1 sous-dossier par unité de décompte, c'est-à-dire par appartement ou par destinataire de facture. Notre proposition pour la désignation des dossiers


Désignation des unités de décompte (conseils) :

- -   RCP avec un seul bâtiment : désignation de l'appartement (p. ex. APP étage gauche, APP étage droite, etc....)

    - RCP avec plusieurs bâtiments :  désignation du bâtiment et désignation de l'appartement (p. ex. Altgasse 13 APP étage gauche, Altgasse13 APP étage droite, etc....)


3a. Structure de base

![Immeuble avec électricité uniquement – Figure 1](/img/konfiguration-ordnerkonfiguration-nur-strom/01.png)

### Attribution des compteurs

Attribuez les compteurs concernés aux nœuds par glisser-déposer.

Information importante concernant l'attribution :

Électricité / chaleur / eau

N'attribuez des points de mesure directement aux unités de décompte que si le destinataire de la facture doit ensuite payer 100% du soutirage.

Si vous souhaitez attribuer un compteur seulement en partie à une unité de décompte individuelle, déplacez le compteur dans un nœud à l'intérieur du nœud « Compteurs techniques » (Technische Zähler).

Un tel compteur peut ensuite être réparti en pourcentage dans le Billing.

Exemples :

- Compteur des parties communes

- Compteur de chaleur d'un étage qui dessert 4 unités de décompte


Bornes de recharge avec smart-me Pico / Zaptec / Easee

N'attribuez pas les bornes de recharge directement aux appartements ; créez plutôt une unité de décompte séparée pour la borne de recharge. Les changements de locataire sont ainsi plus simples à effectuer.

Bornes de recharge d'autres fabricants

Les bornes de recharge d'autres fabricants ne sont pas gérées ni décomptées directement dans smart-me. Dans ce cas, créez un nœud pour le départ électromobilité en tant qu'unité de décompte et attribuez-lui le compteur de départ. Vous obtenez ainsi la consommation totale de toutes les bornes de recharge.



3a. Structure détaillée avec compteurs

![Immeuble avec électricité uniquement – Figure 2](/img/konfiguration-ordnerkonfiguration-nur-strom/02.png)

### Pour terminer, créez les alarmes en cas de perte de connexion.

Vous remarquerez ainsi rapidement la défaillance d'un compteur et réduirez au minimum la lacune de données de mesure qui en résulte.
