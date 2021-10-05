// exercicio pratica 1

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// // console.log("Bem-vinda, " + info['personagem']);

// info['recorrente']= 'Sim'

// // console.table(info)

// // for (let key in info) {
// //   console.log(key)
    
// // }

// // for (let key in info) {
// //   console.log(info[key])
// //   };

// let info2 = {
//  personagem: 'Tio Patinhas',
//  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//  nota: 'O último MacPatinhas',
//  recorrente:'Sim',
// };

// for (let key in info) {
//   if(info[key] === info2[key]){
//     console.log('Ambos recorrentes');
      
//   } else {
//     console.log(info[key] + " e " + info2[key])
//   }
   
// }

//exercicio pratica 2 


// function verificaPalindrome(palavra){
  
//  let palindromo = palavra.split('').reverse().join('');

//  if (palavra === palindromo){
//    return true
//  } else {
//    return false
//  }
//  }
//  console.log(verificaPalindrome('ovo'))

// let array = [2, 3, 6, 7, 10, 1];

// function maiorValor(array) {
//   let result = 0;
//   for (let key in array){
//   if(array[key] > array[result])
//   result = key
//   }
//  return result 
// }
// console.log(maiorValor(array));

//exercicio pratica 3

// let array = [2, 4, 6, 7, 10, 0, -3]
// function menorValor(array) {
//   let result = 0;
//   for (let key in array){
//   if(array[key] < array[result])
//   result = key
//   }
//  return result 
// }
// console.log(menorValor(array));

//exercicio 4

// let arrayString = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function stringArray(arrayString) {
//   let result = 0;
//   for (let key in arrayString){
//   if(arrayString[key] < arrayString[result])
//   result = arrayString[key]
//   }
//   return result 
// }
// console.log(stringArray(arrayString));

let numbers = [2, 3, 2, 5, 8, 2, 3];


//crie uma função numbers inteiros
//

function repeatNumbers(numbers){
  let result = 0;
  for (let key in numbers){
    for(let key2 in numbers){
  if(numbers[key] === numbers[result])
  result = numbers[key]
  }
  return result 
}
}
console.log(repeatNumbers(numbers));
