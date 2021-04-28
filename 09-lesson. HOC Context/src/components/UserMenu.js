import React from "react";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({}) => (
  <div style={styles.container}>
    <img src="" alt="" width="32" style={styles.avatar} />
    <span style={styles.name}>Welcome, </span>
    <button type="button">Log Out</button>
  </div>
);

export default UserMenu;
