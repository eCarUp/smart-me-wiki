---
title: 'Erreurs de mise en service du Telstar CT'
slug: '/stoerungsbehebung/telstar-ct-inbetriebnahmefehler'
description: 'Cette page décrit les erreurs fréquentes pouvant survenir lors de la mise en service du Telstar CT.'
sidebar_label: 'Erreurs de mise en service du Telstar CT'
---
Cette page décrit les erreurs fréquentes pouvant survenir lors de la mise en service du Telstar CT. Elle explique comment vérifier et corriger ces erreurs.

## La puissance ne correspond pas à celle du compteur du fournisseur d'électricité.

Pour le dépannage, suivez les points ci-après.

### 1\. Vérifiez le rapport de transformation

Cette approche doit surtout être envisagée lorsque la valeur mesurée est inférieure d'un facteur entier (p. ex. valeur réelle : 4 W, valeur attendue : 240 W (facteur 60))

- Solution : dans le portail smart-me -> sélectionner le compteur -> cliquer sur la roue dentée -> Réglages généraux (Allgemeine Einstellungen) -> saisir le rapport et enregistrer.

- smart-me recommande de régler le rapport de transformation conformément à l'indication figurant sur le transformateur, telle que p. ex. 300A/5A --> 300:5

- Important : les données historiques ne sont pas adaptées. 


### 2\. Vérifiez si l'écart entre le compteur du fournisseur d'électricité et le compteur smart-me est inférieur ou égal à 2 %.

Cette approche doit surtout être envisagée lorsque les consommations des deux compteurs sont relativement proches l'une de l'autre.

Nos appareils ont une précision de mesure de 1 % selon le standard MID. À cela s'ajoute l'écart du transformateur de 0,5 à 1 %. Ces écarts sont admissibles dans la classe de précision B. Pour déterminer une différence maximale admissible sur la base des tolérances autorisées, la règle empirique suivante peut être appliquée.

Règle empirique : différence maximale admissible \[kWh\] = énergie du compteur du fournisseur \* (erreur de mesure du Telstar CT en % + erreur de mesure du transformateur en %)

Exemple :
Compteur du fournisseur d'électricité : consommation 1000 kWh
Telstar CT : consommation 992 kWh

différence maximale admissible \[kWh\] = énergie du compteur du fournisseur \* (erreur de mesure du Telstar CT en % + erreur de mesure du transformateur en %) = 1000kWh \* (0.01 + 0.01) = 20kWh

La valeur mesurée du Telstar CT peut se situer dans la plage de 1000 kWh +/- 20 kWh ; avec 992 kWh, cela correspond à l'erreur attendue

Attention : la consommation dépend de la durée de mesure. Pour l'estimation ci-dessus, il faut choisir pour les deux compteurs la même période durant laquelle l'énergie a été consommée.  Le relevé du compteur du fournisseur d'électricité ne doit pas nécessairement être identique à celui du Telstar CT. 

### 3\. Vérifiez si les bornes du bloc de bornes de mesure sont fermées.

Cette approche doit surtout être envisagée lorsque les puissances sont étonnamment faibles (la moitié de la puissance attendue ou moins).

- Sur certains projets, on oublie par inadvertance de retirer après l'installation le court-circuit côté bloc de bornes de mesure.
    Des bornes non fermées sur le bloc de bornes de mesure laissent malgré tout passer un faible courant ; celui-ci est mesuré par le compteur, mais ne correspond pas au bon rapport de division. (Connexion en parallèle dans le bloc de bornes de mesure vers le point de mesure dans le compteur)


### 4\. Vérifiez si le transformateur dispose d'un pont de court-circuit.

Cette approche doit surtout être envisagée lorsque les puissances sont étonnamment faibles (la moitié de la puissance attendue ou moins).

- Certains transformateurs, comme p. ex. le SRT01605A de Hager, sont équipés de ponts de court-circuit qui doivent être retirés après le montage et le câblage des transformateurs, comme décrit dans le mode d'emploi.


![Erreurs de mise en service du Telstar CT – Illustration 1](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/01.png)

### 5\. Vérifiez le sens du flux des transformateurs de courant.

Cette approche est surtout suivie lorsque des puissances de phase sont négatives alors que cela n'est pas attendu.

Tous les transformateurs possèdent un sens de flux, indiqué par une flèche.

