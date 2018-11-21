import React, { Component } from 'react';
import { connect } from "react-redux";
import Expense from "../../components/Expense/Expense";

class DisplayExpenses extends Component {
    render() {
        const expense = this.props.expenses.map(expense => {
            return <Expense key = {expense.id} name = {expense.name} amount = {expense.amount}/>
        })
        return (
        <div className="App">
            {expense}
        </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        expenses: state.expenses
    }
}

// const mapDispatchToProps = dispatch => {
//     return {

//     }
// }
export default connect(mapStateToProps)(DisplayExpenses);
