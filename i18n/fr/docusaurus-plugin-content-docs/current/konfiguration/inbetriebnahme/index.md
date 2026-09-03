---
title: 'Mise en service'
slug: '/konfiguration/inbetriebnahme'
description: 'Tout ce qu''il faut savoir sur la mise en service des appareils smart-me: points à respecter lors de la mise en service, sources d''erreur fréquentes et réponses spécifiques aux questions d''installation.'
sidebar_label: 'Mise en service'
---
Tout ce qu'il faut savoir sur la mise en service des appareils smart-me: points à respecter lors de la mise en service, sources d'erreur fréquentes et réponses spécifiques aux questions d'installation.

[Mise en service LoRa](/konfiguration/inbetriebnahme/inbetriebnahme-lora)

[Supprimer / désactiver un compteur](/konfiguration/inbetriebnahme/zaehler-loeschen)

[Continuer vers la configuration des dossiers et des compteurs](/konfiguration/ordnerkonfiguration)

## Préparation

Les points suivants doivent être réunis avant la mise en service

## Prérequis WiFi

- WiFi 802.11 b/g/n 2.4GHz (pas de 5GHz ni de réseau combiné avec la même SSID)

- Les ports 80 UDP et 53 UDP/TCP doivent être ouverts vers l'extérieur.

- Le réseau nécessite une connexion Internet.

- La SSID ne doit pas être masquée.

- La SSID ne prend en charge que les symboles ASCII à l'exclusion de $ (Ä, Ö, Ü ne fonctionnent pas)

- Les filtres d'adresses MAC doivent être désactivés lors de l'installation. (Les adresses MAC des appareils ne peuvent être lues que par ARP)

- Le réseau nécessite un serveur DHCP

- SSID: 28 caractères max.

- Mot de passe: 63 caractères max.


## Compte smart-me

Nous recommandons de créer un compte à l'avance et séparément pour chaque installation. Aucune licence n'est nécessaire pour la mise en service.

## Installer App

L'Installer App gratuite doit être installée sur votre smartphone et les autorisations nécessaires doivent être accordées.

IOS: localisation, réseau local, caméra

Android: localisation, caméra

## Outillage particulier

- Pico: une carte RFID (fournie)

- Telstar 80A, CT et M-Bus Gateway: un petit tournevis pour appuyer sur la touche T1


![Mise en service – illustration 1](/img/konfiguration-inbetriebnahme/01.png)