1.  La pointe de la flèche est toujours dirigée vers : 


- Consommateurs et accumulateurs : appartements, électromobilité, chauffages et batteries

- Producteurs : onduleurs solaires et générateurs


L'arrière de la flèche (plat) est toujours dirigé vers :

- Réseau : raccordement au réseau, distribution ou distribution du bâtiment



2.  Le positif du transformateur est raccordé à l'entrée « I IN » et le négatif du transformateur à « I OUT » de la phase correspondante.




Ce qui correspond aux attentes :

- Sur le compteur PV, vous devez constater des courants et des puissances négatifs en cas de production. 
    Si aucune production active n'a lieu, on trouve en règle générale des courants et des puissances positifs. (Cette situation n'est toutefois pas univoque)

- Les compteurs de consommation purs présentent exclusivement des signes positifs pour les courants et les puissances.

- Le compteur de bilan peut, selon la situation, présenter des signes différents par phase. 

    - En cas d'achat, ceux-ci sont normalement positifs (installation solaire ARRÊTÉE pour le test)

    - En cas de fourniture, ceux-ci sont normalement négatifs (installation solaire EN MARCHE pour le test, des écarts sur les phases individuelles sont possibles)

    - La puissance totale du bilan doit toutefois correspondre à la production + la consommation.
        (À vérifier via le profil de charge ou via la visualisation « Flux d'énergie simple » (Energiefluss Einfach). N'enregistrer que le compteur PV et la consommation totale afin de calculer artificiellement le bilan, puis comparer les valeurs de la visualisation à la puissance active du compteur de bilan)


![Erreurs de mise en service du Telstar CT – Illustration 2](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/02.png)

![Erreurs de mise en service du Telstar CT – Illustration 3](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/03.png)

### 6\. Vérifiez les déphasages à l'aide de la valeur cos phi par phase

Si la valeur cos phi de plusieurs phases est constamment inférieure à 0,5, il est possible que les tensions de phase soient interverties.

Le compteur mesure alors sur l'entrée U phase 1 la tension de L1, mais I IN et I OUT de la phase 1 mesurent le courant de L2.

À retenir : si une phase est intervertie, alors ce sont toujours deux phases qui le sont !

Cela conduit à des valeurs cos phi situées autour de 0 à 0,6 (tendance en dessous de 0,5)

- Vérifiez le câblage correct de toutes les connexions de tension et de courant.

- Vérifiez le sens du flux des transformateurs


Si ces chiffres semblent corrects, qu'ils sont tous largement supérieurs à 0,5 et que toutes les étapes précédentes ont été passées en revue, il reste comme dernière option la vérification des énergies réactives. Celle-ci traite des interversions multiples de sens de flux et de raccordements.

![Erreurs de mise en service du Telstar CT – Illustration 4](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/04.png)

### 7\. Vérifiez les registres d'énergie réactive du compteur

Si les valeurs mesurées continuent de paraître peu plausibles, il est possible que les prises de tension et la mesure de courant aient été interverties. Les registres d'énergie réactive peuvent nous donner une indication à ce sujet.

Si l'on suppose que deux tensions de phase ont été amenées sur les mauvaises entrées et qu'en plus certains transformateurs ont été raccordés dans le mauvais sens de flux, l'analyse sur la base des données de puissance active devient très difficile, voire quasiment impossible.

Pour afficher ces registres d'énergie réactive, la mesure doit être activée. Activation de la mesure de l'énergie réactive : sélectionner le compteur --> Configuration matérielle (Hardwarekonfiguration) (roues dentées) --> Réglages généraux (Allgemeine Einstellungen) --> Activer l'énergie réactive (Blindenergie aktivieren) (Oui)

Dans le cas d'une maison individuelle / d'un immeuble collectif avec installation solaire, l'ordre des relevés des quadrants devrait dans la plupart des cas se présenter ainsi :

- Q1 : soutirage d'énergie réactive inductive :
    moteurs, ventilations
    \--> valeurs élevées (bien plus élevées que Q2) 

- Q2. Fourniture d'énergie réactive inductive :
    générateurs triphasés tels que groupes électrogènes diesel ou éoliennes
    \--> valeur la plus basse de toutes 

