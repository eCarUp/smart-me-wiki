---
title: 'Dépannage du Billing'
slug: '/stoerungsbehebung/billing-fehlermeldungen'
description: 'Cette section traite de manière méthodique les messages d''erreur du Billing.'
sidebar_label: 'Messages d''erreur du Billing'
---
Cette section traite de manière méthodique les messages d'erreur du Billing.

## Généralités

La configuration du smart-me Billing est décrite ici : [Billing](/konfiguration/billing) 

Dans le smart-me Billing, les messages d'erreur s'affichent à deux endroits :

- Lors du calcul des tarifs virtuels (si configurés)

- Lors de la création des factures


Calcul des tarifs virtuels

Où trouver les messages d'erreur lors du calcul des tarifs virtuels.
Connexion au portail :
Facturation (Rechnungsstellung) --> Configuration (Konfiguration) --> Modifier l'immeuble (Liegenschaft editieren) --> Tarifs virtuels (Virtuelle Tarife) --> Encadré bleu

![Dépannage du Billing – illustration 1](/img/stoerungsbehebung-billing-fehlermeldungen/01.png)

Factures créées

Où trouver les messages d'erreur et les avertissements lors de la création des factures.
Connexion au portail :
Facturation (Rechnungsstellung)  --> Configuration (Konfiguration) --> Modifier l'immeuble (Liegenschaft editieren) --> Factures (Rechnungen) --> Factures (Rechnungen) --> Champ orange avec avertissements
(N'apparaît qu'en présence d'une erreur)

![Dépannage du Billing – illustration 2](/img/stoerungsbehebung-billing-fehlermeldungen/02.png)

## Liste des messages d'erreur

## Erreurs lors du calcul des tarifs virtuels

![Dépannage du Billing – illustration 3](/img/stoerungsbehebung-billing-fehlermeldungen/03.png)

### Le calcul va bientôt commencer ...

Ce message s'affiche lorsqu'aucun tarif virtuel n'a été calculé. Les causes possibles sont les suivantes :

Le Billing vient d'être configuré

- -   Cause : Lorsque le Billing vient d'être créé, il faut cliquer manuellement une première fois sur recalculer (neu rechnen)

    - Solution : Cliquer sur recalculer (neu rechnen)


Un autre message d'erreur s'affiche sous ce message

- -   Cause : En cas de problème, les tarifs ne peuvent pas être calculés.

    - Solution : Traiter le message d'erreur affiché en dessous.


Vous venez de cliquer sur recalculer (neu rechnen)

- -   Cause : Il faut un peu de temps (1-2min) avant que le calcul ne commence.

    - Solution : Attendre 1-2min


Aucun tarif n'est défini pour l'année en cours

- -   Cause : Le Billing a besoin de tarifs valables pour toute la période de décompte

    - Solution : Définir des tarifs de 2000 à 2099 ou au moins de la mise en service jusqu'à la fin de l'année en cours


La période n'est pas entièrement couverte par un tarif. P. ex. aucun tarif n'est défini pour 2019, l'année de mise en service du compteur.

- -   Cause : Le Billing a besoin de tarifs valables pour toute la période de décompte

    - Solution : Définir des tarifs de 2000 à 2099 ou au moins de la mise en service jusqu'à la fin de l'année en cours


Dans le tarif solaire ou le tarif batterie, le compteur solaire ou le compteur de consommation totale n'a pas été ajouté.

- -   Cause : Pour calculer la répartition entre réseau et solaire, les tarifs solaires ont besoin de certains compteurs.

    - Solution : Vérifier que tous les tarifs solaires et batterie disposent des compteurs nécessaires.


La structure de dossiers de l'immeuble ne comporte qu'un niveau (uniquement des unités de décompte), alors qu'elle devrait en comporter deux (immeuble et unités de décompte).

- -   Cause : La structure du Billing comporte deux niveaux et nécessite au moins une unité de décompte.

    - Solution : Vérifier la structure de dossiers


### EVT001: There must be at least one normal virtual tariff active, but for ValuePeriod &#123; ... &#125; there is none

Ce message s'affiche lorsqu'au moins un tarif réseau n'est pas valable pour toute la période de décompte. Les accolades indiquent un moment auquel aucun tarif réseau n'est valable (indication en UTC). 

- Solution 1 : Définir des tarifs à partir de la première valeur transmise. P. ex. à partir du 5.8.2022 ou plus tôt, le 1.1.2000, puis cliquer sur  « recalculer » (neu rechnen).

- Solution 2 : Définir des tarifs pour l'année en cours (p. ex. jusqu'au 31.12.2024), puis cliquer sur  « recalculer » (neu rechnen).

