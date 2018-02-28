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

    this.state = { 
      isOpen1: false, 
      isOpen2: false,
      isOpen3: false,
      isOpen4: false
    };
  }

  goToStep = (page_index) => {
    console.log("HERE", page_index);
    let initial_state = {
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false,
    };
    switch(page_index) {
      case 1: 
        this.setState({
          ...initial_state,
          isOpen1: true
        });
        break;
      case 2: 
        this.setState({
          ...initial_state,
          isOpen2: true
        });
        break;
      case 3: 
        this.setState({
          ...initial_state,
          isOpen3: true
        });
        break;      
      case 4: 
        this.setState({
          ...initial_state,
          isOpen4: true
        });
        break;      
    }
    
  }

  toggleModal = () => {
    this.setState({
      ...this.state,
      isOpen1: !this.state.isOpen1
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
        <AddPropertyExplainerModal1  show={this.state.isOpen1} onClose={this.toggleModal} goToStep={this.goToStep} />
        <AddPropertyExplainerModal2  show={this.state.isOpen2} onClose={this.toggleModal} goToStep={this.goToStep} />
        <AddPropertyExplainerModal3  show={this.state.isOpen3} onClose={this.toggleModal} goToStep={this.goToStep} />
        <AddPropertyExplainerModal4  show={this.state.isOpen4} onClose={this.toggleModal} goToStep={this.goToStep} />
      </div>
    )

  }
}

export default MyProperties

