import { page } from './types';

export const dermatologyContent = {
  'dermatologie': page(
    'Haut, Haare und Nägel sind unser tägliches Arbeitsgebiet. Viele Beschwerden lassen sich schon durch eine sorgfältige Untersuchung gut einordnen; bei Bedarf ergänzen wir Dermatoskopie, Labordiagnostik, Gewebeproben, LC-OCT, Laser oder operative Verfahren.',
    [
      {
        heading: 'Was wir behandeln',
        paragraphs: ['Zum Spektrum gehören häufige entzündliche Erkrankungen wie Akne, Neurodermitis und Psoriasis ebenso wie Infektionen, Haarausfall, Nagelerkrankungen, gutartige Hautveränderungen und Hautkrebs. Ein besonderer Schwerpunkt der Praxis liegt auf Hautkrebsvorsorge und operativer Dermatologie.']
      },
      {
        heading: 'Diagnostik in der Praxis',
        bullets: ['klinische Untersuchung und Auflichtmikroskopie', 'digitale Dokumentation auffälliger Pigmentmale', 'Hautbiopsien und histologische Abklärung', 'LC-OCT bei ausgewählten Hauttumoren und weiteren Fragestellungen', 'allergologische und labormedizinische Diagnostik je nach Befund']
      },
      {
        heading: 'Behandlung',
        paragraphs: ['Welche Therapie sinnvoll ist, hängt vom konkreten Befund ab. Neben klassischen dermatologischen Medikamenten stehen in der Praxis operative Verfahren, verschiedene Lasersysteme, Photodynamische Therapie und weitere apparative Methoden zur Verfügung.']
      }
    ]
  ),
  'dermatologie/hautkrebsvorsorge': page(
    'Bei der Hautkrebsvorsorge untersuchen wir die gesamte Haut auf verdächtige Veränderungen. Auffällige Stellen werden mit dem Dermatoskop vergrößert beurteilt und bei Bedarf digital dokumentiert oder weiter abgeklärt.',
    [
      {
        heading: 'So läuft die Untersuchung ab',
        paragraphs: ['Die Untersuchung umfasst die gesamte Haut und die einsehbaren Schleimhäute. Wichtig ist deshalb, dass auch Stellen angesehen werden können, die Sie selbst schlecht kontrollieren können. Verdächtige Veränderungen beurteilen wir mit Auflichtmikroskopie; bei ausgewählten Befunden kommen digitale Bilddokumentation oder LC-OCT hinzu.']
      },
      {
        heading: 'Kassenleistung',
        paragraphs: ['Gesetzlich Versicherte haben ab dem 35. Geburtstag grundsätzlich alle zwei Jahre Anspruch auf ein Hautkrebs-Screening. Manche Krankenkassen bieten zusätzliche Früherkennungsleistungen schon in jüngeren Jahren an. Maßgeblich ist der jeweilige Versicherungsvertrag beziehungsweise das Kassenprogramm.']
      },
      {
        heading: 'Wann Sie nicht bis zum nächsten Screening warten sollten',
        paragraphs: ['Neue, sich deutlich verändernde, ungewöhnlich blutende oder nicht abheilende Hautveränderungen sollten unabhängig vom regulären Vorsorgeintervall ärztlich beurteilt werden. Bei einem konkreten Verdacht vereinbaren wir die notwendige weitere Diagnostik.']
      }
    ]
  ),
  'dermatologie/hautkrebs': page(
    'Hautkrebs ist kein einzelnes Krankheitsbild. In der Praxis unterscheiden wir vor allem Basalzellkarzinome und Plattenepithelkarzinome des sogenannten weißen Hautkrebses sowie das maligne Melanom. Behandlung und Dringlichkeit richten sich nach Tumorart, Lokalisation und Ausdehnung.',
    [
      {
        heading: 'Diagnose',
        paragraphs: ['Am Anfang stehen die klinische Untersuchung und die Dermatoskopie. Bei ausgewählten verdächtigen Veränderungen kann die LC-OCT zusätzliche Informationen liefern. Wenn für die sichere Diagnose Gewebe notwendig ist, erfolgt eine Biopsie oder operative Entfernung mit feingeweblicher Untersuchung.']
      },
      {
        heading: 'Behandlung in Kempen',
        paragraphs: ['Ein Schwerpunkt der Praxis ist die operative Dermatologie. Viele Hauttumoren können ambulant in Lokalanästhesie entfernt werden. Bei größeren Defekten stehen auch plastisch-rekonstruktive Verfahren und Hauttransplantationen zur Verfügung. Fälle, die eine weiterführende Tumordiagnostik oder interdisziplinäre Behandlung benötigen, überweisen wir gezielt an eine Hautklinik.']
      },
      {
        heading: 'Vorstufen',
        paragraphs: ['Aktinische Keratosen und andere oberflächliche Vorstufen müssen nicht immer operiert werden. Je nach Befund kommen unter anderem Kryotherapie, lokale Medikamente, oberflächliche Verfahren oder Photodynamische Therapie infrage.']
      }
    ]
  ),
  'dermatologie/weisser-hautkrebs': page(
    'Zum weißen Hautkrebs zählen vor allem Basalzellkarzinome und Plattenepithelkarzinome. Sie treten besonders häufig an chronisch sonnenexponierten Stellen auf und können sehr unterschiedlich aussehen.',
    [
      {
        heading: 'Untersuchung',
        paragraphs: ['Wir beurteilen verdächtige Veränderungen klinisch und mit dem Dermatoskop. Je nach Situation ergänzen wir Fotodokumentation, LC-OCT oder eine Gewebeprobe. Die endgültige Diagnose wird bei operativ entfernten Tumoren histologisch gesichert.']
      },
      {
        heading: 'Therapie',
        paragraphs: ['Bei invasivem weißem Hautkrebs ist die vollständige operative Entfernung häufig die wichtigste Behandlung. In unserer Praxis führen wir ambulante Tumoroperationen einschließlich rekonstruktiver Verschlusstechniken durch. Für oberflächliche Vorstufen stehen auch nichtoperative Verfahren zur Verfügung.']
      },
      {
        heading: 'Nachsorge',
        paragraphs: ['Nach einem Hauttumor sind regelmäßige Hautkontrollen sinnvoll. Das individuelle Intervall richtet sich nach Tumorart, Befund und persönlichem Risiko.']
      }
    ]
  ),
  'dermatologie/schwarzer-hautkrebs-malignes-melanom': page(
    'Das maligne Melanom kann frühzeitig sehr unauffällig wirken. Deshalb ist nicht nur die Größe eines Pigmentmals entscheidend, sondern vor allem, ob sich Form, Farbe oder Verhalten verändern.',
    [
      {
        heading: 'Abklärung verdächtiger Pigmentmale',
        paragraphs: ['Neben der klinischen Untersuchung nutzen wir die Auflichtmikroskopie und bei Bedarf digitale Verlaufsaufnahmen. Verdächtige Pigmentmale werden vollständig entfernt und feingeweblich untersucht.']
      },
      {
        heading: 'Wenn sich ein Melanom bestätigt',
        paragraphs: ['Das weitere Vorgehen richtet sich unter anderem nach Tumordicke und histologischem Befund. Die operative Versorgung erfolgt entsprechend dem Befund; wenn zusätzliche Diagnostik oder eine onkologische Mitbehandlung notwendig ist, arbeiten wir mit spezialisierten Hautkliniken zusammen.']
      },
      {
        heading: 'Kontrollen',
        paragraphs: ['Nach einem Melanom ist eine strukturierte Nachsorge wichtig. Umfang und Abstände werden individuell nach Tumorstadium und Leitlinien festgelegt.']
      }
    ]
  ),
  'dermatologie/operative-dermatologie': page(
    'Operative Dermatologie gehört seit vielen Jahren zu den Schwerpunkten der Praxis. Dafür stehen zwei überdruckbelüftete, zertifizierte Operationsräume und weitere Eingriffsräume zur Verfügung.',
    [
      {
        heading: 'Welche Eingriffe wir durchführen',
        paragraphs: ['Wir entfernen gutartige und bösartige Hautveränderungen ambulant und führen bei größeren Defekten auch rekonstruktive Eingriffe durch. Dazu gehören lokale Lappenplastiken und freie Hauttransplantate, insbesondere wenn nach einer Tumorentfernung im Gesicht ein funktionell und kosmetisch guter Wundverschluss wichtig ist.']
      },
      {
        heading: 'Betäubung und Ablauf',
        paragraphs: ['Alle operativen Eingriffe unserer Praxis erfolgen ambulant in örtlicher Betäubung. Eine Vollnarkose bieten wir nicht an. Vor der Operation erklären wir Vorgehen, Nachbehandlung und die zu erwartende Narbe. Entferntes Gewebe wird bei medizinischer Indikation feingeweblich untersucht.']
      },
      {
        heading: 'Nach der Operation',
        paragraphs: ['Wundkontrolle und gegebenenfalls Fadenzug erfolgen in der Praxis. Wie lange Sport, Schwimmen oder stärkere Belastung pausieren sollten, hängt von Region und Eingriff ab und wird individuell besprochen.']
      }
    ]
  ),
  'dermatologie/hautuebertragung-transplantation': page(
    'Wenn ein Hautdefekt nach einer Tumorentfernung nicht sinnvoll direkt verschlossen werden kann, kann eine Hauttransplantation notwendig sein. Solche Eingriffe führen wir in geeigneten Fällen ambulant durch.',
    [
      {
        heading: 'Spalt- und Vollhaut',
        paragraphs: ['Je nach Größe, Tiefe und Lage des Defekts kommen unterschiedliche Transplantatarten infrage. Vollhaut wird vor allem für kleinere Defekte in sichtbaren Regionen eingesetzt; Spalthaut kann größere Flächen abdecken.']
      },
      {
        heading: 'Ablauf',
        paragraphs: ['Das Transplantat wird an einer geeigneten Körperstelle entnommen und auf den vorbereiteten Defekt übertragen. Auch Hauttransplantationen führen wir ambulant in örtlicher Betäubung durch; eine Vollnarkose wird in unserer Praxis nicht angeboten.']
      },
      {
        heading: 'Heilung',
        paragraphs: ['Transplantat und Entnahmestelle werden engmaschig kontrolliert. Entscheidend ist, dass die transplantierte Haut in den ersten Tagen ruhig auf dem Wundgrund liegt und gut einheilen kann.']
      }
    ]
  ),
  'dermatologie/lc-oct': page(
    'Seit Januar 2025 setzen wir in Kempen die Line-Field konfokale optische Kohärenztomografie (LC-OCT) ein. Das Verfahren bildet die obersten Hautschichten ohne Gewebeentnahme in sehr hoher Auflösung ab.',
    [
      {
        heading: 'Wofür wir LC-OCT nutzen',
        paragraphs: ['Besonders hilfreich ist die Methode bei weißem Hautkrebs und seinen Vorstufen. Sie kann dabei unterstützen, eine auffällige Veränderung genauer einzuordnen und bei geplanten Operationen die Ausdehnung eines Tumors vorab besser abzuschätzen.']
      },
      {
        heading: 'Untersuchung',
        paragraphs: ['Die verdächtige Stelle wird zunächst klinisch und dermatoskopisch erfasst. Anschließend wird die Haut mit dem LC-OCT-Gerät kontaktlos beziehungsweise schonend optisch untersucht. Die Bildauswertung wird durch softwaregestützte Verfahren unterstützt.']
      },
      {
        heading: 'Weitere Einsatzgebiete',
        paragraphs: ['Neben Tumorfragestellungen kann LC-OCT bei ausgewählten entzündlichen oder infektiologischen Befunden zusätzliche Informationen liefern, beispielsweise bei Hautmilben oder Nagelpilz. Die Untersuchung ersetzt nicht in jedem Fall eine Histologie.']
      }
    ],
    { billing: 'Ob und in welchem Umfang Kosten übernommen werden, hängt von Versicherungsstatus und konkreter Fragestellung ab. Wir klären dies vor der Untersuchung.' }
  ),
  'dermatologie/laser': page(
    'Laser sind kein einzelnes Behandlungsverfahren. Unterschiedliche Wellenlängen wirken auf unterschiedliche Zielstrukturen – etwa Gefäße, Pigmente, Haare oder oberflächliches Gewebe.',
    [
      {
        heading: 'Lasersysteme in der Praxis',
        paragraphs: ['Die Praxis verfügt über ein ungewöhnlich breites Spektrum verschiedener Systeme. Dazu zählen unter anderem Erbium-YAG-, CO₂-, Nd:YAG-, KTP-, Farbstoff-, Rubin-, Excimer-, Alexandrit-, Varizen-, Nagel- und Enthaarungslaser sowie ergänzende IPL- und Plasmasysteme.']
      },
      {
        heading: 'Wofür Laser eingesetzt werden',
        paragraphs: ['Je nach Gerät behandeln wir unter anderem Gefäßveränderungen, Pigmente, Narben, störende Hautveränderungen, unerwünschte Haare, Tätowierungen und ausgewählte medizinische Befunde. Vor jeder Laserbehandlung muss feststehen, was genau behandelt wird und ob Laser dafür die geeignete Methode ist.']
      },
      {
        heading: 'Risiken und Lichtschutz',
        paragraphs: ['Rötung, Schwellung, Krusten oder vorübergehende Pigmentverschiebungen sind je nach Verfahren möglich; Narben sind selten, aber nicht ausgeschlossen. Für viele Anwendungen ist konsequenter UV-Schutz vor und nach der Behandlung wichtig.']
      }
    ],
    { billing: 'Viele ambulante Laserbehandlungen sind keine reguläre Leistung der gesetzlichen Krankenversicherung. Eine mögliche Kostenübernahme hängt von Indikation und Versicherung ab.' }
  ),
  'dermatologie/photodynamische-therapie-pdt': page(
    'Die Photodynamische Therapie (PDT) ist ein flächiges Verfahren vor allem für aktinische Keratosen und ausgewählte sehr oberflächliche Hauttumorvorstufen.',
    [
      {
        heading: 'Wie PDT funktioniert',
        paragraphs: ['Auf die betroffene Haut wird ein photosensibilisierender Wirkstoff aufgetragen. Nach einer Einwirkzeit wird das behandelte Areal mit einer geeigneten Lichtquelle aktiviert. Dadurch werden krankhaft veränderte Zellen gezielt geschädigt.']
      },
      {
        heading: 'Wann wir sie einsetzen',
        paragraphs: ['PDT eignet sich besonders für größere sonnenbedingte Areale mit vielen aktinischen Keratosen. Bei Verdacht auf einen tiefer wachsenden Hauttumor reicht eine rein oberflächliche Behandlung nicht aus; dann ist zunächst eine sichere Diagnose notwendig.']
      },
      {
        heading: 'Nach der Behandlung',
        paragraphs: ['Während und nach der Belichtung können Brennen, Rötung, Schwellung und Krusten entstehen. Die Haut heilt in den folgenden Tagen ab und muss konsequent vor Sonne geschützt werden.']
      }
    ],
    { billing: 'Die Kostenübernahme ist abhängig von Indikation und Kostenträger. Bei beruflich bedingten UV-Schäden können besondere Regelungen gelten.' }
  ),
  'dermatologie/hauttumorsprechstunde-notfaelle': page(
    'Die Hauttumorsprechstunde ist für dringliche Fälle gedacht, bei denen bereits ein konkreter Verdacht auf Hautkrebs besteht oder ein Hauttumor diagnostiziert wurde. Sie ersetzt keine allgemeine Akutsprechstunde.',
    [
      {
        heading: 'Für wen die Sprechstunde gedacht ist',
        paragraphs: ['Wenn ein überweisender Arzt einen begründeten Tumorverdacht sieht und eine kurzfristige dermatologische Abklärung notwendig ist, kann die Vorstellung über diese Sprechstunde organisiert werden.']
      },
      {
        heading: 'So melden Sie sich an',
        paragraphs: ['Bitte lassen Sie sich eine Überweisung mit konkreter Verdachtsdiagnose ausstellen. Die Überweisung kann nach Absprache persönlich in der Praxis vorgelegt oder für die Terminorganisation an die Praxis übermittelt werden.']
      },
      {
        heading: 'Nicht für Routinekontrollen',
        paragraphs: ['Einzelne Muttermale, aktinische Keratosen oder länger bekannte Veränderungen ohne dringenden Tumorverdacht gehören grundsätzlich in die reguläre dermatologische Sprechstunde beziehungsweise Hautkrebsvorsorge.']
      }
    ],
    { note: 'Bei einer akuten medizinischen Verschlechterung oder einem allgemeinen Notfall nutzen Sie bitte die reguläre Akutversorgung.' }
  ),
  'dermatologie/akne': page(
    'Akne ist eine entzündliche Erkrankung der Talgdrüsenfollikel. Sie betrifft nicht nur Jugendliche und kann – vor allem bei tiefen Entzündungen – Narben hinterlassen.',
    [
      {
        heading: 'Untersuchung und Behandlung',
        paragraphs: ['Wir beurteilen Ausprägung, Entzündung und Narbenrisiko und wählen die Therapie entsprechend. Möglich sind äußerliche Wirkstoffe, bei stärkerer Akne auch Tabletten. Eine systemische Isotretinointherapie wird nur unter den dafür erforderlichen Kontrollen durchgeführt.']
      },
      {
        heading: 'Medizinische Kosmetik',
        paragraphs: ['Eine professionelle Ausreinigung und Fruchtsäurebehandlungen können die ärztliche Therapie ergänzen. Sie ersetzen die Behandlung einer entzündlichen Akne nicht, können aber bei verstopften Poren und unreiner Haut hilfreich sein.']
      },
      {
        heading: 'Aknenarben',
        paragraphs: ['Narben behandeln wir erst, wenn die aktive Akne ausreichend kontrolliert ist. Je nach Narbentyp kommen Laser, Microneedling, PRP oder operative Verfahren infrage.']
      }
    ]
  ),
  'dermatologie/atopische-dermatitis': page(
    'Neurodermitis ist eine chronisch entzündliche Hauterkrankung mit gestörter Hautbarriere. Typisch sind trockene Haut, Juckreiz und schubweise Ekzeme.',
    [
      {
        heading: 'Diagnose',
        paragraphs: ['Meist lässt sich die Erkrankung anhand von Hautbild und Verlauf erkennen. Allergietests oder weitere Untersuchungen sind sinnvoll, wenn die Vorgeschichte dafür einen konkreten Hinweis gibt.']
      },
      {
        heading: 'Therapie',
        paragraphs: ['Grundlage ist eine konsequente rückfettende Hautpflege. Im Schub kommen entzündungshemmende Cremes oder Salben zum Einsatz; je nach Ausprägung können Phototherapie oder systemische Medikamente einschließlich moderner zielgerichteter Therapien notwendig sein.']
      },
      {
        heading: 'Alltag',
        paragraphs: ['Zu heißes Duschen, aggressive Reinigungsprodukte und individuelles Kratzen verschlechtern häufig den Verlauf. Wir besprechen deshalb nicht nur Medikamente, sondern auch eine alltagstaugliche Hautpflege.']
      }
    ]
  ),
  'dermatologie/nesselsucht-urtikaria': page(
    'Bei einer Nesselsucht entstehen plötzlich juckende Quaddeln, manchmal begleitet von Schwellungen. Die Ursache ist nicht automatisch eine Allergie.',
    [
      {
        heading: 'Akut oder chronisch',
        paragraphs: ['Eine akute Urtikaria klingt häufig innerhalb kurzer Zeit wieder ab. Bestehen Beschwerden länger als sechs Wochen oder treten sie immer wieder auf, sprechen wir von einer chronischen Urtikaria und klären gezielter nach möglichen Auslösern.']
      },
      {
        heading: 'Diagnostik',
        paragraphs: ['Entscheidend sind Verlauf und Begleitumstände. Allergietests, Blutuntersuchungen oder weitere Diagnostik setzen wir nicht pauschal, sondern abhängig von der Vorgeschichte ein.']
      },
      {
        heading: 'Behandlung',
        paragraphs: ['Antihistaminika sind häufig die Grundlage der Therapie. Bei schweren oder chronischen Verläufen stehen weitere Behandlungsmöglichkeiten zur Verfügung.']
      }
    ]
  ),
  'dermatologie/sonnenallergie': page(
    'Die sogenannte Sonnenallergie ist meist keine klassische Allergie, sondern eine lichtbedingte Hautreaktion. Häufig handelt es sich um eine polymorphe Lichtdermatose.',
    [
      {
        heading: 'Typischer Verlauf',
        paragraphs: ['Juckende Rötungen, Knötchen oder Bläschen entstehen meist nach ungewohnter intensiver Sonne, häufig im Frühjahr oder zu Beginn eines Urlaubs. Das Muster und der zeitliche Zusammenhang helfen bei der Diagnose.']
      },
      {
        heading: 'Akutbehandlung',
        paragraphs: ['Im akuten Schub helfen konsequente Sonnenpause, kühlende Pflege und je nach Ausprägung entzündungshemmende äußerliche Medikamente.']
      },
      {
        heading: 'Vorbeugung',
        paragraphs: ['Wichtig ist ein hoher UVA- und UVB-Schutz. Bei ausgeprägten wiederkehrenden Beschwerden kann vor der sonnenreichen Jahreszeit eine kontrollierte Lichtgewöhnung infrage kommen.']
      }
    ]
  ),
  'dermatologie/haarausfall': page(
    'Haarausfall hat viele mögliche Ursachen. Deshalb ist die erste Frage nicht „welches Mittel hilft?“, sondern welche Form des Haarausfalls tatsächlich vorliegt.',
    [
      {
        heading: 'Diagnostik',
        paragraphs: ['Wir erheben Verlauf, Medikamente, Vorerkrankungen und familiäre Faktoren und untersuchen Kopfhaut und Haare. Je nach Befund ergänzen wir Dermatoskopie und Blutuntersuchungen.']
      },
      {
        heading: 'Behandlung',
        paragraphs: ['Die Therapie richtet sich nach der Ursache – etwa erblich bedingtem Haarausfall, diffusem Haarausfall oder entzündlichen Erkrankungen der Kopfhaut. Nicht jede Therapie ist für jede Form geeignet.']
      },
      {
        heading: 'PRP',
        paragraphs: ['Bei ausgewählten Formen kann plättchenreiches Plasma als ergänzende Selbstzahlerbehandlung angeboten werden. Ob das sinnvoll ist, besprechen wir erst nach Diagnose.']
      }
    ]
  ),
  'dermatologie/schuppenflechte-psoriasis': page(
    'Psoriasis ist eine chronisch entzündliche Erkrankung, die weit mehr sein kann als trockene oder schuppige Haut. Verlauf und Ausprägung unterscheiden sich stark.',
    [
      {
        heading: 'Diagnose',
        paragraphs: ['Typische Plaques lassen sich meist klinisch erkennen. Bei unklaren Befunden können zusätzliche Untersuchungen notwendig sein. Auch Nägel und Gelenkbeschwerden gehören in die Anamnese.']
      },
      {
        heading: 'Therapie',
        paragraphs: ['Bei begrenzter Psoriasis kommen vor allem äußerliche Medikamente infrage. In der Praxis stehen zudem lichttherapeutische Verfahren zur Verfügung. Bei schwerer oder ausgedehnter Erkrankung prüfen wir, ob eine systemische Behandlung erforderlich ist.']
      },
      {
        heading: 'Langfristige Betreuung',
        paragraphs: ['Psoriasis lässt sich heute meist gut kontrollieren, bleibt aber eine chronische Erkrankung. Die Therapie wird deshalb an Verlauf, Lebensqualität und Begleiterkrankungen angepasst.']
      }
    ]
  ),
  'dermatologie/seborrhoisches-ekzem': page(
    'Das seborrhoische Ekzem zeigt sich meist durch Rötung und fettig-gelbliche Schuppung an Kopfhaut, Gesicht oder hinter den Ohren. Es verläuft häufig in Schüben.',
    [
      {
        heading: 'Abklärung',
        paragraphs: ['Das typische Hautbild ist meist eindeutig. Bei ungewöhnlichem Verlauf kann eine Pilzdiagnostik helfen, andere Erkrankungen abzugrenzen.']
      },
      {
        heading: 'Behandlung',
        paragraphs: ['Je nach Region verwenden wir medizinische Shampoos, antimykotische oder entzündungshemmende Lösungen und Cremes. Nach Abheilung kann eine Erhaltungspflege helfen, Rückfälle seltener werden zu lassen.']
      }
    ]
  ),
  'dermatologie/nagelpilz': page(
    'Verdickte oder verfärbte Nägel sind nicht automatisch Nagelpilz. Vor einer längeren Behandlung sollte deshalb möglichst geklärt werden, ob tatsächlich eine Pilzinfektion vorliegt.',
    [
      {
        heading: 'Diagnostik',
        paragraphs: ['Je nach Befund entnehmen wir Nagelmaterial für Mikroskopie, Kultur oder molekulare Diagnostik. Bei ausgewählten Fragestellungen kann auch LC-OCT zusätzliche Hinweise liefern.']
      },
      {
        heading: 'Therapie',
        paragraphs: ['Bei geringem Befall reichen häufig medizinische Lacke oder lokale Maßnahmen. Bei stärkerem Befall können Tabletten notwendig werden. Zusätzlich steht in der Praxis eine Laserbehandlung als mögliche ergänzende Selbstzahlerleistung zur Verfügung.']
      },
      {
        heading: 'Geduld gehört dazu',
        paragraphs: ['Ein gesunder Nagel muss nach der erfolgreichen Behandlung erst nachwachsen. An den Zehen kann das viele Monate dauern.']
      }
    ]
  ),
  'dermatologie/medizinische-fuss-nagelpflege': page(
    'Medizinische Fuß- und Nagelpflege kann bei verdickten, deformierten oder schwierig zu pflegenden Nägeln sowie bei bestimmten chronischen Haut- und Nagelproblemen eine sinnvolle Ergänzung sein.',
    [
      {
        heading: 'Was wir anbieten',
        paragraphs: ['Die Behandlung wird an den konkreten Befund angepasst und kann unter anderem fachgerechte Nagelpflege, Hornhautbehandlung und unterstützende Pflege bei dermatologischen Nagelerkrankungen umfassen.']
      },
      {
        heading: 'Ärztliche Abklärung bei Erkrankungen',
        paragraphs: ['Bei Entzündung, unklarer Verfärbung, Pilzverdacht oder schmerzhaften Veränderungen sollte zunächst ärztlich geklärt werden, was hinter dem Befund steckt.']
      }
    ],
    { billing: 'Ob Kosten übernommen werden, hängt von medizinischer Indikation und Versicherungsstatus ab.' }
  ),
  'dermatologie/prp-therapie': page(
    'PRP steht für plättchenreiches Plasma. Dafür wird eine kleine Menge eigenes Blut aufbereitet und der konzentrierte Plasmaanteil anschließend in die zu behandelnde Region eingebracht.',
    [
      {
        heading: 'Einsatzgebiete',
        paragraphs: ['In der Dermatologie wird PRP vor allem bei ausgewählten Formen von Haarausfall und zur Unterstützung der Hautregeneration eingesetzt.']
      },
      {
        heading: 'Ablauf',
        paragraphs: ['Nach der Blutentnahme wird das Plasma zentrifugiert und anschließend mit feinen Injektionen eingebracht. Leichte Rötungen, Schwellungen oder kleine Blutergüsse sind möglich.']
      },
      {
        heading: 'Einordnung',
        paragraphs: ['PRP ist keine Standardlösung für jeden Haarausfall. Vor einer Behandlung sollte geklärt sein, welche Ursache vorliegt und welche etablierten Therapieoptionen infrage kommen.']
      }
    ],
    { billing: 'PRP wird in der Regel als Selbstzahlerleistung angeboten.' }
  ),
  'dermatologie/schweissdruesenueberfunktion': page(
    'Übermäßiges Schwitzen kann Achseln, Hände, Füße oder andere Regionen betreffen und im Alltag erheblich stören. Vor der Behandlung klären wir, ob eine lokale Hyperhidrose oder ein anderer Auslöser vorliegt.',
    [
      {
        heading: 'Behandlungsmöglichkeiten',
        paragraphs: ['Je nach Region und Ausprägung kommen medizinische Antitranspiranzien, Botulinumtoxin oder operative Verfahren infrage. Nicht jede Methode eignet sich für jede Körperstelle.']
      },
      {
        heading: 'Botulinumtoxin',
        paragraphs: ['Botulinumtoxin kann die Signalübertragung an die Schweißdrüsen vorübergehend reduzieren. Die Wirkung ist zeitlich begrenzt und kann bei Bedarf wiederholt werden.']
      }
    ],
    { billing: 'Die Kostenübernahme ist von Indikation, Methode und Versicherung abhängig.' }
  ),
  'dermatologie/eingewachsener-zehnagel': page(
    'Ein eingewachsener Zehennagel entsteht häufig, wenn der seitliche Nagelrand in die Nagelfalz drückt. Schmerzen, Rötung und später eine stärkere Entzündung können die Folge sein.',
    [
      {
        heading: 'Frühe Behandlung',
        paragraphs: ['Bei milden Befunden können Druckentlastung, lokale antiseptische Maßnahmen und eine angepasste Nagelpflege helfen. Wichtig ist, den seitlichen Nagelrand nicht immer tiefer auszuschneiden.']
      },
      {
        heading: 'Wenn es immer wiederkommt',
        paragraphs: ['Bei ausgeprägten oder wiederkehrenden Befunden kann ein kleiner operativer Eingriff notwendig sein. Dabei wird der problematische Nagelanteil gezielt behandelt, um erneutes Einwachsen möglichst zu vermeiden.']
      }
    ]
  ),
  'dermatologie/abszesse-der-haut': page(
    'Ein Hautabszess ist eine abgekapselte Eiteransammlung, die meist schmerzhaft, gerötet und überwärmt ist. Größere Abszesse heilen häufig nicht allein durch Salben oder Antibiotika ab.',
    [
      {
        heading: 'Untersuchung',
        paragraphs: ['Oberflächliche Abszesse lassen sich meist klinisch erkennen. Bei tieferen oder unklaren Befunden kann eine Ultraschalluntersuchung sinnvoll sein.']
      },
      {
        heading: 'Behandlung',
        paragraphs: ['Wenn sich Eiter gesammelt hat, muss der Abszess häufig eröffnet und entlastet werden. Ob zusätzlich ein Antibiotikum notwendig ist, hängt unter anderem von Größe, Lage, Entzündungszeichen und Begleiterkrankungen ab.']
      }
    ],
    { note: 'Bei Fieber, rascher Ausbreitung, starken Schmerzen oder schwerem Krankheitsgefühl ist eine kurzfristige ärztliche Beurteilung erforderlich.' }
  ),
  'dermatologie/blutschwaemmchen-haemangiome': page(
    'Blutschwämmchen beziehungsweise Hämangiome sind gutartige Gefäßveränderungen. Im Erwachsenenalter handelt es sich bei kleinen roten Knötchen häufig um sogenannte senile Angiome.',
    [
      {
        heading: 'Untersuchung',
        paragraphs: ['Vor einer Entfernung beurteilen wir, ob es sich tatsächlich um eine harmlose Gefäßveränderung handelt. Bei Kindern und größeren Hämangiomen gelten je nach Alter und Wachstum andere Regeln als bei kleinen Erwachsenenbefunden.']
      },
      {
        heading: 'Behandlung',
        paragraphs: ['Störende kleine Gefäßveränderungen können abhängig von Größe und Lage unter anderem mit Laser, Elektrokoagulation oder operativ behandelt werden.']
      }
    ],
    { billing: 'Eine rein kosmetische Entfernung ist in der Regel eine Selbstzahlerleistung.' }
  ),
  'dermatologie/altersflecken-sonnenflecken': page(
    'Alters- und Sonnenflecken entstehen vor allem an chronisch sonnenexponierter Haut. Sie sind meist gutartig, können aber anderen pigmentierten Hautveränderungen ähneln.',
    [
      {
        heading: 'Erst beurteilen, dann entfernen',
        paragraphs: ['Vor jeder kosmetischen Behandlung muss sicher sein, dass die Pigmentierung gutartig ist. Neue, unregelmäßige oder sich verändernde Flecken gehören deshalb zuerst in die dermatologische Untersuchung.']
      },
      {
        heading: 'Behandlung',
        paragraphs: ['Bei eindeutig gutartigen Flecken kommen je nach Befund unter anderem Laser, Kryotherapie oder chemische Verfahren infrage. Die Methode wird an Hauttyp, Region und Pigment angepasst.']
      },
      {
        heading: 'Lichtschutz',
        paragraphs: ['Konsequenter UV-Schutz ist sowohl zur Vorbeugung als auch nach einer Behandlung wichtig, weil behandelte Stellen sonst leichter nachpigmentieren können.']
      }
    ],
    { billing: 'Die kosmetische Entfernung gutartiger Sonnenflecken ist in der Regel eine Selbstzahlerleistung.' }
  ),
  'dermatologie/alterswarzen-hornwarzen': page(
    'Alterswarzen – medizinisch seborrhoische Keratosen – sind sehr häufige gutartige Hautveränderungen. Sie können flach beginnen und mit der Zeit rau, erhaben oder dunkler werden.',
    [
      {
        heading: 'Diagnose',
        paragraphs: ['Viele Alterswarzen lassen sich klinisch und dermatoskopisch sicher erkennen. Wenn eine Veränderung ungewöhnlich aussieht oder Zweifel bestehen, wird sie nicht rein kosmetisch behandelt, sondern gegebenenfalls histologisch abgeklärt.']
      },
      {
        heading: 'Entfernung',
        paragraphs: ['Störende gutartige Befunde können beispielsweise durch Kürettage, Kryotherapie, Elektrokoagulation oder Laser entfernt werden. Welche Methode geeignet ist, hängt von Größe und Lage ab.']
      }
    ],
    { billing: 'Die Entfernung aus rein kosmetischen Gründen ist eine Selbstzahlerleistung.' }
  ),
  'dermatologie/gutartige-pigmentmale': page(
    'Pigmentmale können völlig unterschiedlich aussehen. Entscheidend ist deshalb nicht allein Farbe oder Größe, sondern die fachärztliche Beurteilung und – bei Bedarf – die Auflichtmikroskopie.',
    [
      {
        heading: 'Wenn ein Muttermal auffällig ist',
        paragraphs: ['Bestehen Zweifel an der Gutartigkeit, wird ein Pigmentmal operativ entfernt und feingeweblich untersucht. Eine kosmetische Laserbehandlung kommt für einen diagnostisch unklaren pigmentierten Befund nicht infrage.']
      },
      {
        heading: 'Kosmetische Entfernung',
        paragraphs: ['Eindeutig gutartige, aber störende Pigmentmale können je nach Art chirurgisch, elektrochirurgisch oder in ausgewählten Fällen mit Laser behandelt werden. Dabei kann immer eine kleine Narbe oder Pigmentveränderung zurückbleiben.']
      }
    ],
    { billing: 'Eine medizinisch notwendige Entfernung und eine rein kosmetische Entfernung werden versicherungsrechtlich unterschiedlich behandelt.' }
  ),
  'dermatologie/stielwarzen-fibrome': page(
    'Stielwarzen beziehungsweise weiche Fibrome sind gutartige Bindegewebsveränderungen, die besonders häufig an Hals, Achseln und in Hautfalten auftreten.',
    [
      {
        heading: 'Wann eine Entfernung sinnvoll ist',
        paragraphs: ['Medizinisch müssen Fibrome meist nicht entfernt werden. Wenn sie sich ständig entzünden, an Kleidung hängen oder kosmetisch stören, ist eine kleine ambulante Entfernung möglich.']
      },
      {
        heading: 'Behandlung',
        paragraphs: ['Je nach Größe entfernen wir Fibrome mit kleinen chirurgischen oder elektrochirurgischen Verfahren. Die Behandlung dauert meist nur kurz.']
      }
    ],
    { billing: 'Bei rein kosmetischer Entfernung handelt es sich in der Regel um eine Selbstzahlerleistung.' }
  ),
  'dermatologie/milien': page(
    'Milien sind kleine, mit Hornmaterial gefüllte Zysten, die besonders häufig im Gesicht und um die Augen auftreten. Sie sind harmlos, können aber kosmetisch stören.',
    [
      {
        heading: 'Behandlung',
        paragraphs: ['Milien werden nach fachgerechter oberflächlicher Eröffnung vorsichtig entleert. Selbstständiges Ausdrücken führt dagegen häufig zu unnötiger Entzündung oder kleinen Narben.']
      }
    ],
    { billing: 'Die Entfernung von Milien ist in der Regel eine kosmetische Selbstzahlerleistung.' }
  ),
  'dermatologie/xanthelasmen': page(
    'Xanthelasmen sind gelbliche Fettablagerungen an den Augenlidern. Sie sind gutartig, fallen durch ihre Lage aber häufig deutlich auf.',
    [
      {
        heading: 'Abklärung',
        paragraphs: ['Xanthelasmen können ohne erkennbare Ursache auftreten, gelegentlich bestehen erhöhte Blutfette. Eine Kontrolle der Blutfettwerte beim Hausarzt kann deshalb sinnvoll sein.']
      },
      {
        heading: 'Entfernung',
        paragraphs: ['Je nach Größe und Lage kommen chemische Verfahren, Elektrokoagulation, Laser oder eine operative Entfernung infrage. Rückfälle sind unabhängig von der Methode möglich.']
      }
    ],
    { billing: 'Die Entfernung erfolgt meist aus kosmetischen Gründen und ist dann eine Selbstzahlerleistung.' }
  )
} as const;
