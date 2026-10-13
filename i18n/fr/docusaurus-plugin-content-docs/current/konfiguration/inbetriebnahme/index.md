---
title: 'Mise en service'
slug: '/konfiguration/inbetriebnahme'
description: 'Tout sur la mise en service des appareils smart-me : ce qu''il faut prendre en compte lors de la mise en service, les sources d''erreur fréquentes et des réponses spécifiques aux questions d''installation.'
sidebar_label: 'Mise en service'
---
Tout sur la mise en service des appareils smart-me : ce qu'il faut prendre en compte lors de la mise en service, les sources d'erreur fréquentes et des réponses spécifiques aux questions d'installation.

[Mise en service LoRa](/konfiguration/inbetriebnahme/inbetriebnahme-lora)

[Supprimer / désactiver un compteur](/konfiguration/inbetriebnahme/zaehler-loeschen)

[Continuer vers la configuration des dossiers et des compteurs](/konfiguration/ordnerkonfiguration)

## Préparation

Les éléments suivants doivent être disponibles avant la mise en service

## Exigences WiFi

- WiFi 802.11 b/g/n 2.4GHz (pas de 5GHz ni de réseau combiné avec le même SSID)

- Les ports 80 UDP et 53 UDP/TCP doivent être ouverts vers l'extérieur.

- Le réseau doit disposer d'une connexion Internet.

- Le SSID ne doit pas être masqué.

- Le SSID ne prend en charge que les caractères ASCII, à l'exception de $ (Ä, Ö, Ü ne fonctionnent pas)

- Les filtres d'adresses MAC doivent être désactivés pendant l'installation. (Les adresses MAC des appareils ne peuvent être lues que par ARP)

- Le réseau doit disposer d'un serveur DHCP

- SSID : 28 caractères max.

- Mot de passe : 63 caractères max.


## Compte smart-me

Nous recommandons de créer un compte à l'avance et séparément pour chaque installation. Aucune licence n'est nécessaire pour la mise en service.

## Installer App

L'Installer App gratuite doit être installée sur votre smartphone et les autorisations nécessaires doivent lui être accordées.

IOS : localisation, réseau local, caméra

Android : localisation, caméra

## Outillage spécial

- Pico : une carte RFID (fournie)

- Telstar 80A, CT et passerelle M-Bus : un petit tournevis pour appuyer sur la touche T1


![Mise en service – Figure 1](/img/konfiguration-inbetriebnahme/01.png)

