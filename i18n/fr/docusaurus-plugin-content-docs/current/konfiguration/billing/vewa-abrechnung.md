---
title: 'VEWA - Décompte'
slug: '/konfiguration/billing/vewa-abrechnung'
description: 'Introduction smart-me à partir de 2 min 20 s'
sidebar_label: 'VEWA - Décompte'
naechste_schritte: [konfiguration/billing/index]
---
![VEWA - Décompte – Illustration 1](/img/konfiguration-billing-vewa-abrechnung/01.png)

## Webinaire VEWA

<Video src="nrziX2lLI0s" title="Vidéo YouTube" />

- [Introduction smart-me](https://youtu.be/nrziX2lLI0s?si=ufIjxwLFavDER5VH&t=140) à partir de 2min 20sec 

- [VEWA](https://youtu.be/nrziX2lLI0s?si=O-Q5qFbhTNm4v4s-&t=770) à partir de 12min 50sec

- [Démo en direct](https://youtu.be/nrziX2lLI0s?si=CYljDSjMHWwKagCu&t=1498) à partir de 24min 58sec 

- [Questions](https://youtu.be/nrziX2lLI0s?si=sr3GAi-mrt6gyLyQ&t=2432) à partir de 40min 32sec 


## Généralités sur VEWA

VEWA désigne le décompte des frais d'énergie et d'eau en fonction de la consommation (Verbrauchsabhängige Energie- und Wasserkosten Abrechnung). Il fournit un guide pour une répartition équitable de tous les types de coûts énergétiques et comprend :

- Chaleur

- Froid

- Eau chaude sanitaire

- Eau froide 

- Électricité (peut aussi être traitée séparément)


Le VEWA succède au décompte VHKA bien connu et prend en charge davantage d'agents énergétiques ainsi que des procédures simplifiées.

Le VEWA assure la répartition des coûts pour des systèmes de chauffage séparés ou combinés sur la base des valeurs mesurées par les compteurs et répartit les coûts de la manière la plus équitable possible.

Pour la chaleur, le froid et l'eau chaude sanitaire, des procédures spécifiques sont appliquées afin de compenser les inégalités liées à la situation des logements, les pertes dans les conduites ou d'autres différences entre les consommateurs.

Les formes de répartition des coûts suivantes existent :

Centres de coûts séparés

- Chaque énergie provient d'une source différente


![VEWA - Décompte – Illustration 2](/img/konfiguration-billing-vewa-abrechnung/02.png)

Chaleur et eau chaude sanitaire combinées

- Chauffage de tout type avec accumulateur d'eau chaude raccordé


![VEWA - Décompte – Illustration 3](/img/konfiguration-billing-vewa-abrechnung/03.png)

Chaleur + froid et eau chaude sanitaire combinés

- Pompe à chaleur avec freecooling


![VEWA - Décompte – Illustration 4](/img/konfiguration-billing-vewa-abrechnung/04.png)

## Fonctionnalités

### Quels systèmes peuvent être décomptés avec smart-me VEWA ?

- systèmes de chauffage et d'eau séparés (chaleur, froid, eau chaude sanitaire, eau froide)

- systèmes de chauffage et d'eau chaude sanitaire combinés (chaleur + eau chaude sanitaire, froid, eau froide)

- systèmes de chauffage, d'eau chaude sanitaire et de refroidissement combinés (chaleur + froid + eau chaude sanitaire, eau froide)


Pour qu'un type d'énergie puisse être décompté, il faut que des compteurs de consommation soient installés dans les unités pour chaque type d'énergie.

Remarque : 

- Les répartiteurs de frais de chauffage ne sont pas pris en charge

- En cas de décompte avec des compteurs de production totale, les coûts peuvent être répartis en pourcentage sur les unités d'habitation.


![VEWA - Décompte – Illustration 5](/img/konfiguration-billing-vewa-abrechnung/05.png)

Locaux communs :

Il est possible de répartir ultérieurement (Billing) en pourcentage des ensembles de compteurs regroupés dans des dossiers sur des unités de décompte.

Cela est pris en charge pour les deux variantes de système ci-dessus.

### Combien de systèmes peuvent être configurés dans un compte ?

Un système VEWA peut être décompté par immeuble. En présence de plusieurs systèmes de chauffage, plusieurs immeubles sont créés dans le même compte.

Ceux-ci peuvent ensuite être décomptés individuellement avec des périodes de décompte différentes.

### Fonctionnement général de smart-me VEWA

- Le VEWA peut être appliqué à chaque immeuble. Veillez donc à ce que tous les compteurs de consommation d'un même système de chauffage se trouvent dans le même immeuble.
    Si un même système de chauffage dessert plusieurs bâtiments, ceux-ci doivent être regroupés en un seul.

- Lors de l'application du VEWA, tous les contrats de bail ainsi que les logements vacants doivent être correctement saisis dans l'état locatif. Soit dans smart-me Billing, soit dans le logiciel immobilier externe en cas d'utilisation de fichiers DTA-VKA.


## Configurer VEWA

1.  ### Activer VEWA et configurer les répartitions des coûts.


Sélectionner le système de chauffage :

- Chaleur, froid et eau chaude sanitaire combinés (Wärme, Kälte und Warmwasser kombiniert)

- Chaleur, eau chaude sanitaire combinées (Wärme, Warmwasser kombiniert)

- Systèmes séparés (Separierte Systeme)


Le choix d'un système combiné ou non dépend de la production de chaleur. Si, par exemple, une pompe à chaleur est utilisée pour le chauffage, le refroidissement et la production d'eau chaude sanitaire, le décompte combiné est indiqué, car la grandeur de dépense est la même pour les trois énergies, à savoir l'électricité.

Si en revanche le chauffage est assuré par un chauffage au mazout, mais que l'eau chaude sanitaire est produite de manière purement électrique sans l'appui du chauffage au mazout, il convient de choisir des décomptes non combinés.

Répartition des coûts

La répartition des coûts divise les coûts totaux en coûts fixes (coûts de base) et en coûts variables (coûts liés à la consommation).

Coûts de base

Les coûts de base tiennent compte des éventuelles pertes dans les conduites, des pertes de circulation, de la situation privilégiée d'un logement bénéficiant de plus d'ensoleillement, etc., et répartissent une part des coûts sur tous les locataires selon leur part de surface dans l'ensemble de l'immeuble.

Coûts variables

Les coûts variables sont appliqués directement aux quantités d'énergie consommées et saisies. Ils correspondent à la consommation individuelle de chaque locataire.

Production d'eau chaude sanitaire

Afin de pouvoir estimer, à partir des valeurs en m3, l'énergie utilisée pour la production d'eau chaude sanitaire, la formule standard suivante est appliquée :

Énergie eau chaude sanitaire en kWh =
Total des valeurs de consommation eau chaude sanitaire \[m3\] \* 1.163 \* différence de température \[K\] \* 1,25

La différence de température peut être choisie ; elle correspond à l'écart entre la température de l'eau froide à son entrée dans le bâtiment (généralement +10°C) et la température moyenne du chauffe-eau une fois l'eau chauffée (généralement +52°C).

Selon cet exemple, la différence est de : 

Différence de température = température cible - température d'entrée = 52°C - 10°C = 42 K

![VEWA - Décompte – Illustration 6](/img/konfiguration-billing-vewa-abrechnung/06.png)

Valeurs indicatives pour la configuration des coûts de base et des coûts variables :

Nouvelles constructions (tout à partir de 2018) : 

- Coûts de base 30%, coûts variables 70%


Anciens bâtiments rénovés (isolation améliorée selon le standard des nouvelles constructions) :

- Coûts de base 40%, coûts variables 60%


Anciens bâtiments non rénovés (avant 2018) :

- Coûts de base de 40%\-50%, coûts variables de 50-60%

- En outre, une compensation de situation doit être calculée pour chaque logement. Soit la valeur mesurée du compteur du logement est réduite, soit les pourcentages de répartition du compteur total sont pondérés. 
    (Détails au chapitre 10 du document VEWA sous littérature complémentaire)


Ici, les valeurs mesurées des compteurs des logements peuvent être modifiées afin d'effectuer l'adaptation à la situation : [Configuration des compteurs/dossiers](/konfiguration/ordnerkonfiguration)  

- Si un compteur doit réduire sa valeur mesurée de 20% : 
    la correction de valeur (Wertkorrektur) est réglée de 100% à 80%.


### 2\. Saisir une période de décompte

Les coûts peuvent être saisis par type d'énergie en tant que coûts complets.
Pour les systèmes combinés, les coûts individuels des différents agents énergétiques sont additionnés.

![VEWA - Décompte – Illustration 7](/img/konfiguration-billing-vewa-abrechnung/07.png)

### 3\. Créer des périodes de décompte et définir le contenu de la période de facturation

<div className="row">
<div className="col col--4">

1.  Création de la période de décompte

2.  Activer ou désactiver le contenu

Si l'électricité et les frais de chauffage et charges accessoires sont décomptés à des intervalles différents, plusieurs périodes sont saisies.

p. ex. :

- Période électricité T1 2024 (uniquement électricité et divers)

- Période électricité T2 2024 (uniquement électricité et divers)

- Période électricité T3 2024 (uniquement électricité et divers)

- Période électricité T4 2024 (uniquement électricité et divers)

- Période chaleur eau 2024 (uniquement chaleur, froid, eau chaude sanitaire et eau froide)

</div>
<div className="col col--8 text--center">

![VEWA - Décompte – Illustration 8](/img/konfiguration-billing-vewa-abrechnung/08.png)

</div>
</div>

### 4\. Saisir les coûts de la période de décompte

Remarque pour l'export vers des logiciels immobiliers avec des fichiers DTA-VHKA :
Si vous souhaitez utiliser le VEWA mais exporter les données vers un autre système en pour mille ou en valeurs de consommation, vous n'avez pas besoin de saisir de coûts. La période de facturation doit toutefois être créée au préalable.

Les coûts pouvant être saisis se répartissent grosso modo comme suit :

Coûts de l'énergie

Coûts de l'agent énergétique acheté, p. ex. : 

- 1000 litres de mazout pour 2000 CHF

- 500kWh d'électricité pour 200 CHF

- 10 m3 d'eau froide pour 50 CHF


Frais accessoires d'énergie

Coûts d'exploitation et d'entretien

- Coûts de la révision périodique de l'installation de chauffage

- Coûts du service de relevé (p. ex. amortissement des coûts de licence smart-me pour les appareils)

- Travaux administratifs en lien avec l'installation de chauffage

- Coûts du ramoneur

- Élimination des déchets si le système de chauffage engendre de tels coûts.


Ce qui ne fait pas partie des frais accessoires d'énergie

- Infrastructure de mesure (celle-ci est réglée par une augmentation du loyer)


Remarque concernant les coûts de l'eau chaude sanitaire :

Les coûts de l'eau chaude sanitaire comprennent uniquement les coûts de chauffage de l'eau. La quantité d'eau froide utilisée pour la production d'eau chaude sanitaire est automatiquement reprise dans la partie eau froide. 

- Si un compteur d'eau froide général est réparti en pourcentage sur plusieurs logements, la quantité totale d'eau froide est calculée à partir de ce compteur commun.

- Si des compteurs d'eau froide et d'eau chaude se trouvent dans les logements et sont appliqués à 100% de la consommation, la somme pour l'eau froide correspond à la somme de tous les compteurs d'eau chaude et d'eau froide.


Ceux-ci peuvent être saisis par type d'énergie et sont additionnés.

![VEWA - Décompte – Illustration 9](/img/konfiguration-billing-vewa-abrechnung/09.png)

### 5\. Facturer la location des compteurs

Contrairement au RCP (regroupement dans le cadre de la consommation propre), le VEWA permet de facturer aux consommateurs les coûts d'amortissement des compteurs de chaleur et des compteurs d'eau.

Cela doit toutefois se faire par une augmentation des loyers, et non par les charges accessoires.

Les coûts du matériel et de l'installation d'un compteur peuvent être répercutés.

La durée d'amortissement est de 10 ans.

Les règles de répercussion sont décrites à l'art. 269d CO et aux art. 19 et 20 OBLF

Détails du calcul dans le document officiel VEWA sous 2.2 FORMELLE ÜBERWÄLZUNGSREGELN 

### 6\. Saisir un tarif toujours valable pour chaque agent énergétique

- Ce tarif est saisi sans prix (0) avec une validité illimitée (2099).

- Chaque agent énergétique disposant d'un tarif valable est affiché sur la facture.




![VEWA - Décompte – Illustration 10](/img/konfiguration-billing-vewa-abrechnung/10.png)

### 7\. Saisir les surfaces des logements

Pour le calcul VEWA et la répartition des coûts de base, les surfaces des logements doivent être connues. Elles peuvent être définies dans l'unité de décompte correspondante. Elles sont ensuite additionnées pour obtenir la surface totale déterminante.

Remarque : pour que la surface totale déterminante soit correctement indiquée, tous les locaux doivent être saisis en tant qu'unité de décompte, même s'ils ne sont rattachés à aucun compteur et qu'ils sont traités forfaitairement en externe.
Seuls les nombres entiers sont possibles.

![VEWA - Décompte – Illustration 11](/img/konfiguration-billing-vewa-abrechnung/11.png)

### Étape suivante

## Contenu de la facture et décompte détaillé

### Aperçu

L'aperçu (Übersicht) présente tous les coûts en un coup d'œil, y compris les éventuelles taxes appliquées et les différences d'arrondi.

![VEWA - Décompte – Illustration 12](/img/konfiguration-billing-vewa-abrechnung/12.png)

### Chaleur

La section Chaleur (Wärme) indique les coûts totaux du centre de coûts Chaleur ainsi que les clés de répartition et les grandeurs de référence appliquées.

- Part des coûts de base en % (ici 30%)

- Part des coûts de consommation en % (ici 70%)

- Consommation totale de l'immeuble en kWh (ici 700 kWh)

- Surface habitable totale de l'immeuble en m2 (ici 300 m2)


Les tarifs calculés sont ensuite appliqués au logement concerné (bloc bleu) sur la base des valeurs mesurées par les compteurs du logement.

- Surface habitable du logement en m2 (ici 100 m2)

- Jours d'occupation (ici 91 sur 91, occupation à 100%)

- Valeur mesurée du compteur du logement concerné (ici 500kWh)






![VEWA - Décompte – Illustration 13](/img/konfiguration-billing-vewa-abrechnung/13.png)

### Eau chaude sanitaire

La section Eau chaude sanitaire (Warmwasser) indique les coûts totaux du centre de coûts Eau chaude sanitaire ainsi que les clés de répartition et les grandeurs de référence appliquées.

- Part des coûts de base en % (ici 30%)

- Part des coûts de consommation en % (ici 70%)

- Consommation totale de l'immeuble en m3 (ici 5 m2)

- Surface habitable totale de l'immeuble en m2 (ici 300 m2) 


Ces coûts comprennent exclusivement les coûts nécessaires à la production d'eau chaude sanitaire, mais pas l'eau froide utilisée à cet effet.
Plus d'informations sur les coûts dans la section Aperçu des centres de coûts.

Les tarifs calculés sont ensuite appliqués au logement concerné (bloc bleu) sur la base des valeurs mesurées par les compteurs du logement.

- Surface habitable du logement en m2 (ici 100 m2)

- Jours d'occupation (ici 91 sur 91, occupation à 100%)

- Valeur mesurée du compteur du logement concerné en m3 (ici 3 m3)


![VEWA - Décompte – Illustration 14](/img/konfiguration-billing-vewa-abrechnung/14.png)

### Eau froide

La section Eau froide (Kaltwasser) indique les coûts totaux du centre de coûts Eau froide ainsi que les clés de répartition et les grandeurs de référence appliquées.

- Part des coûts de base en % (ici 20%)

- Part des coûts de consommation en % (ici 70%)

- Consommation totale de l'immeuble en m3 (ici 13 m2)

- Surface habitable totale de l'immeuble en m2 (ici 300 m2) 


Les tarifs calculés sont ensuite appliqués au logement concerné (bloc bleu) sur la base des valeurs mesurées par les compteurs du logement.

- Surface habitable du logement en m2 (ici 100 m2)

- Jours d'occupation (ici 91 sur 91, occupation à 100%)

- Valeur mesurée du compteur du logement concerné en m3 d'eau chaude sanitaire
    (ici 3 m3)

- Valeur mesurée du compteur du logement concerné en m3 d'eau froide
    (ici 5 m3)


Remarque :

Selon le système, seuls des compteurs d'eau froide ou un mélange de compteurs d'eau froide et d'eau chaude peuvent figurer ici ; la détection de ces systèmes est automatisée.

- S'il existe un compteur principal d'eau froide et aucun compteur dans les logements, ou uniquement des compteurs d'eau chaude dans les logements, seul un compteur d'eau froide au prorata en % figurerait ici.

- S'il existe des compteurs de logement pour l'eau chaude et l'eau froide, les deux compteurs figurent toujours ici pour chaque logement ; leur somme donne la consommation d'eau totale.


![VEWA - Décompte – Illustration 15](/img/konfiguration-billing-vewa-abrechnung/15.png)

### Aperçu des centres de coûts

Centres de coûts séparés

Chaque facture comporte l'aperçu des centres de coûts (Kostenstellenübersicht). Celui-ci contient tous les postes de coûts saisis pour les différents centres de coûts.

- Pour la chaleur, tous les coûts relatifs au système de chauffage sont listés.

- Pour l'eau chaude sanitaire, seuls figurent les coûts relatifs au chauffage de l'eau, mais pas ceux de la quantité d'eau froide utilisée.

- Pour l'eau froide, tous les coûts relatifs à l'eau froide et aux eaux usées sont saisis.


Centres de coûts combinés

L'aperçu des centres de coûts peut changer d'apparence lorsque des systèmes sont combinés.

Il est par exemple courant de combiner la chaleur et l'eau chaude sanitaire, car une partie de l'énergie destinée à la production d'eau chaude sanitaire provient du système de chauffage. (Accumulateur d'eau chaude couplé au chauffage)

Dans ce cas, les coûts sont présentés de manière combinée.

La particularité réside dans l'indication de la formule de conversion utilisée pour répartir l'énergie totale entre l'énergie de chauffage et l'énergie de production d'eau chaude sanitaire.

Aperçu des coûts des centres de coûts séparés

![VEWA - Décompte – Illustration 16](/img/konfiguration-billing-vewa-abrechnung/16.png)

Aperçu des centres de coûts combinés chaleur + eau chaude sanitaire
(formule de conversion sous l'aperçu des coûts)

![VEWA - Décompte – Illustration 17](/img/konfiguration-billing-vewa-abrechnung/17.png)

## Utiliser VEWA avec une interface vers un logiciel immobilier

[Échange de données avec VEWA et les fichiers DTA-VHKA](/schnittstellen/dta-vhka-files)

## Gestion des erreurs VEWA et Billing

[Dérangements en lien avec VEWA](/stoerungsbehebung/billing-fehlermeldungen)

## Littérature et documents complémentaires sur VEWA (situation juridique actuelle)

[Modèle de décompte VEWA : détails et guide](https://www.admin.ch/gov/de/start/dokumentation/medienmitteilungen.msg-id-67271.html)

[Vers l'interface VHKA](/schnittstellen/dta-vhka-files)
