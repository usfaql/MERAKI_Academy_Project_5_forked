import React from 'react'
import HomeLanding from '../HomeLanding/HomeLanding'
import ServiceLanding from '../ServiceLanding/ServiceLanding'
import AboutLanding from '../AboutLanding/AboutLanding'
import ContactLanding from '../ContactLanding/ContactLanding'
import "./style.css"
function LandingPage() {
  return (
    <div className='continer-landing'>
        <HomeLanding/>
        <ServiceLanding/>
        <AboutLanding/>
        <ContactLanding/>

    </div>
  )
}

export default LandingPage