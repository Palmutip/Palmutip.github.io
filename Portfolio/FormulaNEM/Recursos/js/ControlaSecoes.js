/*
 Esta Página deve conter apenas Eventos vindos das páginas HTML
 
 Ex: _OnClick, _OnChange

 */

//#region Função principal responsável por alternar as telas

function ControlaSecao(Secao) {

    var SecaoInicio = document.getElementById('SecaoInicio');
    var SecaoAlimento = document.getElementById('SecaoAlimento');
    var SecaoDieta = document.getElementById('SecaoDietas');
    var SecaoEspecie = document.getElementById('SecaoEspecies');
    var SecaoAvaliar = document.getElementById('SecaoAvaliar');
    var SecaoFormular = document.getElementById('SecaoFormular');
    var SecaoConfiguracao = document.getElementById('SecaoConfiguracao');

    var BotaoInicio = document.getElementById('BtnInicio');
    var BotaoAlimento = document.getElementById('BtnAlimentos');
    var BotaoDieta = document.getElementById('BtnDietas');
    var BotaoEspecie = document.getElementById('BtnEspecies');
    var BotaoAvaliar = document.getElementById('BtnAvaliar');
    var BotaoFormular = document.getElementById('BtnFormular');
    var BotaoConfiguracao = document.getElementById('BtnConfiguracao');

    SecaoInicio.className = "Esconder";
    SecaoAlimento.className = "Esconder";
    SecaoDieta.className = "Esconder";
    SecaoEspecie.className = "Esconder";
    SecaoAvaliar.className = "Esconder";
    SecaoFormular.className = "Esconder";
    SecaoConfiguracao.className = "Esconder";

    BotaoInicio.className = "DivInicio";
    BotaoAlimento.className = "DivInicio";
    BotaoDieta.className = "DivInicio";
    BotaoEspecie.className = "DivInicio";
    BotaoAvaliar.className = "DivInicio";
    BotaoFormular.className = "DivInicio";
    BotaoConfiguracao.className = "Configuracao";

    switch (Secao) {
        case "Inicio":
            SecaoInicio.className = "SecaoInicio";
            BotaoInicio.className = "DivSelecionado";
            break;
        case "Alimento":
            SecaoAlimento.className = "SecaoAlimento";
            BotaoAlimento.className = "DivSelecionado";
            break;
        case "Dieta":
            SecaoDieta.className = "SecaoDietas";
            BotaoDieta.className = "DivSelecionado";
            break;
        case "Especie":
            SecaoEspecie.className = "SecaoEspecies";
            BotaoEspecie.className = "DivSelecionado";
            break;
        case "Avaliar":
            SecaoAvaliar.className = "SecaoAvaliar";
            BotaoAvaliar.className = "DivSelecionado";
            break;
        case "Formular":
            SecaoFormular.className = "SecaoFormular";
            BotaoFormular.className = "DivSelecionado";
            break;
        case "Configuracao":
            SecaoConfiguracao.className = "SecaoConfiguracao";
            BotaoConfiguracao.className = "DivSelecionado";
            break;
        default:
            break;
    }
}

//#endregion

//#region Menu Lateral

function BtnInicio_OnClick() {
    ControlaSecao("Inicio");
}

function BtnAlimentos_OnClick() {
    ControlaSecao("Alimento");
}

function BtnDietas_OnClick() {
    ControlaSecao("Dieta");
}

function BtnEspecies_OnClick() {
    ControlaSecao("Especie");
}

function BtnAvaliar_OnClick() {
    ControlaSecao("Avaliar");
}

function BtnFormular_OnClick() {
    ControlaSecao("Formular");
}

function BtnConfiguracao_OnClick() {
    ControlaSecao("Configuracao");
}

function BtnSair_OnClick() {
    //document.getElementById('TxtUsuario').value = ""
    //document.getElementById('TxtSenha').value = ""

    localStorage.removeItem('access_token');
    //sessionStorage.removeItem('DadosUsuario');
    window.location.href = "Paginas/login.html";
}

//#endregion

//#region Conteudo da opção Alimentos

function BtnAlimentosMateriaNatural_OnClick(mostrar) {
    var conteudo = document.getElementById('DivAlimentosConteudo');
    var formulario = document.getElementById('DivAlimentosMateriaNatural');

    if (mostrar == true) {
        conteudo.className = "Esconder";
        formulario.className = "DivAlimentosMateriaNatural";
    }
    else {
        conteudo.className = "DivAlimentosConteudo";
        formulario.className = "Esconder";
    }
}

function BtnAlimentosMateriaSeca_OnClick(mostrar) {
    var conteudo = document.getElementById('DivAlimentosConteudo');
    var formulario = document.getElementById('DivAlimentosMateriaSeca');

    if (mostrar == true) {
        conteudo.className = "Esconder";
        formulario.className = "DivAlimentosMateriaSeca";
    }
    else {
        conteudo.className = "DivAlimentosConteudo";
        formulario.className = "Esconder";
    }
}

