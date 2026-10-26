---
title: 'Configuration des compteurs et des dossiers'
slug: '/konfiguration/ordnerkonfiguration'
description: 'Tutoriel vidéo : créer des dossiers et y affecter des compteurs'
sidebar_label: 'Configuration des dossiers'
naechste_schritte: [konfiguration/ordnerkonfiguration/nur-strom, konfiguration/ordnerkonfiguration/strom-und-eine-heizung, konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen, konfiguration/ordnerkonfiguration/mieterstrom-standard, konfiguration/ordnerkonfiguration/mieterstrom-nicht-teilnehmer]
---
<Menueweg>Configuration du compteur et du dossier</Menueweg>

<div className="row">
<div className="col col--6">

## Fonctions des nœuds

![Configuration des compteurs et des dossiers – illustration 2](/img/konfiguration-ordnerkonfiguration/02.png)

### Ajouter un nœud :

Ajoute un nœud avec un nom et un symbole librement choisi.

Le nom détermine l'ordre dans lequel le nœud est affiché dans l'arborescence. 

1.  Tri par chiffres

2.  Tri par ordre alphabétique


### Modifier un nœud de dossier 

Permet de modifier le nom, le symbole et la position hiérarchique du nœud.

</div>
<div className="col col--6 text--center">

<Embed src="https://player.vimeo.com/video/661999827" aspect="1.291" title="Configuration des dossiers" />
Tutoriel vidéo : créer des dossiers et y affecter des compteurs

</div>
</div>

### Modifier un nœud de compteur

