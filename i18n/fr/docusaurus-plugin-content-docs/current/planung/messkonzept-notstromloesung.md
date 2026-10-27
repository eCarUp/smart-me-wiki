---
title: 'Schémas de mesure pour solutions d''alimentation de secours'
slug: '/planung/messkonzept-notstromloesung'
description: 'Comment mesurer et décompter une installation avec système d''alimentation de secours dans smart-me Billing.'
sidebar_label: 'Schéma de mesure alimentation de secours'
symbol: 'notstrom'
---
Comment mesurer et décompter une installation avec système d'alimentation de secours dans smart-me Billing. 

### Prérequis

Vous avez besoin d'un abonnement smart-me Professional 

## Principe de base

Le commutateur du système d'alimentation de secours possède trois raccordements : Grid (réseau, après le compteur de bilan Z1 ), Load (toute la maison) et WR (onduleur avec PV et batterie). Seule la ligne entre le commutateur et l'onduleur transporte exclusivement du courant PV et de batterie. Si elle est accessible, le compteur solaire Z2 y mesure directement la production. 

## Étape par étape

### 1 - Clarifier la configuration et choisir la variante

Vérifiez à l'aide de la fiche technique, du schéma électrique ou auprès du fabricant où se trouve la commutation : 

- Commutateur séparé (Backup-Box, Backup Controller, EPS-Box) : la ligne vers l'onduleur est accessible. → Variante A avec compteur solaire (recommandée). 

- Commutateur intégré (onduleur avec son propre port Grid et Backup) : la connexion se trouve dans l'appareil. → Variante B sans compteur solaire. Pour la variante A, vérifiez en outre si le fabricant autorise un compteur sur la ligne vers l'onduleur. 


### 2 - Planifier et installer les compteurs

Variante A · commutateur séparé

 Z1 avant l'entrée Grid, Z2 entre le commutateur et l'onduleur, chaque consommateur avec son propre compteur (ensemble Zb ). 

![Schémas de mesure pour solutions d'alimentation de secours – Figure 1](/img/planung-messkonzept-notstromloesung/01.png)

Variante B · commutateur intégré 

Z1 avant le port Grid, chaque consommateur sans exception avec son propre compteur. La production est calculée à partir de la consommation totale Zb et du bilan Z1. 

![Schémas de mesure pour solutions d'alimentation de secours – Figure 2](/img/planung-messkonzept-notstromloesung/02.png)

### 3 - Créer les tarifs

Mettre tous les compteurs en service et les placer dans le dossier de l'immeuble. Créer ensuite un tarif solaire dans Billing (prix, validité et numéro de tarif comme d'habitude) : 

Variante A · avec compteur solaire 

- Type de tarif (Tarif Typ) : Tarif solaire incl. vRCP (Solartarif inkl. vZEV) 

- Compteur solaire ou de batterie (Solar oder Batterie Zähler) : Z2 

- Compteur de bilan (Bilanzzähler) : Z1 (facultatif, augmente la précision) 


![Schémas de mesure pour solutions d'alimentation de secours – Figure 3](/img/planung-messkonzept-notstromloesung/03.png)

Variante B · sans compteur solaire

- Type de tarif (Tarif Typ) : Tarif solaire incl. vRCP (Solartarif inkl. vZEV) 

- Compteur de référence (Referenzzähler) : Consommation + bilan tous (Verbrauch + Bilanz Alle) 

- Compteur de bilan (Bilanzzähler) : Z1 

- Tous les compteurs de consommation (Alle Verbrauchszähler) : tous les compteurs des consommateurs Z3…Zn, ensemble Zb 


![Schémas de mesure pour solutions d'alimentation de secours – Figure 4](/img/planung-messkonzept-notstromloesung/04.png)

<Embed src="/embeds/planung-messkonzept-notstromloesung-01.html" aspect="2.305" title="Schéma de mesure pour solution d'alimentation de secours" />
