'use strict';

let categories = [];
let courses = [];
let cart = [];
const openRows = new Set();
const openCartRows = new Set();

function catLabel(id) {
  return categories.find(c => c.id === id)?.label || id;
}

function clearFilters() {
  ['catSelect', 'creditsSelect', 'prereqSelect'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  render();
}

function toggle(i) {
  const detail = document.getElementById('detail-' + i);
  const btn    = document.getElementById('btn-' + i);
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

function toggleCartDetail(index) {
  const detail = document.getElementById('cart-detail-' + index);
  const btn    = document.getElementById('cart-btn-' + index);
  if (!detail) return;
  if (openCartRows.has(index)) {
    openCartRows.delete(index);
    detail.classList.remove('open');
    btn.classList.remove('open');
  } else {
    openCartRows.add(index);
    detail.classList.add('open');
    btn.classList.add('open');
  }
}

function toggleCart(index, event) {
  event.stopPropagation();
  const ci = cart.indexOf(index);
  if (ci > -1) {
    cart.splice(ci, 1);
    openCartRows.delete(index);
  } else {
    cart.push(index);
  }
  render();
  updateCartUI();
}

function updateCartUI() {
  const cartSection     = document.getElementById('cart');
  const cartItemsDiv    = document.getElementById('cartItems');
  const cartSkillsBar   = document.getElementById('cartSkillsBar');
  const cartSkillCounts = document.getElementById('cartSkillCounts');
  const cartCountSpan   = document.getElementById('cartCount');
  if (!cartSection) return;

  if (cart.length === 0) {
    cartSection.style.display = 'none';
    return;
  }

  cartSection.style.display = 'block';
  cartCountSpan.textContent = `${cart.length} course${cart.length !== 1 ? 's' : ''}`;

  cartItemsDiv.innerHTML = cart.map(index => {
    const c      = courses[index];
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
    if (cat    && !c.cats.includes(cat)) return false;
    if (prereq === 'no'  &&  c.prereq)  return false;
    if (prereq === 'yes' && !c.prereq)  return false;
    return true;
  })
  .sort((a, b) => a.num.localeCompare(b.num));

  const resultsBar = document.getElementById('resultsBar');
  if (resultsBar) resultsBar.textContent = `${filtered.length} course${filtered.length !== 1 ? 's' : ''} shown`;

  if (!filtered.length) {
    listEl.innerHTML = '<div class="empty-msg">No courses match your filters.</div>';
    return;
  }

  listEl.innerHTML = filtered.map(c => {
    const i      = courses.indexOf(c);
    const inCart = cart.includes(i);
    return `<div class="course-row">
      <div class="row-summary" onclick="toggle(${i})">
        <div class="course-title-wrap">
          <button class="toggle-btn" id="btn-${i}" aria-label="Expand">
            <svg viewBox="0 0 10 10"><polyline points="3,2 7,5 3,8"/></svg>
          </button>
          <span class="course-code">${c.dept} ${c.num}</span>
          <span class="course-title">${c.name}</span>
        </div>
        <div class="credits-cell">${c.credits}</div>
        <div class="skill-cell">${catLabel(c.cats[0])}</div>
        <div class="prereq-cell">${c.prereq ? '<span class="prereq-warn">⚠ Prereq</span>' : '<span class="prereq-none">None</span>'}</div>
        <div><button class="add-btn${inCart ? ' in-cart' : ''}" onclick="toggleCart(${i}, event)">${inCart ? '✓ Added' : '+ Add'}</button></div>
      </div>
      <div class="row-detail" id="detail-${i}">
        <p class="detail-desc">${c.desc || 'No description available.'}</p>
        <div class="detail-meta">
          <span class="detail-term">Term: <span>${c.term}</span></span>
          ${c.attr ? `<span class="detail-attr"><span class="detail-attr-label">Course Attributes:</span> ${c.attr.join(', ')}</span>` : ''}
          ${c.prereq_list ? `<span class="detail-prereqs"><span class="detail-prereq-label">Prerequisites:</span> ${c.prereq_list.join(', ')}</span>` : ''}
        </div>
      </div>
    </div>`;
  }).join('');
}

const FIELDS = [
  { id:'accessible_design', label:'Accessible & Diverse Design',
    icon:'Disc_Icon8.svg',
    desc:'Designing for diverse users including those with disabilities, following WCAG standards and inclusive design principles.',
    skills:['WCAG','Social Impact','Cognitive Load','Inclusive Design','Diversity and Inclusivity'],
    courses:['GSWS 1210','INFSCI 0010'],
    careers:['Accessibility Consultant','UX Designer','Product Designer','Digital Equity Specialist'] },

  { id:'user_research', label:'User & Media Research',
    icon:'Disc_Icon5.svg',
    desc:'Methods for understanding user needs, behaviors, and contexts through qualitative and quantitative research techniques.',
    skills:['User Interviewing','Ethnography','Persona Development','Empathy Mapping'],
    courses:['ENGCMP 1430','INFSCI 1440'],
    careers:['UX Researcher','Market Research Analyst','User Interviewer','Human Factors Analyst'] },

  { id:'user_testing', label:'User Testing',
    icon:'Disc_Icon7.svg',
    desc:'Evaluating products and services with real users to identify usability issues and gather feedback for improvement.',
    skills:['Usability and Product Testing','Heuristic Evaluation','User Feedback Analysis','A/B Testing'],
    courses:['ENGCMP 1430','INFSCI 1420'],
    careers:['UX Researcher','QA Analyst','Product Tester','Product Manager'] },

  { id:'development', label:'Development + Web & Product Design',
    icon:'Disc_Icon6.svg',
    desc:'Building and coding digital products, from front-end interfaces to back-end systems, using languages and computational frameworks.',
    skills:['Programming Fundamentals','HTML/CSS','Python','Database Design'],
    courses:['CS 0134','INFSCI 1059'],
    careers:['Front-End Developer','UX Engineer','Technical Lead','Product Engineer'] },

  { id:'human_factors', label:'Human Factors & Psychology',
    icon:'Disc_Icon1.svg',
    desc:'Understanding how humans interact with technology, including cognitive processes, user behavior, and interface design.',
    skills:['Cognitive Psychology','Mental Models','Distributed Cognition','Affordances'],
    courses:['PSY 0105','PSY 0421'],
    careers:['Human Factors Analyst','UX Researcher','Behavioral Designer'] },

  { id:'product_strategy', label:'Product Strategy',
    icon:'Disc_Icon9.svg',
    desc:'Developing and executing strategies for product development, positioning, and project management.',
    skills:['Strategic Planning','Market Research','Product Lifecycle Management','Project Management'],
    courses:['ENGCMP 1104','INFSCI 1460'],
    careers:['Product Manager','Product Lead','Solutions Engineer','Technical Consultant'] },

  { id:'design_storytelling', label:'Design & Storytelling + Technical Writing',
    icon:'Disc_Icon2.svg',
    desc:'Applying narrative thinking to design, user journeys, and digital communication.',
    skills:['Narrative Design','Storytelling','Voice & Tone','Storyboarding'],
    courses:['ENGCMP 1201','ENGFLM 0591'],
    careers:['UX Writer','Creative Lead','Copy Writer','Brand Strategist'] },

  { id:'immersive_tech', label:'Immersive Technology',
    icon:'Disc_Icon3.svg',
    desc:'Exploring the intersection of human-computer interaction and VR/AR experiences.',
    skills:['Virtual Reality','Augmented Reality','User Experience Design','Interaction Design'],
    courses:['INFSCI 1470','ENGLIT 1355'],
    careers:['VR/AR Developer/Researcher','Game Designer','Immersive Experience Designer','UX Engineer'] },
];

function buildDisciplines() {
  const discPillRow = document.getElementById('discPillRow');
  if (!discPillRow) return;

  const discDetail        = document.getElementById('discDetail');
  const discDetailTitle   = document.getElementById('discDetailTitle');
  const discDetailDesc    = document.getElementById('discDetailDesc');
  const discDetailSkills  = document.getElementById('discDetailSkills');
  const discDetailCareers = document.getElementById('discDetailCareers');
  const discDetailCourses = document.getElementById('discDetailCourses');
  let activeDiscId = null;

  FIELDS.forEach(f => {
    const pill = document.createElement('button');
    pill.className  = 'disc-pill';
    pill.dataset.id = f.id;
    pill.innerHTML  = `<img class="disc-pill-icon" src="${f.icon}" alt=""><span>${f.label}</span>`;

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

      discDetailTitle.textContent  = f.label;
      discDetailDesc.textContent   = f.desc;
      discDetailSkills.textContent = f.skills.join(', ');

      discDetailCareers.innerHTML = (f.careers || [])
        .map(c => `<span class="career-tag">${c}</span>`)
        .join('');

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

      discDetail.style.display = 'block';
      setTimeout(() => discDetail.scrollIntoView({ behavior:'smooth', block:'nearest' }), 50);
    });

    discPillRow.appendChild(pill);
  });
}

async function init() {
  try {
    const response = await fetch('./courses.json');
    const data     = await response.json();
    categories     = data.categories;
    courses        = data.courses;

    const catSelect = document.getElementById('catSelect');
    if (catSelect) {
      categories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value       = cat.id;
        opt.textContent = cat.label;
        catSelect.appendChild(opt);
      });
    }

    render();
    buildDisciplines();

  } catch (error) {
    console.error('Error loading courses.json:', error);
    const listEl = document.getElementById('courseList');
    if (listEl) listEl.innerHTML = '<div class="empty-msg">Failed to load course data.</div>';
  }
}

init();