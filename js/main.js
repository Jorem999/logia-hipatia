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


// ── Scroll arrows ──────────────────────────────────────────────────
// Convierte los divs con chevron-double-down en botones que hacen scroll
// a la siguiente <section>. Funciona en todas las páginas automáticamente.
document.querySelectorAll('[data-icon="mdi:chevron-double-down"]').forEach(icon => {
    const wrapper = icon.closest('div:not(body)');   // el div contenedor
    if (!wrapper) return;

    // Buscar el siguiente <section> en el DOM
    const getNextSection = (el) => {
        let sibling = el.parentElement;
        while (sibling) {
            sibling = sibling.nextElementSibling;
            if (!sibling) break;
            if (sibling.tagName === 'SECTION') return sibling;
            // si el sibling ES un botón que ya tiene onclick, no tocar
            if (sibling.tagName === 'BUTTON') continue;
        }
        return null;
    };

    // El botón puede ser el propio wrapper o su padre directo (div.flex)
    const scrollTarget = getNextSection(wrapper) || getNextSection(wrapper.parentElement);
    if (!scrollTarget) return;

    // Si ya es un <button>, no hacer nada
    const clickable = wrapper.closest('button') ? wrapper.closest('button') : wrapper;
    if (clickable.tagName === 'BUTTON') return;

    clickable.style.cursor = 'pointer';
    clickable.setAttribute('role', 'button');
    clickable.setAttribute('aria-label', 'Ir a la siguiente sección');

    clickable.addEventListener('click', () => {
        scrollTarget.scrollIntoView({ behavior: 'smooth' });
    });

    // Efecto hover
    clickable.addEventListener('mouseenter', () => {
        icon.style.opacity = '0.7';
    });
    clickable.addEventListener('mouseleave', () => {
        icon.style.opacity = '';
    });
});
