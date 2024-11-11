document.addEventListener('DOMContentLoaded', () => {
    // Select all nav links 
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    // Create a on click event listener for each link
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Remove default jump to section behavior
            e.preventDefault();
            
            // Get target section's id from the href attribute
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Smooth scroll to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Align the target to the top of the viewport
            });
        });
    });
});
