import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

const PrivatePlan = () => {
    const{coachid}=useParams()
    const getAllPlans=()=>{
        axios.get()
    }
  return (
    
    <div>PrivatePlan</div>
  )
}

export default PrivatePlan