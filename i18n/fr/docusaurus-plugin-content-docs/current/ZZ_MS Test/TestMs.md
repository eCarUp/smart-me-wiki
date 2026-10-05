---
title: 'Page de test MS'
slug: '/ZZ_MS Test/TestMS'
description: 'Désignation'
sidebar_label: 'Libellé de barre latérale MSTest'
---
<div className="row">
<div className="col col--10">

Cette page décrit le comportement de l'écran de la Pico.

[Borne de recharge Pico](/produkte/pico-ladestation)

[Accessoires Pico](/produkte/pico-ladestation/pico-zubehör)

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 1](/img/produkte-pico-ladestation-pico-display/01.png)

</div>
</div>

## Écran

La description de l'affichage est valable pour toutes les [versions du firmware](/konfiguration/firmware-update) à partir de 0.0.28.

### Séquence aucune recharge active

<div className="row">
<div className="col col--10">

S'affiche lorsqu'aucun véhicule n'est connecté et qu'aucune recharge n'est en cours. Cette image peut être personnalisée.

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 2](/img/produkte-pico-ladestation-pico-display/01.png)

</div>
</div>

### Séquence véhicule branché en attente d'autorisation

<div className="row">
<div className="col col--10">

S'affiche de manière répétée lorsque le véhicule est branché, mais que la station n'est pas encore autorisée dans le backend.

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 3](/img/produkte-pico-ladestation-pico-display/03.png)

</div>
</div>

<div className="row">
<div className="col col--10">

S'affiche de manière répétée lorsque le véhicule est branché, mais que la station n'est pas encore autorisée dans le backend.

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 4](/img/produkte-pico-ladestation-pico-display/04.png)

</div>
</div>

### Séquence authentification par CarID (Pico Online)

<div className="row">
<div className="col col--10">

S'affiche lorsque le véhicule est branché et que la Car-ID est vérifiée.

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 5](/img/produkte-pico-ladestation-pico-display/05.png)

</div>
</div>

<div className="row">
<div className="col col--10">

S'affiche lorsque le véhicule n'est pas autorisé ou que la Car-ID n'est pas enregistrée dans le compte conducteur eCarUp. La Pico passe ensuite à la « Séquence véhicule branché en attente d'autorisation ».

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 6](/img/produkte-pico-ladestation-pico-display/06.png)

</div>
</div>

<div className="row">
<div className="col col--10">

S'affiche lorsque le véhicule est autorisé. La Pico passe ensuite à la « Séquence recharge active ».

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 7](/img/produkte-pico-ladestation-pico-display/07.png)

</div>
</div>

### Séquence authentification par RFID (Pico Online)

<div className="row">
<div className="col col--10">

La carte RFID est vérifiée. En cas de très bonne connexion, il se peut que le texte ne s'affiche pas du tout.

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 8](/img/produkte-pico-ladestation-pico-display/08.png)

</div>
</div>

<div className="row">
<div className="col col--10">

S'affiche lorsque la carte RFID est autorisée.

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 9](/img/produkte-pico-ladestation-pico-display/09.png)

</div>
</div>

<div className="row">
<div className="col col--10">

S'affiche lorsque l'autorisation RFID a réussi et qu'aucun véhicule n'est branché. Si un véhicule est branché, cet affichage est ignoré et la Pico passe à la « Séquence recharge active ».

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 10](/img/produkte-pico-ladestation-pico-display/10.png)

</div>
</div>

<div className="row">
<div className="col col--10">

S'affiche lorsque la carte RFID n'est pas autorisée. La Pico passe ensuite à la « Séquence véhicule branché en attente d'autorisation » ou à la « Séquence aucune recharge active ».

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 11](/img/produkte-pico-ladestation-pico-display/11.png)

</div>
</div>

### Séquence authentification par code QR (Pico Online)

<div className="row">
<div className="col col--10">

La recharge a été autorisée avec succès par code QR.

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 12](/img/produkte-pico-ladestation-pico-display/12.png)

</div>
</div>

<div className="row">
<div className="col col--10">

S'affiche lorsque l'autorisation a réussi et qu'aucun véhicule n'est branché. Si un véhicule est branché, cet affichage est ignoré et la Pico passe à la « Séquence recharge active ».

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 13](/img/produkte-pico-ladestation-pico-display/10.png)

</div>
</div>

### Séquence début de la recharge

<div className="row">
<div className="col col--10">

| Valeur / symbole | Description |
| --- | --- |
| 6A | Courant de charge autorisé |

