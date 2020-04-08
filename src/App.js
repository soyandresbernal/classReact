import React, { Component } from 'react';
import './App.css';


class Text extends Component {
    render() {
        this.props.texto
        return (
            <div>{texto}</div>
        );
    }
}

//default Props->Inmutable
Text.defaultProps = {
    texto: 'text FOREVER'
}


class Vectors extends Component {
    render() {
        const { numbers } = this.props
        const sumV = numbers.map(n => n * 2)
        return (
            <div>
                <p>{sumV.join(',')}</p>

            </div>
        );
    }
}



class App extends Component {
    render() {
        return (
            <div>
                <h1>First Message! REACT JS</h1>
                <Vectors
                    numbers={[2, 4, 5]}
                />
            </div>
        );
    }
}
export default App