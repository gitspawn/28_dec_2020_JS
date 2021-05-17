import { uuid } from 'uuidv4';
import actionTypes from './tasksActionTypes';

let addTask = text => (
  {
    type: actionTypes.ADD,
    payload: {
      task: {
        id: uuid(),
        text,
        completed: false,
      }
    }
  }
);

let removeTask = (taskId) => (
  {
    type: actionTypes.REMOVE,
    payload: {
      taskId
    }
  }
);

let toggleCompleted = (taskId) => (
  {
    type: actionTypes.TOGGLE_COMPLETED,
    payload: {
      taskId
    }
  }
);


let changeFilter = (filter) => (
  {
    type: actionTypes.CHANGE_FILTER,
    payload: {
      filter
    }
  }
);


export default {
  addTask,
  removeTask,
  toggleCompleted,
  changeFilter
};
