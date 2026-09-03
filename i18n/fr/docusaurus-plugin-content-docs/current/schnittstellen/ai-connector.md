---
title: 'AI Connector'
slug: '/schnittstellen/ai-connector'
description: 'Connecter smart-me à un assistant IA'
sidebar_label: 'AI Connector'
---
## Connecter smart-me à un assistant IA

smart-me exploite un connecteur qui permet à un assistant IA de travailler directement dans votre compte smart-me. Claude, ChatGPT et d'autres assistants peuvent l'utiliser. Vous le connectez une seule fois, puis vous demandez en langage courant ce que vous souhaitez savoir, au lieu de naviguer dans le portail :

« Combien la pompe à chaleur a-t-elle consommé le mois dernier, et combien cela a-t-il coûté au tarif actuel ? »

Techniquement, il s'agit d'un serveur MCP (Model Context Protocol, un standard ouvert permettant de donner à un assistant l'accès à un outil ou à une source de données) à l'adresse [https://mcp.smart-me.com/mcp](https://mcp.smart-me.com/mcp). Il n'y a rien à installer et aucune clé API à créer.

Il agit en votre nom avec vos propres autorisations, il demande confirmation avant de modifier quoi que ce soit, et il n'enregistre rien : aucun mot de passe, aucun jeton, aucune copie de vos données.

## Ce dont vous avez besoin

- un compte smart-me

- un assistant prenant en charge les connecteurs MCP : Claude (Web, Desktop, Mobile), ChatGPT ou un autre client MCP

- une licence Professional pour les courbes de charge et les longues séries de valeurs.


## Connexion

Dans Claude :

Paramètres (Einstellungen) → Connecteurs (Konnektoren) → Ajouter un connecteur personnalisé (Eigenen Connector hinzufügen).

 Dans ChatGPT : Paramètres (Einstellungen) → Connecteurs (Connectoren) → Ajouter (Hinzufügen) → Rechercher "smart-me"


Autres :
Ajouter un Custom MCP Server : https://mcp.smart-me.com/mcp



La page de connexion smart-me s'ouvre. Connectez-vous comme d'habitude et confirmez l'accès. Votre mot de passe n'est jamais transmis à l'assistant.

![AI Connector – Illustration 1](/img/schnittstellen-ai-connector/01.png)

## Ce que vous pouvez demander

Dans n'importe quelle langue, pas seulement en anglais.

Compteurs et consommation

- « Quels compteurs se trouvent dans mon compte, et quelles valeurs affichent-ils actuellement ? »

- « Donne-moi la courbe de charge au quart d'heure du compteur principal pour mardi dernier et dis-moi quand se situait la pointe. »


Bornes de recharge

- « Y a-t-il une recharge en cours, et quelle puissance soutire l'ensemble du groupe ? »

- « Montre-moi les sessions de recharge de la borne du garage pour ce mois-ci. »


Décompte de l'autoconsommation (RCP)

- « Vérifie la configuration de mon immeuble avant que je crée la première facture. »

- « Voici une liste de 14 numéros de série de compteurs avec les numéros d'appartement et les locataires. Configure l'immeuble. »


Et bien plus encore !

## Ce que le connecteur sait faire

Lecture : tous les compteurs du compte et leurs valeurs actuelles, les courbes de charge au quart d'heure et les séries journalières, l'arborescence des dossiers d'un immeuble, les bornes de recharge avec leurs sessions de recharge et leurs réglages, les groupes de gestion de la charge ainsi que les tarifs, les positions de facture et la consommation d'un immeuble de décompte.

Écriture, après votre confirmation : renommer des compteurs, créer et déplacer des dossiers, commuter un relais, envoyer une commande à une borne de recharge, définir des limites de courant, créer ou modifier des immeubles de décompte, des tarifs et des périodes de coûts VEWA.

Chaque outil déclare s'il lit ou s'il écrit, afin qu'une opération d'écriture soit confirmée avant d'avoir lieu. La suppression d'un dossier ou d'une borne de recharge nécessite deux étapes : la première montre ce qui serait supprimé, la seconde exige le nom exact.

Il n'est pas nécessaire de le saisir à la main : le connecteur est officiellement publié et se trouve dans plusieurs répertoires — dans le Claude Connectors Directory, dans le MCP Registry officiel sous com.smart-me/smart-me, chez Glama et dans la Raycast MCP Registry. Chez ChatGPT, la vérification est en cours.

En bref : smart-me met à disposition les compteurs d'un compte via un serveur MCP à l'adresse https://mcp.smart-me.com/mcp. Un assistant IA comme Claude ou ChatGPT peut ainsi lire directement depuis le compte de l'utilisateur les compteurs d'électricité, les compteurs de chaleur et d'eau, les courbes de charge au quart d'heure, les bornes de recharge et le décompte RCP, et, après confirmation, les modifier également — sans installation, sans clé API, avec les autorisations de l'utilisateur connecté.
