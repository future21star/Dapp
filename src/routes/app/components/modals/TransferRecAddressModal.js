import React, { Component, PropTypes } from 'react';
import style from './style.scss';
import img_profile_pic from 'images/img_profile_pic.jpg';
declare var $;

class TransferRecAddressModal extends Component {
	componentWillReceiveProps(nextProps) {
		if(nextProps.show) {
			$('#transfer_rec_address_modal').modal('show');
		}
		else {
			$('#transfer_rec_address_modal').modal('hide');
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
		<div className="modal fade pop_sell pop_sell_discription" id="transfer_rec_address_modal" role="dialog">
		    <div className="modal-dialog">
		    
		      <div className="modal-content">
		        <div className="modal-header">
		          <button type="button" className="close" data-dismiss="modal">
		<svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
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
		          
		        </div>
				<div className="modal_custom">
					<div className="content_property">
						<div className="profile_cstm">
							<img src="images/img_profile_pic.jpg"/>
						</div>
						<div className="profile_content_right">
							<div className="p_three_col">
								<div className="price_d">
									<h6 className="head_h">Price:</h6>
									<p className="paragraph_p">200 ETH</p>
								</div>
								<div className="add_d">
									<h6 className="head_h">Address:</h6>
									<p className="paragraph_p">1234 Main St, Post Falls, ID 83854</p>
								</div>
							</div>
							<div className="legal_dis">
								<h6>Legal Description</h6>
								<p>Lots 6, 7, and the South ½ of Lot 3, West 60 feet of South ½ of Lot 4, West 60 feet of Lot 5 and Lot 8, Block 20, OLD SURVEY, Leesville, Vernon Parish, Louisiana. </p>
							</div>
						</div>
					</div>
					<div className="property_dis">
						<h6>Trasfer Property to</h6>
						<div className="input_custom">
							<input type="text" name="fname" placeholder="0x981Cd446Eb490F6CaDa9a09A3fb2BA0FBafb40e8">
						</div>
					</div>
				</div>
				<div className="btn_flow">
					<div className="l_flow">
						<a href="#">Back</a>
					</div>
					<div className="r_flow">
						<a href="#">Transfer Property</a>
					</div>
				</div>
		      </div>
		      
		    </div>
		  </div>
		);
	}
}

TransferRecAddressModal.propTypes = {
  show: PropTypes.bool,
  goToStep: PropTypes.func
};

export default TransferRecAddressModal;
