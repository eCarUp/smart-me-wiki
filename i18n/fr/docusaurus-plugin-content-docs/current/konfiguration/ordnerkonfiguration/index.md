---
title: 'Configuration des compteurs et des dossiers'
slug: '/konfiguration/ordnerkonfiguration'
description: 'Tutoriel vidéo: créer des dossiers et y affecter des compteurs'
sidebar_label: 'Configuration des dossiers'
---
<Embed src="https://player.vimeo.com/video/661999827" aspect="1.291" title="Configuration des dossiers" />

Tutoriel vidéo: créer des dossiers et y affecter des compteurs

## Instructions pas à pas

### Accès à la section Configuration des compteurs et des dossiers

1.  Connecte-toi sur le [site web smart-me](https://web.smart-me.com/).

2.  Dans le menu de gauche, va sur «Configuration des compteurs et des dossiers» (Zähler- und Ordnerkonfiguration)


![Configuration des compteurs et des dossiers – illustration 1](/img/konfiguration-ordnerkonfiguration/01.png)

### Description des fonctions des actions

![Configuration des compteurs et des dossiers – illustration 2](/img/konfiguration-ordnerkonfiguration/02.png)

Ajouter un nœud:

Ajoute un nœud avec un nom et un symbole librement sélectionnable.

Le nom influence l'ordre dans lequel le nœud est affiché dans l'arborescence.

1.  Tri par chiffres

2.  Tri par ordre alphabétique


Éditer un nœud de dossier

Permet de modifier le nom du nœud, le symbole et le rattachement.



Éditer un nœud de compteur

Nom: définis le nom du compteur.
Description:
Ajoute une description facultative pour le compteur.
Correction de valeur:
Corrige la valeur de mesure du compteur côté cloud. (Calculs de position)
Correction de valeur du dossier parent:
Définit en pourcentage la part de la valeur de mesure à additionner dans le dossier parent.
Compteur actif:
Active ou désactive un compteur afin d'économiser des licences. Les compteurs désactivés n'affichent plus de données. Tu trouveras d'autres informations sur les compteurs désactivés dans notre FAQ sous [Comment désactiver mon compteur?](/#comment-désactiver-mon-compteur-)

Pour activer ou désactiver plusieurs compteurs à la fois, tu peux les déplacer dans un dossier dans la configuration des compteurs / des dossiers, faire un clic droit sur ce dossier et choisir une action de masse.

![Désactiver un compteur](/img/konfiguration-ordnerkonfiguration/03.jpg)

Supprimer un nœud

Supprime de l'arborescence le nœud ou le point de mesure sélectionné.

Les compteurs reviennent alors sur le côté gauche en tant que compteurs non affectés.

![Configuration des compteurs et des dossiers – illustration 4](/img/konfiguration-ordnerkonfiguration/04.png)

### Nommer les compteurs

- Tous les compteurs doivent être installés dans le compte correspondant. [Mise en service](/konfiguration/inbetriebnahme)

- Tous les compteurs doivent être nommés. Nos propositions pour la désignation des compteurs

    - Unité d'utilisation numéro de compteur (p. ex. APT 1 6352415)

    - Média unité d'utilisation numéro de compteur (p. ex. Chaleur APT 1)


![Configuration des compteurs et des dossiers – illustration 5](/img/konfiguration-ordnerkonfiguration/05.png)

### Convertir des compteurs d'eau froide en compteurs d'eau chaude sanitaire (si nécessaire)

Certains fabricants de compteurs M-Bus indiquent lors de la transmission des données qu'il s'agit d'un compteur d'eau froide. Et cela, alors qu'il devrait s'agir d'un compteur d'eau chaude sanitaire. Dans ce cas, le type de compteur doit être forcé dans smart-me.

- Va sur le Dashboard

- Choisis le compteur dans le menu Dashboard

- Sélectionne la roue dentée en haut à droite

- Paramètres avancés (Erweiterte Einstellungen)

- Modifie le type d'appareil (Geräte Type).

- Enregistre


Remarque: cette adaptation entraîne une prise en charge dans smart-me Billing. L'Auto Export pour les fournisseurs d'électricité n'en est pas modifié.

Remarque: pour des raisons techniques, cette manipulation n'est pas possible avec les compteurs de chaleur et de froid.

![Configuration des compteurs et des dossiers – illustration 6](/img/konfiguration-ordnerkonfiguration/06.png)

### Structures de dossiers et leur influence sur les processus ultérieurs

Le système actuel permet une création automatisée du décompte de l'électricité. Pour que cela fonctionne, la chaleur et l'eau doivent rester séparées de l'électricité. Des systèmes mixtes sont malgré tout possibles afin d'économiser du travail pour les états locatifs, mais l'automatisation de la création des factures est alors malheureusement perdue.

Pour les systèmes comportant plusieurs chauffages, une séparation en plusieurs biens immobiliers est cependant inévitable.

Chaque bien immobilier créé individuellement est en principe en mesure de représenter 1x électricité et 1x chaleur/eau.

<Embed src="/embeds/konfiguration-ordnerkonfiguration-02.html" aspect="2.308" title="Configuration des dossiers" />

### Principes de l'arborescence et création de nœuds

Pour préparer un bâtiment en vue du décompte, il faut créer les biens immobiliers et les unités de décompte appropriés.

Structure de dossiers de base de chaque bien immobilier individuel

La structure de base pour chaque forme d'énergie et chaque bâtiment se compose de deux nœuds fondamentaux et de plusieurs sous-nœuds:

- Bien immobilier (configuration ultérieure d'un décompte)

    - -   Unité de décompte 1 du bien immobilier (appartement ou locaux)

            - -   Compteur d'appartement (parts de 100%)

        - Unité de décompte 2 du bien immobilier (appartement ou locaux)

        - ...

- Compteurs techniques (ensemble des points de mesure non décomptés directement)
    Ici, autant de sous-dossiers que souhaité peuvent être créés pour la structuration.

    - -   -   Compteur de bilan

            - Compteur de l'installation solaire

            - Compteurs généraux répartis en pourcentage sur les unités de décompte

            - Compteurs de chaleur répartis en pourcentage sur les unités de décompte

            - Compteurs d'eau répartis en pourcentage sur les unités de décompte


![Configuration des compteurs et des dossiers – illustration 7](/img/konfiguration-ordnerkonfiguration/07.png)

### Prochaine étape: crée la structure de ton projet

Choisis maintenant, en fonction de ton projet, les instructions que tu souhaites suivre.

[Électricité uniquement](/konfiguration/ordnerkonfiguration/nur-strom)

[Électricité et un chauffage](/konfiguration/ordnerkonfiguration/strom-und-eine-heizung)

[Électricité et plusieurs chauffages](/konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen)

## Informations complémentaires

### Création automatique de dossiers avec des fichiers CSV

smart-me offre la possibilité d'automatiser la création de dossiers, les affectations et le renommage de compteurs au moyen d'un fichier CSV. Un abonnement smart-me Professional est nécessaire pour cette fonction.

Les fichiers CSV contiennent des données tabulaires enregistrées sous forme de texte. Ils peuvent être édités avec un éditeur de texte (p. ex. notepad++).

Attention: les dossiers déjà existants sont supprimés lors de l'utilisation de cette fonction. Cela signifie que toutes les fonctions utilisées avec ces dossiers ne fonctionnent plus (p. ex. actions si/alors, configurations smart-me billing, etc.).



<Video src="YQVcTxPgdzM" title="Vidéo YouTube, création de dossiers au moyen d'un fichier csv" />

![Configuration des compteurs et des dossiers – illustration 8](/img/konfiguration-ordnerkonfiguration/08.png)

Les colonnes suivantes (ne pas modifier l'ordre) figurent dans un fichier CSV de configuration:

[](https://drive.google.com/open?id=1Ft_fg6mxKZCpPND-i5ZoWN6kAKacnDXD8rJGeOB40KM "Open Spreadsheet, wiki 2.0 Tabellen in new window")

<Embed src="https://docs.google.com/spreadsheets/d/1Ft_fg6mxKZCpPND-i5ZoWN6kAKacnDXD8rJGeOB40KM/htmlembed?gid=0" title="Tableur, tableaux wiki 2.0" />

Tableaux wiki 2.0

Les caractères de séparation «;» et «//» ne doivent pas être utilisés dans les noms. Ils sont réservés à la séparation des colonnes et des dossiers dans les chemins.

Si les 4 colonnes «MeterPointId», «ExportFormat», «UploadType» et «ExportInterval» sont présentes, le compteur est en plus enregistré pour l'Auto Export.

Un exemple de configuration sans Auto Export:

```
MeterSerialNumber;MeterName;FolderPath
102177;Büro 100;Wohnung 1. Stock Links // Büro
636731327420929937;Wohnzimmer 101;Wohnung 1. Stock Links // Wohnzimmer
101163;Schlafzimmer 102;Wohnung 1. Stock Links // Schlafzimmer
```

Un exemple de configuration avec Auto Export:

```
MeterSerialNumber;MeterName;FolderPath;MeterPointId;ExportFormat;UploadType;ExportInterval
102177;Büro 100;Wohnung 1. Stock Links // Büro;CH100;CSV_1;FTP_2;Weekly
636731327420929937;Wohnzimmer 101;Wohnung 1. Stock Links // Wohnzimmer;CH101;CSV_1;FTP_2;Daily
101163;Schlafzimmer 102;Wohnung 1. Stock Links // Schlafzimmer;CH102;CSV_1;FTP_2;Monthly
```

### Édition de fichiers CSV dans Excel

Excel prend également en charge l'édition de fichiers CSV. Deux points sont à observer:

1.  Il faut empêcher qu'Excel arrondisse le numéro de série du compteur ou l'affiche sous forme exponentielle (p. ex. en traitant les nombres comme du texte dans Excel).

2.  Le fichier CSV doit être au jeu de caractères UTF-8. Excel n'affiche alors pas correctement les trémas. Dans un éditeur de texte (p. ex. notepad++), ces caractères s'affichent toutefois correctement.


![Configuration des compteurs et des dossiers – illustration 9](/img/konfiguration-ordnerkonfiguration/09.png)

Le déroulement de travail recommandé est le suivant:

1.  Connecte-toi sur le [site web smart-me](https://web.smart-me.com/login/).

2.  Clique en haut à droite sur Configuration (Konfiguration)

3.  Clique sur Configuration des compteurs / des dossiers (Zähler / Ordner Konfiguration)

4.  Clique sur Configuration des nœuds par CSV (Knoten Konfiguration über CSV)

5.  Clique sur Télécharger la configuration des nœuds (Download Knoten Konfiguration) pour télécharger la configuration actuelle sous forme de fichier CSV

6.  Édite la configuration

7.  Vérifie la configuration dans un éditeur de texte prenant en charge le jeu de caractères UTF-8, afin de contrôler que les numéros de série des compteurs et les noms s'affichent correctement

8.  Clique sur Parcourir (Durchsuchen) et sélectionne le fichier CSV édité

9.  Clique sur Envoyer la configuration des nœuds (Upload Knoten Konfiguration) pour appliquer la configuration
    Attention: les modifications qui en résultent ne peuvent pas être annulées
