---
title: 'Erreurs de visualisation'
slug: '/stoerungsbehebung/visualisierungsfehler'
description: 'Cette section décrit les messages d''erreur connus en lien avec les visualisations ainsi que les pistes de solution possibles.'
sidebar_label: 'Erreurs de visualisation'
---
Cette section décrit les messages d'erreur connus en lien avec les visualisations ainsi que les pistes de solution possibles.

### L'utilisateur en lecture ne voit pas le flux d'énergie.

Les données énergétiques ne sont pas affichées.

- Solution : menu Configuration des utilisateurs (Benutzerkonfiguration) --> s'assurer que l'utilisateur en lecture a accès aux compteurs qui génèrent le graphique. En règle générale, il s'agit des compteurs techniques (compteurs de bilan et compteurs solaires)


![Erreurs de visualisation – illustration 1](/img/stoerungsbehebung-visualisierungsfehler/01.png)

![Erreurs de visualisation – illustration 2](/img/stoerungsbehebung-visualisierungsfehler/02.png)

![Erreurs de visualisation – illustration 3](/img/stoerungsbehebung-visualisierungsfehler/03.png)

### Les tarifs virtuels simples (appartement) s'affichent vides

L'affichage ne fonctionne pas ou reste vide

- Solution 1 : vérifier que le calcul des tarifs virtuels (cadre bleu) dans smart-me Billing ne comporte pas d'erreur. [Messages d'erreur Billing](/stoerungsbehebung/billing-fehlermeldungen) 

- Solution 2 : s'assurer que le dossier de l'appartement a été sélectionné. Si le compteur est sélectionné, cela ne fonctionne pas.


![Erreurs de visualisation – illustration 4](/img/stoerungsbehebung-visualisierungsfehler/04.png)

### Flux d'énergie simple

Les valeurs ne sont pas affichées correctement :

- Solution 1 : s'assurer que seuls deux des trois compteurs sont enregistrés dans la configuration. Si les trois compteurs sont indiqués, des affichages erronés peuvent apparaître. Nous recommandons toujours, si possible, d'indiquer des mesures directes et non des compteurs virtuels

- Solution 2 : vérifier si les compteurs fournissent les valeurs correctes.


![Erreurs de visualisation – illustration 5](/img/stoerungsbehebung-visualisierungsfehler/05.png)

Le compteur PV était mal raccordé. Après l'avoir raccordé correctement, le graphique n'est plus correct.

- Solution 1 : la flèche du graphique est déterminée par le relevé du compteur. Il suffit maintenant d'attendre jusqu'à ce que le relevé du compteur soit négatif.


![Erreurs de visualisation – illustration 6](/img/stoerungsbehebung-visualisierungsfehler/06.png)

### Monitoring de la consommation et de la production

NaN% est affiché

- Solution 1 : le compteur solaire n'a encore rien produit ce jour-là. Attendre 24 h ou choisir la période « Individuel » (Individuell) afin que le jour actuel soit affiché.


![Erreurs de visualisation – illustration 7](/img/stoerungsbehebung-visualisierungsfehler/07.png)

### Le diagramme circulaire n'affiche pas tous les compteurs

Cela se produit lorsque seuls certains compteurs sont en ligne depuis p. ex. 7 jours ; seuls ceux-ci sont alors affichés et pas encore les autres.

![Erreurs de visualisation – illustration 8](/img/stoerungsbehebung-visualisierungsfehler/08.png)
