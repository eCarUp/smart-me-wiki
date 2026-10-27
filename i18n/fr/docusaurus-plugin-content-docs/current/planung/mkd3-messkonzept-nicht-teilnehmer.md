---
title: 'Schéma de mesure MKD3 (participation partielle)'
slug: '/planung/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tarification du schéma de mesure MKD3 avec des non-participants'
sidebar_label: 'Schéma de mesure MKD3 (non-participants)'
symbol: 'ausserhalb'
---
![Schéma de mesure MKD3 (avec non-participants) – Figure 1](/img/planung-mkd3-messkonzept-nicht-teilnehmer/01.png)

## Tarification du schéma de mesure MKD3 avec des non-participants

La tarification du schéma de mesure se fait exclusivement sur la base de la production et des consommateurs qui participent à l'électricité pour les locataires.
Le compteur du raccordement de l'immeuble devrait être intégré comme point de contrôle et ne pas être délibérément omis.


## Bilan et validation du MKD3

![Schéma de mesure MKD3 (avec non-participants) – Figure 5](/img/planung-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Bilan

La quantité d'électricité du réseau vendue ne correspond pas à la valeur de la facture du fournisseur d'énergie, et la quantité injectée ne correspond pas à la valeur enregistrée par le compteur de bilan.

Avec le MKD3, la rétribution pour les non-participants a lieu une seule fois par période de décompte.

Justification de l'écart

Le calcul et la répartition dans smart-me déterminent le soutirage et la consommation des participants par intervalles de 15 minutes. Cela permet d'identifier clairement qui soutire de l'électricité, quand, de quelle source et en quelle quantité.

Exemple :

Si, à un instant X, 100 kWh d'électricité solaire sont produits en 15 minutes et que les membres de l'électricité pour les locataires soutirent ensemble 0 kWh, alors que les non-participants soutirent 100 kWh, aucune électricité solaire n'est soutirée par les membres de l'électricité pour les locataires à cet instant.

Le bilan virtuel de l'électricité pour les locataires calcule donc logiquement 0 kWh de soutirage et 100 kWh d'excédent.
Le compteur de bilan physique mesure en revanche 0 kWh de soutirage et 0 kWh d'excédent, car les non-participants ont consommé directement toute la production.

Le décompte de compensation des fournisseurs d'énergie suit la règle suivante :

Importation compensée du bilan de l'électricité pour les locataires = valeur d'importation du compteur de bilan - soutirage importé des non-participants
\--> Si l'importation devient &lt; 0 du fait de la compensation, le reste de la déduction est ajouté à l'exportation du bilan.

Pour ces 15 minutes, cela donnerait donc :
Importation compensée du bilan = valeur de bilan 0 kWh - soutirage des non-participants 100 kWh --> soutirage 0 kWh (delta 100 kWh restant)

Exportation compensée du bilan = 0 kWh + 100 kWh = 100 kWh

Comme la compensation, selon le cas, n'a pas lieu toutes les 15 minutes mais une seule fois par période, il en résulte des valeurs différentes pour la validation !

### Validation

Si la compensation du fournisseur d'énergie a lieu toutes les 15 minutes :

Si cette compensation est effectuée par le fournisseur d'énergie sur une base de 15 minutes, le résultat du bilan virtuel de smart-me est identique au bilan du fournisseur d'énergie.

Validation

- Valeur totale de l'électricité du réseau facturée = somme de la valeur de l'électricité du réseau vendue dans l'électricité pour les locataires

- Somme de l'électricité solaire vendue en interne = production - quantité injectée (facture du fournisseur d'énergie)




Si la compensation est effectuée 1x par période par le fournisseur d'énergie :

Si le fournisseur d'énergie effectue la compensation une seule fois, p. ex. par mois, il en résulte des écarts plus importants entre les valeurs du fournisseur d'énergie et les quantités d'énergie que nous avons vendues. La validation demande alors un peu plus d'habitude.

Justification :

Si la compensation est effectuée une seule fois par mois avec le soutirage total des non-participants, il n'est pas tenu compte du fait que les non-participants ont été approvisionnés ou non par le producteur local, ni dans quelle mesure, ni de la modification du bilan virtuel qui en découle.

Parallèlement, le système calcule pour les participants à l'électricité pour les locataires, de manière cohérente avec l'utilisation et la disponibilité de la production au moment voulu, la valeur effectivement soutirée de chaque source. (Il tient compte du fait que l'électricité de la production actuelle a réellement été consommée par les participants à l'électricité pour les locataires ou que de l'électricité du réseau a en fait été soutirée pour couvrir les besoins.)

Comme deux mondes (temporels) s'affrontent ici, on n'obtient jamais le même résultat qui permettrait une comparaison simple.

Constat

Si la compensation a lieu 1x par mois, la totalité de la consommation des non-participants est rétribuée comme électricité du réseau.
\--> C'est en principe avantageux pour le fournisseur d'électricité pour les locataires. (Il y a forcément une surcompensation de la part du fournisseur d'énergie.)

Exemple de compensation mensuelle :

Mesure d'importation du bilan = 100 KWh

Mesure d'exportation du bilan = 50 kWh

Soutirage total des non-participants = 100 kWh

Soutirage total des participants à l'électricité pour les locataires = 100 kWh

Production = 250 kWh

Dans cet exemple, le soutirage total des non-participants est déduit de la mesure du bilan :

Soutirage du réseau facturé par le fournisseur d'énergie = importation du bilan 100 kWh - soutirage total des non-participants 100 kWh = soutirage 0kWh

Dans ce cas, aucune électricité du réseau ne nous est facturée pour l'électricité pour les locataires, bien que les participants à l'électricité pour les locataires aient forcément soutiré de l'électricité du réseau au cours du mois (p. ex. soutirage d'électricité la nuit).

Dans ce cas, l'électricité du réseau est donc toujours surcompensée.
En revanche, l'exportation du bilan n'est pas correctement ajustée et est par conséquent toujours trop basse.

Au lieu de la rétribution de l'injection pour cette quantité, nous obtenons le tarif de l'électricité du réseau sous forme de rabais.

Validation

- Le soutirage du réseau facturé par le fournisseur d'énergie est toujours inférieur à la quantité d'électricité du réseau que nous avons facturée. (Recettes supplémentaires)

- La quantité injectée selon le fournisseur d'énergie correspond à la valeur d'exportation du compteur de bilan physique et est inférieure à la quantité calculée du bilan virtuel. (Perte due à l'absence de rétribution)

- La quantité injectée rétribuée et la quantité documentée par le fournisseur d'énergie pour le supplément d'électricité pour les locataires correspondent à la quantité totale de production.


\--> La surcompensation est dans tous les cas rentable pour l'exploitant de l'électricité pour les locataires.
