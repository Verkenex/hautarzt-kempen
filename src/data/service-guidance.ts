export type ServiceGuidance = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  faq: { question: string; answer: string }[];
};

const guidanceByCategory: Record<string, ServiceGuidance> = {
  'Dermatologie': {
    heading: 'Was vor dem Termin hilfreich ist',
    paragraphs: [
      'Bei Hauterkrankungen ist der Verlauf oft genauso wichtig wie das Hautbild am Untersuchungstag. Wenn eine Veränderung nur zeitweise sichtbar ist, können eigene Fotos sehr hilfreich sein. Bringen Sie außerdem eine aktuelle Medikamentenliste und – wenn vorhanden – frühere Befunde oder Histologieberichte mit.',
      'Bitte setzen Sie verordnete Medikamente nicht eigenständig vor dem Termin ab. Wenn für eine Untersuchung etwas Besonderes vorbereitet werden muss, teilen wir Ihnen das vorher mit.'
    ],
    bullets: [
      'Fotos von früheren oder stärkeren Krankheitsphasen',
      'Namen bereits verwendeter Cremes, Tabletten oder anderer Therapien',
      'Vorbefunde bei bereits untersuchten Hauttumoren oder chronischen Erkrankungen'
    ],
    faq: [
      {
        question: 'Lässt sich die Diagnose immer sofort stellen?',
        answer: 'Viele Hauterkrankungen lassen sich klinisch gut einordnen. Manchmal sind aber eine Gewebeprobe, ein Abstrich, eine Laboruntersuchung oder eine Verlaufskontrolle notwendig. Das besprechen wir nach der Untersuchung.'
      },
      {
        question: 'Kann ich ein sichtbares Hautproblem auch online zeigen?',
        answer: 'Bei vielen gut fotografierbaren Hautproblemen ist eine erste digitale Einschätzung möglich. Dr. Moritz Berkenkamp bietet dafür über OnlineDoctor eine digitale Sprechstunde an. Hautkrebsvorsorge, unklare Pigmentmale und Untersuchungen, bei denen Tastbefund oder Geräte notwendig sind, lassen sich dadurch nicht vollständig ersetzen.'
      }
    ]
  },
  'Ästhetische Dermatologie': {
    heading: 'Vor der ästhetischen Beratung',
    paragraphs: [
      'Sie müssen vor dem Termin nicht wissen, welche Methode Sie möchten. Beschreiben Sie lieber, was Sie konkret stört und welches Ergebnis Sie sich vorstellen. Wir schauen dann, ob eine Behandlung sinnvoll ist und welches Verfahren dafür überhaupt infrage kommt.',
      'Wichtig sind Angaben zu früheren ästhetischen Behandlungen, bekannten Allergien, regelmäßigen Medikamenten und insbesondere gerinnungshemmenden Mitteln. Medikamente sollten nicht eigenständig abgesetzt werden.'
    ],
    bullets: [
      'frühere Filler-, Botulinumtoxin- oder Laserbehandlungen nennen',
      'bei Pigment- und Laserbehandlungen starke aktuelle Bräunung angeben',
      'Zeit für mögliche Rötung, Schwellung oder kleine Blutergüsse einplanen'
    ],
    faq: [
      {
        question: 'Kann direkt beim ersten Termin behandelt werden?',
        answer: 'Das hängt von Verfahren, Befund und notwendiger Aufklärung ab. Kleine Behandlungen können sich teilweise direkt anschließen; bei anderen Methoden ist ein eigener Behandlungstermin sinnvoller.'
      },
      {
        question: 'Wie lange hält ein Ergebnis?',
        answer: 'Das ist stark von der Methode abhängig. Botulinumtoxin, Hyaluronsäure, Skinbooster, Laser und Peelings haben sehr unterschiedliche Wirk- und Wiederholungsintervalle. Wir nennen deshalb keine pauschale Haltbarkeitszahl, bevor klar ist, welche Behandlung gemeint ist.'
      }
    ]
  },
  'Allergologie': {
    heading: 'Vor einer Allergieuntersuchung',
    paragraphs: [
      'Für die Allergiediagnostik ist die zeitliche Zuordnung entscheidend: Wann treten die Beschwerden auf, in welcher Umgebung und nach welchem Kontakt? Fotos eines Ekzems, Produktverpackungen oder Zutatenlisten können deshalb hilfreicher sein als eine lange allgemeine Allergieliste.',
      'Antihistaminika können bestimmte Hauttests beeinflussen. Setzen Sie diese aber nur dann vor einem geplanten Test ab, wenn Sie dazu von uns eine konkrete Anweisung erhalten haben.'
    ],
    bullets: [
      'mögliche Auslöser und Zeitpunkt der Reaktion notieren',
      'Fotos vorübergehender Hautreaktionen mitbringen',
      'bei Kontaktreaktionen Produktnamen oder Inhaltsstofflisten mitbringen'
    ],
    faq: [
      {
        question: 'Bedeutet ein positiver Allergietest automatisch eine Allergie?',
        answer: 'Nein. Ein Test zeigt zunächst eine Sensibilisierung. Entscheidend ist, ob das Ergebnis zu Ihren tatsächlichen Beschwerden und zur Exposition im Alltag passt.'
      },
      {
        question: 'Wird immer ein großer Allergietest gemacht?',
        answer: 'Nein. Wir testen gezielt nach der Krankengeschichte. Breite Testreihen ohne passende Fragestellung produzieren häufig Befunde, die im Alltag keine Bedeutung haben.'
      }
    ]
  },
  'Phlebologie': {
    heading: 'Für die Venenuntersuchung',
    paragraphs: [
      'Wenn bereits Ultraschallbefunde, Thromboseberichte oder Informationen zu früheren Venenoperationen vorliegen, bringen Sie diese bitte mit. Auch eine aktuelle Medikamentenliste – insbesondere bei Blutverdünnern – ist wichtig.',
      'Die Behandlung wird erst nach der Gefäßdiagnostik geplant. Bei Krampfadern entscheidet nicht allein das sichtbare Gefäß, sondern vor allem, wie das oberflächliche und tiefe Venensystem tatsächlich funktioniert.'
    ],
    bullets: [
      'frühere Duplex- oder Krankenhausbefunde mitbringen',
      'bestehende Kompressionsversorgung nennen',
      'bei akuter einseitiger Schwellung nicht auf einen Routinetermin warten'
    ],
    faq: [
      {
        question: 'Werden Krampfadern immer operiert?',
        answer: 'Nein. Je nach Befund reichen Kompression oder Verödung aus; bei anderen Venen sind endovenöse oder operative Verfahren sinnvoll. Die Duplexsonografie entscheidet wesentlich mit.'
      },
      {
        question: 'Kann eine akute Thrombose in der normalen Sprechstunde warten?',
        answer: 'Bei neu aufgetretener einseitiger Schwellung, Schmerzen oder deutlicher Verfärbung sollte eine Thrombose zeitnah ausgeschlossen werden. Bei Atemnot oder Brustschmerz ist sofortige Notfallhilfe erforderlich.'
      }
    ]
  },
  'Proktologie': {
    heading: 'Vor der proktologischen Untersuchung',
    paragraphs: [
      'Für die meisten Termine ist keine besondere Darmvorbereitung notwendig. Wenn in Ihrem Fall etwas vorbereitet werden soll, teilen wir Ihnen das vorher ausdrücklich mit.',
      'Notieren Sie möglichst, seit wann die Beschwerden bestehen, ob Blutungen auftreten und ob Schmerzen vor allem beim oder nach dem Stuhlgang entstehen. Diese Unterschiede helfen bei der Einordnung.'
    ],
    bullets: [
      'aktuelle Medikamente und insbesondere Blutverdünner nennen',
      'Blutungen nicht automatisch bekannten Hämorrhoiden zuschreiben',
      'bei Fieber und starken zunehmenden Schmerzen kurzfristig ärztlich vorstellen'
    ],
    faq: [
      {
        question: 'Ist die Untersuchung schmerzhaft?',
        answer: 'Die Untersuchung wird vorsichtig und an den Befund angepasst. Bei akuten sehr schmerzhaften Erkrankungen wie einer Fissur oder einem Abszess wird nicht unnötig untersucht.'
      },
      {
        question: 'Brauche ich vor dem Termin einen Einlauf?',
        answer: 'In der Regel nicht. Für die üblichen proktologischen Untersuchungen ist meist keine aufwendige Vorbereitung nötig, sofern wir Ihnen nichts anderes mitteilen.'
      }
    ]
  }
};

const onlineDoctorSlugs = new Set([
  'dermatologie',
  'dermatologie/akne',
  'dermatologie/atopische-dermatitis',
  'dermatologie/nesselsucht-urtikaria',
  'dermatologie/sonnenallergie',
  'dermatologie/seborrhoisches-ekzem',
  'dermatologie/blutschwaemmchen-haemangiome',
  'dermatologie/altersflecken-sonnenflecken',
  'dermatologie/alterswarzen-hornwarzen',
  'dermatologie/stielwarzen-fibrome',
  'dermatologie/milien',
  'dermatologie/xanthelasmen'
]);

export const getServiceGuidance = (category: string) => guidanceByCategory[category];
export const canUseOnlineDoctor = (slug: string) => onlineDoctorSlugs.has(slug);
