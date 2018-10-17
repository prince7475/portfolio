import React, { Component } from 'react'
// import Slides from '../Slides'
import resort1 from '../../img/resort1.jpeg'


// About me section
import Educaction from './Education'
import Experience from './Experience'
//

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
        
        <a href="#" className='white-text'>
            <i className='fab fa-instgram fa-4x'></i>
        </a>
        </div>
        <hr/>
        <Educaction />
        <Experience />
      </div>
      

    )
  }
}
