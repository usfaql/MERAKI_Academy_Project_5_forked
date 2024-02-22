import React, { useEffect, useRef, useState } from "react";
import "./CoachPrivate.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../Redux/Reducers/CoachPrivate/index";
const CoachPrivate = () => {
  const revarse =useRef(null)
  if(revarse.current){
    revarse.current.scrollTop= revarse.current.scrollHeight
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, userId, users } = useSelector((state) => {
    return {
      token: state.auth.token,
      userId: state.auth.userId,
      users: state.coachPrivate.users,
    };
  });
  const [show, setshow] = useState(false)
  const [header, setHeader] = useState("");
  const [success, setSuccess] = useState(null);
  const [message, setMessage] = useState("");
  const [filtered, setFiltered] = useState([]);
  const removeUserFromPrivate = (user_id, coach_id) => {
    axios
      .put(
        `http://localhost:5000/coachs/user/remove`,
        { user_id: user_id, coach_id: coach_id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getAllUsers = () => {
    axios
      .get(`http://localhost:5000/coachs/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        console.log(result.data.success);
        if (result.data.success) {
          result.data.users.map((ele, i) => {
            if (new Date() >= new Date(ele.endsub)) {
              removeUserFromPrivate(ele.user_id, ele.coach_id);
            }
          });
          const newUserArr = result.data.users.filter(
            (ele, i) => new Date() < new Date(ele.endsub)
          );
          dispatch(setUsers(newUserArr));
          setFiltered(newUserArr);
          setSuccess(result.data.success)
        }else{
          setSuccess(result.data.success)
          setMessage(result.data.message)
        }
      })
      .catch((error) => {
        setSuccess(false)
              setMessage(error.response.data.message)
      });
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  const userFiltration = (e) => {
    if (e !== "All") {
      const filteredUsers = users.filter((ele, i) => ele.name === e);
      setFiltered(filteredUsers);
    } else {
      setFiltered(users);
    }
  };
  let messages = [
    {
      name: "Mohammed Odat",
      message:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      name: "Mohammed Odat",
      message:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      name: "Mohammed Odat",
      message:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.iterature from 45 BC, making it over 2000 years old.",
    },
    {
      name: "Mohammed Odat",
      message:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      name: "Mohammed Odat",
      message:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      name: "Mohammed Odat",
      message:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.111",
    },
  ];
  return (
    <div className="Coach-Private-Page">
      {show&&<div className="Left-Side">
        <div className="User-Filter">
          <Form.Select
            onChange={(e) => {
              userFiltration(e.target.value);
            }}
            style={{
              alignSelf: "center",
              width: "85%",
              paddingLeft: "5px",
              backgroundColor: "#3d3939",
              color: "white",
            }}
            aria-label="Default select example"
          >
            <option value="All">All Users</option>
            <option value="Lite">Lite Users</option>
            <option value="Gold">Gold Users</option>
            <option value="Premium">Premium Users</option>
          </Form.Select>
        </div>
        {success?<div className="User-List">
          {filtered.map((user, i) => (
            <div
              className="User-Name"
              onClick={() => {
                setHeader(`${user.firstname} ${user.lastname}`);
              }}
            >
              <>
                {user.name === "Lite"
                  ? "🐱"
                  : user.name === "Gold"
                  ? "🦁"
                  : user.name === "Premium" && "👑"}
              </>{" "}
              {user.firstname} {user.lastname}
            </div>
          ))}
        </div>:<span  style={{backgroundColor:"red" ,width:"90%",
        fontSize:"x-large",borderRadius:"8px"}}>{message}</span>
          
        }
        
        <div className="My-Private">
          <div className="img-title">
            <div className="Private-img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="white"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
            </div>
            <div className="Private-Title">My Private</div>
            <svg
              onClick={() => {
                navigate("setting");
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-gear"
              viewBox="0 0 16 16"
            >
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
            </svg>
          </div>

          <svg
          onClick={()=>{
            navigate('/home')
          }}
            className="icon"
            style={{ cursor: "pointer" }}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="red"
            class="bi bi-box-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
            />
            <path
              fill-rule="evenodd"
              d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
            />
          </svg>
        </div>
      </div>}
      
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16" className="show" onClick={()=>{
        setshow(!show)
      }}>
        {show?<path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>:<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>}
  
</svg>
      </div>
      <div className="Right-Side" style={show?{width:"75%"}:{width:"100%"}}>
        <div className="Header">{header}</div>
        <div ref={revarse} className="message">
          {messages.map((ele, i) => (
            <div className="msg">
              <div className="user-pic">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  fill="currentColor"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
              </div>
              <div className="user-message">
                <p>{ele.name}</p>
                <p>{ele.message}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="Input-Button">
          <div className="Input">
            <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
          </div>
          <div className="Buttons">
            <div className="left">
              <Button>Image</Button>
              <Button>Video</Button>
              <Button>File</Button>
            </div>
            <div className="right">
              <Button>Send</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachPrivate;
