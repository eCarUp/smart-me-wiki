---
title: 'Définir les plages tarifaires'
slug: '/konfiguration/wenndann-aktionen/tarifzeiten-definieren'
description: 'Structure de l''action SI pour les tarifs virtuels'
sidebar_label: 'Définir les plages tarifaires'
naechste_schritte: [konfiguration/billing/stromtarife-definieren/index]
---
<Menueweg>Actions si-alors</Menueweg>

## Structure de l'action SI pour les tarifs virtuels

<div className="row">
<div className="col col--6">

Une condition supplémentaire vous permet de définir à partir de quand ce tarif s'applique. Il peut s'agir d'une plage horaire (p. ex. pour les heures pleines / heures creuses) ou de n'importe quelle autre condition. La condition doit d'abord avoir été définie comme [action si/alors](/konfiguration/wenndann-aktionen). Les exemples les plus courants sont décrits ci-dessous.

Remarques :

- Lorsque vous avez défini tous les tarifs, vous devez impérativement cliquer sur Recalculer (Neu rechnen). Ainsi, tous les tarifs virtuels sont calculés correctement. Cette opération peut prendre quelques heures.

</div>
<div className="col col--6">

<Video src="0LTDpKKA3-k" title="Vidéo YouTube, facturer le solaire en heures pleines et en heures creuses" />

</div>
</div>

### Interface Si / Alors

![Définir les plages tarifaires – Figure 2](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/02.png)

## Créer un double tarif étape par étape

Consultez sur la fiche tarifaire les horaires des heures pleines. Dans notre exemple, la situation est la suivante :

<div className="row">
<div className="col col--6">

**Heures pleines (HP) :**

Lu-Ve : 7:00 à 22:00

Sa : 7:00 à 13:00

</div>
<div className="col col--6">

**Heures creuses (HC) :**

Lu-Ve : 22:00 à 7:00

Sa : 13:00 à 00:00

Di : toute la journée

</div>
</div>

### Créer la plage HP

<div className="row">
<div className="col col--6">

Cliquez sur le « + » pour créer un nouveau timing.

Sélectionnez la liaison OU (Oder-Verknüpfung).

Fonction OU (ODER) :

Si l'une des conditions SI (WENN) est remplie, on est en heures pleines.

Sous Événements SI (WENN Ereignisse), cliquez sur le « + » pour créer la plage HP Lu-Ve.

</div>
<div className="col col--6 bild--mitte">

![Définir les plages tarifaires – Figure 3](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/03.png)

</div>
</div>

#### Plage HP Lu-Ve

