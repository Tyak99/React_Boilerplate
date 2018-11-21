import React from "react";
import tachyons from "tachyons";

const Expense = ({ name, amount }) => {
    return (
        <div className = "b">
            <h1> {name} </h1>
            <p> {amount} </p>
        </div>
    )
}

export default Expense;