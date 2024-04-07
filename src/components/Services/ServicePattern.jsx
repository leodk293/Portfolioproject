import './Services.css'
import arrow from '../../assets/arrow_icon.svg'
import React from 'react'

export default function ServicePattern({ number, title }) {
  return (
    <div className='box'>

      <p>{number}</p>
      <h1>{title}</h1>

      <p>Web developement is this process of building, programming...</p>

      <div className="read">
        <p>Read More</p>
        <img src={arrow} alt="" />
      </div>

    </div>
  )
}
