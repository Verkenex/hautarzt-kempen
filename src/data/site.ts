export const practice = {
  name: 'Hautärztliches MVZ Kempen',
  legalName: 'Hautärztliches MVZ Kempen GmbH',
  street: 'St. Huberter Straße 25',
  postalCode: '47906',
  city: 'Kempen',
  phoneDisplay: '02152 912220',
  phoneHref: 'tel:+492152912220',
  fax: '+49 2152 9122220',
  email: 'post@hautarzt-kempen.de',
  doctolib: 'https://www.doctolib.de/medizinisches-versorgungszentrum-mvz/kempen/hautaerztliches-mvz-kempen-gmbh',
  directions: 'https://www.google.com/maps/search/?api=1&query=St.%20Huberter%20Stra%C3%9Fe%2025%2C%2047906%20Kempen',
  hours: [
    ['Montag', '08:00–12:00', '15:00–18:00'],
    ['Dienstag', '08:00–12:00', '15:00–19:00'],
    ['Mittwoch', '08:00–12:00', ''],
    ['Donnerstag', '08:00–12:00', '15:00–18:00'],
    ['Freitag', '08:00–12:00', '']
  ]
} as const;

export type Doctor = { name: string; role: string; details: string; href?: string };
export const doctors: Doctor[] = [
  { name: 'Dr. med. Klaus Gerecht', role: 'Ärztlicher Leiter', details: 'Facharzt für Haut- und Geschlechtskrankheiten · Phlebologie · Proktologie', href: '/team/dr-med-klaus-gerecht/' },
  { name: 'Dr. med. Moritz Berkenkamp', role: 'Facharzt', details: 'Facharzt für Dermatologie' },
  { name: 'Dr. (GR) Avgousta Hadjisoteriou', role: 'Ärztin in Weiterbildung', details: 'Dermatologie' },
  { name: 'Orhan Emre Avsar', role: 'Arzt in Weiterbildung', details: 'Dermatologie' }
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
    ? 'Ärztliche Beratung und dermatologisch verantwortete Behandlung im Hautärztlichen MVZ Kempen.'
    : 'Diagnostik, Beratung und Behandlung im Hautärztlichen MVZ Kempen.'
}));
export const services = [
  ...map(dermatology, 'Dermatologie'),
  ...map(allergy, 'Allergologie'),
  ...map(veins, 'Phlebologie'),
  ...map(proctology, 'Proktologie'),
  ...map(aesthetics, 'Ästhetische Dermatologie')
];
export const categories = ['Dermatologie','Allergologie','Phlebologie','Proktologie','Ästhetische Dermatologie'];
