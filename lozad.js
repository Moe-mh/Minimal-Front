document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.gallery img');
    
    // Create the intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // When image enters viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing after it's visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when at least 10% of the image is visible
    });
    
    // Start observing each image
    images.forEach(img => {
        observer.observe(img);
    });
});
