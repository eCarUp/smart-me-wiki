---
title: 'Interruption de communication Pico via 4G'
slug: '/news/status/pico-4g-ausfall'
description: 'Mise à jour du statut 16.01.2026 14h45'
sidebar_label: 'Interruption de communication Pico via 4G'
---
## Mise à jour du statut 16.01.2026 14h45

Nous devons malheureusement vous informer que quelques bornes de recharge sont encore concernées par la panne des cartes SIM 1nce (fournisseur des cartes).

Comme une résolution de la panne par le fournisseur externe n'est pas réaliste, nous avons agi de manière proactive afin de mettre à votre disposition une solution fiable.

Il existe une faible possibilité que la borne de recharge soit de nouveau en ligne pendant la nuit, c'est-à-dire à partir du 17.01.2025 6h00. La probabilité que cela se produise n'est pas claire et est considérée comme faible selon l'état actuel des connaissances.

## Résolution du problème

Quand faut-il l'appliquer

Si la borne est actuellement toujours hors ligne et n'est pas connectée à un réseau WLAN temporaire.

Solution 1 : mettre la borne en ligne via WLAN ou hotspot avec l'Installer App, puis effectuer une mise à jour du firmware.

Solution 2 : mettre la borne en ligne via WLAN ou hotspot sans l'Installer App, puis effectuer une mise à jour du firmware. (Ce n'est pas possible avec certains modèles de smartphone)

Solution 3 : vous envoyez la borne de recharge Pico à smart-me AG, RMA-Pico-4G, Riedstrasse 18, 6343 Rotkreuz. Nous effectuons une mise à jour du firmware et vous renvoyons la Pico. Veuillez ajouter RMA-Pico-4G à l'adresse pour une résolution plus rapide du problème. Avec cette procédure, les données de configuration ne sont pas perdues. Si vous nous envoyez une pico, veuillez envoyer le numéro de suivi de la Poste à [support@smart-me.com](mailto:support@smart-me.com).

Solution 4 : vous remplissez un RMA et nous envoyons au préalable une Pico équivalente. Utilisez la description d'erreur « Pico Offline 4G » dans le formulaire. [https://dok.smart-me.com/rma-antragsformulare](/rma-antragsformulare). Avec cette procédure, la nouvelle Pico doit être reconfigurée.



### Description de la solution 1 : mettre la borne en ligne via WLAN ou hotspot avec l'Installer App, puis effectuer une mise à jour du firmware.

Conditions générales

- Nous recommandons de faire exécuter ces étapes par un partenaire smart-me.

- Un réseau WLAN temporaire doit être créé sur place. (p. ex. WLAN, routeur LTE ou hotspot de smartphone).

- Un smartphone est nécessaire pour l'installation. Si un hotspot est créé avec le smartphone pour l'installation, deux smartphones sont nécessaires.

- Les données d'accès au compte doivent être connues, car la connexion de l'appareil doit impérativement être établie avec le compte smart-me existant.

- L'installation doit être effectuée avec l'Installer App de smart-me. [Mode d'emploi de l'Installer App](/konfiguration/installer-app-anleitung)  

- Une carte RFID doit être disponible pour activer le mode d'installation.

- La borne de recharge doit pouvoir être mise hors tension. Soit par les fusibles, soit en la dévissant brièvement.


Procédure

Connecter la Pico au WLAN temporaire.

- Mettre à disposition un WLAN temporaire. Le WLAN temporaire ne doit pas contenir les caractères tels que ä, ö, ü et $. Les caractères de a à z et de A à Z, de 0 à 9, -, \_ ou un espace sont autorisés sans autre.

    - Caractères autorisés : la SSID ne prend en charge que les caractères ASCII, à l'exclusion du caractère $.  [Lien vers Wikipédia](https://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange) 

    - Info sur le hotspot IOS : sous IOS, le hotspot est créé avec le nom du smartphone. Si le nom du smartphone est modifié, le nom du hotspot change également.

- Pour qu'une installation puisse être effectuée, la borne de recharge doit être mise hors tension. La connexion au WLAN temporaire doit ensuite être établie dans les 15 minutes, sinon le mode d'installation n'est plus actif.

- Si la borne reste noire pendant au moins 5 minutes après avoir été mise hors tension ou reste bloquée sur HI, un RMA doit être rempli. Voir solution 4.

- Important pour l'étape suivante : l'installation doit être effectuée dans le compte dans lequel la Pico est actuellement hors ligne.

- Effectuer l'installation avec l'Installer App de smart-me. [Mode d'emploi de l'Installer App](/konfiguration/installer-app-anleitung).

    - Si à l'étape 5 la SSID n'apparaît pas mais p. ex. &lt;&lt;unknown>>, la localisation doit être activée et l'app doit pouvoir y accéder.

    - Si à l'étape 6 l'app ne réagit pas correctement, la caméra doit être explicitement activée dans les autorisations, dans les réglages.

    - Si l'app vient d'être réinstallée, cela peut parfois ne pas fonctionner la première fois ; il faut alors fermer l'app et la rouvrir.

- Après l'installation, la borne devrait être de nouveau en ligne.


Effectuer la mise à jour de la Pico. 

