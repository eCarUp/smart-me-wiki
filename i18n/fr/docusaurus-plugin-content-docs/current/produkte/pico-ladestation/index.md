---
title: 'Borne de recharge Pico'
slug: '/produkte/pico-ladestation'
description: 'Pico est une borne de recharge certifiée MID avec interface mobile et WiFi intégrée pour la transmission de données en temps réel.'
sidebar_label: 'Borne de recharge Pico'
---
Pico est une borne de recharge certifiée MID avec interface mobile et WiFi intégrée pour la transmission de données en temps réel. La borne de recharge synchronise les valeurs de mesure de manière automatisée et chiffrée vers le cloud smart-me. La borne peut être intégrée au backend eCarUp et dispose d'une gestion de la charge statique et dynamique. Les données peuvent être exportées et traitées dans le portail smart-me ou vers des systèmes tiers via notre interface ouverte.

![Borne de recharge Pico – Illustration 1](/img/produkte-pico-ladestation/01.png)

## Principales consignes d'installation en bref

- Pico dispose d'une commutation de phases – Merci de raccorder toutes les phases conformément au marquage (L1 = L1, L2 = L2, L3 = L3)

- En cas d'utilisation en extérieur, respecte particulièrement les instructions de montage afin de n'oublier aucun élément d'étanchéité. L'indice IP55 n'est atteint qu'avec les éléments d'étanchéité.
    [Instructions d'installation et de montage (allemand)](https://docs.google.com/presentation/d/1d_ejgHn-M8dmJdRPlC1F2z5bBZTvtU89_p2z1f22_aw/export/pdf) 

- Serre les éléments d'étanchéité de manière adéquate et vérifie le positionnement des joints.


[Planification de l'installation](/produkte/pico-ladestation/installationsplanung)

[Gestion de la charge Pico](/produkte/pico-ladestation/pico-lastmanagement)

[Configuration Pico](/konfiguration/inbetriebnahme/pico-konfiguration)

[Accessoires](/produkte/pico-ladestation/pico-zubehör)

[Affichage Pico](/produkte/pico-ladestation/pico-display)

[Socle Pico](/produkte/pico-ladestation/pico-standfuss)

<Video src="YiiACL00jko" title="Video" />

Gestion de la charge multiniveau (50 min)

<Video src="Bx9QOYZPWEk" title="Video" />

Ce qui se cache derrière la certification MID (30 min)

<Video src="bSEN20E-h18" title="Video" />

Vidéo courte : Pico obtient la certification MID (2 min)

## Aperçu des fonctions

- Gestion de la charge et équilibrage de charge intégrés avec équilibrage des phases

- Carte SIM intégrée avec un volume de données de 10 ans

- [Certification MID](/planung/zertifizierungen#certifications-pour-les-bornes-de-recharge) et certification de la courbe de charge du matériel de comptage interne grâce au grand écran

- Dispositifs de protection contre les défauts intégrés 30 mA AC selon IEC60947-2 et 6 mA DC IEC62955

- [Certification allemande de métrologie légale](/planung/zertifizierungen#certification-au-droit-de-la-métrologie-eichrecht-allemagne) (réf. 242070, 2402070/1)

- Montage simple (petit et léger), adapté au câble plat

- Identification par RFID, application, CarID et préparée pour ISO 15118 (Plug & Charge)

- Préparée pour la communication par courants porteurs ISO15118 (Plug&Charge, V2H, V2G)

- Connexion de données en temps réel chiffrée vers le cloud smart-me et eCarUp 

- [Installation](/konfiguration/inbetriebnahme) simple avec l'application gratuite smart-me.

- Interfaces vers des systèmes tiers via API, CSV, MSCONS, IS-E et autres

- Commande optimisée pour le solaire

- Délestage selon le [paragraphe 14a](https://www.bundesnetzagentur.de/DE/Vportal/Energie/SteuerbareVBE/artikel.html?nn=877500) (Allemagne)


## Configurer Pico

Des informations sur le montage, le mode MID, la manière de vérifier les sessions de recharge selon la métrologie légale, les états et les messages d'erreur figurent dans le [manuel d'installation (.pdf)](https://docs.google.com/presentation/d/1d_ejgHn-M8dmJdRPlC1F2z5bBZTvtU89_p2z1f22_aw/export/pdf) 

L'installation est traitée en détail ici : [Mise en service](/konfiguration/inbetriebnahme) 

La configuration est traitée en détail ici : [Configuration Pico](/konfiguration/inbetriebnahme/pico-konfiguration) 

## Caractéristiques techniques

<Video src="" title="Custom embed" />

[Télécharger la fiche technique (.pdf)](https://docs.google.com/presentation/d/1tq5HPM2mc4Br8264vKs_yjMv4HauvtQM0A0DY87EMks/export/pdf)

## Descriptions des fonctions

### Standard de communication ISO 15118 (Plug&Charge, V2H, V2G)

De quel standard s'agit-il ?

Le standard ISO15118 est un standard de communication entre le véhicule et la borne de recharge. Il décrit les exigences physiques et les protocoles, ainsi que les fonctions prises en charge par cette interface.

Les fonctions comprennent principalement :

- Autorisations de recharge pour Plug & Charge

- Gestion de la recharge pour la charge et la décharge des véhicules (charge unidirectionnelle, charge bidirectionnelle pour V2H et V2G)


Quel est l'objectif du standard ?
L'objectif de ce standard est une implémentation homogène du véhicule et de son accumulateur dans le réseau public ou dans le système domestique en tant qu'unité de stockage.
À long terme, l'accumulateur du véhicule doit pouvoir être utilisé pour stabiliser le réseau public (V2G = Vehicle to Grid) ou comme solution de stockage domestique (V2H = Vehicle to Home).

Est-ce déjà une réalité aujourd'hui ?

L'utilisation de ce standard est encore très limitée. Différents fabricants de matériel de recharge et de véhicules réalisent actuellement des tests à ce sujet afin d'harmoniser et de développer la communication.
Des solutions Plug & Charge sont en partie déjà en service dans la vie réelle, mais ne sont pas encore particulièrement répandues.

Les applications V2G et V2H sont aujourd'hui déjà partiellement prises en charge par les bornes de recharge DC.
L'offre pour V2G et V2H du côté des bornes de recharge AC est actuellement encore très limitée, voire inexistante, en raison de l'indisponibilité des dispositifs nécessaires du côté des véhicules.


Les premiers constructeurs de véhicules ont toutefois déjà annoncé des véhicules qui disposeront des dispositifs techniques nécessaires. Actuellement, aucun de ces véhicules ne peut cependant encore être acquis sur le marché. (État au 16.05.2025)

Qu'est-ce que cela signifie pour votre borne de recharge Pico ?

Votre borne de recharge Pico est entièrement préparée pour l'avenir. Une mise à jour logicielle suffira pour activer les fonctions sur votre Pico.
Nous travaillons actuellement intensivement à l'implémentation de ces fonctionnalités.

### RCD / détection de courant de défaut continu et protection de charge

Les dispositifs de sécurité intégrés vérifient entièrement automatiquement leur bon fonctionnement. 

- Au moins toutes les 24 heures depuis le dernier contrôle.

- Toujours lorsque l'appareil est redémarré.


En cas de défaut lors des autocontrôles, aucun courant ne sera libéré et l'information sera affichée à l'écran.
En cas de défaut pendant la session de recharge, le courant est interrompu et le défaut est affiché à l'écran.

La réinitialisation du défaut ne peut se faire que mécaniquement, en débranchant puis en rebranchant le câble de recharge sur la borne de recharge.

## Affichage

Le comportement de l'affichage est décrit sur la page [Affichage Pico](/produkte/pico-ladestation/pico-display)

![Borne de recharge Pico – Illustration 2](/img/produkte-pico-ladestation/02.png)

## Raccordements et dimensions du Pico

![Borne de recharge Pico – Illustration 3](/img/produkte-pico-ladestation/03.jpg)

### Schéma de raccordement

L1 : phase 1

L2 : phase 2

L3 : phase 3

N : conducteur neutre

PE : conducteur de protection



Le conducteur de protection devrait être fixé à la vis de raccordement supérieure afin que le socle soit directement mis à la terre avec la borne.

Attention :
Le produit ne peut être exploité qu'en montage triphasé en étoile ou en monophasé !



Passages de câbles

Sur Pico, les câbles peuvent entrer et sortir à 5 endroits. 

Deux en haut, deux en bas et un par la plaque arrière.

Pour le montage par la plaque arrière, un trou de 25-26 mm de diamètre doit être percé.

Tu trouveras les détails sur le montage du socle dans les instructions de montage dans les téléchargements.

### Délestage (entrées externes)

[](https://drive.google.com/open?id=1CnvydIjsXnRTXNFNnteObEg5VLJM9RqU5_PA78Gd_kY "Open Spreadsheet, Pico Lastabwurf in new window")

<Video src="" title="Video" />

Délestage Pico

![Borne de recharge Pico – Illustration 4](/img/produkte-pico-ladestation/04.png)

Le délestage peut aussi être réalisé avec un seul signal disponible. 

Pour la configuration allant d'aucune recharge à la puissance de recharge maximale, le signal est câblé sur IN1 et IN2 ainsi que COM. Pour la configuration allant de 6 A de puissance minimale à la puissance de recharge maximale, le signal doit uniquement être câblé sur IN2 ainsi que COM.



COM est le conducteur neutre, IN1 et IN2 doivent être mis sous tension lors du signal ON. IN1 et IN2 ne génèrent aucune tension, celle-ci doit être fournie de l'extérieur.

Attention :
Le délestage peut être câblé soit sur tous les Picos, soit au minimum sur un de chaque groupe de charge. Cette fonction est également garantie sans connexion Internet.

Le délestage peut également être réalisé via la [gestion de la charge multiniveau](/konfiguration/multilevel-lastmanagement/mlm-konfigurieren#configuration-du-délestage) au moyen de signaux d'entrée du compteur.

![Borne de recharge Pico – Illustration 5](/img/produkte-pico-ladestation/05.png)

![Borne de recharge Pico – Illustration 6](/img/produkte-pico-ladestation/06.png)

### Dimensions

![Borne de recharge Pico – Illustration 7](/img/produkte-pico-ladestation/07.png)

Les données \*.DXF et \*.DWG se trouvent dans l'archive ZIP dans les téléchargements.

## Informations d'expédition

### 232070 et 242070 borne de recharge smart-me Pico avec plaque de montage

Numéro de tarif douanier : 85044055

Poids avec emballage : 4.6 kg

Taille de l'emballage : 400x300x200mm

Colis par europalette : 72 pièces

### 232070/1 et 242070/1 borne de recharge smart-me Pico sans plaque de montage

Numéro de tarif douanier : 85044055

Poids avec emballage : 3.3 kg

Taille de l'emballage : 400x300x200mm

Colis par europalette : 72 pièces

## Accessoires

[Accessoires](/produkte/pico-ladestation/pico-zubehör) 

## Consignes de sécurité

Les consignes de sécurité doivent être respectées en toutes circonstances :



Installation, entretien, réparation, mise en service :

- Lis attentivement l'intégralité du manuel avant l'installation et l'utilisation du produit.

- Danger de mort dû à la haute tension électrique. Ne jamais effectuer de modifications sur des composants, des logiciels ou des câbles de raccordement sans être hors tension. Les fusibles amont correspondants doivent donc être retirés et conservés de manière à ce que d'autres personnes ne puissent pas les remettre en place à l'insu de tous.

- Le produit ne doit être installé, réparé ou entretenu que par un électricien qualifié agréé. Toutes les prescriptions communales, régionales et nationales en vigueur pour les installations électriques doivent être respectées. 

- Les numéros de série antérieurs à 7002702 nécessitent un RCD Typ A série afin de satisfaire aux standards d'installation nationaux.

- L'installation ne doit pas être effectuée à proximité de milieux inflammables ou explosifs, dans des zones inondables (garage souterrain) ou dans des zones où il existe un risque d'eau courante. 

- Le produit doit être installé à un emplacement définitif. Les raccordements sur le Pico et la plaque arrière sont conçus pour un nombre limité de cycles d'enfichage. 

- Le produit doit être installé sur un mur ou une structure présentant une capacité portante suffisante. 

- Les bornes de raccordement dans la plaque arrière sont sous tension lorsque le circuit électrique est fermé et ne doivent en aucun cas être mises en contact directement ou avec d'autres objets qu'avec l'électronique du Pico.

- Selon le type d'installation, des autorisations peuvent être nécessaires avant l'installation, p. ex. en cas d'augmentation de la puissance de raccordement du bâtiment. 

- La borne de recharge doit être annoncée auprès du gestionnaire de réseau de distribution (GRD). 

- Les vis des raccordements de câbles devraient être serrées avec un couple de 3 Nm. Le diamètre maximal du câble avec embout est de 6.5mm.

- Le produit doit être exploité en combinaison avec un disjoncteur de protection de ligne. Le pouvoir de coupure du disjoncteur de protection de ligne doit correspondre au pouvoir de coupure maximal du point de raccordement. Pour la sélectivité, un disjoncteur de protection de ligne peut suffire pour plusieurs bornes de recharge. Tenez compte des indications spécifiques à chaque pays sur notre wiki. Les bornes peuvent supporter sans problème des courts-circuits individuels jusqu'à 3kA.


Utilisation prévue :

- Ce produit est exclusivement prévu pour la recharge de véhicules à propulsion électrique équipés de batteries non gazantes. Le produit ne doit être utilisé qu'avec un câble de recharge selon IEC 62196. Toute utilisation autre que celles indiquées ici est interdite.

- L'appareil est prévu pour une utilisation à l'intérieur et à l'extérieur.




Exploitation :

- Ne jamais utiliser ni toucher le produit s'il est endommagé ou s'il ne fonctionne pas correctement. En cas d'urgence (fumée, incendie, étincelles ou autres dysfonctionnements), mettre immédiatement le produit hors tension au moyen de l'interrupteur FI et informer le support client. 

- Ne pas éteindre le produit avec de l'eau ni le nettoyer à l'eau courante.

- Ne pas plonger le produit dans l'eau ou dans d'autres liquides. 

- Ce produit n'est pas prévu pour être utilisé par des personnes aux capacités physiques, psychiques ou sensorielles réduites (y compris des enfants) ou par des personnes ne connaissant pas le produit. 

- Il faut veiller à ce que les enfants ne jouent pas avec le produit.

- Ne jamais toucher les contacts de la prise de recharge de type 2 et n'introduire aucun corps étranger dans le produit. 

- Ne jamais utiliser le câble de recharge s'il est endommagé ou si les raccordements sont humides ou encrassés. 

- Ne pas utiliser de rallonges ou d'adaptateurs non homologués en combinaison avec le produit. 

- Ne jamais plier le câble de recharge, ne pas rouler dessus et ne pas l'exposer à une forte chaleur. 

- Retirer le câble de recharge du support de recharge exclusivement par la fiche. 

- Ne pas poser le câble de recharge sur les voies de circulation des autres usagers et toujours le positionner de manière à ce qu'il n'y ait aucun risque de trébuchement. 

- Protéger le câble de recharge des influences météorologiques telles que le rayonnement solaire direct, le vent, la pluie, l'humidité et la mouillure, et ne jamais le brancher avec des mains humides ou mouillées. 

- Ne pas utiliser le produit à proximité de champs électromagnétiques puissants ni à proximité immédiate de radiotéléphones.


## FAQ

### Pourquoi le Pico réserve-t-il toujours 6 A dans le groupe de charge, bien que la voiture ne soit plus rechargée ?

La norme IEC 61851 prescrit que chaque voiture doit toujours disposer d'au moins 6 A. La norme le prévoit ainsi afin qu'un chauffage d'appoint puisse être alimenté par le réseau. Ou pour que la batterie ne se décharge pas lorsque quelqu'un est absent pendant plusieurs semaines.

### Le Pico nécessite-t-il un RCD Typ A série par borne de recharge ?

Les bornes de recharge Pico dont le numéro de série est antérieur à 7002701 nécessitent un RCD Typ A série 40A 30mA pour satisfaire aux standards nationaux.
La fonction est présente sur ces appareils, mais n'est pas conforme.
À partir du numéro de série 7002702 ou BY2024, le Pico ne nécessite plus de RCD série, celui-ci est désormais intégré et conforme à 60947-2.



### La borne de recharge Pico prend-elle en charge ISO15118 pour Plug & Charge et V2G / V2H ?

Les bornes de recharge Pico possèdent tous les dispositifs techniques permettant de prendre en charge à long terme les standards ISO15118 et ISO15118-20.
L'activation du Pico pour la prise en charge de ces fonctions dépend exclusivement du logiciel et ne nécessite aucune modification ni adaptation matérielle.

Recharge bidirectionnelle V2H et V2G avec le Pico :
L'activation de la borne de recharge Pico pour la recharge bidirectionnelle sous ISO15118-20 dépend exclusivement de l'autorisation et de la disponibilité des fonctions et dispositifs du côté du véhicule et du constructeur du véhicule. Le matériel de recharge de la borne de recharge Pico ne constitue à cet égard aucune limitation.

Les premiers véhicules capables de le faire et effectivement acquérables sont attendus dans les années à venir.

Nous travaillons en permanence au développement de ces fonctions dans notre borne de recharge Pico afin d'être prêts le moment venu.

### Puis-je remettre le relevé du compteur à zéro ?

Non, comme nos compteurs sont utilisés pour des décomptes, il n'est pas possible de les réinitialiser.

## Manuel d'installation, téléchargements et déclaration de conformité

Fiche technique

[Anglais](https://docs.google.com/presentation/d/1TPUl4Yk2u3fwl8zy6TWZ7TcwLpEe6Yzkx-jUVWnAl7k/export/pdf)

Documents techniques

[Pico Quickstarter](https://docs.google.com/document/d/1jRLrb7J9hg7yreVMQyvvFeWXF4lVsgWtSucW4cy1XLk/export?format=pdf) 

[Instructions d'installation et de montage (anglais)](https://docs.google.com/presentation/d/1neEyGHF5XE-SPaIoc-QK9U5wIxvFdNY8GwCYq8-VsBU/export/pdf)

[Instructions d'installation et de montage (allemand)](https://docs.google.com/presentation/d/1d_ejgHn-M8dmJdRPlC1F2z5bBZTvtU89_p2z1f22_aw/export/pdf) 

[Gabarit de perçage](https://drive.google.com/file/d/1lQSSDwsKE9JeS2QkbpUDcLRhpeezxYnP/view?usp=sharing)

[Déclaration de conformité](https://drive.google.com/file/d/1K-9mIHKMXTeqzOCc0-i9vRfSnFElSCnu/view?usp=drive_link)

[Schéma de raccordement et schéma électrique, fichiers ZIP](https://drive.google.com/file/d/1aVOLmWprogy2OizkcyH3kHsHntu0A8-D/view?usp=share_link)
