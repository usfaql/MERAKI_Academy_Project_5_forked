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

        </div>
    </div>
    <div className='Plans'>
        {arr.map((ele,i)=>
        <div className='Plan'>
            <div className='Plan-Title'>
                {ele} Plan
            </div>
            <div className='Description-Input'>
            <Form.Label>Description Plan {ele}</Form.Label>
      <Form.Control
        type="text"/>
            </div>
            <div className='Sub-Duration'>
                <p>Subscription Duration:</p>
                <div className='month'>       
      <Form.Control
        type="number"/>
                <p>Month</p></div>
               
            </div>
            <div className='Price'>
                <p>Total Price:</p>
                <div className='num-price'>
                <Form.Control
        type="number"/>
                <p>$</p>
                </div>
                
            </div>
            <div className='Save-Btn'>
                <Button>Save Changes</Button>
            </div>
        </div>
        )}
        
    </div> 
    </div>
  
  </div>
  )
}

export default Settings