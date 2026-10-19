---
title: 'VEWA - Décompte'
slug: '/konfiguration/billing/vewa-abrechnung'
description: 'Introduction smart-me à partir de 2min 20sec'
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


## Généralités sur la VEWA

VEWA signifie décompte des frais d'énergie et d'eau en fonction de la consommation (Verbrauchsabhängige Energie- und Wasserkosten Abrechnung). Elle fournit un guide pour une répartition équitable de tous les types de frais d'énergie et comprend :

- la chaleur

- le froid

- l'eau chaude sanitaire

- l'eau froide 

- l'électricité (peut aussi être traitée séparément)


La VEWA succède au décompte VHKA bien connu et prend en charge davantage d'agents énergétiques ainsi que des procédures simplifiées.

La VEWA assure la répartition des frais pour des systèmes de chauffage séparés ou combinés sur la base des valeurs mesurées par les compteurs et répartit les frais de la manière la plus équitable possible.

Pour la chaleur, le froid et l'eau chaude sanitaire, des procédés spécifiques sont appliqués afin de compenser les inégalités liées à la situation des logements, les pertes dans les conduites ou d'autres différences entre les consommateurs.

Il existe les formes de répartition des frais suivantes :

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

- systèmes combinés de chauffage et d'eau chaude sanitaire (chaleur + eau chaude sanitaire, froid, eau froide)

- systèmes combinés de chauffage, d'eau chaude sanitaire et de refroidissement (chaleur + froid + eau chaude sanitaire, eau froide)


Pour qu'un type d'énergie puisse être décompté correctement, des compteurs de consommation doivent être présents dans les unités pour chaque type d'énergie.

Remarque : 

- Les répartiteurs de frais de chauffage ne sont pas pris en charge

- En cas de décompte avec des compteurs de production totale, les frais peuvent être répartis en pourcentage sur les unités d'habitation.


![VEWA - Décompte – Illustration 5](/img/konfiguration-billing-vewa-abrechnung/05.png)

Locaux communs :

Il est possible de répartir ultérieurement (Billing) en pourcentage des ensembles de compteurs regroupés dans des dossiers sur des unités de décompte.

Cela est pris en charge pour les deux variantes de système ci-dessus.

### Combien de systèmes peuvent être configurés dans un compte ?

Un système VEWA peut être décompté par immeuble. En présence de plusieurs systèmes de chauffage, plusieurs immeubles sont créés dans le même compte.

Ceux-ci peuvent ensuite être décomptés individuellement avec des périodes de décompte différentes.

### Fonctionnement général de smart-me VEWA

- La VEWA peut être appliquée à chaque immeuble. Veillez donc à ce que tous les compteurs de consommation d'un même système de chauffage se trouvent dans le même immeuble.
    Si plusieurs bâtiments partagent le même système de chauffage, les bâtiments doivent être regroupés en un seul.

- Lors de l'application de la VEWA, tous les contrats de bail ainsi que les logements vacants doivent être correctement saisis dans l'état locatif. Soit dans smart-me Billing, soit dans le logiciel immobilier externe en cas d'utilisation de fichiers DTA-VKA.


## Configurer la VEWA

1.  ### Activer la VEWA et configurer les répartitions des frais.


Sélectionner le système de chauffage :

- Chaleur, froid et eau chaude sanitaire combinés

- Chaleur, eau chaude sanitaire combinées

- Systèmes séparés


Le choix d'un système combiné ou non dépend de la production de chaleur. Si, par exemple, une pompe à chaleur est utilisée pour le chauffage, le refroidissement et la préparation de l'eau chaude sanitaire, le décompte combiné est indiqué, car la grandeur de dépense est la même pour les trois énergies, à savoir l'électricité.

Si en revanche le chauffage est assuré par un chauffage au mazout, mais que l'eau chaude sanitaire est préparée de manière purement électrique sans l'appui du chauffage au mazout, il convient de choisir des décomptes non combinés.

Répartition des frais

La répartition des frais divise les frais totaux en frais fixes (frais de base) et en frais variables (frais liés à la consommation).

Frais de base

Les frais de base tiennent compte des éventuelles pertes dans les conduites, des pertes de circulation, de la situation privilégiée d'un logement bénéficiant de plus d'ensoleillement, etc., et répartissent une part des frais sur tous les locataires selon leur part de surface dans l'ensemble de l'immeuble.

Frais variables

