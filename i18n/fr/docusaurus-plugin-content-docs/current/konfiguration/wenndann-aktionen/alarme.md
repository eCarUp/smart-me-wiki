---
title: 'Alarmes'
slug: '/konfiguration/wenndann-aktionen/alarme'
description: 'Des alarmes peuvent être configurées pour recevoir un e-mail lorsqu''un compteur n''est plus connecté à notre cloud.'
sidebar_label: 'Alarmes'
naechste_schritte: [konfiguration/billing/index, konfiguration/billing-deutschland/index]
vorheriger_schritt: konfiguration/ordnerkonfiguration/index
---
<Menueweg>Actions si-alors</Menueweg>

Des alarmes peuvent être configurées pour recevoir un e-mail lorsqu'un compteur n'est plus connecté à notre cloud.

## Prérequis

Vous avez besoin d'un abonnement smart-me Limited ou Professional pour utiliser cette fonction.

### Configuration des alarmes

### Événement si / Aucune connexion

Nous traitons ce sujet en détail sous [Actions si/alors](/konfiguration/wenndann-aktionen).

Vous pouvez définir un événement si qui se déclenche lorsqu'un compteur n'est plus connecté au cloud. Les paramètres suivants doivent être définis :

- Si vous sélectionnez un dossier, tous les compteurs qu'il contient sont surveillés. Si vous sélectionnez plusieurs dossiers, choisissez OU (ODER).

- Si vous sélectionnez un compteur, seul ce compteur est surveillé.

Définition de la durée d'interruption : 

- En général : les 1440 minutes (1 jour) évitent une fausse alarme lors d'une brève coupure Internet des compteurs smart-me.

- Pico : pour une alarme destinée à surveiller des Picos connectés à un backend, il peut être utile de raccourcir cette durée, par ex. à 15 ou 60 minutes. Cela évite qu'une borne reste trop longtemps hors service.

![Alarmes – Figure 1](/img/konfiguration-wenndann-aktionen-alarme/01.png)

### Action alors / Alarme

<div className="row">
<div className="col col--6">

Lorsque les événements si se sont produits, un e-mail est envoyé. Les paramètres suivants doivent être définis :

- Nom de l'alarme

- Objet (Subjekt) : objet des e-mails d'alarme

- Message (Nachricht) : texte contenu dans l'e-mail d'alarme

Remarque : nous recommandons de compléter l'action alors uniquement avec l'adresse e-mail et de laisser le reste tel quel. Si vous gérez plusieurs immeubles, nous recommandons d'indiquer le nom du compte dans l'objet, afin de toujours savoir de quel compte provient l'alarme.

Si l'alarme doit être envoyée à plusieurs adresses e-mail, une action alors doit être créée pour chaque adresse.

</div>
<div className="col col--6 bild--mitte">

![Alarmes – Figure 2](/img/konfiguration-wenndann-aktionen-alarme/02.png)

</div>
</div>

<div className="row">
<div className="col col--8">

À quelle fréquence un e-mail d'alerte est-il envoyé ?

L'e-mail n'est envoyé qu'une seule fois, lorsque l'état se dégrade. Si d'autres compteurs tombent en panne avant que le premier ne soit de nouveau en ligne, aucun autre e-mail n'est envoyé. 

Une fois le problème résolu, nous recommandons de vérifier dans les actions si/alors que « Dernier déclenchement » (Zuletzt ausgelöst) indique « jamais » (nie). Si une date et une heure y figurent, certains compteurs sont encore hors ligne.

Si vous souhaitez recevoir plus d'un e-mail, vous devez configurer deux alarmes. La première par ex. avec 1440 minutes et la seconde avec 7200 minutes. Ainsi, un e-mail passé inaperçu peut par ex. être envoyé une seconde fois.

</div>
<div className="col col--4 bild--mitte">

![Alarmes – Figure 3](/img/konfiguration-wenndann-aktionen-alarme/03.png)

</div>
</div>

L'ensemble de l'infrastructure est désormais prêt pour y baser le décompte.
