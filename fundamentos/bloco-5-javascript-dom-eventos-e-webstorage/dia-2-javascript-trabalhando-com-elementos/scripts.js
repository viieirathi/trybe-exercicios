//1 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

let title = document.createElement("h1");
title.innerHTML = "Exercício 5.2 - JavaScript DOM";
let bodyElement = document.querySelector('body');
bodyElement.appendChild(title);

//2 Adicione a tag main com a classe main-content como filho da tag body;

let corpoElement = document.createElement('main');
corpoElement.className = 'main-content'
bodyElement.appendChild(corpoElement);

//3 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let sessao = document.createElement('section');
sessao.className = 'center-content'
corpoElement.appendChild(sessao);

//4 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let paragraph = document.createElement('p');
paragraph.innerHTML = "Aprendendo"
sessao.appendChild(paragraph);

//5 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let sessao1 = document.createElement('section');
sessao1.className = 'left-content';
corpoElement.appendChild(sessao1);

//6 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let sessao2 = document.createElement('section');
sessao2.className = 'right-content';
corpoElement.appendChild(sessao2);

//7 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;

let image = document.createElement('img');
    image.src = 'https://picsum.photos/200';
    image.className = 'small-image';
    sessao1.appendChild(image);

//8 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let list = document.createElement('ul');

let arrayList = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let nomes of arrayList){
let line = document.createElement('li');
line.innerHTML = nomes;
list.appendChild(line)
}   
sessao2.appendChild(list)

// 9 Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.


let titles1 = document.createElement('h3');
corpoElement.appendChild(titles1);

let titles2 = document.createElement('h3');
corpoElement.appendChild(titles2);

let titles3 = document.createElement('h3');
corpoElement.appendChild(titles3);

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

//1 Adicione a classe title na tag h1 criada;

title.className = 'title';

//2 Adicione a classe description nas 3 tags h3 criada;

titles1.className = 'description';
titles2.className = 'description';
titles3.className = 'description';

//3 Remova a section criado no passo 5 (aquele que possui a  classe left content). Utilize a função .removeChild()

corpoElement.removeChild(sessao1)

//4 Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ; 

// sessao2.style.margin = center;


//5 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde; 

sessao.style.background = "green"

// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8. 

sessao2.removeChild(list);