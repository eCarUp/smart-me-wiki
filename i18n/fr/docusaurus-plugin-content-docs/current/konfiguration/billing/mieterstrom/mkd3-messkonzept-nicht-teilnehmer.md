---
title: 'Schéma de mesure MKD3 (avec non-participants)'
slug: '/konfiguration/billing/mieterstrom/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tarification du schéma de mesure MKD3 avec des non-participants'
sidebar_label: 'Schéma de mesure MKD3 (non-participants)'
---
![Schéma de mesure MKD3 (avec non-participants) – Figure 1](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/01.png)

## Tarification du schéma de mesure MKD3 avec des non-participants

La tarification du schéma de mesure se fait exclusivement à partir de la production et des participants à l'électricité pour les locataires

### Tarification avec le tarif solaire incl. RCP virtuel (vRCP)

Le compteur de bilan est ignoré pour le calcul de la tarification ; il n'est pris en compte que plus tard, pour la vérification.

Avec le tarif solaire incl. vRCP (Solartarif inkl. vZEV), aucune licence supplémentaire pour des compteurs virtuels n'est facturée.

Compteur de bilan (Bilanzzähler)

Tous les appartements / places de parc participants et les productions en tant que compteurs de bilan.

![Schéma de mesure MKD3 (avec non-participants) – Figure 2](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/02.png)

Compteur de production (Produktionszähler)

Saisir tous les compteurs de production en tant que production (Produktion)


![Schéma de mesure MKD3 (avec non-participants) – Figure 3](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/03.png)

### Tarification au moyen du tarif solaire (consommation / PV) avec ou sans tarif batterie (consommation / batterie)

Le compteur de bilan est ignoré pour le calcul de la tarification ; il n'est pris en compte que plus tard, pour la vérification.

Avec le tarif solaire (consommation / PV), des licences supplémentaires pour des compteurs virtuels sont facturées.

La consommation totale est au minimum nécessaire. Elle est créée en tant que compteur virtuel composé de tous les départs participant à l'électricité pour les locataires.

Consommation totale = Appartement 1.1 + Appartement 1.2 + Parties communes + Place de parc 1 + Place de parc 2 + Pompe à chaleur

Sous Production (Produktion), on ajoute à chaque fois le compteur de l'installation solaire, ou le compteur de batterie dans le cas du tarif batterie.

Sous Consommation totale (Gesamtverbrauch), on enregistre la consommation totale créée virtuellement.

Le compteur de bilan n'est volontairement pas référencé, afin de ne pas corriger à tort le bilan virtuel !

![Schéma de mesure MKD3 (avec non-participants) – Figure 4](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/04.png)

## Bilan et validation du MKD3

![Schéma de mesure MKD3 (avec non-participants) – Figure 5](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Bilan

La quantité d'électricité du réseau vendue ne correspond pas à la valeur de la facture du fournisseur d'énergie, et la quantité injectée ne correspond pas à la valeur enregistrée par le compteur de bilan.

Avec le MKD3, la rétribution pour les non-participants se fait de manière périodique, une seule fois par période de décompte.

Justification de l'écart

Le calcul et la répartition dans smart-me déterminent le soutirage et la consommation des participants par intervalles de 15 minutes. Cela permet d'identifier clairement qui soutire de l'électricité, quand, de quelle source et en quelle quantité.

Exemple :

Si, à un instant X, 100 kWh d'électricité solaire sont produits en 15 minutes et que les membres de l'électricité pour les locataires soutirent ensemble 0 kWh, tandis que les non-participants soutirent 100 kWh, aucune électricité solaire n'est soutirée à cet instant par les membres de l'électricité pour les locataires.

Le bilan virtuel de l'électricité pour les locataires calcule donc logiquement 0 kWh de soutirage et 100 kWh d'excédent.
Le compteur de bilan physique mesure en revanche 0 kWh de soutirage et 0 kWh d'excédent, car les non-participants ont consommé directement toute la production.

Le calcul de compensation des fournisseurs d'énergie suit la règle suivante :

Import compensé du bilan de l'électricité pour les locataires = valeur d'import du compteur de bilan - soutirage (import) des non-participants
\--> Si l'import devient &lt; 0 du fait de la compensation, le reste de la déduction est ajouté à l'export du bilan.

Pour ces 15 minutes, cela donnerait donc :
Import du bilan compensé = valeur de bilan 0 kWh - soutirage des non-participants 100 kWh --> soutirage 0 kWh (reste delta 100 kWh)

Export du bilan compensé = 0 kWh + 100 kWh = 100 kWh

Comme la compensation, selon le cas, n'a pas lieu toutes les 15 minutes mais une seule fois par période, il en résulte des valeurs différentes pour la validation !

### Validation

Si le fournisseur d'énergie effectue la compensation par intervalles de 15 minutes :

Si le fournisseur d'énergie effectue cette compensation sur une base de 15 minutes, le résultat du bilan virtuel de smart-me est identique au bilan du fournisseur d'énergie.

Validation

- Valeur totale de l'électricité du réseau facturée = somme de la valeur de l'électricité du réseau vendue dans l'électricité pour les locataires

- Somme de l'électricité solaire vendue en interne = production - quantité injectée (facture du fournisseur d'énergie)




