import React, { Component, PropTypes } from 'react';
import style from './style.scss';
import img_profile_pic from 'images/img_profile_pic.jpg';
declare var $;

class CancelSaleModal extends Component {
	componentWillReceiveProps(nextProps) {
		if(nextProps.show) {
			$('#cancel_sale_modal').modal('show');
		}
		else {
			$('#cancel_sale_modal').modal('hide');
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
<div className="modal fade pop_sell pop_warning" id="cancel_sale_modal" role="dialog">
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
          <h4 className="modal-title">Are you sure?</h4>
        </div>
		<div className="modal_custom">
			<p className="para_legal para_approval_request">Are you sure you want to take  your home off the market?</p>
		</div>
		<div className="btn_step_all">
			<a href="#" className="a_back">Back</a>
			<a href="#" className="a_prev">Yes</a>
		</div>
      </div>
      
    </div>
  </div>
		);
	}
}

CancelSaleModal.propTypes = {
  show: PropTypes.bool,
  goToStep: PropTypes.func
};

export default CancelSaleModal;
