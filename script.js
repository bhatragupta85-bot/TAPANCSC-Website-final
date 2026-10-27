/* TAPANCSC website configuration
 * Add your REAL public contact details before publishing.
 * Leave a value empty if you do not wish to display/use it.
 */
const TAPANCSC_CONFIG = {
  phone: "+917077111403",       // Example format: +919876543210
  whatsapp: "917077111403",    // Digits only with country code: 919876543210
  email: "bisoitapan43@gmail.com"         // Your preferred public enquiry email
};

const iconPaths = {
  document: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  id: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8" cy="11" r="2"/><path d="M5.5 16c.5-1.5 1.3-2 2.5-2s2 .5 2.5 2M13 10h4M13 14h4"/>',
  form: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 12h7M9 16h7"/>',
  payment: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',
  bank: '<path d="m3 9 9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 21h18M3 18h18"/>',
  utility: '<path d="M13 2 4 14h7l-1 8 10-13h-7z"/>',
  print: '<path d="M6 9V3h12v6M6 17H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6zM17 12h1"/>',
  scan: '<path d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4M7 12h10"/>',
  ticket: '<path d="M4 6h16v4a2 2 0 0 0 0 4v4H4v-4a2 2 0 0 0 0-4z"/><path d="M12 6v2M12 10v2M12 14v2"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
  shield: '<path d="M12 3 19 6v5c0 4.5-2.8 7.7-7 10-4.2-2.3-7-5.5-7-10V6z"/><path d="m9 12 2 2 4-4"/>',
  graduation: '<path d="m2 9 10-5 10 5-10 5zM6 11v5c4 3 8 3 12 0v-5M22 9v6"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.6 2.6 0 1 1 4.4 1.9c-1.2.9-1.9 1.4-1.9 3M12 17h.01"/>',
  mobile: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 5h4M11 18h2"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 14h2M13 14h3"/>',
  users: '<circle cx="9" cy="8" r="3"/><path d="M3 20v-1a6 6 0 0 1 12 0v1M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 5v1"/>',
  leaf: '<path d="M20 4C10 4 5 7 5 14c0 3 2 5 5 5 7 0 10-5 10-15Z"/><path d="M3 21c3-6 7-9 13-12"/>',
  book: '<path d="M4 4h6a3 3 0 0 1 3 3v14a3 3 0 0 0-3-3H4z"/><path d="M20 4h-4a3 3 0 0 0-3 3v14a3 3 0 0 1 3-3h4z"/>',
  delivery: '<path d="M3 6h11v11H3zM14 10h4l3 4v3h-7z"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="19" r="2"/>',
  receipt: '<path d="M5 3h14v18l-3-2-4 2-4-2-3 2z"/><path d="M8 8h8M8 12h8M8 16h4"/>'
};

