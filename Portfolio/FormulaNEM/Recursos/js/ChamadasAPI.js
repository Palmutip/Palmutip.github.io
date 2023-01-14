//#region Construtor do LINK

var LINK = "http://palmutip.com.br:7506";

function Link() {
    return LINK;
}

//#endregion

//#region Funcoes Alimentos MN

//Método responsavel por preencher a variavel do tipo Lista contendo todos os alimentos na Matéria Natural.
async function GetAlimentosMateriaNatural(ControleSelect) {
    var myHeaders = new Headers();
    /*myHeaders.append("Authorization", "Bearer 65stXXFv1HgOy_HMzs2AK14O_rouexfTlpq09B3L6fa73fEnQideks-sZS8fTmtoFzyfhBvDL3HWiQQE58LaM0gpNO9_3IYsF_sK1pi3p-eRfh2lIRzlVizBPSqMyn17nQNtNioM8NhGoYy7A5flyfw_M-NBuiBK8fsnsG2z4lFEuxV0ZUl1Hwnu_HXyKE0qqX7pmEwZ6nR1z23OTSDhN3Sq3zSsrk0-OuDb3owZCdudkinKxfIrU44X9f1HVHTtS8VyhmfYP6sWeN0_wORkTKEyMZllgaYIV-AgCm-TZZJYUQrleNUM2kFbgl_O4hou");*/

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    await fetch("http://palmutip.com.br:7506/api/Nutricao/GET_ALIMENTOSMN", requestOptions)
        .then(response => response.text())
        .then(result => {
            var retorno = JSON.parse(result);
            var count = 0;
            var dados = JSON.parse(retorno.dados);

            while (dados.length > count) { // Enquanto o tamanho do Array do JSON Alimentos Matéria Natural for maior que o terceiro contador
                option2 = document.createElement("option"); // Irá criar um novo <option> (<option> significa um novo valor dentro da lista do <select>)
                option2.value = count + 1; // Insere o atributo 'value' para o <option> recém criado. Sendo ele igual ao (terceiro contador + 1)
                option2.text = dados[count].alimento; // Insere o atributo 'text' para o <option> recém criado. Sendo ele o valor do campo "Alimento" de acordo com o contador do JSON
                ControleSelect.add(option2);

                alimentosmn.push(dados[count]);

                count++; // Atribui mais um no terceiro contador para seguir a lógica
            }
        })
        .catch(error => console.log('error', error));
}

//Método de consulta na API
async function BtnGETnut_AlimentosMN_OnClick() {

    //Método responsável por desabilitar as Inputs do formulário de nutrientes da Materia Natural
    BtnCancelarAcaoMN_OnClick();

    document.getElementById("BtnCancelarAcao").style = "display: inline-block;;";
    document.getElementById("BtnSAVnut_AlimentosMN").style = "display: inline-block;";
    document.getElementById("BtnDELnut_AlimentosMN").style = "display: inline-block;";
    document.getElementById("BtnGETnut_CadastrarAlimento").style = "display: none;";
    document.getElementById("BtnGETnut_AlimentosMN").style = "display: none;";
    document.getElementById("TxtSAVnut_AlimentosMN").innerHTML = "Atualizar";
    document.getElementById("TxtDELnut_AlimentosMN").innerHTML = "Deletar";

    //Variável para armazenar a quantidade de filtros que serão passados para a API
    var qtdfiltro = 0;

    //Recebe o campo do formulário HTML
    var TxtHandle = document.getElementById('TxtHandle');
    var Txtalimento = document.getElementById('Txtalimento');
    var Txtenergia = document.getElementById('Txtenergia');
    var Txtumidade = document.getElementById('Txtumidade');
    var Txtmateriaseca = document.getElementById('Txtmateriaseca');
    var Txtproteinabruta = document.getElementById('Txtproteinabruta');
    var Txtextratoetereo = document.getElementById('Txtextratoetereo');
    var Txtac_linoleico6 = document.getElementById('Txtac_linoleico6');
    var Txtmateriamineral = document.getElementById('Txtmateriamineral');
    var Txtcalcio = document.getElementById('Txtcalcio');
    var Txtfosforo = document.getElementById('Txtfosforo');
    var Txtpotassio = document.getElementById('Txtpotassio');
    var Txtmagnesio = document.getElementById('Txtmagnesio');
    var Txtcobre = document.getElementById('Txtcobre');
    var Txtferro = document.getElementById('Txtferro');
    var Txtmanganes = document.getElementById('Txtmanganes');
    var Txtzinco = document.getElementById('Txtzinco');
    var Txtcarboidratos = document.getElementById('Txtcarboidratos');
    var Txtfibrabruta = document.getElementById('Txtfibrabruta');
    var Txtenn = document.getElementById('Txtenn');
    var Txtriboflavina = document.getElementById('Txtriboflavina');
    var Txtvit_c = document.getElementById('Txtvit_c');
    var Txttiamina = document.getElementById('Txttiamina');
    var Txtselenio = document.getElementById('Txtselenio');
    var Txtvita = document.getElementById('Txtvita');
    var Txtvite = document.getElementById('Txtvite');
    var Txtvit_b6 = document.getElementById('Txtvit_b6');
    var Txtac_folico = document.getElementById('Txtac_folico');
    var Txtsodio = document.getElementById('Txtsodio');
    var Txthis = document.getElementById('Txthis');
    var Txtiso = document.getElementById('Txtiso');
    var Txtleu = document.getElementById('Txtleu');
    var Txtlis = document.getElementById('Txtlis');
    var Txtmet = document.getElementById('Txtmet');
    var Txtfen = document.getElementById('Txtfen');
    var Txttreo = document.getElementById('Txttreo');
    var Txttri = document.getElementById('Txttri');
    var Txtval = document.getElementById('Txtval');
    var Txtac_araquidonico = document.getElementById('Txtac_araquidonico');
    var Txtac_pantotenico = document.getElementById('Txtac_pantotenico');
    var Txtniacina = document.getElementById('Txtniacina');
    var Txtcolina = document.getElementById('Txtcolina');
    var Txtiodo = document.getElementById('Txtiodo');
    var Txttau = document.getElementById('Txttau');
    var Txtenxofre = document.getElementById('Txtenxofre');
    var Txtvitd = document.getElementById('Txtvitd');
    var Txtvit_b12 = document.getElementById('Txtvit_b12');
    var Txtbiotina = document.getElementById('Txtbiotina');
    var Txtarg = document.getElementById('Txtarg');
    var Txtac_linolenico3 = document.getElementById('Txtac_linolenico3');
    var Txtepa_dha = document.getElementById('Txtepa_dha');
    var Txtfdn = document.getElementById('Txtfdn');
    var Txtfda = document.getElementById('Txtfda');
    var Txtcnf = document.getElementById('Txtcnf');
    var Txtvit_k = document.getElementById('Txtvit_k');
    var Txtcloro = document.getElementById('Txtcloro');
    var Txtmet_cis = document.getElementById('Txtmet_cis');
    var Txtfen_tir = document.getElementById('Txtfen_tir');
    var Txtfiltro = document.getElementById('Txtfiltro');
    var cmbnutriente = document.getElementById('CmbNutrientes');

    //Nova variável para receber os valores dos campos
    var filtro = Txtfiltro.value;
    var nutriente = cmbnutriente.value;

    //Cria uma Hash para armazenar os valores que foram passados como filtro
    const ht = new Map();

    //Verifica se a variavel atual foi preenchida no formulário, para ser passada como filtro na consulta da API
    if (filtro != "") {
        switch (nutriente) {
            case "0":
                //Se o campo foi preenchido, ele armazena esse valor na HashTable para facilitar sua referencia nos próximos procedimentos
                ht.set(filtro, "handle");
                //Por fim atribui mais um na quantidade de filtros
                qtdfiltro += 1;
                break;
            case "1":
                ht.set(filtro, "alimento");
                qtdfiltro += 1;
                break;
            case "2":
                ht.set(filtro, "energia");
                qtdfiltro += 1;
                break;
            case "3":
                ht.set(filtro, "umidade");
                qtdfiltro += 1;
                break;
            case "4":
                ht.set(filtro, "materiaseca");
                qtdfiltro += 1;
                break;
        }
    }

    //Variável para armazenar a URL da API
    var url = "http://palmutip.com.br:7506/api/Nutricao/GET_Alimentosmn";

    //Impõe a condição de ter siddo passado ao menos um filtro de busca
    if (qtdfiltro > 0) {

        //Inicializando um contador para percorrer cada filtro
        var contador = 0;

        //Laço de repetição para percorrer todos os filtros
        for (let [key, value] of ht) {
            //Condição para quando for o primeiro filtro aplicado
            if (contador == 0) {
                //Passa o primeiro filtro como parametro de busca
                url = url + "?filtro=" + `${value}` + "%3D" + `${key}`;
            }
            //Quando for aplicado do segundo filtro em diante
            else {
                //Adiciona novos filtros na medida que vao aparecendo
                url += "%3B" + `${value}` + "%3D" + `${key}`;
            }

            //Soma mais um no contador para ele nao colocar o texto do primeiro filtro novamente
            contador++;
        }
    }

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 65stXXFv1HgOy_HMzs2AK14O_rouexfTlpq09B3L6fa73fEnQideks-sZS8fTmtoFzyfhBvDL3HWiQQE58LaM0gpNO9_3IYsF_sK1pi3p-eRfh2lIRzlVizBPSqMyn17nQNtNioM8NhGoYy7A5flyfw_M-NBuiBK8fsnsG2z4lFEuxV0ZUl1Hwnu_HXyKE0qqX7pmEwZ6nR1z23OTSDhN3Sq3zSsrk0-OuDb3owZCdudkinKxfIrU44X9f1HVHTtS8VyhmfYP6sWeN0_wORkTKEyMZllgaYIV-AgCm-TZZJYUQrleNUM2kFbgl_O4hou");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    var response = await fetch(url, requestOptions)
        .then(res => res.json());//Otendo o retorno da API. (Esse JSON que será atribuido a variavel "response")

    //Verificando se O campo "Dados" do JSON de retorno possui alguma informação ou se é nulo
    if (null == response.dados) {
        window.alert("Dados Não encontrados!");
    }
    //Se for encontrada alguma informação com os parametros inseridos, ele irá retornar o JSON de "Dados"
    else {
        //Declara uma variavel para susbtituir o conteudo da ultima TAG HTML gerada 
        //var OutputDTO = document.getElementById('LblOutputDTODados');

        //Substitui o conteudo interno da TAG Span id="LblOutputDTODados" pelos dados retornados pela API
        //OutputDTO.innerText = response.dados;
        var resultado = JSON.parse(response.dados);
        Txtenergia.value = resultado[0].energia;
        Txtumidade.value = resultado[0].umidade;
        Txtmateriaseca.value = resultado[0].materiaseca;
        Txtproteinabruta.value = resultado[0].proteinabruta;
        Txtextratoetereo.value = resultado[0].extratoetereo;
        Txtac_linoleico6.value = resultado[0].ac_linoleico6;
        Txtmateriamineral.value = resultado[0].materiamineral;
        Txtcalcio.value = resultado[0].calcio;
        Txtfosforo.value = resultado[0].fosforo;
        Txtfibrabruta.value = resultado[0].fibrabruta;
        Txtriboflavina.value = resultado[0].riboflavina;
        Txtfen_tir.value = resultado[0].fen_tir;
        Txtvit_k.value = resultado[0].vit_k;
        Txtleu.value = resultado[0].leu;
        Txtlis.value = resultado[0].lis;
        Txtmet.value = resultado[0].met;
        Txtfen.value = resultado[0].fen;
        Txttreo.value = resultado[0].treo;
        Txtval.value = resultado[0].val;
        Txtac_araquidonico.value = resultado[0].ac_araquidonico;
        Txtac_pantotenico.value = resultado[0].ac_pantotenico;
        Txtniacina.value = resultado[0].niacina;
        Txtvit_c.value = resultado[0].vit_c;
        Txttiamina.value = resultado[0].tiamina;
        Txtselenio.value = resultado[0].selenio;
        Txtmet_cis.value = resultado[0].met_cis;
        Txtcloro.value = resultado[0].cloro;
        Txtmanganes.value = resultado[0].manganes;
        Txtzinco.value = resultado[0].zinco;
        Txtvitd.value = resultado[0].vitd;
        Txtvit_b12.value = resultado[0].vit_b12;
        Txtbiotina.value = resultado[0].biotina;
        Txtarg.value = resultado[0].arg;
        Txtac_linolenico3.value = resultado[0].ac_linolenico3;
        Txtepa_dha.value = resultado[0].epa_dha;
        Txtfdn.value = resultado[0].fdn;
        Txtfda.value = resultado[0].fda;
        Txtvita.value = resultado[0].vita;
        Txtvite.value = resultado[0].vite;
        Txtvit_b6.value = resultado[0].vit_b6;
        Txtac_folico.value = resultado[0].ac_folico;
        Txtsodio.value = resultado[0].sodio;
        Txtcolina.value = resultado[0].colina;
        Txtiodo.value = resultado[0].iodo;
        Txttau.value = resultado[0].tau;
        Txtenxofre.value = resultado[0].enxofre;
        Txtpotassio.value = resultado[0].potassio;
        Txtmagnesio.value = resultado[0].magnesio;
        Txtcobre.value = resultado[0].cobre;
        Txtferro.value = resultado[0].ferro;
        Txtcnf.value = resultado[0].cnf;
        Txtcarboidratos.value = resultado[0].carboidratos;
        Txthis.value = resultado[0].his;
        Txtiso.value = resultado[0].iso;
        Txtalimento.value = resultado[0].alimento;
        TxtHandle.value = resultado[0].handle;
        Txttri.value = resultado[0].tri;
        Txtenn.value = resultado[0].enn;

        LiberarCamposMateriaNatural();
    }
}

