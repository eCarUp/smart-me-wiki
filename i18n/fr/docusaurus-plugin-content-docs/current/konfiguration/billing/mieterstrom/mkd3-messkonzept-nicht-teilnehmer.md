---
title: 'Schéma de mesure MKD3 (avec non-participants)'
slug: '/konfiguration/billing/mieterstrom/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tarification du schéma de mesure MKD3 avec des non-participants'
sidebar_label: 'Schéma de mesure MKD3 (non-participants)'
---
![Schéma de mesure MKD3 (avec non-participants) – Illustration 1](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/01.png)

## Tarification du schéma de mesure MKD3 avec des non-participants

La tarification du schéma de mesure s'effectue exclusivement via la production et les participants à l'électricité pour les locataires

### Tarification avec tarif solaire y compris RCP virtuel (vRCP)

Le compteur de bilan est ignoré pour le calcul de la tarification, il n'est pris en compte que plus tard pour la vérification.

Lors de l'utilisation du tarif solaire y compris vRCP, aucune licence supplémentaire pour compteurs virtuels n'est due.

Compteur de bilan

Tous les appartements / places de parc participants ainsi que les productions comme compteur de bilan.

![Schéma de mesure MKD3 (avec non-participants) – Illustration 2](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/02.png)

Compteurs de production

Saisir tous les compteurs de production comme production


![Schéma de mesure MKD3 (avec non-participants) – Illustration 3](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/03.png)

### Tarification au moyen du tarif solaire (consommation / PV) avec ou sans tarif de batterie (consommation / batterie)

Le compteur de bilan est ignoré pour le calcul de la tarification, il n'est pris en compte que plus tard pour la vérification.

Lors de l'utilisation du tarif solaire /consommation /PV) des licences supplémentaires pour compteurs virtuels sont dues.

La consommation totale est au minimum nécessaire. Celle-ci est créée comme compteur virtuel composé de tous les départs participants de l'électricité pour les locataires.

Consommation totale = Appartement 1.1 + Appartement 1.2 + Général + Place de parc 1 + Place de parc 2 + Pompe à chaleur

Sous production, le compteur de l'installation solaire respectivement le compteur de batterie pour le tarif de batterie est ajouté.

Pour la consommation totale, la consommation totale créée virtuellement est renseignée.

Le compteur de bilan n'est délibérément pas référencé afin de ne pas corriger de manière erronée le bilan virtuel !

![Schéma de mesure MKD3 (avec non-participants) – Illustration 4](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/04.png)

## Établissement du bilan et validation du MKD3

![Schéma de mesure MKD3 (avec non-participants) – Illustration 5](/img/konfiguration-billing-mieterstrom-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Établissement du bilan

La quantité d'électricité du réseau vendue ne correspond pas à la valeur de la facture du fournisseur d'électricité et la quantité réinjectée ne correspond pas à la valeur relevée par le compteur de bilan.

Avec le MKD3, la rétribution pour les non-participants a lieu périodiquement, une seule fois par période de décompte.

Justification de l'écart

Le calcul et la répartition dans smart-me calculent le soutirage et la consommation des participants par intervalle de 15 minutes. Cela permet d'identifier clairement qui soutire de l'électricité, quand, depuis quelle source et en quelle quantité.

Exemple :

Si, à un instant X, 100 kWh d'électricité solaire sont produits en 15 minutes et que les membres de l'électricité pour les locataires soutirent ensemble 0 kWh, tandis que les non-participants soutirent 100 kWh, aucune électricité solaire n'est soutirée à cet instant par les membres de l'électricité pour les locataires.

Le bilan virtuel de l'électricité pour les locataires calcule donc logiquement 0 kWh de soutirage, 100 kWh d'excédent.
Le compteur de bilan physique mesure en revanche 0 kWh de soutirage, 0 kWh d'excédent, parce que les non-participants ont consommé directement toute la production.

Le calcul de compensation des fournisseurs d'électricité suit la règle suivante :

Bilan électricité pour les locataires import compensé = Valeur d'import du compteur de bilan - Soutirage import des non-participants
\--> Si l'import devient &lt; 0 en raison de la compensation, le reste de la déduction est ajouté à l'export du bilan.

Cela donnerait donc ici, pour ces 15 minutes :
Bilan import compensé = Valeur de bilan 0 kWh - Soutirage non-participants 100 kWh --> Soutirage 0 kWh (Delta 100 kWh de reste)

Bilan export compensé = 0 kWh + 100 kWh = 100 kWh

Comme la compensation ne se fait selon les cas pas toutes les 15 minutes mais périodiquement une seule fois, cela donne des valeurs différentes pour la validation !

### Validation

Lorsque la compensation par 15 minutes est effectuée par le fournisseur d'électricité :

Si cette compensation est effectuée par le fournisseur d'électricité sur une base de 15 minutes, le résultat du bilan virtuel de smart-me est égal au bilan du fournisseur d'électricité.

Validation

- Valeur totale facturée de l'électricité du réseau = Somme de la valeur de l'électricité du réseau vendue dans l'électricité pour les locataires

- Somme de l'électricité solaire vendue en interne = Production - Quantité injectée (facture du fournisseur d'électricité)




