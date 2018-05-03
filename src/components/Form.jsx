import React, { Component, Fragment } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }
  handleInput = e => {
    e.preventDefault();
    const word = e.target.value;
    this.setState({text: word});
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAdding(this.state.text);
    this.setState({text: ''});
  };
  render() {
    return (
      <form className="form-group" onSubmit={this.handleSubmit}>
        <label htmlFor="nameField">Enter Players Name</label>
        <input
          required
          type="text"
          value={this.state.text}
          className="form-control"
          aria-describedby="nameField"
          placeholder="Name"
          onChange={this.handleInput}
        />
        <button type="submit">Go</button>
      </form>
    );
  }
}

export default Form;