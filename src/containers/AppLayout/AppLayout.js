import React, { Component } from 'react';
import DisplayExpenses from "../DisplayExpenses/DisplayExpenses";
import AddExpense from "../AddExpense/AddExpense";
import Login from "../Login/SignUp";
import Secret from "../../containers/Secret/Secret";
import { Switch, Route, NavLink } from "react-router-dom";
// eslint-disable-next-line 
import tachyons from "tachyons";

class AppLayout extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li><NavLink to = '/'> Home </NavLink></li>
            <li><NavLink to = '/login'> Login </NavLink></li>
            <li><NavLink to = '/secret'> Secret </NavLink></li>
          </ul>
        </nav>
        <Switch>
          <Route path = "/" exact component = {DisplayExpenses}/>
          <Route path = '/add' component = {AddExpense}/>
          <Route path = '/login' component = {Login}/>
          <Route path = '/secret' component = {Secret}/>
        </Switch>
      </div>
    );
  }
}

export default AppLayout; 
