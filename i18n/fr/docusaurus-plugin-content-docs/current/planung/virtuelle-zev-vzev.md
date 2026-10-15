---
title: 'RCP virtuel (vRCP)'
slug: '/planung/virtuelle-zev-vzev'
description: '0:00 Introduction au webinaire vRCP'
sidebar_label: 'RCP virtuel (vRCP)'
---
<Video src="cTF9C7b3QwU" title="Vidéo YouTube, enregistrement du webinaire «Mettre en œuvre un RCP virtuel (vRCP) avec smart-me»" />

[0:00](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=0s) Introduction au webinaire vRCP

[03:47](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=227s) Infrastructure de mesure utilisable pour le vRCP

[16:00](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=960s) Modèles d'autoconsommation

[28:33](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=1713s) vRCP smart-me

[30:19](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=1819s) Démonstration en direct

[35:18](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=2118s) FAQ 

## Le regroupement virtuel dans le cadre de la consommation propre - vRCP

Un RCP virtuel (vRCP) correspond à un regroupement dans le cadre de la consommation propre qui inclut le réseau. Contrairement au RCP (regroupement dans le cadre de la consommation propre) classique, où tous les bâtiments doivent disposer d'un seul et même raccordement au réseau, un vRCP permet de réunir plusieurs raccordements au réseau situés sur un seul et même transformateur basse tension (&lt; 1kV).

Outre cette exigence fondamentale, d'autres points doivent être clarifiés pour savoir si un vRCP peut être mis en place dans le voisinage, et avec qui.

En font partie :

- la topologie effective du réseau

- les types de connexion (réseaux à manchons ou cabines de distribution)

### Étape 1 : clarification initiale du vRCP

Cette clarification initiale de ces questions est demandée directement auprès du gestionnaire de réseau de distribution (GRD).

Il apparaît ensuite si un vRCP est possible et, si oui, avec quels participants.

Le GRD doit fournir cette information, avec une réponse positive ou négative motivée, au plus tard après 14 jours.

### Étape 2 : déterminer les participants et demander le vRCP

<div className="row">
<div className="col col--7">

Dans un deuxième temps, il faut évaluer l'intérêt. Vous informez les participants potentiels de la possibilité de participer au vRCP.
Cette information ainsi que les réponses positives doivent être consignées par écrit, avec les signatures de participation.
Elles seront nécessaires plus tard pour l'autorisation de transmission des données, ainsi qu'en annexe aux contrats et autres documents.

À ce stade, une inscription officielle du vRCP avec tous les intéressés doit être soumise au GRD. D'autres points concernant le vRCP sont vérifiés et réglés dans un délai de 3 mois.

- La puissance de production doit atteindre au moins 10% de la puissance de soutirage.

- Tous les participants se trouvent-ils derrière le même point de raccordement au niveau basse tension ?

- Des smart meters sont-ils déjà installés sur tous les sites ou non ? (Ils doivent alors être installés ultérieurement)

- Du matériel supplémentaire est-il disponible pour la lecture locale des points de comptage et/ou une demande de transmission SDTA via Swisseldex a-t-elle été faite ?

Une fois tous les points ci-dessus remplis et après environ 3 mois, le vRCP peut entrer en service.

</div>
<div className="col col--5 text--center">

![RCP virtuel (vRCP) – Illustration 1](/img/planung-virtuelle-zev-vzev/01.png)

</div>
</div>

## Paysage des modèles existants

<div className="row">
<div className="col col--6">

RCP : regroupement dans le cadre de la consommation propre 

- Mesure privée

- Décompte privé

- Compteur du GRD au point d'injection avec facture du GRD

Modèle GRD :

- Mesure par le GRD

- Décompte et tarification par le GRD

- Bilan sur les compteurs de consommation et de production solaire

Consommateurs normaux :

- Consommateurs d'électricité auprès du GRD, en tant que maison ou appartement dans une maison individuelle ou un immeuble collectif

</div>
<div className="col col--6 text--center">

![RCP virtuel (vRCP) – Illustration 2](/img/planung-virtuelle-zev-vzev/02.png)

</div>
</div>

## Modèles de vRCP

### vRCP bâtiment unique (RCP à bilan virtuel)

<div className="row">
<div className="col col--6">

Un bâtiment partage un raccordement d'immeuble commun.

Le passage du modèle GRD au vRCP est facilement possible.

Le modèle GRD existant est ainsi en principe simplement géré et décompté de manière privée en tant que vRCP, et donc détaché des prestations du GRD.

</div>
<div className="col col--6 text--center">

![RCP virtuel (vRCP) – Illustration 3](/img/planung-virtuelle-zev-vzev/03.png)

</div>
</div>

### vRCP multi-bâtiments (vRCP étendu)

<div className="row">
<div className="col col--7">

Plusieurs RCP ou bâtiments disposant de leur propre raccordement au réseau partagent le même raccordement basse tension (&lt;1kV)

Ils peuvent désormais utiliser les lignes de liaison entre les bâtiments pour transporter l'électricité solaire.

