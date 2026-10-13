---
title: 'Certifications'
slug: '/planung/zertifizierungen'
description: 'Normes générales de produits et réglementations de l''UE'
sidebar_label: 'Certifications'
---
[Anglais](/planung/zertifizierungen)

## Normes générales de produits et réglementations de l'UE

### RED - Radio Equipement Directive et EN 18031

La Radio Equipment Directive doit être respectée par tous les appareils qui disposent d'interfaces avec liaison radio et qui sont destinés à être proposés en Suisse ou dans l'UE.
Elle régit par exemple le respect des puissances de signal, des émissions perturbatrices et de l'immunité aux perturbations des modules Wi-Fi, 4G et Bluetooth. Elle porte en outre sur les fonctionnalités et les exigences de sécurité applicables à ces modules et produits.

La RED (UE) 2022/30 fait actuellement l'objet d'une extension par les articles 3.3 d, 3.3 e et 3.3 f. Ceux-ci traitent de la cybersécurité pour le réseau ainsi que de la protection contre le vol de données, la modification de données et le piratage.

Depuis le 01.08.2025, la norme EN 18031-1, -2, -3 peut être utilisée pour satisfaire à ces articles complémentaires de la RED.

smart-me AG développe tous ses produits selon la norme EN 18031.

Cela comprend par exemple les points suivants :

- Communication chiffrée et authentifiée de l'appareil jusqu'au cloud.

- Zones sécurisées et séparées du firmware pour les mesures, la communication et l'affichage.

- Inaltérabilité du firmware du matériel de mesure.

- Aucun canal de communication inutile activé par défaut.

- Utilisation de puces cryptographiques de pointe pour la génération et le stockage des clés cryptographiques.

- Résistance aux attaques externes, par exemple les attaques DDoS.


### Normes de produits en général

Les normes de produits décrivent de manière générale le cadre à respecter en matière de CEM, de sécurité et de fonctionnalité d'un produit.
Pour presque tous les produits, il existe un standard défini sur lequel on peut s'appuyer lors du développement.
Les normes ne sont toutefois pas toujours applicables avec précision à un produit donné. Il faut parfois satisfaire simultanément à plusieurs normes de produits.

Les normes de produits utilisées sont indiquées sur le certificat de conformité du produit.

## Certifications spécifiques aux compteurs

Cette section résume les règles applicables en Suisse en matière de droit de la vérification et de MID. Vous trouverez l'ordonnance ici : [Ordonnance du DFJP sur les instruments de mesure de l'énergie et de la puissance électriques (OIMepe)](https://www.fedlex.admin.ch/eli/cc/2015/578/de)

### Measuring Instruments Directive (MID) - Certification

Dans la procédure d'évaluation de la conformité, un organisme désigné vérifie si l'instrument de mesure ou sa fabrication satisfait aux exigences légales. L'évaluation de la conformité est effectuée par l'organisme désigné pour le compte du fabricant de l'instrument de mesure. Le fabricant établit ensuite pour l'instrument de mesure la déclaration de conformité attestant le respect d'une norme juridique.

Si l'instrument de mesure est soumis à la directive sur les instruments de mesure 2004/22/CE (compteurs d'électricité, de chaleur, d'eau, de froid ou de gaz), l'organisme d'évaluation de la conformité doit en outre être notifié par la Commission européenne.

Ces instruments de mesure se reconnaissent au marquage « CE » ou « CH » combiné au marquage métrologique « M ».

![Certifications – Figure 1](/img/planung-zertifizierungen/01.png)

Exemple : CE M 20 (année de vérification) 1259 (organisme de vérification)

### Certification de la courbe de charge

La certification de la courbe de charge CH-Lastgang permet à l'utilisateur d'effectuer le décompte sur la base de relevés du compteur à intervalles d'au moins 15 minutes. Cette certification exige des capacités techniques supplémentaires et porte sur la signature, le stockage des données et les canaux de transmission (sécurité, chiffrement) des données.

Le [compteur d'énergie triphasé Telstar](/produkte/telstar), le [compteur triphasé Telstar CT](/produkte/Telstar-CT) et la [borne de recharge Pico](/produkte/pico-ladestation) disposent à la fois de la certification MID et de la certification CH-Lastgang.

## Certifications dans le regroupement dans le cadre de la consommation propre (RCP)

La technologie smart-me couvre les deux variantes suivantes :

### Variante 1 : décompte RCP au moyen des relevés du compteur et d'un tarif unique ou double (MID requis)

Un RCP peut être décompté au moyen du relevé du compteur initial et du relevé du compteur final (dates de référence). Le législateur exige pour cela uniquement un instrument de mesure certifié MID. Les différences tarifaires ne sont possibles qu'avec un signal externe, en heures pleines et heures creuses ; sinon, un tarif unique peut être utilisé.

Avantages :

- L'instrument de mesure doit uniquement être certifié MID. ([Compteur d'énergie triphasé smart-me Telstar)](/produkte/telstar)

