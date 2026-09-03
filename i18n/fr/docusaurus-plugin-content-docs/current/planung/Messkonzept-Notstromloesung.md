---
title: 'Schémas de mesure pour les solutions d''alimentation de secours'
slug: '/planung/Messkonzept-Notstromloesung'
description: 'Nous expliquons ici quelles mesures doivent être prises pour mesurer correctement une solution d''alimentation de secours, afin qu''elle puisse être utilisée pour le décompte dans smart-me Billing.'
sidebar_label: 'Schéma de mesure alimentation de secours'
---
Nous expliquons ici quelles mesures doivent être prises pour mesurer correctement une solution d'alimentation de secours, afin qu'elle puisse être utilisée pour le décompte dans smart-me Billing.

### Condition préalable

Tu as besoin d'un abonnement smart-me Professional

### Conditions préalables

Ce schéma de mesure peut être utilisé lorsqu'une installation d'alimentation de secours est mise en œuvre dans un objet.

Nous partons du principe que l'installation d'alimentation de secours est une boîte noire et que ni le PV ni la batterie ne peuvent être mesurés côté AC dans l'« appareil d'alimentation de secours ».

Remarque : si le fabricant permet le montage d'appareils dans l'appareil d'alimentation de secours, tu peux prévoir un schéma de mesure tout à fait normal de smart-me et installer les compteurs nécessaires directement dans l'installation d'alimentation de secours.

### Schéma

Le coffret de raccordement, l'appartement, les parties communes et le chauffage sont mesurés conformément au schéma de mesure général (cercle avec un + dans le cercle)

Avant et après l'appareil d'alimentation de secours, un compteur est installé à l'envers dans chaque cas (cercle avec un -1). Alimentation de secours hors solaire et alimentation de secours avec solaire.

En option, une autre installation PV peut être mesurée entre les deux compteurs « alimentation de secours hors solaire » et « alimentation de secours avec solaire ».

![Schémas de mesure pour les solutions d'alimentation de secours – illustration 1](/img/planung-messkonzept-notstromloesung/01.png)

### Schéma de mesure

Pour mesurer l'installation d'alimentation de secours, il est nécessaire d'installer un compteur « à l'envers » avant et après l'installation d'alimentation de secours. Le compteur peut être raccordé à l'envers en inversant le cheminement des câbles entre IN et OUT pour L1, L2 et L3.

Dans ce cas, un compteur avant la production et un compteur après la production sont raccordés « à l'envers ». (Conformément au schéma avec le compteur -1)

Les deux compteurs de production « à l'envers » ne comprennent en règle générale que l'installation d'alimentation de secours. Il est toutefois possible d'insérer une installation PV entre les compteurs si celle-ci doit être facturée au même prix dans smart-me Billing. (Production énergie alternative).

De plus, un compteur virtuel est nécessaire, composé comme suit :

Production (virtuelle) = « alimentation de secours avec solaire » moins « alimentation de secours hors solaire » plus « compteur de bilan »

![Schémas de mesure pour les solutions d'alimentation de secours – illustration 2](/img/planung-messkonzept-notstromloesung/02.png)

### Billing

Dans Billing, un tarif de batterie doit être défini. Le compteur solaire correspond au compteur virtuel défini « Production »

Toutes les autres configurations peuvent être saisies comme d'habitude.

![Schémas de mesure pour les solutions d'alimentation de secours – illustration 3](/img/planung-messkonzept-notstromloesung/03.png)

### Vérification / explication des points de mesure

L'installation peut être vérifiée en affectant à un dossier commun (p. ex. compteurs techniques) les compteurs bilan, consommation totale (virtuelle), alimentation de secours hors solaire, alimentation de secours avec solaire et production (virtuelle).

Remarque : l'installation devrait enregistrer des données pendant au moins 24 heures.

![Schémas de mesure pour les solutions d'alimentation de secours – illustration 4](/img/planung-messkonzept-notstromloesung/04.png)

- Vérifier si le compteur « alimentation de secours avec solaire » affiche une valeur négative.

- Vérifier si le compteur « alimentation de secours hors solaire » affiche une valeur négative.

- Vérifier si le compteur « production (virtuelle) » présente une valeur négative.

- Vérifier si le compteur « alimentation de secours avec solaire » affiche une valeur inférieure à « alimentation de secours hors solaire ». P. ex. alimentation de secours hors solaire = -3.5 watts et alimentation de secours avec solaire = -326.5 watts


![Schémas de mesure pour les solutions d'alimentation de secours – illustration 5](/img/planung-messkonzept-notstromloesung/05.png)

Vue lorsque la batterie n'est pas encore pleine.

- Sélectionner les compteurs techniques, tuile Puissance (Leistung), profil de charge sous-consommations (Lastprofil Unterverbräuche)

    - Bilan (bleu) et consommation totale virtuelle (rouge) : la courbe évolue de la même manière pendant la nuit lorsque la batterie est vide.

    - Bilan (bleu) et alimentation de secours hors solaire (jaune) évoluent en miroir.

    - Alimentation de secours avec solaire (vert) et production virtuelle (violet) : la courbe évolue de la même manière pendant la journée lorsque la batterie n'est pas encore pleine.


![Schémas de mesure pour les solutions d'alimentation de secours – illustration 6](/img/planung-messkonzept-notstromloesung/06.png)

Vue lorsque la batterie n'est pas encore pleine.

### Limitations

- Installation de deux compteurs à l'envers

- un compteur virtuel supplémentaire est nécessaire pour le décompte

- un compteur virtuel supplémentaire est nécessaire pour le graphique (en option)

- Les compteurs virtuels simples (appartement) ne sont pas possibles.

- Le monitoring graphique peut contenir une autoconsommation qui se situe en dessous de la ligne 0.

- Le graphique ne s'affiche correctement que si un autre compteur virtuel est présent, sans compteur de bilan. Selon l'exemple ci-dessus, ce serait Production graphique (virtuelle) = « alimentation de secours avec solaire » moins « alimentation de secours hors solaire »

- Le graphique ne s'affiche correctement que si un autre compteur virtuel sans compteur de bilan est présent. Selon l'exemple ci-dessus, ce serait Production graphique (virtuelle) = « alimentation de secours avec solaire » moins « alimentation de secours hors solaire »


Aucune autre limitation n'est connue.

Monitoring graphique

Dans le monitoring graphique, l'autoconsommation est affichée en dessous de la ligne 0 lorsque :

- La solution d'alimentation de secours nécessite du courant de veille

- La solution d'alimentation de secours nécessite du courant (p. ex. chauffage ou charge de calibrage d'une batterie au sel avec du courant du réseau, parce que trop peu de courant a été produit côté DC.


![Schémas de mesure pour les solutions d'alimentation de secours – illustration 7](/img/planung-messkonzept-notstromloesung/07.png)
