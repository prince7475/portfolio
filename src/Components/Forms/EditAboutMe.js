import React, { Component } from 'react'

export default class EditAboutMe extends Component {
    constructor(props){
        super(props)
        this.state = {
            phone:"",
            email:"",
            about:""
        }
    }

    onChangeHandler = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    onSubmitHandler = (evt) => {
        evt.preventDefault()
        console.log(this.state)
    }
  render() {
    return (
      <div>
        <div className="modal" id="AboutMe">
          <div className="modal-content" >
          <h4>Form to edit about me</h4>

          <div className="input-field col s12">
          <input onChange={this.onChangeHandler} placeholder="Phone" id="phone" name="phone" type="text" className="validate" />
          <label htmlFor="phone">Phone</label>
        </div>

        <div className="input-field col s12">
          <input onChange={this.onChangeHandler} placeholder="Email" id="Email" name="email" type="text" className="validate" />
          <label htmlFor="Email">Email</label>
        </div>

        <div className="input-field col s12">
          <input onChange={this.onChangeHandler} placeholder="About" id="About" name="about" type="text" className="validate" />
          <label htmlFor="About">About me</label>
        </div>
        <button className="btn green lighten-2" onClick={this.onSubmitHandler} type="Submit">Submit</button>
          </div>
          <div className="modal-footer">
        <a href="#" className="modal-close btn blue">Agree & Close</a>
          </div>
        </div>
      </div>
    )
  }
}
