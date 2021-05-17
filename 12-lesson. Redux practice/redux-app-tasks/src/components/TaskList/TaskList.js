import React from 'react';
import TaskListItem from '../TaskListItem';
import { connect } from 'react-redux';
import tasksActions from '../../redux/tasks/tasksActions';

import './TaskList.css';

const TaskList = ({ tasks, onRemoveTask, toggleCompleted }) => (
  <ul className="TaskList">
    {tasks.map(({ id, text, completed }) => (
      <TaskListItem
        key={id}
        text={text}
        completed={completed}
        onRemove={() => onRemoveTask(id)}
        onUpdate={() => toggleCompleted(id)}
      />
    ))}
  </ul>
);

// let mapStateToProps = state => ({
//   tasks: state.tasks.items
// });


// let mapStateToProps = state => {
//   const { items, filter } = state.tasks;
//   let visibleTasks = items.filter((task) => task.text.includes(filter));
//   return {
//     tasks: visibleTasks
//   };
// };

let mapStateToProps = state => {
  const { items, filter } = state.tasks;
  let normFilter = filter.toLocaleLowerCase();

  let visibleTasks = items.filter((task) => task.text.toLocaleLowerCase().includes(normFilter));
  return {
    tasks: visibleTasks
  };
};




let mapDispatchToProps = {
  onRemoveTask: tasksActions.removeTask,
  toggleCompleted: tasksActions.toggleCompleted
};


export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
