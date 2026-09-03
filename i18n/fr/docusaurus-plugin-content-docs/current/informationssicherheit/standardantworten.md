---
title: 'Réponses standard'
slug: '/informationssicherheit/standardantworten'
description: 'Cette page répond aux questions générales sur la sécurité de l''information et des données chez smart-me AG et vise à permettre aux partenaires de remplir eux-mêmes les questionnaires…'
sidebar_label: 'Réponses standard'
---
Cette page répond aux questions générales sur la sécurité de l'information et des données chez smart-me AG et vise à permettre aux partenaires de remplir eux-mêmes les questionnaires de sécurité standard.

Contact : security@smart-me.com

Dernière mise à jour : 16.01.2025

## Informations générales

### Informations sur l'entreprise

- Entreprise active à l'international avec environ 50 employés.

- Développement et production d'une solution de décompte pour RCP (regroupement dans le cadre de la consommation propre) / électricité pour les locataires, mobilité électrique et multi-énergie.


### Documents complémentaires

- Conditions générales (CG)

- Contrat de sous-traitance des données (ADV) : annexe des CG

- Déclaration de protection des données


[Lien vers les documents](https://web.smart-me.com/agb-smart-me-ag/)

## Protection et traitement des données

### Des données personnelles sont-elles traitées conformément à la LPD/RGPD ?

- Pour l'achat de licences par carte de crédit, les informations de carte de crédit sont traitées via Stripe.

- Pour les commandes et les offres, les informations clients sont traitées via Bexio.

- Les cas de support et leurs informations sont traités via Freshdesk.


### Comment les données sont-elles supprimées ?

- Les clients sont eux-mêmes responsables de leurs comptes smart-me et peuvent les supprimer à tout moment dans le portail web.
    Lorsqu'un client supprime son compte, ces données sont effacées de manière irréversible.

- Après 30 jours, plus aucune sauvegarde n'est disponible.

- Les données traitées via Freshdesk ou Bexio peuvent être supprimées sur demande.


### Qui a accès aux données ?

L'accès à nos serveurs est limité aux IP internes du cluster. Smart-me n'a accès aux données de compte des clients qu'avec l'autorisation explicite de ceux-ci.

## Hébergement et infrastructure

### Où l'application est-elle hébergée ?

Tous les services smart-me sont hébergés sur des serveurs de Microsoft Azure Suisse. Nous n'exploitons pas nous-mêmes de serveurs.

### Comment les données sont-elles protégées ?

Les serveurs sont protégés par les mesures de Microsoft Azure. En complément, nous utilisons Cloudflare comme Web Application Firewall (WAF) et pour la gestion de la charge.

### Comment la disponibilité des systèmes est-elle assurée ?

La disponibilité des systèmes est garantie par l'infrastructure de Microsoft Azure. 

[Informations complémentaires](https://learn.microsoft.com/de-de/azure/security/fundamentals/infrastructure)

## Sécurité des données et chiffrement

### Comment les données sont-elles chiffrées ?

Les données applicatives ne sont pas chiffrées en tant que telles, mais la base de données dans son ensemble l'est, celle-ci contenant les données applicatives. 

La communication entre les compteurs et le cloud est chiffrée avec AES-256.

### Comment les mots de passe des comptes smart-me sont-ils hachés ?

Les mots de passe sont hachés avec RIPEMD-160 et un salt dynamique.

### Prenons-nous en charge les identités fédérées ?

Non. L'exception est l'accès via notre API, qui prend en charge oAuth 2.0 en plus de Basic Auth.

### Sauvegardes

Les données des compteurs font l'objet de sauvegardes quotidiennes par Instaclustr. [Informations à ce sujet](https://www.instaclustr.com/support/documentation/cassandra/cassandra-cluster-operations/cluster-data-backups/)

Les données clients traitées via Freshdesk, Bexio ou Stripe sont soumises à la sécurité des données des fournisseurs respectifs et donc également à leurs processus de sauvegarde.

## Directives et processus de sécurité

### Disposons-nous de directives de sécurité de l'information spécifiques et documentées ?

Non

### Avons-nous des directives de développement sécurisé documentées ?

Non

### Suivons-nous un processus de développement sécurisé ?

Oui, mais les détails spécifiques sont confidentiels.

### Disposons-nous d'une certification en sécurité de l'information ?

Non, mais notre fournisseur d'infrastructure cloud Microsoft Azure est certifié ISO27001.

### Réalisons-nous des audits de sécurité informatique auprès de nos fournisseurs ?

Non

### Avons-nous un plan de continuité d'activité documenté ?

Non

### Autorisons-nous les audits informatiques ?

Oui, mais uniquement avec des informations disponibles publiquement

## Sécurité des endpoints et du réseau

### Avons-nous mis en œuvre un concept de segmentation du réseau ?

Comme notre application n'est pas hébergée localement, notre architecture réseau est indépendante de l'architecture des serveurs. La segmentation locale se présente comme suit :

- Réseau de production 

- WLAN invités

- Réseau bureautique


### Sensibilisons-nous les collaborateurs à la cybersécurité ?

Oui, des formations à la cybersécurité sont organisées :

- Fréquence : tous les six mois ainsi que pendant l'onboarding.

- Formations complémentaires : selon les événements actuels ou les menaces émergentes.


### Avons-nous été victimes d'un incident de sécurité ou d'une fuite de données au cours des 12 derniers mois ?

Non

### Disposons-nous de ressources dédiées à la cybersécurité ?

Oui, nous disposons de ressources internes en cybersécurité.

### Maintenons-nous vos logiciels et systèmes à jour ?

Oui, tous les systèmes et appareils sont régulièrement mis à jour vers les dernières versions stables.

### Avons-nous une solution de protection antivirus installée ?

Oui, tous les appareils sont équipés de :

- Endpoint Detection and Response (EDR)

- Network Detection and Response (NDR)

- Windows Defender comme protection antivirus (AV)


### Disposons-nous d'une solution SIEM ?

Non
