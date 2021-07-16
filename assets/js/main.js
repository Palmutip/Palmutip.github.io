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

/*SCROLL CONTACT*/
sr.reveal('.contact__input', { interval: 200 });



// Exemplo de requisição GET
var ajax = new XMLHttpRequest();

// Seta tipo de requisição e URL com os parâmetros
ajax.open("GET", "https://jsonplaceholder.typicode.com/todos/", true);

// Envia a requisição
ajax.send();

// Cria um evento para receber o retorno.
ajax.onreadystatechange = function() {
    // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
    if (ajax.readyState == 4 && ajax.status == 200) {
        var data = ajax.responseText;
        var objeto = JSON.parse(data);

        // Retorno do Ajax
        //console.log(objeto);

        let i = 0;
        while (objeto.length > i) {
            for (let [key, value] of Object.entries(objeto[i])) {
                if (key == "completed" && value == true) {
                    console.log(objeto[i]);
                }

            }
            i++;
        }
    }
}