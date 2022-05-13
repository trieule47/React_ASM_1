import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import '../cv_res.css';

export default class ContactInfo extends Component {
  render() {
    return (
      <div>
        <h3 class="title">{this.props.title}</h3>
        {this.props.children}
      </div>
    )
  }
}