- Solution 3 : En cas d'heures pleines/heures creuses : vérifier qu'elles couvrent 24h. [Actions si/alors](/konfiguration/billing/stromtarife-definieren)

- Solution 3 : Cliquer sur « recalculer » (neu rechnen) et saisir comme date de début celle à partir de laquelle un tarif valable est configuré.


### EVT002: Not more than one unconditional normal virtual tariff must be active at a time, but for ValuePeriod ... there are the following ones: - ...

Ce message s'affiche lorsque plusieurs tarifs réseau sont valables simultanément. Le Billing ne peut alors pas déterminer sur quel tarif la consommation doit être imputée.

- Solution 1 : Les dates de début et de fin de validité des tarifs se chevauchent.

- Solution 2 : En cas d'heures pleines/heures creuses : aucune condition n'est définie pour les deux tarifs. Au moins l'un des deux tarifs doit avoir une condition (p. ex. heures pleines).

- Solution 3 : Les actions si/alors ont été mal configurées. Cela se produit surtout lorsque des heures pleines et des heures creuses sont configurées pour l'électricité du réseau et l'électricité solaire.


### EVT003: For ValuePeriod ... the following virtual tariffs are active but erroneous: - Solar tariff ... is invalid because of: Solar Meter: Meter with id ....' does not exist

Ce message s'affiche lorsqu'un problème concerne le compteur associé à un tarif solaire.

- Solution 1 : Aucun compteur n'a été associé -> associer un compteur

- Solution 2 : Un ancien compteur a été associé, qui a été supprimé entre-temps -> associer un nouveau compteur


### EVT004: The following residential commercial units are defective: - '....': the following assignments are defective: - Meter with id '....' does not exist

L'une des unités de décompte contient un compteur supprimé.

- Sélectionner l'unité de décompte indiquée dans le message d'erreur, supprimer le compteur supprimé « not found » et, le cas échéant, associer un nouveau compteur


### EVT005: There is no residential commercial unit.

Ce message d'erreur apparaît lorsqu'aucune unité de décompte n'a été trouvée.

- Cause : La structure de dossiers à deux niveaux fait défaut. À gauche, sous l'immeuble, il n'y a qu'un dossier pour l'immeuble et aucune unité de décompte subordonnée 

- Solution 1 :  Vérifier la structure de dossiers. [Infos](/konfiguration/billing)

- Solution 2 : Recréer l'immeuble. Pour cela, dans le Billing, sous Configuration (Konfiguration), cliquer à nouveau sur Ajouter un immeuble (Liegenschaft hinzufügen) et sélectionner le même nœud. Aucune donnée n'est perdue.


Aucune unité de décompte n'est listée dans les clés externes (en bas de la page).

- -   Cause : Les unités de décompte ont été ajoutées ultérieurement à l'immeuble par glisser-déposer.

    - Solution : Les unités de décompte doivent être recréées. Il est important de sélectionner à chaque fois le dossier de l'immeuble, puis de choisir « Ajouter un nœud » (Knoten hinzufügen). Sous « Dossier parent » (Übergeordneter Ordner), le nom du dossier de l'immeuble doit s'afficher.


### EVT006: Failed to load meters of folder '...': - Erroneous virtual meter '....: - Meter with id '....' does not exist

Le compteur virtuel est composé de compteurs qui ont été supprimés.



![Dépannage du Billing – illustration 4](/img/stoerungsbehebung-billing-fehlermeldungen/04.png)

### EVT007: Il est possible que tous les compteurs de la configuration ne disposent pas de la certification de courbe de charge ou de courbe des relevés exigée par la loi pour les tarifs virtuels.

Cette indication est purement informative et s'affiche lorsque des appareils tiers ou des compteurs non certifiés par smart-me sont utilisés. Elle n'a aucune influence sur le calcul.

Par cette indication, nous voulons nous assurer que l'émetteur des factures est conscient que la [conformité des instruments de mesure](/planung/zertifizierungen) relève de sa propre responsabilité. Cela concerne tous les appareils tiers ainsi que le compteur monophasé smart-me

Remarque : ce message ne peut pas être désactivé.

### EVT020: Waiting for meter values of .... Last values at.... (UTC))