//Método de Inclusão/Atualização da API
async function BtnSAVnut_AlimentosMN_OnClick() {
    var Txtalimento = document.getElementById('Txtalimento');

    if (Txtalimento.value != "") {
        //Recebe o campo do formulário HTML
        var TxtHandle = document.getElementById('TxtHandle');
        var Txtenergia = document.getElementById('Txtenergia');
        var Txtumidade = document.getElementById('Txtumidade');
        var Txtmateriaseca = document.getElementById('Txtmateriaseca');
        var Txtproteinabruta = document.getElementById('Txtproteinabruta');
        var Txtextratoetereo = document.getElementById('Txtextratoetereo');
        var Txtac_linoleico6 = document.getElementById('Txtac_linoleico6');
        var Txtmateriamineral = document.getElementById('Txtmateriamineral');
        var Txtcalcio = document.getElementById('Txtcalcio');
        var Txtfosforo = document.getElementById('Txtfosforo');
        var Txtpotassio = document.getElementById('Txtpotassio');
        var Txtmagnesio = document.getElementById('Txtmagnesio');
        var Txtcobre = document.getElementById('Txtcobre');
        var Txtferro = document.getElementById('Txtferro');
        var Txtmanganes = document.getElementById('Txtmanganes');
        var Txtzinco = document.getElementById('Txtzinco');
        var Txtcarboidratos = document.getElementById('Txtcarboidratos');
        var Txtfibrabruta = document.getElementById('Txtfibrabruta');
        var Txtenn = document.getElementById('Txtenn');
        var Txtriboflavina = document.getElementById('Txtriboflavina');
        var Txtvit_c = document.getElementById('Txtvit_c');
        var Txttiamina = document.getElementById('Txttiamina');
        var Txtselenio = document.getElementById('Txtselenio');
        var Txtvita = document.getElementById('Txtvita');
        var Txtvite = document.getElementById('Txtvite');
        var Txtvit_b6 = document.getElementById('Txtvit_b6');
        var Txtac_folico = document.getElementById('Txtac_folico');
        var Txtsodio = document.getElementById('Txtsodio');
        var Txthis = document.getElementById('Txthis');
        var Txtiso = document.getElementById('Txtiso');
        var Txtleu = document.getElementById('Txtleu');
        var Txtlis = document.getElementById('Txtlis');
        var Txtmet = document.getElementById('Txtmet');
        var Txtfen = document.getElementById('Txtfen');
        var Txttreo = document.getElementById('Txttreo');
        var Txttri = document.getElementById('Txttri');
        var Txtval = document.getElementById('Txtval');
        var Txtac_araquidonico = document.getElementById('Txtac_araquidonico');
        var Txtac_pantotenico = document.getElementById('Txtac_pantotenico');
        var Txtniacina = document.getElementById('Txtniacina');
        var Txtcolina = document.getElementById('Txtcolina');
        var Txtiodo = document.getElementById('Txtiodo');
        var Txttau = document.getElementById('Txttau');
        var Txtenxofre = document.getElementById('Txtenxofre');
        var Txtvitd = document.getElementById('Txtvitd');
        var Txtvit_b12 = document.getElementById('Txtvit_b12');
        var Txtbiotina = document.getElementById('Txtbiotina');
        var Txtarg = document.getElementById('Txtarg');
        var Txtac_linolenico3 = document.getElementById('Txtac_linolenico3');
        var Txtepa_dha = document.getElementById('Txtepa_dha');
        var Txtfdn = document.getElementById('Txtfdn');
        var Txtfda = document.getElementById('Txtfda');
        var Txtcnf = document.getElementById('Txtcnf');
        var Txtvit_k = document.getElementById('Txtvit_k');
        var Txtcloro = document.getElementById('Txtcloro');
        var Txtmet_cis = document.getElementById('Txtmet_cis');
        var Txtfen_tir = document.getElementById('Txtfen_tir');

        //Nova variável para receber os valores dos campos
        var handle = TxtHandle.value;
        var alimento = Txtalimento.value;
        var energia = Txtenergia.value;
        var umidade = Txtumidade.value;
        var materiaseca = Txtmateriaseca.value;
        var proteinabruta = Txtproteinabruta.value;
        var extratoetereo = Txtextratoetereo.value;
        var ac_linoleico6 = Txtac_linoleico6.value;
        var materiamineral = Txtmateriamineral.value;
        var calcio = Txtcalcio.value;
        var fosforo = Txtfosforo.value;
        var potassio = Txtpotassio.value;
        var magnesio = Txtmagnesio.value;
        var cobre = Txtcobre.value;
        var ferro = Txtferro.value;
        var manganes = Txtmanganes.value;
        var zinco = Txtzinco.value;
        var carboidratos = Txtcarboidratos.value;
        var fibrabruta = Txtfibrabruta.value;
        var enn = Txtenn.value;
        var riboflavina = Txtriboflavina.value;
        var vit_c = Txtvit_c.value;
        var tiamina = Txttiamina.value;
        var selenio = Txtselenio.value;
        var vita = Txtvita.value;
        var vite = Txtvite.value;
        var vit_b6 = Txtvit_b6.value;
        var ac_folico = Txtac_folico.value;
        var sodio = Txtsodio.value;
        var his = Txthis.value;
        var iso = Txtiso.value;
        var leu = Txtleu.value;
        var lis = Txtlis.value;
        var met = Txtmet.value;
        var fen = Txtfen.value;
        var treo = Txttreo.value;
        var tri = Txttri.value;
        var val = Txtval.value;
        var ac_araquidonico = Txtac_araquidonico.value;
        var ac_pantotenico = Txtac_pantotenico.value;
        var niacina = Txtniacina.value;
        var colina = Txtcolina.value;
        var iodo = Txtiodo.value;
        var tau = Txttau.value;
        var enxofre = Txtenxofre.value;
        var vitd = Txtvitd.value;
        var vit_b12 = Txtvit_b12.value;
        var biotina = Txtbiotina.value;
        var arg = Txtarg.value;
        var ac_linolenico3 = Txtac_linolenico3.value;
        var epa_dha = Txtepa_dha.value;
        var fdn = Txtfdn.value;
        var fda = Txtfda.value;
        var cnf = Txtcnf.value;
        var vit_k = Txtvit_k.value;
        var cloro = Txtcloro.value;
        var met_cis = Txtmet_cis.value;
        var fen_tir = Txtfen_tir.value;

        //funcao Quando o usuario clilcar em Salvar ou Atualizar. O botao Cadastrar Alimento ficar visivel (Botao)
        document.getElementById('BtnGETnut_CadastrarAlimento').style = "display: inline-block;"

        //Se não atribuir um handle significa inclusao de um registro novo
        if (handle === "") {
            handle = 0;
        }

        // Dados de cadastro
        let data = {
            "handle": handle,
            "alimento": alimento,
            "energia": energia,
            "umidade": umidade,
            "materiaseca": materiaseca,
            "proteinabruta": proteinabruta,
            "extratoetereo": extratoetereo,
            "ac_linoleico6": ac_linoleico6,
            "materiamineral": materiamineral,
            "calcio": calcio,
            "fosforo": fosforo,
            "potassio": potassio,
            "magnesio": magnesio,
            "cobre": cobre,
            "ferro": ferro,
            "manganes": manganes,
            "zinco": zinco,
            "carboidratos": carboidratos,
            "fibrabruta": fibrabruta,
            "enn": enn,
            "riboflavina": riboflavina,
            "vit_c": vit_c,
            "tiamina": tiamina,
            "selenio": selenio,
            "vita": vita,
            "vite": vite,
            "vit_b6": vit_b6,
            "ac_folico": ac_folico,
            "sodio": sodio,
            "his": his,
            "iso": iso,
            "leu": leu,
            "lis": lis,
            "met": met,
            "fen": fen,
            "treo": treo,
            "tri": tri,
            "val": val,
            "ac_araquidonico": ac_araquidonico,
            "ac_pantotenico": ac_pantotenico,
            "niacina": niacina,
            "colina": colina,
            "iodo": iodo,
            "tau": tau,
            "enxofre": enxofre,
            "vitd": vitd,
            "vit_b12": vit_b12,
            "biotina": biotina,
            "arg": arg,
            "ac_linolenico3": ac_linolenico3,
            "epa_dha": epa_dha,
            "fdn": fdn,
            "fda": fda,
            "cnf": cnf,
            "vit_k": vit_k,
            "cloro": cloro,
            "met_cis": met_cis,
            "fen_tir": fen_tir
        }

        // Declarando uma variavel para receber os dados retornados da API.
        var response = await fetch('http://palmutip.com.br:7506/api/Nutricao/SAV_Alimentosmn', {
            method: 'POST', //Método de envio de dados ao BD
            headers: {    //Definindo Cabeçalhos no consumo da API
                'Accept': 'application/json, text/plain, /',
                'Content-Type': 'application/json'
            }, body: JSON.stringify(data)
        }).then(res => res.json()); //Otendo o retorno da API. (Esse JSON que será atribuido a variavel "response")

        //console.log(response);

        //Verificando se O campo "mensagem" do JSON de retorno possui a mensagem de Sucesso!
        if ("Registro inserido com sucesso" === response.mensagem) {
            //Declara uma variavel para susbtituir o conteudo da ultima TAG HTML gerada
            var OutputDTO = document.getElementById('LblOutputDTODados');

            //window.alert(response.mensagem);
            toastr.success(response.mensagem);

            //Limpa os dados Recem inseridos
            BtnLimparFormularioMN_OnClick();

            //Substitui o conteudo interno da TAG Span id="LblOutputDTODados" pelos dados retornados pela API
            OutputDTO.innerText = response.dados;
        }
        else {
            //window.alert("Erro ao salvar registro.");
            toastr.error("Erro ao salvar registro.");
        }
    }
    else {
        console.log();
        toastr.error("Obrigatório preencher um nome para o alimento.");
    }
}

