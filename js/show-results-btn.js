document.querySelectorAll('.polaroid').forEach(polaroid => {
    // Create the 'Show Results' button for each athlete (associated with the .polaroid)
    const button = document.createElement('button');
    button.classList.add('show-results-btn');
    button.textContent = 'Show Results';

    // Append the button to the .polaroid element
    polaroid.parentElement.appendChild(button);

    // Add event listener to toggle results visibility
    button.addEventListener('click', () => {
        // Get the <dl> element that is a sibling of the button
        const dl = polaroid.closest('.athlete').querySelector('dl');

        // Toggle the "show" class on the <dl> element
        dl.classList.toggle('show');

        // Change button text based on visibility
        if (dl.classList.contains('show')) {
            button.textContent = 'Hide Results';
        } else {
            button.textContent = 'Show Results';
        }
    });
});


