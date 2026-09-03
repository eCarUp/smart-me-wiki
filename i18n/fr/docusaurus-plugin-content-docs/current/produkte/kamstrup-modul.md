---
title: 'Module Kamstrup'
slug: '/produkte/kamstrup-modul'
description: 'Module smart-me pour l''interface client du compteur Kamstrup Omnipower.'
sidebar_label: 'Module Kamstrup'
---
Module smart-me pour l'interface client du compteur Kamstrup Omnipower.

Le module smart-me Kamstrup connecte les compteurs d'électricité au cloud. Vos clients bénéficient d'analyses précises, de visualisations et d'un monitoring exact de leur propre consommation d'énergie. Aucun matériel supplémentaire n'est nécessaire. Le module smart-me Kamstrup utilise le réseau WiFi existant et se connecte directement au cloud smart-me.

Information de fin de commercialisation envoyée en Suisse le 08.08.2023 (réseau de partenaires).

La vente en Suisse est arrêtée au 31.12.2023, le support et la prise en charge par le cloud restent assurés.

La vente en dehors de la Suisse a été arrêtée le 1.1.2023, le support et la prise en charge par le cloud restent assurés.

![Module Kamstrup – illustration 1](/img/produkte-kamstrup-modul/01.jpg)

## Séquences LED du module Kamstrup avec description des erreurs

La plupart des sources d'erreur lors de l'installation d'un module Kamstrup peuvent être identifiées grâce à la séquence des LED :

Chapitres

