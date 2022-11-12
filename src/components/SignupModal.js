import React, { Component, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import validator from "validator";
import "./SignupModal.css";
import { signup } from "../Context/Signup";
import axios from "axios";
import PrivateRoute from "../Context/PrivateRoute";

function SignupModal() {
  <PrivateRoute/>
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const { login } = useContext(signup);
  const data = {
    email,
    password,
  };
  const HandleClick = () => {
    axios
      .post(`https://reqres.in/api/login`, data)
      .then((res) => {
        if (res.data.token) {
          login(res.data.token);
          console.log(res.data.token)
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="carousel-margin d-flex justify-content-center">
        <NavLink to="/" className="text-dark back-margin">
          <i className="fa-solid fa-arrow-left back-arrow"></i>
        </NavLink>
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="button-margin"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          SignUp
        </button>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Signup with BigBasket
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* Modal Body */}

            <div className="modal-body">
              <i className="fa-solid fa-envelope login-icons" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <hr />
              <i className="fa-solid fa-lock login-icons" />
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                onChange={(e) => setpassword(e.target.value)}
              />
              <hr />

              <div>
                <p>Or Signup With</p>
                <div className="d-flex justify-content-center">
                  <div className="text-light social-media-fb-container">
                    <i className="fa-brands fa-facebook-square social-media-icons"></i>
                  </div>
                  <div className="text-light social-media-pi-container">
                    <i className="fa-brands fa-pinterest-square social-media-icons"></i>
                  </div>
                  <div className="text-light social-media-twitter-container">
                    <i className="fa-brands fa-twitter-square social-media-icons"></i>
                  </div>
                  <div className="text-light social-media-insta-container">
                    <i className="fa-brands fa-instagram-square social-media-icons"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="modal-button-1"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="modal-button"
                onClick={HandleClick}
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupModal;