- Q3 : fourniture d'énergie réactive capacitive :
    producteurs tels qu'installations PV, batteries ou bornes de recharge bidirectionnelles
    (la production doit toutefois avoir déjà eu lieu)
    \--> valeur élevée (bien plus élevée que Q2, souvent aussi que Q1) 

- Q4 : soutirage d'énergie réactive capacitive :
    systèmes de stockage, onduleurs, installations de compensation, véhicules électriques, charges dans les appartements
    \--> valeurs moyennes à élevées (bien plus élevées que Q2, souvent aussi que Q1) 


Q1 et Q4 sont difficiles à évaluer sans connaissances plus précises. Dans un immeuble collectif avec installation solaire, Q2 et Q3 sont en revanche faciles à évaluer. Si l'évolution ne suit pas la tendance de l'exemple ci-dessus avec Q2 et Q3, il y a probablement :

- au moins une tension et un courant interv1ertis

- au moins un transformateur avec un mauvais sens de flux ou des câbles croisés vers le compteur


Sources d'erreur possibles :

- sens de flux de montage des transformateurs

- interversion des prises des transformateurs

- câblage erroné sur le bloc de bornes de mesure

- mauvais prélèvement depuis le bloc de bornes de mesure

- câblage erroné à l'arrivée sur le compteur (I IN / I OUT)


![Erreurs de mise en service du Telstar CT – Illustration 5](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/05.png)

Exemple d'un compteur de bilan d'un grand immeuble collectif avec installation solaire
\+ électromobilité

![Erreurs de mise en service du Telstar CT – Illustration 6](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/06.png)

Exemple d'un compteur de bilan dans une maison individuelle avec installation solaire

### 8\. Vérifiez les connecteurs et les résistances de ligne de la sortie du transformateur

Cette approche est à envisager lorsque les signes des puissances et des courants sont corrects, mais que la valeur des courants est anormalement faible.

- Chaque transformateur possède une puissance de sortie en volt-ampère S \[VA\]

- Les résistances de ligne ne doivent pas être supérieures à ce qui permet au courant secondaire maximal de circuler avec la puissance disponible.


Formule :  résistance de ligne max. R = S / courant secondaire I^2

Exemple : transformateur 200A / 5A avec 1VA de puissance de sortie

R max. = 1VA/(5A\*5A) = 0.04 ohm

Ainsi, la résistance mesurée entre le raccordement positif et négatif du transformateur ne doit pas être supérieure à 0.04 ohm.
Elle ne doit pas non plus être trop juste, car la résistance en courant alternatif à 50 Hz est légèrement plus élevée que la résistance en courant continu.

Remarque : 

- La mesure doit être effectuée avec le transformateur retiré !
    Sinon, c'est la résistance de la bobine du transformateur qui est mesurée et non celle des conducteurs aller et retour.


Que puis-je faire si la résistance de ligne est trop élevée ?

1.  Contrôler tous les connecteurs, les resserrer et mesurer à nouveau.

2.  Augmenter la section des conducteurs (2.5mm2 est courant)

3.  Raccourcir les lignes

4.  Remplacer le transformateur par un transformateur plus performant, p. ex. 5VA


![Erreurs de mise en service du Telstar CT – Illustration 7](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/07.png)

## Comprendre le système triphasé et le compteur à transformateurs

### Introduction

L'examen suivant a pour but d'éclairer le comportement de mesure d'un compteur à transformateurs en cas de défaut. Cet examen est établi avec de simples tensions et courants sinusoïdaux, afin de ne pas compliquer inutilement le sujet. Il est toutefois important de savoir que les courants n'ont presque jamais une forme sinusoïdale et que le déphasage décrit ci-après en cas de câblage erroné présentera de légers écarts par rapport à cet examen.

### Généralités

1.  Les trois tensions et courants de phase sont décalés dans le temps les uns par rapport aux autres afin de pouvoir générer un mouvement de rotation dans un moteur.

2.  Le courant est une conséquence de la tension appliquée et est déterminé par le comportement de la charge.


Le décalage temporel mentionné ci-dessus correspond exactement à 120° sur une rotation complète de 360°.

- La phase 1 démarre à 0°

- La phase 2 démarre à 120°

- La phase 3 démarre à 240°


À 50 Hz, 360° correspond à 20 ms ou 1/fréquence = durée de période
Le décalage temporel entre les différentes phases est donc de : 20 ms/360° \* 120° = 6,666 ms

### Que fait le compteur à transformateurs ?