L'énergie produite dans les bâtiments de gauche est ainsi également mise à la disposition des immeubles collectifs de droite.

Mais pas à la maison individuelle, car celle-ci se trouve en dehors de la topologie autorisée d'un vRCP.

Les conditions de topologie pour une participation légitime au vRCP sont définies plus en détail ci-dessous.

</div>
<div className="col col--5 text--center">

![RCP virtuel (vRCP) – Illustration 4](/img/planung-virtuelle-zev-vzev/04.png)

</div>
</div>

### Topologies de réseau pour la création d'un vRCP étendu

<div className="row">
<div className="col col--6">

Même jeu de barres ou même coffret de distribution au niveau basse tension (&lt; 1kV)

Tous les bâtiments sont raccordés au même coffret de distribution ou au même jeu de barres au niveau basse tension NR7.

</div>
<div className="col col--6 text--center">

![RCP virtuel (vRCP) – Illustration 5](/img/planung-virtuelle-zev-vzev/05.png)

</div>
</div>

<div className="row">
<div className="col col--6">

Même jeu de barres côté basse tension du transformateur de réseau (&lt;1kV)

Tous les bâtiments sont raccordés au même transformateur et au même jeu de barres au niveau basse tension.

</div>
<div className="col col--6 text--center">

![RCP virtuel (vRCP) – Illustration 6](/img/planung-virtuelle-zev-vzev/06.png)

</div>
</div>

<div className="row">
<div className="col col--6">

Réseaux à manchons
Un vRCP étendu sur plusieurs bâtiments n'est possible que si les bâtiments partagent le même manchon
(très rarement le cas)

La constitution d'un vRCP pour un bâtiment unique est toutefois toujours possible.

</div>
<div className="col col--6 text--center">

![RCP virtuel (vRCP) – Illustration 7](/img/planung-virtuelle-zev-vzev/07.png)

</div>
</div>

## Membres possibles d'un vRCP et technique de mesure nécessaire

Dans un vRCP, différentes infrastructures du gestionnaire de réseau de distribution (GRD) et du domaine privé peuvent se rencontrer. La mesure des différents bâtiments peut être fournie de différentes manières et s'intègre dans le vRCP en un modèle tarifaire uniforme.

- Ancien modèle pratique (GRD)

- RCP avec mesures privées (compteur de bilan du GRD)

- Maisons individuelles avec production solaire

- Appartements et maisons individuels sans production solaire, avec mesures privées ou mesures du GRD.

![RCP virtuel (vRCP) – Illustration 8](/img/planung-virtuelle-zev-vzev/08.png)

## Infrastructure de comptage pour le modèle de tarification vRCP de smart-me

La tarification d'un vRCP repose sur l'égalité des participants. Tous les participants ont le même droit à la puissance solaire actuellement produite.

Pour que la tarification conjointe des différents modèles fonctionne, des unités de comptage sélectionnées sont nécessaires afin de les enregistrer comme référence dans notre tarif.

L'image ci-dessous indique tous les points de mesure pertinents nécessaires pour un bilan et une tarification corrects par infrastructure.

![RCP virtuel (vRCP) – Illustration 9](/img/planung-virtuelle-zev-vzev/09.png)

### Ex-modèle pratique (ancien modèle GRD privatisé en vRCP)

Dans ce modèle, il n'existe aucun point de mesure servant de compteur de bilan, ni du fournisseur d'électricité, ni privé. Ce RCP fait donc l'objet d'un bilan virtuel.
Cela nécessite la mesure de tous les producteurs et de tous les consommateurs. Le modèle fonctionne pour un bâtiment unique, mais aussi comme partie d'un vRCP étendu.

### RCP privé (avec compteur de bilan)

Dans ce modèle, il existe au moins un point de mesure du fournisseur d'électricité au point de raccordement principal du RCP. Les données de ce point de mesure peuvent être importées dans smart-me soit via une sous-mesure privée, soit via le datahub du fournisseur d'électricité.

La sous-mesure privée permet une commande efficace en temps réel du RCP, ce qui n'est que partiellement possible avec le compteur du fournisseur d'électricité.

[En savoir plus sur le schéma de mesure des RCP privés](/planung/zev-zusammenschluss-zum-eigenverbrauch)

### Maison avec production solaire (maison individuelle)

Dans ce modèle, il existe au moins un point de mesure du fournisseur d'électricité au point de raccordement principal et, dans certains cas, également une mesure de la production.
La tarification d'une maison mitoyenne est possible sans compteur de production solaire. Idéalement, la production solaire de la maison mitoyenne est toutefois également mesurée, soit par le GRD, soit de manière privée.
Ces données peuvent être relevées par une mesure privée au moyen d'un smart-me Telstar ou par un import depuis le datahub via Swisseldex.

### Maison ou appartement sans production solaire (maison individuelle)

Dans ce modèle, il existe au moins un point de mesure du fournisseur d'électricité au raccordement d'immeuble. Les données de ces consommateurs peuvent être relevées par un import depuis le datahub via Swisseldex.

