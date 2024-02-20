import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserId } from "../Redux/Reducers/Auth/index";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./Profile.css";

import axios from "axios";

const Profile = () => {
  const [userinfo, setUserInfo] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      userId: state.auth.userId,
      token: state.auth.token,
    };
  });
  useEffect(() => {
    console.log("test");
    getUserInfoByUserId();
  }, []);
  const getUserInfoByUserId = () => {
    axios
      .get(`http://localhost:5000/users/info/${state.userId}`, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then((result) => {
        console.log(result.data.info[0]);
        setUserInfo(result.data.info[0]);
        setMessage(result.data.message);
      })
      .catch((error) => {
        setMessage(error.result.data);
      });
  };

  // const updateArticle = async (id) => {
  //   try {
  //     await axios.put(`http://localhost:5000/users/info/${id}`, {
  //       title,
  //       description,
  //     });
  //     setUserInfo({id, title, description});
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="profile">
      {userinfo && (
        <div className="profile_form">

          <div className="profile_img">
          <img src={userinfo.image} alt="profile img" />
          </div>
           <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail"  >
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="first name" value={userinfo.firstname} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="last name"  value={userinfo.lastname} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>email</Form.Label>
        <Form.Control placeholder="email"  value={userinfo.email} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>your goals</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor"   value={userinfo.goal}/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>height</Form.Label>
          <Form.Control  value={userinfo.height} type="number" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>weight</Form.Label>
          <Form.Control  value={userinfo.weight} type="number" />
        </Form.Group>
      </Row>

       

      <Button  type="submit">
        Submit
      </Button>
    </Form>


        </div>
      )}

    
    </div>
  );
};

export default Profile;

{/* <h1 className="header">profile info</h1>
      <div className="profile_user">
        <div className="profile_img">
          <img src="" alt="profile-img" />
          <button className="img-button">change image</button>
        </div>
        <div class="grid-container">
          <div class="grid-item">
            <input placeholder="first name" onChange={() => {}} />
          </div>
          <div class="grid-item">
            <input placeholder="last name " onChange={() => {}} />
          </div>
          <div class="grid-item">
            <input placeholder="last name " onChange={() => {}} />
          </div>
          <div class="grid-item">
            <input placeholder="last name " onChange={() => {}} />
          </div>
          <div class="grid-item">
            <input placeholder="last name " onChange={() => {}} />
          </div>
          <div class="grid-item">
            <input placeholder="last name " onChange={() => {}} />
          </div>
          <div class="grid-item">
            <input placeholder="last name " onChange={() => {}} />
          </div>
          <div class="grid-item">
            <input placeholder="last name " onChange={() => {}} />
          </div>
        </div>
      </div> */}