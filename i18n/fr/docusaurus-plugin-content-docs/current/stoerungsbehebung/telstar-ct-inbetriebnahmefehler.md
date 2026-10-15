---
title: 'Erreurs de mise en service Telstar CT'
slug: '/stoerungsbehebung/telstar-ct-inbetriebnahmefehler'
description: 'Cette page décrit les erreurs fréquentes qui peuvent survenir lors de la mise en service du Telstar CT.'
sidebar_label: 'Erreurs de mise en service Telstar CT'
---
Cette page décrit les erreurs fréquentes qui peuvent survenir lors de la mise en service du Telstar CT. Elle explique comment vérifier et corriger ces erreurs.

## La puissance ne correspond pas à celle du compteur du fournisseur d'électricité.

Pour corriger l'erreur, suivez les points ci-dessous.

### 1\. Vérifiez le rapport de transformation

Envisagez cette piste surtout si la valeur mesurée est inférieure d'un facteur entier (p. ex. valeur réelle : 4W, valeur attendue : 240W (facteur 60))

- Solution : dans le portail smart-me -> sélectionner le compteur -> cliquer sur la roue dentée -> Paramètres généraux (Allgemeine Einstellungen) -> saisir le rapport et enregistrer.

- smart-me recommande de régler le rapport de transformation selon l'indication figurant sur le transformateur, p. ex. 300A/5A --> 300:5

- Important : les données historiques ne sont pas corrigées. 


### 2\. Vérifiez si l'écart entre le compteur du fournisseur d'électricité et le compteur smart-me est inférieur ou égal à 2%.

Envisagez cette piste surtout si les consommations des deux compteurs sont relativement proches.

Nos appareils ont une précision de mesure de 1% selon la norme MID. S'y ajoute l'écart du transformateur de 0,5-1%. Ces écarts sont admis dans la classe de précision B. Pour déterminer l'écart maximal admissible compte tenu des tolérances autorisées, vous pouvez appliquer la règle empirique suivante.

Règle empirique : écart maximal admissible \[kWh\] = énergie du compteur du fournisseur d'électricité \* (erreur de mesure Telstar CT en % + erreur de mesure du transformateur en %)

Exemple :
Compteur du fournisseur d'électricité : consommation 1000kWh
Telstar CT : consommation 992kWh

écart maximal admissible \[kWh\] = énergie du compteur du fournisseur d'électricité \* (erreur de mesure Telstar CT en % + erreur de mesure du transformateur en %) = 1000kWh \* (0.01 + 0.01) = 20kWh

La valeur mesurée par le Telstar CT peut se situer dans la plage de 1000kWh +/- 20kWh ; avec 992kWh, elle correspond à l'erreur attendue

Attention : la consommation dépend de la durée de mesure. Pour l'estimation ci-dessus, il faut choisir pour les deux compteurs la même période durant laquelle l'énergie a été consommée.  Le relevé du compteur du fournisseur d'électricité ne doit pas forcément être identique à celui du Telstar CT. 

### 3\. Vérifiez si les bornes du bloc de bornes de mesure sont fermées.

Envisagez cette piste surtout si les puissances sont étonnamment faibles (moitié de la puissance attendue ou moins).

- Dans certains projets, on oublie par mégarde, après l'installation, de retirer le court-circuit côté bloc de bornes de mesure.
    Des bornes non fermées sur le bloc de bornes de mesure laissent tout de même passer un faible courant ; celui-ci est mesuré par le compteur, mais ne correspond pas au bon rapport de division. (Connexion en parallèle dans le bloc de bornes de mesure vers le point de mesure dans le compteur)


### 4\. Vérifiez si le transformateur dispose d'un pont de court-circuit.

Envisagez cette piste surtout si les puissances sont étonnamment faibles (moitié de la puissance attendue ou moins).

- Certains transformateurs, comme p. ex. le SRT01605A de Hager, sont équipés de ponts de court-circuit qui doivent être retirés après le montage et le câblage des transformateurs, comme décrit dans le mode d'emploi.


![Erreurs de mise en service Telstar CT – Figure 1](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/01.png)

### 5\. Vérifiez le sens du flux des transformateurs de courant.

Cette piste est surtout suivie lorsque des puissances de phase sont négatives alors que ce n'est pas attendu.

