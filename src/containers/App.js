import React, { Component } from 'react'
import Header from 'components/Layout/Header';

// Styles
import style from '../styles/style.css';
import bootstrap from '../styles/bootstrap.css';
import flexslider from '../styles/flexslider.css';
import responsive from '../styles/responsive.css';

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
