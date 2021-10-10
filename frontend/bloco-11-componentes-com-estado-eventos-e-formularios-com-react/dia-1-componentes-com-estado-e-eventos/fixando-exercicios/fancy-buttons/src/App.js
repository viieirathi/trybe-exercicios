import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    /* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave `state` do `this`, ou seja, ao `this.state`*/
    this.state = {
      numeroDeCliques: 0,
      numeroDeItalos: 0,
      numeroDeDouglas: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleItalo = this.handleItalo.bind(this);
    this.handleDouglas = this.handleDouglas.bind(this);
  }

  handleItalo = () => {
    this.setState(
      (estadoAnterior, _props) => ({
        numeroDeItalos: estadoAnterior.numeroDeItalos + 1,
      }),
      () => {
        console.log(
          `Botao Italo: ${this.classColors(this.state.numeroDeItalos)}`
        );
      }
    );
  };

  handleDouglas = () => {
    this.setState(
      (estadoAnterior, _props) => ({
        numeroDeDouglas: estadoAnterior.numeroDeDouglas + 1,
      }),
      () => {
        console.log(
          `Botao Douglas: ${this.classColors(this.state.numeroDeDouglas)}`
        );
      }
    );
  };
  handleClick = () => {
    /* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
    ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
    React*/
    this.setState(
      (estadoAnterior, _props) => ({
        numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
      }),
      () => {
        console.log(
          `Botao Click: ${this.classColors(this.state.numeroDeCliques)}`
        );
      }
    );
  };

  classColors = (num) => (num % 2 === 0 ? "green" : "white");

  render() {
    const { numeroDeCliques, numeroDeItalos, numeroDeDouglas } = this.state;
    /*Para LER o estado, você pode usar `this.state.chaveDoMeuEstado`*/
    return (
      <div className="App">
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: this.classColors(numeroDeCliques) }}
        >
          Botao: {this.state.numeroDeCliques}
        </button>
        <button
          onClick={this.handleDouglas}
          style={{ backgroundColor: this.classColors(numeroDeDouglas) }}
        >
          Botao:{this.state.numeroDeDouglas}
        </button>
        <button
          onClick={this.handleItalo}
          style={{ backgroundColor: this.classColors(numeroDeItalos) }}
        >
          Botao:{this.state.numeroDeItalos}
        </button>
      </div>
    );
  }
}

export default App;