const services = [
  {
    id:'pan', title:'PAN Card Assistance', category:'documents', categoryLabel:'Documents', tag:'PAN application', icon:'id', tone:'mint',
    description:'Help preparing a PAN application or correction and checking the details before you submit.',
    priceTag:'Suggested help fee ₹50*', centerFee:'Suggested TAPANCSC assistance: ₹50 per application (edit this sample rate to your actual/approved rate).',
    officialFee:'The official fee depends on the application route, eligibility, and whether a physical card is requested. Check the amount on the official portal before payment.',
    eta:'Allow about 15–30 minutes for document checks and form assistance. PAN processing and delivery are controlled by the issuing authority.',
    documents:['Proof of identity, address and date of birth accepted for your chosen application route','Aadhaar and access to the registered mobile number, if the selected route requires it','Valid mobile number and email address','Recent photograph and signature/image files if requested by the portal','For a correction: existing PAN details/card and evidence supporting each requested change'],
    steps:['Choose new PAN, correction, reprint, or another relevant service.','Check your name, date of birth, address, and document scans carefully.','Review the official fee on the portal, approve the final form, and keep the acknowledgement number.'],
    note:'Do not apply for a second PAN if one has already been allotted. PAN approval and issuance are not guaranteed by an assistance provider.', officialUrl:'https://www.incometax.gov.in/iec/foportal/'
  },
  {
    id:'aadhaar', title:'Aadhaar Service Guidance', category:'documents', categoryLabel:'Documents', tag:'UIDAI guidance', icon:'shield', tone:'yellow',
    description:'Guidance on locating authorized Aadhaar services, booking an appointment, and checking update requirements.',
    priceTag:'Guidance ₹0*', centerFee:'TAPANCSC guidance: ₹0 in this sample price guide. Aadhaar enrolment/update work must only be performed by an authorized centre.',
    officialFee:'UIDAI currently lists: enrolment free; separate demographic update ₹75; biometric update generally ₹125 with eligible exceptions; document update at a centre ₹75; Aadhaar search/download with colour A4 print ₹40. Verify the live UIDAI tariff before paying.',
    eta:'Online guidance or appointment booking may take 10–20 minutes. Actual enrolment/update is completed at an authorized facility and processing times vary.',
    documents:['Original supporting document(s) accepted by UIDAI for the exact update','Aadhaar number or enrolment ID, if relevant','Registered mobile access for online services that require OTP','For a name/date-of-birth change, bring the specific supporting proof accepted by UIDAI'],
    steps:['Identify the exact service: enrolment, demographic update, biometric update, or document update.','Check accepted documents and any eligible free-update category on UIDAI.','Visit an authorized Aadhaar centre for any service requiring biometric capture or operator access.'],
    note:'TAPANCSC must not claim to perform enrolment or updates unless the centre has the required authorization. Never share an OTP or biometric information with an unverified person.', officialUrl:'https://uidai.gov.in/en/my-aadhaar'
  },
  {
    id:'certificates', title:'Certificates & Documents', category:'documents', categoryLabel:'Documents', tag:'Odisha e-District', icon:'document', tone:'blue',
    description:'Support for Residence, Income, Caste, ST/SC, OBC/SEBC, legal-heir and other certificate applications available through Odisha e-District.',
    priceTag:'Check notified fee*', centerFee:'Use the current approved Odisha e-District/CSC operator fee schedule. This site does not assume or authorize an extra operator charge; disclose any permitted assistance charge before starting.',
    officialFee:'The Odisha e-District portal lists no government service charge for many standard certificates. Its FAQ lists ₹63 for a certified copy of RoR and ₹35 for a Solvency Certificate. Confirm the exact service and current amount on the live portal.',
    eta:'Document checking and form submission may take 15–30 minutes. Department processing timelines vary by certificate and local verification.',
    documents:['A valid identity proof such as Aadhaar, voter ID, PAN or passport, as accepted for the certificate','Residence proof such as an eligible utility bill, bank passbook, ROR or other portal-accepted record','Income proof such as salary certificate, ITR, income declaration or other relevant evidence for an Income Certificate','ROR/land records, self-declaration, parent/sibling certificate or community evidence where the selected caste/community certificate requires them','Passport-size photograph and mobile number, if required by the portal','Any extra document listed on the exact Odisha e-District service page'],
    steps:['Tell us the exact certificate and the purpose for which it is needed.','Check the current portal checklist, eligibility, and any applicable fee.','Review the submitted details and keep the acknowledgement number for status tracking.'],
    note:'Documents differ by certificate, applicant circumstances, and issuing authority. Department approval is not guaranteed.', officialUrl:'https://edistrict.odisha.gov.in/'
  },
  {
    id:'govt-forms', title:'Government Online Forms', category:'government', categoryLabel:'Applications', tag:'Online application', icon:'form', tone:'peach',
    description:'Assistance navigating government application portals and reviewing entries or uploaded files before submission.',
    priceTag:'Suggested help ₹50*', centerFee:'Suggested assistance: ₹50 for a basic form; complex forms can be quoted before work begins. Edit these sample prices to your actual rate.',
    officialFee:'Separate portal, examination, application, or service fees may apply. The official portal should show the amount before payment.',
    eta:'Usually 15–45 minutes depending on the form and the number of documents. Review and approval time is controlled by the department.',
    documents:['Applicant name, date of birth, address, and other details exactly as shown in supporting records','Identity/address/education/income/category proofs requested by that specific form','Clear scans or photographs within the portal’s file size and format limits','Active mobile number and email address where required','Payment method only if the official portal charges a fee'],
    steps:['Identify the official website and the application deadline.','Prepare and review all details and uploads with the applicant.','Show the filled form and fee screen to the applicant before submitting or paying.'],
    note:'The applicant must approve all information before submission. Do not share passwords, UPI PINs, card PINs, or OTPs.', officialUrl:'https://www.india.gov.in/'
  },
  {
    id:'scholarship', title:'Scholarship Applications', category:'government', categoryLabel:'Applications', tag:'Student support', icon:'graduation', tone:'purple',
    description:'Help students understand scholarship eligibility, collect supporting documents, and complete the appropriate online application.',
    priceTag:'Suggested help ₹50*', centerFee:'Suggested assistance: ₹50 for a straightforward application (edit this sample rate before publishing). Confirm any approved fee in advance.',
    officialFee:'Scheme-specific. Many scholarship portals do not charge an application fee, but check the current scheme instructions and never pay an unofficial fee to secure selection.',
    eta:'About 20–45 minutes if all documents are ready. Verification, sanction, and payment dates depend on the scheme and department.',
    documents:['Student Aadhaar/identity proof and current mobile number','Recent photograph and signature, if requested','Current course, institution, admission and previous examination details','Bank passbook/account details in the student’s name where required by the scheme','Income, caste/category, residence or disability certificate only when required by the selected scheme','Scheme-specific declaration or bonafide certificate and acknowledgement from previous applications if relevant'],
    steps:['Confirm scheme, class/course, category, income criteria, and deadline.','Use the exact documents and bank details required by the scheme.','Review the application with the student and save the acknowledgement/application ID.'],
    note:'Eligibility, verification and scholarship payment are decided by the scheme authority. Do not guarantee selection or payment.', officialUrl:'https://scholarship.odisha.gov.in/'
  },
  {
    id:'utility', title:'Utility Bill Payments', category:'payments', categoryLabel:'Payments', tag:'Bill payment', icon:'utility', tone:'yellow',
    description:'Assistance with supported electricity, water, mobile, broadband, and other bill-payment portals.',
    priceTag:'Suggested help ₹10*', centerFee:'Suggested assisted-payment fee: ₹10 per transaction (edit this sample rate to your actual/approved rate). Tell the customer before payment.',
    officialFee:'The actual bill amount, arrears, late fee, taxes, or provider convenience fee are separate and must be confirmed on the biller/payment screen.',
    eta:'Usually 5–15 minutes when the biller portal is available.',
    documents:['Latest bill or correct consumer/account number','Customer name or registered mobile number if requested by the biller','Exact amount due, biller name and due date verified before paying','A payment method controlled by the customer'],
    steps:['Select and verify the biller and consumer number.','Confirm the amount and any separate fee before proceeding.','Check the success status and save the receipt/transaction reference.'],
    note:'A pending or failed transaction may need to be resolved through the payment provider. Never share a UPI PIN, bank PIN, or OTP.', officialUrl:''
  },
  {
    id:'banking', title:'Banking Service Guidance', category:'payments', categoryLabel:'Payments', tag:'Banking guidance', icon:'bank', tone:'mint',
    description:'General guidance for supported digital banking or assisted banking services only where the outlet and operator are authorized.',
    priceTag:'Provider tariff applies', centerFee:'Use only the fee shown in the authorized bank/Business Correspondent/AEPS provider’s current tariff. No generic TAPANCSC banking charge is assumed here.',
    officialFee:'Provider-specific. Any permitted charge must be disclosed before the transaction and an official receipt should be provided.',
    eta:'Depends on the selected banking service and provider connectivity.',
    documents:['Bank account and identity details required by the specific authorized provider','Aadhaar or other accepted authentication only where required for that service','Registered mobile number where relevant','Passbook or account details if the provider asks for them'],
    steps:['Confirm which services the operator is authorized to provide.','Verify the customer, amount, and provider-displayed charges before authorization.','Wait for transaction status and provide the receipt/reference.'],
    note:'Never disclose or type a customer’s PIN, password or OTP on their behalf. Biometric/AEPS services are available only through an authorized provider and device.', officialUrl:''
  },
  {
    id:'online', title:'Online Form Filling', category:'digital', categoryLabel:'Digital help', tag:'Digital assistance', icon:'globe', tone:'blue',
    description:'Practical assistance with online forms, file uploads, account setup guidance, and downloading acknowledgements.',
    priceTag:'Suggested ₹30–₹50*', centerFee:'Suggested assistance: ₹30 for a simple form or ₹50 for a longer form (sample prices; edit to your actual rate).',
    officialFee:'Portal or application fees, if any, are extra and should be paid only through the official website.',
    eta:'About 10–30 minutes for a simple task, depending on the portal and document readiness.',
    documents:['Correct applicant details and contact information','Clear, genuine documents accepted by the target portal','A valid email address/mobile access where a verification code is needed','Any portal-specific file size, type, photo or signature requirements'],
    steps:['Open the correct official website.','Enter details with the applicant and check every field.','Confirm uploads and any fee before submitting.'],
    note:'Customers should enter their own passwords and OTPs. TAPANCSC will not promise approval by a website or department.', officialUrl:'https://www.india.gov.in/'
  },
  {
    id:'print', title:'Printing & Scanning', category:'digital', categoryLabel:'Digital help', tag:'Print service', icon:'print', tone:'peach',
    description:'Print, scan and prepare documents as PDFs for applications, records, forms and everyday needs.',
    priceTag:'B/W ₹2 · Colour ₹10*', centerFee:'Suggested sample rates: A4 black-and-white print ₹2/page; A4 colour print ₹10/page; scan to PDF ₹10/page. Change these to your actual shop rates.',
    officialFee:'No government fee for ordinary printing or scanning. Special paper, photo print, editing, binding, or large files may cost extra if offered.',
    eta:'Usually 2–10 minutes for a small job; larger files may take longer.',
    documents:['Document file on phone, email or USB drive, or the original document to scan','Tell us A4/A3 size, colour or black-and-white, number of copies and single/double-sided preference','Review personal details and page order before leaving'],
    steps:['Confirm page count, output type, colour and sample price.','Check whether the file contains sensitive information before sharing it.','Collect the documents and confirm the final count/quality.'],
    note:'These are suggested sample shop rates, not a government tariff. Clear temporary copies from shared devices where practical.', officialUrl:''
  },
  {
    id:'photo', title:'Photo & Document Preparation', category:'digital', categoryLabel:'Digital help', tag:'File preparation', icon:'scan', tone:'purple',
    description:'Help resize, crop, convert and organise documents for online portal upload requirements.',
    priceTag:'Suggested ₹20/file*', centerFee:'Suggested sample price: ₹20 for basic file resizing/conversion; quote more complex work before starting. Edit this rate to your actual rate.',
    officialFee:'No government fee for ordinary file preparation. A portal may separately charge for the application itself.',
    eta:'Usually 5–15 minutes per file set when the original files are clear.',
    documents:['Original, readable image/PDF of the genuine document','The portal’s maximum file size, accepted file type and photo/signature dimensions','Correct spelling and all pages of multi-page documents'],
    steps:['Check the exact portal specifications first.','Prepare a legible copy without altering information or fabricating evidence.','Let the applicant preview the result before uploading.'],
    note:'We do not alter official documents to misrepresent facts or create fake certificates, signatures, or identity records.', officialUrl:''
  },
  {
    id:'ticket', title:'Ticket Booking Guidance', category:'digital', categoryLabel:'Digital help', tag:'Travel support', icon:'ticket', tone:'lime',
    description:'Guidance using official ticketing websites and reviewing traveller details, schedules, and cancellation rules.',
    priceTag:'Suggested help ₹30*', centerFee:'Suggested assistance: ₹30 per booking (sample rate; edit to your actual rate and confirm before booking).',
    officialFee:'Ticket fare, convenience fee, payment gateway charges, taxes and cancellation rules are determined by the booking provider and shown during booking.',
    eta:'Usually 10–20 minutes, depending on availability and provider response.',
    documents:['Correct passenger/traveller name and age details as required','Journey date, route, class/seat preferences and contact details','Accepted ID details where requested by the provider','Payment method controlled by the customer'],
    steps:['Check route, dates, availability, fare and cancellation rules.','Show passenger details and total payable amount before payment.','Save the booking ID/ticket and provider receipt.'],
    note:'Availability and confirmation depend on the provider. Never promise a confirmed ticket before the official booking system confirms it.', officialUrl:'https://www.irctc.co.in/nget/train-search'
  },
  {
    id:'digital', title:'Digital Literacy & Online Help', category:'digital', categoryLabel:'Digital help', tag:'Digital assistance', icon:'mobile', tone:'gray',
    description:'One-to-one help with everyday online tasks such as email basics, downloads, document uploads and navigating websites.',
    priceTag:'Suggested ₹30/15 min*', centerFee:'Suggested sample rate: ₹30 per 15 minutes for assisted digital tasks. Tell the customer the expected price before beginning.',
    officialFee:'No government fee for general digital literacy help; any third-party service fee remains separate.',
    eta:'Usually 10–30 minutes depending on the task and the person’s needs.',
    documents:['Bring your own phone/device when the task involves your personal account','Know the website or service you need help with','Keep your own login credentials private and enter passwords/OTPs yourself'],
    steps:['Explain the task and expected charge before starting.','Guide the customer through each step while they retain control of their account.','Check that the task is complete and log out of any temporary session.'],
    note:'For privacy, do not send passwords, OTPs, PINs or banking credentials through the website contact form.', officialUrl:''
  }
];

