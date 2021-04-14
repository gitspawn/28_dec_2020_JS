import React, { Component, PureComponent } from "react";
// PureComponent под капотом реализует shouldComponentUpdate

export default class Tabs extends Component {
  render() {
    console.log(`Re-render ${Date.now()}`);

    return (
      <>
        <div>Tabs</div>
      </>
    );
  }
}
