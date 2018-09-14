import React, { Component } from 'react'
import background from '../img/background.jpeg';
import prince from '../img/prince.jpeg'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="nav-wrapper blue darken-2 ">
      <div className='container'>
        <a href="#" className="brand-logo">Prince Donkor</a>
        <a href="#" className="sidenav-trigger" data-target='mobile-links'>
        <i className="material-icons">menu</i>
        </a>
        <ul className="right hide-on-med-and-down">
          <li><a href="#">About</a></li>
          <li><a href="#">Experience</a></li>
          <li><a href="#">Education</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Admin</a></li>
        </ul>
      </div>
        </nav>

        <ul className="sidenav" id="mobile-links">
          <li>
            <div className="user-view">
              <div className="background">
                <img src={background}/>
              </div>
              <a href="#"><img className='circle' src={prince} alt=""/></a>
              <a href="#"><span className="white-text name">Prince Donkor</span></a>
              <a href="#"><span className="white-text email">prince.donkor74@gmail.com</span></a>
            </div>
          </li>

        <li><a href="#">About</a></li>
          <li><a href="#">Experience</a></li>
          <li><a href="#">Education</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Admin</a></li>
        </ul>

        </div>
    )
  }
}
