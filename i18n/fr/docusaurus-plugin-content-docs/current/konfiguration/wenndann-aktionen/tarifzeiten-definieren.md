---
title: 'Définir les plages tarifaires'
slug: '/konfiguration/wenndann-aktionen/tarifzeiten-definieren'
description: 'Structure de l''action Si pour les tarifs virtuels'
sidebar_label: 'Définir les plages tarifaires'
---
![Définir les plages tarifaires – illustration 1](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/01.png)

## Structure de l'action Si pour les tarifs virtuels

Tu peux définir avec une condition supplémentaire à partir de quand ce tarif doit être valable. Il peut s'agir d'une plage horaire (p. ex. pour les heures pleines / heures creuses) ou de n'importe quelle autre condition. La condition doit avoir été définie au préalable comme [action si/alors](/konfiguration/wenndann-aktionen). Les exemples les plus courants sont décrits ci-dessous.

Remarques :

- Lorsque tu as défini tous les tarifs, tu dois impérativement cliquer sur Recalculer (Neu rechnen). Ainsi, tous les tarifs virtuels sont calculés correctement. Cette opération peut durer quelques heures.


<Video src="0LTDpKKA3-k" title="Video" />

### Interface Si / Alors

![Définir les plages tarifaires – illustration 2](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/02.png)

## Créer un double tarif étape par étape

Consulte sur la feuille tarifaire les plages horaires correspondantes pour les heures pleines. Dans notre exemple, la situation est la suivante :

Plage HP :

Lu-Ve : 7:00 à 22:00
Sa : 7:00 à 13:00£


Plage HC :

Lu-Ve : 22:00 à 7:00

Sa : 13:00 à 00:00

Di : toute la journée

### Créer la plage HP

Clique sur le « + » pour créer un nouveau Timing.

Choisis la liaison OU

Fonction OU :

Si l'une des conditions SI est remplie, on se trouve en heures pleines.

Clique sur le « + » sous Événements SI pour créer la plage HP Lu-Ve.

![Définir les plages tarifaires – illustration 3](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/03.png)

Choisis Date et heure (Datum & Uhrzeit)



