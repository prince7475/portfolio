import React, { Component } from 'react'
import Nav from './Nav'
import Slides from './Slides'

//All Pages
import About from './AboutMe/About'
import Education from './AboutMe/Education'
import Experience from './AboutMe/Experience'
import Projects from './MyProjects/Projects'
import AcMain from './Academy/AcMain'
import Login from './Forms/Login'
import SignUp from './Forms/SignUp'
//

import {
  HashRouter as Router,
  Route, 
  Link,
  Switch
} from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Router>
          <Switch>
          <Route exact path='/' component={About}/>
          <Route exact path='/Projects' component={Projects}/>
          <Route exact path='/Academy' component={AcMain}/>
          <Route exact path='/Login' component={Login}/>
          <Route exact path='/Signup' component={SignUp}/>
          </Switch>
        </Router>
      </div>
    )
  }
}
