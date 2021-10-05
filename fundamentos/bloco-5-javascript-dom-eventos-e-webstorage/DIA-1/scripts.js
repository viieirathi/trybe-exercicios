   
//         Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
//         - document.getElementById()
//         - document.getElementsByClassName()
//         - document.getElementsByTagName()
//  Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 
  function future() {
   document.getElementsByTagName("p")[1].innerHTML = "Formado e bem sucedido"
     }
      future()

// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

  function color() {
    document.getElementsByClassName("main-content")[0].style.background = "rgb(76,164,109)"
  }
  color();

//  Crie uma função que mude a cor do quadrado vermelho para branco.

function colorF(){
  document.getElementsByClassName("center-content")[0].style.background = "white"
}
colorF();

//  Crie uma função que corrija o texto da tag <h1>.
function text() {
  document.getElementsByClassName("title")[0].innerHTML = "Exercício 5.1 - JavaScript"
}
text();

//  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function paragraph() {
  let p = document.getElementsByTagName("p");
  for (let index = 0; index < p.length; index += 1){
    p[index].innerHTML = p[index].innerHTML.toUpperCase();
  }
}
  paragraph();

//  Crie uma função que exiba o conteúdo de todas as tags <p> no console.
    function impression() {
      let tags = document.getElementsByTagName("p")
      for (let index in tags){
       console.log(tags[index].innerHTML);
      }
    }    
    impression();

    