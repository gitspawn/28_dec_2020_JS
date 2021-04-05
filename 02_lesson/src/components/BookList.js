import React from 'react'
import PropTypes from 'prop-types'
// Styled Components
import styled from 'styled-components'
console.log(styled);

let List = styled.ul`
  padding: 0;
  margin: 0;
  outline: 1px solid red;
`

let ListItem = styled.li`
  background-color: teal;
  margin-bottom: 8px;
  &:hover {
    background-color: white;
  }
  &:last-child: {
     margin-bottom: 0px;
  }
`

function BookList({ books }) {
  return (
    <List>
      {books.map((book) => (
        <ListItem key={book.id}>{book.name}</ListItem>
      ))}
    </List>
  )
}

// function BookList({ books }) {
//   return (
//     <ul>
//       {books.map((book) => (
//         <li key={book.id}>{book.name}</li>
//       ))}
//     </ul>
//   )
// }


BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.exact(
      {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      }
    )
  ).isRequired
}

export default BookList
// { "id": "id-1", "name": "React" },