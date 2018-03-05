import React, { Component, PropTypes } from 'react';
import style from './style.scss';
declare var $;

class AddPropertyExplainerModal3 extends Component {
	componentWillReceiveProps(nextProps) {
		if(nextProps.show) {
			$('#add_property_explainer_modal_3').modal('show');
		}
		else {
			$('#add_property_explainer_modal_3').modal('hide');
		}
	}

	componentDidMount() {
	}

	render() {
		return (
		  <div className="modal custom_modal pop_sell pop_pick_sell" id="add_property_explainer_modal_3" role="dialog">
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
					<p className="title_modal_p">Step 2 of 2</p>
		          <h4 className="modal-title"> Pick a Trustee</h4>
				  <p className="title_text">Only approved Law Firms can act as Trustee's at this time.</p>
				  <p className="title_text_second">Please select one of the approved Trustee's below:</p>
		        </div>
				<div className="modal_custom">
					<ul className="pick_data">
						<li>
							<div className="inner_detail_pick">
								<div className="img_pick"><span></span></div>
								<h6>Jason Smith</h6>
								<p className="para_pick">Smith & Sons LLCP</p>
								<div className="div_rating">
									<span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink' x="0px" y="0px" 	 viewBox="0 0 47.94 47.94" style={{enableBackground: "new 0 0 47.94 47.94"}} > <path style={{fill:"#ED8A19"}} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 	C22.602,0.567,25.338,0.567,26.285,2.486z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></span>
									<span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink' x="0px" y="0px" 	 viewBox="0 0 47.94 47.94" style={{enableBackground: "new 0 0 47.94 47.94"}}> <path style={{fill:"#ED8A19"}} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 	C22.602,0.567,25.338,0.567,26.285,2.486z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></span>
									<span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink' x="0px" y="0px" 	 viewBox="0 0 47.94 47.94" style={{enableBackground: "new 0 0 47.94 47.94"}}> <path style={{fill:"#ED8A19"}} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 	C22.602,0.567,25.338,0.567,26.285,2.486z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></span>
									<span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink' x="0px" y="0px" 	 viewBox="0 0 47.94 47.94" style={{enableBackground: "new 0 0 47.94 47.94"}}> <path style={{fill:"#ED8A19"}} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 	C22.602,0.567,25.338,0.567,26.285,2.486z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></span>
									<span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink' x="0px" y="0px" 	 viewBox="0 0 47.94 47.94" style={{enableBackground: "new 0 0 47.94 47.94"}}> <path style={{fill:"#ED8A19"}} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 	C22.602,0.567,25.338,0.567,26.285,2.486z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></span>
								</div>
								<p className="pick_emial">jason@smthsons.com</p>
								<p className="pick_date">208-704-1418</p>
								<a className="a_visit" href="#">Visit Website</a>
							</div>
						</li>
						<li>
							<div className="inner_detail_pick">
								<div className="img_pick"><span></span></div>
								<h6>Jason Smith</h6>
								<p className="para_pick">Smith & Sons LLCP</p>
								<div className="div_rating">
									<span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink' x="0px" y="0px" 	 viewBox="0 0 47.94 47.94" style={{enableBackground: "new 0 0 47.94 47.94"}} > <path style={{fill:"#ED8A19"}} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 	C22.602,0.567,25.338,0.567,26.285,2.486z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></span>
									<span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink' x="0px" y="0px" 	 viewBox="0 0 47.94 47.94" style={{enableBackground: "new 0 0 47.94 47.94"}} > <path style={{fill:"#ED8A19"}} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 	C22.602,0.567,25.338,0.567,26.285,2.486z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></span>
									<span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink' x="0px" y="0px" 	 viewBox="0 0 47.94 47.94" style={{enableBackground: "new 0 0 47.94 47.94"}} > <path style={{fill:"#ED8A19"}} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 	C22.602,0.567,25.338,0.567,26.285,2.486z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></span>
									<span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink' x="0px" y="0px" 	 viewBox="0 0 47.94 47.94" style={{enableBackground: "new 0 0 47.94 47.94"}} > <path style={{fill:"#ED8A19"}} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 	C22.602,0.567,25.338,0.567,26.285,2.486z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></span>
									<span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink' x="0px" y="0px" 	 viewBox="0 0 47.94 47.94" style={{enableBackground: "new 0 0 47.94 47.94"}} > <path style={{fill:"#ED8A19"}} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 	C22.602,0.567,25.338,0.567,26.285,2.486z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></span>
								</div>
								<p className="pick_emial">jason@smthsons.com</p>
								<p className="pick_date">208-704-1418</p>
								<a className="a_visit" href="#">Visit Website</a>
							</div>
						</li>
						<li>
							<div className="inner_detail_pick">
								<div className="img_pick"><span></span></div>
								<h6>Jason Smith</h6>
								<p className="para_pick">Smith & Sons LLCP</p>
								<div className="div_rating">
									<span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink' x="0px" y="0px" 	 viewBox="0 0 47.94 47.94" style={{enableBackground: "new 0 0 47.94 47.94"}} > <path style={{fill:"#ED8A19"}} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 	C22.602,0.567,25.338,0.567,26.285,2.486z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></span>
									<span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink' x="0px" y="0px" 	 viewBox="0 0 47.94 47.94" style={{enableBackground: "new 0 0 47.94 47.94"}} > <path style={{fill:"#ED8A19"}} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 	C22.602,0.567,25.338,0.567,26.285,2.486z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></span>
									<span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink' x="0px" y="0px" 	 viewBox="0 0 47.94 47.94" style={{enableBackground: "new 0 0 47.94 47.94"}} > <path style={{fill:"#ED8A19"}} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 	C22.602,0.567,25.338,0.567,26.285,2.486z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></span>
									<span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink' x="0px" y="0px" 	 viewBox="0 0 47.94 47.94" style={{enableBackground: "new 0 0 47.94 47.94"}} > <path style={{fill:"#ED8A19"}} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 	C22.602,0.567,25.338,0.567,26.285,2.486z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></span>
									<span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink' x="0px" y="0px" 	 viewBox="0 0 47.94 47.94" style={{enableBackground: "new 0 0 47.94 47.94"}} > <path style={{fill:"#ED8A19"}} d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 	C22.602,0.567,25.338,0.567,26.285,2.486z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></span>
								</div>
								<p className="pick_emial">jason@smthsons.com</p>
								<p className="pick_date">208-704-1418</p>
								<a className="a_visit" href="#">Visit Website</a>
							</div>
						</li>
					</ul>
				</div>
				<div className="btn_step_all">
					<a href="#" className="a_back" onClick={ () => { this.props.goToPrevStep(this.props.newProperty)} }>Back</a>
					<a href="#" className="a_prev" onClick={ () => { this.props.goToNextStep(this.props.newProperty)} }>Finished</a>
				</div>
		      </div>
		      
		    </div>
		  </div>
		);
	}
}

AddPropertyExplainerModal3.propTypes = {
  show: PropTypes.bool,
  newProperty: PropTypes.object,
  goToPrevStep: PropTypes.func,
  goToNextStep: PropTypes.func,
};

export default AddPropertyExplainerModal3;
