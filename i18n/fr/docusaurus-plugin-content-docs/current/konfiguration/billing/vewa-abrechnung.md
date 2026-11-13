---
title: 'DIFEE - Décompte'
slug: '/konfiguration/billing/vewa-abrechnung'
description: 'Introduction smart-me dès 2min 20sec'
sidebar_label: 'DIFEE - Décompte'
naechste_schritte: [konfiguration/billing/rechnung-erstellen]
vorheriger_schritt: konfiguration/billing/sonstige-kosten
---

<Menueweg>Facturation → Immeubles & tarifs → VEWA</Menueweg>

## Décompte de la chaleur et de l'eau : deux possibilités

Pour la tarification et le décompte multi-énergies, il existe en principe deux possibilités de configuration :

**Décompte sans la fonction DIFEE**

- Décompte au moyen d'un tarif énergétique calculé en externe pour chaque type d'énergie. Il est saisi dans l'immeuble, sous les tarifs virtuels, avec un prix en CHF/m3 ou CHF/kWh.

**Décompte avec la fonction DIFEE (recommandé)**

- Les frais de chaleur et d'eau accumulés sur l'année peuvent être saisis. Le tarif est ensuite calculé sur la période et réparti entre les unités de décompte au moyen de clés de répartition.

Cette page décrit la méthode recommandée avec la fonction DIFEE.

## Webinaire DIFEE

<Video src="nrziX2lLI0s" title="Vidéo YouTube" />

