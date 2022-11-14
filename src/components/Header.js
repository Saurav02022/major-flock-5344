import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../images/india.png";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg nav-container fixed-top p-2">
          <div className="container-fluid">
            <div className="logo-container">
              <img className="logo" src={logo} alt="" />
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
              <div className="navbar-nav w-75 justify-content-around">
                <NavLink to="/" className="nav-links">
                  Home
                </NavLink>
                <NavLink to="/mainContent" className="nav-links">
                  Products
                </NavLink>
                <NavLink to="/signup" className="nav-links">
                  Signup
                </NavLink>
              </div>
            </div>
          </div>

          <div className="d-flex w-100 align-items-baseline">
            <div className="input-icons mt-2">
              <i className="fa-solid fa-magnifying-glass icon"></i>
              <input type="text" className="input-search-element" placeholder="Search Products"/>
            </div>

            <NavLink to="/cart" className="cart-nav">
                  <i className="fa-solid fa-cart-shopping back-arrow position-relative ms-100 ">
                    <span className="position-absolute top-0 start-100 translate-middle badge pill cart-pill">
                        {this.props.local_variable.cart.length}
                    </span>
                  </i>
            </NavLink>
          </div>
         
        </nav>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  local_variable: state
})

export default connect(mapStateToProps)(Header);
