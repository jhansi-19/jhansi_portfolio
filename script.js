// ===== Typewriter effect =====
const roles = [
  'Full-Stack Developer',
  'Backend Engineer',
  'Problem Solver',
  'DSA Enthusiast'
];
const typewriterEl = document.getElementById('typewriter');
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = roles[roleIndex];

  if (!deleting) {
    charIndex++;
    typewriterEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex--;
    typewriterEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeLoop, deleting ? 40 : 80);
}
typeLoop();

// ===== Mobile nav toggle =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  hamburger.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

// ===== Smooth scroll helper =====
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -50% 0px' }
);
sections.forEach((section) => navObserver.observe(section));

// ===== Skill bar animation on scroll =====
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = `${bar.dataset.width}%`;
        skillObserver.unobserve(bar);
      }
    });
  },
  { threshold: 0.4 }
);
skillBars.forEach((bar) => skillObserver.observe(bar));

// ===== Navbar shadow on scroll =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 10 ? '0 4px 20px rgba(15,23,42,0.06)' : 'none';
});
