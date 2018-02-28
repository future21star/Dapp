import React, { Component } from 'react'
import Header from 'components/Layout/Header';

// Styles
import style from '../assets/styles/style.css';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App
