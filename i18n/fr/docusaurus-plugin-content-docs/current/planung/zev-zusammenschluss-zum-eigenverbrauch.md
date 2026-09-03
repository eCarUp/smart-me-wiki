---
title: 'ZEV Zusammenschluss zum Eigenverbrauch'
slug: '/planung/zev-zusammenschluss-zum-eigenverbrauch'
description: 'Regroupement dans le cadre de la consommation propre (RCP)'
sidebar_label: 'RCP regroupement dans le cadre de la consommation propre'
---
## Regroupement dans le cadre de la consommation propre (RCP)

Un regroupement dans le cadre de la consommation propre peut être constitué d'un seul bâtiment ou de plusieurs bâtiments partageant le même point de raccordement vis-à-vis du fournisseur d'électricité.

Au sein du RCP, le décompte et la tarification de l'électricité du réseau et de l'électricité produite localement relèvent de l'exploitant du RCP.

Pour que ce décompte puisse être établi, il faut disposer de l'infrastructure nécessaire et d'un schéma de mesure cohérent pour les différentes énergies.



Principes de base

- Mesure privée

- Décompte privé

- Compteur du GRD au point d'injection avec facture du GRD


![RCP regroupement dans le cadre de la consommation propre – Illustration 1](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/01.png)

## Schéma de mesure général

### Points de mesure soumis à licence :

- Chaque point de mesure devant être relevé est [soumis à licence](/planung/cloud-lizenzen).

- Chaque compteur virtuel (production totalisée, consommation globale) est [soumis à licence](/planung/cloud-lizenzen).

- Chaque registre de compteur M-Bus ou LoRa devant être décompté est considéré comme un point de mesure (compteur combiné chaleur / froid = 2 licences) et est donc [soumis à licence](/planung/cloud-lizenzen), mais pas le M-Bus Gateway lui-même. Les registres non utilisés peuvent être désactivés.


### Électricité

- Toutes les unités de décompte à facturer doivent être mesurées par un point de comptage. (appartements, pompes à chaleur, départs pour les services généraux)
    Options matérielles pour la mesure de l'énergie électrique
    \- [Telstar 80A
    ](/produkte/telstar)\- [Telstar CT
    ](/produkte/Telstar-CT)\- [Nimbus 100A (plaque de comptage)](/produkte/nimbus)

- Toutes les productions et tous les systèmes de stockage doivent être mesurés, soit ensemble, soit séparément.

- La mesure au raccordement du bâtiment / du site fournit le bilan correct pour une tarification précise. Les mesures au raccordement du bâtiment sont les points de mesure les plus importants pour la commande dynamique des consommateurs à l'intérieur des bâtiments.

- Tarifer et décompter avec [smart-me Billing](/konfiguration/billing)

- Selon le modèle, la tarification peut être calculée à l'aide du compteur de site / de raccordement du bâtiment et des productions, ou bien à l'aide des productions et d'un compteur virtuel de consommation globale. (+1 compteur virtuel de consommation globale)

- Si plusieurs productions sont mesurées (batteries / PV), celles-ci doivent être totalisées virtuellement (+1 compteur virtuel de totalisation)


![RCP regroupement dans le cadre de la consommation propre – Illustration 2](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/02.png)

### Mobilité électrique avec smart-me et eCarUp

- La mobilité électrique est réalisée par des points de recharge privés, semi-privés ou publics.

- Le matériel [smart-me Pico 22kW](/produkte/pico-ladestation) offre la combinaison optimale entre exploitation publique et exploitation privée au sein du RCP. Il existe toutefois avec [eCarUp](https://www.ecarup.com) d'autres solutions matérielles compatibles.

- Le décompte s'effectue par exemple par carte de crédit au tarif unique avec [eCarUp](https://www.ecarup.com) ou de manière tarifée via le décompte de l'appartement directement avec [smart-me Billing](/konfiguration/billing).

- La commande des bornes de recharge Pico et la protection de l'infrastructure sont assurées par la [gestion de la charge multiniveau](/konfiguration/multilevel-lastmanagement) évoluée.

- Le délestage est réalisé directement via le [matériel](/produkte/pico-ladestation) ou via la [gestion de la charge multiniveau](/konfiguration/multilevel-lastmanagement).


### Chaleur et eau

- Mesure de matériel tiers via [LoRa](/produkte/lora-gateway-software) ou [M-Bus](/produkte/m-bus-gateway) ou [API](/schnittstellen/api)

- Prend en charge le matériel déjà installé ainsi que le nouveau matériel des fournisseurs habituels Neovac, Techem, GWF, ISTA ou Brunata et bien d'autres.

- Sont mesurés soit les compteurs totaux de la production, soit les compteurs de consommation dans les unités de décompte, soit les deux, par exemple avec Minergie.

- Décompte au moyen de l'intégration smart-me [Billing VEWA](/konfiguration/billing/vewa-abrechnung).




## Planifiez dès maintenant votre projet avec notre configurateur

Le Projektkonfigurator établit, sur la base de vos indications, la liste des pièces de tous les produits smart-me, le nombre de points de mesure et un schéma visuel à des fins de vérification.

Idéal pour les planificateurs et les professionnels de l'électricité.

[Projektkonfigurator](/planung/Projektkonfigurator)

## Exemples de RCP

### RCP dans un bâtiment unique

- Le raccordement du bâtiment est ici déterminant pour la commande dynamique de l'infrastructure du bâtiment telle que les pompes à chaleur, les bornes de recharge et les installations solaires, ainsi que pour une tarification précise.

- Le compteur des services généraux et celui de la pompe à chaleur (chauffage) sont mesurés séparément. On garantit ainsi que les coûts énergétiques peuvent être présentés séparément. Les coûts énergétiques peuvent soit être répartis en pourcentage entre les parties, soit être remis en bloc à une gérance.


![RCP regroupement dans le cadre de la consommation propre – Illustration 3](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/03.png)

### RCP en tant que solution de site

- Le point de mesure du site est déterminant pour une précision de tarification parfaite

- Les raccordements des bâtiments sont ici déterminants pour la commande dynamique de l'infrastructure du bâtiment telle que les pompes à chaleur, les bornes de recharge et les installations solaires.

- Le compteur des services généraux et celui de la pompe à chaleur (chauffage) sont mesurés séparément. On garantit ainsi que les coûts énergétiques peuvent être présentés séparément. Les coûts énergétiques peuvent soit être répartis en pourcentage entre les parties, soit être remis en bloc à une gérance.


![RCP regroupement dans le cadre de la consommation propre – Illustration 4](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/04.png)

### Exemple de schéma

![RCP regroupement dans le cadre de la consommation propre – Illustration 5](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/05.png)
