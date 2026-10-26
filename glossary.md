# Glossar für die Übersetzung

Dieses Glossar steuert `scripts/translate.ts`. Es wird bei **jeder** Übersetzung
mitgegeben und ist verbindlich: Begriffe aus Abschnitt 1 bleiben unverändert,
Begriffe aus Abschnitt 2 werden genau so übersetzt wie hier festgelegt.

Ergänzungen sind ausdrücklich erwünscht — einfach eine Zeile in der passenden
Tabelle hinzufügen. Nach einer Änderung müssen die betroffenen Seiten neu
übersetzt werden: `npm run translate -- --all`.

Schreibweise: Schweizer Rechtschreibung, also **ss statt ß**.

---

## 1. Niemals übersetzen

Produkt-, Marken- und Eigennamen sowie etablierte Abkürzungen bleiben in allen
Sprachen unverändert — inklusive Gross-/Kleinschreibung.

### smart-me Produkte und Funktionen

`smart-me` · `Pico` · `Rocketmaster` · `Telstar` · `Telstar CT` · `Nimbus` ·
`Plug` · `smart-eye` · `AppLAB` · `My Dashboards` · `Installer App` ·
`AI Connector` · `Auto Export` · `Minergie Exporter` · `Projektkonfigurator` ·
`Investitionsrechner` · `eCarUp`

### Technische Standards und Protokolle

`M-Bus` · `LoRa` · `LoRaWAN` · `Modbus TCP` · `OCPP` · `MID` · `P1` · `OBIS` ·
`REST` · `API` · `JSON` · `CSV` · `SDAT` · `Ebix` · `DTA` · `VHKA` ·
`Swisseldex` · `RCD Typ A` · `RFID`

### Schweizer Normen, Programme und Regelwerke

`VEWA` · `Minergie` · `MKD3` · `VSE` · `METAS` · `EnDK`

### Dritthersteller und Partnersysteme

`bexio` · `Fairwalter` · `Loxone` · `SMARTFOX` · `smartRED` · `Solar Manager` ·
`Soleco` · `Symcon` · `whatwatt` · `zerofy` · `zevvy` · `Zaehlerfreunde` ·
`Askoma` · `Clever PV` · `Digital Republic` · `eSMART` · `GreenPocket` ·
`IMOVATEC` · `Limmobi` · `Node-RED` · `Immotop2` · `Garaio REM` · `AbaImmo` ·
`Kamstrup` · `Landis+Gyr` · `Dragino` · `Kerlink` · `Milesight` · `SenseCAP` ·
`WisGate`

---

## 2. Feste Fachbegriffs-Übersetzungen

Diese Begriffe **müssen** so übersetzt werden. Die Abkürzung wird jeweils bei
der ersten Nennung in einem Abschnitt eingeführt und danach verwendet.

### Kernbegriffe des Schweizer Energierechts

| Deutsch | English | Français | Italiano |
| --- | --- | --- | --- |
| ZEV (Zusammenschluss zum Eigenverbrauch) | ZEV (association for own consumption) | RCP (regroupement dans le cadre de la consommation propre) | RCP (raggruppamento ai fini del consumo proprio) |
| vZEV (virtueller ZEV) | vZEV (virtual ZEV) | RCP virtuel (vRCP) | RCP virtuale (vRCP) |
| LEG (Lokale Elektrizitätsgemeinschaft) | LEC (local electricity community) | CEL (communauté électrique locale) | CEL (comunità elettrica locale) |
| Eigenverbrauch | self-consumption | autoconsommation | autoconsumo |
| Mieterstrom | tenant electricity | électricité pour les locataires | elettricità per gli inquilini |
| Nebenkosten | ancillary costs | charges accessoires | spese accessorie |
| Messkonzept | metering concept | schéma de mesure | schema di misura |
| Vergütung | remuneration | rétribution | rimunerazione |
| Netzbetreiber | grid operator | gestionnaire de réseau de distribution (GRD) | gestore della rete di distribuzione |
| Elektrizitätswerk (EW) | utility | fournisseur d'électricité | azienda elettrica |

