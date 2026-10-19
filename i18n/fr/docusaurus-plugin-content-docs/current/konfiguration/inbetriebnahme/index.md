---
title: 'Mise en service'
slug: '/konfiguration/inbetriebnahme'
description: 'Tout ce qui concerne la mise en service des appareils smart-me : les points à respecter lors de la mise en service, les sources d''erreur fréquentes et des réponses spécifiques aux questions d''installation.'
sidebar_label: 'Mise en service'
---
Tout ce qui concerne la mise en service des appareils smart-me : les points à respecter lors de la mise en service, les sources d'erreur fréquentes et des réponses spécifiques aux questions d'installation.

[Mise en service LoRa](/konfiguration/inbetriebnahme/inbetriebnahme-lora)

[Supprimer / désactiver un compteur](/konfiguration/inbetriebnahme/zaehler-loeschen)

[Continuer vers la configuration des dossiers et des compteurs](/konfiguration/ordnerkonfiguration)

## Préparation

Les éléments suivants doivent être disponibles avant la mise en service

## Prérequis WiFi

- WiFi 802.11 b/g/n 2.4GHz (pas de 5GHz ni de réseau combiné avec le même SSID)

- Les ports 80 UDP et 53 UDP/TCP doivent être ouverts vers l'extérieur.

- Le réseau doit disposer d'une connexion Internet.

- Le SSID ne doit pas être masqué.

- Le SSID ne prend en charge que les caractères ASCII, à l'exception de $ (Ä, Ö, Ü ne fonctionnent pas)

- Les filtres d'adresses MAC doivent être désactivés pendant l'installation. (Les adresses MAC des appareils ne peuvent être lues que par ARP)

- Le réseau doit disposer d'un serveur DHCP

- SSID max. 28 caractères

- Mot de passe max. 63 caractères

## Compte smart-me

Nous recommandons de créer un compte à l'avance et séparément pour chaque installation. Aucune licence n'est nécessaire pour la mise en service.

## Installer App

L'Installer App gratuite doit être installée sur votre smartphone et les autorisations nécessaires doivent lui être accordées.

iOS : localisation, réseau local, appareil photo

Android : localisation, appareil photo

## Outillage spécial

- Pico : une carte RFID (fournie)

- Telstar 80A, CT et M-Bus Gateway : un petit tournevis pour appuyer sur la touche T1

