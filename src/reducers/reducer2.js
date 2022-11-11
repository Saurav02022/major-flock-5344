import { ADD_NEW_ADDRESS } from "../constants/action-types";
import { REMOVE_ADDRESS } from "../constants/action-types";
import { GET_SELECTED_ADDRESS_ID } from "../constants/action-types";

function addressReducer(state = [], action) {
  switch (action.type) {
    case ADD_NEW_ADDRESS:
      return (state = [...state, ...action.payload.address]);

    case GET_SELECTED_ADDRESS_ID:
      console.log(action.payload.id);
      const addressId = action.payload.id;
      const updatedState = state.map((object) => {
          if((object.id) === (addressId)) {
              object['isSelected'] = true;

              return object;
          } else {
            object['isSelected'] = false;
            return object;
          }

          
      })
      return (state = updatedState);

    case REMOVE_ADDRESS:
      let requiredDataRemovingAddress = state.filter((object) => {
        return object.id !== action.payload.id;
      });
      return requiredDataRemovingAddress;

    default:
      return state;
  }
}

export default addressReducer;
