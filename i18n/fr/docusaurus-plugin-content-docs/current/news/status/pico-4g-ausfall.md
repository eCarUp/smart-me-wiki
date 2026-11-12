---
title: 'Interruption de communication Pico via 4G'
slug: '/news/status/pico-4g-ausfall'
description: 'Mise à jour du statut 16.01.2026 14h45'
sidebar_label: 'Interruption de communication Pico via 4G'
---
## Mise à jour du statut 16.01.2026 14h45

Nous avons malheureusement le regret de vous informer que quelques bornes de recharge sont encore touchées par la panne des cartes SIM 1nce (fournisseur de cartes). 

Comme une résolution de la panne par le fournisseur externe n'est pas réaliste, nous avons agi de manière proactive afin de vous proposer une solution fiable.

Il existe une faible possibilité que la borne de recharge soit de nouveau en ligne pendant la nuit, c'est-à-dire à partir du 17.01.2025 6h00. La probabilité que cela se produise n'est pas claire et, selon l'état actuel des connaissances, elle est estimée comme faible.

## Résolution du problème

Quand l'appliquer

Si la borne est toujours hors ligne et n'est pas connectée à un réseau WLAN temporaire.

Solution 1 : Mettre la borne en ligne via un WLAN ou un hotspot avec l'Installer App, puis effectuer une mise à jour du firmware. 

Solution 2 : Mettre la borne en ligne via un WLAN ou un hotspot sans l'Installer App, puis effectuer une mise à jour du firmware. (N'est pas possible avec certains modèles de smartphone)

Solution 3 : Vous envoyez la borne de recharge Pico à smart-me AG, RMA-Pico-4G, Riedstrasse 18, 6343 Rotkreuz. Nous effectuons une mise à jour du firmware et vous renvoyons la Pico. Veuillez ajouter RMA-Pico-4G à l'adresse afin que le problème puisse être résolu plus rapidement. Avec cette procédure, les données de configuration ne sont pas perdues. Si vous nous envoyez une Pico, veuillez envoyer le numéro de suivi de la Poste à [support@smart-me.com](mailto:support@smart-me.com).

Solution 4 : Vous remplissez une demande RMA et nous vous envoyons au préalable une Pico équivalente. Dans le formulaire, utilisez la description d'erreur "Pico Offline 4G". [https://dok.smart-me.com/rma-antragsformulare](/rma-antragsformular-schweiz). Avec cette procédure, la nouvelle Pico doit être reconfigurée.



### Description de la solution 1 : Mettre la borne en ligne via un WLAN ou un hotspot avec l'Installer App, puis effectuer une mise à jour du firmware.

Conditions préalables

- Nous recommandons de faire effectuer ces étapes par un partenaire smart-me.

- Un réseau WLAN temporaire doit être créé sur place. (p. ex. WLAN, routeur LTE ou hotspot de smartphone).

- Un smartphone est nécessaire pour l'installation. Si un hotspot est créé avec le smartphone pour l'installation, deux smartphones sont nécessaires.

- Les identifiants du compte doivent être connus, car l'appareil doit impérativement être connecté au compte smart-me existant.

- L'installation doit être effectuée avec l'Installer App smart-me. [Instructions Installer App](/konfiguration/inbetriebnahme/smart-me-geraete)  

- Une carte RFID doit être disponible pour activer le mode d'installation.

- Il doit être possible de mettre la borne de recharge hors tension, soit via les fusibles, soit en la dévissant brièvement.


Procédure

Connecter la Pico au WLAN temporaire.

- Mettre à disposition un WLAN temporaire. Le WLAN temporaire ne doit pas contenir de caractères tels que ä, ö, ü et $. Les caractères de a à z et de A à Z, de 0 à 9, -, \_ ou un espace sont autorisés sans restriction. 

    - Caractères autorisés : le SSID ne prend en charge que les caractères ASCII, à l'exception du caractère $.  [Lien vers Wikipédia](https://de.wikipedia.org/wiki/American_Standard_Code_for_Information_Interchange) 

    - Info sur le hotspot iOS : sous iOS, le hotspot est créé avec le nom du smartphone. Si le nom du smartphone est modifié, le nom du hotspot change également.

- Pour pouvoir effectuer une installation, la borne de recharge doit être mise hors tension. La connexion au WLAN temporaire doit ensuite être établie dans les 15 minutes, faute de quoi le mode d'installation n'est plus actif. 

- Si, après la mise hors tension, la borne reste noire pendant au moins 5 minutes ou reste bloquée sur HI, une demande RMA doit être remplie. Voir la solution 4.

- Important pour l'étape suivante : l'installation doit être effectuée dans le compte dans lequel la Pico est actuellement hors ligne.

- Effectuer l'installation avec l'Installer App smart-me. [Instructions Installer App](/konfiguration/inbetriebnahme/smart-me-geraete).

    - Si, à l'étape 5, le SSID n'apparaît pas mais qu'apparaît p. ex. &lt;&lt;unknown>>, la localisation doit être activée et l'application doit pouvoir y accéder.

    - Si, à l'étape 6, l'application ne réagit pas correctement, la caméra doit être explicitement activée dans les autorisations, dans les paramètres.

    - Si l'application vient d'être réinstallée, il se peut que cela ne fonctionne pas la première fois ; dans ce cas, veuillez fermer puis rouvrir l'application.

- Après l'installation, la borne devrait être de nouveau en ligne.


Effectuer la mise à jour de la Pico. 

