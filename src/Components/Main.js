import React, { Component } from 'react'
import Nav from './Nav'
import Slides from './Slides'
import About from './About'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Router>
          <Route exact path='/' component={About}/>
        </Router>
      </div>
    )
  }
}