Tous les transformateurs possèdent un sens de flux, indiqué par une flèche.

1.  La pointe de la flèche est toujours dirigée vers : 


- Consommateurs et stockage : logements, e-mobilité, chauffages et batteries

- Producteurs : onduleurs solaires et générateurs


L'arrière de la flèche (plat) est toujours dirigé vers :

- Réseau : raccordement au réseau, distribution ou tableau de distribution du bâtiment



2.  Le pôle positif du transformateur de la phase concernée est raccordé à l'entrée "I IN" et le pôle négatif à "I OUT".




Ce qui correspond aux attentes :

- Sur le compteur PV, vous devez trouver des courants et des puissances négatifs en cas de production. 
    S'il n'y a pas de production active, on trouve en règle générale des courants et des puissances positifs. (Cette situation n'est toutefois pas univoque)

- Les compteurs de consommation purs présentent exclusivement des signes positifs pour les courants et les puissances.

- Le compteur de bilan peut présenter, selon la situation, des signes différents par phase. 

    - En cas de soutirage, ils sont normalement positifs (installation solaire ÉTEINTE pour le test)

    - En cas d'injection, ils sont normalement négatifs (installation solaire ALLUMÉE pour le test, des écarts sur des phases individuelles sont possibles)

    - La puissance totale du bilan doit toutefois correspondre à la production + la consommation.
        (Vérifier via le profil de charge ou via la visualisation « Flux d'énergie simple » (Energiefluss Einfach). N'enregistrer que le compteur PV et la consommation totale afin de calculer artificiellement le bilan, puis comparer les valeurs de la visualisation avec la puissance active du compteur de bilan)


![Erreurs de mise en service Telstar CT – Figure 2](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/02.png)

![Erreurs de mise en service Telstar CT – Figure 3](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/03.png)

### 6\. Vérifiez les déphasages à l'aide de la valeur du cos phi par phase

Si la valeur du cos phi de plusieurs phases est constamment inférieure à 0,5, il est possible qu'une tension de phase ait été intervertie.

Le compteur mesure alors sur l'entrée U phase 1 la tension de L1, mais I IN et I OUT de la phase 1 mesurent le courant de L2.

À retenir : si une phase est intervertie, ce sont toujours deux phases qui sont interverties !

Cela conduit à des valeurs de cos phi comprises entre 0 et 0,6 environ (tendance inférieure à 0,5)

- Vérifiez que toutes les tensions et tous les courants sont correctement câblés.

- Vérifiez le sens du flux des transformateurs


Si ces valeurs semblent correctes, qu'elles sont toutes nettement supérieures à 0,5 et que vous avez effectué toutes les étapes précédentes, il reste en dernier recours la vérification des registres d'énergie réactive. Celle-ci traite les interversions multiples de sens de flux et de raccordements.

![Erreurs de mise en service Telstar CT – Figure 4](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/04.png)

### 7\. Vérifiez les registres d'énergie réactive du compteur

Si les valeurs mesurées semblent toujours invraisemblables, il est possible que les prises de tension et la mesure de courant aient été interverties. Les registres d'énergie réactive peuvent nous fournir une indication à ce sujet.

Supposons que deux tensions de phase aient été amenées sur les mauvaises entrées et qu'en plus certains transformateurs aient été raccordés dans le mauvais sens de flux : l'analyse à partir des données de puissance active devient alors très difficile, voire quasiment impossible.

Pour afficher ces registres d'énergie réactive, la mesure doit être activée. Activation de la mesure d'énergie réactive : sélectionner le compteur --> Configuration matérielle (Hardwarekonfiguration) (roues dentées) --> Paramètres généraux (Allgemeine Einstellungen) --> Activer l'énergie réactive (Blindenergie aktivieren) (Oui (Ja))

Pour une maison individuelle ou un immeuble collectif avec installation solaire, l'ordre des relevés du compteur pour les quadrants devrait, dans la plupart des cas, se présenter ainsi :

- Q1 : soutirage d'énergie réactive inductive :
    moteurs, ventilations
    \--> valeurs élevées (nettement supérieures à Q2) 

- Q2. Injection d'énergie réactive inductive :
    générateurs triphasés tels que générateurs diesel ou éoliennes
    \--> valeur la plus basse de toutes 

- Q3 : injection d'énergie réactive capacitive :
    producteurs tels qu'installations PV, batteries ou bornes de recharge bidirectionnelles
    (une production doit toutefois déjà avoir eu lieu)
    \--> valeur élevée (nettement supérieure à Q2, souvent aussi à Q1) 

- Q4 : soutirage d'énergie réactive capacitive :
    systèmes de stockage, onduleurs, installations de compensation, véhicules électriques, charges dans les logements
    \--> valeurs moyennes à élevées (nettement supérieures à Q2, souvent aussi à Q1) 


Q1 et Q4 sont difficiles à évaluer sans connaissances plus précises. Dans un immeuble collectif avec installation solaire, Q2 et Q3 peuvent en revanche être évalués facilement. Si l'évolution de Q2 et Q3 ne suit pas la tendance de l'exemple ci-dessus, il s'agit probablement de l'un des cas suivants :

- Au moins une tension et un courant intervertis

- Au moins un transformateur avec un mauvais sens de flux ou des câbles croisés vers le compteur


Sources d'erreur possibles :

- Sens de flux du transformateur lors du montage

- Interversion des prises des transformateurs

- Câblage erroné sur le bloc de bornes de mesure

- Prise erronée sur le bloc de bornes de mesure

- Câblage erroné à l'arrivée sur le compteur (I IN / I OUT)


![Erreurs de mise en service Telstar CT – Figure 5](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/05.png)

Exemple d'un compteur de bilan d'un grand immeuble collectif avec installation solaire
\+ e-mobilité

![Erreurs de mise en service Telstar CT – Figure 6](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/06.png)

Exemple d'un compteur de bilan dans une maison individuelle avec installation solaire

### 8\. Vérifiez les connecteurs et les résistances de ligne de la sortie du transformateur

Envisagez cette piste si les signes des puissances et des courants sont corrects, mais que la valeur des courants est anormalement faible.

- Chaque transformateur possède une puissance de sortie en voltampères S \[VA\]

- Les résistances de ligne ne doivent pas être plus élevées que ce que permet le courant secondaire maximal avec la puissance disponible.


Formule :  résistance de ligne max. R = S / courant secondaire I^2

Exemple : transformateur 200A / 5A avec une puissance de sortie de 1VA

R max. = 1VA/(5A\*5A) = 0.04 Ohm

La résistance mesurée entre le raccordement positif et négatif du transformateur ne doit donc pas dépasser 0.04 Ohm.
Elle ne doit pas non plus être trop juste : la résistance en courant alternatif à 50Hz est légèrement supérieure à la résistance en courant continu.

Remarque : 

- La mesure doit être effectuée avec le transformateur retiré !
    Sinon, c'est la résistance de la bobine du transformateur qui est mesurée et non celle des conducteurs aller et retour.


Que puis-je faire si la résistance de ligne est trop élevée ?

1.  Contrôler tous les connecteurs, les resserrer et mesurer à nouveau.

2.  Augmenter la section des conducteurs (2.5mm2 est courant)

3.  Raccourcir les conducteurs

4.  Remplacer le transformateur par un transformateur plus puissant, p. ex. 5VA


![Erreurs de mise en service Telstar CT – Figure 7](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/07.png)

## Comprendre le système triphasé et le compteur à transformateurs

### Introduction

Les considérations suivantes visent à éclairer le comportement de mesure d'un compteur à transformateurs en cas d'erreur. Elles reposent sur des tensions et des courants sinusoïdaux simples, afin de ne pas compliquer inutilement le sujet. Il est toutefois important de savoir que les courants ne présentent presque jamais une forme sinusoïdale et que le déphasage décrit ci-après en cas de câblage erroné présentera de légers écarts par rapport à ces considérations.

### Généralités

1.  Les tensions et les courants des trois phases sont décalés dans le temps les uns par rapport aux autres afin de pouvoir générer un mouvement de rotation dans un moteur.

2.  Le courant est une conséquence de la tension appliquée et est déterminé par le comportement de la charge.


Le décalage temporel mentionné ci-dessus correspond exactement à 120° sur une rotation complète de 360°.

- La phase 1 commence à 0°

- La phase 2 commence à 120°

- La phase 3 commence à 240°


À 50 Hz, 360° = 20ms ou 1/fréquence = période
Le décalage temporel entre les différentes phases est donc : 20 ms/360° \* 120° = 6,666 ms

### Que fait le compteur à transformateurs ?

Un compteur à transformateurs interprète chaque tension de phase, chaque courant de phase et la puissance de phase correspondante indépendamment des deux autres, puis additionne les trois puissances de phase obtenues pour former une puissance totale triphasée. 

Somme P = puissance de phase 1 + puissance de phase 2 + puissance de phase 3

Si certaines d'entre elles étaient négatives (p. ex. le transformateur de courant d'une phase a un sens de flux inversé), la puissance obtenue serait inférieure à celle attendue.