[App Store](https://apps.apple.com/ch/app/smart-me-installer/id6502614018)

[Play Store](https://play.google.com/store/apps/details?id=smartme.installer&hl=de_CH)

[Instructions](/konfiguration/installer-app-anleitung)

## Installation

## Guide rapide

1.  Vérifier les exigences WiFi (voir ci-dessus)

2.  Télécharger l'application gratuite pour [Android](https://play.google.com/store/apps/details?id=smartme.installer&hl=de_CH) ou [iOS](https://apps.apple.com/ch/app/smart-me-installer/id6502614018).

3.  Accorder les autorisations à l'application

4.  Connectez votre smartphone ou votre tablette au WiFi dans lequel vous souhaitez installer l'appareil smart-me.

5.  Lancez l'application, connectez-vous avec le compte correspondant ou créez un compte.

6.  Dans le menu, vérifier avec Diagnostic (Diagnose) si les serveurs sont joignables.

7.  Cliquez en bas à droite sur « Installer un appareil » (Gerät installieren) (+)

8.  Pour une installation via WLAN, celui-ci peut être ajouté en haut.

9.  Cliquez en bas à droite sur « Ajouter un appareil » (Gerät hinzufügen) (+)

10.  Scannez le code QR

11.  Pour la Pico, choisissez si vous souhaitez utiliser le WLAN ou le réseau mobile (4G).

12.  Choisir « Se connecter au WLAN de l'appareil » (Verbinde mit WLAN des Gerätes)

13.  Appuyer sur T1 ou présenter la carte RFID. Remarque : la Pico doit être installée dans les 15 minutes suivant la mise sous tension.

14.  Choisir "WLAN quick connect"

15.  Attendez que l'invite à vous connecter à smart-me\_xxxxxx apparaisse.

16.  Attendre que l'installation soit terminée avec succès.

17.  Attribuer un nom.

18.  Réglages spécifiques à l'appareil

     - Telstar CT : définir le rapport de transformation (sélectionner le CT / éditer / saisir le rapport de transformation)

     - M-Bus : la recherche doit être lancée via le portail web (roue dentée / Lancer la recherche (Suchlauf starten))

     - Kamstrup : clé du compteur (trois roues dentées / Clé du compteur (Zählerschlüssel) / Enregistrer (speichern))


Si l'installation échoue, veuillez suivre les instructions détaillées incluant la description des erreurs.

## Instructions détaillées incluant la description des erreurs

![Mise en service – Figure 2](/img/konfiguration-inbetriebnahme/02.jpg)

### 1\. Connexion WIFI

![Mise en service – Figure 3](/img/konfiguration-inbetriebnahme/02.jpg)

### 2\. Création / connexion

![Mise en service – Figure 4](/img/konfiguration-inbetriebnahme/04.jpg)

### 3\. Création du compte

Problèmes possibles :

Si l'adresse e-mail est déjà utilisée, une autre adresse doit être utilisée.

![Mise en service – Figure 5](/img/konfiguration-inbetriebnahme/05.jpg)

### 4\. Connexion au compte

Problèmes possibles :

- Si la connexion est impossible, veuillez vérifier que le WiFi dispose d'une connexion Internet

- Si la connexion est impossible, le nom d'utilisateur ou le mot de passe est peut-être erroné.


![Mise en service – Figure 6](/img/konfiguration-inbetriebnahme/06.png)

### 5\. Diagnostic

Cette étape est facultative.

- Il est important que les serveurs joignables soient sur Yes.

- Si l'avertissement concernant le réseau 5 GHz apparaît, vous devez vous assurer qu'un réseau 2,4 GHz est également généré. Il n'est pas possible de forcer le smartphone à se connecter au réseau 2,4 GHz. C'est pourquoi cela apparaît sous forme d'avertissement.


![Mise en service – Figure 7](/img/konfiguration-inbetriebnahme/07.jpg)

### 6\. Cliquez sur « Ajouter un appareil » (Gerät hinzufügen) (+)

![Mise en service – Figure 8](/img/konfiguration-inbetriebnahme/08.jpg)

### 7\. Cliquez sur « Éditer » (Editieren)

Remarque

- Cette étape peut être ignorée si les Pico sont mises en service via 4G.


![Mise en service – Figure 9](/img/konfiguration-inbetriebnahme/09.jpg)

### 8\. Saisissez le mot de passe WLAN

Problèmes possibles :

- Si le SSID s'affiche comme &lt;&lt;unknown>>, la localisation doit être activée et le smartphone doit être connecté à un WLAN.


![Mise en service – Figure 10](/img/konfiguration-inbetriebnahme/10.jpg)

### 9\. Cliquez sur « Ajouter un appareil » (Gerät hinzufügen) (+)

![Mise en service – Figure 11](/img/konfiguration-inbetriebnahme/11.jpg)

### 10\. Scannez le code QR

Problèmes possibles :

- Si le code QR n'est pas reconnu, le numéro de série peut aussi être saisi manuellement.


![Mise en service – Figure 12](/img/konfiguration-inbetriebnahme/12.jpg)

### 11\. Connectez-vous au WLAN du compteur

![Mise en service – Figure 13](/img/konfiguration-inbetriebnahme/13.jpg)

### 12\. Uniquement pour la Pico : « Sélectionner le type de connexion » (Verbindungsart auswählen)

![Mise en service – Figure 14](/img/konfiguration-inbetriebnahme/14.jpg)

### 13\. Appuyer sur la touche T1 ou scanner la carte RFID

Remarque pour la Pico : notez que vous disposez de 15 minutes par Pico pour terminer le processus d'installation. Sinon, vous devez redémarrer la Pico et recommencer le processus depuis le début.

![Mise en service – Figure 15](/img/konfiguration-inbetriebnahme/15.jpg)

### 14\. Attendre que la connexion soit établie

## Réglages spécifiques à l'appareil

## Telstar CT

### Définir le rapport de transformation

- Sélectionner le compteur CT et l'éditer 

- Saisir le rapport de transformation 

- Le rapport de transformation peut être verrouillé. Cela sert de protection contre les modifications involontaires par des personnes non autorisées. Pour déverrouiller le rapport de transformation,  l'appareil doit être réinstallé avec l'application smart-me.


### Remarque :

Le rapport de transformation ne modifie pas les données historiques. Cette étape doit donc être effectuée immédiatement après la mise en service.

![Mise en service – Figure 16](/img/konfiguration-inbetriebnahme/16.jpg)

## Passerelle M-Bus / Sirius

### Instructions pour les deux passerelles M-Bus

Étapes d'installation du matériel :

1.  Installer l'appareil (câbler le M-Bus, mettre sous tension)

2.  Terminer l'installation à l'aide de l'application conformément aux instructions.
    (Lier le matériel au WLAN et au compte cible. WLAN 2.4GHz)

3.  Sous Configuration (Konfiguration), dans l'application ou sur l'ordinateur, lancer la  « recherche automatique » (automatischen Suchlauf) afin de trouver les appareils.


La mise en service des compteurs de chaleur et des compteurs d'eau continue en revanche d'être effectuée par le fournisseur (p. ex. Neovac, Ista, GWF, Techem, etc.). La plupart du temps, ces entreprises raccordent à cet effet leur propre maître M-Bus dans le local technique afin de vérifier que les compteurs arrivent bien sur le M-Bus.

Un procès-verbal de mise en service est ensuite établi et ce n'est qu'après cela que notre passerelle M-Bus est à nouveau raccordée.

À l'aide des documents correspondants, les compteurs concernés peuvent ensuite être attribués aux bons appartements dans le cloud smart-me et la configuration peut être terminée.

Voici les informations nécessaires

- Liste de tous les compteurs installés

- Adresse M-Bus (nous n'avons besoin que de l'adresse secondaire, l'adresse primaire n'est pas pertinente pour nous)

- Appartenance à l'appartement (désignation de l'appartement)

- Type de compteur (chaleur, eau chaude sanitaire ou eau froide, etc.)


Important : l'adresse secondaire doit être unique par compte smart-me ; de plus, pour les compteurs combinés chaleur/froid, la combinaison des 4 derniers chiffres doit être unique dans le compte. Le plus simple est d'utiliser le numéro de série de l'appareil.

Résultat de la recherche automatique

![Mise en service – Figure 17](/img/konfiguration-inbetriebnahme/17.png)

Création automatique des compteurs après la recherche
(prend quelques minutes)

![Mise en service – Figure 18](/img/konfiguration-inbetriebnahme/18.png)

### Numérotation des compteurs combinés

La passerelle M-Bus ne reconnaît à chaque fois qu'un seul compteur à l'aide de l'adresse secondaire, qui figure généralement aussi sur le procès-verbal de réception.

Les compteurs combinés sont ensuite affichés séparément sur le portail. Pour cette application, smart-me utilise sa propre logique de numérotation.

Tous les compteurs non pertinents pour le décompte peuvent être [désactivés](/konfiguration/inbetriebnahme/zaehler-loeschen) afin d'économiser des frais de licence. La suppression n'est pas utile, car le compteur réapparaît sans cesse.

Si un compteur contient plus d'un compteur, ceux-ci sont numérotés comme suit :

- Compteur principal = adresse secondaire figurant dans la liste de la passerelle M-Bus (p. ex. 71440145)

- Autres compteurs = adresse secondaire du compteur principal, dont le premier ou les deux premiers chiffres sont supprimés (p. ex. 7) et à la fin de laquelle un chiffre est incrémenté (p. ex. 14401451,14401452).


- Sous-compteurs = ceux-ci contiennent les quatre derniers chiffres du compteur principal (p. ex. 0145) et un numéro d'ordre à quatre chiffres à la fin (p. ex. 01450001)


Remarque concernant les 0 de tête : si un compteur porte p. ex. le numéro 1000017, les 0 de tête ne sont pas pris en compte après la troncature, donc p. ex. 000017, et un chiffre est ajouté à la fin, p. ex. 1700001

![Mise en service – Figure 19](/img/konfiguration-inbetriebnahme/19.png)

![Mise en service – Figure 20](/img/konfiguration-inbetriebnahme/20.png)

### Rechercher des appareils avec la passerelle M-Bus

Les autres configurations doivent être effectuées dans le portail web

Éditer (Editieren)

- Modifier l'intervalle. Le M-Bus a besoin de 10 secondes par appareil pour la lecture.


Lancer la recherche d'appareils sur la passerelle M-Bus

1.  En haut à droite, sur le symbole de la roue dentée (Paramètres (Einstellungen)) 

2.  Rechercher des appareils (Geräte suchen)

3.  Confirmer la recherche avec « Oui » (Ja)


Remarque : la recherche peut durer plusieurs minutes.

La passerelle ne trouve pas tous les compteurs

- Relancez la recherche  (1 à 2 fois). Il se peut que le compteur ne soit pas toujours trouvé lors de la première recherche.

- Vous trouverez d'autres causes sur la page [Pannes de la passerelle M-Bus](/stoerungsbehebung/mbus-gateway-stoerungen) 


La passerelle trouve plus de compteurs que ceux installés

- Le plus souvent pendant la mise en service : selon le compteur M-Bus, celui-ci peut créer plusieurs sous-compteurs. On les reconnaît au fait que le numéro de série est décalé d'une position vers la gauche, suivi d'un nombre croissant, en commençant par 1. Ex. : compteur principal 00200001, sous-compteur 02000011

- Vous trouverez d'autres causes sur la page [Pannes de la passerelle M-Bus](/stoerungsbehebung/mbus-gateway-stoerungen) 


![Mise en service – Figure 21](/img/konfiguration-inbetriebnahme/21.png)

### Empêcher la détection de nouveaux appareils par la passerelle M-Bus

Comment activer l'option ?

- Sélectionner la passerelle M-Bus.


- Sélectionnez la roue dentée de la passerelle M-Bus (en haut à droite). Remarque : ne sélectionnez pas la roue dentée supérieure, qui sert à la configuration des compteurs, mais la roue dentée inférieure.

- Modifier (Bearbeiten)

- Cocher la case "Don't allow to add additional meters".

- Enregistrer (Speichern)


Quel est l'effet de cette option ?

- L'activation de l'option "Don't allow to add additional meters" empêche l'enregistrement d'appareils qui ne sont pas encore présents dans le cloud. 


À quoi faut-il faire attention ?

- Si de nouveaux appareils sont ajoutés, cette option doit être désactivée avant la recherche.


Quand cette option est-elle recommandée ?

- Lorsque des appareils M-Bus qui n'existent pas apparaissent régulièrement dans le portail.

- À titre préventif :-)


