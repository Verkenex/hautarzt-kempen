import { page } from './types';

export const allergologyContent = {
  'allergologie': page(
    'Allergologische Beschwerden lassen sich nur dann sinnvoll behandeln, wenn klar ist, ob tatsächlich eine Allergie vorliegt und welcher Auslöser relevant ist. Deshalb steht bei uns die genaue Vorgeschichte vor dem Test.',
    [
      {
        heading: 'Diagnostik',
        paragraphs: ['Je nach Beschwerdebild nutzen wir Hauttests wie Prick- oder Epikutantest und ergänzen bei Bedarf eine Blutuntersuchung auf spezifische IgE-Antikörper. Nicht jeder positive Test bedeutet automatisch, dass der gefundene Stoff im Alltag tatsächlich Beschwerden verursacht.']
      },
      {
        heading: 'Behandlung',
        paragraphs: ['Am Anfang steht – soweit möglich – die Vermeidung des relevanten Auslösers. Hinzu kommen symptomlindernde Medikamente. Bei geeigneten Typ-I-Allergien kann eine spezifische Immuntherapie die Reaktion des Immunsystems langfristig beeinflussen.']
      }
    ]
  ),
  'allergologie/allergie': page(
    'Juckreiz, Hautausschlag, Fließschnupfen oder Atembeschwerden können allergisch bedingt sein – müssen es aber nicht. Die allergologische Untersuchung soll deshalb einen konkreten Verdacht bestätigen oder auch entkräften.',
    [
      {
        heading: 'Das Gespräch gehört zur Diagnostik',
        paragraphs: ['Wann Beschwerden auftreten, wie schnell sie beginnen und welche Stoffe, Jahreszeiten oder Tätigkeiten damit zusammenhängen, ist oft genauso wichtig wie der eigentliche Allergietest.']
      },
      {
        heading: 'Mögliche Tests',
        bullets: ['Prick- und gegebenenfalls Intrakutantest bei Soforttyp-Reaktionen', 'Epikutantest bei Kontaktallergien', 'spezifische IgE-Bestimmung im Blut bei geeigneten Fragestellungen']
      },
      {
        heading: 'Therapie',
        paragraphs: ['Je nach Diagnose reichen die Möglichkeiten von Allergenvermeidung und symptomatischer Behandlung bis zur spezifischen Immuntherapie.']
      }
    ]
  ),
  'allergologie/heuschnupfen-rhinitis-allergica': page(
    'Heuschnupfen ist eine allergische Reaktion auf Pollen. Typisch sind Niesen, laufende oder verstopfte Nase, juckende Augen und ein klarer jahreszeitlicher Zusammenhang.',
    [
      {
        heading: 'Diagnose',
        paragraphs: ['Aus Beschwerdezeit und Pollensaison ergibt sich oft bereits ein Verdacht. Ein Pricktest und bei Bedarf eine Blutuntersuchung helfen, die relevanten Allergene genauer einzugrenzen.']
      },
      {
        heading: 'Behandlung',
        paragraphs: ['Antihistaminika sowie antiallergische beziehungsweise entzündungshemmende Nasen- und Augentherapien lindern die Beschwerden. Wenn die Allergie stark ausgeprägt ist oder über Jahre anhält, kann eine spezifische Immuntherapie infrage kommen.']
      }
    ]
  ),
  'allergologie/allergisches-asthma': page(
    'Allergien können nicht nur Nase und Augen betreffen, sondern auch die tieferen Atemwege. Husten, pfeifende Atmung oder Luftnot im Zusammenhang mit Allergenkontakt müssen ärztlich abgeklärt werden.',
    [
      {
        heading: 'Allergologische Einordnung',
        paragraphs: ['Wir klären, ob ein relevantes Allergen nachweisbar ist und ob die Beschwerden zeitlich dazu passen. Für die eigentliche Asthmadiagnostik und Lungenfunktionsbeurteilung kann zusätzlich eine haus- oder lungenärztliche Mitbehandlung notwendig sein.']
      },
      {
        heading: 'Therapie',
        paragraphs: ['Neben der leitliniengerechten Asthmabehandlung kann bei geeigneter allergischer Ursache eine spezifische Immuntherapie sinnvoll sein. Das wird individuell abgestimmt.']
      }
    ],
    { note: 'Akute Luftnot ist ein medizinischer Notfall und gehört nicht in eine reguläre Allergiesprechstunde.' }
  ),
  'allergologie/hyposensibilisierung': page(
    'Die spezifische Immuntherapie – häufig Hyposensibilisierung genannt – kann bei bestimmten Soforttyp-Allergien die Reaktion auf ein Allergen langfristig vermindern.',
    [
      {
        heading: 'Voraussetzung',
        paragraphs: ['Vor Beginn muss klar sein, welches Allergen die Beschwerden tatsächlich verursacht. Dazu gehören eine passende Krankengeschichte und eine allergologische Testung.']
      },
      {
        heading: 'Ablauf',
        paragraphs: ['Je nach Allergen und Präparat wird die Immuntherapie als regelmäßige Injektion oder mit einem Präparat unter der Zunge durchgeführt. Die Therapie läuft typischerweise über einen längeren Zeitraum und erfordert zuverlässige Mitarbeit.']
      },
      {
        heading: 'Ziel',
        paragraphs: ['Ziel ist nicht nur eine kurzfristige Symptomunterdrückung, sondern eine veränderte Immunantwort. Ob eine Immuntherapie sinnvoll ist, hängt von Allergen, Beschwerden, Begleiterkrankungen und verfügbarer Therapie ab.']
      }
    ]
  ),
  'allergologie/nahrungsmittelallergie': page(
    'Nicht jede Unverträglichkeit gegenüber Lebensmitteln ist eine Allergie. Eine echte Nahrungsmittelallergie beruht auf einer Immunreaktion und muss von Intoleranzen und anderen Ursachen unterschieden werden.',
    [
      {
        heading: 'Diagnostik',
        paragraphs: ['Wir beginnen mit einer genauen Anamnese: Welches Lebensmittel wurde gegessen, wie schnell traten welche Beschwerden auf und ist die Reaktion reproduzierbar? Haut- und Bluttests können den Verdacht unterstützen, sind allein aber nicht beweisend.']
      },
      {
        heading: 'Umgang mit bestätigten Allergien',
        paragraphs: ['Bei gesicherter Allergie besprechen wir die notwendige Meidung und – abhängig vom Risiko – einen Notfallplan. Unnötig breite Auslassdiäten sollten ohne klare Diagnose vermieden werden.']
      }
    ],
    { note: 'Schwere allergische Reaktionen mit Atemnot, Kreislaufproblemen oder ausgeprägter Schwellung sind ein Notfall.' }
  ),
  'allergologie/insektengiftallergien': page(
    'Eine Insektengiftallergie kann nach Bienen- oder Wespenstichen zu Reaktionen führen, die weit über die normale Schwellung an der Einstichstelle hinausgehen.',
    [
      {
        heading: 'Diagnose',
        paragraphs: ['Nach einer systemischen Reaktion klären wir anhand des Ablaufs und allergologischer Tests, ob eine relevante Sensibilisierung gegen Bienen- oder Wespengift besteht.']
      },
      {
        heading: 'Notfallvorsorge',
        paragraphs: ['Abhängig von Art und Schwere der bisherigen Reaktion kann ein Notfallset einschließlich Adrenalin-Autoinjektor erforderlich sein. Die Anwendung muss verständlich erklärt und regelmäßig überprüft werden.']
      },
      {
        heading: 'Spezifische Immuntherapie',
        paragraphs: ['Bei entsprechender Indikation ist die spezifische Immuntherapie gegen Insektengift eine sehr wichtige präventive Behandlung. Die Einleitung und weitere Durchführung werden passend zum individuellen Risiko organisiert.']
      }
    ]
  ),
  'allergologie/allergisches-kontaktekzem': page(
    'Ein allergisches Kontaktekzem entsteht verzögert nach Hautkontakt mit einem Stoff, gegen den eine Kontaktallergie besteht. Häufige Auslöser sind beispielsweise Metalle, Duftstoffe, Konservierungsmittel oder berufliche Kontaktstoffe.',
    [
      {
        heading: 'Epikutantest',
        paragraphs: ['Zur Abklärung werden verdächtige Testsubstanzen in kleinen Testkammern auf die Haut aufgebracht und nach festgelegten Zeitpunkten abgelesen. Die Reaktion entwickelt sich langsamer als beim Pricktest.']
      },
      {
        heading: 'Nach einem positiven Test',
        paragraphs: ['Entscheidend ist anschließend, wo der gefundene Stoff im Alltag vorkommt und ob er tatsächlich zur Verteilung des Ekzems passt. Wir erklären, welche Produkte beziehungsweise Expositionen gemieden werden sollten.']
      }
    ]
  )
} as const;
