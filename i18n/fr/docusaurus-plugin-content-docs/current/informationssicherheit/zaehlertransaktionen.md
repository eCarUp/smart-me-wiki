---
title: 'Transactions de compteur'
slug: '/informationssicherheit/zaehlertransaktionen'
description: 'Bêta : les transactions de compteur (Meter transactions, Zähler Transaktionen) sont des soutirages de valeurs de mesure limités dans le temps et signés numériquement, qui peuvent être décomptés séparément.'
sidebar_label: 'Transactions de compteur'
---
Bêta : les transactions de compteur (Meter transactions, Zähler Transaktionen) sont des soutirages de valeurs de mesure limités dans le temps et signés numériquement, qui peuvent être décomptés séparément. Les sessions de recharge pour l'électromobilité en sont un cas d'application idéal.

Vous trouverez plus d'informations sur la signature par clé publique [ici](/informationssicherheit/public-key-signature). 

## Application aux bornes de recharge

Le compteur smart-me (version 2) est installé dans la borne de recharge. La sortie numérique du compteur est reliée directement au contrôleur de recharge et peut ainsi démarrer et arrêter la recharge. L'écran du compteur ainsi que la marque de vérification sont visibles sur la face avant de la borne de recharge.

### Déroulement d'une session de recharge

![Transactions de compteur – Illustration 1](/img/informationssicherheit-zaehlertransaktionen/01.jpg)

1\. La session de recharge est démarrée (p. ex. via une app). La commande "Start Transaction" est envoyée au compteur. Celui-ci démarre une nouvelle transaction et active la borne de recharge. L'écran passe de l'affichage défilant des relevés du compteur à l'affichage de la transaction. La consommation de la transaction démarre à 0 kWh et augmente en fonction de la consommation. 

![Transactions de compteur – Illustration 2](/img/informationssicherheit-zaehlertransaktionen/02.jpg)

2\. L'utilisateur voit à l'écran la puissance de recharge actuelle ainsi que l'énergie déjà soutirée.

![Transactions de compteur – Illustration 3](/img/informationssicherheit-zaehlertransaktionen/03.jpg)

3\. La session de recharge est terminée (p. ex. via l'app). La commande "End Transaction" est envoyée au compteur. Celui-ci termine la transaction, la signe et envoie les données de transaction ainsi que la signature numérique dans le cloud. L'écran indique à l'utilisateur pendant 5min que la session de recharge est terminée.

### Vérifier une session de recharge a posteriori

Après la session de recharge, le client peut à tout moment vérifier la quantité d'énergie facturée. Pour ce faire, il saisit la transaction correspondante dans l'app ou sur le web et la vérifie à l'aide de la clé publique du compteur. Les clés publiques de tous les compteurs smart-me sont accessibles publiquement dans le cloud smart-me (ou via l'API).

Les données de transaction peuvent être vérifiées en ligne à l'aide de la signature et de la clé publique.

![Transactions de compteur – Illustration 4](/img/informationssicherheit-zaehlertransaktionen/04.jpg)

## Valider les données de compteur de la Pico avec le logiciel de transparence



Un logiciel de transparence vous permet de vérifier des signatures numériques. 

Selon sa conception technique, une borne de recharge génère des valeurs de mesure signées numériquement en lien avec une session de recharge que vous effectuez sur cette borne de recharge. Ces signatures numériques vous permettent de vérifier les valeurs de mesure en différé, afin de vous assurer que personne n'a manipulé les valeurs au cours de leur transmission jusqu'à votre facture.



L'utilisation du logiciel de transparence est gratuite pour les consommateurs, les fournisseurs de mobilité et les exploitants de bornes de recharge. 



Téléchargement du logiciel de transparence : [https://www.safe-ev.de/de/transparenzsoftware.php](https://www.safe-ev.de/de/transparenzsoftware.php) 




### Valider les relevés du compteur

Les séries de relevés du compteur signés peuvent être consultées dans le cloud smart-me comme suit :

1\. Se connecter sur [www.smart-me.com](http://www.smart-me.com) 

2\. Sélectionner le compteur ou la borne de recharge souhaité(e)

3\. Dans le menu en haut à droite, cliquer sur la flèche et sélectionner « Relevés de compteur signés » (“Signierte Zählerstände”)

4\. Les signatures (format OCMF) s'affichent sous « Données du compteur » (“Zählerdaten”).



Le message OCMF peut être validé avec le logiciel de transparence :

- Relevé du compteur 1 : énergie active soutirage (1-b:1.8.0)

- Relevé du compteur 2 : énergie active livraison (1-b:1.8.0)






### Valider les transactions

Les transactions signées peuvent être consultées dans le cloud smart-me comme suit :
5\. Se connecter sur [www.smart-me.com
](http://www.smart-me.com)6\. Sélectionner le compteur ou la borne de recharge souhaité(e)
7\. Dans le menu en haut à droite, cliquer sur la flèche et sélectionner « Transactions signées » (“Signierte Transaktionen”)
8\. Les signatures (format OCMF) s'affichent sous « Données du compteur » (“Zählerdaten”) :



Le message OCMF peut être validé avec le logiciel de transparence.



![Transactions de compteur – Illustration 5](/img/informationssicherheit-zaehlertransaktionen/05.png)

![Transactions de compteur – Illustration 6](/img/informationssicherheit-zaehlertransaktionen/06.png)

![Transactions de compteur – Illustration 7](/img/informationssicherheit-zaehlertransaktionen/07.png)

### Activer le mode MID de la Pico (affichage des données pertinentes)

Si l'utilisateur souhaite déclencher l'affichage des données pertinentes pour la MID (relevés du compteur, versions, sommes de contrôle), deux possibilités s'offrent à lui :

- Démarrage ou redémarrage de la borne 

- Via le capteur de luminosité


Afficher les données pertinentes via le capteur de luminosité

À l'aide d'une lampe de poche, l'utilisateur peut « émettre » le code suivant :

Sombre - Clair - Sombre - Clair - Sombre

Chaque état doit durer entre 1 et 5 secondes.
