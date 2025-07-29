function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".mobile-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add fade-in animation to sections when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });
});

// Add hover sound effect (optional - for better UX)
function addHoverSound() {
    const interactiveElements = document.querySelectorAll('.btn, .icon, .details-container, .certificate-item, .timeline-content');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            // Add a subtle visual feedback
            this.style.transition = 'all 0.2s ease';
        });
    });
}

// Initialize hover effects
document.addEventListener('DOMContentLoaded', addHoverSound);

// Clean navigation effects without background highlights
function addNavClickEffects() {
    const navLinks = document.querySelectorAll('.nav-links a, footer .nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Simple click feedback without background effects
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// Initialize navigation effects
document.addEventListener('DOMContentLoaded', addNavClickEffects);