- Se connecter à la plateforme smart-me avec un navigateur : [https://portalweb.smart-me.com/Login](https://portalweb.smart-me.com/Login) 

- Ouvrir le lien [https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx).

- Rechercher la borne et effectuer l'« update communication ». Lorsque la version la plus récente est installée, celle-ci est 0.0.36 ou 0.0.37

- Laisser la fenêtre ouverte pour suivre la progression. 

- Attendre que ce soit terminé, cela peut prendre jusqu'à 30 minutes.

- Lorsque les installations sur les picos sont terminées, le WLAN temporaire peut être désactivé et les bornes de recharge se reconnectent au 4G dans les 5 minutes


Procédure en cas de plusieurs bornes sur le même site

- Restriction avec un hotspot de smartphone : la plupart des smartphones ne prennent en charge que 5 appareils pouvant se connecter simultanément au smartphone. Une installation avec un hotspot de smartphone n'est donc possible que pour 5 appareils au maximum simultanément.

- Il vaut alors mieux commencer par connecter toutes les bornes au WLAN temporaire


- Dans un deuxième temps, il vaut mieux ouvrir plusieurs fois le lien ([https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx)) pour la mise à jour de la Pico afin d'effectuer les mises à jour simultanément.


### Description de la solution 2 : mettre la borne en ligne via WLAN ou hotspot sans l'Installer App, puis effectuer une mise à jour du firmware.

Pour qui la solution 2 est-elle préférable à la solution 1.

- Elle est parfois un peu plus rapide pour les personnes techniquement à l'aise.

- Si vous n'êtes pas sûr, veuillez appliquer la solution 1.


Conditions générales

- Nous recommandons de faire exécuter ces étapes par un partenaire smart-me.

- Un réseau WLAN temporaire doit être créé sur place. (p. ex. WLAN, routeur LTE ou hotspot de smartphone).

- Un smartphone est nécessaire pour l'installation. Si un hotspot est créé avec le smartphone pour l'installation, deux smartphones sont nécessaires.

- Les données d'accès au compte doivent être connues.

- Une carte RFID doit être disponible pour activer le mode d'installation.

- La borne de recharge doit pouvoir être mise hors tension. Soit par les fusibles, soit en la dévissant brièvement.


Procédure

Écrire la connexion WLAN sur la Pico.

- Mettre à disposition un WLAN temporaire. (Peut aussi n'être mis à disposition qu'à la dernière étape avant la mise à jour, si un seul smartphone est disponible) Le WLAN temporaire ne doit pas contenir les caractères tels que ä, ö, ü et $. Les caractères de a à z et de A à Z, de 0 à 9, -, \_ ou un espace sont autorisés sans autre.

    - Caractères autorisés : la SSID ne prend en charge que les caractères ASCII, à l'exclusion du caractère $.  Lien vers Wikipédia 

    - Info sur le hotspot IOS : sous IOS, le hotspot est créé avec le nom du smartphone. Si le nom du smartphone est modifié, le nom du hotspot change également.

- Pour qu'une installation puisse être effectuée, la borne de recharge doit être mise hors tension. La connexion au WLAN temporaire doit ensuite être établie dans les 15 minutes, sinon le mode d'installation n'est plus actif.

- Si la borne reste noire pendant au moins 5 minutes après avoir été mise hors tension ou reste bloquée sur HI, un RMA doit être rempli. Voir solution 4.

- Présenter la carte RFID pour que le mode d'installation démarre.

- Se connecter au WLAN de la Pico, p. ex. smart-me\_7002222

- Attendre 30 secondes et vérifier si une fenêtre pop-up apparaît sur le smartphone, indiquant qu'il faut confirmer le maintien de la connexion, même si cette connexion ne dispose d'aucune connexion Internet.

- Aller sur 192.198.1.1 avec le navigateur.

    - Sur certains smartphones, la 4G doit être désactivée pour cette étape.

- Inscrire la SSID et le mot de passe

- Choisir Add Profile

- Choisir Reboot

- Après la configuration, la borne devrait revenir en ligne.


Effectuer la mise à jour de la Pico. 

- Se connecter à la plateforme smart-me avec un navigateur : [https://portalweb.smart-me.com/Login](https://portalweb.smart-me.com/Login) 

- Ouvrir le lien [https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx).

- Rechercher la borne et effectuer l'« update communication ». Lorsque la version la plus récente est installée, celle-ci est 0.0.36 ou 0.0.37

- Laisser la fenêtre ouverte pour suivre la progression. 

- Attendre que ce soit terminé, cela peut prendre jusqu'à 30 minutes.

- Lorsque les installations sur les picos sont terminées, le WLAN temporaire peut être désactivé et les bornes de recharge se reconnectent au 4G dans les 5 minutes


Procédure en cas de plusieurs bornes sur le même site

- Restriction avec un hotspot de smartphone : la plupart des smartphones ne prennent en charge que 5 appareils pouvant se connecter simultanément au smartphone. Une installation avec un hotspot de smartphone n'est donc possible que pour 5 appareils au maximum simultanément.

- Il vaut alors mieux commencer par connecter toutes les bornes au WLAN temporaire


- Dans un deuxième temps, il vaut mieux ouvrir plusieurs fois le lien ([https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx)) pour la mise à jour de la Pico afin d'effectuer les mises à jour simultanément.
