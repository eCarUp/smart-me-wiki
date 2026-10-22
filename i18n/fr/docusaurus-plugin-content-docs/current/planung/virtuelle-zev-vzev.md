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

[28:33](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=1713s) smart-me vRCP

[30:19](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=1819s) Démonstration en direct

[35:18](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=2118s) FAQ

## Le regroupement virtuel dans le cadre de la consommation propre - vRCP

Un vRCP correspond à un regroupement dans le cadre de la consommation propre qui inclut le réseau. Contrairement au RCP (regroupement dans le cadre de la consommation propre) classique, où tous les bâtiments doivent disposer d'un seul et même raccordement au réseau, un vRCP permet de réunir plusieurs raccordements au réseau sur un seul et même transformateur basse tension (&lt; 1kV).

Outre cette exigence fondamentale, d'autres points doivent encore être clarifiés pour savoir si un vRCP peut être mis en place dans le voisinage, et avec qui.

En font partie :

- la topologie effective du réseau

- les types de raccordement (réseaux à manchons ou cabines de distribution)

### Étape 1 : clarification initiale du vRCP

Cette clarification initiale sur ces thèmes est demandée directement au gestionnaire de réseau de distribution (GRD).

Il apparaît ensuite si un vRCP est possible et, le cas échéant, avec quels participants.

Cette information doit être fournie par le GRD au plus tard après 14 jours, avec une réponse positive ou négative et sa justification.

### Étape 2 : déterminer les participants et demander le vRCP

<div className="row">
<div className="col col--7">

Dans un deuxième temps, il faut sonder l'intérêt. Vous informez les participants potentiels de la possibilité de participer au vRCP.
Cette information, ainsi que les réponses positives, doivent être consignées par écrit avec les signatures de participation.
Ces documents seront nécessaires plus tard pour l'autorisation de transmission des données, ainsi qu'en annexe des contrats et d'autres documents.

À ce stade, une inscription officielle du vRCP avec tous les intéressés doit être soumise au GRD. D'autres points concernant le vRCP sont examinés et réglés dans un délai de 3 mois.

- La puissance de production doit représenter au moins 10% de la puissance de soutirage.

- Tous les participants se trouvent-ils derrière le même point de raccordement au niveau basse tension ?

- Des compteurs intelligents (smart meters) sont-ils déjà installés sur tous les sites ou non ? (Ils doivent alors être installés ultérieurement)

- Existe-t-il d'autres équipements pour le relevé local des points de mesure et/ou une demande de transmission SDTA via Swisseldex ?

Une fois tous les points ci-dessus remplis et après environ 3 mois, le vRCP peut entrer en service.

</div>
<div className="col col--5 text--center">

![RCP virtuel (vRCP) – Illustration 1](/img/planung-virtuelle-zev-vzev/01.png)

</div>
</div>

## Paysage actuel des modèles

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

Consommateurs ordinaires :

- Consommateurs d'électricité auprès du GRD en tant que maison ou appartement dans une maison individuelle ou un immeuble collectif

</div>
<div className="col col--6 text--center">

![RCP virtuel (vRCP) – Illustration 2](/img/planung-virtuelle-zev-vzev/02.png)

</div>
</div>

## Modèles de vRCP

### vRCP bâtiment individuel (RCP à bilan virtuel)

<div className="row">
<div className="col col--6">

Un bâtiment partage un raccordement commun.

Le passage du modèle GRD au vRCP est facilement possible.

Le modèle GRD actuel est ainsi en principe simplement géré et décompté de manière privée en tant que vRCP, et il est donc indépendant des prestations du GRD.

</div>
<div className="col col--6 text--center">

![RCP virtuel (vRCP) – Illustration 3](/img/planung-virtuelle-zev-vzev/03.png)

</div>
</div>

### vRCP multi-bâtiments (vRCP étendu)

<div className="row">
<div className="col col--7">

Plusieurs RCP ou bâtiments disposant de leur propre raccordement au réseau partagent le même raccordement basse tension (&lt;1kV)

Ils peuvent désormais utiliser les lignes de liaison entre les bâtiments pour transporter le courant solaire.

L'énergie produite dans les bâtiments de gauche est ainsi également mise à disposition des immeubles collectifs de droite.

Mais pas de la maison individuelle, car celle-ci se trouve en dehors de la topologie autorisée d'un vRCP.

Les conditions de topologie permettant de participer au vRCP sont définies plus en détail ci-dessous.

</div>
<div className="col col--5 text--center">

![RCP virtuel (vRCP) – Illustration 4](/img/planung-virtuelle-zev-vzev/04.png)

</div>
</div>

### Topologies de réseau permettant de créer un vRCP étendu

