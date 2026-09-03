---
title: 'Pico Display'
slug: '/produkte/pico-ladestation/pico-display'
description: 'Cette page décrit le comportement de l''écran du Pico.'
sidebar_label: 'Pico Display'
---
Cette page décrit le comportement de l'écran du Pico.

![Pico Display – Illustration 1](/img/produkte-pico-ladestation-pico-display/01.png)

[Borne de recharge Pico](/produkte/pico-ladestation)

[Accessoires Pico](/produkte/pico-ladestation/pico-zubehör)

## Écran

La description de l'affichage est valable pour toutes les [versions de firmware](/konfiguration/firmware-update) à partir de 0.0.28.

### Séquence sans recharge active

![Pico Display – Illustration 2](/img/produkte-pico-ladestation-pico-display/01.png)

S'affiche lorsqu'aucun véhicule n'est connecté et qu'aucune recharge n'a lieu. Cette image peut être personnalisée

### Séquence véhicule branché en attente d'autorisation

![Pico Display – Illustration 3](/img/produkte-pico-ladestation-pico-display/03.png)

S'affiche de manière répétée lorsque le véhicule est branché, mais que la borne n'est pas encore autorisée dans le backend.

![Pico Display – Illustration 4](/img/produkte-pico-ladestation-pico-display/04.png)

S'affiche de manière répétée lorsque le véhicule est branché, mais que la borne n'est pas encore autorisée dans le backend.



### Séquence authentification par CarID (Pico Online)

![Pico Display – Illustration 5](/img/produkte-pico-ladestation-pico-display/05.png)

S'affiche lorsque le véhicule est branché et que la Car-ID est vérifiée.

![Pico Display – Illustration 6](/img/produkte-pico-ladestation-pico-display/06.png)

S'affiche lorsque le véhicule n'est pas autorisé ou que la Car-ID n'est pas enregistrée dans le compte conducteur eCarUp. Ensuite, la Pico passe à la « Séquence véhicule branché en attente d'autorisation »

![Pico Display – Illustration 7](/img/produkte-pico-ladestation-pico-display/07.png)

S'affiche lorsque le véhicule est autorisé. Ensuite, la Pico passe à la « Séquence recharge active ».

### Séquence authentification par RFID (Pico Online)

![Pico Display – Illustration 8](/img/produkte-pico-ladestation-pico-display/08.png)

La carte RFID est contrôlée. Si la connexion est très bonne, il se peut que le texte ne s'affiche pas du tout.

![Pico Display – Illustration 9](/img/produkte-pico-ladestation-pico-display/09.png)

S'affiche lorsque la RFID est autorisée.

![Pico Display – Illustration 10](/img/produkte-pico-ladestation-pico-display/10.png)

S'affiche lorsque l'autorisation RFID a réussi et qu'aucun véhicule n'est branché. Si un véhicule est branché, cet affichage est ignoré et la Pico passe à la « Séquence recharge active ».

![Pico Display – Illustration 11](/img/produkte-pico-ladestation-pico-display/11.png)

S'affiche lorsque la RFID n'est pas autorisée. Ensuite, la Pico passe à la « Séquence véhicule branché en attente d'autorisation » ou à la « Séquence sans recharge active ».



### Séquence authentification par code QR (Pico Online)

![Pico Display – Illustration 12](/img/produkte-pico-ladestation-pico-display/12.png)

La recharge a été autorisée avec succès par code QR.

![Pico Display – Illustration 13](/img/produkte-pico-ladestation-pico-display/10.png)

S'affiche lorsque l'autorisation a réussi et qu'aucun véhicule n'est branché. Si un véhicule est branché, cet affichage est ignoré et la Pico passe à la « Séquence recharge active ».

### Séquence démarrage de la recharge

![Pico Display – Illustration 14](/img/produkte-pico-ladestation-pico-display/14.png)

 Valeur / Symbole Description

6A Courant de recharge minimum



![Pico Display – Illustration 15](/img/produkte-pico-ladestation-pico-display/15.png)

Valeur / Symbole Description

32A Courant de recharge max. admissible 



Lorsque le courant de recharge maximal est augmenté par la borne, cette image s'affiche brièvement avec le nouveau courant de recharge max.

### Séquence recharge active

![Pico Display – Illustration 16](/img/produkte-pico-ladestation-pico-display/16.png)

Valeur / Symbole Description

0.59 Consommation depuis le début de la recharge

kWh Unité de la consommation affichée

Batterie Aucune signification

![Pico Display – Illustration 17](/img/produkte-pico-ladestation-pico-display/17.png)

Valeur / Symbole Description

22.09.23 Date

15:18:43 Début de la recharge

00:05:13 Durée de la recharge active

![Pico Display – Illustration 18](/img/produkte-pico-ladestation-pico-display/18.png)

Valeur / Symbole Description

1.81 Puissance 

kW Unité de la puissance affichée

….. bleu = puissance max. autorisée par la borne (1 pixel = 1A) 

 vert = soutirage de courant par le véhicule par phase. (1 pixel = 1A)

### Séquence fin de la recharge

![Pico Display – Illustration 19](/img/produkte-pico-ladestation-pico-display/19.png)

Valeur / Symbole Description

32A Courant max. admissible 

Lorsque le courant de recharge maximal est réduit par la borne, cette image s'affiche brièvement avec le nouveau courant de recharge max.