Dans quels cas cela peut-il se produire ?

- En cas d'erreurs de transmission des données. Cela arrive plus souvent lorsque le câble M-Bus est trop long et que la qualité de la transmission des données diminue de ce fait, ou lorsque le câble est mal blindé ou exposé à des perturbations externes.


Explication technique

- Le protocole M-Bus standardisé ne dispose que d'1 byte pour la somme de contrôle. La somme de contrôle est destinée à détecter certaines erreurs dans la transmission des données. Malheureusement, 1 byte est peu et peut régulièrement conduire à ce qu'un paquet de données erroné soit considéré comme correct et valide. Dans certaines installations utilisant des passerelles M-Bus, il arrive ainsi régulièrement que des paquets corrompus soient classés comme corrects et valides, puis détectés et ajoutés comme nouvel appareil M-Bus dans notre cloud. Le compte passe alors de Professional à Basic, car la couverture des licences n'est plus garantie.


![Mise en service – Figure 22](/img/konfiguration-inbetriebnahme/22.png)

## Borne de recharge Pico

### Vérifier la connexion WLAN

Après l'installation de la Pico, un symbole apparaît dans le coin supérieur droit, qui indique le type de connexion.

Si la Pico doit être connectée au WLAN, il est conseillé de vérifier brièvement que l'icône correspond à un symbole WLAN et non à 4G. 

