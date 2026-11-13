import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Bildet die Struktur des bisherigen Google-Sites-Wikis ab.
 * Erzeugt von scripts/migration/convert.ts – Reihenfolge und Beschriftungen
 * stammen aus der Navigation von dok.smart-me.com.
 *
 * Zwei Filter hängen an den Einträgen, beide in `customProps`:
 *
 *   laender: ['ch']      – eine Menge. Ohne Angabe gilt ein Eintrag überall.
 *   rolle: 'verwalter'   – eine Schwelle: die niedrigste Rolle, die ihn sehen
 *                          darf (mieter < verwalter < abrechnung <
 *                          installateur). Ohne Angabe gehört er dem
 *                          Installateur, der ohnehin alles sieht.
 *
 * Die Rolle vererbt sich nach unten, und ein Oberpunkt erscheint, sobald ein
 * Eintrag darunter für die gewählte Rolle sichtbar ist — deshalb steht die
 * Angabe hier nur dort, wo sie etwas öffnet. Ausgewertet wird beides in
 * `src/theme/DocSidebarItem`; die Hintergründe stehen in `src/rollen` und
 * `src/laender`.
 */
const sidebars: SidebarsConfig = {
  wikiSidebar: [
    // Die Startseite ('index') steht bewusst nicht in dieser Liste: Sie fragt
    // nur nach dem Land und führt dann auf eine der beiden Einstiegsseiten –
    // ein Eintrag dafür wäre ein Verweis auf eine Frage, die man gerade
    // beantwortet hat. Erreichbar bleibt sie über das Logo oben links. Damit
    // die Navigation auf ihr trotzdem steht, trägt `docs/index.md` ein
    // `displayed_sidebar: wikiSidebar`.
    //
    // Die beiden Einstiegsseiten. Wer „Alle Länder" gewählt hat, sieht beide.
    {type: 'doc', id: 'schweiz', customProps: {laender: ['ch'], rolle: 'mieter'}},
    {type: 'doc', id: 'deutschland', customProps: {laender: ['de'], rolle: 'mieter'}},
    {type: 'doc', id: 'support-ki-agent', customProps: {rolle: 'mieter'}},
    {type: 'doc', id: 'faq', customProps: {rolle: 'mieter'}},
    {
      type: 'category',
      label: 'Produkte',
      link: {type: 'doc', id: 'produkte/index'},
      items: [
        'produkte/telstar-80a',
        'produkte/telstar-ct',
        'produkte/nimbus-100a',
        {
          type: 'category',
          label: 'M-Bus Gateways',
          link: {type: 'doc', id: 'produkte/m-bus-gateway/index'},
          items: [
            'produkte/m-bus-gateway/50-standardlasten',
            'produkte/m-bus-gateway/sirius',
          ],
        },
        'produkte/lora-gateway-software',
        {
          type: 'category',
          label: 'Pico Ladestation',
          link: {type: 'doc', id: 'produkte/pico-ladestation/index'},
          items: [
            'produkte/pico-ladestation/pico-display',
            'produkte/pico-ladestation/pico-zubehoer',
            'produkte/pico-ladestation/installationsplanung',
            'produkte/pico-ladestation/pico-lastmanagement',
            'produkte/pico-ladestation/pico-standfuss',
            // Die Materialempfehlung RCD Typ-A steht bewusst nicht in der
            // Navigation: sie betrifft nur Picos mit Seriennummer vor 7002702
            // und ist von der Pico-Seite aus verlinkt – beim Sicherheitshinweis
            // und in der FAQ, also dort, wo die Frage aufkommt. Die Seite trägt
            // `displayed_sidebar: wikiSidebar` im Frontmatter, damit die
            // Navigation beim Öffnen stehen bleibt.
          ],
        },
        'produkte/1-phasen-zaehler-80a',
        // Die eingestellten Produkte stehen bewusst nicht einzeln in der
        // Navigation: 1-Phasen Zähler 32A, 3-Phasen Zähler, Kamstrup Modul,
        // Landis+Gyr Modul, Pico Ladestation exA, Plug und smart-eye sind
        // alle von dieser Übersichtsseite aus verlinkt. Damit beim Öffnen
        // trotzdem die Navigation stehen bleibt, tragen die sieben Seiten
        // `displayed_sidebar: wikiSidebar` im Frontmatter.
        'produkte/eingestellte-produkte',
      ],
    },
    {
      type: 'category',
      label: 'Planung',
      link: {type: 'doc', id: 'planung/index'},
      items: [
        {type: 'doc', id: 'planung/standard-messkonzept', customProps: {laender: ['de']}},
        {type: 'doc', id: 'planung/mkd3-messkonzept-nicht-teilnehmer', customProps: {laender: ['de']}},
        {type: 'doc', id: 'planung/investitionsrechner', customProps: {laender: ['ch']}},
        {type: 'doc', id: 'planung/projektkonfigurator', customProps: {laender: ['ch']}},
        {type: 'doc', id: 'planung/zev-zusammenschluss-zum-eigenverbrauch', customProps: {laender: ['ch']}},
        {type: 'doc', id: 'planung/virtuelle-zev-vzev', customProps: {laender: ['ch']}},
        {
          type: 'category',
          label: 'LEG - Lokale Elektrizitätsgemeinschaft',
          customProps: {laender: ['ch']},
          link: {type: 'doc', id: 'planung/leg-lokale-elektrizitaetsgemeinschaft/index'},
          items: [
            'planung/leg-lokale-elektrizitaetsgemeinschaft/leg-rechner',
          ],
        },
        {
          type: 'category',
          label: 'Elektromobilität',
          link: {type: 'doc', id: 'planung/elektromobilitaet/index'},
          items: [
            'planung/elektromobilitaet/smart-me-zev-und-pico',
            'planung/elektromobilitaet/drittanbieter-zev-und-pico',
            'planung/elektromobilitaet/smart-me-zev-und-fremdstationen',
          ],
        },
        {type: 'doc', id: 'planung/zertifizierungen-schweiz', customProps: {laender: ['ch']}},
        {type: 'doc', id: 'planung/zertifizierungen-deutschland', customProps: {laender: ['de']}},
        'planung/cloud-lizenzen',
        {type: 'doc', id: 'planung/abrechnung-vorbereiten',
         customProps: {laender: ['ch'], rolle: 'verwalter'}},
        {type: 'doc', id: 'planung/internetverbindung', customProps: {laender: ['ch']}},
        {type: 'doc', id: 'planung/internetverbindung-deutschland', customProps: {laender: ['de']}},
        {type: 'doc', id: 'planung/vertrag-rechtliches',
         customProps: {laender: ['ch'], rolle: 'verwalter'}},
        {type: 'doc', id: 'planung/messkonzept-notstromloesung', customProps: {laender: ['ch']}},
        {type: 'doc', id: 'planung/messkonzept-produzenten-hinter-haeuser', customProps: {laender: ['ch']}},
        {type: 'doc', id: 'planung/minergie', customProps: {laender: ['ch']}},
      ],
    },
    {
      type: 'category',
      label: 'Konfiguration',
      link: {type: 'doc', id: 'konfiguration/index'},
      items: [
        {
          type: 'category',
          label: 'Inbetriebnahme',
          link: {type: 'doc', id: 'konfiguration/inbetriebnahme/index'},
          items: [
            'konfiguration/inbetriebnahme/smart-me-geraete',
            {
              type: 'category',
              label: 'Inbetriebnahme LoRa',
              link: {type: 'doc', id: 'konfiguration/inbetriebnahme/inbetriebnahme-lora/index'},
              items: [
                'konfiguration/inbetriebnahme/inbetriebnahme-lora/dragino-lps8n',
                'konfiguration/inbetriebnahme/inbetriebnahme-lora/kerlink-wirnet-ifemtocell-evolution',
                'konfiguration/inbetriebnahme/inbetriebnahme-lora/milesight-ug56-868mhz',
                'konfiguration/inbetriebnahme/inbetriebnahme-lora/sensecap-m2',
                'konfiguration/inbetriebnahme/inbetriebnahme-lora/wisgate-edge-lite-2',
              ],
            },
            'konfiguration/inbetriebnahme/swisseldex',
            // Pico Konfiguration und „Zähler löschen / deaktivieren" stehen
            // bewusst nicht hier: Beide sind von den Seiten aus verlinkt, auf
            // denen die Frage aufkommt — die Pico-Konfiguration von den
            // Pico-Seiten, das Löschen aus der Ordnerkonfiguration, dem FAQ
            // und der Einstiegsseite. Sie tragen `displayed_sidebar:
            // wikiSidebar`, damit die Navigation beim Öffnen stehen bleibt.
          ],
        },
        {
          type: 'category',
          label: 'Ordnerkonfiguration',
          // Ordner anlegen und Zähler einhängen ist Sache des
          // Abrechnungsdienstleisters; die Verwaltung erbt davon nichts.
          customProps: {rolle: 'abrechnung'},
          link: {type: 'doc', id: 'konfiguration/ordnerkonfiguration/index'},
          items: [
            // Die Ordnerkonfiguration selbst gilt überall – welche Struktur
            // darunter passt, hängt am Land: ZEV in der Schweiz, Mieterstrom
            // in Deutschland.
            {type: 'doc', id: 'konfiguration/ordnerkonfiguration/nur-strom', customProps: {laender: ['ch']}},
            {type: 'doc', id: 'konfiguration/ordnerkonfiguration/strom-und-eine-heizung', customProps: {laender: ['ch']}},
            {type: 'doc', id: 'konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen', customProps: {laender: ['ch']}},
            {type: 'doc', id: 'konfiguration/ordnerkonfiguration/mieterstrom-standard', customProps: {laender: ['de']}},
            {type: 'doc', id: 'konfiguration/ordnerkonfiguration/mieterstrom-nicht-teilnehmer', customProps: {laender: ['de']}},
          ],
        },
        // Virtuelle Zähler sind Messinfrastruktur, keine Abrechnungsfunktion:
        // Sie werden auf der Zählerebene eingerichtet und erst danach in
        // Tarifen und in der Rechnungsstellung verwendet.
        'konfiguration/virtuelle-zaehler',
        {
          type: 'category',
          label: 'Wenn/Dann-Aktionen',
          link: {type: 'doc', id: 'konfiguration/wenndann-aktionen/index'},
          items: [
            'konfiguration/wenndann-aktionen/ereignisaktionen',
            'konfiguration/wenndann-aktionen/beispiel-boilersteuerung',
            'konfiguration/wenndann-aktionen/alarme',
            'konfiguration/wenndann-aktionen/tarifzeiten-definieren',
          ],
        },
        {
          type: 'category',
          label: 'Rechnungsstellung Schweiz',
          link: {type: 'doc', id: 'konfiguration/billing/index'},
          // Die ganze Kategorie gilt für die Schweiz – ZEV, VEWA, MWST. Die
          // Kennzeichnung steht am Oberpunkt, die Seiten darin erben sie.
          //
          // Dasselbe für die Rolle: Die Verwaltung führt den Betrieb –
          // Mieter, Tarife, Zahlungsdaten, VEWA, MWST und die Rechnung
          // selbst. Nur die Einrichtung dahinter gehört dem
          // Abrechnungsdienstleister und ist an den drei Seiten mit
          // `rolle: 'abrechnung'` enger gefasst.
          customProps: {laender: ['ch'], rolle: 'verwalter'},
          // Reihenfolge wie der Ablauf: Die Seiten stehen hier in genau der
          // Folge, in der die Schrittkette durch sie führt (siehe das
          // Frontmatter `naechste_schritte` und `<Ablauf>` auf der
          // Einstiegsseite). Wer links liest statt zu klicken, liest dasselbe.
          items: [
            {type: 'doc', id: 'konfiguration/billing/einstellungen',
             customProps: {rolle: 'abrechnung'}},
            {type: 'doc', id: 'konfiguration/billing/konfiguration-rechnungsstellung',
             customProps: {rolle: 'abrechnung'}},
            {type: 'doc', id: 'konfiguration/billing/zaehler-zuweisen',
             customProps: {rolle: 'abrechnung'}},
            'konfiguration/billing/zahlungsdaten-erfassen',
            'konfiguration/billing/mieterspiegel-erfassen',
            {
              type: 'category',
              label: 'Stromtarife definieren',
              link: {type: 'doc', id: 'konfiguration/billing/stromtarife-definieren/index'},
              items: [
                'konfiguration/billing/stromtarife-definieren/stromtarif-rechner',
              ],
            },
            'konfiguration/billing/sonstige-kosten',
            'konfiguration/billing/vewa-abrechnung',
            'konfiguration/billing/rechnung-erstellen',
            'konfiguration/billing/mwst-zev-nebenkosten',
          ],
        },
        {
          type: 'category',
          label: 'Rechnungsstellung Mieterstrom',
          link: {type: 'doc', id: 'konfiguration/billing-deutschland/index'},
          // Das deutsche Gegenstück: Mieterstrom nach § 42 EnWG. Wer ein
          // Land gewählt hat, sieht immer nur eine der beiden Kategorien.
          // Die Namen müssen sich unterscheiden – Docusaurus bildet aus dem
          // Label den Übersetzungsschlüssel, und zwei gleiche Labels
          // kollidieren beim Bauen der anderen Sprachen.
          //
          // Rollen wie in der Schweizer Kategorie, siehe dort.
          customProps: {laender: ['de'], rolle: 'verwalter'},
          // Reihenfolge wie der Ablauf, genau wie bei der Schweizer Kategorie.
          //
          // „Zähler zuweisen" steht bewusst zweimal in dieser Datei: Die Seite
          // gilt für beide Länder — in Deutschland folgt danach der
          // Mieterspiegel statt der IBAN, die Seite selbst ist dieselbe. Ohne
          // den Eintrag hier fehlte sie in der deutschen Navigation.
          // `leseLaender()` in plugins/schrittkette vereinigt die beiden
          // Kennzeichnungen zu ['ch', 'de'].
          items: [
            {type: 'doc', id: 'konfiguration/billing-deutschland/einstellungen',
             customProps: {rolle: 'abrechnung'}},
            {type: 'doc', id: 'konfiguration/billing-deutschland/konfiguration-rechnungsstellung',
             customProps: {rolle: 'abrechnung'}},
            {type: 'doc', id: 'konfiguration/billing/zaehler-zuweisen',
             customProps: {rolle: 'abrechnung'}},
            'konfiguration/billing-deutschland/mieterspiegel-erfassen',
            'konfiguration/billing-deutschland/stromtarife-definieren',
            'konfiguration/billing-deutschland/sonstige-kosten',
            'konfiguration/billing-deutschland/rechnung-erstellen',
          ],
        },
        // Mieterwechsel und Subaccounts: das tägliche Geschäft der
        // Verwaltung.
        {type: 'doc', id: 'konfiguration/benutzerkonfiguration', customProps: {rolle: 'verwalter'}},
        'konfiguration/visualisierung',
        'konfiguration/my-dashboards',
        {
          type: 'category',
          label: 'Multilevel Lastmanagement',
          link: {type: 'doc', id: 'konfiguration/multilevel-lastmanagement/index'},
          items: [
            'konfiguration/multilevel-lastmanagement/mlm-konfigurieren',
          ],
        },
        'konfiguration/firmware-update',
        'konfiguration/technische-tools',
        {type: 'doc', id: 'konfiguration/applab', customProps: {rolle: 'verwalter'}},
      ],
    },
    {
      type: 'category',
      label: 'Störungsbehebung',
      // Ohne Kennzeichnung bleibt der Oberpunkt beim Installateur – er
      // erscheint aber trotzdem, sobald eine Seite darin für eine andere
      // Rolle gekennzeichnet ist, und zeigt dann nur diese. Das sind die
      // fünf, die im Betrieb und beim Abrechnen aufkommen; Pico, M-Bus,
      // Telstar und Lastmanagement bleiben beim Installateur.
      items: [
        {type: 'doc', id: 'stoerungsbehebung/zaehler-offline',
         customProps: {rolle: 'verwalter'}},
        'stoerungsbehebung/pico-fehler',
        'stoerungsbehebung/multilevel-lastmanagement-fehlermeldung',
        {type: 'doc', id: 'stoerungsbehebung/billing-fehlermeldungen',
         customProps: {rolle: 'verwalter'}},
        'stoerungsbehebung/telstar-ct-inbetriebnahmefehler',
        'stoerungsbehebung/m-bus-gateway-stoerungen',
        {type: 'doc', id: 'stoerungsbehebung/differenzen-mit-dem-ew',
         customProps: {rolle: 'verwalter'}},
        'stoerungsbehebung/visualisierungsfehler',
        {type: 'doc', id: 'stoerungsbehebung/auto-export-fehler',
         customProps: {rolle: 'verwalter'}},
        'stoerungsbehebung/virtueller-zaehler-fehler',
        {type: 'doc', id: 'stoerungsbehebung/csv-zahlen-richtig-formatieren',
         customProps: {rolle: 'verwalter'}},
        'stoerungsbehebung/systemgesundheit',
      ],
    },
    {
      type: 'category',
      label: 'Drittsysteme',
      // Die ganze Kategorie, nicht nur die Abrechnungspartner darin: Die
      // Verwaltung sucht hier ihr eigenes Verwaltungsprogramm, wer
      // abrechnet zusätzlich den Wechselrichter, dessen Zahlen in der
      // Rechnung landen.
      customProps: {rolle: 'verwalter'},
      link: {type: 'doc', id: 'drittsysteme/index'},
      items: [
        'drittsysteme/nebenkostenabrechnung',
        'drittsysteme/abm-technik-service',
        'drittsysteme/askoma',
        'drittsysteme/bexio',
        'drittsysteme/clever-pv',
        'drittsysteme/digital-republic',
        'drittsysteme/egonline',
        'drittsysteme/elmoove',
        'drittsysteme/esmart',
        'drittsysteme/fairwalter',
        'drittsysteme/greenpocket',
        'drittsysteme/ibm-node-red',
        'drittsysteme/imovatec',
        'drittsysteme/limmobi',
        'drittsysteme/loxone',
        'drittsysteme/microsoft-excel',
        'drittsysteme/smartfox',
        'drittsysteme/smartred',
        'drittsysteme/solarmanager',
        'drittsysteme/soleco',
        'drittsysteme/symcon',
        'drittsysteme/switzercloud-colibird',
        'drittsysteme/trueenergy-as',
        'drittsysteme/whatwatt',
        'drittsysteme/zerofy',
        'drittsysteme/zevvy',
        'drittsysteme/zaehlerfreunde',
        'drittsysteme/piskelapp',
      ],
    },
    {
      type: 'category',
      label: 'Drittprodukte',
      link: {type: 'doc', id: 'drittprodukte/index'},
      items: [
        'drittprodukte/stromwandler',
        'drittprodukte/standfuss-fundamente',
        'drittprodukte/zaehlersteckklemmen-nimbus-100a',
      ],
    },
    {
      type: 'category',
      label: 'Schnittstellen',
      items: [
        'schnittstellen/ein-und-ausgaenge',
        {type: 'doc', id: 'schnittstellen/api', customProps: {rolle: 'verwalter'}},
        {type: 'doc', id: 'schnittstellen/ai-connector', customProps: {rolle: 'verwalter'}},
        'schnittstellen/auto-export',
        {type: 'doc', id: 'schnittstellen/ebix-datenimport', customProps: {laender: ['ch']}},
        {type: 'doc', id: 'schnittstellen/swisseldex-sdat-import', customProps: {laender: ['ch']}},
        {
          type: 'category',
          label: 'DTA-VHKA Files',
          link: {type: 'doc', id: 'schnittstellen/dta-vhka-files/index'},
          // Am Oberpunkt gesetzt: Damit verschwinden die drei Unterseiten mit.
          customProps: {laender: ['ch'], rolle: 'verwalter'},
          items: [
            'schnittstellen/dta-vhka-files/abaimmo',
            'schnittstellen/dta-vhka-files/garaio-rem',
            'schnittstellen/dta-vhka-files/immotop2',
          ],
        },
        'schnittstellen/modbus-tcp',
        'schnittstellen/ladestation-15-minuten-import',
        {type: 'doc', id: 'schnittstellen/minergie-exporter', customProps: {laender: ['ch']}},
        'schnittstellen/p1-schnittstelle',
      ],
    },
    {
      type: 'category',
      label: 'Nutzeranleitungen',
      items: [
        // Die Mieteranleitung sieht jeder – der Mieter, weil sie für ihn
        // geschrieben ist, die Verwaltung, weil sie sie ihren Mietern
        // erklärt.
        {type: 'doc', id: 'nutzeranleitungen/mieter', customProps: {rolle: 'mieter'}},
        {type: 'doc', id: 'nutzeranleitungen/verwalter', customProps: {rolle: 'verwalter'}},
      ],
    },
    {
      type: 'category',
      label: 'Informationssicherheit',
      customProps: {rolle: 'abrechnung'},
      items: [
        'informationssicherheit/datensicherheit',
        'informationssicherheit/zaehlertransaktionen',
        'informationssicherheit/public-key-signature',
        'informationssicherheit/standardantworten',
      ],
    },
    {type: 'doc', id: 'rma-antragsformular-schweiz', customProps: {laender: ['ch']}},
    {type: 'doc', id: 'rma-antragsformular-deutschland', customProps: {laender: ['de']}},
    {
      type: 'category',
      label: 'News',
      // Für alle, Firmware-Meldungen eingeschlossen: Wer eine Störung
      // sucht, sucht sie in jeder Rolle.
      customProps: {rolle: 'mieter'},
      items: [
        'news/firmware-release-notes',
        'news/app-release-notes',
        // „Kommunikationsunterbruch Pico über 4G" steht bewusst nicht in der
        // Navigation: Die Seite gehört zu einer einzelnen Störung und ist von
        // der Statusseite aus verlinkt – dort, wo die Störung beschrieben
        // wird. Damit bleibt die Navigation frei von Einträgen, die nur so
        // lange etwas bedeuten wie die Störung dauert. Die Seite ist weiterhin
        // über die Suche und ihren Link erreichbar.
        //
        // Dadurch hat die Statusseite keine Unterseiten mehr und steht hier
        // als einfacher Eintrag statt als Oberpunkt.
        'news/status/index',
      ],
    },
    {type: 'doc', id: 'kontakt-schweiz', customProps: {laender: ['ch'], rolle: 'mieter'}},
    {type: 'doc', id: 'kontakt-deutschland', customProps: {laender: ['de'], rolle: 'mieter'}},
  ],
};

export default sidebars;
