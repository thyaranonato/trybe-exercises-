const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1: Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
lesson2.turno = 'manhã';
console.log(lesson2);

// Exercício 2: Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
console.log(Object.keys(lesson1));

// Exercício 3: Crie uma função para mostrar o tamanho de um objeto.
console.log(Object.keys(lesson1).length);

// Exercício 4: Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
console.log(Object.values(lesson3));

// Exercício 5: Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. 
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

// Exercício 6: Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalStudents = (lessons) => {
  let total = 0;
  const atualKey = Object.keys(lessons);
  for (index in atualKey) {
    total += lessons[atualKey[index]].numeroEstudantes;
  }
  return total;
};

console.log(totalStudents(allLessons));

// Exercício 7: Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. 
const getValueOfKey = (obj, value) => Object.values(obj)[value];

console.log(getValueOfKey(lesson1, 3));

// Exercício 8: Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. 
const verification = (obj, key, value) => {
  const entrada = Object.entries(obj);
  let verifica = false;
  for (index in entrada) {
    if(entrada[index][0] === key && entrada[index][1] === value) verifica = true;
  }
  return verifica;
};
console.log(verification(lesson3, 'materia', 'Maria Clara'));
console.log(verification(lesson3, 'turno', 'noite'));
