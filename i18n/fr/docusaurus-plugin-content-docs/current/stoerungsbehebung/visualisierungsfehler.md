---
title: 'Erreurs de visualisation'
slug: '/stoerungsbehebung/visualisierungsfehler'
description: 'Cette section décrit les messages d''erreur connus en lien avec les visualisations ainsi que les solutions possibles.'
sidebar_label: 'Erreurs de visualisation'
---
Cette section décrit les messages d'erreur connus en lien avec les visualisations ainsi que les solutions possibles.

<details id="energiefluss-lese-user">
<summary>L'utilisateur en lecture seule ne voit pas le flux d'énergie.</summary>

<div className="row">
<div className="col col--6">

Les données énergétiques ne s'affichent pas.

- Solution : menu Configuration de l'utilisateur (Benutzerkonfiguration) --> Assurez-vous que l'utilisateur en lecture seule a accès aux compteurs qui génèrent le graphique. Il s'agit en général des compteurs techniques (compteurs de bilan et compteurs solaires)

</div>
<div className="col col--6 bild--mitte">

![Erreurs de visualisation – Illustration 1](/img/stoerungsbehebung-visualisierungsfehler/01.png)

![Erreurs de visualisation – Illustration 2](/img/stoerungsbehebung-visualisierungsfehler/02.png)

![Erreurs de visualisation – Illustration 3](/img/stoerungsbehebung-visualisierungsfehler/03.png)

</div>
</div>

</details>

<details id="virtuelle-tarife-leer">
<summary>Tarifs virtuels simples (appartement) (Einfache virtuelle Tarife (Wohnung)) s'affiche vide</summary>

L'affichage ne fonctionne pas ou s'affiche vide

- Solution 1 : vérifiez que, dans smart-me Billing, le calcul des tarifs virtuels (encadré bleu) ne présente aucune erreur. [Messages d'erreur Billing](/stoerungsbehebung/billing-fehlermeldungen) 

- Solution 2 : assurez-vous que c'est le dossier de l'appartement qui a été sélectionné. Si c'est le compteur qui est sélectionné, cela ne fonctionne pas.


![Erreurs de visualisation – Illustration 4](/img/stoerungsbehebung-visualisierungsfehler/04.png)

</details>

<details id="einfacher-energiefluss">
<summary>Flux d'énergie simple (Einfacher Energiefluss)</summary>

Les valeurs ne s'affichent pas correctement :

- Solution 1 : assurez-vous que seuls deux des trois compteurs sont renseignés dans la configuration. Si les trois compteurs sont indiqués, l'affichage peut être erroné. Nous recommandons toujours, dans la mesure du possible, d'indiquer des mesures directes et non des compteurs virtuels

- Solution 2 : vérifiez que les compteurs fournissent les bonnes valeurs.


![Erreurs de visualisation – Illustration 5](/img/stoerungsbehebung-visualisierungsfehler/05.png)

<div className="row">
<div className="col col--8">

Le compteur PV était mal raccordé. Depuis qu'il a été raccordé correctement, le graphique n'est plus juste.

- Solution 1 : la flèche du graphique est déterminée par le relevé du compteur. Il suffit maintenant d'attendre que le relevé du compteur soit négatif.

</div>
<div className="col col--4 bild--mitte">

![Erreurs de visualisation – Illustration 6](/img/stoerungsbehebung-visualisierungsfehler/06.png)

</div>
</div>

</details>

<details id="verbrauch-produktion-monitoring">
<summary>Monitoring de la consommation et de la production (Verbrauchs und Produktions Monitoring)</summary>

NaN% s'affiche

- Solution 1 : le compteur solaire n'a encore rien produit ce jour-là. Attendez 24h ou sélectionnez la période « Individuel » ("Individuell") afin que la journée en cours s'affiche.


![Erreurs de visualisation – Illustration 7](/img/stoerungsbehebung-visualisierungsfehler/07.png)

</details>

<details id="kuchendiagramm-unvollstaendig">
<summary>Le diagramme circulaire n'affiche pas tous les compteurs</summary>

Cela se produit lorsque seuls certains compteurs sont en ligne depuis, par exemple, 7 jours : seuls ceux-ci s'affichent alors, et les autres pas encore.

![Erreurs de visualisation – Illustration 8](/img/stoerungsbehebung-visualisierungsfehler/08.png)

</details>
