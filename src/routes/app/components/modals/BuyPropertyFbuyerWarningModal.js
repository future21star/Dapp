import React, { Component, PropTypes } from 'react';
import style from './style.scss';
import img_profile_pic from 'images/img_profile_pic.jpg';
declare var $;

class BuyPropertyFbuyerWarningModal extends Component {
	componentWillReceiveProps(nextProps) {
		if(nextProps.show) {
			$('#buy_property_fbuyer_warning_modal').modal();
			$('#buy_property_fbuyer_warning_modal').toggleClass('is-visible');
		}
		else {
			$('#buy_property_fbuyer_warning_modal').removeClass('is-visible');
		}
	}

	goToStep(page_index) {
		this.props.goToStep(page_index);
	}

	componentDidMount() {
	}

	closeModal() {
		$('.modal').modal('toggle');
	}

	render() {
		return (
			<div className="modal custom_modal pop_sell pop_warning pop_warning_transfer" id="buy_property_fbuyer_warning_modal" role="dialog">
			    <div className="modal-dialog">
			      <div className="modal-content">
			        <div className="modal-header">
			          <button type="button" className="close" data-dismiss="modal">
			<svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink'>
			    <desc>Created with Sketch.</desc>
			    <defs></defs>
			    <g id="Web-Application" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
			        <g id="LiquidRe-–-IREO-Listing---Due-Diligence-(Request-Documents)" transform="translate(-1096.000000, -288.000000)" fill-rule="nonzero" fill="#4A4A4A">
			            <g id="Modal-Window" transform="translate(298.000000, 256.000000)">
			                <g id="Close" transform="translate(798.000000, 32.000000)">
			                    <polygon id="Shape" points="14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7"></polygon>
			                </g>
			            </g>
			        </g>
			    </g>
			</svg></button>
			          <h4 className="modal-title">You Are About To Buy <span>1234 Main St</span></h4>
			        </div>
					<div className="modal_custom">
						<div className="tran_detail_modal">
							<label>Transaction Details:</label>
							<p className="para_eth_detail">Price:<span>325 ETH</span></p>
							<p className="para_eth_detail">Escrow Time:<span>3 Days</span></p>
						</div>
						<div className="tran_detail_modal legal_detail_modal">
							<label>Legal Description:</label>
							<p className="">Lots 6, 7, and the South ½ of Lot 3, West 60 feet of South ½ of Lot 4, West 60 feet of Lot 5 and Lot 8, Block 20, OLD SURVEY, Leesville, Vernon Parish, Louisiana. </p>
						</div>
						<div className="only_modal_para_detail">
							<p>This action is permanent and cannot be undone. Before going further make sure that you have done your due diligence and know what you are buying.</p>
						</div>
					</div>
					<div className="btn_step_all">
						<a href="#" className="a_back">Back</a>
						<a href="#" className="a_prev">I still want to buy</a>
					</div>
			      </div>
			      
			    </div>
			  </div>
		);
	}
}

BuyPropertyFbuyerWarningModal.propTypes = {
  show: PropTypes.bool,
  goToStep: PropTypes.func
};

export default BuyPropertyFbuyerWarningModal;
