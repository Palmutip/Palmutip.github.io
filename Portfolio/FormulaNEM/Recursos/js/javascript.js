//#region Inicializando Sistema e Variaveis
var alimentosmn = [];
var alimentosms = [];
var NEM = [];
var Ajuste = [];
var soma = [];
var contador_global = 1; // Um contador global que irá auxiliar durante a criação dos <select> e <input>
var totalInclusao = 0.00; // Uma variável global que terá seu valor alterado conforme os valores que forem inseridos nos <input> criados
var energiaDieta = 0.00;

async function InicializarSistema() {
    var CmdInfoAlimento = document.getElementById("CmdInfoAlimento");
    var CmdAlimentosMN0 = document.getElementById("CmdAlimentosMN0");
    var TxtAjuste = document.getElementById("Ajuste");
    var Especies = document.getElementById("Requerimento");

    var LblTotalAlimentosMNCadastrados = document.getElementById("LblTotalAlimentosMNCadastrados");
    var LblTotalDeEspeciesCadastrados = document.getElementById("LblTotalDeEspeciesCadastrados");
    var LblTotalDeAjustesNemCadastrados = document.getElementById("LblTotalDeAjustesNemCadastrados");
    var LblTotalDeDietasCadastrados = document.getElementById("LblTotalDeDietasCadastrados");

    while (alimentosmn.length > 0) {
        alimentosmn.pop();
    }
    while (alimentosms.length > 0) {
        alimentosms.pop();
    }
    while (NEM.length > 0) {
        NEM.pop();
    }
    while (Ajuste.length > 0) {
        Ajuste.pop();
    }

    ControlaSecao('Inicio');

    await GetAlimentosMateriaNatural(CmdInfoAlimento);
    PreencherSelectAlimentoFormulacao(CmdAlimentosMN0);

    await GetAlimentosMateriaSeca();

    await GETnut_nemajuste(TxtAjuste);

    await GETnut_nem(Especies);

    LblTotalAlimentosMNCadastrados.innerHTML = alimentosmn.length;
    LblTotalDeEspeciesCadastrados.innerHTML = NEM.length;
    LblTotalDeAjustesNemCadastrados.innerHTML = Ajuste.length;
    LblTotalDeDietasCadastrados.innerHTML = 0;
}

//#endregion

//#region Função chamada ao alterar o <option> do <select> que calcula a dieta

function BtnLimpaCalculoFormulacao_OnClick() {
    energiaDieta = 0;
    contador_global = 1; // Um contador global que irá auxiliar durante a criação dos <select> e <input>
    totalInclusao = 0.00; // Uma variável global que terá seu valor alterado conforme os valores que forem inseridos nos <input> criados

    document.getElementById("resultados").style.display = "none";
    document.getElementById("resultadosfinais").style.display = "none";

    let tbodyms = document.getElementById("table_resultados");
    while (tbodyms.firstChild) tbodyms.removeChild(tbodyms.firstChild);

    let tbodymn = document.getElementById("table_alimentos_mn");
    while (tbodymn.firstChild) tbodymn.removeChild(tbodymn.firstChild);

    let tbodyms1 = document.getElementById("table_alimentos_ms");
    while (tbodyms1.firstChild) tbodyms1.removeChild(tbodyms1.firstChild);

    let tbodydieta = document.getElementById("table_dieta");
    while (tbodydieta.firstChild) tbodydieta.removeChild(tbodydieta.firstChild);

    let tbody = document.getElementById("table_body");
    while (tbody.firstChild) tbody.removeChild(tbody.firstChild);

    document.getElementById("Total_Inclusao").innerText = "";
    document.getElementById("peso_animal").value = "";
    document.getElementById("NemCalculada").innerHTML = "";
    document.getElementById("Requerimento").selectedIndex = 0;
    document.getElementById("Ajuste").selectedIndex = 0;


    let b = document.createElement('b') // Criado um elemento <b> para ser usado de referencia na hora de atribuir o contador da tabela
    let select = document.createElement('select'); // Irá criar um novo <select>
    let input = document.createElement('input'); // Irá criar um novo <input>

    select.id = "CmdAlimentosMN0"; // Insere o atributo 'id' para o <select> recém criado
    input.id = "val_inclusao0"; // Insere o atributo 'id' para o <input> recém criado


    let tr = document.createElement('tr'); // Criando uma Table Row <tr> para ser usada de referencia na hora de atribuir uma Table Data <td>
    let tdid = document.createElement('td'); // Criado uma Table Data <td> para ser usada como referencia na hora de inserir o numero de sequencia da tabela
    let tdalimento = document.createElement('td'); // Criado uma <td> para ser usada como referencia na hora de escolher um alimento pelo <select>
    let tdinclusao = document.createElement('td'); // Criado uma <td> para ser usada como referencia na hora de definir uma % de inclusão no <input>
    let ProximosAlimentos = document.getElementById("table_body"); // Procura pelo <tbody> para ser usado como referencia na hora de inserir as demais linhas da tabela
    ProximosAlimentos.appendChild(tr); // Insere uma nova linha <tr> conforme o <tbody> passado
    tr.appendChild(tdid); // Insere um novo dado na linha <td> conforme o <tr> passado
    tr.appendChild(tdalimento); // Insere um novo dado na linha <td> conforme o <tr> passado
    tr.appendChild(tdinclusao); // Insere um novo dado na linha <td> conforme o <tr> passado
    tdid.appendChild(b); // Insere o conteudo do <td>, neste caso é um <b>
    tdalimento.appendChild(select); // Insere o conteudo do <td>, neste caso é um <select>
    tdinclusao.appendChild(input); // Insere o conteudo do <td>, neste caso é um <input>
    b.innerHTML = 1; // Atribuindo o contador da tabela atraves de um elemento <b>

    option = document.createElement("option"); // Irá criar um novo <option> (<option> significa um novo valor dentro da lista do <select>) para o primeiro elemento
    option.value = 0; // Insere o atributo 'value' para o <option> recém criado. Sendo ele o primeiro elemento
    option.text = ""; // Insere o atributo 'text' para o <option> recém criado. Sendo ele vazio
    select.add(option); // Insere o <option> dentro do <select> criado anteriormente

    let count = 0; // Um terceiro contador, apenas para atribuir os valores que irão aparecer como opção dentro do <select>

    while (alimentosmn.length > count) { // Enquanto o tamanho do Array do JSON Alimentos Matéria Natural for maior que o terceiro contador

        option = document.createElement("option"); // Irá criar um novo <option> (<option> significa um novo valor dentro da lista do <select>)
        option.value = count + 1; // Insere o atributo 'value' para o <option> recém criado. Sendo ele igual ao (terceiro contador + 1)
        option.text = alimentosmn[count].alimento; // Insere o atributo 'text' para o <option> recém criado. Sendo ele o valor do campo "Alimento" de acordo com o contador do JSON
        select.add(option); // Insere o <option> dentro do <select> criado anteriormente

        count++; // Atribui mais um no terceiro contador para seguir a lógica
    } // Finaliza o while

    //Adicionando atributos ao <select>
    select.setAttribute('onchange', 'CmdAlimentosMN_OnChange(this)'); // Adiciona o atributo 'onchange' para o <select> recém criado.
    select.setAttribute('class', 'contact__input'); // Adiciona o atributo 'class' para o <select> recém criado.

    //Adicionando atributos ao <input>
    input.setAttribute('class', 'contact__input'); // Adiciona o atributo 'class' para o <input> recém criado.
    input.setAttribute('placeholder', '%'); // Adiciona o atributo 'placeholder' para o <input> recém criado.
    input.setAttribute('step', '.01'); // Adiciona o atributo 'step' para o <input> recém criado.
    input.setAttribute('type', 'number'); // Adiciona o atributo 'type' para o <input> recém criado.

    //Adicionando Identificação nas <td> linhas Tabela
    tdid.setAttribute('data-label', 'Id');
    tdalimento.setAttribute('data-label', 'Alimento');
    tdinclusao.setAttribute('data-label', '% Inclusão');
}

