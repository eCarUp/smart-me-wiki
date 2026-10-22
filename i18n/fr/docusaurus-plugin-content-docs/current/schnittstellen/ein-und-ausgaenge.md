---
title: 'Entrées et sorties des compteurs'
slug: '/schnittstellen/ein-und-ausgaenge'
description: 'Configurer les entrées et sorties'
sidebar_label: 'Entrées et sorties'
---
## Configurer les entrées et sorties

<div className="row">
<div className="col col--6">

Les compteurs smart-me disposent d'une ou de plusieurs sorties, qui peuvent être utilisées comme sortie d'impulsions ou comme contact sans potentiel.  En usine, la sortie S0\_0 est définie comme sortie d'impulsions et la sortie S1 comme sortie relais numérique portant le nom "Relais".

</div>
<div className="col col--6 text--center">

![Entrées et sorties des compteurs – figure 1](/img/schnittstellen-ein-und-ausgaenge/01.png)

</div>
</div>

### Câblage externe des entrées et sorties

Commander E1 avec un signal tarifaire ou un délestage

![Entrées et sorties des compteurs – figure 2](/img/schnittstellen-ein-und-ausgaenge/02.png)

Pour l'enclenchement et le déclenchement avec Telstar, le câblage est identique (S1 et S0)

![Entrées et sorties des compteurs – figure 3](/img/schnittstellen-ein-und-ausgaenge/03.png)

### Sortie d'impulsions

Il est possible de configurer la sortie comme sortie d'impulsions. Il est possible de choisir entre énergie réactive et énergie active.

Remarque : il n'est pas possible de faire la distinction entre soutirage et injection. C'est toujours la valeur absolue qui est délivrée.

### Configuration comme contact sans potentiel

Si la sortie est définie comme contact sans potentiel, n'importe quel appareil peut être commandé via le smart-me Cloud. La commande peut se faire manuellement (marche/arrêt) ou de manière automatisée via des [actions déclenchées par un événement](/konfiguration/wenndann-aktionen/ereignisaktionen) ou des [actions si/alors](/konfiguration/wenndann-aktionen).

1.  Connectez-vous sur le [site web smart-me](https://web.smart-me.com/login/) ou dans l'application smart-me

2.  Sélectionnez un compteur et cliquez sur "Modifier" ("Editieren").

3.  Sous le point "Sorties" ("Ausgänge"), sélectionnez la sortie souhaitée et configurez-la comme "Sortie numérique" ("Digitaler Ausgang")

    - Vous pouvez donner un nom quelconque à la sortie.

    - Vous pouvez définir une action à exécuter lorsque le compteur perd la connexion au smart-me Cloud.


REMARQUE :
La sortie S1 peut également être masquée de l'affichage en la commutant sur sortie d'impulsions, si elle n'est pas utilisée comme sortie numérique.
Dans la vue locataire, les sorties ne peuvent pas être activées ou désactivées, même si elles y sont visibles.

![Entrées et sorties des compteurs – figure 4](/img/schnittstellen-ein-und-ausgaenge/04.png)

### Vue en ligne lors de la mise en service d'un Telstar 80A ou CT

![Entrées et sorties des compteurs – figure 5](/img/schnittstellen-ein-und-ausgaenge/05.png)

### Vue en ligne après activation de S0\_0 comme sortie numérique

![Entrées et sorties des compteurs – figure 6](/img/schnittstellen-ein-und-ausgaenge/06.png)

### Câblage des sorties

Respectez les valeurs maximales de tension, de courant et de puissance des différentes sorties. De manière simplifiée, chacune des sorties sans potentiel peut être considérée comme un interrupteur non raccordé. Pour qu'elle fonctionne, un circuit doit être établi d'un potentiel élevé vers un potentiel bas.

Les sorties ne fournissent elles-mêmes aucun niveau de tension ; une source de tension doit donc être placée en amont.

Pour les circuits en courant alternatif 230V :

- 230 VAC sur le contact "+" de S1

- Câbler le contact "-" de S1 sur l'entrée "+" du circuit externe.

- Pour terminer, raccorder le "-" du circuit externe au conducteur neutre. (Il n'est pas nécessaire de raccorder une charge ohmique)


Pour les circuits en courant continu :

- de + VDC sur le contact "+" de S1

- Câbler le contact "-" de S1 sur l'entrée "+" du circuit externe.

- Pour terminer, raccorder le "-" du circuit externe à GND.


![Entrées et sorties des compteurs – figure 7](/img/schnittstellen-ein-und-ausgaenge/07.png)

\*Selon le type d'appareil

![Entrées et sorties des compteurs – figure 8](/img/schnittstellen-ein-und-ausgaenge/08.png)

## Configurer l'entrée

Les compteurs smart-me disposent d'une entrée numérique qui peut être utilisée comme entrée tarifaire ou comme entrée numérique normale. En usine, cette entrée est définie comme entrée tarifaire. Si l'entrée est configurée comme entrée numérique, elle peut servir d'événement pour commander d'autres appareils ou déclencher des alarmes.  Si l'entrée est définie comme entrée tarifaire, le comptage passe du tarif 1 au tarif 2 lorsqu'une tension est appliquée.

### Configuration comme entrée numérique

Pour configurer une entrée comme entrée numérique, procédez comme suit :

1.  Connectez-vous sur le [site web smart-me](https://web.smart-me.com/login/) ou dans l'application smart-me.

2.  Sélectionnez un compteur et cliquez sur "Modifier" ("Editieren").

3.  Sous le point "Entrées et sorties" ("Eingänge und Ausgänge"), configurez l'entrée comme "Entrée numérique" ("Digitaler Eingang")

    - Vous pouvez donner un nom quelconque à l'entrée.

    - Vous pouvez définir un texte à afficher lorsque l'entrée est sur "Marche" ("Ein") ou sur "Arrêt" ("Aus").

4.  Vous voyez maintenant l'entrée numérique et son état dans l'application smart-me et sur le portail web smart-me.


### Utiliser l'entrée numérique pour des commandes

Vous pouvez utiliser l'entrée numérique pour commuter d'autres appareils ou envoyer des alarmes. Pour cela, l'événement Si "État de commutation" ("Schaltzustand") peut être défini dans les [actions si/alors](/konfiguration/wenndann-aktionen/ereignisaktionen).

### Câbler le raccordement

Pour commuter le contact sans potentiel, une tension externe et un potentiel (p. ex. conducteur neutre) doivent être appliqués. Les valeurs de tension respectives figurent dans les données techniques de chaque produit. 

Logique :
1 (High) = tension selon la fiche technique
0 (Low) = 0 Volt

Remarque : en tension continue, il faut respecter la polarité (E1+/E1-), alors qu'elle ne joue aucun rôle en tension alternative.
