import React, { Component, PropTypes } from 'react';
import style from './style.scss';
import img_profile_pic from 'images/img_profile_pic.jpg';
declare var $;

class BuyPropertyForSaleModal extends Component {
	componentWillReceiveProps(nextProps) {
		if(nextProps.show) {
			$('#buy_property_for_sale_modal').modal('show');
		}
		else {
			$('#buy_property_for_sale_modal').modal('hide');
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
			<div className="modal custom_modal pop_sell pop_sell_discription pop_chat_modal" id="buy_property_for_sale_modal" role="dialog">
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
			        </div>
					<div className="modal_custom">
						<div className="content_property">
							<div className="profile_cstm">
								<img src={img_profile_pic} />
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
							<h6>Description</h6>
							<p>A “legal” description of property identifies the particular parameters of a piece of a property and is a critical component of sales contracts, deeds, and mortgages. These legal descriptions identify property so that it may be conveyed, assessed, and taxed. For these reasons, it is important for property owners or prospective buyers to know how to find the legal description of property.</p>
						</div>
					</div>
					<div className="btn_flow">
						<div className="l_flow">
							<a href="#">Back</a>
						</div>
						<div className="r_flow">							
							<a href="#">One Click Buy</a>
						</div>
					</div>
			      </div>
			    </div>
				<div className="modal-dialog">
			<div className="forth_left_listing">
									<h6 className="head_h6">Comments<span className="right_side">49 comments</span></h6>
									<div className="comment_area_action">
										<div className="comment_box_inner">
											<div className="comment_pic"><span></span></div>
											<textarea>Write a Comment ...</textarea>
										</div>
										<div className="text_btn"><a href="" className="a_comment">Comment</a></div>    
									</div>
									<div className="reply_comment">
										<h6 className="commnet_head">Gregory Coleman<span>12 Feb 2018</span></h6>
										<div className="comment_box_inner">
											<div className="comment_pic"><span></span></div>
											<p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic,</p>
										</div>
										<div className="social"><a href="" className="thumb_down"><svg width="13px" height="12px" viewBox="0 0 13 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink'>  <desc>Created with Sketch.</desc> <defs></defs> <g id="Web-Application" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="LiquidRe-–-IREO-Listing" transform="translate(-378.000000, -1702.000000)" fill-rule="nonzero" fill="#FF3F34"> <g id="Detail" transform="translate(250.000000, 83.000000)"> <g id="Comments" transform="translate(0.000000, 1189.000000)"> <g id="Comment" transform="translate(24.000000, 270.000000)"> <g id="Field" transform="translate(104.000000, 46.000000)"> <g id="Thumbs" transform="translate(0.000000, 114.000000)"> <path d="M10.6363647,7.199988 L13,7.199988 L13,0 L10.6363647,0 L10.6363647,7.199988 Z M8.27272942,0 L2.95454411,0 C2.46527161,0 2.04573225,0.301794754 1.86608415,0.73198383 L0.0833122349,4.96384241 C0.0313240767,5.09878275 0,5.24578311 0,5.3999835 L0,6.54898637 L0,6.5999865 C0,7.26298816 0.528857487,7.7999895 1.18181764,7.7999895 L4.91340686,7.7999895 L4.34969166,10.5413964 C4.33728848,10.6026565 4.33017985,10.6655967 4.33017985,10.7310568 C4.33017985,10.9794574 4.4294348,11.204458 4.59018564,11.3670584 L5.21654308,12 L9.1082745,8.04839012 C9.32218349,7.83118958 9.45454707,7.53118883 9.45454707,7.199988 L9.45454707,1.200003 C9.45454707,0.537595344 8.92509276,0 8.27272942,0 Z" id="Shape"></path> </g> </g> </g> </g> </g> </g> </g> </svg></a>
										<a href="" className="thumb_up"> <svg width="13px" height="12px" viewBox="0 0 13 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink'>  <desc>Created with Sketch.</desc> <defs></defs> <g id="Web-Application" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="LiquidRe-–-IREO-Listing" transform="translate(-407.000000, -1702.000000)" fill-rule="nonzero" fill="#05C46B"> <g id="Detail" transform="translate(250.000000, 83.000000)"> <g id="Comments" transform="translate(0.000000, 1189.000000)"> <g id="Comment" transform="translate(24.000000, 270.000000)"> <g id="Field" transform="translate(104.000000, 46.000000)"> <g id="Thumbs" transform="translate(0.000000, 114.000000)"> <path d="M42,5.40001449 C42,4.73702493 41.4711366,4.20001167 40.8181824,4.20001167 L37.0865931,4.20001167 L37.6503202,1.45862323 C37.6627292,1.39739308 37.6698202,1.33440494 37.6698202,1.26899878 C37.6698202,1.0205982 37.5705475,0.79559767 37.4098203,0.632997288 L36.7834569,0 L32.8917255,3.95161109 C32.6778165,4.1688056 32.5454529,4.4688063 32.5454529,4.80001308 L32.5454529,10.7999972 C32.5454529,11.4624587 33.0749072,12 33.7272706,12 L39.0454559,12 C39.5347284,12 39.9542737,11.6982593 40.1339099,11.2680583 L41.9166819,7.03618834 C41.9686818,6.90124802 42,6.75424767 42,6.59998731 L42,5.45104461 L42,5.40001449 Z M29,12 L31.3636353,12 L31.3636353,4.80001308 L29,4.80001308 L29,12 Z" id="Shape"></path> </g> </g> </g> </g> </g> </g> </g> </svg></a>
										<a href="#" className="reply_click">Reply<svg width="12px" height="10px" viewBox="0 0 12 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink'>  <desc>Created with Sketch.</desc> <defs></defs> <g id="Web-Application" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="LiquidRe-–-IREO-Listing" transform="translate(-489.000000, -1703.000000)" fill-rule="nonzero" fill="#1875F0"> <g id="Detail" transform="translate(250.000000, 83.000000)"> <g id="Comments" transform="translate(0.000000, 1189.000000)"> <g id="Comment" transform="translate(24.000000, 270.000000)"> <g id="Field" transform="translate(104.000000, 46.000000)"> <g id="Reply" transform="translate(66.000000, 112.000000)"> <path d="M49.6666667,5.66666667 L49.6666667,3 L45,7.66666667 L49.6666667,12.3333333 L49.6666667,9.6 C53,9.6 55.3333333,10.6666667 57,13 C56.3333333,9.66666667 54.3333333,6.33333333 49.6666667,5.66666667 Z" id="Shape"></path> </g> </g> </g> </g> </g> </g> </g> </svg></a>
										</div>  
									</div>
									<div className="reply_comment">
										<h6 className="commnet_head">Jimmy Collins<span>18 Feb 2018</span></h6>
										<div className="comment_box_inner">
											<div className="comment_pic"><span></span></div>
											<p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy</p>
										</div>
										<div className="social"><a href="" className="thumb_down"><svg width="13px" height="12px" viewBox="0 0 13 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink'>  <desc>Created with Sketch.</desc> <defs></defs> <g id="Web-Application" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="LiquidRe-–-IREO-Listing" transform="translate(-378.000000, -1702.000000)" fill-rule="nonzero" fill="#FF3F34"> <g id="Detail" transform="translate(250.000000, 83.000000)"> <g id="Comments" transform="translate(0.000000, 1189.000000)"> <g id="Comment" transform="translate(24.000000, 270.000000)"> <g id="Field" transform="translate(104.000000, 46.000000)"> <g id="Thumbs" transform="translate(0.000000, 114.000000)"> <path d="M10.6363647,7.199988 L13,7.199988 L13,0 L10.6363647,0 L10.6363647,7.199988 Z M8.27272942,0 L2.95454411,0 C2.46527161,0 2.04573225,0.301794754 1.86608415,0.73198383 L0.0833122349,4.96384241 C0.0313240767,5.09878275 0,5.24578311 0,5.3999835 L0,6.54898637 L0,6.5999865 C0,7.26298816 0.528857487,7.7999895 1.18181764,7.7999895 L4.91340686,7.7999895 L4.34969166,10.5413964 C4.33728848,10.6026565 4.33017985,10.6655967 4.33017985,10.7310568 C4.33017985,10.9794574 4.4294348,11.204458 4.59018564,11.3670584 L5.21654308,12 L9.1082745,8.04839012 C9.32218349,7.83118958 9.45454707,7.53118883 9.45454707,7.199988 L9.45454707,1.200003 C9.45454707,0.537595344 8.92509276,0 8.27272942,0 Z" id="Shape"></path> </g> </g> </g> </g> </g> </g> </g> </svg></a>
										<a href="" className="thumb_up"> <svg width="13px" height="12px" viewBox="0 0 13 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink'>  <desc>Created with Sketch.</desc> <defs></defs> <g id="Web-Application" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="LiquidRe-–-IREO-Listing" transform="translate(-407.000000, -1702.000000)" fill-rule="nonzero" fill="#05C46B"> <g id="Detail" transform="translate(250.000000, 83.000000)"> <g id="Comments" transform="translate(0.000000, 1189.000000)"> <g id="Comment" transform="translate(24.000000, 270.000000)"> <g id="Field" transform="translate(104.000000, 46.000000)"> <g id="Thumbs" transform="translate(0.000000, 114.000000)"> <path d="M42,5.40001449 C42,4.73702493 41.4711366,4.20001167 40.8181824,4.20001167 L37.0865931,4.20001167 L37.6503202,1.45862323 C37.6627292,1.39739308 37.6698202,1.33440494 37.6698202,1.26899878 C37.6698202,1.0205982 37.5705475,0.79559767 37.4098203,0.632997288 L36.7834569,0 L32.8917255,3.95161109 C32.6778165,4.1688056 32.5454529,4.4688063 32.5454529,4.80001308 L32.5454529,10.7999972 C32.5454529,11.4624587 33.0749072,12 33.7272706,12 L39.0454559,12 C39.5347284,12 39.9542737,11.6982593 40.1339099,11.2680583 L41.9166819,7.03618834 C41.9686818,6.90124802 42,6.75424767 42,6.59998731 L42,5.45104461 L42,5.40001449 Z M29,12 L31.3636353,12 L31.3636353,4.80001308 L29,4.80001308 L29,12 Z" id="Shape"></path> </g> </g> </g> </g> </g> </g> </g> </svg></a>
										<a href="#" className="reply_click">Reply<svg width="12px" height="10px" viewBox="0 0 12 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink'>  <desc>Created with Sketch.</desc> <defs></defs> <g id="Web-Application" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="LiquidRe-–-IREO-Listing" transform="translate(-489.000000, -1703.000000)" fill-rule="nonzero" fill="#1875F0"> <g id="Detail" transform="translate(250.000000, 83.000000)"> <g id="Comments" transform="translate(0.000000, 1189.000000)"> <g id="Comment" transform="translate(24.000000, 270.000000)"> <g id="Field" transform="translate(104.000000, 46.000000)"> <g id="Reply" transform="translate(66.000000, 112.000000)"> <path d="M49.6666667,5.66666667 L49.6666667,3 L45,7.66666667 L49.6666667,12.3333333 L49.6666667,9.6 C53,9.6 55.3333333,10.6666667 57,13 C56.3333333,9.66666667 54.3333333,6.33333333 49.6666667,5.66666667 Z" id="Shape"></path> </g> </g> </g> </g> </g> </g> </g> </svg></a>
										</div>  
									</div>
			</div></div>
				
			  </div>


		);
	}
}

BuyPropertyForSaleModal.propTypes = {
  show: PropTypes.bool,
  goToStep: PropTypes.func
};

export default BuyPropertyForSaleModal;
