import React, { Component } from 'react'
import Nav from './Nav'
import Slides from './Slides'
import About from './About'
export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Slides/>
        <About />
      </div>
    )
  }
}
