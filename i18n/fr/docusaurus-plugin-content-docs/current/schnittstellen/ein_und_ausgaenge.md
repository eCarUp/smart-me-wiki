---
title: 'Entrées et sorties du compteur'
slug: '/schnittstellen/ein_und_ausgaenge'
description: 'Configurer les entrées et les sorties'
sidebar_label: 'Entrées et sorties'
---
## Configurer les entrées et les sorties

Les compteurs smart-me disposent d'une ou de plusieurs sorties, qui peuvent être utilisées comme sortie impulsionnelle ou comme contact libre de potentiel.  D'usine, la sortie S0\_0 est définie comme sortie impulsionnelle et la S1 comme sortie relais numérique portant le nom « Relais ».

![Entrées et sorties du compteur – Figure 1](/img/schnittstellen-ein_und_ausgaenge/01.png)

### Câblage externe des entrées et des sorties

Commander E1 avec un signal tarifaire ou un délestage

![Entrées et sorties du compteur – Figure 2](/img/schnittstellen-ein_und_ausgaenge/02.png)

Circuit avec Telstar : l'enclenchement et le déclenchement (S1 et S0) se câblent de manière identique

![Entrées et sorties du compteur – Figure 3](/img/schnittstellen-ein_und_ausgaenge/03.png)

### Sortie impulsionnelle

Il est possible de configurer la sortie comme sortie impulsionnelle. Une distinction peut être faite entre l'énergie réactive et l'énergie active.

Remarque : il n'est pas possible de distinguer entre soutirage et fourniture. C'est toujours la valeur absolue qui est délivrée.

### Configuration comme contact libre de potentiel

Si la sortie est définie comme contact libre de potentiel, n'importe quel appareil peut être commandé via le cloud smart-me. La commande peut se faire manuellement (marche/arrêt) ou de manière automatisée via les [actions basées sur des événements](/konfiguration/wenndann-aktionen/ereignisaktionen) ou les [actions si/alors](/konfiguration/wenndann-aktionen).

1.  Connecte-toi sur le [site web smart-me](https://web.smart-me.com/login/) ou dans l'application smart-me

2.  Sélectionne un compteur et clique sur « Éditer » (Editieren).

3.  Sous le point « Sorties » (Ausgänge), sélectionne la sortie souhaitée et configure-la comme « Sortie numérique » (Digitaler Ausgang)

    - Tu peux donner à la sortie le nom de ton choix.

    - Tu peux définir une action à exécuter lorsque le compteur perd la connexion au cloud smart-me.


REMARQUE :
En la basculant sur sortie impulsionnelle, la S1 peut aussi être masquée dans l'affichage lorsqu'elle n'est pas utilisée comme sortie numérique.
Dans la vue locataire, ces éléments ne peuvent être ni activés ni désactivés, même s'ils y sont visibles.

![Entrées et sorties du compteur – Figure 4](/img/schnittstellen-ein_und_ausgaenge/04.png)

### Vue en ligne lors de la mise en service d'un Telstar 80A ou CT

![Entrées et sorties du compteur – Figure 5](/img/schnittstellen-ein_und_ausgaenge/05.png)

### Vue en ligne après activation de la S0\_0 comme sortie numérique

![Entrées et sorties du compteur – Figure 6](/img/schnittstellen-ein_und_ausgaenge/06.png)

### Câblage des sorties

Respecte les valeurs maximales de tension, de courant et de puissance des sorties concernées. De manière simplifiée, chacune des sorties libres de potentiel peut être considérée comme un interrupteur non raccordé. Pour qu'un fonctionnement soit assuré, un circuit doit être rendu possible du potentiel haut vers le potentiel bas.

Les sorties ne fournissent elles-mêmes aucun niveau de tension ; une source de tension doit donc être placée en amont.

Pour les circuits en courant alternatif 230V :

- 230 VAC sur le contact « + » de S1

- câbler le contact « - » de S1 sur l'entrée « + » du circuit externe.

- Raccorder enfin le « - » du circuit externe au conducteur neutre. (Aucune charge ohmique ne doit être raccordée)


Pour les circuits en courant continu :

- de + VDC sur le contact « + » de S1

- câbler le contact « - » de S1 sur l'entrée « + » du circuit externe.

- Raccorder enfin le « - » du circuit externe à GND.


![Entrées et sorties du compteur – Figure 7](/img/schnittstellen-ein_und_ausgaenge/07.png)

\*Selon le type d'appareil

![Entrées et sorties du compteur – Figure 8](/img/schnittstellen-ein_und_ausgaenge/08.png)

## Configurer l'entrée

Les compteurs smart-me disposent d'une entrée numérique qui peut être utilisée comme entrée tarifaire ou comme entrée numérique normale. D'usine, cette entrée est définie comme entrée tarifaire. Si l'entrée est configurée comme entrée numérique, elle peut être utilisée comme événement pour commander d'autres appareils ou déclencher des alarmes.  Si l'entrée est définie comme entrée tarifaire, le comptage bascule du tarif 1 au tarif 2 lors de l'application d'une tension.

### Configuration comme entrée numérique

Pour configurer une entrée comme entrée numérique, procède comme suit :

1.  Connecte-toi sur le [site web smart-me](https://web.smart-me.com/login/) ou dans l'application smart-me.

2.  Sélectionne un compteur et clique sur « Éditer » (Editieren).

3.  Sous le point « Entrées et sorties » (Eingänge und Ausgänge), configure l'entrée comme « Entrée numérique » (Digitaler Eingang)

    - Tu peux donner à l'entrée le nom de ton choix.

    - Tu peux définir un texte à afficher lorsque l'entrée est « Marche » (Ein) ou « Arrêt » (Aus).

4.  Tu vois maintenant l'entrée numérique et son état dans l'application smart-me et sur le portail web smart-me.


### Utiliser l'entrée numérique pour des commandes

Tu peux utiliser l'entrée numérique pour commuter d'autres appareils ou envoyer des alarmes. Pour cela, l'événement « si » « État de commutation » (Schaltzustand) peut être défini sous les [actions si/alors](/konfiguration/wenndann-aktionen/ereignisaktionen).

### Câbler le raccordement

Pour commuter le contact libre de potentiel, une tension et un potentiel externes (p. ex. conducteur neutre) doivent être appliqués. Les valeurs de tension respectives figurent dans les données techniques de chaque produit. 

Logique :
1 (High) = tension indiquée dans la fiche technique
0 (Low) = 0 volt

Remarque : en tension continue, il faut veiller à la polarisation (E1+/E1-), tandis qu'en tension alternative cela n'a aucune importance.
