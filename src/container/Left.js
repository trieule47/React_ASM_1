import React, { Component } from 'react';
import '../cv_res.css';
import avatar from '../images/tri.jpg';
import 'font-awesome/css/font-awesome.min.css';
import ContactInfo from '../components/ContactInfo';

export default class Left extends Component {
  render() {
    return (
        <div>
            <div class="profileText">
                <div class="imgBox">
                    <img src={avatar} alt="avatar" />
                </div>
                <h2>Le Ngoc Vinh Trieu<br /><span>Web devoloper</span></h2>
            </div>
            <div class="contactInfo">
                <ContactInfo title="Contact Info">
                <ul>
                    <li>
                        <span class="icon"><i class="fa fa-phone-square" aria-hidden="true"></i></span>
                        <span class="text">+84 3535 61801 9999</span>
                    </li>
                    <li>
                        <span class="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                        <span class="text">trieulnvt@gmail.com</span>
                    </li>
                    <li>
                        <span class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                        <span class="text">HCM, Viet Nam</span>
                    </li>
                    <li>
                        <span class="icon"><i class="fa fa-github" aria-hidden="true"></i></span>
                        <span class="text">Github.com/abc</span>
                    </li>
                </ul>
                </ContactInfo>
            </div>
            <div class="contactInfo education">
                <ContactInfo title="Education">
                    <ul>
                        <li>
                            <h5>2020 - 2022</h5>
                            <h4>Master Web devoloper</h4>
                            <h4>University ABC</h4>
                        </li>
                        <li>
                            <h5>2020 - 2022</h5>
                            <h4>Master Web devoloper</h4>
                            <h4>University ABC</h4>
                        </li>
                        <li>
                            <h5>2020 - 2022</h5>
                            <h4>Master Web devoloper</h4>
                            <h4>University ABC</h4>
                        </li>
                    </ul>
                </ContactInfo>
            </div>
            <div class="contactInfo language">
                <h3 class="title">languages</h3>
                <ul>
                    <li>
                        <span class="text">English</span>
                        <span class="percent">
                            <div style={{width: '70%'}}></div>
                        </span>
                    </li>
                    <li>
                        <span class="text">Tieng Viet</span>
                        <span class="percent">
                            <div style={{width: '100%'}}></div>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
  }
}
