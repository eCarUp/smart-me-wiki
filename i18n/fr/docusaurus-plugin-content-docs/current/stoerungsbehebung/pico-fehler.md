---
title: 'Erreurs Pico'
slug: '/stoerungsbehebung/pico-fehler'
description: 'Cette page explique les erreurs Pico connues.'
sidebar_label: 'Erreurs Pico'
---
Cette page explique les erreurs Pico connues.

### La RFID n'est pas reconnue.



Signification : 

- Lors du scan de la RFID, ni le code QR ni le logo RFID ne s'affiche.




Sources d'erreur possibles :

- La carte RFID est défectueuse

- La Pico présente une erreur




Mesure :

- Redémarrer la Pico. Si le redémarrage a résolu le problème, nous vous serions reconnaissants de nous envoyer un e-mail à [support@smart-me.com](mailto:support@smart-me.com). Merci d'indiquer la date de l'incident et le numéro de série de la Pico.

- Essayer avec une nouvelle carte RFID


### Puissance de recharge réduite

Si la Pico délivre moins de puissance qu'elle ne devrait, il est possible qu'une phase ne soit pas correctement raccordée ou qu'un fusible ait déclenché. En cliquant sur « Normal », il est possible de consulter les tensions et les courants, comme pour les compteurs d'électricité.

### Écran noir (aucun affichage)



Signification : 

- L'écran de la Pico n'affiche rien. 




Sources d'erreur possibles :

- La Pico n'est pas alimentée

- Le disjoncteur différentiel (FI) a déclenché

- La Pico présente une erreur dans le logiciel local




Mesure :

- Si la Pico est hors ligne

    - Étape 1 : mettre hors tension puis remettre sous tension.

    - Étape 2 : vérifier si l'Application Version est 1.xx ([vérifier la version du matériel](https://webforms.smart-me.com/connect/deviceoverview.aspx)),  si oui, [remplir un RMA](/rma-antragsformulare) avec la description d'erreur : écran noir avec Application Version 1.xx

    - Étape 3 : si cela n'aide pas, contacter le support.

- Si la Pico est en ligne, elle peut être redémarrée via le portail smart-me. (Sélectionner la Pico / roue dentée en haut à droite / Actions avancées (Erweiterte Aktionen) / Redémarrage (Neustart))

- Si le disjoncteur différentiel déclenche, il peut s'agir d'un cas isolé. Si cela se produit plus fréquemment, merci de nous contacter. Sauf pour l'« IONIQ 5 » et la « Zoé » : dans certains cas isolés, ces voitures font déclencher le disjoncteur différentiel à la fin de la session de recharge ; en tant que fabricant de bornes de recharge, nous ne pouvons rien y changer.


![Erreurs Pico – illustration 1](/img/stoerungsbehebung-pico-fehler/01.png)

### La voiture est branchée et la borne de recharge ne réagit pas

Lorsqu'une voiture est branchée, normalement, avec 

- Authentication None 

    - L'image de veille devrait disparaître et une séquence avec un démarrage de recharge devrait apparaître

- Authentication eCarUp Backen 

    - l'image avec « Auth RFID App » devrait apparaître.


Si ce n'est pas le cas, merci de procéder comme suit

- Vérifier sur la voiture que le câble est correctement branché.

- Sur la Pico, s'assurer que le câble est enfoncé à fond.


Si elle ne réagit toujours pas, l'exploitant de la station doit vérifier si un câble est fixé en permanence à la station.

- Si c'est le cas, merci de s'assurer que l'option « Câble toujours verrouillé en permanence » (Kabel immer fest verriegelt) est activée dans le portail smart-me. 

- Si ce n'est pas le cas, merci de le faire.


![Erreurs Pico – illustration 2](/img/stoerungsbehebung-pico-fehler/02.png)

### Warn RDC



Câble ou voiture (le plus souvent)



Signification : 

- Problème avec le capteur RDC (residual current device). Le RCD est un dispositif de protection des personnes dans l'installation électrique .




Sources d'erreur possibles :

- Un câble de recharge humide, raccordé de manière fixe.

- Un câble de recharge qui a gelé pendant la nuit puis dégelé.

- Un défaut du câble ou de la voiture. Cela peut être testé en faisant charger une autre voiture à la station ou en faisant charger la voiture qui provoque l'erreur à une autre Pico.

- Un défaut de l'électronique de la Pico, p. ex. un dégât d'eau.




Mesure :

- Si l'erreur a été déclenchée, la station doit être redémarrée afin de réinitialiser l'erreur.


![Erreurs Pico – illustration 3](/img/stoerungsbehebung-pico-fehler/03.png)

### Cable Lock Error

Signification : 

