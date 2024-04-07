import React from 'react'
import './Work.css'
import p1 from '../../assets/project_1.svg'
import p2 from '../../assets/project_2.svg'
import p3 from '../../assets/project_3.svg'
import p4 from '../../assets/project_4.svg'
import p5 from '../../assets/project_5.svg'
import p6 from '../../assets/project_6.svg'
import arrrow from '../../assets/arrow_icon.svg'

export default function Work() {
  return (
    <div id='portfolio' className='work'>
        <h1>My lastest work</h1>

        <div className="projects-container">
            <img src={p1} alt="" />
            <img src={p2} alt="" />
            <img src={p3} alt="" />
            <img src={p4} alt="" />
            <img src={p5} alt="" />
            <img src={p6} alt="" />
        </div>

        <button>
            <p>Show More</p>
            <img src={arrrow} alt="" />
        </button>
    </div>
  )
}
