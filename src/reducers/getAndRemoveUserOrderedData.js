import { GET_USER_ORDERED_DATA } from "../constants/action-types";
import { REMOVE_USER_ORDERED_DATA } from "../constants/action-types";

function userOrderDataReducer(state=[], action) {
    switch(action.type) {
        case(GET_USER_ORDERED_DATA): 
        return state = action.payload.data;

        case(REMOVE_USER_ORDERED_DATA):
        return state = [];

        default:
            return state;
        
    }
}

export default userOrderDataReducer;