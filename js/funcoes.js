var alimentosmn = [{ nome: "Abóbora moranga crua", energia: "12", umidade: "95.9", materia_seca: "4.1", fibras: "1", enn: "0.9", ca: "3", p: "8" },
    { nome: "Acelga crua", energia: "21", umidade: "93.2", materia_seca: "6.8", fibras: "1.4", enn: "3.6", ca: "43", p: "40" }
];

var alimentosms = [{ nome: "Abóbora moranga crua", energia: "12", umidade: "95.9", materia_seca: "4.1", fibras: "1", enn: "0.9", ca: "3", p: "8" },
    { nome: "Acelga crua", energia: "21", umidade: "93.2", materia_seca: "6.8", fibras: "1.4", enn: "3.6", ca: "43", p: "40" }
];

var contador_global = 1;
var select_generico = document.createElement('select');

console.log(alimentosmn);

function funcaoChange(elemento) {
    var identificacao = elemento.id;
    if (identificacao.substring(11) <= contador_global || identificacao.substring(11) == "") {
        console.log(identificacao.substring(11));
        let geral = 0;
        while (geral < contador_global) {
            if (document.getElementById("AlimentosMN" + geral) != true) {
                let select = document.createElement('select');

                select.id = "AlimentosMN" + contador_global;

                let count = 0;

                if (contador_global == 1) {
                    let ProximosAlimentos = document.getElementById("ProximosAlimentos");
                    document.body.insertBefore(select, ProximosAlimentos);
                    //ProximosAlimentos.appendChild(select);
                } else {
                    let ProximosAlimentos2 = document.createElement('p');
                    ProximosAlimentos2.id = "ProximosAlimentos" + contador_global;
                    let ProximosAlimentos = document.getElementById("ProximosAlimentos" + contador_global);
                    document.body.insertBefore(ProximosAlimentos2, ProximosAlimentos);
                    document.body.insertBefore(select, ProximosAlimentos);
                    //ProximosAlimentos.appendChild(select);
                }

                option = document.createElement("option");
                option.value = 0;
                option.text = "";
                select.add(option);

                while (alimentosmn.length > count) {

                    option = document.createElement("option");
                    option.value = count + 1;
                    option.text = alimentosmn[count].nome;
                    select.add(option);

                    count++;
                }
                select.setAttribute('onchange', 'funcaoChange(this)');
                contador_global++;

                break;
            }
            geral++;
        }
    }
    //console.log("Deu ruim");
}

function carregacombos() {
    var alimento_ = document.getElementById("AlimentosMN");

    let count = 0;

    while (alimentosmn.length > count) {

        option = document.createElement("option");
        option.value = count + 1;
        option.text = alimentosmn[count].nome;
        alimento_.add(option);

        count++;
    }
}