//Método de Remoçao da API
async function BtnDELnut_AlimentosMN() {

    //Recebe o campo do formulário HTML
    var TxtHandle = document.getElementById('TxtHandle');

    //funcao Quando o usuario clilcar em Salvar ou Atualizar. O botao Cadastrar Alimento ficar visivel (Botao)
    document.getElementById('BtnGETnut_CadastrarAlimento').style = "display: inline-block;"
    document.getElementById('BtnGETnut_AlimentosMN').style = "display: inline-block;"

    //Nova variável para receber os valores dos campos
    var handle = TxtHandle.value;

    //Se não atribuir um handle, o sistema nao consegue excluir o registro
    if (handle === "") {
        window.alert("Handle não pode estar em branco na exclusão");
    }

    // Dados de cadastro
    let data = {
        "handle": handle
    }

    // Declarando uma variavel para receber os dados retornados da API.
    var response = await fetch('http://palmutip.com.br:7506/api/Nutricao/DEL_Alimentosmn', {
        method: 'POST', //Método de envio de dados ao BD
        headers: {    //Definindo Cabeçalhos no consumo da API
            'Accept': 'application/json, text/plain, /',
            'Content-Type': 'application/json'
        }, body: JSON.stringify(data)
    }).then(res => res.json()); //Otendo o retorno da API. (Esse JSON que será atribuido a variavel "response")

    //Verificando se O campo "mensagem" do JSON de retorno possui a mensagem de Sucesso!
    if ("Registro removido com sucesso" === response.mensagem) {

        window.alert("Registro removido");

        //Limpa os dados Recem inseridos
        BtnLimparFormularioMN_OnClick();
    }
    else {
        window.alert("Erro ao remover registro.");
    }
}

//#endregion

//#region Funcoes Alimentos MS

