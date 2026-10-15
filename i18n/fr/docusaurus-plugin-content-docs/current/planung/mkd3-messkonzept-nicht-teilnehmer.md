---
title: 'Schéma de mesure MKD3 (avec non-participants)'
slug: '/planung/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tarification du schéma de mesure MKD3 avec des non-participants'
sidebar_label: 'Schéma de mesure MKD3 (non-participants)'
---
![Schéma de mesure MKD3 (avec non-participants) – figure 1](/img/planung-mkd3-messkonzept-nicht-teilnehmer/01.png)

## Tarification du schéma de mesure MKD3 avec des non-participants

La tarification du schéma de mesure se fait exclusivement à partir de la production et des participants à l'électricité pour les locataires

### Tarification avec le tarif solaire RCP virtuel inclus (Solartarif inkl. vZEV)

Le compteur de bilan est ignoré pour le calcul de la tarification ; il n'est pris en compte que plus tard, à des fins de vérification.

Avec le tarif solaire RCP virtuel inclus (Solartarif inkl. vZEV), aucune licence supplémentaire pour compteurs virtuels n'est due.

Compteur de bilan (Bilanzzähler)

Tous les logements / places de stationnement participants et toutes les productions en tant que compteurs de bilan.

![Schéma de mesure MKD3 (avec non-participants) – figure 2](/img/planung-mkd3-messkonzept-nicht-teilnehmer/02.png)

Compteur de production (Produktionszähler)

Saisir tous les compteurs de production en tant que production (Produktion)


![Schéma de mesure MKD3 (avec non-participants) – figure 3](/img/planung-mkd3-messkonzept-nicht-teilnehmer/03.png)

### Tarification au moyen du tarif solaire (consommation / PV) (Solartarif (Verbrauch / PV)) avec ou sans tarif batterie (consommation / batterie) (Batterietarif (Verbrauch / Batterie))

Le compteur de bilan est ignoré pour le calcul de la tarification ; il n'est pris en compte que plus tard, à des fins de vérification.

Avec le tarif solaire (consommation / PV) (Solartarif (Verbrauch / PV)), des licences supplémentaires pour compteurs virtuels sont dues.

La consommation totale est requise au minimum. Elle est créée en tant que compteur virtuel composé de tous les départs participants de l'électricité pour les locataires.

Consommation totale = logement 1.1 + logement 1.2 + parties communes + place de stationnement 1 + place de stationnement 2 + pompe à chaleur

Sous Production (Produktion), on ajoute à chaque fois le compteur de l'installation solaire ou, pour le tarif batterie, le compteur de la batterie.

Sous Consommation totale (Gesamtverbrauch), on renseigne la consommation totale créée virtuellement.

Le compteur de bilan n'est volontairement pas référencé, afin de ne pas corriger à tort le bilan virtuel !

![Schéma de mesure MKD3 (avec non-participants) – figure 4](/img/planung-mkd3-messkonzept-nicht-teilnehmer/04.png)

## Bilan et validation du MKD3

![Schéma de mesure MKD3 (avec non-participants) – figure 5](/img/planung-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Bilan

La quantité d'électricité du réseau vendue ne correspond pas à la valeur de la facture du fournisseur d'électricité, et la quantité réinjectée ne correspond pas à la valeur enregistrée par le compteur de bilan.

Dans le MKD3, la rétribution pour les non-participants se fait une seule fois par période, dans la période de décompte.

Justification de l'écart

Le calcul et la répartition dans smart-me déterminent le soutirage et la consommation des participants par intervalles de 15 minutes. Cela permet d'identifier clairement qui soutire de l'électricité, quand, de quelle source et en quelle quantité.

Exemple :

Si, à un instant X, 100 kWh d'électricité solaire sont produits en 15 minutes et que les membres de l'électricité pour les locataires soutirent ensemble 0 kWh, tandis que les non-participants soutirent 100 kWh, aucune électricité solaire n'est soutirée par les membres de l'électricité pour les locataires à cet instant.

Le bilan virtuel de l'électricité pour les locataires calcule donc logiquement 0 kWh de soutirage et 100 kWh d'excédent.
Le compteur de bilan physique mesure en revanche 0 kWh de soutirage et 0 kWh d'excédent, car les non-participants ont consommé directement toute la production.

Le calcul de compensation des fournisseurs d'électricité suit la règle suivante :

Import compensé du bilan de l'électricité pour les locataires = valeur d'import du compteur de bilan - soutirage import des non-participants
\--> Si l'import devient &lt; 0 du fait de la compensation, le reste de la déduction est ajouté à l'export du bilan.

Pour ces 15 minutes, cela donnerait donc :
Import compensé du bilan = valeur de bilan 0 kWh - soutirage des non-participants 100 kWh --> soutirage 0 kWh (delta 100 kWh restant)

Export compensé du bilan = 0 kWh + 100 kWh = 100 kWh

Comme la compensation n'a, selon les cas, pas lieu toutes les 15 minutes mais une seule fois par période, il en résulte des valeurs différentes pour la validation !

### Validation

Si le fournisseur d'électricité effectue la compensation toutes les 15 minutes :

Si le fournisseur d'électricité effectue cette compensation sur une base de 15 minutes, le résultat du bilan virtuel de smart-me est identique au bilan du fournisseur d'électricité.

Validation

- Valeur totale facturée de l'électricité du réseau = somme de la valeur de l'électricité du réseau vendue dans l'électricité pour les locataires

- Somme de l'électricité solaire vendue en interne = production - quantité injectée (facture du fournisseur d'électricité)