![Icône de la smart-me Installer App : une paire d'outils croisés sur fond bleu](/img/konfiguration-inbetriebnahme/01.png)

[App Store](https://apps.apple.com/ch/app/smart-me-installer/id6502614018)

[Play Store](https://play.google.com/store/apps/details?id=smartme.installer&hl=de_CH)

[Instructions](/konfiguration/installer-app-anleitung)

## Installation

## Guide rapide

1.  Vérifier les prérequis WiFi (voir ci-dessus)

2.  Télécharger l'application gratuite pour [Android](https://play.google.com/store/apps/details?id=smartme.installer&hl=de_CH) ou [iOS](https://apps.apple.com/ch/app/smart-me-installer/id6502614018).

3.  Accorder les autorisations à l'application

4.  Connectez votre smartphone ou votre tablette au WiFi dans lequel vous souhaitez installer l'appareil smart-me.

5.  Lancez l'application, connectez-vous avec le compte correspondant ou créez un compte.

6.  Dans le menu, vérifier avec « Diagnostic » (Diagnose) si les serveurs sont accessibles.

7.  Cliquez en bas à droite sur « Installer l'appareil » (Gerät installieren) (+)

8.  Pour une installation via WLAN, celui-ci peut être ajouté en haut.

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

     - Telstar CT : définir le rapport de transformation (sélectionner le CT / modifier / saisir le rapport de transformation)

     - M-Bus : la recherche doit être lancée via le portail web (roue dentée / « Lancer la recherche » (Suchlauf starten))

     - Kamstrup :  clé du compteur (trois roues dentées / « Clé du compteur » (Zählerschlüssel) / enregistrer)

Si l'installation échoue, veuillez suivre les instructions détaillées avec la description des erreurs.

## Instructions détaillées avec description des erreurs

<div className="row">
<div className="col col--4">

**1. Connexion WIFI**

Connectez le smartphone au même WLAN 2,4 GHz que celui dans lequel les appareils seront intégrés par la suite.

</div>
<div className="col col--4">

**2. Création / connexion**

<div className="text--center">

![Écran d'accueil de l'Installer App avec les boutons LOG IN et S'enregistrer](/img/konfiguration-inbetriebnahme/02.jpg)

</div>

</div>
<div className="col col--4">

**3. Création du compte**

<div className="text--center">

![Formulaire d'enregistrement de l'application avec e-mail, mot de passe et confirmation](/img/konfiguration-inbetriebnahme/04_EN.jpg)

</div>

**Problèmes possibles :** si l'adresse e-mail est déjà utilisée, il faut en choisir une autre.

</div>
</div>

<div className="row">
<div className="col col--4">

**4. Connexion au compte**

<div className="text--center">

![Formulaire de connexion de l'application avec e-mail et mot de passe](/img/konfiguration-inbetriebnahme/05_EN.jpg)

</div>

**Problèmes possibles :** si la connexion est impossible, vérifiez que le WLAN dispose d'une connexion Internet et que le nom d'utilisateur et le mot de passe sont corrects.

</div>
<div className="col col--4">

**5. Diagnostic**

<div className="text--center">

![Vérification WLAN avec intensité du signal, fréquence WLAN et accessibilité du serveur](/img/konfiguration-inbetriebnahme/06.png)

</div>

Cette étape est facultative. L'important est que « Serveur accessible » (Server erreichbar) soit sur *Yes*.

Si l'avertissement concernant le réseau 5 GHz apparaît, un réseau 2,4 GHz doit également être disponible. Le smartphone ne peut pas être forcé à utiliser celui-ci — c'est pourquoi il ne s'agit que d'un avertissement.

</div>
<div className="col col--4">

**6. Cliquez sur « Ajouter un appareil » (Gerät hinzufügen) (+)**

<div className="text--center">

![Liste d'appareils vide de l'application avec le bouton plus en bas à droite](/img/konfiguration-inbetriebnahme/07_EN.jpg)

</div>

</div>
</div>

<div className="row">
<div className="col col--4">

**7. Cliquez sur « Modifier » (Editieren)**

<div className="text--center">

![Liste d'appareils avec Modifier marqué en vert à côté du WLAN d'installation](/img/konfiguration-inbetriebnahme/08_EN.jpg)

</div>

**Remarque :** cette étape n'est pas nécessaire si les Picos sont mises en service via 4G.

</div>
<div className="col col--4">

**8. Saisissez le mot de passe WLAN**

<div className="text--center">

![Champ de saisie du mot de passe du WLAN d'installation](/img/konfiguration-inbetriebnahme/09_EN.jpg)

</div>

**Problèmes possibles :** si le SSID affiche `<<unknown>>`, la localisation doit être activée et le smartphone doit être connecté à un WLAN.

</div>
<div className="col col--4">

**9. Cliquez sur « Ajouter un appareil » (Gerät hinzufügen) (+)**

<div className="text--center">

![Liste d'appareils avec le WLAN d'installation défini et le bouton plus en bas à droite](/img/konfiguration-inbetriebnahme/10.jpg)

</div>

</div>
</div>

<div className="row">
<div className="col col--4">

**10. Scannez le code QR**

<div className="text--center">

![Scanner de code QR de l'application au-dessus de la plaque signalétique d'un compteur](/img/konfiguration-inbetriebnahme/11.jpg)

</div>

**Problèmes possibles :** si le code QR n'est pas reconnu, le numéro de série peut aussi être saisi manuellement.

</div>
<div className="col col--4">

**11. Connectez-vous au WLAN du compteur**

<div className="text--center">

![Liste d'appareils avec l'invite à se connecter au WLAN de l'appareil](/img/konfiguration-inbetriebnahme/12.jpg)

</div>

</div>
<div className="col col--4">

**12. Uniquement pour la Pico : « Sélectionner le type de connexion » (Verbindungsart auswählen)**

<div className="text--center">

![Boîte de dialogue Type de connexion avec les boutons WLAN et MOBILE](/img/konfiguration-inbetriebnahme/13.jpg)

</div>

</div>
</div>

<div className="row">
<div className="col col--4">

**13. Appuyer sur la touche T1 ou scanner la carte RFID**

<div className="text--center">

![Instructions avec un dessin montrant qu'il faut maintenir la touche T1 de l'appareil enfoncée](/img/konfiguration-inbetriebnahme/14_EN.jpg)

</div>

**Remarque pour la Pico :** pour chaque Pico, vous disposez de 15 minutes pour terminer l'installation. Ensuite, la Pico doit être redémarrée et la procédure recommencée depuis le début.

</div>
<div className="col col--4">

**14. Attendre que la connexion soit établie**

<div className="text--center">

![Liste d'appareils avec le message vert Réussi](/img/konfiguration-inbetriebnahme/15.jpg)

</div>

</div>
</div>

## Réglage spécifique à l'appareil

## Telstar CT

### Définir le rapport de transformation

<div className="row">
<div className="col col--8">

- Sélectionner le compteur CT et le modifier 

- Saisir le rapport de transformation 

- Le rapport de transformation peut être verrouillé. Cela sert de protection contre les modifications involontaires par des personnes non autorisées. Pour pouvoir déverrouiller le rapport de transformation,  l'appareil doit être réinstallé avec l'application smart-me.

</div>
<div className="col col--4 text--center">

![Détails de l'appareil dans l'application avec le facteur de transformation 200:5 et l'interrupteur « Verrouiller le facteur de transformation » (Wandlerfaktor sperren)](/img/konfiguration-inbetriebnahme/16_EN.jpg)

</div>
</div>

### Remarque :

Le rapport de transformation ne modifie pas les données historiques. Cette étape doit donc être effectuée immédiatement après la mise en service.

## M-Bus Gateway / Sirius

### Instructions pour les deux M-Bus Gateways

Étapes d'installation du matériel :

1.  Installer l'appareil (câbler le M-Bus, mettre sous tension)

2.  Terminer l'installation à l'aide de l'application conformément aux instructions.
    (Lier le matériel au WLAN et au compte cible. WLAN 2.4GHz)

3.  Sous Configuration, dans l'application ou sur l'ordinateur, lancer la  « recherche automatique » (automatischen Suchlauf) afin de trouver les appareils.

La mise en service des compteurs de chaleur et des compteurs d'eau continue en revanche d'être effectuée par le fournisseur (p. ex. Neovac, Ista, GWF, Techem, etc.). Le plus souvent, ces entreprises raccordent pour cela leur propre maître M-Bus dans le local technique afin de vérifier que les compteurs arrivent bien sur le M-Bus.

Un procès-verbal de mise en service est ensuite établi, et ce n'est qu'après que notre M-Bus Gateway est à nouveau raccordé.

Avec les documents correspondants, les compteurs peuvent ensuite être attribués aux bons appartements dans le cloud smart-me et la configuration peut être finalisée.

Voici les informations nécessaires

- Liste de tous les compteurs installés

- Adresse M-Bus (nous n'avons besoin que de l'adresse secondaire, l'adresse primaire n'est pas pertinente pour nous)

- Appartenance à l'appartement (désignation de l'appartement)

- Type de compteur (chaleur, eau chaude sanitaire ou eau froide, etc.)

Important : l'adresse secondaire doit être unique par compte smart-me ; en outre, pour les compteurs combinés chaleur/froid, la combinaison des 4 derniers chiffres doit être unique dans le compte. Le plus simple est d'utiliser le numéro de série de l'appareil.

Résultat de la recherche automatique

![Résultat de la recherche dans le portail : statut, dernière connexion et liste de 19 compteurs trouvés avec leur adresse secondaire](/img/konfiguration-inbetriebnahme/17.png)

Création automatique des compteurs après la recherche
(nécessite quelques minutes)

![Arborescence des compteurs d'un appartement avec les entrées froid, électricité, chaleur et eau chaude sanitaire](/img/konfiguration-inbetriebnahme/18.png)

### Numérotation des compteurs combinés

Le M-Bus Gateway ne reconnaît à chaque fois qu'un seul compteur à l'aide de l'adresse secondaire, qui figure généralement aussi sur le procès-verbal de réception.

Les compteurs combinés sont ensuite affichés séparément sur le portail. Pour cette application, smart-me utilise sa propre logique de numérotation.

Tous les compteurs non pertinents pour le décompte peuvent être [désactivés](/konfiguration/inbetriebnahme/zaehler-loeschen) afin d'économiser des frais de licence. La suppression n'est pas utile, car le compteur réapparaît sans cesse.

Si un compteur contient plus d'un compteur, ceux-ci sont numérotés comme suit :

- Compteur principal = adresse secondaire figurant dans la liste du M-Bus Gateway (p. ex. 71440145)

- Autres compteurs = adresse secondaire du compteur principal, dont les 1 ou 2 premiers chiffres sont supprimés (p. ex. 7) et à la fin de laquelle un chiffre est incrémenté (p. ex. 14401451,14401452).

- Sous-compteurs = ils contiennent les quatre derniers chiffres du compteur principal (p. ex. 0145) et un numéro d'énumération à quatre chiffres à la fin (p. ex. 01450001)

Remarque concernant les 0 en tête : si un compteur a par exemple le numéro 1000017, les 0 en tête ne sont pas pris en compte après la troncature, p. ex. 000017, et sont ajoutés à la fin, p. ex. 1700001

![Compteur unique trouvé « Heat 71440145 » avec son adressage](/img/konfiguration-inbetriebnahme/19.png)

![Quatre compteurs d'un compteur combiné : deux fois Cold, une fois Heat et une fois Water](/img/konfiguration-inbetriebnahme/20.png)

### M-Bus Gateway : rechercher des appareils

Les autres configurations doivent être effectuées dans le portail web

Modifier

- Modifier l'intervalle. Le M-Bus nécessite 10 secondes par appareil pour la lecture.

Lancer la recherche d'appareils sur le M-Bus Gateway

1.  En haut à droite, sur l'icône de la roue dentée (paramètres) 

2.  « Rechercher des appareils » (Geräte suchen)

3.  Confirmer la recherche avec « Oui » (Ja)

Remarque : la recherche peut durer plusieurs minutes.

Le gateway ne trouve pas tous les compteurs

- Relancez la recherche  (1 à 2 fois). Il se peut que le compteur ne soit pas toujours trouvé lors de la première recherche.

- Vous trouverez d'autres causes sur la page [Pannes du M-Bus Gateway](/stoerungsbehebung/mbus-gateway-stoerungen) 

Le gateway trouve plus de compteurs que ceux installés

- Le plus souvent pendant la mise en service : selon le compteur M-Bus, celui-ci peut créer plusieurs sous-compteurs. On les reconnaît au fait que le numéro de série est décalé d'une position vers la gauche, suivi d'un nombre croissant commençant par 1. Ex. : compteur principal 00200001, sous-compteur 02000011

- Vous trouverez d'autres causes sur la page [Pannes du M-Bus Gateway](/stoerungsbehebung/mbus-gateway-stoerungen) 

![Menu du M-Bus Gateway dans le portail avec le bouton « Rechercher des appareils » (Geräte suchen) mis en évidence en vert](/img/konfiguration-inbetriebnahme/21.png)

### M-Bus Gateway : empêcher la détection de nouveaux appareils

Comment activer l'option ?

- Sélectionner le M-Bus Gateway.

- Choisissez la roue dentée du M-Bus Gateway (en haut à droite). Remarque : ne choisissez pas la roue dentée supérieure, qui sert à la configuration des compteurs, mais celle du bas.

- « Modifier » (Bearbeiten)

- Cocher la case « Don't allow to add additional meters ».

- « Enregistrer » (Speichern)

Quel est l'effet de cette option ?

- L'activation de l'option « Don't allow to add additional meters » empêche l'enregistrement des appareils qui ne sont pas encore présents dans le cloud. 

À quoi faut-il faire attention ?

- Lorsque de nouveaux appareils sont ajoutés, cette option doit être désactivée avant la recherche.

Quand cette option est-elle recommandée ?

- Lorsque des appareils M-Bus qui n'existent pas apparaissent régulièrement dans le portail.

- À titre préventif :-)

Dans quels cas cela peut-il se produire ?

- En cas d'erreurs de transmission des données. Cela arrive plus souvent lorsque le câble M-Bus est trop long et que la qualité de la transmission des données diminue, ou lorsque le câble est mal blindé ou exposé à des perturbations externes.

Explication technique

- Le protocole M-Bus standardisé ne dispose que d'1 byte pour la somme de contrôle. La somme de contrôle sert à détecter certaines erreurs de transmission des données. Malheureusement, 1 byte est peu, ce qui peut régulièrement conduire à ce qu'un paquet de données erroné soit considéré comme correct et valable. Dans certaines installations utilisant des M-Bus Gateways, il arrive ainsi régulièrement que des paquets corrompus soient classés comme corrects et valables, puis détectés et ajoutés dans notre cloud comme nouvel appareil M-Bus. Le compte passe alors de Professional à Basic, car la couverture des licences n'est plus assurée.

![Paramètres du M-Bus Gateway avec la case « Don't allow to add additional meters » cochée et le bouton Enregistrer](/img/konfiguration-inbetriebnahme/22.png)

## Borne de recharge Pico

### Vérifier la connexion WLAN

Après l'installation de la Pico, une icône apparaît dans le coin supérieur droit et indique le type de connexion.

Si la Pico doit être connectée au WLAN, il est conseillé de vérifier rapidement que l'icône correspond à un symbole WLAN et non à la 4G. 

Si la 4G apparaît alors que la Pico doit être connectée au WLAN, il faut réinstaller la Pico. Cela peut se produire lorsqu'une étape de l'installation n'a pas été effectuée correctement, p. ex. le mot de passe WLAN.

![Affichage d'état d'une borne de recharge Pico dans le portail avec le symbole WLAN marqué en rouge](/img/konfiguration-inbetriebnahme/23.png)

### Configuration Pico & gestion de la charge

[Configuration Pico](/konfiguration/inbetriebnahme/pico-konfiguration) 

[Gestion de la charge multiniveau](/konfiguration/multilevel-lastmanagement) 

![Affichage d'état d'une borne de recharge Pico dans le portail avec le symbole WLAN marqué en rouge](/img/konfiguration-inbetriebnahme/23.png)

## Trucs et astuces

### Mettre en service plusieurs appareils

<div className="row">
<div className="col col--8">

À cette étape, vous avez la possibilité de mettre en service plusieurs compteurs simultanément afin d'accélérer la mise en service lorsqu'il y a de nombreux compteurs.

</div>
<div className="col col--4 text--center">

![Liste d'appareils avec le WLAN d'installation défini et le bouton plus en bas à droite](/img/konfiguration-inbetriebnahme/10.jpg)

</div>
</div>

### Se déconnecter

<div className="row">
<div className="col col--4">

1.  En haut à gauche, sur les trois traits, puis choisir « Profil » (Profil)

2.  En bas, sélectionner « Se déconnecter » (Ausloggen)

3.  Déconnecté

</div>
<div className="col col--4 text--center">

![Menu latéral de l'application avec l'entrée Profil utilisateur marquée](/img/konfiguration-inbetriebnahme/26_EN.jpg)

</div>
<div className="col col--4 text--center">

![Page de profil de l'application avec le bouton Se déconnecter en bas](/img/konfiguration-inbetriebnahme/27_EN.jpg)

</div>
</div>

### Échec de l'installation

Si l'installation échoue et que vous souhaitez réessayer, veuillez fermer complètement l'application, puis la rouvrir. Cela garantit qu'aucune information mise en mémoire tampon (cache) n'est utilisée.

## Étape suivante

[Continuer vers la configuration des dossiers et des compteurs](/konfiguration/ordnerkonfiguration)

## FAQ

<details id="der-internetanbieter-wird-gewechselt-was-muss-ich-machen">
<summary>Le fournisseur d'accès Internet change, que dois-je faire ?</summary>

Si les compteurs sont connectés à un WLAN technique et/ou à un point d'accès dédié, le SSID et le mot de passe ne changent généralement pas. Un changement de fournisseur d'accès Internet ne pose alors en général aucun problème.

Si le SSID et le mot de passe d'un WLAN privé sont utilisés, il existe deux possibilités :

- Solution 1 : créer sur le nouveau routeur un WLAN invité ayant le même SSID et le même mot de passe que l'ancien. Les compteurs se connectent ensuite automatiquement à ce WLAN, qui est identique à l'ancien.

- Solution 2 : réenregistrer chaque compteur individuellement, afin que les nouvelles données soient enregistrées localement sur chaque compteur. L'installation se déroule exactement comme une nouvelle installation. Le  compteur ne doit en aucun cas être supprimé, sinon toutes les données historiques sont perdues . Lors d'une nouvelle installation, notre environnement cloud détecte que le numéro de série existe déjà dans le compte et ajoute simplement les nouvelles valeurs.

</details>

<details id="wie-kann-ich-ein-gerät-neu-starten-reboot">
<summary>Comment puis-je redémarrer un appareil (reboot) ?</summary>

Tous les appareils peuvent être redémarrés par une coupure de courant.

Compteurs triphasés : appuyer simultanément sur T1 et T2 pendant 10 secondes.

Pico : dans le portail, choisir en haut à droite la roue dentée, « Actions avancées » (erweiterte Aktionen), « Redémarrer » (Neustart). Ne fonctionne que si la Pico est en ligne.

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

Oui, l'appareil enregistre tous les réglages et toutes les valeurs en cas de panne de courant. Dès que l'alimentation électrique est rétablie, l'appareil se connecte automatiquement au WiFi et revient à l'état précédant la panne. 

</details>

<details id="wie-kann-ich-eine-neues-wifi-hinterlegen-ohne-die-bestehenden-daten-zu-verlieren">
<summary>Comment puis-je enregistrer un nouveau WiFi sans perdre les données existantes ?</summary>

Pour ajouter un réseau supplémentaire, l'appareil doit être installé correctement avec l'application smart-me. S'il n'est pas supprimé du cloud au préalable, les données énergétiques et les paramètres de configuration sont conservés.

</details>

<details id="können-die-gespeicherten-wifi-informationen-gelöscht-werden">
<summary>Les informations WiFi enregistrées peuvent-elles être supprimées ?</summary>

Les informations WiFi sont enregistrées uniquement sur l'appareil. La suppression des données peut se faire comme suit :

- Appuyer sur le bouton de l'appareil smart-me pendant 10 s. Pour la Pico, la carte RFID doit être présentée au plus tard 15 minutes après le redémarrage (mise hors tension).

- Établir avec un smartphone une connexion au WiFi smart-me (le nom du réseau WiFi est smart-me\_XXXXXX, où X représente le numéro de série de l'appareil smart-me)

- Établir avec un navigateur une connexion à l'IP 192.168.1.1.

- Sélectionner le WLAN indésirable, appuyer sur remove et redémarrer l'appareil.

</details>

<details id="wie-finde-ich-die-mac-adresse-meines-smart-me-geräts-raus">
<summary>Comment puis-je trouver l'adresse MAC de mon appareil smart-me ?</summary>

Il n'existe aucun moyen direct de trouver l'adresse MAC\-. Si vous disposez d'une licence Professional, vous pouvez activer le DNS dans les paramètres avancés de l'appareil smart-me et choisir l'option « IP interne » (Interne IP). Un ping sur le nom DNS permet de déterminer l'IP, qui peut ensuite être comparée avec la table IP / MAC du routeur

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

Toutes les données déjà enregistrées dans le cloud sont conservées. Après la désactivation, plus aucune donnée n'est enregistrée. Aucuns frais de licence ne sont facturés pour les compteurs désactivés.

</details>

<details id="kann-auf-den-smart-me-geräten-ein-proxy-konfiguriert-werden">
<summary>Un proxy peut-il être configuré sur les appareils smart-me ?</summary>

Non

</details>
