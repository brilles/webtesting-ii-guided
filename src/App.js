import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting/Greeting.js';

class App extends Component {
  state = {
    greeting: 'No greeting for you'
  };

  render() {
    return (
      <div className="App">
        <p>Hello world</p>
        <button onClick={this.greet}>Greet</button>
        <button onClick={this.bye}>Bye</button>
        <Greeting msg={this.state.greeting} />
      </div>
    );
  }

  greet = () => {
    this.setState({ greeting: 'Hello XVII' });
  };

  bye = () => {
    this.setState({ greeting: 'Bye XVII' });
  };
}

export default App;
