---
title: 'VEWA - Décompte'
slug: '/konfiguration/billing/vewa-abrechnung'
description: 'Introduction smart-me à partir de 2min 20sec'
sidebar_label: 'VEWA - Décompte'
naechste_schritte: [konfiguration/billing/rechnung-erstellen]
vorheriger_schritt: konfiguration/billing/sonstige-kosten
---

<Menueweg>Facturation → Immeubles & tarifs → VEWA</Menueweg>

## Décompte de la chaleur et de l'eau — deux méthodes

Pour la tarification et le décompte multi-énergies, deux possibilités de configuration existent en principe :

**Décompte sans la fonction VEWA**

- Décompte au moyen d'un tarif énergétique calculé en externe pour chaque type d'énergie. Il est saisi avec un prix en CHF/m3 ou CHF/kWh dans l'immeuble, sous les tarifs virtuels.

**Décompte avec la fonction VEWA (recommandé)**

- Les coûts de chaleur / d'eau accumulés au cours de l'année peuvent être saisis. Le tarif est ensuite calculé sur la période et réparti entre les unités de décompte à l'aide de clés de répartition.

Cette page décrit la méthode recommandée avec la fonction VEWA.

## Webinaire VEWA

<Video src="nrziX2lLI0s" title="Vidéo YouTube" />

