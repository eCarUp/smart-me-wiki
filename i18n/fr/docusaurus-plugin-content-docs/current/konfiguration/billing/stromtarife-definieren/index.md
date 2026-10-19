---
title: 'Définir les tarifs d''électricité'
slug: '/konfiguration/billing/stromtarife-definieren'
description: 'Dans la vidéo à droite, Guy vous explique les bases de la composition des prix de l''électricité.'
sidebar_label: 'Définir les tarifs d''électricité'
naechste_schritte: [konfiguration/billing/index]
optionale_schritte: [konfiguration/wenndann-aktionen/tarifzeiten-definieren]
---
![Définir les tarifs d'électricité – Figure 1](/img/konfiguration-billing-stromtarife-definieren/01.png)

## Fixer le prix de l'électricité

Dans la vidéo à droite, Guy vous explique les bases de la composition des prix de l'électricité.

Vous pouvez désormais aussi utiliser notre calculateur de tarifs d'électricité en ligne. Il vous aide dans cette tâche et repose sur ces explications.

[Calculateur de tarifs d'électricité smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

<Video src="ju7m6Bs8U_M" title="Vidéo YouTube, smart-me Billing - Définir les prix dans un RCP" />

Guy explique comment définir les prix d'un RCP dans smart-me Billing.

Attention : la vidéo a été enregistrée avec une ancienne version du fichier Excel. Les formules de cette version contenaient encore une erreur. Le fichier Excel a été corrigé depuis.

[Beispiel Preise im ZEV festlegen.xlsx](https://drive.google.com/uc?export=download&id=1cGOAL1UIo4ZmvW55drHcfdPw0v4vnJ9Z)

## Configurer les tarifs d'électricité

Dans smart-me Billing, vous pouvez travailler soit avec les tarifs d'électricité, soit avec des tarifs virtuels. Les tarifs d'électricité conviennent uniquement aux systèmes alimentés exclusivement par le réseau. Dans tous les autres cas, utilisez les tarifs virtuels.

### 1. Procurez-vous la fiche tarifaire de votre fournisseur d'énergie

Votre fournisseur d'énergie publie sa fiche tarifaire sur son site web des mois avant le début de la nouvelle période tarifaire.

Vérifiez aussi quel tarif exact vous achetez auprès de votre fournisseur d'énergie :

- vert, bleu, gris ou autres variantes

- tarif unique, double tarif ou tarif dynamique.


Lire la fiche tarifaire :

Les informations utiles sont parfois un peu dispersées. La fiche tarifaire se compose généralement de 4 parties :

- prix de l'énergie

- prix de l'utilisation du réseau

- redevances de mesure

- redevances publiques


Les redevances publiques, en particulier, ne figurent pas entièrement sur la fiche tarifaire. Les redevances communales varient d'une commune à l'autre et figurent sur une fiche tarifaire séparée. Dans 99 % des cas, le lien se trouve dans la note de bas de page de la fiche tarifaire.

Utilisez le lien imprimé sur la fiche tarifaire pour obtenir cette valeur pour votre tarification.

Elle est généralement exprimée en ct. / kWh, mais peut aussi être indiquée en % de l'utilisation du réseau (composantes variables).

![Définir les tarifs d'électricité – Figure 2](/img/konfiguration-billing-stromtarife-definieren/02.png)

### 2\. Choisissez le calcul du tarif solaire pour votre (v)RCP

Vous avez le choix entre deux approches de base :

- Méthode forfaitaire à 80 % du produit standard d'électricité
    Important : la méthode forfaitaire couvre automatiquement tous les autres coûts. Aucun coût ne doit être facturé pour la mesure, le décompte et la gestion de la vente d'électricité du RCP (regroupement dans le cadre de la consommation propre).

    Aucun coût ne peut être facturé ici pour la mesure du RCP, ni pour son administration et son décompte.
    La redevance de comptage du fournisseur d'énergie pour le compteur principal du RCP ne peut pas être facturée en plus séparément.

    - -   Variante 1 : électricité du réseau facturée 1:1, électricité solaire à 80 % des coûts de base et à 80 % du prix d'achat de l'électricité du réseau
            Cette variante convient à l'optimisation du bénéfice au sein du RCP, tant que le taux d'occupation des logements est élevé.
            Cette méthode ne convient pas si de gros consommateurs industriels se trouvent dans le même bâtiment et qu'un système multitarif est en place.
            Meilleure solution pour les systèmes multitarifs.

        - Variante 2 : électricité du réseau 1:1, électricité solaire à 80 % du prix de référence de l'ElCom (à utiliser si le fournisseur d'énergie applique des tarifs dynamiques)
            Cette variante convient à tous les RCP sans gros consommateurs industriels et c'est la plus simple à mettre en œuvre.
            Meilleure option en cas de vacance fréquente des logements.
            Si cette variante est utilisée avec de l'industrie et un multitarif (double tarif), il se peut que l'industriel paie au final davantage qu'en dehors du RCP, à cause du tarif solaire plus élevé !

- Coûts effectifs (calcul des coûts de revient)
    Avec cette méthode, des coûts de mesure, de décompte et de gestion peuvent être facturés en plus de la valeur calculée de l'électricité solaire. Vous trouverez les détails dans le manuel VEWA.

    - -   Cette méthode convient si 80 % du prix de l'électricité du réseau ne suffiraient pas à couvrir les coûts de votre installation solaire. C'est très rarement le cas.

        - Cette méthode doit être justifiée chaque année par un calcul et augmente la charge administrative.


### 3\. Calculez vos tarifs pour la période tarifaire

Le plus simple est d'utiliser notre calculateur de tarifs. Selon la méthode choisie, il vous indique les saisies à effectuer dans smart-me.

Pour un tarif dynamique : choisissez la méthode ElCom à 80 % et recherchez dans le calculateur le tarif H4 de votre région et de votre fournisseur d'énergie comme référence.

[Calculateur de tarifs d'électricité smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

### 4\. Configurez vos tarifs

Retournez maintenant dans la configuration de l'immeuble.

1.  Facturation (Rechnungsstellung)

2.  Configuration (Konfiguration)

3.  Immeuble (Liegenschaft)

4.  Tarifs virtuels (Virtuelle Tarife)


![Définir les tarifs d'électricité – Figure 3](/img/konfiguration-billing-stromtarife-definieren/03.png)

Créez maintenant les tarifs réseau de votre période tarifaire

<div className="row">
<div className="col col--6">

### Exemple : tarif unique

</div>
<div className="col col--6">

### Exemple : double tarif

</div>
</div>

Étape suivante : reproduire les horaires du tarif dans les actions si

[Définir les plages tarifaires](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)

<div className="row">
<div className="col col--6">

![Définir les tarifs d'électricité – Figure 4](/img/konfiguration-billing-stromtarife-definieren/04.png)

Exemple de tarif unique avec la méthode forfaitaire à 80 % :

Créez maintenant un tarif réseau avec le prix indiqué :

- Tarif réseau 2026 : 0.19707 CHF / kWh

![Définir les tarifs d'électricité – Figure 5](/img/konfiguration-billing-stromtarife-definieren/05.png)

</div>
<div className="col col--6">

![Définir les tarifs d'électricité – Figure 6](/img/konfiguration-billing-stromtarife-definieren/06.png)

Exemple de double tarif avec la méthode forfaitaire à 80 % :

Créez maintenant deux tarifs réseau avec les prix indiqués :

- Tarif réseau HP 2026 : 0.22409 CHF / kWh

- Tarif réseau HC 2026 : 0.17007 CHF / kWh

Pour les doubles tarifs, les horaires doivent d'abord être créés au moyen d'actions [SI/ALORS](/konfiguration/wenndann-aktionen). Ces actions peuvent ensuite être liées via la « Condition supplémentaire » (Zusätzliche Bedingung) pour définir la validité au cours de la semaine.

![Définir les tarifs d'électricité – Figure 7](/img/konfiguration-billing-stromtarife-definieren/07.png)

![Définir les tarifs d'électricité – Figure 8](/img/konfiguration-billing-stromtarife-definieren/08.png)

</div>
</div>

Créez maintenant le tarif solaire correspondant

Remarque :
Il existe différents tarifs solaires et tarifs batterie, avec des fonctionnalités et des conditions préalables différentes.

En général, le tarif solaire vRCP est le choix le meilleur et le plus universel.

Il ne permet toutefois pas de définir des tarifs différents pour la batterie et pour l'énergie solaire. Pour cela, il faut utiliser le tarif alternatif.

Vous trouverez les détails plus bas, dans la section « Tous les détails ».

Cet exemple utilise le tarif solaire vRCP.

Mesures :

Tous les tarifs solaires nécessitent des points de mesure pertinents, qui doivent être liés.

Option la plus simple :

- Champ « Compteur solaire » (Solarzähler) : sélectionnez tous les compteurs de production (solaire et batterie).

- Champ « Compteur de bilan » (Bilanzzähler) : sélectionnez les compteurs de bilan (1 maison : compteur de raccordement ; site : compteur de site ou plusieurs compteurs de raccordement)


Option alternative :

- Champ « Compteur solaire » (Solarzähler) : sélectionnez tous les compteurs de production (solaire et batterie).

- Champ « Compteur de bilan » (Bilanzzähler) : sélectionnez tous les compteurs de consommation et de production.


<div className="row">
<div className="col col--6">

Tarif solaire unique

![Définir les tarifs d'électricité – Figure 9](/img/konfiguration-billing-stromtarife-definieren/09.png)

</div>
<div className="col col--6">

Double tarif solaire

![Définir les tarifs d'électricité – Figure 10](/img/konfiguration-billing-stromtarife-definieren/10.png)

![Définir les tarifs d'électricité – Figure 11](/img/konfiguration-billing-stromtarife-definieren/11.png)

</div>
</div>

### Lancer le recalcul des tarifs d'électricité

Si vous utilisez les tarifs virtuels, cliquez sur « Recalculer » (Neu berechnen) à la fin de la configuration (ainsi qu'après toute modification ultérieure de la configuration), idéalement à partir du 1.1.2018. Toutes les valeurs existantes sont alors recalculées.

Avant de pouvoir créer une facture, attendez que la dernière valeur calculée affiche « Aujourd'hui » (Heute) et qu'aucun message d'erreur n'apparaisse.

Les messages d'erreur dus à un problème de configuration s'affichent en général en moins d'une minute. Il vaut donc la peine de cliquer sur « Recalculer » (Neu berechnen) et d'attendre un instant pour voir si un message d'erreur apparaît.

Conseil : en cas de modification des prix ou des locataires (adresses, date d'emménagement ou de déménagement), aucun recalcul n'est nécessaire. Dans tous les autres cas, un recalcul est toujours nécessaire.

![Définir les tarifs d'électricité – Figure 12](/img/konfiguration-billing-stromtarife-definieren/12.png)

### Saisir le tarif de puissance

![Définir les tarifs d'électricité – Figure 13](/img/konfiguration-billing-stromtarife-definieren/13.png)

Les tarifs de puissance de pointe permettent de couvrir des modèles tarifaires étendus ou nouveaux proposés par les fournisseurs d'énergie.

Sur la fiche tarifaire, vous le reconnaissez à son unité, généralement indiquée sous la forme 1.50.- / kW / mois, par exemple.

Dans notre exemple, nous saisissons le prix calculé.

Les coûts de puissance de pointe peuvent être saisis selon l'une de deux méthodes :

- Mesure de la consommation : automatiquement, par votre propre mesure de bilan

- Saisie des coûts : saisie ultérieure des coûts par mois, après réception de la facture


Durée de validité :
La durée de validité d'un tarif de puissance de pointe est limitée à 1 an. Vous pouvez le créer plusieurs fois pour plusieurs années.

Les tarifs de pointe reposent soit sur les coûts mensuels effectifs (facture du fournisseur d'énergie), soit sur le tarif enregistré et la mesure active du point de mesure principal.

![Définir les tarifs d'électricité – Figure 14](/img/konfiguration-billing-stromtarife-definieren/14.png)

### Saisir la taxe de base à 80 % (si la méthode à 80 % avec taxe de base a été choisie)

Dans cet exemple, nous utilisons la méthode à 80 % avec taxe de base. Ces coûts doivent donc encore être saisis sous « Divers » (Sonstiges)

![Définir les tarifs d'électricité – Figure 15](/img/konfiguration-billing-stromtarife-definieren/15.png)

Les coûts de la taxe de base s'appliquent à toutes les unités de décompte. Vous pouvez donc les enregistrer globalement dans les tarifs pour l'année 2026.

![Définir les tarifs d'électricité – Figure 16](/img/konfiguration-billing-stromtarife-definieren/16.png)

### Étape suivante

## Tous les détails sur les tarifs et les fonctions

## Configuration des tarifs virtuels (tarifs réseau, solaires et batterie)

Les tarifs virtuels vous permettent de définir vous-même un modèle tarifaire dynamique pour la facturation de l'énergie. Vous pouvez par exemple les utiliser dans un regroupement dans le cadre de la consommation propre (RCP ou électricité pour les locataires) pour distinguer si un locataire soutire de l'électricité d'une installation solaire ou du réseau.

Notez que tous les tarifs d'électricité normaux doivent être supprimés.

Sous « Tarifs virtuels » (Virtuelle Tarife), vous voyez tous les tarifs virtuels déjà saisis. Cliquez sur « Ajouter » (Hinzufügen) et saisissez tous les tarifs virtuels.

Nom (Name) : le nom du tarif est également affiché à l'utilisateur (locataire).

Type de tarif (Tarif Type)

- Tarif solaire vRCP (nouveau) (Solartarif vZEV (neu)) :
    Permet de créer un tarif solaire global dans un RCP ou un RCP virtuel (vRCP).
    L'énergie solaire est répartie uniformément entre tous les consommateurs et repose sur la somme des bilans des maisons (RCP) et sur la somme des productions (compteurs solaires et/ou compteurs de batterie). Avec ce tarif, il n'est pas nécessaire de mesurer 100 % des charges si un compteur de raccordement est physiquement présent. Les compteurs virtuels de somme ne sont plus nécessaires avec ce tarif.

- Tarif solaire (legacy) (Solartarif (legacy)) :
    Permet de facturer l'énergie d'une installation solaire au sein d'un RCP.
    Permet de réaliser des RCP avec ou sans compteur de bilan (GRD). Ce tarif nécessite un compteur virtuel de somme de toutes les charges concernées (mesure à 100 %).

- Tarif batterie (legacy) (Batterietarif (legacy)) :
    Permet de répartir l'énergie d'une batterie couplée en AC au sein d'un RCP. Ce tarif n'est compatible qu'avec le tarif solaire (legacy). Il nécessite un compteur virtuel de somme de toutes les charges concernées (mesure à 100 %).

- Tarif réseau (tarif normal ou tarif dynamique) (Netztarif) :
    Permet de facturer l'électricité du réseau. Si nécessaire, celle-ci peut en plus être répartie en heures pleines et heures creuses, ou de manière dynamique.

- Condition supplémentaire (Zusätzliche Bedingung)
    Une condition supplémentaire vous permet de définir quand ce tarif est valable. Il peut s'agir d'une plage horaire (p. ex. pour les heures pleines/heures creuses) ou de toute autre condition. La condition doit avoir été définie au préalable comme [action si/alors](/konfiguration/wenndann-aktionen).


Généralités sur les tarifs

Pour chaque tarif, vous pouvez enregistrer un prix par unité de consommation et une période de validité.

Prix / kWh (Preis / kWh) : le prix de ce tarif

Valable du (Gültig von) : la date à partir de laquelle ce tarif doit être valable. Voir la remarque.

Valable jusqu'au (Gültig bis) : la date jusqu'à laquelle ce tarif doit être valable. Voir la remarque.

Remarques :

- Nous recommandons de définir la validité du 1.1.2000 au 31.12.2099. Cette façon de faire suppose que les factures soient envoyées à la même périodicité que celles du fournisseur d'énergie local. Dans ce cas, le prix peut être fixé avant la création des factures. Si seul le prix est modifié dans smart-me Billing, il n'est pas nécessaire de cliquer sur le bouton « Recalculer » (neu rechnen). Pour toutes les autres modifications, le recalcul est en revanche nécessaire.

- Une fois tous les tarifs définis, vous devez cliquer sur « Recalculer » (Neu berechnen). Tous les tarifs virtuels sont alors calculés et activés. Cette opération peut prendre quelques heures.

- Si une ou plusieurs conditions sont enregistrées, l'ensemble des tarifs doit couvrir les 24 heures de la journée. Si un tarif normal sans condition est enregistré, il prend automatiquement en charge toutes les quantités d'énergie qui ne peuvent pas être attribuées et couvre ainsi les 24 heures. Sinon, veillez à ce que les horaires des conditions soient correctement configurés (voir l'exemple ci-dessus).


![Définir les tarifs d'électricité – Figure 17](/img/konfiguration-billing-stromtarife-definieren/17.png)

<Video src="7iLDy1YZDyY" title="Vidéo YouTube, Tarifs virtuels" />

### Tarif réseau

Le tarif réseau peut être saisi sous les formes suivantes :

- tarif unique (statique ou dynamique)

- double tarif

- multitarif




Tarif unique (statique et dynamique)

Le tarif unique peut être créé soit de manière statique (tarif fixe), soit de manière dynamique.

Tarif fixe

Le tarif fixe applique le prix défini par kWh d'électricité du réseau.



Tarif dynamique

Le tarif dynamique, en revanche, s'appuie sur une API externe et interroge le fournisseur disponible pour obtenir le prix en vigueur pour chaque heure.

Le prix est ensuite appliqué heure par heure.

Notez que les prix dynamiques ne transmettent pas tous les coûts pertinents et que des saisies supplémentaires sont nécessaires :

- Taxes supplémentaires, comme les redevances de concession de la commune
    (à saisir comme prix fixe supplémentaire)

- Frais de raccordement mensuels (section « Divers » (Sonstiges))


Le calcul des factures avec un tarif dynamique prend sensiblement plus de temps qu'avec les autres méthodes (transfert et application des données).



Double tarif et multitarifs

Un tarif (tarif réseau) est créé pour chaque tarif différent. Ces tarifs sont ensuite liés à des horaires à l'aide des conditions.

Les horaires sont définis au moyen des actions [SI/ALORS](/konfiguration/wenndann-aktionen).



![Définir les tarifs d'électricité – Figure 18](/img/konfiguration-billing-stromtarife-definieren/18.png)

### Configurer le tarif solaire vRCP

Le tarif solaire vRCP permet de mettre en œuvre des solutions RCP et RCP virtuel (vRCP).

La configuration du tarif solaire vRCP calcule l'excédent effectif d'un RCP virtuel et le soutirage effectif du réseau à partir de plusieurs compteurs de production solaire et compteurs de raccordement.

Le calcul tient compte des excédents individuels de chaque maison et, en même temps, de la demande des autres maisons pour cet excédent.

S'il existe une demande, l'excédent est mis à disposition de la maison voisine. Sinon, il est identifié comme injection dans le réseau.



La solution prend en charge les configurations suivantes :

- Réalisation d'un
    \- RCP avec compteur de bilan et solaire (bilan + production)
    \- RCP avec bilan et consommation totale (consommation + bilan)
    \- RCP avec solaire et consommation totale (production + consommation)

- vRCP : plusieurs RCP smart-me avec compteurs de raccordement

- vRCP : combinaison de RCP smart-me avec des bâtiments comportant uniquement des consommateurs

- vRCP : combinaison de RCP smart-me avec des maisons individuelles équipées d'installations solaires

- vRCP : plusieurs RCP smart-me combinés avec d'anciens modèles pratiques du GRD


Remarque :
Avec ce système tarifaire, la batterie ne peut pas faire l'objet d'une tarification séparée.

![Définir les tarifs d'électricité – Figure 19](/img/konfiguration-billing-stromtarife-definieren/19.png)

Tarifer un RCP

- Compteur de raccordement

- Mesure de production (PV + batterie)


![Définir les tarifs d'électricité – Figure 20](/img/konfiguration-billing-stromtarife-definieren/20.png)

Tarifer un RCP sans compteur de bilan

- Mesure de production (comme production et bilan)

- Tous les consommateurs (100 %)


![Définir les tarifs d'électricité – Figure 21](/img/konfiguration-billing-stromtarife-definieren/21.png)

Légende

Le point de couleur indique de quelle manière chaque compteur doit être enregistré dans le tarif

![Définir les tarifs d'électricité – Figure 22](/img/konfiguration-billing-stromtarife-definieren/22.png)

Tarifer un vRCP étendu avec différentes combinaisons de schémas de mesure

![Définir les tarifs d'électricité – Figure 23](/img/konfiguration-billing-stromtarife-definieren/23.png)

Tarifer des maisons mitoyennes comme vRCP

![Définir les tarifs d'électricité – Figure 24](/img/konfiguration-billing-stromtarife-definieren/24.png)

### Configurer les tarifs solaire et batterie

Les tarifs solaires et les tarifs batterie de la gamme legacy permettent de mettre en œuvre un RCP avec ou sans compteur de bilan.

Ce groupe de tarification permet :

- un RCP avec ou sans compteur de bilan

- une tarification différente pour l'électricité de la batterie et l'électricité solaire


Conditions d'utilisation :

- Application d'un schéma de mesure à 100 % : l'ensemble des consommateurs mesurés doit correspondre à 100 % de la charge.

- Nécessite un compteur virtuel de somme de toutes les charges.


Compteur solaire ou compteur de batterie
Pour le tarif solaire et le tarif batterie, vous devez indiquer le compteur qui mesure la batterie ou l'installation solaire.

Consommation totale
Pour le tarif solaire et le tarif batterie, vous devez indiquer un compteur qui mesure tous les consommateurs entre lesquels cette énergie doit être répartie. Il s'agit le plus souvent d'un compteur virtuel qui additionne tous les consommateurs (attention : les compteurs virtuels nécessitent alors une licence supplémentaire).

Compteur de bilan
Pour le tarif solaire et le tarif batterie, un compteur de bilan peut être indiqué en option. Si le compteur de bilan est indiqué, l'énergie injectée dans le réseau est prise en compte dans le calcul du tarif solaire. Concrètement, seule l'énergie solaire effectivement consommée dans le bâtiment est répartie par tranche de 15 minutes (énergie disponible = production PV - injection dans le réseau).

Attention :
Sans compteur de bilan physique, des écarts de 10 à 15 % dans l'attribution des tarifs ne sont pas inhabituels.

Compteurs virtuels de somme

- Le compteur virtuel de somme (consommation totale) est nécessaire pour constituer la référence de l'attribution des tarifs. Il est formé à partir de tous les compteurs de charge et il est payant (1 licence Professional).

    La somme des compteurs doit correspondre exactement à 100 % de la charge. Si des compteurs sont montés en série, seul celui qui est le plus proche du tableau de distribution secondaire / du raccordement de la maison est pertinent.
    Les compteurs solaires, les compteurs de batterie et les compteurs de raccordement doivent être exclus.

- S'il y a plusieurs installations solaires dans le système et qu'elles ne peuvent pas être mesurées ensemble, une licence supplémentaire est nécessaire pour la production totale.

    Plus d'informations : [Compteurs virtuels](/konfiguration/billing/virtuelle-zaehler)


![Définir les tarifs d'électricité – Figure 25](/img/konfiguration-billing-stromtarife-definieren/17.png)

Tarifer un RCP avec les tarifs legacy (1 maison)

![Définir les tarifs d'électricité – Figure 26](/img/konfiguration-billing-stromtarife-definieren/26.png)

![Définir les tarifs d'électricité – Figure 27](/img/konfiguration-billing-stromtarife-definieren/27.png)

Tarifer un RCP avec les tarifs legacy (plusieurs maisons)

![Définir les tarifs d'électricité – Figure 28](/img/konfiguration-billing-stromtarife-definieren/28.png)

![Définir les tarifs d'électricité – Figure 29](/img/konfiguration-billing-stromtarife-definieren/29.png)

## Tarifs de puissance de pointe

Les tarifs de puissance de pointe permettent de couvrir des modèles tarifaires étendus ou nouveaux proposés par les fournisseurs d'énergie.

- Double tarif pour la consommation de base + puissance de pointe
    (tarifs virtuels combinés avec le tarif Peak)

- Tarif unique pour la consommation de base + puissance de pointe
    (tarifs virtuels combinés avec le tarif Peak)

- Tarif de pointe seul, sans tarifs de base


Durée de validité :
La durée de validité d'un tarif de puissance de pointe est limitée à 1 an. Vous pouvez le créer plusieurs fois pour plusieurs années.

Les tarifs de pointe reposent soit sur les coûts mensuels effectifs (facture du fournisseur d'énergie), soit sur le tarif enregistré et la mesure active du point de mesure principal.

![Définir les tarifs d'électricité – Figure 30](/img/konfiguration-billing-stromtarife-definieren/30.png)

Exemple d'un tarif d'électricité saisi sur la base des coûts (saisie des coûts)

Fonctionnement général :

Les coûts de tarif de pointe saisis, ou les coûts calculés automatiquement à partir de la mesure et du tarif enregistré, sont répartis entre les consommateurs lors de la création des factures, selon l'intervalle de calcul choisi.

La base de calcul est la pointe de puissance (soutirage du réseau uniquement) causée par chaque consommateur dans la période de décompte et dans l'intervalle de calcul choisi.

![Définir les tarifs d'électricité – Figure 31](/img/konfiguration-billing-stromtarife-definieren/31.png)

### Tarifs de pointe sans mesure principale active (saisie manuelle des coûts)

Convient à tous les systèmes qui ne disposent pas de mesure de référence.

![Définir les tarifs d'électricité – Figure 32](/img/konfiguration-billing-stromtarife-definieren/32.png)

![Définir les tarifs d'électricité – Figure 33](/img/konfiguration-billing-stromtarife-definieren/33.png)

### Tarifs de pointe avec mesure principale active (calcul automatique des coûts)

Convient à tous les systèmes qui disposent d'une mesure de bilan directe.

![Définir les tarifs d'électricité – Figure 34](/img/konfiguration-billing-stromtarife-definieren/34.png)

## FAQ

Configuration : tarif unique sans solaire

- Dans ce cas, nous recommandons de ne pas utiliser de tarifs virtuels. Les tarifs d'électricité (tous) sont plus efficaces dans ce cas. Il est possible à tout moment de passer des tarifs d'électricité aux tarifs virtuels.


Logique : les relevés du compteur sont interrogés et utilisés pour le Billing. Aucun calcul n'est nécessaire.

Configuration : tarif unique avec solaire

- Tarif unique pour l'électricité solaire : définir un tarif solaire sans action si

- Tarif unique pour l'électricité du réseau : définir un tarif normal sans action si


Logique : l'électricité solaire disponible est répartie en premier. S'il n'y en a pas assez ou pas du tout, le tarif normal est utilisé.

Configuration : heures pleines et heures creuses pour l'électricité du réseau et tarif unique pour l'électricité solaire

- Tarif unique pour l'électricité solaire : définir un tarif solaire sans action si

- Heures pleines pour l'électricité du réseau : définir un tarif normal avec action si

    - Exemple : lu à ve 7h00 à 22h00 ou sa 7h00 à 13h00

- Heures creuses pour l'électricité du réseau : définir un tarif normal sans action si


Logique : l'électricité solaire disponible est répartie en premier. S'il n'y en a pas assez ou pas du tout, le tarif normal qui remplit une condition est utilisé. Enfin, le tarif sans condition est appliqué à l'électricité restante.

Configuration : heures pleines et heures creuses pour l'électricité du réseau et l'électricité solaire

- Heures pleines pour l'électricité solaire : définir un tarif solaire avec action si

    - Exemple : lu à ve 7h00 à 22h00 ou sa 7h00 à 13h00

- Heures creuses pour l'électricité solaire : définir un tarif solaire avec action si

    - Exemple : lu à ve 22h00 à 7h00 ou sa 13h00 à 7h00 ou di 0h00 à 0h00

- Heures pleines pour l'électricité du réseau : définir un tarif normal avec action si

    - Utiliser la même action si que pour les heures pleines de l'électricité solaire

- Heures creuses pour l'électricité du réseau : définir un tarif normal avec action si

    - Utiliser la même action si que pour les heures creuses de l'électricité solaire


Logique : l'électricité solaire disponible est utilisée en premier, avec la condition valable. S'il n'y en a pas assez ou pas du tout, le tarif normal avec la condition valable est utilisé. Dans ce cas d'application, il est important que les 24 h de la journée soient couvertes par une condition si.

Configuration : été et hiver avec heures pleines et heures creuses pour l'électricité du réseau et tarif unique pour l'électricité solaire

- Heures pleines pour l'électricité solaire : définir un tarif solaire sans action si

- Heures pleines été pour l'électricité du réseau : définir un tarif normal avec action si

    - Exemple : plage horaire chaque jour : lu à di 7h00 à 22h00 et plage chaque année du 1 / 04 / 00:00 au 1 / 10 / 00:00.

- Heures creuses été pour l'électricité du réseau : définir un tarif normal avec action si

    - Exemple : plage horaire chaque jour : lu à di 22h00 à 07h00 et plage chaque année du 1 / 04 / 00:00 au 1 / 10 / 00:00.

- Heures pleines hiver pour l'électricité du réseau : définir un tarif normal avec action si

    - Exemple : plage horaire chaque jour : lu à di 7h00 à 22h00 et plage chaque année du 1 / 10 / 00:00 au 1 / 4 / 00:00.

- Heures creuses hiver pour l'électricité du réseau : définir un tarif normal avec action si

    - Exemple : plage horaire chaque jour : lu à di 22h00 à 07h00 et plage chaque année du 1 / 10 / 00:00 au 1 / 4 / 00:00.


Logique : l'électricité solaire disponible est utilisée en premier. S'il n'y en a pas assez ou pas du tout, le tarif normal avec la condition valable est utilisé. Dans ce cas d'application, il est important que les 24 h de la journée soient couvertes par une condition si.

Configuration : été et hiver avec heures pleines et heures creuses pour l'électricité du réseau, tarif unique pour l'électricité solaire et heures creuses à midi uniquement en hiver (p. ex. EWS/EBS)

Exemple

- Heures creuses hiver pour l'électricité du réseau et solaire

    - Exemple : HC hiver 22h00 à 07h00 entre le 1.10 et le 1.4.

    - Action si/alors avec liaison ET

        - Plage horaire chaque jour : lu à di 22h00 à 07h00

        - Plage chaque année du 1 / 10 / 00:00 au 1 / 04 / 00:00.

- Heures pleines hiver pour l'électricité du réseau et solaire

    - Exemple : HP hiver 07h00 à 22h00 entre le 1.10 et le 1.4.

    - Action si/alors avec liaison ET

        - Plage horaire chaque jour : lu à di 7h00 à 22h00

        - Plage chaque année du 1 / 10 / 00:00 au 1 / 04 / 00:00.

- Heures creuses été pour l'électricité du réseau et solaire

    - Exemple : HC été 00h00 à 06h00 et 12h00 à 15h00 entre le 1.4 et le 1.10

    - Action si/alors avec liaison ET

        - Plage horaire chaque jour : lu à di 12h00 à 06h00

        - Plage horaire chaque jour : lu à di 00h00 à 15h00

        - Plage chaque année du 1 / 4 / 00:00 au 1 / 10 / 00:00.

- Heures pleines été pour l'électricité du réseau et solaire

    - Exemple : HP été 06h00 à 12h00 et 15h00 à 00h00 entre le 1.4 et le 1.10

    - Action si/alors avec liaison ET

        - Plage horaire chaque jour : lu à di 06h00 à 00h00

        - Plage horaire chaque jour : lu à di 15h00 à 12h00

        - Plage chaque année du 1 / 4 / 00:00 au 1 / 10 / 00:00.


Logique : l'électricité solaire disponible est utilisée en premier. S'il n'y en a pas assez ou pas du tout, le tarif normal avec la condition valable est utilisé. Dans ce cas d'application, il est important que les 24 h de la journée soient couvertes par une condition si.

Configuration : été et hiver avec heures pleines et heures creuses pour l'électricité du réseau et l'électricité solaire, heures creuses en journée en été et heures pleines en hiver (p. ex. Energie Uri dès le 1.10.2025)

Description : il faut ici procéder en deux étapes : une fois avec les actions si/alors et une fois avec les périodes dans les tarifs virtuels.

Il faut d'abord définir les actions si.

- HC été pour l'électricité du réseau et solaire

    - Exemple : HC été lu à ve 06h00 à 22h00 et sa et di en permanence

    - Nom : Uri Sommer NT

    - Action si/alors avec liaison OU

        - Plage horaire lu à ve : 6h00 à 22h00

        - Plage horaire sa et di : 00h00 à 00h00




- HP été pour l'électricité du réseau et solaire

    - Exemple : HP été lu à ve 22h00 à 06h00

    - Nom : Uri Sommer HT

    - Action si/alors

        - Plage horaire lu à ve : 22h00 à 06h00




- HC hiver pour l'électricité du réseau et solaire

    - Exemple : HC hiver lu à ve 22h00 à 06h00 et sa et di en permanence

    - Nom : Uri Winter NT

    - Action si/alors avec liaison OU

        - Plage horaire lu à ve : 22h00 à 06h00

        - Plage horaire sa et di : 00h00 à 00h00




- HP hiver pour l'électricité du réseau et solaire

    - Exemple : HP hiver lu à ve 06h00 à 22h00

    - Nom : Uri Winter HT

    - Action si/alors avec liaison OU

        - Plage horaire lu à ve : 06h00 à 22h00


Il faut ensuite définir les prix par période.

Dans ce cas, les périodes ou durées doivent être enregistrées. Ce modèle tarifaire nécessite une combinaison d'actions si/alors et de périodes.

- Nom : Uri Sommer HT Netz

    - Type : tarif réseau (Netztarif)

    - Durée : 1.4.2026 au 30.9.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Sommer HT

- Nom : Uri Sommer HT Solar


- Type : tarif solaire incl. vRCP (Solartarif inkl. vZEV)

- Durée : 1.4.2026 au 30.9.2026

- Condition supplémentaire (Zusätzliche Bedingung) : Uri Sommer HT


- Nom : Uri Sommer NT Netz

    - Type : tarif réseau (Netztarif)

    - Durée : 1.4.2026 au 30.9.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Sommer NT

- Nom : Uri Sommer NT Solar

    - Type : tarif solaire incl. vRCP (bilan/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durée : 1.4.2026 au 30.9.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Sommer NT

- Nom : Uri Winter HT Netz

    - Type : tarif réseau (Netztarif)

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Winter HT

- Nom : Uri Winter HT Solar

    - Type : tarif solaire incl. vRCP (bilan/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Winter HT

- Nom : Uri Winter NT Netz

    - Type : tarif réseau (Netztarif)

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Winter NT

- Nom : Uri Winter NT Solar

    - Type : tarif solaire incl. vRCP (bilan/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Winter NT


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, Wiki Tarife Enerige Uri Tarife 2026.mp4" />

Wiki Tarife Enerige Uri Tarife 2026.mp4

## Systèmes alimentés uniquement par le réseau (solution avec signal externe)

Tarifs d'électricité (pris en charge uniquement si la fonction VEWA n'est pas utilisée)

Pour accéder aux réglages des tarifs d'électricité, cliquez à gauche sur l'immeuble et faites défiler jusqu'à la fenêtre verte « Tarifs électricité » (Tarife Elektrizität). Les deux tarifs T1 et T2 y sont affichés. Sélectionnez l'un des tarifs et cliquez sur « Modifier » (Editieren) pour changer ses propriétés (p. ex. nom, prix, etc.).

Pour pouvoir travailler avec les tarifs d'électricité, le signal tarifaire du fournisseur d'électricité doit être raccordé à l'entrée tarifaire des compteurs concernés.

![Définir les tarifs d'électricité – Figure 35](/img/konfiguration-billing-stromtarife-definieren/35.png)
