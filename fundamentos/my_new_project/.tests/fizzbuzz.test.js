const myFizzBuzz = require('../exerciciospratica/fizzbuzz');

describe('Requisito 3', () => {
  it('Numero Divisível por 3 e 5 e verifique o retorno esperado', () => {
    expected(myFizzBuzz(3).toBe())
  })
})