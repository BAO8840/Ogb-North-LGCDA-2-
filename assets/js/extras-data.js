/* Add-on data for the new pages. Loads after data.js and before main.js.
   Rows are added only once the council confirms them: nothing here is invented. */
(function () {
  var D = window.SITE_DATA;
  /* Contact used by every form on the site pages that load this file. Change here to reroute them. */
  D.contact = Object.assign({}, D.contact, { phone: '+2349067610317', whatsapp: '2347046252092', email: 'abdulsalamb829@gmail.com' });
  D.allocations = []; D.audits = []; D.minutes = [];
  /* Transparency checklist: an item counts as published once its list has at least one row */
  D.checklist = [
    ['Approved budget', function () { return D.audits.some(function (r) { return /budget/i.test(r.title); }); }],
    ['Monthly allocation and spending', function () { return D.allocations.length > 0; }],
    ['Audited accounts', function () { return D.audits.some(function (r) { return /audit/i.test(r.title); }); }],
    ['Tenders and contract awards', function () { return (D.tenders || []).length > 0; }],
    ['Project register with progress', function () { return (D.projects || []).length > 0; }],
    ['Bye-laws and policies', function () { return (D.policies || []).length > 0; }],
    ['Names of Councillors', function () { return (D.councillors || []).length > 0; }],
    ['Council meeting minutes', function () { return D.minutes.length > 0; }]
  ];
  /* Directory: add phone numbers only when verified */
  D.directory = [
    { g: 'Council', n: 'Executive Chairman', d: 'George Ogunlade' },
    { g: 'Council', n: 'Vice Chairman', d: 'Salawu Taofeek Adigun' },
    { g: 'Council', n: 'Local Government Secretariat', d: 'Along Ogbomoso-Ikoyi Road, Kinnira, beside LAUTECH College of Health Sciences' },
    { g: 'Council', n: 'Departments', d: 'Finance and Supplies; Primary Health Care; Works and Housing; Agriculture and Natural Resources; Education and Social Services' },
    { g: 'State', n: 'Oyo State Ministry of Local Government and Chieftaincy Matters', d: '+234 803 318 0116, +234 802 277 0850; ministrylgcm@yahoo.com' },
    { g: 'Emergency', n: 'National emergency number', d: '112' },
    { g: 'Traditional', n: 'Aafin Ogbomoso (Soun’s Palace)', d: 'Seat of the Soun of Ogbomoso' },
    { g: 'Health', n: 'Bowen University Teaching Hospital', d: 'Ogbomoso. Former Baptist Medical Centre, founded 1907' },
    { g: 'Health', n: 'LAUTECH Teaching Hospital', d: 'Ogbomoso' },
    { g: 'Education', n: 'Ladoke Akintola University of Technology (LAUTECH)', d: 'Ogbomoso' },
    { g: 'Education', n: 'Nigerian Baptist Theological Seminary', d: 'Ilorin Road, Ogbomoso' }
  ];
  /* Schools: verified institutions only. Add primary and secondary schools after the SUBEB list is checked */
  D.schools = [
    { name: 'Ladoke Akintola University of Technology (LAUTECH)', level: 'University', ward: 'To confirm', ownership: 'Public (state)', regulator: 'NUC', quality: 'Not yet assessed' },
    { name: 'Nigerian Baptist Theological Seminary', level: 'Seminary / theological', ward: 'To confirm', ownership: 'Mission / faith-based', regulator: 'NUC and Nigerian Baptist Convention', quality: 'Not yet assessed' },
    { name: 'College of Nursing Sciences, Bowen University Teaching Hospital', level: 'Nursing / health', ward: 'To confirm', ownership: 'Mission / faith-based', regulator: 'Nursing and Midwifery Council of Nigeria', quality: 'Not yet assessed' }
  ];
  /* Events: ISO dates. Source: Tribune and Guardian reports. Confirm with the organisers */
  D.events = [
    { t: 'Ogbomoso Cradles Carnival', s: '2026-12-17', e: '2026-12-21', p: 'Ogbomoso', o: 'Ogbomoso Cradles Carnival planning committee', k: 'Community and cultural',
      d: 'Five days of cultural displays, sports, a concert, an awards night, a book launch and autism sensitisation. It ends with Ajilete Day at the Soun Stadium on Monday 21 December.' }
  ];
})();
