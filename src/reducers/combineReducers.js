import cartReducer from "./reducer1";
import productReducer from "./index";
import addressReducer from "./reducer2";
import { combineReducers } from "redux";
import selectedAddressReducer from "./selectedAddressReducer";
import userOrderDataReducer from "./getAndRemoveUserOrderedData";

const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer,
    address: addressReducer,
    requiredAddressId: selectedAddressReducer,
    userOrderedDetails: userOrderDataReducer
})

export default rootReducer