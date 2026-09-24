const plotImg150 = 'images/plot-150sqm.jpg';
  const plotImg300 = 'images/plot-300sqm.jpg';
  const plotImg400 = 'images/plot-400sqm.jpg';
  const plotImg500 = 'images/plot-500sqm.jpg';
  const plotImg800 = 'images/plot-800sqm.jpg';
  const mvImg150 = 'images/metroview-150sqm.jpg';
  const mvImg250 = 'images/metroview-250sqm.jpg';
  const mvImg350 = 'images/metroview-350sqm.jpg';
  const mvImg450 = 'images/metroview-450sqm.jpg';
  const mvImg550 = 'images/metroview-550sqm.jpg';
  const fiImg300 = 'images/futureinvest-300sqm.jpg';
  const fiImg400 = 'images/futureinvest-400sqm.jpg';
  const fiImg500 = 'images/futureinvest-500sqm.jpg';
  const fiImgHectare = 'images/futureinvest-hectare.jpg';
  const plotSets = {
    phase1: {
      title:'Sunrise Abuja Phase 1',
      sub:'Choose from a range of plot sizes at Sunrise Abuja Phase 1, Kabusa, Ketti North.',
      sizes: [
        { sqm:150, title:'150 SQM - 3 Bedroom Terrace Duplex (Land)', price:'₦7,500,000', img: plotImg150 },
        { sqm:300, title:'300 SQM - 4 Bedroom Semi Detached Duplex (Land)', price:'₦12,500,000', img: plotImg300 },
        { sqm:400, title:'400 SQM - 4 Bedroom Fully Detached Duplex + BQ (Land)', price:'₦17,500,000', img: plotImg400 },
        { sqm:500, title:'500 SQM - 5 Bedroom Fully Detached Duplex + BQ (Land)', price:'₦25,000,000', img: plotImg500 },
        { sqm:800, title:'800 SQM - Blocks of Flats (Land)', price:'₦48,000,000', img: plotImg800 }
      ]
    },
    phase2: {
      title:'Sunrise Abuja Phase 2',
      sub:'Choose from a range of plot sizes at Sunrise Abuja Phase 2, Kabusa, Ketti North.',
      sizes: [
        { sqm:150, title:'150 SQM - 3 Bedroom Terrace Duplex (Land)', price:'₦5,000,000', img: plotImg150 },
        { sqm:250, title:'250 SQM - 3 Bedroom Terrace Duplex + BQ (Land)', price:'₦8,250,000', img: plotImg300 },
        { sqm:300, title:'300 SQM - 4 Bedroom Semi Detached Duplex (Land)', price:'₦10,000,000', img: plotImg300 },
        { sqm:400, title:'400 SQM - 4 Bedroom Fully Detached Duplex + BQ (Land)', price:'₦13,000,000', img: plotImg400 },
        { sqm:500, title:'500 SQM - 5 Bedroom Fully Detached Duplex + BQ (Land)', price:'₦16,500,000', img: plotImg500 },
        { sqm:800, title:'800 SQM - Blocks of Flats (Land)', price:'₦34,500,000', img: plotImg800 }
      ]
    },
    metroview: {
      title:'Metroview Xclusive',
      sub:'Choose from a range of plot sizes at Metroview Xclusive, sharing fence with Hutu Phase 2, Airport Road, Abuja.',
      sizes: [
        { sqm:150, title:'150 SQM - 3 Bedroom Terrace Duplex', price:'₦12,000,000', img: mvImg150 },
        { sqm:250, title:'250 SQM - 5 Bedroom Terrace Duplex', price:'₦20,000,000', img: mvImg250 },
        { sqm:350, title:'350 SQM - 4 Bedroom Semi-Detached Duplex with attached BQ', price:'₦28,000,000', img: mvImg350 },
        { sqm:450, title:'450 SQM - 4 Bedroom Fully Detached Duplex with BQ', price:'₦36,000,000', img: mvImg450 },
        { sqm:550, title:'550 SQM - 5 Bedroom Fully Detached Duplex with BQ', price:'₦44,000,000', img: mvImg550 }
      ]
    },
    futureinvest: {
      title:'Future Invest',
      sub:'Choose from a range of plot sizes and house types at Future Invest, Chibiri Extension, Kuje Area Council.',
      sizes: [
        { sqm:300, title:'300 SQM - 3 Bedroom Bungalow', price:'₦1,000,000', img: fiImg300 },
        { sqm:400, title:'400 SQM - 3 Bedroom + BQ', price:'₦1,400,000', img: fiImg400 },
        { sqm:500, title:'500 SQM - 4 Bedroom Bungalow + BQ', price:'₦1,700,000', img: fiImg500 },
        { sqm:10000, title:'1 Hectare', price:'₦20,000,000', img: fiImgHectare, label:'1 Hectare' }
      ]
    }
  };
  const plotOverlay = document.getElementById('plotModalOverlay');
  const plotGrid = document.getElementById('plotGrid');
  const plotTitleEl = document.getElementById('plotModalTitle');
  const plotSubEl = document.getElementById('plotModalSub');
  function openPlotModal(key){
    const set = plotSets[key];
    if(!set) return;
    plotTitleEl.textContent = set.title;
    plotSubEl.textContent = set.sub;
    plotGrid.innerHTML = set.sizes.map(s => `
      <div class="plot-card">
        <div class="photo"><img src="${s.img}" alt="${s.title}"></div>
        <div class="plot-card-body">
          <h4>${s.title}</h4>
          <div class="price">${s.price}</div>
          <div class="sqm-row">
            <span class="sqm">${s.label || (s.sqm + ' sqm')}</span>
            <a href="javascript:void(0)" class="buy-now" onclick="openAppForm('${s.title.replace(/'/g, "\\'")}')">Buy Now</a>
          </div>
        </div>
      </div>`).join('');
    plotOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closePlotModal(){
    plotOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  document.getElementById('plotModalClose').addEventListener('click', closePlotModal);
  plotOverlay.addEventListener('click', e => { if(e.target === plotOverlay) closePlotModal(); });

  // Buyer Application Form
  const appOverlay = document.getElementById('appModalOverlay');
  const appPropertyField = document.getElementById('appPropertyField');
  function openAppForm(propertyLabel){
    closePlotModal();
    appPropertyField.value = propertyLabel || '';
    appGoStep(1);
    document.getElementById('appPanelSuccess').classList.remove('active');
    document.getElementById('appPanel1').classList.add('active');
    appOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeAppForm(){
    appOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  function appGoStep(n){
    [1,2,3].forEach(i => {
      document.getElementById('appPanel'+i).classList.toggle('active', i === n);
      document.getElementById('appTab'+i).classList.toggle('active', i === n);
    });
  }
  const WEB3FORMS_ACCESS_KEY = '15353e62-0e56-4b7c-8135-3645d8e4ed7b';
  function appSubmit(){
    const val = id => (document.getElementById(id) && document.getElementById(id).value.trim()) || '—';
    const subject = 'New Buyer Application - ' + val('appPropertyField') + ' (' + val('appFirstName') + ' ' + val('appSurname') + ')';
    const formData = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: subject,
      from_name: 'JADOM Website - Buyer Application',
      'Title': val('appTitle'),
      'Surname': val('appSurname'),
      'First Name': val('appFirstName'),
      'Other Names': val('appOtherNames'),
      'Applicant Email': val('appEmail'),
      'Applicant Phone': val('appPhone'),
      'Marital Status': val('appMarital'),
      'Date of Birth': val('appDob'),
      'Residential Address': val('appAddress'),
      'Nationality': val('appNationality'),
      'Referral Code / Marketer': val('appReferral'),
      'Next of Kin Full Name': val('appKinName'),
      'Next of Kin Relationship': val('appKinRelationship'),
      'Next of Kin Phone': val('appKinPhone'),
      'Next of Kin Email': val('appKinEmail'),
      'Next of Kin Address': val('appKinAddress'),
      'Property Interested In': val('appPropertyField'),
      'Payment Plan Preference': val('appPaymentPlan'),
      'Duration': val('appDuration'),
      'How did you hear about us': val('appHeard'),
      'Additional Notes': val('appNotes')
    };
    const submitBtn = document.querySelector('#appPanel3 .app-btn-submit');
    if(submitBtn){ submitBtn.textContent = 'Sending...'; submitBtn.disabled = true; }
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      [1,2,3].forEach(i => document.getElementById('appPanel'+i).classList.remove('active'));
      document.getElementById('appPanelSuccess').classList.add('active');
    })
    .catch(err => {
      alert('Something went wrong sending your application. Please try again or contact us directly.');
      if(submitBtn){ submitBtn.textContent = 'Submit Application →'; submitBtn.disabled = false; }
    });
  }
  document.getElementById('appModalClose').addEventListener('click', closeAppForm);
  appOverlay.addEventListener('click', e => { if(e.target === appOverlay) closeAppForm(); });

  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // property data
  const properties = [
    { cat:'Land', num:'01', type:'Land opportunity', name:'Sunrise Abuja Phase 1', plots:'phase1', loc:'Kabusa, Ketti North, Abuja',
      facts:['150–800 SQM','From ₦7,500,000'], avail:'Available', img:'images/card-sunrise-phase1.jpg',       desc:"A considered opportunity to begin your ownership journey in one of Abuja's developing corridors." },
    { cat:'Land', num:'02', type:'Land opportunity', name:'Sunrise Abuja Phase 2', plots:'phase2', loc:'Kabusa, Ketti North, Abuja',
      facts:['150–800 SQM','From ₦5,000,000'], avail:'Available', img:'images/card-sunrise-phase2.webp',
      desc:"A considered opportunity to begin your ownership journey in one of Abuja's developing corridors." },
    { cat:'Developments', num:'03', type:'Estate development', name:'Metroview Xclusive', plots:'metroview', loc:'Sharing Fence with Hutu Phase 2, Airport Road, Abuja',
      facts:['Plot sizes on enquiry','From ₦12,000,000'], avail:'Pre-launch Offer', img:'images/card-metroview.jpg',
      desc:'A premium serviced development along the Airport Road corridor, offered ahead of public launch.' },
    { cat:'Developments', num:'04', type:'Estate development', name:'JADOM Imperial City Kuje', loc:'Chukuku by Phase 2 Estate, Kuje — opposite DeepLife Life Camp, close to Wazobia Park',
      facts:['Plot sizes on enquiry','From ₦3,000,000'], avail:'Available', img:'images/card-jadom-imperial.webp',
      desc:'A full estate development in Kuje, positioned near established community landmarks.' },
    { cat:'Land', num:'05', type:'Land opportunity', name:'Future Invest', plots:'futureinvest', loc:'Chibiri Extension, Kuje Area Council',
      facts:['Plot sizes on enquiry','From ₦1,000,000'], avail:'Limited Plots', img:'images/card-future-invest.webp',
      desc:'An accessible starting point for first-time land buyers in a growing Kuje corridor.' },
  ];
  const pgrid = document.getElementById('propertyGrid');
  function renderProperties(filter){
    pgrid.innerHTML = '';
    properties.filter(p => filter === 'all' || p.cat === filter).forEach(p => {
      const el = document.createElement('div');
      el.className = 'pcard';
      el.innerHTML = `
        <div class="photo" style="position:relative;">
          <span class="num">${p.num}</span>
          ${p.img ? `<img src="${p.img}" alt="${p.name}" style="width:100%; height:100%; object-fit:cover;">` : `<svg viewBox="0 0 400 260"><rect x="30" y="90" width="340" height="140" stroke="#F2EADB" stroke-width="1" fill="none"/><path d="M10 100 L200 30 L390 100" stroke="#F2EADB" stroke-width="1.2" fill="none"/></svg>`}
        </div>
        <div class="pcard-body">
          <div class="ptype">${p.type}</div>
          <h3>${p.name}</h3>
          <div class="loc">${p.loc}</div>
          <div class="pcard-facts"><span>${p.facts[0]}</span><span>${p.facts[1]}</span><span class="avail">${p.avail}</span></div>
          <p class="pcard-desc">${p.desc}</p>
          <div class="pcard-cta">
            ${p.plots ? `<a href="javascript:void(0)" class="view" onclick="openPlotModal('${p.plots}')">View details <svg class="icon"><use href="#i-arrow"/></svg></a>` : `<a href="#contact" class="view">View details <svg class="icon"><use href="#i-arrow"/></svg></a>`}
            <a href="#contact" class="insp">Book inspection <svg class="icon"><use href="#i-cal"/></svg></a>
          </div>
        </div>`;
      pgrid.appendChild(el);
    });
  }
  renderProperties('all');
  document.getElementById('filterTabs').addEventListener('click', e => {
    if(e.target.tagName !== 'BUTTON') return;
    document.querySelectorAll('#filterTabs button').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    renderProperties(e.target.dataset.f);
  });

  // principles
  const principles = [
    { n:'01', t:'Flexible Payment Plans', d:'Convenient installment options spread over time, tailored to fit your budget.' },
    { n:'02', t:'Hassle-free Ownership', d:'We handle the paperwork end-to-end, from documentation to transfer.' },
    { n:'03', t:'International Building Standards', d:'Every development is built to meet international construction standards.' },
    { n:'04', t:'100% Secure Documentation', d:'Verified titles and clean, transparent documentation on every property.' },
    { n:'05', t:'After-sales Support', d:'Dedicated support from purchase through to ownership and beyond.' }
  ];
  document.getElementById('principlesList').innerHTML = principles.map(p => `
    <div class="principle">
      <span class="principle-number">${p.n}</span>
      <div><h3>${p.t}</h3><p>${p.d}</p></div>
      <svg class="icon"><use href="#i-arrow"/></svg>
    </div>`).join('');

  // FAQ
  const faqs = [
    { q:"How do I book a property inspection?", a:"Use the inspection form to share your preferred date and time, and the JADOM team will follow up with you.", open:true },
    { q:"Where is JADOM Homes & Properties located?", a:"Our office is in Area 11, Garki, Abuja, Nigeria. You're welcome to reach out and arrange a visit." },
    { q:"What types of properties does JADOM offer?", a:"Land, houses, apartments and full development opportunities across Abuja — including our featured Sunrise Abuja plots." },
    { q:"Can I enquire about available land?", a:"Yes. Reach out through the contact form or call us directly, and we'll walk you through current land opportunities and plot sizes." },
    { q:"How do I enquire about a property?", a:"Fill in the general enquiry form below with the property you're interested in, or call +234 806 060 6094 directly." },
    { q:"Can I speak with JADOM before making a property decision?", a:"Absolutely — we encourage a conversation first. Book an inspection or send an enquiry and a member of the team will talk you through it." }
  ];
  document.getElementById('faqList').innerHTML = faqs.map((f,i) => `
    <div class="faq-item ${f.open ? 'open' : ''}" data-i="${i}">
      <button>${f.q}<svg class="icon faq-ic"><use href="#${f.open ? 'i-minus' : 'i-plus'}"/></svg></button>
      <div class="faq-answer"><p>${f.a}</p></div>
    </div>`).join('');
  document.getElementById('faqList').addEventListener('click', e => {
    const btn = e.target.closest('button');
    if(!btn) return;
    const item = btn.closest('.faq-item');
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(it => {
      it.classList.remove('open');
      it.querySelector('.faq-ic use').setAttribute('href','#i-plus');
    });
    if(!wasOpen){
      item.classList.add('open');
      item.querySelector('.faq-ic use').setAttribute('href','#i-minus');
    }
  });

  document.getElementById('enquiryForm').addEventListener('submit', function(e){
    e.preventDefault();
    const form = this;
    const submitBtn = form.querySelector('.form-submit');
    const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
    if(submitBtn){ submitBtn.textContent = 'Sending...'; submitBtn.disabled = true; }
    const formData = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: 'New General Enquiry - JADOM Website',
      from_name: 'JADOM Website - General Enquiry',
      'Name': document.getElementById('fname').value.trim() || '—',
      'Phone': document.getElementById('fphone').value.trim() || '—',
      'Email': document.getElementById('femail').value.trim() || '—',
      'Enquiry Type': document.getElementById('ftype').value,
      'Property Interested In': document.getElementById('fprop').value,
      'Message': document.getElementById('fmsg').value.trim() || '—'
    };
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      document.getElementById('formNote').classList.add('show');
      form.reset();
      if(submitBtn){ submitBtn.innerHTML = originalBtnText; submitBtn.disabled = false; }
    })
    .catch(err => {
      alert('Something went wrong sending your enquiry. Please try again or contact us directly.');
      if(submitBtn){ submitBtn.innerHTML = originalBtnText; submitBtn.disabled = false; }
    });
  });
