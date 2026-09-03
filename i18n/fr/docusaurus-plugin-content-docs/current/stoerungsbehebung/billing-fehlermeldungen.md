---
title: 'Dépannage Billing'
slug: '/stoerungsbehebung/billing-fehlermeldungen'
description: 'Cette section traite de manière méthodique les messages d''erreur du Billing.'
sidebar_label: 'Messages d''erreur Billing'
---
Cette section traite de manière méthodique les messages d'erreur du Billing.

## Généralités

La configuration du smart-me Billing est décrite ici : [Billing](/konfiguration/billing) 

Dans le smart-me Billing, les messages d'erreur s'affichent à deux endroits :

- Lors du calcul des tarifs virtuels (s'ils sont configurés)

- Lors de la création des factures


Calcul des tarifs virtuels

Où trouver les messages d'erreur lors du calcul des tarifs virtuels.
Connexion au portail :
Facturation (Rechnungsstellung) --> Configuration (Konfiguration) --> Éditer le bien immobilier (Liegenschaft editieren) --> Tarifs virtuels (Virtuelle Tarife) --> Encadré bleu

![Dépannage Billing – Illustration 1](/img/stoerungsbehebung-billing-fehlermeldungen/01.png)

Factures créées

Où trouver les messages d'erreur et les avertissements lors de la création de factures.
Connexion au portail :
Facturation (Rechnungsstellung)  --> Configuration (Konfiguration) --> Éditer le bien immobilier (Liegenschaft editieren) --> Factures (Rechnungen) --> Factures (Rechnungen) --> Champ orange avec les avertissements
(N'apparaît que s'il y a une erreur)

![Dépannage Billing – Illustration 2](/img/stoerungsbehebung-billing-fehlermeldungen/02.png)

## Liste des messages d'erreur

## Erreurs lors du calcul des tarifs virtuels

![Dépannage Billing – Illustration 3](/img/stoerungsbehebung-billing-fehlermeldungen/03.png)

### Le calcul démarre bientôt ...

Ce message s'affiche lorsqu'aucun tarif virtuel n'a été calculé. Les causes possibles sont les suivantes :

Le Billing vient d'être mis en place

- -   Cause : lorsque le Billing vient d'être créé, il faut appuyer une première fois manuellement sur recalculer (neu rechnen)

    - Solution : appuyer sur recalculer (neu rechnen)


Un autre message d'erreur s'affiche sous ce message

- -   Cause : en cas de problème, les tarifs ne peuvent pas être calculés.

    - Solution : traiter le message d'erreur situé en dessous.


On vient tout juste d'appuyer sur recalculer

- -   Cause : il faut un peu de temps (1-2 min) avant que le calcul ne démarre.

    - Solution : attendre 1-2 min


Aucun tarif n'est enregistré pour l'année en cours

- -   Cause : le Billing a besoin de tarifs valables pour toute la période de décompte

    - Solution : définir des tarifs de 2000 à 2099 ou au moins de la mise en service jusqu'à la fin de l'année en cours


La période n'est pas entièrement couverte par un tarif. Par exemple, aucun tarif n'existe pour 2019, l'année de la mise en service du compteur.

- -   Cause : le Billing a besoin de tarifs valables pour toute la période de décompte

    - Solution : définir des tarifs de 2000 à 2099 ou au moins de la mise en service jusqu'à la fin de l'année en cours


Pour le tarif solaire ou le tarif de batterie, le compteur solaire ou le compteur de consommation totale n'a pas été ajouté.

- -   Cause : pour calculer la répartition entre réseau et solaire, les tarifs solaires ont besoin de certains compteurs.

    - Solution : vérifier que tous les tarifs solaires et de batterie disposent des compteurs nécessaires.


La structure de dossiers du bien immobilier est à un seul niveau (uniquement des unités de décompte), alors qu'elle devrait être à deux niveaux (bien immobilier et unités de décompte).

- -   Cause : la structure du Billing est à deux niveaux et nécessite au moins une unité de décompte.

    - Solution : vérifier la structure des dossiers


### EVT001: There must be at least one normal virtual tariff active, but for ValuePeriod &#123; ... &#125; there is none

Ce message s'affiche lorsqu'au moins un tarif de réseau n'est pas valable sur l'ensemble de la période de décompte. L'accolade indique un moment auquel aucun tarif de réseau n'est valable (indications en UTC). 

- Solution 1 : définir des tarifs à partir de la première valeur transmise. Par exemple à partir du 5.8.2022 ou plus tôt, le 1.1.2000, puis appuyer sur "recalculer" (neu rechnen).

- Solution 2 : définir des tarifs pour l'année en cours (par ex. jusqu'au 31.12.2024), puis appuyer sur "recalculer" (neu rechnen).