Lorsque la compensation est effectuée 1x par période par le fournisseur d'électricité :

Si la compensation est effectuée une seule fois par le fournisseur d'électricité, par ex. par mois, des divergences plus importantes apparaissent entre les valeurs du fournisseur d'électricité et les quantités d'énergie vendues par nous. La validation demande maintenant un peu plus d'habitude.

Justification :

Si la compensation est effectuée une seule fois par mois avec le soutirage total des non-participants, il n'est pas tenu compte de si et de combien les non-participants ont en réalité été alimentés par le producteur local et du fait que le bilan virtuel s'en est trouvé modifié.

Parallèlement, le système calcule pour les participants à l'électricité pour les locataires, conformément à l'utilisation et à la disponibilité de la production au moment voulu, la valeur effectivement soutirée depuis les sources. (Il est tenu compte de si de l'électricité de la production actuelle a réellement été prélevée par les participants à l'électricité pour les locataires ou si de l'électricité du réseau a en réalité été soutirée pour la couverture)

Comme deux mondes se heurtent ici (sur le plan temporel), le résultat n'est jamais le même, ce qui empêcherait un rapprochement simple.

Constat

Si la compensation a lieu 1x par mois, toute la consommation des non-participants est rétribuée comme électricité du réseau.
\--> Cela est fondamentalement favorable au fournisseur d'électricité pour les locataires. (Une surcompensation de la part du fournisseur d'électricité a forcément lieu)

Exemple pour une compensation sur 1 mois :

Mesure bilan import = 100 KWh

Mesure bilan export = 50 kWh

Soutirage total non-participants = 100 kWh

Soutirage total participants électricité pour les locataires = 100 kWh

Production = 250 kWh

Dans cet exemple, le soutirage total des non-participants est maintenant déduit de la mesure de bilan :

Soutirage du réseau facturé par le fournisseur d'électricité = Bilan import 100 kWh - Soutirage total non-participants 100 kWh = Soutirage 0 kWh

Dans ce cas, aucune électricité du réseau ne nous est facturée pour l'électricité pour les locataires, bien que les participants à l'électricité pour les locataires présenteraient définitivement un soutirage d'électricité du réseau sur le mois (par ex. soutirage d'électricité de nuit).

L'électricité du réseau est donc dans ce cas toujours surcompensée.
L'export de bilan n'est en revanche pas adapté correctement et est par conséquent toujours trop bas.

Nous recevons, à la place d'une rétribution de l'injection pour cette quantité, le tarif de l'électricité du réseau sous forme de rabais.

Validation

- Le soutirage du réseau facturé par le fournisseur d'électricité est toujours inférieur à la quantité d'électricité du réseau facturée par nous. (Recettes supplémentaires)

- La quantité injectée du fournisseur d'électricité correspond à la quantité de la valeur d'export du compteur de bilan physique et est inférieure à la quantité calculée du bilan virtuel. (Perte due à l'absence de rétribution)

- La quantité de l'injection rétribuée et la quantité documentée par le fournisseur d'électricité pour le supplément électricité pour les locataires correspondent à la quantité totale produite.


\--> La surcompensation est dans tous les cas génératrice de bénéfices pour l'exploitant de l'électricité pour les locataires.
