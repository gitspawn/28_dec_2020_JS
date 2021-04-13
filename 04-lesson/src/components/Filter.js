import React from 'react'

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event) => onChangeFilter(event.target.value)}
      />
    </div>
  )
}
