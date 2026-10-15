---
title: 'Module Kamstrup'
slug: '/produkte/kamstrup-modul'
description: 'Module smart-me pour l''interface client du compteur Kamstrup Omnipower.'
sidebar_label: 'Module Kamstrup'
displayed_sidebar: wikiSidebar
---
Module smart-me pour l'interface client du compteur Kamstrup Omnipower.

Le module Kamstrup smart-me connecte les compteurs électriques au cloud. Vos clients obtiennent des analyses précises, des visualisations et un monitoring détaillé de leur propre consommation d'énergie. Aucun matériel supplémentaire n'est nécessaire. Le module Kamstrup smart-me utilise le réseau WiFi existant et se connecte directement au cloud smart-me.

Information de fin de commercialisation en Suisse envoyée le 08.08.2023 (réseau de partenaires).

La vente en Suisse est arrêtée au 31.12.2023 ; le support et l'assistance cloud restent assurés.

La vente hors de Suisse a été arrêtée le 1.1.2023 ; le support et l'assistance cloud restent assurés.

![Module Kamstrup – illustration 1](/img/produkte-kamstrup-modul/01.jpg)

## Séquences LED du module Kamstrup avec description des erreurs

La plupart des sources d'erreur lors de l'installation d'un module Kamstrup peuvent être identifiées à l'aide de la séquence LED :

Chapitres

