import React ,{ useState } from 'react'
import "./Settings.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Settings = () => {
    const [arr, setarr] = useState(["Lite","Gold","Premium"])
  return (
  <div className='setting-Page'>
    <div className='Page-Title'>
        <h1>Settings Private</h1>
    </div>
    <div className='Items'>
         <div className='Open-Private'>
        <h1>Open Private</h1>
        <div className='Toggel'>
        <Form.Check 
        type="switch"
      />
        </div>
    </div>
    <div className='Plans'>
        {arr.map((ele,i)=>
        <div className='Plan'>
            <div className='Plan-Title'>
                {ele} Plan
            </div>
            <div className='inputs'>
                 <div className='Description-Input'>
            <Form.Label>Description Plan {ele}</Form.Label>
      <Form.Control
      style={{height:"100%",backgroundColor:"#1e1e1e",border:"0",color:"white"}}
      as="textarea" rows={3}/>
            </div>
            <div className='Sub-Duration'>
                <p style={{fontSize:"larger"}}>Subscription Duration:</p>
                <div className='month'>       
      <Form.Control
      style={{height:"60%",width:"25%",backgroundColor:"#1e1e1e",border:"0",color:"white"}}
        type="number"/>
                <p style={{fontSize:"larger"}}>Month</p></div>
               
            </div>
            <div className='Price'>
                <p style={{fontSize:"larger"}}>Total Price:</p>
                <div className='num-price'>
                <Form.Control
                style={{height:"60%",width:"25%",backgroundColor:"#1e1e1e",border:"0",color:"white"}}
        type="number"/>
                <p style={{fontSize:"x-large"}}>$</p>
                </div>
                
            </div>
            <div className='Save-Btn'>
                <Button>Save Changes</Button>
            </div>
            </div>
               
           
        </div>
        )}
        
    </div> 
    </div>
  
  </div>
  )
}

export default Settings