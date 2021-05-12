import {createStore, combineReducers} from 'redux';
import timerReducer from './timerReducer'
import { devToolsEnhancer } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  timer: timerReducer
})

const store = createStore(rootReducer, devToolsEnhancer())
export default store;




// let state = {
//   value: 0
//   step: {}
// }

// let state = {
//   timer: {
//     value: 0,
//     step: {}
//   }
// }

// import {createStore} from 'redux';

// const reducer = (state = [], action) => {}

// createStore(reducer)