Ce message apparaît lorsque toutes les données de courbe de charge nécessaires ne sont pas disponibles pour poursuivre le calcul des tarifs.

- Tous les compteurs doivent être en ligne. [Compteur hors ligne](/stoerungsbehebung/zaehler-offline)

- Les compteurs démontés doivent être [désactivés ou supprimés](/konfiguration/inbetriebnahme/zaehler-loeschen).

- Pour les RCP virtuels (vRCP), les données ne sont envoyées qu'une fois par jour. Ce message s'affiche donc toujours jusqu'au prochain envoi. Si la date est celle d'aujourd'hui, il peut être ignoré.

- Les compteurs doivent envoyer des données de courbe de charge. En cas de défaut, il se peut que seules des données en temps réel soient envoyées ; celles-ci ne conviennent pas au décompte. (Des données de courbe de charge au quart d'heure sont nécessaires.)


### EBC010: Les coûts de la composante de prix batterie ne correspondent pas aux coûts des tarifs virtuels

Ce message n'apparaît que si l'électricité pour les locataires est activée. Cela se produit lorsque la structure tarifaire a été modifiée, mais que les composantes de prix des autres positions (Sonstige Positionen) n'ont pas encore été mises à jour.

### EBC011: Les coûts des composantes de prix réseau ou solaire ne correspondent pas aux coûts des tarifs virtuels

Ce message n'apparaît que si l'électricité pour les locataires est activée. Cela se produit lorsque la structure tarifaire a été modifiée, mais que les composantes de prix des autres positions (Sonstige Positionen) n'ont pas encore été mises à jour.

### EBC012: Les coûts des composantes de prix solaire ne correspondent pas aux coûts des tarifs virtuels.

Ce message n'apparaît que si l'électricité pour les locataires est activée. Cela se produit lorsque la structure tarifaire a été modifiée, mais que les composantes de prix des autres positions (Sonstige Positionen) n'ont pas encore été mises à jour.

## Erreurs dans les factures créées

![Dépannage du Billing – illustration 5](/img/stoerungsbehebung-billing-fehlermeldungen/05.png)

### EBC001: Les consommations des tarifs virtuels ne correspondent pas à la consommation.

Ce message s'affiche lorsque la somme des tarifs virtuels ne correspond pas à la consommation des compteurs. Ce problème survient lorsque l'attribution des tarifs virtuels ne s'effectue pas correctement. 

Causes possibles :

Les tarifs n'ont pas été calculés pour toute la période de décompte

- Cause : Le calcul des tarifs virtuels s'est arrêté en raison d'un message d'erreur.

- Solution : Dans la configuration de l'immeuble dans le Billing, vérifier les tarifs virtuels. Si un message d'erreur s'affiche dans l'encadré bleu, il doit être corrigé. Si aucun message ne s'affiche, mais que la date « Dernière valeur calculée » (Letzter berechneter Wert) se situe dans la période de décompte, le calcul est encore en cours et il faut patienter.
    Important : le calcul peut durer plusieurs heures, selon le nombre de tarifs et de compteurs.


Le jour d'installation est inclus dans la période de décompte

- Cause : Notre Billing travaille sur des journées complètes.

- Solution : Le jour d'installation ne doit pas faire partie de la période de décompte. Vous pouvez le vérifier en créant un rapport des compteurs et en contrôlant si celui-ci indique des valeurs de mesure pour toute la période.


La période de décompte inclut le jour actuel ou un jour futur.

- Cause : Notre Billing travaille sur des journées complètes et calcule les tarifs virtuels en continu.

- Solution : Pour le jour actuel, toutes les valeurs ne sont pas disponibles (la journée est encore en cours) et aucune donnée n'existe pour le futur. Les tarifs virtuels ne peuvent donc pas être calculés.


La facture est créée vide

- Cause : La structure de dossiers n'est pas correcte ou aucun tarif virtuel n'a été calculé pour l'ensemble de la période de décompte.

- Solution : Dans la configuration de l'immeuble dans le Billing, vérifier les tarifs virtuels. Si un message d'erreur s'affiche dans l'encadré bleu, il doit être corrigé. Si le recalcul a été effectué à partir d'une date ultérieure (p. ex. le décompte est créé pour 2025 ; le recalcul a été effectué à partir de 2026), aucun tarif n'a été calculé pour la période. Il faut recalculer en incluant la période de décompte.


Un compteur a été hors ligne pendant plus de 2 mois

- Cause : En cas de lacune, les tarifs virtuels ne peuvent pas être calculés.

- Solution : Vérifier que toutes les données sont disponibles ; si c'est le cas, il faut recalculer. Si les données ne sont pas disponibles, aucune facture ne peut être créée pour cette période.


La configuration a changé (structure de dossiers, attribution des compteurs, structure/plages tarifaires)

- Cause : Aucun recalcul n'a été effectué

- Solution : Il faut recalculer.


Un compteur est facturé à plus ou moins de 100%.

- Cause : Un compteur (p. ex. le compteur des parties communes) a été réparti en pourcentage, mais le total n'atteint pas 100%

- Solution : Le compteur doit être facturé à 100%. Remarque : si un compteur est réparti sur trois unités, l'une des unités doit avoir 33.34%. (3x 33.33% ne donne que 99.99%)


Les données du RCP virtuel (vRCP) ont été mises à jour

- Causes : Pour le vRCP, le fournisseur d'électricité envoie chaque mois des données corrigées.

- Solution : Il faut recalculer.


### EBC002/EBC003: Aucune valeur trouvée à la date de début ou de fin.

Ce message concerne les compteurs multi-énergies.

Causes possibles :

- Un compteur pertinent pour le décompte est hors ligne.

- La période de décompte (Du) correspond au jour d'installation et/ou la période de décompte (Au) est fixée à aujourd'hui.

- La période de décompte (Du) se situe avant le jour d'installation et/ou la période de décompte (Au) se situe dans le futur.

- Un compteur a été hors ligne pendant plus de 2 mois et la période de décompte commence ou se termine dans l'intervalle où les données ne sont plus disponibles. (Lacune)

- L'année sélectionnée est erronée.


### EBC004: Les factures sont générées vides ou ne sont pas générées du tout.

### Causes possibles :

- Aucune adresse de facturation valable n'a été saisie pour l'unité de décompte concernée (tenir compte de la période) →  sinon, notre système part du principe qu'aucun locataire n'habite le logement et ne génère donc pas de facture. 

- Aucun compteur à décompter n'a été attribué à l'unité de décompte. 

- La structure de dossiers est erronée (voir [2\. Créer la structure de dossiers et attribuer les compteurs](/konfiguration/billing))

- Pour les tarifs virtuels : les tarifs ne sont pas valables pendant la période de facturation souhaitée (adapter au besoin la période des tarifs).

- Aucune adresse de facturation n'est saisie pour la période. 


### EBC005: The added or subtracted value results in an un-representable DateTime. Parameter name: value Index was outside the bounds of the array.

Votre identifiant bexio n'est plus valable. Vous devez vous reconnecter.

### QR bill data is invalid: currency should be "CHF" or "EUR" (currency\_not\_chf\_or\_eur)

La devise n'est pas réglée sur CHF ou EUR. 

Connexion--> Création de factures (Rechnungserstellung) --> Paramètres (Einstellungen) --> Modifier la devise et la régler sur « CHF » --> Enregistrer (Speichern).



### QR bill data is invalid: amount should be between 0.01 and 999 999 999.99 (amount\_outside\_valid\_range)

Le montant à facturer est négatif. Cela peut se produire avec une autre position (Sonstige Positionen), p. ex. des remboursements.

Cela ne peut pas être contourné. La facture est tout de même créée (sans code QR).



## Messages d'erreur spécifiques aux tarifs de consommation de pointe

### EPK001: Le compteur d'électricité du réseau n'a pas été configuré

### Causes possibles :

- Dans le smart-me Billing, le compteur de bilan n'a pas été associé au tarif de pointe.




Résoudre le problème : 

- smart-me Billing --> Configuration (Konfiguration) --> Tarifs de consommation de pointe (Spitzenverbrauch Tarife) --> Modifier (Editieren) --> Ajouter le compteur de bilan (Bilanzzähler hinzufügen) --> Enregistrer (Speichern).


### EPK002: Les entrées de coûts de pointe de charge font défaut pour la période de décompte

Dans le smart-me Billing, les coûts du tarif de pointe n'ont pas été saisis.

Solution : smart-me Billing --> Configuration (Konfiguration) --> Tarifs de consommation de pointe (Spitzenverbrauch Tarife) --> Ajouter des coûts (Kosten hinzufügen) --> Ajouter le prix / kW (Preis / kW hinzufügen) --> Enregistrer (Speichern).

### EPK003: La consommation du réseau pendant la période de décompte n'a pas pu être déterminée.

Le compteur de bilan n'a fourni aucune donnée.

- Cause : Sans compteur de bilan, les pointes ne peuvent pas être calculées lorsque le type est réglé sur « Mesure de la consommation » (Verbrauchsmessung)

- Solution : Vérifier que les valeurs sont disponibles.


Le compteur de bilan n'a pas fourni de données pour un mois entier.

- Cause : Des valeurs sont nécessaires pour le mois entier afin de pouvoir facturer les pointes.

- Solution : Configurer le tarif de pointe seulement à partir du mois suivant. Pour le mois présentant une lacune, une consommation de pointe avec « Coûts attribués » (Zugewiesene Kosten) peut être créée. 


### EPK004: Au moins une unité de décompte doit présenter une consommation pendant la période de décompte.

Seul le tarif solaire est facturé

- Cause : La consommation de pointe n'est appliquée qu'au tarif réseau. 

- Solution : Vérifier que le tarif solaire a été correctement configuré.


Aucune consommation n'a été mesurée

- Cause : Les compteurs n'ont mesuré aucune consommation pendant la période

- Solution 1 : Vérifier quand les compteurs ont été mis en service et si des données sont disponibles sur toute la période.


## Messages d'erreur spécifiques à VEWA

### Sur la facture, les valeurs ne s'affichent pas du tout ou avec 0kWh, bien qu'une consommation ait eu lieu.

Un tarif (de substitution) doit être défini pour chacun des types d'énergie : chaleur, eau chaude sanitaire, etc.

Connexion --> Créer une facture (Rechnung erstellen) --> Paramètres (Einstellungen) (en haut au centre) --> Modifier l'immeuble (Liegenschaft editieren) --> Définir les tarifs pour chaleur / eau chaude sanitaire / etc. à 0 CHF. --> Enregistrer (Speichern).

### Les fichiers Word & Excel sont créés vides (0 Byte)

Ces fichiers ne sont utilisables qu'en dehors de VEWA. Lorsque VEWA est activé, les boutons correspondants restent visibles, mais ne produisent que des fichiers vides.

### Aucune valeur pour les compteurs. Des valeurs de remplacement sont utilisées.

Cette erreur peut survenir et n'est pas critique dans tous les cas. Il faut toutefois veiller à l'écart entre la valeur de remplacement et la valeur demandée.

Le message d'erreur apparaît au plus tard après un écart de 48h.

Remarque : vérifiez éventuellement l'intervalle de lecture de la passerelle M-Bus, afin qu'elle soit lue plus souvent que tous les 2 jours, pour exclure que l'erreur se produise de manière systématique.



### EVW001: Bail manquant ou vacance !

Veuillez saisir le bail manquant ou la vacance.

Sans cette saisie, les coûts sont entièrement imputés aux contrats saisis et l'énergie totale de référence n'est calculée qu'à partir de ces contrats. (Moins d'énergie que celle réellement consommée)



