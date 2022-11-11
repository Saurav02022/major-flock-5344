import { GET_SELECTED_ADDRESS_ID } from "../constants/action-types";
import {REMOVE_SELECTED_ADDRESS_ID} from "../constants/action-types";

function selectedAddressReducer(state=[], action) {
  switch(action.type) {
    case(GET_SELECTED_ADDRESS_ID):
    console.log(action.payload.id)
    return state = [action.payload.id]

    case(REMOVE_SELECTED_ADDRESS_ID):
    return state = []

    default:
      return state;
  }
}

export default selectedAddressReducer
