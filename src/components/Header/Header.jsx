import React from 'react'
import './Header.css'
import logo from '../../assets/logo.svg'
import menuOpen from '../../assets/menu_open.svg'
import menuClose from '../../assets/menu_close.svg'
import { useState } from 'react'
import { Link } from 'react-scroll'

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div id='home' className='header'>

            <div className="nav-links">
                <img src={logo} alt="LOGO" />

                <nav style={{zIndex:"100"}} className={showMenu ? "" : "hidden"}>
                    <ul>
                        <li><Link to='home' smooth={true} duration={500} offset={0}>Home</Link></li>
                        <li><Link to='about' smooth={true} duration={500} offset={0}>About me</Link></li>
                        <li><Link to='services' smooth={true} duration={500} offset={0}>Services</Link></li>
                        <li><Link to='portfolio' smooth={true} duration={500} offset={0}>Portfolio</Link></li>
                        <li><Link to='contact' smooth={true} duration={500} offset={0}>Contact</Link></li>
                    </ul>
                </nav>

                <nav className='desktop-links'>
                    <ul>
                        <li><Link to='home' smooth={true} duration={500} offset={0}>Home</Link></li>
                        <li><Link to='about' smooth={true} duration={500} offset={0}>About me</Link></li>
                        <li><Link to='services' smooth={true} duration={500} offset={0}>Services</Link></li>
                        <li><Link to='portfolio' smooth={true} duration={500} offset={0}>Portfolio</Link></li>
                        <li><Link to='contact' smooth={true} duration={500} offset={0}>Contact</Link></li>
                    </ul>
                </nav>

            </div>

            <button>Connect With Me</button>

            <img onClick={() => setShowMenu(!showMenu)} className='menuIcon' src={showMenu ? menuClose : menuOpen} alt="" />

        </div>
    )
}