### Zähler und Messung

| Deutsch | English | Français | Italiano |
| --- | --- | --- | --- |
| Zähler | meter | compteur | contatore |
| Zählerstand | meter reading | relevé du compteur | lettura del contatore |
| Virtueller Zähler | virtual meter | compteur virtuel | contatore virtuale |
| Wärmezähler | heat meter | compteur de chaleur | contatore di calore |
| Wasserzähler | water meter | compteur d'eau | contatore dell'acqua |
| Warmwasser | domestic hot water | eau chaude sanitaire | acqua calda sanitaria |
| Kaltwasser | cold water | eau froide | acqua fredda |
| Wirkenergie | active energy | énergie active | energia attiva |
| Blindenergie | reactive energy | énergie réactive | energia reattiva |
| Bezug | consumption | soutirage | prelievo |
| Einspeisung | feed-in | injection | immissione |
| Stromwandler | current transformer | transformateur de courant | trasformatore di corrente |

### Abrechnung

| Deutsch | English | Français | Italiano |
| --- | --- | --- | --- |
| Abrechnung | billing | décompte | conteggio |
| Rechnungsstellung | billing | facturation | fatturazione |
| Abrechnungsperiode | billing period | période de décompte | periodo di conteggio |
| Stromtarif | electricity tariff | tarif d'électricité | tariffa elettrica |
| Hochtarif | peak tariff | heures pleines | ore di punta |
| Niedertarif | off-peak tariff | heures creuses | ore fuori punta |
| Tarifzeiten | tariff times | plages tarifaires | fasce tariffarie |
| MWST | VAT | TVA | IVA |
| Mieter | tenant | locataire | inquilino |
| Verwalter | property manager | gérance | amministrazione immobiliare |

### Ladeinfrastruktur

| Deutsch | English | Français | Italiano |
| --- | --- | --- | --- |
| Ladestation | charging station | borne de recharge | stazione di ricarica |
| Ladepunkt | charge point | point de recharge | punto di ricarica |
| Ladevorgang | charging session | session de recharge | sessione di ricarica |
| Lastmanagement | load management | gestion de la charge | gestione del carico |
| Multilevel Lastmanagement | multilevel load management | gestion de la charge multiniveau | gestione del carico multilivello |
| Standfuss | stand | socle | piedistallo |

### Beschriftungen in der smart-me Oberfläche

Menüpunkte und Schaltflächen, wie sie im Portal tatsächlich heissen. Sie
erscheinen im Text als Menüweg — `<Menueweg>Rechnungserstellung → Einstellungen</Menueweg>`
— und müssen deshalb genau so übersetzt werden wie die Oberfläche selbst.
Weicht eine Übersetzung hier ab, sucht der Leser im Portal nach einem Eintrag,
den es dort nicht gibt.

Die Tabelle bildet die Navigation des Portals vollständig ab, abgelesen am
11. Oktober 2026. **Für Menüpunkte gilt sie vor jeder anderen Tabelle dieses
Glossars** — auch dort, wo derselbe Begriff im Fliesstext anders übersetzt wird.
Eingerückte Einträge stehen im Menü unter dem Punkt darüber.