Si le fournisseur d'électricité effectue la compensation 1x par période :

Si le fournisseur d'électricité effectue la compensation une seule fois, p. ex. par mois, des écarts plus importants apparaissent entre les valeurs du fournisseur d'électricité et les quantités d'énergie que nous avons vendues. La validation demande alors un certain temps d'adaptation.

Justification :

Si la compensation est effectuée une seule fois par mois avec le soutirage total des non-participants, il n'est pas tenu compte du fait que les non-participants ont été approvisionnés ou non par le producteur local, ni dans quelle mesure, ce qui a modifié le bilan virtuel.

Parallèlement, le système calcule logiquement pour les participants à l'électricité pour les locataires la valeur effectivement soutirée de chaque source, en fonction de l'utilisation et de la disponibilité de la production au moment voulu. (Il tient compte du fait que de l'électricité issue de la production actuelle a réellement été consommée par des participants à l'électricité pour les locataires ou que de l'électricité du réseau a en fait été soutirée pour couvrir les besoins)

Comme deux mondes (temporels) se heurtent ici, on n'obtient jamais le même résultat qui permettrait une comparaison simple.

Constat

Si la compensation a lieu 1x par mois, la totalité de la consommation des non-participants est rétribuée en tant qu'électricité du réseau.
\--> C'est en principe avantageux pour le fournisseur d'électricité pour les locataires. (Il y a forcément une surcompensation de la part du fournisseur d'électricité)

Exemple de compensation mensuelle :

Mesure import du bilan = 100 KWh

Mesure export du bilan = 50 kWh

Soutirage total des non-participants = 100 kWh

Soutirage total des participants à l'électricité pour les locataires = 100 kWh

Production = 250 kWh

Dans cet exemple, le soutirage total des non-participants est maintenant déduit de la mesure du bilan :

Soutirage du réseau facturé par le fournisseur d'électricité = import du bilan 100 kWh - soutirage total des non-participants 100 kWh = soutirage 0kWh

Dans ce cas, aucune électricité du réseau ne nous est facturée pour l'électricité pour les locataires, bien que les participants à l'électricité pour les locataires aient forcément soutiré de l'électricité du réseau au cours du mois (p. ex. soutirage d'électricité la nuit).

L'électricité du réseau est donc toujours surcompensée dans ce cas.
L'export du bilan, en revanche, n'est pas corrigé en conséquence et est donc toujours trop bas.

Au lieu de la rétribution de l'injection pour cette quantité, nous obtenons le tarif de l'électricité du réseau sous forme de rabais.

Validation

- Le soutirage du réseau facturé par le fournisseur d'électricité est toujours inférieur à la quantité d'électricité du réseau que nous facturons. (Recettes supplémentaires)

- La quantité injectée du fournisseur d'électricité correspond à la valeur d'export du compteur de bilan physique et est inférieure à la quantité calculée du bilan virtuel. (Perte due à l'absence de rétribution)

- La quantité injectée rétribuée et la quantité documentée par le fournisseur d'électricité pour le supplément d'électricité pour les locataires correspondent à la quantité totale de production.


\--> La surcompensation est dans tous les cas profitable à l'exploitant de l'électricité pour les locataires.
