---
title: 'Bexio'
slug: '/drittsysteme/bexio'
description: 'Vous avez besoin d''un abonnement smart-me Professional pour pouvoir établir des décomptes des coûts énergétiques.'
sidebar_label: 'Bexio'
---
### Prérequis

Vous avez besoin d'un abonnement smart-me Professional pour pouvoir établir des décomptes des coûts énergétiques. 

smart-me Billing permet d'importer automatiquement les factures dans Bexio. Bexio est un logiciel de gestion d'entreprise. Plus d'informations : [https://www.bexio.com/](https://www.bexio.com/)

Fonctions

- Gestion des clients dans Bexio : smart-me Billing reprend le fichier clients de Bexio
- Export des factures : les décomptes des coûts énergétiques peuvent être créés, envoyés et gérés dans Bexio. 
- Rapprochement automatique des paiements / rappel automatique


![Bexio – Illustration 1](/img/drittsysteme-bexio/01.jpg)

### 1\. Activer Bexio

1.  Ouvrez smart-me Billing
2.  Sélectionnez « Configuration » (Konfiguration) puis l'immeuble
3.  Sous « Export vers un fournisseur tiers » (Export zu Drittanbieter), sélectionnez Bexio
4.  Cliquez sur « Login » (Login) et connectez-vous à Bexio
5.  Cliquez sur « Enregistrer » (speichern)
6.  Attendez que « Login ok » (Login ok) apparaisse en vert (cela peut parfois prendre 1 à 2 minutes)

- Titre de la facture (Rechnungstitel) : le titre de la facture dans Bexio
- Langue de la facture (Sprache der Rechnung) : la langue à utiliser dans Bexio pour la facture.
- Compte pour les écritures Bexio (Konto für Bexio-Buchungen) : le compte Bexio auquel les positions doivent être attribuées.


![Bexio – Illustration 2](/img/drittsysteme-bexio/02.jpg)

### 2\. Attribuer les locataires

<div className="row">
<div className="col col--4">

1.  Sélectionnez « Configuration » (Konfiguration) puis un appartement
2.  Sous « Adresse de facturation » (Rechnungsadresse), cliquez sur « Ajouter » (Hinzufügen)
3.  Sélectionnez le contact dans Bexio

</div>
<div className="col col--8 text--center">

![Bexio – Illustration 3](/img/drittsysteme-bexio/03.jpg)

</div>
</div>

### 3\. Exporter les factures vers Bexio

<div className="row">
<div className="col col--4">

Créez les factures sur un immeuble

\-> Les factures sont automatiquement exportées vers Bexio.

smart-me Billing reprend le numéro de facture de Bexio (exemple : RE-1570 correspond dans smart-me à la facture portant le numéro 1570)

</div>
<div className="col col--8 text--center">

![Bexio – Illustration 4](/img/drittsysteme-bexio/04.jpg)

</div>
</div>

### 4\. Factures dans Bexio

Les factures ont maintenant été créées dans Bexio et peuvent être traitées.

1.  Connectez-vous à Bexio
2.  Ouvrez les factures

![Bexio – Illustration 5](/img/drittsysteme-bexio/05.jpg)

Exemple d'une facture d'électricité exportée

![Bexio – Illustration 6](/img/drittsysteme-bexio/06.jpg)

Exemple d'une facture VEWA exportée

![Bexio – Illustration 7](/img/drittsysteme-bexio/07.png)

### 5\. Configuration

<div className="row">
<div className="col col--5">

Sous Paramètres >> Tous les paramètres >> Comptabilité (Einstellungen >> Alle Einstellungen >> Buchhaltung)

Vérifiez que la tuile Taux d'imposition (Steuersätze) est visible.

</div>
<div className="col col--7 text--center">

![Bexio – Illustration 8](/img/drittsysteme-bexio/08.png)

</div>
</div>

<div className="row">
<div className="col col--5">

Paramètres smart-me

Taux d'imposition 0%

Inclus.

</div>
<div className="col col--7 text--center">

![Bexio – Illustration 9](/img/drittsysteme-bexio/09.png)

</div>
</div>

### 5\. Gestion des erreurs

account\_id \[Diese Eingabe ist nicht korrekt.\]
Le compte pour les écritures Bexio n'est pas valable. Il faut utiliser un compte Bexio sur lequel des factures peuvent également être comptabilisées. 

tax\_id \[Diese Eingabe ist nicht korrekt.\]
Aucun taux d'imposition valable n'a été trouvé pour une position de facture.
\- Vérifiez que tous les taux d'imposition utilisés (0%, 8.1%, 2.6%,...) existent et sont valables dans Bexio
\- Assurez-vous que tous les taux de TVA pertinents sont attribués au formulaire 303.
Si ce n'est pas le cas, créez-en un supplémentaire pour chaque taxe.
\--> Aperçu des paramètres (Übersicht Einstellungen) --> Comptabilité (Buchhaltung) --> Taux d'imposition (Steuersätze) --> Modifier la TVA (Mehrwertsteuer bearbeiten)

Aucune adresse Bexio trouvée pour l'utilisateur (Keine Bexio adresse für Benutzer gefunden)
Aucun utilisateur Bexio, ou un utilisateur Bexio non valable, a été attribué au locataire. Veuillez attribuer un utilisateur au locataire (voir ci-dessus : 2. Attribuer les locataires)

&#123;"error\_code":422,"message":"The form could not be saved due to the following errors:","errors":\["positions: 0 \[account\_id \[Diese Eingabe ist nicht korrekt.\]\]"\]&#125;



**Solution 1 :**

Dans smart-me, une taxe est déjà incluse dans les paramètres, p. ex. 8.1%. 

Dans Bexio, sous Paramètres (en haut à droite) / Tous les paramètres / Comptabilité / Paramètres de base TVA (Einstellungen / Alle Einstellungen / Buchhaltung / Grundeinstellung MWST), rien n'est configuré.

Possibilité : indiquer 0% dans smart-me.

**Solution 2 :**

Dans smart-me, sélectionnez 3400 pour l'export (Compte pour les écritures Bexio).

Les particuliers peuvent créer un compte 3680 Autres produits.

![Bexio – Illustration 10](/img/drittsysteme-bexio/10.png)

No tax in bexio found for 0%

Ajouter la TVA.



## Contact

<Kacheln min="20rem">
<Kachel bild="/img/drittsysteme-bexio/11.png" titel="Bexio AG">

Alte Jonastrasse 24, CH-8640 Rapperswil

+41 71 552 00 60 · [support@bexio.com](mailto:support@bexio.com) · [www.bexio.com](https://www.bexio.com)

</Kachel>
</Kacheln>
