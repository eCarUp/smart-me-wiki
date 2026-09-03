---
title: 'Transactions du compteur'
slug: '/informationssicherheit/zählertransaktionen'
description: 'Bêta : les meter transactions (Zähler Transaktionen) sont des soutirages de valeurs de mesure limités dans le temps et signés numériquement, qui peuvent être facturés séparément.'
sidebar_label: 'Transactions du compteur'
---
Bêta : les meter transactions (Zähler Transaktionen) sont des soutirages de valeurs de mesure limités dans le temps et signés numériquement, qui peuvent être facturés séparément. Les sessions de recharge pour l'électromobilité en sont un cas d'application idéal.

Tu trouveras plus d'informations sur la signature à clé publique [ici](/informationssicherheit/public-key-signature). 

## Application aux bornes de recharge

Le compteur smart-me (version 2) est installé dans la borne de recharge. La sortie numérique du compteur est raccordée directement au contrôleur de charge et peut ainsi démarrer et arrêter la recharge. L'écran du compteur ainsi que la marque de vérification sont visibles sur la face avant de la borne de recharge.

### Déroulement d'une session de recharge

![Transactions du compteur – illustration 1](/img/informationssicherheit-zaehlertransaktionen/01.jpg)

1\. La session de recharge est démarrée (p. ex. via une application). La commande "Start Transaction" est envoyée au compteur. Celui-ci démarre une nouvelle transaction et active la borne de recharge. L'écran passe de l'affichage défilant des relevés du compteur à l'affichage de la transaction. La consommation de la transaction démarre à 0 kWh et augmente au fur et à mesure de la consommation. 

![Transactions du compteur – illustration 2](/img/informationssicherheit-zaehlertransaktionen/02.jpg)

2\. L'utilisateur voit sur l'écran la puissance de charge actuelle ainsi que l'énergie déjà soutirée.

![Transactions du compteur – illustration 3](/img/informationssicherheit-zaehlertransaktionen/03.jpg)

3\. La session de recharge est terminée (p. ex. via l'application). La commande "End Transaction" est envoyée au compteur. Celui-ci termine la transaction, la signe et envoie les données de la transaction ainsi que la signature numérique dans le cloud. L'écran indique à l'utilisateur pendant 5 min que la session de recharge est terminée.

### Vérifier une session de recharge après coup

Le client peut à tout moment vérifier après la session de recharge la quantité d'énergie facturée. Pour ce faire, il saisit la transaction correspondante dans l'application ou sur le web et la vérifie avec la clé publique du compteur. Les clés publiques de tous les compteurs smart-me sont disponibles publiquement dans le cloud smart-me (ou via l'API).

Les données de la transaction peuvent être vérifiées en ligne avec la signature et la clé publique.

![Transactions du compteur – illustration 4](/img/informationssicherheit-zaehlertransaktionen/04.jpg)

## Valider les données du compteur Pico avec un logiciel de transparence



Un logiciel de transparence te permet de vérifier des signatures numériques. 

Selon sa réalisation technique, une borne de recharge crée des valeurs de mesure signées numériquement en lien avec une session de recharge que tu effectues à cette borne. Ces signatures numériques te permettent de vérifier les valeurs de mesure en différé, de sorte que tu peux t'assurer que personne n'a manipulé les valeurs pendant leur transmission jusqu'à ta facture.



L'utilisation du logiciel de transparence est gratuite pour les consommateurs, les fournisseurs de mobilité et les exploitants de bornes de recharge. 



Téléchargement du logiciel de transparence : [https://www.safe-ev.de/de/transparenzsoftware.php](https://www.safe-ev.de/de/transparenzsoftware.php) 




### Valider les relevés du compteur

Les courbes de relevés du compteur signées peuvent être consultées dans le cloud smart-me comme suit :

1\. Se connecter sur [www.smart-me.com](http://www.smart-me.com) 

2\. Sélectionner le compteur ou la borne de recharge souhaités

3\. Dans le menu en haut à droite, cliquer sur la flèche et sélectionner "Relevés du compteur signés" (Signierte Zählerstände)

4\. Les signatures (format OCMF) sont affichées sous "Données du compteur" (Zählerdaten).



Le message OCMF peut être validé avec le logiciel de transparence :

- Relevé du compteur 1 : énergie active soutirage (1-b:1.8.0)

- Relevé du compteur 2 : énergie active livraison (1-b:1.8.0)






### Valider les transactions

Les transactions signées peuvent être consultées dans le cloud smart-me comme suit :
5\. Se connecter sur [www.smart-me.com
](http://www.smart-me.com)6\. Sélectionner le compteur ou la borne de recharge souhaités
7\. Dans le menu en haut à droite, cliquer sur la flèche et sélectionner "Transactions signées" (Signierte Transaktionen)
8\. Les signatures (format OCMF) sont affichées sous "Données du compteur" (Zählerdaten) :



Le message OCMF peut être validé avec le logiciel de transparence.



![Transactions du compteur – illustration 5](/img/informationssicherheit-zaehlertransaktionen/05.png)

![Transactions du compteur – illustration 6](/img/informationssicherheit-zaehlertransaktionen/06.png)

![Transactions du compteur – illustration 7](/img/informationssicherheit-zaehlertransaktionen/07.png)

### Activer le mode MID du Pico (affichage des données pertinentes)

Si l'utilisateur souhaite déclencher l'affichage des données pertinentes pour la MID (relevés du compteur, versions, sommes de contrôle), deux possibilités s'offrent à lui :

- Démarrage ou redémarrage de la station 

- Via le capteur de luminosité


Afficher les données pertinentes via le capteur de luminosité

Avec une lampe de poche, l'utilisateur peut "faire clignoter" le code suivant :

Sombre - Clair - Sombre - Clair - Sombre

Chaque état doit durer entre 1 et 5 secondes.