function CmdAlimentosMN_OnChange(elemento) { // Nome da função que será chamada ao trocar a opção selecionada de um <select> (ComboBox)
    var identificacao = elemento.id; // Pegando o texto do atributo id do <select> passado como parametro.
    var valoridentificacao = elemento.value; // Pegando o value do <select> passado como parametro

    // Se o numero de identificação do <select> for igual ao (contador atual -1) OU se for o primeiro <select>
    if (identificacao.substring(14) == (contador_global - 1) || (identificacao.substring(14) == "" && contador_global == 1)) {

        let geral = 0; // Variavel auxiliar apenas para identificar os selects da lista

        while (geral < contador_global) { // Enquanto o contador atual for menor que o contador global
            if (document.getElementById("CmdAlimentosMN" + geral) != true) { // Se existir o <select> com o numero do contador atual
                let select = document.createElement('select'); // Irá criar um novo <select>
                let input = document.createElement('input'); // Irá criar um novo <input>

                select.id = "CmdAlimentosMN" + contador_global; // Insere o atributo 'id' para o <select> recém criado
                input.id = "val_inclusao" + contador_global; // Insere o atributo 'id' para o <input> recém criado

                let b = document.createElement('b') // Criado um elemento <b> para ser usado de referencia na hora de atribuir o contador da tabela
                let tr = document.createElement('tr'); // Criando uma Table Row <tr> para ser usada de referencia na hora de atribuir uma Table Data <td>
                let tdid = document.createElement('td'); // Criado uma Table Data <td> para ser usada como referencia na hora de inserir o numero de sequencia da tabela
                let tdalimento = document.createElement('td'); // Criado uma <td> para ser usada como referencia na hora de escolher um alimento pelo <select>
                let tdinclusao = document.createElement('td'); // Criado uma <td> para ser usada como referencia na hora de definir uma % de inclusão no <input>
                let ProximosAlimentos = document.getElementById("table_body"); // Procura pelo <tbody> para ser usado como referencia na hora de inserir as demais linhas da tabela
                ProximosAlimentos.appendChild(tr); // Insere uma nova linha <tr> conforme o <tbody> passado
                tr.appendChild(tdid); // Insere um novo dado na linha <td> conforme o <tr> passado
                tr.appendChild(tdalimento); // Insere um novo dado na linha <td> conforme o <tr> passado
                tr.appendChild(tdinclusao); // Insere um novo dado na linha <td> conforme o <tr> passado
                tdid.appendChild(b); // Insere o conteudo do <td>, neste caso é um <b>
                tdalimento.appendChild(select); // Insere o conteudo do <td>, neste caso é um <select>
                tdinclusao.appendChild(input); // Insere o conteudo do <td>, neste caso é um <input>
                b.innerHTML = contador_global + 1; // Atribuindo o contador da tabela atraves de um elemento <b>

                option = document.createElement("option"); // Irá criar um novo <option> (<option> significa um novo valor dentro da lista do <select>) para o primeiro elemento
                option.value = 0; // Insere o atributo 'value' para o <option> recém criado. Sendo ele o primeiro elemento
                option.text = ""; // Insere o atributo 'text' para o <option> recém criado. Sendo ele vazio
                select.add(option); // Insere o <option> dentro do <select> criado anteriormente

                let count = 0; // Um terceiro contador, apenas para atribuir os valores que irão aparecer como opção dentro do <select>

                while (alimentosmn.length > count) { // Enquanto o tamanho do Array do JSON Alimentos Matéria Natural for maior que o terceiro contador

                    option = document.createElement("option"); // Irá criar um novo <option> (<option> significa um novo valor dentro da lista do <select>)
                    option.value = count + 1; // Insere o atributo 'value' para o <option> recém criado. Sendo ele igual ao (terceiro contador + 1)
                    option.text = alimentosmn[count].alimento; // Insere o atributo 'text' para o <option> recém criado. Sendo ele o valor do campo "Alimento" de acordo com o contador do JSON
                    select.add(option); // Insere o <option> dentro do <select> criado anteriormente

                    count++; // Atribui mais um no terceiro contador para seguir a lógica
                } // Finaliza o while

                //Adicionando atributos ao <select>
                select.setAttribute('onchange', 'CmdAlimentosMN_OnChange(this)'); // Adiciona o atributo 'onchange' para o <select> recém criado.
                select.setAttribute('class', 'contact__input'); // Adiciona o atributo 'class' para o <select> recém criado.

                //Adicionando atributos ao <input>
                input.setAttribute('class', 'contact__input'); // Adiciona o atributo 'class' para o <input> recém criado.
                input.setAttribute('placeholder', '%'); // Adiciona o atributo 'placeholder' para o <input> recém criado.
                input.setAttribute('step', '.01'); // Adiciona o atributo 'step' para o <input> recém criado.
                input.setAttribute('type', 'number'); // Adiciona o atributo 'type' para o <input> recém criado.

                //Adicionando Identificação nas <td> linhas Tabela
                tdid.setAttribute('data-label', 'Id');
                tdalimento.setAttribute('data-label', 'Alimento');
                tdinclusao.setAttribute('data-label', '% Inclusão');

                contador_global++; // Atribui +1 no contador global



                break; // Comando para parar o laço

            } // Finaliza o if 
            geral++; // Atribui +1 no contador auxiliar

        } // Finaliza while

    } // Finaliza if
}

