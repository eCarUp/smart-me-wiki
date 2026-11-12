---
title: 'RCP Regroupement dans le cadre de la consommation propre'
slug: '/planung/zev-zusammenschluss-zum-eigenverbrauch'
description: 'Regroupement dans le cadre de la consommation propre (RCP)'
sidebar_label: 'RCP Regroupement dans le cadre de la consommation propre'
symbol: 'gebaeude'
---
## Regroupement dans le cadre de la consommation propre (RCP)

Un regroupement dans le cadre de la consommation propre peut se composer d'un seul bâtiment ou de plusieurs bâtiments disposant du même point de raccordement vis-à-vis du fournisseur d'énergie.

Au sein du RCP, le décompte et la tarification de l'électricité du réseau et de l'électricité produite localement relèvent des exploitants du RCP.

Pour que ce décompte puisse être effectué, il faut l'infrastructure nécessaire et un schéma de mesure cohérent pour chacune des énergies.

**Principes de base :**

- Mesure privée

- Décompte privé

- Compteur du GRD au point d'injection avec facture du GRD

<div className="bild--voll">

![RCP Regroupement dans le cadre de la consommation propre – Illustration 1](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/01.png)

</div>

## Schéma de mesure général

### Points de mesure soumis à licence :

- Chaque point de mesure qui doit être relevé est [soumis à licence](/planung/cloud-lizenzen).

- Chaque compteur virtuel (sommes de production, consommation totale) est [soumis à licence](/planung/cloud-lizenzen).

- Chaque registre de compteur M-Bus ou LoRa\-, qui doit être décompté, est considéré comme un point de mesure (compteur combiné chaleur / froid = 2 licences) et est donc [soumis à licence](/planung/cloud-lizenzen), mais pas la passerelle M-Bus elle-même. Ceux qui ne sont pas utilisés peuvent être désactivés.


### Électricité

- Toutes les unités de décompte à facturer doivent être mesurées par un point de comptage. (Appartements, pompes à chaleur, départs communs)
    Options matérielles pour la mesure de l'énergie électrique
    \- [Telstar 80A
    ](/produkte/telstar-80a)\- [Telstar CT
    ](/produkte/telstar-ct)\- [Nimbus 100A (plaque de compteur)](/produkte/nimbus-100a)

- Toutes les productions et tous les systèmes de stockage doivent être mesurés, soit ensemble, soit séparément.

- La mesure au raccordement du bâtiment / du site constitue la somme de bilan correcte pour une tarification précise. Les mesures au raccordement du bâtiment sont les points de mesure les plus importants pour la commande dynamique des consommateurs à l'intérieur des bâtiments.

- Tarification et décompte via [smart-me Billing](/konfiguration/billing)

- Selon le modèle, la tarification peut être calculée à l'aide du compteur du site / du raccordement du bâtiment et des productions, ou alternativement à l'aide des productions et d'une consommation totale virtuelle. (+1 compteur virtuel de consommation totale)

- Si plusieurs productions sont mesurées (batteries / PV), elles doivent être additionnées virtuellement (+1 compteur virtuel de somme)


<div className="bild--voll">

![RCP Regroupement dans le cadre de la consommation propre – Illustration 2](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/02.png)

</div>

### Mobilité électrique avec smart-me et eCarUp

- La mobilité électrique est réalisée au moyen de points de recharge privés, semi-privés ou publics.

- Le matériel [smart-me Pico 22kW](/produkte/pico-ladestation) offre le mélange optimal de matériel pour une exploitation publique et une exploitation privée dans le RCP. Avec [eCarUp](https://www.ecarup.com), d'autres approches matérielles compatibles sont toutefois également possibles.

- Le décompte s'effectue p. ex. par carte de crédit au tarif unique avec [eCarUp](https://www.ecarup.com) ou de manière tarifée via le décompte des appartements directement avec [smart-me Billing](/konfiguration/billing).

- La commande des bornes de recharge Pico et la protection de l'infrastructure sont assurées par la [gestion de la charge multiniveau](/konfiguration/multilevel-lastmanagement) avancée.

- Le délestage est réalisé directement via le [matériel](/produkte/pico-ladestation) ou via la [gestion de la charge multiniveau](/konfiguration/multilevel-lastmanagement).


### Chaleur et eau

- Mesure de matériel tiers via [LoRa](/produkte/lora-gateway-software) ou [M-Bus](/produkte/m-bus-gateway) ou [API](/schnittstellen/api)

- Prend en charge le matériel déjà installé ainsi que le nouveau matériel des fournisseurs habituels Neovac, Techem, GWF, ISTA ou Brunata, et d'autres encore.

- Sont mesurés soit les compteurs totaux de la production, soit les compteurs de consommation dans les unités de décompte, soit les deux, p. ex. dans le cas de Minergie.

- Décompte au moyen de l'intégration smart-me [Billing DIFEE](/konfiguration/billing/vewa-abrechnung).




## Planifiez dès maintenant votre projet avec notre configurateur

Sur la base de vos indications, le Projektkonfigurator établit la liste de matériel de tous les produits smart-me, le nombre de points de mesure et un schéma visuel pour vérification.

Idéal pour les planificateurs et les électriciens.

[Projektkonfigurator](/planung/projektkonfigurator)

## Exemples de RCP

### RCP en tant que bâtiment individuel

- Le raccordement du bâtiment est ici déterminant pour la commande dynamique de l'infrastructure du bâtiment, comme les pompes à chaleur, les bornes de recharge et les installations solaires, ainsi que pour une tarification précise.

- Le compteur des services communs et celui de la pompe à chaleur (chauffage) sont mesurés séparément. Cela garantit que les coûts énergétiques peuvent être présentés individuellement. Les coûts énergétiques peuvent soit être répartis en pourcentage entre les parties, soit être remis dans leur ensemble à l'attention d'une gérance.


<div className="bild--voll">

![RCP Regroupement dans le cadre de la consommation propre – Illustration 3](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/03.png)

</div>

### RCP en tant que solution de site

- Le point de mesure du site est déterminant pour une précision de tarification parfaite

- Les raccordements des bâtiments sont ici déterminants pour la commande dynamique de l'infrastructure du bâtiment, comme les pompes à chaleur, les bornes de recharge et les installations solaires.

- Le compteur des services communs et celui de la pompe à chaleur (chauffage) sont mesurés séparément. Cela garantit que les coûts énergétiques peuvent être présentés individuellement. Les coûts énergétiques peuvent soit être répartis en pourcentage entre les parties, soit être remis dans leur ensemble à l'attention d'une gérance.


<div className="bild--voll">

![RCP Regroupement dans le cadre de la consommation propre – Illustration 4](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/04.png)

</div>

### Exemple de schéma

<div className="bild--voll">

![RCP Regroupement dans le cadre de la consommation propre – Illustration 5](/img/planung-zev-zusammenschluss-zum-eigenverbrauch/05.png)

</div>