[App Store](https://apps.apple.com/ch/app/smart-me-installer/id6502614018)

[Play Store](https://play.google.com/store/apps/details?id=smartme.installer&hl=de_CH)

[Instructions](/konfiguration/installer-app-anleitung)

## Installation

## Guide rapide

1.  Vérifier les prérequis WiFi (voir ci-dessus)

2.  Télécharger l'application gratuite pour [Android](https://play.google.com/store/apps/details?id=smartme.installer&hl=de_CH) ou [iOS](https://apps.apple.com/ch/app/smart-me-installer/id6502614018).

3.  Accorder les autorisations à l'application

4.  Connecte ton smartphone ou ta tablette au WiFi dans lequel tu souhaites installer l'appareil smart-me.

5.  Démarre l'application et connecte-toi avec le compte correspondant ou crée un compte.

6.  Dans le menu, vérifier avec le diagnostic si les serveurs sont accessibles.

7.  Clique en bas à droite sur «Installer l'appareil» (Gerät installieren) (+)

8.  Lors d'une installation avec WLAN, celui-ci peut être ajouté en haut.

9.  Clique en bas à droite sur «Ajouter un appareil» (Gerät hinzufügen) (+)

10.  Scanne le code QR

11.  Pour la Pico, choisis si tu souhaites utiliser le WLAN ou le mobile (4G).

12.  Sélectionner «Se connecter au WLAN de l'appareil» (Verbinde mit WLAN des Gerätes)

13.  Appuyer sur T1 ou présenter la carte RFID. Remarque: la Pico doit être installée dans les 15 minutes suivant la mise sous tension.

14.  Sélectionner «WLAN quick connect»

15.  Attends que l'invitation à te connecter à smart-me\_xxxxxx apparaisse.

16.  Attendre que l'installation se termine avec succès.

17.  Attribuer un nom.

18.  Réglage spécifique à l'appareil

     - Telstar CT: régler le rapport de transformation (sélectionner / éditer le CT / saisir le rapport de transformation)

     - M-Bus: la recherche doit être lancée via le portail web (roue dentée / lancer la recherche)

     - Kamstrup:  clé du compteur (trois roues dentées / clé du compteur / enregistrer)


Si l'installation échoue, veuillez suivre les instructions détaillées, y compris la description des erreurs.

## Instructions détaillées, y compris la description des erreurs

![Mise en service – illustration 2](/img/konfiguration-inbetriebnahme/02.jpg)

### 1\. Connexion WIFI

![Mise en service – illustration 3](/img/konfiguration-inbetriebnahme/02.jpg)

### 2\. Création / connexion

![Mise en service – illustration 4](/img/konfiguration-inbetriebnahme/04.jpg)

### 3\. Création du compte

Problèmes possibles:

Si l'e-mail est déjà utilisée, il faut en utiliser une autre.

![Mise en service – illustration 5](/img/konfiguration-inbetriebnahme/05.jpg)

### 4\. Connexion au compte

Problèmes possibles:

- Si la connexion n'est pas possible, vérifie si le WiFi dispose d'une connexion Internet

- Si la connexion n'est pas possible, le nom d'utilisateur ou le mot de passe peut être erroné.


![Mise en service – illustration 6](/img/konfiguration-inbetriebnahme/06.png)

### 5\. Diagnostic

Cette étape est facultative.

- Il est important que l'accessibilité des serveurs soit sur Yes.

- Si l'avertissement concernant le réseau 5 GHz apparaît, tu dois t'assurer qu'un réseau 2,4 GHz est également généré. Il n'est pas possible de forcer le smartphone à se connecter au réseau 2,4 GHz. C'est la raison pour laquelle cela apparaît sous forme d'avertissement.


![Mise en service – illustration 7](/img/konfiguration-inbetriebnahme/07.jpg)

### 6\. Clique sur «Ajouter un appareil» (Gerät hinzufügen) (+)

![Mise en service – illustration 8](/img/konfiguration-inbetriebnahme/08.jpg)

### 7\. Clique sur «Éditer» (Editieren)

Remarque

- Cette étape peut être ignorée si les Picos sont mises en service via la 4G.


![Mise en service – illustration 9](/img/konfiguration-inbetriebnahme/09.jpg)

### 8\. Saisis le mot de passe du WLAN

Problèmes possibles:

- Si la SSID s'affiche comme &lt;&lt;unknown>>, la localisation doit être activée et le smartphone doit être connecté à un WLAN.


![Mise en service – illustration 10](/img/konfiguration-inbetriebnahme/10.jpg)

### 9\. Clique sur «Ajouter un appareil» (Gerät hinzufügen) (+)

![Mise en service – illustration 11](/img/konfiguration-inbetriebnahme/11.jpg)

### 10\. Scanne le code QR

Problèmes possibles:

- Si le code QR n'est pas reconnu, le numéro de série peut aussi être saisi manuellement.


![Mise en service – illustration 12](/img/konfiguration-inbetriebnahme/12.jpg)

### 11\. Connecte-toi au WLAN du compteur

![Mise en service – illustration 13](/img/konfiguration-inbetriebnahme/13.jpg)

### 12\. Uniquement pour la Pico: «Sélectionner le type de connexion» (Verbindungsart auswählen)

![Mise en service – illustration 14](/img/konfiguration-inbetriebnahme/14.jpg)

### 13\. Appuyer sur la touche T1 ou scanner le RFID

Remarque pour la Pico: note que tu disposes de 15 minutes par Pico pour terminer le processus d'installation. Sinon, tu dois redémarrer la Pico et recommencer le processus depuis le début.

![Mise en service – illustration 15](/img/konfiguration-inbetriebnahme/15.jpg)

### 14\. Attendre que la connexion soit établie avec succès

## Réglage spécifique à l'appareil

## Telstar CT

### Régler le rapport de transformation

- Sélectionner et éditer le compteur CT 

- Saisir le rapport de transformation 

- Le rapport de transformation peut être verrouillé. Cela sert de protection contre les modifications non souhaitées par des personnes non autorisées. Pour pouvoir déverrouiller le rapport de transformation, l'appareil doit être installé une nouvelle fois avec l'app smart-me.


### Remarque:

Le rapport de transformation ne modifie aucune donnée historique. Cette étape doit donc être effectuée immédiatement après la mise en service.

![Mise en service – illustration 16](/img/konfiguration-inbetriebnahme/16.jpg)

## M-Bus Gateway / Sirius

### Instructions pour les deux M-Bus Gateways

Étapes d'installation du matériel:

1.  Installer l'appareil (câbler le M-Bus, mettre sous tension)

2.  Terminer l'installation à l'aide de l'application, conformément aux instructions.
    (Relier le matériel au WLAN et au compte cible. WLAN 2.4GHz)

3.  Sous Configuration, dans l'application ou sur le bureau, lancer la «recherche automatique» pour trouver les appareils.


La mise en service des compteurs de chaleur et d'eau reste en revanche effectuée par le fournisseur (p. ex. Neovac, Ista, GWF, Techem, etc.). La plupart du temps, ces entreprises raccordent pour cela leur propre M-Bus Master dans le local technique, afin de pouvoir vérifier que les compteurs arrivent bien sur le M-Bus.

Un protocole de mise en service est ensuite établi et ce n'est qu'après cela que notre M-Bus Gateway est raccordé de nouveau.

Les documents correspondants permettent ensuite d'attribuer les différents compteurs aux bons appartements dans le cloud smart-me et de terminer la configuration.

Ci-joint les informations nécessaires

- Liste de tous les compteurs installés

- Adresse M-Bus (nous n'avons besoin que de l'adresse secondaire, l'adresse primaire n'est pas pertinente pour nous)

- Appartenance à l'appartement (désignation de l'appartement)

- Type de compteur (chaleur, eau chaude ou froide, etc.)


Important: l'adresse secondaire doit être unique par compte smart-me; de plus, la combinaison des 4 derniers chiffres doit être unique dans le compte pour les compteurs combinés chaud/froid. Le plus simple est d'utiliser le numéro de série de l'appareil.

Résultat de la recherche automatique

![Mise en service – illustration 17](/img/konfiguration-inbetriebnahme/17.png)

Création automatique des compteurs après la recherche
(nécessite quelques minutes)

![Mise en service – illustration 18](/img/konfiguration-inbetriebnahme/18.png)

### Numérotation des compteurs combinés

Le M-Bus Gateway ne reconnaît qu'un seul compteur à la fois sur la base de l'adresse secondaire, qui figure en règle générale aussi sur le protocole de réception.

Les compteurs combinés sont ensuite affichés séparément sur le portail. Pour cette application, smart-me utilise sa propre logique de numérotation.

Tous les compteurs non pertinents pour le décompte peuvent être [désactivés](/konfiguration/inbetriebnahme/zaehler-loeschen) afin d'économiser des coûts de licence. La suppression n'est pas judicieuse, car le compteur réapparaît sans cesse.

Si un compteur contient plus d'1 compteur, ceux-ci sont numérotés comme suit:

- Compteur principal = adresse secondaire de la liste du M-Bus Gateway (p. ex. 71440145)

- Autres compteurs = adresse secondaire du compteur principal, le premier ou les deux premiers chiffres sont supprimés (p. ex. 7) et un chiffre est incrémenté à la fin (p. ex. 14401451, 14401452).


- Sous-compteurs = ceux-ci contiennent les quatre derniers chiffres du compteur principal (p. ex. 0145) et un numéro d'ordre à quatre chiffres à la fin (p. ex. 01450001)


Remarque concernant les 0 en tête: si un compteur porte p. ex. le numéro 1000017, les 0 en tête ne sont pas pris en compte après la troncature, donc p. ex. 000017, et sont ajoutés à la fin, p. ex. 1700001

![Mise en service – illustration 19](/img/konfiguration-inbetriebnahme/19.png)

![Mise en service – illustration 20](/img/konfiguration-inbetriebnahme/20.png)

### Rechercher les appareils du M-Bus Gateway

D'autres configurations doivent être effectuées dans le portail web

Éditer

- Modifier l'intervalle. Le M-Bus a besoin de 10 secondes par appareil pour la lecture.


Lancer la recherche d'appareils sur le M-Bus Gateway

1.  En haut à droite, sur le symbole de la roue dentée (paramètres) 

2.  Rechercher les appareils

3.  Confirmer la recherche par «Oui» (Ja)


Remarque: la recherche peut durer plusieurs minutes.

Le gateway ne trouve pas tous les compteurs

- Relance la recherche (1 à 2 fois). Il se peut que le compteur ne soit pas toujours trouvé lors de la première recherche.

- D'autres causes sont indiquées sur la page [Pannes du M-Bus Gateway](/stoerungsbehebung/mbus-gateway-stoerungen) 


Le gateway trouve plus de compteurs qu'il n'en a été installé

- La plupart du temps pendant la mise en service: selon le compteur M-Bus, celui-ci peut créer plusieurs sous-compteurs. On les reconnaît au fait que le numéro de série est décalé d'un chiffre vers la gauche, suivi d'un nombre croissant. En commençant par 1. Ex.: compteur principal 00200001, sous-compteur 02000011

- D'autres causes sont indiquées sur la page [Pannes du M-Bus Gateway](/stoerungsbehebung/mbus-gateway-stoerungen) 


![Mise en service – illustration 21](/img/konfiguration-inbetriebnahme/21.png)

### Empêcher la détection de nouveaux appareils par le M-Bus Gateway

Comment activer l'option?

- Sélectionner le M-Bus Gateway.


- Sélectionne la roue dentée du M-Bus Gateway (en haut à droite). Remarque: ne sélectionne pas la roue dentée supérieure, qui sert à la configuration des compteurs, mais celle du bas.

- Modifier

- Cocher «Don't allow to add additional meters».

- Enregistrer


Quel est l'effet de cette option?

- L'activation de l'option «Don't allow to add additional meters» empêche l'enregistrement d'appareils qui ne sont pas encore présents dans le cloud. 


À quoi faut-il faire attention?

- Si de nouveaux appareils sont ajoutés, cette option doit être désactivée à nouveau avant la recherche.


Quand cette option est-elle recommandée?

- Lorsque des appareils M-Bus qui n'existent pas du tout apparaissent sans cesse dans le portail.

- Pour des raisons préventives :-)


