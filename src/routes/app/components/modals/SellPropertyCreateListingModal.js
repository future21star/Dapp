import React, { Component, PropTypes } from 'react';
import style from './style.scss';
import img_profile_pic from 'images/img_profile_pic.jpg';
declare var $;

class SellPropertyCreateListingModal extends Component {
	componentWillReceiveProps(nextProps) {
		if(nextProps.show) {
			$('#sell_property_create_listing_modal').modal('show');
		}
		else {
			$('#sell_property_create_listing_modal').modal('hide');
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
		<div className="modal fade pop_sell" id="sell_property_create_listing_modal" role="dialog">
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
		          <h4 className="modal-title">Sell 1234 Main St</h4>
		        </div>
				<div className="modal_custom">
					<div className="input_custom">
						<label>Price In ETH</label>
						<input type="text" name="fname" placeholder="Enter Price">
					</div>
					<div className="input_custom">
						<label>Notes</label>
						<textarea className="" placeholder="Write a note …"></textarea>
					</div>
					<div className="upload_img_custom">
						<div className="up_img"><span></span></div>
						<div className="up_popup_btn"> 
							<div className="btn_upload_verifly">
								<span className="btn"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 	 width="433.5px" height="433.5px" viewBox="0 0 433.5 433.5" style="enable-background:new 0 0 433.5 433.5;" xml:space="preserve" 	> <g> 	<g id="file-upload"> 		<polygon points="140.25,331.5 293.25,331.5 293.25,178.5 395.25,178.5 216.75,0 38.25,178.5 140.25,178.5 		"/> 		<rect x="38.25" y="382.5" width="357" height="51"/> 	</g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>Upload Photo</span> 
								<input type="file" name="my_doc_upload" id="my_doc_upload" multiple="false"> 
							</div>
						</div>
					</div>
				</div>
				<div className="btn_cstm_submit">
					<a href="#">Submit</a>
				</div>
		      </div>
		      
		    </div>
		  </div>
		);
	}
}

SellPropertyCreateListingModal.propTypes = {
  show: PropTypes.bool,
  goToStep: PropTypes.func
};

export default SellPropertyCreateListingModal;