Après l'autorisation de recharge, un courant de charge initial est attribué à la borne de recharge.
</div>
<div className="col col--2 text--center">

![Écran Pico – figure 14](/img/produkte-pico-ladestation-pico-display/14.png)

</div>
</div>

<div className="row">
<div className="col col--10">

| Valeur / symbole | Description |
| --- | --- |
| 32A | Courant de charge autorisé |

Lorsque le courant de charge maximal est augmenté par la gestion de la charge, cette image s'affiche brièvement avec le nouveau courant de charge max.

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 15](/img/produkte-pico-ladestation-pico-display/15.png)

</div>
</div>

### Séquence recharge active
Pendant la recharge, les images suivantes s'affichent en alternance.

<div className="row">
<div className="col col--10">

| Valeur / symbole | Description |
| --- | --- |
| 0.59 | Consommation depuis le début de la recharge |
| kWh | Unité de la consommation affichée |
| Batterie | Aucune signification |

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 16](/img/produkte-pico-ladestation-pico-display/16.png)

</div>
</div>

<div className="row">
<div className="col col--10">

| Valeur / symbole | Description |
| --- | --- |
| 22.09.23 | Date |
| 15:18:43 | Début de la recharge |
| 00:05:13 | Durée de la recharge active |

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 17](/img/produkte-pico-ladestation-pico-display/17.png)

</div>
</div>

<div className="row">
<div className="col col--10">

| Valeur / symbole | Description |
| --- | --- |
| 1.81 | Puissance |
| kW | Unité de la puissance affichée |
| ….. bleu | Puissance max. autorisée par la station (1 pixel = 1A) |
| ….. vert | Soutirage de courant par le véhicule par phase (1 pixel = 1A) |

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 18](/img/produkte-pico-ladestation-pico-display/18.png)

</div>
</div>

### Séquence fin de la recharge

<div className="row">
<div className="col col--10">

| Valeur / symbole | Description |
| --- | --- |
| 32A | Courant max. autorisé |

Lorsque le courant de charge maximal est réduit par la gestion de la charge, cette image s'affiche brièvement avec le nouveau courant de charge.

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 19](/img/produkte-pico-ladestation-pico-display/19.png)

</div>
</div>

<div className="row">
<div className="col col--10">

| Valeur / symbole | Description |
| --- | --- |
| 6A | Courant de charge minimal |

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 20](/img/produkte-pico-ladestation-pico-display/20.png)

</div>
</div>

<div className="row">
<div className="col col--10">

| Valeur / symbole | Description |
| --- | --- |
| BYE | Déconnexion réussie |

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 21](/img/produkte-pico-ladestation-pico-display/21.png)

</div>
</div>

<div className="row">
<div className="col col--10">

| Valeur / symbole | Description |
| --- | --- |
| 0.59 | Consommation totale de la dernière recharge |
| kWh | Unité de la consommation affichée |

Après la déconnexion, la consommation totale de la dernière recharge s'affiche pendant env. 14 s.

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 22](/img/produkte-pico-ladestation-pico-display/22.png)

</div>
</div>

### Séquence redémarrage de la station

Cette séquence décrit le redémarrage d'une station via le portail.

<div className="row">
<div className="col col--10">

| Valeur / symbole | Description |
| --- | --- |
| BYE | Signal de redémarrage |

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 23](/img/produkte-pico-ladestation-pico-display/21.png)

</div>
</div>

<div className="row">
<div className="col col--10">

| Valeur / symbole | Description |
| --- | --- |
| 0.59 | Consommation totale de la dernière recharge |
| kWh | Unité de la consommation affichée |

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 24](/img/produkte-pico-ladestation-pico-display/22.png)

</div>
</div>

<div className="row">
<div className="col col--10">

L'écran reste noir pendant env. 20 s.

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 25](/img/produkte-pico-ladestation-pico-display/25.png)

</div>
</div>

<div className="row">
<div className="col col--10">

C'est le premier signe que la Pico démarre.

Après la séquence redémarrage de la station, la Pico passe à la séquence mode MID.

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 26](/img/produkte-pico-ladestation-pico-display/26.png)

</div>
</div>

### Messages de défaut et avertissements

<div className="row">
<div className="col col--10">

**Défaut fatal**

- Erreur 1 : problème avec le module Wlan
- Erreur 2 : nous n'avons pas de communication M4
- Erreur 3 : une erreur avec le Meter SOM
- Erreur 4 : problème avec le capteur RDC

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 27](/img/produkte-pico-ladestation-pico-display/27.png)

</div>
</div>

