/* ============================================
   Mardochée KIKIGBAGBAN — Portfolio Scripts
   ============================================ */

// ── Translations ──
const translations = {
  fr: {
    'nav.projects': 'Projets',
    'hero.greeting': 'Bonjour, je suis',
    'hero.title': 'Développeur Full-stack Python',
    'hero.description': 'Développeur Full-stack spécialisé en Python et Django, avec une solide expérience en conception d\'architectures applicatives MVC, n-tiers et REST. Habitué à intervenir sur des projets à fort impact — santé, industrie, e-learning, e-commerce — et à déployer mes propres APIs de bout en bout.',
    'hero.cv': 'CV',
    'hero.available': 'Disponible',
    'quote.text': 'Je ne me contente pas de coder des fonctionnalités — je conçois des architectures pensées pour durer, performer et évoluer. Chaque projet est une opportunité de repousser les limites de la qualité logicielle.',
    'about.title': 'À propos',
    'about.text': 'Je suis un Développeur Full-stack spécialisé en Python et Django, passionné par la conception d\'architectures applicatives solides et évolutives. Avec plus de 5 ans d\'expérience, j\'ai eu l\'opportunité de travailler sur des projets à fort impact dans des domaines variés : santé, industrie, e-learning et e-commerce.<br><br>Mon approche combine rigueur technique et vision produit. Que ce soit pour développer des API REST performantes, mettre en place des architectures MVC et n-tiers, ou accompagner la montée en compétences de mes collègues, je m\'efforce toujours de livrer des solutions robustes, sécurisées et conformes aux meilleures pratiques.<br><br>Basé à Dakar, Sénégal, je gère moi-même le déploiement de mes APIs et l\'infrastructure serveur pour garantir une mise en production fluide et fiable.',
    'projects.title': 'Projets',
    'projects.hint': 'Survolez les images pour un aperçu détaillé',
    'projects.happypro.category': 'Automatisation · Ménage · Blanchisserie',
    'projects.happypro.description': 'Plateforme SaaS d\'automatisation des services de ménage et blanchisserie pour les propriétaires de locations courte durée. Synchronisation avec les calendriers Airbnb et Booking.com, gestion de la qualité avec rapports photo, et réseau de professionnels qualifiés. Intégration de Stripe Connect pour la gestion des paiements marketplace. Déployée à Toulouse, Paris, Cannes et Montpellier.',
    'projects.controlfer.category': 'Industrie · Mobile',
    'projects.controlfer.description': 'Application permettant aux citoyens de vérifier la conformité du fer aux normes de qualité. Déployée au Sénégal, Bénin, Mali et Burkina Faso avec détection d\'anomalies et alertes en cas de non-conformité. Architecture orientée services assurant la traçabilité des contrôles et contribuant à la sécurisation du marché.',
    'projects.excelsis.category': 'Santé · Gestion médicale',
    'projects.excelsis.description': 'Conception et développement d\'une application web de gestion de rendez-vous et consultations médicales. Développement d\'API back-end sécurisées pour patients, praticiens et spécialités. Mise en place d\'un tableau de bord analytique avec gestion des rôles, permissions et sécurisation des données médicales.',
    'projects.taf.category': 'Immobilier · Recherche avancée',
    'projects.taf.description': 'Plateforme web de recherche et de localisation de biens immobiliers. Implémentation de filtres avancés par localisation, type de bien et budget. Gestion des annonces et mise en relation des utilisateurs avec une architecture évolutive orientée services.',
    'projects.defaru.category': 'Formation · Web & Mobile',
    'projects.defaru.description': 'Plateforme de formation en ligne proposant des modules gratuits en Soft Skills. Développement de la version web et intégration mobile Android et iOS. Gestion des utilisateurs, contenus et progression des apprenants pour une expérience d\'apprentissage fluide.',
    'projects.niafey.category': 'Services à domicile · Mobile',
    'projects.niafey.description': 'Application mobile de mise en relation entre particuliers et prestataires de services à domicile. Gestion des profils, prestations, évaluations et disponibilités. Contribution à l\'architecture back-end et à la sécurisation des échanges.',
    'projects.easymarket.category': 'E-commerce · Paiement',
    'projects.easymarket.description': 'Solution e-commerce complète avec gestion automatisée des stocks et intégration des passerelles de paiement Stripe, Wave et Paygate. Architecture robuste et scalable pour une expérience d\'achat fluide et sécurisée.',
    'btn.more': 'voir plus',
    'btn.less': 'voir moins',
    'education.title': 'Formation',
    'education.master.degree': 'Master en Réseaux et Systèmes Décisionnels',
    'education.master.school': 'ISM — Dakar, Sénégal',
    'education.license.degree': 'Licence en Développement d\'Applications Réparties',
    'education.license.school': 'ESMT — Dakar, Sénégal',
    'experience.title': 'Expérience Professionnelle',
    'experience.lead.title': 'Lead Développeur',
    'experience.lead.company': 'Volkeno — Dakar, Sénégal',
    'experience.lead.description': 'Lead junior : accompagnement et montée en compétences des développeurs de l\'équipe<br>Conception d\'architectures applicatives basées sur des API REST<br>Définition des choix techniques : sécurité, performance, scalabilité<br>Revue de code et mentorat technique<br>Déploiement et administration des APIs en production (DevOps)<br>Garantie du respect des délais et des normes de qualité',
    'experience.backend.title': 'Développeur Back-end',
    'experience.backend.company': 'Volkeno — Dakar, Sénégal',
    'experience.backend.description': 'Développement de plus de <strong>30 API REST</strong> avec Django<br>Implémentation d\'architectures MVC et n-tiers<br>Intégration avec des interfaces front-end en JavaScript<br>Optimisation des performances applicatives et des bases de données<br>Participation active aux phases de conception technique',
    'experience.cta': 'Votre entreprise ensuite ? 🤝',
    'certifications.title': 'Certifications',
    'certifications.1.name': 'Python for Data Science, AI & Development',
    'certifications.2.name': 'Introduction au DevOps',
    'certifications.3.name': 'Cloud Computing',
    'certifications.4.name': 'Agile Development and Scrum (Honors)',
    'certifications.5.name': 'Back-End Development',
    'certifications.6.name': 'Software Engineering (Honors)',
    'certifications.7.name': 'Linux Commands and Shell Scripting',
    'certifications.8.name': 'Git et GitHub',
    'contact.eyebrow': 'Vous êtes arrivé jusqu\'ici !',
    'contact.heading': 'Travaillons ensemble 🤝',
    'contact.subtext': 'N\'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration.',
    'footer.text': '© 2026 Mardochée KIKIGBAGBAN. Crafted with 💜 from Dakar, Sénégal.'
  },
  en: {
    'nav.projects': 'Projects',
    'hero.greeting': 'Hello, I\'m',
    'hero.title': 'Full-stack Python Developer',
    'hero.description': 'Full-stack developer specialized in Python and Django, with solid experience in designing MVC, n-tier, and REST application architectures. Experienced in working on high-impact projects — healthcare, industry, e-learning, e-commerce — and deploying my own APIs end-to-end.',
    'hero.cv': 'CV',
    'hero.available': 'Available',
    'quote.text': 'I don\'t just code features — I design architectures built to last, perform, and evolve. Every project is an opportunity to push the boundaries of software quality.',
    'about.title': 'About',
    'about.text': 'I\'m a Full-stack developer specialized in Python and Django, passionate about designing solid and scalable application architectures. With over 5 years of experience, I\'ve had the opportunity to work on high-impact projects across various domains: healthcare, industry, e-learning, and e-commerce.<br><br>My approach combines technical rigor and product vision. Whether developing high-performance REST APIs, implementing MVC and n-tier architectures, or mentoring team members, I always strive to deliver robust, secure solutions that follow best practices.<br><br>Based in Dakar, Senegal, I manage the deployment of my APIs and server infrastructure to ensure smooth and reliable production.',
    'projects.title': 'Projects',
    'projects.hint': 'Hover over images for detailed preview',
    'projects.happypro.category': 'Automation · Cleaning · Laundry',
    'projects.happypro.description': 'SaaS platform automating cleaning and laundry services for short-term rental owners. Integration with Airbnb and Booking.com calendars, quality management with photo reports, and network of qualified professionals. Stripe Connect integration for marketplace payment management. Deployed in Toulouse, Paris, Cannes, and Montpellier.',
    'projects.controlfer.category': 'Industry · Mobile',
    'projects.controlfer.description': 'Application enabling citizens to verify iron conformity to quality standards. Deployed in Senegal, Benin, Mali, and Burkina Faso with anomaly detection and non-compliance alerts. Service-oriented architecture ensuring control traceability and market security.',
    'projects.excelsis.category': 'Healthcare · Medical Management',
    'projects.excelsis.description': 'Design and development of a web application for managing medical appointments and consultations. Development of secure back-end APIs for patients, practitioners, and specialties. Implementation of an analytics dashboard with role management, permissions, and medical data security.',
    'projects.taf.category': 'Real Estate · Advanced Search',
    'projects.taf.description': 'Web platform for searching and locating real estate properties. Implementation of advanced filters by location, property type, and budget. Listing management and user connection with a scalable service-oriented architecture.',
    'projects.defaru.category': 'Training · Web & Mobile',
    'projects.defaru.description': 'Online training platform offering free Soft Skills modules. Development of web version and mobile Android and iOS integration. User management, content, and learner progression for a fluid learning experience.',
    'projects.niafey.category': 'Home Services · Mobile',
    'projects.niafey.description': 'Mobile application connecting individuals and home service providers. Profile management, services, ratings, and availability. Contributing to back-end architecture and communication security.',
    'projects.easymarket.category': 'E-commerce · Payments',
    'projects.easymarket.description': 'Complete e-commerce solution with automated inventory management and integration of Stripe, Wave, and Paygate payment gateways. Robust and scalable architecture for a smooth and secure shopping experience.',
    'btn.more': 'Read more',
    'btn.less': 'Read less',
    'education.title': 'Education',
    'education.master.degree': 'Master in Networks and Decision Systems',
    'education.master.school': 'ISM — Dakar, Senegal',
    'education.license.degree': 'Bachelor in Distributed Applications Development',
    'education.license.school': 'ESMT — Dakar, Senegal',
    'experience.title': 'Professional Experience',
    'experience.lead.title': 'Lead Developer',
    'experience.lead.company': 'Volkeno — Dakar, Senegal',
    'experience.lead.description': 'Junior lead: supporting and developing junior developers<br>Designing REST API-based application architectures<br>Defining technical choices: security, performance, scalability<br>Code review and technical mentoring<br>API deployment and production administration (DevOps)<br>Ensuring compliance with deadlines and quality standards',
    'experience.backend.title': 'Back-end Developer',
    'experience.backend.company': 'Volkeno — Dakar, Senegal',
    'experience.backend.description': 'Development of over <strong>30 REST APIs</strong> with Django<br>Implementation of MVC and n-tier architectures<br>Integration with JavaScript front-end interfaces<br>Optimization of application performance and databases<br>Active participation in technical design phases',
    'experience.cta': 'Your company next? 🤝',
    'certifications.title': 'Certifications',
    'certifications.1.name': 'Python for Data Science, AI & Development',
    'certifications.2.name': 'Introduction to DevOps',
    'certifications.3.name': 'Cloud Computing',
    'certifications.4.name': 'Agile Development and Scrum (Honors)',
    'certifications.5.name': 'Back-End Development',
    'certifications.6.name': 'Software Engineering (Honors)',
    'certifications.7.name': 'Linux Commands and Shell Scripting',
    'certifications.8.name': 'Git and GitHub',
    'contact.eyebrow': 'You made it this far!',
    'contact.heading': 'Let\'s work together 🤝',
    'contact.subtext': 'Feel free to contact me to discuss your projects or collaboration opportunities.',
    'footer.text': '© 2026 Mardochée KIKIGBAGBAN. Crafted with 💜 from Dakar, Senegal.'
  }
};

