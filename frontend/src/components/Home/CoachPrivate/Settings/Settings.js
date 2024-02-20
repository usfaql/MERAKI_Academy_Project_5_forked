import React, { useState,useEffect } from "react";
import "./Settings.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from 
"react-redux";
import {setPlans,addNewPlan} from "../../../Redux/Reducers/CoachPrivate/index"
import axios from "axios";
const Settings = () => {
    const dispatch=useDispatch()
    const {token,userId}=useSelector((state)=>{
        return{
           token:state.auth.token,
        userId:state.auth.userId,
        plans:state.coachPrivate.plans
      }})
      const [success, setSuccess] = useState(null)
      const [message, setMessage] = useState("")
  const [arr, setarr] = useState(["Lite", "Gold", "Premium"]);
  const [abeled, setAbeled] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [numOfMonth, setNumOfMonth] = useState(null);
  const getAllPlans=()=>{
    axios.get(`http://localhost:5000/coachs/plan`,{headers:{
        Authorization: `Bearer ${token}`
    }}).then((result)=>{
        if(result.data.plans){
         dispatch(setPlans(result.data.plans))
        }else{
            setMessage("There is No Plan Yet")
        }
      
    }).catch((error)=>{
        setSuccess(false)
        setMessage(error.response.data.message)
    })
  }
  useEffect(() => {
getAllPlans()
  }, [])

  const createNewPlan=()=>{
    setAbeled(true)
    axios.post(`http://localhost:5000/coachs/plan`,{name,description,price,numOfMonth},{headers:{
        Authorization: `Bearer ${token}`
    }}).then((result)=>{
        dispatch(addNewPlan(result.data.plan))
        setAbeled(true)
    }).catch((error)=>{
        setSuccess(false)
        setMessage(error.response.data.message)
        setAbeled(true)
    })
  }
  
  return (
    <div className="setting-Page">
      <div className="Page-Title">
        <h1>Settings Private</h1>
      </div>
      <div className="Items">
        <div className="Open-Private">
          <h1>Open Private</h1>
          <div className="Toggel">
            <Form.Check type="switch" />
          </div>
        </div>
        <div className="Plans">
          {arr.map((ele, i) => (
            <div className="Plan">
              <div className="Plan-Title">{ele} Plan</div>
              <div className="inputs">
                <div className="Description-Input">
                  <Form.Label>Description Plan {ele}</Form.Label>
                  <Form.Control
                    style={{
                      height: "100%",
                      backgroundColor: "#1e1e1e",
                      border: "0",
                      color: "white",
                    }}
                    as="textarea"
                    rows={3}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </div>
                <div className="Sub-Duration">
                  <p style={{ fontSize: "larger" }}>Subscription Duration:</p>
                  <div className="month">
                    <Form.Control
                      style={{
                        height: "60%",
                        width: "25%",
                        backgroundColor: "#1e1e1e",
                        border: "0",
                        color: "white",
                      }}
                      type="number"
                      onChange={(e) => {
                        setNumOfMonth(e.target.value);
                      }}
                    />
                    <p style={{ fontSize: "larger" }}>Month</p>
                  </div>
                </div>
                <div className="Price">
                  <p style={{ fontSize: "larger" }}>Total Price:</p>
                  <div className="num-price">
                    <Form.Control
                      style={{
                        height: "60%",
                        width: "25%",
                        backgroundColor: "#1e1e1e",
                        border: "0",
                        color: "white",
                      }}
                      type="number"
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                    />
                    <p style={{ fontSize: "x-large" }}>$</p>
                  </div>
                </div>
                <div className="Save-Btn">
                  <Button disabled={abeled} onClick={()=>{
                    setName(ele)
                  }}>Save Changes</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
