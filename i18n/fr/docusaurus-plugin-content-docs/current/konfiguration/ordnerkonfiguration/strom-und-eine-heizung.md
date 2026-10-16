---
title: 'Immeuble avec électricité et chaleur / eau'
slug: '/konfiguration/ordnerkonfiguration/strom-und-eine-heizung'
description: 'Configuration sans facturation automatique de l''électricité'
sidebar_label: 'Immeuble avec électricité et chaleur / eau'
naechste_schritte: [konfiguration/wenndann-aktionen/alarme]
---
## Configuration sans facturation automatique de l'électricité

Avantage :

- Aucune double saisie des contrats de location nécessaire


Inconvénient :

- Pas de facturation automatique pour l'électricité

- Saisie multiple des tarifs d'électricité (par immeuble)


### 3b. Électricité avec ou sans e-mobilité et multi-énergie avec un bâtiment.

Différences possibles : pour les immeubles équipés uniquement de compteurs d'électricité sans multi-énergie, la pompe à chaleur peut être attribuée directement aux appartements au moyen d'une clé de répartition. En cas de multi-énergie, la pompe à chaleur est enregistrée comme sous-compteur (dossier séparé) afin qu'une facture séparée soit établie, qui doit ensuite être reportée comme facteur de coût dans la configuration VEWA.

3b. Structure de base

![Immeuble avec électricité et chaleur / eau – illustration 1](/img/konfiguration-ordnerkonfiguration-strom-und-eine-heizung/01.png)

### Attribution des compteurs

Attribuez les compteurs concernés aux nœuds par glisser-déposer.

Information importante concernant l'attribution :

Électricité / chaleur / eau

N'attribuez des points de comptage directement aux unités de décompte que si le destinataire de la facture doit ensuite payer 100% du soutirage.

Si vous souhaitez attribuer des compteurs seulement en partie à une unité de décompte individuelle, déplacez le compteur dans un nœud situé à l'intérieur du nœud « Compteurs techniques » (Technischen Zähler).

Un tel compteur pourra ensuite être réparti en pourcentage dans le Billing.

Exemples :

- Compteur des parties communes

- Compteur de chaleur d'un étage qui dessert 4 unités de décompte


Bornes de recharge avec smart-me Pico / Zaptec / Easee

N'attribuez pas les bornes de recharge directement aux appartements, créez plutôt une unité de décompte séparée pour la borne de recharge. Les changements de locataire peuvent ainsi être effectués plus facilement.

Bornes de recharge d'autres fabricants

Les bornes de recharge d'autres fabricants ne sont pas gérées ni décomptées directement dans smart-me. Dans ce cas, créez un nœud pour le départ e-mobilité et attribuez le compteur de départ à ce nœud. Vous obtenez ainsi la consommation totale de toutes les bornes de recharge.



3b. Structure détaillée avec compteurs

![Immeuble avec électricité et chaleur / eau – illustration 2](/img/konfiguration-ordnerkonfiguration-strom-und-eine-heizung/02.png)

### Pour terminer, créez les alarmes en cas de perte de connexion.

Vous remarquerez ainsi rapidement la défaillance d'un compteur et réduirez la lacune de données de mesure qui en résulte. 

### Étape suivante

[Continuer vers la création des alarmes](/konfiguration/wenndann-aktionen/alarme)

## Configuration avec facturation automatique de l'électricité

Avantage :

- Facturation automatique pour l'électricité

- Aucune double saisie des tarifs d'électricité


Inconvénient :

- Saisie multiple des contrats de location


### Bientôt disponible

Avertissement :

Pour cette configuration, un immeuble supplémentaire doit être créé uniquement pour l'électricité, qui contient tous les appartements des trois bâtiments.

Seuls les compteurs d'électricité sont attribués à cet immeuble.

### Pour terminer, créez les alarmes en cas de perte de connexion.

Vous remarquerez ainsi rapidement la défaillance d'un compteur et réduirez la lacune de données de mesure qui en résulte. 

### Étape suivante

[Continuer vers la création des alarmes](/konfiguration/wenndann-aktionen/alarme)
