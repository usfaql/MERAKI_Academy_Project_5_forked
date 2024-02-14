import React from 'react'
import './style.css'
function ServiceLanding() {
  return (
    <div className='service-landing'>

      <div className='container-service-landing'>
        <div className='container-service-title'>
          <div>THIS IS OUR SERVICE</div>
        </div>
        <div className='container-service-card'>
          <div className='card-service'>
            <div className='title-card'>Food Recipes</div>
            <div className='desc-card'>offers healthy and delicious cooking recipes, specially designed for athletes and sports enthusiasts. Discover balanced meals that contain the calories, protein, and vitamins you need to achieve peak athletic performance.</div>
            <div className='container-button-card'>
            <button className='btn-card'>Join To Gym</button>
            </div>
          </div>
          <div className='card-service'>
            <div className='title-card'>Online Gym</div>
            <div className='desc-card'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div className='container-button-card'>
            <button className='btn-card'>Join To Gym</button>
            </div>
            
          </div>
          <div className='card-service'>
            <div className='title-card'>Private Coach</div>
            <div className='desc-card'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div className='container-button-card'>
            <button className='btn-card'>Join To Gym</button>
            </div>
          </div>
          <div className='card-service'>
            <div className='title-card'>----</div>
              <div className='desc-card'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              <div className='container-button-card'>
            <button className='btn-card'>Join To Gym</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceLanding