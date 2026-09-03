---
title: 'Minergie Exporter'
slug: '/schnittstellen/minergie-exporter'
description: 'Le Minergie Data Exporter permet de transférer directement les données des points de mesure dans la base de données Minergie.'
sidebar_label: 'Minergie Exporter'
---
## Minergie Monitoring +

Le Minergie Data Exporter permet de transférer directement les données des points de mesure dans la base de données Minergie.



Grâce aux données présentes dans la base de données Minergie, Minergie peut réaliser, contre paiement, des comparaisons entre les données planifiées et les données effectives.

Le produit en question s'appelle Minergie Monitroing+ et permet d'identifier simplement et rapidement les potentiels d'amélioration, ainsi que de mettre en évidence les erreurs de configuration.



![Minergie Exporter – Illustration 1](/img/schnittstellen-minergie-exporter/01.png)

## Connexion au Minergie Datenexporter

Chaque partenaire smart-me disposant de l'avenant contractuel Intégrateur système Minergie reçoit le lien vers l'Exporter.

Tu n'es pas encore devenu intégrateur système Minergie ? Deviens-en un et informe-toi ici : [Devenir partenaire Minergie](/planung/minergie) 



1.  Connecte-toi pour cela avec les données de connexion de l'objet smart-me concerné sur [smart-me.com](http://smart-me.com)  et crée la clé API.

2.  Connecte-toi ensuite au Minergie Exporter (adresse web mise à ta disposition) avec les mêmes données de compte et crée la configuration.



## Mettre en place l'export par objet

1.  Appuie sur le « + » pour saisir une nouvelle tâche d'export.


![Minergie Exporter – Illustration 2](/img/schnittstellen-minergie-exporter/02.png)

2\. Crée une clé API dans l'objet smart-me.

Crée une nouvelle clé avec un nom de ton choix. Sélectionne les droits avec au minimum les droits de lecture.


![Minergie Exporter – Illustration 3](/img/schnittstellen-minergie-exporter/03.png)

![Minergie Exporter – Illustration 4](/img/schnittstellen-minergie-exporter/04.png)

![Minergie Exporter – Illustration 5](/img/schnittstellen-minergie-exporter/05.png)

3\. Enregistre la clé dans la tâche du Minergie Exporter sous API-Key

4\. Saisis sous « Minergie target » l'ID d'objet que tu as reçu de Minergie et de sa base de données via la Label-Platform.

5\. Relie les points de mesure pertinents de l'objet Minergie à un point de mesure dans le compte smart-me. Les compteurs de somme peuvent être créés directement dans le Minergie Exporter.

6\. Démarre le transfert.

![Minergie Exporter – Illustration 6](/img/schnittstellen-minergie-exporter/06.png)

## Fonction et fréquence de l'export de données

Le Data Exporter transfère les données une fois par jour, par intervalles de 15 minutes.

Les données du passé peuvent être rechargées à tout moment et écrasées dans la base de données Minergie.

Lorsque des données passées sont chargées, elles sont transférées progressivement, réparties sur les transferts réguliers. Cela peut prendre quelques jours jusqu'à ce que toutes les données du passé soient transférées.
