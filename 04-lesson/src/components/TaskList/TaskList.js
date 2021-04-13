import React from 'react'
import './TaskList.css';

// {
//   id: uuidv4(),
//     text: loremIpsum(),
//       completed: false,
//   }

// export default function TaskList({ tasks, onremoveTask }) {
//   return (
//     <ul className="TaskList">
//       {tasks.map(({ id, text }) => (<li className="TaskList-item" key={id}>
//         <p className="TaskList-text">{text}</p>
//         <section className="TaskList-actions">
//           <button
//             type='button' className="TaskList-button"
//             // onClick={onremoveTask}
//             // onClick={() => console.log(id)}
//             onClick={() => onremoveTask(id)}
//           >Delete task</button>
//         </section>
//       </li>))}
//     </ul>
//   )
// }

import TaskListItem from '../TaskListItem'

export default function TaskList({ tasks, onremoveTask }) {
  return (
    <ul className="TaskList">
      {tasks.map(({ id, text }) => (
        <TaskListItem key={id} text={text} onRemove={() => onremoveTask(id)} />
      ))}
    </ul>
  )
}