- Solution 3 : en cas d'heures pleines / heures creuses : vérifier qu'elles couvrent 24 h. [Actions si/alors](/konfiguration/billing/stromtarife-definieren)

- Solution 3 : appuyer sur "recalculer" (neu rechnen) et saisir d'abord la date à partir de laquelle un tarif valable est configuré.


### EVT002: Not more than one unconditional normal virtual tariff must be active at a time, but for ValuePeriod ... there are the following ones: - ...

Ce message s'affiche lorsque plus d'un tarif de réseau est valable en même temps. Le Billing ne peut alors pas décider sur quel tarif la consommation doit être comptabilisée.

- Solution 1 : les tarifs ont des dates de début et de fin de validité qui se chevauchent.

- Solution 2 : en cas d'heures pleines / heures creuses : aucune condition n'est définie pour les deux tarifs. Au moins l'un des deux tarifs doit avoir une condition (par ex. les heures pleines).

- Solution 3 : les actions si/alors ont été mal configurées. Cela se produit surtout lorsque des heures pleines et des heures creuses sont configurées pour le courant du réseau et le courant solaire.


### EVT003: For ValuePeriod ... the following virtual tariffs are active but erroneous: - Solar tariff ... is invalid because of: Solar Meter: Meter with id ....' does not exist

Ce message s'affiche lorsqu'il y a un problème avec le compteur enregistré pour un tarif solaire.

- Solution 1 : aucun compteur n'a été enregistré -> enregistrer un compteur

- Solution 2 : un ancien compteur a été enregistré, mais il a été supprimé entre-temps -> enregistrer un nouveau compteur


### EVT004: The following residential commercial units are defective: - '....': the following assignments are defective: - Meter with id '....' does not exist

L'une des unités de décompte contient un compteur supprimé.

- Sélectionner l'unité de décompte indiquée dans le message d'erreur, supprimer le compteur supprimé "not found" et, le cas échéant, enregistrer un nouveau compteur


### EVT005: There is no residential commercial unit.

Ce message d'erreur apparaît lorsqu'aucune unité de décompte n'a été trouvée.

- Cause : la structure de dossiers à deux niveaux manque. À gauche, sous le bien immobilier, il n'y a qu'un dossier pour le bien immobilier et aucune unité de décompte subordonnée 

- Solution 1 :  vérifier la structure des dossiers. [Infos](/konfiguration/billing)

- Solution 2 : recréer le bien immobilier. Pour cela, dans le Billing sous Configuration, cliquer à nouveau sur Ajouter un bien immobilier (Liegenschaft hinzufügen) et sélectionner le même nœud. Aucune donnée n'est perdue.


Aucune unité de décompte n'est répertoriée sous les clés externes (en bas de la page).

- -   Cause : les unités de décompte ont été ajoutées ultérieurement au bien immobilier par glisser-déposer.

    - Solution : les unités de décompte doivent être recréées. Il est important de sélectionner à chaque fois le dossier du bien immobilier, puis de choisir "Ajouter un nœud" (Knoten hinzufügen). Sous "Dossier parent" (Übergeordneter Ordner), le nom du dossier du bien immobilier doit s'afficher.


### EVT006: Failed to load meters of folder '...': - Erroneous virtual meter '....: - Meter with id '....' does not exist

Le compteur virtuel se compose de compteurs qui ont été supprimés.



![Dépannage Billing – Illustration 4](/img/stoerungsbehebung-billing-fehlermeldungen/04.png)

### EVT007: Möglicherweise verfügen nicht alle Zähler in der Konfiguration über die für virtuelle Tarife gesetzlich vorgeschriebene Lastgang- oder Zählerstandgang-Zertifizierung.

Cette indication est purement informative et s'affiche lorsque des appareils tiers ou des compteurs non certifiés par smart-me sont utilisés. Elle n'a aucune influence sur le calcul.

Par cette indication, nous voulons nous assurer que l'émetteur de la facture est conscient que la [conformité des appareils de mesure](/planung/zertifizierungen) relève de sa propre responsabilité. Cela concerne tous les appareils tiers et le compteur monophasé smart-me

Remarque : ce message ne peut pas être désactivé.

