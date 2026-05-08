const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
const sections = document.querySelectorAll('main section[id]');
const year = document.querySelector('#year');
const contactForm = document.querySelector('[data-contact-form]');
const themeToggle = document.querySelector('[data-theme-toggle]');
const themeLabel = document.querySelector('.theme-switch-label');
const langToggle = document.querySelector('[data-lang-toggle]');
const cvLink = document.querySelector('[data-cv-link]');

const translations = {
  fr: {
    role: 'Développeur logiciel',
    navAbout: 'À propos',
    navSkills: 'Compétences',
    navProjects: 'Projets',
    navExperience: 'Expériences',
    navEducation: 'Formations',
    navContact: 'Contact',
    heroKicker: 'Développeur logiciel · CDI',
    heroText: 'Développeur logiciel orienté optimisation, algorithmie et outils métiers. Je recherche un CDI pour contribuer à des projets exigeants, maintenables et performants.',
    heroProjects: 'Explorer les projets',
    heroContact: 'Me contacter',
    heroCv: 'Télécharger le CV',
    aboutEyebrow: 'À propos',
    aboutTitle: 'Développement logiciel, performance et interfaces utiles.',
    aboutWhoTitle: 'Qui je suis',
    aboutWhoText: "Développeur logiciel avec une expérience chez Siemens Mobility, je travaille sur l'optimisation, les outils d'analyse et les applications en C++, Qt, Python et web.",
    aboutGoal: 'Je recherche un CDI en développement logiciel, avec un intérêt fort pour la performance et la qualité.',
    aboutWorkTitle: 'Ma façon de travailler',
    aboutWork1: "Optimisation d'algorithmes et profiling.",
    aboutWork2: 'Interfaces Qt, PyQt, Swing et web.',
    aboutWork3: 'Tests, documentation et non-régression.',
    aboutWork4: 'Travail en équipe Agile/Scrum.',
    skillsEyebrow: 'Compétences',
    skillsTitle: 'Stack technique.',
    projectsEyebrow: 'Projets',
    projectsTitle: 'Projets.',
    studyProject: 'Étudier le projet',
    experienceEyebrow: 'Expériences',
    experienceTitle: 'Parcours professionnelles.',
    exp1Title: 'Ingénieur logiciel en apprentissage · Siemens Mobility',
    exp1Summary: "Optimisation d'une application de simulation d'équipements ferroviaires.",
    exp1Item1: "Identification des goulots d'étranglement avec Valgrind / Callgrind.",
    exp1Item2: 'Mise en place de classes de suivi personnalisées pour logger les performances.',
    exp1Item3: "Architecture multithread pour paralléliser les processus d'initialisation.",
    exp1Item4: 'Analyse et réécriture de fonctions critiques pour réduire la complexité temporelle.',
    exp1Item5: 'Tests de non-régression après modifications structurelles.',
    exp1Item6: "Réduction de 85 % du temps de traitement de l'application.",
    exp2Title: 'Ingénieur logiciel stagiaire · Siemens Mobility',
    exp2Summary: "Développement d'un outil d'analyse de logs avec Qt.",
    exp2Item1: 'Composants modulaires pour traitement de données en temps réel.',
    exp2Item2: "Optimisation de l'interface pour améliorer la réactivité.",
    exp2Item3: "Extension d'une architecture orientée événements.",
    exp2Item4: 'Interface multi-fenêtres avec panneaux ancrables et détachables.',
    exp2Item5: "Documentation technique et guides d'utilisation.",
    exp2Item6: "Chaîne d'outils : compilation, lint et formatage.",
    educationEyebrow: 'Formations',
    educationTitle: 'Parcours académique.',
    contactEyebrow: 'Contact',
    contactTitle: 'Parlons CDI ou projet logiciel.',
    contactIntro: 'Pour une opportunité CDI, une mission ou un projet logiciel.',
    formName: 'Nom',
    formEmail: 'Email',
    formSubject: 'Objet',
    formMessage: 'Message',
    formSend: 'Envoyer le message',
    formNote: "Aucune donnée n'est stockée par ce site.",
    placeholderName: 'Votre nom',
    placeholderEmail: 'vous@email.com',
    placeholderSubject: 'CDI, mission, projet...',
    placeholderMessage: 'Bonjour Josias...',
    mailName: 'Nom',
    mailSubject: 'Message depuis le portfolio',
    viewCode: 'Voir le code',
    viewDemo: 'Voir le rendu',
    goCode: 'Aller au code',
    demoEyebrow: 'Démo',
    demoTitle: 'Voir le projet en action.',
    repoDemoTitle: 'Projet consultable dans le dépôt.',
    projectDescription: 'Description du projet',
    projectTech: 'Technologies utilisées',
    projectSkills: 'Compétences développées',
    backProjects: 'Retour aux projets',
    cv: './assets/pdf/josias_djossou-dan_cv_fr.pdf'
  },
  en: {
    role: 'Software Developer',
    navAbout: 'About',
    navSkills: 'Skills',
    navProjects: 'Projects',
    navExperience: 'Experience',
    navEducation: 'Education',
    navContact: 'Contact',
    heroKicker: 'Software Developer · Full-time',
    heroText: 'Software developer focused on optimization, algorithms and business tools. I am looking for a full-time role where I can contribute to demanding, maintainable and performant projects.',
    heroProjects: 'Explore projects',
    heroContact: 'Contact me',
    heroCv: 'Download resume',
    aboutEyebrow: 'About',
    aboutTitle: 'Software development, performance and useful interfaces.',
    aboutWhoTitle: 'Profile',
    aboutWhoText: 'Software developer with experience at Siemens Mobility, working on optimization, analysis tools and applications in C++, Qt, Python and web technologies.',
    aboutGoal: 'I am looking for a full-time software development role, with a strong interest in performance and quality.',
    aboutWorkTitle: 'How I work',
    aboutWork1: 'Algorithm optimization and profiling.',
    aboutWork2: 'Qt, PyQt, Swing and web interfaces.',
    aboutWork3: 'Testing, documentation and non-regression.',
    aboutWork4: 'Agile/Scrum teamwork.',
    skillsEyebrow: 'Skills',
    skillsTitle: 'Technical stack.',
    projectsEyebrow: 'Projects',
    projectsTitle: 'Projects.',
    studyProject: 'View project',
    experienceEyebrow: 'Professional experience',
    experienceTitle: 'Field experience.',
    exp1Title: 'Software Engineer Apprentice · Siemens Mobility',
    exp1Summary: 'Optimized an equipment simulation application for railway testing environments.',
    exp1Item1: 'Identified bottlenecks with Valgrind / Callgrind.',
    exp1Item2: 'Implemented custom performance-tracking classes and logs.',
    exp1Item3: 'Designed a multithreaded architecture to parallelize initialization processes.',
    exp1Item4: 'Analyzed and rewrote critical functions to reduce time complexity.',
    exp1Item5: 'Ran non-regression tests after structural changes.',
    exp1Item6: 'Reduced application processing time by 85%.',
    exp2Title: 'Software Engineer Intern · Siemens Mobility',
    exp2Summary: 'Built a log analysis tool with Qt.',
    exp2Item1: 'Developed modular components for real-time data processing.',
    exp2Item2: 'Optimized the interface to improve responsiveness.',
    exp2Item3: 'Extended an event-driven architecture.',
    exp2Item4: 'Built a multi-window interface with dockable and detachable panels.',
    exp2Item5: 'Wrote technical documentation and user guides.',
    exp2Item6: 'Set up a toolchain including compilation, linting and formatting.',
    educationEyebrow: 'Education',
    educationTitle: 'Academic background.',
    contactEyebrow: 'Contact',
    contactTitle: 'Let’s talk full-time role or software project.',
    contactIntro: 'For a full-time opportunity, a mission or a software project.',
    formName: 'Name',
    formEmail: 'Email',
    formSubject: 'Subject',
    formMessage: 'Message',
    formSend: 'Send message',
    formNote: 'No data is stored by this website.',
    placeholderName: 'Your name',
    placeholderEmail: 'you@email.com',
    placeholderSubject: 'Full-time role, mission, project...',
    placeholderMessage: 'Hello Josias...',
    mailName: 'Name',
    mailSubject: 'Message from portfolio',
    viewCode: 'View code',
    viewDemo: 'View live demo',
    goCode: 'Go to code',
    demoEyebrow: 'Demo',
    demoTitle: 'See the project in action.',
    repoDemoTitle: 'Project available in the repository.',
    projectDescription: 'Project description',
    projectTech: 'Technologies used',
    projectSkills: 'Skills developed',
    backProjects: 'Back to projects',
    cv: './assets/pdf/josias_djossou-dan_cv_en.pdf'
  }
};

