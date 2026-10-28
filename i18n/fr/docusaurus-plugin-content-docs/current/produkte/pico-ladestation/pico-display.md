---
title: 'Écran Pico'
slug: '/produkte/pico-ladestation/pico-display'
description: 'Cette page décrit le comportement de l''écran de la Pico.'
sidebar_label: 'Écran Pico'
---
Cette page décrit le comportement de l'écran de la Pico.

![Écran Pico – Illustration 1](/img/produkte-pico-ladestation-pico-display/01.png)

[Borne de recharge Pico](/produkte/pico-ladestation)

[Accessoires Pico](/produkte/pico-ladestation/pico-zubehoer)

## Écran

La description de l'affichage est valable pour toutes les [versions du firmware](/konfiguration/firmware-update) à partir de la 0.0.28.

### Séquence sans recharge active

<div className="row">
<div className="col col--8">

S'affiche lorsqu'aucun véhicule n'est connecté et qu'aucune recharge n'a lieu. Vous pouvez personnaliser cette image vous-même. 

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 2](/img/produkte-pico-ladestation-pico-display/01.png)

</div>
</div>

### Séquence véhicule branché en attente de validation

<div className="row">
<div className="col col--8">

S'affiche de manière répétée lorsque le véhicule est branché, mais que la borne n'est pas encore validée dans le backend.

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 3](/img/produkte-pico-ladestation-pico-display/03.png)

</div>
</div>

<div className="row">
<div className="col col--8">

S'affiche de manière répétée lorsque le véhicule est branché, mais que la borne n'est pas encore validée dans le backend.

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 4](/img/produkte-pico-ladestation-pico-display/04.png)

</div>
</div>



### Séquence d'authentification avec CarID (Pico Online)

<div className="row">
<div className="col col--8">

S'affiche lorsque le véhicule est branché et que la Car-ID est vérifiée.

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 5](/img/produkte-pico-ladestation-pico-display/05.png)

</div>
</div>

<div className="row">
<div className="col col--8">

S'affiche lorsque le véhicule n'est pas autorisé ou que la Car-ID n'est pas enregistrée dans le compte conducteur eCarUp. La Pico passe ensuite à la « Séquence véhicule branché en attente de validation »

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 6](/img/produkte-pico-ladestation-pico-display/06.png)

</div>
</div>

<div className="row">
<div className="col col--8">

S'affiche lorsque le véhicule est autorisé. La Pico passe ensuite à la « Séquence de recharge active ».

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 7](/img/produkte-pico-ladestation-pico-display/07.png)

</div>
</div>

### Séquence d'authentification avec RFID (Pico Online)

<div className="row">
<div className="col col--8">

La carte RFID est vérifiée. Avec une très bonne connexion, il se peut que le texte ne s'affiche pas du tout.

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 8](/img/produkte-pico-ladestation-pico-display/08.png)

</div>
</div>

<div className="row">
<div className="col col--8">

S'affiche lorsque le badge RFID est autorisé.

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 9](/img/produkte-pico-ladestation-pico-display/09.png)

</div>
</div>

<div className="row">
<div className="col col--8">

S'affiche lorsque l'autorisation RFID a réussi et qu'aucun véhicule n'est branché. Si un véhicule est branché, cet affichage est ignoré et la Pico passe à la « Séquence de recharge active ».

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 10](/img/produkte-pico-ladestation-pico-display/10.png)

</div>
</div>

<div className="row">
<div className="col col--8">

S'affiche lorsque le badge RFID n'est pas autorisé. La Pico passe ensuite à la « Séquence véhicule branché en attente de validation » ou à la « Séquence sans recharge active ».

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 11](/img/produkte-pico-ladestation-pico-display/11.png)

</div>
</div>



### Séquence d'authentification avec code QR (Pico Online)

<div className="row">
<div className="col col--8">

La recharge a été validée avec succès au moyen du code QR.

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 12](/img/produkte-pico-ladestation-pico-display/12.png)

