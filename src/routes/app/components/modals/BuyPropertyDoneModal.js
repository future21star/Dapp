import React, { Component, PropTypes } from 'react';
import style from './style.scss';
import img_profile_pic from 'images/img_profile_pic.jpg';
declare var $;

class BuyPropertyDoneModal extends Component {
	componentWillReceiveProps(nextProps) {
		if(nextProps.show) {
			$('#buy_property_done_modal').modal('show');		}
		else {
			$('#buy_property_done_modal').modal('hide');
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
			<div className="modal custom_modal pop_sell pop_trustee_confirm" id="buy_property_done_modal" role="dialog">
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
			          <h4 className="modal-title modal_icon">
					  <b><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink' x="0px" y="0px" width="305.002px" height="305.002px" viewBox="0 0 305.002 305.002" style={{enableBackground: 'new 0 0 305.002 305.002'}}> <g> <g> <path d="M152.502,0.001C68.412,0.001,0,68.412,0,152.501s68.412,152.5,152.502,152.5c84.089,0,152.5-68.411,152.5-152.5 S236.591,0.001,152.502,0.001z M152.502,280.001C82.197,280.001,25,222.806,25,152.501c0-70.304,57.197-127.5,127.502-127.5 c70.304,0,127.5,57.196,127.5,127.5C280.002,222.806,222.806,280.001,152.502,280.001z"/> <path d="M218.473,93.97l-90.546,90.547l-41.398-41.398c-4.882-4.881-12.796-4.881-17.678,0c-4.881,4.882-4.881,12.796,0,17.678 l50.237,50.237c2.441,2.44,5.64,3.661,8.839,3.661c3.199,0,6.398-1.221,8.839-3.661l99.385-99.385 c4.881-4.882,4.881-12.796,0-17.678C231.269,89.089,223.354,89.089,218.473,93.97z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg><span></span></b>
					  </h4>
					  <h2>Congrats</h2>
			        </div>
					<div className="modal_custom">
						<p className="para_legal para_approval_request">You will see this property in your wallet and on your dashboard as soon as the transaction goes through</p>
					</div>
					<div className="btn_cstm_submit">
						<a href="#">Take me back</a>
					</div>
			      </div>
			      
			    </div>
			  </div>
		);
	}
}

BuyPropertyDoneModal.propTypes = {
  show: PropTypes.bool,
  goToStep: PropTypes.func
};

export default BuyPropertyDoneModal;
