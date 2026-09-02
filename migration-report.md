# Migrationsbericht

Migration des smart-me Support-Wikis von Google Sites nach Docusaurus.
Erzeugt von `scripts/migration/` – erneut erzeugbar mit
`npx tsx scripts/migration/crawl.ts`, `convert.ts` und `report.ts`.

Quelle Deutsch (Master): <https://dok.smart-me.com/>
Quelle Englisch: <https://doc.smart-me.com/>

## Statistik

| Kennzahl | Wert |
| --- | --- |
| Migrierte Seiten (Deutsch) | 150 |
| Heruntergeladene Bilder | 972 |
| Eingebettete Videos | 64 |
| Nicht ladbare Bilder | 0 |
| Bilder mit Alt-Text-Platzhalter | 960 |
| Seiten mit Hinweisen | 23 |

## Migrierte Seiten

150 Seiten. Die alten Pfade wurden 1:1 als Slug übernommen –
bestehende Links auf `dok.smart-me.com/<pfad>` funktionieren nach dem
Umzug der Domain unverändert. Einzige Ausnahme: `/home` liegt neu auf `/`.

| Quell-URL | Neuer Pfad | Datei |
| --- | --- | --- |
| https://dok.smart-me.com/drittprodukte | /drittprodukte | `docs/drittprodukte/index.md` |
| https://dok.smart-me.com/drittprodukte/Stromwandler | /drittprodukte/Stromwandler | `docs/drittprodukte/Stromwandler.md` |
| https://dok.smart-me.com/drittprodukte/standfuss-fundamente | /drittprodukte/standfuss-fundamente | `docs/drittprodukte/standfuss-fundamente.md` |
| https://dok.smart-me.com/drittprodukte/zaehlersteckklemmen-nimbus-100A | /drittprodukte/zaehlersteckklemmen-nimbus-100A | `docs/drittprodukte/zaehlersteckklemmen-nimbus-100A.md` |
| https://dok.smart-me.com/drittsysteme | /drittsysteme | `docs/drittsysteme/index.md` |
| https://dok.smart-me.com/drittsysteme/abm-technik-service | /drittsysteme/abm-technik-service | `docs/drittsysteme/abm-technik-service.md` |
| https://dok.smart-me.com/drittsysteme/askoma | /drittsysteme/askoma | `docs/drittsysteme/askoma.md` |
| https://dok.smart-me.com/drittsysteme/bexio | /drittsysteme/bexio | `docs/drittsysteme/bexio.md` |
| https://dok.smart-me.com/drittsysteme/clever-pv | /drittsysteme/clever-pv | `docs/drittsysteme/clever-pv.md` |
| https://dok.smart-me.com/drittsysteme/digital-republic | /drittsysteme/digital-republic | `docs/drittsysteme/digital-republic.md` |
| https://dok.smart-me.com/drittsysteme/egonline | /drittsysteme/egonline | `docs/drittsysteme/egonline.md` |
| https://dok.smart-me.com/drittsysteme/elmoove | /drittsysteme/elmoove | `docs/drittsysteme/elmoove.md` |
| https://dok.smart-me.com/drittsysteme/esmart | /drittsysteme/esmart | `docs/drittsysteme/esmart.md` |
| https://dok.smart-me.com/drittsysteme/fairwalter | /drittsysteme/fairwalter | `docs/drittsysteme/fairwalter.md` |
| https://dok.smart-me.com/drittsysteme/greenpocket | /drittsysteme/greenpocket | `docs/drittsysteme/greenpocket.md` |
| https://dok.smart-me.com/drittsysteme/ibm-node-red | /drittsysteme/ibm-node-red | `docs/drittsysteme/ibm-node-red.md` |
| https://dok.smart-me.com/drittsysteme/imovatec | /drittsysteme/imovatec | `docs/drittsysteme/imovatec.md` |
| https://dok.smart-me.com/drittsysteme/limmobi | /drittsysteme/limmobi | `docs/drittsysteme/limmobi.md` |
| https://dok.smart-me.com/drittsysteme/loxone | /drittsysteme/loxone | `docs/drittsysteme/loxone.md` |
| https://dok.smart-me.com/drittsysteme/microsoft-excel | /drittsysteme/microsoft-excel | `docs/drittsysteme/microsoft-excel.md` |
| https://dok.smart-me.com/drittsysteme/nebenkostenabrechnung | /drittsysteme/nebenkostenabrechnung | `docs/drittsysteme/nebenkostenabrechnung.md` |
| https://dok.smart-me.com/drittsysteme/piskelapp | /drittsysteme/piskelapp | `docs/drittsysteme/piskelapp.md` |
| https://dok.smart-me.com/drittsysteme/smartfox | /drittsysteme/smartfox | `docs/drittsysteme/smartfox.md` |
| https://dok.smart-me.com/drittsysteme/smartred | /drittsysteme/smartred | `docs/drittsysteme/smartred.md` |
| https://dok.smart-me.com/drittsysteme/solarmanager | /drittsysteme/solarmanager | `docs/drittsysteme/solarmanager.md` |
| https://dok.smart-me.com/drittsysteme/soleco | /drittsysteme/soleco | `docs/drittsysteme/soleco.md` |
| https://dok.smart-me.com/drittsysteme/switzercloud-colibird | /drittsysteme/switzercloud-colibird | `docs/drittsysteme/switzercloud-colibird.md` |
| https://dok.smart-me.com/drittsysteme/symcon | /drittsysteme/symcon | `docs/drittsysteme/symcon.md` |
| https://dok.smart-me.com/drittsysteme/trueenergy-as | /drittsysteme/trueenergy-as | `docs/drittsysteme/trueenergy-as.md` |
| https://dok.smart-me.com/drittsysteme/whatwatt | /drittsysteme/whatwatt | `docs/drittsysteme/whatwatt.md` |
| https://dok.smart-me.com/drittsysteme/zaehlerfreunde | /drittsysteme/zaehlerfreunde | `docs/drittsysteme/zaehlerfreunde.md` |
| https://dok.smart-me.com/drittsysteme/zerofy | /drittsysteme/zerofy | `docs/drittsysteme/zerofy.md` |
| https://dok.smart-me.com/drittsysteme/zevvy | /drittsysteme/zevvy | `docs/drittsysteme/zevvy.md` |
| https://dok.smart-me.com/home | / | `docs/index.md` |
| https://dok.smart-me.com/informationssicherheit/datensicherheit | /informationssicherheit/datensicherheit | `docs/informationssicherheit/datensicherheit.md` |
| https://dok.smart-me.com/informationssicherheit/public-key-signature | /informationssicherheit/public-key-signature | `docs/informationssicherheit/public-key-signature.md` |
| https://dok.smart-me.com/informationssicherheit/standardantworten | /informationssicherheit/standardantworten | `docs/informationssicherheit/standardantworten.md` |
| https://dok.smart-me.com/informationssicherheit/zählertransaktionen | /informationssicherheit/zählertransaktionen | `docs/informationssicherheit/zählertransaktionen.md` |
| https://dok.smart-me.com/konfiguration/applab | /konfiguration/applab | `docs/konfiguration/applab.md` |
| https://dok.smart-me.com/konfiguration/benutzerkonfiguration | /konfiguration/benutzerkonfiguration | `docs/konfiguration/benutzerkonfiguration.md` |
| https://dok.smart-me.com/konfiguration/billing | /konfiguration/billing | `docs/konfiguration/billing/index.md` |
| https://dok.smart-me.com/konfiguration/billing/mieterstrom | /konfiguration/billing/mieterstrom | `docs/konfiguration/billing/mieterstrom/index.md` |
| https://dok.smart-me.com/konfiguration/billing/mieterstrom/mkd3-messkonzept-nicht-teilnehmer | /konfiguration/billing/mieterstrom/mkd3-messkonzept-nicht-teilnehmer | `docs/konfiguration/billing/mieterstrom/mkd3-messkonzept-nicht-teilnehmer.md` |
| https://dok.smart-me.com/konfiguration/billing/mieterstrom/standard-messkonzept | /konfiguration/billing/mieterstrom/standard-messkonzept | `docs/konfiguration/billing/mieterstrom/standard-messkonzept.md` |
| https://dok.smart-me.com/konfiguration/billing/mwst-zev-nebenkosten | /konfiguration/billing/mwst-zev-nebenkosten | `docs/konfiguration/billing/mwst-zev-nebenkosten.md` |
| https://dok.smart-me.com/konfiguration/billing/stromtarife-definieren | /konfiguration/billing/stromtarife-definieren | `docs/konfiguration/billing/stromtarife-definieren/index.md` |
| https://dok.smart-me.com/konfiguration/billing/stromtarife-definieren/stromtarif-rechner | /konfiguration/billing/stromtarife-definieren/stromtarif-rechner | `docs/konfiguration/billing/stromtarife-definieren/stromtarif-rechner.md` |
| https://dok.smart-me.com/konfiguration/billing/vewa-abrechnung | /konfiguration/billing/vewa-abrechnung | `docs/konfiguration/billing/vewa-abrechnung.md` |
| https://dok.smart-me.com/konfiguration/billing/virtuelle-zaehler | /konfiguration/billing/virtuelle-zaehler | `docs/konfiguration/billing/virtuelle-zaehler.md` |
| https://dok.smart-me.com/konfiguration/firmware-update | /konfiguration/firmware-update | `docs/konfiguration/firmware-update.md` |
| https://dok.smart-me.com/konfiguration/inbetriebnahme | /konfiguration/inbetriebnahme | `docs/konfiguration/inbetriebnahme/index.md` |
| https://dok.smart-me.com/konfiguration/inbetriebnahme/inbetriebnahme-lora | /konfiguration/inbetriebnahme/inbetriebnahme-lora | `docs/konfiguration/inbetriebnahme/inbetriebnahme-lora/index.md` |
| https://dok.smart-me.com/konfiguration/inbetriebnahme/inbetriebnahme-lora/dragino-lps8n | /konfiguration/inbetriebnahme/inbetriebnahme-lora/dragino-lps8n | `docs/konfiguration/inbetriebnahme/inbetriebnahme-lora/dragino-lps8n.md` |
| https://dok.smart-me.com/konfiguration/inbetriebnahme/inbetriebnahme-lora/kerlink-wirnet-ifemtocell-evolution | /konfiguration/inbetriebnahme/inbetriebnahme-lora/kerlink-wirnet-ifemtocell-evolution | `docs/konfiguration/inbetriebnahme/inbetriebnahme-lora/kerlink-wirnet-ifemtocell-evolution.md` |
| https://dok.smart-me.com/konfiguration/inbetriebnahme/inbetriebnahme-lora/milesight-ug56-868mhz | /konfiguration/inbetriebnahme/inbetriebnahme-lora/milesight-ug56-868mhz | `docs/konfiguration/inbetriebnahme/inbetriebnahme-lora/milesight-ug56-868mhz.md` |
| https://dok.smart-me.com/konfiguration/inbetriebnahme/inbetriebnahme-lora/sensecap-m2 | /konfiguration/inbetriebnahme/inbetriebnahme-lora/sensecap-m2 | `docs/konfiguration/inbetriebnahme/inbetriebnahme-lora/sensecap-m2.md` |
| https://dok.smart-me.com/konfiguration/inbetriebnahme/inbetriebnahme-lora/wisgate-edge-lite-2 | /konfiguration/inbetriebnahme/inbetriebnahme-lora/wisgate-edge-lite-2 | `docs/konfiguration/inbetriebnahme/inbetriebnahme-lora/wisgate-edge-lite-2.md` |
| https://dok.smart-me.com/konfiguration/inbetriebnahme/pico-konfiguration | /konfiguration/inbetriebnahme/pico-konfiguration | `docs/konfiguration/inbetriebnahme/pico-konfiguration.md` |
| https://dok.smart-me.com/konfiguration/inbetriebnahme/zaehler-loeschen | /konfiguration/inbetriebnahme/zaehler-loeschen | `docs/konfiguration/inbetriebnahme/zaehler-loeschen.md` |
| https://dok.smart-me.com/konfiguration/installer-app-anleitung | /konfiguration/installer-app-anleitung | `docs/konfiguration/installer-app-anleitung.md` |
| https://dok.smart-me.com/konfiguration/multilevel-lastmanagement | /konfiguration/multilevel-lastmanagement | `docs/konfiguration/multilevel-lastmanagement/index.md` |
| https://dok.smart-me.com/konfiguration/multilevel-lastmanagement/mlm-konfigurieren | /konfiguration/multilevel-lastmanagement/mlm-konfigurieren | `docs/konfiguration/multilevel-lastmanagement/mlm-konfigurieren.md` |
| https://dok.smart-me.com/konfiguration/my-dashboards | /konfiguration/my-dashboards | `docs/konfiguration/my-dashboards.md` |
| https://dok.smart-me.com/konfiguration/ordnerkonfiguration | /konfiguration/ordnerkonfiguration | `docs/konfiguration/ordnerkonfiguration/index.md` |
| https://dok.smart-me.com/konfiguration/ordnerkonfiguration/nur-strom | /konfiguration/ordnerkonfiguration/nur-strom | `docs/konfiguration/ordnerkonfiguration/nur-strom.md` |
| https://dok.smart-me.com/konfiguration/ordnerkonfiguration/strom-und-eine-heizung | /konfiguration/ordnerkonfiguration/strom-und-eine-heizung | `docs/konfiguration/ordnerkonfiguration/strom-und-eine-heizung.md` |
| https://dok.smart-me.com/konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen | /konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen | `docs/konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen.md` |
| https://dok.smart-me.com/konfiguration/technische-tools | /konfiguration/technische-tools | `docs/konfiguration/technische-tools.md` |
| https://dok.smart-me.com/konfiguration/visualisierung | /konfiguration/visualisierung | `docs/konfiguration/visualisierung.md` |
| https://dok.smart-me.com/konfiguration/wenndann-aktionen | /konfiguration/wenndann-aktionen | `docs/konfiguration/wenndann-aktionen/index.md` |
| https://dok.smart-me.com/konfiguration/wenndann-aktionen/alarme | /konfiguration/wenndann-aktionen/alarme | `docs/konfiguration/wenndann-aktionen/alarme.md` |
| https://dok.smart-me.com/konfiguration/wenndann-aktionen/beispiel-boilersteuerung | /konfiguration/wenndann-aktionen/beispiel-boilersteuerung | `docs/konfiguration/wenndann-aktionen/beispiel-boilersteuerung.md` |
| https://dok.smart-me.com/konfiguration/wenndann-aktionen/ereignisaktionen | /konfiguration/wenndann-aktionen/ereignisaktionen | `docs/konfiguration/wenndann-aktionen/ereignisaktionen.md` |
| https://dok.smart-me.com/konfiguration/wenndann-aktionen/tarifzeiten-definieren | /konfiguration/wenndann-aktionen/tarifzeiten-definieren | `docs/konfiguration/wenndann-aktionen/tarifzeiten-definieren.md` |
| https://dok.smart-me.com/kontakt | /kontakt | `docs/kontakt.md` |
| https://dok.smart-me.com/news/app-release-notes | /news/app-release-notes | `docs/news/app-release-notes.md` |
| https://dok.smart-me.com/news/firmware-release-notes | /news/firmware-release-notes | `docs/news/firmware-release-notes.md` |
| https://dok.smart-me.com/news/status | /news/status | `docs/news/status/index.md` |
| https://dok.smart-me.com/news/status/pico-4g-ausfall | /news/status/pico-4g-ausfall | `docs/news/status/pico-4g-ausfall.md` |
| https://dok.smart-me.com/nutzeranleitungen/mieter | /nutzeranleitungen/mieter | `docs/nutzeranleitungen/mieter.md` |
| https://dok.smart-me.com/nutzeranleitungen/verwalter | /nutzeranleitungen/verwalter | `docs/nutzeranleitungen/verwalter.md` |
| https://dok.smart-me.com/planung | /planung | `docs/planung/index.md` |
| https://dok.smart-me.com/planung/Messkonzept-Notstromloesung | /planung/Messkonzept-Notstromloesung | `docs/planung/Messkonzept-Notstromloesung.md` |
| https://dok.smart-me.com/planung/Projektkonfigurator | /planung/Projektkonfigurator | `docs/planung/Projektkonfigurator.md` |
| https://dok.smart-me.com/planung/abrechnung-vorbereiten | /planung/abrechnung-vorbereiten | `docs/planung/abrechnung-vorbereiten.md` |
| https://dok.smart-me.com/planung/cloud-lizenzen | /planung/cloud-lizenzen | `docs/planung/cloud-lizenzen.md` |
| https://dok.smart-me.com/planung/e-mobility | /planung/e-mobility | `docs/planung/e-mobility.md` |
| https://dok.smart-me.com/planung/elektromobilitaet | /planung/elektromobilitaet | `docs/planung/elektromobilitaet/index.md` |
| https://dok.smart-me.com/planung/elektromobilitaet/drittanbieter-zev-und-pico | /planung/elektromobilitaet/drittanbieter-zev-und-pico | `docs/planung/elektromobilitaet/drittanbieter-zev-und-pico.md` |
| https://dok.smart-me.com/planung/elektromobilitaet/smart-me-zev-und-fremdstationen | /planung/elektromobilitaet/smart-me-zev-und-fremdstationen | `docs/planung/elektromobilitaet/smart-me-zev-und-fremdstationen.md` |
| https://dok.smart-me.com/planung/elektromobilitaet/smart-me-zev-und-pico | /planung/elektromobilitaet/smart-me-zev-und-pico | `docs/planung/elektromobilitaet/smart-me-zev-und-pico.md` |
| https://dok.smart-me.com/planung/internetverbindung | /planung/internetverbindung | `docs/planung/internetverbindung.md` |
| https://dok.smart-me.com/planung/investitionsrechner | /planung/investitionsrechner | `docs/planung/investitionsrechner.md` |
| https://dok.smart-me.com/planung/leg-lokale-energie-gemeinschaft | /planung/leg-lokale-energie-gemeinschaft | `docs/planung/leg-lokale-energie-gemeinschaft.md` |
| https://dok.smart-me.com/planung/messkonzept-produzenten-hinter-haeuser | /planung/messkonzept-produzenten-hinter-haeuser | `docs/planung/messkonzept-produzenten-hinter-haeuser.md` |
| https://dok.smart-me.com/planung/minergie | /planung/minergie | `docs/planung/minergie.md` |
| https://dok.smart-me.com/planung/vertrag-rechtliches | /planung/vertrag-rechtliches | `docs/planung/vertrag-rechtliches.md` |
| https://dok.smart-me.com/planung/virtuelle-zev-vzev | /planung/virtuelle-zev-vzev | `docs/planung/virtuelle-zev-vzev.md` |
| https://dok.smart-me.com/planung/zertifizierungen | /planung/zertifizierungen | `docs/planung/zertifizierungen.md` |
| https://dok.smart-me.com/planung/zev-zusammenschluss-zum-eigenverbrauch | /planung/zev-zusammenschluss-zum-eigenverbrauch | `docs/planung/zev-zusammenschluss-zum-eigenverbrauch.md` |
| https://dok.smart-me.com/produkte | /produkte | `docs/produkte/index.md` |
| https://dok.smart-me.com/produkte/1-phasen-zaehler | /produkte/1-phasen-zaehler | `docs/produkte/1-phasen-zaehler.md` |
| https://dok.smart-me.com/produkte/1-phasen-zaehler-32a | /produkte/1-phasen-zaehler-32a | `docs/produkte/1-phasen-zaehler-32a.md` |
| https://dok.smart-me.com/produkte/3-phasen-zähler | /produkte/3-phasen-zähler | `docs/produkte/3-phasen-zähler.md` |
| https://dok.smart-me.com/produkte/Telstar-CT | /produkte/Telstar-CT | `docs/produkte/Telstar-CT.md` |
| https://dok.smart-me.com/produkte/eingestellte-produkte | /produkte/eingestellte-produkte | `docs/produkte/eingestellte-produkte.md` |
| https://dok.smart-me.com/produkte/kamstrup-modul | /produkte/kamstrup-modul | `docs/produkte/kamstrup-modul.md` |
| https://dok.smart-me.com/produkte/landis-gyr-modul | /produkte/landis-gyr-modul | `docs/produkte/landis-gyr-modul.md` |
| https://dok.smart-me.com/produkte/lora-gateway-software | /produkte/lora-gateway-software | `docs/produkte/lora-gateway-software.md` |
| https://dok.smart-me.com/produkte/m-bus-gateway | /produkte/m-bus-gateway | `docs/produkte/m-bus-gateway.md` |
| https://dok.smart-me.com/produkte/nimbus | /produkte/nimbus | `docs/produkte/nimbus.md` |
| https://dok.smart-me.com/produkte/pico-ladestation | /produkte/pico-ladestation | `docs/produkte/pico-ladestation/index.md` |
| https://dok.smart-me.com/produkte/pico-ladestation-exa | /produkte/pico-ladestation-exa | `docs/produkte/pico-ladestation-exa.md` |
| https://dok.smart-me.com/produkte/pico-ladestation/installationsplanung | /produkte/pico-ladestation/installationsplanung | `docs/produkte/pico-ladestation/installationsplanung.md` |
| https://dok.smart-me.com/produkte/pico-ladestation/materialempfehlung-rcd-typ-a | /produkte/pico-ladestation/materialempfehlung-rcd-typ-a | `docs/produkte/pico-ladestation/materialempfehlung-rcd-typ-a.md` |
| https://dok.smart-me.com/produkte/pico-ladestation/pico-display | /produkte/pico-ladestation/pico-display | `docs/produkte/pico-ladestation/pico-display.md` |
| https://dok.smart-me.com/produkte/pico-ladestation/pico-lastmanagement | /produkte/pico-ladestation/pico-lastmanagement | `docs/produkte/pico-ladestation/pico-lastmanagement.md` |
| https://dok.smart-me.com/produkte/pico-ladestation/pico-standfuss | /produkte/pico-ladestation/pico-standfuss | `docs/produkte/pico-ladestation/pico-standfuss.md` |
| https://dok.smart-me.com/produkte/pico-ladestation/pico-zubehör | /produkte/pico-ladestation/pico-zubehör | `docs/produkte/pico-ladestation/pico-zubehör.md` |
| https://dok.smart-me.com/produkte/plug | /produkte/plug | `docs/produkte/plug.md` |
| https://dok.smart-me.com/produkte/smart-eye | /produkte/smart-eye | `docs/produkte/smart-eye.md` |
| https://dok.smart-me.com/produkte/telstar | /produkte/telstar | `docs/produkte/telstar.md` |
| https://dok.smart-me.com/rma-antragsformulare | /rma-antragsformulare | `docs/rma-antragsformulare.md` |
| https://dok.smart-me.com/schnittstellen/ai-connector | /schnittstellen/ai-connector | `docs/schnittstellen/ai-connector.md` |
| https://dok.smart-me.com/schnittstellen/api | /schnittstellen/api | `docs/schnittstellen/api.md` |
| https://dok.smart-me.com/schnittstellen/auto-export | /schnittstellen/auto-export | `docs/schnittstellen/auto-export.md` |
| https://dok.smart-me.com/schnittstellen/dta-vhka-files | /schnittstellen/dta-vhka-files | `docs/schnittstellen/dta-vhka-files/index.md` |
| https://dok.smart-me.com/schnittstellen/dta-vhka-files/AbaImmo | /schnittstellen/dta-vhka-files/AbaImmo | `docs/schnittstellen/dta-vhka-files/AbaImmo.md` |
| https://dok.smart-me.com/schnittstellen/dta-vhka-files/Garaio-REM | /schnittstellen/dta-vhka-files/Garaio-REM | `docs/schnittstellen/dta-vhka-files/Garaio-REM.md` |
| https://dok.smart-me.com/schnittstellen/dta-vhka-files/Immotop2 | /schnittstellen/dta-vhka-files/Immotop2 | `docs/schnittstellen/dta-vhka-files/Immotop2.md` |
| https://dok.smart-me.com/schnittstellen/ebix-datenimport | /schnittstellen/ebix-datenimport | `docs/schnittstellen/ebix-datenimport.md` |
| https://dok.smart-me.com/schnittstellen/ein_und_ausgaenge | /schnittstellen/ein_und_ausgaenge | `docs/schnittstellen/ein_und_ausgaenge.md` |
| https://dok.smart-me.com/schnittstellen/ladestation-15-minuten-import | /schnittstellen/ladestation-15-minuten-import | `docs/schnittstellen/ladestation-15-minuten-import.md` |
| https://dok.smart-me.com/schnittstellen/minergie-exporter | /schnittstellen/minergie-exporter | `docs/schnittstellen/minergie-exporter.md` |
| https://dok.smart-me.com/schnittstellen/modbus-tcp | /schnittstellen/modbus-tcp | `docs/schnittstellen/modbus-tcp.md` |
| https://dok.smart-me.com/schnittstellen/p1-schnittstelle | /schnittstellen/p1-schnittstelle | `docs/schnittstellen/p1-schnittstelle.md` |
| https://dok.smart-me.com/schnittstellen/swisseldex-sdat-import | /schnittstellen/swisseldex-sdat-import | `docs/schnittstellen/swisseldex-sdat-import.md` |
| https://dok.smart-me.com/stoerungsbehebung/auto-export-fehler | /stoerungsbehebung/auto-export-fehler | `docs/stoerungsbehebung/auto-export-fehler.md` |
| https://dok.smart-me.com/stoerungsbehebung/billing-fehlermeldungen | /stoerungsbehebung/billing-fehlermeldungen | `docs/stoerungsbehebung/billing-fehlermeldungen.md` |
| https://dok.smart-me.com/stoerungsbehebung/csv-zahlen-richtig-formatieren | /stoerungsbehebung/csv-zahlen-richtig-formatieren | `docs/stoerungsbehebung/csv-zahlen-richtig-formatieren.md` |
| https://dok.smart-me.com/stoerungsbehebung/differenzen-mit-dem-ew | /stoerungsbehebung/differenzen-mit-dem-ew | `docs/stoerungsbehebung/differenzen-mit-dem-ew.md` |
| https://dok.smart-me.com/stoerungsbehebung/mbus-gateway-stoerungen | /stoerungsbehebung/mbus-gateway-stoerungen | `docs/stoerungsbehebung/mbus-gateway-stoerungen.md` |
| https://dok.smart-me.com/stoerungsbehebung/multilevel-lastmanagement-fehlermeldung | /stoerungsbehebung/multilevel-lastmanagement-fehlermeldung | `docs/stoerungsbehebung/multilevel-lastmanagement-fehlermeldung.md` |
| https://dok.smart-me.com/stoerungsbehebung/pico-fehler | /stoerungsbehebung/pico-fehler | `docs/stoerungsbehebung/pico-fehler.md` |
| https://dok.smart-me.com/stoerungsbehebung/systemgesundheit | /stoerungsbehebung/systemgesundheit | `docs/stoerungsbehebung/systemgesundheit.md` |
| https://dok.smart-me.com/stoerungsbehebung/telstar-ct-inbetriebnahmefehler | /stoerungsbehebung/telstar-ct-inbetriebnahmefehler | `docs/stoerungsbehebung/telstar-ct-inbetriebnahmefehler.md` |
| https://dok.smart-me.com/stoerungsbehebung/virtueller-zähler-fehler | /stoerungsbehebung/virtueller-zähler-fehler | `docs/stoerungsbehebung/virtueller-zähler-fehler.md` |
| https://dok.smart-me.com/stoerungsbehebung/visualisierungsfehler | /stoerungsbehebung/visualisierungsfehler | `docs/stoerungsbehebung/visualisierungsfehler.md` |
| https://dok.smart-me.com/stoerungsbehebung/zaehler-offline | /stoerungsbehebung/zaehler-offline | `docs/stoerungsbehebung/zaehler-offline.md` |
| https://dok.smart-me.com/support-ki-agent | /support-ki-agent | `docs/support-ki-agent.md` |