function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for (i = L; i >= 0; i--) {
        selectElement.remove(i);
    }
}

//#endregion

//#region Tabela resultado final

function BtnCalculaNutrientes_OnClick() {
    try {
        if (document.getElementById("peso_animal").value == "") {
            toastr.warning("Peso do Animal é um campo obrigatório.");
            //throw;
        }
        else {
            if (document.getElementById("peso_animal").value <= 0) {
                toastr.warning("Verifique o valor inserido no campo que se refere ao peso do animal.");
            }
            else {

                let peso = document.getElementById("peso_animal");
                let requerimento = document.getElementById("Requerimento"); // Escolhe uma formula dentro do <select> para calcular o requerimento
                let ajuste = document.getElementById("Ajuste"); // Escolhe uma formula de ajuste dentro do <select> para calcular o requerimento

                if (requerimento.options[requerimento.selectedIndex].value == 0) {
                    toastr.warning("Escolha uma espécie para formular");
                }
                if (ajuste.options[ajuste.selectedIndex].value == 0) {
                    toastr.warning("Escolha a ação desejada conforme estado fisiolojico do animal");
                }
                if (requerimento.options[requerimento.selectedIndex].value != 0 && ajuste.options[ajuste.selectedIndex].value != 0) {

                    var NemCalculada = calculaNEM(peso, requerimento, ajuste);

                    var PorcentagemInclusao = somaInclusao();

                    if (PorcentagemInclusao != 100) {
                        toastr.warning("A soma das porcentagens de inclusão devem somar exatamente 100%.");
                    }
                    else {
                        var InclusaoTotal = document.getElementById("Total_Inclusao"); 
                        var Total_IngestaoMS = document.getElementById("Total_IngestaoMS"); 
                        var Total_IngestaoMN = document.getElementById("Total_IngestaoMN"); 
                        let MostraResultados = document.getElementById("resultados");
                        let MostraResultadosFinais = document.getElementById("resultadosfinais");

                        InclusaoTotal.innerText = "";
                        InclusaoTotal.innerText += PorcentagemInclusao;

                        var energiaDietaAtual = parseFloat(calculaEnergiaDieta());
                        let Finalmente = ((100 * NemCalculada) / energiaDietaAtual).toFixed(2);

                        while (soma.length > 0) {
                            soma.pop();
                        }

                        Total_IngestaoMS.innerText = "";
                        Total_IngestaoMS.innerText += Finalmente;

                        let tbodydieta = document.getElementById("table_dieta");
                        while (tbodydieta.firstChild) tbodydieta.removeChild(tbodydieta.firstChild);

                        let geral = 0; // Variavel auxiliar apenas para identificar os selects da lista
                        var totalMN = 0.00;


                        while (geral < contador_global - 1) { // Enquanto o contador atual for menor que o contador global
                            let alimentoAtual = document.getElementById("CmdAlimentosMN" + geral); // Procura pelo <tbody> para ser usado como referencia na hora de inserir as demais linhas da tabela
                            let posicaooAtual = document.getElementById("CmdAlimentosMN" + geral).value;
                            let proporcaoAtual = document.getElementById("val_inclusao" + geral).value; // Procura pelo <tbody> para ser usado como referencia na hora de inserir as demais linhas da tabela

                            var AlimentoReferencia = alimentosmn.find(element => element.alimento == alimentoAtual[posicaooAtual].innerHTML);
                            var AlimentoAtual = alimentosms.find(element => element.alimento == AlimentoReferencia["handle"]);

                            let balimento = document.createElement('b'); // Irá criar um novo <select>
                            let bqtdmn = document.createElement('b'); // Irá criar um novo <input>
                            let bqtd = document.createElement('b'); // Irá criar um novo <input>
                            let bid = document.createElement('b') // Criado um elemento <b> para ser usado de referencia na hora de atribuir o contador da tabela
                            let tr = document.createElement('tr'); // Criando uma Table Row <tr> para ser usada de referencia na hora de atribuir uma Table Data <td>
                            let tdid = document.createElement('td'); // Criado uma Table Data <td> para ser usada como referencia na hora de inserir o numero de sequencia da tabela
                            let tdalimento = document.createElement('td'); // Criado uma <td> para ser usada como referencia na hora de escolher um alimento pelo <select>
                            let tdinclusao = document.createElement('td'); // Criado uma <td> para ser usada como referencia na hora de definir uma % de inclusão no <input>
                            let tdMateriaNatural = document.createElement('td'); // Criado uma <td> para ser usada como referencia na hora de definir uma % de inclusão no <input>

                            tbodydieta.appendChild(tr);
                            tr.appendChild(tdid); // Insere um novo dado na linha <td> conforme o <tr> passado
                            tr.appendChild(tdalimento); // Insere um novo dado na linha <td> conforme o <tr> passado
                            tr.appendChild(tdinclusao); // Insere um novo dado na linha <td> conforme o <tr> passado
                            tr.appendChild(tdMateriaNatural); // Insere um novo dado na linha <td> conforme o <tr> passado
                            tdid.appendChild(bid); // Insere o conteudo do <td>, neste caso é um <b>
                            tdalimento.appendChild(balimento); // Insere o conteudo do <td>, neste caso é um <select>
                            tdinclusao.appendChild(bqtd); // Insere o conteudo do <td>, neste caso é um <input>
                            tdMateriaNatural.appendChild(bqtdmn); // Insere o conteudo do <td>, neste caso é um <input>
                            bid.innerHTML = geral + 1; // Atribuindo o contador da tabela atraves de um elemento <b>
                            balimento.innerHTML = alimentoAtual[posicaooAtual].innerHTML;
                            bqtd.innerHTML = ((parseFloat(proporcaoAtual) * Finalmente) / 100).toFixed(2) + "(g)";

                            var reseult = ((parseFloat(proporcaoAtual) * Finalmente) / 100).toFixed(2);
                            var vlms = parseFloat(AlimentoReferencia["materiaseca"]);

                            bqtdmn.innerHTML = ((parseFloat(reseult.toLocaleString()) * 100) / vlms).toFixed(2) + "(g)";

                            var tot = ((parseFloat(reseult.toLocaleString()) * 100) / vlms).toFixed(2)
                            totalMN += parseFloat(tot.toLocaleString());

                            //Adicionando Identificação nas <td> linhas Tabela
                            tdid.setAttribute('data-label', 'Id');
                            tdalimento.setAttribute('data-label', 'Alimento');
                            tdinclusao.setAttribute('data-label', 'Qtd. MS (g)');
                            tdMateriaNatural.setAttribute('data-label', 'Qtd. MN (g)');

                            ++geral; // Atribui +1 no contador auxiliar

                            let tbodyms = document.getElementById("table_resultados");
                            while (tbodyms.firstChild) tbodyms.removeChild(tbodyms.firstChild);

                            for (let [key, value] of Object.entries(AlimentoAtual)) {

                                if (key == "handle" || key == "alimento" || key == "nomealimento" || key == "umidade" || key == "MS") {

                                } else {

                                    if (value == null || value == 0 || value == "0") {

                                    } else {
                                        if (key == "energia") {
                                            let tr = document.createElement('tr');
                                            let tdnutriente = document.createElement('td');
                                            let tdmedida = document.createElement('td');
                                            let bnutriente = document.createElement('b');
                                            let bmedida = document.createElement('b');

                                            tbodyms.appendChild(tr);
                                            tr.appendChild(tdnutriente);
                                            tr.appendChild(tdmedida);
                                            tdnutriente.appendChild(bnutriente);
                                            tdmedida.appendChild(bmedida);

                                            var energiaFormatada = parseFloat(energiaDietaAtual * 10).toFixed(1);

                                            bnutriente.innerHTML = key;
                                            bmedida.innerHTML += energiaFormatada + " (kcal)"; 
                                        } else if (key == "materiaseca") {

                                        }
                                        else {
                                            var valor = parseFloat(value.replace(',', '.')).toFixed(3);
                                            var formatado = (valor * parseFloat(proporcaoAtual) / 100);
                                            soma.push({
                                                key: key, value: formatado
                                            });
                                        }
                                    }
                                }
                            }
                        } // Finaliza while

                        if (InclusaoTotal.innerText == "" || InclusaoTotal.innerText == "0") {
                            MostraResultados.style.display = "none";
                            MostraResultadosFinais.style.display = "none";
                        } else {
                            MostraResultados.style.display = "inherit";
                            MostraResultadosFinais.style.display = "inherit";
                        }

                        var resObject = {};

                        soma.forEach((elem) => {
                            const valorAnterior = resObject[elem.key] || 0;
                            var numero1 = parseFloat(valorAnterior);
                            var numero2 = parseFloat(elem.value);
                            resObject[elem.key] = Math.abs(numero1 + numero2);
                        });

                        var novoLista = Object.keys(resObject).map((key) => {
                            return { key: key, value: parseFloat(resObject[key]).toFixed(2) };
                        });

                        var auxiliar = 0;
                        for (auxiliar == 0; auxiliar < novoLista.length; auxiliar++) {
                            let tbodyms = document.getElementById("table_resultados");
                            let tr = document.createElement('tr');
                            let tdnutriente = document.createElement('td');
                            let tdmedida = document.createElement('td');
                            let bnutriente = document.createElement('b');
                            let bmedida = document.createElement('b');
                            var auxilint = 0;

                            for (let [key, value] of Object.entries(novoLista[auxiliar])) {
                                if (auxilint == 0) {
                                    tbodyms.appendChild(tr);
                                    tr.appendChild(tdnutriente);
                                    tr.appendChild(tdmedida);
                                    tdnutriente.appendChild(bnutriente);
                                    tdmedida.appendChild(bmedida);

                                    bnutriente.innerHTML = value;
                                    auxilint = 1;
                                }
                                else {
                                    bmedida.innerHTML = value;
                                }
                            }
                        }
                        Total_IngestaoMN.innerText = totalMN;
                    }
                }
            }
        }       
    }
    catch (e) {
        toastr.error(e);
    }
}

