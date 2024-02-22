import React, { useState } from 'react'
import './style.css'
import { useParams } from 'react-router-dom'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
function PaymentPlan() {
    const {gymid, planid} = useParams;
    const [numberCard, setNumberCard] = useState(null);
    const [nameOnCard, setNameOnCard] = useState(null);
    const [expirationDate, setExpirationDate] = useState(null);
    const [cVV, setCVV] = useState(null);

    const handlePay = ()=>{
        if(numberCard && nameOnCard && expirationDate && cVV){
            console.log("Success");
        }else{
            console.log("please fill data");
        }
    }
      return (
        <div className='contener-payment'>
            <div className='invoice'>
                <h2 style={{textAlign:"center"}}>Invoice</h2>
                <div className='inv'>
                <h6>Name Gym:</h6>
                <h6>Gold</h6>
                </div>
                <div className='inv'>
                    <h6>Name Plan:</h6>
                <h6>Lite</h6></div>
                <div className='inv'>
                    <h6>Month:</h6>
                    <h6>1</h6>
                </div>
                <div className='inv'>
                    <h6>Price:</h6>
                    <h6>$9.99</h6>
                </div>
                <div style={{borderBottom:"1px solid gray"}}></div>
                <div className='inv'>
                    <h6>TAX:</h6>
                    <h6>$0.49</h6>
                </div>
                <div className='inv'>
                    <h6>Total Price:</h6>
                    <h6>$10.48</h6>
                </div>
                <div style={{borderBottom:"1px solid gray"}}></div>
            </div>
            <div className='form-pay'>
                <div style={{width:"50%"}}>
                    <p className='text-card'>Name On Card:</p>
                    <input className='input-card' type='text' placeholder='Name On Card' onChange={(e)=>{
                        setNameOnCard(e.target.value);
                    }}/>
                </div>
                <div style={{width:"50%"}}>
                    <p className='text-card'>Card Number</p>
                    <input className='input-card' type='number' placeholder='1234-5678-9012-3456' onChange={(e)=>{
                        setNumberCard(e.target.value);
                    }}/>
                </div>
                
                
                <div style={{display:"flex", width:"50%", justifyContent:"space-between"}}>
                <div style={{width:"50%"}}>
                    <p className='text'>Expiration Date</p>
                    <input className='c' placeholder='MM/YY'  onChange={(e)=>{
                        setExpirationDate(e.target.value);
                    }}/>
                </div>
                    
                <div style={{width:"50%"}}>
                    <p className='text'>CVV</p>
                    <input className='d' type='number' placeholder='CCV' onChange={(e)=>{
                        setCVV(e.target.value);
                    }}/>
                </div>
                </div>
                <button className='pay-btn' onClick={handlePay}>Pay Now</button>
            </div>
            
        </div>
      );
};

export default PaymentPlan
