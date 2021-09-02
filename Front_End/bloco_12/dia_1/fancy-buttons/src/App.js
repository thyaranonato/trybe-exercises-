import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);

    this.state = {
      clickButton1: 0,
      clickButton2: 0,
      clickButton3: 0,
    }
  }
  
  handleClick1() {
    // console.log(this)
    // console.log('Clicou no botão 1');
    this.setState((prevState) => ({
      clickButton1: prevState.clickButton1 + 1,
    }));
  }
  
  handleClick2() {
    // console.log(this)
    // console.log('Clicou no botão 2');
    this.setState((prevState) => ({
      clickButton2: prevState.clickButton2 + 1,
    }));
  }
  
  handleClick3() {
    // console.log(this)
    // console.log('Clicou no botão 3');
    this.setState((prevState) => ({
      clickButton3: prevState.clickButton3 + 1,
    }));
  }

  render() {
    return (
      <div>
      <button onClick={this.handleClick1}>Botão 1 | Count = {this.state.clickButton1}</button>
      <button onClick={this.handleClick2}>Botão 2 | Count = {this.state.clickButton2}</button>
      <button onClick={this.handleClick3}>Botão 3 | Count = {this.state.clickButton3}</button>
      </div>
    );
  }
}

export default App;