![Date et heure](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Sélectionnez Date et heure (Datum & Uhrzeit).

Définissez les horaires pour Lu-Ve

7:00 à 22:00

et enregistrez le réglage.

</div>
<div className="col col--6 bild--mitte">

![Définir les plages tarifaires – Figure 5](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/05.png)

</div>
</div>

#### Plage HP samedi

![Date et heure](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Sous Événements SI (WENN Ereignisse), cliquez à nouveau sur « + » pour définir le samedi.

Sélectionnez Date et heure (Datum & Uhrzeit).

Définissez les horaires pour le samedi

7:00 à 13:00

et enregistrez le réglage.

La plage HP est maintenant définie.

</div>
<div className="col col--6 bild--mitte">

![Définir les plages tarifaires – Figure 6](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/06.png)

![Définir les plages tarifaires – Figure 8](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/08.png)

![Définir les plages tarifaires – Figure 9](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/09.png)

</div>
</div>

### Créer la plage HC

<div className="row">
<div className="col col--6">

Cliquez sur le « + » pour créer un nouveau timing.

Cliquez sur « + » pour saisir une action supplémentaire pour la plage HC.

</div>
<div className="col col--6 bild--mitte">

![Définir les plages tarifaires – Figure 10](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/10.png)

![Définir les plages tarifaires – Figure 11](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/11.png)

</div>
</div>

#### Plage HC Lu-Ve

![Date et heure](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Sélectionnez Date et heure (Datum & Uhrzeit).

Définissez la plage HC pour Lu-Ve

Dans ce cas, elle correspond à la période de 22:00 à 7:00

Enregistrez le réglage.

</div>
<div className="col col--6 bild--mitte">

![Définir les plages tarifaires – Figure 13](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/13.png)

</div>
</div>

#### Plage HC samedi

![Date et heure](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Cliquez sur « + » pour définir le samedi.

Sélectionnez Date et heure (Datum & Uhrzeit).

Le samedi se définit comme suit :

13:00 à 00:00 du jour

Enregistrez le réglage.

</div>
<div className="col col--6 bild--mitte">

![Définir les plages tarifaires – Figure 14](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/14.png)

![Définir les plages tarifaires – Figure 16](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/16.png)

</div>
</div>

#### Plage HC dimanche

![Date et heure](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Cliquez sur « + » pour définir le dimanche, qui manque encore.

Sélectionnez Date et heure (Datum & Uhrzeit).

Pour des heures creuses toute la journée le dimanche, saisissez 00:00 à 00:00 pour le dimanche.

Enregistrez le réglage.

</div>
<div className="col col--6 bild--mitte">

![Définir les plages tarifaires – Figure 17](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/17.png)

![Définir les plages tarifaires – Figure 19](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/19.png)

</div>
</div>

### Attribuer les timings aux tarifs

<div className="row">
<div className="col col--6">

Maintenant que vous avez défini les plages tarifaires pertinentes, retournez à la définition des tarifs pour attribuer les timings aux tarifs.

</div>
<div className="col col--6 bild--mitte">

![Définir les plages tarifaires – Figure 20](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/20.png)

</div>
</div>

## Autres exemples

Selon le modèle tarifaire de votre fournisseur d'électricité, l'action SI se présente différemment. Dépliez la structure qui correspond à votre cas.

<details id="hoch-und-niedertarif-netzstrom-einheitstarif-solar">
<summary>Heures pleines et heures creuses pour l'électricité du réseau et tarif unique pour l'électricité solaire</summary>

- Électricité solaire tarif unique : définir le tarif solaire sans action SI

- Électricité du réseau heures pleines : définir le tarif normal avec action SI

    - Exemple : Lu à Ve 7h00 à 22h00 ou Sa 7h00 à 13h00 

- Électricité du réseau heures creuses : définir le tarif normal sans action SI


Logique : l'électricité solaire disponible est d'abord répartie. Si elle est insuffisante ou absente, le tarif normal qui remplit une condition est utilisé. Enfin, le tarif sans condition est appliqué au reste de l'électricité.

</details>

<details id="hoch-und-niedertarif-netz-und-solarstrom">
<summary>Heures pleines et heures creuses pour l'électricité du réseau et l'électricité solaire</summary>

- Électricité solaire heures pleines : définir le tarif solaire avec action SI

    - Exemple : Lu à Ve 7h00 à 22h00 ou Sa 7h00 à 13h00 

- Électricité solaire heures creuses : définir le tarif solaire avec action SI

    - Exemple : Lu à Ve 22h00 à 7h00 ou Sa 13h00 à 7h00 ou Di 0h00 à 0h00

- Électricité du réseau heures pleines : définir le tarif normal avec action SI

    - Utiliser la même action SI que pour les heures pleines de l'électricité solaire 

- Électricité du réseau heures creuses : définir le tarif normal avec action SI

    - Utiliser la même action SI que pour les heures creuses de l'électricité solaire 


Logique : l'électricité solaire disponible est d'abord utilisée avec la condition valable. Si elle est insuffisante ou absente, le tarif normal avec la condition valable est utilisé. Dans ce cas d'application, il est important que les 24 h de la journée soient couvertes par une condition SI.

</details>

<details id="sommer-winter-netzstrom-einheitstarif-solar">
<summary>Été et hiver avec heures pleines et heures creuses pour l'électricité du réseau et tarif unique pour l'électricité solaire</summary>

- Électricité solaire heures pleines : définir le tarif solaire sans action SI

- Électricité du réseau heures pleines été : définir le tarif normal avec action SI

    - Exemple : Plage horaire Chaque jour (Zeitspanne Jeden Tag) : Lu à Di 7h00 à 22h00 et Plage horaire Chaque année (Zeitspanne Jedes Jahr) du 1 / 04 / 00:00 au 1 / 10 / 00:00.

- Électricité du réseau heures creuses été : définir le tarif normal avec action SI

    - Exemple : Plage horaire Chaque jour (Zeitspanne Jeden Tag) : Lu à Di 22h00 à 07h00 et Plage horaire Chaque année (Zeitspanne Jedes Jahr) du 1 / 04 / 00:00 au 1 / 10 / 00:00.

- Électricité du réseau heures pleines hiver : définir le tarif normal avec action SI

    - Exemple : Plage horaire Chaque jour (Zeitspanne Jeden Tag) : Lu à Di 7h00 à 22h00 et Plage horaire Chaque année (Zeitspanne Jedes Jahr) du 1 / 10 / 00:00 au 1 / 4 / 00:00.

- Électricité du réseau heures creuses hiver : définir le tarif normal avec action SI

    - Exemple : Plage horaire Chaque jour (Zeitspanne Jeden Tag) : Lu à Di 22h00 à 07h00 et Plage horaire Chaque année (Zeitspanne Jedes Jahr) du 1 / 10 / 00:00 au 1 / 4 / 00:00.


Logique : l'électricité solaire disponible est d'abord utilisée. Si elle est insuffisante ou absente, le tarif normal avec la condition valable est utilisé. Dans ce cas d'application, il est important que les 24 h de la journée soient couvertes par une condition SI.

</details>

<details id="sommer-winter-mit-mittagsniedertarif-im-winter">
<summary>Été et hiver avec heures pleines et heures creuses pour l'électricité du réseau, tarif unique pour l'électricité solaire et heures creuses à midi uniquement en hiver (p. ex. EWS/EBS)</summary>

Exemple

- Électricité du réseau et solaire heures creuses hiver 

    - Exemple : HC hiver 22h00 à 07h00 du 1.10 au 1.4.

    - Action si-alors avec liaison ET (UND)

        - Plage horaire Chaque jour (Zeitspanne Jeden Tag) : Lu à Di 22h00 à 07h00 

        - Plage horaire Chaque année (Zeitspanne Jedes Jahr) du 1 / 10 / 00:00 au 1 / 04 / 00:00.

- Électricité du réseau et solaire heures pleines hiver 

    - Exemple : HP hiver 07h00 à 22h00 du 1.10 au 1.4.

    - Action si-alors avec liaison ET (UND)

        - Plage horaire Chaque jour (Zeitspanne Jeden Tag) : Lu à Di 7h00 à 22h00 

        - Plage horaire Chaque année (Zeitspanne Jedes Jahr) du 1 / 10 / 00:00 au 1 / 04 / 00:00.

- Électricité du réseau et solaire heures creuses été

    - Exemple : HC été 00h00 à 06h00 et 12h00 à 15h00 du 1.4 au 1.10

    - Action si-alors avec liaison ET (UND)

        - Plage horaire Chaque jour (Zeitspanne Jeden Tag) : Lu à Di 12h00 à 06h00 

        - Plage horaire Chaque jour (Zeitspanne Jeden Tag) : Lu à Di 00h00 à 15h00 

        - Plage horaire Chaque année (Zeitspanne Jedes Jahr) du 1 / 4 / 00:00 au 1 / 10 / 00:00.

- Électricité du réseau et solaire heures pleines été 

    - Exemple : HP été 06h00 à 12h00 et 15h00 à 00h00 du 1.4 au 1.10

    - Action si-alors avec liaison ET (UND)

        - Plage horaire Chaque jour (Zeitspanne Jeden Tag) : Lu à Di 06h00 à 00h00 

        - Plage horaire Chaque jour (Zeitspanne Jeden Tag) : Lu à Di 15h00 à 12h00 

        - Plage horaire Chaque année (Zeitspanne Jedes Jahr) du 1 / 4 / 00:00 au 1 / 10 / 00:00.


Logique : l'électricité solaire disponible est d'abord utilisée. Si elle est insuffisante ou absente, le tarif normal avec la condition valable est utilisé. Dans ce cas d'application, il est important que les 24 h de la journée soient couvertes par une condition SI.

</details>

<details id="sommer-winter-tagsueber-wechselnd-energie-uri">
<summary>Été et hiver avec heures pleines et heures creuses pour l'électricité du réseau et l'électricité solaire, heures creuses en journée en été et heures pleines en journée en hiver (p. ex. Energie Uri dès le 1.10.2025)</summary>

Description : ici, il faut procéder en deux étapes. 1x avec Si-Alors et 1x avec les périodes dans les tarifs virtuels

Il faut d'abord définir les actions SI.

- Électricité du réseau et solaire HC été

    - Exemple : HC été Lu à Ve 06h00 à 22h00 Lu à Ve et Sa et Di en permanence

    - Nom : Uri Sommer NT

    - Action si-alors avec liaison OU (ODER)

        - Plage horaire Lu à Ve : 6h00 à 22h00 

        - Plage horaire Sa et Di : 00h00 à 00h00




- Électricité du réseau et solaire HP été

    - Exemple : HP été Lu à Ve 22h00 à 06h00

    - Nom : Uri Sommer HT

    - Action si-alors

        - Plage horaire Lu à Ve : 22h00 à 06h00 




- Électricité du réseau et solaire HC hiver

    - Exemple : HC hiver Lu à Ve 22h00 à 06h00 Lu à Ve et Sa et Di en permanence

    - Nom : Uri Winter NT

    - Action si-alors avec liaison OU (ODER)

        - Plage horaire Lu à Ve : 22h00 à 06h00 

        - Plage horaire Sa et Di : 00h00 à 00h00




- Électricité du réseau et solaire HP hiver

    - Exemple : HP hiver Lu à Ve 06h00 à 22h00

    - Nom : Uri Winter HT

    - Action si-alors avec liaison OU (ODER)

        - Plage horaire Lu à Ve : 06h00 à 22h00 


Il faut ensuite définir les prix par période.

Dans ce cas, les périodes ou durées doivent être saisies. Ce modèle tarifaire nécessite une combinaison de Si-Alors et de période.

- Nom : Uri Sommer HT Netz

    - Type : Tarif réseau (Netztarif)

    - Durée (Dauer) : 1.4.2026 au 30.9.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Sommer HT

- Nom : Uri Sommer HT Solar


- Type : Tarif solaire incl. vRCP (Solartarif inkl. vZEV) 

- Durée (Dauer) : 1.4.2026 au 30.9.2026

- Condition supplémentaire (Zusätzliche Bedingung) : Uri Sommer HT


- Nom : Uri Sommer NT Netz

    - Type : Tarif réseau (Netztarif)

    - Durée (Dauer) : 1.4.2026 au 30.9.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Sommer NT

- Nom : Uri Sommer NT Solar

    - Type : Tarif solaire incl. vRCP (bilan/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durée (Dauer) : 1.4.2026 au 30.9.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Sommer NT

- Nom : Uri Winter HT Netz

    - Type : Tarif réseau (Netztarif)

    - Durée (Dauer) : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Winter HT 

- Nom : Uri Winter HT Solar

    - Type : Tarif solaire incl. vRCP (bilan/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durée (Dauer) : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Winter HT

- Nom : Uri Winter NT Netz

    - Type : Tarif réseau (Netztarif)

    - Durée (Dauer) : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Winter NT

- Nom : Uri Winter NT Solar

    - Type : Tarif solaire incl. vRCP (bilan/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durée (Dauer) : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Winter NT 


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, Wiki Tarife Enerige Uri Tarife 2026.mp4" />

Wiki Tarife Enerige Uri Tarife 2026.mp4

</details>
