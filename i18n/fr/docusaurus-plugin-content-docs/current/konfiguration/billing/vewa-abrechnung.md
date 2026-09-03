---
title: 'VEWA - Décompte'
slug: '/konfiguration/billing/vewa-abrechnung'
description: 'Introduction smart-me à partir de 2min 20sec'
sidebar_label: 'VEWA - Décompte'
---
![VEWA - Décompte – Illustration 1](/img/konfiguration-billing-vewa-abrechnung/01.png)

## Webinaire VEWA

<Video src="nrziX2lLI0s" title="Vidéo YouTube" />

- [Introduction smart-me](https://youtu.be/nrziX2lLI0s?si=ufIjxwLFavDER5VH&t=140) à partir de 2min 20sec 

- [VEWA](https://youtu.be/nrziX2lLI0s?si=O-Q5qFbhTNm4v4s-&t=770) à partir de 12min 50sec

- [Démo en direct](https://youtu.be/nrziX2lLI0s?si=CYljDSjMHWwKagCu&t=1498) à partir de 24min 58sec 

- [Questions](https://youtu.be/nrziX2lLI0s?si=sr3GAi-mrt6gyLyQ&t=2432) à partir de 40min 32sec 


## Généralités sur la VEWA

VEWA signifie décompte des frais d'énergie et d'eau en fonction de la consommation. Elle offre un guide pour une facturation équitable de tous les types de frais énergétiques et comprend:

- Chaleur

- Froid

- Eau chaude sanitaire

- Eau froide 

- Électricité (peut aussi être traitée séparément)


La VEWA est le successeur du décompte VHKA bien connu et prend en charge des agents énergétiques élargis ainsi que des procédures simplifiées.

La VEWA assure la répartition des coûts pour des systèmes de chauffage séparés ou combinés sur la base des valeurs mesurées par les compteurs et répartit les coûts de la manière la plus équitable possible.

À cet effet, des procédures spéciales sont appliquées pour la chaleur, le froid et l'eau chaude sanitaire afin de compenser les inégalités liées à la situation du logement, les pertes dans les conduites ou d'autres différences entre les consommateurs.

Il existe les formes de répartition des coûts suivantes:

Centres de coûts séparés

- Chaque énergie provient d'une source différente


![VEWA - Décompte – Illustration 2](/img/konfiguration-billing-vewa-abrechnung/02.png)

Chaleur et eau chaude sanitaire combinées

- Chauffage de tout type avec accumulateur d'eau chaude sanitaire raccordé


![VEWA - Décompte – Illustration 3](/img/konfiguration-billing-vewa-abrechnung/03.png)

Chaleur + froid et eau chaude sanitaire combinés

- Pompe à chaleur avec freecooling


![VEWA - Décompte – Illustration 4](/img/konfiguration-billing-vewa-abrechnung/04.png)

## Étendue des fonctions

### Quels systèmes peuvent être décomptés avec smart-me VEWA?

- systèmes de chauffage et d'eau séparés (chaleur, froid, eau chaude sanitaire, eau froide)

- systèmes de chauffage et d'eau chaude sanitaire combinés (chaleur + eau chaude sanitaire, froid, eau froide)

- systèmes de chauffage, d'eau chaude sanitaire et de refroidissement combinés (chaleur + froid + eau chaude sanitaire, eau froide)


La condition pour un décompte réussi d'un type d'énergie est que des compteurs de consommation soient présents dans les unités pour chaque type d'énergie.

Remarque: 

- Les répartiteurs de frais de chauffage ne sont pas pris en charge

- En cas de facturation avec des compteurs de production totale, les coûts peuvent être répartis en pourcentage sur les unités d'habitation.


![VEWA - Décompte – Illustration 5](/img/konfiguration-billing-vewa-abrechnung/05.png)

Locaux communs:

Il est possible de répartir ultérieurement (Billing) des ensembles de compteurs regroupés dans des dossiers en pourcentage sur des unités de décompte.

Ceci est pris en charge pour les deux variantes de système ci-dessus.

### Combien de systèmes peuvent être configurés dans un compte?

Un système VEWA peut être décompté par bien immobilier. En présence de plusieurs systèmes de chauffage, plusieurs biens immobiliers sont créés dans le même compte.

Ceux-ci peuvent ensuite être décomptés individuellement avec différentes périodes de décompte.

### Méthode de travail générale avec smart-me VEWA

- La VEWA peut être appliquée à chaque bien immobilier. Veillez donc à ce que tous les compteurs de consommation du même système de chauffage se trouvent dans le même bien immobilier.
    Si un système de chauffage est le même pour plusieurs bâtiments, les bâtiments doivent être regroupés en un seul.

- Lors de l'application de la VEWA, tous les contrats de bail ainsi que les logements vacants doivent être saisis correctement dans l'état locatif. Soit dans smart-me Billing, soit dans le logiciel immobilier externe en cas d'utilisation de fichiers DTA-VKA.


## Configurer la VEWA

1.  ### Activer la VEWA et configurer les répartitions des coûts.


Sélectionner le système de chaleur:

- Chaleur, froid et eau chaude sanitaire combinés

- Chaleur, eau chaude sanitaire combinés

- Systèmes séparés


Combiné ou non dépend de la production de chaleur. Si par exemple une pompe à chaleur est utilisée pour le chauffage, le refroidissement et la préparation d'eau chaude sanitaire, la facturation combinée est indiquée, car la grandeur de dépense est la même pour les trois énergies, à savoir l'électricité.

Si en revanche le chauffage est assuré par un chauffage au mazout, mais que l'eau chaude sanitaire est préparée de manière purement électrique sans le soutien du chauffage au mazout, ce sont des facturations non combinées qui s'imposent.

Répartition des coûts

La répartition des coûts divise les coûts totaux en coûts fixes (coûts de base) et en coûts variables (coûts dépendants de la consommation).

Coûts de base

Les coûts de base tiennent compte des éventuelles pertes de conduite, des pertes de circulation, de la situation privilégiée d'un logement avec plus d'ensoleillement, etc. et répartissent une part des coûts sur tous les locataires et leur part de surface dans le bien immobilier global.

Coûts variables

Les coûts variables sont appliqués directement aux quantités d'énergie consommées enregistrées. Ils correspondent à la consommation individuelle de chaque locataire.

Préparation d'eau chaude sanitaire

Afin que l'énergie qui a été consacrée à la préparation d'eau chaude sanitaire puisse être estimée à l'aide de valeurs en m3, la formule standard suivante est appliquée:

Énergie d'eau chaude sanitaire en kWh =
Total des valeurs de consommation d'eau chaude sanitaire \[m3\] \* 1.163 \* Différence de température \[K\] \* 1,25

La différence de température peut être choisie et se réfère à la différence de température de l'eau froide à son entrée dans le bâtiment (habituellement +10°C) jusqu'à ce qu'elle soit chauffée à la température moyenne du chauffe-eau (habituellement +52°C).

La différence est donc, selon cet exemple: 

Différence de température = température cible - température d'entrée = 52°C - 10°C = 42 K

![VEWA - Décompte – Illustration 6](/img/konfiguration-billing-vewa-abrechnung/06.png)

Valeurs indicatives pour la configuration des coûts de base et des coûts variables:

Constructions neuves (tout à partir de 2018): 

- Coûts de base 30%, coûts variables 70%


Anciens bâtiments assainis (isolation améliorée selon le standard des constructions neuves):

- Coûts de base 40%, coûts variables 60%


Anciens bâtiments non assainis (avant 2018):

- Coûts de base de 40%\-50%, coûts variables de 50-60%

- De plus, une compensation de situation doit être calculée pour chaque logement. Soit la valeur mesurée du compteur du logement est réduite, soit les pourcentages de répartition du compteur total sont pondérés. 
    (Détails au chapitre 10 du document VEWA sous littérature complémentaire)


C'est ici que les valeurs mesurées des compteurs de logement peuvent être influencées afin de procéder à l'adaptation de situation: [Configuration des compteurs/dossiers](/konfiguration/ordnerkonfiguration)  

- Si un compteur doit réduire sa valeur mesurée de 20%: 
    la correction de valeur est réglée de 100% à 80%.


### 2\. Saisie d'une période de décompte

Les coûts peuvent être saisis par type d'énergie comme coûts complets.
Dans les systèmes combinés, les coûts individuels des différents agents énergétiques sont additionnés.

![VEWA - Décompte – Illustration 7](/img/konfiguration-billing-vewa-abrechnung/07.png)

### 3\. Créer les périodes de décompte et définir le contenu de la période de facturation

1.  Créer la période de décompte

2.  Activer ou désactiver le contenu


Si l'électricité et les frais de chauffage et charges accessoires sont décomptés à des intervalles différents, plusieurs périodes sont saisies.

par ex.:

- Période électricité T1 2024 (uniquement électricité et divers)

- Période électricité T2 2024 (uniquement électricité et divers)

- Période électricité T3 2024 (uniquement électricité et divers)

- Période électricité T4 2024 (uniquement électricité et divers)

- Période chaleur eau 2024 (uniquement chaleur, froid, eau chaude sanitaire et eau froide)


![VEWA - Décompte – Illustration 8](/img/konfiguration-billing-vewa-abrechnung/08.png)

### 4\. Saisie des coûts de la période de décompte

Remarque pour l'export vers des logiciels immobiliers avec des fichiers DTA-VHKA:
Si vous souhaitez utiliser la VEWA, mais exporter les données vers un autre système en pour mille ou en valeurs de consommation, vous n'avez pas besoin de saisir de coûts. La période de facturation doit toutefois être créée au préalable.

Les coûts qui peuvent être saisis se répartissent grossièrement dans les coûts suivants:

Coûts énergétiques

Coûts de l'agent énergétique acheté, par ex.: 

- 1000 litres de mazout pour 2000 CHF

- 500kWh d'électricité pour 200 CHF

- 10 m3 d'eau froide pour 50 CHF


Charges accessoires énergétiques

Coûts d'exploitation et d'entretien

- Coûts de la révision périodique de l'installation de chauffage

- Coûts du service de relevé (par ex. amortissement des coûts de licence de smart-me pour les appareils)

- Travaux administratifs en lien avec l'installation de chauffage

- Coûts du ramoneur

- Élimination des déchets si le système de chauffage engendre de tels coûts.


Ce qui ne fait pas partie des charges accessoires énergétiques

- L'infrastructure de mesure (celle-ci est réglée par une augmentation du loyer)


Remarque concernant les coûts d'eau chaude sanitaire:

Les coûts de l'eau chaude sanitaire ne comprennent que les coûts du réchauffement de l'eau chaude sanitaire. La quantité d'eau froide utilisée pour la préparation d'eau chaude sanitaire est automatiquement reportée dans la partie eau froide. 

- Si un compteur d'eau froide global est réparti en pourcentage sur plusieurs logements, la quantité totale d'eau froide est calculée à partir de ce compteur commun.

- Si des compteurs d'eau froide et d'eau chaude sanitaire se trouvent dans les logements et sont appliqués avec 100% de la consommation, la somme pour l'eau froide est la somme de tous les compteurs d'eau chaude sanitaire et d'eau froide.


Ceux-ci peuvent être saisis par type d'énergie et sont additionnés.

![VEWA - Décompte – Illustration 9](/img/konfiguration-billing-vewa-abrechnung/09.png)

### 5\. Facturer les locations de compteurs

Contrairement au RCP, la VEWA permet de facturer aux consommateurs les coûts d'amortissement des compteurs de chaleur et d'eau.

Cela doit toutefois se faire par une augmentation des loyers, et non par les charges accessoires.

Les coûts du matériel et le montage d'un compteur peuvent être répercutés.

Une durée d'amortissement de 10 ans s'applique.

Les règles de répercussion sont décrites à l'art. 269d CO ainsi qu'aux art. 19 et 20 OBLF

Détails sur le calcul dans le document VEWA officiel sous 2.2 FORMELLE ÜBERWÄLZUNGSREGELN 

### 6\. Saisie d'un tarif toujours valable pour chaque agent énergétique

- Ce tarif est saisi sans prix (0) avec une validité illimitée (2099).

- Chaque agent énergétique avec un tarif valable est représenté sur la facture.




![VEWA - Décompte – Illustration 10](/img/konfiguration-billing-vewa-abrechnung/10.png)

### 7\. Saisir les surfaces des logements

Pour le calcul VEWA et la répartition des coûts de base, les surfaces des logements doivent être connues. Celles-ci peuvent être définies dans l'unité de décompte correspondante. Elles sont ensuite additionnées pour former la surface totale pertinente.

Remarque: pour rapporter correctement la surface totale pertinente, tous les locaux doivent être saisis comme unité de décompte, même si ceux-ci n'avaient eux-mêmes aucun compteur rattaché et sont traités de manière forfaitaire à l'externe.
Seuls des nombres entiers sont possibles.



![VEWA - Décompte – Illustration 11](/img/konfiguration-billing-vewa-abrechnung/11.png)

### Étape suivante

## Contenu et structure de la facture

### Aperçu

L'aperçu contient tous les coûts en un coup d'œil, y compris les éventuelles taxes appliquées et les différences d'arrondi.

![VEWA - Décompte – Illustration 12](/img/konfiguration-billing-vewa-abrechnung/12.png)

### Chaleur

La chaleur montre les coûts totaux du centre de coûts chaleur ainsi que les clés de répartition et grandeurs de référence appliquées.

- Part des coûts de base en % (ici 30%)

- Part des coûts de consommation en % (ici 70%)

- Consommation totale du bien immobilier en kWh (ici 700 kWh)

- Surface habitable totale du bien immobilier en m2 (ici 300 m2)


Les tarifs calculés sont ensuite appliqués au logement correspondant (bloc bleu) sur la base des valeurs mesurées par les compteurs du logement.

- Surface habitable du logement en m2 (ici 100 m2)

- Jours d'occupation (ici 91 sur 91, occupation 100%)

- Valeur mesurée du compteur du logement correspondant (ici 500kWh)






![VEWA - Décompte – Illustration 13](/img/konfiguration-billing-vewa-abrechnung/13.png)

### Eau chaude sanitaire

La section eau chaude sanitaire montre les coûts totaux du centre de coûts eau chaude sanitaire ainsi que les clés de répartition et grandeurs de référence appliquées.

- Part des coûts de base en % (ici 30%)

- Part des coûts de consommation en % (ici 70%)

- Consommation totale du bien immobilier en m3 (ici 5 m2)

- Surface habitable totale du bien immobilier en m2 (ici 300 m2) 


Ces coûts se composent exclusivement des coûts nécessaires à la production d'eau chaude sanitaire, mais pas de l'eau froide utilisée à cet effet.
Plus d'informations sur les coûts dans la section aperçu des centres de coûts.

Les tarifs calculés sont ensuite appliqués au logement correspondant (bloc bleu) sur la base des valeurs mesurées par les compteurs du logement.

- Surface habitable du logement en m2 (ici 100 m2)

- Jours d'occupation (ici 91 sur 91, occupation 100%)

- Valeur mesurée du compteur du logement correspondant en m3 (ici 3 m3)


![VEWA - Décompte – Illustration 14](/img/konfiguration-billing-vewa-abrechnung/14.png)

### Eau froide

La section eau froide montre les coûts totaux du centre de coûts eau froide ainsi que les clés de répartition et grandeurs de référence appliquées.

- Part des coûts de base en % (ici 20%)

- Part des coûts de consommation en % (ici 70%)

- Consommation totale du bien immobilier en m3 (ici 13 m2)

- Surface habitable totale du bien immobilier en m2 (ici 300 m2) 


Les tarifs calculés sont ensuite appliqués au logement correspondant (bloc bleu) sur la base des valeurs mesurées par les compteurs du logement.

- Surface habitable du logement en m2 (ici 100 m2)

- Jours d'occupation (ici 91 sur 91, occupation 100%)

- Valeur mesurée du compteur du logement correspondant en m3 d'eau chaude sanitaire
    (ici 3 m3)

- Valeur mesurée du compteur du logement correspondant en m3 d'eau froide
    (ici 5 m3)


Remarque:

Selon le système, seuls des compteurs d'eau froide ou des compteurs mixtes d'eau froide et d'eau chaude sanitaire peuvent figurer ici; la détection de ces systèmes est automatisée.

- S'il existe un compteur principal pour l'eau froide et aucun dans les logements, ou uniquement des compteurs d'eau chaude sanitaire dans les logements, seul un compteur d'eau froide au prorata en % figurerait ici.

- S'il existe des compteurs de logement pour l'eau chaude sanitaire et l'eau froide, les deux compteurs figurent toujours ici par logement, la somme donne la consommation d'eau totale.


![VEWA - Décompte – Illustration 15](/img/konfiguration-billing-vewa-abrechnung/15.png)

### Aperçu des centres de coûts

Centres de coûts séparés

Chaque facture dispose de l'aperçu des centres de coûts. Celui-ci contient tous les postes de coûts saisis relatifs aux centres de coûts individuels.

- Sous chaleur figurent tous les coûts relatifs au système de chauffage.

- Sous eau chaude sanitaire figurent uniquement les coûts concernant le réchauffement de l'eau chaude sanitaire, mais pas la quantité d'eau froide utilisée.

- Sous eau froide sont saisis tous les coûts relatifs à l'eau froide et aux eaux usées.


Centres de coûts combinés

L'aperçu des centres de coûts peut se présenter visuellement différemment lorsque des systèmes sont combinés.

La combinaison de la chaleur et de l'eau chaude sanitaire est par ex. usuelle, car une partie de l'énergie destinée à la préparation d'eau chaude sanitaire provient du système de chauffage. (Accumulateur d'eau chaude sanitaire couplé au chauffage)

Dans ce cas, les coûts apparaissent alors combinés.

La particularité est l'indication de la formule de conversion utilisée pour scinder l'énergie totale en énergie de chaleur et en énergie de préparation d'eau chaude sanitaire.

Aperçu des coûts avec centres de coûts séparés

![VEWA - Décompte – Illustration 16](/img/konfiguration-billing-vewa-abrechnung/16.png)

Aperçu combiné des centres de coûts chaleur + eau chaude sanitaire
(formule de conversion sous l'aperçu des coûts)

![VEWA - Décompte – Illustration 17](/img/konfiguration-billing-vewa-abrechnung/17.png)

## Appliquer la VEWA avec l'interface d'un logiciel immobilier

[Échange de données avec la VEWA et les fichiers DTA-VHKA](/schnittstellen/dta-vhka-files)

## Traitement des erreurs VEWA et Billing

[Dérangements en lien avec la VEWA](/stoerungsbehebung/billing-fehlermeldungen)

## Littérature et documents complémentaires sur la VEWA (situation juridique actuelle)

[Détails et guide du modèle de décompte VEWA](https://www.admin.ch/gov/de/start/dokumentation/medienmitteilungen.msg-id-67271.html)

[Continuer vers l'interface VHKA](/schnittstellen/dta-vhka-files)