Un compteur à transformateurs interprète chaque tension de phase, chaque courant de phase et sa puissance de phase individuellement par rapport aux deux autres et additionne les trois puissances de phase résultantes pour obtenir une puissance totale triphasée. 

Somme P = puissance de phase 1 + puissance de phase 2 + puissance de phase 3

Si certaines d'entre elles étaient négatives (p. ex. le transformateur de courant d'une phase présente un sens de flux inversé), il en résulte une puissance plus faible que prévu.

![Erreurs de mise en service du Telstar CT – Illustration 8](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/08.png)

Vue à l'oscilloscope d'un système triphasé

### La tension de phase et le courant de phase sont correctement raccordés (U1 / I1)

Considérons ici une phase correctement raccordée. La tension L1 (U1) et le courant L1 (I1) sont mesurés (le transformateur est raccordé dans le bon sens de flux).

Les deux demi-ondes se traduisent par une puissance positive, car la tension et le courant ont le même signe dans la demi-onde correspondante.

La puissance mesurée correspond correctement à 6500 W (rouge).

![Erreurs de mise en service du Telstar CT – Illustration 9](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/09.png)

### Sens de flux du transformateur inversé sur une phase

Exemple : installation solaire

L'installation solaire produit une puissance de 30 kW --> 10 kW par phase. (Les installations solaires produisent toujours de la manière la plus équilibrée possible sur les trois phases)
Si tout est correct, ces 30 kW se lisent également sur l'appareil de mesure.

Si le transformateur de la phase 1 est dans le mauvais sens de flux, il en résulte une puissance de phase négative pour la phase 1.

Somme P = -10kW + 10kW + 10kW = 10kW

La puissance totale ne correspond plus qu'à 1/3 de la puissance attendue.

### La tension de phase et les courants de phase ont été intervertis

Remarque : si un courant de phase ou une tension de phase a été raccordé à la mauvaise entrée du compteur, ce sont toujours deux phases qui sont concernées !

La tension de phase et le courant de phase ont été intervertis (U1 / I2) et sont mesurés sur la phase 1

Considérons ici le résultat d'une mesure lorsque la tension correcte L1 (U1) est bien fournie au compteur, mais que le courant fourni est le mauvais, L2 (I2). 

Nous mélangeons donc la tension de la phase 1 avec le courant de la phase 2.

La puissance de phase devient négative. Le déphasage de 120° se traduit dans l'appareil de mesure par un déphasage mesuré de seulement 60° et est désormais affiché avec un facteur de puissance de 0,5. 

Résultat : puissance négative et réduite de moitié par rapport aux 6500 W attendus)

P = -3250W (rouge)

Remarque : il faut ici tenir compte du fait que sur un système réel, le facteur de puissance peut être supérieur ou inférieur à 0.5 (p. ex. de 0,3 à 0,7). Cela est dû au fait que le facteur de puissance sur la phase 1 se situe déjà entre 0,8 et 1 même en cas de câblage et de mesure corrects.

![Erreurs de mise en service du Telstar CT – Illustration 10](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/10.png)

La tension de phase et le courant de phase ont été intervertis (U1 / I3)

Considérons ici le résultat d'une mesure lorsque la tension correcte est bien fournie au compteur, mais que le courant fourni est le mauvais. 

Nous mélangeons la tension de la phase 1 avec le courant de la phase 3.

La puissance de phase devient négative. Le déphasage de 120° se traduit dans l'appareil de mesure par un déphasage mesuré de seulement -60° et est désormais affiché avec un facteur de puissance de 0,5. (Le facteur de puissance ne peut prendre dans l'appareil de mesure que des valeurs de 0 à 1, bien que cos (phi) = -0,5 serait maintenant correct)

Résultat : puissance négative et réduite de moitié par rapport aux 6500 W attendus)

P = -3250W (rouge)

Remarque : il faut ici tenir compte du fait que sur un système réel, le facteur de puissance peut être supérieur ou inférieur à 0.5 (p. ex. de 0,3 à 0,7). Cela est dû au fait que le facteur de puissance sur la phase 1 se situe déjà entre 0,8 et 1 même en cas de câblage et de mesure corrects.

![Erreurs de mise en service du Telstar CT – Illustration 11](/img/stoerungsbehebung-telstar-ct-inbetriebnahmefehler/11.png)
