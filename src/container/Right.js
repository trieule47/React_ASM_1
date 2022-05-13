import React, { Component } from 'react'
import About from '../components/About'
import 'font-awesome/css/font-awesome.min.css';
import '../cv_res.css';
import Experience from '../components/Experience';
import Skill from '../components/Skill';
import Interest from '../components/Interest';

export default class Right extends Component {
    render() {
        return (
            <div>
                <div class="about">
                    <About title="Profile1">
                        <p>abcd</p>
                    </About>
                </div>
                <div class="about">
                    <About title="Experience">
                        <Experience 
                            years="2020-2022" 
                            company="ABC Company" 
                            message="abcd Font Awesome gives you scalable vector icons that can instantly be customized — size,
                    color, drop shadow, and anything that can be done with the power of CSS." 
                            position="UI desinger"
                        />
                        <Experience 
                            years="2020-2022" 
                            company="ABC Company" 
                            message="abcd Font Awesome gives you scalable vector icons that can instantly be customized — size,
                    color, drop shadow, and anything that can be done with the power of CSS." 
                            position="UI desinger"
                        />
                        <Experience 
                            years="2020-2022" 
                            company="ABC Company" 
                            message="abcd Font Awesome gives you scalable vector icons that can instantly be customized — size,
                    color, drop shadow, and anything that can be done with the power of CSS." 
                            position="UI desinger"
                        />
                    </About>
                </div>
                <div class="about skills">
                    <About title="Professional Skills">
                        <Skill 
                            skill="Html"
                            percent="90%"
                            />
                        <Skill 
                            skill="CSS"
                            percent="80%"
                            />
                        <Skill 
                            skill="JAVASCRIPT"
                            percent="70%"
                            />
                        <Skill 
                            skill="REACT JS"
                            percent="85%"
                            />
                        <Skill 
                            skill="PHOTOSHOP"
                            percent="80%"
                            />
                    </About>
                </div>

                <div class="about interest">
                    <About title="Interest">
                        <Interest/>
                    </About>
                </div>

            </div>
        )
    }
}
