---
title: 'Définir les tarifs d''électricité'
slug: '/konfiguration/billing/stromtarife-definieren'
description: 'Dans la vidéo à droite, Guy t''explique les bases de la composition générale des prix de l''électricité.'
sidebar_label: 'Définir les tarifs d''électricité'
---
![Définir les tarifs d'électricité – Illustration 1](/img/konfiguration-billing-stromtarife-definieren/01.png)

## Fixer le prix de l'électricité

Dans la vidéo à droite, Guy t'explique les bases de la composition générale des prix de l'électricité. 



Tu peux désormais aussi utiliser notre calculateur de tarif d'électricité en ligne, qui t'aide et qui se base sur ces explications.

[Calculateur de tarif d'électricité smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

<Video src="ju7m6Bs8U_M" title="Vidéo YouTube, smart-me Billing - Fixer les prix dans le RCP" />

Fixer les prix du RCP dans smart-me Billing, expliqué par Guy.

Attention : la vidéo a été enregistrée avec une ancienne version du fichier Excel. Celle-ci contient encore une erreur dans les formules. Le fichier Excel a été corrigé.

[Beispiel Preise im ZEV festlegen.xlsx](https://drive.google.com/uc?export=download&id=1cGOAL1UIo4ZmvW55drHcfdPw0v4vnJ9Z) 

## Configurer les tarifs d'électricité

Dans smart-me Billing, on peut travailler soit avec les tarifs d'électricité, soit avec les tarifs virtuels. La solution avec les tarifs d'électricité convient exclusivement à la réalisation de systèmes purement alimentés par le réseau. Dans tous les autres cas, il faut utiliser les tarifs virtuels.

### 1.Procure-toi la feuille tarifaire de ton fournisseur d'électricité

La feuille tarifaire de ton fournisseur d'électricité est disponible en ligne sur son site web plusieurs mois avant le début de la nouvelle période tarifaire.

Renseigne-toi également sur le tarif exact que tu achètes auprès du fournisseur d'électricité : 

- Vert, bleu, gris ou d'autres versions

- Tarif unique ou tarif double ou dynamique.


Lire la feuille tarifaire :

Les informations pertinentes sont parfois un peu dispersées. La feuille tarifaire elle-même se compose habituellement de 4 sections :

- Prix de l'énergie

- Prix d'utilisation du réseau

- Rémunérations pour la mesure

- Redevances publiques


Les redevances publiques en particulier ne figurent pas intégralement sur la feuille tarifaire. Les redevances communales varient selon la commune et sont consignées dans une feuille tarifaire externe. Le lien se trouve dans 99 % des cas dans la note de bas de page de la feuille tarifaire.

Procure-toi cette valeur pour ta tarification via le lien imprimé sur la feuille tarifaire.

Il s'agit habituellement aussi d'une valeur en ct. / kWh, mais elle peut également être indiquée en % de l'utilisation du réseau (composantes différentes).

![Définir les tarifs d'électricité – Illustration 2](/img/konfiguration-billing-stromtarife-definieren/02.png)

### 2\. Choisis le calcul du tarif solaire à utiliser pour ton (v)RCP

Tu peux choisir entre deux approches fondamentales :

- Méthode forfaitaire à 80 % du produit réseau standard
    Ce qui est important ici, c'est que la méthode forfaitaire couvre automatiquement tous les autres coûts. Aucun coût ne peut être facturé pour la mesure, le décompte et la gestion de la vente d'électricité du RCP.

    Aucun coût ne peut être facturé ici pour la mesure du RCP, l'administration et le décompte du RCP.
    La taxe de compteur du fournisseur d'électricité pour le compteur principal du RCP ne peut pas être facturée séparément en plus.

    - -   Variante 1 : électricité du réseau facturée 1:1, électricité solaire à 80 % des coûts de base et 80 % du prix d'achat de l'électricité du réseau
            Cette variante convient à l'optimisation du bénéfice au sein du RCP, tant que le taux d'occupation des logements est élevé.
            Cette méthode ne convient pas s'il y a de gros consommateurs industriels dans le même bâtiment et qu'un système multitarif est en place.
            Meilleure solution pour les systèmes multitarifs.

        - Variante 2 : électricité du réseau 1:1, électricité solaire à 80 % du prix de référence Elcom (à utiliser en cas de tarifs dynamiques du fournisseur d'électricité)
            Cette variante convient à tous les RCP sans gros consommateurs industriels et est la plus simple à mettre en œuvre.
            Meilleure option en cas de vacance fréquente des logements.
            Si cette variante est utilisée en lien avec de l'industrie et un multitarif (tarif double), il se peut que le client industriel paie finalement davantage à cause du tarif solaire plus élevé qu'en dehors du RCP !

- Coûts effectifs (calcul des coûts de revient)
    Avec cette méthode, des coûts pour la mesure, le décompte et la gestion peuvent être facturés, en plus de la valeur calculée de l'électricité solaire. Tu trouveras les détails à ce sujet dans le manuel VEWA. 

    - -   Cette méthode convient lorsque 80 % de l'électricité du réseau ne couvriraient éventuellement pas les coûts de ton installation solaire. C'est très rarement le cas.

        - Cette méthode doit être justifiée année après année par le calcul et augmente la charge administrative.


### 3\. Calcule tes tarifs pour la période tarifaire

Le plus simple est d'utiliser notre calculateur de tarifs pour le calcul. Selon la méthode choisie, il t'indique les saisies que tu dois effectuer dans smart-me.

Pour le tarif dynamique : choisis la méthode 80 % Elcom et cherche dans le calculateur le tarif H4 de ta région et de ton fournisseur d'électricité comme référence.

[Calculateur de tarif d'électricité smart-me](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

### 4\. Configure tes tarifs

Retourne maintenant dans la configuration de l'immeuble.

1.  Facturation (Rechnungsstellung)

2.  Configuration (Konfiguration)

3.  Immeuble (Liegenschaft)

4.  Tarifs virtuels (Virtuelle Tarife)


![Définir les tarifs d'électricité – Illustration 3](/img/konfiguration-billing-stromtarife-definieren/03.png)

Crée maintenant les tarifs de réseau de ta période tarifaire

### Exemple : tarif unique

### Exemple : tarif double

Étape suivante : représenter la temporisation du tarif dans les actions Si

[Définir les plages tarifaires](/konfiguration/wenndann-aktionen/tarifzeiten-definieren)

![Définir les tarifs d'électricité – Illustration 4](/img/konfiguration-billing-stromtarife-definieren/04.png)



Exemple de tarif unique avec la méthode forfaitaire à 80 % :

Crée maintenant un tarif de réseau avec le prix indiqué : 

- Tarif de réseau 2026 : 0.19707 CHF / kWh


![Définir les tarifs d'électricité – Illustration 5](/img/konfiguration-billing-stromtarife-definieren/05.png)

![Définir les tarifs d'électricité – Illustration 6](/img/konfiguration-billing-stromtarife-definieren/06.png)

Exemple de tarif unique avec la méthode forfaitaire à 80 % :

Crée maintenant deux tarifs de réseau avec les prix indiqués :

- Tarif de réseau heures pleines 2026 : 0.22409 CHF / kWh

- Tarif de réseau heures creuses 2026 : 0.17007 CHF / kWh


Pour les tarifs doubles, la temporisation doit être créée en priorité au moyen d'actions [SI/ALORS](/konfiguration/wenndann-aktionen) ; ces actions peuvent ensuite être liées à la « condition supplémentaire » (Zusätzliche Bedingung) afin de piloter la validité au fil de la semaine.



![Définir les tarifs d'électricité – Illustration 7](/img/konfiguration-billing-stromtarife-definieren/07.png)

![Définir les tarifs d'électricité – Illustration 8](/img/konfiguration-billing-stromtarife-definieren/08.png)

Crée maintenant le tarif solaire correspondant

Remarque :
Il existe différents tarifs solaires et tarifs de batterie avec des capacités et des conditions préalables différentes.

De manière générale, le tarif solaire vRCP est le meilleur choix et le plus universel.

Ce qu'il ne peut pas faire, c'est définir des tarifs différents pour la batterie et l'énergie solaire. Pour cela, il faut utiliser le tarif alternatif.

Tu trouveras les détails ci-dessous dans la section « Tous les détails ».

Dans cet exemple, le tarif solaire vRCP est utilisé.

Mesures :

Tous les tarifs solaires nécessitent des points de mesure pertinents qui doivent être liés.

Option la plus simple : 

- Champ « Compteur solaire » (Solarzähler) : sélectionne tous les compteurs de production (solaire et batterie).

- Champ « Compteur de bilan » (Bilanzzähler) : sélectionne les compteurs de bilan (1 maison : compteur de raccordement d'immeuble, site : compteur de site ou plusieurs compteurs de raccordement d'immeuble)


Option alternative : 

- Champ « Compteur solaire » (Solarzähler) : sélectionne tous les compteurs de production (solaire et batterie).

- Champ « Compteur de bilan » (Bilanzzähler) : sélectionne tous les compteurs de consommation et compteurs de production.


Tarif solaire unique

![Définir les tarifs d'électricité – Illustration 9](/img/konfiguration-billing-stromtarife-definieren/09.png)

Tarif solaire double

![Définir les tarifs d'électricité – Illustration 10](/img/konfiguration-billing-stromtarife-definieren/10.png)

![Définir les tarifs d'électricité – Illustration 11](/img/konfiguration-billing-stromtarife-definieren/11.png)

### Lancer le recalcul des tarifs d'électricité

Si les tarifs virtuels sont utilisés, il faut cliquer sur Recalculer (Neu berechnen) à la fin de la configuration (ainsi que lors de modifications ultérieures de la configuration), de préférence à partir du 1.1.2018. Toutes les valeurs existantes sont ainsi recalculées.

Avant de pouvoir établir une facture, il faut attendre que la dernière valeur calculée soit sur « Aujourd'hui » (Heute) et qu'aucun message d'erreur n'apparaisse.

Les messages d'erreur dus à un problème de configuration s'affichent en règle générale en l'espace d'une minute. Cela vaut donc la peine de cliquer sur « Recalculer » (Neu berechnen) et d'attendre brièvement pour voir si un message d'erreur apparaît ou non.

Conseil : en cas de modifications de prix ou de changements de locataires (adresses, date d'emménagement ou de déménagement), un recalcul n'est pas nécessaire ; dans tous les autres cas, un recalcul est toujours nécessaire.

![Définir les tarifs d'électricité – Illustration 12](/img/konfiguration-billing-stromtarife-definieren/12.png)

### Saisie du tarif de puissance

![Définir les tarifs d'électricité – Illustration 13](/img/konfiguration-billing-stromtarife-definieren/13.png)

Les tarifs de pointe permettent de couvrir des modèles électriques étendus ou nouveaux des fournisseurs d'électricité. 

Sur la feuille tarifaire, il est reconnaissable à son unité. Indiqué habituellement par ex. comme 1.50.- / kW / mois

Dans notre exemple, nous saisissons le prix calculé.

Les coûts de puissance de pointe peuvent être saisis avec l'une des deux méthodes suivantes :

- Mesure de la consommation : automatiquement par une mesure de bilan propre

- Saisie des coûts : saisie ultérieure des coûts par mois après réception de la facture


Durée de validité :
La durée de validité d'un tarif de pointe est limitée à 1 an ; celui-ci peut être créé plusieurs fois pour plusieurs années.

Les tarifs de pointe se basent soit sur les coûts mensuels encourus (facture du fournisseur d'électricité), soit dépendent du tarif enregistré et de la mesure active du point de mesure principal.

![Définir les tarifs d'électricité – Illustration 14](/img/konfiguration-billing-stromtarife-definieren/14.png)

### Saisie de la taxe de base à 80 % (si la méthode 80 % avec taxe de base a été choisie)

Dans cet exemple, nous utilisons la méthode 80 % avec taxe de base. Ces coûts doivent donc encore être saisis sous « Divers » (Sonstiges)

![Définir les tarifs d'électricité – Illustration 15](/img/konfiguration-billing-stromtarife-definieren/15.png)

Les coûts de la taxe de base s'appliquent à toutes les unités de décompte ; elle peut donc être enregistrée globalement au niveau des tarifs pour l'année 2026.

![Définir les tarifs d'électricité – Illustration 16](/img/konfiguration-billing-stromtarife-definieren/16.png)

### Étape suivante

## Tous les détails sur les tarifs et les fonctions

## Configuration des tarifs virtuels (tarifs de réseau, solaires, de batterie)

Les tarifs virtuels permettent de définir soi-même un modèle tarifaire dynamique pour la facturation de l'énergie. Cela peut par ex. servir, dans le cadre d'un regroupement dans le cadre de la consommation propre (RCP ou électricité pour les locataires), à distinguer si un locataire soutire de l'électricité d'une installation solaire ou du réseau. 

Note bien que tous les tarifs normaux pour l'électricité doivent être supprimés.

Sous Tarifs virtuels (Virtuelle Tarife), tu vois tous les tarifs virtuels déjà saisis. Clique sur Ajouter (Hinzufügen) et saisis maintenant tous les tarifs virtuels.

Nom : le nom du tarif est également affiché à l'utilisateur (locataire).

Type de tarif 

- Tarif solaire vRCP (nouveau) :
    Il permet de créer un tarif solaire global dans un RCP ou un vRCP.
    L'énergie solaire est ainsi répartie uniformément entre tous les consommateurs et se base sur la somme des bilans des maisons (RCP) et la somme des productions (compteurs solaires et/ou compteurs de batterie). Avec ce tarif, il n'est pas nécessaire de mesurer 100 % des charges lorsqu'un compteur de raccordement d'immeuble est physiquement présent. Ce tarif rend superflus les compteurs virtuels de totalisation.

- Tarif solaire (legacy) :
    Il permet de facturer l'énergie d'une installation solaire au sein d'un RCP.
    Il permet de mettre en œuvre des RCP avec ou sans compteur de bilan (GRD). Le tarif nécessite un compteur virtuel de totalisation de toutes les charges pertinentes (mesure à 100 %).

- Tarif de batterie (legacy) :
    Il permet de répartir l'énergie d'une batterie couplée en AC au sein d'un RCP. Ce tarif est uniquement compatible avec le tarif solaire (legacy). Le tarif nécessite un compteur virtuel de totalisation de toutes les charges pertinentes (mesure à 100 %).

- Tarif de réseau (tarif normal ou tarif dynamique) :
    Il sert à facturer l'électricité du réseau. Celui-ci peut au besoin aussi être réparti en heures pleines et heures creuses ou de manière dynamique.

- Condition supplémentaire
    Vous pouvez définir avec une condition supplémentaire quand ce tarif est valable. Cela peut être une période (par ex. pour les heures pleines/creuses) ou toute autre condition. La condition doit avoir été définie auparavant comme [action si/alors](/konfiguration/wenndann-aktionen).


Généralités sur les tarifs

Pour chaque tarif, un prix / unité de consommation et une validité peuvent être enregistrés.

Prix / kWh : le prix pour ce tarif

Valable à partir du : la date à partir de laquelle ce tarif doit être valable. Voir remarque.

Valable jusqu'au : la date jusqu'à laquelle ce tarif doit être valable. Voir remarque.

Remarques : 

- Nous recommandons de fixer la validité du 1.1.2000 au 31.12.2099. La condition pour cette manière de faire est que les factures soient envoyées à la même périodicité que celle du fournisseur d'électricité local. Dans ce cas, le prix peut être fixé avant l'établissement de la facture. Si seul le prix est modifié dans smart-me Billing, il n'est pas nécessaire d'actionner le bouton « Recalculer » (Neu berechnen). Pour toutes les autres adaptations, le recalcul est toutefois nécessaire.

- Lorsque vous avez défini tous les tarifs, vous devez cliquer sur « Recalculer » (Neu berechnen). Tous les tarifs virtuels sont ainsi calculés et activés. Cette opération peut prendre plusieurs heures.

- Si une ou plusieurs conditions sont enregistrées, tous les tarifs doivent couvrir les 24 heures de la journée. Si un tarif normal sans conditions est enregistré, il capte automatiquement toutes les quantités d'énergie non attribuables et couvre ainsi les 24 heures. Sinon, il faut veiller à ce que les horaires des conditions soient correctement configurés (voir l'exemple ci-dessus).


![Définir les tarifs d'électricité – Illustration 17](/img/konfiguration-billing-stromtarife-definieren/17.png)

<Video src="7iLDy1YZDyY" title="Vidéo YouTube, Tarifs virtuels" />

### Tarif de réseau

Le tarif de réseau peut être saisi sous la forme des tarifs suivants :

- Tarif unique (statique ou dynamique)

- Tarif double

- Multitarif




Tarif unique (statique et dynamique)

Le tarif unique peut être créé soit de manière statique (tarif fixe), soit de manière dynamique.

Tarif fixe

Le tarif fixe applique le prix / kWh défini pour l'électricité du réseau.



Tarif dynamique

Le tarif dynamique, en revanche, utilise une API externe et interroge le fournisseur disponible chaque heure pour connaître le prix actuellement en vigueur.

Le prix est ensuite appliqué à l'heure.

Note bien que les prix dynamiques ne transmettent pas tous les coûts pertinents et que des saisies supplémentaires doivent être effectuées.

- Taxes supplémentaires comme les redevances de concession de la commune
    (à saisir comme prix fixe supplémentaire)

- Taxes de raccordement mensuelles (section Divers)


Le calcul des factures avec tarif dynamique dure nettement plus longtemps qu'avec les autres méthodes (transfert de données et application)



Tarif double et multitarifs

Un tarif (tarif de réseau) est créé pour chaque tarif différent. Ceux-ci sont ensuite couplés à une temporisation à l'aide des conditions.

La temporisation est définie via les actions [SI/ALORS](/konfiguration/wenndann-aktionen).



![Définir les tarifs d'électricité – Illustration 18](/img/konfiguration-billing-stromtarife-definieren/18.png)

### Configurer le tarif solaire vRCP

Le tarif solaire vRCP permet la mise en œuvre de solutions RCP et vRCP. 

La configuration du tarif solaire vRCP calcule l'excédent effectif d'un RCP virtuel et le soutirage effectif du réseau sur la base de plusieurs compteurs de production solaire et compteurs de raccordement d'immeuble. 

Le calcul tient compte des excédents individuels d'une maison et simultanément de la demande d'autres maisons pour cet excédent.

S'il existe un besoin, celui-ci est mis à disposition de la maison voisine. S'il n'y en a pas, l'excédent est identifié comme injection dans le réseau.



La solution prend en charge les mises en œuvre suivantes :

- Réalisation d'un RCP normal avec ou sans compteur de bilan

- vRCP : plusieurs RCP smart-me avec compteurs de raccordement d'immeuble

- vRCP : combinaison de RCP smart-me avec des bâtiments ne comportant que des consommateurs

- vRCP : combinaison de RCP smart-me avec des maisons individuelles équipées d'installations solaires 

- vRCP : plusieurs RCP smart-me en combinaison avec d'anciens modèles pratiques de GRD


Remarque :
La batterie ne peut pas être tarifée séparément avec ce système tarifaire.

![Définir les tarifs d'électricité – Illustration 19](/img/konfiguration-billing-stromtarife-definieren/19.png)

Tarifer un RCP

- Compteur de raccordement d'immeuble 

- Mesure de production (PV + batterie)


![Définir les tarifs d'électricité – Illustration 20](/img/konfiguration-billing-stromtarife-definieren/20.png)

Tarifer un RCP sans compteur de bilan

- Mesure de production (comme production et bilan)

- Tous les consommateurs (100 %) 


![Définir les tarifs d'électricité – Illustration 21](/img/konfiguration-billing-stromtarife-definieren/21.png)

Légende 

Le point coloré indique de quelle manière le compteur concerné doit être enregistré dans le tarif

![Définir les tarifs d'électricité – Illustration 22](/img/konfiguration-billing-stromtarife-definieren/22.png)

Tarifer un vRCP étendu avec différentes combinaisons de schémas de mesure

![Définir les tarifs d'électricité – Illustration 23](/img/konfiguration-billing-stromtarife-definieren/23.png)

Tarifer des maisons individuelles mitoyennes en vRCP

![Définir les tarifs d'électricité – Illustration 24](/img/konfiguration-billing-stromtarife-definieren/24.png)

### Configurer le tarif solaire et le tarif de batterie

Les tarifs solaires et les tarifs de batterie de la série legacy permettent la mise en œuvre d'un RCP avec ou sans compteur de bilan.

L'utilisation de ce groupe de tarification permet ce qui suit :

- RCP avec ou sans compteur de bilan

- Tarification différente pour la batterie et l'électricité solaire


Condition préalable à l'utilisation :

- Application d'un schéma de mesure à 100 %, tous les consommateurs mesurés doivent correspondre à 100 % de la charge.

- Nécessite un compteur virtuel de totalisation de toutes les charges.


Compteur solaire ou de batterie
Pour le tarif solaire et le tarif de batterie, tu dois indiquer le compteur qui mesure la batterie ou l'installation solaire. 

Consommation totale
Pour le tarif solaire et le tarif de batterie, tu dois indiquer un compteur qui mesure tous les consommateurs entre lesquels cette énergie doit être répartie. Il s'agit le plus souvent d'un compteur virtuel qui totalise tous les consommateurs (attention, les compteurs virtuels nécessitent alors une licence supplémentaire).

Compteur de bilan
Pour le tarif solaire et le tarif de batterie, un compteur de bilan peut être indiqué en option. Si le compteur de bilan est indiqué, l'énergie injectée dans le réseau est prise en compte lors du calcul du tarif solaire. Cela signifie que, par tranche de 15 minutes, seule l'énergie solaire effectivement consommée dans le bâtiment est répartie (énergie disponible = production PV - injection dans le réseau).

Attention :
En cas de renonciation au compteur de bilan physique, des écarts de l'ordre de 10 à 15 % dans l'attribution des tarifs ne sont pas inhabituels.

Compteurs virtuels de totalisation

- Le compteur virtuel de totalisation (consommation totale) est nécessaire pour constituer la référence de l'attribution des tarifs. Celui-ci est formé à partir de tous les compteurs de charge et est payant (1x licence Professional)

    La somme des compteurs doit correspondre exactement à 100 % de la charge. Si vous avez des compteurs montés en série, seul le compteur le plus proche du sous-tableau / du raccordement d'immeuble est pertinent.
    Les compteurs solaires, compteurs de batterie et compteurs de raccordement d'immeuble sont à exclure.

- Si plusieurs installations solaires sont présentes dans le système et ne peuvent pas être mesurées ensemble, une licence supplémentaire est nécessaire pour la production totale.

    Plus d'informations : [Compteurs virtuels](/konfiguration/billing/virtuelle-zaehler)


![Définir les tarifs d'électricité – Illustration 25](/img/konfiguration-billing-stromtarife-definieren/17.png)

Tarifer un RCP avec des tarifs legacy (1 maison)

![Définir les tarifs d'électricité – Illustration 26](/img/konfiguration-billing-stromtarife-definieren/26.png)

![Définir les tarifs d'électricité – Illustration 27](/img/konfiguration-billing-stromtarife-definieren/27.png)

Tarifer un RCP avec des tarifs legacy (plusieurs maisons)

![Définir les tarifs d'électricité – Illustration 28](/img/konfiguration-billing-stromtarife-definieren/28.png)

![Définir les tarifs d'électricité – Illustration 29](/img/konfiguration-billing-stromtarife-definieren/29.png)

## Tarifs de pointe

Les tarifs de pointe permettent de couvrir des modèles électriques étendus ou nouveaux des fournisseurs d'électricité. 

- Tarif double pour la consommation de base + puissance de pointe
    (tarifs virtuels en combinaison avec le tarif Peak)

- Tarif unique pour la consommation de base + puissance de pointe
    (tarifs virtuels en combinaison avec le tarif Peak)

- Uniquement tarif de pointe sans tarifs de base


Durée de validité :
La durée de validité d'un tarif de pointe est limitée à 1 an ; celui-ci peut être créé plusieurs fois pour plusieurs années.

Les tarifs de pointe se basent soit sur les coûts mensuels encourus (facture du fournisseur d'électricité), soit dépendent du tarif enregistré et de la mesure active du point de mesure principal.

![Définir les tarifs d'électricité – Illustration 30](/img/konfiguration-billing-stromtarife-definieren/30.png)

Exemple d'un tarif d'électricité saisi sur une base de coûts (saisie des coûts)

Fonctionnement général :

Les coûts de tarif de pointe saisis ou les coûts calculés automatiquement sur la base de la mesure et du tarif enregistré sont répartis entre les consommateurs lors de l'établissement de la facture, selon l'intervalle de calcul choisi. 

La base est la pointe de courant occasionnée (uniquement soutirage du réseau) par chaque consommateur individuel durant la période de décompte et selon l'intervalle de calcul choisi.

![Définir les tarifs d'électricité – Illustration 31](/img/konfiguration-billing-stromtarife-definieren/31.png)

### Tarifs de pointe sans mesure principale active (saisie manuelle des coûts)

Convient à tous les systèmes qui ne disposent pas d'une mesure de référence. 

![Définir les tarifs d'électricité – Illustration 32](/img/konfiguration-billing-stromtarife-definieren/32.png)

![Définir les tarifs d'électricité – Illustration 33](/img/konfiguration-billing-stromtarife-definieren/33.png)

### Tarifs de pointe avec mesure principale active (calcul automatique des coûts)

Convient à tous les systèmes qui disposent d'une mesure de bilan directe.

![Définir les tarifs d'électricité – Illustration 34](/img/konfiguration-billing-stromtarife-definieren/34.png)

## FAQ

Structure : tarif unique sans solaire

- Dans ce cas, nous recommandons de ne pas utiliser de tarifs virtuels. Les tarifs d'électricité (tous) sont plus efficaces dans ce cas. Il est possible à tout moment de passer des tarifs d'électricité aux tarifs virtuels.


Logique : les relevés du compteur sont interrogés et utilisés pour le billing. Aucun calcul n'est nécessaire.

Structure : tarif unique avec solaire

- Tarif unique électricité solaire : définir un tarif solaire sans action Si

- Tarif unique électricité du réseau : définir un tarif normal sans action Si


Logique : l'électricité solaire disponible est d'abord répartie. S'il y en a trop peu ou pas du tout, le tarif normal est utilisé.

Structure : heures pleines et heures creuses pour l'électricité du réseau et tarif unique pour l'électricité solaire

- Tarif unique électricité solaire : définir un tarif solaire sans action Si

- Heures pleines électricité du réseau : définir un tarif normal avec action Si

    - Exemple. Lu à ve 7h00 à 22h00 ou sa 7h00 à 13h00 

- Heures creuses électricité du réseau : définir un tarif normal sans action Si


Logique : l'électricité solaire disponible est d'abord répartie. S'il y en a trop peu ou pas du tout, le tarif normal qui remplit une condition est utilisé. Pour finir, le tarif sans condition est envoyé pour le reste de l'électricité.

Structure : heures pleines et heures creuses pour l'électricité du réseau et l'électricité solaire

- Heures pleines électricité solaire : définir un tarif solaire avec action Si

    - Exemple : lu à ve 7h00 à 22h00 ou sa 7h00 à 13h00 

- Heures creuses électricité solaire : définir un tarif solaire avec action Si

    - Exemple : lu à ve 22h00 à 7h00 ou sa 13h00 à 7h00 ou di 0h00 à 0h00

- Heures pleines électricité du réseau : définir un tarif normal avec action Si

    - Utiliser la même action Si que pour les heures pleines de l'électricité solaire 

- Heures creuses électricité du réseau : définir un tarif normal avec action Si

    - Utiliser la même action Si que pour les heures creuses de l'électricité solaire 


Logique : l'électricité solaire disponible avec la condition valable est d'abord utilisée. S'il y en a trop peu ou pas du tout, le tarif normal avec la condition valable est utilisé. Il est important que, dans ce cas d'application, les 24h/jour soient couvertes par une condition Si.

Structure : été et hiver avec heures pleines et heures creuses pour l'électricité du réseau et tarif unique pour l'électricité solaire

- Heures pleines électricité solaire : définir un tarif solaire sans action Si

- Heures pleines électricité du réseau été : définir un tarif normal avec action Si

    - Exemple : plage horaire chaque jour : lu à di 7h00 à 22h00 et plage annuelle du 1 / 04 / 00:00 au 1 / 10 / 00:00.

- Heures creuses électricité du réseau été : définir un tarif normal avec action Si

    - Exemple : plage horaire chaque jour : lu à di 22h00 à 07h00 et plage annuelle du 1 / 04 / 00:00 au 1 / 10 / 00:00.

- Heures pleines électricité du réseau hiver : définir un tarif normal avec action Si

    - Exemple : plage horaire chaque jour : lu à di 7h00 à 22h00 et plage annuelle du 1 / 10 / 00:00 au 1 / 4 / 00:00.

- Heures creuses électricité du réseau hiver : définir un tarif normal avec action Si

    - Exemple : plage horaire chaque jour : lu à di 22h00 à 07h00 et plage annuelle du 1 / 10 / 00:00 au 1 / 4 / 00:00.


Logique : l'électricité solaire disponible est d'abord utilisée. S'il y en a trop peu ou pas du tout, le tarif normal avec la condition valable est utilisé. Il est important que, dans ce cas d'application, les 24h/jour soient couvertes par une condition Si.

Structure : été et hiver avec heures pleines et heures creuses pour l'électricité du réseau et tarif unique pour l'électricité solaire, ainsi que des heures creuses à midi uniquement en hiver (par ex. EWS/EBS)

Exemple

- Heures creuses hiver électricité du réseau et solaire 

    - Exemple : hiver heures creuses 22h00 à 07h00 entre le 1.10 et le 1.4.

    - Action Si Alors avec liaison ET

        - Plage horaire chaque jour : lu à di 22h00 à 07h00 

        - Plage annuelle du 1 / 10 / 00:00 au 1 / 04 / 00:00.

- Heures pleines hiver électricité du réseau et solaire 

    - Exemple : hiver heures pleines 07h00 à 22h00 entre le 1.10 et le 1.4.

    - Action Si Alors avec liaison ET

        - Plage horaire chaque jour : lu à di 7h00 à 22h00 

        - Plage annuelle du 1 / 10 / 00:00 au 1 / 04 / 00:00.

- Heures creuses été électricité du réseau et solaire

    - Exemple : été heures creuses 00h00 à 06h00 et 12h00 à 15h00 entre le 1.4 et le 1.10

    - Action Si Alors avec liaison ET

        - Plage horaire chaque jour : lu à di 12h00 à 06h00 

        - Plage horaire chaque jour : lu à di 00h00 à 15h00 

        - Plage annuelle du 1 / 4 / 00:00 au 1 / 10 / 00:00.

- Heures pleines été électricité du réseau et solaire 

    - Exemple : été heures pleines 06h00 à 12h00 et 15h00 à 00h00 entre le 1.4 et le 1.10

    - Action Si Alors avec liaison ET

        - Plage horaire chaque jour : lu à di 06h00 à 00h00 

        - Plage horaire chaque jour : lu à di 15h00 à 12h00 

        - Plage annuelle du 1 / 4 / 00:00 au 1 / 10 / 00:00.


Logique : l'électricité solaire disponible est d'abord utilisée. S'il y en a trop peu ou pas du tout, le tarif normal avec la condition valable est utilisé. Il est important que, dans ce cas d'application, les 24h/jour soient couvertes par une condition Si.

Structure : été et hiver avec heures pleines et heures creuses pour l'électricité du réseau et l'électricité solaire, heures creuses en journée en été et heures pleines en hiver (par ex. Energie Uri à partir du 1.10.2025)

Description : ici, il faut travailler en deux étapes. 1x Si Alors et 1x avec les horaires dans les tarifs virtuels

Il faut d'abord définir les actions Si.

- Été heures creuses électricité du réseau et solaire

    - Exemple : été heures creuses lu à ve 06h00 à 22h00 lu à ve et sa et di toujours

    - Nom : Uri Sommer NT

    - Action Si Alors avec liaison OU

        - Plage horaire lu à ve : 6h00 à 22h00 

        - Plage horaire sa et di : 00h00 à 00h00




- Été heures pleines électricité du réseau et solaire

    - Exemple : été heures pleines lu à ve 22h00 à 06h00

    - Nom : Uri Sommer HT

    - Action Si Alors

        - Plage horaire lu à ve : 22h00 à 06h00 




- Hiver heures creuses électricité du réseau et solaire

    - Exemple : hiver heures creuses lu à ve 22h00 à 06h00 lu à ve et sa et di toujours

    - Nom : Uri Winter NT

    - Action Si Alors avec liaison OU

        - Plage horaire lu à ve : 22h00 à 06h00 

        - Plage horaire sa et di : 00h00 à 00h00




- Hiver heures pleines électricité du réseau et solaire

    - Exemple : hiver heures pleines lu à ve 06h00 à 22h00

    - Nom : Uri Winter HT

    - Action Si Alors avec liaison OU

        - Plage horaire lu à ve : 06h00 à 22h00 


Ensuite, les prix par période doivent être définis.

Les périodes ou durées doivent être enregistrées dans ce cas. Pour ce modèle tarifaire, une combinaison de Si Alors et de période est nécessaire.

- Nom : Uri Sommer HT Netz

    - Type : tarif de réseau

    - Durée : 1.4.2026 au 30.9.2026

    - Condition supplémentaire : Uri Sommer HT

- Nom : Uri Sommer HT Solar


- Type : tarif solaire y c. vRCP 

- Durée : 1.4.2026 au 30.9.2026

- Condition supplémentaire : Uri Sommer HT


- Nom : Uri Sommer NT Netz

    - Type : tarif de réseau

    - Durée : 1.4.2026 au 30.9.2026

    - Condition supplémentaire : Uri Sommer NT

- Nom : Uri Sommer NT Solar

    - Type : tarif solaire y c. vRCP (bilan/productions)

    - Durée : 1.4.2026 au 30.9.2026

    - Condition supplémentaire : Uri Sommer NT

- Nom : Uri Winter HT Netz

    - Type : tarif de réseau

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire : Uri Winter HT 

- Nom : Uri Winter HT Solar

    - Type : tarif solaire y c. vRCP (bilan/productions)

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire : Uri Winter HT

- Nom : Uri Winter NT Netz

    - Type : tarif de réseau

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire : Uri Winter NT

- Nom : Uri Winter NT Solar

    - Type : tarif solaire y c. vRCP (bilan/productions)

    - Durée : 1.10.2025 au 31.3.2026

    - Condition supplémentaire : Uri Winter NT 


<Embed src="https://drive.google.com/file/d/1qFuisQkiLisSbWTh8Avhrf7gIXOfxjjn/preview" aspect="1.350" title="Drive, Wiki Tarife Enerige Uri Tarife 2026.mp4" />

Wiki Tarife Enerige Uri Tarife 2026.mp4

## Systèmes purement tarifaires réseau (solution de signal externe)

Tarifs d'électricité (uniquement pris en charge si la fonction VEWA n'est pas utilisée)

Pour accéder aux réglages des tarifs d'électricité, clique à gauche sur l'immeuble et fais défiler jusqu'à la fenêtre verte Tarifs électricité (Tarife Elektrizität). Les deux tarifs T1 et T2 y sont affichés. Sélectionne l'un des tarifs et clique sur Éditer (Editieren) pour modifier ses propriétés (par ex. nom, prix, etc.)

Pour pouvoir travailler avec les tarifs d'électricité, le signal tarifaire du fournisseur d'électricité doit être raccordé à l'entrée tarifaire des compteurs correspondants.

![Définir les tarifs d'électricité – Illustration 35](/img/konfiguration-billing-stromtarife-definieren/35.png)
