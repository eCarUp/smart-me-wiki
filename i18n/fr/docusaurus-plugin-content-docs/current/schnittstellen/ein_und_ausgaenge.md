---
title: 'Entrées et sorties du compteur'
slug: '/schnittstellen/ein_und_ausgaenge'
description: 'Configurer les entrées et sorties'
sidebar_label: 'Entrées et sorties'
---
## Configurer les entrées et sorties

Les compteurs smart-me disposent d'une ou de plusieurs sorties qui peuvent être utilisées comme sortie d'impulsions ou comme contact sec. Par défaut, la sortie S0\_0 est définie comme sortie d'impulsions et la sortie S1 comme sortie relais numérique portant le nom "Relais".

![Entrées et sorties du compteur – Figure 1](/img/schnittstellen-ein_und_ausgaenge/01.png)

### Câblage externe des entrées et sorties

Commander E1 avec un signal tarifaire ou un délestage

![Entrées et sorties du compteur – Figure 2](/img/schnittstellen-ein_und_ausgaenge/02_EN.png)

Circuit d'enclenchement et de déclenchement avec Telstar : S1 et S0 se câblent de manière identique

![Entrées et sorties du compteur – Figure 3](/img/schnittstellen-ein_und_ausgaenge/03_EN.png)

### Sortie d'impulsions

Il est possible de configurer la sortie comme sortie d'impulsions. Vous pouvez choisir entre l'énergie réactive et l'énergie active.

Remarque : il n'est pas possible de distinguer le soutirage de l'injection. C'est toujours la valeur absolue qui est émise.

### Configuration comme contact sec

Si la sortie est définie comme contact sec, n'importe quel appareil peut être commandé via le smart-me Cloud. La commande peut se faire manuellement (marche/arrêt) ou automatiquement au moyen d'[actions déclenchées par un événement](/konfiguration/wenndann-aktionen/ereignisaktionen) ou d'[actions si/alors](/konfiguration/wenndann-aktionen).

1.  Connectez-vous sur le [site web smart-me](https://web.smart-me.com/login/) ou dans l'app smart-me

2.  Sélectionnez un compteur et cliquez sur "Modifier" (Editieren).

3.  Sous "Sorties" (Ausgänge), sélectionnez la sortie souhaitée et configurez-la comme "Sortie numérique" (Digitaler Ausgang)

    - Vous pouvez donner un nom quelconque à la sortie.

    - Vous pouvez définir une action à exécuter lorsque le compteur perd la connexion avec le smart-me Cloud.


REMARQUE :
Si S1 n'est pas utilisée comme sortie numérique, elle peut être masquée de l'affichage en la réglant sur sortie d'impulsions.
Dans la vue locataire, les sorties ne peuvent pas être activées ou désactivées, même si elles y sont visibles.

![Entrées et sorties du compteur – Figure 4](/img/schnittstellen-ein_und_ausgaenge/04_EN.png)

### Affichage en ligne lors de la mise en service d'un Telstar 80A ou CT

![Entrées et sorties du compteur – Figure 5](/img/schnittstellen-ein_und_ausgaenge/05_EN.png)

### Affichage en ligne après activation de S0\_0 comme sortie numérique

![Entrées et sorties du compteur – Figure 6](/img/schnittstellen-ein_und_ausgaenge/06_EN.png)

### Câblage des sorties

Respectez les valeurs maximales de tension, de courant et de puissance de chaque sortie. De manière simplifiée, chacune des sorties à contact sec peut être considérée comme un interrupteur non raccordé. Pour qu'elle fonctionne, un circuit doit être établi d'un potentiel élevé vers un potentiel bas.

Les sorties ne fournissent elles-mêmes aucune tension ; une source de tension doit donc être placée en amont.

Pour les circuits en courant alternatif 230V :

- 230 VAC sur le contact "+" de S1

- Câbler le contact "-" de S1 sur l'entrée "+" du circuit externe.

- Pour terminer, raccorder le "-" du circuit externe au conducteur neutre. (Il n'est pas nécessaire de raccorder une charge ohmique)


Pour les circuits en courant continu :

- de + VDC sur le contact "+" de S1

- Câbler le contact "-" de S1 sur l'entrée "+" du circuit externe.

- Pour terminer, raccorder le "-" du circuit externe à GND.


![Entrées et sorties du compteur – Figure 7](/img/schnittstellen-ein_und_ausgaenge/07.png)

\*Selon le type d'appareil

![Entrées et sorties du compteur – Figure 8](/img/schnittstellen-ein_und_ausgaenge/08.png)

## Configurer l'entrée

Les compteurs smart-me disposent d'une entrée numérique qui peut être utilisée comme entrée tarifaire ou comme entrée numérique normale. Par défaut, cette entrée est définie comme entrée tarifaire. Si l'entrée est configurée comme entrée numérique, elle peut servir d'événement pour commander d'autres appareils ou déclencher des alarmes. Si l'entrée est définie comme entrée tarifaire, le comptage passe du tarif 1 au tarif 2 dès qu'une tension est appliquée.

### Configuration comme entrée numérique

Pour configurer une entrée comme entrée numérique, procédez comme suit :

1.  Connectez-vous sur le [site web smart-me](https://web.smart-me.com/login/) ou dans l'app smart-me.

2.  Sélectionnez un compteur et cliquez sur "Modifier" (Editieren).

3.  Sous "Entrées et sorties" (Eingänge und Ausgänge), configurez l'entrée comme "Entrée numérique" (Digitaler Eingang)

    - Vous pouvez donner un nom quelconque à l'entrée.

    - Vous pouvez définir un texte à afficher lorsque l'entrée est "Marche" (Ein) ou "Arrêt" (Aus).

4.  L'entrée numérique et son état s'affichent désormais dans l'app smart-me et sur le portail web smart-me.


### Utiliser l'entrée numérique pour des commandes

Vous pouvez utiliser l'entrée numérique pour commuter d'autres appareils ou envoyer des alarmes. Pour cela, l'événement Si "État de commutation" (Schaltzustand) peut être défini sous [Actions si/alors](/konfiguration/wenndann-aktionen/ereignisaktionen).

### Câbler le raccordement

Pour commuter le contact sec, une tension et un potentiel externes (p. ex. conducteur neutre) doivent être appliqués. Les valeurs de tension correspondantes figurent dans les données techniques de chaque produit. 

Logique :
1 (High) = tension selon la fiche technique
0 (Low) = 0 Volt

Remarque : en tension continue, il faut respecter la polarité (E1+/E1-), alors qu'elle ne joue aucun rôle en tension alternative.
