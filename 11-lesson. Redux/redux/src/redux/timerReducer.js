// const reducer = (
//   state = [], 
//   {
//     type: Type.INCTREMENT,
//     payload: value
//   }
// ) => {}


import { combineReducers } from "redux";
import { Type } from "./timerActions";

const valueReducer = (state = 0, action) => {
  switch(action.type) {
    case Type.INCTREMENT:
      return state + action.payload;

    case Type.DECTREMENT: 
      return state - action.payload;

      default: 
        return state;
  }
}


const stepReducer = (state = { value: 5, label: '5' }, action) => {
  switch(action.type) {
    case  Type.CHANGE_STEP:
    return action.payload;
    
    default: 
        return state;
  }
}

export default combineReducers({
  value: valueReducer,
  step: stepReducer
})




// let store = {
//   value: valueReducer,
//   step: stepReducer
// }


// let store = {
//   value: 0,
//   step: {}
// }