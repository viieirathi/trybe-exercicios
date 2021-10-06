import React from "react";

const conteudos = [
  {
    conteudo: "High Order Functions",
    bloco: 8,
    status: "Aprendido",
  },
  {
    conteudo: "Composicao de Componentes",
    bloco: 11,
    status: "Aprendendo",
  },
  {
    conteudo: "Composicao de Estados",
    bloco: 12,
    status: "Aprenderei",
  },
  {
    conteudo: "Redux",
    bloco: 16,
    status: "Aprenderei",
  },
];

const map = (valor, index) => {
  return (
    <div key={index}>
      <p>O conteúdo é: {valor.conteudo}</p>
      <p>Status: {valor.status}</p>
      <p>Bloco: {valor.bloco}</p>
    </div>
  );
};

const mapeando = conteudos.map((element, index) => map(element, index));

class Content extends React.Component {
  render() {
    return mapeando;
  }
}

export default Content;
