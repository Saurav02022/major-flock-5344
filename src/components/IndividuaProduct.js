import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {addItemToCart} from "../actions/action1";
import { increaseQuantity } from "../actions/action1";
import { decreaseQuantity } from "../actions/action1";
import { removeItemFromCart } from "../actions/action1";
import "./individualProduct.css"

class IndividuaProduct extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isCartButtonClicked: false
    }
  }

  handleInitialClick = (event) => {
    this.setState({
      isCartButtonClicked: true
    })
    this.props.addItemToCart(event)
  }

  handleIncreaseQuantity = (event) => {
    this.props.increaseQuantity(event)
  }

  handleDecreaseQuantity = (event) => {

    const requiredCartItem = this.props.local_variable.cart.filter((object) => {
      return Number(object.id) === Number(event.target.id)
    })

    if(Number(requiredCartItem[0].productQuantity) > 1) {
      this.props.decreaseQuantity(event)
    } else {
      this.setState({
        isCartButtonClicked: false
      })
      this.props.removeItemFromCart(event)
    }
    
  }

  getProductQuantity = (idOfProduct) => {
    let requiredObject = this.props.local_variable.cart.filter((object) => {
      return Number(object.id) === Number(idOfProduct);
    })

    return requiredObject[0].productQuantity;
    
  }

  render() {
    const requiredProduct = this.props.local_variable.product.filter((object) => {
      return Number(this.props.match.params.id) === Number(object.id);
    });
    return (
      <>
        <div className="container individual-back-margin">
          <div className="carousel-margin d-flex justify-content-between">
            <NavLink to="/mainContent" className="text-dark">
              <i className="fa-solid fa-arrow-left back-arrow"></i>
            </NavLink>            
          </div>
          <div className="row justify-content-center">
            <div
              className="col-12 col-md-6 col-lg-4 p-3 w-75 product-container"
            >
              <div className="w-50 mb-3 ">
                <img style={{ width: "85%" }} src={requiredProduct[0].img} alt="" />
              </div>
              <div>
                <h3 style={{ fontSize: "100%" }}>{requiredProduct[0].title}</h3>
              </div>
              <div className="mb-3">
                <h6 style={{ fontSize: "90%" }}>Category: {requiredProduct[0].category}</h6>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <h6 style={{ fontSize: "90%" }}>QTY: {requiredProduct[0].quantity}</h6>
                <div className="d-flex align-items-baseline">
                  <i
                    style={{ fontSize: "70%" }}
                    className="fa-solid fa-indian-rupee-sign"
                  ></i>
                  <h6 style={{ fontSize: "90%" }}>{requiredProduct[0].price}</h6>
                </div>
              </div>
              {/* Rating container */}
              <div className="d-flex">
                <div className="d-flex rating-container justify-content-center align-items-baseline">
                  <p style={{ fontSize: "90%" }}>{requiredProduct[0].rating.rate}</p>
                  <i
                    className="fa-solid fa-star"
                    style={{ fontSize: "80%" }}
                  ></i>
                </div>
                <p style={{ fontSize: "90%" }}>{requiredProduct[0].rating.count} Ratings</p>
              </div>
              <div className="buttons-container mt-3">
                {this.state.isCartButtonClicked ? 
                (<div className="d-flex w-75 justify-content-center ">
                  <button className="quantity-toggle-buttons" id={requiredProduct[0].id} onClick={this.handleDecreaseQuantity}>-</button>
                  <p className="quantity-toggle-para">{this.getProductQuantity(requiredProduct[0].id) ? `${this.getProductQuantity(requiredProduct[0].id)} in basket` : `${1} in basket`}</p>
                  <button className="quantity-toggle-buttons" id={requiredProduct[0].id} onClick={this.handleIncreaseQuantity}>+</button>
                </div>) 
                : (<button className="addToCartAndBuyNowButton" id={requiredProduct[0].id} onClick={this.handleInitialClick}>
                  ADD TO CART
                </button>)}
                
              </div>
            </div>
          </div>
        </div>
        <div className="w-75 m-auto mt-5">
            <h3>{requiredProduct[0].title}</h3>
            <hr/>
            <p>{requiredProduct[0].body}</p> <br/>
            <p>{requiredProduct[0].body}</p> <br/>
            <p>{requiredProduct[0].body}</p>
        </div>
      </>
    );
  }
}

const mapStateToPros = (state) => ({
  local_variable: state
});

export default connect(mapStateToPros, {addItemToCart, increaseQuantity, decreaseQuantity, removeItemFromCart})(IndividuaProduct);