## Manuell prüfen

### Alt-Texte für Bilder

Google Sites hat zu **keinem** der 972 Bilder einen Alt-Text
gespeichert. Statt Beschreibungen zu erfinden, tragen alle Bilder einen
sachlichen Platzhalter der Form `<Seitentitel> – Abbildung <n>`.
Für Barrierefreiheit und AI-Nutzung sollten sie nach und nach durch echte
Beschreibungen ersetzt werden.

### Tote Links im Original

Diese Seiten sind auf der alten Site verlinkt, aber nicht abrufbar. Sie
wurden **nicht** migriert; die Links zeigen weiterhin auf die alte Domain.

| Verlinkter Pfad | Fehler |
| --- | --- |
| `/planung/überbauung` | HTTP 404 |

### Interne Links ohne Ziel

| Seite | Hinweis |
| --- | --- |
| `/planung/elektromobilitaet/smart-me-zev-und-fremdstationen` | Interner Link /planung/überbauung zeigt auf keine migrierte Seite. |
| `/produkte/m-bus-gateway` | Sprungmarke #h.p_AJPOtphxnyrq auf /produkte/m-bus-gateway zeigt auf keine Überschrift. |
| `/produkte/m-bus-gateway` | Sprungmarke #h.p_AJPOtphxnyrq auf /produkte/m-bus-gateway zeigt auf keine Überschrift. |

