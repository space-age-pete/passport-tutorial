import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Signup from "./components/sign-up";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Signup />
        </header>
      </div>
    );
  }
}

export default App;
