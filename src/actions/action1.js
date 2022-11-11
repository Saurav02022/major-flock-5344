import {ADD_ITEM_TO_CART} from "../constants/action-types";
import { INCREASE_QUANTITY_OF_PRODUCT } from "../constants/action-types";
import { DECREASE_QUANTITY_OF_PRODUCT } from "../constants/action-types";
import {REMOVE_ITEM_FROM_CART} from "../constants/action-types";
import { GET_PRODUCT_QUANTITY } from "../constants/action-types";
import { EMPTY_CART } from "../constants/action-types";
import { ADD_NEW_ADDRESS } from "../constants/action-types";
import { REMOVE_ADDRESS } from "../constants/action-types";
import { GET_SELECTED_ADDRESS_ID } from "../constants/action-types";
import { REMOVE_SELECTED_ADDRESS_ID } from "../constants/action-types";
import { GET_USER_ORDERED_DATA } from "../constants/action-types";
import { REMOVE_USER_ORDERED_DATA } from "../constants/action-types";


export const addItemToCart = (event)=>(dispatch)=> {
    console.log("Add item to cart Action Triggered")
    dispatch ({ 
        type: ADD_ITEM_TO_CART, 
        payload : {
            id: event.target.id
        }
    });
}

export const increaseQuantity = (event) => (dispatch)=> {
    console.log("Increase quantity action triggered")
    dispatch({
        type: INCREASE_QUANTITY_OF_PRODUCT,
        payload: {
            id: event.target.id
        }
    })
}

export const decreaseQuantity = (event) => (dispatch) => {
    console.log("Decrease Quantity Action Triggered")
    dispatch({
        type: DECREASE_QUANTITY_OF_PRODUCT,
        payload: {
            id: event.target.id
        }
    })
}

export const removeItemFromCart = (event)=>(dispatch)=> {
    console.log("Remove item from cart Action Triggered")
    dispatch ({ 
        type: REMOVE_ITEM_FROM_CART, 
        payload : {
            id: event.target.id
        }
    });
}

export const getQuantityFromCart = (event) => (dispatch) => {
    console.log("get quantity From Cart Action Triggered")
    dispatch({
        type: GET_PRODUCT_QUANTITY,
        payload : {
            id: event.target.id,
            quantity: event.target.value
        }
    })
}

export const emptyCart = () => (dispatch) => {
    console.log("Empty Cart Action Triggered")
    dispatch({
        type: EMPTY_CART,
    })
}

export const addNewAddress = (addressObject) => (dispatch) => {
    console.log("New Address Action Triggered")
    dispatch({
        type: ADD_NEW_ADDRESS,
        payload: {
            address: addressObject
        }
    })
}

export const removeAddress = (event) => (dispatch) => {
    console.log("Remove Address Action Triggered ")
    dispatch({
        type: REMOVE_ADDRESS,
        payload: {
            id: event.target.id
        }
    })
}

export const getSelectedAddressId = (event) => (dispatch) => {
    console.log("Get Selected Address Id Action Triggered")
    dispatch({
        type: GET_SELECTED_ADDRESS_ID,
        payload: {
            id: event.target.id
        }
    })
} 

export const removeSelectedAddressId = () => (dispatch) => {
    console.log("Remove selected user address id action triggered")
    dispatch({
        type: REMOVE_SELECTED_ADDRESS_ID
    })
}

export const getUserOrderedData = (orderData) => (dispatch) => {
    console.log("Get User Ordered Data Action Triggered");
    dispatch({
        type: GET_USER_ORDERED_DATA,
        payload: {
            data: orderData
        }
    })
}

export const removeUserOrderedData = () => (dispatch) => {
    console.log("Remove User Order Data Action Triggered");
    dispatch({
        type: REMOVE_USER_ORDERED_DATA
    })
}