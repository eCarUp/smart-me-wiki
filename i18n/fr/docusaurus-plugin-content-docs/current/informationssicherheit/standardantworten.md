---
title: 'Réponses standard'
slug: '/informationssicherheit/standardantworten'
description: 'Cette page répond aux questions générales sur la sécurité de l''information et des données chez smart-me AG et vise à permettre aux partenaires de remplir de manière autonome les questionnaires de sécurité standard…'
sidebar_label: 'Réponses standard'
---
Cette page répond aux questions générales sur la sécurité de l'information et des données chez smart-me AG et vise à permettre aux partenaires de remplir de manière autonome les questionnaires de sécurité standard.

Contact : security@smart-me.com

Dernière mise à jour : 16.01.2025

## Informations générales

<details id="unternehmens-informationen">
<summary>Informations sur l'entreprise</summary>

- Entreprise active à l'international et comptant environ 50 collaborateurs.

- Développement et production d'une solution de décompte pour les RCP (regroupements dans le cadre de la consommation propre) / l'électricité pour les locataires, l'électromobilité et le multi-énergie.

</details>

<details id="zusaetzliche-dokumente">
<summary>Documents complémentaires</summary>

- Conditions générales (CG)

- Contrat de traitement des données sur mandat (ADV) : annexe des CG

- Déclaration de protection des données


