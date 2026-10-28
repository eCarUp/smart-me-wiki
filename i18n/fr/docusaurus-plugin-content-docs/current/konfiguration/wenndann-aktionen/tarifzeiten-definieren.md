---
title: 'Définir les plages tarifaires'
slug: '/konfiguration/wenndann-aktionen/tarifzeiten-definieren'
description: 'Structure de l''action Si pour les tarifs virtuels'
sidebar_label: 'Définir les plages tarifaires'
naechste_schritte: [konfiguration/billing/stromtarife-definieren/index]
---
<Menueweg>Actions si-alors</Menueweg>

## Structure de l'action Si pour les tarifs virtuels

<div className="row">
<div className="col col--6">

Une condition supplémentaire vous permet de définir à partir de quand ce tarif s'applique. Il peut s'agir d'une période (p. ex. pour les heures pleines / heures creuses) ou de toute autre condition. La condition doit avoir été définie au préalable en tant qu'[action si/alors](/konfiguration/wenndann-aktionen). Les exemples les plus courants sont décrits ci-dessous.

Remarques :

- Une fois tous les tarifs définis, vous devez impérativement cliquer sur Recalculer (Neu rechnen). Tous les tarifs virtuels sont ainsi calculés correctement. Cette opération peut durer quelques heures.

</div>
<div className="col col--6">

<Video src="0LTDpKKA3-k" title="Vidéo YouTube, décompter le solaire en heures pleines et heures creuses" />

</div>
</div>

### Interface Si / Alors

![Définir les plages tarifaires – illustration 2](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/02.png)

## Créer un double tarif pas à pas

Consultez sur la fiche tarifaire les horaires des heures pleines. Dans notre exemple, la situation est la suivante :

<div className="row">
<div className="col col--6">

**Horaires HP :**

Lu-ve : de 7:00 à 22:00

Sa : de 7:00 à 13:00

</div>
<div className="col col--6">

**Horaires HC :**

Lu-ve : de 22:00 à 7:00

Sa : de 13:00 à 00:00

Di : toute la journée

</div>
</div>

### Créer les horaires HP

<div className="row">
<div className="col col--6">

Cliquez sur le « + » pour créer un nouveau timing.

Sélectionnez la liaison OU (Oder)

Fonction OU (ODER) :

Si l'une des conditions SI (WENN) est remplie, ce sont les heures pleines.

Sous Événements SI (WENN Ereignisse), cliquez sur le « + » pour créer les horaires HP lu-ve.

</div>
<div className="col col--6 bild--mitte">

![Définir les plages tarifaires – illustration 3](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/03.png)

</div>
</div>

#### Horaires HP lu-ve

