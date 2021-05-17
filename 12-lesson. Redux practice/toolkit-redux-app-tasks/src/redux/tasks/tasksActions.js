import { uuid } from 'uuidv4';
import { createAction } from '@reduxjs/toolkit';

// import actionTypes from './tasksActionTypes';

let addTask = createAction('tasks/add', text => ({
  type: 'tasks/add',
  payload: {
    task: {
      id: uuid(),
      text,
      completed: false,
    }
  }
})
);

let removeTask = createAction('tasks/remove');
let toggleCompleted = createAction('tasks/toggleCompleted');
let changeFilter = createAction('tasks/changeFilter');

export default {
  addTask,
  removeTask,
  toggleCompleted,
  changeFilter
};