Dans quels cas cela peut-il se produire?

- En cas d'erreurs dans la transmission des données. Cela arrive plus souvent lorsque le câble M-Bus est trop long et que la qualité de la transmission des données diminue de ce fait, ou lorsque le câble est mal blindé ou exposé à des perturbations externes.


Explication technique

- Le protocole M-Bus standardisé ne dispose que d'1 byte pour la somme de contrôle. La somme de contrôle est destinée à détecter certaines erreurs dans la transmission des données. Malheureusement, 1 byte c'est peu et cela peut sans cesse conduire à ce qu'un paquet de données erroné soit considéré comme correct et bon. Dans certaines installations utilisant des M-Bus Gateways, cela conduit régulièrement à ce que des paquets corrompus soient classés comme corrects et bons, puis reconnus et ajoutés comme nouvel appareil M-Bus dans notre cloud. Le compte passe alors de Professional à Basic, car la couverture de licence n'est plus garantie.


![Mise en service – illustration 22](/img/konfiguration-inbetriebnahme/22.png)

## Pico E-Ladestation

### Vérifier la connexion WLAN

Après l'installation de la Pico, une icône apparaît dans le coin supérieur droit et renseigne sur le type de connexion.

Si la Pico doit être connectée au WLAN, il est conseillé de vérifier brièvement que l'icône correspond bien à un symbole WLAN et non à 4G. 