[00:06](https://www.youtube.com/watch?v=CwS65mPsTws&t=6s) Les LED ne s'allument pas

[00:18](https://www.youtube.com/watch?v=CwS65mPsTws&t=18s) Le WLAN n'est pas créé

[00:59](https://www.youtube.com/watch?v=CwS65mPsTws&t=59s) LED clignotant rapidement

[01:14](https://www.youtube.com/watch?v=CwS65mPsTws&t=74s) LED en chenillard

<Embed src="https://player.vimeo.com/video/688374505" aspect="1.601" title="smart-me Wiki DE - Module Kamstrup" />

## Fonctions

- Différents diagrammes et analyses

- Mise à jour du firmware en ligne

- Enregistreur de données intégré pour un mois

- Utilisable comme capteur pour la commande d'appareils

- Connexion WLAN chiffrée directement vers le cloud smart-me

- Visualisation en temps réel de la puissance, du relevé du compteur, de la tension et du courant dans l'app et sur le web. Sans licence Pro, l'intervalle de lecture est limité à 60 secondes.

- Gestion complète de l'énergie : facturation automatique, commande, optimisation et alarmes

- [Installation](/konfiguration/inbetriebnahme) simple avec l'app smart-me pour [Android](https://play.google.com/store/apps/details?id=com.smart_me) et [iOS](https://apps.apple.com/ch/app/smart-me/id929146952?ign-mpt=uo%3D4)

- Modbus-TCP à partir de la version de firmware 8.0 (info : sans connexion Internet permanente, le module ne peut pas non plus offrir de communication Modbus stable) 


### Comment régler le facteur de correction dans le cloud ?

Pour régler le facteur de correction d'un module ou d'un compteur, procédez comme suit :

1.  Connectez-vous au portail smart-me 

2.  Cliquez sur Configurer (konfigurieren)

3.  Cliquez sur Configuration des compteurs/dossiers (Zähler/Ordner-Konfiguration)

4.  Sélectionnez le compteur concerné

5.  Cliquez sur Modifier le nœud (Knoten editieren) (bouton vert en haut)

6.  Saisissez la valeur de correction sous Correction de valeur (Wert Korrektur). (Attention : uniquement sous Correction de valeur (Wert Korrektur), pas sous Correction de valeur du dossier parent (Überordner Wert Korrektur))

7.  Cliquez sur Enregistrer (Speichern).


### Déchiffrement du module Kamstrup

[Tutoriel vidéo](https://www.youtube.com/watch?v=bYoq9a142t8)

1.  En haut à droite, sur l'icône de roue dentée (Paramètres (Einstellungen)) 

2.  Modifier (Editieren) 

3.  Saisir la clé du compteur (Zählerschlüssel)


Attention : le module Kamstrup a besoin du code PIN de chiffrement du compteur pour pouvoir lire les données. Seul le fournisseur d'électricité en dispose.

### Comment le facteur de correction est-il calculé ?

1.  Attention : ce texte ne concerne pas le rapport de transformation du Telstar CT, mais le facteur de correction dans la configuration des compteurs/dossiers. Le facteur de correction est principalement nécessaire lors de l'utilisation de compteurs Kamstrup en combinaison avec des transformateurs de courant. 

2.  Exemple avec transformateur de courant 600:5 :
    Si un transformateur de courant avec un rapport de 600:5 est utilisé, la valeur doit être ajustée d'un facteur de 600 : 5 = 120. Le facteur de correction doit être indiqué en pourcentage dans le cloud smart-me. On obtient donc un facteur de correction de 120 \* 100 % = 12'000 %

3.  Exemple avec transformateur de courant 600:5 et préréglage du compteur Kamstrup à 100:5 :
    Certains compteurs Kamstrup ont un rapport de transformation préréglé de 100:5. Si un transformateur de courant avec un rapport de 600:5 est raccordé à ce compteur, le facteur de correction se calcule comme suit :
    Facteur de correction du compteur Kamstrup : 100 : 5 = 20
    Facteur de correction pour le transformateur de courant : 600 : 5 = 120
    Facteur de correction total : 120 / 20 = 6
    Facteur de correction total en pourcentage : 6 \* 100 % = 600 %
    Dans ce cas, il faudrait donc régler un facteur de correction de 600 % dans le portail smart-me. 


### À quelle fréquence les données sont-elles transmises

Cela peut être réglé manuellement pour chaque appareil. 

- L'intervalle peut être réduit jusqu'à 1 seconde.


Le réglage s'effectue comme suit

- Connexion

- Sélectionner le compteur

- Roue dentée en haut à droite

- Paramètres généraux (Allgemeine Einstellungen)

- Régler l'intervalle d'envoi (Upload-Intervall) (&lt;60 secondes uniquement possible avec smart-me Professional)

- Enregistrer les paramètres (Einstellungen speichern)


## Compteur hors ligne

- Le numéro de série commence par 92\* : Kamstrup


Vous trouverez des informations générales sous [Compteur hors ligne](/stoerungsbehebung/zaehler-offline).

Les indications spécifiques au compteur se trouvent ici

### Redémarrer le compteur

- Ceci est uniquement indiqué à titre d'information sur la procédure.

- Procédure : retirer le module du compteur. Attendre qu'aucune LED ne soit plus allumée. Réinsérer le module dans le compteur.


### Comment reconnaître l'état de réception d'un compteur

- Connecté au WLAN : la LED orange à gauche et la LED verte à droite sont allumées en permanence.

- Ne parvient pas à se connecter au WLAN : to be defined

- Le compteur crée un WLAN local : la LED orange à gauche est allumée en permanence et. La LED rouge au milieu et la LED verte à droite s'allument en alternance à une cadence de 0.5 seconde.


### Contrôle à l'arrivée

Les points suivants peuvent être contrôlés à l'arrivée. Si une intervention a déjà été effectuée sur le compteur, il est important de ne rien faire sur le compteur pendant au moins 5 minutes. Il est également possible de demander au client sur place une vidéo du compteur (30 secondes) afin de mieux évaluer la situation.

- Vérifier l'état à l'aide de la vidéo : [https://www.youtube.com/watch?v=CwS65mPsTws](https://www.youtube.com/watch?v=CwS65mPsTws) ou [https://vimeo.com/688374505](https://vimeo.com/688374505)

    - Chapitre : [00:06](https://www.youtube.com/watch?v=CwS65mPsTws&t=6s) Les LED ne s'allument pas

    - Chapitre : [00:18](https://www.youtube.com/watch?v=CwS65mPsTws&t=18s) Le WLAN n'est pas créé

    - Chapitre : [00:59](https://www.youtube.com/watch?v=CwS65mPsTws&t=59s) LED clignotant rapidement

    - Chapitre : [01:14](https://www.youtube.com/watch?v=CwS65mPsTws&t=74s) LED en chenillard


## Modifier l'intervalle d'envoi

- Se connecter au portail smart-me

- Sélectionner le compteur

- En haut à droite, sélectionner la roue dentée

- Paramètres généraux (Allgemeine Einstellungen)


![Module Kamstrup – illustration 2](/img/produkte-kamstrup-modul/02.png)

## Produit successeur

smart-me ne propose pas de produit successeur pour les compteurs Kamstrup. 

Si vous exploitez un RCP (regroupement dans le cadre de la consommation propre) smart-me (Suisse uniquement) et avez besoin d'une nouvelle solution pour votre mesure (p. ex. HAK), n'hésitez pas à nous contacter : nous offrons à nos [partenaires de projet](https://web.smart-me.com/projektpartner/) des conditions avantageuses pour le remplacement. (Offre spéciale valable jusqu'au 30.06.2025)

Si des mesures sont effectuées dans le domaine privé pour le monitoring, la domotique, etc., le [Telstar 80A](/produkte/telstar) ou le [Telstar CT](/produkte/Telstar-CT) peut être installé à tout moment. Si vous cherchez une solution avec votre compteur Kamstrup existant, nous vous recommandons de consulter cette page. [https://whatwatt.ch/de](https://whatwatt.ch/de) ou [https://gplug.ch/](https://gplug.ch/) (Réserve gPlug : avec le module Kamstrup smart-me, il faut noter qu'une fonction non documentée de l'interface client (CII) est utilisée. En revanche, le gPlugK utilise la CII publiée officiellement. Il peut donc arriver que le gPlugK ne fonctionne pas sur un Omnipower, alors que le produit smart-me fonctionne avec celui-ci. Ce problème peut en partie être résolu par une modification de la configuration à distance par le gestionnaire de réseau de distribution (GRD).

## Clé de compteur invalide (CKW)



Problème

- Le module Kamstrup est hors ligne avec le message d'erreur Clé de compteur invalide (Ungültiger Zähler Schlüssel)


Solution

La cause du problème est connue depuis le 14.5.2025 13:43 : lors d'une maintenance système de CKW, toutes les clés des compteurs Kamstrup ont été renouvelées par erreur et les précédentes sont devenues invalides.

Pour résoudre le problème, vous devez envoyer un e-mail à CKW à l'adresse [messtechnik@ckw.ch](mailto:messtechnik@ckw.ch) avec le numéro du compteur (voir l'image en bas à droite). CKW vous envoie ensuite une nouvelle clé.

![Module Kamstrup – illustration 3](/img/produkte-kamstrup-modul/03.png)

![Module Kamstrup – illustration 4](/img/produkte-kamstrup-modul/04.png)

## Téléchargements

Fiche technique

[Anglais](https://docs.google.com/presentation/d/1MZwOPzxvFGYc0ABwUGkdSa5Ay1NUlRRAXrMTlrBY5lw/export/pdf)

Documents techniques

[Quick Starter Guide](https://docs.google.com/document/d/1cS5WRL6pkD0gkrZ0FGVVKKvnGc2-kHdcpS_A88SyPlA/export?format=pdf)

## FAQ

### À quel intervalle les compteurs envoient-ils des données ?

- Toutes les 15 minutes, soit à xx:00:00 xx:15:00, xx:30:00 et xx:45:00. Les données nécessaires à la courbe de charge sont ainsi envoyées. En cas d'interruption de la connexion, ces données sont enregistrées localement et envoyées ultérieurement.

- En outre, une configuration individuelle peut être effectuée :

    - Avec les licences Basic ou Limited : max. 1x par minute.

    - Avec une licence Pro : max. 1x par seconde
