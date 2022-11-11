import {ADD_DATA} from "../constants/action-types"

const addData = (payload)=>dispatch=> {
    dispatch ({ 
        type: ADD_DATA, 
        payload 
    });
}

export default addData