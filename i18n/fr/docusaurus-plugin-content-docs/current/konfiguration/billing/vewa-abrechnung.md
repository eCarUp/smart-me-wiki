---
title: 'VEWA - Décompte'
slug: '/konfiguration/billing/vewa-abrechnung'
description: 'Introduction à smart-me à partir de 2 min 20 s'
sidebar_label: 'VEWA - Décompte'
---
![VEWA - Décompte – Illustration 1](/img/konfiguration-billing-vewa-abrechnung/01.png)

## Webinaire VEWA

<Video src="nrziX2lLI0s" title="Video" />

- [Introduction à smart-me](https://youtu.be/nrziX2lLI0s?si=ufIjxwLFavDER5VH&t=140) à partir de 2 min 20 s 

- [VEWA](https://youtu.be/nrziX2lLI0s?si=O-Q5qFbhTNm4v4s-&t=770) à partir de 12 min 50 s

- [Démo en direct](https://youtu.be/nrziX2lLI0s?si=CYljDSjMHWwKagCu&t=1498) à partir de 24 min 58 s 

- [Questions](https://youtu.be/nrziX2lLI0s?si=sr3GAi-mrt6gyLyQ&t=2432) à partir de 40 min 32 s 


## Généralités sur la VEWA

VEWA signifie décompte des frais d'énergie et d'eau en fonction de la consommation. Elle fournit un guide pour la répartition équitable de tous les types de coûts énergétiques et comprend :

- la chaleur

- le froid

- l'eau chaude sanitaire

- l'eau froide 

- l'électricité (peut également être traitée séparément)


La VEWA succède au décompte VHKA bien connu et prend en charge des agents énergétiques supplémentaires ainsi que des procédures simplifiées.

La VEWA assure la répartition des coûts pour des systèmes de chauffage séparés ou combinés sur la base des valeurs mesurées par les compteurs et répartit les coûts de la manière la plus équitable possible.

Pour la chaleur, le froid et l'eau chaude sanitaire, des procédures particulières sont appliquées afin de compenser les inégalités liées à l'emplacement du logement, les pertes dans les conduites ou d'autres différences entre les consommateurs.

Il existe les formes de répartition des coûts suivantes :

Centres de coûts séparés

- Chaque énergie provient d'une source différente


![VEWA - Décompte – Illustration 2](/img/konfiguration-billing-vewa-abrechnung/02.png)

Chaleur et eau chaude sanitaire combinées

- Chauffage de tout type avec accumulateur d'eau chaude sanitaire raccordé


![VEWA - Décompte – Illustration 3](/img/konfiguration-billing-vewa-abrechnung/03.png)

Chaleur + froid et eau chaude sanitaire combinés

- Pompe à chaleur avec free cooling


![VEWA - Décompte – Illustration 4](/img/konfiguration-billing-vewa-abrechnung/04.png)

## Fonctionnalités

### Quels systèmes peuvent être décomptés avec smart-me VEWA ?

- systèmes de chauffage et d'eau séparés (chaleur, froid, eau chaude sanitaire, eau froide)

- systèmes combinés de chauffage et d'eau chaude sanitaire (chaleur + eau chaude sanitaire, froid, eau froide)

- systèmes combinés de chauffage, d'eau chaude sanitaire et de refroidissement (chaleur + froid + eau chaude sanitaire, eau froide)


La condition préalable à un décompte réussi d'un type d'énergie est que des compteurs de consommation soient présents dans les unités pour chaque type d'énergie.

Remarque : 

- Les répartiteurs de frais de chauffage ne sont pas pris en charge

- En cas de décompte avec des compteurs de production totale, les coûts peuvent être répartis en pourcentage sur les unités d'habitation.


![VEWA - Décompte – Illustration 5](/img/konfiguration-billing-vewa-abrechnung/05.png)

Locaux communs :

Il est possible de répartir ultérieurement (Billing) en pourcentage des ensembles de compteurs regroupés dans des dossiers sur les unités de décompte.

Cela est pris en charge pour les deux variantes de système ci-dessus.

### Combien de systèmes peuvent être configurés dans un compte ?

Un système VEWA peut être décompté par immeuble. En présence de plusieurs systèmes de chauffage, plusieurs immeubles sont créés dans le même compte.

Ceux-ci peuvent ensuite être décomptés individuellement avec différentes périodes de décompte.

### Manière générale de travailler avec smart-me VEWA

- La VEWA peut être appliquée à chaque immeuble. Veillez donc à ce que tous les compteurs de consommation du même système de chauffage se trouvent dans le même immeuble.
    Si un système de chauffage est le même pour plusieurs bâtiments, les bâtiments doivent être regroupés en un seul.

- Lors de l'utilisation de la VEWA, tous les contrats de bail ainsi que les vacances locatives doivent être saisis correctement dans l'état locatif. Soit dans smart-me Billing, soit dans le logiciel immobilier externe en cas d'utilisation de fichiers DTA-VKA.


## Configurer la VEWA

1.  ### Activer la VEWA et configurer les répartitions de coûts.


Sélectionner le système de chaleur :

- Chaleur, froid et eau chaude sanitaire combinés

- Chaleur, eau chaude sanitaire combinés

- Systèmes séparés


Le caractère combiné ou non dépend de la production de chaleur. Si, par exemple, une pompe à chaleur est utilisée pour le chauffage, le refroidissement et la production d'eau chaude sanitaire, le décompte combiné est indiqué, car la grandeur de dépense est la même pour les trois énergies, à savoir l'électricité.

Si le chauffage est en revanche assuré par un chauffage au mazout, mais que l'eau chaude sanitaire est produite purement électriquement sans le soutien du chauffage au mazout, les décomptes non combinés sont le bon choix.

Répartition des coûts

La répartition des coûts divise les coûts totaux en coûts fixes (coûts de base) et en coûts variables (coûts dépendant de la consommation).

Coûts de base

Les coûts de base tiennent compte des éventuelles pertes de conduites, des pertes de circulation, de la situation privilégiée d'un logement avec plus d'ensoleillement, etc., et répartissent une part des coûts sur tous les locataires et leur part de surface dans l'immeuble total.

Coûts variables

Les coûts variables sont appliqués directement aux quantités d'énergie consommées saisies. Ils correspondent à la consommation individuelle de chaque locataire.

Production d'eau chaude sanitaire

Afin que l'énergie qui a été utilisée pour la production d'eau chaude sanitaire puisse être estimée à partir des valeurs en m3, la formule standard suivante est appliquée :

Énergie d'eau chaude sanitaire en kWh =
Total des valeurs de consommation d'eau chaude sanitaire \[m3\] \* 1.163 \* différence de température \[K\] \* 1,25

La différence de température peut être choisie et se réfère à la différence de température de l'eau froide à son entrée dans le bâtiment (habituellement +10 °C) jusqu'à ce qu'elle soit chauffée à la température moyenne du chauffe-eau (habituellement +52 °C).

Selon cet exemple, la différence est donc de : 

Différence de température = température cible - température d'entrée = 52 °C - 10 °C = 42 K

![VEWA - Décompte – Illustration 6](/img/konfiguration-billing-vewa-abrechnung/06.png)

Valeurs indicatives pour la configuration des coûts de base et des coûts variables :

Constructions neuves (tout ce qui date de 2018 et après) : 

- Coûts de base 30 %, coûts variables 70 %


Anciens bâtiments assainis (isolation améliorée selon le standard des constructions neuves) :

- Coûts de base 40 %, coûts variables 60 %


Anciens bâtiments non assainis (avant 2018) :

- Coûts de base de 40 %\-50 %, coûts variables de 50-60 %

- De plus, une compensation de situation doit être calculée pour chaque logement. Soit la valeur mesurée du compteur du logement est réduite, soit les pourcentages de répartition du compteur total sont pondérés. 
    (Détails au chapitre 10 du document VEWA sous littérature complémentaire)


Les valeurs mesurées des compteurs de logement peuvent être influencées ici pour procéder à l'ajustement de situation : [Configuration des compteurs/dossiers](/konfiguration/ordnerkonfiguration)  

- Si un compteur doit réduire sa valeur mesurée de 20 % : 
    la correction de valeur est réglée de 100 % à 80 %.


### 2\. Saisir une période de décompte

Les coûts peuvent être saisis par type d'énergie en tant que coûts complets.
Dans les systèmes combinés, les coûts individuels des différents agents énergétiques sont additionnés.

![VEWA - Décompte – Illustration 7](/img/konfiguration-billing-vewa-abrechnung/07.png)

### 3\. Créer des périodes de décompte et définir le contenu de la période de facturation

1.  Créer la période de décompte

2.  Activer ou désactiver le contenu


Si l'électricité et les frais de chauffage et charges accessoires sont décomptés à des intervalles différents, plusieurs périodes sont saisies.

p. ex. :

- Période électricité T1 2024 (uniquement électricité et divers)

- Période électricité T2 2024 (uniquement électricité et divers)

- Période électricité T3 2024 (uniquement électricité et divers)

- Période électricité T4 2024 (uniquement électricité et divers)

- Période chaleur eau 2024 (uniquement chaleur, froid, eau chaude sanitaire et eau froide)


![VEWA - Décompte – Illustration 8](/img/konfiguration-billing-vewa-abrechnung/08.png)

### 4\. Saisir les coûts de la période de décompte

Remarque pour l'export vers des logiciels immobiliers avec des fichiers DTA-VHKA :
Si vous souhaitez utiliser la VEWA, mais exporter les données vers un autre système en pour mille ou en valeurs de consommation, vous n'avez pas besoin de saisir de coûts. La période de facturation doit toutefois être créée au préalable.

Les coûts qui peuvent être saisis se répartissent grossièrement comme suit :

Coûts énergétiques

Coûts de l'agent énergétique acheté, p. ex. : 

- 1000 litres de mazout pour 2000 CHF

- 500 kWh d'électricité pour 200 CHF

- 10 m3 d'eau froide pour 50 CHF


Charges accessoires liées à l'énergie

Coûts d'exploitation et d'entretien

- Coûts de la révision périodique de l'installation de chauffage

- Coûts du service de relevé (p. ex. amortissement des coûts de licence smart-me pour les appareils)

- Travaux administratifs en lien avec l'installation de chauffage

- Coûts du ramoneur

- Élimination des déchets si le système de chauffage engendre de tels coûts.


Ce qui ne fait pas partie des charges accessoires liées à l'énergie

- L'infrastructure de mesure (celle-ci est réglée par une augmentation du loyer)


Remarque concernant les coûts de l'eau chaude sanitaire :

Les coûts de l'eau chaude sanitaire ne comprennent que les coûts du réchauffement de l'eau chaude sanitaire. La quantité d'eau froide utilisée pour la production d'eau chaude sanitaire est automatiquement reprise dans la partie eau froide. 

- Si un compteur d'eau froide global est réparti en pourcentage sur plusieurs logements, la quantité totale d'eau froide est calculée à partir de ce compteur commun.

- Si des compteurs d'eau froide et d'eau chaude sanitaire se trouvent dans les logements et sont appliqués à 100 % de la consommation, la somme pour l'eau froide est la somme de tous les compteurs d'eau chaude sanitaire et d'eau froide.


Ceux-ci peuvent être saisis par type d'énergie et sont additionnés.

![VEWA - Décompte – Illustration 9](/img/konfiguration-billing-vewa-abrechnung/09.png)

### 5\. Facturer les locations de compteurs

Contrairement au RCP, la VEWA autorise à facturer aux consommateurs les coûts d'amortissement des compteurs de chaleur et d'eau.

Cela doit toutefois se faire par une augmentation des loyers, et non par les charges accessoires.

Les coûts de matériel et le montage d'un compteur peuvent être reportés.

Une durée d'amortissement de 10 ans s'applique.

Les règles de report sont décrites à l'art. 269d CO ainsi qu'aux art. 19 et 20 OBLF

Détails sur le calcul dans le document VEWA officiel sous 2.2 RÈGLES FORMELLES DE REPORT 

### 6\. Saisir un tarif toujours valable pour chaque agent énergétique

- Ce tarif est saisi sans prix (0) avec une validité illimitée (2099).

- Chaque agent énergétique disposant d'un tarif valable est représenté sur le décompte.




![VEWA - Décompte – Illustration 10](/img/konfiguration-billing-vewa-abrechnung/10.png)

### 7\. Saisir les surfaces des logements

Pour le calcul VEWA et la répartition des coûts de base, les surfaces des logements doivent être connues. Celles-ci peuvent être définies dans l'unité de décompte correspondante. Elles sont ensuite additionnées pour former la surface totale pertinente.

Remarque : pour que la surface totale pertinente soit rapportée correctement, tous les locaux doivent être saisis comme unité de décompte, même s'ils n'ont eux-mêmes aucun compteur rattaché et sont traités de manière forfaitaire à l'externe.
Seuls les nombres entiers sont possibles.



![VEWA - Décompte – Illustration 11](/img/konfiguration-billing-vewa-abrechnung/11.png)

### Étape suivante

## Contenu et structure du décompte

### Aperçu

L'aperçu contient tous les coûts d'un seul coup d'œil, y compris les éventuelles taxes appliquées et les différences d'arrondi.

![VEWA - Décompte – Illustration 12](/img/konfiguration-billing-vewa-abrechnung/12.png)

### Chaleur

La partie chaleur indique les coûts totaux du centre de coûts chaleur ainsi que les clés de répartition et les grandeurs de référence appliquées.

- Part des coûts de base en % (ici 30 %)

- Part des coûts de consommation en % (ici 70 %)

- Consommation totale de l'immeuble en kWh (ici 700 kWh)

- Surface habitable totale de l'immeuble en m2 (ici 300 m2)


Les tarifs calculés sont ensuite appliqués au logement concerné (bloc bleu) sur la base des valeurs mesurées des compteurs du logement.

- Surface habitable du logement en m2 (ici 100 m2)

- Jours d'occupation (ici 91 sur 91, 100 % d'occupation)

- Valeur mesurée du compteur du logement concerné (ici 500 kWh)






![VEWA - Décompte – Illustration 13](/img/konfiguration-billing-vewa-abrechnung/13.png)

### Eau chaude sanitaire

La partie eau chaude sanitaire indique les coûts totaux du centre de coûts eau chaude sanitaire ainsi que les clés de répartition et les grandeurs de référence appliquées.

- Part des coûts de base en % (ici 30 %)

- Part des coûts de consommation en % (ici 70 %)

- Consommation totale de l'immeuble en m3 (ici 5 m2)

- Surface habitable totale de l'immeuble en m2 (ici 300 m2) 


Ces coûts se composent exclusivement des coûts nécessaires à la production d'eau chaude sanitaire, mais pas de l'eau froide utilisée à cet effet.
Plus d'informations sur les coûts dans la partie aperçu des centres de coûts.

Les tarifs calculés sont ensuite appliqués au logement concerné (bloc bleu) sur la base des valeurs mesurées des compteurs du logement.

- Surface habitable du logement en m2 (ici 100 m2)

- Jours d'occupation (ici 91 sur 91, 100 % d'occupation)

- Valeur mesurée du compteur du logement concerné en m3 (ici 3 m3)


![VEWA - Décompte – Illustration 14](/img/konfiguration-billing-vewa-abrechnung/14.png)

### Eau froide

La partie eau froide indique les coûts totaux du centre de coûts eau froide ainsi que les clés de répartition et les grandeurs de référence appliquées.

- Part des coûts de base en % (ici 20 %)

- Part des coûts de consommation en % (ici 70 %)

- Consommation totale de l'immeuble en m3 (ici 13 m2)

- Surface habitable totale de l'immeuble en m2 (ici 300 m2) 


Les tarifs calculés sont ensuite appliqués au logement concerné (bloc bleu) sur la base des valeurs mesurées des compteurs du logement.

- Surface habitable du logement en m2 (ici 100 m2)

- Jours d'occupation (ici 91 sur 91, 100 % d'occupation)

- Valeur mesurée du compteur du logement concerné en m3 d'eau chaude sanitaire
    (ici 3 m3)

- Valeur mesurée du compteur du logement concerné en m3 d'eau froide
    (ici 5 m3)


Remarque :

Selon le système, seuls des compteurs d'eau froide ou un mélange de compteurs d'eau froide et d'eau chaude sanitaire peuvent figurer ici ; la détection de ces systèmes est automatisée.

- S'il existe un compteur principal pour l'eau froide et aucun dans les logements, ou uniquement des compteurs d'eau chaude sanitaire dans les logements, seul un compteur d'eau froide au prorata en % figurerait ici.

- S'il existe des compteurs de logement pour l'eau chaude sanitaire et l'eau froide, les deux compteurs figurent toujours ici par logement, la somme donne la consommation totale d'eau.


![VEWA - Décompte – Illustration 15](/img/konfiguration-billing-vewa-abrechnung/15.png)

### Aperçu des centres de coûts

Centres de coûts séparés

Chaque décompte dispose de l'aperçu des centres de coûts. Celui-ci contient tous les postes de coûts saisis pour les différents centres de coûts.

- Pour la chaleur, tous les coûts relatifs au système de chauffage sont listés.

- Pour l'eau chaude sanitaire, seuls les coûts relatifs au réchauffement de l'eau chaude sanitaire figurent, mais pas ceux de la quantité d'eau froide utilisée.

- Pour l'eau froide, tous les coûts relatifs à l'eau froide et aux eaux usées sont saisis.


Centres de coûts combinés

L'aperçu des centres de coûts peut changer visuellement lorsque des systèmes sont combinés.

La combinaison de la chaleur et de l'eau chaude sanitaire est p. ex. courante, car une partie de l'énergie destinée à la production d'eau chaude sanitaire provient du système de chauffage. (Accumulateur d'eau chaude sanitaire couplé au chauffage)