![Pico Display – Illustration 20](/img/produkte-pico-ladestation-pico-display/20.png)

Valeur / Symbole Description

6A Courant de recharge minimum



![Pico Display – Illustration 21](/img/produkte-pico-ladestation-pico-display/21.png)

Valeur / Symbole Description

BYE Déconnexion réussie

![Pico Display – Illustration 22](/img/produkte-pico-ladestation-pico-display/22.png)

Valeur / Symbole Description

0.59 Consommation totale de la dernière recharge

 kWh Unité de la consommation affichée

Après la déconnexion, la consommation totale de la dernière recharge s'affiche pendant env. 14 s. 

### Séquence redémarrage de la borne

Cette séquence décrit le redémarrage d'une borne via le portail

![Pico Display – Illustration 23](/img/produkte-pico-ladestation-pico-display/21.png)

Valeur / Symbole Description

BYE Signal pour le redémarrage

![Pico Display – Illustration 24](/img/produkte-pico-ladestation-pico-display/22.png)

Valeur / Symbole Description

0.59 Consommation totale de la dernière recharge

kWh Unité de la consommation affichée

![Pico Display – Illustration 25](/img/produkte-pico-ladestation-pico-display/25.png)

L'écran reste noir pendant env. 20 s.

![Pico Display – Illustration 26](/img/produkte-pico-ladestation-pico-display/26.png)

C'est le premier signe que la Pico démarre.

Après la séquence de redémarrage de la borne, la Pico passe à la séquence MID Mode



### Messages de dérangement et avertissements

![Pico Display – Illustration 27](/img/produkte-pico-ladestation-pico-display/27.png)

Dérangement fatal

- Erreur 1 : problème avec le module Wlan

- Erreur 2 : nous n'avons pas de communication M4

- Erreur 3 : une erreur avec le Meter SOM

- Erreur 4 : problème avec le capteur RDC


![Pico Display – Illustration 28](/img/produkte-pico-ladestation-pico-display/28.png)

SIM Error

- Problème au niveau de la SIM


![Pico Display – Illustration 29](/img/produkte-pico-ladestation-pico-display/29.png)

Diode Error

- La diode dans le véhicule n'est pas correcte. Vérifiez le câble de recharge ainsi que la connexion au véhicule 


![Pico Display – Illustration 30](/img/produkte-pico-ladestation-pico-display/30.png)

Cable Error

- Le câble de recharge signale une erreur. Vérifiez qu'il est correctement branché. 


![Pico Display – Illustration 31](/img/produkte-pico-ladestation-pico-display/31.png)

P Limit

- Le délestage est actif. La puissance de recharge a été réduite. 




![Pico Display – Illustration 32](/img/produkte-pico-ladestation-pico-display/32.png)

Warn RDC

- Le RDC-DD 6mA selon la norme IEC 62955 (dispositif de détection de courant continu de défaut) s'est déclenché. La recharge a été interrompue pour des raisons de sécurité. 


![Pico Display – Illustration 33](/img/produkte-pico-ladestation-pico-display/33.png)

Offline

- La borne de recharge n'a pas de connexion au cloud smart-me. 





![Pico Display – Illustration 34](/img/produkte-pico-ladestation-pico-display/34.png)

La LED s'allume en orange/rouge dans le coin supérieur droit de l'écran

- Indication d'un message d'erreur. Au plus tard après 30 secondes, l'image d'erreur (p. ex. Cable Error) s'affiche à l'écran.




### MID Mode

Pour accéder au mode MID, on peut cliquer sur « Afficher le relevé du compteur à l'écran » (Zählerstand auf Display anzeigen) via l'action avancée dans le portail smart-me, démarrer ou redémarrer la borne, ou passer par le capteur de luminosité.

Avec une lampe de poche dirigée sur le capteur de luminosité, l'utilisateur peut faire clignoter le code suivant : sombre - clair - sombre - clair - sombre (chaque état doit durer entre 1 et 5 secondes)

![Pico Display – Illustration 35](/img/produkte-pico-ladestation-pico-display/35.png)

Valeur / Symbole Description

Point Capteur de lumière

![Pico Display – Illustration 36](/img/produkte-pico-ladestation-pico-display/36.png)

Valeur / Symbole Description
M MID-Mode actif

0.2.1 Version et somme de contrôle selon le code Obis

v 2.2 Numéro de version du firmware

CRC 4F55 Somme de contrôle du firmware

![Pico Display – Illustration 37](/img/produkte-pico-ladestation-pico-display/37.png)

Valeur / Symbole Description
M   MID-Mode actif

F.F.0   Code Obis

03   Code d'erreur

Ne s'affiche que lorsqu'un message d'erreur est présent. 

Code d'erreur Description

x1-x3 : la borne de recharge n'est pas étalonnée
x4 : erreur du processus d'affichage (somme de contrôle)

1x : erreur dans le Meter-SOM (matériel)

2x-3x : erreur Meter-SOM (somme de contrôle)

4x : erreur Meter-SOM (Flash) Autres : erreur générale Meter-SOM 

![Pico Display – Illustration 38](/img/produkte-pico-ladestation-pico-display/38.png)

Valeur / Symbole Description
M MID-Mode actif

1.8.0 Code Obis

00013.04 kWh Le relevé du compteur en kWh avec 2 décimales.
