import React, { Component } from 'react';
import LegalDescriptionModal from './modals/LegalDescriptionModal';
import AddPropertyExplainerModal1 from './modals/AddPropertyExplainerModal1';
import AddPropertyExplainerModal2 from './modals/AddPropertyExplainerModal2';
import AddPropertyExplainerModal3 from './modals/AddPropertyExplainerModal3';
import AddPropertyExplainerModal4 from './modals/AddPropertyExplainerModal4';
import BuyPropertyBuyerBewareModal from './modals/BuyPropertyBuyerBewareModal';
import BuyPropertyDoneModal from './modals/BuyPropertyDoneModal';
import BuyPropertyFbuyerWarningModal from './modals/BuyPropertyFbuyerWarningModal';
import BuyPropertyForSaleModal from './modals/BuyPropertyForSaleModal';
import BuyPropertyProcessingModal from './modals/BuyPropertyProcessingModal';
import CancelSaleModal from './modals/CancelSaleModal';
import DissolveTrustConfirmDissolveModal from './modals/DissolveTrustConfirmDissolveModal';
import DissolveTrustPopDissolveModal from './modals/DissolveTrustPopDissolveModal';
import MyPropertiesForSaleModal from './modals/MyPropertiesForSaleModal';
import MyPropertiesInTrustModal from './modals/MyPropertiesInTrustModal';
import MyPropertiesUnfinishedModal from './modals/MyPropertiesUnfinishedModal';
import PropertyAddressModal from './modals/PropertyAddressModal';
import SellPropertyCreateListingModal from './modals/SellPropertyCreateListingModal';
import SellPropertyCreateListingWarningModal from './modals/SellPropertyCreateListingWarningModal';
import TransferRecAddressModal from './modals/TransferRecAddressModal';
import TransferTransferConfirmModal from './modals/TransferTransferConfirmModal';
import TransferTransferWarningModal from './modals/TransferTransferWarningModal';
import TrusteeApprovalModal from './modals/TrusteeApprovalModal';
import TrusteeConfirmModal from './modals/TrusteeConfirmModal';
import TrusteeDownloadNotarizeRecordModal from './modals/TrusteeDownloadNotarizeRecordModal';
import TrusteePickModal from './modals/TrusteePickModal';

class MyProperties extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      modal_flags: {
        flag_add_property_explainer_modal1:false,
        flag_add_property_explainer_modal2:false,
        flag_add_property_explainer_modal3:false,
        flag_add_property_explainer_modal4:false        
      },
      new_property: {
        stree_address: '',
        city: '',
        state: '',
        zip_code: '',
        legal_description: '',
        trustee: '',
        status: '',
      }
    };
  }

  goToStep = (modal_flag_name) => {
    var initial_modal_flags_state = this.state.modal_flags;
    for (var key in initial_modal_flags_state) {
        if (initial_modal_flags_state.hasOwnProperty(key)) {
            if (key === modal_flag_name) {
              initial_modal_flags_state[key] = true;
            }
            else {
              initial_modal_flags_state[key] = false;
            }
        }
    }
    this.setState({
      ...this.state,
      ...initial_modal_flags_state
    });
  }

  toggleModal = () => {
    this.setState({
      ...this.state,
      modal_flags: {
        ...this.state.modal_flags,
        flag_add_property_explainer_modal1: !this.state.modal_flags.flag_add_property_explainer_modal1
      }
    });
  }

  addProperty = () => {
    this.setState({
      ...this.state,
      modal_flags: {
        ...this.state.modal_flags,
        flag_add_property_explainer_modal1: !this.state.modal_flags.flag_add_property_explainer_modal1
      }
    });
  }

  handleNewPropertyChange = (key, value) => {
    var new_property = this.state.new_property;
    new_property[key] = value;
    this.setState({
      ...this.state,
      new_property: new_property
    });
  }

  render() {
    return(
      <div>
        <div className="prp_content">
          <div className="property_sale">
            <h6>My Properties</h6>
            <div className="btn_add"><a href="#" onClick={() => {this.addProperty()}}>Add Property</a></div>
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
        <AddPropertyExplainerModal1 show={this.state.modal_flags.flag_add_property_explainer_modal1} newProperty={this.state.new_property} goToNextStep={(new_property) => {this.goToStep('flag_add_property_explainer_modal2')}} handleNewPropertyChange={ (key, value) => this.handleNewPropertyChange(key, value) }/>
        <AddPropertyExplainerModal2 show={this.state.modal_flags.flag_add_property_explainer_modal2} newProperty={this.state.new_property} goToPrevStep={(new_property) => {this.goToStep('flag_add_property_explainer_modal1')}} goToNextStep={() => {this.goToStep('flag_add_property_explainer_modal3')}} handleNewPropertyChange={ (key, value) => this.handleNewPropertyChange(key, value) } />
        <AddPropertyExplainerModal3 show={this.state.modal_flags.flag_add_property_explainer_modal3} newProperty={this.state.new_property} goToPrevStep={(new_property) => {this.goToStep('flag_add_property_explainer_modal2')}} goToNextStep={() => {this.goToStep('flag_add_property_explainer_modal4')}}  handleNewPropertyChange={ (key, value) => this.handleNewPropertyChange(key, value) }/>
        <AddPropertyExplainerModal4 show={this.state.modal_flags.flag_add_property_explainer_modal4} newProperty={this.state.new_property} goToPrevStep={(new_property) => {this.goToStep('flag_add_property_explainer_modal3')}} handleNewPropertyChange={ (key, value) => this.handleNewPropertyChange(key, value) } />
      </div>
    )

  }
}

export default MyProperties