### EVT020: Waiting for meter values of .... Last values at.... (UTC))

Ce message apparaît lorsque toutes les courbes de charge nécessaires ne sont pas disponibles pour poursuivre le calcul des tarifs.

- Tous les compteurs doivent être en ligne. [Compteur hors ligne](/stoerungsbehebung/zaehler-offline)

- Les compteurs démontés doivent être [désactivés ou supprimés](/konfiguration/inbetriebnahme/zaehler-loeschen).

- Pour les RCP virtuels (vRCP), les données ne sont envoyées qu'une fois par jour. Ce message reste donc affiché jusqu'au prochain envoi. Si la date est celle d'aujourd'hui, il peut être ignoré.

- Les compteurs doivent envoyer des courbes de charge. En cas de défaut, seules des données en direct sont parfois envoyées ; celles-ci ne conviennent pas au décompte. (Des courbes de charge de 15 min sont nécessaires.)


### EBC010: Die Kosten der Batteriepreiskomponente stimmen nicht mit den virtuellen Tarifkosten überein

Ce message n'apparaît que si l'électricité pour les locataires est activée. Cela se produit lorsque la structure tarifaire a été modifiée, mais que les composantes de prix des positions diverses n'ont pas encore été mises à jour.

### EBC011: Die Kosten der Netz- oder Solar-Preiskomponenten stimmen nicht mit den virtuellen Tarifkosten überein

Ce message n'apparaît que si l'électricité pour les locataires est activée. Cela se produit lorsque la structure tarifaire a été modifiée, mais que les composantes de prix des positions diverses n'ont pas encore été mises à jour.

### EBC012: Die Kosten der Solar-Preiskomponenten stimmen nicht mit den virtuellen Tarifkosten überein.

Ce message n'apparaît que si l'électricité pour les locataires est activée. Cela se produit lorsque la structure tarifaire a été modifiée, mais que les composantes de prix des positions diverses n'ont pas encore été mises à jour.

## Erreurs sur les factures créées

![Dépannage Billing – Illustration 5](/img/stoerungsbehebung-billing-fehlermeldungen/05.png)

### EBC001: Verbräuche der virtuellen Tarife stimmen nicht mit dem Verbrauch überein.

Ce message s'affiche lorsque la somme des tarifs virtuels ne correspond pas à la consommation des compteurs. Ce problème survient lorsque l'attribution des tarifs virtuels ne se fait pas correctement. 

Causes possibles :

Les tarifs n'ont pas été calculés pour toute la période de décompte

- Cause : le calcul des tarifs virtuels s'est interrompu en raison d'un message d'erreur.

- Solution : vérifier les tarifs virtuels dans la configuration du bien immobilier dans le Billing. Si un message d'erreur s'affiche dans l'encadré bleu, il doit être corrigé. Si aucun message ne s'affiche, mais que la date "Dernière valeur calculée" (Letzter berechneter Wert) se situe dans la période de décompte, le calcul est encore en cours et il faut patienter.
    Important : le calcul peut durer plusieurs heures, selon le nombre de tarifs et de compteurs.


La période de décompte comprend le jour de l'installation

- Cause : notre Billing travaille sur des journées complètes.

- Solution : le jour de l'installation ne doit pas se situer dans la période de décompte. On peut le vérifier en créant un rapport des compteurs et en contrôlant si celui-ci indique des valeurs de mesure pour toute la période.


La période de décompte comprend le jour d'aujourd'hui ou un jour futur.

- Cause : notre Billing travaille sur des journées complètes et calcule les tarifs virtuels en continu.

- Solution : pour la journée d'aujourd'hui, toutes les valeurs ne sont pas disponibles (la journée est encore en cours) et aucune donnée n'existe pour l'avenir. Aucun tarif virtuel ne peut donc être calculé.


La facture est créée vide

- Cause : la structure des dossiers n'est pas correcte ou aucun tarif virtuel n'a été calculé pour l'ensemble de la période de décompte.

- Solution : vérifier les tarifs virtuels dans la configuration du bien immobilier dans le Billing. Si un message d'erreur s'affiche dans l'encadré bleu, il doit être corrigé. Si le recalcul a été lancé à partir d'une date ultérieure (par ex. le décompte est créé pour 2025 ; le recalcul a été lancé à partir de 2026), aucun tarif n'a été calculé pour la période. Il faut relancer le calcul en incluant la période de décompte.


Un compteur a été hors ligne pendant plus de 2 mois