<div className="row">
<div className="col col--6">

Même jeu de barres ou même coffret de distribution au niveau basse tension (&lt; 1kV)

Tous les bâtiments sont raccordés au même coffret de distribution ou au même jeu de barres au niveau basse tension NE7.

</div>
<div className="col col--6 text--center">

![RCP virtuel (vRCP) – Illustration 5](/img/planung-virtuelle-zev-vzev/05.png)

</div>
</div>

<div className="row">
<div className="col col--6">

Même jeu de barres côté basse tension du transformateur de réseau (&lt;1kV)

Tous les bâtiments sont raccordés au même transformateur et, au niveau basse tension, au même jeu de barres.

</div>
<div className="col col--6 text--center">

![RCP virtuel (vRCP) – Illustration 6](/img/planung-virtuelle-zev-vzev/06.png)

</div>
</div>

<div className="row">
<div className="col col--6">

Réseaux à manchons
Un vRCP étendu sur plusieurs bâtiments n'est possible que si les bâtiments partagent le même manchon
(cas très rare)

La création d'un vRCP pour un bâtiment individuel est toutefois toujours possible.

</div>
<div className="col col--6 text--center">

![RCP virtuel (vRCP) – Illustration 7](/img/planung-virtuelle-zev-vzev/07.png)

</div>
</div>

## Membres possibles d'un vRCP et technique de mesure nécessaire

Dans un vRCP, différentes infrastructures du gestionnaire de réseau de distribution (GRD) et du domaine privé peuvent se rencontrer. La mesure des différents bâtiments peut être assurée de différentes manières et s'intègre dans le vRCP en un modèle tarifaire uniforme.

- Ancien modèle pratique (GRD)

- RCP avec mesures privées (compteur de bilan du GRD)

- Maisons individuelles avec production solaire

- Appartements et maisons individuels sans production solaire, avec mesures privées ou mesures du GRD.

![RCP virtuel (vRCP) – Illustration 8](/img/planung-virtuelle-zev-vzev/08.png)

## Infrastructure de compteurs pour le modèle de tarification vRCP de smart-me

La tarification d'un vRCP repose sur l'égalité des participants. Tous les participants ont le même droit à la puissance solaire produite à l'instant.

Pour que la tarification des différents modèles fonctionne ensemble, des compteurs sélectionnés sont nécessaires afin de les enregistrer comme référence dans notre tarif.

L'image ci-dessous indique tous les points de mesure pertinents nécessaires pour un bilan et une tarification corrects pour chaque infrastructure.

![RCP virtuel (vRCP) – Illustration 9](/img/planung-virtuelle-zev-vzev/09.png)

### Ex-modèle pratique (ancien modèle GRD privatisé en vRCP)

Dans ce modèle, il n'existe aucun point de mesure servant de compteur de bilan, ni du fournisseur d'énergie, ni privé. Ce RCP fait donc l'objet d'un bilan virtuel.
Cela nécessite la mesure de tous les producteurs et de tous les consommateurs. Le modèle fonctionne pour un bâtiment individuel, mais aussi dans le cadre d'un vRCP étendu.

### RCP privé (avec compteur de bilan)

Dans ce modèle, il existe au moins un point de mesure du fournisseur d'énergie au point de raccordement principal du RCP. Les données de ce point de mesure peuvent être importées dans smart-me soit via une sous-mesure privée, soit via le datahub du fournisseur d'énergie.

La sous-mesure privée permet une commande efficace en temps réel du RCP, ce que le compteur du fournisseur d'énergie ne permet que de manière limitée.

[En savoir plus sur le schéma de mesure des RCP privés](/planung/zev-zusammenschluss-zum-eigenverbrauch)

### Maison avec production solaire (maison individuelle)

Dans ce modèle, il existe au moins un point de mesure du fournisseur d'énergie au point de raccordement principal et, en partie, également une mesure de la production.
La tarification d'une maison mitoyenne est possible sans compteur de production solaire. Idéalement, la production solaire de la maison mitoyenne est toutefois aussi mesurée, soit par le GRD, soit de manière privée.
Ces données peuvent être collectées par une mesure privée au moyen d'un smart-me Telstar ou par un import depuis le datahub via Swisseldex.

### Maison ou appartement sans production solaire (maison individuelle)

Dans ce modèle, il existe au moins un point de mesure du fournisseur d'énergie au raccordement de la maison. Les données de ces consommateurs peuvent être collectées par un import depuis le datahub via Swisseldex.

Un immeuble collectif sans installation solaire mais avec des mesures privées suit l'infrastructure de mesure du RCP sans production.

[Détails sur la configuration des tarifs vRCP](/konfiguration/billing/stromtarife-definieren)