function calculaEnergiaDieta() {
    var energiaTotal = 0.00;
    var i = 0; // Cria uma variavel contadora auxiliar

    for (i = 0; i < contador_global - 1; i++) { // Enquanto o contador auxiliar for menor que o contador global
        var porcentagemAlimento = document.getElementById("val_inclusao" + i); // Procure pelo <input> que possui a identificação igual ao contador local
        var select = document.getElementById("CmdAlimentosMN" + i); // Procure pelo <select> que possui a identificação igual ao contador local
        var alimentoSelecionado = select.options[select.selectedIndex].textContent; // Procure pela <option> selecionada atualmente no <select>
        //var AlimentoAtual = alimentosms.find(element => element.alimento == alimentoSelecionado);
        var AlimentoReferencia = alimentosmn.find(element => element.alimento == alimentoSelecionado);
        var AlimentoAtual = alimentosms.find(element => element.alimento == AlimentoReferencia["handle"]);


        for (let [key, value] of Object.entries(AlimentoAtual)) {
            if (key == "energia") {
                var resultadoEnergia = 0.00;
                var valor = 0.00;
                valor = parseFloat(value.replace(',', '.')).toFixed(7);
                resultadoEnergia = parseFloat((valor * parseInt(porcentagemAlimento.value)) / 100).toFixed(1);
                energiaTotal = energiaTotal + parseFloat(resultadoEnergia.toLocaleString());
            }
        }
    }

    return energiaTotal;
}

