---
title: 'Transactions de compteur'
slug: '/informationssicherheit/zählertransaktionen'
description: 'Bêta : les transactions de compteur (Meter transactions) sont des soutirages de valeurs de mesure limités dans le temps et signés numériquement, qui peuvent être décomptés individuellement.'
sidebar_label: 'Transactions de compteur'
---
Bêta : les transactions de compteur (Meter transactions) sont des soutirages de valeurs de mesure limités dans le temps et signés numériquement, qui peuvent être décomptés individuellement. Les sessions de recharge pour la mobilité électrique en sont un cas d'application idéal.

Vous trouverez plus d'informations sur la signature par clé publique [ici](/informationssicherheit/public-key-signature). 

## Application aux bornes de recharge

Le compteur smart-me (version 2) est installé dans la borne de recharge. La sortie numérique du compteur est reliée directement au contrôleur de recharge et peut ainsi démarrer et arrêter la recharge. L'écran du compteur ainsi que la marque de vérification sont visibles sur la face avant de la borne de recharge.

### Déroulement d'une session de recharge

![Transactions de compteur – figure 1](/img/informationssicherheit-zaehlertransaktionen/01.jpg)

1\. La session de recharge est démarrée (p. ex. via une application). La commande "Start Transaction" est envoyée au compteur. Celui-ci démarre une nouvelle transaction et active la borne de recharge. L'écran passe de l'affichage défilant des relevés du compteur à l'affichage de la transaction. La consommation de la transaction commence à 0 kWh et augmente en fonction de la consommation. 

![Transactions de compteur – figure 2](/img/informationssicherheit-zaehlertransaktionen/02.jpg)

2\. L'utilisateur voit à l'écran la puissance de recharge actuelle ainsi que l'énergie déjà soutirée.

![Transactions de compteur – figure 3](/img/informationssicherheit-zaehlertransaktionen/03.jpg)

3\. La session de recharge est terminée (p. ex. via l'application). La commande "End Transaction" est envoyée au compteur. Celui-ci termine la transaction, la signe et envoie les données de transaction ainsi que la signature numérique dans le cloud. Pendant 5min, l'écran indique à l'utilisateur que la session de recharge est terminée.

### Vérifier ultérieurement une session de recharge

Après la session de recharge, le client peut à tout moment vérifier la quantité d'énergie facturée. Pour ce faire, il saisit la transaction correspondante dans l'application ou sur le web et la vérifie à l'aide de la clé publique du compteur. Les clés publiques de tous les compteurs smart-me sont accessibles publiquement dans le cloud smart-me (ou via API).

Les données de transaction peuvent être vérifiées en ligne à l'aide de la signature et de la clé publique.

![Transactions de compteur – figure 4](/img/informationssicherheit-zaehlertransaktionen/04.jpg)

## Valider les données de compteur de la Pico avec le logiciel de transparence



Un logiciel de transparence vous permet de vérifier des signatures numériques. 

Selon sa conception technique, une borne de recharge génère des valeurs de mesure signées numériquement en lien avec une session de recharge que vous effectuez sur cette borne. Ces signatures numériques vous permettent de vérifier les valeurs de mesure ultérieurement, afin de vous assurer que personne n'a manipulé les valeurs lors de leur transmission jusqu'à votre facture.



L'utilisation du logiciel de transparence est gratuite pour les consommateurs, les fournisseurs de mobilité et les exploitants de bornes de recharge. 



Téléchargement du logiciel de transparence : [https://www.safe-ev.de/de/transparenzsoftware.php](https://www.safe-ev.de/de/transparenzsoftware.php) 




### Valider les relevés du compteur

Les relevés du compteur signés peuvent être consultés dans le cloud smart-me comme suit :

1\. Se connecter sur [www.smart-me.com](http://www.smart-me.com) 

2\. Sélectionner le compteur ou la borne de recharge souhaité(e)

3\. Dans le menu en haut à droite, cliquer sur la flèche et sélectionner “Relevés du compteur signés (Signierte Zählerstände)”

4\. Les signatures (format OCMF) s'affichent sous “Données du compteur (Zählerdaten)”.



Le message OCMF peut être validé avec le logiciel de transparence :

- Relevé du compteur 1 : énergie active – soutirage (1-b:1.8.0)

- Relevé du compteur 2 : énergie active – injection (1-b:1.8.0)






### Valider les transactions

Les transactions signées peuvent être consultées dans le cloud smart-me comme suit :
5\. Se connecter sur [www.smart-me.com
](http://www.smart-me.com)6\. Sélectionner le compteur ou la borne de recharge souhaité(e)
7\. Dans le menu en haut à droite, cliquer sur la flèche et sélectionner “Transactions signées (Signierte Transaktionen)”
8\. Les signatures (format OCMF) s'affichent sous “Données du compteur (Zählerdaten)” :



Le message OCMF peut être validé avec le logiciel de transparence.



![Transactions de compteur – figure 5](/img/informationssicherheit-zaehlertransaktionen/05.png)

![Transactions de compteur – figure 6](/img/informationssicherheit-zaehlertransaktionen/06.png)

![Transactions de compteur – figure 7](/img/informationssicherheit-zaehlertransaktionen/07.png)

### Activer le mode MID de la Pico (affichage des données pertinentes)

Si l'utilisateur souhaite déclencher l'affichage des données pertinentes pour la MID (relevés du compteur, versions, sommes de contrôle), deux possibilités sont disponibles :

- Démarrage ou redémarrage de la borne 

- Via le capteur de luminosité


Afficher les données pertinentes via le capteur de luminosité

À l'aide d'une lampe de poche, l'utilisateur peut transmettre le code suivant par signaux lumineux :

Sombre - Clair - Sombre - Clair - Sombre

Chaque état doit durer entre 1 et 5 secondes.
