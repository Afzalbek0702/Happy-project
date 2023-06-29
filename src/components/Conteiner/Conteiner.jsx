import React, { Component } from 'react'
import './conteiner.css'
import User1 from './img/user(1).png'
import User2 from './img/user(2).png'
import User3 from './img/user(3).png'

export default class Conteiner extends Component {
  render() {
    return (
      <>
        <div className="contTop">
          <h1>Pricing</h1>
          <h2>A plan for every need.</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</h3>

          <div className="contcards">
            <div className="ccard1">
              <h1>Standard</h1>
              <h2>$9</h2>
              <h4>MONTHLY</h4>
              <button>BUY NOW</button>
            </div>

            <div className="ccard2">
              <h1>Premium</h1>
              <h2>$99</h2>
              <h4>ANNUALY</h4>
              <button>BUY NOW</button>
            </div>

            <div className="ccard3">
              <h1>Standard</h1>
              <h2>$149</h2>
              <h4>UP FRONT</h4>
              <button>BUY NOW</button>
            </div>

          </div>
        </div>

        <div className="contBody">
            <h1 className='contBodyh1'>Testimonials</h1>
            <h2 className='contBodyh2'>Don't take our word for it.</h2>
            <h3 className='contBodyh3'>See what our customers are saying.</h3>

            <div className="cobodycard">
              <div className="cbcard1">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus.</h1>
                <img src={User1} alt="" />
                <h2>Pam Beesly</h2>
                <h3>Dunder Mifflin</h3>

              </div>
              <div className="cbcard2">
                <h1>Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam. Aenean porta neque eget consequat fringilla.</h1>
                <img src={User2} alt="" />
                <h2>Michael Scott</h2>
                <h3>Dunder Mifflin</h3>

              </div>
              <div className="cbcard2">
                <h1>Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus.</h1>
                <img src={User3} alt="" />
                <h2>Angels Schrute</h2>
                <h3>Dunder Mifflin</h3>

              </div>
            </div>
        </div>
        
      </>
    )
  }
}