### EVW002: Double occupation de l'unité de décompte !

Vérifiez les vacances et les baux pour détecter les doubles occupations.

Sans cette correction, les coûts sont entièrement imputés aux contrats saisis et l'énergie totale de référence est calculée à partir de trop de contrats. (Plus d'énergie que celle réellement consommée)

## L'adresse ne peut pas être gérée

### ID Address Email Description Valid from Valid to Valid to (ISO) Valid from (ISO)Third party key

Causes possibles :

- Le smart-me Billing a été créé avec 3 niveaux.

- Un dossier a été déplacé ultérieurement et contient encore d'anciennes configurations enregistrées.


Solution : voir EVT005

## Sujets expliqués en détail :

### Pourquoi le tarif virtuel génère-t-il une différence lorsque le compteur n'a pas fourni de données au moment du début (Du) ou de la fin (Au) du décompte ?

Raisons possibles :

- La mise en service n'était pas terminée

- Le compteur était hors ligne et n'a pas transmis ultérieurement les données de courbe de charge

- Le compteur était défectueux


Base de données pour la détection de l'erreur :

Lors de la création d'une facture, le smart-me Billing effectue un contrôle. La somme des tarifs virtuels (p. ex. heures pleines, heures creuses, tarif solaire) est comparée à la consommation d'électricité. En cas de différence, un message d'erreur s'affiche. 

