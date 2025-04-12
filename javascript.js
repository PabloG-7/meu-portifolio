// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const typed = new Typed('.anima-text', {
      strings: ['/ Frontend Developer', '{ Backend Developer'],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
    });
  });