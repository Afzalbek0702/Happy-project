import React, { Component } from 'react'
import Logo from '../img/logo.jpg'
import Rasm1 from '../img/Frame.png'
import './navbar.css'
export default class Navbar extends Component {
  render() {
    return (
      <>
      <div className='nav'>
          <img className='logo' src={Logo}></img>
        <ul>
          <li><a href="">Features</a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">Testimonials</a></li>
          <li><a href="">Instructions</a></li>
          <li><a href=""></a></li>
          <button className='nav_btn'>Get Template</button>
        </ul>
      </div>
      <div className="nav_body">
        <img src={Logo} />
        <h1>The future of digital photos.</h1>
        <h3>The H(app)y app is the latest & greatest in phone photography. It's available in the App Store right now. Go check it out!</h3>
        <button className='doload'>Download</button>
        <button className='readmore'>Read more</button>
        <div className='phone'>
          <img src={Rasm1} alt="" />
        </div>
      </div>
      </>
    )
  }
}
