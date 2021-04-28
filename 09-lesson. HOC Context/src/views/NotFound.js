import React from "react";
import imagePath from "../assets/pusheen.jpg";
import { Link } from "react-router-dom";

let styles = {
  container: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  status: {
    fontSize: 46,
  },
};

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.status}>404</h1>
      {console.log(imagePath)}
      <img src={imagePath} alt="404 page" width="400" />
      <p>
        Такой страницы не существует. Вернуться{" "}
        {<Link to="/"> на главную</Link>}
      </p>
    </div>
  );
}
