const botaoSubmit = document.querySelector(".btn-success");
const botaoLimpar = document.querySelector(".btn-warning");

function criarOpcaoEstados() {
  let estados = document.getElementById('estado');
  let opcoesDeEstado = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'] 
  
  for (let index = 0; index < opcoesDeEstado.length; index += 1) {
    let criandoOption = document.createElement('option');
    estados.appendChild(criandoOption).innerText = opcoesDeEstado[index];
    estados.appendChild(criandoOption).value = opcoesDeEstado[index];
  }
}
criarOpcaoEstados();

// Source: https://github.com/Pikaday/Pikaday
let picker = new Pikaday({
  field: document.getElementById('data-inicio'),
  format: 'DD/MM/YYYY',
  onselect: function() {
    console.log(this.getMoment().format('DD/MM/YYYY'));
  }
});

function limpar() {
  let limparInputs = document.querySelectorAll('input');
  let areaDeTexto = document.querySelector('textarea');

  for (let index = 0; index <limparInputs.length; index += 1) {
    let inputUsuario = limparInputs[index];
    inputUsuario.value= "";
    areaDeTexto.value= "";
  }
}
botaoLimpar.addEventListener("click", limpar);