Un immeuble collectif sans installation solaire mais avec des mesures privées suit l'infrastructure de mesure du RCP sans production.

[Détails sur la configuration des tarifs vRCP](/konfiguration/billing/stromtarife-definieren)

## Planifiez dès maintenant votre projet avec notre configurateur

Le Projektkonfigurator établit pour vous, sur la base de vos indications, la liste de matériel de tous les produits smart-me, le nombre de points de mesure et un schéma visuel pour vérification.

Idéal pour les planificateurs et les électriciens.

[Projektkonfigurator](/planung/Projektkonfigurator)

## Import des données de mesure pour les points de comptage des fournisseurs d'électricité

Les données de mesure des points de mesure pertinents peuvent être importées via le datahub de Swisseldex.
smart-me est répertorié chez Swisseldex comme destinataire de ces données 

Après demande et autorisation, les fournisseurs d'électricité envoient les données via Swisseldex au datahub d'import de smart-me. Les données peuvent ensuite être gérées, visualisées et décomptées dans le compte smart-me correspondant.

Caractéristiques des données des fournisseurs d'électricité :

- Format de données EBIX, SDAT

- Résolution de 15 minutes

- Mise à disposition env. toutes les 24h, non vérifiées

- Mise à disposition env. tous les 30 jours, vérifiées

Vous trouverez ici des instructions détaillées sur l'import des données : [Détails sur l'import Swisseldex](/schnittstellen/swisseldex-sdat-import)

![RCP virtuel (vRCP) – Illustration 10](/img/planung-virtuelle-zev-vzev/10.png)

## FAQ

<details id="kann-ein-vzev-in-einem-muffennetz-entstehen">
<summary>Un vRCP peut-il être constitué dans un réseau à manchons ?</summary>

Oui, c'est possible, mais les conditions requises ne sont que très rarement remplies.

Pour qu'un vRCP puisse être constitué dans un réseau à manchons, tous les bâtiments doivent partager exactement le même manchon. Sinon, le réseau public entre deux manchons est inclus, ce qui ne correspond plus à la réglementation du vRCP.

</details>

<details id="kann-ein-gebäude-ohne-solaranlage-einem-vzev-beitreten-und-die-vnb-zähler-durch-privatzähler-ersetzen">
<summary>Un bâtiment sans installation solaire peut-il adhérer à un vRCP et remplacer les compteurs du GRD par des compteurs privés ?</summary>

Oui, pour les mesures internes de production et de consommation du bâtiment.
Au sein du vRCP constitué, l'exploitant du vRCP est lui-même responsable de la mesure et du décompte. Cela implique donc également que l'exploitant du vRCP peut utiliser l'instrument de mesure de son choix pour l'ensemble du vRCP.

Le gestionnaire de réseau de distribution (GRD) a bien entendu lui-même aussi besoin de points de mesure pour la contre-mesure et le bilan du vRCP. Il doit les installer en conséquence.

Si un immeuble collectif sans installation solaire souhaite rejoindre le vRCP, un compteur privé peut être installé pour chaque unité de décompte. Le GRD doit alors toutefois installer un point de mesure au raccordement d'immeuble.

</details>

<details id="ist-eine-verschachtelung-von-mehreren-zev-in-einer-vzev-möglich">
<summary>Est-il possible d'imbriquer plusieurs RCP dans un vRCP ?</summary>

Oui et non.

Il est possible de constituer un vRCP à partir de deux RCP existants raccordés au même transformateur.
Il n'est toutefois pas possible que les deux RCP continuent d'exister individuellement sur le plan juridique.
Sur le plan juridique, ces deux RCP deviennent un seul (v)RCP.

Les deux RCP sont donc dissous juridiquement et remplacés par un (v)RCP.

</details>

<details id="kann-die-interne-tarifierung-und-der-strompreis-des-zev-oder-vzevs-frei-gewählt-werden">
<summary>La tarification interne et le prix de l'électricité du RCP ou du vRCP peuvent-ils être choisis librement ?</summary>

Oui et non.

La réglementation est exactement la même que pour le RCP.

La structure tarifaire au sein d'un RCP ou d'un vRCP peut être réglée de manière autonome en droit privé et différer de l'offre du gestionnaire de réseau de distribution (GRD).
Les bases légales du RCP en matière de fixation des prix continuent toutefois de s'appliquer.

Exemple :
Si l'électricité du réseau est réglée sous forme de tarif unique avec tarif de puissance, il est également possible de décider, au sein du RCP ou du vRCP, de ne proposer qu'un tarif unique ou un tarif double.
En revanche, il faut garantir que, quelle que soit la tarification choisie, les recettes ne dépassent pas le coût effectif de l'électricité du réseau.

L'électricité solaire interne doit également suivre les règles et ne doit pas coûter, selon la règle appliquée, plus de 80% à max. 100% de l'électricité du réseau équivalente.

</details>