</div>
</div>

<div className="row">
<div className="col col--8">

S'affiche lorsque l'autorisation a réussi et qu'aucun véhicule n'est branché. Si un véhicule est branché, cet affichage est ignoré et la Pico passe à la « Séquence de recharge active ».

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 13](/img/produkte-pico-ladestation-pico-display/10.png)

</div>
</div>

### Séquence de début de recharge

<div className="row">
<div className="col col--8">

 Valeur / Symbole Description

6A Courant de charge minimal

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 14](/img/produkte-pico-ladestation-pico-display/14.png)

</div>
</div>



<div className="row">
<div className="col col--8">

Valeur / Symbole Description

32A Courant de charge max. autorisé 

Lorsque la borne augmente le courant de charge maximal, cette image s'affiche brièvement avec le nouveau courant de charge max.

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 15](/img/produkte-pico-ladestation-pico-display/15.png)

</div>
</div>

### Séquence de recharge active

<div className="row">
<div className="col col--8">

Valeur / Symbole Description

0.59 Consommation depuis le début de la recharge

kWh Unité de la consommation affichée

Batterie Aucune signification

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 16](/img/produkte-pico-ladestation-pico-display/16.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Valeur / Symbole Description

22.09.23 Date

15:18:43 Début de la recharge

00:05:13 Durée de la recharge active

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 17](/img/produkte-pico-ladestation-pico-display/17.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Valeur / Symbole Description

1.81 Puissance 

kW Unité de la puissance affichée

….. bleu = puissance max. autorisée par la borne (1 pixel = 1A) 

 vert = courant soutiré par le véhicule par phase. (1 pixel = 1A)

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 18](/img/produkte-pico-ladestation-pico-display/18.png)

</div>
</div>

### Séquence de fin de recharge

<div className="row">
<div className="col col--8">

Valeur / Symbole Description

32A Courant max. autorisé 

Lorsque la borne réduit le courant de charge maximal, cette image s'affiche brièvement avec le nouveau courant de charge max.

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 19](/img/produkte-pico-ladestation-pico-display/19.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Valeur / Symbole Description

6A Courant de charge minimal

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 20](/img/produkte-pico-ladestation-pico-display/20.png)

</div>
</div>



<div className="row">
<div className="col col--8">

Valeur / Symbole Description

BYE Déconnexion réussie

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 21](/img/produkte-pico-ladestation-pico-display/21.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Valeur / Symbole Description

0.59 Consommation totale de la dernière recharge

 kWh Unité de la consommation affichée

Après la déconnexion, la consommation totale de la dernière recharge s'affiche pendant env. 14 s. 

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 22](/img/produkte-pico-ladestation-pico-display/22.png)

</div>
</div>

### Séquence de redémarrage de la borne

Cette séquence décrit le redémarrage d'une borne via le portail

<div className="row">
<div className="col col--8">

Valeur / Symbole Description

BYE Signal de redémarrage

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 23](/img/produkte-pico-ladestation-pico-display/21.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Valeur / Symbole Description

0.59 Consommation totale de la dernière recharge

kWh Unité de la consommation affichée

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 24](/img/produkte-pico-ladestation-pico-display/22.png)

</div>
</div>

<div className="row">
<div className="col col--8">

L'écran reste noir pendant env. 20 s.

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 25](/img/produkte-pico-ladestation-pico-display/25.png)

</div>
</div>

<div className="row">
<div className="col col--8">

C'est le premier signe que la Pico démarre.

Après la séquence de redémarrage de la borne, la Pico passe à la séquence du mode MID

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 26](/img/produkte-pico-ladestation-pico-display/26.png)

</div>
</div>



### Messages de dérangement et avertissements

<div className="row">
<div className="col col--8">

Dérangement fatal

- Erreur 1 : problème avec le module Wi-Fi

- Erreur 2 : pas de communication M4

- Erreur 3 : erreur du Meter SOM

