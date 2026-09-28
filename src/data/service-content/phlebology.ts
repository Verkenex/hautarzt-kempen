import { page } from './types';

export const phlebologyContent = {
  'venenheilkunde-phlebologie': page(
    'Zur Phlebologie gehören Erkrankungen der oberflächlichen und tiefen Venen. In unserer Praxis verbinden wir die klinische Untersuchung mit moderner Gefäßdiagnostik und behandeln ausgewählte Venenerkrankungen ambulant.',
    [
      {
        heading: 'Diagnostik',
        paragraphs: ['Je nach Fragestellung nutzen wir klinische Untersuchung, Doppler- beziehungsweise Duplexsonografie und weitere funktionelle Messverfahren. Bei Verdacht auf eine akute Thrombose ist eine zeitnahe Abklärung erforderlich.']
      },
      {
        heading: 'Behandlung',
        paragraphs: ['Bei oberflächlichen Varizen kommen abhängig vom Befund unter anderem Sklerosierung, endovenöse Laserverfahren und Miniphlebektomie nach Varady infrage. Kompressionstherapie bleibt bei vielen venösen Erkrankungen ein wichtiger Bestandteil.']
      }
    ]
  ),
  'venenheilkunde-phlebologie/chronische-venoese-insuffizienz-cvi': page(
    'Bei einer chronisch venösen Insuffizienz funktioniert der Rücktransport des Blutes aus den Beinen nicht mehr ausreichend. Schweregefühl, Schwellungen, Hautveränderungen oder ausgeprägte Varizen können die Folge sein.',
    [
      {
        heading: 'Untersuchung',
        paragraphs: ['Neben Anamnese und körperlicher Untersuchung beurteilen wir das Venensystem mit farbcodierter Duplexsonografie. So lässt sich erkennen, welche Venenabschnitte betroffen sind und ob ein Eingriff überhaupt sinnvoll ist.']
      },
      {
        heading: 'Behandlung',
        paragraphs: ['Die Therapie kann von Kompression und Bewegung bis zu Sklerosierung, endovenöser Laserbehandlung oder Miniphlebektomie reichen. Die Methode richtet sich nach Anatomie und Ausprägung – nicht danach, möglichst viel zu behandeln.']
      }
    ]
  ),
  'venenheilkunde-phlebologie/postthrombotisches-syndrom': page(
    'Nach einer tiefen Beinvenenthrombose können Venenklappen dauerhaft geschädigt bleiben. Dadurch kann sich ein postthrombotisches Syndrom mit Schwellung, Schweregefühl und Hautveränderungen entwickeln.',
    [
      {
        heading: 'Diagnostik',
        paragraphs: ['Wir beurteilen die Beschwerden, untersuchen das Bein und kontrollieren das tiefe und oberflächliche Venensystem mit Duplexsonografie.']
      },
      {
        heading: 'Behandlung',
        paragraphs: ['Ein wichtiger Baustein ist die individuell angepasste Kompression. Zusätzlich werden Hautveränderungen, Ödeme und gegebenenfalls relevante oberflächliche Venenbefunde gezielt behandelt.']
      }
    ]
  ),
  'venenheilkunde-phlebologie/tiefe-beinvenenthrombose': page(
    'Eine tiefe Beinvenenthrombose muss rasch erkannt werden, weil sich ein Blutgerinnsel lösen und eine Lungenembolie verursachen kann.',
    [
      {
        heading: 'Typische Warnzeichen',
        paragraphs: ['Einseitige Schwellung, neu aufgetretene Schmerzen, Spannungsgefühl oder eine auffällige Verfärbung können auf eine Thrombose hinweisen, sind aber nicht beweisend.']
      },
      {
        heading: 'Abklärung',
        paragraphs: ['Bei entsprechendem Verdacht erfolgt eine strukturierte Risikoeinschätzung und in geeigneten Fällen eine Duplexsonografie; ergänzend können Laborwerte erforderlich sein. Bestätigt sich eine Thrombose, wird die notwendige gerinnungshemmende Behandlung eingeleitet beziehungsweise koordiniert.']
      }
    ],
    { note: 'Plötzliche Atemnot, Brustschmerz oder Kreislaufprobleme können Zeichen einer Lungenembolie sein und erfordern sofortige Notfallhilfe.' }
  )
} as const;
