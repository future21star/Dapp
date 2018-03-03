import React, { Component } from 'react';
import MyProperties from 'routes/app/components/MyProperties';
import PropertyForSale from 'routes/app/components/PropertyForSale';

class Dashboard extends Component {

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

export default Dashboard