Si 4G apparaît alors que la Pico devrait être connectée au WLAN, il faut réinstaller la Pico. Cela peut arriver si une étape de l'installation n'a pas été effectuée correctement, p. ex. le mot de passe WLAN.

![Mise en service – Figure 23](/img/konfiguration-inbetriebnahme/23.png)

### Configuration Pico & gestion de la charge

[Configuration Pico](/konfiguration/inbetriebnahme/pico-konfiguration) 

[Gestion de la charge multiniveau](/konfiguration/multilevel-lastmanagement) 

![Mise en service – Figure 24](/img/konfiguration-inbetriebnahme/23.png)

## Trucs et astuces

### Mettre en service plusieurs appareils

À cette étape, vous avez la possibilité de mettre en service plusieurs compteurs simultanément afin d'accélérer la mise en service lorsque les compteurs sont nombreux.



![Mise en service – Figure 25](/img/konfiguration-inbetriebnahme/10.jpg)

### Se déconnecter

1.  En haut à gauche, sur les trois traits, puis choisir Profil (Profil)

2.  En bas, sélectionner Se déconnecter (Ausloggen)

3.  Déconnecté


![Mise en service – Figure 26](/img/konfiguration-inbetriebnahme/26.jpg)

![Mise en service – Figure 27](/img/konfiguration-inbetriebnahme/27.jpg)

