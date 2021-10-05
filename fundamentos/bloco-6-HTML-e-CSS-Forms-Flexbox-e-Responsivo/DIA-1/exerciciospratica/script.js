let estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];


for (let index = 0; index < estados.length; index += 1) {
  let state = estados[index]

  let option = document.createElement('option')
 option.innerText = state;
 let select = document.querySelector('#estados')
 select.appendChild(option)   
};

let input = document.getElementById('date').value;
let send = document.getElementById('send');
send.addEventListener('click', () => {
    if (parseInt(input.substr(0,2)) < 0 || parseInt(input.substr(0,2)) > 31) {
        alert(input.substr(0,2) + ' é uma data invalida');
    } 
    
    if (parseInt(input.substr(3,5)) < 0 || parseInt(input.substr(3,5)) > 12) {
        alert(input.substr(3,5) + ' é uma data invalida');
    } 
        
    if (parseInt(input.substr(6)) < 0){
        alert(input.substr(6) + ' é uma data invalida');
    }
});
    
    