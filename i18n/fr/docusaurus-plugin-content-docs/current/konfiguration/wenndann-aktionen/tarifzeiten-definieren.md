---
title: 'Définir les plages tarifaires'
slug: '/konfiguration/wenndann-aktionen/tarifzeiten-definieren'
description: 'Structure de l''action Si pour les tarifs virtuels'
sidebar_label: 'Définir les plages tarifaires'
naechste_schritte: [konfiguration/billing/stromtarife-definieren/index]
---
![Définir les plages tarifaires – Illustration 1](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/01.png)

## Structure de l'action Si pour les tarifs virtuels

Une condition supplémentaire vous permet de définir à partir de quand ce tarif s'applique. Il peut s'agir d'une période (p. ex. pour les heures pleines / heures creuses) ou de toute autre condition. La condition doit avoir été définie au préalable comme [action si/alors](/konfiguration/wenndann-aktionen). Les exemples les plus courants sont décrits ci-dessous.

Remarques :

- Une fois tous les tarifs définis, vous devez impérativement cliquer sur « Recalculer » (Neu rechnen). Tous les tarifs virtuels sont ainsi calculés correctement. Cette opération peut prendre plusieurs heures.


<Video src="0LTDpKKA3-k" title="Vidéo YouTube, décompter l'énergie solaire en heures pleines et heures creuses" />

### Interface Si / Alors

![Définir les plages tarifaires – Illustration 2](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/02.png)

## Créer un double tarif étape par étape

Consultez sur la fiche tarifaire les horaires des heures pleines. Dans notre exemple, la situation est la suivante :

Plage HP (heures pleines) :

Lu-Ve : de 7:00 à 22:00
Sa : de 7:00 à 13:00£


Plage HC (heures creuses) :

Lu-Ve : de 22:00 à 7:00

Sa : de 13:00 à 00:00

Di : toute la journée

### Créer la plage HP

Cliquez sur le « + » pour créer un nouveau timing.

Choisissez la liaison OU (Oder)

Fonction OU (ODER) :

Si l'une des conditions SI (WENN) est remplie, c'est la plage HP.

Sous Événements SI (WENN Ereignisse), cliquez sur le « + » pour créer la plage HP Lu-Ve.

![Définir les plages tarifaires – Illustration 3](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/03.png)

Choisissez Date & heure (Datum & Uhrzeit)