- Cause : en cas de lacune, aucun tarif virtuel ne peut être calculé.

- Solution : vérifier que toutes les données sont disponibles ; si elles le sont, il faut relancer le calcul. Si les données ne sont pas disponibles, aucune facture ne peut être créée pour cette période.


La configuration a changé (structure des dossiers, attribution des compteurs, structure/plages tarifaires)

- Cause : le calcul n'a pas été relancé

- Solution : il faut relancer le calcul.


Un compteur est facturé à plus ou moins de 100 %.

- Cause : un compteur (par ex. le compteur général) a été réparti en pourcentages, mais le total ne donne pas 100 %

- Solution : le compteur doit être facturé à 100 %. Remarque : si un compteur est réparti sur trois unités, l'une des unités doit avoir 33.34 %. (3x 33.33 % ne fait que 99.99 %)


Les données du RCP virtuel (vRCP) ont été mises à jour

- Causes : dans le cas du RCP virtuel (vRCP), le fournisseur d'électricité envoie chaque mois des données corrigées.

- Solution : il faut relancer le calcul.


### EBC002/EBC003: Keine Werte zum Startdatum oder Enddatum gefunden.

Ce message concerne les compteurs multi-énergies.

Causes possibles :

- Un compteur pertinent pour le décompte est hors ligne.

- La période de décompte (Du) correspond au jour de l'installation et/ou la période de décompte (Au) est fixée à aujourd'hui.

- La période de décompte (Du) est antérieure au jour de l'installation et/ou la période de décompte (Au) se situe dans le futur.

- Un compteur a été hors ligne pendant plus de 2 mois et la période de décompte commence ou se termine dans l'intervalle pour lequel les données ne sont plus disponibles. (lacune)

- L'année sélectionnée est incorrecte.


### EBC004: Rechnungen werden leer oder gar nicht generiert.

### Causes possibles :

- Aucune adresse de facturation valable n'a été enregistrée pour l'unité de décompte concernée (tenir compte de la période) →  notre système part sinon du principe qu'aucun locataire n'habite le logement et ne génère donc pas de facture. 

- Aucun compteur à décompter n'a été attribué à l'unité de décompte. 

- La structure des dossiers est incorrecte (voir [2\. Créer la structure des dossiers et attribuer les compteurs](/konfiguration/billing))

- Pour les tarifs virtuels : les tarifs ne sont pas valables sur la période de facturation souhaitée (adapter le cas échéant la période de validité des tarifs).

- Aucune adresse de facturation n'est enregistrée pour la période. 


### EBC005: The added or subtracted value results in an un-representable DateTime. Parameter name: value Index was outside the bounds of the array.

Votre login Bexio n'est plus valable. Vous devez vous reconnecter.

### QR bill data is invalid: currency should be "CHF" or "EUR" (currency\_not\_chf\_or\_eur)

La monnaie n'est pas réglée sur CHF ou EUR. 

Connexion --> Création de factures (Rechnungserstellung) --> Paramètres (Einstellungen) --> Modifier la monnaie (Währung) et la régler sur "CHF" --> Enregistrer.



### QR bill data is invalid: amount should be between 0.01 and 999 999 999.99 (amount\_outside\_valid\_range)

Le montant à facturer est négatif. Cela peut arriver avec une position diverse, par ex. des rétributions.

Cela ne peut pas être contourné. La facture est tout de même créée (sans code QR).



## Messages d'erreur spécifiques aux tarifs de consommation de pointe

### EPK001: Zähler für Netzstrom wurde nicht konfiguriert

### Causes possibles :

- Dans le smart-me Billing, le compteur de bilan n'a pas été enregistré dans le tarif de pointe.




Résoudre le problème : 

- smart-me Billing --> Configuration (Konfiguration) --> Tarifs de consommation de pointe (Spitzenverbrauch Tarife) --> Éditer (Editieren) --> Ajouter le compteur de bilan --> Enregistrer.


### EPK002: Spitzenlastkosteneinträge fehlen für den Abrechnungszeitraum

Dans le smart-me Billing, les coûts du tarif de pointe n'ont pas été enregistrés.

Solution : smart-me Billing --> Configuration (Konfiguration) --> Tarifs de consommation de pointe (Spitzenverbrauch Tarife) --> Ajouter les coûts --> Ajouter le prix / kW --> Enregistrer.

### EPK003: Der Netzverbrauch im Abrechnungszeitraum konnte nicht ermittelt werden.

