---
title: 'Standard Answers'
slug: '/informationssicherheit/standardantworten'
description: 'This page answers general questions about information and data security at smart-me AG and aims to enable partners to complete standard security questionnaires on their own…'
sidebar_label: 'Standard Answers'
---
This page answers general questions about information and data security at smart-me AG and aims to enable partners to complete standard security questionnaires on their own.

Contact: security@smart-me.com

Last updated: 16.01.2025

## General information

### Company information

- Internationally active company with approx. 50 employees.

- Development and production of a billing solution for ZEVs (associations for own consumption) / tenant electricity, e-mobility and multi-energy.


### Additional documents

- General Terms and Conditions (AGB)

- Data Processing Agreement (ADV): annex to the General Terms and Conditions

- Privacy policy


[Link to the documents](https://web.smart-me.com/agb-smart-me-ag/)

## Data protection and processing

### Is personal data processed in accordance with the FADP/GDPR?

- For the purchase of licenses by credit card, the credit card information is processed via Stripe.

- For orders and quotations, customer information is processed via Bexio.

- Support cases and their information are processed via Freshdesk.


### How is data deleted?

- Customers are responsible for their own smart-me accounts and can delete them at any time in the web portal.
    When a customer deletes their account, this data is removed irreversibly.

- After 30 days, no backup remains.

- Data processed via Freshdesk or Bexio can be deleted upon request.


### Who has access to the data?

Access to our servers is restricted to internal IPs of the cluster. smart-me only has access to customer account data with the customer's explicit permission.

## Hosting and infrastructure

### Where is the application hosted?

All smart-me services are hosted on servers of Microsoft Azure Switzerland. We do not operate any servers ourselves.

### How is the data protected?

The servers are protected by measures of Microsoft Azure. In addition, we use Cloudflare as a Web Application Firewall (WAF) and for load management.

### How is the availability of the systems ensured?

System availability is ensured by the infrastructure of Microsoft Azure. 

[Further information](https://learn.microsoft.com/de-de/azure/security/fundamentals/infrastructure)

## Data security and encryption

### How is data encrypted?

The application data itself is not encrypted, but the database as a whole is, which contains the application data. 

Communication between meters and the cloud is encrypted using AES-256.

### How are passwords of smart-me accounts hashed?

Passwords are hashed with RIPEMD-160 using a dynamic salt.

### Do we support federated identities?

No. The exception is access via our API, which supports oAuth 2.0 in addition to Basic Auth.

### Backups

The meter data undergoes daily backups by Instaclustr. [Information on this](https://www.instaclustr.com/support/documentation/cassandra/cassandra-cluster-operations/cluster-data-backups/)

Customer data processed via Freshdesk, Bexio or Stripe is subject to the data security of the respective vendors and therefore also to their backup processes.

## Security policies and processes

### Do we have specific documented information security policies?

No

### Do we have documented secure development guidelines?

No

### Do we follow a secure development process?

Yes, but the specific details are confidential.

### Do we have an information security certificate?

No, but our cloud infrastructure provider Microsoft Azure is ISO27001 certified.

### Do we perform IT security audits at our vendors?

No

### Do we have a documented business continuity plan?

No

### Do we allow IT audits?

Yes, but only with publicly available information

## Endpoint and network security

### Have we implemented a network segmentation concept?

Since our application is not hosted locally, our network architecture is independent of the server architecture. The local segmentation is as follows:

- Production network 

- Guest WLAN

- Office network


### Do we raise employee awareness of cyber security?

Yes, cyber security training is carried out:

- Frequency: every six months and during onboarding.

- Additional training: depending on current events or emerging threats.


### Have we been the victim of a security incident or data breach in the last 12 months?

No

### Do we have dedicated cyber security resources?

Yes, we have internal cyber security resources.

### Do we keep our software and systems up to date?

Yes, all systems and devices are regularly updated to the latest stable versions.

### Do we have an AV protection solution installed?

Yes, all devices are equipped with:

- Endpoint Detection and Response (EDR)

- Network Detection and Response (NDR)

- Windows Defender as antivirus protection (AV)


### Do we have a SIEM solution?

No
