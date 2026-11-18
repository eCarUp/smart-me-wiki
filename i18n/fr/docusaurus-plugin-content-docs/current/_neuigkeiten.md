<details id="smart-me-im-energiemanagement-von-eniris" open>
<summary>NOUVEAU : smart-me dans la gestion de l'énergie d'Eniris</summary>

<div className="row">
<div className="col col--7">

Le système de gestion de l'énergie SmartgridOne d'Eniris lit désormais les appareils smart-me directement via Modbus TCP, sans passer par le cloud.

Le Telstar 80A, le Telstar CT et la borne de recharge Pico avec commutation de phases sont intégrés. Dans SmartgridOne, ils sont disponibles sous **Devices** en tant qu'intégration standard. En Suisse, la distribution est assurée par Solarmarkt.

[→ Plus de détails](/drittsysteme/eniris)

</div>
<div className="col col--5 bild--mitte">

![Logo d'Eniris : un éclair dans un cercle rouge à côté de l'inscription ENIRIS](/img/drittsysteme-eniris/logo.png)

</div>
</div>

</details>

<NurFuer land="ch">

<details id="zev-mit-notstromsystemen" open>
<summary>NOUVEAU : RCP avec systèmes d'alimentation de secours</summary>

Vous pouvez désormais tarifer les systèmes d'alimentation de secours de manière alternative.  

Comme la place pour le compteur solaire fait souvent défaut, vous pouvez maintenant tarifer simplement au moyen du raccordement d'immeuble et de la consommation totale, sans devoir ajouter laborieusement le compteur solaire.

Pour ce faire, sélectionnez le tarif solaire incl. vRCP (Solartarif inkl. vZEV) :
\- Compteur de référence : consommation et bilan (Referenzzähler: Verbrauch und Bilanz)

Les tarifs sont alors calculés correctement sans compteur solaire, ce qui vous épargne des installations et transformations fastidieuses.

Remarque : si l'installation d'un compteur de production solaire est possible, n'hésitez pas à le faire. La couverture complète du schéma de mesure permet de compenser les données erronées dues à des compteurs défectueux ; une omission systématique prive de cette possibilité.

[Plus de détails](/planung/messkonzept-notstromloesung)

![Données techniques & manuels – Figure 1](/img/home/01.png)

</details>

</NurFuer>

<details id="kleines-update-zum-solarmanager-ab-august-2026" open>
<summary>Petite mise à jour concernant SolarManager à partir d'août 2026</summary>

Avec la nouvelle mise à jour de SolarManager, les Picos ne sont plus pilotés via le numéro de série, mais via l'ID du groupe de gestion de la charge de niveau 1.

Dans cette courte vidéo, je vous montre étape par étape comment cela fonctionne, afin que vous puissiez effectuer correctement les réglages du côté smart-me.

Bon à savoir : grâce à cette mise à jour, la recharge monophasée à 6 A (env. 1,4 kW) est désormais possible, ce qui est idéal pour de faibles excédents photovoltaïques. Vous trouverez la manière de configurer cela dans la documentation de SolarManager.

<Embed src="https://drive.google.com/file/d/1Oc3uuTCMusCJMHL7hjlJzFbkoFONHpm4/preview" aspect="1.350" title="Drive, vidéo solarmanager_update_2026.mp4" />

solarmanager\_update\_2026.mp4

</details>

<details id="rechnungsvorschau-v1">
<summary>NOUVEAU : Aperçu de facture V1</summary>

Générez désormais un aperçu de facture avant d'établir les factures définitives.

- Vérifiez rapidement et simplement vos configurations.

- Validez plus facilement vos décomptes

- Ne générez plus de factures erronées sans validation préalable.

Où ?

Facturation (Rechnungsstellung) --> Factures (Rechnungen)

![Données techniques & manuels – Figure 2](/img/home/02.png)

![Données techniques & manuels – Figure 3](/img/home/03.png)

