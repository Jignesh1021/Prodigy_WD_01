window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#222';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

document.querySelectorAll('.navbar .nav-list li a').forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.color = '#ffd700';
    });
    link.addEventListener('mouseout', function() {
        this.style.color = '#fff';
    });
});

const menuToggle = document.querySelector('#mobile-menu');
const nav = document.querySelector('.navbar');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('nav-active');
});