const serviceGrid = document.getElementById('services-grid');
const serviceSearch = document.getElementById('service-search');
const noResults = document.getElementById('no-results');
const filterButtons = [...document.querySelectorAll('.filter-chip')];
let activeFilter = 'all';
let selectedService = null;

function svgIcon(name) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths.help}</svg>`;
}

function renderServices() {
  const query = serviceSearch.value.trim().toLowerCase();
  const matching = services.filter(service => {
    const matchesFilter = activeFilter === 'all' || service.category === activeFilter;
    const haystack = `${service.title} ${service.categoryLabel} ${service.tag} ${service.description} ${service.priceTag}`.toLowerCase();
    return matchesFilter && haystack.includes(query);
  });
  serviceGrid.innerHTML = matching.map((service, index) => `
    <article class="service-card" style="animation-delay:${Math.min(index * 35, 210)}ms">
      <div class="service-card-top"><span class="service-icon service-icon--${service.tone}">${svgIcon(service.icon)}</span><span class="service-tag">${service.tag}</span></div>
      <h3>${service.title}</h3><p>${service.description}</p>
      <div class="service-card-bottom"><span class="service-price">${service.priceTag}</span><button type="button" data-service="${service.id}" aria-label="View charges and documents for ${service.title}">Details <span aria-hidden="true">↗</span></button></div>
    </article>`).join('');
  noResults.hidden = matching.length > 0;
  serviceGrid.hidden = matching.length === 0;
}

function setFilter(filter) {
  activeFilter = filter;
  filterButtons.forEach(button => {
    const selected = button.dataset.filter === filter;
    button.classList.toggle('is-selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  renderServices();
}

function openService(serviceId) {
  const service = services.find(item => item.id === serviceId);
  if (!service) return;
  selectedService = service;
  const dialog = document.getElementById('service-dialog');
  const dialogIcon = document.getElementById('dialog-icon');
  dialogIcon.className = `dialog-icon service-icon--${service.tone}`;
  dialogIcon.innerHTML = svgIcon(service.icon);
  document.getElementById('dialog-category').textContent = `${service.categoryLabel} · ${service.tag}`;
  document.getElementById('dialog-title').textContent = service.title;
  document.getElementById('dialog-description').textContent = service.description;

  document.getElementById('dialog-price-tag').textContent = service.priceTag;
  document.getElementById('dialog-center-fee').textContent = service.centerFee;
  document.getElementById('dialog-official-fee').textContent = service.officialFee;
  document.getElementById('dialog-checklist').innerHTML = service.documents.map(item => `<li>${item}</li>`).join('');
  document.getElementById('dialog-steps').innerHTML = service.steps.map(item => `<li>${item}</li>`).join('');
  document.getElementById('dialog-time').textContent = service.eta;
  document.getElementById('dialog-note').textContent = service.note;

  const officialLink = document.getElementById('dialog-official-link');
  if (service.officialUrl) {
    officialLink.href = service.officialUrl;
    officialLink.hidden = false;
  } else {
    officialLink.removeAttribute('href');
    officialLink.hidden = true;
  }
  if (typeof dialog.showModal === 'function') dialog.showModal();
  else dialog.setAttribute('open', '');
}

serviceGrid.addEventListener('click', event => {
  const trigger = event.target.closest('[data-service]');
  if (trigger) openService(trigger.dataset.service);
});
filterButtons.forEach(button => button.addEventListener('click', () => setFilter(button.dataset.filter)));
serviceSearch.addEventListener('input', renderServices);
document.getElementById('reset-search').addEventListener('click', () => {
  serviceSearch.value = '';
  setFilter('all');
  serviceSearch.focus();
});
document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    serviceSearch.focus();
    document.getElementById('services').scrollIntoView({behavior:'smooth'});
  }
});

document.getElementById('dialog-enquire').addEventListener('click', () => {
  const dialog = document.getElementById('service-dialog');
  if (typeof dialog.close === 'function') dialog.close(); else dialog.removeAttribute('open');
  const select = document.getElementById('enquiry-service');
  if (selectedService) {
    const mapping = {
      documents: 'Document services', government: 'Government applications', payments: 'Utility bill payments', digital: 'Online form filling'
    };
    select.value = selectedService.category === 'documents' ? 'Document services' : selectedService.category === 'government' ? 'Government applications' : selectedService.id === 'banking' ? 'Banking assistance' : selectedService.id === 'utility' ? 'Utility bill payments' : selectedService.id === 'print' || selectedService.id === 'photo' ? 'Printing and scanning' : 'Online form filling';
    const message = document.getElementById('message');
    message.value = `I would like to ask about ${selectedService.title}. Please let me know the current requirements, availability and charges.`;
  }
  document.getElementById('contact').scrollIntoView({behavior:'smooth'});
  window.setTimeout(() => document.getElementById('name').focus({preventScroll:true}), 500);
});

const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.getElementById('primary-nav');
menuToggle.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});
primaryNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  primaryNav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation menu');
}));

// Keep only one FAQ open at a time for a calmer reading experience.
document.querySelectorAll('.faq-item').forEach(item => item.addEventListener('toggle', () => {
  if (item.open) document.querySelectorAll('.faq-item').forEach(other => { if (other !== item) other.open = false; });
}));

function digitsOnly(value) { return String(value || '').replace(/\D/g, ''); }
function updateContactDetails() {
  const availability = document.getElementById('contact-availability');
  const available = [];
  if (TAPANCSC_CONFIG.phone.trim()) available.push(TAPANCSC_CONFIG.phone.trim());
  if (TAPANCSC_CONFIG.email.trim()) available.push(TAPANCSC_CONFIG.email.trim());
  availability.textContent = available.length ? available.join(' · ') : 'Add your contact details before publishing';
  document.querySelectorAll('[data-contact-call]').forEach(link => {
    if (TAPANCSC_CONFIG.phone.trim()) { link.href = `tel:${TAPANCSC_CONFIG.phone.trim()}`; link.hidden = false; }
  });
}
updateContactDetails();

document.getElementById('contact-form').addEventListener('submit', async event => {
  event.preventDefault();
  const feedback = document.getElementById('form-feedback');
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const phone = String(data.get('phone') || '').trim();
  const service = String(data.get('service') || '').trim();
  const message = String(data.get('message') || '').trim();
  const body = `TAPANCSC website enquiry\nName: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`;
  const email = TAPANCSC_CONFIG.email.trim();
  const whatsapp = digitsOnly(TAPANCSC_CONFIG.whatsapp);
  feedback.className = 'form-feedback';

  if (whatsapp.length >= 10) {
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(body)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    feedback.textContent = 'Your enquiry message is ready in WhatsApp. Review it and press Send there.';
    feedback.classList.add('is-success');
    return;
  }
  if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    const subject = encodeURIComponent(`TAPANCSC enquiry: ${service}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(body)}`;
    feedback.textContent = 'Your email draft is ready in your default email app. Review it and send when ready.';
    feedback.classList.add('is-success');
    return;
  }

  try {
    await navigator.clipboard.writeText(body);
    feedback.textContent = 'Enquiry text copied. Add your email or WhatsApp number in script.js to enable direct sending, then paste this message into your preferred app.';
    feedback.classList.add('is-success');
  } catch {
    feedback.textContent = 'Your message is valid, but direct sending is not configured. Add an email or WhatsApp number in script.js, or copy your enquiry details manually.';
    feedback.classList.add('is-error');
  }
});

document.getElementById('current-year').textContent = new Date().getFullYear();
renderServices();
