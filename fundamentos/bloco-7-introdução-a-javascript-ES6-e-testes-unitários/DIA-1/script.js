// const testingScope = escopo => {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

// const testingScope = (escopo) => 
//    escopo ? `Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !` : `Não devo ser utilizada fora meu escopo (else)`

// console.log(testingScope(true));


// const oddsAndEvens = [13, 3, 4, 10, 7, 2, 12, 24];

// oddsAndEvens.sort((a, b) => a - b)

// console.log(`${oddsAndEvens}`); 


// let result = 1;

// const factor = numberF => {
//   for (let index = 1; index <= numberF; index += 1) {
//    result *= index
//   }
//   return result
// }
// console.log(factor(5));


const factor = numberF => (numberF == 0) ? 1 : (numberF * factor(numberF - 1)); 

  

