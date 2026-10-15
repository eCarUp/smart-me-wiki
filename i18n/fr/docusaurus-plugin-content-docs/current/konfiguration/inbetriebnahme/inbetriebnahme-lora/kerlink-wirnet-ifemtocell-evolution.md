---
title: 'kerlink Wirnet iFemtocell-evolution'
slug: '/konfiguration/inbetriebnahme/inbetriebnahme-lora/kerlink-wirnet-ifemtocell-evolution'
description: 'Activation du mode Private Network'
sidebar_label: 'kerlink Wirnet iFemtocell-evolution'
---
## Guide d'intégration

## Activation du mode Private Network

<div className="row">
<div className="col col--7">

1.  Connectez l'appareil à votre ordinateur portable via USB-C

2.  Avec Putty (SSH), accédez à l'adresse IP suivante : 192.168.120.1. 

3.  Connectez-vous avec

    user: root

    PW: pdmk-\*Serial\*  (ex. : EUI = 7076FFyyzz06001E, le Serial est alors 06001E)

4.  Exécutez la commande suivante :

    klk\_apps\_config --activate-cpf --lns-server lora-gateway.smart-me.com --lns-dport 1700 --lns-uport 1700

    Notez que « lns » est la forme en minuscules de LNS !

</div>
<div className="col col--5 text--center">

![kerlink Wirnet iFemtocell-evolution – Illustration 1](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-kerlink-wirnet-ifemtocell-evolution/01.png)

</div>
</div>

![kerlink Wirnet iFemtocell-evolution – Illustration 2](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-kerlink-wirnet-ifemtocell-evolution/02.png)

![kerlink Wirnet iFemtocell-evolution – Illustration 3](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-kerlink-wirnet-ifemtocell-evolution/03.png)

## Ouvrir l'outil web à distance

1.  Connectez l'appareil via Ethernet, WLAN ou 4G conformément aux instructions

2.  Ouvrez le navigateur de votre ordinateur portable et saisissez l'URL suivante :
    [http://klk-fevo-](/)&lt;Serial>/


&lt;Serial> remplace les derniers chiffres de l'EUI de l'appareil, que vous trouverez sur l'appareil :

Ex. : EUI = 7076FFyyzz060001, le Serial est alors 060001


3.  Connectez-vous
    Utilisateur par défaut : admin
    Mot de passe par défaut : pwd4admin

4.  Sélectionnez « Administration » (Administration)

5.  Définissez le fuseau horaire correct pour votre site


![kerlink Wirnet iFemtocell-evolution – Illustration 4](/img/konfiguration-inbetriebnahme-inbetriebnahme-lora-kerlink-wirnet-ifemtocell-evolution/04.png)
