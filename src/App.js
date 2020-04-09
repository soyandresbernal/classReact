import React, { Component } from 'react';


class App extends Component {
  render() {
    const numbers = [1, 1, 3, 4, 5]
    return (
      <div>
        <h4>List</h4>
        {numbers.map((number, index) => {
          return <p key={index}>I'm number {number}</p>
        })}
      </div>
    );
  }
}
export default App