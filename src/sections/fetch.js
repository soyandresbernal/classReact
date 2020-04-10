import React, { Component } from "react";

class Fetch extends Component {
  state = {
    bpi: {},
  };
  componentDidMount() {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => res.json())
      .then((data) => {
        const { bpi } = data;
        this.setState({ bpi });
      });
  }
  _renderCurrencies() {
    const { bpi } = this.state;
    return Object.keys(bpi);
  }

  render() {
    return (
      <div>
        <h4>Fetch Example</h4>
        {this._renderCurrencies}
      </div>
    );
  }
}

export default Fetch;
