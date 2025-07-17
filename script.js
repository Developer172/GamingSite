document.addEventListener('DOMContentLoaded', () => {
    // Animate elements on page load
    const leftContent = document.querySelector('.left-content');
    const rightContent = document.querySelector('.right-content');
    const header = document.querySelector('header');

    // Apply fade-in animation to elements
    setTimeout(() => {
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 100);

    setTimeout(() => {
        leftContent.style.opacity = '1';
        leftContent.style.transform = 'translateX(0)';
    }, 300);

    setTimeout(() => {
        rightContent.style.opacity = '1';
        rightContent.style.transform = 'translateX(0)';
    }, 500);

    // Apply hover effect to CTA buttons
    const primaryBtn = document.querySelector('.primary-btn');
    const secondaryBtn = document.querySelector('.secondary-btn');

    primaryBtn.addEventListener('mouseover', () => {
        primaryBtn.style.transform = 'translateY(-5px)';
    });

    primaryBtn.addEventListener('mouseout', () => {
        primaryBtn.style.transform = 'translateY(0)';
    });

    secondaryBtn.addEventListener('mouseover', () => {
        secondaryBtn.style.transform = 'translateY(-5px)';
    });

    secondaryBtn.addEventListener('mouseout', () => {
        secondaryBtn.style.transform = 'translateY(0)';
    });

    // Add glow effect to game icon on hover
    const gameIcon = document.querySelector('.game-icon');
    
    gameIcon.addEventListener('mouseover', () => {
        gameIcon.style.boxShadow = '0 0 20px rgba(167, 148, 255, 0.7)';
    });
    
    gameIcon.addEventListener('mouseout', () => {
        gameIcon.style.boxShadow = 'none';
    });

    // Add smooth scroll for navigation
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Get the target section id from the href attribute
            const targetId = link.getAttribute('href');
            
            // Find the target section
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Scroll to the target section smoothly
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 