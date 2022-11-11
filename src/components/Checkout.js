import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewAddress } from "../actions/action1";
import { removeAddress } from "../actions/action1";
import { v4 as uniqueKey } from "uuid";
import "./Checkout.css";
import { NavLink } from "react-router-dom";
import { getSelectedAddressId } from "../actions/action1";
import validator from "validator";
import { getUserOrderedData } from "../actions/action1";
import { emptyCart } from "../actions/action1";
import { removeSelectedAddressId } from "../actions/action1";
import { Redirect } from "react-router-dom";


class Checkout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isAddressSubmitted: false,
      isAddressSelected: false,
      cardButtonDisable: true,
      saveAddressButtonDisable: "",
      name: "",
      address: "",
      pincode: "",
      phonenumber: "",
      nameError: "",
      addressError: "",
      pincodeError: "",
      phonenumberError: "",
      cardNumber: "",
      validdate: "",
      cvv:"",
      cardNumberError: "",
      validDateError:"",
      cvvError: "",
      readyToPlaceOrder: false,
      orderPlacedErrorMessage: ""
    }
  }

  addNewAddressModal = () => {
    this.setState({
      isAddressSubmitted: false,
      name: "",
      address: "",
      pincode: "",
      phonenumber: "",
    })
  }

  resetAddressModal = () => {
    this.setState({
      isAddressSubmitted: false,
    })
  }

  handleSelectedDeliveryAddress = (event) => {
    this.props.getSelectedAddressId(event);
  }


  handleAddressValidation = (event) => {

    if(event.target.name === "firstname") {
      if(!validator.isAlpha(event.target.value)) {
        this.setState({
          nameError: "Please Enter a Valid First Name",
          name: event.target.value
        })
      }
      else {
        this.setState({
          nameError: "",
          name: event.target.value
        })
      }
    } else if(event.target.name === "address") {
      if(!validator.isAscii(event.target.value)) {
        this.setState({
          addressError: "Please Enter a Valid Address",
          address: event.target.value
        })
      } else {
        this.setState({
          addressError: "",
          address: event.target.value
        })
      }
    } else if(event.target.name === "pincode") {
      if(!validator.isPostalCode(event.target.value, "IN")) {
        this.setState({
          pincodeError: "Please Enter a Valid pincode",
          pincode: event.target.value
        })
      } else {
        this.setState({
          pincodeError: "",
          pincode: event.target.value
        })
      }
    } else if(event.target.name === "phonenumber") {
      if(!validator.isMobilePhone(event.target.value, "en-IN")) {
        this.setState({
          phonenumberError: "Please Enter a Valid Phone Number",
          phonenumber: event.target.value
        })
      } else {
        this.setState({
          phonenumberError: "",
          phonenumber: event.target.value
        })
      }
    }
  }

  handleAddressForm = (event) => {
    const{name, address, pincode, phonenumber} = this.state;
    const{nameError, addressError, pincodeError, phonenumberError} = this.state;
    event.preventDefault();

    if(!name) {
      this.setState({
        nameError: "Please Enter a Valid First Name"
      })
    }

    if(!address) {
      this.setState({
        addressError: "Please Enter a Valid address"
      })
    }

    if(!pincode) {
      this.setState({
        pincodeError: "Please Enter a Valid pincode"
      })
    }

    if(!phonenumber) {
      this.setState({
        phonenumberError: "Please Enter a Valid phone Number"
      })
    }

    
    let myObject = {};

    myObject["id"] = uniqueKey();
    myObject["firstname"] = event.target[0].value;
    myObject["address"] = event.target[1].value;
    myObject["pincode"] = event.target[2].value;
    myObject["phonenumber"] = event.target[3].value;
    myObject['isSelected'] = false;

    if(name && address && pincode && phonenumber && (!nameError) && (!addressError) && (!pincodeError) && (!phonenumberError)) {
      this.props.addNewAddress([myObject]);
      this.setState({
      isAddressSubmitted: true
    })
  }

    event.target.reset(); // reseting form after submission
  };

  handleCardValidation = (event) => {
    event.preventDefault()
    const {cardNumber, validdate, cvv} = this.state;

    if(!cardNumber) {
      this.setState({
        cardNumberError: "Please Enter a Valid Card Number"
      })
    }

    if(!validdate) {
      this.setState ({
        validDateError: "Please Enter a Valid Date"
      })
    }

    if(!cvv) {
      this.setState({
        cvvError: "Please Enter a Valid CVV"
      })
    }
  }


  handleRemovingAddressIdAndAddress = (event) => {
    this.props.removeAddress(event);
    this.props.removeSelectedAddressId();
  }

  getAddressFromStore = () => {
    let addressList = this.props.local_variable.address.map((object, index) => {
      return (
        <div className={object['isSelected']? "col-12 col-sm-6 mb-5 address-selected-highlight" : "col-12 col-sm-6 mb-5"} key={index}>
          <h5>Firstname: {object.firstname}</h5>
          <p>Address: {object.address}</p>
          <p>pincode: {object.pincode}</p>
          <p>Ph: {object.phonenumber}</p>
          <div className="d-flex justify-content-between">
            <button
              className="delivery-remove-address-button "
              id={object.id}
              onClick={this.handleSelectedDeliveryAddress}
            >
              DELIVER HERE
            </button>
            <button
              className="delivery-remove-address-button"
              id={object.id}
              onClick={this.handleRemovingAddressIdAndAddress}
            >
              REMOVE ADDRESS
            </button>
          </div>
          
        </div>
      );
    });

    if (this.props.local_variable.address.length === 0) {
      return (
        <div className="text-center">
          <h5 className="checkout-section-headings">No Address Found!</h5>
        </div>
      );
    } else {
      return addressList;
    }
  };

  handleUPIClick = (event) => {
    event.preventDefault();
  };

  handleCardDetails = (event) => {
    if(event.target.name === "card") {
      
      if(!validator.isCreditCard(event.target.value)) {
        this.setState({
          cardNumberError: "Please Enter a Valid Card Number",
          cardNumber: event.target.value
        })
      } else {
        this.setState({
          cardNumberError: "",
          cardNumber: event.target.value
        })
      }
    } else if(event.target.name === "validDate") {
      if(!(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(event.target.value))) {
        this.setState({
          validDateError: "Please Enter a Valid Date",
          validdate: event.target.value
        })
      } else {
        this.setState({
          validDateError: "",
          validdate: event.target.value
        })
      }
    } else if(event.target.name === "cvv") {
      if((validator.isNumeric(event.target.value)) && (event.target.value.length === 3)) {
        this.setState({
          cvvError: "",
          cvv: event.target.value
        })
        
      } else {
        this.setState({
          cvvError: "Please Enter a Valid CVV",
          cvv: event.target.value
        })
      }
    }
  }

  handleOrderData = () => {
    this.props.getUserOrderedData(this.props.local_variable.cart);
    if(this.props.local_variable.address.length !==0 && this.props.local_variable.requiredAddressId.length !== 0 && this.props.local_variable.cart.length !== 0) {
      this.setState({
        readyToPlaceOrder: true,
        orderPlacedErrorMessage: "",
        
      }, () => {this.props.emptyCart()})
    } else if(this.props.local_variable.address.length === 0 && this.props.local_variable.requiredAddressId.length === 0 && this.props.local_variable.cart.length === 0) {
      this.setState({
        readyToPlaceOrder: false,
        orderPlacedErrorMessage: "Please add and select an address and Products to be placed."
      })
    } else if(this.props.local_variable.address.length === 0 && this.props.local_variable.cart.length !== 0){
    this.setState({
      readyToPlaceOrder: false,
      orderPlacedErrorMessage: "Please add and select an address."
    })

  }else if(this.props.local_variable.address.length !== 0 && this.props.local_variable.requiredAddressId.length === 0 && this.props.local_variable.cart.length !== 0) {
    this.setState({
      readyToPlaceOrder: false,
      orderPlacedErrorMessage: "Please select an address"
    })
  } else if(this.props.local_variable.address.length !== 0 && this.props.local_variable.requiredAddressId.length !== 0 && this.props.local_variable.cart.length === 0) {
    this.setState({
      readyToPlaceOrder: false,
      orderPlacedErrorMessage: "Please Add Items to the cart to place the order."
    })
  }


  } 

  render() {
    return (
      <div className="container-margin ">
        <div className="container">
          <div className="row">
          <NavLink to="/cart" className="text-dark">
              <i className="fa-solid fa-arrow-left back-arrow"></i>
            </NavLink>
            <div className="d-flex justify-content-between mt-5">
              <div className="d-flex align-items-baseline checkout-section-headings">
                <i className="fa-solid fa-location-dot checkout-section-headings-icons "></i>
                <h5>Delivery Address</h5>
              </div>
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                className="add-new-address-button"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={this.addNewAddressModal}
              >
                ADD NEW ADDRESS
              </button>
            </div>

            <hr />

            {/* <!-- Modal --> */}
            <div

              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="false"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">
                      Add Address
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    {this.state.isAddressSubmitted ?
                    <div>
                      <h3 className="mb-5">Address Added Successfully</h3>
                      <div className="d-flex justify-content-between">
                        <button
                          type="button"
                          className="modal-close-button w-25 mb-3"
                          data-bs-dismiss="modal"
                          
                          onClick={this.resetAddressModal}
                        >
                          Close
                        </button>

                        <button
                          type="button"
                          onClick={this.addNewAddressModal}
                          className="modal-save-button w-50 mb-3"
                        >
                          Add New Address
                        </button>
                      </div>
                    </div>
                      : (
                      <form
                      onSubmit={this.handleAddressForm}
                      className="d-flex flex-column align-items-center"
                    >
                      <input
                        name="firstname"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleAddressValidation}
                        placeholder="FirstName"
                        className="mb-3 w-75"
                      />
                      <p className="error-messages">{this.state.nameError}</p>
                      <textarea
                        name="address"
                        placeholder="Address"
                        onChange={this.handleAddressValidation}
                        value={this.state.address}
                        className="mb-3 w-75"
                      />
                      <p className="error-messages">{this.state.addressError}</p>
                      <input
                        name="pincode"
                        type="text"
                        value={this.state.pincode}
                        onChange={this.handleAddressValidation}
                        placeholder="Pincode"
                        className="mb-3 w-75"
                      />
                      <p className="error-messages">{this.state.pincodeError}</p>
                      <input
                        name="phonenumber"
                        type="text"
                        value={this.state.phonenumber}
                        placeholder="Phone Number"
                        onChange={this.handleAddressValidation}
                        className="mb-3 w-75"
                      />
                      <p className="error-messages">{this.state.phonenumberError}</p>

                      <div className="d-flex justify-content-between w-75">
                        <button
                          type="button"
                          className="modal-close-button w-25 mb-3"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>

                        <button
                          type="submit"
                          className="modal-save-button w-25 mb-3"
                          disabled={this.state.saveAddressButtonDisable}
                        >
                          Save
                        </button>
                      </div>
                    </form>
                    )
                    }
                    
                  </div>
                </div>
              </div>
            </div>
            {this.getAddressFromStore()}
          </div>

          {/* Delivery Options Row */}
          <div className="row mt-5">
            <div className="d-flex align-items-baseline checkout-section-headings">
              <i className="fa-solid fa-calendar-days checkout-section-headings-icons "></i>
              <h5>Delivery Options</h5>
            </div>
            <hr />

            <div className="col-12">
              <div>
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
            </div>
          </div>

          {/* Payment options row */}
          <div className="row mt-5">
            <div className="d-flex align-items-baseline checkout-section-headings">
              <i className="fa-solid fa-credit-card checkout-section-headings-icons"></i>
              <h5>Payment Options</h5>
            </div>
            <hr />
            <div>
              <div>
                {/* Credit/Debit Cart Containers */}
                <div className="mb-2">
                  <button
                    className="payment-container-buttons"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#button-credit-card"
                    aria-expanded="false"
                    aria-controls="button-credit-card"
                  >
                    Credit/Debit Card
                  </button>
                </div>
                <div className="collapse w-75" id="button-credit-card">
                  <div className="card card-body">
                    <div>
                      <div className="d-flex justify-content-center align-items-baseline checkout-section-headings">
                        <input
                          type="radio"
                          defaultChecked="checked"
                          className="checkout-section-headings-icons"
                        />
                        <h5>Add Credit / Debit Card</h5>
                      </div>
                      <form onSubmit={this.handleCardValidation}>
                        <div className="mb-5">
                          <p>Card Number</p>
                          <input
                            type="text"
                            name="card"
                            onChange={this.handleCardDetails}
                            value={this.state.cardNumber}
                            className="payment-credit-input"
                            placeholder="Enter Card Number"
                          />
                          <p className="error-messages">{this.state.cardNumberError}</p>
                        </div>
                        <div className="d-flex mb-5">
                          <div className="d-flex flex-column">
                            <p>Valid Thru</p>
                            <input
                              type="text"
                              onChange={this.handleCardDetails}
                              name="validDate"
                              value={this.state.validdate}
                              className="payment-credit-input"
                              placeholder="MM/YY"
                            />
                            <p className="error-messages">{this.state.validDateError}</p>
                          </div>
                          
                          <div>
                            <p>CVV</p>
                            <input
                              type="text"
                              name="cvv"
                              onChange={this.handleCardDetails}
                              value={this.state.cvv}
                              className="payment-credit-input"
                              placeholder="Security Code"
                            />
                            <p className="error-messages">{this.state.cvvError}</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-baseline">
                          <input type="checkbox" id="check" />
                          <label
                            htmlFor="check"
                            className="payments-para-styling"
                          >
                            Save this card for faster payments
                          </label>
                  
                        </div>
                        <div className="mt-4">
                            <button className="place-order-button" type="submit">
                              Place order & Pay
                            </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                {/* upi */}
                <div className="mb-2">
                  <button
                    className="payment-container-buttons"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#button-upi"
                    aria-expanded="false"
                    aria-controls="button-upi"
                  >
                    UPI
                  </button>
                </div>
                <div className="collapse w-75" id="button-upi">
                  <div className="card card-body">
                    <div className="d-flex justify-content-center align-items-baseline checkout-section-headings">
                      <input
                        type="radio"
                        defaultChecked="checked"
                        className="checkout-section-headings-icons"
                      />
                      <h5>Add UPI</h5>
                    </div>
                    <form>
                      <div className="mb-5">
                        <p>UPI</p>
                        <input
                          type="text"
                          className="payment-credit-input"
                          placeholder="add @upi id"
                        />
                      </div>
                      <div>
                 
                          <button
                            onClick={this.handleUPIClick}
                            className="place-order-button"
                          >
                            Place order & Pay
                          </button>
               
                      </div>
                    </form>
                  </div>
                </div>

                {/* cod */}
                <div className="mb-2">
                  <button
                    className="payment-container-buttons"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#button-cod"
                    aria-expanded="false"
                    aria-controls="button-cod"
                  >
                    Cash on delivery
                  </button>
                </div>
                <div className="collapse w-75" id="button-cod">
                  <div className="card card-body">
                    <div className="mt-4">
                      {this.state.readyToPlaceOrder ? <Redirect to="/orderplaced"/> :<button className="place-order-button" onClick={this.handleOrderData}>
                          Place order
                        </button> }
                        <p className="error-messages">{this.state.orderPlacedErrorMessage}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToPros = (state) => ({
  local_variable: state,
});

export default connect(mapStateToPros, {
  addNewAddress,
  removeAddress,
  getSelectedAddressId,
  getUserOrderedData,
  emptyCart,
  removeSelectedAddressId
})(Checkout);
