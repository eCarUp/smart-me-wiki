---
title: 'Alarmes'
slug: '/konfiguration/wenndann-aktionen/alarme'
description: 'Des alarmes peuvent être configurés afin de recevoir un e-mail lorsqu''un compteur n''est plus connecté à notre cloud.'
sidebar_label: 'Alarmes'
---
Des alarmes peuvent être configurés afin de recevoir un e-mail lorsqu'un compteur n'est plus connecté à notre cloud.

## Condition préalable

Tu as besoin d'un abonnement smart-me Limited ou Professional pour utiliser cette fonction.

### Configuration des alarmes

### Événement Si / Aucune connexion

Nous approfondissons le sujet sous [Actions si/alors](/konfiguration/wenndann-aktionen).

Il est possible de définir un événement Si qui se déclenche lorsqu'un compteur n'est plus connecté au cloud. Les réglages suivants doivent être effectués :

- Si un dossier est sélectionné, tous les compteurs qui en font partie sont surveillés. Si tu sélectionnes plusieurs dossiers, choisis un OU.

- Si un compteur est sélectionné, seul ce compteur est surveillé.


Définition du temps d'indisponibilité :

- En général : les 1440 minutes (1 jour) évitent une fausse alarme en cas de courte interruption d'Internet pour les compteurs smart-me.

- Pico : pour l'alarme servant à contrôler les Pico connectés à un backend, il peut être judicieux de raccourcir ce délai, par exemple à 15 ou 60 minutes. Cela évite qu'une station reste trop longtemps hors service.


![Alarmes – illustration 1](/img/konfiguration-wenndann-aktionen-alarme/01.png)

### Action Alors / Alarme

Lorsque les événements Si se sont produits, un e-mail est envoyé. Les réglages suivants doivent être effectués :

- Nom de l'alarme

- Subject (Subjekt) : objet des e-mails d'alarme

- Message (Nachricht) : texte contenu dans l'e-mail d'alarme


Remarque : nous recommandons de compléter l'action Alors uniquement avec l'e-mail et de laisser le reste tel quel. Si tu as plusieurs immeubles, nous recommandons d'indiquer le nom du compte dans l'objet, afin que tu saches toujours de quel compte provient l'alarme.

Si l'alarme doit être envoyée à plusieurs adresses e-mail, une action Alors doit être créée pour chaque e-mail.

![Alarmes – illustration 2](/img/konfiguration-wenndann-aktionen-alarme/02.png)

À quelle fréquence un e-mail d'alerte est-il envoyé ?

L'e-mail n'est envoyé qu'une seule fois, lorsque l'état se dégrade. Si d'autres compteurs tombent en panne avant que le premier ne soit de nouveau en ligne, aucun autre e-mail n'est envoyé.

Après la résolution du problème, nous recommandons de vérifier dans les actions si/alors que « Dernier déclenchement » (Zuletzt ausgelöst) indique bien « jamais » (nie). Si un horodatage y figure, c'est qu'il reste des compteurs hors ligne.

Si tu souhaites recevoir plus d'un e-mail, tu dois configurer deux alarmes. La première avec par exemple 1440 minutes et la seconde avec 7200 minutes. Ainsi, un e-mail passé inaperçu peut par exemple être envoyé une seconde fois.

![Alarmes – illustration 3](/img/konfiguration-wenndann-aktionen-alarme/03.png)

L'ensemble de l'infrastructure est maintenant prêt pour y construire le décompte.

### Étape suivante

[Continuer avec la configuration du décompte](/konfiguration/billing)
