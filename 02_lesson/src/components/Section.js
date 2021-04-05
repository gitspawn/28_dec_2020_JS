import React from 'react'
import PropTypes from 'prop-types'

function Section({ title, children }) {
  return (
    <section>
      {/* 
      {false}
      {null}
      {undefined} */}

      {title && <h1>{title}</h1>}
      {/* <h1>{title}</h1> */}
      {children}
    </section>
  )
}

// Section.defaultProps = {
//   title: 'No title'
// }

// Section.protoTypes = {
//   title: PropTypes.string,
//   children: PropTypes.node.isRequired
// }

export default Section