- Décompte simple des relevés du compteur aux dates de référence.

- Solution logicielle simple possible, ou même décompte manuel.


Inconvénients du tarif unique :

- Les coûts ne peuvent être répartis qu'en fonction des quantités soutirées.

- Aucune optimisation des coûts possible du côté des locataires par une utilisation réfléchie de l'électricité au bon moment.

- Aucune utilisation ciblée de l'électricité solaire par les locataires. (Efficacité moindre de la vente interne d'électricité)


Inconvénients du double tarif avec signal tarifaire externe :

- Les coûts ne peuvent être attribués qu'en fonction des quantités soutirées en tarif HP et HC au moyen d'un signal de commande externe. (Pas de tarif solaire)

- Optimisation des coûts limitée du côté des locataires par une utilisation réfléchie de l'électricité au bon moment.

- Aucune utilisation ciblée de l'électricité solaire par les locataires. (Efficacité moindre de la vente interne d'électricité)




### Variante 2 : décompte RCP au moyen de la courbe de charge et d'un système multitarif (certifications MID et CH-Lastgang requises)

Un RCP peut être décompté au moyen des données de courbe de charge (intervalles de 15 minutes). Cette variante ouvre toutes les possibilités d'un RCP, avec tous les avantages pour les locataires et les propriétaires du RCP.

Avantages :

- Permet le décompte avec différents tarifs. (HC, HP, tarif solaire)

