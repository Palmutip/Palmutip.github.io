//#region  Animações de Scroll e CSS

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    var to = toggleId;
    var na = navId;
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
            nav.style = nav.classList.length == 1 ? "display: none;" : "";
        })
    }
}
showMenu('nav-toggle', 'nav-menu-mobile')

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    const navMenu = document.getElementById('nav-menu-mobile')
    navMenu.classList.remove('show');
    navMenu.style = "display: none;";
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1200,
    reset: true
});

sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });

sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });

sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', { interval: 200 });
sr.reveal('.skills__img', { delay: 600 });

sr.reveal('.work__img', { interval: 200 });

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

//#region Document Ready / Loaded

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        mouseDrag: false,
        touchDrag: false,
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

document.addEventListener('DOMContentLoaded', function () {
    getPageElements();

    toggleButtonMobile.addEventListener('touchend', function(){
        ControlaTema(this);
    });
    toggleButton.addEventListener('click', function(){
        ControlaTema(this);
    });
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

    translate();
});

function getURLParameters() {
    const url = window.location.href;
    const parameters = {};
    if (url.indexOf('?') !== -1) {
        const queryString = url.split('?')[1];
        const pairs = queryString.split('&');
        pairs.forEach(pair => {
            const [key, value] = pair.split('=');
            const decodedValue = decodeURIComponent(value);
            parameters[key] = decodedValue;
        });
    }

    if (parameters["locale"] != null) {

        if (parameters["locale"] == "pt_BR") {
            navPtBr.classList.add('active');
            navEnUs.classList.remove('modal-open');
            navPtBrMobile.classList.add('active');
            navEnUsMobile.classList.remove('modal-open');
        }
        if (parameters["locale"] == "en_US") {
            navEnUs.classList.add('active');
            navPtBr.classList.remove('modal-open');
            navEnUsMobile.classList.add('active');
            navPtBrMobile.classList.remove('modal-open');
        }
    }

    return parameters;
}

function getPageElements(){
    //navLink = document.querySelectorAll('.nav__link');
    //sections = document.querySelectorAll('section[id]');

    navPtBr = document.getElementById('navPtBr');
    navEnUs = document.getElementById('navEnUs');
    navPtBrMobile = document.getElementById('navPtBrMobile');
    navEnUsMobile = document.getElementById('navEnUsMobile');
    LblThemeName = document.getElementById('LblThemeName');
    LblLanguage = document.getElementById('LblLanguage');

    LblHomeTitle = document.getElementById('LblHomeTitle');
    BtnMyCv = document.getElementById('BtnMyCv');
    BtnMyTeam = document.getElementById('BtnMyTeam');
    LblTitleAbout = document.getElementById('LblTitleAbout');
    LblSubtitleAbout = document.getElementById('LblSubtitleAbout');
    LblAboutPart1 = document.getElementById('LblAboutPart1');
    LblAboutPart2 = document.getElementById('LblAboutPart2');
    LblAboutPart3 = document.getElementById('LblAboutPart3');
    LblTitleSkills = document.getElementById('LblTitleSkills');
    LblSkills1 = document.getElementById('LblSkills1');
    LblSkills2 = document.getElementById('LblSkills2');
    LblTitleClients = document.getElementById('LblTitleClients');
    LblSinckDescription = document.getElementById('LblSinckDescription');
    LblJCPaivaDescription = document.getElementById('LblJCPaivaDescription');
    LblDigisulDescription = document.getElementById('LblDigisulDescription');
    LblMysolarDescription = document.getElementById('LblMysolarDescription');
    LblVisaoDescription = document.getElementById('LblVisaoDescription');
    LblCopyRights = document.getElementById('LblCopyRights');
    LblPhone = document.getElementById('LblPhone');

    toggleButton = document.getElementById('toggle-theme');
    toggleButtonMobile = document.getElementById('toggle-theme-Mobile');
    body = document.body;
    header = document.getElementById('header');
    logo = document.getElementById('navLogo');
    home = document.getElementById('navHome');
    sobre = document.getElementById('navSobre');
    competencias = document.getElementById('navCompetencias');
    portfolio = document.getElementById('navPortfolio');
    clientes = document.getElementById('navClientes');
    homeMobile = document.getElementById('navHomeMobile');
    sobreMobile = document.getElementById('navSobreMobile');
    competenciasMobile = document.getElementById('navCompetenciasMobile');
    portfolioMobile = document.getElementById('navPortfolioMobile');
    clientesMobile = document.getElementById('navClientesMobile');
    linkedinHome = document.getElementById('linkedinHome');
    githubHome = document.getElementById('githubHome');
    whatsappHome = document.getElementById('whatsappHome');
    skillNet = document.getElementById('skillNet');
    skillXamarin = document.getElementById('skillXamarin');
    skillCsharp = document.getElementById('skillCsharp');
    skillMySQL = document.getElementById('skillMySQL');
    skillSqlServer = document.getElementById('skillSqlServer');
    skillOracle = document.getElementById('skillOracle');
    skillWp = document.getElementById('skillWp');
    cardVisao = document.getElementById('cardVisao');
    cardSinck = document.getElementById('cardSinck');
    cardJcPaiva = document.getElementById('cardJcPaiva');
    cardDigisul = document.getElementById('cardDigisul');
    cardMySplar = document.getElementById('cardMySplar');
    imgVisao = document.getElementById('imgVisao');
    imgSinck = document.getElementById('imgSinck');
    imgJcPaiva = document.getElementById('imgJcPaiva');

    divCrmBenner = document.getElementById('DivCrmBenner');
    modalcrm = document.getElementById('modal-crm');
    fecharModalcrm = document.getElementById('fechar-modal-crm');
    divJera = document.getElementById('DivJera');
    modaljera = document.getElementById('modal-jera');
    fecharModaljera = document.getElementById('fechar-modal-jera');
    divCentraliza = document.getElementById('DivCentraliza');
    modalcentraliza = document.getElementById('modal-centraliza');
    fecharModalcentraliza = document.getElementById('fechar-modal-centraliza');
}

//#endregion