//Método responsavel por preencher a variavel do tipo Lista contendo todos os alimentos na Matéria Seca.
async function GetAlimentosMateriaSeca() {
    var myHeaders = new Headers();
    /*myHeaders.append("Authorization", "Bearer 65stXXFv1HgOy_HMzs2AK14O_rouexfTlpq09B3L6fa73fEnQideks-sZS8fTmtoFzyfhBvDL3HWiQQE58LaM0gpNO9_3IYsF_sK1pi3p-eRfh2lIRzlVizBPSqMyn17nQNtNioM8NhGoYy7A5flyfw_M-NBuiBK8fsnsG2z4lFEuxV0ZUl1Hwnu_HXyKE0qqX7pmEwZ6nR1z23OTSDhN3Sq3zSsrk0-OuDb3owZCdudkinKxfIrU44X9f1HVHTtS8VyhmfYP6sWeN0_wORkTKEyMZllgaYIV-AgCm-TZZJYUQrleNUM2kFbgl_O4hou");*/

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    await fetch("http://palmutip.com.br:7506/api/Nutricao/GET_ALIMENTOSMS", requestOptions)
        .then(response => response.text())
        .then(result => {
            var retorno = JSON.parse(result);
            var count = 0;
            var dados = JSON.parse(retorno.dados);

            while (dados.length > count) { // Enquanto o tamanho do Array do JSON Alimentos Matéria Natural for maior que o terceiro contador
                alimentosms.push(dados[count]);
                count++; // Atribui mais um no terceiro contador para seguir a lógica
            }
        })
        .catch(error => console.log('error', error));
}