![Dépannage du Billing – illustration 6](/img/stoerungsbehebung-billing-fehlermeldungen/06.png)

Affichage des relevés du compteur

Lors de la création d'une facture, le smart-me Billing n'affiche pas d'indication temporelle pour la détermination des relevés du compteur. Pour vérifier si le compteur a fourni des données au moment souhaité, il faut créer un rapport.

Pour le rapport, vous pouvez sélectionner l'immeuble et générer un rapport de consommation détaillé PDF. Les données de toutes les unités de décompte (logements) sont alors exportées en une seule fois. 

Sélectionner l'immeuble --> En haut à droite, sélectionner Rapport (Report) --> Type de rapport (Reporttyp) --> Rapport de consommation détaillé (PDF) (Verbrauchsreport detailliert (PDF))

Vous pouvez maintenant vérifier si la période du rapport s'écarte de la période de la grandeur de référence, la somme d'un ou de plusieurs compteurs. Si c'est le cas, aucune donnée de courbe de charge n'est disponible pour la période choisie.

![Dépannage du Billing – illustration 7](/img/stoerungsbehebung-billing-fehlermeldungen/07.png)

Affichage des tarifs virtuels

Lors de la création d'une facture, le smart-me Billing affiche la détermination des tarifs virtuels dans les tarifs.