### Mehrere H1 pro Seite

Google Sites erlaubt mehrere H1 auf einer Seite. Übernommen wurde: die
erste H1 ist der Seitentitel, alle weiteren wurden zu H2 herabgestuft.
Bei diesen Seiten lohnt ein Blick, ob die Gliederung so gemeint ist.

| Seite | Anzahl H1 |
| --- | --- |
| `/drittsysteme/loxone` | 3 |
| `/home` | 4 |
| `/konfiguration/billing` | 2 |
| `/konfiguration/billing/stromtarife-definieren` | 3 |
| `/konfiguration/inbetriebnahme/inbetriebnahme-lora/dragino-lps8n` | 2 |
| `/konfiguration/inbetriebnahme/inbetriebnahme-lora/kerlink-wirnet-ifemtocell-evolution` | 2 |
| `/konfiguration/inbetriebnahme/inbetriebnahme-lora/milesight-ug56-868mhz` | 2 |
| `/konfiguration/inbetriebnahme/inbetriebnahme-lora/sensecap-m2` | 2 |
| `/konfiguration/inbetriebnahme/inbetriebnahme-lora/wisgate-edge-lite-2` | 2 |
| `/konfiguration/installer-app-anleitung` | 2 |
| `/planung` | 3 |
| `/planung/leg-lokale-energie-gemeinschaft` | 2 |
| `/produkte/pico-ladestation/pico-lastmanagement` | 2 |
| `/schnittstellen/ai-connector` | 2 |
| `/schnittstellen/api` | 2 |
| `/schnittstellen/dta-vhka-files/AbaImmo` | 2 |

