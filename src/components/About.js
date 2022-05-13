import React, { Component } from 'react'
import '../cv_res.css';

export default class About extends Component {
  render() {
    return (
      <div>
          <h2 class="title2">{this.props.title}</h2>
            {this.props.children}
      </div>
    )
  }
}
