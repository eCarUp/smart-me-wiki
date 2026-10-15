---
title: 'Message d''erreur de la gestion de la charge multiniveau'
slug: '/stoerungsbehebung/multilevel-lastmanagement-fehlermeldung'
description: 'Le groupe de gestion de la charge n''est probablement pas configuré correctement : la valeur en cas de perte de connexion au cloud n''est pas "Max.'
sidebar_label: 'Message d''erreur de la gestion de la charge multiniveau'
---
![Message d'erreur de la gestion de la charge multiniveau – Illustration 1](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/01.png)

![Message d'erreur de la gestion de la charge multiniveau – Illustration 2](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/02.png)

- Le groupe de gestion de la charge n'est probablement pas configuré correctement :
    la valeur en cas de perte de connexion au cloud sélectionnée n'est pas « Courant max. (par groupe) » (Max. Strom (pro Gruppe))

- La configuration en cas de panne Internet n'est pas disponible.
    [Effectuer une mise à jour du firmware](/konfiguration/firmware-update) vers la version 0.0.25 au minimum


![Message d'erreur de la gestion de la charge multiniveau – Illustration 3](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/03.png)

- Le groupe de gestion de la charge a été créé avec des Pico qui prennent en charge l'équilibrage des phases. Chaque Pico supplémentaire doit également prendre en charge l'équilibrage des phases. Cette fonction peut être ajoutée par une [mise à jour du firmware](/konfiguration/firmware-update) vers la version 0.0.34 ou ultérieure.


![Message d'erreur de la gestion de la charge multiniveau – Illustration 4](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/04.png)

![Message d'erreur de la gestion de la charge multiniveau – Illustration 5](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/05.png)

- Aucun texte saisi dans le champ « Nom » (Name)


![Message d'erreur de la gestion de la charge multiniveau – Illustration 6](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/06.png)

- Un groupe de charge Pico ou un matériel de compteur utilisé auparavant a été supprimé côté matériel.
    Le MLM doit être reconfiguré pour rétablir la fonction.

- Supprimez toujours les groupes de charge Pico concernés d'abord de l'arborescence MLM, puis sur le matériel, afin de ne pas détruire la configuration.


## Un courant trop faible est toujours attribué à un groupe

Les raisons peuvent être les suivantes :

- La capacité n'est pas suffisante pour tous les groupes --> Réduisez légèrement les courants des groupes afin d'obtenir un équilibre entre les groupes.

- La capacité n'est pas suffisante pour tous les groupes --> Réduisez temporairement les courants des groupes à l'aide du paramètre de groupe « courant minimal » par heure.


## Seul le courant en cas de panne Internet est mis à disposition des groupes

![Message d'erreur de la gestion de la charge multiniveau – Illustration 7](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/07.png)

- Le MLM n'est pas actif et, par sécurité, ne distribue donc que le courant en cas de panne Internet --> Activez le MLM (MLM Aktivieren) et cliquez sur « Enregistrer » (Speichern).
