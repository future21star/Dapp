import React, { Component, PropTypes } from 'react';
import style from './style.scss';
declare var $;

class AddPropertyExplainerModal2 extends Component {
	componentWillReceiveProps(nextProps) {
		if(nextProps.show) {
			$('#add_property_explainer_modal_2').modal('show');
		}
		else {
			$('#add_property_explainer_modal_2').modal('hide');
		}
	}

	componentDidMount() {
	}

	render() {
		return (
		  <div className="modal custom_modal pop_sell pop_step_prp" id="add_property_explainer_modal_2" role="dialog">
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
					<p className="title_modal_p">Step 1 of 2</p>
		          <h4 className="modal-title">Enter Your Property Address</h4>
		        </div>
				<div className="modal_custom">
					<div className="input_custom">
						<label>Street Address</label>
						<input 
							type="text" 
							name="fname" 
							placeholder="Enter a Street Address" 
							value={this.props.newProperty.stree_address}
							onChange={ (ev) => this.props.handleNewPropertyChange('stree_address', ev.target.value)}							
						/>
					</div>
					<div className="three_row">
						<div className="input_3">
							<div className="input_custom">
								<label>City</label>
								<input 
									type="text" 
									name="fname" 
									placeholder="Enter City" 
									value={this.props.newProperty.city} 
									onChange={ (ev) => this.props.handleNewPropertyChange('city', ev.target.value)}							
								/>
							</div>
						</div>
						<div className="input_3">
							<div className="input_custom">
								<label>State</label>
								<input 
									type="text" 
									name="fname" 
									placeholder="Enter State" 
									value={this.props.newProperty.state} 
									onChange={ (ev) => this.props.handleNewPropertyChange('state', ev.target.value)}							
								/>
							</div>
						</div>
						<div className="input_3">
							<div className="input_custom">
								<label>ZIP Code</label>
								<input 
									type="text" 
									name="fname" 
									placeholder="Enter Zip Code" 
									value={this.props.newProperty.zip_code} 
									onChange={ (ev) => this.props.handleNewPropertyChange('zip_code', ev.target.value)}							
								/>
							</div>
						</div>
					</div>
					<div className="input_custom">
						<label>Legal description of the property<span className="span_tooltip">
						<div className="pop_tool">
							<h2>Legal description of the property</h2>
							<p>The moment you think of buying a Web Hosting Plan, you know one thing – So many choices, which one to choose? Whether you would want to choose Shared Linux Packages or a Unix Package or do you want to go for a shared windows package or packages reseller for hosting? </p>
						</div>
						</span></label>
						<input 
							type="text" 
							name="fname" 
							placeholder="Enter Legal Description" 
							value={this.props.newProperty.legal_description} 
							onChange={ (ev) => this.props.handleNewPropertyChange('legal_description', ev.target.value)}							
						/>
					</div>
				</div>
				<div className="btn_step_all">
					<a href="#" className="a_back" onClick={ () => { this.props.goToPrevStep(this.props.newProperty)} }>Back</a>
					<a href="#" className="a_prev" onClick={ () => { this.props.goToNextStep(this.props.newProperty)} }>Next</a>
				</div>
		      </div>
		      
		    </div>
		  </div>
		);
	}
}

AddPropertyExplainerModal2.propTypes = {
  show: PropTypes.bool,
  newProperty: PropTypes.object,
  goToPrevStep: PropTypes.func,
  goToNextStep: PropTypes.func,

};

export default AddPropertyExplainerModal2;
