import React, { Component } from 'react';
import { uuid } from 'uuidv4';
import Layout from './Layout';
import TaskList from './TaskList';
import TaskEditor from './TaskEditor';
import Filter from './Filter';

export default class App extends Component {


  getVisibleTasks = () => {
    const { tasks, filter } = this.state;

    return tasks.filter(task =>
      task.text.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    // const { filter } = this.state;

    // const visibleTasks = this.getVisibleTasks();

    return (
      <Layout>
        <TaskEditor />
        <Filter />
        <TaskList />

        {/* <TaskEditor onAddTask={this.addTask} />
        {visibleTasks.length > 1 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}
        {visibleTasks.length > 0 && (
          <TaskList
            tasks={visibleTasks}
            onRemoveTask={this.removeTask}
            onUpdateTask={this.updateCompleted}
          />
        )} */}
      </Layout>
    );
  }
}
