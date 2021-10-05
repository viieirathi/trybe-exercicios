const soma = require("../exerciciospratica/soma");

describe('Requisito 1', () => {
  it('retorno da soma é 9', () => {
    expect(soma(4, 5)).toBe(9);
  });
  it('retorno da soma é 0', () => {
    expect(soma(0,0)).toBe(0)
  })
  it ('retorno um erro quando paramento for string', () => {
    expect(() => { soma(4,'5') }).toThrow();
  })
  })
  it('retorno não pode ser string e retorna um erro', () => {
    expect(() => { soma(4,'5') }).toThrowError(new Error('parameters must be numbers'));
})
