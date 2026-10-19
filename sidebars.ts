import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Bildet die Struktur des bisherigen Google-Sites-Wikis ab.
 * Erzeugt von scripts/migration/convert.ts – Reihenfolge und Beschriftungen
 * stammen aus der Navigation von dok.smart-me.com.
 */
const sidebars: SidebarsConfig = {
  wikiSidebar: [
    'index',
    // Die beiden Einstiegsseiten. Die Startseite ('index') fragt nur nach dem
    // Land und führt dann hierhin; wer „Alle Länder" gewählt hat, sieht beide.
    {type: 'doc', id: 'schweiz', customProps: {laender: ['ch']}},
    {type: 'doc', id: 'deutschland', customProps: {laender: ['de']}},
    'support-ki-agent',
    'faq',
    {
      type: 'category',
      label: 'Produkte',
      link: {type: 'doc', id: 'produkte/index'},
      items: [
        'produkte/telstar',
        'produkte/Telstar-CT',
        'produkte/nimbus',
        'produkte/m-bus-gateway',
        'produkte/lora-gateway-software',
        {
          type: 'category',
          label: 'Pico Ladestation',
          link: {type: 'doc', id: 'produkte/pico-ladestation/index'},
          items: [
            'produkte/pico-ladestation/pico-display',
            'produkte/pico-ladestation/pico-zubehör',
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
        'produkte/1-phasen-zaehler',
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
        {type: 'doc', id: 'planung/Projektkonfigurator', customProps: {laender: ['ch']}},
        {type: 'doc', id: 'planung/zev-zusammenschluss-zum-eigenverbrauch', customProps: {laender: ['ch']}},
        {type: 'doc', id: 'planung/virtuelle-zev-vzev', customProps: {laender: ['ch']}},
        {
          type: 'category',
          label: 'LEG - Lokale Elektrizitätsgemeinschaft',
          customProps: {laender: ['ch']},
          link: {type: 'doc', id: 'planung/leg-lokale-elektrizitätsgemeinschaft/index'},
          items: [
            'planung/leg-lokale-elektrizitätsgemeinschaft/leg-rechner',
          ],
        },
        {
          type: 'category',
          label: 'Elektromobilität',
          link: {type: 'doc', id: 'planung/elektromobilitaet/index'},
          items: [
            'planung/elektromobilitaet/drittanbieter-zev-und-pico',
            'planung/elektromobilitaet/smart-me-zev-und-fremdstationen',
            'planung/elektromobilitaet/smart-me-zev-und-pico',
          ],
        },
        {type: 'doc', id: 'planung/zertifizierungen', customProps: {laender: ['ch']}},
        {type: 'doc', id: 'planung/zertifizierungen-deutschland', customProps: {laender: ['de']}},
        'planung/cloud-lizenzen',
        {type: 'doc', id: 'planung/abrechnung-vorbereiten', customProps: {laender: ['ch']}},
        {type: 'doc', id: 'planung/internetverbindung', customProps: {laender: ['ch']}},
        {type: 'doc', id: 'planung/vertrag-rechtliches', customProps: {laender: ['ch']}},
        {type: 'doc', id: 'planung/Messkonzept-Notstromloesung', customProps: {laender: ['ch']}},
        {type: 'doc', id: 'planung/messkonzept-produzenten-hinter-haeuser', customProps: {laender: ['ch']}},
        {type: 'doc', id: 'planung/minergie', customProps: {laender: ['ch']}},
      ],
    },
    {
      type: 'category',
      label: 'Konfiguration',
      items: [
        {
          type: 'category',
          label: 'Inbetriebnahme',
          link: {type: 'doc', id: 'konfiguration/inbetriebnahme/index'},
          items: [
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
            'konfiguration/inbetriebnahme/pico-konfiguration',
            'konfiguration/inbetriebnahme/zaehler-loeschen',
          ],
        },
        {
          type: 'category',
          label: 'Ordnerkonfiguration',
          link: {type: 'doc', id: 'konfiguration/ordnerkonfiguration/index'},
          items: [
            'konfiguration/ordnerkonfiguration/nur-strom',
            'konfiguration/ordnerkonfiguration/strom-und-eine-heizung',
            'konfiguration/ordnerkonfiguration/strom-und-mehrere-heizungen',
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
          label: 'Rechnungsstellung',
          link: {type: 'doc', id: 'konfiguration/billing/index'},
          items: [
            {
              type: 'category',
              label: 'Stromtarife definieren',
              link: {type: 'doc', id: 'konfiguration/billing/stromtarife-definieren/index'},
              items: [
                'konfiguration/billing/stromtarife-definieren/stromtarif-rechner',
              ],
            },
            {type: 'doc', id: 'konfiguration/billing/vewa-abrechnung', customProps: {laender: ['ch']}},
            {type: 'doc', id: 'konfiguration/billing/mwst-zev-nebenkosten', customProps: {laender: ['ch']}},
            {
              type: 'doc',
              id: 'konfiguration/billing/mieterstrom/index',
              label: 'Mieterstrom',
              customProps: {laender: ['de']},
            },
          ],
        },
        'konfiguration/benutzerkonfiguration',
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
        'konfiguration/applab',
        'konfiguration/installer-app-anleitung',
      ],
    },
    {
      type: 'category',
      label: 'Stoerungsbehebung',
      items: [
        'stoerungsbehebung/zaehler-offline',
        'stoerungsbehebung/pico-fehler',
        'stoerungsbehebung/multilevel-lastmanagement-fehlermeldung',
        'stoerungsbehebung/billing-fehlermeldungen',
        'stoerungsbehebung/telstar-ct-inbetriebnahmefehler',
        'stoerungsbehebung/mbus-gateway-stoerungen',
        'stoerungsbehebung/differenzen-mit-dem-ew',
        'stoerungsbehebung/visualisierungsfehler',
        'stoerungsbehebung/auto-export-fehler',
        'stoerungsbehebung/virtueller-zähler-fehler',
        'stoerungsbehebung/csv-zahlen-richtig-formatieren',
        'stoerungsbehebung/systemgesundheit',
      ],
    },
    {
      type: 'category',
      label: 'Drittsysteme',
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
        'drittprodukte/Stromwandler',
        'drittprodukte/standfuss-fundamente',
        'drittprodukte/zaehlersteckklemmen-nimbus-100A',
      ],
    },
    {
      type: 'category',
      label: 'Schnittstellen',
      items: [
        'schnittstellen/ein_und_ausgaenge',
        'schnittstellen/api',
        'schnittstellen/ai-connector',
        'schnittstellen/auto-export',
        'schnittstellen/ebix-datenimport',
        'schnittstellen/swisseldex-sdat-import',
        {
          type: 'category',
          label: 'DTA-VHKA Files',
          link: {type: 'doc', id: 'schnittstellen/dta-vhka-files/index'},
          items: [
            'schnittstellen/dta-vhka-files/AbaImmo',
            'schnittstellen/dta-vhka-files/Garaio-REM',
            'schnittstellen/dta-vhka-files/Immotop2',
          ],
        },
        'schnittstellen/modbus-tcp',
        'schnittstellen/ladestation-15-minuten-import',
        'schnittstellen/minergie-exporter',
        'schnittstellen/p1-schnittstelle',
      ],
    },
    {
      type: 'category',
      label: 'Nutzeranleitungen',
      items: [
        'nutzeranleitungen/mieter',
        'nutzeranleitungen/verwalter',
      ],
    },
    {
      type: 'category',
      label: 'Informationssicherheit',
      items: [
        'informationssicherheit/datensicherheit',
        'informationssicherheit/zählertransaktionen',
        'informationssicherheit/public-key-signature',
        'informationssicherheit/standardantworten',
      ],
    },
    {type: 'doc', id: 'rma-antragsformulare', customProps: {laender: ['ch']}},
    {type: 'doc', id: 'rma-antragsformulare-deutschland', customProps: {laender: ['de']}},
    {
      type: 'category',
      label: 'News',
      items: [
        'news/firmware-release-notes',
        'news/app-release-notes',
        {
          type: 'category',
          label: 'Status',
          link: {type: 'doc', id: 'news/status/index'},
          items: [
            'news/status/pico-4g-ausfall',
          ],
        },
      ],
    },
    {type: 'doc', id: 'kontakt', customProps: {laender: ['ch']}},
    {type: 'doc', id: 'kontakt-deutschland', customProps: {laender: ['de']}},
  ],
};

export default sidebars;
