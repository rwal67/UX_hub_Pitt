let categories = [];
let courses = [];
let cart = [];
const openRows = new Set();
const openCartRows = new Set();

async function init() {
  try {
    const response = await fetch('./courses.json');
    const data = await response.json();

    categories = data.categories;
    courses = data.courses;

    const catSelect = document.getElementById('catSelect');
    if (catSelect) {
      categories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat.id;
        opt.textContent = cat.label;
        catSelect.appendChild(opt);
      });
    }

    render();
    
  } catch (error) {
    console.error("Error loading courses.json:", error);
    document.getElementById('courseList').innerHTML = "<p>Failed to load course data.</p>";
  }
}

// const CATS = [
//   { id:'accessible_design',   label:'Accessible & Diverse Design' },
//   { id:'user_research',       label:'User & Media Research' },
//   { id:'user_testing',        label:'User Testing' },
//   { id:'development',         label:'Development' },
//   { id:'human_factors',       label:'Human Factors & Psychology' },
//   { id:'product_strategy',    label:'Product Strategy' },
//   { id:'web_design',          label:'Web & Product Design' },
//   { id:'design_storytelling', label:'Design & Storytelling' },
//   { id:'immersive_tech',      label:'Immersive Technologies' },
//   { id:'technical_writing',   label:'Technical Writing' },
// ];

