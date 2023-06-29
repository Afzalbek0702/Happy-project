import React, { Component } from "react";
import "./Hero.css";
import Rasm1 from './img/herophone.png'
import Rasm2 from './img/Frame.png'
import Rasm3 from './img/phone (6).png'
import Sun from './img/sun.png'
import Moon from './img/moon.png'

export default class Hero extends Component {
  render() {
    return (
      <>
        <div className="heroTop">
          <h1>400+</h1>
          <h1>25+</h1>
          <h1>95%</h1>
          <div className="heroTopText">
            <h2>PICTURE ANALYZED</h2>
            <h2>OPERATION PER MINUTE</h2>
            <h2>ACCURACY</h2>
          </div>
        </div>
        <div className="heroBody">
          <h1>TEchnology</h1>
          <h2>Use H(app)y to give your digital photos some pop.</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</h3>
          <div className="phone">
            <img src={Rasm1} alt="" />
          </div>
        </div>

        <div className="heroBody2">
          <h1>Speed & security</h1>
          <h2>State-of-the-art processing capabilities.</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</h3>
          <div className="herophone">
            <img src={Rasm2} alt="" />
          </div>
        </div>

        <div className="herofoot">
          <h1>Dark mode</h1>
          <h2>Also available in dark.</h2>
          <h3>Don't get blinded when using the H(app)y app at night, just turn off the lights. Lorem ipsum dolor sit amet.</h3>

          <div className="herofootphone">
            <img src={Rasm3} alt="" />
          </div>
            <div className="line"></div>
            <img className="sun" src={Sun} alt="" />
            <img className="moon" src={Moon} alt="" />
        </div>

      </>
    );
  }
}
