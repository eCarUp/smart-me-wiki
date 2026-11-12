---
title: 'Schéma de mesure MKD3 (participation partielle)'
slug: '/planung/mkd3-messkonzept-nicht-teilnehmer'
description: 'Tarification du schéma de mesure MKD3 avec des non-participants'
sidebar_label: 'Schéma de mesure MKD3 (non-participants)'
symbol: 'ausserhalb'
---
<div className="bild--voll">

![Schéma de mesure MKD3 (avec non-participants) – Illustration 1](/img/planung-mkd3-messkonzept-nicht-teilnehmer/01_FR.png)

</div>

## Tarification du schéma de mesure MKD3 avec des non-participants

La tarification du schéma de mesure se fait exclusivement à partir de la production et des consommateurs qui participent à l'électricité pour les locataires.
Le compteur du raccordement de l'immeuble devrait être intégré comme point de contrôle et ne pas être volontairement omis.

## Schéma de mesure général

### Points de mesure soumis à licence :

- Chaque point de mesure qui doit être relevé est [soumis à licence](/planung/cloud-lizenzen).

- Chaque compteur virtuel (sommes des productions, consommation totale) est [soumis à licence](/planung/cloud-lizenzen).

### Électricité

- Toutes les unités de décompte à facturer doivent être mesurées par un point de comptage (appartements, pompes à chaleur, départs communs). Options matérielles pour la mesure de l'énergie électrique : [Telstar 80A](/produkte/telstar-80a), [Telstar CT](/produkte/telstar-ct), [Nimbus 100A (plaque de compteur)](/produkte/nimbus-100a)

- Toutes les productions et tous les systèmes de stockage doivent être mesurés, soit ensemble, soit séparément.

- La mesure au raccordement de l'immeuble constitue la somme de bilan correcte pour une tarification précise. Les mesures au raccordement de l'immeuble sont les points de mesure les plus importants pour la commande dynamique des consommateurs à l'intérieur des bâtiments.

- Tarification et décompte via [smart-me Billing](/konfiguration/billing)

- Selon le modèle, la tarification peut être calculée à l'aide du compteur de bilan / de raccordement de l'immeuble et des productions, ou alternativement à l'aide des productions et d'une consommation totale virtuelle. (+1 compteur virtuel de consommation totale)

- Si plusieurs productions sont mesurées (batteries / PV), elles doivent être additionnées virtuellement (+1 compteur virtuel de somme)

<div className="bild--voll">

![Schéma de mesure MKD3 (avec non-participants) – Illustration 2](/img/planung-mkd3-messkonzept-nicht-teilnehmer/02_FR.png)

</div>

Dans l'exemple, l'appartement A de la maison B ne participe pas à l'électricité pour les locataires : son compteur reste chez le gestionnaire de réseau de distribution (GRD) et n'est pas pris en compte dans le schéma de mesure.

### Électromobilité avec smart-me et eCarUp

- L'électromobilité est réalisée au moyen de points de recharge privés, semi-privés ou publics.

- Le matériel [smart-me Pico 22kW](/produkte/pico-ladestation) offre le mélange optimal entre matériel pour l'exploitation publique et l'exploitation privée dans le cadre de l'électricité pour les locataires. Avec [eCarUp](https://www.ecarup.com), il existe toutefois aussi d'autres solutions matérielles compatibles.

- Le décompte s'effectue p. ex. par carte de crédit à un tarif unique avec [eCarUp](https://www.ecarup.com) ou de manière tarifée directement via le décompte des appartements avec [smart-me Billing](/konfiguration/billing).

- La commande des bornes de recharge Pico et la protection de l'infrastructure sont assurées par la [gestion de la charge multiniveau](/konfiguration/multilevel-lastmanagement) avancée.

- Le délestage est réalisé directement via le [matériel](/produkte/pico-ladestation) ou via la [gestion de la charge multiniveau](/konfiguration/multilevel-lastmanagement).

## Bilan et validation du MKD3

![Schéma de mesure MKD3 (avec non-participants) – Illustration 5](/img/planung-mkd3-messkonzept-nicht-teilnehmer/05.jpg)

### Bilan

La quantité d'électricité du réseau vendue ne correspond pas à la valeur de la facture du fournisseur d'énergie, et la quantité réinjectée ne correspond pas à la valeur relevée par le compteur de bilan.

Avec le MKD3, la rétribution pour les non-participants s'effectue une seule fois par période de décompte.

**Justification de l'écart**

Le calcul et la répartition dans smart-me déterminent le soutirage et la consommation des participants par intervalles de 15 minutes. Cela permet d'identifier clairement qui soutire de l'électricité, quand, de quelle source et en quelle quantité.

**Exemple :**

Si, à un instant X, 100 kWh d'électricité solaire sont produits en 15 minutes et que les membres de l'électricité pour les locataires soutirent ensemble 0 kWh, tandis que les non-participants soutirent 100 kWh, aucune électricité solaire n'est soutirée par les membres de l'électricité pour les locataires à cet instant.

