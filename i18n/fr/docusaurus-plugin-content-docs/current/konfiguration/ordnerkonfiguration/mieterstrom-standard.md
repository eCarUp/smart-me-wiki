---
title: 'Électricité pour les locataires standard'
slug: '/konfiguration/ordnerkonfiguration/mieterstrom-standard'
description: 'Structure de dossiers pour l''électricité pour les locataires en Allemagne lorsque tous les consommateurs participent à l''électricité pour les locataires (schéma de mesure standard).'
sidebar_label: 'Électricité pour les locataires standard'
naechste_schritte: [konfiguration/wenndann-aktionen/alarme]
---
### Tous les consommateurs participent à l'électricité pour les locataires

Cette structure s'applique au [schéma de mesure standard](/planung/standard-messkonzept) : derrière le raccordement de l'immeuble se trouvent exclusivement des parties qui participent à l'électricité pour les locataires. Si une seule partie ne participe pas, il vous faut plutôt la configuration [Électricité pour les locataires avec non-participants](/konfiguration/ordnerkonfiguration/mieterstrom-nicht-teilnehmer).


![smart-me Billing pour l'électricité pour les locataires en Allemagne – figure 1](/img/konfiguration-billing-mieterstrom/01.png)



## Structure de dossiers

Une structure à deux niveaux est obligatoire — le décompte est configuré au niveau supérieur et nécessite en dessous un dossier par destinataire de facture.

- 1 dossier pour l'immeuble (p. ex. Hauptstrasse 7 Mieterstrom)

    - 1 sous-dossier par unité de décompte, c.-à-d. par logement ou par destinataire de facture

    - 1 sous-dossier « Général » (Allgemein) pour la cage d'escalier, l'éclairage extérieur et les départs similaires

    - 1 sous-dossier « Compteurs techniques » (Technische Zähler) pour tout ce qui sera ensuite réparti au prorata

Dénomination des unités de décompte :

- Un bâtiment : désignation du logement (p. ex. WHG 1.1, WHG 1.2, WHG 2.1)

- Plusieurs bâtiments : désignation de la maison et désignation du logement (p. ex. Hauptstrasse 7 WHG 1.1)

## Attribution des compteurs

Attribuez les compteurs aux nœuds par glisser-déposer.

**Attribuer directement à l'unité de décompte** — lorsque le destinataire de la facture paie l'intégralité du soutirage de ce compteur.

**Dans le nœud « Compteurs techniques » (Technische Zähler)** — lorsqu'un compteur alimente plusieurs unités de décompte et que sa consommation est ensuite répartie en pourcentage. Exemples : compteur des parties communes, pompe à chaleur pour plusieurs logements.

### Production et bilan

Pour le schéma de mesure standard, deux rôles s'ajoutent, qui n'existent pas sous cette forme dans la structure suisse :

- **Compteur de bilan** — le compteur du raccordement de l'immeuble. Il est référencé dans la tarification.

- **Compteur de production** — tous les compteurs de l'installation solaire et, le cas échéant, de la batterie.

Ces deux compteurs ne sont pas attribués à un logement, mais restent au niveau de l'immeuble. 

### Bornes de recharge

N'attribuez pas les bornes de recharge directement à un logement, mais créez une unité de décompte dédiée. Cela permet de gérer les changements de locataires sans modifier la structure.

Les bornes de recharge d'autres fabricants ne sont pas gérées directement dans smart-me. Créez pour celles-ci un nœud pour le départ e-mobilité et attribuez-y le compteur du départ — vous obtenez ainsi au moins la consommation totale.

### Pour terminer, créez les alarmes en cas de perte de connexion

Vous remarquez ainsi rapidement la panne d'un compteur et limitez les lacunes dans les données de mesure.