</details>

<details id="aktualisierung-unserer-agb-datenschutzrichtlinien">
<summary>Mise à jour de nos CG & de nos directives sur la protection des données</summary>

Nous avons adapté nos Conditions générales (CG) et nos déclarations de protection des données. Afin de régler de manière juridiquement optimale le traitement des données au sein de notre groupe, les documents ont été complétés par un « Joint Controller Agreement » (JCA). Les versions mises à jour peuvent être consultées en ligne dès maintenant.

[→ Vers les CG & dispositions sur la protection des données](https://web.smart-me.com/agb-smart-me-ag/)

</details><NurFuer land="ch">

<details id="unser-neuer-online-shop-ab-1-juli-2026">
<summary>Important : notre nouvelle boutique en ligne dès le 1er juillet 2026</summary>

Préparez-vous à une transition sans accroc vers notre nouvelle plateforme moderne. Obtenez un aperçu rapide de :  

- Délai de commande dans l'ancienne boutique : passez vos commandes urgentes jusqu'au 26 juin 2026 à 11h00. L'ancien système sera ensuite désactivé. 

- Transition par e-mail & téléphone : pendant la phase de migration (29 juin – 1er juillet), commandez simplement directement chez nous. 

- Activation des comptes existants : utilisez le lien d'activation que vous recevrez par e-mail le 30 juin de notre nouveau prestataire Odoo.  

- Rabais & prix habituels : continuez à profiter de vos conditions individuelles, déjà enregistrées dans le nouveau système. 

- Lancement de la nouvelle plateforme : dès le 1er juillet 2026, achetez simplement et rapidement dans la nouvelle boutique.

</details>

</NurFuer>

<details id="online-strom-und-solartarif-rechner">
<summary>Mise à jour : calculateur en ligne des tarifs d'électricité et solaires</summary>

- Saisie étendue

- Composants personnalisables

- Indication dédiée des saisies dans smart-me Billing

[→ Vers le calculateur de tarifs d'électricité et solaires](/konfiguration/billing/stromtarife-definieren/stromtarif-rechner)

![Données techniques & manuels – Figure 4](/img/home/04.png)

</details>

<details id="dynamische-netztarife-abrechnen">
<summary>Nouveau : décompter les tarifs de réseau dynamiques</summary>

Décomptez désormais aussi les tarifs de réseau dynamiques à vos locataires. 

Nous importons le tarif dynamique de votre fournisseur et l'appliquons toutes les 15 minutes au soutirage effectif du réseau de chaque consommateur.

[→ Plus d'informations sur les tarifs](/konfiguration/billing/stromtarife-definieren)

![Données techniques & manuels – Figure 5](/img/home/05.png)

![Données techniques & manuels – Figure 6](/img/home/06.png)

</details>

<details id="my-dashboards">
<summary>Nouveau : My Dashboards</summary>

Vous permet de créer des tableaux de bord personnalisés, comme les flux d'énergie et des vues d'ensemble de votre bâtiment.

![Données techniques & manuels – Figure 7](/img/home/07.png)

[→ En savoir plus](/konfiguration/my-dashboards)

- Carte énergétique (Energiekarte)

- Flux d'énergie (Energieflüsse)

![Données techniques & manuels – Figure 8](/img/home/08.png)

</details>

<details id="technische-tools">
<summary>Nouveau : outils techniques</summary>

Dans la nouvelle rubrique Aides techniques (Technische Hilfsmittel), vous trouverez des outils pour l'installation et la maintenance de l'installation.

![Données techniques & manuels – Figure 9](/img/home/09.png)

[→ En savoir plus](/konfiguration/technische-tools)

- Contrôle de l'installation (Installationsprüfung)

![Données techniques & manuels – Figure 10](/img/home/10.png)

</details>

<details id="applab">
<summary>Nouveau : AppLAB</summary>

La nouvelle rubrique AppLAB est un espace d'expérimentation qui met à disposition différentes fonctionnalités afin d'en tester l'efficacité.

![Données techniques & manuels – Figure 11](/img/home/11.png)

[→ En savoir plus](/konfiguration/applab)

- Explorateur des pointes de charge (Spitzenlast-Explorer)

- Rapport sur la puissance réactive (Blindleistungsbericht)

- Émulateur de batterie (Batterie-Emulator)

- Rapport ESG (ESG-Bericht)

- Assistant de configuration Autobill (Autobill Einrichtungsassistent)

</details>

<details id="generalueberholung-ui">
<summary>Nouveau : refonte complète de l'interface</summary>

L'ensemble de l'interface smart-me a bénéficié d'un nouveau design.

- Rien n'a changé dans l'utilisation.

![Données techniques & manuels – Figure 12](/img/home/12.png)

</details><NurFuer land="ch">

<details id="zev-performance-uebersicht">
<summary>Nouveau : aperçu de la performance du RCP</summary>

Vérifiez la production et les rendements de votre RCP (regroupement dans le cadre de la consommation propre) dans la nouvelle visualisation « Performance RCP » (ZEV Performance). Obtenez un aperçu rapide de :

- Flux d'énergie avec la nouvelle visualisation des flux d'énergie

- Production d'énergie et rendement

- Pointes de soutirage et d'injection depuis et vers le réseau

- Identifiez les jours à forte production grâce à la visualisation en carte de chaleur

- Analysez l'efficacité de votre batterie dans le RCP

[→ Plus d'informations sur les nouvelles visualisations](/konfiguration/visualisierung)

![Données techniques & manuels – Figure 13](/img/home/13.png)

</details>

</NurFuer>

<details id="visualisierungs-update">
<summary>Mise à jour des visualisations</summary>

Visualisations existantes :

Les visualisations existantes reçoivent un nouveau design. Elles sont mises à jour automatiquement, sans configuration supplémentaire.

Nouvelle visualisation Pico :

Découvrez la nouvelle visualisation Pico, qui affiche d'un coup d'œil tous les points de recharge Pico et leurs groupes de recharge – avec le courant absorbé, l'occupation, la puissance absorbée maximale et bien plus encore.

[→ Plus d'informations sur les nouvelles visualisations](/konfiguration/visualisierung)

![Données techniques & manuels – Figure 14](/img/home/14.png)

![Données techniques & manuels – Figure 15](/img/home/15.png)

</details>

<details id="das-neue-m-bus-gateway-sirius-ist-da">
<summary>La nouvelle passerelle M-Bus Sirius est arrivée !</summary>

Notre famille de produits continue de s'agrandir : avec le Sirius, nous lançons notre passerelle la plus performante à ce jour pour les grandes infrastructures de bâtiments.

- Capacité massive – Jusqu'à 250 charges standard M-Bus dans un seul appareil. 

- Multi-énergie – Eau, chaleur, froid et gaz gérés de manière centralisée. 

- Sécurité maximale – Mémoire de données très importante en cas de coupure de connexion.

[→ Plus d'informations sur le Sirius](/produkte/m-bus-gateway/sirius)

![Données techniques & manuels – Figure 16](/img/home/16.jpg)

</details><NurFuer land="ch">

<details id="mwst-richtig-verrechnen">
<summary>NOUVEAU : TVA - Facturer correctement</summary>

<div className="row">
<div className="col col--6">

L'application de la TVA est un point important du décompte. Pour éviter toute erreur, vous trouverez ici un guide pour indiquer correctement la TVA dans votre cas.

La législation sur la TVA relative au RCP évolue aussi rapidement que la technique.

[→ Plus d'informations pour nos partenaires](/konfiguration/billing/mwst-zev-nebenkosten)

</div>
<div className="col col--6 bild--mitte">

![Données techniques & manuels – Figure 17](/img/home/17.png)

</div>
</div>

</details>

</NurFuer>
