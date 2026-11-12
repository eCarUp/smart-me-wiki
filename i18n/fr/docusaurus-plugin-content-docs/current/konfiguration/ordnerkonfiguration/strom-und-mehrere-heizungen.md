---
title: 'Électricité et plusieurs chauffages'
slug: '/konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen'
description: 'Configuration sans facturation automatique de l''électricité'
sidebar_label: 'Électricité et plusieurs chauffages'
naechste_schritte: [konfiguration/wenndann-aktionen/alarme]
---
<Menueweg>Configuration du compteur et du dossier</Menueweg>

## Configuration sans facturation automatique de l'électricité

Avantage :

- Aucune double saisie des contrats de location nécessaire


Inconvénient :

- Pas de facturation automatique pour l'électricité

- Saisie multiple des tarifs d'électricité (par immeuble)


### Électricité avec ou sans mobilité électrique et multi-énergie avec plusieurs bâtiments et chauffages individuels. (Lotissement)

Pertinent pour les RCP (regroupement dans le cadre de la consommation propre) avec compteurs d'électricité, compteurs multi-énergie, plusieurs bâtiments et, en option, des bornes de recharge.

Pour les sites comportant plusieurs bâtiments et des systèmes de chauffage individuels, il faut créer un immeuble par système de chauffage. Si trois bâtiments ont donc des systèmes de chauffage différents, la configuration doit être réalisée selon 3c.

Remarque :
Si un seul bâtiment possède un chauffage individuel et que les deux autres partagent un chauffage central, deux immeubles suffisent, qui regroupent les consommateurs de manière appropriée.

Exemple :
Trois bâtiments nommés Altgasse 13, Altgasse 15+17, Altgasse 19.
Tous possèdent chacun une pompe à chaleur pour le chauffage et la production d'eau chaude sanitaire.

3c. Structure de base

![Électricité et plusieurs chauffages – Illustration 1](/img/konfiguration-ordnerkonfiguration-strom-und-mehrere-heizungen/01.png)

### Attribution des compteurs

Attribuez les compteurs concernés aux nœuds par glisser-déposer.

Information importante concernant l'attribution :

Électricité / Chaleur / Eau

N'attribuez des points de mesure directement aux unités de décompte que si le destinataire de la facture doit ensuite payer 100% du soutirage.

Si vous souhaitez attribuer un compteur seulement en partie à une unité de décompte individuelle, déplacez le compteur dans un nœud à l'intérieur du nœud « Compteurs techniques » (Technische Zähler).

Un tel compteur peut ensuite être réparti en pourcentage dans le Billing.

Exemples :

- Compteur des services généraux

- Compteur de chaleur d'un étage qui dessert 4 unités de décompte


Bornes de recharge avec smart-me Pico / Zaptec / Easee

N'attribuez pas les bornes de recharge directement aux appartements, créez plutôt une unité de décompte séparée pour la borne de recharge. Les changements de locataire peuvent ainsi être effectués plus facilement.

Bornes de recharge d'autres fabricants

Les bornes de recharge d'autres fabricants ne sont pas directement gérées ni décomptées dans smart-me. Dans ce cas, créez un nœud pour le départ de mobilité électrique et attribuez-lui le compteur de départ. Vous obtenez ainsi la consommation totale de toutes les bornes de recharge.



3c. Structure détaillée avec compteurs

![Électricité et plusieurs chauffages – Illustration 2](/img/konfiguration-ordnerkonfiguration-strom-und-mehrere-heizungen/02.png)

### Créez pour terminer les alarmes en cas de panne de connexion.

Vous remarquez ainsi rapidement la défaillance d'un compteur et réduisez au minimum la lacune de données de mesure qui en résulte. 


## Configuration avec facturation automatique de l'électricité

<div className="row">
<div className="col col--7">

Avantage :

- Facturation automatique pour l'électricité

- Aucune double saisie des tarifs d'électricité

Inconvénient :

- Saisie multiple des contrats de location

Pour cette configuration, il faut créer un immeuble supplémentaire uniquement pour l'électricité, qui comprend tous les appartements des trois bâtiments.

Seuls les compteurs d'électricité sont attribués à cet immeuble.

</div>
<div className="col col--5 bild--mitte">

![Électricité et plusieurs chauffages – Illustration 3](/img/konfiguration-ordnerkonfiguration-strom-und-mehrere-heizungen/03.png)

</div>
</div>

### Créez pour terminer les alarmes en cas de panne de connexion.

Vous remarquez ainsi rapidement la défaillance d'un compteur et réduisez au minimum la lacune de données de mesure qui en résulte.
