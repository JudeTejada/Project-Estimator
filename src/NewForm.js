import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import "./Newform.css";
class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      material: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddExpense({ ...this.state, id: uuidv4() });
    this.setState({ price: 0, material: "" });
  }

  renderSubmitBaseForm() {
    return (
      <form className="Newform" onSubmit={this.handleSubmit}>
        <div className="NewForm-group">
          <label htmlFor="material">Material</label>
          <input
            type="text"
            id="material"
            name="material"
            className="Newform-input"
            placeholder="Wood, Glue, etc"
            value={this.state.material}
            onChange={this.handleChange}
          />
        </div>

        <div className="NewForm-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            className="Newform-input"
            placeholder="5"
            value={this.state.price}
            onChange={this.handleChange}
          />
        </div>
        <div className="Newform-buttons">
          <button
            className="Newform-button-primary"
            disabled={!this.state.material}
          >
            Add
          </button>
        </div>
      </form>
    );
  }

  render() {
    return this.renderSubmitBaseForm();
  }
}

export default NewForm;
