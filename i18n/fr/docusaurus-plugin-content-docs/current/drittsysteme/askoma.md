---
title: 'Askoma'
slug: '/drittsysteme/askoma'
description: 'Askoheat est une entreprise suisse qui fabrique des éléments chauffants pour la préparation d''eau chaude et le stockage d''énergie.'
sidebar_label: 'Askoma'
---
Askoheat est une entreprise suisse qui fabrique des éléments chauffants pour la préparation d'eau chaude et le stockage d'énergie.

Les éléments chauffants peuvent être pilotés de manière intelligente par des systèmes de terzi tels que smart-me AG et stockent ainsi l'énergie solaire excédentaire, par exemple sous forme d'eau chaude.

Produits Askoma pris en charge :

- Askoheat+


![Askoma – Illustration 1](/img/drittsysteme-askoma/01.png)

![Askoma – Illustration 2](/img/drittsysteme-askoma/02.png)

### Condition préalable

- Compteur smart-me Telstar 80A ou CT

- Licence Professional pour l'activation des services Modbus TCP et DNS

- Disponible dans le logiciel standard à partir de mi-septembre 2024.

- Côté routeur, il faut s'assurer que l'IP du Telstar ne change pas.


### Configuration Askoheat+ et smart-me Telstar 80A / CT

Telstar 80A / CT :

- dans les paramètres (sélectionner le compteur, roue dentée en haut à droite)

- Activer Modbus TCP

- Activer DNS

- Sélectionner l'IP interne

- Enregistrer


![Askoma – Illustration 3](/img/drittsysteme-askoma/03.png)

- Lecture de l'IP via CMD et la commande ping sur l'adresse DNS affichée. L'adresse DNS se trouve dans les paramètres avancés sous « Activer DNS » (DNS aktivieren). Par exemple ping smart-me\_6303192.dns-me.com


![Askoma – Illustration 4](/img/drittsysteme-askoma/04.png)

Paramètres sur l'Askoheat+

Ceux-ci peuvent varier et ne relèvent pas de la responsabilité de smart-me.

[http://askoheat.local/setup3](http://askoheat.local/setup3) 

- Saisir l'adresse IP du Telstar. 

- Activer le mode TCP Master

-  Sélectionner Smart-Me dans la liste

- Cliquer sur Start Connection


![Askoma – Illustration 5](/img/drittsysteme-askoma/05.png)

- Tu peux ensuite vérifier sur la page Setup3, sous STATUS, si la valeur mesurée en watts s'actualise toutes les 1 à 3 secondes.


![Askoma – Illustration 6](/img/drittsysteme-askoma/06.png)

### Contact

ASKOMA AG

Industriestrasse 1

CH-4922 Bützberg

Suisse

Tél. +41 62 958 70 80

Support +41 62 958 70 99

Fax  +41 62 958 70 81

[info@askoma.com](mailto:info@askoma.com)
