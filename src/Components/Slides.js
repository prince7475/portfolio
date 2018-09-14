import React, { Component } from 'react'
import resort1 from '../img/resort1.jpeg'
import resort2 from '../img/resort2.jpeg'
import resort3 from '../img/resort3.png'
import resort4 from '../img/resort4.png'

export default class Slides extends Component {
  render() {
    return (
        <div>
            <div className="parallax-container">
                <div className="parallax"><img src={resort1} /></div>
            </div>
        </div>
    )
  }
}
