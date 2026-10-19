---
title: 'Définir les plages tarifaires'
slug: '/konfiguration/wenndann-aktionen/tarifzeiten-definieren'
description: 'Structure de l''action SI pour les tarifs virtuels'
sidebar_label: 'Définir les plages tarifaires'
naechste_schritte: [konfiguration/billing/stromtarife-definieren/index]
---
![Définir les plages tarifaires – Illustration 1](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/01.png)

## Structure de l'action SI pour les tarifs virtuels

Vous pouvez définir, au moyen d'une condition supplémentaire, à partir de quand ce tarif doit s'appliquer. Il peut s'agir d'une plage horaire (p. ex. pour les heures pleines / heures creuses) ou de toute autre condition. La condition doit avoir été définie au préalable comme [action si/alors](/konfiguration/wenndann-aktionen). Les exemples les plus courants sont décrits ci-dessous.

Remarques :

- Une fois tous les tarifs définis, vous devez impérativement cliquer sur Recalculer (Neu rechnen). Tous les tarifs virtuels sont ainsi calculés correctement. Cette opération peut durer plusieurs heures.


<Video src="0LTDpKKA3-k" title="Vidéo YouTube, décompter l'énergie solaire en heures pleines et heures creuses" />

### Interface Si / Alors

![Définir les plages tarifaires – Illustration 2](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/02.png)

## Créer un double tarif étape par étape

Consultez sur la fiche tarifaire les horaires des heures pleines. Dans notre exemple, la situation est la suivante :

Heures pleines (HP) :

lu-ve : 7:00 à 22:00
sa : 7:00 à 13:00£


Heures creuses (HC) :

lu-ve : 22:00 à 7:00

sa : 13:00 à 00:00

di : toute la journée

### Créer la plage HP

Cliquez sur le « + » pour créer un nouveau timing.

Sélectionnez la liaison OU (Oder-Verknüpfung)

Fonction OU :

Si l'une des conditions SI est remplie, la plage HP s'applique.

Sous les événements SI (WENN Ereignisse), cliquez sur le « + » pour créer la plage HP lu-ve.

![Définir les plages tarifaires – Illustration 3](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/03.png)

Sélectionnez Date et heure (Datum & Uhrzeit)