//Método de consulta na API
async function BtnGETnut_alimentosms_OnClick() {
    //Variável para armazenar a quantidade de filtros que serão passados para a API
    var qtdfiltro = 0;

    //Recebe o campo do formulário HTML
    var TxtHandle = document.getElementById('TxtHandle');
    var Txtalimento = document.getElementById('Txtalimento');
    var Txtenergia = document.getElementById('Txtenergia');
    var Txtumidade = document.getElementById('Txtumidade');
    var Txtmateriaseca = document.getElementById('Txtmateriaseca');
    var Txtproteinabruta = document.getElementById('Txtproteinabruta');
    var Txtextratoetereo = document.getElementById('Txtextratoetereo');
    var Txtac_linoleico6 = document.getElementById('Txtac_linoleico6');
    var Txtmateriamineral = document.getElementById('Txtmateriamineral');
    var Txtcalcio = document.getElementById('Txtcalcio');
    var Txtfosforo = document.getElementById('Txtfosforo');
    var Txtpotassio = document.getElementById('Txtpotassio');
    var Txtmagnesio = document.getElementById('Txtmagnesio');
    var Txtcobre = document.getElementById('Txtcobre');
    var Txtferro = document.getElementById('Txtferro');
    var Txtmanganes = document.getElementById('Txtmanganes');
    var Txtzinco = document.getElementById('Txtzinco');
    var Txtcarboidratos = document.getElementById('Txtcarboidratos');
    var Txtfibrabruta = document.getElementById('Txtfibrabruta');
    var Txtenn = document.getElementById('Txtenn');
    var Txtriboflavina = document.getElementById('Txtriboflavina');
    var Txtvit_c = document.getElementById('Txtvit_c');
    var Txttiamina = document.getElementById('Txttiamina');
    var Txtselenio = document.getElementById('Txtselenio');
    var Txtvita = document.getElementById('Txtvita');
    var Txtvite = document.getElementById('Txtvite');
    var Txtvit_b6 = document.getElementById('Txtvit_b6');
    var Txtac_folico = document.getElementById('Txtac_folico');
    var Txtsodio = document.getElementById('Txtsodio');
    var Txthis = document.getElementById('Txthis');
    var Txtiso = document.getElementById('Txtiso');
    var Txtleu = document.getElementById('Txtleu');
    var Txtlis = document.getElementById('Txtlis');
    var Txtmet = document.getElementById('Txtmet');
    var Txtfen = document.getElementById('Txtfen');
    var Txttreo = document.getElementById('Txttreo');
    var Txttri = document.getElementById('Txttri');
    var Txtval = document.getElementById('Txtval');
    var Txtac_araquidonico = document.getElementById('Txtac_araquidonico');
    var Txtac_pantotenico = document.getElementById('Txtac_pantotenico');
    var Txtniacina = document.getElementById('Txtniacina');
    var Txtcolina = document.getElementById('Txtcolina');
    var Txtiodo = document.getElementById('Txtiodo');
    var Txttau = document.getElementById('Txttau');
    var Txtenxofre = document.getElementById('Txtenxofre');
    var Txtvitd = document.getElementById('Txtvitd');
    var Txtvit_b12 = document.getElementById('Txtvit_b12');
    var Txtbiotina = document.getElementById('Txtbiotina');
    var Txtarg = document.getElementById('Txtarg');
    var Txtac_linolenico3 = document.getElementById('Txtac_linolenico3');
    var Txtepa_dha = document.getElementById('Txtepa_dha');
    var Txtfdn = document.getElementById('Txtfdn');
    var Txtfda = document.getElementById('Txtfda');
    var Txtcnf = document.getElementById('Txtcnf');
    var Txtvit_k = document.getElementById('Txtvit_k');
    var Txtcloro = document.getElementById('Txtcloro');
    var Txtmet_cis = document.getElementById('Txtmet_cis');
    var Txtfen_tir = document.getElementById('Txtfen_tir');

    //Nova variável para receber os valores dos campos
    var handle = TxtHandle.value;
    var alimento = Txtalimento.value;
    var energia = Txtenergia.value;
    var umidade = Txtumidade.value;
    var materiaseca = Txtmateriaseca.value;
    var proteinabruta = Txtproteinabruta.value;
    var extratoetereo = Txtextratoetereo.value;
    var ac_linoleico6 = Txtac_linoleico6.value;
    var materiamineral = Txtmateriamineral.value;
    var calcio = Txtcalcio.value;
    var fosforo = Txtfosforo.value;
    var potassio = Txtpotassio.value;
    var magnesio = Txtmagnesio.value;
    var cobre = Txtcobre.value;
    var ferro = Txtferro.value;
    var manganes = Txtmanganes.value;
    var zinco = Txtzinco.value;
    var carboidratos = Txtcarboidratos.value;
    var fibrabruta = Txtfibrabruta.value;
    var enn = Txtenn.value;
    var riboflavina = Txtriboflavina.value;
    var vit_c = Txtvit_c.value;
    var tiamina = Txttiamina.value;
    var selenio = Txtselenio.value;
    var vita = Txtvita.value;
    var vite = Txtvite.value;
    var vit_b6 = Txtvit_b6.value;
    var ac_folico = Txtac_folico.value;
    var sodio = Txtsodio.value;
    var his = Txthis.value;
    var iso = Txtiso.value;
    var leu = Txtleu.value;
    var lis = Txtlis.value;
    var met = Txtmet.value;
    var fen = Txtfen.value;
    var treo = Txttreo.value;
    var tri = Txttri.value;
    var val = Txtval.value;
    var ac_araquidonico = Txtac_araquidonico.value;
    var ac_pantotenico = Txtac_pantotenico.value;
    var niacina = Txtniacina.value;
    var colina = Txtcolina.value;
    var iodo = Txtiodo.value;
    var tau = Txttau.value;
    var enxofre = Txtenxofre.value;
    var vitd = Txtvitd.value;
    var vit_b12 = Txtvit_b12.value;
    var biotina = Txtbiotina.value;
    var arg = Txtarg.value;
    var ac_linolenico3 = Txtac_linolenico3.value;
    var epa_dha = Txtepa_dha.value;
    var fdn = Txtfdn.value;
    var fda = Txtfda.value;
    var cnf = Txtcnf.value;
    var vit_k = Txtvit_k.value;
    var cloro = Txtcloro.value;
    var met_cis = Txtmet_cis.value;
    var fen_tir = Txtfen_tir.value;

    //Cria uma Hash para armazenar os valores que foram passados como filtro
    const ht = new Map();

    //Verifica se a variavel atual foi preenchida no formulário, para ser passada como filtro na consulta da API
    //Se o campo foi preenchido, ele armazena esse valor na HashTable para facilitar sua referencia nos próximos procedimentos
    //Por fim atribui mais um na quantidade de filtros
    if (handle != "") {
        ht.set(handle, "handle");
        qtdfiltro += 1;
    }
    if (alimento != "") {
        ht.set(alimento, "alimento");
        qtdfiltro += 1;
    }
    if (energia != "") {
        ht.set(energia, "energia");
        qtdfiltro += 1;
    }
    if (umidade != "") {
        ht.set(umidade, "umidade");
        qtdfiltro += 1;
    }
    if (materiaseca != "") {
        ht.set(materiaseca, "materiaseca");
        qtdfiltro += 1;
    }
    if (proteinabruta != "") {
        ht.set(proteinabruta, "proteinabruta");
        qtdfiltro += 1;
    }
    if (extratoetereo != "") {
        ht.set(extratoetereo, "extratoetereo");
        qtdfiltro += 1;
    }
    if (ac_linoleico6 != "") {
        ht.set(ac_linoleico6, "ac_linoleico6");
        qtdfiltro += 1;
    }
    if (materiamineral != "") {
        ht.set(materiamineral, "materiamineral");
        qtdfiltro += 1;
    }
    if (calcio != "") {
        ht.set(calcio, "calcio");
        qtdfiltro += 1;
    }
    if (fosforo != "") {
        ht.set(fosforo, "fosforo");
        qtdfiltro += 1;
    }
    if (potassio != "") {
        ht.set(potassio, "potassio");
        qtdfiltro += 1;
    }
    if (magnesio != "") {
        ht.set(magnesio, "magnesio");
        qtdfiltro += 1;
    }
    if (cobre != "") {
        ht.set(cobre, "cobre");
        qtdfiltro += 1;
    }
    if (ferro != "") {
        ht.set(ferro, "ferro");
        qtdfiltro += 1;
    }
    if (manganes != "") {
        ht.set(manganes, "manganes");
        qtdfiltro += 1;
    }
    if (zinco != "") {
        ht.set(zinco, "zinco");
        qtdfiltro += 1;
    }
    if (carboidratos != "") {
        ht.set(carboidratos, "carboidratos");
        qtdfiltro += 1;
    }
    if (fibrabruta != "") {
        ht.set(fibrabruta, "fibrabruta");
        qtdfiltro += 1;
    }
    if (enn != "") {
        ht.set(enn, "enn");
        qtdfiltro += 1;
    }
    if (riboflavina != "") {
        ht.set(riboflavina, "riboflavina");
        qtdfiltro += 1;
    }
    if (vit_c != "") {
        ht.set(vit_c, "vit_c");
        qtdfiltro += 1;
    }
    if (tiamina != "") {
        ht.set(tiamina, "tiamina");
        qtdfiltro += 1;
    }
    if (selenio != "") {
        ht.set(selenio, "selenio");
        qtdfiltro += 1;
    }
    if (vita != "") {
        ht.set(vita, "vita");
        qtdfiltro += 1;
    }
    if (vite != "") {
        ht.set(vite, "vite");
        qtdfiltro += 1;
    }
    if (vit_b6 != "") {
        ht.set(vit_b6, "vit_b6");
        qtdfiltro += 1;
    }
    if (ac_folico != "") {
        ht.set(ac_folico, "ac_folico");
        qtdfiltro += 1;
    }
    if (sodio != "") {
        ht.set(sodio, "sodio");
        qtdfiltro += 1;
    }
    if (his != "") {
        ht.set(his, "his");
        qtdfiltro += 1;
    }
    if (iso != "") {
        ht.set(iso, "iso");
        qtdfiltro += 1;
    }
    if (leu != "") {
        ht.set(leu, "leu");
        qtdfiltro += 1;
    }
    if (lis != "") {
        ht.set(lis, "lis");
        qtdfiltro += 1;
    }
    if (met != "") {
        ht.set(met, "met");
        qtdfiltro += 1;
    }
    if (fen != "") {
        ht.set(fen, "fen");
        qtdfiltro += 1;
    }
    if (treo != "") {
        ht.set(treo, "treo");
        qtdfiltro += 1;
    }
    if (tri != "") {
        ht.set(tri, "tri");
        qtdfiltro += 1;
    }
    if (val != "") {
        ht.set(val, "val");
        qtdfiltro += 1;
    }
    if (ac_araquidonico != "") {
        ht.set(ac_araquidonico, "ac_araquidonico");
        qtdfiltro += 1;
    }
    if (ac_pantotenico != "") {
        ht.set(ac_pantotenico, "ac_pantotenico");
        qtdfiltro += 1;
    }
    if (niacina != "") {
        ht.set(niacina, "niacina");
        qtdfiltro += 1;
    }
    if (colina != "") {
        ht.set(colina, "colina");
        qtdfiltro += 1;
    }
    if (iodo != "") {
        ht.set(iodo, "iodo");
        qtdfiltro += 1;
    }
    if (tau != "") {
        ht.set(tau, "tau");
        qtdfiltro += 1;
    }
    if (enxofre != "") {
        ht.set(enxofre, "enxofre");
        qtdfiltro += 1;
    }
    if (vitd != "") {
        ht.set(vitd, "vitd");
        qtdfiltro += 1;
    }
    if (vit_b12 != "") {
        ht.set(vit_b12, "vit_b12");
        qtdfiltro += 1;
    }
    if (biotina != "") {
        ht.set(biotina, "biotina");
        qtdfiltro += 1;
    }
    if (arg != "") {
        ht.set(arg, "arg");
        qtdfiltro += 1;
    }
    if (ac_linolenico3 != "") {
        ht.set(ac_linolenico3, "ac_linolenico3");
        qtdfiltro += 1;
    }
    if (epa_dha != "") {
        ht.set(epa_dha, "epa_dha");
        qtdfiltro += 1;
    }
    if (fdn != "") {
        ht.set(fdn, "fdn");
        qtdfiltro += 1;
    }
    if (fda != "") {
        ht.set(fda, "fda");
        qtdfiltro += 1;
    }
    if (cnf != "") {
        ht.set(cnf, "cnf");
        qtdfiltro += 1;
    }
    if (vit_k != "") {
        ht.set(vit_k, "vit_k");
        qtdfiltro += 1;
    }
    if (cloro != "") {
        ht.set(cloro, "cloro");
        qtdfiltro += 1;
    }
    if (met_cis != "") {
        ht.set(met_cis, "met_cis");
        qtdfiltro += 1;
    }
    if (fen_tir != "") {
        ht.set(fen_tir, "fen_tir");
        qtdfiltro += 1;
    }

    //Variável para armazenar a URL da API
    var url = "http://palmutip.com.br:7506/api/Nutricao/GET_Alimentosms";

    //Impõe a condição de ter siddo passado ao menos um filtro de busca
    if (qtdfiltro > 0) {

        //Inicializando um contador para percorrer cada filtro
        var contador = 0;

        //Laço de repetição para percorrer todos os filtros
        for (let [key, value] of ht) {
            //Condição para quando for o primeiro filtro aplicado
            if (contador == 0) {
                //Passa o primeiro filtro como parametro de busca
                url = url + "?filtro=" + `${value}` + "%3D" + `${key}`;
            }
            //Quando for aplicado do segundo filtro em diante
            else {
                //Adiciona novos filtros na medida que vao aparecendo
                url += "%3B" + `${value}` + "%3D" + `${key}`;
            }

            //Soma mais um no contador para ele nao colocar o texto do primeiro filtro novamente
            contador++;
        }
    }

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 65stXXFv1HgOy_HMzs2AK14O_rouexfTlpq09B3L6fa73fEnQideks-sZS8fTmtoFzyfhBvDL3HWiQQE58LaM0gpNO9_3IYsF_sK1pi3p-eRfh2lIRzlVizBPSqMyn17nQNtNioM8NhGoYy7A5flyfw_M-NBuiBK8fsnsG2z4lFEuxV0ZUl1Hwnu_HXyKE0qqX7pmEwZ6nR1z23OTSDhN3Sq3zSsrk0-OuDb3owZCdudkinKxfIrU44X9f1HVHTtS8VyhmfYP6sWeN0_wORkTKEyMZllgaYIV-AgCm-TZZJYUQrleNUM2kFbgl_O4hou");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    var response = await fetch(url, requestOptions)
        .then(res => res.json());

    //Verificando se O campo "Dados" do JSON de retorno possui alguma informação ou se é nulo
    if (null == response.dados) {
        window.alert("Dados Não encontrados!");
    }
    //Se for encontrada alguma informação com os parametros inseridos, ele irá retornar o JSON de "Dados"
    else {
        //Declara uma variavel para susbtituir o conteudo da ultima TAG HTML gerada 
        var OutputDTO = document.getElementById('LblOutputDTODados2');

        //Substitui o conteudo interno da TAG Span id="LblOutputDTODados" pelos dados retornados pela API
        OutputDTO.innerText = response.dados;
    }
}

