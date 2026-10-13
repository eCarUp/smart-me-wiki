---
title: 'Définir les plages tarifaires'
slug: '/konfiguration/wenndann-aktionen/tarifzeiten-definieren'
description: 'Structure de l''action SI pour les tarifs virtuels'
sidebar_label: 'Définir les plages tarifaires'
---
![Définir les plages tarifaires – figure 1](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/01.png)

## Structure de l'action SI pour les tarifs virtuels

Une condition supplémentaire vous permet de définir à partir de quand ce tarif doit s'appliquer. Il peut s'agir d'une période (p. ex. pour les heures pleines / heures creuses) ou de toute autre condition. La condition doit avoir été définie au préalable comme [action si/alors](/konfiguration/wenndann-aktionen). Les exemples les plus courants sont décrits ci-dessous.

Remarques :

- Une fois tous les tarifs définis, vous devez impérativement cliquer sur « Recalculer » (Neu rechnen). Tous les tarifs virtuels sont ainsi calculés correctement. Cette opération peut durer quelques heures.


<Video src="0LTDpKKA3-k" title="Vidéo YouTube, décompter le solaire en heures pleines et heures creuses" />

### Interface Si / Alors

![Définir les plages tarifaires – figure 2](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/02.png)

## Créer un double tarif étape par étape

Consultez sur la fiche tarifaire les horaires des heures pleines. Dans notre exemple, la situation est la suivante :

Heures pleines (HT) :

lu-ve : de 7:00 à 22:00
sa : de 7:00 à 13:00£


Heures creuses (NT) :

lu-ve : de 22:00 à 7:00

sa : de 13:00 à 00:00

di : toute la journée

### Créer la plage HT

Cliquez sur le « + » pour créer un nouveau timing.

Choisissez la liaison OU (Oder)

Fonction OU (ODER) :

Si l'une des conditions SI (WENN) est remplie, c'est la plage HT.

Sous « Événements SI » (WENN Ereignisse), cliquez sur le « + » pour créer la plage HT lu-ve.

![Définir les plages tarifaires – figure 3](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/03.png)

Choisissez « Date et heure » (Datum & Uhrzeit)



