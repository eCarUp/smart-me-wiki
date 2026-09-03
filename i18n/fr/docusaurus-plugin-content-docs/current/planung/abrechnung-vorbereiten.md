---
title: 'Préparer le décompte / la rétribution'
slug: '/planung/abrechnung-vorbereiten'
description: 'Décompter l''électricité avec le décompte des frais énergétiques smart-me'
sidebar_label: 'Préparer le décompte / la rétribution'
---
[Anglais](/planung/abrechnung-vorbereiten)

## Décompter le RCP

### Décompter l'électricité avec le décompte des frais énergétiques smart-me

Ce type de décompte prend en charge le tarif unique, le double tarif ou les tarifs multiples avec tarifs solaires.

Pour le décompte du RCP (regroupement dans le cadre de la consommation propre) pour la partie électrique, vous avez besoin de:

- Du statut Professional du compte et de smart-me Billing.

- Des prix de l'électricité de l'entreprise électrique avec les tarifs.

- pas nécessaire: signal tarifaire externe relié à tous les compteurs


### Décompter la chaleur et l'eau avec la fonction VEWA (conforme VEWA)

Pour que tous les frais énergétiques puissent être générés dans un décompte de chauffage et de charges accessoires conforme VEWA, vous avez besoin de:

- Du statut Professional du compte et de [smart-me Billing avec fonction VEWA](/konfiguration/billing/vewa-abrechnung)

- Des prix de l'électricité de l'entreprise électrique avec les tarifs

- D'un aperçu des coûts cumulés pour les énergies à décompter

- Du guide VEWA

- Optionnel: un logiciel immobilier pour les exports DTA-VHKA

- Optionnel: un premier décompte des frais énergétiques établi par un prestataire de décompte de chauffage et de charges accessoires, ou les informations nécessaires de votre planificateur sanitaire et chauffage.




## Décompter l'électromobilité dans le RCP

![Préparer le décompte / la rétribution – Illustration 1](/img/planung-abrechnung-vorbereiten/01.png)

## Guides VEWA et RCP

