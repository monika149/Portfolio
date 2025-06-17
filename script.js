// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Scroll to top button functionality
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopButton.classList.remove('hidden');
    } else {
        scrollToTopButton.classList.add('hidden');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll reveal animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal(); // Call once to check for elements in view on page load

               