- Se connecter à la plateforme smart-me avec un navigateur : [https://portalweb.smart-me.com/Login](https://portalweb.smart-me.com/Login) 

- Ouvrir le lien [https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx).

- Rechercher la borne et exécuter "update communication". Une fois la version la plus récente installée, celle-ci est 0.0.36 ou 0.0.37

- Laisser la fenêtre ouverte pour suivre la progression. 

- Attendre la fin de l'opération, ce qui peut prendre jusqu'à 30 minutes.

- Lorsque les installations sur les Pico sont terminées, le WLAN temporaire peut être désactivé et les bornes de recharge se reconnectent à la 4G dans les 5 minutes


Procédure pour plusieurs bornes sur le même site

- Restriction avec un hotspot de smartphone : la plupart des smartphones ne prennent en charge que 5 appareils connectés simultanément. Une installation avec un hotspot de smartphone n'est donc possible que pour 5 appareils au maximum en même temps.

- Il est alors préférable de connecter d'abord toutes les bornes au WLAN temporaire


- Il est ensuite préférable, dans un deuxième temps, pour la mise à jour des Pico, d'ouvrir plusieurs fois le lien ([https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx)) afin d'effectuer les mises à jour simultanément.


### Description de la solution 2 : Mettre la borne en ligne via un WLAN ou un hotspot sans l'Installer App, puis effectuer une mise à jour du firmware.

Pour qui la solution 2 est-elle préférable à la solution 1.

- Selon les cas, un peu plus rapide pour les personnes ayant de bonnes connaissances techniques.

- En cas de doute, veuillez appliquer la solution 1.


Conditions préalables

- Nous recommandons de faire effectuer ces étapes par un partenaire smart-me.

- Un réseau WLAN temporaire doit être créé sur place. (p. ex. WLAN, routeur LTE ou hotspot de smartphone).

- Un smartphone est nécessaire pour l'installation. Si un hotspot est créé avec le smartphone pour l'installation, deux smartphones sont nécessaires.

- Les identifiants du compte doivent être connus.

- Une carte RFID doit être disponible pour activer le mode d'installation.

- Il doit être possible de mettre la borne de recharge hors tension, soit via les fusibles, soit en la dévissant brièvement.


Procédure

Enregistrer la connexion WLAN sur la Pico.

- Mettre à disposition un WLAN temporaire. (Peut aussi n'être mis à disposition qu'à la dernière étape avant la mise à jour si un seul smartphone est disponible) Le WLAN temporaire ne doit pas contenir de caractères tels que ä, ö, ü et $. Les caractères de a à z et de A à Z, de 0 à 9, -, \_ ou un espace sont autorisés sans restriction. 

    - Caractères autorisés : le SSID ne prend en charge que les caractères ASCII, à l'exception du caractère $.  Lien vers Wikipédia 

    - Info sur le hotspot iOS : sous iOS, le hotspot est créé avec le nom du smartphone. Si le nom du smartphone est modifié, le nom du hotspot change également.

- Pour pouvoir effectuer une installation, la borne de recharge doit être mise hors tension. La connexion au WLAN temporaire doit ensuite être établie dans les 15 minutes, faute de quoi le mode d'installation n'est plus actif. 

- Si, après la mise hors tension, la borne reste noire pendant au moins 5 minutes ou reste bloquée sur HI, une demande RMA doit être remplie. Voir la solution 4.

- Présenter la carte RFID pour démarrer le mode d'installation.

- Se connecter au WLAN de la Pico, p. ex. smart-me\_7002222

- Attendre 30 secondes et vérifier si une fenêtre pop-up apparaît sur le smartphone demandant de confirmer le maintien de la connexion, même si celle-ci ne dispose pas de connexion Internet.

- Avec le navigateur, aller sur 192.198.1.1.

    - Sur certains smartphones, la 4G doit être désactivée pour cette étape.

- Saisir le SSID et le mot de passe

- Sélectionner Add Profile

- Sélectionner Reboot

- Après la configuration, la borne devrait être de nouveau en ligne.


Effectuer la mise à jour de la Pico. 

- Se connecter à la plateforme smart-me avec un navigateur : [https://portalweb.smart-me.com/Login](https://portalweb.smart-me.com/Login) 

- Ouvrir le lien [https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx).

- Rechercher la borne et exécuter "update communication". Une fois la version la plus récente installée, celle-ci est 0.0.36 ou 0.0.37

- Laisser la fenêtre ouverte pour suivre la progression. 

- Attendre la fin de l'opération, ce qui peut prendre jusqu'à 30 minutes.

- Lorsque les installations sur les Pico sont terminées, le WLAN temporaire peut être désactivé et les bornes de recharge se reconnectent à la 4G dans les 5 minutes


Procédure pour plusieurs bornes sur le même site

- Restriction avec un hotspot de smartphone : la plupart des smartphones ne prennent en charge que 5 appareils connectés simultanément. Une installation avec un hotspot de smartphone n'est donc possible que pour 5 appareils au maximum en même temps.

- Il est alors préférable de connecter d'abord toutes les bornes au WLAN temporaire


- Il est ensuite préférable, dans un deuxième temps, pour la mise à jour des Pico, d'ouvrir plusieurs fois le lien ([https://webforms.smart-me.com/Connect/DeviceOverview.aspx](https://webforms.smart-me.com/Connect/DeviceOverview.aspx)) afin d'effectuer les mises à jour simultanément.
