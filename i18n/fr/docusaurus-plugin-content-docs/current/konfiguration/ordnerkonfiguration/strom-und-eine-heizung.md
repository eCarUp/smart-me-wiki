---
title: 'Immeuble avec électricité et chaleur / eau'
slug: '/konfiguration/ordnerkonfiguration/strom-und-eine-heizung'
description: 'Configuration sans facturation automatique de l''électricité'
sidebar_label: 'Immeuble avec électricité et chaleur / eau'
---
## Configuration sans facturation automatique de l'électricité

Avantage :

- Pas besoin de saisir les contrats de locataires à double


Inconvénient :

- Pas de facturation automatique pour l'électricité

- Saisie multiple des tarifs d'électricité (par immeuble)


### 3b. Électricité avec ou sans mobilité électrique et multi-énergie avec un seul bâtiment.

Différences possibles : dans les immeubles équipés uniquement de compteurs électriques, sans multi-énergie, la pompe à chaleur peut être attribuée directement aux appartements à l'aide d'une clé de répartition. En multi-énergie, la pompe à chaleur est enregistrée comme sous-compteur (dossier séparé), afin qu'un décompte séparé soit établi, lequel doit ensuite être repris comme facteur de coût dans la configuration VEWA.

3b. Structure de base

![Immeuble avec électricité et chaleur / eau – illustration 1](/img/konfiguration-ordnerkonfiguration-strom-und-eine-heizung/01.png)

### Attribution des compteurs

Attribue les compteurs concernés aux nœuds par glisser-déposer.

Information importante concernant l'attribution :

Électricité / chaleur / eau

N'attribue des points de mesure directement aux unités de décompte que si le destinataire de la facture doit payer plus tard 100 % du soutirage.

Si tu veux n'attribuer un compteur qu'à une partie d'une unité de décompte individuelle, déplace le compteur dans un nœud à l'intérieur du nœud « Compteurs techniques » (Technische Zähler).

Plus tard, un tel compteur peut être réparti au prorata dans le Billing.

Exemples :

- Compteur général

- Compteur de chaleur d'un étage desservant 4 unités de décompte


Bornes de recharge avec smart-me Pico / Zaptec / Easee

N'attribue pas les bornes de recharge directement aux appartements, crée plutôt une unité de décompte distincte pour la borne de recharge. Les changements de locataires s'effectuent ainsi plus facilement.

Bornes de recharge d'autres fabricants

Les bornes de recharge d'autres fabricants ne sont pas gérées ni facturées directement dans smart-me. Dans ce cas, crée un nœud pour le départ de mobilité électrique et attribue le compteur de départ à ce nœud. Tu obtiens ainsi le total des coûts pour toutes les bornes de recharge.



3b. Structure détaillée avec compteurs

![Immeuble avec électricité et chaleur / eau – illustration 2](/img/konfiguration-ordnerkonfiguration-strom-und-eine-heizung/02.png)

### Crée pour terminer les alarmes en cas de panne de connexion.

Tu remarques ainsi à temps la défaillance d'un compteur et tu réduis au minimum la lacune de données de mesure qui en résulte. 

### Étape suivante

[Continuer vers la création des alarmes](/konfiguration/wenndann-aktionen/alarme)

## Configuration avec facturation automatique de l'électricité

Avantage :

- Facturation automatique pour l'électricité

- Pas de double saisie des tarifs d'électricité


Inconvénient :

- Saisie multiple des contrats de locataires


### Comming soon

Disclaimer :

Pour cette configuration, un immeuble supplémentaire uniquement pour l'électricité doit être créé, lequel comprend tous les appartements des trois bâtiments.

Seuls les compteurs électriques sont attribués dans cet immeuble.

### Crée pour terminer les alarmes en cas de panne de connexion.

Tu remarques ainsi à temps la défaillance d'un compteur et tu réduis au minimum la lacune de données de mesure qui en résulte. 

### Étape suivante

[Continuer vers la création des alarmes](/konfiguration/wenndann-aktionen/alarme)
