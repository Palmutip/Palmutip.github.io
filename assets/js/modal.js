var divCrmBenner = document.getElementById('DivCrmBenner');
var modalcrm = document.getElementById('modal-crm');
var fecharModalcrm = document.getElementById('fechar-modal-crm');

var divJera = document.getElementById('DivJera');
var modaljera = document.getElementById('modal-jera');
var fecharModaljera = document.getElementById('fechar-modal-jera');

var divCentraliza = document.getElementById('DivCentraliza');
var modalcentraliza = document.getElementById('modal-centraliza');
var fecharModalcentraliza = document.getElementById('fechar-modal-centraliza');

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