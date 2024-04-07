import React from 'react'
import './Hero.css'
import person from '../../assets/profile_img.svg'

export default function Hero() {
  return (
    <div className='hero'>
        <img src={person} alt="" />
        <p><span className='name'>I am Alex Bennett,</span> frontend developer based in USA</p>
        <p>I am a frontend developer from California, USA with 10 years of experience in multiple companies like
            Microsoft, Apple, Google.
        </p>

        <div className="btns">
            <button>Connect with we</button>
            <button>My resume</button>
        </div>
         
    </div>
  )
}