### Échec de l'installation

Si l'installation échoue et que vous souhaitez réessayer, veuillez fermer complètement l'application, puis la rouvrir. Cela garantit qu'aucune information mise en mémoire tampon (cache) n'est utilisée.

## Étape suivante

[Continuer vers la configuration des dossiers et des compteurs](/konfiguration/ordnerkonfiguration)

## FAQ

### Le fournisseur d'accès Internet change, que dois-je faire ?

Si les compteurs sont connectés à un WLAN technique et/ou à un point d'accès dédié, le SSID et le mot de passe ne changent généralement pas. Un changement de fournisseur d'accès Internet ne pose alors généralement aucun problème.

Si le SSID et le mot de passe d'un WLAN privé sont utilisés, il existe deux possibilités :

- Solution 1 : créer sur le nouveau routeur un WLAN invité ayant le même SSID et le même mot de passe que l'ancien. Les compteurs se connectent ensuite automatiquement à ce WLAN, qui est identique à l'ancien.

- Solution 2 : réenregistrer chaque compteur individuellement afin que les nouvelles données soient enregistrées localement sur chaque compteur. L'installation se déroule exactement comme une nouvelle installation. Le  compteur ne doit en aucun cas être supprimé, sinon toutes les données historiques seront perdues . Lors d'une nouvelle installation, notre environnement cloud détecte que le numéro de série existe déjà dans le compte et ajoute simplement les nouvelles valeurs.


### Comment redémarrer un appareil (reboot) ?

Tous les appareils peuvent être redémarrés par une coupure de courant.

