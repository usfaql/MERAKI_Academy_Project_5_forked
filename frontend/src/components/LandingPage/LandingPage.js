import React from 'react'
import HomeLanding from '../HomeLanding/HomeLanding'
import ServiceLanding from '../ServiceLanding/ServiceLanding'
import AboutLanding from '../AboutLanding/AboutLanding'
import ContactLanding from '../ContactLanding/ContactLanding'

function LandingPage() {
  return (
    <div>
        <HomeLanding/>
        <ServiceLanding/>
        <AboutLanding/>
        <ContactLanding/>

    </div>
  )
}

export default LandingPage