import React, { Component, PropTypes } from 'react';
import style from './style.scss';
declare var $;

class AddPropertyExplainerModal1 extends Component {
	componentWillReceiveProps(nextProps) {
		if(nextProps.show) {
			$('#add_property_explainer_modal_1').modal('show');
		}
		else {
			$('#add_property_explainer_modal_1').modal('hide');
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
		<div className="modal custom_modal pop_sell pop_info" id="add_property_explainer_modal_1" role="dialog">
		    <div className="modal-dialog">
		    
		      <div className="modal-content">
		        <div className="modal-header">
		          <button type="button" className="close" data-dismiss="modal">
		<svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
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
		          <h4 className="modal-title">Hey Zach, lets get your property added to the blockchain!</h4>
		        </div>
				<div className="modal_custom">
					<div className="info_popup_custom">
						<p>In order to add your property to the blockchain it needs to be put into a SmartTrust.</p>
						<p>The SmartTrust has 4 parts - the Trust, the Beneficiary, the Trustee, and the Grantor.</p>
						<p>The Trust is the new "owner" of the property. It acts as a container to hold the property.</p>
						<p>The SmartTrust will automatically identify you as the beneficiary through your ETH wallet address. As the beneficiary of the trust you retain full rights over ownership and use. It also gives you the ability to transfer or sell your property to anyone with an ETH address and avoid many of the fees and hassles of traditional property sales.</p>
						<p>You will pick a Trustee - this is a law firm that specializes in Trust Law. They will be responsible for managing the property. This includes paying taxes and insurance, any HOA fees, etc. They cannot benefit from the property and do not have the power to sell, use, or make changes to the property without the beneficiaries permission.</p>
						<div className="info_works">
							<h2>Here's how it works:</h2>
							<ul>
								<li><span>1</span>Enter the Property Address</li>
								<li><span>2</span>Pick a Trustee</li>
								<li><span>3</span>Notarize the Trust generated for you</li>
								<li><span>4</span>Notarize a Warranty Deed to give ownership of your property to your "Trust"</li>
							</ul>
						</div>
						<p>Keep in mind this will cost .05 ETH and will be paid at the end of the process. This covers recording of the documents.</p>
					</div>
				</div>
				<div className="btn_cstm_submit">
					<a href="#" onClick={() => { this.goToStep(2) }}>Get started</a>
				</div>
		      </div>
		      
		    </div>
		  </div>
		);
	}
}

AddPropertyExplainerModal1.propTypes = {
  show: PropTypes.bool,
  goToStep: PropTypes.func
};

export default AddPropertyExplainerModal1;