![Erreurs de mise en service Telstar CT – Figure 8](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/08.png)

Vue oscilloscope d'un système triphasé

### Tension de phase et courant de phase correctement raccordés (U1 / I1)

Considérons ici une phase correctement raccordée. La tension L1 (U1) et le courant L1 (I1) sont mesurés (le transformateur est raccordé dans le bon sens de flux).

Les deux demi-ondes donnent une puissance positive, car la tension et le courant ont le même signe dans chaque demi-onde.

La puissance mesurée correspond correctement à 6500W (rouge).

![Erreurs de mise en service Telstar CT – Figure 9](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/09.png)

### Sens de flux du transformateur inversé sur une phase

Exemple : installation solaire

L'installation solaire produit une puissance de 30kW --> chaque phase 10kW. (Les installations solaires produisent toujours de manière aussi équilibrée que possible sur les trois phases)
Si tout est correct, ces 30kW peuvent aussi être lus sur l'appareil de mesure.

Si le transformateur de la phase 1 a un sens de flux inversé, il en résulte une puissance de phase négative pour la phase 1.

Somme P = -10kW + 10kW + 10kW = 10kW

La puissance totale ne correspond plus qu'à 1/3 de la puissance attendue.

### Tension de phase et courants de phase intervertis

Remarque : si un courant de phase ou une tension de phase a été raccordé à la mauvaise entrée du compteur, ce sont toujours deux phases qui sont concernées !

La tension de phase et le courant de phase ont été intervertis (U1 / I2) et sont mesurés sur la phase 1

Considérons ici le résultat d'une mesure lorsque le compteur reçoit bien la bonne tension L1 (U1), mais le mauvais courant L2 (I2). 

Nous mélangeons donc la tension de la phase 1 avec le courant de la phase 2.

La puissance de phase devient négative. Le déphasage de 120° se traduit dans l'appareil de mesure par un déphasage mesuré de seulement 60° et est désormais affiché avec un facteur de puissance de 0,5. 

Résultat : puissance négative et égale à la moitié des 6500 W attendus)

P = -3250W (rouge)

Remarque : il faut tenir compte du fait que, dans un système réel, le facteur de puissance peut être supérieur ou inférieur à 0.5 (p. ex. 0,3 à 0,7). Cela s'explique par le fait que le facteur de puissance de la phase 1 se situe déjà entre 0,8 et 1, même avec un câblage et une mesure corrects.

![Erreurs de mise en service Telstar CT – Figure 10](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/10.png)

Tension de phase et courant de phase intervertis (U1 / I3)

Considérons ici le résultat d'une mesure lorsque le compteur reçoit bien la bonne tension, mais le mauvais courant. 

Nous mélangeons la tension de la phase 1 avec le courant de la phase 3.

La puissance de phase devient négative. Le déphasage de 120° se traduit dans l'appareil de mesure par un déphasage mesuré de seulement -60° et est désormais affiché avec un facteur de puissance de 0,5. (Dans l'appareil de mesure, le facteur de puissance ne peut prendre que des valeurs de 0 à 1, bien que cos (Phi) = -0,5 soit ici correct)

Résultat : puissance négative et égale à la moitié des 6500 W attendus)

P = -3250W (rouge)

Remarque : il faut tenir compte du fait que, dans un système réel, le facteur de puissance peut être supérieur ou inférieur à 0.5 (p. ex. 0,3 à 0,7). Cela s'explique par le fait que le facteur de puissance de la phase 1 se situe déjà entre 0,8 et 1, même avec un câblage et une mesure corrects.

![Erreurs de mise en service Telstar CT – Figure 11](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/11.png)
