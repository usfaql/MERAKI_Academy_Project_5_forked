import React, { useState, useEffect } from "react";
import "./Settings.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  setPlans,
  addNewPlan,
} from "../../../Redux/Reducers/CoachPrivate/index";
import axios from "axios";
import { setActivePrivate } from "../../../Redux/Reducers/Auth";
const Settings = () => {
  const dispatch = useDispatch();
  const { token, userId, activePrivate, plans } = useSelector((state) => {
    return {
      token: state.auth.token,
      userId: state.auth.userId,
      activePrivate: state.auth.activePrivate,
      plans: state.coachPrivate.plans,
    };
  });
  const [success, setSuccess] = useState(null);
  const [message, setMessage] = useState("");
  const [arr, setarr] = useState([]);
  const [abeled, setAbeled] = useState(false);
  //   const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [numOfMonth, setNumOfMonth] = useState(null);
  const getAllPlans = () => {
    axios
      .get(`http://localhost:5000/coachs/plan`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        if (result.data.plans) {
          const arr_plans = result.data.plans.map((ele, i) => {
            return ele.name;
          });
          dispatch(setPlans(result.data.plans));

          setarr(arr_plans);
        } else {
          setMessage("There is No Plan Yet");
        }
      })
      .catch((error) => {
        setSuccess(false);
        setMessage(error.response.data.message);
      });
  };
  const disActivePrivate = () => {
    axios
      .get(`http://localhost:5000/coachs/private/disactive`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        dispatch(setActivePrivate("0"));
        setSuccess(result.data.success);
        setMessage(result.data.message);
      })
      .catch((error) => {
        setSuccess(false);
        setMessage(error.response.data.message);
      });
  };
  useEffect(() => {
    getAllPlans();
  }, []);

  const createNewPlan = (name) => {
    setAbeled(true);
    if (name && description && price && numOfMonth) {
      axios
        .post(
          `http://localhost:5000/coachs/plan`,
          { name: name, description, price, numOfMonth },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((result) => {
          dispatch(addNewPlan(result.data.plan));
          setSuccess(result.data.success);
          setMessage(result.data.message);
          setAbeled(false);
        })
        .catch((error) => {
          setSuccess(false);
          setMessage(error.response.data.message);
          setAbeled(false);
        });
    } else {
      setSuccess(false);
      setMessage("Please Fill All Field");
      setAbeled(false);
    }
  };

  const activePrivateFun = () => {
    axios
      .get(`http://localhost:5000/coachs/private`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        dispatch(setActivePrivate("1"));
        setSuccess(result.data.success);
        setMessage(result.data.message);
      })
      .catch((error) => {
        setSuccess(false);
        setMessage(error.response.data.message);
      });
  };
  console.log(plans);
  console.log(arr);
  return (
    <div className="setting-Page">
      <div className="Page-Title">
        <h1>Settings Private</h1>
      </div>
      <div className="Items">
        <div className="Open-Private">
          <h1 className="open">Open Private</h1>
          <div className="toggle">
            <Form.Check
              className="form-check-input form-switch"
              // style={{backgroundColor:"green"}}
              checked={activePrivate === "1" ? true : false}
              onChange={(e) => {
                console.log(e.target.checked);
                e.target.checked ? activePrivateFun() : disActivePrivate();
              }}
              type="switch"
            />
          </div>
        </div>
        <div className="Plans">
          {!arr.includes("Lite") &&
            <div>Lite</div>}
             {!arr.includes("Gold") &&
            <div>Gold</div>}
             {!arr.includes("Premuim") &&
            <div>Premuim</div>}
          {arr.map((ele, i) => (
            <div className="Plan">
              {console.log(ele, plans[i].name)}
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
                    value={
                      plans[i]?.name === ele &&
                      plans[i]?.description &&
                      plans[i]?.description
                    }
                    as="textarea"
                    rows={3}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </div>
                <div className="Sub-Duration">
                  <p
                    style={{
                      fontSize: "larger",
                      width: "70%",
                      textAlign: "left",
                    }}
                  >
                    Subscription Duration:
                  </p>
                  <div className="month">
                    <Form.Control
                      style={{
                        height: "80%",
                        width: "50%",
                        backgroundColor: "#1e1e1e",
                        border: "0",
                        color: "white",
                      }}
                      value={
                        plans[i]?.name === ele &&
                        plans[i]?.numofmonth &&
                        plans[i]?.numofmonth
                      }
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
                        height: "80%",
                        width: "50%",
                        backgroundColor: "#1e1e1e",
                        border: "0",
                        color: "white",
                      }}
                      value={
                        plans[i]?.name === ele &&
                        plans[i]?.price &&
                        plans[i]?.price
                      }
                      type="number"
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                    />
                    <p style={{ fontSize: "x-large" }}>$</p>
                  </div>
                </div>
                {plans[i]?.name === ele || (
                  <div className="Save-Btn">
                    <Button
                      disabled={abeled}
                      onClick={() => {
                        createNewPlan(ele);
                      }}
                    >
                      Save Changes
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={
          success ? message && "SuccessMessage" : message && "ErrorMessage"
        }
        style={{ padding: "5px" }}
      >
        <span style={{ visibility: "hidden" }}>:</span>
        {message}
      </div>
    </div>
  );
};

export default Settings;
