---
title: 'Préparer le décompte / la rétribution'
slug: '/planung/abrechnung-vorbereiten'
description: 'Établir le décompte de l''électricité avec le décompte des coûts énergétiques smart-me'
sidebar_label: 'Préparer le décompte / la rétribution'
---
[Anglais](/planung/abrechnung-vorbereiten)

## Établir le décompte du RCP

### Établir le décompte de l'électricité avec le décompte des coûts énergétiques smart-me

Ce type de décompte prend en charge le tarif unique, le double tarif ou les tarifs multiples avec tarifs solaires.

Pour établir le décompte de la partie électricité du RCP (regroupement dans le cadre de la consommation propre), vous avez besoin de :

- Statut Professional du compte et smart-me Billing.

- Les prix de l'électricité de l'entreprise d'électricité avec les tarifs.

- Non nécessaire : signal tarifaire externe relié à tous les compteurs


### Établir le décompte de la chaleur et de l'eau avec la fonction VEWA (conforme VEWA)

Pour que tous les coûts énergétiques puissent être générés dans un décompte des frais de chauffage et charges accessoires conforme VEWA, vous avez besoin de :

- Statut Professional du compte et [smart-me Billing avec la fonction VEWA](/konfiguration/billing/vewa-abrechnung)

- Les prix de l'électricité de l'entreprise d'électricité avec les tarifs

- Un récapitulatif des coûts cumulés des énergies à décompter

- Guide VEWA

- Optionnel : logiciel immobilier pour les exports DTA-VHKA

- Optionnel : un premier décompte des coûts énergétiques d'un prestataire de décompte des frais de chauffage et charges accessoires ou les informations nécessaires de votre planificateur sanitaire et chauffage.




## Établir le décompte de l'électromobilité dans le RCP

![Préparer le décompte / la rétribution – Illustration 1](/img/planung-abrechnung-vorbereiten/01.png)

## Guide VEWA et RCP

Guide autoconsommation de SuisseEnergie (généralités, formes juridiques, coûts) : [https://www.energieschweiz.ch/gebaeude/eigenverbrauch/](https://www.energieschweiz.ch/gebaeude/eigenverbrauch/)   

Modèle VEWA pour le décompte des frais d'énergie et d'eau en fonction de la consommation : [https://www.energieschweiz.ch/haushalt/warmwasser/](https://www.energieschweiz.ch/haushalt/warmwasser/) 

## Fonctionnement des tarifs et de la rétrocession aux investisseurs

### Fonctionnement de l'identification du tarif et de la répartition entre les consommateurs

L'identification d'un tarif dépend principalement des moyens de mesure qui lui sont associés et d'une composante temporelle optionnelle (action SI/ALORS).

- Les tarifs réseau sont considérés comme des quantités d'électricité résiduelles, ce qui signifie qu'ils s'appliquent toujours à l'électricité qui n'a pas pu être attribuée à d'autres tarifs par des mesures.

- Les tarifs solaires et batterie tiennent compte des soutirages et des livraisons des points de mesure pertinents, comme le compteur PV et la consommation totale ou la mesure de bilan, + une composante temporelle optionnelle.


### Détermination de la part du mix électrique par période de 15 minutes

Le mix électrique est toujours déterminé pour 15 minutes, puis appliqué de manière égale à tous les consommateurs. 

Exemple :

- La batterie fournit 20 kWh

- L'installation solaire fournit 100 kWh

- La consommation de l'ensemble de l'immeuble s'élève à 200 kWh

Dans ce cas, la part en pourcentage de chaque fournisseur dans la consommation totale se calcule selon la formule suivante :

% de part dans le mix électrique = livraison du fournisseur / consommation totale de l'immeuble

- Part batterie = 20 kWh / 200 kWh = 10%

- Part solaire = 100 kWh / 200kWh = 50%

- Électricité résiduelle réseau = 100% - part batterie - part solaire = 40%

![Préparer le décompte / la rétribution – Illustration 2](/img/planung-abrechnung-vorbereiten/02.png)

### Application du mix électrique aux unités de décompte et à leur consommation

Le mix énergétique ci-dessus est maintenant appliqué pour les 15 dernières minutes à chaque unité de décompte individuelle. Ainsi, chacun dispose du même droit sur le mix énergétique, indépendamment de la quantité d'énergie qu'il consomme par rapport aux autres participants.

- Consommation totale de l'appartement A :

    20 kWh (2 kWh de la batterie, 10kWh du solaire, 8 kWh du réseau)

- Consommation totale de l'appartement B :

    100 kWh (10 kWh de la batterie, 50kWh du solaire, 40 kWh du réseau)

Remarque 1 : le mix électrique reflète la réalité et le mix électrique effectivement présent dans le RCP. Lorsque de l'électricité est soutirée, la consommation correspond exactement à ce mix.
Remarque 2 : cette application du mix électrique permet aux gros consommateurs de disposer, en quantité, d'une plus grande disponibilité d'électricité solaire et de batterie avantageuse.
Remarque 3 : l'application du mix électrique n'a pas pour but de gérer les rétributions aux investisseurs ni de répartir des contingents entre les consommateurs. 

![Préparer le décompte / la rétribution – Illustration 3](/img/planung-abrechnung-vorbereiten/03.png)

### Prix de l'électricité solaire et rétribution aux investisseurs

La meilleure pratique pour rétribuer les investisseurs consiste à les faire participer au bénéfice issu de la production réalisée et à les dédommager ainsi. La condition préalable est que, même si tous ont investi, le prix solaire ne soit pas proposé en interne à 0 CHF.

Si l'électricité solaire et l'électricité de batterie ont un prix, les gros consommateurs dédommagent les autres investisseurs de leur dette au moyen de ce prix à payer.

Exemple avec 3 investisseurs et 3 unités de décompte :
Le prix solaire est fixé à 17 Rp. / kWh.

- Consommateur A (200 kWh de soutirage solaire, investissement 33%) :
    200 kWh \* 0.17 CHF / kWh = 34 CHF

- Consommateur B (20 kWh de soutirage solaire, investissement 33%) :
    20 kWh \* 0.17 CHF / kWh = 3.4 CHF

- Consommateur C ( 50 kWh de soutirage solaire, investissement 33%) :
    50 kWh \* 0.17 CHF / kWh = 8.5 CHF


Au total, la vente d'électricité solaire a ainsi généré 45.9 CHF.

![Préparer le décompte / la rétribution – Illustration 4](/img/planung-abrechnung-vorbereiten/04.png)

Comme les trois ont investi à parts égales, soit 1/3 chacun, tous ont droit à un tiers de cet argent généré.

0.33 \* 45.9 CHF = 15.14 CHF de rétrocession pour l'électricité solaire utilisée en interne.

- Consommateur A (investissement 33%) :
    34 CHF montant facturé - 15.14 CHF rétrocession = 18.86 CHF payés pour l'électricité solaire

- Consommateur B (investissement 33%) :
    3.4 CHF montant facturé - 15.14 CHF rétrocession = -11.74 CHF de bénéfice sur l'électricité solaire, ou réduction de sa facture totale

- Consommateur C ( investissement 33%) :
    8.5 CHF montant facturé - 15.14 CHF rétrocession = -6.64 CHF de bénéfice sur l'électricité solaire, ou réduction de sa facture totale


Remarque :
Le tarif solaire doit inclure le prix de production ainsi que les rendements. Exemple : règle des 80%. L'argent peut ainsi alimenter le fonds de rénovation (avantages fiscaux) ou être rétrocédé selon les coûts d'investissement.
