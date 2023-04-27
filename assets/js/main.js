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

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

//#endregion

//#region Carrossel com owlCarousel e JQuery

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        mouseDrag: false,
        touchDrag: false,
        /*autoplay: true,
        autoplayTimeout: 5000,*/ // tempo em milissegundos
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
const fecharModaljera = document.getElementById('fechar-modal-jera');

const divCentraliza = document.getElementById('DivCentraliza');
const modalcentraliza = document.getElementById('modal-centraliza');
const fecharModalcentraliza = document.getElementById('fechar-modal-centraliza');

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

//#region Alterar o Tema da página

const toggleButton = document.getElementById('toggle-theme');
const body = document.body;
const header = document.getElementById('header');
const logo = document.getElementById('navLogo');
const home = document.getElementById('navHome');
const sobre = document.getElementById('navSobre');
const competencias = document.getElementById('navCompetencias');
const portfolio = document.getElementById('navPortfolio');
const clientes = document.getElementById('navClientes');
const linkedinHome = document.getElementById('linkedinHome');
const githubHome = document.getElementById('githubHome');
const whatsappHome = document.getElementById('whatsappHome');
const skillNet = document.getElementById('skillNet');
const skillApi = document.getElementById('skillApi');
const skillAsp = document.getElementById('skillAsp');
const skillXamarin = document.getElementById('skillXamarin');
const skillCsharp = document.getElementById('skillCsharp');
const skillMySQL = document.getElementById('skillMySQL');
const skillSqlServer = document.getElementById('skillSqlServer');
const skillOracle = document.getElementById('skillOracle');
const skillWeb = document.getElementById('skillWeb');
const skillWp = document.getElementById('skillWp');
const cardVisao = document.getElementById('cardVisao');
const cardSinck = document.getElementById('cardSinck');
const cardJcPaiva = document.getElementById('cardJcPaiva');
const cardDigisul = document.getElementById('cardDigisul');
const cardMySplar = document.getElementById('cardMySplar');
const imgVisao = document.getElementById('imgVisao');
const imgSinck = document.getElementById('imgSinck');
const imgJcPaiva = document.getElementById('imgJcPaiva');

toggleButton.addEventListener('click', function () {

    if (cardVisao.classList.contains('dark-mode')) {
        imgVisao.src = "assets/img/visao360B.png"; // se tiver a classe, troca a imagem
    } else {
        imgVisao.src = "assets/img/visao360W.png"; // se não tiver a classe, volta a imagem original
    }
    if (cardSinck.classList.contains('dark-mode')) {
        imgSinck.src = "assets/img/sinck.png"; 
    } else {
        imgSinck.src = "assets/img/sinckW.png"; 
    }
    if (cardJcPaiva.classList.contains('dark-mode')) {
        imgJcPaiva.src = "assets/img/jcpaiva.png"; // se tiver a classe, troca a imagem
    } else {
        imgJcPaiva.src = "assets/img/jcpaivaW.png"; // se não tiver a classe, volta a imagem original
    }

    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    logo.classList.toggle('dark-mode');
    home.classList.toggle('dark-mode');
    sobre.classList.toggle('dark-mode');
    competencias.classList.toggle('dark-mode');
    portfolio.classList.toggle('dark-mode');
    clientes.classList.toggle('dark-mode');
    linkedinHome.classList.toggle('dark-mode');
    githubHome.classList.toggle('dark-mode');
    whatsappHome.classList.toggle('dark-mode');
    skillCsharp.classList.toggle('dark-mode');
    skillNet.classList.toggle('dark-mode');
    skillApi.classList.toggle('dark-mode');
    skillAsp.classList.toggle('dark-mode');
    skillXamarin.classList.toggle('dark-mode');
    skillMySQL.classList.toggle('dark-mode');
    skillSqlServer.classList.toggle('dark-mode');
    skillOracle.classList.toggle('dark-mode');
    skillWeb.classList.toggle('dark-mode');
    skillWp.classList.toggle('dark-mode');
    cardVisao.classList.toggle('dark-mode');
    cardSinck.classList.toggle('dark-mode');
    cardJcPaiva.classList.toggle('dark-mode');
    cardDigisul.classList.toggle('dark-mode');
    cardMySplar.classList.toggle('dark-mode');
});

//#endregion