function somaInclusao() { // Função que irá somar os valores digitados no <input>
    totalInclusao = 0; // Irá zerar a variavel global para que a conta inicie
    var i = 0; // Cria uma variavel contadora auxiliar

    for (i = 0; i < contador_global; i++) { // Enquanto o contador auxiliar for menor que o contador global
        var myElement = document.getElementById("val_inclusao" + i); // Procure pelo <input> que possui a identificação igual ao contador local
        var select = document.getElementById("CmdAlimentosMN" + i); // Procure pelo <select> que possui a identificação igual ao contador local
        var value = select.options[select.selectedIndex].value; // Procure pela <option> selecionada atualmente no <select>
        if (value != 0) { // Se estiver selecionado qualquer opção que não seja a primeira (em branco)
            if (myElement) { // Ao encontrar o <input>
                totalInclusao += parseFloat(myElement.value); // Some o valor que está no <input> à variavel global responsavel por recebê-la.
            } // Finaliza If
        }

    } // Finaliza For

    return totalInclusao;
}

function calculaNEM(elemento, requerimento, ajuste) {
    //let peso = document.getElementById("peso_animal"); // Pega referencia do <input> que será utilizado para passar o valor do peso do animal
    var ResultadoNEM = 0.00;

    if (elemento.id == "peso_animal") { // Caso o usuário esteja alterando o valor do peso do animal
        if (requerimento.innerText == "NEM" || ajuste.innerText == "Ajuste") { // Verifique se os outros campos estão preenchidos
            ResultadoNEM = 0;
        } else {
            let pesoAnimal = elemento.value; // Recebe o valor do peso do animal
            for (let [key, value] of Object.entries(NEM[requerimento.value - 1])) { // Código para percorrer o JSON da formula da NEM
                if (key == "formula") { // Ao encontrar uma formula
                    let nemCalculada = document.getElementById("NemCalculada");
                    let ReqNem = eval(value.replace(",", ".")).toFixed(2);
                    for (let [key, value] of Object.entries(Ajuste[ajuste.value - 1])) {
                        if (key == "formula") {
                            let valor = eval(value.replace(",", ".")).toFixed(0);
                            nemCalculada.innerHTML = valor;
                            ResultadoNEM = valor;
                        }
                    }
                }
            }
        }
    } else if (elemento.id == "Requerimento") {
        if (peso.value == "" || ajuste.innerText == "Ajuste") {
            ResultadoNEM = 0;
        } else {
            let pesoAnimal = peso.value;
            for (let [key, value] of Object.entries(NEM[requerimento.value - 1])) {
                if (key == "formula") {
                    let nemCalculada = document.getElementById("NemCalculada");
                    let ReqNem = eval(value.replace(",", ".")).toFixed(2);
                    for (let [key, value] of Object.entries(Ajuste[ajuste.value - 1])) {
                        if (key == "formula") {
                            let valor = eval(value.replace(",", ".")).toFixed(0);
                            nemCalculada.innerHTML = valor;
                            ResultadoNEM = valor;
                        }
                    }
                }
            }
        }
    } else {
        if (peso.value == "" || requerimento.innerText == "NEM") {
            ResultadoNEM = 0;
        } else {
            let pesoAnimal = peso.value;
            for (let [key, value] of Object.entries(NEM[requerimento.value - 1])) {
                if (key == "formula") {
                    let nemCalculada = document.getElementById("NemCalculada");
                    let ReqNem = eval(value.replace(",", ".")).toFixed(2);
                    for (let [key, value] of Object.entries(Ajuste[ajuste.value - 1])) {
                        if (key == "formula") {
                            let valor = eval(value.replace(",", ".")).toFixed(0);
                            nemCalculada.innerHTML = valor;
                            ResultadoNEM = valor;
                        }
                    }
                }
            }
        }
    }

    return ResultadoNEM;
}

//#endregion

