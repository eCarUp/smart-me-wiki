---
title: 'Alarmes'
slug: '/konfiguration/wenndann-aktionen/alarme'
description: 'Des alarmes peuvent être configurées pour recevoir un e-mail lorsqu''un compteur n''est plus connecté à notre cloud.'
sidebar_label: 'Alarmes'
naechste_schritte: [konfiguration/billing/index, konfiguration/billing-deutschland/index]
vorheriger_schritt: konfiguration/ordnerkonfiguration/index
---
Des alarmes peuvent être configurées pour recevoir un e-mail lorsqu'un compteur n'est plus connecté à notre cloud.

## Prérequis

Vous avez besoin d'un abonnement smart-me Limited ou Professional pour utiliser cette fonction.

### Configuration des alarmes

### Événement Si / Aucune connexion (Wenn-Ereignis / Keine Verbindung)

Nous abordons ce sujet plus en détail sous [Actions si/alors](/konfiguration/wenndann-aktionen).

Il est possible de configurer un événement Si (Wenn-Ereignis) qui se déclenche lorsqu'un compteur n'est plus connecté au cloud. Les réglages suivants doivent être effectués :

- Si un dossier est sélectionné, tous les compteurs qui en font partie sont surveillés. Si vous sélectionnez plusieurs dossiers, veuillez choisir OU (ODER).

- Si un compteur est sélectionné, seul ce compteur est surveillé.

Définition de la durée de panne : 

- En général : les 1440 minutes (1 jour) évitent une fausse alarme en cas de brève interruption d'Internet pour les compteurs smart-me.

- Pico : pour une alarme servant à surveiller des Pico connectés à un backend, il peut être judicieux de raccourcir cette durée, p. ex. à 15 ou 60 minutes. Cela évite qu'une borne reste trop longtemps hors service.

![Alarmes – Illustration 1](/img/konfiguration-wenndann-aktionen-alarme/01.png)

### Action Alors / Alarme (Dann-Aktion / Alarm)

<div className="row">
<div className="col col--6">

Lorsque les événements Si se sont produits, un e-mail est envoyé. Les réglages suivants doivent être effectués :

- Nom de l'alarme

- Sujet (Subjekt) : objet des e-mails d'alarme

- Message (Nachricht) : texte contenu dans l'e-mail d'alarme

Remarque : nous recommandons de compléter l'action Alors uniquement avec l'adresse e-mail et de laisser le reste tel quel. Si vous gérez plusieurs immeubles, nous recommandons d'indiquer le nom du compte dans l'objet, afin de toujours savoir de quel compte provient l'alarme.

Si l'alarme doit être envoyée à plusieurs adresses e-mail, une action Alors doit être créée pour chaque adresse.

</div>
<div className="col col--6 text--center">

![Alarmes – Illustration 2](/img/konfiguration-wenndann-aktionen-alarme/02.png)

</div>
</div>

<div className="row">
<div className="col col--8">

À quelle fréquence un e-mail d'alerte est-il envoyé ?

L'e-mail n'est envoyé qu'une seule fois, lorsque l'état se dégrade. Si d'autres compteurs tombent en panne avant que le premier soit de nouveau en ligne, aucun autre e-mail n'est envoyé. 

Une fois le problème résolu, nous recommandons de vérifier dans les actions si/alors que « Dernier déclenchement » (« Zuletzt ausgelöst ») indique « jamais » (« nie »). Si une date et une heure y figurent, certains compteurs sont encore hors ligne.

Si vous souhaitez recevoir plus d'un e-mail, vous devez configurer deux alarmes. La première p. ex. avec 1440 minutes et la seconde avec 7200 minutes. Ainsi, un e-mail passé inaperçu peut p. ex. être envoyé une seconde fois.

</div>
<div className="col col--4 text--center">

![Alarmes – Illustration 3](/img/konfiguration-wenndann-aktionen-alarme/03.png)

</div>
</div>

L'ensemble de l'infrastructure est maintenant prêt pour y baser le décompte.