Si la 4G apparaît alors que la Pico doit être connectée au WLAN, il faut réinstaller la Pico. Cela peut arriver si une étape de l'installation n'a pas été effectuée correctement, p. ex. le mot de passe du WLAN.

![Mise en service – illustration 23](/img/konfiguration-inbetriebnahme/23.png)

### Configuration Pico & gestion de la charge

[Pico Konfiguration](/konfiguration/inbetriebnahme/pico-konfiguration) 

[Gestion de la charge multiniveau](/konfiguration/multilevel-lastmanagement) 

![Mise en service – illustration 24](/img/konfiguration-inbetriebnahme/23.png)

## Trucs et astuces

### Mettre en service plusieurs appareils

Lors de cette étape, tu as la possibilité de mettre en service plusieurs compteurs en même temps, afin d'accélérer la mise en service lorsqu'il y a beaucoup de compteurs.



![Mise en service – illustration 25](/img/konfiguration-inbetriebnahme/10.jpg)

### Se déconnecter

1.  En haut à gauche, sur les trois traits, et sélectionner Profil

2.  En bas, sélectionner Se déconnecter

3.  Déconnecté


![Mise en service – illustration 26](/img/konfiguration-inbetriebnahme/26.jpg)

![Mise en service – illustration 27](/img/konfiguration-inbetriebnahme/27.jpg)

### Échec de l'installation

Si l'installation échoue et que tu souhaites réessayer, ferme entièrement l'application puis rouvre-la. Cela permet de garantir qu'aucune information mise en cache n'est utilisée.

## Étape suivante

[Continuer vers la configuration des dossiers et des compteurs](/konfiguration/ordnerkonfiguration)

## FAQ

### Le fournisseur d'accès Internet change, que dois-je faire?

Si les compteurs sont connectés à un WLAN technique et/ou à un point d'accès dédié, la SSID et le mot de passe ne changent en règle générale pas. Dans ce cas, un changement de fournisseur d'accès Internet ne pose en général pas de problème.

Si la SSID et le mot de passe d'un WLAN privé sont utilisés, il y a deux possibilités:

- Solution 1: créer sur le nouveau routeur un WLAN invité qui a la même SSID et le même mot de passe que l'ancien. Les compteurs se connectent ensuite automatiquement à ce WLAN, qui est identique à l'ancien.

- Solution 2: réintégrer chaque compteur individuellement, afin que les nouvelles données soient enregistrées localement sur chaque compteur. L'installation se déroule exactement comme une nouvelle installation. Le compteur ne doit en aucun cas être supprimé, sans quoi toutes les données historiques sont perdues . Lors d'une nouvelle installation, notre environnement cloud remarque que le numéro de série est déjà présent dans le compte et ajoute simplement les nouvelles valeurs.


### Comment puis-je redémarrer un appareil (reboot)?

Tous les appareils peuvent être redémarrés par une coupure de courant.

Compteur triphasé: appuyer simultanément sur T1 et T2 pendant 10 secondes.

Pico: dans le portail, sélectionner la roue dentée en haut à droite, actions avancées, redémarrage. Ne fonctionne que si la Pico est en ligne.

Module Kamstrup: retirer le module du compteur, attendre 10 secondes et le rebrancher.

M-Bus Gateway et compteur monophasé: ces appareils ne peuvent être redémarrés que par une coupure de courant.

### Puis-je utiliser mon appareil avec plusieurs réseaux WiFi?

Oui, l'appareil smart-me (sauf la [borne de recharge Pico](/produkte/pico-ladestation)) enregistre jusqu'à 3 réseaux WiFi différents. Tu ne dois l'installer qu'une seule fois sur chaque réseau et l'appareil sélectionne ensuite automatiquement le réseau offrant la meilleure liaison radio.

### Puis-je remettre le relevé du compteur à zéro?

Non, comme nos compteurs sont utilisés pour des décomptes, il n'est pas possible de les remettre à zéro.

### Où le mot de passe WiFi est-il enregistré?

Le mot de passe WiFi est enregistré exclusivement sur l'appareil smart-me et n'est jamais transmis à un serveur 

### Les réglages et les relevés du compteur sont-ils enregistrés en cas de coupure de courant?

Oui, l'appareil enregistre tous les réglages et toutes les valeurs en cas de panne de courant. Dès que l'alimentation électrique est rétablie, l'appareil se connecte automatiquement au WiFi et revient à l'état d'avant la panne. 

### Comment puis-je enregistrer un nouveau WiFi sans perdre les données existantes?

Pour ajouter un réseau supplémentaire, l'appareil doit être installé correctement avec l'app smart-me. S'il n'est pas supprimé du cloud au préalable, les données énergétiques et les paramètres de configuration sont conservés.



### Les informations WiFi enregistrées peuvent-elles être supprimées?

Les informations WiFi ne sont enregistrées que sur l'appareil. La suppression des données peut s'effectuer comme suit:

- Appuyer pendant 10 s sur le bouton de l'appareil smart-me. Pour la Pico, la carte RIFD doit être présentée au plus tard 15 minutes après le redémarrage (hors tension).

- Établir une connexion avec le WiFi smart-me à l'aide d'un smartphone (le nom du réseau WiFi est smart-me\_XXXXXX, où le X représente le numéro de série de l'appareil smart-me)

- Établir une connexion avec l'IP 192.168.1.1 à l'aide d'un navigateur.

- Sélectionner le WLAN indésirable, appuyer sur remove et redémarrer l'appareil.


### Comment trouver l'adresse MAC de mon appareil smart-me?

Il n'y a pas de moyen direct de trouver l'adresse MAC. Si tu disposes d'une licence Professional, tu peux activer le DNS dans les paramètres avancés de l'appareil smart-me et sélectionner l'option IP interne. Un ping sur le nom DNS permet de déterminer l'IP, qui peut ensuite être comparée sur le routeur avec la table IP / MAC

### Le réseau maillé peut-il être désactivé?

Les compteurs triphasés Telstar et Telstar CT génèrent un réseau maillé. Celui-ci ne peut pas être désactivé.

### Puis-je déplacer un appareil d'un compte smart-me à un autre?

- Les données historiques ne peuvent pas être déplacées. 

- L'appareil peut toutefois être installé dans un autre compte au moyen d'une nouvelle installation.


### Avec quel relevé du compteur un compteur smart-me est-il livré?

0

### Que se passe-t-il si je désactive un compteur?

Toutes les données déjà enregistrées dans le cloud sont conservées. Après la désactivation, plus aucune donnée n'est enregistrée. Aucun coût de licence n'est facturé pour les compteurs désactivés.

### Un proxy peut-il être configuré sur les appareils smart-me?

Non
