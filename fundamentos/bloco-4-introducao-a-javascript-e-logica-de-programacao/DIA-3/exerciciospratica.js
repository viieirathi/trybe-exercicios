let n = 5;
let imprimeAsterisco = '';
let n1 = n-1;


// for (let index = 0; index < n; index += 1){
//   imprimeAsterisco += '* '
//   }
//   for (let index = 0; index < n; index += 1) {
//     console.log(imprimeAsterisco)
// }


// for (let index = 0; index < n; index += 1) {
//   imprimeAsterisco += '*' 
//   console.log(imprimeAsterisco)
  
// }

for (let index = 0; index < n; index += 1){
for (let index = 0; index < n; index += 1) {
    if (index < n1) {
      imprimeAsterisco += ' ';
      } else {
      imprimeAsterisco += '*'
      }
    }
    console.log(imprimeAsterisco)
    n1 -= 1
    imprimeAsterisco = ''
  }
 