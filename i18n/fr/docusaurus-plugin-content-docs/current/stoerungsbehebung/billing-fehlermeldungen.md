---
title: 'Dépannage du Billing'
slug: '/stoerungsbehebung/billing-fehlermeldungen'
description: 'Cette section traite méthodiquement des messages d''erreur du Billing.'
sidebar_label: 'Messages d''erreur du Billing'
---
Cette section traite méthodiquement des messages d'erreur du Billing.

## Généralités

La configuration du smart-me Billing est décrite ici : [Billing](/konfiguration/billing) 

Dans le smart-me Billing, les messages d'erreur s'affichent à deux endroits :

- Lors du calcul des tarifs virtuels (s'ils sont configurés)

- Lors de la création des factures


Calcul des tarifs virtuels

Où trouver les messages d'erreur liés au calcul des tarifs virtuels ?
Connexion au portail :
Facturation (Rechnungsstellung) --> Configuration (Konfiguration) --> Modifier l'immeuble (Liegenschaft editieren) --> Tarifs virtuels (Virtuelle Tarife) --> encadré bleu

![Dépannage du Billing – Figure 1](/img/stoerungsbehebung-billing-fehlermeldungen/01.png)

Factures créées

Où trouver les messages d'erreur et les avertissements lors de la création des factures ?
Connexion au portail :
Facturation (Rechnungsstellung)  --> Configuration (Konfiguration) --> Modifier l'immeuble (Liegenschaft editieren) --> Factures (Rechnungen) --> Factures (Rechnungen) --> champ orange avec les avertissements
(N'apparaît qu'en cas d'erreur)

![Dépannage du Billing – Figure 2](/img/stoerungsbehebung-billing-fehlermeldungen/02.png)

## Liste des messages d'erreur

## Erreurs lors du calcul des tarifs virtuels

![Dépannage du Billing – Figure 3](/img/stoerungsbehebung-billing-fehlermeldungen/03.png)

### Le calcul va bientôt commencer ... (Berechnung startet bald ...)

Ce message s'affiche lorsqu'aucun tarif virtuel n'a été calculé. Les causes possibles sont les suivantes :

Le Billing vient d'être configuré

- -   Cause : lorsque le Billing vient d'être créé, il faut cliquer manuellement une première fois sur « recalculer » (neu rechnen)

    - Solution : cliquer sur « recalculer » (neu rechnen)


Un autre message d'erreur s'affiche sous ce message

- -   Cause : en cas de problème, les tarifs ne peuvent pas être calculés.

    - Solution : traiter le message d'erreur affiché en dessous.


Vous venez de cliquer sur « recalculer » (neu rechnen)

- -   Cause : il faut un peu de temps (1-2min) avant que le calcul commence.

    - Solution : attendre 1-2min


Aucun tarif n'est défini pour l'année en cours

- -   Cause : le Billing a besoin de tarifs valides pour toute la période de décompte

    - Solution : définir des tarifs de 2000 à 2099 ou au moins de la mise en service jusqu'à la fin de l'année en cours


La période n'est pas entièrement couverte par un tarif. Par ex. aucun tarif n'existe pour l'année de mise en service du compteur, 2019.

- -   Cause : le Billing a besoin de tarifs valides pour toute la période de décompte

    - Solution : définir des tarifs de 2000 à 2099 ou au moins de la mise en service jusqu'à la fin de l'année en cours


Pour le tarif solaire ou batterie, le compteur solaire ou le compteur de consommation totale n'a pas été ajouté.

- -   Cause : pour calculer la répartition entre réseau et solaire, les tarifs solaires ont besoin de certains compteurs.

    - Solution : vérifier que tous les tarifs solaires et batterie disposent des compteurs nécessaires.


La structure des dossiers de l'immeuble est à un niveau (uniquement des unités de décompte), alors qu'elle devrait être à deux niveaux (immeuble et unités de décompte).

- -   Cause : la structure du Billing est à deux niveaux et nécessite au moins une unité de décompte.

    - Solution : vérifier la structure des dossiers


### EVT001: There must be at least one normal virtual tariff active, but for ValuePeriod &#123; ... &#125; there is none

Ce message s'affiche lorsqu'il n'existe pas au moins un tarif réseau valide sur toute la période de décompte. Entre les accolades figure un moment auquel aucun tarif réseau n'est valide (indications en UTC). 

- Solution 1 : définir des tarifs à partir de la première valeur transmise. Par ex. à partir du 5.8.2022 ou plus tôt, 1.1.2000, puis cliquer sur « recalculer » (neu rechnen).

- Solution 2 : définir des tarifs pour l'année en cours (par ex. jusqu'au 31.12.2024), puis cliquer sur « recalculer » (neu rechnen).

- Solution 3 : en cas d'heures pleines/heures creuses : vérifier que celles-ci couvrent 24h. [Actions si/alors](/konfiguration/billing/stromtarife-definieren)

- Solution 3 : cliquer sur « recalculer » (neu rechnen) et saisir comme date de début la date à partir de laquelle un tarif valide est configuré.


### EVT002: Not more than one unconditional normal virtual tariff must be active at a time, but for ValuePeriod ... there are the following ones: - ...

Ce message s'affiche lorsque plusieurs tarifs réseau sont valides en même temps. Le Billing ne peut alors pas déterminer sur quel tarif la consommation doit être imputée.

- Solution 1 : les tarifs ont des dates de début et de fin de validité qui se chevauchent.

- Solution 2 : en cas d'heures pleines/heures creuses : aucune condition n'est définie pour les deux tarifs. Au moins l'un des deux tarifs doit avoir une condition (par ex. heures pleines).

- Solution 3 : les actions si/alors ont été mal configurées. Cela se produit surtout lorsque des heures pleines et des heures creuses sont configurées à la fois pour l'électricité du réseau et pour l'électricité solaire.


### EVT003: For ValuePeriod ... the following virtual tariffs are active but erroneous: - Solar tariff ... is invalid because of: Solar Meter: Meter with id ....' does not exist

Ce message s'affiche lorsqu'un problème concerne le compteur associé à un tarif solaire.

- Solution 1 : aucun compteur n'a été associé -> associer un compteur

- Solution 2 : un ancien compteur, supprimé entre-temps, a été associé -> associer un nouveau compteur


### EVT004: The following residential commercial units are defective: - '....': the following assignments are defective: - Meter with id '....' does not exist

L'une des unités de décompte contient un compteur supprimé.

- Sélectionner l'unité de décompte indiquée dans le message d'erreur, supprimer le compteur supprimé « not found » et, le cas échéant, associer un nouveau compteur


### EVT005: There is no residential commercial unit.

Ce message d'erreur apparaît lorsqu'aucune unité de décompte n'a été trouvée.

- Cause : la structure des dossiers à deux niveaux fait défaut. À gauche, sous l'immeuble, il n'y a qu'un dossier pour l'immeuble et aucune unité de décompte subordonnée 

- Solution 1 :  vérifier la structure des dossiers. [Infos](/konfiguration/billing)

- Solution 2 : recréer l'immeuble. Pour cela, dans le Billing, sous Configuration (Konfiguration), cliquer à nouveau sur « Ajouter un immeuble » (Liegenschaft hinzufügen) et sélectionner le même nœud. Aucune donnée n'est perdue.


Aucune unité de décompte n'est listée dans les clés externes (en bas de la page).

- -   Cause : les unités de décompte ont été ajoutées après coup à l'immeuble par glisser-déposer.

    - Solution : les unités de décompte doivent être recréées. Il est important de sélectionner à chaque fois le dossier de l'immeuble, puis de choisir « Ajouter un nœud » (Knoten hinzufügen). Sous « Dossier parent » (Übergeordneter Ordner), le nom du dossier de l'immeuble doit s'afficher.


### EVT006: Failed to load meters of folder '...': - Erroneous virtual meter '....: - Meter with id '....' does not exist

Le compteur virtuel se compose de compteurs qui ont été supprimés.



![Dépannage du Billing – Figure 4](/img/stoerungsbehebung-billing-fehlermeldungen/04.png)

### EVT007: Il est possible que tous les compteurs de la configuration ne disposent pas de la certification de courbe de charge ou de série de relevés exigée par la loi pour les tarifs virtuels (Möglicherweise verfügen nicht alle Zähler in der Konfiguration über die für virtuelle Tarife gesetzlich vorgeschriebene Lastgang- oder Zählerstandgang-Zertifizierung.)

Cette remarque est purement informative et s'affiche lorsque des appareils tiers ou des compteurs non certifiés par smart-me sont utilisés. Elle n'a aucune influence sur le calcul.

Par cette remarque, nous voulons nous assurer que l'émetteur des factures est conscient que la [conformité des instruments de mesure](/planung/zertifizierungen) relève de sa propre responsabilité. Cela concerne tous les appareils tiers ainsi que le compteur monophasé smart-me

Remarque : ce message ne peut pas être désactivé.

### EVT020: Waiting for meter values of .... Last values at.... (UTC))

Ce message apparaît lorsque toutes les données de courbe de charge nécessaires ne sont pas disponibles pour poursuivre le calcul des tarifs.

- Tous les compteurs doivent être en ligne. [Compteur hors ligne](/stoerungsbehebung/zaehler-offline)

- Les compteurs démontés doivent être [désactivés ou supprimés](/konfiguration/inbetriebnahme/zaehler-loeschen).

- Pour les vRCP, les données ne sont envoyées qu'une fois par jour. Ce message reste donc affiché jusqu'au prochain envoi. Si la date est celle d'aujourd'hui, vous pouvez l'ignorer.

- Les compteurs doivent envoyer des données de courbe de charge. En cas de défaut, il se peut que seules des données en temps réel soient envoyées ; celles-ci ne conviennent pas au décompte. (Des données de courbe de charge au pas de 15min sont nécessaires.)


### EBC010: Les coûts de la composante de prix batterie ne correspondent pas aux coûts des tarifs virtuels (Die Kosten der Batteriepreiskomponente stimmen nicht mit den virtuellen Tarifkosten überein)

Ce message n'apparaît que si l'électricité pour les locataires est activée. Cela se produit lorsque la structure tarifaire a été modifiée, mais que les composantes de prix dans les Autres positions (Sonstige Positionen) n'ont pas encore été mises à jour.

### EBC011: Les coûts des composantes de prix réseau ou solaire ne correspondent pas aux coûts des tarifs virtuels (Die Kosten der Netz- oder Solar-Preiskomponenten stimmen nicht mit den virtuellen Tarifkosten überein)

Ce message n'apparaît que si l'électricité pour les locataires est activée. Cela se produit lorsque la structure tarifaire a été modifiée, mais que les composantes de prix dans les Autres positions (Sonstige Positionen) n'ont pas encore été mises à jour.

### EBC012: Les coûts des composantes de prix solaire ne correspondent pas aux coûts des tarifs virtuels (Die Kosten der Solar-Preiskomponenten stimmen nicht mit den virtuellen Tarifkosten überein.)

Ce message n'apparaît que si l'électricité pour les locataires est activée. Cela se produit lorsque la structure tarifaire a été modifiée, mais que les composantes de prix dans les Autres positions (Sonstige Positionen) n'ont pas encore été mises à jour.

## Erreurs dans les factures créées

![Dépannage du Billing – Figure 5](/img/stoerungsbehebung-billing-fehlermeldungen/05.png)

### EBC001: Les consommations des tarifs virtuels ne correspondent pas à la consommation (Verbräuche der virtuellen Tarife stimmen nicht mit dem Verbrauch überein.)

Ce message s'affiche lorsque la somme des tarifs virtuels ne correspond pas à la consommation des compteurs. Ce problème survient lorsque l'attribution des tarifs virtuels ne se fait pas correctement. 

Causes possibles :

Les tarifs n'ont pas été calculés pour toute la période de décompte

- Cause : le calcul des tarifs virtuels s'est arrêté en raison d'un message d'erreur.

- Solution : dans la configuration de l'immeuble dans le Billing, vérifier les tarifs virtuels. Si un message d'erreur s'affiche dans l'encadré bleu, il doit être corrigé. Si aucun message ne s'affiche mais que la date « Dernière valeur calculée » (Letzter berechneter Wert) se situe dans la période de décompte, le calcul est encore en cours et il faut patienter.
    Important : le calcul peut durer plusieurs heures, selon le nombre de tarifs et de compteurs.


Le jour d'installation est inclus dans la période de décompte

- Cause : notre Billing fonctionne sur des journées complètes.

- Solution : le jour d'installation ne doit pas se trouver dans la période de décompte. Vous pouvez le vérifier en créant un rapport des compteurs et en contrôlant si celui-ci indique des valeurs de mesure pour toute la période.


La période de décompte contient le jour actuel ou un jour futur.

- Cause : notre Billing fonctionne sur des journées complètes et calcule les tarifs virtuels en continu.

- Solution : pour le jour actuel, toutes les valeurs ne sont pas encore disponibles (la journée est en cours), et aucune donnée n'existe pour le futur. Aucun tarif virtuel ne peut donc être calculé.


La facture est créée vide

- Cause : la structure des dossiers n'est pas correcte ou aucun tarif virtuel n'a été calculé pour l'ensemble de la période de décompte.

- Solution : dans la configuration de l'immeuble dans le Billing, vérifier les tarifs virtuels. Si un message d'erreur s'affiche dans l'encadré bleu, il doit être corrigé. Si le recalcul a été effectué à partir d'une date ultérieure (par ex. le décompte est créé pour 2025 ; le recalcul a été effectué à partir de 2026), aucun tarif n'a été calculé pour la période. Il faut relancer le calcul en incluant la période de décompte.


Un compteur a été hors ligne pendant plus de 2 mois

- Cause : en cas de lacune, aucun tarif virtuel ne peut être calculé.

- Solution : vérifier si toutes les données sont disponibles ; si c'est le cas, il faut relancer le calcul. Si les données ne sont pas disponibles, aucune facture ne peut être créée pour cette période.


La configuration a changé (structure des dossiers, attribution des compteurs, structure/plages tarifaires)

- Cause : le calcul n'a pas été relancé

- Solution : il faut relancer le calcul.


Un compteur est facturé à plus ou moins de 100%.

- Cause : un compteur (par ex. le compteur des parties communes) a été réparti en pourcentages, mais le total n'atteint pas 100%

- Solution : le compteur doit être facturé à 100%. Remarque : si un compteur est réparti sur trois unités, l'une des unités doit avoir 33.34%. (3x 33.33% ne font que 99.99%)


Les données vRCP ont été mises à jour

- Causes : pour le vRCP, le fournisseur d'énergie envoie chaque mois des données corrigées.

- Solution : il faut relancer le calcul.


### EBC002/EBC003: Aucune valeur trouvée à la date de début ou de fin (Keine Werte zum Startdatum oder Enddatum gefunden.)

Ce message concerne les compteurs multi-énergies.

Causes possibles :

- Un compteur pertinent pour le décompte est hors ligne.

- La période de décompte (Du) correspond au jour d'installation et/ou la période de décompte (Au) est fixée à aujourd'hui.

- La période de décompte (Du) se situe avant le jour d'installation et/ou la période de décompte (Au) se situe dans le futur.

- Un compteur a été hors ligne pendant plus de 2 mois et la période de décompte commence ou se termine pendant la période pour laquelle les données ne sont plus disponibles. (Lacune)

- L'année sélectionnée est erronée.


### EBC004: Les factures sont générées vides ou ne sont pas générées du tout (Rechnungen werden leer oder gar nicht generiert.)

### Causes possibles :

- Aucune adresse de facturation valide n'a été enregistrée pour l'unité de décompte concernée (tenir compte de la période) →  sinon, notre système part du principe qu'aucun locataire n'habite dans le logement et ne crée donc pas de facture. 

- Aucun compteur à décompter n'a été attribué à l'unité de décompte. 

- La structure des dossiers est incorrecte (voir [2\. Créer la structure des dossiers et attribuer les compteurs](/konfiguration/billing))

- Pour les tarifs virtuels : les tarifs ne sont pas valides pendant la période de facturation souhaitée (adapter si nécessaire la période des tarifs).

- Aucune adresse de facturation n'est enregistrée pour la période. 


### EBC005: The added or subtracted value results in an un-representable DateTime. Parameter name: value Index was outside the bounds of the array.

Votre connexion bexio n'est plus valide. Vous devez vous reconnecter.

### QR bill data is invalid: currency should be "CHF" or "EUR" (currency\_not\_chf\_or\_eur)

La devise n'est pas réglée sur CHF ou EUR. 

Connexion--> Création des factures (Rechnungserstellung) --> Paramètres (Einstellungen) --> modifier la devise (Währung) et la régler sur « CHF » --> Enregistrer (Speichern).



### QR bill data is invalid: amount should be between 0.01 and 999 999 999.99 (amount\_outside\_valid\_range)

Le montant à facturer est négatif. Cela peut se produire avec des Autres positions (Sonstige Positionen), par ex. des remboursements.

Cela ne peut pas être contourné. La facture est tout de même créée (sans code QR).



## Messages d'erreur spécifiques aux tarifs de consommation de pointe

### EPK001: Le compteur pour l'électricité du réseau n'a pas été configuré (Zähler für Netzstrom wurde nicht konfiguriert)

### Causes possibles :

- Dans le smart-me Billing, le compteur de bilan n'a pas été associé au tarif de pointe.




Résoudre le problème : 

- smart-me Billing --> Configuration (Konfiguration) --> Tarifs de consommation de pointe (Spitzenverbrauch Tarife) --> Modifier (Editieren) --> Ajouter le compteur de bilan (Bilanzzähler hinzufügen) --> Enregistrer (Speichern).


### EPK002: Les entrées de coûts de puissance de pointe manquent pour la période de décompte (Spitzenlastkosteneinträge fehlen für den Abrechnungszeitraum)

Dans le smart-me Billing, les coûts du tarif de pointe n'ont pas été enregistrés.

Solution : smart-me Billing --> Configuration (Konfiguration) --> Tarifs de consommation de pointe (Spitzenverbrauch Tarife) --> Ajouter des coûts (Kosten hinzufügen) --> Ajouter le prix / kW (Preis / kW hinzufügen) --> Enregistrer (Speichern).

### EPK003: La consommation du réseau pendant la période de décompte n'a pas pu être déterminée (Der Netzverbrauch im Abrechnungszeitraum konnte nicht ermittelt werden.)

Le compteur de bilan n'a fourni aucune donnée.

- Cause : sans compteur de bilan, les pointes ne peuvent pas être calculées lorsque le type est réglé sur « Mesure de la consommation » (Verbrauchsmessung)

- Solution : vérifier si les valeurs sont disponibles.


Le compteur de bilan n'a pas fourni de données pour un mois complet.

- Cause : des valeurs pour le mois entier sont nécessaires pour pouvoir facturer les pointes.

- Solution : configurer le tarif de pointe seulement à partir du mois suivant. Pour le mois présentant une lacune, une consommation de pointe peut être créée avec des « Coûts attribués » (Zugewiesene Kosten). 


### EPK004: Au moins une unité de décompte doit présenter une consommation pendant la période de décompte (Mindestens eine Abrechnungseinheit muss einen Verbrauch im Abrechnungszeitraum haben.)

Seul le tarif solaire est facturé

- Cause : la consommation de pointe n'est appliquée qu'au tarif réseau. 

- Solution : vérifier que le tarif solaire a été correctement configuré.


Aucune consommation n'a été mesurée

- Cause : les compteurs n'ont mesuré aucune consommation pendant la période

- Solution 1 : vérifier quand les compteurs ont été mis en service et si des données sont disponibles sur toute la période.


## Messages d'erreur spécifiques à VEWA

### Sur la facture, les valeurs ne s'affichent pas du tout ou affichent 0kWh, alors qu'une consommation a eu lieu.

Un tarif (de substitution) doit être enregistré pour chacun des types d'énergie : chaleur, eau chaude sanitaire, etc.

Connexion --> Créer une facture (Rechnung erstellen) --> Paramètres (Einstellungen) (en haut au centre) --> Modifier l'immeuble (Liegenschaft editieren) --> enregistrer les tarifs pour la chaleur / l'eau chaude sanitaire / etc. à 0 CHF. --> Enregistrer (Speichern).

### Les fichiers Word & Excel sont créés vides (0 Byte)

Ces fichiers ne sont utilisables qu'en dehors de VEWA. Lorsque VEWA est activé, les boutons correspondants restent certes visibles, mais ne produisent que des fichiers vides.

### Aucune valeur pour le compteur. Des valeurs de remplacement sont utilisées (Keine Werte für Zähler. Es werden Ersatzwerte verwendet.)

Cette erreur peut se produire et n'est pas critique dans tous les cas. Il faut toutefois veiller à l'écart entre la valeur de remplacement et la valeur demandée.

Le message d'erreur apparaît au plus tard après 48h d'écart.

Remarque : vérifiez éventuellement l'intervalle de lecture de la passerelle M-Bus, afin qu'elle soit lue plus souvent que tous les 2 jours, pour exclure que l'erreur se produise systématiquement.



### EVW001: Bail manquant ou vacance ! (Fehlendes Mietverhältnis oder Leerstand!)

Veuillez saisir le bail manquant ou la vacance.

Sans cette saisie, les coûts sont entièrement imputés aux contrats saisis et l'énergie totale de référence n'est calculée qu'à partir de ces contrats. (Moins d'énergie que celle réellement consommée)