- Répartit les coûts encourus entre les différents consommateurs qui les ont générés. (Tient également compte de la disponibilité de l'électricité solaire avec un tarif spécial)

- Les locataires peuvent optimiser eux-mêmes leurs coûts et privilégier l'électricité solaire.

- L'électricité solaire autoproduite peut être vendue plus efficacement en interne, ce qui améliore le ROI.

- Des tarifs d'électricité différenciés rendent le bien immobilier globalement plus attrayant pour les locataires.


Inconvénients :

- Nécessite des instruments de mesure certifiés MID et courbe de charge. ([Compteur d'énergie triphasé smart-me Telstar)](/produkte/telstar)

- Nécessite un logiciel performant pour stocker, analyser et exploiter les données de courbe de charge.


## Certifications pour les bornes de recharge

### Dispositions relatives au décompte des bornes de recharge en Suisse

Points de recharge dans le cadre d'un bail :

Pour le matériel de borne de recharge utilisé dans le cadre d'un bail, la Suisse exige en principe la même chose que pour le matériel de comptage usuel :

- Certification MID pour décompter l'énergie enregistrée en tarif unique.

- Certification CH-Lastgang + certification MID pour décompter l'énergie enregistrée en multitarif (tarif HP, HC, solaire).




Points de recharge dans l'espace public avec différents utilisateurs :

- En Allemagne, la situation juridique a été définie et exige la conformité à l'Eichrecht. (voir Allemagne).
    En Suisse, aucune prescription légale relative à la conformité MID n'est actuellement définie.


Remarque :
Les marquages à droite sont des symboles obligatoires qui doivent être visibles en permanence sur le matériel pour disposer de la certification MID, courbe de charge ou Eichrecht.

Marquages obligatoires sur le matériel de recharge :

Certification MID :

![Certifications – Figure 2](/img/planung-zertifizierungen/01.png)

![Certifications – Figure 3](/img/planung-zertifizierungen/03.png)



Certification CH-Lastgang :

![Certifications – Figure 4](/img/planung-zertifizierungen/04.png)

![Certifications – Figure 5](/img/planung-zertifizierungen/05.png)

### Dispositions relatives au décompte des bornes de recharge en Allemagne

Points de recharge dans le cadre d'un bail :

Pour le matériel de borne de recharge utilisé dans le cadre d'un bail, l'Allemagne exige en principe la même chose que pour le matériel de comptage usuel :

- Certification MID pour être autorisé à décompter l'énergie enregistrée.




Points de recharge dans l'espace public avec différents utilisateurs :

- En Allemagne, la conformité à l'Eichrecht est obligatoire pour les points de recharge publics. La base de l'Eichrecht est que le matériel\-compteur intégré à la borne de recharge dispose de la certification MID.


Remarque :
Les marquages à droite sont des symboles obligatoires qui doivent être visibles en permanence sur le matériel pour disposer de la certification MID, courbe de charge ou Eichrecht.

Marquages obligatoires sur le matériel de recharge :

Certification MID :

![Certifications – Figure 6](/img/planung-zertifizierungen/01.png)

![Certifications – Figure 7](/img/planung-zertifizierungen/07.png)

Eichrecht :

![Certifications – Figure 8](/img/planung-zertifizierungen/08.png)

![Certifications – Figure 9](/img/planung-zertifizierungen/09.png)

### Certification Eichrecht (Allemagne)

L'Eichrecht est une loi allemande qui régit l'exactitude et la transparence des mesures en Allemagne. Pour la recharge des véhicules électriques, cette réglementation garantit que les mesures effectuées aux bornes de recharge sont exactes et transparentes, afin de protéger les consommateurs.

Selon l'Eichrecht, les bornes de recharge électriques doivent être équipées d'un compteur d'électricité certifié et vérifié (MID).
Le compteur d'électricité mesure l'énergie consommée et détermine le montant facturé au conducteur du véhicule électrique.

Les prescriptions de l'Eichrecht régissent également d'autres aspects du décompte. Les bornes de recharge doivent afficher clairement les prix et remettre aux clients un reçu indiquant la quantité d'énergie consommée, le prix facturé et les autres détails pertinents.

Les sessions de recharge doivent pouvoir être contre-vérifiées quant à leur exactitude au moyen d'un [logiciel de transparence indépendant](/informationssicherheit/zählertransaktionen).

La loi sur la vérification régit également les questions de sécurité des données et de pertes d'énergie lors des sessions de recharge dues au câblage ou à d'autres moyens.

## Revérification des compteurs MID

Toutes les informations sont données sous réserve et conformément à l'[OIMepe 941.251](https://www.fedlex.admin.ch/eli/cc/2015/578/de) (état au 1er janvier 2018).

### Compteurs

Les compteurs doivent être revérifiés par l'Institut fédéral de métrologie (METAS) ou par un laboratoire de vérification habilité, selon la procédure prévue à l'annexe 7, chiffre 1, OIMes, comme suit :

a. compteurs à système de mesure électronique : tous les 10 ans ([Compteur d'énergie triphasé smart-me Telstar)](/produkte/telstar)

b. compteurs à système de mesure électromécanique : tous les 15 ans

### Transformateurs (capteurs de courant)

Les transformateurs doivent être revérifiés par le METAS ou par un laboratoire de vérification habilité, selon la procédure prévue à l'annexe 7, chiffre 1, OIMes, comme suit :

a. transformateurs inductifs à noyau non ouvrant : tous les 60 ans

b. transformateurs autres que ceux visés à la lettre a : tous les 2 ans.



### Prolongation de la validité d'une vérification existante

La certification est valable 10 ans, indépendamment du fabricant.

Vérification par lots (procédure de contrôle statistique)

SAK et CKW revérifient les compteurs smart-me par lots, contre rémunération. En cas d'intérêt, veuillez vous adresser directement aux responsables des laboratoires de vérification concernés. Dans la pratique, la plupart des compteurs dans les RCP ne sont pas revérifiés, mais amortis au fil des années et remplacés par de nouveaux compteurs à la fin de leur durée de vie.

Le contrôle par lots nécessite un premier contrôle par échantillonnage après 5 ans, puis périodiquement tous les 5 ans.

Si le METAS libère le lot conformément à la lettre E, chiffre 6, les compteurs du lot libéré sont considérés comme vérifiés pour 5 années supplémentaires, pour autant qu'ils restent soumis à la procédure de contrôle statistique.

### Conséquence

Si la vérification des appareils arrive à échéance et qu'une procédure de contrôle par lots n'est pas possible, les compteurs doivent être remplacés par de nouveaux appareils après 10 ans.

## Certification MINERGIE avec smart-me

La certification MINERGIE requiert un système de mesure adapté pour le monitoring exigé.

smart-me est un module certifié selon Minergie et peut être utilisé directement pour satisfaire aux exigences de monitoring.

Le système smart-me dispose également de l'interface automatisée pour la transmission des données vers la base de données Minergie pour l'extension Minergie Monitoring +.

[Plus de détails pour les partenaires](/planung/minergie)

![Certifications – Figure 10](/img/planung-zertifizierungen/10.png)