- [Introduction smart-me](https://youtu.be/nrziX2lLI0s?si=ufIjxwLFavDER5VH&t=140) à partir de 2min 20sec 

- [VEWA](https://youtu.be/nrziX2lLI0s?si=O-Q5qFbhTNm4v4s-&t=770) à partir de 12min 50sec

- [Démonstration en direct](https://youtu.be/nrziX2lLI0s?si=CYljDSjMHWwKagCu&t=1498) à partir de 24min 58sec 

- [Questions](https://youtu.be/nrziX2lLI0s?si=sr3GAi-mrt6gyLyQ&t=2432) à partir de 40min 32sec 


## Généralités sur le VEWA

VEWA signifie « décompte des frais d'énergie et d'eau en fonction de la consommation » (Verbrauchsabhängige Energie- und Wasserkosten Abrechnung). Il fournit un guide pour une répartition équitable de tous les types de frais d'énergie et comprend :

- Chaleur

- Froid

- Eau chaude sanitaire

- Eau froide 

- Électricité (peut aussi être traitée séparément)


Le VEWA succède au décompte DIFC (VHKA) bien connu et prend en charge des agents énergétiques supplémentaires ainsi que des procédures simplifiées.

Le VEWA assure la répartition des coûts pour des systèmes de chauffage séparés ou combinés sur la base des valeurs mesurées par les compteurs et répartit les coûts de la manière la plus équitable possible.

Pour la chaleur, le froid et l'eau chaude sanitaire, des procédures spéciales sont appliquées afin de compenser les inégalités liées à l'emplacement des logements, les pertes dans les conduites ou d'autres différences entre les consommateurs.

Les formes de répartition des coûts suivantes existent :

Centres de coûts séparés

- Chaque énergie provient d'une source différente


![VEWA - Décompte – Figure 2](/img/konfiguration-billing-vewa-abrechnung/02.png)

Chaleur et eau chaude sanitaire combinées

- Chauffage de tout type avec accumulateur d'eau chaude raccordé


![VEWA - Décompte – Figure 3](/img/konfiguration-billing-vewa-abrechnung/03.png)

Chaleur + froid et eau chaude sanitaire combinés

- Pompe à chaleur avec freecooling


![VEWA - Décompte – Figure 4](/img/konfiguration-billing-vewa-abrechnung/04.png)

## Fonctionnalités

### Quels systèmes peuvent être décomptés avec smart-me VEWA ?

- systèmes de chauffage et d'eau séparés (chaleur, froid, eau chaude sanitaire, eau froide)

- systèmes combinés de chauffage et d'eau chaude sanitaire (chaleur + eau chaude sanitaire, froid, eau froide)

- systèmes combinés de chauffage, d'eau chaude sanitaire et de refroidissement (chaleur + froid + eau chaude sanitaire, eau froide)


Pour qu'un type d'énergie puisse être décompté correctement, des compteurs de consommation doivent être présents dans les unités pour chaque type d'énergie.

Remarque : 

- Les répartiteurs de frais de chauffage ne sont pas pris en charge

- En cas de décompte avec des compteurs de production totale, les coûts peuvent être répartis en pourcentage entre les unités d'habitation.


![VEWA - Décompte – Figure 5](/img/konfiguration-billing-vewa-abrechnung/05.png)

Locaux communs :

Il est possible de répartir ultérieurement (Billing) en pourcentage des ensembles de compteurs regroupés dans des dossiers entre les unités de décompte.

Cela est pris en charge pour les deux variantes de système ci-dessus.

### Combien de systèmes peuvent être configurés dans un compte ?

Un système VEWA peut être décompté par immeuble. En présence de plusieurs systèmes de chauffage, plusieurs immeubles sont créés dans le même compte.

Ceux-ci peuvent ensuite être décomptés individuellement avec des périodes de décompte différentes.

### Fonctionnement général de smart-me VEWA

- Le VEWA peut être appliqué à chaque immeuble. Veillez donc à ce que tous les compteurs de consommation d'un même système de chauffage se trouvent dans le même immeuble.
    Si un même système de chauffage dessert plusieurs bâtiments, ceux-ci doivent être regroupés en un seul.

- Lors de l'utilisation du VEWA, tous les baux ainsi que les logements vacants doivent être correctement saisis dans l'état locatif. Soit dans smart-me Billing, soit dans le logiciel immobilier externe en cas d'utilisation de fichiers DTA-VKA.


## Configurer le VEWA

### 1. Activer le VEWA et configurer les répartitions des coûts.


Sélectionner le système de chauffage :

- Chaleur, froid et eau chaude sanitaire combinés

- Chaleur, eau chaude sanitaire combinées

- Systèmes séparés


Le choix d'un système combiné ou non dépend de la production de chaleur. Si, par exemple, une pompe à chaleur est utilisée pour le chauffage, le refroidissement et la production d'eau chaude sanitaire, le décompte combiné est indiqué, car la grandeur de dépense est la même pour les trois énergies, à savoir l'électricité.

Si en revanche le chauffage est assuré par un chauffage au mazout, mais que l'eau chaude sanitaire est produite de manière purement électrique sans l'appui du chauffage au mazout, les décomptes non combinés sont le bon choix.

Répartition des coûts

La répartition des coûts divise les coûts totaux en coûts fixes (coûts de base) et en coûts variables (coûts dépendant de la consommation).

Coûts de base

Les coûts de base tiennent compte des éventuelles pertes dans les conduites, des pertes de circulation, de l'emplacement privilégié d'un logement bénéficiant de plus d'ensoleillement, etc., et répartissent une partie des coûts entre tous les locataires en fonction de leur part de surface dans l'ensemble de l'immeuble.

Coûts variables

Les coûts variables sont appliqués directement aux quantités d'énergie consommées et saisies. Ils correspondent à la consommation individuelle de chaque locataire.

Production d'eau chaude sanitaire

Afin que l'énergie utilisée pour la production d'eau chaude sanitaire puisse être estimée à partir des valeurs en m3, la formule standard suivante est appliquée :

Énergie eau chaude sanitaire en kWh =
Total des valeurs de consommation eau chaude sanitaire \[m3\] \* 1.163 \* différence de température \[K\] \* 1,25

La différence de température peut être choisie et se rapporte à la différence entre la température de l'eau froide à son entrée dans le bâtiment (habituellement +10°C) et la température moyenne du chauffe-eau à laquelle elle est chauffée (habituellement +52°C).

Selon cet exemple, la différence est donc de : 

Différence de température = température cible - température d'entrée = 52°C - 10°C = 42 K

![VEWA - Décompte – Figure 6](/img/konfiguration-billing-vewa-abrechnung/06.png)

Valeurs indicatives pour la configuration des coûts de base et des coûts variables :

Nouvelles constructions (tout à partir de 2018) : 

- Coûts de base 30%, coûts variables 70%


Anciens bâtiments rénovés (isolation améliorée selon le standard des nouvelles constructions) :

- Coûts de base 40%, coûts variables 60%


Anciens bâtiments non rénovés (avant 2018) :

- Coûts de base de 40%\-50%, coûts variables de 50-60%

- En outre, une compensation de situation doit être calculée pour chaque logement. Soit la valeur mesurée du compteur du logement est réduite, soit les pourcentages de répartition du compteur total sont pondérés. 
    (Détails au chapitre 10 du document VEWA, sous la littérature complémentaire)


Ici, les valeurs mesurées des compteurs des logements peuvent être ajustées afin d'effectuer la compensation de situation : [Configuration du compteur et du dossier](/konfiguration/ordnerkonfiguration)  

- Si un compteur doit réduire sa valeur mesurée de 20% : 
    la correction de valeur (Wertkorrektur) est réglée de 100% à 80%.


### 2\. Saisir une période de décompte

Les coûts peuvent être saisis en coûts complets pour chaque type d'énergie.
Pour les systèmes combinés, les coûts individuels des différents agents énergétiques sont additionnés.

![VEWA - Décompte – Figure 7](/img/konfiguration-billing-vewa-abrechnung/07.png)

### 3\. Créer des périodes de décompte et définir le contenu de la période de facturation

<div className="row">
<div className="col col--4">

1.  Créer la période de décompte

2.  Activer ou désactiver le contenu

Si l'électricité et les frais de chauffage et charges accessoires sont décomptés à des intervalles différents, plusieurs périodes sont saisies.

p. ex. :

- Période électricité T1 2024 (uniquement électricité et divers)

- Période électricité T2 2024 (uniquement électricité et divers)

- Période électricité T3 2024 (uniquement électricité et divers)

- Période électricité T4 2024 (uniquement électricité et divers)

- Période chaleur eau 2024 (uniquement chaleur, froid, eau chaude sanitaire et eau froide)

</div>
<div className="col col--8 bild--mitte">

![VEWA - Décompte – Figure 8](/img/konfiguration-billing-vewa-abrechnung/08.png)

</div>
</div>

### 4\. Saisir les coûts de la période de décompte

Remarque concernant l'exportation vers des logiciels immobiliers avec des fichiers DTA-VHKA :
Si vous souhaitez utiliser le VEWA, mais exporter les données vers un autre système en pour mille ou en valeurs de consommation, vous n'avez pas besoin de saisir de coûts. La période de facturation doit toutefois être créée au préalable.

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

- Travaux administratifs liés à l'installation de chauffage

- Coûts du ramoneur

- Élimination des déchets, si le système de chauffage engendre de tels coûts.


Ce qui ne fait pas partie des frais accessoires d'énergie

- Infrastructure de mesure (celle-ci est réglée par une augmentation du loyer)


Remarque concernant les coûts de l'eau chaude sanitaire :

Les coûts de l'eau chaude sanitaire ne comprennent que les coûts de chauffage de l'eau. La quantité d'eau froide utilisée pour la production d'eau chaude sanitaire est automatiquement reprise dans la partie eau froide. 

- Si un compteur total d'eau froide est réparti en pourcentage entre plusieurs logements, la quantité totale d'eau froide est calculée à partir de ce compteur commun.

- Si des compteurs d'eau froide et d'eau chaude se trouvent dans les logements et sont appliqués à 100% de la consommation, la somme pour l'eau froide correspond à la somme de tous les compteurs d'eau chaude et d'eau froide.


Ceux-ci peuvent être saisis pour chaque type d'énergie et sont additionnés.

![VEWA - Décompte – Figure 9](/img/konfiguration-billing-vewa-abrechnung/09.png)

### 5\. Facturer la location des compteurs

Contrairement au RCP (regroupement dans le cadre de la consommation propre), le VEWA permet de facturer aux consommateurs les coûts d'amortissement des compteurs de chaleur et des compteurs d'eau.

Cela doit toutefois se faire par une augmentation des loyers, et non par les charges accessoires.

Les coûts du matériel et de l'installation d'un compteur peuvent être répercutés.

La durée d'amortissement de 10 ans s'applique.

Les règles de répercussion sont décrites aux art. 269d CO et art. 19 et 20 OBLF

Détails du calcul dans le document officiel VEWA, sous 2.2 FORMELLE ÜBERWÄLZUNGSREGELN 

### 6\. Saisir un tarif toujours valable pour chaque agent énergétique

- Ce tarif est saisi sans prix (0) avec une validité illimitée (2099).

- Chaque agent énergétique disposant d'un tarif valable est affiché sur la facture.




![VEWA - Décompte – Figure 10](/img/konfiguration-billing-vewa-abrechnung/10.png)

### 7\. Saisir les surfaces des logements

Pour le calcul VEWA et la répartition des coûts de base, les surfaces des logements doivent être connues. Elles peuvent être définies dans chaque unité de décompte. Elles sont ensuite additionnées pour obtenir la surface totale déterminante.

Remarque : pour que la surface totale déterminante soit correctement indiquée, tous les locaux doivent être saisis comme unité de décompte, même s'ils n'ont eux-mêmes aucun compteur rattaché et qu'ils sont traités forfaitairement en externe.
Seuls des nombres entiers sont possibles.

![VEWA - Décompte – Figure 11](/img/konfiguration-billing-vewa-abrechnung/11.png)

## Contenu et présentation de la facture

### Aperçu

L'aperçu présente tous les coûts en un coup d'œil, y compris les éventuelles taxes appliquées et les différences d'arrondi.

![VEWA - Décompte – Figure 12](/img/konfiguration-billing-vewa-abrechnung/12.png)

### Chaleur

La section Chaleur indique les coûts totaux du centre de coûts Chaleur ainsi que les clés de répartition et les grandeurs de référence appliquées.

- Part des coûts de base en % (ici 30%)

- Part des coûts de consommation en % (ici 70%)

- Consommation totale de l'immeuble en kWh (ici 700 kWh)

- Surface habitable totale de l'immeuble en m2 (ici 300 m2)


Les tarifs calculés sont ensuite appliqués au logement concerné (bloc bleu) sur la base des valeurs mesurées par les compteurs du logement.

- Surface habitable du logement en m2 (ici 100 m2)

- Jours d'occupation (ici 91 sur 91, occupation à 100%)

- Valeur mesurée par le compteur du logement concerné (ici 500kWh)






![VEWA - Décompte – Figure 13](/img/konfiguration-billing-vewa-abrechnung/13.png)

### Eau chaude sanitaire

La section Eau chaude sanitaire indique les coûts totaux du centre de coûts Eau chaude sanitaire ainsi que les clés de répartition et les grandeurs de référence appliquées.

- Part des coûts de base en % (ici 30%)

- Part des coûts de consommation en % (ici 70%)

- Consommation totale de l'immeuble en m3 (ici 5 m2)

- Surface habitable totale de l'immeuble en m2 (ici 300 m2) 


Ces coûts se composent exclusivement des coûts nécessaires à la production d'eau chaude sanitaire, mais pas de l'eau froide utilisée à cet effet.
Plus d'informations sur les coûts dans la section Aperçu des centres de coûts.

Les tarifs calculés sont ensuite appliqués au logement concerné (bloc bleu) sur la base des valeurs mesurées par les compteurs du logement.

- Surface habitable du logement en m2 (ici 100 m2)

- Jours d'occupation (ici 91 sur 91, occupation à 100%)

- Valeur mesurée par le compteur du logement concerné en m3 (ici 3 m3)


![VEWA - Décompte – Figure 14](/img/konfiguration-billing-vewa-abrechnung/14.png)

### Eau froide

La section Eau froide indique les coûts totaux du centre de coûts Eau froide ainsi que les clés de répartition et les grandeurs de référence appliquées.

- Part des coûts de base en % (ici 20%)

- Part des coûts de consommation en % (ici 70%)

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

Selon le système, seuls des compteurs d'eau froide ou un mélange de compteurs d'eau froide et d'eau chaude peuvent figurer ici ; la détection de ces systèmes est automatisée.

- S'il existe un compteur principal d'eau froide et aucun compteur dans les logements, ou uniquement des compteurs d'eau chaude dans les logements, seul un compteur d'eau froide au prorata en % figurerait ici.

- S'il existe des compteurs de logement pour l'eau chaude et l'eau froide, les deux compteurs figurent toujours ici pour chaque logement ; leur somme donne la consommation totale d'eau.


![VEWA - Décompte – Figure 15](/img/konfiguration-billing-vewa-abrechnung/15.png)

### Aperçu des centres de coûts

Centres de coûts séparés

Chaque facture comporte l'aperçu des centres de coûts. Celui-ci contient tous les postes de coûts saisis pour les différents centres de coûts.

- Sous Chaleur figurent tous les coûts liés au système de chauffage.

- Sous Eau chaude sanitaire figurent uniquement les coûts liés au chauffage de l'eau, mais pas la quantité d'eau froide utilisée.

- Sous Eau froide sont saisis tous les coûts liés à l'eau froide et aux eaux usées.


Centres de coûts combinés

L'aperçu des centres de coûts peut changer visuellement lorsque des systèmes sont combinés.

La combinaison de la chaleur et de l'eau chaude sanitaire est par exemple courante, car une partie de l'énergie destinée à la production d'eau chaude sanitaire provient du système de chauffage. (Accumulateur d'eau chaude couplé au chauffage)

Dans ce cas, les coûts sont alors présentés de manière combinée.

La particularité réside dans l'indication de la formule de conversion utilisée pour répartir l'énergie totale entre l'énergie de chauffage et l'énergie de production d'eau chaude sanitaire.

Aperçu des coûts des centres de coûts séparés

![VEWA - Décompte – Figure 16](/img/konfiguration-billing-vewa-abrechnung/16.png)

Aperçu des centres de coûts combinés Chaleur + Eau chaude sanitaire
(formule de conversion sous l'aperçu des coûts)

![VEWA - Décompte – Figure 17](/img/konfiguration-billing-vewa-abrechnung/17.png)

## Utiliser le VEWA avec une interface de logiciel immobilier

[Échange de données avec le VEWA et les fichiers DTA-VHKA](/schnittstellen/dta-vhka-files)

## Gestion des erreurs VEWA et Billing

[Dysfonctionnements liés au VEWA](/stoerungsbehebung/billing-fehlermeldungen)

## Littérature et documents complémentaires sur le VEWA (situation juridique actuelle)

[Modèle de décompte VEWA : détails et guide](https://www.admin.ch/gov/de/start/dokumentation/medienmitteilungen.msg-id-67271.html)

[Vers l'interface VHKA](/schnittstellen/dta-vhka-files)
