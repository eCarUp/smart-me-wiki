---
title: 'Erreurs Pico'
slug: '/stoerungsbehebung/pico-fehler'
description: 'Cette page explique les erreurs Pico connues.'
sidebar_label: 'Erreurs Pico'
---
Cette page explique les erreurs Pico connues.

### Le RFID n’est pas reconnu.

Signification : 

- Lors du scan du RFID, ni le code QR ni le logo RFID ne s’affichent.




Sources d’erreur possibles :

- La carte RFID est défectueuse

- La Pico présente une erreur




Mesure :

- Redémarrer la Pico. Si le redémarrage a résolu le problème, nous vous serions reconnaissants de nous envoyer un e-mail à [support@smart-me.com](mailto:support@smart-me.com). Veuillez indiquer la date de l’incident et le numéro de série de la Pico.

- Essayer avec une nouvelle carte RFID

### Puissance de recharge réduite

Si la Pico fournit moins de puissance qu’elle ne le devrait, il se peut qu’une phase ne soit pas correctement raccordée ou qu’un fusible ait déclenché. En cliquant sur « Normal » (« Normal »), vous pouvez consulter les tensions et les courants, comme pour les compteurs d’électricité.

### Écran noir (aucun affichage)

<div className="row">
<div className="col col--8">

Signification : 

- L’écran de la Pico n’affiche rien. 

Sources d’erreur possibles :

- La Pico n’est pas alimentée

- Le disjoncteur FI a déclenché

- La Pico présente une erreur dans le logiciel local

Mesure :

