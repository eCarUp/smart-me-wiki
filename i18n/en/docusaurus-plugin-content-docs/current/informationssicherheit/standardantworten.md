---
title: 'Standard answers'
slug: '/informationssicherheit/standardantworten'
description: 'This page answers general questions about information and data security at smart-me AG and aims to enable partners to complete standard security questionnaires indepen…'
sidebar_label: 'Standard answers'
---
This page answers general questions about information and data security at smart-me AG and aims to enable partners to complete standard security questionnaires independently.

Contact: security@smart-me.com

Last updated: 16.01.2025

## General information

<details id="unternehmens-informationen">
<summary>Company information</summary>

- Internationally active company with approx. 50 employees.

- Development and production of a billing solution for ZEVs (associations for own consumption) / tenant electricity, e-mobility and multi-energy.

</details>

<details id="zusaetzliche-dokumente">
<summary>Additional documents</summary>

- General Terms and Conditions (GTC)

- Data Processing Agreement (DPA): annex to the GTC

- Privacy policy


[Link to the documents](https://web.smart-me.com/agb-smart-me-ag/)

</details>

## Data protection and processing

<details id="werden-personenbezogene-daten-gemaess-dsg-dsgvo-verarbeitet">
<summary>Is personal data processed in accordance with the FADP/GDPR (DSG/DSGVO)?</summary>

- For the purchase of licences by credit card, the credit card information is processed via Stripe.

- For orders and quotes, customer information is processed via Bexio.

- Support cases and their information are processed via Freshdesk.

</details>

<details id="wie-werden-daten-geloescht">
<summary>How is data deleted?</summary>

- Customers are responsible for their own smart-me accounts and can delete them at any time in the web portal.
    When a customer deletes their account, this data is irreversibly removed.

- After 30 days, no backup exists any longer.

- Data processed via Freshdesk or Bexio can be deleted on request.

</details>

<details id="wer-hat-zugang-zu-den-daten">
<summary>Who has access to the data?</summary>

Access to our servers is restricted to internal IPs of the cluster. Smart-me only has access to customers' account data with the customer's explicit permission.

</details>

## Hosting and infrastructure

<details id="wo-wird-die-anwendung-gehostet">
<summary>Where is the application hosted?</summary>

All smart-me services are hosted on Microsoft Azure Switzerland servers. We do not operate any servers ourselves.

</details>

<details id="wie-werden-die-daten-geschuetzt">
<summary>How is the data protected?</summary>

The servers are protected by Microsoft Azure measures. In addition, we use Cloudflare as a Web Application Firewall (WAF) and for load balancing.

</details>

<details id="wie-wird-die-verfuegbarkeit-der-systeme-sichergestellt">
<summary>How is system availability ensured?</summary>

System availability is guaranteed by the Microsoft Azure infrastructure. 

[More information](https://learn.microsoft.com/de-de/azure/security/fundamentals/infrastructure)

</details>

## Data security and encryption

<details id="wie-werden-daten-verschluesselt">
<summary>How is data encrypted?</summary>

The application data itself is not encrypted; however, the database containing the application data is encrypted as a whole. 

Communication between meters and the cloud is encrypted using AES-256.

</details>

<details id="wie-werden-passwoerter-von-smart-me-konten-gehashed">
<summary>How are passwords of smart-me accounts hashed?</summary>

Passwords are hashed with RIPEMD-160 using a dynamic salt.

</details>

<details id="unterstuetzen-wir-foederierte-identitaeten">
<summary>Do we support federated identities?</summary>

No. The exception is access via our API, which supports oAuth 2.0 in addition to Basic Auth.

</details>

<details id="backups">
<summary>Backups</summary>

The meter data is backed up daily by Instaclustr. [More information](https://www.instaclustr.com/support/documentation/cassandra/cassandra-cluster-operations/cluster-data-backups/)

Customer data processed via Freshdesk, Bexio or Stripe is subject to the data security of the respective providers and therefore also to their backup processes.

</details>

## Security policies and processes

<details id="verfuegen-wir-ueber-spezifische-dokumentiere-informationssicherheitsrichtlinien">
<summary>Do we have specific documented information security policies?</summary>

No

</details>

<details id="haben-wir-dokumentiere-sichere-entwicklungsrichtlinien">
<summary>Do we have documented secure development guidelines?</summary>

No

</details>

<details id="verfolgen-wir-einen-sicheren-entwicklungsprozess">
<summary>Do we follow a secure development process?</summary>

Yes, but the specific details are confidential.

</details>

<details id="verfuegen-wir-ueber-ein-informationssicherheitszertifikat">
<summary>Do we hold an information security certification?</summary>

No, but our cloud infrastructure provider, Microsoft Azure, is ISO27001 certified.

</details>

<details id="fuehren-wir-it-sicherheitsaudits-bei-unseren-anbietern-durch">
<summary>Do we carry out IT security audits of our suppliers?</summary>

No

</details>

<details id="haben-wir-einen-dokumentierten-business-continuity-plan">
<summary>Do we have a documented business continuity plan?</summary>

No

</details>

<details id="erlauben-wir-it-audits">
<summary>Do we allow IT audits?</summary>

Yes, but only with publicly available information

</details>

## Endpoint and network security

<details id="haben-wir-ein-konzept-zur-netzwerksegmentierung-implementiert">
<summary>Have we implemented a network segmentation concept?</summary>

Since our application is not hosted locally, our network architecture is independent of the server architecture. The local segmentation is as follows:

- Production network 

- Guest Wi-Fi

- Office network

</details>

<details id="sensibilisieren-wir-mitarbeitende-fuer-cybersicherheit">
<summary>Do we raise employee awareness of cybersecurity?</summary>

Yes, cybersecurity training is carried out:

- Frequency: every six months and during onboarding.

- Additional training: depending on current events or emerging threats.

</details>

<details id="waren-wir-in-den-letzten-12-monaten-opfer-eines-sicherheitsvorfalls-oder-einer-datenpanne">
<summary>Have we been the victim of a security incident or data breach in the last 12 months?</summary>

No

</details>

<details id="verfuegen-wir-ueber-dedizierte-cybersicherheitsressourcen">
<summary>Do we have dedicated cybersecurity resources?</summary>

Yes, we have internal cybersecurity resources.

</details>

<details id="halten-wir-ihre-software-und-systeme-auf-dem-neuesten-stand">
<summary>Do we keep your software and systems up to date?</summary>

Yes, all systems and devices are regularly updated to the latest stable versions.

</details>

<details id="haben-wir-eine-av-schutzloesung-installiert">
<summary>Do we have an AV protection solution installed?</summary>

Yes, all devices are equipped with:

- Endpoint Detection and Response (EDR)

- Network Detection and Response (NDR)

- Windows Defender as antivirus protection (AV)

</details>

<details id="verfuegen-wir-ueber-eine-siem-loesung">
<summary>Do we have a SIEM solution?</summary>

No

</details>
