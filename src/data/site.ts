export const practice = {
  name: 'MVZ Corius Kempen GmbH',
  legalName: 'MVZ Corius Kempen GmbH',
  brandName: 'Hautarztpraxis Kempen',
  street: 'St. Huberter Straße 25',
  postalCode: '47906',
  city: 'Kempen',
  phoneDisplay: '02152 912220',
  phoneHref: 'tel:+492152912220',
  fax: '+49 2152 9122220',
  email: 'post@hautarzt-kempen.de',
  doctolib: 'https://www.doctolib.de/medizinisches-versorgungszentrum-mvz/kempen/hautaerztliches-mvz-kempen-gmbh',
  digitalRegistration: 'https://gonelly.de/o/coriuskempen/v2',
  onlineDoctor: 'https://www.onlinedoctor.de/de/doctors/d/dr-med-moritz-berkenkamp',
  onlineDoctorInsurers: 'https://www.onlinedoctor.de/partnerversicherungen/',
  directions: 'https://www.google.com/maps/search/?api=1&query=St.%20Huberter%20Stra%C3%9Fe%2025%2C%2047906%20Kempen',
  hours: [
    ['Montag', '08:00–12:00', '15:00–18:00'],
    ['Dienstag', '08:00–12:00', '15:00–19:00'],
    ['Mittwoch', '08:00–12:00', ''],
    ['Donnerstag', '08:00–12:00', '15:00–18:00'],
    ['Freitag', '08:00–12:00', '']
  ]
} as const;

export type Doctor = {
  name: string;
  role: string;
  details: string;
  href?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  initials: string;
};

export const doctors: Doctor[] = [
  {
    name: 'Dr. med. Klaus Gerecht',
    role: 'Ärztlicher Leiter',
    details: 'Facharzt für Haut- und Geschlechtskrankheiten · Phlebologie · Proktologie',
    href: '/team/dr-med-klaus-gerecht/',
    image: '/assets/team/klaus-gerecht.webp',
    imageAlt: 'Dr. med. Klaus Gerecht',
    imagePosition: 'center 22%',
    initials: 'KG'
  },
  {
    name: 'Dr. med. Moritz Berkenkamp',
    role: 'Facharzt',
    details: 'Facharzt für Dermatologie',
    image: '/assets/team/moritz-berkenkamp.webp',
    imageAlt: 'Dr. med. Moritz Berkenkamp',
    imagePosition: 'center 20%',
    initials: 'MB'
  },
  {
    name: 'Dr. (GR) Avgousta Hadjisoteriou',
    role: 'Ärztin in Weiterbildung',
    details: 'Dermatologie',
    image: '/assets/team/avgousta-hadjisoteriou.webp',
    imageAlt: 'Dr. (GR) Avgousta Hadjisoteriou',
    imagePosition: 'center 20%',
    initials: 'AH'
  },
  {
    name: 'Orhan Emre Avsar',
    role: 'Arzt in Weiterbildung',
    details: 'Dermatologie',
    initials: 'OA'
  }
];