<div className="row">
<div className="col col--10">

**SIM Error**

- Problème avec la carte SIM

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 28](/img/produkte-pico-ladestation-pico-display/28.png)

</div>
</div>

<div className="row">
<div className="col col--10">

**Diode Error**

- La diode du véhicule n'est pas correcte. Vérifiez le câble de recharge ainsi que la connexion au véhicule.

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 29](/img/produkte-pico-ladestation-pico-display/29.png)

</div>
</div>

<div className="row">
<div className="col col--10">

**Cable Error**

- Le câble de recharge signale une erreur. Vérifiez qu'il est correctement branché.

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 30](/img/produkte-pico-ladestation-pico-display/30.png)

</div>
</div>

<div className="row">
<div className="col col--10">

**P Limit**

- Le délestage est actif. La puissance de charge a été réduite.

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 31](/img/produkte-pico-ladestation-pico-display/31.png)

</div>
</div>

<div className="row">
<div className="col col--10">

**Warn RDC**

- Le RDC-DD 6mA selon IEC 62955 (dispositif de détection de courant de défaut continu) s'est déclenché. La recharge a été interrompue pour des raisons de sécurité.

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 32](/img/produkte-pico-ladestation-pico-display/32.png)

</div>
</div>

<div className="row">
<div className="col col--10">

**Offline**

- La borne de recharge n'a pas de connexion au smart-me Cloud.

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 33](/img/produkte-pico-ladestation-pico-display/33.png)

</div>
</div>

<div className="row">
<div className="col col--10">

**La LED s'allume en orange/rouge dans le coin supérieur droit de l'écran**

- Indique un message d'erreur. Au plus tard après 30 secondes, l'image d'erreur (p. ex. Cable Error) s'affiche à l'écran.

</div>
<div className="col col--2 text--center">

![Écran Pico – figure 34](/img/produkte-pico-ladestation-pico-display/34.png)

</div>
</div>

### Mode MID

Pour passer en mode MID, vous pouvez cliquer sur « Afficher le relevé du compteur à l'écran » (Zählerstand auf Display anzeigen) via l'action avancée dans le portail smart-me, démarrer ou redémarrer la station, ou utiliser le capteur de luminosité.


<div className="row">
<div className="col col--8">
À l'aide d'une lampe de poche dirigée sur le capteur de luminosité, l'utilisateur peut transmettre le code suivant : sombre - clair - sombre - clair - sombre (chaque état doit durer entre 1 et 5 secondes).
| Valeur / symbole | Description |
| --- | --- |
| Point | Capteur de lumière |

</div>
<div className="col col--4 text--center">

![Écran Pico – figure 35](/img/produkte-pico-ladestation-pico-display/35.png)

</div>
</div>

<div className="row">
<div className="col col--8">

| Valeur / symbole | Description |
| --- | --- |
| M | Mode MID actif |
| 0.2.1 | Version et somme de contrôle selon le code Obis |
| v 2.2 | Numéro de version du firmware |
| CRC 4F55 | Somme de contrôle du firmware |

</div>
<div className="col col--4 text--center">

![Écran Pico – figure 36](/img/produkte-pico-ladestation-pico-display/36.png)

</div>
</div>

<div className="row">
<div className="col col--8">

| Valeur / symbole | Description |
| --- | --- |
| M | Mode MID actif |
| F.F.0 | Code Obis |
| 03 | Code d'erreur |

Les codes d'erreur ne s'affichent qu'en présence d'une erreur. Sinon, la zone reste vide.

</div>
<div className="col col--4 text--center">

![Écran Pico – figure 37](/img/produkte-pico-ladestation-pico-display/37.png)
| Code d'erreur | Description |
| --- | --- |
| x1–x3 | La borne de recharge n'est pas étalonnée |
| x4 | Erreur processus d'affichage (somme de contrôle) |
| 1x | Erreur dans le Meter-SOM (matériel) |
| 2x–3x | Erreur Meter-SOM (somme de contrôle) |
| 4x | Erreur Meter-SOM (Flash) |
| Autres | Erreur générale Meter-SOM |

</div>
</div>

<div className="row">
<div className="col col--8">

| Valeur / symbole | Description |
| --- | --- |
| M | Mode MID actif |
| 1.8.0 | Code Obis |
| 00013.04 kWh | Le relevé du compteur en kWh avec 2 décimales |

</div>
<div className="col col--4 text--center">

![Écran Pico – figure 38](/img/produkte-pico-ladestation-pico-display/38.png)

</div>
</div>
