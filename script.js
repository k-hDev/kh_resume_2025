// Search functionality
const searchInput = document.getElementById('search');
const contentSections = document.querySelectorAll('.content');

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    
    contentSections.forEach(section => {
        const sectionText = section.textContent.toLowerCase();
        
        if (sectionText.includes(searchTerm)) {
            section.style.display = 'block'; // Show matching sections
        } else {
            section.style.display = 'none'; // Hide non-matching sections
        }
    });
});

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('nav a');

anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 50, // Offset for the fixed navbar
            behavior: 'smooth'
        });
    });
});