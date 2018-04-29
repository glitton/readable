import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div class="navbar">
        <a class="active" href="#home">
          Home
        </a>
        <a href="#news">react</a>
        <a href="#contact">Redux</a>
        <a href="#about">Udacity</a>
        <a href="#about">USER</a>
      </div>
    );
  }
}

export default App;