// ── Current Language ──
let currentLanguage = localStorage.getItem('language') || 'fr';

// ── Function to translate ──
function translate(key) {
  return translations[currentLanguage][key] || key;
}

// ── Function to update translations ──
function updatePageTranslations() {
  document.documentElement.lang = currentLanguage;
  
  // Update title and meta tags
  document.title = currentLanguage === 'fr' 
    ? 'Mardochée KIKIGBAGBAN — Développeur Full-stack Python'
    : 'Mardochée KIKIGBAGBAN — Full-stack Python Developer';
  
  document.querySelector('meta[name="description"]').setAttribute('content',
    currentLanguage === 'fr'
      ? 'Développeur Full-stack spécialisé en Python et Django. Conception d\'architectures applicatives robustes, sécurisées et scalables.'
      : 'Full-stack developer specialized in Python and Django. Design of robust, secure, and scalable application architectures.'
  );

  // Update page elements with data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = translate(key);
    
    // Handle experience descriptions (with list items)
    if (element.classList.contains('experience-description')) {
      const items = translation.split('<br>').map(item => `<li>${item}</li>`).join('');
      element.innerHTML = `<ul>${items}</ul>`;
    } 
    // Handle paragraphs with HTML content
    else if (element.classList.contains('about-text') || element.classList.contains('hero-description') || element.classList.contains('quote-text')) {
      element.innerHTML = translation;
    } 
    // Handle span elements
    else if (element.tagName === 'SPAN') {
      element.textContent = translation;
    } 
    // Handle headings with emojis
    else if (element.tagName === 'H2') {
      const emoji = element.nextElementSibling;
      if (emoji && emoji.classList.contains('emoji')) {
        element.textContent = translation;
      } else {
        element.textContent = translation;
      }
    } 
    // Default text update
    else {
      element.textContent = translation;
    }
  });

  // Update "see more/less" buttons based on current state
  document.querySelectorAll('.show-more-btn').forEach(btn => {
    const desc = document.getElementById(btn.getAttribute('onclick').match(/'([^']+)'/)[1]);
    const isExpanded = desc && desc.classList.contains('expanded');
    btn.textContent = isExpanded 
      ? (currentLanguage === 'fr' ? 'voir moins' : 'Read less')
      : (currentLanguage === 'fr' ? 'voir plus' : 'Read more');
  });

  // Save language preference
  localStorage.setItem('language', currentLanguage);
}

