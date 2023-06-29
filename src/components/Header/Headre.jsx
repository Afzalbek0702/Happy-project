import React, { Component } from "react";
import "./header.css";
import "./card.css";

import Phone3 from "./img/phone (3).png";
import Phone2 from "./img/phone.png";
import Phone4 from "./img/phone (4).png";
import Phone from "./img/phone (2).png";

import Calen from "./img/calendar.png";
import List from "./img/as.png";
import Variod from "./img/variod.png";
import Split from "./img/split.png";
import Up from "./img/up.png";
import Focus from "./img/focus.png";

export default class Headre extends Component {
  render() {
    return (
      <>
        <div className="header_nav">
          <h1 className="headTitle">Features</h1>
          <h2 className="headText">The latest & greatest in phone photography.</h2>
          <div className="cards">
            <div className="card1">
              <div className="phon">
                <img src={Phone3} alt="" />
                <img className="card_logo" src={Calen} alt="" />
              </div>
              <h1 className="card1_title">Calendar view</h1>
              <h3 className="card1_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                scelerisque aliquam odio et faucibus.
              </h3>
            </div>

            <div className="card2">
              <div className="phon">
                <img src={Phone2} alt="" />
                <img className="card_logo" src={List} alt="" />
              </div>
              <h1 className="card2_title">Lists</h1>
              <h3 className="card2_text">
                Dolor sit amet urna turpis. Mauris euismod elit et nisi
                ultrices, ut faucibus orci tincidunt.
              </h3>
            </div>

            <div className="card3">
              <div className="phon">
                <img src={Phone3} alt="" />
                <img className="card_logo" src={Variod} alt="" />
              </div>
              <h1 className="card3_title">Varied type</h1>
              <h3 className="card3_text">
                Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex,
                condimentum dapibus congue.
              </h3>
            </div>

            <div className="card4">
              <div className="phon">
                <img src={Phone4} alt="" />
                <img className="card_logo" src={Split} alt="" />
              </div>
              <h1 className="card4_title">Split-screen</h1>
              <h3 className="card4_text">
                Vestibulum ultrices, orci nec egestas pharetra, ligula est
                semper enim, nec auctor sapien leo nec purus.
              </h3>
            </div>

            <div className="card5">
              <div className="phon">
                <img src={Phone3} alt="" />
                <img className="card_logo" src={Up} alt="" />
              </div>
              <h1 className="card5_title">Uploads</h1>
              <h3 className="card5_text">
                Duis tristique sed lorem a vestibulum. Cras commodo consequat
                orci, in convallis risus egestas non.
              </h3>
            </div>

            <div className="card6">
              <div className="phon">
                <img src={Phone} alt="" />
                <img className="card_logo" src={Focus} alt="" />
              </div>
              <h1 className="card6_title">Focus-mode</h1>
              <h3 className="card6_text">
                Lorem sit amet urna turpis. Mauris euismod elit et nisi
                ultrices, ut faucibus orci tincidunt.
              </h3>
            </div>


          </div>
        </div>
      </>
    );
  }
}
