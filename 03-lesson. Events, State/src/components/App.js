import React, { Component } from "react";
import Layout from "./Layout";
// import Counter from './Counter'
import TaskList from "./TaskList";
import TaskEditor from "./TaskEditor";
import createTask from "../utils/create-task";

class App extends Component {
  static defaulProps = {};
  static propTypes = {};

  state = {
    tasks: [],
  };

  addTask = () => {
    let task = createTask();
    // console.log(task)
    this.setState((prevState) => {
      return {
        tasks: [...prevState.tasks, task],
      };
    });
  };

  removeTask = (taskId) => {
    // console.log('Remove task', taskId)
    this.setState((prevState) => {
      return {
        // tasks: prevState.tasks.filter((task) => { return task.id !== taskId })
        tasks: prevState.tasks.filter(({ id }) => id !== taskId),
      };
    });
  };

  render() {
    let { tasks } = this.state;
    return (
      <Layout>
        {/* <Counter initialValue={0} step={5} /> */}
        {/* <TaskList tasks={this.state.tasks} /> */}
        <TaskEditor onAddTask={this.addTask} />
        {tasks.length > 0 && (
          <TaskList tasks={tasks} onremoveTask={this.removeTask} />
        )}
      </Layout>
    );
  }
}

{
  /* <Counter />
new Counter */
}

export default App;
