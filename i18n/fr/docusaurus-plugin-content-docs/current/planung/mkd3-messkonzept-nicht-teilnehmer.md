---
title: 'Schéma de mesure MKD3 (participation partielle)'
slug: '/planung/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tarification du schéma de mesure MKD3 avec des non-participants'
sidebar_label: 'Schéma de mesure MKD3 (non-participants)'
symbol: 'ausserhalb'
---
![Schéma de mesure MKD3 (avec non-participants) – illustration 1](/img/planung-mkd3-messkonzept-nicht-teilnehmer/01.png)

## Tarification du schéma de mesure MKD3 avec des non-participants

La tarification du schéma de mesure se fait exclusivement via la production et les consommateurs participant à l'électricité pour les locataires.
Le compteur de raccordement de l'immeuble doit être intégré comme point de contrôle et ne doit pas être volontairement omis.


## Bilan et validation du MKD3

![Schéma de mesure MKD3 (avec non-participants) – illustration 5](/img/planung-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Bilan

La quantité d'électricité du réseau vendue ne correspond pas à la valeur de la facture du fournisseur d'énergie, et la quantité réinjectée ne correspond pas à la valeur enregistrée par le compteur de bilan.

Avec le MKD3, la rétribution pour les non-participants s'effectue une seule fois par période de décompte.

**Justification de l'écart**

Le calcul et la répartition dans smart-me déterminent le soutirage et la consommation des participants par intervalles de 15 minutes. Cela permet d'identifier clairement qui soutire de l'électricité, à quel moment, de quelle source et en quelle quantité.

**Exemple :**

Si, à un instant X, 100 kWh d'électricité solaire sont produits en 15 minutes et que les membres de l'électricité pour les locataires soutirent ensemble 0 kWh, tandis que les non-participants soutirent 100 kWh, aucune électricité solaire n'est soutirée à ce moment par les membres de l'électricité pour les locataires.

Le bilan virtuel de l'électricité pour les locataires calcule donc logiquement 0 kWh de soutirage et 100 kWh d'excédent.
Le compteur de bilan physique mesure en revanche 0 kWh de soutirage et 0 kWh d'excédent, car les non-participants ont consommé directement toute la production.

**Le calcul de compensation des fournisseurs d'énergie suit la règle suivante :**

Import compensé du bilan de l'électricité pour les locataires = valeur d'import du compteur de bilan - soutirage import des non-participants
\--> Si l'import devient &lt; 0 du fait de la compensation, le reste de la déduction est ajouté à l'export du bilan.

Pour ces 15 minutes, cela se présenterait donc ainsi :
Import du bilan compensé = valeur du bilan 0 kWh - soutirage des non-participants 100 kWh --> soutirage 0 kWh (reste delta 100 kWh)

Export du bilan compensé = 0 kWh + 100 kWh = 100 kWh

Comme la compensation n'a pas forcément lieu toutes les 15 minutes, mais une seule fois par période, il en résulte des valeurs différentes pour la validation !

### Validation

**Si la compensation est effectuée par le fournisseur d'énergie sur une base de 15 minutes :**

Si cette compensation est effectuée par le fournisseur d'énergie sur une base de 15 minutes, le résultat du bilan virtuel de smart-me est identique au bilan du fournisseur d'énergie.

**Validation**

- Valeur totale d'électricité du réseau facturée = somme de la valeur d'électricité du réseau vendue dans l'électricité pour les locataires

- Somme de l'électricité solaire vendue en interne = production - quantité injectée (facture du fournisseur d'énergie)




**Si la compensation est effectuée une fois par période par le fournisseur d'énergie :**

Si la compensation est effectuée une seule fois par le fournisseur d'énergie, par exemple par mois, des écarts plus importants apparaissent entre les valeurs du fournisseur d'énergie et les quantités d'énergie que nous avons vendues. La validation demande alors un peu plus d'habitude.

**Justification :**

Si la compensation est effectuée une fois par mois avec le soutirage total des non-participants, il n'est pas tenu compte du fait que les non-participants ont été ou non approvisionnés par le producteur local, ni dans quelle mesure, et donc de la manière dont le bilan virtuel a été modifié.

Parallèlement, le système calcule pour les participants à l'électricité pour les locataires, en fonction de l'utilisation et de la disponibilité de la production au moment voulu, la valeur effectivement soutirée de chaque source. (Il tient compte du fait que de l'électricité de la production actuelle a effectivement été consommée par les participants à l'électricité pour les locataires ou que de l'électricité du réseau a en réalité été soutirée pour couvrir les besoins.)

Comme deux mondes s'opposent ici (sur le plan temporel), on n'obtient jamais le même résultat permettant une comparaison simple.

**Constat :**

Si la compensation a lieu une fois par mois, la totalité de la consommation des non-participants est rétribuée comme électricité du réseau.
\--> C'est en principe avantageux pour le fournisseur d'électricité pour les locataires. (Il en résulte forcément une surcompensation de la part du fournisseur d'énergie.)

Exemple de compensation mensuelle :

Mesure de l'import du bilan = 100 KWh

Mesure de l'export du bilan = 50 kWh

Soutirage total des non-participants = 100 kWh

Soutirage total des participants à l'électricité pour les locataires = 100 kWh

Production = 250 kWh

Dans cet exemple, le soutirage total des non-participants est maintenant déduit de la mesure du bilan :

Soutirage du réseau facturé par le fournisseur d'énergie = import du bilan 100 kWh - soutirage total des non-participants 100 kWh = soutirage 0kWh

Dans ce cas, aucune électricité du réseau ne nous est facturée pour l'électricité pour les locataires, bien que les participants à l'électricité pour les locataires aient assurément soutiré de l'électricité du réseau au cours du mois (p. ex. soutirage d'électricité la nuit).

Dans ce cas, l'électricité du réseau est donc toujours surcompensée.
L'export du bilan, en revanche, n'est pas correctement ajusté et est par conséquent toujours trop bas.

Au lieu de la rétribution de l'injection pour cette quantité, nous obtenons le tarif de l'électricité du réseau sous forme de rabais.

**Validation**

- Le soutirage du réseau facturé par le fournisseur d'énergie est toujours inférieur à la quantité d'électricité du réseau que nous avons facturée. (Recettes supplémentaires)

- La quantité injectée selon le fournisseur d'énergie correspond à la valeur d'export du compteur de bilan physique et est inférieure à la quantité calculée du bilan virtuel. (Perte due à l'absence de rétribution)

- La quantité injectée rétribuée et la quantité documentée par le fournisseur d'énergie pour le supplément d'électricité pour les locataires correspondent à la quantité totale de production.


\--> La surcompensation est dans tous les cas profitable pour l'exploitant de l'électricité pour les locataires.
