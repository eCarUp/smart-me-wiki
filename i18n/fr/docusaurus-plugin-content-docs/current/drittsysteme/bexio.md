---
title: 'Bexio'
slug: '/drittsysteme/bexio'
description: 'Vous avez besoin d''un abonnement smart-me Professional pour pouvoir établir des décomptes de frais énergétiques.'
sidebar_label: 'Bexio'
---
### Condition préalable

Vous avez besoin d'un abonnement smart-me Professional pour pouvoir établir des décomptes de frais énergétiques. 

smart-me Billing offre la possibilité d'importer automatiquement les factures dans Bexio. Bexio est un logiciel de gestion d'entreprise. Plus d'informations : [https://www.bexio.com/](https://www.bexio.com/)

Fonctions

- Gestion des clients dans Bexio : smart-me Billing reprend le fichier client depuis Bexio

- Export des factures : les décomptes de frais énergétiques peuvent être créés, envoyés et gérés dans Bexio. 

- Rapprochement automatique des paiements / rappel automatique


![Bexio – Illustration 1](/img/drittsysteme-bexio/01.jpg)

### 1\. Activer Bexio

1.  Ouvrez smart-me Billing

2.  Sélectionnez « Configuration » (Konfiguration) et l'immeuble

3.  Sous « Export vers un fournisseur tiers » (Export zu Drittanbieter), sélectionnez Bexio

4.  Cliquez sur Login et connectez-vous à Bexio

5.  Cliquez sur enregistrer

6.  Attendez que Login ok (vert) s'affiche (cela prend parfois 1 à 2 minutes)




- Titre de la facture : le titre de la facture dans Bexio

- Langue de la facture : la langue à utiliser dans Bexio pour la facture.

- Compte pour les écritures Bexio : le compte Bexio auquel les positions doivent être attribuées.


![Bexio – Illustration 2](/img/drittsysteme-bexio/02.jpg)

### 2\. Attribuer les locataires

1.  Sélectionnez « Configuration » (Konfiguration) et un appartement

2.  Sous Adresse de facturation, cliquez sur « Ajouter » (Hinzufügen)

3.  Sélectionnez le contact depuis Bexio


![Bexio – Illustration 3](/img/drittsysteme-bexio/03.jpg)

### 3\. Exporter la facture vers Bexio

Créez les factures sur un immeuble

\-> Les factures sont automatiquement exportées vers Bexio.

smart-me Billing reprend le numéro de facture depuis Bexio (exemple : RE-1570 correspond dans smart-me à la facture portant le numéro 1570)

![Bexio – Illustration 4](/img/drittsysteme-bexio/04.jpg)

### 4\. Factures dans Bexio

Les factures ont maintenant été créées dans Bexio et peuvent être traitées ultérieurement.

1.  Connectez-vous à Bexio

2.  Ouvrez les factures


![Bexio – Illustration 5](/img/drittsysteme-bexio/05.jpg)

Exemple d'une facture d'électricité exportée

![Bexio – Illustration 6](/img/drittsysteme-bexio/06.jpg)

Exemple d'une facture VEWA exportée

![Bexio – Illustration 7](/img/drittsysteme-bexio/07.png)

### 5\. Config

Sous Paramètres 

Tous les paramètres

Comptabilité

Vérifiez si la tuile Taux d'imposition est visible.

![Bexio – Illustration 8](/img/drittsysteme-bexio/08.png)

Paramètres smart-me

Taux d'imposition 0 %

Inclus.

![Bexio – Illustration 9](/img/drittsysteme-bexio/09.png)

### 5\. Traitement des erreurs

account\_id \[Cette saisie n'est pas correcte.\]
Le compte pour les écritures Bexio n'est pas valide. Il faut utiliser un compte Bexio sur lequel des factures peuvent également être comptabilisées. 

tax\_id \[Cette saisie n'est pas correcte.\]
Aucun taux d'imposition valide n'a été trouvé pour une position de facture.
\- Vérifiez si les taux d'imposition sont présents et valides dans Bexio pour tous les taux utilisés (0 %, 8.1 %, 2.6 %, ...)
\- Assurez-vous que tous les taux de TVA pertinents sont attribués au formulaire 303.
Si ce n'est pas le cas, créez-en des supplémentaires pour chaque taxe.
\--> Aperçu Paramètres --> Comptabilité --> Taux d'imposition --> Modifier la TVA

Aucune adresse Bexio trouvée pour l'utilisateur
Aucun utilisateur Bexio ou un utilisateur Bexio non valide a été attribué au locataire. Veuillez attribuer un utilisateur au locataire (voir ci-dessus : 2. Attribuer les locataires)

&#123;"error\_code":422,"message":"The form could not be saved due to the following errors:","errors":\["positions: 0 \[account\_id \[Diese Eingabe ist nicht korrekt.\]\]"\]&#125;



Solution 1 :

Dans smart-me, une taxe est déjà incluse dans les paramètres, par ex. 8.1 %. 

Dans Bexio, sous Paramètres (en haut à droite) / Tous les paramètres / Comptabilité / Paramètres de base TVA, rien n'est configuré.

Possibilité d'indiquer 0 % dans smart-me.

Solution 2 :

Sélectionner l'export dans smart-me sur 3400 (compte pour les écritures Bexio).

Les particuliers peuvent créer un compte 3680 Autres produits

![Bexio – Illustration 10](/img/drittsysteme-bexio/10.png)

No tax in bexio found for 0%

Ajouter la TVA.



![Bexio – Illustration 11](/img/drittsysteme-bexio/11.png)

Bexio AG

Alte Jonastrasse 24

CH-8640 Rapperswil

+41 71 552 00 60

[support@bexio.com](mailto:support@bexio.com) 

www.bexio.com