- Cette erreur survient lorsque le câble ne peut pas être verrouillé (p. ex. lorsque la fiche n'est pas correctement branchée).


Mesure : 

- Redémarre une fois la Pico. Soit via le cloud, soit localement. Le capteur du verrouillage de câble est ainsi recalibré.

- Dans la plupart des cas, il suffit aussi de brancher correctement le câble (avec un peu de force) et de réessayer.


Affichage dans le portail

- Échec du verrouillage du câble (Kabelverriegelung fehlgeschlagen)


![Erreurs Pico – illustration 4](/img/stoerungsbehebung-pico-fehler/04.png)

![Erreurs Pico – illustration 5](/img/stoerungsbehebung-pico-fehler/05.png)

### Error 1



Signification : 

- Aucun module WiFi n'a été trouvé




Mesure : 

- Si un redémarrage n'apporte pas le résultat souhaité, un RMA doit être rempli. Description d'erreur : Error 1


![Erreurs Pico – illustration 6](/img/stoerungsbehebung-pico-fehler/06.png)

### Error 2



Signification :  

- Erreur de communication interne




Mesure : 

- Si un redémarrage n'apporte pas le résultat souhaité, un RMA doit être rempli. Description d'erreur : Error 2


![Erreurs Pico – illustration 7](/img/stoerungsbehebung-pico-fehler/07.png)

### Error 3



Signification :  

- Une erreur avec l'appareil de mesure de courant MID




Mesure : 

- Si un redémarrage n'apporte pas le résultat souhaité, un RMA doit être rempli. Description d'erreur : Error 3


![Erreurs Pico – illustration 8](/img/stoerungsbehebung-pico-fehler/08.png)

### Error 4



Signification :  

- Le test RCD sur la Pico a échoué.




Mesure :

- Voir WARN RDC


![Erreurs Pico – illustration 9](/img/stoerungsbehebung-pico-fehler/09.png)

### P-Limit

Signification :

- Tension trop faible &lt;200V

- Délestage actif : puissance limitée


![Erreurs Pico – illustration 10](/img/stoerungsbehebung-pico-fehler/10.png)

### Diode Error



Sources d'erreur possibles :

- Le câble de recharge est défectueux


Mesure :

- Remplacer / vérifier le câble de recharge

- Aucune mesure n'est nécessaire sur la Pico. Elle peut être réutilisée tout à fait normalement après 30 secondes.

- Vérifier qu'au moins la version 0.0.42 est installée sur la Pico. [Mise à jour du firmware](/konfiguration/firmware-update) 


![Erreurs Pico – illustration 11](/img/stoerungsbehebung-pico-fehler/11.png)

### La voiture ne charge pas (la barre ne fait qu'un pixel de large et est rouge)

Affichage :

- La barre inférieure ne fait qu'un pixel de large et est rouge


Signification : 

- La borne de recharge ne libère pas de courant.


Sources d'erreur possibles :

- La gestion de la charge ne peut pas libérer de courant vers la station, parce qu'une Pico est en surcharge.

- La Pico du groupe de recharge ne peut pas communiquer via le mesh avec les autres Picos du même groupe de recharge.


Mesures :

- Vérifie que les nœuds disposent de suffisamment de courant.

- Pour une analyse plus précise, merci d'appeler le support.


### Température élevée



Température élevée



Signification : 

- La température intérieure élevée de la Pico entraîne une limitation de la puissance de recharge maximale.




Sources d'erreur possibles :

- Rayonnement solaire direct : l'appareil est éventuellement exposé au rayonnement solaire direct, ce qui provoque un dégagement de chaleur excessif.




Mesure :

- Effectuer une mise à jour du firmware si la version est inférieure à 0.0.29.

- La luminosité de l'écran de la Pico devrait être réglée au minimum. C'est ce qui a le plus grand effet, car moins d'énergie est ainsi produite directement dans le boîtier.


Problèmes spécifiques aux voitures

- Hyundai Ioniq 5 : dans certains cas isolés, cette voiture fait déclencher le disjoncteur différentiel à la fin de la session de recharge ; en tant que fabricant de bornes de recharge, nous ne pouvons rien y changer, puisque le disjoncteur différentiel déclenche indépendamment de la borne de recharge.

- Zoé : les modèles plus anciens doivent être configurés avec un courant de démarrage de 10A, car ils ne démarrent pas la recharge avec 6A. Un test a montré qu'avec un câble de recharge monophasé, la recharge démarre aussi lorsque seuls 6A de courant de démarrage sont disponibles. Dans certains cas isolés, cette voiture fait déclencher le disjoncteur différentiel à la fin de la session de recharge ; en tant que fabricant de bornes de recharge, nous ne pouvons rien y changer, puisque le disjoncteur différentiel déclenche indépendamment de la borne de recharge.

- Renault Kangoo Electric : ne démarre la recharge qu'à partir de 8A

- Skoda Enyaq : le démarrage de la session de recharge peut parfois prendre jusqu'à 1 min 30 s. Alternative : désactiver le Car-ID.

- Audi Q4 : la recharge ne démarre pas. 

    - Solution 1 : selon les premières expériences du 23.01.2026, le problème pourrait aussi être résolu avec le logiciel Audi le plus récent. 

    - Solution 2 : installer au moins la version 0.0.33 sur la Pico et désactiver le car-id.

- Dacia Spring : la recharge ne démarre pas. Solution : installer la version 0.0.33 et désactiver le car-id sur la Pico.

- Hyundai Ioniq : la voiture ne démarre que si la carte RFID est d'abord présentée et que la recharge est ensuite démarrée. Alternativement, le Car-ID doit être désactivé.

- Leapmotor / T03 : ne gère pas la commutation de phases. Si la recharge est interrompue par la voiture après une minute, il faut, côté voiture, ouvrir et refermer la portière à plusieurs reprises.

- Subaru Solterra : ne démarre la recharge qu'à partir de 8A et avec le Car-ID désactivé

- Mazda MX-30 : ne démarre la recharge que si le Car-ID est désactivé.

- Honda E:ny1 : ne démarre la recharge qu'à partir de 8A.
