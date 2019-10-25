import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    number: 0
  };

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  };

  handleChange = e => {
    this.setState({
      number: this.state.number + e.target.value
    });
  };
  render() {
    return (
      <div>
        <h2>{this.state.number}</h2>
        <input
          type="text"
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}
