---
title: 'Schéma de mesure pour l''électricité des locataires'
slug: '/planung/standard-messkonzept'
description: 'Tarification du schéma de mesure pour l''électricité des locataires'
sidebar_label: 'Schéma de mesure électricité des locataires'
symbol: 'gebaeude'
---
## Électricité pour les locataires

Un modèle d'électricité pour les locataires peut se composer d'un seul bâtiment ou de plusieurs bâtiments disposant du même point de raccordement vis-à-vis du gestionnaire de réseau de distribution (GRD).

Dans le cadre de l'électricité pour les locataires, le décompte et la tarification du courant du réseau et du courant produit localement relèvent de l'exploitant du modèle d'électricité pour les locataires.

Pour que ce décompte puisse être effectué, il faut l'infrastructure nécessaire et un schéma de mesure cohérent.

**Principes de base :**

- Mesure privée

- Décompte privé

- Compteur du GRD au point d'injection avec facture du GRD

<div className="bild--voll">

![Schéma de mesure pour l'électricité des locataires – Illustration 1](/img/planung-standard-messkonzept/01.png)

</div>

## Schéma de mesure général

### Points de mesure soumis à licence :

- Chaque point de mesure à relever est [soumis à licence](/planung/cloud-lizenzen).

- Chaque compteur virtuel (productions totales, consommation totale) est [soumis à licence](/planung/cloud-lizenzen).

### Électricité

- Toutes les unités de décompte à facturer doivent être mesurées par un point de comptage (appartements, pompes à chaleur, départs des services généraux). Options matérielles pour la mesure de l'énergie électrique : [Telstar 80A](/produkte/telstar-80a), [Telstar CT](/produkte/telstar-ct), [Nimbus 100A (plaque de compteur)](/produkte/nimbus-100a)

- Toutes les productions et tous les systèmes de stockage doivent être mesurés, soit ensemble, soit séparément.

- La mesure au raccordement du bâtiment fournit la somme de bilan correcte pour une tarification précise. Les mesures au raccordement du bâtiment sont les points de mesure les plus importants pour la commande dynamique des consommateurs à l'intérieur des bâtiments.

- Tarification et décompte via [smart-me Billing](/konfiguration/billing)

- Selon le modèle, la tarification peut être calculée au moyen du compteur de bilan / de raccordement du bâtiment et des productions, ou alternativement au moyen des productions et d'une consommation totale virtuelle. (+1 compteur virtuel de consommation totale)

- Si plusieurs productions sont mesurées (batteries / PV), elles doivent être additionnées virtuellement (+1 compteur virtuel de somme)

<div className="bild--voll">

![Schéma de mesure pour l'électricité des locataires – Illustration 2](/img/planung-standard-messkonzept/02.png)

</div>

### Électromobilité avec smart-me et eCarUp

- L'électromobilité est réalisée au moyen de points de recharge privés, semi-privés ou publics.

- Le matériel [smart-me Pico 22kW](/produkte/pico-ladestation) offre le mélange optimal entre matériel pour l'exploitation publique et pour l'exploitation privée dans le cadre de l'électricité pour les locataires. Avec [eCarUp](https://www.ecarup.com), d'autres approches matérielles compatibles sont toutefois également possibles.

- Le décompte s'effectue par exemple par carte de crédit au tarif unique avec [eCarUp](https://www.ecarup.com) ou de manière tarifée via le décompte des appartements directement avec [smart-me Billing](/konfiguration/billing).

- La commande des bornes de recharge Pico et la protection de l'infrastructure sont assurées par la [gestion de la charge multiniveau](/konfiguration/multilevel-lastmanagement) avancée.

- Le délestage est réalisé directement via le [matériel](/produkte/pico-ladestation) ou via la [gestion de la charge multiniveau](/konfiguration/multilevel-lastmanagement).

## Tarification et conception du schéma de mesure pour l'électricité des locataires

La tarification du schéma de mesure s'effectue via le compteur de bilan et la production, ou alternativement via la consommation / le PV ou la batterie en se référant au compteur de bilan.

Le schéma de mesure est complet dès que 100% de tous les consommateurs et de toutes les productions sont mesurés. Le compteur de bilan au raccordement du bâtiment sert de correction et de référence.

### Validation et décompte du fournisseur d'énergie

Les sommes du courant du réseau vendu correspondent approximativement à la quantité d'électricité facturée par le fournisseur d'énergie.

La quantité de courant réinjecté dans le registre d'exportation du compteur de bilan correspond approximativement à la quantité figurant dans la rétribution de l'injection du fournisseur d'énergie.

## Exemples d'électricité pour les locataires

### Électricité pour les locataires dans un bâtiment individuel

- Le raccordement du bâtiment est ici déterminant pour la commande dynamique de l'infrastructure du bâtiment, comme les pompes à chaleur, les bornes de recharge et les installations solaires, ainsi que pour une tarification précise.

- Le compteur des services généraux et celui de la pompe à chaleur (chauffage) sont mesurés séparément. Cela garantit que les coûts énergétiques peuvent être indiqués individuellement. Les coûts énergétiques peuvent soit être répartis en pourcentage entre les parties, soit être transmis dans leur ensemble à l'attention d'une gérance immobilière.

<div className="bild--voll">

![Schéma de mesure pour l'électricité des locataires – Illustration 3](/img/planung-standard-messkonzept/03.png)

</div>

### Électricité pour les locataires sur plusieurs bâtiments

- Le compteur de bilan est déterminant pour une précision de tarification parfaite.

- Les raccordements des bâtiments sont ici déterminants pour la commande dynamique de l'infrastructure du bâtiment, comme les pompes à chaleur, les bornes de recharge et les installations solaires.

- Le compteur des services généraux et celui de la pompe à chaleur (chauffage) sont mesurés séparément. Cela garantit que les coûts énergétiques peuvent être indiqués individuellement. Les coûts énergétiques peuvent soit être répartis en pourcentage entre les parties, soit être transmis dans leur ensemble à l'attention d'une gérance immobilière.

<div className="bild--voll">

![Schéma de mesure pour l'électricité des locataires – Illustration 4](/img/planung-standard-messkonzept/04.png)

</div>

### Exemple de schéma

<div className="bild--voll">

![Schéma de mesure pour l'électricité des locataires – Illustration 5](/img/planung-standard-messkonzept/05.png)

</div>
