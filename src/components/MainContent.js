import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class MainContent extends Component {
 
  getProducts = () => {
    let contentContainers = this.props.local_variable.product.map((object) => {
      return (
        <div
          className="col-12 col-md-6 col-lg-4 p-3 product-container d-flex align-items-end"
          id={object.id}
          key={object.id}
        >
          <NavLink to={`/product/${object.id}`} className="navlink">         
          <div className="w-50 mb-3 align-image">
            <img className="w-100" src={object.img} alt="" />
          </div>
          <div>
            <h3 style={{ fontSize: "100%" }}>{object.title}</h3>
          </div>
          <div className="mb-3">
            <h6 style={{ fontSize: "90%" }}>Category: {object.category}</h6>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <h6 style={{ fontSize: "90%" }}>QTY: {object.quantity}</h6>
            <div className="d-flex align-items-baseline">
              <i
                style={{ fontSize: "70%" }}
                className="fa-solid fa-indian-rupee-sign"
              ></i>
              <h6 style={{ fontSize: "90%" }}>{object.price}</h6>
            </div>
          </div>
          {/* Rating container */}
          <div className="d-flex">
            <div className="d-flex rating-container  align-items-baseline">
              <p style={{ fontSize: "90%" }}>{object.rating.rate}</p>
              <i className="fa-solid fa-star" style={{ fontSize: "80%" }}></i>
            </div>
            <p style={{ fontSize: "90%" }}>{object.rating.count} Ratings</p>
          </div>
          <div className="text-center mt-5">
            <button className="button-1 mt-auto">View Product Details</button>
          </div>
          </NavLink>
        </div>
      );
    });

    return contentContainers;
  };
  render() {
    return (
      <>
        <div className="carousel-margin">
          <div className="d-flex align-items-baseline all-products-tagline">
            <i
              className="fa-solid fa-truck-moving m-2 all-products-tagline-truck"
              style={{ fontSize: "100%" }}
            />
            <p className="m-0" style={{ fontSize: "80%" }}>
              All Products
            </p>
          </div>
          <hr className="m-0" />
        </div>   
        <div className="container">
          <div className="carousel-margin d-flex justify-content-between">
              <NavLink to="/" className="text-dark">
                <i className="fa-solid fa-arrow-left back-arrow"></i>
              </NavLink>

          </div> 
          <div className="row p-2">
            {this.getProducts()}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToPros = (state) => ({
  local_variable: state,
});

export default connect(mapStateToPros)(MainContent);
