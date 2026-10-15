---
title: 'Écran de la Pico'
slug: '/produkte/pico-ladestation/pico-display'
description: 'Cette page décrit le comportement de l''écran de la Pico.'
sidebar_label: 'Écran de la Pico'
---
Cette page décrit le comportement de l'écran de la Pico.

![Écran de la Pico – Illustration 1](/img/produkte-pico-ladestation-pico-display/01.png)

[Borne de recharge Pico](/produkte/pico-ladestation)

[Accessoires Pico](/produkte/pico-ladestation/pico-zubehör)

## Écran

La description de l'affichage s'applique à toutes les [versions du firmware](/konfiguration/firmware-update) à partir de 0.0.28.

### Séquence aucune charge active

![Écran de la Pico – Illustration 2](/img/produkte-pico-ladestation-pico-display/01.png)

S'affiche lorsqu'aucun véhicule n'est connecté et qu'aucune charge n'a lieu. Vous pouvez personnaliser cette image vous-même.

### Séquence véhicule branché en attente d'autorisation

![Écran de la Pico – Illustration 3](/img/produkte-pico-ladestation-pico-display/03.png)

S'affiche de manière répétée lorsque le véhicule est branché, mais que la borne n'a pas encore été autorisée dans le backend.

![Écran de la Pico – Illustration 4](/img/produkte-pico-ladestation-pico-display/04.png)

S'affiche de manière répétée lorsque le véhicule est branché, mais que la borne n'a pas encore été autorisée dans le backend.



### Séquence authentification par CarID (Pico en ligne)

<div className="row">
<div className="col col--7 text--center">

![Écran de la Pico – Illustration 5](/img/produkte-pico-ladestation-pico-display/05.png)

</div>
<div className="col col--5">

S'affiche lorsque le véhicule est branché et que la Car-ID est vérifiée.

</div>
</div>

![Écran de la Pico – Illustration 6](/img/produkte-pico-ladestation-pico-display/06.png)

S'affiche lorsque le véhicule n'est pas autorisé ou que la Car-ID n'est pas enregistrée dans le compte conducteur eCarUp. La Pico passe ensuite à la « Séquence véhicule branché en attente d'autorisation ».

![Écran de la Pico – Illustration 7](/img/produkte-pico-ladestation-pico-display/07.png)

S'affiche lorsque le véhicule est autorisé. La Pico passe ensuite à la « Séquence charge active ».

### Séquence authentification par RFID (Pico en ligne)

![Écran de la Pico – Illustration 8](/img/produkte-pico-ladestation-pico-display/08.png)

La carte RFID est vérifiée. Si la connexion est très bonne, il se peut que le texte ne s'affiche pas du tout.

![Écran de la Pico – Illustration 9](/img/produkte-pico-ladestation-pico-display/09.png)

S'affiche lorsque la carte RFID est autorisée.

![Écran de la Pico – Illustration 10](/img/produkte-pico-ladestation-pico-display/10.png)

S'affiche lorsque l'autorisation RFID a réussi et qu'aucun véhicule n'est branché. Si un véhicule est branché, cet affichage est ignoré et la Pico passe à la « Séquence charge active ».

![Écran de la Pico – Illustration 11](/img/produkte-pico-ladestation-pico-display/11.png)

S'affiche lorsque la carte RFID n'est pas autorisée. La Pico passe ensuite à la « Séquence véhicule branché en attente d'autorisation » ou à la « Séquence aucune charge active ».



### Séquence authentification par code QR (Pico en ligne)

![Écran de la Pico – Illustration 12](/img/produkte-pico-ladestation-pico-display/12.png)

La charge a été autorisée avec succès par code QR.

![Écran de la Pico – Illustration 13](/img/produkte-pico-ladestation-pico-display/10.png)

S'affiche lorsque l'autorisation a réussi et qu'aucun véhicule n'est branché. Si un véhicule est branché, cet affichage est ignoré et la Pico passe à la « Séquence charge active ».

### Séquence début de charge

![Écran de la Pico – Illustration 14](/img/produkte-pico-ladestation-pico-display/14.png)

 Valeur / symbole Description

6A Courant de charge minimal



![Écran de la Pico – Illustration 15](/img/produkte-pico-ladestation-pico-display/15.png)

Valeur / symbole Description

32A Courant de charge max. autorisé 



Lorsque la borne augmente le courant de charge maximal, cette image s'affiche brièvement avec le nouveau courant de charge max.

### Séquence charge active

![Écran de la Pico – Illustration 16](/img/produkte-pico-ladestation-pico-display/16.png)

Valeur / symbole Description

0.59 Consommation depuis le début de la charge

kWh Unité de la consommation affichée

Batterie Aucune signification

![Écran de la Pico – Illustration 17](/img/produkte-pico-ladestation-pico-display/17.png)

Valeur / symbole Description

22.09.23 Date

15:18:43 Début de la charge

00:05:13 Durée de la charge active

![Écran de la Pico – Illustration 18](/img/produkte-pico-ladestation-pico-display/18.png)

Valeur / symbole Description

1.81 Puissance 

kW Unité de la puissance affichée

….. bleu = puissance max. autorisée par la borne (1 pixel = 1A) 

 vert = courant soutiré par le véhicule par phase. (1 pixel = 1A)

### Séquence fin de charge

![Écran de la Pico – Illustration 19](/img/produkte-pico-ladestation-pico-display/19.png)

Valeur / symbole Description

32A Courant max. autorisé 

