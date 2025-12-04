const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');

});
navMenu.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});




