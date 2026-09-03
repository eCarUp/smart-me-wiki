---
title: 'RCP virtuel (vRCP)'
slug: '/planung/virtuelle-zev-vzev'
description: '0:00 Introduction webinaire vRCP'
sidebar_label: 'RCP virtuel (vRCP)'
---
<Video src="cTF9C7b3QwU" title="Video" />

[0:00](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=0s) Introduction webinaire vRCP

[03:47](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=227s) Infrastructure de mesure utilisable pour un vRCP

[16:00](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=960s) Modèles d'autoconsommation

[28:33](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=1713s) smart-me vRCP

[30:19](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=1819s) Démonstration en direct

[35:18](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=2118s) FAQ 

## Le regroupement virtuel dans le cadre de la consommation propre - vRCP

Un vRCP correspond à un regroupement dans le cadre de la consommation propre qui inclut le réseau. Contrairement au RCP classique, où tous les bâtiments doivent posséder un seul et même raccordement au réseau, un vRCP permet de réunir plusieurs raccordements au réseau situés sur un seul et même transformateur basse tension (&lt; 1kV).

Outre cette exigence fondamentale, d'autres points doivent encore être clarifiés pour savoir si et avec qui un vRCP est possible dans le voisinage.

Il s'agit notamment de :

- la topologie effective du réseau

- les types de liaison (réseaux à manchons ou armoires de distribution)


### Étape 1 : clarification initiale du vRCP

Cette clarification initiale sur ces thèmes est demandée directement auprès du gestionnaire de réseau de distribution (GRD).

On sait ensuite si un vRCP est possible et, si oui, avec quels participants.

Cette information doit parvenir du GRD au plus tard après 14 jours, sous la forme d'une réponse positive ou négative accompagnée d'une justification.

### Étape 2 : déterminer les participants et demander le vRCP

Dans un deuxième temps, il faut évaluer les intérêts. Vous informez les participants potentiels de la possibilité de participer au vRCP.
Cette information, ainsi que les réponses positives, doivent être consignées par écrit avec les signatures d'adhésion.
Elles seront nécessaires par la suite pour l'autorisation de transmission des données, mais aussi comme annexe aux contrats et autres documents.

À ce stade, une inscription officielle du vRCP avec tous les intéressés doit être présentée au GRD. Dans un délai de 3 mois, d'autres points relatifs au vRCP sont vérifiés et réglés.

- La puissance de production doit représenter au moins 10% de la puissance de soutirage.

- Tous les participants se trouvent-ils derrière le même point de raccordement au niveau de la basse tension ?

- Des smart meters sont-ils déjà installés sur tous les sites ou non ? (Ils devront alors être rééquipés)

- Y a-t-il d'autres composants matériels disponibles pour la lecture locale des points de mesure et/ou une demande de transmission SDTA via Swisseldex ?


Une fois tous les points ci-dessus remplis et après environ 3 mois, le vRCP peut entrer en service.

![RCP virtuel (vRCP) – Illustration 1](/img/planung-virtuelle-zev-vzev/01.png)

## Paysage des modèles jusqu'à présent

RCP : regroupement dans le cadre de la consommation propre 

- Mesure privée

- Décompte privé

- Compteur du GRD au point d'injection avec facture du GRD


Modèle GRD :

- Mesure par le GRD

- Décompte et tarification par le GRD

- Bilan sur les compteurs de consommation et de production solaire


Consommateur ordinaire :

- Consommateur d'électricité auprès du GRD en tant que maison ou appartement dans une maison individuelle ou un immeuble collectif


![RCP virtuel (vRCP) – Illustration 2](/img/planung-virtuelle-zev-vzev/02.png)

## Modèles de vRCP

### vRCP bâtiment isolé (RCP à bilan virtuel)

Un bâtiment partage un raccordement d'immeuble commun.



Le passage du modèle GRD au vRCP est facilement possible.

Le modèle GRD existant est ainsi en principe simplement géré et décompté en privé comme vRCP et se trouve dès lors détaché des prestations du GRD.

![RCP virtuel (vRCP) – Illustration 3](/img/planung-virtuelle-zev-vzev/03.png)

### vRCP multi-bâtiments (vRCP étendu)

Plusieurs RCP ou bâtiments disposant de leur propre raccordement au réseau partagent le même raccordement basse tension (&lt;1kV)

Ceux-ci sont désormais autorisés à utiliser les lignes de liaison entre les bâtiments pour transporter l'électricité solaire.

