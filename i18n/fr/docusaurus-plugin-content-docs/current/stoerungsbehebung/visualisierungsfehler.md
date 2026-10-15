---
title: 'Erreurs de visualisation'
slug: '/stoerungsbehebung/visualisierungsfehler'
description: 'Cette section décrit les messages d''erreur connus en lien avec les visualisations ainsi que les solutions possibles.'
sidebar_label: 'Erreurs de visualisation'
---
Cette section décrit les messages d'erreur connus en lien avec les visualisations ainsi que les solutions possibles.

### L'utilisateur en lecture seule ne voit pas le flux d'énergie.

<div className="row">
<div className="col col--6">

Les données énergétiques ne sont pas affichées.

- Solution : menu Configuration des utilisateurs (Benutzerkonfiguration) --> S'assurer que l'utilisateur en lecture seule a accès aux compteurs qui génèrent le graphique. Il s'agit en règle générale des compteurs techniques (compteurs de bilan et compteurs solaires)

</div>
<div className="col col--6 text--center">

![Erreurs de visualisation – Illustration 1](/img/stoerungsbehebung-visualisierungsfehler/01.png)

![Erreurs de visualisation – Illustration 2](/img/stoerungsbehebung-visualisierungsfehler/02.png)

![Erreurs de visualisation – Illustration 3](/img/stoerungsbehebung-visualisierungsfehler/03.png)

</div>
</div>

### Les tarifs virtuels simples (appartement) s'affichent vides

L'affichage ne fonctionne pas ou s'affiche vide

- Solution 1 : vérifier que le calcul des tarifs virtuels (cadre bleu) ne présente aucune erreur dans smart-me Billing. [Messages d'erreur Billing](/stoerungsbehebung/billing-fehlermeldungen) 

- Solution 2 : s'assurer que c'est le dossier de l'appartement qui a été sélectionné. Si c'est le compteur qui est sélectionné, cela ne fonctionne pas.


![Erreurs de visualisation – Illustration 4](/img/stoerungsbehebung-visualisierungsfehler/04.png)

### Flux d'énergie simple

Les valeurs ne s'affichent pas correctement :

- Solution 1 : s'assurer que seuls deux des trois compteurs sont renseignés dans la configuration. Si les trois compteurs sont indiqués, l'affichage peut être erroné. Nous recommandons toujours, dans la mesure du possible, d'indiquer des mesures directes et non des compteurs virtuels

- Solution 2 : vérifier que les compteurs fournissent les valeurs correctes.


![Erreurs de visualisation – Illustration 5](/img/stoerungsbehebung-visualisierungsfehler/05.png)

<div className="row">
<div className="col col--8">

Le compteur PV était mal raccordé. Depuis qu'il a été raccordé correctement, le graphique n'est plus juste.

- Solution 1 : la flèche du graphique est déterminée par le relevé du compteur. Il suffit maintenant d'attendre que le relevé du compteur soit négatif.

</div>
<div className="col col--4 text--center">

![Erreurs de visualisation – Illustration 6](/img/stoerungsbehebung-visualisierungsfehler/06.png)

</div>
</div>

### Monitoring de la consommation et de la production

NaN% s'affiche

- Solution 1 : le compteur solaire n'a encore rien produit ce jour-là. Attendre 24 h ou sélectionner la période « Personnalisé » (Individuell) afin que le jour actuel soit affiché.


![Erreurs de visualisation – Illustration 7](/img/stoerungsbehebung-visualisierungsfehler/07.png)

### Le diagramme circulaire n'affiche pas tous les compteurs

Cela se produit lorsque seuls certains compteurs sont en ligne, par exemple depuis 7 jours : seuls ceux-ci sont alors affichés et les autres pas encore.

![Erreurs de visualisation – Illustration 8](/img/stoerungsbehebung-visualisierungsfehler/08.png)
