import React, { Component, PropTypes } from 'react';
import style from './style.scss';
import img_legal_note from "images/img_legal_note.jpg";
declare var $;

class AddPropertyExplainerModal4 extends Component {
	componentWillReceiveProps(nextProps) {
		if(nextProps.show) {
			$('#add_property_explainer_modal_4').modal('show');
		}
		else {
			$('#add_property_explainer_modal_4').modal('hide');
		}
	}

	componentDidMount() {
	}

	goToStep(page_index) {
		this.props.goToStep(page_index);
	}

	render() {
		return (
		  <div className="modal custom_modal pop_sell pop_legal_notice" id="add_property_explainer_modal_4" role="dialog">
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
		          <h4 className="modal-title">Document Title</h4>
		        </div>
				<div className="modal_custom">
					<div className="legal_img"><img src={img_legal_note} /></div>
				</div>
				<div className="notice_custom_btn">
					<div  className="l_btn_notice">
						<a href="#" className="a_pr"><span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink' x="0px" y="0px" width="510px" height="510px" viewBox="0 0 510 510" style={{enableBackground:"new 0 0 510 510"}} > <g> <g id="print"> <path d="M433.5,153h-357C33.15,153,0,186.15,0,229.5v153h102v102h306v-102h102v-153C510,186.15,476.85,153,433.5,153z M357,433.5 H153V306h204V433.5z M433.5,255c-15.3,0-25.5-10.2-25.5-25.5s10.2-25.5,25.5-25.5s25.5,10.2,25.5,25.5S448.8,255,433.5,255z M408,25.5H102v102h306V25.5z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></span>Print</a>
						<a href="#" className="a_download"><span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink' x="0px" y="0px" width="433.5px" height="433.5px" viewBox="0 0 433.5 433.5" style={{enableBackground:"new 0 0 433.5 433.5"}} > <g> <g id="file-download"> <path d="M395.25,153h-102V0h-153v153h-102l178.5,178.5L395.25,153z M38.25,382.5v51h357v-51H38.25z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></span>Download</a>
					</div>
					<div  className="r_btn_notice">
						<a href="#" onClick={ () => { this.props.goToPrevStep(this.props.newProperty)} }>Back</a>
					</div>
				</div>
		      </div>
		    </div>
		  </div>
		);
	}
}

AddPropertyExplainerModal4.propTypes = {
  show: PropTypes.bool,
  newProperty: PropTypes.object,
  goToPrevStep: PropTypes.func
};

export default AddPropertyExplainerModal4;
