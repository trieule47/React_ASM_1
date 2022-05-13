import React, { Component } from 'react'
import '../cv_res.css';

export default class Skill extends Component {
  render() {
    return (
        <div class="box">
            <h4>{this.props.skill}</h4>
            <div class="percent">
                <div style={{width: this.props.percent}}></div>
            </div>
        </div>
      );
  }
}
