import React, { Component } from 'react';
import MyProperties from 'routes/app/components/MyProperties';
import PropertyForSale from 'routes/app/components/PropertyForSale';

class DexreAddPropertyAddressPopLegal2 extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return(
        <div>
          <div className="property_table">
            <div className="container">
              <MyProperties />
              <PropertyForSale />                  
            </div>
          </div>
        </div>
    )

  }
}

export default DexreAddPropertyAddressPopLegal2

