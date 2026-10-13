---
title: 'Mise en service'
slug: '/konfiguration/inbetriebnahme'
description: 'Tout sur la mise en service des appareils smart-me : points à respecter lors de la mise en service, sources d''erreur fréquentes et réponses spécifiques aux questions d''installation.'
sidebar_label: 'Mise en service'
---
Tout sur la mise en service des appareils smart-me : points à respecter lors de la mise en service, sources d'erreur fréquentes et réponses spécifiques aux questions d'installation.

[Mise en service LoRa](/konfiguration/inbetriebnahme/inbetriebnahme-lora)

[Supprimer / désactiver un compteur](/konfiguration/inbetriebnahme/zaehler-loeschen)

[Passer à la configuration des dossiers et des compteurs](/konfiguration/ordnerkonfiguration)

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

- Telstar 80A, CT et M-Bus Gateway : un petit tournevis pour appuyer sur la touche T1

![Mise en service – Illustration 1](/img/konfiguration-inbetriebnahme/01.png)

[App Store](https://apps.apple.com/ch/app/smart-me-installer/id6502614018)

[Play Store](https://play.google.com/store/apps/details?id=smartme.installer&hl=de_CH)

[Guide](/konfiguration/installer-app-anleitung)

## Installation

## Guide rapide

1.  Vérifier les exigences WiFi (voir ci-dessus)

2.  Télécharger l'application gratuite pour [Android](https://play.google.com/store/apps/details?id=smartme.installer&hl=de_CH) ou [iOS](https://apps.apple.com/ch/app/smart-me-installer/id6502614018).

3.  Accorder les autorisations à l'application

4.  Connectez votre smartphone ou votre tablette au WiFi dans lequel vous souhaitez installer l'appareil smart-me.

5.  Démarrez l'application, connectez-vous avec le compte correspondant ou créez un compte.

6.  Dans le menu, vérifier avec « Diagnostic » (Diagnose) que les serveurs sont joignables.

7.  Cliquez en bas à droite sur « Installer l'appareil » (Gerät installieren) (+)

8.  Pour une installation par WLAN, celui-ci peut être ajouté en haut.

9.  Cliquez en bas à droite sur « Ajouter un appareil » (Gerät hinzufügen) (+)

10.  Scannez le code QR

11.  Pour la Pico, choisissez si vous souhaitez utiliser le WLAN ou le réseau mobile (4G).

12.  Choisir « Se connecter au WLAN de l'appareil » (Verbinde mit WLAN des Gerätes)

13.  Appuyer sur T1 ou présenter la carte RFID. Remarque : la Pico doit être installée dans les 15 minutes suivant la mise sous tension.

14.  Choisir « WLAN quick connect »

15.  Attendez que l'invite à vous connecter à smart-me\_xxxxxx apparaisse.

16.  Attendre que l'installation soit terminée avec succès.

17.  Attribuer un nom.

18.  Réglage spécifique à l'appareil

     - Telstar CT : définir le rapport de transformation (choisir le CT / éditer / saisir le rapport de transformation)

     - M-Bus : la recherche doit être lancée via le portail web (roue dentée / lancer la recherche (Suchlauf starten))

     - Kamstrup : clé du compteur (trois roues dentées / clé du compteur (Zählerschlüssel) / enregistrer (speichern))

Si l'installation échoue, veuillez suivre le guide détaillé incluant la description des erreurs.

## Guide détaillé avec description des erreurs

![Mise en service – Illustration 2](/img/konfiguration-inbetriebnahme/02.jpg)

### 1\. Connexion WIFI

![Mise en service – Illustration 3](/img/konfiguration-inbetriebnahme/02.jpg)

### 2\. Création / connexion

![Mise en service – Illustration 4](/img/konfiguration-inbetriebnahme/04_EN.jpg)

### 3\. Création du compte

Problèmes possibles :

Si l'adresse e-mail est déjà utilisée, une autre adresse doit être utilisée.

![Mise en service – Illustration 5](/img/konfiguration-inbetriebnahme/05_EN.jpg)

### 4\. Connexion au compte

Problèmes possibles :

- Si la connexion n'est pas possible, vérifiez que le WiFi dispose d'une connexion Internet

- Si la connexion n'est pas possible, le nom d'utilisateur ou le mot de passe peut être erroné.

![Mise en service – Illustration 6](/img/konfiguration-inbetriebnahme/06.png)

### 5\. Diagnostic

Cette étape est facultative.

- Il est important que « Serveurs joignables » soit sur Yes.

- Si l'avertissement concernant le réseau 5 GHz apparaît, vous devez vous assurer qu'un réseau 2,4 GHz est également émis. Il n'est pas possible de forcer le smartphone à se connecter au réseau 2,4 GHz. C'est pourquoi cela apparaît sous forme d'avertissement.

![Mise en service – Illustration 7](/img/konfiguration-inbetriebnahme/07_EN.jpg)

### 6\. Cliquez sur « Ajouter un appareil » (Gerät hinzufügen) (+)

![Mise en service – Illustration 8](/img/konfiguration-inbetriebnahme/08_EN.jpg)

### 7\. Cliquez sur « Éditer » (Editieren)

Remarque

- Cette étape peut être ignorée si les Pico sont mises en service via la 4G.

![Mise en service – Illustration 9](/img/konfiguration-inbetriebnahme/09_EN.jpg)

### 8\. Saisissez le mot de passe WLAN

Problèmes possibles :

- Si le SSID s'affiche comme &lt;&lt;unknown>>, la localisation doit être activée et le smartphone doit être connecté à un WLAN.

![Mise en service – Illustration 10](/img/konfiguration-inbetriebnahme/10.jpg)

### 9\. Cliquez sur « Ajouter un appareil » (Gerät hinzufügen) (+)

![Mise en service – Illustration 11](/img/konfiguration-inbetriebnahme/11.jpg)

### 10\. Scannez le code QR

Problèmes possibles :

- Si le code QR n'est pas reconnu, le numéro de série peut également être saisi manuellement.

![Mise en service – Illustration 12](/img/konfiguration-inbetriebnahme/12.jpg)

### 11\. Connectez-vous au WLAN du compteur

![Mise en service – Illustration 13](/img/konfiguration-inbetriebnahme/13.jpg)

### 12\. Uniquement pour la Pico : « Choisir le type de connexion » (Verbindungsart auswählen)

![Mise en service – Illustration 14](/img/konfiguration-inbetriebnahme/14_EN.jpg)

### 13\. Appuyer sur la touche T1 ou scanner la carte RFID

Remarque concernant la Pico : notez que vous disposez de 15 minutes par Pico pour terminer le processus d'installation. Sinon, vous devez redémarrer la Pico et recommencer le processus depuis le début.

![Mise en service – Illustration 15](/img/konfiguration-inbetriebnahme/15.jpg)

### 14\. Attendre que la connexion soit établie

## Réglage spécifique à l'appareil

## Telstar CT

### Définir le rapport de transformation

- Sélectionner et éditer le compteur CT 

- Saisir le rapport de transformation 

- Le rapport de transformation peut être verrouillé. Cela protège contre des modifications involontaires par des personnes non autorisées. Pour déverrouiller le rapport de transformation, l'appareil doit être réinstallé avec l'application smart-me.

### Remarque :

Le rapport de transformation ne modifie pas les données historiques. Cette étape doit donc être effectuée immédiatement après la mise en service.

![Mise en service – Illustration 16](/img/konfiguration-inbetriebnahme/16_EN.jpg)

## M-Bus Gateway / Sirius

### Guide pour les deux M-Bus Gateways

Étapes d'installation du matériel :

1.  Installer l'appareil (câbler le M-Bus, mettre sous tension)

2.  Terminer l'installation à l'aide de l'application conformément au guide.
    (Relier le matériel au WLAN et au compte cible. WLAN 2.4GHz)

3.  Sous « Configuration » (Konfiguration) dans l'application ou sur l'ordinateur, lancer la « recherche automatique » (automatischer Suchlauf) afin de trouver les appareils.

La mise en service des compteurs de chaleur et des compteurs d'eau continue en revanche d'être effectuée par le fournisseur (p. ex. Neovac, Ista, GWF, Techem, etc.). Le plus souvent, ces entreprises raccordent à cet effet leur propre maître M-Bus dans le local technique afin de vérifier que les compteurs sont bien présents sur le M-Bus.

Un procès-verbal de mise en service est ensuite établi et ce n'est qu'après cela que notre M-Bus Gateway est à nouveau raccordée.

À l'aide des documents correspondants, les différents compteurs peuvent ensuite être attribués aux bons appartements dans le cloud smart-me et la configuration peut être terminée.

Voici les informations nécessaires

- Liste de tous les compteurs installés

- Adresse M-Bus (nous n'avons besoin que de l'adresse secondaire, l'adresse primaire n'est pas pertinente pour nous)

- Appartenance à l'appartement (désignation de l'appartement)

- Type de compteur (chaleur, eau chaude sanitaire ou eau froide, etc.)

Important : l'adresse secondaire doit être unique par compte smart-me ; de plus, pour les compteurs combinés chaleur/froid, la combinaison des 4 derniers chiffres doit être unique dans le compte. Le plus simple est d'utiliser le numéro de série de l'appareil.

Résultat de la recherche automatique

![Mise en service – Illustration 17](/img/konfiguration-inbetriebnahme/17.png)

Création automatique des compteurs après la recherche
(nécessite quelques minutes)

![Mise en service – Illustration 18](/img/konfiguration-inbetriebnahme/18.png)

### Numérotation des compteurs combinés

La M-Bus Gateway ne reconnaît à chaque fois qu'un seul compteur au moyen de l'adresse secondaire, qui figure en règle générale aussi sur le procès-verbal de réception.

Les compteurs combinés sont ensuite affichés séparément sur le portail. Pour cette application, smart-me utilise sa propre logique de numérotation.

Tous les compteurs non pertinents pour le décompte peuvent être [désactivés](/konfiguration/inbetriebnahme/zaehler-loeschen) afin d'économiser des frais de licence. La suppression n'est pas judicieuse, car le compteur réapparaît sans cesse.

Si un compteur contient plus d'un compteur, ceux-ci sont numérotés comme suit :

- Compteur principal = adresse secondaire figurant dans la liste de la M-Bus Gateway (p. ex. 71440145)

- Autres compteurs = adresse secondaire du compteur principal, dont le ou les deux premiers chiffres sont supprimés (p. ex. 7), et un chiffre est incrémenté à la fin (p. ex. 14401451, 14401452).

- Sous-compteurs = ils contiennent les quatre derniers chiffres du compteur principal (p. ex. 0145) et un numéro d'énumération à quatre chiffres à la fin (p. ex. 01450001)

Remarque concernant les 0 en tête : si un compteur porte p. ex. le numéro 1000017, les 0 en tête ne sont pas pris en compte après la troncature, donc p. ex. 000017, et un chiffre est ajouté à la fin, p. ex. 1700001

![Mise en service – Illustration 19](/img/konfiguration-inbetriebnahme/19.png)

![Mise en service – Illustration 20](/img/konfiguration-inbetriebnahme/20.png)

### M-Bus Gateway : rechercher des appareils

Les autres configurations doivent être effectuées dans le portail web

Éditer (Editieren)

- Modifier l'intervalle. Le M-Bus a besoin de 10 secondes par appareil pour la lecture.

Lancer la recherche d'appareils sur la M-Bus Gateway

1.  En haut à droite, sur le symbole de la roue dentée (Paramètres (Einstellungen)) 

2.  Rechercher des appareils (Geräte suchen)

3.  Confirmer la recherche avec « Oui » (Ja)

Remarque : la recherche peut durer plusieurs minutes.

La gateway ne trouve pas tous les compteurs

- Relancez la recherche (1 à 2 fois). Il se peut que le compteur ne soit pas toujours trouvé lors de la première recherche.

- Vous trouverez d'autres causes sur la page [Pannes de la M-Bus Gateway](/stoerungsbehebung/mbus-gateway-stoerungen) 

La gateway trouve plus de compteurs que ceux installés

- Le plus souvent pendant la mise en service : selon le compteur M-Bus, celui-ci peut créer plusieurs sous-compteurs. On les reconnaît au fait que le numéro de série est décalé d'une position vers la gauche, suivi d'un nombre croissant commençant par 1. Ex. : compteur principal 00200001, sous-compteur 02000011

- Vous trouverez d'autres causes sur la page [Pannes de la M-Bus Gateway](/stoerungsbehebung/mbus-gateway-stoerungen) 

![Mise en service – Illustration 21](/img/konfiguration-inbetriebnahme/21.png)

### M-Bus Gateway : empêcher la détection de nouveaux appareils

Comment activer l'option ?

- Sélectionner la M-Bus Gateway.

- Choisissez la roue dentée de la M-Bus Gateway (en haut à droite). Remarque : ne choisissez pas la roue dentée supérieure, qui sert à la configuration des compteurs, mais celle du bas.

- Modifier (Bearbeiten)

- Cocher la case « Don't allow to add additional meters ».

- Enregistrer (Speichern)

Quel est l'effet de cette option ?

- L'activation de l'option « Don't allow to add additional meters » empêche l'enregistrement d'appareils qui ne sont pas encore présents dans le cloud. 

À quoi faut-il faire attention ?

- Si de nouveaux appareils sont ajoutés, cette option doit être désactivée avant la recherche.

Quand cette option est-elle recommandée ?

- Lorsque des appareils M-Bus qui n'existent pas du tout apparaissent régulièrement dans le portail.

- À titre préventif :-)

