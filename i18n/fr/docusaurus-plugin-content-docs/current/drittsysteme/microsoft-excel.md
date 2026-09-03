---
title: 'Microsoft Excel'
slug: '/drittsysteme/microsoft-excel'
description: 'Dans Microsoft Excel, il est possible de lire directement les données de notre cloud.'
sidebar_label: 'Microsoft Excel'
---
Dans Microsoft Excel, il est possible de lire directement les données de notre cloud. Cela ouvre par exemple la possibilité de regrouper, de lire et de traiter dans une base de données les données provenant de différents comptes.
Dans Excel, on utilise pour cela l'éditeur Power Query. Celui-ci permet d'effectuer des requêtes HTTP au moyen de notre API. Les commandes API possibles et l'environnement de test se trouvent [ici](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put). 

## Télécharger le fichier d'exemple

Le fichier sur le côté droit contient une requête variable des relevés du compteur d'un Meter. Ce fichier peut être complété avec d'autres compteurs.

Toutes les fonctions nécessaires sont disponibles avec Excel 0365 ou à partir d'Excel 2016.

Pour pouvoir utiliser le fichier d'exemple, télécharge-le et .. 

1.  Télécharger le fichier

2.  Mettre à jour les données de connexion de la requête selon les informations figurant dans le tableau « Dashboard ».


<Embed src="https://drive.google.com/file/d/1xb5lgnMii5c1Bp7th9swMJrNhM4Go7ib/preview" aspect="1.330" title="Drive, API_Test_ValuesInPast_Example.xlsx" />

API\_Test\_ValuesInPast\_Example.xlsx

## Créer la connexion

### Créer une requête de données depuis le web

Démarre Excel et clique, sous l'onglet Données (Daten), sur Obtenir des données (Daten abrufen), À partir d'autres sources (Aus anderen Quellen), À partir du Web (Aus dem Web). 

![Microsoft Excel – Illustration 1](/img/drittsysteme-microsoft-excel/01.png)

### Saisir la commande API

Insère le lien de commande de l'API que tu souhaites interroger. Dans l'exemple, il s'agit de la commande https://www.smart-me.com/api/Devices/&#123;id&#125; . Nous souhaitons donc lire toutes les données actuelles de l'appareil portant l'ID correspondant.