let currentLang = localStorage.getItem('portfolio-lang') || 'fr';

const setLanguage = (lang) => {
  currentLang = lang;
  const dictionary = translations[lang];
  document.documentElement.lang = lang;
  localStorage.setItem('portfolio-lang', lang);

  document.querySelectorAll('[data-i18n], [data-i18n-fr], [data-i18n-en]').forEach((element) => {
    const inlineText = lang === 'fr' ? element.dataset.i18nFr : element.dataset.i18nEn;
    if (inlineText) {
      element.textContent = inlineText;
      return;
    }

    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key]) element.placeholder = dictionary[key];
  });

  if (cvLink) cvLink.href = dictionary.cv;
  if (langToggle) langToggle.textContent = lang === 'fr' ? 'EN' : 'FR';
};

const setTheme = (theme) => {
  document.body.dataset.theme = theme;
  localStorage.setItem('portfolio-theme', theme);
  if (themeLabel) {
    themeLabel.textContent = theme === 'light' ? 'Night' : 'Light';
  }
};

const savedTheme = localStorage.getItem('portfolio-theme');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
setTheme(savedTheme || (prefersLight ? 'light' : 'night'));
setLanguage(currentLang);

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  });
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    setTheme(document.body.dataset.theme === 'light' ? 'night' : 'light');
  });
}

if (langToggle) {
  langToggle.addEventListener('click', () => {
    setLanguage(currentLang === 'fr' ? 'en' : 'fr');
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (!siteNav || !menuToggle) return;
    siteNav.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((element) => {
  revealObserver.observe(element);
});

if (sections.length) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    },
    {
      rootMargin: '-42% 0px -50% 0px',
      threshold: 0
    }
  );

  sections.forEach((section) => {
    navObserver.observe(section);
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(contactForm);
    const recipient = contactForm.dataset.email || 'josiashod@gmail.com';
    const name = data.get('name') || '';
    const email = data.get('email') || '';
    const subject = data.get('subject') || translations[currentLang].mailSubject;
    const message = data.get('message') || '';
    const body = [
      `${translations[currentLang].mailName}: ${name}`,
      `Email: ${email}`,
      '',
      String(message)
    ].join('\n');

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
