// state = {
//   tasks: [],
//   filter: '',
// };


import { combineReducers } from 'redux';
import actionTypes from './tasksActionTypes';

// state = {
//   tasks: {
//     items: [],
//     filter: '',
//   },
// };


// let itemsReducer = (state = [], action) => state;
// let filterReducer = (state = '', action) => state;



let itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return [...state, payload.task];

    case actionTypes.REMOVE:
      return state.filter((task) => task.id !== payload.taskId);

    case actionTypes.TOGGLE_COMPLETED:
      return state.map((task) => {
        return task.id === payload.taskId
          ? { ...task, completed: !task.completed }
          : task;
      });


    // updateCompleted = taskId => {
    //   this.setState(prevState => ({
    //     tasks: prevState.tasks.map(task =>
    //       task.id === taskId ? { ...task, completed: !task.completed } : task,
    //     ),
    //   }));
    // };


    default:
      return state;
  }
};





let filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload.filter;

    default:
      return state;
  }
};




export default combineReducers({
  items: itemsReducer,
  filter: filterReducer
});

// state.items;
// state.filter;;


// addTask = text => {
//   const task = {
//     id: uuid(),
//     text,
//     completed: false,
//   };

//   this.setState(prevState => {
//     return {
//       tasks: [...prevState.tasks, task],
//     };
//   });
// };

// removeTask = taskId => {
//   this.setState(prevState => {
//     return {
//       tasks: prevState.tasks.filter(({ id }) => id !== taskId),
//     };
//   });
// };

// updateCompleted = taskId => {
//   this.setState(prevState => {
//     return {
//       tasks: prevState.tasks.map(task => {
//         if (task.id === taskId) {
//           return {
//             ...task,
//             completed: !task.completed,
//           };
//         }

//         return task;
//       }),
//     };
//   });
// };

// updateCompleted = taskId => {
//   this.setState(prevState => ({
//     tasks: prevState.tasks.map(task =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task,
//     ),
//   }));
// };

// changeFilter = filter => {
//   this.setState({ filter });
// };