import React, { Component } from "react";
import AuthContext from "../contexts/Auth";

const styles = {
  form: {
    padding: 8,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 16,
  },
  text: {
    marginBottom: 8,
  },
  input: {
    padding: 8,
  },
};

class CommentForm extends Component {
  render() {
    return (<AuthContext.Consumer>
      {({name})=>(
      <form style={styles.form}>
        <label style={styles.label}>
          <span style={styles.text}>Name</span>
          <input type="text" style={styles.input} value={name} />
        </label>

        <label style={styles.label}>
          <span style={styles.text}>Message</span>
          <textarea style={styles.input} rows="10"></textarea>
        </label>
      </form>
    )}
    </AuthContext.Consumer>)
  }
}

export default CommentForm;
