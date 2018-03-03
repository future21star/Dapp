import React, { Component } from 'react';
import MyProperties from 'routes/app/components/MyProperties';
import PropertyForSale from 'routes/app/components/PropertyForSale';

class DexreAddPropertyAddress extends Component {

  render() {
    return(
      <div className="app_wrapper">
        <div className="container">
          <div className="form_verifly_new">
            <h2>Interested in buying and selling real estate on the blockchain?</h2>
            <p>Lets get you started! Fill out the form below.</p>
            <div className="form_inner_verifly_wrapper">
              <div className="input_custom">
                <label>Full Name</label>
                <div className="input_wrapper_for_tolltip">
                  <input type="text" name="fname" placeholder="John Doe" />
                  <span className="tooltip_verifly"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink' x="0px" y="0px" viewBox="0 0 330 330" style={{enableBackground:'new 0 0 330 330'}}> <g>   <path d="M165,0C74.019,0,0,74.02,0,165.001C0,255.982,74.019,330,165,330s165-74.018,165-164.999C330,74.02,255.981,0,165,0z      M165,300c-74.44,0-135-60.56-135-134.999C30,90.562,90.56,30,165,30s135,60.562,135,135.001C300,239.44,239.439,300,165,300z"></path>  <path d="M164.998,70c-11.026,0-19.996,8.976-19.996,20.009c0,11.023,8.97,19.991,19.996,19.991    c11.026,0,19.996-8.968,19.996-19.991C184.994,78.976,176.024,70,164.998,70z"></path>   <path d="M165,140c-8.284,0-15,6.716-15,15v90c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-90C180,146.716,173.284,140,165,140z     "></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
                  <div className="tooltip_v">
                    <p>To comply with anti-money-laundering (AML) and know-your-customer (KYC) regulation, we need to know your full name as it appears in your passport or national ID.</p>
                  </div>
                  </span>
                </div>
              </div>
              <div className="input_custom">
                <label>Email</label>
                <div className="input_wrapper_for_tolltip">
                  <input type="text" name="fname" placeholder="Enter your email" />
                  <span className="tooltip_verifly"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink' x="0px" y="0px" viewBox="0 0 330 330" style={{enableBackground:'new 0 0 330 330'}}> <g>   <path d="M165,0C74.019,0,0,74.02,0,165.001C0,255.982,74.019,330,165,330s165-74.018,165-164.999C330,74.02,255.981,0,165,0z      M165,300c-74.44,0-135-60.56-135-134.999C30,90.562,90.56,30,165,30s135,60.562,135,135.001C300,239.44,239.439,300,165,300z"></path>  <path d="M164.998,70c-11.026,0-19.996,8.976-19.996,20.009c0,11.023,8.97,19.991,19.996,19.991    c11.026,0,19.996-8.968,19.996-19.991C184.994,78.976,176.024,70,164.998,70z"></path>   <path d="M165,140c-8.284,0-15,6.716-15,15v90c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-90C180,146.716,173.284,140,165,140z     "></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
                  <div className="tooltip_v">
                    <p>We need a way to communicate with you about the sale. We promise we won't send you any unsolicited email. We hate spam as much as you do.</p>
                  </div>
                  </span>
                </div>
              </div>
              <div className="input_custom">
                <label>Country of Residence</label>
                <div className="input_wrapper_for_tolltip">
                  <input type="text" name="fname" placeholder="Enter Country of Residence" />
                  <span className="tooltip_verifly"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink' x="0px" y="0px" viewBox="0 0 330 330" style={{enableBackground:'new 0 0 330 330'}}> <g>   <path d="M165,0C74.019,0,0,74.02,0,165.001C0,255.982,74.019,330,165,330s165-74.018,165-164.999C330,74.02,255.981,0,165,0z      M165,300c-74.44,0-135-60.56-135-134.999C30,90.562,90.56,30,165,30s135,60.562,135,135.001C300,239.44,239.439,300,165,300z"></path>  <path d="M164.998,70c-11.026,0-19.996,8.976-19.996,20.009c0,11.023,8.97,19.991,19.996,19.991    c11.026,0,19.996-8.968,19.996-19.991C184.994,78.976,176.024,70,164.998,70z"></path>   <path d="M165,140c-8.284,0-15,6.716-15,15v90c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-90C180,146.716,173.284,140,165,140z     "></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
                  <div className="tooltip_v">
                    <p>To fulfill regulatory compliance standards for investor protection, we need to know in what country you reside.</p>
                  </div>
                  </span>
                </div>
              </div>
              <div className="input_custom">
                <label>Street Address</label>
                <div className="input_wrapper_for_tolltip">
                  <input type="text" name="fname" placeholder="Enter Street Address" />
                  <span className="tooltip_verifly"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink' x="0px" y="0px" viewBox="0 0 330 330" style={{enableBackground:'new 0 0 330 330'}}> <g>   <path d="M165,0C74.019,0,0,74.02,0,165.001C0,255.982,74.019,330,165,330s165-74.018,165-164.999C330,74.02,255.981,0,165,0z      M165,300c-74.44,0-135-60.56-135-134.999C30,90.562,90.56,30,165,30s135,60.562,135,135.001C300,239.44,239.439,300,165,300z"></path>  <path d="M164.998,70c-11.026,0-19.996,8.976-19.996,20.009c0,11.023,8.97,19.991,19.996,19.991    c11.026,0,19.996-8.968,19.996-19.991C184.994,78.976,176.024,70,164.998,70z"></path>   <path d="M165,140c-8.284,0-15,6.716-15,15v90c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-90C180,146.716,173.284,140,165,140z     "></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
                  <div className="tooltip_v">
                    <p>To comply with anti-money-laundering (AML) and know-your-customer (KYC) regulation, we need to know your address.</p>
                  </div>
                  </span>
                </div>
              </div>
              <div className="input_2_row">
                <div className="input_l">
                  <div className="input_custom">
                    <label>City</label>
                    <input type="text" name="fname" placeholder="Enter City" />
                  </div>
                </div>
                <div className="input_r">
                  <div className="input_custom">
                    <label>Postal Code / ZIP</label>
                    <input type="text" name="fname" placeholder="Enter Postal Code / ZIP" />
                  </div>
                </div>
              </div>
              <div className="input_custom input_place_black">
                <label>We have detected your ETH address, Is this correct?</label>
                <div className="input_wrapper_for_tolltip">
                  <input type="text" name="fname" placeholder="0x981Cd446Eb490F6CaDa9a09A3fb2BA0FBafb40e8" />
                  <span className="tooltip_verifly"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink' x="0px" y="0px" viewBox="0 0 330 330" style={{enableBackground:'new 0 0 330 330'}}> <g>   <path d="M165,0C74.019,0,0,74.02,0,165.001C0,255.982,74.019,330,165,330s165-74.018,165-164.999C330,74.02,255.981,0,165,0z      M165,300c-74.44,0-135-60.56-135-134.999C30,90.562,90.56,30,165,30s135,60.562,135,135.001C300,239.44,239.439,300,165,300z"></path>  <path d="M164.998,70c-11.026,0-19.996,8.976-19.996,20.009c0,11.023,8.97,19.991,19.996,19.991    c11.026,0,19.996-8.968,19.996-19.991C184.994,78.976,176.024,70,164.998,70z"></path>   <path d="M165,140c-8.284,0-15,6.716-15,15v90c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-90C180,146.716,173.284,140,165,140z     "></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
                  <div className="tooltip_v">
                    <p>We need to whitelist your Ethereum wallet address in our smart contracts so you can participate in the sale</p>
                  </div>
                  </span>
                </div>
              </div>
              <div className="file-btn DexREverifynew_upload"> 
                <span className="btn"><a><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref='http://www.w3.org/1999/xlink' x="0px" y="0px" width="433.5px" height="433.5px" viewBox="0 0 433.5 433.5" style={{enableBackground:'new 0 0 433.5 433.5'}} > <g> <g id="file-upload"> <polygon points="140.25,331.5 293.25,331.5 293.25,178.5 395.25,178.5 216.75,0 38.25,178.5 140.25,178.5    "/> <rect x="38.25" y="382.5" width="357" height="51"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></a><span>Drop your passport or national ID in this box, or click to select file to upload</span></span> 
                <input type="file" name="my_doc_upload" id="my_doc_upload" multiple="false" /> 
              </div>
              <div className="btn_start_dexre">
                <a href="#">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default DexreAddPropertyAddress

