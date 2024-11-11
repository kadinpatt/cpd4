document.addEventListener('DOMContentLoaded', () => {
    // Select buttons
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const highContrastToggle = document.getElementById('high-contrast-toggle');
    const reducedMotionToggle = document.getElementById('reduced-motion-toggle');

    // Check if the buttons exist in the DOM
    if (darkModeToggle && highContrastToggle && reducedMotionToggle) {
        darkModeToggle.addEventListener('click', () => { // Toggle Dark mode
            document.body.classList.toggle('dark-mode');
        });

        highContrastToggle.addEventListener('click', () => {  // Toggle High Contrast mode
            document.body.classList.toggle('high-contrast');
        });

        reducedMotionToggle.addEventListener('click', () => { // Toggle Reduced Motion mode
            document.body.classList.toggle('reduced-motion');
        });
    } 
});

// Select all table rows within #team-results
document.querySelectorAll('#team-results tr').forEach(row => {
    row.setAttribute('tabindex', '0'); // Make each tr keyboard accessible
});


