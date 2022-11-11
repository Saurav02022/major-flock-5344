import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../images/Big-Basket-logo.png";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg nav-container fixed-top p-2">
          <div className="container-fluid">
            <div className="logo-container">
              <img className="logo" src={'data:image/png;base64,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'} alt="" />
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
