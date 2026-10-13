---
title: 'Schéma de mesure MKD3 (avec non-participants)'
slug: '/planung/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tarification du schéma de mesure MKD3 avec des non-participants'
sidebar_label: 'Schéma de mesure MKD3 (non-participants)'
---
![Schéma de mesure MKD3 (avec non-participants) – figure 1](/img/planung-mkd3-messkonzept-nicht-teilnehmer/01.png)

## Tarification du schéma de mesure MKD3 avec des non-participants

La tarification du schéma de mesure s'effectue exclusivement à partir de la production et des participants à l'électricité pour les locataires

### Tarification avec le tarif solaire incl. RCP virtuel (vRCP)

Le compteur de bilan est ignoré pour le calcul de la tarification ; il n'est pris en compte que plus tard, à des fins de vérification.

Avec le tarif solaire incl. vRCP, aucune licence supplémentaire pour des compteurs virtuels n'est due.

Compteur de bilan (Bilanzzähler)

Tous les appartements / places de stationnement participants et toutes les productions en tant que compteurs de bilan.

![Schéma de mesure MKD3 (avec non-participants) – figure 2](/img/planung-mkd3-messkonzept-nicht-teilnehmer/02.png)

Compteur de production (Produktionszähler)

Saisir tous les compteurs de production comme production (Produktion)


![Schéma de mesure MKD3 (avec non-participants) – figure 3](/img/planung-mkd3-messkonzept-nicht-teilnehmer/03.png)

### Tarification au moyen du tarif solaire (consommation / PV) avec ou sans tarif batterie (consommation / batterie)

Le compteur de bilan est ignoré pour le calcul de la tarification ; il n'est pris en compte que plus tard, à des fins de vérification.

Avec le tarif solaire (consommation / PV), des licences supplémentaires pour des compteurs virtuels sont dues.

La consommation totale est requise au minimum. Elle est créée comme compteur virtuel composé de tous les départs participants à l'électricité pour les locataires.

Consommation totale = appartement 1.1 + appartement 1.2 + parties communes + place de stationnement 1 + place de stationnement 2 + pompe à chaleur

Sous Production (Produktion), ajoutez à chaque fois le compteur de l'installation solaire ou, pour le tarif batterie, le compteur de la batterie.

Sous Consommation totale (Gesamtverbrauch), indiquez la consommation totale créée virtuellement.

Le compteur de bilan n'est volontairement pas référencé, afin de ne pas corriger à tort le bilan virtuel !

![Schéma de mesure MKD3 (avec non-participants) – figure 4](/img/planung-mkd3-messkonzept-nicht-teilnehmer/04.png)

## Bilan et validation du MKD3

![Schéma de mesure MKD3 (avec non-participants) – figure 5](/img/planung-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Bilan

La quantité d'électricité du réseau vendue ne correspond pas à la valeur de la facture du fournisseur d'énergie, et la quantité réinjectée ne correspond pas à la valeur enregistrée par le compteur de bilan.

Avec le MKD3, la rétribution pour les non-participants s'effectue une seule fois par période de décompte.

Justification de l'écart

Le calcul et la répartition dans smart-me déterminent le soutirage et la consommation des participants par intervalles de 15 minutes. Il est ainsi possible d'identifier clairement qui soutire de l'électricité, quand, de quelle source et en quelle quantité.

Exemple :

Si, à un instant X, 100 kWh d'électricité solaire sont produits en 15 minutes et que les membres de l'électricité pour les locataires soutirent ensemble 0 kWh, tandis que les non-participants soutirent 100 kWh, les membres de l'électricité pour les locataires ne soutirent à cet instant aucune électricité solaire.

Le bilan virtuel de l'électricité pour les locataires calcule donc logiquement 0 kWh de soutirage et 100 kWh d'excédent.
Le compteur de bilan physique mesure en revanche 0 kWh de soutirage et 0 kWh d'excédent, car les non-participants ont consommé directement toute la production.

Le calcul de compensation des fournisseurs d'énergie suit la règle suivante :

Importation compensée du bilan de l'électricité pour les locataires = valeur d'importation du compteur de bilan - soutirage importé des non-participants
\--> Si l'importation devient &lt; 0 du fait de la compensation, le reste de la déduction est ajouté à l'exportation du bilan.

Pour ces 15 minutes, cela se présenterait donc ainsi :
Importation compensée du bilan = valeur du bilan 0 kWh - soutirage des non-participants 100 kWh --> soutirage 0 kWh (delta 100 kWh restant)

Exportation compensée du bilan = 0 kWh + 100 kWh = 100 kWh

Comme la compensation, selon le cas, ne s'effectue pas toutes les 15 minutes mais une seule fois par période, il en résulte des valeurs différentes pour la validation !

### Validation

Si le fournisseur d'énergie effectue la compensation par intervalles de 15 minutes :

Si le fournisseur d'énergie effectue cette compensation sur une base de 15 minutes, le résultat du bilan virtuel de smart-me est identique au bilan du fournisseur d'énergie.

Validation

- Valeur totale de l'électricité du réseau facturée = somme de la valeur de l'électricité du réseau vendue dans le cadre de l'électricité pour les locataires

- Somme de l'électricité solaire vendue en interne = production - quantité injectée (facture du fournisseur d'énergie)