// ── Language Switcher ──
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    currentLanguage = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Update CV link
    const cvBtn = document.getElementById('cv-btn');
    if (cvBtn) {
      const cvAttr = lang === 'fr' ? 'data-cv-fr' : 'data-cv-en';
      cvBtn.href = cvBtn.getAttribute(cvAttr);
    }
    
    // Update page translations
    updatePageTranslations();
  });
});

// Initialize translations on page load
window.addEventListener('DOMContentLoaded', () => {
  // Set the active language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === currentLanguage) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Set initial CV link
  const cvBtn = document.getElementById('cv-btn');
  if (cvBtn) {
    const cvAttr = currentLanguage === 'fr' ? 'data-cv-fr' : 'data-cv-en';
    cvBtn.href = cvBtn.getAttribute(cvAttr);
  }
  
  updatePageTranslations();
});

// ── Smooth Scroll for navigation links ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ── Scroll Reveal via Intersection Observer ──
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

// ── Active Nav Link on Scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

function updateActiveNav() {
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ── Toggle Project Description ──
function toggleDescription(id, btn) {
    const desc = document.getElementById(id);
    if (desc) {
        desc.classList.toggle('expanded');
        btn.textContent = desc.classList.contains('expanded') ? 'voir moins' : 'voir plus';
    }
}

// ── Floating Nav Shadow on Scroll ──
const floatingNav = document.getElementById('floating-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        floatingNav.style.boxShadow = '0 8px 40px rgba(0,0,0,0.15)';
    } else {
        floatingNav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
    }
});

// ── Staggered reveal for grid items ──
document.querySelectorAll('.projects-grid .project-card, .certifications-grid .cert-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});
