import React, { Component } from "react";
import "./Newform.css";
class Editform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      material: this.props.expense[0].material,
      price: this.props.expense[0].price,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { expense } = this.props;
    const { material, price } = this.state;

    this.props.updateExpense(material, price, expense[0].id);
    this.props.changeState(false);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  cancelEdit() {
    this.props.changeState(false);
  }
  render() {
    return (
      <form className="Newform" onSubmit={this.handleSubmit}>
        <div className="newForm-group">
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

        <div className="newForm-group">
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
            className="Newform-button-secondary"
            onClick={this.cancelEdit}
          >
            Cancel
          </button>
          <button className="Newform-button-primary">Edit</button>
        </div>
      </form>
    );
  }
}

export default Editform;
