---
title: 'Schéma de mesure MKD3 (participation partielle)'
slug: '/planung/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tarification du schéma de mesure MKD3 avec des non-participants'
sidebar_label: 'Schéma de mesure MKD3 (non-participants)'
symbol: 'ausserhalb'
---
<div className="bild--voll">

![Schéma de mesure MKD3 (avec non-participants) – Figure 1](/img/planung-mkd3-messkonzept-nicht-teilnehmer/01_FR.png)

</div>

## Tarification du schéma de mesure MKD3 avec des non-participants

La tarification du schéma de mesure se fait exclusivement à partir de la production et des consommateurs participant à l'électricité pour les locataires.
Le compteur du raccordement au bâtiment devrait être intégré comme élément de contrôle et ne pas être délibérément omis.

## Schéma de mesure général

### Points de mesure soumis à licence :

- Chaque point de mesure devant être saisi est [soumis à licence](/planung/cloud-lizenzen).

- Chaque compteur virtuel (productions totales, consommation totale) est [soumis à licence](/planung/cloud-lizenzen).

### Électricité

- Toutes les unités de décompte à facturer doivent être mesurées par un point de comptage (appartements, pompes à chaleur, départs généraux). Options matérielles pour la mesure de l'énergie électrique : [Telstar 80A](/produkte/telstar-80a), [Telstar CT](/produkte/telstar-ct), [Nimbus 100A (plaque de compteur)](/produkte/nimbus-100a)

- Toutes les productions et tous les systèmes de stockage doivent être mesurés, soit ensemble, soit séparément.

- La mesure au raccordement du bâtiment fournit la somme de bilan correcte pour une tarification précise. Les mesures au raccordement du bâtiment sont les points de mesure les plus importants pour la commande dynamique des consommateurs à l'intérieur des bâtiments.

- Tarification et décompte via [smart-me Billing](/konfiguration/billing)

- Selon le modèle, la tarification peut être calculée à l'aide du compteur de bilan / de raccordement du bâtiment et des productions, ou alternativement à l'aide des productions et d'une consommation totale virtuelle. (+1 compteur virtuel de consommation totale)

- Si plusieurs productions sont mesurées (batteries / PV), elles doivent être additionnées virtuellement (+1 compteur virtuel de somme)

<div className="bild--voll">

![Schéma de mesure MKD3 (avec non-participants) – Figure 2](/img/planung-mkd3-messkonzept-nicht-teilnehmer/02_FR.png)

</div>

Dans l'exemple, l'appartement A de la maison B ne participe pas à l'électricité pour les locataires : son compteur reste auprès du gestionnaire de réseau de distribution (GRD) et n'est pas pris en compte dans le schéma de mesure.

### Mobilité électrique avec smart-me et eCarUp

- La mobilité électrique est réalisée au moyen de points de recharge privés, semi-privés ou publics.

- Le matériel [smart-me Pico 22kW](/produkte/pico-ladestation) offre le mélange optimal entre matériel pour l'exploitation publique et pour l'exploitation privée dans le cadre de l'électricité pour les locataires. Avec [eCarUp](https://www.ecarup.com), d'autres solutions matérielles compatibles sont toutefois également disponibles.

- Le décompte s'effectue par ex. par carte de crédit au tarif unique avec [eCarUp](https://www.ecarup.com) ou de manière tarifée via le décompte de l'appartement directement avec [smart-me Billing](/konfiguration/billing).

- La commande des bornes de recharge Pico et la protection de l'infrastructure sont assurées par la [gestion de la charge multiniveau](/konfiguration/multilevel-lastmanagement) avancée.

- Le délestage est réalisé directement via le [matériel](/produkte/pico-ladestation) ou via la [gestion de la charge multiniveau](/konfiguration/multilevel-lastmanagement).

## Bilan et validation du MKD3