//#region Função que mostra os valores nutricionais dos alimentos
function CmdInfoAlimento_OnChange(elemento) {
    var identificacao = elemento.value;

    let tbodymn = document.getElementById("table_alimentos_mn");
    while (tbodymn.firstChild) tbodymn.removeChild(tbodymn.firstChild);
    let tbodyms = document.getElementById("table_alimentos_ms");
    while (tbodyms.firstChild) tbodyms.removeChild(tbodyms.firstChild);

    if (identificacao == 0 || identificacao == "0") {

    } else {
        for (let [key, value] of Object.entries(alimentosmn[identificacao - 1])) {
            if (key == "handle" || key == "alimento") { } else {
                if (value == null || value == 0 || value == "0") {

                } else {
                    let tr = document.createElement('tr');
                    let tdnutriente = document.createElement('td');
                    let tdmedida = document.createElement('td');
                    let bnutriente = document.createElement('b');
                    let bmedida = document.createElement('b');

                    tbodymn.appendChild(tr);
                    tr.appendChild(tdnutriente);
                    tr.appendChild(tdmedida);
                    tdnutriente.appendChild(bnutriente);
                    tdmedida.appendChild(bmedida);

                    bnutriente.innerHTML = key; // Atribuindo o contador da tabela atraves de um elemento <b>

                    if (key == "energia") {
                        bmedida.innerHTML = value + " (kcal)"; // Atribuindo o contador da tabela atraves de um elemento <b>
                    } else if (key == "ac_araquidonico" || key == "ac_linoleico6" || key == "fosforo" || key == "potassio" || key == "sodio" || key == "cloro" || key == "magnesio" || key == "cobre" || key == "iodo" || key == "ferro" || key == "manganes" || key == "selenio" || key == "zinco" || key == "enxofre" || key == "tiamina" || key == "riboflavina" || key == "ac_araquidonico" || key == "vit_b6" || key == "niacina" || key == "biotina" || key == "colina" || key == "vit_k" || key == "vit_c" || key == "calcio" || key == "ac_pantotenico") {
                        bmedida.innerHTML = value + " (mg)"; // Atribuindo o contador da tabela atraves de um elemento <b>
                    } else if (key == "ac_folico" || key == "vit_b12") {
                        bmedida.innerHTML = value + " (mcg)"; // Atribuindo o contador da tabela atraves de um elemento <b>
                    } else if (key == "vita" || key == "vitd" || key == "vite") {
                        bmedida.innerHTML = value + " (UI)"; // Atribuindo o contador da tabela atraves de um elemento <b>
                    } else if (key == "umidade" || key == "materiaseca" || key == "proteinabruta" || key == "extratoetereo" || key == "ac_linoleico6" || key == "ac_linoleico6" || key == "fosforo" || key == "fen_tir" || key == "leu" || key == "leu" || key == "leu" || key == "fen" || key == "treo" || key == "val" || key == "his" || key == "iso" || key == "tri" || key == "materiamineral" || key == "carboidratos" || key == "fibrabruta" || key == "met" || key == "lis" || key == "tri" || key == "tri") {
                        bmedida.innerHTML = value + " (%)"; // Atribuindo o contador da tabela atraves de um elemento <b>
                    } else {
                        bmedida.innerHTML = value; // Atribuindo o contador da tabela atraves de um elemento <b>
                    }

                }
            }
        }

        var AlimentoAtual = alimentosms.find(element => element.alimento == alimentosmn[identificacao - 1].handle);

        for (let [key, value] of Object.entries(AlimentoAtual)) {
            if (key == "handle" || key == "alimento" || key == "umidade" || key == "materiaseca") {
            } else {
                if (value == null || value == 0 || value == "0") {
                } else {
                    let tr = document.createElement('tr');
                    let tdnutriente = document.createElement('td');
                    let tdmedida = document.createElement('td');
                    let bnutriente = document.createElement('b');
                    let bmedida = document.createElement('b');

                    tbodyms.appendChild(tr);
                    tr.appendChild(tdnutriente);
                    tr.appendChild(tdmedida);
                    tdnutriente.appendChild(bnutriente);
                    tdmedida.appendChild(bmedida);

                    bnutriente.innerHTML = key; // Atribuindo o contador da tabela atraves de um elemento <b>

                    if (key == "energia") {
                        bmedida.innerHTML = value + " (kcal)"; // Atribuindo o contador da tabela atraves de um elemento <b>
                    } else if (key == "ac_araquidonico" || key == "ac_linoleico6" || key == "fosforo" || key == "potassio" || key == "sodio" || key == "cloro" || key == "magnesio" || key == "cobre" || key == "iodo" || key == "ferro" || key == "manganes" || key == "selenio" || key == "zinco" || key == "enxofre" || key == "tiamina" || key == "riboflavina" || key == "ac_araquidonico" || key == "vit_b6" || key == "niacina" || key == "biotina" || key == "colina" || key == "vit_k" || key == "vit_c" || key == "calcio" || key == "ac_pantotenico") {
                        bmedida.innerHTML = value + " (mg)"; // Atribuindo o contador da tabela atraves de um elemento <b>
                    } else if (key == "ac_folico" || key == "vit_b12") {
                        bmedida.innerHTML = value + " (mcg)"; // Atribuindo o contador da tabela atraves de um elemento <b>
                    } else if (key == "vita" || key == "vitd" || key == "vite") {
                        bmedida.innerHTML = value + " (UI)"; // Atribuindo o contador da tabela atraves de um elemento <b>
                    } else if (key == "umidade" || key == "materiaseca" || key == "proteinabruta" || key == "extratoetereo" || key == "ac_linoleico6" || key == "ac_linoleico6" || key == "fosforo" || key == "fen_tir" || key == "leu" || key == "leu" || key == "leu" || key == "fen" || key == "treo" || key == "val" || key == "his" || key == "iso" || key == "tri" || key == "materiamineral" || key == "carboidratos" || key == "fibrabruta" || key == "met" || key == "lis") {
                        bmedida.innerHTML = value + " (%)"; // Atribuindo o contador da tabela atraves de um elemento <b>
                    } else {
                        bmedida.innerHTML = value; // Atribuindo o contador da tabela atraves de um elemento <b>
                    }

                }
            }
        }
    }
}
//#endregion

//#region Funcoes Alimentos MN

