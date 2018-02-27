import React from 'react';
import style from './style.scss';
import dv_img from 'images/dash_vectore.jpg';

const DexrenoDapp = () => {
  return(
    <div className="app_wrapper">
      <div className="container">
        <div className="web3_wrapper">
          <div className="web3_img"><img src={dv_img} /></div>
          <h2>Web3 Not Detected</h2>
          <p>Watch the video below to learn how to use DexRE or just download MetaMask and get started!</p>
          <div className="btn_metamask"><a href="#">Go Get Metamask</a></div>
          <div className="video_mask">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DexrenoDapp

