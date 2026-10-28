---
title: 'RCP virtuel (vRCP)'
slug: '/planung/virtuelle-zev-vzev'
description: '0:00 Introduction au webinaire vRCP'
sidebar_label: 'RCP virtuel (vRCP)'
symbol: 'gemeinschaft'
---


## Le regroupement virtuel dans le cadre de la consommation propre - vRCP

Un RCP virtuel (vRCP) correspond à un regroupement dans le cadre de la consommation propre incluant le réseau. Contrairement au RCP (regroupement dans le cadre de la consommation propre) classique, où tous les bâtiments doivent disposer d'un seul et même raccordement au réseau, un vRCP permet de réunir plusieurs raccordements au réseau sur un seul et même transformateur basse tension (&lt; 1kV).

Outre cette exigence fondamentale, d'autres points doivent encore être clarifiés pour savoir si un vRCP peut être mis en place dans le voisinage, et avec qui.

En font partie :

- la topologie effective du réseau

- les types de raccordement (réseaux à manchons ou cabines de distribution)

<Video src="cTF9C7b3QwU" title="Vidéo YouTube, enregistrement du webinaire «Mettre en œuvre un RCP virtuel (vRCP) avec smart-me»" />

[0:00](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=0s) Introduction au webinaire vRCP

[03:47](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=227s) Infrastructure de mesure utilisable pour le vRCP

[16:00](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=960s) Modèles d'autoconsommation

[28:33](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=1713s) vRCP smart-me

[30:19](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=1819s) Démonstration en direct

