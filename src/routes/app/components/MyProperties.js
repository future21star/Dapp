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
      isOpen1: false, 
      isOpen2: false,
      isOpen3: false,
      isOpen4: false,
      isOpenForBuyPropertyBuyerBewareModal: false,
      isOpenForBuyPropertyDoneModal: false,
      isOpenForBuyPropertyFbuyerWarningModal: false,
      isOpenForBuyPropertyForSaleModal: false,
      isOpenForBuyPropertyProcessingModal: false,
      isOpenForCancelSaleModal: false,
      isOpenForDissolveTrustConfirmDissolveModal: false
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
      // isOpenForBuyPropertyBuyerBewareModal: !this.state.isOpenForBuyPropertyBuyerBewareModal,
      // isOpenForBuyPropertyDoneModal: !this.state.isOpenForBuyPropertyDoneModal
      // isOpenForBuyPropertyFbuyerWarningModal: !this.state.isOpenForBuyPropertyFbuyerWarningModal
      // isOpenForBuyPropertyForSaleModal: !this.state.isOpenForBuyPropertyForSaleModal
      // isOpenForBuyPropertyProcessingModal: !this.state.isOpenForBuyPropertyProcessingModal
      // isOpenForCancelSaleModal: !this.state.isOpenForCancelSaleModal
      isOpenForDissolveTrustConfirmDissolveModal: !this.state.DissolveTrustConfirmDissolveModal
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
        <TrusteePickModal show={this.state.isOpenForDissolveTrustConfirmDissolveModal} onClose={this.toggleModal} />
      </div>
    )

  }
}

export default MyProperties

