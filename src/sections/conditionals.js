import React, { Component } from "react";

class LoginButton extends Component {
  render() {
    return <button> Start Sesion</button>
  }
}

class LogoutButton extends Component {
  render() {
    return (
      <div>
        <p>Welcome, User !!</p>
        <button> Logout </button>
      </div>
    )
  }
}

export default class ConditionalSection extends Component {
  constructor() {
    super();
    //cambio de estado
    this.state = { isUserLogged: false };
  }

  render() {
    return (
      <div>
        <h4>Conditional rendering</h4>
        {
          this.state.isUserLogged
            ? <LogoutButton />
            : <LoginButton />
        }
      </div>
    );
  }

}