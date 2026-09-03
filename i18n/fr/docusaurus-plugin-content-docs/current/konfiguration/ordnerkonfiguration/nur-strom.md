---
title: 'Bien immobilier avec électricité uniquement'
slug: '/konfiguration/ordnerkonfiguration/nur-strom'
description: 'Électricité uniquement, avec ou sans électromobilité, dans des bâtiments individuels ou des complexes immobiliers'
sidebar_label: 'Bien immobilier avec électricité uniquement'
---
### Électricité uniquement, avec ou sans électromobilité, dans des bâtiments individuels ou des complexes immobiliers

Pertinent pour les RCP (regroupement dans le cadre de la consommation propre) avec compteur électrique et, en option, des bornes de recharge.

Structure des dossiers pour smart-me Billing Électricité

Structure des dossiers : la hiérarchie à deux niveaux est obligatoire.

C'est ici qu'un décompte est configuré ; il comprend tous les appartements, locaux et places de parc en tant que dossiers subordonnés, ainsi que leurs compteurs électriques pertinents

- 1 dossier pour le bien immobilier (p. ex. Altgasse RCP)

    - 1 sous-dossier par unité de décompte, c'est-à-dire par appartement ou par destinataire de la facture. Notre proposition pour la désignation des dossiers


Désignation des unités de décompte (conseils) :

- -   RCP avec un seul bâtiment : désignation de l'appartement (p. ex. APP étage sup. gauche, APP étage sup. droite, etc....)

    - RCP avec plusieurs bâtiments : désignation du bâtiment et désignation de l'appartement (p. ex. Altgasse 13 APP étage sup. gauche, Altgasse13 APP étage sup. droite, etc....)


3a. Structure de base

![Bien immobilier avec électricité uniquement – illustration 1](/img/konfiguration-ordnerkonfiguration-nur-strom/01.png)

### Attribution des compteurs

Attribue les compteurs pertinents aux nœuds par glisser-déposer.

Information importante concernant l'attribution :

Électricité / chaleur / eau

N'attribue des points de mesure directement aux unités de décompte que si le destinataire de la facture doit payer plus tard 100 % du soutirage.

Si tu souhaites n'attribuer un compteur qu'à une partie d'une unité de décompte individuelle, déplace le compteur dans un nœud à l'intérieur du nœud « Compteurs techniques » (Technische Zähler).

Plus tard, un tel compteur peut être réparti au prorata dans le Billing.

Exemples :

- Compteur des parties communes

- Compteur de chaleur d'un étage desservant 4 unités de décompte


Bornes de recharge avec smart-me Pico / Zaptec / Easee

N'attribue pas les bornes de recharge directement aux appartements ; crée plutôt une unité de décompte séparée pour la borne de recharge. Les changements de locataire s'effectuent ainsi plus facilement.

Bornes de recharge d'autres fabricants

Les bornes de recharge d'autres fabricants ne sont pas gérées ni facturées directement dans smart-me. Dans ce cas, crée un nœud pour le départ d'électromobilité en tant qu'unité de décompte et attribue le compteur de départ à ce nœud. Tu obtiens ainsi le coût total pour toutes les bornes de recharge.



3a. Structure détaillée avec compteurs

![Bien immobilier avec électricité uniquement – illustration 2](/img/konfiguration-ordnerkonfiguration-nur-strom/02.png)

### Crée pour finir les alarmes en cas de perte de connexion.

Tu remarques ainsi à temps la défaillance d'un compteur et tu réduis au minimum la lacune de données de mesure qui en résulte. 

### Étape suivante

[Continuer vers la création des alarmes](/konfiguration/wenndann-aktionen/alarme)