| Deutsch | English | Français | Italiano |
| --- | --- | --- | --- |
| Dashboard | Dashboard | Dashboard | Pannello di controllo |
| Meine Dashboards | My Dashboards | Mes tableaux de bord | I miei dashboard |
| Zähler & Ordner Konfiguration | Meter & Folder Configuration | Configuration du compteur et du dossier | Configurazione di contatori e cartelle |
| Benutzerkonfiguration | User Configuration | Configuration de l'utilisateur | Configurazione utente |
| Wenn-Dann Aktionen | If-Then Actions | Actions si-alors | Azioni "se-quando |
| Öffentliche Links | Public Links | Liens publics | Link pubblici |
| Rechnungserstellung | Billing | Facturation | Fatturazione |
| → Einstellungen | Settings | Paramètres | Impostazioni |
| → Liegenschaften & Tarife | Properties & tariffs | Immeubles & tarifs | Immobili & tariffe |
| → Rechnung erstellen | Create invoice | Établir une facture | Emettere una fattura |
| → Rechnungen | Invoices | Factures | Fatture |
| Virtuelle Zähler | Virtual Meters | Compteurs virtuels | Contatori virtuali |
| Schnittstellen | Interfaces | Interfaces | Interfacce |
| → Automatischer Export | Auto Export | Exportation automatique | Esportazione automatica |
| → Swisseldex Import | Swisseldex Import | Importation Swisseldex | Importazione da Swisseldex |
| → Drittanbieter-Import | 3rd Party Import | Importation de tiers | Importazione di terze parti |
| → LoRa Gateway | LoRa Gateway | Passerelle LoRa | Gateway LoRa |
| Multilevel Lastmanagement | Multilevel Load Management | Gestion de charge à plusieurs niveaux | Gestione del carico multilivello |
| System | System | Système | Sistema |
| → Systemgesundheit | System Health | Santé du système | Salute del sistema |
| → Firmware Update | Firmware update | Mise à jour du firmware | Aggiornamento del firmware |
| Technische Hilfsmittel | Technical Tools | Aides techniques | Ausili tecnici |
| App-Labor | AppLAB | Laboratoire d'applications | Laboratorio delle app |
| Neuigkeiten | News | Nouvelles | Ultime notizie |
| Smart-Me Wiki | Smart-Me Wiki | Smart-Me Wiki | Wiki Smart-Me |
| Funktioniert etwas nicht? | Something not working? | Quelque chose ne fonctionne pas ? | C'è qualcosa che non funziona? |

Der Menüpunkt **API** heisst in allen Sprachen gleich und steht deshalb oben in
Abschnitt 1.

### Software und Bedienung

| Deutsch | English | Français | Italiano |
| --- | --- | --- | --- |
| Ordner | folder | dossier | cartella |
| Ordnerkonfiguration | folder configuration | configuration des dossiers | configurazione delle cartelle |
| Inbetriebnahme | commissioning | mise en service | messa in servizio |
| Störungsbehebung | troubleshooting | dépannage | risoluzione dei problemi |
| Wenn/Dann-Aktion | if/then action | action si/alors | azione se/allora |
| Ereignisaktion | event action | action déclenchée par un événement | azione basata su eventi |
| Visualisierung | visualization | visualisation | visualizzazione |
| Firmware-Update | firmware update | mise à jour du firmware | aggiornamento del firmware |
| Benutzerkonfiguration | user configuration | configuration des utilisateurs | configurazione degli utenti |
| Schnittstelle | interface | interface | interfaccia |
| Drittsystem | third-party system | système tiers | sistema di terzi |
| Drittprodukt | third-party product | produit tiers | prodotto di terzi |

---

## 3. Englische Bestandsterminologie

Die folgenden Titel stammen aus dem bestehenden englischen Wiki
(`doc.smart-me.com`) und sind die im Haus etablierte Übersetzung. Neue
englische Texte sollen dieselbe Wortwahl verwenden.

<!-- ANFANG: aus der Migration übernommen, siehe migration-report.md -->

