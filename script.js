
// harmbuger menu on small screen (max-width: 768px)
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

const downloadCV = document.querySelector('.cv-btn');
downloadCV.addEventListener('click', ()=> {
    
})