L'énergie produite dans les bâtiments de gauche est ainsi également mise à disposition des immeubles collectifs de droite.

Mais pas de la maison individuelle, car celle-ci se trouve en dehors de la topologie autorisée d'un vRCP.


Les conditions de topologie permettant une participation légitime au vRCP sont définies plus en détail ci-dessous.

![RCP virtuel (vRCP) – Illustration 4](/img/planung-virtuelle-zev-vzev/04.png)

### Topologies de réseau pour la création d'un vRCP étendu

Même jeu de barres ou même armoire de distribution au niveau de la basse tension (&lt; 1kV)

Tous les bâtiments sont raccordés à la même armoire de distribution ou au même jeu de barres au niveau de tension NE7.

![RCP virtuel (vRCP) – Illustration 5](/img/planung-virtuelle-zev-vzev/05.png)

Même jeu de barres côté basse tension au transformateur de réseau (&lt;1kV)

Tous les bâtiments sont raccordés au même transformateur et sont raccordés au même jeu de barres du côté basse tension.

![RCP virtuel (vRCP) – Illustration 6](/img/planung-virtuelle-zev-vzev/06.png)

Réseaux à manchons
Un vRCP étendu sur plusieurs bâtiments n'est possible que si les bâtiments partagent le même manchon
(très rarement le cas)

La constitution d'un vRCP pour un bâtiment isolé est en revanche toujours possible.

![RCP virtuel (vRCP) – Illustration 7](/img/planung-virtuelle-zev-vzev/07.png)

## Membres possibles d'un vRCP et technique de mesure nécessaire

Dans un vRCP, différentes infrastructures du gestionnaire de réseau de distribution et du domaine privé peuvent se rencontrer. La mesure des différents bâtiments peut être assurée de manière différente et s'intègre au sein du vRCP dans un modèle tarifaire unifié.

- Ancien modèle pratique (GRD)

- RCP avec mesures privées (compteur de bilan du GRD)

- Maisons individuelles avec production solaire

- Appartements et maisons isolés sans production solaire, avec mesures privées ou mesures du GRD.



![RCP virtuel (vRCP) – Illustration 8](/img/planung-virtuelle-zev-vzev/08.png)

## Infrastructure de comptage pour le modèle de tarification vRCP de smart-me

La tarification d'un vRCP se fonde sur l'égalité de traitement des participants. Tous les participants ont un droit égal à la puissance solaire produite à un instant donné.

Pour que la tarification des différents modèles fonctionne ensemble, il faut des unités de comptage sélectionnées afin de les enregistrer comme référence dans notre tarif.

L'image suivante indique tous les points de mesure pertinents nécessaires au bilan et à la tarification corrects par infrastructure.

![RCP virtuel (vRCP) – Illustration 9](/img/planung-virtuelle-zev-vzev/09.png)

### Ex-modèle pratique (ancien modèle GRD privatisé devenu vRCP)

Dans ce modèle, il n'existe aucun point de mesure servant de compteur de bilan, ni du fournisseur d'électricité, ni privé. C'est pourquoi le bilan de ce RCP est établi virtuellement.
Cela nécessite la mesure de tous les producteurs et de tous les consommateurs. Le modèle fonctionne pour un bâtiment isolé, mais aussi comme partie d'un vRCP étendu.

### RCP privé (avec compteur de bilan)

Dans ce modèle, il existe au moins un point de mesure du fournisseur d'électricité au point de raccordement principal du RCP. Les données de ce point de mesure peuvent être importées dans smart-me soit via une sous-mesure privée, soit via le hub de données du fournisseur d'électricité.

La sous-mesure privée permet un pilotage en temps réel efficace du RCP, ce qui n'est possible que de manière limitée avec le compteur du fournisseur d'électricité.

[En savoir plus sur le schéma de mesure des RCP privés](/planung/zev-zusammenschluss-zum-eigenverbrauch)

### Maison avec production solaire (maison individuelle)

Dans ce modèle, il existe au moins un point de mesure du fournisseur d'électricité au point de raccordement principal et, en partie, également une mesure de la production.
La tarification d'une maison mitoyenne est possible sans compteur de production solaire. Idéalement, la production solaire de la maison mitoyenne est toutefois également mesurée, soit par le GRD, soit en privé.
Ces données peuvent être relevées par une mesure au moyen d'un smart-me Telstar comme mesure privée ou par un import depuis le hub de données via Swisseldex.

### Maison ou appartement sans production solaire (maison individuelle)