Le compteur de bilan n'a fourni aucune donnée.

- Cause : sans compteur de bilan, les pointes ne peuvent pas être calculées lorsque le type est réglé sur "Mesure de la consommation" (Verbrauchsmessung)

- Solution : vérifier que les valeurs sont disponibles.


Le compteur de bilan n'a pas fourni de données pour un mois entier.

- Cause : des valeurs pour le mois entier sont nécessaires pour pouvoir facturer les pointes.

- Solution : configurer le tarif de pointe seulement à partir du mois suivant. Pour le mois présentant une lacune, une consommation de pointe peut être créée avec des "Coûts attribués" (Zugewiesene Kosten). 


### EPK004: Mindestens eine Abrechnungseinheit muss einen Verbrauch im Abrechnungszeitraum haben.

Seul le tarif solaire est facturé

- Cause : la consommation de pointe n'est appliquée qu'au tarif de réseau. 

- Solution : vérifier que le tarif solaire a été correctement configuré.


Aucune consommation n'a été mesurée

- Cause : les compteurs n'ont mesuré aucune consommation pour la période

- Solution 1 : vérifier quand les compteurs ont été mis en service et si des données sont disponibles sur toute la période.


## Messages d'erreur spécifiques à VEWA

### Les valeurs ne s'affichent pas du tout sur la facture ou s'affichent avec 0 kWh, bien qu'une consommation ait eu lieu.

Un tarif (valeur de remplacement) doit être enregistré pour chacun des types d'énergie. Chaleur, eau chaude sanitaire, etc.

Connexion --> Créer une facture (Rechnung erstellen) --> Paramètres (Einstellungen) (en haut au milieu) --> Éditer le bien immobilier (Liegenschaft editieren) --> Enregistrer les tarifs pour la chaleur / l'eau chaude sanitaire / etc. avec 0 CHF. --> Enregistrer.

### Les fichiers Word et Excel sont créés vides (0 octet)

Ces fichiers ne sont utilisables qu'en dehors de VEWA. Lorsque VEWA est activé, les boutons correspondants restent visibles, mais ne produisent que des fichiers vides.

### Aucune valeur pour le compteur. Des valeurs de remplacement sont utilisées.

Cette erreur peut se produire et n'est pas à considérer comme critique dans tous les cas. Il faut toutefois veiller à l'écart entre la valeur de remplacement et la valeur demandée.

Le message d'erreur apparaît au plus tard après 48 h d'écart.

Remarque : vérifie éventuellement l'intervalle de relevé du M-Bus Gateway pour qu'il effectue une lecture plus souvent que tous les 2 jours, afin d'exclure que l'erreur soit systématique.



### EVW001: Fehlendes Mietverhältnis oder Leerstand!

Ajoute le rapport de location ou la vacance manquants.

Sans cet ajout, les coûts sont intégralement facturés aux contrats enregistrés et l'énergie de référence totale n'est également formée qu'à partir de ces contrats. (Moins d'énergie que réellement consommée)



### EVW002: Doppelbelegung der Abrechnungseinheit!

Vérifie les vacances et les rapports de location pour détecter les doubles occupations.