![Définir les plages tarifaires – figure 4](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Définissez les horaires pour lu-ve

de 7:00 à 22:00



et enregistrez le réglage.

![Définir les plages tarifaires – figure 5](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/05.png)

Sous les événements SI (WENN Ereignisse), cliquez à nouveau sur « + » pour définir le samedi.

![Définir les plages tarifaires – figure 6](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/06.png)

Choisissez « Date et heure » (Datum & Uhrzeit)

![Définir les plages tarifaires – figure 7](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Définissez les horaires pour le samedi

de 7:00 à 13:00



et enregistrez le réglage.

![Définir les plages tarifaires – figure 8](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/08.png)

La plage HT est maintenant définie.



Passons à la plage NT

![Définir les plages tarifaires – figure 9](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/09.png)

### Créer la plage NT

Cliquez sur le « + » pour créer un nouveau timing.

Cliquez sur « + » pour saisir une autre action pour la plage NT

![Définir les plages tarifaires – figure 10](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/10.png)

![Définir les plages tarifaires – figure 11](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/11.png)

Choisissez « Date et heure » (Datum & Uhrzeit)

![Définir les plages tarifaires – figure 12](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Définissez la plage NT pour lu-ve

Dans ce cas, elle correspond à la période de 22:00 à 7:00



Enregistrez le réglage.

![Définir les plages tarifaires – figure 13](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/13.png)

Cliquez sur « + » pour définir le samedi

![Définir les plages tarifaires – figure 14](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/14.png)

Choisissez « Date et heure » (Datum & Uhrzeit)

![Définir les plages tarifaires – figure 15](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Le samedi se définit comme suit :

de 13:00 à 00:00 du jour même



Enregistrez le réglage.

![Définir les plages tarifaires – figure 16](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/16.png)

Cliquez sur « + » pour définir le dimanche, qui manque encore

![Définir les plages tarifaires – figure 17](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/17.png)

Choisissez « Date et heure » (Datum & Uhrzeit)

![Définir les plages tarifaires – figure 18](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Pour des heures creuses toute la journée le dimanche, saisissez de 00:00 à 00:00 pour le dimanche.



Enregistrez le réglage

![Définir les plages tarifaires – figure 19](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/19.png)

Maintenant que vous avez défini les plages tarifaires pertinentes, retournez à la définition des tarifs pour attribuer les timings aux tarifs.

![Définir les plages tarifaires – figure 20](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/20.png)

### Étape suivante : définir les tarifs avec les plages tarifaires

## Autres exemples

Structure : heures pleines et heures creuses pour l'électricité du réseau et tarif unique pour l'électricité solaire

- Tarif unique électricité solaire : définir un tarif solaire sans action SI

- Électricité du réseau heures pleines : définir un tarif normal avec action SI

    - Exemple. lu à ve 7h00 à 22h00 ou sa 7h00 à 13h00 

- Électricité du réseau heures creuses : définir un tarif normal sans action SI


Logique : l'électricité solaire disponible est d'abord répartie. S'il y en a trop peu ou pas du tout, le tarif normal qui remplit une condition est utilisé. Enfin, le tarif sans condition est appliqué au reste de l'électricité.

Structure : heures pleines et heures creuses pour l'électricité du réseau et l'électricité solaire

- Électricité solaire heures pleines : définir un tarif solaire avec action SI

    - Exemple : lu à ve 7h00 à 22h00 ou sa 7h00 à 13h00 

- Électricité solaire heures creuses : définir un tarif solaire avec action SI

    - Exemple : lu à ve 22h00 à 7h00 ou sa 13h00 à 7h00 ou di 0h00 à 0h00

- Électricité du réseau heures pleines : définir un tarif normal avec action SI

    - Utiliser la même action SI que pour les heures pleines de l'électricité solaire 

- Électricité du réseau heures creuses : définir un tarif normal avec action SI

    - Utiliser la même action SI que pour les heures creuses de l'électricité solaire 


Logique : l'électricité solaire disponible avec la condition valable est d'abord utilisée. S'il y en a trop peu ou pas du tout, le tarif normal avec la condition valable est utilisé. Dans ce cas d'application, il est important que les 24h/jour soient couvertes par une condition SI.

Structure : été et hiver avec heures pleines et heures creuses pour l'électricité du réseau et tarif unique pour l'électricité solaire

- Électricité solaire heures pleines : définir un tarif solaire sans action SI

- Électricité du réseau heures pleines été : définir un tarif normal avec action SI

    - Exemple : période « Chaque jour » (Jeden Tag) : lu à di 7h00 à 22h00 et période « Chaque année » (Jedes Jahr) du 1 / 04 / 00:00 au 1 / 10 / 00:00.

- Électricité du réseau heures creuses été : définir un tarif normal avec action SI

    - Exemple : période « Chaque jour » (Jeden Tag) : lu à di 22h00 à 07h00 et période « Chaque année » (Jedes Jahr) du 1 / 04 / 00:00 au 1 / 10 / 00:00.

- Électricité du réseau heures pleines hiver : définir un tarif normal avec action SI

    - Exemple : période « Chaque jour » (Jeden Tag) : lu à di 7h00 à 22h00 et période « Chaque année » (Jedes Jahr) du 1 / 10 / 00:00 au 1 / 4 / 00:00.

- Électricité du réseau heures creuses hiver : définir un tarif normal avec action SI

    - Exemple : période « Chaque jour » (Jeden Tag) : lu à di 22h00 à 07h00 et période « Chaque année » (Jedes Jahr) du 1 / 10 / 00:00 au 1 / 4 / 00:00.


Logique : l'électricité solaire disponible est d'abord utilisée. S'il y en a trop peu ou pas du tout, le tarif normal avec la condition valable est utilisé. Dans ce cas d'application, il est important que les 24h/jour soient couvertes par une condition SI.

Structure : été et hiver avec heures pleines et heures creuses pour l'électricité du réseau, tarif unique pour l'électricité solaire et heures creuses à midi uniquement en hiver (p. ex. EWS/EBS)

Exemple

- Électricité du réseau et solaire heures creuses hiver 

    - Exemple : hiver NT 22h00 à 07h00 entre le 1.10 et le 1.4.

    - Action si/alors avec liaison ET (UND)

        - Période « Chaque jour » (Jeden Tag) : lu à di 22h00 à 07h00 

        - Période « Chaque année » (Jedes Jahr) du 1 / 10 / 00:00 au 1 / 04 / 00:00.

- Électricité du réseau et solaire heures pleines hiver 

    - Exemple : hiver HT 07h00 à 22h00 entre le 1.10 et le 1.4.

    - Action si/alors avec liaison ET (UND)

        - Période « Chaque jour » (Jeden Tag) : lu à di 7h00 à 22h00 

        - Période « Chaque année » (Jedes Jahr) du 1 / 10 / 00:00 au 1 / 04 / 00:00.

- Électricité du réseau et solaire heures creuses été

    - Exemple : été NT 00h00 à 06h00 et 12h00 à 15h00 entre le 1.4 et le 1.10

    - Action si/alors avec liaison ET (UND)

        - Période « Chaque jour » (Jeden Tag) : lu à di 12h00 à 06h00 

        - Période « Chaque jour » (Jeden Tag) : lu à di 00h00 à 15h00 

        - Période « Chaque année » (Jedes Jahr) du 1 / 4 / 00:00 au 1 / 10 / 00:00.

- Électricité du réseau et solaire heures pleines été 

    - Exemple : été HT 06h00 à 12h00 et 15h00 à 00h00 entre le 1.4 et le 1.10

    - Action si/alors avec liaison ET (UND)

        - Période « Chaque jour » (Jeden Tag) : lu à di 06h00 à 00h00 

        - Période « Chaque jour » (Jeden Tag) : lu à di 15h00 à 12h00 

        - Période « Chaque année » (Jedes Jahr) du 1 / 4 / 00:00 au 1 / 10 / 00:00.


Logique : l'électricité solaire disponible est d'abord utilisée. S'il y en a trop peu ou pas du tout, le tarif normal avec la condition valable est utilisé. Dans ce cas d'application, il est important que les 24h/jour soient couvertes par une condition SI.

Structure : été et hiver avec heures pleines et heures creuses pour l'électricité du réseau et l'électricité solaire, heures creuses en journée en été et heures pleines en hiver (p. ex. Energie Uri à partir du 1.10.2025)

Description : il faut ici procéder en deux étapes. 1x avec une action si/alors et 1x avec les périodes dans les tarifs virtuels

Il faut d'abord définir les actions SI.

- Électricité du réseau et solaire été NT

    - Exemple : été NT lu à ve 06h00 à 22h00 lu à ve et sa et di toujours

    - Nom : Uri Sommer NT

    - Action si/alors avec liaison OU (ODER)

        - Période lu à ve : 6h00 à 22h00 

        - Période sa et di : 00h00 à 00h00




- Électricité du réseau et solaire été HT

    - Exemple : été HT lu à ve 22h00 à 06h00

    - Nom : Uri Sommer HT

    - Action si/alors

        - Période lu à ve : 22h00 à 06h00 




- Électricité du réseau et solaire hiver NT

    - Exemple : hiver NT lu à ve 22h00 à 06h00 lu à ve et sa et di toujours

    - Nom : Uri Winter NT

    - Action si/alors avec liaison OU (ODER)

        - Période lu à ve : 22h00 à 06h00 

        - Période sa et di : 00h00 à 00h00




- Électricité du réseau et solaire hiver HT

    - Exemple : hiver HT lu à ve 06h00 à 22h00

    - Nom : Uri Winter HT

    - Action si/alors avec liaison OU (ODER)

        - Période lu à ve : 06h00 à 22h00 


Il faut ensuite définir les prix par période.

Dans ce cas, les périodes ou durées doivent être enregistrées. Ce modèle tarifaire nécessite une combinaison d'actions si/alors et de périodes.

- Nom : Uri Sommer HT Netz

    - Type : tarif réseau (Netztarif)

    - Durée (Dauer) : 1.4.2026 au 30.9.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Sommer HT

- Nom : Uri Sommer HT Solar


- Type : tarif solaire, vRCP incl. (Solartarif inkl. vZEV) 

- Durée (Dauer) : 1.4.2026 au 30.9.2026

- Condition supplémentaire (Zusätzliche Bedingung) : Uri Sommer HT


- Nom : Uri Sommer NT Netz

    - Type : tarif réseau (Netztarif)

    - Durée (Dauer) : 1.4.2026 au 30.9.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Sommer NT

- Nom : Uri Sommer NT Solar

    - Type : tarif solaire, vRCP incl. (bilan/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durée (Dauer) : 1.4.2026 au 30.9.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Sommer NT

- Nom : Uri Winter HT Netz

    - Type : tarif réseau (Netztarif)

    - Durée (Dauer) : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Winter HT 

- Nom : Uri Winter HT Solar

    - Type : tarif solaire, vRCP incl. (bilan/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durée (Dauer) : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Winter HT

- Nom : Uri Winter NT Netz

    - Type : tarif réseau (Netztarif)

    - Durée (Dauer) : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Winter NT

- Nom : Uri Winter NT Solar

    - Type : tarif solaire, vRCP incl. (bilan/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durée (Dauer) : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Winter NT 


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, vidéo Wiki tarifs Energie Uri 2026 (Wiki Tarife Enerige Uri Tarife 2026.mp4)" />

Wiki Tarife Enerige Uri Tarife 2026.mp4