Les frais variables sont appliqués directement aux quantités d'énergie consommées et saisies. Ils correspondent à la consommation individuelle de chaque locataire.

Préparation de l'eau chaude sanitaire

Afin de pouvoir estimer à partir des valeurs en m3 l'énergie utilisée pour la préparation de l'eau chaude sanitaire, la formule standard suivante est appliquée :

Énergie eau chaude sanitaire en kWh =
Total des valeurs de consommation d'eau chaude sanitaire \[m3\] \* 1.163 \* différence de température \[K\] \* 1,25

La différence de température peut être choisie et correspond à l'écart entre la température de l'eau froide à son entrée dans le bâtiment (généralement +10°C) et la température moyenne du chauffe-eau une fois l'eau chauffée (généralement +52°C).

Selon cet exemple, la différence est donc de : 

Différence de température = température cible - température d'entrée = 52°C - 10°C = 42 K

![VEWA - Décompte – Illustration 6](/img/konfiguration-billing-vewa-abrechnung/06.png)

Valeurs indicatives pour la configuration des frais de base et des frais variables :

Nouvelles constructions (tout à partir de 2018) : 

- Frais de base 30%, frais variables 70%


Anciens bâtiments rénovés (isolation renforcée selon le standard des nouvelles constructions) :

- Frais de base 40%, frais variables 60%


Anciens bâtiments non rénovés (avant 2018) :

- Frais de base de 40%\-50%, frais variables de 50-60%

- En outre, une compensation de situation doit être calculée pour chaque logement. Soit la valeur mesurée du compteur du logement est réduite, soit les pourcentages de répartition du compteur total sont pondérés. 
    (Détails au chapitre 10 du document VEWA, sous littérature complémentaire)


C'est ici que les valeurs mesurées des compteurs des logements peuvent être modifiées afin d'effectuer l'ajustement de situation : [Configuration des compteurs/dossiers](/konfiguration/ordnerkonfiguration)  

- Si un compteur doit réduire sa valeur mesurée de 20% : 
    la correction de valeur (Wertkorrektur) est réglée de 100% à 80%.


### 2\. Saisie d'une période de décompte

Les frais peuvent être saisis en frais complets par type d'énergie.
Dans les systèmes combinés, les frais individuels des différents agents énergétiques sont additionnés.

![VEWA - Décompte – Illustration 7](/img/konfiguration-billing-vewa-abrechnung/07.png)

### 3\. Créer des périodes de décompte et définir le contenu de la période de facturation

<div className="row">
<div className="col col--4">

1.  Création de la période de décompte

2.  Activer ou désactiver le contenu

Si l'électricité et les frais de chauffage et charges accessoires sont décomptés à des intervalles différents, plusieurs périodes sont saisies.

p. ex. :

- Période électricité Q1 2024 (uniquement électricité et divers)

- Période électricité Q2 2024 (uniquement électricité et divers)

- Période électricité Q3 2024 (uniquement électricité et divers)

- Période électricité Q4 2024 (uniquement électricité et divers)

- Période chaleur eau 2024 (uniquement chaleur, froid, eau chaude sanitaire et eau froide)

</div>
<div className="col col--8 text--center">

![VEWA - Décompte – Illustration 8](/img/konfiguration-billing-vewa-abrechnung/08.png)

</div>
</div>

### 4\. Saisie des frais de la période de décompte

Remarque concernant l'export vers des logiciels immobiliers avec des fichiers DTA-VHKA :
Si vous souhaitez utiliser la VEWA, mais exporter les données vers un autre système en pour mille ou en valeurs de consommation, vous n'avez pas besoin de saisir de frais. La période de facturation doit toutefois être créée au préalable.

Les frais pouvant être saisis se répartissent grosso modo comme suit :

Frais d'énergie

Frais pour l'agent énergétique acheté, p. ex. : 

- 1000 litres de mazout pour 2000 CHF

- 500kWh d'électricité pour 200 CHF

- 10 m3 d'eau froide pour 50 CHF


Frais accessoires d'énergie

Frais d'exploitation et d'entretien

- Frais de la révision périodique de l'installation de chauffage

- Frais du service de relevé (p. ex. amortissement des frais de licence smart-me pour les appareils)

- Travaux administratifs liés à l'installation de chauffage

- Frais de ramonage

- Élimination des déchets si le système de chauffage occasionne de tels frais.


Ce qui ne fait pas partie des frais accessoires d'énergie

