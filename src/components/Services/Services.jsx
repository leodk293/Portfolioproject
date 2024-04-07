import React from 'react'
import './Services.css'
import arrow from '../../assets/arrow_icon.svg'

import ServicePattern from './ServicePattern'

export default function Services() {
  return (
    <div id='services' className='services'>
      <h1>My Services</h1>

      <div className="grid-services">
        <ServicePattern number={'01'} title={'Web design'} />
        <ServicePattern number={'02'} title={'Graphics design'} />
        <ServicePattern number={'03'} title={'Social media'} />
        <ServicePattern number={'04'} title={'App design'} />
        <ServicePattern number={'05'} title={'Digital marketing'} />
        <ServicePattern number={'06'} title={'Content writing'} />

      </div>

    </div>
  )
}
