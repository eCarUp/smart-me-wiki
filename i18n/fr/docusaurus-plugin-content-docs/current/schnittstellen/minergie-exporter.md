---
title: 'Minergie Exporter'
slug: '/schnittstellen/minergie-exporter'
description: 'L''exportateur de données Minergie permet de transférer directement les données des points de mesure vers la base de données Minergie.'
sidebar_label: 'Minergie Exporter'
---
## Minergie Monitoring +

L'exportateur de données Minergie permet de transférer directement les données des points de mesure vers la base de données Minergie.



Grâce aux données enregistrées dans la base de données Minergie, Minergie peut effectuer, contre paiement, des comparaisons entre les données de planification et les données réelles.

Ce produit s'appelle Minergie Monitoring+ et permet d'identifier simplement et rapidement les potentiels d'amélioration ainsi que de détecter les erreurs de configuration.



![Minergie Exporter – Figure 1](/img/schnittstellen-minergie-exporter/01.png)

## Connexion à l'exportateur de données Minergie

Chaque partenaire smart-me disposant de l'avenant contractuel Intégrateur système Minergie reçoit le lien vers l'exportateur.

Vous n'êtes pas encore intégrateur système Minergie ? Devenez-le et informez-vous ici : [Devenir partenaire Minergie](/planung/minergie) 



1.  Pour cela, connectez-vous sur [smart-me.com](http://smart-me.com) avec les identifiants de l'objet smart-me concerné et créez la clé API.

2.  Connectez-vous ensuite au Minergie Exporter (adresse web mise à votre disposition) avec les mêmes identifiants de compte et créez la configuration.



## Configurer l'export par objet

1.  Cliquez sur le « + » pour saisir une nouvelle tâche d'export.


![Minergie Exporter – Figure 2](/img/schnittstellen-minergie-exporter/02.png)

2\. Créez une clé API dans l'objet smart-me.

Créez une nouvelle clé avec un nom de votre choix. Attribuez-lui au minimum des droits de lecture.


![Minergie Exporter – Figure 3](/img/schnittstellen-minergie-exporter/03.png)

![Minergie Exporter – Figure 4](/img/schnittstellen-minergie-exporter/04.png)

![Minergie Exporter – Figure 5](/img/schnittstellen-minergie-exporter/05.png)

3\. Enregistrez la clé dans la tâche du Minergie Exporter sous Clé API (API-Key)

4\. Sous « Minergie target », saisissez l'ID de l'objet que vous avez reçu de Minergie et de sa base de données via la plateforme de labels.

5\. Associez les points de mesure pertinents de l'objet Minergie à un point de mesure du compte smart-me. Les compteurs totalisateurs peuvent être créés directement dans le Minergie Exporter.

6\. Lancez la transmission.

![Minergie Exporter – Figure 6](/img/schnittstellen-minergie-exporter/06.png)

## Fonctionnement et fréquence de l'export de données

L'exportateur de données transmet les données une fois par jour, par intervalles de 15 minutes.

Les données passées peuvent être rechargées à tout moment et écrasées dans la base de données Minergie.

Lorsque des données passées sont chargées, elles sont transmises progressivement, réparties sur les transmissions régulières. Plusieurs jours peuvent être nécessaires avant que toutes les données passées soient transmises.
