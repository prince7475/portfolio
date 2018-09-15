import React, { Component } from 'react'
export default class Experience extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
      <div>
          <div id='Experience' className="container animated fadeInLeft delay-10s">
            <h4 className="">EXPERIENCE</h4>
            <div className="row">
                <div className="col s12 l8">
                    <h5 className='Ex-header'>FULL STACK ENGINEER</h5>
                    <h6 className="Ex-Loc grey-text text-darken-1">FULLSTACK ACADEMY OF CODE</h6>
                    <p className='grey-text text-darken-1'>Fullstack Academy is a top-ranked software development school based in New York City. Immersive courses (both full-time & part-time) cover a broad curriculum centered on full-stack JavaScript. Topics taught include Node.js, React, Express, SQL & NoSQL databases, advanced HTML & CSS, and CS fundamentals.</p>
                </div>
                <div className="col s12 l4">
                <p className="date blue-text text-darken-2">Jun 2018 - Sep 2018</p>
                </div>
            </div>

            <div className="row">
                <div className="col s12 l8">
                    <h5 className='Ex-header'>NETWORK ADMINISTRATOR AND WEB DEVELOPER</h5>
                    <h6 className="Ex-Loc grey-text text-darken-1">APPLIED COMMUNICATIONS SERVICES, INC.</h6>
                    <p className='grey-text text-darken-1'>Diagnose, troubleshoot, resolve hardware, software, or other network and system problems, and replace defective components when necessary. Develop databases that support web applications and websites.</p>
                </div>
                <div className="col s12 l4">
                <p className="date blue-text text-darken-2">Jun 2018 - Sep 2018</p>
                </div>
            </div>


            <div className="row">
                <div className="col s12 l8">
                    <h5 className='Ex-header'>NETWORK ADMIN/ TECH SUPPORT INTERN</h5>
                    <h6 className="Ex-Loc grey-text text-darken-1">NATIONAL GRID</h6>
                    <p className='grey-text text-darken-1'>Configure and define parameters for installation or testing of local area network (LAN), wide area network (WAN), hubs, routers, switches, controllers, multiplexers, or related networking equipment. Oversee the daily performance of computer systems.</p>
                </div>
                <div className="col s12 l4">
                <p className="date blue-text text-darken-2">Jun 2018 - Sep 2018</p>
                </div>
            </div>

            <div className="row">
                <div className="col s12 l8">
                    <h5 className='Ex-header'>IT HELP DESK TECHNICIAN</h5>
                    <h6 className="Ex-Loc grey-text text-darken-1">STAPLES</h6>
                    <p className='grey-text text-darken-1'>Install and perform minor repairs to hardware, software, or peripheral equipment, following design or installation specifications.</p>
                </div>
                <div className="col s12 l4">
                <p className="date blue-text text-darken-2">Jun 2018 - Sep 2018</p>
                </div>
            </div>
        </div>
        <hr/>     
    </div>
    )
  }
}
