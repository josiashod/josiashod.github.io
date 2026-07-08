const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
const sections = document.querySelectorAll('main section[id]');
const year = document.querySelector('#year');
const contactForm = document.querySelector('[data-contact-form]');
const themeToggle = document.querySelector('[data-theme-toggle]');
const langToggle = document.querySelector('[data-lang-toggle]');
const cvLink = document.querySelector('[data-cv-link]');
const githubProjectsContainer = document.querySelector('[data-github-projects]');
const githubProjectsStatus = document.querySelector('[data-github-status]');
const terminalOutput = document.querySelector('[data-terminal-output]');

const translations = {
  fr: {
    role: 'Ingénieur logiciel',
    navAbout: 'À propos',
    navSkills: 'Compétences',
    navProjects: 'Projets',
    navExperience: 'Expériences',
    navEducation: 'Formations',
    navContact: 'Contact',
    heroKicker: 'Ingénieur logiciel · CDI',
    heroText: "Ingénieur logiciel orienté algorithmie, outils métiers et l'optimisation. Je recherche un CDI pour contribuer à des projets exigeants, maintenables et performants.",
    heroProjects: 'Explorer les projets',
    heroContact: 'Me contacter',
    heroCv: 'Télécharger le CV',
    aboutEyebrow: 'À propos',
    aboutTitle: 'Coder des outils fiables, rapides et vraiment utilisables.',
    aboutWhoTitle: 'Qui je suis',
    aboutWhoText: "Ingénieur logiciel avec une expérience chez Siemens Mobility, je travaille sur l'optimisation, les outils d'analyse et les applications en C++, Qt et Python.",
    aboutGoal: 'Je recherche un CDI en développement logiciel, avec un intérêt fort pour la performance et la qualité.',
    aboutWorkTitle: 'Ma façon de travailler',
    aboutWork1: "Optimisation d'algorithmes et profiling.",
    aboutWork2: 'Interfaces Qt, PyQt et Swing.',
    aboutWork3: 'Tests, documentation et non-régression.',
    aboutWork4: 'Travail en équipe Agile/Scrum.',
    knowHowTitle: 'Ce que je sais faire.',
    knowHow1: 'Concevoir et maintenir un logiciel',
    knowHow2: 'Tester un logiciel',
    knowHow3: 'Effectuer des intégrations continues et des déploiements continus (CI/CD)',
    knowHow4: "Optimiser les performances d'un logiciel",
    knowHow5: "Autodidacte, curieux, esprit d'équipe, sens du détail",
    skillsEyebrow: 'Compétences',
    skillsTitle: 'Stack technique.',
    projectsEyebrow: 'Projets',
    projectsTitle: 'Projets.',
    studyProject: 'Étudier le projet',
    moreProjects: 'Voir plus de projets',
    githubLoading: 'Chargement des dépôts GitHub publics...',
    githubEmpty: 'Aucun dépôt GitHub public pertinent à ajouter pour le moment.',
    githubError: 'Impossible de charger les dépôts GitHub pour le moment.',
    githubDatePrefix: 'Créé en',
    githubLink: 'Voir sur GitHub',
    experienceEyebrow: 'Expériences',
    experienceTitle: 'Parcours professionnels.',
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
    contactTitle: 'Parlons projet.',
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
    role: 'Software engineer',
    navAbout: 'About',
    navSkills: 'Skills',
    navProjects: 'Projects',
    navExperience: 'Experience',
    navEducation: 'Education',
    navContact: 'Contact',
    heroKicker: 'Software engineer · Full-time',
    heroText: 'Software engineer focused on algorithms, business tools and optimization. I am looking for a full-time role where I can contribute to demanding, maintainable and performant projects.',
    heroProjects: 'Explore projects',
    heroContact: 'Contact me',
    heroCv: 'Download resume',
    aboutEyebrow: 'About',
    aboutTitle: 'Building reliable, fast and genuinely useful tools.',
    aboutWhoTitle: 'Profile',
    aboutWhoText: 'Software engineer with experience at Siemens Mobility, working on optimization, analysis tools and applications in C++, Qt and Python.',
    aboutGoal: 'I am looking for a full-time software development role, with a strong interest in performance and quality.',
    aboutWorkTitle: 'How I work',
    aboutWork1: 'Algorithm optimization and profiling.',
    aboutWork2: 'Qt, PyQt and Swing interfaces.',
    aboutWork3: 'Testing, documentation and non-regression.',
    aboutWork4: 'Agile/Scrum teamwork.',
    knowHowTitle: 'What I can do.',
    knowHow1: 'Design and maintain software',
    knowHow2: 'Test software',
    knowHow3: 'Set up continuous integration and continuous deployment (CI/CD)',
    knowHow4: 'Optimize software performance',
    knowHow5: 'Self-taught, curious, team-minded, detail-oriented',
    skillsEyebrow: 'Skills',
    skillsTitle: 'Technical stack.',
    projectsEyebrow: 'Projects',
    projectsTitle: 'Projects.',
    studyProject: 'View project',
    moreProjects: 'See more projects',
    githubLoading: 'Loading public GitHub repositories...',
    githubEmpty: 'No relevant public GitHub repositories to add for now.',
    githubError: 'Unable to load GitHub repositories right now.',
    githubDatePrefix: 'Created in',
    githubLink: 'View on GitHub',
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
    contactTitle: 'Let’s talk project.',
    contactIntro: 'For a full-time opportunity, a mission or a project.',
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

const terminalTemplates = {
  fr: `<b>$</b> whoami
ingenieur_logiciel

<b>$</b> cat focus.json
{
  "domaines": ["développement logiciel", "développement web", "outils metiers"],
  "langages": ["C++", "Python", "JavaScript", "Java"],
  "frameworks": ["Qt", "PyQt", "React", "Spring Boot"],
  "pratiques": ["tests", "CI/CD", "profiling", "documentation"]
}

<b>$</b> run highlights
✓ optimisation simulation ferroviaire
✓ analyse de logs avec interface Qt
✓ simulations V2V et agents autonomes
✓ applications web interactives

<b>$</b> status --career
recherche: CDI developpement logiciel
localisation: France

<b>$</b> <span class="terminal-cursor">_</span>`,
  en: `<b>$</b> whoami
software_engineer

<b>$</b> cat focus.json
{
  "domains": ["software development", "web development", "business tools"],
  "languages": ["C++", "Python", "JavaScript", "Java"],
  "frameworks": ["Qt", "PyQt", "React", "Spring Boot"],
  "practices": ["testing", "CI/CD", "profiling", "documentation"]
}

<b>$</b> run highlights
✓ railway simulation optimization
✓ log analysis tool with Qt interface
✓ V2V and autonomous-agent simulations
✓ interactive web applications

<b>$</b> status --career
search: full-time software role
location: France

<b>$</b> <span class="terminal-cursor">_</span>`
};

let currentLang = localStorage.getItem('portfolio-lang') || 'fr';
let githubRepos = [];

const staticProjectNames = new Set([
  'reseau_v2v',
  'boids',
  'pomodoro',
  'minesweeper_game',
  'memoryCard',
  'nature_protector',
  'simple_shell',
  'birthday',
  'calculatrice'
]);

const relevantRepoLanguages = new Set([
  'C',
  'C++',
  'Python',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'PHP',
  'Java'
]);

const formatGithubDate = (date) => {
  if (!date) return '';
  return new Intl.DateTimeFormat(currentLang === 'fr' ? 'fr-FR' : 'en-US', {
    month: 'short',
    year: 'numeric'
  }).format(new Date(date));
};

const isRelevantRepo = (repo) => {
  if (!repo || repo.fork || repo.archived || repo.private) return false;
  if (staticProjectNames.has(repo.name)) return false;
  if (repo.name === 'josiashod.github.io') return false;
  return relevantRepoLanguages.has(repo.language) || repo.description;
};

const renderGithubProjects = () => {
  if (!githubProjectsContainer) return;

  githubProjectsContainer.innerHTML = '';

  if (!githubRepos.length) {
    if (githubProjectsStatus) githubProjectsStatus.textContent = translations[currentLang].githubEmpty;
    return;
  }

  if (githubProjectsStatus) githubProjectsStatus.textContent = '';

  githubRepos.forEach((repo) => {
    const card = document.createElement('article');
    card.className = 'project-card simple reveal in-view';

    const body = document.createElement('div');
    body.className = 'project-body';

    const type = document.createElement('p');
    type.className = 'project-type';
    type.textContent = [repo.language, `${translations[currentLang].githubDatePrefix} ${formatGithubDate(repo.created_at)}`]
      .filter(Boolean)
      .join(' · ');

    const title = document.createElement('h3');
    title.textContent = repo.name.replaceAll('-', ' ');

    const description = document.createElement('p');
    description.textContent = repo.description || (currentLang === 'fr' ? 'Dépôt public GitHub.' : 'Public GitHub repository.');

    const link = document.createElement('a');
    link.href = repo.html_url;
    link.target = '_blank';
    link.rel = 'noreferrer';
    link.textContent = translations[currentLang].githubLink;

    body.append(type, title, description, link);
    card.append(body);
    githubProjectsContainer.append(card);
  });
};

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
  if (terminalOutput) terminalOutput.innerHTML = terminalTemplates[lang];
  renderGithubProjects();
};

const setTheme = (theme) => {
  document.body.dataset.theme = theme;
  localStorage.setItem('portfolio-theme', theme);
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

const loadGithubProjects = async () => {
  if (!githubProjectsContainer) return;

  if (githubProjectsStatus) {
    githubProjectsStatus.textContent = translations[currentLang].githubLoading;
  }

  try {
    const response = await fetch('https://api.github.com/users/josiashod/repos?per_page=100&sort=updated');
    if (!response.ok) throw new Error('GitHub request failed');

    const repos = await response.json();
    githubRepos = repos
      .filter(isRelevantRepo)
      .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
      .slice(0, 12);

    renderGithubProjects();
  } catch (error) {
    if (githubProjectsStatus) {
      githubProjectsStatus.textContent = translations[currentLang].githubError;
    }
  }
};

loadGithubProjects();

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