### Seiten ohne H1

Der Titel stammt hier aus der alten Navigation bzw. dem `<title>`-Tag.

| Seite |
| --- |
| `/news/status` |
| `/planung/Projektkonfigurator` |
| `/support-ki-agent` |

### Seiten ohne `description`

Diese Seiten haben zu wenig Fliesstext, um daraus einen Beschreibungssatz
abzuleiten (meist reine Einbettungen oder Verweisseiten).

| Seite |
| --- |
| `/konfiguration/billing/stromtarife-definieren/stromtarif-rechner` |
| `/planung/Projektkonfigurator` |
| `/planung/investitionsrechner` |
| `/support-ki-agent` |

## Bewusste Entscheidungen bei der Konvertierung

- **Google-Sites-Rahmenwerk entfernt**: Navigation, Kopf- und Fusszeile,
  Suchleiste, der seiteninterne Inhaltsverzeichnis-Block sowie der
  `English`-Sprachumschalter. Letzteren ersetzt das Locale-Dropdown.
- **"Zurück zu …"-Schaltflächen entfernt**: reine Navigationshilfen, die
  Docusaurus über Sidebar und Breadcrumbs abbildet. Alle übrigen
  Schaltflächen wurden zu normalen Links.
- **Überschriften normalisiert**: eine H1 pro Seite (der Titel steht im
  Frontmatter und wird von Docusaurus gerendert), weitere H1 wurden zu H2.
