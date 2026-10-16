---
title: 'Schéma de mesure MKD3 (participation partielle)'
slug: '/planung/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tarification du schéma de mesure MKD3 avec des non-participants'
sidebar_label: 'Schéma de mesure MKD3 (non-participants)'
---
![Schéma de mesure MKD3 (avec non-participants) – Illustration 1](/img/planung-mkd3-messkonzept-nicht-teilnehmer/01.png)

## Tarification du schéma de mesure MKD3 avec des non-participants

La tarification du schéma de mesure s'effectue exclusivement à partir de la production et des participants à l'électricité pour les locataires

### Tarification avec tarif solaire incl. RCP virtuel (vRCP)

Le compteur de bilan est ignoré pour le calcul de la tarification ; il n'est pris en compte que plus tard, à des fins de vérification.

L'utilisation du tarif solaire incl. vRCP n'entraîne aucune licence supplémentaire pour les compteurs virtuels.

Compteur de bilan

Tous les logements / places de parc et productions participants en tant que compteurs de bilan.

![Schéma de mesure MKD3 (avec non-participants) – Illustration 2](/img/planung-mkd3-messkonzept-nicht-teilnehmer/02.png)

Compteur de production

Saisir tous les compteurs de production en tant que production


![Schéma de mesure MKD3 (avec non-participants) – Illustration 3](/img/planung-mkd3-messkonzept-nicht-teilnehmer/03.png)

### Tarification au moyen du tarif solaire (consommation / PV) avec ou sans tarif batterie (consommation / batterie)

Le compteur de bilan est ignoré pour le calcul de la tarification ; il n'est pris en compte que plus tard, à des fins de vérification.

L'utilisation du tarif solaire (consommation / PV) entraîne des licences supplémentaires pour les compteurs virtuels.

La consommation totale est requise au minimum. Elle est créée en tant que compteur virtuel composé de tous les départs participants de l'électricité pour les locataires.

Consommation totale = Logement 1.1 + Logement 1.2 + Parties communes + Place de parc 1 + Place de parc 2 + Pompe à chaleur

Sous Production, on ajoute à chaque fois le compteur de l'installation solaire, ou le compteur de batterie dans le cas du tarif batterie.

Pour la consommation totale, on renseigne la consommation totale créée virtuellement.

Le compteur de bilan n'est volontairement pas référencé, afin de ne pas corriger à tort le bilan virtuel !

![Schéma de mesure MKD3 (avec non-participants) – Illustration 4](/img/planung-mkd3-messkonzept-nicht-teilnehmer/04.png)

## Bilan et validation du MKD3

![Schéma de mesure MKD3 (avec non-participants) – Illustration 5](/img/planung-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Bilan

La quantité d'électricité du réseau vendue ne correspond pas à la valeur de la facture du fournisseur d'électricité, et la quantité injectée ne correspond pas à la valeur enregistrée par le compteur de bilan.

Avec le MKD3, la rétribution pour les non-participants s'effectue une seule fois par période, au cours de la période de décompte.

Justification de l'écart

Le calcul et la répartition dans smart-me déterminent le soutirage et la consommation des participants par intervalles de 15 minutes. Cela permet d'identifier sans ambiguïté qui soutire de l'électricité, quand, de quelle source et en quelle quantité.

Exemple :

Si, à un instant X, 100 kWh d'électricité solaire sont produits en 15 minutes et que les membres de l'électricité pour les locataires soutirent ensemble 0 kWh, tandis que les non-participants soutirent 100 kWh, aucune électricité solaire n'est soutirée par les membres de l'électricité pour les locataires à cet instant.

Le bilan virtuel de l'électricité pour les locataires calcule donc logiquement 0 kWh de soutirage et 100 kWh d'excédent.
Le compteur de bilan physique mesure en revanche 0 kWh de soutirage et 0 kWh d'excédent, car les non-participants ont directement consommé toute la production.

Le calcul de compensation des fournisseurs d'électricité suit la règle suivante :

Import compensé du bilan de l'électricité pour les locataires = valeur d'import du compteur de bilan - soutirage importé des non-participants
\--> Si l'import devient &lt; 0 du fait de la compensation, le reste de la déduction est ajouté à l'export du bilan.

Pour ces 15 minutes, cela donnerait donc :
Import compensé du bilan = valeur de bilan 0 kWh - soutirage des non-participants 100 kWh --> soutirage 0 kWh (delta 100 kWh restant)

Export compensé du bilan = 0 kWh + 100 kWh = 100 kWh

Comme la compensation n'a, selon le cas, pas lieu toutes les 15 minutes mais une seule fois par période, cela donne des valeurs différentes pour la validation !

### Validation

Si la compensation est effectuée toutes les 15 minutes par le fournisseur d'électricité :

Si cette compensation est effectuée par le fournisseur d'électricité sur une base de 15 minutes, le résultat du bilan virtuel de smart-me est identique au bilan du fournisseur d'électricité.

Validation

- Valeur totale de l'électricité du réseau facturée = somme de la valeur de l'électricité du réseau vendue dans l'électricité pour les locataires

- Somme de l'électricité solaire vendue en interne = production - quantité injectée (facture du fournisseur d'électricité)