Guide sur l'autoconsommation d'énergie de SuisseEnergie (généralités, formes juridiques, coûts): [https://www.energieschweiz.ch/gebaeude/eigenverbrauch/](https://www.energieschweiz.ch/gebaeude/eigenverbrauch/)   

Modèle VEWA pour le décompte des frais d'énergie et d'eau en fonction de la consommation: [https://www.energieschweiz.ch/haushalt/warmwasser/](https://www.energieschweiz.ch/haushalt/warmwasser/) 

## Fonctionnement des tarifs et de la rétribution aux investisseurs

### Fonctionnement de l'identification du tarif et de la répartition sur les consommateurs

L'identification d'un tarif dépend principalement des moyens de mesure qui lui sont attribués et d'une composante temporelle optionnelle (action SI/ALORS).

- Les tarifs de réseau sont considérés comme des quantités d'électricité résiduelles, ce qui signifie qu'ils s'appliquent toujours à l'électricité qui n'a pas pu être attribuée à d'autres tarifs par des mesures.

- Les tarifs solaires et de batterie prennent en compte les soutirages et les livraisons de points de mesure pertinents, comme p. ex. le compteur PV et la consommation totale ou la mesure de bilan + une composante temporelle optionnelle.


### Détermination de la part du mix électrique par 15 minutes

Le mix électrique est toujours déterminé sur 15 minutes, puis appliqué de la même manière à tous les consommateurs. 

Exemple:

- La batterie livre 20 kWh

- L'installation solaire livre 100 kWh

- La consommation dans l'ensemble de l'immeuble correspond à 200 kWh


Dans ce cas, la part en pourcentage de chaque fournisseur dans la consommation totale se calcule selon la formule suivante:

% part du mix électrique = livraison du fournisseur / consommation totale de l'immeuble


- Part de la batterie = 20 kWh / 200 kWh = 10%

- Part du solaire = 100 kWh / 200kWh = 50%

- Électricité résiduelle du réseau = 100% - part de la batterie - part du solaire = 40%


![Préparer le décompte / la rétribution – Illustration 2](/img/planung-abrechnung-vorbereiten/02.png)

### Application du mix électrique aux unités de décompte et à leur consommation

Le mix énergétique ci-dessus est maintenant appliqué pour les 15 dernières minutes à chaque unité de décompte individuelle. Il en résulte que chacun a le même droit au mix énergétique, indépendamment de la quantité d'énergie qu'il consomme par rapport aux autres participants.

- Appartement A, consommation totale:
    20 kWh (2 kWh de la batterie, 10kWh du solaire, 8 kWh du réseau)

- Appartement B, consommation totale:
    100 kWh (10 kWh de la batterie, 50kWh du solaire, 40 kWh du réseau)


Remarque 1: le mix électrique reflète la réalité et le mix électrique effectivement présent dans le RCP. Lorsque de l'électricité est soutirée, la consommation correspond exactement à ce mix.
Remarque 2: cette application du mix électrique permet aux gros consommateurs de disposer, en quantité, d'une plus grande disponibilité d'électricité solaire et de batterie avantageuse.
Remarque 3: l'application du mix électrique n'a pas pour tâche de gérer les rétributions aux investisseurs ni de répartir des contingents entre les consommateurs. 

![Préparer le décompte / la rétribution – Illustration 3](/img/planung-abrechnung-vorbereiten/03.png)

### Prix de l'électricité solaire et rétribution aux investisseurs

La meilleure pratique pour rétribuer les investisseurs consiste à les faire participer au bénéfice tiré de la production et à les indemniser ainsi. La condition est que, même si tous ont investi, le prix du solaire ne soit pas proposé en interne à 0 CHF.

Si l'électricité solaire et l'électricité de la batterie ont un prix, les gros consommateurs s'acquittent de leur dette envers les autres investisseurs par le biais de ce prix à payer.

Exemple avec 3 investisseurs et 3 unités de décompte:
Le prix du solaire est fixé à 17 ct. / kWh.

- Consommateur A (200 kWh de soutirage solaire, investissement 33%):
    200 kWh \* 0.17 CHF / kWh = 34 CHF

- Consommateur B (20 kWh de soutirage solaire, investissement 33%):
    20 kWh \* 0.17 CHF / kWh = 3.4 CHF

- Consommateur C ( 50 kWh de soutirage solaire, investissement 33%):
    50 kWh \* 0.17 CHF / kWh = 8.5 CHF


Au total, la vente d'électricité solaire a généré 45.9 CHF.

![Préparer le décompte / la rétribution – Illustration 4](/img/planung-abrechnung-vorbereiten/04.png)

Comme les trois ont investi à parts égales, à hauteur de 1/3, tous ont maintenant droit à un tiers de cet argent généré.

0.33 \* 45.9 CHF = 15.14 CHF de rétribution pour l'électricité solaire utilisée en interne.

- Consommateur A (investissement 33%):
    34 CHF de montant facturé - 15.14 CHF de rétribution = 18.86 CHF payés pour l'électricité solaire

- Consommateur B (investissement 33%):
    3.4 CHF de montant facturé - 15.14 CHF de rétribution = -11.74 CHF de bénéfice sur l'électricité solaire, soit une réduction sur sa facture globale

- Consommateur C ( investissement 33%):
    8.5 CHF de montant facturé - 15.14 CHF de rétribution = -6.64 CHF de bénéfice sur l'électricité solaire, soit une réduction sur sa facture globale


Remarque:
Le tarif solaire doit inclure le prix de production ainsi que les rendements. Exemple: la règle des 80%. L'argent peut ainsi être versé au fonds de rénovation (avantages fiscaux) ou rétribué selon les coûts d'investissement.