### EVW002: Double occupation de l'unité de décompte ! (Doppelbelegung der Abrechnungseinheit!)

Vérifiez les vacances et les baux pour détecter les doubles occupations.

Sans correction, les coûts sont entièrement imputés aux contrats saisis et l'énergie totale de référence est calculée à partir de trop de contrats. (Plus d'énergie que celle réellement consommée)

## L'adresse ne peut pas être gérée

### ID Address Email Description Valid from Valid to Valid to (ISO) Valid from (ISO)Third party key

Causes possibles :

- Le smart-me Billing a été créé avec trois niveaux.

- Un dossier a été déplacé après coup et contient encore d'anciennes configurations.


Solution : voir EVT005

## Thèmes expliqués en détail :

### Pourquoi le tarif virtuel génère-t-il une différence lorsque le compteur n'a pas fourni de données au moment du début (Du) ou de la fin (Au) du décompte ?

Raisons possibles :

- La mise en service n'était pas terminée

- Le compteur était hors ligne et n'a pas transmis ultérieurement les données de courbe de charge

- Le compteur était défectueux


Base de données pour la détection de l'erreur :

Lors de la création d'une facture, le smart-me Billing effectue un contrôle. La somme des tarifs virtuels (par ex. heures pleines, heures creuses, tarif solaire) est comparée à la consommation d'électricité. En cas de différence, un message d'erreur s'affiche. 