//Limpa o conteudo de todas as Inputs do formulário de nutrientes do Alimento na Materia Natural
function BtnLimparFormularioMN_OnClick() {

    var TxtHandle = document.getElementById("TxtHandle");
    var Txtalimento = document.getElementById("Txtalimento");
    var Txtenergia = document.getElementById("Txtenergia");
    var Txtumidade = document.getElementById("Txtumidade");
    var Txtmateriaseca = document.getElementById("Txtmateriaseca");
    var Txtproteinabruta = document.getElementById("Txtproteinabruta");
    var Txtextratoetereo = document.getElementById("Txtextratoetereo");
    var Txtac_linoleico6 = document.getElementById("Txtac_linoleico6");
    var Txtmateriamineral = document.getElementById("Txtmateriamineral");
    var Txtcalcio = document.getElementById("Txtcalcio");
    var Txtfosforo = document.getElementById("Txtfosforo");
    var Txtpotassio = document.getElementById("Txtpotassio");
    var Txtmagnesio = document.getElementById("Txtmagnesio");
    var Txtcobre = document.getElementById("Txtcobre");
    var Txtferro = document.getElementById("Txtferro");
    var Txtmanganes = document.getElementById("Txtmanganes");
    var Txtzinco = document.getElementById("Txtzinco");
    var Txtcarboidratos = document.getElementById("Txtcarboidratos");
    var Txtfibrabruta = document.getElementById("Txtfibrabruta");
    var Txtenn = document.getElementById("Txtenn");
    var Txtriboflavina = document.getElementById("Txtriboflavina");
    var Txtvit_c = document.getElementById("Txtvit_c");
    var Txttiamina = document.getElementById("Txttiamina");
    var Txtselenio = document.getElementById("Txtselenio");
    var Txtvita = document.getElementById("Txtvita");
    var Txtvite = document.getElementById("Txtvite");
    var Txtvit_b6 = document.getElementById("Txtvit_b6");
    var Txtac_folico = document.getElementById("Txtac_folico");
    var Txtsodio = document.getElementById("Txtsodio");
    var Txthis = document.getElementById("Txthis");
    var Txtiso = document.getElementById("Txtiso");
    var Txtleu = document.getElementById("Txtleu");
    var Txtlis = document.getElementById("Txtlis");
    var Txtmet = document.getElementById("Txtmet");
    var Txtfen = document.getElementById("Txtfen");
    var Txttreo = document.getElementById("Txttreo");
    var Txttri = document.getElementById("Txttri");
    var Txtval = document.getElementById("Txtval");
    var Txtac_araquidonico = document.getElementById("Txtac_araquidonico");
    var Txtac_pantotenico = document.getElementById("Txtac_pantotenico");
    var Txtniacina = document.getElementById("Txtniacina");
    var Txtcolina = document.getElementById("Txtcolina");
    var Txtiodo = document.getElementById("Txtiodo");
    var Txttau = document.getElementById("Txttau");
    var Txtenxofre = document.getElementById("Txtenxofre");
    var Txtvitd = document.getElementById("Txtvitd");
    var Txtvit_b12 = document.getElementById("Txtvit_b12");
    var Txtbiotina = document.getElementById("Txtbiotina");
    var Txtarg = document.getElementById("Txtarg");
    var Txtac_linolenico3 = document.getElementById("Txtac_linolenico3");
    var Txtepa_dha = document.getElementById("Txtepa_dha");
    var Txtfdn = document.getElementById("Txtfdn");
    var Txtfda = document.getElementById("Txtfda");
    var Txtcnf = document.getElementById("Txtcnf");
    var Txtvit_k = document.getElementById("Txtvit_k");
    var Txtcloro = document.getElementById("Txtcloro");
    var Txtmet_cis = document.getElementById("Txtmet_cis");
    var Txtfen_tir = document.getElementById("Txtfen_tir");

    TxtHandle.value = "";
    Txtalimento.value = "";
    Txtenergia.value = "";
    Txtumidade.value = "";
    Txtmateriaseca.value = "";
    Txtproteinabruta.value = "";
    Txtextratoetereo.value = "";
    Txtac_linoleico6.value = "";
    Txtmateriamineral.value = "";
    Txtcalcio.value = "";
    Txtfosforo.value = "";
    Txtpotassio.value = "";
    Txtmagnesio.value = "";
    Txtcobre.value = "";
    Txtferro.value = "";
    Txtmanganes.value = "";
    Txtzinco.value = "";
    Txtcarboidratos.value = "";
    Txtfibrabruta.value = "";
    Txtenn.value = "";
    Txtriboflavina.value = "";
    Txtvit_c.value = "";
    Txttiamina.value = "";
    Txtselenio.value = "";
    Txtvita.value = "";
    Txtvite.value = "";
    Txtvit_b6.value = "";
    Txtac_folico.value = "";
    Txtsodio.value = "";
    Txthis.value = "";
    Txtiso.value = "";
    Txtleu.value = "";
    Txtlis.value = "";
    Txtmet.value = "";
    Txtfen.value = "";
    Txttreo.value = "";
    Txttri.value = "";
    Txtval.value = "";
    Txtac_araquidonico.value = "";
    Txtac_pantotenico.value = "";
    Txtniacina.value = "";
    Txtcolina.value = "";
    Txtiodo.value = "";
    Txttau.value = "";
    Txtenxofre.value = "";
    Txtvitd.value = "";
    Txtvit_b12.value = "";
    Txtbiotina.value = "";
    Txtarg.value = "";
    Txtac_linolenico3.value = "";
    Txtepa_dha.value = "";
    Txtfdn.value = "";
    Txtfda.value = "";
    Txtcnf.value = "";
    Txtvit_k.value = "";
    Txtcloro.value = "";
    Txtmet_cis.value = "";
    Txtfen_tir.value = "";
}

//Botao Cadastrar alimento (Funcao Abilitar Campos e Desativar campos)
function BtnGETnut_CadastrarAlimento_OnClick() {

    document.getElementById("BtnSAVnut_AlimentosMN").style = "display: inline-block;";
    document.getElementById("TxtSAVnut_AlimentosMN").innerHTML = "Salvar";
    document.getElementById("BtnGETnut_CadastrarAlimento").style = "display: none;";
    document.getElementById("BtnGETnut_AlimentosMN").style = "display: none;";
    document.getElementById("BtnCancelarAcao").style = "display: inline-block;";

    LiberarCamposMateriaNatural();
    BtnLimparFormularioMN_OnClick();

}

