const nav = document.getElementById('mainNav');
const handleNavScroll = () => {
    if (window.scrollY > 80) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
};
window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll();

const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('.mobile-link') : [];

if (menuToggle) {
    menuToggle.addEventListener('click', () => mobileMenu.classList.add('open'));
}
if (menuClose) {
    menuClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
}
mobileLinks.forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        toast.classList.add('show');
        contactForm.reset();
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    });
}
