import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import validator from "validator"
import "./SignupModal.css";

class SignupModal extends Component{

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      errorMessageEmail: "",
      errorMessagePassword: "",
      isValidForm: false
    }

  }

  handleChange = (event) => {
    if(event.target.name === 'email') {
      if(!validator.isEmail(event.target.value)) {
        this.setState({
          errorMessageEmail: "Please Enter a Valid Email",
          email: event.target.value
        })
      } else {
        this.setState({
          errorMessageEmail: "",
          email: event.target.value
        })
    }
    } else if(event.target.name === "password") {
      if(!validator.isStrongPassword(event.target.value)) {
        this.setState({
          errorMessagePassword: "Password Should be minimum 7 characters long. It should include One UpperCase, LowerCase, Number, Special Character",
          password: event.target.value
        })
      } else {
        this.setState({
          errorMessagePassword: "",
          password: event.target.value
        })
      }
    }
  }

  handleSubmit = () => {
    if(!this.state.errorMessageEmail && !this.state.errorMessagePassword) {
      console.log("Valid")
      this.setState({
        isValidForm: true
      })
    }
  }
  render() {
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
                  <i className="fa-solid fa-envelope login-icons"/>
                  <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Your Email" />
                  <p>{this.state.errorMessageEmail}</p>
                  <hr />
                  <i className="fa-solid fa-lock login-icons"/>
                  <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Your Password"/>
                  <p>{this.state.errorMessagePassword}</p>
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
                  <button onClick={this.handleSubmit} type="button" className="modal-button">
                    SignUp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
}

export default SignupModal;