Dans ce cas, les coûts apparaissent alors de manière combinée.

La particularité en est l'indication de la formule de conversion utilisée pour répartir l'énergie totale en énergie de chauffage et en énergie de production d'eau chaude sanitaire.

Aperçu des coûts pour des centres de coûts séparés

![VEWA - Décompte – Illustration 16](/img/konfiguration-billing-vewa-abrechnung/16.png)

Aperçu des centres de coûts combinés chaleur + eau chaude sanitaire
(formule de conversion sous l'aperçu des coûts)

![VEWA - Décompte – Illustration 17](/img/konfiguration-billing-vewa-abrechnung/17.png)

## Utiliser la VEWA avec une interface de logiciel immobilier

[Échange de données avec la VEWA et les fichiers DTA-VHKA](/schnittstellen/dta-vhka-files)

## Traitement des erreurs VEWA et Billing

[Dérangements en lien avec la VEWA](/stoerungsbehebung/billing-fehlermeldungen)

## Littérature et documents complémentaires sur la VEWA (situation juridique actuelle)

[Détails et guide du modèle de décompte VEWA](https://www.admin.ch/gov/de/start/dokumentation/medienmitteilungen.msg-id-67271.html)

[Continuer vers l'interface VHKA](/schnittstellen/dta-vhka-files)