//Método de Inclusão/Atualização da API
async function BtnSAVnut_alimentosms_OnClick() {
    //Recebe o campo do formulário HTML
    var TxtHandle = document.getElementById('TxtHandle');
    var Txtalimento = document.getElementById('Txtalimento');
    var Txtenergia = document.getElementById('Txtenergia');
    var Txtumidade = document.getElementById('Txtumidade');
    var Txtmateriaseca = document.getElementById('Txtmateriaseca');
    var Txtproteinabruta = document.getElementById('Txtproteinabruta');
    var Txtextratoetereo = document.getElementById('Txtextratoetereo');
    var Txtac_linoleico6 = document.getElementById('Txtac_linoleico6');
    var Txtmateriamineral = document.getElementById('Txtmateriamineral');
    var Txtcalcio = document.getElementById('Txtcalcio');
    var Txtfosforo = document.getElementById('Txtfosforo');
    var Txtpotassio = document.getElementById('Txtpotassio');
    var Txtmagnesio = document.getElementById('Txtmagnesio');
    var Txtcobre = document.getElementById('Txtcobre');
    var Txtferro = document.getElementById('Txtferro');
    var Txtmanganes = document.getElementById('Txtmanganes');
    var Txtzinco = document.getElementById('Txtzinco');
    var Txtcarboidratos = document.getElementById('Txtcarboidratos');
    var Txtfibrabruta = document.getElementById('Txtfibrabruta');
    var Txtenn = document.getElementById('Txtenn');
    var Txtriboflavina = document.getElementById('Txtriboflavina');
    var Txtvit_c = document.getElementById('Txtvit_c');
    var Txttiamina = document.getElementById('Txttiamina');
    var Txtselenio = document.getElementById('Txtselenio');
    var Txtvita = document.getElementById('Txtvita');
    var Txtvite = document.getElementById('Txtvite');
    var Txtvit_b6 = document.getElementById('Txtvit_b6');
    var Txtac_folico = document.getElementById('Txtac_folico');
    var Txtsodio = document.getElementById('Txtsodio');
    var Txthis = document.getElementById('Txthis');
    var Txtiso = document.getElementById('Txtiso');
    var Txtleu = document.getElementById('Txtleu');
    var Txtlis = document.getElementById('Txtlis');
    var Txtmet = document.getElementById('Txtmet');
    var Txtfen = document.getElementById('Txtfen');
    var Txttreo = document.getElementById('Txttreo');
    var Txttri = document.getElementById('Txttri');
    var Txtval = document.getElementById('Txtval');
    var Txtac_araquidonico = document.getElementById('Txtac_araquidonico');
    var Txtac_pantotenico = document.getElementById('Txtac_pantotenico');
    var Txtniacina = document.getElementById('Txtniacina');
    var Txtcolina = document.getElementById('Txtcolina');
    var Txtiodo = document.getElementById('Txtiodo');
    var Txttau = document.getElementById('Txttau');
    var Txtenxofre = document.getElementById('Txtenxofre');
    var Txtvitd = document.getElementById('Txtvitd');
    var Txtvit_b12 = document.getElementById('Txtvit_b12');
    var Txtbiotina = document.getElementById('Txtbiotina');
    var Txtarg = document.getElementById('Txtarg');
    var Txtac_linolenico3 = document.getElementById('Txtac_linolenico3');
    var Txtepa_dha = document.getElementById('Txtepa_dha');
    var Txtfdn = document.getElementById('Txtfdn');
    var Txtfda = document.getElementById('Txtfda');
    var Txtcnf = document.getElementById('Txtcnf');
    var Txtvit_k = document.getElementById('Txtvit_k');
    var Txtcloro = document.getElementById('Txtcloro');
    var Txtmet_cis = document.getElementById('Txtmet_cis');
    var Txtfen_tir = document.getElementById('Txtfen_tir');

    //Nova variável para receber os valores dos campos
    var handle = TxtHandle.value;
    var alimento = Txtalimento.value;
    var energia = Txtenergia.value;
    var umidade = Txtumidade.value;
    var materiaseca = Txtmateriaseca.value;
    var proteinabruta = Txtproteinabruta.value;
    var extratoetereo = Txtextratoetereo.value;
    var ac_linoleico6 = Txtac_linoleico6.value;
    var materiamineral = Txtmateriamineral.value;
    var calcio = Txtcalcio.value;
    var fosforo = Txtfosforo.value;
    var potassio = Txtpotassio.value;
    var magnesio = Txtmagnesio.value;
    var cobre = Txtcobre.value;
    var ferro = Txtferro.value;
    var manganes = Txtmanganes.value;
    var zinco = Txtzinco.value;
    var carboidratos = Txtcarboidratos.value;
    var fibrabruta = Txtfibrabruta.value;
    var enn = Txtenn.value;
    var riboflavina = Txtriboflavina.value;
    var vit_c = Txtvit_c.value;
    var tiamina = Txttiamina.value;
    var selenio = Txtselenio.value;
    var vita = Txtvita.value;
    var vite = Txtvite.value;
    var vit_b6 = Txtvit_b6.value;
    var ac_folico = Txtac_folico.value;
    var sodio = Txtsodio.value;
    var his = Txthis.value;
    var iso = Txtiso.value;
    var leu = Txtleu.value;
    var lis = Txtlis.value;
    var met = Txtmet.value;
    var fen = Txtfen.value;
    var treo = Txttreo.value;
    var tri = Txttri.value;
    var val = Txtval.value;
    var ac_araquidonico = Txtac_araquidonico.value;
    var ac_pantotenico = Txtac_pantotenico.value;
    var niacina = Txtniacina.value;
    var colina = Txtcolina.value;
    var iodo = Txtiodo.value;
    var tau = Txttau.value;
    var enxofre = Txtenxofre.value;
    var vitd = Txtvitd.value;
    var vit_b12 = Txtvit_b12.value;
    var biotina = Txtbiotina.value;
    var arg = Txtarg.value;
    var ac_linolenico3 = Txtac_linolenico3.value;
    var epa_dha = Txtepa_dha.value;
    var fdn = Txtfdn.value;
    var fda = Txtfda.value;
    var cnf = Txtcnf.value;
    var vit_k = Txtvit_k.value;
    var cloro = Txtcloro.value;
    var met_cis = Txtmet_cis.value;
    var fen_tir = Txtfen_tir.value;

    //Se não atribuir um handle significa inclusao de um registro novo
    if (handle === "") {
        handle = 0;
    }

    // Dados de cadastro
    let data = {
        "handle": handle,
        "alimento": alimento,
        "energia": energia,
        "umidade": umidade,
        "materiaseca": materiaseca,
        "proteinabruta": proteinabruta,
        "extratoetereo": extratoetereo,
        "ac_linoleico6": ac_linoleico6,
        "materiamineral": materiamineral,
        "calcio": calcio,
        "fosforo": fosforo,
        "potassio": potassio,
        "magnesio": magnesio,
        "cobre": cobre,
        "ferro": ferro,
        "manganes": manganes,
        "zinco": zinco,
        "carboidratos": carboidratos,
        "fibrabruta": fibrabruta,
        "enn": enn,
        "riboflavina": riboflavina,
        "vit_c": vit_c,
        "tiamina": tiamina,
        "selenio": selenio,
        "vita": vita,
        "vite": vite,
        "vit_b6": vit_b6,
        "ac_folico": ac_folico,
        "sodio": sodio,
        "his": his,
        "iso": iso,
        "leu": leu,
        "lis": lis,
        "met": met,
        "fen": fen,
        "treo": treo,
        "tri": tri,
        "val": val,
        "ac_araquidonico": ac_araquidonico,
        "ac_pantotenico": ac_pantotenico,
        "niacina": niacina,
        "colina": colina,
        "iodo": iodo,
        "tau": tau,
        "enxofre": enxofre,
        "vitd": vitd,
        "vit_b12": vit_b12,
        "biotina": biotina,
        "arg": arg,
        "ac_linolenico3": ac_linolenico3,
        "epa_dha": epa_dha,
        "fdn": fdn,
        "fda": fda,
        "cnf": cnf,
        "vit_k": vit_k,
        "cloro": cloro,
        "met_cis": met_cis,
        "fen_tir": fen_tir
    }

    // Declarando uma variavel para receber os dados retornados da API.
    var response = await fetch('http://palmutip.com.br:7506/api/Nutricao/SAV_Alimentosms', {
        method: 'POST', //Método de envio de dados ao BD
        headers: {    //Definindo Cabeçalhos no consumo da API
            'Accept': 'application/json, text/plain, /',
            'Content-Type': 'application/json'
        }, body: JSON.stringify(data)
    }).then(res => res.json()); //Otendo o retorno da API. (Esse JSON que será atribuido a variavel "response")

    //Verificando se O campo "mensagem" do JSON de retorno possui a mensagem de Sucesso!
    if ("Registro inserido com sucesso!" === response.mensagem) {
        //Declara uma variavel para susbtituir o conteudo da ultima TAG HTML gerada
        var OutputDTO = document.getElementById('LblOutputDTODados');

        //Substitui o conteudo interno da TAG Span id="LblOutputDTODados" pelos dados retornados pela API
        OutputDTO.innerText = response.dados;
    }
    else {
        window.alert("Erro ao salvar registro.");
    }
}

