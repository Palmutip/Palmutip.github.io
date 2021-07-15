/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    var to = toggleId;
    var na = navId;
    console.log("showMenu" + to + na);
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    console.log("linkAction");
    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== GSAP ANIMATION =====*/
// NAV

gsap.from('.nav__logo, .nav__toggle', { opacity: 0, duration: 1, delay: 2, y: 10 })
gsap.from('.nav__item', { opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2, })

// HOME
gsap.from('.home__title', { opacity: 0, duration: 1, delay: 1.6, y: 30 })
gsap.from('.home__description', { opacity: 0, duration: 1, delay: 1.8, y: 30 })
gsap.from('.home__button', { opacity: 0, duration: 1, delay: 2.1, y: 30 })
gsap.from('.home__img', { opacity: 0, duration: 1, delay: 1.3, y: 30 })