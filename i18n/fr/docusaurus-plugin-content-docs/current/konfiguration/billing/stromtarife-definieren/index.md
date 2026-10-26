---
title: 'Définir les tarifs d''électricité'
slug: '/konfiguration/billing/stromtarife-definieren'
description: 'Dans la vidéo à droite, Guy vous explique les bases de la composition générale des prix de l''électricité.'
sidebar_label: 'Définir les tarifs d''électricité'
naechste_schritte: [konfiguration/billing/sonstige-kosten]
optionale_schritte: [konfiguration/wenndann-aktionen/tarifzeiten-definieren]
vorheriger_schritt: konfiguration/billing/mieterspiegel-erfassen
---
![Définir les tarifs d'électricité – Illustration 1](/img/konfiguration-billing-stromtarife-definieren/01.png)

## Fixer le prix de l'électricité

Dans la vidéo à droite, Guy vous explique les bases de la composition générale des prix de l'électricité. 



Vous pouvez désormais aussi utiliser notre calculateur de tarifs d'électricité en ligne, qui vous aide dans cette tâche et se base sur ces explications.

[Calculateur de tarifs d'électricité smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

<Video src="ju7m6Bs8U_M" title="Vidéo YouTube, smart-me Billing - Fixer les prix du RCP" />

smart-me Billing : fixer les prix du RCP, expliqué par Guy.

Attention : la vidéo a été enregistrée avec une ancienne version du fichier Excel, qui contenait encore une erreur dans les formules. Le fichier Excel a été corrigé.

[Exemple de fixation des prix dans le RCP.xlsx](https://drive.google.com/uc?export=download&id=1cGOAL1UIo4ZmvW55drHcfdPw0v4vnJ9Z) 

## Configurer les tarifs d'électricité

Dans smart-me Billing, vous pouvez travailler soit avec les tarifs d'électricité, soit avec les tarifs virtuels. La solution avec les tarifs d'électricité convient exclusivement à la réalisation de systèmes purement alimentés par le réseau. Dans tous les autres cas, il faut utiliser les tarifs virtuels.

### 1.Procurez-vous la grille tarifaire de votre fournisseur d'énergie

La grille tarifaire de votre fournisseur d'énergie est disponible en ligne sur son site web des mois avant le début de la nouvelle période tarifaire.

Renseignez-vous également sur le tarif exact que vous achetez auprès du fournisseur d'énergie : 

- Vert, bleu, gris ou d'autres variantes

- Tarif unique, double tarif ou tarif dynamique.


Lire la grille tarifaire :

Les informations pertinentes sont parfois un peu dispersées. La grille tarifaire elle-même se compose généralement de 4 parties :

- Prix de l'énergie

- Prix d'utilisation du réseau

- Redevances de mesure

- Redevances publiques


Les redevances publiques en particulier ne figurent pas intégralement sur la grille tarifaire. Les redevances communales varient d'une commune à l'autre et sont consignées dans une grille tarifaire externe. Dans 99 % des cas, le lien se trouve dans la note de bas de page de la grille tarifaire.

Procurez-vous cette valeur pour votre tarification via le lien imprimé sur la grille tarifaire.

Il s'agit généralement aussi d'une valeur en ct. / kWh, mais elle peut également être indiquée en % de l'utilisation du réseau (composantes différentes).

![Définir les tarifs d'électricité – Illustration 2](/img/konfiguration-billing-stromtarife-definieren/02.png)

### 2\. Choisissez le calcul du tarif solaire à utiliser pour votre (v)RCP

Vous pouvez choisir entre deux approches fondamentales :

- Méthode forfaitaire à 80 % du produit réseau standard
    Il est important ici que la méthode forfaitaire couvre automatiquement tous les autres coûts. Aucun coût ne peut être facturé pour la mesure, le décompte et la gestion de la vente d'électricité du RCP.

    Aucun coût ne peut être facturé ici pour la mesure du RCP, l'administration et le décompte du RCP.
    La taxe de compteur du fournisseur d'énergie pour le compteur principal du RCP ne peut pas être facturée séparément en sus.

    - -   Variante 1 : électricité du réseau facturée 1:1, électricité solaire à 80 % des coûts de base et à 80 % du prix d'achat de l'électricité du réseau
            Cette variante convient à l'optimisation du bénéfice au sein du RCP, tant que le taux d'occupation des logements loués est élevé.
            Cette méthode ne convient pas si de grands consommateurs industriels se trouvent dans le même bâtiment et qu'un système multitarif est en place.
            Meilleure solution pour les systèmes multitarifs.

        - Variante 2 : électricité du réseau 1:1, électricité solaire à 80 % du prix de référence de l'Elcom (à utiliser en cas de tarifs dynamiques du fournisseur d'énergie)
            Cette variante convient à tous les RCP sans grands consommateurs industriels et est la plus simple à mettre en œuvre.
            Meilleure option en cas de vacances locatives fréquentes.
            Si cette variante est utilisée en lien avec l'industrie et un multitarif (double tarif), il se peut que l'industriel paie au final davantage via le tarif solaire plus élevé qu'en dehors du RCP !

- Coûts effectifs (calcul des coûts de revient)
    Avec cette méthode, des coûts de mesure, de décompte et de gestion peuvent être facturés en plus de la valeur calculée de l'électricité solaire. Vous trouverez les détails à ce sujet dans le manuel VEWA. 

    - -   Cette méthode convient si 80 % du prix de l'électricité du réseau ne suffisaient éventuellement pas à couvrir les coûts de votre installation solaire. C'est très rarement le cas.

        - Cette méthode doit être justifiée année après année par le calcul et augmente la charge administrative.


### 3\. Calculez vos tarifs pour la période tarifaire

Le plus simple pour le calcul est d'utiliser notre calculateur de tarifs. Selon la méthode choisie, il vous indique quelles saisies vous devez effectuer dans smart-me.

En cas de tarif dynamique : choisissez la méthode Elcom à 80 % et recherchez dans le calculateur le tarif H4 de votre région et de votre fournisseur d'énergie comme référence.

[Calculateur de tarifs d'électricité smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

### 4\. Configurez vos tarifs

Retournez maintenant dans la configuration de l'immeuble.

1.  Facturation (Rechnungsstellung)

2.  Configuration (Konfiguration)

3.  Immeuble (Liegenschaft)

4.  Tarifs virtuels (Virtuelle Tarife)


![Définir les tarifs d'électricité – Illustration 3](/img/konfiguration-billing-stromtarife-definieren/03.png)

Créez maintenant les tarifs réseau de votre période tarifaire

<div className="row">
<div className="col col--6">

### Exemple : tarif unique

</div>
<div className="col col--6">

### Exemple : double tarif

Vous représentez le calendrier du tarif dans les actions si :

[Définir les plages tarifaires](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)

</div>
</div>


<div className="row">
<div className="col col--6">

![Définir les tarifs d'électricité – Illustration 4](/img/konfiguration-billing-stromtarife-definieren/04.png)

Exemple de tarif unique avec la méthode forfaitaire à 80 % :

Créez maintenant un tarif réseau avec le prix indiqué :

- Tarif réseau 2026 : 0.19707 CHF / kWh

![Définir les tarifs d'électricité – Illustration 5](/img/konfiguration-billing-stromtarife-definieren/05.png)

</div>
<div className="col col--6">

![Définir les tarifs d'électricité – Illustration 6](/img/konfiguration-billing-stromtarife-definieren/06.png)

Exemple de double tarif avec la méthode forfaitaire à 80 % :

Créez maintenant deux tarifs réseau avec les prix indiqués :

- Tarif réseau HP 2026 : 0.22409 CHF / kWh

- Tarif réseau HC 2026 : 0.17007 CHF / kWh

Pour les doubles tarifs, le calendrier doit d'abord être créé au moyen d'actions [SI/ALORS](/konfiguration/wenndann-aktionen) ; ces actions peuvent ensuite être liées via la « Condition supplémentaire » (Zusätzliche Bedingung) afin de piloter la validité au fil de la semaine.

![Définir les tarifs d'électricité – Illustration 7](/img/konfiguration-billing-stromtarife-definieren/07.png)

![Définir les tarifs d'électricité – Illustration 8](/img/konfiguration-billing-stromtarife-definieren/08.png)

</div>
</div>

**Créez maintenant le tarif solaire correspondant**

**Remarque :**
Il existe différents tarifs solaires et tarifs de batterie, avec des capacités et des conditions préalables différentes.

En général, le **tarif solaire vRCP (Solartarif vZEV)** est le choix le meilleur et le plus universel.

Ce qu'il ne permet pas, c'est de définir des tarifs différents pour la batterie et l'énergie solaire. Pour cela, il faut utiliser le tarif alternatif.

Vous trouverez les détails plus bas dans la section « Tous les détails ».

Dans cet exemple, le tarif solaire vRCP est utilisé.

Mesures :

Tous les tarifs solaires nécessitent des points de mesure pertinents, qui doivent être liés.

Option la plus simple : 

- Champ « Compteur solaire » (Solarzähler) : sélectionnez tous les compteurs de production (solaire et batterie).

- Champ « Compteur de bilan » (Bilanzzähler) : sélectionnez les compteurs de bilan (1 maison : compteur de raccordement de la maison ; site : compteur du site ou plusieurs compteurs de raccordement)


Option alternative : 

- Champ « Compteur solaire » (Solarzähler) : sélectionnez tous les compteurs de production (solaire et batterie).

- Champ « Compteur de bilan » (Bilanzzähler) : sélectionnez tous les compteurs de consommation et de production.


<div className="row">
<div className="col col--6">

**Tarif solaire unique**

![Définir les tarifs d'électricité – Illustration 9](/img/konfiguration-billing-stromtarife-definieren/09.png)

</div>
<div className="col col--6">

**Double tarif solaire**

![Définir les tarifs d'électricité – Illustration 10](/img/konfiguration-billing-stromtarife-definieren/10.png)

![Définir les tarifs d'électricité – Illustration 11](/img/konfiguration-billing-stromtarife-definieren/11.png)

</div>
</div>

### Lancer le nouveau calcul des tarifs d'électricité

Lorsque les tarifs virtuels sont utilisés, il faut cliquer sur Recalculer (Neu berechnen) à la fin de la configuration (ainsi que lors de modifications ultérieures de la configuration), idéalement à partir du 1.1.2018. Toutes les valeurs existantes sont ainsi recalculées.

Avant de pouvoir établir une facture, il faut attendre que la dernière valeur calculée indique « Aujourd'hui » (Heute) et qu'aucun message d'erreur n'apparaisse.

Les messages d'erreur dus à un problème de configuration s'affichent en général dans la minute. Il vaut donc la peine de cliquer sur « Recalculer » (Neu berechnen) et d'attendre un instant pour voir si un message d'erreur apparaît ou non.

Conseil : en cas de modification des prix ou des locataires (adresses, date d'emménagement ou de déménagement), un nouveau calcul n'est pas nécessaire ; dans tous les autres cas, un nouveau calcul est toujours nécessaire.

![Définir les tarifs d'électricité – Illustration 12](/img/konfiguration-billing-stromtarife-definieren/12.png)

### Saisie du tarif de puissance

![Définir les tarifs d'électricité – Illustration 13](/img/konfiguration-billing-stromtarife-definieren/13.png)

Les tarifs de pointe permettent de couvrir des modèles d'électricité étendus ou nouveaux des fournisseurs d'énergie. 

Sur la grille tarifaire, on le reconnaît à son unité. Généralement indiqué p. ex. sous la forme 1.50.- / kW / mois

Dans notre exemple, nous saisissons le prix calculé.

Les coûts de puissance de pointe peuvent être saisis selon l'une des deux méthodes suivantes :

- Mesure de la consommation : automatiquement via votre propre mesure de bilan

- Saisie des coûts : saisie ultérieure des coûts par mois après réception de la facture


Durée de validité :
La durée de validité d'un tarif de pointe est limitée à 1 an ; il peut être créé plusieurs fois pour plusieurs années.

Les tarifs de pointe se basent soit sur les coûts mensuels encourus (facture du fournisseur d'énergie), soit dépendent du tarif enregistré et de la mesure active du point de mesure principal.

![Définir les tarifs d'électricité – Illustration 14](/img/konfiguration-billing-stromtarife-definieren/14.png)

### Saisie de la taxe de base à 80 % (si la méthode à 80 % avec taxe de base a été choisie)

Dans cet exemple, nous utilisons la méthode à 80 % avec taxe de base. Ces coûts doivent donc encore être saisis sous « Divers » (Sonstiges)

![Définir les tarifs d'électricité – Illustration 15](/img/konfiguration-billing-stromtarife-definieren/15.png)

Les coûts de la taxe de base s'appliquent à toutes les unités de décompte ; ils peuvent donc être enregistrés globalement dans les tarifs pour l'année 2026.

![Définir les tarifs d'électricité – Illustration 16](/img/konfiguration-billing-stromtarife-definieren/16.png)

## Tous les détails sur les tarifs et les fonctions

À partir d'ici, la page sert d'ouvrage de référence : les sections sont repliables, afin que vous n'ouvriez que ce dont vous avez besoin.

### Configuration des tarifs virtuels (tarifs réseau, solaires, de batterie)

Les tarifs virtuels permettent de définir vous-même un modèle tarifaire dynamique pour la facturation de l'énergie. Cela peut p. ex. servir, dans un regroupement dans le cadre de la consommation propre (RCP ou électricité pour les locataires), à distinguer si un locataire soutire de l'électricité d'une installation solaire ou du réseau. 

Veuillez noter que tous les tarifs normaux d'électricité doivent être supprimés.

Sous Tarifs virtuels (Virtuelle Tarife), vous voyez tous les tarifs virtuels déjà saisis. Cliquez sur Ajouter (Hinzufügen) et saisissez maintenant tous les tarifs virtuels.

Nom (Name) : le nom du tarif est également affiché à l'utilisateur (locataire).

Type de tarif (Tarif Type) 

- Tarif solaire vRCP (nouveau) (Solartarif vZEV (neu)) :
    Il permet de créer un tarif solaire global dans un RCP ou un vRCP.
    L'énergie solaire est répartie uniformément entre tous les consommateurs et se base sur la somme des bilans des maisons (RCP) et la somme des productions (compteurs solaires et/ou compteurs de batterie). Avec ce tarif, il n'est pas nécessaire de mesurer 100 % des charges si un compteur de raccordement de la maison est physiquement présent. Les compteurs totalisateurs virtuels ne sont plus nécessaires avec ce tarif.

- Tarif solaire (legacy) (Solartarif (legacy)) :
    Il permet de facturer l'énergie d'une installation solaire au sein d'un RCP.
    Il permet de réaliser des RCP avec ou sans compteur de bilan (GRD). Le tarif nécessite un compteur totalisateur virtuel de toutes les charges pertinentes (mesure à 100 %).

- Tarif de batterie (legacy) (Batterietarif (legacy)) :
    Il permet de répartir l'énergie d'une batterie couplée en AC au sein d'un RCP. Ce tarif n'est compatible qu'avec le tarif solaire (legacy). Le tarif nécessite un compteur totalisateur virtuel de toutes les charges pertinentes (mesure à 100 %).

- Tarif réseau (tarif normal ou tarif dynamique) (Netztarif) :
    Il permet de facturer l'électricité du réseau. Si nécessaire, celle-ci peut en outre être répartie en heures pleines et heures creuses ou de manière dynamique.

- Condition supplémentaire (Zusätzliche Bedingung)
    Une condition supplémentaire vous permet de définir quand ce tarif est valable. Il peut s'agir d'une période (p. ex. pour les heures pleines / heures creuses) ou de toute autre condition. La condition doit avoir été définie au préalable en tant qu'[action si/alors](/konfiguration/wenndann-aktionen).


Généralités sur les tarifs

Pour chaque tarif, il est possible d'enregistrer un prix / une unité de consommation et une validité.

Prix / kWh (Preis / kWh) : le prix de ce tarif

Valable du (Gültig von) : la date à partir de laquelle ce tarif doit être valable. Voir remarque.

Valable jusqu'au (Gültig bis) : la date jusqu'à laquelle ce tarif doit être valable. Voir remarque.

Remarques : 

- Nous recommandons de définir la validité du 1.1.2000 au 31.12.2099. La condition pour procéder ainsi est que les factures soient envoyées à la même périodicité que celles du fournisseur d'énergie local. Dans ce cas, le prix peut être fixé avant l'établissement de la facture. Si seul le prix est modifié dans smart-me Billing, il n'est pas nécessaire d'actionner le bouton « Recalculer » (neu rechnen). Pour toutes les autres adaptations, le nouveau calcul est toutefois nécessaire.

- Une fois tous les tarifs définis, vous devez cliquer sur « Recalculer » (Neu berechnen). Tous les tarifs virtuels sont ainsi calculés et activés. Cette opération peut prendre quelques heures.

- Si une ou plusieurs conditions sont enregistrées, l'ensemble des tarifs doit couvrir les 24 heures de la journée. Si un tarif normal sans condition est enregistré, il absorbe automatiquement toutes les quantités d'énergie non attribuables et couvre ainsi les 24 heures. Sinon, il faut veiller à ce que les horaires des conditions soient correctement configurés (voir exemple ci-dessus).


![Définir les tarifs d'électricité – Illustration 17](/img/konfiguration-billing-stromtarife-definieren/17.png)

<Video src="7iLDy1YZDyY" title="Vidéo YouTube, Tarifs virtuels" />

<details id="netztarif">
<summary>Tarif réseau</summary>

Le tarif réseau peut être saisi sous la forme des tarifs suivants :

- Tarif unique (statique ou dynamique)

- Double tarif

- Multitarif




Tarif unique (statique et dynamique)

Le tarif unique peut être créé soit de manière statique (tarif fixe), soit de manière dynamique.

Tarif fixe

Le tarif fixe applique le prix / kWh d'électricité du réseau défini.



Tarif dynamique

Le tarif dynamique, en revanche, s'appuie sur une API externe et interroge le fournisseur disponible, pour chaque heure, sur le prix actuellement en vigueur.

Le prix est ensuite appliqué par heure.

Veuillez noter que les prix dynamiques ne transmettent pas tous les coûts pertinents et que des saisies supplémentaires doivent être effectuées.

- Taxes supplémentaires telles que les redevances de concession de la commune
    (à saisir en tant que prix fixe supplémentaire)

- Taxes de raccordement mensuelles (rubrique Divers (Sonstiges))


Le calcul de factures avec un tarif dynamique prend sensiblement plus de temps qu'avec les autres méthodes (transfert de données et application)



Double tarif et multitarifs

Un tarif (tarif réseau) est créé pour chaque tarif différent. Ceux-ci sont ensuite couplés à un calendrier à l'aide des conditions.

Le calendrier est défini au moyen des actions [SI/ALORS](/konfiguration/wenndann-aktionen).



![Définir les tarifs d'électricité – Illustration 18](/img/konfiguration-billing-stromtarife-definieren/18.png)

</details>

<details id="solartarif-vzev-konfigurieren">
<summary>Configurer le tarif solaire vRCP</summary>

Le tarif solaire vRCP (Solartarif vZEV) permet la mise en œuvre de solutions RCP et vRCP. 

La configuration du tarif solaire vRCP calcule l'excédent effectif d'un RCP virtuel et le soutirage effectif du réseau sur la base de plusieurs compteurs de production solaire et compteurs de raccordement de maisons. 

Le calcul tient compte des excédents individuels d'une maison et, simultanément, de la demande des autres maisons pour cet excédent.

S'il existe un besoin, l'excédent est mis à disposition de la maison voisine. S'il n'y en a pas, l'excédent est identifié comme injection dans le réseau.



La solution prend en charge les mises en œuvre suivantes :

- Réalisation d'un
    \- RCP avec compteur de bilan et solaire (bilan + production)
    \- RCP avec bilan et consommation totale (consommation + bilan)
    \- RCP avec solaire et consommation totale (production + consommation)

- vRCP : plusieurs RCP smart-me avec compteurs de raccordement de maisons

- vRCP : combinaison de RCP smart-me avec des bâtiments comportant uniquement des consommateurs

- vRCP : combinaison de RCP smart-me avec des maisons individuelles dotées d'installations solaires 

- vRCP : plusieurs RCP smart-me en combinaison avec d'anciens modèles pratiques GRD


Remarque :
La batterie ne peut pas être tarifée séparément avec ce système tarifaire.

![Définir les tarifs d'électricité – Illustration 19](/img/konfiguration-billing-stromtarife-definieren/19.png)

Tarifer un RCP

- Compteur de raccordement de la maison 

- Mesure de la production (PV + batterie)


![Définir les tarifs d'électricité – Illustration 20](/img/konfiguration-billing-stromtarife-definieren/20.png)

Tarifer un RCP sans compteur de bilan

- Mesure de la production (en tant que production et bilan)

- Tous les consommateurs (100 %) 


![Définir les tarifs d'électricité – Illustration 21](/img/konfiguration-billing-stromtarife-definieren/21.png)

Légende 

Le point de couleur indique de quelle manière le compteur concerné doit être enregistré dans le tarif

![Définir les tarifs d'électricité – Illustration 22](/img/konfiguration-billing-stromtarife-definieren/22.png)

Tarifer un vRCP étendu avec différentes combinaisons de schémas de mesure

![Définir les tarifs d'électricité – Illustration 23](/img/konfiguration-billing-stromtarife-definieren/23.png)

Tarifer des maisons individuelles mitoyennes en tant que vRCP

![Définir les tarifs d'électricité – Illustration 24](/img/konfiguration-billing-stromtarife-definieren/24.png)

</details>

<details id="solar-und-batterietarif-konfigurieren">
<summary>Configurer le tarif solaire et le tarif de batterie</summary>

Les tarifs solaires et tarifs de batterie de la gamme legacy permettent la mise en œuvre d'un RCP avec ou sans compteur de bilan.

L'utilisation de ce groupe de tarification permet ce qui suit :

- RCP avec ou sans compteur de bilan

- Tarification différente pour la batterie et l'électricité solaire


Conditions préalables à l'utilisation :

- Application d'un schéma de mesure à 100 % : l'ensemble des consommateurs mesurés doit correspondre à 100 % de la charge.

- Nécessite un compteur totalisateur virtuel de toutes les charges.


Compteur solaire ou de batterie (Solar- oder Batteriezähler)
Pour le tarif solaire et le tarif de batterie, vous devez indiquer le compteur qui mesure la batterie ou l'installation solaire. 

Consommation totale (Gesamtverbrauch)
Pour le tarif solaire et le tarif de batterie, vous devez indiquer un compteur qui mesure tous les consommateurs entre lesquels cette énergie doit être répartie. Il s'agit le plus souvent d'un compteur virtuel qui totalise tous les consommateurs (attention, les compteurs virtuels nécessitent alors une licence supplémentaire).

Compteur de bilan (Bilanzzähler)
Pour le tarif solaire et le tarif de batterie, un compteur de bilan peut être indiqué en option. Si le compteur de bilan est indiqué, l'énergie injectée dans le réseau est prise en compte lors du calcul du tarif solaire. Cela signifie que, par tranche de 15 minutes, seule l'énergie solaire effectivement consommée dans le bâtiment est répartie (énergie disponible = production PV - injection réseau).

Attention :
En renonçant au compteur de bilan physique, des écarts de l'ordre de 10-15 % dans l'attribution des tarifs ne sont pas inhabituels.

Compteurs totalisateurs virtuels

- Le compteur totalisateur virtuel (consommation totale) est nécessaire pour constituer la référence pour l'attribution des tarifs. Il est formé à partir de tous les compteurs de charge et est payant (1x licence Professional)

    La somme des compteurs doit correspondre exactement à 100 % de la charge. Si vous avez des compteurs montés en série, seul le compteur le plus proche du tableau de distribution secondaire / du raccordement de la maison est pertinent.
    Les compteurs solaires, compteurs de batterie et compteurs de raccordement de maisons doivent être exclus.

- Si plusieurs installations solaires se trouvent dans le système et ne peuvent pas être mesurées ensemble, une licence supplémentaire est nécessaire pour la production totale.

    Plus d'informations : [Compteurs virtuels](/konfiguration/virtuelle-zaehler)


![Définir les tarifs d'électricité – Illustration 25](/img/konfiguration-billing-stromtarife-definieren/17.png)

Tarifer un RCP avec les tarifs legacy (1 maison)

![Définir les tarifs d'électricité – Illustration 26](/img/konfiguration-billing-stromtarife-definieren/26.png)

![Définir les tarifs d'électricité – Illustration 27](/img/konfiguration-billing-stromtarife-definieren/27.png)

Tarifer un RCP avec les tarifs legacy (plusieurs maisons )

![Définir les tarifs d'électricité – Illustration 28](/img/konfiguration-billing-stromtarife-definieren/28.png)

![Définir les tarifs d'électricité – Illustration 29](/img/konfiguration-billing-stromtarife-definieren/29.png)

</details>

### Tarifs de pointe

Les tarifs de pointe permettent de couvrir des modèles d'électricité étendus ou nouveaux des fournisseurs d'énergie. 

- Double tarif pour la consommation de base + puissance de pointe
    (tarifs virtuels en combinaison avec le tarif Peak)

- Tarif unique pour la consommation de base + puissance de pointe
    (tarifs virtuels en combinaison avec le tarif Peak)

- Uniquement tarif de pointe sans tarifs de base


Durée de validité :
La durée de validité d'un tarif de pointe est limitée à 1 an ; il peut être créé plusieurs fois pour plusieurs années.

Les tarifs de pointe se basent soit sur les coûts mensuels encourus (facture du fournisseur d'énergie), soit dépendent du tarif enregistré et de la mesure active du point de mesure principal.

![Définir les tarifs d'électricité – Illustration 30](/img/konfiguration-billing-stromtarife-definieren/30.png)

Exemple d'un tarif d'électricité saisi sur la base des coûts (saisie des coûts)

Fonctionnement général :

Les coûts de tarif de pointe saisis ou les coûts calculés automatiquement sur la base de la mesure et du tarif enregistré sont répartis entre les consommateurs lors de l'établissement de la facture, selon l'intervalle de calcul choisi. 

La base est la pointe de puissance causée (soutirage du réseau uniquement) par chaque consommateur individuel durant la période de décompte et selon l'intervalle de calcul choisi.

![Définir les tarifs d'électricité – Illustration 31](/img/konfiguration-billing-stromtarife-definieren/31.png)

<details id="spitzentarife-ohne-aktive-hauptmessung">
<summary>Tarifs de pointe sans mesure principale active (saisie manuelle des coûts)</summary>

Convient à tous les systèmes qui ne disposent pas de mesure de référence. 

![Définir les tarifs d'électricité – Illustration 32](/img/konfiguration-billing-stromtarife-definieren/32.png)

![Définir les tarifs d'électricité – Illustration 33](/img/konfiguration-billing-stromtarife-definieren/33.png)

</details>

<details id="spitzentarife-mit-aktiver-hauptmessung">
<summary>Tarifs de pointe avec mesure principale active (calcul automatique des coûts)</summary>

Convient à tous les systèmes qui disposent d'une mesure de bilan directe.

![Définir les tarifs d'électricité – Illustration 34](/img/konfiguration-billing-stromtarife-definieren/34.png)

</details>

## FAQ

Selon le modèle tarifaire de votre fournisseur d'énergie, la configuration se présente différemment. Dépliez la structure qui correspond à votre cas.

<details id="einheitstarif-ohne-solar">
<summary>Tarif unique sans solaire</summary>

- Dans ce cas, nous recommandons de ne pas utiliser de tarifs virtuels. Les tarifs d'électricité (tous) sont plus efficaces dans ce cas. Il est possible à tout moment de passer des tarifs d'électricité aux tarifs virtuels.


Logique : les relevés du compteur sont interrogés et utilisés pour le Billing. Aucun calcul n'est nécessaire.

</details>

<details id="einheitstarif-mit-solar">
<summary>Tarif unique avec solaire</summary>

- Tarif unique électricité solaire : définir un tarif solaire sans action si

- Tarif unique électricité du réseau : définir un tarif normal sans action si


Logique : l'électricité solaire disponible est d'abord répartie. S'il n'y en a pas assez ou pas du tout, le tarif normal est utilisé.

</details>

<details id="hoch-und-niedertarif-netzstrom-einheitstarif-solar">
<summary>Heures pleines et heures creuses pour l'électricité du réseau et tarif unique pour l'électricité solaire</summary>

- Tarif unique électricité solaire : définir un tarif solaire sans action si

- Heures pleines électricité du réseau : définir un tarif normal avec action si

    - Exemple. Lu au ve 7h00 à 22h00 ou sa 7h00 à 13h00 

- Heures creuses électricité du réseau : définir un tarif normal sans action si


Logique : l'électricité solaire disponible est d'abord répartie. S'il n'y en a pas assez ou pas du tout, le tarif normal qui remplit une condition est utilisé. Enfin, le tarif sans condition est utilisé pour l'électricité restante.

</details>

<details id="hoch-und-niedertarif-netz-und-solarstrom">
<summary>Heures pleines et heures creuses pour l'électricité du réseau et l'électricité solaire</summary>

- Heures pleines électricité solaire : définir un tarif solaire avec action si

    - Exemple : lu au ve 7h00 à 22h00 ou sa 7h00 à 13h00 

- Heures creuses électricité solaire : définir un tarif solaire avec action si

    - Exemple : lu au ve 22h00 à 7h00 ou sa 13h00 à 7h00 ou di 0h00 à 0h00

- Heures pleines électricité du réseau : définir un tarif normal avec action si

    - Utiliser la même action si que pour les heures pleines de l'électricité solaire 

- Heures creuses électricité du réseau : définir un tarif normal avec action si

    - Utiliser la même action si que pour les heures creuses de l'électricité solaire 


Logique : l'électricité solaire disponible avec la condition valable est d'abord utilisée. S'il n'y en a pas assez ou pas du tout, le tarif normal avec la condition valable est utilisé. Dans ce cas d'application, il est important que les 24 h/jour soient couvertes par une condition si.

</details>

<details id="sommer-winter-netzstrom-einheitstarif-solar">
<summary>Été et hiver avec heures pleines et heures creuses pour l'électricité du réseau et tarif unique pour l'électricité solaire</summary>

- Heures pleines électricité solaire : définir un tarif solaire sans action si

- Heures pleines électricité du réseau été : définir un tarif normal avec action si

    - Exemple : période Chaque jour (Jeden Tag) : lu au di 7h00 à 22h00 et période Chaque année (Jedes Jahr) du 1 / 04 / 00:00 au 1 / 10 / 00:00.

- Heures creuses électricité du réseau été : définir un tarif normal avec action si

    - Exemple : période Chaque jour (Jeden Tag) : lu au di 22h00 à 07h00 et période Chaque année (Jedes Jahr) du 1 / 04 / 00:00 au 1 / 10 / 00:00.

- Heures pleines électricité du réseau hiver : définir un tarif normal avec action si

    - Exemple : période Chaque jour (Jeden Tag) : lu au di 7h00 à 22h00 et période Chaque année (Jedes Jahr) du 1 / 10 / 00:00 au 1 / 4 / 00:00.

- Heures creuses électricité du réseau hiver : définir un tarif normal avec action si

    - Exemple : période Chaque jour (Jeden Tag) : lu au di 22h00 à 07h00 et période Chaque année (Jedes Jahr) du 1 / 10 / 00:00 au 1 / 4 / 00:00.


Logique : l'électricité solaire disponible est d'abord utilisée. S'il n'y en a pas assez ou pas du tout, le tarif normal avec la condition valable est utilisé. Dans ce cas d'application, il est important que les 24 h/jour soient couvertes par une condition si.

</details>

<details id="sommer-winter-mit-mittagsniedertarif-im-winter">
<summary>Été et hiver avec heures pleines et heures creuses pour l'électricité du réseau, tarif unique pour l'électricité solaire et heures creuses à midi uniquement en hiver (p. ex. EWS/EBS)</summary>

Exemple

- Heures creuses électricité du réseau et solaire hiver 

    - Exemple : hiver HC 22h00 à 07h00 entre le 1.10 et le 1.4.

    - Action si/alors avec liaison ET

        - Période Chaque jour (Jeden Tag) : lu au di 22h00 à 07h00 

        - Période Chaque année (Jedes Jahr) du 1 / 10 / 00:00 au 1 / 04 / 00:00.

- Heures pleines électricité du réseau et solaire hiver 

    - Exemple : hiver HP 07h00 à 22h00 entre le 1.10 et le 1.4.

    - Action si/alors avec liaison ET

        - Période Chaque jour (Jeden Tag) : lu au di 7h00 à 22h00 

        - Période Chaque année (Jedes Jahr) du 1 / 10 / 00:00 au 1 / 04 / 00:00.

- Heures creuses électricité du réseau et solaire été

    - Exemple : été HC 00h00 à 06h00 et 12h00 à 15h00 entre le 1.4 et le 1.10

    - Action si/alors avec liaison ET

        - Période Chaque jour (Jeden Tag) : lu au di 12h00 à 06h00 

        - Période Chaque jour (Jeden Tag) : lu au di 00h00 à 15h00 

        - Période Chaque année (Jedes Jahr) du 1 / 4 / 00:00 au 1 / 10 / 00:00.

- Heures pleines électricité du réseau et solaire été 

    - Exemple : été HP 06h00 à 12h00 et 15h00 à 00h00 entre le 1.4 et le 1.10

    - Action si/alors avec liaison ET

        - Période Chaque jour (Jeden Tag) : lu au di 06h00 à 00h00 

        - Période Chaque jour (Jeden Tag) : lu au di 15h00 à 12h00 

        - Période Chaque année (Jedes Jahr) du 1 / 4 / 00:00 au 1 / 10 / 00:00.


Logique : l'électricité solaire disponible est d'abord utilisée. S'il n'y en a pas assez ou pas du tout, le tarif normal avec la condition valable est utilisé. Dans ce cas d'application, il est important que les 24 h/jour soient couvertes par une condition si.

</details>

<details id="sommer-winter-tagsueber-wechselnd-energie-uri">
<summary>Été et hiver avec heures pleines et heures creuses pour l'électricité du réseau et l'électricité solaire, heures creuses en journée en été et heures pleines en journée en hiver (p. ex. Energie Uri dès le 1.10.2025)</summary>

Description : il faut ici procéder en deux étapes. 1x avec si/alors et 1x avec les périodes dans les tarifs virtuels

Il faut d'abord définir les actions si.

- Électricité du réseau et solaire été HC

    - Exemple : été HC lu au ve 06h00 à 22h00 du lu au ve, et sa et di en permanence

    - Nom : Uri Sommer NT

    - Action si/alors avec liaison OU

        - Période lu au ve : 6h00 à 22h00 

        - Période sa et di : 00h00 à 00h00




- Électricité du réseau et solaire été HP

    - Exemple : été HP lu au ve 22h00 à 06h00

    - Nom : Uri Sommer HT

    - Action si/alors

        - Période lu au ve : 22h00 à 06h00 




- Électricité du réseau et solaire hiver HC

    - Exemple : hiver HC lu au ve 22h00 à 06h00 du lu au ve, et sa et di en permanence

    - Nom : Uri Winter NT

    - Action si/alors avec liaison OU

        - Période lu au ve : 22h00 à 06h00 

        - Période sa et di : 00h00 à 00h00




- Électricité du réseau et solaire hiver HP

    - Exemple : hiver HP lu au ve 06h00 à 22h00

    - Nom : Uri Winter HT

    - Action si/alors avec liaison OU

        - Période lu au ve : 06h00 à 22h00 


Il faut ensuite définir les prix par période.

Dans ce cas, les périodes ou durées doivent être enregistrées. Avec ce modèle tarifaire, une combinaison de si/alors et de période est nécessaire.

- Nom : Uri Sommer HT Netz

    - Type : Tarif réseau (Netztarif)

    - Durée : 1.4.2026 au 30.9.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Sommer HT

- Nom : Uri Sommer HT Solar


- Type : Tarif solaire incl. vRCP (Solartarif inkl. vZEV) 

- Durée : 1.4.2026 au 30.9.2026

- Condition supplémentaire (Zusätzliche Bedingung) : Uri Sommer HT


- Nom : Uri Sommer NT Netz

    - Type : Tarif réseau (Netztarif)

    - Durée : 1.4.2026 au 30.9.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Sommer NT

- Nom : Uri Sommer NT Solar

    - Type : Tarif solaire incl. vRCP (bilan/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durée : 1.4.2026 au 30.9.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Sommer NT

- Nom : Uri Winter HT Netz

    - Type : Tarif réseau (Netztarif)

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Winter HT 

- Nom : Uri Winter HT Solar

    - Type : Tarif solaire incl. vRCP (bilan/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Winter HT

- Nom : Uri Winter NT Netz

    - Type : Tarif réseau (Netztarif)

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Winter NT

- Nom : Uri Winter NT Solar

    - Type : Tarif solaire incl. vRCP (bilan/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Winter NT 


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, Wiki Tarife Enerige Uri Tarife 2026.mp4" />

Wiki Tarife Enerige Uri Tarife 2026.mp4

</details>

## Systèmes purement à tarifs réseau (solution à signal externe)

Tarifs d'électricité (uniquement pris en charge si la fonction VEWA n'est pas utilisée)

Pour accéder aux réglages des tarifs d'électricité, cliquez à gauche sur l'immeuble et faites défiler jusqu'à la fenêtre verte Tarifs électricité (Tarife Elektrizität). Les deux tarifs T1 et T2 y sont affichés. Sélectionnez l'un des tarifs et cliquez sur Modifier (Editieren) pour modifier ses propriétés (p. ex. nom, prix, etc.)

Pour pouvoir travailler avec les tarifs d'électricité, le signal tarifaire du fournisseur d'électricité doit être raccordé à l'entrée tarifaire des compteurs correspondants.

![Définir les tarifs d'électricité – Illustration 35](/img/konfiguration-billing-stromtarife-definieren/35.png)