Dans quels cas cela peut-il se produire ?

- En cas d'erreurs de transmission des données. Cela se produit plus souvent lorsque le câble M-Bus est trop long et que la qualité de la transmission des données diminue de ce fait, ou lorsque le câble est insuffisamment blindé ou exposé à des perturbations externes.

Explication technique

- Le protocole M-Bus standardisé ne dispose que d'1 byte pour la somme de contrôle. La somme de contrôle sert à détecter certaines erreurs dans la transmission des données. Malheureusement, 1 byte est peu et peut régulièrement conduire à ce qu'un paquet de données erroné soit considéré comme correct et valide. Dans certaines installations utilisant des M-Bus Gateways, cela conduit régulièrement à ce que des paquets corrompus soient considérés comme corrects et valides, puis détectés et ajoutés comme nouvel appareil M-Bus dans notre cloud. Le compte passe alors de Professional à Basic, car la couverture des licences n'est plus assurée.

![Mise en service – Illustration 22](/img/konfiguration-inbetriebnahme/22.png)

## Borne de recharge Pico

### Vérifier la connexion WLAN

Après l'installation de la Pico, un symbole apparaît dans le coin supérieur droit et indique le type de connexion.

Si la Pico doit être connectée au WLAN, il est conseillé de vérifier rapidement que l'icône correspond bien à un symbole WLAN et non à la 4G. 