Si le fournisseur d'énergie effectue la compensation une fois par période :

Si le fournisseur d'énergie effectue la compensation une seule fois, p. ex. par mois, des écarts plus importants apparaissent entre les valeurs du fournisseur d'énergie et les quantités d'énergie que nous avons vendues. La validation demande alors un peu plus d'habitude.

Justification :

Si la compensation est effectuée une seule fois par mois avec le soutirage total des non-participants, il n'est pas tenu compte du fait que les non-participants ont été ou non approvisionnés par le producteur local, ni dans quelle mesure, ni de la modification du bilan virtuel qui en résulte.

Parallèlement, le système calcule pour les participants à l'électricité pour les locataires, en toute logique selon l'utilisation et la disponibilité de la production en temps réel, la valeur effectivement soutirée de chaque source. (Il tient compte du fait que de l'électricité issue de la production actuelle a réellement été prélevée par des participants à l'électricité pour les locataires ou que de l'électricité du réseau a en fait été soutirée pour couvrir les besoins)

Comme deux mondes s'opposent ici (sur le plan temporel), on n'obtient jamais le même résultat qui permettrait une comparaison simple.

Constat

Si la compensation a lieu une fois par mois, toute la consommation des non-participants est rétribuée comme électricité du réseau.
\--> C'est en principe avantageux pour le fournisseur d'électricité pour les locataires. (Il en résulte obligatoirement une surcompensation de la part du fournisseur d'énergie)

Exemple de compensation mensuelle :

Importation mesurée du bilan = 100 KWh

Exportation mesurée du bilan = 50 kWh

Soutirage total des non-participants = 100 kWh

Soutirage total des participants à l'électricité pour les locataires = 100 kWh

Production = 250 kWh

Dans cet exemple, le soutirage total des non-participants est déduit de la mesure du bilan :

Soutirage du réseau facturé par le fournisseur d'énergie = importation du bilan 100 kWh - soutirage total des non-participants 100 kWh = soutirage 0kWh

Dans ce cas, aucune électricité du réseau ne nous est facturée pour l'électricité pour les locataires, bien que les participants à l'électricité pour les locataires présentent assurément un soutirage d'électricité du réseau sur le mois (p. ex. soutirage d'électricité la nuit).

L'électricité du réseau est donc toujours surcompensée dans ce cas.
L'exportation du bilan, en revanche, n'est pas correctement ajustée et est par conséquent toujours trop basse.

Au lieu de la rétribution de l'injection pour cette quantité, nous obtenons le tarif de l'électricité du réseau sous forme de rabais.

Validation

- Le soutirage du réseau facturé par le fournisseur d'énergie est toujours inférieur à la quantité d'électricité du réseau que nous facturons. (Recettes supplémentaires)

- La quantité injectée du fournisseur d'énergie correspond à la valeur d'exportation du compteur de bilan physique et est inférieure à la quantité calculée du bilan virtuel. (Perte due à l'absence de rétribution)

- La quantité injectée rétribuée et la quantité documentée par le fournisseur d'énergie pour le supplément pour l'électricité des locataires correspondent à la quantité de production totale.


\--> La surcompensation est dans tous les cas profitable à l'exploitant de l'électricité pour les locataires.