//Método de Remoçao da API
async function BtnDELnut_alimentosms_OnClick() {
    //Recebe o campo do formulário HTML
    var TxtHandle = document.getElementById('TxtHandle');

    //Nova variável para receber os valores dos campos
    var handle = TxtHandle.value;

    //Se não atribuir um handle, o sistema nao consegue excluir o registro
    if (handle === "") {
        window.alert("Handle não pode estar em branco na exclusão");
    }

    // Dados de cadastro
    let data = {
        "handle": handle
    }

    // Declarando uma variavel para receber os dados retornados da API.
    var response = await fetch('http://palmutip.com.br:7506/api/Nutricao/DEL_Alimentosms', {
        method: 'POST', //Método de envio de dados ao BD
        headers: {    //Definindo Cabeçalhos no consumo da API
            'Accept': 'application/json, text/plain, /',
            'Content-Type': 'application/json'
        }, body: JSON.stringify(data)
    }).then(res => res.json()); //Otendo o retorno da API. (Esse JSON que será atribuido a variavel "response")

    //Verificando se O campo "mensagem" do JSON de retorno possui a mensagem de Sucesso!
    if ("Registro removido com sucesso" === response.mensagem) {

        window.alert("Registro removido");

        //Limpa os dados Recem inseridos
        BtnLimparFormularioMN_OnClick();
    }
    else {
        window.alert("Erro ao remover registro.");
    }
}

//#endregion

//#region Funções NEM

//Método responsavel por preencher a variavel do tipo Lista contendo todas as formulas de NEM
async function GETnut_nem(Especies) {
    
    removeOptions(Especies);

    var myHeaders = new Headers();
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    await fetch("http://palmutip.com.br:7506/api/Nutricao/GET_NEM", requestOptions)
        .then(response => response.text())
        .then(result => {
            var retorno = JSON.parse(result);
            var count = 0;
            var dados = JSON.parse(retorno.dados);

            while (dados.length > count) { // Enquanto o tamanho do Array do JSON Alimentos Matéria Natural for maior que o terceiro contador
                option = document.createElement("option"); // Irá criar um novo <option> (<option> significa um novo valor dentro da lista do <select>)
                option.value = dados[count].handle; // Insere o atributo 'value' para o <option> recém criado. Sendo ele igual ao (terceiro contador + 1)
                option.text = dados[count].nome; // Insere o atributo 'text' para o <option> recém criado. Sendo ele o valor do campo "Alimento" de acordo com o contador do JSON
                Especies.add(option);

                NEM.push(dados[count]);
                count++; // Atribui mais um no terceiro contador para seguir a lógica
            }
        })
        .catch(error => console.log('error', error));
}

//Método de consulta na API
async function BtnGETnut_nem_OnClick() {
    //Variável para armazenar a quantidade de filtros que serão passados para a API
    var qtdfiltro = 0;

    //Recebe o campo do formulário HTML
    var Txtnome = document.getElementById('Txtnome');
    var Txtformula = document.getElementById('Txtformula');
    var TxtHandle = document.getElementById('TxtHandle');

    //Nova variável para receber os valores dos campos
    var nome = Txtnome.value;
    var formula = Txtformula.value;
    var handle = TxtHandle.value;

    //Cria uma Hash para armazenar os valores que foram passados como filtro
    const ht = new Map();

    //Verifica se a variavel atual foi preenchida no formulário, para ser passada como filtro na consulta da API
    //Se o campo foi preenchido, ele armazena esse valor na HashTable para facilitar sua referencia nos próximos procedimentos
    //Por fim atribui mais um na quantidade de filtros
    if (nome != "") {
        ht.set(nome, "nome");
        qtdfiltro += 1;
    }
    if (formula != "") {
        ht.set(formula, "formula");
        qtdfiltro += 1;
    }
    if (handle != "") {
        ht.set(handle, "handle");
        qtdfiltro += 1;
    }

    //Variável para armazenar a URL da API
    var url = "http://palmutip.com.br:7506/api/nutricao/GET_Nem";

    //Impõe a condição de ter siddo passado ao menos um filtro de busca
    if (qtdfiltro > 0) {

        //Inicializando um contador para percorrer cada filtro
        var contador = 0;

        //Laço de repetição para percorrer todos os filtros
        for (let [key, value] of ht) {
            //Condição para quando for o primeiro filtro aplicado
            if (contador == 0) {
                //Passa o primeiro filtro como parametro de busca
                url = url + "?filtro=" + { value } + "%3D" + { key };
            }
            //Quando for aplicado do segundo filtro em diante
            else {
                //Adiciona novos filtros na medida que vao aparecendo
                url += "%3B" + { value } + "%3D" + { key };
            }

            //Soma mais um no contador para ele nao colocar o texto do primeiro filtro novamente
            contador++;
        }
    }

    // Declarando uma variavel para receber os dados retornados da API.
    var response = await fetch(url, {
        method: 'GET', //Método de busca no BD
        headers: {    //Definindo Cabeçalhos no consumo da API
            'Accept': 'application/json, text/plain, /',
            'Content-Type': 'application/json'
        },
    }).then(res => res.json()); //Otendo o retorno da API. (Esse JSON que será atribuido a variavel "response")

    //Verificando se O campo "Dados" do JSON de retorno possui alguma informação ou se é nulo
    if (null == response.dados) {
        window.alert("Dados Não encontrados!");
    }
    //Se for encontrada alguma informação com os parametros inseridos, ele irá retornar o JSON de "Dados"
    else {
        //Declara uma variavel para susbtituir o conteudo da ultima TAG HTML gerada 
        var OutputDTO = document.getElementById('LblOutputDTODadosNEM');

        //Substitui o conteudo interno da TAG Span id="LblOutputDTODados" pelos dados retornados pela API
        OutputDTO.innerText = response.dados;
    }
}

//Método de Inclusão/Atualização da API
async function BtnSAVnut_nem_OnClick() {
    //Recebe o campo do formulário HTML
    var Txtnome = document.getElementById('Txtnome');
    var Txtformula = document.getElementById('Txtformula');
    var TxtHandle = document.getElementById('TxtHandle');

    //Nova variável para receber os valores dos campos
    var nome = Txtnome.value;
    var formula = Txtformula.value;
    var handle = TxtHandle.value;

    //Se não atribuir um handle significa inclusao de um registro novo
    if (handle === "") {
        handle = 0;
    }

    // Dados de cadastro
    let data = {
        "nome": nome,
        "formula": formula,
        "handle": handle
    }

    // Declarando uma variavel para receber os dados retornados da API.
    var response = await fetch('http://palmutip.com.br:7506/api/nutricao/SAV_Nem', {
        method: 'POST', //Método de envio de dados ao BD
        headers: {    //Definindo Cabeçalhos no consumo da API
            'Accept': 'application/json, text/plain, /',
            'Content-Type': 'application/json'
        }, body: JSON.stringify(data)
    }).then(res => res.json()); //Otendo o retorno da API. (Esse JSON que será atribuido a variavel "response")

    //Verificando se O campo "mensagem" do JSON de retorno possui a mensagem de Sucesso!
    if ("Registro inserido com sucesso!" === response.mensagem) {
        //Declara uma variavel para susbtituir o conteudo da ultima TAG HTML gerada
        var OutputDTO = document.getElementById('LblOutputDTODadosNEM');

        //Substitui o conteudo interno da TAG Span id="LblOutputDTODados" pelos dados retornados pela API
        OutputDTO.innerText = response.dados;
    }
    else {
        window.alert("Erro ao salvar registro.");
    }
}

