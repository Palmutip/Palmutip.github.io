var toggleButton = document.getElementById('toggle-theme');
var toggleButtonMobile = document.getElementById('toggle-theme-Mobile');
var body = document.body;
var header = document.getElementById('header');
var logo = document.getElementById('navLogo');
var home = document.getElementById('navHome');
var sobre = document.getElementById('navSobre');
var competencias = document.getElementById('navCompetencias');
var portfolio = document.getElementById('navPortfolio');
var clientes = document.getElementById('navClientes');
var homeMobile = document.getElementById('navHomeMobile');
var sobreMobile = document.getElementById('navSobreMobile');
var competenciasMobile = document.getElementById('navCompetenciasMobile');
var portfolioMobile = document.getElementById('navPortfolioMobile');
var clientesMobile = document.getElementById('navClientesMobile');
var linkedinHome = document.getElementById('linkedinHome');
var githubHome = document.getElementById('githubHome');
var globeHome = document.getElementById('globeHome');
var whatsappHome = document.getElementById('whatsappHome');
var skillNet = document.getElementById('skillNet');
var skillXamarin = document.getElementById('skillXamarin');
var skillCsharp = document.getElementById('skillCsharp');
var skillMySQL = document.getElementById('skillMySQL');
var skillSqlServer = document.getElementById('skillSqlServer');
var skillOracle = document.getElementById('skillOracle');
var skillWp = document.getElementById('skillWp');
var cardVisao = document.getElementById('cardVisao');
var cardSinck = document.getElementById('cardSinck');
var cardJcPaiva = document.getElementById('cardJcPaiva');
var cardDigisul = document.getElementById('cardDigisul');
var cardMySplar = document.getElementById('cardMySplar');
var imgVisao = document.getElementById('imgVisao');
var imgSinck = document.getElementById('imgSinck');
var imgJcPaiva = document.getElementById('imgJcPaiva');

function ControlaTema(elemento) {
    if (cardVisao.classList.contains('dark-mode'))
        imgVisao.src = "assets/img/visao360B.png";
    else
        imgVisao.src = "assets/img/visao360W.png";

    if (cardSinck.classList.contains('dark-mode'))
        imgSinck.src = "assets/img/sinck.png";
    else
        imgSinck.src = "assets/img/sinckW.png";

    if (cardJcPaiva.classList.contains('dark-mode'))
        imgJcPaiva.src = "assets/img/jcpaiva.png";
    else
        imgJcPaiva.src = "assets/img/jcpaivaW.png";

    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    logo.classList.toggle('dark-mode');

    home.classList.toggle('dark-mode');
    sobre.classList.toggle('dark-mode');
    competencias.classList.toggle('dark-mode');
    portfolio.classList.toggle('dark-mode');
    clientes.classList.toggle('dark-mode');
    navPtBr.classList.toggle('dark-mode');
    navEnUs.classList.toggle('dark-mode');

    homeMobile.classList.toggle('dark-mode');
    sobreMobile.classList.toggle('dark-mode');
    competenciasMobile.classList.toggle('dark-mode');
    portfolioMobile.classList.toggle('dark-mode');
    clientesMobile.classList.toggle('dark-mode');
    navPtBrMobile.classList.toggle('dark-mode');
    navEnUsMobile.classList.toggle('dark-mode');

    linkedinHome.classList.toggle('dark-mode');
    githubHome.classList.toggle('dark-mode');
    globeHome.classList.toggle('dark-mode');
    whatsappHome.classList.toggle('dark-mode');
    skillCsharp.classList.toggle('dark-mode');
    skillNet.classList.toggle('dark-mode');
    skillXamarin.classList.toggle('dark-mode');
    skillMySQL.classList.toggle('dark-mode');
    skillSqlServer.classList.toggle('dark-mode');
    skillOracle.classList.toggle('dark-mode');
    skillWp.classList.toggle('dark-mode');
    cardVisao.classList.toggle('dark-mode');
    cardSinck.classList.toggle('dark-mode');
    cardJcPaiva.classList.toggle('dark-mode');
    cardDigisul.classList.toggle('dark-mode');
    cardMySplar.classList.toggle('dark-mode');

    toggleButton.checked = elemento.checked;
    toggleButtonMobile.checked = elemento.checked;

    if(LblThemeName.innerHTML.substring(0,2) == 'Th'){
        LblThemeName.innerHTML= toggleButton.checked ? 'Theme: Light' : 'Theme: Dark';
    } 
    else{
        LblThemeName.innerHTML= toggleButton.checked ? 'Tema: Claro' : 'Tema: Escuro';
    }
}