![Définir les plages tarifaires – Illustration 4](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Définissez les horaires pour lu-ve

7:00 à 22:00



et enregistrez le réglage.

![Définir les plages tarifaires – Illustration 5](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/05.png)

Sous les événements SI, cliquez à nouveau sur « + » pour définir le samedi.

![Définir les plages tarifaires – Illustration 6](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/06.png)

Sélectionnez Date et heure (Datum & Uhrzeit)

![Définir les plages tarifaires – Illustration 7](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Définissez les horaires pour le samedi

7:00 à 13:00



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

Sélectionnez Date et heure (Datum & Uhrzeit)

![Définir les plages tarifaires – Illustration 12](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Définissez la plage HC pour lu-ve

Elle correspond dans ce cas à la période de 22:00 à 7:00



Enregistrez le réglage.

![Définir les plages tarifaires – Illustration 13](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/13.png)

Cliquez sur « + » pour définir le samedi

![Définir les plages tarifaires – Illustration 14](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/14.png)

Sélectionnez Date et heure (Datum & Uhrzeit)

![Définir les plages tarifaires – Illustration 15](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Le samedi se définit comme suit :

de 13:00 à 00:00 le même jour



Enregistrez le réglage.

![Définir les plages tarifaires – Illustration 16](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/16.png)

Cliquez sur « + » pour définir le dimanche, qui manque encore

![Définir les plages tarifaires – Illustration 17](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/17.png)

Sélectionnez Date et heure (Datum & Uhrzeit)

![Définir les plages tarifaires – Illustration 18](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

Pour des heures creuses toute la journée le dimanche, saisissez 00:00 à 00:00 pour le dimanche.



Enregistrez le réglage

![Définir les plages tarifaires – Illustration 19](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/19.png)

<div className="row">
<div className="col col--4">

Maintenant que vous avez défini les plages tarifaires pertinentes, retournez à la définition des tarifs pour attribuer les timings aux tarifs.

</div>
<div className="col col--8 text--center">

![Définir les plages tarifaires – Illustration 20](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/20.png)

</div>
</div>

### Étape suivante : définir les tarifs avec les plages tarifaires

## Autres exemples

Structure : heures pleines et heures creuses pour l'électricité du réseau et tarif unique pour l'électricité solaire

- Tarif unique électricité solaire : définir le tarif solaire sans action SI

- Électricité du réseau heures pleines : définir le tarif normal avec action SI

    - Exemple. lu à ve 7h00 à 22h00 ou sa 7h00 à 13h00 

- Électricité du réseau heures creuses : définir le tarif normal sans action SI


Logique : l'électricité solaire disponible est d'abord répartie. S'il n'y en a pas assez ou aucune, le tarif normal qui remplit une condition est utilisé. Enfin, le tarif sans condition est appliqué au reste de l'électricité.

Structure : heures pleines et heures creuses pour l'électricité du réseau et l'électricité solaire

- Électricité solaire heures pleines : définir le tarif solaire avec action SI

    - Exemple : lu à ve 7h00 à 22h00 ou sa 7h00 à 13h00 

- Électricité solaire heures creuses : définir le tarif solaire avec action SI

    - Exemple : lu à ve 22h00 à 7h00 ou sa 13h00 à 7h00 ou di 0h00 à 0h00

- Électricité du réseau heures pleines : définir le tarif normal avec action SI

    - Utiliser la même action SI que pour les heures pleines de l'électricité solaire 

- Électricité du réseau heures creuses : définir le tarif normal avec action SI

    - Utiliser la même action SI que pour les heures creuses de l'électricité solaire 


Logique : l'électricité solaire disponible avec la condition valable est d'abord utilisée. S'il n'y en a pas assez ou aucune, le tarif normal avec la condition valable est utilisé. Dans ce cas d'application, il est important que les 24h/jour soient couvertes par une condition SI.

Structure : été et hiver avec heures pleines et heures creuses pour l'électricité du réseau et tarif unique pour l'électricité solaire

- Électricité solaire heures pleines : définir le tarif solaire sans action SI

- Électricité du réseau heures pleines été : définir le tarif normal avec action SI

    - Exemple : plage horaire Chaque jour : lu à di 7h00 à 22h00 et plage Chaque année du 1 / 04 / 00:00 au 1 / 10 / 00:00.

- Électricité du réseau heures creuses été : définir le tarif normal avec action SI

    - Exemple : plage horaire Chaque jour : lu à di 22h00 à 07h00 et plage Chaque année du 1 / 04 / 00:00 au 1 / 10 / 00:00.

- Électricité du réseau heures pleines hiver : définir le tarif normal avec action SI

    - Exemple : plage horaire Chaque jour : lu à di 7h00 à 22h00 et plage Chaque année du 1 / 10 / 00:00 au 1 / 4 / 00:00.

- Électricité du réseau heures creuses hiver : définir le tarif normal avec action SI

    - Exemple : plage horaire Chaque jour : lu à di 22h00 à 07h00 et plage Chaque année du 1 / 10 / 00:00 au 1 / 4 / 00:00.


Logique : l'électricité solaire disponible est d'abord utilisée. S'il n'y en a pas assez ou aucune, le tarif normal avec la condition valable est utilisé. Dans ce cas d'application, il est important que les 24h/jour soient couvertes par une condition SI.

Structure : été et hiver avec heures pleines et heures creuses pour l'électricité du réseau, tarif unique pour l'électricité solaire et heures creuses à midi uniquement en hiver (p. ex. EWS/EBS)

Exemple

- Électricité du réseau et solaire heures creuses hiver 

    - Exemple : hiver HC 22h00 à 07h00 entre le 1.10 et le 1.4.

    - Action si/alors avec liaison ET

        - Plage horaire Chaque jour : lu à di 22h00 à 07h00 

        - Plage horaire Chaque année du 1 / 10 / 00:00 au 1 / 04 / 00:00.

- Électricité du réseau et solaire heures pleines hiver 

    - Exemple : hiver HP 07h00 à 22h00 entre le 1.10 et le 1.4.

    - Action si/alors avec liaison ET

        - Plage horaire Chaque jour : lu à di 7h00 à 22h00 

        - Plage horaire Chaque année du 1 / 10 / 00:00 au 1 / 04 / 00:00.

- Électricité du réseau et solaire heures creuses été

    - Exemple : été HC 00h00 à 06h00 et 12h00 à 15h00 entre le 1.4 et le 1.10

    - Action si/alors avec liaison ET

        - Plage horaire Chaque jour : lu à di 12h00 à 06h00 

        - Plage horaire Chaque jour : lu à di 00h00 à 15h00 

        - Plage horaire Chaque année du 1 / 4 / 00:00 au 1 / 10 / 00:00.

- Électricité du réseau et solaire heures pleines été 

    - Exemple : été HP 06h00 à 12h00 et 15h00 à 00h00 entre le 1.4 et le 1.10

    - Action si/alors avec liaison ET

        - Plage horaire Chaque jour : lu à di 06h00 à 00h00 

        - Plage horaire Chaque jour : lu à di 15h00 à 12h00 

        - Plage horaire Chaque année du 1 / 4 / 00:00 au 1 / 10 / 00:00.


Logique : l'électricité solaire disponible est d'abord utilisée. S'il n'y en a pas assez ou aucune, le tarif normal avec la condition valable est utilisé. Dans ce cas d'application, il est important que les 24h/jour soient couvertes par une condition SI.

Structure : été et hiver avec heures pleines et heures creuses pour l'électricité du réseau et l'électricité solaire, heures creuses en journée en été et heures pleines en hiver (p. ex. Energie Uri à partir du 1.10.2025)

Description : il faut ici procéder en deux étapes. 1x avec une action si/alors et 1x avec les périodes dans les tarifs virtuels

Il faut d'abord définir les actions SI.

- Électricité du réseau et solaire été HC

    - Exemple : été HC lu à ve 06h00 à 22h00 lu à ve et sa et di en permanence

    - Nom : Uri été HC

    - Action si/alors avec liaison OU

        - Plage horaire lu à ve : 6h00 à 22h00 

        - Plage horaire sa et di : 00h00 à 00h00




- Électricité du réseau et solaire été HP

    - Exemple : été HP lu à ve 22h00 à 06h00

    - Nom : Uri été HP

    - Action si/alors

        - Plage horaire lu à ve : 22h00 à 06h00 




- Électricité du réseau et solaire hiver HC

    - Exemple : hiver HC lu à ve 22h00 à 06h00 lu à ve et sa et di en permanence

    - Nom : Uri hiver HC

    - Action si/alors avec liaison OU

        - Plage horaire lu à ve : 22h00 à 06h00 

        - Plage horaire sa et di : 00h00 à 00h00




- Électricité du réseau et solaire hiver HP

    - Exemple : hiver HP lu à ve 06h00 à 22h00

    - Nom : Uri hiver HP

    - Action si/alors avec liaison OU

        - Plage horaire lu à ve : 06h00 à 22h00 


Il faut ensuite définir les prix par période.

Dans ce cas, les périodes ou durées doivent être saisies. Ce modèle tarifaire nécessite une combinaison d'action si/alors et de période.

- Nom : Uri été HP réseau

    - Type : tarif réseau (Netztarif)

    - Durée : 1.4.2026 au 30.9.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri été HP

- Nom : Uri été HP solaire


- Type : tarif solaire incl. vRCP (Solartarif inkl. vZEV) 

- Durée : 1.4.2026 au 30.9.2026

- Condition supplémentaire (Zusätzliche Bedingung) : Uri été HP


- Nom : Uri été HC réseau

    - Type : tarif réseau (Netztarif)

    - Durée : 1.4.2026 au 30.9.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri été HC

- Nom : Uri été HC solaire

    - Type : tarif solaire incl. vRCP (bilan/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durée : 1.4.2026 au 30.9.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri été HC

- Nom : Uri hiver HP réseau

    - Type : tarif réseau (Netztarif)

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri hiver HP 

- Nom : Uri hiver HP solaire

    - Type : tarif solaire incl. vRCP (bilan/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri hiver HP

- Nom : Uri hiver HC réseau

    - Type : tarif réseau (Netztarif)

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri hiver HC

- Nom : Uri hiver HC solaire

    - Type : tarif solaire incl. vRCP (bilan/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri hiver HC 


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, Wiki Tarife Enerige Uri Tarife 2026.mp4" />

Wiki Tarife Enerige Uri Tarife 2026.mp4