Si la 4G apparaît alors que la Pico devrait être connectée au WLAN, la Pico doit être réinstallée. Cela peut se produire lorsqu'une étape de l'installation n'a pas été correctement effectuée, p. ex. le mot de passe WLAN.

![Mise en service – Illustration 23](/img/konfiguration-inbetriebnahme/23.png)

### Configuration de la Pico et gestion de la charge

[Configuration de la Pico](/konfiguration/inbetriebnahme/pico-konfiguration) 

[Gestion de la charge multiniveau](/konfiguration/multilevel-lastmanagement) 

![Mise en service – Illustration 24](/img/konfiguration-inbetriebnahme/23.png)

## Trucs et astuces

### Mettre en service plusieurs appareils

À cette étape, vous avez la possibilité de mettre en service plusieurs compteurs simultanément afin d'accélérer la mise en service lorsqu'il y a de nombreux compteurs.

![Mise en service – Illustration 25](/img/konfiguration-inbetriebnahme/10.jpg)

### Se déconnecter

1.  En haut à gauche, cliquer sur les trois traits et choisir « Profil » (Profil)

2.  En bas, choisir « Se déconnecter » (Ausloggen)

3.  Déconnecté

![Mise en service – Illustration 26](/img/konfiguration-inbetriebnahme/26_EN.jpg)