// const courses = [
//   { name:"Gender and the Digital", num:"1210", dept:"GSWS", credits:3, cats:["accessible_design"], prereq:false, term:"Fall, Spring", desc:"This course will explore the relationship between identity, media, and digital culture, specifically how gender is constructed and contested through forms of media."},
//   { name:"Technologies of the Body", num:"0585", dept:"ENGFLM", credits:3, cats:["accessible_design"], prereq:false, term:"Spring", desc:"This course considers how we learn new technologies by looking at the treatment of the body in cinema and television, as well as animation, sports, gaming, and VR."},
//   { name:"Practical Issues in Disability", num:"1290", dept:"REHSCI", credits:3, cats:["accessible_design"], prereq:false, term:"Fall, Spring", desc:"This course will review the natural progression of several age and non-age related physical disabilities such as Alzheimer's and Dementia, Parkinson's disease, CHF, COPD, DM, Spinal Cord injury, and Multiple Sclerosis"},
//   { name:"Queer and Feminist Media Art", num:"1610", dept:"GSWS", credits:3, cats:["accessible_design"], prereq:true, term:"Spring", desc:"This course develops students' understanding of diversity and will build that understanding through the production of creative work relating to media art that is focused on gender and sexuality." },
//   { name:"Introduction to Information, Systems and Society", num:"0010", dept:"INFSCI", credits:3, cats:["accessible_design"], prereq:false, term:"Fall, Spring, Summer", desc:"Introduction to the concepts, principles, and skills of information science for students with no programming experience."},
//   { name:"Human-Centered Systems", num:"0410", dept:"INFSCI", credits:3, cats:["accessible_design","human_factors","web_design"], prereq:false, term:"Fall, Spring", desc:"This course is an introduction to the study of the design and implementation of human-centered systems."},
//   { name:"Database Management Concepts and Applications", num:"1500", dept:"INFSCI", credits:3, cats:["accessible_design","development"], prereq:true, term:"Fall, Spring", desc:"This course introduces students to the practical methodologies of data design, management, storage, and retrieval in the context of relational database management systems."},
//   { name:"Writing for Accessibility", num:"0545", dept:"ENGCMP", credits:3, cats:["accessible_design","technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Written Professional Communication: Topics in Diversity", num:"0401", dept:"ENGCMP", credits:3, cats:["accessible_design","technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"User Research and Reporting", num:"1430", dept:"ENGCMP", credits:3, cats:["user_research","user_testing"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Social Computing", num:"1440", dept:"INFSCI", credits:3, cats:["user_research"], prereq:false, term:"Fall", desc:"" },
//   { name:"FATE in AI", num:"2185", dept:"ISSP", credits:3, cats:["user_research","immersive_tech"], prereq:false, term:"Spring", desc:"" },
//   { name:"Research Writing", num:"0450", dept:"ENGCMP", credits:3, cats:["user_research","technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Mass Communication and Society", num:"0320", dept:"COMMRC", credits:3, cats:["user_research"], prereq:false, term:"Fall, Spring, Summer", desc:"" },
//   { name:"Introduction to Contemporary Art", num:"0090", dept:"HAA", credits:3, cats:["user_research"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Media Literacy", num:"1377", dept:"ENGWRT", credits:3, cats:["user_research","human_factors","technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Words and Images", num:"0354", dept:"ENGLIT", credits:3, cats:["user_research","web_design"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"User-Centered Design", num:"1420", dept:"INFSCI", credits:3, cats:["user_testing","development"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Web Site Design and Development", num:"0134", dept:"CS", credits:3, cats:["development"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Web Programming", num:"1059", dept:"INFSCI", credits:3, cats:["development"], prereq:true, term:"Fall, Spring", desc:"" },
//   { name:"Network & Web Data Technologies", num:"1570", dept:"INFSCI", credits:3, cats:["development"], prereq:true, term:"Fall", desc:"" },
//   { name:"Interface Design Methodology", num:"1635", dept:"CS", credits:3, cats:["development","immersive_tech"], prereq:true, term:"Spring", desc:"" },
//   { name:"User Experience Engineering", num:"1430", dept:"INFSCI", credits:3, cats:["development","web_design"], prereq:true, term:"Fall, Spring", desc:"" },
//   { name:"Security and Privacy", num:"1600", dept:"INFSCI", credits:3, cats:["development"], prereq:true, term:"Fall, Spring", desc:"" },
//   { name:"Organizational Psychology", num:"1635", dept:"PSY", credits:3, cats:["human_factors"], prereq:true, term:"Fall, Spring", desc:"" },
//   { name:"Introduction to Popular Culture", num:"0550", dept:"ENGLIT", credits:3, cats:["human_factors"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Communication Ethics", num:"1161", dept:"COMMRC", credits:3, cats:["human_factors"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Cognitive Psychology for Non-Majors", num:"0421", dept:"PSY", credits:3, cats:["human_factors"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Sensation & Perception", num:"0510", dept:"PSY", credits:3, cats:["human_factors"], prereq:true, term:"Fall, Spring", desc:"" },
//   { name:"Learning & Motivation", num:"0405", dept:"PSY", credits:3, cats:["human_factors"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Mass Media", num:"0490", dept:"SOC", credits:3, cats:["human_factors"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Introduction to Social Psychology", num:"0105", dept:"PSY", credits:3, cats:["human_factors"], prereq:false, term:"Fall, Spring, Summer", desc:"" },
//   { name:"Theories of Persuasion", num:"1111", dept:"COMMRC", credits:3, cats:["human_factors"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Principles of Behavior Modifications", num:"1255", dept:"PSY", credits:3, cats:["human_factors"], prereq:true, term:"Fall, Spring", desc:"" },
//   { name:"Persuasive Writing in Advertising", num:"0515", dept:"ENGCMP", credits:3, cats:["human_factors","technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Organizational Communication", num:"1102", dept:"COMMRC", credits:3, cats:["product_strategy"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Corporate Storytelling", num:"1104", dept:"ENGCMP", credits:3, cats:["product_strategy"], prereq:false, term:"Fall", desc:"" },
//   { name:"Introduction to Technical Writing", num:"0600", dept:"ENGCMP", credits:3, cats:["product_strategy"], prereq:false, term:"Fall, Spring, Summer", desc:"" },
//   { name:"IT Project Management", num:"1460", dept:"INFSCI", credits:3, cats:["product_strategy"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Written Professional Communication", num:"0400", dept:"ENGCMP", credits:3, cats:["product_strategy"], prereq:false, term:"Fall, Spring, Summer", desc:"" },
//   { name:"Theories of Leadership", num:"1100", dept:"LDRSHP", credits:3, cats:["product_strategy"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Introduction to Information Security", num:"1049", dept:"INFSCI", credits:3, cats:["product_strategy"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Analysis of Information Systems", num:"1400", dept:"INFSCI", credits:3, cats:["product_strategy"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"History and Ethics of Advertising and Public Relations", num:"1120", dept:"ENGCMP", credits:3, cats:["product_strategy","technical_writing"], prereq:false, term:"Fall", desc:"" },
//   { name:"Managing Projects and Contracts", num:"1315", dept:"PUBSRV", credits:3, cats:["product_strategy"], prereq:false, term:"Spring", desc:"" },
//   { name:"Composing Digital Media", num:"0610", dept:"ENGCMP", credits:3, cats:["web_design"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Introduction to Contemporary Art", num:"0090", dept:"SA", credits:3, cats:["web_design"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Visual Thinking", num:"0110", dept:"SA", credits:3, cats:["web_design","design_storytelling"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Digital Studio: Imaging", num:"1270", dept:"SA", credits:3, cats:["web_design","design_storytelling"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Graphics", num:"1014", dept:"INFSCI", credits:3, cats:["web_design"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Design of Information Systems", num:"1025", dept:"INFSCI", credits:3, cats:["web_design"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Going Digital: Transformational Change", num:"1031", dept:"INFSCI", credits:3, cats:["web_design"], prereq:false, term:"Fall", desc:"" },
//   { name:"Information Visualization", num:"1520", dept:"INFSCI", credits:3, cats:["web_design"], prereq:true, term:"Spring", desc:"" },
//   { name:"Virtual Reality", num:"1355", dept:"ENGLIT", credits:3, cats:["web_design","immersive_tech"], prereq:false, term:"Spring", desc:"" },
//   { name:"Projects in Digital Composition", num:"1130", dept:"ENGCMP", credits:3, cats:["web_design","design_storytelling"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Critical Making", num:"0712", dept:"ENGLIT", credits:3, cats:["web_design"], prereq:false, term:"Fall", desc:"" },
//   { name:"Integrating Writing & Design", num:"0520", dept:"ENGCMP", credits:3, cats:["web_design","design_storytelling","technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Intro to Audio Storytelling", num:"0710", dept:"ENGWRT", credits:3, cats:["web_design"], prereq:false, term:"Fall", desc:"" },
//   { name:"Digital Narrative and Interactive Design", num:"1201", dept:"ENGCMP", credits:3, cats:["design_storytelling"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Game Design", num:"1450", dept:"INFSCI", credits:3, cats:["design_storytelling","immersive_tech"], prereq:false, term:"Fall", desc:"" },
//   { name:"Storyboarding", num:"0591", dept:"ENGFLM", credits:3, cats:["design_storytelling"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Professional Uses of Social Media", num:"1112", dept:"ENGCMP", credits:3, cats:["design_storytelling"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Immersive Media Technologies", num:"1470", dept:"INFSCI", credits:3, cats:["immersive_tech"], prereq:false, term:"Fall", desc:"" },
//   { name:"Writing Machines", num:"1207", dept:"ENGCMP", credits:3, cats:["immersive_tech"], prereq:false, term:"Spring", desc:"" },
//   { name:"Writing with Data", num:"0521", dept:"ENGCMP", credits:3, cats:["technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Topics in Public and Professional Writing", num:"0550", dept:"ENGCMP", credits:3, cats:["technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Writing Arguments", num:"0560", dept:"ENGCMP", credits:3, cats:["technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Writing for Change", num:"0641", dept:"ENGCMP", credits:3, cats:["technical_writing"], prereq:false, term:"Spring", desc:"" },
//   { name:"Writing for the Public", num:"0420", dept:"ENGCMP", credits:3, cats:["technical_writing"], prereq:false, term:"Fall, Spring", desc:"" },
//   { name:"Media Relations", num:"1182", dept:"COMMRC", credits:3, cats:["technical_writing"], prereq:false, term:"Spring", desc:"" },
//   { name:"Topics in Non-Fiction: Electronic Media", num:"1403", dept:"ENGWRT", credits:3, cats:["technical_writing"], prereq:false, term:"Fall", desc:"" },
// ];