| Deutsch | English |
| --- | --- |
| 1-Phasenzähler 80A | Single Phase Meter 80A |
| 3-Phasen Energiezähler Telstar CT | 3-Phase Meter Telstar CT |
| 3-Phasen Zähler | 3-Phase Meter |
| 3-Phasenzähler Telstar 80A | 3-Phase Meter Telstar 80A |
| Abrechnung / Vergütung vorbereiten | Prepare Billing |
| AI Connector | AI ConnectorConnecting smart-me to an AI assistant |
| Alarme | Alarms |
| Beispiele Boilersteuerung mit Wenn/Dann-Aktionen | Examples of boiler control with if/then actions |
| Benutzer erstellen | Creating users |
| Billing Problembehebung | Billing error messages |
| Billing: Energie abrechnen | Energy Billing |
| Clever PV | Clever-PV |
| Cloud Lizenzen | Cloud License |
| Datensicherheit | Data Security |
| Differenzen zwischen smart-me Billing und dem Energieversorger | Differences between smart-me Billing and the energy supplier |
| Drittprodukte | Information Security |
| Drittsysteme | Third Party Systems |
| DTA-VHKA Files Import / Export (Beta) | DTA-VHKA Files |
| E-Mobility Lastmanagement | E-mobility load management |
| Ebix Datenimport | Ebix Data Import |
| Eingestellte Produkte | Discontinued products |
| Elektromobilität | E-Mobility |
| Ereignisaktionen | Event-related Actions |
| Inbetriebnahme | Commissioning |
| Inbetriebnahme LoRa | Commissioning LoRa |
| Internetverbindung | Internet Connection |
| Kamstrup Modul | Kamstrup Module |
| Konfiguration Multilevel Lastmanagement | Configure multilevel load management |
| Kontakt | Contact |
| Landis+Gyr Modul | Landis+Gyr Module |
| M-Bus Gateway Störungen | M-Bus gateway failures |
| Messkonzept Produzenten hinter Häuser | Measurement concept producers behind houses |
| Messkonzepte Notstromlösungen | Measurement concepts emergency power solutions |
| Minergie-Modul Monitoring | Minergie Monitoring |
| Multilevel Lastmanagement | Multilevel load management |
| Pico E-Ladestation | Pico EV Charger |
| Pico E-Ladestation | Pico EV Charger |
| Pico Fehler | Pico errors |
| Pico Konfiguration | Pico Configuration |
| Pico Lastmanagement | Pico load management |
| Pico Ständer | Pico Stand |
| Pico Zubehör | Pico Accessories |
| Planung | Planning |
| Produkte | Products |
| RMA-Antragsformular | RMA Application Forms |
| smart-me Billing für deutschen Mieterstrom | smart-me Billing for German Mieterstrom |
| smart-me Nimbus 100A | 3-Phase Meter Nimbus 100A |
| Standfuss Fundamente | Stand foundation |
| Stromtarife definieren | Define electrical tariffs |
| Stromwandler und Zubehör zu Telstar CT | Current Transformers and accessories for Telstar CT |
| Technische Daten & Handbücher | Technical data & manuals |
| Telstar CT Inbetriebnahmefehler | Telstar CT - Setup issues |
| TrueEnergy AS | TrueEnergy |
| Vertrag / Rechtliches | Contract / Legal |
| VEWA - Abrechnung | VEWA - Billing |
| Virtuelle Zähler | Virtual Meters |
| Virtuelle ZEV (vZEV) | Virtual ZEV (vZEV) |
| Visualisierungsfehler | Visualization error |
| VZEV-Swisseldex (SDAT) Import | Swisseldex SDAT data import |
| Wenn/Dann-Aktionen | If / Then Actions |
| Zähler Ein- und Ausgänge | Input and Output Configuration |
| Zähler Löschen / Deaktivieren | Delete meter |
| Zähler offline | Meter offline |
| Zähler- und Ordnerkonfiguration | Folder and Meter Configuration |
| Zählersteckklemmen Nimbus 100A | Meter plug-in terminals |
| Zählertransaktionen | Meter Transactions |
| Zertifizierungen | Certification |
<!-- ENDE -->

---

## 4. Noch zu bestätigen

Diese Übersetzungen wurden bei der Erstbefüllung des Glossars nach bestem
Wissen gesetzt, aber nicht durch eine bestehende smart-me Quelle belegt. Bitte
vom Team prüfen und danach diesen Abschnitt leeren:

- `Mieterstrom` in Französisch und Italienisch — in der Schweiz wird dafür
  meist direkt der Begriff `RCP` verwendet.
- `LEG` → `LEC` / `CEL`: Die Abkürzungen sind gebräuchlich, aber die smart-me
  Schreibweise ist noch nicht festgelegt.
- `Standfuss` → `socle` / `piedistallo`.
- `Abrechnung` ist im Französischen je nach Kontext `décompte` (Kostenaufteilung)
  oder `facturation` (Rechnungsstellung). Die Tabelle bildet beide Fälle ab;
  im Zweifel entscheidet der Kontext.