export type Service = { slug: string; title: string; category: string; summary?: string };
const dermatology = [
  ['dermatologie','Dermatologie'],['dermatologie/abszesse-der-haut','Abszesse der Haut'],['dermatologie/akne','Akne'],
  ['dermatologie/atopische-dermatitis','Neurodermitis'],['dermatologie/nesselsucht-urtikaria','Nesselsucht'],
  ['dermatologie/sonnenallergie','Sonnenallergie'],['dermatologie/blutschwaemmchen-haemangiome','Hämangiome'],
  ['dermatologie/altersflecken-sonnenflecken','Alters- und Sonnenflecken'],['dermatologie/alterswarzen-hornwarzen','Alters- und Hornwarzen'],
  ['dermatologie/seborrhoisches-ekzem','Seborrhoisches Ekzem'],['dermatologie/haarausfall','Haarausfall'],
  ['dermatologie/hautkrebs','Hautkrebs'],['dermatologie/weisser-hautkrebs','Weißer Hautkrebs'],
  ['dermatologie/schwarzer-hautkrebs-malignes-melanom','Schwarzer Hautkrebs'],['dermatologie/hautkrebsvorsorge','Hautkrebsvorsorge'],
  ['dermatologie/photodynamische-therapie-pdt','Photodynamische Therapie'],['dermatologie/hautuebertragung-transplantation','Hautübertragung'],
  ['dermatologie/gutartige-pigmentmale','Gutartige Pigmentmale'],['dermatologie/stielwarzen-fibrome','Stielwarzen und Fibrome'],
  ['dermatologie/laser','Laserbehandlung'],['dermatologie/milien','Milien'],['dermatologie/nagelpilz','Nagelpilz'],
  ['dermatologie/medizinische-fuss-nagelpflege','Medizinische Fuß- und Nagelpflege'],['dermatologie/operative-dermatologie','Operative Dermatologie'],
  ['dermatologie/prp-therapie','PRP-Therapie'],['dermatologie/schuppenflechte-psoriasis','Schuppenflechte'],
  ['dermatologie/schweissdruesenueberfunktion','Übermäßiges Schwitzen'],['dermatologie/xanthelasmen','Xanthelasmen'],
  ['dermatologie/eingewachsener-zehnagel','Eingewachsener Zehennagel'],['dermatologie/lc-oct','LC-OCT'],
  ['dermatologie/hauttumorsprechstunde-notfaelle','Hauttumorsprechstunde']
];
const allergy = [
  ['allergologie','Allergologie'],['allergologie/allergie','Allergie'],['allergologie/heuschnupfen-rhinitis-allergica','Heuschnupfen'],
  ['allergologie/allergisches-asthma','Allergisches Asthma'],['allergologie/hyposensibilisierung','Hyposensibilisierung'],
  ['allergologie/nahrungsmittelallergie','Nahrungsmittelallergie'],['allergologie/insektengiftallergien','Insektengiftallergien'],
  ['allergologie/allergisches-kontaktekzem','Allergisches Kontaktekzem']
];
const veins = [
  ['venenheilkunde-phlebologie','Phlebologie'],['venenheilkunde-phlebologie/chronische-venoese-insuffizienz-cvi','Chronische venöse Insuffizienz'],
  ['venenheilkunde-phlebologie/postthrombotisches-syndrom','Postthrombotisches Syndrom'],['venenheilkunde-phlebologie/tiefe-beinvenenthrombose','Tiefe Beinvenenthrombose']
];
const proctology = [
  ['proktologie','Proktologie'],['proktologie/analekzem','Analekzem'],['proktologie/analfissuren','Analfissuren'],
  ['proktologie/analabzesse-perianalabzesse','Anal- und Perianalabszesse'],['proktologie/analfisteln','Analfisteln'],
  ['proktologie/inkontinenz','Inkontinenz'],['proktologie/anal-venen-thrombosen','Analvenenthrombose'],
  ['proktologie/marisken','Marisken'],['proktologie/haemorrhoiden','Hämorrhoiden'],['proktologie/darmkrebs','Darmkrebs']
];
const aesthetics = [
  ['aesthetische-dermatologie','Ästhetische Dermatologie'],['aesthetische-dermatologie/besenreiser','Besenreiser'],
  ['aesthetische-dermatologie/faltenbehandlung','Faltenbehandlung'],['aesthetische-dermatologie/polymilchsauere-liquid-lifting','Polymilchsäure / Liquid Lifting'],
  ['aesthetische-dermatologie/pigmentstoerungen-narbenbehandlung','Pigmentstörungen & Narben'],['aesthetische-dermatologie/peeling','Peeling'],
  ['aesthetische-dermatologie/medizinische-kosmetik','Medizinische Kosmetik'],['aesthetische-dermatologie/skinbooster','Skinbooster'],
  ['aesthetische-dermatologie/laser-haarentfernung','Laser-Haarentfernung'],['aesthetische-dermatologie/sternchenangiome','Sternchenangiome'],
  ['aesthetische-dermatologie/tattoo-entfernung','Tattoo-Entfernung'],['aesthetische-dermatologie/erweiterte-gesichts-aederchen','Erweiterte Gesichtsäderchen']
];

const map = (items: string[][], category: string): Service[] => items.map(([slug, title]) => ({
  slug, title, category,
  summary: category === 'Ästhetische Dermatologie'
    ? 'Ärztliche Beratung und dermatologisch verantwortete Behandlung in der Hautarztpraxis Kempen.'
    : 'Diagnostik, Beratung und Behandlung in der Hautarztpraxis Kempen.'
}));
export const services = [
  ...map(dermatology, 'Dermatologie'),
  ...map(allergy, 'Allergologie'),
  ...map(veins, 'Phlebologie'),
  ...map(proctology, 'Proktologie'),
  ...map(aesthetics, 'Ästhetische Dermatologie')
];
export const categories = ['Dermatologie','Allergologie','Phlebologie','Proktologie','Ästhetische Dermatologie'];

