import React, { Component } from 'react';

class PropertyForSale extends Component {
  render() {
    return(
      <div className="prp_content">
        <div className="property_sale">
          <h6>Property for sale</h6>
          <div className="btn_add">
            <div className="form_serch">
            <span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" x="0px" y="0px"   viewBox="0 0 56.966 56.966"> <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92   c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17   s-17-7.626-17-17S14.61,6,23.984,6z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></span>
            <input type="text" name="fname" placeholder="Search By Location" />
          </div>
          </div>
        </div>
        <div className="table_responsive">
          <table className="table custom_table">
            <thead>
              <tr>
                <th>Street Address</th>
                <th>City</th>
                <th>State</th>
                <th>Price</th>
                <th></th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>028 Bart Light</td>
                <td>Post Falls</td>
                <td>ID</td>
                <td>264 ETH</td>
                <td><a className="brn_table_view" href="#">View</a></td>
              </tr>
              <tr>
                <td>06387 Brown Stravenue</td>
                <td>Post Falls</td>
                <td>ID</td>
                <td>264 ETH</td>
                <td><a className="brn_table_view" href="#">View</a></td>
              </tr>
              <tr>
                <td>557 Heaney Rest</td>
                <td>Post Falls</td>
                <td>ID</td>
                <td>264 ETH</td>
                <td><a className="brn_table_view" href="#">View</a></td>
              </tr>
              <tr>
                <td>290 Christiansen Divide</td>
                <td>Post Falls</td>
                <td>ID</td>
                <td>264 ETH</td>
                <td><a className="brn_table_view" href="#">View</a></td>
              </tr>
              <tr>
                <td>307 Andreane Tunnel Suite 644</td>
                <td>Post Falls</td>
                <td>ID</td>
                <td>264 ETH</td>
                <td><a className="brn_table_view" href="#">View</a></td>
              </tr>
              <tr>
                <td>211 Rubie Fork Suite 192</td>
                <td>Post Falls</td>
                <td>ID</td>
                <td>264 ETH</td>
                <td><a className="brn_table_view" href="#">View</a></td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>      
    )

  }
}

export default PropertyForSale

