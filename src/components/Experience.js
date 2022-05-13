import React, { Component } from 'react'
import '../cv_res.css';

export default class Experience extends Component {
  render() {
    return (
        <div class="box">
            <div class="year_company">
                <h5>{this.props.years}</h5>
                <h5>{this.props.company}</h5>
            </div>
            <div class="text">
                <h4>{this.props.position}</h4>
                <p>{this.props.message}</p>
            </div>
        </div>
    )
  }
}
