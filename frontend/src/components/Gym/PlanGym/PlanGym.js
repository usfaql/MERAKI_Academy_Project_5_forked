import React, { useEffect, useState } from 'react'
import './style.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { useSelector } from 'react-redux';

function PlanGym() {
    const navigate = useNavigate();
    const {gymid} = useParams();
    const [dataGym, setDataGym] = useState(null);
    const [dataPlan, setDataPlan] = useState(null);
    const [dataLitePlan, setDataLitePlan] = useState(null);
    const [dataGoldPlan, setDataGoldPlan] = useState(null);
    const [dataLProPlan, setDataProPlan] = useState(null);
    

    const state = useSelector((state)=>{
        return{
        userId : state.auth.userId,
        token : state.auth.token
        }
      })


    const config = {
        headers: { Authorization: `Bearer ${state.token}` }
      }
    useEffect(()=>{
        axios.get(`http://localhost:5000/gyms/${gymid}`,config).then((result) => {
            setDataGym(result.data.oneGym);
            axios.get(`http://localhost:5000/gyms/plan/${gymid}`,config).then((resultPlan) => {
                resultPlan.data.plans.map((e,i)=>{
                    if(e.name_plan === 'Lite'){
                        setDataLitePlan(e);
                    }
                    if(e.name_plan === 'Gold'){
                        setDataGoldPlan(e);
                    }
                    if(e.name_plan === 'Premium'){
                        setDataProPlan(e);
                    }
                })
            }).catch((err) => {
                console.log(err);
            });
        }).catch((err) => {
            console.log(err);
        });
    },[])
  return (
    <div className='plan-body'>
      <div className='continer-info-gym'>
        <div className='contener-info-gym'>
            <div className='continer-image-gym'>
                <img className='image-gym' src='https://img.freepik.com/free-vector/cute-man-lifting-barbell-gym-cartoon-vector-icon-illustration-people-sport-icon-concept-isolated_138676-6223.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708041600&semt=ais'/>
            </div>
            
            <div className='name-desc-gym'>
                <h3>{dataGym && dataGym.name}</h3>
                <p className='desc-gym'>{dataGym && dataGym.description}</p>
            </div>
            <div className='member-in-gym'>
                <p>30/50 Member</p>
            </div>
        </div>
    </div>

    <div className='continer-plan'>
        {dataLitePlan || dataGoldPlan || dataLProPlan ? <>
            <div className='lite-plan plan' style={dataLitePlan ? {display:"flex"} : {display:"none"}}>
            <div className='name-price-month-plan'>
                <h4 className='name-plan'>{dataLitePlan && dataLitePlan.name_plan}</h4>
                <h2 className='price-plan'>${dataLitePlan && dataLitePlan.price}</h2>
                <h5 className='month-plan'>{`per ${dataLitePlan && dataLitePlan.numofmonth} Month`}</h5>
            </div>

            <div className='description-plan'>
                <p>{dataLitePlan && dataLitePlan.description}</p>
            </div>
            <div className='select-plan'>
                <button className='select-btn' onClick={()=>{
                }}>select Plan</button>
            </div>
        </div>
        <div className='gold-plan plan' style={dataGoldPlan ? {display:"flex"} : {display:"none"}}>
            <div className='name-price-month-plan'>
                <h4 className='name-plan'>{dataGoldPlan && dataGoldPlan.name_plan}</h4>
                <h2 className='price-plan'>${dataGoldPlan && dataGoldPlan.price}</h2>
                <h5 className='month-plan'>{`per ${dataGoldPlan && dataGoldPlan.numofmonth} Month`}</h5>
            </div>

            <div className='description-plan'>
                <p>{dataGoldPlan && dataGoldPlan.description}</p>
            </div>
            <div className='select-plan'>
                <button className='select-btn'>select Plan</button>
            </div>
        </div>
        <div className='premium-plan plan' style={dataLProPlan ? {display:"flex"} : {display:"none"}}>
            <div className='name-price-month-plan'>
                <h4 className='name-plan'>{dataLProPlan && dataLProPlan.name_plan}</h4>
                <h2 className='price-plan'>${dataLProPlan && dataLProPlan.price}</h2>
                <h5 className='month-plan'>{`per ${dataLProPlan && dataLProPlan.numofmonth} Month`}</h5>
            </div>

            <div className='description-plan'>
                <p>{dataLProPlan && dataLProPlan.description}</p>
            </div>
            <div className='select-plan'>
                <button className='select-btn'onClick={()=>{
                    console.log(dataLProPlan);
                    navigate(`/checkout/${dataLProPlan.gym_id}/${dataLProPlan.id}`)
                }}>select Plan</button>
            </div>
        </div>
        </>: <div style={{width:"100%", height:"100%", alignItems:"center", textAlign:"center"}}>Loading...</div>}
      </div>
    </div>
  )
}

export default PlanGym
