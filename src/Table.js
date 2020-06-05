import React, { Component } from "react";
import NewForm from "./NewForm";
import Editform from "./Editform";
import "./Table.css";
import Tablerow from "./Tablerow";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      isEditing: false,
      newExpense: null,
    };
    this.addExpense = this.addExpense.bind(this);
    this.renderExpense = this.renderExpense.bind(this);
    this.removeExpense = this.removeExpense.bind(this);
    this.getTotalSum = this.getTotalSum.bind(this);
    this.getData = this.getData.bind(this);
    this.updateExpense = this.updateExpense.bind(this);
    this.changeFormState = this.changeFormState.bind(this);
  }

  addExpense(expense) {
    //clone the prev expenses and add new expense
    this.setState({ expenses: [...this.state.expenses, expense] });
  }

  removeExpense(id) {
    this.setState({
      expenses: this.state.expenses.filter((e) => e.id !== id),
    });
  }
  getTotalSum() {
    if (this.state.expenses.length >= 0) {
      const sum = this.state.expenses.reduce(
        (total, expense) => total + parseInt(expense.price),
        0
      );

      return sum;
    }
  }
  getData(id) {
    const expenseNew = this.state.expenses.filter((e) => e.id === id);
    this.setState({ isEditing: true, newExpense: expenseNew });
  }
  changeFormState(boolean) {
    this.setState({ isEditing: boolean });
  }
  updateExpense(material, price, id) {
    const updatedExpenses = this.state.expenses.map((expense) => {
      if (expense.id === id) {
        return { ...expense, price, material };
      }
      return expense;
    });
    this.setState({ expenses: updatedExpenses });
  }

  renderExpense() {
    const expensesRow = this.state.expenses.map((t) => (
      <Tablerow
        price={t.price}
        material={t.material}
        key={t.id}
        id={t.id}
        onRemoveExpense={this.removeExpense}
        onGetData={this.getData}
      />
    ));

    return expensesRow;
  }
  render() {
    return (
      <div>
        <h1>Project Estimator</h1>
        {!this.state.isEditing ? (
          <NewForm onAddExpense={this.addExpense} />
        ) : (
          <Editform
            expense={this.state.newExpense}
            updateExpense={this.updateExpense}
            changeState={this.changeFormState}
          />
        )}

        <table>
          <thead>
            <tr className="Table-heading">
              <th>Material</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.renderExpense()}
            <tr>
              <th>Total</th>
              <th>${this.getTotalSum()}</th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