- **Code-Blöcke**: Google Sites kennt kein `<pre>`; Code steht dort als Folge
  von Absätzen in `Source Code Pro`. Solche Läufe wurden zu Fenced Code
  Blocks zusammengefasst. Eine Sprache wurde bewusst **nicht** geraten.
- **Videos**: YouTube-`iframe`s wurden zur `<Video>`-Komponente
  (`src/components/Video`), die das Seitenverhältnis hält und
  `youtube-nocookie.com` verwendet.
- **Bilder**: liegen unter `static/img/<seiten-slug>/` und werden über
  `/img/…` referenziert. Die Original-URLs von Google sind kurzlebig
  signiert und wären nach wenigen Minuten tot.
- **Links**: Google-Redirects (`google.com/url?q=…`) wurden aufgelöst,
  interne Links auf die neuen Pfade umgeschrieben, Sprungmarken (`#h.…`)
  auf die von Docusaurus erzeugten Anker – auch über Seitengrenzen hinweg.
- **Tabellen**: im Quell-Wiki gibt es keine einzige HTML-Tabelle, es war
  also nichts zu konvertieren.
- **Sidebar**: Reihenfolge und Beschriftungen stammen aus der Navigation der
  alten Site. Seiten, die dort nicht verlinkt sind, stehen am Ende ihrer
  Gruppe. Die Gruppen `Konfiguration`, `Stoerungsbehebung`, `Schnittstellen`,
  `Nutzeranleitungen`, `Informationssicherheit` und `News` hatten auf Google
  Sites keine eigene Seite (HTTP 404) – sie sind reine Kategorien.
