import React, { Component } from "react";
import "./App.css";

class Contador extends Component {
  constructor() {
    super();
    this.state = { contador: 1 };
    setInterval(() => {
      this.setState = { contador: this.state.contador + 1 };
    }, 1000);
  }
  render() {
    return <span> {this.state.contador} </span>;
  }
}

class ContadorNumero extends Component {
  render() {
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
        <Contador />
        <ContadorNumero />
      </div>
    );
  }
}
export default App;
