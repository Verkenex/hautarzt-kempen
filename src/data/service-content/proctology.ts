import { page } from './types';

export const proctologyContent = {
  'proktologie': page(
    'Beschwerden am After und Enddarm sind häufig – und für viele Menschen unangenehm anzusprechen. Für uns gehören sie zur normalen fachärztlichen Arbeit. Eine kurze Untersuchung reicht oft schon, um die Ursache einzugrenzen.',
    [
      {
        heading: 'Untersuchung',
        paragraphs: ['Je nach Beschwerden gehören Inspektion, vorsichtige Tastuntersuchung und Proktoskopie zur Diagnostik. Ziel ist, Hämorrhoiden, Fissuren, Ekzeme, Thrombosen, Abszesse und andere Ursachen voneinander zu unterscheiden.']
      },
      {
        heading: 'Behandlung',
        paragraphs: ['Viele proktologische Erkrankungen lassen sich ambulant konservativ oder mit kleinen Eingriffen behandeln. Bei komplexen Fisteln, fortgeschrittenen Befunden oder notwendigen größeren Operationen überweisen wir gezielt an spezialisierte chirurgische Zentren.']
      }
    ]
  ),
  'proktologie/analekzem': page(
    'Ein Analekzem verursacht Juckreiz, Brennen und gerötete, gereizte Haut am After. Häufig liegt nicht nur eine Hauterkrankung vor, sondern ein zusätzlicher Auslöser wie Feuchtigkeit, Hämorrhoiden oder eine Kontaktreaktion.',
    [
      {
        heading: 'Ursache finden',
        paragraphs: ['Wir untersuchen Haut und Analregion und prüfen, ob beispielsweise Hämorrhoiden, eine Infektion oder eine Kontaktallergie zur Reizung beiträgt. Bei passender Fragestellung kann ein Epikutantest sinnvoll sein.']
      },
      {
        heading: 'Behandlung',
        paragraphs: ['Wichtig sind eine schonende Analhygiene und die Behandlung der zugrunde liegenden Ursache. Kurzzeitig kommen je nach Befund entzündungshemmende oder andere lokale Medikamente infrage.']
      }
    ]
  ),
  'proktologie/analfissuren': page(
    'Eine Analfissur ist ein schmerzhafter Einriss der Haut am After. Typisch sind stechende Schmerzen beim Stuhlgang und gelegentlich helles Blut am Papier.',
    [
      {
        heading: 'Akute Fissur',
        paragraphs: ['Bei frischen Fissuren steht eine weiche Stuhlkonsistenz im Mittelpunkt. Ergänzend helfen lokale schmerzlindernde beziehungsweise muskelentspannende Maßnahmen und eine schonende Pflege.']
      },
      {
        heading: 'Chronischer Verlauf',
        paragraphs: ['Besteht die Fissur länger oder heilt trotz konsequenter Behandlung nicht ab, prüfen wir weitere Therapieoptionen. In ausgewählten Fällen kann ein operatives Vorgehen notwendig werden.']
      }
    ]
  ),
  'proktologie/analabzesse-perianalabzesse': page(
    'Ein Anal- oder Perianalabszess ist eine schmerzhafte Eiteransammlung in der Umgebung des Afters. Er kann sich innerhalb kurzer Zeit deutlich verschlechtern.',
    [
      {
        heading: 'Behandlung',
        paragraphs: ['Ein ausgeprägter Abszess muss in der Regel chirurgisch eröffnet und entlastet werden. Antibiotika allein ersetzen die Drainage häufig nicht.']
      },
      {
        heading: 'Fistel ausschließen',
        paragraphs: ['Hinter einem Perianalabszess kann eine Analfistel stehen. Nach Abheilung des akuten Befundes prüfen wir deshalb, ob ein Fistelgang weiterbesteht und ob eine spezialisierte operative Behandlung notwendig ist.']
      }
    ],
    { note: 'Starke Schmerzen, Fieber oder rasche Verschlechterung erfordern eine kurzfristige ärztliche Vorstellung.' }
  ),
  'proktologie/analfisteln': page(
    'Eine Analfistel ist ein chronischer Verbindungsgang zwischen Analkanal beziehungsweise Enddarm und Haut. Sie entsteht häufig nach einem vorausgegangenen Abszess.',
    [
      {
        heading: 'Diagnose',
        paragraphs: ['Austretendes Sekret, wiederkehrende Schwellungen oder eine kleine Öffnung neben dem After können Hinweise geben. Die genaue Lage des Fistelgangs muss vor einer Therapie sorgfältig beurteilt werden.']
      },
      {
        heading: 'Behandlung',
        paragraphs: ['Die definitive Behandlung ist meist chirurgisch. Weil der Verlauf in Beziehung zum Schließmuskel entscheidend ist, werden komplexe Fisteln an entsprechend spezialisierte koloproktologische Zentren überwiesen.']
      }
    ]
  ),
  'proktologie/inkontinenz': page(
    'Stuhlinkontinenz ist ein häufig verschwiegenes Problem und kann sehr unterschiedliche Ursachen haben. Eine genaue Einordnung ist Voraussetzung für eine sinnvolle Therapie.',
    [
      {
        heading: 'Abklärung',
        paragraphs: ['Wir erfassen Art und Häufigkeit der Beschwerden, untersuchen die Analregion und beurteilen den Schließmuskel klinisch. Je nach Befund sind weiterführende gastroenterologische oder chirurgische Untersuchungen sinnvoll.']
      },
      {
        heading: 'Therapie',
        paragraphs: ['Die Behandlung richtet sich nach Ursache und Ausprägung und kann Stuhlregulation, Beckenbodentraining und weitere konservative Maßnahmen umfassen. Für spezielle Funktionsdiagnostik oder operative Verfahren arbeiten wir mit spezialisierten Stellen zusammen.']
      }
    ]
  ),
  'proktologie/anal-venen-thrombosen': page(
    'Eine Analvenenthrombose ist ein plötzlich entstandener, oft sehr schmerzhafter bläulicher Knoten am Analrand. Sie ist nicht mit einer tiefen Beinvenenthrombose zu verwechseln.',
    [
      {
        heading: 'Verlauf',
        paragraphs: ['Kleinere Thrombosen bilden sich häufig innerhalb von Tagen bis wenigen Wochen von selbst zurück. Schmerzbehandlung, lokale Maßnahmen und weicher Stuhl können diese Zeit erleichtern.']
      },
      {
        heading: 'Operative Entlastung',
        paragraphs: ['Bei sehr starken Schmerzen und einem frischen ausgeprägten Befund kann eine kleine operative Entfernung beziehungsweise Entlastung sinnvoll sein.']
      }
    ]
  ),
  'proktologie/marisken': page(
    'Marisken sind weiche Hautfalten am Analrand. Sie sind gutartig, können aber bei der Hygiene stören oder nach früheren Entzündungen beziehungsweise Thrombosen zurückbleiben.',
    [
      {
        heading: 'Untersuchung',
        paragraphs: ['Da gleichzeitig Hämorrhoiden oder andere proktologische Veränderungen bestehen können, beurteilen wir nicht nur die Hautfalte selbst, sondern bei Bedarf auch den Analkanal.']
      },
      {
        heading: 'Entfernung',
        paragraphs: ['Wenn Marisken dauerhaft Beschwerden bei der Reinigung verursachen oder kosmetisch stark stören, können sie in einem kleinen Eingriff entfernt werden.']
      }
    ]
  ),
  'proktologie/haemorrhoiden': page(
    'Hämorrhoiden sind normale Gefäßpolster am Enddarm. Beschwerden entstehen erst, wenn sie sich vergrößern und beispielsweise Blutungen, Nässen, Juckreiz oder ein Fremdkörpergefühl verursachen.',
    [
      {
        heading: 'Diagnose',
        paragraphs: ['Zur Untersuchung gehören Inspektion, Tastuntersuchung und meist eine kurze Proktoskopie. Nicht jede Blutung am After ist automatisch durch Hämorrhoiden verursacht.']
      },
      {
        heading: 'Behandlung in der Praxis',
        paragraphs: ['Bei kleineren Hämorrhoiden kommen konservative Maßnahmen und Verödung infrage. Je nach Stadium kann auch eine Gummibandligatur sinnvoll sein. Für ausgewählte weiter fortgeschrittene Befunde steht eine Laserbehandlung zur Verfügung.']
      },
      {
        heading: 'Wann wir überweisen',
        paragraphs: ['Größere operative Eingriffe bei fortgeschrittenen Hämorrhoiden gehören in spezialisierte chirurgische Zentren.']
      }
    ]
  ),
  'proktologie/darmkrebs': page(
    'Blut im Stuhl, eine neu veränderte Stuhlgewohnheit oder ungeklärte Beschwerden im Enddarm sollten ernst genommen werden. Gleichzeitig haben solche Symptome viele häufigere, gutartige Ursachen.',
    [
      {
        heading: 'Was wir proktologisch beurteilen können',
        paragraphs: ['Wir untersuchen den Analbereich und den unteren Enddarm und können dortige Ursachen wie Hämorrhoiden, Fissuren oder andere Veränderungen erkennen.']
      },
      {
        heading: 'Darmkrebsvorsorge und Koloskopie',
        paragraphs: ['Die vollständige Darmkrebsvorsorge und insbesondere die Koloskopie gehören in gastroenterologische beziehungsweise entsprechend qualifizierte fachärztliche Hände. Wenn die Beschwerden oder der Befund das erforderlich machen, empfehlen wir die weiterführende Abklärung.']
      }
    ],
    { note: 'Sichtbares Blut im Stuhl sollte abgeklärt werden – auch dann, wenn bereits Hämorrhoiden bekannt sind.' }
  )
} as const;