Si le fournisseur d'énergie effectue la compensation 1x par période :

Si le fournisseur d'énergie effectue la compensation une seule fois, p. ex. par mois, des écarts plus importants apparaissent entre les valeurs du fournisseur d'énergie et les quantités d'énergie que nous avons vendues. La validation demande alors un peu plus d'habitude.

Justification :

Si la compensation est effectuée une fois par mois avec le soutirage total des non-participants, il n'est pas tenu compte du fait que les non-participants ont été ou non approvisionnés par le producteur local, ni dans quelle mesure, ni de la modification du bilan virtuel qui en résulte.

Parallèlement, le système calcule logiquement pour les participants à l'électricité pour les locataires, en fonction de l'utilisation et de la disponibilité de la production au moment considéré, la valeur effectivement soutirée de chaque source. (Il tient compte du fait que l'électricité de la production actuelle a effectivement été prélevée par les participants à l'électricité pour les locataires ou que de l'électricité du réseau a en réalité été soutirée pour couvrir les besoins.)

Comme deux logiques (temporelles) s'opposent ici, on n'obtient jamais le même résultat permettant une comparaison simple.

Constat

Si la compensation a lieu 1x par mois, la totalité de la consommation des non-participants est rétribuée comme électricité du réseau.
\--> Cela est en principe avantageux pour le fournisseur de l'électricité pour les locataires. (Le fournisseur d'énergie effectue forcément une surcompensation.)

Exemple de compensation mensuelle :

Import du bilan mesuré = 100 KWh

Export du bilan mesuré = 50 kWh

Soutirage total des non-participants = 100 kWh

Soutirage total des participants à l'électricité pour les locataires = 100 kWh

Production = 250 kWh

Dans cet exemple, le soutirage total des non-participants est maintenant déduit de la mesure du bilan :

Soutirage du réseau facturé par le fournisseur d'énergie = import du bilan 100 kWh - soutirage total des non-participants 100 kWh = soutirage 0kWh

Dans ce cas, aucune électricité du réseau ne nous est facturée pour l'électricité pour les locataires, bien que les participants à l'électricité pour les locataires présentent certainement un soutirage d'électricité du réseau sur le mois (p. ex. soutirage d'électricité la nuit).

L'électricité du réseau est donc toujours surcompensée dans ce cas.
L'export du bilan, en revanche, n'est pas correctement ajusté en conséquence et est donc toujours trop bas.

Au lieu de la rétribution de l'injection pour cette quantité, nous obtenons le tarif de l'électricité du réseau sous forme de rabais.

Validation

- Le soutirage du réseau facturé par le fournisseur d'énergie est toujours inférieur à la quantité d'électricité du réseau que nous avons facturée. (Recettes supplémentaires)

- La quantité injectée du fournisseur d'énergie correspond à la valeur d'export du compteur de bilan physique et est inférieure à la quantité calculée par le bilan virtuel. (Perte due à l'absence de rétribution)

- La quantité injectée rétribuée et la quantité documentée par le fournisseur d'énergie pour le supplément d'électricité pour les locataires correspondent à la quantité totale de production.


\--> La surcompensation est dans tous les cas profitable pour l'exploitant de l'électricité pour les locataires.