Tu trouveras davantage d'informations sur la commande elle-même dans l'outil de test accessible via le [lien](https://smart-me.com/swagger/ui/index#!/AccessToken/AccessToken_Put) ci-dessus. Tu peux aussi y obtenir l'ID de l'appareil souhaité.

![Microsoft Excel – Illustration 2](/img/drittsysteme-microsoft-excel/02.png)

### Authentification pour le lien (mot de passe et nom d'utilisateur)

Tu es maintenant invité à indiquer l'authentification du lien concerné. Le nom d'utilisateur et le mot de passe du compte correspondant sont nécessaires.

1.  Sélectionne le lien correspondant

2.  Clique sur Modifier les autorisations (Berechtigungen bearbeiten)

3.  Clique sur Modifier (Bearbeiten) sous Informations d'identification (Anmeldeinformationen)

4.  Saisis le nom d'utilisateur et le mot de passe du compte dans l'onglet « Standard »


![Microsoft Excel – Illustration 3](/img/drittsysteme-microsoft-excel/03.png)

![Microsoft Excel – Illustration 4](/img/drittsysteme-microsoft-excel/04.png)

![Microsoft Excel – Illustration 5](/img/drittsysteme-microsoft-excel/05.png)

### Convertir les données en tableau dans l'éditeur Power Query

À la suite de l'importation, une liste des données importées apparaît dans l'éditeur Power Query. Ces données doivent maintenant être converties en tableau.



![Microsoft Excel – Illustration 6](/img/drittsysteme-microsoft-excel/06.png)

### Fermer et charger

Après avoir fermé et chargé, une nouvelle feuille de calcul apparaît avec les informations de la source de données.

![Microsoft Excel – Illustration 7](/img/drittsysteme-microsoft-excel/07.png)

### Paramètres de la requête de connexion (intervalle et actualisation)

Sur le côté droit s'ouvre une fenêtre qui permet, par un clic droit sur la connexion existante, d'accéder à d'autres paramètres. On peut y définir surtout les intervalles d'actualisation de la connexion concernée.
Dans l'onglet Données (Daten), les actualisations peuvent aussi se faire sur commande de l'utilisateur.

![Microsoft Excel – Illustration 8](/img/drittsysteme-microsoft-excel/08.png)

![Microsoft Excel – Illustration 9](/img/drittsysteme-microsoft-excel/09.png)

![Microsoft Excel – Illustration 10](/img/drittsysteme-microsoft-excel/10.png)

## Requête de données avec variables (interroger les relevés du compteur avec une date variable)

La requête de données historiques suit le même principe que la construction du lien pour les données actuelles. La principale différence est que les données doivent être interrogées avec une information modifiable (variable).
Pour que cela soit possible, deux requêtes doivent être effectuées :

1.  Requête au sein du tableau Excel sur la variable « Date ».

2.  Requête depuis le web avec une commande API appropriée. La commande appropriée est ici [https://smart-me.com/api/ValuesInPast/&#123;id](https://smart-me.com/api/ValuesInPast/%7Bid)&#125;  (données journalières du compteur du passé)


### Créer la variable de date

Choisis dans Excel un emplacement où la saisie de la date doit se faire. Crée pour cela un tableau sous Insertion (Einfügen) \--> Tableau (Tabelle). (Important)

![Microsoft Excel – Illustration 11](/img/drittsysteme-microsoft-excel/11.png)

![Microsoft Excel – Illustration 12](/img/drittsysteme-microsoft-excel/12.png)

Sélectionne une plage de 4 champs, afin qu'un nom de colonne ainsi que le texte et la valeur y trouvent place.

![Microsoft Excel – Illustration 13](/img/drittsysteme-microsoft-excel/13.png)

### Définir le nom du tableau pour la programmation ultérieure

Pour que Power Query sache plus tard dans quel tableau la variable se trouve, celui-ci est appelé par son nom. Pour que cela soit univoque, nous attribuons un nom fixe (ici Datumsauswahl).

![Microsoft Excel – Illustration 14](/img/drittsysteme-microsoft-excel/14.png)

### Formater le champ de la variable (champ de texte)

Pour que la date puisse aussi être utilisée plus tard, le contenu doit être formaté comme texte. Pour cela, sélectionne le tableau et choisis en haut le format Texte (Text).

![Microsoft Excel – Illustration 15](/img/drittsysteme-microsoft-excel/15.png)

### Interroger la variable dans Power Query

Nous pouvons maintenant ajouter la requête dans Power Query pour notre variable :

1.  Ouvrez Power Query


![Microsoft Excel – Illustration 16](/img/drittsysteme-microsoft-excel/16.png)

2\. Crée une nouvelle requête dans Power Query (clic droit sous Requêtes)
3\. Crée une requête vide portant le nom « Datumsauswahl »



![Microsoft Excel – Illustration 17](/img/drittsysteme-microsoft-excel/17.png)

4\. Copie le texte suivant dans le bloc de fonction de la requête : \= Excel.CurrentWorkbook()&#123;\[Name="Datumsauswahl"\]&#125;\[Content\]
« Datumsauswahl » est ici le nom du tableau dans lequel la valeur de la variable peut être trouvée.

![Microsoft Excel – Illustration 18](/img/drittsysteme-microsoft-excel/18.png)

### Lier la variable et la valeur Excel

Effectue un drilldown afin de sélectionner le champ dans lequel se trouve le paramètre modifiable :
sélectionner le champ contenant la valeur de la date --> clic droit --> Drilldown.

Ensuite, le contenu de la cellule se retrouve seul et répond désormais au nom « Datumsauswahl ».

![Microsoft Excel – Illustration 19](/img/drittsysteme-microsoft-excel/19.png)

![Microsoft Excel – Illustration 20](/img/drittsysteme-microsoft-excel/20.png)

### Créer la requête pour les données historiques

Crée une nouvelle requête avec un clic droit sur la zone des requêtes à gauche. Choisis ensuite une requête depuis le web.

![Microsoft Excel – Illustration 21](/img/drittsysteme-microsoft-excel/21.png)

La nouvelle requête contient maintenant la commande pour les données passées et se présente comme suit :

https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date=01.01.2021

Elle comprend le chemin de la requête HTTP et, à la fin, une date cible. Nous transmettrons plus tard cette date cible de manière variable. 

Pour la création, un élément codé en dur peut être transmis. Veille à ce que des données existent déjà dans le cloud à cette date.

La date a le format suivant : Mois.Jour.Année, soit mm.dd.yyyy

![Microsoft Excel – Illustration 22](/img/drittsysteme-microsoft-excel/22.png)

![Microsoft Excel – Illustration 23](/img/drittsysteme-microsoft-excel/23.png)

### Intégrer la variable dans la requête

Pour que la date fixe soit maintenant remplacée par notre variable, la commande de fonction doit être légèrement adaptée.

Elle passe de

\= Json.Document(Web.Contents("https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date=01.01.2021))

à

\= Json.Document(Web.Contents("https://smart-me.com:443/api/ValuesInPast/32b30ab1-3ac5-4fd5-b24f-96d02d3b2bed?date="&Datumsauswahl))



![Microsoft Excel – Illustration 24](/img/drittsysteme-microsoft-excel/24.png)

### Adapter le contenu du tableau aux besoins

Le contenu affiché à l'intérieur du jeu de données peut maintenant être restructuré et adapté aux besoins respectifs.

Dans notre exemple, nous souhaitons disposer de toutes les données avec DeviceId, date, code Obis et valeur.



1.  Convertir le contenu en tableau


![Microsoft Excel – Illustration 25](/img/drittsysteme-microsoft-excel/25.png)

2.  Intervertir les lignes et les colonnes

![Microsoft Excel – Illustration 26](/img/drittsysteme-microsoft-excel/26.png)

![Microsoft Excel – Illustration 27](/img/drittsysteme-microsoft-excel/27.png)

3\. Utiliser la première ligne comme en-têtes

![Microsoft Excel – Illustration 28](/img/drittsysteme-microsoft-excel/28.png)

4\. Modifier la colonne Values et développer sur de nouvelles lignes

![Microsoft Excel – Illustration 29](/img/drittsysteme-microsoft-excel/29.png)

![Microsoft Excel – Illustration 30](/img/drittsysteme-microsoft-excel/30.png)

5\. Sélectionner les contenus de ligne supplémentaires --> OK.

![Microsoft Excel – Illustration 31](/img/drittsysteme-microsoft-excel/31.png)

![Microsoft Excel – Illustration 32](/img/drittsysteme-microsoft-excel/32.png)

6\. Appuyer sur Fermer et charger

![Microsoft Excel – Illustration 33](/img/drittsysteme-microsoft-excel/33.png)

### Interpréter et attribuer les codes Obis

Les codes Obis sont normalisés. Pour pouvoir les attribuer, la liste Excel contenant les codes Obis peut être comparée avec RECHERCHEV.
Tu obtiens ainsi le nom du code Obis et l'unité des valeurs.

[Codes Obis (Excel)](https://drive.google.com/open?id=1eTs4ZXD9AUagGxNEQSof0IWHkZg54nsK6SyHp4ygDSc&authuser=0)
