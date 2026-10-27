---
title: 'RCP Regroupement dans le cadre de la consommation propre'
slug: '/planung/zev-zusammenschluss-zum-eigenverbrauch'
description: 'Regroupement dans le cadre de la consommation propre (RCP)'
sidebar_label: 'RCP Regroupement dans le cadre de la consommation propre'
symbol: 'gebaeude'
---
## Regroupement dans le cadre de la consommation propre (RCP)

<div className="row">
<div className="col col--7">

Un regroupement dans le cadre de la consommation propre peut se composer d'un seul bâtiment ou de plusieurs bâtiments ayant le même point de raccordement vis-à-vis du fournisseur d'énergie.

Au sein du RCP, le décompte et la tarification de l'électricité du réseau et de l'électricité produite localement relèvent des exploitants du RCP.

Pour que ce décompte puisse être effectué, il faut l'infrastructure nécessaire et un schéma de mesure cohérent pour les différentes énergies.

Principes de base

- Mesure privée

- Décompte privé

- Compteur du GRD au point d'injection avec facture du GRD

</div>
<div className="col col--5 text--center">

![RCP Regroupement dans le cadre de la consommation propre – Figure 1](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/01.png)

</div>
</div>

## Schéma de mesure général

### Points de mesure soumis à licence :

- Chaque point de mesure devant être saisi est [soumis à licence](/planung/cloud-lizenzen).

- Chaque compteur virtuel (sommes de production, consommation totale) est [soumis à licence](/planung/cloud-lizenzen).

- Chaque registre de compteur M-Bus ou LoRa\-devant faire l'objet d'un décompte compte comme point de mesure (compteur combiné chaleur / froid = 2 licences) et est donc [soumis à licence](/planung/cloud-lizenzen), mais pas la passerelle M-Bus elle-même. Les registres non utilisés peuvent être désactivés.


### Électricité

- Toutes les unités de décompte à facturer doivent être mesurées avec un point de comptage. (Logements, pompes à chaleur, départs communs)
    Options matérielles pour la mesure de l'énergie électrique
    \- [Telstar 80A
    ](/produkte/telstar-80a)\- [Telstar CT
    ](/produkte/telstar-ct)\- [Nimbus 100A (plaque de compteur)](/produkte/nimbus-100a)

- Toutes les productions et tous les systèmes de stockage doivent être mesurés, soit ensemble, soit séparément.

- La mesure au raccordement de l'immeuble / du site constitue la somme de bilan correcte pour une tarification précise. Les mesures au raccordement de l'immeuble sont les points de mesure les plus importants pour la commande dynamique des consommateurs à l'intérieur des bâtiments.

- Tarification et décompte via [smart-me Billing](/konfiguration/billing)

- Selon le modèle, la tarification peut être calculée à l'aide du compteur du site / du raccordement de l'immeuble et des productions, ou alternativement à l'aide des productions et d'une consommation totale virtuelle. (+1 compteur virtuel de consommation totale)

- Si plusieurs productions sont mesurées (batteries / PV), elles doivent être additionnées virtuellement (+1 compteur virtuel de somme)


![RCP Regroupement dans le cadre de la consommation propre – Figure 2](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/02.png)

### Électromobilité avec smart-me et eCarUp

- L'électromobilité est réalisée au moyen de points de recharge privés, semi-privés ou publics.

- Le matériel [smart-me Pico 22kW](/produkte/pico-ladestation) offre la combinaison optimale entre matériel pour une exploitation publique et pour une exploitation privée dans le RCP. Avec [eCarUp](https://www.ecarup.com), d'autres solutions matérielles compatibles sont toutefois également disponibles.

- Le décompte s'effectue p. ex. par carte de crédit à tarif unique avec [eCarUp](https://www.ecarup.com) ou de manière tarifée directement via le décompte des logements avec [smart-me Billing](/konfiguration/billing).

- La commande des bornes de recharge Pico et la protection de l'infrastructure sont assurées par la [gestion de la charge multiniveau](/konfiguration/multilevel-lastmanagement) avancée.

- Le délestage est réalisé directement via le [matériel](/produkte/pico-ladestation) ou via la [gestion de la charge multiniveau](/konfiguration/multilevel-lastmanagement).


### Chaleur et eau

- Mesure de matériel tiers via [LoRa](/produkte/lora-gateway-software) ou [M-Bus](/produkte/m-bus-gateway) ou [API](/schnittstellen/api)

- Prend en charge le matériel déjà installé ainsi que le nouveau matériel des fournisseurs habituels Neovac, Techem, GWF, ISTA ou Brunata, entre autres.

- Sont mesurés soit les compteurs totaux de la production, soit les compteurs de consommation dans les unités de décompte, soit les deux, p. ex. pour Minergie.

- Décompte au moyen de l'intégration smart-me [Billing VEWA](/konfiguration/billing/vewa-abrechnung).




## Planifiez dès maintenant votre projet avec notre configurateur

Sur la base de vos indications, le Projektkonfigurator établit la liste des pièces de tous les produits smart-me, le nombre de points de mesure et un schéma visuel pour vérification.

Idéal pour les planificateurs et les électriciens.

[Projektkonfigurator](/planung/projektkonfigurator)

## Exemples de RCP

### RCP pour un seul bâtiment

- Le raccordement de l'immeuble est ici déterminant pour la commande dynamique de l'infrastructure du bâtiment, comme les pompes à chaleur, les bornes de recharge et les installations solaires, ainsi que pour une tarification précise.

- Les compteurs des parties communes et de la pompe à chaleur (chauffage) sont mesurés séparément. Cela garantit que les coûts énergétiques peuvent être présentés individuellement. Les coûts énergétiques peuvent soit être répartis en pourcentage entre les parties, soit être remis dans leur ensemble à l'attention d'une gérance.


![RCP Regroupement dans le cadre de la consommation propre – Figure 3](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/03.png)

### RCP en tant que solution de site

- Le point de mesure du site est déterminant pour une précision de tarification parfaite

- Les raccordements des immeubles sont ici déterminants pour la commande dynamique de l'infrastructure du bâtiment, comme les pompes à chaleur, les bornes de recharge et les installations solaires.

- Les compteurs des parties communes et de la pompe à chaleur (chauffage) sont mesurés séparément. Cela garantit que les coûts énergétiques peuvent être présentés individuellement. Les coûts énergétiques peuvent soit être répartis en pourcentage entre les parties, soit être remis dans leur ensemble à l'attention d'une gérance.


![RCP Regroupement dans le cadre de la consommation propre – Figure 4](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/04.png)

### Exemple de schéma

![RCP Regroupement dans le cadre de la consommation propre – Figure 5](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/05.png)