Lorsque la borne réduit le courant de charge maximal, cette image s'affiche brièvement avec le nouveau courant de charge max.

![Écran de la Pico – Illustration 20](/img/produkte-pico-ladestation-pico-display/20.png)

Valeur / symbole Description

6A Courant de charge minimal



![Écran de la Pico – Illustration 21](/img/produkte-pico-ladestation-pico-display/21.png)

Valeur / symbole Description

BYE Déconnexion réussie

![Écran de la Pico – Illustration 22](/img/produkte-pico-ladestation-pico-display/22.png)

Valeur / symbole Description

0.59 Consommation totale de la dernière charge

 kWh Unité de la consommation affichée

Après la déconnexion, la consommation totale de la dernière charge s'affiche pendant env. 14 s. 

### Séquence redémarrage de la borne

Cette séquence décrit le redémarrage d'une borne via le portail.

![Écran de la Pico – Illustration 23](/img/produkte-pico-ladestation-pico-display/21.png)

Valeur / symbole Description

BYE Signal de redémarrage

![Écran de la Pico – Illustration 24](/img/produkte-pico-ladestation-pico-display/22.png)

Valeur / symbole Description

0.59 Consommation totale de la dernière charge

kWh Unité de la consommation affichée

![Écran de la Pico – Illustration 25](/img/produkte-pico-ladestation-pico-display/25.png)

L'écran reste noir pendant env. 20 s.

![Écran de la Pico – Illustration 26](/img/produkte-pico-ladestation-pico-display/26.png)

Premier signe indiquant que la Pico démarre.

Après la séquence redémarrage de la borne, la Pico passe à la séquence mode MID



### Messages de dérangement et avertissements

![Écran de la Pico – Illustration 27](/img/produkte-pico-ladestation-pico-display/27.png)

Dérangement fatal

- Erreur 1 : problème avec le module Wi-Fi

- Erreur 2 : aucune communication M4

- Erreur 3 : erreur du Meter SOM

- Erreur 4 : problème avec le capteur RDC


![Écran de la Pico – Illustration 28](/img/produkte-pico-ladestation-pico-display/28.png)

SIM Error

- Problème avec la carte SIM


![Écran de la Pico – Illustration 29](/img/produkte-pico-ladestation-pico-display/29.png)

Diode Error

- La diode du véhicule n'est pas correcte. Vérifiez le câble de recharge ainsi que la connexion au véhicule. 


![Écran de la Pico – Illustration 30](/img/produkte-pico-ladestation-pico-display/30.png)

Cable Error

- Le câble de recharge signale une erreur. Vérifiez qu'il est correctement branché. 


![Écran de la Pico – Illustration 31](/img/produkte-pico-ladestation-pico-display/31.png)

P Limit

- Le délestage est actif. La puissance de charge a été réduite. 




![Écran de la Pico – Illustration 32](/img/produkte-pico-ladestation-pico-display/32.png)

Warn RDC

- Le RDC-DD 6mA selon IEC 62955 (dispositif de détection de courant de défaut continu) s'est déclenché. La charge a été interrompue pour des raisons de sécurité. 


![Écran de la Pico – Illustration 33](/img/produkte-pico-ladestation-pico-display/33.png)

Offline

- La borne de recharge n'a pas de connexion au smart-me Cloud. 





![Écran de la Pico – Illustration 34](/img/produkte-pico-ladestation-pico-display/34.png)

La LED s'allume en orange/rouge dans le coin supérieur droit de l'écran

- Indique un message d'erreur. Au plus tard après 30 secondes, l'image d'erreur (p. ex. Cable Error) s'affiche à l'écran.




### Mode MID

Pour passer en mode MID, vous pouvez cliquer sur « Afficher le relevé du compteur à l'écran » (« Zählerstand auf Display anzeigen ») dans les actions avancées du portail smart-me, démarrer ou redémarrer la borne, ou utiliser le capteur de luminosité.

Avec une lampe de poche dirigée sur le capteur de luminosité, l'utilisateur peut saisir le code suivant par clignotement : sombre - clair - sombre - clair - sombre (chaque état doit durer entre 1 et 5 secondes)

![Écran de la Pico – Illustration 35](/img/produkte-pico-ladestation-pico-display/35.png)

Valeur / symbole Description

Point Capteur de luminosité

![Écran de la Pico – Illustration 36](/img/produkte-pico-ladestation-pico-display/36.png)

Valeur / symbole Description
M Mode MID actif

0.2.1 Version et somme de contrôle selon le code OBIS

v 2.2 Numéro de version du firmware

CRC 4F55 Somme de contrôle du firmware

![Écran de la Pico – Illustration 37](/img/produkte-pico-ladestation-pico-display/37.png)

Valeur / symbole Description
M   Mode MID actif

F.F.0   Code OBIS

03   Code d'erreur

S'affiche uniquement en présence d'un message d'erreur. 

Code d'erreur Description

x1-x3 : la borne de recharge n'est pas étalonnée
x4 : erreur du processus d'affichage (somme de contrôle)

1x : erreur du Meter-SOM (matériel)

2x-3x : erreur du Meter-SOM (somme de contrôle)

4x : erreur du Meter-SOM (flash) Autres : erreur générale du Meter-SOM 

![Écran de la Pico – Illustration 38](/img/produkte-pico-ladestation-pico-display/38.png)

Valeur / symbole Description
M Mode MID actif

1.8.0 Code OBIS

00013.04 kWh Le relevé du compteur en kWh avec 2 décimales.
