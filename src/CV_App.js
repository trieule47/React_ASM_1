import React, { Component } from 'react'
import './cv_res.css';
import avatar from './images/tri.jpg';
import Left from './container/Left';
import Right from './container/Right';

export default class CV_App extends Component {
  render() {
    return (
      <div class="container">
          <div class="left_Side">
              <Left/>
          </div>
          <div class="right_Side">
              <Right/>
          </div>
      </div>
    )
  }
}
