import { page } from './types';

export const aestheticContent = {
  'aesthetische-dermatologie': page(
    'Ästhetische Dermatologie gehört für uns zur Hautmedizin. Bevor wir etwas behandeln, schauen wir deshalb zuerst auf die Haut, auf das gewünschte Ergebnis und darauf, ob die gewählte Methode wirklich sinnvoll ist.',
    [
      {
        heading: 'Was wir in Kempen anbieten',
        paragraphs: ['Zum Spektrum gehören Faltenbehandlungen, Skinbooster und Polymilchsäure ebenso wie Laserbehandlungen, medizinische Kosmetik, Peelings sowie die Behandlung von Pigmenten, Narben und störenden Gefäßveränderungen.'],
        bullets: ['Faltenbehandlung mit Botulinumtoxin und Hyaluronsäure', 'Skinbooster und Polymilchsäure', 'Laser-Haarentfernung und Tattoo-Entfernung', 'Pigment- und Narbenbehandlung', 'Medizinische Kosmetik und Peelings', 'Besenreiser, Gesichtsäderchen und Sternchenangiome']
      },
      {
        heading: 'Beratung vor Behandlung',
        paragraphs: ['Nicht jede Falte, jedes Äderchen oder jeder Pigmentfleck muss behandelt werden. In der Beratung klären wir, was Sie stört, welche Veränderung realistisch ist und welche Methode zu Hauttyp und Befund passt. Wenn wir von einer Behandlung keinen vernünftigen Nutzen erwarten, sagen wir das auch.']
      },
      {
        heading: 'Kosten',
        paragraphs: ['Ästhetische Behandlungen sind in der Regel Selbstzahlerleistungen. Die voraussichtlichen Kosten hängen von Methode, Behandlungsumfang und Zahl der Sitzungen ab und werden vor der Behandlung besprochen.']
      }
    ]
  ),
  'aesthetische-dermatologie/faltenbehandlung': page(
    'Bei einer Faltenbehandlung geht es nicht darum, jedes Zeichen des Älterwerdens verschwinden zu lassen. Entscheidend ist, welche Veränderung Sie selbst stört und ob sie sich mit einer zurückhaltenden Behandlung sinnvoll beeinflussen lässt.',
    [
      {
        heading: 'Botulinumtoxin oder Hyaluronsäure?',
        paragraphs: ['Mimische Falten entstehen vor allem durch die Aktivität der Gesichtsmuskulatur. Hier kann Botulinumtoxin die betreffende Muskulatur gezielt entspannen. Hyaluronsäure wird dagegen eingesetzt, wenn Volumen fehlt oder einzelne Falten und Konturen aufgefüllt beziehungsweise ausgeglichen werden sollen.', 'Welche Methode passt, lässt sich erst nach Untersuchung von Gesicht, Haut und Mimik beurteilen. Häufig ist weniger Behandlung sinnvoller als eine möglichst starke Veränderung.']
      },
      {
        heading: 'Ablauf',
        paragraphs: ['Vor der Behandlung besprechen wir Ziel, Grenzen und mögliche Nebenwirkungen. Die Präparate werden mit feinen Kanülen an den zuvor festgelegten Stellen eingebracht. Rötungen, kleine Schwellungen oder Blutergüsse können vorübergehend auftreten.']
      },
      {
        heading: 'Natürliches Ergebnis',
        paragraphs: ['Ausdruck und Mimik sollen erhalten bleiben. Sympathische Linien gehören zum Gesicht; behandelt werden vor allem Bereiche, die als störend empfunden werden oder das Gesicht müder beziehungsweise angespannter wirken lassen, als es tatsächlich ist.']
      }
    ],
    { billing: 'Faltenbehandlungen sind Selbstzahlerleistungen. Die Kosten werden nach Beratung und geplantem Umfang vorab besprochen.' }
  ),
  'aesthetische-dermatologie/skinbooster': page(
    'Skinbooster sind Hyaluronsäurepräparate, die nicht zum gezielten Aufbau von Volumen, sondern flächig zur Verbesserung der Hautqualität eingesetzt werden.',
    [
      {
        heading: 'Wofür Skinbooster gedacht sind',
        paragraphs: ['Die Hyaluronsäure wird in kleinen Mengen über eine größere Fläche in die Haut eingebracht. Ziel ist vor allem eine bessere Feuchtigkeitsbindung und eine glattere Hautoberfläche. Geeignete Bereiche können Gesicht, Hals, Dekolleté, Handrücken und feine Oberlippenfältchen sein.']
      },
      {
        heading: 'Abgrenzung zu Fillern',
        paragraphs: ['Ein Skinbooster ersetzt keinen klassischen Filler. Wenn Volumen aufgebaut oder eine Kontur verändert werden soll, ist eine andere Hyaluronsäurebehandlung geeigneter. In der Beratung klären wir deshalb zuerst, ob es um Hautqualität oder tatsächlich um Volumen geht.']
      },
      {
        heading: 'Nach der Behandlung',
        paragraphs: ['An den Einstichstellen können vorübergehend Rötungen, Schwellungen oder kleine Blutergüsse auftreten. Wie viele Sitzungen sinnvoll sind, hängt vom Hautzustand und vom gewünschten Ergebnis ab.']
      }
    ],
    { billing: 'Skinbooster sind ästhetische Selbstzahlerleistungen.' }
  ),
  'aesthetische-dermatologie/polymilchsauere-liquid-lifting': page(
    'Polymilchsäure wird vor allem dann eingesetzt, wenn im Gesicht über die Jahre Volumen verloren gegangen ist. Anders als ein klassischer Filler zielt die Behandlung auf einen schrittweisen Gewebeaufbau durch Kollagenneubildung.',
    [
      {
        heading: 'Wann Polymilchsäure infrage kommt',
        paragraphs: ['Typische Behandlungsregionen sind Wangen und seitliche Gesichtspartien. Das Verfahren eignet sich eher für einen flächigen Volumenverlust als für das punktuelle Auffüllen einer einzelnen feinen Falte.']
      },
      {
        heading: 'Wirkprinzip',
        paragraphs: ['Das Präparat wird in die vorgesehenen Gewebeschichten eingebracht. Die sichtbare Veränderung entwickelt sich anschließend über Wochen, weil der Körper angeregt wird, neues Kollagen zu bilden. Das unterscheidet Polymilchsäure von sofort volumenwirksamen Hyaluronfillern.']
      },
      {
        heading: 'Beratung',
        paragraphs: ['Ob Polymilchsäure, Hyaluronsäure oder keine Injektionsbehandlung sinnvoll ist, hängt von Anatomie, Hautqualität und gewünschter Veränderung ab. Das wird vor jeder Behandlung individuell beurteilt.']
      }
    ],
    { billing: 'Die Behandlung mit Polymilchsäure ist eine ästhetische Selbstzahlerleistung.' }
  ),
  'aesthetische-dermatologie/laser-haarentfernung': page(
    'Unerwünschte Körperbehaarung lässt sich mit einem medizinischen Diodenlaser langfristig deutlich reduzieren. In der Praxis verwenden wir dafür ein System von Asclepion mit gekühltem Handstück.',
    [
      {
        heading: 'Warum mehrere Sitzungen notwendig sind',
        paragraphs: ['Laserenergie erreicht Haarwurzeln am zuverlässigsten in einer bestimmten Wachstumsphase. Da sich nicht alle Haare gleichzeitig in dieser Phase befinden, werden Behandlungen in Abständen wiederholt. Die Zahl der Sitzungen ist individuell und hängt unter anderem von Körperregion, Haarfarbe, Haardichte und Hauttyp ab.']
      },
      {
        heading: 'Geeignete Regionen',
        bullets: ['Gesicht', 'Achseln', 'Bikinizone', 'Beine', 'Rücken und weitere Körperregionen'],
        paragraphs: ['Dunklere Haare sprechen in der Regel besser auf die Behandlung an als sehr helle oder weiße Haare. Vor Beginn prüfen wir, ob der vorhandene Haar- und Hauttyp für die Methode geeignet ist.']
      },
      {
        heading: 'Vor und nach dem Laser',
        paragraphs: ['Starke UV-Belastung und intensive Bräunung erhöhen das Risiko von Pigmentverschiebungen und sollten rund um die Behandlung vermieden werden. Kurzzeitig können Rötung, Wärmegefühl oder leichte Schwellungen auftreten.']
      }
    ],
    { billing: 'Laser-Haarentfernung ist in der Regel eine Selbstzahlerleistung.' }
  ),
  'aesthetische-dermatologie/medizinische-kosmetik': page(
    'Unsere medizinische Kosmetik ergänzt die dermatologische Behandlung dort, wo Hautpflege und professionelle kosmetische Maßnahmen sinnvoll zusammenwirken – besonders bei Akne, unreiner Haut und Rosazea.',
    [
      {
        heading: 'Behandlungen',
        paragraphs: ['Je nach Hautbild kommen unter anderem eine fachgerechte Ausreinigung, Fruchtsäurebehandlungen, mechanische Peelings beziehungsweise Mikrodermabrasion und individuell abgestimmte Pflegebehandlungen infrage.']
      },
      {
        heading: 'Kosmetik und Dermatologie zusammen gedacht',
        paragraphs: ['Bei entzündlichen oder unklaren Hautveränderungen steht zuerst die ärztliche Diagnose. Die kosmetische Behandlung wird daran angepasst und soll die medizinische Therapie ergänzen, nicht ersetzen.']
      },
      {
        heading: 'Pflege für zu Hause',
        paragraphs: ['Zu einer sinnvollen Behandlung gehört auch eine realistische Pflegeroutine. Wir empfehlen lieber wenige passende Schritte als eine große Zahl wechselnder Produkte.']
      }
    ],
    { billing: 'Kosmetische Behandlungen sind überwiegend Selbstzahlerleistungen.' }
  ),
  'aesthetische-dermatologie/peeling': page(
    'Peelings entfernen kontrolliert oberflächliche Hornschichten und können bei vergröbertem Hautbild, Unreinheiten oder oberflächlichen Pigmentverschiebungen eingesetzt werden.',
    [
      {
        heading: 'Mechanisches Peeling',
        paragraphs: ['Bei mechanischen Verfahren werden abgestorbene Hornzellen durch feine abrasive Partikel beziehungsweise Mikrodermabrasion abgetragen. Die Intensität richtet sich nach Hautbild und Empfindlichkeit.']
      },
      {
        heading: 'Chemisches Peeling',
        paragraphs: ['Chemische Peelings arbeiten beispielsweise mit Fruchtsäuren wie AHA. Konzentration und Einwirkzeit werden an Hauttyp und Behandlungsziel angepasst. Stärkere Verfahren gehören in ärztlich kontrollierte Hände.']
      },
      {
        heading: 'Nachbehandlung',
        paragraphs: ['Die Haut kann vorübergehend gerötet oder empfindlicher sein. Ein konsequenter Lichtschutz ist nach vielen Peelingverfahren besonders wichtig.']
      }
    ],
    { billing: 'Peelings werden je nach Anlass als kosmetische beziehungsweise ästhetische Selbstzahlerleistung durchgeführt.' }
  ),
  'aesthetische-dermatologie/pigmentstoerungen-narbenbehandlung': page(
    'Pigmentflecken und Narben sehen sehr unterschiedlich aus – und brauchen deshalb unterschiedliche Behandlungen. Vor einer kosmetischen Entfernung von Pigmenten steht immer die dermatologische Beurteilung.',
    [
      {
        heading: 'Pigmentveränderungen',
        paragraphs: ['Bei eindeutig gutartigen Pigmentierungen können je nach Befund Laser oder Peelingverfahren eingesetzt werden. Verdächtige oder nicht sicher einzuordnende Veränderungen werden nicht kosmetisch behandelt, sondern diagnostisch abgeklärt.']
      },
      {
        heading: 'Narben',
        paragraphs: ['Bei Akne- und anderen Narben kommen abhängig von Tiefe und Struktur unter anderem Laserbehandlungen, Microneedling, PRP und operative Korrekturen infrage. Häufig ist eine Kombination mehrerer Verfahren sinnvoller als eine einzelne Methode.']
      },
      {
        heading: 'Realistische Ziele',
        paragraphs: ['Narben lassen sich in vielen Fällen sichtbar verbessern, aber nicht vollständig „wegbehandeln“. Vor Beginn besprechen wir daher, welche Veränderung realistisch erreichbar ist.']
      }
    ],
    { billing: 'Kosmetisch motivierte Pigment- und Narbenbehandlungen sind in der Regel Selbstzahlerleistungen.' }
  ),
  'aesthetische-dermatologie/besenreiser': page(
    'Besenreiser sind kleine oberflächliche Venen, die vor allem an den Beinen sichtbar werden. Medizinisch sind sie meist harmlos, können aber kosmetisch stören.',
    [
      {
        heading: 'Vor der kosmetischen Behandlung',
        paragraphs: ['Wenn neben Besenreisern Beschwerden oder ausgeprägtere Venenveränderungen bestehen, sollte zunächst geklärt werden, ob eine relevante Venenerkrankung vorliegt. Als phlebologische Praxis können wir diese Abklärung direkt vornehmen.']
      },
      {
        heading: 'Behandlung',
        paragraphs: ['Je nach Gefäßgröße und Lage kommen Verödung und Laserbehandlung infrage. Mehrere Sitzungen können notwendig sein. Welche Methode besser passt, entscheiden wir nach Untersuchung der Gefäße.']
      },
      {
        heading: 'Zeitpunkt',
        paragraphs: ['Behandlungen werden bevorzugt in Zeiten mit geringer UV-Belastung geplant. Nach der Therapie sind die konkreten Hinweise zu Sonne, Kompression und Belastung von der eingesetzten Methode abhängig.']
      }
    ],
    { billing: 'Die rein kosmetische Behandlung von Besenreisern ist in der Regel eine Selbstzahlerleistung.' }
  ),
  'aesthetische-dermatologie/erweiterte-gesichts-aederchen': page(
    'Feine erweiterte Äderchen im Gesicht können einzeln auftreten oder beispielsweise im Rahmen einer Rosazea sichtbarer werden. Vor der Behandlung schauen wir deshalb zunächst, was hinter der Rötung steckt.',
    [
      {
        heading: 'Mögliche Verfahren',
        paragraphs: ['Je nach Durchmesser, Tiefe und Region behandeln wir Gefäße unter anderem mit Gefäßlaser, Elektrokoagulation oder bei geeigneten größeren Gefäßen mit Sklerosierung. Nicht jede Methode eignet sich für jedes Äderchen.']
      },
      {
        heading: 'Was nach der Behandlung auftreten kann',
        paragraphs: ['Vorübergehend sind Rötung, Schwellung oder punktuelle Blutergüsse möglich. Pigmentverschiebungen und sehr feine Narben sind seltene, aber mögliche Nebenwirkungen.']
      },
      {
        heading: 'Sonne vermeiden',
        paragraphs: ['Gebräunte Haut erschwert manche Gefäßbehandlungen und erhöht das Risiko von Pigmentverschiebungen. Deshalb planen wir solche Behandlungen bevorzugt außerhalb intensiver Sonnenphasen.']
      }
    ],
    { billing: 'Die kosmetische Entfernung sichtbarer Gesichtsäderchen ist in der Regel eine Selbstzahlerleistung.' }
  ),
  'aesthetische-dermatologie/sternchenangiome': page(
    'Sternchenangiome sind kleine, sternförmig verzweigte Gefäßveränderungen. Sie sind in der Regel gutartig und werden vor allem behandelt, wenn sie kosmetisch stören.',
    [
      {
        heading: 'Behandlung',
        paragraphs: ['Abhängig von Größe und Gefäßstruktur können Elektrokoagulation oder Laser eingesetzt werden. Häufig lässt sich eine kleine Veränderung in einer kurzen Sitzung behandeln; bei mehreren Befunden kann die Behandlung aufgeteilt werden.']
      },
      {
        heading: 'Danach',
        paragraphs: ['Kurzzeitig können Rötung, kleine Krusten oder ein punktueller Bluterguss entstehen. Für die Heilungsphase ist konsequenter Lichtschutz wichtig, um Pigmentverschiebungen möglichst zu vermeiden.']
      }
    ],
    { billing: 'Die Entfernung von Sternchenangiomen aus kosmetischen Gründen ist eine Selbstzahlerleistung.' }
  ),
  'aesthetische-dermatologie/tattoo-entfernung': page(
    'Tätowierungen lassen sich mit geeigneten Lasern schrittweise aufhellen und häufig weitgehend entfernen. Wie gut das gelingt, hängt von Farbe, Pigment, Tiefe, Alter und Hauttyp ab.',
    [
      {
        heading: 'Wie die Laserbehandlung funktioniert',
        paragraphs: ['Kurze Laserimpulse zerkleinern Farbpigmente in der Haut. Der Körper baut die entstandenen kleineren Partikel anschließend über längere Zeit ab. Da pro Sitzung nur ein Teil des Pigments erreicht wird, sind mehrere Behandlungen mit ausreichenden Abständen erforderlich.']
      },
      {
        heading: 'Farben reagieren unterschiedlich',
        paragraphs: ['Dunkle Pigmente lassen sich häufig besser behandeln als bestimmte helle oder farbige Pigmente. Vor Beginn beurteilen wir das Tattoo und besprechen, welche Aufhellung realistisch ist.']
      },
      {
        heading: 'Risiken und Nachsorge',
        paragraphs: ['Rötung, Schwellung, Blasen oder Krusten können auftreten. Selten bleiben Pigmentverschiebungen oder Narben zurück. Konsequenter Sonnenschutz und ungestörte Wundheilung sind wichtig.']
      }
    ],
    { billing: 'Tattoo-Entfernung ist eine Selbstzahlerleistung.' }
  )
} as const;
