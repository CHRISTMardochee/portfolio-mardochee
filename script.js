/* ============================================
   Mardochée KIKIGBAGBAN — Portfolio Scripts
   ============================================ */

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
