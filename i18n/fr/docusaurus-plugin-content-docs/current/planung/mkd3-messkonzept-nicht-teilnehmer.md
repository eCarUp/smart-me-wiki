---
title: 'Schéma de mesure MKD3 (participation partielle)'
slug: '/planung/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tarification du schéma de mesure MKD3 avec des non-participants'
sidebar_label: 'Schéma de mesure MKD3 (non-participants)'
---
![Schéma de mesure MKD3 (avec non-participants) – Figure 1](/img/planung-mkd3-messkonzept-nicht-teilnehmer/01.png)

## Tarification du schéma de mesure MKD3 avec des non-participants

La tarification du schéma de mesure se fait exclusivement à partir de la production et des consommateurs qui participent à l'électricité pour les locataires.
Le compteur du raccordement d'immeuble doit être intégré comme point de contrôle et ne doit pas être volontairement omis.


## Bilan et validation du MKD3

![Schéma de mesure MKD3 (avec non-participants) – Figure 5](/img/planung-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Bilan

La quantité d'électricité du réseau vendue ne correspond pas à la valeur de la facture du fournisseur d'énergie, et la quantité injectée ne correspond pas à la valeur enregistrée par le compteur de bilan.

Avec le MKD3, la rétribution pour les non-participants a lieu une seule fois par période de décompte.

Justification de l'écart

Le calcul et la répartition dans smart-me déterminent le soutirage et la consommation des participants par intervalles de 15 minutes. Cela permet d'identifier clairement qui soutire de l'électricité, à quel moment, de quelle source et en quelle quantité.

Exemple :

Si, à un instant X, 100 kWh d'électricité solaire sont produits en 15 minutes et que les membres de l'électricité pour les locataires soutirent ensemble 0 kWh, tandis que les non-participants soutirent 100 kWh, aucune électricité solaire n'est soutirée par les membres de l'électricité pour les locataires à cet instant.

Le bilan virtuel de l'électricité pour les locataires calcule donc logiquement 0 kWh de soutirage et 100 kWh d'excédent.
Le compteur de bilan physique mesure en revanche 0 kWh de soutirage et 0 kWh d'excédent, car les non-participants ont consommé directement toute la production.

Le calcul de compensation du fournisseur d'énergie suit la règle suivante :

Import compensé du bilan de l'électricité pour les locataires = valeur d'import du compteur de bilan - soutirage des non-participants
\--> Si l'import devient &lt; 0 du fait de la compensation, le reste de la déduction est ajouté à l'export du bilan.

Pour ces 15 minutes, cela donnerait donc :
Import du bilan compensé = valeur du bilan 0 kWh - soutirage des non-participants 100 kWh --> soutirage 0 kWh (delta de 100 kWh restant)

Export du bilan compensé = 0 kWh + 100 kWh = 100 kWh

Comme la compensation n'a pas forcément lieu toutes les 15 minutes, mais une seule fois par période, cela donne des valeurs différentes pour la validation !

### Validation

Si le fournisseur d'énergie effectue la compensation toutes les 15 minutes :

Si le fournisseur d'énergie effectue cette compensation sur une base de 15 minutes, le résultat du bilan virtuel de smart-me est identique au bilan du fournisseur d'énergie.

Validation

- Valeur totale d'électricité du réseau facturée = somme de la valeur d'électricité du réseau vendue dans l'électricité pour les locataires

- Somme de l'électricité solaire vendue en interne = production - quantité injectée (facture du fournisseur d'énergie)




Si le fournisseur d'énergie effectue la compensation une fois par période :

Si le fournisseur d'énergie effectue la compensation une seule fois, par exemple par mois, des écarts plus importants apparaissent entre les valeurs du fournisseur d'énergie et les quantités d'énergie que nous avons vendues. La validation demande alors un peu plus d'habitude.

Justification :

Si la compensation est effectuée une seule fois par mois avec le soutirage total des non-participants, il n'est pas tenu compte du fait que les non-participants ont été ou non approvisionnés par le producteur local, ni dans quelle mesure, ni de la modification du bilan virtuel qui en résulte.

Parallèlement, le système calcule logiquement pour les participants à l'électricité pour les locataires la valeur effectivement soutirée de chaque source, en fonction de l'utilisation et de la disponibilité de la production au moment concerné. (Il tient compte du fait que de l'électricité de la production en cours a réellement été prélevée par les participants à l'électricité pour les locataires ou que de l'électricité du réseau a en fait été soutirée pour couvrir les besoins.)

Comme deux logiques (temporelles) s'opposent ici, on n'obtient jamais le même résultat qui permettrait une comparaison simple.

Constat

Si la compensation a lieu une fois par mois, la totalité de la consommation des non-participants est rétribuée comme électricité du réseau.
\--> C'est en principe avantageux pour le fournisseur d'électricité pour les locataires. (Le fournisseur d'énergie effectue forcément une surcompensation.)

Exemple de compensation mensuelle :

Mesure de l'import du bilan = 100 KWh

Mesure de l'export du bilan = 50 kWh

Soutirage total des non-participants = 100 kWh

Soutirage total des participants à l'électricité pour les locataires = 100 kWh

Production = 250 kWh

Dans cet exemple, le soutirage total des non-participants est déduit de la mesure du bilan :

Soutirage du réseau facturé par le fournisseur d'énergie = import du bilan 100 kWh - soutirage total des non-participants 100 kWh = soutirage 0kWh

Dans ce cas, aucune électricité du réseau ne nous est facturée pour l'électricité pour les locataires, bien que les participants à l'électricité pour les locataires aient forcément soutiré de l'électricité du réseau au cours du mois (p. ex. soutirage d'électricité la nuit).

Dans ce cas, l'électricité du réseau est donc toujours surcompensée.
L'export du bilan, en revanche, n'est pas corrigé en conséquence et est donc toujours trop bas.

Au lieu de la rétribution de l'injection pour cette quantité, nous obtenons le tarif de l'électricité du réseau sous forme de rabais.

Validation

- Le soutirage du réseau facturé par le fournisseur d'énergie est toujours inférieur à la quantité d'électricité du réseau que nous facturons. (Recettes supplémentaires)

- La quantité injectée selon le fournisseur d'énergie correspond à la valeur d'export du compteur de bilan physique et est inférieure à la quantité calculée par le bilan virtuel. (Perte due à l'absence de rétribution)

- La quantité injectée rétribuée et la quantité documentée par le fournisseur d'énergie pour le supplément d'électricité pour les locataires correspondent à la quantité totale produite.


\--> La surcompensation est dans tous les cas profitable pour l'exploitant de l'électricité pour les locataires.
