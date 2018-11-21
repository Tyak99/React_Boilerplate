import React, { Component } from 'react';
import './App.css';
import AppLayout from "../AppLayout/AppLayout";
import { BrowserRouter } from "react-router-dom";
// eslint-disable-next-line 
import tachyons from "tachyons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <AppLayout/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
