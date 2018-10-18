import React, { Component } from 'react'
// import Slides from '../Slides'
import resort1 from '../../img/resort1.jpeg'


// About me section
import Educaction from './Education'
import Experience from './Experience'
//

//edits
import EditAboutMe from '../Forms/EditAboutMe'

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <Slides/> */}
        <div>
            <div className="parallax-container">
                <div className="parallax"><img src={resort1} /></div>
            </div>
        </div>
          <div className="container">
        <h1>Prince <span className='blue-text text-darken-2'>Donkor</span></h1>
        <h5>(508-799-2670) <span className='blue-text text-darken-2'> Prince.Donkor74@Gmail.com</span> </h5>

        <p className=''>I'm a Computer Science student, with a love for Networking, Software development, machine learning, Designing and analyzing algorithms, I plan to pursue a career in software engineering. This summer I enrolled in Fullstack Academy, a top coding boot camp in New York.</p>
        {/* To edit about me button*/}
        <a href="" className="btn-floating waves-effect blue">
            <i href="#AboutMe" className="material-icons modal-trigger">add</i>
        </a>
        {/* To edit me form */}
        <EditAboutMe />

        </div>
        <hr/>
        <Experience />
        <hr />
        <Educaction />
      </div>
      

    )
  }
}
