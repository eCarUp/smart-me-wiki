---
title: 'Borne de recharge Pico'
slug: '/produkte/pico-ladestation'
description: 'Pico est une borne de recharge certifiée MID dotée d''une interface de téléphonie mobile et WiFi intégrée pour la transmission de données en temps réel.'
sidebar_label: 'Borne de recharge Pico'
---
Pico est une borne de recharge certifiée MID dotée d'une interface de téléphonie mobile et WiFi intégrée pour la transmission de données en temps réel. La borne de recharge synchronise automatiquement les valeurs mesurées, sous forme chiffrée, avec le cloud smart-me. La borne peut être intégrée au backend eCarUp et dispose d'une gestion de la charge statique et dynamique. Les données peuvent être exportées et traitées dans le portail smart-me ou, via notre interface ouverte, dans des systèmes tiers.

![Borne de recharge Pico – illustration 1](/img/produkte-pico-ladestation/01.png)

## Consignes d'installation essentielles en bref

- Pico dispose d'une commutation de phases - Veuillez raccorder toutes les phases conformément au marquage (L1 = L1, L2 = L2, L3 = L3)

- En cas d'utilisation en extérieur, respectez particulièrement les instructions de montage afin de ne pas oublier d'éléments d'étanchéité. L'indice IP55 n'est atteint qu'avec les éléments d'étanchéité.
    [Instructions d'installation et de montage (allemand)](https://docs.google.com/presentation/d/1d_ejgHn-M8dmJdRPlC1F2z5bBZTvtU89_p2z1f22_aw/export/pdf) 

- Serrez correctement les éléments d'étanchéité et vérifiez la bonne mise en place des joints.

[Planification de l'installation](/produkte/pico-ladestation/installationsplanung)

[Gestion de la charge Pico](/produkte/pico-ladestation/pico-lastmanagement)

[Configuration Pico](/konfiguration/inbetriebnahme/pico-konfiguration)

[Accessoires](/produkte/pico-ladestation/pico-zubehör)

[Affichage Pico](/produkte/pico-ladestation/pico-display)

[Socle Pico](/produkte/pico-ladestation/pico-standfuss)

<Video src="YiiACL00jko" title="Vidéo YouTube, enregistrement du webinaire sur la sortie de la gestion de la charge multiniveau" />

Gestion de la charge multiniveau (50 min)

<Video src="Bx9QOYZPWEk" title="Vidéo YouTube, certification MID Pico - webinaire" />

Ce qui se cache derrière la certification MID (30 min)

<Video src="bSEN20E-h18" title="Vidéo YouTube, la borne de recharge Pico obtient la certification MID" />

Courte vidéo : Pico obtient la certification MID (2 min)

## Aperçu des fonctions

- Gestion de la charge et équilibrage de charge intégrés avec équilibrage des phases

- Carte SIM intégrée avec un volume de données pour 10 ans

- [Certification MID](/planung/zertifizierungen#certifications-pour-les-bornes-de-recharge) et certification de la courbe de charge du matériel de mesure interne grâce au grand écran

- Dispositifs de protection contre les défauts intégrés 30mA AC selon IEC60947-2 et 6mA DC IEC62955

- [Certification allemande selon le droit de la métrologie (Eichrecht)](/planung/zertifizierungen#certification-eichrecht-allemagne) (art. n° 242070, 2402070/1)

- Montage simple (petite et légère), adaptée au câble plat

- Identification par RFID, application, CarID et préparée pour ISO 15118 (Plug & Charge)

- Préparée pour la communication par courant porteur ISO15118 (Plug&Charge, V2H, V2G)

- Connexion de données chiffrée en temps réel vers les clouds smart-me et eCarUp 

- [Installation](/konfiguration/inbetriebnahme) simple avec l'application smart-me gratuite.

- Interfaces vers des systèmes tiers via API, CSV, MSCONS, IS-E et autres

- Pilotage optimisé pour le solaire

- Délestage selon le [paragraphe 14a](https://www.bundesnetzagentur.de/DE/Vportal/Energie/SteuerbareVBE/artikel.html?nn=877500) (Allemagne)

## Configurer Pico

Vous trouverez des informations sur le montage, le mode MID, la manière de vérifier les sessions de recharge conformément au droit de la métrologie, les états et les messages d'erreur dans le [manuel d'installation (.pdf)](https://docs.google.com/presentation/d/1d_ejgHn-M8dmJdRPlC1F2z5bBZTvtU89_p2z1f22_aw/export/pdf) 

L'installation est traitée en détail ici : [Mise en service](/konfiguration/inbetriebnahme) 

La configuration est traitée en détail ici : [Configuration Pico](/konfiguration/inbetriebnahme/pico-konfiguration) 

## Données techniques

<Embed src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTmxJQ_thhwYfeefD_1PLiscIfGqbt-LrSa8pwwFBKwlmze109NOEt8Eyka2lroJoGS_FRiuGgtiAhh/pubhtml?gid=0&range=A1:B26&single=true&widget=false&headers=false&chrome=false" height="631px" title="Borne de recharge Pico" />

[Télécharger la fiche technique (.pdf)](https://docs.google.com/presentation/d/1tq5HPM2mc4Br8264vKs_yjMv4HauvtQM0A0DY87EMks/export/pdf)

## Descriptions des fonctions

### Norme de communication ISO 15118 (Plug&Charge, V2H, V2G)

De quelle norme s'agit-il ?

La norme ISO15118 est une norme de communication entre le véhicule et la borne de recharge. Elle décrit les exigences physiques et les protocoles, ainsi que les fonctions prises en charge par cette interface.

Les fonctions comprennent principalement :

- Les autorisations de recharge pour Plug & Charge

- La gestion de la recharge pour la charge et la décharge des véhicules (recharge unidirectionnelle, recharge bidirectionnelle pour V2H et V2G)

Quel est l'objectif de la norme ?
L'objectif de cette norme est une intégration homogène du véhicule et de sa batterie dans le réseau public ou dans le système domestique en tant qu'unité de stockage.
À long terme, la batterie du véhicule doit pouvoir être utilisée pour stabiliser le réseau public (V2G = Vehicle to Grid) ou comme solution de stockage domestique (V2H = Vehicle to Home).

Est-ce déjà une réalité aujourd'hui ?

L'utilisation de cette norme est encore très limitée. Différents fabricants de matériel de recharge et de véhicules effectuent actuellement des tests à ce sujet afin d'harmoniser et de développer la communication.
Des solutions Plug & Charge sont en partie déjà en service dans la pratique, mais elles ne sont pas encore très répandues.

Les applications V2G et V2H sont en partie déjà prises en charge aujourd'hui par les bornes de recharge DC.
L'offre V2G et V2H du côté des bornes de recharge AC est actuellement encore très limitée, voire inexistante, en raison de l'indisponibilité des équipements nécessaires du côté des véhicules.

Les premiers constructeurs automobiles ont toutefois déjà annoncé des véhicules qui disposeront des équipements techniques nécessaires. Actuellement, aucun de ces véhicules ne peut cependant encore être acheté sur le marché. (État au 16.05.2025)

Qu'est-ce que cela signifie pour votre borne de recharge Pico ?

Votre borne de recharge Pico est entièrement préparée pour l'avenir. Une mise à jour logicielle suffira pour activer les fonctions sur votre Pico.
Nous travaillons actuellement intensivement à l'implémentation de ces fonctionnalités.

### RCD / détection des défauts de courant continu et protection de charge

Les dispositifs de sécurité intégrés vérifient de manière entièrement automatique leur bon fonctionnement. 

- Au moins toutes les 24 heures depuis le dernier contrôle.

- À chaque redémarrage de l'appareil.

Si un défaut est détecté lors des autocontrôles, aucun courant n'est libéré et l'information est affichée à l'écran.
Si un défaut survient pendant la session de recharge, le courant est interrompu et le défaut est affiché à l'écran.

La réinitialisation du défaut ne peut se faire que mécaniquement, en débranchant puis en rebranchant le câble de recharge sur la borne de recharge.

## Écran

Le comportement de l'écran est décrit sur la page [Affichage Pico](/produkte/pico-ladestation/pico-display)

![Borne de recharge Pico – illustration 2](/img/produkte-pico-ladestation/02.png)

## Raccordements et dimensions de Pico

![Borne de recharge Pico – illustration 3](/img/produkte-pico-ladestation/03_EN.jpg)

### Schéma de raccordement

- L1 : phase 1
- L2 : phase 2
- L3 : phase 3
- N : conducteur neutre
- PE : conducteur de protection

Le conducteur de protection doit être raccordé à la vis de raccordement supérieure afin que le socle soit mis à la terre directement avec la borne.

**Attention :**
Le produit ne peut être exploité qu'en montage triphasé en étoile ou en monophasé !

#### Passages de câbles

Sur Pico, les câbles peuvent entrer et sortir à 5 endroits. 

Deux en haut, deux en bas et un à travers la plaque arrière.

Pour le montage à travers la plaque arrière, un trou de 25-26mm de diamètre doit être percé.

Vous trouverez les détails sur le montage sur socle dans les instructions de montage, dans les téléchargements.

### Délestage (entrées externes)

[](https://drive.google.com/open?id=1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY "Open Spreadsheet, Pico Lastabwurf in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY/htmlembed?gid=0" height="245px" title="Feuille de calcul, délestage Pico" />

Délestage Pico

![Borne de recharge Pico – illustration 4](/img/produkte-pico-ladestation/04.png)

<div className="row">
<div className="col col--7">

Le délestage peut également être réalisé avec un seul signal disponible. 

Pour la configuration de l'absence de recharge à la puissance de recharge maximale, le signal est câblé sur IN1 et IN2 ainsi que sur COM. Pour la configuration d'une puissance minimale de 6A à la puissance de recharge maximale, le signal doit uniquement être câblé sur IN2 ainsi que sur COM.

COM est le conducteur neutre ; IN1 et IN2 doivent être mis sous tension lors du signal ON. IN1 et IN2 ne génèrent pas de tension, celle-ci doit être fournie de l'extérieur.

Attention :
Le délestage peut être câblé soit sur toutes les Pico, soit au minimum sur une Pico de chaque groupe de charge. Cette fonction est garantie même sans connexion Internet.

En alternative, le délestage peut également être réalisé via la [gestion de la charge multiniveau](/konfiguration/multilevel-lastmanagement/mlm-konfigurieren#configuration-du-délestage) au moyen des signaux d'entrée des compteurs.

</div>
<div className="col col--5 text--center">

![Borne de recharge Pico – illustration 5](/img/produkte-pico-ladestation/05_EN.png)

![Borne de recharge Pico – illustration 6](/img/produkte-pico-ladestation/06.png)

</div>
</div>

### Dimensions

![Borne de recharge Pico – illustration 7](/img/produkte-pico-ladestation/07.png)

Les données \*.DXF et \*.DWG se trouvent dans l'archive ZIP, dans les téléchargements.

## Informations d'expédition

### 232070 et 242070 borne de recharge smart-me Pico avec plaque de montage

Numéro de tarif douanier : 85044055

Poids avec emballage : 4.6 kg

Dimensions de l'emballage : 400x300x200mm

Colis par palette Europe : 72 pièces

### 232070/1 et 242070/1 borne de recharge smart-me Pico sans plaque de montage

Numéro de tarif douanier : 85044055

Poids avec emballage : 3.3 kg

Dimensions de l'emballage : 400x300x200mm

Colis par palette Europe : 72 pièces

## Accessoires

[Accessoires](/produkte/pico-ladestation/pico-zubehör) 

## Consignes de sécurité

Les consignes de sécurité doivent être respectées en toutes circonstances :

Installation, maintenance, réparation, mise en service :

- Lisez attentivement l'intégralité du manuel avant l'installation et l'utilisation du produit.

- Danger de mort dû à une tension électrique élevée. N'effectuez jamais de modifications sur des composants, le logiciel ou les câbles de raccordement sans que l'installation soit hors tension. Pour cela, les fusibles amont correspondants doivent être retirés et conservés de manière à ce que d'autres personnes ne puissent pas les remettre en place à votre insu.

- Le produit doit exclusivement être installé, réparé ou entretenu par un électricien qualifié agréé. Toutes les prescriptions communales, régionales et nationales en vigueur relatives aux installations électriques doivent être respectées. 

- Les numéros de série antérieurs à 7002702 nécessitent un RCD Typ A en série afin de satisfaire aux normes nationales d'installation.

- L'installation ne doit pas être effectuée à proximité de substances inflammables ou explosives, dans des zones inondables (parking souterrain) ou dans des zones présentant un risque d'eau ruisselante. 

- Le produit doit être installé à un emplacement définitif. Les raccordements sur la Pico et sur la plaque arrière sont conçus pour un nombre limité de cycles d'enfichage. 

- Le produit doit être installé sur un mur ou une structure présentant une capacité de charge suffisante. 

- Les bornes de raccordement de la plaque arrière sont sous tension lorsque le circuit est fermé et ne doivent en aucun cas être mises en contact, directement ou par d'autres objets, avec autre chose que l'électronique de la Pico.

- Selon le type d'installation, des autorisations peuvent être nécessaires avant l'installation, par exemple en cas d'augmentation de la puissance du raccordement de l'immeuble. 

- La borne de recharge doit être annoncée au gestionnaire de réseau de distribution (GRD). 

- Les vis des raccordements de câbles doivent être serrées avec un couple de 3 Nm. Le diamètre maximal du câble avec embout est de 6.5mm.

- Le produit doit être exploité en combinaison avec un disjoncteur de protection de ligne. Le pouvoir de coupure du disjoncteur de protection de ligne doit correspondre au courant de court-circuit maximal du point de raccordement. Pour la sélectivité, un disjoncteur de protection de ligne peut suffire pour plusieurs bornes de recharge. Respectez les indications spécifiques à chaque pays sur notre wiki. Les bornes peuvent supporter sans problème des courts-circuits individuels jusqu'à 3kA.

Utilisation prévue :

- Ce produit est exclusivement destiné à la recharge de véhicules électriques équipés de batteries ne dégageant pas de gaz. Le produit ne doit être utilisé qu'avec un câble de recharge conforme à IEC 62196. Toute autre utilisation que celles indiquées ici est interdite.

- L'appareil est prévu pour une utilisation en intérieur et en extérieur.

Fonctionnement :

- N'utilisez ou ne touchez jamais le produit s'il est endommagé ou ne fonctionne pas correctement. En cas d'urgence (fumée, incendie, étincelles ou autre dysfonctionnement), mettez immédiatement le produit hors tension au moyen du disjoncteur différentiel (FI) et informez le support client. 

- N'éteignez pas le produit avec de l'eau et ne le nettoyez pas à l'eau courante.

- N'immergez pas le produit dans l'eau ou dans d'autres liquides. 

- Ce produit n'est pas prévu pour être utilisé par des personnes aux capacités physiques, mentales ou sensorielles réduites (y compris les enfants) ou par des personnes ne connaissant pas le produit. 

- Veillez à ce que les enfants ne jouent pas avec le produit.

- Ne touchez jamais les contacts de la prise de recharge de type 2 et n'introduisez aucun corps étranger dans le produit. 

- N'utilisez jamais le câble de recharge s'il est endommagé ou si les connecteurs sont mouillés ou sales. 

- N'utilisez pas de rallonges ni d'adaptateurs non homologués en combinaison avec le produit. 

- Ne pliez jamais le câble de recharge, ne roulez jamais dessus et ne l'exposez jamais à une forte chaleur. 

- Retirez le câble de recharge du support de recharge uniquement en tirant sur la fiche. 

- Ne posez pas le câble de recharge sur les voies de circulation d'autres usagers et positionnez-le toujours de manière à éviter tout risque de trébuchement. 

- Protégez le câble de recharge des intempéries telles que le rayonnement solaire direct, le vent, la pluie, l'humidité et l'eau, et ne le branchez jamais avec des mains humides ou mouillées. 

- N'utilisez pas le produit à proximité de champs électromagnétiques puissants ou à proximité immédiate de téléphones sans fil.

## FAQ

<details id="warum-reserviert-der-pico-immer-6a-in-der-lastgruppe-obwohl-das-auto-nicht-mehr-geladen-wird">
<summary>Pourquoi la Pico réserve-t-elle toujours 6A dans le groupe de charge, alors que la voiture n'est plus en charge ?</summary>

La norme IEC 61851 prescrit que chaque voiture doit toujours disposer d'au moins 6 A. La norme le prévoit ainsi pour qu'un chauffage auxiliaire puisse être alimenté par le réseau, ou pour que la batterie ne se décharge pas lorsque quelqu'un est absent pendant plusieurs semaines.

</details>

<details id="benötigt-pico-einen-seriellen-rcd-typ-a-pro-ladestation">
<summary>Pico nécessite-t-elle un RCD Typ A en série par borne de recharge ?</summary>

Les bornes de recharge Pico dont le numéro de série est antérieur à 7002701 nécessitent un RCD de type A 40A 30mA en série pour satisfaire aux normes nationales.
La fonction est présente sur ces appareils, mais n'est pas conforme.
À partir du numéro de série 7002702 ou BY2024, la Pico ne nécessite plus de RCD en série : celui-ci est désormais intégré et conforme à 60947-2.

</details>

<details id="unterstützt-die-pico-ladestation-iso15118-für-plug--charge-und-v2g--v2h">
<summary>La borne de recharge Pico prend-elle en charge ISO15118 pour Plug & Charge et V2G / V2H ?</summary>

Les bornes de recharge Pico disposent de tous les équipements techniques nécessaires pour prendre en charge à long terme les normes ISO15118 et ISO15118-20.
La capacité de la Pico à prendre en charge ces fonctions dépend exclusivement du logiciel et ne nécessite aucune modification ni adaptation du matériel.

Recharge bidirectionnelle V2H et V2G avec la Pico :
La capacité de la borne de recharge Pico à effectuer une recharge bidirectionnelle selon ISO15118-20 dépend exclusivement de l'activation et de la disponibilité des fonctions et équipements du côté du véhicule et du constructeur automobile. Le matériel de recharge de la borne de recharge Pico ne constitue pas une limitation à cet égard.

Les premiers véhicules compatibles et effectivement disponibles à l'achat sont attendus dans les années à venir.

Nous travaillons en permanence au développement de ces fonctions dans notre borne de recharge Pico afin d'être prêts le moment venu.

</details>

<details id="kann-ich-den-zählerstand-auf-null-zurücksetzten">
<summary>Puis-je remettre le relevé du compteur à zéro ?</summary>

Non, étant donné que nos compteurs sont utilisés pour des décomptes, il n'est pas possible de les réinitialiser.

</details>

## Manuel d'installation, téléchargements et déclaration de conformité

### Fiche technique
[Allemand](https://docs.google.com/presentation/d/1tq5HPM2mc4Br8264vKs_yjMv4HauvtQM0A0DY87EMks/export/pdf)

[Anglais](https://docs.google.com/presentation/d/1TPUl4Yk2u3fwl8zy6TWZ7TcwLpEe6Yzkx-jUVWnAl7k/export/pdf)

### Documents techniques

[Pico Quickstarter](https://docs.google.com/document/d/1jRLrb7J9hg7yreVMQyvvFeWXF4lVsgWtSucW4cy1XLk/export?format=pdf) 

[Instructions d'installation et de montage (anglais)](https://docs.google.com/presentation/d/1neEyGHF5XE-SPaIoc-QK9U5wIxvFdNY8GwCYq8-VsBU/export/pdf)

[Instructions d'installation et de montage (allemand)](https://docs.google.com/presentation/d/1d_ejgHn-M8dmJdRPlC1F2z5bBZTvtU89_p2z1f22_aw/export/pdf) 

[Gabarit de perçage](https://drive.google.com/file/d/1lQSSDwsKE9JeS2QkbpUDcLRhpeezxYnP/view?usp=sharing)

[Déclaration de conformité](https://drive.google.com/file/d/1K-9mIHKMXTeqzOCc0-i9vRfSnFElSCnu/view?usp=drive_link)

[Schéma de raccordement et schéma électrique, fichiers ZIP](https://drive.google.com/file/d/1aVOLmWprogy2OizkcyH3kHsHntu0A8-D/view?usp=share_link)
