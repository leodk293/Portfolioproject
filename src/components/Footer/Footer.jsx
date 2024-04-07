import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg'

export default function Footer() {
    const date = new Date()
    const year = date.getFullYear()

  return (
    <div className='footer'>

        <div className="footer-top">
            <div className="text-left">
                <img src={logo} alt="" />
                <p>I am a frontend developer from USA with 10 years of experience in several companies</p>
            </div>

            <form className='footer-form' action="">
                <input type="email" placeholder='Enter your email ✉️'/>
                <button>Subscribe</button>
            </form>

        </div>

        <div className="line-footer"></div>

        <div className="footer-bottom">
            <p>© {year} Alex Bennett. All rights reserved.</p>
            <ul>
                <li>Terms of services</li>
                <li>Privacy Policy</li>
                <li>Connect with me</li>
            </ul>
        </div>

    </div>
  )
}