//Botao Cancelar visibility (Funcao Abilitar campos)
function BtnCancelarAcaoMN_OnClick() {
    document.getElementById("TxtHandle").disabled = true;
    document.getElementById("Txtalimento").disabled = true;
    document.getElementById("Txtenergia").disabled = true;
    document.getElementById("Txtumidade").disabled = true;
    document.getElementById("Txtmateriaseca").disabled = true;
    document.getElementById("Txtproteinabruta").disabled = true;
    document.getElementById("Txtextratoetereo").disabled = true;
    document.getElementById("Txtac_linoleico6").disabled = true;
    document.getElementById("Txtmateriamineral").disabled = true;
    document.getElementById("Txtcalcio").disabled = true;
    document.getElementById("Txtfosforo").disabled = true;
    document.getElementById("Txtpotassio").disabled = true;
    document.getElementById("Txtmagnesio").disabled = true;
    document.getElementById("Txtcobre").disabled = true;
    document.getElementById("Txtferro").disabled = true;
    document.getElementById("Txtmanganes").disabled = true;
    document.getElementById("Txtzinco").disabled = true;
    document.getElementById("Txtcarboidratos").disabled = true;
    document.getElementById("Txtfibrabruta").disabled = true;
    document.getElementById("Txtenn").disabled = true;
    document.getElementById("Txtvit_c").disabled = true;
    document.getElementById("Txttiamina").disabled = true;
    document.getElementById("Txtselenio").disabled = true;
    document.getElementById("Txtvita").disabled = true;
    document.getElementById("Txtvite").disabled = true;
    document.getElementById("Txtvit_b6").disabled = true;
    document.getElementById("Txtac_folico").disabled = true;
    document.getElementById("Txtsodio").disabled = true;
    document.getElementById("Txthis").disabled = true;
    document.getElementById("Txtiso").disabled = true;
    document.getElementById("Txtleu").disabled = true;
    document.getElementById("Txtlis").disabled = true;
    document.getElementById("Txtmet").disabled = true;
    document.getElementById("Txtfen").disabled = true;
    document.getElementById("Txttreo").disabled = true;
    document.getElementById("Txttri").disabled = true
    document.getElementById("Txtval").disabled = true;
    document.getElementById("Txtac_araquidonico").disabled = true;
    document.getElementById("Txtac_pantotenico").disabled = true;
    document.getElementById("Txtniacina").disabled = true;
    document.getElementById("Txtcolina").disabled = true;
    document.getElementById("Txtiodo").disabled = true;
    document.getElementById("Txttau").disabled = true;
    document.getElementById("Txtenxofre").disabled = true;
    document.getElementById("Txtvitd").disabled = true;
    document.getElementById("Txtvit_b12").disabled = true;
    document.getElementById("Txtbiotina").disabled = true;
    document.getElementById("Txtarg").disabled = true;
    document.getElementById("Txtac_linolenico3").disabled = true;
    document.getElementById("Txtepa_dha").disabled = true;
    document.getElementById("Txtfdn").disabled = true;
    document.getElementById("Txtcnf").disabled = true;
    document.getElementById("Txtvit_k").disabled = true;
    document.getElementById("Txtcloro").disabled = true;
    document.getElementById("Txtmet_cis").disabled = true;
    document.getElementById("Txtfen_tir").disabled = true;
    document.getElementById("Txtriboflavina").disabled = true;
    document.getElementById("Txtfda").disabled = true;

    document.getElementById("BtnCancelarAcao").style = "display: none;";
    document.getElementById("BtnSAVnut_AlimentosMN").style = "display: none;";
    document.getElementById("BtnDELnut_AlimentosMN").style = "display: none;";
    document.getElementById("BtnGETnut_CadastrarAlimento").style = "display: inline-block;";
    document.getElementById("BtnGETnut_AlimentosMN").style = "display: inline-block;"; 

    BtnLimparFormularioMN_OnClick();
}

//Propriedade disabled = false
function LiberarCamposMateriaNatural() {
    document.getElementById("TxtHandle").disabled = false;
    document.getElementById("Txtalimento").disabled = false;
    document.getElementById("Txtenergia").disabled = false;
    document.getElementById("Txtumidade").disabled = false;
    document.getElementById("Txtmateriaseca").disabled = false;
    document.getElementById("Txtproteinabruta").disabled = false;
    document.getElementById("Txtextratoetereo").disabled = false;
    document.getElementById("Txtac_linoleico6").disabled = false;
    document.getElementById("Txtmateriamineral").disabled = false;
    document.getElementById("Txtcalcio").disabled = false;
    document.getElementById("Txtfosforo").disabled = false;
    document.getElementById("Txtpotassio").disabled = false;
    document.getElementById("Txtmagnesio").disabled = false;
    document.getElementById("Txtcobre").disabled = false;
    document.getElementById("Txtferro").disabled = false;
    document.getElementById("Txtmanganes").disabled = false;
    document.getElementById("Txtzinco").disabled = false;
    document.getElementById("Txtcarboidratos").disabled = false;
    document.getElementById("Txtfibrabruta").disabled = false;
    document.getElementById("Txtenn").disabled = false;
    document.getElementById("Txtvit_c").disabled = false;
    document.getElementById("Txttiamina").disabled = false;
    document.getElementById("Txtselenio").disabled = false;
    document.getElementById("Txtvita").disabled = false;
    document.getElementById("Txtvite").disabled = false;
    document.getElementById("Txtvit_b6").disabled = false;
    document.getElementById("Txtac_folico").disabled = false;
    document.getElementById("Txtsodio").disabled = false;
    document.getElementById("Txthis").disabled = false;
    document.getElementById("Txtiso").disabled = false;
    document.getElementById("Txtleu").disabled = false;
    document.getElementById("Txtlis").disabled = false;
    document.getElementById("Txtmet").disabled = false;
    document.getElementById("Txtfen").disabled = false;
    document.getElementById("Txttreo").disabled = false;
    document.getElementById("Txttri").disabled = false;
    document.getElementById("Txtval").disabled = false;
    document.getElementById("Txtac_araquidonico").disabled = false;
    document.getElementById("Txtac_pantotenico").disabled = false;
    document.getElementById("Txtniacina").disabled = false;
    document.getElementById("Txtcolina").disabled = false;
    document.getElementById("Txtiodo").disabled = false;
    document.getElementById("Txttau").disabled = false;
    document.getElementById("Txtenxofre").disabled = false;
    document.getElementById("Txtvitd").disabled = false;
    document.getElementById("Txtvit_b12").disabled = false;
    document.getElementById("Txtbiotina").disabled = false;
    document.getElementById("Txtarg").disabled = false;
    document.getElementById("Txtac_linolenico3").disabled = false;
    document.getElementById("Txtepa_dha").disabled = false;
    document.getElementById("Txtfdn").disabled = false;
    document.getElementById("Txtcnf").disabled = false;
    document.getElementById("Txtvit_k").disabled = false;
    document.getElementById("Txtcloro").disabled = false;
    document.getElementById("Txtmet_cis").disabled = false;
    document.getElementById("Txtriboflavina").disabled = false;
    document.getElementById("Txtfen_tir").disabled = false;
    document.getElementById("Txtfda").disabled = false;
}

function PreencherSelectAlimentoFormulacao(ControleSelect) {
    var novoContador = 0;

    while (alimentosmn.length > novoContador) {
        option = document.createElement("option");
        option.value = novoContador + 1;
        option.text = alimentosmn[novoContador].alimento;
        ControleSelect.add(option);
        novoContador++;
    }
}

//#endregion