Dans ce modèle, il existe au moins un point de mesure du fournisseur d'électricité au raccordement d'immeuble. Les données de ces consommateurs peuvent être relevées par un import depuis le hub de données via Swisseldex.

Un immeuble collectif sans installation solaire mais avec des mesures privées suit l'infrastructure de mesure du RCP sans production.

[Détails sur la configuration des tarifs vRCP](/konfiguration/billing/stromtarife-definieren)

## Planifie maintenant ton projet avec notre configurateur

Le Projekt Konfigurator établit, sur la base de tes indications, la liste des pièces composée de tous les produits smart-me, le nombre de points de mesure et un schéma visuel de contrôle.

Idéal pour les planificateurs et les professionnels de l'électricité.

[Projektkonfigurator](/planung/Projektkonfigurator)

## Import des données de mesure pour les points de comptage des fournisseurs d'électricité

Les données de mesure des points de mesure pertinents peuvent être importées via le hub de données de Swisseldex.
Smart-me est répertorié auprès de Swisseldex comme destinataire de ces données 

Les données sont envoyées par les fournisseurs d'électricité, après demande et autorisation, via Swisseldex au hub d'import de données de smart-me. Les données peuvent ensuite être gérées, visualisées et décomptées dans le compte smart-me correspondant.


Caractéristiques des données des fournisseurs d'électricité :

- Format de données EBIX, SDAT

- Résolution de 15 minutes

- Mise à disposition environ toutes les 24h, non vérifiée

- Mise à disposition environ tous les 30 jours, vérifiée


Tu trouveras ici un guide détaillé sur l'import des données : [Détails sur l'import Swisseldex](/schnittstellen/swisseldex-sdat-import)

![RCP virtuel (vRCP) – Illustration 10](/img/planung-virtuelle-zev-vzev/10.png)

## FAQ

## Un vRCP peut-il être créé dans un réseau à manchons ?

Oui, c'est possible, mais les conditions requises ne sont que très rarement remplies.

Pour qu'un vRCP puisse être créé dans un réseau à manchons, tous les bâtiments doivent partager exactement le même manchon. Sinon, le réseau public entre deux manchons est intégré, ce qui ne correspond plus à la réglementation du vRCP.

## Un bâtiment sans installation solaire peut-il rejoindre un vRCP et remplacer les compteurs du GRD par des compteurs privés ?

Oui, pour les mesures de production et de consommation internes au bâtiment.
Au sein du vRCP constitué, l'exploitant du vRCP est responsable de manière autonome de la mesure et du décompte. Cela implique donc également que l'exploitant du vRCP peut utiliser le moyen de mesure de son choix pour l'ensemble du vRCP.

Le gestionnaire de réseau de distribution a toutefois naturellement besoin lui aussi de points de mesure pour la contre-mesure et le bilan du vRCP. Il doit les poser en conséquence.

Si un immeuble collectif sans installation solaire souhaite désormais rejoindre le vRCP, un compteur privé peut être installé pour chacune des unités de décompte. Le gestionnaire de réseau de distribution doit alors poser un point de mesure au raccordement d'immeuble.

## L'imbrication de plusieurs RCP dans un vRCP est-elle possible ?

Oui et non.

Il est possible de constituer un vRCP à partir de deux RCP existants sur le même raccordement de transformateur.
Il n'est toutefois pas possible que les deux RCP continuent d'exister juridiquement de manière individuelle.
Juridiquement, ces deux RCP deviennent un seul (v)RCP.

Les deux RCP sont donc dissous juridiquement et remplacés par un (v)RCP.

## La tarification interne et le prix de l'électricité du RCP ou du vRCP peuvent-ils être choisis librement ?

Oui et non.

La réglementation est exactement la même que pour le RCP.

La structure tarifaire au sein d'un RCP ou d'un vRCP peut être réglée en droit privé de manière autonome et différente de l'offre du gestionnaire de réseau de distribution.
Les bases légales du RCP en matière de fixation des prix restent toutefois applicables.

Exemple :
Si l'électricité du réseau est réglée comme tarif unique avec tarif de puissance, il peut également être décidé, au sein du RCP ou du vRCP, de proposer uniquement un tarif unique ou un tarif double.
Il faut en revanche s'assurer que, indépendamment de la tarification choisie, les recettes ne dépassent pas ce que l'électricité du réseau a effectivement coûté.

L'électricité solaire interne doit également suivre les règles et, selon la règle appliquée, ne doit pas coûter plus de 80% à 100% au maximum de l'électricité du réseau équivalente.
