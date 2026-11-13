---
title: 'Message d''erreur de la gestion de la charge multiniveau'
slug: '/stoerungsbehebung/multilevel-lastmanagement-fehlermeldung'
description: 'Le groupe de gestion de la charge n''est probablement pas configuré correctement : la valeur en cas de perte de connexion au cloud n''est pas "Courant max.'
sidebar_label: 'Message d''erreur de la gestion de la charge multiniveau'
---
<div className="row">
<div className="col col--6 bild--mitte">

![Message d'erreur de la gestion de la charge multiniveau – Illustration 1](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/01.png)

![Message d'erreur de la gestion de la charge multiniveau – Illustration 2](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/02.png)

</div>
<div className="col col--6">

- Le groupe de gestion de la charge n'est probablement pas configuré correctement :

    La valeur en cas de perte de connexion au cloud sélectionnée n'est pas « Courant max. (par groupe) » ("Max. Strom (pro Gruppe)")

- La configuration en cas de panne d'Internet n'est pas disponible.

    [Effectuer une mise à jour du firmware](/konfiguration/firmware-update) vers la version 0.0.25 au minimum

</div>
</div>


![Message d'erreur de la gestion de la charge multiniveau – Illustration 3](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/03.png)

- Le groupe de gestion de la charge a été créé avec des Pico qui prennent en charge l'équilibrage des phases. Chaque Pico supplémentaire doit également prendre en charge l'équilibrage des phases. Cette fonction peut être ajoutée par une [mise à jour du firmware](/konfiguration/firmware-update) vers la version 0.0.34 ou ultérieure.


![Message d'erreur de la gestion de la charge multiniveau – Illustration 4](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/04.png)

![Message d'erreur de la gestion de la charge multiniveau – Illustration 5](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/05.png)

- Aucun texte n'a été saisi dans le champ « Nom » ("Name")


<div className="row">
<div className="col col--7 bild--mitte">

![Message d'erreur de la gestion de la charge multiniveau – Illustration 6](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/06.png)

</div>
<div className="col col--5">

- Un groupe de charge Pico ou un matériel de compteur utilisé auparavant a été supprimé côté matériel.

    Le MLM doit être reconfiguré pour rétablir la fonction.

- Supprimez toujours les groupes de charge Pico concernés d'abord de l'arborescence MLM, puis sur le matériel, afin de ne pas détruire la configuration.

</div>
</div>


## Un groupe reçoit toujours trop peu de courant

Les raisons peuvent être les suivantes :

- La capacité n'est pas suffisante pour tous les groupes --> Réduisez légèrement les courants des groupes afin d'obtenir un équilibre entre les groupes.

- La capacité n'est pas suffisante pour tous les groupes --> Réduisez temporairement les courants des groupes à l'aide du paramètre de groupe Courant minimal par heure.


## Les groupes ne reçoivent toujours que le courant en cas de panne d'Internet

![Message d'erreur de la gestion de la charge multiniveau – Illustration 7](/img/stoerungsbehebung-multilevel-lastmanagement-fehlermeldung/07.png)

- Le MLM n'est pas actif et, par mesure de sécurité, ne distribue que le courant en cas de panne d'Internet --> Activez le MLM (« Aktivieren ») et cliquez sur Enregistrer (« Speichern »).
