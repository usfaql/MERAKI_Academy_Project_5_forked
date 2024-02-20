import React ,{ useState } from 'react'
import "./Settings.css"
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
            <div className='Description-Title'>
                Description Plan {ele}
            </div>
            <div className='Description-Input'>
                <textarea
                type='text'
                placeholder='Input Description here'
                />
            </div>
            <div className='Sub-Duration'>
                <p>Subscription Duration:</p>
                <input type='number'/>
                <p>Month</p>
            </div>
            <div className='Price'>
                <p>Total Price:</p>
                <input type='number'/>
                <p>$</p>
            </div>
            <div className='Save-Btn'>
                <button>Save Changes</button>
            </div>
        </div>
        )}
        
    </div> 
    </div>
  
  </div>
  )
}

export default Settings