import React from 'react'
import './About.css'
import person from '../../assets/about_profile.svg'

export default function About() {
    return (
        <div id='about' className='about'>
            <h1>About me</h1>

            <div className="about-row">
                <img src={person} alt="" />

                <div className="text">
                    <p>I am an experienced frontend developer with over a decade of professional expertise in the field.
                        Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing
                        to their success and growth.
                    </p>
                    <p>My passion for frontend development is not only reflected in my extensive experience but also in the
                        enthusiasm and dedication I bring to each project.
                    </p>

                    <div className="skills">

                        <div className="pattern">
                            <p>HTML & CSS</p>
                            <div className="loader l1"></div>
                        </div>

                        <div className="pattern">
                            <p>React JS</p>
                            <div className="loader l2"></div>
                        </div>

                        <div className="pattern">
                            <p>JavaScript</p>
                            <div className="loader l3"></div>
                        </div>

                        <div className="pattern">
                            <p>Next JS</p>
                            <div className="loader l4"></div>
                        </div>

                    </div>
                </div>


            </div>

            <div className="exp">

                <div className='exp-pattern'>
                    <p>10+</p>
                    <p>YEARS OF EXPERIENCE</p>
                </div>

                <div className="bar"></div>

                <div className='exp-pattern'>
                    <p>90+</p>
                    <p>PROJECTS COMPLETED</p>
                </div>

                <div className="bar"></div>

                <div className='exp-pattern'>
                    <p>15+</p>
                    <p>HAPPY CLIENTS</p>
                </div>

            </div>

        </div>
    )
}
