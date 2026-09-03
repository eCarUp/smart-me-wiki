---
title: 'CSV Zahlen richtig Formatieren'
slug: '/stoerungsbehebung/csv-zahlen-richtig-formatieren'
description: 'Vous ouvrez un fichier CSV dans Excel et les chiffres...'
sidebar_label: 'Formater correctement les chiffres CSV'
---
### Généralités

Vous ouvrez un fichier CSV dans Excel et les chiffres... ont l'air cassés.

Le problème vient presque toujours du désordre mondial en matière de séparateurs (c'est-à-dire la lutte entre 1.000,50, 1,000.50, 1'000.50 et 1000.50). Excel est malheureusement un peu têtu sur ce point et attend, lors de l'importation, un format qui correspond exactement aux paramètres régionaux de votre système.

Comme notre système smart-me n'est actuellement pas encore en mesure d'exporter le format CSV parfait pour chaque région, une adaptation manuelle dans Excel est parfois nécessaire.

Vous trouverez ci-dessous deux solutions simples qui vous permettent de vous assurer qu'Excel affiche correctement vos données.

### Modifier le CSV avec Rechercher/Remplacer

- Sélectionner toutes les valeurs qui sont mal formatées.

- Appuyer sur Ctrl+H


![Formater correctement les chiffres CSV – illustration 1](/img/stoerungsbehebung-csv-zahlen-richtig-formatieren/01.png)

### Modifier le CSV avec Rechercher/Remplacer

- Appuyer sur Ctrl+H

- Rechercher "." (point)

- Remplacer par "" (rien)

- Remplacer tout

- Rechercher "," (virgule)

- Remplacer par "." (point)

- Remplacer tout


![Formater correctement les chiffres CSV – illustration 2](/img/stoerungsbehebung-csv-zahlen-richtig-formatieren/02.png)

### Modifier les séparateurs des chiffres dans Excel.

- Fichier

- Options Excel

- Avancé

- Décocher Utiliser les séparateurs du système (Trennzeichen vom Betriebssystem übernehmen)

    - Séparateur décimal ,  (virgule)

    - Séparateur des milliers .  (point)


![Formater correctement les chiffres CSV – illustration 3](/img/stoerungsbehebung-csv-zahlen-richtig-formatieren/03.png)
