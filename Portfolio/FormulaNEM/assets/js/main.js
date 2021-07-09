/*===== MENU SHOW Y HIDDEN =====*/
/*
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})*/

/*===== MOUSEMOVE HOME IMG =====*/
/*document.addEventListener('mousemove', move);
function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}*/
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
showMenu('nav__toggle', 'nav__menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    console.log("linkAction");
    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav__menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== GSAP ANIMATION =====*/
// NAV
/*
gsap.from('.nav__logo, .nav__toggle', { opacity: 0, duration: 1, delay: 2, y: 10 })
gsap.from('.nav__item', { opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2, })

// HOME
gsap.from('.home__title', { opacity: 0, duration: 1, delay: 1.6, y: 30 })
gsap.from('.home__description', { opacity: 0, duration: 1, delay: 1.8, y: 30 })
gsap.from('.home__button', { opacity: 0, duration: 1, delay: 2.1, y: 30 })
gsap.from('.home__img', { opacity: 0, duration: 1, delay: 1.3, y: 30 })*/

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1200,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.home__description', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__button', { interval: 200 });

/*SCROLL ABOUT*/
/*
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });*/

/*SCROLL SKILLS*/
/*
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', { interval: 200 });
sr.reveal('.skills__img', { delay: 600 });*/

/*SCROLL WORK*/
//sr.reveal('.work__img', { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal('.contact__input', { interval: 200 });
sr.reveal('.contact__button', { interval: 200 });