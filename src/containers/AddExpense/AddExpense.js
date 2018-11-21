import React, { Component } from "react";


class AddExpense extends Component {
    state = {
        name: '',
        amount: ''
    }

    nameEventHandler = (e) => {
        this.setState({name: e.target.value})
    }

    amountEventHandler = e => {
        this.setState({amount: e.target.value})
    }
    render() {
        return (
            <div>
                <input type='text' placeholder ='name' onChange = {this.nameEventHandler}/>
                <input type='number' placeholder = 'amount' onChange = {this.amountEventHandler}/>
                <button> Add Expense </button>
            </div>
        )
    }
}

export default AddExpense;