//#endregion

//#region Funções da página de Login

function Login() {

    var campoEmail = document.getElementById('TxtUsuario')
    var campoSenha = document.getElementById('TxtSenha')

    // pega os valores dos campos
    var email = campoEmail.value
    var senha = campoSenha.value

    FazLogin(email, senha, (retorno) => {
        if (retorno == 200) {

            window.location.href = "../index.html";
            campoEmail.value = '';
            campoSenha.value = '';
        } else {
            document.getElementById('LblRetornoLogin').textContent = "*" + retorno
        }
    })


}

async function FazLogin(email, senha, callback) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json, text/plain")

    var urlencoded = new URLSearchParams();
    urlencoded.append("username", email);
    urlencoded.append("password", senha);
    urlencoded.append("grant_type", "password");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    await fetch(LINK + "/api/token", requestOptions)
        .then(reponse => {
            reponse.json().then(j => {
                switch (reponse.status) {
                    case 200:
                        localStorage.setItem('access_token', j.access_token);
                        callback(200);
                        break;
                    default:
                        callback(j.error)
                        break

                }
            })
        })
}

async function Cadastrar() {
    
    document.getElementById('DivLoguin').className = "DivEsconder";
    document.getElementById('DivCadastro').className = "DivCampo100x1002";

    let campoEmail = document.getElementById('TxtUsuarioCadastro')
    let campoSenha = document.getElementById('TxtSenhaCadastro')
    let confirma = document.getElementById('TxtConfirmarSenha')

    // pega os valores dos campos
    let nome = campoEmail.value
    let sobrenome = campoEmail.value
    let nascimento = "";
    let telefone = "";
    let rg = "";
    let cpf = "";
    let estadoCivil = "";
    let genero = "";
    let email = campoEmail.value
    let senha = campoSenha.value

    // dados de cadastro
    let data = {
        "nome": nome,
        "sobrenome": sobrenome,
        "dtNascimento": nascimento,
        "telefone": telefone,
        "rg": rg,
        "cpf": cpf,
        "sexo": genero,
        "estadoCivil": estadoCivil,
        "email": email,
        "senha": senha,
    }

    //#endregion

    if (ValidaSenha() && ValidaSenhaIgual()) {
        let req = await fetch('http://palmutip.com.br:7506/api/Public/CADASTRA_NOVO_USUARIO', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, /',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(data => {
            if (data.status == 200) {

                FazLogin(email, senha, (retorno) => {
                    if (retorno == 200) {
                        window.location.href = "../index.html";
                    }
                    else {
                        mostraLogin();
                    }
                })

            } else if (data.status == 400) {
                data.json().then(j => {
                    document.getElementById('retornoCadastro').textContent = "*" + j.message
                })
            }

            //return res.json()
        })

    }


}

function mostraLogin(){
    document.getElementById('DivLoguin').className = "DivCampo100x1002";
    document.getElementById('DivCadastro').className = "DivEsconder";
}

function mostraCadastro(){
    document.getElementById('DivLoguin').className = "DivEsconder";
    document.getElementById('DivCadastro').className = "DivCampo100x1002";
}

function ValidaSenha() {

    let senha = document.getElementById('TxtSenhaCadastro')
    //let confirmaSenha = document.getElementById('TxtConfirmarSenha')

    //let DivRet = document.getElementById('DivRet')
    //let retonroCadastroSenha = document.getElementById('retornoCadastroSenha')

    let mensagem = null

    let regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;
    //DivRet.style.display = 'none';

    if (senha.value.length < 7) {
        mensagem = "* Sua senha deve conter no mínimo 8 digitos!";
        //DivRet.style.display = 'block';
        //retonroCadastroSenha.textContent = mensagem;
        return false
    } else if (!regex.exec(senha.value)) {
        mensagem = "* A senha deve conter no mínimo 1 caracteres em maiúsculo, 1 número e 1 caractere especial!";
        //DivRet.style.display = 'block';
        //retonroCadastroSenha.textContent = mensagem;
        return false
    }
    return true
}

function ValidaSenhaIgual() {
    let senha = document.getElementById('TxtSenhaCadastro')
    let confirmaSenha = document.getElementById('TxtConfirmarSenha')
    //let retonroCadastroSenha = document.getElementById('retornoCadastroSenha')

    if (senha.value === confirmaSenha.value) {

        //DivRet.style.display = 'none';
        return true

    } else {

        //DivRet.style.display = 'block';
        //retonroCadastroSenha.textContent = "* Senhas não conferem";
        return false
    }
}

//#endregion