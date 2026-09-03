---
title: 'Électricité et plusieurs chauffages'
slug: '/konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen'
description: 'Configuration sans facturation automatique de l''électricité'
sidebar_label: 'Électricité et plusieurs chauffages'
---
## Configuration sans facturation automatique de l'électricité

Avantage :

- Pas besoin de saisir deux fois les contrats des locataires


Inconvénient :

- Pas de facturation automatique pour l'électricité

- Saisie multiple des tarifs d'électricité (par bien immobilier)


### Électricité avec ou sans mobilité électrique et multi-énergie avec plusieurs bâtiments et des chauffages individuels. (Lotissement)

Pertinent pour les RCP (regroupement dans le cadre de la consommation propre) avec compteur d'électricité, compteur multi-énergie, plusieurs bâtiments et, en option, des bornes de recharge.

Dans les sites comportant plusieurs bâtiments et des systèmes de chauffage individuels, il faut créer un bien immobilier par système de chauffage. Si donc trois bâtiments ont des systèmes de chauffage différents, la configuration doit être réalisée selon 3c.

Remarque :
Si un seul bâtiment possède un chauffage individuel et que les deux autres partagent un chauffage central, deux biens immobiliers suffisent, regroupant les consommateurs de manière appropriée.

Exemple :
Trois bâtiments portant les noms Altgasse 13, Altgasse 15+17, Altgasse 19.
Chacun possède sa propre pompe à chaleur pour le chauffage et la préparation d'eau chaude sanitaire.

3c. Structure de base

![Électricité et plusieurs chauffages – illustration 1](/img/konfiguration-ordnerkonfiguration-strom-und-mehrere-heizungen/01.png)

### Attribution des compteurs

Attribuez les compteurs concernés aux nœuds par glisser-déposer.

Information importante concernant l'attribution :

Électricité / chaleur / eau

N'attribuez des points de mesure directement aux unités de décompte que si le destinataire de la facture devra payer plus tard 100 % du soutirage.

Si vous souhaitez n'attribuer un compteur qu'à une partie d'une unité de décompte individuelle, déplacez le compteur dans un nœud à l'intérieur du nœud « Compteurs techniques » (Technische Zähler).

Un tel compteur peut être réparti ultérieurement au prorata dans le Billing.

Exemples :

- Compteur des parties communes

- Compteur de chaleur d'un étage desservant 4 unités de décompte


Bornes de recharge avec smart-me Pico / Zaptec / Easee

N'attribuez pas les bornes de recharge directement aux appartements, créez plutôt une unité de décompte distincte pour la borne de recharge. Les changements de locataires s'effectuent ainsi plus facilement.

Bornes de recharge d'autres fabricants

Les bornes de recharge d'autres fabricants ne sont pas gérées ni décomptées directement dans smart-me. Dans ce cas, créez un nœud pour le départ de mobilité électrique et attribuez le compteur de départ à ce nœud. Vous obtenez ainsi la consommation totale de toutes les bornes de recharge.



3c. Structure détaillée avec les compteurs

![Électricité et plusieurs chauffages – illustration 2](/img/konfiguration-ordnerkonfiguration-strom-und-mehrere-heizungen/02.png)

### Créez pour terminer les alarmes en cas de perte de connexion.

Vous remarquez ainsi à temps la défaillance d'un compteur et réduisez au minimum la lacune de données de mesure qui en résulte. 

### Étape suivante

[Continuer vers la création des alarmes](/konfiguration/wenndann-aktionen/alarme)

## Configuration avec facturation automatique de l'électricité

Avantage :

- Facturation automatique pour l'électricité

- Pas de double saisie des tarifs d'électricité


Inconvénient :

- Saisie multiple des contrats des locataires


Pour cette configuration, il faut créer un bien immobilier supplémentaire uniquement pour l'électricité, qui contient tous les appartements des trois bâtiments.

Dans ce bien immobilier, seuls les compteurs d'électricité sont attribués.

![Électricité et plusieurs chauffages – illustration 3](/img/konfiguration-ordnerkonfiguration-strom-und-mehrere-heizungen/03.png)

### Créez pour terminer les alarmes en cas de perte de connexion.

Vous remarquez ainsi à temps la défaillance d'un compteur et réduisez au minimum la lacune de données de mesure qui en résulte. 

### Étape suivante

[Continuer vers la création des alarmes](/konfiguration/wenndann-aktionen/alarme)