[35:18](https://www.youtube.com/watch?v=cTF9C7b3QwU&t=2118s) FAQ 

### Étape 1 : clarification initiale du vRCP

Cette clarification initiale sur ces thèmes est demandée directement au gestionnaire de réseau de distribution (GRD).

Il apparaît ensuite si un vRCP est possible et, si oui, avec quels participants.

Le GRD doit fournir cette information, avec une réponse positive ou négative motivée, au plus tard après 14 jours.

### Étape 2 : déterminer les participants et demander le vRCP

<div className="row">
<div className="col col--7">

Dans un deuxième temps, il faut vérifier l'intérêt des participants. Vous informez les participants potentiels de la possibilité de participer au vRCP.
Cette information ainsi que les réponses positives doivent être consignées par écrit, avec les signatures de participation.
Ces documents seront nécessaires plus tard pour l'autorisation de transmission des données, ainsi qu'en annexe des contrats et d'autres documents.

À ce stade, une inscription officielle au vRCP comprenant tous les intéressés doit être soumise au GRD. D'autres points relatifs au vRCP sont vérifiés et réglés dans un délai de 3 mois.

- La puissance de production doit représenter au moins 10% de la puissance de soutirage.

- Tous les participants se trouvent-ils derrière le même point de raccordement au niveau de la basse tension ?

- Des smart meters sont-ils déjà installés sur tous les sites ou non ? (Ils doivent alors être installés ultérieurement)

- Existe-t-il d'autres équipements pour le relevé local des points de mesure et/ou une demande de transmission SDTA via Swisseldex ?

Une fois tous les points ci-dessus remplis et après environ 3 mois, le vRCP peut entrer en service.

</div>
<div className="col col--5 bild--mitte">

![RCP virtuel (vRCP) – Figure 1](/img/planung-virtuelle-zev-vzev/01.png)

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

- Établissement du bilan sur les compteurs de consommation et de production solaire

Consommateurs normaux :

- Consommateurs d'électricité auprès du GRD en tant que maison ou appartement dans une maison individuelle ou un immeuble collectif

</div>
<div className="col col--6 bild--mitte">

![RCP virtuel (vRCP) – Figure 2](/img/planung-virtuelle-zev-vzev/02.png)

</div>
</div>

## Modèles de vRCP

### vRCP bâtiment unique (RCP à bilan virtuel)

<div className="row">
<div className="col col--6">

Un bâtiment partage un raccordement d'immeuble commun.

Le passage du modèle GRD au vRCP est simple.

L'ancien modèle GRD est ainsi en principe simplement géré et décompté de manière privée en tant que vRCP, et donc détaché des prestations du GRD.

</div>
<div className="col col--6 bild--mitte">

![RCP virtuel (vRCP) – Figure 3](/img/planung-virtuelle-zev-vzev/03.png)

</div>
</div>

### vRCP multi-bâtiments (vRCP étendu)

<div className="row">
<div className="col col--7">

Plusieurs RCP ou bâtiments disposant de leur propre raccordement au réseau partagent le même raccordement basse tension (&lt;1kV)

Ils peuvent désormais utiliser les lignes de liaison entre les bâtiments pour transporter l'électricité solaire.

L'énergie produite dans les bâtiments de gauche est ainsi également mise à la disposition des immeubles collectifs de droite.

Mais pas à la maison individuelle, car celle-ci se trouve en dehors de la topologie autorisée d'un vRCP.

Les conditions de topologie donnant droit à la participation au vRCP sont définies plus en détail ci-dessous.

</div>
<div className="col col--5 bild--mitte">

![RCP virtuel (vRCP) – Figure 4](/img/planung-virtuelle-zev-vzev/04.png)

</div>
</div>

### Topologies de réseau permettant de constituer un vRCP étendu

<div className="row">
<div className="col col--6">

Même jeu de barres ou même coffret de distribution au niveau de la basse tension (&lt; 1kV)

Tous les bâtiments sont raccordés au même coffret de distribution ou au même jeu de barres au niveau de réseau basse tension NR7.

</div>
<div className="col col--6 bild--mitte">

![RCP virtuel (vRCP) – Figure 5](/img/planung-virtuelle-zev-vzev/05.png)

</div>
</div>

<div className="row">
<div className="col col--6">

Même jeu de barres côté basse tension du transformateur de réseau (&lt;1kV)

Tous les bâtiments sont raccordés au même transformateur et au même jeu de barres au niveau de la basse tension.

</div>
<div className="col col--6 bild--mitte">

![RCP virtuel (vRCP) – Figure 6](/img/planung-virtuelle-zev-vzev/06.png)

</div>
</div>

<div className="row">
<div className="col col--6">

Réseaux à manchons
Un vRCP étendu sur plusieurs bâtiments n'est possible que si les bâtiments partagent le même manchon
(cas très rare)

La constitution d'un vRCP pour un bâtiment unique est en revanche toujours possible.

</div>
<div className="col col--6 bild--mitte">

![RCP virtuel (vRCP) – Figure 7](/img/planung-virtuelle-zev-vzev/07.png)

</div>
</div>

## Membres possibles d'un vRCP et technique de mesure nécessaire

Dans un vRCP, différentes infrastructures du gestionnaire de réseau de distribution (GRD) et du domaine privé peuvent se côtoyer. La mesure des différents bâtiments peut être assurée de différentes manières et s'intègre dans le vRCP en un modèle tarifaire uniforme.

- Ancien modèle pratique (GRD)

- RCP avec mesures privées (compteur de bilan du GRD)

- Maisons individuelles avec production solaire

- Appartements et maisons individuels sans production solaire, avec mesures privées ou mesures du GRD.

![RCP virtuel (vRCP) – Figure 8](/img/planung-virtuelle-zev-vzev/08.png)

## Infrastructure de comptage pour le modèle de tarification vRCP de smart-me

La tarification d'un vRCP repose sur l'égalité des participants. Tous les participants ont le même droit à la puissance solaire produite à un instant donné.

Pour que la tarification des différents modèles fonctionne ensemble, il faut des unités de comptage choisies, à enregistrer comme référence dans notre tarif.

L'illustration ci-dessous indique tous les points de mesure pertinents nécessaires par infrastructure pour un établissement du bilan et une tarification corrects.

![RCP virtuel (vRCP) – Figure 9](/img/planung-virtuelle-zev-vzev/09.png)

### Ex-modèle pratique (ancien modèle GRD privatisé en vRCP)

Dans ce modèle, il n'existe aucun point de mesure servant de compteur de bilan, ni du fournisseur d'énergie, ni privé. Le bilan de ce RCP est donc établi de manière virtuelle.
Cela nécessite la mesure de tous les producteurs et de tous les consommateurs. Le modèle fonctionne pour un bâtiment unique, mais aussi comme partie d'un vRCP étendu.

### RCP privé (avec compteur de bilan)

Dans ce modèle, il existe au moins un point de mesure du fournisseur d'énergie au point de raccordement principal du RCP. Les données de ce point de mesure peuvent être importées dans smart-me soit via une sous-mesure privée, soit via le hub de données du fournisseur d'énergie.

La sous-mesure privée permet une commande efficace en temps réel du RCP, ce qui n'est possible que de manière limitée avec le compteur du fournisseur d'énergie.

[En savoir plus sur le schéma de mesure des RCP privés](/planung/zev-zusammenschluss-zum-eigenverbrauch)

### Maison avec production solaire (maison individuelle)

Dans ce modèle, il existe au moins un point de mesure du fournisseur d'énergie au point de raccordement principal, et parfois aussi une mesure de la production.
La tarification d'une maison mitoyenne est possible sans compteur de production solaire. Idéalement, la production solaire de la maison mitoyenne est toutefois également mesurée, soit par le GRD, soit de manière privée.
Ces données peuvent être relevées par une mesure privée au moyen d'un smart-me Telstar ou par un import du hub de données via Swisseldex.

### Maison ou appartement sans production solaire (maison individuelle)

Dans ce modèle, il existe au moins un point de mesure du fournisseur d'énergie au raccordement de l'immeuble. Les données de ces consommateurs peuvent être relevées par un import du hub de données via Swisseldex.

Un immeuble collectif sans installation solaire mais avec des mesures privées suit l'infrastructure de mesure du RCP sans production.

[Détails sur la configuration des tarifs vRCP](/konfiguration/billing/stromtarife-definieren)

## Planifiez dès maintenant votre projet avec notre configurateur

Le Projektkonfigurator établit pour vous, sur la base de vos indications, la liste de matériel de tous les produits smart-me, le nombre de points de mesure et un schéma visuel pour vérification.

Idéal pour les planificateurs et les électriciens.

[Projektkonfigurator](/planung/projektkonfigurator)

## Import des données de mesure pour les points de comptage des fournisseurs d'énergie

Les données de mesure des points de mesure pertinents peuvent être importées via le hub de données de Swisseldex.
Smart-me est référencé auprès de Swisseldex comme destinataire de ces données. 

Sur demande et après autorisation, les fournisseurs d'énergie envoient les données via Swisseldex au hub d'import de données de smart-me. Les données peuvent ensuite être gérées, visualisées et décomptées dans le compte smart-me concerné.

Caractéristiques des données des fournisseurs d'énergie :

- Format de données EBIX, SDAT

- Résolution de 15 minutes

- Mise à disposition non vérifiée env. toutes les 24h

- Mise à disposition vérifiée env. tous les 30 jours

Vous trouverez ici des instructions détaillées sur l'import de données : [Détails sur l'import Swisseldex](/schnittstellen/swisseldex-sdat-import)

