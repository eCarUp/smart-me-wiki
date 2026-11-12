---
title: 'Microsoft Excel'
slug: '/drittsysteme/microsoft-excel'
description: 'Dans Microsoft Excel, il est possible d''importer directement des données depuis notre cloud.'
sidebar_label: 'Microsoft Excel'
---
Dans Microsoft Excel, il est possible d'importer directement des données depuis notre cloud. Cela permet par exemple de regrouper dans une base de données, de lire et de traiter des données provenant de différents comptes.
Dans Excel, on utilise pour cela l'éditeur Power Query. Celui-ci permet d'effectuer des requêtes HTTP au moyen de notre API. Vous trouverez les commandes API possibles et l'environnement de test [ici](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put). 

## Télécharger le fichier d'exemple

Le fichier  à droite contient une requête variable des relevés du compteur d'un compteur. Ce fichier peut être complété par d'autres compteurs.

Toutes les fonctions nécessaires sont disponibles avec Excel 0365 ou à partir d'Excel 2016.

Pour pouvoir utiliser le fichier d'exemple, téléchargez-le et .. 

1.  Téléchargez le fichier

2.  Mettez à jour les données de connexion de la requête selon les informations figurant dans la feuille « Dashboard ».


<Embed src="https://drive.google.com/file/d/1xb5lgnMii5c1Bp7th9swMJrNhM4Go7ib/preview" height="520px" title="Drive, API_Test_ValuesInPast_Example.xlsx" />

API\_Test\_ValuesInPast\_Example.xlsx

## Créer la connexion

### Créer une requête de données à partir du web

Démarrez Excel et, dans l'onglet Données, cliquez sur Obtenir des données, À partir d'autres sources, À partir du web. 

![Microsoft Excel – Figure 1](/img/drittsysteme-microsoft-excel/01.png)

### Saisir la commande API

Insérez le lien de la commande API que vous souhaitez interroger.  Dans l'exemple, il s'agit de la commande https://www.smart-me.com/api/Devices/&#123;id&#125; . Nous souhaitons donc lire toutes les données actuelles de l'appareil ayant l'ID correspondant.

Vous trouverez plus d'informations sur la commande elle-même dans l'outil de test, via le [lien](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put) ci-dessus. Vous pouvez également y trouver l'ID de l'appareil souhaité.

![Microsoft Excel – Figure 2](/img/drittsysteme-microsoft-excel/02.png)

### Authentification pour le lien (mot de passe et nom d'utilisateur)

Vous êtes maintenant invité à indiquer l'authentification pour le lien concerné. Le nom d'utilisateur et le mot de passe du compte correspondant sont nécessaires.

1.  Sélectionnez le lien correspondant

2.  Cliquez sur Modifier les autorisations

3.  Sous Informations d'identification, cliquez sur Modifier

4.  Saisissez le nom d'utilisateur et le mot de passe du compte dans l'onglet « De base »


![Microsoft Excel – Figure 3](/img/drittsysteme-microsoft-excel/03.png)

![Microsoft Excel – Figure 4](/img/drittsysteme-microsoft-excel/04.png)

![Microsoft Excel – Figure 5](/img/drittsysteme-microsoft-excel/05.png)

### Convertir les données en tableau dans l'éditeur Power Query

Après l'importation, une liste des données importées apparaît dans l'éditeur Power Query. Ces données doivent maintenant être converties en tableau.



![Microsoft Excel – Figure 6](/img/drittsysteme-microsoft-excel/06.png)

### Fermer et charger

Après Fermer et charger, une nouvelle feuille de calcul contenant les informations de la source de données est créée.

![Microsoft Excel – Figure 7](/img/drittsysteme-microsoft-excel/07.png)

### Paramètres de la requête de connexion (intervalle et actualisation)

Une fenêtre s'ouvre sur la droite; un clic droit sur la connexion existante permet d'accéder à d'autres paramètres. Vous pouvez notamment y définir les intervalles d'actualisation de la connexion concernée.
Dans l'onglet Données, les actualisations peuvent aussi être déclenchées sur commande de l'utilisateur.

![Microsoft Excel – Figure 8](/img/drittsysteme-microsoft-excel/08.png)

![Microsoft Excel – Figure 9](/img/drittsysteme-microsoft-excel/09.png)

![Microsoft Excel – Figure 10](/img/drittsysteme-microsoft-excel/10.png)

## Requête de données avec variables (interroger les relevés du compteur avec une date variable)

La requête de données historiques suit le même principe que la construction du lien pour les données actuelles. La principale différence est que les données doivent être interrogées avec une information modifiable (variable).
Pour que cela soit possible, deux requêtes doivent être effectuées :

1.  Requête à l'intérieur du tableau Excel sur la variable « Date ».