//Método de Remoçao da API
async function BtnDELnut_nem_OnClick() {
    //Recebe o campo do formulário HTML
    var TxtHandle = document.getElementById('TxtHandle');

    //Nova variável para receber os valores dos campos
    var handle = TxtHandle.value;

    //Se não atribuir um handle, o sistema nao consegue excluir o registro
    if (handle === "") {
        window.alert("Handle não pode estar em branco na exclusão");
    }

    // Dados de cadastro
    let data = {
        "handle": handle
    }

    // Declarando uma variavel para receber os dados retornados da API.
    var response = await fetch('http://palmutip.com.br:7506/api/nutricao/DEL_Nem', {
        method: 'POST', //Método de envio de dados ao BD
        headers: {    //Definindo Cabeçalhos no consumo da API
            'Accept': 'application/json, text/plain, /',
            'Content-Type': 'application/json'
        }, body: JSON.stringify(data)
    }).then(res => res.json()); //Otendo o retorno da API. (Esse JSON que será atribuido a variavel "response")

    //Verificando se O campo "mensagem" do JSON de retorno possui a mensagem de Sucesso!
    if ("Registro removido com sucesso!" === response.mensagem) {
        //Declara uma variavel para susbtituir o conteudo da ultima TAG HTML gerada
        var OutputDTO = document.getElementById('LblOutputDTODadosNEM');

        //Substitui o conteudo interno da TAG Span id="LblOutputDTODados" pelos dados retornados pela API
        OutputDTO.innerText = "Registro removido às: " + response.dataHora;
    }
    else {
        window.alert("Erro ao remover registro.");
    }
}

//#endregion

//#region Funções NEM Ajuste

async function GETnut_nemajuste(TxtAjuste) {
    
    removeOptions(TxtAjuste);

    var myHeaders = new Headers();
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    await fetch("http://palmutip.com.br:7506/api/Nutricao/GET_NEMAJUSTE", requestOptions)
        .then(response => response.text())
        .then(result => {
            var retorno = JSON.parse(result);
            var count = 0;
            var dados = JSON.parse(retorno.dados);

            while (dados.length > count) { // Enquanto o tamanho do Array do JSON Alimentos Matéria Natural for maior que o terceiro contador
                option = document.createElement("option"); // Irá criar um novo <option> (<option> significa um novo valor dentro da lista do <select>)
                option.value = dados[count].handle; // Insere o atributo 'value' para o <option> recém criado. Sendo ele igual ao (terceiro contador + 1)
                option.text = dados[count].nome; // Insere o atributo 'text' para o <option> recém criado. Sendo ele o valor do campo "Alimento" de acordo com o contador do JSON
                TxtAjuste.add(option);

                Ajuste.push(dados[count]);
                count++; // Atribui mais um no terceiro contador para seguir a lógica
            }
        })
        .catch(error => console.log('error', error));
}

//Método de consulta na API
async function BtnGETnut_nemajuste_OnClick() {
    //Variável para armazenar a quantidade de filtros que serão passados para a API
    var qtdfiltro = 0;

    //Recebe o campo do formulário HTML
    var Txtnome = document.getElementById('Txtnome');
    var Txtformula = document.getElementById('Txtformula');
    var TxtHandle = document.getElementById('TxtHandle');

    //Nova variável para receber os valores dos campos
    var nome = Txtnome.value;
    var formula = Txtformula.value;
    var handle = TxtHandle.value;

    //Cria uma Hash para armazenar os valores que foram passados como filtro
    const ht = new Map();

    //Verifica se a variavel atual foi preenchida no formulário, para ser passada como filtro na consulta da API
    //Se o campo foi preenchido, ele armazena esse valor na HashTable para facilitar sua referencia nos próximos procedimentos
    //Por fim atribui mais um na quantidade de filtros
    if (nome != "") {
        ht.set(nome, "nome");
        qtdfiltro += 1;
    }
    if (formula != "") {
        ht.set(formula, "formula");
        qtdfiltro += 1;
    }
    if (handle != "") {
        ht.set(handle, "handle");
        qtdfiltro += 1;
    }

    //Variável para armazenar a URL da API
    var url = "http://palmutip.com.br:7506/api/nutricao/GET_Nemajuste";

    //Impõe a condição de ter siddo passado ao menos um filtro de busca
    if (qtdfiltro > 0) {

        //Inicializando um contador para percorrer cada filtro
        var contador = 0;

        //Laço de repetição para percorrer todos os filtros
        for (let [key, value] of ht) {
            //Condição para quando for o primeiro filtro aplicado
            if (contador == 0) {
                //Passa o primeiro filtro como parametro de busca
                url = url + "?filtro=" + `${value}` + "%3D" + `${key}`;
            }
            //Quando for aplicado do segundo filtro em diante
            else {
                //Adiciona novos filtros na medida que vao aparecendo
                url += "%3B" + `${value}` + "%3D" + `${key}`;
            }

            //Soma mais um no contador para ele nao colocar o texto do primeiro filtro novamente
            contador++;
        }
    }

    // Declarando uma variavel para receber os dados retornados da API.
    var response = await fetch(url, {
        method: 'GET', //Método de busca no BD
        headers: {    //Definindo Cabeçalhos no consumo da API
            'Accept': 'application/json, text/plain, /',
            'Content-Type': 'application/json'
        },
    }).then(res => res.json()); //Otendo o retorno da API. (Esse JSON que será atribuido a variavel "response")

    //Verificando se O campo "Dados" do JSON de retorno possui alguma informação ou se é nulo
    if (null == response.dados) {
        window.alert("Dados Não encontrados!");
    }
    //Se for encontrada alguma informação com os parametros inseridos, ele irá retornar o JSON de "Dados"
    else {
        //Declara uma variavel para susbtituir o conteudo da ultima TAG HTML gerada 
        var OutputDTO = document.getElementById('LblOutputDTODadosAjuste');

        //Substitui o conteudo interno da TAG Span id="LblOutputDTODados" pelos dados retornados pela API
        OutputDTO.innerText = response.dados;
    }
}

//Método de Inclusão/Atualização da API
async function BtnSAVnut_nemajuste_OnClick() {
    //Recebe o campo do formulário HTML
    var Txtnome = document.getElementById('Txtnome');
    var Txtformula = document.getElementById('Txtformula');
    var TxtHandle = document.getElementById('TxtHandle');

    //Nova variável para receber os valores dos campos
    var nome = Txtnome.value;
    var formula = Txtformula.value;
    var handle = TxtHandle.value;

    //Se não atribuir um handle significa inclusao de um registro novo
    if (handle === "") {
        handle = 0;
    }

    // Dados de cadastro
    let data = {
        "nome": nome,
        "formula": formula,
        "handle": handle
    }

    // Declarando uma variavel para receber os dados retornados da API.
    var response = await fetch('http://palmutip.com.br:7506/api/nutricao/SAV_Nemajuste', {
        method: 'POST', //Método de envio de dados ao BD
        headers: {    //Definindo Cabeçalhos no consumo da API
            'Accept': 'application/json, text/plain, /',
            'Content-Type': 'application/json'
        }, body: JSON.stringify(data)
    }).then(res => res.json()); //Otendo o retorno da API. (Esse JSON que será atribuido a variavel "response")

    //Verificando se O campo "mensagem" do JSON de retorno possui a mensagem de Sucesso!
    if ("Registro inserido com sucesso!" === response.mensagem) {
        //Declara uma variavel para susbtituir o conteudo da ultima TAG HTML gerada
        var OutputDTO = document.getElementById('LblOutputDTODadosAjuste');

        //Substitui o conteudo interno da TAG Span id="LblOutputDTODados" pelos dados retornados pela API
        OutputDTO.innerText = response.dados;
    }
    else {
        window.alert("Erro ao salvar registro.");
    }
}

//Método de Remoçao da API
async function BtnDELnut_nemajuste_OnClick() {
    //Recebe o campo do formulário HTML
    var TxtHandle = document.getElementById('TxtHandle');

    //Nova variável para receber os valores dos campos
    var handle = TxtHandle.value;

    //Se não atribuir um handle, o sistema nao consegue excluir o registro
    if (handle === "") {
        window.alert("Handle não pode estar em branco na exclusão");
    }

    // Dados de cadastro
    let data = {
        "handle": handle
    }

    // Declarando uma variavel para receber os dados retornados da API.
    var response = await fetch('http://palmutip.com.br:7506/api/nutricao/DEL_Nemajuste', {
        method: 'POST', //Método de envio de dados ao BD
        headers: {    //Definindo Cabeçalhos no consumo da API
            'Accept': 'application/json, text/plain, /',
            'Content-Type': 'application/json'
        }, body: JSON.stringify(data)
    }).then(res => res.json()); //Otendo o retorno da API. (Esse JSON que será atribuido a variavel "response")

    //Verificando se O campo "mensagem" do JSON de retorno possui a mensagem de Sucesso!
    if ("Registro removido com sucesso!" === response.mensagem) {
        //Declara uma variavel para susbtituir o conteudo da ultima TAG HTML gerada
        var OutputDTO = document.getElementById('LblOutputDTODadosAjuste');

        //Substitui o conteudo interno da TAG Span id="LblOutputDTODados" pelos dados retornados pela API
        OutputDTO.innerText = "Registro removido às: " + response.dataHora;
    }
    else {
        window.alert("Erro ao remover registro.");
    }
}

//#endregion