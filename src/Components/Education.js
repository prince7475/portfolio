import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <div id='Education'>
        <div className="container">
            <h4 className='section-title'>Education</h4>
            <div className="row">
            <div className="col s12 l8">
                    <h5 className='Ex-header'>FULLSTACK ACADEMY OF CODE</h5>
                    <h6 className="Ex-Loc grey-text text-darken-1">12 WEEKS CODING ACADEMY</h6>
                </div>
                <div className="col s12 l4">
                <p className="date blue-text text-darken-2">Jun 2018 - Sep 2018</p>
                </div>
            </div>

        <div className="row">
            <div className="col s12 l8">
                    <h5 className='Ex-header'>WORCESTER TECHNICAL HIGH SCHOOL</h5>
                    <h6 className="Ex-Loc grey-text text-darken-1">INFORMATION TECHNOLOGY</h6>
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