![Dépannage du Billing – Figure 6](/img/stoerungsbehebung-billing-fehlermeldungen/06.png)

Affichage des relevés du compteur

Lors de la création d'une facture, le smart-me Billing n'affiche pas d'horodatage pour la détermination des relevés du compteur. Pour vérifier si le compteur a fourni des données au moment souhaité, il faut créer un rapport.

Pour le rapport, vous pouvez sélectionner l'immeuble et générer un rapport de consommation détaillé en PDF. Les données de toutes les unités de décompte (logements) sont alors exportées en une seule fois. 

Sélectionner l'immeuble --> en haut à droite, sélectionner Rapport (Report) --> Type de rapport (Reporttyp) --> Rapport de consommation détaillé (PDF) (Verbrauchsreport detailliert (PDF))

Vous pouvez maintenant vérifier si la période du rapport s'écarte de la période de la grandeur de référence, c'est-à-dire de la somme d'un ou de plusieurs compteurs. Si c'est le cas, aucune donnée de courbe de charge n'est disponible pour la période sélectionnée.

![Dépannage du Billing – Figure 7](/img/stoerungsbehebung-billing-fehlermeldungen/07.png)

Affichage des tarifs virtuels

Lors de la création d'une facture, le smart-me Billing affiche la détermination des tarifs virtuels dans les tarifs.

