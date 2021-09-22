const myRemove = require('../exerciciospratica/myRemove')

describe('Requisito 2', () => {
  it('Retorna um array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })
  it('Não retorna o array', () => {
    expect(myRemove([1, 2, 3, 4],3)).not.toEqual([1, 2, 3, 4])
  })
  
})
