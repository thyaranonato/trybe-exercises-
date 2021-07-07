function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Exercício 1: 
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfMonth() {
  let getListOfDays = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');

    if (day === 24 | day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getListOfDays.appendChild(dayItem);
    } else if (day === 4 | day === 11 | day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getListOfDays.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getListOfDays.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      getListOfDays.appendChild(dayItem);
    }
  }
} createDaysOfMonth();

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function holidaysButton(nameOfButton) {
  let classOfButtons = document.querySelector('.buttons-container'); 
  let newButton = document.createElement('button');
  
  newButton.innerHTML = nameOfButton;
  newButton.id = 'btn-holiday';
  classOfButtons.appendChild(newButton);
} 
holidaysButton('Feriados');

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

function clickHolidays() {
  let holidayButton = document.querySelector('#btn-holiday');
  let holidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let newColor = 'purple';

  holidayButton.addEventListener('click', function() {
    for (let index = 0; index < holidays.length; index += 1) {
      if (holidays[index].style.backgroundColor === newColor) {
        holidays[index].style.backgroundColor = backgroundColor;
      } else {
        holidays[index].style.backgroundColor = newColor;
      }
    }
  })
};
clickHolidays();

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function fridayButton(buttonName) {
  let getButtonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');

  newButton.innerHTML = buttonName;
  newButton.id = 'btn-friday';
  getButtonContainer.appendChild(newButton);
}
fridayButton('Sexta-feira');

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function fridayButtonClick(fridayArr) {
  let getFridayDays = document.getElementsByClassName('friday');
  let getFridayButton = document.querySelector('#btn-friday');
  let newText = 'It is Friday!';

  getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < getFridayDays.length; index += 1) {
      if (getFridayDays[index].innerHTML !== newText) {
        getFridayDays[index].innerHTML = newText;
      } else {
        getFridayDays[index].innerHTML = fridayArr[index];
      }
    }
  })
} 
let fridays = [4, 11, 18, 25];
fridayButtonClick(fridays);

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target.
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Event/target

function zoomDay() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '40px';
  })
}

function unZoomDay() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
  })
}
zoomDay();
unZoomDay();

// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function addTask(nameOfTask) {
  let taskOfDiv = document.querySelector('.my-tasks'); 
  let task = document.createElement('span');

  task.innerHTML = nameOfTask;
  taskOfDiv.appendChild(task);
}
addTask('Estudar');

// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function addLegend(color) {
  let taskOfDiv = document.querySelector('.my-tasks'); 
  let legend = document.createElement('div');

  legend.className = 'task';
  legend.style.backgroundColor = color; 
  taskOfDiv.appendChild(legend);
}
addLegend('red');

// Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function addEvento() {
  let evento1 = document.querySelector('.task');
  let selectedTask = document.getElementsByClassName('task selected');
  
  evento1.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }  
  })
} addEvento();

// Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

function changeColorOfDay() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let evento1 = document.querySelector('.task');
  let taskColor = evento1.style.backgroundColor;

  days.addEventListener('click', function(event) {
    let eventColorTarget = event.target.style.color;
    if (selectedTask.length > 0 && eventColorTarget !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventColorTarget === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  })
}
changeColorOfDay();

// Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: keyCode.

function addCompromissos() {
  let getInput = document.querySelector('#task-input');
  let inputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  inputButton.addEventListener('click', function() {
    if (getInput.value.length > 0) {
      let createLi = document.createElement('li');
      createLi.innerText = getInput.value;

      getTaskList.appendChild(createLi);
      getInput.value = '';
    } else {
      alert('Erro: Digite ao menos um caractere!');
    }
  })
  // Source: https://www.w3schools.com/JSREF/event_key_keycode.asp
  getInput.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && getInput.value.length > 0) {
      let createLi = document.createElement('li');
      createLi.innerText = getInput.value;

      getTaskList.appendChild(createLi);
      getInput.value = '';
    }
  })
}
addCompromissos();