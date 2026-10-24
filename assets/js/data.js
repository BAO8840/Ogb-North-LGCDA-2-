/* Site content and contact details. Edit this file to update the website.
   Empty lists show a friendly "coming soon" message on the page. */
window.SITE_DATA = {
  /* Set independent to false only when the council has authorised this as its official site */
  site: { independent: false },
  contact: { phone: '+2348033180116', whatsapp: '2347046252092', email: 'ministrylgcm@yahoo.com', emergency: '112',
    address: 'Along Ogbomoso-Ikoyi Road, Kinnira, beside LAUTECH College of Health Sciences, Ogbomoso, Oyo State', hours: 'Monday to Friday, 8:00am to 5:00pm' },
  /* Ward names: the ten statutory wards of Ogbomoso North, as supplied by the council */
  wards: ['Abogunde', 'Aaje / Ogunbado', 'Aguodo / Masifa', 'Isale Afon', 'Isale Alaasa', 'Isale Ora / Saja', 'Jagun', 'Okelerin', 'Osupa', 'Sabo / Tara', 'Not sure'],
  /* Row formats: schools {name, ward, level, ownership}; projects {title, ward, sector, stage};
     vacancies {title, department, closes}; policies {title, department, status, link};
     publications {title, type, year, link}; documents {title, period, link};
     assets {name, type, ward, condition}; reports {title, period, link} */
  wardlist: [{no:'1',ward:'Abogunde'}, {no:'2',ward:'Aaje / Ogunbado'}, {no:'3',ward:'Aguodo / Masifa'}, {no:'4',ward:'Isale Afon'}, {no:'5',ward:'Isale Alaasa'}, {no:'6',ward:'Isale Ora / Saja'}, {no:'7',ward:'Jagun'}, {no:'8',ward:'Okelerin'}, {no:'9',ward:'Osupa'}, {no:'10',ward:'Sabo / Tara'}],
  councillors: [], notices: [], tenders: [],
  schools: [], projects: [], vacancies: [], policies: [], publications: [], documents: [], assets: [], reports: [],
  /* Search index: t = English title, y = Yoruba title, k = keywords (English and Yoruba) */
  search: [
    { t: 'Home', y: 'Ilé', u: 'index.html', k: 'council ogbomoso north welcome contact' },
    { t: 'Education', y: 'Ẹ̀kọ́', u: 'education.html', k: 'school enrol pupils teachers learning lautech ilé-ìwé' },
    { t: 'Research and Implementation', y: 'Ìwádìí àti Ìmúṣẹ', u: 'research.html', k: 'projects research proposal progress iṣẹ́ àkànṣe' },
    { t: 'Workforce', y: 'Òṣìṣẹ́', u: 'workforce.html', k: 'jobs vacancies staff departments siwes nysc internship iṣẹ́' },
    { t: 'Policies and Support', y: 'Ìlànà àti Ìrànwọ́', u: 'policies.html', k: 'bye-law policy support farmers traders levy òfin àgbẹ̀ oníṣòwò' },
    { t: 'Ethics', y: 'Ìwà Ọmọlúàbí', u: 'ethics.html', k: 'integrity report corruption foi information budget' },
    { t: 'Infrastructure', y: 'Àwọn Ohun Amáyédẹrùn', u: 'infrastructure.html', k: 'roads drains markets street lights health centre ọ̀nà ọjà' },
    { t: 'Report an issue', y: 'Ròyìn ìṣòro', u: 'reports.html#report', k: 'report issue fault complaint phone whatsapp sms call ìfisùn' },
    { t: 'Leadership', y: 'Àwọn Olórí', u: 'leadership.html', k: 'chairman vice chairman councillors departments ogunlade adigun' },
    { t: 'Wards', y: 'Àwọn Wọ́ọ̀dù', u: 'wards.html', k: 'ward sabo tara osupa jagun abogunde okelerin' },
    { t: 'Notices and tenders', y: 'Ìkéde', u: 'notices.html', k: 'notice tender procurement revenue rates sanitation immunisation' },
    { t: 'Accessibility', y: 'Ìrọ̀rùn Lílò', u: 'accessibility.html', k: 'accessibility wcag disability' },
    { t: 'Privacy notice', y: 'Ìkéde àṣírí', u: 'privacy.html', k: 'privacy data protection' }
  ]
};
