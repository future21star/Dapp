import React, { Component, PropTypes } from 'react';
import style from './style.scss';
declare var $;

class LegalDescriptionModal extends Component {
	componentWillReceiveProps(nextProps) {
		if(nextProps.show) {
			$('.modal').modal('toggle');
		}
		else {
			$('.modal').modal('toggle');
		}
	}

	componentDidMount() {
	}

	closeModal() {
		$('.modal').modal('toggle');
	}

	render() {
		return (
			<div className="modal custom_modal pop_sell" id="myModal" role="dialog">
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
			          <h4 className="modal-title">Legal Descriptions</h4>
			        </div>
					<div className="modal_custom">
						<p className="para_legal">A “legal” description of property identifies the particular parameters of a piece of a property and is a critical component of sales contracts, deeds, and mortgages. These legal descriptions identify property so that it may be conveyed, assessed, and taxed. For these reasons, it is important for property owners or prospective buyers to know how to find the legal description of property.</p>
					</div>
					<div className="btn_cstm_submit">
						<a href="#">OKAY</a>
					</div>
			      </div>
			      
			    </div>
			  </div>
		);
	}
}

LegalDescriptionModal.propTypes = {
  show: PropTypes.bool
};

export default LegalDescriptionModal;
