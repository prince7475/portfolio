import React, { Component } from 'react'
import background from '../img/background.jpeg';
import prince from '../img/prince.jpeg'
import {
  HashRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
export default class Nav extends Component {
  constructor(props){
    super()
  }

  SignOut = () => {
    console.log("Sign out is clicked")
  }
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
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Academy">Academy</a></li>
          {/* When user log in */}
          <li><a href="#Login">Login</a></li>
          <li><a href="#Signup">Signup</a></li>
          <li onClick={this.SignOut}><a href="#">Logout</a></li>
          


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
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Academy">Academy</a></li>
          <li><a href="#Login">Login</a></li>
          <li><a href="#Signup">Signup</a></li>
          <li onClick={this.SignOut}><a href="#">Logout</a></li>
        </ul>

        </div>
    )
  }
}