![Dépannage du Billing – Figure 8](/img/stoerungsbehebung-billing-fehlermeldungen/08.png)

Traitement différent entre relevés du compteur et tarifs virtuels :

Relevés du compteur : pour la consommation d'électricité, le smart-me Billing utilise les relevés physiques générés par le compteur. Si aucun relevé du compteur n'est disponible au moment du début ou de la fin du décompte, le smart-me Billing utilise le relevé le plus proche de la date souhaitée.

Tarifs virtuels : le smart-me Billing calcule les tarifs virtuels sur la base des données de courbe de charge (relevés physiques du compteur). Si aucune donnée de courbe de charge n'est disponible, par ex. pendant 1 semaine, celles-ci sont interpolées. Autrement dit, notre système prend les relevés du compteur et part du principe que la consommation est constante toutes les 15 minutes (données de courbe de charge). Les consommations virtuelles sont ensuite calculées à partir de là.

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

Le relevé du compteur est déterminé. 902-851 = 51 kWh (la consommation de 51 kWh figure sur la facture sous « Votre part » (Ihr Anteil))

La consommation virtuelle est calculée. Entre le 1.10.2023 00:00 et le 25.10.2023 00:00, une consommation de 51 kWh est répartie entre heures pleines, heures creuses et tarif solaire. Comme des données manquent à partir de ce moment, les données de courbe de charge manquantes sont interpolées. L'interruption dure 21 jours. Pendant cette période, 950-902 = 48 kWh ont été consommés. Avec l'interpolation, cela donne 2,29 kWh par jour. Dans le smart-me Billing, 6 jours à 2.29 kWh sont donc facturés en plus des 51 kWh, ce qui donne 51 + 13.71 = 64.71 kWh.

Il existe alors une différence entre le relevé du compteur de 51 kWh et le tarif virtuel de 64.71 kWh dans le smart-me Billing. C'est ce qui provoque le message d'erreur.
