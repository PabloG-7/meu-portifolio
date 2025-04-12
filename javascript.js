const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const links = navLinks.querySelectorAll('a');

// Abre/fecha menu ao clicar no botão
menuBtn.addEventListener('click', function () {
    navLinks.classList.toggle('active');
});

// Fecha o menu ao clicar em qualquer link
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
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
      strings: ['/Frontend Developer', '{Backend Developer'],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
    });
  });