Compteur triphasé : appuyer simultanément sur T1 et T2 pendant 10 secondes.

Pico : dans le portail, en haut à droite, choisir la roue dentée, Actions avancées (erweiterte Aktionen), Redémarrage (Neustart). Fonctionne uniquement si la Pico est en ligne.

Module Kamstrup : retirer le module du compteur, attendre 10 secondes et le réinsérer.

Passerelle M-Bus et compteur monophasé : ces appareils ne peuvent être redémarrés que par une coupure de courant.

### Puis-je utiliser mon appareil avec plusieurs réseaux WiFi ?

Oui, l'appareil smart-me (sauf la [borne de recharge Pico](/produkte/pico-ladestation)) enregistre jusqu'à 3 réseaux WiFi différents. Il vous suffit de l'installer une fois sur chaque réseau ; l'appareil choisit ensuite toujours automatiquement le réseau offrant la meilleure liaison radio.

### Puis-je remettre le relevé du compteur à zéro ?

Non, nos compteurs étant utilisés pour des décomptes, il n'est pas possible de les remettre à zéro.

### Où le mot de passe WiFi est-il enregistré ?

Le mot de passe WiFi est enregistré exclusivement sur l'appareil smart-me et n'est jamais transmis à un serveur 

### Les réglages et les relevés du compteur sont-ils conservés en cas de coupure de courant ?

Oui, l'appareil enregistre tous les réglages et toutes les valeurs en cas de coupure de courant. Dès que l'alimentation électrique est rétablie, l'appareil se reconnecte automatiquement au WiFi et revient à l'état précédant la coupure. 

### Comment enregistrer un nouveau WiFi sans perdre les données existantes ?

Pour ajouter un autre réseau, l'appareil doit être installé correctement avec l'application smart-me. S'il n'a pas été supprimé du cloud au préalable, les données énergétiques et les paramètres de configuration sont conservés.



### Les informations WiFi enregistrées peuvent-elles être supprimées ?

Les informations WiFi sont enregistrées uniquement sur l'appareil. La suppression des données peut être effectuée comme suit :

- Appuyer pendant 10 s sur le bouton de l'appareil smart-me. Pour la Pico, la carte RFID doit être présentée au plus tard 15 minutes après le redémarrage (mise hors tension).

- Établir une connexion avec le WiFi smart-me à l'aide d'un smartphone (le nom du réseau WiFi est smart-me\_XXXXXX, où X correspond au numéro de série de l'appareil smart-me)

- Établir une connexion avec l'IP 192.168.1.1 à l'aide d'un navigateur.

- Sélectionner le WLAN indésirable, appuyer sur remove et redémarrer l'appareil.


### Comment trouver l'adresse MAC de mon appareil smart-me ?

Il n'existe aucun moyen direct de trouver l'adresse MAC\. Si vous disposez d'une licence Professional, vous pouvez activer DNS dans les paramètres avancés de l'appareil smart-me et choisir l'option IP interne (Interne IP). L'IP peut être déterminée avec un ping sur le nom DNS ; elle peut ensuite être comparée avec la table IP / MAC du routeur

### Le réseau maillé (mesh) peut-il être désactivé ?

Les compteurs triphasés Telstar et Telstar CT créent un réseau maillé (mesh). Celui-ci ne peut pas être désactivé.

### Puis-je transférer un appareil d'un compte smart-me à un autre ?

- Les données historiques ne peuvent pas être transférées. 

- L'appareil peut toutefois être installé dans un autre compte au moyen d'une nouvelle installation.


### Avec quel relevé du compteur un compteur smart-me est-il livré ?

0

### Que se passe-t-il si je désactive un compteur ?

Toutes les données déjà enregistrées dans le cloud sont conservées. Après la désactivation, plus aucune donnée n'est enregistrée. Aucun frais de licence n'est facturé pour les compteurs désactivés.

### Un proxy peut-il être configuré sur les appareils smart-me ?

Non
