import axios from 'axios'
import React ,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import "./PrivatePlan.css"
const PrivatePlan = () => {
    const navigate = useNavigate();
    const [success, setSuccess] = useState(null)
    const [message, setMessage] = useState("")
    const [plans, setplans] = useState([])
    const [coachInfo, setCoachInfo] = useState({})
    const{coachid}=useParams()
    const { token, userId } = useSelector((state) => {
        return {
          token: state.auth.token,
          userId: state.auth.userId,
        };
      });
      useEffect(() => {
        getAllPlans()
        getCoachInfo()
      }, [])
      
    const getAllPlans = () => {
        axios
          .get(`http://localhost:5000/coachs/plan/${coachid}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((result) => {
            if (result.data.plans) {
                console.log(result.data.plans);
                setplans(result.data.plans)
            } else {
              setSuccess(result.data.success)
              setMessage("There is No Plan Yet");
            }
          })
          .catch((error) => {
            setSuccess(false);
            setMessage(error.response.data.message);
          });
      };
const getCoachInfo=()=>{
    axios.get(`http://localhost:5000/users/info/${coachid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((result)=>{
        setCoachInfo(result.data.info)
      }).catch((error)=>{
        setSuccess(false);
        setMessage(error.response.data.message);
      })
}
  return (<div className='Private-Plan-Page'>
          <div className='continer-info-coach'>
        <div className='contener-info-coach'>
            <div className='continer-image-coach'>
                <img className='image-coach' src={coachInfo&&coachInfo.image?coachInfo.image:'https://img.freepik.com/free-vector/cute-man-lifting-barbell-gym-cartoon-vector-icon-illustration-people-sport-icon-concept-isolated_138676-6223.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1708041600&semt=ais'}/>
            </div>
            
            <div className='name-coach'>
                <h3>{coachInfo && coachInfo.firstname} {coachInfo && coachInfo.lastname}</h3>
            </div>
        </div>
    </div>
    <div className='container-plans'>
        {plans&&plans.map((plan,i)=>
               <div className='plan'>
               <div className='name-price-month-plan'>
                   <h4 className='name-plan'>{ plan.name}</h4>
                   <h2 className='price-plan'>${plan.price}</h2>
                   <h5 className='month-plan'>{`per ${plan.numofmonth} Month`}</h5>
               </div>
   
               <div className='description-plan'>
                   <p>{plan.description}</p>
               </div>
               <div className='select-plan'>
                   <button className='select-btn' onClick={()=>{
                       navigate(`/checkout/private/${plan.coach_id}/${plan.id}`)
                   }}>select Plan</button>
               </div>
           </div>
        )}
    </div>
  </div>
  )
}

export default PrivatePlan