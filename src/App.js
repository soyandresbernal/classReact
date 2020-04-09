import React, { Component } from "react";
import "./App.css";

class Contador extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.contadorInicial);
    this.state = { contador: this.props.contadorInicial };
    setInterval(() => {
      this.setState = { contador: this.state.contador + 1 };
    }, 1000);
  }
  render() {
    return <ContadorNumero numero={this.state.contador} />;
  }
}

Contador.defaultProps = {
  contadorInicial: 0,
};
class ContadorNumero extends Component {
  render() {
    console.log("ContadorNumero render()");
    return <span>{this.props.numero}</span>;
  }
}

class Text extends Component {
  render() {
    const { texto } = this.props;
    return <div>{texto}</div>;
  }
}

//default Props->Inmutable
Text.defaultProps = {
  texto: "text FOREVER",
};

class Vectors extends Component {
  render() {
    const { numbers } = this.props;
    const sumV = numbers.map((n) => n * 2);
    return (
      <div>
        <p>{sumV.join(",")}</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>First Message! REACT JS</h1>
        <Vectors numbers={[2, 4, 5]} />
        <Text />
        <Contador contadorInicial={100} />
      </div>
    );
  }
}
export default App;
