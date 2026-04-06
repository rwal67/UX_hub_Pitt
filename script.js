const CATS = [
  { id:'accessible_design',   label:'Accessible & Diverse Design' },
  { id:'user_research',       label:'User & Media Research' },
  { id:'user_testing',        label:'User Testing' },
  { id:'development',         label:'Development' },
  { id:'human_factors',       label:'Human Factors & Psychology' },
  { id:'product_strategy',    label:'Product Strategy' },
  { id:'web_design',          label:'Web & Product Design' },
  { id:'design_storytelling', label:'Design & Storytelling' },
  { id:'immersive_tech',      label:'Immersive Technologies' },
  { id:'technical_writing',   label:'Technical Writing' },
];

const courses = [
  { name:"Gender and the Digital", num:"1210", dept:"GSWS", credits:3, cats:["accessible_design"], prereq:false, term:"Fall, Spring", desc:"This course will explore the relationship between identity, media, and digital culture, specifically how gender is constructed and contested through forms of media."},
  { name:"Technologies of the Body", num:"0585", dept:"ENGFLM", credits:3, cats:["accessible_design"], prereq:false, term:"Spring", desc:"This course considers how we learn new technologies by looking at the treatment of the body in cinema and television, as well as animation, sports, gaming, and VR. In addition to analyzing media examples, students will experiment with low-tech and high-tech adaptations of optical toys and smart phone cinema to explore how movement and the body have been imagined in science and entertainment"},
  { name:"Practical Issues in Disability", num:"1290", dept:"REHSCI", credits:3, cats:["accessible_design"], prereq:false, term:"Fall, Spring", desc:"This course will review the natural progression of several age and non-age related physical disabilities such as Alzheimer's and Dementia, Parkinson's disease, CHF, COPD, DM, Spinal Cord injury, and Multiple Sclerosis"},
  { name:"Queer and Feminist Media Art", num:"1610", dept:"GSWS", credits:3, cats:["accessible_design"], prereq:true, term:"Spring", desc:"This course develops students' understanding of diversity and will build that understanding through the production of creative work relating to media art that is focused on gender and sexuality." },
  { name:"Introduction to Information, Systems and Society", num:"0010", dept:"INFSCI", credits:3, cats:["accessible_design"], prereq:false, term:"Fall, Spring, Summer", desc:"Introduction to the concepts, principles, and skills of information science for students with no programming experience."},
  { name:"Human-Centered Systems", num:"0410", dept:"INFSCI", credits:3, cats:["accessible_design","human_factors","web_design"], prereq:false, term:"Fall, Spring", desc:"This course is an introduction to the study of the design and implementation of human-centered systems."},
  { name:"Database Management Concepts and Applications", num:"1500", dept:"INFSCI", credits:3, cats:["accessible_design","development"], prereq:true, term:"Fall, Spring", desc:"This course introduces students to the practical methodologies of data design, management, storage, and retrieval in the context of relational database management systems."},
  { name:"Writing for Accessibility", num:"0545", dept:"ENGCMP", credits:3, cats:["accessible_design","technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Written Professional Communication: Topics in Diversity", num:"0401", dept:"ENGCMP", credits:3, cats:["accessible_design","technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"User Research and Reporting", num:"1430", dept:"ENGCMP", credits:3, cats:["user_research","user_testing"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Social Computing", num:"1440", dept:"INFSCI", credits:3, cats:["user_research"], prereq:false, term:"Fall", desc:"" },
  { name:"FATE in AI", num:"2185", dept:"ISSP", credits:3, cats:["user_research","immersive_tech"], prereq:false, term:"Spring", desc:"" },
  { name:"Research Writing", num:"0450", dept:"ENGCMP", credits:3, cats:["user_research","technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Mass Communication and Society", num:"0320", dept:"COMMRC", credits:3, cats:["user_research"], prereq:false, term:"Fall, Spring, Summer", desc:"" },
  { name:"Introduction to Contemporary Art", num:"0090", dept:"HAA", credits:3, cats:["user_research"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Media Literacy: Writing and Reading Your Way Through the Digital Landscape", num:"1377", dept:"ENGWRT", credits:3, cats:["user_research","human_factors","technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Words and Images", num:"0354", dept:"ENGLIT", credits:3, cats:["user_research","web_design"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"User-Centered Design", num:"1420", dept:"INFSCI", credits:3, cats:["user_testing","development"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Web Site Design and Development", num:"0134", dept:"CS", credits:3, cats:["development"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Web Programming", num:"1059", dept:"INFSCI", credits:3, cats:["development"], prereq:true, term:"Fall, Spring", desc:"" },
  { name:"Network & Web Data Technologies", num:"1570", dept:"INFSCI", credits:3, cats:["development"], prereq:true, term:"Fall", desc:"" },
  { name:"Interface Design Methodology", num:"1635", dept:"CS", credits:3, cats:["development","immersive_tech"], prereq:true, term:"Spring", desc:"" },
  { name:"User Experience Engineering", num:"1430", dept:"INFSCI", credits:3, cats:["development","web_design"], prereq:true, term:"Fall, Spring", desc:"" },
  { name:"Security and Privacy", num:"1600", dept:"INFSCI", credits:3, cats:["development"], prereq:true, term:"Fall, Spring", desc:"" },
  { name:"Organizational Psychology", num:"1635", dept:"PSY", credits:3, cats:["human_factors"], prereq:true, term:"Fall, Spring", desc:"" },
  { name:"Introduction to Popular Culture", num:"0550", dept:"ENGLIT", credits:3, cats:["human_factors"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Communication Ethics", num:"1161", dept:"COMMRC", credits:3, cats:["human_factors"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Cognitive Psychology for Non-Majors", num:"0421", dept:"PSY", credits:3, cats:["human_factors"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Sensation & Perception", num:"0510", dept:"PSY", credits:3, cats:["human_factors"], prereq:true, term:"Fall, Spring", desc:"" },
  { name:"Learning & Motivation", num:"0405", dept:"PSY", credits:3, cats:["human_factors"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Mass Media", num:"0490", dept:"SOC", credits:3, cats:["human_factors"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Introduction to Social Psychology", num:"0105", dept:"PSY", credits:3, cats:["human_factors"], prereq:false, term:"Fall, Spring, Summer", desc:"" },
  { name:"Theories of Persuasion", num:"1111", dept:"COMMRC", credits:3, cats:["human_factors"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Principles of Behavior Modifications", num:"1255", dept:"PSY", credits:3, cats:["human_factors"], prereq:true, term:"Fall, Spring", desc:"" },
  { name:"Persuasive Writing in Advertising", num:"0515", dept:"ENGCMP", credits:3, cats:["human_factors","technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Organizational Communication", num:"1102", dept:"COMMRC", credits:3, cats:["product_strategy"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Corporate Storytelling", num:"1104", dept:"ENGCMP", credits:3, cats:["product_strategy"], prereq:false, term:"Fall", desc:"" },
  { name:"Introduction to Technical Writing", num:"0600", dept:"ENGCMP", credits:3, cats:["product_strategy"], prereq:false, term:"Fall, Spring, Summer", desc:"" },
  { name:"IT Project Management", num:"1460", dept:"INFSCI", credits:3, cats:["product_strategy"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Written Professional Communication", num:"0400", dept:"ENGCMP", credits:3, cats:["product_strategy"], prereq:false, term:"Fall, Spring, Summer", desc:"" },
  { name:"Theories of Leadership", num:"1100", dept:"LDRSHP", credits:3, cats:["product_strategy"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Introduction to Information Security", num:"1049", dept:"INFSCI", credits:3, cats:["product_strategy"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Analysis of Information Systems", num:"1400", dept:"INFSCI", credits:3, cats:["product_strategy"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"History and Ethics of Advertising and Public Relations", num:"1120", dept:"ENGCMP", credits:3, cats:["product_strategy","technical_writing"], prereq:false, term:"Fall", desc:"" },
  { name:"Managing Projects and Contracts", num:"1315", dept:"PUBSRV", credits:3, cats:["product_strategy"], prereq:false, term:"Spring", desc:"" },
  { name:"Composing Digital Media", num:"0610", dept:"ENGCMP", credits:3, cats:["web_design"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Introduction to Contemporary Art", num:"0090", dept:"SA", credits:3, cats:["web_design"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Visual Thinking", num:"0110", dept:"SA", credits:3, cats:["web_design","design_storytelling"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Digital Studio: Imaging", num:"1270", dept:"SA", credits:3, cats:["web_design","design_storytelling"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Graphics", num:"1014", dept:"INFSCI", credits:3, cats:["web_design"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Design of Information Systems", num:"1025", dept:"INFSCI", credits:3, cats:["web_design"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Going Digital: Transformational Change", num:"1031", dept:"INFSCI", credits:3, cats:["web_design"], prereq:false, term:"Fall", desc:"" },
  { name:"Information Visualization", num:"1520", dept:"INFSCI", credits:3, cats:["web_design"], prereq:true, term:"Spring", desc:"" },
  { name:"Virtual Reality", num:"1355", dept:"ENGLIT", credits:3, cats:["web_design","immersive_tech"], prereq:false, term:"Spring", desc:"" },
  { name:"Projects in Digital Composition", num:"1130", dept:"ENGCMP", credits:3, cats:["web_design","design_storytelling"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Critical Making", num:"0712", dept:"ENGLIT", credits:3, cats:["web_design"], prereq:false, term:"Fall", desc:"" },
  { name:"Integrating Writing & Design", num:"0520", dept:"ENGCMP", credits:3, cats:["web_design","design_storytelling","technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Intro to Audio Storytelling", num:"0710", dept:"ENGWRT", credits:3, cats:["web_design"], prereq:false, term:"Fall", desc:"" },
  { name:"Digital Narrative and Interactive Design", num:"1201", dept:"ENGCMP", credits:3, cats:["design_storytelling"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Game Design", num:"1450", dept:"INFSCI", credits:3, cats:["design_storytelling","immersive_tech"], prereq:false, term:"Fall", desc:"" },
  { name:"Storyboarding", num:"0591", dept:"ENGFLM", credits:3, cats:["design_storytelling"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Professional Uses of Social Media", num:"1112", dept:"ENGCMP", credits:3, cats:["design_storytelling"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Immersive Media Technologies", num:"1470", dept:"INFSCI", credits:3, cats:["immersive_tech"], prereq:false, term:"Fall", desc:"" },
  { name:"Writing Machines", num:"1207", dept:"ENGCMP", credits:3, cats:["immersive_tech"], prereq:false, term:"Spring", desc:"" },
  { name:"Writing with Data", num:"0521", dept:"ENGCMP", credits:3, cats:["technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Topics in Public and Professional Writing", num:"0550", dept:"ENGCMP", credits:3, cats:["technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Writing Arguments", num:"0560", dept:"ENGCMP", credits:3, cats:["technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Writing for Change", num:"0641", dept:"ENGCMP", credits:3, cats:["technical_writing"], prereq:false, term:"Spring", desc:"" },
  { name:"Writing for the Public", num:"0420", dept:"ENGCMP", credits:3, cats:["technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
  { name:"Media Relations", num:"1182", dept:"COMMRC", credits:3, cats:["technical_writing"], prereq:false, term:"Spring", desc:"" },
  { name:"Topics in Non-Fiction: Electronic Media", num:"1403", dept:"ENGWRT", credits:3, cats:["technical_writing"], prereq:false, term:"Fall", desc:"" },
];

function catLabel(id) { return CATS.find(c => c.id === id)?.label || id; }
function clearFilters() {
  ['catSelect','creditsSelect','prereqSelect'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  if (document.getElementById('courseList')) render();
}

const openRows = new Set();
function toggle(i) {
  const detail = document.getElementById('detail-' + i);
  const btn = document.getElementById('btn-' + i);
  if (!detail) return;
  if (openRows.has(i)) { openRows.delete(i); detail.classList.remove('open'); btn.classList.remove('open'); }
  else { openRows.add(i); detail.classList.add('open'); btn.classList.add('open'); }
}

let cart = [];
const openCartRows = new Set();

function toggleCartDetail(index) {
  const detail = document.getElementById('cart-detail-' + index);
  const btn = document.getElementById('cart-btn-' + index);
  if (openCartRows.has(index)) { openCartRows.delete(index); detail.classList.remove('open'); btn.classList.remove('open'); }
  else { openCartRows.add(index); detail.classList.add('open'); btn.classList.add('open'); }
}

function toggleCart(index, event) {
  event.stopPropagation();
  const cartIndex = cart.indexOf(index);
  if (cartIndex > -1) { cart.splice(cartIndex, 1); openCartRows.delete(index); }
  else { cart.push(index); }
  render();
  updateCartUI();
}

function updateCartUI() {
  const cartPanel = document.getElementById('cartPanel');
  if (!cartPanel) return;
  const cartItemsDiv = document.getElementById('cartItems');
  const cartSkillCountsDiv = document.getElementById('cartSkillCounts');
  const cartCountSpan = document.getElementById('cartCount');
  if (cart.length === 0) { cartPanel.style.display = 'none'; return; }
  cartPanel.style.display = 'block';
  cartCountSpan.textContent = `${cart.length} course${cart.length !== 1 ? 's' : ''}`;
  cartItemsDiv.innerHTML = cart.map(index => {
    const c = courses[index];
    const isOpen = openCartRows.has(index);
    return `<div class="cart-item-wrapper">
      <div class="cart-item">
        <div class="cart-item-title-wrap">
          <button class="toggle-btn${isOpen?' open':''}" id="cart-btn-${index}" onclick="toggleCartDetail(${index})" aria-label="Expand">
            <svg viewBox="0 0 10 10"><polyline points="3,2 7,5 3,8"/></svg>
          </button>
          <span class="cart-item-dept">${c.dept} ${c.num}</span>
          <span class="cart-item-title">${c.name}</span>
        </div>
        <button class="cart-item-remove" onclick="toggleCart(${index}, event)">✕ Remove</button>
      </div>
      <div class="${isOpen?'cart-item-detail open':'cart-item-detail'}" id="cart-detail-${index}">
        <p class="detail-desc">${c.desc || 'No description available.'}</p>
        <div class="detail-meta"><span class="detail-term">Term: <span>${c.term}</span></span></div>
      </div>
    </div>`;
  }).join('');
  const skillCounts = {};
  cart.forEach(index => { courses[index].cats.forEach(catId => { skillCounts[catId] = (skillCounts[catId] || 0) + 1; }); });
  cartSkillCountsDiv.innerHTML = Object.entries(skillCounts).sort((a,b) => b[1]-a[1])
    .map(([catId, count]) => `<div class="skill-badge">${catLabel(catId)} <span>${count}</span></div>`).join('');
}

function render() {
  const catEl    = document.getElementById('catSelect');
  const prereqEl = document.getElementById('prereqSelect');
  const listEl   = document.getElementById('courseList');
  if (!listEl) return;
  const cat    = catEl ? catEl.value : '';
  const prereq = prereqEl ? prereqEl.value : '';
  openRows.clear();
  const filtered = courses.filter(c => {
    if (cat && !c.cats.includes(cat)) return false;
    if (prereq === 'no' && c.prereq) return false;
    if (prereq === 'yes' && !c.prereq) return false;
    return true;
  });
  const resultsBar = document.getElementById('resultsBar');
  if (resultsBar) resultsBar.textContent = `${filtered.length} course${filtered.length !== 1 ? 's' : ''} shown`;
  if (!filtered.length) { listEl.innerHTML = '<div class="empty-msg">No courses match your filters.</div>'; return; }
  listEl.innerHTML = filtered.map(c => {
    const i = courses.indexOf(c);
    const inCart = cart.includes(i);
    return `<div class="course-row">
      <div class="row-summary" onclick="toggle(${i})">
        <div class="course-title-wrap">
          <button class="toggle-btn" id="btn-${i}" aria-label="Expand"><svg viewBox="0 0 10 10"><polyline points="3,2 7,5 3,8"/></svg></button>
          <span class="course-code">${c.dept} ${c.num}</span>
          <span class="course-title">${c.name}</span>
        </div>
        <div class="credits-cell">${c.credits}</div>
        <div class="skill-cell">${catLabel(c.cats[0])}</div>
        <div class="prereq-cell">${c.prereq ? '<span class="prereq-warn">⚠ Prereq</span>' : '<span class="prereq-none">None</span>'}</div>
        <div><button class="add-btn${inCart?' in-cart':''}" onclick="toggleCart(${i}, event)">${inCart ? '✓ Added' : '+ Add'}</button></div>
      </div>
      <div class="row-detail" id="detail-${i}">
        <p class="detail-desc">${c.desc || 'No description available.'}</p>
        <div class="detail-meta">
          <span class="detail-term">Term: <span>${c.term}</span></span>
          <a class="peoplesoft-link" href="#" onclick="return false;">Open in PeopleSoft ↗</a>
        </div>
      </div>
    </div>`;
  }).join('');
}

const catSel = document.getElementById('catSelect');
if (catSel) {
  CATS.forEach(c => { const o = document.createElement('option'); o.value = c.id; o.textContent = c.label; catSel.appendChild(o); });
  render();
}

const FIELDS = [
  { id:'accessible_design', label:'Accessible & Diverse Design',
    icon:`<svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="9" stroke="#003594" stroke-width="2"/><line x1="23" y1="23" x2="31" y2="31" stroke="#003594" stroke-width="2.2" stroke-linecap="round"/></svg>`,
    desc:'Designing for diverse users including those with disabilities, following WCAG standards and inclusive design principles.',
    skills:['WCAG', 'Social Impact', 'Cognitive Load', 'Inclusive Design', 'Diversity and Inclusivity', ''],
    courses:['INFSCI 2470','INFSCI 2440','PSYC 1560'] },
    
  { id:'user_research', label:'User & Media Research',
    icon:`<svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="8" width="24" height="18" rx="3" stroke="#003594" stroke-width="2"/><circle cx="18" cy="30" r="2" fill="#003594"/><line x1="14" y1="30" x2="22" y2="30" stroke="#003594" stroke-width="2" stroke-linecap="round"/></svg>`,
    desc:'Methods for understanding user needs, behaviors, and contexts through qualitative and quantitative research techniques.',
    skills:['User Interviewing','Ethnography','Persona Development', 'Empathy Mapping'],
    courses:['CS 1699','INFSCI 2500'] },

  { id:'user_testing', label:'User Testing',
    icon:`<svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="8" r="3" fill="#003594"/><line x1="18" y1="11" x2="18" y2="24" stroke="#003594" stroke-width="2" stroke-linecap="round"/><line x1="10" y1="16" x2="26" y2="16" stroke="#003594" stroke-width="2" stroke-linecap="round"/><line x1="18" y1="24" x2="12" y2="32" stroke="#003594" stroke-width="2" stroke-linecap="round"/><line x1="18" y1="24" x2="24" y2="32" stroke="#003594" stroke-width="2" stroke-linecap="round"/></svg>`,
    desc:'Evaluating products and services with real users to identify usability issues and gather feedback for improvement.',
    skills:['Usability and Product Testing','Heuristic Evaluation','User Feedback Analysis','A/B Testing'],
    courses:['ENGCMP 1430','INFSCI 1420'] },

  { id:'development', label:'Development',
    icon:`<svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5" fill="#003594" opacity="0.8"/><circle cx="24" cy="12" r="5" fill="#003594" opacity="0.5"/><circle cx="18" cy="22" r="5" fill="#003594" opacity="0.35"/></svg>`,
    desc:'Building and coding digital products, from front-end interfaces to back-end systems, using languages and computational frameworks.',
    skills:['Programming Fundamentals','HTML/CSS','Python','Database Design'],
    courses:['INFSCI 1500','CS 0134'] },

  { id:'human_factors', label:'Human Factors & Psychology',
    icon:`<svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><polyline points="6,28 12,18 18,22 26,10 30,14" stroke="#003594" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/><line x1="6" y1="30" x2="30" y2="30" stroke="#003594" stroke-width="1.5" stroke-linecap="round"/></svg>`,
    desc:'Understanding how humans interact with technology, including cognitive processes, user behavior, and interface design.',
    skills:['Cognitive Psychology','Mental Models','Distributed Cognition','CSCW','Affordances'],
    courses:['PSY 0105','PSY 0405'] },

  { id:'product_strategy', label:'Product Strategy',
    icon:`<svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><polyline points="14,12 7,18 14,24" stroke="#003594" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="22,12 29,18 22,24" stroke="#003594" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="19" y1="9" x2="17" y2="27" stroke="#003594" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    desc:'Developing and executing strategies for product development, positioning, and project management.',
    skills:['Strategic Planning','Market Research','Product Lifecycle Management', 'Project Management'],
    courses:['ENGCMP 1104','INFSCI 1460'] },

  { id:'design_storytelling', label:'Design & Storytelling',
    icon:`<svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="8" width="22" height="20" rx="2" stroke="#003594" stroke-width="2"/><line x1="11" y1="14" x2="25" y2="14" stroke="#003594" stroke-width="1.8" stroke-linecap="round"/><line x1="11" y1="19" x2="25" y2="19" stroke="#003594" stroke-width="1.8" stroke-linecap="round"/><line x1="11" y1="24" x2="19" y2="24" stroke="#003594" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    desc:'Applying narrative thinking to usability journeys and product usage.',
    skills:['Narrative Design','Storytelling', 'Voice & Tone'],
    courses:['ENGCMP 1201','ENGFLM 0591'] },

  { id:'immersive_tech', label:'Immersive Technology',
    icon:`<svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="10" stroke="#003594" stroke-width="2"/><line x1="18" y1="8" x2="18" y2="28" stroke="#003594" stroke-width="1.5" stroke-linecap="round"/><line x1="8" y1="18" x2="28" y2="18" stroke="#003594" stroke-width="1.5" stroke-linecap="round"/><ellipse cx="18" cy="18" rx="10" ry="5" stroke="#003594" stroke-width="1.2"/></svg>`,
    desc:'Exploring the intersection of human-computer interaction and VR/AR experiences.',
    skills:['Virtual Reality','Augmented Reality','User Experience Design','Interaction Design'],
    courses:['ISSP 2185','PSYC 1730','INFSCI 2500'] },
];

const fieldGrid = document.getElementById('fieldGrid');
if (fieldGrid) {
  const dropdown  = document.getElementById('fieldDropdown');
  const ddTitle   = document.getElementById('ddTitle');
  const ddDesc    = document.getElementById('ddDesc');
  const ddTags    = document.getElementById('ddTags');
  const ddCourses = document.getElementById('ddCourses');
  const closeBtn  = document.getElementById('dropdownClose');
  let activeId = null;

  FIELDS.forEach(f => {
    const btn = document.createElement('button');
    btn.className = 'field-btn';
    btn.dataset.id = f.id;
    btn.innerHTML = `${f.icon}<span class="field-btn-label">${f.label}</span>`;
    btn.addEventListener('click', () => {
      if (activeId === f.id) {
        dropdown.classList.remove('open');
        btn.classList.remove('active');
        activeId = null;
        return;
      }
      fieldGrid.querySelectorAll('.field-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeId = f.id;
      ddTitle.textContent = f.label;
      ddDesc.textContent  = f.desc;
      ddTags.innerHTML    = f.skills.map(s => `<span class="skill-tag">${s}</span>`).join('');
      ddCourses.innerHTML = f.courses.map(c => `<li>${c}</li>`).join('');
      dropdown.classList.add('open');
      setTimeout(() => dropdown.scrollIntoView({ behavior:'smooth', block:'nearest' }), 50);
    });
    fieldGrid.appendChild(btn);
  });

  closeBtn.addEventListener('click', () => {
    dropdown.classList.remove('open');
    fieldGrid.querySelectorAll('.field-btn').forEach(b => b.classList.remove('active'));
    activeId = null;
  });
}