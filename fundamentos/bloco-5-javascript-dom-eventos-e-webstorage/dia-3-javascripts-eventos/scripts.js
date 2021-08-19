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

// Escreva seu código abaixo.

function createNumbersDays() {
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const days = document.getElementById('days');

for (let nomes of dezDaysList) {
  let dayNumber = nomes;
  let line = document.createElement('li')
  line.className = 'day'
  line.innerHTML = dayNumber
  days.appendChild(line)
  
  if (line.innerHTML == 24 | line.innerHTML == 25 | line.innerHTML == 31) {
    line.classList.add('holiday')
  } 
  
  if (line.innerHTML == 4 | line.innerHTML == 11 | line.innerHTML == 18 | line.innerHTML == 25) {
    line.classList.add('friday')
  }
  }
}
createNumbersDays();

//  Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function holidays(Feriados){

  let button = document.createElement('button')
  button.id = 'btn-holiday'
  button.innerHTML = Feriados
  let div = document.querySelector('.buttons-container');
  div.appendChild(button)
  
}
holidays('Feriados');

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".

function event() {


}