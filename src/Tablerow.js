import React, { Component } from "react";
import "./Tablerow.css";
class Tablerow extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleRemove(id) {
    this.props.onRemoveExpense(id);
  }
  handleClick(id) {
    this.props.onGetData(id);
  }

  render() {
    const { price, material, id } = this.props;

    return (
      <tr className="Tablerow">
        <th>{material}</th>
        <th>${price}</th>
        <th className="Tablerow-icon">
          <span
            onClick={() => this.handleRemove(id)}
            className="material-icons"
          >
            delete
          </span>
        </th>
        <th className="Tablerow-icon">
          <span onClick={() => this.handleClick(id)} className="material-icons">
            edit
          </span>
        </th>
      </tr>
    );
  }
}

export default Tablerow;