![Schéma de mesure MKD3 (avec non-participants) – Figure 5](/img/planung-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Bilan

La quantité d'électricité du réseau vendue ne correspond pas à la valeur de la facture du fournisseur d'énergie et la quantité réinjectée ne correspond pas à la valeur saisie par le compteur de bilan.

Avec le MKD3, la rétribution pour les non-participants s'effectue de manière périodique, une seule fois par période de décompte.

**Justification de l'écart**

Le calcul et la répartition dans smart-me calculent le soutirage et la consommation des participants par intervalles de 15 minutes. Cela permet d'identifier clairement qui soutire de l'électricité, quand, à partir de quelle source et en quelle quantité.

**Exemple :**

Si, à un instant X, 100 kWh d'électricité solaire sont produits en 15 minutes et que les membres de l'électricité pour les locataires soutirent ensemble 0 kWh, tandis que les non-participants soutirent 100 kWh, aucune électricité solaire n'est soutirée par les membres de l'électricité pour les locataires à cet instant.

Le bilan virtuel de l'électricité pour les locataires calcule donc logiquement 0 kWh de soutirage et 100 kWh d'excédent.
Le compteur de bilan physique mesure en revanche 0 kWh de soutirage et 0 kWh d'excédent, car les non-participants ont consommé directement toute la production.

**Le calcul de compensation des fournisseurs d'énergie suit la règle suivante :**

Bilan de l'électricité pour les locataires, importation compensée = valeur d'importation du compteur de bilan - soutirage importé des non-participants
\--> Si l'importation devient &lt; 0 du fait de la compensation, le reste de la déduction est ajouté à l'exportation du bilan.

Pour ces 15 minutes, cela se présenterait donc ainsi :
Bilan importation compensée = valeur de bilan 0 kWh - soutirage des non-participants 100 kWh --> soutirage 0 kWh (delta 100 kWh restant)

Bilan exportation compensée = 0 kWh + 100 kWh = 100 kWh

Comme la compensation, selon les cas, ne s'effectue pas toutes les 15 minutes mais de manière périodique et unique, il en résulte des valeurs différentes pour la validation !

### Validation

**Si la compensation est effectuée toutes les 15 minutes par le fournisseur d'énergie :**

Si cette compensation est effectuée par le fournisseur d'énergie sur une base de 15 minutes, le résultat du bilan virtuel de smart-me est identique au bilan du fournisseur d'énergie.

**Validation**

- Valeur totale de l'électricité du réseau facturée = somme de la valeur de l'électricité du réseau vendue dans le cadre de l'électricité pour les locataires

- Somme de l'électricité solaire vendue en interne = production - quantité injectée (facture du fournisseur d'énergie)




**Si la compensation est effectuée 1x par période par le fournisseur d'énergie :**

Si la compensation est effectuée par le fournisseur d'énergie une seule fois, par ex. par mois, des divergences plus importantes apparaissent entre les valeurs du fournisseur d'énergie et les quantités d'énergie que nous avons vendues. La validation demande alors un peu plus d'habitude.

**Justification :**

Si la compensation est effectuée une seule fois par mois avec le soutirage total des non-participants, il n'est pas tenu compte du fait que les non-participants ont été approvisionnés ou non par le producteur local, ni dans quelle mesure, et que le bilan virtuel s'en est trouvé modifié.

Parallèlement, le système calcule pour les participants à l'électricité pour les locataires, de manière cohérente avec l'utilisation et la disponibilité de la production au moment voulu, la valeur effectivement soutirée à partir des sources. (Il tient compte du fait que de l'électricité de la production actuelle a réellement été prélevée par les participants à l'électricité pour les locataires ou que de l'électricité du réseau a en fait été soutirée pour couvrir les besoins)

Comme deux mondes se heurtent ici (sur le plan temporel), on n'obtient jamais le même résultat qui permettrait une comparaison simple.

**Constat :**

Si la compensation a lieu 1x par mois, la totalité de la consommation des non-participants est rétribuée comme électricité du réseau.
\--> Cela est en principe avantageux pour le fournisseur d'électricité pour les locataires. (Il en résulte forcément une surcompensation de la part du fournisseur d'énergie)

Exemple de compensation sur 1 mois :

Mesure de bilan importation = 100 KWh

Mesure de bilan exportation = 50 kWh

Soutirage total des non-participants = 100 kWh

Soutirage total des participants à l'électricité pour les locataires = 100 kWh

Production = 250 kWh

Dans cet exemple, le soutirage total des non-participants est maintenant déduit de la mesure de bilan :

Soutirage du réseau facturé par le fournisseur d'énergie = bilan importation 100 kWh - soutirage total des non-participants 100 kWh = soutirage 0kWh

Dans ce cas, aucune électricité du réseau ne nous est facturée pour l'électricité pour les locataires, bien que les participants à l'électricité pour les locataires aient certainement soutiré de l'électricité du réseau au cours du mois (par ex. soutirage d'électricité la nuit).

L'électricité du réseau est donc toujours surcompensée dans ce cas.
L'exportation du bilan n'est en revanche pas correctement ajustée et est par conséquent toujours trop basse.

Au lieu de la rétribution de l'injection pour cette quantité, nous obtenons le tarif de l'électricité du réseau sous forme de rabais.

**Validation**

- Le soutirage du réseau facturé par le fournisseur d'énergie est toujours inférieur à la quantité d'électricité du réseau que nous avons facturée. (Recettes supplémentaires)

- La quantité injectée du fournisseur d'énergie correspond à la valeur d'exportation du compteur de bilan physique et est inférieure à la quantité calculée du bilan virtuel. (Perte due à l'absence de rétribution)

- La quantité injectée rétribuée et la quantité documentée par le fournisseur d'énergie pour le supplément d'électricité pour les locataires correspondent à la quantité totale de production.


\--> La surcompensation est dans tous les cas rentable pour l'exploitant de l'électricité pour les locataires.
