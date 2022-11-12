import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { increaseQuantity } from "../actions/action1";
import { decreaseQuantity } from "../actions/action1";
import { removeItemFromCart } from "../actions/action1";
import { getQuantityFromCart } from "../actions/action1";
import { emptyCart } from "../actions/action1";
import "./cart.css";
import PrivateRoute from "../Context/PrivateRoute";

class cart extends Component {
 
  handleIncreaseQuantity = (event) => {
    this.props.increaseQuantity(event)
  }

  handleDecreaseQuantity = (event) => {
    this.props.decreaseQuantity(event)
  }

  getProductQuantity = (idOfProduct) => {
    let requiredObject = this.props.local_variable.cart.filter((object) => {
      return Number(object.id) === Number(idOfProduct);
    })
    return requiredObject[0]['productQuantity']
    
  }

  getTotalCartValue = () => {
    let totalCartValue = this.props.local_variable.cart.reduce((totalValue, currentValue) => {
      totalValue = totalValue + Number(currentValue['productQuantity']) * Number(currentValue['price']);
      return totalValue;
    }, 0)

    return Math.round(totalCartValue);
  }

  getCartProducts = () => {
    let cartProducts = this.props.local_variable.cart.map((object, index) => {
      return (
        <div
          className="col-12"
          key={object.id}
        >
          <div className="d-sm-flex justify-content-sm-around mb-5">
            {/* image container */}
            <div className="mb-4 w-25 image-alignment-cart">
              <img
                className="w-100"
                src={object.img}
                alt=""
              />
            </div>
            {/* content container */}
            <div className="w-100">
              <div>
                <h3 style={{ fontSize: "100%" }}>
                  {object.title}
                </h3>
              </div>
              <div className="mb-3">
                <h6 style={{ fontSize: "90%" }}>
                  Category: {object.category}
                </h6>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <div className="d-flex ">
                  <button className="quantity-toggle-buttons-cart" id={object.id} onClick={this.handleDecreaseQuantity}>-</button>
                  <p className="quantity-toggle-para-cart">{this.getProductQuantity(object.id) ? `${this.getProductQuantity(object.id)} in basket` : `${1} in basket`}</p>
                  <button className="quantity-toggle-buttons-cart" id={object.id} onClick={this.handleIncreaseQuantity}>+</button>
                  
                </div>
                <div className="d-flex flex-column">
                  <p>UNIT PRICE</p>
                  <div className="d-flex align-items-baseline">
                    <i
                      style={{ fontSize: "90%" }}
                      className="fa-solid fa-indian-rupee-sign"
                    ></i>
                    <h3 style={{ fontSize: "100%" }}>
                      {object.price}
                    </h3>
                  </div>
                </div>

                <div className="d-flex flex-column">
                  <p>SUBTOTAL</p>
                  <div className="d-flex align-items-baseline">
                    <i
                      style={{ fontSize: "90%" }}
                      id = {object.id}
                      className="fa-solid fa-indian-rupee-sign"
                    ></i>
                    <h3 style={{ fontSize: "100%" }}>
                      {Number(this.props.local_variable.cart[index].productQuantity) * Number(object.price)}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  className="remove-cart-item-button"
                  id={object.id}
                  onClick={this.props.removeItemFromCart}
                >
                  Remove Item
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return cartProducts;
  };

  render() {
    if (this.props.local_variable.cart.length === 0) {
      return (
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <h2>There are no items in your Cart</h2>
          <NavLink to="/mainContent">
            <button className="continue-shopping-button">
              Continue Shopping
            </button>
          </NavLink>
        </div>
      );
    } else {
      return (
        <>
          <div className="container container-margin">
            <h3 className="mb-3">Your Cart</h3>
            <hr/>
            <div className="row">
              {this.getCartProducts()}
            </div>
          </div>

          {/* Total Pricing Section */}
          <div className="d-flex  justify-content-around">
              <button className="empty-continue-cart-button" onClick={this.props.emptyCart}>EMPTY CART</button>
              <NavLink to="/mainContent">
                <button className="empty-continue-cart-button">CONTINUE SHOPPING</button>
              </NavLink>
            </div>
          <hr/>

          <div className="m-3 d-lg-flex justify-content-lg-around total-container-width ">
            <div className="checkout-container">
              <div className="d-flex align-items-baseline justify-content-between">
              <h5>
                TOTAL
              </h5>                
                <div className="d-flex align-items-baseline ">
                    <i
                      style={{ fontSize: "90%" }}
                      className="fa-solid fa-indian-rupee-sign"
                    ></i>
                    <h5 style={{ fontSize: "100%" }}>
                      {this.getTotalCartValue()}
                    </h5>
                </div>
              </div>
              <p className="checkout-subtotal" style={{fontSize: "0.8rem"}}>*Food Coupons are not accepted for this order</p>
              <hr/>

              <div className="d-flex justify-content-end">
                <NavLink to="/checkout">
                  <button className="checkout-buton">CHECKOUT <i className="fa-solid fa-circle-arrow-right checkout-buton-icon"></i></button>
                </NavLink>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

const mapStateToPros = (state) => ({
  local_variable: state,
});

export default connect(mapStateToPros, { removeItemFromCart, getQuantityFromCart, emptyCart, increaseQuantity, decreaseQuantity })(cart);
