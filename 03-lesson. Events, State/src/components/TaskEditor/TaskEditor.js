import React from 'react';
import './TaskEditor.css';

export default function TaskEditor({ onAddTask }) {
  return (
    <div className="TaskEditor">
      <button type="button" onClick={onAddTask}>
        Add task
      </button>
    </div>
  )
}