export const serviceAreas = [
  {
    name: 'Dermatologie',
    href: '/behandlung/dermatologie/',
    description: 'Hauterkrankungen, Hautkrebsvorsorge, operative Dermatologie und moderne Diagnostik.',
    highlights: ['Hautkrebsvorsorge','Akne','Neurodermitis','Operative Dermatologie','Laserbehandlung']
  },
  {
    name: 'Allergologie',
    href: '/behandlung/allergologie/',
    description: 'Diagnostik und Behandlung allergischer Erkrankungen von Haut und Atemwegen.',
    highlights: ['Allergie','Heuschnupfen','Hyposensibilisierung']
  },
  {
    name: 'Phlebologie',
    href: '/behandlung/venenheilkunde-phlebologie/',
    description: 'Diagnostik und Behandlung von Erkrankungen des Venensystems.',
    highlights: ['Chronische venöse Insuffizienz','Tiefe Beinvenenthrombose','Postthrombotisches Syndrom']
  },
  {
    name: 'Proktologie',
    href: '/behandlung/proktologie/',
    description: 'Diskrete fachärztliche Untersuchung und Behandlung proktologischer Beschwerden.',
    highlights: ['Hämorrhoiden','Analfissuren','Analfisteln','Analekzem']
  },
  {
    name: 'Ästhetische Dermatologie',
    href: '/behandlung/aesthetische-dermatologie/',
    description: 'Ärztlich verantwortete ästhetische Behandlung, Lasertherapie und medizinische Kosmetik.',
    highlights: ['Faltenbehandlung','Laser-Haarentfernung','Medizinische Kosmetik','Skinbooster']
  }
] as const;


export type PracticeTeamMember = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
};

export const practiceTeam: PracticeTeamMember[] = [
  { name:'Barbara Gerecht', role:'Praxismanagerin · Allergologische Fachassistentin · Arzthelferin', image:'/assets/team/staff/barbara-gerecht.webp', imageAlt:'Barbara Gerecht' },
  { name:'Stephanie Worien', role:'Medizinische Fachangestellte · Fachwirtin · Hygienebeauftragte', image:'/assets/team/staff/stephanie-worien.webp', imageAlt:'Stephanie Worien' },
  { name:'Carola Zangs', role:'Arzthelferin', image:'/assets/team/staff/carola-zangs.webp', imageAlt:'Carola Zangs' },
  { name:'Jenny Nitzer', role:'Medizinische Fachangestellte · Fachwirtin · Hygienebeauftragte', image:'/assets/team/staff/jenny-nitzer.webp', imageAlt:'Jenny Nitzer' },
  { name:'Marion Burgtorff', role:'Arzthelferin', image:'/assets/team/staff/marion-burgtorff.webp', imageAlt:'Marion Burgtorff' },
  { name:'Anastasia Barbuto', role:'Medizinische Fachangestellte', image:'/assets/team/staff/anastasia-barbuto.webp', imageAlt:'Anastasia Barbuto' },
  { name:'Kyra Holtmanns', role:'Auszubildende zur Medizinischen Fachangestellten', image:'/assets/team/staff/kyra-holtmanns.webp', imageAlt:'Kyra Holtmanns' },
  { name:'Claudia Jansen', role:'Kosmetische Dermatologie · Medizinische Fußpflege', image:'/assets/team/staff/claudia-jansen.webp', imageAlt:'Claudia Jansen' },
  { name:'Elena Monrose', role:'Kosmetische Dermatologie · Medizinische Fußpflege', image:'/assets/team/staff/elena-monrose.webp', imageAlt:'Elena Monrose' },
  { name:'Dajana Saurbier', role:'Kosmetische Dermatologie · Medizinische Fußpflege', image:'/assets/team/staff/dajana-saurbier.webp', imageAlt:'Dajana Saurbier' },
  { name:'Lucyna Tomalczyk', role:'Kosmetische Fußpflege · Medizinische Fußpflege', image:'/assets/team/staff/lucyna-tomalczyk.webp', imageAlt:'Lucyna Tomalczyk' },
  { name:'Rita Neuhoff', role:'Kauffrau im Gesundheitswesen', image:'/assets/team/staff/rita-neuhoff.webp', imageAlt:'Rita Neuhoff' },
  { name:'Tanja Göttges', role:'MTLA', image:'/assets/team/staff/tanja-goettges.webp', imageAlt:'Tanja Göttges' },
  { name:'Anja Rovkin', role:'Auszubildende zur Medizinischen Fachangestellten', image:'/assets/team/staff/anja-rovkin.webp', imageAlt:'Anja Rovkin' },
  { name:'Max Gerecht', role:'Praxishilfe', image:'/assets/team/staff/max-gerecht.webp', imageAlt:'Max Gerecht' },
  { name:'Michael Liebelt', role:'Facility Manager', image:'/assets/team/staff/michael-liebelt.webp', imageAlt:'Michael Liebelt' }
];
