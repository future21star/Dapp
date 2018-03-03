import React, { Component, PropTypes } from 'react';
import style from './style.scss';
import img_profile_pic from 'images/img_profile_pic.jpg';
declare var $;

class TrusteeDownloadNotarizeRecordModal extends Component {
	componentWillReceiveProps(nextProps) {
		if(nextProps.show) {
			$('#trustee_download_notarize_record_modal').modal('show');
		}
		else {
			$('#trustee_download_notarize_record_modal').modal('hide');
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
			<div className="modal fade pop_sell pop_custom_record" id="trustee_download_notarize_record_modal" role="dialog">
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
			          <h4 className="modal-title">Trustee Aproval Requested </h4>
			        </div>
					<div className="modal_custom">
						<div className="dex_step_popup active_step">
							<div className="number_custom_doc"><span>1</span></div>
							<div className="doc_content_dex">
								<h2>Your almost done</h2>
								<p>To get started, download the Trust and the Deed.</p>
								<div className="download_btn"><a href="#">Download</a></div>
							</div>
						</div>
						<div className="dex_step_popup">
							<div className="number_custom_doc"><span>2</span></div>
							<div className="doc_content_dex">
								<h2>Get your documets Notarized</h2>
								<p>It's time for you to get to work! Time to Notarize your documents. The best way to do this in using <a href="#">https://notarize.com</a> If you want to find your own public notary that is fine as well. After you have gotten everything notarized upload the documents below.</p>
								<div className="file-btn file-btn_doc"> 
									<span className="btn">Browse Computer</span> 
									<input type="file" name="my_doc_upload" id="my_doc_upload" multiple="false" />  
								</div>
							</div>
						</div>
					</div>
					<div className="btn_cstm_submit">
						<a href="#">Finish</a>
					</div>
			      </div>
			      
			    </div>
			  </div>
		);
	}
}

TrusteeDownloadNotarizeRecordModal.propTypes = {
  show: PropTypes.bool,
  goToStep: PropTypes.func
};

export default TrusteeDownloadNotarizeRecordModal;
