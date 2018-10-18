import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
      <div className="container">
      <div className="row">
      <div className="col s12 m12 l10">
        <h3>Experience</h3>
      </div>

      <div className="col s12 m12 l2">
      <br />
        <a href="" class="btn-floating waves-effect blue">
            <i class="material-icons">add</i>
        </a>
      </div>


      </div>
        <br />

        {/* One row */}
        <div className="row">
          <div className="col s12 m12 l10"> 
          <h5>FULL STACK ENGINEER </h5>
          <h6 className="grey-text">FULLSTACK ACADEMY OF CODE</h6>
          <p>Fullstack Academy is a top-ranked software development school based in New York City. Immersive courses (both full-time & part-time) cover a broad curriculum centered on full-stack JavaScript. Topics taught include Node.js, React, Express, SQL & NoSQL databases, advanced HTML & CSS, and CS fundamentals.</p>
          </div>
          <div className="col s12 m12 l2">
            <p className="blue-text">Jun 2018 - Sep 2018</p>

          <div>
          <a href="" class="btn-floating  yellow darken-3">
              <i class="material-icons">edit</i>
          </a>
          <a href="" class="btn-floating red ligten-2">
            <i class="material-icons">remove</i>
        </a>
          </div>
            
          </div>
        </div>
          
        {/* end of row  */}

        <div className="row">
          <div className="col s12 m12 l10"> 
          <h5>NETWORK ADMINISTRATOR AND WEB DEVELOPER </h5>
          <h6 className="grey-text">APPLIED COMMUNICATIONS SERVICES, INC.</h6>
          <p>Diagnose, troubleshoot, resolve hardware, software, or other network and system problems, and replace defective components when necessary. Develop databases that support web applications and websites</p>
          </div>
          <div className="col s12 m12 l2">
            <p className="blue-text">Jun 2018 - Sep 2018</p>

          <div>
          <a href="" class="btn-floating  yellow darken-3">
              <i class="material-icons">edit</i>
          </a>
          <a href="" class="btn-floating red ligten-2">
            <i class="material-icons">remove</i>
        </a>
          </div>

          </div>
        </div>
        {/* end of row  */}

        <div className="row">
          <div className="col s12 m12 l10"> 
          <h5>NETWORK ADMIN/ TECH SUPPORT INTERN </h5>
          <h6 className="grey-text">NATIONAL GRID</h6>
          <p>Configure and define parameters for installation or testing of local area network (LAN), wide area network (WAN), hubs, routers, switches, controllers, multiplexers, or related networking equipment. Oversee the daily performance of computer systems.</p>
          </div>
          <div className="col s12 m12 l2">
            <p className="blue-text">Nov 2015 - March 2016</p>

          <div>
          <a href="" class="btn-floating  yellow darken-3">
              <i class="material-icons">edit</i>
          </a>
          <a href="" class="btn-floating red ligten-2">
            <i class="material-icons">remove</i>
        </a>
          </div>

          </div>

        </div>
        {/* end of row  */}

          <div className="row">
          <div className="col s12 m12 l10"> 
          <h5>IT HELP DESK TECHNICIAN </h5>
          <h6 className="grey-text">STAPLES</h6>
          <p>Install and perform minor repairs to hardware, software, or peripheral equipment, following design or installation specifications.</p>
          </div>
          <div className="col s12 m12 l2">
            <p className="blue-text">Jan 2014 - Oct 2015</p>

            <div>
          <a href="" class="btn-floating  yellow darken-3">
              <i class="material-icons">edit</i>
          </a>
          <a href="" class="btn-floating red ligten-2">
            <i class="material-icons">remove</i>
        </a>
          </div>


          </div>
        </div>
        {/* end of row  */}

      </div>
    )
  }
}