![Définir les plages tarifaires – Illustration 4](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Définissez les horaires pour Lu-Ve

de 7:00 à 22:00



et enregistrez le réglage.

![Définir les plages tarifaires – Illustration 5](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/05.png)

Sous les Événements SI (WENN Ereignisse), cliquez à nouveau sur « + » pour définir le samedi.

![Définir les plages tarifaires – Illustration 6](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/06.png)

Choisissez Date & heure (Datum & Uhrzeit)

![Définir les plages tarifaires – Illustration 7](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Définissez les horaires pour le samedi

de 7:00 à 13:00



et enregistrez le réglage.

![Définir les plages tarifaires – Illustration 8](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/08.png)

La plage HP est maintenant définie.



Passons à la plage HC

![Définir les plages tarifaires – Illustration 9](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/09.png)

### Créer la plage HC

<div className="row">
<div className="col col--5">

Cliquez sur le « + » pour créer un nouveau timing.

Cliquez sur « + » pour saisir une action supplémentaire pour la plage HC

</div>
<div className="col col--7 text--center">

![Définir les plages tarifaires – Illustration 10](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/10.png)

</div>
</div>

![Définir les plages tarifaires – Illustration 11](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/11.png)

Choisissez Date & heure (Datum & Uhrzeit)

![Définir les plages tarifaires – Illustration 12](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Définissez la plage HC pour Lu-Ve

Dans ce cas, elle correspond à la période de 22:00 à 7:00



Enregistrez le réglage.

![Définir les plages tarifaires – Illustration 13](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/13.png)

Cliquez sur « + » pour définir le samedi

![Définir les plages tarifaires – Illustration 14](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/14.png)

Choisissez Date & heure (Datum & Uhrzeit)

![Définir les plages tarifaires – Illustration 15](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Le samedi se définit comme suit :

de 13:00 à 00:00 du jour même



Enregistrez le réglage.

![Définir les plages tarifaires – Illustration 16](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/16.png)

Cliquez sur « + » pour définir le dimanche, qui manque encore

![Définir les plages tarifaires – Illustration 17](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/17.png)

Choisissez Date & heure (Datum & Uhrzeit)

![Définir les plages tarifaires – Illustration 18](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Pour des heures creuses toute la journée le dimanche, saisissez 00:00 à 00:00 pour le dimanche.



Enregistrez le réglage

![Définir les plages tarifaires – Illustration 19](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/19.png)

<div className="row">
<div className="col col--4">

Maintenant que vous avez défini les plages tarifaires pertinentes, revenez à la définition des tarifs pour attribuer les timings aux tarifs.

</div>
<div className="col col--8 text--center">

![Définir les plages tarifaires – Illustration 20](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/20.png)

</div>
</div>

## Autres exemples

Structure : heures pleines et heures creuses pour l'électricité du réseau et tarif unique pour l'électricité solaire

- Tarif unique électricité solaire : définir un tarif solaire sans action Si

- Heures pleines électricité du réseau : définir un tarif normal avec action Si

    - Exemple : Lu à Ve 7h00 à 22h00 ou Sa 7h00 à 13h00 

- Heures creuses électricité du réseau : définir un tarif normal sans action Si


Logique : l'électricité solaire disponible est d'abord répartie. Si elle est insuffisante ou indisponible, le tarif normal dont la condition est remplie est utilisé. Enfin, le tarif sans condition est appliqué au reste de l'électricité.

Structure : heures pleines et heures creuses pour l'électricité du réseau et l'électricité solaire

- Heures pleines électricité solaire : définir un tarif solaire avec action Si

    - Exemple : Lu à Ve 7h00 à 22h00 ou Sa 7h00 à 13h00 

- Heures creuses électricité solaire : définir un tarif solaire avec action Si

    - Exemple : Lu à Ve 22h00 à 7h00 ou Sa 13h00 à 7h00 ou Di 0h00 à 0h00

- Heures pleines électricité du réseau : définir un tarif normal avec action Si

    - Utiliser la même action Si que pour les heures pleines de l'électricité solaire 

- Heures creuses électricité du réseau : définir un tarif normal avec action Si

    - Utiliser la même action Si que pour les heures creuses de l'électricité solaire 


Logique : l'électricité solaire disponible est d'abord utilisée avec la condition valable. Si elle est insuffisante ou indisponible, le tarif normal avec la condition valable est utilisé. Dans ce cas d'application, il est important que les 24h/jour soient couvertes par une condition Si.

Structure : été et hiver avec heures pleines et heures creuses pour l'électricité du réseau et tarif unique pour l'électricité solaire

- Heures pleines électricité solaire : définir un tarif solaire sans action Si

- Heures pleines électricité du réseau été : définir un tarif normal avec action Si

    - Exemple : période Chaque jour (Jeden Tag) : Lu à Di 7h00 à 22h00 et période Chaque année (Jedes Jahr) du 1 / 04 / 00:00 au 1 / 10 / 00:00.

- Heures creuses électricité du réseau été : définir un tarif normal avec action Si

    - Exemple : période Chaque jour (Jeden Tag) : Lu à Di 22h00 à 07h00 et période Chaque année (Jedes Jahr) du 1 / 04 / 00:00 au 1 / 10 / 00:00.

- Heures pleines électricité du réseau hiver : définir un tarif normal avec action Si

    - Exemple : période Chaque jour (Jeden Tag) : Lu à Di 7h00 à 22h00 et période Chaque année (Jedes Jahr) du 1 / 10 / 00:00 au 1 / 4 / 00:00.

- Heures creuses électricité du réseau hiver : définir un tarif normal avec action Si

    - Exemple : période Chaque jour (Jeden Tag) : Lu à Di 22h00 à 07h00 et période Chaque année (Jedes Jahr) du 1 / 10 / 00:00 au 1 / 4 / 00:00.


Logique : l'électricité solaire disponible est d'abord utilisée. Si elle est insuffisante ou indisponible, le tarif normal avec la condition valable est utilisé. Dans ce cas d'application, il est important que les 24h/jour soient couvertes par une condition Si.

Structure : été et hiver avec heures pleines et heures creuses pour l'électricité du réseau et tarif unique pour l'électricité solaire, et heures creuses à midi uniquement en hiver (p. ex. EWS/EBS)

Exemple

- Heures creuses électricité du réseau et solaire hiver 

    - Exemple : HC hiver 22h00 à 07h00 entre le 1.10 et le 1.4.

    - Action si/alors avec liaison ET (UND)

        - Période Chaque jour (Jeden Tag) : Lu à Di 22h00 à 07h00 

        - Période Chaque année (Jedes Jahr) du 1 / 10 / 00:00 au 1 / 04 / 00:00.

- Heures pleines électricité du réseau et solaire hiver 

    - Exemple : HP hiver 07h00 à 22h00 entre le 1.10 et le 1.4.

    - Action si/alors avec liaison ET (UND)

        - Période Chaque jour (Jeden Tag) : Lu à Di 7h00 à 22h00 

        - Période Chaque année (Jedes Jahr) du 1 / 10 / 00:00 au 1 / 04 / 00:00.

- Heures creuses électricité du réseau et solaire été

    - Exemple : HC été 00h00 à 06h00 et 12h00 à 15h00 entre le 1.4 et le 1.10

    - Action si/alors avec liaison ET (UND)

        - Période Chaque jour (Jeden Tag) : Lu à Di 12h00 à 06h00 

        - Période Chaque jour (Jeden Tag) : Lu à Di 00h00 à 15h00 

        - Période Chaque année (Jedes Jahr) du 1 / 4 / 00:00 au 1 / 10 / 00:00.

- Heures pleines électricité du réseau et solaire été 

    - Exemple : HP été 06h00 à 12h00 et 15h00 à 00h00 entre le 1.4 et le 1.10

    - Action si/alors avec liaison ET (UND)

        - Période Chaque jour (Jeden Tag) : Lu à Di 06h00 à 00h00 

        - Période Chaque jour (Jeden Tag) : Lu à Di 15h00 à 12h00 

        - Période Chaque année (Jedes Jahr) du 1 / 4 / 00:00 au 1 / 10 / 00:00.


Logique : l'électricité solaire disponible est d'abord utilisée. Si elle est insuffisante ou indisponible, le tarif normal avec la condition valable est utilisé. Dans ce cas d'application, il est important que les 24h/jour soient couvertes par une condition Si.

Structure : été et hiver avec heures pleines et heures creuses pour l'électricité du réseau et l'électricité solaire, heures creuses en journée en été et heures pleines en hiver (p. ex. Energie Uri dès le 1.10.2025)

Description : il faut ici procéder en deux étapes. 1x avec une action si/alors et 1x avec les périodes dans les tarifs virtuels

Il faut d'abord définir les actions Si.

- HC été électricité du réseau et solaire

    - Exemple : HC été Lu à Ve 06h00 à 22h00 Lu à Ve, et Sa et Di toujours

    - Nom : Uri Sommer NT

    - Action si/alors avec liaison OU (ODER)

        - Période Lu à Ve : 6h00 à 22h00 

        - Période Sa et Di : 00h00 à 00h00




- HP été électricité du réseau et solaire

    - Exemple : HP été Lu à Ve 22h00 à 06h00

    - Nom : Uri Sommer HT

    - Action si/alors

        - Période Lu à Ve : 22h00 à 06h00 




- HC hiver électricité du réseau et solaire

    - Exemple : HC hiver Lu à Ve 22h00 à 06h00 Lu à Ve, et Sa et Di toujours

    - Nom : Uri Winter NT

    - Action si/alors avec liaison OU (ODER)

        - Période Lu à Ve : 22h00 à 06h00 

        - Période Sa et Di : 00h00 à 00h00




- HP hiver électricité du réseau et solaire

    - Exemple : HP hiver Lu à Ve 06h00 à 22h00

    - Nom : Uri Winter HT

    - Action si/alors avec liaison OU (ODER)

        - Période Lu à Ve : 06h00 à 22h00 


Il faut ensuite définir les prix par période.

Dans ce cas, les périodes ou durées doivent être enregistrées. Ce modèle tarifaire nécessite une combinaison d'action si/alors et de période.

- Nom : Uri Sommer HT Netz

    - Type : tarif réseau (Netztarif)

    - Durée : 1.4.2026 au 30.9.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Sommer HT

- Nom : Uri Sommer HT Solar


- Type : tarif solaire incl. vZEV (Solartarif inkl. vZEV) 

- Durée : 1.4.2026 au 30.9.2026

- Condition supplémentaire (Zusätzliche Bedingung) : Uri Sommer HT


- Nom : Uri Sommer NT Netz

    - Type : tarif réseau (Netztarif)

    - Durée : 1.4.2026 au 30.9.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Sommer NT

- Nom : Uri Sommer NT Solar

    - Type : tarif solaire incl. vZEV (bilan/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durée : 1.4.2026 au 30.9.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Sommer NT

- Nom : Uri Winter HT Netz

    - Type : tarif réseau (Netztarif)

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Winter HT 

- Nom : Uri Winter HT Solar

    - Type : tarif solaire incl. vZEV (bilan/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Winter HT

- Nom : Uri Winter NT Netz

    - Type : tarif réseau (Netztarif)

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Winter NT

- Nom : Uri Winter NT Solar

    - Type : tarif solaire incl. vZEV (bilan/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Winter NT 


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, Wiki tarifs Energie Uri tarifs 2026.mp4" />

Wiki Tarife Enerige Uri Tarife 2026.mp4