- Erreur 4 : problème avec le capteur RDC

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 27](/img/produkte-pico-ladestation-pico-display/27.png)

</div>
</div>


<div className="row">
<div className="col col--8">

SIM Error

- Problème avec la carte SIM

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 28](/img/produkte-pico-ladestation-pico-display/28.png)

</div>
</div>


<div className="row">
<div className="col col--8">

Diode Error

- La diode du véhicule n'est pas correcte. Vérifiez le câble de recharge ainsi que la connexion au véhicule 

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 29](/img/produkte-pico-ladestation-pico-display/29.png)

</div>
</div>


<div className="row">
<div className="col col--8">

Cable Error

- Le câble de recharge signale une erreur. Vérifiez qu'il est correctement branché. 

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 30](/img/produkte-pico-ladestation-pico-display/30.png)

</div>
</div>


<div className="row">
<div className="col col--8">

P Limit

- Le délestage est actif. La puissance de charge a été réduite. 

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 31](/img/produkte-pico-ladestation-pico-display/31.png)

</div>
</div>




<div className="row">
<div className="col col--8">

Warn RDC

- Le RDC-DD 6mA selon IEC 62955 (dispositif de détection de courant de défaut continu) s'est déclenché. La recharge a été interrompue pour des raisons de sécurité. 

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 32](/img/produkte-pico-ladestation-pico-display/32.png)

</div>
</div>


<div className="row">
<div className="col col--8">

Offline

- La borne de recharge n'a pas de connexion avec le cloud smart-me. 

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 33](/img/produkte-pico-ladestation-pico-display/33.png)

</div>
</div>





<div className="row">
<div className="col col--8">

La LED s'allume en orange/rouge dans le coin supérieur droit de l'écran

- Indique un message d'erreur. Au plus tard après 30 secondes, l'image d'erreur (p. ex. Cable Error) s'affiche à l'écran.

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 34](/img/produkte-pico-ladestation-pico-display/34.png)

</div>
</div>




### Mode MID

Pour passer en mode MID, vous pouvez cliquer dans le portail smart-me, via l'action avancée, sur « Afficher le relevé du compteur à l'écran » (« Zählerstand auf Display anzeigen »), démarrer ou redémarrer la borne, ou passer par le capteur de luminosité.

Avec une lampe de poche dirigée sur le capteur de luminosité, l'utilisateur peut émettre le code suivant : sombre - clair - sombre - clair - sombre (chaque état doit durer entre 1 et 5 secondes)

<div className="row">
<div className="col col--8">

Valeur / Symbole Description

Point Capteur de lumière

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 35](/img/produkte-pico-ladestation-pico-display/35.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Valeur / Symbole Description
M Mode MID actif

0.2.1 Version et somme de contrôle selon le code OBIS

v 2.2 Numéro de version du firmware

CRC 4F55 Somme de contrôle du firmware

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 36](/img/produkte-pico-ladestation-pico-display/36.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Valeur / Symbole Description
M   Mode MID actif

F.F.0   Code OBIS

03   Code d'erreur

S'affiche uniquement en présence d'un message d'erreur. 

Code d'erreur Description

x1-x3 : la borne de recharge n'est pas étalonnée
x4 : erreur du processus d'affichage (somme de contrôle)

1x : erreur dans le Meter-SOM (matériel)

2x-3x : erreur Meter-SOM (somme de contrôle)

4x : erreur Meter-SOM (flash) Autres : erreur générale Meter-SOM 

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 37](/img/produkte-pico-ladestation-pico-display/37.png)

</div>
</div>

<div className="row">
<div className="col col--8">

Valeur / Symbole Description
M Mode MID actif

1.8.0 Code OBIS

00013.04 kWh Le relevé du compteur en kWh avec 2 décimales.

</div>
<div className="col col--4 bild--mitte">

![Écran Pico – Illustration 38](/img/produkte-pico-ladestation-pico-display/38.png)

</div>
</div>
