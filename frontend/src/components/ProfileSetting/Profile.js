import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserId } from "../Redux/Reducers/Auth/index";
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
        <div>
          <p>{userinfo.firstname}</p>

          <p>{userinfo.weight}</p>
          <p>{userinfo.height}</p>
          <p>{userinfo.goal}</p>


        </div>
      )}

      <h1 className="header">profile info</h1>
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
      </div>
    </div>
  );
};

export default Profile;