![Définir les plages tarifaires – illustration 4](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Définis les plages horaires pour Lu-Ve

7:00 à 22:00



et enregistre le réglage.

![Définir les plages tarifaires – illustration 5](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/05.png)

Clique à nouveau sur « + » sous les événements SI pour définir le samedi.

![Définir les plages tarifaires – illustration 6](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/06.png)

Choisis Date et heure (Datum & Uhrzeit)

![Définir les plages tarifaires – illustration 7](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Définis les plages horaires pour le samedi

7:00 à 13:00



et enregistre le réglage.

![Définir les plages tarifaires – illustration 8](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/08.png)

La plage HP est maintenant définie.



On continue avec la plage HC

![Définir les plages tarifaires – illustration 9](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/09.png)

### Créer la plage HC

Clique sur le « + » pour créer un nouveau Timing.

Clique sur « + » pour saisir une action supplémentaire pour la plage HC

![Définir les plages tarifaires – illustration 10](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/10.png)

![Définir les plages tarifaires – illustration 11](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/11.png)

Choisis Date et heure (Datum & Uhrzeit)

![Définir les plages tarifaires – illustration 12](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Définis la plage HC pour Lu-Ve

Elle correspond dans ce cas à la plage de 22:00 à 7:00



Enregistre le réglage.

![Définir les plages tarifaires – illustration 13](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/13.png)

Clique sur « + » pour définir le samedi

![Définir les plages tarifaires – illustration 14](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/14.png)

Choisis Date et heure (Datum & Uhrzeit)

![Définir les plages tarifaires – illustration 15](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Le samedi se définit de la manière suivante :

13:00 à 00:00 du jour



Enregistre le réglage.

![Définir les plages tarifaires – illustration 16](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/16.png)

Clique sur « + » pour définir le dimanche qui manque encore

![Définir les plages tarifaires – illustration 17](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/17.png)

Choisis Date et heure (Datum & Uhrzeit)

![Définir les plages tarifaires – illustration 18](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Pour des heures creuses toute la journée le dimanche, on saisit pour le dimanche 00:00 à 00:00.



Enregistre le réglage

![Définir les plages tarifaires – illustration 19](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/19.png)

Maintenant que tu as défini les plages tarifaires pertinentes, retourne à la définition des tarifs pour attribuer les Timings aux tarifs.

![Définir les plages tarifaires – illustration 20](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/20.png)

### Étape suivante : définir les tarifs avec les plages tarifaires

## Autres exemples

Structure : heures pleines et heures creuses pour l'électricité du réseau et tarif unique pour l'électricité solaire

- Électricité solaire tarif unique : définir le tarif solaire sans action Si

- Électricité du réseau heures pleines : définir un tarif normal avec action Si

    - Exemple. Lu à Ve 7h00 à 22h00 ou Sa 7h00 à 13h00 

- Électricité du réseau heures creuses : définir un tarif normal sans action Si


Logique : l'électricité solaire disponible est répartie en premier. S'il n'y en a pas assez ou pas du tout, le tarif normal qui remplit une condition est utilisé. Pour terminer, le tarif sans condition est envoyé pour le reste de l'électricité.

Structure : heures pleines et heures creuses pour l'électricité du réseau et l'électricité solaire

- Électricité solaire heures pleines : définir le tarif solaire avec action Si

    - Exemple : Lu à Ve 7h00 à 22h00 ou Sa 7h00 à 13h00 

- Électricité solaire heures creuses : définir le tarif solaire avec action Si

    - Exemple : Lu à Ve 22h00 à 7h00 ou Sa 13h00 à 7h00 ou Di 0h00 à 0h00

- Électricité du réseau heures pleines : définir un tarif normal avec action Si

    - Utiliser la même action Si que pour l'électricité solaire heures pleines 

- Électricité du réseau heures creuses : définir un tarif normal avec action Si

    - Utiliser la même action Si que pour l'électricité solaire heures creuses 


Logique : l'électricité solaire disponible avec la condition valable est utilisée en premier. S'il n'y en a pas assez ou pas du tout, le tarif normal avec la condition valable est utilisé. Il est important que dans ce cas d'application, 24h/jour soient couvertes par une condition Si.

Structure : été et hiver avec heures pleines et heures creuses pour l'électricité du réseau et tarif unique pour l'électricité solaire

- Électricité solaire heures pleines : définir le tarif solaire sans action Si

- Électricité du réseau heures pleines été : définir un tarif normal avec action Si

    - Exemple : plage horaire Chaque jour : Lu à Di 7h00 à 22h00 et plage horaire Chaque année du 1 / 04 / 00:00 au 1 / 10 / 00:00.

- Électricité du réseau heures creuses été : définir un tarif normal avec action Si

    - Exemple : plage horaire Chaque jour : Lu à Di 22h00 à 07h00 et plage horaire Chaque année du 1 / 04 / 00:00 au 1 / 10 / 00:00.

- Électricité du réseau heures pleines hiver : définir un tarif normal avec action Si

    - Exemple : plage horaire Chaque jour : Lu à Di 7h00 à 22h00 et plage horaire Chaque année du 1 / 10 / 00:00 au 1 / 4 / 00:00.

- Électricité du réseau heures creuses hiver : définir un tarif normal avec action Si

    - Exemple : plage horaire Chaque jour : Lu à Di 22h00 à 07h00 et plage horaire Chaque année du 1 / 10 / 00:00 au 1 / 4 / 00:00.


Logique : l'électricité solaire disponible est utilisée en premier. S'il n'y en a pas assez ou pas du tout, le tarif normal avec la condition valable est utilisé. Il est important que dans ce cas d'application, 24h/jour soient couvertes par une condition Si.

Structure : été et hiver avec heures pleines et heures creuses pour l'électricité du réseau et tarif unique pour l'électricité solaire et heures creuses sur le midi uniquement en hiver (p. ex. EWS/EBS)

Exemple

- Électricité du réseau et solaire heures creuses hiver 

    - Exemple : hiver HC 22h00 à 07h00 entre le 1.10 et le 1.4.

    - Action si/alors avec liaison ET

        - Plage horaire Chaque jour : Lu à Di 22h00 à 07h00 

        - Plage horaire Chaque année du 1 / 10 / 00:00 au 1 / 04 / 00:00.

- Électricité du réseau et solaire heures pleines hiver 

    - Exemple : hiver HP 07h00 à 22h00 entre le 1.10 et le 1.4.

    - Action si/alors avec liaison ET

        - Plage horaire Chaque jour : Lu à Di 7h00 à 22h00 

        - Plage horaire Chaque année du 1 / 10 / 00:00 au 1 / 04 / 00:00.

- Électricité du réseau et solaire heures creuses été

    - Exemple : été HC 00h00 à 06h00 et 12h00 à 15h00 entre le 1.4 et le 1.10

    - Action si/alors avec liaison ET

        - Plage horaire Chaque jour : Lu à Di 12h00 à 06h00 

        - Plage horaire Chaque jour : Lu à Di 00h00 à 15h00 

        - Plage horaire Chaque année du 1 / 4 / 00:00 au 1 / 10 / 00:00.

- Électricité du réseau et solaire heures pleines été 

    - Exemple : été HP 06h00 à 12h00 et 15h00 à 00h00 entre le 1.4 et le 1.10

    - Action si/alors avec liaison ET

        - Plage horaire Chaque jour : Lu à Di 06h00 à 00h00 

        - Plage horaire Chaque jour : Lu à Di 15h00 à 12h00 

        - Plage horaire Chaque année du 1 / 4 / 00:00 au 1 / 10 / 00:00.


Logique : l'électricité solaire disponible est utilisée en premier. S'il n'y en a pas assez ou pas du tout, le tarif normal avec la condition valable est utilisé. Il est important que dans ce cas d'application, 24h/jour soient couvertes par une condition Si.

Structure : été et hiver avec heures pleines et heures creuses pour l'électricité du réseau et l'électricité solaire, heures creuses pendant la journée en été et heures pleines en hiver (p. ex. Energie Uri à partir du 1.10.2025)

Description : ici, il faut travailler en deux étapes. 1x Si Alors et 1x avec les plages horaires dans les tarifs virtuels

Premièrement, les actions Si doivent être définies.

- Électricité du réseau et solaire été HC

    - Exemple : été HC Lu à Ve 06h00 à 22h00 Lu à Ve et Sa et Di toujours

    - Nom : Uri Sommer NT

    - Action si/alors avec liaison OU

        - Plage horaire Lu à Ve : 6h00 à 22h00 

        - Plage horaire Sa et Di : 00h00 à 00h00




- Électricité du réseau et solaire été HP

    - Exemple : été HP Lu à Ve 22h00 à 06h00

    - Nom : Uri Sommer HT

    - Action si/alors

        - Plage horaire Lu à Ve : 22h00 à 06h00 




- Électricité du réseau et solaire hiver HC

    - Exemple : hiver HC Lu à Ve 22h00 à 06h00 Lu à Ve et Sa et Di toujours

    - Nom : Uri Winter NT

    - Action si/alors avec liaison OU

        - Plage horaire Lu à Ve : 22h00 à 06h00 

        - Plage horaire Sa et Di : 00h00 à 00h00




- Électricité du réseau et solaire hiver HP

    - Exemple : hiver HP Lu à Ve 06h00 à 22h00

    - Nom : Uri Winter HT

    - Action si/alors avec liaison OU

        - Plage horaire Lu à Ve : 06h00 à 22h00 


Ensuite, les prix par période doivent être définis.

Les périodes, respectivement la durée, doivent être enregistrées dans ce cas. Pour ce modèle tarifaire, une combinaison de Si Alors et de période est nécessaire.

- Nom : Uri Sommer HT Netz

    - Type : tarif de réseau

    - Durée : 1.4.2026 au 30.9.2026

    - Condition supplémentaire : Uri Sommer HT

- Nom : Uri Sommer HT Solar


- Type : tarif solaire y c. RCP virtuel (vRCP) 

- Durée : 1.4.2026 au 30.9.2026

- Condition supplémentaire : Uri Sommer HT


- Nom : Uri Sommer NT Netz

    - Type : tarif de réseau

    - Durée : 1.4.2026 au 30.9.2026

    - Condition supplémentaire : Uri Sommer NT

- Nom : Uri Sommer NT Solar

    - Type : tarif solaire y c. RCP virtuel (vRCP) (bilan/productions)

    - Durée : 1.4.2026 au 30.9.2026

    - Condition supplémentaire : Uri Sommer NT

- Nom : Uri Winter HT Netz

    - Type : tarif de réseau

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire : Uri Winter HT 

- Nom : Uri Winter HT Solar

    - Type : tarif solaire y c. RCP virtuel (vRCP) (bilan/productions)

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire : Uri Winter HT

- Nom : Uri Winter NT Netz

    - Type : tarif de réseau

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire : Uri Winter NT

- Nom : Uri Winter NT Solar

    - Type : tarif solaire y c. RCP virtuel (vRCP) (bilan/productions)

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire : Uri Winter NT 


<Video src="" title="Video" />

Wiki Tarife Enerige Uri Tarife 2026.mp4
