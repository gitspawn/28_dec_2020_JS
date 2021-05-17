import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import tasksActions from './tasksActions';



const addTask = (state, action) => {
  return [...state, action.payload.task];
};


let removeTask = (state, action) => {
  return state.filter((task) => task.id !== action.payload);
};


let toggleCompleted = (state, action) => {
  return state.map((task) => {
    return task.id === action.payload
      ? { ...task, completed: !task.completed }
      : task;
  });
};

let items = createReducer({
  [tasksActions.addTask]: addTask,
  [tasksActions.removeTask]: removeTask,
  [tasksActions.toggleCompleted]: toggleCompleted
});



let filter = createReducer('', {
  [tasksActions.changeFilter]: (state, action) => action.payload
});


export default combineReducers({
  items,
  filter
});


// let itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionTypes.ADD:
//       return [...state, payload.task];

//     case actionTypes.REMOVE:
//       return state.filter((task) => task.id !== payload.taskId);

//     case actionTypes.TOGGLE_COMPLETED:
//       return state.map((task) => {
//         return task.id === payload.taskId
//           ? { ...task, completed: !task.completed }
//           : task;
//       });

//     default:
//       return state;
//   }
// };


// let filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.CHANGE_FILTER:
//       return payload.filter;

//     default:
//       return state;
//   }
// };


// export default combineReducers({
//   items: itemsReducer,
//   filter: filterReducer
// });
