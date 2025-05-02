  document.addEventListener('DOMContentLoaded', function() {
    const scrollContent = document.querySelector('.scroll-content');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    const containers = document.querySelectorAll('.container');
    const totalContainers = containers.length;
    
    // Function to scroll to a specific container
    function scrollToContainer(index) {
      if (index < 0) index = 0;
      if (index >= totalContainers) index = totalContainers - 1;
      
      currentIndex = index;
      const scrollAmount = -currentIndex * 100;
      scrollContent.style.transform = `translateX(${scrollAmount}%)`;
      
      // Update button states (optional)
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === totalContainers - 1;
    }
    
    // Event listeners for buttons
    prevBtn.addEventListener('click', () => {
      scrollToContainer(currentIndex - 1);
    });
    
    nextBtn.addEventListener('click', () => {
      scrollToContainer(currentIndex + 1);
    });
    
    // Initialize button states
    prevBtn.disabled = currentIndex === 0;
  }); 