Nom (Name) :  définissez le nom du compteur.
Description (Beschreibung) :
ajoutez si nécessaire une description pour le compteur.
Correction de valeur (Wert Korrektur) : 
corrige côté cloud la valeur mesurée du compteur. (calculs de position)
Correction de valeur du dossier parent (Überordner Wert Korrektur) :
définit en pourcentage la part de la valeur mesurée à additionner dans le dossier parent.
Compteur actif (Zähler aktiv) :
activez ou désactivez un compteur pour économiser des licences. Les compteurs désactivés n'affichent plus de données. Vous trouverez plus d'informations sur les compteurs désactivés dans notre FAQ, sous [Comment désactiver mon compteur ?](/faq#wie-deaktiviere-ich-meinen-zähler)

Pour activer ou désactiver plusieurs compteurs à la fois, vous pouvez les déplacer dans un dossier dans la configuration des compteurs et des dossiers, cliquer sur ce dossier avec le bouton droit de la souris et choisir une action groupée. 

![Désactiver des compteurs](/img/konfiguration-ordnerkonfiguration/03.jpg)

### Supprimer un nœud

Supprime de l'arborescence le nœud ou le point de mesure sélectionné. 

Les compteurs retournent alors dans la partie gauche en tant que compteurs non affectés.

![Configuration des compteurs et des dossiers – illustration 4](/img/konfiguration-ordnerkonfiguration/04.png)

## Nommer les compteurs

<div className="row">
<div className="col col--8">

- Tous les compteurs doivent être installés dans le compte correspondant. [Mise en service](/konfiguration/inbetriebnahme) 

- Tous les compteurs doivent être nommés. Nos propositions pour la désignation des compteurs 

    - Unité d'utilisation numéro de compteur (p. ex. APP 1 6352415)

    - Fluide unité d'utilisation numéro de compteur (p. ex. Chaleur APP 1)

</div>
<div className="col col--4 text--center">

![Configuration des compteurs et des dossiers – illustration 5](/img/konfiguration-ordnerkonfiguration/05.png)

</div>
</div>

## Convertir des compteurs d'eau froide en compteurs d'eau chaude sanitaire

<div className="row">
<div className="col col--7">

Certains fabricants de compteurs M-Bus indiquent lors de la transmission des données qu'il s'agit d'un compteur d'eau froide, alors qu'il devrait s'agir d'un compteur d'eau chaude sanitaire. Dans ce cas, le type de compteur doit être forcé dans smart-me.

- Accédez au Dashboard

- Sélectionnez le compteur dans le menu Dashboard

- Cliquez sur la roue dentée en haut à droite

- Paramètres avancés (Erweiterte Einstellungen)

- Modifiez le type d'appareil (Geräte Type).

- Enregistrer (Speichern)

Remarque : cette modification est prise en charge dans smart-me Billing. L'Auto Export destiné aux fournisseurs d'électricité n'est en revanche pas modifié.

Remarque : pour des raisons techniques, cette manipulation n'est pas possible avec les compteurs de chaleur et de froid.

</div>
<div className="col col--5 text--center">

![Configuration des compteurs et des dossiers – illustration 6](/img/konfiguration-ordnerkonfiguration/06.png)

</div>
</div>

## Structures de dossiers et leur influence sur les processus en aval

Le système actuel permet d'établir automatiquement le décompte de l'électricité. Pour cela, la chaleur et l'eau doivent rester séparées de l'électricité. Des systèmes mixtes sont néanmoins possibles afin de réduire le travail lié aux états locatifs, mais l'automatisation de la facturation est alors perdue.

Pour les systèmes comportant plusieurs chauffages, une séparation en plusieurs immeubles est toutefois inévitable.

Chaque immeuble créé individuellement peut en principe représenter 1x électricité et 1x chaleur/eau.

<Embed src="/embeds/konfiguration-ordnerkonfiguration-02.html" aspect="2.308" title="Configuration des dossiers" />

## Principes de l'arborescence et création de nœuds

Pour préparer un bâtiment au décompte, il faut créer les immeubles et les unités de décompte correspondants.

Structure de dossiers de base de chaque immeuble individuel

La structure de base pour chaque forme d'énergie et chaque bâtiment se compose de deux nœuds de base et de multiples sous-nœuds :

- Immeuble (configuration ultérieure d'un décompte)

    - -   Unité de décompte 1 de l'immeuble (appartement ou locaux)

            - -   Compteur de l'appartement (parts à 100 %)

        - Unité de décompte 2 de l'immeuble (appartement ou locaux)

        - ...

- Compteurs techniques (ensemble des points de mesure qui ne sont pas décomptés directement)

    Vous pouvez y créer autant de sous-dossiers que nécessaire pour structurer l'ensemble. 

    - -   -   Compteur de bilan

            - Compteur de l'installation solaire

            - Compteurs des parties communes répartis en pourcentage sur les unités de décompte

            - Compteurs de chaleur répartis en pourcentage sur les unités de décompte

            - Compteurs d'eau répartis en pourcentage sur les unités de décompte

![Configuration des compteurs et des dossiers – illustration 7](/img/konfiguration-ordnerkonfiguration/07.png)

## Créez la structure de votre projet

Choisissez maintenant, en fonction de votre projet, le guide à suivre en bas de la page.


## Import CSV de structures de dossiers

<details id="ordner-mit-csv-erstellen">
<summary>Création automatique de dossiers à l'aide de fichiers CSV</summary>

### Création automatique de dossiers à l'aide de fichiers CSV

smart-me offre la possibilité d'automatiser la création de dossiers, l'affectation et le renommage de compteurs à l'aide d'un fichier CSV. Cette fonction nécessite un abonnement smart-me Professional.

Les fichiers CSV contiennent des données tabulaires enregistrées sous forme de texte. Ils peuvent être modifiés avec un éditeur de texte (p. ex. notepad++).

Attention : les dossiers existants sont supprimés lors de l'utilisation de cette fonction. Cela signifie que toutes les fonctions utilisées avec ces dossiers ne fonctionnent plus (p. ex. actions si/alors, configurations smart-me billing, etc.). 



<Video src="YQVcTxPgdzM" title="Vidéo YouTube, création de dossiers à l'aide d'un fichier csv" />

![Configuration des compteurs et des dossiers – illustration 8](/img/konfiguration-ordnerkonfiguration/08.png)

Un fichier CSV de configuration contient les colonnes suivantes (ne pas modifier l'ordre) :

[](https://drive.google.com/open?id=1Ft_fg6mxKZCpPND-i5ZoWN6kAKacnDXD8rJGeOB40KM "Ouvrir la feuille de calcul wiki 2.0 Tabellen dans une nouvelle fenêtre")

<Embed src="https://docs.google.com/spreadsheets/d/1Ft_fg6mxKZCpPND-i5ZoWN6kAKacnDXD8rJGeOB40KM/htmlembed?gid=0" height="252px" title="Feuille de calcul, wiki 2.0 Tabellen" />

wiki 2.0 Tabellen

Les séparateurs ";" et "//" ne doivent pas être utilisés dans les noms. Ils sont réservés à la séparation des colonnes et des dossiers dans les chemins.

Si les 4 colonnes "MeterPointId", "ExportFormat", "UploadType" et "ExportInterval" sont présentes, le compteur est en outre enregistré pour l'Auto Export.

Exemple de configuration sans Auto Export :

```
MeterSerialNumber;MeterName;FolderPath
102177;Büro 100;Wohnung 1. Stock Links // Büro
636731327420929937;Wohnzimmer 101;Wohnung 1. Stock Links // Wohnzimmer
101163;Schlafzimmer 102;Wohnung 1. Stock Links // Schlafzimmer
```

Exemple de configuration avec Auto Export :

```
MeterSerialNumber;MeterName;FolderPath;MeterPointId;ExportFormat;UploadType;ExportInterval
102177;Büro 100;Wohnung 1. Stock Links // Büro;CH100;CSV_1;FTP_2;Weekly
636731327420929937;Wohnzimmer 101;Wohnung 1. Stock Links // Wohnzimmer;CH101;CSV_1;FTP_2;Daily
101163;Schlafzimmer 102;Wohnung 1. Stock Links // Schlafzimmer;CH102;CSV_1;FTP_2;Monthly
```

### Modification de fichiers CSV dans Excel

Excel permet également de modifier des fichiers CSV. Deux points sont à respecter :

1.  Il faut éviter qu'Excel arrondisse le numéro de série du compteur ou l'affiche sous forme exponentielle (p. ex. en traitant les nombres comme du texte dans Excel.)

2.  Le fichier CSV doit être encodé en UTF-8. Excel n'affiche alors pas correctement les caractères accentués (trémas). Dans un éditeur de texte (p. ex. notepad++), ces caractères s'affichent en revanche correctement.


![Configuration des compteurs et des dossiers – illustration 9](/img/konfiguration-ordnerkonfiguration/09.png)

La procédure recommandée est la suivante :

1.  Connectez-vous sur le [site web smart-me](https://web.smart-me.com/login/).

2.  Cliquez en haut à droite sur Configuration (Konfiguration)

3.  Cliquez sur Configuration du compteur et du dossier (Zähler / Ordner Konfiguration)

4.  Cliquez sur Configuration des nœuds via CSV (Knoten Konfiguration über CSV)

5.  Cliquez sur Télécharger la configuration des nœuds (Download Knoten Konfiguration) pour télécharger la configuration actuelle sous forme de fichier CSV

6.  Modifiez la configuration

7.  Vérifiez dans un éditeur de texte prenant en charge l'encodage UTF-8 que les numéros de série des compteurs et les noms s'affichent correctement

8.  Cliquez sur Parcourir (Durchsuchen) et sélectionnez le fichier CSV modifié

9.  Cliquez sur Importer la configuration des nœuds (Upload Knoten Konfiguration) pour appliquer la configuration
    Attention : les modifications qui en résultent ne peuvent pas être annulées

</details>
