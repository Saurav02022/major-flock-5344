import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeUserOrderedData } from "../actions/action1";
import "./OrderPlacedSuccessfully.css";

class OrderPlacedSuccessfully extends Component {
  getProuctData = () => {
    let productsArray = this.props.local_variable.userOrderedDetails.map((object, index) => {
      return (
        <tr key={index}>
          <td>{object.title}</td>
          <td className="text-center">{object.productQuantity}</td>
          <td className="text-center">{object.price}</td>
          <td className="text-center">
            {Math.round(Number(object.productQuantity) * Number(object.price))}
          </td>
        </tr>
      );
    });

    return productsArray;
  };

  getTotalCartValue = () => {
    let totalOrderValue = this.props.local_variable.userOrderedDetails.reduce(
      (totalValue, currentObject) => {
        totalValue =
          Number(totalValue) +
          Math.round(
            Number(currentObject["productQuantity"]) *
              Number(currentObject["price"])
          );
        return totalValue;
      },
      0
    );

    return totalOrderValue;
  };

  getSelectedAddress = () => {
    let requiredAddress = this.props.local_variable.address.filter((object) => {
      return object.id === this.props.local_variable.requiredAddressId[0];
    });

    let requiredAddressElement = requiredAddress.map((object, index) => {
      return (
        <div key={index}>
          <h5>Firstname: {object.firstname}</h5>
          <p>Address: {object.address}</p>
          <p>pincode: {object.pincode}</p>
          <p>Ph: {object.phonenumber}</p>
        </div>
      );
    });

    return requiredAddressElement;
  };

  handleClick = (event) => {
    console.log(event.target.id)
  }

  render() {
    return (
      <div className="container-margin">
        <div className="container">
          <div className="row">
            <div>
              <div className="d-flex">
                <div className="d-flex align-items-baseline justify-content-center order-placed-heading-container">
                  <i className="fa-solid fa-circle-check order-placed-heading-container-icon"></i>
                  <h5>Yay! Order Placed</h5>
                </div>
                <i className="fa-solid fa-truck-fast animation-truck"></i>
              </div>
            </div>
            <hr />

            <div className="container">
              <h5 className="mt-5">Summary: </h5>
              <table className="table-container">
                <tbody>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Sub Total</th>
                  </tr>
                  {this.getProuctData()}

                  <tr>
                    <td colSpan="3" className="text-end">
                      Total Order Value
                    </td>
                    <td className="text-center">{this.getTotalCartValue()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <hr/>
          <div className="mt-4">
            <h5>Deliver to: </h5>

            {this.getSelectedAddress()}
          </div>
          <hr/>
          <div className="mt-4">
            <h5>Shipment Details:</h5>
            <div className="mb-3">
              <input
                type="radio"
                defaultChecked="checked"
                className="delivery-options-icon"
              />
              <label>
                Default Delivery Option{" "}
                <span>
                  1 Shipment, Delivery Charge:{" "}
                  <span className="delivery-options-span">Free</span>
                </span>
              </label>
            </div>
            <div className="d-flex justify-content-between delivery-options-container">
              <div className="d-flex align-items-baseline">
                <i className="fa-solid fa-truck-fast delivery-options-icon"></i>
                <p>Shipment1: National Shipment</p>
              </div>
              <div>
                <p>
                  Delivery Charge:{" "}
                  <span className="delivery-options-span">FREE</span>
                </p>
              </div>
              <div className="d-flex align-items-baseline">
                <i className="fa-solid fa-clock delivery-options-icon"></i>
                <p>TOMORROW 10:00 AM - 09:00 PM</p>
              </div>
            </div>
          </div>
          <hr/>
          <div className="mt-5">
            <NavLink to="/">
              <button onClick={this.props.removeUserOrderedData} className="home-button"><i className="fa-solid fa-basket-shopping home-button-icon"></i>SHOP MORE</button>
            </NavLink>
            
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  local_variable: state,
});

export default connect(mapStateToProps, {removeUserOrderedData})(OrderPlacedSuccessfully);
