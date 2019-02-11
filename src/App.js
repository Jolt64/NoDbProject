import React, { Component } from "react";
import "./App.css";
import Dashboard from './components/Dashboard'

class App extends Component {
 

  render() {
    return (
      <div className="App">
      <Dashboard/>
      <footer> Copyright Jolt Cor 2019 </footer>
      </div>
    );
  }
}

export default App;