- Infrastructure de mesure (celle-ci est réglée par une augmentation du loyer)


Remarque concernant les frais d'eau chaude sanitaire :

Les frais d'eau chaude sanitaire ne comprennent que les frais de chauffage de l'eau. La quantité d'eau froide consommée pour la préparation de l'eau chaude sanitaire est automatiquement reprise dans la partie eau froide. 

- Si un compteur général d'eau froide est réparti en pourcentage sur plusieurs logements, la quantité totale d'eau froide est calculée à partir de ce compteur commun.

- Si des compteurs d'eau froide et d'eau chaude sanitaire se trouvent dans les logements et sont appliqués à 100% de la consommation, la somme pour l'eau froide correspond à la somme de tous les compteurs d'eau chaude sanitaire et d'eau froide.


Ceux-ci peuvent être saisis par type d'énergie et sont additionnés.

![VEWA - Décompte – Illustration 9](/img/konfiguration-billing-vewa-abrechnung/09.png)

### 5\. Facturer la location des compteurs

Contrairement au RCP (regroupement dans le cadre de la consommation propre), la VEWA permet de facturer aux consommateurs les frais d'amortissement des compteurs de chaleur et des compteurs d'eau.

Cela doit toutefois se faire par une augmentation des loyers, et non par les charges accessoires.

Les frais de matériel et d'installation d'un compteur peuvent être répercutés.

La durée d'amortissement applicable est de 10 ans.

Les règles de répercussion sont décrites à l'art. 269d CO et aux art. 19 et 20 OBLF

Détails du calcul dans le document officiel VEWA sous 2.2 FORMELLE ÜBERWÄLZUNGSREGELN 

### 6\. Saisie d'un tarif toujours valable pour chaque agent énergétique

- Ce tarif est saisi sans prix (0) avec une validité illimitée (2099).

- Chaque agent énergétique disposant d'un tarif valable est affiché sur la facture.




![VEWA - Décompte – Illustration 10](/img/konfiguration-billing-vewa-abrechnung/10.png)

### 7\. Saisir les surfaces des logements

Pour le calcul VEWA et la répartition des frais de base, les surfaces des logements doivent être connues. Celles-ci peuvent être définies dans l'unité de décompte correspondante. Elles sont ensuite additionnées pour obtenir la surface totale déterminante.

Remarque : pour que la surface totale déterminante soit correctement rapportée, tous les locaux doivent être saisis comme unité de décompte, même s'ils n'ont eux-mêmes aucun compteur rattaché et sont traités de manière forfaitaire à l'externe.
Seuls les nombres entiers sont possibles.

![VEWA - Décompte – Illustration 11](/img/konfiguration-billing-vewa-abrechnung/11.png)

## Contenu et détail de la facture

### Aperçu

L'aperçu présente tous les frais en un coup d'œil, y compris les éventuels impôts appliqués et les différences d'arrondi.

![VEWA - Décompte – Illustration 12](/img/konfiguration-billing-vewa-abrechnung/12.png)

### Chaleur

La section chaleur indique les frais totaux du centre de coûts chaleur ainsi que les clés de répartition et grandeurs de référence appliquées.

- Part des frais de base en % (ici 30%)

- Part des frais de consommation en % (ici 70%)

- Consommation totale de l'immeuble en kWh (ici 700 kWh)

- Surface habitable totale de l'immeuble en m2 (ici 300 m2)


Les tarifs calculés sont ensuite appliqués au logement concerné (bloc bleu) sur la base des valeurs mesurées par les compteurs du logement.

- Surface habitable du logement en m2 (ici 100 m2)

- Jours d'occupation (ici 91 sur 91, occupation à 100%)

- Valeur mesurée par le compteur du logement concerné (ici 500kWh)






![VEWA - Décompte – Illustration 13](/img/konfiguration-billing-vewa-abrechnung/13.png)

### Eau chaude sanitaire

La section eau chaude sanitaire indique les frais totaux du centre de coûts eau chaude sanitaire ainsi que les clés de répartition et grandeurs de référence appliquées.

- Part des frais de base en % (ici 30%)

- Part des frais de consommation en % (ici 70%)

- Consommation totale de l'immeuble en m3 (ici 5 m2)

- Surface habitable totale de l'immeuble en m2 (ici 300 m2) 


Ces frais se composent exclusivement des frais nécessaires à la production d'eau chaude sanitaire, mais pas de l'eau froide utilisée à cet effet.
Plus d'informations sur les frais dans la section Aperçu des centres de coûts.

