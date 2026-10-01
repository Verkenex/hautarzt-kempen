import type { ContentSection } from './types';

export const serviceSupplements: Record<string, ContentSection[]> = {
  'dermatologie': [
    {
      heading: 'Befund, Verlauf und gezielte Diagnostik',
      paragraphs: [
        'Dermatologische Diagnosen entstehen häufig aus dem Zusammenspiel von Hautbild, Verteilung, zeitlichem Verlauf und Begleitsymptomen. Deshalb fragen wir nicht nur danach, wie eine Veränderung heute aussieht, sondern auch danach, wann sie begonnen hat, wodurch sie beeinflusst wird und welche Behandlungen bereits versucht wurden. Bei unklaren Befunden können Dermatoskopie, Abstrich, Pilzdiagnostik, Blutuntersuchungen oder eine kleine Gewebeprobe die klinische Untersuchung ergänzen.',
        'Nicht jede auffällige Hautveränderung benötigt dieselbe Diagnostik. Pigmentmale werden anders beurteilt als entzündliche Ekzeme, Nagelveränderungen oder Gefäßbefunde. Ziel ist eine möglichst gezielte Abklärung: so viel Diagnostik wie nötig, aber keine Untersuchungen ohne konkrete Fragestellung.'
      ]
    },
    {
      heading: 'Therapie nach Diagnose und Schweregrad',
      paragraphs: [
        'Die Behandlung reicht von konsequenter Hautpflege und äußerlichen Medikamenten über Tabletten oder Injektionstherapien bis zu Licht-, Laser- und operativen Verfahren. Bei chronisch-entzündlichen Erkrankungen stehen heute zusätzlich zielgerichtete Systemtherapien zur Verfügung. Welche Behandlung medizinisch sinnvoll ist, richtet sich nach Diagnose, Ausprägung, Vorerkrankungen, bisherigen Therapien und dem individuellen Behandlungsziel.',
        'Bei Hauttumoren und tumorverdächtigen Befunden hat dagegen die sichere diagnostische Einordnung Priorität. Hier können Dermatoskopie, Histologie und bei ausgewählten Fragestellungen moderne optische Bildgebung wie LC-OCT ineinandergreifen.'
      ]
    }
  ],

  'dermatologie/hautkrebsvorsorge': [
    {
      heading: 'Was bei der Beurteilung auffällig sein kann',
      paragraphs: [
        'Bei der Vorsorge achten wir nicht nur auf einzelne besonders dunkle Muttermale. Relevant sind unter anderem neu entstandene oder deutlich veränderte Pigmentmale, ungewöhnliche Farb- oder Formmuster, wiederholt blutende Stellen und raue oder nicht abheilende Veränderungen an sonnenexponierter Haut. Die Dermatoskopie hilft dabei, Strukturen zu erkennen, die mit bloßem Auge nicht sicher beurteilt werden können.',
        'Bei Menschen mit vielen Pigmentmalen oder erhöhtem Hautkrebsrisiko kann eine digitale Verlaufsdokumentation sinnvoll sein. Entscheidend ist der Vergleich über die Zeit: Eine Veränderung, die sich von den übrigen Malen deutlich unterscheidet oder im Verlauf verändert, verdient besondere Aufmerksamkeit.'
      ]
    },
    {
      heading: 'Vorsorge ersetzt keine Abklärung akuter Verdachtsbefunde',
      paragraphs: [
        'Das reguläre Hautkrebsscreening ist eine Früherkennungsuntersuchung. Wenn zwischen zwei Vorsorgeterminen eine auffällige, schnell wachsende, blutende oder nicht heilende Hautveränderung entsteht, sollte sie unabhängig vom Screeningintervall gezielt abgeklärt werden. Bei konkretem Tumorverdacht entscheiden wir nach der Untersuchung, ob Beobachtung, zusätzliche Bildgebung, Biopsie oder vollständige Entfernung sinnvoll ist.'
      ]
    }
  ],

  'dermatologie/hautkrebs': [
    {
      heading: 'Der genaue Befund entscheidet über die Therapie',
      paragraphs: [
        'Unter dem Begriff Hautkrebs werden biologisch sehr unterschiedliche Tumoren zusammengefasst. Basalzellkarzinome wachsen meist örtlich zerstörend, während Plattenepithelkarzinome und insbesondere Melanome abhängig von Tumormerkmalen ein anderes Metastasierungsrisiko haben können. Deshalb sind histologischer Tumortyp, Eindringtiefe, Lokalisation, Größe und Risikofaktoren für die weitere Therapieplanung entscheidend.',
        'Bei operativ behandelbaren Hauttumoren ist die vollständige Entfernung mit histologischer Kontrolle häufig zentral. Oberflächliche Vorstufen und ausgewählte frühe Befunde können dagegen abhängig von Diagnose und Lokalisation auch mit lokalen Medikamenten, Kryotherapie oder Photodynamischer Therapie behandelt werden. Nicht jede Hautkrebserkrankung benötigt dieselbe Behandlung.'
      ]
    },
    {
      heading: 'Wann eine Klinik notwendig wird',
      paragraphs: [
        'Komplexe Tumoren, Befunde mit möglicher Lymphknoten- oder Organbeteiligung sowie Erkrankungen, die eine weiterführende onkologische Diagnostik oder Systemtherapie benötigen, gehören in die interdisziplinäre Versorgung. Solche Fälle werden von uns gezielt an entsprechend spezialisierte Hautkliniken beziehungsweise Tumorzentren weitergeleitet.'
      ]
    }
  ],

  'dermatologie/weisser-hautkrebs': [
    {
      heading: 'Basalzellkarzinom und Plattenepithelkarzinom unterscheiden',
      paragraphs: [
        'Basalzellkarzinome und kutane Plattenepithelkarzinome gehören beide zum sogenannten weißen Hautkrebs, unterscheiden sich aber in ihrem biologischen Verhalten. Für die Therapieplanung sind deshalb nicht nur Aussehen und Größe, sondern auch Tumorart, Lokalisation, histologischer Subtyp und mögliche Risikomerkmale wichtig.',
        'Die Operation ist bei vielen invasiven Befunden die verlässlichste Behandlung. Gerade im Gesicht oder an funktionell wichtigen Regionen muss dabei die vollständige Tumorentfernung mit einem möglichst gewebeschonenden und ästhetisch sinnvollen Wundverschluss verbunden werden. Bei oberflächlichen Niedrigrisiko-Befunden können je nach Diagnose auch nichtoperative Verfahren geeignet sein.'
      ]
    }
  ],

  'dermatologie/schwarzer-hautkrebs-malignes-melanom': [
    {
      heading: 'Entscheidend ist die frühe vollständige Diagnostik',
      paragraphs: [
        'Ein Melanom lässt sich nicht allein anhand einer einzelnen ABCDE-Regel sicher erkennen oder ausschließen. Dermatoskopische Strukturen, Veränderungen im Zeitverlauf und das Gesamtbild des Pigmentmals sind wesentlich. Bei begründetem Verdacht wird die Läsion vollständig entfernt und histologisch untersucht, soweit dies anatomisch sinnvoll möglich ist.',
        'Bestätigt die Histologie ein Melanom, bestimmen insbesondere Tumordicke, Ulzeration und weitere histologische Merkmale das weitere Vorgehen. Abhängig vom Stadium können eine Nachexzision mit Sicherheitsabstand, zusätzliche Lymphknotendiagnostik und die Vorstellung in einer spezialisierten Hautklinik erforderlich werden.'
      ]
    }
  ],

  'dermatologie/operative-dermatologie': [
    {
      heading: 'Ambulante Operationen ausschließlich in Lokalanästhesie',
      paragraphs: [
        'Alle operativen Eingriffe unserer Praxis werden ambulant in örtlicher Betäubung durchgeführt. Wir beschäftigen seit Jahren keinen Anästhesisten und führen keine Eingriffe in Vollnarkose durch. Die Lokalanästhesie wird gezielt in das Operationsgebiet eingebracht; nach Eintritt der Wirkung sollte der eigentliche Eingriff nicht schmerzhaft sein. Druck, Zug oder Berührung können dabei weiterhin wahrgenommen werden.',
        'Vor dem Eingriff werden Diagnose, Operationsverfahren, mögliche Alternativen, Blutungs- und Wundheilungsrisiken sowie die zu erwartende Narbenbildung besprochen. Medikamente – insbesondere gerinnungshemmende Präparate – dürfen nicht eigenständig abgesetzt werden; ob eine Anpassung erforderlich ist, wird individuell geklärt.'
      ]
    },
    {
      heading: 'Histologie und rekonstruktiver Wundverschluss',
      paragraphs: [
        'Bei medizinisch indizierten Exzisionen wird das entnommene Gewebe in der Regel histologisch untersucht. Erst der feingewebliche Befund zeigt zuverlässig, um welche Veränderung es sich handelt und ob ein Tumor vollständig entfernt wurde. Ergibt sich ein weiterer Operationsbedarf, wird dieser anhand des histologischen Befundes geplant.',
        'Nach größeren Tumorentfernungen kann ein einfacher Wundverschluss nicht immer das beste Ergebnis liefern. Abhängig von Defekt, Hautreserve und anatomischer Region kommen lokale Lappenplastiken oder freie Hauttransplantate infrage. Besonders im Gesicht werden dabei Funktion, natürliche Konturen und ein möglichst unauffälliger Narbenverlauf berücksichtigt.'
      ]
    }
  ],

  'dermatologie/hautuebertragung-transplantation': [
    {
      heading: 'Auch Hauttransplantationen erfolgen bei uns in Lokalanästhesie',
      paragraphs: [
        'Hauttransplantationen und die dazugehörige Versorgung von Entnahme- und Empfängerstelle werden in unserer Praxis ambulant und in örtlicher Betäubung durchgeführt. Eine Vollnarkose wird in unserer Praxis nicht angeboten. Ob sich ein Defekt für eine ambulante Transplantation eignet, wird vorab anhand von Größe, Tiefe, Lokalisation, Durchblutung und allgemeinem Gesundheitszustand beurteilt.',
        'Für ein gutes Einheilen muss das Transplantat möglichst ruhig und flächig Kontakt zum gut durchbluteten Wundgrund haben. Deshalb sind Verbandtechnik, Schonung und die geplanten Wundkontrollen besonders wichtig. Das spätere Erscheinungsbild verändert sich noch über Wochen und Monate.'
      ]
    }
  ],

  'dermatologie/lc-oct': [
    {
      heading: 'Optische Bildgebung zwischen Dermatoskopie und Histologie',
      paragraphs: [
        'LC-OCT erzeugt hochauflösende Schnitt- und Horizontalbilder der oberflächlichen Haut. Dadurch können bei ausgewählten Läsionen mikroskopieähnliche Strukturen sichtbar gemacht werden, ohne dass sofort Gewebe entnommen werden muss. Besonders gut untersucht ist die Methode für nichtmelanozytäre Hauttumoren wie Basalzellkarzinome sowie für Feldkanzerisierungen und bestimmte entzündliche oder infektiöse Fragestellungen.',
        'Die Methode ergänzt die ärztliche Untersuchung, ersetzt die Histologie aber nicht grundsätzlich. Wenn Diagnose, Tumortiefe oder therapeutische Konsequenz histologisch abgesichert werden müssen, bleibt eine Biopsie beziehungsweise Exzision erforderlich. Der Vorteil liegt vor allem darin, bei geeigneten Befunden zusätzliche Informationen unmittelbar und nichtinvasiv zu gewinnen.'
      ]
    }
  ],

  'dermatologie/laser': [
    {
      heading: 'Die Diagnose kommt vor der Gerätewahl',
      paragraphs: [
        'Ein Laser behandelt kein unspezifisches Hautproblem, sondern eine definierte Zielstruktur. Gefäßlaser arbeiten mit anderen Wellenlängen und Impulsparametern als Systeme für Pigmente, Haare oder ablative Hautbehandlungen. Deshalb klären wir vor jeder Behandlung, ob die Veränderung sicher gutartig ist, welche Struktur erreicht werden soll und welches Gerät dafür geeignet ist.',
        'Hauttyp, Bräunungsgrad, Lokalisation und Vorbehandlungen beeinflussen Wirksamkeit und Nebenwirkungsrisiko. Bei pigmentierten Läsionen ist die dermatologische Einordnung besonders wichtig: Verdächtige Pigmentmale werden nicht kosmetisch „weggelasert“, sondern diagnostisch abgeklärt.'
      ]
    }
  ],

  'dermatologie/photodynamische-therapie-pdt': [
    {
      heading: 'Flächentherapie bei sonnenbedingten Hautschäden',
      paragraphs: [
        'Ein Vorteil der PDT liegt darin, dass nicht nur einzelne sichtbare Keratosen, sondern ein ganzes sonnengeprägtes Areal behandelt werden kann. Das ist bei sogenannter Feldkanzerisierung relevant, wenn zahlreiche klinische und noch wenig sichtbare Vorstufen nebeneinander bestehen.',
        'Welche PDT-Form sinnvoll ist, hängt von Befund, Region, Ausdehnung und individueller Schmerzempfindlichkeit ab. Vor der Behandlung wird geprüft, ob Hinweise auf einen invasiven Tumor bestehen; ein solcher Befund muss anders diagnostiziert und behandelt werden.'
      ]
    }
  ],

  'dermatologie/hauttumorsprechstunde-notfaelle': [
    {
      heading: 'Dringender Tumorverdacht ist etwas anderes als Hautkrebsvorsorge',
      paragraphs: [
        'Die Tumorsprechstunde dient der gezielten kurzfristigen Abklärung eines bereits begründeten Verdachts und nicht der allgemeinen Kontrolle vieler Muttermale. Besonders hilfreich sind eine konkrete Verdachtsdiagnose, Vorbefunde, Histologieberichte oder aussagekräftige Angaben des überweisenden Arztes.',
        'Nach der Untersuchung entscheiden wir, ob kurzfristig eine Biopsie oder Exzision erforderlich ist, ob zusätzliche Bildgebung hilfreich sein kann oder ob der Befund regulär kontrolliert werden kann. Bei komplexen oder fortgeschrittenen Tumoren organisieren wir die Weiterleitung an eine spezialisierte Hautklinik.'
      ]
    }
  ],

  'dermatologie/akne': [
    {
      heading: 'Akne wird nach Entzündung und Narbenrisiko behandelt',
      paragraphs: [
        'Mitesser, entzündliche Papeln, Pusteln und tiefere Knoten werden unterschiedlich behandelt. Zusätzlich achten wir auf bereits entstehende Narben, postinflammatorische Rötungen oder Pigmentveränderungen. Bei ausgeprägter Akne können hormonelle Faktoren, Medikamente oder andere Erkrankungen in die Beurteilung einbezogen werden.',
        'Die moderne Aknetherapie kombiniert je nach Schweregrad Wirkstoffe gegen Verhornungsstörung, Entzündung und bakterielle Mitbesiedlung. Antibiotika sollten nicht ungezielt oder dauerhaft eingesetzt werden. Bei schwerer, narbenbildender oder therapieresistenter Akne kann Isotretinoin sehr wirksam sein; dafür sind jedoch eine sorgfältige Aufklärung, Kontrollen und insbesondere bei möglicher Schwangerschaft strenge Sicherheitsmaßnahmen erforderlich.'
      ]
    }
  ],

  'dermatologie/atopische-dermatitis': [
    {
      heading: 'Heute stehen mehrere Therapiestufen zur Verfügung',
      paragraphs: [
        'Neben konsequenter Basistherapie und entzündungshemmenden Cremes stehen bei mittelschweren bis schweren Verläufen inzwischen verschiedene zielgerichtete Systemtherapien zur Verfügung. Dazu gehören – abhängig von Alter, Befund und Zulassung – Biologika und sogenannte JAK-Inhibitoren. Ob eine Systemtherapie notwendig ist, richtet sich nicht nur nach der sichtbaren Hautfläche, sondern auch nach Juckreiz, Schlafstörung, Krankheitsaktivität und Belastung im Alltag.',
        'Allergiediagnostik wird bei Neurodermitis nicht routinemäßig „auf alles“ durchgeführt. Sie ist dann sinnvoll, wenn Verlauf und Anamnese einen konkreten Zusammenhang mit einem möglichen Allergen vermuten lassen. Ungezielte Karenzdiäten können dagegen unnötig einschränken und sollten vermieden werden.'
      ]
    }
  ],

  'dermatologie/nesselsucht-urtikaria': [
    {
      heading: 'Bei chronischer Urtikaria ist weniger Testen oft mehr',
      paragraphs: [
        'Bei einer chronischen spontanen Urtikaria findet sich häufig keine klassische äußere Allergie als Ursache. Eine sehr breite, ungezielte Allergie- oder Labordiagnostik liefert deshalb oft keine verwertbare Erklärung. Sinnvoller ist eine strukturierte Anamnese mit gezielten Untersuchungen abhängig von Verlauf, Begleiterkrankungen und möglichen auslösenden Faktoren.',
        'Therapeutisch bilden moderne H1-Antihistaminika der zweiten Generation die Basis. Bei unzureichender Kontrolle existiert ein leitlinienbasiertes Stufenschema mit Dosisanpassung und bei weiterhin aktiver Erkrankung weiterführenden Therapien. Langfristige systemische Kortisonbehandlungen sind für die chronische Urtikaria keine Dauerlösung.'
      ]
    }
  ],

  'dermatologie/sonnenallergie': [
    {
      heading: 'Nicht jede Reaktion auf Sonne ist dieselbe Erkrankung',
      paragraphs: [
        'Juckende Papeln oder Bläschen nach UV-Exposition passen häufig zu einer polymorphen Lichtdermatose. Daneben kommen aber phototoxische oder photoallergische Reaktionen auf Medikamente und Kosmetika sowie selten andere lichtabhängige Erkrankungen infrage. Deshalb sind Zeitpunkt, verwendete Produkte und Medikamente sowie die genaue Verteilung der Hautveränderungen wichtig.',
        'Ein breit wirksamer Sonnenschutz mit gutem UVA-Schutz, schrittweise Lichtgewöhnung und geeignete Kleidung sind die wichtigsten vorbeugenden Maßnahmen. Bei wiederkehrenden stärkeren Verläufen kann eine ärztlich kontrollierte Phototherapie vor Beginn der sonnenreichen Zeit erwogen werden.'
      ]
    }
  ],

  'dermatologie/haarausfall': [
    {
      heading: 'Muster und Haarwurzelbefund weisen den Weg',
      paragraphs: [
        'Erblich bedingter Haarausfall, kreisrunder Haarausfall, diffuses Effluvium und vernarbende Alopezien unterscheiden sich deutlich in Ursache und Therapie. Bei der Untersuchung achten wir deshalb auf Verteilung, Miniaturisierung, Entzündungszeichen und Veränderungen der Kopfhaut. Dermatoskopie und gezielte Laborwerte können helfen, die Diagnose einzugrenzen.',
        'Bei diffusem Haarausfall ist außerdem der zeitliche Abstand zu möglichen Auslösern wichtig: Infekte, Operationen, Gewichtsverlust, Eisenmangel, Schilddrüsenveränderungen oder neue Medikamente können sich erst Wochen später in verstärktem Haarwechsel zeigen. Eine Behandlung ist nur sinnvoll, wenn sie zur tatsächlichen Ursache passt.'
      ]
    }
  ],

  'dermatologie/schuppenflechte-psoriasis': [
    {
      heading: 'Psoriasis ist mehr als eine Hauterkrankung',
      paragraphs: [
        'Bei der Beurteilung berücksichtigen wir neben Ausdehnung und Lokalisation auch Nagelbeteiligung, Juckreiz, Schmerzen und die Auswirkungen auf den Alltag. Gelenkbeschwerden sind besonders wichtig, weil eine Psoriasisarthritis früh erkannt und gegebenenfalls rheumatologisch mitbehandelt werden sollte.',
        'Für mittelschwere und schwere Psoriasis hat sich die Behandlung in den letzten Jahren deutlich erweitert. Neben klassischen Systemtherapien stehen hochwirksame zielgerichtete Medikamente zur Verfügung, unter anderem gegen TNF-, IL-17- und IL-23-vermittelte Entzündungswege. Welche Therapie geeignet ist, hängt von Krankheitsbild, Begleiterkrankungen, Vorbehandlungen und individuellen Risiken ab.'
      ]
    }
  ],

  'dermatologie/seborrhoisches-ekzem': [
    {
      heading: 'Typischer Befund, aber mehrere mögliche Differentialdiagnosen',
      paragraphs: [
        'Das seborrhoische Ekzem zeigt sich häufig an Kopfhaut, Augenbrauen, Nasenfalten, Ohren oder Brustbereich mit Rötung und eher fettiger Schuppung. Ähnliche Befunde können jedoch auch bei Psoriasis, Kontaktdermatitis oder anderen Ekzemen auftreten. Die Diagnose wird daher anhand von Verteilung und Hautbild gestellt.',
        'Zur Behandlung gehören je nach Region antimykotische Wirkstoffe gegen die beteiligten Malassezia-Hefen sowie zeitlich begrenzt entzündungshemmende Präparate. Da die Veranlagung bestehen bleibt, sind Rückfälle häufig; eine unkomplizierte Erhaltungspflege kann die Intervalle zwischen Schüben verlängern.'
      ]
    }
  ],

  'dermatologie/nagelpilz': [
    {
      heading: 'Vor einer langen Therapie sollte die Diagnose gesichert sein',
      paragraphs: [
        'Verdickte, brüchige oder gelblich verfärbte Nägel können durch Pilze verursacht sein, aber auch durch Psoriasis, Verletzungen, Durchblutungsstörungen oder andere Nagelerkrankungen. Deshalb ist eine mykologische Diagnostik vor einer länger dauernden systemischen Therapie sinnvoll. Dafür wird geeignetes Nagelmaterial entnommen und untersucht.',
        'Die Behandlung richtet sich nach Ausdehnung, befallenem Nagelanteil, Anzahl der betroffenen Nägel und möglichen Begleiterkrankungen. Äußerliche Präparate reichen eher bei begrenztem Befall; bei ausgeprägter Onychomykose können Tabletten erforderlich sein. Der sichtbare Erfolg braucht Geduld, weil gesundes Nagelmaterial erst langsam herauswachsen muss.'
      ]
    }
  ],

  'dermatologie/medizinische-fuss-nagelpflege': [
    {
      heading: 'Medizinische Fußpflege ergänzt die ärztliche Behandlung',
      paragraphs: [
        'Verdickte Nägel, ausgeprägte Hornhaut und schwer zugängliche Nagelränder können die eigenständige Pflege erschweren. Fachgerechte Nagel- und Fußpflege kann Beschwerden reduzieren und ärztliche Behandlungen – beispielsweise bei Nagelpilz oder eingewachsenen Nägeln – unterstützen.',
        'Bei entzündeten, schlecht heilenden oder unklaren Veränderungen steht jedoch zunächst die medizinische Diagnose im Vordergrund. Besonders bei Diabetes, Durchblutungsstörungen oder eingeschränkter Wundheilung müssen Verletzungen vermieden und Auffälligkeiten früh ärztlich beurteilt werden.'
      ]
    }
  ],

  'dermatologie/prp-therapie': [
    {
      heading: 'PRP ist eine ergänzende, keine universelle Behandlung',
      paragraphs: [
        'Für PRP wird eine kleine Menge Eigenblut aufbereitet, um thrombozytenreiches Plasma zu gewinnen. Die enthaltenen Wachstumsfaktoren werden vor allem in der regenerativen und ästhetischen Medizin eingesetzt. Die wissenschaftliche Datenlage ist je nach Indikation unterschiedlich; am besten untersucht ist PRP als mögliche Ergänzung bei bestimmten Formen des erblich bedingten Haarausfalls.',
        'Vor einer Behandlung klären wir deshalb zunächst, welche Diagnose tatsächlich vorliegt und ob PRP dafür sinnvoll erscheint. Bei entzündlichen, vernarbenden oder internistisch bedingten Formen des Haarausfalls muss primär die Grunderkrankung behandelt werden.'
      ]
    }
  ],

  'dermatologie/schweissdruesenueberfunktion': [
    {
      heading: 'Primäre oder sekundäre Hyperhidrose',
      paragraphs: [
        'Übermäßiges Schwitzen kann ohne erkennbare Grunderkrankung auftreten oder Folge von Medikamenten, hormonellen Veränderungen, Infekten oder anderen Erkrankungen sein. Lokal begrenztes Schwitzen an Achseln, Händen oder Füßen wird deshalb anders eingeordnet als neu aufgetretenes generalisiertes Nachtschweißen.',
        'Je nach Region und Ausprägung kommen lokale Antitranspiranzien, Iontophorese, Botulinumtoxin und weitere Verfahren infrage. Welche Therapie sinnvoll ist, hängt davon ab, wie stark die Beschwerden den Alltag beeinträchtigen und welche Körperregion betroffen ist.'
      ]
    }
  ],

  'dermatologie/eingewachsener-zehnagel': [
    {
      heading: 'Entzündung und Nagelform bestimmen die Behandlung',
      paragraphs: [
        'Bei einem eingewachsenen Zehennagel drückt die Nagelkante in den seitlichen Nagelwall. Anfangs bestehen oft nur Druckschmerz und Rötung; bei fortgeschrittenen Befunden können Granulationsgewebe, Sekretion und stärkere Entzündung entstehen. Enge Schuhe, falsches Kürzen, Nagelform und wiederholte mechanische Belastung können eine Rolle spielen.',
        'Leichte Befunde lassen sich teilweise konservativ entlasten. Bei wiederkehrenden oder ausgeprägten Entzündungen kann ein kleiner operativer Eingriff erforderlich sein. Ziel ist nicht, unnötig viel Nagel zu entfernen, sondern die problematische Nagelkante dauerhaft zu entlasten und dabei die Nagelform möglichst zu erhalten.'
      ]
    }
  ],

  'dermatologie/abszesse-der-haut': [
    {
      heading: 'Bei einem Abszess steht die Entlastung im Vordergrund',
      paragraphs: [
        'Ein Abszess ist eine abgekapselte Eiteransammlung. Typisch sind zunehmender Druckschmerz, Rötung, Überwärmung und eine tastbare Schwellung. Je nach Größe und Lage reicht eine alleinige antibiotische Behandlung häufig nicht aus, weil Medikamente den abgeschlossenen Eiterherd nur begrenzt erreichen.',
        'Wenn eine Eröffnung notwendig ist, wird der Befund in örtlicher Betäubung entlastet und anschließend offen beziehungsweise mit geeigneter Wundbehandlung weiter versorgt. Bei Fieber, ausgeprägter Allgemeinsymptomatik, rascher Ausbreitung oder problematischer Lokalisation kann eine weiterführende beziehungsweise stationäre Behandlung erforderlich sein.'
      ]
    }
  ],

  'dermatologie/blutschwaemmchen-haemangiome': [
    {
      heading: 'Nicht jede rote Gefäßveränderung ist ein Hämangiom',
      paragraphs: [
        'Rote oder violette Hautveränderungen können unterschiedliche Ursachen haben. Bei Erwachsenen handelt es sich häufig um harmlose erworbene Gefäßveränderungen wie Kirschangiome; kindliche Hämangiome folgen dagegen einem eigenen typischen Wachstumsverlauf. Die klinische Untersuchung klärt, welche Art von Gefäßbefund vorliegt.',
        'Bei eindeutig gutartigen, störenden Gefäßveränderungen kommen abhängig von Größe und Tiefe unter anderem Laser oder andere gezielte Verfahren infrage. Unklare, schnell wachsende oder ungewöhnlich blutende Befunde werden vor einer kosmetischen Behandlung diagnostisch eingeordnet.'
      ]
    }
  ],

  'dermatologie/altersflecken-sonnenflecken': [
    {
      heading: 'Pigmentfleck zuerst beurteilen, dann behandeln',
      paragraphs: [
        'Lentigines entstehen bevorzugt an chronisch lichtexponierter Haut und sind meist gutartig. Da sich jedoch auch frühe Formen von Hautkrebs oder atypische Pigmentläsionen ähnlich darstellen können, steht vor einer Laser- oder Peelingbehandlung die dermatologische Untersuchung.',
        'Bei sicher gutartigen Befunden kann die Behandlung je nach Farbe, Tiefe und Hauttyp mit geeigneten Lasern oder anderen Verfahren erfolgen. Konsequenter UV-Schutz reduziert neue lichtbedingte Pigmentierungen, kann bereits bestehende Flecken aber nicht vollständig rückgängig machen.'
      ]
    }
  ],

  'dermatologie/alterswarzen-hornwarzen': [
    {
      heading: 'Gutartig, aber manchmal schwer von anderen Befunden zu unterscheiden',
      paragraphs: [
        'Seborrhoische Keratosen können hautfarben, braun oder fast schwarz sein und eine sehr unterschiedliche Oberfläche entwickeln. Typische Befunde lassen sich meist klinisch und dermatoskopisch erkennen. Wenn Struktur, Wachstum oder Pigmentierung untypisch sind, muss vor einer Entfernung geklärt werden, ob tatsächlich eine gutartige Alterswarze vorliegt.',
        'Störende Läsionen können je nach Befund beispielsweise kürettiert, abgetragen oder mit geeigneten Laserverfahren behandelt werden. Die Entfernung erfolgt aus medizinischen oder kosmetischen Gründen; eine Behandlung verhindert nicht, dass an anderer Stelle neue Alterswarzen entstehen.'
      ]
    }
  ],

  'dermatologie/gutartige-pigmentmale': [
    {
      heading: 'Beobachten oder entfernen?',
      paragraphs: [
        'Die große Mehrzahl der Pigmentmale ist gutartig und muss nicht entfernt werden. Entscheidend sind dermatoskopischer Befund, Veränderungen im Verlauf, Beschwerden und gegebenenfalls mechanische Belastung. Bei vielen Nävi kann eine dokumentierte Verlaufskontrolle sinnvoller sein als vorsorgliche Entfernung unauffälliger Male.',
        'Wenn ein Pigmentmal diagnostisch auffällig ist, wird es nicht kosmetisch mit Laser behandelt. Für eine sichere feingewebliche Beurteilung muss die Veränderung in geeigneter Form operativ entfernt und histologisch untersucht werden.'
      ]
    }
  ],

  'dermatologie/stielwarzen-fibrome': [
    {
      heading: 'Häufige harmlose Hautanhängsel',
      paragraphs: [
        'Weiche Fibrome treten bevorzugt an Hals, Achseln, Leisten und anderen Hautfalten auf. Sie sind gutartig und nicht ansteckend. Behandlungsbedarf besteht meist nur, wenn sie durch Reibung wiederholt gereizt werden oder kosmetisch stören.',
        'Kleine Fibrome können mit unterschiedlichen oberflächlichen Verfahren entfernt werden. Vorher wird geprüft, ob der Befund tatsächlich typisch ist; ungewöhnlich pigmentierte oder anders strukturierte Veränderungen werden nicht ohne diagnostische Einordnung abgetragen.'
      ]
    }
  ],

  'dermatologie/milien': [
    {
      heading: 'Kleine Hornzysten statt „Pickel“',
      paragraphs: [
        'Milien sind winzige, mit Keratin gefüllte Zysten unmittelbar unter der Hautoberfläche. Sie entstehen häufig im Gesicht, besonders um Augen und Wangen, und lassen sich nicht wie ein entzündlicher Pickel ausdrücken. Sie sind medizinisch harmlos.',
        'Wenn Milien kosmetisch stören, können sie nach oberflächlicher Eröffnung fachgerecht entfernt werden. Bei zahlreichen oder immer wiederkehrenden Veränderungen schauen wir zusätzlich, ob Hautpflege, vorangegangene Hautverletzungen oder andere Faktoren eine Rolle spielen.'
      ]
    }
  ],

  'dermatologie/xanthelasmen': [
    {
      heading: 'Vor der Entfernung kann ein Blick auf den Fettstoffwechsel sinnvoll sein',
      paragraphs: [
        'Xanthelasmen sind gelbliche Cholesterinablagerungen an den Augenlidern. Sie können bei völlig normalen Blutfettwerten vorkommen, treten aber auch im Zusammenhang mit Fettstoffwechselstörungen auf. Je nach Vorgeschichte kann deshalb eine internistische beziehungsweise labormedizinische Abklärung sinnvoll sein.',
        'Zur Entfernung kommen abhängig von Größe, Tiefe und Lage verschiedene Verfahren infrage, unter anderem Laser oder operative Abtragung. Da Xanthelasmen erneut auftreten können, wird vor der Behandlung auch das Rezidivrisiko besprochen.'
      ]
    }
  ],

  'allergologie': [
    {
      heading: 'Allergiediagnostik beginnt mit einer konkreten Fragestellung',
      paragraphs: [
        'Ein positiver Haut- oder Bluttest allein beweist noch nicht, dass ein Allergen tatsächlich Beschwerden verursacht. Entscheidend ist, ob Sensibilisierung, Exposition und Symptome zeitlich und inhaltlich zusammenpassen. Deshalb steht am Anfang eine genaue Anamnese: Wann treten Beschwerden auf, wie schnell nach Kontakt, in welcher Jahreszeit und an welchem Organ?',
        'Abhängig davon kommen Pricktest, Epikutantest, spezifische IgE-Bestimmungen und in ausgewählten Situationen Provokationstests infrage. Ungezielte große Testpanels können Zufallsbefunde erzeugen und werden deshalb nicht ohne passende Fragestellung eingesetzt.'
      ]
    }
  ],

  'allergologie/allergie': [
    {
      heading: 'Sensibilisierung, Allergie und Unverträglichkeit unterscheiden',
      paragraphs: [
        'Eine Allergie ist eine immunologisch vermittelte Reaktion auf einen eigentlich harmlosen Stoff. Davon zu unterscheiden sind nichtallergische Unverträglichkeiten und reine Sensibilisierungen ohne klinische Beschwerden. Diese Unterscheidung ist wichtig, weil ein Laborwert allein sonst schnell zu unnötiger Meidung von Lebensmitteln, Medikamenten oder Umweltstoffen führen kann.',
        'Bei der Diagnostik kombinieren wir Krankengeschichte und gezielte Tests. Bei schweren Sofortreaktionen wird außerdem beurteilt, ob ein Notfallset, weitere Abklärung oder eine spezifische Immuntherapie notwendig sein kann.'
      ]
    }
  ],

  'allergologie/heuschnupfen-rhinitis-allergica': [
    {
      heading: 'Saison und Auslöser gezielt eingrenzen',
      paragraphs: [
        'Bei allergischer Rhinitis helfen Beschwerdekalender und zeitliche Zuordnung zu Pollenflug, Tierkontakt oder Innenraumbelastung. Ein Pricktest oder spezifisches IgE kann die vermutete Sensibilisierung bestätigen. Entscheidend bleibt, ob der Test zum tatsächlichen Beschwerdemuster passt.',
        'Zur Therapie gehören Allergenreduktion, moderne Antihistaminika und entzündungshemmende Nasensprays. Bei relevanten, wiederkehrenden Beschwerden kann eine spezifische Immuntherapie die zugrunde liegende Allergiebereitschaft langfristig beeinflussen und wird anhand von Allergen, Symptomstärke und Begleiterkrankungen geprüft.'
      ]
    }
  ],

  'allergologie/allergisches-asthma': [
    {
      heading: 'Atemwegsbeschwerden brauchen eine klare Abgrenzung',
      paragraphs: [
        'Husten, pfeifende Atmung und Luftnot können allergisch bedingt sein, haben aber auch andere Ursachen. Bei Verdacht auf allergisches Asthma werden allergologische Befunde deshalb mit pneumologischer beziehungsweise hausärztlicher Funktionsdiagnostik zusammengeführt. Eine reine Sensibilisierung im Allergietest reicht für die Asthmadiagnose nicht aus.',
        'Bei akuter oder zunehmender Atemnot steht die sofortige medizinische Versorgung im Vordergrund. Für die langfristige Behandlung sind eine gute Asthmakontrolle und gegebenenfalls die Behandlung des relevanten Allergens entscheidend.'
      ]
    }
  ],

  'allergologie/hyposensibilisierung': [
    {
      heading: 'Spezifische Immuntherapie behandelt die Allergieursache',
      paragraphs: [
        'Bei der spezifischen Immuntherapie wird das relevante Allergen wiederholt in kontrollierter Dosierung zugeführt, um die überschießende Immunreaktion langfristig zu verändern. Je nach Allergen und Präparat erfolgt dies als subkutane Immuntherapie mit Injektionen oder als sublinguale Therapie über Tabletten beziehungsweise Tropfen.',
        'Voraussetzung ist eine klinisch relevante, diagnostisch gesicherte Allergie. Die Behandlung erstreckt sich typischerweise über mehrere Jahre. Regelmäßigkeit ist entscheidend; gleichzeitig werden Wirksamkeit, Verträglichkeit und mögliche Begleiterkrankungen im Verlauf kontrolliert.'
      ]
    }
  ],

  'allergologie/nahrungsmittelallergie': [
    {
      heading: 'Nicht jede Reaktion auf Lebensmittel ist eine Allergie',
      paragraphs: [
        'Magen-Darm-Beschwerden, Hautreaktionen oder Unwohlsein nach dem Essen können allergische und nichtallergische Ursachen haben. Ein positiver IgE-Test ohne passende Beschwerden ist keine ausreichende Grundlage für eine langfristige Eliminationsdiät. Deshalb werden verdächtige Lebensmittel, Reaktionszeit und Symptome möglichst genau dokumentiert.',
        'Je nach Konstellation können Haut- oder Bluttests und in ausgewählten Fällen kontrollierte Provokationen notwendig sein. Das Ziel ist, gefährliche echte Allergien sicher zu erkennen, gleichzeitig aber unnötige und ernährungsmedizinisch problematische Meidung zu vermeiden.'
      ]
    }
  ],

  'allergologie/insektengiftallergien': [
    {
      heading: 'Systemische Reaktionen müssen ernst genommen werden',
      paragraphs: [
        'Eine ausgeprägte Schwellung nur an der Stichstelle ist unangenehm, bedeutet aber nicht automatisch eine gefährliche Insektengiftallergie. Kritischer sind Reaktionen außerhalb der Stichregion wie generalisierte Nesselsucht, Kreislaufbeschwerden, Atemnot oder Bewusstseinsstörung.',
        'Nach einer systemischen Reaktion werden Vorgeschichte und Sensibilisierung gegen Bienen- beziehungsweise Wespengift gezielt abgeklärt. Je nach Schweregrad gehören ein Notfallset und die spezifische Immuntherapie zu den wichtigsten Schutzmaßnahmen; die Immuntherapie kann das Risiko schwerer Reaktionen bei erneuten Stichen deutlich reduzieren.'
      ]
    }
  ],

  'allergologie/allergisches-kontaktekzem': [
    {
      heading: 'Spättyp-Allergien werden mit dem Epikutantest geprüft',
      paragraphs: [
        'Kontaktallergien zeigen sich typischerweise verzögert als Ekzem an Hautstellen, die mit dem auslösenden Stoff in Berührung kommen. Häufige Auslöser sind beispielsweise Duftstoffe, Konservierungsmittel, Metalle, Gummibestandteile oder berufliche Kontaktstoffe. Die genaue Verteilung des Ekzems liefert wichtige Hinweise.',
        'Beim Epikutantest werden ausgewählte Allergene auf dem Rücken aufgebracht und nach festgelegten Zeitintervallen abgelesen. Ein positiver Test wird anschließend mit der tatsächlichen Exposition abgeglichen. Erst daraus ergibt sich, welche Stoffe im Alltag wirklich gemieden werden sollten.'
      ]
    }
  ],

  'venenheilkunde-phlebologie': [
    {
      heading: 'Die Duplexsonografie zeigt, wie das Venensystem tatsächlich arbeitet',
      paragraphs: [
        'Sichtbare Krampfadern allein sagen wenig darüber aus, welche Venenklappen betroffen sind und wie der Blutfluss im tiefen und oberflächlichen Venensystem verläuft. Die farbkodierte Duplexsonografie ist deshalb die zentrale Untersuchung bei relevanten Varizen, Schwellungen und Verdacht auf venöse Funktionsstörungen.',
        'Aus dem Ultraschallbefund ergibt sich die Therapieplanung. Je nach Erkrankung reichen Bewegung, Kompression und Verlaufskontrollen; bei behandlungsbedürftigen Krampfadern kommen Verödung, endovenöse oder operative Verfahren infrage. Die Behandlung richtet sich nach Anatomie und Beschwerden, nicht nach einem einheitlichen Standardschema.'
      ]
    }
  ],

  'venenheilkunde-phlebologie/chronische-venoese-insuffizienz-cvi': [
    {
      heading: 'Von Schwellung bis Hautveränderung',
      paragraphs: [
        'Bei chronischer venöser Insuffizienz steigt der venöse Druck im Bein über längere Zeit an. Typische Folgen können abendliche Schwellung, Schweregefühl, sichtbare Varizen, bräunliche Pigmentierung, Ekzeme, Verhärtungen der Haut und im fortgeschrittenen Stadium ein venöses Ulkus sein.',
        'Die Duplexsonografie klärt, ob oberflächliche Stammvenen, Seitenäste, Verbindungsvenen oder das tiefe Venensystem betroffen sind. Behandlung und Kompressionsversorgung werden danach ausgerichtet. Hautveränderungen sollten mitbehandelt werden, weil chronische Entzündung und Ödeme die Hautbarriere zusätzlich belasten.'
      ]
    }
  ],

  'venenheilkunde-phlebologie/postthrombotisches-syndrom': [
    {
      heading: 'Folgezustand nach tiefer Venenthrombose',
      paragraphs: [
        'Nach einer tiefen Venenthrombose können Venenklappen geschädigt oder Gefäßabschnitte dauerhaft eingeengt bleiben. Dadurch kann sich ein postthrombotisches Syndrom entwickeln – mit Schwellung, Spannungsgefühl, Hautveränderungen und in schweren Fällen chronischen Wunden.',
        'Die Diagnostik stützt sich auf Vorgeschichte, klinischen Befund und Duplexsonografie. Im Mittelpunkt stehen Bewegung, individuell angepasste Kompression, Hautpflege und die Behandlung venöser Wunden. Bei ausgeprägten Beschwerden wird geprüft, ob weiterführende gefäßmedizinische Diagnostik sinnvoll ist.'
      ]
    }
  ],

  'venenheilkunde-phlebologie/tiefe-beinvenenthrombose': [
    {
      heading: 'Eine Thrombose muss zeitnah ausgeschlossen oder bestätigt werden',
      paragraphs: [
        'Neu aufgetretene einseitige Beinschwellung, Schmerzen, Überwärmung oder eine ungeklärte deutliche Umfangsdifferenz können auf eine tiefe Venenthrombose hinweisen. Diese Symptome sind allerdings nicht spezifisch. Die Diagnose wird anhand von klinischer Wahrscheinlichkeit und geeigneter Gefäßdiagnostik gestellt; die Kompressions- beziehungsweise Duplexsonografie spielt dabei eine zentrale Rolle.',
        'Bei bestätigter Thrombose muss die Gerinnungshemmung und weitere Behandlung unmittelbar festgelegt werden. Atemnot, Brustschmerz, Kreislaufprobleme oder Bluthusten können Zeichen einer Lungenembolie sein und erfordern sofortige Notfallversorgung.'
      ]
    }
  ],

  'proktologie': [
    {
      heading: 'Viele Beschwerden sehen ähnlich aus – die Ursachen sind verschieden',
      paragraphs: [
        'Blutungen, Juckreiz, Schmerzen, Nässen oder tastbare Veränderungen am After können von Hämorrhoiden, Fissuren, Ekzemen, Thrombosen, Abszessen, Fisteln oder anderen Erkrankungen ausgehen. Deshalb sollte die Behandlung nicht allein aufgrund einer Selbstdiagnose erfolgen.',
        'Zur Basis gehören Anamnese, Inspektion und vorsichtige Tastuntersuchung. Je nach Fragestellung können Proktoskopie oder weitere Untersuchungen hinzukommen. Bei Blutungen wird außerdem geprüft, ob eine weiter proximal gelegene Ursache im Darm ausgeschlossen werden muss.'
      ]
    }
  ],

  'proktologie/analekzem': [
    {
      heading: 'Feuchtigkeit und Reizung sind häufig beteiligt',
      paragraphs: [
        'Ein Analekzem kann irritativ, allergisch oder im Zusammenhang mit anderen Hauterkrankungen entstehen. Nässen, Stuhlreste, übermäßige Reinigung und parfümierte Feuchttücher können die empfindliche Hautbarriere zusätzlich schädigen. Deshalb wird bei der Untersuchung nicht nur das Ekzem, sondern auch nach einer möglichen proktologischen Ursache gesucht.',
        'Die Behandlung kombiniert die Beseitigung auslösender Faktoren mit schonender Reinigung, geeigneter Hautpflege und bei Bedarf zeitlich begrenzten entzündungshemmenden Präparaten. Bei Verdacht auf Kontaktallergie kann eine gezielte Epikutantestung sinnvoll sein.'
      ]
    }
  ],

  'proktologie/analfissuren': [
    {
      heading: 'Akute und chronische Fissur unterscheiden',
      paragraphs: [
        'Typisch für eine Analfissur sind starke, oft schneidende Schmerzen beim Stuhlgang, die danach noch länger anhalten können, sowie geringe hellrote Blutspuren. Eine frische Fissur kann unter Stuhlregulation und lokaler Therapie abheilen; bei chronischen Fissuren entstehen dagegen strukturelle Veränderungen, die eine andere Behandlung erforderlich machen können.',
        'Ziel der konservativen Therapie ist ein weicher, geformter Stuhl und eine Entspannung des inneren Schließmuskels. Wenn eine chronische Fissur trotz konsequenter Behandlung nicht heilt, werden weiterführende Verfahren individuell besprochen.'
      ]
    }
  ],

  'proktologie/analabzesse-perianalabzesse': [
    {
      heading: 'Ein Analabszess ist eine dringliche Erkrankung',
      paragraphs: [
        'Starke zunehmende Schmerzen, tastbare Schwellung und gegebenenfalls Fieber können auf einen Anal- oder Perianalabszess hinweisen. Ein Abszess ist eine abgeschlossene Eiteransammlung; die definitive Behandlung besteht deshalb in der Regel in einer chirurgischen Entlastung und nicht allein in Antibiotika.',
        'Bei ausgeprägtem Befund, tiefem Abszess, Fieber oder Allgemeinbeeinträchtigung kann eine klinische beziehungsweise chirurgische Versorgung notwendig sein. Nach Abheilung wird bei Bedarf geprüft, ob eine Analfistel als zugrunde liegende Verbindung zurückgeblieben ist.'
      ]
    }
  ],

  'proktologie/analfisteln': [
    {
      heading: 'Fistelverlauf und Schließmuskelbezug sind entscheidend',
      paragraphs: [
        'Analfisteln sind krankhafte Verbindungsgänge zwischen Analkanal und Haut. Sie können nach einem Abszess entstehen und sich durch wiederkehrende Sekretion, kleine Entzündungen oder eine nicht heilende Öffnung bemerkbar machen. Für die Therapie ist entscheidend, wie der Fistelgang zum Schließmuskel verläuft.',
        'Oberflächliche und komplexe Fisteln werden deshalb unterschiedlich behandelt. Bei tieferen oder unklaren Verläufen kann eine weiterführende Bildgebung beziehungsweise koloproktologische Mitbehandlung erforderlich sein, um eine sichere Sanierung bei bestmöglichem Erhalt der Kontinenz zu planen.'
      ]
    }
  ],

  'proktologie/inkontinenz': [
    {
      heading: 'Kontinenzstörungen haben unterschiedliche Ursachen',
      paragraphs: [
        'Stuhlinkontinenz kann durch Schließmuskelschäden, Beckenbodenschwäche, neurologische Erkrankungen, Stuhlveränderungen oder vorausgegangene Operationen und Geburten begünstigt werden. Auch eine scheinbare Inkontinenz durch chronisches Nässen oder unvollständige Entleerung muss abgegrenzt werden.',
        'Die Behandlung beginnt mit der Ursache. Stuhlregulation, Beckenbodentherapie und Anpassung von Medikamenten können bereits viel bewirken. Bei relevanten strukturellen oder neurologischen Befunden ist eine weiterführende spezialisierte Diagnostik erforderlich.'
      ]
    }
  ],

  'proktologie/anal-venen-thrombosen': [
    {
      heading: 'Plötzlich schmerzhafter Knoten am Analrand',
      paragraphs: [
        'Eine Analvenenthrombose entsteht durch ein lokales Blutgerinnsel in einer oberflächlichen Vene am Analrand. Sie kann innerhalb kurzer Zeit als bläulich-livider, druckschmerzhafter Knoten auftreten und wird häufig fälschlich als „äußere Hämorrhoide“ bezeichnet.',
        'Die Behandlung richtet sich nach Größe, Schmerzintensität und Zeitpunkt. Viele Befunde heilen konservativ mit Schmerztherapie und Stuhlregulation ab. Bei sehr starken frischen Beschwerden kann eine operative Entlastung sinnvoll sein; später überwiegt meist der Nutzen des abwartenden Vorgehens.'
      ]
    }
  ],

  'proktologie/marisken': [
    {
      heading: 'Hautfalten am Analrand sind meist harmlos',
      paragraphs: [
        'Marisken sind weiche Hautfalten am Analrand. Sie können nach früheren Entzündungen, Thrombosen oder ohne klaren Anlass bestehen und sind nicht mit Hämorrhoiden gleichzusetzen. Beschwerden entstehen häufig eher durch erschwerte Hygiene oder mechanische Reizung als durch die Mariske selbst.',
        'Eine Entfernung ist nur nötig, wenn tatsächlich relevante Beschwerden bestehen oder der Befund diagnostisch unklar ist. Vor einer Operation wird berücksichtigt, dass Wunden am Analrand empfindlich sein können und die Indikation deshalb zurückhaltend gestellt werden sollte.'
      ]
    }
  ],

  'proktologie/haemorrhoiden': [
    {
      heading: 'Behandelt werden Beschwerden – nicht das normale Gefäßpolster',
      paragraphs: [
        'Hämorrhoiden gehören zur normalen Anatomie und unterstützen den Feinverschluss des Afters. Von einem Hämorrhoidalleiden sprechen wir erst, wenn vergrößerte Hämorrhoiden Beschwerden wie Blutung, Prolaps, Nässen oder Juckreiz verursachen. Schmerzen sprechen häufig zusätzlich oder alternativ für andere Erkrankungen wie Fissur oder Analvenenthrombose.',
        'Die Therapie richtet sich nach Beschwerden und Stadium. Stuhlregulation und Vermeidung starken Pressens bilden die Grundlage. Bei geeigneten Befunden kommen ambulante Verfahren wie Sklerosierung oder Gummibandligatur infrage; fortgeschrittene Befunde können eine operative Behandlung erfordern.'
      ]
    }
  ],

  'proktologie/darmkrebs': [
    {
      heading: 'Blutungen sollten nicht vorschnell Hämorrhoiden zugeschrieben werden',
      paragraphs: [
        'Hellrotes Blut am Toilettenpapier ist häufig gutartig verursacht, kann aber nicht allein anhand der Farbe sicher eingeordnet werden. Alter, Veränderungen der Stuhlgewohnheiten, Gewichtsverlust, Blutarmut, familiäre Belastung und die Art der Blutung beeinflussen, welche weitere Diagnostik erforderlich ist.',
        'Die proktologische Untersuchung beurteilt den Analbereich und unteren Enddarm. Wenn eine weiter oben gelegene Ursache ausgeschlossen werden muss, gehört die Darmspiegelung in die gastroenterologische beziehungsweise internistische Diagnostik. Bei Verdacht auf Darmkrebs erfolgt die weitere Abklärung ohne unnötige Verzögerung.'
      ]
    }
  ],

  'aesthetische-dermatologie': [
    {
      heading: 'Ästhetische Behandlung beginnt mit dermatologischer Diagnose',
      paragraphs: [
        'Pigmentflecken, Gefäßveränderungen, Narben und altersbedingte Hautveränderungen können sehr ähnlich aussehen, aber unterschiedliche Ursachen haben. Deshalb wird vor einer ästhetischen Behandlung geklärt, was tatsächlich vorliegt und ob eine medizinische Abklärung Vorrang hat.',
        'Erst danach werden Behandlungsziel, geeignete Methode, realistisch erreichbares Ergebnis, Ausfallzeit und mögliche Nebenwirkungen besprochen. Nicht jede technisch mögliche Behandlung ist für jede Haut oder jedes gewünschte Ergebnis sinnvoll.'
      ]
    }
  ],

  'aesthetische-dermatologie/faltenbehandlung': [
    {
      heading: 'Mimik, Volumen und Hautstruktur getrennt beurteilen',
      paragraphs: [
        'Falten entstehen nicht aus einer einzigen Ursache. Mimikfalten, Volumenverlust, nachlassende Hautelastizität und lichtbedingte Oberflächenveränderungen benötigen unterschiedliche Ansätze. Botulinumtoxin beeinflusst gezielt Muskelaktivität, während Filler Volumen beziehungsweise Konturen verändern; Laser- und Peelingverfahren wirken eher auf Hautstruktur und Pigmentierung.',
        'Eine natürliche Behandlung berücksichtigt Gesichtsanatomie, Mimik und Proportionen. Ziel ist nicht die vollständige Beseitigung jeder Linie, sondern eine nachvollziehbare Verbesserung bei erhaltener Ausdrucksfähigkeit. Risiken und Grenzen werden für das jeweilige Verfahren separat besprochen.'
      ]
    }
  ],

  'aesthetische-dermatologie/skinbooster': [
    {
      heading: 'Hautqualität statt klassischer Volumenaufbau',
      paragraphs: [
        'Skinbooster werden oberflächlicher und flächiger eingesetzt als klassische volumengebende Filler. Ziel ist vor allem eine Verbesserung von Hydratation, Elastizität und feiner Hautstruktur. Sie eignen sich nicht dazu, ausgeprägten Volumenverlust oder tiefe statische Falten vollständig auszugleichen.',
        'Welche Regionen und Präparate sinnvoll sind, hängt von Hautdicke, Hautzustand und gewünschtem Ergebnis ab. Wie bei anderen Injektionsbehandlungen sind vorübergehende Schwellungen, kleine Blutergüsse und selten auch ernstere gefäßbezogene Komplikationen möglich; deshalb gehört die Behandlung in medizinisch qualifizierte Hände.'
      ]
    }
  ],

  'aesthetische-dermatologie/polymilchsauere-liquid-lifting': [
    {
      heading: 'Ergebnis entwickelt sich schrittweise',
      paragraphs: [
        'Polymilchsäure wirkt nicht primär wie ein sofortiger Gel-Filler. Nach der Injektion stimuliert das Material über Wochen die körpereigene Kollagenbildung. Dadurch entwickelt sich der Volumen- und Straffungseffekt allmählich und muss mit zeitlichem Abstand beurteilt werden.',
        'Die Methode eignet sich besonders für flächigeren Volumenverlust. Für sehr feine oberflächliche Linien oder jede anatomische Region ist sie nicht gleichermaßen geeignet. Sorgfältige Produktauswahl, Injektionsebene und Nachbehandlung reduzieren das Risiko von tastbaren Knötchen und anderen Komplikationen.'
      ]
    }
  ],

  'aesthetische-dermatologie/laser-haarentfernung': [
    {
      heading: 'Haarfarbe und Wachstumsphase bestimmen den Erfolg',
      paragraphs: [
        'Bei der Laser-Haarentfernung absorbiert Melanin im Haarschaft die Lichtenergie. Deshalb reagieren dunkle Haare meist deutlich besser als weiße, graue oder sehr helle Haare. Da nur Haare in einer geeigneten Wachstumsphase zuverlässig erreicht werden, sind mehrere Sitzungen in an die Körperregion angepassten Abständen erforderlich.',
        'Vor der Behandlung sollte die Haut möglichst ungebräunt sein. Zupfen oder Epilieren entfernt die Zielstruktur aus dem Haarfollikel und sollte im Vorfeld vermieden werden; Rasieren ist dagegen üblicherweise möglich. Die genaue Vorbereitung wird vor der ersten Sitzung erklärt.'
      ]
    }
  ],

  'aesthetische-dermatologie/medizinische-kosmetik': [
    {
      heading: 'Kosmetische Maßnahmen werden an die Hauterkrankung angepasst',
      paragraphs: [
        'Bei Akne, Rosazea oder empfindlicher Haut kann eine ungeeignete kosmetische Behandlung Entzündung und Hautbarrierestörung verstärken. Deshalb orientiert sich die Auswahl von Ausreinigung, Peeling und Pflege an der dermatologischen Diagnose und an laufenden Medikamenten.',
        'Ziel ist eine sinnvolle Ergänzung der ärztlichen Behandlung. Eine medizinische Kosmetik kann Komedonen und Hautoberfläche verbessern oder eine passende Pflegeroutine unterstützen, ersetzt aber keine notwendige entzündungshemmende oder systemische Therapie.'
      ]
    }
  ],

  'aesthetische-dermatologie/peeling': [
    {
      heading: 'Tiefe und Wirkstoff bestimmen Wirkung und Ausfallzeit',
      paragraphs: [
        'Oberflächliche Peelings wirken vor allem in der Hornschicht beziehungsweise obersten Epidermis und können bei unreiner, lichtgeschädigter oder ungleichmäßig pigmentierter Haut eingesetzt werden. Mit zunehmender Peelingtiefe steigen Wirkung, aber auch Rötung, Schälung und Risiko von Pigmentverschiebungen.',
        'Vor chemischen Peelings werden Hauttyp, aktuelle Bräunung, entzündliche Erkrankungen und verwendete Medikamente berücksichtigt. Nach der Behandlung ist konsequenter Lichtschutz besonders wichtig; Krusten oder Schuppung sollten nicht mechanisch entfernt werden.'
      ]
    }
  ],

  'aesthetische-dermatologie/pigmentstoerungen-narbenbehandlung': [
    {
      heading: 'Narben- und Pigmenttherapie wird nach Struktur geplant',
      paragraphs: [
        'Bei Pigmentstörungen muss zunächst zwischen gutartigen lichtbedingten Flecken, entzündungsbedingter Hyperpigmentierung, Melasma und anderen Ursachen unterschieden werden. Eine Laserbehandlung, die bei einer Lentigo gut funktioniert, kann bei einem Melasma beispielsweise ungünstig sein.',
        'Auch Narben werden nach Typ beurteilt: eingesunkene, erhabene, gerötete und verhärtete Narben reagieren unterschiedlich auf Laser, Microneedling, Injektionen oder operative Korrektur. Häufig ist ein stufenweiser oder kombinierter Ansatz sinnvoller als eine einzelne Behandlung.'
      ]
    }
  ],

  'aesthetische-dermatologie/besenreiser': [
    {
      heading: 'Besenreiser können Teil einer größeren Venenerkrankung sein',
      paragraphs: [
        'Feine Besenreiser sind meist kosmetisch störend und medizinisch harmlos. Wenn zusätzlich größere Krampfadern, Schwellungen, Hautveränderungen oder Beschwerden bestehen, sollte jedoch vor der ästhetischen Therapie das Venensystem untersucht werden.',
        'Je nach Gefäßdurchmesser und Lage eignen sich Sklerosierung oder Laser unterschiedlich gut. Nach einer Behandlung können vorübergehend kleine Blutergüsse, Rötungen oder bräunliche Pigmentierungen entstehen. Eine vollständige dauerhafte Beseitigung sämtlicher Gefäße lässt sich nicht garantieren, weil sich im Verlauf neue Besenreiser bilden können.'
      ]
    }
  ],

  'aesthetische-dermatologie/erweiterte-gesichts-aederchen': [
    {
      heading: 'Gefäßtyp und Grunderkrankung unterscheiden',
      paragraphs: [
        'Erweiterte Äderchen können isoliert vorkommen, Teil einer Rosazea sein oder durch chronische UV-Schädigung sichtbarer werden. Bei diffuser Gesichtsrötung ist deshalb zunächst wichtig, ob einzelne Teleangiektasien oder eine entzündliche Rosazea im Vordergrund stehen.',
        'Gefäßdurchmesser, Farbe und Tiefe entscheiden über die geeignete Behandlung. Laserenergie muss auf das Gefäß abgestimmt werden; gleichzeitig werden Hauttyp und Bräunung berücksichtigt, um das Risiko von Verbrennung oder Pigmentverschiebung gering zu halten.'
      ]
    }
  ],

  'aesthetische-dermatologie/sternchenangiome': [
    {
      heading: 'Kleine Gefäßläsionen gezielt behandeln',
      paragraphs: [
        'Bei typischen Sternchenangiomen lässt sich die Gefäßstruktur klinisch gut erkennen. Vor einer kosmetischen Behandlung wird dennoch geprüft, ob es sich tatsächlich um eine gutartige Gefäßveränderung handelt und welches Verfahren bei Größe und Lokalisation die beste Kontrolle ermöglicht.',
        'Nach Laser oder Koagulation kann die Stelle zunächst dunkler, gerötet oder leicht verkrustet wirken. Das endgültige Ergebnis wird deshalb nicht unmittelbar nach der Sitzung beurteilt; die Haut benötigt zunächst Zeit für Heilung und Gefäßabbau.'
      ]
    }
  ],

  'aesthetische-dermatologie/tattoo-entfernung': [
    {
      heading: 'Tattooentfernung ist ein schrittweiser Prozess',
      paragraphs: [
        'Laserimpulse zerlegen Farbpigmente, die anschließend über körpereigene Prozesse abgebaut werden. Die Behandlung muss in ausreichenden Abständen erfolgen; zu kurze Intervalle verbessern den Abbau nicht automatisch und können das Nebenwirkungsrisiko erhöhen.',
        'Schwarz und dunkle Farben reagieren meist besser als manche hellen oder mehrfarbigen Pigmente. Bei bestimmten Farbstoffen sind Farbveränderungen möglich. Professionelle, mehrschichtige oder bereits überstochene Tattoos benötigen oft viele Sitzungen, und eine vollständige Entfernung kann nicht garantiert werden.'
      ]
    }
  ]
};