[Lien vers les documents](https://web.smart-me.com/agb-smart-me-ag/)

</details>

## Protection et traitement des données

<details id="werden-personenbezogene-daten-gemaess-dsg-dsgvo-verarbeitet">
<summary>Des données personnelles sont-elles traitées au sens de la LPD/du RGPD ?</summary>

- Pour l'achat de licences par carte de crédit, les informations de carte de crédit sont traitées via Stripe.

- Pour les commandes ou les offres, les informations client sont traitées via Bexio.

- Les demandes de support et les informations qui s'y rapportent sont traitées via Freshdesk.

</details>

<details id="wie-werden-daten-geloescht">
<summary>Comment les données sont-elles supprimées ?</summary>

- Les clients sont eux-mêmes responsables de leurs comptes smart-me et peuvent les supprimer à tout moment dans le portail web.
    Lorsqu'un client supprime son compte, ces données sont supprimées de manière irréversible.

- Après 30 jours, il n'existe plus aucune sauvegarde.

- Les données traitées via Freshdesk ou Bexio peuvent être supprimées sur demande.

</details>

<details id="wer-hat-zugang-zu-den-daten">
<summary>Qui a accès aux données ?</summary>

L'accès à nos serveurs est limité aux adresses IP internes du cluster. smart-me n'a accès aux données de compte des clients qu'avec leur autorisation explicite.

</details>

## Hébergement et infrastructure

<details id="wo-wird-die-anwendung-gehostet">
<summary>Où l'application est-elle hébergée ?</summary>

Tous les services smart-me sont hébergés sur des serveurs Microsoft Azure en Suisse. Nous n'exploitons nous-mêmes aucun serveur.

</details>

<details id="wie-werden-die-daten-geschuetzt">
<summary>Comment les données sont-elles protégées ?</summary>

Les serveurs sont protégés par les mesures de Microsoft Azure. En complément, nous utilisons Cloudflare comme Web Application Firewall (WAF) et pour la gestion de la charge.

</details>

<details id="wie-wird-die-verfuegbarkeit-der-systeme-sichergestellt">
<summary>Comment la disponibilité des systèmes est-elle assurée ?</summary>

La disponibilité des systèmes est garantie par l'infrastructure de Microsoft Azure. 

[Informations complémentaires](https://learn.microsoft.com/de-de/azure/security/fundamentals/infrastructure)

</details>

## Sécurité des données et chiffrement

<details id="wie-werden-daten-verschluesselt">
<summary>Comment les données sont-elles chiffrées ?</summary>

Les données de l'application ne sont pas chiffrées individuellement, mais la base de données qui les contient est chiffrée dans son ensemble. 

La communication entre les compteurs et le cloud est chiffrée en AES-256.

</details>

<details id="wie-werden-passwoerter-von-smart-me-konten-gehashed">
<summary>Comment les mots de passe des comptes smart-me sont-ils hachés ?</summary>

Les mots de passe sont hachés avec RIPEMD-160 et un sel dynamique.

</details>

<details id="unterstuetzen-wir-foederierte-identitaeten">
<summary>Prenons-nous en charge les identités fédérées ?</summary>

Non. L'exception est l'accès via notre API, qui prend en charge OAuth 2.0 en plus de Basic Auth.

</details>

<details id="backups">
<summary>Sauvegardes</summary>

Les données des compteurs font l'objet de sauvegardes quotidiennes par Instaclustr. [Informations à ce sujet](https://www.instaclustr.com/support/documentation/cassandra/cassandra-cluster-operations/cluster-data-backups/)

Les données client traitées via Freshdesk, Bexio ou Stripe sont soumises à la sécurité des données des fournisseurs respectifs et donc également à leurs processus de sauvegarde.

</details>

## Directives et processus de sécurité

<details id="verfuegen-wir-ueber-spezifische-dokumentiere-informationssicherheitsrichtlinien">
<summary>Disposons-nous de directives spécifiques et documentées en matière de sécurité de l'information ?</summary>

Non

</details>

<details id="haben-wir-dokumentiere-sichere-entwicklungsrichtlinien">
<summary>Disposons-nous de directives documentées de développement sécurisé ?</summary>

Non

</details>

<details id="verfolgen-wir-einen-sicheren-entwicklungsprozess">
<summary>Suivons-nous un processus de développement sécurisé ?</summary>

Oui, mais les détails spécifiques sont confidentiels.

</details>

<details id="verfuegen-wir-ueber-ein-informationssicherheitszertifikat">
<summary>Disposons-nous d'une certification en sécurité de l'information ?</summary>

Non, mais notre fournisseur d'infrastructure cloud, Microsoft Azure, est certifié ISO27001.

</details>

<details id="fuehren-wir-it-sicherheitsaudits-bei-unseren-anbietern-durch">
<summary>Réalisons-nous des audits de sécurité informatique auprès de nos fournisseurs ?</summary>

Non

</details>

<details id="haben-wir-einen-dokumentierten-business-continuity-plan">
<summary>Disposons-nous d'un plan de continuité des activités (Business Continuity Plan) documenté ?</summary>

Non

</details>

<details id="erlauben-wir-it-audits">
<summary>Autorisons-nous les audits informatiques ?</summary>

Oui, mais uniquement sur la base d'informations accessibles au public

</details>

## Sécurité des terminaux et du réseau

<details id="haben-wir-ein-konzept-zur-netzwerksegmentierung-implementiert">
<summary>Avons-nous mis en œuvre un concept de segmentation du réseau ?</summary>

Comme notre application n'est pas hébergée localement, notre architecture réseau est indépendante de l'architecture des serveurs. La segmentation locale se présente comme suit :

- Réseau de production 

- Wi-Fi invités

- Réseau de bureau

</details>

<details id="sensibilisieren-wir-mitarbeitende-fuer-cybersicherheit">
<summary>Sensibilisons-nous nos collaborateurs à la cybersécurité ?</summary>

Oui, des formations en cybersécurité sont dispensées :

- Fréquence : tous les six mois ainsi que lors de l'onboarding.

- Formations supplémentaires : en fonction de l'actualité ou des menaces émergentes.

</details>

<details id="waren-wir-in-den-letzten-12-monaten-opfer-eines-sicherheitsvorfalls-oder-einer-datenpanne">
<summary>Avons-nous été victimes d'un incident de sécurité ou d'une violation de données au cours des 12 derniers mois ?</summary>

Non

</details>

<details id="verfuegen-wir-ueber-dedizierte-cybersicherheitsressourcen">
<summary>Disposons-nous de ressources dédiées à la cybersécurité ?</summary>

Oui, nous disposons de ressources internes en cybersécurité.

</details>

<details id="halten-wir-ihre-software-und-systeme-auf-dem-neuesten-stand">
<summary>Maintenons-nous vos logiciels et systèmes à jour ?</summary>

Oui, tous les systèmes et appareils sont régulièrement mis à jour vers les dernières versions stables.

</details>

<details id="haben-wir-eine-av-schutzloesung-installiert">
<summary>Avons-nous installé une solution de protection antivirus ?</summary>

Oui, tous les appareils sont équipés de :

- Endpoint Detection and Response (EDR)

- Network Detection and Response (NDR)

- Windows Defender comme protection antivirus (AV)

</details>

<details id="verfuegen-wir-ueber-eine-siem-loesung">
<summary>Disposons-nous d'une solution SIEM ?</summary>

Non

</details>