Les tarifs calculés sont ensuite appliqués au logement concerné (bloc bleu) sur la base des valeurs mesurées par les compteurs du logement.

- Surface habitable du logement en m2 (ici 100 m2)

- Jours d'occupation (ici 91 sur 91, occupation à 100%)

- Valeur mesurée par le compteur du logement concerné en m3 (ici 3 m3)


![VEWA - Décompte – Illustration 14](/img/konfiguration-billing-vewa-abrechnung/14.png)

### Eau froide

La section eau froide indique les frais totaux du centre de coûts eau froide ainsi que les clés de répartition et grandeurs de référence appliquées.

- Part des frais de base en % (ici 20%)

- Part des frais de consommation en % (ici 70%)

- Consommation totale de l'immeuble en m3 (ici 13 m2)

- Surface habitable totale de l'immeuble en m2 (ici 300 m2) 


Les tarifs calculés sont ensuite appliqués au logement concerné (bloc bleu) sur la base des valeurs mesurées par les compteurs du logement.

- Surface habitable du logement en m2 (ici 100 m2)

- Jours d'occupation (ici 91 sur 91, occupation à 100%)

- Valeur mesurée par le compteur du logement concerné en m3 d'eau chaude sanitaire
    (ici 3 m3)

- Valeur mesurée par le compteur du logement concerné en m3 d'eau froide
    (ici 5 m3)


Remarque :

Selon le système, seuls des compteurs d'eau froide ou un mélange de compteurs d'eau froide et d'eau chaude sanitaire peuvent figurer ici ; la détection de ces systèmes est automatisée.

- S'il existe un compteur principal d'eau froide et aucun compteur dans les logements, ou seulement des compteurs d'eau chaude sanitaire dans les logements, seul un compteur d'eau froide réparti en % figurerait ici.

- S'il existe des compteurs de logement pour l'eau chaude sanitaire et l'eau froide, les deux compteurs figurent toujours ici pour chaque logement ; leur somme donne la consommation d'eau totale.


![VEWA - Décompte – Illustration 15](/img/konfiguration-billing-vewa-abrechnung/15.png)

### Aperçu des centres de coûts

Centres de coûts séparés

Chaque facture comporte l'aperçu des centres de coûts. Celui-ci contient tous les postes de frais saisis pour les différents centres de coûts.

- Pour la chaleur, tous les frais relatifs au système de chauffage sont listés.

- Pour l'eau chaude sanitaire, seuls les frais relatifs au chauffage de l'eau figurent, mais pas la quantité d'eau froide utilisée.

- Pour l'eau froide, tous les frais relatifs à l'eau froide et aux eaux usées sont saisis.


Centres de coûts combinés

L'aperçu des centres de coûts peut changer visuellement lorsque des systèmes sont combinés.

Il est par exemple courant de combiner la chaleur et l'eau chaude sanitaire, car une partie de l'énergie destinée à la préparation de l'eau chaude sanitaire provient du système de chauffage. (Accumulateur d'eau chaude couplé au chauffage)

Dans ce cas, les frais apparaissent de manière combinée.

La particularité réside dans l'indication de la formule de conversion utilisée pour répartir l'énergie totale en énergie de chauffage et en énergie de préparation de l'eau chaude sanitaire.

Aperçu des frais des centres de coûts séparés

![VEWA - Décompte – Illustration 16](/img/konfiguration-billing-vewa-abrechnung/16.png)

Aperçu des centres de coûts combinés chaleur + eau chaude sanitaire
(formule de conversion sous l'aperçu des frais)

![VEWA - Décompte – Illustration 17](/img/konfiguration-billing-vewa-abrechnung/17.png)

## Appliquer la VEWA avec une interface vers un logiciel immobilier

[Échange de données avec la VEWA et les fichiers DTA-VHKA](/schnittstellen/dta-vhka-files)

## Traitement des erreurs VEWA et Billing

[Dérangements en lien avec la VEWA](/stoerungsbehebung/billing-fehlermeldungen)

## Littérature et documents complémentaires sur la VEWA (situation juridique actuelle)

[Modèle de décompte VEWA : détails et guide](https://www.admin.ch/gov/de/start/dokumentation/medienmitteilungen.msg-id-67271.html)

[Vers l'interface VHKA](/schnittstellen/dta-vhka-files)