![Mise en service – Illustration 27](/img/konfiguration-inbetriebnahme/27_EN.jpg)

### Échec de l'installation

Si l'installation échoue et que vous souhaitez réessayer, veuillez fermer complètement l'application puis la rouvrir. Cela garantit qu'aucune information mise en mémoire tampon (cache) n'est utilisée.

## Étape suivante

[Passer à la configuration des dossiers et des compteurs](/konfiguration/ordnerkonfiguration)

## FAQ

<details id="der-internetanbieter-wird-gewechselt-was-muss-ich-machen">
<summary>Le fournisseur d'accès Internet change, que dois-je faire ?</summary>

Si les compteurs sont connectés à un WLAN technique et/ou à un point d'accès dédié, le SSID et le mot de passe ne changent en général pas. Un changement de fournisseur d'accès Internet ne pose alors en général pas de problème.

Si le SSID et le mot de passe d'un WLAN privé sont utilisés, il existe deux possibilités :

- Solution 1 : créer sur le nouveau routeur un WLAN invité ayant le même SSID et le même mot de passe que l'ancien. Les compteurs se connectent ensuite automatiquement à ce WLAN, identique à l'ancien.

- Solution 2 : réinstaller chaque compteur individuellement afin que les nouvelles données soient enregistrées localement sur chaque compteur. L'installation se déroule exactement comme une nouvelle installation. Le compteur ne doit en aucun cas être supprimé, faute de quoi toutes les données historiques seront perdues. Lors d'une nouvelle installation, notre environnement cloud reconnaît que le numéro de série est déjà présent dans le compte et ajoute simplement les nouvelles valeurs.

