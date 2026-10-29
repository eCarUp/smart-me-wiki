---
title: 'Préparer le décompte / la rétribution'
slug: '/planung/abrechnung-vorbereiten'
description: 'Décompter l''électricité avec le décompte des coûts énergétiques smart-me'
sidebar_label: 'Préparer le décompte / la rétribution'
symbol: 'rechnung'
---

## Décompte du RCP

### Décompter l'électricité avec le décompte des coûts énergétiques smart-me

Ce type de décompte prend en charge le tarif unique, le double tarif ou les tarifs multiples avec tarifs solaires.

Pour le décompte de la partie électrique du RCP (regroupement dans le cadre de la consommation propre), vous avez besoin de :

- Le statut Professional du compte et smart-me Billing.

- Les prix de l'électricité du fournisseur d'électricité, avec les tarifs.

- Pas nécessaire : signal tarifaire externe relié à tous les compteurs


### Décompter la chaleur et l'eau avec la fonction VEWA (conforme VEWA)

Pour que tous les coûts énergétiques puissent être générés dans un décompte des charges accessoires de chauffage conforme VEWA, vous avez besoin de :

- Le statut Professional du compte et [smart-me Billing avec fonction VEWA](/konfiguration/billing/vewa-abrechnung)

- Les prix de l'électricité du fournisseur d'électricité, avec les tarifs

- Un récapitulatif des coûts cumulés pour les énergies à décompter

- Le guide VEWA

- En option : un logiciel immobilier pour les exportations DTA-VHKA

- En option : un premier décompte des coûts énergétiques établi par un prestataire de décompte des charges accessoires de chauffage, ou les informations nécessaires de votre planificateur sanitaire et chauffage.




## Décompter l'électromobilité dans le RCP

| Caractéristique | Borne privée avec Pico | Borne semi-publique | Borne de recharge publique |
| --- | --- | --- | --- |
| Qui peut recharger | uniquement le locataire de l'appartement | les locataires de l'immeuble | tous les utilisateurs eCarUp |
| Décompte | automatiquement avec l'électricité de l'appartement, selon le modèle tarifaire (heures pleines, heures creuses, solaire) | **Option A :** les locataires rechargent au prix de 0 CHF. Les coûts d'électricité sont facturés à la gérance et répercutés sur les locataires via la fonction de rapport (tarifs manuels).<br /><br />**Option B :** limitée, avec tarif fixe et paiement par carte de crédit | Les coûts d'électricité sont facturés à la gérance, la refacturation se fait via un tarif fixe et un paiement par carte de crédit |
| Accessible au public | non | non | oui, mise à disposition du public via eCarUp |
| Borne | Pico | Pico ou borne OCPP | Pico ou borne OCPP |

## Guide VEWA et RCP

Guide sur l'autoconsommation de SuisseEnergie (généralités, formes juridiques, coûts) : [https://www.energieschweiz.ch/gebaeude/eigenverbrauch/](https://www.energieschweiz.ch/gebaeude/eigenverbrauch/)   

