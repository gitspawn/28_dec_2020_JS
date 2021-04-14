// import React, { Component } from 'react';
// import Layout from './Layout'
// // import Counter from './Counter'
// import TaskList from './TaskList'
// import TaskEditor from './TaskEditor'
// import createTask from '../utils/create-task'
// import Filter from './Filter'

// class App extends Component {
//   static defaulProps = {}
//   static propTypes = {}

//   state = {
//     tasks: [],
//     filter: '',
//     firstName: 'Pluto',
//     lastName: 'Nash'
//   }

//   addTask = () => {
//     let task = createTask();
//     // console.log(task)
//     this.setState((prevState) => {
//       return {
//         tasks: [...prevState.tasks, task]
//       }
//     })
//   }

//   removeTask = (taskId) => {
//     // console.log('Remove task', taskId)
//     this.setState((prevState) => {
//       return {
//         // tasks: prevState.tasks.filter((task) => { return task.id !== taskId })
//         tasks: prevState.tasks.filter(({ id }) => id !== taskId)
//       }
//     })
//   }

//   changeFilter = (filter) => {
//     // console.log(filter)
//     this.setState({ filter })
//   }

//   // updateCompleted = (taskId) => {
//   //   this.setState((prevState) => {
//   //     return: {
//   //       tasks: prevState.tasks.map((task) => {
//   //         if (task.id === taskId) {
//   //           return {
//   //             ...task,
//   //             text:
//   //           }
//   //         }
//   //       })
//   //     }
//   //   })

//   // }

//   getVisibleTasks = () => {
//     let { tasks, filter } = this.state;
//     return tasks.filter((task) => task.text.toLowerCase().includes(filter.toLowerCase())
//     )
//   }

//   render() {
//     let { tasks, filter, firstName, lastName } = this.state
//     let fullName = firstName + ' ' + lastName

//     let visibleTasks = this.getVisibleTasks()
//     // console.log(visibleTasks)

//     return (
//       <Layout>
//         <h1>{fullName}</h1>

//         {visibleTasks.length > 1 && (<Filter value={filter} onChangeFilter={this.changeFilter} />)}

//         {/* <Filter value={filter} onChangeFilter={this.changeFilter} /> */}
//         <TaskEditor onAddTask={this.addTask} />
//         {visibleTasks.length > 0 && <TaskList tasks={tasks}
//           onremoveTask={this.removeTask}
//           onUpdateTask={this.updateCompleted}
//         />}
//       </Layout>
//     )
//   }
// }

// {/* <Counter />
// new Counter */}

// export default App

// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
// }

// let total = Object.values(state).reduce((acc, like) => {
//   return acc + like
// }, acc)

// { total }

// { this.changeFilter() }

// ======================================================
//Refactoring
import React, { Component } from "react";
import Layout from "./Layout";
import Tasks from "./Tasks/Tasks";

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Tasks></Tasks>
      </Layout>
    );
  }
}
