//#region  Animações de Scroll e CSS

/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    var to = toggleId;
    var na = navId;
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
    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction)); /**/

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1200,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', { interval: 200 });
sr.reveal('.skills__img', { delay: 600 });

/*SCROLL WORK*/
sr.reveal('.work__img', { interval: 200 });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

//#endregion

//#region Carrossel com owlCarousel e JQuery

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000, // tempo em milissegundos
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      })
      
});

//#endregion

//#region  Funções para abrir modal na seção de portfólio

const divCrmBenner = document.getElementById('DivCrmBenner');
const modalcrm = document.getElementById('modal-crm');
const fecharModalcrm = document.getElementById('fechar-modal-crm');

const divJera = document.getElementById('DivJera');
const modaljera = document.getElementById('modal-jera');
const fecharModaljera= document.getElementById('fechar-modal-jera');

const divCentraliza = document.getElementById('DivCentraliza');
const modalcentraliza = document.getElementById('modal-centraliza');
const fecharModalcentraliza= document.getElementById('fechar-modal-centraliza');

divCrmBenner.addEventListener('click', () => {
    modalcrm.style = "display: flex; justify-content: center;";
});
fecharModalcrm.addEventListener('click', () => {
    modalcrm.style.display = 'none';
});

divJera.addEventListener('click', () => {
    modaljera.style = "display: flex; justify-content: center;";
});
fecharModaljera.addEventListener('click', () => {
    modaljera.style.display = 'none';
});

divCentraliza.addEventListener('click', () => {
    modalcentraliza.style = "display: flex; justify-content: center;";
});
fecharModalcentraliza.addEventListener('click', () => {
    modalcentraliza.style.display = 'none';
});
//#endregion