</details>

<details id="wie-kann-ich-ein-gerät-neu-starten-reboot">
<summary>Comment redémarrer un appareil (reboot) ?</summary>

Tous les appareils peuvent être redémarrés par une coupure de courant.

Compteurs triphasés : appuyer simultanément sur T1 et T2 pendant 10 secondes.

Pico : dans le portail, en haut à droite, choisir la roue dentée, « Actions avancées » (erweiterte Aktionen), « Redémarrage » (Neustart). Fonctionne uniquement si la Pico est en ligne.

Modules Kamstrup : retirer le module du compteur, attendre 10 secondes et le réinsérer.

M-Bus Gateway et compteurs monophasés : ces appareils ne peuvent être redémarrés que par une coupure de courant.

</details>

<details id="kann-ich-mein-gerät-mit-mehreren-wifi-netzwerken-nutzen">
<summary>Puis-je utiliser mon appareil avec plusieurs réseaux WiFi ?</summary>

Oui, l'appareil smart-me (sauf la [borne de recharge Pico](/produkte/pico-ladestation)) enregistre jusqu'à 3 réseaux WiFi différents. Il vous suffit de l'installer une fois sur chaque réseau ; l'appareil choisit ensuite toujours automatiquement le réseau offrant la meilleure liaison radio.

</details>

<details id="kann-ich-den-zählerstand-auf-null-zurücksetzten">
<summary>Puis-je remettre le relevé du compteur à zéro ?</summary>

Non, comme nos compteurs sont utilisés pour des décomptes, il n'est pas possible de les remettre à zéro.

</details>

<details id="wo-wird-das-wifi-passwort-gespeichert">
<summary>Où le mot de passe WiFi est-il enregistré ?</summary>

