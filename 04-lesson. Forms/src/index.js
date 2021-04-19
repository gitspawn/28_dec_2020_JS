import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import SignupForm from './components/SignupForm'
import './base.css'
// CSS modules global styles
// import './base.module.css'

// ReactDom.render(<SignupForm />, document.querySelector("#root"));
ReactDom.render(<App />, document.querySelector("#root"));
