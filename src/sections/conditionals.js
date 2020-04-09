import React, { Component } from "react";

class ComponentA extends Component {
  render() {
    return <p>Component A</p>;
  }
}

class ComponentB extends Component {
  render() {
    return <p>Component B</p>;
  }
}

function useConditionalRendering(mostrarA) {
  if (mostrarA) {
    return <ComponentA />;
  } else {
    return <ComponentB />;
  }
}

export default class ConditionalSection extends Component {
  constructor() {
    super();
    this.state = { mostrarA: true };
  }

  render() {
    return (
      <div>
        <h4>Conditional rendering</h4>
        {useConditionalRendering(this.state.mostrarA)}
      </div>
    );
  }
}