Si la compensation est effectuée 1x par période par le fournisseur d'électricité :

Si la compensation est effectuée une seule fois par le fournisseur d'électricité, p. ex. par mois, des écarts plus importants apparaissent entre les valeurs du fournisseur d'électricité et les quantités d'énergie que nous avons vendues. La validation demande alors un peu plus d'habitude.

Justification :

Si la compensation est effectuée une seule fois par mois avec le soutirage total des non-participants, il n'est pas tenu compte du fait que les non-participants ont été effectivement approvisionnés par le producteur local, ni dans quelle mesure, ni de la modification du bilan virtuel qui en résulte.

En parallèle, le système calcule pour les participants à l'électricité pour les locataires, de manière cohérente avec l'utilisation et la disponibilité de la production au moment opportun, la valeur effectivement soutirée de chaque source. (Il tient compte du fait que de l'électricité issue de la production actuelle a effectivement été prélevée par les participants à l'électricité pour les locataires ou que de l'électricité du réseau a en réalité été soutirée pour couvrir les besoins)

Comme deux mondes (temporels) s'affrontent ici, on n'obtient jamais le même résultat qui permettrait une comparaison simple.

Constat

Si la compensation a lieu 1x par mois, l'intégralité de la consommation des non-participants est rétribuée en tant qu'électricité du réseau.
\--> C'est en principe avantageux pour le fournisseur d'électricité pour les locataires. (Une surcompensation de la part du fournisseur d'électricité a forcément lieu)

Exemple de compensation mensuelle :

Mesure d'import du bilan = 100 KWh

Mesure d'export du bilan = 50 kWh

Soutirage total des non-participants = 100 kWh

Soutirage total des participants à l'électricité pour les locataires = 100 kWh

Production = 250 kWh

Dans cet exemple, le soutirage total des non-participants est déduit de la mesure du bilan :

Soutirage du réseau facturé par le fournisseur d'électricité = import du bilan 100 kWh - soutirage total des non-participants 100 kWh = soutirage 0kWh

Dans ce cas, aucune électricité du réseau ne nous est facturée pour l'électricité pour les locataires, bien que les participants à l'électricité pour les locataires aient assurément soutiré de l'électricité du réseau au cours du mois (p. ex. soutirage d'électricité la nuit).

L'électricité du réseau est donc toujours surcompensée dans ce cas.
L'export du bilan, en revanche, n'est pas correctement ajusté en conséquence et est donc toujours trop bas.

Au lieu de la rétribution de l'injection pour cette quantité, nous obtenons le tarif de l'électricité du réseau sous forme de rabais.

Validation

- Le soutirage du réseau facturé par le fournisseur d'électricité est toujours inférieur à la quantité d'électricité du réseau que nous avons facturée. (Recettes supplémentaires)

- La quantité injectée du fournisseur d'électricité correspond à la valeur d'export du compteur de bilan physique et est inférieure à la quantité calculée du bilan virtuel. (Perte due à l'absence de rétribution)

- La quantité injectée rétribuée et la quantité documentée par le fournisseur d'électricité pour le supplément d'électricité pour les locataires correspondent à la quantité totale de production.


\--> La surcompensation est dans tous les cas profitable à l'exploitant de l'électricité pour les locataires.