![RCP virtuel (vRCP) – Figure 10](/img/planung-virtuelle-zev-vzev/10.png)

## FAQ

<details id="kann-ein-vzev-in-einem-muffennetz-entstehen">
<summary>Un vRCP peut-il être constitué dans un réseau à manchons ?</summary>

Oui, c'est possible, mais les conditions requises ne sont que très rarement remplies.

Pour qu'un vRCP puisse être constitué dans un réseau à manchons, tous les bâtiments doivent partager exactement le même manchon. Sinon, le réseau public entre deux manchons est inclus, ce qui ne correspond plus à la réglementation du vRCP.

</details>

<details id="kann-ein-gebäude-ohne-solaranlage-einem-vzev-beitreten-und-die-vnb-zähler-durch-privatzähler-ersetzen">
<summary>Un bâtiment sans installation solaire peut-il rejoindre un vRCP et remplacer les compteurs du GRD par des compteurs privés ?</summary>

Oui, pour les mesures internes de production et de consommation du bâtiment.
Au sein du vRCP constitué, l'exploitant du vRCP est lui-même responsable de la mesure et du décompte. Cela implique donc aussi que l'exploitant du vRCP peut utiliser l'instrument de mesure de son choix pour l'ensemble du vRCP.

Le gestionnaire de réseau de distribution (GRD) a cependant naturellement lui aussi besoin de points de mesure pour la contre-mesure et l'établissement du bilan du vRCP. Il doit les installer en conséquence.

Si un immeuble collectif sans installation solaire souhaite rejoindre le vRCP, un compteur privé peut être installé pour chaque unité de décompte. Le GRD doit alors toutefois installer un point de mesure correspondant au raccordement de l'immeuble.

</details>

<details id="ist-eine-verschachtelung-von-mehreren-zev-in-einer-vzev-möglich">
<summary>Est-il possible d'imbriquer plusieurs RCP dans un vRCP ?</summary>

Oui et non.

Il est possible de constituer un vRCP à partir de deux RCP existants raccordés au même transformateur.
Il n'est toutefois pas possible que les deux RCP subsistent juridiquement de manière individuelle.
Juridiquement, ces deux RCP deviennent un seul (v)RCP.

Les deux RCP sont donc dissous juridiquement et remplacés par un (v)RCP.

</details>

<details id="kann-die-interne-tarifierung-und-der-strompreis-des-zev-oder-vzevs-frei-gewählt-werden">
<summary>La tarification interne et le prix de l'électricité du RCP ou du vRCP peuvent-ils être choisis librement ?</summary>

Oui et non.

La réglementation est exactement la même que pour le RCP.

La structure tarifaire au sein d'un RCP ou d'un vRCP peut être réglée de manière autonome selon le droit privé et différer de l'offre du gestionnaire de réseau de distribution (GRD).
Les bases légales du RCP en matière de fixation des prix continuent toutefois de s'appliquer.

Exemple :
Si l'électricité du réseau est réglée sous forme de tarif unique avec tarif de puissance, il est possible de décider, au sein du RCP ou du vRCP, de ne proposer qu'un tarif unique ou un double tarif.
Il faut en revanche garantir que, quelle que soit la tarification choisie, les recettes ne dépassent pas ce que l'électricité du réseau a effectivement coûté.

L'électricité solaire interne doit elle aussi respecter les règles et, selon la règle appliquée, ne doit pas coûter plus de 80% à max. 100% de l'électricité du réseau équivalente.

</details>
