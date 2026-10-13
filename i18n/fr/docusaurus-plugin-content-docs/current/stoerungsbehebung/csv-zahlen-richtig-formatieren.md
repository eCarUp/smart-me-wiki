---
title: 'Formater correctement les nombres CSV'
slug: '/stoerungsbehebung/csv-zahlen-richtig-formatieren'
description: 'Vous ouvrez un fichier CSV dans Excel et les nombres...'
sidebar_label: 'Formater correctement les nombres CSV'
---
### Généralités

Vous ouvrez un fichier CSV dans Excel et les nombres... semblent erronés.

Le problème vient presque toujours de la confusion mondiale autour des séparateurs (c'est-à-dire la lutte entre 1.000,50, 1,000.50, 1'000.50 et 1000.50). Excel est malheureusement assez rigide sur ce point et attend, lors de l'importation, un format qui correspond exactement à vos paramètres régionaux du système.

Comme notre système smart-me ne peut pas encore exporter le format CSV parfait pour chaque région, une adaptation manuelle dans Excel est parfois nécessaire.

Vous trouverez ci-dessous deux solutions simples pour vous assurer qu'Excel affiche correctement vos données.

### Modifier le CSV avec Rechercher/Remplacer

- Sélectionnez toutes les valeurs mal formatées.

- Appuyez sur Ctrl+H


![Formater correctement les nombres CSV – illustration 1](/img/stoerungsbehebung-csv-zahlen-richtig-formatieren/01.png)

### Modifier le CSV avec Rechercher/Remplacer

- Appuyez sur Ctrl+H

- Rechercher "." (point)

- Remplacer par "" (rien)

- Remplacer tout

- Rechercher "," (virgule)

- Remplacer par "." (point)

- Remplacer tout


![Formater correctement les nombres CSV – illustration 2](/img/stoerungsbehebung-csv-zahlen-richtig-formatieren/02.png)

### Modifier les séparateurs de nombres dans Excel.

- Fichier

- Options Excel

- Options avancées

- Décochez Utiliser les séparateurs système

    - Séparateur décimal ,  (virgule)

    - Séparateur des milliers .  (point)


![Formater correctement les nombres CSV – illustration 3](/img/stoerungsbehebung-csv-zahlen-richtig-formatieren/03.png)