Sans cette correction, les coûts sont intégralement facturés aux contrats enregistrés et l'énergie de référence totale est formée à partir d'un trop grand nombre de contrats. (Plus d'énergie que réellement consommée)

## L'adresse ne peut pas être gérée

### ID Address Email Description Valid from Valid to Valid to (ISO) Valid from (ISO)Third party key

Causes possibles :

- Le smart-me Billing a été créé sur 3 niveaux.

- Un dossier a été déplacé ultérieurement et a encore d'anciennes configurations enregistrées.


Solution : voir EVT005

## Sujets expliqués plus en détail :

### Pourquoi le tarif virtuel génère-t-il une différence lorsque le compteur n'a fourni aucune donnée au moment du début (Du) ou de la fin (Au) du décompte ?

Raisons possibles :

- La mise en service n'était pas terminée

- Le compteur était hors ligne et n'a pas livré les courbes de charge a posteriori

- Le compteur était défectueux


Base de données pour la constatation de l'erreur :

Le smart-me Billing effectue un contrôle lors de la création d'une facture. La somme des tarifs virtuels (par ex. heures pleines, heures creuses, tarif solaire) est comparée à la consommation d'électricité. S'il existe une différence, un message d'erreur s'affiche. 

![Dépannage Billing – Illustration 6](/img/stoerungsbehebung-billing-fehlermeldungen/06.png)

Affichage des relevés du compteur

La détermination des relevés du compteur n'est pas affichée avec une indication horaire dans le smart-me Billing lors de la création d'une facture. Pour vérifier si le compteur a fourni des données au moment souhaité, un rapport doit être créé.

Pour le rapport, le bien immobilier peut être sélectionné et un rapport de consommation détaillé PDF peut être généré. Les données de toutes les unités de décompte (logements) sont alors exportées en une seule fois. 

Sélectionner le bien immobilier --> Sélectionner Rapport en haut à droite --> Type de rapport --> Rapport de consommation détaillé (PDF)

On peut maintenant vérifier si la période du rapport diffère, pour la somme d'un ou plusieurs compteurs, de la période de la valeur de référence. Si tel est le cas, aucune courbe de charge n'est disponible pour la période choisie.

![Dépannage Billing – Illustration 7](/img/stoerungsbehebung-billing-fehlermeldungen/07.png)

Affichage des tarifs virtuels

La détermination des tarifs virtuels est affichée dans les tarifs, dans le smart-me Billing, lors de la création d'une facture.

![Dépannage Billing – Illustration 8](/img/stoerungsbehebung-billing-fehlermeldungen/08.png)

Traitement différent entre les relevés du compteur et les tarifs virtuels :

Relevés du compteur : pour la consommation d'électricité, le smart-me Billing utilise les relevés physiques du compteur générés sur le compteur. Si aucun relevé du compteur n'est disponible au moment du début ou de la fin du décompte, le smart-me Billing utilise le relevé du compteur le plus proche de la date souhaitée.

Tarifs virtuels : le smart-me Billing calcule les tarifs virtuels sur la base des courbes de charge (relevés physiques du compteur). Si aucune courbe de charge n'est disponible, par ex. pendant 1 semaine, celle-ci est interpolée. Autrement dit, notre système prend les relevés du compteur et part du principe que la consommation est constante toutes les 15 minutes (courbes de charge). Les consommations virtuelles sont ensuite calculées à partir de là.

Exemple de calcul simplifié avec des données correctes :

Le logement 1 a envoyé un relevé du compteur (courbes de charge) le 01.10.2023 00:00 et le 31.10.2023 00:00

- Relevé du compteur le 1.10.2023 00:00 : 5200 kWh

- Relevé du compteur le 31.10.2023 00:00 : 5250 kWh

- Le relevé du compteur est déterminé. 5250-5200 = 50 kWh


La consommation virtuelle est calculée. La répartition entre heures pleines, heures creuses et tarif solaire est de 50 kWh 

Exemple de calcul simplifié avec des données manquantes :

Le logement 1 a envoyé un relevé du compteur (courbes de charge) le 01.10.2023 00:00, et cela a été effectué jusqu'au 25.10.2023 00:00 inclus. Du 25.10.2023 00:00 au 15.11.2023 00:00, aucune courbe de charge n'est disponible.

- Relevé du compteur le 1.10.2023 00:00 : 851 kWh

- Relevé du compteur le 25.10.2023 00:00 : 902 kWh

- Relevé du compteur le 15.11.2023 00:00 : 950 kWh


Le relevé du compteur pour le 31.10.2023 00:00 n'est pas disponible. Le relevé du compteur le plus proche de cette date est celui du 25.10.2023 00:00 ; c'est donc lui qui est utilisé pour l'affichage et le calcul dans le smart-me Billing.

Le relevé du compteur est déterminé. 902-851 = 51 kWh (la consommation de 51 kWh est indiquée dans la facture sous "Votre part" (Ihr Anteil))

La consommation virtuelle est calculée. Entre le 1.10.2023 00:00 et le 25.10.2023 00:00, une consommation de 51 kWh est répartie entre les heures pleines, les heures creuses et le tarif solaire. Comme des données manquent à partir de ce moment, les courbes de charge manquantes sont interpolées. La panne dure 21 jours. Pendant cette période, 950-902 = 48 kWh ont été consommés. Avec l'interpolation, cela donne 2,29 kWh par jour. Dans le smart-me Billing, 6 jours à 2.29 kWh sont donc facturés en plus des 51 kWh, ce qui donne 51 + 13.71 = 64.71 kWh.

Il existe désormais une différence entre le relevé du compteur de 51 kWh et le tarif virtuel de 64.71 kWh dans le smart-me Billing. C'est ce qui provoque le message d'erreur.