## Planifiez dès maintenant votre projet avec notre configurateur

Sur la base de vos indications, le Projektkonfigurator établit la liste de matériel avec tous les produits smart-me, le nombre de points de mesure et un schéma visuel pour vérification.

Idéal pour les planificateurs et les professionnels de l'électricité.

[Projektkonfigurator](/planung/projektkonfigurator)

## Import des données de mesure pour les points de mesure des fournisseurs d'énergie

Les données de mesure des points de mesure pertinents peuvent être importées via le datahub de Swisseldex.
smart-me est répertorié chez Swisseldex en tant que destinataire de ces données

Sur demande et après autorisation, les fournisseurs d'énergie envoient les données via Swisseldex au datahub d'import de smart-me. Les données peuvent ensuite être gérées, visualisées et décomptées dans le compte smart-me correspondant.

Caractéristiques des données des fournisseurs d'énergie :

- Format de données EBIX, SDAT

- Résolution de 15 minutes

- Mise à disposition env. toutes les 24h, non vérifiées

- Mise à disposition env. tous les 30 jours, vérifiées

Vous trouverez ici une notice détaillée sur l'import des données : [Détails sur l'import Swisseldex](/schnittstellen/swisseldex-sdat-import)

![RCP virtuel (vRCP) – Illustration 10](/img/planung-virtuelle-zev-vzev/10.png)

## FAQ

<details id="kann-ein-vzev-in-einem-muffennetz-entstehen">
<summary>Un vRCP peut-il être créé dans un réseau à manchons ?</summary>

Oui, c'est possible, mais les conditions requises ne sont que très rarement remplies.

Pour qu'un vRCP puisse être créé dans un réseau à manchons, tous les bâtiments doivent partager exactement le même manchon. Sinon, le réseau public entre deux manchons est inclus, ce qui ne correspond plus à la réglementation du vRCP.

</details>

<details id="kann-ein-gebäude-ohne-solaranlage-einem-vzev-beitreten-und-die-vnb-zähler-durch-privatzähler-ersetzen">
<summary>Un bâtiment sans installation solaire peut-il rejoindre un vRCP et remplacer les compteurs du GRD par des compteurs privés ?</summary>

Oui, pour les mesures internes de production et de consommation du bâtiment.
Au sein du vRCP constitué, l'exploitant du vRCP est lui-même responsable de la mesure et du décompte. Cela implique donc aussi que l'exploitant du vRCP peut utiliser l'instrument de mesure de son choix pour l'ensemble du vRCP.

Le gestionnaire de réseau de distribution (GRD) a toutefois naturellement besoin, lui aussi, de points de mesure pour la contre-mesure et le bilan du vRCP. Il doit les installer en conséquence.

Si un immeuble collectif sans installation solaire souhaite rejoindre le vRCP, un compteur privé peut être installé pour chaque unité de décompte. Le GRD doit alors toutefois installer un point de mesure au raccordement du bâtiment.

</details>

<details id="ist-eine-verschachtelung-von-mehreren-zev-in-einer-vzev-möglich">
<summary>Est-il possible d'imbriquer plusieurs RCP dans un vRCP ?</summary>

Oui et non.

Il est possible de constituer un vRCP à partir de deux RCP existants sur le même raccordement au transformateur.
Il n'est en revanche pas possible que les deux RCP continuent d'exister individuellement sur le plan juridique.
Sur le plan juridique, ces deux RCP deviennent un seul (v)RCP.

Les deux RCP sont donc dissous juridiquement et remplacés par un (v)RCP.

</details>

<details id="kann-die-interne-tarifierung-und-der-strompreis-des-zev-oder-vzevs-frei-gewählt-werden">
<summary>La tarification interne et le prix de l'électricité du RCP ou du vRCP peuvent-ils être choisis librement ?</summary>

Oui et non.

La réglementation est exactement la même que pour le RCP.

La structure tarifaire au sein d'un RCP ou d'un vRCP peut être réglée de manière autonome, selon le droit privé, et différer de l'offre du gestionnaire de réseau de distribution (GRD).
Les bases juridiques du RCP en matière de fixation des prix continuent toutefois de s'appliquer.

Exemple :
Si l'électricité du réseau est réglée par un tarif unique avec tarif de puissance, il est possible de décider, au sein du RCP ou du vRCP, de ne proposer qu'un tarif unique ou un double tarif.
Il faut en revanche garantir que, quelle que soit la tarification choisie, les recettes ne dépassent pas ce que l'électricité du réseau a effectivement coûté.

L'électricité solaire interne doit également suivre les règles et, selon la règle appliquée, ne doit pas coûter plus de 80% à 100% max. de l'électricité du réseau équivalente.

</details>