Modèle VEWA pour le décompte des coûts d'énergie et d'eau en fonction de la consommation : [https://www.energieschweiz.ch/haushalt/warmwasser/](https://www.energieschweiz.ch/haushalt/warmwasser/) 

## Fonctionnement des tarifs et rétrocession aux investisseurs

### Fonctionnement de l'identification du tarif et de la répartition entre les consommateurs

L'identification d'un tarif dépend principalement des instruments de mesure qui lui sont associés et d'une composante temporelle optionnelle (action SI/ALORS).

- Les tarifs réseau sont considérés comme des quantités d'électricité résiduelles. Cela signifie qu'ils s'appliquent toujours à l'électricité qui n'a pas pu être attribuée à d'autres tarifs par des mesures.

- Les tarifs solaires et batterie tiennent compte des soutirages et des livraisons des points de mesure pertinents, comme le compteur PV et la consommation totale ou la mesure de bilan, plus une composante temporelle optionnelle.


### Détermination des parts du mix électrique par tranche de 15 minutes

Le mix électrique est toujours déterminé pour 15 minutes, puis appliqué de la même manière à tous les consommateurs. 

Exemple :

- La batterie livre 20 kWh

- L'installation solaire livre 100 kWh

- La consommation de l'ensemble de l'immeuble s'élève à 200 kWh

Dans ce cas, la part en pourcentage de chaque fournisseur dans la consommation totale se calcule selon la formule suivante :

% de part dans le mix électrique = livraison du fournisseur / consommation totale de l'immeuble

- Part batterie = 20 kWh / 200 kWh = 10%

- Part solaire = 100 kWh / 200kWh = 50%

- Électricité résiduelle du réseau = 100% - part batterie - part solaire = 40%

<div className="bild--voll">

![Préparer le décompte / la rétribution – Figure 2](/img/planung-abrechnung-vorbereiten/02.png)

</div>

### Application du mix électrique aux unités de décompte et à leur consommation

Le mix énergétique ci-dessus est maintenant appliqué, pour les 15 dernières minutes, à chaque unité de décompte individuelle. Ainsi, chacun dispose du même droit sur le mix énergétique, indépendamment de la quantité d'énergie qu'il consomme par rapport aux autres participants.

- Consommation totale de l'appartement A :

    20 kWh (2 kWh de la batterie, 10kWh du solaire, 8 kWh du réseau)

- Consommation totale de l'appartement B :

    100 kWh (10 kWh de la batterie, 50kWh du solaire, 40 kWh du réseau)

Remarque 1 : le mix électrique reflète la réalité et le mix électrique effectivement présent dans le RCP. Lorsque de l'électricité est soutirée, la consommation correspond exactement à ce mix.
Remarque 2 : cette application du mix électrique permet aux gros consommateurs de disposer, en quantité, d'une plus grande part d'électricité solaire et de batterie avantageuse.
Remarque 3 : l'application du mix électrique n'a pas pour rôle de gérer les rétributions aux investisseurs ni de répartir des contingents entre les consommateurs. 

<div className="bild--voll">

![Préparer le décompte / la rétribution – Figure 3](/img/planung-abrechnung-vorbereiten/03.png)

</div>

### Prix de l'électricité solaire et rétribution des investisseurs

La bonne pratique pour rétribuer les investisseurs consiste à les faire participer au bénéfice tiré de la production réalisée et à les dédommager ainsi. La condition préalable est que, même si tous sont investisseurs, l'électricité solaire ne soit pas proposée en interne au prix de 0 CHF.

Si l'électricité solaire et l'électricité de la batterie ont un prix, les gros consommateurs dédommagent les autres investisseurs en s'acquittant de leur dû via ce prix.

Exemple avec 3 investisseurs et 3 unités de décompte :
Le prix solaire est fixé à 17 Rp. / kWh.

- Consommateur A (soutirage solaire de 200 kWh, investissement 33%) :
    200 kWh \* 0.17 CHF / kWh = 34 CHF

- Consommateur B (soutirage solaire de 20 kWh, investissement 33%) :
    20 kWh \* 0.17 CHF / kWh = 3.4 CHF

- Consommateur C ( soutirage solaire de 50 kWh, investissement 33%) :
    50 kWh \* 0.17 CHF / kWh = 8.5 CHF


Au total, la vente d'électricité solaire a ainsi rapporté 45.9 CHF.

<div className="bild--voll">

![Préparer le décompte / la rétribution – Figure 4](/img/planung-abrechnung-vorbereiten/04.png)

</div>

Comme les trois ont investi à parts égales, soit 1/3 chacun, ils ont tous droit à un tiers de cette somme.

0.33 \* 45.9 CHF = 15.14 CHF de rétrocession pour l'électricité solaire utilisée en interne.

- Consommateur A (investissement 33%) :
    34 CHF montant facturé - 15.14 CHF de rétrocession = 18.86 CHF payés pour l'électricité solaire

- Consommateur B (investissement 33%) :
    3.4 CHF montant facturé - 15.14 CHF de rétrocession = -11.74 CHF de bénéfice sur l'électricité solaire, ou réduction de sa facture totale

- Consommateur C ( investissement 33%) :
    8.5 CHF montant facturé - 15.14 CHF de rétrocession = -6.64 CHF de bénéfice sur l'électricité solaire, ou réduction de sa facture totale


Remarque :
Le tarif solaire doit inclure le prix de production ainsi que les rendements. Exemple : règle des 80%. L'argent peut ainsi alimenter le fonds de rénovation (avantages fiscaux) ou être rétrocédé en fonction des coûts d'investissement.