![Dépannage du Billing – illustration 8](/img/stoerungsbehebung-billing-fehlermeldungen/08.png)

Traitement différent entre relevés du compteur et tarifs virtuels :

Relevés du compteur : pour la consommation d'électricité, le smart-me Billing utilise les relevés physiques générés sur le compteur. Si aucun relevé n'est disponible au moment du début ou de la fin du décompte, le smart-me Billing utilise le relevé le plus proche de la date souhaitée.

Tarifs virtuels : le smart-me Billing calcule les tarifs virtuels sur la base des données de courbe de charge (relevés physiques du compteur). Si aucune donnée de courbe de charge n'est disponible, p. ex. pendant 1 semaine, celles-ci sont interpolées. Autrement dit, notre système prend les relevés du compteur et part du principe que la consommation est constante toutes les 15 minutes (données de courbe de charge). Les consommations virtuelles sont ensuite calculées à partir de là.

Exemple de calcul simplifié avec des données correctes :

Le logement 1 a envoyé un relevé du compteur (données de courbe de charge) le 01.10.2023 00:00 et le 31.10.2023 00:00

- Relevé du compteur le 1.10.2023 00:00 : 5200 kWh

- Relevé du compteur le 31.10.2023 00:00 : 5250 kWh

- Le relevé du compteur est déterminé. 5250-5200 = 50 kWh


La consommation virtuelle est calculée. La répartition entre heures pleines, heures creuses et tarif solaire est de 50 kWh 

Exemple de calcul simplifié avec des données manquantes :

Le logement 1 a envoyé un relevé du compteur (données de courbe de charge) à partir du 01.10.2023 00:00, et ce jusqu'au 25.10.2023 00:00 inclus. Du 25.10.2023 00:00 au 15.11.2023 00:00, aucune donnée de courbe de charge n'est disponible.

- Relevé du compteur le 1.10.2023 00:00 : 851 kWh

- Relevé du compteur le 25.10.2023 00:00 : 902 kWh

- Relevé du compteur le 15.11.2023 00:00 : 950 kWh


Le relevé du compteur pour le 31.10.2023 00:00 n'est pas disponible. Le relevé le plus proche de cette date est celui du 25.10.2023 00:00 ; c'est donc celui-ci qui est utilisé pour l'affichage et le calcul dans le smart-me Billing.

Le relevé du compteur est déterminé. 902-851 = 51 kWh (La consommation de 51 kWh figure sur la facture sous « Votre part » (Ihr Anteil))

La consommation virtuelle est calculée. Entre le 1.10.2023 00:00 et le 25.10.2023 00:00, une consommation de 51 kWh est répartie entre heures pleines, heures creuses et tarif solaire. Comme des données manquent à partir de ce moment, les données de courbe de charge manquantes sont interpolées. L'interruption dure 21 jours. Pendant cette période, 950-902 = 48 kWh ont été consommés. Avec l'interpolation, cela donne 2,29 kWh par jour. Dans le smart-me Billing, en plus des 51 kWh, 6 jours à 2.29 kWh sont donc facturés, ce qui donne 51 + 13.71 = 64.71 kWh.

Il existe alors une différence entre le relevé du compteur de 51 kWh et le tarif virtuel de 64.71 kWh dans le smart-me Billing. C'est ce qui provoque le message d'erreur.
