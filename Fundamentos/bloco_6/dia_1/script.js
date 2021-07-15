const botaoSubmit = document.querySelector(".botao-submit");

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

// Source: https://pt.stackoverflow.com/questions/91379/como-validar-data-com-angularjs-ou-jquery
botaoSubmit.addEventListener('click', (event) => {
  event.preventDefault()

  let dateString = document.querySelector('#data-inicio').value;
  let regex = "\\d{2}/\\d{2}/\\d{4}";
  let dateParts = dateString.split("/");
  
  let day = parseInt(dateParts[0]);
  let month = parseInt(dateParts[1]);
  let year = parseInt(dateParts[2]);
 
  if(day <= 0 || day > 31) {
    alert ("Dia inválido!") 
  }
    
  if(month < 0 || month > 12) {
    alert ("Mês inválido!")
  }
    
  if(year < 0) {
    alert ("Ano inválido!")
  }

  if (dateParts != regex) {
    alert ("Data com formato inválido")
  }
});
