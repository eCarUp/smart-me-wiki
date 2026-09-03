---
title: 'Billing : facturer l''énergie'
slug: '/konfiguration/billing'
description: 'Il te faut un abonnement smart-me Professional pour pouvoir établir des décomptes de frais d''énergie.'
sidebar_label: 'Facturation'
---
### Condition préalable

Il te faut un abonnement smart-me Professional pour pouvoir établir des décomptes de frais d'énergie. 

## Outils

[Calculateur de tarifs d'électricité smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

## Webinaire smart-me Billing de A à Z

Dans notre webinaire, nous expliquons pas à pas comment établir des décomptes de frais d'énergie avec l'outil Billing :

<Video src="0AvKOogoW5Q" title="Video" />

<Video src="mK1HYLRtBUI" title="Video" />

Contenu de la vidéo

- Configuration des heures pleines et des heures creuses en tarif unique

- Adaptation des prix des tarifs virtuels

- Puissance de pointe

- Location de compteur


## Exemples de factures smart-me Billing

Beispiel Energiekostenabrechnung.pdf

Exemple : décompte d'électricité

Beispiel\_Rechnung\_VEWA\_Heizkosten.pdf

Exemple : décompte VEWA

## Configurer le décompte pas à pas

Avec ce guide pas à pas, nous souhaitons t'accompagner dans la configuration de ton Billing. Note qu'il s'agit uniquement d'un exemple dont tu peux t'inspirer. Selon la structure de ton immeuble, il y aura des différences avec notre exemple. 

## Paramètres de la facturation

Rends-toi d'abord dans les paramètres de la facturation (Einstellungen der Rechnungsstellung).

Configure ici la monnaie et l'application de la taxe sur la valeur ajoutée.



Paramètres concrets pour la TVA :

- Cas A : tu es un RCP (regroupement dans le cadre de la consommation propre) et tu réalises assurément moins de 100'000 CHF de chiffre d'affaires avec l'électricité et tu ne t'es pas assujetti volontairement à la TVA :
    \- TVA 0 %
    \- Taxe déjà comprise dans les prix : OUI

- Cas B : tu es un RCP et tu réalises 100'000 CHF ou plus de chiffre d'affaires avec les ventes d'électricité ou tu t'es assujetti volontairement à la TVA :
    \- TVA 8.1 %
    \- Taxe déjà comprise dans les prix : NON


![Billing : facturer l'énergie – illustration 1](/img/konfiguration-billing/01.png)

![Billing : facturer l'énergie – illustration 2](/img/konfiguration-billing/02.png)

Profites-en pour configurer également ton logo pour la facture.

Complète l'en-tête avec le contact et l'adresse de l'expéditeur de la facture et adresse quelques mots aimables à tes clients dans le pied de page.

![Billing : facturer l'énergie – illustration 3](/img/konfiguration-billing/03.png)

## Configuration de la facturation

Rends-toi maintenant dans la configuration de la facturation (Rechnungsstellung Konfiguration) pour configurer les décomptes des immeubles.

![Billing : facturer l'énergie – illustration 4](/img/konfiguration-billing/04.png)

1.  ### Créer l'immeuble


Dans la facturation, l'immeuble peut être ajouté (créé). 

Cette opération est maintenant effectuée pour tous les nœuds qui contiennent des unités de décompte.

Lors de cette étape, tous les sous-dossiers déjà créés et les compteurs attribués sont automatiquement affectés. C'est pourquoi nous recommandons de le faire avant de créer l'immeuble dans smart-me Billing.

Les points de mesure qui doivent être répartis et qui se trouvent dans le nœud « Compteur technique » (Technischer Zähler) doivent encore être affectés manuellement.

![Billing : facturer l'énergie – illustration 5](/img/konfiguration-billing/05.png)

### 2\. Affecter manuellement un compteur à une unité de décompte

Lors de la création de l'immeuble, les compteurs sont automatiquement affectés à 100 % à l'unité de décompte (dossier).

Si tu souhaites répartir un compteur (p. ex. Général) selon une clé de répartition ou le modifier ultérieurement, cela doit être fait manuellement.

- Sélectionner l'unité de décompte à gauche (sous-dossier p. ex. APP 1)

- Cliquer p. ex. sur Ajouter (Hinzufügen) sous Électricité 

- Sélectionne le compteur souhaité et indique le pourcentage à facturer.


La procédure décrite fonctionne de manière analogue pour les autres types d'énergie (chaleur, froid, etc.)

![Billing : facturer l'énergie – illustration 6](/img/konfiguration-billing/06.png)

### 3\. Enregistrer l'IBAN

Dans smart-me Billing, la QR-facture peut être activée en option.

Après l'enregistrement des données du compte, une QR-facture pour le versement est joint à chaque unité de décompte (locataire).

smart-me reconnaît automatiquement les expéditeurs correctement renseignés lorsque l'adresse de facturation est enregistrée sur 3 lignes dans le Billing. Si une entreprise ou une raison sociale est choisie, celle-ci doit être ajoutée avant le nom.

p. ex.

```
Firma AG, Peter Lustig
Löwenzahnstrasse 42
6666 Risch
```

Si aucune adresse correcte n'est reconnue, le champ Expéditeur (Payable par) reste vide dans la QR-facture.

smart-me ne prend pas en charge les numéros de référence. Pour pouvoir les utiliser, un [système tiers](/drittsysteme) est nécessaire, qui prenne également cela en charge (p. ex. [Bexio](/drittsysteme/bexio)). 

Pour identifier la facture sans référence, une information supplémentaire (communication au bénéficiaire) est ajoutée sur la QR-facture, qui se compose comme suit : nom de l'unité de décompte (nom du dossier).

La présentation est optimisée pour l'envoi par e-mail. Si les factures sont imprimées, nous recommandons de désactiver la QR-facture et de la commander auprès de la banque.

![Billing : facturer l'énergie – illustration 7](/img/konfiguration-billing/07.jpg)

![Billing : facturer l'énergie – illustration 8](/img/konfiguration-billing/08.png)

### 4\. Saisir l'état locatif

Pour le décompte selon la VEWA, tous les contrats de location et les vacances locatives doivent être indiqués sans lacune chez smart-me.

- Menu Facturation (Rechnungsstellung)

- Configuration

- Sélectionner l'unité de décompte à gauche (sous-dossier p. ex. APP 1)

- Renseigner l'adresse et la validité

- L'e-mail est facultatif et n'est utilisé que pour l'envoi automatique des factures.


Remarque pour l'export dans des logiciels immobiliers avec fichiers DTA-VHKA :
Si vous souhaitez utiliser la VEWA, mais exporter les données vers un autre système, vous n'avez pas besoin de saisir d'état locatif, celui-ci est créé via le fichier d'import.
Veillez à ce que tous les rapports de location et les vacances locatives soient enregistrés.

![Billing : facturer l'énergie – illustration 9](/img/konfiguration-billing/09.png)

![Billing : facturer l'énergie – illustration 10](/img/konfiguration-billing/10.png)

### 5\. Configurer les tarifs d'électricité

- Menu Facturation (Rechnungsstellung)

- Configuration

- Sélectionner l'immeuble à gauche (dossier principal p. ex. Altgasse 13)

- Ajouter des tarifs d'électricité virtuels. (p. ex. heures pleines, heures creuses, tarif solaire)


### 6\. Configurer chaleur / eau

Pour la tarification et le décompte de la multi-énergie, il existe fondamentalement deux possibilités de configuration :

Décompte sans fonction VEWA

- Décompte au moyen d'un tarif énergétique calculé en externe par type d'énergie. Est géré avec un prix par CHF/m3 ou CHF/kWh dans l'immeuble, en dessous des tarifs virtuels.


Décompte avec fonction VEWA (recommandé)

- Les coûts de chaleur / eau cumulés sur l'année peuvent être saisis.  Le tarif est ensuite calculé sur la période et réparti sur les unités de décompte au moyen de clés de répartition. 


### Prochaines étapes intermédiaires

[Configurer les tarifs d'électricité](/konfiguration/billing/stromtarife-definieren)

[Configurer la VEWA](/konfiguration/billing/vewa-abrechnung)

### 7\. Configurer d'autres coûts pour l'électricité (si nécessaire)

Dans le champ Divers (Sonstiges), d'autres postes de coûts peuvent être ajoutés. Cela est possible individuellement pour chaque unité de décompte (unité de décompte) ou globalement pour toutes les unités de décompte (immeuble). 

Au niveau de l'immeuble :

Dans le champ Divers (Sonstiges), d'autres postes de coûts peuvent être ajoutés. Cela est possible individuellement pour chaque unité de décompte (unité de décompte) ou globalement pour toutes les unités de décompte (immeuble). 

Exemple :
80 % de la part de coûts de base du fournisseur d'électricité doivent être facturés de manière égale à tous les participants en lien avec le tarif solaire.

- La taxe saisie est ajoutée sur toutes les factures par mois


Remarque : les coûts Divers ne sont disponibles qu'avec la facture d'électricité.



Au niveau de l'unité de décompte

Exemple :
Une borne de recharge est louée et doit être facturée mensuellement à l'unité de décompte.

- Les coûts sont imputés uniquement à cette unité de décompte




![Billing : facturer l'énergie – illustration 11](/img/konfiguration-billing/11.png)

### 8\. Créer la facture

Lorsque le cadre bleu des tarifs virtuels est sur la date du jour, une facture d'essai peut être créée.

- Menu Facturation (Rechnungsstellung)

- Factures (Rechnungen)

- Saisir la date

- Créer l'aperçu de la facture


Si l'aperçu te convient, tu peux revenir en arrière et créer les véritables factures.

Sur cette page, tu trouveras une description des messages d'erreur les plus fréquents et des solutions possibles : [Messages d'erreur Billing](/stoerungsbehebung/billing-fehlermeldungen) 

### Prochaine étape

[Continuer vers la création des accès pour les locataires](/konfiguration/benutzerkonfiguration)

## Remarques utiles sur les données tarifaires

### Visualisation

Dans l'affichage standard du dossier de l'unité de décompte (p. ex. un appartement), une nouvelle tuile est désormais affichée. Celle-ci indique les relevés du compteur pour les tarifs virtuels. Lorsque l'on clique sur cette tuile, le profil de charge des tarifs virtuels est affiché. 



![Billing : facturer l'énergie – illustration 12](/img/konfiguration-billing/12.jpg)

### Comment l'électricité solaire est-elle répartie

La plateforme smart-me utilise le compteur de production (compteur PV) pour déterminer la quantité d'électricité produite et le compteur virtuel de consommation totale pour déterminer la quantité d'électricité consommée. Une part en pourcentage de l'électricité solaire en est calculée. 

Chaque compteur d'électricité (locataire) a ainsi droit à la même part d'électricité solaire par 15 minutes, p. ex. 40 % de sa consommation en kWh.

Exemple d'attribution d'électricité solaire

- Consommation totale 10kWh

- Électricité solaire 6kWh (60 % solaire / 40 % réseau)

- Locataire 1 consommation 6kWh (3,6kWh solaire / 2,4kWh réseau)

- Locataire 2 consommation 4kWh (2,4kWh solaire / 1,6 kWh réseau)


La précision peut être améliorée en configurant le compteur de bilan pour le tarif solaire.

![Billing : facturer l'énergie – illustration 13](/img/konfiguration-billing/13.png)

[Continuer vers la création des accès pour les locataires](/konfiguration/benutzerkonfiguration)
