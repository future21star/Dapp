import React, { Component } from 'react';
import PropertyAddressModal from './modals/PropertyAddressModal';
import LegalDescriptionModal from './modals/LegalDescriptionModal';
import AddPropertyExplainerModal1 from './modals/AddPropertyExplainerModal1';
import AddPropertyExplainerModal2 from './modals/AddPropertyExplainerModal2';
import AddPropertyExplainerModal3 from './modals/AddPropertyExplainerModal3';
import AddPropertyExplainerModal4 from './modals/AddPropertyExplainerModal4';

class MyProperties extends Component {
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
        <div className="prp_content">
          <div className="property_sale">
            <h6>My Properties</h6>
            <div className="btn_add"><a onClick={this.toggleModal}>Add Property</a></div>
          </div>
          <div className="table_responsive">
            <table className="table custom_table">
              <thead>
                <tr>
                  <th>Street Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Trustee</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="#" className="a_black">1234 Main St</a></td>
                  <td>Post Falls</td>
                  <td>ID</td>
                  <td>Nick Name</td>
                  <td>On Market</td>
                  <td><a className="brn_table_view" href="#">Manage</a></td>
                </tr>
                <tr>
                  <td><a href="#" className="a_black" data-toggle="modal" data-target="#myModal">1234 Main St</a></td>
                  <td>Post Falls</td>
                  <td>ID</td>
                  <td>Smart Law</td>
                  <td>In Trust</td>
                  <td><a className="brn_table_view" href="#">Manage</a></td>
                </tr>
                <tr>
                  <td><a className="a_black" href="#">1234 Main St</a></td>
                  <td>Post Falls</td>
                  <td>ID</td>
                  <td>Smart Law</td>
                  <td>In Trust</td>
                  <td><a className="brn_table_view" href="#">Manage</a></td>
                </tr>
                <tr>
                  <td>Unfinished</td>
                  <td>Unfinished</td>
                  <td>Unfinished</td>
                  <td>Nick Name</td>
                  <td>Unfinished</td>
                  <td><a className="brn_table_view" href="#">Manage</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>     
        <AddPropertyExplainerModal4  show={this.state.isOpen} onClose={this.toggleModal}/>
      </div>
    )

  }
}

export default MyProperties