Le bilan virtuel de l'électricité pour les locataires calcule donc logiquement 0 kWh de soutirage et 100 kWh d'excédent.
Le compteur de bilan physique mesure en revanche 0 kWh de soutirage et 0 kWh d'excédent, car les non-participants ont consommé directement toute la production.

**La compensation des fournisseurs d'énergie suit la règle suivante :**

Importation compensée du bilan de l'électricité pour les locataires = valeur d'importation du compteur de bilan - soutirage importé des non-participants
\--> Si l'importation devient &lt; 0 du fait de la compensation, le reste de la déduction est ajouté à l'exportation du bilan.

Pour ces 15 minutes, cela donnerait donc :
Importation compensée du bilan = valeur de bilan 0 kWh - soutirage des non-participants 100 kWh --> soutirage 0 kWh (delta de 100 kWh restant)

Exportation compensée du bilan = 0 kWh + 100 kWh = 100 kWh

Comme la compensation, selon le cas, n'a pas lieu toutes les 15 minutes mais une seule fois par période, il en résulte des valeurs différentes pour la validation !

### Validation

**Si le fournisseur d'énergie effectue la compensation par intervalles de 15 minutes :**

Si le fournisseur d'énergie effectue cette compensation sur une base de 15 minutes, le résultat du bilan virtuel de smart-me est identique au bilan du fournisseur d'énergie.

**Validation**

- Valeur totale de l'électricité du réseau facturée = somme de la valeur de l'électricité du réseau vendue dans le cadre de l'électricité pour les locataires

- Somme de l'électricité solaire vendue en interne = production - quantité injectée (facture du fournisseur d'énergie)




**Si le fournisseur d'énergie effectue la compensation 1x par période :**

Si le fournisseur d'énergie effectue la compensation une seule fois, p. ex. par mois, des écarts plus importants apparaissent entre les valeurs du fournisseur d'énergie et les quantités d'énergie que nous avons vendues. La validation demande alors un peu plus d'habitude.

**Justification :**

Si la compensation est effectuée une fois par mois avec le soutirage total des non-participants, il n'est pas tenu compte du fait que les non-participants ont effectivement été approvisionnés ou non par le producteur local, ni dans quelle mesure, ni de la modification du bilan virtuel qui en résulte.

Parallèlement, le système calcule pour les participants à l'électricité pour les locataires, de manière cohérente avec l'utilisation et la disponibilité de la production au moment voulu, la valeur effectivement soutirée de chaque source. (Il tient compte du fait que de l'électricité de la production actuelle a réellement été prélevée par les participants à l'électricité pour les locataires ou que de l'électricité du réseau a en fait été soutirée pour couvrir les besoins.)

Comme deux mondes (temporels) s'opposent ici, on n'obtient jamais le même résultat qui permettrait une comparaison simple.

**Constat :**

Si la compensation a lieu 1x par mois, la totalité de la consommation des non-participants est rétribuée comme électricité du réseau.
\--> Cela est en principe favorable au fournisseur d'électricité pour les locataires. (Il en résulte forcément une surcompensation de la part du fournisseur d'énergie.)

**Exemple de compensation mensuelle :**

- Mesure de l'importation du bilan = 100 KWh

- Mesure de l'exportation du bilan = 50 kWh

- Soutirage total des non-participants = 100 kWh

- Soutirage total des participants à l'électricité pour les locataires = 100 kWh

- Production = 250 kWh

Dans cet exemple, le soutirage total des non-participants est déduit de la mesure du bilan :

Soutirage du réseau facturé par le fournisseur d'énergie = importation du bilan 100 kWh - soutirage total des non-participants 100 kWh = soutirage 0kWh

Dans ce cas, aucune électricité du réseau ne nous est facturée pour l'électricité pour les locataires, bien que les participants à l'électricité pour les locataires présentent certainement un soutirage d'électricité du réseau au cours du mois (p. ex. soutirage d'électricité la nuit).

L'électricité du réseau est donc toujours surcompensée dans ce cas.
L'exportation du bilan, en revanche, n'est pas correctement ajustée et est par conséquent toujours trop basse.

Au lieu de la rétribution de l'injection pour cette quantité, nous obtenons le tarif de l'électricité du réseau sous forme de rabais.

**Validation**

- Le soutirage du réseau facturé par le fournisseur d'énergie est toujours inférieur à la quantité d'électricité du réseau que nous avons facturée. (Recettes supplémentaires)

- La quantité injectée du fournisseur d'énergie correspond à la valeur d'exportation du compteur de bilan physique et est inférieure à la quantité calculée du bilan virtuel. (Perte due à l'absence de rétribution)

- La somme de la quantité injectée rétribuée et de la quantité documentée par le fournisseur d'énergie pour le supplément d'électricité pour les locataires correspond à la quantité totale de production.


\--> La surcompensation est dans tous les cas rentable pour l'exploitant de l'électricité pour les locataires.
