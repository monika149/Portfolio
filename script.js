// script.js
document.addEventListener('DOMContentLoaded', function() {

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Scroll to Top Button
    const scrollToTopButton = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollToTopButton.classList.remove('hidden');
        } else {
            scrollToTopButton.classList.add('hidden');
        }
    });
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Scroll-Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        for (let i = 0; i < revealElements.length; i++) {
            const elementTop = revealElements[i].getBoundingClientRect().top;
            const elementVisible = 150; // Distance from bottom of viewport to trigger
            
            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add('active');
            } else {
                // Optional: remove class to re-animate on scroll up
                // revealElements[i].classList.remove('active'); 
            }
        }
    }
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load
});