---
title: 'Électricité pour les locataires avec non-participants'
slug: '/konfiguration/ordnerkonfiguration/mieterstrom-nicht-teilnehmer'
description: 'Structure de dossiers pour l''électricité pour les locataires en Allemagne selon le schéma de mesure MKD3, lorsque certaines parties continuent de s''approvisionner auprès du fournisseur d''électricité.'
sidebar_label: 'Électricité pour les locataires avec non-participants'
naechste_schritte: [konfiguration/wenndann-aktionen/alarme]
---
<Menueweg>Configuration du compteur et du dossier</Menueweg>

### Certaines parties ne participent pas

Cette structure s'applique au [schéma de mesure MKD3](/planung/mkd3-messkonzept-nicht-teilnehmer) : derrière le raccordement de l'immeuble se trouvent à la fois des participants à l'électricité pour les locataires et des parties qui continuent de s'approvisionner directement auprès du fournisseur d'électricité.

La différence par rapport à la structure standard ne réside pas dans la forme de l'arborescence des dossiers, mais dans **qui y est décompté et quels compteurs forment le bilan**. La participation n'est pas une propriété du compteur, mais du contrat — la structure doit pouvoir le refléter, même si une partie change en cours d'année.

![smart-me Billing pour l'électricité pour les locataires en Allemagne – Figure 2](/img/konfiguration-billing-mieterstrom/02.png)


## Structure de dossiers

- 1 dossier pour l'immeuble (p. ex. Hauptstrasse 7 Mieterstrom)

    - 1 sous-dossier par unité de décompte **participante**

    - 1 sous-dossier « Général » (Allgemein) pour la cage d'escalier, l'éclairage extérieur et les départs similaires

    - 1 sous-dossier « Non-participants » (Nicht Teilnehmer) pour les parties en dehors de l'électricité pour les locataires

    - 1 sous-dossier « Compteurs techniques » (Technische Zähler) pour tout ce qui est réparti au prorata

Le nœud « Non-participants » n'est pas décompté. Il existe pour que les compteurs de ces parties restent visibles et puissent être déplacés lors d'un changement de contrat sans modifier la structure.

## Attribution des compteurs

Comme pour la structure standard : attribuez directement le compteur à l'unité de décompte lorsque le destinataire de la facture assume l'intégralité du soutirage — sinon, placez-le dans le nœud « Compteurs techniques ».

### Production et bilan — c'est ici que se situe la différence

Avec le MKD3, le compteur du raccordement de l'immeuble n'est **pas** référencé comme compteur de bilan. Il mesure aussi la consommation des non-participants et fausserait le bilan.

À la place :

- **Bilan (Bilanz)** — tous les appartements participants, les places de stationnement et la production

- **Production (Produktion)** — tous les compteurs de production de l'installation solaire

- **Compteur du raccordement de l'immeuble (Hausanschlusszähler)** — uniquement pour une vérification ultérieure, pas dans la tarification


### Ce que cela signifie pour le décompte

Avec le MKD3, la somme de l'électricité du réseau vendue ne correspond **pas** à la facture du fournisseur d'électricité, et la quantité injectée ne correspond pas à la valeur du compteur du raccordement de l'immeuble. C'est normal : la rétribution pour les non-participants a lieu une seule fois par période de décompte.

Ne vous attendez donc pas à ce que les chiffres concordent au kilowattheure près — la vérification se déroule différemment qu'avec le schéma de mesure standard.

### Bornes de recharge

Une unité de décompte propre par borne de recharge, ne pas l'attribuer à l'appartement. Pour un non-participant disposant de sa propre borne de recharge, celle-ci doit être placée sous le nœud « Non-participants ».

### Pour terminer, créez les alarmes en cas de perte de connexion

Vous remarquerez ainsi rapidement la défaillance d'un compteur et limiterez les lacunes dans les données de mesure.
