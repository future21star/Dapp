import React, { Component } from 'react'
import Header from 'components/Layout/Header';

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
