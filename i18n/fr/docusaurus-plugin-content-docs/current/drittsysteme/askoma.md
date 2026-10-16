---
title: 'Askoma'
slug: '/drittsysteme/askoma'
description: 'Askoheat est une entreprise suisse qui fabrique des éléments chauffants pour la production d''eau chaude et le stockage d''énergie.'
sidebar_label: 'Askoma'
---
<div className="row">
<div className="col col--8">

Askoheat est une entreprise suisse qui fabrique des éléments chauffants pour la production d'eau chaude et le stockage d'énergie.

Les éléments chauffants peuvent être pilotés de manière intelligente par des systèmes tiers comme smart-me AG et stockent ainsi l'énergie solaire excédentaire, par exemple dans l'eau chaude sanitaire.

Produits Askoma pris en charge :

- Askoheat+

</div>
<div className="col col--4 text--center">

![Askoma – Illustration 1](/img/drittsysteme-askoma/01.png)

![Askoma – Illustration 2](/img/drittsysteme-askoma/02.png)

</div>
</div>

### Prérequis

- Compteur smart-me Telstar 80A ou CT
- Licence Professional pour l'activation des services Modbus TCP et DNS
- Disponible dans le logiciel standard à partir de mi-septembre 2024.
- Côté routeur, il faut s'assurer que l'adresse IP du Telstar ne change pas.


### Configuration Askoheat+ et smart-me Telstar 80A / CT

<div className="row">
<div className="col col--8">

Telstar 80A / CT :
- dans les paramètres (Einstellungen) (sélectionner le compteur, roue dentée en haut à droite)
- Activer Modbus TCP (Modbus TCP aktivieren)
- Activer DNS (DNS aktivieren)
- Sélectionner l'IP interne (Interne IP wählen)
- Enregistrer (Speichern)

</div>
<div className="col col--4 text--center">

![Askoma – Illustration 3](/img/drittsysteme-askoma/03.png)

</div>
</div>

<div className="row">
<div className="col col--8">

- Lisez l'adresse IP via CMD avec la commande ping sur l'adresse DNS affichée. Vous trouverez l'adresse DNS dans les paramètres avancés (Erweiterte Einstellungen) sous « Activer DNS » (DNS aktivieren). Par ex. ping smart-me\_6303192.dns-me.com

</div>
<div className="col col--4 text--center">

![Askoma – Illustration 4](/img/drittsysteme-askoma/04.png)

</div>
</div>

<div className="row">
<div className="col col--6">

Réglages sur l'Askoheat+
Ceux-ci peuvent varier et ne relèvent pas de la responsabilité de smart-me.

[http://askoheat.local/setup3](http://askoheat.local/setup3)

- Saisir l'adresse IP du Telstar
- Activer le mode TCP-Master
- Sélectionner Smart-Me dans la liste
- Cliquer sur Start Connection

- Vous pouvez ensuite vérifier sur la page Setup3, sous STATUS, que la valeur en watts de la mesure est actualisée toutes les 1 à 3 secondes.

</div>
<div className="col col--6 text--center">

![Askoma – Illustration 5](/img/drittsysteme-askoma/05.png)

![Askoma – Illustration 6](/img/drittsysteme-askoma/06.png)
</div>
</div>


### Contact

<Kacheln min="20rem">
<Kachel titel="ASKOMA AG">

Industriestrasse 1, CH-4922 Bützberg, Suisse

Tél. +41 62 958 70 80 · Support +41 62 958 70 99 · Fax +41 62 958 70 81

[info@askoma.com](mailto:info@askoma.com)

</Kachel>
</Kacheln>
