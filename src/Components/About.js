import React, { Component } from 'react'
const FA = require('react-fontawesome')
export default class About extends Component {
  render() {
    return (
      <div>
          <div id='About' className="container section scrollspy">
        <h1>Prince <span className='blue-text text-darken-2'>Donkor</span></h1>
        <h5>(508-799-2670) <span className='blue-text text-darken-2'> Prince.Donkor74@Gmail.com</span> </h5>

        <p className=''>I'm a Computer Science student, with a love for Networking, Software development, machine learning, Designing and analyzing algorithms, I plan to pursue a career in software engineering. This summer I enrolled in Fullstack Academy, a top coding boot camp in New York.</p>

        <p>• Proficient: JavaScript, React, React Native, Redux, Node.js, Express, Sequelize, CSS, HTML5, Git, GitHub, AGILE, Object-Oriented Programming, Functional Programming, Regular Expressions</p>
        <p>• Knowledgeable: PostgreSQL, Webpack, Heroku, Semantic UI, Native Base, Firebase, Cloud Firestore, Progressive Web Apps
        </p>
        <p>• Experience: SQL, TDD (Mocha, Chai, Jasmine), jQuery, Travis CI, Socket.io, OAuth, Authentication</p>
        
        <a href=""><span className='fa-stack fa-lg'>
    <FA name='square-o' stack='2x' />
    <FA name='github' stack='1x' />
  </span></a>        
  <a href=""><span className='fa-stack fa-lg'>
    <FA name='square-o' stack='2x' />
    <FA name='linkedin' stack='1x' />
  </span></a>
  <a href=""><span className='fa-stack fa-lg'>
    <FA name='square-o' stack='2x' />
    <FA name='instagram' stack='1x' />
  </span></a>
        </div>
      <hr/>
      </div>
    )
  }
}