- [Introduction smart-me](https://youtu.be/nrziX2lLI0s?si=ufIjxwLFavDER5VH&t=140) dès 2min 20sec 

- [DIFEE](https://youtu.be/nrziX2lLI0s?si=O-Q5qFbhTNm4v4s-&t=770) dès 12min 50sec

- [Démo en direct](https://youtu.be/nrziX2lLI0s?si=CYljDSjMHWwKagCu&t=1498) dès 24min 58sec 

- [Questions](https://youtu.be/nrziX2lLI0s?si=sr3GAi-mrt6gyLyQ&t=2432) dès 40min 32sec 


## Généralités sur le DIFEE

DIFEE signifie Décompte individuel des frais d'énergie et d'eau. Il fournit une ligne directrice pour une répartition équitable de tous les types de frais d'énergie et comprend :

- la chaleur

- le froid

- l'eau chaude sanitaire

- l'eau froide 

- l'électricité (peut aussi être traitée séparément)


Le DIFEE succède au décompte VHKA bien connu et prend en charge davantage d'agents énergétiques ainsi que des procédures simplifiées.

Le DIFEE assure la répartition des frais pour des systèmes de chauffage séparés ou combinés sur la base des valeurs mesurées par les compteurs et répartit les frais de la manière la plus équitable possible.

Pour la chaleur, le froid et l'eau chaude sanitaire, des procédures spécifiques sont appliquées afin de compenser les inégalités liées à la situation des logements, les pertes dans les conduites ou d'autres différences entre les consommateurs.

Les formes de répartition des frais suivantes existent :

Centres de coûts séparés

- Chaque énergie provient d'une source différente


<div className="bild--voll">

![DIFEE - Décompte – Illustration 2](/img/konfiguration-billing-vewa-abrechnung/02_FR.png)

</div>

Chaleur et eau chaude sanitaire combinées

- Chauffage de tout type avec accumulateur d'eau chaude raccordé


<div className="bild--voll">

![DIFEE - Décompte – Illustration 3](/img/konfiguration-billing-vewa-abrechnung/03_FR.png)

</div>

Chaleur + froid et eau chaude sanitaire combinés

- Pompe à chaleur avec freecooling


<div className="bild--voll">

![DIFEE - Décompte – Illustration 4](/img/konfiguration-billing-vewa-abrechnung/04_FR.png)

</div>

## Fonctionnalités

### Quels systèmes peuvent être décomptés avec le DIFEE de smart-me ?

- systèmes de chauffage et d'eau séparés (chaleur, froid, eau chaude sanitaire, eau froide)

- systèmes de chauffage et d'eau chaude sanitaire combinés (chaleur + eau chaude sanitaire, froid, eau froide)

- systèmes de chauffage, d'eau chaude sanitaire et de refroidissement combinés (chaleur + froid + eau chaude sanitaire, eau froide)


Pour qu'un type d'énergie puisse être décompté correctement, des compteurs de consommation doivent être présents dans les unités pour chaque type d'énergie.

Remarque : 

- Les répartiteurs de frais de chauffage ne sont pas pris en charge

- En cas de facturation avec des compteurs de production totale, les frais peuvent être répartis en pourcentage entre les unités d'habitation.


<div className="bild--voll">

![DIFEE - Décompte – Illustration 5](/img/konfiguration-billing-vewa-abrechnung/05_FR.png)

</div>

Locaux communs :

Il est possible de répartir ultérieurement (Billing) des ensembles de compteurs regroupés dans des dossiers en pourcentage entre les unités de décompte.

Cela est pris en charge pour les deux variantes de système ci-dessus.

### Combien de systèmes peuvent être configurés dans un compte ?

Un système DIFEE peut être décompté par immeuble. En présence de plusieurs systèmes de chauffage, plusieurs immeubles sont créés dans le même compte.

Ceux-ci peuvent ensuite être décomptés individuellement, avec des périodes de décompte différentes.

### Fonctionnement général du DIFEE de smart-me

- Le DIFEE peut être appliqué à chaque immeuble. Veillez donc à ce que tous les compteurs de consommation d'un même système de chauffage se trouvent dans le même immeuble.
    Si plusieurs bâtiments partagent le même système de chauffage, ils doivent être regroupés en un seul.

- Lors de l'application du DIFEE, tous les baux ainsi que les vacances doivent être saisis correctement dans l'état locatif, soit dans smart-me Billing, soit dans le logiciel immobilier externe en cas d'utilisation de fichiers DTA-VKA.


## Configurer le DIFEE

### 1. Activer le DIFEE et configurer les répartitions des frais.


Sélectionner le système de chauffage :

- Chaleur, froid et eau chaude sanitaire combinés

- Chaleur et eau chaude sanitaire combinées

- Systèmes séparés


Le choix entre combiné ou non dépend de la production de chaleur. Si, par exemple, une pompe à chaleur est utilisée pour le chauffage, le refroidissement et la production d'eau chaude sanitaire, le décompte combiné s'impose, car l'agent énergétique utilisé est le même pour les trois énergies, à savoir l'électricité.

Si en revanche le chauffage est assuré par une chaudière à mazout, mais que l'eau chaude sanitaire est produite uniquement à l'électricité, sans appoint de la chaudière à mazout, il convient de choisir des décomptes non combinés.

Répartition des frais

La répartition des frais divise les frais totaux en frais fixes (frais de base) et en frais variables (frais liés à la consommation).

Frais de base

Les frais de base tiennent compte des éventuelles pertes dans les conduites, des pertes de circulation, de la situation privilégiée d'un logement plus ensoleillé, etc., et répartissent une part des frais entre tous les locataires en fonction de leur part de surface dans l'ensemble de l'immeuble.

Frais variables

Les frais variables sont appliqués directement aux quantités d'énergie consommées et enregistrées. Ils correspondent à la consommation individuelle de chaque locataire.

Production d'eau chaude sanitaire

Afin de pouvoir estimer l'énergie consacrée à la production d'eau chaude sanitaire à partir des valeurs en m3, la formule standard suivante est appliquée :

Énergie de l'eau chaude sanitaire en kWh =
Total des valeurs de consommation d'eau chaude sanitaire \[m3\] \* 1.163 \* différence de température \[K\] \* 1,25

La différence de température peut être choisie et se rapporte à l'écart entre la température de l'eau froide à son entrée dans le bâtiment (généralement +10°C) et la température moyenne du chauffe-eau une fois l'eau chauffée (généralement +52°C).

Selon cet exemple, la différence est donc de : 

Différence de température = température cible - température d'entrée = 52°C - 10°C = 42 K

![DIFEE - Décompte – Illustration 6](/img/konfiguration-billing-vewa-abrechnung/06.png)

Valeurs indicatives pour la configuration des frais de base et des frais variables :

Constructions neuves (tout ce qui date de 2018 ou après) : 

- Frais de base 30%, frais variables 70%


Bâtiments anciens rénovés (isolation améliorée selon le standard des constructions neuves) :

- Frais de base 40%, frais variables 60%


Bâtiments anciens non rénovés (avant 2018) :

- Frais de base de 40%\-50%, frais variables de 50-60%

- En outre, une compensation de situation doit être calculée pour chaque logement. Soit la valeur mesurée du compteur du logement est réduite, soit les pourcentages de répartition du compteur total sont pondérés. 
    (Détails au chapitre 10 du document DIFEE, sous littérature complémentaire)


Ici, les valeurs mesurées des compteurs de logement peuvent être modifiées afin d'effectuer la compensation de situation : [Configuration du compteur et du dossier](/konfiguration/ordnerkonfiguration)  

- Si un compteur doit réduire sa valeur mesurée de 20% : 
    la correction de valeur est réglée de 100% à 80%.


### 2\. Saisir une période de décompte

Les frais peuvent être saisis en tant que coûts complets pour chaque type d'énergie.
Pour les systèmes combinés, les coûts individuels des différents agents énergétiques sont additionnés.

![DIFEE - Décompte – Illustration 7](/img/konfiguration-billing-vewa-abrechnung/07.png)

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

- Période chaleur et eau 2024 (uniquement chaleur, froid, eau chaude sanitaire et eau froide)

</div>
<div className="col col--8 bild--mitte">

![DIFEE - Décompte – Illustration 8](/img/konfiguration-billing-vewa-abrechnung/08.png)

</div>
</div>

### 4\. Saisir les frais de la période de décompte

Remarque pour l'exportation vers des logiciels immobiliers avec des fichiers DTA-VHKA :
Si vous souhaitez utiliser le DIFEE, mais exporter les données vers un autre système en pour mille ou en valeurs de consommation, vous n'avez pas besoin de saisir de frais. La période de facturation doit toutefois être créée au préalable.

Les frais pouvant être saisis se répartissent grosso modo comme suit :

Frais d'énergie

Coûts de l'agent énergétique acheté, p. ex. : 

- 1000 litres de mazout pour 2000 CHF

- 500kWh d'électricité pour 200 CHF

- 10 m3 d'eau froide pour 50 CHF


Frais accessoires d'énergie

Frais d'exploitation et d'entretien

- Frais de la révision périodique de l'installation de chauffage

- Frais du service de relevé (p. ex. amortissement des coûts de licence smart-me pour les appareils)

- Travaux administratifs liés à l'installation de chauffage

- Frais de ramonage

- Élimination des déchets, si le système de chauffage génère de tels frais.


Ce qui ne fait pas partie des frais accessoires d'énergie

- Infrastructure de mesure (celle-ci est réglée par une augmentation du loyer)


Remarque concernant les frais d'eau chaude sanitaire :

Les frais d'eau chaude sanitaire comprennent uniquement les frais de chauffage de l'eau. La quantité d'eau froide consommée pour la production d'eau chaude sanitaire est automatiquement reprise dans la partie eau froide. 

- Si un compteur général d'eau froide est réparti en pourcentage entre plusieurs logements, la quantité totale d'eau froide est calculée à partir de ce compteur commun.

- Si des compteurs d'eau froide et d'eau chaude sanitaire se trouvent dans les logements et sont appliqués avec 100% de la consommation, la somme pour l'eau froide correspond à la somme de tous les compteurs d'eau chaude sanitaire et d'eau froide.


Ceux-ci peuvent être saisis par type d'énergie et sont additionnés.

![DIFEE - Décompte – Illustration 9](/img/konfiguration-billing-vewa-abrechnung/09.png)

### 5\. Facturer la location des compteurs

Contrairement au RCP, le DIFEE permet de facturer aux consommateurs les frais d'amortissement des compteurs de chaleur et des compteurs d'eau.

Cela doit toutefois se faire par une augmentation des loyers, et non par les charges accessoires.

Les coûts du matériel et de l'installation d'un compteur peuvent être répercutés.

La durée d'amortissement est de 10 ans.

Les règles de répercussion sont décrites à l'art. 269d CO et aux art. 19 et 20 OBLF

Détails du calcul dans le document officiel DIFEE, sous 2.2 FORMELLE ÜBERWÄLZUNGSREGELN 

### 6\. Saisir un tarif toujours valable pour chaque agent énergétique

- Ce tarif est saisi sans prix (0) avec une validité illimitée (2099).

- Chaque agent énergétique disposant d'un tarif valable figure sur la facture.




![DIFEE - Décompte – Illustration 10](/img/konfiguration-billing-vewa-abrechnung/10.png)

### 7\. Saisir les surfaces des logements

Pour le calcul DIFEE et la répartition des frais de base, les surfaces des logements doivent être connues. Elles peuvent être définies dans chaque unité de décompte. Elles sont ensuite additionnées pour obtenir la surface totale déterminante.

Remarque : pour que la surface totale déterminante soit correctement indiquée, tous les locaux doivent être saisis comme unités de décompte, même s'ils ne sont rattachés à aucun compteur et sont traités forfaitairement en externe.
Seuls des nombres entiers sont possibles.

![DIFEE - Décompte – Illustration 11](/img/konfiguration-billing-vewa-abrechnung/11.png)

## Contenu et présentation de la facture

### Aperçu

L'aperçu présente tous les frais en un coup d'œil, y compris les éventuels impôts appliqués et les différences d'arrondi.

![DIFEE - Décompte – Illustration 12](/img/konfiguration-billing-vewa-abrechnung/12.png)

### Chaleur

La rubrique Chaleur indique les frais totaux du centre de coûts Chaleur ainsi que les clés de répartition et les grandeurs de référence appliquées.

- Part des frais de base en % (ici 30%)

- Part des frais de consommation en % (ici 70%)

- Consommation totale de l'immeuble en kWh (ici 700 kWh)

- Surface habitable totale de l'immeuble en m2 (ici 300 m2)


Les tarifs calculés sont ensuite appliqués au logement concerné (bloc bleu) sur la base des valeurs mesurées par les compteurs du logement.

- Surface habitable du logement en m2 (ici 100 m2)

- Jours d'occupation (ici 91 sur 91, occupation de 100%)

- Valeur mesurée par le compteur du logement concerné (ici 500kWh)






![DIFEE - Décompte – Illustration 13](/img/konfiguration-billing-vewa-abrechnung/13.png)

### Eau chaude sanitaire

La rubrique Eau chaude sanitaire indique les frais totaux du centre de coûts Eau chaude sanitaire ainsi que les clés de répartition et les grandeurs de référence appliquées.

- Part des frais de base en % (ici 30%)

- Part des frais de consommation en % (ici 70%)

- Consommation totale de l'immeuble en m3 (ici 5 m2)

- Surface habitable totale de l'immeuble en m2 (ici 300 m2) 


Ces frais comprennent exclusivement les coûts nécessaires à la production d'eau chaude sanitaire, mais pas l'eau froide utilisée à cet effet.
Plus d'informations sur les frais dans la rubrique Aperçu des centres de coûts.

Les tarifs calculés sont ensuite appliqués au logement concerné (bloc bleu) sur la base des valeurs mesurées par les compteurs du logement.

- Surface habitable du logement en m2 (ici 100 m2)

- Jours d'occupation (ici 91 sur 91, occupation de 100%)

- Valeur mesurée par le compteur du logement concerné en m3 (ici 3 m3)


![DIFEE - Décompte – Illustration 14](/img/konfiguration-billing-vewa-abrechnung/14.png)

### Eau froide

La rubrique Eau froide indique les frais totaux du centre de coûts Eau froide ainsi que les clés de répartition et les grandeurs de référence appliquées.

- Part des frais de base en % (ici 20%)

- Part des frais de consommation en % (ici 70%)

- Consommation totale de l'immeuble en m3 (ici 13 m2)

- Surface habitable totale de l'immeuble en m2 (ici 300 m2) 


Les tarifs calculés sont ensuite appliqués au logement concerné (bloc bleu) sur la base des valeurs mesurées par les compteurs du logement.

- Surface habitable du logement en m2 (ici 100 m2)

- Jours d'occupation (ici 91 sur 91, occupation de 100%)

- Valeur mesurée par le compteur du logement concerné en m3 d'eau chaude sanitaire
    (ici 3 m3)

- Valeur mesurée par le compteur du logement concerné en m3 d'eau froide
    (ici 5 m3)


Remarque :

Selon le système, seuls des compteurs d'eau froide ou un mélange de compteurs d'eau froide et d'eau chaude sanitaire peuvent figurer ici ; la détection de ces systèmes est automatisée.

- S'il existe un compteur principal d'eau froide et aucun compteur dans les logements, ou uniquement des compteurs d'eau chaude sanitaire dans les logements, seul un compteur d'eau froide au prorata en % figurerait ici.

- S'il existe des compteurs de logement pour l'eau chaude sanitaire et l'eau froide, les deux compteurs figurent toujours ici pour chaque logement ; leur somme donne la consommation totale d'eau.


![DIFEE - Décompte – Illustration 15](/img/konfiguration-billing-vewa-abrechnung/15.png)

### Aperçu des centres de coûts

Centres de coûts séparés

Chaque facture comporte l'aperçu des centres de coûts. Celui-ci contient tous les postes de frais saisis pour les différents centres de coûts.

- Pour la chaleur, tous les frais liés au système de chauffage sont listés.

- Pour l'eau chaude sanitaire, seuls figurent les frais liés au chauffage de l'eau, mais pas la quantité d'eau froide utilisée.

- Pour l'eau froide, tous les frais relatifs à l'eau froide et aux eaux usées sont saisis.


Centres de coûts combinés

L'aperçu des centres de coûts peut changer d'aspect lorsque des systèmes sont combinés.

La combinaison de la chaleur et de l'eau chaude sanitaire est par exemple courante, car une partie de l'énergie destinée à la production d'eau chaude sanitaire provient du système de chauffage. (Accumulateur d'eau chaude couplé au chauffage)

Dans ce cas, les frais sont présentés de manière combinée.

La particularité réside dans l'indication de la formule de conversion utilisée pour répartir l'énergie totale entre l'énergie de chauffage et l'énergie de production d'eau chaude sanitaire.

Aperçu des frais des centres de coûts séparés

![DIFEE - Décompte – Illustration 16](/img/konfiguration-billing-vewa-abrechnung/16.png)

Aperçu des centres de coûts combinés chaleur + eau chaude sanitaire
(formule de conversion sous l'aperçu des frais)

![DIFEE - Décompte – Illustration 17](/img/konfiguration-billing-vewa-abrechnung/17.png)

## Appliquer le DIFEE avec une interface vers un logiciel immobilier

[Échange de données avec le DIFEE et les fichiers DTA-VHKA](/schnittstellen/dta-vhka-files)

## Traitement des erreurs DIFEE et Billing

[Dysfonctionnements liés au DIFEE](/stoerungsbehebung/billing-fehlermeldungen)

## Littérature et documents complémentaires sur le DIFEE (situation juridique actuelle)

[Modèle de décompte DIFEE : détails et guide](https://www.admin.ch/gov/de/start/dokumentation/medienmitteilungen.msg-id-67271.html)

[Vers l'interface VHKA](/schnittstellen/dta-vhka-files)