2.  Requête à partir du web avec une commande API adaptée. La commande adaptée ici est [https://smart-me.com/api/ValuesInPast/&#123;id](https://smart-me.com/api/ValuesInPast/%7Bid)&#125;  (données journalières du compteur dans le passé)


### Créer la variable de date

Dans Excel, choisissez un emplacement où la date doit être saisie.  Créez pour cela un tableau via Insertion \--> Tableau. (Important)

![Microsoft Excel – Figure 11](/img/drittsysteme-microsoft-excel/11.png)

![Microsoft Excel – Figure 12](/img/drittsysteme-microsoft-excel/12.png)

Sélectionnez une plage de 4 cellules, afin qu'il y ait de la place pour un nom de colonne et pour le texte avec la valeur.

![Microsoft Excel – Figure 13](/img/drittsysteme-microsoft-excel/13.png)

### Définir le nom du tableau pour la programmation ultérieure

Pour que Power Query sache plus tard dans quel tableau se trouve la variable, celui-ci est appelé par son nom. Pour que ce soit univoque, nous attribuons un nom fixe (ici Datumsauswahl).

![Microsoft Excel – Figure 14](/img/drittsysteme-microsoft-excel/14.png)

### Formater le champ de la variable (champ de texte)

<div className="row">
<div className="col col--6">

Pour que la date puisse être utilisée plus tard, le contenu doit être formaté en tant que texte. Pour cela, sélectionnez le tableau et choisissez en haut le format Texte.

</div>
<div className="col col--6 bild--mitte">

![Microsoft Excel – Figure 15](/img/drittsysteme-microsoft-excel/15.png)

</div>
</div>

### Interroger la variable dans Power Query

Nous pouvons maintenant ajouter la requête pour notre variable dans Power Query :

1.  Ouvrez Power Query


![Microsoft Excel – Figure 16](/img/drittsysteme-microsoft-excel/16.png)

2\. Créez une nouvelle requête dans Power Query (clic droit sous Requêtes)
3\. Créez une requête vide nommée « Datumsauswahl »



![Microsoft Excel – Figure 17](/img/drittsysteme-microsoft-excel/17.png)

4\. Copiez le texte suivant dans le bloc de fonction de la requête : \= Excel.CurrentWorkbook()&#123;\[Name="Datumsauswahl"\]&#125;\[Content\]
« Datumsauswahl » est ici le nom du tableau dans lequel se trouve la valeur de la variable.

![Microsoft Excel – Figure 18](/img/drittsysteme-microsoft-excel/18.png)

### Lier la variable et la valeur Excel

Effectuez une extraction (drilldown) pour sélectionner le champ contenant le paramètre modifiable :
Sélectionner le champ avec la valeur de date --> clic droit --> Extraire.

Le contenu de la cellule apparaît alors seul et porte désormais le nom « Datumsauswahl ».

![Microsoft Excel – Figure 19](/img/drittsysteme-microsoft-excel/19.png)

![Microsoft Excel – Figure 20](/img/drittsysteme-microsoft-excel/20.png)

### Créer la requête pour les données historiques

Créez une nouvelle requête par un clic droit dans la zone Requêtes à gauche. Choisissez ensuite une requête à partir du web.

![Microsoft Excel – Figure 21](/img/drittsysteme-microsoft-excel/21.png)

La nouvelle requête contient maintenant la commande pour les données passées et se présente comme suit :

https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date=01.01.2021

Elle contient le chemin de la requête HTTP et, à la fin, une date cible. Nous transmettrons plus tard cette date cible sous forme de variable. 

Pour la création, un élément codé en dur peut être indiqué. Veillez à ce que des données existent déjà dans le cloud pour cette date.

La date a le format suivant : mois.jour.année, soit mm.dd.yyyy

![Microsoft Excel – Figure 22](/img/drittsysteme-microsoft-excel/22.png)

![Microsoft Excel – Figure 23](/img/drittsysteme-microsoft-excel/23.png)

### Intégrer la variable dans la requête

Pour que la date fixe soit remplacée par notre variable, la commande de fonction doit être légèrement adaptée.

Elle passe de

\= Json.Document(Web.Contents("https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date=01.01.2021))

à

\= Json.Document(Web.Contents("https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date="&Datumsauswahl))



![Microsoft Excel – Figure 24](/img/drittsysteme-microsoft-excel/24.png)

### Adapter le contenu du tableau aux besoins

Le contenu affiché peut maintenant être restructuré au sein du jeu de données et adapté aux besoins de chacun.

Dans notre exemple, nous souhaitons que toutes les données soient accompagnées du DeviceId, de la date, du code Obis et de la valeur.



1.  Convertir le contenu en tableau


![Microsoft Excel – Figure 25](/img/drittsysteme-microsoft-excel/25.png)

2.  Transposer les lignes et les colonnes

![Microsoft Excel – Figure 26](/img/drittsysteme-microsoft-excel/26.png)

![Microsoft Excel – Figure 27](/img/drittsysteme-microsoft-excel/27.png)

3\. Utiliser la première ligne pour les en-têtes

![Microsoft Excel – Figure 28](/img/drittsysteme-microsoft-excel/28.png)

4\. Modifier la colonne Values et Développer en nouvelles lignes

![Microsoft Excel – Figure 29](/img/drittsysteme-microsoft-excel/29.png)

![Microsoft Excel – Figure 30](/img/drittsysteme-microsoft-excel/30.png)

5\. Sélectionner les contenus de ligne supplémentaires --> OK.

![Microsoft Excel – Figure 31](/img/drittsysteme-microsoft-excel/31.png)

![Microsoft Excel – Figure 32](/img/drittsysteme-microsoft-excel/32.png)

6\. Cliquer sur Fermer et charger

![Microsoft Excel – Figure 33](/img/drittsysteme-microsoft-excel/33.png)

### Interpréter et attribuer les codes Obis

Les codes Obis sont standardisés. Pour pouvoir les attribuer, la liste Excel des codes Obis peut être comparée à l'aide de RECHERCHEV.
Vous obtenez ainsi le nom du code Obis et l'unité des valeurs.

[Codes Obis (Excel)](https://drive.google.com/open?id=1eTs4ZXD9AUagGxNEQSof0IWHkZg54nsK6SyHp4ygDSc&authuser=0)
