import React, { Component } from 'react'
import Header from 'components/Layout/Header';

class AppLayout extends Component {
  render() {
  	console.log('app layout component---------------------------');
    return (
      <div>
		<Header />      
        {this.props.children}
      </div>
    );
  }
}

export default AppLayout
