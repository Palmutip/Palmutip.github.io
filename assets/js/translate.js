var navPtBr = document.getElementById('navPtBr');
var navEnUs = document.getElementById('navEnUs');
var navPtBrMobile = document.getElementById('navPtBrMobile');
var navEnUsMobile = document.getElementById('navEnUsMobile');
var LblLanguage = document.getElementById('LblLanguage');
var LblThemeName = document.getElementById('LblThemeName');

var LblHomeTitle = document.getElementById('LblHomeTitle');
var BtnMyCv = document.getElementById('BtnMyCv');
var BtnMyTeam = document.getElementById('BtnMyTeam');

var LblTitleAbout = document.getElementById('LblTitleAbout');
var LblSubtitleAbout = document.getElementById('LblSubtitleAbout');
var LblAboutPart1 = document.getElementById('LblAboutPart1');
var LblAboutPart2 = document.getElementById('LblAboutPart2');
var LblAboutPart3 = document.getElementById('LblAboutPart3');

var LblTitleSkills = document.getElementById('LblTitleSkills');
var LblSkills1 = document.getElementById('LblSkills1');
var LblSkills2 = document.getElementById('LblSkills2');

var LblTitleClients = document.getElementById('LblTitleClients');

var LblSinckDescription = document.getElementById('LblSinckDescription');
var LblJCPaivaDescription = document.getElementById('LblJCPaivaDescription');
var LblDigisulDescription = document.getElementById('LblDigisulDescription');
var LblMysolarDescription = document.getElementById('LblMysolarDescription');
var LblVisaoDescription = document.getElementById('LblVisaoDescription');

var LblCopyRights = document.getElementById('LblCopyRights');
var LblPhone = document.getElementById('LblPhone');

function translate(){
    var params = getURLParameters();
    if(params['locale'] == "pt_BR"){

        LblLanguage.innerHTML = 'Idioma';
        LblThemeName.innerHTML = toggleButton.checked ? 'Tema: Claro' : 'Tema: Escuro';
        LblHomeTitle.innerHTML = 'Olá,<br>Eu sou <span class="home__title-color">Pedro Palmuti</span><br> Desenvolvedor Back-end'
        sobre.innerHTML = "Sobre";
        competencias.innerHTML = 'Competências';
        clientes.innerHTML = 'Clientes';

        BtnMyCv.innerHTML = 'Currículo';
        BtnMyCv.setAttribute('href', './assets/documents/Currículo - Pedro H. P. Freitas 2024.pdf');
        BtnMyCv.setAttribute('download', './assets/documents/Currículo - Pedro H. P. Freitas 2024.pdf');
        BtnMyTeam.innerHTML = 'Meu Time';

        LblTitleAbout.innerHTML = "Sobre";
        LblSubtitleAbout.innerHTML = "Eu sou Pedro Palmuti";
        LblAboutPart1.innerHTML = "Há 5 anos atuando como desenvolvedor back-end com a linguagem C# e a plataforma .NET.&#32;Ampla experiência em desenvolvimento e manutenção de sistemas para aplicações web, desktop e mobile.";
        LblAboutPart2.innerHTML = "Bacharel em Ciência da Computação no UNIS/MG-Varginha em 2021 e MBA em Gestão Estratégica de Projetos e Metodologias Ágeis.";
        LblAboutPart3.innerHTML = "Entusiasta da programação, sempre em busca das últimas tendências e tecnologias. O compromisso com o aprendizado contínuo e desenvolvimento profissional me mantém constantemente atualizado e pronto para enfrentar novos desafios.";
        
        LblTitleSkills.innerHTML = "Competências";
        LblSkills1.innerHTML = "Linguagens de Programação";
        LblSkills2.innerHTML = "Banco de Dados";

        LblTitleClients.innerHTML = "Clientes";
        LblSinckDescription.innerHTML = "Desenvolvimento de sistema CRM através do Benner Framework";
        LblJCPaivaDescription.innerHTML = "Desenvolvimento de Software contábil customizado sob medida";
        LblDigisulDescription.innerHTML = "Desenvolvimento back-end de um sistema WMS com API SOAP";
        LblMysolarDescription.innerHTML = "Desenvolvimento de sistema CRM com Windows Forms";
        LblVisaoDescription.innerHTML = "Desenvolvimento de sites institucionais com Wordpress";

        LblPhone.innerHTML = "Celular : +55 (35) 99250-7665";
        LblCopyRights.innerHTML = "&#169; 2021 copyright todos os direitos reservados";
    }
    else if(params['locale'] == "en_US"){
        LblLanguage.innerHTML = 'Language';
        LblThemeName.innerHTML = toggleButton.checked ? 'Theme: Light' : 'Theme: Dark';
        LblHomeTitle.innerHTML = 'Hi,<br>I am <span class="home__title-color">Pedro Palmuti</span><br> Back-end Developer'
        sobre.innerHTML = "About";
        competencias.innerHTML = 'Skills';
        clientes.innerHTML = 'Clients';
        BtnMyCv.innerHTML = 'My Resume';
        BtnMyCv.setAttribute('href', './assets/documents/Curriculum - Pedro H. P. Freitas 2024.pdf');
        BtnMyCv.setAttribute('download', './assets/documents/Curriculum - Pedro H. P. Freitas 2024.pdf');
        BtnMyTeam.innerHTML = 'My Team';
        LblTitleAbout.innerHTML = "About";
        LblSubtitleAbout.innerHTML = "I am Pedro Palmuti";
        LblAboutPart1.innerHTML = "For 5 years working as a back-end developer using the C# language and the .NET platform. Extensive experience in developing and maintaining systems for web, desktop and mobile applications.";
        LblAboutPart2.innerHTML = "Bachelor in Computer Science at UNIS/MG-Varginha in 2021 and MBA in Strategic Project Management and Agile Methodologies.";
        LblAboutPart3.innerHTML = "Programming enthusiast, always looking for the latest trends and technologies. The commitment to continuous learning and professional development keeps me constantly updated and ready to face new challenges.";

        LblTitleSkills.innerHTML = "Skills";
        LblSkills1.innerHTML = "Programming languages";
        LblSkills2.innerHTML = "Databases";

        LblTitleClients.innerHTML = "Clients";
        LblSinckDescription.innerHTML = "Development of CRM system through Benner Framework";
        LblJCPaivaDescription.innerHTML = "Development of customized accounting software";
        LblDigisulDescription.innerHTML = "Back-end development of a WMS system with SOAP API";
        LblMysolarDescription.innerHTML = "Development of CRM system with Windows Forms";
        LblVisaoDescription.innerHTML = "Development of institutional websites with Wordpress";

        LblPhone.innerHTML = "Phone : +55 (35) 99250-7665";
        LblCopyRights.innerHTML = "&#169; 2021 copyright all rights reserved";
    }
}

