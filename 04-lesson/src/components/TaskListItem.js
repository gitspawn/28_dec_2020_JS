import React from 'react'


export default function TaskListItem({ text, onRemove }) {
  return (
    <li className="TaskList-item">
      <p className="TaskList-text">{text}</p>
      <section className="TaskList-actions">
        <button
          type='button' className="TaskList-button"
          // onClick={onremoveTask}
          // onClick={() => console.log(id)}
          onClick={onRemove}
        >Delete task</button>
      </section>
    </li>
  )
}
