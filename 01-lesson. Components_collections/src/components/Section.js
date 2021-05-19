import React from "react";
import PropTypes from "prop-types";

function Section({ title, children }) {
  return (
    <section>
      {/* Conditional rendering  */}
      {/*       
      {null}
      {undefined}
      {false}
       */}
      {/* <h1>{title}</h1> */}
      {title && <h1>{title}</h1>}
      {children}
    </section>
  );
}

Section.defaultProps = {
  title: "Default title",
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