[00:06](https://www.youtube.com/watch?v=CwS65mPsTws&t=6s) Les LED ne s'allument pas

[00:18](https://www.youtube.com/watch?v=CwS65mPsTws&t=18s) Le réseau WLAN n'est pas créé

[00:59](https://www.youtube.com/watch?v=CwS65mPsTws&t=59s) LED clignotant rapidement

[01:14](https://www.youtube.com/watch?v=CwS65mPsTws&t=74s) LED en chenillard

<Embed src="https://player.vimeo.com/video/688374505" aspect="1.601" title="Module Kamstrup" />

## Fonctions

- Différents diagrammes et évaluations

- Mise à jour du firmware en ligne

- Enregistreur de données intégré pour un mois

- Utilisable comme capteur pour la commande d'appareils

- Connexion WLAN chiffrée directement vers le cloud smart-me

- Visualisation en temps réel de la puissance, du relevé du compteur, de la tension et du courant dans l'app et sur le web. Sans licence Pro, l'intervalle de lecture est limité à 60 secondes.

- Gestion complète de l'énergie : facturation automatique, commande, optimisation et alarmes

- [Installation](/konfiguration/inbetriebnahme) simple avec l'app smart-me pour [Android](https://play.google.com/store/apps/details?id=com.smart_me) et [iOS](https://apps.apple.com/ch/app/smart-me/id929146952?ign-mpt=uo%3D4)

- Modbus TCP à partir de la version de firmware 8.0 (Info : sans connexion Internet permanente, le module ne peut pas non plus offrir une communication Modbus stable) 


### Comment puis-je régler le facteur de correction dans le cloud ?

Pour régler le facteur de correction d'un module ou d'un compteur, veuillez procéder comme suit :

1.  Connecte-toi au portail smart-me 

2.  Clique sur configurer (konfigurieren)

3.  Clique sur configuration des compteurs/dossiers (Zähler/Ordner-Konfiguration)

4.  Sélectionne le compteur correspondant

5.  Clique sur éditer le nœud (Knoten editieren) (bouton vert en haut)

6.  Saisis la valeur de correction sous correction de valeur (Wert Korrektur). (Attention : uniquement sous correction de valeur (Wert Korrektur), pas sous correction de valeur du dossier parent (Überordner Wert Korrektur))

7.  Appuie sur enregistrer (Speichern).


### Déchiffrement du module Kamstrup

[Tutoriel vidéo](https://www.youtube.com/watch?v=bYoq9a142t8)

1.  En haut à droite sur le symbole de la roue dentée (paramètres / Einstellungen) 

2.  Éditer (Editieren) 

3.  Saisir la clé du compteur (Zählerschlüssel)


Attention : le module Kamstrup a besoin du code de chiffrement du compteur pour pouvoir lire les données. Seul le fournisseur d'électricité en dispose.

### Comment le facteur de correction est-il calculé ?

1.  Attention : ce texte ne se réfère pas au rapport de transformation du Telstar CT, mais au facteur de correction dans la configuration des compteurs/dossiers. Le facteur de correction est principalement nécessaire lors de l'utilisation de compteurs Kamstrup en combinaison avec des transformateurs de courant. 

2.  Exemple avec transformateur de courant 600:5 :
    Si un transformateur de courant avec un rapport de 600:5 est utilisé, la valeur doit être adaptée d'un facteur de 600 : 5 = 120. Le facteur de correction doit être indiqué en pourcentage dans le cloud smart-me. Il en résulte donc un facteur de correction de 120 \* 100 % = 12'000 %

3.  Exemple avec transformateur de courant 600:5 et préréglage du compteur Kamstrup sur 100:5 :
    Les compteurs Kamstrup ont parfois un rapport de transformation préréglé de 100:5. Si un transformateur de courant avec un rapport de 600:5 est raccordé à ce compteur, le facteur de correction se calcule comme suit :
    Facteur de correction du compteur Kamstrup : 100 : 5 = 20
    Facteur de correction pour le transformateur de courant : 600 : 5 = 120
    Facteur de correction total : 120 / 20 = 6
    Facteur de correction total en pourcentage : 6 \* 100 % = 600 %
    Dans ce cas, il faudrait donc régler un facteur de correction de 600 % dans le portail smart-me. 


### À quelle fréquence les données sont-elles transmises

Cela peut être réglé manuellement pour chaque appareil. 

- L'intervalle peut être abaissé jusqu'à 1 seconde.


Voici comment procéder au réglage

- Connexion

- Sélectionner le compteur

- Roue dentée en haut à droite

- Paramètres généraux (Allgemeine Einstellungen)

- Régler l'intervalle d'envoi (&lt;60 secondes uniquement avec smart-me Professional)

- Enregistrer les paramètres


## Compteur hors ligne

- Le numéro de série commence par 92\* : Kamstrup


Des informations générales se trouvent sous [Compteur hors ligne](/stoerungsbehebung/zaehler-offline).

Les indications spécifiques aux compteurs se trouvent ici

### Redémarrer le compteur

- Ceci est uniquement à titre d'information sur la manière de procéder.

- Déroulement : retirer le module du compteur. Attendre qu'aucune LED ne soit plus allumée. Réinsérer le module dans le compteur.


### Comment reconnaître l'état de réception d'un compteur

- Connecté au WLAN : la LED orange à gauche et la LED verte à droite sont allumées en permanence.

- Ne parvient pas à se connecter au WLAN : to be defined

- Le compteur crée un WLAN local : la LED orange à gauche est allumée en permanence et. La LED rouge au milieu et la LED verte à droite s'allument en alternance à un rythme de 0.5 seconde.


### Vérification à la réception

Les points suivants peuvent être vérifiés à la réception. Si quelque chose a déjà été fait sur le compteur, il est important que rien ne soit fait sur le compteur pendant au moins 5 minutes. Il est également possible de demander au client sur place une vidéo du compteur (30 secondes) afin de mieux évaluer la situation.

- Vérifier l'état à l'aide de la vidéo : [https://www.youtube.com/watch?v=CwS65mPsTws](https://www.youtube.com/watch?v=CwS65mPsTws) ou [https://vimeo.com/688374505](https://vimeo.com/688374505)

    - Chapitre : [00:06](https://www.youtube.com/watch?v=CwS65mPsTws&t=6s) Les LED ne s'allument pas

    - Chapitre : [00:18](https://www.youtube.com/watch?v=CwS65mPsTws&t=18s) Le réseau WLAN n'est pas créé

    - Chapitre : [00:59](https://www.youtube.com/watch?v=CwS65mPsTws&t=59s) LED clignotant rapidement

    - Chapitre : [01:14](https://www.youtube.com/watch?v=CwS65mPsTws&t=74s) LED en chenillard


## Modifier l'intervalle d'envoi

- se connecter au portail smart-me

- sélectionner le compteur

- sélectionner la roue dentée en haut à droite

- Paramètres généraux (Allgemeine Einstellungen)


![Module Kamstrup – illustration 2](/img/produkte-kamstrup-modul/02.png)

## Produit successeur

smart-me ne propose pas de produit successeur pour les compteurs Kamstrup. 

Si tu exploites un RCP (regroupement dans le cadre de la consommation propre) smart-me (Suisse uniquement) et que tu as besoin d'une nouvelle solution pour ta mesure (p. ex. coffret de raccordement), n'hésite pas à nous contacter : nous proposons à nos [partenaires de projet](https://web.smart-me.com/projektpartner/) des conditions avantageuses pour le remplacement. (Offre spéciale valable jusqu'au 30.06.2025)

Si des mesures sont effectuées dans le domaine privé pour le monitoring, la domotique, etc., le [Telstar 80A](/produkte/telstar) ou le [Telstar CT](/produkte/Telstar-CT) peut être installé à tout moment. Si tu cherches une solution avec ton compteur Kamstrup existant, nous te recommandons de jeter un œil à cette page. [https://gplug.ch/](https://gplug.ch/) (Réserve gPlug : concernant le module smart-me Kamstrup, il faut noter qu'une fonction non documentée de l'interface client (CII) est utilisée. Le gPlugK utilise en revanche la CII publiée officiellement. Il peut donc arriver que le gPlugK ne fonctionne pas sur un Omnipower, alors que le produit smart-me fonctionne avec celui-ci. Ce problème peut parfois être résolu par une modification de la configuration à distance effectuée par le gestionnaire de réseau de distribution (GRD).

## Clé de compteur non valide (CKW)



Problème

- Le module Kamstrup est hors ligne avec le message d'erreur Clé de compteur non valide (Ungültiger Zähler Schlüssel)


Solution

La cause du problème est connue depuis le 14.5.2025 13:43 : dans le cadre d'une maintenance du système de CKW, toutes les clés des compteurs Kamstrup ont été renouvelées par erreur et les précédentes rendues non valides.

Comme solution, tu dois envoyer un e-mail à CKW à l'adresse [messtechnik@ckw.ch](mailto:messtechnik@ckw.ch) avec le numéro du compteur (voir image en bas à droite). CKW t'envoie ensuite une nouvelle clé.

![Module Kamstrup – illustration 3](/img/produkte-kamstrup-modul/03.png)

![Module Kamstrup – illustration 4](/img/produkte-kamstrup-modul/04.png)

## Téléchargements

Fiche technique

[Anglais](https://docs.google.com/presentation/d/1MZwOPzxvFGYc0ABwUGkdSa5Ay1NUlRRAXrMTlrBY5lw/export/pdf)

Documents techniques

[Quick Starter Guide](https://docs.google.com/document/d/1cS5WRL6pkD0gkrZ0FGVVKKvnGc2-kHdcpS_A88SyPlA/export?format=pdf)

## FAQ

### À quel intervalle les compteurs envoient-ils des données ?

- Toutes les 15 minutes, donc à xx:00:00 xx:15:00, xx:30:00 et xx:45:00. Les données nécessaires à la courbe de charge sont ainsi envoyées. En cas d'interruption de la connexion, ces données sont enregistrées localement et envoyées ultérieurement.

- Une configuration individuelle peut en outre être effectuée :

    - Avec les licences Basic ou Limited : max. 1x par minute.

    - Avec une licence Pro : max. 1x par seconde