- Si la Pico est hors ligne

    - Étape 1 : mettre hors tension puis rallumer.

    - Étape 2 : vérifier si la version de l’application est 1.xx ([Vérifier la version du matériel](https://webforms.smart-me.com/connect/deviceoverview.aspx)), si oui, [remplir le formulaire RMA](/rma-antragsformular-schweiz) avec la description d’erreur : Schwarzer Bildschirm mit Application Version 1.xx

    - Étape 3 : si cela n’aide pas, contacter le support.

- Si la Pico est en ligne, elle peut être redémarrée via le portail smart-me. (Sélectionner la Pico / roue dentée en haut à droite / Actions avancées (Erweiterte Aktionen) / Redémarrer (Neustart))

- Si le disjoncteur FI déclenche, il peut s’agir d’un cas isolé. Si cela se produit plus souvent, veuillez nous contacter. Sauf pour la « IONIQ 5 » et la « Zoé » : avec ces voitures, le disjoncteur FI déclenche dans certains cas à la fin de la session de recharge, ce que nous ne pouvons pas changer en tant que fabricant de bornes de recharge.

</div>
<div className="col col--4 bild--voll">

![Erreurs Pico – Figure 1](/img/stoerungsbehebung-pico-fehler/01.png)

</div>
</div>

### La voiture est branchée et la borne de recharge ne réagit pas

Lorsqu’une voiture est branchée, normalement, avec 

- Authentication None 

    - l’image de veille devrait disparaître et une séquence avec un démarrage de la recharge devrait apparaître

- Authentication eCarUp Backend 

    - l’image avec « Auth RFID App » devrait apparaître.


Si ce n’est pas le cas, veuillez procéder comme suit

- Sur la voiture, vérifier que le câble est correctement branché.

- Sur la Pico, s’assurer que le câble est enfoncé jusqu’en butée.


Si elle ne réagit toujours pas, l’exploitant de la borne doit vérifier si un câble est raccordé de manière fixe à la borne.

- Si c’est le cas, veuillez vous assurer que l’option « Câble toujours verrouillé » (« Kabel immer fest verriegelt ») est activée dans le portail smart-me. 

- Si ce n’est pas le cas, veuillez l’activer.

### Warn RDC

<div className="row">
<div className="col col--8">

Câble ou voiture (le plus souvent)



Signification : 

- Problème avec le capteur RDC (residual current device). Le RCD est un dispositif de protection des personnes dans l’installation électrique.




Sources d’erreur possibles :

- Un câble de recharge humide raccordé de manière fixe.

- Un câble de recharge qui a gelé pendant la nuit puis dégelé.

- Défaut du câble ou de la voiture. Cela peut être testé en faisant recharger une autre voiture à la borne ou en faisant recharger la voiture qui cause l’erreur à une autre Pico.

- Défaut de l’électronique de la Pico, p. ex. dégât d’eau.




Mesure :

- Lorsque l’erreur a été déclenchée, la borne doit être redémarrée pour réinitialiser l’erreur.

</div>
<div className="col col--4 bild--voll">

![Erreurs Pico – Figure 2](/img/stoerungsbehebung-pico-fehler/02.png)

</div>
</div>

### Cable Lock Error

<div className="row">
<div className="col col--8">

Signification : 

- Cette erreur survient lorsque le câble ne peut pas être verrouillé (p. ex. lorsque la fiche n’est pas correctement branchée).


Mesure : 

- Redémarrez la Pico une fois, soit via le cloud, soit localement. Cela recalibre le capteur de verrouillage du câble.

- Dans la plupart des cas, il suffit aussi de brancher correctement le câble (avec un peu de force) et de réessayer.


Affichage dans le portail

- Échec du verrouillage du câble (Kabelverriegelung fehlgeschlagen)

</div>
<div className="col col--4 bild--voll">

![Erreurs Pico – Figure 3](/img/stoerungsbehebung-pico-fehler/03_EN.png)

</div>
</div>

![Erreurs Pico – Figure 4](/img/stoerungsbehebung-pico-fehler/04.png)

### Error 1

<div className="row">
<div className="col col--8">

Signification : 

- Aucun module WiFi n’a été trouvé




Mesure : 

- Si un redémarrage n’apporte pas le résultat souhaité, un formulaire RMA doit être rempli. Description de l’erreur : Error 1

</div>
<div className="col col--4 bild--voll">

![Erreurs Pico – Figure 5](/img/stoerungsbehebung-pico-fehler/05.png)

</div>
</div>

### Error 2

<div className="row">
<div className="col col--8">

Signification :  

- Erreur de communication interne




Mesure : 

- Si un redémarrage n’apporte pas le résultat souhaité, un formulaire RMA doit être rempli. Description de l’erreur : Error 2

</div>
<div className="col col--4 bild--voll">

![Erreurs Pico – Figure 6](/img/stoerungsbehebung-pico-fehler/06.png)

</div>
</div>

### Error 3

<div className="row">
<div className="col col--8">

Signification :  

- Une erreur liée à l’appareil de mesure d’électricité MID




Mesure : 

- Si un redémarrage n’apporte pas le résultat souhaité, un formulaire RMA doit être rempli. Description de l’erreur : Error 3

</div>
<div className="col col--4 bild--voll">

![Erreurs Pico – Figure 7](/img/stoerungsbehebung-pico-fehler/07.png)

</div>
</div>

### Error 4

<div className="row">
<div className="col col--8">

Signification :  

- Le test RCD de la Pico a échoué.




Mesure :

- Voir WARN RDC

</div>
<div className="col col--4 bild--voll">

![Erreurs Pico – Figure 8](/img/stoerungsbehebung-pico-fehler/08.png)

</div>
</div>

### P-Limit

<div className="row">
<div className="col col--8">

Signification :

- Tension trop faible &lt;200V

- Délestage actif : puissance limitée

</div>
<div className="col col--4 bild--voll">

![Erreurs Pico – Figure 9](/img/stoerungsbehebung-pico-fehler/09.png)

</div>
</div>

### Diode Error

<div className="row">
<div className="col col--8">

Sources d’erreur possibles :

- Le câble de recharge est défectueux


Mesure :

- Remplacer / vérifier le câble de recharge

- Aucune mesure n’est nécessaire sur la Pico. Elle peut être réutilisée tout à fait normalement après 30 secondes.

- Vérifier qu’au moins la version 0.0.42 est installée sur la Pico. [Mise à jour du firmware](/konfiguration/firmware-update) 

</div>
<div className="col col--4 bild--voll">

![Erreurs Pico – Figure 10](/img/stoerungsbehebung-pico-fehler/10_EN.png)

</div>
</div>

### La voiture ne se recharge pas (la barre ne fait qu’un pixel de large et est rouge)

<div className="row">
<div className="col col--8">

Affichage :

- La barre inférieure ne fait qu’un pixel de large et est rouge


Signification : 

- La borne de recharge ne libère pas de courant.


Sources d’erreur possibles :

- La gestion de la charge ne peut pas libérer de courant pour la borne, car une Pico est surchargée.

- La Pico du groupe de recharge ne peut pas communiquer via le réseau maillé avec les autres Pico du même groupe de recharge.


Mesures :

- Vérifiez si les nœuds disposent de suffisamment de courant.

- Pour une analyse plus précise, veuillez appeler le support.

</div>
<div className="col col--4 bild--voll">

![Erreurs Pico – Figure 11](/img/stoerungsbehebung-pico-fehler/11.png)

</div>
</div>

### Température élevée

Température élevée



Signification : 

- La température intérieure élevée de la Pico entraîne une réduction de la puissance de recharge maximale.




Sources d’erreur possibles :

- Rayonnement solaire direct : l’appareil est peut-être exposé au rayonnement solaire direct, ce qui entraîne un dégagement de chaleur excessif.




Mesure :

- Effectuer une mise à jour du firmware si la version est inférieure à 0.0.29.

- La luminosité de l’écran de la Pico devrait être réglée au minimum. C’est la mesure la plus efficace, car moins d’énergie est ainsi produite directement dans le boîtier.


Problèmes spécifiques aux voitures

- Hyundai Ioniq 5 : avec cette voiture, le disjoncteur FI déclenche dans certains cas à la fin de la session de recharge, ce que nous ne pouvons pas changer en tant que fabricant de bornes de recharge. Car le disjoncteur FI déclenche indépendamment de la borne de recharge.

- Zoé : les anciens modèles doivent être configurés avec un courant de démarrage de 10A, car ils ne démarrent pas la recharge avec 6A. Un test a montré qu’avec un câble de recharge monophasé, la recharge démarre même lorsque seuls 6A de courant de démarrage sont disponibles. Avec cette voiture, le disjoncteur FI déclenche dans certains cas à la fin de la session de recharge, ce que nous ne pouvons pas changer en tant que fabricant de bornes de recharge. Car le disjoncteur FI déclenche indépendamment de la borne de recharge.

- Renault Kangoo Electric : ne démarre la recharge qu’à partir de 8A

- Skoda Enyaq : il peut parfois s’écouler jusqu’à 1min 30sec avant que la session de recharge ne démarre. Désactiver Car-ID en alternative.

- Audi Q4 : la recharge ne démarre pas. 

    - Solution 1 : selon les premières expériences du 23.01.2026, le problème pourrait aussi être résolu avec le logiciel Audi le plus récent. 

    - Solution 2 : installer au moins la version 0.0.33 sur la Pico et désactiver car-id.

- Dacia Spring : la recharge ne démarre pas. Solution : installer la version 0.0.33 et désactiver car-id sur la Pico.

- Hyundai Ioniq : la voiture ne démarre que si la carte RFID est d’abord présentée et que la recharge est ensuite démarrée. Sinon, Car-ID doit être désactivé.

- Leapmotor / T03 : ne gère pas la commutation de phases. Lorsque la recharge est interrompue par la voiture au bout d’une minute, il faut ouvrir et refermer la portière plusieurs fois côté voiture.

- Subaru Solterra : ne démarre la recharge qu’à partir de 8A et avec Car-ID désactivé

- Mazda MX-30 : ne démarre la recharge que si Car-ID est désactivé.

- Honda E:ny1 : ne démarre la recharge qu’à partir de 8A.

- dongfeng box : ne gère pas la commutation de phases. Lorsque la recharge est interrompue par la voiture au bout d’une minute, il faut déverrouiller la portière côté voiture après 7 minutes, puis la recharge reprend.