![Date et heure](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Sélectionnez Date et heure (Datum & Uhrzeit)

Définissez les horaires pour lu-ve

de 7:00 à 22:00

et enregistrez le réglage.

</div>
<div className="col col--6 bild--mitte">

![Définir les plages tarifaires – illustration 5](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/05.png)

</div>
</div>

#### Horaires HP samedi

![Date et heure](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Sous les Événements SI (WENN Ereignisse), cliquez à nouveau sur « + » pour définir le samedi.

Sélectionnez Date et heure (Datum & Uhrzeit)

Définissez les horaires pour le samedi

de 7:00 à 13:00

et enregistrez le réglage.

Les horaires HP sont maintenant définis.

</div>
<div className="col col--6 bild--mitte">

![Définir les plages tarifaires – illustration 6](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/06.png)

![Définir les plages tarifaires – illustration 8](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/08.png)

![Définir les plages tarifaires – illustration 9](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/09.png)

</div>
</div>

### Créer les horaires HC

<div className="row">
<div className="col col--6">

Cliquez sur le « + » pour créer un nouveau timing.

Cliquez sur « + » pour saisir une action supplémentaire pour les horaires HC

</div>
<div className="col col--6 bild--mitte">

![Définir les plages tarifaires – illustration 10](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/10.png)

![Définir les plages tarifaires – illustration 11](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/11.png)

</div>
</div>

#### Horaires HC lu-ve

![Date et heure](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Sélectionnez Date et heure (Datum & Uhrzeit)

Définissez les horaires HC pour lu-ve

Dans ce cas, ils correspondent à la plage de 22:00 à 7:00

Enregistrez le réglage.

</div>
<div className="col col--6 bild--mitte">

![Définir les plages tarifaires – illustration 13](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/13.png)

</div>
</div>

#### Horaires HC samedi

![Date et heure](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Cliquez sur « + » pour définir le samedi

Sélectionnez Date et heure (Datum & Uhrzeit)

Le samedi se définit comme suit :

de 13:00 à 00:00 du jour même

Enregistrez le réglage.

</div>
<div className="col col--6 bild--mitte">

![Définir les plages tarifaires – illustration 14](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/14.png)

![Définir les plages tarifaires – illustration 16](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/16.png)

</div>
</div>

#### Horaires HC dimanche

![Date et heure](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/04.png)

<div className="row">
<div className="col col--6">

Cliquez sur « + » pour définir le dimanche, qui manque encore

Sélectionnez Date et heure (Datum & Uhrzeit)

Pour des heures creuses toute la journée le dimanche, saisissez 00:00 à 00:00 pour le dimanche.

Enregistrez le réglage

</div>
<div className="col col--6 bild--mitte">

![Définir les plages tarifaires – illustration 17](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/17.png)

![Définir les plages tarifaires – illustration 19](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/19.png)

</div>
</div>

### Attribuer les timings aux tarifs

<div className="row">
<div className="col col--6">

Maintenant que vous avez défini les plages tarifaires pertinentes, retournez à la définition des tarifs pour attribuer les timings aux tarifs.

</div>
<div className="col col--6 bild--mitte">

![Définir les plages tarifaires – illustration 20](/img/konfiguration-wenndann-aktionen-tarifzeiten-definieren/20.png)

</div>
</div>

## Autres exemples

Selon le modèle tarifaire de votre fournisseur d'électricité, l'action Si se présente différemment. Dépliez la structure qui correspond à votre cas.

<details id="hoch-und-niedertarif-netzstrom-einheitstarif-solar">
<summary>Heures pleines et heures creuses pour l'électricité du réseau et tarif unique pour l'électricité solaire</summary>

- Tarif unique électricité solaire : définir le tarif solaire sans action Si

- Heures pleines électricité du réseau : définir le tarif normal avec action Si

    - Exemple : lu à ve 7h00 à 22h00 ou sa 7h00 à 13h00 

- Heures creuses électricité du réseau : définir le tarif normal sans action Si


Logique : l'électricité solaire disponible est d'abord répartie. Si elle est insuffisante ou indisponible, c'est le tarif normal remplissant une condition qui est utilisé. Enfin, le tarif sans condition est appliqué au reste de l'électricité.

</details>

<details id="hoch-und-niedertarif-netz-und-solarstrom">
<summary>Heures pleines et heures creuses pour l'électricité du réseau et l'électricité solaire</summary>

- Heures pleines électricité solaire : définir le tarif solaire avec action Si

    - Exemple : lu à ve 7h00 à 22h00 ou sa 7h00 à 13h00 

- Heures creuses électricité solaire : définir le tarif solaire avec action Si

    - Exemple : lu à ve 22h00 à 7h00 ou sa 13h00 à 7h00 ou di 0h00 à 0h00

- Heures pleines électricité du réseau : définir le tarif normal avec action Si

    - Utiliser la même action Si que pour les heures pleines de l'électricité solaire 

- Heures creuses électricité du réseau : définir le tarif normal avec action Si

    - Utiliser la même action Si que pour les heures creuses de l'électricité solaire 


Logique : l'électricité solaire disponible est d'abord utilisée avec la condition valable. Si elle est insuffisante ou indisponible, c'est le tarif normal avec la condition valable qui est utilisé. Dans ce cas d'application, il est important que les 24 h de la journée soient couvertes par une condition Si.

</details>

<details id="sommer-winter-netzstrom-einheitstarif-solar">
<summary>Été et hiver avec heures pleines et heures creuses pour l'électricité du réseau et tarif unique pour l'électricité solaire</summary>

- Heures pleines électricité solaire : définir le tarif solaire sans action Si

- Heures pleines électricité du réseau été : définir le tarif normal avec action Si

    - Exemple : période Chaque jour (Zeitspanne Jeden Tag) : lu à di 7h00 à 22h00 et période Chaque année (Zeitspanne Jedes Jahr) du 1 / 04 / 00:00 au 1 / 10 / 00:00.

- Heures creuses électricité du réseau été : définir le tarif normal avec action Si

    - Exemple : période Chaque jour (Zeitspanne Jeden Tag) : lu à di 22h00 à 07h00 et période Chaque année (Zeitspanne Jedes Jahr) du 1 / 04 / 00:00 au 1 / 10 / 00:00.

- Heures pleines électricité du réseau hiver : définir le tarif normal avec action Si

    - Exemple : période Chaque jour (Zeitspanne Jeden Tag) : lu à di 7h00 à 22h00 et période Chaque année (Zeitspanne Jedes Jahr) du 1 / 10 / 00:00 au 1 / 4 / 00:00.

- Heures creuses électricité du réseau hiver : définir le tarif normal avec action Si

    - Exemple : période Chaque jour (Zeitspanne Jeden Tag) : lu à di 22h00 à 07h00 et période Chaque année (Zeitspanne Jedes Jahr) du 1 / 10 / 00:00 au 1 / 4 / 00:00.


Logique : l'électricité solaire disponible est d'abord utilisée. Si elle est insuffisante ou indisponible, c'est le tarif normal avec la condition valable qui est utilisé. Dans ce cas d'application, il est important que les 24 h de la journée soient couvertes par une condition Si.

</details>

<details id="sommer-winter-mit-mittagsniedertarif-im-winter">
<summary>Été et hiver avec heures pleines et heures creuses pour l'électricité du réseau, tarif unique pour l'électricité solaire et heures creuses à midi uniquement en hiver (p. ex. EWS/EBS)</summary>

Exemple

- Heures creuses électricité du réseau et solaire hiver 

    - Exemple : HC hiver 22h00 à 07h00 du 1.10 au 1.4.

    - Action si/alors avec liaison ET (UND)

        - Période Chaque jour (Zeitspanne Jeden Tag) : lu à di 22h00 à 07h00 

        - Période Chaque année (Zeitspanne Jedes Jahr) du 1 / 10 / 00:00 au 1 / 04 / 00:00.

- Heures pleines électricité du réseau et solaire hiver 

    - Exemple : HP hiver 07h00 à 22h00 du 1.10 au 1.4.

    - Action si/alors avec liaison ET (UND)

        - Période Chaque jour (Zeitspanne Jeden Tag) : lu à di 7h00 à 22h00 

        - Période Chaque année (Zeitspanne Jedes Jahr) du 1 / 10 / 00:00 au 1 / 04 / 00:00.

- Heures creuses électricité du réseau et solaire été

    - Exemple : HC été 00h00 à 06h00 et 12h00 à 15h00 du 1.4 au 1.10

    - Action si/alors avec liaison ET (UND)

        - Période Chaque jour (Zeitspanne Jeden Tag) : lu à di 12h00 à 06h00 

        - Période Chaque jour (Zeitspanne Jeden Tag) : lu à di 00h00 à 15h00 

        - Période Chaque année (Zeitspanne Jedes Jahr) du 1 / 4 / 00:00 au 1 / 10 / 00:00.

- Heures pleines électricité du réseau et solaire été 

    - Exemple : HP été 06h00 à 12h00 et 15h00 à 00h00 du 1.4 au 1.10

    - Action si/alors avec liaison ET (UND)

        - Période Chaque jour (Zeitspanne Jeden Tag) : lu à di 06h00 à 00h00 

        - Période Chaque jour (Zeitspanne Jeden Tag) : lu à di 15h00 à 12h00 

        - Période Chaque année (Zeitspanne Jedes Jahr) du 1 / 4 / 00:00 au 1 / 10 / 00:00.


Logique : l'électricité solaire disponible est d'abord utilisée. Si elle est insuffisante ou indisponible, c'est le tarif normal avec la condition valable qui est utilisé. Dans ce cas d'application, il est important que les 24 h de la journée soient couvertes par une condition Si.

</details>

<details id="sommer-winter-tagsueber-wechselnd-energie-uri">
<summary>Été et hiver avec heures pleines et heures creuses pour l'électricité du réseau et l'électricité solaire, heures creuses en journée en été et heures pleines en journée en hiver (p. ex. Energie Uri à partir du 1.10.2025)</summary>

Description : ici, il faut procéder en deux étapes : 1x avec Si/Alors et 1x avec les horaires dans les tarifs virtuels

Il faut d'abord définir les actions Si.

- Électricité du réseau et solaire HC été

    - Exemple : HC été lu à ve 06h00 à 22h00 lu à ve et sa et di en permanence

    - Nom : Uri Sommer NT

    - Action si/alors avec liaison OU (ODER)

        - Période lu à ve : 6h00 à 22h00 

        - Période sa et di : 00h00 à 00h00




- Électricité du réseau et solaire HP été

    - Exemple : HP été lu à ve 22h00 à 06h00

    - Nom : Uri Sommer HT

    - Action si/alors

        - Période lu à ve : 22h00 à 06h00 




- Électricité du réseau et solaire HC hiver

    - Exemple : HC hiver lu à ve 22h00 à 06h00 lu à ve et sa et di en permanence

    - Nom : Uri Winter NT

    - Action si/alors avec liaison OU (ODER)

        - Période lu à ve : 22h00 à 06h00 

        - Période sa et di : 00h00 à 00h00




- Électricité du réseau et solaire HP hiver

    - Exemple : HP hiver lu à ve 06h00 à 22h00

    - Nom : Uri Winter HT

    - Action si/alors avec liaison OU (ODER)

        - Période lu à ve : 06h00 à 22h00 


Il faut ensuite définir les prix par période.

Dans ce cas, les périodes ou durées doivent être enregistrées. Ce modèle tarifaire nécessite une combinaison de Si/Alors et de période.

- Nom : Uri Sommer HT Netz

    - Type : tarif réseau (Netztarif)

    - Durée : 1.4.2026 au 30.9.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Sommer HT

- Nom : Uri Sommer HT Solar


- Type : tarif solaire incl. vRCP (Solartarif inkl. vZEV) 

- Durée : 1.4.2026 au 30.9.2026

- Condition supplémentaire (Zusätzliche Bedingung) : Uri Sommer HT


- Nom : Uri Sommer NT Netz

    - Type : tarif réseau (Netztarif)

    - Durée : 1.4.2026 au 30.9.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Sommer NT

- Nom : Uri Sommer NT Solar

    - Type : tarif solaire incl. vRCP (bilan/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durée : 1.4.2026 au 30.9.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Sommer NT

- Nom : Uri Winter HT Netz

    - Type : tarif réseau (Netztarif)

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Winter HT 

- Nom : Uri Winter HT Solar

    - Type : tarif solaire incl. vRCP (bilan/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Winter HT

- Nom : Uri Winter NT Netz

    - Type : tarif réseau (Netztarif)

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Winter NT

- Nom : Uri Winter NT Solar

    - Type : tarif solaire incl. vRCP (bilan/productions) (Solartarif inkl. vZEV (Bilanz/Produktionen))

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire (Zusätzliche Bedingung) : Uri Winter NT 


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, Wiki Tarife Enerige Uri Tarife 2026.mp4" />

Wiki Tarife Enerige Uri Tarife 2026.mp4

</details>