Le mot de passe WiFi est enregistré exclusivement sur l'appareil smart-me et n'est jamais transmis à un serveur 

</details>

<details id="werden-die-einstellungen-und-zählerstände-gespeichert-falls-der-strom-ausfällt">
<summary>Les réglages et les relevés du compteur sont-ils conservés en cas de panne de courant ?</summary>

Oui, l'appareil conserve tous les réglages et toutes les valeurs en cas de panne de courant. Dès que l'alimentation électrique est rétablie, l'appareil se reconnecte automatiquement au WiFi et revient à l'état précédant la panne. 

</details>

<details id="wie-kann-ich-eine-neues-wifi-hinterlegen-ohne-die-bestehenden-daten-zu-verlieren">
<summary>Comment enregistrer un nouveau WiFi sans perdre les données existantes ?</summary>

Pour ajouter un réseau supplémentaire, l'appareil doit être installé correctement avec l'application smart-me. S'il n'a pas été supprimé du cloud auparavant, les données énergétiques et les paramètres de configuration sont conservés.

</details>

<details id="können-die-gespeicherten-wifi-informationen-gelöscht-werden">
<summary>Les informations WiFi enregistrées peuvent-elles être supprimées ?</summary>

Les informations WiFi sont enregistrées uniquement sur l'appareil. La suppression des données s'effectue comme suit :

- Appuyer pendant 10 s sur le bouton de l'appareil smart-me. Pour la Pico, la carte RFID doit être présentée au plus tard 15 minutes après le redémarrage (mise hors tension).

- Établir une connexion au WiFi smart-me avec un smartphone (le nom du réseau WiFi est smart-me\_XXXXXX, où X correspond au numéro de série de l'appareil smart-me)

- Établir une connexion à l'IP 192.168.1.1 avec un navigateur.

- Choisir le WLAN indésirable, appuyer sur « remove » et redémarrer l'appareil.

</details>

<details id="wie-finde-ich-die-mac-adresse-meines-smart-me-geräts-raus">
<summary>Comment trouver l'adresse MAC de mon appareil smart-me ?</summary>

Il n'existe pas de moyen direct de trouver l'adresse MAC. Si vous disposez d'une licence Professional, vous pouvez activer le DNS dans les paramètres avancés de l'appareil smart-me et choisir l'option « IP interne » (Interne IP). Un ping sur le nom DNS permet de déterminer l'IP, qui peut ensuite être comparée à la table IP / MAC du routeur

</details>

<details id="kann-das-mesh-netzwerk-deaktiviert-werden">
<summary>Le réseau maillé (mesh) peut-il être désactivé ?</summary>

Les compteurs triphasés Telstar et Telstar CT créent un réseau maillé (mesh). Celui-ci ne peut pas être désactivé.

</details>

<details id="kann-ich-ein-gerät-von-einem-smart-me-konto-zu-einem-anderen-schieben">
<summary>Puis-je transférer un appareil d'un compte smart-me à un autre ?</summary>

- Les données historiques ne peuvent pas être transférées. 

- L'appareil peut toutefois être installé dans un autre compte au moyen d'une nouvelle installation.

</details>

<details id="mit-welchem-zählerstand-wird-ein-smart-me-zähler-ausgeliefert">
<summary>Avec quel relevé du compteur un compteur smart-me est-il livré ?</summary>

0

</details>

<details id="was-passiert-wenn-ich-ein-zähler-deaktiviere">
<summary>Que se passe-t-il si je désactive un compteur ?</summary>

Toutes les données déjà enregistrées dans le cloud sont conservées. Après la désactivation, plus aucune donnée n'est enregistrée. Aucun frais de licence n'est facturé pour les compteurs désactivés.

</details>

<details id="kann-auf-den-smart-me-geräten-ein-proxy-konfiguriert-werden">
<summary>Un proxy peut-il être configuré sur les appareils smart-me ?</summary>

Non

</details>
