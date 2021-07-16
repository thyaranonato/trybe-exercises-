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
   this.getMoment().format('DD/MM/YYYY');
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

// Source: https://github.com/horprogs/Just-validate
new JustValidate('.js-form', {
  rules: {
    nome: {
      required: true,
      maxLength: 40
    },
    email: {
      required: true,
      maxLength: 50,
      email: true
    },
    cpf: {
      required: true,
      maxLength: 11
    },
    endereco: {
      required: true,
      maxLength: 200
    },
    cidade: {
      required: true,
      maxLength: 28
    },
    estado: {
      required: true
    },
    radio: {
      required: true
    },
    resumo: {
      required: true,
      maxLength: 1000
    },
    cargo: {
      required: true,
      maxLength: 40
    },
    descricao: {
      required: true,
      maxLength: 500
    },
    data: {
      required: true
    },
  },
  alert: {
    nome: {
    required: 'O campo de nome é obrigatório.',
    maxLength: 'O limite é de 40 caracteres.'
    },
    email: {
    required: 'O campo de email é obrigatório.',
    email: 'O email digitado não é válido.',
    maxLength: 'O limite é de 50 caracteres.'
    },
    cpf: {
    required: 'O campo de CPF é obrigatório.',
    maxLength: 'O limite é de 11 caracteres.'
    },
    endereco: {
    required: 'O campo endereço é obrigatório.',
    maxLength: 'O limite é de 200 caracteres.'  
    },
    cidade: {
    required: 'O campo cidade é obrigatório.',
    maxLength: 'O limite é de 28 caracteres.'
    },
    estado: {
    required: 'O campo estado é obrigatório.',
    },
    radio: {
    required: 'A escolha de um item é obrigatória.',
    },
    resumo: {
    required: 'Este campo é obrigatório.',
    maxLength: 'O limite é de 1000 caracteres.'
    },
    cargo: {
    required: 'Este campo é obrigatório.',
    maxLength: 'O limite é de 40 caracteres.'
    },
    descricao: {
    required: 'Este campo é obrigatório.',
    maxLength: 'O limite é de 500 caracteres.'
    },
    data: {
    required: 'Este campo é obrigatório.',
    }
  },
submitHandler: function (form, values) {
  console.log(form, values);
}});