function catLabel(id) { return CATS.find(c => c.id === id)?.label || id; }

function clearFilters() {
  ['catSelect','creditsSelect','prereqSelect'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  render(); 
}

const openRows = new Set();
function toggle(i) {
  const detail = document.getElementById('detail-' + i);
  const btn = document.getElementById('btn-' + i);
  if (!detail) return;
  
  if (openRows.has(i)) { 
    openRows.delete(i); 
    detail.classList.remove('open'); 
    btn.classList.remove('open'); 
  } else { 
    openRows.add(i);    
    detail.classList.add('open');    
    btn.classList.add('open');    
  }
}

let cart = [];
const openCartRows = new Set();
function toggleCartDetail(index) {
  const detail = document.getElementById('cart-detail-' + index);
  const btn    = document.getElementById('cart-btn-'    + index);
  if (openCartRows.has(index)) { openCartRows.delete(index); detail.classList.remove('open'); btn.classList.remove('open'); }
  else                         { openCartRows.add(index);    detail.classList.add('open');    btn.classList.add('open');    }
}

function toggleCart(index, event) {
  event.stopPropagation();
  const ci = cart.indexOf(index);
  if (ci > -1) { cart.splice(ci, 1); openCartRows.delete(index); }
  else         { cart.push(index); }
  render();
  updateCartUI();
}

function updateCartUI() {
  const cartSection    = document.getElementById('cart');
  const cartItemsDiv   = document.getElementById('cartItems');
  const cartSkillsBar  = document.getElementById('cartSkillsBar');
  const cartSkillCounts = document.getElementById('cartSkillCounts');
  const cartCountSpan  = document.getElementById('cartCount');
  if (!cartSection) return;
 
  if (cart.length === 0) {
    cartSection.style.display = 'none';
    return;
  }
 
  cartSection.style.display = 'block';
  cartCountSpan.textContent = `${cart.length} course${cart.length !== 1 ? 's' : ''}`;
 
  cartItemsDiv.innerHTML = cart.map(index => {
    const c = courses[index];
    const isOpen = openCartRows.has(index);
    return `<div class="course-row">
      <div class="row-summary" onclick="toggleCartDetail(${index})">
        <div class="course-title-wrap">
          <button class="toggle-btn${isOpen ? ' open' : ''}" id="cart-btn-${index}" aria-label="Expand">
            <svg viewBox="0 0 10 10"><polyline points="3,2 7,5 3,8"/></svg>
          </button>
          <span class="course-code">${c.dept} ${c.num}</span>
          <span class="course-title">${c.name}</span>
        </div>
        <div class="credits-cell">${c.credits}</div>
        <div class="skill-cell">${catLabel(c.cats[0])}</div>
        <div class="prereq-cell">${c.prereq ? '<span class="prereq-warn">⚠ Prereq</span>' : '<span class="prereq-none">None</span>'}</div>
        <div><button class="cart-item-remove" onclick="toggleCart(${index}, event)">✕ Remove</button></div>
      </div>
      <div class="row-detail${isOpen ? ' open' : ''}" id="cart-detail-${index}">
        <p class="detail-desc">${c.desc || 'No description available.'}</p>
        <div class="detail-meta">
          <span class="detail-term">Term: <span>${c.term}</span></span>
        </div>
      </div>
    </div>`;
  }).join('');
 
  const skillCounts = {};
  cart.forEach(index => {
    courses[index].cats.forEach(catId => {
      skillCounts[catId] = (skillCounts[catId] || 0) + 1;
    });
  });
 
  cartSkillCounts.innerHTML = Object.entries(skillCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([catId, count]) => `<div class="skill-badge">${catLabel(catId)} <span>${count}</span></div>`)
    .join('');
 
  cartSkillsBar.style.display = 'flex';
}

function render() {
  const catEl    = document.getElementById('catSelect');
  const prereqEl = document.getElementById('prereqSelect');
  const listEl   = document.getElementById('courseList');
  if (!listEl) return;
  const cat    = catEl    ? catEl.value    : '';
  const prereq = prereqEl ? prereqEl.value : '';
  openRows.clear();
  const filtered = courses.filter(c => {
    if (cat    && !c.cats.includes(cat))      return false;
    if (prereq === 'no'  &&  c.prereq)        return false;
    if (prereq === 'yes' && !c.prereq)        return false;
    return true;
  });
  const resultsBar = document.getElementById('resultsBar');
  if (resultsBar) resultsBar.textContent = `${filtered.length} course${filtered.length !== 1 ? 's' : ''} shown`;
  if (!filtered.length) { listEl.innerHTML = '<div class="empty-msg">No courses match your filters.</div>'; return; }
  listEl.innerHTML = filtered.map(c => {
    const i      = courses.indexOf(c);
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
  categories.forEach(c => { const o = document.createElement('option'); o.value = c.id; o.textContent = c.label; catSel.appendChild(o); });
  render();
}

//shared between index and disciplines 
const FIELDS = [
  { id:'accessible_design', label:'Accessible & Diverse Design',
    icon:`<img src="equal.svg" alt="">`,
    desc:'Designing for diverse users including those with disabilities, following WCAG standards and inclusive design principles.',
    skills:['WCAG','Social Impact','Cognitive Load','Inclusive Design','Diversity and Inclusivity'],
    courses:['GSWS 1210','INFSCI 0010','ENGCMP 0545'] },

  { id:'user_research', label:'User & Media Research',
    icon:`<img src="stathead.svg" alt="">`,
    desc:'Methods for understanding user needs, behaviors, and contexts through qualitative and quantitative research techniques.',
    skills:['User Interviewing','Ethnography','Persona Development','Empathy Mapping'],
    courses:['ENGCMP 1430','INFSCI 1440','COMMRC 0320'] },

  { id:'user_testing', label:'User Testing',
    icon:`<img src="research_head.svg" alt="">`,
    desc:'Evaluating products and services with real users to identify usability issues and gather feedback for improvement.',
    skills:['Usability and Product Testing','Heuristic Evaluation','User Feedback Analysis','A/B Testing'],
    courses:['ENGCMP 1430','INFSCI 1420'] },

  { id:'development', label:'Development',
    icon:`<img src="dev1.svg" alt="">`,
    desc:'Building and coding digital products, from front-end interfaces to back-end systems, using languages and computational frameworks.',
    skills:['Programming Fundamentals','HTML/CSS','Python','Database Design'],
    courses:['CS 0134','INFSCI 1059','INFSCI 1500'] },

  { id:'human_factors', label:'Human Factors & Psychology',
    icon:`<img src="rebrain.svg" alt="">`,
    desc:'Understanding how humans interact with technology, including cognitive processes, user behavior, and interface design.',
    skills:['Cognitive Psychology','Mental Models','Distributed Cognition','Affordances'],
    courses:['PSY 0105','PSY 0421','COMMRC 1111'] },

  { id:'product_strategy', label:'Product Strategy',
    icon:`<img src="strat.svg" alt="">`,
    desc:'Developing and executing strategies for product development, positioning, and project management.',
    skills:['Strategic Planning','Market Research','Product Lifecycle Management','Project Management'],
    courses:['ENGCMP 1104','INFSCI 1460','COMMRC 1102'] },

  { id:'design_storytelling', label:'Design & Storytelling',
    icon:`<img src="story.svg" alt="">`,
    desc:'Applying narrative thinking to design, user journeys, and digital communication.',
    skills:['Narrative Design','Storytelling','Voice & Tone','Storyboarding'],
    courses:['ENGCMP 1201','ENGFLM 0591','ENGCMP 1130'] },

  { id:'immersive_tech', label:'Immersive Technology',
    icon:`<img src="immersive.svg" alt="">`,
    desc:'Exploring the intersection of human-computer interaction and VR/AR experiences.',
    skills:['Virtual Reality','Augmented Reality','User Experience Design','Interaction Design'],
    courses:['INFSCI 1470','ENGLIT 1355','INFSCI 1635'] },
];

const discPillRow = document.getElementById('discPillRow');
if (discPillRow) {
  const discDetail        = document.getElementById('discDetail');
  const discDetailIcon    = document.getElementById('discDetailIcon');
  const discDetailTitle   = document.getElementById('discDetailTitle');
  const discDetailDesc    = document.getElementById('discDetailDesc');
  const discDetailSkills  = document.getElementById('discDetailSkills');
  const discDetailCourses = document.getElementById('discDetailCourses');
  let activeDiscId = null;

  FIELDS.forEach(f => {
    const pill = document.createElement('button');
    pill.className  = 'disc-pill';
    pill.dataset.id = f.id;
    pill.innerHTML  = `<span>${f.label}</span>`;

    pill.addEventListener('click', () => {
      if (activeDiscId === f.id) {
        pill.classList.remove('active');
        discDetail.style.display = 'none';
        activeDiscId = null;
        return;
      }
      discPillRow.querySelectorAll('.disc-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeDiscId = f.id;

      const heroImg = f.icon.replace(/<img /, '<img style="width:100%;height:100%;object-fit:contain;" ');
      discDetailIcon.innerHTML    = heroImg;
      discDetailTitle.textContent = f.label;
      discDetailDesc.textContent  = f.desc;

      discDetailSkills.textContent = f.skills.filter(s => s.trim()).join(', ');

      discDetailCourses.innerHTML = f.courses.map((ref, i) => {
        const [dept, num] = ref.trim().split(' ');
        const c = courses.find(x => x.dept === dept && x.num === num);
        if (!c) return `<li class="disc-course-row"><div class="disc-course-summary"><span class="disc-course-code">${ref}</span></div></li>`;
        const detailId = `disc-course-${f.id}-${i}`;
        return `<li class="disc-course-row">
          <div class="disc-course-summary" onclick="document.getElementById('${detailId}').classList.toggle('open')">
            <span class="disc-course-code">${c.dept} ${c.num}</span>
            <span class="disc-course-name">${c.name}</span>
          </div>
          <div class="disc-course-detail" id="${detailId}">
            ${c.desc || 'No description available.'}
            <div style="margin-top:6px;opacity:0.5;">Term: ${c.term}</div>
          </div>
        </li>`;
      }).join('');

      discDetail.style.display = 'flex';
      setTimeout(() => discDetail.scrollIntoView({ behavior:'smooth', block:'nearest' }), 50);
    });
    discPillRow.appendChild(pill);
  });
}
