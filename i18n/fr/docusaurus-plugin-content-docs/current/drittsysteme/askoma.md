---
title: 'Askoma'
slug: '/drittsysteme/askoma'
description: 'Askoheat est une entreprise suisse qui fabrique des éléments chauffants pour la préparation de l''eau et le stockage d''énergie.'
sidebar_label: 'Askoma'
---
Askoheat est une entreprise suisse qui fabrique des éléments chauffants pour la préparation de l'eau et le stockage d'énergie.

Les éléments chauffants peuvent être pilotés intelligemment par des systèmes tiers comme smart-me AG. Ils stockent ainsi l'énergie solaire excédentaire, par exemple dans l'eau chaude sanitaire.

Produits Askoma pris en charge :

- Askoheat+


![Askoma – Illustration 1](/img/drittsysteme-askoma/01.png)

![Askoma – Illustration 2](/img/drittsysteme-askoma/02.png)

### Prérequis

- Compteur smart-me Telstar 80A ou CT

- Licence Professional pour activer les services Modbus TCP et DNS

- Disponible dans le logiciel standard à partir de mi-septembre 2024.

- Vous devez vous assurer, au niveau du routeur, que l'adresse IP du Telstar ne change pas.


### Configuration d'Askoheat+ et du smart-me Telstar 80A / CT

Telstar 80A / CT :

- dans les paramètres (Einstellungen) (sélectionner le compteur, roue dentée en haut à droite)

- Activer Modbus TCP (Modbus TCP aktivieren)

- Activer le DNS (DNS aktivieren)

- Sélectionner l'IP interne (Interne IP wählen)

- Enregistrer (Speichern)


![Askoma – Illustration 3](/img/drittsysteme-askoma/03.png)

- Relevez l'adresse IP via CMD avec la commande ping sur l'adresse DNS affichée. Vous trouverez l'adresse DNS dans les paramètres avancés (Erweiterten Einstellungen) sous « Activer le DNS » (DNS aktivieren). P. ex. ping smart-me\_6303192.dns-me.com


![Askoma – Illustration 4](/img/drittsysteme-askoma/04.png)

Réglages sur l'Askoheat+

Ceux-ci peuvent varier et ne relèvent pas de la responsabilité de smart-me.

[http://askoheat.local/setup3](http://askoheat.local/setup3) 

- Saisir l'adresse IP du Telstar. 

- Activer le mode TCP-Master

-  Sélectionner Smart-Me dans la liste

- Cliquer sur Start Connection


![Askoma – Illustration 5](/img/drittsysteme-askoma/05.png)

- Vous pouvez ensuite vérifier, sur la page Setup3 sous STATUS, que la valeur mesurée en watts est actualisée toutes les 1-3 secondes.


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
